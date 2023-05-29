[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriColour

# Class: EsriColour

[geo/esri](../modules/geo_esri.md).EsriColour

## Table of contents

### Constructors

- [constructor](geo_esri.EsriColour.md#constructor)

### Properties

- [a](geo_esri.EsriColour.md#a)
- [b](geo_esri.EsriColour.md#b)
- [g](geo_esri.EsriColour.md#g)
- [r](geo_esri.EsriColour.md#r)

### Methods

- [clone](geo_esri.EsriColour.md#clone)
- [setColor](geo_esri.EsriColour.md#setcolor)
- [toCss](geo_esri.EsriColour.md#tocss)
- [toHex](geo_esri.EsriColour.md#tohex)
- [toJSON](geo_esri.EsriColour.md#tojson)
- [toRgb](geo_esri.EsriColour.md#torgb)
- [toRgba](geo_esri.EsriColour.md#torgba)
- [blendColors](geo_esri.EsriColour.md#blendcolors)
- [fromArray](geo_esri.EsriColour.md#fromarray)
- [fromHex](geo_esri.EsriColour.md#fromhex)
- [fromJSON](geo_esri.EsriColour.md#fromjson)
- [fromRgb](geo_esri.EsriColour.md#fromrgb)
- [fromString](geo_esri.EsriColour.md#fromstring)

## Constructors

### constructor

• **new EsriColour**(`color`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1526

## Properties

### a

• **a**: `number`

The alpha value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#a)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1507

___

### b

• **b**: `number`

The blue value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#b)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1513

___

### g

• **g**: `number`

The green value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#g)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1519

___

### r

• **r**: `number`

The red value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#r)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1525

## Methods

### clone

▸ **clone**(): [`EsriColour`](geo_esri.EsriColour.md)

Creates a deep clone of the Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#clone)

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1532

___

### setColor

▸ **setColor**(`color`): [`EsriColour`](geo_esri.EsriColour.md)

Takes an array of rgb(a) values, named string, hex string or an hsl(a) string, an object with `r`, `g`, `b`, and `a` properties, or a [Color](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html) object and sets this color instance to the input value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#setColor)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1538

___

### toCss

▸ **toCss**(`includeAlpha?`): `string`

Returns a CSS color string in rgba form representing the Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#toCss)

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeAlpha?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1544

___

### toHex

▸ **toHex**(): `string`

Returns a CSS color string in hexadecimal form that represents the Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#toHex)

#### Returns

`string`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1550

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON object with all the values from a Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#toJSON)

#### Returns

`any`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1556

___

### toRgb

▸ **toRgb**(): `number`[]

Returns a 3-component array of rgb values that represent the Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#toRgb)

#### Returns

`number`[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1562

___

### toRgba

▸ **toRgba**(): `number`[]

Returns a 4-component array of rgba values that represent the Color instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#toRgba)

#### Returns

`number`[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1568

___

### blendColors

▸ `Static` **blendColors**(`start`, `end`, `weight`, `out?`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a Color instance by blending two colors using a weight factor.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#blendColors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`EsriColour`](geo_esri.EsriColour.md) |
| `end` | [`EsriColour`](geo_esri.EsriColour.md) |
| `weight` | `number` |
| `out?` | [`EsriColour`](geo_esri.EsriColour.md) |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1574

___

### fromArray

▸ `Static` **fromArray**(`a`, `t?`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a Color instance using a 3 or 4 element array, mapping each element in sequence to the rgb(a) values of the color.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#fromArray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[] |
| `t?` | [`EsriColour`](geo_esri.EsriColour.md) |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1580

___

### fromHex

▸ `Static` **fromHex**(`colorStr`, `t?`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a Color instance from a hex string with a '#' prefix.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#fromHex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorStr` | `string` |
| `t?` | [`EsriColour`](geo_esri.EsriColour.md) |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1586

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a new Color instance, and initializes it with values from a JSON object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#fromJSON)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1592

___

### fromRgb

▸ `Static` **fromRgb**(`color`, `out?`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a Color instance from a string of the form "rgb()" or "rgba()".

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#fromRgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `out?` | [`EsriColour`](geo_esri.EsriColour.md) |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1598

___

### fromString

▸ `Static` **fromString**(`str`, `obj?`): [`EsriColour`](geo_esri.EsriColour.md)

Creates a Color instance by parsing a generic string.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Color.html#fromString)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `obj?` | [`EsriColour`](geo_esri.EsriColour.md) |

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1604
