# Aim Trainer

M1 · El Despertar del DOM — Web Development I, the Client.

Juego de puntería en una cuadrícula de 4 × 4, construido con HTML, CSS y JavaScript puro, sin frameworks ni librerías.

## Estado actual

Fase 2 concluida y aceptada por el alumno: cuatro objetivos aleatorios, contador de aciertos, dianas PNG y pantalla de inicio centrada. Pendiente de guardar este cierre en el segundo commit.

Al pulsar «Iniciar entrenamiento» aparecen cuatro dianas en posiciones diferentes de una cuadrícula invisible de 4 × 4. Cada acierto suma un punto y reemplaza esa bolita en una casilla libre distinta. Solo puntúa pulsar el objetivo, no su casilla. Las zonas vacías no suman ni penalizan.

Esta versión es un entrenamiento sin límite de tiempo: los 60 segundos se muestran como duración prevista para la siguiente fase. Para volver a empezar, recarga la página. Todavía no hay temporizador, fin de partida ni botón de reinicio.

Los objetivos son botones: se pueden seleccionar con Tab y activar con Intro o Espacio. Al sustituir un objetivo que tenía el foco, este se traslada al nuevo botón.

Antes de iniciar, el tablero tiene un borde exterior y una pantalla central con el mensaje y el botón de inicio. Al empezar se oculta únicamente esa pantalla; el área de juego conserva su tamaño y sus casillas permanecen sin bordes visibles. Si el botón de inicio tenía el foco, se traslada al primer objetivo.

## Cómo probarlo

Abre `index.html` en un navegador con JavaScript activado. También puedes usar un servidor local si ya dispones de uno. No requiere instalar paquetes ni compilar.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: presentación y cuadrícula adaptable.
- `app.js`: creación del tablero, estado de los objetivos, selección aleatoria y eventos de inicio y acierto.
- `.gitignore`: exclusiones de temporales y configuración local.
- `assets/img/diana.png`: imagen proporcionada por el alumno y utilizada como fondo de los botones objetivo.

## Funcionalidades implementadas y pendientes

- [x] Cuatro objetivos simultáneos en casillas diferentes.
- [x] Un punto por acierto y aparición de un nuevo objetivo en una casilla libre distinta de la anterior.
- [ ] Partidas de 60 segundos, final y reinicio.
- [ ] Contador de fallos y porcentaje de precisión.
- [ ] Modo oscuro activado mediante una tecla secreta.
- [ ] Mejorar el diseño con elementos gráficos creados personalmente en Photopea.
- [ ] Repasar todo el código, identificar lo que no entiendo y resolver esas dudas antes de la defensa.

La configuración de partidas y las mejores marcas locales son ampliaciones pendientes de decidir después de completar la base.

## Comprobaciones de esta fase

- [x] Revisión general de la fase 2 y aceptación del resultado por parte del alumno.

Lista de comprobaciones específicas para registrar y repetir antes de la entrega. Las casillas sin marcar no indican un fallo: todavía no se ha documentado su verificación manual individual.

- [ ] El tablero conserva 16 posiciones en cuatro filas y cuatro columnas, sin bordes ni fondos visibles en las casillas.
- [ ] Los objetivos muestran la imagen de la diana sin deformarla y conservan el contorno de foco al usar el teclado.
- [ ] Antes de iniciar no hay objetivos; se muestran 0 aciertos y 60 segundos, señalados como tiempo de la próxima fase.
- [ ] El botón se muestra centrado dentro del borde exterior antes de iniciar.
- [ ] Al iniciar desaparece la pantalla central sin ocultar ni colapsar el tablero.
- [ ] Al iniciar aparecen cuatro objetivos en casillas distintas y se deshabilita el inicio.
- [ ] Cada bolita pulsada suma uno y se repone en otra casilla libre.
- [ ] Pulsar fuera de la bolita no suma; siempre quedan cuatro objetivos.
- [ ] Tab permite recorrer los botones; Intro o Espacio activan un objetivo y el nuevo conserva el foco.
- [ ] Recargar devuelve el entrenamiento a su estado inicial.
- [ ] No aparecen errores en la consola del navegador.
- [ ] La página se adapta a una pantalla estrecha sin desplazamiento horizontal.

Comprobación del agente: sintaxis JavaScript correcta y prueba con un DOM simulado de 1.000 aciertos, casillas vacías, segundo inicio y traslado del foco. No sustituye la prueba visual ni la interacción real en navegador.

## Uso de IA

