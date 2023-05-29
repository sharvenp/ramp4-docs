[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/utils/projection](../modules/geo_api_utils_projection.md) / ProjectionAPI

# Class: ProjectionAPI

[geo/api/utils/projection](../modules/geo_api_utils_projection.md).ProjectionAPI

## Table of contents

### Constructors

- [constructor](geo_api_utils_projection.ProjectionAPI.md#constructor)

### Properties

- [espgWorker](geo_api_utils_projection.ProjectionAPI.md#espgworker)

### Methods

- [addProjection](geo_api_utils_projection.ProjectionAPI.md#addprojection)
- [checkProj](geo_api_utils_projection.ProjectionAPI.md#checkproj)
- [checkProjBomber](geo_api_utils_projection.ProjectionAPI.md#checkprojbomber)
- [defaultEpsgLookup](geo_api_utils_projection.ProjectionAPI.md#defaultepsglookup)
- [epsgLookup](geo_api_utils_projection.ProjectionAPI.md#epsglookup)
- [normalizeProj](geo_api_utils_projection.ProjectionAPI.md#normalizeproj)
- [projectExtent](geo_api_utils_projection.ProjectionAPI.md#projectextent)
- [projectGeoJson](geo_api_utils_projection.ProjectionAPI.md#projectgeojson)
- [projectGeometry](geo_api_utils_projection.ProjectionAPI.md#projectgeometry)
- [setEpsgLookup](geo_api_utils_projection.ProjectionAPI.md#setepsglookup)

## Constructors

### constructor

• **new ProjectionAPI**()

#### Defined in

[src/geo/api/utils/projection.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L24)

## Properties

### espgWorker

• `Protected` **espgWorker**: [`EpsgLookup`](../interfaces/geo_api_geo_defs.EpsgLookup.md)

#### Defined in

[src/geo/api/utils/projection.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L22)

## Methods

### addProjection

▸ **addProjection**(`code`, `proj4formula`): `void`

Add a projection definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` \| `number` | the projection code to add. |
| `proj4formula` | `string` | the formula for the projection. |

#### Returns

`void`

#### Defined in

[src/geo/api/utils/projection.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L67)

___

### checkProj

▸ **checkProj**(`spatialReference`): `Promise`<`boolean`\>

Check whether or not a spatialReference is supported by proj4 library. Attempt to load from epsg source if not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spatialReference` | `any` | to be checked to see if it's supported by proj4. Can be ESRI SR object or a EPSG string. |

#### Returns

`Promise`<`boolean`\>

true if proj was defined or was able to download definition. false if out of luck

#### Defined in

[src/geo/api/utils/projection.ts:157](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L157)

___

### checkProjBomber

▸ **checkProjBomber**(`spatialReferences`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spatialReferences` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/api/utils/projection.ts:232](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L232)

___

### defaultEpsgLookup

▸ `Private` **defaultEpsgLookup**(`code`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/geo/api/utils/projection.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L73)

___

### epsgLookup

▸ **epsgLookup**(`code`): `Promise`<`string`\>

Fetch a projection string from an EPSG service

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` \| `number` | an EPSG projection code to look up |

#### Returns

`Promise`<`string`\>

resolves with proj4 projection string, or rejects if not found

#### Defined in

[src/geo/api/utils/projection.ts:109](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L109)

___

### normalizeProj

▸ **normalizeProj**(`proj`): `string`

Convert a projection to an string that is compatible with proj4.  If it is an ESRI SpatialReference or an integer it will be converted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proj` | `any` | an ESRI SpatialReference, integer or string. Strings will be unchanged and unchecked, ints and SpatialReference objects will be converted. |

#### Returns

`string`

A string in the form EPSG:#### or a WKT

#### Defined in

[src/geo/api/utils/projection.ts:133](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L133)

___

### projectExtent

▸ **projectExtent**(`destProj`, `extent`): `Promise`<[`Extent`](geo_api_graphic_geometry_extent.Extent.md)\>

Reproject an Extent object on the client.  Does not require network traffic,
but may not handle conversion between projection types as well.
Internally it tests 8 points along each edge and takes the max extent of the result.
To project an extent without warping, convert to a polygon and do a standard geometry projection
(result will not be guaranteed to retain Extent characteristics)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destProj` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) | the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string) |
| `extent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | to reproject |

#### Returns

`Promise`<[`Extent`](geo_api_graphic_geometry_extent.Extent.md)\>

resolves with the reprojected extent

#### Defined in

[src/geo/api/utils/projection.ts:354](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L354)

___

### projectGeoJson

▸ **projectGeoJson**(`geoJson`, `inputSR`, `outputSR`): `Promise`<`any`\>

Reproject a GeoJSON object in place.
Note the .crs of the object will not be updated or corrected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJson` | `any` |
| `inputSR` | `string` \| `number` |
| `outputSR` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

resolves with projected geoJson

#### Defined in

[src/geo/api/utils/projection.ts:262](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L262)

___

### projectGeometry

▸ **projectGeometry**(`destProj`, `geometry`): `Promise`<[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)\>

Project a geometry using local calculations (proj4)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destProj` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) | the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string) |
| `geometry` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | a RAMP API Geometry object |

#### Returns

`Promise`<[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)\>

resolve in a RAMP API Geometry object with co-ordinates in the destination projection

#### Defined in

[src/geo/api/utils/projection.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L304)

___

### setEpsgLookup

▸ **setEpsgLookup**(`lookupFunction`): `void`

Provide an alternate lookup function to find proj4 projection strings based off EPSG codes. Be aware this setting
is page-wide, and will impact any instance of RAMP running.
Function signature should be `f(code: string | number): Promise<string>`.
The function should be able to parse codes that are
- just the integer part of an EPSG code (e.g. 1234)
- a string in EPSG format (e.g. 'EPSG:1234')
- a string in URN format (e.g. 'urn:ogc:def:crs:EPSG::1234')

#### Parameters

| Name | Type |
| :------ | :------ |
| `lookupFunction` | [`EpsgLookup`](../interfaces/geo_api_geo_defs.EpsgLookup.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/utils/projection.ts:123](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/projection.ts#L123)
