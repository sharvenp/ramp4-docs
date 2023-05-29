[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/base-geometry](../modules/geo_api_graphic_geometry_base_geometry.md) / NoGeometry

# Class: NoGeometry

[geo/api/graphic/geometry/base-geometry](../modules/geo_api_graphic_geometry_base_geometry.md).NoGeometry

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`NoGeometry`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_base_geometry.NoGeometry.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_base_geometry.NoGeometry.md#id)
- [sr](geo_api_graphic_geometry_base_geometry.NoGeometry.md#sr)

### Accessors

- [type](geo_api_graphic_geometry_base_geometry.NoGeometry.md#type)

### Methods

- [childIdGenerator](geo_api_graphic_geometry_base_geometry.NoGeometry.md#childidgenerator)
- [geoJsonFactory](geo_api_graphic_geometry_base_geometry.NoGeometry.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_base_geometry.NoGeometry.md#invalid)
- [toESRI](geo_api_graphic_geometry_base_geometry.NoGeometry.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_base_geometry.NoGeometry.md#togeojson)

## Constructors

### constructor

• **new NoGeometry**()

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:69](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L69)

## Properties

### id

• `Readonly` **id**: `string`

Id of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[id](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#id)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L14)

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

Returns the type of the geometry object.
Function implementation in subclasses.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:72](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L72)

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
