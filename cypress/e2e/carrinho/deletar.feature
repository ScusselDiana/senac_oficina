Feature: Remover produtos do carrinho no SauceDemo

  Background:
    Given que o usuário está logado no sistema SauceDemo
    And  que o usuário adicionou o produto "Sauce Labs Backpack" ao carrinho
    And o usuário acessa o carrinho

  Scenario: Remover um produto do carrinho
    Given  remove o produto "Sauce Labs Backpack"
    Then o carrinho não deve exibir o produto "Sauce Labs Backpack"