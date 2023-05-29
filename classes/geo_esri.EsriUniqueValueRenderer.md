[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriUniqueValueRenderer

# Class: EsriUniqueValueRenderer

[geo/esri](../modules/geo_esri.md).EsriUniqueValueRenderer

## Hierarchy

- [`EsriRenderer`](geo_esri.EsriRenderer.md)

- `VisualVariablesMixin`

  ↳ **`EsriUniqueValueRenderer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriUniqueValueRenderer.md#constructor)

### Properties

- [authoringInfo](geo_esri.EsriUniqueValueRenderer.md#authoringinfo)
- [backgroundFillSymbol](geo_esri.EsriUniqueValueRenderer.md#backgroundfillsymbol)
- [declaredClass](geo_esri.EsriUniqueValueRenderer.md#declaredclass)
- [defaultLabel](geo_esri.EsriUniqueValueRenderer.md#defaultlabel)
- [defaultSymbol](geo_esri.EsriUniqueValueRenderer.md#defaultsymbol)
- [destroyed](geo_esri.EsriUniqueValueRenderer.md#destroyed)
- [field](geo_esri.EsriUniqueValueRenderer.md#field)
- [field2](geo_esri.EsriUniqueValueRenderer.md#field2)
- [field3](geo_esri.EsriUniqueValueRenderer.md#field3)
- [fieldDelimiter](geo_esri.EsriUniqueValueRenderer.md#fielddelimiter)
- [initialized](geo_esri.EsriUniqueValueRenderer.md#initialized)
- [legendOptions](geo_esri.EsriUniqueValueRenderer.md#legendoptions)
- [orderByClassesEnabled](geo_esri.EsriUniqueValueRenderer.md#orderbyclassesenabled)
- [type](geo_esri.EsriUniqueValueRenderer.md#type)
- [uniqueValueGroups](geo_esri.EsriUniqueValueRenderer.md#uniquevaluegroups)
- [uniqueValueInfos](geo_esri.EsriUniqueValueRenderer.md#uniquevalueinfos)
- [valueExpression](geo_esri.EsriUniqueValueRenderer.md#valueexpression)
- [valueExpressionTitle](geo_esri.EsriUniqueValueRenderer.md#valueexpressiontitle)
- [visualVariables](geo_esri.EsriUniqueValueRenderer.md#visualvariables)

### Methods

- [\_get](geo_esri.EsriUniqueValueRenderer.md#_get)
- [\_set](geo_esri.EsriUniqueValueRenderer.md#_set)
- [addHandles](geo_esri.EsriUniqueValueRenderer.md#addhandles)
- [addUniqueValueInfo](geo_esri.EsriUniqueValueRenderer.md#adduniquevalueinfo)
- [clone](geo_esri.EsriUniqueValueRenderer.md#clone)
- [destroy](geo_esri.EsriUniqueValueRenderer.md#destroy)
- [get](geo_esri.EsriUniqueValueRenderer.md#get)
- [getUniqueValueInfo](geo_esri.EsriUniqueValueRenderer.md#getuniquevalueinfo)
- [hasHandles](geo_esri.EsriUniqueValueRenderer.md#hashandles)
- [notifyChange](geo_esri.EsriUniqueValueRenderer.md#notifychange)
- [own](geo_esri.EsriUniqueValueRenderer.md#own)
- [removeHandles](geo_esri.EsriUniqueValueRenderer.md#removehandles)
- [removeUniqueValueInfo](geo_esri.EsriUniqueValueRenderer.md#removeuniquevalueinfo)
- [set](geo_esri.EsriUniqueValueRenderer.md#set)
- [toJSON](geo_esri.EsriUniqueValueRenderer.md#tojson)
- [watch](geo_esri.EsriUniqueValueRenderer.md#watch)
- [fromJSON](geo_esri.EsriUniqueValueRenderer.md#fromjson)

## Constructors

### constructor

• **new EsriUniqueValueRenderer**(`properties?`)

UniqueValueRenderer allows you to symbolize features in a [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) based on one or more categorical attributes.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `UniqueValueRendererProperties` |

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[constructor](geo_esri.EsriRenderer.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39972

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

### backgroundFillSymbol

• **backgroundFillSymbol**: `FillSymbol` \| `PolygonSymbol3D`

This property is only relevant When symbolizing polygon features with marker symbols (or [IconSymbol3DLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-IconSymbol3DLayer.html)) in the [uniqueValueInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueInfos) of this renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#backgroundFillSymbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39886

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[declaredClass](geo_esri.EsriRenderer.md#declaredclass)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### defaultLabel

• **defaultLabel**: `string`

The label used in the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) to describe features assigned the [default symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#defaultSymbol).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#defaultLabel)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39892

___

### defaultSymbol

• **defaultSymbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

The symbol used to draw all features with values not referenced by [uniqueValueInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueInfos) or [uniqueValueGroups](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueGroups).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#defaultSymbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39898

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[destroyed](geo_esri.EsriRenderer.md#destroyed)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### field

• **field**: `string`

The name of the attribute field containing types or categorical values referenced in [uniqueValueInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueInfos) or [uniqueValueGroups](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueGroups).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#field)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39904

___

### field2

• **field2**: `string`

Specifies the name of an additional attribute field used to categorize features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#field2)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39910

___

### field3

• **field3**: `string`

Specifies the name of a third attribute field used to categorize features.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#field3)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39916

___

### fieldDelimiter

• **fieldDelimiter**: `string`

A string used as a separator between the values in the legend if multiple attribute fields are used to categorize values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#fieldDelimiter)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39922

___

### initialized

• **initialized**: `boolean`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[initialized](geo_esri.EsriRenderer.md#initialized)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### legendOptions

• **legendOptions**: `UniqueValueRendererLegendOptions`

An object providing options for displaying the renderer in the Legend.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#legendOptions)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39928

___

### orderByClassesEnabled

• **orderByClassesEnabled**: `boolean`

Indicates whether the order of the classes or [uniqueValueInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueInfos) in the renderer definition should be used for the feature drawing order of the layer.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#orderByClassesEnabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39936

___

### type

• `Readonly` **type**: ``"unique-value"``

The type of Renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#type)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[type](geo_esri.EsriRenderer.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39942

___

### uniqueValueGroups

• **uniqueValueGroups**: `UniqueValueGroup`[]

An array of objects defining groups of unique values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueGroups)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39948

___

### uniqueValueInfos

• **uniqueValueInfos**: [`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)[]

