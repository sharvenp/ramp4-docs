[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriExtent

# Class: EsriExtent

[geo/esri](../modules/geo_esri.md).EsriExtent

## Hierarchy

- [`EsriGeometry`](geo_esri.EsriGeometry.md)

  ↳ **`EsriExtent`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriExtent.md#constructor)

### Properties

- [cache](geo_esri.EsriExtent.md#cache)
- [center](geo_esri.EsriExtent.md#center)
- [declaredClass](geo_esri.EsriExtent.md#declaredclass)
- [destroyed](geo_esri.EsriExtent.md#destroyed)
- [extent](geo_esri.EsriExtent.md#extent)
- [hasM](geo_esri.EsriExtent.md#hasm)
- [hasZ](geo_esri.EsriExtent.md#hasz)
- [height](geo_esri.EsriExtent.md#height)
- [initialized](geo_esri.EsriExtent.md#initialized)
- [mmax](geo_esri.EsriExtent.md#mmax)
- [mmin](geo_esri.EsriExtent.md#mmin)
- [spatialReference](geo_esri.EsriExtent.md#spatialreference)
- [type](geo_esri.EsriExtent.md#type)
- [width](geo_esri.EsriExtent.md#width)
- [xmax](geo_esri.EsriExtent.md#xmax)
- [xmin](geo_esri.EsriExtent.md#xmin)
- [ymax](geo_esri.EsriExtent.md#ymax)
- [ymin](geo_esri.EsriExtent.md#ymin)
- [zmax](geo_esri.EsriExtent.md#zmax)
- [zmin](geo_esri.EsriExtent.md#zmin)

### Methods

- [\_get](geo_esri.EsriExtent.md#_get)
- [\_set](geo_esri.EsriExtent.md#_set)
- [addHandles](geo_esri.EsriExtent.md#addhandles)
- [centerAt](geo_esri.EsriExtent.md#centerat)
- [clone](geo_esri.EsriExtent.md#clone)
- [contains](geo_esri.EsriExtent.md#contains)
- [destroy](geo_esri.EsriExtent.md#destroy)
- [equals](geo_esri.EsriExtent.md#equals)
- [expand](geo_esri.EsriExtent.md#expand)
- [get](geo_esri.EsriExtent.md#get)
- [hasHandles](geo_esri.EsriExtent.md#hashandles)
- [intersection](geo_esri.EsriExtent.md#intersection)
- [intersects](geo_esri.EsriExtent.md#intersects)
- [normalize](geo_esri.EsriExtent.md#normalize)
- [notifyChange](geo_esri.EsriExtent.md#notifychange)
- [offset](geo_esri.EsriExtent.md#offset)
- [own](geo_esri.EsriExtent.md#own)
- [removeHandles](geo_esri.EsriExtent.md#removehandles)
- [set](geo_esri.EsriExtent.md#set)
- [toJSON](geo_esri.EsriExtent.md#tojson)
- [union](geo_esri.EsriExtent.md#union)
- [watch](geo_esri.EsriExtent.md#watch)
- [fromJSON](geo_esri.EsriExtent.md#fromjson)

## Constructors

### constructor

• **new EsriExtent**(`properties?`)

The minimum and maximum X and Y coordinates of a bounding box.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `ExtentProperties` |

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[constructor](geo_esri.EsriGeometry.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4643

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

### center

• `Readonly` **center**: [`EsriPoint`](geo_esri.EsriPoint.md)

The center point of the extent in map units.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#center)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4560

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

### height

• `Readonly` **height**: `number`

The height of the extent in map units (the distance between [ymin](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#ymin) and [ymax](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#ymax)).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#height)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4566

___

### initialized

• **initialized**: `boolean`

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[initialized](geo_esri.EsriGeometry.md#initialized)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### mmax

• **mmax**: `number`

The maximum possible `m` value in an extent envelope.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#mmax)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4574

___

### mmin

• **mmin**: `number`

The minimum possible `m` value of an extent envelope.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#mmin)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4582

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

• `Readonly` **type**: ``"extent"``

The geometry type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#type)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[type](geo_esri.EsriGeometry.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4583

___

### width

• `Readonly` **width**: `number`

The width of the extent in map units (the distance between [xmin](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#xmin) and [xmax](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#xmax)).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#width)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4589

___

### xmax

• **xmax**: `number`

The maximum X-coordinate of an extent envelope.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#xmax)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4597

___

### xmin

• **xmin**: `number`

The minimum X-coordinate of an extent envelope.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#xmin)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4605

___

### ymax

• **ymax**: `number`

The maximum Y-coordinate of an extent envelope.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#ymax)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4613

___

### ymin

• **ymin**: `number`

The minimum Y-coordinate of an extent envelope.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#ymin)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4621

___

### zmax

• **zmax**: `number`

The maximum possible `z`, or elevation, value in an extent envelope.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#zmax)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4629

___

### zmin

• **zmin**: `number`

The minimum possible `z`, or elevation, value of an extent envelope.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#zmin)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4637

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriExtent`](geo_esri.EsriExtent.md)

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

[`EsriExtent`](geo_esri.EsriExtent.md)

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

### centerAt

▸ **centerAt**(`point`): [`EsriExtent`](geo_esri.EsriExtent.md)

Centers the extent to the specified [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#centerAt)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4649

___

### clone

▸ **clone**(): [`EsriExtent`](geo_esri.EsriExtent.md)

Creates a deep clone of Extent object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#clone)

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[clone](geo_esri.EsriGeometry.md#clone)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4655

___

### contains

▸ **contains**(`geometry`): `boolean`

Checks if the input geometry is contained within the extent.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#contains)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`EsriExtent`](geo_esri.EsriExtent.md) \| [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4661

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

### equals

▸ **equals**(`extent`): `boolean`

Indicates if the input extent is equal to the testing extent.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#equals)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4667

___

### expand

▸ **expand**(`factor`): [`EsriExtent`](geo_esri.EsriExtent.md)

Expands the extent by the given factor.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#expand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4673

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

### intersection

▸ **intersection**(`extent`): [`EsriExtent`](geo_esri.EsriExtent.md)

Shrinks the original extent to the intersection with the input extent.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#intersection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4679

___

### intersects

▸ **intersects**(`geometry`): `boolean`

Tests to validate if the input geometry intersects the extent and returns a Boolean value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#intersects)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`EsriGeometry`](geo_esri.EsriGeometry.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4685

___

### normalize

▸ **normalize**(): [`EsriExtent`](geo_esri.EsriExtent.md)[]

Returns an array with either one Extent that's been shifted to within +/- 180 or two Extents if the original extent intersects the International Dateline.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#normalize)

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)[]

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4691

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

### offset

▸ **offset**(`dx`, `dy`, `dz`): [`EsriExtent`](geo_esri.EsriExtent.md)

Modifies the extent geometry in-place with X and Y offsets in map units.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#offset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `dz` | `number` |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4697

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriExtent`](geo_esri.EsriExtent.md)

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

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Inherited from

[EsriGeometry](geo_esri.EsriGeometry.md).[set](geo_esri.EsriGeometry.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriExtent`](geo_esri.EsriExtent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

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

### union

▸ **union**(`extent`): [`EsriExtent`](geo_esri.EsriExtent.md)

Expands the original extent to include the extent of the input Extent.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html#union)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4703

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

▸ `Static` **fromJSON**(`json`): [`EsriExtent`](geo_esri.EsriExtent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Overrides

[EsriGeometry](geo_esri.EsriGeometry.md).[fromJSON](geo_esri.EsriGeometry.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:4704
