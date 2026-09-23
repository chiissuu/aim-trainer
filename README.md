# Aim Trainer

M1 · El Despertar del DOM — Web Development I, the Client.

Juego de puntería en una cuadrícula de 4 × 4, construido con HTML, CSS y JavaScript puro, sin frameworks ni librerías.

## Estado actual

Fase 1: estructura inicial y tablero de 16 casillas.

La página muestra las instrucciones, cero aciertos y un tiempo inicial de 60 segundos. JavaScript crea las 16 casillas del tablero. Tanto las casillas como el botón «Iniciar juego» están deshabilitados: todavía no hay una partida jugable.

## Cómo probarlo

Abre `index.html` en un navegador con JavaScript activado. También puedes usar un servidor local si ya dispones de uno. No requiere instalar paquetes ni compilar.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: presentación y cuadrícula adaptable.
- `app.js`: selección del contenedor y creación de las 16 casillas.
- `.gitignore`: exclusiones de temporales y configuración local.

## Funcionalidades previstas

- Cuatro objetivos simultáneos en casillas diferentes.
- Un punto por acierto y aparición de un nuevo objetivo en una casilla libre distinta de la anterior.
- Partidas de 60 segundos, final y reinicio.
- Contador de fallos y porcentaje de precisión.
- Modo oscuro activado mediante una tecla secreta.

La configuración de partidas y las mejores marcas locales son ampliaciones pendientes de decidir después de completar la base.

## Comprobaciones de esta fase

Revisión manual pendiente por parte del alumno:

- [ ] Se muestran 16 casillas en cuatro filas y cuatro columnas.
- [ ] El marcador muestra 0 aciertos y 60 segundos.
- [ ] El botón «Iniciar juego» y las casillas están deshabilitados.
- [ ] No aparecen errores en la consola del navegador.
- [ ] La página se adapta a una pantalla estrecha sin desplazamiento horizontal.

## Uso de IA

He utilizado Codex para analizar la misión, delimitar la idea y generar el esqueleto inicial de HTML, CSS, JavaScript, este README y `.gitignore`.

Prompt real relevante de esta fase:

> añade el codigo incioa, para cada uno creando el objetivo inicial de Crea estructura inicial y tablero de 16 casillas

El alumno creó la carpeta y los cinco archivos vacíos. El contenido inicial fue generado con IA; la revisión personal del código y las pruebas manuales están pendientes. Esta sección se actualizará con las modificaciones y verificaciones que realmente se realicen.

Modelo y nivel de razonamiento: el alumno indicó «Astra 6, razonamiento medio»; configuración no verificada por el agente.

## Autopsia

Pendiente de redactar por el alumno después de comprender y valorar las decisiones del proyecto. La versión de entrega explicará las dos decisiones más discutibles del código final y la alternativa descartada en cada caso.

Posibles decisiones de esta fase para discutir, sin constituir todavía la autopsia final:

1. Crear las casillas con un bucle en JavaScript frente a escribir 16 botones en HTML: evita repetir etiquetas y practica la creación de nodos, pero hace que el tablero dependa de JavaScript.
2. Representar las casillas como botones nativos frente a elementos `div`: proporciona semántica de control y permite deshabilitarlos; cuando sean interactivos habrá que definir y comprobar su uso con teclado.
