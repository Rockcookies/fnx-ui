!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["size","color","voidColor","disabledColor","voidDisabledColor","className","character","voidCharacter","gutter","value"];function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-1bd67aeb.js","./config-component-props-legacy-b5279410.js","./use-controlled-state-legacy-c2785d55.js","./use-merged-prop-ref-legacy-7929f994.js","./index-legacy-c68971b2.js","./event-legacy-359ec6a3.js","./touch-helper-legacy-732fd97d.js","./format-legacy-4dfc8f09.js","./misc-legacy-f59b2e17.js"],(function(e,r){"use strict";var o,l,u,c,f,s,d,p,y,b,h,v,m;return{setters:[function(e){o=e.r,l=e.j,u=e.c,c=e.a},function(e){f=e.c},function(e){s=e.u},function(e){d=e.u},function(e){p=e.a},function(e){y=e.b,b=e.p},function(e){h=e.T},function(e){v=e.a},function(e){m=e.n}],execute:function(){var r=c("fnx-rate"),g=f({readonly:!1,disabled:!1,allowHalf:!1,count:5,touchable:!0,defaultValue:0,onChange:m}),j=o.forwardRef((function(e,c){var f=a(g(e),2),m=f[0],j=m.readonly,O=m.disabled,w=m.allowHalf,S=m.count,x=m.touchable,C=m.defaultValue,N=m.onChange,E=f[1],P=E.size,I=E.color,A=E.voidColor,R=E.disabledColor,M=E.voidDisabledColor,z=E.className,D=E.character,H=E.voidCharacter,T=E.gutter,k=E.value,V=i(E,t),_=D||l.jsx(p,{name:"star"}),B=H||_,F=s({value:k,defaultValue:C,onChange:N}),G=F.value,L=F.onChangeRef,X=d({readonly:j,disabled:O,allowHalf:w,count:S,touchable:x,defaultValue:C}),U=d((function(e){O||j||e===G||L.current(e)})),Y=o.useRef(null),$=o.useRef({}),q=o.useMemo((function(){return j||O||!x}),[j,O,x]),J=o.useMemo((function(){return new Array(S).fill(0)}),[S]);o.useImperativeHandle(c,(function(){return Y.current}));o.useEffect((function(){var e=Y.current;if(e&&!j&&!O){var t,r=new h,n=[],o=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,a=!1,l=function(l){r.start(l);var u=X.current,c=u.count,f=u.allowHalf;a=f,t=e.getBoundingClientRect(),n=[];for(var s=0;s<c;s++){var d=$.current[s],p=d?d.getBoundingClientRect():{top:0,left:0,height:0,width:0};o=Math.min(p.top,o),i=Math.max(p.top,i),a?n.push({score:s+.5,left:p.left,top:p.top,height:p.height},{score:s+1,left:p.left+p.width/2,top:p.top,height:p.height}):n.push({score:s+1,left:p.left,top:p.top,height:p.height})}},u=function(e){if(!q&&(r.move(e),r.isHorizontal())){var l=e.touches[0],u=l.clientX,c=l.clientY;b(e),U.current(function(e,r){for(var l=n.length-1;l>0;l--)if(r>=t.top&&r<=t.bottom){if(e>n[l].left&&r>=n[l].top&&r<=n[l].top+n[l].height)return n[l].score}else{var u=r<t.top?o:i;if(e>n[l].left&&n[l].top===u)return n[l].score}return a?.5:1}(u,c))}};return y(e,"touchstart",l,{passive:!0}),y(e,"touchmove",u,{passive:!1}),function(){e.removeEventListener("touchstart",l),e.removeEventListener("touchmove",u)}}}),[O,X,j,U,q]);var K=function(e){var t=e+1,n={};T&&t!==S&&(n.paddingRight=v(T));var o={};return o=w&&G+.5>=t&&G<t?{half:!0,active:!0}:t<=G?{full:!0}:{zero:!0},l.jsx("li",{ref:function(t){$.current[e]=t},role:"radio",style:n,className:r("item",o),tabIndex:O?void 0:0,"aria-setsize":S,"aria-posinset":t,"aria-checked":G>e,children:l.jsxs("div",{className:r("item-wrapper"),onClick:function(){return e=t,void(w?e===G?U.current(e-1):e>G?U.current(Number.isInteger(G)?e-.5:e):U.current(Number.isInteger(e)?e-1:e):e===G?U.current(e-1):U.current(e));var e},style:{fontSize:null!=P?v(P):"28px"},children:[l.jsx("div",{className:r("void-character"),style:{color:O?M:A},children:B}),l.jsx("div",{className:r("character"),style:{color:O?R:I},children:_})]})},e)};return l.jsx("ul",n(n({className:u(r({disabled:O}),z),role:"radiogroup",tabIndex:O?void 0:0,"aria-disabled":O,"aria-readonly":j},V),{},{ref:Y,children:J.map((function(e,t){return K(t)}))}))}));j.displayName="Rate";e("R",j)}}}))}();
