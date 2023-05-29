[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriWMSSublayer

# Class: EsriWMSSublayer

[geo/esri](../modules/geo_esri.md).EsriWMSSublayer

## Hierarchy

- `Accessor`

- `Identifiable`

  ↳ **`EsriWMSSublayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriWMSSublayer.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriWMSSublayer.md#declaredclass)
- [description](geo_esri.EsriWMSSublayer.md#description)
- [destroyed](geo_esri.EsriWMSSublayer.md#destroyed)
- [dimensions](geo_esri.EsriWMSSublayer.md#dimensions)
- [fullExtent](geo_esri.EsriWMSSublayer.md#fullextent)
- [id](geo_esri.EsriWMSSublayer.md#id)
- [initialized](geo_esri.EsriWMSSublayer.md#initialized)
- [layer](geo_esri.EsriWMSSublayer.md#layer)
- [legendEnabled](geo_esri.EsriWMSSublayer.md#legendenabled)
- [legendUrl](geo_esri.EsriWMSSublayer.md#legendurl)
- [maxScale](geo_esri.EsriWMSSublayer.md#maxscale)
- [minScale](geo_esri.EsriWMSSublayer.md#minscale)
- [name](geo_esri.EsriWMSSublayer.md#name)
- [parent](geo_esri.EsriWMSSublayer.md#parent)
- [popupEnabled](geo_esri.EsriWMSSublayer.md#popupenabled)
- [queryable](geo_esri.EsriWMSSublayer.md#queryable)
- [spatialReferences](geo_esri.EsriWMSSublayer.md#spatialreferences)
- [sublayers](geo_esri.EsriWMSSublayer.md#sublayers)
- [title](geo_esri.EsriWMSSublayer.md#title)
- [visible](geo_esri.EsriWMSSublayer.md#visible)

### Methods

- [\_get](geo_esri.EsriWMSSublayer.md#_get)
- [\_set](geo_esri.EsriWMSSublayer.md#_set)
- [addHandles](geo_esri.EsriWMSSublayer.md#addhandles)
- [clone](geo_esri.EsriWMSSublayer.md#clone)
- [destroy](geo_esri.EsriWMSSublayer.md#destroy)
- [get](geo_esri.EsriWMSSublayer.md#get)
- [hasHandles](geo_esri.EsriWMSSublayer.md#hashandles)
- [notifyChange](geo_esri.EsriWMSSublayer.md#notifychange)
- [own](geo_esri.EsriWMSSublayer.md#own)
- [removeHandles](geo_esri.EsriWMSSublayer.md#removehandles)
- [set](geo_esri.EsriWMSSublayer.md#set)
- [watch](geo_esri.EsriWMSSublayer.md#watch)

## Constructors

### constructor

• **new EsriWMSSublayer**(`properties?`)

Represents a sublayer in a [WMSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `WMSSublayerProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26704

## Properties

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Accessor.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### description

• **description**: `string`

Description for the WMS sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#description)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26592

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Accessor.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### dimensions

• `Readonly` **dimensions**: (`TimeDimension` \| `ElevationDimension` \| `GenericDimension`)[]

An array of time, elevation and other dimensions for the sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#dimensions)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26598

___

### fullExtent

• **fullExtent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The full extent of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#fullExtent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26604

___

### id

• **id**: `number`

The id for the WMS sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#id)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26610

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### layer

• **layer**: [`EsriWMSLayer`](geo_esri.EsriWMSLayer.md)

The [WMSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html) to which the sublayer belongs.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#layer)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26616

___

### legendEnabled

• **legendEnabled**: `boolean`

Indicates whether the layer will be included in the legend.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#legendEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26624

___

### legendUrl

• **legendUrl**: `string`

A string url pointing to a legend image for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#legendUrl)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26630

___

### maxScale

• **maxScale**: `number`

The maximum scale (most zoomed in) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#maxScale)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26638

___

### minScale

• **minScale**: `number`

The minimum scale (most zoomed out) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#minScale)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26646

___

### name

• **name**: `string`

Name of the WMS sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#name)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26652

___

### parent

• **parent**: `any`

Returns a reference to the parent WMS sublayer or layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#parent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26658

___

### popupEnabled

• **popupEnabled**: `boolean`

Indicates whether to display popups when features in the layer are clicked.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#popupEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26666

___

### queryable

• **queryable**: `boolean`

Indicates if the layer can be queried, i.e.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#queryable)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26674

___

### spatialReferences

• **spatialReferences**: `number`[]

List of spatialReferences (WKID) derived from the CRS elements of the first layer in the GetCapabilities request.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#spatialReferences)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26680

___

### sublayers

• **sublayers**: `Collection`<[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)\>

A collection of [WMSSublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html)s.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#sublayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26686

___

### title

• **title**: `string`

The title of the WMS sublayer used to identify it in places such as the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) and [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) widgets.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#title)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26692

___

### visible

• **visible**: `boolean`

Indicates if the layer is visible in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#visible)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26698

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

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

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

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

### clone

▸ **clone**(): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

Creates a deep clone of the WMS sublayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-WMSSublayer.html#clone)

#### Returns

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:26710

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

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

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriWMSSublayer`](geo_esri.EsriWMSSublayer.md)

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
