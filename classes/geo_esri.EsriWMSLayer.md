[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriWMSLayer

# Class: EsriWMSLayer

[geo/esri](../modules/geo_esri.md).EsriWMSLayer

## Hierarchy

- `Layer`

- `BlendLayer`

- `PortalLayer`

- `ScaleRangeLayer`

- `RefreshableLayer`

  ↳ **`EsriWMSLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriWMSLayer.md#constructor)

### Properties

- [allSublayers](geo_esri.EsriWMSLayer.md#allsublayers)
- [blendMode](geo_esri.EsriWMSLayer.md#blendmode)
- [copyright](geo_esri.EsriWMSLayer.md#copyright)
- [customLayerParameters](geo_esri.EsriWMSLayer.md#customlayerparameters)
- [customParameters](geo_esri.EsriWMSLayer.md#customparameters)
- [declaredClass](geo_esri.EsriWMSLayer.md#declaredclass)
- [description](geo_esri.EsriWMSLayer.md#description)
- [destroyed](geo_esri.EsriWMSLayer.md#destroyed)
- [dimensions](geo_esri.EsriWMSLayer.md#dimensions)
- [effect](geo_esri.EsriWMSLayer.md#effect)
- [featureInfoFormat](geo_esri.EsriWMSLayer.md#featureinfoformat)
- [featureInfoFormats](geo_esri.EsriWMSLayer.md#featureinfoformats)
- [featureInfoUrl](geo_esri.EsriWMSLayer.md#featureinfourl)
- [fetchFeatureInfoFunction](geo_esri.EsriWMSLayer.md#fetchfeatureinfofunction)
- [fullExtent](geo_esri.EsriWMSLayer.md#fullextent)
- [fullExtents](geo_esri.EsriWMSLayer.md#fullextents)
- [id](geo_esri.EsriWMSLayer.md#id)
- [imageFormat](geo_esri.EsriWMSLayer.md#imageformat)
- [imageMaxHeight](geo_esri.EsriWMSLayer.md#imagemaxheight)
- [imageMaxWidth](geo_esri.EsriWMSLayer.md#imagemaxwidth)
- [imageTransparency](geo_esri.EsriWMSLayer.md#imagetransparency)
- [initialized](geo_esri.EsriWMSLayer.md#initialized)
- [legendEnabled](geo_esri.EsriWMSLayer.md#legendenabled)
- [listMode](geo_esri.EsriWMSLayer.md#listmode)
- [loadError](geo_esri.EsriWMSLayer.md#loaderror)
- [loadStatus](geo_esri.EsriWMSLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriWMSLayer.md#loadwarnings)
- [loaded](geo_esri.EsriWMSLayer.md#loaded)
- [maxScale](geo_esri.EsriWMSLayer.md#maxscale)
- [minScale](geo_esri.EsriWMSLayer.md#minscale)
- [opacity](geo_esri.EsriWMSLayer.md#opacity)
- [portalItem](geo_esri.EsriWMSLayer.md#portalitem)
- [refreshInterval](geo_esri.EsriWMSLayer.md#refreshinterval)
- [spatialReference](geo_esri.EsriWMSLayer.md#spatialreference)
- [spatialReferences](geo_esri.EsriWMSLayer.md#spatialreferences)
- [sublayers](geo_esri.EsriWMSLayer.md#sublayers)
- [timeExtent](geo_esri.EsriWMSLayer.md#timeextent)
- [timeInfo](geo_esri.EsriWMSLayer.md#timeinfo)
- [timeOffset](geo_esri.EsriWMSLayer.md#timeoffset)
- [title](geo_esri.EsriWMSLayer.md#title)
- [type](geo_esri.EsriWMSLayer.md#type)
- [url](geo_esri.EsriWMSLayer.md#url)
- [useViewTime](geo_esri.EsriWMSLayer.md#useviewtime)
- [version](geo_esri.EsriWMSLayer.md#version)
- [visible](geo_esri.EsriWMSLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriWMSLayer.md#_get)
- [\_set](geo_esri.EsriWMSLayer.md#_set)
- [addHandles](geo_esri.EsriWMSLayer.md#addhandles)
- [cancelLoad](geo_esri.EsriWMSLayer.md#cancelload)
- [createLayerView](geo_esri.EsriWMSLayer.md#createlayerview)
- [destroy](geo_esri.EsriWMSLayer.md#destroy)
- [emit](geo_esri.EsriWMSLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriWMSLayer.md#fetchattributiondata)
- [fetchImage](geo_esri.EsriWMSLayer.md#fetchimage)
- [findSublayerById](geo_esri.EsriWMSLayer.md#findsublayerbyid)
- [findSublayerByName](geo_esri.EsriWMSLayer.md#findsublayerbyname)
- [get](geo_esri.EsriWMSLayer.md#get)
- [hasEventListener](geo_esri.EsriWMSLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriWMSLayer.md#hashandles)
- [isFulfilled](geo_esri.EsriWMSLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriWMSLayer.md#isrejected)
- [isResolved](geo_esri.EsriWMSLayer.md#isresolved)
- [load](geo_esri.EsriWMSLayer.md#load)
- [notifyChange](geo_esri.EsriWMSLayer.md#notifychange)
- [on](geo_esri.EsriWMSLayer.md#on)
- [own](geo_esri.EsriWMSLayer.md#own)
- [refresh](geo_esri.EsriWMSLayer.md#refresh)
- [removeHandles](geo_esri.EsriWMSLayer.md#removehandles)
- [set](geo_esri.EsriWMSLayer.md#set)
- [watch](geo_esri.EsriWMSLayer.md#watch)
- [when](geo_esri.EsriWMSLayer.md#when)
- [fromJSON](geo_esri.EsriWMSLayer.md#fromjson)

## Constructors

### constructor

• **new EsriWMSLayer**(`properties?`)

The WMSLayer is used to create layers based on OGC Web Map Services (WMS).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `WMSLayerProperties` |

#### Inherited from

Layer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30828

## Properties

### allSublayers

• **allSublayers**: `Collection`<[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)\>

A flattened collection of all [WMSSublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html)s based on the [`sublayers`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#sublayers) property.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#allSublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30661

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

### copyright

• **copyright**: `string`

Copyright information for the WMS service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#copyright)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30667

___

### customLayerParameters

• **customLayerParameters**: `any`

Use this to append different custom parameters to the WMS map requests.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#customLayerParameters)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30673

___

### customParameters

• **customParameters**: `any`

Use this to append custom parameters to all WMS requests.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#customParameters)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30679

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Layer.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### description

• **description**: `string`

Description for the WMS layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#description)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30685

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Layer.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### dimensions

• `Readonly` **dimensions**: (`TimeDimension` \| `ElevationDimension` \| `GenericDimension`)[]

An array of time, elevation and other dimensions for the root layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#dimensions)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30691

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

### featureInfoFormat

• **featureInfoFormat**: ``null`` \| ``"text/html"`` \| ``"text/plain"``

The MIME type that will be requested by popups.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#featureInfoFormat)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30697

___

### featureInfoFormats

• `Readonly` **featureInfoFormats**: `string`[]

This property lists all available MIME-types that can be used with the WMS service's _GetFeatureInfo_ request.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#featureInfoFormats)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30703

___

### featureInfoUrl

• **featureInfoUrl**: `string`

The URL for the WMS GetFeatureInfo call.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#featureInfoUrl)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30709

___

### fetchFeatureInfoFunction

• **fetchFeatureInfoFunction**: `FetchFeatureInfoFunction`

Function to override the default popup behavior of `WMSLayer`.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#fetchFeatureInfoFunction)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30717

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

### fullExtents

• **fullExtents**: [`EsriExtent`](geo_esri.EsriExtent.md)[]

All bounding boxes defined for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#fullExtents)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30723

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

### imageFormat

• **imageFormat**: `string`

The map image format (MIME type) to request.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#imageFormat)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30729

___

### imageMaxHeight

• **imageMaxHeight**: `number`

Indicates the maximum height of the image exported by the service.

**`Default`**

```ts
2048

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#imageMaxHeight)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30737

___

### imageMaxWidth

• **imageMaxWidth**: `number`

Indicates the maximum width of the image exported by the service.

**`Default`**

```ts
2048

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#imageMaxWidth)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30745

___

### imageTransparency

• **imageTransparency**: `boolean`

Indicates whether the background of the image exported by the service is transparent.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#imageTransparency)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30753

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

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#legendEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30761

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

### spatialReference

• **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#spatialReference)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30767

___

### spatialReferences

• **spatialReferences**: `number`[]

List of spatialReference well known ids derived from the CRS elements of the first layer in the GetCapabilities request.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#spatialReferences)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30773

___

### sublayers

• **sublayers**: `Collection`<[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)\>

A subset of the layer's [WMSSublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html)s that will be displayed.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#sublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30779

___

### timeExtent

• **timeExtent**: `TimeExtent`

The layer's time extent.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#timeExtent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30785

___

### timeInfo

• **timeInfo**: `TimeInfo`

TimeInfo provides information such as date fields that store [start](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#startField) and [end](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#endField) time for each feature and the [fullTimeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#fullTimeExtent) for the layer.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#timeInfo)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30793

___

### timeOffset

• **timeOffset**: `TimeInterval`

A temporary offset of the time data based on a certain [TimeInterval](https://developers.arcgis.com/javascript/latest/api-reference/esri-TimeInterval.html).

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#timeOffset)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30801

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

• `Readonly` **type**: ``"wms"``

#### Inherited from

Layer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30802

___

### url

• **url**: `string`

The URL of the WMS service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#url)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30808

___

### useViewTime

• **useViewTime**: `boolean`

Determines if the layer will update its temporal data based on the view's [timeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#timeExtent).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#useViewTime)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30816

___

### version

• **version**: `string`

Version of the [WMS specification](http://www.opengeospatial.org/standards/wms) to use.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#version)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30822

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

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

[`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

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

### fetchImage

▸ **fetchImage**(`extent`, `width`, `height`, `options?`): `Promise`<`any`\>

Fetching the WMS image.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#fetchImage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |
| `width` | `number` |
| `height` | `number` |
| `options?` | `WMSLayerFetchImageOptions` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30834

___

### findSublayerById

▸ **findSublayerById**(`id`): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

Returns a [WMSSublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html) based on the given sublayer id.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#findSublayerById)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30840

___

### findSublayerByName

▸ **findSublayerByName**(`name`): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

Returns a [WMSSublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html) based on the given sublayer name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html#findSublayerByName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30846

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
| `eventHandler` | `WMSLayerRefreshEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30847

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `WMSLayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30848

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `WMSLayerLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30849

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `WMSLayerLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30850

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

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

[`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30851
