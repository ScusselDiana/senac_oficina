Feature: Adicionar item ao carrinho

  Scenario: Adicionar um produto ao carrinho com sucesso
    Given que o usuário está logado no SauceDemo
    When ele adiciona um produto ao carrinho
    Then o produto deve aparecer no carrinho
