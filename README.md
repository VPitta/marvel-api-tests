<h1 align="center">🦸‍♂️ Marvel API Tests</h1>

<p align="center">
Projeto de testes da <b>Marvel Comics API</b>, realizado como parte do estudo de automação de testes com <b>Postman</b> e <b>Cypress</b>.  
O objetivo é validar os principais endpoints da API da Marvel, garantindo que os dados de personagens, HQs e séries sejam retornados corretamente e estejam de acordo com as regras de autenticação da API.
</p>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" width="50px" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="50px"/>  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50px" /> 
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50px"/>  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="50px"/>  
</p>

---

## 🚀 Tecnologias Utilizadas

<div align="center">

| Ferramenta | Finalidade |
|-------------|-------------|
| 🧪 **Postman** | Testes manuais e scripts automatizados |
| ⚙️ **Cypress** | Testes automatizados de API e E2E |
| 💻 **JavaScript** | Linguagem base dos scripts |
| 🕸️ **Marvel Comics API** | Fonte dos dados testados |
| 🗂️ **GitHub** | Controle de versão e documentação |

</div>

---

## 🔗 Endpoints Testados

### 🔹 Characters
- `/v1/public/characters` → Lista todos os personagens  
- `/v1/public/characters?name=Wolverine` → Busca por personagem específico  

### 🔹 Comics
- `/v1/public/comics` → Lista de quadrinhos  
- `/v1/public/comics?characters=1009718&format=comic` → Filtro por personagem (ex.: Wolverine)  

### 🔹 Series
- `/v1/public/series` → Lista de séries  
- `/v1/public/series?characters=1009718` → Filtro por personagem (ex.: Wolverine)

---

## 🔐 Autenticação

A Marvel API exige autenticação com os parâmetros:
- `ts` → timestamp  
- `apikey` → public key  
- `hash` → MD5 gerado a partir de `ts + privateKey + publicKey`

> 💡 A **private key** é mantida localmente.  
> No Postman, as variáveis `ts`, `hash` e `apikey` foram configuradas em **Environment Variables** para evitar exposição da chave privada.

---

## 🧭 Roadmap do Projeto

| Semana | Atividade | Status |
|:------:|:-----------|:------:|
| 🗓️ 1 | Configuração do ambiente e autenticação | ✅ Concluído |
| 🗓️ 2 | Testes de API com Postman e Cypress | ✅ Concluído |
| 🗓️ 3 | Testes manuais e comparativos | ✅ Concluído |
| 🗓️ 4 | Testes E2E com interface web simples | ⚙️ Em andamento |
| 🗓️ 5 | Refinamento e documentação final | 🕓 Pendente |

---

### 📅 Detalhamento das Semanas

#### 🧰 Semana 1 – Configuração do Ambiente
- Criação de conta no [Marvel Developer Portal](https://developer.marvel.com/)  
- Geração das chaves pública e privada  
- Documentação dos endpoints base  
- Testes de autenticação inicial  
✅ **Status:** Concluído  

#### 🧪 Semana 2 – Testes de API com Postman e Cypress
- Validação de status code, campos e filtros  
- Criação de scripts automatizados no Postman  
- Automação equivalente no Cypress  
✅ **Status:** Concluído  

#### 📋 Semana 3 – Testes Manuais e Comparativos
- Casos de teste documentados (pré-condições, passos e resultados esperados)  
- Comparação entre Postman (manual) e Cypress (automatizado)  
✅ **Status:** Concluído  

#### 💻 Semana 4 – Testes E2E (Front + API)
- Criação de interface simples com HTML + JS  
- Exibição da lista de personagens e busca por nome  
- Testes E2E no Cypress validando integração  
✅ **Status:** Concluído  

#### 📘 Semana 5 – Refinamento e Documentação Final
- Organização final do repositório  
- Preparação para portfólio  
🕓 **Status:** Pendente  

---

## 🗃️ Estrutura do Projeto
```
MARVEL-API-TESTS
│
├─ cypress/
│ ├─ api/ # Testes da API (characters, comics, series)
│ ├─ e2e/ # Testes end-to-end
| ├─ pages/ # Pages Objects
│ ├─ fixtures/ # Dados de exemplo
│ └─ support/ # Comandos e utilitários
│
├─ docs/
| ├─ manual-tests-videos/ # Vídeos dos testes manuais da interface (HTML+JS)
│ ├─ e2e-api-screenshots/ # Capturas dos testes Cypress
│ └─ postman-api-screenshots/ # Capturas dos testes Postman
|
├─ postman/ # Arquivo. JSON exportado do Postman
│
├── public/
│   ├── index.html  # Página principal da interface Marvel
│   ├── style.css  # Estilos e layout Marvel-style
│   └── app.js   # Estilos e layout Marvel-style
|
├── server.js  # Servidor Node/Express + integração com Marvel API
└─ README.md
```
---

## 🧠 Aprendizados

- Autenticação e assinatura de requisições  
- Escrita de scripts automatizados no Postman  
- Automação de testes de API e E2E com Cypress  
- Boas práticas de versionamento e documentação técnica  

--- ## 📸 Evidências dos Testes 
📷 **Postman:** Status 200 e validações de campos 
📷 **Cypress:** Logs de execução automatizados

*(as imagens serão adicionadas na pasta /docs/evidences)* ---

---

## 👨‍💻 Autor

**Vinicius Gonçalves da Silva Pita**  
🎯 Desenvolvedor em formação | QA & Automação de Testes | Java & JavaScript  

📎 [LinkedIn](https://www.linkedin.com/in/vinicius-pita)  
📁 [GitHub](https://github.com/VPitta)

---

<p align="center">
  <i>“Testar é garantir que o herói da sua aplicação sobreviva até o próximo deploy.”</i> 🦸‍♂️
</p>
