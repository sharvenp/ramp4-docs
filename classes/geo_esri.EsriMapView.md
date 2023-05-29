[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriMapView

# Class: EsriMapView

[geo/esri](../modules/geo_esri.md).EsriMapView

## Hierarchy

- `View`

- `BreakpointsOwner`

  ↳ **`EsriMapView`**

## Table of contents

### Constructors

- [constructor](geo_esri.EsriMapView.md#constructor)

### Properties

- [allLayerViews](geo_esri.EsriMapView.md#alllayerviews)
- [animation](geo_esri.EsriMapView.md#animation)
- [background](geo_esri.EsriMapView.md#background)
- [basemapView](geo_esri.EsriMapView.md#basemapview)
- [breakpoints](geo_esri.EsriMapView.md#breakpoints)
- [center](geo_esri.EsriMapView.md#center)
- [constraints](geo_esri.EsriMapView.md#constraints)
- [container](geo_esri.EsriMapView.md#container)
- [declaredClass](geo_esri.EsriMapView.md#declaredclass)
- [destroyed](geo_esri.EsriMapView.md#destroyed)
- [extent](geo_esri.EsriMapView.md#extent)
- [fatalError](geo_esri.EsriMapView.md#fatalerror)
- [floors](geo_esri.EsriMapView.md#floors)
- [focused](geo_esri.EsriMapView.md#focused)
- [graphics](geo_esri.EsriMapView.md#graphics)
- [height](geo_esri.EsriMapView.md#height)
- [heightBreakpoint](geo_esri.EsriMapView.md#heightbreakpoint)
- [highlightOptions](geo_esri.EsriMapView.md#highlightoptions)
- [initialized](geo_esri.EsriMapView.md#initialized)
- [input](geo_esri.EsriMapView.md#input)
- [interacting](geo_esri.EsriMapView.md#interacting)
- [layerViews](geo_esri.EsriMapView.md#layerviews)
- [magnifier](geo_esri.EsriMapView.md#magnifier)
- [map](geo_esri.EsriMapView.md#map)
- [navigating](geo_esri.EsriMapView.md#navigating)
- [navigation](geo_esri.EsriMapView.md#navigation)
- [orientation](geo_esri.EsriMapView.md#orientation)
- [padding](geo_esri.EsriMapView.md#padding)
- [popup](geo_esri.EsriMapView.md#popup)
- [ready](geo_esri.EsriMapView.md#ready)
- [resizeAlign](geo_esri.EsriMapView.md#resizealign)
- [resizing](geo_esri.EsriMapView.md#resizing)
- [resolution](geo_esri.EsriMapView.md#resolution)
- [rotation](geo_esri.EsriMapView.md#rotation)
- [scale](geo_esri.EsriMapView.md#scale)
- [size](geo_esri.EsriMapView.md#size)
- [spatialReference](geo_esri.EsriMapView.md#spatialreference)
- [spatialReferenceLocked](geo_esri.EsriMapView.md#spatialreferencelocked)
- [stationary](geo_esri.EsriMapView.md#stationary)
- [suspended](geo_esri.EsriMapView.md#suspended)
- [timeExtent](geo_esri.EsriMapView.md#timeextent)
- [type](geo_esri.EsriMapView.md#type)
- [ui](geo_esri.EsriMapView.md#ui)
- [updating](geo_esri.EsriMapView.md#updating)
- [viewpoint](geo_esri.EsriMapView.md#viewpoint)
- [width](geo_esri.EsriMapView.md#width)
- [widthBreakpoint](geo_esri.EsriMapView.md#widthbreakpoint)
- [zoom](geo_esri.EsriMapView.md#zoom)

### Methods

- [\_get](geo_esri.EsriMapView.md#_get)
- [\_set](geo_esri.EsriMapView.md#_set)
- [addHandles](geo_esri.EsriMapView.md#addhandles)
- [destroy](geo_esri.EsriMapView.md#destroy)
- [emit](geo_esri.EsriMapView.md#emit)
- [focus](geo_esri.EsriMapView.md#focus)
- [get](geo_esri.EsriMapView.md#get)
- [goTo](geo_esri.EsriMapView.md#goto)
- [hasEventListener](geo_esri.EsriMapView.md#haseventlistener)
- [hasHandles](geo_esri.EsriMapView.md#hashandles)
- [hitTest](geo_esri.EsriMapView.md#hittest)
- [isFulfilled](geo_esri.EsriMapView.md#isfulfilled)
- [isRejected](geo_esri.EsriMapView.md#isrejected)
- [isResolved](geo_esri.EsriMapView.md#isresolved)
- [notifyChange](geo_esri.EsriMapView.md#notifychange)
- [on](geo_esri.EsriMapView.md#on)
- [own](geo_esri.EsriMapView.md#own)
- [removeHandles](geo_esri.EsriMapView.md#removehandles)
- [set](geo_esri.EsriMapView.md#set)
- [takeScreenshot](geo_esri.EsriMapView.md#takescreenshot)
- [toMap](geo_esri.EsriMapView.md#tomap)
- [toScreen](geo_esri.EsriMapView.md#toscreen)
- [tryFatalErrorRecovery](geo_esri.EsriMapView.md#tryfatalerrorrecovery)
- [watch](geo_esri.EsriMapView.md#watch)
- [when](geo_esri.EsriMapView.md#when)
- [whenLayerView](geo_esri.EsriMapView.md#whenlayerview)

## Constructors

### constructor

• **new EsriMapView**(`properties?`)

A MapView displays a 2D view of a [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) instance.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `MapViewProperties` |

#### Inherited from

View.constructor

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76116

## Properties

### allLayerViews

• **allLayerViews**: `Collection`<`LayerView`\>

Collection containing a flat list of all the created [LayerViews](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) related to the basemap, operational layers, and group layers in this view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#allLayerViews)

#### Inherited from

View.allLayerViews

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78008

___

### animation

• **animation**: `ViewAnimation`

Represents an ongoing view animation initialized by [goTo()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#goTo).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#animation)

#### Inherited from

View.animation

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78014

___

### background

• **background**: `ColorBackground`

The background color of the MapView.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#background)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76022

___

### basemapView

• **basemapView**: `BasemapView`

Represents the view for a single basemap after it has been added to the map.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#basemapView)

#### Inherited from

View.basemapView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78020

___

### breakpoints

• **breakpoints**: `BreakpointsOwnerBreakpoints`

A convenience property used for defining the breakpoints on the [height](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#height) and [width](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#width) of the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#breakpoints)

#### Inherited from

BreakpointsOwner.breakpoints

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73770

___

### center

• **center**: [`EsriPoint`](geo_esri.EsriPoint.md)

Represents the view's center point; when setting the center, you may pass a [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) instance or an array of numbers representing a longitude/latitude pair (`[-100.4593, 36.9014]`).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#center)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76028

___

### constraints

• **constraints**: `MapViewConstraints`

Specifies constraints to [scale](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#scale), [zoom](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#zoom), and [rotation](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#rotation) that may be applied to the MapView.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constraints)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76034

___

### container

• **container**: `HTMLDivElement`

The `id` or node representing the DOM element containing the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#container)

#### Inherited from

View.container

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73859

___

### declaredClass

• **declaredClass**: `string`

#### Inherited from

View.declaredClass

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:18

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

View.destroyed

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:16

___

### extent

• **extent**: [`EsriExtent`](geo_esri.EsriExtent.md)

The extent represents the visible portion of a [map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) within the view as an instance of [Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html).

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76042

___

### fatalError

• **fatalError**: `Error`

A fatal [error](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Error.html) returned when the view loses its WebGL context.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#fatalError)

#### Inherited from

View.fatalError

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78026

___

### floors

• **floors**: `Collection`<`string`\>

Applies a display filter on the view for a specific set of floor levels.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#floors)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76048

___

### focused

• `Readonly` **focused**: `boolean`

Indicates if the browser focus is on the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#focused)

#### Inherited from

View.focused

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73865

___

### graphics

• **graphics**: `Collection`<[`EsriGraphic`](geo_esri.EsriGraphic.md)\>

Allows for adding [graphics](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) directly to the default graphics in the View.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#graphics)

#### Inherited from

View.graphics

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78032

___

### height

• `Readonly` **height**: `number`

The height of the view in pixels read from the view container element.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#height)
```

#### Inherited from

View.height

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73873

___

### heightBreakpoint

• **heightBreakpoint**: ``"xsmall"`` \| ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"xlarge"``

A convenience property indicating the general size of the view's height.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#heightBreakpoint)

#### Inherited from

BreakpointsOwner.heightBreakpoint

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73776

___

### highlightOptions

• **highlightOptions**: `HighlightOptions`

Options for configuring the highlight.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76054

___

### initialized

• **initialized**: `boolean`

#### Inherited from

View.initialized

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:17

___

### input

• `Readonly` **input**: `Input`

Options to configure input handling of the View.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#input)

#### Inherited from

View.input

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78038

___

### interacting

• `Readonly` **interacting**: `boolean`

Indication whether the view is being interacted with (for example when panning or by an interactive tool).

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#interacting)
```

#### Inherited from

View.interacting

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78046

___

### layerViews

• **layerViews**: `Collection`<`LayerView`\>

A collection containing a hierarchical list of all the created [LayerViews](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) of the [operational layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) in the map.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#layerViews)

#### Inherited from

View.layerViews

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78052

___

### magnifier

• `Readonly` **magnifier**: `Magnifier`

The magnifier allows for showing a portion of the view as a magnifier image on top of the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#magnifier)

#### Inherited from

View.magnifier

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78058

___

### map

• **map**: [`EsriMap`](geo_esri.EsriMap.md)

An instance of a [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) object to display in the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#map)

#### Inherited from

View.map

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78064

___

### navigating

• `Readonly` **navigating**: `boolean`

Indication whether the view is being navigated (for example when panning).

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#navigating)
```

#### Inherited from

View.navigating

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78072

___

### navigation

• **navigation**: `Navigation`

Options to configure the navigation behavior of the View.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#navigation)

#### Inherited from

View.navigation

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78078

___

### orientation

• `Readonly` **orientation**: ``"landscape"`` \| ``"portrait"``

A convenience property indicating the view's orientation.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#orientation)

#### Inherited from

BreakpointsOwner.orientation

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73782

___

### padding

• **padding**: `ViewPadding`

Use the padding property to make the [center](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#center), and [extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent), etc.

**`Default`**

```ts
{left: 0, top: 0, right: 0, bottom: 0}

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#padding)
```

#### Inherited from

View.padding

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78086

___

### popup

• **popup**: `Popup`

A Popup object that displays general content or attributes from [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) in the [map](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#map).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#popup)

#### Inherited from

View.popup

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73879

___

### ready

• `Readonly` **ready**: `boolean`

When `true`, this property indicates whether the view successfully satisfied all dependencies, signaling that the following conditions are met.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#ready)
```

#### Inherited from

View.ready

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78094

___

### resizeAlign

• **resizeAlign**: ``"center"`` \| ``"top"`` \| ``"left"`` \| ``"right"`` \| ``"bottom"`` \| ``"top-left"`` \| ``"top-right"`` \| ``"bottom-left"`` \| ``"bottom-right"``

Defines which anchor stays still while resizing the browser window.

**`Default`**

```ts
center

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#resizeAlign)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76062

___

### resizing

• `Readonly` **resizing**: `boolean`

Indicates if the view is being resized.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#resizing)
```

#### Inherited from

View.resizing

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73887

___

### resolution

• `Readonly` **resolution**: `number`

Represents the current value of one pixel in the unit of the view's [spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#spatialReference).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#resolution)

#### Inherited from

View.resolution

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78100

___

### rotation

• **rotation**: `number`

The clockwise rotation of due north in relation to the top of the view in degrees.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#rotation)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76078

___

### scale

• **scale**: `number`

Represents the map scale at the center of the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#scale)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76084

___

### size

• `Readonly` **size**: `number`[]

An array containing the width and height of the view in pixels, e.g.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#size)

#### Inherited from

View.size

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73893

___

### spatialReference

• **spatialReference**: [`EsriSpatialReference`](geo_esri.EsriSpatialReference.md)

The spatial reference of the view.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#spatialReference)
```

#### Inherited from

View.spatialReference

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78108

___

### spatialReferenceLocked

• **spatialReferenceLocked**: `boolean`

Indicates if the MapView's [spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#spatialReference) can be changed after it is initialized.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#spatialReferenceLocked)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76092

___

### stationary

• `Readonly` **stationary**: `boolean`

Indication whether the view is animating, being navigated with or resizing.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#stationary)

#### Inherited from

View.stationary

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78114

___

### suspended

• `Readonly` **suspended**: `boolean`

Indicates if the view is visible on the page.

**`Default`**

```ts
true

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#suspended)
```

#### Inherited from

View.suspended

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73901

___

### timeExtent

• **timeExtent**: `TimeExtent`

The view's time extent.

**`Default`**

```ts
null

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#timeExtent)
```

#### Inherited from

View.timeExtent

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78122

___

### type

• `Readonly` **type**: ``"2d"``

The dimension of the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#type)

#### Inherited from

View.type

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76098

___

### ui

• **ui**: `DefaultUI`

Exposes the default widgets available in the view and allows you to toggle them on and off.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#ui)

#### Inherited from

View.ui

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73907

___

### updating

• `Readonly` **updating**: `boolean`

Indicates whether the view is being updated by additional data requests to the network, or by processing received data.

**`Default`**

```ts
false

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#updating)
```

#### Inherited from

View.updating

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78136

___

### viewpoint

• **viewpoint**: `Viewpoint`

Represents the current view as a [Viewpoint](https://developers.arcgis.com/javascript/latest/api-reference/esri-Viewpoint.html) or point of observation on the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#viewpoint)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76104

___

### width

• `Readonly` **width**: `number`

The width of the view in pixels read from the view container element.

**`Default`**

```ts
0

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#width)
```

#### Inherited from

View.width

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73915

___

### widthBreakpoint

• **widthBreakpoint**: ``"xsmall"`` \| ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"xlarge"``

A convenience property indicating the general size of the view's width.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-BreakpointsOwner.html#widthBreakpoint)

#### Inherited from

BreakpointsOwner.widthBreakpoint

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:73788

___

### zoom

• **zoom**: `number`

Represents the level of detail (LOD) at the center of the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#zoom)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76110

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

View.\_get

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

View.\_get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:33

___

### \_set

▸ `Protected` **_set**<`T`\>(`propertyName`, `value`): [`EsriMapView`](geo_esri.EsriMapView.md)

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

[`EsriMapView`](geo_esri.EsriMapView.md)

#### Inherited from

View.\_set

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

View.addHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:28

___

### destroy

▸ **destroy**(): `void`

Destroys the view, and any associated resources, including its [map](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#map), [popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#popup), and [UI](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#ui) elements.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#destroy)

#### Returns

`void`

#### Inherited from

View.destroy

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78154

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

View.emit

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2063

___

### focus

▸ **focus**(): `void`

Sets the focus on the view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#focus)

#### Returns

`void`

#### Inherited from

View.focus

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78160

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

View.get

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

View.get

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:22

___

### goTo

▸ **goTo**(`target`, `options?`): `Promise`<`any`\>

Sets the view to a given target.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#goTo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `options?` | `GoToOptions2D` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76122

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

View.hasEventListener

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

View.hasHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:30

___

### hitTest

▸ **hitTest**(`screenPoint`, `options?`): `Promise`<`HitTestResult`\>

Returns [hit test results](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#HitTestResult) from each layer that intersects the specified screen coordinates.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `screenPoint` | `MouseEvent` \| `MapViewScreenPoint` |
| `options?` | `MapViewHitTestOptions` |

#### Returns

`Promise`<`HitTestResult`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76128

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

`isFulfilled()` may be used to verify if creating an instance of the class is fulfilled (either resolved or rejected).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Promise.html#isFulfilled)

#### Returns

`boolean`

#### Inherited from

View.isFulfilled

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2262

___

### isRejected

▸ **isRejected**(): `boolean`

`isRejected()` may be used to verify if creating an instance of the class is rejected.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Promise.html#isRejected)

#### Returns

`boolean`

#### Inherited from

View.isRejected

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2268

___

### isResolved

▸ **isResolved**(): `boolean`

`isResolved()` may be used to verify if creating an instance of the class is resolved.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Promise.html#isResolved)

#### Returns

`boolean`

#### Inherited from

View.isResolved

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2274

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

View.notifyChange

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:31

___

### on

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"resize"`` |
| `eventHandler` | `ViewResizeEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78239

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create"`` |
| `eventHandler` | `ViewLayerviewCreateEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78240

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-create-error"`` |
| `eventHandler` | `ViewLayerviewCreateErrorEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78241

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"layerview-destroy"`` |
| `eventHandler` | `ViewLayerviewDestroyEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78242

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"click"`` |
| `eventHandler` | `ViewClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78243

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"click"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78244

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"double-click"`` |
| `eventHandler` | `ViewDoubleClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78245

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"double-click"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewDoubleClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78246

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"immediate-double-click"`` |
| `eventHandler` | `ViewImmediateDoubleClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78247

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"immediate-double-click"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewImmediateDoubleClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78248

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"immediate-click"`` |
| `eventHandler` | `ViewImmediateClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78249

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"immediate-click"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewImmediateClickEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78250

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"hold"`` |
| `eventHandler` | `ViewHoldEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78251

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"hold"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewHoldEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78252

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"drag"`` |
| `eventHandler` | `ViewDragEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78253

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"drag"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewDragEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78254

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"mouse-wheel"`` |
| `eventHandler` | `ViewMouseWheelEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78255

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"mouse-wheel"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewMouseWheelEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78256

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"key-down"`` |
| `eventHandler` | `ViewKeyDownEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78257

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"key-down"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewKeyDownEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78258

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"key-up"`` |
| `eventHandler` | `ViewKeyUpEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78259

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"key-up"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewKeyUpEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78260

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-down"`` |
| `eventHandler` | `ViewPointerDownEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78261

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-down"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewPointerDownEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78262

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-move"`` |
| `eventHandler` | `ViewPointerMoveEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78263

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-move"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewPointerMoveEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78264

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-up"`` |
| `eventHandler` | `ViewPointerUpEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78265

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-up"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewPointerUpEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78266

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-enter"`` |
| `eventHandler` | `ViewPointerEnterEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78267

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-enter"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewPointerEnterEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78268

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-leave"`` |
| `eventHandler` | `ViewPointerLeaveEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78269

▸ **on**(`name`, `modifiers`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pointer-leave"`` |
| `modifiers` | `string`[] |
| `eventHandler` | `ViewPointerLeaveEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78270

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"focus"`` |
| `eventHandler` | `ViewFocusEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78271

▸ **on**(`name`, `eventHandler`): `IHandle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"blur"`` |
| `eventHandler` | `ViewBlurEventHandler` |

#### Returns

`IHandle`

#### Inherited from

View.on

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78272

___

### own

▸ **own**(`handles`): `void`

**`Deprecated`**

Since 4.25. Use addHandles(), removeHandles() and hasHandles() instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | `IHandle` \| `IHandle`[] |

#### Returns

`void`

#### Inherited from

View.own

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:27

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

View.removeHandles

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:29

___

### set

▸ **set**<`T`\>(`propertyName`, `value`): [`EsriMapView`](geo_esri.EsriMapView.md)

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

[`EsriMapView`](geo_esri.EsriMapView.md)

#### Inherited from

View.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:23

▸ **set**(`props`): [`EsriMapView`](geo_esri.EsriMapView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `HashMap`<`any`\> |

#### Returns

[`EsriMapView`](geo_esri.EsriMapView.md)

#### Inherited from

View.set

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:24

___

### takeScreenshot

▸ **takeScreenshot**(`options?`): `Promise`<`Screenshot`\>

Create a screenshot of the current view.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#takeScreenshot)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `MapViewTakeScreenshotOptions` |

#### Returns

`Promise`<`Screenshot`\>

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76134

___

### toMap

▸ **toMap**(`screenPoint`): [`EsriPoint`](geo_esri.EsriPoint.md)

Converts the given screen point to a [map point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#toMap)

#### Parameters

| Name | Type |
| :------ | :------ |
| `screenPoint` | `MouseEvent` \| `MapViewScreenPoint` |

#### Returns

[`EsriPoint`](geo_esri.EsriPoint.md)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76140

___

### toScreen

▸ **toScreen**(`point`): `MapViewScreenPoint`

Converts the given [map point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) to a screen point.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#toScreen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`EsriPoint`](geo_esri.EsriPoint.md) |

#### Returns

`MapViewScreenPoint`

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:76146

___

### tryFatalErrorRecovery

▸ **tryFatalErrorRecovery**(): `void`

Call this method to clear any [fatal errors](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#fatalError) resulting from a lost WebGL context.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#tryFatalErrorRecovery)

#### Returns

`void`

#### Inherited from

View.tryFatalErrorRecovery

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78166

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

View.watch

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:25

___

### when

▸ **when**(`callback?`, `errback?`): `Promise`<`any`\>

`when()` may be leveraged once an instance of the class is created.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Promise.html#when)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Function` |
| `errback?` | `Function` |

#### Returns

`Promise`<`any`\>

#### Inherited from

View.when

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:2280

___

### whenLayerView

▸ **whenLayerView**(`layer`): `Promise`<`PointCloudLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `PointCloudLayer` |

#### Returns

`Promise`<`PointCloudLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78172

▸ **whenLayerView**(`layer`): `Promise`<`StreamLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `StreamLayer` |

#### Returns

`Promise`<`StreamLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78178

▸ **whenLayerView**(`layer`): `Promise`<`FeatureLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`EsriFeatureLayer`](geo_esri.EsriFeatureLayer.md) |

#### Returns

`Promise`<`FeatureLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78184

▸ **whenLayerView**(`layer`): `Promise`<`CSVLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `CSVLayer` |

#### Returns

`Promise`<`CSVLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78190

▸ **whenLayerView**(`layer`): `Promise`<`GeoJSONLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `GeoJSONLayer` |

#### Returns

`Promise`<`GeoJSONLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78196

▸ **whenLayerView**(`layer`): `Promise`<`GeoRSSLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `GeoRSSLayer` |

#### Returns

`Promise`<`GeoRSSLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78202

▸ **whenLayerView**(`layer`): `Promise`<`GraphicsLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`EsriGraphicsLayer`](geo_esri.EsriGraphicsLayer.md) |

#### Returns

`Promise`<`GraphicsLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78208

▸ **whenLayerView**(`layer`): `Promise`<`ImageryLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`EsriImageryLayer`](geo_esri.EsriImageryLayer.md) |

#### Returns

`Promise`<`ImageryLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78214

▸ **whenLayerView**(`layer`): `Promise`<`KMLLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `KMLLayer` |

#### Returns

`Promise`<`KMLLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78220

▸ **whenLayerView**(`layer`): `Promise`<`SceneLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `SceneLayer` |

#### Returns

`Promise`<`SceneLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78226

▸ **whenLayerView**(`layer`): `Promise`<`DimensionLayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DimensionLayer` |

#### Returns

`Promise`<`DimensionLayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78232

▸ **whenLayerView**(`layer`): `Promise`<`LayerView`\>

Gets the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) created on the view for the given layer.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Layer` |

#### Returns

`Promise`<`LayerView`\>

#### Inherited from

View.whenLayerView

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:78238
