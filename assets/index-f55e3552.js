import{r as e,j as d,_ as t,u as z,R,c as x,F as I,a as V}from"./index-acc727ed.js";import{u as C}from"./use-theme-f282d90a.js";(function(){if(typeof window>"u")return;var o,c="ontouchstart"in window;document.createTouch||(document.createTouch=function(a,r,l,_,p,y,A){return new h(r,l,{pageX:_,pageY:p,screenX:y,screenY:A,clientX:_-window.pageXOffset,clientY:p-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var a=s(),r=0;r<arguments.length;r++)a[r]=arguments[r];return a.length=arguments.length,a}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var r=this;do{if(r.matches(a))return r;r=r.parentElement||r.parentNode}while(r!==null&&r.nodeType===1);return null});var h=function(r,l,_,p,y){p=p||0,y=y||0,this.identifier=l,this.target=r,this.clientX=_.clientX+p,this.clientY=_.clientY+y,this.screenX=_.screenX+p,this.screenY=_.screenY+y,this.pageX=_.pageX+p,this.pageY=_.pageY+y};function s(){var a=[];return a.item=function(r){return this[r]||null},a.identifiedTouch=function(r){return this[r+1]||null},a}var i=!1;function n(a){return function(r){r.type==="mousedown"&&(i=!0),r.type==="mouseup"&&(i=!1),!(r.type==="mousemove"&&!i)&&((r.type==="mousedown"||!o||o&&!o.dispatchEvent)&&(o=r.target),o.closest("[data-no-touch-simulate]")==null&&E(a,r),r.type==="mouseup"&&(o=null))}}function E(a,r){var l=document.createEvent("Event");l.initEvent(a,!0,!0),l.altKey=r.altKey,l.ctrlKey=r.ctrlKey,l.metaKey=r.metaKey,l.shiftKey=r.shiftKey,l.touches=$(r),l.targetTouches=$(r),l.changedTouches=f(r),o.dispatchEvent(l)}function f(a){var r=s();return r.push(new h(o,1,a,0,0)),r}function $(a){return a.type==="mouseup"?s():f(a)}function b(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}b.multiTouchOffset=75,c||new b})();const m="${label} is not a valid ${type}",w={locale:"en-US","pull-refresh":{loading:"Loading...",loosing:"Loose to refresh...",pulling:"Pull to refresh..."},list:{loading:"Loading..."},picker:{confirm:"Confirm",cancel:"Cancel"},pagination:{prev:"Previous",next:"Next"},uploader:{upload:"Upload"},cascader:{select:"Select"},calendar:{confirm:"Confirm",end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:"${year}/${month}",rangePrompt:"Choose no more than ${maxRange} days"},form:{validate:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:m,method:m,array:m,object:m,number:m,date:m,boolean:m,integer:m,float:m,regexp:m,email:m,url:m,hex:m},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},dialog:{confirm:"Confirm",cancel:"Cancel"}},g=w;let v={...g.dialog};function L(o){o?v={...v,...o}:v={...g.dialog}}function B(){return v}const k={locale:g,safeAreaInsetTop:!1,safeAreaInsetBottom:!1,transitionDuration:300,mountTo:()=>document.body},T=e.createContext(k),P=({children:o,locale:c,...h})=>{const s=e.useContext(T),i={...s,...h,locale:c||s.locale},n=e.useRef();if(n.current!=null){const E=n.current,f=Object.keys(E),$=Object.keys(i);n.current=f.length===$.length&&f.every(b=>E[b]===i[b])?E:i}else n.current=i;return e.useEffect(()=>{if(c)return L(c.dialog),()=>{L()}},[c]),d(T.Provider,{value:n.current,children:o})};P.displayName="ConfigProvider";const S=P,O=S;O.Context=T;const N=O;const u="${label}不是一个有效的${type}",K={locale:"zh-CN","pull-refresh":{loading:"加载中...",loosing:"释放即可刷新...",pulling:"下拉即可刷新..."},list:{loading:"加载中..."},picker:{confirm:"确定",cancel:"取消"},pagination:{prev:"上一页",next:"下一页"},uploader:{upload:"上传"},cascader:{select:"请选择"},calendar:{confirm:"确定",end:"结束",start:"开始",title:"日期选择",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:"${year}年${month}月",rangePrompt:"选择天数不能超过  ${maxRange} 天"},form:{validate:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},dialog:{confirm:"确定",cancel:"取消"}},M=K,j={badge:e.lazy(()=>t(()=>import("./basic-a3a00184.js"),["./basic-a3a00184.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-7e8a7ff6.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js","./basic-e3f23018.css"],import.meta.url)),button:e.lazy(()=>t(()=>import("./basic-135e2f87.js"),["./basic-135e2f87.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js","./basic-b96366ed.css"],import.meta.url)),icon:e.lazy(()=>t(()=>import("./basic-d0707256.js"),["./basic-d0707256.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-7839bc71.js","./config-component-props-c0788442.js","./constants-905d732f.js","./react-354fcae6.js","./use-merged-prop-78f8d6c6.js","./index-7284439f.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./use-creation-aa086326.js","./index-e24dce68.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./index-7fbd3c59.js","./use-on-popup-open-e0fdd969.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./use-get-state-708b6cfd.js","./use-theme-f282d90a.js","./basic-17f0d804.css"],import.meta.url)),cell:e.lazy(()=>t(()=>import("./basic-32a92b31.js"),["./basic-32a92b31.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-60d66135.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./misc-276e45ca.js","./CSSTransition-08aaae48.js","./use-theme-f282d90a.js","./basic-5bc63f53.css"],import.meta.url)),checkbox:e.lazy(()=>t(()=>import("./basic-fcfdb7f2.js"),["./basic-fcfdb7f2.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-3ebd212e.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./misc-276e45ca.js","./detect-9e279ab2.js","./use-checkbox-render-fdfb545a.js","./index-95f1e0da.js","./format-73c0cb3b.js","./event-471798e4.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./index-1ade8160.js","./constants-905d732f.js","./index-9ea1a4ee.js","./use-theme-f282d90a.js","./basic-ba2a8e61.css"],import.meta.url)),circle:e.lazy(()=>t(()=>import("./basic-d62af942.js"),["./basic-d62af942.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-theme-f282d90a.js","./basic-f1b9a9c3.css"],import.meta.url)),layout:e.lazy(()=>t(()=>import("./basic-8a72c08f.js"),["./basic-8a72c08f.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-14c1e43e.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js","./basic-faadc9cb.css"],import.meta.url)),collapse:e.lazy(()=>t(()=>import("./basic-1cce839e.js"),["./basic-1cce839e.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./react-354fcae6.js","./misc-276e45ca.js","./detect-9e279ab2.js","./index-9ea1a4ee.js","./constants-905d732f.js","./index-95f1e0da.js","./format-73c0cb3b.js","./CSSTransition-08aaae48.js","./use-theme-f282d90a.js"],import.meta.url)),overlay:e.lazy(()=>t(()=>import("./basic-3fa4d901.js"),["./basic-3fa4d901.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-58401949.js","./use-merged-prop-78f8d6c6.js","./CSSTransition-08aaae48.js","./use-theme-f282d90a.js","./basic-67092ad2.css"],import.meta.url)),popup:e.lazy(()=>t(()=>import("./basic-b24d7bd4.js"),["./basic-b24d7bd4.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./use-theme-f282d90a.js"],import.meta.url)),loading:e.lazy(()=>t(()=>import("./basic-9c4756f8.js"),["./basic-9c4756f8.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-4c2dac52.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js","./basic-d55fcdbd.css"],import.meta.url)),toast:e.lazy(()=>t(()=>import("./basic-bbfb7339.js"),["./basic-bbfb7339.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-ee39d9f7.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./popup-helper-47ee8b1d.js","./misc-276e45ca.js","./react-354fcae6.js","./config-component-props-c0788442.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./constants-905d732f.js","./use-theme-f282d90a.js"],import.meta.url)),image:e.lazy(()=>t(()=>import("./basic-b0398c0e.js"),["./basic-b0398c0e.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-141554e4.js","./config-component-props-c0788442.js","./use-update-effect-9fcceba0.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./index-14c1e43e.js","./use-theme-f282d90a.js","./basic-42dedc1d.css"],import.meta.url)),list:e.lazy(()=>t(()=>import("./basic-6e134154.js"),["./basic-6e134154.js","./index-acc727ed.js","./index-8ffd0b0d.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./index-31e691ec.js","./use-merged-prop-78f8d6c6.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./index-4c2dac52.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-de276461.js","./event-471798e4.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-7284439f.js","./use-controlled-state-2016da2e.js","./use-creation-aa086326.js","./index-e24dce68.js","./style-696f78db.js","./index-7fbd3c59.js","./use-on-popup-open-e0fdd969.js","./raf-e95fb200.js","./react-354fcae6.js","./use-get-state-708b6cfd.js","./use-theme-f282d90a.js"],import.meta.url)),"pull-refresh":e.lazy(()=>t(()=>import("./basic-75e54b9f.js"),["./basic-75e54b9f.js","./index-acc727ed.js","./index-8ffd0b0d.css","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-unmounted-ref-dd1b8a47.js","./index-31e691ec.js","./use-merged-prop-78f8d6c6.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./index-4c2dac52.js","./index-de276461.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./use-theme-f282d90a.js","./basic-bf8a0dba.css"],import.meta.url)),swipe:e.lazy(()=>t(()=>import("./basic-141ef011.js"),["./basic-141ef011.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-ee39d9f7.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./popup-helper-47ee8b1d.js","./react-354fcae6.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./index-7fbd3c59.js","./raf-e95fb200.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./use-theme-f282d90a.js","./basic-50186810.css"],import.meta.url)),sticky:e.lazy(()=>t(()=>import("./basic-b563cf38.js"),["./basic-b563cf38.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-e24dce68.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./use-theme-f282d90a.js","./basic-b24e97da.css"],import.meta.url)),pagination:e.lazy(()=>t(()=>import("./basic-66a42b18.js"),["./basic-66a42b18.js","./index-acc727ed.js","./index-8ffd0b0d.css","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-de276461.js","./constants-905d732f.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-95f1e0da.js","./use-theme-f282d90a.js"],import.meta.url)),skeleton:e.lazy(()=>t(()=>import("./basic-f26ef4ba.js"),["./basic-f26ef4ba.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-0f9a0d7a.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./demo-doge-1162f15a.js","./use-theme-f282d90a.js","./basic-8c33224a.css"],import.meta.url)),switch:e.lazy(()=>t(()=>import("./basic-b58dc759.js"),["./basic-b58dc759.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-0f9a0d7a.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./constants-905d732f.js","./use-theme-f282d90a.js","./basic-207a1348.css"],import.meta.url)),stepper:e.lazy(()=>t(()=>import("./basic-e4d241f4.js"),["./basic-e4d241f4.js","./index-acc727ed.js","./index-8ffd0b0d.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./index-ad86e5f1.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./use-focus-cc6e6d02.js","./scroll-a0e7f6b9.js","./detect-9e279ab2.js","./event-471798e4.js","./misc-276e45ca.js","./format-73c0cb3b.js","./use-theme-f282d90a.js","./basic-a92bb3c0.css"],import.meta.url)),uploader:e.lazy(()=>t(()=>import("./basic-c578be6a.js"),["./basic-c578be6a.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-2fa5ee6e.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-de276461.js","./misc-276e45ca.js","./index-141554e4.js","./demo-dog-01-2d98fb22.js","./demo-dog-03-35ee3292.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./constants-905d732f.js","./event-471798e4.js","./use-unmounted-ref-dd1b8a47.js","./index-ee39d9f7.js","./popup-helper-47ee8b1d.js","./react-354fcae6.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-theme-f282d90a.js","./basic-e0b7d498.css"],import.meta.url)),tag:e.lazy(()=>t(()=>import("./basic-5529b3ed.js"),["./basic-5529b3ed.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-60d66135.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./misc-276e45ca.js","./CSSTransition-08aaae48.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./constants-905d732f.js","./use-theme-f282d90a.js"],import.meta.url)),divider:e.lazy(()=>t(()=>import("./basic-a440cd9c.js"),["./basic-a440cd9c.js","./index-acc727ed.js","./index-8ffd0b0d.css","./config-component-props-c0788442.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js"],import.meta.url)),grid:e.lazy(()=>t(()=>import("./basic-67f14c73.js"),["./basic-67f14c73.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-7e8a7ff6.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-7839bc71.js","./constants-905d732f.js","./react-354fcae6.js","./use-merged-prop-78f8d6c6.js","./demo-dog-01-2d98fb22.js","./demo-dog-03-35ee3292.js","./index-141554e4.js","./use-update-effect-9fcceba0.js","./misc-276e45ca.js","./use-merged-prop-ref-b9b1260a.js","./use-theme-f282d90a.js","./basic-9e2b6a53.css"],import.meta.url)),tabs:e.lazy(()=>t(()=>import("./basic-015f3d50.js"),["./basic-015f3d50.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-7284439f.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./use-creation-aa086326.js","./index-e24dce68.js","./event-471798e4.js","./detect-9e279ab2.js","./misc-276e45ca.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./format-73c0cb3b.js","./index-7fbd3c59.js","./use-on-popup-open-e0fdd969.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-354fcae6.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./use-get-state-708b6cfd.js","./constants-905d732f.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-ee39d9f7.js","./index-95f1e0da.js","./popup-helper-47ee8b1d.js","./index-071cdb70.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-theme-f282d90a.js","./basic-6fde8c4c.css"],import.meta.url)),picker:e.lazy(()=>t(()=>import("./basic-204eeb34.js"),["./basic-204eeb34.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-72db9aa5.js","./config-data-names-cf5b0d3b.js","./misc-276e45ca.js","./detect-9e279ab2.js","./use-creation-aa086326.js","./format-73c0cb3b.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./use-update-effect-9fcceba0.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-4c2dac52.js","./index-95f1e0da.js","./index-de276461.js","./constants-905d732f.js","./use-get-state-708b6cfd.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-cd3ec507.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-focus-cc6e6d02.js","./scroll-a0e7f6b9.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./index-58401949.js","./CSSTransition-08aaae48.js","./index-ee39d9f7.js","./popup-helper-47ee8b1d.js","./react-354fcae6.js","./use-theme-f282d90a.js"],import.meta.url)),rate:e.lazy(()=>t(()=>import("./basic-3a94b770.js"),["./basic-3a94b770.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-ee39d9f7.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./popup-helper-47ee8b1d.js","./misc-276e45ca.js","./react-354fcae6.js","./config-component-props-c0788442.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./index-24067063.js","./use-theme-f282d90a.js"],import.meta.url)),radio:e.lazy(()=>t(()=>import("./basic-0da7bc63.js"),["./basic-0da7bc63.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-4d4b96fd.js","./use-checkbox-render-fdfb545a.js","./use-merged-prop-78f8d6c6.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./event-471798e4.js","./misc-276e45ca.js","./config-component-props-c0788442.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./demo-doge-reverse-b292161e.js","./demo-doge-1162f15a.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./constants-905d732f.js","./use-theme-f282d90a.js","./basic-b8278aee.css"],import.meta.url)),dialog:e.lazy(()=>t(()=>import("./basic-e790eb9e.js"),["./basic-e790eb9e.js","./index-acc727ed.js","./index-8ffd0b0d.css","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./popup-helper-47ee8b1d.js","./detect-9e279ab2.js","./misc-276e45ca.js","./react-354fcae6.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./constants-905d732f.js","./event-471798e4.js","./index-de276461.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./index-9ea1a4ee.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-ee39d9f7.js","./demo-doge-1162f15a.js","./use-theme-f282d90a.js","./basic-79edcc0c.css"],import.meta.url)),cascader:e.lazy(()=>t(()=>import("./basic-6818bc85.js"),["./basic-6818bc85.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-cd3ec507.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-merged-prop-78f8d6c6.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./use-focus-cc6e6d02.js","./scroll-a0e7f6b9.js","./index-95f1e0da.js","./use-creation-aa086326.js","./misc-276e45ca.js","./use-unmounted-ref-dd1b8a47.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./index-4c2dac52.js","./index-de276461.js","./index-7284439f.js","./index-e24dce68.js","./style-696f78db.js","./index-7fbd3c59.js","./raf-e95fb200.js","./react-354fcae6.js","./use-safe-state-54822164.js","./use-get-state-708b6cfd.js","./config-data-names-cf5b0d3b.js","./use-theme-f282d90a.js"],import.meta.url)),"notice-bar":e.lazy(()=>t(()=>import("./basic-c0ce838c.js"),["./basic-c0ce838c.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./index-7fbd3c59.js","./config-component-props-c0788442.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./event-471798e4.js","./misc-276e45ca.js","./use-on-popup-open-e0fdd969.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-354fcae6.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./style-696f78db.js","./use-theme-f282d90a.js","./basic-497173ad.css"],import.meta.url)),field:e.lazy(()=>t(()=>import("./basic-e1dcf8ee.js"),["./basic-e1dcf8ee.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-cd3ec507.js","./index-9ea1a4ee.js","./config-component-props-c0788442.js","./constants-905d732f.js","./use-merged-prop-78f8d6c6.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./use-focus-cc6e6d02.js","./scroll-a0e7f6b9.js","./index-95f1e0da.js","./use-creation-aa086326.js","./misc-276e45ca.js","./use-demo-translate-af347a14.js","./index-1ade8160.js","./event-471798e4.js","./use-theme-f282d90a.js"],import.meta.url)),"date-picker":e.lazy(()=>t(()=>import("./basic-649dd299.js"),["./basic-649dd299.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-2416145c.js","./config-component-props-c0788442.js","./use-creation-aa086326.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-72db9aa5.js","./config-data-names-cf5b0d3b.js","./misc-276e45ca.js","./detect-9e279ab2.js","./format-73c0cb3b.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./event-471798e4.js","./touch-helper-e91fac31.js","./index-4c2dac52.js","./index-95f1e0da.js","./index-de276461.js","./constants-905d732f.js","./use-get-state-708b6cfd.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./use-theme-f282d90a.js"],import.meta.url)),form:e.lazy(()=>t(()=>import("./basic-c425a04d.js"),["./basic-c425a04d.js","./index-acc727ed.js","./index-8ffd0b0d.css","./demo-dog-01-2d98fb22.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-966462f2.js","./use-creation-aa086326.js","./use-get-state-708b6cfd.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-de276461.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-3ebd212e.js","./use-controlled-state-2016da2e.js","./use-checkbox-render-fdfb545a.js","./index-2416145c.js","./index-72db9aa5.js","./config-data-names-cf5b0d3b.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./touch-helper-e91fac31.js","./index-4c2dac52.js","./index-cd3ec507.js","./index-9ea1a4ee.js","./use-focus-cc6e6d02.js","./index-1e5b0c98.js","./CSSTransition-08aaae48.js","./index-071cdb70.js","./index-58401949.js","./index-4d4b96fd.js","./index-24067063.js","./index-ad86e5f1.js","./index-0f9a0d7a.js","./index-2fa5ee6e.js","./index-141554e4.js","./use-theme-f282d90a.js","./basic-32214d56.css"],import.meta.url)),"error-boundary":e.lazy(()=>t(()=>import("./basic-92ffc80a.js"),["./basic-92ffc80a.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-theme-f282d90a.js"],import.meta.url)),calendar:e.lazy(()=>t(()=>import("./basic-414b738b.js"),["./basic-414b738b.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-966462f2.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./use-creation-aa086326.js","./use-get-state-708b6cfd.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-de276461.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./index-ee39d9f7.js","./popup-helper-47ee8b1d.js","./react-354fcae6.js","./index-071cdb70.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-theme-f282d90a.js"],import.meta.url)),notify:e.lazy(()=>t(()=>import("./basic-2dcb1062.js"),["./basic-2dcb1062.js","./index-acc727ed.js","./index-8ffd0b0d.css","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./popup-helper-47ee8b1d.js","./detect-9e279ab2.js","./misc-276e45ca.js","./react-354fcae6.js","./config-component-props-c0788442.js","./index-071cdb70.js","./use-on-popup-open-e0fdd969.js","./event-471798e4.js","./scroll-a0e7f6b9.js","./touch-helper-e91fac31.js","./index-58401949.js","./CSSTransition-08aaae48.js","./use-controlled-state-2016da2e.js","./use-update-effect-9fcceba0.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-9ea1a4ee.js","./constants-905d732f.js","./index-95f1e0da.js","./format-73c0cb3b.js","./use-theme-f282d90a.js"],import.meta.url)),"config-provider":e.lazy(()=>t(()=>import("./basic-1ad92758.js"),["./basic-1ad92758.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-966462f2.js","./use-creation-aa086326.js","./use-get-state-708b6cfd.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./index-de276461.js","./use-on-popup-open-e0fdd969.js","./scroll-a0e7f6b9.js","./raf-e95fb200.js","./index-cd3ec507.js","./index-9ea1a4ee.js","./use-controlled-state-2016da2e.js","./use-focus-cc6e6d02.js","./index-1e5b0c98.js","./CSSTransition-08aaae48.js","./index-071cdb70.js","./touch-helper-e91fac31.js","./index-58401949.js","./index-24067063.js","./use-theme-f282d90a.js","./basic-d1be132d.css"],import.meta.url)),empty:e.lazy(()=>t(()=>import("./basic-9bc6fff3.js"),["./basic-9bc6fff3.js","./index-acc727ed.js","./index-8ffd0b0d.css","./demo-doge-1162f15a.js","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./index-1ade8160.js","./config-component-props-c0788442.js","./index-95f1e0da.js","./format-73c0cb3b.js","./detect-9e279ab2.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-7284439f.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-merged-prop-78f8d6c6.js","./use-update-effect-9fcceba0.js","./use-creation-aa086326.js","./index-e24dce68.js","./scroll-a0e7f6b9.js","./style-696f78db.js","./index-7fbd3c59.js","./use-on-popup-open-e0fdd969.js","./touch-helper-e91fac31.js","./raf-e95fb200.js","./react-354fcae6.js","./use-safe-state-54822164.js","./use-unmounted-ref-dd1b8a47.js","./use-get-state-708b6cfd.js","./use-theme-f282d90a.js","./basic-f3c2bcbe.css"],import.meta.url)),space:e.lazy(()=>t(()=>import("./basic-45b10d7a.js"),["./basic-45b10d7a.js","./index-acc727ed.js","./index-8ffd0b0d.css","./index-aac52a1a.js","./index-aecd78aa.css","./use-demo-translate-af347a14.js","./config-component-props-c0788442.js","./style-696f78db.js","./detect-9e279ab2.js","./react-354fcae6.js","./index-1ade8160.js","./index-95f1e0da.js","./format-73c0cb3b.js","./constants-905d732f.js","./event-471798e4.js","./misc-276e45ca.js","./index-4d4b96fd.js","./use-checkbox-render-fdfb545a.js","./use-merged-prop-78f8d6c6.js","./use-controlled-state-2016da2e.js","./use-merged-prop-ref-b9b1260a.js","./use-update-effect-9fcceba0.js","./use-theme-f282d90a.js","./basic-2e384904.css"],import.meta.url))},F=e.createContext({locale:"en-US",theme:"light"}),U=F;const X=V("demo"),D=()=>{const o=z(),{demo:c,locale:h,key:s,theme:i}=e.useMemo(()=>{const n=o.component,E=o.locale==="zh-CN"?"zh-CN":"en-US",f=n?j[n]:void 0,$=o.theme==="dark"?"dark":"light";return{demo:f,locale:E,key:n,theme:$}},[o]);return C(i),d(R.StrictMode,{children:d(U.Provider,{value:{locale:h,theme:i},children:d(N,{locale:h==="zh-CN"?M:g,children:d("section",{className:x(X({[`${i}`]:i!=="light"}),`demo-${s}`),children:c!=null&&d(e.Suspense,{fallback:d(I,{}),children:d(c,{})})})})})})};D.displayName="Demo";const G=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{N as C,k as D,U as a,T as b,g as e,B as g,G as i,M as z};
