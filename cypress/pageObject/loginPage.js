class LoginPage {

  elements = {
    username: ()=> cy.get('#user-name'),
    password: ()=> cy.get('#password'),
    login: ()=> cy.get('#login-button'),
    errorMessage: ()=> cy.get('[data-test="error"]')
  }
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    fillUsername(username) {
      this.elements.username().clear().type(username);
    }
  
    fillPassword(password) {
      this.elements.password().clear().type(password);
    }
  
    clickLogin() {
      this.elements.login().click();
    }
  
    getErrorMessage() {
      return this.elements.errorMessage();
    }
  }
  
  export default new LoginPage();
  