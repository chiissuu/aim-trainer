# Contexto del proyecto

## Identificación

- **Curso:** Introducción a JavaScript y al cliente web.
- **Unidad:** U1.
- **Misión:** M1 · El Despertar del DOM.
- **Proyecto:** Aim Trainer.
- **Repositorio público:** <https://github.com/chiissuu/aim-trainer>
- **Tecnologías:** HTML, CSS y JavaScript puro.

## Objetivo de la misión

Construir una página interactiva sin frameworks ni librerías, manipulando el DOM directamente. La entrega debe demostrar:

- selección, creación y modificación de nodos;
- eventos de usuario sin manejadores inline;
- variables con `let` y `const`, funciones y estructuras de control;
- separación entre HTML, CSS y JavaScript;
- código legible, organizado y defendible;
- README, declaración del uso de IA, autopsia, repositorio limpio y commits claros;
- como bonus, modo oscuro activado mediante una tecla secreta.

La regla principal del curso es que la IA está permitida, pero el alumno debe poder explicar lo entregado línea a línea.

## Funcionamiento actual

1. Al cargar la página, JavaScript crea 24 botones que forman un tablero de 6 columnas por 4 filas.
2. La pantalla inicial muestra el botón para comenzar.
3. Al iniciar, aparecen seis dianas en casillas distintas y comienza una partida de 15 segundos.
4. Pulsar una diana suma un acierto y la recoloca en una casilla libre.
5. Pulsar un espacio vacío del tablero suma un fallo.
6. La precisión se calcula como `aciertos / (aciertos + fallos) × 100` y se redondea a un entero.
7. Al terminar se retiran las dianas, se conserva el resultado en los marcadores laterales y aparece el formulario de alias.
8. La clasificación combina cuatro rivales ficticios con la mejor marca del usuario durante la sesión actual.
9. La tabla ordena primero por puntos, después por precisión y finalmente por el orden en que se consiguió la marca.
10. El botón para volver a jugar inicia otro intento sin recargar la página.

La mejor marca se guarda en variables. No se usa `localStorage`, por lo que se pierde al recargar.

## Recorrido mental del programa

```text
Carga de la página
        ↓
Creación del tablero
        ↓
Inicio de partida y temporizador
        ↓
Clic correcto o fallo
        ↓
Final y formulario de alias
        ↓
Clasificación y nueva partida
```

## Organización de JavaScript

`app.js` sigue tres bloques principales:

1. **Preparación y datos**
   - referencias al DOM;
   - configuración del juego;
   - estado de la partida.
2. **Funciones del programa**
   - tablero y objetivos;
   - inicio, reinicio y temporizador;
   - aciertos, fallos y estadísticas;
   - final de partida;
   - formulario y clasificación;
   - modo oscuro.
3. **Inicio de la aplicación**
   - creación inicial del tablero;
   - registro de eventos.

## Archivos principales

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Estructura semántica, paneles, formulario y tabla. |
| `styles.css` | Diseño, cuadrícula, estados visuales, modo oscuro y adaptación a pantallas pequeñas. |
| `app.js` | Estado, DOM, eventos y reglas del juego. |
| `assets/` | Títulos, dianas y favicon creados o seleccionados para el diseño. |
| `README.md` | Presentación pública, funcionamiento, uso de IA, autopsia y comprobaciones. |
| `docs/` | Contexto interno, aprendizaje y seguimiento en Obsidian. |

## Estado técnico comprobado

- El formulario vuelve a mostrarse al terminar tras restaurar `#texto-pantalla`.
- Los fallos y la precisión se reinician correctamente.
- No se registran clics fuera del tablero o después de terminar.
- La clasificación tiene cinco filas y cuatro columnas.
- Los porcentajes ficticios se calculan desde aciertos y fallos.
- Mantener Intro o Espacio sobre una diana no activa la repetición automática.
- El mensaje de consola procedente de `content.js` pertenece a una extensión del navegador, no al proyecto.
- La sintaxis de JavaScript y las pruebas simuladas del flujo principal han pasado.

