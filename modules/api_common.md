[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / api/common

# Module: api/common

## Table of contents

### Classes

- [APIScope](../classes/api_common.APIScope.md)

### Interfaces

- [AppVersion](../interfaces/api_common.AppVersion.md)

### Functions

- [isComponentOptions](api_common.md#iscomponentoptions)
- [isTypeofImportVue](api_common.md#istypeofimportvue)
- [isVueConstructor](api_common.md#isvueconstructor)

## Functions

### isComponentOptions

▸ **isComponentOptions**(`value`): value is ComponentOptions<Object, any, any, any, any, any, any, any\>

Checks if the provided value is Vue `ComponentsOptions` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ComponentOptions<Object, any, any, any, any, any, any, any\>

#### Defined in

[src/api/common.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L82)

___

### isTypeofImportVue

▸ **isTypeofImportVue**(`value`): value is \_\_module

Checks if the provided value is a dynamically imported `*.vue` file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is \_\_module

#### Defined in

[src/api/common.ts:112](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L112)

___

### isVueConstructor

▸ **isVueConstructor**(`value`): `any`

Checks if the provided value is a `VueConstructor`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/api/common.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L66)
