class Header {
  elements = {
    menu: ()=> cy.get('#react-burger-menu-btn'),
    logout: ()=> cy.get('#logout_sidebar_link')
  }
    openMenu() {
      this.elements.menu().click();
    }
  
    logout() {
      this.elements.logout().click();
    }
  }
  
  export default new Header();
  