// https://docs.cypress.io/api/introduction/api.html

describe("Home Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("span.md-title", "Play Now");
    cy.contains("a.md-button", "DRAW");
    cy.contains("a.md-button", "TYPE");
    cy.contains("button.md-button", "SHOW");
  });
});
