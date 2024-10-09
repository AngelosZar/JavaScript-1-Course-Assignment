const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // defaultCommandTimeout: 10000,
    // requestTimeout: 15000,
    // responseTimeout: 15000,
  },
});

// Change the assersion in the test
// it('Cypress APIs', () => {
//   expect(Cypress.config('defaultCommandTimeout')).to.eq(10000);
// });
