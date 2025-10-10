
Cypress.Commands.add("searchHeroAndCheck", (hero, heroName, expectedText) => {
  // Intercepta a requisição da API
  cy.intercept('GET', '/api/characters*').as('getCharacters');

  // Digita o nome do herói e envia
  hero.searchField(heroName);
  hero.searchSubmit();

  // Espera a resposta da API (200 ou 304)
  cy.wait('@getCharacters').its('response.statusCode').should((status) => {
    expect([200, 304]).to.include(status);
  });

  // Verifica o conteúdo renderizado na página
  hero.elements.searchMessage()
    .should('be.visible')
    .should('contain', expectedText);
});
