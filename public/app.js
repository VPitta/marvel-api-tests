const resultsContainer = document.getElementById("resultsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

let offset = 0;
let currentSearch = "";

searchBtn.addEventListener("click", () => {
  offset = 0;
  currentSearch = searchInput.value.trim();
  buscarPersonagens(currentSearch, offset);
});

// Buscar personagens
async function buscarPersonagens(nome = "", offset = 0) {
  resultsContainer.innerHTML = "<p>🔎 Buscando...</p>";

  try {
    const response = await fetch(`/api/characters?name=${encodeURIComponent(nome)}&offset=${offset}`);
    const data = await response.json();

    if (!data.data?.results?.length) {
      resultsContainer.innerHTML = "<p>Nenhum personagem encontrado 😢</p>";
      return;
    }

resultsContainer.innerHTML = data.data.results
  .map(
    char => `
      <div class="character-card" data-test="hero-result">
        <img src="${char.thumbnail.path}.${char.thumbnail.extension}" alt="${char.name}">
        <h3 data-test="search-message">${char.name}</h3>
        <div class="details-search">
          <input type="text" placeholder="Pesquisar comic" id="comic-${char.id}">
          <input type="text" placeholder="Pesquisar série" id="series-${char.id}">
          <button data-test="details-btn" onclick="verDetalhes(${char.id})">Ver Detalhes</button>
        </div>
      </div>`
  )
  .join("");
  } catch (err) {
    console.error(err);
    resultsContainer.innerHTML = "<p>Erro ao buscar personagens 😞</p>";
  }
}

// Ver detalhes do personagem com filtros
async function verDetalhes(id) {
  const comicTitle = document.getElementById(`comic-${id}`).value.trim();
  const seriesTitle = document.getElementById(`series-${id}`).value.trim();

  try {
    const response = await fetch(`/api/characters/${id}/details?comicTitle=${encodeURIComponent(comicTitle)}&seriesTitle=${encodeURIComponent(seriesTitle)}`);
    const data = await response.json();

    // Renderiza detalhes
const detailsHTML = `
  <div class="details-container">
    <h2>Detalhes do personagem</h2>
    <h3>Comics ${comicTitle ? `(Filtrado: ${comicTitle})` : ""}</h3>
    <ul>${data.comics.map(c => `<li>${c.title}</li>`).join("")}</ul>
    <h3>Séries ${seriesTitle ? `(Filtrado: ${seriesTitle})` : ""}</h3>
    <ul>${data.series.map(s => `<li>${s.title}</li>`).join("")}</ul>
    <button data-test="back-btn" onclick="voltar()">Voltar</button>
  </div>
`;
resultsContainer.innerHTML = detailsHTML;
  } catch (err) {
    console.error(err);
    resultsContainer.innerHTML = "<p>Erro ao buscar detalhes 😞</p>";
  }
}

function renderDetails(data, comicTitle, seriesTitle) {
  const detailsContainer = document.getElementById("detailsContainer");
  detailsContainer.innerHTML = `
    <div class="details-container">
      <h2>Detalhes do personagem</h2>
      <h3>Comics ${comicTitle ? `(Filtrado: ${comicTitle})` : ""}</h3>
      <ul>${data.comics.map(c => `<li>${c.title}</li>`).join("")}</ul>
      <h3>Séries ${seriesTitle ? `(Filtrado: ${seriesTitle})` : ""}</h3>
      <ul>${data.series.map(s => `<li>${s.title}</li>`).join("")}</ul>
      <button onclick="voltar()">Voltar</button>
    </div>
  `;
}

function voltar() {
  document.getElementById("detailsContainer").innerHTML = "";
}

// Carrega todos os personagens na inicialização
buscarPersonagens();
