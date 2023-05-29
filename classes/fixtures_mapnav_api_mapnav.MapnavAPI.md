[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/mapnav/api/mapnav](../modules/fixtures_mapnav_api_mapnav.md) / MapnavAPI

# Class: MapnavAPI

[fixtures/mapnav/api/mapnav](../modules/fixtures_mapnav_api_mapnav.md).MapnavAPI

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`MapnavAPI`**

## Table of contents

### Constructors

- [constructor](fixtures_mapnav_api_mapnav.MapnavAPI.md#constructor)

### Properties

- [$iApi](fixtures_mapnav_api_mapnav.MapnavAPI.md#$iapi)
- [id](fixtures_mapnav_api_mapnav.MapnavAPI.md#id)
- [mapnavStore](fixtures_mapnav_api_mapnav.MapnavAPI.md#mapnavstore)

### Accessors

- [$element](fixtures_mapnav_api_mapnav.MapnavAPI.md#$element)
- [$vApp](fixtures_mapnav_api_mapnav.MapnavAPI.md#$vapp)
- [config](fixtures_mapnav_api_mapnav.MapnavAPI.md#config)

### Methods

- [\_parseConfig](fixtures_mapnav_api_mapnav.MapnavAPI.md#_parseconfig)
- [\_validateItems](fixtures_mapnav_api_mapnav.MapnavAPI.md#_validateitems)
- [added](fixtures_mapnav_api_mapnav.MapnavAPI.md#added)
- [extend](fixtures_mapnav_api_mapnav.MapnavAPI.md#extend)
- [getLayerFixtureConfig](fixtures_mapnav_api_mapnav.MapnavAPI.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_mapnav_api_mapnav.MapnavAPI.md#getlayerfixtureconfigs)
- [handlePanelWidths](fixtures_mapnav_api_mapnav.MapnavAPI.md#handlepanelwidths)
- [initialized](fixtures_mapnav_api_mapnav.MapnavAPI.md#initialized)
- [mount](fixtures_mapnav_api_mapnav.MapnavAPI.md#mount)
- [remove](fixtures_mapnav_api_mapnav.MapnavAPI.md#remove)
- [removed](fixtures_mapnav_api_mapnav.MapnavAPI.md#removed)
- [terminated](fixtures_mapnav_api_mapnav.MapnavAPI.md#terminated)
- [updateBaseToInstance](fixtures_mapnav_api_mapnav.MapnavAPI.md#updatebasetoinstance)

## Constructors

### constructor

• **new MapnavAPI**(`id`, `iApi`)

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

### mapnavStore

• `Private` **mapnavStore**: `Store`<``"mapnav"``, `_UnwrapAll`<`Pick`<{}, ``"items"`` \| ``"order"``\>\>, `Pick`<{}, `never`\>, `Pick`<{}, ``"removeItem"``\>\>

#### Defined in

[src/fixtures/mapnav/api/mapnav.ts:7](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/mapnav/api/mapnav.ts#L7)

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

• `get` **config**(): `undefined` \| `MapnavFixtureConfig`

Returns `MapnavFixtureConfig` section of the global config file.

**`Memberof`**

MapnavFixture

#### Returns

`undefined` \| `MapnavFixtureConfig`

#### Overrides

FixtureInstance.config

#### Defined in

[src/fixtures/mapnav/api/mapnav.ts:15](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/mapnav/api/mapnav.ts#L15)

## Methods

### \_parseConfig

▸ **_parseConfig**(`mapnavConfig?`): `void`

Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.

**`Memberof`**

MapnavAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapnavConfig?` | `MapnavFixtureConfig` |

#### Returns

`void`

#### Defined in

[src/fixtures/mapnav/api/mapnav.ts:26](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/mapnav/api/mapnav.ts#L26)

___

### \_validateItems

▸ **_validateItems**(): `void`

Checks if components specified as mapnav items are registered or not.
Will check the literal id values, and id values with `-nav-button` suffixes appended.

**`Memberof`**

MapnavAPI

#### Returns

`void`

#### Defined in

[src/fixtures/mapnav/api/mapnav.ts:59](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/mapnav/api/mapnav.ts#L59)

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

### remove

▸ **remove**(): [`MapnavAPI`](fixtures_mapnav_api_mapnav.MapnavAPI.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`MapnavAPI`](fixtures_mapnav_api_mapnav.MapnavAPI.md)

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
