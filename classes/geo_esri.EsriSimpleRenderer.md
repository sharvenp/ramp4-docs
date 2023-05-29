[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriSimpleRenderer

# Class: EsriSimpleRenderer

[geo/esri](../modules/geo_esri.md).EsriSimpleRenderer

## Hierarchy

- [`EsriRenderer`](geo_esri.EsriRenderer.md)

- `VisualVariablesMixin`

  ↳ **`EsriSimpleRenderer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriSimpleRenderer.md#constructor)

### Properties

- [authoringInfo](geo_esri.EsriSimpleRenderer.md#authoringinfo)
- [declaredClass](geo_esri.EsriSimpleRenderer.md#declaredclass)
- [destroyed](geo_esri.EsriSimpleRenderer.md#destroyed)
- [initialized](geo_esri.EsriSimpleRenderer.md#initialized)
- [label](geo_esri.EsriSimpleRenderer.md#label)
- [symbol](geo_esri.EsriSimpleRenderer.md#symbol)
- [type](geo_esri.EsriSimpleRenderer.md#type)
- [visualVariables](geo_esri.EsriSimpleRenderer.md#visualvariables)

### Methods

- [\_get](geo_esri.EsriSimpleRenderer.md#_get)
- [\_set](geo_esri.EsriSimpleRenderer.md#_set)
- [addHandles](geo_esri.EsriSimpleRenderer.md#addhandles)
- [clone](geo_esri.EsriSimpleRenderer.md#clone)
- [destroy](geo_esri.EsriSimpleRenderer.md#destroy)
- [get](geo_esri.EsriSimpleRenderer.md#get)
- [hasHandles](geo_esri.EsriSimpleRenderer.md#hashandles)
- [notifyChange](geo_esri.EsriSimpleRenderer.md#notifychange)
- [own](geo_esri.EsriSimpleRenderer.md#own)
- [removeHandles](geo_esri.EsriSimpleRenderer.md#removehandles)
- [set](geo_esri.EsriSimpleRenderer.md#set)
- [toJSON](geo_esri.EsriSimpleRenderer.md#tojson)
- [watch](geo_esri.EsriSimpleRenderer.md#watch)
- [fromJSON](geo_esri.EsriSimpleRenderer.md#fromjson)

## Constructors

### constructor

• **new EsriSimpleRenderer**(`properties?`)

SimpleRenderer renders all features in a [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) with one [Symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `SimpleRendererProperties` |

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[constructor](geo_esri.EsriRenderer.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38806

## Properties

### authoringInfo

• **authoringInfo**: `AuthoringInfo`

Authoring metadata only included in renderers generated from one of the Smart Mapping creator methods, such as [sizeRendererCreator.createContinuousRenderer()](https://developers.arcgis.com/javascript/latest/api-reference/esri-smartMapping-renderers-size.html#createContinuousRenderer) or [colorRendererCreator.createContinuousRenderer()](https://developers.arcgis.com/javascript/latest/api-reference/esri-smartMapping-renderers-color.html#createContinuousRenderer).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#authoringInfo)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[authoringInfo](geo_esri.EsriRenderer.md#authoringinfo)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38751

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[declaredClass](geo_esri.EsriRenderer.md#declaredclass)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[destroyed](geo_esri.EsriRenderer.md#destroyed)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### initialized

• **initialized**: `boolean`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[initialized](geo_esri.EsriRenderer.md#initialized)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### label

• **label**: `string`

The label for the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#label)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38788

___

### symbol

• **symbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

The symbol used by the renderer to visualize all features in the layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#symbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38794

___

### type

• `Readonly` **type**: ``"simple"``

The type of renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#type)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[type](geo_esri.EsriRenderer.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38800

___

### visualVariables

• **visualVariables**: `VisualVariable`[]

An array of [VisualVariable](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-VisualVariable.html) objects.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-mixins-VisualVariablesMixin.html#visualVariables)

#### Inherited from

VisualVariablesMixin.visualVariables

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:37624

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

[EsriRenderer](geo_esri.EsriRenderer.md).[_get](geo_esri.EsriRenderer.md#_get)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[_get](geo_esri.EsriRenderer.md#_get)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

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

[`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[_set](geo_esri.EsriRenderer.md#_set)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[addHandles](geo_esri.EsriRenderer.md#addhandles)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### clone

▸ **clone**(): [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

Creates a deep clone of the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#clone)

#### Returns

[`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38812

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[destroy](geo_esri.EsriRenderer.md#destroy)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[get](geo_esri.EsriRenderer.md#get)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[get](geo_esri.EsriRenderer.md#get)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[hasHandles](geo_esri.EsriRenderer.md#hashandles)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[notifyChange](geo_esri.EsriRenderer.md#notifychange)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[own](geo_esri.EsriRenderer.md#own)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[removeHandles](geo_esri.EsriRenderer.md#removehandles)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

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

[`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[set](geo_esri.EsriRenderer.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[set](geo_esri.EsriRenderer.md#set)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[toJSON](geo_esri.EsriRenderer.md#tojson)

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

[EsriRenderer](geo_esri.EsriRenderer.md).[watch](geo_esri.EsriRenderer.md#watch)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriSimpleRenderer`](geo_esri.EsriSimpleRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[fromJSON](geo_esri.EsriRenderer.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:38813
