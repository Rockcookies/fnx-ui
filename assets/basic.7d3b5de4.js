var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,i=(e,a)=>{for(var o in a||(a={}))d.call(a,o)&&l(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&l(e,o,a[o]);return e},r=(e,t)=>a(e,o(t));import{r as n}from"./vendor.e33a1242.js";import{l as u,U as p,a as m,I as c,h as f}from"./index.5a6f04ce.js";import{d as b}from"./demo-dog-01.7b78a0b6.js";import{d as g,a as v}from"./demo-dog-03.3fd716de.js";import{D as h}from"./index.8050eaee.js";import{u as U}from"./use-demo-translate.aaf405bb.js";import{s as j}from"./use-theme.d8418a8a.js";import{j as C,F as y,a as w,b as x}from"./index.b656186a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const R=x("demo-uploader"),S={"zh-CN":{basicUsage:"基础用法",uploadStatus:"上传状态",uploading:"上传中...",failed:"上传失败",maxCount:"限制上传数量",disabled:"禁用文件上传",upload:"上传文件",customUpload:"自定义上传样式",invalidType:"请上传 jpg 格式图片",imageName:"图片名称",previewCover:"自定义预览样式",beforeRead:"上传前置处理",fileName:"刀.png"},"en-US":{basicUsage:"Basic Usage",uploadStatus:"Upload Status",uploading:"Uploading...",failed:"Failed",maxCount:"Max Count",disabled:"Disabled Uploader",upload:"Upload File",customUpload:"Custom Upload Area",invalidType:"Please upload an image in jpg format",imageName:"Image Name",previewCover:"Preview Cover",beforeRead:"Upload On Read",fileName:"Blade.png"}};function N(){const[e]=U(S,"en-US"),[a,o]=n.exports.useState((()=>({basicUsage:[{url:b,status:"done"},{thumbnail:!1,url:b,status:"done",name:e.fileName}],uploadStatus:[{status:"uploading",message:e.uploading,content:b},{status:"failed",message:e.failed,content:g}],maxCount:[{url:v,status:"done"}],disabled:[],customUpload:[],invalidType:[],previewCover:[{url:g,status:"done",file:{name:e.imageName}}],beforeRead:[]}))),t=(e,a)=>{o((o=>{const t="function"==typeof a?a(o[e]):a;return r(i({},o),{[e]:t})}))},d=u(),s=n.exports.useCallback(((e,a=1e3)=>{j(a).then((()=>{d.current||e()}))}),[d]);return C(y,{children:[w(h,{cardMode:!0,title:e.basicUsage,children:w(p,{defaultValue:a.basicUsage})}),w(h,{cardMode:!0,title:e.uploadStatus,children:w(p,{value:a.uploadStatus,onChange:e=>t("uploadStatus",e),onRead:a=>a.map((a=>r(i({},a),{status:"uploading",message:e.uploading}))),onUpload:a=>s((()=>t("uploadStatus",(o=>o.map((o=>a.findIndex((e=>e.uid===o.uid))>=0?r(i({},o),{status:"failed",message:e.failed}):o))))))})}),w(h,{cardMode:!0,title:e.maxCount,children:w(p,{defaultValue:a.maxCount,maxCount:2,onRead:e=>e.map((e=>r(i({},e),{status:"done"})))})}),w(h,{cardMode:!0,title:e.customUpload,children:w(p,{defaultValue:a.customUpload,onRead:e=>e.map((e=>r(i({},e),{status:"done"}))),children:w(m,{icon:w(c,{name:"plus"}),type:"primary",children:e.upload})})}),w(h,{cardMode:!0,title:e.previewCover,children:w(p,{defaultValue:a.previewCover,onRead:e=>e.map((e=>r(i({},e),{status:"done"}))),slots:{filePreviewCover:({file:e})=>w("div",{className:R("preview-cover"),children:e&&e.name})}})}),w(h,{cardMode:!0,title:e.beforeRead,children:w(p,{defaultValue:a.beforeRead,onRead:a=>a.findIndex((({file:e})=>"image/jpeg"!==e.type))>=0?(f.show(e.invalidType),[]):a.map((e=>r(i({},e),{status:"done"}))),slots:{filePreviewCover:({file:e})=>w("div",{className:R("preview-cover"),children:e&&e.name})}})}),w(h,{cardMode:!0,title:e.disabled,children:w(p,{defaultValue:a.disabled,onRead:e=>e.map((e=>r(i({},e),{status:"done"}))),disabled:!0})})]})}export{N as default};