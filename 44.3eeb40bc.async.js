(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"5p7d":function(e,t,a){},"9A+y":function(e,t,a){"use strict";var n=a("ERkP"),c=a("GRM5");function r(e,t){var a=Object(n["useContext"])(c["a"]),r=a.locale,i=Object(n["useMemo"])((function(){return e[r]||e[t]}),[r,e,t]);return[i]}t["a"]=r},BoRD:function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,"a",(function(){return n}))},EEr5:function(e,t,a){"use strict";var n=a("BoRD"),c=a("Uwx9"),r=a("ERkP"),i=a.n(r),o=a("9cXV"),l=a("liXC"),s=(a("5p7d"),Object(o["b"])("demo-block")),d=Object(l["a"])("DemoBlock",(function(e){var t=e.className,a=e.title,r=e.children,l=e.cardMode,d=Object(c["a"])(e,["className","title","children","cardMode"]);return i.a.createElement(i.a.StrictMode,null,i.a.createElement("div",Object(n["a"])({className:Object(o["a"])(s({"card-mode":l}),t)},d),a&&i.a.createElement("div",{className:s("title")},a),i.a.createElement("div",{className:s("content")},r)))}));t["a"]=d},pg56:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a("jem/"),c=a("ERkP"),r=a.n(c),i=a("BoRD"),o=a("mQk0"),l=a("Uwx9"),s=a("uu50"),d=a("9cXV"),u=a("liXC"),m="fnx-divider",b=Object(d["b"])(m),f=Object(s["a"])({dashed:!1,hairline:!0,contentPosition:"center"}),h=Object(u["b"])("Divider",(function(e,t){var a=f(e),c=Object(n["a"])(a,2),s=c[0],u=s.dashed,m=s.hairline,h=s.contentPosition,E=c[1],v=E.className,j=E.children,O=Object(l["a"])(E,["className","children"]);return r.a.createElement("div",Object(i["a"])({className:Object(d["a"])(b(Object(o["a"])({dashed:u,hairline:m},"content-".concat(h),null!=j)),v)},O,{ref:t}),j)})),E=h,v=a("EEr5"),j=a("9A+y"),O={"zh-CN":{basicUsage:"\u57fa\u7840\u7528\u6cd5",text:"\u6587\u672c",dashed:"\u865a\u7ebf",withText:"\u5c55\u793a\u6587\u672c",contentPosition:"\u5185\u5bb9\u4f4d\u7f6e",customStyle:"\u81ea\u5b9a\u4e49\u6837\u5f0f"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}};function x(){var e=Object(j["a"])(O,"en-US"),t=Object(n["a"])(e,1),a=t[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v["a"],{cardMode:!0,title:a.basicUsage},r.a.createElement(E,null)),r.a.createElement(v["a"],{cardMode:!0,title:a.withText},r.a.createElement(E,null,a.text)),r.a.createElement(v["a"],{cardMode:!0,title:a.contentPosition},r.a.createElement(E,{contentPosition:"left"},a.text),r.a.createElement(E,{contentPosition:"right"},a.text),r.a.createElement(E,{contentPosition:"center"},a.text)),r.a.createElement(v["a"],{cardMode:!0,title:a.dashed},r.a.createElement(E,{dashed:!0,hairline:!1},a.text)),r.a.createElement(v["a"],{cardMode:!0,title:a.customStyle},r.a.createElement(E,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"}},a.text)))}},uu50:function(e,t,a){"use strict";var n=a("BcGY");function c(e,t){var a={},c=Object(n["a"])({},t),r=e;for(var i in r)a[i]=void 0!==c[i]?c[i]:r[i],delete c[i];return[a,c]}var r=c;function i(e){return function(t){return r(e,t)}}t["a"]=i}}]);