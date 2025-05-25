Feature: Testar login no site The Internet

  Scenario Outline: Realizar login com diferentes credenciais
    Given Eu acesso o site de login
    When Eu preencho o campo de usuário com "<username>"
    And Eu preencho o campo de senha com "<password>"
    And Eu clico no botão de login
    Then Eu devo ver a mensagem "<message>"

    Examples:
      | username        | password             | message                                     |
      | tomsmith        | SuperSecretPassword! | You logged into a secure area!              |
      | admin           | wrongpassword        | Your username is invalid!                   |
      | invalidUser     | SuperSecretPassword! | Your username is invalid!                   |
