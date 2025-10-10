describe('Marvel API - Series', () => {

  it('Deve retornar todas as séries', () => {
    cy.marvelRequest('series').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.results).to.be.an('array');
    });
  });

  it('Deve retornar as séries do Wolverine', () => {
    cy.marvelRequest('characters/1009718/series').then((response) => {
      expect(response.status).to.equal(200);
      const titles = response.body.data.results.map(s => s.title.toLowerCase());
      expect(titles.some(title => title.includes('wolverine'))).to.be.true;
    });
  });
});
