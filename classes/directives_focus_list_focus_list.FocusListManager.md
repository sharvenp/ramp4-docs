[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [directives/focus-list/focus-list](../modules/directives_focus_list_focus_list.md) / FocusListManager

# Class: FocusListManager

[directives/focus-list/focus-list](../modules/directives_focus_list_focus_list.md).FocusListManager

The FocusListManager class

Each instance of this class is tied to an element. These are created in the bind function for the `FocusList` directive.
This class manages the focus within the element, mainly moving between `focus-item`s with arrow keys.

## Table of contents

### Constructors

- [constructor](directives_focus_list_focus_list.FocusListManager.md#constructor)

### Properties

- [element](directives_focus_list_focus_list.FocusListManager.md#element)
- [highlightedItem](directives_focus_list_focus_list.FocusListManager.md#highlighteditem)
- [isClicked](directives_focus_list_focus_list.FocusListManager.md#isclicked)
- [isHorizontal](directives_focus_list_focus_list.FocusListManager.md#ishorizontal)
- [isTapped](directives_focus_list_focus_list.FocusListManager.md#istapped)

### Methods

- [defocusItem](directives_focus_list_focus_list.FocusListManager.md#defocusitem)
- [focusItem](directives_focus_list_focus_list.FocusListManager.md#focusitem)
- [onBlur](directives_focus_list_focus_list.FocusListManager.md#onblur)
- [onClick](directives_focus_list_focus_list.FocusListManager.md#onclick)
- [onFocus](directives_focus_list_focus_list.FocusListManager.md#onfocus)
- [onKeydown](directives_focus_list_focus_list.FocusListManager.md#onkeydown)
- [onMousedown](directives_focus_list_focus_list.FocusListManager.md#onmousedown)
- [onTouchstart](directives_focus_list_focus_list.FocusListManager.md#ontouchstart)
- [setAriaActiveDescendant](directives_focus_list_focus_list.FocusListManager.md#setariaactivedescendant)
- [setTabIndex](directives_focus_list_focus_list.FocusListManager.md#settabindex)
- [shiftHighlight](directives_focus_list_focus_list.FocusListManager.md#shifthighlight)

## Constructors

### constructor

• **new FocusListManager**(`element`, `attributeValue`)

Creates an instance of FocusListManager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | The focus list's element |
| `attributeValue` | `string` | The value of the `v-focus-list` attribute which tells the focus list manager the orientation of the list. 'horizontal' means the list should be traversed horizontally, and other value will make the list vertical (including no value). |

#### Defined in

[src/directives/focus-list/focus-list.ts:118](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L118)

## Properties

### element

• **element**: `HTMLElement`

#### Defined in

[src/directives/focus-list/focus-list.ts:106](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L106)

___

### highlightedItem

• **highlightedItem**: `HTMLElement`

#### Defined in

[src/directives/focus-list/focus-list.ts:107](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L107)

___

### isClicked

• **isClicked**: `boolean`

#### Defined in

[src/directives/focus-list/focus-list.ts:109](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L109)

___

### isHorizontal

• **isHorizontal**: `boolean`

#### Defined in

[src/directives/focus-list/focus-list.ts:108](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L108)

___

### isTapped

• **isTapped**: `boolean`

#### Defined in

[src/directives/focus-list/focus-list.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L110)

## Methods

### defocusItem

▸ **defocusItem**(`item`): `void`

Removes 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to -1).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Element` | The element to defocus |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:184](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L184)

___

### focusItem

▸ **focusItem**(`item`): `void`

Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `HTMLElement` | The element to focus |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:200](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L200)

___

### onBlur

▸ **onBlur**(): `void`

Callback for the BLUR event listener on the focus list element.
NOTE: this is only called when the list element stops being focused, not a descendant

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:450](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L450)

___

### onClick

▸ **onClick**(`event`): `void`

Callback for the click event listener on the focus list element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | click event |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:371](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L371)

___

### onFocus

▸ **onFocus**(): `void`

Callback for the focus event listener on the focus list element.
NOTE: this is only called when the LIST ELEMENT is focused, not any descendant

This is used to pull back the `focusedItem` id and the aria-activedescendant attribute when a list is focused

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:413](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L413)

___

### onKeydown

▸ **onKeydown**(`event`): `void`

Callback for the keydown event listener on the focus list element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEvent` | keydown event |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:271](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L271)

___

### onMousedown

▸ **onMousedown**(): `void`

Callback for the MOUSEDOWN event listener on the focus list element.

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:472](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L472)

___

### onTouchstart

▸ **onTouchstart**(): `void`

Callback for the TOUCHSTART event listener on the focus list element.

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:480](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L480)

___

### setAriaActiveDescendant

▸ **setAriaActiveDescendant**(`item`): `void`

Updates the list's `aria-activedescendant` to be `item`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `HTMLElement` | The element that should be the active descendant |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:219](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L219)

___

### setTabIndex

▸ **setTabIndex**(`value`, `focusItem?`): `void`

Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | the value to give `tabindex` on each tabbable item |
| `focusItem` | `Element` | the element containing the tabbable items, defaults to the focus list |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:160](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L160)

___

### shiftHighlight

▸ **shiftHighlight**(`listOfItems`, `reverse?`): `void`

Moves the highlight through the `listOfItems` forward (or backward) 1 spot

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `listOfItems` | `HTMLElement`[] | `undefined` | The list of items being moved through |
| `reverse` | `boolean` | `false` | true iff the highlight should move back one spot |

#### Returns

`void`

#### Defined in

[src/directives/focus-list/focus-list.ts:232](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L232)
