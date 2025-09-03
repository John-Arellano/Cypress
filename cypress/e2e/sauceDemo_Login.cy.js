const sauceDemologinPage = require('../pages/sauceDemo_Login_page');


describe(
    'SauceDemo Login Tests',() => {
        before(() => {
            cy.visit('https://www.saucedemo.com/')
        })

        it('Login with valid credentials', () => {
            sauceDemologinPage.elements.userNameInput().type('standard_user')
            sauceDemologinPage.elements.passwordInput().type('secret_sauce')
            sauceDemologinPage.elements.loginButton().click()     
        })

        
    }
)