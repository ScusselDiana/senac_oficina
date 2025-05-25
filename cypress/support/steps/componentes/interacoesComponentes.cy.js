Given('que o usuário acessa o formulário de automação', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  
  When('ele seleciona o gênero {string}', (genero) => {
    cy.contains('.custom-control-label', genero).click();
  });
  
  When('escolhe o estado {string}', (estado) => {
    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').contains(estado).click();
  });
  
  When('marca a opção {string}', (hobby) => {
    cy.contains('.custom-control-label', hobby).click();
  });
  
  Then('o campo de nome deve estar visível', () => {
    cy.get('#firstName').should('be.visible');
  });