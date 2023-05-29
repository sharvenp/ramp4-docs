[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSimpleLineSymbol

# Class: EsriSimpleLineSymbol

[geo/esri](../modules/geo_esri.md).EsriSimpleLineSymbol

## Hierarchy

- `LineSymbol`

  ↳ **`EsriSimpleLineSymbol`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSimpleLineSymbol.md#constructor)

### Properties

- [cap](geo_esri.EsriSimpleLineSymbol.md#cap)
- [color](geo_esri.EsriSimpleLineSymbol.md#color)
- [declaredClass](geo_esri.EsriSimpleLineSymbol.md#declaredclass)
- [destroyed](geo_esri.EsriSimpleLineSymbol.md#destroyed)
- [initialized](geo_esri.EsriSimpleLineSymbol.md#initialized)
- [join](geo_esri.EsriSimpleLineSymbol.md#join)
- [marker](geo_esri.EsriSimpleLineSymbol.md#marker)
- [miterLimit](geo_esri.EsriSimpleLineSymbol.md#miterlimit)
- [style](geo_esri.EsriSimpleLineSymbol.md#style)
- [type](geo_esri.EsriSimpleLineSymbol.md#type)
- [width](geo_esri.EsriSimpleLineSymbol.md#width)

### Methods

- [\_get](geo_esri.EsriSimpleLineSymbol.md#_get)
- [\_set](geo_esri.EsriSimpleLineSymbol.md#_set)
- [addHandles](geo_esri.EsriSimpleLineSymbol.md#addhandles)
- [clone](geo_esri.EsriSimpleLineSymbol.md#clone)
- [destroy](geo_esri.EsriSimpleLineSymbol.md#destroy)
- [get](geo_esri.EsriSimpleLineSymbol.md#get)
- [hasHandles](geo_esri.EsriSimpleLineSymbol.md#hashandles)
- [notifyChange](geo_esri.EsriSimpleLineSymbol.md#notifychange)
- [own](geo_esri.EsriSimpleLineSymbol.md#own)
- [removeHandles](geo_esri.EsriSimpleLineSymbol.md#removehandles)
- [set](geo_esri.EsriSimpleLineSymbol.md#set)
- [toJSON](geo_esri.EsriSimpleLineSymbol.md#tojson)
- [watch](geo_esri.EsriSimpleLineSymbol.md#watch)
- [fromJSON](geo_esri.EsriSimpleLineSymbol.md#fromjson)

## Constructors

### constructor

• **new EsriSimpleLineSymbol**(`properties?`)

SimpleLineSymbol is used for rendering 2D [polyline geometries](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html) in a 2D [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SimpleLineSymbolProperties` |

#### Overrides

LineSymbol.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70188

## Properties

### cap

• **cap**: ``"butt"`` \| ``"round"`` \| ``"square"``

Specifies the cap style.

**`Default`**

```ts
round

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#cap)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70141

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

LineSymbol.color

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70840

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

LineSymbol.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

LineSymbol.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### initialized

• **initialized**: `boolean`

#### Inherited from

LineSymbol.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### join

• **join**: ``"round"`` \| ``"miter"`` \| ``"bevel"``

Specifies the join style.

**`Default`**

```ts
round

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#join)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70149

___

### marker

• **marker**: ``null`` \| `LineSymbolMarker`

Specifies the color, style, and placement of a symbol marker on the line.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#marker)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70155

___

### miterLimit

• **miterLimit**: `number`

Maximum allowed ratio of the width of a miter join to the line width.

**`Default`**

```ts
2

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#miterLimit)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70163

___

### style

• **style**: ``"none"`` \| ``"solid"`` \| ``"dash"`` \| ``"dash-dot"`` \| ``"dot"`` \| ``"long-dash"`` \| ``"long-dash-dot"`` \| ``"long-dash-dot-dot"`` \| ``"short-dash"`` \| ``"short-dash-dot"`` \| ``"short-dash-dot-dot"`` \| ``"short-dot"``

Specifies the line style.

**`Default`**

```ts
solid

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#style)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70171

___

### type

• **type**: ``"simple-line"``

The symbol type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-LineSymbol.html#type)

#### Inherited from

LineSymbol.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:68794

___

### width

• **width**: `number`

The width of the symbol in points.

**`Default`**

```ts
0.75

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-LineSymbol.html#width)
```

#### Inherited from

LineSymbol.width

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:68802

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

LineSymbol.\_get

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

LineSymbol.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

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

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Inherited from

LineSymbol.\_set

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

LineSymbol.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### clone

▸ **clone**(): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

Creates a deep clone of the symbol.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#clone)

#### Returns

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70194

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

LineSymbol.destroy

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

LineSymbol.get

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

LineSymbol.get

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

LineSymbol.hasHandles

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

LineSymbol.notifyChange

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

LineSymbol.own

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

LineSymbol.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

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

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Inherited from

LineSymbol.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Inherited from

LineSymbol.set

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

LineSymbol.toJSON

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

LineSymbol.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

#### Overrides

LineSymbol.fromJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70195
