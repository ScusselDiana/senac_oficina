
import LoginPage from "../../pageobjects/login";

Given("Eu acesso o site de login", () => {
  const url = Cypress.env('baseUrl'); // A URL é obtida do cypress.env.json
  cy.visit(`${url}/login`);
});

When("Eu preencho o campo de usuário com {string}", (username) => {
  LoginPage.emailField.type(username);
});

When("Eu preencho o campo de senha com {string}", (password) => {
  LoginPage.passwordField.type(password);
});

When("Eu clico no botão de login", () => {
  LoginPage.loginButton.click();
});

Then("Eu devo ver a mensagem {string}", (message) => {
  
  cy.get('#flash-messages', { timeout: 10000 })
    .should('be.visible')
    .and('contain', message);
});
