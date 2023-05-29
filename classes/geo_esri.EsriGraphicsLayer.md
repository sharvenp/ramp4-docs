[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriGraphicsLayer

# Class: EsriGraphicsLayer

[geo/esri](../modules/geo_esri.md).EsriGraphicsLayer

## Hierarchy

- `Layer`

- `ScaleRangeLayer`

- `BlendLayer`

  ↳ **`EsriGraphicsLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriGraphicsLayer.md#constructor)

### Properties

- [blendMode](geo_esri.EsriGraphicsLayer.md#blendmode)
- [declaredClass](geo_esri.EsriGraphicsLayer.md#declaredclass)
- [destroyed](geo_esri.EsriGraphicsLayer.md#destroyed)
- [effect](geo_esri.EsriGraphicsLayer.md#effect)
- [elevationInfo](geo_esri.EsriGraphicsLayer.md#elevationinfo)
- [fullExtent](geo_esri.EsriGraphicsLayer.md#fullextent)
- [graphics](geo_esri.EsriGraphicsLayer.md#graphics)
- [id](geo_esri.EsriGraphicsLayer.md#id)
- [initialized](geo_esri.EsriGraphicsLayer.md#initialized)
- [listMode](geo_esri.EsriGraphicsLayer.md#listmode)
- [loadError](geo_esri.EsriGraphicsLayer.md#loaderror)
- [loadStatus](geo_esri.EsriGraphicsLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriGraphicsLayer.md#loadwarnings)
- [loaded](geo_esri.EsriGraphicsLayer.md#loaded)
- [maxScale](geo_esri.EsriGraphicsLayer.md#maxscale)
- [minScale](geo_esri.EsriGraphicsLayer.md#minscale)
- [opacity](geo_esri.EsriGraphicsLayer.md#opacity)
- [screenSizePerspectiveEnabled](geo_esri.EsriGraphicsLayer.md#screensizeperspectiveenabled)
- [title](geo_esri.EsriGraphicsLayer.md#title)
- [type](geo_esri.EsriGraphicsLayer.md#type)
- [visible](geo_esri.EsriGraphicsLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriGraphicsLayer.md#_get)
- [\_set](geo_esri.EsriGraphicsLayer.md#_set)
- [add](geo_esri.EsriGraphicsLayer.md#add)
- [addHandles](geo_esri.EsriGraphicsLayer.md#addhandles)
- [addMany](geo_esri.EsriGraphicsLayer.md#addmany)
- [cancelLoad](geo_esri.EsriGraphicsLayer.md#cancelload)
- [createLayerView](geo_esri.EsriGraphicsLayer.md#createlayerview)
- [destroy](geo_esri.EsriGraphicsLayer.md#destroy)
- [emit](geo_esri.EsriGraphicsLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriGraphicsLayer.md#fetchattributiondata)
- [get](geo_esri.EsriGraphicsLayer.md#get)
- [hasEventListener](geo_esri.EsriGraphicsLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriGraphicsLayer.md#hashandles)
- [isFulfilled](geo_esri.EsriGraphicsLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriGraphicsLayer.md#isrejected)
- [isResolved](geo_esri.EsriGraphicsLayer.md#isresolved)
- [load](geo_esri.EsriGraphicsLayer.md#load)
- [notifyChange](geo_esri.EsriGraphicsLayer.md#notifychange)
- [on](geo_esri.EsriGraphicsLayer.md#on)
- [own](geo_esri.EsriGraphicsLayer.md#own)
- [remove](geo_esri.EsriGraphicsLayer.md#remove)
- [removeAll](geo_esri.EsriGraphicsLayer.md#removeall)
- [removeHandles](geo_esri.EsriGraphicsLayer.md#removehandles)
- [removeMany](geo_esri.EsriGraphicsLayer.md#removemany)
- [set](geo_esri.EsriGraphicsLayer.md#set)
- [watch](geo_esri.EsriGraphicsLayer.md#watch)
- [when](geo_esri.EsriGraphicsLayer.md#when)

## Constructors

### constructor

• **new EsriGraphicsLayer**(`properties?`)

A GraphicsLayer contains one or more client-side [Graphics](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `GraphicsLayerProperties` |

#### Inherited from

Layer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12930

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

BlendLayer.blendMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15534

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

### elevationInfo

• **elevationInfo**: `GraphicsLayerElevationInfo`

Specifies how graphics are placed on the vertical axis (z).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#elevationInfo)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12909

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

### graphics

• **graphics**: `Collection`<[`EsriGraphic`](geo_esri.EsriGraphic.md)\>

A collection of [graphics](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#graphics)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12915

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

### screenSizePerspectiveEnabled

• **screenSizePerspectiveEnabled**: `boolean`

Apply perspective scaling to screen-size point symbols in a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#screenSizePerspectiveEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12923

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

• `Readonly` **type**: ``"graphics"``

#### Inherited from

Layer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12924

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

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

[`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

#### Inherited from

Layer.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### add

▸ **add**(`graphic`): `void`

Adds a graphic to the layer's graphic collection.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#add)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12936

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

### addMany

▸ **addMany**(`graphics`): `void`

Adds an array of graphics to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#addMany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`EsriGraphic`](geo_esri.EsriGraphic.md)[] |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12942

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
| `name` | ``"layerview-create"`` |
| `eventHandler` | `LayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

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

Layer.on

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

Layer.on

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

Layer.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

___

### remove

▸ **remove**(`graphic`): `void`

Removes a graphic from the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#remove)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12948

___

### removeAll

▸ **removeAll**(): `void`

Clears all the graphics from the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#removeAll)

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12954

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

### removeMany

▸ **removeMany**(`graphics`): `void`

Removes an array of graphics from the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#removeMany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`EsriGraphic`](geo_esri.EsriGraphic.md)[] |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:12960

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

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

[`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md)

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
