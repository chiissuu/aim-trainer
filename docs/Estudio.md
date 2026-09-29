# Guía de estudio del proyecto

Este documento reúne las explicaciones amplias que se retiraron de `index.html`, `styles.css` y `app.js` para que los archivos fuente sean más fáciles de leer. El código conserva comentarios breves junto a las decisiones que necesitan contexto.

## 1. HTML

### `span`

`<span>` es un contenedor genérico para una parte pequeña de contenido. Normalmente se utiliza dentro de una línea de texto o de otro elemento. No aporta un significado semántico propio: sirve para agrupar contenido y poder aplicarle CSS, identificarlo desde JavaScript o añadir atributos.

En `<span class="diana-decorativa" aria-hidden="true"></span>` está vacío porque la diana se coloca como imagen de fondo desde CSS. `aria-hidden="true"` indica a los lectores de pantalla que deben ignorarlo, ya que esa diana es decorativa.

### Diferencia entre `class` e `id`

`class` identifica uno o varios elementos que comparten una función o unos estilos. Una clase puede repetirse y un elemento puede tener varias clases. En CSS se selecciona con un punto: `.encabezado-sesion`.

`id` identifica un único elemento dentro de la página y no debe repetirse. En CSS se selecciona con `#`: `#titulo-sesion`. JavaScript también puede localizarlo con `querySelector("#titulo-sesion")`.

En el proyecto, `class="encabezado-sesion"` permite aplicar estilos al contenedor. `id="titulo-sesion"` identifica el `h2` y permite relacionarlo con `<section aria-labelledby="titulo-sesion">` para darle un nombre accesible a esa sección.

### `dl`, `dt` y `dd`

- `<dl>` crea una lista de descripciones o parejas de concepto y valor.
- `<dt>` contiene el término o nombre del dato.
- `<dd>` contiene su descripción o valor.

En el marcador, «Aciertos» es el `dt` y el número mostrado es el `dd`. Esta estructura expresa mejor la relación entre cada estadística y su valor que varios `div` sin significado.

### `form`, `label` e `input`

`<form>` agrupa los controles de un formulario. Al enviarlo genera el evento `submit`, incluso cuando se pulsa Intro dentro del campo. Podría utilizarse un `div` y controlar un botón con JavaScript, pero `form` es la opción semántica y accesible para introducir y enviar datos.

`<label>` describe qué dato debe escribir el usuario. Su atributo `for` debe coincidir con el `id` del control. Al pulsar la etiqueta también se enfoca el campo relacionado.

`<input>` crea un control para introducir datos. `type="text"` permite escribir texto, `required` señala que es obligatorio y `maxlength="20"` limita el valor a veinte caracteres. Es una etiqueta vacía y no necesita cierre.

### `ul` y `li`

`<ul>` crea una lista no ordenada y `<li>` representa cada elemento. En el formulario, `ul` agrupa los requisitos del alias. Si el orden fuera importante se utilizaría `<ol>`.

### `thead` y `tbody`

`<thead>` agrupa la cabecera de una tabla. En este proyecto contiene «Puesto», «Alias», «Puntos» y «Precisión» mediante elementos `th`.

`<tbody>` agrupa las filas de datos. Empieza vacío porque JavaScript crea e inserta las cinco filas al mostrar la clasificación. Separarlos mejora la estructura semántica de la tabla.

### Diferencia entre `div` y `section`

`<div>` es un contenedor genérico sin significado semántico. Se utiliza para agrupar elementos por diseño, distribución o uso desde JavaScript.

`<section>` representa una sección temática y normalmente tiene un título. El panel de entrenamiento es una sección porque constituye una parte reconocible con el título «Zona de entrenamiento». Su distribución interior usa `div` porque solo organiza visualmente los marcadores y el tablero.

### `noscript`

`<noscript>` contiene información alternativa que el navegador muestra cuando JavaScript está desactivado o no puede ejecutarse. En este proyecto JavaScript crea las casillas y controla la partida, por eso se avisa al usuario de que debe activarlo.

## 2. CSS

### Cómo se lee una regla

```css
selector {
  propiedad: valor;
}
```

- `.nombre` selecciona una clase reutilizable.
- `#nombre` selecciona un identificador único.
- `*` selecciona todos los elementos.
- Una etiqueta sin prefijo, como `button`, selecciona todas las etiquetas de ese tipo.
- `:nombre` introduce una pseudoclase, como `:focus-visible`.
- Un espacio selecciona descendientes: `.panel p`.
- `>` selecciona hijos directos: `.marcador > div`.
- `[atributo]` selecciona elementos que tienen ese atributo: `[hidden]`.
- Una coma permite aplicar el mismo bloque a varios selectores.
- `@media` agrupa reglas que se aplican cuando se cumple una condición.

