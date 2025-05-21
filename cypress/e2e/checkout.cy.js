/// <reference types="cypress" />

import loginPage from '../pageObject/loginPage';
import productsPage from '../pageObject/productPage';
import cartPage from '../pageObject/cartPage';
import checkoutPage from '../pageObject/checkoutPage';
import {faker} from '@faker-js/faker';
const data = require('../fixtures/users.json')

describe('Checkout Process', () => {
  //this is to be run before each test case (it block)
  beforeEach(() => {
    //navigate to the url
    loginPage.visit();
    //login using data from fixtures folder
      loginPage.fillUsername(data.validUser.username);
      loginPage.fillPassword(data.validUser.password);
      loginPage.clickLogin();

    //add two product options to the cart
    productsPage.addProduct(data.cartProducts.product1);
    productsPage.addProduct(data.cartProducts.Product2);
    //navigate to the cart
    productsPage.goToCart();
    //click the checkout button
    cartPage.clickCheckout();
  });

  it('Verify user can complete checkout successfully', () => {
    //use the faker library to generate random firstName, lastName an postalCoe
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();

    //fill and submit the checkout form
    checkoutPage.fillInfo(firstName, lastName, postalCode);
    checkoutPage.clickContinue();
    checkoutPage.clickFinish();
    //assert the confirmation text
    checkoutPage.getConfirmationHeader().should('contain', 'Thank you for your order!');
  });

   it('Verify user can successfully remove an item from cart from the checkout flow', () => {
    //use the faker library to generate random firstName, lastName an postalCoe
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();

    //fill and submit the checkout form
    checkoutPage.fillInfo(firstName, lastName, postalCode);
    checkoutPage.clickContinue();
    //click a product to remove while in the checkout flow
    checkoutPage.removeCheckoutProduct(data.cartProducts.Product2);
    checkoutPage.clickRemoveButton();
    productsPage.goToCart();
    //assert the number of items left in the cart
    cartPage.getCartItems().should('have.length', 1);
  });

  it('Verify user can successfully cancel the checkout flow', () => {
    checkoutPage.clickCancel();
    cy.url().should('include', '/cart');
  });
});
