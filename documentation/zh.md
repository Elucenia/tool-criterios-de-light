<!-- ELUCENIA technical documentation · criterios-de-light · zh · no clinical/professional/rights approval -->

# Light 标准

[条件、来源与许可](https://elucenia.org/zh/tools/criterios-de-light)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 胸腔积液蛋白

`pt_pl`

g/dL · 范围: 0.1–10

### 血清蛋白

`pt_sr`

g/dL · 范围: 1–12

### 胸腔积液乳酸脱氢酶（LDH）

`dhl_pl`

U/L · 范围: 10–20000

### 血清乳酸脱氢酶（LDH）

`dhl_sr`

U/L · 范围: 10–5000

### 血清 LDH 正常值上限（实验室值）

`dhl_lsn`

U/L · 范围: 100–1000

### 胸腔积液白蛋白

`alb_pl`

g/dL · 选填 · 范围: 0.1–6

### 血清白蛋白

`alb_sr`

g/dL · 选填 · 范围: 0.5–6

## 方法版本

Light 1972；BTS 2023变体：胸水/血清蛋白 \>0.5；胸水/血清LDH \>0.6；胸水LDH \>血清正常上限的2/3。

## 已记录的公式

为渗出液 若存在至少一项 标准：

胸液蛋白/血清蛋白 \> 0.5;

胸液LDH/血清LDH \> 0.6;

胸液LDH \> 2/3 血清LDH正常上限。

均不符合时为漏出液。 白蛋白梯度 （血清−胸液） \> 1.2 g/dL 即使Light阳性也提示漏出液。

## 限制与适用人群

本实现将Light标准与BTS 2023记录的变体结合：胸水LDH高于本实验室血清正常上限的三分之二，这不同于1972年论文的绝对阈值。请使用配对的胸水和血清样本及本实验室上限；标准要求严格大于阈值。生化分类不能确定积液原因。可选的白蛋白梯度属于补充评估，不能单独取代临床病因调查。

## 参考文献

- [Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med, 1972.](https://doi.org/10.7326/0003-4819-77-4-507)

- [Light RW. Clinical practice. Pleural effusion. N Engl J Med, 2002.](https://doi.org/10.1056/NEJMcp010731)

- [BTS2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

3项阳性标准中的3项：渗出液

| 结果详情 | |
| --- | --- |
| 胸腔液/血清蛋白 | 0.67（> 0.5） |
| 胸腔液/血清LDH | 1.20（> 0.6） |
| 胸腔液LDH × 上限的2/3 | 300 vs 147 U/L（高于） |


### 2

无阳性标准：漏出液

| 结果详情 | |
| --- | --- |
| 胸腔液/血清蛋白 | 0.29（≤ 0.5） |
| 胸腔液/血清LDH | 0.50（≤ 0.6） |
| 胸腔液LDH × 上限的2/3 | 100 vs 167 U/L（低于） |


### 3

无阳性标准：漏出液

| 结果详情 | |
| --- | --- |
| 胸腔液/血清蛋白 | 0.50（≤ 0.5） |
| 胸腔液/血清LDH | 0.60（≤ 0.6） |
| 胸腔液LDH × 上限的2/3 | 120 vs 120 U/L（低于） |


### 4

3项阳性标准中的1项：渗出液

| 结果详情 | |
| --- | --- |
| 胸腔液/血清蛋白 | 0.38（≤ 0.5） |
| 胸腔液/血清LDH | 0.75（> 0.6） |
| 胸腔液LDH × 上限的2/3 | 150 vs 200 U/L（低于） |
| 白蛋白梯度（血清−胸膜） | 1.6 g/dL |

按Light标准为渗出液，但白蛋白梯度 > 1,2 g/dL：提示漏出液（常见于使用利尿剂者）。

