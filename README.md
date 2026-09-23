# Aim Trainer

M1 · El Despertar del DOM — Web Development I, the Client.

Juego de puntería en una cuadrícula de 4 × 4, construido con HTML, CSS y JavaScript puro, sin frameworks ni librerías.

## Estado actual

Fase 4 implementada: formulario de alias y clasificación local de demostración. Pendiente de revisión del alumno. La fase 3 está guardada en el commit `283a8b2`.

Al iniciar aparecen cuatro dianas en casillas distintas de una cuadrícula invisible de 4 × 4. Cada acierto suma un punto y sustituye el objetivo en otra casilla libre. Los clics vacíos no suman ni penalizan todavía.

El tiempo se calcula a partir de una hora de finalización. Al llegar a cero se bloquean los aciertos, se retiran las dianas y aparece «Fin · XX puntos», con un formulario de alias. Tras enviar un nombre válido se muestra la clasificación y el botón «Volver a jugar». Un clic recibido fuera de plazo no puntúa aunque el refresco del contador se haya retrasado.

«Reiniciar partida», debajo del tablero, descarta la partida en curso y comienza otra con cero puntos, 60 segundos y cuatro objetivos nuevos. Cada inicio cancela el temporizador anterior. El botón central permite volver a jugar después de ver la clasificación, sin recargar la página.

Los objetivos conservan sus nombres accesibles y su activación con teclado. El foco pasa del inicio a una diana y, si estaba en los controles de juego al terminar, pasa al campo de alias. Al enviar el formulario, el foco se sitúa en el título de la clasificación.

## Cómo probarlo

Abre `index.html` en un navegador con JavaScript activado. También puedes usar un servidor local si ya dispones de uno. No requiere instalar paquetes ni compilar.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: presentación y cuadrícula adaptable.
- `app.js`: creación del tablero, estado de los objetivos, selección aleatoria y eventos de inicio y acierto.
- `.gitignore`: exclusiones de temporales y configuración local.
- `assets/img/diana.png`: imagen proporcionada por el alumno y utilizada como fondo de los botones objetivo.
- `assets/img/titulo-aim-trainer.png`: título gráfico creado personalmente por el alumno. Se muestra sin deformar, recortando con CSS sus márgenes transparentes; el PNG se conserva intacto.
- `assets/img/favicon.png`: icono proporcionado por el alumno para la pestaña del navegador.

## Funcionalidades implementadas y pendientes

- [x] Cuatro objetivos simultáneos en casillas diferentes.
- [x] Un punto por acierto y aparición de un nuevo objetivo en una casilla libre distinta de la anterior.
- [x] Partidas de 60 segundos, final y reinicio.
- [x] Formulario de alias y clasificación local de demostración (fase 4).
- [ ] Contador de fallos y porcentaje de precisión.
- [ ] Modo oscuro activado mediante una tecla secreta.
- [x] Incorporar un título gráfico creado personalmente por el alumno.
- [ ] Continuar las mejoras visuales con recursos propios en Photopea y revisar el resultado final.
- [ ] Repasar todo el código, identificar lo que no entiendo y resolver esas dudas antes de la defensa.

La configuración de partidas y las mejores marcas locales son ampliaciones pendientes de decidir después de completar la base.

## Clasificación de demostración

Al terminar, introduce un alias de entre 1 y 20 caracteres. Se eliminan los espacios iniciales y finales; no se acepta un nombre formado solo por espacios. El botón «Ver clasificación» muestra cinco participantes:

| Rival ficticio | Puntos |
| --- | ---: |
| Enrique Pastor | 60 |
| Mario Vaquerizo | 53 |
| Peereira7 | 47 |
| Peterbot | 36 |

La quinta entrada es tu resultado. La tabla se ordena de mayor a menor puntuación; en empate, tu fila va después del rival con los mismos puntos. Se destaca con color y «(tú)». Un alias igual al de un rival no cambia su identificación como usuario.

