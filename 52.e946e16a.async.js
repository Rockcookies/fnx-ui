(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{J4gX:function(e,t,n){},"KmR/":function(e,t,n){},SZ5S:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return f}));var r=n("2XQ8");function o(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function a(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}var c=/scroll|auto/i;function l(e){var t=1;return"HTML"!==e.tagName&&"BODY"!==e.tagName&&e.nodeType===t}function u(e,t){var n=e,r=t||window;while(n&&n!==r&&l(n)){var o=window.getComputedStyle(n),a=o.overflowY;if(c.test(a))return n;n=n.parentNode}return r}function i(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function s(e){a(window,e),a(document.body,e)}var d=Object(r["e"])();function f(){d&&s(i())}},SvJk:function(e,t,n){"use strict";n.r(t);var r=n("jem/"),o=n("ERkP"),a=n.n(o),c=n("zCf4"),l=n("SZ5S"),u=n("9cXV"),i=n("w7sN"),s=n("hs5g"),d=(n("KmR/"),Object(u["b"])("docs")),f=()=>{var e=Object(o["useContext"])(s["a"]),t=e.locale,n=e.menu,u=Object(o["useState"])(),f=Object(r["a"])(u,2),m=f[0],w=f[1];return Object(o["useEffect"])((()=>{if(n){var e=!1,r="zh-CN"===t?n.markdownCN():n.markdown();return w(void 0),r.then((t=>{e||(t=null!=t.default?t.default:t,Object(l["d"])(window,0),w(t.html))})),()=>{e=!0}}}),[n,t]),n?a.a.createElement("div",{className:d()},a.a.createElement(i["a"],{html:m})):a.a.createElement(c["a"],{to:"/"})};f.displayName="Components",t["default"]=f},Uwx9:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return o}))},w7sN:function(e,t,n){"use strict";var r=n("BoRD"),o=n("Uwx9"),a=n("ERkP"),c=n.n(a),l=n("9cXV"),u=n("hs5g"),i=(n("J4gX"),{"zh-CN":{loading:"\u52a0\u8f7d\u4e2d..."},"en-US":{loading:"Loading..."}}),s=e=>{var t=e.className,n=e.html,s=Object(o["a"])(e,["className","html"]),d=Object(a["useContext"])(u["a"]),f=d.locale,m=i[f];return c.a.createElement("div",Object(r["a"])({className:Object(l["a"])("markdown",t)},s,n?{dangerouslySetInnerHTML:{__html:n}}:{children:m.loading}))};s.displayName="Markdown",t["a"]=s}}]);