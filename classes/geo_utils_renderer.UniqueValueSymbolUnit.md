[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/renderer](../modules/geo_utils_renderer.md) / UniqueValueSymbolUnit

# Class: UniqueValueSymbolUnit

[geo/utils/renderer](../modules/geo_utils_renderer.md).UniqueValueSymbolUnit

## Hierarchy

- [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

  ↳ **`UniqueValueSymbolUnit`**

## Table of contents

### Constructors

- [constructor](geo_utils_renderer.UniqueValueSymbolUnit.md#constructor)

### Properties

- [definitionClause](geo_utils_renderer.UniqueValueSymbolUnit.md#definitionclause)
- [isDefault](geo_utils_renderer.UniqueValueSymbolUnit.md#isdefault)
- [label](geo_utils_renderer.UniqueValueSymbolUnit.md#label)
- [matchValue](geo_utils_renderer.UniqueValueSymbolUnit.md#matchvalue)
- [parent](geo_utils_renderer.UniqueValueSymbolUnit.md#parent)
- [svgCode](geo_utils_renderer.UniqueValueSymbolUnit.md#svgcode)
- [symbol](geo_utils_renderer.UniqueValueSymbolUnit.md#symbol)

### Methods

- [match](geo_utils_renderer.UniqueValueSymbolUnit.md#match)

## Constructors

### constructor

• **new UniqueValueSymbolUnit**(`parent`, `value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) |
| `value` | `string` \| `number` |

#### Overrides

[BaseSymbolUnit](geo_utils_renderer.BaseSymbolUnit.md).[constructor](geo_utils_renderer.BaseSymbolUnit.md#constructor)

#### Defined in

[src/geo/utils/renderer.ts:274](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L274)

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

### matchValue

• **matchValue**: `string`

#### Defined in

[src/geo/utils/renderer.ts:272](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L272)

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

[src/geo/utils/renderer.ts:286](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L286)
