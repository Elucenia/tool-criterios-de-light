<!-- ELUCENIA technical documentation · criterios-de-light · it · no clinical/professional/rights approval -->

# Criteri di Light

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/criterios-de-light)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Proteine nel liquido pleurico

`pt_pl`

g/dL · intervallo: 0,1–10

### Proteine sieriche

`pt_sr`

g/dL · intervallo: 1–12

### LDH nel liquido pleurico

`dhl_pl`

U/L · intervallo: 10–20000

### LDH sierica

`dhl_sr`

U/L · intervallo: 10–5000

### Limite superiore di normalità della LDH sierica (del laboratorio)

`dhl_lsn`

U/L · intervallo: 100–1000

### Albumina nel liquido pleurico

`alb_pl`

g/dL · facoltativo · intervallo: 0,1–6

### Albumina sierica

`alb_sr`

g/dL · facoltativo · intervallo: 0,5–6

## Edizione del metodo

Light 1972; variante BTS 2023: proteine pleuriche/sieriche \>0,5; LDH pleurale/sierica \>0,6; LDH pleurale \>2/3 del limite superiore sierico normale.

## Formula documentata

È un essudato se esiste almeno un criterio:

proteine pleuriche / sieriche \> 0,5;

LDH pleurica / LDH sierica \> 0,6;

LDH pleurica \> 2/3 del limite superiore normale della LDH sierica.

Se nessuno è presente, è trasudato. Gradiente di albumina (siero − liquido pleurico) \> 1,2 g/dL suggerisce trasudato anche con Light positivo.

## Limiti e popolazione

Questa implementazione combina i criteri di Light con la variante documentata dalla BTS nel 2023: LDH pleurale superiore a due terzi del limite superiore sierico del laboratorio, diversa dalla soglia assoluta dell’articolo del 1972. Usare campioni pleurico e sierico appaiati e il limite del proprio laboratorio; i valori devono essere strettamente superiori alle soglie. La classificazione biochimica non identifica la causa del versamento. Il gradiente facoltativo di albumina è una valutazione complementare e non deve, da solo, sostituire l’indagine clinica.

## Riferimenti

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
