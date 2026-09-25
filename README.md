# Aim Trainer

M1 · El Despertar del DOM — Web Development I, the Client.

Juego de puntería en una cuadrícula de 6 columnas y 4 filas, construido con HTML, CSS y JavaScript puro, sin frameworks ni librerías.

## Estado actual

Fases 5 y 6 revisadas manualmente por el alumno: contador de fallos, porcentaje de precisión, partidas de 15 segundos, distribución compacta sin desplazamiento en escritorio y modo oscuro mediante tecla secreta. El diseño y el funcionamiento actuales quedan aceptados para preparar este commit.

Al iniciar aparecen seis dianas en casillas distintas de una cuadrícula invisible de 6 columnas y 4 filas. Cada acierto suma un punto y sustituye el objetivo en otra casilla libre. Los clics en zonas vacías del tablero durante la partida cuentan como fallos: no restan puntos, pero reducen la precisión. Los clics fuera del tablero, antes del inicio o después del final no cuentan como intentos. La precisión se calcula como aciertos / (aciertos + fallos) × 100, redondeada al entero más cercano. Antes del primer intento se muestra 0%. Al iniciar o reiniciar se restablecen aciertos, fallos y precisión; al terminar se conservan en el marcador. La clasificación sigue ordenándose solo por puntos.

El tiempo se calcula a partir de una hora de finalización. Al llegar a cero se bloquean los aciertos, se retiran las dianas y aparece «Tu puntuación es de XX puntos», con un formulario de alias. Tras enviar un nombre válido se muestra la clasificación y el botón «Volver a jugar». Un clic recibido fuera de plazo no puntúa aunque el refresco del contador se haya retrasado.

«Reiniciar partida», debajo del tablero, descarta la partida en curso y comienza otra con cero puntos, 15 segundos y seis objetivos nuevos. Cada inicio cancela el temporizador anterior. El botón central permite volver a jugar después de ver la clasificación, sin recargar la página.

La página muestra el tablero en el centro, aciertos y fallos a la izquierda, y tiempo y precisión a la derecha. En las ventanas de escritorio comprobadas todo el juego y el footer caben sin desplazamiento vertical. La pista del footer permite descubrir que la tecla `N` alterna el modo oscuro. El cambio no se activa al escribir esa letra dentro del alias y no se guarda al recargar.

Los objetivos conservan sus nombres accesibles y su activación con teclado. El foco pasa del inicio a una diana y, si estaba en los controles de juego al terminar, pasa al campo de alias. Al enviar el formulario, el foco se sitúa en el título de la clasificación.

## Cómo probarlo

Abre `index.html` en un navegador con JavaScript activado. También puedes usar un servidor local si ya dispones de uno. No requiere instalar paquetes ni compilar.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: presentación y cuadrícula adaptable.
- `app.js`: creación del tablero, estado de los objetivos, selección aleatoria y eventos de inicio y acierto.
- `SpaceMono-Regular.ttf`: fuente local utilizada en los textos de la interfaz.
- `.gitignore`: exclusiones de temporales y configuración local.
- `assets/img/diana.png`: imagen proporcionada por el alumno y utilizada como fondo de los botones objetivo.
- `assets/img/diana-modo-oscuro.png`: versión en negro y blanco proporcionada por el alumno para el modo oscuro.
- `assets/img/titulo-aim-trainer.png`: título gráfico creado personalmente por el alumno. Se muestra sin deformar, recortando con CSS sus márgenes transparentes; el PNG se conserva intacto.
- `assets/img/titulo-aim-trainer-modo-oscuro.png`: versión del título proporcionada por el alumno para el modo oscuro.
- `assets/img/favicon.png`: icono proporcionado por el alumno para la pestaña del navegador.

## Funcionalidades implementadas y pendientes

