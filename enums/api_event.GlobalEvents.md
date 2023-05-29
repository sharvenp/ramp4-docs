[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/event](../modules/api_event.md) / GlobalEvents

# Enumeration: GlobalEvents

[api/event](../modules/api_event.md).GlobalEvents

## Table of contents

### Enumeration Members

- [APPBAR\_BUTTON\_CLICK](api_event.GlobalEvents.md#appbar_button_click)
- [COMPONENT](api_event.GlobalEvents.md#component)
- [CONFIG\_CHANGE](api_event.GlobalEvents.md#config_change)
- [DETAILS\_TOGGLE](api_event.GlobalEvents.md#details_toggle)
- [FILTER\_CHANGE](api_event.GlobalEvents.md#filter_change)
- [FIXTURE\_ADDED](api_event.GlobalEvents.md#fixture_added)
- [FIXTURE\_REMOVED](api_event.GlobalEvents.md#fixture_removed)
- [GRID\_TOGGLE](api_event.GlobalEvents.md#grid_toggle)
- [HELP\_TOGGLE](api_event.GlobalEvents.md#help_toggle)
- [LAYER\_DRAWSTATECHANGE](api_event.GlobalEvents.md#layer_drawstatechange)
- [LAYER\_INITIATIONSTATECHANGE](api_event.GlobalEvents.md#layer_initiationstatechange)
- [LAYER\_LAYERSTATECHANGE](api_event.GlobalEvents.md#layer_layerstatechange)
- [LAYER\_OPACITYCHANGE](api_event.GlobalEvents.md#layer_opacitychange)
- [LAYER\_REGISTERED](api_event.GlobalEvents.md#layer_registered)
- [LAYER\_RELOAD\_END](api_event.GlobalEvents.md#layer_reload_end)
- [LAYER\_RELOAD\_START](api_event.GlobalEvents.md#layer_reload_start)
- [LAYER\_REMOVE](api_event.GlobalEvents.md#layer_remove)
- [LAYER\_VISIBILITYCHANGE](api_event.GlobalEvents.md#layer_visibilitychange)
- [MAP\_BASEMAPCHANGE](api_event.GlobalEvents.md#map_basemapchange)
- [MAP\_BLUR](api_event.GlobalEvents.md#map_blur)
- [MAP\_CLICK](api_event.GlobalEvents.md#map_click)
- [MAP\_CREATED](api_event.GlobalEvents.md#map_created)
- [MAP\_DESTROYED](api_event.GlobalEvents.md#map_destroyed)
- [MAP\_DOUBLECLICK](api_event.GlobalEvents.md#map_doubleclick)
- [MAP\_EXTENTCHANGE](api_event.GlobalEvents.md#map_extentchange)
- [MAP\_FOCUS](api_event.GlobalEvents.md#map_focus)
- [MAP\_GRAPHICHIT](api_event.GlobalEvents.md#map_graphichit)
- [MAP\_IDENTIFY](api_event.GlobalEvents.md#map_identify)
- [MAP\_KEYDOWN](api_event.GlobalEvents.md#map_keydown)
- [MAP\_KEYUP](api_event.GlobalEvents.md#map_keyup)
- [MAP\_MOUSEDOWN](api_event.GlobalEvents.md#map_mousedown)
- [MAP\_MOUSEMOVE](api_event.GlobalEvents.md#map_mousemove)
- [MAP\_MOUSEMOVE\_END](api_event.GlobalEvents.md#map_mousemove_end)
- [MAP\_MOUSEMOVE\_START](api_event.GlobalEvents.md#map_mousemove_start)
- [MAP\_REFRESH\_END](api_event.GlobalEvents.md#map_refresh_end)
- [MAP\_REFRESH\_START](api_event.GlobalEvents.md#map_refresh_start)
- [MAP\_REORDER](api_event.GlobalEvents.md#map_reorder)
- [MAP\_RESIZED](api_event.GlobalEvents.md#map_resized)
- [MAP\_SCALECHANGE](api_event.GlobalEvents.md#map_scalechange)
- [MAP\_START](api_event.GlobalEvents.md#map_start)
- [METADATA\_TOGGLE](api_event.GlobalEvents.md#metadata_toggle)
- [PANEL\_CLOSED](api_event.GlobalEvents.md#panel_closed)
- [PANEL\_MINIMIZED](api_event.GlobalEvents.md#panel_minimized)
- [PANEL\_OPENED](api_event.GlobalEvents.md#panel_opened)
- [RAMP\_MOBILEVIEW\_CHANGE](api_event.GlobalEvents.md#ramp_mobileview_change)
- [REORDER\_TOGGLE](api_event.GlobalEvents.md#reorder_toggle)
- [SETTINGS\_TOGGLE](api_event.GlobalEvents.md#settings_toggle)
- [USER\_LAYER\_ADDED](api_event.GlobalEvents.md#user_layer_added)
- [WIZARD\_TOGGLE](api_event.GlobalEvents.md#wizard_toggle)

## Enumeration Members

### APPBAR\_BUTTON\_CLICK

• **APPBAR\_BUTTON\_CLICK** = ``"appbar/click"``

Fires when an appbar button is clicked.
Payload: `(id: string)`

#### Defined in

[src/api/event.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L44)

___

### COMPONENT

• **COMPONENT** = ``"ramp/component"``

Fires when a Vue component is registered with `rInstance.component(...)`.
Payload: `(id: string)`

#### Defined in

[src/api/event.ts:49](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L49)

___

### CONFIG\_CHANGE

• **CONFIG\_CHANGE** = ``"config/configchanged"``

Fires when the config file changes.
Payload: `(config: RampConfig)`

#### Defined in

[src/api/event.ts:55](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L55)

___

### DETAILS\_TOGGLE

• **DETAILS\_TOGGLE** = ``"details/toggle"``

Fires when a request is issued to toggle (show if hidden, hide if showing) the details of an identify result.
Payload: `({ identifyItem: IdentifyItem, uid: string, format: string }, force?: boolean)`

#### Defined in

[src/api/event.ts:61](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L61)

___

### FILTER\_CHANGE

• **FILTER\_CHANGE** = ``"filter/change"``

Fires when a filter is changed.
Payload: `(params: FilterEventParam)`

#### Defined in

[src/api/event.ts:67](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L67)

___

### FIXTURE\_ADDED

• **FIXTURE\_ADDED** = ``"fixture/added"``

Fires when a fixture is added to the instance.
Payload: `(fixture: FixtureInstance)`

#### Defined in

[src/api/event.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L73)

___

### FIXTURE\_REMOVED

• **FIXTURE\_REMOVED** = ``"fixture/removed"``

Fires when a fixture is removed from the instance.
Payload: `(fixture: FixtureInstance)`

#### Defined in

[src/api/event.ts:79](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L79)

___

### GRID\_TOGGLE

• **GRID\_TOGGLE** = ``"grid/toggle"``

Fires when a request is issued to toggle (show if hidden, hide if showing) the grid of attributes.
Payload: `(uid: string, force?: boolean)`

#### Defined in

[src/api/event.ts:85](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L85)

___

### HELP\_TOGGLE

• **HELP\_TOGGLE** = ``"help/toggle"``

Fires when a request is issued to toggle (show if hidden, hide if showing) help information.
Payload: `(force?: boolean)`

#### Defined in

[src/api/event.ts:91](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L91)

___

### LAYER\_DRAWSTATECHANGE

• **LAYER\_DRAWSTATECHANGE** = ``"layer/drawstatechange"``

Fires when the drawing state of a layer changes.
Payload: `({ layer: LayerInstance, state: string })`

#### Defined in

[src/api/event.ts:97](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L97)

___

### LAYER\_INITIATIONSTATECHANGE

• **LAYER\_INITIATIONSTATECHANGE** = ``"layer/initiationStatechange"``

Fires when the layer state of a layer changes.
Payload: `({ layer: LayerInstance, state: string})`

#### Defined in

[src/api/event.ts:103](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L103)

___

### LAYER\_LAYERSTATECHANGE

• **LAYER\_LAYERSTATECHANGE** = ``"layer/layerstatechange"``

Fires when the load state of a layer changes.
Payload: `({ layer: LayerInstance, state: string })`

#### Defined in

[src/api/event.ts:109](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L109)

___

### LAYER\_OPACITYCHANGE

• **LAYER\_OPACITYCHANGE** = ``"layer/opacitychange"``

Fires when the opacity of a layer changes.
Payload: `({ layer: LayerInstance, opacity: number })`

#### Defined in

[src/api/event.ts:115](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L115)

___

### LAYER\_REGISTERED

• **LAYER\_REGISTERED** = ``"layer/registered"``

Fires when a layer is registered (added to the instance via the map).
Payload: `(layer: LayerInstance)`

#### Defined in

[src/api/event.ts:121](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L121)

___

### LAYER\_RELOAD\_END

• **LAYER\_RELOAD\_END** = ``"layer/reloadend"``

Fires when a layer completes its reload process.
Payload: `(layer: LayerInstance)`

#### Defined in

[src/api/event.ts:127](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L127)

___

### LAYER\_RELOAD\_START

• **LAYER\_RELOAD\_START** = ``"layer/reloadstart"``

Fires when a layer begins its reload process.
Payload: `(layer: LayerInstance)`

#### Defined in

[src/api/event.ts:133](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L133)

___

### LAYER\_REMOVE

• **LAYER\_REMOVE** = ``"layer/remove"``

Fires when a layer is removed from the map.
Payload: `(layer: LayerInstance)`

#### Defined in

[src/api/event.ts:139](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L139)

___

### LAYER\_VISIBILITYCHANGE

• **LAYER\_VISIBILITYCHANGE** = ``"layer/visibilitychange"``

Fires when the visibility of a layer changes.
Payload: `({ layer: LayerInstance, visibility: boolean })`

#### Defined in

[src/api/event.ts:145](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L145)

___

### MAP\_BASEMAPCHANGE

• **MAP\_BASEMAPCHANGE** = ``"map/basemapchanged"``

Fires when the basemap changes.
Payload: `({ basemapId: string, schemaChanged: boolean })`

#### Defined in

[src/api/event.ts:151](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L151)

___

### MAP\_BLUR

• **MAP\_BLUR** = ``"map/blur"``

Fires when the map loses focus.
Payload: `(params: KeyboardEvent)` (DOM Event)

#### Defined in

[src/api/event.ts:157](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L157)

___

### MAP\_CLICK

• **MAP\_CLICK** = ``"map/click"``

Fires when the map is clicked.
Payload: `(params: MapClick)`

#### Defined in

[src/api/event.ts:163](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L163)

___

### MAP\_CREATED

• **MAP\_CREATED** = ``"map/created"``

Fires after the map is created.
Payload: none

#### Defined in

[src/api/event.ts:169](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L169)

___

### MAP\_DESTROYED

• **MAP\_DESTROYED** = ``"map/destroyed"``

Fires after the map is destroyed.
Payload: none

#### Defined in

[src/api/event.ts:175](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L175)

___

### MAP\_DOUBLECLICK

• **MAP\_DOUBLECLICK** = ``"map/doubleclick"``

Fires when the map is double-clicked.
Payload: `(params: MapClick)`

#### Defined in

[src/api/event.ts:181](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L181)

___

### MAP\_EXTENTCHANGE

• **MAP\_EXTENTCHANGE** = ``"map/extentchanged"``

Fires when the map extent changes.
Payload: `(extent: Extent)`

#### Defined in

[src/api/event.ts:187](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L187)

___

### MAP\_FOCUS

• **MAP\_FOCUS** = ``"map/focus"``

Fires when the map gains focus.
Payload: `(params: KeyboardEvent)` (DOM Event)

#### Defined in

[src/api/event.ts:193](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L193)

___

### MAP\_GRAPHICHIT

• **MAP\_GRAPHICHIT** = ``"map/graphichit"``

Fires when the mouse enters the graphic of a vector layer symbol.
Payload: TODO huge untyped object. Create type? Type it all out?

#### Defined in

[src/api/event.ts:199](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L199)

___

### MAP\_IDENTIFY

• **MAP\_IDENTIFY** = ``"map/identify"``

Fires when a map identify executes.
Payload: `(results: MapIdentifyResult)`

#### Defined in

[src/api/event.ts:205](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L205)

___

### MAP\_KEYDOWN

• **MAP\_KEYDOWN** = ``"map/keydown"``

Fires when a key is pressed down while the map has focus.
Payload: `(params: KeyboardEvent)` (DOM Event)

#### Defined in

[src/api/event.ts:211](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L211)

___

### MAP\_KEYUP

• **MAP\_KEYUP** = ``"map/keyup"``

Fires when a key is released while the map has focus.
Payload: `(params: KeyboardEvent)` (DOM Event)

#### Defined in

[src/api/event.ts:217](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L217)

___

### MAP\_MOUSEDOWN

• **MAP\_MOUSEDOWN** = ``"map/mousedown"``

Fires when the mouse (or alternate pointer) enters the "down" state.
Payload: `(params: PointerEvent)` (DOM Event)

#### Defined in

[src/api/event.ts:223](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L223)

___

### MAP\_MOUSEMOVE

• **MAP\_MOUSEMOVE** = ``"map/mousemove"``

Fires when the mouse moves while over the map.
Payload: `(params: MapMove)`

#### Defined in

[src/api/event.ts:229](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L229)

___

### MAP\_MOUSEMOVE\_END

• **MAP\_MOUSEMOVE\_END** = ``"map/mousemoveend"``

Fires when the mouse moves stops moving over the map.
Payload: `(params: MapMove)`

#### Defined in

[src/api/event.ts:235](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L235)

___

### MAP\_MOUSEMOVE\_START

• **MAP\_MOUSEMOVE\_START** = ``"map/mousemovestart"``

Fires when the mouse starts moving over the map.
Payload: `(params: MapMove)`

#### Defined in

[src/api/event.ts:241](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L241)

___

### MAP\_REFRESH\_END

• **MAP\_REFRESH\_END** = ``"map/refreshend"``

Fires when the map view finishes refreshing.
Payload: none

#### Defined in

[src/api/event.ts:247](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L247)

___

### MAP\_REFRESH\_START

• **MAP\_REFRESH\_START** = ``"map/refreshstart"``

Fires when the map view starts refreshing.
Payload: none

#### Defined in

[src/api/event.ts:253](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L253)

___

### MAP\_REORDER

• **MAP\_REORDER** = ``"map/reorder"``

Fires when a layer is reordered in the map stack.
Payload: `( { layer: LayerInstance, newIndex: integer })`

#### Defined in

[src/api/event.ts:259](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L259)

___

### MAP\_RESIZED

• **MAP\_RESIZED** = ``"map/resized"``

Fires when the map view is resized.
Payload: `({ height: number, width: number })`

#### Defined in

[src/api/event.ts:265](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L265)

___

### MAP\_SCALECHANGE

• **MAP\_SCALECHANGE** = ``"map/scalechanged"``

Fires when the map scale changes.
Payload: `(scale_denominator: number)`

#### Defined in

[src/api/event.ts:271](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L271)

___

### MAP\_START

• **MAP\_START** = ``"map/start"``

Fires when the request to start the map is given.
Payload: none

#### Defined in

[src/api/event.ts:277](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L277)

___

### METADATA\_TOGGLE

• **METADATA\_TOGGLE** = ``"metadata/toggle"``

Fires when a request is issued to toggle the Metadata panel.
Payload: `({ type: string, layerName: string, url: string }, open: boolean)`

#### Defined in

[src/api/event.ts:283](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L283)

___

### PANEL\_CLOSED

• **PANEL\_CLOSED** = ``"panel/closed"``

Fires when a panel is closed.
Payload: `(panel: PanelInstance)`

#### Defined in

[src/api/event.ts:289](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L289)

___

### PANEL\_MINIMIZED

• **PANEL\_MINIMIZED** = ``"panel/minimized"``

Fires when a panel is minimized.
Payload: `(panel: PanelInstance)`

#### Defined in

[src/api/event.ts:295](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L295)

___

### PANEL\_OPENED

• **PANEL\_OPENED** = ``"panel/opened"``

Fires when a panel opens.
Payload: `(panel: PanelInstance)`

#### Defined in

[src/api/event.ts:301](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L301)

___

### RAMP\_MOBILEVIEW\_CHANGE

• **RAMP\_MOBILEVIEW\_CHANGE** = ``"ramp/mobileviewchange"``

Fires when screen size changes from/to mobile resolution.
Payload `(mobileMode: boolean)`

#### Defined in

[src/api/event.ts:307](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L307)

___

### REORDER\_TOGGLE

• **REORDER\_TOGGLE** = ``"reorder/toggle"``

Fires when a request is issued to toggle (open/close) the Layer Reorder panel.
Payload: none

#### Defined in

[src/api/event.ts:313](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L313)

___

### SETTINGS\_TOGGLE

• **SETTINGS\_TOGGLE** = ``"settings/toggle"``

Fires when a request is issued to toggle (show if hidden, hide if showing) layer settings.
Payload: `(uid: string, force?: boolean)`

#### Defined in

[src/api/event.ts:319](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L319)

___

### USER\_LAYER\_ADDED

• **USER\_LAYER\_ADDED** = ``"user/layeradded"``

Fires when a user adds a layer, generally through the wizard.
Payload: `(layer: LayerInstance)`

#### Defined in

[src/api/event.ts:325](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L325)

___

### WIZARD\_TOGGLE

• **WIZARD\_TOGGLE** = ``"wizard/toggle"``

Fires when a request is issued to toggle (open/close) the Add Layer Wizard panel.
Payload: none

#### Defined in

[src/api/event.ts:331](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/event.ts#L331)
