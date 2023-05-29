[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/layer/scale-set](../modules/geo_api_layer_scale_set.md) / ScaleSet

# Class: ScaleSet

[geo/api/layer/scale-set](../modules/geo_api_layer_scale_set.md).ScaleSet

## Table of contents

### Constructors

- [constructor](geo_api_layer_scale_set.ScaleSet.md#constructor)

### Properties

- [maxScale](geo_api_layer_scale_set.ScaleSet.md#maxscale)
- [minScale](geo_api_layer_scale_set.ScaleSet.md#minscale)

### Methods

- [isOffScale](geo_api_layer_scale_set.ScaleSet.md#isoffscale)

## Constructors

### constructor

• **new ScaleSet**(`minScale?`, `maxScale?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minScale` | `number` | `0` |
| `maxScale` | `number` | `0` |

#### Defined in

[src/geo/api/layer/scale-set.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/scale-set.ts#L11)

## Properties

### maxScale

• **maxScale**: `number`

#### Defined in

[src/geo/api/layer/scale-set.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/scale-set.ts#L9)

___

### minScale

• **minScale**: `number`

#### Defined in

[src/geo/api/layer/scale-set.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/scale-set.ts#L8)

## Methods

### isOffScale

▸ **isOffScale**(`mapScale`): `OffScaleStatus`

Indicates if the feature class is not visible at the given scale,
and if so, if we need to zoom in to see it or zoom out

**`Function`**

isOffScale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapScale` | `number` | the scale to test against |

#### Returns

`OffScaleStatus`

has boolean properties `offScale` and `zoomIn`

#### Defined in

[src/geo/api/layer/scale-set.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/scale-set.ts#L24)
