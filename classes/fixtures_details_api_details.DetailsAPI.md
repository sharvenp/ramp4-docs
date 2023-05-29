[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/details/api/details](../modules/fixtures_details_api_details.md) / DetailsAPI

# Class: DetailsAPI

[fixtures/details/api/details](../modules/fixtures_details_api_details.md).DetailsAPI

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`DetailsAPI`**

## Table of contents

### Constructors

- [constructor](fixtures_details_api_details.DetailsAPI.md#constructor)

### Properties

- [$iApi](fixtures_details_api_details.DetailsAPI.md#$iapi)
- [detailsStore](fixtures_details_api_details.DetailsAPI.md#detailsstore)
- [id](fixtures_details_api_details.DetailsAPI.md#id)

### Accessors

- [$element](fixtures_details_api_details.DetailsAPI.md#$element)
- [$vApp](fixtures_details_api_details.DetailsAPI.md#$vapp)
- [config](fixtures_details_api_details.DetailsAPI.md#config)

### Methods

- [\_parseConfig](fixtures_details_api_details.DetailsAPI.md#_parseconfig)
- [\_validateItems](fixtures_details_api_details.DetailsAPI.md#_validateitems)
- [added](fixtures_details_api_details.DetailsAPI.md#added)
- [extend](fixtures_details_api_details.DetailsAPI.md#extend)
- [getHilightGraphics](fixtures_details_api_details.DetailsAPI.md#gethilightgraphics)
- [getLayerFixtureConfig](fixtures_details_api_details.DetailsAPI.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_details_api_details.DetailsAPI.md#getlayerfixtureconfigs)
- [handlePanelWidths](fixtures_details_api_details.DetailsAPI.md#handlepanelwidths)
- [hasHilighter](fixtures_details_api_details.DetailsAPI.md#hashilighter)
- [hilightDetailsItems](fixtures_details_api_details.DetailsAPI.md#hilightdetailsitems)
- [initialized](fixtures_details_api_details.DetailsAPI.md#initialized)
- [mount](fixtures_details_api_details.DetailsAPI.md#mount)
- [onHilightToggle](fixtures_details_api_details.DetailsAPI.md#onhilighttoggle)
- [openDetails](fixtures_details_api_details.DetailsAPI.md#opendetails)
- [reloadDetailsHilight](fixtures_details_api_details.DetailsAPI.md#reloaddetailshilight)
- [remove](fixtures_details_api_details.DetailsAPI.md#remove)
- [removeDetailsHilight](fixtures_details_api_details.DetailsAPI.md#removedetailshilight)
- [removed](fixtures_details_api_details.DetailsAPI.md#removed)
- [terminated](fixtures_details_api_details.DetailsAPI.md#terminated)
- [toggleFeature](fixtures_details_api_details.DetailsAPI.md#togglefeature)
- [updateBaseToInstance](fixtures_details_api_details.DetailsAPI.md#updatebasetoinstance)

## Constructors

### constructor

• **new DetailsAPI**(`id`, `iApi`)

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

### detailsStore

• `Private` **detailsStore**: `Store`<``"details"``, `_UnwrapAll`<`Pick`<{}, ``"payload"`` \| ``"properties"`` \| ``"defaultTemplates"`` \| ``"currentFeatureId"`` \| ``"slowLoadingFlag"`` \| ``"activeGreedy"`` \| ``"lastHilight"`` \| ``"hilightToggle"``\>\>, `Pick`<{}, `never`\>, `Pick`<{}, ``"removeLayer"``\>\>

#### Defined in

[src/fixtures/details/api/details.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L17)

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

• `get` **config**(): `undefined` \| `DetailsConfig`

Returns the fixture config section (JSON) taken from the global config.

**`Memberof`**

FixtureInstance

#### Returns

`undefined` \| `DetailsConfig`

#### Overrides

FixtureInstance.config

#### Defined in

[src/fixtures/details/api/details.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L19)

## Methods

### \_parseConfig

▸ **_parseConfig**(`config?`): `void`

Read the details section of the layers' fixture config

**`Memberof`**

DetailsAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `DetailsConfig` |

#### Returns

`void`

#### Defined in

[src/fixtures/details/api/details.ts:113](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L113)

___

### \_validateItems

▸ **_validateItems**(): `void`

Check to see if the stored components are registered properly.

**`Memberof`**

DetailsAPI

#### Returns

`void`

#### Defined in

[src/fixtures/details/api/details.ts:155](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L155)

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

### getHilightGraphics

▸ **getHilightGraphics**(`items`, `layerUid`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

Return the graphics of the given IdentifyItems.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md)[] | items to hilight |
| `layerUid` | `string` | uid of layer the items belong to |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

#### Defined in

[src/fixtures/details/api/details.ts:245](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L245)

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

### hasHilighter

▸ **hasHilighter**(): `boolean`

Return whether or not a HilightMode has been defined (other than NONE)

#### Returns

`boolean`

#### Defined in

[src/fixtures/details/api/details.ts:303](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L303)

___

### hilightDetailsItems

▸ **hilightDetailsItems**(`items`, `layerUid`): `Promise`<`void`\>

Highlight identified items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md) \| [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md)[] | items to add |
| `layerUid` | `string` | uid of layer the items belong to |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/details/api/details.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L169)

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

### onHilightToggle

▸ **onHilightToggle**(`hilightOn`, `items`, `layerUid`): `void`

Updates hilighted graphics when the hilight toggler is toggled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hilightOn` | `boolean` | Whether the toggler has been turned on/off |
| `items` | [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md) \| [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md)[] | The items that are affected by the toggle |
| `layerUid` | `string` | the layer UID |

#### Returns

`void`

#### Defined in

[src/fixtures/details/api/details.ts:284](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L284)

___

### openDetails

▸ **openDetails**(`payload`): `void`

Updates the identify result in the store, and then opens the details panel.

**`Memberof`**

DetailsAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IdentifyResult`](../interfaces/geo_api_geo_defs.IdentifyResult.md)[] |

#### Returns

`void`

#### Defined in

[src/fixtures/details/api/details.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L29)

___

### reloadDetailsHilight

▸ **reloadDetailsHilight**(`items`, `layerUid`): `Promise`<`void`\>

Reload map elements of the hilighter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md) \| [`IdentifyItem`](../interfaces/geo_api_geo_defs.IdentifyItem.md)[] | items to reload |
| `layerUid` | `string` | uid of layer the items belong to |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/details/api/details.ts:224](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L224)

___

### remove

▸ **remove**(): [`DetailsAPI`](fixtures_details_api_details.DetailsAPI.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`DetailsAPI`](fixtures_details_api_details.DetailsAPI.md)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[remove](api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removeDetailsHilight

▸ **removeDetailsHilight**(): `Promise`<`void`\>

Remove all details panel map hilights.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fixtures/details/api/details.ts:208](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L208)

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

### toggleFeature

▸ **toggleFeature**(`featureData`, `open`): `void`

Provided with the data for a single feature, toggles the details panel directly with the feature screen.

**`Memberof`**

DetailsAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `featureData` | `Object` |
| `featureData.data` | `any` |
| `featureData.format` | `string` |
| `featureData.uid` | `string` |
| `open` | `undefined` \| `boolean` |

#### Returns

`void`

#### Defined in

[src/fixtures/details/api/details.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/details/api/details.ts#L49)

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
