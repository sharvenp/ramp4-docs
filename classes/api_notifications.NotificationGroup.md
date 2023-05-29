[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/notifications](../modules/api_notifications.md) / NotificationGroup

# Class: NotificationGroup

[api/notifications](../modules/api_notifications.md).NotificationGroup

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`NotificationGroup`**

## Table of contents

### Constructors

- [constructor](api_notifications.NotificationGroup.md#constructor)

### Properties

- [$iApi](api_notifications.NotificationGroup.md#$iapi)
- [id](api_notifications.NotificationGroup.md#id)
- [message](api_notifications.NotificationGroup.md#message)
- [messageList](api_notifications.NotificationGroup.md#messagelist)
- [notificationStore](api_notifications.NotificationGroup.md#notificationstore)
- [type](api_notifications.NotificationGroup.md#type)

### Accessors

- [$element](api_notifications.NotificationGroup.md#$element)
- [$vApp](api_notifications.NotificationGroup.md#$vapp)

### Methods

- [show](api_notifications.NotificationGroup.md#show)

## Constructors

### constructor

• **new NotificationGroup**(`$iApi`, `id`, `type`, `message`)

Creates an instance of Notification Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |  |
| `id` | `string` | The id for the group |
| `type` | [`NotificationType`](../enums/api_notifications.NotificationType.md) | The type of notification the group will show |
| `message` | `string` | The main message for the group |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/notifications.ts:98](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L98)

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

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/api/notifications.ts:84](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L84)

___

### message

• `Readonly` **message**: `string`

#### Defined in

[src/api/notifications.ts:85](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L85)

___

### messageList

• **messageList**: `string`[] = `[]`

#### Defined in

[src/api/notifications.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L88)

___

### notificationStore

• **notificationStore**: `Store`<``"notification"``, `_UnwrapAll`<`Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"notificationStack"`` \| ``"groups"``\>\>, `Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"notificationNumber"``\>, `Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"showNotification"`` \| ``"removeNotification"`` \| ``"registerGroup"`` \| ``"addToGroup"`` \| ``"clearAll"``\>\>

#### Defined in

[src/api/notifications.ts:82](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L82)

___

### type

• `Readonly` **type**: [`NotificationType`](../enums/api_notifications.NotificationType.md)

#### Defined in

[src/api/notifications.ts:86](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L86)

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

### show

▸ **show**(`message`): `void`

Shows a message under the group

**`Memberof`**

NotificationGroup

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show |

#### Returns

`void`

#### Defined in

[src/api/notifications.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L117)
