[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSublayer

# Class: EsriSublayer

[geo/esri](../modules/geo_esri.md).EsriSublayer

## Hierarchy

- `Accessor`

- `Loadable`

- `Identifiable`

  ↳ **`EsriSublayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSublayer.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriSublayer.md#declaredclass)
- [definitionExpression](geo_esri.EsriSublayer.md#definitionexpression)
- [destroyed](geo_esri.EsriSublayer.md#destroyed)
- [fields](geo_esri.EsriSublayer.md#fields)
- [fieldsIndex](geo_esri.EsriSublayer.md#fieldsindex)
- [floorInfo](geo_esri.EsriSublayer.md#floorinfo)
- [fullExtent](geo_esri.EsriSublayer.md#fullextent)
- [id](geo_esri.EsriSublayer.md#id)
- [initialized](geo_esri.EsriSublayer.md#initialized)
- [labelingInfo](geo_esri.EsriSublayer.md#labelinginfo)
- [labelsVisible](geo_esri.EsriSublayer.md#labelsvisible)
- [layer](geo_esri.EsriSublayer.md#layer)
- [legendEnabled](geo_esri.EsriSublayer.md#legendenabled)
- [listMode](geo_esri.EsriSublayer.md#listmode)
- [loadError](geo_esri.EsriSublayer.md#loaderror)
- [loadStatus](geo_esri.EsriSublayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriSublayer.md#loadwarnings)
- [maxScale](geo_esri.EsriSublayer.md#maxscale)
- [minScale](geo_esri.EsriSublayer.md#minscale)
- [objectIdField](geo_esri.EsriSublayer.md#objectidfield)
- [opacity](geo_esri.EsriSublayer.md#opacity)
- [popupEnabled](geo_esri.EsriSublayer.md#popupenabled)
- [popupTemplate](geo_esri.EsriSublayer.md#popuptemplate)
- [renderer](geo_esri.EsriSublayer.md#renderer)
- [source](geo_esri.EsriSublayer.md#source)
- [sourceJSON](geo_esri.EsriSublayer.md#sourcejson)
- [sublayers](geo_esri.EsriSublayer.md#sublayers)
- [title](geo_esri.EsriSublayer.md#title)
- [typeIdField](geo_esri.EsriSublayer.md#typeidfield)
- [types](geo_esri.EsriSublayer.md#types)
- [url](geo_esri.EsriSublayer.md#url)
- [visible](geo_esri.EsriSublayer.md#visible)

### Methods

- [\_get](geo_esri.EsriSublayer.md#_get)
- [\_set](geo_esri.EsriSublayer.md#_set)
- [addHandles](geo_esri.EsriSublayer.md#addhandles)
- [cancelLoad](geo_esri.EsriSublayer.md#cancelload)
- [clone](geo_esri.EsriSublayer.md#clone)
- [createFeatureLayer](geo_esri.EsriSublayer.md#createfeaturelayer)
- [createPopupTemplate](geo_esri.EsriSublayer.md#createpopuptemplate)
- [createQuery](geo_esri.EsriSublayer.md#createquery)
- [destroy](geo_esri.EsriSublayer.md#destroy)
- [get](geo_esri.EsriSublayer.md#get)
- [getFeatureType](geo_esri.EsriSublayer.md#getfeaturetype)
- [getFieldDomain](geo_esri.EsriSublayer.md#getfielddomain)
- [hasHandles](geo_esri.EsriSublayer.md#hashandles)
- [isFulfilled](geo_esri.EsriSublayer.md#isfulfilled)
- [isRejected](geo_esri.EsriSublayer.md#isrejected)
- [isResolved](geo_esri.EsriSublayer.md#isresolved)
- [load](geo_esri.EsriSublayer.md#load)
- [notifyChange](geo_esri.EsriSublayer.md#notifychange)
- [own](geo_esri.EsriSublayer.md#own)
- [queryAttachments](geo_esri.EsriSublayer.md#queryattachments)
- [queryFeatures](geo_esri.EsriSublayer.md#queryfeatures)
- [removeHandles](geo_esri.EsriSublayer.md#removehandles)
- [set](geo_esri.EsriSublayer.md#set)
- [watch](geo_esri.EsriSublayer.md#watch)
- [when](geo_esri.EsriSublayer.md#when)

## Constructors

### constructor

• **new EsriSublayer**(`properties?`)

Represents a sublayer in a [MapImageLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html) or a [TileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SublayerProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25426

## Properties

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Accessor.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### definitionExpression

• **definitionExpression**: `string`

A SQL where clause used to filter features in the image.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#definitionExpression)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25262

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Accessor.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### fields

• `Readonly` **fields**: [`EsriField`](geo_esri.EsriField.md)[]

An array of fields in the Sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#fields)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25268

___

### fieldsIndex

• `Readonly` **fieldsIndex**: `FieldsIndex`

A convenient property that can be used to make case-insensitive lookups for a [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#field) by name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#fieldsIndex)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25274

___

### floorInfo

• **floorInfo**: `LayerFloorInfo`

If a map image layer contains a sublayer which is meant to be floor-aware, then that sublayer must have a floorInfo property, containing a [LayerFloorInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LayerFloorInfo.html) object which has a string property to represent the floorField.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#floorInfo)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25280

___

### fullExtent

• `Readonly` **fullExtent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The full extent of the Sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#fullExtent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25286

___

### id

• **id**: `number`

The sublayer's layer ID.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#id)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25292

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### labelingInfo

• **labelingInfo**: `LabelClass`[]

The label definition for this layer, specified as an array of [LabelClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html) objects.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#labelingInfo)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25298

___

### labelsVisible

• **labelsVisible**: `boolean`

Indicates if labels for the sublayer will be visible in the view.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#labelsVisible)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25306

___

### layer

• **layer**: [`EsriMapImageLayer`](geo_esri.EsriMapImageLayer.md) \| [`EsriTileLayer`](geo_esri.EsriTileLayer.md)

The [MapImageLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html) or [TileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html) to which the sublayer belongs.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#layer)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25312

___

### legendEnabled

• **legendEnabled**: `boolean`

Indicates whether the layer will be included in the legend.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#legendEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25320

___

### listMode

• **listMode**: ``"show"`` \| ``"hide"`` \| ``"hide-children"``

Indicates how the layer should display in the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

**`Default`**

```ts
show

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#listMode)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25328

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

Loadable.loadError

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

Loadable.loadStatus

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2208

___

### loadWarnings

• `Readonly` **loadWarnings**: `any`[]

A list of warnings which occurred while loading.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadWarnings)

