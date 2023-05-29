[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/event](../modules/api_event.md) / EventAPI

# Class: EventAPI

[api/event](../modules/api_event.md).EventAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`EventAPI`**

## Table of contents

### Constructors

- [constructor](api_event.EventAPI.md#constructor)

### Properties

- [$iApi](api_event.EventAPI.md#$iapi)
- [\_eventBus](api_event.EventAPI.md#_eventbus)
- [\_eventRegister](api_event.EventAPI.md#_eventregister)
- [\_funCounter](api_event.EventAPI.md#_funcounter)
- [\_nameRegister](api_event.EventAPI.md#_nameregister)

### Accessors

- [$element](api_event.EventAPI.md#$element)
- [$vApp](api_event.EventAPI.md#$vapp)

### Methods

- [activeHandlers](api_event.EventAPI.md#activehandlers)
- [addDefaultEvents](api_event.EventAPI.md#adddefaultevents)
- [defaultHandlerFactory](api_event.EventAPI.md#defaulthandlerfactory)
- [emit](api_event.EventAPI.md#emit)
- [eventNames](api_event.EventAPI.md#eventnames)
- [findHandler](api_event.EventAPI.md#findhandler)
- [handlerNamer](api_event.EventAPI.md#handlernamer)
- [off](api_event.EventAPI.md#off)
- [offAll](api_event.EventAPI.md#offall)
- [on](api_event.EventAPI.md#on)
- [once](api_event.EventAPI.md#once)
- [registerEventName](api_event.EventAPI.md#registereventname)

## Constructors

### constructor

• **new EventAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/event.ts:407](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L407)

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

### \_eventBus

• `Private` `Readonly` **\_eventBus**: `any`

A vue instance that provides an event bus for all events.

**`Memberof`**

EventAPI

#### Defined in

[src/api/event.ts:396](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L396)

___

### \_eventRegister

• `Private` `Readonly` **\_eventRegister**: `EventHandler`[]

#### Defined in

[src/api/event.ts:399](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L399)

___

### \_funCounter

• `Private` **\_funCounter**: `number`

#### Defined in

[src/api/event.ts:405](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L405)

___

### \_nameRegister

• `Private` `Readonly` **\_nameRegister**: `string`[]

#### Defined in

[src/api/event.ts:402](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L402)

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

### activeHandlers

▸ **activeHandlers**(`event?`): `string`[]

Returns any active event handlers, filtered to an event name if desired.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event?` | `string` | `''` | name of the event. Omission will return all active handlers |

#### Returns

`string`[]

list of handler names

#### Defined in

[src/api/event.ts:580](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L580)

___

### addDefaultEvents

▸ **addDefaultEvents**(`eventHandlerNames?`): `string`[]

Loads the set of standard, built-in event handlers to the R4MP Vue instance.
This will quickly set up the vanilla version of RAMP.
Note this function is automatically run by the instance startup unless the loadDefaultEvents option is
set to false. The function is exposed to allow custom pages the ability to call it at a different point
in the startup. Also, a subset of standard event handlers can be provided on the optional parameter if one
wishes to omit some of the standard handlers.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventHandlerNames?` | `string`[] | list of built-in event handler names to add. omission means all built-in event handlers will be added |

#### Returns

`string`[]

resolves with array of event handler names

#### Defined in

[src/api/event.ts:603](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L603)

___

### defaultHandlerFactory

▸ `Private` **defaultHandlerFactory**(`handlerName`): `string`

Will apply the implementation of default events handlers

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlerName` | `string` | the name of the default event handler to create |

#### Returns

`string`

name of the event handler

#### Defined in

[src/api/event.ts:658](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L658)

___

### emit

▸ **emit**(`event`, `...args`): `void`

Triggers an event.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | the name of the event |
| `...args` | `any`[] | any arguements the event is expecting |

#### Returns

`void`

#### Defined in

[src/api/event.ts:542](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L542)

___

### eventNames

▸ **eventNames**(): `string`[]

A list of event names that have been registered with the bus.

**`Memberof`**

EventAPI

#### Returns

`string`[]

list of event names

#### Defined in

[src/api/event.ts:468](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L468)

___

### findHandler

▸ `Private` **findHandler**(`handlerName`): `undefined` \| `EventHandler`

Locates a registered handler by name, or undefined if not found

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlerName` | `string` | the name of the event handler |

#### Returns

`undefined` \| `EventHandler`

handler information or undefined

#### Defined in

[src/api/event.ts:429](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L429)

___

### handlerNamer

▸ `Private` **handlerNamer**(`eventName`): `string`

Generates an event handler name. Used when caller doesnt provide one.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | the name of the event the handler is handling |

#### Returns

`string`

a handler name

#### Defined in

[src/api/event.ts:441](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L441)

___

### off

▸ **off**(`handlerName`): `void`

Removes an event handler from an event.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlerName` | `string` | name of the handler to remove |

#### Returns

`void`

#### Defined in

[src/api/event.ts:510](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L510)

___

### offAll

▸ **offAll**(`event?`): `void`

Removes all event handlers, filtered to an event name if desired.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event?` | `string` | `''` | name of the event. Omission will remove all handlers for all events |

#### Returns

`void`

#### Defined in

[src/api/event.ts:530](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L530)

___

### on

▸ **on**(`event`, `callback`, `handlerName?`): `string`

Adds an event handler to an event.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `string` | `undefined` | name of the event to react to |
| `callback` | `Function` | `undefined` | function to execute when event triggers |
| `handlerName?` | `string` | `''` | name of the handler (for reference). a name will be generated if not provided. |

#### Returns

`string`

the handler name

#### Defined in

[src/api/event.ts:483](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L483)

___

### once

▸ **once**(`event`, `callback`, `handlerName?`): `string`

Adds an event handler to an event that will be respected once. After the handler
reacts to the event, it will be removed.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `string` | `undefined` | name of the event to react to once |
| `callback` | `Function` | `undefined` | function to execute when event triggers |
| `handlerName?` | `string` | `''` | name of the handler (for reference). a name will be generated if not provided. |

#### Returns

`string`

the handler name

#### Defined in

[src/api/event.ts:557](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L557)

___

### registerEventName

▸ **registerEventName**(`names`): `void`

Adds event names to the names registry of the event bus.

**`Memberof`**

EventAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string` \| `string`[] | event names or names to register |

#### Returns

`void`

#### Defined in

[src/api/event.ts:452](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L452)
