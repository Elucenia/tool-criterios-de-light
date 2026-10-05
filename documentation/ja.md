<!-- ELUCENIA technical documentation · criterios-de-light · ja · no clinical/professional/rights approval -->

# Light基準

[条件・出典・許諾](https://elucenia.org/ja/tools/criterios-de-light)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 胸水蛋白

`pt_pl`

g/dL · 範囲: 0.1–10

### 血清蛋白

`pt_sr`

g/dL · 範囲: 1–12

### 胸水乳酸脱水素酵素（LDH）

`dhl_pl`

U/L · 範囲: 10–20000

### 血清乳酸脱水素酵素（LDH）

`dhl_sr`

U/L · 範囲: 10–5000

### 血清LDHの基準値上限（検査施設の値）

`dhl_lsn`

U/L · 範囲: 100–1000

### 胸水アルブミン

`alb_pl`

g/dL · 任意 · 範囲: 0.1–6

### 血清アルブミン

`alb_sr`

g/dL · 任意 · 範囲: 0.5–6

## 方法の版

Light 1972、BTS 2023の変法：胸水/血清蛋白 \>0.5、胸水/血清LDH \>0.6、胸水LDH \>血清基準上限の2/3。

## 記載された計算式

次の場合は滲出性 ：少なくとも1つ の基準：

胸水蛋白/血清蛋白 \> 0.5;

胸水LDH/血清LDH \> 0.6;

胸水LDH \> 2/3 血清LDH正常上限。

いずれも満たさなければ漏出性です。 アルブミン較差 （血清−胸水） \> 1.2 g/dL Light陽性でも漏出性を示唆します。

## 限界・対象集団

この実装はLight基準とBTS 2023に記載された変法を組み合わせています。胸水LDHが検査室の血清基準上限の3分の2を超える基準は、1972年論文の絶対閾値とは異なります。対応する胸水・血清検体と、その検査室の上限値を使用してください。判定には閾値を厳密に超える必要があります。生化学的分類は胸水の原因を特定しません。任意のアルブミン較差は補助的評価であり、それだけで臨床的検索に代えるべきではありません。

## 参考文献

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
