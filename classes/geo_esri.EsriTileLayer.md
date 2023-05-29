[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriTileLayer

# Class: EsriTileLayer

[geo/esri](../modules/geo_esri.md).EsriTileLayer

## Hierarchy

- `Layer`

- `SublayersOwner`

- `ArcGISMapService`

- `ArcGISCachedService`

- `RefreshableLayer`

- `ScaleRangeLayer`

- `PortalLayer`

- `BlendLayer`

- `CustomParametersMixin`

- `APIKeyMixin`

  ↳ **`EsriTileLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriTileLayer.md#constructor)

### Properties

- [allSublayers](geo_esri.EsriTileLayer.md#allsublayers)
- [apiKey](geo_esri.EsriTileLayer.md#apikey)
- [attributionDataUrl](geo_esri.EsriTileLayer.md#attributiondataurl)
- [blendMode](geo_esri.EsriTileLayer.md#blendmode)
- [capabilities](geo_esri.EsriTileLayer.md#capabilities)
- [copyright](geo_esri.EsriTileLayer.md#copyright)
- [customParameters](geo_esri.EsriTileLayer.md#customparameters)
- [declaredClass](geo_esri.EsriTileLayer.md#declaredclass)
- [destroyed](geo_esri.EsriTileLayer.md#destroyed)
- [effect](geo_esri.EsriTileLayer.md#effect)
- [fullExtent](geo_esri.EsriTileLayer.md#fullextent)
- [hasAttributionData](geo_esri.EsriTileLayer.md#hasattributiondata)
- [id](geo_esri.EsriTileLayer.md#id)
- [initialized](geo_esri.EsriTileLayer.md#initialized)
- [legendEnabled](geo_esri.EsriTileLayer.md#legendenabled)
- [listMode](geo_esri.EsriTileLayer.md#listmode)
- [loadError](geo_esri.EsriTileLayer.md#loaderror)
- [loadStatus](geo_esri.EsriTileLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriTileLayer.md#loadwarnings)
- [loaded](geo_esri.EsriTileLayer.md#loaded)
- [maxScale](geo_esri.EsriTileLayer.md#maxscale)
- [minScale](geo_esri.EsriTileLayer.md#minscale)
- [opacity](geo_esri.EsriTileLayer.md#opacity)
- [portalItem](geo_esri.EsriTileLayer.md#portalitem)
- [refreshInterval](geo_esri.EsriTileLayer.md#refreshinterval)
- [resampling](geo_esri.EsriTileLayer.md#resampling)
- [sourceJSON](geo_esri.EsriTileLayer.md#sourcejson)
- [spatialReference](geo_esri.EsriTileLayer.md#spatialreference)
- [sublayers](geo_esri.EsriTileLayer.md#sublayers)
- [tileInfo](geo_esri.EsriTileLayer.md#tileinfo)
- [tileServers](geo_esri.EsriTileLayer.md#tileservers)
- [title](geo_esri.EsriTileLayer.md#title)
- [type](geo_esri.EsriTileLayer.md#type)
- [url](geo_esri.EsriTileLayer.md#url)
- [version](geo_esri.EsriTileLayer.md#version)
- [visible](geo_esri.EsriTileLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriTileLayer.md#_get)
- [\_set](geo_esri.EsriTileLayer.md#_set)
- [addHandles](geo_esri.EsriTileLayer.md#addhandles)
- [cancelLoad](geo_esri.EsriTileLayer.md#cancelload)
- [createLayerView](geo_esri.EsriTileLayer.md#createlayerview)
- [createServiceSublayers](geo_esri.EsriTileLayer.md#createservicesublayers)
- [destroy](geo_esri.EsriTileLayer.md#destroy)
- [emit](geo_esri.EsriTileLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriTileLayer.md#fetchattributiondata)
- [fetchTile](geo_esri.EsriTileLayer.md#fetchtile)
- [findSublayerById](geo_esri.EsriTileLayer.md#findsublayerbyid)
- [get](geo_esri.EsriTileLayer.md#get)
- [getTileUrl](geo_esri.EsriTileLayer.md#gettileurl)
- [hasEventListener](geo_esri.EsriTileLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriTileLayer.md#hashandles)
- [isFulfilled](geo_esri.EsriTileLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriTileLayer.md#isrejected)
- [isResolved](geo_esri.EsriTileLayer.md#isresolved)
- [load](geo_esri.EsriTileLayer.md#load)
- [loadAll](geo_esri.EsriTileLayer.md#loadall)
- [notifyChange](geo_esri.EsriTileLayer.md#notifychange)
- [on](geo_esri.EsriTileLayer.md#on)
- [own](geo_esri.EsriTileLayer.md#own)
- [refresh](geo_esri.EsriTileLayer.md#refresh)
- [removeHandles](geo_esri.EsriTileLayer.md#removehandles)
- [set](geo_esri.EsriTileLayer.md#set)
- [watch](geo_esri.EsriTileLayer.md#watch)
- [when](geo_esri.EsriTileLayer.md#when)
- [fromJSON](geo_esri.EsriTileLayer.md#fromjson)

## Constructors

### constructor

• **new EsriTileLayer**(`properties?`)

The TileLayer allows you work with a cached [map service](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm) exposed by the ArcGIS Server REST API and add it to a [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) as a tile layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `TileLayerProperties` |

#### Inherited from

Layer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27264

## Properties

### allSublayers

• `Readonly` **allSublayers**: `Collection`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

A flat [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) of all the [sublayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#sublayers) in the TileLayer including the sublayers of its sublayers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#allSublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27213

___

### apiKey

• **apiKey**: `string`

An authorization string used to access a resource or service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-APIKeyMixin.html#apiKey)

#### Inherited from

APIKeyMixin.apiKey

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14632

___

### attributionDataUrl

• `Readonly` **attributionDataUrl**: `string`

The URL that points to the location of the layer's attribution data.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#attributionDataUrl)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27219

___

### blendMode

• **blendMode**: ``"screen"`` \| ``"average"`` \| ``"color-burn"`` \| ``"color-dodge"`` \| ``"color"`` \| ``"darken"`` \| ``"destination-atop"`` \| ``"destination-in"`` \| ``"destination-out"`` \| ``"destination-over"`` \| ``"difference"`` \| ``"exclusion"`` \| ``"hard-light"`` \| ``"hue"`` \| ``"invert"`` \| ``"lighten"`` \| ``"lighter"`` \| ``"luminosity"`` \| ``"minus"`` \| ``"multiply"`` \| ``"normal"`` \| ``"overlay"`` \| ``"plus"`` \| ``"reflect"`` \| ``"saturation"`` \| ``"soft-light"`` \| ``"source-atop"`` \| ``"source-in"`` \| ``"source-out"`` \| ``"vivid-light"`` \| ``"xor"``

Blend modes are used to blend layers together to create an interesting effect in a layer, or even to produce what seems like a new layer.

**`Default`**

```ts
normal

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-BlendLayer.html#blendMode)
```

#### Inherited from

BlendLayer.blendMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15534

___

### capabilities

• `Readonly` **capabilities**: `ArcGISMapServiceCapabilities`

Indicates the layer's supported capabilities.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISMapService.html#capabilities)

#### Inherited from

ArcGISMapService.capabilities

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15364

___

### copyright

• **copyright**: `string`

The copyright text as defined by the service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISMapService.html#copyright)

#### Inherited from

ArcGISMapService.copyright

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15370

___

### customParameters

• **customParameters**: `any`

A list of custom parameters appended to the URL of all resources fetched by the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-CustomParametersMixin.html#customParameters)

#### Inherited from

CustomParametersMixin.customParameters

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15630

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Layer.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Layer.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### effect

• **effect**: `Effect`

Effect provides various filter functions that can be performed on the layer to achieve different visual effects similar to how image filters work.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-BlendLayer.html#effect)
```

#### Inherited from

BlendLayer.effect

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15572

___

### fullExtent

• **fullExtent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The full extent of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fullExtent)

