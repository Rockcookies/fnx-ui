!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["color","textColor","visible","theme","closeIcon","className","style","children","transitionDuration"];function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,c=[],u=!0,a=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(s){a=!0,o=s}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-56dc3fc1.js","./index-legacy-3b87e241.js","./config-component-props-legacy-b5279410.js","./use-controlled-state-legacy-3a5af549.js","./use-merged-prop-legacy-58e913d1.js","./index-legacy-06892120.js","./misc-legacy-f59b2e17.js","./CSSTransition-legacy-b6da4c78.js"],(function(e,r){"use strict";var c,u,a,s,f,y,b,p,m,g,d,v,j;return{setters:[function(e){c=e.r,u=e.j,a=e.b,s=e.c,f=e.a},function(e){y=e.C,b=e.D},function(e){p=e.c},function(e){m=e.u},function(e){g=e.u},function(e){d=e.I},function(e){v=e.n},function(e){j=e.C}],execute:function(){var r=f("fnx-tag"),O=p({type:"default",size:"md",closeable:!1,onClose:v}),h=c.forwardRef((function(e,f){var p,v=c.useContext(y.Context),h=c.useRef(null),S=l(O(e),2),w=S[0],C=w.type,x=w.size,P=w.closeable,D=w.onClose,I=S[1],N=I.color,A=I.textColor,E=I.visible,T=I.theme,k=I.closeIcon,R=I.className,z=I.style,H=I.children,q=I.transitionDuration,M=i(I,t);c.useImperativeHandle(f,(function(){return h.current}));var U,V=g(v.transitionDuration,q),$=m({defaultValue:!0,value:E,onChange:function(e){e||D()}}),B=$.value,F=$.onChangeRef;return u(j,{classNames:"fnx-fade",in:B,timeout:V||0,nodeRef:h,unmountOnExit:!0,children:a("span",n(n({},M),{},{className:s(r(n((p={},o(p,C,!0),o(p,x,"md"!==x),p),null!=T?o({},T,!0):{})),R),style:(U={},"plain"===T?(U.color=A||N,U.borderColor=N):(U.color=A,U.backgroundColor=N),null!=V&&V!==b.transitionDuration&&(U.transitionDuration="".concat(V,"ms")),n(n({},U),z)),ref:h,children:[H,P&&u("span",{className:r("close"),onClick:function(e){e.stopPropagation(),F.current(!1)},children:k||u(d,{name:"cross"})})]}))})}));h.displayName="Tag";e("T",h)}}}))}();
