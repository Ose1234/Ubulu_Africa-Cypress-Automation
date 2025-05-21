class CartPage {

  elements = {
    getCartItems: ()=> cy.get('.cart_item'),
    Checkout: ()=> cy.get('[data-test="checkout"]')
  }


    getCartItems() {
      return this.elements.getCartItems();
    }
  
    removeProduct(productName) {
      this.elements.getCartItems().contains('.cart_item', productName)
        .find('button')
        .click();
    }
  
    clickCheckout() {
      this.elements.Checkout().click();
    }
  }
  
  export default new CartPage();
  