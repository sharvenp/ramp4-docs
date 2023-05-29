[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/base-geometry](../modules/geo_api_graphic_geometry_base_geometry.md) / BaseGeometry

# Class: BaseGeometry

[geo/api/graphic/geometry/base-geometry](../modules/geo_api_graphic_geometry_base_geometry.md).BaseGeometry

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- **`BaseGeometry`**

  ↳ [`NoGeometry`](geo_api_graphic_geometry_base_geometry.NoGeometry.md)

  ↳ [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

  ↳ [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md)

  ↳ [`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md)

  ↳ [`PointSet`](geo_api_graphic_geometry_point_set.PointSet.md)

  ↳ [`Point`](geo_api_graphic_geometry_point.Point.md)

  ↳ [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#id)
- [sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

### Accessors

- [type](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#invalid)
- [toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

## Constructors

### constructor

• **new BaseGeometry**(`id`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L16)

## Properties

### id

• `Readonly` **id**: `string`

Id of the geometry

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L14)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the type of the geometry object.
Function implementation in subclasses.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

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

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L52)

___

### invalid

▸ **invalid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L45)

___

### toESRI

▸ **toESRI**(): [`EsriGeometry`](geo_esri.EsriGeometry.md)

#### Returns

[`EsriGeometry`](geo_esri.EsriGeometry.md)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L33)

___

### toGeoJSON

▸ **toGeoJSON**(): `DirectGeometryObject`

#### Returns

`DirectGeometryObject`

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L39)
