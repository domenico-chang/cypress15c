describe('Aplicación React de registro de productos', () => {
  it('debe mostrar la aplicación React y el encabezado del formulario', () => {
    cy.visit('/');

    cy.title().should('eq', 'Registro de Productos');
    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.location('href').should('not.include', 'vercel.com/login');
    cy.get('form').should('be.visible');
    cy.screenshot('01-aplicacion-react-cargada');
  });

  it('debe mostrar los campos reales del formulario de producto', () => {
    cy.visit('/');

    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.get('input[placeholder="Ingrese código"]').should('be.visible');
    cy.get('input[placeholder="Ingrese nombre"]').should('be.visible');
    cy.get('input[placeholder="Ingrese descripción"]').should('be.visible');
    cy.get('input[placeholder="Stock"]').should('be.visible');
    cy.get('#fruit-select').should('be.visible');
    cy.get('form button[type="submit"]').should('be.disabled');
    cy.screenshot('02-formulario-producto-visible');
  });
});
