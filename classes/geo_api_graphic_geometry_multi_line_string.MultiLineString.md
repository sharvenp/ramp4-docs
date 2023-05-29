[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/multi-line-string](../modules/geo_api_graphic_geometry_multi_line_string.md) / MultiLineString

# Class: MultiLineString

[geo/api/graphic/geometry/multi-line-string](../modules/geo_api_graphic_geometry_multi_line_string.md).MultiLineString

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`MultiLineString`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#id)
- [rawArray](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#rawarray)
- [sr](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#sr)

### Accessors

- [length](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#length)
- [lineArray](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#linearray)
- [type](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#geojsonfactory)
- [getAt](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#getat)
- [invalid](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#invalid)
- [toArray](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#toarray)
- [toESRI](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#togeojson)
- [updateAt](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#updateat)
- [arrayDeepCopy](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#arraydeepcopy)
- [fromESRI](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_multi_line_string.MultiLineString.md#fromgeojson)

## Constructors

### constructor

• **new MultiLineString**(`id`, `multiLine`)

Constructs a MultiLineString from the given source of lines

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the MultiLineString |
| `multiLine` | [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md) | - |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L27)

• **new MultiLineString**(`id`, `line`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `line` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L29)

• **new MultiLineString**(`id`, `multiPoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiPoint` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L30)

• **new MultiLineString**(`id`, `listOfListOfCoords`, `sr?`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfListOfCoords` | `number`[][][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |
| `raw?` | `boolean` |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L32)

• **new MultiLineString**(`id`, `listOfLines`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfLines` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L38)

• **new MultiLineString**(`id`, `listOfMultiPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMultiPoints` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L39)

• **new MultiLineString**(`id`, `listOfListOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfListOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L40)

• **new MultiLineString**(`id`, `listOfListOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfListOfXY` | `object`[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L41)

• **new MultiLineString**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L42)

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

• `Protected` **rawArray**: `number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L16)

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

Returns the number of contained lines.

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:105](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L105)

___

### lineArray

• `get` **lineArray**(): [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)[]

Returns an array of the contained lines formatted as API LineString objects. A new array is returned each time this is called.

#### Returns

[`LineString`](geo_api_graphic_geometry_line_string.LineString.md)[]

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:74](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L74)

___

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'MultiLineString'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L110)

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

▸ **getAt**(`n`): [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

Returns a copy of the n-th contained line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`LineString`](geo_api_graphic_geometry_line_string.LineString.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L82)

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

▸ **toArray**(): `number`[][][]

Returns an array of line arrays (e.g. [[[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]] )

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L117)

___

### toESRI

▸ **toESRI**(): [`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:140](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L140)

___

### toGeoJSON

▸ **toGeoJSON**(): `MultiLineString`

#### Returns

`MultiLineString`

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:159](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L159)

___

### updateAt

▸ **updateAt**(`line`, `n`): `void`

Will update the n-th contained line with the values of the line parameter. It is assumed the line is in the same spatial reference as the Multipoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `number`[][] \| [`PointSet`](geo_api_graphic_geometry_point_set.PointSet.md) \| [`Point`](geo_api_graphic_geometry_point.Point.md)[][] \| `object`[][] |
| `n` | `number` |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:92](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L92)

___

### arrayDeepCopy

▸ `Static` `Private` **arrayDeepCopy**(`a`): `number`[][][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[][][] |

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L121)

___

### fromESRI

▸ `Static` **fromESRI**(`esriLine`, `id?`): [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriLine` | [`EsriPolyline`](geo_esri.EsriPolyline.md) |
| `id?` | `string` \| `number` |

#### Returns

[`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:128](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L128)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonMultiLine`, `id?`): [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonMultiLine` | `MultiLineString` |
| `id?` | `string` \| `number` |

#### Returns

[`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-line-string.ts:147](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-line-string.ts#L147)
