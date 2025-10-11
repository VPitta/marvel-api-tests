import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar personagens e buscar detalhes do Wolverine', () => {
    // Intercepta a chamada para a API
    cy.intercept('GET', '/api/characters*').as('getCharacters');

    // Digita e envia
    hero.searchField("Wolverine");
    hero.searchSubmit();

    // Espera a resposta da API antes de verificar o DOM
    cy.wait('@getCharacters', { timeout: 15000 }) // timeout maior
      .its('response.statusCode')
      .should((status) => {
        expect([200, 304]).to.include(status);
      });

    // Depois verifica o conteúdo renderizado
    hero.elements.searchMessage({ timeout: 15000 }) // timeout maior
      .should('be.visible')
      .and('contain', "Wolverine (LEGO Marvel Super Heroes)");
  });

  // Existe um command para as outras E2E que faz todo esse teste!!
});
