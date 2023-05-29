[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/ogc-utils](../modules/geo_layer_ogc_utils.md) / OgcUtils

# Class: OgcUtils

[geo/layer/ogc-utils](../modules/geo_layer_ogc_utils.md).OgcUtils

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`OgcUtils`**

## Table of contents

### Constructors

- [constructor](geo_layer_ogc_utils.OgcUtils.md#constructor)

### Properties

- [$iApi](geo_layer_ogc_utils.OgcUtils.md#$iapi)

### Accessors

- [$element](geo_layer_ogc_utils.OgcUtils.md#$element)
- [$vApp](geo_layer_ogc_utils.OgcUtils.md#$vapp)

### Methods

- [loadWfsData](geo_layer_ogc_utils.OgcUtils.md#loadwfsdata)
- [parseCapabilities](geo_layer_ogc_utils.OgcUtils.md#parsecapabilities)
- [reversedAxisWKIDs](geo_layer_ogc_utils.OgcUtils.md#reversedaxiswkids)

## Constructors

### constructor

• **new OgcUtils**(`iApi`)

Creates an instance of APIScope.

**`Memberof`**

APIScope

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Inherited from

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/common.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L41)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[APIScope](api_common.APIScope.md).[$iApi](api_common.APIScope.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

APIScope.$element

#### Defined in

[src/api/common.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L31)

___

### $vApp

• `get` **$vApp**(): `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

The instance of Vue R4MP application controlled by this InstanceAPI.
This is just a shorthand for `this.$iApi.$vApp`.

**`Memberof`**

APIScope

#### Returns

`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

#### Inherited from

APIScope.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

## Methods

### loadWfsData

▸ **loadWfsData**(`url`, `totalCount?`, `startindex?`, `limit?`, `wfsData?`, `xyInAttribs?`): `Promise`<`any`\>

Will load a WFS 3 feature set and return as GeoJSON object.
Data will be downloaded in batches (based on limit parameter) to
avoid massive requests that may timeout.

**`Memberof`**

WFSServiceSource

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | the current url to the wfs service. Should be a /collections/id/items/ endpoint with optional params after the question operator |
| `totalCount?` | `number` | `-1` | the total number of features available on that service. If not provided, the service will be interrogated for the count. |
| `startindex?` | `number` | `0` | the feature index to start the querying from. default 0 |
| `limit?` | `number` | `1000` | the limit of how many results we want returned per server request. default 1000 |
| `wfsData?` | `WFSData` | `undefined` | - |
| `xyInAttribs?` | `boolean` | `false` | true if point co-ords should be copied to attribute values |

#### Returns

`Promise`<`any`\>

a promise resolving with the layer GeoJSON

#### Defined in

[src/geo/layer/ogc-utils.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/ogc-utils.ts#L33)

___

### parseCapabilities

▸ **parseCapabilities**(`wmsEndpoint`): `Promise`<`any`\>

Fetch layer data from a WMS endpoint.  This method will execute a WMS GetCapabilities
request against the specified URL, it requests WMS 1.3 and it is capable of parsing
1.3 or 1.1.1 responses.  It returns a promise which will resolve with basic layer
metadata and querying information.

metadata response format:
  { queryTypes: [mimeType(str)],
    layers: [
      {name(str), desc(str), queryable(bool), layers:[recursive] }
    ] }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wmsEndpoint` | `string` | a URL pointing to a WMS server (it must not include a query string) |

#### Returns

`Promise`<`any`\>

a promise resolving with a metadata object (as specified above)

#### Defined in

[src/geo/layer/ogc-utils.ts:161](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/ogc-utils.ts#L161)

___

### reversedAxisWKIDs

▸ **reversedAxisWKIDs**(): `number`[]

Provides list of spatial references that are encoded in [y,x] format.

#### Returns

`number`[]

array of wkids that have reversed axis

#### Defined in

[src/geo/layer/ogc-utils.ts:141](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/ogc-utils.ts#L141)
