import hero from "../pages/heroClass";

describe('Fluxo E2E - Marvel API', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Deve listar personagens e buscar de Comics do Wolverine', () => {
        // Pesquisa o personagem e garante que aparece na tela
        cy.searchHeroAndCheck(hero, "Wolverine", "Wolverine (LEGO Marvel Super Heroes)");

        // Intercepta a requisição de detalhes (comics/series)
        cy.intercept('GET', '/api/characters/*/details*').as('getDetails');

        // Pesquisa pela série e clica no botão de detalhes
        hero.searchComicsField("Avengers");
        hero.detailsButton();

        // Espera a resposta da API antes de prosseguir
        cy.wait('@getDetails')
            .its('response.statusCode')
            .should((status) => {
                expect([200, 304]).to.include(status);
            });

        // Só depois verifica o botão de voltar
        hero.elements.backButton()
            .should('be.visible')
            .should('contain', "Voltar");
        // .click() se quiser retornar
    });
});
