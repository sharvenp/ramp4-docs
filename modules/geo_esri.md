[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / geo/esri

# Module: geo/esri

## Table of contents

### Classes

- [EsriBasemap](../classes/geo_esri.EsriBasemap.md)
- [EsriBasemapGallery](../classes/geo_esri.EsriBasemapGallery.md)
- [EsriClassBreakInfo](../classes/geo_esri.EsriClassBreakInfo.md)
- [EsriClassBreaksRenderer](../classes/geo_esri.EsriClassBreaksRenderer.md)
- [EsriColour](../classes/geo_esri.EsriColour.md)
- [EsriExtent](../classes/geo_esri.EsriExtent.md)
- [EsriFeatureFilter](../classes/geo_esri.EsriFeatureFilter.md)
- [EsriFeatureLayer](../classes/geo_esri.EsriFeatureLayer.md)
- [EsriField](../classes/geo_esri.EsriField.md)
- [EsriGeometry](../classes/geo_esri.EsriGeometry.md)
- [EsriGraphic](../classes/geo_esri.EsriGraphic.md)
- [EsriGraphicsLayer](../classes/geo_esri.EsriGraphicsLayer.md)
- [EsriImageryLayer](../classes/geo_esri.EsriImageryLayer.md)
- [EsriLOD](../classes/geo_esri.EsriLOD.md)
- [EsriMap](../classes/geo_esri.EsriMap.md)
- [EsriMapImageLayer](../classes/geo_esri.EsriMapImageLayer.md)
- [EsriMapView](../classes/geo_esri.EsriMapView.md)
- [EsriMultipoint](../classes/geo_esri.EsriMultipoint.md)
- [EsriOpenStreetMapLayer](../classes/geo_esri.EsriOpenStreetMapLayer.md)
- [EsriPictureMarkerSymbol](../classes/geo_esri.EsriPictureMarkerSymbol.md)
- [EsriPoint](../classes/geo_esri.EsriPoint.md)
- [EsriPolygon](../classes/geo_esri.EsriPolygon.md)
- [EsriPolyline](../classes/geo_esri.EsriPolyline.md)
- [EsriQuery](../classes/geo_esri.EsriQuery.md)
- [EsriRenderer](../classes/geo_esri.EsriRenderer.md)
- [EsriScaleBar](../classes/geo_esri.EsriScaleBar.md)
- [EsriSimpleFillSymbol](../classes/geo_esri.EsriSimpleFillSymbol.md)
- [EsriSimpleLineSymbol](../classes/geo_esri.EsriSimpleLineSymbol.md)
- [EsriSimpleMarkerSymbol](../classes/geo_esri.EsriSimpleMarkerSymbol.md)
- [EsriSimpleRenderer](../classes/geo_esri.EsriSimpleRenderer.md)
- [EsriSpatialReference](../classes/geo_esri.EsriSpatialReference.md)
- [EsriSublayer](../classes/geo_esri.EsriSublayer.md)
- [EsriSymbol](../classes/geo_esri.EsriSymbol.md)
- [EsriTileLayer](../classes/geo_esri.EsriTileLayer.md)
- [EsriUniqueValueInfo](../classes/geo_esri.EsriUniqueValueInfo.md)
- [EsriUniqueValueRenderer](../classes/geo_esri.EsriUniqueValueRenderer.md)
- [EsriWMSLayer](../classes/geo_esri.EsriWMSLayer.md)
- [EsriWMSSublayer](../classes/geo_esri.EsriWMSSublayer.md)

### Interfaces

- [EsriConfig](../interfaces/geo_esri.EsriConfig.md)
- [EsriRequest](../interfaces/geo_esri.EsriRequest.md)

### Variables

- [EsriConfig](geo_esri.md#esriconfig)

### Functions

- [EsriGeometryFromJson](geo_esri.md#esrigeometryfromjson)
- [EsriQueryByIds](geo_esri.md#esriquerybyids)
- [EsriRendererFromJson](geo_esri.md#esrirendererfromjson)
- [EsriRequest](geo_esri.md#esrirequest)
- [EsriSymbolFromJson](geo_esri.md#esrisymbolfromjson)

## Variables

### EsriConfig

• **EsriConfig**: [`EsriConfig`](geo_esri.md#esriconfig)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1615

node_modules/@arcgis/core/interfaces.d.ts:1698

## Functions

### EsriGeometryFromJson

▸ **EsriGeometryFromJson**(`json`): [`EsriGeometry`](../classes/geo_esri.EsriGeometry.md)

Creates a new instance of an appropriate [Geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html) class and initializes it with values from a JSON object generated from an ArcGIS product.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-support-jsonUtils.html#fromJSON)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriGeometry`](../classes/geo_esri.EsriGeometry.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6803

___

### EsriQueryByIds

▸ **EsriQueryByIds**(`url`, `query`, `requestOptions?`): `Promise`<`number`[]\>

Executes a [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) against the layer specified in the url parameter.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-query.html#executeForIds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `query` | [`EsriQuery`](../classes/geo_esri.EsriQuery.md) \| `QueryProperties` |
| `requestOptions?` | `any` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:45023

___

### EsriRendererFromJson

▸ **EsriRendererFromJson**(`json`): [`EsriRenderer`](../classes/geo_esri.EsriRenderer.md)

Creates a new instance of an appropriate [Renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html) class and initializes it with values from a JSON object generated from an ArcGIS product.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-jsonUtils.html#fromJSON)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriRenderer`](../classes/geo_esri.EsriRenderer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39658

___

### EsriRequest

▸ **EsriRequest**(`url`, `options?`): `Promise`<`RequestResponse`\>

Retrieves data from a remote server or uploads a file from a user's computer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-request.html#esriRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`RequestResponse`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:41239

___

### EsriSymbolFromJson

▸ **EsriSymbolFromJson**(`json`): [`EsriSymbol`](../classes/geo_esri.EsriSymbol.md)

Creates a new instance of an appropriate [Symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html) class and initializes it with values from a JSON object generated from an ArcGIS product.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-support-jsonUtils.html#fromJSON)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSymbol`](../classes/geo_esri.EsriSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70412
