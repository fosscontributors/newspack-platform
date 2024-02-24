(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}e.r(t);const f=window.wp.element,d=window.wp.plugins,y=window.wp.editPost,m=window.wp.i18n,w=window.wp.components,b=window.wp.compose,_=window.wp.data;var __=m.__,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(c,e);var t,n,i,s=l(c);function c(){return o(this,c),s.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e,t=(null===(e=window.newspackAdsSuppressAds)||void 0===e?void 0:e.placements)||{},n=this.props,o=n.newspack_ads_suppress_ads,i=n.newspack_ads_suppress_ads_placements,s=n.updateSuppressAds,a=n.updateSuppressPlacements;return(0,f.createElement)(y.PluginDocumentSettingPanel,{name:"newspack-ad-free",title:__("Newspack Ads Settings","newspack-ads"),className:"newspack-subtitle"},(0,f.createElement)(w.ToggleControl,{label:__("Don't show ads on this content","newspack-ads"),checked:o,onChange:function(e){s(e)}}),!o&&(0,f.createElement)(f.Fragment,null,(0,f.createElement)("p",null,__("Suppress specific placements:","newspack-ads")),Object.keys(t).map((function(e){return(0,f.createElement)(w.ToggleControl,{key:e,label:t[e].name,checked:i&&-1!==i.indexOf(e),onChange:function(){var t=null!=i&&i.length?r(i):[];-1!==t.indexOf(e)?t.splice(t.indexOf(e),1):t.push(e),a(t)}})}))))}}])&&a(t.prototype,n),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),c}(f.Component),g=(0,b.compose)([(0,_.withSelect)((function(e){var t=e("core/editor").getEditedPostAttribute("meta");return{newspack_ads_suppress_ads:t.newspack_ads_suppress_ads,newspack_ads_suppress_ads_placements:t.newspack_ads_suppress_ads_placements}})),(0,_.withDispatch)((function(e){return{updateSuppressAds:function(t){e("core/editor").editPost({meta:{newspack_ads_suppress_ads:t}})},updateSuppressPlacements:function(t){e("core/editor").editPost({meta:{newspack_ads_suppress_ads_placements:t}})}}}))])(v);(0,d.registerPlugin)("plugin-document-setting-panel-newspack-suppress-ads",{render:g,icon:null});var h=window;for(var S in t)h[S]=t[S];t.__esModule&&Object.defineProperty(h,"__esModule",{value:!0})})();