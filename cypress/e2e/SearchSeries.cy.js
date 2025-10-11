import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API com fixture', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar Wolverine e ver detalhes de Series', () => {
    // Intercepta a API principal de personagens
    cy.intercept('GET', '/api/characters*', { fixture: 'wolverine.json' }).as('getCharacters');

    // Intercepta a API de detalhes
    cy.intercept('GET', '/api/characters/*/details*', { fixture: 'wolverine-details.json' }).as('getDetails');

    // Pesquisa o personagem
    hero.searchField("Wolverine");
    hero.searchSubmit();

    // Espera a resposta da API de personagens
    cy.wait('@getCharacters', { timeout: 15000 });

    // Verifica se o Wolverine apareceu
    hero.elements.searchMessage({ timeout: 15000 })
      .should('be.visible')
      .and('contain', 'Wolverine (LEGO Marvel Super Heroes)');

    // Pesquisa por Series e clica em detalhes
    hero.searchSeriesField('Avengers');
    hero.detailsButton();

    // Espera o botão de voltar aparecer
    hero.elements.backButton({ timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Voltar');
  });
});
