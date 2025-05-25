
✅ Por que usar o Cypress?

O Cypress é uma ferramenta de automação de testes de front-end (e APIs) moderna e poderosa.
Ele é popular por ser:

🔍 Rápido – execução em tempo real no navegador
🎯 Confiável – espera automática por elementos e respostas
🧪 Completo – suporta testes de UI, integração e API
🤝 Fácil de integrar com ferramentas como Cucumber, Git, CI/CD


Comandos mais utilizados no Cypress
🔸 cy.request() - Faz requisições HTTP diretas (sem precisar de front-end).
EX: cy.request('GET', 'https://dummyjson.com/users/1')

🔸 cy.get() -Busca elementos do DOM ou aliases registrados com .as().
EX: cy.get('@getResponse')

🔸 cy.wrap()
Envolve um valor para que possa ser manipulado como um comando Cypress.
EX: cy.wrap('valor').as('alias') - usado para armazenar dados como userId.

🔸cy.log() - Escreve mensagens no log da execução.

🔸 cy.its() + should() - Acessa propriedades de objetos e faz asserções.
EX: cy.get('@getResponse').its('body').should('have.property', 'firstName', 'João')

📚 Documentação cypress - https://www.cypress.io/


🧑‍🏫 COMO COLETAR ELEMENTOS NA PÁGINA

 1. Clique com o botão direito no campo desejado > "Inspecionar"
 2. Procure pelo atributo `id`, `name`, `class`, `data-*`
3. Preferência:
    - ID:          cy.get('#meu-id')
    - Name:        cy.get('[name="campo"]')
    - Data-testid: cy.get('[data-testid="algum-nome"]')
    - Class:       cy.get('.classe') (evitar se for genérica)

 4. Para identificar interações dinâmicas:
    - Use o Cypress aberto com `npx cypress open`
    - Use o `Selector Playground` no DevTools do Cypress

 Exemplo real:
 Campo de usuário com id="username" => cy.get('#username')
 Botão de submit com tag <button type="submit"> => cy.get('button[type="submit"]')
 
