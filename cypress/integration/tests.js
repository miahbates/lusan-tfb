describe("homepage tests", () => {
  it("can find homepage", () => {
    cy.visit("/");
  });

  it("can find title on home page", () => {
    cy.visit("/");
    cy.get("h1").contains("Selecting seeds made simple");
  });

  it.skip("can redirect to user input search term", () => {
    cy.visit("/");
    cy.get("input").type("tomato");
    cy.get(".search-border a").click();
    cy.url().should("include", "/search/tomato");
    cy.get("li.product-card").contains("tomato");
  });

  it.skip("can redirect to image tile search term", () => {
    cy.visit("/");
    cy.get("a").contains("Beetroot").click();
    cy.url().should("include", "/search/beetroot");
    cy.get("li.product-card").contains("beetroot");
  });

  it("can redirect to search all", () => {
    cy.visit("/");
    cy.contains("Click here for all seeds").click();
    cy.url().should("include", "/search/all");
  });
});

describe("filters tests", () => {
  it("can find filter page", () => {
    cy.visit("/search/all");
  });
});
