[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [fixtures/legend/api/legend](../modules/fixtures_legend_api_legend.md) / LegendAPI

# Class: LegendAPI

[fixtures/legend/api/legend](../modules/fixtures_legend_api_legend.md).LegendAPI

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`Export`**

**`Implements`**

## Hierarchy

- [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ **`LegendAPI`**

## Table of contents

### Constructors

- [constructor](fixtures_legend_api_legend.LegendAPI.md#constructor)

### Properties

- [$iApi](fixtures_legend_api_legend.LegendAPI.md#$iapi)
- [id](fixtures_legend_api_legend.LegendAPI.md#id)

### Accessors

- [$element](fixtures_legend_api_legend.LegendAPI.md#$element)
- [$vApp](fixtures_legend_api_legend.LegendAPI.md#$vapp)
- [config](fixtures_legend_api_legend.LegendAPI.md#config)

### Methods

- [\_deleteItem](fixtures_legend_api_legend.LegendAPI.md#_deleteitem)
- [\_insertItem](fixtures_legend_api_legend.LegendAPI.md#_insertitem)
- [\_parseConfig](fixtures_legend_api_legend.LegendAPI.md#_parseconfig)
- [\_replaceItem](fixtures_legend_api_legend.LegendAPI.md#_replaceitem)
- [\_searchTree](fixtures_legend_api_legend.LegendAPI.md#_searchtree)
- [\_searchTreeAll](fixtures_legend_api_legend.LegendAPI.md#_searchtreeall)
- [\_toggleState](fixtures_legend_api_legend.LegendAPI.md#_togglestate)
- [\_treeWalker](fixtures_legend_api_legend.LegendAPI.md#_treewalker)
- [addItem](fixtures_legend_api_legend.LegendAPI.md#additem)
- [addLayerItem](fixtures_legend_api_legend.LegendAPI.md#addlayeritem)
- [added](fixtures_legend_api_legend.LegendAPI.md#added)
- [createItem](fixtures_legend_api_legend.LegendAPI.md#createitem)
- [expandItems](fixtures_legend_api_legend.LegendAPI.md#expanditems)
- [extend](fixtures_legend_api_legend.LegendAPI.md#extend)
- [getAllExpanded](fixtures_legend_api_legend.LegendAPI.md#getallexpanded)
- [getAllVisible](fixtures_legend_api_legend.LegendAPI.md#getallvisible)
- [getItem](fixtures_legend_api_legend.LegendAPI.md#getitem)
- [getLayerFixtureConfig](fixtures_legend_api_legend.LegendAPI.md#getlayerfixtureconfig)
- [getLayerFixtureConfigs](fixtures_legend_api_legend.LegendAPI.md#getlayerfixtureconfigs)
- [getLayerItem](fixtures_legend_api_legend.LegendAPI.md#getlayeritem)
- [getLegend](fixtures_legend_api_legend.LegendAPI.md#getlegend)
- [getLegendConfig](fixtures_legend_api_legend.LegendAPI.md#getlegendconfig)
- [handlePanelWidths](fixtures_legend_api_legend.LegendAPI.md#handlepanelwidths)
- [initialized](fixtures_legend_api_legend.LegendAPI.md#initialized)
- [mount](fixtures_legend_api_legend.LegendAPI.md#mount)
- [reloadLayerItem](fixtures_legend_api_legend.LegendAPI.md#reloadlayeritem)
- [remove](fixtures_legend_api_legend.LegendAPI.md#remove)
- [removeItem](fixtures_legend_api_legend.LegendAPI.md#removeitem)
- [removeLayerItem](fixtures_legend_api_legend.LegendAPI.md#removelayeritem)
- [removed](fixtures_legend_api_legend.LegendAPI.md#removed)
- [showItems](fixtures_legend_api_legend.LegendAPI.md#showitems)
- [terminated](fixtures_legend_api_legend.LegendAPI.md#terminated)
- [updateLegend](fixtures_legend_api_legend.LegendAPI.md#updatelegend)
- [updateBaseToInstance](fixtures_legend_api_legend.LegendAPI.md#updatebasetoinstance)

## Constructors

### constructor

• **new LegendAPI**(`id`, `iApi`)

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

• `get` **config**(): `undefined` \| `LegendConfig`

Returns `LegendConfig` section of the global config file.

**`Memberof`**

LegendAPI

#### Returns

`undefined` \| `LegendConfig`

#### Overrides

FixtureInstance.config

#### Defined in

[src/fixtures/legend/api/legend.ts:173](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L173)

## Methods

### \_deleteItem

▸ `Private` **_deleteItem**(`item`): `boolean`

Deletes the given legend item from the legend store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `LegendItem` | the legend item to be deleted |

#### Returns

`boolean`

returns true if item was removed, false otherwise

#### Defined in

[src/fixtures/legend/api/legend.ts:629](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L629)

___

### \_insertItem

▸ `Private` **_insertItem**(`item`, `parent?`): `void`

Add the given legend item to the legend store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `LegendItem` | the legend item to be added |
| `parent?` | `LegendItem` | the parent legend item for this item |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:619](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L619)

___

### \_parseConfig

▸ **_parseConfig**(`legendConfig?`): `void`

Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `legendConfig?` | `LegendConfig` |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L14)

___

### \_replaceItem

▸ `Private` **_replaceItem**(`oldItem`, `newItem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldItem` | `LegendItem` |
| `newItem` | `LegendItem` |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:648](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L648)

___

### \_searchTree

▸ `Private` **_searchTree**(`root`, `predicate`): `undefined` \| `LegendItem`

Search for first legend item that satisfies the predicate, starting from the given root item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `LegendItem` | the root item to start searching from |
| `predicate` | (`item`: `LegendItem`) => `boolean` | boolean predicate to test each item |

#### Returns

`undefined` \| `LegendItem`

return the first item that satisfies the given predicate. returns undefined if item is not found.

#### Defined in

[src/fixtures/legend/api/legend.ts:539](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L539)

___

### \_searchTreeAll

▸ `Private` **_searchTreeAll**(`root`, `predicate`): `LegendItem`[]

Search for all legend items that satisfy the predicate, starting from the given root item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `LegendItem` | the root item to start searching from |
| `predicate` | (`item`: `LegendItem`) => `boolean` | predicate boolean predicate to test each item |

#### Returns

`LegendItem`[]

return the first item that satisfies the given predicate. returns undefined if item is not found.

#### Defined in

[src/fixtures/legend/api/legend.ts:562](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L562)

___

### \_toggleState

▸ `Private` **_toggleState**(`item`, `options`): `void`

Toggles visibility for all items or expands/collapses all groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `LegendItem` | current legend item that is being checked |
| `options` | `any` | specifies whether visibility or expand/collapse functionality is to be changed |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:589](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L589)

___

### \_treeWalker

▸ `Private` **_treeWalker**(`layer`, `node`, `extraConfig?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) |
| `node` | [`TreeNode`](geo_api_layer_tree_node.TreeNode.md) |
| `extraConfig?` | `object` |

#### Returns

`any`

#### Defined in

[src/fixtures/legend/api/legend.ts:653](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L653)

___

### addItem

▸ **addItem**(`item`, `parent?`): `LegendItem`

Add a legend item given the legend config, or legend item instance

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | the config for the legend item or a legend item instance |
| `parent?` | `LegendItem` | optional parent item to create this item under |

#### Returns

`LegendItem`

the added legend item

#### Defined in

[src/fixtures/legend/api/legend.ts:109](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L109)

___

### addLayerItem

▸ **addLayerItem**(`layer`, `parent?`): `Promise`<`LayerItem`\>

Add a layer legend item given a layer instance

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the layer to create an item for |
| `parent?` | `LegendItem` | optional parent item to create this item under |

#### Returns

`Promise`<`LayerItem`\>

a promise that resolves with the added layer item

#### Defined in

[src/fixtures/legend/api/legend.ts:125](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L125)

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

### createItem

▸ **createItem**(`itemConf`, `parent?`): `LegendItem`

Construct a legend item given the legend config

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemConf` | `any` | legend item config |
| `parent?` | `LegendItem` | the parent legend item for the created item |

#### Returns

`LegendItem`

returns the constructed legend item

#### Defined in

[src/fixtures/legend/api/legend.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L60)

___

### expandItems

▸ **expandItems**(`expanded`, `root?`): `void`

Set the expanded state of legend items to `expanded`

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expanded` | `boolean` | the expanded state the items will be set to |
| `root?` | `LegendItem` | the root item to start updating the expanded state from |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:440](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L440)

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

### getAllExpanded

▸ **getAllExpanded**(`expanded?`): `LegendItem`[]

Get all legend items with the given expanded state.
Not specifying the expanded state will return all items with expanded set to `true`

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expanded?` | `boolean` | the expanded state to check for |

#### Returns

`LegendItem`[]

the items with the given expanded state

#### Defined in

[src/fixtures/legend/api/legend.ts:277](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L277)

___

### getAllVisible

▸ **getAllVisible**(`visibility?`): `LegendItem`[]

Get all legend items with the given visibility state.
Not specifying the visibility state will return all items with visibility set to `true`

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visibility?` | `boolean` | the visibility state to check for |

#### Returns

`LegendItem`[]

the items with the given expanded state

#### Defined in

[src/fixtures/legend/api/legend.ts:303](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L303)

___

### getItem

▸ **getItem**(`uid`): `undefined` \| `LegendItem`

Get a legend item given its uid.

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `string` | the uid of the legend item |

#### Returns

`undefined` \| `LegendItem`

return legend item with given uid. returns undefined if item is not found.

#### Defined in

[src/fixtures/legend/api/legend.ts:215](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L215)

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

### getLayerItem

▸ **getLayerItem**(`layer`): `undefined` \| `LayerItem`

Get a layer item connected to the layer with the given id/uid or the given layer instance.

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `string` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the id/uid of the layer or layer instance |

#### Returns

`undefined` \| `LayerItem`

return layer item tied to the found layer. returns undefined if no such item is found.

#### Defined in

[src/fixtures/legend/api/legend.ts:237](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L237)

___

### getLegend

▸ **getLegend**(): `LegendItem`[]

Returns the full legend tree.
Note: This returns a direct reference to the legend tree. Mutations will persist.

**`Memberof`**

LegendAPI

#### Returns

`LegendItem`[]

returns the full legend tree

#### Defined in

[src/fixtures/legend/api/legend.ts:184](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L184)

___

### getLegendConfig

▸ **getLegendConfig**(): `any`

Maps the current legend tree into a legend config snippet.

In addition to legend config schema properties, this snippet will also include
properties such as the item type, item's uid, layer uid etc.

**`Memberof`**

LegendAPI

#### Returns

`any`

returns the legend config

#### Defined in

[src/fixtures/legend/api/legend.ts:200](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L200)

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

### reloadLayerItem

▸ **reloadLayerItem**(`layerId`): `boolean`

Reload the legend item connected to the layer with the given layer id/uid

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | the id or uid of the reloaded layer |

#### Returns

`boolean`

returns true if item was successfully reloaded, false otherwise

#### Defined in

[src/fixtures/legend/api/legend.ts:476](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L476)

___

### remove

▸ **remove**(): [`LegendAPI`](fixtures_legend_api_legend.LegendAPI.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `rInstance.fixture.remove(...)`.

**`Memberof`**

FixtureInstance

#### Returns

[`LegendAPI`](fixtures_legend_api_legend.LegendAPI.md)

#### Inherited from

[FixtureInstance](api_fixture.FixtureInstance.md).[remove](api_fixture.FixtureInstance.md#remove)

#### Defined in

[src/api/fixture.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L304)

___

### removeItem

▸ **removeItem**(`item`): `boolean`

Removes the legend item with the given uid, or the item instance.

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `string` \| `LegendItem` | the uid of item or legend item instance to be removed |

#### Returns

`boolean`

returns true if item was removed, false otherwise

#### Defined in

[src/fixtures/legend/api/legend.ts:502](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L502)

___

### removeLayerItem

▸ **removeLayerItem**(`layer`): `boolean`

Remove the layer item connected to the layer with the given id/uid or the given layer instance.

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `string` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the id/uid of the layer or layer instance |

#### Returns

`boolean`

returns true if item was removed, false otherwise

#### Defined in

[src/fixtures/legend/api/legend.ts:520](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L520)

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

### showItems

▸ **showItems**(`visibility`, `root?`): `void`

Set the visibility state of legend items to `visibility`

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visibility` | `boolean` | the visibility state the items will be set to |
| `root?` | `LegendItem` | the root item to start updating the visibility state from |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:458](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L458)

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

### updateLegend

▸ **updateLegend**(`layer`): `void`

Update an existing layer item with data from the given layer
Does nothing if the layer item is not found

**`Memberof`**

LegendAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the layer to update the layer item with |

#### Returns

`void`

#### Defined in

[src/fixtures/legend/api/legend.ts:328](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/fixtures/legend/api/legend.ts#L328)

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
