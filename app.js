// ==================================================
// 1. PREPARACIÓN Y DATOS
// ==================================================

// 1.1. Referencias al DOM
// DOM significa Document Object Model. El navegador transforma el HTML en un
// árbol de objetos que JavaScript puede consultar y modificar. document
// representa el documento completo y querySelector(selector) busca el primer
// elemento que coincide con un selector CSS. Aquí las constantes no guardan
// una copia del HTML: guardan una referencia al elemento real de la página.
// Si después se modifica su textContent, hidden, classList, etc., el cambio se
// refleja en pantalla. querySelector devolvería null si no encontrara el nodo.
const tablero = document.querySelector("#tablero"); // Busca #tablero y guarda la referencia a ese div.
const botonIniciar = document.querySelector("#iniciar");
const pantallaInicio = document.querySelector("#pantalla-inicio");
const textoPantalla = document.querySelector("#texto-pantalla");
const botonReiniciar = document.querySelector("#reiniciar");
const marcadorTiempo = document.querySelector("#tiempo");
const marcadorAciertos = document.querySelector("#aciertos");
const marcadorFallos = document.querySelector("#fallos");
const marcadorPrecision = document.querySelector("#precision");
const mensajeEstado = document.querySelector("#estado");
const formularioAlias = document.querySelector("#formulario-alias");
const campoAlias = document.querySelector("#alias");
const requisitosAlias = document.querySelector("#requisitos-alias");
const clasificacion = document.querySelector("#clasificacion");
const tituloClasificacion = document.querySelector("#titulo-clasificacion");
const cuerpoClasificacion = document.querySelector("#filas-clasificacion");
const imagenTitulo = document.querySelector("#imagen-titulo");

// 1.2. Configuración del juego
// Son valores fijos que definen las reglas y recursos del programa: rivales,
// dimensiones, objetivos, duración, tecla secreta y rutas de imágenes. Se usa
// const porque estas referencias no se reasignan durante una partida. En el
// caso de arrays y objetos, const fija la referencia, pero su contenido podría
// modificarse; este programa trata rivales como una configuración invariable.
const rivales = [
  { nombre: "Enrique Pastor", puntos: 35, fallos: 5, esUsuario: false },
  { nombre: "Mario Vaquerizo", puntos: 29, fallos: 3, esUsuario: false },
  { nombre: "Peereira7", puntos: 23, fallos: 2, esUsuario: false },
  { nombre: "Peterbot", puntos: 15, fallos: 5, esUsuario: false },
];

const numeroDeFilas = 4;
const numeroDeColumnas = 6;
const numeroDeCasillas = numeroDeFilas * numeroDeColumnas;
const numeroDeObjetivos = 6;
const duracionPartida = 15;
const teclaModoOscuro = "n";
const rutaTituloClaro = "assets/img/titulo-aim-trainer.png";
const rutaTituloOscuro = "assets/img/titulo-aim-trainer-modo-oscuro.png";

// 1.3. Estado de la partida
// El estado reúne los datos que cambian mientras se ejecuta el juego. Las
// variables let pueden recibir un valor nuevo: aciertos pasa de 0 a 1, por
// ejemplo. casillas y objetivosActivos son arrays declarados con const: no se
// pueden sustituir por otro array, pero sí añadir, quitar o modificar elementos.
//
// length, push(), includes(), indexOf(), splice() y sort() no son variables que
// tengamos que crear: son propiedades y métodos incorporados en los arrays de
// JavaScript. length es una propiedad, por eso se consulta sin paréntesis.
//
// Los elementos del DOM también son objetos proporcionados por el navegador.
// Por eso ya incluyen propiedades y métodos como hidden, classList, dataset,
// appendChild(), replaceChildren(), remove() y focus().
// Es una lista lineal de 24 elementos. CSS Grid coloca visualmente seis
// casillas por fila, por eso no hace falta utilizar un array de 4 x 6.
const casillas = [];
const objetivosActivos = []; // Guarda los índices de las casillas que tienen una bolita.

let aciertos = 0;
let fallos = 0;
let entrenamientoActivo = false;
let finDePartida = 0;
let intervalo = null; // Identificador del temporizador, para poder cancelarlo.
let resultadoPendiente = false; // Solo permite enviar el alias una vez y después de terminar.
let mejorPuntuacion = null; // Se conserva mientras la página siga abierta.
let mejorPrecision = null;
let aliasMejorPuntuacion = "";

