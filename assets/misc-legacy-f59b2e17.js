!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}System.register(["./detect-legacy-199d634d.js"],(function(t,r){"use strict";var e;return{setters:[function(n){e=n.i}],execute:function(){t({a:function t(r){if(Array.isArray(r))return r.map((function(n){return t(n)}));if("object"===n(r))return o({},r);return r},b:function(n,t,r){},d:o,g:function(n,t){if(null==t)return;var r=Array.isArray(t)?t:[t],e=0,o=r.length;for(;null!=n&&e<o;)n=n[r[e++]];return e&&e==o?n:void 0},i:function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(n,t){return n===t};if(n===t)return!0;if(!n||!t)return!1;var e=n.length;if(t.length!==e)return!1;for(var o=0;o<e;o++)if(!r(n[o],t[o]))return!1;return!0},n:function(){},r:function(n,t){return n.replace(/\$\{\w+\}/g,(function(n){var r=n.slice(2,-1);return t[r]}))},s:function(n){return new Promise((function(t){setTimeout((function(){t()}),n)}))}});var r=Object.prototype.hasOwnProperty;function o(n,t){return Object.keys(t).forEach((function(u){!function(n,t,u){var i=t[u];r.call(n,u)&&e(i)?n[u]=o(Object(n[u]),t[u]):n[u]=i}(n,t,u)})),n}}}}))}();
