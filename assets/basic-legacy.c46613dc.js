!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}function i(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}System.register(["./index-legacy.bbceece0.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.fbda9b43.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(e,i){"use strict";var a,l,s,y,p,b,d,h;return{setters:[function(t){a=t.r,l=t.j,s=t.a,y=t.c,p=t.F},function(t){b=t.D},function(t){d=t.u},function(t){h=t.a},function(){},function(){}],execute:function(){e("default",(function(){var e=t(d(w,"en-US"),1)[0];return s(p,{children:s(b,{title:e.basicUsage,cardMode:!0,children:s(g,{children:s(j,{})})})})}));var i=Object.defineProperty,m=function(t,e,r){return function(t,e,r){e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r}(t,"symbol"!==f(e)?e+"":e,r),r},v=y("fnx-error-boundary"),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(y,t);var e,i,a,f=c(y);function y(){var t;return r(this,y),t=f.apply(this,arguments),m(u(t),"state",{error:void 0,info:{componentStack:""}}),t}return e=y,(i=[{key:"componentDidCatch",value:function(t,e){this.setState({error:t,info:e})}},{key:"render",value:function(){var t=this.props,e=t.message,r=t.description,n=t.children,o=this.state,c=o.error,i=o.info,u=i&&i.componentStack?i.componentStack:null,a=void 0===e?(c||"").toString():e,f=void 0===r?u:r;return c?l("div",{className:v(),children:[s("div",{className:v("title"),children:a}),s("div",{className:v("description"),children:s("pre",{children:f})})]}):n}}])&&n(e.prototype,i),a&&n(e,a),Object.defineProperty(e,"prototype",{writable:!1}),y}(a.exports.Component),w={"zh-CN":{basicUsage:"基础用法",clickThrow:"点击抛出异常",uncaughtError:"未捕获异常"},"en-US":{basicUsage:"Basic Usage",clickThrow:"Click me to throw a error",uncaughtError:"An Uncaught Error"}},j=function(){var e=t(d(w,"en-US"),1)[0],r=t(a.exports.useState(),2),n=r[0],o=r[1];if(n)throw n;return s(h,{type:"danger",onClick:function(){o(new Error(e.uncaughtError))},children:e.clickThrow})};j.displayName="ThrowError"}}}))}();
