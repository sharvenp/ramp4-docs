[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/panel-instance](../modules/api_panel_instance.md) / PanelInstance

# Class: PanelInstance

[api/panel-instance](../modules/api_panel_instance.md).PanelInstance

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`PanelInstance`**

## Table of contents

### Constructors

- [constructor](api_panel_instance.PanelInstance.md#constructor)

### Properties

- [$iApi](api_panel_instance.PanelInstance.md#$iapi)
- [alertName](api_panel_instance.PanelInstance.md#alertname)
- [button](api_panel_instance.PanelInstance.md#button)
- [controls](api_panel_instance.PanelInstance.md#controls)
- [expanded](api_panel_instance.PanelInstance.md#expanded)
- [id](api_panel_instance.PanelInstance.md#id)
- [loadedScreens](api_panel_instance.PanelInstance.md#loadedscreens)
- [route](api_panel_instance.PanelInstance.md#route)
- [screens](api_panel_instance.PanelInstance.md#screens)
- [style](api_panel_instance.PanelInstance.md#style)

### Accessors

- [$element](api_panel_instance.PanelInstance.md#$element)
- [$vApp](api_panel_instance.PanelInstance.md#$vapp)
- [isLeftMostPanel](api_panel_instance.PanelInstance.md#isleftmostpanel)
- [isOpen](api_panel_instance.PanelInstance.md#isopen)
- [isPinned](api_panel_instance.PanelInstance.md#ispinned)
- [isRightMostPanel](api_panel_instance.PanelInstance.md#isrightmostpanel)
- [isVisible](api_panel_instance.PanelInstance.md#isvisible)
- [width](api_panel_instance.PanelInstance.md#width)

### Methods

- [close](api_panel_instance.PanelInstance.md#close)
- [expand](api_panel_instance.PanelInstance.md#expand)
- [isScreenLoaded](api_panel_instance.PanelInstance.md#isscreenloaded)
- [minimize](api_panel_instance.PanelInstance.md#minimize)
- [move](api_panel_instance.PanelInstance.md#move)
- [open](api_panel_instance.PanelInstance.md#open)
- [pin](api_panel_instance.PanelInstance.md#pin)
- [registerScreen](api_panel_instance.PanelInstance.md#registerscreen)
- [remove](api_panel_instance.PanelInstance.md#remove)
- [setStyles](api_panel_instance.PanelInstance.md#setstyles)
- [show](api_panel_instance.PanelInstance.md#show)
- [toggle](api_panel_instance.PanelInstance.md#toggle)
- [toggleMinimize](api_panel_instance.PanelInstance.md#toggleminimize)

## Constructors

### constructor

• **new PanelInstance**(`iApi`, `id`, `config`)

Creates an instance of PanelInstance.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |
| `id` | `string` |
| `config` | `PanelConfig` |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/panel-instance.ts:175](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L175)

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

### alertName

• `Readonly` **alertName**: `string`

#### Defined in

[src/api/panel-instance.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L50)

___

### button

• **button**: `any`

#### Defined in

[src/api/panel-instance.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L54)

___

### controls

• **controls**: `any`

#### Defined in

[src/api/panel-instance.ts:52](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L52)

___

### expanded

• **expanded**: `boolean`

Whether the panel expands to fill empty space.

**`Memberof`**

PanelInstance

#### Defined in

[src/api/panel-instance.ts:141](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L141)

___

### id

• `Readonly` **id**: `string`

ID of this panel.

**`Memberof`**

PanelInstance

#### Defined in

[src/api/panel-instance.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L31)

___

### loadedScreens

• `Private` `Readonly` **loadedScreens**: `string`[] = `[]`

A list of screen component ids which are loaded and ready to be rendered.

**`Memberof`**

PanelInstance

#### Defined in

[src/api/panel-instance.ts:48](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L48)

___

### route

• **route**: `PanelConfigRoute`

Specifies which panel screen to display and optional props to be passed to the screen panel component.

**`Memberof`**

PanelConfig

#### Defined in

[src/api/panel-instance.ts:164](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L164)

___

### screens

• `Readonly` **screens**: `PanelConfigScreens`

A collection of panel screens to be displayed inside the panel.

**`Memberof`**

PanelInstance

#### Defined in

[src/api/panel-instance.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L39)

___

### style

• **style**: `PanelConfigStyle`

The style object applied to the panel.

**`Memberof`**

PanelInstance

#### Defined in

[src/api/panel-instance.ts:133](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L133)

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

___

### isLeftMostPanel

• `get` **isLeftMostPanel**(): `boolean`

Checks if this panel is the leftmost visible panel.

**`Memberof`**

PanelInstance

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:311](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L311)

___

### isOpen

• `get` **isOpen**(): `boolean`

Checks if the panel is open or not.

**`Memberof`**

PanelInstance

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:250](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L250)

___

### isPinned

• `get` **isPinned**(): `boolean`

Checks if this panel is pinned or not.

**`Memberof`**

PanelInstance

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:429](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L429)

___

### isRightMostPanel

• `get` **isRightMostPanel**(): `boolean`

Checks if this panel is the rightmost visible panel.

**`Memberof`**

PanelInstance

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:325](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L325)

___

### isVisible

• `get` **isVisible**(): `boolean`

true iff the panel is currently visible

**`Memberof`**

PanelInstance

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:261](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L261)

___

### width

• `get` **width**(): `undefined` \| `number`

Returns the width of the panel in pixels or undefined if not set.

**`Memberof`**

PanelInstance

#### Returns

`undefined` \| `number`

#### Defined in

[src/api/panel-instance.ts:150](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L150)

## Methods

### close

▸ **close**(): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Close this panel.
This is a proxy to `InstanceAPI.panel.close(...)`.

**`Memberof`**

PanelInstance

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:272](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L272)

___

### expand

▸ **expand**(`expand?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Expands/collapses/toggles the expand state of the panel. Panels set to expand fill empty space.
This is a proxy to `InstanceAPI.panel.expand(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expand?` | `boolean` | Optional. Whether the panel should expand. Toggles if no value is given. |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:476](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L476)

___

### isScreenLoaded

▸ **isScreenLoaded**(`id`): `boolean`

Checks if a given screen component id is already loaded and ready to render.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/api/panel-instance.ts:63](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L63)

___

### minimize

▸ **minimize**(): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Minimize this panel.
This is a proxy to `InstanceAPI.panel.minimize(...)`.

**`Memberof`**

PanelInstance

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:285](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L285)

___

### move

▸ **move**(`direction`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Move this panel left or right in the stack.
This is a proxy to `InstanceAPI.panel.move(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | `string` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:298](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L298)

___

### open

▸ **open**(`value?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Opens a registered panel in the panel stack.
This is a proxy to `InstanceAPI.panel.open(...)`.

 - `somePanel.open()` -- opens the panel on the first screen in the set
 - `somePanel.open('screen-id')` -- opens the panel on the 'screen-id' screen
 - `somePanel.open({ screen: 'screen-id', props: {... } })` -- opens the panel on the 'screen-id' screen passing supplied `props` to it

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` \| { `props?`: `object` ; `screen`: `string`  } | a screen id, or an object of the form `{ screen: <id>, props: <object> }`. |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:228](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L228)

___

### pin

▸ **pin**(`value?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
This is a proxy to `InstanceAPI.panel.pin(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:413](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L413)

___

### registerScreen

▸ **registerScreen**(`id`): `void`

Loads and register panel screen components.
This function should be called just before the screen is to be shown; this will avoid needlessly loading components upfront
(sometimes certain screens might not get used at all).

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/api/panel-instance.ts:75](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L75)

___

### remove

▸ **remove**(): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Remove this panel.
This is a proxy to `InstanceAPI.panel.remove(...)`.

**`Memberof`**

PanelInstance

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:339](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L339)

___

### setStyles

▸ **setStyles**(`style`, `replace?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Sets the styles of the specified panel by using a provided CSS styles object.
This is a proxy to `InstanceAPI.panel.setStyles(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `style` | `object` | `undefined` |
| `replace?` | `boolean` | `false` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:462](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L462)

___

### show

▸ **show**(`value`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Sets route to the specified screen id and pass props to the panel screen components.
This is a proxy to `InstanceAPI.panel.route(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `PanelConfigRoute` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:444](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L444)

___

### toggle

▸ **toggle**(`value?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Toggle panel.
This is a proxy to `InstanceAPI.panel.toggle(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  } |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:353](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L353)

___

### toggleMinimize

▸ **toggleMinimize**(`value?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Toggle panel's minimize state.
This is a proxy to `InstanceAPI.panel.toggleMinimize(...)`.

**`Memberof`**

PanelInstance

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  } |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel-instance.ts:385](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel-instance.ts#L385)
