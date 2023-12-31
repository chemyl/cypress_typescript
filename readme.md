### Sample project to UI Automation testing with Cypress on Type Script
 
### Getting Started
* install npm on machine = **_npm install -g npm_**
* create workspace
* create package.json = **_npm init -y_**
* install cypress = **_npm install cypress_**
* install typescript = **_npm install -D typescript_**
* check package.json with **dependencies** and **dev_dependencies**
* add command to package.json scripts section
  * cypress:open": "_cypress open_",
  * "cypress:run": "_cypress run_"
* add new test file **_testsuite.cy.ts_**
* add file **_tsconfig.json_** to the root folder
* run cypress = **_npm run cypress:open_**
* select spec test-case and launch

### Covered topics 
* **_spec.cy.ts_** | CSS locators strategy and syntax
* **_options.cy.ts_** | cy.get() with options and alias
* **_sync.cy.ts_** | sync / async mode with TS and Cy commands 
* **_browser_elements.cy.ts_** | fetching element properties 
* **_drop_down_element.cy.ts_** | dropdown web elements fetching value and text
* **_contains_method.cy.ts_** | contains method for select strategy

For more information visit Cypress page
https://docs.cypress.io/guides/overview/why-cypress/
