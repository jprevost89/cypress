import attemptLogin from "../../helpers/login";

describe('SauceDemo Login Test', () => {

  it('Given I Input Incorrect Username and Password', () => {

    attemptLogin(Cypress.env('user').username, Cypress.env('user').incorrect_password);

  }),

  it('Then I Should See Incorrect Login Text', () => {

    cy.url().should('not.eq', Cypress.env('url') + 'inventory.html');

    cy.xpath("//h3").should('have.text', Cypress.env('incorrect_login_text'));
  }),

  it('Given I Input Correct Username and Password', () => {

    attemptLogin(Cypress.env('user').username, Cypress.env('user').password);
  }),

  it('Then I Should Land On The Inventory Page', () => {

    cy.url().should('eq', Cypress.env('url') + 'inventory.html');
  })
})