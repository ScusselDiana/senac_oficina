class InventoryPage {
  
  adicionarProdutoAoCarrinho(produto) {
  cy.contains('.inventory_item_name', produto)
    .parents('.inventory_item')
    .contains('Add to cart')
    .click();
}

  
    cartShouldHaveItemCount(count) {
      cy.get('.shopping_cart_badge').should('have.text', count.toString());
    }
  }
  
  export default InventoryPage;
  