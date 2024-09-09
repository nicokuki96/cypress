describe("pruebas_curso", () => {
    beforeEach("login page can be opened", () => {
        cy.visit("baseUrl/login")
    })

    it("Login - happy path", () => {
        cy.login("nicoszu@gmail.com","nico1234")
        cy.load_home_page()
        cy.get(".mz-sub-menu-96 > :nth-child(6) > .icon-left > .info > .title").should("contain", "Logout")
    })

    it("wrong email validation", () => {
        cy.login("nicoszuss@gmail.com","nico1234")
        cy.load_home_page()
        cy.get('.mz-sub-menu-96 > :nth-child(1) > .icon-left').should("contain", "Login")
    })
})