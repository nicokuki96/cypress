describe("pruebas_curso", () => {
    beforeEach("frontPage can be opened", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io")
    })

    it("Sign Up success - happy path", () => {
        const uuid = () => Cypress._.random(0, 1e6)
        const randomemail = uuid()
        cy.load_home_page()
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').trigger('mouseover')
        cy.contains('Register').click()
        cy.get('#input-firstname').type("nico")
        cy.get('#input-lastname').type("prueba")
        cy.get('#input-email').type(`${randomemail}@gmail.com`)
        cy.get('#input-telephone').type("1113343534")
        cy.get('#input-password').type("nico1234")
        cy.get('#input-confirm').type("nico1234")
        cy.get('.float-right > .custom-control').click()
        cy.get('.float-right > .btn').click()
        cy.get('.page-title').should("contain" ,"Your Account Has Been Created!")
        cy.get('.buttons > .btn').click()
    })

    it("Sign Up email already exist", () => {
        cy.load_home_page()
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').trigger('mouseover')
        cy.contains('Register').click()
        cy.get('#input-firstname').type("nico")
        cy.get('#input-lastname').type("prueba")
        cy.get('#input-email').type("nicoszu@gmail.com")
        cy.get('#input-telephone').type("1113343534")
        cy.get('#input-password').type("nico1234")
        cy.get('#input-confirm').type("nico1234")
        cy.get('.float-right > .custom-control').click()
        cy.get('.float-right > .btn').click()
        cy.get('#account-register > .alert').should("contain" ," Warning: E-Mail Address is already registered!")
    })
})