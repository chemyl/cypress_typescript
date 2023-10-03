
/*
	Select elements / DropDown elements
	<select> -> <option value:> <option value:> </select>

	syntax:
	cy.get('select element')
		.select('option',{force:true}) => choose element even its disabled or hidden
		.select('option',{log:false}) => disable loging element findings
		.select('option',{timeout:5000}) => set timeout for selection option

		.select('option text')	=> select based on option text
		.select('option value')	=> select based on option value

		.select(['Esperanto','Deutsch','Italiano'])	=> multiple selection by option text
		.select(['']).find('option:selected') => return selected options element
		.select(['']).find('option:selected').each(($el) => {} => work with each selected elements

		.select(['eo','de','it']).invoke('val').should('deep.equal',['eo','de','it']) => checking selected elements value

*/

describe("Cypress dropdown elements", () => {
  it("select single dropdown element", () => {
      cy.visit("https://www.wikipedia.org/");
      cy.get('#searchLanguage').select('Deutsch').invoke('val').then((value)=>{
      	cy.log("selected options have text - "+ value)
      });
      cy.wait(2000);
      cy.get('#searchLanguage').select('de').should('have.value',"de");
  });

  it("fetch single selected element text", () => {
      cy.visit("https://www.wikipedia.org/");
        cy.get('#searchLanguage').select('de');
		cy.get('#searchLanguage').find('option:selected').should('have.text',"Deutsch")
  });

  xit("multiple selection elements", () => {
//in case when dropdown element have multiple selection attribute
      cy.visit("https://www.wikipedia.org/");
//selections multiple options based on options text
        cy.get('#searchLanguage').select(['Esperanto','Deutsch','Italiano']).invoke('val').then((value) => {
        	console.log(value)});		//find whole array output in devTools=> console

//fetching each selected elements value $el
        cy.get('#searchLanguage').select(['Esperanto','Deutsch','Italiano']).find('option:selected').each(($el) => {
        	cy.wrap($el).invoke('val').then((value)=>{cy.log(value)}) })		// print value

//fetching each selected elements text $el
        cy.get('#searchLanguage').select(['Esperanto','Deutsch','Italiano']).find('option:selected').each(($el) => {
        	cy.wrap($el).invoke('text').then((text)=>{cy.log(text)}) })		// print value

//checking each selected elements value properties $el
        cy.get('#searchLanguage').select(['Esperanto','Deutsch','Italiano']).invoke('val').should('deep.equal',['eo','de','it']);
  })
})
