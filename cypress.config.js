const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/api/**/*.cy.{js,jsx,ts,tsx}"
    ],
    baseUrl: "https://gateway.marvel.com/v1/public/",

  },
});
