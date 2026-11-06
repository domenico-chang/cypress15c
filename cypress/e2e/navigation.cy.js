describe('Navegación y responsividad de la aplicación', () => {
  it('debe presentar el formulario React en el viewport de escritorio', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.get('form').should('be.visible');
    cy.get('input[placeholder="Ingrese código"]').should('be.visible');
    cy.get('input[placeholder="Ingrese nombre"]').should('be.visible');
    cy.get('input[placeholder="Ingrese descripción"]').should('be.visible');
    cy.get('input[placeholder="Stock"]').should('be.visible');
    cy.get('#fruit-select').should('be.visible');
    cy.screenshot('03-formulario-viewport-escritorio');
  });

  it('debe mantener el formulario visible en un viewport móvil', () => {
    cy.viewport(375, 667);
    cy.visit('/');

    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.get('form').should('be.visible');
    cy.get('input[placeholder="Ingrese código"]').should('be.visible');
    cy.get('input[placeholder="Ingrese nombre"]').should('be.visible');
    cy.get('input[placeholder="Ingrese descripción"]').should('be.visible');
    cy.get('input[placeholder="Stock"]').should('be.visible');
    cy.get('#fruit-select').should('be.visible');
    cy.window().its('innerWidth').should('eq', 375);
    cy.screenshot('04-formulario-viewport-movil');
  });
});
