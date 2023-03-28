import{r as e,j as d,_ as t,u as z,R,c as x,F as I,a as V}from"./index-e0a0e62b.js";import{u as C}from"./use-theme-daaa26dc.js";(function(){if(typeof window>"u")return;var o,c="ontouchstart"in window;document.createTouch||(document.createTouch=function(a,r,l,_,p,y,A){return new h(r,l,{pageX:_,pageY:p,screenX:y,screenY:A,clientX:_-window.pageXOffset,clientY:p-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var a=s(),r=0;r<arguments.length;r++)a[r]=arguments[r];return a.length=arguments.length,a}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var r=this;do{if(r.matches(a))return r;r=r.parentElement||r.parentNode}while(r!==null&&r.nodeType===1);return null});var h=function(r,l,_,p,y){p=p||0,y=y||0,this.identifier=l,this.target=r,this.clientX=_.clientX+p,this.clientY=_.clientY+y,this.screenX=_.screenX+p,this.screenY=_.screenY+y,this.pageX=_.pageX+p,this.pageY=_.pageY+y};function s(){var a=[];return a.item=function(r){return this[r]||null},a.identifiedTouch=function(r){return this[r+1]||null},a}var i=!1;function n(a){return function(r){r.type==="mousedown"&&(i=!0),r.type==="mouseup"&&(i=!1),!(r.type==="mousemove"&&!i)&&((r.type==="mousedown"||!o||o&&!o.dispatchEvent)&&(o=r.target),o.closest("[data-no-touch-simulate]")==null&&E(a,r),r.type==="mouseup"&&(o=null))}}function E(a,r){var l=document.createEvent("Event");l.initEvent(a,!0,!0),l.altKey=r.altKey,l.ctrlKey=r.ctrlKey,l.metaKey=r.metaKey,l.shiftKey=r.shiftKey,l.touches=$(r),l.targetTouches=$(r),l.changedTouches=f(r),o.dispatchEvent(l)}function f(a){var r=s();return r.push(new h(o,1,a,0,0)),r}function $(a){return a.type==="mouseup"?s():f(a)}function b(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}b.multiTouchOffset=75,c||new b})();const m="${label} is not a valid ${type}",w={locale:"en-US","pull-refresh":{loading:"Loading...",loosing:"Loose to refresh...",pulling:"Pull to refresh..."},list:{loading:"Loading..."},picker:{confirm:"Confirm",cancel:"Cancel"},pagination:{prev:"Previous",next:"Next"},uploader:{upload:"Upload"},cascader:{select:"Select"},calendar:{confirm:"Confirm",end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:"${year}/${month}",rangePrompt:"Choose no more than ${maxRange} days"},form:{validate:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:m,method:m,array:m,object:m,number:m,date:m,boolean:m,integer:m,float:m,regexp:m,email:m,url:m,hex:m},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},dialog:{confirm:"Confirm",cancel:"Cancel"}},g=w;let v={...g.dialog};function L(o){o?v={...v,...o}:v={...g.dialog}}function B(){return v}const k={locale:g,safeAreaInsetTop:!1,safeAreaInsetBottom:!1,transitionDuration:300,mountTo:()=>document.body},T=e.createContext(k),P=({children:o,locale:c,...h})=>{const s=e.useContext(T),i={...s,...h,locale:c||s.locale},n=e.useRef();if(n.current!=null){const E=n.current,f=Object.keys(E),$=Object.keys(i);n.current=f.length===$.length&&f.every(b=>E[b]===i[b])?E:i}else n.current=i;return e.useEffect(()=>{if(c)return L(c.dialog),()=>{L()}},[c]),d(T.Provider,{value:n.current,children:o})};P.displayName="ConfigProvider";const S=P,O=S;O.Context=T;const N=O;const u="${label}不是一个有效的${type}",K={locale:"zh-CN","pull-refresh":{loading:"加载中...",loosing:"释放即可刷新...",pulling:"下拉即可刷新..."},list:{loading:"加载中..."},picker:{confirm:"确定",cancel:"取消"},pagination:{prev:"上一页",next:"下一页"},uploader:{upload:"上传"},cascader:{select:"请选择"},calendar:{confirm:"确定",end:"结束",start:"开始",title:"日期选择",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:"${year}年${month}月",rangePrompt:"选择天数不能超过  ${maxRange} 天"},form:{validate:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},dialog:{confirm:"确定",cancel:"取消"}},M=K,j={badge:e.lazy(()=>t(()=>import("./basic-f8b37925.js"),["./basic-f8b37925.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-1f40f902.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js","./basic-e3f23018.css"],import.meta.url)),button:e.lazy(()=>t(()=>import("./basic-37c4f473.js"),["./basic-37c4f473.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js","./basic-b96366ed.css"],import.meta.url)),icon:e.lazy(()=>t(()=>import("./basic-6b40c6fa.js"),["./basic-6b40c6fa.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-362d6342.js","./config-component-props-c0788442.js","./constants-905d732f.js","./react-16bce17c.js","./use-merged-prop-78f8d6c6.js","./index-318e65f5.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./use-creation-bef55742.js","./index-26d289dc.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./index-4811aaa7.js","./use-on-popup-open-3848a53c.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./use-get-state-2ef12360.js","./use-theme-daaa26dc.js","./basic-17f0d804.css"],import.meta.url)),cell:e.lazy(()=>t(()=>import("./basic-41e69912.js"),["./basic-41e69912.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-edeb2706.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./misc-276e45ca.js","./CSSTransition-323ddcff.js","./use-theme-daaa26dc.js","./basic-5bc63f53.css"],import.meta.url)),checkbox:e.lazy(()=>t(()=>import("./basic-b189e6ac.js"),["./basic-b189e6ac.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-c6cfd838.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./misc-276e45ca.js","./detect-9e279ab2.js","./use-checkbox-render-adccb62c.js","./index-328d196d.js","./format-73c0cb3b.js","./event-471798e4.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./index-41216d4c.js","./constants-905d732f.js","./index-f26d845a.js","./use-theme-daaa26dc.js","./basic-ba2a8e61.css"],import.meta.url)),circle:e.lazy(()=>t(()=>import("./basic-48e53cf5.js"),["./basic-48e53cf5.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-theme-daaa26dc.js","./basic-f1b9a9c3.css"],import.meta.url)),layout:e.lazy(()=>t(()=>import("./basic-d7a28cf4.js"),["./basic-d7a28cf4.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-5d56dff0.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js","./basic-faadc9cb.css"],import.meta.url)),collapse:e.lazy(()=>t(()=>import("./basic-1b9ff5d7.js"),["./basic-1b9ff5d7.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./react-16bce17c.js","./misc-276e45ca.js","./detect-9e279ab2.js","./index-f26d845a.js","./constants-905d732f.js","./index-328d196d.js","./format-73c0cb3b.js","./CSSTransition-323ddcff.js","./use-theme-daaa26dc.js"],import.meta.url)),overlay:e.lazy(()=>t(()=>import("./basic-80a415b2.js"),["./basic-80a415b2.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-e30374a6.js","./use-merged-prop-78f8d6c6.js","./CSSTransition-323ddcff.js","./use-theme-daaa26dc.js","./basic-67092ad2.css"],import.meta.url)),popup:e.lazy(()=>t(()=>import("./basic-8bcb6aeb.js"),["./basic-8bcb6aeb.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./use-theme-daaa26dc.js"],import.meta.url)),loading:e.lazy(()=>t(()=>import("./basic-b35a825f.js"),["./basic-b35a825f.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-4bc788df.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js","./basic-d55fcdbd.css"],import.meta.url)),toast:e.lazy(()=>t(()=>import("./basic-386a0915.js"),["./basic-386a0915.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-1c5c166b.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./popup-helper-0612a41c.js","./misc-276e45ca.js","./react-16bce17c.js","./config-component-props-c0788442.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./constants-905d732f.js","./use-theme-daaa26dc.js"],import.meta.url)),image:e.lazy(()=>t(()=>import("./basic-072bd4f7.js"),["./basic-072bd4f7.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-904cc8bd.js","./config-component-props-c0788442.js","./use-update-effect-7c97adfc.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./index-5d56dff0.js","./use-theme-daaa26dc.js","./basic-42dedc1d.css"],import.meta.url)),list:e.lazy(()=>t(()=>import("./basic-1f4e8733.js"),["./basic-1f4e8733.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./index-1538cecb.js","./use-merged-prop-78f8d6c6.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./index-4bc788df.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-c3c5951b.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-318e65f5.js","./use-controlled-state-c80e6a10.js","./use-creation-bef55742.js","./index-26d289dc.js","./style-696f78db.js","./index-4811aaa7.js","./use-on-popup-open-3848a53c.js","./raf-e95fb200.js","./react-16bce17c.js","./use-get-state-2ef12360.js","./use-theme-daaa26dc.js"],import.meta.url)),"pull-refresh":e.lazy(()=>t(()=>import("./basic-93fcd2f7.js"),["./basic-93fcd2f7.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-unmounted-ref-17a39070.js","./index-1538cecb.js","./use-merged-prop-78f8d6c6.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./index-4bc788df.js","./index-c3c5951b.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./use-theme-daaa26dc.js","./basic-bf8a0dba.css"],import.meta.url)),swipe:e.lazy(()=>t(()=>import("./basic-14cb80e1.js"),["./basic-14cb80e1.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-1c5c166b.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./popup-helper-0612a41c.js","./react-16bce17c.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./index-4811aaa7.js","./raf-e95fb200.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./use-theme-daaa26dc.js","./basic-50186810.css"],import.meta.url)),sticky:e.lazy(()=>t(()=>import("./basic-55eb1b74.js"),["./basic-55eb1b74.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-26d289dc.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./use-theme-daaa26dc.js","./basic-b24e97da.css"],import.meta.url)),pagination:e.lazy(()=>t(()=>import("./basic-bb453566.js"),["./basic-bb453566.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-c3c5951b.js","./constants-905d732f.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-328d196d.js","./use-theme-daaa26dc.js"],import.meta.url)),skeleton:e.lazy(()=>t(()=>import("./basic-1cac1b3d.js"),["./basic-1cac1b3d.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-b378aa64.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./demo-doge-1162f15a.js","./use-theme-daaa26dc.js","./basic-8c33224a.css"],import.meta.url)),switch:e.lazy(()=>t(()=>import("./basic-0478c67e.js"),["./basic-0478c67e.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-b378aa64.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./constants-905d732f.js","./use-theme-daaa26dc.js","./basic-207a1348.css"],import.meta.url)),stepper:e.lazy(()=>t(()=>import("./basic-1c7ccef1.js"),["./basic-1c7ccef1.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-c3823f00.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./use-focus-a8b0c791.js","./scroll-a0e7f6b9.js","./detect-9e279ab2.js","./event-471798e4.js","./misc-276e45ca.js","./format-73c0cb3b.js","./use-theme-daaa26dc.js","./basic-a92bb3c0.css"],import.meta.url)),uploader:e.lazy(()=>t(()=>import("./basic-0ab7e43a.js"),["./basic-0ab7e43a.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-e1b783c0.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-c3c5951b.js","./misc-276e45ca.js","./index-904cc8bd.js","./demo-dog-01-2d98fb22.js","./demo-dog-03-35ee3292.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./constants-905d732f.js","./event-471798e4.js","./use-unmounted-ref-17a39070.js","./index-1c5c166b.js","./popup-helper-0612a41c.js","./react-16bce17c.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-theme-daaa26dc.js","./basic-e0b7d498.css"],import.meta.url)),tag:e.lazy(()=>t(()=>import("./basic-0a50503b.js"),["./basic-0a50503b.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-edeb2706.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./CSSTransition-323ddcff.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./constants-905d732f.js","./use-theme-daaa26dc.js"],import.meta.url)),divider:e.lazy(()=>t(()=>import("./basic-f09bcd18.js"),["./basic-f09bcd18.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./config-component-props-c0788442.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js"],import.meta.url)),grid:e.lazy(()=>t(()=>import("./basic-b8d14b8b.js"),["./basic-b8d14b8b.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-1f40f902.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-362d6342.js","./constants-905d732f.js","./react-16bce17c.js","./use-merged-prop-78f8d6c6.js","./demo-dog-01-2d98fb22.js","./demo-dog-03-35ee3292.js","./index-904cc8bd.js","./use-update-effect-7c97adfc.js","./misc-276e45ca.js","./use-merged-prop-ref-3afcd252.js","./use-theme-daaa26dc.js","./basic-9e2b6a53.css"],import.meta.url)),tabs:e.lazy(()=>t(()=>import("./basic-f3123be2.js"),["./basic-f3123be2.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-318e65f5.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./use-creation-bef55742.js","./index-26d289dc.js","./event-471798e4.js","./detect-9e279ab2.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./format-73c0cb3b.js","./index-4811aaa7.js","./use-on-popup-open-3848a53c.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-16bce17c.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./use-get-state-2ef12360.js","./constants-905d732f.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-1c5c166b.js","./index-328d196d.js","./popup-helper-0612a41c.js","./index-27506349.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-theme-daaa26dc.js","./basic-6fde8c4c.css"],import.meta.url)),picker:e.lazy(()=>t(()=>import("./basic-aefa686c.js"),["./basic-aefa686c.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-f690c194.js","./config-data-names-be9d1e63.js","./misc-276e45ca.js","./detect-9e279ab2.js","./use-creation-bef55742.js","./format-73c0cb3b.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./use-update-effect-7c97adfc.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-4bc788df.js","./index-328d196d.js","./index-c3c5951b.js","./constants-905d732f.js","./use-get-state-2ef12360.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-ae222f6f.js","./index-f26d845a.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-focus-a8b0c791.js","./scroll-a0e7f6b9.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./index-1c5c166b.js","./popup-helper-0612a41c.js","./react-16bce17c.js","./use-theme-daaa26dc.js"],import.meta.url)),rate:e.lazy(()=>t(()=>import("./basic-26199bf5.js"),["./basic-26199bf5.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-1c5c166b.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./popup-helper-0612a41c.js","./misc-276e45ca.js","./react-16bce17c.js","./config-component-props-c0788442.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./index-0a792970.js","./use-theme-daaa26dc.js"],import.meta.url)),radio:e.lazy(()=>t(()=>import("./basic-334dcf49.js"),["./basic-334dcf49.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-edbeee64.js","./use-checkbox-render-adccb62c.js","./use-merged-prop-78f8d6c6.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./event-471798e4.js","./misc-276e45ca.js","./config-component-props-c0788442.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./constants-905d732f.js","./use-theme-daaa26dc.js","./basic-b8278aee.css"],import.meta.url)),dialog:e.lazy(()=>t(()=>import("./basic-c99d8105.js"),["./basic-c99d8105.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./popup-helper-0612a41c.js","./detect-9e279ab2.js","./misc-276e45ca.js","./react-16bce17c.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./constants-905d732f.js","./event-471798e4.js","./index-c3c5951b.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./index-f26d845a.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-1c5c166b.js","./demo-doge-1162f15a.js","./use-theme-daaa26dc.js","./basic-79edcc0c.css"],import.meta.url)),cascader:e.lazy(()=>t(()=>import("./basic-f38c16d7.js"),["./basic-f38c16d7.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-ae222f6f.js","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-merged-prop-78f8d6c6.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./use-focus-a8b0c791.js","./scroll-a0e7f6b9.js","./index-328d196d.js","./use-creation-bef55742.js","./misc-276e45ca.js","./use-unmounted-ref-17a39070.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./index-4bc788df.js","./index-c3c5951b.js","./index-318e65f5.js","./index-26d289dc.js","./style-696f78db.js","./index-4811aaa7.js","./raf-e95fb200.js","./react-16bce17c.js","./use-safe-state-86fbb20f.js","./use-get-state-2ef12360.js","./config-data-names-be9d1e63.js","./use-theme-daaa26dc.js"],import.meta.url)),"notice-bar":e.lazy(()=>t(()=>import("./basic-94422afd.js"),["./basic-94422afd.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-4811aaa7.js","./config-component-props-c0788442.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./event-471798e4.js","./misc-276e45ca.js","./use-on-popup-open-3848a53c.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-16bce17c.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./style-696f78db.js","./use-theme-daaa26dc.js","./basic-497173ad.css"],import.meta.url)),field:e.lazy(()=>t(()=>import("./basic-a6085950.js"),["./basic-a6085950.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-ae222f6f.js","./index-f26d845a.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-merged-prop-78f8d6c6.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./use-focus-a8b0c791.js","./scroll-a0e7f6b9.js","./index-328d196d.js","./use-creation-bef55742.js","./misc-276e45ca.js","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./event-471798e4.js","./use-theme-daaa26dc.js"],import.meta.url)),"date-picker":e.lazy(()=>t(()=>import("./basic-3c137fc4.js"),["./basic-3c137fc4.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-c8fb10f2.js","./config-component-props-c0788442.js","./use-creation-bef55742.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-f690c194.js","./config-data-names-be9d1e63.js","./misc-276e45ca.js","./detect-9e279ab2.js","./format-73c0cb3b.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-4bc788df.js","./index-328d196d.js","./index-c3c5951b.js","./constants-905d732f.js","./use-get-state-2ef12360.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./use-theme-daaa26dc.js"],import.meta.url)),form:e.lazy(()=>t(()=>import("./basic-0138a259.js"),["./basic-0138a259.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./demo-dog-01-2d98fb22.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-e89afec1.js","./use-creation-bef55742.js","./use-get-state-2ef12360.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-c3c5951b.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-c6cfd838.js","./use-controlled-state-c80e6a10.js","./use-checkbox-render-adccb62c.js","./index-c8fb10f2.js","./index-f690c194.js","./config-data-names-be9d1e63.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./touch-helper-e91fac31.js","./index-4bc788df.js","./index-ae222f6f.js","./index-f26d845a.js","./use-focus-a8b0c791.js","./index-fac2b726.js","./CSSTransition-323ddcff.js","./index-27506349.js","./index-e30374a6.js","./index-edbeee64.js","./index-0a792970.js","./index-c3823f00.js","./index-b378aa64.js","./index-e1b783c0.js","./index-904cc8bd.js","./use-theme-daaa26dc.js","./basic-32214d56.css"],import.meta.url)),"error-boundary":e.lazy(()=>t(()=>import("./basic-afcbd2d5.js"),["./basic-afcbd2d5.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-theme-daaa26dc.js"],import.meta.url)),calendar:e.lazy(()=>t(()=>import("./basic-135d0412.js"),["./basic-135d0412.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-e89afec1.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-creation-bef55742.js","./use-get-state-2ef12360.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-c3c5951b.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./index-1c5c166b.js","./popup-helper-0612a41c.js","./react-16bce17c.js","./index-27506349.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-theme-daaa26dc.js"],import.meta.url)),notify:e.lazy(()=>t(()=>import("./basic-829c6c5a.js"),["./basic-829c6c5a.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./popup-helper-0612a41c.js","./detect-9e279ab2.js","./misc-276e45ca.js","./react-16bce17c.js","./config-component-props-c0788442.js","./index-27506349.js","./use-on-popup-open-3848a53c.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./CSSTransition-323ddcff.js","./use-controlled-state-c80e6a10.js","./use-update-effect-7c97adfc.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-f26d845a.js","./constants-905d732f.js","./index-328d196d.js","./format-73c0cb3b.js","./use-theme-daaa26dc.js"],import.meta.url)),"config-provider":e.lazy(()=>t(()=>import("./basic-2035bdb3.js"),["./basic-2035bdb3.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-e89afec1.js","./use-creation-bef55742.js","./use-get-state-2ef12360.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./index-c3c5951b.js","./use-on-popup-open-3848a53c.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-ae222f6f.js","./index-f26d845a.js","./use-controlled-state-c80e6a10.js","./use-focus-a8b0c791.js","./index-fac2b726.js","./CSSTransition-323ddcff.js","./index-27506349.js","./touch-helper-e91fac31.js","./index-e30374a6.js","./index-0a792970.js","./use-theme-daaa26dc.js","./basic-d1be132d.css"],import.meta.url)),empty:e.lazy(()=>t(()=>import("./basic-ca7195e2.js"),["./basic-ca7195e2.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./demo-doge-1162f15a.js","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./index-41216d4c.js","./config-component-props-c0788442.js","./index-328d196d.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-318e65f5.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-7c97adfc.js","./use-creation-bef55742.js","./index-26d289dc.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./index-4811aaa7.js","./use-on-popup-open-3848a53c.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-16bce17c.js","./use-safe-state-86fbb20f.js","./use-unmounted-ref-17a39070.js","./use-get-state-2ef12360.js","./use-theme-daaa26dc.js","./basic-f3c2bcbe.css"],import.meta.url)),space:e.lazy(()=>t(()=>import("./basic-70cacf21.js"),["./basic-70cacf21.js","./index-e0a0e62b.js","./index-8ffd0b0d.css","./index-321233ab.js","./index-aecd78aa.css","./use-demo-translate-cd584b24.js","./config-component-props-c0788442.js","./style-696f78db.js","./detect-9e279ab2.js","./react-16bce17c.js","./index-41216d4c.js","./index-328d196d.js","./format-73c0cb3b.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-edbeee64.js","./use-checkbox-render-adccb62c.js","./use-merged-prop-78f8d6c6.js","./use-controlled-state-c80e6a10.js","./use-merged-prop-ref-3afcd252.js","./use-update-effect-7c97adfc.js","./use-theme-daaa26dc.js","./basic-2e384904.css"],import.meta.url))},F=e.createContext({locale:"en-US",theme:"light"}),U=F;const X=V("demo"),D=()=>{const o=z(),{demo:c,locale:h,key:s,theme:i}=e.useMemo(()=>{const n=o.component,E=o.locale==="zh-CN"?"zh-CN":"en-US",f=n?j[n]:void 0,$=o.theme==="dark"?"dark":"light";return{demo:f,locale:E,key:n,theme:$}},[o]);return C(i),d(R.StrictMode,{children:d(U.Provider,{value:{locale:h,theme:i},children:d(N,{locale:h==="zh-CN"?M:g,children:d("section",{className:x(X({[`${i}`]:i!=="light"}),`demo-${s}`),children:c!=null&&d(e.Suspense,{fallback:d(I,{}),children:d(c,{})})})})})})};D.displayName="Demo";const G=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{N as C,k as D,U as a,T as b,g as e,B as g,G as i,M as z};
