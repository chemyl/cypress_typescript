describe("reg form", () => {
  it("enter some value to the form", () => {
      cy.visit("https://www.techlistic.com/p/selenium-practice-form.html",{ timeout: 50000 });
      cy.get('input[name=\'firstname\']').type("Anatolii");                             // CSS locator by attribute
      cy.get('name=\'firstname\'').type("Anatolii");                                    // CSS locator by attribute
      cy.get('input[name*=\'firstname\']').type("Anatolii");                            // CSS locator by attribute
      cy.get('input[name*=\'lastname\']').type("Maltsev");                              // CSS locator by attribute

      cy.get("#sex-0").click();                                                         // CSS locator by emlement ID
      cy.get("input[value='Male'][type='radio']").click();                              // CSS locator by 2 atribytes and values
      cy.get("#datepicker").type("01.01.1990");                                         // CSS locator by emlement ID

      cy.get('div[class=\'container\']>ul>li').should('have.length', 43);               // CSS locators with li child
      cy.get('div[class=\'post-header\'] + div');                                       // CSS locators find first sibling after
      cy.get('div[class=\'post-header\'] ~ div')                                        // CSS locators find all possible siblings after

      cy.get('div[class=\'control-group\']>input[name*=\'ession\']');                   // CSS locators by name-attribute with contains
      cy.get('div[class=\'control-group\']>input[name$=\'ession\']');                   // CSS locators by name-attribute with ends-with
      cy.get('div[class=\'control-group\']>input[name*=\'profes\']');                   // CSS locators by name-attribute with starts-with

      cy.get('#table1 tbody tr:nth-child(3) td:nth-child(2)');                          // CSS tables locators 3d row (tr) and 2d column (td)

      cy.get('div[class=\'control-group\']>input[name=\'profession\']').should('have.length',2);
  })
})