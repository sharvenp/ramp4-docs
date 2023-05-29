[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/map/caption](../modules/geo_map_caption.md) / MapCaptionAPI

# Class: MapCaptionAPI

[geo/map/caption](../modules/geo_map_caption.md).MapCaptionAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`MapCaptionAPI`**

## Table of contents

### Constructors

- [constructor](geo_map_caption.MapCaptionAPI.md#constructor)

### Properties

- [$iApi](geo_map_caption.MapCaptionAPI.md#$iapi)
- [DEFAULT\_POINT\_FORMATTERS](geo_map_caption.MapCaptionAPI.md#default_point_formatters)
- [pointFormatter](geo_map_caption.MapCaptionAPI.md#pointformatter)

### Accessors

- [$element](geo_map_caption.MapCaptionAPI.md#$element)
- [$vApp](geo_map_caption.MapCaptionAPI.md#$vapp)

### Methods

- [createCaption](geo_map_caption.MapCaptionAPI.md#createcaption)
- [formatBasemap](geo_map_caption.MapCaptionAPI.md#formatbasemap)
- [formatLambert](geo_map_caption.MapCaptionAPI.md#formatlambert)
- [formatLatLongDD](geo_map_caption.MapCaptionAPI.md#formatlatlongdd)
- [formatLatLongDDM](geo_map_caption.MapCaptionAPI.md#formatlatlongddm)
- [formatLatLongDMS](geo_map_caption.MapCaptionAPI.md#formatlatlongdms)
- [formatMercator](geo_map_caption.MapCaptionAPI.md#formatmercator)
- [formatPoint](geo_map_caption.MapCaptionAPI.md#formatpoint)
- [formatUTM](geo_map_caption.MapCaptionAPI.md#formatutm)
- [scaleHelper](geo_map_caption.MapCaptionAPI.md#scalehelper)
- [setPointFormatter](geo_map_caption.MapCaptionAPI.md#setpointformatter)
- [updateAttribution](geo_map_caption.MapCaptionAPI.md#updateattribution)
- [updateScale](geo_map_caption.MapCaptionAPI.md#updatescale)
- [wrapValue](geo_map_caption.MapCaptionAPI.md#wrapvalue)

## Constructors

### constructor

• **new MapCaptionAPI**(`iApi`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | the RAMP instance |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/map/caption.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L30)

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

### DEFAULT\_POINT\_FORMATTERS

• **DEFAULT\_POINT\_FORMATTERS**: `any`

#### Defined in

[src/geo/map/caption.ts:13](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L13)

___

### pointFormatter

• `Protected` **pointFormatter**: (`p`: [`Point`](geo_api_graphic_geometry_point.Point.md)) => `Promise`<`string`\>

#### Type declaration

▸ (`p`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/geo/map/caption.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L24)

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

### createCaption

▸ **createCaption**(`captionConfig`): `void`

Configure the map caption using the given config

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `captionConfig` | `undefined` \| [`MapCaptionConfig`](../interfaces/geo_api_geo_defs.MapCaptionConfig.md) | The map caption config |

#### Returns

`void`

#### Defined in

[src/geo/map/caption.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L42)

___

### formatBasemap

▸ **formatBasemap**(`p`): `Promise`<`string`\>

Formats a string based on the current basemap projection using mouse map point coordinates

**`Function`**

formatBasemap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:561](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L561)

___

### formatLambert

▸ **formatLambert**(`p`): `Promise`<`string`\>

Formats a lambert point string using mouse map point coordinates

**`Function`**

formatLambert

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:494](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L494)

___

### formatLatLongDD

▸ **formatLatLongDD**(`p`): `Promise`<`string`\>

Formats a lat/long DD string using mouse map point coordinates

**`Function`**

formatLatLongDD

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:437](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L437)

___

### formatLatLongDDM

▸ **formatLatLongDDM**(`p`): `Promise`<`string`\>

Formats a lat/long DDM string using mouse map point coordinates

**`Function`**

formatLatLongDDM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:391](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L391)

___

### formatLatLongDMS

▸ **formatLatLongDMS**(`p`): `Promise`<`string`\>

Formats a lat/long DMS string using mouse map point coordinates

**`Function`**

formatLatLongDMSString

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:343](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L343)

___

### formatMercator

▸ **formatMercator**(`p`): `Promise`<`string`\>

Formats a mercator point string using mouse map point coordinates

**`Function`**

formatMercator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:474](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L474)

___

### formatPoint

▸ **formatPoint**(`p`): `Promise`<`string`\>

Formats the map point using the selected formatting function
Returns empty string if point is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `undefined` \| [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string of the map point

#### Defined in

[src/geo/map/caption.ts:224](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L224)

___

### formatUTM

▸ **formatUTM**(`p`): `Promise`<`string`\>

Formats a UTM string using mouse map point coordinates

**`Function`**

formatUTM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](geo_api_graphic_geometry_point.Point.md) | the cursor map point |

#### Returns

`Promise`<`string`\>

the formatted string using given cursor map coordinates

#### Defined in

[src/geo/map/caption.ts:521](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L521)

___

### scaleHelper

▸ **scaleHelper**(): [`ScaleHelper`](../interfaces/geo_api_geo_defs.ScaleHelper.md)[]

Generates helpful information to be used when constructing scale bars.

#### Returns

[`ScaleHelper`](../interfaces/geo_api_geo_defs.ScaleHelper.md)[]

two objects with information for metric and imperial

#### Defined in

[src/geo/map/caption.ts:260](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L260)

___

### setPointFormatter

▸ **setPointFormatter**(`value`): `void`

Sets the current point formatter
Will accept the string id of a default formatter, or a new formatter with the correct formatter signature

If given string id is not valid, then the point formatter is not changed

**`Function`**

setPointFormatter

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| (`p`: [`Point`](geo_api_graphic_geometry_point.Point.md)) => `Promise`<`string`\> |

#### Returns

`void`

#### Defined in

[src/geo/map/caption.ts:240](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L240)

___

### updateAttribution

▸ **updateAttribution**(`newAttribution`): `void`

Updates the attribution on the map-caption bar
Applies default ESRI attribution if incoming attribution is disabled or has undefined elements

Updates map-caption store to notify map-caption component observer

**`Function`**

updateAttribution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAttribution` | `undefined` \| [`Attribution`](../interfaces/geo_api_geo_defs.Attribution.md) | incoming new attribution |

#### Returns

`void`

#### Defined in

[src/geo/map/caption.ts:88](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L88)

___

### updateScale

▸ **updateScale**(): `void`

Calculates a scale bar for the current resolution
Updates map-caption store to notify map-caption component observer

**`Function`**

updateScale

#### Returns

`void`

#### Defined in

[src/geo/map/caption.ts:186](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L186)

___

### wrapValue

▸ `Private` **wrapValue**(`val`, `min`, `max`): `number`

Wraps value between the minimum and maximum value
If value is between bounds, it will be returned as it is

**`Function`**

wrapValue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | value to be wrapped |
| `min` | `number` | minimum value |
| `max` | `number` | maximum value |

#### Returns

`number`

the wrapped value

#### Defined in

[src/geo/map/caption.ts:330](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/map/caption.ts#L330)
