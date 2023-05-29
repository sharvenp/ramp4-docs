[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/export/api/export](../modules/fixtures_export_api_export.md) / ExportSubFixture

# Interface: ExportSubFixture

[fixtures/export/api/export](../modules/fixtures_export_api_export.md).ExportSubFixture

A common interface for Export sub fixtures.

**`Export`**

ExportSubFixture

## Hierarchy

- [`FixtureInstance`](../classes/api_fixture.FixtureInstance.md)

  ↳ **`ExportSubFixture`**

## Implemented by

- [`default`](../classes/fixtures_export_legend.default.md)
- [`default`](../classes/fixtures_export_map.default.md)
- [`default`](../classes/fixtures_export_northarrow.default.md)
- [`default`](../classes/fixtures_export_scalebar.default.md)
- [`default`](../classes/fixtures_export_title.default.md)

## Table of contents

### Properties

- [$iApi](fixtures_export_api_export.ExportSubFixture.md#$iapi)
- [id](fixtures_export_api_export.ExportSubFixture.md#id)

### Accessors

- [$element](fixtures_export_api_export.ExportSubFixture.md#$element)
- [$vApp](fixtures_export_api_export.ExportSubFixture.md#$vapp)
- [config](fixtures_export_api_export.ExportSubFixture.md#config)

### Methods

- [added](fixtures_export_api_export.ExportSubFixture.md#added)
- [extend](fixtures_export_api_export.ExportSubFixture.md#extend)
- [getLayerFixtureConfig](fixtures_export_api_export.ExportSubFixture.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_export_api_export.ExportSubFixture.md#getlayerfixtureconfigs)
- [handlePanelWidths](fixtures_export_api_export.ExportSubFixture.md#handlepanelwidths)
- [initialized](fixtures_export_api_export.ExportSubFixture.md#initialized)
- [make](fixtures_export_api_export.ExportSubFixture.md#make)
- [mount](fixtures_export_api_export.ExportSubFixture.md#mount)
- [remove](fixtures_export_api_export.ExportSubFixture.md#remove)
- [removed](fixtures_export_api_export.ExportSubFixture.md#removed)
- [terminated](fixtures_export_api_export.ExportSubFixture.md#terminated)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](../classes/api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[$iApi](../classes/api_fixture.FixtureInstance.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### id

• `Readonly` **id**: `string`

ID of this fixture.

**`Memberof`**

FixtureInstance

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[id](../classes/api_fixture.FixtureInstance.md#id)

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

### added

▸ `Optional` **added**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[added](../classes/api_fixture.FixtureInstance.md#added)

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

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[extend](../classes/api_fixture.FixtureInstance.md#extend)

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

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[getLayerFixtureConfig](../classes/api_fixture.FixtureInstance.md#getlayerfixtureconfig)

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

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[getLayerFixtureConfigs](../classes/api_fixture.FixtureInstance.md#getlayerfixtureconfigs)

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

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[handlePanelWidths](../classes/api_fixture.FixtureInstance.md#handlepanelwidths)

#### Defined in

[src/api/fixture.ts:438](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L438)

___

### initialized

▸ `Optional` **initialized**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[initialized](../classes/api_fixture.FixtureInstance.md#initialized)

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

#### Defined in

[src/fixtures/export/api/export.ts:268](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/export/api/export.ts#L268)

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

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[mount](../classes/api_fixture.FixtureInstance.md#mount)

#### Defined in

[src/api/fixture.ts:349](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L349)

___

### remove

▸ **remove**(): [`ExportSubFixture`](fixtures_export_api_export.ExportSubFixture.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`ExportSubFixture`](fixtures_export_api_export.ExportSubFixture.md)

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[remove](../classes/api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removed

▸ `Optional` **removed**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[removed](../classes/api_fixture.FixtureInstance.md#removed)

#### Defined in

[src/api/fixture.ts:372](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L372)

___

### terminated

▸ `Optional` **terminated**(): `void`

#### Returns

`void`

#### Inherited from

[FixtureInstance](../classes/api_fixture.FixtureInstance.md).[terminated](../classes/api_fixture.FixtureInstance.md#terminated)

#### Defined in

[src/api/fixture.ts:374](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L374)