// ==================================================
// 2. FUNCIONES DEL PROGRAMA
// ==================================================

// 2.1. Creación del tablero y objetivos
// Primero se crean numeroDeFilas * numeroDeColumnas casillas vacías. CSS Grid
// las reparte visualmente en 4 filas y 6 columnas. Cuando comienza la partida,
// otras funciones eligen casillas libres e insertan dentro los botones-diana.

// 2.1.1. Función crearTablero()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: repite el bucle numeroDeCasillas veces, crea un div por vuelta,
// le asigna la clase casilla, lo inserta en #tablero y guarda su referencia.
// Modifica: el DOM de #tablero y el array casillas.
function crearTablero() {
  for (let indice = 0; indice < numeroDeCasillas; indice++) {
    const casilla = document.createElement("div"); // La casilla es un contenedor; el botón será la bolita.
    casilla.classList.add("casilla"); // Añade la clase CSS "casilla" sin quitar otras clases.
    tablero.appendChild(casilla); // appendChild() inserta el nodo como último hijo real de #tablero.
    casillas.push(casilla); // push() añade la referencia de la casilla al final del array.
  }
}

// 2.1.2. Función elegirCasillaLibre()
// Parámetros: ninguno.
// Retorno: el índice numérico de una casilla libre elegida al azar.
// Funcionamiento: construye una lista con los índices que no aparecen en
// objetivosActivos, genera una posición aleatoria y devuelve ese índice libre.
// Modifica: nada fuera de la función; casillasLibres es un array temporal.
function elegirCasillaLibre() {
  const casillasLibres = [];

  for (let indice = 0; indice < numeroDeCasillas; indice++) {
    // includes(indice) devuelve true si el array contiene ese valor.
    if (!objetivosActivos.includes(indice)) {
      casillasLibres.push(indice);
    }
  }

  // Math.random() produce un decimal desde 0 incluido hasta 1 excluido.
  // Al multiplicarlo por length obtenemos una posición posible y Math.floor()
  // elimina los decimales para conseguir un índice entero válido.
  const posicionAleatoria = Math.floor(Math.random() * casillasLibres.length);
  return casillasLibres[posicionAleatoria];
}

// 2.1.3. Función colocarObjetivo(indice)
// Parámetros: indice, número de la casilla que recibirá la diana.
// Retorno: el nuevo elemento button, para poder enfocarlo si es necesario.
// Funcionamiento: crea un botón, lo configura, lo inserta en la casilla indicada
// y registra esa posición como ocupada.
// Modifica: el DOM de una casilla y el array objetivosActivos.
function colocarObjetivo(indice) {
  const objetivo = document.createElement("button"); // Crea una bolita interactiva, todavía fuera de la página.
  objetivo.type = "button";
  // classList representa las clases del atributo class. add() añade "objetivo"
  // sin borrar otras clases que el elemento pudiera tener.
  objetivo.classList.add("objetivo");
  // dataset permite leer y escribir atributos personalizados data-*. La propiedad
  // dataset.indice corresponde a data-indice en HTML. El número se guarda como texto.
  objetivo.dataset.indice = indice;
  objetivo.setAttribute("aria-label", `Objetivo en casilla ${indice + 1}`); // Nombre accesible, no texto visible.
  casillas[indice].appendChild(objetivo); // Inserta el botón dentro del div de esa casilla.
  objetivosActivos.push(indice); // Registra el índice para que deje de considerarse libre.
  return objetivo;
}

// 2.1.4. Función limpiarObjetivos()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: recorre todas las casillas, elimina sus dianas y vacía la lista
// de posiciones ocupadas sin sustituir el array original.
// Modifica: el DOM de las casillas y el array objetivosActivos.
function limpiarObjetivos() {
  for (const casilla of casillas) {
    // replaceChildren() es un método de elementos DOM. Sin argumentos elimina
    // todos sus hijos; la propia casilla continúa dentro del tablero.
    casilla.replaceChildren();
  }
  // length es una propiedad modificable del array. Asignarle 0 elimina todos
  // sus elementos. const impide objetivosActivos = [], pero permite modificar
  // el contenido del array que ya existe.
  objetivosActivos.length = 0;
}

