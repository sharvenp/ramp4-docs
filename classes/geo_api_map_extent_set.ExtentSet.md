[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/map/extent-set](../modules/geo_api_map_extent_set.md) / ExtentSet

# Class: ExtentSet

[geo/api/map/extent-set](../modules/geo_api_map_extent_set.md).ExtentSet

## Table of contents

### Constructors

- [constructor](geo_api_map_extent_set.ExtentSet.md#constructor)

### Properties

- [\_defaultExtent](geo_api_map_extent_set.ExtentSet.md#_defaultextent)
- [\_fullExtent](geo_api_map_extent_set.ExtentSet.md#_fullextent)
- [\_maximumExtent](geo_api_map_extent_set.ExtentSet.md#_maximumextent)
- [id](geo_api_map_extent_set.ExtentSet.md#id)
- [sr](geo_api_map_extent_set.ExtentSet.md#sr)

### Accessors

- [defaultExtent](geo_api_map_extent_set.ExtentSet.md#defaultextent)
- [fullExtent](geo_api_map_extent_set.ExtentSet.md#fullextent)
- [maximumExtent](geo_api_map_extent_set.ExtentSet.md#maximumextent)

### Methods

- [clone](geo_api_map_extent_set.ExtentSet.md#clone)
- [fromConfig](geo_api_map_extent_set.ExtentSet.md#fromconfig)

## Constructors

### constructor

• **new ExtentSet**(`id`, `defaultExtent`, `fullExtent?`, `maximumExtent?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `defaultExtent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | `undefined` |
| `fullExtent` | `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | `undefined` |
| `maximumExtent` | `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | `undefined` |

#### Defined in

[src/geo/api/map/extent-set.ts:10](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L10)

## Properties

### \_defaultExtent

• `Private` **\_defaultExtent**: [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/map/extent-set.ts:6](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L6)

___

### \_fullExtent

• `Private` **\_fullExtent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/map/extent-set.ts:7](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L7)

___

### \_maximumExtent

• `Private` **\_maximumExtent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/map/extent-set.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L8)

___

### id

• **id**: `string`

#### Defined in

[src/geo/api/map/extent-set.ts:4](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L4)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

#### Defined in

[src/geo/api/map/extent-set.ts:5](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L5)

## Accessors

### defaultExtent

• `get` **defaultExtent**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/map/extent-set.ts:35](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L35)

• `set` **defaultExtent**(`extent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/map/extent-set.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L39)

___

### fullExtent

• `get` **fullExtent**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

the full extent (returns default extent if not provided)

#### Defined in

[src/geo/api/map/extent-set.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L46)

• `set` **fullExtent**(`extent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/map/extent-set.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L53)

___

### maximumExtent

• `get` **maximumExtent**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

the maximum extent (returns full extent if not provided)

#### Defined in

[src/geo/api/map/extent-set.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L60)

• `set` **maximumExtent**(`extent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) |

#### Returns

`void`

#### Defined in

[src/geo/api/map/extent-set.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L67)

## Methods

### clone

▸ **clone**(): [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

#### Returns

[`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

#### Defined in

[src/geo/api/map/extent-set.ts:98](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L98)

___

### fromConfig

▸ `Static` **fromConfig**(`extentSetConfig`): [`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

Parses a RAMP API Extent Set config into an ExtentSet object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extentSetConfig` | [`RampExtentSetConfig`](../interfaces/geo_api_geo_defs.RampExtentSetConfig.md) | the extent set config |

#### Returns

[`ExtentSet`](geo_api_map_extent_set.ExtentSet.md)

the parsed ExtentSet object

#### Defined in

[src/geo/api/map/extent-set.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/map/extent-set.ts#L76)
