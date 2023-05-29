[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriMultipoint

# Class: EsriMultipoint

[geo/esri](../modules/geo_esri.md).EsriMultipoint

## Hierarchy

- [`EsriGeometry`](geo_esri.EsriGeometry.md)

  ↳ **`EsriMultipoint`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriMultipoint.md#constructor)

### Properties

- [cache](geo_esri.EsriMultipoint.md#cache)
- [declaredClass](geo_esri.EsriMultipoint.md#declaredclass)
- [destroyed](geo_esri.EsriMultipoint.md#destroyed)
- [extent](geo_esri.EsriMultipoint.md#extent)
- [hasM](geo_esri.EsriMultipoint.md#hasm)
- [hasZ](geo_esri.EsriMultipoint.md#hasz)
- [initialized](geo_esri.EsriMultipoint.md#initialized)
- [points](geo_esri.EsriMultipoint.md#points)
- [spatialReference](geo_esri.EsriMultipoint.md#spatialreference)
- [type](geo_esri.EsriMultipoint.md#type)

### Methods

- [\_get](geo_esri.EsriMultipoint.md#_get)
- [\_set](geo_esri.EsriMultipoint.md#_set)
- [addHandles](geo_esri.EsriMultipoint.md#addhandles)
- [addPoint](geo_esri.EsriMultipoint.md#addpoint)
- [clone](geo_esri.EsriMultipoint.md#clone)
- [destroy](geo_esri.EsriMultipoint.md#destroy)
- [get](geo_esri.EsriMultipoint.md#get)
- [getPoint](geo_esri.EsriMultipoint.md#getpoint)
- [hasHandles](geo_esri.EsriMultipoint.md#hashandles)
- [notifyChange](geo_esri.EsriMultipoint.md#notifychange)
- [own](geo_esri.EsriMultipoint.md#own)
- [removeHandles](geo_esri.EsriMultipoint.md#removehandles)
- [removePoint](geo_esri.EsriMultipoint.md#removepoint)
- [set](geo_esri.EsriMultipoint.md#set)
- [setPoint](geo_esri.EsriMultipoint.md#setpoint)
- [toJSON](geo_esri.EsriMultipoint.md#tojson)
- [watch](geo_esri.EsriMultipoint.md#watch)
- [fromJSON](geo_esri.EsriMultipoint.md#fromjson)

## Constructors

### constructor

• **new EsriMultipoint**(`properties?`)

An ordered collection of points.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `MultipointProperties` |

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[constructor](geo_esri.EsriGeometry.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6095

## Properties

### cache

• `Readonly` **cache**: `any`

The cache is used to store values computed from geometries that need to be cleared or recomputed upon mutation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#cache)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[cache](geo_esri.EsriGeometry.md#cache)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4786

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[declaredClass](geo_esri.EsriGeometry.md#declaredclass)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[destroyed](geo_esri.EsriGeometry.md#destroyed)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### extent

• `Readonly` **extent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The extent of the geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#extent)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[extent](geo_esri.EsriGeometry.md#extent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4792

___

### hasM

• **hasM**: `boolean`

Indicates if the geometry has M values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#hasM)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[hasM](geo_esri.EsriGeometry.md#hasm)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4798

___

### hasZ

• **hasZ**: `boolean`

Indicates if the geometry has z-values (elevation).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#hasZ)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[hasZ](geo_esri.EsriGeometry.md#hasz)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4804

___

### initialized

• **initialized**: `boolean`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[initialized](geo_esri.EsriGeometry.md#initialized)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### points

• **points**: `number`[][]

An array of points.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#points)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6083

___

### spatialReference

• **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the geometry.

**`Default`**

```ts
WGS84 (wkid: 4326)

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#spatialReference)
```

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[spatialReference](geo_esri.EsriGeometry.md#spatialreference)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4812

___

### type

• `Readonly` **type**: ``"multipoint"``

The string value representing the type of geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#type)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[type](geo_esri.EsriGeometry.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6089

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

[EsriGeometry](geo_esri.EsriGeometry.md).[_get](geo_esri.EsriGeometry.md#_get)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[_get](geo_esri.EsriGeometry.md#_get)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

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

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[_set](geo_esri.EsriGeometry.md#_set)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[addHandles](geo_esri.EsriGeometry.md#addhandles)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### addPoint

▸ **addPoint**(`point`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

Adds a point to the Multipoint.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#addPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6101

___

### clone

▸ **clone**(): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

Creates a deep clone of Multipoint object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#clone)

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[clone](geo_esri.EsriGeometry.md#clone)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6107

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[destroy](geo_esri.EsriGeometry.md#destroy)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[get](geo_esri.EsriGeometry.md#get)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[get](geo_esri.EsriGeometry.md#get)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### getPoint

▸ **getPoint**(`index`): [`EsriPoint`](geo_esri.EsriPoint.md)

Returns the point at the specified index.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#getPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6113

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

[EsriGeometry](geo_esri.EsriGeometry.md).[hasHandles](geo_esri.EsriGeometry.md#hashandles)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[notifyChange](geo_esri.EsriGeometry.md#notifychange)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[own](geo_esri.EsriGeometry.md#own)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[removeHandles](geo_esri.EsriGeometry.md#removehandles)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### removePoint

▸ **removePoint**(`index`): [`EsriPoint`](geo_esri.EsriPoint.md)

Removes a point from the Multipoint.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#removePoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6119

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

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

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### setPoint

▸ **setPoint**(`index`, `point`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

Updates the point at the specified index.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html#setPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6125

___

### toJSON

▸ **toJSON**(): `any`

Converts an instance of this class to its [ArcGIS portal JSON](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) representation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-JSONSupport.html#toJSON)

#### Returns

`any`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[toJSON](geo_esri.EsriGeometry.md#tojson)

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

[EsriGeometry](geo_esri.EsriGeometry.md).[watch](geo_esri.EsriGeometry.md#watch)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriMultipoint`](geo_esri.EsriMultipoint.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[fromJSON](geo_esri.EsriGeometry.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6126
