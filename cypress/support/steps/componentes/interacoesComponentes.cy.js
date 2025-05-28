Given('que o usuário acessa o formulário de contato do WebDriverUniversity', () => {
  cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
});

When('preenche o campo nome {string}', (nome) => {
  cy.get('input[name="first_name"]').type(nome);
});

When('preenche o campo sobrenome {string}', (sobrenome) => {
  cy.get('input[name="last_name"]').type(sobrenome);
});

When('preenche o campo email {string}', (email) => {
  cy.get('input[name="email"]').type(email);
});

When('preenche o campo comentário {string}', (comentario) => {
  cy.get('textarea[name="message"]').type(comentario);
});

When('envia o formulário', () => {
  cy.get('input[type="submit"]').click();
});

Then('a mensagem de sucesso deve ser exibida', () => {
  cy.get('h1').should('contain.text', 'Thank You for your Message!');
});

Then('a mensagem de erro deve ser exibida', () => {
  cy.get('body').should('contain.text', 'Error: all fields are required');
});