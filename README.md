# Aim Trainer

M1 · El Despertar del DOM — Web Development I, the Client.

## Descripción del proyecto

Aim Trainer es un juego de puntería desarrollado con HTML, CSS y JavaScript puro. El jugador dispone de 15 segundos para pulsar el mayor número posible de dianas dentro de un tablero de 6 columnas y 4 filas. Durante la partida se muestran los aciertos, los fallos, el tiempo restante y el porcentaje de precisión.

Al terminar, el jugador puede introducir un alias y comparar su mejor resultado de la sesión con cuatro rivales ficticios. El proyecto se creó para practicar la generación y modificación de elementos de una página, los eventos de usuario, las funciones, las estructuras de control y la separación entre HTML, CSS y JavaScript.

El juego permite reiniciar una partida en curso o comenzar otra después de consultar la clasificación. Los resultados se ordenan por puntuación y precisión, y la mejor marca del jugador se conserva mientras la página permanece abierta. También incluye un modo oscuro activado con la tecla secreta `N`, navegación mediante teclado y una interfaz adaptada tanto a escritorio como a pantallas estrechas.

## Cómo probarlo

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador con JavaScript activado.
3. Pulsa «Iniciar entrenamiento» y juega durante 15 segundos.
4. Al terminar, introduce un alias de entre 1 y 20 caracteres para consultar la clasificación.
5. Pulsa «Volver a jugar» para iniciar otra partida sin recargar la página.

No requiere instalar paquetes, iniciar un servidor ni compilar el proyecto. La tecla `N` permite alternar el modo oscuro; la pulsación se ignora mientras se escribe en el campo de alias.

## Tecnologías y dependencias

- HTML5 para la estructura y el contenido.
- CSS3 para el diseño, la distribución con Grid y Flexbox, el modo oscuro y la adaptación a pantallas estrechas.
- JavaScript puro para crear el tablero, controlar la partida y actualizar la interfaz.
- Fuente local Space Mono e imágenes PNG almacenadas en el repositorio.

No se utilizan frameworks, librerías externas, servicios web ni `localStorage`.

## Archivos

| Archivo o carpeta | Contenido |
| --- | --- |
| `index.html` | Estructura de la interfaz, marcadores, formulario y tabla. |
| `styles.css` | Diseño, tablero, estados visuales, modo oscuro y responsive. |
| `app.js` | Estado, creación de casillas, eventos y reglas del juego. |
| `SpaceMono-Regular.ttf` | Fuente local utilizada en la interfaz. |
| `assets/img/` | Títulos, dianas y favicon de los modos claro y oscuro. |
| `docs/` | Documentación interna de aprendizaje y seguimiento utilizada con Obsidian. |
| `AGENTS.md` | Instrucciones de trabajo para los agentes utilizados en el proyecto. |
| `.gitignore` | Exclusión de configuraciones locales y archivos temporales. |

## Funcionalidades del programa

- Creación automática de 24 casillas mediante JavaScript y distribución visual en una cuadrícula de 6 × 4.
- Seis dianas simultáneas situadas en casillas diferentes.
- Un punto por acierto y recolocación de la diana en otra casilla libre.
- Registro de fallos al pulsar espacios vacíos del tablero.
- Cálculo de precisión mediante `aciertos / (aciertos + fallos) × 100`.
- Partidas de 15 segundos con final automático y bloqueo de intentos fuera de tiempo.
- Reinicio inmediato de la partida con estadísticas, tiempo y objetivos restablecidos.
- Formulario de alias con validación de longitud y rechazo de nombres formados solo por espacios.
- Clasificación con cuatro rivales ficticios y la mejor marca del usuario durante la sesión.
- Ordenación por puntos, precisión y antigüedad de la marca en caso de empate.
- Nueva partida sin recargar la página.
- Modo oscuro mediante la tecla secreta `N`, con imágenes y colores alternativos.
- Navegación mediante teclado, foco visible y bloqueo de la repetición automática de Enter o Espacio sobre una diana.
- Diseño adaptado a escritorio y pantallas estrechas.

La configuración se mantiene fija en 15 segundos y seis objetivos. La mejor marca se guarda en variables y desaparece al recargar la página. La clasificación es una demostración local, no una clasificación online.

## Comprobaciones realizadas

El alumno comprobó manualmente el recorrido completo: inicio, aciertos, fallos, precisión, final por tiempo, reinicio, validación del alias, clasificación, nueva partida, modo oscuro y funcionamiento en una pantalla estrecha. También confirmó que los clics fuera del tablero o después de terminar no modifican las estadísticas y que reiniciar varias veces no duplica objetivos ni acelera el contador.

