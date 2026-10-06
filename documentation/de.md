<!-- ELUCENIA technical documentation · criterios-de-light · de · no clinical/professional/rights approval -->

# Light-Kriterien

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/criterios-de-light)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Protein im Pleuraerguss

`pt_pl`

g/dL · Bereich: 0,1–10

### Serumprotein

`pt_sr`

g/dL · Bereich: 1–12

### LDH im Pleuraerguss

`dhl_pl`

U/L · Bereich: 10–20000

### Serum-LDH

`dhl_sr`

U/L · Bereich: 10–5000

### Obere Normgrenze der Serum-LDH (laut Labor)

`dhl_lsn`

U/L · Bereich: 100–1000

### Albumin im Pleuraerguss

`alb_pl`

g/dL · optional · Bereich: 0,1–6

### Serumalbumin

`alb_sr`

g/dL · optional · Bereich: 0,5–6

## Fassung der Methode

Light 1972; BTS-2023-Variante: Pleura-/Serumprotein \>0,5; Pleura-/Serum-LDH \>0,6; pleurale LDH \>2/3 der oberen Serum-Normgrenze.

## Dokumentierte Formel

Es ist ein Exsudat wenn mindestens ein Kriterium vorliegt:

Pleuraprotein / Serumprotein \> 0,5;

Pleura-LDH / Serum-LDH \> 0,6;

Pleura-LDH \> 2/3 der oberen Normgrenze der Serum-LDH.

Ohne erfülltes Kriterium liegt ein Transsudat vor. Albumingradient (Serum − Pleuraflüssigkeit) \> 1,2 g/dL spricht trotz positiver Light-Kriterien für ein Transsudat.

## Grenzen und Population

Diese Implementierung kombiniert die Light-Kriterien mit der von der BTS 2023 dokumentierten Variante: pleurale LDH oberhalb von zwei Dritteln der oberen Serumgrenze des Labors, abweichend vom absoluten Grenzwert im Artikel von 1972. Verwenden Sie gepaarte Pleura- und Serumproben und die Grenze des jeweiligen Labors; die Werte müssen die Schwellen strikt überschreiten. Die biochemische Klassifikation identifiziert nicht die Ursache des Ergusses. Der optionale Albumingradient ist eine ergänzende Beurteilung und darf allein die klinische Abklärung nicht ersetzen.

## Referenzen

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

3 von 3 positiven Kriterien: Exsudat

| Ergebnisdetails | |
| --- | --- |
| Pleura-/Serumprotein | 0,67 (> 0,5) |
| Pleurale/serum LDH | 1,20 (> 0,6) |
| Pleurale LDH × 2/3 der oberen Grenze | 300 vs 147 U/L (darüber) |


### 2

Kein positives Kriterium: Transsudat

| Ergebnisdetails | |
| --- | --- |
| Pleura-/Serumprotein | 0,29 (≤ 0,5) |
| Pleurale/serum LDH | 0,50 (≤ 0,6) |
| Pleurale LDH × 2/3 der oberen Grenze | 100 vs 167 U/L (darunter) |


### 3

Kein positives Kriterium: Transsudat

| Ergebnisdetails | |
| --- | --- |
| Pleura-/Serumprotein | 0,50 (≤ 0,5) |
| Pleurale/serum LDH | 0,60 (≤ 0,6) |
| Pleurale LDH × 2/3 der oberen Grenze | 120 vs 120 U/L (darunter) |


### 4

1 von 3 positiven Kriterien: Exsudat

| Ergebnisdetails | |
| --- | --- |
| Pleura-/Serumprotein | 0,38 (≤ 0,5) |
| Pleurale/serum LDH | 0,75 (> 0,6) |
| Pleurale LDH × 2/3 der oberen Grenze | 150 vs 200 U/L (darunter) |
| Albumingradient (Serum − Pleura) | 1,6 g/dL |

Exsudat nach den Light-Kriterien, aber Albumingradient > 1,2 g/dL: spricht für ein Transsudat (häufig bei Diuretika-Anwendern).

