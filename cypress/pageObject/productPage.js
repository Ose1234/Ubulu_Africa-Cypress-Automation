class ProductsPage {

  elements = {
    title: ()=> cy.get('.title'),
    cart: ()=> cy.get('.shopping_cart_link'),
    cartNumber: ()=> cy.get('.shopping_cart_badge'),
    product: ()=> cy.get('.inventory_item')
  }


    getTitle() {
      return this.elements.title();
    }
  
    addProduct(productName) {
      this.elements.product().contains('.inventory_item', productName)
        .find('button')
        .click();
    }
  
    goToCart() {
      this.elements.cart().click();
    }

    getCartNumber() {
      return this.elements.cartNumber();
    }

  }
  
  export default new ProductsPage();
  