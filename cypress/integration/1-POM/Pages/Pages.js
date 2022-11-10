class SauceDemo {
    elements = {

        url: "https://www.saucedemo.com/",
        user_Name: "#user-name",
        password: "#password",
        loginBtn: "#login-button"
    }

    visitUrl() {
        cy.visit(this.elements.url)
    }

    EnterUser_Name(userName) {
        cy.get(this.elements.user_Name).type(userName)
    }

    EnterPassword(pass) {
        cy.get(this.elements.password).type(pass)
    }
    ClickOnLogin() {
        cy.get(this.elements.loginBtn).click()
    }

}
export default SauceDemo