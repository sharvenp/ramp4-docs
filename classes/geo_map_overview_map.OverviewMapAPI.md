[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/overview-map](../modules/geo_map_overview_map.md) / OverviewMapAPI

# Class: OverviewMapAPI

[geo/map/overview-map](../modules/geo_map_overview_map.md).OverviewMapAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`CommonMapAPI`](geo_map_common_map.CommonMapAPI.md)

  ↳ **`OverviewMapAPI`**

## Table of contents

### Constructors

- [constructor](geo_map_overview_map.OverviewMapAPI.md#constructor)

### Properties

- [$iApi](geo_map_overview_map.OverviewMapAPI.md#$iapi)
- [\_basemapStore](geo_map_overview_map.OverviewMapAPI.md#_basemapstore)
- [\_rampExtentSet](geo_map_overview_map.OverviewMapAPI.md#_rampextentset)
- [\_rampSR](geo_map_overview_map.OverviewMapAPI.md#_rampsr)
- [\_targetDiv](geo_map_overview_map.OverviewMapAPI.md#_targetdiv)
- [\_viewPromise](geo_map_overview_map.OverviewMapAPI.md#_viewpromise)
- [created](geo_map_overview_map.OverviewMapAPI.md#created)
- [esriMap](geo_map_overview_map.OverviewMapAPI.md#esrimap)
- [esriView](geo_map_overview_map.OverviewMapAPI.md#esriview)
- [handlers](geo_map_overview_map.OverviewMapAPI.md#handlers)
- [overviewGraphicLayer](geo_map_overview_map.OverviewMapAPI.md#overviewgraphiclayer)
- [overviewmapStore](geo_map_overview_map.OverviewMapAPI.md#overviewmapstore)
- [pointZoomScale](geo_map_overview_map.OverviewMapAPI.md#pointzoomscale)
- [startExtent](geo_map_overview_map.OverviewMapAPI.md#startextent)

### Accessors

- [$element](geo_map_overview_map.OverviewMapAPI.md#$element)
- [$vApp](geo_map_overview_map.OverviewMapAPI.md#$vapp)
- [viewPromise](geo_map_overview_map.OverviewMapAPI.md#viewpromise)

### Methods

- [abstractError](geo_map_overview_map.OverviewMapAPI.md#abstracterror)
- [addMapGraphicLayer](geo_map_overview_map.OverviewMapAPI.md#addmapgraphiclayer)
- [applyBasemap](geo_map_overview_map.OverviewMapAPI.md#applybasemap)
- [createMap](geo_map_overview_map.OverviewMapAPI.md#createmap)
- [createMapView](geo_map_overview_map.OverviewMapAPI.md#createmapview)
- [cursorHitTest](geo_map_overview_map.OverviewMapAPI.md#cursorhittest)
- [destroyMap](geo_map_overview_map.OverviewMapAPI.md#destroymap)
- [destroyMapView](geo_map_overview_map.OverviewMapAPI.md#destroymapview)
- [findBasemap](geo_map_overview_map.OverviewMapAPI.md#findbasemap)
- [getCurrentBasemapId](geo_map_overview_map.OverviewMapAPI.md#getcurrentbasemapid)
- [getExtent](geo_map_overview_map.OverviewMapAPI.md#getextent)
- [getExtentSet](geo_map_overview_map.OverviewMapAPI.md#getextentset)
- [getPixelHeight](geo_map_overview_map.OverviewMapAPI.md#getpixelheight)
- [getPixelWidth](geo_map_overview_map.OverviewMapAPI.md#getpixelwidth)
- [getResolution](geo_map_overview_map.OverviewMapAPI.md#getresolution)
- [getSR](geo_map_overview_map.OverviewMapAPI.md#getsr)
- [getScale](geo_map_overview_map.OverviewMapAPI.md#getscale)
- [getZoomLevel](geo_map_overview_map.OverviewMapAPI.md#getzoomlevel)
- [mapDrag](geo_map_overview_map.OverviewMapAPI.md#mapdrag)
- [noMapErr](geo_map_overview_map.OverviewMapAPI.md#nomaperr)
- [reloadMap](geo_map_overview_map.OverviewMapAPI.md#reloadmap)
- [removeMapGraphicLayer](geo_map_overview_map.OverviewMapAPI.md#removemapgraphiclayer)
- [setBasemap](geo_map_overview_map.OverviewMapAPI.md#setbasemap)
- [setPointZoomScale](geo_map_overview_map.OverviewMapAPI.md#setpointzoomscale)
- [updateOverview](geo_map_overview_map.OverviewMapAPI.md#updateoverview)
- [zoomMapTo](geo_map_overview_map.OverviewMapAPI.md#zoommapto)

## Constructors

### constructor

• **new OverviewMapAPI**(`iApi`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | the RAMP instance |

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[constructor](geo_map_common_map.CommonMapAPI.md#constructor)

#### Defined in

[src/geo/map/overview-map.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L22)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[$iApi](geo_map_common_map.CommonMapAPI.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### \_basemapStore

• `Private` **\_basemapStore**: [`Basemap`](geo_map_basemap.Basemap.md)[]

Local storage of Basemap objects

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_basemapStore](geo_map_common_map.CommonMapAPI.md#_basemapstore)

#### Defined in

[src/geo/map/common-map.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L34)

___

### \_rampExtentSet

• `Private` **\_rampExtentSet**: `undefined` \| [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

The active extent set in RAMP API Extent Set format.
Allows a quick reference to the available extents if needed.

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_rampExtentSet](geo_map_common_map.CommonMapAPI.md#_rampextentset)

#### Defined in

[src/geo/map/common-map.ts:69](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L69)

___

### \_rampSR

• `Private` **\_rampSR**: `undefined` \| [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

The map spatial reference in RAMP API Spatial Reference format.
Saves us from converting from ESRI format every time it is needed

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_rampSR](geo_map_common_map.CommonMapAPI.md#_rampsr)

#### Defined in

[src/geo/map/common-map.ts:62](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L62)

___

### \_targetDiv

• `Private` **\_targetDiv**: `undefined` \| `string` \| `HTMLDivElement`

The viewDiv for the ESRI MapView
The map will be rendered using this div object

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_targetDiv](geo_map_common_map.CommonMapAPI.md#_targetdiv)

#### Defined in

[src/geo/map/common-map.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L76)

___

### \_viewPromise

• `Protected` **\_viewPromise**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_viewPromise](geo_map_common_map.CommonMapAPI.md#_viewpromise)

#### Defined in

[src/geo/map/common-map.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L50)

___

### created

• **created**: `boolean` = `false`

Indicates if the map has been created

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[created](geo_map_common_map.CommonMapAPI.md#created)

#### Defined in

[src/geo/map/common-map.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L40)

___

### esriMap

• `Private` **esriMap**: `undefined` \| [`EsriMap`](geo_esri.EsriMap.md)

The internal esri map. Avoid referencing outside of geoapi.

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[esriMap](geo_map_common_map.CommonMapAPI.md#esrimap)

#### Defined in

[src/geo/map/common-map.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L28)

___

### esriView

• `Private` **esriView**: `undefined` \| [`EsriMapView`](geo_esri.EsriMapView.md)

The internal esri map view. Avoid referencing outside of geoapi.

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[esriView](geo_map_common_map.CommonMapAPI.md#esriview)

#### Defined in

[src/geo/map/common-map.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L49)

___

### handlers

• `Private` **handlers**: { `handler`: `any` ; `type`: `string`  }[]

List of ESRI watch handlers

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[handlers](geo_map_common_map.CommonMapAPI.md#handlers)

#### Defined in

[src/geo/map/common-map.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L82)

___

### overviewGraphicLayer

• `Protected` **overviewGraphicLayer**: [`GraphicLayer`](geo_layer_graphic_layer.GraphicLayer.md)

#### Defined in

[src/geo/map/overview-map.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L15)

___

### overviewmapStore

• **overviewmapStore**: `any`

#### Defined in

[src/geo/map/overview-map.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L16)

___

### pointZoomScale

• `Private` **pointZoomScale**: `number`

The default zoom level when zooming to a point feature

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[pointZoomScale](geo_map_common_map.CommonMapAPI.md#pointzoomscale)

#### Defined in

[src/geo/map/common-map.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L88)

___

### startExtent

• `Private` **startExtent**: ``null`` \| [`EsriExtent`](geo_esri.EsriExtent.md) = `null`

Initial esri extent of graphic during drag

#### Defined in

[src/geo/map/overview-map.ts:267](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L267)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

CommonMapAPI.$element

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

CommonMapAPI.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

___

### viewPromise

• `get` **viewPromise**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

CommonMapAPI.viewPromise

#### Defined in

[src/geo/map/common-map.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L53)

## Methods

### abstractError

▸ `Protected` **abstractError**(): `void`

#### Returns

`void`

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[abstractError](geo_map_common_map.CommonMapAPI.md#abstracterror)

#### Defined in

[src/geo/map/common-map.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L106)

___

### addMapGraphicLayer

▸ **addMapGraphicLayer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/map/overview-map.ts:129](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L129)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[applyBasemap](geo_map_common_map.CommonMapAPI.md#applybasemap)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[createMap](geo_map_common_map.CommonMapAPI.md#createmap)

#### Defined in

[src/geo/map/common-map.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L117)

___

### createMapView

▸ `Protected` **createMapView**(`basemap`): `void`

Will generate a ESRI map view and add it to the page
Must provide the basemap or basemap id to be used when creating the map view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemap` | `string` \| [`Basemap`](geo_map_basemap.Basemap.md) | the id of the basemap that should be used when creating the map view |

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[createMapView](geo_map_common_map.CommonMapAPI.md#createmapview)

#### Defined in

[src/geo/map/overview-map.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L40)

___

### cursorHitTest

▸ **cursorHitTest**(`e`): `Promise`<`boolean`\>

Checks if mouse event intersects with extent graphic

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `MapViewScreenPoint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/geo/map/overview-map.ts:348](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L348)

___

### destroyMap

▸ `Protected` **destroyMap**(): `void`

Destroys the ESRI map

#### Returns

`void`

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[destroyMap](geo_map_common_map.CommonMapAPI.md#destroymap)

#### Defined in

[src/geo/map/common-map.ts:142](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L142)

___

### destroyMapView

▸ `Protected` **destroyMapView**(): `void`

Destroys the ESRI map view

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[destroyMapView](geo_map_common_map.CommonMapAPI.md#destroymapview)

#### Defined in

[src/geo/map/overview-map.ts:185](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L185)

___

### findBasemap

▸ `Protected` **findBasemap**(`id`): [`Basemap`](geo_map_basemap.Basemap.md)

Searches the local basemap list and main map basemaps for a basemap with the given id
Throws error if basemap could not be found

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | basemap id |

#### Returns

[`Basemap`](geo_map_basemap.Basemap.md)

the found basemap

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[findBasemap](geo_map_common_map.CommonMapAPI.md#findbasemap)

#### Defined in

[src/geo/map/overview-map.ts:203](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L203)

___

### getCurrentBasemapId

▸ **getCurrentBasemapId**(): `undefined` \| `string`

Get the id of the currently used basemap
Returns undefined if there is no map

#### Returns

`undefined` \| `string`

current basemap id

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getCurrentBasemapId](geo_map_common_map.CommonMapAPI.md#getcurrentbasemapid)

#### Defined in

[src/geo/map/common-map.ts:280](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L280)

___

### getExtent

▸ **getExtent**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

Provides the extent of the map

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

the map extent in RAMP API Extent format

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getExtent](geo_map_common_map.CommonMapAPI.md#getextent)

#### Defined in

[src/geo/map/common-map.ts:392](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L392)

___

### getExtentSet

▸ **getExtentSet**(): [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

Provides the active extent set of the map

#### Returns

[`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

the active extent set of the map

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getExtentSet](geo_map_common_map.CommonMapAPI.md#getextentset)

#### Defined in

[src/geo/map/common-map.ts:406](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L406)

___

### getPixelHeight

▸ **getPixelHeight**(): `number`

Get the height of the map on the screen in pixels

#### Returns

`number`

pixel height

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getPixelHeight](geo_map_common_map.CommonMapAPI.md#getpixelheight)

#### Defined in

[src/geo/map/common-map.ts:446](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L446)

___

### getPixelWidth

▸ **getPixelWidth**(): `number`

Get the width of the map on the screen in pixels

#### Returns

`number`

pixel width

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getPixelWidth](geo_map_common_map.CommonMapAPI.md#getpixelwidth)

#### Defined in

[src/geo/map/common-map.ts:460](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L460)

___

### getResolution

▸ **getResolution**(): `number`

Provides the resolution of the map. This means the number of map units that is covered by one pixel.

#### Returns

`number`

the map resolution

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getResolution](geo_map_common_map.CommonMapAPI.md#getresolution)

#### Defined in

[src/geo/map/common-map.ts:378](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L378)

___

### getSR

▸ **getSR**(): [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Provides the spatial reference of the map

#### Returns

[`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

the map spatial reference in RAMP API format

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getSR](geo_map_common_map.CommonMapAPI.md#getsr)

#### Defined in

[src/geo/map/common-map.ts:432](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L432)

___

### getScale

▸ **getScale**(): `number`

Provides the scale of the map (the scale denominator as integer)

#### Returns

`number`

the map scale

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getScale](geo_map_common_map.CommonMapAPI.md#getscale)

#### Defined in

[src/geo/map/common-map.ts:364](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L364)

___

### getZoomLevel

▸ **getZoomLevel**(): `number`

Provides the zoom level of the map

#### Returns

`number`

the map zoom level

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[getZoomLevel](geo_map_common_map.CommonMapAPI.md#getzoomlevel)

#### Defined in

[src/geo/map/common-map.ts:350](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L350)

___

### mapDrag

▸ `Private` **mapDrag**(`esriDrag`): `Promise`<`void`\>

Moves graphic and zooms main map if extent graphic is dragged

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriDrag` | `ViewDragEvent` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/map/overview-map.ts:275](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L275)

___

### noMapErr

▸ `Protected` **noMapErr**(): `void`

#### Returns

`void`

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[noMapErr](geo_map_common_map.CommonMapAPI.md#nomaperr)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[reloadMap](geo_map_common_map.CommonMapAPI.md#reloadmap)

#### Defined in

[src/geo/map/common-map.ts:166](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L166)

___

### removeMapGraphicLayer

▸ **removeMapGraphicLayer**(): `void`

#### Returns

`void`

#### Defined in

[src/geo/map/overview-map.ts:163](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L163)

___

### setBasemap

▸ **setBasemap**(`basemapId`): `boolean`

Sets the overview map's basemap to the basemap with the given id.
Will refresh the map view if set basemap uses different tile schema.

Should only be called by the overview map component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemapId` | `string` | the basemap id |

#### Returns

`boolean`

indicates if the schema has changed

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[setBasemap](geo_map_common_map.CommonMapAPI.md#setbasemap)

#### Defined in

[src/geo/map/overview-map.ts:235](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L235)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[setPointZoomScale](geo_map_common_map.CommonMapAPI.md#setpointzoomscale)

#### Defined in

[src/geo/map/common-map.ts:478](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L478)

___

### updateOverview

▸ **updateOverview**(`newExtent`): `Promise`<`void`\>

Updates overviewmap extent and graphic based on main map extent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newExtent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | new main map extent |

#### Returns

`Promise`<`void`\>

A promise that resolves when the overviewmap has finished updating

#### Defined in

[src/geo/map/overview-map.ts:319](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/overview-map.ts#L319)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[zoomMapTo](geo_map_common_map.CommonMapAPI.md#zoommapto)

#### Defined in

[src/geo/map/common-map.ts:316](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L316)
