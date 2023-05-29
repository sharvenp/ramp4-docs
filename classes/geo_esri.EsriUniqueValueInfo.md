[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriUniqueValueInfo

# Class: EsriUniqueValueInfo

[geo/esri](../modules/geo_esri.md).EsriUniqueValueInfo

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriUniqueValueInfo`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriUniqueValueInfo.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriUniqueValueInfo.md#declaredclass)
- [destroyed](geo_esri.EsriUniqueValueInfo.md#destroyed)
- [initialized](geo_esri.EsriUniqueValueInfo.md#initialized)
- [label](geo_esri.EsriUniqueValueInfo.md#label)
- [symbol](geo_esri.EsriUniqueValueInfo.md#symbol)
- [value](geo_esri.EsriUniqueValueInfo.md#value)

### Methods

- [\_get](geo_esri.EsriUniqueValueInfo.md#_get)
- [\_set](geo_esri.EsriUniqueValueInfo.md#_set)
- [addHandles](geo_esri.EsriUniqueValueInfo.md#addhandles)
- [clone](geo_esri.EsriUniqueValueInfo.md#clone)
- [destroy](geo_esri.EsriUniqueValueInfo.md#destroy)
- [get](geo_esri.EsriUniqueValueInfo.md#get)
- [hasHandles](geo_esri.EsriUniqueValueInfo.md#hashandles)
- [notifyChange](geo_esri.EsriUniqueValueInfo.md#notifychange)
- [own](geo_esri.EsriUniqueValueInfo.md#own)
- [removeHandles](geo_esri.EsriUniqueValueInfo.md#removehandles)
- [set](geo_esri.EsriUniqueValueInfo.md#set)
- [toJSON](geo_esri.EsriUniqueValueInfo.md#tojson)
- [watch](geo_esri.EsriUniqueValueInfo.md#watch)
- [fromJSON](geo_esri.EsriUniqueValueInfo.md#fromjson)

## Constructors

### constructor

• **new EsriUniqueValueInfo**(`properties?`)

Defines the categories of a [UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `UniqueValueInfoProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39843

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

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### label

• **label**: `string`

Describes the [value](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#value) represented by the [symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#symbol).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#label)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39825

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

Defines the symbol used to render features with the provided [value](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#value).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#symbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39831

___

### value

• **value**: `string` \| `number`

Features with this value will be rendered with the given [symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#symbol).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#value)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39837

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

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

[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

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

▸ **clone**(): [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

Creates a deep clone of the unique value info object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-UniqueValueInfo.html#clone)

#### Returns

[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39849

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

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

[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39850
