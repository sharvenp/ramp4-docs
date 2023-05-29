[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/layer/csv-layer](../modules/geo_layer_csv_layer.md) / CsvLayer

# Class: CsvLayer

[geo/layer/csv-layer](../modules/geo_layer_csv_layer.md).CsvLayer

A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
Mostly it exposes stub methods on LayerBase; this is because layer subclasses can be wildly different, so we don't
have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
implemented something. The stubs also allow us to get intellisense / typescript happiness when dealing with common
layer variables typed as LayerInstance.

**`Export`**

## Hierarchy

- [`FileLayer`](geo_layer_file_layer.FileLayer.md)

  ↳ **`CsvLayer`**

## Table of contents

### Constructors

- [constructor](geo_layer_csv_layer.CsvLayer.md#constructor)

### Properties

- [$iApi](geo_layer_csv_layer.CsvLayer.md#$iapi)
- [\_drawOrder](geo_layer_csv_layer.CsvLayer.md#_draworder)
- [\_lastFilterUpdate](geo_layer_csv_layer.CsvLayer.md#_lastfilterupdate)
- [\_mouseTolerance](geo_layer_csv_layer.CsvLayer.md#_mousetolerance)
- [\_parentLayer](geo_layer_csv_layer.CsvLayer.md#_parentlayer)
- [\_scaleSet](geo_layer_csv_layer.CsvLayer.md#_scaleset)
- [\_serverVisibility](geo_layer_csv_layer.CsvLayer.md#_servervisibility)
- [\_sublayers](geo_layer_csv_layer.CsvLayer.md#_sublayers)
- [\_touchTolerance](geo_layer_csv_layer.CsvLayer.md#_touchtolerance)
- [attLoader](geo_layer_csv_layer.CsvLayer.md#attloader)
- [config](geo_layer_csv_layer.CsvLayer.md#config)
- [dataFormat](geo_layer_csv_layer.CsvLayer.md#dataformat)
- [drawState](geo_layer_csv_layer.CsvLayer.md#drawstate)
- [esriFields](geo_layer_csv_layer.CsvLayer.md#esrifields)
- [esriJson](geo_layer_csv_layer.CsvLayer.md#esrijson)
- [esriLayer](geo_layer_csv_layer.CsvLayer.md#esrilayer)
- [esriSubLayer](geo_layer_csv_layer.CsvLayer.md#esrisublayer)
- [esriView](geo_layer_csv_layer.CsvLayer.md#esriview)
- [esriWatches](geo_layer_csv_layer.CsvLayer.md#esriwatches)
- [expectedTime](geo_layer_csv_layer.CsvLayer.md#expectedtime)
- [extent](geo_layer_csv_layer.CsvLayer.md#extent)
- [featureCount](geo_layer_csv_layer.CsvLayer.md#featurecount)
- [fieldList](geo_layer_csv_layer.CsvLayer.md#fieldlist)
- [fields](geo_layer_csv_layer.CsvLayer.md#fields)
- [filter](geo_layer_csv_layer.CsvLayer.md#filter)
- [geomType](geo_layer_csv_layer.CsvLayer.md#geomtype)
- [hovertips](geo_layer_csv_layer.CsvLayer.md#hovertips)
- [id](geo_layer_csv_layer.CsvLayer.md#id)
- [identify](geo_layer_csv_layer.CsvLayer.md#identify)
- [identifyMode](geo_layer_csv_layer.CsvLayer.md#identifymode)
- [initiationState](geo_layer_csv_layer.CsvLayer.md#initiationstate)
- [isCosmetic](geo_layer_csv_layer.CsvLayer.md#iscosmetic)
- [isFile](geo_layer_csv_layer.CsvLayer.md#isfile)
- [isRemoved](geo_layer_csv_layer.CsvLayer.md#isremoved)
- [isSublayer](geo_layer_csv_layer.CsvLayer.md#issublayer)
- [layerFormat](geo_layer_csv_layer.CsvLayer.md#layerformat)
- [layerIdx](geo_layer_csv_layer.CsvLayer.md#layeridx)
- [layerState](geo_layer_csv_layer.CsvLayer.md#layerstate)
- [layerTree](geo_layer_csv_layer.CsvLayer.md#layertree)
- [layerType](geo_layer_csv_layer.CsvLayer.md#layertype)
- [legend](geo_layer_csv_layer.CsvLayer.md#legend)
- [loadDefProm](geo_layer_csv_layer.CsvLayer.md#loaddefprom)
- [loadPromFulfilled](geo_layer_csv_layer.CsvLayer.md#loadpromfulfilled)
- [maxLoadTime](geo_layer_csv_layer.CsvLayer.md#maxloadtime)
- [name](geo_layer_csv_layer.CsvLayer.md#name)
- [nameField](geo_layer_csv_layer.CsvLayer.md#namefield)
- [oidField](geo_layer_csv_layer.CsvLayer.md#oidfield)
- [origRampConfig](geo_layer_csv_layer.CsvLayer.md#origrampconfig)
- [quickCache](geo_layer_csv_layer.CsvLayer.md#quickcache)
- [renderer](geo_layer_csv_layer.CsvLayer.md#renderer)
- [serviceUrl](geo_layer_csv_layer.CsvLayer.md#serviceurl)
- [sourceGeoJson](geo_layer_csv_layer.CsvLayer.md#sourcegeojson)
- [supportsFeatures](geo_layer_csv_layer.CsvLayer.md#supportsfeatures)
- [supportsIdentify](geo_layer_csv_layer.CsvLayer.md#supportsidentify)
- [supportsSublayers](geo_layer_csv_layer.CsvLayer.md#supportssublayers)
- [timers](geo_layer_csv_layer.CsvLayer.md#timers)
- [tooltipField](geo_layer_csv_layer.CsvLayer.md#tooltipfield)
- [uid](geo_layer_csv_layer.CsvLayer.md#uid)
- [userAdded](geo_layer_csv_layer.CsvLayer.md#useradded)
- [viewDefProm](geo_layer_csv_layer.CsvLayer.md#viewdefprom)

### Accessors

- [$element](geo_layer_csv_layer.CsvLayer.md#$element)
- [$vApp](geo_layer_csv_layer.CsvLayer.md#$vapp)
- [drawOrder](geo_layer_csv_layer.CsvLayer.md#draworder)
- [isLoaded](geo_layer_csv_layer.CsvLayer.md#isloaded)
- [layerExists](geo_layer_csv_layer.CsvLayer.md#layerexists)
- [mouseTolerance](geo_layer_csv_layer.CsvLayer.md#mousetolerance)
- [opacity](geo_layer_csv_layer.CsvLayer.md#opacity)
- [parentLayer](geo_layer_csv_layer.CsvLayer.md#parentlayer)
- [scaleSet](geo_layer_csv_layer.CsvLayer.md#scaleset)
- [sublayers](geo_layer_csv_layer.CsvLayer.md#sublayers)
- [touchTolerance](geo_layer_csv_layer.CsvLayer.md#touchtolerance)
- [visibility](geo_layer_csv_layer.CsvLayer.md#visibility)

### Methods

- [abortAttributeLoad](geo_layer_csv_layer.CsvLayer.md#abortattributeload)
- [applySqlFilter](geo_layer_csv_layer.CsvLayer.md#applysqlfilter)
- [canIdentify](geo_layer_csv_layer.CsvLayer.md#canidentify)
- [checkVisibility](geo_layer_csv_layer.CsvLayer.md#checkvisibility)
- [clearFeatureCache](geo_layer_csv_layer.CsvLayer.md#clearfeaturecache)
- [controlAvailable](geo_layer_csv_layer.CsvLayer.md#controlavailable)
- [extractLayerMetadata](geo_layer_csv_layer.CsvLayer.md#extractlayermetadata)
- [getAttributes](geo_layer_csv_layer.CsvLayer.md#getattributes)
- [getCombinedSqlFilter](geo_layer_csv_layer.CsvLayer.md#getcombinedsqlfilter)
- [getFilterOIDs](geo_layer_csv_layer.CsvLayer.md#getfilteroids)
- [getGraphic](geo_layer_csv_layer.CsvLayer.md#getgraphic)
- [getIcon](geo_layer_csv_layer.CsvLayer.md#geticon)
- [getLayerTree](geo_layer_csv_layer.CsvLayer.md#getlayertree)
- [getSqlFilter](geo_layer_csv_layer.CsvLayer.md#getsqlfilter)
- [getSublayer](geo_layer_csv_layer.CsvLayer.md#getsublayer)
- [getTabularAttributes](geo_layer_csv_layer.CsvLayer.md#gettabularattributes)
- [initiate](geo_layer_csv_layer.CsvLayer.md#initiate)
- [isOffscale](geo_layer_csv_layer.CsvLayer.md#isoffscale)
- [loadFeatureCount](geo_layer_csv_layer.CsvLayer.md#loadfeaturecount)
- [loadLayerMetadata](geo_layer_csv_layer.CsvLayer.md#loadlayermetadata)
- [loadPromise](geo_layer_csv_layer.CsvLayer.md#loadpromise)
- [makeEsriLayerConfig](geo_layer_csv_layer.CsvLayer.md#makeesrilayerconfig)
- [mapCheck](geo_layer_csv_layer.CsvLayer.md#mapcheck)
- [noLayerErr](geo_layer_csv_layer.CsvLayer.md#nolayererr)
- [notLoadedErr](geo_layer_csv_layer.CsvLayer.md#notloadederr)
- [onError](geo_layer_csv_layer.CsvLayer.md#onerror)
- [onInitiate](geo_layer_csv_layer.CsvLayer.md#oninitiate)
- [onLoad](geo_layer_csv_layer.CsvLayer.md#onload)
- [onLoadActions](geo_layer_csv_layer.CsvLayer.md#onloadactions)
- [processFieldMetadata](geo_layer_csv_layer.CsvLayer.md#processfieldmetadata)
- [queryFeatures](geo_layer_csv_layer.CsvLayer.md#queryfeatures)
- [queryFeaturesDiscrete](geo_layer_csv_layer.CsvLayer.md#queryfeaturesdiscrete)
- [queryOIDs](geo_layer_csv_layer.CsvLayer.md#queryoids)
- [reload](geo_layer_csv_layer.CsvLayer.md#reload)
- [runIdentify](geo_layer_csv_layer.CsvLayer.md#runidentify)
- [setCustomParameter](geo_layer_csv_layer.CsvLayer.md#setcustomparameter)
- [setSqlFilter](geo_layer_csv_layer.CsvLayer.md#setsqlfilter)
- [startTimer](geo_layer_csv_layer.CsvLayer.md#starttimer)
- [stopTimer](geo_layer_csv_layer.CsvLayer.md#stoptimer)
- [stubError](geo_layer_csv_layer.CsvLayer.md#stuberror)
- [terminate](geo_layer_csv_layer.CsvLayer.md#terminate)
- [updateDrawState](geo_layer_csv_layer.CsvLayer.md#updatedrawstate)
- [updateInitiationState](geo_layer_csv_layer.CsvLayer.md#updateinitiationstate)
- [updateLayerState](geo_layer_csv_layer.CsvLayer.md#updatelayerstate)
- [zoomToLayerBoundary](geo_layer_csv_layer.CsvLayer.md#zoomtolayerboundary)
- [zoomToVisibleScale](geo_layer_csv_layer.CsvLayer.md#zoomtovisiblescale)

## Constructors

### constructor

• **new CsvLayer**(`rampConfig`, `$iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rampConfig` | [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md) |
| `$iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[FileLayer](geo_layer_file_layer.FileLayer.md).[constructor](geo_layer_file_layer.FileLayer.md#constructor)

#### Defined in

[src/geo/layer/csv-layer.ts:5](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/csv-layer.ts#L5)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[$iApi](geo_layer_file_layer.FileLayer.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### \_drawOrder

• **\_drawOrder**: [`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_drawOrder](geo_layer_file_layer.FileLayer.md#_draworder)

#### Defined in

[src/geo/layer/common-layer.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L52)

___

### \_lastFilterUpdate

• **\_lastFilterUpdate**: `string` = `''`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_lastFilterUpdate](geo_layer_file_layer.FileLayer.md#_lastfilterupdate)

#### Defined in

[src/geo/layer/common-layer.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L54)

___

### \_mouseTolerance

• **\_mouseTolerance**: `number`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_mouseTolerance](geo_layer_file_layer.FileLayer.md#_mousetolerance)

#### Defined in

[src/geo/layer/common-layer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L50)

___

### \_parentLayer

• `Protected` **\_parentLayer**: `undefined` \| [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_parentLayer](geo_layer_file_layer.FileLayer.md#_parentlayer)

#### Defined in

[src/geo/layer/layer-instance.ts:216](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L216)

___

### \_scaleSet

• **\_scaleSet**: [`ScaleSet`](geo_api_layer_scale_set.ScaleSet.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_scaleSet](geo_layer_file_layer.FileLayer.md#_scaleset)

#### Defined in

[src/geo/layer/common-layer.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L49)

___

### \_serverVisibility

• **\_serverVisibility**: `undefined` \| `boolean`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_serverVisibility](geo_layer_file_layer.FileLayer.md#_servervisibility)

#### Defined in

[src/geo/layer/common-layer.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L48)

___

### \_sublayers

• `Protected` **\_sublayers**: [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)[]

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_sublayers](geo_layer_file_layer.FileLayer.md#_sublayers)

#### Defined in

[src/geo/layer/layer-instance.ts:217](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L217)

___

### \_touchTolerance

• **\_touchTolerance**: `number`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[_touchTolerance](geo_layer_file_layer.FileLayer.md#_touchtolerance)

#### Defined in

[src/geo/layer/common-layer.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L51)

___

### attLoader

• **attLoader**: `undefined` \| [`AttributeLoaderBase`](geo_utils_attribute.AttributeLoaderBase.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[attLoader](geo_layer_file_layer.FileLayer.md#attloader)

#### Defined in

[src/geo/layer/attrib-layer.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L49)

___

### config

• **config**: `any` = `{}`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[config](geo_layer_file_layer.FileLayer.md#config)

#### Defined in

[src/geo/layer/layer-instance.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L43)

___

### dataFormat

• **dataFormat**: [`DataFormat`](../enums/geo_api_geo_defs.DataFormat.md)

The type of spatial data used to generate layer content

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[dataFormat](geo_layer_file_layer.FileLayer.md#dataformat)

#### Defined in

[src/geo/layer/layer-instance.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L96)

___

### drawState

• **drawState**: [`DrawState`](../enums/geo_api_geo_defs.DrawState.md)

State of drawing / refreshing data for a layer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[drawState](geo_layer_file_layer.FileLayer.md#drawstate)

#### Defined in

[src/geo/layer/layer-instance.ts:76](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L76)

___

### esriFields

• **esriFields**: [`EsriField`](geo_esri.EsriField.md)[]

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriFields](geo_layer_file_layer.FileLayer.md#esrifields)

#### Defined in

[src/geo/layer/attrib-layer.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L47)

___

### esriJson

• `Protected` **esriJson**: `undefined` \| `FeatureLayerProperties`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriJson](geo_layer_file_layer.FileLayer.md#esrijson)

#### Defined in

[src/geo/layer/file-layer.ts:77](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L77)

___

### esriLayer

• **esriLayer**: `undefined` \| [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

The internal ESRI API layer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriLayer](geo_layer_file_layer.FileLayer.md#esrilayer)

#### Defined in

[src/geo/layer/file-layer.ts:74](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L74)

___

### esriSubLayer

• **esriSubLayer**: `undefined` \| [`EsriSublayer`](geo_esri.EsriSublayer.md)

The internal ESRI API sublayer. Valid only by sublayers

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriSubLayer](geo_layer_file_layer.FileLayer.md#esrisublayer)

#### Defined in

[src/geo/layer/layer-instance.ts:204](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L204)

___

### esriView

• **esriView**: `undefined` \| `FeatureLayerView`

The internal ESRI API layer view

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriView](geo_layer_file_layer.FileLayer.md#esriview)

#### Defined in

[src/geo/layer/file-layer.ts:75](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L75)

___

### esriWatches

• **esriWatches**: `WatchHandle`[]

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[esriWatches](geo_layer_file_layer.FileLayer.md#esriwatches)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[expectedTime](geo_layer_file_layer.FileLayer.md#expectedtime)

#### Defined in

[src/geo/layer/layer-instance.ts:131](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L131)

___

### extent

• **extent**: `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

The extent of the layer on the map

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[extent](geo_layer_file_layer.FileLayer.md#extent)

#### Defined in

[src/geo/layer/layer-instance.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L214)

___

### featureCount

• **featureCount**: `number`

Feature count (-1 represents undefined / unknown)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[featureCount](geo_layer_file_layer.FileLayer.md#featurecount)

#### Defined in

[src/geo/layer/layer-instance.ts:111](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L111)

___

### fieldList

• **fieldList**: `string`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[fieldList](geo_layer_file_layer.FileLayer.md#fieldlist)

#### Defined in

[src/geo/layer/attrib-layer.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L48)

___

### fields

• **fields**: [`FieldDefinition`](../interfaces/geo_api_geo_defs.FieldDefinition.md)[]

Array of field definitions about the given layer's fields. Non-feature layers will have empty arrays.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[fields](geo_layer_file_layer.FileLayer.md#fields)

#### Defined in

[src/geo/layer/layer-instance.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L116)

___

### filter

• `Protected` **filter**: [`Filter`](geo_api_layer_filter.Filter.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[filter](geo_layer_file_layer.FileLayer.md#filter)

#### Defined in

[src/geo/layer/attrib-layer.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L53)

___

### geomType

• **geomType**: [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

The geometry type of the layer.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[geomType](geo_layer_file_layer.FileLayer.md#geomtype)

#### Defined in

[src/geo/layer/attrib-layer.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L46)

___

### hovertips

• **hovertips**: `boolean`

If the layer should show hovertips on the map

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[hovertips](geo_layer_file_layer.FileLayer.md#hovertips)

#### Defined in

[src/geo/layer/layer-instance.ts:179](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L179)

___

### id

• **id**: `string`

ID of this layer. Also known as the layerId.

**`Memberof`**

LayerInstance

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[id](geo_layer_file_layer.FileLayer.md#id)

#### Defined in

[src/geo/layer/layer-instance.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L51)

___

### identify

• **identify**: `boolean`

If the layer is set to participate in identify requests

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[identify](geo_layer_file_layer.FileLayer.md#identify)

#### Defined in

[src/geo/layer/layer-instance.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L169)

___

### identifyMode

• **identifyMode**: [`LayerIdentifyMode`](../enums/geo_api_geo_defs.LayerIdentifyMode.md)

The type of logic used to identify items on the layer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[identifyMode](geo_layer_file_layer.FileLayer.md#identifymode)

#### Defined in

[src/geo/layer/layer-instance.ts:174](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L174)

___

### initiationState

• **initiationState**: [`InitiationState`](../enums/geo_api_geo_defs.InitiationState.md)

State of the initiation / termination process of the layer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[initiationState](geo_layer_file_layer.FileLayer.md#initiationstate)

#### Defined in

[src/geo/layer/layer-instance.ts:71](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L71)

___

### isCosmetic

• **isCosmetic**: `boolean`

If the layer is non-interactive and only displays content on the map

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[isCosmetic](geo_layer_file_layer.FileLayer.md#iscosmetic)

#### Defined in

[src/geo/layer/layer-instance.ts:159](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L159)

___

### isFile

• **isFile**: `boolean`

If the layer was sourced from a file or a WFS source (which disconnects after load).

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[isFile](geo_layer_file_layer.FileLayer.md#isfile)

#### Defined in

[src/geo/layer/layer-instance.ts:154](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L154)

___

### isRemoved

• **isRemoved**: `boolean`

Tracks if layer is removed from map. Is false during the period "before" the layer gets added to map.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[isRemoved](geo_layer_file_layer.FileLayer.md#isremoved)

#### Defined in

[src/geo/layer/layer-instance.ts:149](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L149)

___

### isSublayer

• **isSublayer**: `boolean`

If the layer is a Sublayer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[isSublayer](geo_layer_file_layer.FileLayer.md#issublayer)

#### Defined in

[src/geo/layer/layer-instance.ts:144](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L144)

___

### layerFormat

• **layerFormat**: [`LayerFormat`](../enums/geo_api_geo_defs.LayerFormat.md)

How the layer is instantiated in the map stack

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[layerFormat](geo_layer_file_layer.FileLayer.md#layerformat)

#### Defined in

[src/geo/layer/layer-instance.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L91)

___

### layerIdx

• **layerIdx**: `number`

Index of the layer. Aligns to index of arcgis server, or defaults to 0 on other layers

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[layerIdx](geo_layer_file_layer.FileLayer.md#layeridx)

#### Defined in

[src/geo/layer/layer-instance.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L81)

___

### layerState

• **layerState**: [`LayerState`](../enums/geo_api_geo_defs.LayerState.md)

State of the actual layer on the map, such as loading, loaded, error'd.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[layerState](geo_layer_file_layer.FileLayer.md#layerstate)

#### Defined in

[src/geo/layer/layer-instance.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L66)

___

### layerTree

• `Protected` **layerTree**: [`TreeNode`](geo_api_layer_tree_node.TreeNode.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[layerTree](geo_layer_file_layer.FileLayer.md#layertree)

#### Defined in

[src/geo/layer/common-layer.ts:62](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L62)

___

### layerType

• **layerType**: [`LayerType`](../enums/geo_api_geo_defs.LayerType.md)

Type of layer this is (describes the overall layer)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[layerType](geo_layer_file_layer.FileLayer.md#layertype)

#### Defined in

[src/geo/layer/layer-instance.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L86)

___

### legend

• **legend**: [`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]

Legend symbols of the layer

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[legend](geo_layer_file_layer.FileLayer.md#legend)

#### Defined in

[src/geo/layer/layer-instance.ts:189](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L189)

___

### loadDefProm

• `Protected` **loadDefProm**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[loadDefProm](geo_layer_file_layer.FileLayer.md#loaddefprom)

#### Defined in

[src/geo/layer/common-layer.ts:58](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L58)

___

### loadPromFulfilled

• `Protected` **loadPromFulfilled**: `boolean`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[loadPromFulfilled](geo_layer_file_layer.FileLayer.md#loadpromfulfilled)

#### Defined in

[src/geo/layer/common-layer.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L61)

___

### maxLoadTime

• **maxLoadTime**: `number`

How long layer can load for before error (milliseconds)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[maxLoadTime](geo_layer_file_layer.FileLayer.md#maxloadtime)

#### Defined in

[src/geo/layer/layer-instance.ts:194](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L194)

___

### name

• **name**: `string`

The name of the layer.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[name](geo_layer_file_layer.FileLayer.md#name)

#### Defined in

[src/geo/layer/layer-instance.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L61)

___

### nameField

• **nameField**: `string`

Field name that contains value considered the name of a feature. Not applicable for non-feature layers.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[nameField](geo_layer_file_layer.FileLayer.md#namefield)

#### Defined in

[src/geo/layer/layer-instance.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L121)

___

### oidField

• **oidField**: `string`

Field name that contains the object ID of a feature. Not applicable for non-feature layers.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[oidField](geo_layer_file_layer.FileLayer.md#oidfield)

#### Defined in

[src/geo/layer/layer-instance.ts:126](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L126)

___

### origRampConfig

• `Protected` **origRampConfig**: [`RampLayerConfig`](../interfaces/geo_api_geo_defs.RampLayerConfig.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[origRampConfig](geo_layer_file_layer.FileLayer.md#origrampconfig)

#### Defined in

[src/geo/layer/common-layer.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L56)

___

### quickCache

• `Protected` **quickCache**: `undefined` \| [`QuickCache`](geo_utils_attribute.QuickCache.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[quickCache](geo_layer_file_layer.FileLayer.md#quickcache)

#### Defined in

[src/geo/layer/attrib-layer.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L52)

___

### renderer

• **renderer**: `undefined` \| [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[renderer](geo_layer_file_layer.FileLayer.md#renderer)

#### Defined in

[src/geo/layer/attrib-layer.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L50)

___

### serviceUrl

• **serviceUrl**: `string`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[serviceUrl](geo_layer_file_layer.FileLayer.md#serviceurl)

#### Defined in

[src/geo/layer/attrib-layer.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L51)

___

### sourceGeoJson

• `Protected` **sourceGeoJson**: `undefined` \| `string` \| `object`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[sourceGeoJson](geo_layer_file_layer.FileLayer.md#sourcegeojson)

#### Defined in

[src/geo/layer/file-layer.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L81)

___

### supportsFeatures

• **supportsFeatures**: `boolean`

If the layer type can support Feature type requests and operations

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[supportsFeatures](geo_layer_file_layer.FileLayer.md#supportsfeatures)

#### Defined in

[src/geo/layer/layer-instance.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L106)

___

### supportsIdentify

• **supportsIdentify**: `boolean`

If the layer type can support an identify request

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[supportsIdentify](geo_layer_file_layer.FileLayer.md#supportsidentify)

#### Defined in

[src/geo/layer/layer-instance.ts:101](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L101)

___

### supportsSublayers

• **supportsSublayers**: `boolean`

If the layer has Sublayers

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[supportsSublayers](geo_layer_file_layer.FileLayer.md#supportssublayers)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[timers](geo_layer_file_layer.FileLayer.md#timers)

#### Defined in

[src/geo/layer/common-layer.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L44)

___

### tooltipField

• **tooltipField**: `string`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[tooltipField](geo_layer_file_layer.FileLayer.md#tooltipfield)

#### Defined in

[src/geo/layer/file-layer.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L83)

___

### uid

• **uid**: `string`

Unique identifier for this layer. Randomly generated at runtime.

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[uid](geo_layer_file_layer.FileLayer.md#uid)

#### Defined in

[src/geo/layer/layer-instance.ts:56](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L56)

___

### userAdded

• **userAdded**: `boolean`

If the layer was added by user interaction during the session

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[userAdded](geo_layer_file_layer.FileLayer.md#useradded)

#### Defined in

[src/geo/layer/layer-instance.ts:164](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L164)

___

### viewDefProm

• `Protected` **viewDefProm**: [`DefPromise`](geo_api_utils_promise.DefPromise.md)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[viewDefProm](geo_layer_file_layer.FileLayer.md#viewdefprom)

#### Defined in

[src/geo/layer/common-layer.ts:59](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L59)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

FileLayer.$element

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

FileLayer.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

___

### drawOrder

• `get` **drawOrder**(): [`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

Returns an array describing the draw order of features. Raster layers will have empty arrays

#### Returns

[`DrawOrder`](../interfaces/geo_api_geo_defs.DrawOrder.md)[]

#### Inherited from

FileLayer.drawOrder

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

FileLayer.isLoaded

#### Defined in

[src/geo/layer/common-layer.ts:471](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L471)

___

### layerExists

• `get` **layerExists**(): `boolean`

Indicates if the Esri map layer exists

#### Returns

`boolean`

#### Inherited from

FileLayer.layerExists

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

FileLayer.mouseTolerance

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

FileLayer.mouseTolerance

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

FileLayer.opacity

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

FileLayer.opacity

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

FileLayer.parentLayer

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

FileLayer.parentLayer

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

FileLayer.scaleSet

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

FileLayer.scaleSet

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

FileLayer.sublayers

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

FileLayer.touchTolerance

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

FileLayer.touchTolerance

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

FileLayer.visibility

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

FileLayer.visibility

#### Defined in

[src/geo/layer/common-layer.ts:704](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L704)

## Methods

### abortAttributeLoad

▸ **abortAttributeLoad**(): `void`

Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[abortAttributeLoad](geo_layer_file_layer.FileLayer.md#abortattributeload)

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

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[applySqlFilter](geo_layer_file_layer.FileLayer.md#applysqlfilter)

#### Defined in

[src/geo/layer/file-layer.ts:549](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L549)

___

### canIdentify

▸ **canIdentify**(): `boolean`

Indicates if layer should participate in an identify request.

#### Returns

`boolean`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[canIdentify](geo_layer_file_layer.FileLayer.md#canidentify)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[checkVisibility](geo_layer_file_layer.FileLayer.md#checkvisibility)

#### Defined in

[src/geo/layer/common-layer.ts:719](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L719)

___

### clearFeatureCache

▸ **clearFeatureCache**(): `void`

Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[clearFeatureCache](geo_layer_file_layer.FileLayer.md#clearfeaturecache)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[controlAvailable](geo_layer_file_layer.FileLayer.md#controlavailable)

#### Defined in

[src/geo/layer/layer-instance.ts:718](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/layer-instance.ts#L718)

___

### extractLayerMetadata

▸ **extractLayerMetadata**(): `void`

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[extractLayerMetadata](geo_layer_file_layer.FileLayer.md#extractlayermetadata)

#### Defined in

[src/geo/layer/file-layer.ts:397](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L397)

___

### getAttributes

▸ **getAttributes**(): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

Invokes the process to get the full set of attribute values for the layer.
Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

resolves with set of attribute values

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[getAttributes](geo_layer_file_layer.FileLayer.md#getattributes)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getCombinedSqlFilter](geo_layer_file_layer.FileLayer.md#getcombinedsqlfilter)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getFilterOIDs](geo_layer_file_layer.FileLayer.md#getfilteroids)

#### Defined in

[src/geo/layer/attrib-layer.ts:719](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L719)

___

### getGraphic

▸ **getGraphic**(`objectId`, `opts`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

Fetches a graphic from the given layer.
This overrides the baseclass method, as we are all local and dont need quick caches or server hits

**`Function`**

getGraphic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `number` | ID of object being searched for |
| `opts` | [`GetGraphicParams`](../interfaces/geo_api_geo_defs.GetGraphicParams.md) | object containing option parametrs - map map wrapper object of current map. only required if requesting geometry - getGeom boolean. indicates if return value should have geometry included. default to false - getAttribs boolean. indicates if return value should have attributes included. default to false |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

resolves with a Graphic

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[getGraphic](geo_layer_file_layer.FileLayer.md#getgraphic)

#### Defined in

[src/geo/layer/file-layer.ts:469](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L469)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getIcon](geo_layer_file_layer.FileLayer.md#geticon)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getLayerTree](geo_layer_file_layer.FileLayer.md#getlayertree)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getSqlFilter](geo_layer_file_layer.FileLayer.md#getsqlfilter)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getSublayer](geo_layer_file_layer.FileLayer.md#getsublayer)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[getTabularAttributes](geo_layer_file_layer.FileLayer.md#gettabularattributes)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[initiate](geo_layer_file_layer.FileLayer.md#initiate)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[isOffscale](geo_layer_file_layer.FileLayer.md#isoffscale)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[loadFeatureCount](geo_layer_file_layer.FileLayer.md#loadfeaturecount)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[loadLayerMetadata](geo_layer_file_layer.FileLayer.md#loadlayermetadata)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[loadPromise](geo_layer_file_layer.FileLayer.md#loadpromise)

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

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[makeEsriLayerConfig](geo_layer_file_layer.FileLayer.md#makeesrilayerconfig)

#### Defined in

[src/geo/layer/file-layer.ts:167](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L167)

___

### mapCheck

▸ `Private` **mapCheck**(): `boolean`

Wraps an error test for when someone calls a map dependend function too early

#### Returns

`boolean`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[mapCheck](geo_layer_file_layer.FileLayer.md#mapcheck)

#### Defined in

[src/geo/layer/common-layer.ts:488](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L488)

___

### noLayerErr

▸ `Protected` **noLayerErr**(): `void`

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[noLayerErr](geo_layer_file_layer.FileLayer.md#nolayererr)

#### Defined in

[src/geo/layer/common-layer.ts:120](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L120)

___

### notLoadedErr

▸ `Protected` **notLoadedErr**(): `void`

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[notLoadedErr](geo_layer_file_layer.FileLayer.md#notloadederr)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[onError](geo_layer_file_layer.FileLayer.md#onerror)

#### Defined in

[src/geo/layer/common-layer.ts:402](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L402)

___

### onInitiate

▸ `Protected` **onInitiate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[FileLayer](geo_layer_file_layer.FileLayer.md).[onInitiate](geo_layer_file_layer.FileLayer.md#oninitiate)

#### Defined in

[src/geo/layer/csv-layer.ts:10](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/csv-layer.ts#L10)

___

### onLoad

▸ **onLoad**(): `void`

Initiates actions after layer load.
Should generally only be called internally by the RAMP core.

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[onLoad](geo_layer_file_layer.FileLayer.md#onload)

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

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[onLoadActions](geo_layer_file_layer.FileLayer.md#onloadactions)

#### Defined in

[src/geo/layer/file-layer.ts:227](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L227)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[processFieldMetadata](geo_layer_file_layer.FileLayer.md#processfieldmetadata)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[queryFeatures](geo_layer_file_layer.FileLayer.md#queryfeatures)

#### Defined in

[src/geo/layer/file-layer.ts:515](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L515)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[queryFeaturesDiscrete](geo_layer_file_layer.FileLayer.md#queryfeaturesdiscrete)

#### Defined in

[src/geo/layer/attrib-layer.ts:840](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/attrib-layer.ts#L840)

___

### queryOIDs

▸ **queryOIDs**(`options`): `Promise`<`number`[]\>

Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`QueryFeaturesParams`](../interfaces/geo_api_geo_defs.QueryFeaturesParams.md) |

#### Returns

`Promise`<`number`[]\>

resolving with an array of numbers (object ids)

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[queryOIDs](geo_layer_file_layer.FileLayer.md#queryoids)

#### Defined in

[src/geo/layer/file-layer.ts:529](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L529)

___

### reload

▸ **reload**(): `Promise`<`void`\>

Attempts to reload the internal layer object (ESRI).
Effectively doing a terminate then initiate, and removing/re-adding layer to the map.

#### Returns

`Promise`<`void`\>

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[reload](geo_layer_file_layer.FileLayer.md#reload)

#### Defined in

[src/geo/layer/file-layer.ts:103](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L103)

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

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[runIdentify](geo_layer_file_layer.FileLayer.md#runidentify)

#### Defined in

[src/geo/layer/file-layer.ts:287](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/file-layer.ts#L287)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[setCustomParameter](geo_layer_file_layer.FileLayer.md#setcustomparameter)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[setSqlFilter](geo_layer_file_layer.FileLayer.md#setsqlfilter)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[startTimer](geo_layer_file_layer.FileLayer.md#starttimer)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[stopTimer](geo_layer_file_layer.FileLayer.md#stoptimer)

#### Defined in

[src/geo/layer/common-layer.ts:926](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L926)

___

### stubError

▸ `Protected` **stubError**(): `void`

#### Returns

`void`

#### Inherited from

[FileLayer](geo_layer_file_layer.FileLayer.md).[stubError](geo_layer_file_layer.FileLayer.md#stuberror)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[terminate](geo_layer_file_layer.FileLayer.md#terminate)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[updateDrawState](geo_layer_file_layer.FileLayer.md#updatedrawstate)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[updateInitiationState](geo_layer_file_layer.FileLayer.md#updateinitiationstate)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[updateLayerState](geo_layer_file_layer.FileLayer.md#updatelayerstate)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[zoomToLayerBoundary](geo_layer_file_layer.FileLayer.md#zoomtolayerboundary)

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

[FileLayer](geo_layer_file_layer.FileLayer.md).[zoomToVisibleScale](geo_layer_file_layer.FileLayer.md#zoomtovisiblescale)

#### Defined in

[src/geo/layer/common-layer.ts:562](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/layer/common-layer.ts#L562)
