import{_ as e,o as a,c as t,V as s}from"./chunks/framework.9fee5447.js";const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAAsCAYAAACqq/snAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPASURBVHhe7dzNahtXGIBh35Evw7fgCzB43TsoXmWZRSgYsujCbRZtCk0XNoaQQgRtXYPJoq3BWbS01JDY1OTHpe1imk/MaUejkbGsM9KR8zzwIc/oCC20eH1GPysVAFAsoQaAggk1ABRMqAGgYEINAAUTagAomFADQMGEGgAKJtQAUDChBoCCCTUAFEyoAaBgQg0ABcsa6otXb6q9JwfVnXsPqg8+/MgYY4wZNiHaEI3I7cvH31cff/H1lfPo8WG9ejllC3W8AHfvP6x2370Ypy/O67MAvO+iCdGGaETuWHeFuWuWWbZQx39L8UIAQJc+OnGdHXWs6cv5xevqx+e/1Ufjfjj5dbhmFtlCHZc27KQBmCQaEa3oQ1egY/oUAf70q8HweQaHx/XZ/z09/Gl4X6x5/fbP+uz0soU63ocAgKv00Yq//v5nJM7N6dPJz6cjz9WMdYp0mlh7U0INwNz00YrTl3+MRLE5cV+f2kGOWLfPxfEshBqAuemjFb/8/nIkjM2J+/rWDnNzZo10WHioB4NBtba2Vp2dndVnJou1q6ur1fHx+HsBAJQvd6i/e3bSGcjmHDx7Xq/uT1esc0Q6LDTUEd6VlZVrhTqtFWqA5ZUz1PGJ6nYcJ02s7VNXqLs+YHYTdtQAzE3OUH+2+81YHCfN53vf1o/K76pL3zliLdQAzE3OUF/nO9Rp+voudTvScdw+N2usiwt13MZxXOZuXxZvhvry8rLa3Nwcuxwea7oeC8Di5Qx1lxTHeWh/PSsCnbRjvdRfz2qHemtrazghRXtnZ2d43Ax1zPr6+kiI4/702BCPi5hH1AFYvNsU6vjBk08ePR0+XzPSSYp1rFnqHzxphzqJEEeUY2fcDvX29vZYgJs77OY0d9sALNZtCnWIWF+1Wy7qJ0RzhTrtoiO68XfcNkM9KcAp1LEGgDL1Her4gFnMbVJUqFNsU5jbx2lHHYGOS9zNwLfXAlCevkMdu9tZ3g8uURGhTvFNsU3vM6fL312hbq8NcX/stuM22d/f/y/mACxW36G+jRYa6hTW5qXsiHI6Fx8Wi4m/NzY2RtYeHR0NQ53OpZg3H988D8DiCfX0Fr6jBuD9oRXTE2oA5kYrpifUAMyNVkxPqAGYG62YXrZQ37n3oDp9cV4fAcCoaES0gulkC/Xek4Nq990AQBeduJlsob549aa6e//h8IWwswYgiSZEG6IR0Qqmky3UIV6A+G8pLm3E+xDGGGNMNCHaINI3kzXUAEBeQg0ABRNqACiYUANAwYQaAIpVVf8CLZdM4KltOgAAAAAASUVORK5CYII=",r="data:image/png;base64,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",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAAmCAYAAAALMNhBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASqSURBVHhe7d2xTiNHHMdxvxFvAa/AG1CnoEgX0SQV1SkSKFGuQEpKV4lEzROkCXDSXUECEiFCAoQlg5ncb+Uf+jOsvcYnzn/k70ca2bszO7ODV/w8a2R6BQAApEVQAwCQGEENAEBiBDUAAIkR1AAAJEZQAwCQWBPUDw8PFEpTAAC59EajUbm/vy93d3dPynA4pCxJ8Wuu60DXA4ENAHlw6xvPKLAJawDIgaDGM4PBoFlZAwAWb6ag/vOvj+Xd+3759oefyjff/dhZ1PbDp3/GR+Otubm5YVUNAEl0BrVCui2MZykvDevb29uysbFRer3eY9nb2xvXPq8/ODgoW1tbTeniY93fxcVFWVtbe9J/TXU6Rscuk+vr6+Yza4IaABavM6jf/dJvQvfnX38vf5/9O9472X+XV01bHaNj56GArEPaFJqbm5vl8PBwvOflHNKTxhCfA0ENAFikzqD26lgBPCsFuo7RrfJ5TFvtqm53d3e8NT9W1JMR1ACQx8xB/VLzHmcKSQWpAjXS7W6VL0VQT0ZQA0AeaYNat7ZXVlaehXK/338MTj3Gz51Fz3XLWp9bq61vkTuY3Z+3d3Z2mj50jMaLt9Tbgtr9z3JbPLZViXNRncY/OjpqHlU/7bP2Se39M9B2fT6q99gqHj/+3Nwmzp2gBoA80ga1KERi+Chc9/f3m+cxoBQ4oqDR59eqUyg5fBzKMay8z23cn/apTtRvHF/bHkt0fipt2o71+H6u4vHi+dYmtdd2PUfPT49xLv5ZnpycNPvdn9rVcyeoASCP1EHtMHL4xBWyOGAcnqpTcLl9VAeZt32s1MerzmHr9g44F4dbVI8lPlcHu/qOx2rs1dXVJ/OLutp7zDgf8bg613ouk+ZOUANAHqmDOoabnus2tR7N9TFw1NYhGle7dXi2hVXdRnUx3NbX1ycGaRRDL/KqVv2pb42lfqUO3lpX+7b5aDyvuOu5TJs7QQ0AeaQOalGYKGy0mlaJ2oLatC+GdQyiuB2PrcNPdXW41eHbxm3jGwXRtvepb7VRW6nHrnW1r+cTz73erttK7I+gBoA80ge1Q8Urw8hB7fBT/fb2dvNcFER1UDucvO36ui9RW7VRW2/X5xH/uC1SW71RcLDHIJS677q+1tW+nl9s77nVQe1t0bw9d4IaAPJIH9QSQ8QcPvE2t0Ir7nNQOZi832E2ab/oufe7H9E43q8ybYUd+4gBX/etPlTvfXWfXe31ZqGeh8ZyGz3qj+z0XO2Oj4+bR+1zmxjaBDUA5DFzUM/1hSffz/eFJ3hdfoOiQG9DUANAHp1B/fgVor/9MftXiH5uq2Pm/QpRvC6CGgDejs6g/pr/lAOvb9rtfiOoASCPzqCW5t9cfl4d61Z2WyDXRW0J6beLf3MJAHn0Li8vy/n5eTk7Oyunp6eUJS16/XUd6HoYDAZlNBqNLxEAwCL19EtZKyjd7ozl6uqKsiTFr7muA10PrKYBII+eVk76xazPJGMZDoeUJSl+zXUd6HogpAEgj+Yzav1iplBUAAC5zPTHZAAAYDEIagAAEiOoAQBIjKAGACAxghoAgMQIagAAEiOoAQBIjKAGACCtUv4HSt8k0lo9BIsAAAAASUVORK5CYII=",i="/ramp4-docs/assets/geosearch-results.d94495f4.png",v=JSON.parse('{"title":"Geosearch","description":"","frontmatter":{},"headers":[],"relativePath":"app/geosearch.md","filePath":"app/geosearch.md"}'),l={name:"app/geosearch.md"},A=s('<h1 id="geosearch" tabindex="-1">Geosearch <a class="header-anchor" href="#geosearch" aria-label="Permalink to &quot;Geosearch&quot;">​</a></h1><p>The Geosearch component is contained inside a panel in the application. Geosearch makes use of the <a href="https://geogratis.gc.ca/" target="_blank" rel="noreferrer">Geogratis services</a>, in particular the <a href="https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/web-services/geolocation-service/17304" target="_blank" rel="noreferrer">Geolocation service</a> and the <a href="https://www.nrcan.gc.ca/maps-tools-and-publications/maps/geographical-names-canada/application-programming-interface-api/9249" target="_blank" rel="noreferrer">Geoname service</a>.</p><h2 id="component-breakdown" tabindex="-1">Component Breakdown <a class="header-anchor" href="#component-breakdown" aria-label="Permalink to &quot;Component Breakdown&quot;">​</a></h2><p>The Geosearch component can be broken down into multiple parts: search bar, Geosearch filters, and a list of returned Geosearch results.</p><h3 id="geosearch-bar" tabindex="-1">Geosearch Bar: <a class="header-anchor" href="#geosearch-bar" aria-label="Permalink to &quot;Geosearch Bar:&quot;">​</a></h3><p>In the header of the Geosearch panel, there is a search bar which allows users to search for various locations in Canada using any of the supported search types mentioned below. To the right of the search bar is the usual pin and close panel buttons.</p><p><img src="'+o+'" alt=""></p><h4 id="supported-search-types" tabindex="-1">Supported Search Types <a class="header-anchor" href="#supported-search-types" aria-label="Permalink to &quot;Supported Search Types&quot;">​</a></h4><p><strong>Keyword search</strong>: Type any keyword into Geosearch to display a list of results that contains the keyword.</p><ul><li>each search result consists of: location name (with search keyword highlighted), location province, and location type (lake, city, town, etc.)</li><li>street addresses are prioritized in the list of results</li><li>click on any individual result to mark its coordinates and zoom the map to center around this location</li></ul><p><strong>FSA search</strong>: A <strong>forward sortation area (FSA)</strong> is a way to designate a geographical area based on the first three characters in a Canadian postal code. All postal codes that start with the same three characters are considered an <strong>FSA</strong>.</p><ul><li>a search using FSA will display a list of results in the vicinity of that area</li><li>the very first result is a location of the FSA itself, click to zoom and center the map on the FSA</li><li>example: type in <strong>M3H</strong></li></ul><p><strong>Latitude/Longitude search</strong>: Search using lat/long coordinates to display a list of results in the vicinity of that map point.</p><ul><li>similarly to FSA search, the first result will be a location of those coordinates entered, click this to zoom and center the map on the map point</li><li>lat/long search recognizes spaces, commas, semicolons, or vertical bars (|) to separate the co-ordinates</li><li>example: type in <strong>54.3733, -91.7417</strong></li></ul><p><strong>NTS search</strong>: <strong>National Topographic System (NTS)</strong> is a system used for providing general topographic maps of the country, producing details on landforms, lakes/rivers, forests, roads and railways, etc.</p><ul><li>the NTS is split into three major zones: &quot;Southern zone&quot; - latitudes between 40°N and 68°N, &quot;Arctic zone&quot; - latitudes between 68°N and 80°N, and the &quot;High Arctic zone&quot; - latitudes between 80°N and 88°N</li><li>an NTS map number consists of a string containing a number identifying a map sheet, a letter identifying a map area, and a number identifying the scale map sheet</li><li>likewise, the first result will be a location of the NTS map number, click to center map on this area</li><li>example: type in <strong>030M13</strong></li></ul><h3 id="geosearch-filters" tabindex="-1">Geosearch Filters: <a class="header-anchor" href="#geosearch-filters" aria-label="Permalink to &quot;Geosearch Filters:&quot;">​</a></h3><p>The row of options immediately below the search bar contains two dropdown boxes that allow you to filter the search results by their <strong>province</strong> (Alberta, British Columbia, Ontario, etc.) and/or <strong>type</strong> (lake, town, river, etc.). To the right of these two filters is a <strong>Clear Filters</strong> button, which clears all existing selected filter options.</p><p><img src="'+r+'" alt=""></p><p>Near the bottom of the Geosearch panel, there is a checkbox labeled <strong>visible on map</strong>. Checking this box will filter the results to only show locations that are visible in the current map extent. Moving the map around or zooming in/out with this box selected will be reflected by updating the results to display locations within the new map extent.</p><p><img src="'+n+'" alt=""></p><h3 id="geosearch-results" tabindex="-1">Geosearch Results: <a class="header-anchor" href="#geosearch-results" aria-label="Permalink to &quot;Geosearch Results:&quot;">​</a></h3><p>When searching for a location, a list of matched results with all appropriate filters applied (map extent, province, type) will be displayed. This takes up the main body of the Geosearch panel. There is an upper limit of 100 results possible to be displayed. If no matching results are found, then a message will appear in place of the results to inform the users.</p><p><img src="'+i+`" alt=""></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The Geosearch panel has multiple options that can be adjusted through the configuration file. Though the Geosearch fixture is designed with the GeoGratis API in mind, a <code>serviceUrls</code> object with the following properties can define alternate URLs for the lookup service:</p><ul><li><code>geoLocateUrl: string</code>, endpoint for the Geolocation service</li><li><code>geoNameUrl: string</code>, endpoint for the Geoname service</li><li><code>geoProvinceUrl: string</code>, endpoint for province codes provided by the Geoname service</li><li><code>geoTypesUrl: string</code>, endpoint for type codes provided by the Geoname service</li></ul><p>Also, a <code>settings</code> object enables additional fixture customization:</p><ul><li><code>categories: string[]</code>, filter by <a href="https://geogratis.gc.ca/services/geoname/en/codes/concise.json" target="_blank" rel="noreferrer">concise type</a> or street address (&#39;ADDR&#39;) when using the Geoname service</li><li><code>sortOrder: string[]</code>, order search results based on category types, where missing types are appended to the bottom of the sorted list</li><li><code>disabledSearchTypes: string[]</code>, omit results for given <a href="#Supported-Search-Types">search types</a> (<code>LAT/LNG</code>, <code>FSA</code>, and <code>NTS</code>)</li><li><code>maxResults: number</code>, specifies the maximum number of results from a query</li><li><code>officialOnly: boolean</code>, results only use official names for geographic names</li></ul><p>An example of a configured Geosearch panel is below</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">geosearch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    settings: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        categories: [&#39;CITY&#39;, &#39;TOWN&#39;, &#39;VILG&#39;, &#39;ADDR&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        sortOrder: [&#39;TOWN&#39;, &#39;CITY&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        disabledSearchTypes: [&#39;FSA&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxResults: 20</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,31),c=[A];function p(h,d,g,u,f,b){return a(),t("div",null,c)}const Q=e(l,[["render",p]]);export{v as __pageData,Q as default};