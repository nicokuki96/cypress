Cypress.Commands.add("login", (email, password) =>{
    cy.session([email, password], () =>{
        cy.load_home_page()
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').trigger('mouseover')
        cy.contains('Login').click()
        cy.get('#input-email').type(email)
        cy.get('#input-password').type(password)
        cy.get('form > .btn').click()
        //cy.load_home_page()
    })
})

Cypress.Commands.add("load_home_page", () =>{
    cy.visit("baseUrl")
})