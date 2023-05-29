[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / directives/focus-list/focus-item

# Module: directives/focus-list/focus-item

## Table of contents

### Variables

- [FocusItem](directives_focus_list_focus_item.md#focusitem)

### Functions

- [generateID](directives_focus_list_focus_item.md#generateid)

## Variables

### FocusItem

• `Const` **FocusItem**: `Directive`

The FocusItem Directive

This is to be used within `FocusList`s. Add this to every element you want to traverse between using the arrow keys (see FocusList for more info).
This directive adds an id for accessibility if there isn't one on the element already.

**Example**:

```
<div v-focus-list="'horizontal'">
    <button v-focus-item></button>
    <button v-focus-item></button>
    <button v-focus-item></button>
</div>
```

You can show the tooltips of truncated text when this is focussed by supplying the value 'show-truncate' to the directive.

#### Defined in

[src/directives/focus-list/focus-item.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-item.ts#L22)

## Functions

### generateID

▸ **generateID**(): `string`

#### Returns

`string`

#### Defined in

[src/directives/focus-list/focus-item.ts:39](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-item.ts#L39)
