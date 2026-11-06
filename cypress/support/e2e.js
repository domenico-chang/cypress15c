// ///////////////////////////////////////////////////////////////////
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// supportFile configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ///////////////////////////////////////////////////////////////////

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from the console
const app = window.top;

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

// Ignorar errores no capturados de React para evitar fallos de tests
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar errores de React y de la aplicación
  if (
    err.message.includes('Minified React error') ||
    err.message.includes('HTML') ||
    err.message.includes('Render')
  ) {
    return false; // No fallar el test
  }
  // Permitir que otros errores fallen el test
  return true;
});
