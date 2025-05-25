import SaucePage from '../../pageobjects/SaucePage';

const saucePage = new SaucePage();

Given('que o usuário está logado no SauceDemo', () => {
  cy.visit('https://www.saucedemo.com');
  saucePage.login('standard_user', 'secret_sauce');
});

When('ele adiciona um produto ao carrinho', () => {
  saucePage.addFirstItemToCart();
});

Then('o produto deve aparecer no carrinho', () => {
  saucePage.goToCart();
  saucePage.checkCartHasItem();
});