// 2.2. Inicio, reinicio y temporizador
// 2.2.1. Función actualizarTiempo()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: compara la hora final con la hora actual, actualiza los
// segundos visibles y termina la partida cuando ya no queda tiempo.
// Modifica: el texto del marcador de tiempo y, al llegar a cero, el estado final.
function actualizarTiempo() {
  // Date.now() devuelve los milisegundos transcurridos desde el 1 de enero de
  // 1970 hasta el momento actual. Restarlo a finDePartida da el tiempo pendiente.
  const milisegundosRestantes = finDePartida - Date.now();
  // Math.ceil() redondea hacia arriba para mostrar 15, 14, 13...; Math.max()
  // compara ambos valores y evita que se llegue a mostrar un número negativo.
  const segundosRestantes = Math.max(0, Math.ceil(milisegundosRestantes / 1000)); // Redondea hacia arriba y evita negativos.
  marcadorTiempo.textContent = segundosRestantes;

  if (milisegundosRestantes <= 0) finalizarPartida();
}

// 2.2.2. Función limpiarResultadoAnterior()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: devuelve formulario, clasificación y pantalla central a su
// estado inicial antes de comenzar otra partida.
// Modifica: resultadoPendiente y varios elementos del DOM.
function limpiarResultadoAnterior() {
  resultadoPendiente = false;
  formularioAlias.reset(); // reset() devuelve los campos a sus valores iniciales del HTML.
  requisitosAlias.classList.remove("requisitos-alias--error"); // remove() quita solo esa clase CSS.
  campoAlias.removeAttribute("aria-invalid"); // Elimina por completo ese atributo del input.
  // hidden es una propiedad booleana del elemento: true añade el estado oculto
  // y false lo retira. Las reglas [hidden] de CSS aplican display: none.
  formularioAlias.hidden = true;
  clasificacion.hidden = true;
  cuerpoClasificacion.replaceChildren(); // Elimina las filas creadas en la partida anterior.
  botonIniciar.hidden = false;
  pantallaInicio.classList.remove("resultado");
}

// 2.2.3. Función prepararNuevaPartida()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: cancela cualquier temporizador anterior, limpia el resultado,
// reinicia estadísticas y coloca el número configurado de objetivos.
// Modifica: estado de la partida, marcadores, objetivos y pantalla de resultado.
function prepararNuevaPartida() {
  // clearInterval() es una función del navegador. Recibe el identificador que
  // devolvió setInterval() y cancela sus futuras repeticiones. Si vale null o ya
  // estaba cancelado no provoca un problema.
  clearInterval(intervalo);
  limpiarObjetivos();
  limpiarResultadoAnterior();

  entrenamientoActivo = true;
  aciertos = 0;
  fallos = 0;
  actualizarEstadisticas();
  marcadorTiempo.textContent = duracionPartida;

  for (let cantidad = 0; cantidad < numeroDeObjetivos; cantidad++) {
    colocarObjetivo(elegirCasillaLibre());
  }
}

// 2.2.4. Función mostrarPartidaActiva(inicioTeniaFoco)
// Parámetros: inicioTeniaFoco, booleano que indica si el botón de inicio o de
// reinicio era el elemento que tenía el foco antes de cambiar la pantalla.
// Retorno: ninguno.
// Funcionamiento: oculta la capa inicial, muestra el reinicio, calcula la hora
// final, pone en marcha el intervalo y conserva una navegación cómoda por teclado.
// Modifica: controles visibles, finDePartida, intervalo, foco y mensaje de estado.
function mostrarPartidaActiva(inicioTeniaFoco) {
  botonIniciar.disabled = true;
  pantallaInicio.hidden = true; // Oculta solo el mensaje y el botón superpuestos, no el tablero.
  botonReiniciar.hidden = false;
  finDePartida = Date.now() + duracionPartida * 1000; // Fecha límite en milisegundos; no restamos segundos a mano.
  // setInterval(funcion, tiempo) pide al navegador repetir la función cada 100ms
  // y devuelve un identificador que guardamos para cancelarlo con clearInterval().
  intervalo = setInterval(actualizarTiempo, 100);

  if (inicioTeniaFoco) {
    // focus() convierte la primera diana en el elemento activo del teclado.
    // preventScroll: true evita que el navegador desplace la página al enfocarla.
    tablero.querySelector(".objetivo").focus({ preventScroll: true });
  }

  // Durante la partida solo se muestra el botón de reinicio.
  mensajeEstado.textContent = "";
}

