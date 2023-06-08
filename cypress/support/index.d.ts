declare namespace Cypress {
  interface Chainable<Subject> {
    getBySel(internalId: string): Chainable<any>;
  }
}
