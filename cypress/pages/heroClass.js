class Hero {

    elements = {
        searchField: () => cy.get('#searchInput'),
        searchSubmit: () => cy.get('#searchBtn'),
        searchMessage: () => cy.get('[data-test="search-message"]'),
        searchComicsField: () => cy.get('#comic-1009718'),
        searchSeriesField: () => cy.get('#series-1009718'),
        detailsButton: () => cy.get(':nth-child(1) > .details-search > button'),
        backButton:() => cy.get('.details-container > button', { timeout: 10000 }),
    }

    searchField(value) {
        this.elements.searchField().type(value);
    }

    searchSubmit() {
        this.elements.searchSubmit().click();
    }

    searchComicsField(value) {
        this.elements.searchComicsField().clear().type(value)
    }

    searchSeriesField(value) {
        this.elements.searchSeriesField().clear().type(value)
    }

    detailsButton() {
        this.elements.detailsButton().click();
    }

}



export default new Hero();