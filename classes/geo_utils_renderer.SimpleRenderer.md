[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/renderer](../modules/geo_utils_renderer.md) / SimpleRenderer

# Class: SimpleRenderer

[geo/utils/renderer](../modules/geo_utils_renderer.md).SimpleRenderer

## Hierarchy

- [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

  ↳ **`SimpleRenderer`**

## Table of contents

### Constructors

- [constructor](geo_utils_renderer.SimpleRenderer.md#constructor)

### Properties

- [defaultUnit](geo_utils_renderer.SimpleRenderer.md#defaultunit)
- [falseRenderer](geo_utils_renderer.SimpleRenderer.md#falserenderer)
- [innerRenderer](geo_utils_renderer.SimpleRenderer.md#innerrenderer)
- [symbolUnits](geo_utils_renderer.SimpleRenderer.md#symbolunits)
- [type](geo_utils_renderer.SimpleRenderer.md#type)

### Methods

- [cleanFieldName](geo_utils_renderer.SimpleRenderer.md#cleanfieldname)
- [getFieldDelimiter](geo_utils_renderer.SimpleRenderer.md#getfielddelimiter)
- [getGraphicIcon](geo_utils_renderer.SimpleRenderer.md#getgraphicicon)
- [getGraphicSymbol](geo_utils_renderer.SimpleRenderer.md#getgraphicsymbol)
- [makeElseClause](geo_utils_renderer.SimpleRenderer.md#makeelseclause)
- [makeSearchParams](geo_utils_renderer.SimpleRenderer.md#makesearchparams)
- [rendererToLegend](geo_utils_renderer.SimpleRenderer.md#renderertolegend)
- [searchRenderer](geo_utils_renderer.SimpleRenderer.md#searchrenderer)

## Constructors

### constructor

• **new SimpleRenderer**(`esriRenderer`, `layerFields`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriRenderer` | [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md) |
| `layerFields` | [`EsriField`](geo_esri.EsriField.md)[] |

#### Overrides

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[constructor](geo_utils_renderer.BaseRenderer.md#constructor)

#### Defined in

[src/geo/utils/renderer.ts:170](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L170)

## Properties

### defaultUnit

• **defaultUnit**: `undefined` \| [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[defaultUnit](geo_utils_renderer.BaseRenderer.md#defaultunit)

#### Defined in

[src/geo/utils/renderer.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L21)

___

### falseRenderer

• **falseRenderer**: `boolean`

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[falseRenderer](geo_utils_renderer.BaseRenderer.md#falserenderer)

#### Defined in

[src/geo/utils/renderer.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L23)

___

### innerRenderer

• **innerRenderer**: [`EsriRenderer`](geo_esri.EsriRenderer.md)

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[innerRenderer](geo_utils_renderer.BaseRenderer.md#innerrenderer)

#### Defined in

[src/geo/utils/renderer.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L19)

___

### symbolUnits

• **symbolUnits**: [`BaseSymbolUnit`](geo_utils_renderer.BaseSymbolUnit.md)[]

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[symbolUnits](geo_utils_renderer.BaseRenderer.md#symbolunits)

#### Defined in

[src/geo/utils/renderer.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L20)

___

### type

• **type**: [`RendererType`](../enums/geo_api_geo_defs.RendererType.md)

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[type](geo_utils_renderer.BaseRenderer.md#type)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[cleanFieldName](geo_utils_renderer.BaseRenderer.md#cleanfieldname)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[getFieldDelimiter](geo_utils_renderer.BaseRenderer.md#getfielddelimiter)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[getGraphicIcon](geo_utils_renderer.BaseRenderer.md#getgraphicicon)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[getGraphicSymbol](geo_utils_renderer.BaseRenderer.md#getgraphicsymbol)

#### Defined in

[src/geo/utils/renderer.ts:72](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L72)

___

### makeElseClause

▸ `Protected` **makeElseClause**(): `string`

#### Returns

`string`

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[makeElseClause](geo_utils_renderer.BaseRenderer.md#makeelseclause)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[makeSearchParams](geo_utils_renderer.BaseRenderer.md#makesearchparams)

#### Defined in

[src/geo/utils/renderer.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L44)

___

### rendererToLegend

▸ **rendererToLegend**(): `any`

#### Returns

`any`

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[rendererToLegend](geo_utils_renderer.BaseRenderer.md#renderertolegend)

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

#### Inherited from

[BaseRenderer](geo_utils_renderer.BaseRenderer.md).[searchRenderer](geo_utils_renderer.BaseRenderer.md#searchrenderer)

#### Defined in

[src/geo/utils/renderer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/renderer.ts#L50)
