import LoginPage from '../../pageobjects/loginPage';
import InventoryPage from '../../pageobjects/InventoryPage';
import CartPage from '../../action/cartpage';
import loginpage  from '../../common/loginpage'

//const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('que o usuário está logado no sistema SauceDemo', () => {
  //loginPage.login('standard_user', 'secret_sauce');
  cy.realizaLoginSauceDemo();
});

Given('que o usuário adicionou o produto {string} ao carrinho', (produto) => {
  inventoryPage.adicionarProdutoAoCarrinho(produto);
});

When('o usuário acessa o carrinho', () => {
  cy.get('.shopping_cart_link').click();
});

When('remove o produto {string}', (produto) => {
  cartPage.removerProduto(produto);
});

Then('o carrinho não deve exibir o produto {string}', (produto) => {
  cy.contains('.cart_item', produto).should('not.exist');
});