Codex comprobó la sintaxis de JavaScript y utilizó un DOM y un reloj simulados para probar 1.000 aciertos, clics tardíos, intervalos retrasados, diez reinicios consecutivos, cálculos de precisión, alias no válidos, HTML escrito como texto literal, actualización de la mejor marca y desempates por precisión y antigüedad. Estas pruebas simuladas complementan la revisión manual, pero no sustituyen una comprobación visual o de teclado en un navegador real.

En navegador se revisaron las pantallas de inicio, partida, formulario y clasificación en los modos claro y oscuro. No aparecieron errores propios del proyecto en la consola y la pantalla inicial no presentó desplazamiento vertical en las vistas comprobadas de 1366 × 768 y 390 × 844 píxeles CSS.

## Uso de IA

En cuanto al uso de IA, estoy de acuerdo con la metodología expuesta en esta asignatura: permitir su uso libre siempre que haya un control humano de todos los elementos de la página web. Al ver que tenía una asignatura de desarrollo web este año, me surgieron bastantes dudas, ya que durante el año pasado estuve trabajando en diversas páginas web en las que hice un uso bastante notable de la IA. La utilicé para aprender nuevos conceptos de forma autodidacta y para realizar con mayor rapidez cambios sencillos que ya dominaba.

No obstante, es verdad que, en algunos casos, con que el código funcionara ya me servía. Un ejemplo de ese tipo de operación en esta misión es `appendChild(objetivo);`. Esa no es la forma correcta de aprender: como explican las normas de este año, debo comprender todos los elementos con los que estoy trabajando. Mi objetivo es poder identificar, por ejemplo, un problema con la disposición de elementos en línea o en bloque, o un uso incorrecto de JavaScript, explicárselo a la IA y participar en la búsqueda de una solución.

Para esta primera misión he empleado la IA generativa de ChatGPT, a través de Codex, con el modelo GPT-6 Astra y un nivel de razonamiento medio, ya que considero que la misión utiliza código relativamente sencillo. También voy documentando los pasos que puedo reutilizar en próximas misiones en archivos `.md`, que almaceno en mi vault o cerebro personal de Obsidian para recuperar mi metodología de trabajo en las siguientes sesiones.

**Trabajo propio y asistido:** he aportado la idea, las decisiones de alcance y diseño, las pruebas manuales, el título gráfico, la reflexión sobre el uso de IA y la gestión de Git y GitHub. Codex generó el esqueleto inicial y ayudó a implementar el juego, el formulario, la clasificación, los estilos, los comentarios explicativos y la documentación. He revisado el resultado por fases y he preguntado por los conceptos que necesitaba comprender antes de cerrar el proyecto.

### Metodología y seguimiento

El trabajo se dividió en fases pequeñas. Antes de avanzar, revisé el resultado, planteé dudas sobre los elementos que no comprendía y pedí explicaciones de las decisiones técnicas. Yo ejecuté los comandos de Git y cada commit representó un avance funcional del proyecto.

El contexto, las decisiones y las tareas se documentaron en archivos Markdown dentro de `docs/`. Esa carpeta se abrió como una bóveda de Obsidian para poder consultar el aprendizaje y recuperar la metodología en futuras misiones. Es documentación interna y no forma parte del funcionamiento de la aplicación ni pretende acreditar su calidad.

### Preguntas y decisiones trabajadas hasta el final del desarrollo

