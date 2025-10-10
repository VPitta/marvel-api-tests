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

    // Espera a resposta da API
    cy.wait('@getCharacters').its('response.statusCode')
    .should((status) => {
    expect([200, 304]).to.include(status);
    }),

    // Depois verifica o conteúdo renderizado
    hero.elements.searchMessage()
      .should('be.visible')
      .should('contain', "Wolverine (LEGO Marvel Super Heroes)");

  });

  //Existe um commnds para as outras e2e que faz todos esse teste!!
  
});
