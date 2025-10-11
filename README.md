<h1 align="center">🦸‍♂️ Marvel API Tests</h1>

<p align="center">
Projeto completo de QA e automação de testes, utilizando a <b>Marvel Comics API</b>.  
O objetivo é validar os principais endpoints da API, garantindo que os dados de personagens, HQs e séries sejam retornados corretamente e que a interface responda corretamente.

</p>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" width="50px" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="50px"/>  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50px" /> 
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50px"/>  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="50px"/>  
</p>

---

<h2 align="center">🚀 Tecnologias Utilizadas</h2>

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

<h2 align="center">🔗 Endpoints Testados</h2>

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

<h2 align="center">🔐 Autenticação</h2>

A Marvel API exige autenticação com os parâmetros:
- `ts` → timestamp  
- `apikey` → public key  
- `hash` → MD5 gerado a partir de `ts + privateKey + publicKey`

> 💡 A **private key** é mantida localmente.  
> No Postman, as variáveis `ts`, `hash` e `apikey` foram configuradas em **Environment Variables** para evitar exposição da chave privada.

---

<h2 align="center">🧭 Roadmap do Projeto</h2>

<div align="center">
  
| Etapa | Atividade | Status |
|:------:|:-----------|:------:|
| 🗓️ 1 | Configuração do ambiente e autenticação | ✅ Concluído |
| 🗓️ 2 | Testes de API com Postman e Cypress | ✅ Concluído |
| 🗓️ 3 | Testes manuais e comparativos | ✅ Concluído |
| 🗓️ 4 | Testes E2E com interface web simples | ✅ Concluído |
| 🗓️ 5 | Refinamento e documentação final | ✅ Concluído |

</div>

---

<h2 align="center">📅 Detalhamento das Estapas</h2>

#### 1 – Configuração do Ambiente
- Criação de conta no [Marvel Developer Portal](https://developer.marvel.com/)  
- Geração das chaves pública e privada  
- Documentação dos endpoints base  
- Testes de autenticação inicial  
✅ **Status:** Concluído  

#### 2 – Testes de API com Postman e Cypress
- Validação de status code, campos e filtros  
- Criação de scripts automatizados no Postman  
- Automação equivalente no Cypress  
✅ **Status:** Concluído  

#### 3 – Testes Manuais e Comparativos
- Casos de teste documentados (pré-condições, passos e resultados esperados)  
- Comparação entre Postman (manual) e Cypress (automatizado)  
✅ **Status:** Concluído  

#### 4 – Testes E2E (Front + API)
- Criação de interface simples com HTML + JS  
- Exibição da lista de personagens e busca por nome  
- Testes E2E no Cypress validando integração  
✅ **Status:** Concluído  

### 5 – CI/CD e Documentação Final
- Configuração de pipelines no **GitHub Actions** para execução automática dos testes Cypress e Postman  
- Integração contínua: testes rodando a cada push ou PR  
- Organização final do repositório e preparação para portfólio  
✅ **Status:** Concluído 

---

<h2 align="center">🗃️ Estrutura do Projeto</h2>

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

<h2 align="center">🧠 Aprendizado</h2>

- Autenticação e assinatura de requisições  
- Escrita de scripts automatizados no Postman  
- Automação de testes de API e E2E com Cypress  
- Boas práticas de versionamento e documentação técnica  

<h2 align="center"> 📸 Evidências dos Testes </h2>

📷 **Postman:** Status 200 e validações de campos  
📷 **Cypress:** Logs de execução automatizados

*(as imagens serão adicionadas na pasta /docs/evidences)*

---

<h2 align="center">👨‍💻 Autor</h2>

<p align="center"><b>Vinicius Gonçalves da Silva Pita</b></p>  
<p align="center">🎯 Desenvolvedor em formação | QA & Automação de Testes | JavaScript | Cypress | Postman </p>  

<p align="center">
<a href="https://www.linkedin.com/in/vinicius-pita/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="https://github.com/VPitta"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
</p>

---

<p align="center">
  <i>“Testar é garantir que o herói da sua aplicação sobreviva até o próximo deploy.”</i> 🦸‍♂️
</p>
