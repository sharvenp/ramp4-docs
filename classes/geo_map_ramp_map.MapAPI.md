[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/ramp-map](../modules/geo_map_ramp_map.md) / MapAPI

# Class: MapAPI

[geo/map/ramp-map](../modules/geo_map_ramp_map.md).MapAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`CommonMapAPI`](geo_map_common_map.CommonMapAPI.md)

  ↳ **`MapAPI`**

## Table of contents

### Constructors

- [constructor](geo_map_ramp_map.MapAPI.md#constructor)

### Properties

- [$iApi](geo_map_ramp_map.MapAPI.md#$iapi)
- [\_activeKeys](geo_map_ramp_map.MapAPI.md#_activekeys)
- [\_basemapStore](geo_map_ramp_map.MapAPI.md#_basemapstore)
- [\_mouseFocus](geo_map_ramp_map.MapAPI.md#_mousefocus)
- [\_panInterval](geo_map_ramp_map.MapAPI.md#_paninterval)
- [\_rampExtentSet](geo_map_ramp_map.MapAPI.md#_rampextentset)
- [\_rampSR](geo_map_ramp_map.MapAPI.md#_rampsr)
- [\_targetDiv](geo_map_ramp_map.MapAPI.md#_targetdiv)
- [\_viewPromise](geo_map_ramp_map.MapAPI.md#_viewpromise)
- [caption](geo_map_ramp_map.MapAPI.md#caption)
- [created](geo_map_ramp_map.MapAPI.md#created)
- [esriMap](geo_map_ramp_map.MapAPI.md#esrimap)
- [esriView](geo_map_ramp_map.MapAPI.md#esriview)
- [handlers](geo_map_ramp_map.MapAPI.md#handlers)
- [mapMouseThrottle](geo_map_ramp_map.MapAPI.md#mapmousethrottle)
- [maptip](geo_map_ramp_map.MapAPI.md#maptip)
- [pointZoomScale](geo_map_ramp_map.MapAPI.md#pointzoomscale)

### Accessors

- [$element](geo_map_ramp_map.MapAPI.md#$element)
- [$vApp](geo_map_ramp_map.MapAPI.md#$vapp)
- [keysActive](geo_map_ramp_map.MapAPI.md#keysactive)
- [mouseFocus](geo_map_ramp_map.MapAPI.md#mousefocus)
- [viewPromise](geo_map_ramp_map.MapAPI.md#viewpromise)

### Methods

- [abstractError](geo_map_ramp_map.MapAPI.md#abstracterror)
- [addLayer](geo_map_ramp_map.MapAPI.md#addlayer)
- [applyBasemap](geo_map_ramp_map.MapAPI.md#applybasemap)
- [createMap](geo_map_ramp_map.MapAPI.md#createmap)
- [createMapView](geo_map_ramp_map.MapAPI.md#createmapview)
- [createMouseMoveHandler](geo_map_ramp_map.MapAPI.md#createmousemovehandler)
- [destroyMap](geo_map_ramp_map.MapAPI.md#destroymap)
- [destroyMapView](geo_map_ramp_map.MapAPI.md#destroymapview)
- [findBasemap](geo_map_ramp_map.MapAPI.md#findbasemap)
- [getCurrentBasemapId](geo_map_ramp_map.MapAPI.md#getcurrentbasemapid)
- [getExtent](geo_map_ramp_map.MapAPI.md#getextent)
- [getExtentSet](geo_map_ramp_map.MapAPI.md#getextentset)
- [getGraphicAtCoord](geo_map_ramp_map.MapAPI.md#getgraphicatcoord)
- [getPixelHeight](geo_map_ramp_map.MapAPI.md#getpixelheight)
- [getPixelWidth](geo_map_ramp_map.MapAPI.md#getpixelwidth)
- [getResolution](geo_map_ramp_map.MapAPI.md#getresolution)
- [getSR](geo_map_ramp_map.MapAPI.md#getsr)
- [getScale](geo_map_ramp_map.MapAPI.md#getscale)
- [getZoomLevel](geo_map_ramp_map.MapAPI.md#getzoomlevel)
- [keyPan](geo_map_ramp_map.MapAPI.md#keypan)
- [keyZoom](geo_map_ramp_map.MapAPI.md#keyzoom)
- [mapKeyDown](geo_map_ramp_map.MapAPI.md#mapkeydown)
- [mapKeyUp](geo_map_ramp_map.MapAPI.md#mapkeyup)
- [mapPointToScreenPoint](geo_map_ramp_map.MapAPI.md#mappointtoscreenpoint)
- [noMapErr](geo_map_ramp_map.MapAPI.md#nomaperr)
- [reloadMap](geo_map_ramp_map.MapAPI.md#reloadmap)
- [removeLayer](geo_map_ramp_map.MapAPI.md#removelayer)
- [removeSublayer](geo_map_ramp_map.MapAPI.md#removesublayer)
- [reorder](geo_map_ramp_map.MapAPI.md#reorder)
- [runIdentify](geo_map_ramp_map.MapAPI.md#runidentify)
- [screenPointToMapPoint](geo_map_ramp_map.MapAPI.md#screenpointtomappoint)
- [setBasemap](geo_map_ramp_map.MapAPI.md#setbasemap)
- [setMapMouseThrottle](geo_map_ramp_map.MapAPI.md#setmapmousethrottle)
- [setMouseFocus](geo_map_ramp_map.MapAPI.md#setmousefocus)
- [setPointZoomScale](geo_map_ramp_map.MapAPI.md#setpointzoomscale)
- [stopKeyPan](geo_map_ramp_map.MapAPI.md#stopkeypan)
- [takeScreenshot](geo_map_ramp_map.MapAPI.md#takescreenshot)
- [zoomIn](geo_map_ramp_map.MapAPI.md#zoomin)
- [zoomMapTo](geo_map_ramp_map.MapAPI.md#zoommapto)
- [zoomOut](geo_map_ramp_map.MapAPI.md#zoomout)
- [zoomToLevel](geo_map_ramp_map.MapAPI.md#zoomtolevel)
- [zoomToVisibleScale](geo_map_ramp_map.MapAPI.md#zoomtovisiblescale)

## Constructors

### constructor

• **new MapAPI**(`iApi`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | the RAMP instance |

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[constructor](geo_map_common_map.CommonMapAPI.md#constructor)

#### Defined in

[src/geo/map/ramp-map.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L60)

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

### \_activeKeys

• `Private` **\_activeKeys**: `string`[] = `[]`

#### Defined in

[src/geo/map/ramp-map.ts:1166](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1166)

___

### \_basemapStore

• `Private` **\_basemapStore**: [`Basemap`](geo_map_basemap.Basemap.md)[]

Local storage of Basemap objects

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[_basemapStore](geo_map_common_map.CommonMapAPI.md#_basemapstore)

#### Defined in

[src/geo/map/common-map.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L34)

___

### \_mouseFocus

• `Private` **\_mouseFocus**: `boolean` = `false`

#### Defined in

[src/geo/map/ramp-map.ts:1172](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1172)

___

### \_panInterval

• `Private` **\_panInterval**: `any`

#### Defined in

[src/geo/map/ramp-map.ts:1169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1169)

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

### caption

• **caption**: [`MapCaptionAPI`](geo_map_caption.MapCaptionAPI.md)

#### Defined in

[src/geo/map/ramp-map.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L48)

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

### mapMouseThrottle

• `Private` **mapMouseThrottle**: `number`

The throttle level for map mouse move events

#### Defined in

[src/geo/map/ramp-map.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L54)

___

### maptip

• **maptip**: [`MaptipAPI`](geo_map_maptip.MaptipAPI.md)

#### Defined in

[src/geo/map/ramp-map.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L45)

___

### pointZoomScale

• `Private` **pointZoomScale**: `number`

The default zoom level when zooming to a point feature

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[pointZoomScale](geo_map_common_map.CommonMapAPI.md#pointzoomscale)

#### Defined in

[src/geo/map/common-map.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L88)

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

### keysActive

• `get` **keysActive**(): `boolean`

Returns if keys are active on map

**`Memberof`**

MapAPI

#### Returns

`boolean`

- true if any pan/zoom keys are active

#### Defined in

[src/geo/map/ramp-map.ts:1265](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1265)

___

### mouseFocus

• `get` **mouseFocus**(): `boolean`

Returns if map focus is caused by mouse click

**`Memberof`**

MapAPI

#### Returns

`boolean`

#### Defined in

[src/geo/map/ramp-map.ts:1278](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1278)

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

### addLayer

▸ **addLayer**(`layer`, `index?`): `Promise`<`void`\>

Adds a layer to the map
Optionally can specify the layer order index

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | `undefined` | the Ramp layer to add |
| `index` | `undefined` \| `number` | `undefined` | optional order index to add the layer to |

#### Returns

`Promise`<`void`\>

a promise that resolves when the layer has been added to the map

#### Defined in

[src/geo/map/ramp-map.ts:446](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L446)

___

### applyBasemap

▸ `Protected` **applyBasemap**(`basemap`): `void`

Sets the basemap to the basemap with the given id or the basemap object
Throws error if basemap could not be found

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemap` | `string` \| [`Basemap`](geo_map_basemap.Basemap.md) | the basemap id or object |

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[applyBasemap](geo_map_common_map.CommonMapAPI.md#applybasemap)

#### Defined in

[src/geo/map/ramp-map.ts:363](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L363)

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

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[createMap](geo_map_common_map.CommonMapAPI.md#createmap)

#### Defined in

[src/geo/map/ramp-map.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L73)

___

### createMapView

▸ `Protected` **createMapView**(`basemap?`): `void`

Will generate a ESRI map view and add it to the page
Can optionally provide the basemap or basemap id to be used when creating the map view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basemap?` | `string` \| [`Basemap`](geo_map_basemap.Basemap.md) | the id of the basemap that should be used when creating the map view |

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[createMapView](geo_map_common_map.CommonMapAPI.md#createmapview)

#### Defined in

[src/geo/map/ramp-map.ts:113](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L113)

___

### createMouseMoveHandler

▸ `Private` **createMouseMoveHandler**(): `any`

Creates a throttled map mouse move handler.
Uses mapMouseThrottle for the throttle delay

#### Returns

`any`

the throttled handler function

#### Defined in

[src/geo/map/ramp-map.ts:707](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L707)

___

### destroyMap

▸ **destroyMap**(): `void`

Destroys the ESRI map. Typically called by internal system, use at your own risk.

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[destroyMap](geo_map_common_map.CommonMapAPI.md#destroymap)

#### Defined in

[src/geo/map/ramp-map.ts:89](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L89)

___

### destroyMapView

▸ `Protected` **destroyMapView**(): `void`

Destroys the ESRI map view

#### Returns

`void`

#### Overrides

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[destroyMapView](geo_map_common_map.CommonMapAPI.md#destroymapview)

#### Defined in

[src/geo/map/ramp-map.ts:348](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L348)

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

#### Inherited from

[CommonMapAPI](geo_map_common_map.CommonMapAPI.md).[findBasemap](geo_map_common_map.CommonMapAPI.md#findbasemap)

#### Defined in

[src/geo/map/common-map.ts:229](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/common-map.ts#L229)

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

### getGraphicAtCoord

▸ **getGraphicAtCoord**(`screenPoint`): `Promise`<`undefined` \| [`GraphicHitResult`](../interfaces/geo_api_geo_defs.GraphicHitResult.md)\>

Get the top-most graphic at the given screen point
Returns undefined if there is no point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPoint` | [`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md) | The screen coordinates |

#### Returns

`Promise`<`undefined` \| [`GraphicHitResult`](../interfaces/geo_api_geo_defs.GraphicHitResult.md)\>

a promise that resolves when a graphic is hit (undefined if no graphic was hit)

#### Defined in

[src/geo/map/ramp-map.ts:996](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L996)

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

### keyPan

▸ `Private` **keyPan**(): `void`

Starts/restarts panning with active keys

**`Memberof`**

MapAPI

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:1306](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1306)

___

### keyZoom

▸ `Private` **keyZoom**(`payload`): `Promise`<`void`\>

Pauses pan interval to process zoom from keyboard

**`Memberof`**

MapAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `KeyboardEvent` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/map/ramp-map.ts:1289](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1289)

___

### mapKeyDown

▸ **mapKeyDown**(`payload`): `void`

Processes keydown event on map and initiates panning/zooming

**`Memberof`**

MapAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:1180](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1180)

___

### mapKeyUp

▸ **mapKeyUp**(`payload`): `void`

Processes keyup event on map and deactivates key

**`Memberof`**

MapAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:1220](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1220)

___

### mapPointToScreenPoint

▸ **mapPointToScreenPoint**(`mapPoint`): [`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md)

Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapPoint` | [`Point`](geo_api_graphic_geometry_point.Point.md) | point on the map |

#### Returns

[`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md)

the screen point analagous to the map point

#### Defined in

[src/geo/map/ramp-map.ts:861](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L861)

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

### removeLayer

▸ **removeLayer**(`layer`): `void`

Removes a layer from the map and fires the LAYER_REMOVE event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `string` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the Ramp layer or layer id/uid to remove |

#### Returns

`void`

a promise that resolves when the layer has been removed from the map

#### Defined in

[src/geo/map/ramp-map.ts:604](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L604)

___

### removeSublayer

▸ **removeSublayer**(`sublayer`): `void`

Removes a sublayer from the map

#### Parameters

| Name | Type |
| :------ | :------ |
| `sublayer` | `string` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) |

#### Returns

`void`

a promise that resolves when the layer has been removed from the map

#### Defined in

[src/geo/map/ramp-map.ts:562](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L562)

___

### reorder

▸ **reorder**(`layer`, `index`, `ignoreCosmetic?`): `void`

Reorders a layer on the map

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | `undefined` | the RAMP layer to be moved |
| `index` | `number` | `undefined` | the RAMP layer index for placing the layer |
| `ignoreCosmetic` | `boolean` | `false` | indicates if cosmetic layers should be ignored during reordering |

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:503](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L503)

___

### runIdentify

▸ **runIdentify**(`targetPoint`): [`MapIdentifyResult`](../interfaces/geo_api_geo_defs.MapIdentifyResult.md)

Performs an identify request on all layers that support identify, and combines the results.

**`Memberof`**

MapAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetPoint` | [`MapClick`](../interfaces/geo_api_geo_defs.MapClick.md) \| [`Point`](geo_api_graphic_geometry_point.Point.md) | the place on the map to execute the identify |

#### Returns

[`MapIdentifyResult`](../interfaces/geo_api_geo_defs.MapIdentifyResult.md)

MapIdentifyResult

#### Defined in

[src/geo/map/ramp-map.ts:903](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L903)

___

### screenPointToMapPoint

▸ **screenPointToMapPoint**(`screenPoint`): [`Point`](geo_api_graphic_geometry_point.Point.md)

Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPoint` | [`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md) | pixel screen co-ord of the point on the map |

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

the map point analagous to the screen point

#### Defined in

[src/geo/map/ramp-map.ts:840](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L840)

___

### setBasemap

▸ **setBasemap**(`basemapId`): `boolean`

Set the map's basemap to the basemap with the given id.
If the new basemap's tile schema differs from the current one, the map view will be refreshed

The returned boolean indicates if the schema has changed.

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

[src/geo/map/ramp-map.ts:387](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L387)

___

### setMapMouseThrottle

▸ **setMapMouseThrottle**(`newThrottle`): `boolean`

Set's the map's mapMouseThrottle value to newThrottle.
If newThrottle is not a positive number, a console error is thrown.

The returned boolean indicates if the value has been successfully set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newThrottle` | `number` | the new mapMouseThrottle value, which must be a positive number |

#### Returns

`boolean`

indicates if the value was set successfully

#### Defined in

[src/geo/map/ramp-map.ts:670](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L670)

___

### setMouseFocus

▸ **setMouseFocus**(): `void`

Sets the map focus source from the mouse

**`Memberof`**

MapAPI

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:1241](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1241)

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

### stopKeyPan

▸ **stopKeyPan**(): `void`

Stops panning and deactivates all keys

**`Memberof`**

MapAPI

#### Returns

`void`

#### Defined in

[src/geo/map/ramp-map.ts:1250](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L1250)

___

### takeScreenshot

▸ **takeScreenshot**(`options`): `Promise`<[`Screenshot`](../interfaces/geo_api_geo_defs.Screenshot.md)\>

Create a screenshot of the current view.

Possible ESRI takeScreenshot() options:
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#takeScreenshot
Will default to quality = 1 and format = 'png'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `MapViewTakeScreenshotOptions` | ESRI takeScreenshot() options |

#### Returns

`Promise`<[`Screenshot`](../interfaces/geo_api_geo_defs.Screenshot.md)\>

a promise that resolves with a Screenshot

#### Defined in

[src/geo/map/ramp-map.ts:818](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L818)

___

### zoomIn

▸ **zoomIn**(): `Promise`<`void`\>

Zooms the map to the next zoom level in towards the earth. The center point will not change.
In the rare case where there is no basemap, this will likely do nothing

#### Returns

`Promise`<`void`\>

A promise that resolves when the map has finished zooming

#### Defined in

[src/geo/map/ramp-map.ts:741](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L741)

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

___

### zoomOut

▸ **zoomOut**(): `Promise`<`void`\>

Zooms the map to the next zoom level out away from the earth. The center point will not change.
In the rare case where there is no basemap, this will likely do nothing

#### Returns

`Promise`<`void`\>

A promise that resolves when the map has finished zooming

#### Defined in

[src/geo/map/ramp-map.ts:756](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L756)

___

### zoomToLevel

▸ **zoomToLevel**(`zoomLevel`): `Promise`<`void`\>

Zooms the map to a given zoom level. The center point will not change.
In the rare case where there is no basemap, this will likely do nothing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoomLevel` | `number` | An integer matching the level of detail / zoom level the map should adjust to |

#### Returns

`Promise`<`void`\>

A promise that resolves when the map has finished zooming

#### Defined in

[src/geo/map/ramp-map.ts:727](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L727)

___

### zoomToVisibleScale

▸ **zoomToVisibleScale**(`scaleSet`): `Promise`<`void`\>

Zooms the map to the closest zoom level that will be visible for a given scale set.
Does nothing if scale set is already visible for the map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleSet` | [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md) |

#### Returns

`Promise`<`void`\>

A promise that resolves when the map has finished zooming

#### Defined in

[src/geo/map/ramp-map.ts:771](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/ramp-map.ts#L771)
