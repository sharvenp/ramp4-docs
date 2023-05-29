[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriOpenStreetMapLayer

# Class: EsriOpenStreetMapLayer

[geo/esri](../modules/geo_esri.md).EsriOpenStreetMapLayer

## Hierarchy

- `WebTileLayer`

  ↳ **`EsriOpenStreetMapLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriOpenStreetMapLayer.md#constructor)

### Properties

- [blendMode](geo_esri.EsriOpenStreetMapLayer.md#blendmode)
- [copyright](geo_esri.EsriOpenStreetMapLayer.md#copyright)
- [declaredClass](geo_esri.EsriOpenStreetMapLayer.md#declaredclass)
- [destroyed](geo_esri.EsriOpenStreetMapLayer.md#destroyed)
- [effect](geo_esri.EsriOpenStreetMapLayer.md#effect)
- [fullExtent](geo_esri.EsriOpenStreetMapLayer.md#fullextent)
- [id](geo_esri.EsriOpenStreetMapLayer.md#id)
- [initialized](geo_esri.EsriOpenStreetMapLayer.md#initialized)
- [listMode](geo_esri.EsriOpenStreetMapLayer.md#listmode)
- [loadError](geo_esri.EsriOpenStreetMapLayer.md#loaderror)
- [loadStatus](geo_esri.EsriOpenStreetMapLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriOpenStreetMapLayer.md#loadwarnings)
- [loaded](geo_esri.EsriOpenStreetMapLayer.md#loaded)
- [maxScale](geo_esri.EsriOpenStreetMapLayer.md#maxscale)
- [minScale](geo_esri.EsriOpenStreetMapLayer.md#minscale)
- [opacity](geo_esri.EsriOpenStreetMapLayer.md#opacity)
- [portalItem](geo_esri.EsriOpenStreetMapLayer.md#portalitem)
- [refreshInterval](geo_esri.EsriOpenStreetMapLayer.md#refreshinterval)
- [spatialReference](geo_esri.EsriOpenStreetMapLayer.md#spatialreference)
- [subDomains](geo_esri.EsriOpenStreetMapLayer.md#subdomains)
- [tileInfo](geo_esri.EsriOpenStreetMapLayer.md#tileinfo)
- [tileServers](geo_esri.EsriOpenStreetMapLayer.md#tileservers)
- [title](geo_esri.EsriOpenStreetMapLayer.md#title)
- [type](geo_esri.EsriOpenStreetMapLayer.md#type)
- [urlTemplate](geo_esri.EsriOpenStreetMapLayer.md#urltemplate)
- [visible](geo_esri.EsriOpenStreetMapLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriOpenStreetMapLayer.md#_get)
- [\_set](geo_esri.EsriOpenStreetMapLayer.md#_set)
- [addHandles](geo_esri.EsriOpenStreetMapLayer.md#addhandles)
- [cancelLoad](geo_esri.EsriOpenStreetMapLayer.md#cancelload)
- [createLayerView](geo_esri.EsriOpenStreetMapLayer.md#createlayerview)
- [destroy](geo_esri.EsriOpenStreetMapLayer.md#destroy)
- [emit](geo_esri.EsriOpenStreetMapLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriOpenStreetMapLayer.md#fetchattributiondata)
- [fetchTile](geo_esri.EsriOpenStreetMapLayer.md#fetchtile)
- [get](geo_esri.EsriOpenStreetMapLayer.md#get)
- [getTileUrl](geo_esri.EsriOpenStreetMapLayer.md#gettileurl)
- [hasEventListener](geo_esri.EsriOpenStreetMapLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriOpenStreetMapLayer.md#hashandles)
- [isFulfilled](geo_esri.EsriOpenStreetMapLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriOpenStreetMapLayer.md#isrejected)
- [isResolved](geo_esri.EsriOpenStreetMapLayer.md#isresolved)
- [load](geo_esri.EsriOpenStreetMapLayer.md#load)
- [notifyChange](geo_esri.EsriOpenStreetMapLayer.md#notifychange)
- [on](geo_esri.EsriOpenStreetMapLayer.md#on)
- [own](geo_esri.EsriOpenStreetMapLayer.md#own)
- [refresh](geo_esri.EsriOpenStreetMapLayer.md#refresh)
- [removeHandles](geo_esri.EsriOpenStreetMapLayer.md#removehandles)
- [set](geo_esri.EsriOpenStreetMapLayer.md#set)
- [watch](geo_esri.EsriOpenStreetMapLayer.md#watch)
- [when](geo_esri.EsriOpenStreetMapLayer.md#when)
- [fromJSON](geo_esri.EsriOpenStreetMapLayer.md#fromjson)

## Constructors

### constructor

• **new EsriOpenStreetMapLayer**(`properties?`)

Allows you to use [basemaps](http://wiki.openstreetmap.org/wiki/List_of_OSM-based_services) from [OpenStreetMap](http://www.openstreetmap.org/).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OpenStreetMapLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `OpenStreetMapLayerProperties` |

#### Overrides

WebTileLayer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17199

## Properties

### blendMode

• **blendMode**: ``"screen"`` \| ``"average"`` \| ``"color-burn"`` \| ``"color-dodge"`` \| ``"color"`` \| ``"darken"`` \| ``"destination-atop"`` \| ``"destination-in"`` \| ``"destination-out"`` \| ``"destination-over"`` \| ``"difference"`` \| ``"exclusion"`` \| ``"hard-light"`` \| ``"hue"`` \| ``"invert"`` \| ``"lighten"`` \| ``"lighter"`` \| ``"luminosity"`` \| ``"minus"`` \| ``"multiply"`` \| ``"normal"`` \| ``"overlay"`` \| ``"plus"`` \| ``"reflect"`` \| ``"saturation"`` \| ``"soft-light"`` \| ``"source-atop"`` \| ``"source-in"`` \| ``"source-out"`` \| ``"vivid-light"`` \| ``"xor"``

Blend modes are used to blend layers together to create an interesting effect in a layer, or even to produce what seems like a new layer.

**`Default`**

```ts
normal

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-BlendLayer.html#blendMode)
```

#### Inherited from

WebTileLayer.blendMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15534

___

### copyright

• **copyright**: `string`

The attribution information for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#copyright)

#### Inherited from

WebTileLayer.copyright

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29787

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

WebTileLayer.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

WebTileLayer.destroyed

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

WebTileLayer.effect

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15572

___

### fullExtent

• **fullExtent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The full extent of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fullExtent)

#### Inherited from

WebTileLayer.fullExtent

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13943

___

### id

• **id**: `string`

The unique ID assigned to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#id)

#### Inherited from

WebTileLayer.id

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13949

___

### initialized

• **initialized**: `boolean`

#### Inherited from

WebTileLayer.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

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

WebTileLayer.listMode

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

WebTileLayer.loadError

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

WebTileLayer.loadStatus

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2208

___

### loadWarnings

• `Readonly` **loadWarnings**: `any`[]

A list of warnings which occurred while loading.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadWarnings)

#### Inherited from

WebTileLayer.loadWarnings

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

WebTileLayer.loaded

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

WebTileLayer.maxScale

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

WebTileLayer.minScale

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

WebTileLayer.opacity

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13973

___

### portalItem

• **portalItem**: `PortalItem`

The portal item from which the layer is loaded.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-PortalLayer.html#portalItem)

#### Inherited from

WebTileLayer.portalItem

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

WebTileLayer.refreshInterval

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16388

___

### spatialReference

• `Readonly` **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the layer.

**`Default`**

```ts
Web Mercator Auxiliary Sphere (wkid: 3857)

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#spatialReference)
```

#### Inherited from

WebTileLayer.spatialReference

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29795

___

### subDomains

• **subDomains**: `string`[]

A string of subDomain names where tiles are served to speed up tile retrieval.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#subDomains)

#### Inherited from

WebTileLayer.subDomains

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29801

___

### tileInfo

• **tileInfo**: `TileInfo`

The tiling scheme information for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#tileInfo)

#### Inherited from

WebTileLayer.tileInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29807

___

### tileServers

• `Readonly` **tileServers**: `string`[]

The list of tile server urls for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#tileServers)

#### Inherited from

WebTileLayer.tileServers

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29813

___

### title

• **title**: `string`

The title of the layer used to identify it in places such as the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#title)

#### Inherited from

WebTileLayer.title

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13979

___

### type

• `Readonly` **type**: ``"open-street-map"``

#### Overrides

WebTileLayer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17193

___

### urlTemplate

• **urlTemplate**: `string`

The url template is a string that specifies the URL of the hosted tile images to load.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#urlTemplate)

#### Inherited from

WebTileLayer.urlTemplate

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29825

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

WebTileLayer.visible

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

WebTileLayer.\_get

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

WebTileLayer.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

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

[`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Inherited from

WebTileLayer.\_set

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

WebTileLayer.addHandles

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

WebTileLayer.cancelLoad

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

WebTileLayer.createLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14044

___

### destroy

▸ **destroy**(): `void`

Destroys the layer and any associated resources (including its [portalItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#portalItem), if it is a property on the layer).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#destroy)

#### Returns

`void`

#### Inherited from

WebTileLayer.destroy

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

WebTileLayer.emit

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

WebTileLayer.fetchAttributionData

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14056

___

### fetchTile

▸ **fetchTile**(`level`, `row`, `column`, `options?`): `Promise`<`HTMLImageElement`\>

This method fetches a tile for the given level, row and column present in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#fetchTile)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `row` | `number` |
| `column` | `number` |
| `options?` | `WebTileLayerFetchTileOptions` |

#### Returns

`Promise`<`HTMLImageElement`\>

#### Inherited from

WebTileLayer.fetchTile

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29837

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

WebTileLayer.get

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

WebTileLayer.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### getTileUrl

▸ **getTileUrl**(`level`, `row`, `col`): `string`

This method returns a URL to a tile for a given level, row and column.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html#getTileUrl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `row` | `number` |
| `col` | `number` |

#### Returns

`string`

#### Inherited from

WebTileLayer.getTileUrl

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29843

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

WebTileLayer.hasEventListener

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

WebTileLayer.hasHandles

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

WebTileLayer.isFulfilled

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

WebTileLayer.isRejected

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

WebTileLayer.isResolved

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

WebTileLayer.load

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2244

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

WebTileLayer.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

___

### on

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `LayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

WebTileLayer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14057

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `LayerLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

WebTileLayer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14058

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `LayerLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

WebTileLayer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14059

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

WebTileLayer.own

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

WebTileLayer.refresh

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

WebTileLayer.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

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

[`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Inherited from

WebTileLayer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Inherited from

WebTileLayer.set

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

WebTileLayer.watch

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

WebTileLayer.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2250

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriOpenStreetMapLayer`](geo_esri.EsriOpenStreetMapLayer.md)

#### Overrides

WebTileLayer.fromJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17200
