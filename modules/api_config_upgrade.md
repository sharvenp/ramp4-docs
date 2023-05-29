[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / api/config-upgrade

# Module: api/config-upgrade

## Table of contents

### Functions

- [configUpgrade2to4](api_config_upgrade.md#configupgrade2to4)
- [layerUpgrader](api_config_upgrade.md#layerupgrader)

## Functions

### configUpgrade2to4

▸ **configUpgrade2to4**(`r2c`): `RampConfigs`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r2c` | `any` | a RAMP2 config or an array of RAMP2 configs (one per language) |

#### Returns

`RampConfigs`

A RAMP4 config object set (language indexed), adapted as best as possible

#### Defined in

[src/api/config-upgrade.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/config-upgrade.ts#L28)

___

### layerUpgrader

▸ **layerUpgrader**(`r2layer`): `any`

Map layer from RAMP2 to RAMP4 config.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r2layer` | `any` | layer from RAMP2 config |

#### Returns

`any`

layer from RAMP4 config

#### Defined in

[src/api/config-upgrade.ts:630](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/config-upgrade.ts#L630)