#### Inherited from

Layer.fullExtent

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13943

___

### hasAttributionData

• `Readonly` **hasAttributionData**: `boolean`

Indicates if the layer has attribution data.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#hasAttributionData)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27225

___

### id

• **id**: `string`

The unique ID assigned to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#id)

#### Inherited from

Layer.id

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13949

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Layer.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### legendEnabled

• **legendEnabled**: `boolean`

Indicates whether the layer will be included in the legend.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISMapService.html#legendEnabled)
```

#### Inherited from

ArcGISMapService.legendEnabled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15384

___

### listMode

• **listMode**: ``"show"`` \| ``"hide"`` \| ``"hide-children"``

Indicates how the layer should display in the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

**`Default`**

```ts
"show"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#listMode)
```

#### Inherited from

Layer.listMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13957

___

### loadError

• `Readonly` **loadError**: `Error`

The Error object returned if an error occurred while loading.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadError)
```

#### Inherited from

Layer.loadError

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2200

___

### loadStatus

• `Readonly` **loadStatus**: ``"loaded"`` \| ``"loading"`` \| ``"not-loaded"`` \| ``"failed"``

Represents the status of a [load](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load) operation.

**`Default`**

```ts
not-loaded

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadStatus)
```

#### Inherited from

Layer.loadStatus

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2208

