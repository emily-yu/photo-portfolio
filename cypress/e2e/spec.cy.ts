describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("home page", () => {
  it("ghost test won't run", () => {
    cy.visit("http://localhost:3000")
  })

  it.only("h1 contains correct text", () => {
    cy.visit("http://localhost:3000")
    // cy.get("h1").contains("Emily Yu") // loaded from header component, h1 for seo
    cy.get("[data-test='header-text']").contains("Emily Yu") // loaded from hero component, h1 for hero
  })
})