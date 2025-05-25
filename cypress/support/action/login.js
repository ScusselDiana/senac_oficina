import log from '../../pageobjects/login.js'
const urlAPI = Cypress.env('urlAPI')
const baseUrl = Cypress.env('baseUrl')

Cypress.Commands.add('login', (user, senha) => {
  cy.intercept('POST', `${urlAPI}conta/entrar`).as('login')
  cy.get(log.Login.iptEmail)
    .should('exist')
    .click()
    .clear()
    .type(user)

  cy.get(log.Login.iptSenha)
    .should('be.visible')
    .click()
    .clear()
    .type(senha)

  cy.get('button')
    .contains('Login')
    .click()

  cy.wait('@login')
  cy.verificaMensagemSnackBar('Login realizado com sucesso.')


})

Cypress.Commands.add('loginWaitProdutos', (email, senha) => {
  cy.get(log.Login.iptEmail)
    .clear()
    .type(email, { log: false })

  cy.get(log.Login.iptSenha).type(senha, { log: false })

  cy.intercept(`${Cypress.env('urlAPI')}produto/obter-todos-com-visualizacao`).as('getProdutos')

  cy.get(log.Login.btnLogin, { timeout: 50000 }).click()

  cy.get(log.Login.ajax).should('not.exist')

  cy.wait('@getProdutos')
})

Cypress.Commands.add('loginViaAPI', (email, senha) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('urlAPI')}conta/entrar`,
    body: {
      email: email,
      senha: senha,
    }
  })
    .then((resp) => {
      window.localStorage.setItem('portal.token', resp.body.access_token)
      window.localStorage.setItem('portal.user', JSON.stringify(resp.body.user))
    })
})



Cypress.Commands.add('loginSession', (
  usuario,
  senha,
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit(`${baseUrl}login`)
    cy.get(log.Login.iptEmail)
          .should('exist')
          .click()
          .clear()
          .type(usuario);
          
          cy.get(log.Login.iptSenha)
            .should('be.visible')
            .click()
            .clear()
            .type(senha, { log: false });

    cy.get('button').contains('Login').click();
    cy.verificaMensagemSnackBar('Login realizado com sucesso.')

  }
  const validate = () => {
    cy.visit('https://qa-atual-portal.deps.com.br')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/login')
  }
  const option = {
    cacheAcrossSpecs: true,
    validate,
  }
  if (cacheSession) {
    cy.session(`${usuario}_sessao1`, login, option);  
  
  } else {
    login()
  }
});