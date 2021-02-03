function attemptLogin(username, password) {
    cy.visit(Cypress.env('url'))

    cy.get('input[id="user-name"]')
        .type(username)

    cy.get('input[id="password"]')
        .type(password)

    cy.get('input[type="submit"]').click()
}

export default attemptLogin;