La cascada decide qué regla se aplica cuando varias afectan al mismo elemento. Influyen la especificidad, el orden y la herencia.

### `:root` y las variables

`:root` representa el elemento raíz del documento, que en HTML es `<html>`. El navegador lo selecciona automáticamente. Las propiedades que empiezan por `--`, como `--color-texto`, son propiedades personalizadas o variables CSS. Se leen con `var(--color-texto)`.

Definir la paleta en un solo lugar evita repetir valores, mantiene los colores coherentes y permite crear temas. `body.modo-oscuro` sustituye las variables cuando JavaScript añade esa clase al `body`; al retirarla vuelven a utilizarse los valores claros.

### Selector universal y modelo de caja

El selector `*` aplica `box-sizing: border-box` a todos los elementos. Con este valor, el ancho y el alto declarados ya incluyen el relleno y el borde. Así, un elemento de `100px` sigue ocupando `100px` en total.

### Medidas y funciones

- `calc(100% - 32px)` realiza una operación y deja 16 píxeles libres a cada lado.
- `min(100%, 320px)` utiliza el menor de los dos valores.
- `minmax(0, 1fr)` permite que una columna ocupe una fracción del espacio y pueda encogerse.
- `aspect-ratio: 6 / 4` mantiene una proporción entre ancho y alto.
- `100dvh` representa la altura visible dinámica del navegador.
- `inset: 0` equivale a establecer `top`, `right`, `bottom` y `left` a cero.

### Grid y Flexbox

`display: grid` organiza elementos en filas y columnas. El tablero utiliza `repeat(6, 1fr)` para crear seis columnas iguales y `repeat(4, 1fr)` para crear cuatro filas. `grid-column: 1 / -1` hace que un elemento abarque desde la primera hasta la última línea de la cuadrícula.

`display: flex` organiza elementos en una dirección. Propiedades como `align-items`, `justify-content`, `gap` y `flex-direction` controlan la alineación, separación y dirección.

### Selectores usados en el proyecto

`.marcador > div` afecta solo a los `div` que son hijos directos de `.marcador`. `.pantalla-inicio.resultado` exige que un mismo elemento tenga las dos clases. `.clasificacion th:nth-child(2)` selecciona la segunda cabecera de cada fila.

Los selectores `#formulario-alias[hidden]`, `#clasificacion[hidden]` y `#iniciar[hidden]` combinan un identificador con el atributo `hidden`. La regla `display: none` garantiza que otros valores de `display` del proyecto no vuelvan a mostrar esos elementos.

### Responsive

Las reglas generales forman el diseño normal. El primer `@media` compacta algunos tamaños si la ventana tiene 760 píxeles de alto o menos y más de 700 píxeles de ancho. El segundo reorganiza la interfaz cuando el ancho es de 700 píxeles o menos.

No se crean tres páginas diferentes. El navegador comprueba las condiciones y las reglas posteriores sustituyen únicamente las propiedades repetidas.

## 3. JavaScript

### DOM y referencias

DOM significa *Document Object Model*. El navegador transforma el HTML en un árbol de objetos que JavaScript puede consultar y modificar. `document` representa el documento y `querySelector()` busca el primer elemento que coincide con un selector CSS.

Las constantes del bloque 1.1 guardan referencias a los elementos reales. Si JavaScript modifica propiedades como `textContent`, `hidden` o `classList`, el cambio aparece en pantalla.

### Configuración y estado

La configuración contiene valores fijos como las dimensiones, la duración, los rivales y las rutas de imágenes. Se declara con `const` porque no se reasigna durante una partida.

El estado reúne datos que cambian, como los aciertos, los fallos, el temporizador o la mejor puntuación. Las variables que reciben valores nuevos utilizan `let`. Los arrays `casillas` y `objetivosActivos` usan `const`: no se sustituyen por otro array, pero sí puede modificarse su contenido.

### Arrays y objetos del navegador

`length`, `push()`, `includes()`, `indexOf()`, `splice()` y `sort()` son propiedades y métodos incorporados en los arrays. Los elementos del DOM también son objetos y proporcionan propiedades o métodos como `hidden`, `classList`, `dataset`, `appendChild()`, `replaceChildren()`, `remove()` y `focus()`.

El tablero se guarda como una lista lineal de 24 casillas. CSS las distribuye visualmente en seis columnas y cuatro filas.

### Funciones del programa

