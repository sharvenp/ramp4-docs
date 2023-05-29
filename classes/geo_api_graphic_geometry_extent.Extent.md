[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/api/graphic/geometry/extent](../modules/geo_api_graphic_geometry_extent.md) / Extent

# Class: Extent

[geo/api/graphic/geometry/extent](../modules/geo_api_graphic_geometry_extent.md).Extent

Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.

## Hierarchy

- [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

  ↳ **`Extent`**

## Table of contents

### Constructors

- [constructor](geo_api_graphic_geometry_extent.Extent.md#constructor)

### Properties

- [id](geo_api_graphic_geometry_extent.Extent.md#id)
- [rawMax](geo_api_graphic_geometry_extent.Extent.md#rawmax)
- [rawMin](geo_api_graphic_geometry_extent.Extent.md#rawmin)
- [sr](geo_api_graphic_geometry_extent.Extent.md#sr)

### Accessors

- [type](geo_api_graphic_geometry_extent.Extent.md#type)
- [xmax](geo_api_graphic_geometry_extent.Extent.md#xmax)
- [xmin](geo_api_graphic_geometry_extent.Extent.md#xmin)
- [ymax](geo_api_graphic_geometry_extent.Extent.md#ymax)
- [ymin](geo_api_graphic_geometry_extent.Extent.md#ymin)

### Methods

- [center](geo_api_graphic_geometry_extent.Extent.md#center)
- [childIdGenerator](geo_api_graphic_geometry_extent.Extent.md#childidgenerator)
- [clone](geo_api_graphic_geometry_extent.Extent.md#clone)
- [expand](geo_api_graphic_geometry_extent.Extent.md#expand)
- [geoJsonFactory](geo_api_graphic_geometry_extent.Extent.md#geojsonfactory)
- [invalid](geo_api_graphic_geometry_extent.Extent.md#invalid)
- [isEqual](geo_api_graphic_geometry_extent.Extent.md#isequal)
- [toArray](geo_api_graphic_geometry_extent.Extent.md#toarray)
- [toESRI](geo_api_graphic_geometry_extent.Extent.md#toesri)
- [toGeoJSON](geo_api_graphic_geometry_extent.Extent.md#togeojson)
- [toPolygon](geo_api_graphic_geometry_extent.Extent.md#topolygon)
- [toPolygonArray](geo_api_graphic_geometry_extent.Extent.md#topolygonarray)
- [fromArcServer](geo_api_graphic_geometry_extent.Extent.md#fromarcserver)
- [fromConfig](geo_api_graphic_geometry_extent.Extent.md#fromconfig)
- [fromESRI](geo_api_graphic_geometry_extent.Extent.md#fromesri)
- [fromGeoJSON](geo_api_graphic_geometry_extent.Extent.md#fromgeojson)
- [fromParams](geo_api_graphic_geometry_extent.Extent.md#fromparams)

## Constructors

### constructor

• **new Extent**(`id`, `minPoint`, `maxPoint`, `sr?`)

Constructs an Extent from the given source of verticies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) | An identifier for the Extent |
| `minPoint` | [`Point`](geo_api_graphic_geometry_point.Point.md) | - |
| `maxPoint` | [`Point`](geo_api_graphic_geometry_point.Point.md) | - |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) | A spatial reference for the geometry. Defaults to Lat/Long if not provided |

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[constructor](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#constructor)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L30)

• **new Extent**(`id`, `minCoords`, `maxCoords`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `minCoords` | `number`[] |
| `maxCoords` | `number`[] |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L31)

• **new Extent**(`id`, `minXY`, `maxXY`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `minXY` | `object` |
| `maxXY` | `object` |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:37](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L37)

• **new Extent**(`id`, `minAnyFormat`, `maxAnyFormat`, `sr?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `minAnyFormat` | `any` |
| `maxAnyFormat` | `any` |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Overrides

BaseGeometry.constructor

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L38)

## Properties

### id

• `Readonly` **id**: `string`

Id of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[id](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#id)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:14](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L14)

___

### rawMax

• `Protected` **rawMax**: `number`[]

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L19)

___

### rawMin

• `Protected` **rawMin**: `number`[]

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L18)

___

### sr

• **sr**: [`SpatialReference`](geo_api_graphic_geometry_spatial_reference.SpatialReference.md)

Spatial Reference of the geometry

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[sr](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#sr)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:11](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L11)

## Accessors

### type

• `get` **type**(): [`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

Returns the string 'Extent'.

#### Returns

[`GeometryType`](../enums/geo_api_geo_defs.GeometryType.md)

#### Overrides

BaseGeometry.type

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L49)

___

### xmax

• `get` **xmax**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L61)

___

### xmin

• `get` **xmin**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:53](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L53)

___

### ymax

• `get` **ymax**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:65](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L65)

___

### ymin

• `get` **ymin**(): `number`

#### Returns

`number`

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:57](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L57)

## Methods

### center

▸ **center**(): [`Point`](geo_api_graphic_geometry_point.Point.md)

#### Returns

[`Point`](geo_api_graphic_geometry_point.Point.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:69](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L69)

___

### childIdGenerator

▸ `Protected` **childIdGenerator**(`idx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`string`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[childIdGenerator](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#childidgenerator)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L29)

___

### clone

▸ **clone**(): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:89](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L89)

___

### expand

▸ **expand**(`factor`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L81)

___

### geoJsonFactory

▸ `Protected` **geoJsonFactory**(`type`, `coords`): `DirectGeometryObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `coords` | `any`[] |

#### Returns

`DirectGeometryObject`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[geoJsonFactory](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#geojsonfactory)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L52)

___

### invalid

▸ **invalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[invalid](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#invalid)

#### Defined in

[src/geo/api/graphic/geometry/base-geometry.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/base-geometry.ts#L45)

___

### isEqual

▸ **isEqual**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| [`Extent`](geo_api_graphic_geometry_extent.Extent.md) |

#### Returns

`boolean`

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:136](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L136)

___

### toArray

▸ **toArray**(): `number`[][]

Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )

#### Returns

`number`[][]

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L96)

___

### toESRI

▸ **toESRI**(): [`EsriExtent`](geo_esri.EsriExtent.md)

#### Returns

[`EsriExtent`](geo_esri.EsriExtent.md)

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toESRI](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#toesri)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:162](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L162)

___

### toGeoJSON

▸ **toGeoJSON**(): `Polygon`

#### Returns

`Polygon`

#### Overrides

[BaseGeometry](geo_api_graphic_geometry_base_geometry.BaseGeometry.md).[toGeoJSON](geo_api_graphic_geometry_base_geometry.BaseGeometry.md#togeojson)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L214)

___

### toPolygon

▸ **toPolygon**(): [`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Returns

[`Polygon`](geo_api_graphic_geometry_polygon.Polygon.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:112](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L112)

___

### toPolygonArray

▸ **toPolygonArray**(): `number`[][][]

#### Returns

`number`[][][]

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:100](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L100)

___

### fromArcServer

▸ `Static` **fromArcServer**(`serverExtent`, `id?`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverExtent` | `any` |
| `id?` | `string` \| `number` |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:172](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L172)

___

### fromConfig

▸ `Static` **fromConfig**(`id`, `configExtent`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `configExtent` | [`RampExtentConfig`](../interfaces/geo_api_geo_defs.RampExtentConfig.md) |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:127](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L127)

___

### fromESRI

▸ `Static` **fromESRI**(`esriExtent`, `id?`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `esriExtent` | [`EsriExtent`](geo_esri.EsriExtent.md) |
| `id?` | `string` \| `number` |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:151](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L151)

___

### fromGeoJSON

▸ `Static` **fromGeoJSON**(`geoJsonExtent`, `id?`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJsonExtent` | `Polygon` |
| `id?` | `string` \| `number` |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:180](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L180)

___

### fromParams

▸ `Static` **fromParams**(`id`, `xmin`, `ymin`, `xmax`, `ymax`, `sr?`): [`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdDef`](../modules/geo_api_geo_defs.md#iddef) |
| `xmin` | `string` \| `number` |
| `ymin` | `string` \| `number` |
| `xmax` | `string` \| `number` |
| `ymax` | `string` \| `number` |
| `sr?` | [`SrDef`](../modules/geo_api_geo_defs.md#srdef) |

#### Returns

[`Extent`](geo_api_graphic_geometry_extent.Extent.md)

#### Defined in

[src/geo/api/graphic/geometry/extent.ts:116](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/api/graphic/geometry/extent.ts#L116)