// 2.2.5. Función iniciarEntrenamiento()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: impide un segundo inicio simultáneo, recuerda si uno de los
// botones de control tenía el foco, prepara los datos y muestra la partida.
// Modifica: indirectamente todo el estado y la interfaz de una nueva partida.
function iniciarEntrenamiento() {
  if (entrenamientoActivo) return;

  // document.activeElement es el elemento que tiene el foco en ese momento.
  // inicioTeniaFoco será true si el foco estaba en Iniciar o Reiniciar, y false
  // en cualquier otro caso. Se usa para decidir si el foco debe pasar a una diana.
  const inicioTeniaFoco = document.activeElement === botonIniciar || document.activeElement === botonReiniciar;

  prepararNuevaPartida();
  mostrarPartidaActiva(inicioTeniaFoco);
}

// 2.2.6. Función reiniciarPartida()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: solo actúa durante una partida, la marca momentáneamente como
// inactiva y reutiliza iniciarEntrenamiento() para reconstruirla desde cero.
// Modifica: indirectamente temporizador, estadísticas, objetivos y controles.
function reiniciarPartida() {
  if (!entrenamientoActivo) return;
  entrenamientoActivo = false;
  iniciarEntrenamiento();
}

// 2.3. Interacción: aciertos, fallos y estadísticas
// 2.3.1. Función calcularPrecision(cantidadAciertos, cantidadFallos)
// Parámetros: dos números con los aciertos y fallos que se quieren calcular.
// Retorno: un número entero entre 0 y 100.
// Funcionamiento: divide los aciertos entre todos los intentos y transforma el
// resultado en porcentaje; devuelve 0 si todavía no existe ningún intento.
// Modifica: nada; solo calcula y devuelve un valor.
function calcularPrecision(cantidadAciertos, cantidadFallos) {
  const intentos = cantidadAciertos + cantidadFallos;

  if (intentos === 0) {
    return 0; // Antes del primer intento mostramos 0% y evitamos dividir entre cero.
  } else {
    return Math.round((cantidadAciertos / intentos) * 100); // Convierte la proporción en porcentaje entero.
  }
}

// 2.3.2. Función actualizarEstadisticas()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: calcula la precisión del estado actual y escribe aciertos,
// fallos y porcentaje en sus marcadores.
// Modifica: el textContent de los tres elementos visibles del marcador.
function actualizarEstadisticas() {
  const precision = calcularPrecision(aciertos, fallos);

  marcadorAciertos.textContent = aciertos;
  marcadorFallos.textContent = fallos;
  marcadorPrecision.textContent = `${precision}%`;
}

// 2.3.3. Función registrarFallo()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: incrementa fallos y actualiza los marcadores.
// Modifica: la variable fallos y el DOM de las estadísticas.
function registrarFallo() {
  fallos++;
  actualizarEstadisticas();
}

// 2.3.4. Función registrarAcierto(objetivo)
// Parámetros: objetivo, botón-diana que acaba de activarse.
// Retorno: ninguno.
// Funcionamiento: recupera su posición, elige otra libre, elimina la diana
// acertada, crea su sustituta, suma el punto y conserva el foco si era necesario.
// Modifica: objetivosActivos, DOM del tablero, aciertos, estadísticas y foco.
function registrarAcierto(objetivo) {
  // dataset siempre entrega texto. Number() transforma "7" en el número 7.
  const indice = Number(objetivo.dataset.indice);
  const nuevoIndice = elegirCasillaLibre(); // Se elige antes de retirar la bolita para excluir también su casilla.
  const teniaFoco = document.activeElement === objetivo;

  // indexOf() localiza la posición del índice dentro del array. splice(posición, 1)
  // elimina exactamente un elemento a partir de esa posición.
  objetivosActivos.splice(objetivosActivos.indexOf(indice), 1);
  // remove() es un método del elemento DOM: retira ese botón de la página.
  objetivo.remove();
  const nuevoObjetivo = colocarObjetivo(nuevoIndice);

  aciertos++;
  actualizarEstadisticas();

  if (teniaFoco) {
    // Mueve el foco al botón sustituto sin desplazar visualmente la página.
    nuevoObjetivo.focus({ preventScroll: true });
  }
}

