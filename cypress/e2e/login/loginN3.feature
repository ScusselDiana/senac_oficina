Feature: Teste do fluxo de login e navegação na aplicação

  Scenario: Login bem-sucedido
    Given Eu acesso o site de login
    When Eu preencho o campo de usuário e senha e clico em login
    Then Eu devo ver a mensagem de sucesso "You logged into a secure area!"
    
