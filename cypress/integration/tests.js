// Routes
describe("route tests", () => {
  it("can navigate to about us", () => {
    cy.visit("/");
    cy.get("li").contains("About Us").click();
    cy.url().should("include", "/about-us");
  });

  it("can navigate to all seeds", () => {
    cy.visit("/");
    cy.get("li").contains("All Seeds").click();
    cy.url().should("include", "/search/all");
  });

  it("can navigate to flowers", () => {
    cy.visit("/");
    cy.get("li").contains("Flowers").click();
    cy.url().should("include", "/search/flowers");
  });

  it("can navigate to herbs", () => {
    cy.visit("/");
    cy.get("li").contains("Herbs").click();
    cy.url().should("include", "/search/herbs");
  });

  it("can navigate to vegetables", () => {
    cy.visit("/");
    cy.get("li").contains("Vegetables").click();
    cy.url().should("include", "/search/vegetables");
  });

  it("can navigate to Contact us", () => {
    cy.visit("/");
    cy.get("li").contains("Contact Us").click();
    cy.url().should("include", "/contact-us");
  });

  it("can navigate to home by clicking logo", () => {
    cy.visit("/search/all");
    cy.get(".lusan-logo").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

// Homepage
describe("homepage tests", () => {
  it("can find homepage", () => {
    cy.visit("/");
  });

  it("can find title on home page", () => {
    cy.visit("/");
    cy.get("h1").contains("Selecting seeds made simple");
  });

  it("can redirect to user input search term", () => {
    cy.visit("/");
    cy.get("input").type("tomato");
    cy.get(".search-border a").click();
    cy.url().should("include", "/search/Tomato");
    cy.get("li.product-card").contains("Tomato");
  });

  it("can search for partial matches", () => {
    cy.visit("/");
    cy.get("input").type("tom");
    cy.get(".search-border a").click();
    cy.url().should("include", "/search/Tom");
    cy.get("li.product-card").contains("Tomato");
  });

  it("can search for variety name", () => {
    cy.visit("/");
    cy.get("input").type("cylindra");
    cy.get(".search-border a").click();
    cy.url().should("include", "/search/Cylindra");
    cy.get("li.product-card").contains("Cylindra");
  });

  it("can redirect to image tile search term", () => {
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

// Search and filters
describe("filters tests", () => {
  it("can find filter page", () => {
    cy.visit("/search/all");
  });

  it("can find products by veg category", () => {
    cy.visit("/search/all");
    cy.get("button#veg").click();
    cy.get("li.product-card").contains("Rosemary").should("not.exist");
  });

  it("can find products by flower category", () => {
    cy.visit("/search/all");
    cy.get("button#flower").click();
    cy.get("li.product-card").contains("Tomato").should("not.exist");
  });

  it("can find products by herb category", () => {
    cy.visit("/search/all");
    cy.get("button#herbs").click();
    cy.get("li.product-card").contains("Sweet Peas").should("not.exist");
  });

  it("can search via search bar", () => {
    cy.visit("/search/all");
    cy.get(".search-border input").type("b");
    cy.get(".search-border a").click();
    cy.get("li.product-card").contains("B");
  });

  it("can filter by organic condition checbox", () => {
    cy.visit("/search/all");
    cy.get(".fa-list").click();
    cy.get("input[value='organic']").click();
    cy.get("li.product-card").contains("Organic");
  });

  it("can filter by sunny condition checbox", () => {
    cy.visit("/search/all");
    cy.get(".fa-cloud-sun-rain").click();
    cy.get("input[value='sunny']").click();
    cy.get("li.product-card").contains("Sunny");
  });

  it("can clear checkboxes", () => {
    cy.visit("/search/all");
    cy.get(".fa-droplet").click();
    cy.get("input[value='lotsOfWater']").check();
    cy.get("input[value='dry']").check();
    cy.get("button").contains("Clear filters").click();
    cy.get("input[value='lotsOfWater']").should("not.be.checked");
    cy.get("input[value='dry']").should("not.be.checked");
  });
});
