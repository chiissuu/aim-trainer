# Plantilla reutilizable para el README final

Esta estructura sirve para futuras misiones. Debe adaptarse al enunciado y eliminar cualquier apartado que no corresponda al proyecto real.

## Principios

- Escribir para una persona que no conoce las fases de desarrollo.
- Describir únicamente el resultado final y las decisiones que ayudan a entenderlo.
- Evitar repetir la misma funcionalidad en descripción, lista de funciones y uso de IA.
- Separar lo comprobado manualmente de lo verificado por herramientas o agentes.
- No presentar una prueba simulada como una prueba visual real.
- Retirar estados provisionales, próximos pasos cerrados y listas antiguas de pendientes.
- Mantener el texto de la Autopsia exactamente como lo entregue el alumno.

## Estructura recomendada

```markdown
# Nombre del proyecto

Misión, unidad y asignatura.

## Descripción del proyecto

Qué es, qué puede hacer el usuario, cuál es su recorrido principal y cuál es
el objetivo académico. Debe incluir las funcionalidades principales sin narrar
las fases de desarrollo.

## Cómo probarlo

1. Cómo obtener o abrir el proyecto.
2. Qué archivo o comando inicia la aplicación.
3. Pasos mínimos para recorrer la funcionalidad principal.

Indicar si requiere instalación, compilación, servidor o credenciales.

## Tecnologías y dependencias

- Lenguajes utilizados.
- Frameworks o librerías, si existen.
- Recursos locales relevantes.
- Dependencias que no se utilizan cuando sea importante para la misión.

## Archivos

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `...` | `...` |

## Funcionalidades del programa

- Función principal.
- Estados, validaciones y manejo de errores.
- Resultados, persistencia y límites conocidos.
- Accesibilidad, responsive o bonus implementados.

## Comprobaciones realizadas

### Comprobación manual del alumno

Recorrido y casos confirmados personalmente.

### Comprobaciones del agente o herramientas

Sintaxis, simulaciones y casos límite. Explicar sus límites.

## Uso de IA

- Herramienta y modelo.
- Partes asistidas.
- Aportación y decisiones del alumno.
- Preguntas reales de aprendizaje.
- Método de revisión y comprobación.

### Preguntas y decisiones trabajadas hasta el final del desarrollo

- Decisiones relevantes y conceptos preguntados.

## Autopsia

### Autopsia 1

Texto literal redactado por el alumno.

### Autopsia 2

Texto literal redactado por el alumno.
```

## Lista de cierre del README

- [ ] Describe el resultado final sin presuponer conocimiento de fases anteriores.
- [ ] Explica cómo ejecutar o abrir el proyecto.
- [ ] Nombra tecnologías y dependencias.
- [ ] Enumera archivos y responsabilidades reales.
- [ ] Resume las funcionalidades sin pendientes antiguos.
- [ ] Distingue pruebas manuales, simuladas y pendientes.
- [ ] Declara con precisión el uso de IA y la aportación propia.
- [ ] Conserva la Autopsia escrita por el alumno sin cambios.
- [ ] No contiene instrucciones ajenas a la documentación del proyecto.
- [ ] Supera `git diff --check` y se visualiza correctamente en GitHub.

## Aplicación en Aim Trainer

El README final de M1 adoptó esta estructura y eliminó «Estado actual», «Próximos pasos» y un ejemplo aislado de prompt. Las comprobaciones se conservaron resumidas porque aportan información sobre el trabajo realizado.
