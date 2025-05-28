class LoginPage {
    login(usuario, senha) {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type(usuario);
      cy.get('[data-test="password"]').type(senha);
      cy.get('[data-test="login-button"]').click();
    }
  }

  export default LoginPage;