#### Inherited from

Loadable.loadWarnings

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2214

___

### maxScale

• **maxScale**: `number`

The maximum scale (most zoomed in) at which the layer is visible in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#maxScale)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25334

___

### minScale

• **minScale**: `number`

The minimum scale (most zoomed out) at which the layer is visible in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#minScale)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25340

___

### objectIdField

• `Readonly` **objectIdField**: `string`

The name of an `oid` [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#fields) containing a unique value or identifier for each feature in the Sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#objectIdField)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25346

___

### opacity

• **opacity**: `number`

The level of opacity to set on the sublayer on a scale from 0.0 - 1.0 where `0` is fully transparent and `1.0` is fully opaque.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#opacity)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25352

___

### popupEnabled

• **popupEnabled**: `boolean`

Indicates whether to display popups when features in the layer are clicked.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#popupEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25360

___

### popupTemplate

• **popupTemplate**: `PopupTemplate`

The popup template for the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#popupTemplate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25366

___

### renderer

• **renderer**: [`EsriRenderer`](geo_esri.EsriRenderer.md)

The renderer to apply to the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#renderer)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25372

___

### source

• **source**: `DynamicMapLayer` \| `DynamicDataLayer`

An object that allows you to create a dynamic layer with data either from the map service sublayers or data from a registered workspace.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#source)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25378

___

### sourceJSON

• **sourceJSON**: `any`

The [map service's metadata JSON](https://developers.arcgis.com/rest/services-reference/map-service.htm) exposed by the ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#sourceJSON)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25384

___

### sublayers

• **sublayers**: `Collection`<[`EsriSublayer`](geo_esri.EsriSublayer.md)\>

If a sublayer contains sublayers, this property is a [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) of [Sublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html) objects belonging to the given sublayer with sublayers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#sublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25390

___

### title

• **title**: `string`

The title of the sublayer used to identify it in places such as the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) and [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) widgets.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#title)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25396

___

### typeIdField

• `Readonly` **typeIdField**: `string`

The name of the field holding the type ID or subtypes for the features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#typeIdField)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25402

___

### types

• `Readonly` **types**: `FeatureType`[]

An array of subtypes defined in the feature service exposed by ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#types)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25408

___

### url

• **url**: `string`

The URL to the REST endpoint of the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#url)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25414

___

### visible

• **visible**: `boolean`

Indicates if the layer is visible in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#visible)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25420

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

Accessor.\_get

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

Accessor.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSublayer`](geo_esri.EsriSublayer.md)

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

[`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Inherited from

Accessor.\_set

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

Accessor.addHandles

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

Loadable.cancelLoad

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2220

___

### clone

▸ **clone**(): [`EsriSublayer`](geo_esri.EsriSublayer.md)

Creates a deep clone of the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#clone)

#### Returns

[`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25432

___

### createFeatureLayer

▸ **createFeatureLayer**(): `Promise`<[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)\>

A convenient method for creating a [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) instance based on the Sublayer's configuration, including [dynamic sources](https://enterprise.arcgis.com/en/server/latest/publish-services/linux/about-dynamic-layers.htm).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#createFeatureLayer)

#### Returns

`Promise`<[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25438

___

### createPopupTemplate

▸ **createPopupTemplate**(`options?`): `PopupTemplate`

Creates a popup template for the sublayer, populated with all the fields of the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#createPopupTemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CreatePopupTemplateOptions` |

#### Returns

`PopupTemplate`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25444

___

### createQuery

▸ **createQuery**(): [`EsriQuery`](geo_esri.EsriQuery.md)

Creates a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) object with default values representing the layer's state, including filters (definition expression) on the layer's features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#createQuery)

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25450

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

Accessor.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20

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

Accessor.get

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

Accessor.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### getFeatureType

▸ **getFeatureType**(`feature`): `FeatureType`

Returns a [FeatureType](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureType.html) describing the feature's type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#getFeatureType)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`FeatureType`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25456

___

### getFieldDomain

▸ **getFieldDomain**(`fieldName`, `options?`): `Domain`

Returns the [Domain](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Domain.html) associated with the given field name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#getFieldDomain)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `options?` | `SublayerGetFieldDomainOptions` |

#### Returns

`Domain`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25462

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

Accessor.hasHandles

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

Loadable.isFulfilled

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

Loadable.isRejected

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

Loadable.isResolved

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

Loadable.load

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

Accessor.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

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

Accessor.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

___

### queryAttachments

▸ **queryAttachments**(`attachmentQuery`, `options?`): `void`

TODO Documentation

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#queryAttachments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentQuery` | `AttachmentQuery` \| `AttachmentQueryProperties` |
| `options?` | `SublayerQueryAttachmentsOptions` |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25468

___

### queryFeatures

▸ **queryFeatures**(`query?`, `options?`): `Promise`<`FeatureSet`\>

Executes a [query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-query.html) against features in the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html#queryFeatures)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `options?` | `SublayerQueryFeaturesOptions` |

#### Returns

`Promise`<`FeatureSet`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25474

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

Accessor.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSublayer`](geo_esri.EsriSublayer.md)

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

[`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSublayer`](geo_esri.EsriSublayer.md)

#### Inherited from

Accessor.set

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

Accessor.watch

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

Loadable.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2250
