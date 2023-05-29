[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriPoint

# Class: EsriPoint

[geo/esri](../modules/geo_esri.md).EsriPoint

## Hierarchy

- [`EsriGeometry`](geo_esri.EsriGeometry.md)

  ↳ **`EsriPoint`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriPoint.md#constructor)

### Properties

- [cache](geo_esri.EsriPoint.md#cache)
- [declaredClass](geo_esri.EsriPoint.md#declaredclass)
- [destroyed](geo_esri.EsriPoint.md#destroyed)
- [extent](geo_esri.EsriPoint.md#extent)
- [hasM](geo_esri.EsriPoint.md#hasm)
- [hasZ](geo_esri.EsriPoint.md#hasz)
- [initialized](geo_esri.EsriPoint.md#initialized)
- [latitude](geo_esri.EsriPoint.md#latitude)
- [longitude](geo_esri.EsriPoint.md#longitude)
- [m](geo_esri.EsriPoint.md#m)
- [spatialReference](geo_esri.EsriPoint.md#spatialreference)
- [type](geo_esri.EsriPoint.md#type)
- [x](geo_esri.EsriPoint.md#x)
- [y](geo_esri.EsriPoint.md#y)
- [z](geo_esri.EsriPoint.md#z)

### Methods

- [\_get](geo_esri.EsriPoint.md#_get)
- [\_set](geo_esri.EsriPoint.md#_set)
- [addHandles](geo_esri.EsriPoint.md#addhandles)
- [clone](geo_esri.EsriPoint.md#clone)
- [copy](geo_esri.EsriPoint.md#copy)
- [destroy](geo_esri.EsriPoint.md#destroy)
- [distance](geo_esri.EsriPoint.md#distance)
- [equals](geo_esri.EsriPoint.md#equals)
- [get](geo_esri.EsriPoint.md#get)
- [hasHandles](geo_esri.EsriPoint.md#hashandles)
- [normalize](geo_esri.EsriPoint.md#normalize)
- [notifyChange](geo_esri.EsriPoint.md#notifychange)
- [own](geo_esri.EsriPoint.md#own)
- [removeHandles](geo_esri.EsriPoint.md#removehandles)
- [set](geo_esri.EsriPoint.md#set)
- [toJSON](geo_esri.EsriPoint.md#tojson)
- [watch](geo_esri.EsriPoint.md#watch)
- [fromJSON](geo_esri.EsriPoint.md#fromjson)

## Constructors

### constructor

• **new EsriPoint**(`properties?`)

A location defined by X, Y, and Z coordinates.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `PointProperties` |

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[constructor](geo_esri.EsriGeometry.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6197

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

### latitude

• **latitude**: `number`

The latitude of the point.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#latitude)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6147

___

### longitude

• **longitude**: `number`

The longitude of the point.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#longitude)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6153

___

### m

• **m**: `number`

The m-coordinate of the point in map units.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#m)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6161

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

• `Readonly` **type**: ``"point"``

The string value representing the type of geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#type)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[type](geo_esri.EsriGeometry.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6167

___

### x

• **x**: `number`

The x-coordinate (easting) of the point in map units.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#x)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6175

___

### y

• **y**: `number`

The y-coordinate (northing) of the point in map units.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#y)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6183

___

### z

• **z**: `number`

The z-coordinate (or elevation) of the point in map units.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#z)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6191

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriPoint`](geo_esri.EsriPoint.md)

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

[`EsriPoint`](geo_esri.EsriPoint.md)

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

### clone

▸ **clone**(): [`EsriPoint`](geo_esri.EsriPoint.md)

Creates a deep clone of Point object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#clone)

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[clone](geo_esri.EsriGeometry.md#clone)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6203

___

### copy

▸ **copy**(`other`): `void`

Copies all values from another Point instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#copy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6209

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

### distance

▸ **distance**(`other`): `number`

Computes the Euclidean distance between this Point and a given Point.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#distance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`number`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6215

___

### equals

▸ **equals**(`point`): `boolean`

Determines if the input point is equal to the point calling the function.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#equals)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6221

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

### normalize

▸ **normalize**(): [`EsriPoint`](geo_esri.EsriPoint.md)

Modifies the point geometry in-place by shifting the X-coordinate to within +/- 180 span in map units.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html#normalize)

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6227

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

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriPoint`](geo_esri.EsriPoint.md)

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

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriPoint`](geo_esri.EsriPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

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

▸ `Static` **fromJSON**(`json`): [`EsriPoint`](geo_esri.EsriPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[fromJSON](geo_esri.EsriGeometry.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6228
