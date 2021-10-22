import{r as n}from"./vendor.74addd0f.js";const r="undefined"!=typeof window;function e(){return!!r&&!(!window.document||!window.document.createElement)}function a(){return!!r&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}function o(n){return"function"==typeof n}function t(n){return null!==n&&"object"==typeof n}function i(n){return t(n)&&o(n.then)&&o(n.catch)}function f(n){return"number"==typeof n||/^\d+(\.\d+)?$/.test(n)}function x(n){return"[object Date]"===Object.prototype.toString.call(n)&&!isNaN(n.getTime())}const{hasOwnProperty:s}=Object.prototype;function g(){}async function c(n){return new Promise((r=>{setTimeout((()=>{r()}),n)}))}function l(n,r){return n.replace(/\$\{\w+\}/g,(n=>{const e=n.slice(2,-1);return r[e]}))}function d(n,r,e){}function p(n,r){return Object.keys(r).forEach((e=>{!function(n,r,e){const a=r[e];s.call(n,e)&&t(a)?n[e]=p(Object(n[e]),r[e]):n[e]=a}(n,r,e)})),n}function u(n){return Array.isArray(n)?n.map((n=>u(n))):"object"==typeof n?p({},n):n}function b(n,r,e=((n,r)=>n===r)){if(n===r)return!0;if(!n||!r)return!1;const a=n.length;if(r.length!==a)return!1;for(let o=0;o<a;o++)if(!e(n[o],r[o]))return!1;return!0}function m(n,r){if(null==r)return;const e=Array.isArray(r)?r:[r];let a=0;const o=e.length;for(;null!=n&&a<o;)n=n[e[a++]];return a&&a==o?n:void 0}var y={"--fnx-gray-50":"rgb(37, 37, 37)","--fnx-gray-75":"rgb(47, 47, 47)","--fnx-gray-100":"rgb(50, 50, 50)","--fnx-gray-200":"rgb(62, 62, 62)","--fnx-gray-300":"rgb(74, 74, 74)","--fnx-gray-400":"rgb(90, 90, 90)","--fnx-gray-500":"rgb(110, 110, 110)","--fnx-gray-600":"rgb(144, 144, 144)","--fnx-gray-700":"rgb(185, 185, 185)","--fnx-gray-800":"rgb(227, 227, 227)","--fnx-gray-900":"rgb(255, 255, 255)","--fnx-black-color":"#000000","--fnx-white-color":"#ffffff","--fnx-natural-color":"var(--fnx-black-color)","--fnx-natural-inverse-color":"var(--fnx-white-color)","--fnx-primary-color":"rgb(55, 142, 240)","--fnx-danger-color":"rgb(236, 91, 98)","--fnx-warning-color":"rgb(242, 148, 35)","--fnx-success-color":"rgb(51, 171, 132)","--fnx-page-color":"var(--fnx-gray-50)","--fnx-link-color":"var(--fnx-primary-color)","--fnx-active-opacity":"0.7","--fnx-disabled-opacity":"0.5","--fnx-padding-base":"4px","--fnx-padding-xs":"8px","--fnx-padding-sm":"12px","--fnx-padding-md":"16px","--fnx-padding-lg":"24px","--fnx-padding-xl":"32px","--fnx-font-size-xs":"10px","--fnx-font-size-sm":"12px","--fnx-font-size-md":"14px","--fnx-font-size-lg":"16px","--fnx-font-weight-bold":"500","--fnx-line-height-xs":"14px","--fnx-line-height-sm":"18px","--fnx-line-height-md":"20px","--fnx-line-height-lg":"22px","--fnx-base-font-family":"-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif","--fnx-price-integer-font-family":"Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif","--fnx-animation-duration-base":"300ms","--fnx-animation-duration-fast":"200ms","--fnx-animation-timing-function-enter":"ease-out","--fnx-animation-timing-function-exit":"ease-in","--fnx-border-width-base":"1px","--fnx-border-radius-sm":"2px","--fnx-border-radius-md":"4px","--fnx-border-radius-lg":"8px","--fnx-border-radius-max":"999px","--fnx-border-style-base":"solid","--fnx-box-shadow":"rgba(142, 142, 142, 0.16)","--fnx-picker-mask-background-from":"rgba(47, 47, 47, 0.9)","--fnx-picker-mask-background-to":"rgba(47, 47, 47, 0.4)"},h={"--fnx-gray-50":"rgb(255, 255, 255)","--fnx-gray-75":"rgb(250, 250, 250)","--fnx-gray-100":"rgb(245, 245, 245)","--fnx-gray-200":"rgb(234, 234, 234)","--fnx-gray-300":"rgb(225, 225, 225)","--fnx-gray-400":"rgb(202, 202, 202)","--fnx-gray-500":"rgb(179, 179, 179)","--fnx-gray-600":"rgb(142, 142, 142)","--fnx-gray-700":"rgb(110, 110, 110)","--fnx-gray-800":"rgb(75, 75, 75)","--fnx-gray-900":"rgb(44, 44, 44)","--fnx-black-color":"#000000","--fnx-white-color":"#ffffff","--fnx-natural-color":"var(--fnx-white-color)","--fnx-natural-inverse-color":"var(--fnx-black-color)","--fnx-primary-color":"rgb(55, 142, 240)","--fnx-danger-color":"rgb(236, 91, 98)","--fnx-warning-color":"rgb(242, 148, 35)","--fnx-success-color":"rgb(51, 171, 132)","--fnx-page-color":"var(--fnx-gray-50)","--fnx-link-color":"var(--fnx-primary-color)","--fnx-active-opacity":"0.7","--fnx-disabled-opacity":"0.5","--fnx-padding-base":"4px","--fnx-padding-xs":"8px","--fnx-padding-sm":"12px","--fnx-padding-md":"16px","--fnx-padding-lg":"24px","--fnx-padding-xl":"32px","--fnx-font-size-xs":"10px","--fnx-font-size-sm":"12px","--fnx-font-size-md":"14px","--fnx-font-size-lg":"16px","--fnx-font-weight-bold":"500","--fnx-line-height-xs":"14px","--fnx-line-height-sm":"18px","--fnx-line-height-md":"20px","--fnx-line-height-lg":"22px","--fnx-base-font-family":"-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif","--fnx-price-integer-font-family":"Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif","--fnx-animation-duration-base":"300ms","--fnx-animation-duration-fast":"200ms","--fnx-animation-timing-function-enter":"ease-out","--fnx-animation-timing-function-exit":"ease-in","--fnx-border-width-base":"1px","--fnx-border-radius-sm":"2px","--fnx-border-radius-md":"4px","--fnx-border-radius-lg":"8px","--fnx-border-radius-max":"999px","--fnx-border-style-base":"solid","--fnx-box-shadow":"rgba(144, 144, 144, 0.16)","--fnx-picker-mask-background-from":"rgba(250, 250, 250, 0.9)","--fnx-picker-mask-background-to":"rgba(250, 250, 250, 0.4)"};function v(r){const e="dark"===r?"dark":"light";!function(r){n.exports.useEffect((()=>{const n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");return n.appendChild(e),e.type="text/css",e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r)),()=>{e.remove()}}),[r])}(n.exports.useMemo((()=>{const n="dark"!==e?h:y;let r=":root {\n";for(const e in n)r+=`${e}: ${n[e]};\n`;return r+="}",r}),[e]))}export{r as I,x as a,b,e as c,i as d,o as e,p as f,m as g,u as h,f as i,d as j,a as k,g as n,l as r,c as s,v as u};