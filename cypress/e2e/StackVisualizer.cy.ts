import uaLocalization from "../../src/assets/i18n/ua.json";

const STACK_TEST_MSG = "Test item";
const PATH_NAME_STACK = "/stack";
const STACK_LANG_MATCHER =
  uaLocalization.translation.stackVisualizer.buttons.add;

const inputTextAddNewStackItem = () => {
  cy.getBySel(`data-list-text-input`).type(STACK_TEST_MSG);
  cy.getBySel(`data-list-add-button`).click();
  cy.getBySel(`data-list-items-container`).children().should("have.length", 4);
  cy.contains(STACK_TEST_MSG);
};

const removeStackItem = () => {
  cy.getBySel(`data-list-remove-button`).click();
  cy.getBySel(`data-list-items-container`).children().should("have.length", 2);
};

const processStackBackButton = () => {
  cy.getBySel(`data-list-back-button`).click();
  cy.location("pathname").should("eq", "/");
};

const processStackSelectLanguage = () => {
  cy.getBySel(`language-selector-body`).click();
  cy.getBySel(`sentinelStart`).next().children().get("ul li").last().click();
  cy.getBySel(`data-list-add-button`).contains(STACK_LANG_MATCHER);
};

describe(`Testing "${PATH_NAME_STACK}" route`, () => {
  beforeEach(() => {
    cy.visit(PATH_NAME_STACK);
  });

  it("Should add new list item", () => {
    expect(inputTextAddNewStackItem());
  });

  it("Should remove last item from list", () => {
    expect(removeStackItem());
  });

  it(`Should proceed to "/" route`, () => {
    expect(processStackBackButton());
  });

  it("Should change language", () => {
    expect(processStackSelectLanguage());
  });
});
