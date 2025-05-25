import LoginPage from "../../pageobjects/login";

Given("Eu acesso o site de login", () => {
  const url = Cypress.env('baseUrl'); // A URL é obtida do cypress.env.json
  cy.visit(`${url}/login`);
});

When("Eu preencho o campo de usuário e senha e clico em login", () => {
  const { email, senha } = Cypress.env('usuario'); // Obtendo usuário e senha do cypress.env.json
  LoginPage.login(email, senha); // Usando o método login da Page Object
});

Then("Eu devo ver a mensagem de sucesso {string}", (message) => {
  LoginPage.verifyLoginSuccess(message); // Verificando a mensagem de sucesso após o login
});