___

### loadWarnings

• `Readonly` **loadWarnings**: `any`[]

A list of warnings which occurred while loading.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadWarnings)

#### Inherited from

Layer.loadWarnings

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2214

___

### loaded

• `Readonly` **loaded**: `boolean`

Indicates whether the layer's resources have loaded.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loaded)
```

#### Inherited from

Layer.loaded

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13965

___

### maxScale

• **maxScale**: `number`

The maximum scale (most zoomed in) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ScaleRangeLayer.html#maxScale)
```

#### Inherited from

ScaleRangeLayer.maxScale

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16416

___

### minScale

• **minScale**: `number`

The minimum scale (most zoomed out) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ScaleRangeLayer.html#minScale)
```

#### Inherited from

ScaleRangeLayer.minScale

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16424

___

### opacity

• **opacity**: `number`

The opacity of the layer.

**`Default`**

```ts
1

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#opacity)
```

#### Inherited from

Layer.opacity

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13973

___

### portalItem

• **portalItem**: `PortalItem`

The portal item from which the layer is loaded.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-PortalLayer.html#portalItem)

#### Inherited from

PortalLayer.portalItem

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16354

___

### refreshInterval

• **refreshInterval**: `number`

Refresh interval of the layer in minutes.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-RefreshableLayer.html#refreshInterval)
```

#### Inherited from

RefreshableLayer.refreshInterval

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16388

___

### resampling

• **resampling**: `boolean`

