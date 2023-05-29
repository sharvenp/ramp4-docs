[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/maptip](../modules/geo_map_maptip.md) / MaptipAPI

# Class: MaptipAPI

[geo/map/maptip](../modules/geo_map_maptip.md).MaptipAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`MaptipAPI`**

## Table of contents

### Constructors

- [constructor](geo_map_maptip.MaptipAPI.md#constructor)

### Properties

- [#currentCheck](geo_map_maptip.MaptipAPI.md##currentcheck)
- [#lastHit](geo_map_maptip.MaptipAPI.md##lasthit)
- [$iApi](geo_map_maptip.MaptipAPI.md#$iapi)
- [maptipStore](geo_map_maptip.MaptipAPI.md#maptipstore)

### Accessors

- [$element](geo_map_maptip.MaptipAPI.md#$element)
- [$vApp](geo_map_maptip.MaptipAPI.md#$vapp)

### Methods

- [checkAtCoord](geo_map_maptip.MaptipAPI.md#checkatcoord)
- [clear](geo_map_maptip.MaptipAPI.md#clear)
- [generateDefaultMaptip](geo_map_maptip.MaptipAPI.md#generatedefaultmaptip)
- [getInstance](geo_map_maptip.MaptipAPI.md#getinstance)
- [getPoint](geo_map_maptip.MaptipAPI.md#getpoint)
- [setContent](geo_map_maptip.MaptipAPI.md#setcontent)
- [setPoint](geo_map_maptip.MaptipAPI.md#setpoint)

## Constructors

### constructor

• **new MaptipAPI**(`iApi`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | the RAMP instance |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/map/maptip.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L23)

## Properties

### #currentCheck

• `Private` **#currentCheck**: `undefined` \| [`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md) = `undefined`

#### Defined in

[src/geo/map/maptip.ts:31](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L31)

___

### #lastHit

• `Private` **#lastHit**: `undefined` \| [`GraphicHitResult`](../interfaces/geo_api_geo_defs.GraphicHitResult.md) = `undefined`

#### Defined in

[src/geo/map/maptip.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L30)

___

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

### maptipStore

• **maptipStore**: `any`

#### Defined in

[src/geo/map/maptip.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L17)

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

### checkAtCoord

▸ **checkAtCoord**(`screenPoint`): `Promise`<`void`\>

Checks for a graphic at the given screen coordinates.
On a graphic hit the point is put in the maptip store and the `map/graphichit` event is fired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPoint` | [`ScreenPoint`](../interfaces/geo_api_geo_defs.ScreenPoint.md) | The screen coordinates for the hitTest |

#### Returns

`Promise`<`void`\>

resolves after the event is fired or no new graphic is hit.

#### Defined in

[src/geo/map/maptip.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L40)

___

### clear

▸ **clear**(): `void`

Clears the maptip from the map

#### Returns

`void`

#### Defined in

[src/geo/map/maptip.ts:136](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L136)

___

### generateDefaultMaptip

▸ **generateDefaultMaptip**(`info`): `void`

Generates and sets the "default" maptip.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `Object` | the tooltip info payload |
| `info.attributes` | [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md) | - |
| `info.graphicHit` | [`GraphicHitResult`](../interfaces/geo_api_geo_defs.GraphicHitResult.md) | - |
| `info.icon` | `string` | - |
| `info.layer` | [`LayerInstance`](geo_layer_layer_instance.LayerInstance.md) | - |
| `info.screenPoint` | [`Point`](geo_api_graphic_geometry_point.Point.md) | - |

#### Returns

`void`

#### Defined in

[src/geo/map/maptip.ts:115](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L115)

___

### getInstance

▸ **getInstance**(): `any`

Get the `tippy` maptip instance
Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/

#### Returns

`any`

the `tippy` tooltip instance

#### Defined in

[src/geo/map/maptip.ts:147](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L147)

___

### getPoint

▸ **getPoint**(): `undefined` \| [`MaptipProperties`](../interfaces/geo_api_geo_defs.MaptipProperties.md)

Get the current point for the maptip

#### Returns

`undefined` \| [`MaptipProperties`](../interfaces/geo_api_geo_defs.MaptipProperties.md)

the current maptip map point

#### Defined in

[src/geo/map/maptip.ts:156](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L156)

___

### setContent

▸ **setContent**(`content`): `void`

Set the html string for the maptip
If empty string is provided, the maptip will use the default content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | the new maptip html content |

#### Returns

`void`

#### Defined in

[src/geo/map/maptip.ts:175](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L175)

___

### setPoint

▸ **setPoint**(`maptipPoint`): `void`

Set the current maptip point. Undefined = maptip wont be shown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maptipPoint` | [`Point`](geo_api_graphic_geometry_point.Point.md) |

#### Returns

`void`

#### Defined in

[src/geo/map/maptip.ts:165](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/maptip.ts#L165)
