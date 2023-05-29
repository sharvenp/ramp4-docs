[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/style/colour](../modules/geo_api_graphic_style_colour.md) / Colour

# Class: Colour

[geo/api/graphic/style/colour](../modules/geo_api_graphic_style_colour.md).Colour

## Table of contents

### Constructors

- [constructor](geo_api_graphic_style_colour.Colour.md#constructor)

### Properties

- [c](geo_api_graphic_style_colour.Colour.md#c)

### Accessors

- [a](geo_api_graphic_style_colour.Colour.md#a)
- [b](geo_api_graphic_style_colour.Colour.md#b)
- [g](geo_api_graphic_style_colour.Colour.md#g)
- [hex](geo_api_graphic_style_colour.Colour.md#hex)
- [r](geo_api_graphic_style_colour.Colour.md#r)
- [rgba](geo_api_graphic_style_colour.Colour.md#rgba)

### Methods

- [toArcServer](geo_api_graphic_style_colour.Colour.md#toarcserver)
- [toESRI](geo_api_graphic_style_colour.Colour.md#toesri)
- [hexToInt](geo_api_graphic_style_colour.Colour.md#hextoint)
- [intToHex](geo_api_graphic_style_colour.Colour.md#inttohex)

## Constructors

### constructor

• **new Colour**(`colour?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colour?` | `string` \| [`ColourParams`](../interfaces/geo_api_geo_defs.ColourParams.md) \| (`string` \| `number`)[] |

#### Defined in

[src/geo/api/graphic/style/colour.ts:7](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L7)

## Properties

### c

• `Protected` **c**: `number`[]

#### Defined in

[src/geo/api/graphic/style/colour.ts:5](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L5)

## Accessors

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/colour.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L83)

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/colour.ts:79](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L79)

___

### g

• `get` **g**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/colour.ts:75](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L75)

___

### hex

• `get` **hex**(): `string`

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/style/colour.ts:65](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L65)

___

### r

• `get` **r**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/colour.ts:71](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L71)

___

### rgba

• `get` **rgba**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/geo/api/graphic/style/colour.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L61)

## Methods

### toArcServer

▸ **toArcServer**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/geo/api/graphic/style/colour.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L91)

___

### toESRI

▸ **toESRI**(): [`EsriColour`](geo_esri.EsriColour.md)

#### Returns

[`EsriColour`](geo_esri.EsriColour.md)

#### Defined in

[src/geo/api/graphic/style/colour.ts:87](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L87)

___

### hexToInt

▸ `Static` **hexToInt**(`twoCharHex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twoCharHex` | `string` |

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/style/colour.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L96)

___

### intToHex

▸ `Static` **intToHex**(`num`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/style/colour.ts:100](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/style/colour.ts#L100)
