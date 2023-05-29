[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/hilight/api/hilight](../modules/fixtures_hilight_api_hilight.md) / HilightAPI

# Class: HilightAPI

[fixtures/hilight/api/hilight](../modules/fixtures_hilight_api_hilight.md).HilightAPI

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`HilightAPI`**

## Table of contents

### Constructors

- [constructor](fixtures_hilight_api_hilight.HilightAPI.md#constructor)

### Properties

- [$iApi](fixtures_hilight_api_hilight.HilightAPI.md#$iapi)
- [hilightMode](fixtures_hilight_api_hilight.HilightAPI.md#hilightmode)
- [id](fixtures_hilight_api_hilight.HilightAPI.md#id)

### Accessors

- [$element](fixtures_hilight_api_hilight.HilightAPI.md#$element)
- [$vApp](fixtures_hilight_api_hilight.HilightAPI.md#$vapp)
- [config](fixtures_hilight_api_hilight.HilightAPI.md#config)

### Methods

- [\_parseConfig](fixtures_hilight_api_hilight.HilightAPI.md#_parseconfig)
- [addHilight](fixtures_hilight_api_hilight.HilightAPI.md#addhilight)
- [added](fixtures_hilight_api_hilight.HilightAPI.md#added)
- [constructGraphicKey](fixtures_hilight_api_hilight.HilightAPI.md#constructgraphickey)
- [deconstructGraphicKey](fixtures_hilight_api_hilight.HilightAPI.md#deconstructgraphickey)
- [extend](fixtures_hilight_api_hilight.HilightAPI.md#extend)
- [getGraphicsByKey](fixtures_hilight_api_hilight.HilightAPI.md#getgraphicsbykey)
- [getHilightLayer](fixtures_hilight_api_hilight.HilightAPI.md#gethilightlayer)
- [getLayerFixtureConfig](fixtures_hilight_api_hilight.HilightAPI.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_hilight_api_hilight.HilightAPI.md#getlayerfixtureconfigs)
- [handlePanelWidths](fixtures_hilight_api_hilight.HilightAPI.md#handlepanelwidths)
- [initHilightLayer](fixtures_hilight_api_hilight.HilightAPI.md#inithilightlayer)
- [initialized](fixtures_hilight_api_hilight.HilightAPI.md#initialized)
- [mount](fixtures_hilight_api_hilight.HilightAPI.md#mount)
- [reloadHilight](fixtures_hilight_api_hilight.HilightAPI.md#reloadhilight)
- [remove](fixtures_hilight_api_hilight.HilightAPI.md#remove)
- [removeHilight](fixtures_hilight_api_hilight.HilightAPI.md#removehilight)
- [removed](fixtures_hilight_api_hilight.HilightAPI.md#removed)
- [terminated](fixtures_hilight_api_hilight.HilightAPI.md#terminated)
- [updateBaseToInstance](fixtures_hilight_api_hilight.HilightAPI.md#updatebasetoinstance)

## Constructors

### constructor

• **new HilightAPI**(`id`, `iApi`)

Creates an instance of FixtureInstance.

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[constructor](api_fixture.FixtureInstance.md#constructor)

#### Defined in

[src/api/fixture.ts:291](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L291)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[$iApi](api_fixture.FixtureInstance.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### hilightMode

• **hilightMode**: [`BaseHilightMode`](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md)

#### Defined in

[src/fixtures/hilight/api/hilight.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L15)

___

### id

• `Readonly` **id**: `string`

ID of this fixture.

**`Memberof`**

FixtureInstance

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[id](api_fixture.FixtureInstance.md#id)

#### Defined in

[src/api/fixture.ts:282](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L282)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

FixtureInstance.$element

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

FixtureInstance.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

___

### config

• `get` **config**(): `any`

Returns the fixture config section (JSON) taken from the global config.

**`Memberof`**

FixtureInstance

#### Returns

`any`

#### Inherited from

FixtureInstance.config

#### Defined in

[src/api/fixture.ts:383](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L383)

## Methods

### \_parseConfig

▸ **_parseConfig**(`hilightConfig?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hilightConfig?` | [`HilightConfig`](../interfaces/fixtures_hilight_api_hilight_defs.HilightConfig.md) |

#### Returns

`void`

#### Defined in

[src/fixtures/hilight/api/hilight.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L22)

___

### addHilight

▸ **addHilight**(`graphics`): `Promise`<`void`\>

Add the given Graphics to the Hilighter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphics` | [`Graphic`](geo_api_graphic_graphic.Graphic.md) \| [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] | Graphics to add |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L82)

___

### added

▸ `Optional` **added**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[added](api_fixture.FixtureInstance.md#added)

#### Defined in

[src/api/fixture.ts:371](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L371)

___

### constructGraphicKey

▸ **constructGraphicKey**(`origin`, `uid`, `oid`): `string`

Return a well-formed graphic key

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | `string` |
| `uid` | `string` |
| `oid` | `number` |

#### Returns

`string`

#### Defined in

[src/fixtures/hilight/api/hilight.ts:146](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L146)

___

### deconstructGraphicKey

▸ **deconstructGraphicKey**(`key`): `Object`

Return a deconstructed graphic key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The graphic key to deconstruct |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `oid` | `number` |
| `origin` | `string` |
| `uid` | `string` |

#### Defined in

[src/fixtures/hilight/api/hilight.ts:155](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L155)

___

### extend

▸ **extend**(`vueComponent`, `options?`): `any`

A helper function to create a "subclass" of the base Vue constructor

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `vueComponent` | `Record`<`string`, `any`\> |
| `options?` | `ComponentOptions`<{}, `any`, `any`, `any`, `any`, `any`, `any`, `any`\> |

#### Returns

`any`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[extend](api_fixture.FixtureInstance.md#extend)

#### Defined in

[src/api/fixture.ts:317](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L317)

___

### getGraphicsByKey

▸ **getGraphicsByKey**(`origin?`, `uid?`, `oid?`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

Return all Graphics that match the given origin/uid/oid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin?` | `string` | Graphic origin |
| `uid?` | `string` | Associated layer UID of the Graphic |
| `oid?` | `number` | Associated OID of the Graphic |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:113](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L113)

___

### getHilightLayer

▸ **getHilightLayer**(): `Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

Return the hilightLayer

#### Returns

`Promise`<`undefined` \| [`CommonGraphicLayer`](geo_layer_common_graphic_layer.CommonGraphicLayer.md)\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:170](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L170)

___

### getLayerFixtureConfig

▸ **getLayerFixtureConfig**(`layerId`): `any`

Get this fixture's config from the layer config with the given layer id
Will return `undefined` if layer config did not specify a config for this fixture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The layer's id |

#### Returns

`any`

This fixture's config for the given layer

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[getLayerFixtureConfig](api_fixture.FixtureInstance.md#getlayerfixtureconfig)

#### Defined in

[src/api/fixture.ts:395](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L395)

___

### getLayerFixtureConfigs

▸ **getLayerFixtureConfigs**(): `Object`

Combines this fixtures configs from layer configs into an indexed-dictionary

#### Returns

`Object`

Dictionary where key is the layer id and the value is this fixture's config for that layer

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[getLayerFixtureConfigs](api_fixture.FixtureInstance.md#getlayerfixtureconfigs)

#### Defined in

[src/api/fixture.ts:406](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L406)

___

### handlePanelWidths

▸ **handlePanelWidths**(`panels`): `void`

If the `panelWidth` property is provided, handle default and specified panel widths for the given fixture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panels` | `string`[] | list of panel names for the calling fixture |

#### Returns

`void`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[handlePanelWidths](api_fixture.FixtureInstance.md#handlepanelwidths)

#### Defined in

[src/api/fixture.ts:438](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L438)

___

### initHilightLayer

▸ **initHilightLayer**(): `Promise`<`void`\>

Create the Hilight layer.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L66)

___

### initialized

▸ **initialized**(): `void`

#### Returns

`void`

#### Overrides

[FixtureInstance](api_fixture.FixtureInstance.md).[initialized](api_fixture.FixtureInstance.md#initialized)

#### Defined in

[src/fixtures/hilight/api/hilight.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L17)

___

### mount

▸ **mount**(`component`, `«destructured»?`): `Object`

Helper with programatically creating a component in Vue 3 (replaces the deprecated Vue.extend)

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `Component`<`any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> |
| `«destructured»` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destroy` | () => `void` |
| `el` | `any` |
| `vNode` | `any` |

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[mount](api_fixture.FixtureInstance.md#mount)

#### Defined in

[src/api/fixture.ts:349](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L349)

___

### reloadHilight

▸ **reloadHilight**(`graphics`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | [`Graphic`](geo_api_graphic_graphic.Graphic.md) \| [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:101](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L101)

___

### remove

▸ **remove**(): [`HilightAPI`](fixtures_hilight_api_hilight.HilightAPI.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`HilightAPI`](fixtures_hilight_api_hilight.HilightAPI.md)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[remove](api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removeHilight

▸ **removeHilight**(`graphics?`): `Promise`<`void`\>

Remove the given Graphics from the Hilighter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphics?` | [`Graphic`](geo_api_graphic_graphic.Graphic.md) \| [`Graphic`](geo_api_graphic_graphic.Graphic.md)[] | Graphics to remove |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/hilight/api/hilight.ts:92](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/hilight/api/hilight.ts#L92)

___

### removed

▸ `Optional` **removed**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[removed](api_fixture.FixtureInstance.md#removed)

#### Defined in

[src/api/fixture.ts:372](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L372)

___

### terminated

▸ `Optional` **terminated**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[terminated](api_fixture.FixtureInstance.md#terminated)

#### Defined in

[src/api/fixture.ts:374](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L374)

___

### updateBaseToInstance

▸ `Static` **updateBaseToInstance**(`value`, `id`, `$iApi`): [`FixtureInstance`](api_fixture.FixtureInstance.md)

Adds missing functions and properties to the object implementing FixtureBase interface.
This is only needed for external fixtures as they can't inherit from FixtureInstance.

TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.

**`Static`**

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `FixtureBase` |
| `id` | `string` |
| `$iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Returns

[`FixtureInstance`](api_fixture.FixtureInstance.md)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[updateBaseToInstance](api_fixture.FixtureInstance.md#updatebasetoinstance)

#### Defined in

[src/api/fixture.ts:248](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L248)
