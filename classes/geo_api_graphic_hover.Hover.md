[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/hover](../modules/geo_api_graphic_hover.md) / Hover

# Class: Hover

[geo/api/graphic/hover](../modules/geo_api_graphic_hover.md).Hover

## Table of contents

### Constructors

- [constructor](geo_api_graphic_hover.Hover.md#constructor)

### Accessors

- [followCursor](geo_api_graphic_hover.Hover.md#followcursor)
- [id](geo_api_graphic_hover.Hover.md#id)
- [keepOpen](geo_api_graphic_hover.Hover.md#keepopen)
- [position](geo_api_graphic_hover.Hover.md#position)
- [text](geo_api_graphic_hover.Hover.md#text)
- [type](geo_api_graphic_hover.Hover.md#type)
- [xOffset](geo_api_graphic_hover.Hover.md#xoffset)
- [yOffset](geo_api_graphic_hover.Hover.md#yoffset)

## Constructors

### constructor

• **new Hover**(`id`, `text`, `opts?`)

Set the id and hovertip text. Also set any of the optional hovertip options if provided.

The different options and values available are the following:
<ul>
    <li>keepOpen:        true or false. default is false.
    <li>position:        'top', 'bottom', 'left' or 'right'. default is 'top'. (if followCursor is true, position value will be ignored.)
    <li>xOffset:         any number. default is 0.
    <li>yOffset:         any number. default is 0.
    <li>followCursor:    true or false. default is false. (if keepOpen is true, followCursor value will be ignored.)
</ul>

TODO: add option for position 'center' specifically used for polygons.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `text` | `string` |
| `opts?` | `HovertipOptions` |

#### Defined in

[src/geo/api/graphic/hover.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L45)

## Accessors

### followCursor

• `get` **followCursor**(): `boolean`

Returns true if the hovertip is meant to follow the cursor movement.

#### Returns

`boolean`

#### Defined in

[src/geo/api/graphic/hover.ts:98](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L98)

___

### id

• `get` **id**(): `string`

Returns the hovertip id.

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/hover.ts:68](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L68)

___

### keepOpen

• `get` **keepOpen**(): `boolean`

Returns true if the hovertip is meant to remain open.

#### Returns

`boolean`

#### Defined in

[src/geo/api/graphic/hover.ts:78](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L78)

___

### position

• `get` **position**(): `string`

Returns the default position of the hovertip.

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/hover.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L83)

___

### text

• `get` **text**(): `string`

Returns the contents of the hovertip.

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/hover.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L73)

___

### type

• `get` **type**(): `string`

Returns the string 'Hover'.

#### Returns

`string`

#### Defined in

[src/geo/api/graphic/hover.ts:103](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L103)

___

### xOffset

• `get` **xOffset**(): `number`

Returns the pixel offset on x of the hovertip.

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/hover.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L88)

___

### yOffset

• `get` **yOffset**(): `number`

Returns the pixel offset on y of the hovertip.

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/hover.ts:93](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/hover.ts#L93)
