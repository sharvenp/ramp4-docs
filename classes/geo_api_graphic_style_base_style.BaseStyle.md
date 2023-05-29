[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/style/base-style](../modules/geo_api_graphic_style_base_style.md) / BaseStyle

# Class: BaseStyle

[geo/api/graphic/style/base-style](../modules/geo_api_graphic_style_base_style.md).BaseStyle

## Hierarchy

- **`BaseStyle`**

  ↳ [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

  ↳ [`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md)

  ↳ [`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md)

## Table of contents

### Constructors

- [constructor](geo_api_graphic_style_base_style.BaseStyle.md#constructor)

### Methods

- [toESRI](geo_api_graphic_style_base_style.BaseStyle.md#toesri)
- [toOptions](geo_api_graphic_style_base_style.BaseStyle.md#tooptions)
- [convToPoints](geo_api_graphic_style_base_style.BaseStyle.md#convtopoints)

## Constructors

### constructor

• **new BaseStyle**()

## Methods

### toESRI

▸ **toESRI**(): [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Defined in

[src/geo/api/graphic/style/base-style.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/base-style.ts#L14)

___

### toOptions

▸ **toOptions**(): `any`

#### Returns

`any`

#### Defined in

[src/geo/api/graphic/style/base-style.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/base-style.ts#L8)

___

### convToPoints

▸ `Static` **convToPoints**(`input`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `string` \| `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/geo/api/graphic/style/base-style.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/base-style.ts#L27)
