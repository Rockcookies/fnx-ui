import{d as e}from"./demo-dog-01.7b78a0b6.js";import{D as a}from"./index.36ad293e.js";import{u as l}from"./use-demo-translate.902c2104.js";import{u as r,A as i,F as c,a as n,q as d,c as s,w as t,r as o,v as h,U as m,P as b,t as p,z as u,E as k}from"./index.0867856e.js";import{j as P,F as g,a as v,b as y}from"./index.53e205ba.js";import"./vendor.91a89506.js";import"./use-theme.882b248e.js";import"./scroll.d13c3de3.js";import"./history-utils.bc3c1dee.js";const I=y("demo-form"),w={"zh-CN":{basicUsage:"基础用法",validateRules:"校验规则",fieldType:"表单项类型",submit:"提交",username:"用户名",password:"密码",requireUsername:"请填写用户名",requirePassword:"请填写密码",label:"文本",message:"请输入6位数字",pattern:"正则校验",validator:"函数校验",validating:"验证中...",asyncValidator:"异步函数校验",black:"黑",white:"白",china:"中国",usa:"美国",rate:"评分",radio:"单选框",switch:"开关",slider:"滑块",picker:"选择器",stepper:"步进器",checkbox:"复选框",uploader:"文件上传",checkboxGroup:"复选框组",requireCheckbox:"请勾选复选框",pickerPlaceholder:"点击选择城市",timePickerLabel:"时间选择",timePickerPlaceholder:"点击选择时间",areaPicker:"地区选择",areaPickerPlaceholder:"点击选择地区",calendarLabel:"日历",calendarPlaceholder:"点击选择日期"},"en-US":{basicUsage:"basicUsage",validateRules:"validateRules",fieldType:"Field Type",submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required",label:"label",message:"please enter six number",pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",black:"Black",white:"White",china:"China",usa:"USA",rate:"Rate",radio:"Radio",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required",pickerPlaceholder:"Select City",timePickerLabel:"Datetime Picker",timePickerPlaceholder:"Select Time",areaPicker:"Area Picker",areaPickerPlaceholder:"Select Area",calendarLabel:"Calendar",calendarPlaceholder:"Select date"}},S={"zh-CN":{pickerColumns:["中国","美国","英国","德国","法国","意大利","日本","西班牙"],cascade:[{label:"中国",children:[{label:"北京",children:[{label:"海淀区"},{label:"朝阳区"}]},{label:"上海",children:[{label:"闸北区"},{label:"静安区"}]}]},{label:"美国",children:[{label:"纽约",children:[{label:"曼哈顿"},{label:"布鲁克林"}]},{label:"加利福尼亚",children:[{label:"洛杉矶"},{label:"旧金山"}]}]}]},"en-US":{pickerColumns:["China","United States","United Kingdom","Germany","France","Italy","Japan","Spain"],cascade:[{label:"China",children:[{label:"Beijing",children:[{label:"Haidian"},{label:"Chaoyang"}]},{label:"Shanghai",children:[{label:"Zhabei"},{label:"Jingan"}]}]},{label:"United State",children:[{label:"New York",children:[{label:"Manhattan"},{label:"Brooklyn"}]},{label:"California",children:[{label:"Los Angeles"},{label:"San Francisco"}]}]}]}};function U(){const[y]=l(w,"en-US"),[U]=l(S,"en-US"),[x,C]=r(!1);return P(g,{children:[v(a,{title:y.basicUsage,cardMode:!0,children:P(i,{onFinish:e=>console.log(e),onFinishFailed:e=>console.log(e),children:[v(i.Item,{label:y.username,name:"username",rules:[{required:!0,message:y.requireUsername}],children:v(c.Input,{placeholder:y.username})}),v(i.Item,{label:y.password,name:"password",rules:[{required:!0,message:y.requirePassword}],children:v(c.Input,{type:"password",placeholder:y.password})}),v(n,{type:"primary",htmlType:"submit",shape:"round",block:!0,className:I("submit"),children:y.submit})]})}),v(a,{title:y.validateRules,cardMode:!0,children:P(i,{onFinish:e=>console.log(e),onFinishFailed:e=>console.log(e),children:[v(i.Item,{label:y.label,name:"pattern",rules:[{required:!0,pattern:/\d{6}/,message:y.message}],children:v(c.Input,{placeholder:y.pattern})}),v(i.Item,{label:y.label,name:"validator",rules:[{required:!0,validator:(e,a)=>/\d{6}/.test(a)?Promise.resolve():Promise.reject(y.message)}],children:v(c.Input,{placeholder:y.validator})}),v(i.Item,{label:y.label,name:"asyncValidator",validateTrigger:"onBlur",rules:[{required:!0,validator:(e,a)=>new Promise(((e,l)=>{C(!0),setTimeout((()=>{C(!1),/\d{6}/.test(a)?e(/\d{6}/.test(a)):l(y.message)}),1e3)}))}],children:v(c.Input,{placeholder:y.asyncValidator})}),v(n,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:I("submit"),loading:x,children:y.submit})]})}),v(a,{title:y.fieldType,cardMode:!0,children:P(i,{onFinish:e=>console.log(e),onFinishFailed:e=>console.log(e),initialValues:{switch:!0,checkbox:!1,checkboxGroup:["China"],stepper:1,rate:3,uploader:[{url:e,status:"done"}],timePicker:"14:00"},children:[v(i.Item,{label:y.switch,name:"switch",valuePropName:"checked",children:v(d,{size:20})}),v(i.Item,{label:y.checkbox,name:"checkbox",valuePropName:"checked",children:v(s,{})}),v(i.Item,{label:y.checkboxGroup,name:"checkboxGroup",children:P(s.Group,{direction:"horizontal",children:[v(s,{value:"China",children:y.china}),v(s,{value:"USA",children:y.usa})]})}),v(i.Item,{label:y.radio,name:"radio",children:P(t.Group,{direction:"horizontal",children:[v(t,{value:"black",children:y.black}),v(t,{value:"white",children:y.white})]})}),v(i.Item,{label:y.stepper,name:"stepper",children:v(o,{})}),v(i.Item,{label:y.rate,name:"rate",children:v(h,{count:6})}),v(i.Item,{label:y.uploader,name:"uploader",children:v(m,{})}),v(i.Item,{name:"picker",plain:!0,children:v(b.Select,{select:v(p,{data:U.pickerColumns}),children:e=>v(c,{label:y.picker,clickable:!0,children:v(c.Input,{readOnly:!0,value:e,placeholder:y.pickerPlaceholder})})})}),v(i.Item,{name:"timePicker",plain:!0,children:v(b.Select,{select:v(u.TimePicker,{}),children:e=>v(c,{label:y.timePickerLabel,clickable:!0,children:v(c.Input,{readOnly:!0,value:e,placeholder:y.timePickerPlaceholder})})})}),v(i.Item,{name:"areaPicker",plain:!0,children:v(b.Select,{select:v(p.Cascade,{data:U.cascade,dataNames:{label:"label",value:"label",children:"children"}}),children:e=>{const a=e&&e.join("/");return v(c,{label:y.areaPicker,clickable:!0,children:v(c.Input,{readOnly:!0,value:a,placeholder:y.areaPickerPlaceholder})})}})}),v(i.Item,{name:"calendar",plain:!0,children:v(b.Select,{round:!0,select:v(k,{}),children:e=>v(c,{label:y.calendarLabel,clickable:!0,children:v(c.Input,{readOnly:!0,value:e,placeholder:y.calendarPlaceholder})})})}),v(n,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:I("submit"),children:y.submit})]})})]})}export{U as default};
