[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/line-string](../modules/geo_api_graphic_geometry_line_string.md) / LineString

# Class: LineString

[geo/api/graphic/geometry/line-string](../modules/geo_api_graphic_geometry_line_string.md).LineString

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`PointSet`](geo_api_graphic_geometry_point_set.PointSet.md)

  ↳ **`LineString`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_line_string.LineString.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_line_string.LineString.md#id)
- [rawArray](geo_api_graphic_geometry_line_string.LineString.md#rawarray)
- [sr](geo_api_graphic_geometry_line_string.LineString.md#sr)

### Accessors

- [length](geo_api_graphic_geometry_line_string.LineString.md#length)
- [pointArray](geo_api_graphic_geometry_line_string.LineString.md#pointarray)
- [type](geo_api_graphic_geometry_line_string.LineString.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_line_string.LineString.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_line_string.LineString.md#geojsonfactory)
- [getAt](geo_api_graphic_geometry_line_string.LineString.md#getat)
- [invalid](geo_api_graphic_geometry_line_string.LineString.md#invalid)
- [toArray](geo_api_graphic_geometry_line_string.LineString.md#toarray)
- [toESRI](geo_api_graphic_geometry_line_string.LineString.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_line_string.LineString.md#togeojson)
- [updateAt](geo_api_graphic_geometry_line_string.LineString.md#updateat)
- [fromESRI](geo_api_graphic_geometry_line_string.LineString.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_line_string.LineString.md#fromgeojson)
- [parsePointSet](geo_api_graphic_geometry_line_string.LineString.md#parsepointset)

## Constructors

### constructor

• **new LineString**(`id`, `line`)

Constructs a LineString from the given source of a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the LineString |
| `line` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md) | - |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L24)

• **new LineString**(`id`, `multiPoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiPoint` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L25)

• **new LineString**(`id`, `listOfCoords`, `sr?`, `raw?`)

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

[src/geo/api/graphic/geometry/line-string.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L27)

• **new LineString**(`id`, `listOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L33)

• **new LineString**(`id`, `listOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfXY` | `object`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[constructor](geo_api_graphic_geometry_point_set.PointSet.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L34)

• **new LineString**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

PointSet.constructor

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:35](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L35)

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

Returns the string 'LineString'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

PointSet.type

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L44)

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

▸ **toESRI**(): [`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[toESRI](geo_api_graphic_geometry_point_set.PointSet.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:58](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L58)

___

### toGeoJSON

▸ **toGeoJSON**(): `LineString`

#### Returns

`LineString`

#### Overrides

[PointSet](geo_api_graphic_geometry_point_set.PointSet.md).[toGeoJSON](geo_api_graphic_geometry_point_set.PointSet.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:77](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L77)

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

▸ `Static` **fromESRI**(`esriLine`, `id?`): [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriLine` | [`EsriPolyline`](geo_esri.EsriPolyline.md) |
| `id?` | `string` \| `number` |

#### Returns

[`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L48)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonLine`, `id?`): [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonLine` | `LineString` |
| `id?` | `string` \| `number` |

#### Returns

[`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

#### Defined in

[src/geo/api/graphic/geometry/line-string.ts:65](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/line-string.ts#L65)

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
