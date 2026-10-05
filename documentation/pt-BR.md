<!-- ELUCENIA technical documentation · criterios-de-light · pt-BR · no clinical/professional/rights approval -->

# Critérios de Light

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/criterios-de-light)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Proteína no líquido pleural

`pt_pl`

g/dL · intervalo: 0,1–10

### Proteína sérica

`pt_sr`

g/dL · intervalo: 1–12

### DHL no líquido pleural

`dhl_pl`

U/L · intervalo: 10–20000

### DHL sérica

`dhl_sr`

U/L · intervalo: 10–5000

### Limite superior da normalidade da DHL sérica (do laboratório)

`dhl_lsn`

U/L · intervalo: 100–1000

### Albumina no líquido pleural

`alb_pl`

g/dL · opcional · intervalo: 0,1–6

### Albumina sérica

`alb_sr`

g/dL · opcional · intervalo: 0,5–6

## Edição do método

Light 1972; variante BTS 2023: proteína pleural/sérica \>0,5; LDH pleural/sérica \>0,6; LDH pleural \>2/3 do LSN sérico.

## Fórmula documentada

É exsudato se houver pelo menos um critério:

proteína pleural / proteína sérica \> 0,5;

DHL pleural / DHL sérica \> 0,6;

DHL pleural \> 2/3 do limite superior normal da DHL sérica.

Se nenhum estiver presente, é transudato. Gradiente de albumina (soro − pleura) \> 1,2 g/dL sugere transudato mesmo com Light positivo.

## Limites e população

Esta implementação combina os critérios de Light com a variante documentada pela BTS 2023: LDH pleural acima de dois terços do limite superior sérico do laboratório, distinta do corte absoluto do artigo de 1972. Use amostras pleural e sérica pareadas e o limite do próprio laboratório; os cortes são estritamente maiores que os limiares. A classificação bioquímica não identifica a causa do derrame. O gradiente opcional de albumina é uma avaliação complementar e não deve, sozinho, substituir a investigação clínica.

## Referências

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
