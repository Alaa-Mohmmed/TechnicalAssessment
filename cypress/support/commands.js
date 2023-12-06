export var globalVariable_userId ;
Cypress.Commands.add('OpenPage', (pageName) => {

    if (pageName === 'loginPage') {
        cy.visit(Cypress.env('baseUrl') + `/auth/login`)
    }
    else if (pageName === 'adminPanel') {
        cy.visit(Cypress.env('baseUrl') + `/admin/viewSystemUsers`);
    }
});

Cypress.Commands.add('LoginAsAdmin', (username, password) => {
    cy.visit(Cypress.env('baseUrl') + `/auth/login`)
    cy.get('[name="username"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
});


Cypress.Commands.add('addNewUser', (username, password) => {
    cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + "/api/v2/admin/validation/user-name?userName=testingprofile",
    }).then(response => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + "/api/v2/admin/users",
            body:
            {
                "username": username,
                "password": password,
                "status": true,
                "userRoleId": 1,
                "empNumber": 7
            }
        }).then(response => {
            
        });
    });

});


Cypress.Commands.add('deleteUser', (userName) => {
    cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + "/api/v2/admin/users?limit=50&offset=0&username=testingprofile&sortField=u.userName&sortOrder=ASC",
        body: {
            "username":userName
        },
    }).then(response => {
        globalVariable_userId = response.body.data.id;
    });
    cy.getCookie('orangehrm').then(orangehrm => {
        cy.request({
            method: 'DELETE',
            url: Cypress.env('baseUrl') + "/api/v2/admin/users",
            body: {
                "ids":{globalVariable_userId} 
            },

        }).then(response => {

        });
    })
});
