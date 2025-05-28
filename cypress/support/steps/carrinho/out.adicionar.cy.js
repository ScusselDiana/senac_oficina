import SaucePage from '../../pageobjects/SaucePage';    
import InventoryPage from '../../pageobjects/InventoryPage';

const login = new SaucePage();
const inventory= new InventoryPage();

Given('que o usuário está logado no site SauceDemo', () => {
  cy.visit('https://www.saucedemo.com');
 
  login.login('standard_user', 'secret_sauce');
});

When('ele adiciona os produtos ao carrinho', (dataTable) => {
  const produtos = dataTable.raw().flat(); // ou: dataTable.rows().map(row => row[0]);

  produtos.forEach((produto) => {
    inventory.adicionarProdutoAoCarrinho(produto);
  });
});

When('ele adiciona o produto {string}', (produto) => {
  inventory.adicionarProdutoAoCarrinho(produto);
});

Then('o carrinho deve conter {int} itens', (quantidade) => {
  inventory.itenscarrinho(quantidade);
});
