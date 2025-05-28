Feature: Adicionar múltiplos produtos ao carrinho


Scenario: Adicionar múltiplos produtos ao carrinho
  Given que o usuário está logado no site SauceDemo
  When ele adiciona os produtos ao carrinho
    | Sauce Labs Backpack     |
    | Sauce Labs Bolt T-Shirt |
  Then o carrinho deve conter 2 itens


Scenario Outline: Adicionar produto ao carrinho
  Given que o usuário está logado no site SauceDemo
  When ele adiciona o produto "<produto>"
  Then o carrinho deve conter <quantidade> itens

Examples:
  | produto                 | quantidade |
  | Sauce Labs Backpack     | 1          |
  | Sauce Labs Bike Light   | 1          |