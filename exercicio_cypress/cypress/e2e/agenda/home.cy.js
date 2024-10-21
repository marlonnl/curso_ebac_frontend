/// <reference types="cypress" />

describe("Testes para a página de agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um contato", () => {
    cy.get("input[type=text]").type("Novo contato");
    cy.get("input[type=email]").type("meuemail@gmail.com");
    cy.get("input[type=tel]").type("99999999");

    cy.get(".adicionar").click();

    cy.contains("Novo contato");
  });

  it("Deve alterar os dados de um contato", () => {
    cy.get(".edit").first().click();

    cy.get("input[type=text]").clear().type("Contato editado");
    cy.get("input[type=email]").clear().type("editandoemail@gmail.com");
    cy.get("input[type=tel]").clear().type("1234567890");

    cy.get(".alterar").click();

    cy.contains("Contato editado");
  });

  it("Deve deletar o último contato da lista", () => {
    cy.get(".sc-gueYoa > .delete").last().click();
  });
});
