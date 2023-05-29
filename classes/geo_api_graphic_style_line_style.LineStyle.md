[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/style/line-style](../modules/geo_api_graphic_style_line_style.md) / LineStyle

# Class: LineStyle

[geo/api/graphic/style/line-style](../modules/geo_api_graphic_style_line_style.md).LineStyle

## Hierarchy

- [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

  ↳ **`LineStyle`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_style_line_style.LineStyle.md#constructor)

### Properties

- [\_cap](geo_api_graphic_style_line_style.LineStyle.md#_cap)
- [\_colour](geo_api_graphic_style_line_style.LineStyle.md#_colour)
- [\_join](geo_api_graphic_style_line_style.LineStyle.md#_join)
- [\_miter](geo_api_graphic_style_line_style.LineStyle.md#_miter)
- [\_style](geo_api_graphic_style_line_style.LineStyle.md#_style)
- [\_width](geo_api_graphic_style_line_style.LineStyle.md#_width)

### Accessors

- [cap](geo_api_graphic_style_line_style.LineStyle.md#cap)
- [colour](geo_api_graphic_style_line_style.LineStyle.md#colour)
- [join](geo_api_graphic_style_line_style.LineStyle.md#join)
- [miter](geo_api_graphic_style_line_style.LineStyle.md#miter)
- [styleType](geo_api_graphic_style_line_style.LineStyle.md#styletype)
- [width](geo_api_graphic_style_line_style.LineStyle.md#width)

### Methods

- [toESRI](geo_api_graphic_style_line_style.LineStyle.md#toesri)
- [toOptions](geo_api_graphic_style_line_style.LineStyle.md#tooptions)
- [convToPoints](geo_api_graphic_style_line_style.LineStyle.md#convtopoints)
- [fromArcServer](geo_api_graphic_style_line_style.LineStyle.md#fromarcserver)
- [fromESRI](geo_api_graphic_style_line_style.LineStyle.md#fromesri)

## Constructors

### constructor

• **new LineStyle**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LineStyleOptions`](../interfaces/geo_api_geo_defs.LineStyleOptions.md) |

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[constructor](geo_api_graphic_style_base_style.BaseStyle.md#constructor)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L21)

## Properties

### \_cap

• `Protected` **\_cap**: [`LineCapType`](../enums/geo_api_geo_defs.LineCapType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L17)

___

### \_colour

• `Protected` **\_colour**: [`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L19)

___

### \_join

• `Protected` **\_join**: [`LineJoinType`](../enums/geo_api_geo_defs.LineJoinType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L18)

___

### \_miter

• `Protected` **\_miter**: `number`

#### Defined in

[src/geo/api/graphic/style/line-style.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L16)

___

### \_style

• `Protected` **\_style**: [`LineStyleType`](../enums/geo_api_geo_defs.LineStyleType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L14)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/geo/api/graphic/style/line-style.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L15)

## Accessors

### cap

• `get` **cap**(): [`LineCapType`](../enums/geo_api_geo_defs.LineCapType.md)

Returns the specified line cap style

#### Returns

[`LineCapType`](../enums/geo_api_geo_defs.LineCapType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:58](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L58)

___

### colour

• `get` **colour**(): [`Colour`](geo_api_graphic_style_colour.Colour.md)

Returns the specified colour

#### Returns

[`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L48)

___

### join

• `get` **join**(): [`LineJoinType`](../enums/geo_api_geo_defs.LineJoinType.md)

Returns the specified line join style

#### Returns

[`LineJoinType`](../enums/geo_api_geo_defs.LineJoinType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L63)

___

### miter

• `get` **miter**(): `number`

Returns the specified miter limit

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/line-style.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L53)

___

### styleType

• `get` **styleType**(): [`LineStyleType`](../enums/geo_api_geo_defs.LineStyleType.md)

Returns the specified style type (e.g. solid, dashed, dotted)

#### Returns

[`LineStyleType`](../enums/geo_api_geo_defs.LineStyleType.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L38)

___

### width

• `get` **width**(): `number`

Returns the specified width

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/line-style.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L43)

## Methods

### toESRI

▸ **toESRI**(): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Returns

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toESRI](geo_api_graphic_style_base_style.BaseStyle.md#toesri)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:78](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L78)

___

### toOptions

▸ **toOptions**(): [`LineStyleOptions`](../interfaces/geo_api_geo_defs.LineStyleOptions.md)

#### Returns

[`LineStyleOptions`](../interfaces/geo_api_geo_defs.LineStyleOptions.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toOptions](geo_api_graphic_style_base_style.BaseStyle.md#tooptions)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L67)

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

▸ `Static` **fromArcServer**(`json`): [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:99](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L99)

___

### fromESRI

▸ `Static` **fromESRI**(`e`): [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md) |

#### Returns

[`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/line-style.ts:90](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/line-style.ts#L90)