En cuanto al uso de IA, estoy de acuerdo con la metodología expuesta en esta asignatura: permitir su uso libre siempre que haya un control humano de todos los elementos de la página web. Al ver que tenía una asignatura de desarrollo web este año, me surgieron bastantes dudas, ya que durante el año pasado estuve trabajando en diversas páginas web en las que hice un uso bastante notable de la IA. La utilicé para aprender nuevos conceptos de forma autodidacta y para realizar con mayor rapidez cambios sencillos que ya dominaba.

No obstante, es verdad que, en algunos casos, con que el código funcionara ya me servía. Un ejemplo de ese tipo de operación en esta misión es `appendChild(objetivo);`. Esa no es la forma correcta de aprender: como explican las normas de este año, debo comprender todos los elementos con los que estoy trabajando. Mi objetivo es poder identificar, por ejemplo, un problema con la disposición de elementos en línea o en bloque, o un uso incorrecto de JavaScript, explicárselo a la IA y participar en la búsqueda de una solución.

Para esta primera misión he empleado la IA generativa de ChatGPT, a través de Codex, con el modelo GPT-6 Astra y un nivel de razonamiento medio, ya que considero que la misión utiliza código relativamente sencillo. También voy documentando los pasos que puedo reutilizar en próximas misiones en archivos `.md`, que almaceno en mi vault o cerebro personal de Obsidian para recuperar mi metodología de trabajo en las siguientes sesiones.

A continuación, el agente de IA irá actualizando este README al preparar cada commit, recogiendo las preguntas, indicaciones, decisiones y comprobaciones de esta misión. Yo revisaré ese registro para que refleje lo que realmente hemos trabajado.

### Metodología y seguimiento

El trabajo se divide en fases pequeñas. Antes de avanzar, reviso el resultado, pregunto por los elementos que no entiendo y pido explicaciones de las decisiones técnicas. Los commits deben representar avances reales; he pedido al agente que me avise al cerrar cada fase y me proponga un mensaje, mientras yo ejecuto los comandos de Git.

Para conservar el contexto, hemos preparado una guía base de las misiones y una nota de seguimiento de M1 en Markdown. La guía reúne las reglas comunes del curso, la declaración de IA, la Autopsia y mi forma de trabajar. La nota de M1 recoge el estado del proyecto, las decisiones, las pruebas y el siguiente paso. Estos documentos sirven como base para Obsidian y para retomar el trabajo con otro agente; complementan el README de la entrega.

### Preguntas y decisiones trabajadas hasta la fase 2

- **Elección y alcance de la idea:** propuse un aim trainer y un Snake musical. Pedí comparar su dificultad y su encaje con la rúbrica, y elegí el aim trainer. Acordamos empezar con 16 casillas, cuatro objetivos y puntuación; el temporizador, los fallos y otras mejoras se incorporan por fases.
- **Estructura y HTML:** pedí revisar los nombres de los archivos y explicar los elementos del `head`: codificación UTF-8, viewport, enlace al CSS y carga de JavaScript con `defer`. También pregunté por `DOCTYPE`, `lang="es"`, cómo escribir comentarios y cómo distinguir las secciones del `body`.
- **Lectura y organización del CSS:** pedí identificar a qué elemento del HTML corresponde cada selector y organizar los comentarios por secciones. Solicité una guía sobre clases (`.`), identificadores (`#`), selector universal (`*`), etiquetas sin prefijo y pseudoclases como `:root`. Aclaré una confusión entre `;` y `:` para corregir esa explicación.
- **Propiedades y valores de CSS:** pedí explicar qué modifica cada declaración y cómo funcionan expresiones como `width: min(100% - 32px, 640px)`, sus valores y unidades. El agente añadió explicaciones de `min()`, `clamp()`, Grid, márgenes y rellenos para facilitar mi revisión del diseño.
- **JavaScript y DOM:** pedí desglosar `crearTablero()`, el bucle `for`, sus índices y la creación de cada elemento. Señalé operaciones concretas que quería entender: `querySelector`, `createElement`, `classList.add`, `setAttribute` con `aria-label` y template literals, y `appendChild`. Solicité comentarios breves junto a las operaciones importantes.
- **Edición compartida:** consulté el conflicto que aparecía al guardar mis cambios en VS Code mientras el agente modificaba el mismo archivo. Activé el autoguardado y comprobé que los comentarios añadidos se actualizaban en el editor.
- **Git y GitHub:** pedí las instrucciones para inicializar Git, hacer el primer commit, crear el repositorio público y conectar el remoto. Ejecuté los comandos personalmente y compartí la URL del repositorio para comprobar el resultado.
- **Revisión de la fase 2:** después de implementar los objetivos y aciertos, pedí identificar exactamente qué se había añadido o modificado en HTML, CSS y JavaScript. El agente explicó la separación entre casillas y bolitas, las variables de estado, las funciones nuevas y la delegación de eventos. Tras revisar los cambios y resolver las dudas planteadas, di por concluida esta fase y pedí preparar su commit. El repaso completo antes de la defensa sigue pendiente.
- **Personalización visual:** proporcioné un PNG y pregunté cómo usarlo como objetivo y ocultar visualmente la cuadrícula. Tras la explicación, pedí aplicar esos cambios, retirar el antiguo efecto de color al pasar el puntero y documentar por qué no se usa `display: none`. La imagen se conserva sin editar; esta incorporación no se presenta como un recurso creado personalmente en Photopea.
- **Pantalla de inicio:** comparé tres opciones para delimitar el tablero y elegí un borde exterior con el botón centrado. Antes de implementarlo, pregunté por la dificultad del código para poder defenderlo. Revisamos `position: relative`, `position: absolute`, `inset`, Flexbox y `hidden`. Acordamos posponer el ajuste del tablero a la altura de la ventana.
- **Documentación del aprendizaje:** pedí corregir esta sección porque los prompts de autorización por sí solos no reflejaban mis preguntas sobre funciones, parámetros, propiedades y operaciones del DOM. La reflexión inicial de esta sección la he escrito yo; el agente ha corregido su ortografía y organizado el seguimiento a partir de la conversación.

