[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/hilight/api/hilight-mode/glow-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_glow_hilight_mode.md) / GlowHilightMode

# Class: GlowHilightMode

[fixtures/hilight/api/hilight-mode/glow-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_glow_hilight_mode.md).GlowHilightMode

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`LiftHilightMode`](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md)

  ↳ **`GlowHilightMode`**

## Table of contents

### Constructors

- [constructor](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#constructor)

### Properties

- [$iApi](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#$iapi)
- [config](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#config)
- [handlers](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#handlers)
- [mode](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#mode)

### Accessors

- [$element](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#$element)
- [$vApp](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#$vapp)

### Methods

- [add](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#add)
- [getHilightLayer](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#gethilightlayer)
- [hilightSetup](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#hilightsetup)
- [reloadHilight](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#reloadhilight)
- [remove](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md#remove)

## Constructors

### constructor

• **new GlowHilightMode**(`config`, `iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[constructor](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#constructor)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts:10](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts#L10)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[$iApi](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### config

• **config**: `any` = `{}`

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[config](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#config)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L14)

___

### handlers

• **handlers**: `string`[] = `[]`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts#L8)

___

### mode

• **mode**: [`HilightMode`](../enums/fixtures_hilight_api_hilight_defs.HilightMode.md) = `HilightMode.NONE`

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[mode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#mode)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L15)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

LiftHilightMode.$element

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

LiftHilightMode.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

## Methods

### add

▸ **add**(`graphics`): `Promise`<`void`\>

Adds the given graphics to the hilight layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Overrides

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[add](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#add)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts#L31)

___

### getHilightLayer

▸ **getHilightLayer**(): `Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

Returns the Hilight layer.

#### Returns

`Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[getHilightLayer](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#gethilightlayer)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L47)

___

### hilightSetup

▸ `Private` **hilightSetup**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts#L22)

___

### reloadHilight

▸ **reloadHilight**(`graphics`): `Promise`<`void`\>

Reload the hilighter's map elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[reloadHilight](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#reloadhilight)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts#L31)

___

### remove

▸ **remove**(`graphics?`): `Promise`<`void`\>

Removes the given graphics from the hilight layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics?` | [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Overrides

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[remove](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#remove)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/glow-hilight-mode.ts#L60)
