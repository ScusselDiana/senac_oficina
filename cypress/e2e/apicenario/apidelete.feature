Feature: Testes com a API de usuários (DummyJSON)

  Scenario: Buscar um usuário
    Given que existe um usuário mockado com ID "1" e nome "Emily"
    When faço uma requisição GET para "/users/1"
    Then a resposta deve conter o campo "firstName" com valor "Emily"

  Scenario: Atualizar um usuário
    Given que existe um usuário mockado com ID "1" e nome "João"
    When faço uma requisição PUT para "/users/1" com os dados:
      | firstName | João |
    Then a resposta PUT deve conter o campo "firstName" com valor "João"

  Scenario: Deletar um usuário
    Given que existe um usuário com ID "1"
    When faço uma requisição DELETE para "/users/1"
    Then a resposta DELETE deve conter o campo "isDeleted" com valor "true"
