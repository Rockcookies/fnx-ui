!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["icon","loadingIcon","loadingChildren","color","htmlType","className","style","children"];function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,l,c=[],a=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(f){u=!0,o=f}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-c7ea1f2b.js","./config-component-props-legacy-b5279410.js","./index-legacy-a46c1c09.js","./constants-legacy-732fdcb2.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js"],(function(t,r){"use strict";var o,c,a,u,f,s,y,b,p,d;return{setters:[function(t){o=t.r,c=t.j,a=t.c,u=t.b,f=t.a},function(t){s=t.c},function(t){y=t.I},function(t){b=t.b},function(t){p=t.p},function(t){d=t.n}],execute:function(){var r=f("fnx-button"),m=s({type:"default",size:"md",iconPosition:"left",loading:!1,disabled:!1,hairline:!1,plain:!1,shape:"radius",block:!1,onClick:d}),g=o.forwardRef((function(t,o){var f=l(m(t),2),s=f[0],d=s.type,g=s.size,v=s.iconPosition,h=s.loading,O=s.disabled,j=s.hairline,S=s.plain,w=s.shape,P=s.block,k=s.onClick,x=f[1],C=x.icon,I=x.loadingIcon,N=x.loadingChildren,A=x.color,E=x.htmlType,D=x.className,T=x.style,z=x.children,B=i(x,e),M=function(){return h?I||c(y.Spinner,{}):C};return c("button",n(n({className:a(r([d,g,"radius"!==w?w:void 0,{plain:S,block:P,loading:h,disabled:O,hairline:j,"custom-color":A}]),j?b:void 0,D),style:function(){if(!A)return T;var t=n({},S?{color:A}:{background:A});return-1!==A.indexOf("gradient")?t.border="none":t.borderColor=A,n(n({},t),T)}(),onClick:function(t){h&&p(t),h||O||!k||k(t)},type:E},B),{},{ref:o,children:u("span",{className:r("content"),children:["left"===v&&M(),function(){var t;if(t=h&&void 0!==N?N:z)return c("span",{className:r("text"),children:t})}(),"right"===v&&M()]})}))}));g.displayName="Button";t("B",g)}}}))}();