[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriBasemap

# Class: EsriBasemap

[geo/esri](../modules/geo_esri.md).EsriBasemap

## Hierarchy

- `Accessor`

- `Loadable`

- `JSONSupport`

  ↳ **`EsriBasemap`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriBasemap.md#constructor)

### Properties

- [baseLayers](geo_esri.EsriBasemap.md#baselayers)
- [declaredClass](geo_esri.EsriBasemap.md#declaredclass)
- [destroyed](geo_esri.EsriBasemap.md#destroyed)
- [id](geo_esri.EsriBasemap.md#id)
- [initialized](geo_esri.EsriBasemap.md#initialized)
- [loadError](geo_esri.EsriBasemap.md#loaderror)
- [loadStatus](geo_esri.EsriBasemap.md#loadstatus)
- [loadWarnings](geo_esri.EsriBasemap.md#loadwarnings)
- [loaded](geo_esri.EsriBasemap.md#loaded)
- [portalItem](geo_esri.EsriBasemap.md#portalitem)
- [referenceLayers](geo_esri.EsriBasemap.md#referencelayers)
- [spatialReference](geo_esri.EsriBasemap.md#spatialreference)
- [thumbnailUrl](geo_esri.EsriBasemap.md#thumbnailurl)
- [title](geo_esri.EsriBasemap.md#title)

### Methods

- [\_get](geo_esri.EsriBasemap.md#_get)
- [\_set](geo_esri.EsriBasemap.md#_set)
- [addHandles](geo_esri.EsriBasemap.md#addhandles)
- [cancelLoad](geo_esri.EsriBasemap.md#cancelload)
- [clone](geo_esri.EsriBasemap.md#clone)
- [destroy](geo_esri.EsriBasemap.md#destroy)
- [get](geo_esri.EsriBasemap.md#get)
- [hasHandles](geo_esri.EsriBasemap.md#hashandles)
- [isFulfilled](geo_esri.EsriBasemap.md#isfulfilled)
- [isRejected](geo_esri.EsriBasemap.md#isrejected)
- [isResolved](geo_esri.EsriBasemap.md#isresolved)
- [load](geo_esri.EsriBasemap.md#load)
- [loadAll](geo_esri.EsriBasemap.md#loadall)
- [notifyChange](geo_esri.EsriBasemap.md#notifychange)
- [own](geo_esri.EsriBasemap.md#own)
- [removeHandles](geo_esri.EsriBasemap.md#removehandles)
- [set](geo_esri.EsriBasemap.md#set)
- [toJSON](geo_esri.EsriBasemap.md#tojson)
- [watch](geo_esri.EsriBasemap.md#watch)
- [when](geo_esri.EsriBasemap.md#when)
- [fromId](geo_esri.EsriBasemap.md#fromid)
- [fromJSON](geo_esri.EsriBasemap.md#fromjson)

## Constructors

### constructor

• **new EsriBasemap**(`properties?`)

Creates a new basemap object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `BasemapProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1340

## Properties

### baseLayers

• **baseLayers**: `Collection`<`Layer`\>

A collection of tile layers that make up the basemap's features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#baseLayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1290

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Accessor.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Accessor.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### id

• **id**: `string`

An identifier used to refer to the basemap when referencing it elsewhere.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#id)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1296

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

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

### loaded

• `Readonly` **loaded**: `boolean`

Indicates whether the basemap instance has loaded.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#loaded)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1304

___

### portalItem

• **portalItem**: `PortalItem`

The portal item.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#portalItem)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1310

___

### referenceLayers

• **referenceLayers**: `Collection`<`Layer`\>

A collection of tiled reference layers for displaying labels.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#referenceLayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1316

___

### spatialReference

• **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the Basemap.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#spatialReference)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1322

___

### thumbnailUrl

• **thumbnailUrl**: `string`

The URL pointing to an image that represents the basemap.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#thumbnailUrl)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1328

___

### title

• **title**: `string`

The title of the basemap.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#title)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1334

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriBasemap`](geo_esri.EsriBasemap.md)

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

[`EsriBasemap`](geo_esri.EsriBasemap.md)

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

▸ **clone**(): [`EsriBasemap`](geo_esri.EsriBasemap.md)

Creates a deep clone of this object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#clone)

#### Returns

[`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1346

___

### destroy

▸ **destroy**(): `void`

Destroys the basemap, and any associated resources, including its [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#layers) and [portalItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#portalItem).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#destroy)

#### Returns

`void`

#### Inherited from

Accessor.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1352

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

### loadAll

▸ **loadAll**(): `Promise`<[`EsriBasemap`](geo_esri.EsriBasemap.md)\>

Loads all the externally loadable resources associated with the basemap.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#loadAll)

#### Returns

`Promise`<[`EsriBasemap`](geo_esri.EsriBasemap.md)\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1358

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriBasemap`](geo_esri.EsriBasemap.md)

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

[`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### toJSON

▸ **toJSON**(): `any`

Converts an instance of this class to its [ArcGIS portal JSON](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) representation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-JSONSupport.html#toJSON)

#### Returns

`any`

#### Inherited from

JSONSupport.toJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2167

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

___

### fromId

▸ `Static` **fromId**(`id`): [`EsriBasemap`](geo_esri.EsriBasemap.md)

Creates a new basemap instance from a [well known basemap ID](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#fromId)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1364

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1365
