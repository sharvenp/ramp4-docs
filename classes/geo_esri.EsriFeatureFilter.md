[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriFeatureFilter

# Class: EsriFeatureFilter

[geo/esri](../modules/geo_esri.md).EsriFeatureFilter

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriFeatureFilter`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriFeatureFilter.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriFeatureFilter.md#declaredclass)
- [destroyed](geo_esri.EsriFeatureFilter.md#destroyed)
- [distance](geo_esri.EsriFeatureFilter.md#distance)
- [geometry](geo_esri.EsriFeatureFilter.md#geometry)
- [initialized](geo_esri.EsriFeatureFilter.md#initialized)
- [objectIds](geo_esri.EsriFeatureFilter.md#objectids)
- [spatialRelationship](geo_esri.EsriFeatureFilter.md#spatialrelationship)
- [timeExtent](geo_esri.EsriFeatureFilter.md#timeextent)
- [units](geo_esri.EsriFeatureFilter.md#units)
- [where](geo_esri.EsriFeatureFilter.md#where)

### Methods

- [\_get](geo_esri.EsriFeatureFilter.md#_get)
- [\_set](geo_esri.EsriFeatureFilter.md#_set)
- [addHandles](geo_esri.EsriFeatureFilter.md#addhandles)
- [clone](geo_esri.EsriFeatureFilter.md#clone)
- [createQuery](geo_esri.EsriFeatureFilter.md#createquery)
- [destroy](geo_esri.EsriFeatureFilter.md#destroy)
- [get](geo_esri.EsriFeatureFilter.md#get)
- [hasHandles](geo_esri.EsriFeatureFilter.md#hashandles)
- [notifyChange](geo_esri.EsriFeatureFilter.md#notifychange)
- [own](geo_esri.EsriFeatureFilter.md#own)
- [removeHandles](geo_esri.EsriFeatureFilter.md#removehandles)
- [set](geo_esri.EsriFeatureFilter.md#set)
- [toJSON](geo_esri.EsriFeatureFilter.md#tojson)
- [watch](geo_esri.EsriFeatureFilter.md#watch)
- [fromJSON](geo_esri.EsriFeatureFilter.md#fromjson)

## Constructors

### constructor

• **new EsriFeatureFilter**(`properties?`)

This class defines parameters for setting a client-side filter on a [featureEffect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#featureEffect) or [layer view](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html#filter).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `FeatureFilterProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20247

## Properties

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

### distance

• **distance**: `number`

Specifies a search distance from a given [geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#geometry) in a spatial filter.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#distance)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20199

___

### geometry

• **geometry**: [`EsriGeometry`](geo_esri.EsriGeometry.md)

The geometry to apply to the spatial filter.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#geometry)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20205

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### objectIds

• **objectIds**: `number`[]

An array of objectIds of the features to be filtered.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#objectIds)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20211

___

### spatialRelationship

• **spatialRelationship**: `string`

For spatial filters, this parameter defines the spatial relationship to filter features in the layer view against the filter [geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#geometry).

**`Default`**

```ts
intersects

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#spatialRelationship)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20219

___

### timeExtent

• **timeExtent**: `TimeExtent`

A range of time with start and end date.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#timeExtent)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20227

___

### units

• **units**: ``"feet"`` \| ``"miles"`` \| ``"nautical-miles"`` \| ``"us-nautical-miles"`` \| ``"meters"`` \| ``"kilometers"``

The unit for calculating the buffer distance when [distance](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#distance) is specified in a spatial filter.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#units)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20235

___

### where

• **where**: `string`

A where clause for the feature filter.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#where)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20241

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

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

[`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

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

▸ **clone**(): [`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

Creates a deep clone of the FeatureFilter object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#clone)

#### Returns

[`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20253

___

### createQuery

▸ **createQuery**(): [`EsriQuery`](geo_esri.EsriQuery.md)

Creates [query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) parameters that can be used to fetch features that satisfy the layer's current filters and definitions.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#createQuery)

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20259

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

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

[`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

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

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriFeatureFilter`](geo_esri.EsriFeatureFilter.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20260
