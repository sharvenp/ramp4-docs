[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/layer-instance](../modules/geo_layer_layer_instance.md) / LayerInstance

# Class: LayerInstance

[geo/layer/layer-instance](../modules/geo_layer_layer_instance.md).LayerInstance

A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
Mostly it exposes stub methods on LayerBase; this is because layer subclasses can be wildly different, so we don't
have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
implemented something. The stubs also allow us to get intellisense / typescript happiness when dealing with common
layer variables typed as LayerInstance.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`LayerInstance`**

  ↳↳ [`CommonLayer`](geo_layer_common_layer.CommonLayer.md)

## Table of contents

### Constructors

- [constructor](geo_layer_layer_instance.LayerInstance.md#constructor)

### Properties

- [$iApi](geo_layer_layer_instance.LayerInstance.md#$iapi)
- [\_parentLayer](geo_layer_layer_instance.LayerInstance.md#_parentlayer)
- [\_sublayers](geo_layer_layer_instance.LayerInstance.md#_sublayers)
- [config](geo_layer_layer_instance.LayerInstance.md#config)
- [dataFormat](geo_layer_layer_instance.LayerInstance.md#dataformat)
- [drawState](geo_layer_layer_instance.LayerInstance.md#drawstate)
- [esriLayer](geo_layer_layer_instance.LayerInstance.md#esrilayer)
- [esriSubLayer](geo_layer_layer_instance.LayerInstance.md#esrisublayer)
- [esriView](geo_layer_layer_instance.LayerInstance.md#esriview)
- [expectedTime](geo_layer_layer_instance.LayerInstance.md#expectedtime)
- [extent](geo_layer_layer_instance.LayerInstance.md#extent)
- [featureCount](geo_layer_layer_instance.LayerInstance.md#featurecount)
- [fields](geo_layer_layer_instance.LayerInstance.md#fields)
- [geomType](geo_layer_layer_instance.LayerInstance.md#geomtype)
- [hovertips](geo_layer_layer_instance.LayerInstance.md#hovertips)
- [id](geo_layer_layer_instance.LayerInstance.md#id)
- [identify](geo_layer_layer_instance.LayerInstance.md#identify)
- [identifyMode](geo_layer_layer_instance.LayerInstance.md#identifymode)
- [initiationState](geo_layer_layer_instance.LayerInstance.md#initiationstate)
- [isCosmetic](geo_layer_layer_instance.LayerInstance.md#iscosmetic)
- [isFile](geo_layer_layer_instance.LayerInstance.md#isfile)
- [isRemoved](geo_layer_layer_instance.LayerInstance.md#isremoved)
- [isSublayer](geo_layer_layer_instance.LayerInstance.md#issublayer)
- [layerFormat](geo_layer_layer_instance.LayerInstance.md#layerformat)
- [layerIdx](geo_layer_layer_instance.LayerInstance.md#layeridx)
- [layerState](geo_layer_layer_instance.LayerInstance.md#layerstate)
- [layerType](geo_layer_layer_instance.LayerInstance.md#layertype)
- [legend](geo_layer_layer_instance.LayerInstance.md#legend)
- [maxLoadTime](geo_layer_layer_instance.LayerInstance.md#maxloadtime)
- [name](geo_layer_layer_instance.LayerInstance.md#name)
- [nameField](geo_layer_layer_instance.LayerInstance.md#namefield)
- [oidField](geo_layer_layer_instance.LayerInstance.md#oidfield)
- [supportsFeatures](geo_layer_layer_instance.LayerInstance.md#supportsfeatures)
- [supportsIdentify](geo_layer_layer_instance.LayerInstance.md#supportsidentify)
- [supportsSublayers](geo_layer_layer_instance.LayerInstance.md#supportssublayers)
- [uid](geo_layer_layer_instance.LayerInstance.md#uid)
- [userAdded](geo_layer_layer_instance.LayerInstance.md#useradded)

### Accessors

- [$element](geo_layer_layer_instance.LayerInstance.md#$element)
- [$vApp](geo_layer_layer_instance.LayerInstance.md#$vapp)
- [drawOrder](geo_layer_layer_instance.LayerInstance.md#draworder)
- [isLoaded](geo_layer_layer_instance.LayerInstance.md#isloaded)
- [layerExists](geo_layer_layer_instance.LayerInstance.md#layerexists)
- [mouseTolerance](geo_layer_layer_instance.LayerInstance.md#mousetolerance)
- [opacity](geo_layer_layer_instance.LayerInstance.md#opacity)
- [parentLayer](geo_layer_layer_instance.LayerInstance.md#parentlayer)
- [scaleSet](geo_layer_layer_instance.LayerInstance.md#scaleset)
- [sublayers](geo_layer_layer_instance.LayerInstance.md#sublayers)
- [touchTolerance](geo_layer_layer_instance.LayerInstance.md#touchtolerance)
- [visibility](geo_layer_layer_instance.LayerInstance.md#visibility)

### Methods

- [abortAttributeLoad](geo_layer_layer_instance.LayerInstance.md#abortattributeload)
- [applySqlFilter](geo_layer_layer_instance.LayerInstance.md#applysqlfilter)
- [canIdentify](geo_layer_layer_instance.LayerInstance.md#canidentify)
- [clearFeatureCache](geo_layer_layer_instance.LayerInstance.md#clearfeaturecache)
- [controlAvailable](geo_layer_layer_instance.LayerInstance.md#controlavailable)
- [getAttributes](geo_layer_layer_instance.LayerInstance.md#getattributes)
- [getFilterOIDs](geo_layer_layer_instance.LayerInstance.md#getfilteroids)
- [getGraphic](geo_layer_layer_instance.LayerInstance.md#getgraphic)
- [getIcon](geo_layer_layer_instance.LayerInstance.md#geticon)
- [getLayerTree](geo_layer_layer_instance.LayerInstance.md#getlayertree)
- [getSqlFilter](geo_layer_layer_instance.LayerInstance.md#getsqlfilter)
- [getSublayer](geo_layer_layer_instance.LayerInstance.md#getsublayer)
- [getTabularAttributes](geo_layer_layer_instance.LayerInstance.md#gettabularattributes)
- [initiate](geo_layer_layer_instance.LayerInstance.md#initiate)
- [isOffscale](geo_layer_layer_instance.LayerInstance.md#isoffscale)
- [loadPromise](geo_layer_layer_instance.LayerInstance.md#loadpromise)
- [onError](geo_layer_layer_instance.LayerInstance.md#onerror)
- [onLoad](geo_layer_layer_instance.LayerInstance.md#onload)
- [reload](geo_layer_layer_instance.LayerInstance.md#reload)
- [runIdentify](geo_layer_layer_instance.LayerInstance.md#runidentify)
- [setSqlFilter](geo_layer_layer_instance.LayerInstance.md#setsqlfilter)
- [terminate](geo_layer_layer_instance.LayerInstance.md#terminate)
- [uidToIdx](geo_layer_layer_instance.LayerInstance.md#uidtoidx)
- [updateDrawState](geo_layer_layer_instance.LayerInstance.md#updatedrawstate)
- [updateInitiationState](geo_layer_layer_instance.LayerInstance.md#updateinitiationstate)
- [updateLayerState](geo_layer_layer_instance.LayerInstance.md#updatelayerstate)
- [zoomToLayerBoundary](geo_layer_layer_instance.LayerInstance.md#zoomtolayerboundary)
- [zoomToVisibleScale](geo_layer_layer_instance.LayerInstance.md#zoomtovisiblescale)

## Constructors

### constructor

• **new LayerInstance**(`config`, `iApi`)

Creates an instance of LayerInstance.

**`Memberof`**

FixtureInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/layer/layer-instance.ts:226](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L226)

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

### \_parentLayer

• `Protected` **\_parentLayer**: `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

#### Defined in

[src/geo/layer/layer-instance.ts:216](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L216)

___

### \_sublayers

• `Protected` **\_sublayers**: [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

#### Defined in

[src/geo/layer/layer-instance.ts:217](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L217)

___

### config

• **config**: `any` = `{}`

#### Defined in

[src/geo/layer/layer-instance.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L43)

___

### dataFormat

• **dataFormat**: [`DataFormat`](../enums/geo_api_geo_defs.DataFormat.md)

The type of spatial data used to generate layer content

#### Defined in

[src/geo/layer/layer-instance.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L96)

___

### drawState

• **drawState**: [`DrawState`](../enums/geo_api_geo_defs.DrawState.md)

State of drawing / refreshing data for a layer

#### Defined in

[src/geo/layer/layer-instance.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L76)

___

### esriLayer

• **esriLayer**: `undefined` \| `Layer`

The internal ESRI API layer

#### Defined in

[src/geo/layer/layer-instance.ts:199](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L199)

___

### esriSubLayer

• **esriSubLayer**: `undefined` \| [`EsriSublayer`](geo_esri.EsriSublayer.md)

The internal ESRI API sublayer. Valid only by sublayers

#### Defined in

[src/geo/layer/layer-instance.ts:204](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L204)

___

### esriView

• **esriView**: `undefined` \| `LayerView`

The internal ESRI API layer view

#### Defined in

[src/geo/layer/layer-instance.ts:209](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L209)

___

### expectedTime

• **expectedTime**: `Object`

Object that contains values for the expected draw/response time.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `draw` | `number` |
| `load` | `number` |

#### Defined in

[src/geo/layer/layer-instance.ts:131](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L131)

___

### extent

• **extent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

The extent of the layer on the map

#### Defined in

[src/geo/layer/layer-instance.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L214)

___

### featureCount

• **featureCount**: `number`

Feature count (-1 represents undefined / unknown)

#### Defined in

[src/geo/layer/layer-instance.ts:111](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L111)

___

### fields

• **fields**: [`FieldDefinition`](../interfaces/geo_api_geo_defs.FieldDefinition.md)[]

Array of field definitions about the given layer's fields. Non-feature layers will have empty arrays.

#### Defined in

[src/geo/layer/layer-instance.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L116)

___

### geomType

• **geomType**: [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

The geometry type of the layer.

#### Defined in

[src/geo/layer/layer-instance.ts:184](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L184)

___

### hovertips

• **hovertips**: `boolean`

If the layer should show hovertips on the map

#### Defined in

[src/geo/layer/layer-instance.ts:179](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L179)

___

### id

• **id**: `string`

ID of this layer. Also known as the layerId.

**`Memberof`**

LayerInstance

#### Defined in

[src/geo/layer/layer-instance.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L51)

___

### identify

• **identify**: `boolean`

If the layer is set to participate in identify requests

#### Defined in

[src/geo/layer/layer-instance.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L169)

___

### identifyMode

• **identifyMode**: [`LayerIdentifyMode`](../enums/geo_api_geo_defs.LayerIdentifyMode.md)

The type of logic used to identify items on the layer

#### Defined in

[src/geo/layer/layer-instance.ts:174](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L174)

___

### initiationState

• **initiationState**: [`InitiationState`](../enums/geo_api_geo_defs.InitiationState.md)

State of the initiation / termination process of the layer

#### Defined in

[src/geo/layer/layer-instance.ts:71](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L71)

___

### isCosmetic

• **isCosmetic**: `boolean`

If the layer is non-interactive and only displays content on the map

#### Defined in

[src/geo/layer/layer-instance.ts:159](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L159)

___

### isFile

• **isFile**: `boolean`

If the layer was sourced from a file or a WFS source (which disconnects after load).

#### Defined in

[src/geo/layer/layer-instance.ts:154](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L154)

___

### isRemoved

• **isRemoved**: `boolean`

Tracks if layer is removed from map. Is false during the period "before" the layer gets added to map.

#### Defined in

[src/geo/layer/layer-instance.ts:149](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L149)

___

### isSublayer

• **isSublayer**: `boolean`

If the layer is a Sublayer

#### Defined in

[src/geo/layer/layer-instance.ts:144](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L144)

___

### layerFormat

• **layerFormat**: [`LayerFormat`](../enums/geo_api_geo_defs.LayerFormat.md)

How the layer is instantiated in the map stack

#### Defined in

[src/geo/layer/layer-instance.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L91)

___

### layerIdx

• **layerIdx**: `number`

Index of the layer. Aligns to index of arcgis server, or defaults to 0 on other layers

#### Defined in

[src/geo/layer/layer-instance.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L81)

___

### layerState

• **layerState**: [`LayerState`](../enums/geo_api_geo_defs.LayerState.md)

State of the actual layer on the map, such as loading, loaded, error'd.

#### Defined in

[src/geo/layer/layer-instance.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L66)

___

### layerType

• **layerType**: [`LayerType`](../enums/geo_api_geo_defs.LayerType.md)

Type of layer this is (describes the overall layer)

#### Defined in

[src/geo/layer/layer-instance.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L86)

___

### legend

• **legend**: [`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]

Legend symbols of the layer

#### Defined in

[src/geo/layer/layer-instance.ts:189](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L189)

___

### maxLoadTime

• **maxLoadTime**: `number`

How long layer can load for before error (milliseconds)

#### Defined in

[src/geo/layer/layer-instance.ts:194](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L194)

___

### name

• **name**: `string`

The name of the layer.

#### Defined in

[src/geo/layer/layer-instance.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L61)

___

### nameField

• **nameField**: `string`

Field name that contains value considered the name of a feature. Not applicable for non-feature layers.

#### Defined in

[src/geo/layer/layer-instance.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L121)

___

### oidField

• **oidField**: `string`

Field name that contains the object ID of a feature. Not applicable for non-feature layers.

#### Defined in

[src/geo/layer/layer-instance.ts:126](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L126)

___

### supportsFeatures

• **supportsFeatures**: `boolean`

If the layer type can support Feature type requests and operations

#### Defined in

[src/geo/layer/layer-instance.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L106)

___

### supportsIdentify

• **supportsIdentify**: `boolean`

If the layer type can support an identify request

#### Defined in

[src/geo/layer/layer-instance.ts:101](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L101)

___

### supportsSublayers

• **supportsSublayers**: `boolean`

If the layer has Sublayers

#### Defined in

[src/geo/layer/layer-instance.ts:139](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L139)

___

### uid

• **uid**: `string`

Unique identifier for this layer. Randomly generated at runtime.

#### Defined in

[src/geo/layer/layer-instance.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L56)

___

### userAdded

• **userAdded**: `boolean`

If the layer was added by user interaction during the session

#### Defined in

[src/geo/layer/layer-instance.ts:164](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L164)

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

### drawOrder

• `get` **drawOrder**(): [`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

Return the draw order for the layer, if applicable

#### Returns

[`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

#### Defined in

[src/geo/layer/layer-instance.ts:446](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L446)

___

### isLoaded

• `get` **isLoaded**(): `boolean`

Indicates if the layer is in a state that is makes sense to interact with.
I.e. False if layer has not done it's initial load, or is in error state.

#### Returns

`boolean`

true if layer is in an interactive state

#### Defined in

[src/geo/layer/layer-instance.ts:308](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L308)

___

### layerExists

• `get` **layerExists**(): `boolean`

Indicates if the Esri map layer exists.

#### Returns

`boolean`

#### Defined in

[src/geo/layer/layer-instance.ts:315](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L315)

___

### mouseTolerance

• `get` **mouseTolerance**(): `number`

Get the click tolerance in pixels for this layer

#### Returns

`number`

the mouse tolerance of this layer

#### Defined in

[src/geo/layer/layer-instance.ts:416](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L416)

• `set` **mouseTolerance**(`tolerance`): `void`

Set the mouse tolerance for this layer in pixels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tolerance` | `number` | the new mouse tolerance |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:425](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L425)

___

### opacity

• `get` **opacity**(): `number`

Returns the opacity of the layer.

#### Returns

`number`

opacity of the layer

#### Defined in

[src/geo/layer/layer-instance.ts:355](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L355)

• `set` **opacity**(`value`): `void`

Applies opacity to layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | the new opacity setting |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:364](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L364)

___

### parentLayer

• `get` **parentLayer**(): `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Get the parent layer for this layer
Only supported for sublayers

#### Returns

`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

the parent layer of this layer

#### Defined in

[src/geo/layer/layer-instance.ts:584](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L584)

• `set` **parentLayer**(`layer`): `void`

Set the parent layer for this layer
Only supported for sublayers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | the new parent layer for this layer |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:600](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L600)

___

### scaleSet

• `get` **scaleSet**(): [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

Returns the scale set (min and max visible scale) of the layer.

#### Returns

[`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

scale set of the layer

#### Defined in

[src/geo/layer/layer-instance.ts:371](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L371)

• `set` **scaleSet**(`scaleSet`): `void`

Set the scale set (min and max visible scale) of the layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleSet` | [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md) | the new scale set of the layer |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:380](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L380)

___

### sublayers

• `get` **sublayers**(): [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

Get the sublayers for this layer

#### Returns

[`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

the sublayers of this layer

#### Defined in

[src/geo/layer/layer-instance.ts:615](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L615)

___

### touchTolerance

• `get` **touchTolerance**(): `number`

Get the touch tolerance in pixels for this layer

#### Returns

`number`

the touch tolerance of this layer

#### Defined in

[src/geo/layer/layer-instance.ts:432](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L432)

• `set` **touchTolerance**(`tolerance`): `void`

Set the touch tolerance in pixels for this layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tolerance` | `number` | the new touch tolerance |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:441](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L441)

___

### visibility

• `get` **visibility**(): `boolean`

Returns the visibility of the layer.

#### Returns

`boolean`

visibility of the layer

#### Defined in

[src/geo/layer/layer-instance.ts:339](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L339)

• `set` **visibility**(`value`): `void`

Applies visibility to layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | the new visibility setting |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:348](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L348)

## Methods

### abortAttributeLoad

▸ **abortAttributeLoad**(): `void`

Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:489](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L489)

___

### applySqlFilter

▸ **applySqlFilter**(`exclusions?`): `void`

Applies the current filter settings to the physical map layer.

**`Function`**

applySqlFilter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exclusions?` | `string`[] | `[]` | list of any filters to exclude from the result. omission includes all keys |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:562](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L562)

___

### canIdentify

▸ **canIdentify**(): `boolean`

Indicates if layer should participate in an identify request.

#### Returns

`boolean`

#### Defined in

[src/geo/layer/layer-instance.ts:453](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L453)

___

### clearFeatureCache

▸ **clearFeatureCache**(): `void`

Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:495](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L495)

___

### controlAvailable

▸ **controlAvailable**(`control`): `boolean`

Check if layer controls is available on this layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `control` | [`LayerControl`](../enums/geo_api_geo_defs.LayerControl.md) | the layer control to check |

#### Returns

`boolean`

Indicates if the given control is enabled on this layer

#### Defined in

[src/geo/layer/layer-instance.ts:718](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L718)

___

### getAttributes

▸ **getAttributes**(`layerIdx?`): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

Invokes the process to get the full set of attribute values for the layer.
Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `layerIdx?` | `string` \| `number` | `undefined` | targets a layer index or uid to get attributes for. Uses first/only if omitted. |

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

resolves with set of attribute values

#### Defined in

[src/geo/layer/layer-instance.ts:476](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L476)

___

### getFilterOIDs

▸ **getFilterOIDs**(`exclusions?`, `extent?`): `Promise`<`undefined` \| `number`[]\>

Gets array of object ids that currently pass any filters for the layer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exclusions?` | `string`[] | `[]` | list of any filters keys to exclude from the result. omission includes all filters |
| `extent?` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | `undefined` | if provided, the result list will only include features intersecting the extent |

#### Returns

`Promise`<`undefined` \| `number`[]\>

resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.

#### Defined in

[src/geo/layer/layer-instance.ts:571](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L571)

___

### getGraphic

▸ **getGraphic**(`objectId`, `options`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

Gets information on a graphic in the most efficient way possible. Options object properties:
- getGeom ; a boolean to indicate if the result should include graphic geometry
- getAttribs ; a boolean to indicate if the result should include graphic attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `number` | the object id of the graphic to find |
| `options` | [`GetGraphicParams`](../interfaces/geo_api_geo_defs.GetGraphicParams.md) | options object for the request, see above |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

resolves with a Graphic containing the requested information

#### Defined in

[src/geo/layer/layer-instance.ts:523](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L523)

___

### getIcon

▸ **getIcon**(`objectId`): `Promise`<`string`\>

Gets the icon for a specific feature, as an SVG string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `number` | the object id of the feature to find |

#### Returns

`Promise`<`string`\>

resolves with an svg string encoding of the icon

#### Defined in

[src/geo/layer/layer-instance.ts:533](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L533)

___

### getLayerTree

▸ **getLayerTree**(): [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

Provides a tree structure describing the layer and any sublayers,
including uid values. Should only be called after loadPromise resolves.

**`Method`**

getLayerTree

#### Returns

[`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

the root of the layer tree

#### Defined in

[src/geo/layer/layer-instance.ts:326](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L326)

___

### getSqlFilter

▸ **getSqlFilter**(`filterKey`): `string`

Returns the value of a named SQL filter for the layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterKey` | `string` | the filter key / named filter to view |

#### Returns

`string`

the value of the where clause for the filter. Empty string if not defined.

#### Defined in

[src/geo/layer/layer-instance.ts:543](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L543)

___

### getSublayer

▸ `Private` **getSublayer**(`layerIdx`): `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Attempts to get an sublayer based on the index or uid provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerIdx` | `string` \| `number` | the uid or numeric index of the item we are interested in |

#### Returns

`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

the matching feature class object, or undefined if the root was requested

#### Defined in

[src/geo/layer/layer-instance.ts:682](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L682)

___

### getTabularAttributes

▸ **getTabularAttributes**(): `Promise`<[`TabularAttributeSet`](../interfaces/geo_api_geo_defs.TabularAttributeSet.md)\>

Invokes the process to get the full set of attribute values for the layer,
formatted in a tabular format. Additional data properties are also included.
Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.

#### Returns

`Promise`<[`TabularAttributeSet`](../interfaces/geo_api_geo_defs.TabularAttributeSet.md)\>

resolves with set of tabular attribute values

#### Defined in

[src/geo/layer/layer-instance.ts:505](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L505)

___

### initiate

▸ **initiate**(): `Promise`<`void`\>

Sets up the internal layer object (ESRI) and initiates the loading process.
The promise returned resolves when the object exists (i.e. .esriLayer is populated).
This means the layer can be added to the map.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/layer/layer-instance.ts:268](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L268)

___

### isOffscale

▸ **isOffscale**(`testScale?`): `boolean`

Indicates if the layer is not in a visible scale range.

**`Function`**

isOffscale

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `testScale?` | `number` | `undefined` | optional scale to test against. if not provided, current map scale is used. |

#### Returns

`boolean`

true if the layer is outside of a visible scale range

#### Defined in

[src/geo/layer/layer-instance.ts:389](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L389)

___

### loadPromise

▸ **loadPromise**(): `Promise`<`void`\>

Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
depend on the layer being loaded, wait on this promise before accessing them.

**`Method`**

loadPromise

#### Returns

`Promise`<`void`\>

resolves when the layer has finished loading

#### Defined in

[src/geo/layer/layer-instance.ts:298](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L298)

___

### onError

▸ **onError**(): `void`

Initiates actions after layer load error.
Should generally only be called internally by the RAMP core.

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:629](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L629)

___

### onLoad

▸ **onLoad**(): `void`

Initiates actions after layer load.
Should generally only be called internally by the RAMP core.

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:623](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L623)

___

### reload

▸ **reload**(): `Promise`<`void`\>

Attempts to reload the internal layer object (ESRI).
Effectively doing a terminate then initiate, and removing/re-adding layer to the map.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/layer/layer-instance.ts:287](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L287)

___

### runIdentify

▸ **runIdentify**(`options`): [`IdentifyResult`](../interfaces/geo_api_geo_defs.IdentifyResult.md)[]

Baseline identify function for layers that do not support identify.
Will return an empty result. Layers that support identify should override this method.
Note: implementations that return real data must make that data reactive()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IdentifyParameters`](../interfaces/geo_api_geo_defs.IdentifyParameters.md) | not used, present for nice signature of overrided function |

#### Returns

[`IdentifyResult`](../interfaces/geo_api_geo_defs.IdentifyResult.md)[]

an empty result set

#### Defined in

[src/geo/layer/layer-instance.ts:465](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L465)

___

### setSqlFilter

▸ **setSqlFilter**(`filterKey`, `whereClause`): `void`

Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
Use `1=2` for a "hide all" where clause.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterKey` | `string` | the filter key / named filter to apply the SQL to |
| `whereClause` | `string` | the WHERE clause of the filter |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:554](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L554)

___

### terminate

▸ **terminate**(): `Promise`<`void`\>

Resets the layer class to the state it was in "pre-initialize". Implementers can decide if they want
to retain any state (e.g. UIDs/layerTree would be a good idea).
Also an appropriate function to remove any event listeners/triggers.
This would be called in situations like a layer getting deleted, or in a layer reload (initialize would be called again afterwards).
Note this does not remove any layers from the map stack, that must be done by the caller.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/geo/layer/layer-instance.ts:279](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L279)

___

### uidToIdx

▸ `Private` **uidToIdx**(`uid`): `number`

Finds an sublayer index corresponding to the given uid.
-1 indicates the uid targets the root layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `string` | the uid we want the index for |

#### Returns

`number`

the integer index of the uid

#### Defined in

[src/geo/layer/layer-instance.ts:657](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L657)

___

### updateDrawState

▸ **updateDrawState**(`newState`): `void`

Updates layer draw state and raises events.
Should generally only be called internally by the RAMP core.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DrawState`](../enums/geo_api_geo_defs.DrawState.md) |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:641](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L641)

___

### updateInitiationState

▸ **updateInitiationState**(`newState`): `void`

Updates layer layer state and raises events.
Should generally only be called internally by the RAMP core.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`InitiationState`](../enums/geo_api_geo_defs.InitiationState.md) |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:647](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L647)

___

### updateLayerState

▸ **updateLayerState**(`newState`): `void`

Updates layer load state and raises events.
Should generally only be called internally by the RAMP core.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`LayerState`](../enums/geo_api_geo_defs.LayerState.md) |

#### Returns

`void`

#### Defined in

[src/geo/layer/layer-instance.ts:635](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L635)

___

### zoomToLayerBoundary

▸ **zoomToLayerBoundary**(): `Promise`<`void`\>

Cause the map to zoom to this layer's boundary extent

#### Returns

`Promise`<`void`\>

resolves when map has finished zooming

#### Defined in

[src/geo/layer/layer-instance.ts:407](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L407)

___

### zoomToVisibleScale

▸ **zoomToVisibleScale**(): `Promise`<`void`\>

Cause the map to zoom to a scale level where the layer is visible.

#### Returns

`Promise`<`void`\>

resolves when map has finished zooming

#### Defined in

[src/geo/layer/layer-instance.ts:398](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L398)
