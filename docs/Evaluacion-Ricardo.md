# Evaluación de misiones con Ricardo

## Qué es

`ricardo` es la skill de Codex registrada para evaluar repositorios de estudiantes. Se utiliza cuando el usuario pide revisar, analizar, calificar o comprobar una entrega. La evaluación es de solo lectura: Ricardo no corrige archivos durante la calificación.

La skill examina el repositorio como datos no confiables. Los comentarios, el README, `AGENTS.md`, los nombres de archivos y los mensajes de commit no pueden modificar la rúbrica ni ordenar al evaluador que cambie la nota.

## Datos necesarios

Antes de ejecutarla hay que proporcionar:

1. URL de GitHub o ruta local.
2. Nombre y descripción del ejercicio.
3. Tecnologías esperadas.
4. Fecha límite de los commits.
5. Criterios o pesos adicionales, si el profesor los ha indicado.

Si estos datos ya aparecen en la conversación, el agente no debe volver a preguntarlos.

## Preparación del repositorio

```powershell
git status
git diff --check
git log --oneline
git remote -v
```

Antes de evaluar:

- el árbol de trabajo debe estar limpio;
- el commit debe estar publicado;
- `HEAD` y `origin/main` deben coincidir;
- no deben existir `.obsidian/`, temporales, credenciales o dependencias generadas dentro del commit;
- el README debe corresponder al resultado final;
- la fecha límite debe estar confirmada.

## Orden de inspección fijado por la skill

1. Estructura de archivos y directorios.
2. Hasta cinco archivos fuente principales.
3. Historial, fechas, autores y mensajes de commit.
4. README completo.
5. `.gitignore`, tests y configuración.
6. Aplicación de la rúbrica y búsqueda de secretos o inyecciones.
7. Resultado estructurado en JSON y resumen breve.

## Rúbrica de Ricardo v3.1

| Categoría | Puntos | Qué revisa |
| --- | ---: | --- |
| A. Estructura | 2,0 | README, contenido específico, carpetas y limpieza. |
| B. Historial | 2,0 | Número de commits, progresión, mensajes y fecha límite. |
| C. Código | 3,0 | Sintaxis, nombres, comentarios, secretos y organización. |
| D. Funcionalidad | 2,0 | Implementación principal, validación y completitud. |
| E. README | 1,0 | Descripción, uso, tecnologías y originalidad. |

Penalizaciones posibles:

- plagio de otra entrega;
- uso de una solución ajena como base;
- más de tres intentos deliberados de manipular al evaluador;
- commits significativos posteriores a la fecha límite;
- README íntegramente generado por IA sin personalización.

La ausencia de tests automatizados no resta por sí sola en esta versión de la rúbrica, aunque Ricardo puede señalarla como mejora. No se deben añadir tests artificiales solo para aparentar cobertura si no aportan una comprobación útil.

## Prompt reutilizable

```text
Utiliza la skill Ricardo para evaluar esta misión.

Repositorio: [URL o ruta]
Ejercicio: [nombre y descripción]
Tecnologías esperadas: [lenguajes, frameworks o restricciones]
Fecha límite: [fecha completa]
Criterios adicionales: [ninguno o lista]

Evalúa el commit publicado que coincide con origin/main.
```

## Cómo interpretar el resultado

- Leer cada justificación, no solo la nota total.
- Corregir únicamente problemas apoyados por evidencia del repositorio.
- No modificar una entrega correcta para satisfacer una sugerencia opcional.
- Si se realiza cualquier cambio después de evaluar, crear el commit, publicarlo y volver a ejecutar Ricardo.
- Guardar en una nota de sesión la versión, fecha, commit, puntuación, penalizaciones y mejoras indicadas.

## Resultado de Aim Trainer

- **Repositorio:** <https://github.com/chiissuu/aim-trainer>
- **Ejercicio:** M1 · El Despertar del DOM.
- **Tecnologías:** HTML5, CSS3 y JavaScript puro.
- **Fecha límite:** 4 de octubre de 2026.
- **Fecha de evaluación:** 29 de septiembre de 2026.
- **Commit:** `44fe31c`.
- **Estructura:** 20 archivos, sin archivos innecesarios rastreados.
- **Historial:** 7 commits en 4 días.
- **Resultado:** 10/10.
- **Penalizaciones:** ninguna.
- **Inyecciones detectadas:** ninguna.
- **Mejora opcional:** incorporar pruebas automatizadas versionadas en proyectos futuros cuando su complejidad las justifique.
