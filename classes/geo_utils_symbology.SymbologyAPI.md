[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/utils/symbology](../modules/geo_utils_symbology.md) / SymbologyAPI

# Class: SymbologyAPI

[geo/utils/symbology](../modules/geo_utils_symbology.md).SymbologyAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`SymbologyAPI`**

## Table of contents

### Constructors

- [constructor](geo_utils_symbology.SymbologyAPI.md#constructor)

### Properties

- [$iApi](geo_utils_symbology.SymbologyAPI.md#$iapi)
- [CLASS\_BREAKS](geo_utils_symbology.SymbologyAPI.md#class_breaks)
- [CONTAINER\_CENTER](geo_utils_symbology.SymbologyAPI.md#container_center)
- [CONTAINER\_SIZE](geo_utils_symbology.SymbologyAPI.md#container_size)
- [CONTENT\_IMAGE\_SIZE](geo_utils_symbology.SymbologyAPI.md#content_image_size)
- [CONTENT\_PADDING](geo_utils_symbology.SymbologyAPI.md#content_padding)
- [CONTENT\_SIZE](geo_utils_symbology.SymbologyAPI.md#content_size)
- [NONE](geo_utils_symbology.SymbologyAPI.md#none)
- [SIMPLE](geo_utils_symbology.SymbologyAPI.md#simple)
- [UNIQUE\_VALUE](geo_utils_symbology.SymbologyAPI.md#unique_value)

### Accessors

- [$element](geo_utils_symbology.SymbologyAPI.md#$element)
- [$vApp](geo_utils_symbology.SymbologyAPI.md#$vapp)

### Methods

- [fitInto](geo_utils_symbology.SymbologyAPI.md#fitinto)
- [generateBlankSymbology](geo_utils_symbology.SymbologyAPI.md#generateblanksymbology)
- [generatePlaceholderSymbology](geo_utils_symbology.SymbologyAPI.md#generateplaceholdersymbology)
- [generateWMSSymbology](geo_utils_symbology.SymbologyAPI.md#generatewmssymbology)
- [getGraphicIcon](geo_utils_symbology.SymbologyAPI.md#getgraphicicon)
- [getGraphicSymbol](geo_utils_symbology.SymbologyAPI.md#getgraphicsymbol)
- [getMapServerLegend](geo_utils_symbology.SymbologyAPI.md#getmapserverlegend)
- [listToIconSymbology](geo_utils_symbology.SymbologyAPI.md#listtoiconsymbology)
- [listToImageSymbology](geo_utils_symbology.SymbologyAPI.md#listtoimagesymbology)
- [listToSymbology](geo_utils_symbology.SymbologyAPI.md#listtosymbology)
- [makeRenderer](geo_utils_symbology.SymbologyAPI.md#makerenderer)
- [mapServerLegendToRenderer](geo_utils_symbology.SymbologyAPI.md#mapserverlegendtorenderer)
- [mapServerLegendToRendererAll](geo_utils_symbology.SymbologyAPI.md#mapserverlegendtorendererall)
- [mapServerToLocalLegend](geo_utils_symbology.SymbologyAPI.md#mapservertolocallegend)
- [renderSymbologyIcon](geo_utils_symbology.SymbologyAPI.md#rendersymbologyicon)
- [renderSymbologyImage](geo_utils_symbology.SymbologyAPI.md#rendersymbologyimage)
- [rendererToLegend](geo_utils_symbology.SymbologyAPI.md#renderertolegend)
- [svgDrawImage](geo_utils_symbology.SymbologyAPI.md#svgdrawimage)
- [symbolToSvg](geo_utils_symbology.SymbologyAPI.md#symboltosvg)

## Constructors

### constructor

• **new SymbologyAPI**(`iApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Overrides

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/geo/utils/symbology.ts:30](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L30)

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

### CLASS\_BREAKS

• `Protected` **CLASS\_BREAKS**: `string` = `'class-breaks'`

#### Defined in

[src/geo/utils/symbology.ts:37](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L37)

___

### CONTAINER\_CENTER

• `Protected` **CONTAINER\_CENTER**: `number`

#### Defined in

[src/geo/utils/symbology.ts:43](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L43)

___

### CONTAINER\_SIZE

• `Protected` **CONTAINER\_SIZE**: `number` = `32`

#### Defined in

[src/geo/utils/symbology.ts:40](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L40)

___

### CONTENT\_IMAGE\_SIZE

• `Protected` **CONTENT\_IMAGE\_SIZE**: `number` = `28`

#### Defined in

[src/geo/utils/symbology.ts:42](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L42)

___

### CONTENT\_PADDING

• `Protected` **CONTENT\_PADDING**: `number`

#### Defined in

[src/geo/utils/symbology.ts:44](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L44)

___

### CONTENT\_SIZE

• `Protected` **CONTENT\_SIZE**: `number` = `24`

#### Defined in

[src/geo/utils/symbology.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L41)

___

### NONE

• `Protected` **NONE**: `string` = `'none'`

#### Defined in

[src/geo/utils/symbology.ts:38](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L38)

___

### SIMPLE

• `Protected` **SIMPLE**: `string` = `'simple'`

#### Defined in

[src/geo/utils/symbology.ts:35](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L35)

___

### UNIQUE\_VALUE

• `Protected` **UNIQUE\_VALUE**: `string` = `'unique-value'`

#### Defined in

[src/geo/utils/symbology.ts:36](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L36)

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

### fitInto

▸ **fitInto**(`element`, `CONTAINER_SIZE`): `void`

Fits svg element in the size specified

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `any` | svg element to fit |
| `CONTAINER_SIZE` | `number` | width/height of a container to fit the element into |

#### Returns

`void`

#### Defined in

[src/geo/utils/symbology.ts:779](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L779)

___

### generateBlankSymbology

▸ **generateBlankSymbology**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/geo/utils/symbology.ts:299](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L299)

___

### generatePlaceholderSymbology

▸ `Private` **generatePlaceholderSymbology**(`name`, `colour?`): `any`

Generates a placeholder symbology graphic.

**`Function`**

generatePlaceholderSymbology

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | label symbology label |
| `colour` | `string` | `'#000'` | colour to use in the graphic |

#### Returns

`any`

symbology svg code and its label

#### Defined in

[src/geo/utils/symbology.ts:275](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L275)

___

### generateWMSSymbology

▸ **generateWMSSymbology**(`imageUri`): `Promise`<`Object`\>

Generates svg symbology for WMS layers.

**`Function`**

generateWMSSymbology

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageUri` | `string` | url or dataUrl of the legend image |

#### Returns

`Promise`<`Object`\>

a promise resolving with symbology svg code and its label

#### Defined in

[src/geo/utils/symbology.ts:117](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L117)

___

### getGraphicIcon

▸ **getGraphicIcon**(`attributes`, `renderer`): `string`

Given feature attributes, return the image URL for that feature/graphic object.

**`Method`**

getGraphicIcon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | [`Attributes`](../interfaces/geo_api_geo_defs.Attributes.md) | object of feature attribute key value pairs |
| `renderer` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) | an enhanced renderer (see function enhanceRenderer) |

#### Returns

`string`

svgcode Url to the features symbology image

#### Defined in

[src/geo/utils/symbology.ts:54](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L54)

___

### getGraphicSymbol

▸ **getGraphicSymbol**(`attributes`, `renderer`): [`EsriSymbol`](geo_esri.EsriSymbol.md)

Given feature attributes, return the symbol for that feature/graphic object.

**`Method`**

getGraphicSymbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | `Object` | object of feature attribute key value pairs |
| `renderer` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) | an enhanced renderer (see function enhanceRenderer) |

#### Returns

[`EsriSymbol`](geo_esri.EsriSymbol.md)

an ESRI Symbol object in server format

#### Defined in

[src/geo/utils/symbology.ts:66](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L66)

___

### getMapServerLegend

▸ `Private` **getMapServerLegend**(`layerUrl`): `Promise`<`any`\>

Returns the legend information of an ESRI map service.

**`Function`**

getMapServerLegend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerUrl` | `string` | service url (root service, not indexed endpoint) |

#### Returns

`Promise`<`any`\>

resolves in an array of legend data in arcgis server json format

#### Defined in

[src/geo/utils/symbology.ts:874](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L874)

___

### listToIconSymbology

▸ **listToIconSymbology**(`list`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `any`[] |

#### Returns

`any`[]

#### Defined in

[src/geo/utils/symbology.ts:180](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L180)

___

### listToImageSymbology

▸ **listToImageSymbology**(`list`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `any`[] |

#### Returns

`any`[]

#### Defined in

[src/geo/utils/symbology.ts:184](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L184)

___

### listToSymbology

▸ `Private` **listToSymbology**(`conversionFunction`, `list`): `Object`[]

Converts a config-supplied list of symbology to the format used by layer records.

**`Function`**

_listToSymbology

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversionFunction` | `Function` | a conversion function to wrap the supplied image into an image or an icon style symbology container |
| `list` | `any`[] | a list of config-supplied symbology items in the form of [ { text: <String>, image: <String> }, ... ] wher `image` can be dataURL or an actual url |

#### Returns

`Object`[]

an array of converted symbology symbols in the form of [ { name: <String>, image: <String>, svgcode: <String> }, ... ]; items will be populated async as conversions are done

#### Defined in

[src/geo/utils/symbology.ts:157](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L157)

___

### makeRenderer

▸ **makeRenderer**(`esriRenderer`, `fields`, `falseRenderer?`): [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `esriRenderer` | [`EsriRenderer`](geo_esri.EsriRenderer.md) | `undefined` |
| `fields` | [`EsriField`](geo_esri.EsriField.md)[] | `undefined` |
| `falseRenderer` | `boolean` | `false` |

#### Returns

[`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

#### Defined in

[src/geo/utils/symbology.ts:73](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L73)

___

### mapServerLegendToRenderer

▸ `Private` **mapServerLegendToRenderer**(`serverLegend`, `layerIndex`): [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

Our symbology engine works off of renderers. When dealing with layers with no renderers,
we need to take server-side legend and convert it to a fake renderer, which lets us
leverage all the existing symbology code.

**`Function`**

mapServerLegendToRenderer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverLegend` | `any` | legend json from an esri map server |
| `layerIndex` | `number` | the index of the layer in the legend we are interested in |

#### Returns

[`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

a fake unique value renderer based off the legend

#### Defined in

[src/geo/utils/symbology.ts:916](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L916)

___

### mapServerLegendToRendererAll

▸ `Private` **mapServerLegendToRendererAll**(`serverLegend`): [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

Our symbology engine works off of renderers. When dealing with layers with no renderers,
we need to take server-side legend and convert it to a fake renderer, which lets us
leverage all the existing symbology code.

Same as mapServerLegendToRenderer function but combines all layer renderers.

**`Function`**

mapServerLegendToRendererAll

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverLegend` | `any` | legend json from an esri map server |

#### Returns

[`BaseRenderer`](geo_utils_renderer.BaseRenderer.md)

a fake unique value renderer based off the legend

#### Defined in

[src/geo/utils/symbology.ts:970](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L970)

___

### mapServerToLocalLegend

▸ **mapServerToLocalLegend**(`mapServerUrl`, `layerIndex?`): `Promise`<[`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]\>

Orchestrator function that will:
- Fetch a legend from an esri map server
- Extract legend for a specific sub layer
- Convert server legend to a temporary renderer
- Convert temporary renderer to a viewer-formatted legend (return value)

**`Function`**

mapServerToLocalLegend

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mapServerUrl` | `string` | `undefined` | service url (root service, not indexed endpoint) |
| `layerIndex?` | `string` \| `number` | `undefined` | the index of the layer in the legend we are interested in. If not provided, all layers will be collapsed into a single legend |

#### Returns

`Promise`<[`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]\>

resolves in a viewer-compatible legend for the given server and layer index

#### Defined in

[src/geo/utils/symbology.ts:1012](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L1012)

___

### renderSymbologyIcon

▸ **renderSymbologyIcon**(`imageUri`, `draw?`): `Promise`<`string`\>

Renders a supplied image as an icon-style symbology item (fitting an image inside an icon container, usually 32x32 pixels).

**`Function`**

renderSymbologyIcon

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageUri` | `string` | `undefined` | a image dataUrl or a regular url |
| `draw` | `any` | `null` | [optional=null] an svg container to draw the image on; if not supplied, a new one is created |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/geo/utils/symbology.ts:234](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L234)

___

### renderSymbologyImage

▸ **renderSymbologyImage**(`imageUri`, `draw?`): `Promise`<`string`\>

Renders a supplied image as an image-style symbology item (preserving the true image dimensions).

**`Function`**

renderSymbologyImage

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageUri` | `string` | `undefined` | a image dataUrl or a regular url |
| `draw` | `any` | `null` | [optional=null] an svg container to draw the image on; if not supplied, a new one is created |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/geo/utils/symbology.ts:195](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L195)

___

### rendererToLegend

▸ **rendererToLegend**(`renderer`): [`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]

Generate a legend object based on an ESRI renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`BaseRenderer`](geo_utils_renderer.BaseRenderer.md) | an ESRI renderer object in server JSON form |

#### Returns

[`LegendSymbology`](../interfaces/geo_api_geo_defs.LegendSymbology.md)[]

list of legend symbologies

#### Defined in

[src/geo/utils/symbology.ts:797](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L797)

___

### svgDrawImage

▸ `Private` **svgDrawImage**(`draw`, `imageUri`, `width?`, `height?`, `crossOrigin?`): `Promise`<`any`\>

Renders a specified image on an svg element. This is a helper function that wraps around async `draw.image` call in the svg library.

**`Function`**

svgDrawImage

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `draw` | `any` | `undefined` | svg element to render the image onto |
| `imageUri` | `string` | `undefined` | image url or dataURL of the image to render |
| `width` | `number` | `0` | [optional = 0] width of the image |
| `height` | `number` | `0` | [optional = 0] height of the image |
| `crossOrigin` | `boolean` | `true` | [optional = true] specifies if the image should be loaded as crossOrigin |

#### Returns

`Promise`<`any`\>

promise resolving with the loaded image and its loader object (see svg.js http://documentup.com/wout/svg.js#image for details)

#### Defined in

[src/geo/utils/symbology.ts:756](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L756)

___

### symbolToSvg

▸ `Private` **symbolToSvg**(`symbol`): `Promise`<`string`\>

Generate an SVG string for an ESRI symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `any` | an ESRI symbol object in server format |

#### Returns

`Promise`<`string`\>

resolves to an SVG string representing the symbol

#### Defined in

[src/geo/utils/symbology.ts:311](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/geo/utils/symbology.ts#L311)
