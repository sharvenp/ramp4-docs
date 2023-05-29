[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/renderer](../modules/geo_utils_renderer.md) / BaseSymbolUnit

# Class: BaseSymbolUnit

[geo/utils/renderer](../modules/geo_utils_renderer.md).BaseSymbolUnit

## Hierarchy

- **`BaseSymbolUnit`**

  ↳ [`UniqueValueSymbolUnit`](geo_utils_renderer.UniqueValueSymbolUnit.md)

  ↳ [`ClassBreaksSymbolUnit`](geo_utils_renderer.ClassBreaksSymbolUnit.md)

## Table of contents

### Constructors

- [constructor](geo_utils_renderer.BaseSymbolUnit.md#constructor)

### Properties

- [definitionClause](geo_utils_renderer.BaseSymbolUnit.md#definitionclause)
- [isDefault](geo_utils_renderer.BaseSymbolUnit.md#isdefault)
- [label](geo_utils_renderer.BaseSymbolUnit.md#label)
- [parent](geo_utils_renderer.BaseSymbolUnit.md#parent)
- [svgCode](geo_utils_renderer.BaseSymbolUnit.md#svgcode)
- [symbol](geo_utils_renderer.BaseSymbolUnit.md#symbol)

### Methods

- [match](geo_utils_renderer.BaseSymbolUnit.md#match)

## Constructors

### constructor

• **new BaseSymbolUnit**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) |

#### Defined in

[src/geo/utils/renderer.ts:158](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L158)

## Properties

### definitionClause

• **definitionClause**: `string` = `''`

#### Defined in

[src/geo/utils/renderer.ts:154](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L154)

___

### isDefault

• **isDefault**: `boolean` = `false`

#### Defined in

[src/geo/utils/renderer.ts:151](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L151)

___

### label

• **label**: `string` = `''`

#### Defined in

[src/geo/utils/renderer.ts:155](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L155)

___

### parent

• **parent**: [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Defined in

[src/geo/utils/renderer.ts:156](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L156)

___

### svgCode

• **svgCode**: `string` = `''`

#### Defined in

[src/geo/utils/renderer.ts:152](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L152)

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Defined in

[src/geo/utils/renderer.ts:153](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L153)

## Methods

### match

▸ **match**(`searchParams`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchParams` | `any` |

#### Returns

`boolean`

#### Defined in

[src/geo/utils/renderer.ts:163](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L163)
