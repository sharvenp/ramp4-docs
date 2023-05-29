[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/notifications](../modules/api_notifications.md) / NotificationAPI

# Class: NotificationAPI

[api/notifications](../modules/api_notifications.md).NotificationAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`NotificationAPI`**

## Table of contents

### Constructors

- [constructor](api_notifications.NotificationAPI.md#constructor)

### Properties

- [$iApi](api_notifications.NotificationAPI.md#$iapi)
- [notificationStore](api_notifications.NotificationAPI.md#notificationstore)

### Accessors

- [$element](api_notifications.NotificationAPI.md#$element)
- [$vApp](api_notifications.NotificationAPI.md#$vapp)

### Methods

- [addGroup](api_notifications.NotificationAPI.md#addgroup)
- [getGroup](api_notifications.NotificationAPI.md#getgroup)
- [show](api_notifications.NotificationAPI.md#show)

## Constructors

### constructor

• **new NotificationAPI**(`iApi`)

Creates an instance of Notification API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | The instance API for the RAMP that this should be associated with. |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/notifications.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L20)

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

### notificationStore

• **notificationStore**: `Store`<``"notification"``, `_UnwrapAll`<`Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"notificationStack"`` \| ``"groups"``\>\>, `Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"notificationNumber"``\>, `Pick`<{ `addToGroup`: (`id`: `string`, `message`: `string`) => `void` ; `clearAll`: () => `void` ; `groups`: `Ref`<{ `[id: string]`: [`NotificationGroup`](api_notifications.NotificationGroup.md);  }\> ; `notificationNumber`: `ComputedRef`<`number`\> ; `notificationStack`: `Ref`<({ `message`: `string` ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md)  } \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `id`: `string` ; `message`: `string` ; `messageList`: `string`[] = []; `notificationStore`: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { notificationStore: { $state: { notificationStack: ({ message: string; type: NotificationType; } \| { ...; })[]; groups: { ...; }; }; ... 14 more ...; clearAll: () =\> void; }; ... 7 more ...; readonly $element: { ...; }; })[]; groups: { .... ; `type`: [`NotificationType`](../enums/api_notifications.NotificationType.md) ; `show`: (`message`: `string`) => `void`  })[]\> ; `registerGroup`: (`group`: [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `removeNotification`: (`notification`: `Notification` \| [`NotificationGroup`](api_notifications.NotificationGroup.md)) => `void` ; `showNotification`: (`notification`: `Notification`) => `void`  }, ``"showNotification"`` \| ``"removeNotification"`` \| ``"registerGroup"`` \| ``"addToGroup"`` \| ``"clearAll"``\>\>

#### Defined in

[src/api/notifications.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L13)

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

### addGroup

▸ **addGroup**(`id`, `type`, `message`): [`NotificationGroup`](api_notifications.NotificationGroup.md)

Adds a notification group, which can be used to hold multiple messages.

**`Memberof`**

NotificationAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id for the group |
| `type` | [`NotificationType`](../enums/api_notifications.NotificationType.md) | The type of notification the group will hold, 'error' 'warning' or 'info' |
| `message` | `string` | The "main" message for the notification, describing the grouped messages |

#### Returns

[`NotificationGroup`](api_notifications.NotificationGroup.md)

#### Defined in

[src/api/notifications.ts:55](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L55)

___

### getGroup

▸ **getGroup**(`id`): [`NotificationGroup`](api_notifications.NotificationGroup.md)

Returns the group with the id provided, returns `undefined` if there is no such group

**`Memberof`**

NotificationAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the group wanted |

#### Returns

[`NotificationGroup`](api_notifications.NotificationGroup.md)

#### Defined in

[src/api/notifications.ts:74](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L74)

___

### show

▸ **show**(`type`, `message`): `void`

Shows a notification with the type and message provided

**`Memberof`**

NotificationAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`NotificationType`](../enums/api_notifications.NotificationType.md) | The type of notification to display |
| `message` | `string` | The message to display in the notification |

#### Returns

`void`

#### Defined in

[src/api/notifications.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/notifications.ts#L43)
