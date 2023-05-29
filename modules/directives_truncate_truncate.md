[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / directives/truncate/truncate

# Module: directives/truncate/truncate

## Table of contents

### Variables

- [Truncate](directives_truncate_truncate.md#truncate)

## Variables

### Truncate

• `Const` **Truncate**: `Directive`

The Truncate Directive

It makes the text truncate as needed and adds a tooltip that shows IFF the text is actually truncated.

The binding value looks like:
```
{
     externalTrigger: boolean,
     options: tippyOptions
}
```
if externalTrigger is present you must put the attribute `truncate-trigger` on the element you wish to be the tooltip trigger (this element must be an ancestor of the element with v-truncate)

#### Defined in

[src/directives/truncate/truncate.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/directives/truncate/truncate.ts#L23)
