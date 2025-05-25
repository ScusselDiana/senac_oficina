Feature: Login com Page Object Model

  Scenario: Acessar o site e fazer login com sucesso
    Given Eu acesso o site de login
    When Eu preencho o campo de usuário e senha e clico em login
    Then Eu devo ver a mensagem de sucesso "You logged into a secure area!"
