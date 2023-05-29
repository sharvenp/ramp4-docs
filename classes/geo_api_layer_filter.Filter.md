[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/layer/filter](../modules/geo_api_layer_filter.md) / Filter

# Class: Filter

[geo/api/layer/filter](../modules/geo_api_layer_filter.md).Filter

## Table of contents

### Constructors

- [constructor](geo_api_layer_filter.Filter.md#constructor)

### Properties

- [cache](geo_api_layer_filter.Filter.md#cache)
- [extent](geo_api_layer_filter.Filter.md#extent)
- [sql](geo_api_layer_filter.Filter.md#sql)

### Methods

- [cacheActiveKeys](geo_api_layer_filter.Filter.md#cacheactivekeys)
- [clearAll](geo_api_layer_filter.Filter.md#clearall)
- [clearAllCaches](geo_api_layer_filter.Filter.md#clearallcaches)
- [clearCacheSet](geo_api_layer_filter.Filter.md#clearcacheset)
- [getCache](geo_api_layer_filter.Filter.md#getcache)
- [getCacheKey](geo_api_layer_filter.Filter.md#getcachekey)
- [getCombinedSql](geo_api_layer_filter.Filter.md#getcombinedsql)
- [getSql](geo_api_layer_filter.Filter.md#getsql)
- [isActive](geo_api_layer_filter.Filter.md#isactive)
- [setCache](geo_api_layer_filter.Filter.md#setcache)
- [setExtent](geo_api_layer_filter.Filter.md#setextent)
- [setSql](geo_api_layer_filter.Filter.md#setsql)
- [sqlActiveFilters](geo_api_layer_filter.Filter.md#sqlactivefilters)

## Constructors

### constructor

• **new Filter**(`permanentWhereClause?`, `initialWhereClause?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `permanentWhereClause` | `string` | `''` |
| `initialWhereClause` | `string` | `''` |

#### Defined in

[src/geo/api/layer/filter.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L15)

## Properties

### cache

• `Private` **cache**: `Object`

#### Index signature

▪ [key: `string`]: `Promise`<`number`[]\>

#### Defined in

[src/geo/api/layer/filter.ts:12](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L12)

___

### extent

• `Private` **extent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/layer/filter.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L13)

___

### sql

• `Private` **sql**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/geo/api/layer/filter.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L11)

## Methods

### cacheActiveKeys

▸ `Private` **cacheActiveKeys**(): `string`[]

Returns list of cache keys that have caches

**`Method`**

cacheActiveKeys

#### Returns

`string`[]

list of cache keys with active caches

#### Defined in

[src/geo/api/layer/filter.ts:193](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L193)

___

### clearAll

▸ **clearAll**(): `void`

Resets all internal filter settings to have no filter applied.

**`Method`**

clearAll

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:229](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L229)

___

### clearAllCaches

▸ `Private` **clearAllCaches**(): `void`

Resets all internal caches.

**`Method`**

clearAllCaches

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:203](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L203)

___

### clearCacheSet

▸ `Private` **clearCacheSet**(`filterName`): `void`

Resets all internal caches related to a filter.

**`Method`**

clearCacheSet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterName` | `string` | filter that has changed and needs its caches wiped |

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L214)

___

### getCache

▸ **getCache**(`sqlFilters`, `includeExtent`): `Promise`<`number`[]\>

Returns cache for a specific filtering scenario.

**`Method`**

getCache

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sqlFilters` | `string`[] | list of filter keys influencing this cache |
| `includeExtent` | `boolean` | if the cache includes extent based filters |

#### Returns

`Promise`<`number`[]\>

resolves in a filter result appropriate for the parameters. returns undefined if no cache exists.

#### Defined in

[src/geo/api/layer/filter.ts:162](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L162)

___

### getCacheKey

▸ `Private` **getCacheKey**(`sqlFilters`, `includeExtent`): `string`

Returns cache key depending on the situation we are in.

**`Method`**

getCacheKey

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sqlFilters` | `string`[] | list of filter keys influencing this cache |
| `includeExtent` | `boolean` | if the cache includes extent based filters |

#### Returns

`string`

the cache key to use

#### Defined in

[src/geo/api/layer/filter.ts:144](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L144)

___

### getCombinedSql

▸ **getCombinedSql**(`exclusions?`): `string`

Returns a SQL WHERE condition that is combination of active filters.

**`Method`**

getCombinedSql

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exclusions?` | `string`[] | `[]` | list of any filter keys to exclude from the result. omission includes all filters |

#### Returns

`string`

all non-excluded sql statements connected with AND operators.

#### Defined in

[src/geo/api/layer/filter.ts:64](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L64)

___

### getSql

▸ **getSql**(`filterKey`): `string`

Returns current SQL for a filter key

**`Method`**

getSql

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterKey` | `string` | key string indicating what filter the sql belongs to |

#### Returns

`string`

the SQL, if any, that matches the filter type

#### Defined in

[src/geo/api/layer/filter.ts:107](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L107)

___

### isActive

▸ **isActive**(): `boolean`

Indicates if any filters are active. A Permanent filter does not influence the result.

**`Method`**

isActive

#### Returns

`boolean`

indicates if any non-permanent filters are active

#### Defined in

[src/geo/api/layer/filter.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L51)

___

### setCache

▸ **setCache**(`queryPromise`, `sqlFilters`, `includeExtent`): `void`

Sets a filter query in a cache, so repeated identical requests will only hit the server once

**`Method`**

setCache

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryPromise` | `Promise`<`number`[]\> | the query we want to cache |
| `sqlFilters` | `string`[] | list of filter keys influencing this cache |
| `includeExtent` | `boolean` | if the cache includes extent based filters |

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:178](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L178)

___

### setExtent

▸ **setExtent**(`extent`): `void`

Registers a new extent for cache tracking.

**`Method`**

setExtent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | the extent to filter against |

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L117)

___

### setSql

▸ **setSql**(`filterKey`, `whereClause`): `void`

Updates a SQL filter clause.

**`Method`**

setSql

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterKey` | `string` | key of the filter to update (can be a new value) |
| `whereClause` | `string` | clause defining the active filters on symbols. Use '' for no filter. Use '1=2' for everything filtered. |

#### Returns

`void`

#### Defined in

[src/geo/api/layer/filter.ts:87](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L87)

___

### sqlActiveFilters

▸ **sqlActiveFilters**(`exclusions?`): `string`[]

Returns list of filter keys that have active filters

**`Method`**

sqlActiveFilters

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exclusions?` | `string`[] | `[]` | list of any filter keys to exclude from the result. omission includes all filters |

#### Returns

`string`[]

list of filter keys with active filter sql

#### Defined in

[src/geo/api/layer/filter.ts:34](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/filter.ts#L34)
