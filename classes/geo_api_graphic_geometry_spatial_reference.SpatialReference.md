[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/spatial-reference](../modules/geo_api_graphic_geometry_spatial_reference.md) / SpatialReference

# Class: SpatialReference

[geo/api/graphic/geometry/spatial-reference](../modules/geo_api_graphic_geometry_spatial_reference.md).SpatialReference

Represents a geographical spatial reference.

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#constructor)

### Properties

- [latestWkid](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#latestwkid)
- [wkid](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#wkid)
- [wkt](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#wkt)

### Methods

- [clone](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#clone)
- [isEqual](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#isequal)
- [isWebMercator](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#iswebmercator)
- [lean](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#lean)
- [toESRI](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#togeojson)
- [fromConfig](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#fromconfig)
- [fromESRI](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#fromgeojson)
- [latLongSR](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#latlongsr)
- [parseGeoJsonCrs](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#parsegeojsoncrs)
- [parseSR](geo_api_graphic_geometry_spatial_reference.SpatialReference.md#parsesr)

## Constructors

### constructor

• **new SpatialReference**(`wkid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wkid` | `number` |

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L18)

• **new SpatialReference**(`wkid`, `latestWkid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wkid` | `number` |
| `latestWkid` | `number` |

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L19)

• **new SpatialReference**(`wkt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wkt` | `string` |

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L20)

## Properties

### latestWkid

• **latestWkid**: `undefined` \| `number`

Latest well known id. This optional property allows updated wkid values to be leveraged when standards change

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L13)

___

### wkid

• **wkid**: `undefined` \| `number`

Well known id. This generally corresponds to an EPSG code or an ESRI wkid number

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:10](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L10)

___

### wkt

• **wkt**: `undefined` \| `string`

Well known type.

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L16)

## Methods

### clone

▸ **clone**(): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:55](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L55)

___

### isEqual

▸ **isEqual**(`otherSR`): `boolean`

Returns the another spatial reference is the same as this one

**`Method`**

isEqual

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherSR` | [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md) | spatial reference to compare to |

#### Returns

`boolean`

result of the comparison

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L40)

___

### isWebMercator

▸ **isWebMercator**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:79](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L79)

___

### lean

▸ **lean**(): `object`

#### Returns

`object`

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L63)

___

### toESRI

▸ **toESRI**(): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Returns

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:139](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L139)

___

### toGeoJSON

▸ **toGeoJSON**(): `NamedCoordinateReferenceSystem`

#### Returns

`NamedCoordinateReferenceSystem`

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:196](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L196)

___

### fromConfig

▸ `Static` **fromConfig**(`srObject`): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Returns a spatial ref object from a config typed object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srObject` | `any` | config spatial reference object |

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

spatial reference object with same settings as input

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:103](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L103)

___

### fromESRI

▸ `Static` **fromESRI**(`esriSR`): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriSR` | [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md) |

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:126](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L126)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`crs`): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `crs` | `undefined` \| `CoordinateReferenceSystem` |

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:143](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L143)

___

### latLongSR

▸ `Static` **latLongSR**(): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Returns a spatial reference for Lat Long projection

**`Static`**

**`Method`**

latLongSR

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

the initialized spatial reference

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:94](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L94)

___

### parseGeoJsonCrs

▸ `Static` **parseGeoJsonCrs**(`crs`): `string`

Convert a GeoJSON styled co-ord reference to an EPSG styled string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `crs` | `undefined` \| `CoordinateReferenceSystem` | GeoJSON crs object |

#### Returns

`string`

EPSG projection string, either EPSG code or wkt

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:161](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L161)

___

### parseSR

▸ `Static` **parseSR**(`sr?`): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Defined in

[src/geo/api/graphic/geometry/spatial-reference.ts:114](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/spatial-reference.ts#L114)