| Función | Parámetros y retorno | Responsabilidad principal |
| --- | --- | --- |
| `crearTablero()` | Sin parámetros ni retorno. | Crea las 24 casillas, las añade al tablero y guarda sus referencias. |
| `elegirCasillaLibre()` | Devuelve un índice. | Reúne las posiciones desocupadas y elige una al azar. |
| `colocarObjetivo(indice)` | Recibe un índice y devuelve el botón. | Crea una diana, la inserta y registra su posición. |
| `limpiarObjetivos()` | Sin parámetros ni retorno. | Elimina las dianas y vacía la lista de posiciones ocupadas. |
| `actualizarTiempo()` | Sin parámetros ni retorno. | Calcula los segundos restantes y finaliza al llegar a cero. |
| `limpiarResultadoAnterior()` | Sin parámetros ni retorno. | Devuelve formulario, clasificación y pantalla central al estado inicial. |
| `prepararNuevaPartida()` | Sin parámetros ni retorno. | Reinicia estadísticas, temporizador y objetivos. |
| `mostrarPartidaActiva(inicioTeniaFoco)` | Recibe un booleano. | Cambia los controles visibles, inicia el intervalo y conserva el foco. |
| `iniciarEntrenamiento()` | Sin parámetros ni retorno. | Impide inicios duplicados y prepara una partida. |
| `reiniciarPartida()` | Sin parámetros ni retorno. | Descarta la partida activa y reutiliza el inicio. |
| `calcularPrecision(aciertos, fallos)` | Devuelve un entero. | Calcula el porcentaje y evita dividir entre cero. |
| `actualizarEstadisticas()` | Sin parámetros ni retorno. | Escribe aciertos, fallos y precisión en los marcadores. |
| `registrarFallo()` | Sin parámetros ni retorno. | Incrementa los fallos y actualiza los marcadores. |
| `registrarAcierto(objetivo)` | Recibe el botón pulsado. | Retira la diana, coloca otra, suma el punto y conserva el foco. |
| `manejarClicTablero(evento)` | Recibe un evento. | Distingue entre una diana y un espacio vacío. |
| `evitarActivacionMantenida(evento)` | Recibe un evento de teclado. | Bloquea la repetición automática de Intro o Espacio. |
| `finalizarPartida()` | Sin parámetros ni retorno. | Detiene el juego y muestra el formulario final. |
| `validarAlias()` | Devuelve el alias o `null`. | Limpia el texto y comprueba sus requisitos. |
| `actualizarMejorPuntuacion(nombre)` | Recibe el alias. | Sustituye la mejor marca cuando corresponde. |
| `crearParticipantesOrdenados()` | Devuelve un array. | Combina rivales y usuario y aplica los desempates. |
| `crearFilaClasificacion(participante, indice)` | Devuelve un `tr`. | Crea las cuatro celdas de una fila usando `textContent`. |
| `rellenarClasificacion(participantes)` | Recibe el array ordenado. | Vacía el `tbody` e inserta todas las filas. |
| `mostrarPantallaClasificacion()` | Sin parámetros ni retorno. | Muestra la tabla y coloca el foco en su título. |
| `mostrarClasificacion(evento)` | Recibe el evento `submit`. | Valida, actualiza la marca y genera la clasificación. |
| `alternarModoOscuro(evento)` | Recibe un evento de teclado. | Alterna la clase del tema y la imagen del título. |

### Métodos y propiedades importantes

- `appendChild(nodo)` inserta un nodo como último hijo de otro elemento.
- `replaceChildren()` sin argumentos elimina todos los hijos, pero conserva el elemento padre.
- `classList.add()`, `remove()` y `toggle()` gestionan clases CSS.
- `dataset.indice` corresponde al atributo HTML `data-indice` y guarda texto.
- `objetivosActivos.length = 0` vacía el array sin sustituir su referencia.
- `elemento.hidden = true` oculta el elemento; `false` lo vuelve a mostrar.
- `Date.now()` devuelve la hora actual en milisegundos.
- `setInterval()` repite una función y `clearInterval()` cancela esa repetición.
- `focus({ preventScroll: true })` mueve el foco sin desplazar la página.
- `remove()` retira el elemento del documento.
- `textContent` escribe texto literal y evita interpretar el alias como HTML.

### Inicio de la aplicación

Al cargar `app.js`, `crearTablero()` genera las casillas y se habilita el botón. Después, `addEventListener(tipo, funcion)` registra las funciones que responderán a clics, envíos de formulario y pulsaciones de teclado. La función se pasa sin paréntesis porque el navegador debe ejecutarla cuando ocurra el evento.
