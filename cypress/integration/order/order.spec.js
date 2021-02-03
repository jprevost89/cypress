import attemptLogin from "../../helpers/login";
import randomItem from "../../helpers/randomItem";

describe('SauceDemo Order Test', () => {

    it('Given I Login to SauceDemo', () => {

        attemptLogin(Cypress.env('user').username, Cypress.env('user').password);

    }),

    it('And I Add An Item To The Cart', () => {

        cy.get('a[id="item_' + randomItem() + '_title_link"]').click();

        cy.get('button[class="btn_primary btn_inventory"]').click();
      
    }),

    it('And I Go To The Cart And Checkout', () => {

        cy.get('a[href="./cart.html"]').click();

        cy.get('a[class="btn_action checkout_button"]').click()
    }),

    it('When I Finish The Order', () => {

        cy.get('input[id="first-name"]')
            .type(Cypress.env('customer').first);

        cy.get('input[id="last-name"]')
            .type(Cypress.env('customer').last);

        cy.get('input[id="postal-code"]')
            .type(Cypress.env('customer').zip);

        cy.get('input[class="btn_primary cart_button"]').click();

        cy.get('a[class="btn_action cart_button"]').click();
    }),

    it('Then I See The Order Confirmation Page', () => {

        cy.url().should('eq', Cypress.env('url') + 'checkout-complete.html');

    })
})