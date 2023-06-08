import uaLocalization from "../../src/assets/i18n/ua.json";
const APP_LANG_MATCHER = uaLocalization.translation.app.typography.hi;

const handleClickStackButton = () => {
  cy.get(`[data-testid="stack-route-button"]`).click();
  cy.location("pathname").should("eq", "/stack");
};

const handleClickQueueButton = () => {
  cy.get(`[data-testid="queue-route-button"]`).click();
  cy.location("pathname").should("eq", "/queue");
};

const processAppSelectLanguage = () => {
  cy.get(`[data-testid="language-selector-body"]`).click();
  cy.get(`[data-testid="sentinelStart"]`).next();
  cy.get(`[data-testid="sentinelStart"]`)
    .next()
    .children()
    .get("ul li")
    .last()
    .click();
  cy.get(`[data-testid="app-typograpghy-greetings"]`).contains(
    APP_LANG_MATCHER
  );
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
