[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/hilight/api/hilight-mode/fog-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_fog_hilight_mode.md) / FogHilightMode

# Class: FogHilightMode

[fixtures/hilight/api/hilight-mode/fog-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_fog_hilight_mode.md).FogHilightMode

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`LiftHilightMode`](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md)

  ↳ **`FogHilightMode`**

## Table of contents

### Constructors

- [constructor](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#constructor)

### Properties

- [$iApi](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#$iapi)
- [config](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#config)
- [handlers](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#handlers)
- [lastAdd](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#lastadd)
- [mode](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#mode)
- [offOpacity](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#offopacity)
- [onOpacity](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#onopacity)

### Accessors

- [$element](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#$element)
- [$vApp](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#$vapp)

### Methods

- [add](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#add)
- [getFogLayer](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#getfoglayer)
- [getHilightLayer](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#gethilightlayer)
- [hilightSetup](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#hilightsetup)
- [reloadHilight](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#reloadhilight)
- [remove](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#remove)
- [reorderFogLayer](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#reorderfoglayer)
- [updateFogLayer](fixtures_hilight_api_hilight_mode_fog_hilight_mode.FogHilightMode.md#updatefoglayer)

## Constructors

### constructor

• **new FogHilightMode**(`config`, `iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[constructor](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#constructor)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:16](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L16)

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

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L8)

___

### lastAdd

• `Private` **lastAdd**: `number` = `0`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L14)

___

### mode

• **mode**: [`HilightMode`](../enums/fixtures_hilight_api_hilight_defs.HilightMode.md) = `HilightMode.NONE`

#### Inherited from

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[mode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#mode)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L15)

___

### offOpacity

• **offOpacity**: `number`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:12](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L12)

___

### onOpacity

• **onOpacity**: `number`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L11)

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

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:87](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L87)

___

### getFogLayer

▸ `Private` **getFogLayer**(): `undefined` \| [`TileLayer`](geo_layer_tile_layer.TileLayer.md)

Returns the Hilight layer.

#### Returns

`undefined` \| [`TileLayer`](geo_layer_tile_layer.TileLayer.md)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:142](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L142)

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

▸ `Private` **hilightSetup**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L38)

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

[LiftHilightMode](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md).[reloadHilight](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md#reloadhilight)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:134](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L134)

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

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:104](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L104)

___

### reorderFogLayer

▸ `Private` **reorderFogLayer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:68](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L68)

___

### updateFogLayer

▸ `Private` **updateFogLayer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/fog-hilight-mode.ts#L63)
