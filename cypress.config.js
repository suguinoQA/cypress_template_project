const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: '',
  },
  env: {
    dev_url: 'https://example-dev.com',
    prd_url: 'https://example-prd.com',
  }
});