- **Elección y alcance:** propuse un aim trainer y un Snake musical, comparé su dificultad y elegí el aim trainer. El alcance creció por fases desde un tablero de 16 casillas con cuatro objetivos hasta la versión final de 24 casillas y seis objetivos.
- **Estructura HTML:** pedí explicar `DOCTYPE`, `lang`, UTF-8, viewport, `defer`, comentarios, elementos semánticos, formularios, listas y tablas.
- **Organización y propiedades CSS:** revisé selectores, clases, identificadores, pseudoclases, variables de `:root`, herencia, Grid, Flexbox, márgenes, rellenos, `calc()`, `min()`, `minmax()` y las reglas responsive.
- **JavaScript y DOM:** pedí desglosar las referencias a elementos, la creación del tablero, el bucle `for`, los arrays, el estado y operaciones como `querySelector`, `createElement`, `classList`, `dataset`, `appendChild`, `replaceChildren`, `remove` y `focus`.
- **Objetivos y estadísticas:** revisé la separación entre casillas y botones-diana, la elección de posiciones libres, los eventos de acierto y fallo y el cálculo de precisión. Pedí utilizar `if/else` en lugar del operador ternario para mantener una solución que pudiera explicar.
- **Temporizador y ciclo de partida:** acordé utilizar una hora límite, mostrar el resultado al llegar a cero y permitir reiniciar o volver a jugar sin recargar. También revisé `Date.now()`, `setInterval()` y `clearInterval()`.
- **Formulario y clasificación:** propuse el alias y cuatro rivales ficticios. Después añadí la precisión como segundo criterio de desempate y decidí conservar una única mejor marca del usuario mediante variables, sin `localStorage`.
- **Diseño propio:** proporcioné los títulos, dianas y favicon, comparé varias tipografías y elegí Space Mono por su legibilidad. También decidí usar un tablero rectangular, estadísticas laterales, bordes relacionados con el título y acciones diferentes para los modos claro y oscuro.
- **Modo oscuro:** propuse activarlo con una tecla secreta y añadí una pista en el footer. La implementación evita cambiar el modo cuando se escribe la letra `n` en el alias.
- **Accesibilidad y responsive:** revisé los nombres accesibles, el foco, la navegación con teclado y la adaptación del diseño a ventanas bajas y pantallas estrechas.
- **Errores encontrados:** durante las comprobaciones detecté la desaparición del formulario final por la ausencia de `#texto-pantalla` y la posibilidad de sumar muchos puntos manteniendo Enter o Espacio. Ambos problemas se corrigieron y se volvieron a probar.
- **Control del alcance:** descarté los parámetros personalizados porque aumentaban la complejidad y hacían que las puntuaciones de la clasificación dejaran de ser comparables.
- **Git y documentación:** ejecuté los comandos de Git y GitHub, documenté las decisiones en el README y en Obsidian, y organicé HTML, CSS y JavaScript con comentarios para preparar la defensa.

## Autopsia

### Autopsia 1. Generación del tablero

Como vimos en clase, una manera de crear un tablero es utilizar un array matricial. Por ello, lo implementé en primera instancia para mi proyecto de esta forma: `tablero[numFilas][numColumnas]`. Si quería localizar una casilla, tenía que hacerlo indicando primero su fila y después su columna, por ejemplo, `tablero[2][3]`.

A medida que fui desarrollando el programa con la asistencia de la IA de Codex, este tablero daba lugar a funciones complejas que a veces ni comprendía. Por ello, Codex me dio la solución de implementar el tablero mediante un bucle `for` que repite `X` veces —el número de casillas, calculado multiplicando `numFilas` por `numColumnas`— la misma operación. Esta operación consiste en crear una casilla, mostrarla en la página web y guardarla en la lista. Las casillas quedan enumeradas desde la posición 0 hasta `X - 1`.

Esta solución fue importante porque reducía la complejidad de la función de creación del tablero. Además, el juego no necesita saber en qué fila o columna se encuentra la diana: solo necesita conocer qué número de casilla ocupa, lo que simplifica todo.

Si lo hubiéramos hecho con el array matricial, también habríamos necesitado bucles para crear y mostrar las casillas una a una. Además, cada casilla tendría que haberse identificado con dos números: la fila y la columna. Con la solución elegida, cada casilla se identifica con un único número dentro de un array lineal.

Que sea un array lineal y que cada casilla se identifique con un número simplifica el almacenamiento de las posiciones ocupadas y la elección de una posición libre al azar al acertar los objetivos.

Por lo que me ha informado la IA, la limitación de este array lineal es que, si en un futuro se implementaran funcionalidades para mover las dianas hacia arriba, abajo, izquierda o derecha, sería más fácil trabajar con un array matricial.

### Autopsia 2

La otra decisión consistía en añadir una funcionalidad mediante un nuevo botón llamado "Modificar parámetros". Dentro de este apartado se podría modificar el número de objetivos, desde 1 como mínimo hasta 10 como máximo, y el tiempo, desde 15 segundos como mínimo hasta 60 segundos como máximo.

La decisión final consistió simplemente en no añadir esta funcionalidad, ya que era bastante compleja debido a que los parámetros personalizados afectaban a la tabla final de puntuación. No sería lo mismo hacer 50 puntos con 10 objetivos y 60 segundos que con 1 objetivo y 15 segundos.

Aparte, añadir estas nuevas funcionalidades ampliaría muchísimo el código, no solo en su extensión, sino también en su complejidad. Como considero que esta primera misión no debe ser muy enrevesada y que el proyecto ya ha alcanzado bastante complejidad, no merece la pena seguir ampliándolo.

El coste de esta decisión es que el jugador no puede personalizar la dificultad de su entrenamiento de aim. Esta sería una buena ampliación para una futura versión del Aim Trainer.

Una posible solución a este problema sería que, al jugar en modo personalizado, no hubiera una tabla global y solo se mostrara la puntuación obtenida por el jugador.
