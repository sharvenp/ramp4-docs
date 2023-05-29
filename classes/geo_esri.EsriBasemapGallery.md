[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriBasemapGallery

# Class: EsriBasemapGallery

[geo/esri](../modules/geo_esri.md).EsriBasemapGallery

## Hierarchy

- `Widget`

  ↳ **`EsriBasemapGallery`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriBasemapGallery.md#constructor)

### Properties

- [activeBasemap](geo_esri.EsriBasemapGallery.md#activebasemap)
- [container](geo_esri.EsriBasemapGallery.md#container)
- [declaredClass](geo_esri.EsriBasemapGallery.md#declaredclass)
- [destroyed](geo_esri.EsriBasemapGallery.md#destroyed)
- [disabled](geo_esri.EsriBasemapGallery.md#disabled)
- [headingLevel](geo_esri.EsriBasemapGallery.md#headinglevel)
- [iconClass](geo_esri.EsriBasemapGallery.md#iconclass)
- [id](geo_esri.EsriBasemapGallery.md#id)
- [initialized](geo_esri.EsriBasemapGallery.md#initialized)
- [label](geo_esri.EsriBasemapGallery.md#label)
- [source](geo_esri.EsriBasemapGallery.md#source)
- [view](geo_esri.EsriBasemapGallery.md#view)
- [viewModel](geo_esri.EsriBasemapGallery.md#viewmodel)
- [visible](geo_esri.EsriBasemapGallery.md#visible)

### Methods

- [\_get](geo_esri.EsriBasemapGallery.md#_get)
- [\_set](geo_esri.EsriBasemapGallery.md#_set)
- [addHandles](geo_esri.EsriBasemapGallery.md#addhandles)
- [classes](geo_esri.EsriBasemapGallery.md#classes)
- [destroy](geo_esri.EsriBasemapGallery.md#destroy)
- [emit](geo_esri.EsriBasemapGallery.md#emit)
- [get](geo_esri.EsriBasemapGallery.md#get)
- [hasEventListener](geo_esri.EsriBasemapGallery.md#haseventlistener)
- [hasHandles](geo_esri.EsriBasemapGallery.md#hashandles)
- [isFulfilled](geo_esri.EsriBasemapGallery.md#isfulfilled)
- [isRejected](geo_esri.EsriBasemapGallery.md#isrejected)
- [isResolved](geo_esri.EsriBasemapGallery.md#isresolved)
- [notifyChange](geo_esri.EsriBasemapGallery.md#notifychange)
- [on](geo_esri.EsriBasemapGallery.md#on)
- [own](geo_esri.EsriBasemapGallery.md#own)
- [postInitialize](geo_esri.EsriBasemapGallery.md#postinitialize)
- [removeHandles](geo_esri.EsriBasemapGallery.md#removehandles)
- [render](geo_esri.EsriBasemapGallery.md#render)
- [renderNow](geo_esri.EsriBasemapGallery.md#rendernow)
- [scheduleRender](geo_esri.EsriBasemapGallery.md#schedulerender)
- [set](geo_esri.EsriBasemapGallery.md#set)
- [watch](geo_esri.EsriBasemapGallery.md#watch)
- [when](geo_esri.EsriBasemapGallery.md#when)

## Constructors

### constructor

• **new EsriBasemapGallery**(`properties?`)

The BasemapGallery widget displays a collection images representing basemaps from ArcGIS.com or a user-defined set of map or image services.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `BasemapGalleryProperties` |

#### Overrides

Widget.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82241

## Properties

### activeBasemap

• **activeBasemap**: [`EsriBasemap`](geo_esri.EsriBasemap.md)

The map's [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#activeBasemap)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82195

___

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

### disabled

• **disabled**: `boolean`

When `true`, sets the widget to a disabled state so the user cannot interact with it.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#disabled)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82203

___

### headingLevel

• **headingLevel**: `number`

Indicates the heading level to use for the message "No basemaps available" when no basemaps are available in the BasemapGallery.

**`Default`**

```ts
2

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#headingLevel)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82211

___

### iconClass

• **iconClass**: `string`

The widget's default CSS icon class.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#iconClass)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82217

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

### source

• **source**: `LocalBasemapsSource` \| `PortalBasemapsSource`

The source for basemaps that the widget will display.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#source)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82223

___

### view

• **view**: [`EsriMapView`](geo_esri.EsriMapView.md) \| `SceneView`

The view from which the widget will operate.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#view)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82229

___

### viewModel

• **viewModel**: `BasemapGalleryViewModel`

The view model for this widget.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html#viewModel)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:82235

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

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

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

[`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

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

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

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

[`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

#### Inherited from

Widget.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriBasemapGallery`](geo_esri.EsriBasemapGallery.md)

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
