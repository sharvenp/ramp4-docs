[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/point-set](../modules/geo_api_graphic_geometry_point_set.md) / PointSet

# Class: PointSet

[geo/api/graphic/geometry/point-set](../modules/geo_api_graphic_geometry_point_set.md).PointSet

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`PointSet`**

  ↳↳ [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

  ↳↳ [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)

  ↳↳ [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_point_set.PointSet.md#id)
- [rawArray](geo_api_graphic_geometry_point_set.PointSet.md#rawarray)
- [sr](geo_api_graphic_geometry_point_set.PointSet.md#sr)

### Accessors

- [length](geo_api_graphic_geometry_point_set.PointSet.md#length)
- [pointArray](geo_api_graphic_geometry_point_set.PointSet.md#pointarray)
- [type](geo_api_graphic_geometry_point_set.PointSet.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_point_set.PointSet.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_point_set.PointSet.md#geojsonfactory)
- [getAt](geo_api_graphic_geometry_point_set.PointSet.md#getat)
- [invalid](geo_api_graphic_geometry_point_set.PointSet.md#invalid)
- [toArray](geo_api_graphic_geometry_point_set.PointSet.md#toarray)
- [toESRI](geo_api_graphic_geometry_point_set.PointSet.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_point_set.PointSet.md#togeojson)
- [updateAt](geo_api_graphic_geometry_point_set.PointSet.md#updateat)
- [arrayDeepCopy](geo_api_graphic_geometry_point_set.PointSet.md#arraydeepcopy)
- [parsePointSet](geo_api_graphic_geometry_point_set.PointSet.md#parsepointset)

## Constructors

### constructor

• **new PointSet**(`id`, `pointSet`)

General constructor from a given source of verticies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the MultiPoint |
| `pointSet` | [`PointSet`](geo_api_graphic_geometry_point_set.PointSet.md) | - |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L20)

• **new PointSet**(`id`, `listOfCoords`, `sr?`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfCoords` | `number`[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |
| `raw?` | `boolean` |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L22)

• **new PointSet**(`id`, `listOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L28)

• **new PointSet**(`id`, `listOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfXY` | `object`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L29)

• **new PointSet**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L30)

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

• `Protected` **rawArray**: `number`[][]

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L9)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### length

• `get` **length**(): `number`

Returns the number of contained points.

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L67)

___

### pointArray

• `get` **pointArray**(): [`Point`](geo_api_graphic_geometry_point.Point.md)[]

Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called.

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)[]

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L44)

___

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the type of the geometry object.
Function implementation in subclasses.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Inherited from

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L25)

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

### getAt

▸ **getAt**(`n`): [`Point`](geo_api_graphic_geometry_point.Point.md)

Returns a copy of the n-th contained point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L51)

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

▸ **toArray**(): `number`[][]

Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )

#### Returns

`number`[][]

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L76)

___

### toESRI

▸ **toESRI**(): [`EsriGeometry`](geo_esri.EsriGeometry.md)

#### Returns

[`EsriGeometry`](geo_esri.EsriGeometry.md)

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L33)

___

### toGeoJSON

▸ **toGeoJSON**(): `DirectGeometryObject`

#### Returns

`DirectGeometryObject`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L39)

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

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L61)

___

### arrayDeepCopy

▸ `Static` `Private` **arrayDeepCopy**(`a`): `number`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[][] |

#### Returns

`number`[][]

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:95](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L95)

___

### parsePointSet

▸ `Static` **parsePointSet**(`input`): `number`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`number`[][]

#### Defined in

[src/geo/api/graphic/geometry/point-set.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/point-set.ts#L83)
