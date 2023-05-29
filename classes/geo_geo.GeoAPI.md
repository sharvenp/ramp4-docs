[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/geo](../modules/geo_geo.md) / GeoAPI

# Class: GeoAPI

[geo/geo](../modules/geo_geo.md).GeoAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`GeoAPI`**

## Table of contents

### Constructors

- [constructor](geo_geo.GeoAPI.md#constructor)

### Properties

- [$iApi](geo_geo.GeoAPI.md#$iapi)
- [attributes](geo_geo.GeoAPI.md#attributes)
- [geom](geo_geo.GeoAPI.md#geom)
- [layer](geo_geo.GeoAPI.md#layer)
- [map](geo_geo.GeoAPI.md#map)
- [proj](geo_geo.GeoAPI.md#proj)
- [query](geo_geo.GeoAPI.md#query)
- [shared](geo_geo.GeoAPI.md#shared)
- [symbology](geo_geo.GeoAPI.md#symbology)

### Accessors

- [$element](geo_geo.GeoAPI.md#$element)
- [$vApp](geo_geo.GeoAPI.md#$vapp)
- [proxy](geo_geo.GeoAPI.md#proxy)

## Constructors

### constructor

• **new GeoAPI**(`iApi`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) | the RAMP instance |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/geo.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L30)

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

### attributes

• **attributes**: [`AttributeAPI`](geo_utils_attribute.AttributeAPI.md)

#### Defined in

[src/geo/geo.ts:17](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L17)

___

### geom

• **geom**: [`GeometryAPI`](geo_api_graphic_geometry_geometry.GeometryAPI.md)

#### Defined in

[src/geo/geo.ts:18](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L18)

___

### layer

• **layer**: [`LayerAPI`](geo_layer_layer.LayerAPI.md)

#### Defined in

[src/geo/geo.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L19)

___

### map

• **map**: [`MapAPI`](geo_map_ramp_map.MapAPI.md)

#### Defined in

[src/geo/geo.ts:20](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L20)

___

### proj

• **proj**: [`ProjectionAPI`](geo_api_utils_projection.ProjectionAPI.md)

#### Defined in

[src/geo/geo.ts:21](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L21)

___

### query

• **query**: [`QueryAPI`](geo_utils_query.QueryAPI.md)

#### Defined in

[src/geo/geo.ts:22](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L22)

___

### shared

• **shared**: [`SharedUtilsAPI`](geo_api_utils_shared_utils.SharedUtilsAPI.md)

#### Defined in

[src/geo/geo.ts:23](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L23)

___

### symbology

• **symbology**: [`SymbologyAPI`](geo_utils_symbology.SymbologyAPI.md)

#### Defined in

[src/geo/geo.ts:24](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L24)

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

### proxy

• `get` **proxy**(): `string`

Read the current proxy setting, returns url string, empty string if no proxy

#### Returns

`string`

#### Defined in

[src/geo/geo.ts:57](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L57)

• `set` **proxy**(`proxyUrl`): `void`

Set a proxy service to allow consumption of cross-domain non-CORS resources.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proxyUrl` | `string` | Url to proxy or empty string to clear. Must be relative url on host domain, or full url to CORS supported server |

#### Returns

`void`

#### Defined in

[src/geo/geo.ts:50](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/geo.ts#L50)
