[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSpatialReference

# Class: EsriSpatialReference

[geo/esri](../modules/geo_esri.md).EsriSpatialReference

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriSpatialReference`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSpatialReference.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriSpatialReference.md#declaredclass)
- [destroyed](geo_esri.EsriSpatialReference.md#destroyed)
- [imageCoordinateSystem](geo_esri.EsriSpatialReference.md#imagecoordinatesystem)
- [initialized](geo_esri.EsriSpatialReference.md#initialized)
- [isGeographic](geo_esri.EsriSpatialReference.md#isgeographic)
- [isWGS84](geo_esri.EsriSpatialReference.md#iswgs84)
- [isWebMercator](geo_esri.EsriSpatialReference.md#iswebmercator)
- [isWrappable](geo_esri.EsriSpatialReference.md#iswrappable)
- [metersPerUnit](geo_esri.EsriSpatialReference.md#metersperunit)
- [unit](geo_esri.EsriSpatialReference.md#unit)
- [wkid](geo_esri.EsriSpatialReference.md#wkid)
- [wkt](geo_esri.EsriSpatialReference.md#wkt)
- [WGS84](geo_esri.EsriSpatialReference.md#wgs84)
- [WebMercator](geo_esri.EsriSpatialReference.md#webmercator)

### Methods

- [\_get](geo_esri.EsriSpatialReference.md#_get)
- [\_set](geo_esri.EsriSpatialReference.md#_set)
- [addHandles](geo_esri.EsriSpatialReference.md#addhandles)
- [clone](geo_esri.EsriSpatialReference.md#clone)
- [destroy](geo_esri.EsriSpatialReference.md#destroy)
- [equals](geo_esri.EsriSpatialReference.md#equals)
- [get](geo_esri.EsriSpatialReference.md#get)
- [hasHandles](geo_esri.EsriSpatialReference.md#hashandles)
- [notifyChange](geo_esri.EsriSpatialReference.md#notifychange)
- [own](geo_esri.EsriSpatialReference.md#own)
- [removeHandles](geo_esri.EsriSpatialReference.md#removehandles)
- [set](geo_esri.EsriSpatialReference.md#set)
- [toJSON](geo_esri.EsriSpatialReference.md#tojson)
- [watch](geo_esri.EsriSpatialReference.md#watch)
- [fromJSON](geo_esri.EsriSpatialReference.md#fromjson)

## Constructors

### constructor

• **new EsriSpatialReference**(`properties?`)

Defines the spatial reference of a view, layer, or method parameters.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SpatialReferenceProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6602

## Properties

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Accessor.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Accessor.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### imageCoordinateSystem

• **imageCoordinateSystem**: `any`

An [image coordinate system](https://developers.arcgis.com/rest/services-reference/raster-ics.htm) defines the spatial reference used to display the image in its original coordinates without distortion, map transformations or ortho-rectification.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#imageCoordinateSystem)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6519

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### isGeographic

• `Readonly` **isGeographic**: `boolean`

Indicates if the spatial reference refers to a geographic coordinate system.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#isGeographic)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6525

___

### isWGS84

• `Readonly` **isWGS84**: `boolean`

Indicates if the [wkid](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkid) of the spatial reference object is `4326`.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#isWGS84)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6537

___

### isWebMercator

• `Readonly` **isWebMercator**: `boolean`

Indicates if the [wkid](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkid) of the spatial reference object is one of the following values: `102113`, `102100`, `3857`.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#isWebMercator)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6531

___

### isWrappable

• `Readonly` **isWrappable**: `boolean`

Indicates if the spatial reference of the map supports wrapping around the International Date Line.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#isWrappable)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6543

___

### metersPerUnit

• `Readonly` **metersPerUnit**: `number`

The factor to convert one unit value in the spatial reference's [unit](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#unit) to meters.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#metersPerUnit)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6549

___

### unit

• `Readonly` **unit**: ``null`` \| ``"feet"`` \| ``"meters"`` \| ``"degrees"`` \| ``"us-feet"`` \| ``"clarke-feet"`` \| ``"clarke-yards"`` \| ``"clarke-links"`` \| ``"sears-yards"`` \| ``"sears-feet"`` \| ``"sears-chains"`` \| ``"benoit-1895-b-chains"`` \| ``"indian-yards"`` \| ``"indian-1937-yards"`` \| ``"gold-coast-feet"`` \| ``"sears-1922-truncated-chains"`` \| ``"50-kilometers"`` \| ``"150-kilometers"``

The unit of the spatial reference.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#unit)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6555

___

### wkid

• **wkid**: `number`

The well-known ID of a spatial reference.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkid)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6578

___

### wkt

• **wkt**: `string`

The well-known text that defines a spatial reference.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkt)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6584

___

### WGS84

▪ `Static` **WGS84**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

A convenience spatial reference instance for WGS84.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#WGS84)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6596

___

### WebMercator

▪ `Static` **WebMercator**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

A convenience spatial reference instance for Web Mercator.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#WebMercator)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6590

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

Accessor.\_get

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

Accessor.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

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

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Inherited from

Accessor.\_set

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

Accessor.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### clone

▸ **clone**(): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

Returns a deep clone of the spatial reference object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#clone)

#### Returns

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6608

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

Accessor.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20

___

### equals

▸ **equals**(`spatialReference`): `boolean`

Checks if the specified spatial reference object has the same [wkid](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkid) or [wkt](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkt) as this spatial reference object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#equals)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spatialReference` | [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6614

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

Accessor.get

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

Accessor.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

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

Accessor.hasHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30

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

Accessor.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

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

Accessor.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

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

Accessor.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

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

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### toJSON

▸ **toJSON**(): `any`

Converts an instance of this class to its [ArcGIS portal JSON](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) representation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-JSONSupport.html#toJSON)

#### Returns

`any`

#### Inherited from

JSONSupport.toJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2167

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

Accessor.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:6615
