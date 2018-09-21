/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface AppAaaaa {}
  interface AppAaaaaAttributes extends StencilHTMLAttributes {}

  interface AppBitalarm {}
  interface AppBitalarmAttributes extends StencilHTMLAttributes {}

  interface AppHero {}
  interface AppHeroAttributes extends StencilHTMLAttributes {}

  interface AppIntro {}
  interface AppIntroAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppWdp {}
  interface AppWdpAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppAaaaa': Components.AppAaaaa;
    'AppBitalarm': Components.AppBitalarm;
    'AppHero': Components.AppHero;
    'AppIntro': Components.AppIntro;
    'AppRoot': Components.AppRoot;
    'AppWdp': Components.AppWdp;
  }

  interface StencilIntrinsicElements {
    'app-aaaaa': Components.AppAaaaaAttributes;
    'app-bitalarm': Components.AppBitalarmAttributes;
    'app-hero': Components.AppHeroAttributes;
    'app-intro': Components.AppIntroAttributes;
    'app-root': Components.AppRootAttributes;
    'app-wdp': Components.AppWdpAttributes;
  }


  interface HTMLAppAaaaaElement extends Components.AppAaaaa, HTMLStencilElement {}
  var HTMLAppAaaaaElement: {
    prototype: HTMLAppAaaaaElement;
    new (): HTMLAppAaaaaElement;
  };

  interface HTMLAppBitalarmElement extends Components.AppBitalarm, HTMLStencilElement {}
  var HTMLAppBitalarmElement: {
    prototype: HTMLAppBitalarmElement;
    new (): HTMLAppBitalarmElement;
  };

  interface HTMLAppHeroElement extends Components.AppHero, HTMLStencilElement {}
  var HTMLAppHeroElement: {
    prototype: HTMLAppHeroElement;
    new (): HTMLAppHeroElement;
  };

  interface HTMLAppIntroElement extends Components.AppIntro, HTMLStencilElement {}
  var HTMLAppIntroElement: {
    prototype: HTMLAppIntroElement;
    new (): HTMLAppIntroElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppWdpElement extends Components.AppWdp, HTMLStencilElement {}
  var HTMLAppWdpElement: {
    prototype: HTMLAppWdpElement;
    new (): HTMLAppWdpElement;
  };

  interface HTMLElementTagNameMap {
    'app-aaaaa': HTMLAppAaaaaElement
    'app-bitalarm': HTMLAppBitalarmElement
    'app-hero': HTMLAppHeroElement
    'app-intro': HTMLAppIntroElement
    'app-root': HTMLAppRootElement
    'app-wdp': HTMLAppWdpElement
  }

  interface ElementTagNameMap {
    'app-aaaaa': HTMLAppAaaaaElement;
    'app-bitalarm': HTMLAppBitalarmElement;
    'app-hero': HTMLAppHeroElement;
    'app-intro': HTMLAppIntroElement;
    'app-root': HTMLAppRootElement;
    'app-wdp': HTMLAppWdpElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
