/*
* By default Cypress find elements by CSS selectors
*   syntax:
*       cy.contains(content)    => find by presented text
*       cy.contains(content, options)   => find by text with additional options
*       cy.content(selector, content)   => find by text from parent element(selector)
*       cy.content(selector, content, options)  => find by text from parent element with additional options
*   options:
*       {matchCase} |true| case sensitivity (false => ignore case)
*       {log}
*       {timeout}
*       {includeShadowDom}
* */

describe("Cypress content command", () => {
    it("select element by contains command", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.contains('Wikipedia', {matchCase: false});
        cy.contains('#search-input', 'Search Wikipedia', {matchCase: false});       // find from parent #search-input
        cy.contains('Creative Commons').click();
    })