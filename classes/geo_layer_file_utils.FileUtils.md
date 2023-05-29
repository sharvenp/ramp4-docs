[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/file-utils](../modules/geo_layer_file_utils.md) / FileUtils

# Class: FileUtils

[geo/layer/file-utils](../modules/geo_layer_file_utils.md).FileUtils

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`FileUtils`**

## Table of contents

### Constructors

- [constructor](geo_layer_file_utils.FileUtils.md#constructor)

### Properties

- [$iApi](geo_layer_file_utils.FileUtils.md#$iapi)

### Accessors

- [$element](geo_layer_file_utils.FileUtils.md#$element)
- [$vApp](geo_layer_file_utils.FileUtils.md#$vapp)

### Methods

- [csvToGeoJson](geo_layer_file_utils.FileUtils.md#csvtogeojson)
- [extractCsvFields](geo_layer_file_utils.FileUtils.md#extractcsvfields)
- [extractGeoJsonFields](geo_layer_file_utils.FileUtils.md#extractgeojsonfields)
- [fetchFileData](geo_layer_file_utils.FileUtils.md#fetchfiledata)
- [filterCsvLatLonFields](geo_layer_file_utils.FileUtils.md#filtercsvlatlonfields)
- [geoJsonToEsriJson](geo_layer_file_utils.FileUtils.md#geojsontoesrijson)
- [inferType](geo_layer_file_utils.FileUtils.md#infertype)
- [shapefileToGeoJson](geo_layer_file_utils.FileUtils.md#shapefiletogeojson)

## Constructors

### constructor

• **new FileUtils**(`iApi`)

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

### csvToGeoJson

▸ **csvToGeoJson**(`csvData`, `opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `csvData` | `string` |
| `opts` | `undefined` \| [`CsvOptions`](../interfaces/geo_api_geo_defs.CsvOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/geo/layer/file-utils.ts:556](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L556)

___

### extractCsvFields

▸ **extractCsvFields**(`csvData`, `delimiter?`): { `name`: `string` = field; `type`: [`FieldType`](../enums/geo_api_geo_defs.FieldType.md) = FieldType.STRING }[]

Extracts fields from csv file does no guesswork on property types and calls everything a string.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `csvData` | `string` | `undefined` |
| `delimiter` | `string` | `','` |

#### Returns

{ `name`: `string` = field; `type`: [`FieldType`](../enums/geo_api_geo_defs.FieldType.md) = FieldType.STRING }[]

#### Defined in

[src/geo/layer/file-utils.ts:322](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L322)

___

### extractGeoJsonFields

▸ **extractGeoJsonFields**(`geoJson`): { `name`: `string` ; `type`: `string`  }[]

Extracts fields from the first feature in the feature collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJson` | `any` |

#### Returns

{ `name`: `string` ; `type`: `string`  }[]

#### Defined in

[src/geo/layer/file-utils.ts:202](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L202)

___

### fetchFileData

▸ **fetchFileData**(`url`, `fileType`): `Promise`<`any`\>

Fetch file data from remote URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the URL to get the data from |
| `fileType` | [`LayerType`](../enums/geo_api_geo_defs.LayerType.md) | the type of the file layer (csv, shape, or geoJson) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/geo/layer/file-utils.ts:173](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L173)

___

### filterCsvLatLonFields

▸ **filterCsvLatLonFields**(`csvData`, `delimiter?`): `Object`

Returns all the fields from csv file that can be possible lat/long fields

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `csvData` | `any` | `undefined` | the csv file data |
| `delimiter` | `string` | `','` | the delimiter in the data |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lat` | `any` |
| `lon` | `any` |

#### Defined in

[src/geo/layer/file-utils.ts:342](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L342)

___

### geoJsonToEsriJson

▸ **geoJsonToEsriJson**(`geoJson`, `options`): `Promise`<`FeatureLayerProperties`\>

Convert GeoJSON to Esri json, a format that can be read by a feature layer constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geoJson` | `any` | {Object} a GeoJSON object |
| `options` | [`GeoJsonOptions`](../interfaces/geo_api_geo_defs.GeoJsonOptions.md) | {GeoJsonOptions} any options for the transformation |

#### Returns

`Promise`<`FeatureLayerProperties`\>

feature layer constructor object

#### Defined in

[src/geo/layer/file-utils.ts:384](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L384)

___

### inferType

▸ **inferType**(`value`): [`FieldType`](../enums/geo_api_geo_defs.FieldType.md)

Attempt to infers the type of a given value
Will check if the value's type is one of int, double
Defaults to string type if not

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`FieldType`](../enums/geo_api_geo_defs.FieldType.md)

#### Defined in

[src/geo/layer/file-utils.ts:620](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L620)

___

### shapefileToGeoJson

▸ **shapefileToGeoJson**(`shapeData`): `Promise`<`any`\>

Converts Shapefile data to geojson.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shapeData` | `ArrayBuffer` | an ArrayBuffer of the Shapefile in zip format |

#### Returns

`Promise`<`any`\>

a promise resolving with geojson

#### Defined in

[src/geo/layer/file-utils.ts:611](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-utils.ts#L611)
