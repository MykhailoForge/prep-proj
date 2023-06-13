import uaLocalization from "../../src/assets/i18n/ua.json";

const QUEUE_TEST_MSG = "Test item";
const PATH_NAME_QUEUE = "/queue";
const QUEUE_LANG_MATCHER =
  uaLocalization.translation.queueVisualizer.buttons.add;

describe(`Testing "${PATH_NAME_QUEUE}" route`, () => {
  beforeEach(() => {
    cy.visit(PATH_NAME_QUEUE);
  });

  it("Should add new list item", () => {
    let numberOfQueueElems = 0;
    cy.getByTestId("queue-list-items-container")
      .getByTestId("data-list-item")
      .its("length")
      .then((n) => {
        numberOfQueueElems = n;
      });
    cy.getByTestId("data-list-text-input").type(QUEUE_TEST_MSG);
    cy.getByTestId("data-list-add-button")
      .click()
      .then(() => {
        cy.getByTestId("queue-list-items-container")
          .getByTestId("data-list-item")
          .should("have.length", numberOfQueueElems + 1);
      });
    cy.getByTestId("queue-list-items-container")
      .getByTestId("data-list-item")
      .contains(QUEUE_TEST_MSG)
      .should("exist");
  });

  it("Should remove last item from list", () => {
    let numberOfQueueElems = 0;
    cy.getByTestId("queue-list-items-container")
      .getByTestId("data-list-item")
      .its("length")
      .then((n) => {
        numberOfQueueElems = n;
      });
    cy.getByTestId("data-list-remove-button").click();
    cy.getByTestId("data-list-add-button")
      .click()
      .then(() => {
        cy.getByTestId("queue-list-items-container")
          .getByTestId("data-list-item")
          .should("have.length", numberOfQueueElems - 1);
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
      .contains(QUEUE_LANG_MATCHER)
      .should("exist");
  });
});
