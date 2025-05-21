/// <reference types="cypress" />

import loginPage from '../pageObject/loginPage';
import cartPage from '../pageObject/cartPage';
import productsPage from '../pageObject/productPage';
const data = require('../fixtures/users.json')

let containerCount = 0;

describe('Cart Interaction', () => {
  //this is to be run before each test case (it block)
  beforeEach(() => {
    //navigate to the url
    loginPage.visit();
    //login using data from fixtures folder
      loginPage.fillUsername(data.validUser.username);
      loginPage.fillPassword(data.validUser.password);
      loginPage.clickLogin();
  });

  it('Verify user can successfully add products to the cart', () => {
    //add two products to the cart
    productsPage.addProduct(data.cartProducts.product1);
    productsPage.addProduct(data.cartProducts.Product2);
    //navigate to the cart
    productsPage.goToCart();
    //confirm the amount of items in the cart
    cartPage.getCartItems().then($el=>{
            containerCount = $el.length;
        })
        productsPage.getCartNumber().then(($el)=>{
            expect(Number($el.text())).to.equal(containerCount)
        })


  });

  it('Verify user can successfully remove products from the cart', () => {
    //add one product option to the cart
    productsPage.addProduct(data.cartProducts.Product3);
    //navigate to the cart
    productsPage.goToCart();
    //remove the product option from the cart
    cartPage.removeProduct(data.cartProducts.Product3);
    //confirm the amount of items in the cart
    cartPage.getCartItems().should('have.length', 0);
  });
});
