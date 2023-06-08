/// <reference types="cypress" />

Cypress.Commands.add("getBySel", (testId) => {
  return cy.get(`[data-testid="${testId}"]`);
});
