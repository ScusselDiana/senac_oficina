

// Teste de Dropdown
Given('que eu acessei a página de configurações', () => {
  const baseUrl = Cypress.env('baseUrl');  // Pegando a URL base do env
  cy.visit(`${baseUrl}/dropdown`);  // URL da página com a Dropdown
});

Given('a lista suspensa está visível', () => {
  cy.get('select').should('be.visible');  // Verifica se o select (dropdown) está visível
});

When('eu seleciono o valor {string} na Dropdown List', (option) => {
  cy.get('select').select(option);  // Seleciona a opção na lista suspensa
});

Then('o valor selecionado na Dropdown deve ser {string}', (option) => {
  cy.get('select').should('have.value', option);  // Verifica se o valor da Dropdown é o esperado
});

// Teste de Checkboxes
Given('que eu acessei a página de configurações dos Checkboxes', () => {
  const baseUrl = Cypress.env('baseUrl');  // Pegando a URL base do env
  cy.visit(`${baseUrl}/checkboxes`);  // URL da página com os checkboxes
});

Given('os checkboxes estão visíveis', () => {
  cy.get('#checkboxes input[type="checkbox"]').should('be.visible');  // Verifica se os checkboxes estão visíveis
});

When('eu marco o checkbox {string}', (checkboxLabel) => {
  // Localiza o checkbox pelo texto do label
  cy.get('#checkboxes input[type="checkbox"]')
    .eq(0)  // Seleciona o primeiro checkbox (para marcar o "checkbox1")
    .check();  // Marca o checkbox
});

When('eu desmarco o checkbox {string}', (checkboxLabel) => {
  // Localiza o checkbox pelo texto do label
  cy.get('#checkboxes input[type="checkbox"]')
    .eq(1)  // Seleciona o segundo checkbox (para desmarcar o "checkbox2")
    .uncheck();  // Desmarca o checkbox
});

Then('o checkbox {string} deve estar marcado', (checkboxLabel) => {
  cy.get('#checkboxes input[type="checkbox"]')
    .eq(0)  // Verifica o primeiro checkbox
    .should('be.checked');  // Verifica se o checkbox está marcado
});

Then('o checkbox {string} deve estar desmarcado', (checkboxLabel) => {
  cy.get('#checkboxes input[type="checkbox"]')
    .eq(1)  // Verifica o segundo checkbox
    .should('not.be.checked');  // Verifica se o checkbox não está marcado
});
