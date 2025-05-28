

class CartPage {
    removerProduto(produto) {
      cy.contains('.cart_item', produto)
        .find('button')
        .contains('Remove')
        .click();
    }
  }
  export default CartPage;