No es una clasificación online ni un historial persistente: se genera para la partida recién terminada y no usa `localStorage`. Al volver a jugar o recargar desaparece el resultado anterior. Reiniciar una partida en curso no la registra.

## Comprobaciones de esta fase

Fases 2 y 3 guardadas por el alumno. Lista de regresión del juego y revisión manual de la fase 4:

- [ ] Iniciar muestra cuatro objetivos, 0 puntos y 60 segundos.
- [ ] Cada acierto suma uno y mantiene cuatro objetivos en posiciones distintas.
- [ ] Al agotarse el tiempo, el marcador muestra 0, desaparecen las dianas y se muestra la puntuación final.
- [ ] No se pueden sumar puntos después del final.
- [ ] Reiniciar durante la partida restablece los puntos, los 60 segundos y los objetivos.
- [ ] Reiniciar varias veces no acelera el contador ni duplica los objetivos.
- [ ] Al terminar aparece el formulario de alias; un nombre vacío o formado solo por espacios muestra un error.
- [ ] Un alias válido muestra exactamente cinco filas, con los cuatro rivales acordados y el usuario destacado.
- [ ] Se ordenan los puntos de mayor a menor y los empates dejan al usuario detrás del rival.
- [ ] El alias se muestra como texto, sin interpretar etiquetas HTML.
- [ ] Volver a jugar funciona después de la clasificación y elimina el resultado anterior.
- [ ] En una pantalla pequeña se puede desplazar el resultado hasta llegar al botón de nueva partida.
- [ ] La navegación con Tab, Intro y Espacio funciona y el foco sigue siendo visible.
- [ ] No hay errores en consola y la interfaz funciona en una pantalla estrecha.

El agente verificó la sintaxis JavaScript y probó 1.000 aciertos, el límite exacto de tiempo, clics tardíos, un intervalo retrasado, final con cero puntos, diez reinicios consecutivos, nueva partida y un único temporizador. Estas pruebas utilizan un DOM y un reloj simulados; no equivalen a una verificación visual o de teclado en un navegador real.

Comprobaciones adicionales del agente para la fase 4: nueve puntuaciones (0, 36, 37, 47, 48, 53, 54, 60 y 61), todos los empates, alias vacío y de más de 20 caracteres, limpieza de espacios, HTML como texto, envío repetido, cinco filas, focos y nueva partida sin datos anteriores. DOM y reloj simulados; revisión visual pendiente.

## Uso de IA

En cuanto al uso de IA, estoy de acuerdo con la metodología expuesta en esta asignatura: permitir su uso libre siempre que haya un control humano de todos los elementos de la página web. Al ver que tenía una asignatura de desarrollo web este año, me surgieron bastantes dudas, ya que durante el año pasado estuve trabajando en diversas páginas web en las que hice un uso bastante notable de la IA. La utilicé para aprender nuevos conceptos de forma autodidacta y para realizar con mayor rapidez cambios sencillos que ya dominaba.

No obstante, es verdad que, en algunos casos, con que el código funcionara ya me servía. Un ejemplo de ese tipo de operación en esta misión es `appendChild(objetivo);`. Esa no es la forma correcta de aprender: como explican las normas de este año, debo comprender todos los elementos con los que estoy trabajando. Mi objetivo es poder identificar, por ejemplo, un problema con la disposición de elementos en línea o en bloque, o un uso incorrecto de JavaScript, explicárselo a la IA y participar en la búsqueda de una solución.

Para esta primera misión he empleado la IA generativa de ChatGPT, a través de Codex, con el modelo GPT-6 Astra y un nivel de razonamiento medio, ya que considero que la misión utiliza código relativamente sencillo. También voy documentando los pasos que puedo reutilizar en próximas misiones en archivos `.md`, que almaceno en mi vault o cerebro personal de Obsidian para recuperar mi metodología de trabajo en las siguientes sesiones.

