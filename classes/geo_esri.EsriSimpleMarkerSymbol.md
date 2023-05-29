[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSimpleMarkerSymbol

# Class: EsriSimpleMarkerSymbol

[geo/esri](../modules/geo_esri.md).EsriSimpleMarkerSymbol

## Hierarchy

- `MarkerSymbol`

  ↳ **`EsriSimpleMarkerSymbol`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSimpleMarkerSymbol.md#constructor)

### Properties

- [angle](geo_esri.EsriSimpleMarkerSymbol.md#angle)
- [color](geo_esri.EsriSimpleMarkerSymbol.md#color)
- [declaredClass](geo_esri.EsriSimpleMarkerSymbol.md#declaredclass)
- [destroyed](geo_esri.EsriSimpleMarkerSymbol.md#destroyed)
- [initialized](geo_esri.EsriSimpleMarkerSymbol.md#initialized)
- [outline](geo_esri.EsriSimpleMarkerSymbol.md#outline)
- [path](geo_esri.EsriSimpleMarkerSymbol.md#path)
- [size](geo_esri.EsriSimpleMarkerSymbol.md#size)
- [style](geo_esri.EsriSimpleMarkerSymbol.md#style)
- [type](geo_esri.EsriSimpleMarkerSymbol.md#type)
- [xoffset](geo_esri.EsriSimpleMarkerSymbol.md#xoffset)
- [yoffset](geo_esri.EsriSimpleMarkerSymbol.md#yoffset)

### Methods

- [\_get](geo_esri.EsriSimpleMarkerSymbol.md#_get)
- [\_set](geo_esri.EsriSimpleMarkerSymbol.md#_set)
- [addHandles](geo_esri.EsriSimpleMarkerSymbol.md#addhandles)
- [clone](geo_esri.EsriSimpleMarkerSymbol.md#clone)
- [destroy](geo_esri.EsriSimpleMarkerSymbol.md#destroy)
- [get](geo_esri.EsriSimpleMarkerSymbol.md#get)
- [hasHandles](geo_esri.EsriSimpleMarkerSymbol.md#hashandles)
- [notifyChange](geo_esri.EsriSimpleMarkerSymbol.md#notifychange)
- [own](geo_esri.EsriSimpleMarkerSymbol.md#own)
- [removeHandles](geo_esri.EsriSimpleMarkerSymbol.md#removehandles)
- [set](geo_esri.EsriSimpleMarkerSymbol.md#set)
- [toJSON](geo_esri.EsriSimpleMarkerSymbol.md#tojson)
- [watch](geo_esri.EsriSimpleMarkerSymbol.md#watch)
- [fromJSON](geo_esri.EsriSimpleMarkerSymbol.md#fromjson)

## Constructors

### constructor

• **new EsriSimpleMarkerSymbol**(`properties?`)

SimpleMarkerSymbol is used for rendering 2D [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) geometries with a simple shape and [color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#color) in either a [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) or a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SimpleMarkerSymbolProperties` |

#### Overrides

MarkerSymbol.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70293

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

### initialized

• **initialized**: `boolean`

#### Inherited from

MarkerSymbol.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### outline

• **outline**: [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

The outline of the marker symbol.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#outline)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70259

___

### path

• **path**: `string`

The SVG path of the icon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#path)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70265

___

### size

• **size**: `number`

The size of the marker in points.

**`Default`**

```ts
12

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#size)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70273

___

### style

• **style**: ``"cross"`` \| ``"square"`` \| ``"circle"`` \| ``"x"`` \| ``"diamond"`` \| ``"triangle"`` \| ``"path"``

The marker style.

**`Default`**

```ts
circle

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#style)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70281

___

### type

• `Readonly` **type**: ``"simple-marker"``

The symbol type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#type)

#### Overrides

MarkerSymbol.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70287

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

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

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

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

▸ **clone**(): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

Creates a deep clone of the symbol.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html#clone)

#### Returns

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70299

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

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

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

#### Inherited from

MarkerSymbol.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSimpleMarkerSymbol`](geo_esri.EsriSimpleMarkerSymbol.md)

#### Overrides

MarkerSymbol.fromJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70300