### Cierre de la fase 2 y siguiente paso

La fase 2 queda cerrada para guardar un avance coherente: objetivos aleatorios, aciertos, imagen PNG y pantalla de inicio dentro de un tablero con borde exterior. El alumno ejecutará el commit y el push después de revisar los archivos preparados. Mensaje previsto: `Añade objetivos, puntuación y pantalla de inicio`.

La fase 3 incorporará el temporizador de 60 segundos, el bloqueo de puntuación al finalizar y la posibilidad de volver a jugar sin recargar. Se implementará después de guardar la fase 2 para mantener separados ambos avances.

### Dos prompts reales de revisión y aprendizaje

Se conservan tal como se escribieron, incluidas sus erratas:

> tambien en el css me gustaria que explicases cada atributo de estilo si se llama asi por ejemplo el width: min(100% - 32px, 640px); dle .entrenador {, saber que se esta tocando en cada campo del with como que min y esos tres parametros, que se eplique como funcionan esos elementos complejos

> vale me gusta, dime ahora que partes del html, ccs y js has añadido/modificado

### Reparto del trabajo y verificación

**Mi aportación:** propuse las ideas, elegí el alcance, creé la carpeta y los cinco archivos vacíos, añadí anotaciones al HTML y personalicé el título. He revisado el código mediante las preguntas anteriores, ejecutado los comandos del primer commit y publicado el repositorio. También he redactado la reflexión inicial sobre el uso de IA y definido cómo quiero documentar y reutilizar el proceso de aprendizaje.

**Aportación de Codex:** ayudó a analizar la rúbrica y comparar las ideas; generó el código inicial y la implementación de objetivos, eventos y puntuación de la fase 2. Añadió comentarios explicativos, respondió a mis preguntas, preparó documentación y realizó comprobaciones técnicas. Las funciones del juego de estas fases fueron generadas con IA; mi revisión y mis anotaciones no se presentan como implementación manual de esas funciones.

**Verificación realizada:** el agente comprobó la sintaxis JavaScript y ejecutó una prueba con un DOM simulado de 1.000 aciertos, comprobando la reposición de objetivos, las posiciones únicas, los clics vacíos, un segundo inicio y el traslado del foco. Estas comprobaciones no equivalen a una prueba visual ni de teclado en un navegador real. He aceptado el resultado general de la fase 2. Las pruebas manuales específicas que no he confirmado individualmente permanecen sin marcar para su seguimiento antes de la entrega. Haber preguntado por un concepto tampoco sustituye poder explicarlo: seguiré revisando los puntos que necesite antes de la defensa.

## Autopsia

Pendiente de redactar por el alumno después de comprender y valorar las decisiones del proyecto. La versión de entrega explicará las dos decisiones más discutibles del código final y la alternativa descartada en cada caso.

Posibles decisiones de esta fase para discutir, sin constituir todavía la autopsia final:

1. Crear las casillas con un bucle en JavaScript frente a escribir 16 botones en HTML: evita repetir etiquetas y practica la creación de nodos, pero hace que el tablero dependa de JavaScript.
2. En la fase 2, separar las casillas (`div`) de los objetivos (`button`): permite que solo la bolita sea interactiva. Se descartó mantener toda la casilla como botón porque puntuaría pulsar fuera del círculo. Los botones conservan activación por teclado.

Otra decisión para valorar: seleccionar entre las casillas libres antes de retirar el objetivo acertado. Evita repetir su posición sin recurrir a intentos aleatorios hasta encontrar una casilla válida.
