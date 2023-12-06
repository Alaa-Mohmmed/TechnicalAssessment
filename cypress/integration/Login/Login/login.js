
Cypress.Commands.add('usernameField', () => {
    cy.get('[name="username"]');
  });
  Cypress.Commands.add('passwordField', () => {
    cy.get('[name="password"]');
  });
  Cypress.Commands.add('loginButton', () => {
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
  });