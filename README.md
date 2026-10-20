# PIXEL ANATOMY LAB V1.3

Aplicación educativa HTML5 para estudiar anatomía muscular aplicada a la ilustración y al Pixel Art.

## Funcionalidades
- Interfaz retro 16-bit responsive.
- Atlas SVG con vistas frontal, posterior y lateral; regiones seleccionables.
- Seis lecciones guiadas con conceptos, consejos y ejercicios.
- Seguimiento local de lecciones completadas.
- Reto anatómico con 15 preguntas aleatorias de selección única y múltiple.
- Retroalimentación por respuesta, puntuación final, revisión de errores e historial local de resultados.

## Ejecutar
Publica la carpeta en GitHub Pages o ejecútala con un servidor local. El atlas usa `fetch()` para cargar SVG y puede no funcionar al abrir `index.html` directamente como archivo `file://`.

## Estructura principal
- `index.html`: interfaz principal.
- `css/`: estilos generales, atlas, Pixel Art, lecciones y evaluación.
- `assets/anatomy/`: vistas esquemáticas SVG.
- `js/data/muscles.js`: datos musculares.
- `js/modules/atlas.js`: lógica del atlas.
- `js/modules/lessons.js`: lecciones y progreso local.
- `js/modules/quiz.js`: banco de preguntas y evaluación.
- `js/main.js`: navegación entre módulos.

## Estado
- Atlas: funcional.
- Lecciones: funcionales.
- Retos anatómicos: funcionales.
- Editor Pixel Art: pendiente.
- Capas anatómicas: pendiente.
- Panel ampliado de progreso: pendiente; el avance de lecciones e historial del quiz se guardan localmente.

## Créditos
Desarrollado por Lic. Carlos Eduardo Sepúlveda Toro.
