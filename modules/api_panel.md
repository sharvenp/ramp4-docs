[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / api/panel

# Module: api/panel

## Table of contents

### Classes

- [PanelAPI](../classes/api_panel.PanelAPI.md)

### Interfaces

- [PanelWidthObject](../interfaces/api_panel.PanelWidthObject.md)

### Type Aliases

- [PanelConfigPair](api_panel.md#panelconfigpair)
- [PanelConfigSet](api_panel.md#panelconfigset)
- [PanelInstancePath](api_panel.md#panelinstancepath)
- [PanelInstanceSet](api_panel.md#panelinstanceset)
- [PanelRegistrationOptions](api_panel.md#panelregistrationoptions)

## Type Aliases

### PanelConfigPair

Ƭ **PanelConfigPair**: `Object`

A single pair of `PanelConfig`/id values.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | `PanelConfig` |
| `id` | `string` |

#### Defined in

[src/api/panel.ts:504](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L504)

___

### PanelConfigSet

Ƭ **PanelConfigSet**: `Object`

A set of key-value pairs with `PanelConfig` objects and their ids.

#### Index signature

▪ [name: `string`]: `PanelConfig`

#### Defined in

[src/api/panel.ts:499](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L499)

___

### PanelInstancePath

Ƭ **PanelInstancePath**: `Object`

A path specifying panel id, screen id, and any props for that panel screen. Used when opening a panel through `$iApi.panel.open(...)`.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `props?` | `object` |
| `screen?` | `string` |

#### Defined in

[src/api/panel.ts:514](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L514)

___

### PanelInstanceSet

Ƭ **PanelInstanceSet**: `Object`

A set of key-value pairs with `PanelInstance` objects and their ids.

#### Index signature

▪ [name: `string`]: [`PanelInstance`](../classes/api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:509](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L509)

___

### PanelRegistrationOptions

Ƭ **PanelRegistrationOptions**: `Object`

A set of common registration options to apply to panels being registered.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `i18n?` | [`I18nComponentOptions`](lang.md#i18ncomponentoptions) | Locale messages in the form of either i18n options object or un-parsed CSV rows. These messages will be passed to any screen opened inside this panel. |

#### Defined in

[src/api/panel.ts:519](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L519)
