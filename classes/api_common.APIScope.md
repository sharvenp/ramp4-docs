[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/common](../modules/api_common.md) / APIScope

# Class: APIScope

[api/common](../modules/api_common.md).APIScope

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- **`APIScope`**

  ↳ [`EventAPI`](api_event.EventAPI.md)

  ↳ [`FixtureAPI`](api_fixture.FixtureAPI.md)

  ↳ [`FixtureInstance`](api_fixture.FixtureInstance.md)

  ↳ [`NotificationAPI`](api_notifications.NotificationAPI.md)

  ↳ [`NotificationGroup`](api_notifications.NotificationGroup.md)

  ↳ [`PanelInstance`](api_panel_instance.PanelInstance.md)

  ↳ [`PanelAPI`](api_panel.PanelAPI.md)

  ↳ [`BaseHilightMode`](fixtures_hilight_api_hilight_mode_base_hilight_mode.BaseHilightMode.md)

  ↳ [`GeoAPI`](geo_geo.GeoAPI.md)

  ↳ [`FileUtils`](geo_layer_file_utils.FileUtils.md)

  ↳ [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md)

  ↳ [`LayerAPI`](geo_layer_layer.LayerAPI.md)

  ↳ [`OgcUtils`](geo_layer_ogc_utils.OgcUtils.md)

  ↳ [`MapCaptionAPI`](geo_map_caption.MapCaptionAPI.md)

  ↳ [`CommonMapAPI`](geo_map_common_map.CommonMapAPI.md)

  ↳ [`MaptipAPI`](geo_map_maptip.MaptipAPI.md)

  ↳ [`AttributeAPI`](geo_utils_attribute.AttributeAPI.md)

  ↳ [`AttributeLoaderBase`](geo_utils_attribute.AttributeLoaderBase.md)

  ↳ [`QueryAPI`](geo_utils_query.QueryAPI.md)

  ↳ [`SymbologyAPI`](geo_utils_symbology.SymbologyAPI.md)

## Table of contents

### Constructors

- [constructor](api_common.APIScope.md#constructor)

### Properties

- [$iApi](api_common.APIScope.md#$iapi)

### Accessors

- [$element](api_common.APIScope.md#$element)
- [$vApp](api_common.APIScope.md#$vapp)

## Constructors

### constructor

• **new APIScope**(`iApi`)

Creates an instance of APIScope.

**`Memberof`**

APIScope

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Defined in

[src/api/common.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L41)

## Properties

### $iApi

• `Readonly` **$iApi**: [`InstanceAPI`](api_instance.InstanceAPI.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`Memberof`**

APIScope

#### Defined in

[src/api/common.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L17)

## Accessors

### $element

• `get` **$element**(): `App`<`Element`\>

#### Returns

`App`<`Element`\>

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

#### Defined in

[src/api/common.ts:27](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L27)
