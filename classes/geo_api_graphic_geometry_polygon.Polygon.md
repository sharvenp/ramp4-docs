[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/polygon](../modules/geo_api_graphic_geometry_polygon.md) / Polygon

# Class: Polygon

[geo/api/graphic/geometry/polygon](../modules/geo_api_graphic_geometry_polygon.md).Polygon

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`Polygon`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_polygon.Polygon.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_polygon.Polygon.md#id)
- [rawArray](geo_api_graphic_geometry_polygon.Polygon.md#rawarray)
- [sr](geo_api_graphic_geometry_polygon.Polygon.md#sr)

### Accessors

- [ringArray](geo_api_graphic_geometry_polygon.Polygon.md#ringarray)
- [type](geo_api_graphic_geometry_polygon.Polygon.md#type)

### Methods

- [addLinearRings](geo_api_graphic_geometry_polygon.Polygon.md#addlinearrings)
- [childIdGenerator](geo_api_graphic_geometry_polygon.Polygon.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_polygon.Polygon.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_polygon.Polygon.md#invalid)
- [toArray](geo_api_graphic_geometry_polygon.Polygon.md#toarray)
- [toESRI](geo_api_graphic_geometry_polygon.Polygon.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_polygon.Polygon.md#togeojson)
- [arrayDeepCopy](geo_api_graphic_geometry_polygon.Polygon.md#arraydeepcopy)
- [fromESRI](geo_api_graphic_geometry_polygon.Polygon.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_polygon.Polygon.md#fromgeojson)
- [parsePolygon](geo_api_graphic_geometry_polygon.Polygon.md#parsepolygon)

## Constructors

### constructor

• **new Polygon**(`id`, `polygon`)

Constructs a LinearRing from the given source of a line. Will close the line if it's not already closed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the LineString |
| `polygon` | [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md) | - |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L29)

• **new Polygon**(`id`, `multiLine`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiLine` | [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L30)

• **new Polygon**(`id`, `linearRing`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `linearRing` | [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L32)

• **new Polygon**(`id`, `line`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `line` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L33)

• **new Polygon**(`id`, `multiPoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiPoint` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L34)

• **new Polygon**(`id`, `listOfListOfCoords`, `sr?`, `raw?`)

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

[src/geo/api/graphic/geometry/polygon.ts:36](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L36)

• **new Polygon**(`id`, `listOfListOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfListOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L42)

• **new Polygon**(`id`, `listOfListOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfListOfXY` | `object`[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L43)

• **new Polygon**(`id`, `listOfLinearRings`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfLinearRings` | [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L44)

• **new Polygon**(`id`, `listOfLines`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfLines` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L45)

• **new Polygon**(`id`, `listOfMultiPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMultiPoints` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L46)

• **new Polygon**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L47)

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

[src/geo/api/graphic/geometry/polygon.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L18)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### ringArray

• `get` **ringArray**(): [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)[]

Returns an array of the contained rings. A new array is returned each time this is called.

#### Returns

[`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)[]

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:72](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L72)

___

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'Polygon'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:80](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L80)

## Methods

### addLinearRings

▸ **addLinearRings**(`linearRings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearRings` | [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)[] |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L63)

___

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

▸ **toArray**(): `number`[][][]

Returns an array of ring arrays (e.g. [[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]] )

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:87](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L87)

___

### toESRI

▸ **toESRI**(): [`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:132](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L132)

___

### toGeoJSON

▸ **toGeoJSON**(): `Polygon`

#### Returns

`Polygon`

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:151](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L151)

___

### arrayDeepCopy

▸ `Static` **arrayDeepCopy**(`a`): `number`[][][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[][][] |

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L116)

___

### fromESRI

▸ `Static` **fromESRI**(`esriPoly`, `id?`): [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriPoly` | [`EsriPolygon`](geo_esri.EsriPolygon.md) |
| `id?` | `string` \| `number` |

#### Returns

[`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:123](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L123)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonPoly`, `id?`): [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonPoly` | `Polygon` |
| `id?` | `string` \| `number` |

#### Returns

[`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:139](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L139)

___

### parsePolygon

▸ `Static` **parsePolygon**(`input`): `number`[][][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/polygon.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/polygon.ts#L91)
