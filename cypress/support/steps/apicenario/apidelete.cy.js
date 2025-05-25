Given('que existe um usuário mockado com ID {string} e nome {string}', (id, nome) => {
    cy.intercept('GET', `https://dummyjson.com/users/${id}`, {
      statusCode: 200,
      body: {
        id: Number(id),
        firstName: nome,
        lastName: "Exemplo"
      }
    }).as('getUserMock');
  });
  
  Given('que existe um usuário com ID {string}', (id) => {
    cy.wrap(id).as('userId');
  });
  
  When('faço uma requisição GET para {string}', (endpoint) => {
    cy.request('GET', `https://dummyjson.com${endpoint}`).as('getResponse');
  });
  
  When('faço uma requisição PUT para {string} com os dados:', (endpoint, dataTable) => {
    const body = dataTable.rowsHash();
    cy.request('PUT', `https://dummyjson.com${endpoint}`, body).as('putResponse');
  });
  
  When('faço uma requisição DELETE para {string}', (endpoint) => {
    cy.request('DELETE', `https://dummyjson.com${endpoint}`).as('deleteResponse');
  });
  
  // Validação genérica com checagem segura de aliases
  Then('a resposta deve conter o campo {string} com valor {string}', (campo, valor) => {
    const aliases = ['@getResponse', '@putResponse', '@deleteResponse'];
    let encontrado = false;
  
    cy.wrap(aliases).each((alias) => {
      cy.get(alias, { log: false, timeout: 1000 }).then(
        (res) => {
          if (res?.body?.[campo] !== undefined && !encontrado) {
            expect(res.body).to.have.property(campo, valor === "true" ? true : valor);
            encontrado = true;
          }
        },
        (err) => {
          // Se alias não existe, ignora o erro e segue
          if (err.message && err.message.includes('could not find a registered alias')) {
            cy.log(`Alias ${alias} não encontrado, ignorando.`);
            return;
          }
          throw err;
        }
      );
    }).then(() => {
      if (!encontrado) {
        throw new Error(`Nenhuma resposta com o campo "${campo}" com valor "${valor}" foi encontrada.`);
      }
    });
  });
  
  // Steps específicos para cada tipo de requisição
  Then('a resposta GET deve conter o campo {string} com valor {string}', (campo, valor) => {
    cy.get('@getResponse').its('body').should('have.property', campo, valor);
  });
  
  Then('a resposta PUT deve conter o campo {string} com valor {string}', (campo, valor) => {
    cy.get('@putResponse').its('body').should('have.property', campo, valor);
  });
  
  Then('a resposta DELETE deve conter o campo {string} com valor {string}', (campo, valor) => {
    // No delete, o valor costuma ser booleano, ajusta aqui:
    const val = (valor.toLowerCase() === 'true');
    cy.get('@deleteResponse').its('body').should('have.property', campo, val);
  });
  