<!-- ELUCENIA technical documentation · criterios-de-light · fr · no clinical/professional/rights approval -->

# Critères de Light

[conditions, sources et autorisations](https://elucenia.org/fr/outils/criterios-de-light)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Protéines du liquide pleural

`pt_pl`

g/dL · intervalle: 0,1–10

### Protéines sériques

`pt_sr`

g/dL · intervalle: 1–12

### LDH du liquide pleural

`dhl_pl`

U/L · intervalle: 10–20000

### LDH sérique

`dhl_sr`

U/L · intervalle: 10–5000

### Limite supérieure de la normale de la LDH sérique (du laboratoire)

`dhl_lsn`

U/L · intervalle: 100–1000

### Albumine du liquide pleural

`alb_pl`

g/dL · facultatif · intervalle: 0,1–6

### Albumine sérique

`alb_sr`

g/dL · facultatif · intervalle: 0,5–6

## Édition de la méthode

Light 1972 ; variante BTS 2023 : protéines pleurales/sériques \>0,5 ; LDH pleurale/sérique \>0,6 ; LDH pleurale \>2/3 de la limite supérieure sérique de la normale.

## Formule documentée

C’est un exsudat s’il existe au moins un critère :

protéines pleurales / sériques \> 0,5;

LDH pleurale / LDH sérique \> 0,6;

LDH pleurale \> 2/3 de la limite supérieure normale de LDH sérique.

Si aucun n’est présent, c’est un transsudat. Gradient d’albumine (sérum − liquide pleural) \> 1,2 g/dL suggère un transsudat même si Light est positif.

## Limites et population

Cette implémentation combine les critères de Light avec la variante documentée par la BTS en 2023 : une LDH pleurale supérieure aux deux tiers de la limite supérieure sérique du laboratoire, distincte du seuil absolu de l’article de 1972. Utilisez des prélèvements pleural et sérique appariés ainsi que la limite du laboratoire concerné ; les valeurs doivent être strictement supérieures aux seuils. La classification biochimique n’identifie pas la cause de l’épanchement. Le gradient facultatif d’albumine constitue une évaluation complémentaire et ne doit pas, à lui seul, remplacer les investigations cliniques.

## Références

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

3 des 3 critères positifs : exsudat

| Détails du résultat | |
| --- | --- |
| Protéine pleurale/sérique | 0,67 (> 0,5) |
| LDH pleurale/sérique | 1,20 (> 0,6) |
| LDH pleurale × 2/3 de la limite supérieure | 300 vs 147 U/L (au-dessus) |


### 2

Aucun critère positif : transsudat

| Détails du résultat | |
| --- | --- |
| Protéine pleurale/sérique | 0,29 (≤ 0,5) |
| LDH pleurale/sérique | 0,50 (≤ 0,6) |
| LDH pleurale × 2/3 de la limite supérieure | 100 vs 167 U/L (en dessous) |


### 3

Aucun critère positif : transsudat

| Détails du résultat | |
| --- | --- |
| Protéine pleurale/sérique | 0,50 (≤ 0,5) |
| LDH pleurale/sérique | 0,60 (≤ 0,6) |
| LDH pleurale × 2/3 de la limite supérieure | 120 vs 120 U/L (en dessous) |


### 4

1 des 3 critères positifs : exsudat

| Détails du résultat | |
| --- | --- |
| Protéine pleurale/sérique | 0,38 (≤ 0,5) |
| LDH pleurale/sérique | 0,75 (> 0,6) |
| LDH pleurale × 2/3 de la limite supérieure | 150 vs 200 U/L (en dessous) |
| Gradient d’albumine (sérum − plèvre) | 1,6 g/dL |

Exsudat selon les critères de Light, mais gradient d’albumine > 1,2 g/dL : suggère un transsudat (fréquent chez les patients sous diurétique).