// 2.3.5. Función manejarClicTablero(evento)
// Parámetros: evento, objeto creado por el navegador con información del clic.
// Retorno: ninguno.
// Funcionamiento: descarta clics fuera de una partida o fuera de tiempo, busca
// si se pulsó una diana y registra un acierto o un fallo según el resultado.
// Modifica: estado y DOM mediante registrarAcierto(), registrarFallo() o el final.
function manejarClicTablero(evento) {
  if (!entrenamientoActivo) return;

  if (Date.now() >= finDePartida) { // Impide puntuar fuera de plazo aunque el intervalo se haya retrasado.
    finalizarPartida();
    return;
  }

  // evento.target es el nodo exacto pulsado. closest(".objetivo") busca ese nodo
  // o su antepasado más cercano con la clase objetivo; devuelve null si no existe.
  const objetivo = evento.target.closest(".objetivo");

  if (!objetivo) {
    registrarFallo();
    return; // Un clic vacío registra un fallo, pero no cambia las dianas ni suma puntos.
  }

  // contains() confirma que el objetivo encontrado pertenece realmente al tablero.
  if (!tablero.contains(objetivo)) return;
  registrarAcierto(objetivo);
}

// 2.3.6. Función evitarActivacionMantenida(evento)
// Parámetros: evento de teclado enviado por el navegador.
// Retorno: ninguno.
// Funcionamiento: detecta la repetición automática de Enter o Espacio sobre una
// diana y cancela solo esas repeticiones; las pulsaciones individuales funcionan.
// Modifica: el comportamiento predeterminado del evento cuando se cumplen las condiciones.
function evitarActivacionMantenida(evento) {
  if (!evento.repeat) return;
  if (evento.key !== "Enter" && evento.key !== " ") return;
  if (!evento.target.classList.contains("objetivo")) return;

  // preventDefault() cancela la acción normal asociada a ese evento de teclado.
  evento.preventDefault(); // Evita sumar muchos aciertos manteniendo una tecla pulsada.
}

// 2.4. Final de partida
// 2.4.1. Función finalizarPartida()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: detiene el juego y el temporizador, elimina las dianas, muestra
// la puntuación y el formulario, oculta el reinicio y recoloca el foco si procede.
// Modifica: estado de la partida, intervalo, tablero, pantalla final y foco.
function finalizarPartida() {
  if (!entrenamientoActivo) return;

  entrenamientoActivo = false;
  clearInterval(intervalo);
  intervalo = null;
  marcadorTiempo.textContent = 0;
  // focoEnJuego será true si el foco estaba dentro del tablero o en Reiniciar.
  // En ese caso lo trasladamos al alias porque esos controles van a desaparecer.
  const focoEnJuego = tablero.contains(document.activeElement)
    || document.activeElement === botonReiniciar;
  limpiarObjetivos();

  textoPantalla.textContent = `Tu puntuación es de ${aciertos} puntos.`;
  botonIniciar.textContent = "Volver a jugar";
  botonIniciar.disabled = false;
  botonIniciar.hidden = true;
  pantallaInicio.hidden = false;
  pantallaInicio.classList.add("resultado");
  formularioAlias.hidden = false;
  resultadoPendiente = true;
  botonReiniciar.hidden = true;
  mensajeEstado.textContent = "Partida terminada | Inscríbete en la clasificación para ver en qué puesto estás";

  if (focoEnJuego) campoAlias.focus({ preventScroll: true });
}

// 2.5. Formulario y clasificación
// 2.5.1. Función validarAlias()
// Parámetros: ninguno; lee directamente el valor del input #alias.
// Retorno: el nombre limpio si es válido o null si no cumple los requisitos.
// Funcionamiento: elimina espacios exteriores, comprueba la longitud y muestra
// el estado de error accesible cuando el alias no es válido.
// Modifica: clases, atributo aria-invalid y foco del campo de alias.
function validarAlias() {
  // value contiene el texto del input. trim() devuelve otra cadena sin espacios
  // al principio ni al final; no cambia directamente el contenido visible.
  const nombre = campoAlias.value.trim();

  if (nombre.length === 0 || nombre.length > 20) {
    requisitosAlias.classList.add("requisitos-alias--error");
    campoAlias.setAttribute("aria-invalid", "true");
    campoAlias.focus();
    return null;
  }

  requisitosAlias.classList.remove("requisitos-alias--error");
  campoAlias.removeAttribute("aria-invalid");
  return nombre;
}

