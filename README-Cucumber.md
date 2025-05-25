🥒 Por que usar o Cucumber com Cypress?

✅ Facilita a comunicação: Cenários são escritos em linguagem acessível (Ex: "Dado que estou logado").
✅ Documentação viva: Os testes viram documentação atualizada do sistema.
✅ Foco no comportamento: Você escreve o que o sistema deve fazer, não como.
✅ Integra com Cypress: Usa a robustez do Cypress para testes E2E com a clareza do Gherkin.

📋 Como funciona?
Você escreve os cenários em .feature, por exemplo:

Funcionalidade: Consulta de usuário
  Cenário: Buscar usuário existente
    Dado que existe um usuário com ID "1"
    Quando faço uma requisição GET para "/users/1"
    Então a resposta deve conter o campo "firstName" com valor "Terry"

E cria os step definitions (em JavaScript) que dizem o que cada passo executa, como:

Given('que existe um usuário com ID {string}', (id) => {
  cy.wrap(id).as('userId');
});

🔧 Principais comandos do Cucumber no Cypress
| Palavra-chave | Função                            | Exemplo                                   |
| ------------- | --------------------------------- | ----------------------------------------- |
| `Given`       | Pré-condições ou contexto         | `Given que estou logado`                  |
| `When`        | Ação que o usuário faz            | `When clico em "Enviar"`                  |
| `Then`        | Verificações (assertivas)         | `Then deve aparecer a mensagem "Sucesso"` |
| `And` / `But` | Complementos de passos anteriores | `And clico em "Cancelar"`                 |

🧩 O que são Cenários no Cucumber?

No Cucumber, cenários são casos de teste escritos em linguagem natural (Gherkin) que descrevem comportamentos esperados do sistema.
Eles são compostos por passos que simulam ações e verificações — e servem como ponte entre negócio e automação.

😎 Padrão
O cenário padrão é usado quando você quer descrever um fluxo com dados fixos e únicos.

Scenario: Buscar um usuário
    Given que existe um usuário mockado com ID "1" e nome "Emily"
    When faço uma requisição GET para "/users/1"
    Then a resposta deve conter o campo "firstName" com valor "Emily""

Quando usar:
* Fluxo simples e direto
* Dados únicos e específicos
* Teste de um único comportamento por vez

😉 Cenário Outline

O Scenario Outline permite testar o mesmo fluxo com diferentes dados, utilizando uma tabela de exemplos.

scenario outline: Buscar diferentes usuários
  Given que existe um usuário com ID "<id>"
  When faço uma requisição GET para "/users/<id>"
  Then a resposta deve conter o campo "firstName" com valor "<nome>"

  Exemplos:
    | id | nome   |
    | 1  | Emily  |
    | 2  | Terry  |
    | 3  | Johnny |


Quando usar:
* Vários testes com a mesma lógica
* Reduz duplicação de cenários
* Facilita manutenção


😌 Cenário com Data Table

O data table permite passar uma estrutura de dados tabular (como um dicionário) diretamente para o código do passo, ótimo para requisições como PUT/POST

 Scenario: Atualizar um usuário
  Given que existe um usuário com ID "1"
  When faço uma requisição PUT para "/users/1" com os dados:
    | firstName | João     |
    | lastName  | Oliveira |
  then a resposta deve conter o campo "firstName" com valor "João"

Código associado

When('faço uma requisição PUT para {string} com os dados:', (endpoint, dataTable) => {
  const body = dataTable.rowsHash(); // converte em objeto JS
  cy.request('PUT', `https://dummyjson.com${endpoint}`, body).as('putResponse');
});


🔗 Integração com Cypress

Você precisa usar o preprocessor @badeball/cypress-cucumber-preprocessor. Com ele, você pode conectar os cenários .feature com os arquivos de passo (.js) usando a estrutura de pastas e a configuração adequada.

Exemplo de estrutura:

cypress/
├── e2e/
│   └── usuarios.feature
├── support/
│   └── steps/
│       └── usuarios.js
