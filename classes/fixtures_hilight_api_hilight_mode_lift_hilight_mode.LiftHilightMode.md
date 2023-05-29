[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/hilight/api/hilight-mode/lift-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_lift_hilight_mode.md) / LiftHilightMode

# Class: LiftHilightMode

[fixtures/hilight/api/hilight-mode/lift-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_lift_hilight_mode.md).LiftHilightMode

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`BaseHilightMode`](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md)

  ↳ **`LiftHilightMode`**

  ↳↳ [`FogHilightMode`](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md)

  ↳↳ [`GlowHilightMode`](fixtures_hilight_api_hilight_mode_glow_hilight_mode.GlowHilightMode.md)

## Table of contents

### Constructors

- [constructor](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#constructor)

### Properties

- [$iApi](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#$iapi)
- [config](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#config)
- [mode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#mode)

### Accessors

- [$element](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#$element)
- [$vApp](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#$vapp)

### Methods

- [add](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#add)
- [getHilightLayer](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#gethilightlayer)
- [reloadHilight](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#reloadhilight)
- [remove](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#remove)

## Constructors

### constructor

• **new LiftHilightMode**(`config`, `iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Inherited from

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[constructor](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#constructor)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L17)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[$iApi](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### config

• **config**: `any` = `{}`

#### Inherited from

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[config](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#config)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L14)

___

### mode

• **mode**: [`HilightMode`](../enums/fixtures_hilight_api_hilight_defs.HilightMode.md) = `HilightMode.NONE`

#### Inherited from

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[mode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#mode)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L15)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

BaseHilightMode.$element

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

BaseHilightMode.$vApp

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

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[add](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#add)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts#L9)

___

### getHilightLayer

▸ **getHilightLayer**(): `Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

Returns the Hilight layer.

#### Returns

`Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

#### Inherited from

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[getHilightLayer](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#gethilightlayer)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L47)

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

#### Overrides

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[reloadHilight](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#reloadhilight)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts#L31)

___

### remove

▸ **remove**(`graphics`): `Promise`<`void`\>

Removes the given graphics from the hilight layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | `undefined` \| [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseHilightMode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md).[remove](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#remove)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/lift-hilight-mode.ts#L20)
