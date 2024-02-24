(()=>{var t={7954:t=>{var e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,a="object"==typeof window&&window&&window.Object===Object&&window,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,l=Math.min,f=function(){return c.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var a="function"==typeof t.valueOf?t.valueOf():t;t=b(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=r.test(t);return u||i.test(t)?o(t.slice(2),u?2:8):n.test(t)?NaN:+t}t.exports=function(t,e,n){var r,i,o,a,u,c,s=0,p=!1,y=!1,_=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function w(t){return s=t,u=setTimeout(g,e),p?m(t):a}function h(t){var n=t-c;return void 0===c||n>=e||n<0||y&&t-s>=o}function g(){var t=f();if(h(t))return q(t);u=setTimeout(g,function(t){var n=e-(t-c);return y?l(n,o-(t-s)):n}(t))}function q(t){return u=void 0,_&&r?m(t):(r=i=void 0,a)}function S(){var t=f(),n=h(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return w(c);if(y)return u=setTimeout(g,e),m(c)}return void 0===u&&(u=setTimeout(g,e)),a}return e=v(e)||0,b(n)&&(p=!!n.leading,o=(y="maxWait"in n)?d(v(n.maxWait)||0,e):o,_="trailing"in n?!!n.trailing:_),S.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=i=u=void 0},S.flush=function(){return void 0===u?a:q(f())},S}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{processTiersBasedElements:()=>s});var t=n(7954),e=n.n(t),i=function(t,n){var r=t.querySelector(".wpbnbd__tiers__options"),i=t.querySelector(".wpbnbd__tiers__options__dots");if(r&&i&&n){var o=function(){return Array.from(r.children).map((function(t){return{el:t,width:t.clientWidth}}))},a=o(),u=Math.round(a.length/2)-1,c=function(){return a[u].width},s=function(){return a.map((function(t,e){return d*e}))},d=c(),l=s(),f=u*d;window.addEventListener("resize",(function(){a=o(),d=c(),l=s(),r.scrollTo(f,0)}));var b=Array.from(i.children),v=e()((function(){var t,e,i,o=(t=l,e=r.scrollLeft,i=t.reduce((function(t,n){return Math.abs(n-e)<Math.abs(t)?n-e:t}),1/0)+e,t.indexOf(i));b.forEach((function(t,e){t.style.backgroundColor=e===o?n.buttonColor:""}))}),100);r.addEventListener("scroll",v),b.forEach((function(t,e){t.addEventListener("click",(function(){r.scrollTo({left:e*d,behavior:"smooth"})}))})),r.scrollTo(f,0)}},o="wpbnbd__button--active",a=function(t){return'.wpbnbd__tiers__amount [data-frequency-slug="'.concat(t,'"]')};const u=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var e=JSON.parse(t);return{params:{frequency:e[0],tierPrefix:e[1]},initialFrequency:e[2],tiersBasedOptions:e[3],amounts:e[4],renewsAt:{month:e[5],year:e[6]},isRenderingStripePaymentForm:e[7],buttonColor:e[8]}}catch(n){return!1}}(t.getAttribute("data-tiers-based-config")||"");if(e){var n=t.querySelectorAll(".wpbnbd__tiers__selection button"),r=t.querySelectorAll(".wpbnbd__tiers__amount [data-frequency-slug]"),u=t.querySelector('input[name="'.concat(e.params.frequency,'"]')),c=t.querySelector("form[data-is-init-form]");if(n&&r&&u&&c){i(t,e);var s=e.initialFrequency,d=0;n.forEach((function(i){i.addEventListener("click",(function(){var c=i.getAttribute("data-frequency-slug");c&&(s=c,u.setAttribute("value",s),r.forEach((function(t){return t.style.display="none"})),t.querySelectorAll(a(s)).forEach((function(t){return t.style.display="inline"})),n.forEach((function(t){s===t.getAttribute("data-frequency-slug")?t.classList.add(o):t.classList.remove(o)})),t.querySelectorAll('button[type="submit"]').forEach((function(t){if(s){t.setAttribute("name","".concat(e.params.tierPrefix).concat(s));var n=t.getAttribute("data-tier-index"),r=document.querySelector("".concat(a(s),'[data-tier-index="').concat(n,'"]'));if(r){var i=r.getAttribute("data-amount");i&&t.setAttribute("value",i)}}})))}))}));var l=t.querySelector("button.wpbnbd__tiers__back-button"),f=t.querySelectorAll(".wpbnbd__tiers__tier button"),b=t.querySelectorAll(".wpbnbd__tiers__view"),v=function(){return b.forEach((function(t){return t.classList.toggle("wpbnbd__tiers__view--hidden")}))};f.forEach((function(n){n.addEventListener("click",(function(){var r,i=parseInt(n.getAttribute("data-tier-index")||"");d=i;var o=t.querySelector(".wpbnbd__tiers__tier-tile h2"),a=t.querySelector(".wpbnbd__tiers__tier-tile span[data-amount]"),u=t.querySelector(".wpbnbd__tiers__tier-tile span[data-frequency]"),c=t.querySelector(".wpbnbd__tiers__tier-tile span[data-renews-date]");if(!isNaN(i)&&o&&a&&u&&c){var l=e.tiersBasedOptions[i],f=null===(r=t.querySelector('[data-frequency-slug="'.concat(s,'"]')))||void 0===r?void 0:r.getAttribute("data-frequency-label");o.textContent=l.heading,u.textContent=f||"",a.textContent=e.amounts[s][i],c.textContent=e.renewsAt[s],v()}}))})),e.isRenderingStripePaymentForm&&(c.addEventListener("submit",(function(n){n.preventDefault();var r=t.querySelector("form[data-is-streamlined-form]");if(r){var i=r.querySelector("input[data-is-streamlined-input-amount]"),o=r.querySelector('input[name="'.concat(e.params.frequency,'"]'));if(i&&o){var a=e.amounts[s][d];i.setAttribute("value",a),i.setAttribute("name","".concat(e.params.tierPrefix).concat(s)),o.setAttribute("value",s),r.dispatchEvent(new Event("change"))}}})),null==l||l.addEventListener("click",v)),window.addEventListener("newspackPaymentFlowComplete-".concat(t.id),(function(){l&&(l.style.display="none")}))}}};var c,s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=t.querySelectorAll(".wpbnbd--tiers-based");e.forEach(u)};"undefined"!=typeof window&&(c=function(){return s()},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",c):c()))})();var i=window;for(var o in r)i[o]=r[o];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();