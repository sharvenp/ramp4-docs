[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/export-title](../modules/fixtures_export_title.md) / default

# Class: default

[fixtures/export-title](../modules/fixtures_export_title.md).default

A common interface for Export sub fixtures.

**`Export`**

ExportSubFixture

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`default`**

## Implements

- [`ExportSubFixture`](../interfaces/fixtures_export_api_export.ExportSubFixture.md)

## Table of contents

### Constructors

- [constructor](fixtures_export_title.default.md#constructor)

### Properties

- [$iApi](fixtures_export_title.default.md#$iapi)
- [id](fixtures_export_title.default.md#id)

### Accessors

- [$element](fixtures_export_title.default.md#$element)
- [$vApp](fixtures_export_title.default.md#$vapp)
- [config](fixtures_export_title.default.md#config)

### Methods

- [added](fixtures_export_title.default.md#added)
- [extend](fixtures_export_title.default.md#extend)
- [getLayerFixtureConfig](fixtures_export_title.default.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_export_title.default.md#getlayerfixtureconfigs)
- [handlePanelWidths](fixtures_export_title.default.md#handlepanelwidths)
- [initialized](fixtures_export_title.default.md#initialized)
- [make](fixtures_export_title.default.md#make)
- [mount](fixtures_export_title.default.md#mount)
- [remove](fixtures_export_title.default.md#remove)
- [removed](fixtures_export_title.default.md#removed)
- [terminated](fixtures_export_title.default.md#terminated)
- [updateBaseToInstance](fixtures_export_title.default.md#updatebasetoinstance)

## Constructors

### constructor

• **new default**(`id`, `iApi`)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[$iApi](../interfaces/fixtures_export_api_export.ExportSubFixture.md#$iapi)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[$iApi](api_fixture.FixtureInstance.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### id

• `Readonly` **id**: `string`

ID of this fixture.

**`Memberof`**

FixtureInstance

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[id](../interfaces/fixtures_export_api_export.ExportSubFixture.md#id)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[id](api_fixture.FixtureInstance.md#id)

#### Defined in

[src/api/fixture.ts:282](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L282)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Implementation of

ExportSubFixture.$element

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

#### Implementation of

ExportSubFixture.$vApp

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

#### Implementation of

ExportSubFixture.config

#### Overrides

FixtureInstance.config

#### Defined in

[src/fixtures/export-title/index.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export-title/index.ts#L9)

## Methods

### added

▸ `Optional` **added**(): `void`

#### Returns

`void`

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[added](../interfaces/fixtures_export_api_export.ExportSubFixture.md#added)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[added](api_fixture.FixtureInstance.md#added)

#### Defined in

[src/api/fixture.ts:371](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L371)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[extend](../interfaces/fixtures_export_api_export.ExportSubFixture.md#extend)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[extend](api_fixture.FixtureInstance.md#extend)

#### Defined in

[src/api/fixture.ts:317](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L317)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[getLayerFixtureConfig](../interfaces/fixtures_export_api_export.ExportSubFixture.md#getlayerfixtureconfig)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[getLayerFixtureConfigs](../interfaces/fixtures_export_api_export.ExportSubFixture.md#getlayerfixtureconfigs)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[handlePanelWidths](../interfaces/fixtures_export_api_export.ExportSubFixture.md#handlepanelwidths)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[handlePanelWidths](api_fixture.FixtureInstance.md#handlepanelwidths)

#### Defined in

[src/api/fixture.ts:438](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L438)

___

### initialized

▸ `Optional` **initialized**(): `void`

#### Returns

`void`

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[initialized](../interfaces/fixtures_export_api_export.ExportSubFixture.md#initialized)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[initialized](api_fixture.FixtureInstance.md#initialized)

#### Defined in

[src/api/fixture.ts:373](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L373)

___

### make

▸ **make**(`options?`): `Promise`<`Object`\>

Creates an export image and returns it.

**`Memberof`**

ExportSubFixture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | fixture config options or any other options that a sub fixture accepts |

#### Returns

`Promise`<`Object`\>

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[make](../interfaces/fixtures_export_api_export.ExportSubFixture.md#make)

#### Defined in

[src/fixtures/export-title/index.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export-title/index.ts#L15)

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

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[mount](../interfaces/fixtures_export_api_export.ExportSubFixture.md#mount)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[mount](api_fixture.FixtureInstance.md#mount)

#### Defined in

[src/api/fixture.ts:349](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L349)

___

### remove

▸ **remove**(): [`default`](fixtures_export_title.default.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`default`](fixtures_export_title.default.md)

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[remove](../interfaces/fixtures_export_api_export.ExportSubFixture.md#remove)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[remove](api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removed

▸ `Optional` **removed**(): `void`

#### Returns

`void`

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[removed](../interfaces/fixtures_export_api_export.ExportSubFixture.md#removed)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[removed](api_fixture.FixtureInstance.md#removed)

#### Defined in

[src/api/fixture.ts:372](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L372)

___

### terminated

▸ `Optional` **terminated**(): `void`

#### Returns

`void`

#### Implementation of

[ExportSubFixture](../interfaces/fixtures_export_api_export.ExportSubFixture.md).[terminated](../interfaces/fixtures_export_api_export.ExportSubFixture.md#terminated)

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