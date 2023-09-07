const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.js',
    baseUrl: 'https://abr.business.gov.au/'
  }
}
);

