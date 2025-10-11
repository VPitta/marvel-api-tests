import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API - Comics', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve buscar Wolverine e ver detalhes de Comics', () => {
    // Intercepta a chamada da API local de personagens
    cy.intercept('GET', '/api/characters*').as('getCharacters');

    // Pesquisa o personagem
    hero.searchField('Wolverine');
    hero.searchSubmit();

    // Espera a API responder antes de validar o DOM
    cy.wait('@getCharacters', { timeout: 10000 }) // timeout maior
      .its('response.statusCode')
      .should((status) => {
        expect([200, 304]).to.include(status);
      });

    // Verifica se o personagem apareceu
    hero.elements.searchMessage({ timeout: 10000 }) // aumenta timeout
      .should('be.visible')
      .and('contain', 'Wolverine');

    // Intercepta requisição de detalhes (comics/series)
    cy.intercept('GET', '/api/characters/*/details*').as('getDetails');

    // Pesquisa pela comic e clica no botão de detalhes
    hero.searchComicsField('Avengers');
    hero.detailsButton();

    // Espera a API de detalhes responder
    cy.wait('@getDetails', { timeout: 10000 })
      .its('response.statusCode')
      .should((status) => {
        expect([200, 304]).to.include(status);
      });

    // Verifica botão de voltar
    hero.elements.backButton({ timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Voltar');
  });
});
