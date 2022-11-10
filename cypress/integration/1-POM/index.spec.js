import SauceDemo from "../1-POM/Pages/Pages"

///<reference types="cypress"/>
let obj = new SauceDemo()
describe('Sauce Labs Login Demo', function () {
    it('Login with valid credentials', function () {
        obj.visitUrl()
        obj.EnterUser_Name("standard_user")
        obj.EnterPassword('secret_sauce')
        obj.ClickOnLogin()
        cy.contains('Products').should('be.visible')
    })

    it('Login with valid credentials', function () {
        obj.visitUrl()
        obj.EnterUser_Name("problem_user")
        obj.EnterPassword('secret_sauce')
        obj.ClickOnLogin()
        cy.contains('Products').should('be.visible')
    })

    it('Login with invalid credentials', function () {
        obj.visitUrl()
        obj.EnterUser_Name("user")
        obj.EnterPassword('secret')
        obj.ClickOnLogin()
        cy.get('.error>h3').should('be.visible')
    })
})