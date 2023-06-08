import uaLocalization from "../../src/assets/i18n/ua.json";

const QUEUE_TEST_MSG = "Test item";
const PATH_NAME_QUEUE = "/queue";
const QUEUE_LANG_MATCHER =
  uaLocalization.translation.queueVisualizer.buttons.add;

const inputTextAddNewQueueItem = () => {
  cy.getBySel(`data-list-text-input`).type(QUEUE_TEST_MSG);
  cy.getBySel(`data-list-add-button`).click();
  cy.getBySel(`data-list-items-container`).children().should("have.length", 4);
  cy.contains(QUEUE_TEST_MSG);
};

const removeQueueItem = () => {
  cy.getBySel(`data-list-remove-button`).click();
  cy.getBySel(`data-list-items-container`).children().should("have.length", 2);
};

const processQueueBackButton = () => {
  cy.getBySel(`data-list-back-button`).click();
  cy.location("pathname").should("eq", "/");
};

const processQueueSelectLanguage = () => {
  cy.getBySel(`language-selector-body`).click();
  cy.getBySel(`sentinelStart`).next().children().get("ul li").last().click();
  cy.getBySel(`data-list-add-button`).contains(QUEUE_LANG_MATCHER);
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
