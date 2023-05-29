[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/style/point-style](../modules/geo_api_graphic_style_point_style.md) / PointStyle

# Class: PointStyle

[geo/api/graphic/style/point-style](../modules/geo_api_graphic_style_point_style.md).PointStyle

## Hierarchy

- [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

  ↳ **`PointStyle`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_style_point_style.PointStyle.md#constructor)

### Properties

- [\_angle](geo_api_graphic_style_point_style.PointStyle.md#_angle)
- [\_colour](geo_api_graphic_style_point_style.PointStyle.md#_colour)
- [\_height](geo_api_graphic_style_point_style.PointStyle.md#_height)
- [\_icon](geo_api_graphic_style_point_style.PointStyle.md#_icon)
- [\_outline](geo_api_graphic_style_point_style.PointStyle.md#_outline)
- [\_path](geo_api_graphic_style_point_style.PointStyle.md#_path)
- [\_size](geo_api_graphic_style_point_style.PointStyle.md#_size)
- [\_style](geo_api_graphic_style_point_style.PointStyle.md#_style)
- [\_width](geo_api_graphic_style_point_style.PointStyle.md#_width)
- [\_xOffset](geo_api_graphic_style_point_style.PointStyle.md#_xoffset)
- [\_yOffset](geo_api_graphic_style_point_style.PointStyle.md#_yoffset)

### Accessors

- [angle](geo_api_graphic_style_point_style.PointStyle.md#angle)
- [colour](geo_api_graphic_style_point_style.PointStyle.md#colour)
- [height](geo_api_graphic_style_point_style.PointStyle.md#height)
- [icon](geo_api_graphic_style_point_style.PointStyle.md#icon)
- [outline](geo_api_graphic_style_point_style.PointStyle.md#outline)
- [path](geo_api_graphic_style_point_style.PointStyle.md#path)
- [size](geo_api_graphic_style_point_style.PointStyle.md#size)
- [styleType](geo_api_graphic_style_point_style.PointStyle.md#styletype)
- [width](geo_api_graphic_style_point_style.PointStyle.md#width)
- [xOffset](geo_api_graphic_style_point_style.PointStyle.md#xoffset)
- [yOffset](geo_api_graphic_style_point_style.PointStyle.md#yoffset)

### Methods

- [propGrouse](geo_api_graphic_style_point_style.PointStyle.md#propgrouse)
- [toESRI](geo_api_graphic_style_point_style.PointStyle.md#toesri)
- [toOptions](geo_api_graphic_style_point_style.PointStyle.md#tooptions)
- [convToPoints](geo_api_graphic_style_point_style.PointStyle.md#convtopoints)
- [fromArcServer](geo_api_graphic_style_point_style.PointStyle.md#fromarcserver)
- [fromESRI](geo_api_graphic_style_point_style.PointStyle.md#fromesri)
- [isImageUrl](geo_api_graphic_style_point_style.PointStyle.md#isimageurl)

## Constructors

### constructor

• **new PointStyle**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PointMarkerStyleOptions`](../interfaces/geo_api_geo_defs.PointMarkerStyleOptions.md) \| [`PointIconStyleOptions`](../interfaces/geo_api_geo_defs.PointIconStyleOptions.md) |

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[constructor](geo_api_graphic_style_base_style.BaseStyle.md#constructor)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L25)

## Properties

### \_angle

• `Protected` **\_angle**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L23)

___

### \_colour

• `Protected` **\_colour**: [`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L19)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L13)

___

### \_icon

• `Protected` **\_icon**: `string`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L16)

___

### \_outline

• `Protected` **\_outline**: [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L21)

___

### \_path

• `Protected` **\_path**: `string`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L22)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L18)

___

### \_style

• `Protected` **\_style**: [`PointStyleType`](../enums/geo_api_geo_defs.PointStyleType.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L20)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L17)

___

### \_xOffset

• `Protected` **\_xOffset**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L14)

___

### \_yOffset

• `Protected` **\_yOffset**: `number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L15)

## Accessors

### angle

• `get` **angle**(): `number`

Returns the specified angle, in degrees

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:105](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L105)

___

### colour

• `get` **colour**(): [`Colour`](geo_api_graphic_style_colour.Colour.md)

Returns the specified colour

#### Returns

[`Colour`](geo_api_graphic_style_colour.Colour.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L66)

___

### height

• `get` **height**(): `number`

Returns the specified height

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L83)

___

### icon

• `get` **icon**(): `string`

Returns the specified icon. Can be image url, svg image

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L110)

___

### outline

• `get` **outline**(): [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

Returns the outline style

#### Returns

[`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L116)

___

### path

• `get` **path**(): `string`

Returns the SVG path

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:122](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L122)

___

### size

• `get` **size**(): `number`

Returns the specified size, in points units (not pixels)

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:89](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L89)

___

### styleType

• `get` **styleType**(): [`PointStyleType`](../enums/geo_api_geo_defs.PointStyleType.md)

Returns the specified style type

#### Returns

[`PointStyleType`](../enums/geo_api_geo_defs.PointStyleType.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:72](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L72)

___

### width

• `get` **width**(): `number`

Returns the specified width

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:77](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L77)

___

### xOffset

• `get` **xOffset**(): `number`

Returns the specified x offset

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:95](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L95)

___

### yOffset

• `get` **yOffset**(): `number`

Returns the specified y offset

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:100](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L100)

## Methods

### propGrouse

▸ `Protected` **propGrouse**(`forIcon`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forIcon` | `boolean` |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/style/point-style.ts:127](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L127)

___

### toESRI

▸ **toESRI**(): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md) \| [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Returns

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md) \| [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toESRI](geo_api_graphic_style_base_style.BaseStyle.md#toesri)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:160](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L160)

___

### toOptions

▸ **toOptions**(): [`PointMarkerStyleOptions`](../interfaces/geo_api_geo_defs.PointMarkerStyleOptions.md) \| [`PointIconStyleOptions`](../interfaces/geo_api_geo_defs.PointIconStyleOptions.md)

#### Returns

[`PointMarkerStyleOptions`](../interfaces/geo_api_geo_defs.PointMarkerStyleOptions.md) \| [`PointIconStyleOptions`](../interfaces/geo_api_geo_defs.PointIconStyleOptions.md)

#### Overrides

[BaseStyle](geo_api_graphic_style_base_style.BaseStyle.md).[toOptions](geo_api_graphic_style_base_style.BaseStyle.md#tooptions)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:136](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L136)

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

▸ `Static` **fromArcServer**(`json`): [`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:224](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L224)

___

### fromESRI

▸ `Static` **fromESRI**(`e`): [`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md) \| [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md) |

#### Returns

[`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md)

#### Defined in

[src/geo/api/graphic/style/point-style.ts:198](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L198)

___

### isImageUrl

▸ `Static` **isImageUrl**(`text`): `boolean`

Check to see if text provided is a valid image / data URL based on extension type or format.

**`Function`**

isImageUrl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | string to be matched against valid image types / data url format |

#### Returns

`boolean`

true if valid image extension

#### Defined in

[src/geo/api/graphic/style/point-style.ts:239](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/point-style.ts#L239)
