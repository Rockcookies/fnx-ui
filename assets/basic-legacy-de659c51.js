!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["leftIcon","rightIcon","closeIcon","color","background","className","style","children"];function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,i,c=[],a=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=l.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-1bd67aeb.js","./index-legacy-21a5cae2.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-c68971b2.js","./index-legacy-99ec861d.js","./use-merged-prop-ref-legacy-7929f994.js","./use-unmounted-ref-legacy-0c7689ef.js","./style-legacy-d9487b87.js","./raf-legacy-b5db696e.js","./config-component-props-legacy-b5279410.js","./use-on-popup-open-legacy-8b2802da.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js","./touch-helper-legacy-732fd97d.js","./react-legacy-8aa83272.js","./use-safe-state-legacy-aa82aec4.js","./use-merged-prop-legacy-58e913d1.js"],(function(e,r){"use strict";var o,c,a,s,u,f,d,p,m,y,g,h,j,b;return{setters:[function(e){o=e.r,c=e.j,a=e.c,s=e.a},function(e){u=e.D},function(e){f=e.u},function(e){d=e.I},function(e){p=e.S},function(e){m=e.u},function(e){y=e.u},function(e){g=e.g},function(e){h=e.d},function(e){j=e.c},function(e){b=e.u},null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".demo-notice-bar__notice{padding-top:0;padding-bottom:0}.demo-notice-bar__swipe{height:var(--fnx-notice-bar-height);line-height:var(--fnx-notice-bar-height)}\n",document.head.appendChild(r),e("default",(function(){var e=i(f(q,"en-US"),1)[0];return c.jsxs(c.Fragment,{children:[c.jsx(u,{title:e.basicUsage,children:c.jsx(O,{marquee:!0,leftIcon:c.jsx(d,{name:"arrow-left"}),children:e.text})}),c.jsx(u,{title:e.marqueeMode,children:c.jsx(O,{marquee:!0,children:e.text})}),c.jsx(u,{title:e.ellipsis,children:c.jsx(O,{ellipsis:!0,children:e.text})}),c.jsx(u,{title:e.wrap,children:c.jsx(O,{children:e.text})}),c.jsx(u,{title:e.rightIcon,children:c.jsx(O,{ellipsis:!0,rightIcon:c.jsx(d,{name:"arrow-right"}),children:e.shortText})}),c.jsx(u,{title:e.closeable,children:c.jsx(O,{marquee:!0,closeable:!0,children:e.text})}),c.jsx(u,{title:e.customStyle,children:c.jsx(O,{marquee:!0,background:"var(--fnx-primary-color)",children:e.text})}),c.jsx(u,{title:e.swipe,children:c.jsx(O,{className:I("notice"),leftIcon:c.jsx(d,{name:"arrow-left"}),children:c.jsx(p,{autoplay:3e3,indicator:!1,vertical:!0,className:I("swipe"),children:N.map((function(e){return c.jsx(p.Item,{children:e},e)}))})})})]})}));var x=s("fnx-notice-bar"),v=j({marquee:!1,marqueeDelay:1e3,marqueeSpeed:.06,ellipsis:!1,closeable:!1}),w=function(e){var t=e.current;t&&t.scrollTop},S=o.forwardRef((function(e,r){var s=o.useRef(null),u=o.useRef(null),f=o.useRef(null),p=o.useRef(),j=i(v(e),2),S=j[0],O=j[1],I=O.leftIcon,q=O.rightIcon,N=O.closeIcon,P=O.color,k=O.background,T=O.className,C=O.style,M=O.children,D=l(O,t),E=S.marquee,R=S.ellipsis,A=S.closeable,U=m(S),L=i(o.useState(),2),_=L[0],B=L[1],z=i(o.useState(),2),W=z[0],F=z[1],H=i(o.useState(),2),J=H[0],V=H[1],X=i(o.useState(!0),2),$=X[0],G=X[1],K=y(),Q=o.useCallback((function(){B(void 0),F(void 0),V(void 0),!1!==E&&$&&(p.current&&clearTimeout(p.current),p.current=setTimeout((function(){K.current||(V("auto"===E?"first-reset-auto":"first-reset"),p.current=void 0)}),Math.max(U.current.marqueeDelay,0)))}),[E,$,U,K]);b((function(){h(Q)})),o.useEffect((function(){Q()}),[Q]),o.useImperativeHandle(r,(function(){return{element:f.current,reset:Q}}),[Q]),o.useEffect((function(){if(null!=J){var e,t=U.current.marqueeSpeed,r=s.current?g(s.current).width:0,n=u.current?g(u.current).width:0;if("first-reset"===J||"first-reset-auto"===J||"loop-reset"===J)return w(u),V(J.replace("-reset","")),F(void 0),void B("loop-reset"===J?r:0);if("first"===J||"first-auto"===J&&n>r){var o=n/t;return w(u),B(-n),F(o),void(e=setTimeout((function(){return V("loop-reset")}),o))}if("loop"===J){var l=(n+r)/t;w(u),B(-n),F(l),e=setTimeout((function(){return V("loop-reset")}),l)}return function(){e&&clearTimeout(e)}}}),[J,U]);return $?c.jsxs("div",n(n({ref:f},D),{},{className:a(x({marquee:E}),T),style:n({color:P,backgroundColor:k},C),children:[I&&c.jsx("div",{className:x("left-icon"),children:I}),c.jsx("div",{ref:s,className:x(E?"marquee-wrapper":"content-wrapper"),children:c.jsx("div",{ref:u,style:{transform:null!=_?"translateX(".concat(_,"px)"):void 0,transitionDuration:null!=W?"".concat(W,"ms"):void 0},className:E?x("marquee"):a(x("content",{"wrap-text":!R}),R?"fnx-ellipsis":void 0),children:M})}),A&&c.jsx("div",{className:x("close-icon"),onClick:function(){return G(!1)},children:N||c.jsx(d,{name:"cross"})}),q&&c.jsx("div",{className:x("right-icon"),children:q})]})):null}));S.displayName="NoticeBar";var O=S,I=s("demo-notice-bar"),q={"zh-CN":{text:"人生就像各种各样的巧克力，你永远不会知道那一块属于你",shortText:"生生不息，繁荣昌盛",basicUsage:"基础用法",marqueeMode:"滚动播放",ellipsis:"单行省略",wrap:"多行展示",rightIcon:"右侧图标",closeable:"可关闭",customStyle:"自定义样式",swipe:"垂直滚动"},"en-US":{text:"Life was like a box of chocolates, you never know what you’re gonna get.",shortText:"Live long and prosper",basicUsage:"Basic usage",marqueeMode:"Marquee Mode",ellipsis:"Ellipsis",wrap:"Wrap Mode",rightIcon:"Right Icon",closeable:"Closeable",customStyle:"Custom Style",swipe:"Vertical Scroll"}},N=["In My Life","No Reply","Rock And Roll Music","Words of Love"]}}}))}();
