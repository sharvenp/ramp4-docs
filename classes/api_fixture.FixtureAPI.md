[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/fixture](../modules/api_fixture.md) / FixtureAPI

# Class: FixtureAPI

[api/fixture](../modules/api_fixture.md).FixtureAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`FixtureAPI`**

## Table of contents

### Constructors

- [constructor](api_fixture.FixtureAPI.md#constructor)

### Properties

- [$iApi](api_fixture.FixtureAPI.md#$iapi)

### Accessors

- [$element](api_fixture.FixtureAPI.md#$element)
- [$vApp](api_fixture.FixtureAPI.md#$vapp)

### Methods

- [add](api_fixture.FixtureAPI.md#add)
- [addDefaultFixtures](api_fixture.FixtureAPI.md#adddefaultfixtures)
- [get](api_fixture.FixtureAPI.md#get)
- [isLoaded](api_fixture.FixtureAPI.md#isloaded)
- [remove](api_fixture.FixtureAPI.md#remove)

## Constructors

### constructor

• **new FixtureAPI**(`iApi`)

Creates an instance of FixtureAPI.

**`Memberof`**

FixtureAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/fixture.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L31)

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

### add

▸ **add**(`id`, `constructor?`): `Promise`<`FixtureBase`\>

Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.

**`Memberof`**

FixtureAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `constructor?` | `IFixtureBase` |

#### Returns

`Promise`<`FixtureBase`\>

#### Defined in

[src/api/fixture.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L52)

___

### addDefaultFixtures

▸ **addDefaultFixtures**(`fixtureNames?`): `Promise`<`FixtureBase`[]\>

Loads the set of standard, built-in fixtures to the R4MP Vue instance.
This will quickly set up the vanilla version of RAMP.
Note this function is automatically run by the instance startup unless the loadDefaultFixtures option is
set to false. The function is exposed to allow custom pages the ability to call it at a different point
in the startup. Also, a subset of standard fixtures can be provided on the optional parameter if one
wishes to omit some of the standard fixtures.

**`Memberof`**

FixtureAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixtureNames?` | `string`[] | list of built-in fixtures names to add. omission means all built-in fixtures will be added |

#### Returns

`Promise`<`FixtureBase`[]\>

resolves with array of default fixtures

#### Defined in

[src/api/fixture.ts:194](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L194)

___

### get

▸ **get**<`T`\>(`item`): `T`

Finds and returns a `FixtureBase` object with the id specified.

**`Memberof`**

FixtureAPI

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `FixtureBase` = `FixtureBase` | subclass of the `FixtureBase`; defaults to `FixtureBase` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `string` \| `FixtureBase` | fixture id or `FixtureBase` item |

#### Returns

`T`

#### Defined in

[src/api/fixture.ts:123](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L123)

▸ **get**<`T`\>(`item`): `T`[]

Finds and returns a collection of `FixtureBase` objects given a list of ids.
This can be useful when retrieving several fixtures at one time as follows:
```ts
const [one, two, three] = rInstance.fixture.get(['fixture-one', 'fixture-two', 'fixture-three']);
```

**`Memberof`**

FixtureAPI

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `FixtureBase` = `FixtureBase` | subclass of the `FixtureBase`; defaults to `FixtureBase` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `string`[] | a list of fixture ids |

#### Returns

`T`[]

#### Defined in

[src/api/fixture.ts:136](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L136)

___

### isLoaded

▸ **isLoaded**(`fixtureId`): `Promise`<`any`\>

Provides a promise that resolves when the fixture(s) have finished loading.

**`Memberof`**

FixtureAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixtureId` | `string` \| `string`[] | the fixture ID(s) for which the promise is requested |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/api/fixture.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L169)

___

### remove

▸ **remove**<`T`\>(`fixtureOrId`): `T`

Removes the specified fixture from R4MP instance.

**`Memberof`**

FixtureAPI

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FixtureBase` = `FixtureBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fixtureOrId` | `string` \| `FixtureBase` |

#### Returns

`T`

#### Defined in

[src/api/fixture.ts:98](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/fixture.ts#L98)
