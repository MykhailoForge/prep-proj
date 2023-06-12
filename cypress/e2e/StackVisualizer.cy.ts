import uaLocalization from "../../src/assets/i18n/ua.json";

const STACK_TEST_MSG = "Test item";
const PATH_NAME_STACK = "/stack";
const STACK_LANG_MATCHER =
  uaLocalization.translation.stackVisualizer.buttons.add;

const inputTextAddNewStackItem = () => {
  cy.getByTestId("data-list-text-input").type(STACK_TEST_MSG);
  cy.getByTestId("data-list-add-button").click();
  cy.getByTestId("stack-list-items-container")
    .getByTestId("data-list-item")
    .contains(STACK_TEST_MSG)
    .should("exist");
  cy.getByTestId("stack-list-items-container")
    .getByTestId("data-list-item")
    .should("have.length", 4);
};

const removeStackItem = () => {
  cy.getByTestId("data-list-remove-button").click();
  cy.getByTestId("stack-list-items-container")
    .getByTestId("data-list-item")
    .contains("3")
    .should("not.exist");
  cy.getByTestId("stack-list-items-container")
    .getByTestId("data-list-item")
    .should("have.length", 2);
};

const processStackBackButton = () => {
  cy.getByTestId("data-list-back-button").click();
  cy.location("pathname").should("eq", "/");
};

const processStackSelectLanguage = () => {
  cy.getByTestId(`language-selector-body`).click();
  cy.getByTestId(`sentinelStart`).next().children().get("ul li").last().click();
  cy.getByTestId(`data-list-add-button`)
    .contains(STACK_LANG_MATCHER)
    .should("exist");
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
