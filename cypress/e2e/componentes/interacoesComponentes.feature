Feature: Interações com componentes visuais

  Scenario: Preencher e interagir com checkbox, dropdown e radio button
    Given que o usuário acessa o formulário de automação
    When ele seleciona o gênero "Female"
    And escolhe o estado "NCR"
    And marca a opção "Sports"
    Then o campo de nome deve estar visível