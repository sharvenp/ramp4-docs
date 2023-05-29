[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/layer](../modules/geo_layer_layer.md) / LayerAPI

# Class: LayerAPI

[geo/layer/layer](../modules/geo_layer_layer.md).LayerAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`LayerAPI`**

## Table of contents

### Constructors

- [constructor](geo_layer_layer.LayerAPI.md#constructor)

### Properties

- [$iApi](geo_layer_layer.LayerAPI.md#$iapi)
- [files](geo_layer_layer.LayerAPI.md#files)
- [ogc](geo_layer_layer.LayerAPI.md#ogc)

### Accessors

- [$element](geo_layer_layer.LayerAPI.md#$element)
- [$vApp](geo_layer_layer.LayerAPI.md#$vapp)

### Methods

- [allErrorLayers](geo_layer_layer.LayerAPI.md#allerrorlayers)
- [allLayers](geo_layer_layer.LayerAPI.md#alllayers)
- [createLayer](geo_layer_layer.LayerAPI.md#createlayer)
- [getLayer](geo_layer_layer.LayerAPI.md#getlayer)
- [getLayerControls](geo_layer_layer.LayerAPI.md#getlayercontrols)

## Constructors

### constructor

• **new LayerAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/layer/layer.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L28)

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

### files

• **files**: [`FileUtils`](geo_layer_file_utils.FileUtils.md)

#### Defined in

[src/geo/layer/layer.ts:25](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L25)

___

### ogc

• **ogc**: [`OgcUtils`](geo_layer_ogc_utils.OgcUtils.md)

#### Defined in

[src/geo/layer/layer.ts:26](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L26)

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

### allErrorLayers

▸ **allErrorLayers**(): [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

Return all error layers.

#### Returns

[`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

all error layers

#### Defined in

[src/geo/layer/layer.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L121)

___

### allLayers

▸ **allLayers**(): [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

Return all registered layers.

#### Returns

[`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

all registered layers

#### Defined in

[src/geo/layer/layer.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L110)

___

### createLayer

▸ **createLayer**(`config`): [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Will generate a RAMP Layer based on the supplied config object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md) | a valid layer configuration object |

#### Returns

[`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Layer in uninitialized load state

#### Defined in

[src/geo/layer/layer.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L40)

___

### getLayer

▸ **getLayer**(`layerId`): `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Access an instantiated layer object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | layer id or uid of the layer |

#### Returns

`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

The layer instance with the given id. Returns undefined is layer is not found.

#### Defined in

[src/geo/layer/layer.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L88)

___

### getLayerControls

▸ **getLayerControls**(`layerId`): `undefined` \| { `controls`: [`LayerControl`](../enums/geo_api_geo_defs.LayerControl.md)[] ; `disabledControls`: [`LayerControl`](../enums/geo_api_geo_defs.LayerControl.md)[]  }

Get controls and disabled controls configuration of the layer with the given id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | layer id or uid of the layer |

#### Returns

`undefined` \| { `controls`: [`LayerControl`](../enums/geo_api_geo_defs.LayerControl.md)[] ; `disabledControls`: [`LayerControl`](../enums/geo_api_geo_defs.LayerControl.md)[]  }

The layer's controls and disabled controls configuration. Returns undefined if layer is not found.

#### Defined in

[src/geo/layer/layer.ts:134](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer.ts#L134)
