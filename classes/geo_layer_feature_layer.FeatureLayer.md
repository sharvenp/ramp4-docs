[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/feature-layer](../modules/geo_layer_feature_layer.md) / FeatureLayer

# Class: FeatureLayer

[geo/layer/feature-layer](../modules/geo_layer_feature_layer.md).FeatureLayer

A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
Mostly it exposes stub methods on LayerBase; this is because layer subclasses can be wildly different, so we don't
have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
implemented something. The stubs also allow us to get intellisense / typescript happiness when dealing with common
layer variables typed as LayerInstance.

**`Export`**

## Hierarchy

- [`AttribLayer`](geo_layer_attrib_layer.AttribLayer.md)

  ↳ **`FeatureLayer`**

## Table of contents

### Constructors

- [constructor](geo_layer_feature_layer.FeatureLayer.md#constructor)

### Properties

- [$iApi](geo_layer_feature_layer.FeatureLayer.md#$iapi)
- [\_drawOrder](geo_layer_feature_layer.FeatureLayer.md#_draworder)
- [\_lastFilterUpdate](geo_layer_feature_layer.FeatureLayer.md#_lastfilterupdate)
- [\_mouseTolerance](geo_layer_feature_layer.FeatureLayer.md#_mousetolerance)
- [\_parentLayer](geo_layer_feature_layer.FeatureLayer.md#_parentlayer)
- [\_scaleSet](geo_layer_feature_layer.FeatureLayer.md#_scaleset)
- [\_serverVisibility](geo_layer_feature_layer.FeatureLayer.md#_servervisibility)
- [\_sublayers](geo_layer_feature_layer.FeatureLayer.md#_sublayers)
- [\_touchTolerance](geo_layer_feature_layer.FeatureLayer.md#_touchtolerance)
- [attLoader](geo_layer_feature_layer.FeatureLayer.md#attloader)
- [config](geo_layer_feature_layer.FeatureLayer.md#config)
- [dataFormat](geo_layer_feature_layer.FeatureLayer.md#dataformat)
- [drawState](geo_layer_feature_layer.FeatureLayer.md#drawstate)
- [esriFields](geo_layer_feature_layer.FeatureLayer.md#esrifields)
- [esriLayer](geo_layer_feature_layer.FeatureLayer.md#esrilayer)
- [esriSubLayer](geo_layer_feature_layer.FeatureLayer.md#esrisublayer)
- [esriView](geo_layer_feature_layer.FeatureLayer.md#esriview)
- [esriWatches](geo_layer_feature_layer.FeatureLayer.md#esriwatches)
- [expectedTime](geo_layer_feature_layer.FeatureLayer.md#expectedtime)
- [extent](geo_layer_feature_layer.FeatureLayer.md#extent)
- [featureCount](geo_layer_feature_layer.FeatureLayer.md#featurecount)
- [fieldList](geo_layer_feature_layer.FeatureLayer.md#fieldlist)
- [fields](geo_layer_feature_layer.FeatureLayer.md#fields)
- [filter](geo_layer_feature_layer.FeatureLayer.md#filter)
- [geomType](geo_layer_feature_layer.FeatureLayer.md#geomtype)
- [hovertips](geo_layer_feature_layer.FeatureLayer.md#hovertips)
- [id](geo_layer_feature_layer.FeatureLayer.md#id)
- [identify](geo_layer_feature_layer.FeatureLayer.md#identify)
- [identifyMode](geo_layer_feature_layer.FeatureLayer.md#identifymode)
- [initiationState](geo_layer_feature_layer.FeatureLayer.md#initiationstate)
- [isCosmetic](geo_layer_feature_layer.FeatureLayer.md#iscosmetic)
- [isFile](geo_layer_feature_layer.FeatureLayer.md#isfile)
- [isRemoved](geo_layer_feature_layer.FeatureLayer.md#isremoved)
- [isSublayer](geo_layer_feature_layer.FeatureLayer.md#issublayer)
- [layerFormat](geo_layer_feature_layer.FeatureLayer.md#layerformat)
- [layerIdx](geo_layer_feature_layer.FeatureLayer.md#layeridx)
- [layerState](geo_layer_feature_layer.FeatureLayer.md#layerstate)
- [layerTree](geo_layer_feature_layer.FeatureLayer.md#layertree)
- [layerType](geo_layer_feature_layer.FeatureLayer.md#layertype)
- [legend](geo_layer_feature_layer.FeatureLayer.md#legend)
- [loadDefProm](geo_layer_feature_layer.FeatureLayer.md#loaddefprom)
- [loadPromFulfilled](geo_layer_feature_layer.FeatureLayer.md#loadpromfulfilled)
- [maxLoadTime](geo_layer_feature_layer.FeatureLayer.md#maxloadtime)
- [name](geo_layer_feature_layer.FeatureLayer.md#name)
- [nameField](geo_layer_feature_layer.FeatureLayer.md#namefield)
- [oidField](geo_layer_feature_layer.FeatureLayer.md#oidfield)
- [origRampConfig](geo_layer_feature_layer.FeatureLayer.md#origrampconfig)
- [quickCache](geo_layer_feature_layer.FeatureLayer.md#quickcache)
- [renderer](geo_layer_feature_layer.FeatureLayer.md#renderer)
- [serviceUrl](geo_layer_feature_layer.FeatureLayer.md#serviceurl)
- [supportsFeatures](geo_layer_feature_layer.FeatureLayer.md#supportsfeatures)
- [supportsIdentify](geo_layer_feature_layer.FeatureLayer.md#supportsidentify)
- [supportsSublayers](geo_layer_feature_layer.FeatureLayer.md#supportssublayers)
- [timers](geo_layer_feature_layer.FeatureLayer.md#timers)
- [tooltipField](geo_layer_feature_layer.FeatureLayer.md#tooltipfield)
- [uid](geo_layer_feature_layer.FeatureLayer.md#uid)
- [userAdded](geo_layer_feature_layer.FeatureLayer.md#useradded)
- [viewDefProm](geo_layer_feature_layer.FeatureLayer.md#viewdefprom)

### Accessors

- [$element](geo_layer_feature_layer.FeatureLayer.md#$element)
- [$vApp](geo_layer_feature_layer.FeatureLayer.md#$vapp)
- [drawOrder](geo_layer_feature_layer.FeatureLayer.md#draworder)
- [isLoaded](geo_layer_feature_layer.FeatureLayer.md#isloaded)
- [layerExists](geo_layer_feature_layer.FeatureLayer.md#layerexists)
- [mouseTolerance](geo_layer_feature_layer.FeatureLayer.md#mousetolerance)
- [opacity](geo_layer_feature_layer.FeatureLayer.md#opacity)
- [parentLayer](geo_layer_feature_layer.FeatureLayer.md#parentlayer)
- [scaleSet](geo_layer_feature_layer.FeatureLayer.md#scaleset)
- [sublayers](geo_layer_feature_layer.FeatureLayer.md#sublayers)
- [touchTolerance](geo_layer_feature_layer.FeatureLayer.md#touchtolerance)
- [visibility](geo_layer_feature_layer.FeatureLayer.md#visibility)

### Methods

- [abortAttributeLoad](geo_layer_feature_layer.FeatureLayer.md#abortattributeload)
- [applySqlFilter](geo_layer_feature_layer.FeatureLayer.md#applysqlfilter)
- [canIdentify](geo_layer_feature_layer.FeatureLayer.md#canidentify)
- [checkVisibility](geo_layer_feature_layer.FeatureLayer.md#checkvisibility)
- [clearFeatureCache](geo_layer_feature_layer.FeatureLayer.md#clearfeaturecache)
- [controlAvailable](geo_layer_feature_layer.FeatureLayer.md#controlavailable)
- [getAttributes](geo_layer_feature_layer.FeatureLayer.md#getattributes)
- [getCombinedSqlFilter](geo_layer_feature_layer.FeatureLayer.md#getcombinedsqlfilter)
- [getFilterOIDs](geo_layer_feature_layer.FeatureLayer.md#getfilteroids)
- [getGraphic](geo_layer_feature_layer.FeatureLayer.md#getgraphic)
- [getIcon](geo_layer_feature_layer.FeatureLayer.md#geticon)
- [getLayerTree](geo_layer_feature_layer.FeatureLayer.md#getlayertree)
- [getSqlFilter](geo_layer_feature_layer.FeatureLayer.md#getsqlfilter)
- [getSublayer](geo_layer_feature_layer.FeatureLayer.md#getsublayer)
- [getTabularAttributes](geo_layer_feature_layer.FeatureLayer.md#gettabularattributes)
- [initiate](geo_layer_feature_layer.FeatureLayer.md#initiate)
- [isOffscale](geo_layer_feature_layer.FeatureLayer.md#isoffscale)
- [loadFeatureCount](geo_layer_feature_layer.FeatureLayer.md#loadfeaturecount)
- [loadLayerMetadata](geo_layer_feature_layer.FeatureLayer.md#loadlayermetadata)
- [loadPromise](geo_layer_feature_layer.FeatureLayer.md#loadpromise)
- [makeEsriLayerConfig](geo_layer_feature_layer.FeatureLayer.md#makeesrilayerconfig)
- [mapCheck](geo_layer_feature_layer.FeatureLayer.md#mapcheck)
- [noLayerErr](geo_layer_feature_layer.FeatureLayer.md#nolayererr)
- [notLoadedErr](geo_layer_feature_layer.FeatureLayer.md#notloadederr)
- [onError](geo_layer_feature_layer.FeatureLayer.md#onerror)
- [onInitiate](geo_layer_feature_layer.FeatureLayer.md#oninitiate)
- [onLoad](geo_layer_feature_layer.FeatureLayer.md#onload)
- [onLoadActions](geo_layer_feature_layer.FeatureLayer.md#onloadactions)
- [processFieldMetadata](geo_layer_feature_layer.FeatureLayer.md#processfieldmetadata)
- [queryFeatures](geo_layer_feature_layer.FeatureLayer.md#queryfeatures)
- [queryFeaturesDiscrete](geo_layer_feature_layer.FeatureLayer.md#queryfeaturesdiscrete)
- [queryOIDs](geo_layer_feature_layer.FeatureLayer.md#queryoids)
- [reload](geo_layer_feature_layer.FeatureLayer.md#reload)
- [runIdentify](geo_layer_feature_layer.FeatureLayer.md#runidentify)
- [setCustomParameter](geo_layer_feature_layer.FeatureLayer.md#setcustomparameter)
- [setSqlFilter](geo_layer_feature_layer.FeatureLayer.md#setsqlfilter)
- [startTimer](geo_layer_feature_layer.FeatureLayer.md#starttimer)
- [stopTimer](geo_layer_feature_layer.FeatureLayer.md#stoptimer)
- [stubError](geo_layer_feature_layer.FeatureLayer.md#stuberror)
- [terminate](geo_layer_feature_layer.FeatureLayer.md#terminate)
- [updateDrawState](geo_layer_feature_layer.FeatureLayer.md#updatedrawstate)
- [updateInitiationState](geo_layer_feature_layer.FeatureLayer.md#updateinitiationstate)
- [updateLayerState](geo_layer_feature_layer.FeatureLayer.md#updatelayerstate)
- [zoomToLayerBoundary](geo_layer_feature_layer.FeatureLayer.md#zoomtolayerboundary)
- [zoomToVisibleScale](geo_layer_feature_layer.FeatureLayer.md#zoomtovisiblescale)

## Constructors

### constructor

• **new FeatureLayer**(`rampConfig`, `$iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rampConfig` | [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md) |
| `$iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[constructor](geo_layer_attrib_layer.AttribLayer.md#constructor)

#### Defined in

[src/geo/layer/feature-layer.ts:28](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L28)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[$iApi](geo_layer_attrib_layer.AttribLayer.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### \_drawOrder

• **\_drawOrder**: [`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_drawOrder](geo_layer_attrib_layer.AttribLayer.md#_draworder)

#### Defined in

[src/geo/layer/common-layer.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L52)

___

### \_lastFilterUpdate

• **\_lastFilterUpdate**: `string` = `''`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_lastFilterUpdate](geo_layer_attrib_layer.AttribLayer.md#_lastfilterupdate)

#### Defined in

[src/geo/layer/common-layer.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L54)

___

### \_mouseTolerance

• **\_mouseTolerance**: `number`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_mouseTolerance](geo_layer_attrib_layer.AttribLayer.md#_mousetolerance)

#### Defined in

[src/geo/layer/common-layer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L50)

___

### \_parentLayer

• `Protected` **\_parentLayer**: `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_parentLayer](geo_layer_attrib_layer.AttribLayer.md#_parentlayer)

#### Defined in

[src/geo/layer/layer-instance.ts:216](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L216)

___

### \_scaleSet

• **\_scaleSet**: [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_scaleSet](geo_layer_attrib_layer.AttribLayer.md#_scaleset)

#### Defined in

[src/geo/layer/common-layer.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L49)

___

### \_serverVisibility

• **\_serverVisibility**: `undefined` \| `boolean`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_serverVisibility](geo_layer_attrib_layer.AttribLayer.md#_servervisibility)

#### Defined in

[src/geo/layer/common-layer.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L48)

___

### \_sublayers

• `Protected` **\_sublayers**: [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_sublayers](geo_layer_attrib_layer.AttribLayer.md#_sublayers)

#### Defined in

[src/geo/layer/layer-instance.ts:217](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L217)

___

### \_touchTolerance

• **\_touchTolerance**: `number`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[_touchTolerance](geo_layer_attrib_layer.AttribLayer.md#_touchtolerance)

#### Defined in

[src/geo/layer/common-layer.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L51)

___

### attLoader

• **attLoader**: `undefined` \| [`AttributeLoaderBase`](geo_utils_attribute.AttributeLoaderBase.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[attLoader](geo_layer_attrib_layer.AttribLayer.md#attloader)

#### Defined in

[src/geo/layer/attrib-layer.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L49)

___

### config

• **config**: `any` = `{}`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[config](geo_layer_attrib_layer.AttribLayer.md#config)

#### Defined in

[src/geo/layer/layer-instance.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L43)

___

### dataFormat

• **dataFormat**: [`DataFormat`](../enums/geo_api_geo_defs.DataFormat.md)

The type of spatial data used to generate layer content

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[dataFormat](geo_layer_attrib_layer.AttribLayer.md#dataformat)

#### Defined in

[src/geo/layer/layer-instance.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L96)

___

### drawState

• **drawState**: [`DrawState`](../enums/geo_api_geo_defs.DrawState.md)

State of drawing / refreshing data for a layer

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[drawState](geo_layer_attrib_layer.AttribLayer.md#drawstate)

#### Defined in

[src/geo/layer/layer-instance.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L76)

___

### esriFields

• **esriFields**: [`EsriField`](geo_esri.EsriField.md)[]

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[esriFields](geo_layer_attrib_layer.AttribLayer.md#esrifields)

#### Defined in

[src/geo/layer/attrib-layer.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L47)

___

### esriLayer

• **esriLayer**: `undefined` \| [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

The internal ESRI API layer

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[esriLayer](geo_layer_attrib_layer.AttribLayer.md#esrilayer)

#### Defined in

[src/geo/layer/feature-layer.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L24)

___

### esriSubLayer

• **esriSubLayer**: `undefined` \| [`EsriSublayer`](geo_esri.EsriSublayer.md)

The internal ESRI API sublayer. Valid only by sublayers

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[esriSubLayer](geo_layer_attrib_layer.AttribLayer.md#esrisublayer)

#### Defined in

[src/geo/layer/layer-instance.ts:204](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L204)

___

### esriView

• **esriView**: `undefined` \| `LayerView`

The internal ESRI API layer view

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[esriView](geo_layer_attrib_layer.AttribLayer.md#esriview)

#### Defined in

[src/geo/layer/layer-instance.ts:209](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L209)

___

### esriWatches

• **esriWatches**: `WatchHandle`[]

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[esriWatches](geo_layer_attrib_layer.AttribLayer.md#esriwatches)

#### Defined in

[src/geo/layer/common-layer.ts:64](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L64)

___

### expectedTime

• **expectedTime**: `Object`

Object that contains values for the expected draw/response time.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `draw` | `number` |
| `load` | `number` |

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[expectedTime](geo_layer_attrib_layer.AttribLayer.md#expectedtime)

#### Defined in

[src/geo/layer/layer-instance.ts:131](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L131)

___

### extent

• **extent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

The extent of the layer on the map

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[extent](geo_layer_attrib_layer.AttribLayer.md#extent)

#### Defined in

[src/geo/layer/layer-instance.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L214)

___

### featureCount

• **featureCount**: `number`

Feature count (-1 represents undefined / unknown)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[featureCount](geo_layer_attrib_layer.AttribLayer.md#featurecount)

#### Defined in

[src/geo/layer/layer-instance.ts:111](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L111)

___

### fieldList

• **fieldList**: `string`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[fieldList](geo_layer_attrib_layer.AttribLayer.md#fieldlist)

#### Defined in

[src/geo/layer/attrib-layer.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L48)

___

### fields

• **fields**: [`FieldDefinition`](../interfaces/geo_api_geo_defs.FieldDefinition.md)[]

Array of field definitions about the given layer's fields. Non-feature layers will have empty arrays.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[fields](geo_layer_attrib_layer.AttribLayer.md#fields)

#### Defined in

[src/geo/layer/layer-instance.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L116)

___

### filter

• `Protected` **filter**: [`Filter`](geo_api_layer_filter.Filter.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[filter](geo_layer_attrib_layer.AttribLayer.md#filter)

#### Defined in

[src/geo/layer/attrib-layer.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L53)

___

### geomType

• **geomType**: [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

The geometry type of the layer.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[geomType](geo_layer_attrib_layer.AttribLayer.md#geomtype)

#### Defined in

[src/geo/layer/attrib-layer.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L46)

___

### hovertips

• **hovertips**: `boolean`

If the layer should show hovertips on the map

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[hovertips](geo_layer_attrib_layer.AttribLayer.md#hovertips)

#### Defined in

[src/geo/layer/layer-instance.ts:179](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L179)

___

### id

• **id**: `string`

ID of this layer. Also known as the layerId.

**`Memberof`**

LayerInstance

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[id](geo_layer_attrib_layer.AttribLayer.md#id)

#### Defined in

[src/geo/layer/layer-instance.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L51)

___

### identify

• **identify**: `boolean`

If the layer is set to participate in identify requests

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[identify](geo_layer_attrib_layer.AttribLayer.md#identify)

#### Defined in

[src/geo/layer/layer-instance.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L169)

___

### identifyMode

• **identifyMode**: [`LayerIdentifyMode`](../enums/geo_api_geo_defs.LayerIdentifyMode.md)

The type of logic used to identify items on the layer

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[identifyMode](geo_layer_attrib_layer.AttribLayer.md#identifymode)

#### Defined in

[src/geo/layer/layer-instance.ts:174](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L174)

___

### initiationState

• **initiationState**: [`InitiationState`](../enums/geo_api_geo_defs.InitiationState.md)

State of the initiation / termination process of the layer

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[initiationState](geo_layer_attrib_layer.AttribLayer.md#initiationstate)

#### Defined in

[src/geo/layer/layer-instance.ts:71](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L71)

___

### isCosmetic

• **isCosmetic**: `boolean`

If the layer is non-interactive and only displays content on the map

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[isCosmetic](geo_layer_attrib_layer.AttribLayer.md#iscosmetic)

#### Defined in

[src/geo/layer/layer-instance.ts:159](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L159)

___

### isFile

• **isFile**: `boolean`

If the layer was sourced from a file or a WFS source (which disconnects after load).

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[isFile](geo_layer_attrib_layer.AttribLayer.md#isfile)

#### Defined in

[src/geo/layer/layer-instance.ts:154](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L154)

___

### isRemoved

• **isRemoved**: `boolean`

Tracks if layer is removed from map. Is false during the period "before" the layer gets added to map.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[isRemoved](geo_layer_attrib_layer.AttribLayer.md#isremoved)

#### Defined in

[src/geo/layer/layer-instance.ts:149](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L149)

___

### isSublayer

• **isSublayer**: `boolean`

If the layer is a Sublayer

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[isSublayer](geo_layer_attrib_layer.AttribLayer.md#issublayer)

#### Defined in

[src/geo/layer/layer-instance.ts:144](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L144)

___

### layerFormat

• **layerFormat**: [`LayerFormat`](../enums/geo_api_geo_defs.LayerFormat.md)

How the layer is instantiated in the map stack

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[layerFormat](geo_layer_attrib_layer.AttribLayer.md#layerformat)

#### Defined in

[src/geo/layer/layer-instance.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L91)

___

### layerIdx

• **layerIdx**: `number`

Index of the layer. Aligns to index of arcgis server, or defaults to 0 on other layers

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[layerIdx](geo_layer_attrib_layer.AttribLayer.md#layeridx)

#### Defined in

[src/geo/layer/layer-instance.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L81)

___

### layerState

• **layerState**: [`LayerState`](../enums/geo_api_geo_defs.LayerState.md)

State of the actual layer on the map, such as loading, loaded, error'd.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[layerState](geo_layer_attrib_layer.AttribLayer.md#layerstate)

#### Defined in

[src/geo/layer/layer-instance.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L66)

___

### layerTree

• `Protected` **layerTree**: [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[layerTree](geo_layer_attrib_layer.AttribLayer.md#layertree)

#### Defined in

[src/geo/layer/common-layer.ts:62](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L62)

___

### layerType

• **layerType**: [`LayerType`](../enums/geo_api_geo_defs.LayerType.md)

Type of layer this is (describes the overall layer)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[layerType](geo_layer_attrib_layer.AttribLayer.md#layertype)

#### Defined in

[src/geo/layer/layer-instance.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L86)

___

### legend

• **legend**: [`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]

Legend symbols of the layer

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[legend](geo_layer_attrib_layer.AttribLayer.md#legend)

#### Defined in

[src/geo/layer/layer-instance.ts:189](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L189)

___

### loadDefProm

• `Protected` **loadDefProm**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[loadDefProm](geo_layer_attrib_layer.AttribLayer.md#loaddefprom)

#### Defined in

[src/geo/layer/common-layer.ts:58](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L58)

___

### loadPromFulfilled

• `Protected` **loadPromFulfilled**: `boolean`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[loadPromFulfilled](geo_layer_attrib_layer.AttribLayer.md#loadpromfulfilled)

#### Defined in

[src/geo/layer/common-layer.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L61)

___

### maxLoadTime

• **maxLoadTime**: `number`

How long layer can load for before error (milliseconds)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[maxLoadTime](geo_layer_attrib_layer.AttribLayer.md#maxloadtime)

#### Defined in

[src/geo/layer/layer-instance.ts:194](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L194)

___

### name

• **name**: `string`

The name of the layer.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[name](geo_layer_attrib_layer.AttribLayer.md#name)

#### Defined in

[src/geo/layer/layer-instance.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L61)

___

### nameField

• **nameField**: `string`

Field name that contains value considered the name of a feature. Not applicable for non-feature layers.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[nameField](geo_layer_attrib_layer.AttribLayer.md#namefield)

#### Defined in

[src/geo/layer/layer-instance.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L121)

___

### oidField

• **oidField**: `string`

Field name that contains the object ID of a feature. Not applicable for non-feature layers.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[oidField](geo_layer_attrib_layer.AttribLayer.md#oidfield)

#### Defined in

[src/geo/layer/layer-instance.ts:126](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L126)

___

### origRampConfig

• `Protected` **origRampConfig**: [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[origRampConfig](geo_layer_attrib_layer.AttribLayer.md#origrampconfig)

#### Defined in

[src/geo/layer/common-layer.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L56)

___

### quickCache

• `Protected` **quickCache**: `undefined` \| [`QuickCache`](geo_utils_attribute.QuickCache.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[quickCache](geo_layer_attrib_layer.AttribLayer.md#quickcache)

#### Defined in

[src/geo/layer/attrib-layer.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L52)

___

### renderer

• **renderer**: `undefined` \| [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[renderer](geo_layer_attrib_layer.AttribLayer.md#renderer)

#### Defined in

[src/geo/layer/attrib-layer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L50)

___

### serviceUrl

• **serviceUrl**: `string`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[serviceUrl](geo_layer_attrib_layer.AttribLayer.md#serviceurl)

#### Defined in

[src/geo/layer/attrib-layer.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L51)

___

### supportsFeatures

• **supportsFeatures**: `boolean`

If the layer type can support Feature type requests and operations

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[supportsFeatures](geo_layer_attrib_layer.AttribLayer.md#supportsfeatures)

#### Defined in

[src/geo/layer/layer-instance.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L106)

___

### supportsIdentify

• **supportsIdentify**: `boolean`

If the layer type can support an identify request

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[supportsIdentify](geo_layer_attrib_layer.AttribLayer.md#supportsidentify)

#### Defined in

[src/geo/layer/layer-instance.ts:101](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L101)

___

### supportsSublayers

• **supportsSublayers**: `boolean`

If the layer has Sublayers

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[supportsSublayers](geo_layer_attrib_layer.AttribLayer.md#supportssublayers)

#### Defined in

[src/geo/layer/layer-instance.ts:139](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L139)

___

### timers

• **timers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `draw` | `undefined` \| `number` |
| `load` | `undefined` \| `number` |

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[timers](geo_layer_attrib_layer.AttribLayer.md#timers)

#### Defined in

[src/geo/layer/common-layer.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L44)

___

### tooltipField

• **tooltipField**: `string`

#### Defined in

[src/geo/layer/feature-layer.ts:26](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L26)

___

### uid

• **uid**: `string`

Unique identifier for this layer. Randomly generated at runtime.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[uid](geo_layer_attrib_layer.AttribLayer.md#uid)

#### Defined in

[src/geo/layer/layer-instance.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L56)

___

### userAdded

• **userAdded**: `boolean`

If the layer was added by user interaction during the session

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[userAdded](geo_layer_attrib_layer.AttribLayer.md#useradded)

#### Defined in

[src/geo/layer/layer-instance.ts:164](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L164)

___

### viewDefProm

• `Protected` **viewDefProm**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[viewDefProm](geo_layer_attrib_layer.AttribLayer.md#viewdefprom)

#### Defined in

[src/geo/layer/common-layer.ts:59](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L59)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

AttribLayer.$element

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

AttribLayer.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

___

### drawOrder

• `get` **drawOrder**(): [`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

Returns an array describing the draw order of features. Raster layers will have empty arrays

#### Returns

[`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

#### Inherited from

AttribLayer.drawOrder

#### Defined in

[src/geo/layer/common-layer.ts:660](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L660)

___

### isLoaded

• `get` **isLoaded**(): `boolean`

Indicates if the layer is in a state that is makes sense to interact with.
I.e. False if layer has not done it's initial load, or is in error state.
Acts as a handy shortcut to inspecting the layerState.

**`Method`**

isLoaded

#### Returns

`boolean`

true if layer is loaded

#### Inherited from

AttribLayer.isLoaded

#### Defined in

[src/geo/layer/common-layer.ts:471](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L471)

___

### layerExists

• `get` **layerExists**(): `boolean`

Indicates if the Esri map layer exists

#### Returns

`boolean`

#### Inherited from

AttribLayer.layerExists

#### Defined in

[src/geo/layer/common-layer.ts:478](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L478)

___

### mouseTolerance

• `get` **mouseTolerance**(): `number`

Get the mouse tolerance in pixels for this layer

#### Returns

`number`

the mouse tolerance of this layer

#### Inherited from

AttribLayer.mouseTolerance

#### Defined in

[src/geo/layer/common-layer.ts:601](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L601)

• `set` **mouseTolerance**(`tolerance`): `void`

Set the mouse tolerance for this layer in pixels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tolerance` | `number` | the new mouse tolerance |

#### Returns

`void`

#### Inherited from

AttribLayer.mouseTolerance

#### Defined in

[src/geo/layer/common-layer.ts:610](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L610)

___

### opacity

• `get` **opacity**(): `number`

Returns the opacity of the layer.

#### Returns

`number`

opacity of the layer

#### Inherited from

AttribLayer.opacity

#### Defined in

[src/geo/layer/common-layer.ts:732](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L732)

• `set` **opacity**(`value`): `void`

Applies opacity to layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | the new opacity setting |

#### Returns

`void`

#### Inherited from

AttribLayer.opacity

#### Defined in

[src/geo/layer/common-layer.ts:747](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L747)

___

### parentLayer

• `get` **parentLayer**(): `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

Get the parent layer for this layer
Only supported for sublayers

#### Returns

`undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

the parent layer of this layer

#### Inherited from

AttribLayer.parentLayer

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

#### Inherited from

AttribLayer.parentLayer

#### Defined in

[src/geo/layer/layer-instance.ts:600](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L600)

___

### scaleSet

• `get` **scaleSet**(): [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

Returns the scale set (min and max visible scale) of the layer.

#### Returns

[`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

scale set of the layer

#### Inherited from

AttribLayer.scaleSet

#### Defined in

[src/geo/layer/common-layer.ts:508](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L508)

• `set` **scaleSet**(`scaleSet`): `void`

Set the scale set (min and max visible scale) of the layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleSet` | [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md) | the new scale set of the layer |

#### Returns

`void`

#### Inherited from

AttribLayer.scaleSet

#### Defined in

[src/geo/layer/common-layer.ts:517](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L517)

___

### sublayers

• `get` **sublayers**(): [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

Get the sublayers for this layer

#### Returns

[`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

the sublayers of this layer

#### Inherited from

AttribLayer.sublayers

#### Defined in

[src/geo/layer/layer-instance.ts:615](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L615)

___

### touchTolerance

• `get` **touchTolerance**(): `number`

Get the touch tolerance in pixels for this layer

#### Returns

`number`

the touch tolerance of this layer

#### Inherited from

AttribLayer.touchTolerance

#### Defined in

[src/geo/layer/common-layer.ts:632](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L632)

• `set` **touchTolerance**(`tolerance`): `void`

Set the touch tolerance in pixels for this layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tolerance` | `number` | the new touch tolerance |

#### Returns

`void`

#### Inherited from

AttribLayer.touchTolerance

#### Defined in

[src/geo/layer/common-layer.ts:641](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L641)

___

### visibility

• `get` **visibility**(): `boolean`

Returns the visibility of the layer.

#### Returns

`boolean`

visibility of the layer

#### Inherited from

AttribLayer.visibility

#### Defined in

[src/geo/layer/common-layer.ts:689](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L689)

• `set` **visibility**(`value`): `void`

Applies visibility to layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | the new visibility setting |

#### Returns

`void`

#### Inherited from

AttribLayer.visibility

#### Defined in

[src/geo/layer/common-layer.ts:704](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L704)

## Methods

### abortAttributeLoad

▸ **abortAttributeLoad**(): `void`

Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[abortAttributeLoad](geo_layer_attrib_layer.AttribLayer.md#abortattributeload)

#### Defined in

[src/geo/layer/attrib-layer.ts:320](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L320)

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

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[applySqlFilter](geo_layer_attrib_layer.AttribLayer.md#applysqlfilter)

#### Defined in

[src/geo/layer/feature-layer.ts:296](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L296)

___

### canIdentify

▸ **canIdentify**(): `boolean`

Indicates if layer should participate in an identify request.

#### Returns

`boolean`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[canIdentify](geo_layer_attrib_layer.AttribLayer.md#canidentify)

#### Defined in

[src/geo/layer/common-layer.ts:547](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L547)

___

### checkVisibility

▸ **checkVisibility**(): `void`

Checks the visibility of the sublayers
If all sublayers are invisible, then this layer is also set to invisible

**`Function`**

checkVisibility

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[checkVisibility](geo_layer_attrib_layer.AttribLayer.md#checkvisibility)

#### Defined in

[src/geo/layer/common-layer.ts:719](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L719)

___

### clearFeatureCache

▸ **clearFeatureCache**(): `void`

Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[clearFeatureCache](geo_layer_attrib_layer.AttribLayer.md#clearfeaturecache)

#### Defined in

[src/geo/layer/attrib-layer.ts:332](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L332)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[controlAvailable](geo_layer_attrib_layer.AttribLayer.md#controlavailable)

#### Defined in

[src/geo/layer/layer-instance.ts:718](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L718)

___

### getAttributes

▸ **getAttributes**(): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

Invokes the process to get the full set of attribute values for the layer.
Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

resolves with set of attribute values

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getAttributes](geo_layer_attrib_layer.AttribLayer.md#getattributes)

#### Defined in

[src/geo/layer/attrib-layer.ts:307](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L307)

___

### getCombinedSqlFilter

▸ **getCombinedSqlFilter**(`exclusions?`): `string`

Returns a SQL WHERE condition that is combination of active filters.

**`Method`**

getCombinedSqlFilter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exclusions?` | `string`[] | list of any filter keys to exclude from the result. omission includes all filters |

#### Returns

`string`

all non-excluded sql statements connected with AND operators.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getCombinedSqlFilter](geo_layer_attrib_layer.AttribLayer.md#getcombinedsqlfilter)

#### Defined in

[src/geo/layer/attrib-layer.ts:706](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L706)

___

### getFilterOIDs

▸ **getFilterOIDs**(`exclusions?`, `extent?`): `Promise`<`undefined` \| `number`[]\>

Gets array of object ids that currently pass any filters

**`Function`**

getFilterOIDs

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exclusions?` | `string`[] | `[]` | list of any filters keys to exclude from the result. omission includes all filters |
| `extent?` | [`Extent`](geo_api_graphic_geometry_extent.Extent.md) | `undefined` | if provided, the result list will only include features intersecting the extent |

#### Returns

`Promise`<`undefined` \| `number`[]\>

resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getFilterOIDs](geo_layer_attrib_layer.AttribLayer.md#getfilteroids)

#### Defined in

[src/geo/layer/attrib-layer.ts:719](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L719)

___

### getGraphic

▸ **getGraphic**(`objectId`, `opts`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

Gets information on a graphic in the most efficient way possible. Options object properties:
- getGeom ; a boolean to indicate if the result should include graphic geometry
- getAttribs ; a boolean to indicate if the result should include graphic attributes
- unboundMap ; an optional RampMap reference. Only required if geometry was requested and the layer has not been added to a map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `number` | the object id of the graphic to find |
| `opts` | [`GetGraphicParams`](../interfaces/geo_api_geo_defs.GetGraphicParams.md) | - |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

resolves with a Graphic containing the requested information

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getGraphic](geo_layer_attrib_layer.AttribLayer.md#getgraphic)

#### Defined in

[src/geo/layer/attrib-layer.ts:477](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L477)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getIcon](geo_layer_attrib_layer.AttribLayer.md#geticon)

#### Defined in

[src/geo/layer/attrib-layer.ts:629](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L629)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getLayerTree](geo_layer_attrib_layer.AttribLayer.md#getlayertree)

#### Defined in

[src/geo/layer/common-layer.ts:671](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L671)

___

### getSqlFilter

▸ **getSqlFilter**(`filterKey`): `string`

Returns the value of a named SQL filter on the layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterKey` | `string` | the filter key / named filter to view |

#### Returns

`string`

the value of the where clause for the filter. Empty string if not defined.

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getSqlFilter](geo_layer_attrib_layer.AttribLayer.md#getsqlfilter)

#### Defined in

[src/geo/layer/attrib-layer.ts:695](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L695)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getSublayer](geo_layer_attrib_layer.AttribLayer.md#getsublayer)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[getTabularAttributes](geo_layer_attrib_layer.AttribLayer.md#gettabularattributes)

#### Defined in

[src/geo/layer/attrib-layer.ts:351](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L351)

___

### initiate

▸ **initiate**(): `Promise`<`void`\>

Sets up the internal layer object (ESRI) and initiates the loading process.
The promise returned resolves when the object exists (i.e. .esriLayer is populated).
This means the layer can be added to the map.

#### Returns

`Promise`<`void`\>

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[initiate](geo_layer_attrib_layer.AttribLayer.md#initiate)

#### Defined in

[src/geo/layer/common-layer.ts:157](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L157)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[isOffscale](geo_layer_attrib_layer.AttribLayer.md#isoffscale)

#### Defined in

[src/geo/layer/common-layer.ts:528](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L528)

___

### loadFeatureCount

▸ **loadFeatureCount**(): `Promise`<`void`\>

Will populate the layers featureCount property based on the server metrics.

#### Returns

`Promise`<`void`\>

that resolves when the count is populated

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[loadFeatureCount](geo_layer_attrib_layer.AttribLayer.md#loadfeaturecount)

#### Defined in

[src/geo/layer/attrib-layer.ts:759](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L759)

___

### loadLayerMetadata

▸ **loadLayerMetadata**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LoadLayerMetadataOptions`](../interfaces/geo_api_geo_defs.LoadLayerMetadataOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[loadLayerMetadata](geo_layer_attrib_layer.AttribLayer.md#loadlayermetadata)

#### Defined in

[src/geo/layer/attrib-layer.ts:93](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L93)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[loadPromise](geo_layer_attrib_layer.AttribLayer.md#loadpromise)

#### Defined in

[src/geo/layer/common-layer.ts:459](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L459)

___

### makeEsriLayerConfig

▸ `Protected` **makeEsriLayerConfig**(`rampLayerConfig`): `FeatureLayerProperties`

Take a layer config from the RAMP application and derives a configuration for an ESRI layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rampLayerConfig` | [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md) | snippet from RAMP for this layer |

#### Returns

`FeatureLayerProperties`

configuration object for the ESRI layer representing this layer

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[makeEsriLayerConfig](geo_layer_attrib_layer.AttribLayer.md#makeesrilayerconfig)

#### Defined in

[src/geo/layer/feature-layer.ts:60](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L60)

___

### mapCheck

▸ `Private` **mapCheck**(): `boolean`

Wraps an error test for when someone calls a map dependend function too early

#### Returns

`boolean`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[mapCheck](geo_layer_attrib_layer.AttribLayer.md#mapcheck)

#### Defined in

[src/geo/layer/common-layer.ts:488](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L488)

___

### noLayerErr

▸ `Protected` **noLayerErr**(): `void`

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[noLayerErr](geo_layer_attrib_layer.AttribLayer.md#nolayererr)

#### Defined in

[src/geo/layer/common-layer.ts:120](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L120)

___

### notLoadedErr

▸ `Protected` **notLoadedErr**(): `void`

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[notLoadedErr](geo_layer_attrib_layer.AttribLayer.md#notloadederr)

#### Defined in

[src/geo/layer/attrib-layer.ts:68](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L68)

___

### onError

▸ **onError**(): `void`

Initiates actions after layer load error.
Should generally only be called internally by the RAMP core.

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[onError](geo_layer_attrib_layer.AttribLayer.md#onerror)

#### Defined in

[src/geo/layer/common-layer.ts:402](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L402)

___

### onInitiate

▸ `Protected` **onInitiate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[onInitiate](geo_layer_attrib_layer.AttribLayer.md#oninitiate)

#### Defined in

[src/geo/layer/feature-layer.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L45)

___

### onLoad

▸ **onLoad**(): `void`

Initiates actions after layer load.
Should generally only be called internally by the RAMP core.

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[onLoad](geo_layer_attrib_layer.AttribLayer.md#onload)

#### Defined in

[src/geo/layer/common-layer.ts:360](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L360)

___

### onLoadActions

▸ **onLoadActions**(): `Promise`<`void`\>[]

Triggers when the layer loads.

**`Function`**

onLoadActions

#### Returns

`Promise`<`void`\>[]

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[onLoadActions](geo_layer_attrib_layer.AttribLayer.md#onloadactions)

#### Defined in

[src/geo/layer/feature-layer.ts:99](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L99)

___

### processFieldMetadata

▸ **processFieldMetadata**(`configMetadata?`): `void`

Will take field config metadata and incorporate it into this sublayer.
Should be used after loading process has populated .esriFields property

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `configMetadata` | `undefined` \| [`RampLayerFieldMetadataConfig`](../interfaces/geo_api_geo_defs.RampLayerFieldMetadataConfig.md) | `undefined` | data from the config object. can be undefined |

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[processFieldMetadata](geo_layer_attrib_layer.AttribLayer.md#processfieldmetadata)

#### Defined in

[src/geo/layer/attrib-layer.ts:246](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L246)

___

### queryFeatures

▸ **queryFeatures**(`options`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

Requests a set of features for this layer that match the criteria of the options
- filterGeometry : a RAMP API geometry to restrict results to
- filterSql : a where clause to apply against feature attributes
- includeGeometry : a boolean to indicate if result features should include the geometry
- outFields : a string of comma separated field names. will restrict fields included in the output
- sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`QueryFeaturesParams`](../interfaces/geo_api_geo_defs.QueryFeaturesParams.md) | {Object} options to provide filters and helpful information. |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)[]\>

resolves with an array of features that satisfy the criteria

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[queryFeatures](geo_layer_attrib_layer.AttribLayer.md#queryfeatures)

#### Defined in

[src/geo/layer/attrib-layer.ts:876](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L876)

___

### queryFeaturesDiscrete

▸ **queryFeaturesDiscrete**(`options`): `Promise`<[`DiscreteGraphicResult`](../interfaces/geo_api_geo_defs.DiscreteGraphicResult.md)[]\>

Requests a set of features for this layer that match the criteria of the options
- filterGeometry : a RAMP API geometry to restrict results to
- filterSql : a where clause to apply against feature attributes
- includeGeometry : a boolean to indicate if result features should include the geometry
- sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`QueryFeaturesParams`](../interfaces/geo_api_geo_defs.QueryFeaturesParams.md) | {Object} options to provide filters and helpful information. |

#### Returns

`Promise`<[`DiscreteGraphicResult`](../interfaces/geo_api_geo_defs.DiscreteGraphicResult.md)[]\>

resolves in an array of object ids and promises resolving in each feature

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[queryFeaturesDiscrete](geo_layer_attrib_layer.AttribLayer.md#queryfeaturesdiscrete)

#### Defined in

[src/geo/layer/attrib-layer.ts:840](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L840)

___

### queryOIDs

▸ **queryOIDs**(`options`): `Promise`<`number`[]\>

Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`QueryFeaturesParams`](../interfaces/geo_api_geo_defs.QueryFeaturesParams.md) | {Object} options to provide filters and helpful information. |

#### Returns

`Promise`<`number`[]\>

resolves with an array of numbers (object ids)

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[queryOIDs](geo_layer_attrib_layer.AttribLayer.md#queryoids)

#### Defined in

[src/geo/layer/attrib-layer.ts:811](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L811)

___

### reload

▸ **reload**(): `Promise`<`void`\>

Attempts to reload the internal layer object (ESRI).
Effectively doing a terminate then initiate, and removing/re-adding layer to the map.

#### Returns

`Promise`<`void`\>

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[reload](geo_layer_attrib_layer.AttribLayer.md#reload)

#### Defined in

[src/geo/layer/common-layer.ts:285](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L285)

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

#### Overrides

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[runIdentify](geo_layer_attrib_layer.AttribLayer.md#runidentify)

#### Defined in

[src/geo/layer/feature-layer.ts:179](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/feature-layer.ts#L179)

___

### setCustomParameter

▸ **setCustomParameter**(`key`, `value`, `forceRefresh?`): `void`

Add a WMS layer parameter, maybe even refresh the layer

**`Function`**

setCustomParameter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | name of the key to be created or updated |
| `value` | `string` | `undefined` | value of the key |
| `forceRefresh` | `boolean` | `true` | show the new fancy version of the layer or not |

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[setCustomParameter](geo_layer_attrib_layer.AttribLayer.md#setcustomparameter)

#### Defined in

[src/geo/layer/common-layer.ts:898](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L898)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[setSqlFilter](geo_layer_attrib_layer.AttribLayer.md#setsqlfilter)

#### Defined in

[src/geo/layer/attrib-layer.ts:647](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L647)

___

### startTimer

▸ `Protected` **startTimer**(`type`): `void`

Start the draw/load timer for the layer, after which is a slow to load/draw notification is shown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `TimerType` | the type of timer to start (load or draw) |

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[startTimer](geo_layer_attrib_layer.AttribLayer.md#starttimer)

#### Defined in

[src/geo/layer/common-layer.ts:906](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L906)

___

### stopTimer

▸ `Protected` **stopTimer**(`type`): `void`

Stop the draw/load timer for the layer, if it was started.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `TimerType` | the type of timer to stop (load or draw) |

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[stopTimer](geo_layer_attrib_layer.AttribLayer.md#stoptimer)

#### Defined in

[src/geo/layer/common-layer.ts:926](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L926)

___

### stubError

▸ `Protected` **stubError**(): `void`

#### Returns

`void`

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[stubError](geo_layer_attrib_layer.AttribLayer.md#stuberror)

#### Defined in

[src/geo/layer/common-layer.ts:761](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L761)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[terminate](geo_layer_attrib_layer.AttribLayer.md#terminate)

#### Defined in

[src/geo/layer/common-layer.ts:266](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L266)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[updateDrawState](geo_layer_attrib_layer.AttribLayer.md#updatedrawstate)

#### Defined in

[src/geo/layer/common-layer.ts:143](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L143)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[updateInitiationState](geo_layer_attrib_layer.AttribLayer.md#updateinitiationstate)

#### Defined in

[src/geo/layer/common-layer.ts:127](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L127)

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

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[updateLayerState](geo_layer_attrib_layer.AttribLayer.md#updatelayerstate)

#### Defined in

[src/geo/layer/common-layer.ts:135](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L135)

___

### zoomToLayerBoundary

▸ **zoomToLayerBoundary**(): `Promise`<`void`\>

Cause the map to zoom to this layer's boundary extent

#### Returns

`Promise`<`void`\>

resolves when map has finished zooming

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[zoomToLayerBoundary](geo_layer_attrib_layer.AttribLayer.md#zoomtolayerboundary)

#### Defined in

[src/geo/layer/common-layer.ts:581](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L581)

___

### zoomToVisibleScale

▸ **zoomToVisibleScale**(): `Promise`<`void`\>

Cause the map to zoom to a scale level where the layer is visible.

#### Returns

`Promise`<`void`\>

resolves when map has finished zooming

#### Inherited from

[AttribLayer](geo_layer_attrib_layer.AttribLayer.md).[zoomToVisibleScale](geo_layer_attrib_layer.AttribLayer.md#zoomtovisiblescale)

#### Defined in

[src/geo/layer/common-layer.ts:562](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L562)
