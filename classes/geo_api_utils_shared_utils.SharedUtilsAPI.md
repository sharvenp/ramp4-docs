[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/utils/shared-utils](../modules/geo_api_utils_shared_utils.md) / SharedUtilsAPI

# Class: SharedUtilsAPI

[geo/api/utils/shared-utils](../modules/geo_api_utils_shared_utils.md).SharedUtilsAPI

## Table of contents

### Constructors

- [constructor](geo_api_utils_shared_utils.SharedUtilsAPI.md#constructor)

### Methods

- [convertImageToCanvas](geo_api_utils_shared_utils.SharedUtilsAPI.md#convertimagetocanvas)
- [convertImagetoDataURL](geo_api_utils_shared_utils.SharedUtilsAPI.md#convertimagetodataurl)
- [generateUUID](geo_api_utils_shared_utils.SharedUtilsAPI.md#generateuuid)
- [parseUrlIndex](geo_api_utils_shared_utils.SharedUtilsAPI.md#parseurlindex)

## Constructors

### constructor

• **new SharedUtilsAPI**()

## Methods

### convertImageToCanvas

▸ **convertImageToCanvas**(`url`, `canvas?`, `crossOrigin?`): `Promise`<`any`\>

Convert an image to a canvas element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | image url to convert (result from the esri print task) |
| `canvas?` | `HTMLCanvasElement` | `undefined` | [optional = undefined] canvas to draw the image upon; if not supplied, a new canvas will be made |
| `crossOrigin` | `boolean` | `true` | [optional = true] when set, tries to fetch an image with crossOrigin = anonymous |

#### Returns

`Promise`<`any`\>

conversion promise resolving into a canvas of the image

#### Defined in

[src/geo/api/utils/shared-utils.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L33)

___

### convertImagetoDataURL

▸ **convertImagetoDataURL**(`imageUri`, `imageType?`): `Promise`<`string`\>

Loads an image (as crossing) and converts it to dataURL. If a supplied imageUri is already a dataURL, just return it.
If an image fails to load with the crossing attribute, return the original imageUri

**`Function`**

convertImagetoDataURL

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageUri` | `string` | `undefined` | url of the image to load and convert |
| `imageType` | `string` | `'image/png'` | [optional = 'image/png'] format of the image representation |

#### Returns

`Promise`<`string`\>

promise resolving with the dataURL of the image

#### Defined in

[src/geo/api/utils/shared-utils.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L73)

___

### generateUUID

▸ **generateUUID**(): `string`

Get a 'good enough' uuid. For backup purposes if client does not supply its own
unique layer id

**`Method`**

generateUUID

#### Returns

`string`

a uuid

#### Defined in

[src/geo/api/utils/shared-utils.ts:12](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L12)

___

### parseUrlIndex

▸ **parseUrlIndex**(`url`): [`ArcGisServerUrl`](../interfaces/geo_api_geo_defs.ArcGisServerUrl.md)

Splits an indexed map server url into an object with .rootUrl and .index
properties.

**`Function`**

parseUrlIndex

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | an indexed map server url |

#### Returns

[`ArcGisServerUrl`](../interfaces/geo_api_geo_defs.ArcGisServerUrl.md)

the url split into the server root and the index.

#### Defined in

[src/geo/api/utils/shared-utils.ts:105](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/utils/shared-utils.ts#L105)
