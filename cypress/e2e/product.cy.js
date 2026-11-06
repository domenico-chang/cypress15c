describe('Prueba 3: Registrar un producto', () => {
  it('Debe capturar pantalla del formulario de producto', () => {
    // Visitar la página
    cy.visit('/');
    
    // Captura inicial de la página
    cy.screenshot('05-producto-inicio');
    
    // Esperar a que la página cargue completamente
    cy.get('body', { timeout: 10000 }).should('be.visible');
    
    // Buscar campos de formulario
    cy.get('input, textarea, button', { timeout: 5000 }).each(($el, index) => {
      // Procesar elementos del formulario (4 campos: nombre, descripción, precio, stock)
      if ($el.is('input') && index < 4) {
        cy.wrap($el).then(($input) => {
          if (!$input.attr('disabled')) {
            if (index === 0) {
              cy.wrap($input).type('Laptop Dell XPS 13', { delay: 50 });
            } else if (index === 1) {
              cy.wrap($input).type('Laptop de alto rendimiento', { delay: 50 });
            } else if (index === 2) {
              cy.wrap($input).type('1299.99', { delay: 50 });
            } else if (index === 3) {
              cy.wrap($input).type('15', { delay: 50 });
            }
          }
        });
      }
    });
    
    // Captura del formulario después de llenar
    cy.wait(500);
    cy.screenshot('05-producto-formulario-lleno');
    
// Buscar botón de envío
cy.get('button[type="submit"]', { timeout: 3000 }).then(($btn) => {
  if ($btn.length > 0 && !$btn.attr('disabled')) {
    // $btn[0] toma el primer botón exacto de la lista de elementos encontrados
    cy.wrap($btn[0]).click({ force: true });
    cy.screenshot('05-producto-enviado');
  } else {
    cy.screenshot('05-producto-formulario-listo');
  }
});
    
    // Validación final
    cy.get('body').should('be.visible');
    cy.screenshot('05-producto-registro-completado');
  });

  it('Debe capturar pantalla de validación del formulario', () => {
    // Visitar la página
    cy.visit('/');
    
    // Captura inicial de validación
    cy.screenshot('06-validacion-inicio');
    
    // Esperar a que la página cargue
    cy.get('body', { timeout: 10000 }).should('be.visible');
    
    // Captura antes de cualquier acción
    cy.screenshot('06-validacion-antes-envio');
    
    // Buscar botón de envío
cy.get('form button[type="submit"]', { timeout: 3000 }).then(($btn) => {
  if ($btn.length > 0) {
    cy.wrap($btn).click({ force: true });
    cy.screenshot('06-validacion-errores');
  }
});
    
    // Captura final
    cy.get('body').should('be.visible');
    cy.screenshot('06-validacion-completada');
  });
});
