[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/renderer](../modules/geo_utils_renderer.md) / ClassBreaksSymbolUnit

# Class: ClassBreaksSymbolUnit

[geo/utils/renderer](../modules/geo_utils_renderer.md).ClassBreaksSymbolUnit

## Hierarchy

- [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

  ↳ **`ClassBreaksSymbolUnit`**

## Table of contents

### Constructors

- [constructor](geo_utils_renderer.ClassBreaksSymbolUnit.md#constructor)

### Properties

- [definitionClause](geo_utils_renderer.ClassBreaksSymbolUnit.md#definitionclause)
- [isDefault](geo_utils_renderer.ClassBreaksSymbolUnit.md#isdefault)
- [label](geo_utils_renderer.ClassBreaksSymbolUnit.md#label)
- [maxValue](geo_utils_renderer.ClassBreaksSymbolUnit.md#maxvalue)
- [minValue](geo_utils_renderer.ClassBreaksSymbolUnit.md#minvalue)
- [parent](geo_utils_renderer.ClassBreaksSymbolUnit.md#parent)
- [svgCode](geo_utils_renderer.ClassBreaksSymbolUnit.md#svgcode)
- [symbol](geo_utils_renderer.ClassBreaksSymbolUnit.md#symbol)

### Methods

- [match](geo_utils_renderer.ClassBreaksSymbolUnit.md#match)

## Constructors

### constructor

• **new ClassBreaksSymbolUnit**(`parent`, `minValue`, `maxValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) |
| `minValue` | `number` |
| `maxValue` | `number` |

#### Overrides

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[constructor](geo_utils_renderer.BaseSymbolUnit.md#constructor)

#### Defined in

[src/geo/utils/renderer.ts:344](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L344)

## Properties

### definitionClause

• **definitionClause**: `string` = `''`

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[definitionClause](geo_utils_renderer.BaseSymbolUnit.md#definitionclause)

#### Defined in

[src/geo/utils/renderer.ts:154](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L154)

___

### isDefault

• **isDefault**: `boolean` = `false`

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[isDefault](geo_utils_renderer.BaseSymbolUnit.md#isdefault)

#### Defined in

[src/geo/utils/renderer.ts:151](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L151)

___

### label

• **label**: `string` = `''`

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[label](geo_utils_renderer.BaseSymbolUnit.md#label)

#### Defined in

[src/geo/utils/renderer.ts:155](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L155)

___

### maxValue

• **maxValue**: `number`

#### Defined in

[src/geo/utils/renderer.ts:342](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L342)

___

### minValue

• **minValue**: `number`

#### Defined in

[src/geo/utils/renderer.ts:341](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L341)

___

### parent

• **parent**: [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[parent](geo_utils_renderer.BaseSymbolUnit.md#parent)

#### Defined in

[src/geo/utils/renderer.ts:156](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L156)

___

### svgCode

• **svgCode**: `string` = `''`

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[svgCode](geo_utils_renderer.BaseSymbolUnit.md#svgcode)

#### Defined in

[src/geo/utils/renderer.ts:152](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L152)

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Inherited from

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[symbol](geo_utils_renderer.BaseSymbolUnit.md#symbol)

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

#### Overrides

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[match](geo_utils_renderer.BaseSymbolUnit.md#match)

#### Defined in

[src/geo/utils/renderer.ts:351](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L351)
