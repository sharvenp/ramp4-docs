[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSimpleFillSymbol

# Class: EsriSimpleFillSymbol

[geo/esri](../modules/geo_esri.md).EsriSimpleFillSymbol

## Hierarchy

- `FillSymbol`

  ↳ **`EsriSimpleFillSymbol`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSimpleFillSymbol.md#constructor)

### Properties

- [color](geo_esri.EsriSimpleFillSymbol.md#color)
- [declaredClass](geo_esri.EsriSimpleFillSymbol.md#declaredclass)
- [destroyed](geo_esri.EsriSimpleFillSymbol.md#destroyed)
- [initialized](geo_esri.EsriSimpleFillSymbol.md#initialized)
- [outline](geo_esri.EsriSimpleFillSymbol.md#outline)
- [style](geo_esri.EsriSimpleFillSymbol.md#style)
- [type](geo_esri.EsriSimpleFillSymbol.md#type)

### Methods

- [\_get](geo_esri.EsriSimpleFillSymbol.md#_get)
- [\_set](geo_esri.EsriSimpleFillSymbol.md#_set)
- [addHandles](geo_esri.EsriSimpleFillSymbol.md#addhandles)
- [clone](geo_esri.EsriSimpleFillSymbol.md#clone)
- [destroy](geo_esri.EsriSimpleFillSymbol.md#destroy)
- [get](geo_esri.EsriSimpleFillSymbol.md#get)
- [hasHandles](geo_esri.EsriSimpleFillSymbol.md#hashandles)
- [notifyChange](geo_esri.EsriSimpleFillSymbol.md#notifychange)
- [own](geo_esri.EsriSimpleFillSymbol.md#own)
- [removeHandles](geo_esri.EsriSimpleFillSymbol.md#removehandles)
- [set](geo_esri.EsriSimpleFillSymbol.md#set)
- [toJSON](geo_esri.EsriSimpleFillSymbol.md#tojson)
- [watch](geo_esri.EsriSimpleFillSymbol.md#watch)
- [fromJSON](geo_esri.EsriSimpleFillSymbol.md#fromjson)

## Constructors

### constructor

• **new EsriSimpleFillSymbol**(`properties?`)

SimpleFillSymbol is used for rendering 2D polygons in either a [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) or a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SimpleFillSymbolProperties` |

#### Overrides

FillSymbol.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70102

## Properties

### color

• **color**: [`EsriColour`](geo_esri.EsriColour.md)

The color of the symbol.

**`Default`**

```ts
black

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
```

#### Inherited from

FillSymbol.color

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70840

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

FillSymbol.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

FillSymbol.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### initialized

• **initialized**: `boolean`

#### Inherited from

FillSymbol.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### outline

• **outline**: [`EsriSimpleLineSymbol`](geo_esri.EsriSimpleLineSymbol.md)

The outline of the polygon.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-FillSymbol.html#outline)

#### Inherited from

FillSymbol.outline

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:68088

___

### style

• **style**: ``"none"`` \| ``"backward-diagonal"`` \| ``"cross"`` \| ``"diagonal-cross"`` \| ``"forward-diagonal"`` \| ``"horizontal"`` \| ``"solid"`` \| ``"vertical"``

The fill style.

**`Default`**

```ts
solid

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html#style)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70083

___

### type

• `Readonly` **type**: ``"simple-fill"``

The symbol type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html#type)

#### Overrides

FillSymbol.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70096

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

FillSymbol.\_get

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

FillSymbol.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

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

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Inherited from

FillSymbol.\_set

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

FillSymbol.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### clone

▸ **clone**(): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

Creates a deep clone of the symbol.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html#clone)

#### Returns

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70108

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

FillSymbol.destroy

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

FillSymbol.get

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

FillSymbol.get

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

FillSymbol.hasHandles

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

FillSymbol.notifyChange

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

FillSymbol.own

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

FillSymbol.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

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

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Inherited from

FillSymbol.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Inherited from

FillSymbol.set

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

FillSymbol.toJSON

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

FillSymbol.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSimpleFillSymbol`](geo_esri.EsriSimpleFillSymbol.md)

#### Overrides

FillSymbol.fromJSON

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70109
