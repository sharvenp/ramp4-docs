[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/geo-common](../modules/geo_api_geo_common.md) / GeoCommonAPI

# Class: GeoCommonAPI

[geo/api/geo-common](../modules/geo_api_geo_common.md).GeoCommonAPI

## Table of contents

### Constructors

- [constructor](geo_api_geo_common.GeoCommonAPI.md#constructor)

### Properties

- [DEFAULT\_LAMBERT](geo_api_geo_common.GeoCommonAPI.md#default_lambert)
- [DEFAULT\_MERCATOR](geo_api_geo_common.GeoCommonAPI.md#default_mercator)
- [geom](geo_api_geo_common.GeoCommonAPI.md#geom)
- [proj](geo_api_geo_common.GeoCommonAPI.md#proj)
- [sharedUtils](geo_api_geo_common.GeoCommonAPI.md#sharedutils)

### Methods

- [defaultLODs](geo_api_geo_common.GeoCommonAPI.md#defaultlods)
- [defaultTileSchemas](geo_api_geo_common.GeoCommonAPI.md#defaulttileschemas)

## Constructors

### constructor

• **new GeoCommonAPI**()

#### Defined in

[src/geo/api/geo-common.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L15)

## Properties

### DEFAULT\_LAMBERT

• `Protected` **DEFAULT\_LAMBERT**: `string` = `'DEFAULT_NRCAN_Lambert_3978'`

#### Defined in

[src/geo/api/geo-common.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L9)

___

### DEFAULT\_MERCATOR

• `Protected` **DEFAULT\_MERCATOR**: `string` = `'DEFAULT_ESRI_World_AuxMerc_3857'`

#### Defined in

[src/geo/api/geo-common.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L8)

___

### geom

• **geom**: [`GeometryAPI`](geo_api_graphic_geometry_geometry.GeometryAPI.md)

#### Defined in

[src/geo/api/geo-common.ts:12](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L12)

___

### proj

• **proj**: [`ProjectionAPI`](geo_api_utils_projection.ProjectionAPI.md)

#### Defined in

[src/geo/api/geo-common.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L11)

___

### sharedUtils

• **sharedUtils**: [`SharedUtilsAPI`](geo_api_utils_shared_utils.SharedUtilsAPI.md)

#### Defined in

[src/geo/api/geo-common.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L13)

## Methods

### defaultLODs

▸ **defaultLODs**(`keycode`): [`RampLodConfig`](../interfaces/geo_api_geo_defs.RampLodConfig.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `keycode` | `string` |

#### Returns

[`RampLodConfig`](../interfaces/geo_api_geo_defs.RampLodConfig.md)[]

#### Defined in

[src/geo/api/geo-common.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L25)

___

### defaultTileSchemas

▸ **defaultTileSchemas**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/geo/api/geo-common.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/geo-common.ts#L21)
