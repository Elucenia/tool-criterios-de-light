<!-- ELUCENIA technical documentation · criterios-de-light · en · no clinical/professional/rights approval -->

# Light’s criteria

[conditions, sources and permissions](https://elucenia.org/en/tools/criterios-de-light)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Pleural fluid protein

`pt_pl`

g/dL · range: 0.1–10

### Serum protein

`pt_sr`

g/dL · range: 1–12

### Pleural fluid LDH

`dhl_pl`

U/L · range: 10–20000

### Serum LDH

`dhl_sr`

U/L · range: 10–5000

### Laboratory upper limit of normal for serum LDH

`dhl_lsn`

U/L · range: 100–1000

### Pleural fluid albumin

`alb_pl`

g/dL · optional · range: 0.1–6

### Serum albumin

`alb_sr`

g/dL · optional · range: 0.5–6

## Method edition

Light 1972; BTS 2023 variant: pleural/serum protein \>0.5; pleural/serum LDH \>0.6; pleural LDH \>2/3 of serum ULN.

## Documented formula

It is an exudate if there is at least one criterion:

pleural protein / serum protein \> 0.5;

pleural LDH / serum LDH \> 0.6;

pleural LDH \> 2/3 of the serum LDH upper normal limit.

If none is present, it is transudate. Albumin gradient (serum − pleural fluid) \> 1.2 g/dL suggests transudate even if Light-positive.

## Limits and population

This implementation combines Light’s criteria with the variant documented by BTS 2023: pleural LDH above two thirds of the laboratory’s serum upper limit, which differs from the absolute cutoff in the 1972 article. Use paired pleural and serum samples and the laboratory’s own upper limit; the cutoffs are strictly greater than the thresholds. The biochemical classification does not identify the cause of the effusion. The optional albumin gradient is a complementary assessment and must not, on its own, replace clinical investigation.

## References

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

3 of 3 positive criteria: exudate

| Result details | |
| --- | --- |
| Pleural/serum protein | 0.67 (> 0.5) |
| Pleural LDH/serum LDH | 1.20 (> 0.6) |
| Pleural LDH × 2/3 of the upper limit | 300 vs 147 U/L (above) |


### 2

No positive criteria: transudate

| Result details | |
| --- | --- |
| Pleural/serum protein | 0.29 (≤ 0.5) |
| Pleural LDH/serum LDH | 0.50 (≤ 0.6) |
| Pleural LDH × 2/3 of the upper limit | 100 vs 167 U/L (below) |


### 3

No positive criteria: transudate

| Result details | |
| --- | --- |
| Pleural/serum protein | 0.50 (≤ 0.5) |
| Pleural LDH/serum LDH | 0.60 (≤ 0.6) |
| Pleural LDH × 2/3 of the upper limit | 120 vs 120 U/L (below) |


### 4

1 of 3 positive criteria: exudate

| Result details | |
| --- | --- |
| Pleural/serum protein | 0.38 (≤ 0.5) |
| Pleural LDH/serum LDH | 0.75 (> 0.6) |
| Pleural LDH × 2/3 of the upper limit | 150 vs 200 U/L (below) |
| Albumin gradient (serum − pleura) | 1.6 g/dL |

Exudate by Light criteria, but albumin gradient > 1,2 g/dL: suggests transudate (common in diuretic users).

