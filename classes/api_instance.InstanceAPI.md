[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/instance](../modules/api_instance.md) / InstanceAPI

# Class: InstanceAPI

[api/instance](../modules/api_instance.md).InstanceAPI

## Table of contents

### Constructors

- [constructor](api_instance.InstanceAPI.md#constructor)

### Properties

- [$element](api_instance.InstanceAPI.md#$element)
- [$i18n](api_instance.InstanceAPI.md#$i18n)
- [$vApp](api_instance.InstanceAPI.md#$vapp)
- [\_isFullscreen](api_instance.InstanceAPI.md#_isfullscreen)
- [event](api_instance.InstanceAPI.md#event)
- [fixture](api_instance.InstanceAPI.md#fixture)
- [geo](api_instance.InstanceAPI.md#geo)
- [notify](api_instance.InstanceAPI.md#notify)
- [panel](api_instance.InstanceAPI.md#panel)
- [startRequired](api_instance.InstanceAPI.md#startrequired)
- [ui](api_instance.InstanceAPI.md#ui)

### Accessors

- [animate](api_instance.InstanceAPI.md#animate)
- [isFullscreen](api_instance.InstanceAPI.md#isfullscreen)
- [language](api_instance.InstanceAPI.md#language)
- [screenSize](api_instance.InstanceAPI.md#screensize)
- [started](api_instance.InstanceAPI.md#started)

### Methods

- [component](api_instance.InstanceAPI.md#component)
- [getConfig](api_instance.InstanceAPI.md#getconfig)
- [initialize](api_instance.InstanceAPI.md#initialize)
- [reload](api_instance.InstanceAPI.md#reload)
- [setLanguage](api_instance.InstanceAPI.md#setlanguage)
- [start](api_instance.InstanceAPI.md#start)
- [toggleFullscreen](api_instance.InstanceAPI.md#togglefullscreen)
- [updateAlert](api_instance.InstanceAPI.md#updatealert)
- [useStore](api_instance.InstanceAPI.md#usestore)

## Constructors

### constructor

• **new InstanceAPI**(`element`, `configs?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `configs?` | `RampConfigs` |
| `options?` | [`RampOptions`](../interfaces/api_instance.RampOptions.md) |

#### Defined in

[src/api/instance.ts:100](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L100)

## Properties

### $element

• `Readonly` **$element**: `App`<`Element`\>

#### Defined in

[src/api/instance.ts:95](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L95)

___

### $i18n

• `Readonly` **$i18n**: `Composer`<{}, {}, {}, `string`, `never`, `string`\>

#### Defined in

[src/api/instance.ts:96](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L96)

___

### $vApp

• `Readonly` **$vApp**: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\>

The instance of Vue R4MP application controlled by this InstanceAPI.

**`Memberof`**

InstanceAPI

#### Defined in

[src/api/instance.ts:94](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L94)

___

### \_isFullscreen

• `Private` **\_isFullscreen**: `boolean`

#### Defined in

[src/api/instance.ts:98](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L98)

___

### event

• `Readonly` **event**: [`EventAPI`](api_event.EventAPI.md)

#### Defined in

[src/api/instance.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L82)

___

### fixture

• `Readonly` **fixture**: [`FixtureAPI`](api_fixture.FixtureAPI.md)

#### Defined in

[src/api/instance.ts:80](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L80)

___

### geo

• `Readonly` **geo**: [`GeoAPI`](geo_geo.GeoAPI.md)

#### Defined in

[src/api/instance.ts:83](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L83)

___

### notify

• `Readonly` **notify**: [`NotificationAPI`](api_notifications.NotificationAPI.md)

#### Defined in

[src/api/instance.ts:84](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L84)

___

### panel

• `Readonly` **panel**: [`PanelAPI`](api_panel.PanelAPI.md)

#### Defined in

[src/api/instance.ts:81](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L81)

___

### startRequired

• **startRequired**: `boolean` = `false`

#### Defined in

[src/api/instance.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L86)

___

### ui

• `Readonly` **ui**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maptip` | [`MaptipAPI`](geo_map_maptip.MaptipAPI.md) |

#### Defined in

[src/api/instance.ts:85](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L85)

## Accessors

### animate

• `get` **animate**(): `boolean`

The current animation status.

**`Memberof`**

InstanceAPI

#### Returns

`boolean`

#### Defined in

[src/api/instance.ts:552](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L552)

___

### isFullscreen

• `get` **isFullscreen**(): `boolean`

Whether the app is fullscreen.

**`Memberof`**

InstanceAPI

#### Returns

`boolean`

#### Defined in

[src/api/instance.ts:581](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L581)

___

### language

• `get` **language**(): `string`

The current locale string for the app.

**`Memberof`**

InstanceAPI

#### Returns

`string`

#### Defined in

[src/api/instance.ts:541](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L541)

___

### screenSize

• `get` **screenSize**(): ``null`` \| `string`

The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.

**`Memberof`**

InstanceAPI

#### Returns

``null`` \| `string`

#### Defined in

[src/api/instance.ts:396](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L396)

___

### started

• `get` **started**(): `boolean`

Whether the app has been started.

**`Memberof`**

InstanceAPI

#### Returns

`boolean`

#### Defined in

[src/api/instance.ts:592](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L592)

## Methods

### component

▸ **component**(`id`): `any`

Retrieves a global Vue component by its id.

**`Memberof`**

InstanceAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`any`

#### Defined in

[src/api/instance.ts:368](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L368)

▸ **component**<`VC`\>(`id`, `vueConstructor`): `VC`

Registers a global Vue component given an id and a constructor.

**`Memberof`**

InstanceAPI

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VC` | extends `ComponentPublicInstanceConstructor`<{ `$`: `ComponentInternalInstance` ; `$attrs`: `Data` ; `$data`: {} ; `$el`: `any` ; `$emit`: (`event`: `string`, ...`args`: `any`[]) => `void` ; `$forceUpdate`: () => `void` ; `$nextTick`: <T\>(`this`: `T`, `fn?`: (`this`: `T`) => `void`) => `Promise`<`void`\> ; `$options`: `ComponentOptionsBase`<`Readonly`<`ExtractPropTypes`<{}\>\>, {}, {}, `ComputedOptions`, `MethodOptions`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, {}, `string`, {}, {}, `string`\> & `MergedComponentOptionsOverride` ; `$parent`: ``null`` \| `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `$props`: `Partial`<{}\> & `Omit`<`Readonly`<`ExtractPropTypes`<{}\>\> & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps`, `never`\> ; `$refs`: `Data` ; `$root`: ``null`` \| `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `$slots`: `Readonly`<`InternalSlots`\> ; `$watch`: <T\>(`source`: `T`, `cb`: `T` extends (...`args`: `any`) => `R` ? (...`args`: [`R`, `R`]) => `any` : (...`args`: `any`) => `any`, `options?`: `WatchOptions`<`boolean`\>) => `WatchStopHandle`  } & `Readonly`<`ExtractPropTypes`<{}\>\> & `ShallowUnwrapRef`<{}\> & `ExtractComputedReturns`<`ComputedOptions`\> & `MethodOptions` & `ComponentCustomProperties` & {}, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> & `ComponentOptionsBase`<`Readonly`<`ExtractPropTypes`<{}\>\>, {}, {}, `ComputedOptions`, `MethodOptions`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, {}, `string`, {}, {}, `string`, `VC`\> & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `vueConstructor` | `any` |

#### Returns

`VC`

#### Defined in

[src/api/instance.ts:378](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L378)

___

### getConfig

▸ **getConfig**(): `any`

Gets the [cloned] config linked to the current language of the app.

**`Memberof`**

InstanceAPI

#### Returns

`any`

#### Defined in

[src/api/instance.ts:419](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L419)

___

### initialize

▸ `Private` **initialize**(`configs?`, `options?`): `void`

Initializes a Vue R4MP instance with the given config and options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configs?` | `RampConfigs` | language-keyed R4MP config |
| `options?` | [`RampOptions`](../interfaces/api_instance.RampOptions.md) | startup options for this R4MP instance |

#### Returns

`void`

#### Defined in

[src/api/instance.ts:147](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L147)

___

### reload

▸ **reload**(`configs?`, `options?`): `void`

Reloads Vue R4MP instance with a new config

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configs?` | `RampConfigs` | language-keyed R4MP config |
| `options?` | [`RampOptions`](../interfaces/api_instance.RampOptions.md) | startup options for this R4MP instance |

#### Returns

`void`

#### Defined in

[src/api/instance.ts:313](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L313)

___

### setLanguage

▸ **setLanguage**(`language`): `void`

Sets the language of the app to the specified string (e.g. 'en' or 'fr').

**`Memberof`**

InstanceAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | The locale string to switch to |

#### Returns

`void`

#### Defined in

[src/api/instance.ts:512](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L512)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/api/instance.ts:617](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L617)

___

### toggleFullscreen

▸ **toggleFullscreen**(): `void`

Toggles fullscreen for the app.

**`Memberof`**

InstanceAPI

#### Returns

`void`

#### Defined in

[src/api/instance.ts:567](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L567)

___

### updateAlert

▸ **updateAlert**(`alert`): `void`

Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).

**`Memberof`**

InstanceAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alert` | `string` | the alert to make available to screen readers |

#### Returns

`void`

#### Defined in

[src/api/instance.ts:602](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L602)

___

### useStore

▸ **useStore**<`T`\>(`id`): `undefined` \| `Readonly`<`T`\>

Returns the pinia store of the specified id, if it exists, else returns undefined.

**`Memberof`**

InstanceAPI

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the store to return |

#### Returns

`undefined` \| `Readonly`<`T`\>

#### Defined in

[src/api/instance.ts:433](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/instance.ts#L433)
