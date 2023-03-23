import{b as i,j as t,a}from"./index-acc727ed.js";import{F as l}from"./index-cd3ec507.js";import{u as p}from"./use-demo-translate-af347a14.js";import{B as u}from"./index-1ade8160.js";import{C as r}from"./index-9ea1a4ee.js";import{I as o}from"./index-95f1e0da.js";import"./config-component-props-c0788442.js";import"./use-merged-prop-78f8d6c6.js";import"./format-73c0cb3b.js";import"./detect-9e279ab2.js";import"./use-controlled-state-2016da2e.js";import"./use-merged-prop-ref-b9b1260a.js";import"./use-update-effect-9fcceba0.js";import"./use-focus-cc6e6d02.js";import"./scroll-a0e7f6b9.js";import"./use-creation-aa086326.js";import"./misc-276e45ca.js";import"./index-f55e3552.js";import"./use-theme-f282d90a.js";import"./constants-905d732f.js";import"./event-471798e4.js";const d=a("demo-field"),s={"zh-CN":{basicUsage:"基础用法",typeInput:"自定义类型",text:"文本",textPH:"请输入文本",tel:"手机号",telPH:"请输入手机号",digit:"整数",digitPH:"请输入整数",number:"数字",numberPH:"请输入数字（支持小数）",password:"密码",passwordPH:"请输入密码",disabledInput:"禁用输入框",readonlyPH:"输入框只读",disabledPH:"输入框已禁用",iconInput:"显示图标",iconVisiblePH:"显示图标",iconClearPH:"显示清除图标",helpInput:"错误提示",helpMessage:"手机号格式错误",buttonInput:"插入按钮",buttonLabel:"短信验证码",buttonPH:"请输入短信验证码",buttonText:"发送验证码",autoHeightInput:"高度自适应",remarkLabel:"留言",remarkPH:"请输入留言",workCountInput:"显示字数统计",inputAlign:"输入框内容对齐",inputAlignPH:"输入框内容右对齐"},"en-US":{basicUsage:"Basic Usage",typeInput:"Custom Type",text:"Label",textPH:"Text",tel:"Phone",telPH:"Phone",digit:"Digit",digitPH:"Digit",number:"Number",numberPH:"Number",password:"Password",passwordPH:"Password",disabledInput:"Disabled",readonlyPH:"Input Readonly",disabledPH:"Input Disabled",iconInput:"Show Icon",iconVisiblePH:"Show Icon",iconClearPH:"Show Clear Icon",helpInput:"Error Info",helpMessage:"Invalid phone",buttonInput:"Insert Button",buttonLabel:"SMS",buttonPH:"SMS",buttonText:"Send SMS",autoHeightInput:"Auto Resize",remarkLabel:"Message",remarkPH:"Message",workCountInput:"Show Word Limit",inputAlign:"Input Align",inputAlignPH:"Input Align Right"}},c=Array.from(["text","tel","digit","number","password"]);function z(){const[e]=p(s,"en-US");return i("div",{className:d(),children:[t(r.Group,{title:e.basicUsage,children:t(l,{label:e.text,children:t(l.Input,{placeholder:e.textPH})})}),t(r.Group,{title:e.typeInput,children:c.map(n=>t(l,{label:e[n],children:t(l.Input,{placeholder:e[`${n}PH`],type:n})},n))}),i(r.Group,{title:e.disabledInput,children:[t(l,{label:e.text,children:t(l.Input,{readOnly:!0,placeholder:e.readonlyPH,defaultValue:e.readonlyPH})}),t(l,{label:e.text,disabled:!0,children:t(l.Input,{placeholder:e.disabledPH})})]}),i(r.Group,{title:e.iconInput,children:[t(l,{label:e.text,leftIcon:t(o,{name:"file-o"}),rightIcon:t(o,{name:"star"}),children:t(l.Input,{placeholder:e.iconVisiblePH})}),t(l,{label:e.text,leftIcon:t(o,{name:"file-o"}),children:t(l.Input,{placeholder:e.iconClearPH,clearable:!0})})]}),t(r.Group,{title:e.helpInput,children:t(l,{label:e.tel,required:!0,help:e.helpMessage,children:t(l.Input,{placeholder:e.telPH,defaultValue:"123"})})}),t(r.Group,{title:e.buttonInput,children:t(l,{label:e.buttonLabel,controlSuffix:t(u,{size:"sm",type:"primary",children:e.buttonText}),itemsAlign:"middle",children:t(l.Input,{placeholder:e.buttonPH})})}),t(r.Group,{title:e.autoHeightInput,children:t(l,{label:e.remarkLabel,children:t(l.TextArea,{placeholder:e.remarkPH,autoSize:{minHeight:48,maxHeight:96}})})}),t(r.Group,{title:e.workCountInput,children:t(l,{label:e.remarkLabel,children:t(l.TextArea,{placeholder:e.remarkPH,showCount:!0,rows:2,maxLength:50,autoSize:!0})})}),t(r.Group,{title:e.inputAlign,children:t(l,{label:e.text,children:t(l.Input,{placeholder:e.inputAlignPH,inputAlign:"right"})})})]})}export{z as default};
