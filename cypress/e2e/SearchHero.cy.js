import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API - Pesquisa Wolverine', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar Wolverine na tela', () => {
    // Intercepta a API de personagens e retorna fixture
    cy.intercept('GET', '/api/characters*', { fixture: 'wolverine.json' }).as('getCharacters');

    // Pesquisa o personagem
    hero.searchField("Wolverine");
    hero.searchSubmit();

    // Espera a resposta da "API"
    cy.wait('@getCharacters', { timeout: 15000 });

    // Verifica se o Wolverine aparece no DOM
    hero.elements.searchMessage({ timeout: 15000 })
      .should('be.visible')
      .and('contain', "Wolverine (LEGO Marvel Super Heroes)");
  });
});
