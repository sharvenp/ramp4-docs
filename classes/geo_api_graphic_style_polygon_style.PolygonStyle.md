[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/style/polygon-style](../modules/geo_api_graphic_style_polygon_style.md) / PolygonStyle

# Class: PolygonStyle

[geo/api/graphic/style/polygon-style](../modules/geo_api_graphic_style_polygon_style.md).PolygonStyle

## Hierarchy

- [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

  ↳ **`PolygonStyle`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_style_polygon_style.PolygonStyle.md#constructor)

### Properties

- [\_fillColour](geo_api_graphic_style_polygon_style.PolygonStyle.md#_fillcolour)
- [\_fillStyle](geo_api_graphic_style_polygon_style.PolygonStyle.md#_fillstyle)
- [\_outlineStyle](geo_api_graphic_style_polygon_style.PolygonStyle.md#_outlinestyle)

### Accessors

- [fillColour](geo_api_graphic_style_polygon_style.PolygonStyle.md#fillcolour)
- [fillStyleType](geo_api_graphic_style_polygon_style.PolygonStyle.md#fillstyletype)
- [outline](geo_api_graphic_style_polygon_style.PolygonStyle.md#outline)

### Methods

- [toESRI](geo_api_graphic_style_polygon_style.PolygonStyle.md#toesri)
- [toOptions](geo_api_graphic_style_polygon_style.PolygonStyle.md#tooptions)
- [convToPoints](geo_api_graphic_style_polygon_style.PolygonStyle.md#convtopoints)
- [fromArcServer](geo_api_graphic_style_polygon_style.PolygonStyle.md#fromarcserver)
- [fromESRI](geo_api_graphic_style_polygon_style.PolygonStyle.md#fromesri)

## Constructors

### constructor

• **new PolygonStyle**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PolygonStyleOptions`](../interfaces/geo_api_geo_defs.PolygonStyleOptions.md) |

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[constructor](geo_api_graphic_style_base_style.BaseStyle.md#constructor)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L18)

## Properties

### \_fillColour

• `Protected` **\_fillColour**: [`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L15)

___

### \_fillStyle

• `Protected` **\_fillStyle**: [`FillStyleType`](../enums/geo_api_geo_defs.FillStyleType.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L16)

___

### \_outlineStyle

• `Protected` **\_outlineStyle**: [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L14)

## Accessors

### fillColour

• `get` **fillColour**(): [`Colour`](geo_api_graphic_style_colour.Colour.md)

Returns the specified colour

#### Returns

[`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L32)

___

### fillStyleType

• `get` **fillStyleType**(): [`FillStyleType`](../enums/geo_api_geo_defs.FillStyleType.md)

Returns the fill style type (solid, transparent, hatching, etc)

#### Returns

[`FillStyleType`](../enums/geo_api_geo_defs.FillStyleType.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:37](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L37)

___

### outline

• `get` **outline**(): [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

Returns the outline style

#### Returns

[`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L42)

## Methods

### toESRI

▸ **toESRI**(): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Returns

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toESRI](geo_api_graphic_style_base_style.BaseStyle.md#toesri)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L56)

___

### toOptions

▸ **toOptions**(): [`PolygonStyleOptions`](../interfaces/geo_api_geo_defs.PolygonStyleOptions.md)

#### Returns

[`PolygonStyleOptions`](../interfaces/geo_api_geo_defs.PolygonStyleOptions.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toOptions](geo_api_graphic_style_base_style.BaseStyle.md#tooptions)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L46)

___

### convToPoints

▸ `Static` **convToPoints**(`input`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `string` \| `number` |

#### Returns

`undefined` \| `number`

#### Inherited from

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[convToPoints](geo_api_graphic_style_base_style.BaseStyle.md#convtopoints)

#### Defined in

[src/geo/api/graphic/style/base-style.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/base-style.ts#L27)

___

### fromArcServer

▸ `Static` **fromArcServer**(`json`): [`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:80](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L80)

___

### fromESRI

▸ `Static` **fromESRI**(`e`): [`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md) |

#### Returns

[`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md)

#### Defined in

[src/geo/api/graphic/style/polygon-style.ts:68](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/polygon-style.ts#L68)
