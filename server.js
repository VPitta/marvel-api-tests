import express from "express";
import md5 from "crypto-js/md5.js";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config({ path: "./chaves.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Lista personagens ou pesquisa por nome
app.get("/api/characters", async (req, res) => {
  try {
    const { name, offset = 0 } = req.query;
    const ts = new Date().getTime();
    const hash = md5(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`).toString();

    const queryParam = name ? `nameStartsWith=${encodeURIComponent(name)}&` : "";
    const url = `https://gateway.marvel.com/v1/public/characters?${queryParam}ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&limit=20&offset=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar personagens" });
  }
});

// Detalhes do personagem (comics e séries)
app.get("/api/characters/:id/details", async (req, res) => {
  try {
    const { id } = req.params;
    const { comicTitle = "", seriesTitle = "" } = req.query;
    const ts = new Date().getTime();
    const hash = md5(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`).toString();

    const endpoints = ["comics", "series"];
    const results = {};

    for (const e of endpoints) {
      let url = `https://gateway.marvel.com/v1/public/characters/${id}/${e}?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&limit=10`;
      if (e === "comics" && comicTitle) url += `&titleStartsWith=${encodeURIComponent(comicTitle)}`;
      if (e === "series" && seriesTitle) url += `&titleStartsWith=${encodeURIComponent(seriesTitle)}`;

      const response = await fetch(url);
      const data = await response.json();
      results[e] = data.data.results;
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar detalhes do personagem" });
  }
});

app.listen(PORT, () => console.log(`🚀 Servidor rodando: http://localhost:${PORT}`));
