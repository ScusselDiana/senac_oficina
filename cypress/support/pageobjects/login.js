class LoginPage {
    // Seletor do campo de email
    get emailField() {
      return cy.get("input[name='username']");
    }
  
    // Seletor do campo de senha
    get passwordField() {
      return cy.get("input[name='password']");
    }
  
    // Seletor do botão de login
    get loginButton() {
      return cy.get("button[type='submit']");
    }
  
    // Seletor da mensagem de sucesso após login
    get successMessage() {
      return cy.get("div.flash.success");
    }
  
    // Método para fazer login
    login(username, password) {
      this.emailField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }
  
    // Método para verificar o sucesso ou erro no login
    verifyLoginMessage(message) {
      this.successMessage.should("contain", message);
    }
  }
  
  export default new LoginPage();
  