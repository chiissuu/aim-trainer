const tablero = document.querySelector("#tablero"); // Busca el primer elemento con id="tablero" y guarda su referencia.
const botonIniciar = document.querySelector("#iniciar");
const pantallaInicio = document.querySelector("#pantalla-inicio");
const marcadorAciertos = document.querySelector("#aciertos");
const mensajeEstado = document.querySelector("#estado");
const numeroDeCasillas = 16;
const numeroDeObjetivos = 4;
const casillas = [];
const objetivosActivos = []; // Guarda los índices de las casillas que tienen una bolita.
let aciertos = 0;
let entrenamientoActivo = false;

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

function iniciarEntrenamiento() {
  if (entrenamientoActivo) return;

  entrenamientoActivo = true;
  aciertos = 0;
  marcadorAciertos.textContent = aciertos;

  for (let cantidad = 0; cantidad < numeroDeObjetivos; cantidad++) {
    colocarObjetivo(elegirCasillaLibre());
  }

  const inicioTeniaFoco = document.activeElement === botonIniciar;
  botonIniciar.disabled = true;
  pantallaInicio.hidden = true; // Oculta solo el mensaje y el botón superpuestos, no el tablero.

  if (inicioTeniaFoco) {
    tablero.querySelector(".objetivo").focus({ preventScroll: true }); // Traslada el foco al juego antes de continuar con el teclado.
  }
  mensajeEstado.textContent = "Entrenamiento activo sin límite de tiempo. Pulsa las bolitas; recarga la página para empezar de nuevo.";
}

function manejarClicTablero(evento) {
  if (!entrenamientoActivo) return;

  const objetivo = evento.target.closest(".objetivo"); // Encuentra la bolita pulsada; devuelve null en una zona vacía.
  if (!objetivo || !tablero.contains(objetivo)) return;

  const indice = Number(objetivo.dataset.indice);
  const nuevoIndice = elegirCasillaLibre(); // Se elige antes de retirar la bolita para excluir también su casilla.
  const teniaFoco = document.activeElement === objetivo;

  objetivosActivos.splice(objetivosActivos.indexOf(indice), 1); // Quita una posición ocupada del array.
  objetivo.remove();
  const nuevoObjetivo = colocarObjetivo(nuevoIndice);

  aciertos++;
  marcadorAciertos.textContent = aciertos;

  if (teniaFoco) {
    nuevoObjetivo.focus({ preventScroll: true }); // Conserva la navegación con teclado al sustituir el botón.
  }
}

crearTablero();
botonIniciar.disabled = false;
botonIniciar.addEventListener("click", iniciarEntrenamiento);
tablero.addEventListener("click", manejarClicTablero); // Un listener atiende todas las bolitas, incluidas las nuevas.