- [x] Seis objetivos simultáneos en casillas diferentes.
- [x] Un punto por acierto y aparición de un nuevo objetivo en una casilla libre distinta de la anterior.
- [x] Partidas de 15 segundos, final y reinicio.
- [x] Formulario de alias y clasificación local de demostración (fase 4).
- [x] Contador de fallos y porcentaje de precisión.
- [x] Modo oscuro activado mediante una tecla secreta.
- [x] Incorporar un título gráfico creado personalmente por el alumno.
- [ ] Continuar las mejoras visuales con recursos propios en Photopea y revisar el resultado final.
- [ ] Repasar todo el código, identificar lo que no entiendo y resolver esas dudas antes de la defensa.

La configuración de partidas continúa como ampliación pendiente. La mejor puntuación del usuario se conserva en variables mientras la página permanece abierta, sin utilizar `localStorage`.

## Próximos pasos acordados

1. Definir con el alumno los parámetros personalizables y aplicar esa funcionalidad de forma incremental.
2. Realizar los últimos ajustes de diseño que proponga el alumno.
3. Repasar todo el HTML, CSS y JavaScript; revisar la organización y los comentarios, eliminar lo que no sea necesario y resolver cualquier concepto que el alumno no pueda explicar.
4. Analizar la entrega con la herramienta o *skill* de la IA evaluadora que proporcione el alumno y corregir los problemas reales detectados según la rúbrica.
5. Completar la Autopsia, cerrar la documentación, repetir las pruebas y revisar la limpieza del repositorio antes de la entrega.

## Clasificación de demostración

Al terminar, introduce un alias de entre 1 y 20 caracteres. Se eliminan los espacios iniciales y finales; no se acepta un nombre formado solo por espacios. El botón «Ver clasificación» muestra cinco participantes:

| Rival ficticio | Puntos (aciertos) | Fallos | Precisión |
| --- | ---: | ---: | ---: |
| Enrique Pastor | 35 | 5 | 88% |
| Mario Vaquerizo | 29 | 3 | 91% |
| Peereira7 | 23 | 2 | 92% |
| Peterbot | 15 | 5 | 75% |

La quinta entrada es tu mejor resultado desde que se abrió la página. Se sustituye al conseguir más puntos o, con los mismos puntos, una precisión superior. La tabla se ordena primero de mayor a menor puntuación y después de mayor a menor precisión. Si también coincide la precisión, queda delante quien consiguió antes esa marca. La fila del usuario se destaca con color y «(tú)». Un alias igual al de un rival no cambia su identificación como usuario.

No es una clasificación online ni un historial persistente y no usa `localStorage`. La mejor marca se conserva al volver a jugar, pero desaparece al recargar la página. Reiniciar una partida en curso no la registra.

## Comprobaciones de esta fase

Fase 4 aceptada y guardada por el alumno. El alumno también comprobó manualmente las fases 5 y 6: inicio, juego, fallos, precisión, formulario, clasificación, nueva partida, modo oscuro y diseño actual. Lista detallada de regresión:

- [x] Iniciar muestra seis objetivos, 0 puntos, 0 fallos, 0% de precisión y 15 segundos.
- [x] Un clic vacío en el tablero suma un fallo, sin cambiar las dianas ni los puntos.
- [x] Ocho aciertos y dos fallos muestran 80% de precisión.
- [x] Clics fuera del tablero o fuera del tiempo de partida no cuentan.
- [x] Reiniciar y volver a jugar restablecen fallos y precisión; al terminar, los valores de la partida permanecen visibles en los marcadores laterales.
- [x] Cada acierto suma uno y mantiene seis objetivos en posiciones distintas.
- [x] Al agotarse el tiempo, el marcador muestra 0, desaparecen las dianas y se muestra la puntuación final.
- [x] No se pueden sumar puntos ni modificar fallos o precisión después del final.
- [x] Reiniciar durante la partida restablece los puntos, los 15 segundos y los objetivos en posiciones nuevas.
- [x] Reiniciar varias veces no acelera el contador ni duplica los objetivos.
- [x] Al terminar aparece el formulario de alias; un nombre vacío o formado solo por espacios cambia la lista de requisitos al color de error.
- [x] Un alias válido muestra exactamente cinco filas, con los cuatro rivales acordados y la mejor marca del usuario destacada.
- [ ] La clasificación ordena por puntos, usa la precisión como desempate y conserva delante la marca anterior si ambos valores coinciden.
- [ ] El alias se muestra como texto, sin interpretar etiquetas HTML.
- [ ] Una partida con más puntos actualiza la mejor marca; con los mismos puntos solo la sustituye una precisión superior.
- [x] Volver a jugar funciona después de la clasificación y conserva la mejor marca mientras la página permanece abierta.
- [x] En una pantalla pequeña se puede desplazar el resultado hasta llegar al botón de nueva partida.
- [ ] La navegación con Tab, Intro y Espacio funciona y el foco sigue siendo visible.
- [x] La interfaz funciona en una pantalla estrecha y el código del proyecto no genera errores en consola.

