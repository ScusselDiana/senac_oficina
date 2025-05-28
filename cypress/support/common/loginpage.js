import LoginPage from '../pageobjects/loginPage';
  
Cypress.Commands.add('realizaLoginSauceDemo', () => {
    const loginPage = new LoginPage();
    loginPage.login('standard_user', 'secret_sauce');
  });
  