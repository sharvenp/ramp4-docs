[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/fixture](../modules/api_fixture.md) / FixtureInstance

# Class: FixtureInstance

[api/fixture](../modules/api_fixture.md).FixtureInstance

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`FixtureInstance`**

  ↳↳ [`AppbarAPI`](fixtures_appbar_api_appbar.AppbarAPI.md)

  ↳↳ [`AreasOfInterestAPI`](fixtures_areas_of_interest_api_areas_of_interest.AreasOfInterestAPI.md)

  ↳↳ [`DetailsAPI`](fixtures_details_api_details.DetailsAPI.md)

  ↳↳ [`ExportAPI`](fixtures_export_api_export.ExportAPI.md)

  ↳↳ [`ExportSubFixture`](../interfaces/fixtures_export_api_export.ExportSubFixture.md)

  ↳↳ [`default`](fixtures_export_legend.default.md)

  ↳↳ [`default`](fixtures_export_map.default.md)

  ↳↳ [`default`](fixtures_export_northarrow.default.md)

  ↳↳ [`default`](fixtures_export_scalebar.default.md)

  ↳↳ [`default`](fixtures_export_title.default.md)

  ↳↳ [`GeosearchAPI`](fixtures_geosearch_api_geosearch.GeosearchAPI.md)

  ↳↳ [`GridAPI`](fixtures_grid_api_grid.GridAPI.md)

  ↳↳ [`HelpAPI`](fixtures_help_api_help.HelpAPI.md)

  ↳↳ [`HilightAPI`](fixtures_hilight_api_hilight.HilightAPI.md)

  ↳↳ [`LayerReorderAPI`](fixtures_layer_reorder_api_layer_reorder.LayerReorderAPI.md)

  ↳↳ [`LegendAPI`](fixtures_legend_api_legend.LegendAPI.md)

  ↳↳ [`MapnavAPI`](fixtures_mapnav_api_mapnav.MapnavAPI.md)

  ↳↳ [`MetadataAPI`](fixtures_metadata_api_metadata.MetadataAPI.md)

  ↳↳ [`NortharrowAPI`](fixtures_northarrow_api_northarrow.NortharrowAPI.md)

  ↳↳ [`OverviewmapAPI`](fixtures_overviewmap_api_overviewmap.OverviewmapAPI.md)

  ↳↳ [`ScrollguardAPI`](fixtures_scrollguard_api_scrollguard.ScrollguardAPI.md)

  ↳↳ [`SettingsAPI`](fixtures_settings_api_settings.SettingsAPI.md)

  ↳↳ [`WizardAPI`](fixtures_wizard_api_wizard.WizardAPI.md)

## Implements

- `FixtureBase`

## Table of contents

### Constructors

- [constructor](api_fixture.FixtureInstance.md#constructor)

### Properties

- [$iApi](api_fixture.FixtureInstance.md#$iapi)
- [id](api_fixture.FixtureInstance.md#id)

### Accessors

- [$element](api_fixture.FixtureInstance.md#$element)
- [$vApp](api_fixture.FixtureInstance.md#$vapp)
- [config](api_fixture.FixtureInstance.md#config)

### Methods

- [added](api_fixture.FixtureInstance.md#added)
- [extend](api_fixture.FixtureInstance.md#extend)
- [getLayerFixtureConfig](api_fixture.FixtureInstance.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](api_fixture.FixtureInstance.md#getlayerfixtureconfigs)
- [handlePanelWidths](api_fixture.FixtureInstance.md#handlepanelwidths)
- [initialized](api_fixture.FixtureInstance.md#initialized)
- [mount](api_fixture.FixtureInstance.md#mount)
- [remove](api_fixture.FixtureInstance.md#remove)
- [removed](api_fixture.FixtureInstance.md#removed)
- [terminated](api_fixture.FixtureInstance.md#terminated)
- [updateBaseToInstance](api_fixture.FixtureInstance.md#updatebasetoinstance)

## Constructors

### constructor

• **new FixtureInstance**(`id`, `iApi`)

Creates an instance of FixtureInstance.

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/fixture.ts:291](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L291)

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

### id

• `Readonly` **id**: `string`

ID of this fixture.

**`Memberof`**

FixtureInstance

#### Implementation of

FixtureBase.id

#### Defined in

[src/api/fixture.ts:282](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L282)

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

___

### config

• `get` **config**(): `any`

Returns the fixture config section (JSON) taken from the global config.

**`Memberof`**

FixtureInstance

#### Returns

`any`

#### Defined in

[src/api/fixture.ts:383](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L383)

## Methods

### added

▸ `Optional` **added**(): `void`

#### Returns

`void`

#### Implementation of

FixtureBase.added

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

#### Defined in

[src/api/fixture.ts:395](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L395)

___

### getLayerFixtureConfigs

▸ **getLayerFixtureConfigs**(): `Object`

Combines this fixtures configs from layer configs into an indexed-dictionary

#### Returns

`Object`

Dictionary where key is the layer id and the value is this fixture's config for that layer

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

#### Defined in

[src/api/fixture.ts:438](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L438)

___

### initialized

▸ `Optional` **initialized**(): `void`

#### Returns

`void`

#### Implementation of

FixtureBase.initialized

#### Defined in

[src/api/fixture.ts:373](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L373)

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

#### Defined in

[src/api/fixture.ts:349](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L349)

___

### remove

▸ **remove**(): [`FixtureInstance`](api_fixture.FixtureInstance.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`FixtureInstance`](api_fixture.FixtureInstance.md)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removed

▸ `Optional` **removed**(): `void`

#### Returns

`void`

#### Implementation of

FixtureBase.removed

#### Defined in

[src/api/fixture.ts:372](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L372)

___

### terminated

▸ `Optional` **terminated**(): `void`

#### Returns

`void`

#### Implementation of

FixtureBase.terminated

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

#### Defined in

[src/api/fixture.ts:248](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L248)
