import uaLocalization from "../../src/assets/i18n/ua.json";
const APP_LANG_MATCHER = uaLocalization.translation.app.typography.hi;

const handleClickStackButton = () => {
  cy.getByTestId("stack-route-button").click();
  cy.location("pathname").should("eq", "/stack");
};

const handleClickQueueButton = () => {
  cy.getByTestId(`queue-route-button`).click();
  cy.location("pathname").should("eq", "/queue");
};

const processAppSelectLanguage = () => {
  cy.getByTestId(`language-selector-body`).click();
  cy.getByTestId(`sentinelStart`).next().children().get("ul li").last().click();
  cy.getByTestId(`app-typograpghy-greetings`)
    .contains(APP_LANG_MATCHER)
    .should("exist");
};

describe(`Testing "/" route`, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(`Should proceed to "/stack" route`, () => {
    expect(handleClickStackButton());
  });

  it(`Should proceed to "/queue" route`, () => {
    expect(handleClickQueueButton());
  });

  it("Should change language", () => {
    expect(processAppSelectLanguage());
  });
});
