# Metodología reutilizable para las misiones

Esta guía sirve como punto de partida para las próximas entregas del curso. Debe adaptarse a la rúbrica y a los contenidos permitidos en cada unidad.

## 1. Analizar la misión antes de programar

1. Leer el enunciado completo y separar requisitos obligatorios, bonus y checks automáticos.
2. Revisar la rúbrica y anotar cuántos puntos depende de cada apartado.
3. Consultar los temas impartidos hasta ese momento.
4. Si una idea necesita un elemento todavía no explicado en clase, decidir si se simplifica o si se utiliza con una explicación clara.
5. Elegir una idea que permita demostrar los criterios sin añadir dificultad que no aporte puntos o aprendizaje.

## 2. Delimitar una primera versión

Definir una versión mínima que ya pueda probarse. Dividir después el proyecto en bloques pequeños, por ejemplo:

```text
Estructura inicial
      ↓
Interacción principal
      ↓
Temporizador y estados
      ↓
Resultados
      ↓
Mejoras visuales y bonus
```

Cada bloque debe tener un objetivo, una comprobación y un commit propios cuando represente un avance importante.

## 3. Preparar el repositorio

- Crear nombres claros para archivos y carpetas.
- Separar HTML, CSS y JavaScript.
- Añadir un `.gitignore` adecuado.
- Crear el repositorio público si así lo exige la misión.
- Evitar subir archivos temporales, copias o recursos sin utilizar.
- Trabajar en `main` cuando el proyecto es individual y no necesita ramas paralelas.

## 4. Trabajar con IA manteniendo el control

Antes de pedir código, explicar al agente:

- el enunciado y la rúbrica;
- los contenidos impartidos;
- el estado actual del proyecto;
- el cambio concreto que se quiere realizar;
- el nivel de complejidad que se puede defender.

Después de cada bloque:

1. Pedir una lista exacta de los cambios realizados.
2. Ejecutar la funcionalidad manualmente.
3. Preguntar por las líneas, métodos o propiedades desconocidos.
4. Simplificar cualquier solución que sea innecesariamente compleja.
5. No afirmar que una comprobación está hecha si no se ha realizado.

### Ejemplo de petición útil

> Implementa únicamente el temporizador y el final de partida con JavaScript puro. Usa estructuras que pueda explicar con los contenidos de la unidad. Después indica qué funciones modificaste y cómo puedo comprobar cada caso.

### Ejemplo de revisión útil

> Explícame el recorrido desde que pulso el botón hasta que termina la partida. Señala qué variables cambian, qué eventos intervienen y qué métodos del DOM se utilizan.

## 5. Documentar los commits

Hacer commit cuando se cierre una parte reconocible:

- estructura inicial;
- mecánica principal;
- temporizador y final;
- formulario o resultados;
- diseño y accesibilidad;
- correcciones detectadas durante la revisión.

Antes del commit:

```powershell
git status --short
git diff --check
git diff --stat
```

Después, añadir únicamente los archivos esperados, revisar el área preparada y escribir un mensaje que describa el resultado.

## 6. Mantener el README obligatorio

### Uso de IA

Debe indicar:

- herramienta y modelo utilizados;
- partes realizadas con ayuda de IA;
- preguntas reales sobre conceptos y decisiones, no solo órdenes como «hazlo»;
- cómo se verificó el resultado;
- qué escribió o decidió personalmente el alumno;
- qué comprobaciones siguen pendientes.

### Autopsia

Seleccionar dos decisiones discutibles del resultado final. Para cada una:

1. explicar la opción elegida;
2. justificarla;
3. indicar una alternativa real descartada;
4. describir el coste o limitación de la elección.

## 7. Comprobar antes de entregar

- Probar el recorrido normal completo.
- Probar valores vacíos, límites, reinicios y acciones repetidas.
- Comprobar teclado, foco y pantalla estrecha.
- Revisar la consola del navegador.
- Confirmar que no se utilizan tecnologías prohibidas.
- Revisar que el repositorio sea público y esté limpio.
- Comparar el resultado con cada línea de la rúbrica.

## 8. Preparar la defensa

Explicar el proyecto siguiendo un flujo, no memorizando líneas aisladas:

```text
Datos y referencias
        ↓
Inicio de la aplicación
        ↓
Eventos del usuario
        ↓
Cambios de estado
        ↓
Actualización del DOM
```

Para cada función conviene poder responder:

- quién la llama;
- qué datos recibe;
- qué condición comprueba;
- qué modifica;
- qué devuelve, si devuelve algo;
- qué ocurriría si se eliminara.

## 9. Mantener Obsidian al cerrar cada bloque

- Leer `Contexto.md` y `Pendientes.md` al comenzar.
- Actualizar `Pendientes.md` con lo terminado y lo nuevo.
- Cambiar `Contexto.md` si cambia el comportamiento o la estructura.
- Registrar en `Decisiones.md` solo elecciones relevantes.
- Crear una nota de sesión para hitos, errores importantes o cierres de fase.
- Guardar código y documentación en el mismo commit cuando describan el mismo avance.

