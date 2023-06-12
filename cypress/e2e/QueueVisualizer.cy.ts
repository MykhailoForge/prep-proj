import uaLocalization from "../../src/assets/i18n/ua.json";

const QUEUE_TEST_MSG = "Test item";
const PATH_NAME_QUEUE = "/queue";
const QUEUE_LANG_MATCHER =
  uaLocalization.translation.queueVisualizer.buttons.add;

const inputTextAddNewQueueItem = () => {
  cy.getByTestId("data-list-text-input").type(QUEUE_TEST_MSG);
  cy.getByTestId("data-list-add-button").click();
  cy.getByTestId("queue-list-items-container")
    .getByTestId("data-list-item")
    .contains(QUEUE_TEST_MSG)
    .should("exist");
  cy.getByTestId("queue-list-items-container")
    .getByTestId("data-list-item")
    .should("have.length", 4);
};

const removeQueueItem = () => {
  cy.getByTestId("data-list-remove-button").click();
  cy.getByTestId("queue-list-items-container")
    .getByTestId("data-list-item")
    .contains("1")
    .should("not.exist");
  cy.getByTestId("queue-list-items-container")
    .getByTestId("data-list-item")
    .should("have.length", 2);
};

const processQueueBackButton = () => {
  cy.getByTestId("data-list-back-button").click();
  cy.location("pathname").should("eq", "/");
};

const processQueueSelectLanguage = () => {
  cy.getByTestId(`language-selector-body`).click();
  cy.getByTestId(`sentinelStart`).next().children().get("ul li").last().click();
  cy.getByTestId(`data-list-add-button`)
    .contains(QUEUE_LANG_MATCHER)
    .should("exist");
};

describe(`Testing "${PATH_NAME_QUEUE}" route`, () => {
  beforeEach(() => {
    cy.visit(PATH_NAME_QUEUE);
  });

  it("Should add new list item", () => {
    expect(inputTextAddNewQueueItem());
  });

  it("Should remove last item from list", () => {
    expect(removeQueueItem());
  });

  it(`Should proceed to "/" route`, () => {
    expect(processQueueBackButton());
  });

  it("Should change language", () => {
    expect(processQueueSelectLanguage());
  });
});