El mensaje `No Listener: tabs:outgoing.message.ready` observado en `content.js` procede de una extensión del navegador: el proyecto no contiene ningún archivo llamado `content.js` y el error no aparece al probar la página sin esa extensión.

Un alias se inserta con `textContent`. Esto significa que un texto como `<b>Jugador</b>` se muestra literalmente con los signos `<` y `>`, sin convertirse en una etiqueta HTML ni ejecutar contenido introducido por el usuario.

El agente verificó la sintaxis JavaScript y probó 1.000 aciertos, el límite exacto de tiempo, clics tardíos, un intervalo retrasado, final con cero puntos, diez reinicios consecutivos, nueva partida y un único temporizador. Estas pruebas utilizan un DOM y un reloj simulados; no equivalen a una verificación visual o de teclado en un navegador real.

Comprobaciones adicionales del agente para la clasificación: puntuaciones 0, 15, 23, 29, 35 y 36; porcentajes ficticios calculados desde sus aciertos y fallos; cinco filas con cuatro columnas; alias vacío, largo, formado por espacios y con HTML literal; focos y reinicio del formulario. También se probaron empates a puntos con precisión inferior, igual y superior. Una marca del usuario con los mismos puntos solo cambia si mejora la precisión; si ambos valores coinciden, se conserva el alias registrado primero. Estas comprobaciones utilizaron un DOM y un reloj simulados y complementan la revisión manual del alumno.

Pruebas del agente para fallos y precisión: 0% sin intentos, 100% con solo aciertos, 80% con ocho aciertos y dos fallos, redondeo a 33%, clic vacío sin mover dianas, reinicio y nueva partida, y bloqueo de fallos al agotarse el tiempo. También se repitieron las pruebas de clasificación. Estas pruebas utilizaron un DOM y un reloj simulados y complementan la revisión manual general del alumno.

La repetición automática de Enter y Espacio se bloqueó únicamente cuando la tecla permanece pulsada sobre una diana. Las pulsaciones individuales y la navegación con Tab continúan disponibles.

Pruebas del agente para la fase 6: se repitieron las pruebas anteriores con el límite de 15 segundos y se comprobó que `N` alterna el modo y el título, mientras que escribir `n` en el alias no lo hace. En navegador se verificaron el modo claro, el modo oscuro, las dianas alternativas, el formulario y la tabla; no aparecieron errores en consola. La página no generó desplazamiento vertical en vistas de 1907 × 885 y 1366 × 768 píxeles CSS. En pantallas estrechas se conserva el desplazamiento como medida de seguridad para no ocultar contenido. Tras añadir las dianas decorativas del encabezado y engrosar los bordes, el alumno revisó manualmente el conjunto y aceptó su estado actual.

## Uso de IA

En cuanto al uso de IA, estoy de acuerdo con la metodología expuesta en esta asignatura: permitir su uso libre siempre que haya un control humano de todos los elementos de la página web. Al ver que tenía una asignatura de desarrollo web este año, me surgieron bastantes dudas, ya que durante el año pasado estuve trabajando en diversas páginas web en las que hice un uso bastante notable de la IA. La utilicé para aprender nuevos conceptos de forma autodidacta y para realizar con mayor rapidez cambios sencillos que ya dominaba.

