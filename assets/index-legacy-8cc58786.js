!function(){var e=["className","children"],t=["className","children"];function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,c,o,a=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(l){s=!0,i=l}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-56dc3fc1.js","./config-component-props-legacy-b5279410.js","./use-merged-prop-ref-legacy-0d908859.js","./detect-legacy-199d634d.js","./event-legacy-359ec6a3.js","./use-on-popup-open-legacy-fd933c08.js","./touch-helper-legacy-732fd97d.js","./misc-legacy-f59b2e17.js","./raf-legacy-b5db696e.js","./react-legacy-74217e46.js","./use-safe-state-legacy-530cd51c.js","./format-legacy-4dfc8f09.js"],(function(r,c){"use strict";var u,s,l,f,p,v,d,m,w,h,y,g,b,O,j,S,x,I,A,E;return{setters:[function(e){u=e.r,s=e.R,l=e.b,f=e.c,p=e.j,v=e.a},function(e){d=e.c},function(e){m=e.u},function(e){w=e.I},function(e){h=e.a,y=e.l,g=e.b,b=e.p},function(e){O=e.u},function(e){j=e.T},function(e){S=e.n},function(e){x=e.d},function(e){I=e.t},function(e){A=e.u},function(e){E=e.c}],execute:function(){function c(){var e=a(u.useState((function(){return w?window.innerWidth:0})),2),t=e[0],n=e[1],r=a(u.useState((function(){return w?window.innerHeight:0})),2),i=r[0],c=r[1];return u.useEffect((function(){return h((function(){n(window.innerWidth),c(window.innerHeight)}))}),[]),u.useMemo((function(){return{width:t,height:i}}),[t,i])}r("u",c);var T=function(e){var t=e.propsRef,n=e.swipeLength,r=e.rootRef,i=u.useRef({swipeLength:0,swipeSize:0,wrapperOffset:0});i.current.swipeLength=n;var c=a(A(0),2),o=c[0],s=c[1],l=u.useCallback((function(e){s(e),i.current.wrapperOffset=e}),[s]),f=a(A(0),2),p=f[0],v=f[1],d=u.useCallback((function(e){v(e),i.current.swipeSize=e}),[v]),m=a(u.useState("none"),2),w=m[0],h=m[1],y=a(A(),2),g=y[0],b=y[1],O=u.useCallback((function(e){b(e),i.current.activeIndex=e}),[b]),j=a(A(!1),2),S=j[0],x=j[1],I=u.useCallback((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.current,c=r.swipeLength,o=r.swipeSize,a=r.swipingTimer;if(n.critical&&-e>=(c-1)*o?h("first"):n.critical&&e>=0?h("last"):h("none"),l(e),n.swiping){var u=t.current.duration;x(!0),a&&clearTimeout(a),i.current.swipingTimer=setTimeout((function(){var e=i.current,t=e.activeIndex,n=void 0===t?0:t,r=e.swipeSize;i.current.swipingTimer=void 0,h("none"),x(!1),l(-n*r)}),u)}}),[t,x,l]),T=u.useCallback((function(){var e=i.current,n=e.activeIndex,r=void 0===n?0:n,c=e.swipeLength,o=e.swipeSize;if(!(c<=1)){var a=t.current.loop,u=r>=c-1?0:r+1;O(u),a&&r===c-1?I(-c*o,{swiping:!0,critical:!0}):I(-u*o,{swiping:!0})}}),[I,t,O]),C=u.useCallback((function(){var e=i.current,n=e.activeIndex,r=void 0===n?0:n,c=e.swipeLength,o=e.swipeSize;if(!(c<=1)){var a=t.current.loop,u=r<=0?c-1:r-1;O(u),a&&0===r?I(o,{swiping:!0,critical:!0}):I(-u*o,{swiping:!0})}}),[I,t,O]),k=u.useCallback((function(){x(!1);var e=i.current.swipingTimer;e&&clearTimeout(e)}),[x]),P=u.useCallback((function(){var e=i.current.autoplayTimer;e&&clearTimeout(e)}),[]),L=u.useCallback((function(){var e=t.current.autoplay,n=i.current.swipeLength;P(),e<=0||n<=1||(i.current.autoplayTimer=setTimeout((function(){T(),L()}),e))}),[T,t,P]),R=u.useCallback((function(){var e=i.current,n=e.swipeLength,c=e.activeIndex,o=t.current.defaultActiveIndex,a=t.current,u=a.vertical,s=a.height,f=a.width,p=u?s:f;if(p<=0){var v,m=null===(v=r.current)||void 0===v?void 0:v.getBoundingClientRect();m&&(p=u?m.height:m.width)}var w=E(null!=c?c:o,0,Math.max(n-1,0)),y=-w*p;x(!1),h("none"),d(p),O(w),l(y)}),[t,r,O,d,x,l]);return{stateRef:i,wrapperOffset:o,setWrapperOffset:l,swipeSize:p,swipeOffset:w,activeIndex:g,setActiveIndex:O,swiping:S,move:I,next:T,prev:C,stopTransition:k,stopAutoplay:P,startAutoplay:L,reload:R}},C=v("fnx-swipe"),k=d({height:0,width:0,autoplay:3e3,duration:500,defaultActiveIndex:0,loop:!0,vertical:!1,touchable:!0,indicator:null,stopPropagation:!0,onActiveIndexChange:S}),P=u.forwardRef((function(t,r){var v=a(k(t),2),d=v[0],w=v[1],h=w.className,S=w.children,A=o(w,e),E=d.autoplay,P=d.duration,L=d.vertical,R=d.touchable,z=d.indicator,N=m(d),D=u.useRef(null),M=u.useRef(null),X=c(),Y=I(S),W=Y.filter((function(e){return s.isValidElement(e)})).length,H=u.useRef(!1),V=T({propsRef:N,swipeLength:W,rootRef:D}),B=V.stateRef,U=V.wrapperOffset,$=V.setWrapperOffset,q=V.swipeSize,F=V.swipeOffset,G=V.activeIndex,J=V.setActiveIndex,K=V.swiping,Q=V.move,Z=V.next,_=V.prev,ee=V.stopTransition,te=V.stopAutoplay,ne=V.startAutoplay,re=V.reload,ie=u.useCallback((function(e){ee(),te(),e&&e(),ne()}),[ne,te,ee]),ce=u.useMemo((function(){return{element:D.current||null,wrapper:M.current||null,reset:function(){ie(re)},next:function(){ie(Z)},prev:function(){ie(_)},swipeTo:function(e,t){ie((function(){var n=B.current.swipeSize;J(e),Q(-e*n,{swiping:t&&t.animation})}))}}}),[Q,Z,_,re,ie,J,B]);u.useImperativeHandle(r,(function(){return ce}),[ce]);var oe=u.useMemo((function(){for(var e=[],t=0;t<W;t++){var n={};q>0&&F&&(0===t&&"first"===F&&(n.transform="translate".concat(L?"Y":"X","(").concat(W*q,"px)")),t===W-1&&"last"===F&&(n.transform="translate".concat(L?"Y":"X","(-").concat(W*q,"px)"))),q>0&&(n[L?"height":"width"]="".concat(q,"px")),e.push(n)}return e}),[F,L,q,W]);u.useEffect((function(){if(E>0)return ne(),function(){te()}}),[E,ne,te]),u.useEffect((function(){null!=G&&(H.current?N.current.onActiveIndexChange(G):H.current=!0)}),[G,N]),u.useEffect((function(){return y((function(e){"hidden"===e?te():ne()}))}),[ne,te]),u.useEffect((function(){ie(re)}),[W,X,ne,re,te,ie]),O((function(){return x((function(){return ie(re)}))})),u.useEffect((function(){var e=M.current;if(e&&!1!==R){var t=new j,n=0,r=0,i=0,c=!1,o=function(e){t.start(e),n=Date.now(),c=!1},a=function(e){t.move(e);var n=N.current,o=n.vertical,a=n.stopPropagation,u=n.loop,s=t.touchData;if(c)r=t.isVertical()?t.touchData.deltaY:t.touchData.deltaX,Q(i+r,{critical:u});else{var l=o?"vertical":"horizontal";s.direction===l&&(ee(),te(),re(),c=!0,i=B.current.wrapperOffset||0)}c&&s.offsetY>s.offsetX===o&&b(e,a)},u=function(){c&&(!function(){var e=Date.now()-n,t=r/e,c=B.current,o=c.activeIndex,a=void 0===o?0:o,u=c.swipeSize,s=c.swipeLength,l=N.current.loop,f=Math.abs(t)>.25;if((f||Math.abs(r)>u/2)&&u>0&&s>1)if(f)l?r<0?Z():_():r<0&&a<s-1?Z():r>0&&a>0?_():Q(-a*u,{swiping:!0});else if((i+=r)>0)J(l?s-1:0),Q(l?u:0,{swiping:!0,critical:l});else if(-i>u*(s-1))J(l?0:s-1),Q(-u*(l?s:s-1),{swiping:!0,critical:l});else{var p=Math.ceil(-i/u);J(p),Q(-p-u,{swiping:!0,critical:l})}else Q(-a*u,{swiping:!0})}(),c=!1,ne())};return g(e,"touchstart",o,{passive:!0}),g(e,"touchmove",a,{passive:!1}),g(e,"touchend",u,{passive:!0}),g(e,"touchcancel",u,{passive:!0}),function(){e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",u),e.removeEventListener("touchcancel",u)}}}),[Q,Z,_,N,re,J,$,ne,B,te,ee,R]);var ae;return l("div",i(i({ref:D,className:f(C({vertical:L}),h)},A),{},{children:[p("div",{className:C("wrapper"),style:(ae={},ae.transform="translate".concat(L?"Y":"X","(").concat(U,"px)"),q>0&&(ae[L?"height":"width"]="".concat(q*W,"px")),K&&(ae.transitionDuration="".concat(P,"ms")),ae),ref:M,children:Y.map((function(e,t){if(u.isValidElement(e)){var r=e.props.style,c=e.key,o=i({},oe[t]);return"object"===n(r)&&(o=i(i({},o),r)),s.cloneElement(e,i(i({},e.props),{},{style:o,key:null!=c?c:t}))}return e}))}),function(){if(!(!1===z||W<=0))return null==z||!0===z?p("div",{className:C("indicators"),children:new Array(W).fill(0).map((function(e,t){return p("i",{className:C("indicator",{active:t===(G||0)})},t)}))}):z}()]}))}));P.displayName="Swipe";var L=P,R=v("fnx-swipe-item"),z=u.forwardRef((function(e,n){var r=e.className,c=e.children,a=o(e,t);return p("div",i(i({className:f(R(),r)},a),{},{ref:n,children:c}))}));z.displayName="SwipeItem";var N=z,D=L;D.Item=N;r("S",D)}}}))}();
