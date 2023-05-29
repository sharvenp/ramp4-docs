[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/hilight/api/hilight-mode/base-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_base_hilight_mode.md) / BaseHilightMode

# Class: BaseHilightMode

[fixtures/hilight/api/hilight-mode/base-hilight-mode](../modules/fixtures_hilight_api_hilight_mode_base_hilight_mode.md).BaseHilightMode

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`BaseHilightMode`**

  ↳↳ [`LiftHilightMode`](fixtures_hilight_api_hilight_mode_lift_hilight_mode.LiftHilightMode.md)

## Table of contents

### Constructors

- [constructor](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#constructor)

### Properties

- [$iApi](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#$iapi)
- [config](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#config)
- [mode](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#mode)

### Accessors

- [$element](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#$element)
- [$vApp](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#$vapp)

### Methods

- [add](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#add)
- [getHilightLayer](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#gethilightlayer)
- [layerFetcher](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#layerfetcher)
- [notImplementedError](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#notimplementederror)
- [reloadHilight](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#reloadhilight)
- [remove](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md#remove)

## Constructors

### constructor

• **new BaseHilightMode**(`config`, `iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L17)

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

___

### config

• **config**: `any` = `{}`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L14)

___

### mode

• **mode**: [`HilightMode`](../enums/fixtures_hilight_api_hilight_defs.HilightMode.md) = `HilightMode.NONE`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L15)

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

### add

▸ **add**(`graphics`): `Promise`<`void`\>

Adds the given graphics to the hilight layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:26](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L26)

___

### getHilightLayer

▸ **getHilightLayer**(): `Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

Returns the Hilight layer.

#### Returns

`Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L47)

___

### layerFetcher

▸ `Private` **layerFetcher**(): `Promise`<`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)\>

Provides a short grace period to avoid scenarios where the layer is still getting created.
Not overly long, as the highlight layer is a local graphics layer so no server lag involved.

#### Returns

`Promise`<`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)\>

Promise resolving in the LayerInstace, or undefined if we could not locate the layer.

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:77](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L77)

___

### notImplementedError

▸ `Private` **notImplementedError**(`method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |

#### Returns

`void`

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:65](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L65)

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

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L40)

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

#### Defined in

[src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts#L33)
