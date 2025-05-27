const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
   
  e2e: {
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 50000,
    responseTimeout: 50000,
    requestTimeout: 50000,
    waitForAnimations: true,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    experimentalModifyObstructiveThirdPartyCode: true, 
    env: {
      "TAGS": "not @ignore",
      "NODE_TLS_REJECT_UNAUTHORIZED": 0
    },
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    projectId: "56cbau", // Adicionando o projectId aqui
    parallel: true, // Habilitando a execução paralela
    record: true, // Habilitando o registro dos resultados dos testes
    group: true // Agrupando os resultados dos testes em uma única execução
  }
});
