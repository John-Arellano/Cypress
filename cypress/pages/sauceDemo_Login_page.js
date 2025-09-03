class souceDemo_Login_page {
    elements = {

        loginLogo : () => cy.get('.login_logo'),
        userNameInput : () => cy.get('[data-test="username"]'),
        passwordInput : () => cy.get('[data-test="password"]'),
        loginButton : () => cy.get('[data-test="login-button"]'),
        acceptedUserName : () => cy.get('#login_credentials'),
        acceptedPassword : () => cy.get('#root > div > div.login_wrapper > div.login_credentials_wrap > div > div.login_password'),
        
    };

}

module.exports = new souceDemo_Login_page()

// const loginPage = require('../pages/sauceDemo_Login_page')