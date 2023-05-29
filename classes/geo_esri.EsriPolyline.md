[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriPolyline

# Class: EsriPolyline

[geo/esri](../modules/geo_esri.md).EsriPolyline

## Hierarchy

- [`EsriGeometry`](geo_esri.EsriGeometry.md)

  ↳ **`EsriPolyline`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriPolyline.md#constructor)

### Properties

- [cache](geo_esri.EsriPolyline.md#cache)
- [declaredClass](geo_esri.EsriPolyline.md#declaredclass)
- [destroyed](geo_esri.EsriPolyline.md#destroyed)
- [extent](geo_esri.EsriPolyline.md#extent)
- [hasM](geo_esri.EsriPolyline.md#hasm)
- [hasZ](geo_esri.EsriPolyline.md#hasz)
- [initialized](geo_esri.EsriPolyline.md#initialized)
- [paths](geo_esri.EsriPolyline.md#paths)
- [spatialReference](geo_esri.EsriPolyline.md#spatialreference)
- [type](geo_esri.EsriPolyline.md#type)

### Methods

- [\_get](geo_esri.EsriPolyline.md#_get)
- [\_set](geo_esri.EsriPolyline.md#_set)
- [addHandles](geo_esri.EsriPolyline.md#addhandles)
- [addPath](geo_esri.EsriPolyline.md#addpath)
- [clone](geo_esri.EsriPolyline.md#clone)
- [destroy](geo_esri.EsriPolyline.md#destroy)
- [get](geo_esri.EsriPolyline.md#get)
- [getPoint](geo_esri.EsriPolyline.md#getpoint)
- [hasHandles](geo_esri.EsriPolyline.md#hashandles)
- [insertPoint](geo_esri.EsriPolyline.md#insertpoint)
- [notifyChange](geo_esri.EsriPolyline.md#notifychange)
- [own](geo_esri.EsriPolyline.md#own)
- [removeHandles](geo_esri.EsriPolyline.md#removehandles)
- [removePath](geo_esri.EsriPolyline.md#removepath)
- [removePoint](geo_esri.EsriPolyline.md#removepoint)
- [set](geo_esri.EsriPolyline.md#set)
- [setPoint](geo_esri.EsriPolyline.md#setpoint)
- [toJSON](geo_esri.EsriPolyline.md#tojson)
- [watch](geo_esri.EsriPolyline.md#watch)
- [fromJSON](geo_esri.EsriPolyline.md#fromjson)

## Constructors

### constructor

• **new EsriPolyline**(`properties?`)

A polyline contains an array of [paths](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#paths) and [spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#spatialReference).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `PolylineProperties` |

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[constructor](geo_esri.EsriGeometry.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6412

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

### paths

• **paths**: `number`[][][]

An array of paths, or line segments, that make up the polyline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#paths)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6405

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

• `Readonly` **type**: ``"polyline"``

The geometry type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#type)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[type](geo_esri.EsriGeometry.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6406

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

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

[`EsriPolyline`](geo_esri.EsriPolyline.md)

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

### addPath

▸ **addPath**(`points`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

Adds a path, or line segment, to the polyline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#addPath)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[][] \| [`EsriPoint`](geo_esri.EsriPoint.md)[] |

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6418

___

### clone

▸ **clone**(): [`EsriPolyline`](geo_esri.EsriPolyline.md)

Creates a deep clone of Polyline object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#clone)

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[clone](geo_esri.EsriGeometry.md#clone)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6424

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

▸ **getPoint**(`pathIndex`, `pointIndex`): [`EsriPoint`](geo_esri.EsriPoint.md)

Returns a point specified by a path and point in the path.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#getPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathIndex` | `number` |
| `pointIndex` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6430

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

### insertPoint

▸ **insertPoint**(`pathIndex`, `pointIndex`, `point`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

Inserts a new point into a polyline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#insertPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathIndex` | `number` |
| `pointIndex` | `number` |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6436

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

### removePath

▸ **removePath**(`index`): [`EsriPoint`](geo_esri.EsriPoint.md)[]

Removes a path from the Polyline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#removePath)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6442

___

### removePoint

▸ **removePoint**(`pathIndex`, `pointIndex`): [`EsriPoint`](geo_esri.EsriPoint.md)

Removes a point from the polyline at the given `pointIndex` within the path identified by the given `pathIndex`.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#removePoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathIndex` | `number` |
| `pointIndex` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6448

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

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

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### setPoint

▸ **setPoint**(`pathIndex`, `pointIndex`, `point`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

Updates a point in a polyline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html#setPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathIndex` | `number` |
| `pointIndex` | `number` |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6454

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

▸ `Static` **fromJSON**(`json`): [`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriPolyline`](geo_esri.EsriPolyline.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[fromJSON](geo_esri.EsriGeometry.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6455
