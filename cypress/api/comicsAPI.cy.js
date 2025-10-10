describe('Marvel API - Comics', () => {

  it('Deve retornar todas as comics', () => {
    cy.marvelRequest('comics').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.results).to.be.an('array');
    });
  });

  it('Deve retornar comics do Wolverine', () => {
    cy.marvelRequest('characters/1009718/comics').then((response) => {
      expect(response.status).to.equal(200);
      const titles = response.body.data.results.map(c => c.title.toLowerCase());
      expect(titles.some(title => title.includes('wolverine'))).to.be.true;
    });
  });

});
