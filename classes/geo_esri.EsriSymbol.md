[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSymbol

# Class: EsriSymbol

[geo/esri](../modules/geo_esri.md).EsriSymbol

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriSymbol`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSymbol.md#constructor)

### Properties

- [color](geo_esri.EsriSymbol.md#color)
- [declaredClass](geo_esri.EsriSymbol.md#declaredclass)
- [destroyed](geo_esri.EsriSymbol.md#destroyed)
- [initialized](geo_esri.EsriSymbol.md#initialized)
- [type](geo_esri.EsriSymbol.md#type)

### Methods

- [\_get](geo_esri.EsriSymbol.md#_get)
- [\_set](geo_esri.EsriSymbol.md#_set)
- [addHandles](geo_esri.EsriSymbol.md#addhandles)
- [destroy](geo_esri.EsriSymbol.md#destroy)
- [get](geo_esri.EsriSymbol.md#get)
- [hasHandles](geo_esri.EsriSymbol.md#hashandles)
- [notifyChange](geo_esri.EsriSymbol.md#notifychange)
- [own](geo_esri.EsriSymbol.md#own)
- [removeHandles](geo_esri.EsriSymbol.md#removehandles)
- [set](geo_esri.EsriSymbol.md#set)
- [toJSON](geo_esri.EsriSymbol.md#tojson)
- [watch](geo_esri.EsriSymbol.md#watch)
- [fromJSON](geo_esri.EsriSymbol.md#fromjson)

## Constructors

### constructor

• **new EsriSymbol**(`properties?`)

Symbol is the base class for all symbols.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SymbolProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70865

## Properties

### color

• **color**: [`EsriColour`](geo_esri.EsriColour.md)

The color of the symbol.

**`Default`**

```ts
black

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70840

___

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

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### type

• `Readonly` **type**: ``"text"`` \| ``"picture-marker"`` \| ``"simple-fill"`` \| ``"simple-line"`` \| ``"simple-marker"`` \| ``"picture-fill"`` \| ``"shield-label-symbol"`` \| ``"point-3d"`` \| ``"line-3d"`` \| ``"polygon-3d"`` \| ``"web-style"`` \| ``"mesh-3d"`` \| ``"label-3d"`` \| ``"cim"``

The symbol type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70846

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

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

[`EsriSymbol`](geo_esri.EsriSymbol.md)

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

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

Accessor.destroy

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

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

[`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:70866
