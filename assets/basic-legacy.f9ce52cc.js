!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,n,i=[],r=!0,c=!1;try{for(t=t.call(e);!(r=(a=t.next()).done)&&(i.push(a.value),!l||i.length!==l);r=!0);}catch(o){c=!0,n=o}finally{try{r||null==t.return||t.return()}finally{if(c)throw n}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,a=new Array(l);t<l;t++)a[t]=e[t];return a}System.register(["./index-legacy.32c99374.js","./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(l){"use strict";var t,a,n,i,r,c,o,u,d;return{setters:[function(e){t=e.t,a=e.T,n=e.P,i=e.F},function(e){r=e.D},function(e){c=e.u},function(e){o=e.j,u=e.F,d=e.a},function(){},function(){},function(){},function(){}],execute:function(){l("default",(function(){var l=e(c(h,"en-US"),1)[0],b=e(c(s,"en-US"),1)[0];return o(u,{children:[d(r,{title:l.basicUsage,cardMode:!0,children:d(t,{data:b.picker,title:l.title,onChange:function(e){a.show(l.toast(e))}})}),d(r,{title:l.defaultValue,cardMode:!0,children:d(t,{data:["中国","美国",{disabled:!0,label:"英国",value:"英国"},"德国","法国","意大利","日本","西班牙"],defaultValue:b.picker[2],title:l.title,onChange:function(e){a.show(l.toast(e))}})}),d(r,{title:l.defaultValue,cardMode:!0,children:d(t.Multi,{data:b.multi,defaultValue:[b.multi[0][2],b.multi[1][1]],title:l.title})}),d(r,{title:l.cascade,cardMode:!0,children:d(t.Cascade,{data:b.cascade,title:l.title,dataNames:{value:"label"}})}),d(r,{title:l.loading,cardMode:!0,children:d(t.Multi,{loading:!0,data:b.multi,title:l.title})}),d(r,{title:l.withPopup,cardMode:!0,children:d(n.Select,{select:d(t,{data:b.picker,title:l.title}),children:function(e){return d(i,{clickable:!0,label:l.city,children:d(i.Input,{readOnly:!0,value:e||l.chooseCity})})}})}),d(r,{title:l.customChildrenKey,cardMode:!0,children:d(t.Cascade,{data:b.cascade,title:l.title,dataNames:{label:"label",value:"label",children:"children"},onConfirm:function(e,l){console.log(e,l)}})})]})}));var s={"zh-CN":{picker:["中国","美国","英国","德国","法国","意大利","日本","西班牙"],multi:[["周一","周二","周三","周四","周五","周六","周天"],["上午","下午","晚上"]],cascade:[{label:"中国",children:[{label:"北京",children:[{label:"海淀区"},{label:"朝阳区"}]},{label:"上海",children:[{label:"闸北区"},{label:"静安区"}]}]},{label:"美国",children:[{label:"纽约",children:[{label:"曼哈顿"},{label:"布鲁克林"}]},{label:"加利福尼亚",children:[{label:"洛杉矶"},{label:"旧金山"}]}]}]},"en-US":{picker:["China","United States","United Kingdom","Germany","France","Italy","Japan","Spain"],multi:[["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],["Morning","Afternoon","Evening"]],cascade:[{label:"China",children:[{label:"Beijing",children:[{label:"Haidian"},{label:"Chaoyang"}]},{label:"Shanghai",children:[{label:"Zhabei"},{label:"Jingan"}]}]},{label:"United State",children:[{label:"New York",children:[{label:"Manhattan"},{label:"Brooklyn"}]},{label:"California",children:[{label:"Los Angeles"},{label:"San Francisco"}]}]}]}},h={"zh-CN":{basicUsage:"基础用法",title:"标题",toast:function(e){return"当前值：".concat(e)},defaultValue:"默认选中项",multiple:"多列选择",cascade:"级联选择",loading:"加载状态",withPopup:"搭配弹出层使用",city:"城市",chooseCity:"选择城市",customChildrenKey:"自定义 Columns 结构"},"en-US":{basicUsage:"Basic Usage",title:"Title",toast:function(e){return"Value：".concat(e)},defaultValue:"Default Value",multiple:"Multiple Columns",cascade:"Cascade",loading:"Loading",withPopup:"With Popup",city:"City",chooseCity:"Choose City",customChildrenKey:"Custom Columns Fields"}}}}}))}();
