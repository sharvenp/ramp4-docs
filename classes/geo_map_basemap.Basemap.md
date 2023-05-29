[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/basemap](../modules/geo_map_basemap.md) / Basemap

# Class: Basemap

[geo/map/basemap](../modules/geo_map_basemap.md).Basemap

## Table of contents

### Constructors

- [constructor](geo_map_basemap.Basemap.md#constructor)

### Properties

- [config](geo_map_basemap.Basemap.md#config)
- [esriBasemap](geo_map_basemap.Basemap.md#esribasemap)

### Accessors

- [altText](geo_map_basemap.Basemap.md#alttext)
- [attribution](geo_map_basemap.Basemap.md#attribution)
- [description](geo_map_basemap.Basemap.md#description)
- [id](geo_map_basemap.Basemap.md#id)
- [name](geo_map_basemap.Basemap.md#name)
- [tileSchemaId](geo_map_basemap.Basemap.md#tileschemaid)

## Constructors

### constructor

• **new Basemap**(`rampConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rampConfig` | [`RampBasemapConfig`](../interfaces/geo_api_geo_defs.RampBasemapConfig.md) |

#### Defined in

[src/geo/map/basemap.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L16)

## Properties

### config

• `Readonly` **config**: [`RampBasemapConfig`](../interfaces/geo_api_geo_defs.RampBasemapConfig.md)

#### Defined in

[src/geo/map/basemap.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L14)

___

### esriBasemap

• **esriBasemap**: [`EsriBasemap`](geo_esri.EsriBasemap.md)

#### Defined in

[src/geo/map/basemap.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L13)

## Accessors

### altText

• `get` **altText**(): `undefined` \| `string`

Get this basemap's alt text from the config

#### Returns

`undefined` \| `string`

#### Defined in

[src/geo/map/basemap.ts:99](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L99)

• `set` **altText**(`value`): `void`

Set this basemap's alt text

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/geo/map/basemap.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L106)

___

### attribution

• `get` **attribution**(): `undefined` \| [`Attribution`](../interfaces/geo_api_geo_defs.Attribution.md)

Get this basemap's attribution config

#### Returns

`undefined` \| [`Attribution`](../interfaces/geo_api_geo_defs.Attribution.md)

#### Defined in

[src/geo/map/basemap.ts:113](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L113)

• `set` **attribution**(`value`): `void`

Set this basemap's attribution

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Attribution`](../interfaces/geo_api_geo_defs.Attribution.md) |

#### Returns

`void`

#### Defined in

[src/geo/map/basemap.ts:120](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L120)

___

### description

• `get` **description**(): `undefined` \| `string`

Get this basemap's description from the config

#### Returns

`undefined` \| `string`

#### Defined in

[src/geo/map/basemap.ts:85](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L85)

• `set` **description**(`value`): `void`

Set this basemap's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/geo/map/basemap.ts:92](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L92)

___

### id

• `get` **id**(): `string`

Returns the basemap id from the config

#### Returns

`string`

#### Defined in

[src/geo/map/basemap.ts:64](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L64)

___

### name

• `get` **name**(): `undefined` \| `string`

Get this basemap's name from the config

#### Returns

`undefined` \| `string`

#### Defined in

[src/geo/map/basemap.ts:71](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L71)

• `set` **name**(`value`): `void`

Set this basemap's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/geo/map/basemap.ts:78](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L78)

___

### tileSchemaId

• `get` **tileSchemaId**(): `string`

Returns the tile schema id from the config

#### Returns

`string`

#### Defined in

[src/geo/map/basemap.ts:57](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/basemap.ts#L57)
