// ==================================================
// 1. PREPARACIÓN Y DATOS
// ==================================================

// 1.1. Referencias al DOM
const tablero = document.querySelector("#tablero"); // Busca el primer elemento con id="tablero" y guarda su referencia.
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
function crearTablero() {
  for (let indice = 0; indice < numeroDeCasillas; indice++) {
    const casilla = document.createElement("div"); // La casilla es un contenedor; el botón será la bolita.
    casilla.classList.add("casilla"); // Añade la clase CSS "casilla" sin quitar otras clases.
    tablero.appendChild(casilla); // Inserta la casilla como último hijo del tablero.
    casillas.push(casilla);
  }
}

function elegirCasillaLibre() {
  const casillasLibres = [];

  for (let indice = 0; indice < numeroDeCasillas; indice++) {
    if (!objetivosActivos.includes(indice)) {
      casillasLibres.push(indice);
    }
  }

  const posicionAleatoria = Math.floor(Math.random() * casillasLibres.length); // Índice entero entre 0 y longitud - 1.
  return casillasLibres[posicionAleatoria];
}

function colocarObjetivo(indice) {
  const objetivo = document.createElement("button"); // Crea una bolita interactiva, todavía fuera de la página.
  objetivo.type = "button";
  objetivo.classList.add("objetivo");
  objetivo.dataset.indice = indice; // data-indice relaciona el botón con su posición; se guarda como texto.
  objetivo.setAttribute("aria-label", `Objetivo en casilla ${indice + 1}`); // Nombre accesible, no texto visible.
  casillas[indice].appendChild(objetivo);
  objetivosActivos.push(indice);
  return objetivo;
}

function limpiarObjetivos() {
  for (const casilla of casillas) {
    casilla.replaceChildren(); // Vacía su contenido sin borrar la casilla del tablero.
  }
  objetivosActivos.length = 0; // Vacía el array conservando su referencia const.
}

// 2.2. Inicio, reinicio y temporizador
function actualizarTiempo() {
  const milisegundosRestantes = finDePartida - Date.now();
  const segundosRestantes = Math.max(0, Math.ceil(milisegundosRestantes / 1000)); // Redondea hacia arriba y evita negativos.
  marcadorTiempo.textContent = segundosRestantes;

  if (milisegundosRestantes <= 0) finalizarPartida();
}

function limpiarResultadoAnterior() {
  resultadoPendiente = false;
  formularioAlias.reset();
  requisitosAlias.classList.remove("requisitos-alias--error");
  campoAlias.removeAttribute("aria-invalid");
  formularioAlias.hidden = true;
  clasificacion.hidden = true;
  cuerpoClasificacion.replaceChildren();
  botonIniciar.hidden = false;
  pantallaInicio.classList.remove("resultado");
}

