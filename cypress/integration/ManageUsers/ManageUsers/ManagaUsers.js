Cypress.Commands.add('adminSideMenu', () => {
    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]');
  });

  Cypress.Commands.add('adminPanelTitle', () => {
    cy.get('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]');
  });


  Cypress.Commands.add('numberOfRecords', () => {
    cy.get('[class="oxd-text oxd-text--span"]');
  });

  Cypress.Commands.add('addNewUserButton', () => {
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]');
  });

  Cypress.Commands.add('selectAdmin', () => {
    cy.get('[class="oxd-select-text-input"]');
  });

  Cypress.Commands.add('selectEmployee', () => {
    cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
  });

  Cypress.Commands.add('selectStatus', () => {
    cy.get('[class="oxd-select-text-input"]');
  });

  Cypress.Commands.add('addUsername', () => {
    cy.get('[class="oxd-input oxd-input--active"]');
  });

  Cypress.Commands.add('addPassword', () => {
    cy.get('[class="oxd-input oxd-input--active"]');
  });

  Cypress.Commands.add('addConfirmPassword', () => {
    cy.get('[class="oxd-input oxd-input--active"]');
  });

  Cypress.Commands.add('saveAddEmployee', () => {
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
  });


  Cypress.Commands.add('selectAdminEmp', () => {
    cy.get('[class="oxd-select-option"]');
  });

  Cypress.Commands.add('selectEmpName', () => {
    cy.get('[class="oxd-autocomplete-option"]');
  });

