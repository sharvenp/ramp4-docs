[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/geometry](../modules/geo_api_graphic_geometry_geometry.md) / GeometryAPI

# Class: GeometryAPI

[geo/api/graphic/geometry/geometry](../modules/geo_api_graphic_geometry_geometry.md).GeometryAPI

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_geometry.GeometryAPI.md#constructor)

### Properties

- [Extent](geo_api_graphic_geometry_geometry.GeometryAPI.md#extent)
- [Graphic](geo_api_graphic_geometry_geometry.GeometryAPI.md#graphic)
- [LineString](geo_api_graphic_geometry_geometry.GeometryAPI.md#linestring)
- [LineStyle](geo_api_graphic_geometry_geometry.GeometryAPI.md#linestyle)
- [LinearRing](geo_api_graphic_geometry_geometry.GeometryAPI.md#linearring)
- [MultiLineString](geo_api_graphic_geometry_geometry.GeometryAPI.md#multilinestring)
- [MultiPoint](geo_api_graphic_geometry_geometry.GeometryAPI.md#multipoint)
- [MultiPolygon](geo_api_graphic_geometry_geometry.GeometryAPI.md#multipolygon)
- [Point](geo_api_graphic_geometry_geometry.GeometryAPI.md#point)
- [PointStyle](geo_api_graphic_geometry_geometry.GeometryAPI.md#pointstyle)
- [Polygon](geo_api_graphic_geometry_geometry.GeometryAPI.md#polygon)
- [PolygonStyle](geo_api_graphic_geometry_geometry.GeometryAPI.md#polygonstyle)
- [SpatialReference](geo_api_graphic_geometry_geometry.GeometryAPI.md#spatialreference)

### Methods

- [clientGeomTypeToRampGeomType](geo_api_graphic_geometry_geometry.GeometryAPI.md#clientgeomtypetorampgeomtype)
- [esriMapClickToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#esrimapclicktoramp)
- [esriMapMouseToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#esrimapmousetoramp)
- [geoJsonGeomTypeToEsriGeomType](geo_api_graphic_geometry_geometry.GeometryAPI.md#geojsongeomtypetoesrigeomtype)
- [geomEsriToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#geomesritoramp)
- [geomGeoJsonToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#geomgeojsontoramp)
- [geomRampToEsri](geo_api_graphic_geometry_geometry.GeometryAPI.md#geomramptoesri)
- [geomRampToGeoJson](geo_api_graphic_geometry_geometry.GeometryAPI.md#geomramptogeojson)
- [graphicGeoJsonToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#graphicgeojsontoramp)
- [graphicRampToEsri](geo_api_graphic_geometry_geometry.GeometryAPI.md#graphicramptoesri)
- [graphicRampToGeoJson](geo_api_graphic_geometry_geometry.GeometryAPI.md#graphicramptogeojson)
- [isImageUrl](geo_api_graphic_geometry_geometry.GeometryAPI.md#isimageurl)
- [serverGeomTypeToRampGeomType](geo_api_graphic_geometry_geometry.GeometryAPI.md#servergeomtypetorampgeomtype)
- [styleEsriToRamp](geo_api_graphic_geometry_geometry.GeometryAPI.md#styleesritoramp)
- [styleRampToEsri](geo_api_graphic_geometry_geometry.GeometryAPI.md#styleramptoesri)

## Constructors

### constructor

• **new GeometryAPI**()

## Properties

### Extent

• **Extent**: typeof [`Extent`](geo_api_graphic_geometry_extent.Extent.md) = `Extent`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L39)

___

### Graphic

• **Graphic**: typeof [`Graphic`](geo_api_graphic_graphic.Graphic.md) = `Graphic`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L40)

___

### LineString

• **LineString**: typeof [`LineString`](geo_api_graphic_geometry_line_string.LineString.md) = `LineString`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L42)

___

### LineStyle

• **LineStyle**: typeof [`LineStyle`](geo_api_graphic_style_line_style.LineStyle.md) = `LineStyle`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L43)

___

### LinearRing

• **LinearRing**: typeof [`LinearRing`](geo_api_graphic_geometry_linear_ring.LinearRing.md) = `LinearRing`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L44)

___

### MultiLineString

• **MultiLineString**: typeof [`MultiLineString`](geo_api_graphic_geometry_multi_line_string.MultiLineString.md) = `MultiLineString`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L45)

___

### MultiPoint

• **MultiPoint**: typeof [`MultiPoint`](geo_api_graphic_geometry_multi_point.MultiPoint.md) = `MultiPoint`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:46](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L46)

___

### MultiPolygon

• **MultiPolygon**: typeof [`MultiPolygon`](geo_api_graphic_geometry_multi_polygon.MultiPolygon.md) = `MultiPolygon`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:47](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L47)

___

### Point

• **Point**: typeof [`Point`](geo_api_graphic_geometry_point.Point.md) = `Point`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L48)

___

### PointStyle

• **PointStyle**: typeof [`PointStyle`](geo_api_graphic_style_point_style.PointStyle.md) = `PointStyle`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L49)

___

### Polygon

• **Polygon**: typeof [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md) = `Polygon`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L50)

___

### PolygonStyle

• **PolygonStyle**: typeof [`PolygonStyle`](geo_api_graphic_style_polygon_style.PolygonStyle.md) = `PolygonStyle`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:51](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L51)

___

### SpatialReference

• **SpatialReference**: typeof [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md) = `SpatialReference`

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L52)

## Methods

### clientGeomTypeToRampGeomType

▸ **clientGeomTypeToRampGeomType**(`clientType`): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientType` | `string` |

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:329](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L329)

___

### esriMapClickToRamp

▸ **esriMapClickToRamp**(`esriMapClick`, `id?`): [`MapClick`](../interfaces/geo_api_geo_defs.MapClick.md)

Convert an ESRI map click event object to a generic RAMPish map click event object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `esriMapClick` | `ViewClickEvent` \| `ViewDoubleClickEvent` | an event param from an esri 2D map click or double-click event |
| `id?` | `string` \| `number` | optional id for the map point geometry on the result |

#### Returns

[`MapClick`](../interfaces/geo_api_geo_defs.MapClick.md)

a generic bundle of data matching a subset of the incoming esri data

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L61)

___

### esriMapMouseToRamp

▸ **esriMapMouseToRamp**(`esriMapMove`): [`MapMove`](../interfaces/geo_api_geo_defs.MapMove.md)

Convert an ESRI map click event object to a generic RAMPish map click event object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `esriMapMove` | `ViewPointerMoveEvent` | an event param from an esri 2D map click or double-click event |

#### Returns

[`MapMove`](../interfaces/geo_api_geo_defs.MapMove.md)

a generic bundle of data matching a subset of the incoming esri data

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L81)

___

### geoJsonGeomTypeToEsriGeomType

▸ **geoJsonGeomTypeToEsriGeomType**(`geoJsonGeomType`): ``"point"`` \| ``"multipoint"`` \| ``"polyline"`` \| ``"polygon"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonGeomType` | [`GeoJsonGeomType`](../enums/geo_api_geo_defs.GeoJsonGeomType.md) |

#### Returns

``"point"`` \| ``"multipoint"`` \| ``"polyline"`` \| ``"polygon"``

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:353](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L353)

___

### geomEsriToRamp

▸ **geomEsriToRamp**(`esriGeometry`, `id?`): [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

Converts any ESRI geometry to a corresponding RAMP API geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `esriGeometry` | [`EsriGeometry`](geo_esri.EsriGeometry.md) | an ESRI geometry |
| `id?` | `string` \| `number` | optional id for the result geometry |

#### Returns

[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

a RAMP API geometry

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:107](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L107)

___

### geomGeoJsonToRamp

▸ **geomGeoJsonToRamp**(`geoJsonGeometry`, `id?`): [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

Converts any GeoJson geometry to a corresponding RAMP API geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geoJsonGeometry` | `DirectGeometryObject` | a GeoJson geometry |
| `id?` | `string` \| `number` | optional id for the result geometry |

#### Returns

[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

a RAMP API geometry

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:143](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L143)

___

### geomRampToEsri

▸ **geomRampToEsri**(`rampApiGeom`): [`EsriGeometry`](geo_esri.EsriGeometry.md)

Converts any RAMP API geometry to a corresponding ESRI geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rampApiGeom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | a RAMP API geometry |

#### Returns

[`EsriGeometry`](geo_esri.EsriGeometry.md)

an ESRI geometry

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L96)

___

### geomRampToGeoJson

▸ **geomRampToGeoJson**(`rampApiGeom`): `DirectGeometryObject`

Converts any RAMP API geometry to a corresponding GeoJson geometry

#### Parameters

| Name | Type |
| :------ | :------ |
| `rampApiGeom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) |

#### Returns

`DirectGeometryObject`

a GeoJson geometry

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:188](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L188)

___

### graphicGeoJsonToRamp

▸ **graphicGeoJsonToRamp**(`geoJsonFeature`, `geomId?`): [`Graphic`](geo_api_graphic_graphic.Graphic.md)

Converts any GeoJson Feature to a RAMP API Graphic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geoJsonFeature` | `any` | a GeoJson Feature |
| `geomId?` | `string` \| `number` | an id to apply to the geometry of the graphic |

#### Returns

[`Graphic`](geo_api_graphic_graphic.Graphic.md)

a RAMP API Graphic

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:221](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L221)

___

### graphicRampToEsri

▸ **graphicRampToEsri**(`rampGraphic`): [`EsriGraphic`](geo_esri.EsriGraphic.md)

Converts any RAMP API Graphic to an ESRI Graphic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rampGraphic` | [`Graphic`](geo_api_graphic_graphic.Graphic.md) | a RAMP API Graphic |

#### Returns

[`EsriGraphic`](geo_esri.EsriGraphic.md)

an ESRI Graphic

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:251](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L251)

___

### graphicRampToGeoJson

▸ **graphicRampToGeoJson**(`rampGraphic`): `any`

Converts any RAMP API Graphic to a GeoJson Feature. Any styles or ids will be excluded from the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rampGraphic` | [`Graphic`](geo_api_graphic_graphic.Graphic.md) | a RAMP API graphic |

#### Returns

`any`

a GeoJson Feature

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:198](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L198)

___

### isImageUrl

▸ **isImageUrl**(`text`): `boolean`

Check to see if text provided is a valid image / data URL based on extension type or format.

**`Function`**

isImageUrl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | string to be matched against valid image types / data url format |

#### Returns

`boolean`

true if valid image extension

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:382](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L382)

___

### serverGeomTypeToRampGeomType

▸ **serverGeomTypeToRampGeomType**(`serverType`): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverType` | `string` |

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:303](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L303)

___

### styleEsriToRamp

▸ **styleEsriToRamp**(`esriSymbol`): [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriSymbol` | [`EsriSymbol`](geo_esri.EsriSymbol.md) |

#### Returns

[`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md)

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:281](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L281)

___

### styleRampToEsri

▸ **styleRampToEsri**(`rampStyle`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rampStyle` | [`BaseStyle`](geo_api_graphic_style_base_style.BaseStyle.md) |

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Defined in

[src/geo/api/graphic/geometry/geometry.ts:277](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/geometry.ts#L277)
