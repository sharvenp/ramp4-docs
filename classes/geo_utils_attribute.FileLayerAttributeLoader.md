[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/attribute](../modules/geo_utils_attribute.md) / FileLayerAttributeLoader

# Class: FileLayerAttributeLoader

[geo/utils/attribute](../modules/geo_utils_attribute.md).FileLayerAttributeLoader

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`AttributeLoaderBase`](geo_utils_attribute.AttributeLoaderBase.md)

  ↳ **`FileLayerAttributeLoader`**

## Table of contents

### Constructors

- [constructor](geo_utils_attribute.FileLayerAttributeLoader.md#constructor)

### Properties

- [$iApi](geo_utils_attribute.FileLayerAttributeLoader.md#$iapi)
- [aac](geo_utils_attribute.FileLayerAttributeLoader.md#aac)
- [details](geo_utils_attribute.FileLayerAttributeLoader.md#details)
- [loadPromise](geo_utils_attribute.FileLayerAttributeLoader.md#loadpromise)
- [tabularAttributesCache](geo_utils_attribute.FileLayerAttributeLoader.md#tabularattributescache)

### Accessors

- [$element](geo_utils_attribute.FileLayerAttributeLoader.md#$element)
- [$vApp](geo_utils_attribute.FileLayerAttributeLoader.md#$vapp)

### Methods

- [abortAttribLoad](geo_utils_attribute.FileLayerAttributeLoader.md#abortattribload)
- [destroyAttribs](geo_utils_attribute.FileLayerAttributeLoader.md#destroyattribs)
- [getAttribs](geo_utils_attribute.FileLayerAttributeLoader.md#getattribs)
- [isLoadAborted](geo_utils_attribute.FileLayerAttributeLoader.md#isloadaborted)
- [isLoaded](geo_utils_attribute.FileLayerAttributeLoader.md#isloaded)
- [loadCount](geo_utils_attribute.FileLayerAttributeLoader.md#loadcount)
- [loadPromiseGenerator](geo_utils_attribute.FileLayerAttributeLoader.md#loadpromisegenerator)
- [updateFieldList](geo_utils_attribute.FileLayerAttributeLoader.md#updatefieldlist)

## Constructors

### constructor

• **new FileLayerAttributeLoader**(`iApi`, `details`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |
| `details` | [`AttributeLoaderDetails`](../interfaces/geo_utils_attribute.AttributeLoaderDetails.md) |

#### Overrides

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[constructor](geo_utils_attribute.AttributeLoaderBase.md#constructor)

#### Defined in

[src/geo/utils/attribute.ts:389](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L389)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[$iApi](geo_utils_attribute.AttributeLoaderBase.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

___

### aac

• `Protected` **aac**: [`AsynchAttribController`](geo_utils_attribute.AsynchAttribController.md)

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[aac](geo_utils_attribute.AttributeLoaderBase.md#aac)

#### Defined in

[src/geo/utils/attribute.ts:302](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L302)

___

### details

• `Protected` **details**: [`AttributeLoaderDetails`](../interfaces/geo_utils_attribute.AttributeLoaderDetails.md)

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[details](geo_utils_attribute.AttributeLoaderBase.md#details)

#### Defined in

[src/geo/utils/attribute.ts:304](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L304)

___

### loadPromise

• `Protected` **loadPromise**: `undefined` \| `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[loadPromise](geo_utils_attribute.AttributeLoaderBase.md#loadpromise)

#### Defined in

[src/geo/utils/attribute.ts:303](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L303)

___

### tabularAttributesCache

• **tabularAttributesCache**: `undefined` \| `Promise`<[`TabularAttributeSet`](../interfaces/geo_api_geo_defs.TabularAttributeSet.md)\>

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[tabularAttributesCache](geo_utils_attribute.AttributeLoaderBase.md#tabularattributescache)

#### Defined in

[src/geo/utils/attribute.ts:305](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L305)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

AttributeLoaderBase.$element

#### Defined in

[src/api/common.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L31)

___

### $vApp

• `get` **$vApp**(): `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

The instance of Vue R4MP application controlled by this InstanceAPI.
This is just a shorthand for `this.$iApi.$vApp`.

**`Memberof`**

APIScope

#### Returns

`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

#### Inherited from

AttributeLoaderBase.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

## Methods

### abortAttribLoad

▸ **abortAttribLoad**(): `void`

#### Returns

`void`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[abortAttribLoad](geo_utils_attribute.AttributeLoaderBase.md#abortattribload)

#### Defined in

[src/geo/utils/attribute.ts:332](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L332)

___

### destroyAttribs

▸ **destroyAttribs**(): `void`

#### Returns

`void`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[destroyAttribs](geo_utils_attribute.AttributeLoaderBase.md#destroyattribs)

#### Defined in

[src/geo/utils/attribute.ts:343](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L343)

___

### getAttribs

▸ **getAttribs**(): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[getAttribs](geo_utils_attribute.AttributeLoaderBase.md#getattribs)

#### Defined in

[src/geo/utils/attribute.ts:323](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L323)

___

### isLoadAborted

▸ **isLoadAborted**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[isLoadAborted](geo_utils_attribute.AttributeLoaderBase.md#isloadaborted)

#### Defined in

[src/geo/utils/attribute.ts:359](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L359)

___

### isLoaded

▸ **isLoaded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[isLoaded](geo_utils_attribute.AttributeLoaderBase.md#isloaded)

#### Defined in

[src/geo/utils/attribute.ts:355](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L355)

___

### loadCount

▸ **loadCount**(): `number`

#### Returns

`number`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[loadCount](geo_utils_attribute.AttributeLoaderBase.md#loadcount)

#### Defined in

[src/geo/utils/attribute.ts:351](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L351)

___

### loadPromiseGenerator

▸ `Protected` **loadPromiseGenerator**(): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Overrides

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[loadPromiseGenerator](geo_utils_attribute.AttributeLoaderBase.md#loadpromisegenerator)

#### Defined in

[src/geo/utils/attribute.ts:393](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L393)

___

### updateFieldList

▸ **updateFieldList**(`newList`): `void`

Allows the list of field names to download to be updated. Allows support for diverant loading
flows between different layers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newList` | `string` |

#### Returns

`void`

#### Inherited from

[AttributeLoaderBase](geo_utils_attribute.AttributeLoaderBase.md).[updateFieldList](geo_utils_attribute.AttributeLoaderBase.md#updatefieldlist)

#### Defined in

[src/geo/utils/attribute.ts:319](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L319)
