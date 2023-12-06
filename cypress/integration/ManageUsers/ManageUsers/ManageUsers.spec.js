import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('as an admin I navigate to orangeHRM {string} and login with {string} and {string}', (pageName, username, password) => {
    cy.OpenPage(pageName)
    cy.LoginAsAdmin(username, password);
});

When('as an admin I click on admin tab on the left side menu', () => {

    cy.adminSideMenu().first().click()
});

Given('as an admin I navigate to system users page {string}', (pageName) => {
    cy.OpenPage(pageName)
});

Then('as an admin I can see the system users with title {string}', (pageTitle) => {
    cy.adminPanelTitle().should('have.text', pageTitle)
});

Then('as an admin I can see number of existing users', () => {
    cy.numberOfRecords().should('be.visible')
});

And('as an admin I can click on add new user button', () => {
    cy.addNewUserButton().click()
});

Then('as an admin I can fill user data {string}, {string}, {string}, {string}, {string} and {string}',
    (userRole, empName, status, username, password, confirmPassword) => {
        cy.selectAdmin().eq('0').click()
        cy.selectAdminEmp().contains(userRole).click({force:true})

        cy.selectEmployee().type(empName).eq('0')
        cy.selectEmpName().should('have.text',empName).click()

        cy.scrollTo('bottom')
        
        cy.selectStatus().eq('0').click()
        cy.selectAdminEmp().contains(status).click()

        cy.addUsername().type(username)

        cy.addPassword().type(password)
        cy.addPassword().type(confirmPassword)

    });
    Then('as an admin I can add new user with {string} and {string} api',(username,password) => {
        cy.addNewUser(username, password)

    });
And('as an admin I can click save button', () => {
    cy.saveAddEmployee().click()
});

And('as an admin I can clear recently added user by {string}', (userName) => {
    cy.deleteUser(userName)
});
Then('as an admin I can search for newly added user by username {string}', (userName) => {
    cy.deleteUser(userName)
}); 
