!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["checked","value","onChange"],r=["value","onChange","disabled","direction","iconSize","iconPosition","iconShape","iconCheckedColor","labelDisabled","icon","checkedIcon","maxCheckedCount","className","children"];function t(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(n,r,t){return(r=function(n){var r=function(n,r){if("object"!==e(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"===e(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,u,c,i=[],l=!0,a=!1;try{if(u=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=u.call(r)).done)&&(i.push(t.value),i.length!==n);l=!0);}catch(f){a=!0,o=f}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(a)throw o}}return i}}(e,n)||a(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){if(e){if("string"==typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,n):void 0}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./index-legacy-56dc3fc1.js","./config-component-props-legacy-b5279410.js","./use-controlled-state-legacy-3a5af549.js","./use-merged-prop-legacy-58e913d1.js","./use-merged-prop-ref-legacy-0d908859.js","./misc-legacy-f59b2e17.js","./use-checkbox-render-legacy-ac548b52.js"],(function(e,o){"use strict";var a,f,s,d,b,p,y,h,v,m;return{setters:[function(e){a=e.r,f=e.a,s=e.j,d=e.c},function(e){b=e.c},function(e){p=e.u},function(e){y=e.u},function(e){h=e.u},function(e){v=e.n},function(e){m=e.u}],execute:function(){var o=a.createContext({}),g=f("fnx-checkbox"),C=b({defaultChecked:!1,skipGroup:!1,iconShape:"square"}),O=a.forwardRef((function(e,r){var t=l(C(e),2),c=t[0],f=c.defaultChecked,s=c.skipGroup,d=c.iconShape,b=t[1],O=b.checked,j=b.value,k=b.onChange,S=i(b,n),x=a.useContext(o),w=h(x),P=s?void 0:x.value||void 0,A=null==P,I=a.useMemo((function(){return null==P?O:null!=j?P.includes(j):O}),[O,j,P]),V=p({value:I,defaultValue:null==P&&f,onChange:k}),R=V.value,D=V.onChangeRef,E=a.useRef(null),N=a.useRef(null),G=y(!1,S.disabled,x.disabled);a.useEffect((function(){if(!A&&null!=j){var e=w.current,n=e.cancelValue,r=void 0===n?v:n,t=e.registerValue,o=void 0===t?v:t;return j!==N.current&&(null!=N.current&&r(N.current),o(j),N.current=j),function(){N.current=null,r(j)}}}),[j,w,A]);var M=a.useCallback((function(){if(!G){var e=w.current.toggleValue;!A&&e&&null!=j?e(!R,j):D.current(!R)}}),[G,w,A,j,R,D]),z=a.useMemo((function(){return{element:E.current,toggle:M}}),[M]);return a.useImperativeHandle(r,(function(){return z}),[z]),m(u(u({role:"checkbox"},S),{},{iconShape:d,onClick:function(e){M(),S.onClick&&S.onClick(e)}}),x)({bem:g,checked:R,ref:E})}));O.displayName="Checkbox";var j=O,k=f("fnx-checkbox-group"),S=b({defaultValue:[]}),x=a.forwardRef((function(e,n){var f=l(S(e),2),b=f[0].defaultValue,y=f[1],h=y.value,v=y.onChange,m=y.disabled,g=y.direction,C=y.iconSize,O=y.iconPosition,j=y.iconShape,x=y.iconCheckedColor,w=y.labelDisabled,P=y.icon,A=y.checkedIcon,I=y.maxCheckedCount,V=y.className,R=y.children,D=i(y,r),E=p({value:h,defaultValue:b,onChange:v}),N=E.value,G=E.onChangeRef,M=a.useRef([]),z=a.useCallback((function(e){M.current=M.current.filter((function(n){return n!==e}))}),[]),T=a.useCallback((function(e){M.current.push(e)}),[]),q=a.useCallback((function(e,n){var r=t(N),o=r.indexOf(n);if(!(e&&I&&r.length>=I)){e&&-1===o&&(null==I||r.length<I)&&r.push(n),e||r.splice(o,1);var u=r.filter((function(e){return-1!==M.current.indexOf(e)}));G.current(u)}}),[I,G,N]),H=a.useRef(null),L=a.useMemo((function(){return{element:H.current,toggleAll:function(e){var n=t(M.current);e&&e.checkAll||(n=t(M.current).filter((function(e){return-1===N.indexOf(e)}))),G.current(n)}}}),[G,N]);return a.useImperativeHandle(n,(function(){return L}),[L]),s("div",u(u({className:d(k(u({},null!=g?c({},g,"vertical"!==g):{})),V)},D),{},{ref:H,children:s(o.Provider,{value:{value:N,disabled:m,direction:g,iconSize:C,iconPosition:O,iconShape:j,iconCheckedColor:x,labelDisabled:w,icon:P,checkedIcon:A,registerValue:T,cancelValue:z,toggleValue:q},children:R})}))}));x.displayName="CheckboxGroup";var w=x,P=j;P.Group=w;e("C",P)}}}))}();
