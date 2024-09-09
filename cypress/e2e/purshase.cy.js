describe("purchase test", () => {
    it("purchase with login test", () => {
        cy.login('nicoszu@gmail.com', 'nico1234')
        cy.load_home_page()
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left').click()
        cy.get('.swiper-slide-active > a > .figure > .figure-img-wrapper > .figure-img').click()
        cy.get('#mz-product-grid-image-28-212408 > .carousel-inner > .active > .lazy-load').click()
        cy.get('#entry_216843 > .text').click()
    })
})