import{u as e}from"./use-demo-translate.6e8b3a77.js";import{C as t,p as i}from"./index.6a3bd64e.js";import{j as n,F as s,a}from"./index.0b79de82.js";import"./vendor.74addd0f.js";import"./use-theme.67eface3.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const o={"zh-CN":{basicUsage:"基础用法",step:"步长设置",range:"限制输入范围",integer:"限制输入整数",disabled:"禁用状态",disableInput:"禁用输入框",decimalLength:"固定小数位数",customSize:"自定义大小"},"en-US":{basicUsage:"Basic Usage",step:"Step",range:"Range",integer:"Integer",disabled:"Disabled",disableInput:"Disable Input",decimalLength:"Decimal Length",customSize:"Custom Size"}};function l(){const[l]=e(o,"en-US");return n(s,{children:[a(t,{title:l.basicUsage,content:a(i,{})}),a(t,{title:l.step,content:a(i,{step:2})}),a(t,{title:l.range,content:a(i,{min:5,max:8})}),a(t,{title:l.integer,content:a(i,{precision:0})}),a(t,{title:l.disabled,content:a(i,{disabled:!0})}),a(t,{title:l.disableInput,content:a(i,{disableInput:!0})}),a(t,{title:l.decimalLength,content:a(i,{precision:1,defaultValue:1})}),a(t,{title:l.customSize,content:a(i,{buttonSize:32,inputWidth:40})})]})}export{l as default};