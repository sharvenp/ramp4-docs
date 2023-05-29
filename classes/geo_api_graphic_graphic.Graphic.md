[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/graphic](../modules/geo_api_graphic_graphic.md) / Graphic

# Class: Graphic

[geo/api/graphic/graphic](../modules/geo_api_graphic_graphic.md).Graphic

## Table of contents

### Constructors

- [constructor](geo_api_graphic_graphic.Graphic.md#constructor)

### Properties

- [\_hover](geo_api_graphic_graphic.Graphic.md#_hover)
- [attributes](geo_api_graphic_graphic.Graphic.md#attributes)
- [geometry](geo_api_graphic_graphic.Graphic.md#geometry)
- [id](geo_api_graphic_graphic.Graphic.md#id)
- [style](geo_api_graphic_graphic.Graphic.md#style)

### Accessors

- [hover](geo_api_graphic_graphic.Graphic.md#hover)

### Methods

- [removeHover](geo_api_graphic_graphic.Graphic.md#removehover)

## Constructors

### constructor

• **new Graphic**(`geom`, `id?`, `attribs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) |
| `id?` | `string` |
| `attribs?` | [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md) |

#### Defined in

[src/geo/api/graphic/graphic.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L19)

## Properties

### \_hover

• `Private` **\_hover**: `undefined` \| [`Hover`](geo_api_graphic_hover.Hover.md)

#### Defined in

[src/geo/api/graphic/graphic.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L33)

___

### attributes

• **attributes**: [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md)

#### Defined in

[src/geo/api/graphic/graphic.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L14)

___

### geometry

• **geometry**: [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

#### Defined in

[src/geo/api/graphic/graphic.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L15)

___

### id

• **id**: `string`

#### Defined in

[src/geo/api/graphic/graphic.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L17)

___

### style

• **style**: `undefined` \| [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

#### Defined in

[src/geo/api/graphic/graphic.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L16)

## Accessors

### hover

• `get` **hover**(): `undefined` \| [`Hover`](geo_api_graphic_hover.Hover.md)

Returns the hovertip for the graphic, if any.

#### Returns

`undefined` \| [`Hover`](geo_api_graphic_hover.Hover.md)

#### Defined in

[src/geo/api/graphic/graphic.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L39)

• `set` **hover**(`hover`): `void`

Adds a hovertip to the graphic. If one already exists, replace it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hover` | `undefined` \| [`Hover`](geo_api_graphic_hover.Hover.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/graphic.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L44)

## Methods

### removeHover

▸ **removeHover**(): `void`

Removes the hovertip from the graphic if it exists.

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/graphic.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/graphic.ts#L53)
