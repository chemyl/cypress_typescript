  /*

  TS or JS async out the box. Never guarantee that tasks will be performed in sequence.
  If need run code in sync mode (top to bottom) use -> promises, callback functions or async await.

  By default Cypress sync their own commands (cy.)
  but when you mix lines of code by invoking JS or TS it may occur in async mode.

  */

describe("Async and Sync", () => {
  it("run mixed scripts", () => {
      console.log("Navigate yo url wit timeout");                            //JS command
      cy.visit("https://example.cypress.io/cypress-api",{ timeout: 50000 }); //Cy command

      cy.get('name=\'firstname\'').type("Name").then(()=>{     //wraping with then() help facing async cy. and js. related commands
        console.log("enter data");
      });

      cy.get('link[rel=icon],[type=image]');
      console.log("enter data2");

  })

  it("run mixed scripts", () => {
    let str:"12345"                                                 //cy variables
      cy.visit("https://example.cypress.io/cypress-api");
        console.log("open URL");                                    //first

      cy.get('name=\'firstname\'').type("Name").invoke('val').then((myValue)=> {
        str = myValue
        console.log("enter data"+ str);                             //third
      });

      cy.get('link[rel=icon],[type=image]').should('have.text',"expected text");
        console.log("enter data2");                                 //second
  })
})