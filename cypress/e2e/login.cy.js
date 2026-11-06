describe('Prueba 1: Verificar página de inicio', () => {
  it('Debe cargar la página y verificar que no esté vacía', () => {
    // Visitar la página
    cy.visit('/');
    
    // Tomar captura de pantalla inicial
    cy.screenshot('01-pagina-inicio-cargada');
    
    // Verificar que la página se haya cargado
    cy.get('body').should('be.visible');
    
    // Verificar que el documento tenga contenido
    cy.document().should('have.property', 'contentType');
    
    // Tomar captura de pantalla después de validación
    cy.screenshot('01-pagina-inicio-validada');
  });

  it('Debe tener un título válido en la página', () => {
    // Visitar la página
    cy.visit('/');
    
    // Tomar captura de pantalla antes de verificar título
    cy.screenshot('02-titulo-verificacion');
    
    // Verificar que exista un title
    cy.title().should('not.be.empty');
    
    // Tomar captura de pantalla final
    cy.screenshot('02-titulo-validado');
  });
});
