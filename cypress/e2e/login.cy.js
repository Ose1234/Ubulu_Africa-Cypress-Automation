/// <reference types="cypress" />

import loginPage from '../pageObject/loginPage';
const data = require('../fixtures/users.json');

describe('Login Tests', () => {
  //this is to be run before each test case (it block)
  beforeEach(() => {
    //navigate to the url
    loginPage.visit();
  });

  it('Verify user is unable to login with invalid credentials', () => {
    //login using data for invalid user from fixtures folder
      loginPage.fillUsername(data.invalidUser.username);
      loginPage.fillPassword(data.invalidUser.password);
      loginPage.clickLogin();
      loginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('Verify user can login successfully with valid credentials', () => {
    //login using data for valid user from fixtures folder
      loginPage.fillUsername(data.validUser.username);
      loginPage.fillPassword(data.validUser.password);
      loginPage.clickLogin();
      cy.url().should('include', '/inventory');
  });
});
