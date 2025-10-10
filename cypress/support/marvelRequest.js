const md5 = require('crypto-js/md5');

Cypress.Commands.add('marvelRequest', (endpoint, params = {}) => {
  const ts = new Date().getTime();
  const publicKey = Cypress.env('MARVEL_PUBLIC_KEY');
  const privateKey = Cypress.env('MARVEL_PRIVATE_KEY');
  const hash = md5(ts + privateKey + publicKey).toString();

  // Monta a query string com ts, apikey, hash + params extras
  const query = new URLSearchParams({
    ts,
    apikey: publicKey,
    hash,
    ...params
  }).toString();

  return cy.request({
    method: 'GET',
    url: `https://gateway.marvel.com/v1/public/${endpoint}?${query}`
  });
});