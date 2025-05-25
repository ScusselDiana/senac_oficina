Given("Eu acesso o site {string}", (url) => {
    cy.visit(url);
  });
  
  When("Eu preencho o campo de usuário com {string}", (username) => {
    cy.get("input[name='username']").type(username);
  });
  
  When("Eu preencho o campo de senha com {string}", (password) => {
    cy.get("input[name='password']").type(password);
  });
  
  When("Eu clico no botão de login", () => {
    cy.get("button[type='submit']").click();
  });
  
  Then("Eu devo ver a mensagem de sucesso {string}", (message) => {
    cy.get("div.flash.success").should("contain", message);
  });
  