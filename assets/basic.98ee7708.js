import{C as l,F as t,I as r,a}from"./index.b1de1c6c.js";import{u as o}from"./use-demo-translate.992e3481.js";import{j as i,a as e,c as p}from"./index.425984b8.js";import"./use-theme.71f392f8.js";import"./scroll.e28dc1a4.js";const d=p("demo-field"),s={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",typeInput:"\u81EA\u5B9A\u4E49\u7C7B\u578B",text:"\u6587\u672C",textPH:"\u8BF7\u8F93\u5165\u6587\u672C",tel:"\u624B\u673A\u53F7",telPH:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",digit:"\u6574\u6570",digitPH:"\u8BF7\u8F93\u5165\u6574\u6570",number:"\u6570\u5B57",numberPH:"\u8BF7\u8F93\u5165\u6570\u5B57\uFF08\u652F\u6301\u5C0F\u6570\uFF09",password:"\u5BC6\u7801",passwordPH:"\u8BF7\u8F93\u5165\u5BC6\u7801",disabledInput:"\u7981\u7528\u8F93\u5165\u6846",readonlyPH:"\u8F93\u5165\u6846\u53EA\u8BFB",disabledPH:"\u8F93\u5165\u6846\u5DF2\u7981\u7528",iconInput:"\u663E\u793A\u56FE\u6807",iconVisiblePH:"\u663E\u793A\u56FE\u6807",iconClearPH:"\u663E\u793A\u6E05\u9664\u56FE\u6807",helpInput:"\u9519\u8BEF\u63D0\u793A",helpMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",buttonInput:"\u63D2\u5165\u6309\u94AE",buttonLabel:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",buttonPH:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",buttonText:"\u53D1\u9001\u9A8C\u8BC1\u7801",autoHeightInput:"\u9AD8\u5EA6\u81EA\u9002\u5E94",remarkLabel:"\u7559\u8A00",remarkPH:"\u8BF7\u8F93\u5165\u7559\u8A00",workCountInput:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",inputAlign:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",inputAlignPH:"\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50"},"en-US":{basicUsage:"Basic Usage",typeInput:"Custom Type",text:"Label",textPH:"Text",tel:"Phone",telPH:"Phone",digit:"Digit",digitPH:"Digit",number:"Number",numberPH:"Number",password:"Password",passwordPH:"Password",disabledInput:"Disabled",readonlyPH:"Input Readonly",disabledPH:"Input Disabled",iconInput:"Show Icon",iconVisiblePH:"Show Icon",iconClearPH:"Show Clear Icon",helpInput:"Error Info",helpMessage:"Invalid phone",buttonInput:"Insert Button",buttonLabel:"SMS",buttonPH:"SMS",buttonText:"Send SMS",autoHeightInput:"Auto Resize",remarkLabel:"Message",remarkPH:"Message",workCountInput:"Show Word Limit",inputAlign:"Input Align",inputAlignPH:"Input Align Right"}},c=Array.from(["text","tel","digit","number","password"]);function H(){const[u]=o(s,"en-US");return i("div",{className:d(),children:[e(l.Group,{title:u.basicUsage,children:e(t,{label:u.text,children:e(t.Input,{placeholder:u.textPH})})}),e(l.Group,{title:u.typeInput,children:c.map(n=>e(t,{label:u[n],children:e(t.Input,{placeholder:u[`${n}PH`],type:n})},n))}),i(l.Group,{title:u.disabledInput,children:[e(t,{label:u.text,children:e(t.Input,{readOnly:!0,placeholder:u.readonlyPH,defaultValue:u.readonlyPH})}),e(t,{label:u.text,disabled:!0,children:e(t.Input,{placeholder:u.disabledPH})})]}),i(l.Group,{title:u.iconInput,children:[e(t,{label:u.text,leftIcon:e(r,{name:"file-o"}),rightIcon:e(r,{name:"star"}),children:e(t.Input,{placeholder:u.iconVisiblePH})}),e(t,{label:u.text,leftIcon:e(r,{name:"file-o"}),children:e(t.Input,{placeholder:u.iconClearPH,clearable:!0})})]}),e(l.Group,{title:u.helpInput,children:e(t,{label:u.tel,required:!0,help:u.helpMessage,children:e(t.Input,{placeholder:u.telPH,defaultValue:"123"})})}),e(l.Group,{title:u.buttonInput,children:e(t,{label:u.buttonLabel,controlSuffix:e(a,{size:"sm",type:"primary",children:u.buttonText}),itemsAlign:"middle",children:e(t.Input,{placeholder:u.buttonPH})})}),e(l.Group,{title:u.autoHeightInput,children:e(t,{label:u.remarkLabel,children:e(t.TextArea,{placeholder:u.remarkPH,autoSize:{minHeight:48,maxHeight:96}})})}),e(l.Group,{title:u.workCountInput,children:e(t,{label:u.remarkLabel,children:e(t.TextArea,{placeholder:u.remarkPH,showCount:!0,rows:2,maxLength:50,autoSize:!0})})}),e(l.Group,{title:u.inputAlign,children:e(t,{label:u.text,children:e(t.Input,{placeholder:u.inputAlignPH,inputAlign:"right"})})})]})}export{H as default};
