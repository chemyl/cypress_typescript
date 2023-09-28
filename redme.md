 Sample project to UI Automation testing with Cypress on Type Script
 
Prerequisites
* install npm on machine = npm install -g npm
* create workspace
* create package.json = npm init -y
* install cypress = npm install cypress
* install typescript = npm install -D typescript
* check package.json with dependencies and devdependencies
* add command to package.json scripts section
  * cypress:open": "cypress open",
  * "cypress:run": "cypress run"
* add new test file spec.cy.ts
* add file tsconfig.json to the root folder 
  * { "compilerOptions": {
  * "target": "es5",
  * "lib": ["es5", "dom"],
  * "types": ["cypress", "node"] },
  * "include": ["**/*.ts"] }
* run cypress = npm run cypress:open
* select spec test-case and launch




For more information visit Cypress page
https://docs.cypress.io/guides/overview/why-cypress/


