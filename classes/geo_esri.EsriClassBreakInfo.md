[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriClassBreakInfo

# Class: EsriClassBreakInfo

[geo/esri](../modules/geo_esri.md).EsriClassBreakInfo

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriClassBreakInfo`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriClassBreakInfo.md#constructor)

### Properties

- [declaredClass](geo_esri.EsriClassBreakInfo.md#declaredclass)
- [destroyed](geo_esri.EsriClassBreakInfo.md#destroyed)
- [initialized](geo_esri.EsriClassBreakInfo.md#initialized)
- [label](geo_esri.EsriClassBreakInfo.md#label)
- [maxValue](geo_esri.EsriClassBreakInfo.md#maxvalue)
- [minValue](geo_esri.EsriClassBreakInfo.md#minvalue)
- [symbol](geo_esri.EsriClassBreakInfo.md#symbol)

### Methods

- [\_get](geo_esri.EsriClassBreakInfo.md#_get)
- [\_set](geo_esri.EsriClassBreakInfo.md#_set)
- [addHandles](geo_esri.EsriClassBreakInfo.md#addhandles)
- [clone](geo_esri.EsriClassBreakInfo.md#clone)
- [destroy](geo_esri.EsriClassBreakInfo.md#destroy)
- [get](geo_esri.EsriClassBreakInfo.md#get)
- [hasHandles](geo_esri.EsriClassBreakInfo.md#hashandles)
- [notifyChange](geo_esri.EsriClassBreakInfo.md#notifychange)
- [own](geo_esri.EsriClassBreakInfo.md#own)
- [removeHandles](geo_esri.EsriClassBreakInfo.md#removehandles)
- [set](geo_esri.EsriClassBreakInfo.md#set)
- [toJSON](geo_esri.EsriClassBreakInfo.md#tojson)
- [watch](geo_esri.EsriClassBreakInfo.md#watch)
- [fromJSON](geo_esri.EsriClassBreakInfo.md#fromjson)

## Constructors

### constructor

• **new EsriClassBreakInfo**(`properties?`)

Defines a class break for a [ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `ClassBreakInfoProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39507

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

Describes the data represented by the class break.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html#label)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39483

___

### maxValue

• **maxValue**: `number`

Sets the maximum value for the class break.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html#maxValue)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39489

___

### minValue

• **minValue**: `number`

Sets the minimum value for the class break.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html#minValue)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39495

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

Defines the symbol used to render features with data values that are within the bounds defined for the class break.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html#symbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39501

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

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

[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

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

▸ **clone**(): [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

Creates a deep clone of the class break info object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-ClassBreakInfo.html#clone)

#### Returns

[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39513

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

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

[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39514
