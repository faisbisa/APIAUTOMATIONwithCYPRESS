const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://kasir-api.belajarqa.com",
    specPattern : "cypress/support/e2e", //loc runner
    supportFile : false,
  },
  env: {
    username : "fais-QAE1",
    password : "123456"
  }
});
