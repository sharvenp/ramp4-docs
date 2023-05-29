[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/attribute](../modules/geo_utils_attribute.md) / QuickCache

# Class: QuickCache

[geo/utils/attribute](../modules/geo_utils_attribute.md).QuickCache

## Table of contents

### Constructors

- [constructor](geo_utils_attribute.QuickCache.md#constructor)

### Properties

- [attribs](geo_utils_attribute.QuickCache.md#attribs)
- [geoms](geo_utils_attribute.QuickCache.md#geoms)
- [isPoint](geo_utils_attribute.QuickCache.md#ispoint)

### Methods

- [clearAll](geo_utils_attribute.QuickCache.md#clearall)
- [getAttribs](geo_utils_attribute.QuickCache.md#getattribs)
- [getGeom](geo_utils_attribute.QuickCache.md#getgeom)
- [getGeomStore](geo_utils_attribute.QuickCache.md#getgeomstore)
- [getScaleStore](geo_utils_attribute.QuickCache.md#getscalestore)
- [setAttribs](geo_utils_attribute.QuickCache.md#setattribs)
- [setGeom](geo_utils_attribute.QuickCache.md#setgeom)

## Constructors

### constructor

• **new QuickCache**(`geomType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geomType` | `string` |

#### Defined in

[src/geo/utils/attribute.ts:414](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L414)

## Properties

### attribs

• `Private` **attribs**: `Object`

#### Index signature

▪ [key: `number`]: [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md)

#### Defined in

[src/geo/utils/attribute.ts:404](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L404)

___

### geoms

• `Private` **geoms**: `Object`

#### Index signature

▪ [key: `number`]: `any`

#### Defined in

[src/geo/utils/attribute.ts:410](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L410)

___

### isPoint

• `Readonly` **isPoint**: `boolean`

#### Defined in

[src/geo/utils/attribute.ts:412](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L412)

## Methods

### clearAll

▸ **clearAll**(): `void`

#### Returns

`void`

#### Defined in

[src/geo/utils/attribute.ts:469](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L469)

___

### getAttribs

▸ **getAttribs**(`key`): [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `number` |

#### Returns

[`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md)

#### Defined in

[src/geo/utils/attribute.ts:446](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L446)

___

### getGeom

▸ **getGeom**(`key`, `scale?`): [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `number` | `undefined` |
| `scale` | `undefined` \| `number` | `undefined` |

#### Returns

[`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md)

#### Defined in

[src/geo/utils/attribute.ts:454](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L454)

___

### getGeomStore

▸ `Private` **getGeomStore**(`scale?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scale` | `undefined` \| `number` | `undefined` |

#### Returns

`Object`

#### Defined in

[src/geo/utils/attribute.ts:428](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L428)

___

### getScaleStore

▸ `Private` **getScaleStore**(`scale`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`Object`

#### Defined in

[src/geo/utils/attribute.ts:420](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L420)

___

### setAttribs

▸ **setAttribs**(`key`, `atts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `number` |
| `atts` | [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md) |

#### Returns

`void`

#### Defined in

[src/geo/utils/attribute.ts:450](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L450)

___

### setGeom

▸ **setGeom**(`key`, `geom`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `number` | `undefined` |
| `geom` | [`BaseGeometry`](geo_api_graphic_geometry_base_geometry.BaseGeometry.md) | `undefined` |
| `scale` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Defined in

[src/geo/utils/attribute.ts:460](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/attribute.ts#L460)
