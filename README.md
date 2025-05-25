# Cypress Automation - Aula de Testes com Cucumber e Page Objects

## Visão Geral

Este repositório contém um exemplo de automação de testes usando **Cypress** com integração de **Cucumber** e **Page Objects**. O objetivo deste projeto é ensinar como estruturar testes automatizados para uma aplicação web, padronizar o código e utilizar boas práticas de desenvolvimento.

### Estrutura do Projeto

- **Cypress**: Framework para testes end-to-end.
- **Cucumber**: Utilizado para criar os testes em Gherkin, permitindo a execução de cenários de comportamento.
- **Page Object Model (POM)**: Abordagem para organizar os testes de maneira modular, isolando a lógica de interação com a interface da aplicação.

---

## Instalação do Projeto

### Passo 1: Clonar o Repositório

```bash
git clone 'repositorio'
cd seu-repositorio
```

### Passo 2: Instalar as Dependências

Ao abrir o projeto pela primeira vez, execute o comando abaixo para instalar as dependências:

```bash
npm install
```

Isso instalará todas as dependências necessárias, incluindo o Cypress, Cucumber e outros pacotes utilizados no projeto.

---

## Configuração do Ambiente

### Definindo URLs e Credenciais no `cypress.env.json`

Para configurar a URL base e as credenciais de login, crie um arquivo `cypress.env.json` no diretório raiz do projeto com o seguinte conteúdo:

```json
{
  "baseUrl": "https://admin-demo.nopcommerce.com",
  "usuario": {
    "email": "admin@yourstore.com",
    "senha": "admin"
  }
}
```

Isso permitirá que você utilize a variável `Cypress.env('baseUrl')` e `Cypress.env('usuario')` nos testes.

---

## Padronização do Código

### 1. **Indentação e Formatação**

- Utilize o atalho `SHIFT + ALT + F` no Visual Studio Code para realizar a indentação automaticamente.
  
### 2. **Padronização dos Nomes de Componentes**

- Botão: `btn`
- Input: `ipt`
- ComboBox: `cmb`
- Link: `lnk`
- Imagem dos ícones: `img`
- Grids: `grd`

### 3. **Boas Práticas de Nomenclatura**

- Utilize sempre o nome por extenso.
- Utilize a prática **Camel Case** para a escrita das variáveis, métodos, comandos e nome de elementos da página. Exemplo: `btnCadastrar`, `lnkPerfil`.
- **Última linha de comando dentro de métodos `given`, `when`, `then` deve usar ponto e vírgula (`;`).**
- Utilize `F2` para alterar o nome de uma variável e modificar em todos os locais do código onde ela é usada.

---

## Atalhos do Visual Studio Code

- **CTRL + K + 0**: Expandir métodos.
- **CTRL + K + J**: Recolher métodos.
- **CTRL + C**: Para parar a execução.
- **CTRL + ;**: Comentar/descomentar código.
- **SHIFT + ALT + F**: Para realizar a indentação do arquivo.

---

## Exemplos de Utilização de Data

### Usar data atual em um input

```javascript
var data = new Date();
cy.get('input').type(data.toLocaleDateString())
```

### Usar data de ontem em um input

```javascript
var data = new Date();
data.setDate(data.getDate() - 1);
cy.get('input').type(data.toLocaleDateString())
```

### Usar data de amanhã em um input

```javascript
var data = new Date();
data.setDate(data.getDate() + 1);
cy.get('input').type(data.toLocaleDateString())
```

---

## Como Executar os Testes

### Executar Todos os Testes

Para executar todas as **features** do projeto (todas as funcionalidades testadas), utilize o comando:

```bash
npx cypress run --spec cypress/e2e/**/*.feature
```

Isso irá executar todas as features definidas no diretório `cypress/e2e/`.

### Executar Apenas uma Feature

Para executar apenas uma feature específica, como o teste de login, por exemplo, utilize o comando:

```bash
npx cypress run --spec cypress/e2e/login/loginN1.feature
```

---

## Estrutura do Projeto

A estrutura do repositório segue a convenção do Cypress e Cucumber, organizada da seguinte forma:

```
├── cypress/
│   ├── e2e/
│   │   ├── login/
│   │   │   └── loginN1.feature
│   │   ├── home/
│   │   └── settings/
│   ├── fixtures/
│   ├── support/
│   │   ├── pageObjects/
│   │   │   └── loginPage.js
│   │   ├── steps/
│   │   │   └── loginSteps.js
│   └── plugins/
├── cypress.env.json
├── package.json
└── README.md
```

### **Page Objects**

O padrão **Page Object** é utilizado para abstrair a lógica de interação com a interface da aplicação, mantendo os testes mais limpos e reutilizáveis.

Por exemplo, um arquivo de `loginPage.js` em `cypress/support/pageObjects/` pode se parecer com:

```javascript
class LoginPage {
  get emailInput() {
    return cy.get('#Email');
  }

  get passwordInput() {
    return cy.get('#Password');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get successMessage() {
    return cy.get('#flash-messages');
  }

  login(email, password) {
    this.emailInput.clear().type(email);
    this.passwordInput.clear().type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();
```

### **Cucumber Steps**

Os arquivos de passos em `cypress/support/steps/` definem as ações do Cucumber (Given, When, Then) em relação à aplicação:

```javascript
import LoginPage from '../../support/pageObjects/loginPage';

Given("Eu acesso o site", () => {
  cy.visit(Cypress.env('baseUrl'));
});

When("Eu faço login com {string} e {string}", (email, password) => {
  LoginPage.login(email, password);
});

Then("Eu devo ver a mensagem {string}", (message) => {
  LoginPage.successMessage.should('contain', message);
});
```

---

## Considerações Finais

Este projeto serve como um exemplo prático de automação de testes usando **Cypress**, **Cucumber** e **Page Objects**. Ele ajuda a estruturar testes de forma organizada e eficiente, permitindo a execução de cenários complexos de forma escalável e reutilizável. Lembre-se de seguir as boas práticas de codificação e usar a convenção de nomenclatura para manter o código limpo e legível.

