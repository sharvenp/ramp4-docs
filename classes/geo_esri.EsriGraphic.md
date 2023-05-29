[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriGraphic

# Class: EsriGraphic

[geo/esri](../modules/geo_esri.md).EsriGraphic

## Hierarchy

- `Accessor`

- `JSONSupport`

  ↳ **`EsriGraphic`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriGraphic.md#constructor)

### Properties

- [aggregateGeometries](geo_esri.EsriGraphic.md#aggregategeometries)
- [attributes](geo_esri.EsriGraphic.md#attributes)
- [declaredClass](geo_esri.EsriGraphic.md#declaredclass)
- [destroyed](geo_esri.EsriGraphic.md#destroyed)
- [geometry](geo_esri.EsriGraphic.md#geometry)
- [initialized](geo_esri.EsriGraphic.md#initialized)
- [isAggregate](geo_esri.EsriGraphic.md#isaggregate)
- [layer](geo_esri.EsriGraphic.md#layer)
- [popupTemplate](geo_esri.EsriGraphic.md#popuptemplate)
- [symbol](geo_esri.EsriGraphic.md#symbol)
- [visible](geo_esri.EsriGraphic.md#visible)

### Methods

- [\_get](geo_esri.EsriGraphic.md#_get)
- [\_set](geo_esri.EsriGraphic.md#_set)
- [addHandles](geo_esri.EsriGraphic.md#addhandles)
- [clone](geo_esri.EsriGraphic.md#clone)
- [destroy](geo_esri.EsriGraphic.md#destroy)
- [get](geo_esri.EsriGraphic.md#get)
- [getAttribute](geo_esri.EsriGraphic.md#getattribute)
- [getEffectivePopupTemplate](geo_esri.EsriGraphic.md#geteffectivepopuptemplate)
- [getObjectId](geo_esri.EsriGraphic.md#getobjectid)
- [hasHandles](geo_esri.EsriGraphic.md#hashandles)
- [notifyChange](geo_esri.EsriGraphic.md#notifychange)
- [own](geo_esri.EsriGraphic.md#own)
- [removeHandles](geo_esri.EsriGraphic.md#removehandles)
- [set](geo_esri.EsriGraphic.md#set)
- [setAttribute](geo_esri.EsriGraphic.md#setattribute)
- [toJSON](geo_esri.EsriGraphic.md#tojson)
- [watch](geo_esri.EsriGraphic.md#watch)
- [fromJSON](geo_esri.EsriGraphic.md#fromjson)

## Constructors

### constructor

• **new EsriGraphic**(`properties?`)

A Graphic is a vector representation of real world geographic phenomena.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `GraphicProperties` |

#### Inherited from

Accessor.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7479

## Properties

### aggregateGeometries

• **aggregateGeometries**: `any`

The aggregateGeometries contains spatial aggregation geometries when [statistics](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-StatisticDefinition.html#statisticType) query is executed with `envelope-aggregate`, `centroid-aggregate` and/or `convex-hull-aggregate` statistics type.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#aggregateGeometries)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7429

___

### attributes

• **attributes**: `any`

Name-value pairs of fields and field values associated with the graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#attributes)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7435

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

### geometry

• **geometry**: [`EsriGeometry`](geo_esri.EsriGeometry.md)

The geometry that defines the graphic's location.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#geometry)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7441

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Accessor.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### isAggregate

• `Readonly` **isAggregate**: `boolean`

Indicates whether the graphic refers to an aggregate, or [cluster](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureReductionCluster.html) graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#isAggregate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7447

___

### layer

• **layer**: `Layer`

If applicable, references the layer in which the graphic is stored.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#layer)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7453

___

### popupTemplate

• **popupTemplate**: `PopupTemplate`

The template for displaying content in a [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) when the graphic is selected.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#popupTemplate)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7459

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

The [Symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html) for the graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#symbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7465

___

### visible

• **visible**: `boolean`

Indicates the visibility of the graphic.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#visible)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7473

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriGraphic`](geo_esri.EsriGraphic.md)

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

[`EsriGraphic`](geo_esri.EsriGraphic.md)

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

▸ **clone**(): [`EsriGraphic`](geo_esri.EsriGraphic.md)

Creates a deep clone of this object.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#clone)

#### Returns

[`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7485

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

### getAttribute

▸ **getAttribute**(`name`): `any`

Returns the value of the specified attribute.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#getAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7491

___

### getEffectivePopupTemplate

▸ **getEffectivePopupTemplate**(`defaultPopupTemplateEnabled?`): `PopupTemplate`

Returns the popup template applicable for the graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#getEffectivePopupTemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultPopupTemplateEnabled?` | `boolean` |

#### Returns

`PopupTemplate`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7497

___

### getObjectId

▸ **getObjectId**(): `number`

Returns the Object ID of the feature associated with the graphic, if it exists.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#getObjectId)

#### Returns

`number`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7503

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriGraphic`](geo_esri.EsriGraphic.md)

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

[`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Inherited from

Accessor.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### setAttribute

▸ **setAttribute**(`name`, `newValue`): `void`

Sets a new value to the specified attribute.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#setAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7509

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

▸ `Static` **fromJSON**(`json`): [`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriGraphic`](geo_esri.EsriGraphic.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:7510
