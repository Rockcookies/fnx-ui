!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,l=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return l}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.bbceece0.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.fbda9b43.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(r,a){"use strict";var l,o,i,c,u,d,s,f,b,h,y,v;return{setters:[function(e){l=e.r,o=e.j,i=e.F,c=e.a},function(e){u=e.D},function(e){d=e.u},function(e){s=e.l,f=e.P,b=e.x,h=e.F,y=e.I},function(e){v=e.s},function(){}],execute:function(){r("default",(function(){var r=n(d(a,"en-US"),1)[0],m=function(e){return c(h,{label:r.area,clickable:!0,rightIcon:c(y,{name:"arrow-right"}),children:c(h.Input,{readOnly:!0,placeholder:r.selectArea,value:e&&e.length>0?e.join(" / "):void 0})})},g=n(l.exports.useState((function(){return r.areaData.map((function(e){return{label:e.label}}))})),2),p=g[0],A=g[1],S=function e(n,r){var a,l=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,l=function(){};return{s:l,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(n);try{for(l.s();!(a=l.n()).done;){var o=a.value;if(o.label===r)return o;if(o.children){var i=e(o.children,r);if(i)return i}}}catch(c){l.e(c)}finally{l.f()}},C=s(),x=l.exports.useCallback((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;v(n).then((function(){C.current||e()}))}),[C]);return o(i,{children:[c(u,{title:r.basicUsage,cardMode:!0,children:c(f.Select,{round:!0,select:c(b,{data:r.areaData,title:r.selectArea,dataNames:{value:"label"}}),children:function(e){return m(e)}})}),c(u,{title:r.customColor,cardMode:!0,children:c(f.Select,{round:!0,select:c(b,{data:r.areaData,title:r.selectArea,dataNames:{value:"label"},activeColor:"var(--fnx-success-color)"}),children:function(e){return m(e)}})}),c(u,{title:r.asyncOptions,cardMode:!0,children:c(f.Select,{round:!0,select:c(b,{data:p,title:r.selectArea,dataNames:{value:"label"},onLoadData:function(n){var t=n[n.length-1];t.loading=!0,A((function(n){return e(n)})),x((function(){var n,a=S(r.areaData,t.label);a&&(t.loading=!1,t.children=null===(n=a.children)||void 0===n?void 0:n.map((function(e){return{label:e.label,children:null==e.children?[]:void 0}})),A((function(n){return e(n)})))}),1e3)}}),children:function(e){return m(e)}})}),c(u,{title:r.customContent,cardMode:!0,children:c(f.Select,{round:!0,select:c(b,{data:r.areaData,title:r.selectArea,dataNames:{value:"label"},slots:{optionsTop:function(e){return c("div",{style:{padding:"10px 16px 0",color:"var(--fnx-gray-500)"},children:r.currentLevel(e+1)})}}}),children:function(e){return m(e)}})})]})}));var a={"zh-CN":{basicUsage:"基础用法",area:"地区",selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",customContent:"自定义选项上方内容",currentLevel:function(e){return"当前为第 ".concat(e," 级")},areaData:[{label:"湖北省",children:[{label:"武汉市",children:[{label:"江岸区"},{label:"硚口区"}]},{label:"宜昌市",disabled:!0,children:[{label:"西陵区"},{label:"夷陵区"}]}]},{label:"江西省",children:[{label:"南昌市",children:[{label:"东湖区"},{label:"西湖区"}]},{label:"景德镇市",children:[{label:"昌江区"},{label:"珠山区"}]}]}]},"en-US":{basicUsage:"Basic usage",area:"Area",selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",customContent:"Custom Content",currentLevel:function(e){return"Current level is ".concat(e)},areaData:[{label:"Hubei",children:[{label:"Wuhan",children:[{label:"JiangAn"},{label:"QiaoKou"}]},{label:"Yichang",disabled:!0,children:[{label:"XiLing"},{label:"YiLing"}]}]},{label:"Jiangxi",children:[{label:"Nanchang",children:[{label:"DongHu"},{label:"XiHu"}]},{label:"Jingdezhen",children:[{label:"ChangJiang"},{label:"ZhuShan"}]}]}]}}}}}))}();
