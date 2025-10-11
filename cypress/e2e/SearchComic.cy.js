import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API - Sem depender de intercept', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve listar Wolverine e ver detalhes de Comics', () => {
    // Pesquisa o personagem
    hero.searchField('Wolverine');
    hero.searchSubmit();

    // Espera o elemento aparecer no DOM com timeout maior
    hero.elements.searchMessage({ timeout: 15000 }) // até 15s para aparecer
      .should('be.visible')
      .and('contain', 'Wolverine (LEGO Marvel Super Heroes)');

    // Agora podemos interagir com detalhes
    hero.searchComicsField('Avengers');
    hero.detailsButton();

    // Espera o botão de voltar aparecer
    hero.elements.backButton({ timeout: 15000 })
      .should('be.visible')
      .and('contain', 'Voltar');
  });
});
