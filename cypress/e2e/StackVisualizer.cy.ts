import uaLocalization from "../../src/assets/i18n/ua.json";

const STACK_TEST_MSG = "Test item";
const PATH_NAME_STACK = "/stack";
const STACK_LANG_MATCHER =
  uaLocalization.translation.stackVisualizer.buttons.add;

describe(`Testing "${PATH_NAME_STACK}" route`, () => {
  beforeEach(() => {
    cy.visit(PATH_NAME_STACK);
  });

  it("Should add new list item", () => {
    let numberOfStackElems = 0;
    cy.getByTestId("stack-list-items-container")
      .getByTestId("data-list-item")
      .its("length")
      .then((n) => {
        numberOfStackElems = n;
      });
    cy.getByTestId("data-list-text-input").type(STACK_TEST_MSG);
    cy.getByTestId("data-list-add-button")
      .click()
      .then(() => {
        cy.getByTestId("stack-list-items-container")
          .getByTestId("data-list-item")
          .should("have.length", numberOfStackElems + 1);
      });
    cy.getByTestId("stack-list-items-container")
      .getByTestId("data-list-item")
      .contains(STACK_TEST_MSG)
      .should("exist");
  });

  it("Should remove last item from list", () => {
    let numberOfStackElems = 0;
    cy.getByTestId("stack-list-items-container")
      .getByTestId("data-list-item")
      .its("length")
      .then((n) => {
        numberOfStackElems = n;
      });
    cy.getByTestId("data-list-remove-button")
      .click()
      .then(() => {
        cy.getByTestId("stack-list-items-container")
          .getByTestId("data-list-item")
          .should("have.length", numberOfStackElems - 1);
      });
  });

  it(`Should proceed to "/" route`, () => {
    cy.getByTestId("data-list-back-button").click();
    cy.location("pathname").should("eq", "/");
  });

  it("Should change language", () => {
    cy.getByTestId(`language-selector-body`).parent().click();
    cy.getByTestId(`language-selector-option-ua`).click();
    cy.getByTestId(`data-list-add-button`)
      .contains(STACK_LANG_MATCHER)
      .should("exist");
  });
});
