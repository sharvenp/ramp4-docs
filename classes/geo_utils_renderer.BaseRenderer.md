[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/renderer](../modules/geo_utils_renderer.md) / BaseRenderer

# Class: BaseRenderer

[geo/utils/renderer](../modules/geo_utils_renderer.md).BaseRenderer

## Hierarchy

- **`BaseRenderer`**

  ↳ [`SimpleRenderer`](geo_utils_renderer.SimpleRenderer.md)

  ↳ [`UniqueValueRenderer`](geo_utils_renderer.UniqueValueRenderer.md)

  ↳ [`ClassBreaksRenderer`](geo_utils_renderer.ClassBreaksRenderer.md)

## Table of contents

### Constructors

- [constructor](geo_utils_renderer.BaseRenderer.md#constructor)

### Properties

- [defaultUnit](geo_utils_renderer.BaseRenderer.md#defaultunit)
- [falseRenderer](geo_utils_renderer.BaseRenderer.md#falserenderer)
- [innerRenderer](geo_utils_renderer.BaseRenderer.md#innerrenderer)
- [symbolUnits](geo_utils_renderer.BaseRenderer.md#symbolunits)
- [type](geo_utils_renderer.BaseRenderer.md#type)

### Methods

- [cleanFieldName](geo_utils_renderer.BaseRenderer.md#cleanfieldname)
- [getFieldDelimiter](geo_utils_renderer.BaseRenderer.md#getfielddelimiter)
- [getGraphicIcon](geo_utils_renderer.BaseRenderer.md#getgraphicicon)
- [getGraphicSymbol](geo_utils_renderer.BaseRenderer.md#getgraphicsymbol)
- [makeElseClause](geo_utils_renderer.BaseRenderer.md#makeelseclause)
- [makeSearchParams](geo_utils_renderer.BaseRenderer.md#makesearchparams)
- [rendererToLegend](geo_utils_renderer.BaseRenderer.md#renderertolegend)
- [searchRenderer](geo_utils_renderer.BaseRenderer.md#searchrenderer)

## Constructors

### constructor

• **new BaseRenderer**(`esriRenderer`, `layerFields`, `falseRenderer?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `esriRenderer` | [`EsriRenderer`](geo_esri.EsriRenderer.md) | `undefined` |
| `layerFields` | [`EsriField`](geo_esri.EsriField.md)[] | `undefined` |
| `falseRenderer` | `boolean` | `false` |

#### Defined in

[src/geo/utils/renderer.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L27)

## Properties

### defaultUnit

• **defaultUnit**: `undefined` \| [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

#### Defined in

[src/geo/utils/renderer.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L21)

___

### falseRenderer

• **falseRenderer**: `boolean`

#### Defined in

[src/geo/utils/renderer.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L23)

___

### innerRenderer

• **innerRenderer**: [`EsriRenderer`](geo_esri.EsriRenderer.md)

#### Defined in

[src/geo/utils/renderer.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L19)

___

### symbolUnits

• **symbolUnits**: [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)[]

#### Defined in

[src/geo/utils/renderer.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L20)

___

### type

• **type**: [`RendererType`](../enums/geo_api_geo_defs.RendererType.md)

#### Defined in

[src/geo/utils/renderer.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L22)

## Methods

### cleanFieldName

▸ `Protected` **cleanFieldName**(`fieldName`, `fields`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `fields` | [`EsriField`](geo_esri.EsriField.md)[] |

#### Returns

`string`

#### Defined in

[src/geo/utils/renderer.ts:105](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L105)

___

### getFieldDelimiter

▸ `Protected` **getFieldDelimiter**(`fieldName`, `fields`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `fields` | [`EsriField`](geo_esri.EsriField.md)[] |

#### Returns

`string`

#### Defined in

[src/geo/utils/renderer.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L82)

___

### getGraphicIcon

▸ **getGraphicIcon**(`attributes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `any` |

#### Returns

`string`

#### Defined in

[src/geo/utils/renderer.ts:68](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L68)

___

### getGraphicSymbol

▸ **getGraphicSymbol**(`attributes`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `any` |

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Defined in

[src/geo/utils/renderer.ts:72](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L72)

___

### makeElseClause

▸ `Protected` **makeElseClause**(): `string`

#### Returns

`string`

#### Defined in

[src/geo/utils/renderer.ts:137](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L137)

___

### makeSearchParams

▸ `Protected` **makeSearchParams**(`attributes`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md) |

#### Returns

`any`

#### Defined in

[src/geo/utils/renderer.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L44)

___

### rendererToLegend

▸ **rendererToLegend**(): `any`

#### Returns

`any`

#### Defined in

[src/geo/utils/renderer.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L76)

___

### searchRenderer

▸ `Protected` **searchRenderer**(`attributes`): [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `any` |

#### Returns

[`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

#### Defined in

[src/geo/utils/renderer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L50)
