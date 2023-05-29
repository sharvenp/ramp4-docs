[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/attribute](../modules/geo_utils_attribute.md) / AttributeAPI

# Class: AttributeAPI

[geo/utils/attribute](../modules/geo_utils_attribute.md).AttributeAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`AttributeAPI`**

## Table of contents

### Constructors

- [constructor](geo_utils_attribute.AttributeAPI.md#constructor)

### Properties

- [$iApi](geo_utils_attribute.AttributeAPI.md#$iapi)

### Accessors

- [$element](geo_utils_attribute.AttributeAPI.md#$element)
- [$vApp](geo_utils_attribute.AttributeAPI.md#$vapp)

### Methods

- [arcGisBatchLoad](geo_utils_attribute.AttributeAPI.md#arcgisbatchload)
- [loadArcGisServerAttributes](geo_utils_attribute.AttributeAPI.md#loadarcgisserverattributes)
- [loadGraphicsAttributes](geo_utils_attribute.AttributeAPI.md#loadgraphicsattributes)
- [loadSingleFeature](geo_utils_attribute.AttributeAPI.md#loadsinglefeature)
- [oidIndexer](geo_utils_attribute.AttributeAPI.md#oidindexer)

## Constructors

### constructor

• **new AttributeAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/utils/attribute.ts:29](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L29)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Inherited from

[APIScope](api_common.APIScope.md).[$iApi](api_common.APIScope.md#$iapi)

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

#### Inherited from

APIScope.$element

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

APIScope.$vApp

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)

## Methods

### arcGisBatchLoad

▸ `Private` **arcGisBatchLoad**(`details`, `controller`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`AttributeLoaderDetails`](../interfaces/geo_utils_attribute.AttributeLoaderDetails.md) |
| `controller` | [`AsynchAttribController`](geo_utils_attribute.AsynchAttribController.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/geo/utils/attribute.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L41)

___

### loadArcGisServerAttributes

▸ **loadArcGisServerAttributes**(`details`, `controller`): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`AttributeLoaderDetails`](../interfaces/geo_utils_attribute.AttributeLoaderDetails.md) |
| `controller` | [`AsynchAttribController`](geo_utils_attribute.AsynchAttribController.md) |

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Defined in

[src/geo/utils/attribute.ts:134](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L134)

___

### loadGraphicsAttributes

▸ **loadGraphicsAttributes**(`details`, `controller`): `Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`AttributeLoaderDetails`](../interfaces/geo_utils_attribute.AttributeLoaderDetails.md) |
| `controller` | [`AsynchAttribController`](geo_utils_attribute.AsynchAttribController.md) |

#### Returns

`Promise`<[`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md)\>

#### Defined in

[src/geo/utils/attribute.ts:159](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L159)

___

### loadSingleFeature

▸ **loadSingleFeature**(`details`): `Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`GetGraphicServiceDetails`](../interfaces/geo_api_geo_defs.GetGraphicServiceDetails.md) |

#### Returns

`Promise`<[`Graphic`](geo_api_graphic_graphic.Graphic.md)\>

#### Defined in

[src/geo/utils/attribute.ts:207](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L207)

___

### oidIndexer

▸ `Private` **oidIndexer**(`attSet`, `oidField`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attSet` | [`AttributeSet`](../interfaces/geo_api_geo_defs.AttributeSet.md) |
| `oidField` | `string` |

#### Returns

`void`

#### Defined in

[src/geo/utils/attribute.ts:33](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L33)
