declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId(internalId: string): Chainable<any>;
  }
}
