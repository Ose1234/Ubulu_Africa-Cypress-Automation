/// <reference types="cypress" />

import loginPage from '../pageObject/loginPage';
import header from '../pageObject/header';
const data = require('../fixtures/users.json');

describe('Logout Test', () => {
  //this is to be run before each test case (it block)
  beforeEach(() => {
    //navigate to the url
    loginPage.visit();
    //login using data for valid user from fixtures folder
      loginPage.fillUsername(data.validUser.username);
      loginPage.fillPassword(data.validUser.password);
      loginPage.clickLogin();
  });

  it('verify user can log out successfully', () => {
    //navigate to the hamburger menu
    header.openMenu();
    //click the logout button
    header.logout();
    //verify the url is same as the baseURL
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