No obstante, es verdad que, en algunos casos, con que el código funcionara ya me servía. Un ejemplo de ese tipo de operación en esta misión es `appendChild(objetivo);`. Esa no es la forma correcta de aprender: como explican las normas de este año, debo comprender todos los elementos con los que estoy trabajando. Mi objetivo es poder identificar, por ejemplo, un problema con la disposición de elementos en línea o en bloque, o un uso incorrecto de JavaScript, explicárselo a la IA y participar en la búsqueda de una solución.

Para esta primera misión he empleado la IA generativa de ChatGPT, a través de Codex, con el modelo GPT-6 Astra y un nivel de razonamiento medio, ya que considero que la misión utiliza código relativamente sencillo. También voy documentando los pasos que puedo reutilizar en próximas misiones en archivos `.md`, que almaceno en mi vault o cerebro personal de Obsidian para recuperar mi metodología de trabajo en las siguientes sesiones.

A continuación, el agente de IA irá actualizando este README al preparar cada commit, recogiendo las preguntas, indicaciones, decisiones y comprobaciones de esta misión. Yo revisaré ese registro para que refleje lo que realmente hemos trabajado.

**Trabajo propio y asistido:** he aportado la idea, las decisiones, anotaciones manuales en el HTML, el título gráfico, esta reflexión y la gestión de Git y GitHub. Codex ha generado la implementación del juego, el formulario y la clasificación, además de ayudar con estilos, comentarios y documentación. He revisado los cambios y planteado las preguntas recogidas abajo. Las comprobaciones del agente y las pruebas manuales pendientes están detalladas en [Comprobaciones de esta fase](#comprobaciones-de-esta-fase).

### Metodología y seguimiento

El trabajo se divide en fases pequeñas. Antes de avanzar, reviso el resultado, pregunto por los elementos que no entiendo y pido explicaciones de las decisiones técnicas. Los commits deben representar avances reales; he pedido al agente que me avise al cerrar cada fase y me proponga un mensaje, mientras yo ejecuto los comandos de Git.

Para conservar el contexto, hemos preparado una guía base de las misiones y una nota de seguimiento de M1 en Markdown. La guía reúne las reglas comunes del curso, la declaración de IA, la Autopsia y mi forma de trabajar. La nota de M1 recoge el estado del proyecto, las decisiones, las pruebas y el siguiente paso. Estos documentos sirven como base para Obsidian y para retomar el trabajo con otro agente; complementan el README de la entrega.

### Preguntas y decisiones trabajadas hasta la fase 6

- **Elección y alcance de la idea:** propuse un aim trainer y un Snake musical. Pedí comparar su dificultad y su encaje con la rúbrica, y elegí el aim trainer. Acordamos empezar con 16 casillas, cuatro objetivos y puntuación; el temporizador, los fallos y otras mejoras se incorporan por fases.
- **Estructura y HTML:** pedí revisar los nombres de los archivos y explicar los elementos del `head`: codificación UTF-8, viewport, enlace al CSS y carga de JavaScript con `defer`. También pregunté por `DOCTYPE`, `lang="es"`, cómo escribir comentarios y cómo distinguir las secciones del `body`.
- **Lectura y organización del CSS:** pedí identificar a qué elemento del HTML corresponde cada selector y organizar los comentarios por secciones. Solicité una guía sobre clases (`.`), identificadores (`#`), selector universal (`*`), etiquetas sin prefijo y pseudoclases como `:root`. Aclaré una confusión entre `;` y `:` para corregir esa explicación.
- **Propiedades y valores de CSS:** pedí explicar qué modifica cada declaración y cómo funcionan expresiones como `width: min(100% - 32px, 640px)`, sus valores y unidades. El agente añadió explicaciones de `min()`, `clamp()`, Grid, márgenes y rellenos para facilitar mi revisión del diseño.
- **JavaScript y DOM:** pedí desglosar `crearTablero()`, el bucle `for`, sus índices y la creación de cada elemento. Señalé operaciones concretas que quería entender: `querySelector`, `createElement`, `classList.add`, `setAttribute` con `aria-label` y template literals, y `appendChild`. Solicité comentarios breves junto a las operaciones importantes.
- **Edición compartida:** consulté el conflicto que aparecía al guardar mis cambios en VS Code mientras el agente modificaba el mismo archivo. Activé el autoguardado y comprobé que los comentarios añadidos se actualizaban en el editor.
- **Git y GitHub:** pedí las instrucciones para inicializar Git, hacer el primer commit, crear el repositorio público y conectar el remoto. Ejecuté los comandos personalmente y compartí la URL del repositorio para comprobar el resultado.
- **Revisión de la fase 2:** después de implementar los objetivos y aciertos, pedí identificar exactamente qué se había añadido o modificado en HTML, CSS y JavaScript. El agente explicó la separación entre casillas y bolitas, las variables de estado, las funciones nuevas y la delegación de eventos. Tras revisar los cambios y resolver las dudas planteadas, di por concluida esta fase y pedí preparar su commit. El repaso completo antes de la defensa sigue pendiente.
- **Personalización visual:** proporcioné un PNG y pregunté cómo usarlo como objetivo y ocultar visualmente la cuadrícula. Tras la explicación, pedí aplicar esos cambios, retirar el antiguo efecto de color al pasar el puntero y documentar por qué no se usa `display: none`. La imagen se conserva sin editar; esta incorporación no se presenta como un recurso creado personalmente en Photopea. Más adelante pedí ampliar el botón inicial, unificar y engrosar los bordes principales con el rojo `#FF2F2F` obtenido del título gráfico, y hacer que esos bordes cambien a blanco en el modo oscuro. También pedí colocar dos dianas decorativas a ambos lados del título usando los recursos existentes.
- **Pantalla de inicio:** comparé tres opciones para delimitar el tablero y elegí un borde exterior con el botón centrado. Antes de implementarlo, pregunté por la dificultad del código para poder defenderlo. Revisamos `position: relative`, `position: absolute`, `inset`, Flexbox y `hidden`. Acordamos posponer el ajuste del tablero a la altura de la ventana.
- **Temporizador y clasificación:** propuse el mensaje final, un formulario de nombre y cuatro rivales ficticios, además de un reinicio durante la partida. Acordamos separar el ciclo de partida (fase 3) del formulario y la clasificación (fase 4). El agente propuso calcular el tiempo desde una hora límite en vez de restar uno en cada intervalo. La revisión del código de esta fase sigue pendiente.
- **Título propio y favicon:** creé personalmente el título gráfico y proporcioné un segundo PNG para el favicon. Pedí sustituir el título anterior y retirar su decoración CSS. El agente integró ambos archivos, conservó el `h1` con texto alternativo y limitó con CSS el espacio transparente del título sin modificar la imagen original.
- **Clasificación local:** pedí continuar con el formulario y los rivales acordados. El agente implementó validación del alias, creación de filas con `textContent` y ordenación por puntos. Después pedí presentar los requisitos del alias como una lista y cambiarla al rojo de error cuando el nombre no sea válido. Durante la revisión manual reduje las puntuaciones ficticias y propuse añadir la precisión como segundo criterio: más puntos, después mayor precisión y, si ambos valores coinciden, la marca registrada antes. La mejor entrada del usuario sigue guardándose solo en variables y se pierde al recargar.
- **Fallos y precisión:** propuse detectar los clics sobre el fondo del tablero. El agente explicó cómo ampliar el listener existente para distinguir dianas y zonas vacías. Pedí usar `if/else` en lugar del operador ternario porque todavía no lo entiendo bien. Se centralizó la actualización del marcador en una función, evitando dividir entre cero antes del primer intento. Probé manualmente el recorrido principal y confirmé que la funcionalidad era correcta.
- **Organización para la defensa:** propuse ordenar JavaScript en tres bloques: preparación y datos, funciones del programa e inicio de la aplicación. Dentro de ellos se separan referencias al DOM, configuración, estado y las funciones según el recorrido del juego. El objetivo es poder explicar el programa como un flujo y localizar cada responsabilidad con rapidez.
- **Modo oscuro y diseño compacto:** proporcioné personalmente una diana y un título alternativos. Pedí que la tecla secreta pudiera descubrirse mediante una pista, reducir la partida a 15 segundos, colocar dos estadísticas a cada lado del tablero, retirar temporalmente «Cómo jugar» y reservar un footer. El agente implementó la tecla `N`, evitó activarla al escribir el alias y comprobó que las vistas de escritorio acordadas no necesitaran desplazamiento vertical.
- **Tablero rectangular:** tras revisar el espacio disponible en una captura, propuse aprovechar el ancho libre con un tablero de 6 columnas y 4 filas. El estado actual utiliza seis objetivos simultáneos y una lista lineal de casillas: JavaScript crea 24 elementos con el mismo bucle y CSS Grid los distribuye en cuatro filas, sin introducir un array bidimensional.
- **Tipografía, encabezado y bordes:** comparé varias tipografías retro y elegí Space Mono porque conserva tildes, símbolos y legibilidad. Pedí colocar dos dianas decorativas junto al título con una composición sencilla de Flexbox y aumentar los bordes principales. En modo claro se usa el rojo del título y en modo oscuro se cambia a blanco mediante la misma variable CSS. También pregunté por la etiqueta semántica `kbd`; decidí no añadir otra tipografía únicamente para representar la tecla secreta.
- **Cierre de la fase 6:** revisé manualmente el funcionamiento y el diseño actuales y confirmé que están correctos. Acordé guardar este avance antes de añadir parámetros personalizados. Después se realizarán los últimos cambios visuales, el repaso completo del código y una revisión final con la herramienta de evaluación de la misión.
- **Revisión funcional posterior:** al comprobar la lista de regresión descubrí que se había eliminado del HTML el elemento `#texto-pantalla`, aunque JavaScript todavía lo utilizaba. Esto detenía el final de partida antes de mostrar el formulario; el agente restauró el nodo y añadió una comprobación entre referencias JavaScript e identificadores HTML. También detecté que mantener Enter sobre una diana permitía sumar aciertos mediante la repetición automática del teclado, por lo que se bloqueó únicamente esa repetición sin retirar el control por teclado.
- **Documentación del aprendizaje:** pedí corregir esta sección porque los prompts de autorización por sí solos no reflejaban mis preguntas sobre funciones, parámetros, propiedades y operaciones del DOM. La reflexión inicial de esta sección la he escrito yo; el agente ha corregido su ortografía y organizado el seguimiento a partir de la conversación.

### Ejemplo real de revisión

> vale me gusta, dime ahora que partes del html, ccs y js has añadido/modificado

## Autopsia

Pendiente de redactar por el alumno después de comprender y valorar las decisiones del proyecto. La versión de entrega explicará las dos decisiones más discutibles del código final y la alternativa descartada en cada caso.

Posibles decisiones de esta fase para discutir, sin constituir todavía la autopsia final:

1. Crear las casillas con un bucle en JavaScript frente a escribir 16 botones en HTML: evita repetir etiquetas y practica la creación de nodos, pero hace que el tablero dependa de JavaScript.
2. En la fase 2, separar las casillas (`div`) de los objetivos (`button`): permite que solo la bolita sea interactiva. Se descartó mantener toda la casilla como botón porque puntuaría pulsar fuera del círculo. Los botones conservan activación por teclado.

Otra decisión para valorar: seleccionar entre las casillas libres antes de retirar el objetivo acertado. Evita repetir su posición sin recurrir a intentos aleatorios hasta encontrar una casilla válida.
