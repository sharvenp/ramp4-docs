[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriFeatureLayer

# Class: EsriFeatureLayer

[geo/esri](../modules/geo_esri.md).EsriFeatureLayer

## Hierarchy

- `Layer`

- `OrderedLayer`

- `PortalLayer`

- `ScaleRangeLayer`

- `TemporalLayer`

- `BlendLayer`

- `CustomParametersMixin`

- `APIKeyMixin`

- `FeatureEffectLayer`

- `FeatureReductionLayer`

- `PublishableLayer`

- `FeatureLayerBase`

  ↳ **`EsriFeatureLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriFeatureLayer.md#constructor)

### Properties

- [apiKey](geo_esri.EsriFeatureLayer.md#apikey)
- [blendMode](geo_esri.EsriFeatureLayer.md#blendmode)
- [capabilities](geo_esri.EsriFeatureLayer.md#capabilities)
- [copyright](geo_esri.EsriFeatureLayer.md#copyright)
- [customParameters](geo_esri.EsriFeatureLayer.md#customparameters)
- [datesInUnknownTimezone](geo_esri.EsriFeatureLayer.md#datesinunknowntimezone)
- [declaredClass](geo_esri.EsriFeatureLayer.md#declaredclass)
- [definitionExpression](geo_esri.EsriFeatureLayer.md#definitionexpression)
- [destroyed](geo_esri.EsriFeatureLayer.md#destroyed)
- [displayField](geo_esri.EsriFeatureLayer.md#displayfield)
- [dynamicDataSource](geo_esri.EsriFeatureLayer.md#dynamicdatasource)
- [editFieldsInfo](geo_esri.EsriFeatureLayer.md#editfieldsinfo)
- [editingEnabled](geo_esri.EsriFeatureLayer.md#editingenabled)
- [editingInfo](geo_esri.EsriFeatureLayer.md#editinginfo)
- [effect](geo_esri.EsriFeatureLayer.md#effect)
- [effectiveCapabilities](geo_esri.EsriFeatureLayer.md#effectivecapabilities)
- [effectiveEditingEnabled](geo_esri.EsriFeatureLayer.md#effectiveeditingenabled)
- [elevationInfo](geo_esri.EsriFeatureLayer.md#elevationinfo)
- [featureEffect](geo_esri.EsriFeatureLayer.md#featureeffect)
- [featureReduction](geo_esri.EsriFeatureLayer.md#featurereduction)
- [fields](geo_esri.EsriFeatureLayer.md#fields)
- [fieldsIndex](geo_esri.EsriFeatureLayer.md#fieldsindex)
- [floorInfo](geo_esri.EsriFeatureLayer.md#floorinfo)
- [formTemplate](geo_esri.EsriFeatureLayer.md#formtemplate)
- [fullExtent](geo_esri.EsriFeatureLayer.md#fullextent)
- [gdbVersion](geo_esri.EsriFeatureLayer.md#gdbversion)
- [geometryFieldsInfo](geo_esri.EsriFeatureLayer.md#geometryfieldsinfo)
- [geometryType](geo_esri.EsriFeatureLayer.md#geometrytype)
- [hasM](geo_esri.EsriFeatureLayer.md#hasm)
- [hasZ](geo_esri.EsriFeatureLayer.md#hasz)
- [historicMoment](geo_esri.EsriFeatureLayer.md#historicmoment)
- [id](geo_esri.EsriFeatureLayer.md#id)
- [initialized](geo_esri.EsriFeatureLayer.md#initialized)
- [isTable](geo_esri.EsriFeatureLayer.md#istable)
- [labelingInfo](geo_esri.EsriFeatureLayer.md#labelinginfo)
- [labelsVisible](geo_esri.EsriFeatureLayer.md#labelsvisible)
- [layerId](geo_esri.EsriFeatureLayer.md#layerid)
- [legendEnabled](geo_esri.EsriFeatureLayer.md#legendenabled)
- [listMode](geo_esri.EsriFeatureLayer.md#listmode)
- [loadError](geo_esri.EsriFeatureLayer.md#loaderror)
- [loadStatus](geo_esri.EsriFeatureLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriFeatureLayer.md#loadwarnings)
- [loaded](geo_esri.EsriFeatureLayer.md#loaded)
- [maxScale](geo_esri.EsriFeatureLayer.md#maxscale)
- [minScale](geo_esri.EsriFeatureLayer.md#minscale)
- [objectIdField](geo_esri.EsriFeatureLayer.md#objectidfield)
- [opacity](geo_esri.EsriFeatureLayer.md#opacity)
- [orderBy](geo_esri.EsriFeatureLayer.md#orderby)
- [outFields](geo_esri.EsriFeatureLayer.md#outfields)
- [popupEnabled](geo_esri.EsriFeatureLayer.md#popupenabled)
- [popupTemplate](geo_esri.EsriFeatureLayer.md#popuptemplate)
- [portalItem](geo_esri.EsriFeatureLayer.md#portalitem)
- [publishingInfo](geo_esri.EsriFeatureLayer.md#publishinginfo)
- [refreshInterval](geo_esri.EsriFeatureLayer.md#refreshinterval)
- [relationships](geo_esri.EsriFeatureLayer.md#relationships)
- [renderer](geo_esri.EsriFeatureLayer.md#renderer)
- [returnM](geo_esri.EsriFeatureLayer.md#returnm)
- [returnZ](geo_esri.EsriFeatureLayer.md#returnz)
- [screenSizePerspectiveEnabled](geo_esri.EsriFeatureLayer.md#screensizeperspectiveenabled)
- [serviceDefinitionExpression](geo_esri.EsriFeatureLayer.md#servicedefinitionexpression)
- [source](geo_esri.EsriFeatureLayer.md#source)
- [sourceJSON](geo_esri.EsriFeatureLayer.md#sourcejson)
- [spatialReference](geo_esri.EsriFeatureLayer.md#spatialreference)
- [templates](geo_esri.EsriFeatureLayer.md#templates)
- [timeExtent](geo_esri.EsriFeatureLayer.md#timeextent)
- [timeInfo](geo_esri.EsriFeatureLayer.md#timeinfo)
- [timeOffset](geo_esri.EsriFeatureLayer.md#timeoffset)
- [title](geo_esri.EsriFeatureLayer.md#title)
- [type](geo_esri.EsriFeatureLayer.md#type)
- [typeIdField](geo_esri.EsriFeatureLayer.md#typeidfield)
- [types](geo_esri.EsriFeatureLayer.md#types)
- [url](geo_esri.EsriFeatureLayer.md#url)
- [useViewTime](geo_esri.EsriFeatureLayer.md#useviewtime)
- [version](geo_esri.EsriFeatureLayer.md#version)
- [visible](geo_esri.EsriFeatureLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriFeatureLayer.md#_get)
- [\_set](geo_esri.EsriFeatureLayer.md#_set)
- [addAttachment](geo_esri.EsriFeatureLayer.md#addattachment)
- [addHandles](geo_esri.EsriFeatureLayer.md#addhandles)
- [applyEdits](geo_esri.EsriFeatureLayer.md#applyedits)
- [cancelLoad](geo_esri.EsriFeatureLayer.md#cancelload)
- [clone](geo_esri.EsriFeatureLayer.md#clone)
- [createLayerView](geo_esri.EsriFeatureLayer.md#createlayerview)
- [createPopupTemplate](geo_esri.EsriFeatureLayer.md#createpopuptemplate)
- [createQuery](geo_esri.EsriFeatureLayer.md#createquery)
- [deleteAttachments](geo_esri.EsriFeatureLayer.md#deleteattachments)
- [destroy](geo_esri.EsriFeatureLayer.md#destroy)
- [emit](geo_esri.EsriFeatureLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriFeatureLayer.md#fetchattributiondata)
- [get](geo_esri.EsriFeatureLayer.md#get)
- [getFeatureType](geo_esri.EsriFeatureLayer.md#getfeaturetype)
- [getField](geo_esri.EsriFeatureLayer.md#getfield)
- [getFieldDomain](geo_esri.EsriFeatureLayer.md#getfielddomain)
- [hasEventListener](geo_esri.EsriFeatureLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriFeatureLayer.md#hashandles)
- [isFulfilled](geo_esri.EsriFeatureLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriFeatureLayer.md#isrejected)
- [isResolved](geo_esri.EsriFeatureLayer.md#isresolved)
- [load](geo_esri.EsriFeatureLayer.md#load)
- [notifyChange](geo_esri.EsriFeatureLayer.md#notifychange)
- [on](geo_esri.EsriFeatureLayer.md#on)
- [own](geo_esri.EsriFeatureLayer.md#own)
- [queryAttachments](geo_esri.EsriFeatureLayer.md#queryattachments)
- [queryExtent](geo_esri.EsriFeatureLayer.md#queryextent)
- [queryFeatureCount](geo_esri.EsriFeatureLayer.md#queryfeaturecount)
- [queryFeatures](geo_esri.EsriFeatureLayer.md#queryfeatures)
- [queryObjectIds](geo_esri.EsriFeatureLayer.md#queryobjectids)
- [queryRelatedFeatures](geo_esri.EsriFeatureLayer.md#queryrelatedfeatures)
- [queryRelatedFeaturesCount](geo_esri.EsriFeatureLayer.md#queryrelatedfeaturescount)
- [queryTopFeatureCount](geo_esri.EsriFeatureLayer.md#querytopfeaturecount)
- [queryTopFeatures](geo_esri.EsriFeatureLayer.md#querytopfeatures)
- [queryTopFeaturesExtent](geo_esri.EsriFeatureLayer.md#querytopfeaturesextent)
- [queryTopObjectIds](geo_esri.EsriFeatureLayer.md#querytopobjectids)
- [refresh](geo_esri.EsriFeatureLayer.md#refresh)
- [removeHandles](geo_esri.EsriFeatureLayer.md#removehandles)
- [save](geo_esri.EsriFeatureLayer.md#save)
- [saveAs](geo_esri.EsriFeatureLayer.md#saveas)
- [set](geo_esri.EsriFeatureLayer.md#set)
- [updateAttachment](geo_esri.EsriFeatureLayer.md#updateattachment)
- [watch](geo_esri.EsriFeatureLayer.md#watch)
- [when](geo_esri.EsriFeatureLayer.md#when)
- [fromJSON](geo_esri.EsriFeatureLayer.md#fromjson)

## Constructors

### constructor

• **new EsriFeatureLayer**(`properties?`)

A FeatureLayer is a single layer that can be created from a [Map Service](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm) or [Feature Service](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-feature-service-.htm); ArcGIS Online or ArcGIS Enterprise portal items; or from an array of client-side features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `FeatureLayerProperties` |

#### Inherited from

Layer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10777

## Properties

### apiKey

• **apiKey**: `string`

An authorization string used to access a resource or service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-APIKeyMixin.html#apiKey)

#### Inherited from

APIKeyMixin.apiKey

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14632

___

### blendMode

• **blendMode**: ``"screen"`` \| ``"average"`` \| ``"color-burn"`` \| ``"color-dodge"`` \| ``"color"`` \| ``"darken"`` \| ``"destination-atop"`` \| ``"destination-in"`` \| ``"destination-out"`` \| ``"destination-over"`` \| ``"difference"`` \| ``"exclusion"`` \| ``"hard-light"`` \| ``"hue"`` \| ``"invert"`` \| ``"lighten"`` \| ``"lighter"`` \| ``"luminosity"`` \| ``"minus"`` \| ``"multiply"`` \| ``"normal"`` \| ``"overlay"`` \| ``"plus"`` \| ``"reflect"`` \| ``"saturation"`` \| ``"soft-light"`` \| ``"source-atop"`` \| ``"source-in"`` \| ``"source-out"`` \| ``"vivid-light"`` \| ``"xor"``

Blend modes are used to blend layers together to create an interesting effect in a layer, or even to produce what seems like a new layer.

**`Default`**

```ts
normal

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-BlendLayer.html#blendMode)
```

#### Inherited from

BlendLayer.blendMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15534

___

### capabilities

• `Readonly` **capabilities**: `Capabilities`

Describes the layer's supported capabilities.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#capabilities)

#### Inherited from

FeatureLayerBase.capabilities

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15666

___

### copyright

• **copyright**: `string`

Copyright information for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#copyright)

#### Inherited from

FeatureLayerBase.copyright

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15672

___

### customParameters

• **customParameters**: `any`

A list of custom parameters appended to the URL of all resources fetched by the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-CustomParametersMixin.html#customParameters)

#### Inherited from

CustomParametersMixin.customParameters

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15630

___

### datesInUnknownTimezone

• `Readonly` **datesInUnknownTimezone**: `boolean`

This property is set by the service publisher and indicates that dates should be considered without the local timezone.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#datesInUnknownTimezone)
```

#### Inherited from

FeatureLayerBase.datesInUnknownTimezone

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15680

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Layer.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### definitionExpression

• **definitionExpression**: `string`

The SQL where clause used to filter features on the client.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#definitionExpression)

#### Inherited from

FeatureLayerBase.definitionExpression

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15686

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Layer.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### displayField

• **displayField**: `string`

The name of the layer's primary display field.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#displayField)

#### Inherited from

FeatureLayerBase.displayField

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15692

___

### dynamicDataSource

• **dynamicDataSource**: `DynamicMapLayer` \| `DynamicDataLayer`

An object that allows you to create a dynamic layer with data either from map service sublayers or data from a registered workspace.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#dynamicDataSource)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10660

___

### editFieldsInfo

• `Readonly` **editFieldsInfo**: `EditFieldsInfo`

The editor tracking fields, which record who adds or edits the data through the feature service and when edits are made.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#editFieldsInfo)

#### Inherited from

FeatureLayerBase.editFieldsInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15698

___

### editingEnabled

• **editingEnabled**: `boolean`

Determines if the layer is editable.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#editingEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10668

___

### editingInfo

• `Readonly` **editingInfo**: `EditFieldsInfo`

The editor tracking fields, which record who adds or edits the data through the feature service and when edits are made.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#editingInfo)

#### Inherited from

FeatureLayerBase.editingInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15704

___

### effect

• **effect**: `Effect`

Effect provides various filter functions that can be performed on the layer to achieve different visual effects similar to how image filters work.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-BlendLayer.html#effect)
```

#### Inherited from

BlendLayer.effect

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15572

___

### effectiveCapabilities

• `Readonly` **effectiveCapabilities**: `Capabilities`

Describes effective capabilities of the layer taking in to consideration privileges of the currently signed-in user.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#effectiveCapabilities)

#### Inherited from

FeatureLayerBase.effectiveCapabilities

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15710

___

### effectiveEditingEnabled

• `Readonly` **effectiveEditingEnabled**: `boolean`

Indicates whether the layer is editable taking in to consideration privileges of the currently signed-in user.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#effectiveEditingEnabled)

#### Inherited from

FeatureLayerBase.effectiveEditingEnabled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15716

___

### elevationInfo

• **elevationInfo**: `FeatureLayerBaseElevationInfo`

Specifies how features are placed on the vertical axis (z).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#elevationInfo)

#### Inherited from

FeatureLayerBase.elevationInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15722

___

### featureEffect

• **featureEffect**: `FeatureEffect`

The featureEffect can be used to draw attention features of interest.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureEffectLayer.html#featureEffect)

#### Inherited from

FeatureEffectLayer.featureEffect

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15648

___

### featureReduction

• **featureReduction**: `FeatureReductionBinning` \| `FeatureReductionCluster` \| `FeatureReductionSelection`

Configures the method for reducing the number of point features in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureReductionLayer.html#featureReduction)

#### Inherited from

FeatureReductionLayer.featureReduction

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16190

___

### fields

• **fields**: [`EsriField`](geo_esri.EsriField.md)[]

An array of fields in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#fields)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10674

___

### fieldsIndex

• `Readonly` **fieldsIndex**: `FieldsIndex`

A convenient property that can be used to make case-insensitive lookups for a field by name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#fieldsIndex)

#### Inherited from

FeatureLayerBase.fieldsIndex

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15728

___

### floorInfo

• **floorInfo**: `LayerFloorInfo`

When a feature layer is configured as floor-aware, it has a floorInfo property defined.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#floorInfo)

#### Inherited from

FeatureLayerBase.floorInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15734

___

### formTemplate

• **formTemplate**: `FormTemplate`

The [template](https://developers.arcgis.com/javascript/latest/api-reference/esri-form-FormTemplate.html) used in an associated layer's [FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#formTemplate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10680

___

### fullExtent

• **fullExtent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The full extent of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fullExtent)

#### Inherited from

Layer.fullExtent

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13943

___

### gdbVersion

• **gdbVersion**: `string`

The version of the geodatabase of the feature service data.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#gdbVersion)

#### Inherited from

FeatureLayerBase.gdbVersion

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15746

___

### geometryFieldsInfo

• `Readonly` **geometryFieldsInfo**: `GeometryFieldsInfo`

Provides information on the system maintained area and length fields along with their respective units.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#geometryFieldsInfo)

#### Inherited from

FeatureLayerBase.geometryFieldsInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15752

___

### geometryType

• **geometryType**: ``"point"`` \| ``"multipoint"`` \| ``"polyline"`` \| ``"polygon"`` \| ``"multipatch"`` \| ``"mesh"``

The geometry type of features in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#geometryType)

#### Inherited from

FeatureLayerBase.geometryType

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15758

___

### hasM

• **hasM**: `boolean`

Indicates whether the client-side features in the layer have `M` (measurement) values.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#hasM)
```

#### Inherited from

FeatureLayerBase.hasM

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15766

___

### hasZ

• **hasZ**: `boolean`

Indicates whether the client-side features in the layer have `Z` (elevation) values.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#hasZ)
```

#### Inherited from

FeatureLayerBase.hasZ

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15774

___

### historicMoment

• **historicMoment**: `Date`

The historic moment to query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#historicMoment)

#### Inherited from

FeatureLayerBase.historicMoment

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15780

___

### id

• **id**: `string`

The unique ID assigned to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#id)

#### Inherited from

Layer.id

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13949

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Layer.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### isTable

• `Readonly` **isTable**: `boolean`

Returns `true` if the layer is loaded from a non-spatial table in a service.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#isTable)
```

#### Inherited from

FeatureLayerBase.isTable

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15788

___

### labelingInfo

• **labelingInfo**: `LabelClass`[]

The label definition for this layer, specified as an array of [LabelClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelingInfo)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10686

___

### labelsVisible

• **labelsVisible**: `boolean`

Indicates whether to display labels for this layer.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelsVisible)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10694

