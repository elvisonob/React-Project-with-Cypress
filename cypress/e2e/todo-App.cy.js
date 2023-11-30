///<reference types="Cypress" />;

describe('toDo-App', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('#list').type('I am reading today');
    cy.get('button').click();
    cy.get('#list').should('be.empty');
    cy.get('.array-List').should('not.empty');
    cy.get('.delete-button').click();
    cy.get('.list-item').should('not.exist');
  });
});
