[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/query](../modules/geo_utils_query.md) / QueryAPI

# Class: QueryAPI

[geo/utils/query](../modules/geo_utils_query.md).QueryAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`QueryAPI`**

## Table of contents

### Constructors

- [constructor](geo_utils_query.QueryAPI.md#constructor)

### Properties

- [$iApi](geo_utils_query.QueryAPI.md#$iapi)

### Accessors

- [$element](geo_utils_query.QueryAPI.md#$element)
- [$vApp](geo_utils_query.QueryAPI.md#$vapp)

### Methods

- [arcGisServerQueryIds](geo_utils_query.QueryAPI.md#arcgisserverqueryids)
- [geoJsonQuery](geo_utils_query.QueryAPI.md#geojsonquery)
- [makeClickBuffer](geo_utils_query.QueryAPI.md#makeclickbuffer)
- [queryGeometryHelper](geo_utils_query.QueryAPI.md#querygeometryhelper)

## Constructors

### constructor

• **new QueryAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/utils/query.ts:26](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/query.ts#L26)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[APIScope](api_common.APIScope.md).[$iApi](api_common.APIScope.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

APIScope.$element

#### Defined in

[src/api/common.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L31)

___

### $vApp

• `get` **$vApp**(): `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

The instance of Vue R4MP application controlled by this InstanceAPI.
This is just a shorthand for `this.$iApi.$vApp`.

**`Memberof`**

APIScope

#### Returns

`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

#### Inherited from

APIScope.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

## Methods

### arcGisServerQueryIds

▸ **arcGisServerQueryIds**(`options`): `Promise`<`number`[]\>

Gets an array of OIDs from an arcgis server feature source that satisfy a query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`QueryFeaturesArcServerParams`](../interfaces/geo_api_geo_defs.QueryFeaturesArcServerParams.md) | contains properties that define the query and specificy request particulars. |

#### Returns

`Promise`<`number`[]\>

resolves with array of object ids.

#### Defined in

[src/geo/utils/query.ts:36](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/query.ts#L36)

___

### geoJsonQuery

▸ **geoJsonQuery**(`options`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

Gets an array of graphics from a locally stored feature layer (file, geojson) that satisfy a query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`QueryFeaturesFileParams`](../interfaces/geo_utils_query.QueryFeaturesFileParams.md) | contains properties that define the query and specificy request particulars. |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

resolves with array of graphic result objects.

#### Defined in

[src/geo/utils/query.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/query.ts#L67)

___

### makeClickBuffer

▸ **makeClickBuffer**(`point`, `tolerance?`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

Create an extent centered around a point, that is appropriate for the current map scale.

**`Function`**

makeClickBuffer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](geo_api_graphic_geometry_point.Point.md) | `undefined` | point on the map for extent center |
| `tolerance` | `number` | `5` | optional. distance in pixels from mouse point that qualifies as a hit. default is 5 |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

an extent of desired size and location

#### Defined in

[src/geo/utils/query.ts:168](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/query.ts#L168)

___

### queryGeometryHelper

▸ `Private` **queryGeometryHelper**(`geometry`, `isFileLayer`, `mapScale?`, `sourceSR?`): [`EsriGeometry`](geo_esri.EsriGeometry.md)

Helper function to modify input geometries for queries. Will attempt to avoid various pitfalls,
usually around projections

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | the geometry to be used in a query as a filter |
| `isFileLayer` | `boolean` | true if layer is not tied to an arcgis server |
| `mapScale?` | `number` | optional scale value of the map to help detect problem situations |
| `sourceSR?` | [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md) | optional spatial reference of the layer being queried to help detect problem situations |

#### Returns

[`EsriGeometry`](geo_esri.EsriGeometry.md)

returns the input geometry in the most appropriate form based on the inputs

#### Defined in

[src/geo/utils/query.ts:127](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/query.ts#L127)
