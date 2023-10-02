  /*
Fetching data and attributes from the Web elements;
        .invoke ->
            .val() method (fetch updated text property from the web element)
            .tex() etching any text attribute
        .then() method to wrap any actions after element identified
Fetching element properties;
        /open dev tools -> navigate to element -> open Property tab to see all properties of element
        .invoke('prop','href')
  */

describe("Fetching elements", () => {
  it("get entered value", () => {
      cy.visit("https://www.google.com/");
        cy.get('textarea[name=q]').clear().type("queries").invoke('val').then((myValue:any)=>{
        cy.log(myValue);
      });
      cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get('#bodyContent').should('have.text',"Jump to content");
    });

  it("fetch text value from web element", () => {
      cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get('#firstHeading span').invoke('text').then((myValue:any)=>{
        cy.log(myValue);
    });
        cy.get('#firstHeading span').should('have.text',"Software testing");
    });

  it("fetch any attribute or properties from web element", () => {
      cy.visit("https://en.wikipedia.org/wiki/Software_testing");
      cy.get('#bodyContent').eq(0).invoke('prop','autofocus').then((myValue:any)=>{
        cy.log(myValue);
    });
    })

  it("link prop from text element", () => {
      cy.visit("https://en.wikipedia.org/wiki/Software_testing");
      cy.contains('Jump to content').invoke('prop','href').then((myValue:any)=>{
        cy.log(myValue);
    });
        cy.get('#bodyContent').eq(0).invoke('prop','autofocus').then((myValue:any)=>{
        cy.log(myValue);
    });
    })
})