describe('Marvel API - Characters', () => {

  it('Deve retornar todos os personagens', () => {
    cy.marvelRequest('characters').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.results).to.be.an('array');
    });
  });

  it('Deve retornar o personagem Wolverine', () => {
    cy.marvelRequest('characters/1009718').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.results[0]).to.have.property('name', 'Wolverine');
    });
  });
});
