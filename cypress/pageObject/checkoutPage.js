class CheckoutPage {


  elements = {
    firstName: ()=> cy.get('[data-test="firstName"]'),
    lastName: ()=> cy.get('[data-test="lastName"]'),
    postalCode: ()=> cy.get('[data-test="postalCode"]'),
    continue: ()=> cy.get('[data-test="continue"]'),
    finish: ()=> cy.get('[data-test="finish"]'),
    cancel: ()=> cy.get('[data-test="cancel"]'),
    confirmationHeader: ()=> cy.get('.complete-header'),
    removeButton: ()=> cy.get('#remove'),
    checkoutProduct: ()=> cy.get('.inventory_item_name')

  }

  
    fillInfo(firstName, lastName, postalCode) {
      this.elements.firstName().type(firstName);
      this.elements.lastName().type(lastName);
      this.elements.postalCode().type(postalCode);
    }
  
    clickContinue() {
      this.elements.continue().click();
    }
  
    clickFinish() {
      this.elements.finish().click();
    }
  
    clickCancel() {
      this.elements.cancel().click();
    }
  
    getConfirmationHeader() {
      return this.elements.confirmationHeader();
    }

    removeCheckoutProduct(productName) {
      this.elements.checkoutProduct().contains('.inventory_item_name', productName)
        .click();
    }

    clickRemoveButton() {
      this.elements.removeButton().click();
    }
  }
  
  export default new CheckoutPage();
  