___

### layerId

• **layerId**: `number`

The layer ID, or layer index, of a Feature Service layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#layerId)

#### Inherited from

FeatureLayerBase.layerId

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15794

___

### legendEnabled

• **legendEnabled**: `boolean`

Indicates whether the layer will be included in the legend.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#legendEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10702

___

### listMode

• **listMode**: ``"show"`` \| ``"hide"`` \| ``"hide-children"``

Indicates how the layer should display in the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

**`Default`**

```ts
"show"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#listMode)
```

#### Inherited from

Layer.listMode

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13957

___

### loadError

• `Readonly` **loadError**: `Error`

The Error object returned if an error occurred while loading.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadError)
```

#### Inherited from

Layer.loadError

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2200

___

### loadStatus

• `Readonly` **loadStatus**: ``"loaded"`` \| ``"loading"`` \| ``"not-loaded"`` \| ``"failed"``

Represents the status of a [load](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load) operation.

**`Default`**

```ts
not-loaded

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadStatus)
```

#### Inherited from

Layer.loadStatus

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2208

___

### loadWarnings

• `Readonly` **loadWarnings**: `any`[]

A list of warnings which occurred while loading.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#loadWarnings)

#### Inherited from

Layer.loadWarnings

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2214

___

### loaded

• `Readonly` **loaded**: `boolean`

Indicates whether the layer's resources have loaded.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loaded)
```

