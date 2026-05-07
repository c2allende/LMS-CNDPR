---
name: creador-de-habilidades
description: Crea y configura nuevas habilidades (skills) para Antigravity. Utiliza esta habilidad cuando el usuario quiera automatizar tareas, definir estándares de proyecto o crear nuevas herramientas reutilizables en español.
---

# Creador de Habilidades (Skill Creator)

Esta habilidad permite a Antigravity actuar como un asistente experto en la creación de otras habilidades, asegurando que sigan los estándares oficiales y las mejores prácticas del proyecto.

## Cuándo usar esta habilidad

- Cuando el usuario pida "crear una nueva habilidad" o "crear una skill".
- Cuando se necesite automatizar un flujo de trabajo recurrente.
- Cuando se quiera establecer una guía de estilo o convenciones para el equipo.

## Cómo crear una nueva habilidad

Para crear una habilidad efectiva, sigue este proceso:

### 1. Ubicación del archivo
Las habilidades de este proyecto deben residir en:
`.agents/skills/[nombre-de-la-habilidad]/SKILL.md`

### 2. Estructura del SKILL.md
Todo archivo de habilidad debe comenzar con un bloque YAML:

```yaml
---
name: nombre-unico-con-guiones
description: Una descripción clara en tercera persona. Ej: "Revisa el código buscando vulnerabilidades de seguridad y errores lógicos."
---
```

### 3. Contenido Recomendado
Un buen `SKILL.md` debe incluir:
- **# Título de la Habilidad**: Nombre descriptivo.
- **## Cuándo usar esta habilidad**: Lista de disparadores (triggers) y contextos.
- **## Instrucciones/Pasos**: Guía paso a paso para el agente.
- **## Reglas y Restricciones**: Qué NO debe hacer el agente.
- **## Ejemplos**: Casos de uso de referencia.

## Mejores Prácticas (Consejos de Experto)

- **Descripción Crítica**: La descripción en el YAML es lo más importante para que Antigravity sepa CUÁNDO activarla. Usa palabras clave relevantes.
- **Atomicidad**: Una habilidad debe hacer una sola cosa extremadamente bien.
- **Independencia**: Evita que una habilidad dependa críticamente de otra a menos que sea estrictamente necesario.
- **Scripts Auxiliares**: Si la habilidad requiere comandos complejos, guárdalos en una subcarpeta `scripts/` dentro de la carpeta de la habilidad.

---
*Creado por Antigravity para potenciar este espacio de trabajo.*
