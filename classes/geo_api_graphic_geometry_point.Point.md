[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/point](../modules/geo_api_graphic_geometry_point.md) / Point

# Class: Point

[geo/api/graphic/geometry/point](../modules/geo_api_graphic_geometry_point.md).Point

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`Point`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_point.Point.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_point.Point.md#id)
- [rawArray](geo_api_graphic_geometry_point.Point.md#rawarray)
- [sr](geo_api_graphic_geometry_point.Point.md#sr)

### Accessors

- [type](geo_api_graphic_geometry_point.Point.md#type)
- [x](geo_api_graphic_geometry_point.Point.md#x)
- [y](geo_api_graphic_geometry_point.Point.md#y)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_point.Point.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_point.Point.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_point.Point.md#invalid)
- [toArray](geo_api_graphic_geometry_point.Point.md#toarray)
- [toESRI](geo_api_graphic_geometry_point.Point.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_point.Point.md#togeojson)
- [fromESRI](geo_api_graphic_geometry_point.Point.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_point.Point.md#fromgeojson)
- [parseXY](geo_api_graphic_geometry_point.Point.md#parsexy)

## Constructors

### constructor

• **new Point**(`id`, `point`)

Constructs a Point from the given XY or XYLiteral.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the Point |
| `point` | [`Point`](geo_api_graphic_geometry_point.Point.md) | - |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/point.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L21)

• **new Point**(`id`, `coords`, `sr?`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `coords` | `number`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |
| `raw?` | `boolean` |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L22)

• **new Point**(`id`, `xy`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `xy` | `object` |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L23)

## Properties

### id

• `Readonly` **id**: `string`

Id of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[id](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#id)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L14)

___

### rawArray

• `Protected` **rawArray**: `number`[]

#### Defined in

[src/geo/api/graphic/geometry/point.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L11)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'Point'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/point.ts:35](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L35)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/point.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L39)

• `set` **x**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/geometry/point.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L42)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/point.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L46)

• `set` **y**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/geometry/point.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L49)

## Methods

### childIdGenerator

▸ `Protected` **childIdGenerator**(`idx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`string`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[childIdGenerator](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#childidgenerator)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L29)

___

### geoJsonFactory

▸ `Protected` **geoJsonFactory**(`type`, `coords`): `DirectGeometryObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `coords` | `any`[] |

#### Returns

`DirectGeometryObject`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[geoJsonFactory](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#geojsonfactory)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L52)

___

### invalid

▸ **invalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[invalid](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#invalid)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L45)

___

### toArray

▸ **toArray**(): `number`[]

Returns a 2-element array with values x and y (i.e. [x, y])

#### Returns

`number`[]

#### Defined in

[src/geo/api/graphic/geometry/point.ts:57](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L57)

___

### toESRI

▸ **toESRI**(): [`EsriPoint`](geo_esri.EsriPoint.md)

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/point.ts:99](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L99)

___

### toGeoJSON

▸ **toGeoJSON**(): `Point`

#### Returns

`Point`

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/point.ts:119](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L119)

___

### fromESRI

▸ `Static` **fromESRI**(`esriPoint`, `id?`): [`Point`](geo_api_graphic_geometry_point.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriPoint` | [`EsriPoint`](geo_esri.EsriPoint.md) |
| `id?` | `string` \| `number` |

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

#### Defined in

[src/geo/api/graphic/geometry/point.ts:90](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L90)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonPoint`, `id?`): [`Point`](geo_api_graphic_geometry_point.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonPoint` | `Point` |
| `id?` | `string` \| `number` |

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

#### Defined in

[src/geo/api/graphic/geometry/point.ts:107](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L107)

___

### parseXY

▸ `Static` **parseXY**(`input`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`number`[]

#### Defined in

[src/geo/api/graphic/geometry/point.ts:62](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point.ts#L62)
