[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriField

# Class: EsriField

[geo/esri](../modules/geo_esri.md).EsriField

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriField`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriField.md#constructor)

### Properties

- [alias](geo_esri.EsriField.md#alias)
- [declaredClass](geo_esri.EsriField.md#declaredclass)
- [defaultValue](geo_esri.EsriField.md#defaultvalue)
- [description](geo_esri.EsriField.md#description)
- [destroyed](geo_esri.EsriField.md#destroyed)
- [domain](geo_esri.EsriField.md#domain)
- [editable](geo_esri.EsriField.md#editable)
- [initialized](geo_esri.EsriField.md#initialized)
- [length](geo_esri.EsriField.md#length)
- [name](geo_esri.EsriField.md#name)
- [nullable](geo_esri.EsriField.md#nullable)
- [type](geo_esri.EsriField.md#type)
- [valueType](geo_esri.EsriField.md#valuetype)

### Methods

- [\_get](geo_esri.EsriField.md#_get)
- [\_set](geo_esri.EsriField.md#_set)
- [addHandles](geo_esri.EsriField.md#addhandles)
- [destroy](geo_esri.EsriField.md#destroy)
- [get](geo_esri.EsriField.md#get)
- [hasHandles](geo_esri.EsriField.md#hashandles)
- [notifyChange](geo_esri.EsriField.md#notifychange)
- [own](geo_esri.EsriField.md#own)
- [removeHandles](geo_esri.EsriField.md#removehandles)
- [set](geo_esri.EsriField.md#set)
- [toJSON](geo_esri.EsriField.md#tojson)
- [watch](geo_esri.EsriField.md#watch)
- [fromJSON](geo_esri.EsriField.md#fromjson)

## Constructors

### constructor

• **new EsriField**(`properties?`)

Information about each field in a layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `FieldProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21019

## Properties

### alias

• **alias**: `string`

The display name for the field.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#alias)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20920

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Accessor.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### defaultValue

• **defaultValue**: `undefined` \| ``null`` \| `string` \| `number`

The default value set for the field.

**`Default`**

```ts
undefined

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#defaultValue)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20928

___

### description

• **description**: `string`

Contains information describing the purpose of each field.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#description)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20934

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Accessor.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### domain

• **domain**: `CodedValueDomain` \| `RangeDomain` \| `InheritedDomain`

The domain associated with the field.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#domain)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20942

___

### editable

• **editable**: `boolean`

Indicates whether the field is editable.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#editable)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20950

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### length

• **length**: `number`

The field length.

**`Default`**

```ts
-1

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#length)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20958

___

### name

• **name**: `string`

The name of the field.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#name)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20966

___

### nullable

• **nullable**: `boolean`

Indicates if the field can accept `null` values.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#nullable)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20974

___

### type

• **type**: ``"string"`` \| ``"blob"`` \| ``"small-integer"`` \| ``"integer"`` \| ``"single"`` \| ``"double"`` \| ``"long"`` \| ``"date"`` \| ``"oid"`` \| ``"geometry"`` \| ``"raster"`` \| ``"guid"`` \| ``"global-id"`` \| ``"xml"``

The data type of the field.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:20982

___

### valueType

• **valueType**: ``"none"`` \| ``"binary"`` \| ``"coordinate"`` \| ``"count-or-amount"`` \| ``"date-and-time"`` \| ``"description"`` \| ``"location-or-place-name"`` \| ``"measurement"`` \| ``"name-or-title"`` \| ``"ordered-or-ranked"`` \| ``"percentage-or-ratio"`` \| ``"type-or-category"`` \| ``"unique-identifier"``

The types of values that can be assigned to a field.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#valueType)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21001

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriField`](geo_esri.EsriField.md)

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

[`EsriField`](geo_esri.EsriField.md)

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriField`](geo_esri.EsriField.md)

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

[`EsriField`](geo_esri.EsriField.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriField`](geo_esri.EsriField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriField`](geo_esri.EsriField.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriField`](geo_esri.EsriField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriField`](geo_esri.EsriField.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21020
