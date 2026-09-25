# Decisiones del proyecto

Este documento recoge elecciones que afectan al funcionamiento, la estructura o la defensa. No registra cada ajuste visual pequeño.

## Idea del proyecto

**Decisión:** desarrollar un aim trainer.

**Motivo:** permite practicar DOM, eventos, funciones y estructuras de control con una interacción original y fácil de observar.

**Alternativa descartada:** un Snake musical inspirado en Spotify. Requería movimiento continuo, colisiones, audio y una lógica más difícil de defender para una primera misión.

## Tablero generado con DOM

**Decisión:** crear las casillas con un bucle y guardarlas como elementos consecutivos del DOM.

**Motivo:** CSS Grid se encarga de distribuirlas; JavaScript solo necesita crear botones y consultar sus posiciones. No hace falta representar el tablero con un array bidimensional `[fila][columna]`.

**Alternativa descartada:** escribir todas las casillas manualmente en HTML o usar una matriz de JavaScript. Añadía repetición o una estructura innecesaria para las reglas actuales.

## Tablero rectangular y seis objetivos

**Decisión:** utilizar 6 columnas, 4 filas y 6 dianas simultáneas.

**Motivo:** aprovecha mejor el espacio horizontal disponible y hace que la zona central tenga más presencia visual.

**Alternativa descartada:** mantener el primer tablero 4 × 4, que se veía demasiado pequeño dentro del panel final.

## Partidas de 15 segundos

**Decisión:** reducir el tiempo inicial de 60 a 15 segundos.

**Motivo:** facilita probar muchas partidas y encaja mejor con las puntuaciones ficticias actuales.

## Temporizador basado en una hora límite

**Decisión:** calcular el tiempo restante comparando la hora actual con una hora final.

**Motivo:** evita que un intervalo retrasado por el navegador alargue la partida.

**Alternativa descartada:** restar uno a una variable en cada ejecución del intervalo, porque depende más de que el intervalo se ejecute exactamente a tiempo.

## Delegación de eventos en el tablero

**Decisión:** registrar un listener de clic en el tablero y comprobar qué elemento se pulsó.

**Motivo:** el mismo listener sirve para las dianas que se crean o recolocan durante la partida.

**Alternativa descartada:** añadir un listener nuevo a cada objetivo cada vez que cambia.

## Cálculo de precisión con `if/else`

**Decisión:** usar una función y un `if/else` para evitar la división entre cero.

**Motivo:** es más legible para el nivel actual que una expresión con operador ternario.

## Clasificación en memoria

**Decisión:** conservar una sola mejor marca del usuario mediante variables.

**Motivo:** cumple el objetivo de la clasificación de demostración con una lógica sencilla.

**Alternativa descartada:** `localStorage`, porque la persistencia entre recargas no es necesaria y ampliaría el código que hay que defender.

## Desempate de la clasificación

**Decisión:** ordenar por puntos, después por precisión y finalmente por antigüedad de la marca.

**Motivo:** la precisión es un dato relevante en los aim trainers. Si puntos y precisión coinciden, se mantiene delante a quien consiguió antes el resultado.

## Alias insertado con `textContent`

**Decisión:** escribir el alias en la tabla con `textContent`.

**Motivo:** un valor como `<b>Jugador</b>` se muestra como texto literal y no se interpreta como una etiqueta HTML.

## Modo oscuro con tecla secreta

**Decisión:** usar la tecla `N` y una pista en el footer.

**Motivo:** cumple el bonus y permite descubrir la tecla sin mostrar una instrucción demasiado directa.

La pulsación se ignora mientras el usuario escribe en el formulario para evitar cambios accidentales de tema.

## Diseño y tipografía

**Decisión:** usar Space Mono y recursos gráficos propios o elegidos para el título y las dianas.

**Motivo:** mantiene un estilo retro legible con tildes, números y símbolos.

**Alternativas descartadas:** Blazter y Wicked Mouse, porque no mostraban correctamente todos los caracteres necesarios.