Resampling is enabled by default in 2D [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) and 3D [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#resampling)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27233

___

### sourceJSON

• **sourceJSON**: `any`

The [tiled map service's metadata JSON](https://developers.arcgis.com/rest/services-reference/map-service.htm) exposed by the ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#sourceJSON)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27239

___

### spatialReference

• `Readonly` **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the layer as defined by the service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISMapService.html#spatialReference)

#### Inherited from

ArcGISMapService.spatialReference

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15390

___

### sublayers

• `Readonly` **sublayers**: `Collection`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

A [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) of [Sublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html) objects.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#sublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27245

___

### tileInfo

• **tileInfo**: `TileInfo`

Contains information about the tiling scheme for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISCachedService.html#tileInfo)

#### Inherited from

ArcGISCachedService.tileInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14662

___

### tileServers

• **tileServers**: `string`[]

An array of tile servers used for changing map tiles.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#tileServers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27251

___

### title

• **title**: `string`

The title of the layer used to identify it in places such as the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#title)

#### Inherited from

Layer.title

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13979

___

### type

• `Readonly` **type**: ``"tile"``

#### Inherited from

Layer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27252

___

### url

• **url**: `string`

The URL of the REST endpoint of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#url)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27258

___

### version

• `Readonly` **version**: `number`

The version of ArcGIS Server in which the map service is published.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISMapService.html#version)

#### Inherited from

ArcGISMapService.version

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15396

___

### visible

• **visible**: `boolean`

Indicates if the layer is visible in the [View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#visible)
```

#### Inherited from

Layer.visible

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14032

## Methods

### \_get

▸ `Protected` **_get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Layer.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:32

▸ `Protected` **_get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Layer.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Inherited from

Layer.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### addHandles

▸ **addHandles**<`T`\>(`handles`, `groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Layer.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### cancelLoad

▸ **cancelLoad**(): `void`

Cancels a [load()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load) operation if it is already in progress.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#cancelLoad)

#### Returns

`void`

#### Inherited from

Layer.cancelLoad

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2220

___

### createLayerView

▸ **createLayerView**(`view`, `options?`): `Promise`<`LayerView`\>

Called by the views, such as [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) and [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html), when the layer is added to the [Map.layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) collection and a layer view must be created for it.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#createLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `any` |
| `options?` | `LayerCreateLayerViewOptions` |

#### Returns

`Promise`<`LayerView`\>

#### Inherited from

Layer.createLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14044

___

### createServiceSublayers

▸ **createServiceSublayers**(): `Collection`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

Returns a deep clone of a map service's [sublayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html) as defined by the service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-SublayersOwner.html#createServiceSublayers)

#### Returns

`Collection`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

#### Inherited from

SublayersOwner.createServiceSublayers

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16535

___

### destroy

▸ **destroy**(): `void`

Destroys the layer and any associated resources (including its [portalItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#portalItem), if it is a property on the layer).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#destroy)

#### Returns

`void`

#### Inherited from

Layer.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14050

___

### emit

▸ **emit**(`type`, `event?`): `boolean`

Emits an event on the instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#emit)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | `any` |

#### Returns

`boolean`

#### Inherited from

Layer.emit

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2063

___

### fetchAttributionData

▸ **fetchAttributionData**(): `Promise`<`any`\>

Fetches custom attribution data for the layer when it becomes available.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fetchAttributionData)

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.fetchAttributionData

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14056

___

### fetchTile

▸ **fetchTile**(`level`, `row`, `col`, `options?`): `Promise`<`HTMLImageElement`\>

This method fetches a tile for the given level, row and column present in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#fetchTile)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `row` | `number` |
| `col` | `number` |
| `options?` | `TileLayerFetchTileOptions` |

#### Returns

`Promise`<`HTMLImageElement`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27270

___

### findSublayerById

▸ **findSublayerById**(`id`): [`EsriSublayer`](geo_esri.EsriSublayer.md)

Returns the sublayer with the given layerId.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-SublayersOwner.html#findSublayerById)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Inherited from

SublayersOwner.findSublayerById

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16541

___

### get

▸ **get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Layer.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21

▸ **get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Layer.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### getTileUrl

▸ **getTileUrl**(`level`, `row`, `col`): `string`

This method returns a URL to a tile for a given level, row and column.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#getTileUrl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `row` | `number` |
| `col` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27276

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

Indicates whether there is an event listener on the instance that matches the provided event name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#hasEventListener)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

Layer.hasEventListener

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2069

___

### hasHandles

▸ **hasHandles**<`T`\>(`groupKey?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`boolean`

#### Inherited from

Layer.hasHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

`isFulfilled()` may be used to verify if creating an instance of the class is fulfilled (either resolved or rejected).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isFulfilled)

#### Returns

`boolean`

#### Inherited from

Layer.isFulfilled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2226

___

### isRejected

▸ **isRejected**(): `boolean`

`isRejected()` may be used to verify if creating an instance of the class is rejected.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isRejected)

#### Returns

`boolean`

#### Inherited from

Layer.isRejected

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2232

___

### isResolved

▸ **isResolved**(): `boolean`

`isResolved()` may be used to verify if creating an instance of the class is resolved.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isResolved)

#### Returns

`boolean`

#### Inherited from

Layer.isResolved

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2238

___

### load

▸ **load**(`signal?`): `Promise`<`any`\>

Loads the resources referenced by this class.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal?` | `AbortSignal` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.load

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2244

___

### loadAll

▸ **loadAll**(): `Promise`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

Loads all of the sublayers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#loadAll)

#### Returns

`Promise`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27282

___

### notifyChange

▸ `Protected` **notifyChange**(`propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`void`

#### Inherited from

Layer.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

___

### on

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"refresh"`` |
| `eventHandler` | `TileLayerRefreshEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27283

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `TileLayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27284

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `TileLayerLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27285

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `TileLayerLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27286

___

### own

▸ **own**(`handles`): `void`

**`Deprecated`**

Since 4.25. Use addHandles(), removeHandles() and hasHandles() instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |

#### Returns

`void`

#### Inherited from

Layer.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

___

### refresh

▸ **refresh**(): `void`

Fetches all the data for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-RefreshableLayer.html#refresh)

#### Returns

`void`

#### Inherited from

RefreshableLayer.refresh

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16394

___

### removeHandles

▸ **removeHandles**<`T`\>(`groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Layer.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### watch

▸ **watch**(`path`, `callback`, `sync?`): `WatchHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `callback` | `WatchCallback` |
| `sync?` | `boolean` |

#### Returns

`WatchHandle`

#### Inherited from

Layer.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### when

▸ **when**(`callback?`, `errback?`): `Promise`<`any`\>

`when()` may be leveraged once an instance of the class is created.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#when)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Function` |
| `errback?` | `Function` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2250

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriTileLayer`](geo_esri.EsriTileLayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27287
