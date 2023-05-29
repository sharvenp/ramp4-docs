[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriPolygon

# Class: EsriPolygon

[geo/esri](../modules/geo_esri.md).EsriPolygon

## Hierarchy

- [`EsriGeometry`](geo_esri.EsriGeometry.md)

  ↳ **`EsriPolygon`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriPolygon.md#constructor)

### Properties

- [cache](geo_esri.EsriPolygon.md#cache)
- [centroid](geo_esri.EsriPolygon.md#centroid)
- [declaredClass](geo_esri.EsriPolygon.md#declaredclass)
- [destroyed](geo_esri.EsriPolygon.md#destroyed)
- [extent](geo_esri.EsriPolygon.md#extent)
- [hasM](geo_esri.EsriPolygon.md#hasm)
- [hasZ](geo_esri.EsriPolygon.md#hasz)
- [initialized](geo_esri.EsriPolygon.md#initialized)
- [isSelfIntersecting](geo_esri.EsriPolygon.md#isselfintersecting)
- [rings](geo_esri.EsriPolygon.md#rings)
- [spatialReference](geo_esri.EsriPolygon.md#spatialreference)
- [type](geo_esri.EsriPolygon.md#type)

### Methods

- [\_get](geo_esri.EsriPolygon.md#_get)
- [\_set](geo_esri.EsriPolygon.md#_set)
- [addHandles](geo_esri.EsriPolygon.md#addhandles)
- [addRing](geo_esri.EsriPolygon.md#addring)
- [clone](geo_esri.EsriPolygon.md#clone)
- [contains](geo_esri.EsriPolygon.md#contains)
- [destroy](geo_esri.EsriPolygon.md#destroy)
- [get](geo_esri.EsriPolygon.md#get)
- [getPoint](geo_esri.EsriPolygon.md#getpoint)
- [hasHandles](geo_esri.EsriPolygon.md#hashandles)
- [insertPoint](geo_esri.EsriPolygon.md#insertpoint)
- [isClockwise](geo_esri.EsriPolygon.md#isclockwise)
- [notifyChange](geo_esri.EsriPolygon.md#notifychange)
- [own](geo_esri.EsriPolygon.md#own)
- [removeHandles](geo_esri.EsriPolygon.md#removehandles)
- [removePoint](geo_esri.EsriPolygon.md#removepoint)
- [removeRing](geo_esri.EsriPolygon.md#removering)
- [set](geo_esri.EsriPolygon.md#set)
- [setPoint](geo_esri.EsriPolygon.md#setpoint)
- [toJSON](geo_esri.EsriPolygon.md#tojson)
- [watch](geo_esri.EsriPolygon.md#watch)
- [fromExtent](geo_esri.EsriPolygon.md#fromextent)
- [fromJSON](geo_esri.EsriPolygon.md#fromjson)

## Constructors

### constructor

• **new EsriPolygon**(`properties?`)

A polygon contains an array of [rings](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#rings) and a [spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#spatialReference).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `PolygonProperties` |

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[constructor](geo_esri.EsriGeometry.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6311

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

### centroid

• **centroid**: [`EsriPoint`](geo_esri.EsriPoint.md)

The centroid of the polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#centroid)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6287

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

### isSelfIntersecting

• **isSelfIntersecting**: `boolean`

Checks to see if polygon rings cross each other and indicates if the polygon is self-intersecting, which means the ring of the polygon crosses itself.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#isSelfIntersecting)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6293

___

### rings

• **rings**: `number`[][][]

An array of rings.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#rings)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6299

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

• `Readonly` **type**: ``"polygon"``

The string value representing the type of geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#type)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[type](geo_esri.EsriGeometry.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6305

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

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

[`EsriPolygon`](geo_esri.EsriPolygon.md)

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

### addRing

▸ **addRing**(`points`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

Adds a ring to the Polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#addRing)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[][] \| [`EsriPoint`](geo_esri.EsriPoint.md)[] |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6317

___

### clone

▸ **clone**(): [`EsriPolygon`](geo_esri.EsriPolygon.md)

Creates a deep clone of Polygon object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#clone)

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[clone](geo_esri.EsriGeometry.md#clone)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6323

___

### contains

▸ **contains**(`point`): `boolean`

Checks on the client if the input point is inside the polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#contains)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6329

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

▸ **getPoint**(`ringIndex`, `pointIndex`): [`EsriPoint`](geo_esri.EsriPoint.md)

Returns a point specified by a ring and point in the path.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#getPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ringIndex` | `number` |
| `pointIndex` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6335

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

▸ **insertPoint**(`ringIndex`, `pointIndex`, `point`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

Inserts a new point into the polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#insertPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ringIndex` | `number` |
| `pointIndex` | `number` |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6341

___

### isClockwise

▸ **isClockwise**(`ring`): `boolean`

Checks if a Polygon ring is clockwise.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#isClockwise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ring` | `number`[][] \| [`EsriPoint`](geo_esri.EsriPoint.md)[] |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6347

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

▸ **removePoint**(`ringIndex`, `pointIndex`): [`EsriPoint`](geo_esri.EsriPoint.md)[]

Removes a point from the polygon at the given `pointIndex` within the ring identified by `ringIndex`.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#removePoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ringIndex` | `number` |
| `pointIndex` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6353

___

### removeRing

▸ **removeRing**(`index`): [`EsriPoint`](geo_esri.EsriPoint.md)[]

Removes a ring from the Polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#removeRing)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6359

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

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

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### setPoint

▸ **setPoint**(`ringIndex`, `pointIndex`, `point`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

Updates a point in the polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#setPoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ringIndex` | `number` |
| `pointIndex` | `number` |
| `point` | `number`[] \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6365

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

### fromExtent

▸ `Static` **fromExtent**(`extent`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

Converts the given Extent to a Polygon instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html#fromExtent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6371

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriPolygon`](geo_esri.EsriPolygon.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[fromJSON](geo_esri.EsriGeometry.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6372
