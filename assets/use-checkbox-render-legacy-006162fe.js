!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["disabled","direction","iconSize","iconPosition","iconShape","iconCheckedColor","labelDisabled","icon","checkedIcon","className","children"];function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(n,r,t){return(r=function(n){var r=function(n,r){if("object"!==e(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"===e(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}System.register(["./index-legacy-c7ea1f2b.js","./use-merged-prop-legacy-58e913d1.js","./index-legacy-a46c1c09.js","./event-legacy-359ec6a3.js","./format-legacy-4dfc8f09.js"],(function(e,r){"use strict";var c,l,a,u,s,f,b;return{setters:[function(e){c=e.b,l=e.c,a=e.j},function(e){u=e.u},function(e){s=e.I},function(e){f=e.p},function(e){b=e.a}],execute:function(){e("u",(function(e,r){var d=e.disabled,y=e.direction,p=e.iconSize,m=e.iconPosition,v=e.iconShape,O=e.iconCheckedColor,g=e.labelDisabled,h=e.icon,j=e.checkedIcon,S=e.className,P=e.children,k=i(e,n),w=u(!1,d,r.disabled),C=u("vertical",y,r.direction),D=u(void 0,p,r.iconSize),x=u("left",m,r.iconPosition),I=u("round",v,r.iconShape),N=u(void 0,O,r.iconCheckedColor),z=u(!1,g,r.labelDisabled),E=h||r.icon,q=j||r.checkedIcon;return function(e){var n,r,i=e.bem,u=e.checked,d=e.ref;!w&&"plain"!==I&&u&&(r=N);var y=function(){var e;return a("span",{className:i("icon",(e={},o(e,I,"plain"!==I),o(e,"checked",u),o(e,"disabled",w),e)),style:{fontSize:b(D),borderColor:r,backgroundColor:r},children:u?q||a(s,{name:"success"}):E||a(s,{name:"success"})})},p=function(){return a("span",{className:i("label",{disabled:w}),onClick:function(e){z&&f(e,!0)},children:P})};return c("div",t(t({className:l(i((n={disabled:w},o(n,"".concat(C),"vertical"!==C),o(n,"label-disabled",z),n)),S),tabIndex:w?void 0:0,"aria-checked":u},k),{},{ref:d,children:["left"===x?y():p(),"left"===x?p():y()]}))}}))}}}))}();