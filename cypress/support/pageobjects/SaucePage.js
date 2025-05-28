class SaucePage {
  login(user, pass) {
    cy.get('#user-name').type(user);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();
  }

  addFirstItemToCart() {
    cy.get('.inventory_item').first().contains('Add to cart').click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  checkCartHasItem() {
    cy.get('.cart_item').should('have.length.at.least', 1);
  }
}

export default SaucePage;
