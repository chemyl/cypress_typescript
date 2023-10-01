describe("properties test suite", () => {
  xit("options example", () => {
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 });
      cy.get('div[class=banner]',{log:false});                                  // log options -> enable/disable log print details
      cy.get('#navbar',{timeout:6000}).should('have.length','1');               // timeout options -> set timeout for finding elements (4 sec by default)
      cy.get('a[class=navbar-brand]',{log:false,timeout:6000}).should('have.text',"cypress.io");
      cy.get('#Cookies.debug',{log:false}).should('have.text',"Cypress.Cookies.debug()");
      cy.get('link[rel=icon],[type=image]',{log:true});

  })

//finding element not from the root by from specified subject parent
    xit("options within subject", () => {
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 });
      cy.get('a[role=button]',{withinSubject:document.getElementById('navbar')});

  })

//checking 2nd element from elements collection
    xit("options multiple elements", () => {
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 });
      cy.get('div[class=row] div').should('have.length','21');
      cy.get('div[class=row] div').eq(1).should('have.text',"Cypress.Commands.add()");

  })

//creating alias for simple using
    xit("alias elements", () => {
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 });
      cy.get('div[class=row] div').as('rows')
      cy.get('@rows').eq(1).should('have.text',"Cypress.Commands.add()");

  })

//cy get().find as a child command
      it("get find command", () => {
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 });
      cy.get('div[class=row] div').find('#dom.isHidden').find('a').should('have.text',"Cypress.dom.isHidden()");

  })
})