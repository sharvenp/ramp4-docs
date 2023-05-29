[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriPictureMarkerSymbol

# Class: EsriPictureMarkerSymbol

[geo/esri](../modules/geo_esri.md).EsriPictureMarkerSymbol

## Hierarchy

- `MarkerSymbol`

  ↳ **`EsriPictureMarkerSymbol`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriPictureMarkerSymbol.md#constructor)

### Properties

- [angle](geo_esri.EsriPictureMarkerSymbol.md#angle)
- [color](geo_esri.EsriPictureMarkerSymbol.md#color)
- [declaredClass](geo_esri.EsriPictureMarkerSymbol.md#declaredclass)
- [destroyed](geo_esri.EsriPictureMarkerSymbol.md#destroyed)
- [height](geo_esri.EsriPictureMarkerSymbol.md#height)
- [initialized](geo_esri.EsriPictureMarkerSymbol.md#initialized)
- [type](geo_esri.EsriPictureMarkerSymbol.md#type)
- [url](geo_esri.EsriPictureMarkerSymbol.md#url)
- [width](geo_esri.EsriPictureMarkerSymbol.md#width)
- [xoffset](geo_esri.EsriPictureMarkerSymbol.md#xoffset)
- [yoffset](geo_esri.EsriPictureMarkerSymbol.md#yoffset)

### Methods

- [\_get](geo_esri.EsriPictureMarkerSymbol.md#_get)
- [\_set](geo_esri.EsriPictureMarkerSymbol.md#_set)
- [addHandles](geo_esri.EsriPictureMarkerSymbol.md#addhandles)
- [clone](geo_esri.EsriPictureMarkerSymbol.md#clone)
- [destroy](geo_esri.EsriPictureMarkerSymbol.md#destroy)
- [get](geo_esri.EsriPictureMarkerSymbol.md#get)
- [hasHandles](geo_esri.EsriPictureMarkerSymbol.md#hashandles)
- [notifyChange](geo_esri.EsriPictureMarkerSymbol.md#notifychange)
- [own](geo_esri.EsriPictureMarkerSymbol.md#own)
- [removeHandles](geo_esri.EsriPictureMarkerSymbol.md#removehandles)
- [set](geo_esri.EsriPictureMarkerSymbol.md#set)
- [toJSON](geo_esri.EsriPictureMarkerSymbol.md#tojson)
- [watch](geo_esri.EsriPictureMarkerSymbol.md#watch)
- [fromJSON](geo_esri.EsriPictureMarkerSymbol.md#fromjson)

## Constructors

### constructor

• **new EsriPictureMarkerSymbol**(`properties?`)

PictureMarkerSymbol renders [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) graphics in either a 2D [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) or 3D [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html) using an image.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `PictureMarkerSymbolProperties` |

#### Overrides

MarkerSymbol.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69913

## Properties

### angle

• **angle**: `number`

The angle of the marker relative to the screen in degrees.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-MarkerSymbol.html#angle)
```

#### Inherited from

MarkerSymbol.angle

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69081

___

### color

• **color**: [`EsriColour`](geo_esri.EsriColour.md)

The color of the symbol.

**`Default`**

```ts
black

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
```

#### Inherited from

MarkerSymbol.color

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70840

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

MarkerSymbol.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

MarkerSymbol.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### height

• **height**: `number`

The height of the image in points.

**`Default`**

```ts
12

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html#height)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69887

___

### initialized

• **initialized**: `boolean`

#### Inherited from

MarkerSymbol.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### type

• `Readonly` **type**: ``"picture-marker"``

The symbol type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html#type)

#### Overrides

MarkerSymbol.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69893

___

### url

• **url**: `string`

The URL to an image or SVG document.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html#url)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69899

___

### width

• **width**: `number`

The width of the image in points.

**`Default`**

```ts
12

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html#width)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69907

___

### xoffset

• **xoffset**: `number`

The offset on the x-axis in points.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-MarkerSymbol.html#xoffset)
```

#### Inherited from

MarkerSymbol.xoffset

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69095

___

### yoffset

• **yoffset**: `number`

The offset on the y-axis in points.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-MarkerSymbol.html#yoffset)
```

#### Inherited from

MarkerSymbol.yoffset

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69103

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

MarkerSymbol.\_get

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

MarkerSymbol.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

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

[`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Inherited from

MarkerSymbol.\_set

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

MarkerSymbol.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### clone

▸ **clone**(): [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

Creates a deep clone of the symbol.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html#clone)

#### Returns

[`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69919

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

MarkerSymbol.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20

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

MarkerSymbol.get

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

MarkerSymbol.get

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

MarkerSymbol.hasHandles

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

MarkerSymbol.notifyChange

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

MarkerSymbol.own

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

MarkerSymbol.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

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

[`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Inherited from

MarkerSymbol.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Inherited from

MarkerSymbol.set

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

MarkerSymbol.toJSON

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

MarkerSymbol.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriPictureMarkerSymbol`](geo_esri.EsriPictureMarkerSymbol.md)

#### Overrides

MarkerSymbol.fromJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:69920