#### Inherited from

Layer.loaded

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13965

___

### maxScale

• **maxScale**: `number`

The maximum scale (most zoomed in) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ScaleRangeLayer.html#maxScale)
```

#### Inherited from

ScaleRangeLayer.maxScale

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16416

___

### minScale

• **minScale**: `number`

The minimum scale (most zoomed out) at which the layer is visible in the view.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ScaleRangeLayer.html#minScale)
```

#### Inherited from

ScaleRangeLayer.minScale

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16424

___

### objectIdField

• **objectIdField**: `string`

The name of an `oid` [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#fields) containing a unique value or identifier for each feature in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#objectIdField)

#### Inherited from

FeatureLayerBase.objectIdField

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15800

___

### opacity

• **opacity**: `number`

The opacity of the layer.

**`Default`**

```ts
1

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#opacity)
```

#### Inherited from

Layer.opacity

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13973

___

### orderBy

• **orderBy**: `OrderedLayerOrderBy`[]

Determines the order in which features are drawn in the view.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-OrderedLayer.html#orderBy)
```

#### Inherited from

OrderedLayer.orderBy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16311

___

### outFields

• **outFields**: `string`[]

An array of field names from the service to include with each feature.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#outFields)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10710

___

### popupEnabled

• **popupEnabled**: `boolean`

Indicates whether to display popups when features in the layer are clicked.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10718

___

### popupTemplate

• **popupTemplate**: `PopupTemplate`

The popup template for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupTemplate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10724

___

### portalItem

• **portalItem**: `PortalItem`

The portal item from which the layer is loaded.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-PortalLayer.html#portalItem)

#### Inherited from

PortalLayer.portalItem

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16354

___

### publishingInfo

• `Readonly` **publishingInfo**: `PublishingInfo`

Checks layer's publishing status while the layer is being published to the portal.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-PublishableLayer.html#publishingInfo)

#### Inherited from

PublishableLayer.publishingInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16374

___

### refreshInterval

• **refreshInterval**: `number`

Refresh interval of the layer in minutes.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#refreshInterval)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10732

___

### relationships

• `Readonly` **relationships**: `Relationship`[]

Array of [relationships](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Relationship.html) set up for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#relationships)

#### Inherited from

FeatureLayerBase.relationships

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15806

___

### renderer

• **renderer**: [`EsriRenderer`](geo_esri.EsriRenderer.md)

The renderer assigned to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#renderer)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10738

___

### returnM

• **returnM**: `boolean`

When `true`, indicates that M values will be returned.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#returnM)
```

#### Inherited from

FeatureLayerBase.returnM

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15814

___

### returnZ

• **returnZ**: `boolean`

When `true`, indicates that z-values will always be returned.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#returnZ)
```

#### Inherited from

FeatureLayerBase.returnZ

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15822

___

### screenSizePerspectiveEnabled

• **screenSizePerspectiveEnabled**: `boolean`

Apply perspective scaling to screen-size point symbols in a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10746

___

### serviceDefinitionExpression

• `Readonly` **serviceDefinitionExpression**: `string`

The service definition expression limits the features available for display and query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#serviceDefinitionExpression)

#### Inherited from

FeatureLayerBase.serviceDefinitionExpression

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15828

___

### source

• **source**: `Collection`<[`EsriGraphic`](geo_esri.EsriGraphic.md)\>

A collection of [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) objects used to create a FeatureLayer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10752

___

### sourceJSON

• **sourceJSON**: `any`

The [feature service's metadata JSON](https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm) exposed by the ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#sourceJSON)

#### Inherited from

FeatureLayerBase.sourceJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15834

___

### spatialReference

• **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#spatialReference)

#### Inherited from

FeatureLayerBase.spatialReference

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15840

___

### templates

• **templates**: `FeatureTemplate`[]

An array of feature templates defined in the feature layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#templates)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10758

___

### timeExtent

• **timeExtent**: `TimeExtent`

The layer's time extent.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-TemporalLayer.html#timeExtent)
```

#### Inherited from

TemporalLayer.timeExtent

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16552

___

### timeInfo

• **timeInfo**: `TimeInfo`

TimeInfo provides information such as date fields that store [start](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#startField) and [end](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#endField) time for each feature and the [fullTimeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html#fullTimeExtent) for the layer.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-TemporalLayer.html#timeInfo)
```

#### Inherited from

TemporalLayer.timeInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16560

___

### timeOffset

• **timeOffset**: `TimeInterval`

A temporary offset of the time data based on a certain [TimeInterval](https://developers.arcgis.com/javascript/latest/api-reference/esri-TimeInterval.html).

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-TemporalLayer.html#timeOffset)
```

#### Inherited from

TemporalLayer.timeOffset

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16568

___

### title

• **title**: `string`

The title of the layer used to identify it in places such as the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#title)

#### Inherited from

Layer.title

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13979

___

### type

• `Readonly` **type**: ``"feature"``

#### Inherited from

Layer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10759

___

### typeIdField

• **typeIdField**: `string`

The name of the field holding the type ID or subtypes for the features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#typeIdField)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10765

___

### types

• **types**: `FeatureType`[]

An array of subtypes defined in the feature service exposed by ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#types)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10771

___

### url

• **url**: `string`

The absolute URL of the REST endpoint of the layer, non-spatial table or service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#url)

#### Inherited from

FeatureLayerBase.url

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15852

___

### useViewTime

• **useViewTime**: `boolean`

Determines if the layer will update its temporal data based on the view's [timeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#timeExtent).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-TemporalLayer.html#useViewTime)
```

#### Inherited from

TemporalLayer.useViewTime

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16576

___

### version

• `Readonly` **version**: `number`

The version of ArcGIS Server in which the layer is published.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#version)

#### Inherited from

FeatureLayerBase.version

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15858

___

### visible

• **visible**: `boolean`

Indicates if the layer is visible in the [View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html).

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#visible)
```

#### Inherited from

Layer.visible

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14032

## Methods

### \_get

▸ `Protected` **_get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Layer.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:32

▸ `Protected` **_get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Layer.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Inherited from

Layer.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### addAttachment

▸ **addAttachment**(`feature`, `attachment`): `Promise`<`FeatureEditResult`\>

Adds an attachment to a feature.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#addAttachment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |
| `attachment` | `HTMLFormElement` \| `FormData` |

#### Returns

`Promise`<`FeatureEditResult`\>

#### Inherited from

FeatureLayerBase.addAttachment

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15864

___

### addHandles

▸ **addHandles**<`T`\>(`handles`, `groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Layer.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### applyEdits

▸ **applyEdits**(`edits`, `options?`): `Promise`<`EditsResult`\>

Applies edits to features in a layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#applyEdits)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edits` | `FeatureLayerBaseApplyEditsEdits` |
| `options?` | `FeatureLayerBaseApplyEditsOptions` |

#### Returns

`Promise`<`EditsResult`\>

#### Inherited from

FeatureLayerBase.applyEdits

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15870

___

### cancelLoad

▸ **cancelLoad**(): `void`

Cancels a [load()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load) operation if it is already in progress.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#cancelLoad)

#### Returns

`void`

#### Inherited from

Layer.cancelLoad

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2220

___

### clone

▸ **clone**(): [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

Creates a deep clone of this object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#clone)

#### Returns

[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10783

___

### createLayerView

▸ **createLayerView**(`view`, `options?`): `Promise`<`LayerView`\>

Called by the views, such as [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) and [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html), when the layer is added to the [Map.layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) collection and a layer view must be created for it.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#createLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `any` |
| `options?` | `LayerCreateLayerViewOptions` |

#### Returns

`Promise`<`LayerView`\>

#### Inherited from

Layer.createLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14044

___

### createPopupTemplate

▸ **createPopupTemplate**(`options?`): `PopupTemplate`

Creates a popup template for the layer, populated with all the fields of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#createPopupTemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CreatePopupTemplateOptions` |

#### Returns

`PopupTemplate`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10789

___

### createQuery

▸ **createQuery**(): [`EsriQuery`](geo_esri.EsriQuery.md)

Creates query parameter object that can be used to fetch features that satisfy the layer's configurations such as [definitionExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression), [gdbVersion](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#gdbVersion), and [historicMoment](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#historicMoment).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#createQuery)

#### Returns

[`EsriQuery`](geo_esri.EsriQuery.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10795

___

### deleteAttachments

▸ **deleteAttachments**(`feature`, `attachmentIds`): `Promise`<`FeatureEditResult`[]\>

Deletes attachments from a feature.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#deleteAttachments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |
| `attachmentIds` | `number`[] |

#### Returns

`Promise`<`FeatureEditResult`[]\>

#### Inherited from

FeatureLayerBase.deleteAttachments

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15876

___

### destroy

▸ **destroy**(): `void`

Destroys the layer and any associated resources (including its [portalItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#portalItem), if it is a property on the layer).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#destroy)

#### Returns

`void`

#### Inherited from

Layer.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14050

___

### emit

▸ **emit**(`type`, `event?`): `boolean`

Emits an event on the instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#emit)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | `any` |

#### Returns

`boolean`

#### Inherited from

Layer.emit

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2063

___

### fetchAttributionData

▸ **fetchAttributionData**(): `Promise`<`any`\>

Fetches custom attribution data for the layer when it becomes available.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fetchAttributionData)

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.fetchAttributionData

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14056

___

### get

▸ **get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Layer.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21

▸ **get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Layer.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### getFeatureType

▸ **getFeatureType**(`feature`): `FeatureType`

Returns a [FeatureType](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureType.html) describing the feature's type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#getFeatureType)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`FeatureType`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10801

___

### getField

▸ **getField**(`fieldName`): [`EsriField`](geo_esri.EsriField.md)

Returns the [Field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html) instance for a field name (case-insensitive).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#getField)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

[`EsriField`](geo_esri.EsriField.md)

#### Inherited from

FeatureLayerBase.getField

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15882

___

### getFieldDomain

▸ **getFieldDomain**(`fieldName`, `options?`): `Domain`

Returns the [Domain](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Domain.html) associated with the given field name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#getFieldDomain)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `options?` | `FeatureLayerBaseGetFieldDomainOptions` |

#### Returns

`Domain`

#### Inherited from

FeatureLayerBase.getFieldDomain

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15888

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

Indicates whether there is an event listener on the instance that matches the provided event name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#hasEventListener)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

Layer.hasEventListener

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2069

___

### hasHandles

▸ **hasHandles**<`T`\>(`groupKey?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`boolean`

#### Inherited from

Layer.hasHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

`isFulfilled()` may be used to verify if creating an instance of the class is fulfilled (either resolved or rejected).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isFulfilled)

#### Returns

`boolean`

#### Inherited from

Layer.isFulfilled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2226

___

### isRejected

▸ **isRejected**(): `boolean`

`isRejected()` may be used to verify if creating an instance of the class is rejected.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isRejected)

#### Returns

`boolean`

#### Inherited from

Layer.isRejected

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2232

___

### isResolved

▸ **isResolved**(): `boolean`

`isResolved()` may be used to verify if creating an instance of the class is resolved.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#isResolved)

#### Returns

`boolean`

#### Inherited from

Layer.isResolved

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2238

___

### load

▸ **load**(`signal?`): `Promise`<`any`\>

Loads the resources referenced by this class.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#load)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal?` | `AbortSignal` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.load

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2244

___

### notifyChange

▸ `Protected` **notifyChange**(`propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`void`

#### Inherited from

Layer.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

___

### on

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"refresh"`` |
| `eventHandler` | `FeatureLayerRefreshEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10868

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"edits"`` |
| `eventHandler` | `FeatureLayerEditsEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10869

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `FeatureLayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10870

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `FeatureLayerLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10871

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `FeatureLayerLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10872

___

### own

▸ **own**(`handles`): `void`

**`Deprecated`**

Since 4.25. Use addHandles(), removeHandles() and hasHandles() instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |

#### Returns

`void`

#### Inherited from

Layer.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

___

### queryAttachments

▸ **queryAttachments**(`attachmentQuery`, `options?`): `Promise`<`any`\>

Query information about attachments associated with features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#queryAttachments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentQuery` | `AttachmentQuery` \| `AttachmentQueryProperties` |
| `options?` | `FeatureLayerBaseQueryAttachmentsOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

FeatureLayerBase.queryAttachments

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15894

___

### queryExtent

▸ **queryExtent**(`query?`, `options?`): `Promise`<`any`\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the feature service and returns the [Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html) of features that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryExtent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `options?` | `FeatureLayerQueryExtentOptions` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10807

___

### queryFeatureCount

▸ **queryFeatureCount**(`query?`, `options?`): `Promise`<`number`\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the feature service and returns the number of features that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatureCount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `options?` | `FeatureLayerQueryFeatureCountOptions` |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10813

___

### queryFeatures

▸ **queryFeatures**(`query?`, `options?`): `Promise`<`FeatureSet`\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the feature service and returns a [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html), which can be accessed using the `.then()` method once the promise resolves.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatures)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `options?` | `FeatureLayerQueryFeaturesOptions` |

#### Returns

`Promise`<`FeatureSet`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10819

___

### queryObjectIds

▸ **queryObjectIds**(`query?`, `options?`): `Promise`<`number`[]\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the feature service and returns an array of Object IDs for features that satisfy the input query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryObjectIds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `options?` | `FeatureLayerQueryObjectIdsOptions` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10825

___

### queryRelatedFeatures

▸ **queryRelatedFeatures**(`relationshipQuery`, `options?`): `Promise`<`any`\>

Executes a [RelationshipQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RelationshipQuery.html) against the feature service and returns [FeatureSets](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html) grouped by source layer or table objectIds.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#queryRelatedFeatures)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationshipQuery` | `RelationshipQuery` \| `RelationshipQueryProperties` |
| `options?` | `FeatureLayerBaseQueryRelatedFeaturesOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

FeatureLayerBase.queryRelatedFeatures

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15900

___

### queryRelatedFeaturesCount

▸ **queryRelatedFeaturesCount**(`relationshipQuery`, `options?`): `Promise`<`any`\>

Executes a [RelationshipQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RelationshipQuery.html) against the feature service and when resolved, it returns an `object` containing key value pairs.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#queryRelatedFeaturesCount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationshipQuery` | `RelationshipQuery` \| `RelationshipQueryProperties` |
| `options?` | `FeatureLayerBaseQueryRelatedFeaturesCountOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

FeatureLayerBase.queryRelatedFeaturesCount

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15906

___

### queryTopFeatureCount

▸ **queryTopFeatureCount**(`topFeaturesQuery`, `options?`): `Promise`<`number`\>

Executes a [TopFeaturesQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-TopFeaturesQuery.html) against a feature service and returns the count of features or records that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryTopFeatureCount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topFeaturesQuery` | `TopFeaturesQuery` \| `TopFeaturesQueryProperties` |
| `options?` | `FeatureLayerQueryTopFeatureCountOptions` |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10831

___

### queryTopFeatures

▸ **queryTopFeatures**(`topFeaturesQuery`, `options?`): `Promise`<`FeatureSet`\>

Executes a [TopFeaturesQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-TopFeaturesQuery.html) against a feature service and returns a [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html) once the promise resolves.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryTopFeatures)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topFeaturesQuery` | `TopFeaturesQuery` \| `TopFeaturesQueryProperties` |
| `options?` | `FeatureLayerQueryTopFeaturesOptions` |

#### Returns

`Promise`<`FeatureSet`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10837

___

### queryTopFeaturesExtent

▸ **queryTopFeaturesExtent**(`topFeaturesQuery`, `options?`): `Promise`<`any`\>

Executes a [TopFeaturesQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-TopFeaturesQuery.html) against a feature service and returns the [Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html) of features that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryTopFeaturesExtent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topFeaturesQuery` | `TopFeaturesQuery` \| `TopFeaturesQueryProperties` |
| `options?` | `FeatureLayerQueryTopFeaturesExtentOptions` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10843

___

### queryTopObjectIds

▸ **queryTopObjectIds**(`topFeaturesQuery`, `options?`): `Promise`<`number`[]\>

Executes a [TopFeaturesQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-TopFeaturesQuery.html) against a feature service and returns an array of Object IDs of features that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryTopObjectIds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topFeaturesQuery` | `TopFeaturesQuery` \| `TopFeaturesQueryProperties` |
| `options?` | `FeatureLayerQueryTopObjectIdsOptions` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10849

___

### refresh

▸ **refresh**(): `void`

Fetches all the data for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#refresh)

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10855

___

### removeHandles

▸ **removeHandles**<`T`\>(`groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Layer.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### save

▸ **save**(`options?`): `Promise`<`PortalItem`\>

Saves the layer to its existing portal item in the [Portal](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html) authenticated within the user's current session.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#save)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FeatureLayerSaveOptions` |

#### Returns

`Promise`<`PortalItem`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10861

___

### saveAs

▸ **saveAs**(`portalItem`, `options?`): `Promise`<`PortalItem`\>

Saves the layer to a new portal item in the [Portal](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html) authenticated within the user's current session.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#saveAs)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portalItem` | `PortalItem` \| `PortalItemProperties` |
| `options?` | `FeatureLayerSaveAsOptions` |

#### Returns

`Promise`<`PortalItem`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10867

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### updateAttachment

▸ **updateAttachment**(`feature`, `attachmentId`, `attachment`): `Promise`<`FeatureEditResult`\>

Updates an existing attachment for a feature.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-FeatureLayerBase.html#updateAttachment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |
| `attachmentId` | `number` |
| `attachment` | `HTMLFormElement` \| `FormData` |

#### Returns

`Promise`<`FeatureEditResult`\>

#### Inherited from

FeatureLayerBase.updateAttachment

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:15912

___

### watch

▸ **watch**(`path`, `callback`, `sync?`): `WatchHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `callback` | `WatchCallback` |
| `sync?` | `boolean` |

#### Returns

`WatchHandle`

#### Inherited from

Layer.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### when

▸ **when**(`callback?`, `errback?`): `Promise`<`any`\>

`when()` may be leveraged once an instance of the class is created.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Loadable.html#when)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Function` |
| `errback?` | `Function` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Layer.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2250

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:10873
