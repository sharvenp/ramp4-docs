[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/utils/shared-utils](../modules/geo_api_utils_shared_utils.md) / UrlWrapper

# Class: UrlWrapper

[geo/api/utils/shared-utils](../modules/geo_api_utils_shared_utils.md).UrlWrapper

This is a helper class to handle getting and setting query parameters on a url easy.

## Table of contents

### Constructors

- [constructor](geo_api_utils_shared_utils.UrlWrapper.md#constructor)

### Properties

- [\_base](geo_api_utils_shared_utils.UrlWrapper.md#_base)
- [\_query](geo_api_utils_shared_utils.UrlWrapper.md#_query)
- [\_queryMap](geo_api_utils_shared_utils.UrlWrapper.md#_querymap)
- [\_url](geo_api_utils_shared_utils.UrlWrapper.md#_url)

### Accessors

- [base](geo_api_utils_shared_utils.UrlWrapper.md#base)
- [query](geo_api_utils_shared_utils.UrlWrapper.md#query)
- [queryMap](geo_api_utils_shared_utils.UrlWrapper.md#querymap)

### Methods

- [updateQuery](geo_api_utils_shared_utils.UrlWrapper.md#updatequery)

## Constructors

### constructor

• **new UrlWrapper**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[src/geo/api/utils/shared-utils.ts:145](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L145)

## Properties

### \_base

• **\_base**: `string`

#### Defined in

[src/geo/api/utils/shared-utils.ts:141](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L141)

___

### \_query

• **\_query**: `string`

#### Defined in

[src/geo/api/utils/shared-utils.ts:142](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L142)

___

### \_queryMap

• **\_queryMap**: [`UrlQueryMap`](../interfaces/geo_api_geo_defs.UrlQueryMap.md) = `{}`

#### Defined in

[src/geo/api/utils/shared-utils.ts:143](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L143)

___

### \_url

• **\_url**: `string`

#### Defined in

[src/geo/api/utils/shared-utils.ts:140](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L140)

## Accessors

### base

• `get` **base**(): `string`

#### Returns

`string`

#### Defined in

[src/geo/api/utils/shared-utils.ts:164](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L164)

___

### query

• `get` **query**(): `string`

#### Returns

`string`

#### Defined in

[src/geo/api/utils/shared-utils.ts:160](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L160)

___

### queryMap

• `get` **queryMap**(): [`UrlQueryMap`](../interfaces/geo_api_geo_defs.UrlQueryMap.md)

#### Returns

[`UrlQueryMap`](../interfaces/geo_api_geo_defs.UrlQueryMap.md)

#### Defined in

[src/geo/api/utils/shared-utils.ts:168](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L168)

## Methods

### updateQuery

▸ **updateQuery**(`queryMapUpdate`): `string`

Updates the query part of the url with passed in values.

For example:
 - orginal url: http://example?flag=red&demohell=true
 - queryMapUpdate: {
    flag: undefined,
    demohell: false,
    acid: cat
}
- resulting url: http://example?demohell=false&acid=cat

**`Memberof`**

UrlWrapper

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryMapUpdate` | [`UrlQueryMap`](../interfaces/geo_api_geo_defs.UrlQueryMap.md) | an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query. |

#### Returns

`string`

updated url

#### Defined in

[src/geo/api/utils/shared-utils.ts:189](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L189)