// 2.5.2. Función actualizarMejorPuntuacion(nombre)
// Parámetros: nombre, alias válido enviado por el usuario.
// Retorno: ninguno.
// Funcionamiento: compara la partida con la mejor marca guardada; la sustituye
// si tiene más puntos o los mismos puntos con una precisión superior.
// Modifica: mejorPuntuacion, mejorPrecision y aliasMejorPuntuacion si hay mejora.
function actualizarMejorPuntuacion(nombre) {
  const precisionActual = calcularPrecision(aciertos, fallos);
  let mejoraLaMarca = false;

  if (mejorPuntuacion === null || aciertos > mejorPuntuacion) {
    mejoraLaMarca = true;
  } else if (aciertos === mejorPuntuacion && precisionActual > mejorPrecision) {
    mejoraLaMarca = true;
  }

  if (!mejoraLaMarca) return;

  mejorPuntuacion = aciertos;
  mejorPrecision = precisionActual;
  aliasMejorPuntuacion = nombre;
}

// 2.5.3. Función crearParticipantesOrdenados()
// Parámetros: ninguno; utiliza rivales y la mejor marca almacenada.
// Retorno: un nuevo array con los cinco participantes ya ordenados.
// Funcionamiento: crea el resultado del usuario, copia los rivales añadiendo su
// precisión y orden, une todos los resultados y aplica los tres desempates.
// Modifica: nada fuera de la función; trabaja con un array nuevo.
function crearParticipantesOrdenados() {
  const mejorResultado = {
    nombre: aliasMejorPuntuacion,
    puntos: mejorPuntuacion,
    precision: mejorPrecision,
    ordenRegistro: rivales.length,
    esUsuario: true,
  };
  const participantes = [];

  for (let indice = 0; indice < rivales.length; indice++) {
    const rival = rivales[indice];
    participantes.push({
      // ... copia dentro del nuevo objeto todas las propiedades de rival.
      ...rival,
      precision: calcularPrecision(rival.puntos, rival.fallos),
      ordenRegistro: indice,
    });
  }

  participantes.push(mejorResultado);

  // sort() reorganiza el propio array. La función de comparación devuelve un
  // número negativo, positivo o 0 para decidir qué participante va primero.
  participantes.sort(function (participanteA, participanteB) {
    if (participanteA.puntos !== participanteB.puntos) {
      return participanteB.puntos - participanteA.puntos; // De mayor a menor puntuación.
    }

    if (participanteA.precision !== participanteB.precision) {
      return participanteB.precision - participanteA.precision; // En empate a puntos, gana la precisión.
    }

    return participanteA.ordenRegistro - participanteB.ordenRegistro; // Si todo coincide, gana la marca anterior.
  });

  return participantes;
}

// 2.5.4. Función crearFilaClasificacion(participante, indice)
// Parámetros: participante, objeto con sus datos; indice, posición en la tabla.
// Retorno: el elemento <tr> completo, todavía sin insertar en <tbody>.
// Funcionamiento: crea las cuatro celdas, escribe sus datos y destaca al usuario.
// Modifica: solo los nodos DOM nuevos creados dentro de la función.
function crearFilaClasificacion(participante, indice) {
  const fila = document.createElement("tr");
  const puesto = document.createElement("td");
  const alias = document.createElement("th");
  const puntos = document.createElement("td");
  const precision = document.createElement("td");
  alias.setAttribute("scope", "row");

  puesto.textContent = indice + 1;

  if (participante.esUsuario) {
    alias.textContent = `${participante.nombre} (tú)`;
    fila.classList.add("fila-usuario");
  } else {
    alias.textContent = participante.nombre;
  }

  puntos.textContent = participante.puntos;
  precision.textContent = `${participante.precision}%`;
  // Cada appendChild() inserta una celda como último hijo de la fila y mantiene
  // el orden visual: puesto, alias, puntos y precisión.
  fila.appendChild(puesto);
  fila.appendChild(alias);
  fila.appendChild(puntos);
  fila.appendChild(precision);
  return fila;
}

