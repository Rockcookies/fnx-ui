(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{UYzo:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c=n("jem/"),o=n("ERkP"),r=n.n(o),a=n("BoRD"),i=n("BcGY"),s=n("Uwx9"),u=n("miR2"),l=n("f4WZ"),b=n("je+N"),f=n("liXC"),m=n("uu50"),d=n("RggC"),p=n("9cXV"),O="fnx-notify",j=Object(p["b"])(O),g=Object(m["a"])({type:"danger",visible:!1,duration:2e3,lockScroll:!1,position:"top"}),y=Object(f["b"])("Notify",(function(e,t){var n=g(e),u=Object(c["a"])(n,2),l=u[0],b=l.type,f=l.visible,m=l.duration,O=l.lockScroll,y=l.position,v=u[1],h=v.mountTo,w=v.message,N=v.color,E=v.background,P=v.children,C=v.className,k=v.style,T=Object(s["a"])(v,["mountTo","message","color","background","children","className","style"]),x=Object(o["useState"])(!1),I=Object(c["a"])(x,2),U=I[0],S=I[1];return Object(o["useEffect"])((function(){if(S(f),f&&m>0){var e=setTimeout((function(){S(!1)}),m);return function(){clearTimeout(e)}}}),[f,m]),r.a.createElement(d["a"],Object(a["a"])({visible:U,mountTo:h,className:Object(p["a"])(j([b]),C),renderOnShow:!0,destroyOnHide:!0,overlay:!1,lockScroll:O,position:y,style:Object(i["a"])({color:N,background:E},k)},T,{ref:t}),w||P)})),v=y,h=new b["a"],w=!1;function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.create((function(t){var n=t.onUpdate,u=t.remove,l=Object(f["a"])("NotifyStatic",(function(){var t=Object(o["useState"])(e),l=Object(c["a"])(t,2),b=l[0],f=b.onAfterHide,m=Object(s["a"])(b,["onAfterHide"]),d=l[1];return Object(o["useEffect"])((function(){var e=function(e){d((function(t){return Object(i["a"])(Object(i["a"])({},t),e)}))};return n(e)}),[]),r.a.createElement(v,Object(a["a"])({visible:!0},m,{mountTo:!1,onAfterHide:function(){u(),f&&f()}}))}));return l}),t.container)}var E=v,P=function(e,t){var n="string"===typeof e?{message:e}:e;return w||E.clearAll(),N(n,t)};E.show=function(e){return P(e)},E.useNotify=function(){var e=Object(o["useContext"])(u["a"]),t=Object(l["a"])(e);return Object(o["useMemo"])((function(){var e=function(){return{container:t.current.mountTo()}};return{show:function(t){return P(t,e())}}}),[t])},E.clearAll=function(){h.clear()},E.allowMultiple=function(e){w=!!e};var C=E,k=n("EEr5"),T=n("9A+y"),x=n("iWou"),I=n("LAbM"),U=n("P3hB"),S={"zh-CN":{basicUsage:"\u57fa\u7840\u7528\u6cd5",primary:"\u4e3b\u8981\u901a\u77e5",success:"\u6210\u529f\u901a\u77e5",danger:"\u5371\u9669\u901a\u77e5",warning:"\u8b66\u544a\u901a\u77e5",content:"\u901a\u77e5\u5185\u5bb9",notifyType:"\u901a\u77e5\u7c7b\u578b",customColor:"\u81ea\u5b9a\u4e49\u989c\u8272",customNotify:"\u81ea\u5b9a\u4e49\u914d\u7f6e",customDuration:"\u81ea\u5b9a\u4e49\u65f6\u957f",customPosition:"\u81ea\u5b9a\u4e49\u4f4d\u7f6e",countdownText:"\u5012\u8ba1\u65f6 ${second} \u79d2"},"en-US":{basicUsage:"Basic Usage",primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",customDuration:"Custom Duration",customPosition:"Custom Position",countdownText:"Close in ${second}s"}};function A(){var e=Object(T["a"])(S,"en-US"),t=Object(c["a"])(e,1),n=t[0],a=C.useNotify(),i=Object(o["useRef"])(),s=Object(o["useCallback"])((function(){null!=i.current&&(clearInterval(i.current),i.current=void 0)}),[]),u=function(){var e=3,t=a.show({duration:0,message:Object(U["g"])(n.countdownText,{second:"".concat(e)})});i.current=setInterval((function(){e--,e?t.update({message:Object(U["g"])(n.countdownText,{second:"".concat(e)})}):(s(),t.clear())}),1e3)};Object(o["useEffect"])((function(){return s}),[s]);var l=function(e,t){return r.a.createElement(x["a"],{title:e,clickable:!0,rightIcon:r.a.createElement(I["a"],{name:"arrow-right"}),onClick:t})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k["a"],{title:n.basicUsage},l(n.basicUsage,(function(){return a.show(n.content)}))),r.a.createElement(k["a"],{title:n.notifyType},l(n.primary,(function(){return a.show({message:n.content,type:"primary"})})),l(n.success,(function(){return a.show({message:n.content,type:"success"})})),l(n.danger,(function(){return a.show({message:n.content,type:"danger"})})),l(n.warning,(function(){return a.show({message:n.content,type:"warning"})}))),r.a.createElement(k["a"],{title:n.customNotify},l(n.customColor,(function(){return a.show({message:n.content,color:"#ad0000",background:"#ffe1e1"})})),l(n.customDuration,u),l(n.customPosition,(function(){a.show({message:n.content,type:"danger",position:"bottom"})}))))}},iWou:function(e,t,n){"use strict";var c=n("BoRD"),o=n("BcGY"),r=n("Uwx9"),a=n("jem/"),i=n("ERkP"),s=n.n(i),u=n("uu50"),l=n("9cXV"),b=n("liXC"),f="fnx-cell",m=Object(l["b"])(f),d=Object(u["a"])({border:!0,itemsAlign:"top",clickable:!1,titleProps:{},descriptionProps:{},contentProps:{},leftIconProps:{},rightIconProps:{}}),p=Object(b["b"])("Cell",(function(e,t){var n=d(e),u=Object(a["a"])(n,2),b=u[0],f=b.border,p=b.itemsAlign,O=b.clickable,j=b.titleProps,g=b.descriptionProps,y=b.contentProps,v=b.leftIconProps,h=b.rightIconProps,w=u[1],N=w.title,E=w.description,P=w.content,C=w.leftIcon,k=w.rightIcon,T=w.className,x=w.children,I=Object(r["a"])(w,["title","description","content","leftIcon","rightIcon","className","children"]),U=function(e,t,n,c){if(c)return Object(i["createElement"])(e,Object(o["a"])(Object(o["a"])({},n),{},{className:Object(l["a"])(t,n.className)}),c)};return s.a.createElement("div",Object(c["a"])({className:Object(l["a"])(m(["align-".concat(p),{clickable:O,"border-less":!f}]),T),role:O?"button":void 0,tabIndex:O?0:void 0},I,{ref:t}),U("span",m("left-icon"),v,C),(N||E)&&s.a.createElement("div",Object(c["a"])({},j,{className:Object(l["a"])(m("title"),j.className)}),N,U("div",m("description"),g,E)),U("div",m("content",{alone:!(N||E)}),y,P||x),U("span",m("right-icon"),h,k))})),O=p,j=n("lhOE"),g="fnx-cell-group",y=Object(l["b"])(g),v=Object(u["a"])({border:!0,inset:!1,title:null,bodyProps:{}}),h=Object(b["b"])("CellGroup",(function(e,t){var n=v(e),o=Object(a["a"])(n,2),i=o[0],u=i.title,b=i.border,f=i.inset,m=i.bodyProps,d=o[1],p=d.className,O=d.children,g=Object(r["a"])(d,["className","children"]);return s.a.createElement("div",Object(c["a"])({},g,{className:Object(l["a"])(y(),p),ref:t}),u&&s.a.createElement("div",{className:y("title",{inset:f})},u),s.a.createElement("div",Object(c["a"])({},m,{className:Object(l["a"])(y("body",{inset:f}),b&&!f&&j["e"],m.className)}),O))})),w=h,N=O;N.Group=w;t["a"]=N},lhOE:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s}));var c="fnx-hairline",o="".concat(c,"--top"),r="".concat(c,"--left"),a=("".concat(c,"--bottom"),"".concat(c,"--surround")),i="".concat(c,"--top-bottom"),s="".concat(c,"-unset--top-bottom")}}]);