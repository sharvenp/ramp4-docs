[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/common-map](../modules/geo_map_common_map.md) / CommonMapAPI

# Class: CommonMapAPI

[geo/map/common-map](../modules/geo_map_common_map.md).CommonMapAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`CommonMapAPI`**

  ↳↳ [`OverviewMapAPI`](geo_map_overview_map.OverviewMapAPI.md)

  ↳↳ [`MapAPI`](geo_map_ramp_map.MapAPI.md)

## Table of contents

### Constructors

- [constructor](geo_map_common_map.CommonMapAPI.md#constructor)

### Properties

- [$iApi](geo_map_common_map.CommonMapAPI.md#$iapi)
- [\_basemapStore](geo_map_common_map.CommonMapAPI.md#_basemapstore)
- [\_rampExtentSet](geo_map_common_map.CommonMapAPI.md#_rampextentset)
- [\_rampSR](geo_map_common_map.CommonMapAPI.md#_rampsr)
- [\_targetDiv](geo_map_common_map.CommonMapAPI.md#_targetdiv)
- [\_viewPromise](geo_map_common_map.CommonMapAPI.md#_viewpromise)
- [created](geo_map_common_map.CommonMapAPI.md#created)
- [esriMap](geo_map_common_map.CommonMapAPI.md#esrimap)
- [esriView](geo_map_common_map.CommonMapAPI.md#esriview)
- [handlers](geo_map_common_map.CommonMapAPI.md#handlers)
- [pointZoomScale](geo_map_common_map.CommonMapAPI.md#pointzoomscale)

### Accessors

- [$element](geo_map_common_map.CommonMapAPI.md#$element)
- [$vApp](geo_map_common_map.CommonMapAPI.md#$vapp)
- [viewPromise](geo_map_common_map.CommonMapAPI.md#viewpromise)

### Methods

- [abstractError](geo_map_common_map.CommonMapAPI.md#abstracterror)
- [applyBasemap](geo_map_common_map.CommonMapAPI.md#applybasemap)
- [createMap](geo_map_common_map.CommonMapAPI.md#createmap)
- [createMapView](geo_map_common_map.CommonMapAPI.md#createmapview)
- [destroyMap](geo_map_common_map.CommonMapAPI.md#destroymap)
- [destroyMapView](geo_map_common_map.CommonMapAPI.md#destroymapview)
- [findBasemap](geo_map_common_map.CommonMapAPI.md#findbasemap)
- [geomToMapSR](geo_map_common_map.CommonMapAPI.md#geomtomapsr)
- [getCurrentBasemapId](geo_map_common_map.CommonMapAPI.md#getcurrentbasemapid)
- [getExtent](geo_map_common_map.CommonMapAPI.md#getextent)
- [getExtentSet](geo_map_common_map.CommonMapAPI.md#getextentset)
- [getPixelHeight](geo_map_common_map.CommonMapAPI.md#getpixelheight)
- [getPixelWidth](geo_map_common_map.CommonMapAPI.md#getpixelwidth)
- [getResolution](geo_map_common_map.CommonMapAPI.md#getresolution)
- [getSR](geo_map_common_map.CommonMapAPI.md#getsr)
- [getScale](geo_map_common_map.CommonMapAPI.md#getscale)
- [getZoomLevel](geo_map_common_map.CommonMapAPI.md#getzoomlevel)
- [noMapErr](geo_map_common_map.CommonMapAPI.md#nomaperr)
- [reloadMap](geo_map_common_map.CommonMapAPI.md#reloadmap)
- [setBasemap](geo_map_common_map.CommonMapAPI.md#setbasemap)
- [setPointZoomScale](geo_map_common_map.CommonMapAPI.md#setpointzoomscale)
- [zoomMapTo](geo_map_common_map.CommonMapAPI.md#zoommapto)

## Constructors

### constructor

• `Protected` **new CommonMapAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/map/common-map.ts:90](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L90)

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

___

### \_basemapStore

• `Private` **\_basemapStore**: [`Basemap`](geo_map_basemap.Basemap.md)[]

Local storage of Basemap objects

#### Defined in

[src/geo/map/common-map.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L34)

___

### \_rampExtentSet

• `Private` **\_rampExtentSet**: `undefined` \| [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

The active extent set in RAMP API Extent Set format.
Allows a quick reference to the available extents if needed.

#### Defined in

[src/geo/map/common-map.ts:69](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L69)

___

### \_rampSR

• `Private` **\_rampSR**: `undefined` \| [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

The map spatial reference in RAMP API Spatial Reference format.
Saves us from converting from ESRI format every time it is needed

#### Defined in

[src/geo/map/common-map.ts:62](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L62)

___

### \_targetDiv

• `Private` **\_targetDiv**: `undefined` \| `string` \| `HTMLDivElement`

The viewDiv for the ESRI MapView
The map will be rendered using this div object

#### Defined in

[src/geo/map/common-map.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L76)

___

### \_viewPromise

• `Protected` **\_viewPromise**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Defined in

[src/geo/map/common-map.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L50)

___

### created

• **created**: `boolean` = `false`

Indicates if the map has been created

#### Defined in

[src/geo/map/common-map.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L40)

___

### esriMap

• `Private` **esriMap**: `undefined` \| [`EsriMap`](geo_esri.EsriMap.md)

The internal esri map. Avoid referencing outside of geoapi.

#### Defined in

[src/geo/map/common-map.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L28)

___

### esriView

• `Private` **esriView**: `undefined` \| [`EsriMapView`](geo_esri.EsriMapView.md)

The internal esri map view. Avoid referencing outside of geoapi.

#### Defined in

[src/geo/map/common-map.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L49)

___

### handlers

• `Private` **handlers**: { `handler`: `any` ; `type`: `string`  }[]

List of ESRI watch handlers

#### Defined in

[src/geo/map/common-map.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L82)

___

### pointZoomScale

• `Private` **pointZoomScale**: `number`

The default zoom level when zooming to a point feature

#### Defined in

[src/geo/map/common-map.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L88)

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

___

### viewPromise

• `get` **viewPromise**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/map/common-map.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L53)

## Methods

### abstractError

▸ `Protected` **abstractError**(): `void`

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L106)

___

### applyBasemap

▸ `Protected` **applyBasemap**(`basemap`): `void`

Applies the given basemap (or basemap with given id) to the esri map
Throws error if basemap could not be found with the given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemap` | `string` \| [`Basemap`](geo_map_basemap.Basemap.md) | the basemap id or object |

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:247](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L247)

___

### createMap

▸ **createMap**(`config`, `targetDiv`): `void`

Will generate the actual Map control objects and construct it on the page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`RampMapConfig`](../interfaces/geo_api_geo_defs.RampMapConfig.md) | the config for the map |
| `targetDiv` | `string` \| `HTMLDivElement` | the div to be used for the map view |

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L117)

___

### createMapView

▸ `Protected` **createMapView**(`basemap?`): `void`

Will generate a ESRI map view and add it to the page
Can optionally provide the basemap or basemap id to be used when creating the map view

This method should be overidden by child map classes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemap?` | `string` \| [`Basemap`](geo_map_basemap.Basemap.md) | the id of the basemap that should be used when creating the map view |

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:184](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L184)

___

### destroyMap

▸ `Protected` **destroyMap**(): `void`

Destroys the ESRI map

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:142](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L142)

___

### destroyMapView

▸ `Protected` **destroyMapView**(): `void`

Destroys the ESRI map view

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:193](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L193)

___

### findBasemap

▸ `Protected` **findBasemap**(`id`): [`Basemap`](geo_map_basemap.Basemap.md)

Searches the local basemap list for a basemap with the given id
Throws error if basemap could not be found

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | basemap id |

#### Returns

[`Basemap`](geo_map_basemap.Basemap.md)

the found basemap

#### Defined in

[src/geo/map/common-map.ts:229](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L229)

___

### geomToMapSR

▸ `Private` **geomToMapSR**(`geom`): `Promise`<[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)\>

Projects a geometry to the map's spatial reference

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | the RAMP API geometry to project |

#### Returns

`Promise`<[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)\>

the geometry projected to the map's projection, in RAMP API Geometry format

#### Defined in

[src/geo/map/common-map.ts:295](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L295)

___

### getCurrentBasemapId

▸ **getCurrentBasemapId**(): `undefined` \| `string`

Get the id of the currently used basemap
Returns undefined if there is no map

#### Returns

`undefined` \| `string`

current basemap id

#### Defined in

[src/geo/map/common-map.ts:280](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L280)

___

### getExtent

▸ **getExtent**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

Provides the extent of the map

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

the map extent in RAMP API Extent format

#### Defined in

[src/geo/map/common-map.ts:392](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L392)

___

### getExtentSet

▸ **getExtentSet**(): [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

Provides the active extent set of the map

#### Returns

[`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

the active extent set of the map

#### Defined in

[src/geo/map/common-map.ts:406](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L406)

___

### getPixelHeight

▸ **getPixelHeight**(): `number`

Get the height of the map on the screen in pixels

#### Returns

`number`

pixel height

#### Defined in

[src/geo/map/common-map.ts:446](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L446)

___

### getPixelWidth

▸ **getPixelWidth**(): `number`

Get the width of the map on the screen in pixels

#### Returns

`number`

pixel width

#### Defined in

[src/geo/map/common-map.ts:460](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L460)

___

### getResolution

▸ **getResolution**(): `number`

Provides the resolution of the map. This means the number of map units that is covered by one pixel.

#### Returns

`number`

the map resolution

#### Defined in

[src/geo/map/common-map.ts:378](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L378)

___

### getSR

▸ **getSR**(): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Provides the spatial reference of the map

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

the map spatial reference in RAMP API format

#### Defined in

[src/geo/map/common-map.ts:432](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L432)

___

### getScale

▸ **getScale**(): `number`

Provides the scale of the map (the scale denominator as integer)

#### Returns

`number`

the map scale

#### Defined in

[src/geo/map/common-map.ts:364](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L364)

___

### getZoomLevel

▸ **getZoomLevel**(): `number`

Provides the zoom level of the map

#### Returns

`number`

the map zoom level

#### Defined in

[src/geo/map/common-map.ts:350](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L350)

___

### noMapErr

▸ `Protected` **noMapErr**(): `void`

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:100](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L100)

___

### reloadMap

▸ **reloadMap**(`config`, `targetDiv`): `void`

Reloads the map with the given map config and target div

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`RampMapConfig`](../interfaces/geo_api_geo_defs.RampMapConfig.md) | the config for the map |
| `targetDiv` | `string` \| `HTMLDivElement` | the div to be used for the map view |

#### Returns

`void`

#### Defined in

[src/geo/map/common-map.ts:166](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L166)

___

### setBasemap

▸ **setBasemap**(`basemapId`): `boolean`

Set the map's basemap to the basemap with the given id.
If the new basemap's tile schema differs from the current one, the map view will be refreshed

The returned boolean indicates if the schema has changed.

This method should be overidden by child map classes

**`Abstract`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemapId` | `string` | the basemap id |

#### Returns

`boolean`

indicates if the schema has changed

#### Defined in

[src/geo/map/common-map.ts:270](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L270)

___

### setPointZoomScale

▸ **setPointZoomScale**(`newScale`): `boolean`

Set's the map's pointZoomScale value to newScale.
If newScale is not a positive number, a console error is thrown.

The returned boolean indicates if the value has been successfully set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newScale` | `number` | the new pointZoomScale value, which must be a positive number |

#### Returns

`boolean`

indicates if the value was set successfully

#### Defined in

[src/geo/map/common-map.ts:478](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L478)

___

### zoomMapTo

▸ **zoomMapTo**(`geom`, `scale?`, `animate?`): `Promise`<`void`\>

Zooms the map to a given geometry.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `geom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | `undefined` | A RAMP API geometry to zoom the map to |
| `scale?` | `number` | `undefined` | An optional scale value of the map. Is ignored for non-Point geometries |
| `animate?` | `boolean` | `true` | An optional animation setting. On by default |

#### Returns

`Promise`<`void`\>

A promise that resolves when the map has finished zooming

#### Defined in

[src/geo/map/common-map.ts:316](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L316)
