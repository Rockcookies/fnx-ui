!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==l)return;var r,n,i=[],t=!0,c=!1;try{for(l=l.call(e);!(t=(r=l.next()).done)&&(i.push(r.value),!a||i.length!==a);t=!0);}catch(o){c=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(c)throw n}}return i}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return a(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,a){(null==a||a>e.length)&&(a=e.length);for(var l=0,r=new Array(a);l<a;l++)r[l]=e[l];return r}var l=document.createElement("style");l.innerHTML=".demo-form__submit{margin-top:var(--fnx-padding-md)}\n",document.head.appendChild(l),System.register(["./demo-dog-01-legacy.3b1cfb02.js","./index-legacy.6c72ba7c.js","./use-demo-translate-legacy.a40470d5.js","./index-legacy.a2a3e447.js","./index-legacy.7308b9a9.js","./vendor-legacy.8abf57f5.js","./use-theme-legacy.11e698e2.js","./scroll-legacy.a10306e2.js","./history-utils-legacy.110e5e10.js"],(function(a){"use strict";var l,r,n,i,t,c,o,d,s,u,h,b,m,p,k,f,y,g,v,P,I;return{setters:[function(e){l=e.d},function(e){r=e.D},function(e){n=e.u},function(e){i=e.u,t=e.z,c=e.F,o=e.a,d=e.p,s=e.c,u=e.v,h=e.q,b=e.t,m=e.U,p=e.P,k=e.s,f=e.y,y=e.A},function(e){g=e.j,v=e.F,P=e.a,I=e.b},function(){},function(){},function(){},function(){}],execute:function(){a("default",(function(){var a=e(n(w,"en-US"),1)[0],I=e(n(U,"en-US"),1)[0],x=e(i(!1),2),C=x[0],q=x[1];return g(v,{children:[P(r,{title:a.basicUsage,cardMode:!0,children:g(t,{onFinish:function(e){return console.log(e)},onFinishFailed:function(e){return console.log(e)},children:[P(t.Item,{label:a.username,name:"username",rules:[{required:!0,message:a.requireUsername}],children:P(c.Input,{placeholder:a.username})}),P(t.Item,{label:a.password,name:"password",rules:[{required:!0,message:a.requirePassword}],children:P(c.Input,{type:"password",placeholder:a.password})}),P(o,{type:"primary",htmlType:"submit",shape:"round",block:!0,className:S("submit"),children:a.submit})]})}),P(r,{title:a.validateRules,cardMode:!0,children:g(t,{onFinish:function(e){return console.log(e)},onFinishFailed:function(e){return console.log(e)},children:[P(t.Item,{label:a.label,name:"pattern",rules:[{required:!0,pattern:/\d{6}/,message:a.message}],children:P(c.Input,{placeholder:a.pattern})}),P(t.Item,{label:a.label,name:"validator",rules:[{required:!0,validator:function(e,l){return/\d{6}/.test(l)?Promise.resolve():Promise.reject(a.message)}}],children:P(c.Input,{placeholder:a.validator})}),P(t.Item,{label:a.label,name:"asyncValidator",validateTrigger:"onBlur",rules:[{required:!0,validator:function(e,l){return new Promise((function(e,r){q(!0),setTimeout((function(){q(!1),/\d{6}/.test(l)?e(/\d{6}/.test(l)):r(a.message)}),1e3)}))}}],children:P(c.Input,{placeholder:a.asyncValidator})}),P(o,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:S("submit"),loading:C,children:a.submit})]})}),P(r,{title:a.fieldType,cardMode:!0,children:g(t,{onFinish:function(e){return console.log(e)},onFinishFailed:function(e){return console.log(e)},initialValues:{switch:!0,checkbox:!1,checkboxGroup:["China"],stepper:1,rate:3,uploader:[{url:l,status:"done"}],timePicker:"14:00"},children:[P(t.Item,{label:a.switch,name:"switch",valuePropName:"checked",children:P(d,{size:20})}),P(t.Item,{label:a.checkbox,name:"checkbox",valuePropName:"checked",children:P(s,{})}),P(t.Item,{label:a.checkboxGroup,name:"checkboxGroup",children:g(s.Group,{direction:"horizontal",children:[P(s,{value:"China",children:a.china}),P(s,{value:"USA",children:a.usa})]})}),P(t.Item,{label:a.radio,name:"radio",children:g(u.Group,{direction:"horizontal",children:[P(u,{value:"black",children:a.black}),P(u,{value:"white",children:a.white})]})}),P(t.Item,{label:a.stepper,name:"stepper",children:P(h,{})}),P(t.Item,{label:a.rate,name:"rate",children:P(b,{count:6})}),P(t.Item,{label:a.uploader,name:"uploader",children:P(m,{})}),P(t.Item,{name:"picker",plain:!0,children:P(p.Select,{select:P(k,{data:I.pickerColumns}),children:function(e){return P(c,{label:a.picker,clickable:!0,children:P(c.Input,{readOnly:!0,value:e,placeholder:a.pickerPlaceholder})})}})}),P(t.Item,{name:"timePicker",plain:!0,children:P(p.Select,{select:P(f.TimePicker,{}),children:function(e){return P(c,{label:a.timePickerLabel,clickable:!0,children:P(c.Input,{readOnly:!0,value:e,placeholder:a.timePickerPlaceholder})})}})}),P(t.Item,{name:"areaPicker",plain:!0,children:P(p.Select,{select:P(k.Cascade,{data:I.cascade,dataNames:{label:"label",value:"label",children:"children"}}),children:function(e){var l=e&&e.join("/");return P(c,{label:a.areaPicker,clickable:!0,children:P(c.Input,{readOnly:!0,value:l,placeholder:a.areaPickerPlaceholder})})}})}),P(t.Item,{name:"calendar",plain:!0,children:P(p.Select,{round:!0,select:P(y,{}),children:function(e){return P(c,{label:a.calendarLabel,clickable:!0,children:P(c.Input,{readOnly:!0,value:e,placeholder:a.calendarPlaceholder})})}})}),P(o,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:S("submit"),children:a.submit})]})})]})}));var S=I("demo-form"),w={"zh-CN":{basicUsage:"基础用法",validateRules:"校验规则",fieldType:"表单项类型",submit:"提交",username:"用户名",password:"密码",requireUsername:"请填写用户名",requirePassword:"请填写密码",label:"文本",message:"请输入6位数字",pattern:"正则校验",validator:"函数校验",validating:"验证中...",asyncValidator:"异步函数校验",black:"黑",white:"白",china:"中国",usa:"美国",rate:"评分",radio:"单选框",switch:"开关",slider:"滑块",picker:"选择器",stepper:"步进器",checkbox:"复选框",uploader:"文件上传",checkboxGroup:"复选框组",requireCheckbox:"请勾选复选框",pickerPlaceholder:"点击选择城市",timePickerLabel:"时间选择",timePickerPlaceholder:"点击选择时间",areaPicker:"地区选择",areaPickerPlaceholder:"点击选择地区",calendarLabel:"日历",calendarPlaceholder:"点击选择日期"},"en-US":{basicUsage:"basicUsage",validateRules:"validateRules",fieldType:"Field Type",submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required",label:"label",message:"please enter six number",pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",black:"Black",white:"White",china:"China",usa:"USA",rate:"Rate",radio:"Radio",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required",pickerPlaceholder:"Select City",timePickerLabel:"Datetime Picker",timePickerPlaceholder:"Select Time",areaPicker:"Area Picker",areaPickerPlaceholder:"Select Area",calendarLabel:"Calendar",calendarPlaceholder:"Select date"}},U={"zh-CN":{pickerColumns:["中国","美国","英国","德国","法国","意大利","日本","西班牙"],cascade:[{label:"中国",children:[{label:"北京",children:[{label:"海淀区"},{label:"朝阳区"}]},{label:"上海",children:[{label:"闸北区"},{label:"静安区"}]}]},{label:"美国",children:[{label:"纽约",children:[{label:"曼哈顿"},{label:"布鲁克林"}]},{label:"加利福尼亚",children:[{label:"洛杉矶"},{label:"旧金山"}]}]}]},"en-US":{pickerColumns:["China","United States","United Kingdom","Germany","France","Italy","Japan","Spain"],cascade:[{label:"China",children:[{label:"Beijing",children:[{label:"Haidian"},{label:"Chaoyang"}]},{label:"Shanghai",children:[{label:"Zhabei"},{label:"Jingan"}]}]},{label:"United State",children:[{label:"New York",children:[{label:"Manhattan"},{label:"Brooklyn"}]},{label:"California",children:[{label:"Los Angeles"},{label:"San Francisco"}]}]}]}}}}}))}();