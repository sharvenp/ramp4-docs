[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/export/api/export](../modules/fixtures_export_api_export.md) / ExportAPI

# Class: ExportAPI

[fixtures/export/api/export](../modules/fixtures_export_api_export.md).ExportAPI

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`ExportAPI`**

## Table of contents

### Constructors

- [constructor](fixtures_export_api_export.ExportAPI.md#constructor)

### Properties

- [$iApi](fixtures_export_api_export.ExportAPI.md#$iapi)
- [fcFabric](fixtures_export_api_export.ExportAPI.md#fcfabric)
- [fcFabricDownload](fixtures_export_api_export.ExportAPI.md#fcfabricdownload)
- [id](fixtures_export_api_export.ExportAPI.md#id)
- [options](fixtures_export_api_export.ExportAPI.md#options)

### Accessors

- [$element](fixtures_export_api_export.ExportAPI.md#$element)
- [$vApp](fixtures_export_api_export.ExportAPI.md#$vapp)
- [config](fixtures_export_api_export.ExportAPI.md#config)

### Methods

- [\_parseConfig](fixtures_export_api_export.ExportAPI.md#_parseconfig)
- [added](fixtures_export_api_export.ExportAPI.md#added)
- [export](fixtures_export_api_export.ExportAPI.md#export)
- [extend](fixtures_export_api_export.ExportAPI.md#extend)
- [getLayerFixtureConfig](fixtures_export_api_export.ExportAPI.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_export_api_export.ExportAPI.md#getlayerfixtureconfigs)
- [getSubFixture](fixtures_export_api_export.ExportAPI.md#getsubfixture)
- [handlePanelWidths](fixtures_export_api_export.ExportAPI.md#handlepanelwidths)
- [initialized](fixtures_export_api_export.ExportAPI.md#initialized)
- [make](fixtures_export_api_export.ExportAPI.md#make)
- [mount](fixtures_export_api_export.ExportAPI.md#mount)
- [remove](fixtures_export_api_export.ExportAPI.md#remove)
- [removed](fixtures_export_api_export.ExportAPI.md#removed)
- [terminated](fixtures_export_api_export.ExportAPI.md#terminated)
- [updateBaseToInstance](fixtures_export_api_export.ExportAPI.md#updatebasetoinstance)

## Constructors

### constructor

• **new ExportAPI**(`id`, `iApi`)

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

### fcFabric

• **fcFabric**: `undefined` \| `StaticCanvas`

#### Defined in

[src/fixtures/export/api/export.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L21)

___

### fcFabricDownload

• **fcFabricDownload**: `undefined` \| `StaticCanvas`

#### Defined in

[src/fixtures/export/api/export.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L23)

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

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `runningHeight` | `number` |
| `scale` | `number` |

#### Defined in

[src/fixtures/export/api/export.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L25)

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

• `get` **config**(): `undefined` \| `ExportConfig`

Returns `ExportConfig` section of the global config file.

**`Memberof`**

ExportAPI

#### Returns

`undefined` \| `ExportConfig`

#### Overrides

FixtureInstance.config

#### Defined in

[src/fixtures/export/api/export.ts:37](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L37)

## Methods

### \_parseConfig

▸ **_parseConfig**(`exportConfig?`): `void`

Parses the export config JSON snippet from the config file and save to the fixture store.

**`Memberof`**

ExportAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `exportConfig?` | `ExportConfig` |

#### Returns

`void`

#### Defined in

[src/fixtures/export/api/export.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L47)

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

### export

▸ **export**(): `void`

#### Returns

`void`

#### Defined in

[src/fixtures/export/api/export.ts:232](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L232)

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

### getSubFixture

▸ `Private` **getSubFixture**(`name`): [`ExportSubFixture`](../interfaces/fixtures_export_api_export.ExportSubFixture.md)

Fetches an Export sub fixture

**`Memberof`**

ExportAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ExportSubFixture`](../interfaces/fixtures_export_api_export.ExportSubFixture.md)

#### Defined in

[src/fixtures/export/api/export.ts:74](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L74)

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

### initialized

▸ `Optional` **initialized**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[initialized](api_fixture.FixtureInstance.md#initialized)

#### Defined in

[src/api/fixture.ts:373](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L373)

___

### make

▸ **make**(`canvas`, `panelWidth`): `Promise`<`void`\>

Creates an export canvas.

**`Memberof`**

ExportAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `panelWidth` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/export/api/export.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L86)

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

### remove

▸ **remove**(): [`ExportAPI`](fixtures_export_api_export.ExportAPI.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`ExportAPI`](fixtures_export_api_export.ExportAPI.md)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[remove](api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

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
