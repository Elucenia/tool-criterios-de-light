<!-- ELUCENIA technical documentation · criterios-de-light · es · no clinical/professional/rights approval -->

# Criterios de Light

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/criterios-de-light)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Proteínas del líquido pleural

`pt_pl`

g/dL · intervalo: 0,1–10

### Proteína sérica

`pt_sr`

g/dL · intervalo: 1–12

### LDH del líquido pleural

`dhl_pl`

U/L · intervalo: 10–20000

### LDH sérica

`dhl_sr`

U/L · intervalo: 10–5000

### Límite superior de normalidad de la LDH sérica (del laboratorio)

`dhl_lsn`

U/L · intervalo: 100–1000

### Albúmina del líquido pleural

`alb_pl`

g/dL · opcional · intervalo: 0,1–6

### Albúmina sérica

`alb_sr`

g/dL · opcional · intervalo: 0,5–6

## Edición del método

Light 1972; variante BTS 2023: proteína pleural/sérica \>0,5; LDH pleural/sérica \>0,6; LDH pleural \>2/3 del límite superior normal sérico.

## Fórmula documentada

Es un exudado si hay al menos un criterio:

proteína pleural / proteína sérica \> 0,5;

LDH pleural / LDH sérica \> 0,6;

LDH pleural \> 2/3 del límite superior normal de LDH sérica.

Si no hay ninguno, es trasudado. Gradiente de albúmina (suero − líquido pleural) \> 1,2 g/dL sugiere trasudado incluso con Light positivo.

## Límites y población

Esta implementación combina los criterios de Light con la variante documentada por la BTS en 2023: LDH pleural por encima de dos tercios del límite superior sérico del laboratorio, distinta del punto de corte absoluto del artículo de 1972. Use muestras pleural y sérica pareadas y el límite del propio laboratorio; los puntos de corte son estrictamente superiores a los umbrales. La clasificación bioquímica no identifica la causa del derrame. El gradiente opcional de albúmina es una evaluación complementaria y no debe, por sí solo, sustituir la investigación clínica.

## Referencias

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
