# Decisiones del proyecto

Este documento recoge elecciones que afectan al funcionamiento, la estructura o la defensa. No registra cada ajuste visual pequeño.

## README final

**Decisión:** organizar la documentación pública en descripción, prueba, tecnologías, archivos, funcionalidades, comprobaciones, uso de IA, preguntas y decisiones, y Autopsia.

**Motivo:** elimina el seguimiento provisional y las repeticiones entre fases, pero conserva los datos necesarios para ejecutar, evaluar y defender el proyecto. Las comprobaciones permanecen resumidas para distinguir las realizadas manualmente de las simuladas por Codex. La Autopsia se conserva exactamente con la redacción entregada por el alumno.

## Evaluación final con Ricardo

**Decisión:** ejecutar Ricardo únicamente después de cerrar y publicar el código, el README y la Autopsia.

**Motivo:** la evaluación debe analizar la misma revisión que se pretende entregar. Se proporcionan siempre el repositorio, el ejercicio, las tecnologías, la fecha límite y cualquier criterio adicional.

**Resultado en M1:** Ricardo v3.1 evaluó el commit `44fe31c` con 10/10, sin penalizaciones ni intentos de inyección. La falta de pruebas automatizadas se indicó como posible mejora futura, pero no restó puntos en la rúbrica utilizada.

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

## Mantener parámetros fijos

**Decisión:** conservar partidas de 15 segundos con seis objetivos y no añadir un formulario de configuración.

**Motivo:** la versión actual ya cumple la misión y mantiene una dificultad adecuada para poder defender el código línea a línea. Permitir distintas duraciones y cantidades de objetivos añadiría validaciones, nuevos estados de interfaz y puntuaciones difíciles de comparar.

**Alternativa descartada:** un botón «Editar parámetros» con valores de 15 a 60 segundos y de 1 a 10 objetivos.

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

## Jerarquía visual de botones y footer

**Decisión:** usar rojo para las acciones principales en modo claro y blanco en modo oscuro. El reinicio mantiene un fondo neutro y un borde destacado para diferenciarlo como acción secundaria.

**Motivo:** conecta los controles con el título, las dianas y los bordes sin hacer que todos los botones tengan la misma importancia.

El panel, el tablero y el footer utilizan bordes de 3 píxeles. Los textos de descripción, estado y pista emplean el color principal y mayor peso. El footer conserva la frase del modo secreto, añade una etiqueta breve y representa la `N` dentro de un recuadro con la tipografía existente.

**Alternativa descartada:** llenar el footer o los espacios laterales con más dianas, porque repetiría elementos ya presentes y restaría atención al tablero.

