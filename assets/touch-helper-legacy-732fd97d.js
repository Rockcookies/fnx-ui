!function(){function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function e(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?t(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,a(o.key),o)}}function n(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}System.register([],(function(t,r){"use strict";return{execute:function(){var r=Object.defineProperty,o=function(t,e,o){return function(t,e,o){e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o}(t,"symbol"!==i(e)?e+"":e,o),o},a={startX:0,startY:0,deltaX:0,deltaY:0,offsetX:0,offsetY:0,direction:void 0};t("T",n((function t(){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"touchData",e({},a)),o(this,"reset",(function(){r.touchData=e({},a)})),o(this,"start",(function(t){r.reset(),r.touchData.startX=t.touches[0].clientX,r.touchData.startY=t.touches[0].clientY})),o(this,"move",(function(t){var e=t.touches[0];r.touchData.deltaX=e.clientX-r.touchData.startX,r.touchData.deltaY=e.clientY-r.touchData.startY,r.touchData.offsetX=Math.abs(r.touchData.deltaX),r.touchData.offsetY=Math.abs(r.touchData.deltaY);var o,n;(!r.touchData.direction||r.touchData.offsetX<10&&r.touchData.offsetY<10)&&(r.touchData.direction=(o=r.touchData.offsetX,n=r.touchData.offsetY,o>n?"horizontal":n>o?"vertical":void 0))})),o(this,"isVertical",(function(){return"vertical"===r.touchData.direction})),o(this,"isHorizontal",(function(){return"horizontal"===r.touchData.direction}))})))}}}))}();