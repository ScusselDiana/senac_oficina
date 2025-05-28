class InventoryPage {
  
  adicionarProdutoAoCarrinho(produto) {
  cy.contains('.inventory_item_name', produto)
    .parents('.inventory_item')
    .contains('Add to cart')
    .click();
}

  
    itenscarrinho(count) {
      cy.get('.shopping_cart_badge').should('have.text', count.toString());
    }

    removeprodutocarrinho(productName) {
      cy.contains(productName).parent().find('.cart_button').click();
    }
  
    limpacarrinho() {
      this.viewCart();
      cy.get('.cart_item').each(($el) => {
        cy.wrap($el).find('.cart_button').click();
      });
    }
  }
  
  export default InventoryPage;
  