[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriMap

# Class: EsriMap

[geo/esri](../modules/geo_esri.md).EsriMap

## Hierarchy

- `Accessor`

- `LayersMixin`

- `TablesMixin`

  ↳ **`EsriMap`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriMap.md#constructor)

### Properties

- [allLayers](geo_esri.EsriMap.md#alllayers)
- [allTables](geo_esri.EsriMap.md#alltables)
- [basemap](geo_esri.EsriMap.md#basemap)
- [declaredClass](geo_esri.EsriMap.md#declaredclass)
- [destroyed](geo_esri.EsriMap.md#destroyed)
- [editableLayers](geo_esri.EsriMap.md#editablelayers)
- [ground](geo_esri.EsriMap.md#ground)
- [initialized](geo_esri.EsriMap.md#initialized)
- [layers](geo_esri.EsriMap.md#layers)
- [tables](geo_esri.EsriMap.md#tables)

### Methods

- [\_get](geo_esri.EsriMap.md#_get)
- [\_set](geo_esri.EsriMap.md#_set)
- [add](geo_esri.EsriMap.md#add)
- [addHandles](geo_esri.EsriMap.md#addhandles)
- [addMany](geo_esri.EsriMap.md#addmany)
- [destroy](geo_esri.EsriMap.md#destroy)
- [findLayerById](geo_esri.EsriMap.md#findlayerbyid)
- [findTableById](geo_esri.EsriMap.md#findtablebyid)
- [get](geo_esri.EsriMap.md#get)
- [hasHandles](geo_esri.EsriMap.md#hashandles)
- [notifyChange](geo_esri.EsriMap.md#notifychange)
- [own](geo_esri.EsriMap.md#own)
- [remove](geo_esri.EsriMap.md#remove)
- [removeAll](geo_esri.EsriMap.md#removeall)
- [removeHandles](geo_esri.EsriMap.md#removehandles)
- [removeMany](geo_esri.EsriMap.md#removemany)
- [reorder](geo_esri.EsriMap.md#reorder)
- [set](geo_esri.EsriMap.md#set)
- [watch](geo_esri.EsriMap.md#watch)

## Constructors

### constructor

• **new EsriMap**(`properties?`)

The Map class contains properties and methods for storing, managing, and overlaying [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) common to both 2D and 3D viewing.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `MapProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31221

## Properties

### allLayers

• `Readonly` **allLayers**: `Collection`<`Layer`\>

A flattened collection of all [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) in the map.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allLayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31191

___

### allTables

• `Readonly` **allTables**: `Collection`<`Layer`\>

A flattened collection of tables anywhere in the map's hierarchy.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allTables)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31197

___

### basemap

• **basemap**: [`EsriBasemap`](geo_esri.EsriBasemap.md)

Specifies a basemap for the map.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31203

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

### editableLayers

• `Readonly` **editableLayers**: `Collection`<[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md) \| `SceneLayer` \| `SubtypeGroupLayer`\>

A collection of editable layers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#editableLayers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31209

___

### ground

• **ground**: `Ground`

Specifies the surface properties for the map.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#ground)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31215

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### layers

• **layers**: `Collection`<`Layer`\>

A collection of operational [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#layers)

#### Inherited from

LayersMixin.layers

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65397

___

### tables

• **tables**: `Collection`<`Layer`\>

A collection of [layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) instances that are tables saved in a [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) and/or a [WebMap](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-TablesMixin.html#tables)

#### Inherited from

TablesMixin.tables

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65651

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriMap`](geo_esri.EsriMap.md)

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

[`EsriMap`](geo_esri.EsriMap.md)

#### Inherited from

Accessor.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### add

▸ **add**(`layer`, `index?`): `void`

Adds a layer to the [layers collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#layers).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#add)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Promise`<`any`\> \| `Layer` |
| `index?` | `number` |

#### Returns

`void`

#### Inherited from

LayersMixin.add

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65403

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

### addMany

▸ **addMany**(`layers`, `index?`): `void`

Adds a layer or an array of layers to the [layers collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#layers).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#addMany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | `Layer`[] |
| `index?` | `number` |

#### Returns

`void`

#### Inherited from

LayersMixin.addMany

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65409

___

### destroy

▸ **destroy**(): `void`

Destroys the map, and any associated resources, including its [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers), [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap), [tables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#tables),  and [ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#ground).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#destroy)

#### Returns

`void`

#### Inherited from

Accessor.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31227

___

### findLayerById

▸ **findLayerById**(`layerId`): `Layer`

Returns a layer based on the given layer ID.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#findLayerById)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerId` | `string` |

#### Returns

`Layer`

#### Inherited from

LayersMixin.findLayerById

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65415

___

### findTableById

▸ **findTableById**(`tableId`): `Layer`

Returns a table based on the given table ID.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-TablesMixin.html#findTableById)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableId` | `string` |

#### Returns

`Layer`

#### Inherited from

TablesMixin.findTableById

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65657

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

### remove

▸ **remove**(`layer`): `Layer`

Removes the specified layer from the layers collection.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#remove)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Layer` |

#### Returns

`Layer`

#### Inherited from

LayersMixin.remove

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65421

___

### removeAll

▸ **removeAll**(): `Layer`[]

Removes all layers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#removeAll)

#### Returns

`Layer`[]

#### Inherited from

LayersMixin.removeAll

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65427

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

### removeMany

▸ **removeMany**(`layers`): `Layer`[]

Removes the specified layers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#removeMany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | `Layer`[] |

#### Returns

`Layer`[]

#### Inherited from

LayersMixin.removeMany

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65433

___

### reorder

▸ **reorder**(`layer`, `index`): `Layer`

Changes the layer order.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-LayersMixin.html#reorder)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Layer` |
| `index` | `number` |

#### Returns

`Layer`

#### Inherited from

LayersMixin.reorder

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:65439

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriMap`](geo_esri.EsriMap.md)

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

[`EsriMap`](geo_esri.EsriMap.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriMap`](geo_esri.EsriMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriMap`](geo_esri.EsriMap.md)

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
