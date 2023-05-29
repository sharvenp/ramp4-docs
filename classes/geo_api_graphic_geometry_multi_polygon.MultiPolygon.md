[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/multi-polygon](../modules/geo_api_graphic_geometry_multi_polygon.md) / MultiPolygon

# Class: MultiPolygon

[geo/api/graphic/geometry/multi-polygon](../modules/geo_api_graphic_geometry_multi_polygon.md).MultiPolygon

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`MultiPolygon`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#id)
- [rawArray](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#rawarray)
- [sr](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#sr)

### Accessors

- [polygonArray](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#polygonarray)
- [type](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#type)

### Methods

- [addPolygon](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#addpolygon)
- [childIdGenerator](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#invalid)
- [toArray](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#toarray)
- [toESRI](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#togeojson)
- [arrayDeepCopy](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#arraydeepcopy)
- [fromESRI](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#fromgeojson)
- [parseMultiPolygon](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md#parsemultipolygon)

## Constructors

### constructor

• **new MultiPolygon**(`id`, `multiPolygon`)

Constructs a MultiPolygon from the given source of polygons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the MultiPolygon |
| `multiPolygon` | [`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md) | - |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L30)

• **new MultiPolygon**(`id`, `polygon`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `polygon` | [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L32)

• **new MultiPolygon**(`id`, `multiLine`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiLine` | [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L33)

• **new MultiPolygon**(`id`, `linearRing`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `linearRing` | [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L34)

• **new MultiPolygon**(`id`, `line`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `line` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:35](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L35)

• **new MultiPolygon**(`id`, `multiPoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `multiPoint` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:36](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L36)

• **new MultiPolygon**(`id`, `listOflistOfListOfCoords`, `sr?`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfListOfCoords` | `number`[][][][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |
| `raw?` | `boolean` |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L38)

• **new MultiPolygon**(`id`, `listOflistOfListOfPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfListOfPoints` | [`Point`](geo_api_graphic_geometry_point.Point.md)[][][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L44)

• **new MultiPolygon**(`id`, `listOflistOfListOfXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfListOfXY` | `object`[][][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L49)

• **new MultiPolygon**(`id`, `listOfPolygons`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfPolygons` | [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L54)

• **new MultiPolygon**(`id`, `listOflistOfLinearRings`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfLinearRings` | [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md)[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:55](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L55)

• **new MultiPolygon**(`id`, `listOflistOfLines`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfLines` | [`LineString`](geo_api_graphic_geometry_line_string.LineString.md)[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L60)

• **new MultiPolygon**(`id`, `listOflistOfMultiPoints`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOflistOfMultiPoints` | [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md)[][] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:65](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L65)

• **new MultiPolygon**(`id`, `listOfMixedFormats`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `listOfMixedFormats` | `any`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:70](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L70)

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

• `Protected` **rawArray**: `number`[][][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L19)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### polygonArray

• `get` **polygonArray**(): [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)[]

Returns an array of the contained polygons. A new array is returned each time this is called.

#### Returns

[`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)[]

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:92](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L92)

___

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'MultiPolygon'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:99](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L99)

## Methods

### addPolygon

▸ **addPolygon**(`polygon`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `polygon` | [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L83)

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

▸ **toArray**(): `number`[][][][]

Returns an array of polygon arrays (e.g. [[[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]], [<another polygon>]] )

#### Returns

`number`[][][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L106)

___

### toESRI

▸ **toESRI**(): [`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:152](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L152)

___

### toGeoJSON

▸ **toGeoJSON**(): `MultiPolygon`

#### Returns

`MultiPolygon`

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:181](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L181)

___

### arrayDeepCopy

▸ `Static` **arrayDeepCopy**(`a`): `number`[][][][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[][][][] |

#### Returns

`number`[][][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:135](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L135)

___

### fromESRI

▸ `Static` **fromESRI**(`esriPoly`, `id?`): [`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriPoly` | [`EsriPolygon`](geo_esri.EsriPolygon.md) |
| `id?` | `string` \| `number` |

#### Returns

[`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:143](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L143)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonMultiPoly`, `id?`): [`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonMultiPoly` | `MultiPolygon` |
| `id?` | `string` \| `number` |

#### Returns

[`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md)

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L169)

___

### parseMultiPolygon

▸ `Static` **parseMultiPolygon**(`input`): `number`[][][][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`number`[][][][]

#### Defined in

[src/geo/api/graphic/geometry/multi-polygon.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/multi-polygon.ts#L110)
