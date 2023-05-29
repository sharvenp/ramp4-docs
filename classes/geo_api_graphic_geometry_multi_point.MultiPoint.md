[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/multi-point](../modules/geo_api_graphic_geometry_multi_point.md) / MultiPoint

# Class: MultiPoint

[geo/api/graphic/geometry/multi-point](../modules/geo_api_graphic_geometry_multi_point.md).MultiPoint

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`PointSet`](geo_api_graphic_geometry_point_set.PointSet.md)

  ↳ **`MultiPoint`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_multi_point.MultiPoint.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_multi_point.MultiPoint.md#id)
- [rawArray](geo_api_graphic_geometry_multi_point.MultiPoint.md#rawarray)
- [sr](geo_api_graphic_geometry_multi_point.MultiPoint.md#sr)

### Accessors

- [length](geo_api_graphic_geometry_multi_point.MultiPoint.md#length)
- [pointArray](geo_api_graphic_geometry_multi_point.MultiPoint.md#pointarray)
- [type](geo_api_graphic_geometry_multi_point.MultiPoint.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_multi_point.MultiPoint.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_multi_point.MultiPoint.md#geojsonfactory)
- [getAt](geo_api_graphic_geometry_multi_point.MultiPoint.md#getat)
- [invalid](geo_api_graphic_geometry_multi_point.MultiPoint.md#invalid)
- [toArray](geo_api_graphic_geometry_multi_point.MultiPoint.md#toarray)
- [toESRI](geo_api_graphic_geometry_multi_point.MultiPoint.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_multi_point.MultiPoint.md#togeojson)
- [updateAt](geo_api_graphic_geometry_multi_point.MultiPoint.md#updateat)
- [fromESRI](geo_api_graphic_geometry_multi_point.MultiPoint.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_multi_point.MultiPoint.md#fromgeojson)
- [parsePointSet](geo_api_graphic_geometry_multi_point.MultiPoint.md#parsepointset)

## Constructors

### constructor

• **new MultiPoint**(`id`, `multiPoint`)

Constructs a MultiPoint from the given source of verticies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the MultiPoint |
| `multiPoint` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) | - |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L22)

• **new MultiPoint**(`id`, `listOfCoords`, `sr?`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfCoords` | `number`[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |
| `raw?` | `boolean` |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L24)

• **new MultiPoint**(`id`, `listOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L30)

• **new MultiPoint**(`id`, `listOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfXY` | `object`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L31)

• **new MultiPoint**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L32)

## Properties

### id

• `Readonly` **id**: `string`

Id of the geometry

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[id](geo_api_graphic_geometry_point_set.PointSet.md#id)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L14)

___

### rawArray

• `Protected` **rawArray**: `number`[][]

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[rawArray](geo_api_graphic_geometry_point_set.PointSet.md#rawarray)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L9)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[sr](geo_api_graphic_geometry_point_set.PointSet.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### length

• `get` **length**(): `number`

Returns the number of contained points.

#### Returns

`number`

#### Inherited from

PointSet.length

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L67)

___

### pointArray

• `get` **pointArray**(): [`Point`](geo_api_graphic_geometry_point.Point.md)[]

Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called.

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)[]

#### Inherited from

PointSet.pointArray

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L44)

___

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'MultiPoint'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

PointSet.type

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L38)

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

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[childIdGenerator](geo_api_graphic_geometry_point_set.PointSet.md#childidgenerator)

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

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[geoJsonFactory](geo_api_graphic_geometry_point_set.PointSet.md#geojsonfactory)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L52)

___

### getAt

▸ **getAt**(`n`): [`Point`](geo_api_graphic_geometry_point.Point.md)

Returns a copy of the n-th contained point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[getAt](geo_api_graphic_geometry_point_set.PointSet.md#getat)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L51)

___

### invalid

▸ **invalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[invalid](geo_api_graphic_geometry_point_set.PointSet.md#invalid)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L45)

___

### toArray

▸ **toArray**(): `number`[][]

Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )

#### Returns

`number`[][]

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[toArray](geo_api_graphic_geometry_point_set.PointSet.md#toarray)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L76)

___

### toESRI

▸ **toESRI**(): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[toESRI](geo_api_graphic_geometry_point_set.PointSet.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L56)

___

### toGeoJSON

▸ **toGeoJSON**(): `MultiPoint`

#### Returns

`MultiPoint`

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[toGeoJSON](geo_api_graphic_geometry_point_set.PointSet.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:75](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L75)

___

### updateAt

▸ **updateAt**(`point`, `n`): `void`

Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `object` \| `number`[] \| [`Point`](geo_api_graphic_geometry_point.Point.md) |
| `n` | `number` |

#### Returns

`void`

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[updateAt](geo_api_graphic_geometry_point_set.PointSet.md#updateat)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L61)

___

### fromESRI

▸ `Static` **fromESRI**(`esriMultiPoint`, `id?`): [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriMultiPoint` | [`EsriMultipoint`](geo_esri.EsriMultipoint.md) |
| `id?` | `string` \| `number` |

#### Returns

[`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L44)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonMultiPoint`, `id?`): [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonMultiPoint` | `MultiPoint` |
| `id?` | `string` \| `number` |

#### Returns

[`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-point.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-point.ts#L63)

___

### parsePointSet

▸ `Static` **parsePointSet**(`input`): `number`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`number`[][]

#### Inherited from

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[parsePointSet](geo_api_graphic_geometry_point_set.PointSet.md#parsepointset)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L83)
