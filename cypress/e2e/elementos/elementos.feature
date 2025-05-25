Feature: Interação com Dropdown e Checkboxes

  Scenario: Selecionar valor na Dropdown List
    Given que eu acessei a página de configurações
    When eu seleciono o valor "Option 2" na Dropdown List
    Then o valor selecionado na Dropdown deve ser "2"

  Scenario: Marcar e desmarcar checkboxes
    Given que eu acessei a página de configurações dos Checkboxes
    When eu marco o checkbox "checkbox 1"
    And eu desmarco o checkbox "checkbox 2"
    Then o checkbox "checkbox 1" deve estar marcado
    And o checkbox "checkbox 2" deve estar desmarcado
