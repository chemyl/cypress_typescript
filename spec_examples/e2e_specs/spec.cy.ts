describe("reg form", () => {
  it("enter come value", () => {
      cy.visit("https://phptravels.com/demo/");
      cy.get("first_name").type("Anatolii");
      cy.get("last_name").type("Maltsev");
      cy.get("submit_btn").click();
  })
})