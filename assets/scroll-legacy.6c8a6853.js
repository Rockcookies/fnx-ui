System.register(["./use-theme-legacy.2614fe81.js"],(function(o,e){"use strict";var t;return{setters:[function(o){t=o.k}],execute:function(){function e(o,e){"scrollTop"in o?o.scrollTop=e:o.scrollTo(o.scrollX,e)}o({a:function(o,e){for(var t=o,c=e||window;t&&t!==c&&n(t);){var l=window.getComputedStyle(t).overflowY;if(r.test(l))return t;t=t.parentNode}return c},g:function(o){var e="scrollTop"in o?o.scrollTop:o.pageYOffset;return Math.max(e,0)},r:function(){var o;c&&(o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e(window,o),e(document.body,o))},s:e});var r=/scroll|auto|overlay/i;function n(o){return"HTML"!==o.tagName&&"BODY"!==o.tagName&&1===o.nodeType}var c=t()}}}));
