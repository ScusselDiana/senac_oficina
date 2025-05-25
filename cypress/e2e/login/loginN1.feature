Feature: Login no The Internet

  Scenario: Acessar o site e fazer login com sucesso
    Given Eu acesso o site "https://the-internet.herokuapp.com/logi"
    When Eu preencho o campo de usuári com "tomsmith"
    And Eu preencho o campo de senha com "SuperSecretPassword!"
    And Eu clico no botão de login
    Then Eu devo ver a mensagem de sucesso "You logged into a secure area!"
