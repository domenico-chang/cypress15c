describe('Registro y validación de productos', () => {
  it('debe registrar un producto con datos válidos y categoría seleccionada', () => {
    cy.visit('/');

    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.get('input[placeholder="Ingrese código"]').type('SKU-0001');
    cy.get('input[placeholder="Ingrese nombre"]').type('Laptop Dell XPS');
    cy.get('input[placeholder="Ingrese descripción"]').type('Equipo de alto rendimiento');
    cy.get('input[placeholder="Stock"]').type('15');
    cy.get('#fruit-select').select('Ropa').should('have.value', 'Ropa');
    cy.screenshot('05-producto-formulario-completo');

    cy.get('form button[type="submit"]').should('be.enabled').click();
    cy.contains('Gracias por registrar la información del producto:').should('be.visible');
    cy.contains('li', 'Código').should('contain', 'SKU-0001');
    cy.contains('li', 'Nombre de producto').should('contain', 'Laptop Dell XPS');
    cy.contains('li', 'Descripción').should('contain', 'Equipo de alto rendimiento');
    cy.contains('li', 'Stock').should('contain', '15');
    cy.contains('li', 'Categoría').should('contain', 'Ropa');
    cy.screenshot('05-producto-registrado');
  });

  it('debe validar los campos y exigir una categoría antes del registro', () => {
    cy.visit('/');

    cy.contains('h1', 'Registro de Productos').should('be.visible');
    cy.contains('Por favor ingrese todo los datos solicitados.').should('be.visible');
    cy.get('form button[type="submit"]').should('be.disabled');
    cy.get('input[placeholder="Ingrese código"]')
      .should('have.attr', 'minlength', '5')
      .type('A')
    cy.get('input[placeholder="Ingrese nombre"]').type('Mouse');
    cy.get('input[placeholder="Ingrese descripción"]').type('Mouse inalámbrico');
    cy.get('input[placeholder="Stock"]').type('5');

    cy.get('form button[type="submit"]').should('be.disabled');
    cy.get('input[placeholder="Ingrese código"]').clear().type('SKU-0002');
    cy.get('form button[type="submit"]').should('be.enabled');
    cy.get('#fruit-select').should('have.value', 'Select');
    cy.screenshot('06-formulario-datos-sin-categoria');

    cy.on('window:alert', (message) => {
      expect(message).to.equal('Por favor seleccione la Categoría');
    });
    cy.get('form button[type="submit"]').click();
    cy.contains('Gracias por registrar la información del producto:').should('not.exist');
    cy.screenshot('06-validacion-categoria');
  });
});
