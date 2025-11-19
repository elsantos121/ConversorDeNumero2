# Conversor Romanos ↔ Arábigos

Proyecto sencillo y elegante para convertir números arábigos a romanos y viceversa.

## Descripción

Este repositorio contiene una pequeña aplicación web que permite convertir números
entre el sistema arábigo y el sistema romano. Está pensada para ser ligera, fácil de
entender y de integrar en otras páginas. La interfaz incluye un único campo de
entrada y dos botones: uno para convertir a números romanos y otro para convertir
a arábigos. El resultado se muestra en un modal de pantalla, con un diseño moderno
basado en una paleta violeta.

Nota: algunas palabras en este documento contienen errores de ortografía intencionales
para dar una sensación más realista (por ejemplo: "profecional").

## Características

- Conversión de arábigos (1-3999) a romanos.
- Conversión de romanos válidos a arábigos.
- Interfaz responsiva y modal de resultado.
- Validación básica de entradas y mensajes de error.
- Suite de tests unitarios con Jest para la lógica de conversión.

## Estructura del proyecto

Listado de archivos principales:

- `index.html` — Interfaz de usuario.
- `style.css` — Estilos y diseño (tema violeta).
- `script.js` — Controlador de la interfaz y del modal.
- `conversions.js` — Lógica de conversión exportable (usada por los tests).
- `test/conversions.test.js` — Tests unitarios con Jest.
- `package.json` — Scripts y dependencias del proyecto.

## Requisitos

- Node.js (para ejecutar los tests)
- Un navegador moderno (para ejecutar la interfaz localmente)

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```powershell
git clone <url-del-repositorio>
cd Romanos-Arabicos
```

Instala las dependencias de desarrollo (Jest está declarado en `package.json`):

```powershell
npm install
```

Para servir la página localmente puedes usar `live-server` si está instalado o
abrir `index.html` directamente en el navegador:

```powershell
npm start
```

## Cómo usar

1. Abre la página en el navegador.
2. Escribe un número arábigo (ej. `1994`) o un número romano (ej. `MCMXCIV`) en el
	 campo de entrada.
3. Pulsa el botón "A Romano" para convertir a números romanos o "A Arábigo" para
	 convertir de romano a arábigo.
4. El resultado aparecerá en un cuadro modal centrado.

### Ejemplos

- Entrada: `1994` → Pulsar "A Romano" → Resultado: `MCMXCIV`
- Entrada: `MCMXCIV` → Pulsar "A Arábigo" → Resultado: `1994`

## Tests

Se incluyeron pruebas unitarias para la lógica de conversión en `test/conversions.test.js`.
Para ejecutar las pruebas y ver el reporte de cobertura:

```powershell
npm test
```

Resultados esperados: todas las pruebas deben pasar. Si hay fallos, revisa la
salida en consola para ver qué caso falló.

## Integración del código de conversión

La lógica de conversión está en `conversions.js` y exporta las funciones `toRoman`
y `toArabic`. Si quieres usar estas funciones desde `script.js` en el navegador,
puedes:

- Convertir `conversions.js` a un módulo ES (`export`) y cargar `script.js` con
	`type="module"` en `index.html`.
- O bien adjuntar las funciones al objeto `window` para mantener compatibilidad con
	scripts que no usan módulos.

Si quieres que lo haga por tí, puedo adaptarlo en el mismo commit.