// 2.5.5. Función rellenarClasificacion(participantes)
// Parámetros: participantes, array ya ordenado que se quiere representar.
// Retorno: ninguno.
// Funcionamiento: vacía el tbody, crea una fila por participante y la inserta.
// Modifica: el contenido DOM de #filas-clasificacion.
function rellenarClasificacion(participantes) {
  cuerpoClasificacion.replaceChildren();

  for (let indice = 0; indice < participantes.length; indice++) {
    const fila = crearFilaClasificacion(participantes[indice], indice);
    cuerpoClasificacion.appendChild(fila);
  }
}

// 2.5.6. Función mostrarPantallaClasificacion()
// Parámetros: ninguno.
// Retorno: ninguno.
// Funcionamiento: oculta el formulario, muestra tabla y botón, lleva el foco al
// título y coloca el desplazamiento interno del resultado en su parte superior.
// Modifica: resultadoPendiente, visibilidad, foco, scroll y mensaje de estado.
function mostrarPantallaClasificacion() {
  resultadoPendiente = false;
  formularioAlias.hidden = true;
  clasificacion.hidden = false;
  botonIniciar.hidden = false;
  tituloClasificacion.focus({ preventScroll: true });
  pantallaInicio.scrollTop = 0;
  mensajeEstado.textContent = "";
}

// 2.5.7. Función mostrarClasificacion(evento)
// Parámetros: evento submit generado al enviar el formulario.
// Retorno: ninguno.
// Funcionamiento: evita la recarga normal, comprueba el estado y el alias,
// actualiza la mejor marca, genera los participantes y muestra la tabla.
// Modifica: indirectamente mejor marca, filas de clasificación y pantalla visible.
function mostrarClasificacion(evento) {
  // Los formularios intentan enviar datos y recargar la página por defecto.
  // preventDefault() cancela esa acción para gestionar el envío con JavaScript.
  evento.preventDefault();
  if (!resultadoPendiente || entrenamientoActivo) return;

  const nombre = validarAlias();
  if (nombre === null) return;

  actualizarMejorPuntuacion(nombre);
  const participantes = crearParticipantesOrdenados();
  rellenarClasificacion(participantes);
  mostrarPantallaClasificacion();
}

// 2.6. Modo oscuro
// 2.6.1. Función alternarModoOscuro(evento)
// Parámetros: evento de teclado creado por el navegador.
// Retorno: ninguno.
// Funcionamiento: ignora la escritura en el alias y cualquier tecla distinta de
// N; si coincide, alterna la clase del body y cambia la imagen del título.
// Modifica: class del body y atributo src de #imagen-titulo.
function alternarModoOscuro(evento) {
  // Escribir la letra secreta dentro del campo de alias no cambia el tema.
  if (evento.target === campoAlias) return;
  if (evento.key.toLowerCase() !== teclaModoOscuro) return;

  // toggle() añade la clase si no existe y la elimina si ya estaba presente.
  // Además devuelve true cuando la clase queda activa y false cuando se retira.
  const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");

  if (modoOscuroActivo) {
    imagenTitulo.src = rutaTituloOscuro;
  } else {
    imagenTitulo.src = rutaTituloClaro;
  }
}

// ==================================================
// 3. INICIO DE LA APLICACIÓN
// ==================================================

// 3.1. Creación inicial del tablero
// Estas instrucciones se ejecutan una vez al cargar app.js. Primero se crean
// las 24 casillas y después se habilita el botón de inicio.
crearTablero();
botonIniciar.disabled = false;

// 3.2. Registro de eventos
// addEventListener(tipo, función) indica qué función debe ejecutar el navegador
// cuando ocurre cada acción. Se pasa el nombre de la función sin paréntesis para
// registrarla ahora; el navegador será quien la invoque cuando llegue el evento.
botonIniciar.addEventListener("click", iniciarEntrenamiento);
botonReiniciar.addEventListener("click", reiniciarPartida);
formularioAlias.addEventListener("submit", mostrarClasificacion);
tablero.addEventListener("click", manejarClicTablero); // Un listener atiende todas las bolitas, incluidas las nuevas.
tablero.addEventListener("keydown", evitarActivacionMantenida);
document.addEventListener("keydown", alternarModoOscuro);
