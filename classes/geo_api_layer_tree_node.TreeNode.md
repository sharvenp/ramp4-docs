[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/layer/tree-node](../modules/geo_api_layer_tree_node.md) / TreeNode

# Class: TreeNode

[geo/api/layer/tree-node](../modules/geo_api_layer_tree_node.md).TreeNode

## Table of contents

### Constructors

- [constructor](geo_api_layer_tree_node.TreeNode.md#constructor)

### Properties

- [children](geo_api_layer_tree_node.TreeNode.md#children)
- [isRoot](geo_api_layer_tree_node.TreeNode.md#isroot)
- [layerIdx](geo_api_layer_tree_node.TreeNode.md#layeridx)
- [name](geo_api_layer_tree_node.TreeNode.md#name)
- [uid](geo_api_layer_tree_node.TreeNode.md#uid)

### Accessors

- [isLayerRoot](geo_api_layer_tree_node.TreeNode.md#islayerroot)
- [isLogicalLayer](geo_api_layer_tree_node.TreeNode.md#islogicallayer)

### Methods

- [findChildByIdx](geo_api_layer_tree_node.TreeNode.md#findchildbyidx)
- [findChildByUid](geo_api_layer_tree_node.TreeNode.md#findchildbyuid)

## Constructors

### constructor

• **new TreeNode**(`idx`, `uid`, `name?`, `root?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `idx` | `number` | `undefined` |
| `uid` | `string` | `undefined` |
| `name` | `string` | `''` |
| `root` | `boolean` | `true` |

#### Defined in

[src/geo/api/layer/tree-node.ts:9](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L9)

## Properties

### children

• **children**: [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)[]

#### Defined in

[src/geo/api/layer/tree-node.ts:4](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L4)

___

### isRoot

• `Private` **isRoot**: `boolean`

#### Defined in

[src/geo/api/layer/tree-node.ts:7](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L7)

___

### layerIdx

• **layerIdx**: `number`

#### Defined in

[src/geo/api/layer/tree-node.ts:2](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L2)

___

### name

• **name**: `string`

#### Defined in

[src/geo/api/layer/tree-node.ts:3](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L3)

___

### uid

• **uid**: `string`

#### Defined in

[src/geo/api/layer/tree-node.ts:5](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L5)

## Accessors

### isLayerRoot

• `get` **isLayerRoot**(): `boolean`

Returns whether this node is a root node.

**`Method`**

isLayerRoot

#### Returns

`boolean`

true if this node is a root node for this layer.

#### Defined in

[src/geo/api/layer/tree-node.ts:69](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L69)

___

### isLogicalLayer

• `get` **isLogicalLayer**(): `boolean`

Returns whether this node is bound to a logical layer.

**`Method`**

isLogicalLayer

#### Returns

`boolean`

true if the layer is bound to a logical layer.

#### Defined in

[src/geo/api/layer/tree-node.ts:59](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L59)

## Methods

### findChildByIdx

▸ **findChildByIdx**(`idx`): `undefined` \| [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`undefined` \| [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Defined in

[src/geo/api/layer/tree-node.ts:37](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L37)

___

### findChildByUid

▸ **findChildByUid**(`uid`): `undefined` \| [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`undefined` \| [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Defined in

[src/geo/api/layer/tree-node.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/layer/tree-node.ts#L19)
