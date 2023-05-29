[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / main

# Module: main

## Table of contents

### Variables

- [geo](main.md#geo)
- [version](main.md#version)

### Functions

- [configUpgrade](main.md#configupgrade)
- [createInstance](main.md#createinstance)
- [layerConfigUpgrade](main.md#layerconfigupgrade)

## Variables

### geo

• `Const` **geo**: [`GeoCommonAPI`](../classes/geo_api_geo_common.GeoCommonAPI.md)

#### Defined in

[src/main.ts:59](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/main.ts#L59)

___

### version

• `Const` **version**: `Object` = `__RAMP_VERSION__`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `major` | `string` |
| `minor` | `string` |
| `patch` | `string` |
| `timestamp` | `string` |

#### Defined in

[src/main.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/main.ts#L40)

## Functions

### configUpgrade

▸ **configUpgrade**(`ramp2Config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ramp2Config` | `any` |

#### Returns

`any`

#### Defined in

[src/main.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/main.ts#L41)

___

### createInstance

▸ **createInstance**(`el`, `config?`, `opts?`): [`InstanceAPI`](../classes/api_instance.InstanceAPI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `config?` | `RampConfigs` |
| `opts?` | [`RampOptions`](../interfaces/api_instance.RampOptions.md) |

#### Returns

[`InstanceAPI`](../classes/api_instance.InstanceAPI.md)

#### Defined in

[src/main.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/main.ts#L49)

___

### layerConfigUpgrade

▸ **layerConfigUpgrade**(`ramp2LayerConfig`): [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ramp2LayerConfig` | `any` |

#### Returns

[`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md)

#### Defined in

[src/main.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/main.ts#L45)
