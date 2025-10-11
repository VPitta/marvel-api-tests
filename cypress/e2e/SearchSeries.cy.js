import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API com fixture', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar Wolverine e ver detalhes de Series', () => {
    // Intercepta a API e devolve fixture
    cy.intercept('GET', '/api/characters/*/details*', { fixture: 'wolverine-details.json' }).as('getDetails');


    // Pesquisa o personagem
    hero.searchField('Wolverine');
    hero.searchSubmit();

    // Espera o elemento aparecer no DOM
    hero.elements.searchMessage({ timeout: 15000 })
      .should('be.visible')
      .and('contain', 'Wolverine (LEGO Marvel Super Heroes)');

    // Intercepta detalhes com fixture (opcional)
    cy.intercept('GET', '/api/characters/*/details*', {
      fixture: 'wolverine-details.json'
    }).as('getDetails');

    // Pesquisa por séries e clica em detalhes
    hero.searchSeriesField('Avengers');
    hero.detailsButton();

    // Espera o botão de voltar aparecer
    hero.elements.backButton({ timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Voltar');
  });
});
