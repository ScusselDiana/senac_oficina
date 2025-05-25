When('o usuário envia um produto para a API', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/products/add',
      body: {
        title: 'Essence Mascara Lash Princess'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).as('resposta');
  });
  
  Then('a resposta deve conter o título {string}', (titulo) => {
    cy.get('@resposta').then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.title).to.eq(titulo);
    });
  });
  