(()=>{var e={5366:(e,t,n)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9307:e=>{"use strict";e.exports=window.wp.element},3967:(e,t)=>{var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},907:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},5057:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(907);function a(e){if(Array.isArray(e))return(0,r.Z)(e)}},9199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},2786:(e,t,n)=>{"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:()=>r})},9062:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(5057),a=n(9199),i=n(181),o=n(2786);function c(e){return(0,r.Z)(e)||(0,a.Z)(e)||(0,i.Z)(e)||(0,o.Z)()}},181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(907);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var r={};(()=>{"use strict";n(5366);var e=n(9062),t=n(9307),r=n(4981),a=n(5609);const i=function(e){var n=e.size,r=void 0===n?24:n;return(0,t.createElement)(a.SVG,{className:"newspack-logo",width:r,height:r,viewBox:"0 0 32 32"},(0,t.createElement)(a.Path,{d:"M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.163 16 16 16z",fill:"#36f"}),(0,t.createElement)(a.Path,{d:"M22.988 16.622h-1.72l-1.103-1.124h2.823v1.124zm0-3.31H18.02l-1.102-1.124h6.071v1.124zm0-3.31h-8.217l-1.103-1.125h9.32v1.125zm0 13.12L9.012 8.878v4.749l.069.071h-.07v9.426h3.451v-5.98l5.867 5.98h4.66z",fill:"#fff"}))};(0,r.setCategories)([].concat((0,e.Z)((0,r.getCategories)().filter((function(e){return"newspack"!==e.slug}))),[{slug:"newspack",title:"Newspack",icon:(0,t.createElement)(i,null)}]))})(),(()=>{"use strict";n.r(r);var e=n(4981),t=n(9307);const a=window.wp.primitives,i=(0,t.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(a.Path,{d:"M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"})),o=window.wp.i18n;function c(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,a)}var l=n(9062);var s=n(181);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,_x,i,o=[],_n=!0,c=!1;try{if(_x=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;_n=!1}else for(;!(_n=(r=_x.call(n)).done)&&(o.push(r.value),o.length!==t);_n=!0);}catch(l){c=!0,a=l}finally{try{if(!_n&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,t)||(0,s.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(3967),p=n.n(d);const f=window.wp.blockEditor;var v=n(5609);const m=window.wp.apiFetch;var b=n.n(m);const w=(0,t.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(a.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}function g(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var __=o.__,E=function(e){return[{label:__("Select a provider","newspack-ads"),value:""}].concat((0,l.Z)(e.map((function(e){return{label:e.name,value:e.id}}))))};const _=function(e){var n,r=e.label,a=void 0===r?__("Ad Unit","newspack"):r,i=e.providers,c=void 0===i?[]:i,s=e.bidders,d=void 0===s?{}:s,p=e.value,f=void 0===p?{}:p,m=e.disabled,b=void 0!==m&&m,w=e.onChange,y=void 0===w?function(){}:w,h=u((0,t.useState)({}),2),k=h[0],_=h[1],j=c.find((function(e){return(null==e?void 0:e.id)===(f.provider||"gam")}))||c[0];return(0,t.useEffect)((function(){var e={};Object.keys(d).forEach((function(t){var n,r=d[t],a=null==j?void 0:j.units.find((function(e){return e.value===f.ad_unit})),i=f.ad_unit&&a&&(n=r.ad_sizes,a.sizes.some((function(e){return(n||[]).find((function(t){return t[0]===e[0]&&t[1]===e[1]}))})));e[t]=f.ad_unit&&a&&!i?(0,o.sprintf)(__("%s does not support the selected ad unit sizes.","newspack"),r.name,""):null})),_(e)}),[c,f.ad_unit]),c.length?(0,t.createElement)(t.Fragment,null,c.length>1&&(0,t.createElement)(v.SelectControl,{label:__("Provider","newspack"),value:null==j?void 0:j.id,options:E(c),onChange:function(e){return y(S(S({},f),{},{provider:e}))},disabled:b}),(0,t.createElement)(v.SelectControl,{label:a,value:f.ad_unit,options:(n=j,null!=n&&n.units?[{label:__("Select an Ad Unit","newspack-ads"),value:""}].concat((0,l.Z)(n.units.map((function(e){return{label:e.name,value:e.value}})))):[]),onChange:function(e){return y(S(S({},f),{},{ad_unit:e}))},disabled:b}),"gam"===(null==j?void 0:j.id)&&Object.keys(d).map((function(e){var n=d[e],r=(0,o.sprintf)(__("%s Placement ID","newspack-ads"),n.name);return(0,t.createElement)(v.TextControl,{key:e,value:f.bidders_ids?f.bidders_ids[e]:null,label:r,disabled:k[e]||b,onChange:function(t){return y(S(S({},f),{},{bidders_ids:S(S({},f.bidders_ids),{},g({},e,t))}))}})})),"gam"===(null==j?void 0:j.id)&&Object.keys(k).map((function(e){return k[e]?(0,t.createElement)(v.Notice,{key:e,status:"warning",isDismissible:!1},k[e]):null}))):(0,t.createElement)(v.Notice,{isWarning:!0,noticeText:__("There is no provider available.","newspack-ads"),isDismissible:!1})};var j=o.__;const x=function(e){var n,r=e.attributes,a=e.setAttributes,o=u((0,t.useState)(!1),2),s=o[0],d=o[1],m=u((0,t.useState)(null),2),y=m[0],h=m[1],g=u((0,t.useState)(!1),2),k=g[0],S=g[1],E=u((0,t.useState)(null),2),x=E[0],O=E[1],P=u((0,t.useState)([]),2),A=P[0],Z=P[1],z=u((0,t.useState)({}),2),M=z[0],T=z[1],C=(0,f.useBlockProps)({className:"newspack-ads-ad-block"}),B=A.find((function(e){return e.id.toString()===r.provider})),N=null==B||null===(n=B.units)||void 0===n?void 0:n.find((function(e){return e.value.toString()===r.ad_unit})),D=(null==N?void 0:N.sizes)||[],U=D.length?Math.max.apply(Math,(0,l.Z)(D.map((function(e){return e[0]})))):300,F=D.length?Math.max.apply(Math,(0,l.Z)(D.map((function(e){return e[1]})))):200;return(0,t.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.activeAd&&!r.ad_unit&&a({ad_unit:r.activeAd}),d(!0),e.prev=2,e.t0=Z,e.next=6,b()({path:"/newspack-ads/v1/providers"});case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),h(e.t2);case 13:return e.prev=13,e.t3=T,e.next=17,b()({path:"/newspack-ads/v1/bidders"});case 17:e.t4=e.sent,(0,e.t3)(e.t4),e.next=24;break;case 21:e.prev=21,e.t5=e.catch(13),O(e.t5);case 24:d(!1);case 25:case"end":return e.stop()}}),e,null,[[2,10],[13,21]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,l,"next",e)}function l(e){c(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[]),(0,t.useEffect)((function(){null!=A&&A.length&&!r.provider&&a({provider:A[0].id})}),[A]),(0,t.createElement)("div",C,!k&&N?(0,t.createElement)(t.Fragment,null,!s&&(0,t.createElement)(f.BlockControls,null,(0,t.createElement)(v.ToolbarGroup,null,(0,t.createElement)(v.ToolbarButton,{icon:w,label:j("Edit","newspack-ads"),onClick:function(){return S(!0)}}))),y&&(0,t.createElement)(v.Notice,{isError:!0,noticeText:y,isDismissible:!1}),"gam"===B&&x&&(0,t.createElement)(v.Notice,{isWarning:!0,noticeText:x,isDismissible:!1}),(0,t.createElement)("div",{className:"newspack-ads-ad-block-placeholder",style:{width:U,height:F}},(0,t.createElement)(t.Fragment,null,(0,t.createElement)(v.SVG,{className:"newspack-ads-ad-block-mock",width:U,viewBox:"0 0 "+U+" "+F},(0,t.createElement)("rect",{width:U,height:F,strokeDasharray:"2"}),(0,t.createElement)("line",{x1:"0",y1:"0",x2:"100%",y2:"100%",strokeDasharray:"2"})),(0,t.createElement)("span",{className:"newspack-ads-ad-block-ad-label"},A.length>1&&"".concat(B.name," - ")," ",N.name,(0,t.createElement)("br",null),D.length?D.map((function(e){return"".concat(e[0],"x").concat(e[1])})).join(", "):j("Unknown size","newspack-ads"))),s&&(0,t.createElement)(v.Spinner,null))):(0,t.createElement)(v.Placeholder,{label:j("Ad Unit","newspack-ads"),icon:i},(0,t.createElement)("div",{className:"newspack-ads-ad-block-edit"},s?(0,t.createElement)(v.Spinner,null):(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:p()({"newspack-ads-ad-block-edit-fields":!0})},(0,t.createElement)(_,{providers:A,bidders:M,value:r,onChange:function(e){S(!0),a(e)}}),(0,t.createElement)(v.Button,{disabled:!N,onClick:function(){return S(!1)},isPrimary:!0},j("Save","newspack-ads")))))))};var O=o.__,P={title:O("Ad Unit","newspack-ads"),icon:{src:i,foreground:"#36f"},category:(0,e.getCategories)().some((function(e){return"newspack"===e.slug}))?"newspack":"common",keywords:[O("ad","newspack-ads"),O("advert","newspack-ads"),O("ads","newspack-ads")],description:O("Render an ad unit from your inventory.","newspack-ads"),attributes:{provider:{type:"string"},ad_unit:{type:"string"},bidders_ids:{type:"object",default:{}},activeAd:{type:"string"}},supports:{html:!1,align:["left","center","right","wide","full"],color:{text:!1,background:!0}},edit:x,save:function(){return null}};(0,e.registerBlockType)("newspack-ads/".concat("ad-unit"),P)})();var a=window;for(var i in r)a[i]=r[i];r.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();