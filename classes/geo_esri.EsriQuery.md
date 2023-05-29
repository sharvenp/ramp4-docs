[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriQuery

# Class: EsriQuery

[geo/esri](../modules/geo_esri.md).EsriQuery

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriQuery`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriQuery.md#constructor)

### Properties

- [aggregateIds](geo_esri.EsriQuery.md#aggregateids)
- [cacheHint](geo_esri.EsriQuery.md#cachehint)
- [datumTransformation](geo_esri.EsriQuery.md#datumtransformation)
- [declaredClass](geo_esri.EsriQuery.md#declaredclass)
- [destroyed](geo_esri.EsriQuery.md#destroyed)
- [distance](geo_esri.EsriQuery.md#distance)
- [gdbVersion](geo_esri.EsriQuery.md#gdbversion)
- [geometry](geo_esri.EsriQuery.md#geometry)
- [geometryPrecision](geo_esri.EsriQuery.md#geometryprecision)
- [groupByFieldsForStatistics](geo_esri.EsriQuery.md#groupbyfieldsforstatistics)
- [having](geo_esri.EsriQuery.md#having)
- [historicMoment](geo_esri.EsriQuery.md#historicmoment)
- [initialized](geo_esri.EsriQuery.md#initialized)
- [maxAllowableOffset](geo_esri.EsriQuery.md#maxallowableoffset)
- [maxRecordCountFactor](geo_esri.EsriQuery.md#maxrecordcountfactor)
- [multipatchOption](geo_esri.EsriQuery.md#multipatchoption)
- [num](geo_esri.EsriQuery.md#num)
- [objectIds](geo_esri.EsriQuery.md#objectids)
- [orderByFields](geo_esri.EsriQuery.md#orderbyfields)
- [outFields](geo_esri.EsriQuery.md#outfields)
- [outSpatialReference](geo_esri.EsriQuery.md#outspatialreference)
- [outStatistics](geo_esri.EsriQuery.md#outstatistics)
- [parameterValues](geo_esri.EsriQuery.md#parametervalues)
- [pixelSize](geo_esri.EsriQuery.md#pixelsize)
- [quantizationParameters](geo_esri.EsriQuery.md#quantizationparameters)
- [rangeValues](geo_esri.EsriQuery.md#rangevalues)
- [relationParameter](geo_esri.EsriQuery.md#relationparameter)
- [returnCentroid](geo_esri.EsriQuery.md#returncentroid)
- [returnDistinctValues](geo_esri.EsriQuery.md#returndistinctvalues)
- [returnExceededLimitFeatures](geo_esri.EsriQuery.md#returnexceededlimitfeatures)
- [returnGeometry](geo_esri.EsriQuery.md#returngeometry)
- [returnM](geo_esri.EsriQuery.md#returnm)
- [returnQueryGeometry](geo_esri.EsriQuery.md#returnquerygeometry)
- [returnZ](geo_esri.EsriQuery.md#returnz)
- [spatialRelationship](geo_esri.EsriQuery.md#spatialrelationship)
- [sqlFormat](geo_esri.EsriQuery.md#sqlformat)
- [start](geo_esri.EsriQuery.md#start)
- [text](geo_esri.EsriQuery.md#text)
- [timeExtent](geo_esri.EsriQuery.md#timeextent)
- [units](geo_esri.EsriQuery.md#units)
- [where](geo_esri.EsriQuery.md#where)

### Methods

- [\_get](geo_esri.EsriQuery.md#_get)
- [\_set](geo_esri.EsriQuery.md#_set)
- [addHandles](geo_esri.EsriQuery.md#addhandles)
- [clone](geo_esri.EsriQuery.md#clone)
- [destroy](geo_esri.EsriQuery.md#destroy)
- [get](geo_esri.EsriQuery.md#get)
- [hasHandles](geo_esri.EsriQuery.md#hashandles)
- [notifyChange](geo_esri.EsriQuery.md#notifychange)
- [own](geo_esri.EsriQuery.md#own)
- [removeHandles](geo_esri.EsriQuery.md#removehandles)
- [set](geo_esri.EsriQuery.md#set)
- [toJSON](geo_esri.EsriQuery.md#tojson)
- [watch](geo_esri.EsriQuery.md#watch)
- [fromJSON](geo_esri.EsriQuery.md#fromjson)

## Constructors

### constructor

• **new EsriQuery**(`properties?`)

This class defines parameters for executing queries for features from a layer or layer view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `QueryProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51665

## Properties

### aggregateIds

• **aggregateIds**: `number`[]

An array of Object IDs representing [aggregate](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#isAggregate) (i.e.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#aggregateIds)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51404

___

### cacheHint

• **cacheHint**: `boolean`

Indicates if the service should cache the query results.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#cacheHint)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51412

___

### datumTransformation

• **datumTransformation**: `number`

Datum transformation used for projecting geometries in the query results when [outSpatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outSpatialReference) is different than the layer's spatial reference.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#datumTransformation)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51418

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

### distance

• **distance**: `number`

Specifies a search distance from a given [geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#geometry) in a spatial query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#distance)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51424

___

### gdbVersion

• **gdbVersion**: `string`

Specifies the geodatabase version to display for feature service queries.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#gdbVersion)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51430

___

### geometry

• **geometry**: [`EsriGeometry`](geo_esri.EsriGeometry.md)

The geometry to apply to the spatial filter.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#geometry)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51436

___

### geometryPrecision

• **geometryPrecision**: `number`

Specifies the number of decimal places for geometries returned by the [JSON query operation](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-query.html#executeQueryJSON).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#geometryPrecision)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51442

___

### groupByFieldsForStatistics

• **groupByFieldsForStatistics**: `string`[]

Used only in [statistical queries](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#statistic).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#groupByFieldsForStatistics)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51448

___

### having

• **having**: `string`

A condition used with [outStatistics](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outStatistics) and [groupByFieldsForStatistics](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#groupByFieldsForStatistics) to limit query results to groups that satisfy the aggregation function(s).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#having)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51454

___

### historicMoment

• **historicMoment**: `Date`

The historic moment to query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#historicMoment)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51460

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### maxAllowableOffset

• **maxAllowableOffset**: `number`

The maximum distance in units of [outSpatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outSpatialReference) used for generalizing geometries returned by the query operation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#maxAllowableOffset)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51466

___

### maxRecordCountFactor

• **maxRecordCountFactor**: `number`

When set, the maximum number of features returned by the query will equal the `maxRecordCount` of the service multiplied by this factor.

**`Default`**

```ts
1

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#maxRecordCountFactor)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51474

___

### multipatchOption

• **multipatchOption**: `string`

Parameter dictates how the geometry of a multipatch feature will be returned.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#multipatchOption)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51480

___

### num

• **num**: `number`

The number of features to retrieve.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#num)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51486

___

### objectIds

• **objectIds**: `number`[]

An array of ObjectIDs to be used to query for features in a layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#objectIds)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51492

___

### orderByFields

• **orderByFields**: `string`[]

One or more field names used to order the query results.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#orderByFields)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51498

___

### outFields

• **outFields**: `string`[]

Attribute fields to include in the [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html).

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outFields)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51506

___

### outSpatialReference

• **outSpatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference for the returned geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outSpatialReference)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51512

___

### outStatistics

• **outStatistics**: `StatisticDefinition`[]

The definitions for one or more field-based statistics to be calculated.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outStatistics)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51518

___

### parameterValues

• **parameterValues**: `QueryParameterValues`[]

Filters features from the layer based on pre-authored parameterized filters.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#parameterValues)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51524

___

### pixelSize

• **pixelSize**: [`EsriPoint`](geo_esri.EsriPoint.md)

Specifies the pixel level to be identified on the X and Y axis.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#pixelSize)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51530

___

### quantizationParameters

• **quantizationParameters**: `QueryQuantizationParameters`

Used to project the geometry onto a virtual grid, likely representing pixels on the screen.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#quantizationParameters)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51536

___

### rangeValues

• **rangeValues**: `QueryRangeValues`[]

Filters features from the layer that are within the specified range values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#rangeValues)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51542

___

### relationParameter

• **relationParameter**: `string`

The Dimensionally Extended 9 Intersection Model (DE-9IM) matrix relation (encoded as a string) to query the spatial relationship of the input [geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#geometry) to the layer's features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#relationParameter)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51548

___

### returnCentroid

• **returnCentroid**: `boolean`

If `true`, each feature in the returned [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html) will be returned with a centroid.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnCentroid)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51556

___

### returnDistinctValues

• **returnDistinctValues**: `boolean`

If `true` then the query returns distinct values based on the field(s) specified in [outFields](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#outFields).

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnDistinctValues)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51564

___

### returnExceededLimitFeatures

• **returnExceededLimitFeatures**: `boolean`

If `true`, then all features are returned for each tile request, even if they exceed the maximum record limit per query indicated on the service by `maxRecordCount`.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnExceededLimitFeatures)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51572

___

### returnGeometry

• **returnGeometry**: `boolean`

If `true`, each feature in the returned [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html) includes the geometry.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnGeometry)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51580

___

### returnM

• **returnM**: `boolean`

If `true`, and [returnGeometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnGeometry) is `true`, then m-values are included in the geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnM)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51586

___

### returnQueryGeometry

• **returnQueryGeometry**: `boolean`

If `true`, the [query geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html#queryGeometry) will be returned with the query results.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnQueryGeometry)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51594

___

### returnZ

• **returnZ**: `boolean`

If `true`, and [returnGeometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnGeometry) is `true`, then z-values are included in the geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#returnZ)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51600

___

### spatialRelationship

• **spatialRelationship**: ``"contains"`` \| ``"intersects"`` \| ``"crosses"`` \| ``"disjoint"`` \| ``"envelope-intersects"`` \| ``"index-intersects"`` \| ``"overlaps"`` \| ``"touches"`` \| ``"within"`` \| ``"relation"``

For spatial queries, this parameter defines the spatial relationship to query features in the layer or layer view against the input [geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#geometry).

**`Default`**

```ts
intersects

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#spatialRelationship)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51608

___

### sqlFormat

• **sqlFormat**: ``"none"`` \| ``"standard"`` \| ``"native"``

This parameter can be either standard SQL92 `standard` or it can use the native SQL of the underlying datastore `native`.

**`Default`**

```ts
none

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#sqlFormat)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51625

___

### start

• **start**: `number`

The zero-based index indicating where to begin retrieving features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#start)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51631

___

### text

• **text**: `string`

Shorthand for a where clause using "like".

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#text)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51639

___

### timeExtent

• **timeExtent**: `TimeExtent`

A time extent for a temporal query against [time-aware layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#timeInfo).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#timeExtent)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51645

___

### units

• **units**: ``"feet"`` \| ``"miles"`` \| ``"nautical-miles"`` \| ``"us-nautical-miles"`` \| ``"meters"`` \| ``"kilometers"``

The unit for calculating the buffer distance when [distance](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#distance) is specified in spatial queries.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#units)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51653

___

### where

• **where**: `string`

A where clause for the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#where)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51659

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriQuery`](geo_esri.EsriQuery.md)

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

[`EsriQuery`](geo_esri.EsriQuery.md)

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

▸ **clone**(): [`EsriQuery`](geo_esri.EsriQuery.md)

Creates a deep clone of Query object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#clone)

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51671

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriQuery`](geo_esri.EsriQuery.md)

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

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriQuery`](geo_esri.EsriQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriQuery`](geo_esri.EsriQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:51672
