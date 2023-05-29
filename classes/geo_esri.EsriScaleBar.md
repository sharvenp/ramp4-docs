[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriScaleBar

# Class: EsriScaleBar

[geo/esri](../modules/geo_esri.md).EsriScaleBar

## Hierarchy

- `Widget`

  ↳ **`EsriScaleBar`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriScaleBar.md#constructor)

### Properties

- [container](geo_esri.EsriScaleBar.md#container)
- [declaredClass](geo_esri.EsriScaleBar.md#declaredclass)
- [destroyed](geo_esri.EsriScaleBar.md#destroyed)
- [id](geo_esri.EsriScaleBar.md#id)
- [initialized](geo_esri.EsriScaleBar.md#initialized)
- [label](geo_esri.EsriScaleBar.md#label)
- [style](geo_esri.EsriScaleBar.md#style)
- [unit](geo_esri.EsriScaleBar.md#unit)
- [view](geo_esri.EsriScaleBar.md#view)
- [viewModel](geo_esri.EsriScaleBar.md#viewmodel)
- [visible](geo_esri.EsriScaleBar.md#visible)

### Methods

- [\_get](geo_esri.EsriScaleBar.md#_get)
- [\_set](geo_esri.EsriScaleBar.md#_set)
- [addHandles](geo_esri.EsriScaleBar.md#addhandles)
- [classes](geo_esri.EsriScaleBar.md#classes)
- [destroy](geo_esri.EsriScaleBar.md#destroy)
- [emit](geo_esri.EsriScaleBar.md#emit)
- [get](geo_esri.EsriScaleBar.md#get)
- [hasEventListener](geo_esri.EsriScaleBar.md#haseventlistener)
- [hasHandles](geo_esri.EsriScaleBar.md#hashandles)
- [isFulfilled](geo_esri.EsriScaleBar.md#isfulfilled)
- [isRejected](geo_esri.EsriScaleBar.md#isrejected)
- [isResolved](geo_esri.EsriScaleBar.md#isresolved)
- [notifyChange](geo_esri.EsriScaleBar.md#notifychange)
- [on](geo_esri.EsriScaleBar.md#on)
- [own](geo_esri.EsriScaleBar.md#own)
- [postInitialize](geo_esri.EsriScaleBar.md#postinitialize)
- [removeHandles](geo_esri.EsriScaleBar.md#removehandles)
- [render](geo_esri.EsriScaleBar.md#render)
- [renderNow](geo_esri.EsriScaleBar.md#rendernow)
- [scheduleRender](geo_esri.EsriScaleBar.md#schedulerender)
- [set](geo_esri.EsriScaleBar.md#set)
- [watch](geo_esri.EsriScaleBar.md#watch)
- [when](geo_esri.EsriScaleBar.md#when)

## Constructors

### constructor

• **new EsriScaleBar**(`properties?`)

The ScaleBar widget displays a scale bar on the map or in a specified HTML node.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `ScaleBarProperties` |

#### Overrides

Widget.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:97394

## Properties

### container

• **container**: `string` \| `HTMLElement`

The ID or node representing the DOM element containing the widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#container)

#### Inherited from

Widget.container

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107522

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

Widget.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Widget.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### id

• **id**: `string`

The unique ID assigned to the widget when the widget is created.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#id)

#### Inherited from

Widget.id

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107528

___

### initialized

• **initialized**: `boolean`

#### Inherited from

Widget.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### label

• **label**: `string`

The widget's label.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#label)

#### Inherited from

Widget.label

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107534

___

### style

• **style**: ``"ruler"`` \| ``"line"``

The style for the scale bar.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#style)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:97368

___

### unit

• **unit**: ``"non-metric"`` \| ``"metric"`` \| ``"dual"``

Units to use for the scale bar.

**`Default`**

```ts
non-metric

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#unit)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:97376

___

### view

• **view**: [`EsriMapView`](geo_esri.EsriMapView.md)

A reference to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#view)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:97382

___

### viewModel

• **viewModel**: `ScaleBarViewModel`

The view model for this widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#viewModel)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:97388

___

### visible

• **visible**: `boolean`

Indicates whether the widget is visible.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#visible)
```

#### Inherited from

Widget.visible

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107542

## Methods

### \_get

▸ `Protected` **_get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Widget.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:32

▸ `Protected` **_get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Widget.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Inherited from

Widget.\_set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:34

___

### addHandles

▸ **addHandles**<`T`\>(`handles`, `groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Widget.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### classes

▸ **classes**(`...classNames`): `string`

A utility method used for building the value for a widget's `class` property.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#classes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...classNames` | `any`[] |

#### Returns

`string`

#### Inherited from

Widget.classes

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107554

___

### destroy

▸ **destroy**(): `void`

Destroys the widget instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#destroy)

#### Returns

`void`

#### Inherited from

Widget.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107560

___

### emit

▸ **emit**(`type`, `event?`): `boolean`

Emits an event on the instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#emit)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | `any` |

#### Returns

`boolean`

#### Inherited from

Widget.emit

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2063

___

### get

▸ **get**<`T`\>(`propertyName`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`T`

#### Inherited from

Widget.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:21

▸ **get**(`propertyName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`any`

#### Inherited from

Widget.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### hasEventListener

▸ **hasEventListener**(`type`): `boolean`

Indicates whether there is an event listener on the instance that matches the provided event name.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#hasEventListener)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

Widget.hasEventListener

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2069

___

### hasHandles

▸ **hasHandles**<`T`\>(`groupKey?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`boolean`

#### Inherited from

Widget.hasHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

`isFulfilled()` may be used to verify if creating an instance of the class is fulfilled (either resolved or rejected).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#isFulfilled)

#### Returns

`boolean`

#### Inherited from

Widget.isFulfilled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107566

___

### isRejected

▸ **isRejected**(): `boolean`

`isRejected()` may be used to verify if creating an instance of the class is rejected.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#isRejected)

#### Returns

`boolean`

#### Inherited from

Widget.isRejected

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107572

___

### isResolved

▸ **isResolved**(): `boolean`

`isResolved()` may be used to verify if creating an instance of the class is resolved.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#isResolved)

#### Returns

`boolean`

#### Inherited from

Widget.isResolved

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107578

___

### notifyChange

▸ `Protected` **notifyChange**(`propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |

#### Returns

`void`

#### Inherited from

Widget.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

___

### on

▸ **on**(`type`, `listener`): `IHandle`

Registers an event handler on the instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Evented.html#on)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | `EventHandler` |

#### Returns

`IHandle`

#### Inherited from

Widget.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2075

___

### own

▸ **own**(`handleOrHandles`): `void`

Adds one or more handles which are to be tied to the lifecycle of the widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#own)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handleOrHandles` | `WatchHandle` \| `WatchHandle`[] |

#### Returns

`void`

#### Inherited from

Widget.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107584

___

### postInitialize

▸ **postInitialize**(): `void`

*This method is primarily used by developers when implementing custom widgets.* Executes after widget is ready for rendering.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize)

#### Returns

`void`

#### Inherited from

Widget.postInitialize

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107590

___

### removeHandles

▸ **removeHandles**<`T`\>(`groupKey?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey?` | `Exclude`<`T`, `IHandle`\> |

#### Returns

`void`

#### Inherited from

Widget.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### render

▸ **render**(): `any`

*This method is primarily used by developers when implementing custom widgets.* It must be implemented by subclasses for rendering.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render)

#### Returns

`any`

#### Inherited from

Widget.render

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107596

___

### renderNow

▸ **renderNow**(): `void`

Renders widget to the DOM immediately.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#renderNow)

#### Returns

`void`

#### Inherited from

Widget.renderNow

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107602

___

### scheduleRender

▸ **scheduleRender**(): `void`

*This method is primarily used by developers when implementing custom widgets.* Schedules widget rendering.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#scheduleRender)

#### Returns

`void`

#### Inherited from

Widget.scheduleRender

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107608

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `T` |

#### Returns

[`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Inherited from

Widget.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriScaleBar`](geo_esri.EsriScaleBar.md)

#### Inherited from

Widget.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### watch

▸ **watch**(`path`, `callback`, `sync?`): `WatchHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `callback` | `WatchCallback` |
| `sync?` | `boolean` |

#### Returns

`WatchHandle`

#### Inherited from

Widget.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### when

▸ **when**(`callback?`, `errback?`): `Promise`<`any`\>

`when()` may be leveraged once an instance of the class is created.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#when)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Function` |
| `errback?` | `Function` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Widget.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:107614