function prepararNuevaPartida() {
  clearInterval(intervalo); // Garantiza que solo haya un temporizador activo.
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

function mostrarPartidaActiva(inicioTeniaFoco) {
  botonIniciar.disabled = true;
  pantallaInicio.hidden = true; // Oculta solo el mensaje y el botón superpuestos, no el tablero.
  botonReiniciar.hidden = false;
  finDePartida = Date.now() + duracionPartida * 1000; // Fecha límite en milisegundos; no restamos segundos a mano.
  intervalo = setInterval(actualizarTiempo, 100); // Refresca el marcador; Date.now determina el tiempo real transcurrido.

  if (inicioTeniaFoco) {
    tablero.querySelector(".objetivo").focus({ preventScroll: true }); // Traslada el foco al juego antes de continuar con el teclado.
  }

  // Durante la partida solo se muestra el botón de reinicio.
  mensajeEstado.textContent = "";
}

function iniciarEntrenamiento() {
  if (entrenamientoActivo) return;

  const inicioTeniaFoco = document.activeElement === botonIniciar
    || document.activeElement === botonReiniciar;

  prepararNuevaPartida();
  mostrarPartidaActiva(inicioTeniaFoco);
}

function reiniciarPartida() {
  if (!entrenamientoActivo) return;
  entrenamientoActivo = false;
  iniciarEntrenamiento();
}

// 2.3. Interacción: aciertos, fallos y estadísticas
function calcularPrecision(cantidadAciertos, cantidadFallos) {
  const intentos = cantidadAciertos + cantidadFallos;

  if (intentos === 0) {
    return 0; // Antes del primer intento mostramos 0% y evitamos dividir entre cero.
  } else {
    return Math.round((cantidadAciertos / intentos) * 100); // Convierte la proporción en porcentaje entero.
  }
}

function actualizarEstadisticas() {
  const precision = calcularPrecision(aciertos, fallos);

  marcadorAciertos.textContent = aciertos;
  marcadorFallos.textContent = fallos;
  marcadorPrecision.textContent = `${precision}%`;
}

function registrarFallo() {
  fallos++;
  actualizarEstadisticas();
}

function registrarAcierto(objetivo) {
  const indice = Number(objetivo.dataset.indice);
  const nuevoIndice = elegirCasillaLibre(); // Se elige antes de retirar la bolita para excluir también su casilla.
  const teniaFoco = document.activeElement === objetivo;

  objetivosActivos.splice(objetivosActivos.indexOf(indice), 1); // Quita una posición ocupada del array.
  objetivo.remove();
  const nuevoObjetivo = colocarObjetivo(nuevoIndice);

  aciertos++;
  actualizarEstadisticas();

  if (teniaFoco) {
    nuevoObjetivo.focus({ preventScroll: true }); // Conserva la navegación con teclado al sustituir el botón.
  }
}

function manejarClicTablero(evento) {
  if (!entrenamientoActivo) return;

  if (Date.now() >= finDePartida) { // Impide puntuar fuera de plazo aunque el intervalo se haya retrasado.
    finalizarPartida();
    return;
  }

  const objetivo = evento.target.closest(".objetivo"); // Encuentra la bolita pulsada; devuelve null en una zona vacía.

  if (!objetivo) {
    registrarFallo();
    return; // Un clic vacío registra un fallo, pero no cambia las dianas ni suma puntos.
  }

  if (!tablero.contains(objetivo)) return;
  registrarAcierto(objetivo);
}

function evitarActivacionMantenida(evento) {
  if (!evento.repeat) return;
  if (evento.key !== "Enter" && evento.key !== " ") return;
  if (!evento.target.classList.contains("objetivo")) return;

  evento.preventDefault(); // Evita sumar muchos aciertos manteniendo una tecla pulsada.
}

// 2.4. Final de partida
function finalizarPartida() {
  if (!entrenamientoActivo) return;

  entrenamientoActivo = false;
  clearInterval(intervalo);
  intervalo = null;
  marcadorTiempo.textContent = 0;
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
function validarAlias() {
  const nombre = campoAlias.value.trim(); // Quita espacios al principio y al final.

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
      ...rival,
      precision: calcularPrecision(rival.puntos, rival.fallos),
      ordenRegistro: indice,
    });
  }

  participantes.push(mejorResultado);

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
  fila.appendChild(puesto);
  fila.appendChild(alias);
  fila.appendChild(puntos);
  fila.appendChild(precision);
  return fila;
}

function rellenarClasificacion(participantes) {
  cuerpoClasificacion.replaceChildren();

  for (let indice = 0; indice < participantes.length; indice++) {
    const fila = crearFilaClasificacion(participantes[indice], indice);
    cuerpoClasificacion.appendChild(fila);
  }
}

function mostrarPantallaClasificacion() {
  resultadoPendiente = false;
  formularioAlias.hidden = true;
  clasificacion.hidden = false;
  botonIniciar.hidden = false;
  tituloClasificacion.focus({ preventScroll: true });
  pantallaInicio.scrollTop = 0;
  mensajeEstado.textContent = "";
}

function mostrarClasificacion(evento) {
  evento.preventDefault(); // Evita que enviar el formulario recargue la página.
  if (!resultadoPendiente || entrenamientoActivo) return;

  const nombre = validarAlias();
  if (nombre === null) return;

  actualizarMejorPuntuacion(nombre);
  const participantes = crearParticipantesOrdenados();
  rellenarClasificacion(participantes);
  mostrarPantallaClasificacion();
}

// 2.6. Modo oscuro
function alternarModoOscuro(evento) {
  // Escribir la letra secreta dentro del campo de alias no cambia el tema.
  if (evento.target === campoAlias) return;
  if (evento.key.toLowerCase() !== teclaModoOscuro) return;

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
crearTablero();
botonIniciar.disabled = false;

// 3.2. Registro de eventos
botonIniciar.addEventListener("click", iniciarEntrenamiento);
botonReiniciar.addEventListener("click", reiniciarPartida);
formularioAlias.addEventListener("submit", mostrarClasificacion);
tablero.addEventListener("click", manejarClicTablero); // Un listener atiende todas las bolitas, incluidas las nuevas.
tablero.addEventListener("keydown", evitarActivacionMantenida);
document.addEventListener("keydown", alternarModoOscuro);
