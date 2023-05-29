[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriClassBreaksRenderer

# Class: EsriClassBreaksRenderer

[geo/esri](../modules/geo_esri.md).EsriClassBreaksRenderer

## Hierarchy

- [`EsriRenderer`](geo_esri.EsriRenderer.md)

- `VisualVariablesMixin`

  ↳ **`EsriClassBreaksRenderer`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriClassBreaksRenderer.md#constructor)

### Properties

- [authoringInfo](geo_esri.EsriClassBreaksRenderer.md#authoringinfo)
- [backgroundFillSymbol](geo_esri.EsriClassBreaksRenderer.md#backgroundfillsymbol)
- [classBreakInfos](geo_esri.EsriClassBreaksRenderer.md#classbreakinfos)
- [declaredClass](geo_esri.EsriClassBreaksRenderer.md#declaredclass)
- [defaultLabel](geo_esri.EsriClassBreaksRenderer.md#defaultlabel)
- [defaultSymbol](geo_esri.EsriClassBreaksRenderer.md#defaultsymbol)
- [destroyed](geo_esri.EsriClassBreaksRenderer.md#destroyed)
- [field](geo_esri.EsriClassBreaksRenderer.md#field)
- [initialized](geo_esri.EsriClassBreaksRenderer.md#initialized)
- [legendOptions](geo_esri.EsriClassBreaksRenderer.md#legendoptions)
- [normalizationField](geo_esri.EsriClassBreaksRenderer.md#normalizationfield)
- [normalizationTotal](geo_esri.EsriClassBreaksRenderer.md#normalizationtotal)
- [normalizationType](geo_esri.EsriClassBreaksRenderer.md#normalizationtype)
- [type](geo_esri.EsriClassBreaksRenderer.md#type)
- [valueExpression](geo_esri.EsriClassBreaksRenderer.md#valueexpression)
- [valueExpressionTitle](geo_esri.EsriClassBreaksRenderer.md#valueexpressiontitle)
- [visualVariables](geo_esri.EsriClassBreaksRenderer.md#visualvariables)

### Methods

- [\_get](geo_esri.EsriClassBreaksRenderer.md#_get)
- [\_set](geo_esri.EsriClassBreaksRenderer.md#_set)
- [addClassBreakInfo](geo_esri.EsriClassBreaksRenderer.md#addclassbreakinfo)
- [addHandles](geo_esri.EsriClassBreaksRenderer.md#addhandles)
- [clone](geo_esri.EsriClassBreaksRenderer.md#clone)
- [destroy](geo_esri.EsriClassBreaksRenderer.md#destroy)
- [get](geo_esri.EsriClassBreaksRenderer.md#get)
- [getClassBreakInfo](geo_esri.EsriClassBreaksRenderer.md#getclassbreakinfo)
- [hasHandles](geo_esri.EsriClassBreaksRenderer.md#hashandles)
- [notifyChange](geo_esri.EsriClassBreaksRenderer.md#notifychange)
- [own](geo_esri.EsriClassBreaksRenderer.md#own)
- [removeClassBreakInfo](geo_esri.EsriClassBreaksRenderer.md#removeclassbreakinfo)
- [removeHandles](geo_esri.EsriClassBreaksRenderer.md#removehandles)
- [set](geo_esri.EsriClassBreaksRenderer.md#set)
- [toJSON](geo_esri.EsriClassBreaksRenderer.md#tojson)
- [watch](geo_esri.EsriClassBreaksRenderer.md#watch)
- [fromJSON](geo_esri.EsriClassBreaksRenderer.md#fromjson)

## Constructors

### constructor

• **new EsriClassBreaksRenderer**(`properties?`)

ClassBreaksRenderer defines the symbol of each feature in a [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) based on the value of a numeric attribute.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `ClassBreaksRendererProperties` |

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[constructor](geo_esri.EsriRenderer.md#constructor)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36850

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

When symbolizing polygon features with graduated symbols, set a [FillSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-FillSymbol.html) on this property to visualize the boundaries of each feature.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#backgroundFillSymbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36778

___

### classBreakInfos

• **classBreakInfos**: [`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)[]

Each element in the array is an object that provides information about a class break associated with the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#classBreakInfos)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36784

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

Label used in the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) to describe features assigned the [default symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#defaultSymbol).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#defaultLabel)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36790

___

### defaultSymbol

• **defaultSymbol**: [`EsriSymbol`](geo_esri.EsriSymbol.md)

The default symbol assigned to features with a value not matched to a given break.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#defaultSymbol)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36796

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

The name of a numeric attribute field whose data determines the symbol of each feature based on the class breaks defined in [classBreakInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#classBreakInfos).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#field)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36802

___

### initialized

• **initialized**: `boolean`

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[initialized](geo_esri.EsriRenderer.md#initialized)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### legendOptions

• **legendOptions**: `ClassBreaksRendererLegendOptions`

An object providing options for displaying the renderer in the Legend.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#legendOptions)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36808

___

### normalizationField

• **normalizationField**: `string`

When [normalizationType](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#normalizationType) is `field`, this property contains the attribute field name used for normalization.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#normalizationField)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36814

___

### normalizationTotal

• **normalizationTotal**: `number`

When [normalizationType](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#normalizationType) is `percent-of-total`, this property contains the total of all data values.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#normalizationTotal)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36820

___

### normalizationType

• **normalizationType**: ``"field"`` \| ``"log"`` \| ``"percent-of-total"``

Indicates how the data is normalized.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#normalizationType)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36826

___

### type

• `Readonly` **type**: ``"class-breaks"``

The type of renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#type)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[type](geo_esri.EsriRenderer.md#type)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36832

___

### valueExpression

• **valueExpression**: `string`

An [Arcade](https://developers.arcgis.com/javascript/latest/arcade/) expression following the specification defined by the [Arcade Visualization Profile](https://developers.arcgis.com/javascript/latest/arcade/#visualization).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#valueExpression)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36838

___

### valueExpressionTitle

• **valueExpressionTitle**: `string`

The title identifying and describing the associated [Arcade](https://developers.arcgis.com/javascript/latest/arcade/) expression as defined in the [valueExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#valueExpression) property.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#valueExpressionTitle)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36844

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

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

[`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[_set](geo_esri.EsriRenderer.md#_set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### addClassBreakInfo

▸ **addClassBreakInfo**(`min`, `max?`, `symbol?`): `void`

Adds a class break to the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#addClassBreakInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `any` |
| `max?` | `number` |
| `symbol?` | [`EsriSymbol`](geo_esri.EsriSymbol.md) |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36856

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

▸ **clone**(): [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

Creates a deep clone of the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#clone)

#### Returns

[`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36862

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

### getClassBreakInfo

▸ **getClassBreakInfo**(`graphic`): `Promise`<[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)\>

Returns the [classBreakInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#classBreakInfos) information (as defined by the renderer) associated with the given graphic.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#getClassBreakInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | [`EsriGraphic`](geo_esri.EsriGraphic.md) |

#### Returns

`Promise`<[`EsriClassBreakInfo`](geo_esri.EsriClassBreakInfo.md)\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36868

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

### removeClassBreakInfo

▸ **removeClassBreakInfo**(`min`, `max`): `void`

Removes a break from the renderer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#removeClassBreakInfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36874

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

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

[`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[set](geo_esri.EsriRenderer.md#set)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

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

▸ `Static` **fromJSON**(`json`): [`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`EsriClassBreaksRenderer`](geo_esri.EsriClassBreaksRenderer.md)

#### Inherited from

[EsriRenderer](geo_esri.EsriRenderer.md).[fromJSON](geo_esri.EsriRenderer.md#fromjson)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:36875
