(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"5p7d":function(e,t,a){},BfVv:function(e,t,a){},EEr5:function(e,t,a){"use strict";var n=a("BoRD"),c=a("Uwx9"),r=a("ERkP"),l=a.n(r),i=a("9cXV"),s=(a("5p7d"),Object(i["b"])("demo-block")),o=e=>{var t=e.className,a=e.title,r=e.children,o=e.cardMode,d=Object(c["a"])(e,["className","title","children","cardMode"]);return l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",Object(n["a"])({className:Object(i["a"])(s({"card-mode":o}),t)},d),a&&l.a.createElement("div",{className:s("title")},a),l.a.createElement("div",{className:s("content")},r)))};o.displayName="DemoBlock",t["a"]=o},YBUZ:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("jem/"),c=a("ERkP"),r=a.n(c),l=a("EEr5"),i=a("9A+y"),s=(a("BfVv"),a("cyrR")),o=a("m7hN"),d=a("9cXV"),m=Object(d["b"])("demo-overlay"),b={"zh-CN":{basicUsage:"\u57fa\u7840\u7528\u6cd5",showOverlay:"\u663e\u793a\u906e\u7f69\u5c42",embeddedContent:"\u5d4c\u5165\u5185\u5bb9"},"en-US":{basicUsage:"Basic Usage",showOverlay:"Show Overlay",embeddedContent:"Embedded Content"}};function u(){var e=Object(i["a"])(b,"en-US"),t=Object(n["a"])(e,1),a=t[0],d=Object(c["useState"])(!1),u=Object(n["a"])(d,2),v=u[0],O=u[1],j=Object(c["useState"])(!1),f=Object(n["a"])(j,2),E=f[0],y=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l["a"],{cardMode:!0,title:a.basicUsage},r.a.createElement(s["a"],{type:"primary",onClick:()=>O(!0)},a.showOverlay)),r.a.createElement(l["a"],{cardMode:!0,title:a.embeddedContent},r.a.createElement(s["a"],{type:"primary",onClick:()=>y(!0)},a.embeddedContent)),r.a.createElement(o["a"],{visible:v,onClick:()=>O(!1)}),r.a.createElement(o["a"],{visible:E,onClick:()=>y(!1)},r.a.createElement("div",{className:m("wrapper")},r.a.createElement("div",{className:m("block")}))))}},m7hN:function(e,t,a){"use strict";var n=a("BoRD"),c=a("BcGY"),r=a("Uwx9"),l=a("jem/"),i=a("ERkP"),s=a.n(i),o=a("05Xt"),d=a("nGcR"),m=a("r8Kc"),b=a("vWRp"),u=a("mDxS"),v=a("9cXV"),O="fnx-overlay",j=Object(v["b"])(O),f={visible:!1,lockScroll:!0},E=Object(i["forwardRef"])(((e,t)=>{var a=Object(b["a"])(f,e),O=Object(l["a"])(a,2),E=O[0],y=E.visible,p=E.lockScroll,h=O[1],N=h.zIndex,w=h.transitionDuration,k=h.className,C=h.style,x=h.children,R=Object(r["a"])(h,["zIndex","transitionDuration","className","style","children"]),S=Object(i["useRef"])(null),D=Object(i["useContext"])(d["a"].Context),U=Object(m["a"])(D.transitionDuration,w);Object(i["useImperativeHandle"])(t,(()=>S.current));var B=Object(i["useState"])(!1),g=Object(l["a"])(B,2),M=g[0],V=g[1],z=Object(i["useState"])(!1),I=Object(l["a"])(z,2),X=I[0],P=I[1];Object(i["useEffect"])((()=>{if(p&&X&&null!=S.current){var e=S.current,t=e=>{Object(u["c"])(e,!0)};return e.addEventListener("touchmove",t,!!u["a"]&&{passive:!1}),()=>{e.removeEventListener("touchmove",t)}}}),[X,p]),Object(i["useEffect"])((()=>{y?(P(!0),V(!1)):V(!0)}),[y]);var A=()=>{var e={};return null!=N&&(e.zIndex=N),X||(e.display="none"),U!==D.transitionDuration&&(e.transitionDuration="".concat(U,"ms")),Object(c["a"])(Object(c["a"])({},e),C)};return s.a.createElement(o["a"],{classNames:"fnx-fade",in:X&&!M,timeout:U||0,nodeRef:S,onExited:()=>{V(!1),P(!1)}},s.a.createElement("div",Object(n["a"])({className:Object(v["a"])(j(),k),style:A()},R,{ref:S}),x))}));E.displayName="Overlay",t["a"]=E},r8Kc:function(e,t,a){"use strict";function n(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];for(var c=0,r=a;c<r.length;c++){var l=r[c];if(null!=l)return l}return e}t["a"]=n}}]);