[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriImageryLayer

# Class: EsriImageryLayer

[geo/esri](../modules/geo_esri.md).EsriImageryLayer

## Hierarchy

- `Layer`

- `ArcGISImageService`

- `PortalLayer`

- `RefreshableLayer`

- `ScaleRangeLayer`

- `TemporalLayer`

- `BlendLayer`

  ↳ **`EsriImageryLayer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriImageryLayer.md#constructor)

### Properties

- [bandIds](geo_esri.EsriImageryLayer.md#bandids)
- [blendMode](geo_esri.EsriImageryLayer.md#blendmode)
- [capabilities](geo_esri.EsriImageryLayer.md#capabilities)
- [compressionQuality](geo_esri.EsriImageryLayer.md#compressionquality)
- [compressionTolerance](geo_esri.EsriImageryLayer.md#compressiontolerance)
- [copyright](geo_esri.EsriImageryLayer.md#copyright)
- [customParameters](geo_esri.EsriImageryLayer.md#customparameters)
- [declaredClass](geo_esri.EsriImageryLayer.md#declaredclass)
- [definitionExpression](geo_esri.EsriImageryLayer.md#definitionexpression)
- [destroyed](geo_esri.EsriImageryLayer.md#destroyed)
- [effect](geo_esri.EsriImageryLayer.md#effect)
- [fields](geo_esri.EsriImageryLayer.md#fields)
- [fieldsIndex](geo_esri.EsriImageryLayer.md#fieldsindex)
- [format](geo_esri.EsriImageryLayer.md#format)
- [fullExtent](geo_esri.EsriImageryLayer.md#fullextent)
- [hasMultidimensions](geo_esri.EsriImageryLayer.md#hasmultidimensions)
- [id](geo_esri.EsriImageryLayer.md#id)
- [imageMaxHeight](geo_esri.EsriImageryLayer.md#imagemaxheight)
- [imageMaxWidth](geo_esri.EsriImageryLayer.md#imagemaxwidth)
- [initialized](geo_esri.EsriImageryLayer.md#initialized)
- [interpolation](geo_esri.EsriImageryLayer.md#interpolation)
- [legendEnabled](geo_esri.EsriImageryLayer.md#legendenabled)
- [listMode](geo_esri.EsriImageryLayer.md#listmode)
- [loadError](geo_esri.EsriImageryLayer.md#loaderror)
- [loadStatus](geo_esri.EsriImageryLayer.md#loadstatus)
- [loadWarnings](geo_esri.EsriImageryLayer.md#loadwarnings)
- [loaded](geo_esri.EsriImageryLayer.md#loaded)
- [maxScale](geo_esri.EsriImageryLayer.md#maxscale)
- [minScale](geo_esri.EsriImageryLayer.md#minscale)
- [mosaicRule](geo_esri.EsriImageryLayer.md#mosaicrule)
- [multidimensionalInfo](geo_esri.EsriImageryLayer.md#multidimensionalinfo)
- [multidimensionalSubset](geo_esri.EsriImageryLayer.md#multidimensionalsubset)
- [noData](geo_esri.EsriImageryLayer.md#nodata)
- [noDataInterpretation](geo_esri.EsriImageryLayer.md#nodatainterpretation)
- [objectIdField](geo_esri.EsriImageryLayer.md#objectidfield)
- [opacity](geo_esri.EsriImageryLayer.md#opacity)
- [pixelFilter](geo_esri.EsriImageryLayer.md#pixelfilter)
- [pixelType](geo_esri.EsriImageryLayer.md#pixeltype)
- [popupEnabled](geo_esri.EsriImageryLayer.md#popupenabled)
- [popupTemplate](geo_esri.EsriImageryLayer.md#popuptemplate)
- [portalItem](geo_esri.EsriImageryLayer.md#portalitem)
- [rasterFields](geo_esri.EsriImageryLayer.md#rasterfields)
- [rasterFunctionInfos](geo_esri.EsriImageryLayer.md#rasterfunctioninfos)
- [refreshInterval](geo_esri.EsriImageryLayer.md#refreshinterval)
- [renderer](geo_esri.EsriImageryLayer.md#renderer)
- [renderingRule](geo_esri.EsriImageryLayer.md#renderingrule)
- [serviceRasterInfo](geo_esri.EsriImageryLayer.md#servicerasterinfo)
- [sourceJSON](geo_esri.EsriImageryLayer.md#sourcejson)
- [spatialReference](geo_esri.EsriImageryLayer.md#spatialreference)
- [timeExtent](geo_esri.EsriImageryLayer.md#timeextent)
- [timeInfo](geo_esri.EsriImageryLayer.md#timeinfo)
- [timeOffset](geo_esri.EsriImageryLayer.md#timeoffset)
- [title](geo_esri.EsriImageryLayer.md#title)
- [type](geo_esri.EsriImageryLayer.md#type)
- [url](geo_esri.EsriImageryLayer.md#url)
- [useViewTime](geo_esri.EsriImageryLayer.md#useviewtime)
- [version](geo_esri.EsriImageryLayer.md#version)
- [visible](geo_esri.EsriImageryLayer.md#visible)

### Methods

- [\_get](geo_esri.EsriImageryLayer.md#_get)
- [\_set](geo_esri.EsriImageryLayer.md#_set)
- [addHandles](geo_esri.EsriImageryLayer.md#addhandles)
- [cancelLoad](geo_esri.EsriImageryLayer.md#cancelload)
- [computeAngles](geo_esri.EsriImageryLayer.md#computeangles)
- [computeHistograms](geo_esri.EsriImageryLayer.md#computehistograms)
- [computePixelSpaceLocations](geo_esri.EsriImageryLayer.md#computepixelspacelocations)
- [computeStatisticsHistograms](geo_esri.EsriImageryLayer.md#computestatisticshistograms)
- [createLayerView](geo_esri.EsriImageryLayer.md#createlayerview)
- [createPopupTemplate](geo_esri.EsriImageryLayer.md#createpopuptemplate)
- [destroy](geo_esri.EsriImageryLayer.md#destroy)
- [emit](geo_esri.EsriImageryLayer.md#emit)
- [fetchAttributionData](geo_esri.EsriImageryLayer.md#fetchattributiondata)
- [fetchImage](geo_esri.EsriImageryLayer.md#fetchimage)
- [generateRasterInfo](geo_esri.EsriImageryLayer.md#generaterasterinfo)
- [get](geo_esri.EsriImageryLayer.md#get)
- [getCatalogItemICSInfo](geo_esri.EsriImageryLayer.md#getcatalogitemicsinfo)
- [getCatalogItemRasterInfo](geo_esri.EsriImageryLayer.md#getcatalogitemrasterinfo)
- [getSamples](geo_esri.EsriImageryLayer.md#getsamples)
- [hasEventListener](geo_esri.EsriImageryLayer.md#haseventlistener)
- [hasHandles](geo_esri.EsriImageryLayer.md#hashandles)
- [identify](geo_esri.EsriImageryLayer.md#identify)
- [isFulfilled](geo_esri.EsriImageryLayer.md#isfulfilled)
- [isRejected](geo_esri.EsriImageryLayer.md#isrejected)
- [isResolved](geo_esri.EsriImageryLayer.md#isresolved)
- [load](geo_esri.EsriImageryLayer.md#load)
- [measureAreaAndPerimeter](geo_esri.EsriImageryLayer.md#measureareaandperimeter)
- [measureDistanceAndAngle](geo_esri.EsriImageryLayer.md#measuredistanceandangle)
- [measureHeight](geo_esri.EsriImageryLayer.md#measureheight)
- [measurePointOrCentroid](geo_esri.EsriImageryLayer.md#measurepointorcentroid)
- [notifyChange](geo_esri.EsriImageryLayer.md#notifychange)
- [on](geo_esri.EsriImageryLayer.md#on)
- [own](geo_esri.EsriImageryLayer.md#own)
- [queryObjectIds](geo_esri.EsriImageryLayer.md#queryobjectids)
- [queryRasterCount](geo_esri.EsriImageryLayer.md#queryrastercount)
- [queryRasters](geo_esri.EsriImageryLayer.md#queryrasters)
- [redraw](geo_esri.EsriImageryLayer.md#redraw)
- [refresh](geo_esri.EsriImageryLayer.md#refresh)
- [removeHandles](geo_esri.EsriImageryLayer.md#removehandles)
- [set](geo_esri.EsriImageryLayer.md#set)
- [watch](geo_esri.EsriImageryLayer.md#watch)
- [when](geo_esri.EsriImageryLayer.md#when)
- [fromJSON](geo_esri.EsriImageryLayer.md#fromjson)

## Constructors

### constructor

• **new EsriImageryLayer**(`properties?`)

Represents a dynamic [image service resource](https://developers.arcgis.com/rest/services-reference/image-service.htm) as a layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `ImageryLayerProperties` |

#### Inherited from

Layer.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13145

## Properties

### bandIds

• **bandIds**: `number`[]

Defines a band combination using 0-based band indexes.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#bandIds)
```

#### Inherited from

ArcGISImageService.bandIds

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14690

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

• **capabilities**: `ArcGISImageServiceCapabilities`

Describes the layer's supported capabilities.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#capabilities)

#### Inherited from

ArcGISImageService.capabilities

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14696

___

### compressionQuality

• **compressionQuality**: `number`

The compression quality value.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#compressionQuality)

#### Inherited from

ArcGISImageService.compressionQuality

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14702

___

### compressionTolerance

• **compressionTolerance**: `number`

Controls the tolerance of the lerc compression algorithm.

**`Default`**

```ts
0.01

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#compressionTolerance)
```

#### Inherited from

ArcGISImageService.compressionTolerance

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14710

___

### copyright

• **copyright**: `string`

The copyright text as defined by the service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#copyright)

#### Inherited from

ArcGISImageService.copyright

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14716

___

### customParameters

• **customParameters**: `any`

A list of custom parameters appended to the URL of all resources fetched by the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#customParameters)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13116

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

The SQL where clause used to filter rasters.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#definitionExpression)

#### Inherited from

ArcGISImageService.definitionExpression

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14722

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Layer.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

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

### fields

• **fields**: [`EsriField`](geo_esri.EsriField.md)[]

An array of fields in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#fields)

#### Inherited from

ArcGISImageService.fields

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14728

___

### fieldsIndex

• `Readonly` **fieldsIndex**: `FieldsIndex`

A convenient property that can be used to make case-insensitive lookups for a [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#fields) by name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#fieldsIndex)

#### Inherited from

ArcGISImageService.fieldsIndex

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14734

___

### format

• **format**: ``"png"`` \| ``"png8"`` \| ``"png24"`` \| ``"png32"`` \| ``"jpg"`` \| ``"bmp"`` \| ``"gif"`` \| ``"jpgpng"`` \| ``"lerc"`` \| ``"tiff"``

The format of the exported image.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#format)

#### Inherited from

ArcGISImageService.format

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14740

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

### hasMultidimensions

• **hasMultidimensions**: `boolean`

Indicates if the layer has [multidimensionalInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#multidimensionalInfo).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#hasMultidimensions)

#### Inherited from

ArcGISImageService.hasMultidimensions

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14746

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

### imageMaxHeight

• **imageMaxHeight**: `number`

Indicates the maximum height of the image exported by the service.

**`Default`**

```ts
4100

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#imageMaxHeight)
```

#### Inherited from

ArcGISImageService.imageMaxHeight

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14754

___

### imageMaxWidth

• **imageMaxWidth**: `number`

Indicates the maximum width of the image exported by the service.

**`Default`**

```ts
15000

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#imageMaxWidth)
```

#### Inherited from

ArcGISImageService.imageMaxWidth

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14762

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Layer.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### interpolation

• **interpolation**: ``"nearest"`` \| ``"bilinear"`` \| ``"cubic"`` \| ``"majority"``

Defines how to interpolate pixel values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#interpolation)

#### Inherited from

ArcGISImageService.interpolation

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14768

___

### legendEnabled

• **legendEnabled**: `boolean`

Indicates whether the layer will be included in the legend.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#legendEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13124

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

### mosaicRule

• **mosaicRule**: `MosaicRule`

Defines how overlapping images should be mosaicked.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#mosaicRule)

#### Inherited from

ArcGISImageService.mosaicRule

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14774

___

### multidimensionalInfo

• `Readonly` **multidimensionalInfo**: `RasterMultidimensionalInfo`

The multidimensional information associated with the layer if the layer's [hasMultidimensions](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#hasMultidimensions) property is `true`.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#multidimensionalInfo)
```

#### Inherited from

ArcGISImageService.multidimensionalInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14782

___

### multidimensionalSubset

• **multidimensionalSubset**: `MultidimensionalSubset`

Represents a multidimensional subset of raster data.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#multidimensionalSubset)

#### Inherited from

ArcGISImageService.multidimensionalSubset

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14788

___

### noData

• **noData**: `number` \| `number`[]

The pixel value representing no available information.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#noData)

#### Inherited from

ArcGISImageService.noData

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14794

___

### noDataInterpretation

• **noDataInterpretation**: ``"any"`` \| ``"all"``

Interpretation of the [noData](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#noData) setting.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#noDataInterpretation)

#### Inherited from

ArcGISImageService.noDataInterpretation

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14800

___

### objectIdField

• **objectIdField**: `string`

The name of an `oid` [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#fields) containing a unique value or identifier for each raster in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#objectIdField)

#### Inherited from

ArcGISImageService.objectIdField

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14806

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

### pixelFilter

• **pixelFilter**: `PixelFilterFunction`

A function that processes [pixelData](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-ImageryLayerView.html#pixelData).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#pixelFilter)

#### Inherited from

ArcGISImageService.pixelFilter

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14812

___

### pixelType

• **pixelType**: ``"unknown"`` \| ``"s8"`` \| ``"s16"`` \| ``"s32"`` \| ``"u8"`` \| ``"u16"`` \| ``"u32"`` \| ``"f32"`` \| ``"f64"``

Raster source pixel type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#pixelType)

#### Inherited from

ArcGISImageService.pixelType

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14818

___

### popupEnabled

• **popupEnabled**: `boolean`

Indicates whether to display popups when features in the layer are clicked.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#popupEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13132

___

### popupTemplate

• **popupTemplate**: `PopupTemplate`

The popup template for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#popupTemplate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13138

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

### rasterFields

• `Readonly` **rasterFields**: [`EsriField`](geo_esri.EsriField.md)[]

A complete list of fields that consists of raster attribute table fields, item pixel value, service pixel value, service pixel value with various server defined function templates, and raster attribute table fields.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#rasterFields)

#### Inherited from

ArcGISImageService.rasterFields

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14824

___

### rasterFunctionInfos

• `Readonly` **rasterFunctionInfos**: `RasterFunctionInfo`[]

Returns raster function information for the image services, including the name, description, help, function type, and a thumbnail of pre-configured raster function templates.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#rasterFunctionInfos)
```

#### Inherited from

ArcGISImageService.rasterFunctionInfos

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14832

___

### refreshInterval

• **refreshInterval**: `number`

Refresh interval of the layer in minutes.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-RefreshableLayer.html#refreshInterval)
```

#### Inherited from

RefreshableLayer.refreshInterval

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16388

___

### renderer

• **renderer**: [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md) \| [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md) \| `RasterStretchRenderer` \| `RasterShadedReliefRenderer` \| `RasterColormapRenderer` \| `VectorFieldRenderer` \| `FlowRenderer`

The renderer assigned to the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#renderer)

#### Inherited from

ArcGISImageService.renderer

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14838

___

### renderingRule

• **renderingRule**: `RasterFunction`

Specifies the rule for how the requested image should be rendered.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#renderingRule)

#### Inherited from

ArcGISImageService.renderingRule

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14850

___

### serviceRasterInfo

• `Readonly` **serviceRasterInfo**: `RasterInfo`

Source raster information of the image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#serviceRasterInfo)

#### Inherited from

ArcGISImageService.serviceRasterInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14856

___

### sourceJSON

• **sourceJSON**: `any`

The [image service's metadata JSON](https://developers.arcgis.com/rest/services-reference/image-service.htm) exposed by the ArcGIS REST API.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#sourceJSON)

#### Inherited from

ArcGISImageService.sourceJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14862

___

### spatialReference

• `Readonly` **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#spatialReference)

#### Inherited from

ArcGISImageService.spatialReference

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14868

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

• `Readonly` **type**: ``"imagery"``

#### Inherited from

Layer.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13139

___

### url

• **url**: `string`

The URL to the REST endpoint of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#url)

#### Inherited from

ArcGISImageService.url

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14874

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

The version of ArcGIS Server in which the image service is published.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#version)

#### Inherited from

ArcGISImageService.version

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14880

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

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

[`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Inherited from

Layer.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

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

### computeAngles

▸ **computeAngles**(`parameters`, `requestOptions?`): `Promise`<`ImageAngleResult`\>

Computes the rotation angle of a ImageryLayer at a given location.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#computeAngles)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageAngleParameters` \| `ImageAngleParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageAngleResult`\>

#### Inherited from

ArcGISImageService.computeAngles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14887

___

### computeHistograms

▸ **computeHistograms**(`parameters`, `requestOptions?`): `Promise`<`any`\>

Computes histograms based on the provided [ImageHistogramParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageHistogramParameters.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#computeHistograms)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageHistogramParameters` \| `ImageHistogramParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

ArcGISImageService.computeHistograms

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14893

___

### computePixelSpaceLocations

▸ **computePixelSpaceLocations**(`parameters`, `requestOptions?`): `Promise`<`ImagePixelLocationResult`\>

Computes the corresponding pixel location in columns and rows for an image based on input geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#computePixelSpaceLocations)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImagePixelLocationParameters` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImagePixelLocationResult`\>

#### Inherited from

ArcGISImageService.computePixelSpaceLocations

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14899

___

### computeStatisticsHistograms

▸ **computeStatisticsHistograms**(`parameters`, `requestOptions?`): `Promise`<`any`\>

Computes [statistics](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#RasterBandStatistics) and [histograms](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#RasterHistogram) for the provided [ImageHistogramParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageHistogramParameters.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#computeStatisticsHistograms)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageHistogramParameters` \| `ImageHistogramParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

ArcGISImageService.computeStatisticsHistograms

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14905

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

Creates a default popup template for the layer, populated with all the fields of the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#createPopupTemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CreatePopupTemplateOptions` |

#### Returns

`PopupTemplate`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13151

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

### fetchImage

▸ **fetchImage**(`extent`, `width`, `height`, `options?`): `Promise`<`any`\>

Returns an image using the [export REST operation](https://developers.arcgis.com/rest/services-reference/export-image.htm) that displays data from an [ImageryLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#fetchImage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [`EsriExtent`](geo_esri.EsriExtent.md) |
| `width` | `number` |
| `height` | `number` |
| `options?` | `ArcGISImageServiceFetchImageOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

ArcGISImageService.fetchImage

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14911

___

### generateRasterInfo

▸ **generateRasterInfo**(`renderingRule`, `options?`): `Promise`<`RasterInfo`\>

Generates raster info for the specified rendering rule.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#generateRasterInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderingRule` | `RasterFunction` \| `RasterFunctionProperties` |
| `options?` | `ArcGISImageServiceGenerateRasterInfoOptions` |

#### Returns

`Promise`<`RasterInfo`\>

#### Inherited from

ArcGISImageService.generateRasterInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14917

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

### getCatalogItemICSInfo

▸ **getCatalogItemICSInfo**(`rasterId`, `options?`): `Promise`<`any`\>

Gets the [image coordinate system](https://developers.arcgis.com/rest/services-reference/raster-ics.htm) information of a catalog item in an image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#getCatalogItemICSInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rasterId` | `number` |
| `options?` | `ArcGISImageServiceGetCatalogItemICSInfoOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

ArcGISImageService.getCatalogItemICSInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14923

___

### getCatalogItemRasterInfo

▸ **getCatalogItemRasterInfo**(`rasterId`, `options?`): `Promise`<`RasterInfo`\>

Get the [raster info](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-RasterInfo.html) of a [catalog item](https://developers.arcgis.com/rest/services-reference/raster-catalog-item.htm) in an image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#getCatalogItemRasterInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rasterId` | `number` |
| `options?` | `ArcGISImageServiceGetCatalogItemRasterInfoOptions` |

#### Returns

`Promise`<`RasterInfo`\>

#### Inherited from

ArcGISImageService.getCatalogItemRasterInfo

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14929

___

### getSamples

▸ **getSamples**(`parameters`, `requestOptions?`): `Promise`<`ImageSampleResult`\>

Returns sample point locations, pixel values and corresponding resolutions of the source data for a given geometry.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#getSamples)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageSampleParameters` \| `ImageSampleParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageSampleResult`\>

#### Inherited from

ArcGISImageService.getSamples

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14935

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

### identify

▸ **identify**(`parameters`, `requestOptions?`): `Promise`<`ImageIdentifyResult`\>

Sends a request to the ArcGIS REST image service to identify content based on the specified [ImageIdentifyParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageIdentifyParameters.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#identify)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageIdentifyParameters` \| `ImageIdentifyParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageIdentifyResult`\>

#### Inherited from

ArcGISImageService.identify

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14941

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

### measureAreaAndPerimeter

▸ **measureAreaAndPerimeter**(`parameters`, `requestOptions?`): `Promise`<`ImageAreaResult`\>

Calculates the area and perimeter of a given geometry on an image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#measureAreaAndPerimeter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageAreaParameters` \| `ImageAreaParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageAreaResult`\>

#### Inherited from

ArcGISImageService.measureAreaAndPerimeter

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14947

___

### measureDistanceAndAngle

▸ **measureDistanceAndAngle**(`parameters`, `requestOptions?`): `Promise`<`ImageDistanceResult`\>

Calculates the distance and angle between two points on an image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#measureDistanceAndAngle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageDistanceParameters` \| `ImageDistanceParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageDistanceResult`\>

#### Inherited from

ArcGISImageService.measureDistanceAndAngle

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14953

___

### measureHeight

▸ **measureHeight**(`parameters`, `requestOptions?`): `Promise`<`ImageHeightResult`\>

Calculates the height of an object between two points on an image service if the sensor info is available.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#measureHeight)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImageHeightParameters` \| `ImageHeightParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImageHeightResult`\>

#### Inherited from

ArcGISImageService.measureHeight

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14959

___

### measurePointOrCentroid

▸ **measurePointOrCentroid**(`parameters`, `requestOptions?`): `Promise`<`ImagePointResult`\>

Returns the location for a given point or centroid of a given area on an image service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#measurePointOrCentroid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ImagePointParameters` \| `ImagePointParametersProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`ImagePointResult`\>

#### Inherited from

ArcGISImageService.measurePointOrCentroid

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14965

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
| `eventHandler` | `ImageryLayerRefreshEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13158

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `ImageryLayerLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13159

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `ImageryLayerLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13160

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `ImageryLayerLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

Layer.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13161

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

### queryObjectIds

▸ **queryObjectIds**(`query?`, `requestOptions?`): `Promise`<`number`[]\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the image service and returns an array of Object IDs for the rasters.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#queryObjectIds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`number`[]\>

#### Inherited from

ArcGISImageService.queryObjectIds

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14971

___

### queryRasterCount

▸ **queryRasterCount**(`query?`, `requestOptions?`): `Promise`<`number`\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the image service and returns the number of rasters that satisfy the query.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#queryRasterCount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`number`\>

#### Inherited from

ArcGISImageService.queryRasterCount

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14977

___

### queryRasters

▸ **queryRasters**(`query`, `requestOptions?`): `Promise`<`FeatureSet`\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against an image service and returns a [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html), which can be accessed using the `.then()` method once the promise resolves.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-ArcGISImageService.html#queryRasters)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`EsriQuery`](geo_esri.EsriQuery.md) \| `QueryProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`FeatureSet`\>

#### Inherited from

ArcGISImageService.queryRasters

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:14983

___

### redraw

▸ **redraw**(): `void`

Executes the [pixelFilter](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#pixelFilter) function and redraws the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#redraw)

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13157

___

### refresh

▸ **refresh**(): `void`

Fetches all the data for the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-mixins-RefreshableLayer.html#refresh)

#### Returns

`void`

#### Inherited from

RefreshableLayer.refresh

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16394

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

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

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

[`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Inherited from

Layer.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

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

▸ `Static` **fromJSON**(`json`): [`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriImageryLayer`](geo_esri.EsriImageryLayer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:13162
