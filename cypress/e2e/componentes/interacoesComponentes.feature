Feature: Preenchimento de formulário em site confiável

  Scenario: Preencher formulário de contato
    Given que o usuário acessa o formulário de contato do WebDriverUniversity
    When preenche o campo nome "Maria"
    And preenche o campo sobrenome "Oliveira"
    And preenche o campo email "maria@email.com"
    And preenche o campo comentário "Gostaria de mais informações sobre cursos."
    And envia o formulário
    Then a mensagem de sucesso deve ser exibida

    Scenario: Validar erro ao enviar formulário sem preencher campos obrigatórios
    Given que o usuário acessa o formulário de contato do WebDriverUniversity
    When envia o formulário
    Then a mensagem de erro deve ser exibida