A continuación, el agente de IA irá actualizando este README al preparar cada commit, recogiendo las preguntas, indicaciones, decisiones y comprobaciones de esta misión. Yo revisaré ese registro para que refleje lo que realmente hemos trabajado.

**Trabajo propio y asistido:** he aportado la idea, las decisiones, anotaciones manuales en el HTML, el título gráfico, esta reflexión y la gestión de Git y GitHub. Codex ha generado la implementación del juego, el formulario y la clasificación, además de ayudar con estilos, comentarios y documentación. He revisado los cambios y planteado las preguntas recogidas abajo. Las comprobaciones del agente y las pruebas manuales pendientes están detalladas en [Comprobaciones de esta fase](#comprobaciones-de-esta-fase).

### Metodología y seguimiento

El trabajo se divide en fases pequeñas. Antes de avanzar, reviso el resultado, pregunto por los elementos que no entiendo y pido explicaciones de las decisiones técnicas. Los commits deben representar avances reales; he pedido al agente que me avise al cerrar cada fase y me proponga un mensaje, mientras yo ejecuto los comandos de Git.

Para conservar el contexto, hemos preparado una guía base de las misiones y una nota de seguimiento de M1 en Markdown. La guía reúne las reglas comunes del curso, la declaración de IA, la Autopsia y mi forma de trabajar. La nota de M1 recoge el estado del proyecto, las decisiones, las pruebas y el siguiente paso. Estos documentos sirven como base para Obsidian y para retomar el trabajo con otro agente; complementan el README de la entrega.

### Preguntas y decisiones trabajadas hasta la fase 4

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
- **Temporizador y clasificación:** propuse el mensaje final, un formulario de nombre y cuatro rivales ficticios, además de un reinicio durante la partida. Acordamos separar el ciclo de partida (fase 3) del formulario y la clasificación (fase 4). El agente propuso calcular el tiempo desde una hora límite en vez de restar uno en cada intervalo. La revisión del código de esta fase sigue pendiente.
- **Título propio y favicon:** creé personalmente el título gráfico y proporcioné un segundo PNG para el favicon. Pedí sustituir el título anterior y retirar su decoración CSS. El agente integró ambos archivos, conservó el `h1` con texto alternativo y limitó con CSS el espacio transparente del título sin modificar la imagen original.
- **Clasificación local:** pedí continuar con el formulario y los rivales acordados. El agente implementó validación del alias, creación de filas con `textContent`, ordenación por puntos, desempate y reinicio sin conservar el resultado previo. La revisión de estas funciones por mi parte queda pendiente.
- **Documentación del aprendizaje:** pedí corregir esta sección porque los prompts de autorización por sí solos no reflejaban mis preguntas sobre funciones, parámetros, propiedades y operaciones del DOM. La reflexión inicial de esta sección la he escrito yo; el agente ha corregido su ortografía y organizado el seguimiento a partir de la conversación.

### Ejemplo real de revisión

> vale me gusta, dime ahora que partes del html, ccs y js has añadido/modificado

## Autopsia

Pendiente de redactar por el alumno después de comprender y valorar las decisiones del proyecto. La versión de entrega explicará las dos decisiones más discutibles del código final y la alternativa descartada en cada caso.

Posibles decisiones de esta fase para discutir, sin constituir todavía la autopsia final:

1. Crear las casillas con un bucle en JavaScript frente a escribir 16 botones en HTML: evita repetir etiquetas y practica la creación de nodos, pero hace que el tablero dependa de JavaScript.
2. En la fase 2, separar las casillas (`div`) de los objetivos (`button`): permite que solo la bolita sea interactiva. Se descartó mantener toda la casilla como botón porque puntuaría pulsar fuera del círculo. Los botones conservan activación por teclado.

Otra decisión para valorar: seleccionar entre las casillas libres antes de retirar el objetivo acertado. Evita repetir su posición sin recurrir a intentos aleatorios hasta encontrar una casilla válida.
