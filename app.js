const tablero = document.querySelector("#tablero"); // Busca el primer elemento con id="tablero" y guarda su referencia.
const numeroDeCasillas = 16;

function crearTablero() {
  for (let indice = 0; indice < numeroDeCasillas; indice++) {
    const casilla = document.createElement("button"); // Crea un botón nuevo, todavía fuera del DOM de la página.

    casilla.type = "button";
    casilla.classList.add("casilla"); // Añade la clase CSS "casilla" al botón, sin quitar otras clases.
    casilla.setAttribute("aria-label", `Casilla ${indice + 1}`); // Asigna un nombre accesible, de "Casilla 1" a "Casilla 16"; no es texto visible.

    // Las casillas se activarán cuando se implemente el inicio de partida.
    casilla.disabled = true;
    tablero.appendChild(casilla); // Inserta el botón como último hijo del tablero.
  }
}

crearTablero();
