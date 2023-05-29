[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / directives/focus-list/focus-list

# Module: directives/focus-list/focus-list

## Table of contents

### Classes

- [FocusListManager](../classes/directives_focus_list_focus_list.FocusListManager.md)

### Variables

- [FocusList](directives_focus_list_focus_list.md#focuslist)

## Variables

### FocusList

• `Const` **FocusList**: `Directive`

The FocusList Directive

To use; add `v-focus-list` to your main element and `v-focus-item` to sub-items you want to be selectable
The directive will assume your list is vertical. To force it to be horizontal set the attribute to have a value of 'horizontal'.

**Example**:

```
<div v-focus-list="'horizontal'">
    <button v-focus-item></button>
    <button v-focus-item></button>
    <button v-focus-item></button>
</div>
```

#### Defined in

[src/directives/focus-list/focus-list.ts:45](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/focus-list/focus-list.ts#L45)
