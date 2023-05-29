[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [geo/esri](../modules/geo_esri.md) / EsriConfig

# Interface: EsriConfig

[geo/esri](../modules/geo_esri.md).EsriConfig

Configure global properties of the library.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html)

## Table of contents

### Properties

- [apiKey](geo_esri.EsriConfig.md#apikey)
- [assetsPath](geo_esri.EsriConfig.md#assetspath)
- [fontsUrl](geo_esri.EsriConfig.md#fontsurl)
- [geoRSSServiceUrl](geo_esri.EsriConfig.md#georssserviceurl)
- [geometryServiceUrl](geo_esri.EsriConfig.md#geometryserviceurl)
- [kmlServiceUrl](geo_esri.EsriConfig.md#kmlserviceurl)
- [log](geo_esri.EsriConfig.md#log)
- [portalUrl](geo_esri.EsriConfig.md#portalurl)
- [request](geo_esri.EsriConfig.md#request)
- [routeServiceUrl](geo_esri.EsriConfig.md#routeserviceurl)
- [workers](geo_esri.EsriConfig.md#workers)

## Properties

### apiKey

• **apiKey**: `string`

An authorization string used to access a resource or service.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1621

___

### assetsPath

• **assetsPath**: `string`

Overrides the URL for loading the API assets when using local builds of the `@arcgis/core` and `arcgis-js-api` NPM packages.

**`Default`**

```ts
"https://js.arcgis.com/[4.x]/@arcgis/core/assets"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1629

___

### fontsUrl

• **fontsUrl**: `string`

The URL for font resources used by the [Font](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Font.html#family) class in [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) and [CSVLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html) labels.

**`Default`**

```ts
"https://static.arcgis.com/fonts"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#fontsUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1637

___

### geoRSSServiceUrl

• **geoRSSServiceUrl**: `string`

The URL for the utility service used by [GeoRSSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoRSSLayer.html) to convert GeoRSS documents.

**`Default`**

```ts
"https://utility.arcgis.com/sharing/rss"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#geoRSSServiceUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1653

___

### geometryServiceUrl

• **geometryServiceUrl**: `string`

The default [geometryService](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-geometryService.html) used by widgets and other operations, such as on-the-fly projections.

**`Default`**

```ts
"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#geometryServiceUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1645

___

### kmlServiceUrl

• **kmlServiceUrl**: `string`

The URL for the utility service used by [KMLLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-KMLLayer.html) to convert KML documents.

**`Default`**

```ts
"https://utility.arcgis.com/sharing/kml"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#kmlServiceUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1661

___

### log

• **log**: `configLog`

An object with properties that control various aspects of log messages.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#log)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1667

___

### portalUrl

• **portalUrl**: `string`

The default URL of new portal instances.

**`Default`**

```ts
"https://www.arcgis.com"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#portalUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1675

___

### request

• **request**: `configRequest`

An object with properties that control various aspects of communication between the library and web servers.

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1681

___

### routeServiceUrl

• **routeServiceUrl**: `string`

The default routing service used by the [RouteLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-RouteLayer.html) and the [Directions](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Directions.html) widget.

**`Default`**

```ts
"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#routeServiceUrl)
```

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1689

___

### workers

• **workers**: `configWorkers`

An object with properties that control various aspects of [the workers framework](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-workers.html).

[Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#workers)

#### Defined in

node_modules/@arcgis/core/interfaces.d.ts:1695
