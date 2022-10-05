

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('[type="submit"]').click()
})

Cypress.Commands.add('paybills', () => {

    cy.get('#sp_payee').select('apple').should('have.value', 'apple')
    cy.get('#sp_account').select('4').should('have.value', '4')
    cy.get('#sp_amount').type("20")
    cy.get('#sp_date').click();
    cy.contains('28').click();
    cy.get('#sp_description').type("ade")



})




