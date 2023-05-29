[ramp - v4.2.0-beta](../README.md) / [Modules](../modules.md) / [api/panel](../modules/api_panel.md) / PanelAPI

# Class: PanelAPI

[api/panel](../modules/api_panel.md).PanelAPI

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`Export`**

## Hierarchy

- [`APIScope`](api_common.APIScope.md)

  ↳ **`PanelAPI`**

## Table of contents

### Constructors

- [constructor](api_panel.PanelAPI.md#constructor)

### Properties

- [$iApi](api_panel.PanelAPI.md#$iapi)
- [panelStore](api_panel.PanelAPI.md#panelstore)

### Accessors

- [$element](api_panel.PanelAPI.md#$element)
- [$vApp](api_panel.PanelAPI.md#$vapp)
- [opened](api_panel.PanelAPI.md#opened)
- [pinned](api_panel.PanelAPI.md#pinned)
- [visible](api_panel.PanelAPI.md#visible)

### Methods

- [close](api_panel.PanelAPI.md#close)
- [expand](api_panel.PanelAPI.md#expand)
- [get](api_panel.PanelAPI.md#get)
- [isRegistered](api_panel.PanelAPI.md#isregistered)
- [minimize](api_panel.PanelAPI.md#minimize)
- [move](api_panel.PanelAPI.md#move)
- [open](api_panel.PanelAPI.md#open)
- [pin](api_panel.PanelAPI.md#pin)
- [register](api_panel.PanelAPI.md#register)
- [remove](api_panel.PanelAPI.md#remove)
- [setStyle](api_panel.PanelAPI.md#setstyle)
- [show](api_panel.PanelAPI.md#show)
- [toggle](api_panel.PanelAPI.md#toggle)
- [toggleMinimize](api_panel.PanelAPI.md#toggleminimize)

## Constructors

### constructor

• **new PanelAPI**(`iApi`)

Creates an instance of APIScope.

**`Memberof`**

APIScope

#### Parameters

| Name | Type |
| :------ | :------ |
| `iApi` | [`InstanceAPI`](api_instance.InstanceAPI.md) |

#### Inherited from

[APIScope](api_common.APIScope.md).[constructor](api_common.APIScope.md#constructor)

#### Defined in

[src/api/common.ts:41](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/common.ts#L41)

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

### panelStore

• **panelStore**: `Store`<``"panel"``, `_UnwrapAll`<`Pick`<{ `addRegPromise`: (`panelId`: `string`) => `void` ; `closePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `getRegPromises`: (`panelIds`: `string`[]) => `Promise`<`void`\>[] ; `getRemainingWidth`: `ComputedRef`<`number`\> ; `getVisible`: (`screenSize`: `string`) => { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[] ; `items`: `Ref`<{ `[name: string]`: [`PanelInstance`](api_panel_instance.PanelInstance.md);  }\> ; `mobileView`: `Ref`<`boolean`\> ; `movePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md), `direction`: `string`) => `void` ; `openPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `orderedItems`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\> ; `pinned`: `Ref`<``null`` \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }\> ; `priority`: `Ref`<``null``\> ; `regPromises`: `Ref`<{ `[name: string]`: [`DefPromise`](geo_api_utils_promise.DefPromise.md);  }\> ; `registerPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `remWidth`: `Ref`<`number`\> ; `removePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `reorderable`: `Ref`<`boolean`\> ; `setMobileView`: (`value`: `boolean`) => `void` ; `setStackWidth`: (`value`: `number`) => `void` ; `stackWidth`: `Ref`<`number`\> ; `updateVisible`: () => `void` ; `visible`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\>  }, ``"items"`` \| ``"regPromises"`` \| ``"orderedItems"`` \| ``"pinned"`` \| ``"priority"`` \| ``"visible"`` \| ``"stackWidth"`` \| ``"remWidth"`` \| ``"mobileView"`` \| ``"reorderable"``\>\>, `Pick`<{ `addRegPromise`: (`panelId`: `string`) => `void` ; `closePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `getRegPromises`: (`panelIds`: `string`[]) => `Promise`<`void`\>[] ; `getRemainingWidth`: `ComputedRef`<`number`\> ; `getVisible`: (`screenSize`: `string`) => { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[] ; `items`: `Ref`<{ `[name: string]`: [`PanelInstance`](api_panel_instance.PanelInstance.md);  }\> ; `mobileView`: `Ref`<`boolean`\> ; `movePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md), `direction`: `string`) => `void` ; `openPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `orderedItems`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\> ; `pinned`: `Ref`<``null`` \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }\> ; `priority`: `Ref`<``null``\> ; `regPromises`: `Ref`<{ `[name: string]`: [`DefPromise`](geo_api_utils_promise.DefPromise.md);  }\> ; `registerPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `remWidth`: `Ref`<`number`\> ; `removePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `reorderable`: `Ref`<`boolean`\> ; `setMobileView`: (`value`: `boolean`) => `void` ; `setStackWidth`: (`value`: `number`) => `void` ; `stackWidth`: `Ref`<`number`\> ; `updateVisible`: () => `void` ; `visible`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\>  }, ``"getRemainingWidth"``\>, `Pick`<{ `addRegPromise`: (`panelId`: `string`) => `void` ; `closePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `getRegPromises`: (`panelIds`: `string`[]) => `Promise`<`void`\>[] ; `getRemainingWidth`: `ComputedRef`<`number`\> ; `getVisible`: (`screenSize`: `string`) => { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[] ; `items`: `Ref`<{ `[name: string]`: [`PanelInstance`](api_panel_instance.PanelInstance.md);  }\> ; `mobileView`: `Ref`<`boolean`\> ; `movePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md), `direction`: `string`) => `void` ; `openPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `orderedItems`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\> ; `pinned`: `Ref`<``null`` \| { `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }\> ; `priority`: `Ref`<``null``\> ; `regPromises`: `Ref`<{ `[name: string]`: [`DefPromise`](geo_api_utils_promise.DefPromise.md);  }\> ; `registerPanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `remWidth`: `Ref`<`number`\> ; `removePanel`: (`panel`: [`PanelInstance`](api_panel_instance.PanelInstance.md)) => `void` ; `reorderable`: `Ref`<`boolean`\> ; `setMobileView`: (`value`: `boolean`) => `void` ; `setStackWidth`: (`value`: `number`) => `void` ; `stackWidth`: `Ref`<`number`\> ; `updateVisible`: () => `void` ; `visible`: `Ref`<{ `$element`: { version: string; config: { readonly isNativeTag?: ((tag: string) =\> boolean) \| undefined; performance: boolean; optionMergeStrategies: Record<string, OptionMergeFunction\>; ... 5 more ...; unwrapInjectedRef?: boolean \| undefined; }; ... 13 more ...; filter?: { ...; } \| undefined; } ; `$iApi`: { readonly fixture: { add: (id: string, constructor?: IFixtureBase \| undefined) =\> Promise<FixtureBase\>; remove: <T extends FixtureBase = FixtureBase\>(fixtureOrId: string \| FixtureBase) =\> T; ... 5 more ...; readonly $element: { ...; }; }; ... 21 more ...; start: () =\> void; } ; `$vApp`: `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`\>, {}\> ; `alertName`: `string` ; `button`: `any` ; `controls`: `any` ; `expanded`: `boolean` ; `id`: `string` ; `isLeftMostPanel`: `boolean` ; `isOpen`: `boolean` ; `isPinned`: `boolean` ; `isRightMostPanel`: `boolean` ; `isVisible`: `boolean` ; `route`: { screen: string; props?: object \| undefined; } ; `screens`: `PanelConfigScreens` ; `style`: `PanelConfigStyle` ; `width`: `undefined` \| `number` ; `close`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `expand`: (`expand?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `isScreenLoaded`: (`id`: `string`) => `boolean` ; `minimize`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `move`: (`direction`: `string`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `open`: (`value?`: `string` \| { `props?`: `object` ; `screen`: `string`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `pin`: (`value?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `registerScreen`: (`id`: `string`) => `void` ; `remove`: () => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `setStyles`: (`style`: `object`, `replace?`: `boolean`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `show`: (`value`: `string` \| `PanelConfigRoute`) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggle`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md) ; `toggleMinimize`: (`value?`: `boolean` \| { `props?`: `object` ; `screen`: `string` ; `toggle?`: `boolean`  }) => [`PanelInstance`](api_panel_instance.PanelInstance.md)  }[]\>  }, ``"getVisible"`` \| ``"getRegPromises"`` \| ``"openPanel"`` \| ``"closePanel"`` \| ``"movePanel"`` \| ``"removePanel"`` \| ``"setStackWidth"`` \| ``"setMobileView"`` \| ``"updateVisible"`` \| ``"registerPanel"`` \| ``"addRegPromise"``\>\>

#### Defined in

[src/api/panel.ts:8](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L8)

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

### opened

• `get` **opened**(): [`PanelInstance`](api_panel_instance.PanelInstance.md)[]

Returns an array of open `PanelInstance` objects.

**`Memberof`**

PanelAPI

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)[]

#### Defined in

[src/api/panel.ts:201](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L201)

___

### pinned

• `get` **pinned**(): ``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

Returns the currently pinned panel instance, if exists.

**`Memberof`**

PanelAPI

#### Returns

``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:383](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L383)

___

### visible

• `get` **visible**(): [`PanelInstance`](api_panel_instance.PanelInstance.md)[]

Returns an array of visible `PanelInstance` object.
This is not every *open* panel, only the ones currently visible to the user.

**`Memberof`**

PanelAPI

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)[]

#### Defined in

[src/api/panel.ts:214](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L214)

## Methods

### close

▸ **close**(`value`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Closes the panel specified.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:226](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L226)

___

### expand

▸ **expand**(`value`, `expand?`): ``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

Expands/collapses the expand state of the panel. Toggles whether the panel expands if no expand value is given.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |  |
| `expand?` | `boolean` | Optional. Whether the panel should expand, toggles the value if not set |

#### Returns

``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:467](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L467)

___

### get

▸ **get**(`value`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Finds and returns a panel with the id specified.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:129](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L129)

___

### isRegistered

▸ **isRegistered**(`panelId`): `Promise`<`any`\>

Provides a promise that resolves when the panel(s) have finished registration.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panelId` | `string` \| `string`[] | the panel ID(s) for which the promise is requested |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/api/panel.ts:90](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L90)

___

### minimize

▸ **minimize**(`value`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Minimizes the panel specified, mechanically the same as closing however it does not emit the close event so that temporary appbar buttons stay.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:254](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L254)

___

### move

▸ **move**(`value`, `direction`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Moves the specifed visible panel to the left or right.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |
| `direction` | `string` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:282](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L282)

___

### open

▸ **open**(`value`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Opens a registered panel in the panel stack.

 - `rInstance.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
 - `rInstance.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
 - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
 - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) \| [`PanelInstancePath`](../modules/api_panel.md#panelinstancepath) | a panel id, a `PanelInstance` object or an object of the form `{ id: <panel-id>, screen: <id>, props: <object> }`. |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:146](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L146)

___

### pin

▸ **pin**(`value`, `pin?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |
| `pin?` | `boolean` |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:356](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L356)

___

### register

▸ **register**(`value`, `options?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Registers a provided panel object and returns the resulting `PanelInstance` objects.
When the panel is registered, all its screens are added to the Vue as components right away.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`PanelConfigPair`](../modules/api_panel.md#panelconfigpair) | a PanelConfig/id pair in the form of `{ id: string, config: PanelConfig }` |
| `options?` | [`PanelRegistrationOptions`](../modules/api_panel.md#panelregistrationoptions) |  |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:19](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L19)

▸ **register**(`value`, `options?`): [`PanelInstanceSet`](../modules/api_panel.md#panelinstanceset)

Registers a set of provided panel objects and returns the resulting `PanelInstance` object set.
When the panel is registered, all its screens are added to the Vue as components right away.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`PanelConfigSet`](../modules/api_panel.md#panelconfigset) | a set of PanelConfig objects in the form of `{ [name: string]: PanelConfig }` where keys assumed to be ids |
| `options?` | [`PanelRegistrationOptions`](../modules/api_panel.md#panelregistrationoptions) | a set of options that will apply to all the panel in the set |

#### Returns

[`PanelInstanceSet`](../modules/api_panel.md#panelinstanceset)

#### Defined in

[src/api/panel.ts:32](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L32)

___

### remove

▸ **remove**(`value`): `void`

Removes a panel instance

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |

#### Returns

`void`

#### Defined in

[src/api/panel.ts:110](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L110)

___

### setStyle

▸ **setStyle**(`value`, `style`, `replace?`): ``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

Sets the styles of the specified panel by using a provided CSS styles object.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) | `undefined` |  |
| `style` | `object` | `undefined` |  |
| `replace?` | `boolean` | `false` | merge with existing styles if `false`; replace if `true` |

#### Returns

``null`` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:445](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L445)

___

### show

▸ **show**(`value`, `route`): `undefined` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

Sets route to the specified screen id and pass props to the panel screen components.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) |
| `route` | `PanelConfigRoute` |

#### Returns

`undefined` \| [`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:397](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L397)

___

### toggle

▸ **toggle**(`value?`, `toggle?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Toggle panel.

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) \| [`PanelInstancePath`](../modules/api_panel.md#panelinstancepath) |  |
| `toggle?` | `boolean` | Optional param. True forces a panel open, false forces the panel to close. |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:296](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L296)

___

### toggleMinimize

▸ **toggleMinimize**(`value?`, `toggle?`): [`PanelInstance`](api_panel_instance.PanelInstance.md)

Toggle panel's minimized state

**`Memberof`**

PanelAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` \| [`PanelInstance`](api_panel_instance.PanelInstance.md) \| [`PanelInstancePath`](../modules/api_panel.md#panelinstancepath) |  |
| `toggle?` | `boolean` | Optional param. True forces a panel open, false forces the panel to minimize. |

#### Returns

[`PanelInstance`](api_panel_instance.PanelInstance.md)

#### Defined in

[src/api/panel.ts:326](https://github.com/sharvenp/ramp4-docs/blob/c6cdb39/src/api/panel.ts#L326)
