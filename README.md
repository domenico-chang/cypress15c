# Cypress Tests para DevOps Testing

Este proyecto contiene casos de prueba automatizados usando Cypress para la aplicación web de DevOps Testing.

## Estructura del Proyecto

```
cypress15c/
├── cypress/
│   └── e2e/
│       ├── login.cy.js          # Pruebas de página de inicio
│       ├── navigation.cy.js      # Pruebas de navegación y UI
│       └── product.cy.js        # Pruebas de registro de producto
├── cypress.config.js            # Configuración de Cypress
├── package.json                 # Dependencias del proyecto
└── README.md                     # Este archivo
```

## Instalación

1. Instalar dependencias:

```bash
npm install
```

## Ejecución de Pruebas

### Abrir Cypress UI (modo interactivo)

```bash
npm run cypress:open
```

### Ejecutar pruebas en modo headless

```bash
npm run cypress:run
```

### Ejecutar pruebas con navegador visible

```bash
npm run cypress:run:headed
```

## Capturas de Pantalla (Screenshots)

Todos los casos de prueba incluyen **capturas de pantalla automáticas** en puntos clave de la ejecución. Las capturas se guardan en:

```
cypress/screenshots/
├── login.cy.js/
│   ├── 01-pagina-inicio-cargada.png
│   └── 01-pagina-inicio-validada.png
│   ├── 02-titulo-verificacion.png
│   └── 02-titulo-validado.png
├── navigation.cy.js/
│   ├── 03-navegacion-elementos.png
│   ├── 03-navegacion-validada.png
│   ├── 04-responsive-1280x720.png
│   └── 04-responsive-validada.png
└── product.cy.js/
    ├── 05-producto-inicio.png
    ├── 05-producto-formulario-lleno.png
    ├── 05-producto-enviado.png
    ├── 05-producto-registro-completado.png
    ├── 06-validacion-inicio.png
    ├── 06-validacion-antes-envio.png
    ├── 06-validacion-errores.png
    └── 06-validacion-exitosa.png
```

**Ventajas de las capturas automáticas:**

- ✓ Documentación visual de cada paso del test
- ✓ Fácil identificación de problemas visuales
- ✓ Prueba de que la aplicación se renderiza correctamente
- ✓ Referencia para reportes y documentación

## Casos de Prueba Creados

### 1. **Prueba 1: Verificar página de inicio** (login.cy.js)

- **Caso 1.1**: Verifica que la página cargue correctamente
  - Valida que la URL contenga el dominio correcto
  - Verifica que la página tenga contenido
  - Comprueba que el body sea visible
  - 📸 Capturas: `01-pagina-inicio-cargada.png`, `01-pagina-inicio-validada.png`

- **Caso 1.2**: Verifica que la página tenga un título válido
  - Comprueba que el title no esté vacío
  - Valida que el elemento title contenga texto
  - 📸 Capturas: `02-titulo-verificacion.png`, `02-titulo-validado.png`

### 2. **Prueba 2: Pruebas de navegación y UI** (navigation.cy.js)

- **Caso 2.1**: Verifica elementos de navegación
  - Espera a que la página cargue completamente
  - Verifica que haya contenido en la página
  - 📸 Capturas: `03-navegacion-elementos.png`, `03-navegacion-validada.png`

- **Caso 2.2**: Verifica que la página sea responsive
  - Prueba con un viewport de 1280x720
  - Valida que el contenido sea visible
  - Verifica las dimensiones de la ventana
  - 📸 Capturas: `04-responsive-1280x720.png`, `04-responsive-validada.png`

### 3. **Prueba 3: Registrar un producto** (product.cy.js)

- **Caso 3.1**: Registra un producto exitosamente
  - Busca formulario de registro de producto
  - Llena campos: nombre, descripción y precio
  - Envía el formulario
  - Verifica que la página se mantenga visible
  - 📸 Capturas: `05-producto-inicio.png`, `05-producto-formulario-lleno.png`, `05-producto-enviado.png`, `05-producto-registro-completado.png`

- **Caso 3.2**: Valida campos obligatorios del formulario
  - Intenta enviar formulario vacío
  - Verifica que aparezcan mensajes de validación
  - Confirma que la validación está activa
  - 📸 Capturas: `06-validacion-inicio.png`, `06-validacion-antes-envio.png`, `06-validacion-errores.png`, `06-validacion-exitosa.png`

## URL de Prueba

**Base URL**: `https://devopstesting-dlzehzei4-ados-projects-0eb7f124.vercel.app/`

## Notas

- Los tests están configurados con timeouts adecuados para aplicaciones web lentas
- Se utiliza la base URL configurada en `cypress.config.js` para todos los tests
- Todos los tests incluyen validaciones de visibilidad y contenido

## Personalización de Pruebas

### Para la prueba de registro de producto (product.cy.js)

Si tu aplicación tiene selectores específicos diferentes, actualiza los selectores en el archivo:

- Cambia `input[name="nombre"]` por el nombre real del campo
- Ajusta los valores de prueba (nombre del producto, precio, etc.)
- Reemplaza los selectores de botones según tu interfaz
- Adapta los mensajes de error según tu validación

**Ejemplo de personalización:**

```javascript
// Cambiar estos selectores según tu aplicación:
cy.get("input#productName").type("Mi Producto");
cy.get("textarea#description").type("Descripción del producto");
cy.get("input#price").type("99.99");
```

## Visualización de Capturas de Pantalla

### En Cypress UI (interfaz interactiva)

```bash
npm run cypress:open
```

- Selecciona un test
- Las capturas se mostrarán en el panel de la derecha después de cada paso

### En carpeta de screenshots

1. Ejecuta los tests: `npm run cypress:run`
2. Las capturas se guardan en: `cypress/screenshots/`
3. Abre las imágenes PNG con tu visor de imágenes predeterminado

### Estructura de carpetas generada

```
cypress15c/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── navigation.cy.js
│   │   └── product.cy.js
│   └── screenshots/                 ← Carpeta de capturas generada
│       ├── login.cy.js/
│       ├── navigation.cy.js/
│       └── product.cy.js/
├── package.json
└── README.md
```