Defines categories and their corresponding symbols based on a set of values expected from the provided [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#field) or [valueExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpression).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#uniqueValueInfos)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39954

___

### valueExpression

• **valueExpression**: `string`

An [Arcade](https://developers.arcgis.com/javascript/latest/arcade/) expression following the specification defined by the [Arcade Visualization Profile](https://developers.arcgis.com/javascript/latest/arcade/#visualization).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpression)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39960

___

### valueExpressionTitle

• **valueExpressionTitle**: `string`

The title identifying and describing the associated [Arcade](https://developers.arcgis.com/javascript/latest/arcade/) expression as defined in the [valueExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpression) property.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpressionTitle)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39966

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

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

[`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

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

### addUniqueValueInfo

▸ **addUniqueValueInfo**(`valueOrInfo`, `symbol?`): `void`

Adds a unique value and symbol to the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#addUniqueValueInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueOrInfo` | `any` |
| `symbol?` | [`EsriSymbol`](geo_esri.EsriSymbol.md) \| `SymbolProperties` |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39978

___

### clone

▸ **clone**(): [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

Creates a deep clone of the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#clone)

#### Returns

[`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39984

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

### getUniqueValueInfo

▸ **getUniqueValueInfo**(`graphic`): `Promise`<[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)\>

Returns rendering and legend information (as defined by the renderer) associated with the given graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#getUniqueValueInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`Promise`<[`EsriUniqueValueInfo`](geo_esri.EsriUniqueValueInfo.md)\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39990

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

### removeUniqueValueInfo

▸ **removeUniqueValueInfo**(`value`): `void`

Removes a unique value from the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#removeUniqueValueInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39996

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

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

[`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[set](geo_esri.EsriRenderer.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriUniqueValueRenderer`](geo_esri.EsriUniqueValueRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[fromJSON](geo_esri.EsriRenderer.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:39997
