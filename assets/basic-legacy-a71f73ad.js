!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["data","title","placeholder","onLoadData","activeColor","className"];function t(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(n,t,r){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,t||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=l.call(t)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,n)||u(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=u(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==t.return||t.return()}finally{if(i)throw l}}}}function u(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-1bd67aeb.js","./index-legacy-21a5cae2.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-467f9938.js","./use-unmounted-ref-legacy-0c7689ef.js","./index-legacy-c68971b2.js","./index-legacy-edb26982.js","./misc-legacy-f59b2e17.js","./config-component-props-legacy-b5279410.js","./use-merged-prop-ref-legacy-7929f994.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-2d265d79.js","./index-legacy-184360dc.js","./index-legacy-a3abde2a.js","./format-legacy-4dfc8f09.js","./config-data-names-legacy-483ee0c6.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./index-legacy-2e96c741.js","./constants-legacy-732fdcb2.js","./use-merged-prop-legacy-58e913d1.js","./use-controlled-state-legacy-c2785d55.js","./use-focus-legacy-cc35d086.js","./scroll-legacy-32145838.js","./detect-legacy-199d634d.js","./use-creation-legacy-9d7fb02d.js","./use-on-popup-open-legacy-8b2802da.js","./event-legacy-359ec6a3.js","./touch-helper-legacy-732fd97d.js","./index-legacy-d4cc4c41.js","./react-legacy-8aa83272.js","./index-legacy-b06911b5.js","./style-legacy-d9487b87.js","./index-legacy-99ec861d.js","./raf-legacy-b5db696e.js","./use-safe-state-legacy-aa82aec4.js","./use-get-state-legacy-ade4366f.js"],(function(e,r){"use strict";var l,u,s,d,f,y,b,p,h,g,v,m,j,x,S,O,C,A,w,N;return{setters:[function(e){l=e.r,u=e.j,s=e.c,d=e.a},function(e){f=e.D},function(e){y=e.u},function(e){b=e.F},function(e){p=e.u},function(e){h=e.I},function(e){g=e.P},function(e){v=e.n,m=e.s},function(e){j=e.c},function(e){x=e.u},function(e){S=e.u},function(e){O=e.L},function(e){C=e.u},function(e){A=e.T},function(e){w=e.c},function(e){N=e.c},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e=i(y(E,"en-US"),1)[0],n=function(n){return u.jsx(b,{label:e.area,clickable:!0,rightIcon:u.jsx(h,{name:"arrow-right"}),children:u.jsx(b.Input,{readOnly:!0,placeholder:e.selectArea,value:n&&n.length>0?n.join(" / "):void 0})})},r=i(l.useState((function(){return e.areaData.map((function(e){return{label:e.label}}))})),2),a=r[0],o=r[1],s=function e(n,t){var r,a=c(n);try{for(a.s();!(r=a.n()).done;){var l=r.value;if(l.label===t)return l;if(l.children){var o=e(l.children,t);if(o)return o}}}catch(i){a.e(i)}finally{a.f()}},d=p(),v=l.useCallback((function(e){m(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3).then((function(){d.current||e()}))}),[d]);return u.jsxs(u.Fragment,{children:[u.jsx(f,{title:e.basicUsage,cardMode:!0,children:u.jsx(g.Select,{round:!0,select:u.jsx(k,{data:e.areaData,title:e.selectArea,dataNames:{value:"label"}}),children:function(e){return n(e)}})}),u.jsx(f,{title:e.customColor,cardMode:!0,children:u.jsx(g.Select,{round:!0,select:u.jsx(k,{data:e.areaData,title:e.selectArea,dataNames:{value:"label"},activeColor:"var(--fnx-success-color)"}),children:function(e){return n(e)}})}),u.jsx(f,{title:e.asyncOptions,cardMode:!0,children:u.jsx(g.Select,{round:!0,select:u.jsx(k,{data:a,title:e.selectArea,dataNames:{value:"label"},onLoadData:function(n){var r=n[n.length-1];r.loading=!0,o((function(e){return t(e)})),v((function(){var n,a=s(e.areaData,r.label);a&&(r.loading=!1,r.children=null===(n=a.children)||void 0===n?void 0:n.map((function(e){return{label:e.label,children:null==e.children?[]:void 0}})),o((function(e){return t(e)})))}),1e3)}}),children:function(e){return n(e)}})}),u.jsx(f,{title:e.customContent,cardMode:!0,children:u.jsx(g.Select,{round:!0,select:u.jsx(k,{data:e.areaData,title:e.selectArea,dataNames:{value:"label"},slots:{optionsTop:function(n){return u.jsx("div",{style:{padding:"10px 16px 0",color:"var(--fnx-gray-500)"},children:e.currentLevel(n+1)})}}}),children:function(e){return n(e)}})})]})}));var r=N({label:"label",value:"value",loading:"loading",disabled:"disabled",children:"children"}),D=d("fnx-cascader");function I(e,n,t){if(!Array.isArray(t)||t.length<=0)return[];for(var r,a=[{options:t}],l=function(){var t=a[o],r=n[o],l=t.options.findIndex((function(n){return e.value(n)===r&&!e.disabled(n)})),i=t.options[l];if(!i)return{v:a};if(t.active=i,e.loading(i))return a.push({options:[]}),{v:a};var c=e.children(i);if(!Array.isArray(c))return{v:a};a.push({options:c})},o=0;o<n.length;o++)if(r=l())return r.v;return a}function P(e){var n,t=[],r=c(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(!a.active)return t;t.push(a.active)}}catch(l){r.e(l)}finally{r.f()}return t}var T=j({defaultValue:[],dataNames:{},onConfirm:v,onCancel:v,onChange:v,swipeable:!1,closeIcon:u.jsx(h,{name:"cross"}),slots:{}}),L=l.forwardRef((function(e,t){var c=i(T(e),2),d=c[0],f=d.defaultValue,y=d.dataNames,b=d.onConfirm,p=d.onCancel,g=d.onChange,v=d.swipeable,m=d.closeIcon,j=d.slots,N=c[1],L=N.data,k=N.title,E=N.placeholder,M=N.onLoadData,U=N.activeColor,J=N.className,z=o(N,n),B=C("cascader"),F=r(y),H=i(l.useState((function(){return I(F,f,L)})),2),K=H[0],V=H[1],W=x(K),X=i(l.useState((function(){return Math.max(P(K).length-1,0)})),2),Y=X[0],$=X[1];S((function(){var e=I(F,P(W.current).map((function(e){return F.value(e)})),L);V(e),$((function(n){return w(n,0,Math.max(e.length-1,0))}))}),[F,L,W]);var q=function(e,n,t,r){var l,o=!!F.loading(n),i=n===r,c=F.disabled(n),s=F.label(n);return o?l=u.jsx(h.Spinner,{className:D("loading-icon")}):i&&(l=u.jsx(h,{name:"success",className:D("selected-icon")})),u.jsxs("li",{role:"menuitemradio",tabIndex:c?void 0:i?0:-1,"aria-checked":i?"true":void 0,"aria-disabled":c?"true":void 0,className:D("option",{selected:i,disabled:c,loading:o}),style:{color:i?U:void 0},onClick:function(){return function(e,n){if(!F.disabled(n)){var t=K.slice(0,e+1).map((function(t,r){return e===r?a(a({},t),{},{active:n}):t})),r=F.children(n),l=Array.isArray(r)?r:void 0,o=P(t),i=o.map((function(e){return F.value(e)}));if(g(i,o),l&&l.length>0)return V(t.concat({options:l})),void $(e+1);if(l&&l.length<=0||!M)return V(t),void b(i,o);!F.loading(n)&&M&&M(P(t)),V(t.concat([{options:[]}])),$(e+1)}}(e,n)},children:[j.option?j.option(n,{selected:i}):u.jsx("span",{className:D("label"),children:s}),l]},t)};return u.jsxs("div",a(a({className:s(D(),J)},z),{},{ref:t,children:[u.jsxs("div",{className:D("header"),children:[u.jsx("div",{className:D("title"),children:k}),!1!==m&&u.jsx("span",{className:D("close-icon"),onClick:function(){p()},children:m||u.jsx(h,{name:"cross"})})]}),function(){if(K.length)return u.jsx(A,{animated:!0,swipeable:v,tabSwipeThreshold:0,className:D("tabs"),activeKey:Y,trackColor:U,onChange:function(e){return $(parseInt(e,10))},children:K.map((function(e,n){var t=K[n-1];return u.jsxs(A.Panel,{title:u.jsx("span",{className:D("tab-title",{unselected:!e.active}),children:e.active?F.label(e.active):E||B.select}),children:[j.optionsTop&&j.optionsTop(n),u.jsxs("div",{className:D("options-container"),children:[u.jsx("ul",{role:"menu",className:D("options"),children:e.options.map((function(t,r){return q(n,t,r,e.active)}))}),t&&t.active&&F.loading(t.active)&&u.jsx(O,{className:D("loading"),color:U,size:30})]}),j.optionsBottom&&j.optionsBottom(n)]},n)}))})}()]}))}));L.displayName="Cascader";var k=L,E={"zh-CN":{basicUsage:"基础用法",area:"地区",selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",customContent:"自定义选项上方内容",currentLevel:function(e){return"当前为第 ".concat(e," 级")},areaData:[{label:"湖北省",children:[{label:"武汉市",children:[{label:"江岸区"},{label:"硚口区"}]},{label:"宜昌市",disabled:!0,children:[{label:"西陵区"},{label:"夷陵区"}]}]},{label:"江西省",children:[{label:"南昌市",children:[{label:"东湖区"},{label:"西湖区"}]},{label:"景德镇市",children:[{label:"昌江区"},{label:"珠山区"}]}]}]},"en-US":{basicUsage:"Basic usage",area:"Area",selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",customContent:"Custom Content",currentLevel:function(e){return"Current level is ".concat(e)},areaData:[{label:"Hubei",children:[{label:"Wuhan",children:[{label:"JiangAn"},{label:"QiaoKou"}]},{label:"Yichang",disabled:!0,children:[{label:"XiLing"},{label:"YiLing"}]}]},{label:"Jiangxi",children:[{label:"Nanchang",children:[{label:"DongHu"},{label:"XiHu"}]},{label:"Jingdezhen",children:[{label:"ChangJiang"},{label:"ZhuShan"}]}]}]}}}}}))}();
