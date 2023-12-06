
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

    Given('as an admin I navigate to orangeHRM {string}', (pageName) => {
        cy.OpenPage(pageName)
    });
    When('as an admin I enter the correct username {string}', (username) => {
        cy.usernameField().type(username)
    });
     
    And('as an admin I enter the correct password {string}', (password) => {
        cy.passwordField().type(password)
    });
     
    Then('as an admin I can login successfully', () => {
        cy.loginButton().click()
        
    });
     