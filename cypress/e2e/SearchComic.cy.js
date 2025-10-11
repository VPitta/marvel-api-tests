import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar personagens e buscar Comics do Wolverine', () => {
    // Intercepta a requisição local da API de personagens
    cy.intercept('GET', '/api/characters*').as('getCharacters');

    // Pesquisa o personagem
    hero.searchField('Wolverine');
    hero.searchSubmit();

    // Espera a API responder antes de verificar resultados
    cy.wait('@getCharacters').its('response.statusCode').should((status) => {
      expect([200, 304]).to.include(status);
    });

    // Verifica que o personagem apareceu
    hero.elements.searchMessage()
      .should('be.visible')
      .and('contain', 'Wolverine');

    // Intercepta requisição de detalhes
    cy.intercept('GET', '/api/characters/*/details*').as('getDetails');

    // Pesquisa pela comics e clica no botão de detalhes
    hero.searchComicsField('Avengers');
    hero.detailsButton();

    // Espera a resposta da API de detalhes
    cy.wait('@getDetails').its('response.statusCode').should((status) => {
      expect([200, 304]).to.include(status);
    });

    // Verifica o botão de voltar
    hero.elements.backButton()
      .should('be.visible')
      .and('contain', 'Voltar');
  });
});
