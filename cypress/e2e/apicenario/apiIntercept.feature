Feature: Enviar dados via API e validar resposta

 Scenario: Criar um novo produto via API DummyJSON
  When o usuário envia um produto para a API
  Then a resposta deve conter o título "Essence Mascara Lash Princess"
