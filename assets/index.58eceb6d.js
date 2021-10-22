var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{r as c,b as l,P as s,o as d,L as u,h as _}from"./vendor.74addd0f.js";import{a as m,j as p,b as f,_ as h,F as y,c as C,l as E,E as k,P as N}from"./index.0b79de82.js";import{n as T,u as b}from"./use-theme.67eface3.js";var w,g=c.exports,O=(w=g)&&"object"==typeof w&&"default"in w?w.default:w;function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=!("undefined"==typeof window||!window.document||!window.document.createElement);var x=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var i,o=[];function a(){i=e(o.map((function(e){return e.props}))),c.canUseDOM?t(i):r&&(i=r(i))}var c=function(e){var t,r;function c(){return e.apply(this,arguments)||this}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,c.peek=function(){return i},c.rewind=function(){if(c.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,o=[],e};var l=c.prototype;return l.UNSAFE_componentWillMount=function(){o.push(this),a()},l.componentDidUpdate=function(){a()},l.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),a()},l.render=function(){return O.createElement(n,this.props)},c}(g.PureComponent);return v(c,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),v(c,"canUseDOM",A),c}},j="undefined"!=typeof Element,S="function"==typeof Map,P="function"==typeof Set,I="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function L(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,i,o;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!L(e[n],t[n]))return!1;return!0}if(S&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!L(n.value[1],t.get(n.value[0])))return!1;return!0}if(P&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(I&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;if(j&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==i[n]&&"__v"!==i[n]&&"__o"!==i[n]||!e.$$typeof)&&!L(e[i[n]],t[i[n]]))return!1;return!0}return e!=e&&t!=t}var R=function(e,t){try{return L(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},D="bodyAttributes",V="htmlAttributes",U="titleAttributes",z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(z).map((function(e){return z[e]}));var M,B,F,H,$="charset",q="cssText",Y="href",X="http-equiv",K="innerHTML",G="itemprop",W="name",J="property",Q="rel",Z="src",ee="target",te={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},re="defaultTitle",ne="defer",ie="encodeSpecialCharacters",oe="onChangeClientState",ae="titleTemplate",ce=Object.keys(te).reduce((function(e,t){return e[te[t]]=t,e}),{}),le=[z.NOSCRIPT,z.SCRIPT,z.STYLE],se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ue=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},pe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},fe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},he=function(e){var t=Ne(e,z.TITLE),r=Ne(e,ae);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Ne(e,re);return t||n||void 0},ye=function(e){return Ne(e,oe)||function(){}},Ce=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _e({},e,t)}),{})},Ee=function(e,t){return t.filter((function(e){return void 0!==e[z.BASE]})).map((function(e){return e[z.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},ke=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Oe("Helmet: "+e+' should be of type "Array". Instead found type "'+se(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||r===Q&&"canonical"===e[r].toLowerCase()||l===Q&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==K&&c!==q&&c!==G||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=d({},n[c],i[c]);n[c]=l}return e}),[]).reverse()},Ne=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Te=(M=Date.now(),function(e){var t=Date.now();t-M>16?(M=t,e(t)):setTimeout((function(){Te(e)}),0)}),be=function(e){return clearTimeout(e)},we="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Te:global.requestAnimationFrame||Te,ge="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||be:global.cancelAnimationFrame||be,Oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ve=null,Ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,d=e.styleTags,u=e.title,_=e.titleAttributes;Se(z.BODY,n),Se(z.HTML,i),je(u,_);var m={baseTag:Pe(z.BASE,r),linkTags:Pe(z.LINK,o),metaTags:Pe(z.META,a),noscriptTags:Pe(z.NOSCRIPT,c),scriptTags:Pe(z.SCRIPT,s),styleTags:Pe(z.STYLE,d)},p={},f={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(f[e]=m[e].oldTags)})),t&&t(),l(e,p,f)},xe=function(e){return Array.isArray(e)?e.join(""):e},je=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Se(z.TITLE,t)},Se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var d=o.indexOf(l);-1!==d&&o.splice(d,1)}for(var u=o.length-1;u>=0;u--)r.removeAttribute(o[u]);i.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},Pe=function(e,t){var r=document.head||document.querySelector(z.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===K)r.innerHTML=t.innerHTML;else if(n===q)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},Ie=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[te[r]||r]=e[r],t}),t)},Re=function(e,t,r){switch(e){case z.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,i=Le(r,n),[l.createElement(z.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=Ie(r),o=xe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+fe(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+fe(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case D:case V:return{toComponent:function(){return Le(t)},toString:function(){return Ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=te[e]||e;if(r===K||r===q){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),l.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===K||e===q)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+fe(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===le.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},De=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,d=e.title,u=void 0===d?"":d,_=e.titleAttributes;return{base:Re(z.BASE,t,n),bodyAttributes:Re(D,r,n),htmlAttributes:Re(V,i,n),link:Re(z.LINK,o,n),meta:Re(z.META,a,n),noscript:Re(z.NOSCRIPT,c,n),script:Re(z.SCRIPT,l,n),style:Re(z.STYLE,s,n),title:Re(z.TITLE,{title:u,titleAttributes:_},n)}},Ve=x((function(e){return{baseTag:Ee([Y,ee],e),bodyAttributes:Ce(D,e),defer:Ne(e,ne),encode:Ne(e,ie),htmlAttributes:Ce(V,e),linkTags:ke(z.LINK,[Q,Y],e),metaTags:ke(z.META,[W,$,X,J,G],e),noscriptTags:ke(z.NOSCRIPT,[K],e),onChangeClientState:ye(e),scriptTags:ke(z.SCRIPT,[Z,K],e),styleTags:ke(z.STYLE,[q],e),title:he(e),titleAttributes:Ce(U,e)}}),(function(e){ve&&ge(ve),e.defer?ve=we((function(){Ae(e,(function(){ve=null}))})):(Ae(e),ve=null)}),De)((function(){return null})),Ue=(B=Ve,H=F=function(e){function t(){return de(this,t),pe(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!R(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case z.SCRIPT:case z.NOSCRIPT:return{innerHTML:t};case z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return _e({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_e({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case z.TITLE:return _e({},i,((t={})[n.type]=a,t.titleAttributes=_e({},o),t));case z.BODY:return _e({},i,{bodyAttributes:_e({},o)});case z.HTML:return _e({},i,{htmlAttributes:_e({},o)})}return _e({},i,((r={})[n.type]=_e({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_e({},t);return Object.keys(e).forEach((function(t){var n;r=_e({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ce[r]||r]=e[r],t}),t)}(me(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case z.LINK:case z.META:case z.NOSCRIPT:case z.SCRIPT:case z.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=me(e,["children"]),n=_e({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(B,n)},ue(t,null,[{key:"canUseDOM",set:function(e){B.canUseDOM=e}}]),t}(l.Component),F.propTypes={base:s.object,bodyAttributes:s.object,children:s.oneOfType([s.arrayOf(s.node),s.node]),defaultTitle:s.string,defer:s.bool,encodeSpecialCharacters:s.bool,htmlAttributes:s.object,link:s.arrayOf(s.object),meta:s.arrayOf(s.object),noscript:s.arrayOf(s.object),onChangeClientState:s.func,script:s.arrayOf(s.object),style:s.arrayOf(s.object),title:s.string,titleAttributes:s.object,titleTemplate:s.string},F.defaultProps={defer:!0,encodeSpecialCharacters:!0},F.peek=B.peek,F.rewind=function(){var e=B.rewind();return e||(e=De({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},H);Ue.renderStatic=Ue.rewind;var ze="0.0.3";const Me=c.exports.createContext({theme:"light",locale:"en-US",responsive:{},setTheme:T});const Be=f("index"),Fe={"zh-CN":{slogan:"轻量、可靠的移动端 React 组件库",changeTheme:"换个主题",getStarted:"开始使用"},"en-US":{slogan:"Lightweight Mobile UI Components built in React",changeTheme:"Change Theme",getStarted:"Get Started"}},He=e=>{const{locale:t,setTheme:r,theme:n}=c.exports.useContext(Me),i=Fe[t];return m("div",{className:Be(),children:p("div",{className:Be("content"),children:[m("h1",{className:Be("logo"),children:"FNX UI"}),m("div",{className:Be("slogan"),children:e.slogan}),p("div",{className:Be("button-list"),children:[m("a",{className:Be("button"),onClick:()=>r("dark"===n?"light":"dark"),children:m("span",{children:i.changeTheme})}),m(u,{className:Be("button",{primary:!0}),to:`/${t}/docs/getting-started`,children:m("span",{children:i.getStarted})})]})]})})};He.displayName="SiteIndex";const $e=[{title:"Basic Components",titleCN:"基本组件",children:[{key:"button",title:"Button",titleCN:"按钮",markdown:()=>h((()=>import("./index.en-US.3fdd580e.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.6cf4a409.js")),[])},{key:"cell",title:"Cell",titleCN:"单元格",markdown:()=>h((()=>import("./index.en-US.71f7111d.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.68e25206.js")),[])},{key:"icon",title:"Icon",titleCN:"图标",markdown:()=>h((()=>import("./index.en-US.7ddc09f8.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.8248019d.js")),[])},{key:"image",title:"Image",titleCN:"图片",markdown:()=>h((()=>import("./index.en-US.d4053123.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.f531cec4.js")),[])},{key:"layout",title:"Layout",titleCN:"布局",markdown:()=>h((()=>import("./index.en-US.ac1c98ab.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.16eed72a.js")),[])},{key:"popup",title:"Popup",titleCN:"弹出层",markdown:()=>h((()=>import("./index.en-US.a628ab3b.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.519715cd.js")),[])},{key:"toast",title:"Toast",titleCN:"轻提示",markdown:()=>h((()=>import("./index.en-US.11cc8858.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.38ab5f8f.js")),[])}]},{title:"Form Components",titleCN:"表单组件",children:[{key:"calendar",title:"Calendar",titleCN:"日历",markdown:()=>h((()=>import("./index.en-US.82f0901e.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.12e97e3d.js")),[])},{key:"cascader",title:"Cascader",titleCN:"级联选择",markdown:()=>h((()=>import("./index.en-US.4feb9123.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.699fa4ab.js")),[])},{key:"checkbox",title:"Checkbox",titleCN:"复选框",markdown:()=>h((()=>import("./index.en-US.27361ad1.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.6f689b6b.js")),[])},{key:"date-picker",title:"DatePicker",titleCN:"时间选择",markdown:()=>h((()=>import("./index.en-US.de7a91c7.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.3af1147f.js")),[])},{key:"field",title:"Field",titleCN:"输入框",markdown:()=>h((()=>import("./index.en-US.fa58882d.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.47b15d5b.js")),[])},{key:"form",title:"Form",titleCN:"表单",markdown:()=>h((()=>import("./index.en-US.4af11328.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.e52d277c.js")),[])},{key:"switch",title:"Switch",titleCN:"开关",markdown:()=>h((()=>import("./index.en-US.aa06f98d.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.d7b9e0b6.js")),[])},{key:"uploader",title:"Uploader",titleCN:"文件上传",markdown:()=>h((()=>import("./index.en-US.b7ba0886.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.6c5e3b3d.js")),[])},{key:"stepper",title:"Stepper",titleCN:"步进器",markdown:()=>h((()=>import("./index.en-US.996802a0.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.de8dd90d.js")),[])},{key:"picker",title:"Picker",titleCN:"选择器",markdown:()=>h((()=>import("./index.en-US.980592fd.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.bbfebe27.js")),[])},{key:"radio",title:"Radio",titleCN:"单选框",markdown:()=>h((()=>import("./index.en-US.2da39019.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.b267e0e4.js")),[])},{key:"rate",title:"Rate",titleCN:"评分",markdown:()=>h((()=>import("./index.en-US.c967a21c.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.e98733da.js")),[])}]},{title:"Action Components",titleCN:"反馈组件",children:[{key:"dialog",title:"Dialog",titleCN:"对话框",markdown:()=>h((()=>import("./index.en-US.66932c63.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.39832e03.js")),[])},{key:"error-boundary",title:"ErrorBoundary",titleCN:"错误边界",markdown:()=>h((()=>import("./index.en-US.ff1d2b14.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.4052720a.js")),[])},{key:"loading",title:"Loading",titleCN:"加载",markdown:()=>h((()=>import("./index.en-US.f67652b5.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.edfef133.js")),[])},{key:"notify",title:"Notify",titleCN:"消息通知",markdown:()=>h((()=>import("./index.en-US.7461ec7f.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.86553c19.js")),[])},{key:"overlay",title:"Overlay",titleCN:"遮罩层",markdown:()=>h((()=>import("./index.en-US.63313196.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.037b2757.js")),[])},{key:"pull-refresh",title:"PullRefresh",titleCN:"下拉刷新",markdown:()=>h((()=>import("./index.en-US.b3870d8d.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.aa352dd6.js")),[])}]},{title:"Display Components",titleCN:"展示组件",children:[{key:"badge",title:"Badge",titleCN:"徽标",markdown:()=>h((()=>import("./index.en-US.4f9e6640.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.83065531.js")),[])},{key:"circle",title:"Circle",titleCN:"环形进度条",markdown:()=>h((()=>import("./index.en-US.56f177a5.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.a405fa0c.js")),[])},{key:"collapse",title:"Collapse",titleCN:"折叠面板",markdown:()=>h((()=>import("./index.en-US.a158c914.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.bc017e3b.js")),[])},{key:"divider",title:"Divider",titleCN:"分隔线",markdown:()=>h((()=>import("./index.en-US.b0f76642.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.a7346875.js")),[])},{key:"list",title:"List",titleCN:"列表",markdown:()=>h((()=>import("./index.en-US.c7d91b3b.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.18546720.js")),[])},{key:"skeleton",title:"Skeleton",titleCN:"骨架屏",markdown:()=>h((()=>import("./index.en-US.71bca02b.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.ed104496.js")),[])},{key:"sticky",title:"Sticky",titleCN:"粘性布局",markdown:()=>h((()=>import("./index.en-US.452d4335.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.756b2401.js")),[])},{key:"swipe",title:"Swipe",titleCN:"轮播",markdown:()=>h((()=>import("./index.en-US.a9b281d5.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.be07ea95.js")),[])},{key:"notice-bar",title:"NoticeBar",titleCN:"通知栏",markdown:()=>h((()=>import("./index.en-US.b2e9cc78.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.34886074.js")),[])},{key:"tag",title:"Tag",titleCN:"标签",markdown:()=>h((()=>import("./index.en-US.400790c7.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.545cdcd4.js")),[])}]},{title:"Navigation Components",titleCN:"导航组件",children:[{key:"grid",title:"Grid",titleCN:"宫格",markdown:()=>h((()=>import("./index.en-US.02005623.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.7d6ee9be.js")),[])},{key:"pagination",title:"Pagination",titleCN:"分页",markdown:()=>h((()=>import("./index.en-US.647ed827.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.06349650.js")),[])},{key:"tabs",title:"Tabs",titleCN:"标签页",markdown:()=>h((()=>import("./index.en-US.bb3c3790.js")),[]),markdownCN:()=>h((()=>import("./index.zh-CN.1b1efb92.js")),[])}]}],qe=[{key:"docs",title:"Docs",titleCN:"文档",children:[{title:"Introduction",titleCN:"介绍",children:[{key:"introduction",title:"FNX UI",titleCN:"FNX UI",markdown:()=>h((()=>import("./introduction.en-US.ad6fd4fc.js")),[]),markdownCN:()=>h((()=>import("./introduction.zh-CN.d2e8fa77.js")),[])}]},{title:"Guides",titleCN:"指南",children:[{key:"getting-started",title:"Getting Started",titleCN:"快速上手",markdown:()=>h((()=>import("./getting-started.en-US.b0655c29.js")),[]),markdownCN:()=>h((()=>import("./getting-started.zh-CN.9d61e6e1.js")),[])},{key:"import-on-demand",title:"Import on Demand",titleCN:"按需引入",markdown:()=>h((()=>import("./import-on-demand.en-US.c1e374da.js")),[]),markdownCN:()=>h((()=>import("./import-on-demand.zh-CN.5a2dd69f.js")),[])},{key:"supported-platforms",title:"Supported Platforms",titleCN:"支持的平台",markdown:()=>h((()=>import("./supported-platforms.en-US.f0437b01.js")),[]),markdownCN:()=>h((()=>import("./supported-platforms.zh-CN.b567c4ce.js")),[])},{key:"i18n",title:"Internationalization",titleCN:"国际化",markdown:()=>h((()=>import("./i18n.en-US.ddef62e6.js")),[]),markdownCN:()=>h((()=>import("./i18n.zh-CN.3dae0c3f.js")),[])}]}],component:c.exports.lazy((()=>h((()=>import("./index.67f38745.js")),["assets/index.67f38745.js","assets/index.bf721213.css","assets/vendor.74addd0f.js","assets/scroll.e11e728c.js","assets/use-theme.67eface3.js","assets/index.0b79de82.js","assets/index.475b234e.css","assets/index.0947bfd7.js","assets/index.4ef232c6.css"])))},{key:"components",title:"Components",titleCN:"组件",children:$e,component:c.exports.lazy((()=>h((()=>import("./index.9be930a7.js")),["assets/index.9be930a7.js","assets/index.f14200c8.css","assets/vendor.74addd0f.js","assets/scroll.e11e728c.js","assets/use-theme.67eface3.js","assets/index.0b79de82.js","assets/index.475b234e.css","assets/index.0947bfd7.js","assets/index.4ef232c6.css","assets/history-utils.e8fc90f7.js"])))}];const Ye=f("site-menu-tree"),Xe=e=>{const{locale:l,category:s,menu:d}=c.exports.useContext(Me);return s?m("div",(_=((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&a(e,r,t[r]);return e})({},e),f={className:C(Ye(),e.className),children:(s.children||[]).map(((e,t)=>p("div",{className:Ye("menu-group"),children:[m("h3",{className:Ye("menu-group-title"),children:"zh-CN"===l?e.titleCN:e.title}),(e.children||[]).map((e=>{return m("div",{className:Ye("menu-item"),children:m("div",{className:Ye("menu-item-title",{active:e.key===(null==d?void 0:d.key)}),children:m(u,{to:`/${l}/${s.key}/${e.key}`,replace:!0,children:(t=e,"en-US"===l?t.title:"components"===(null==s?void 0:s.key)?p(y,{children:[t.titleCN,m("span",{children:t.title})]}):t.titleCN)})})},e.key);var t}))]},t)))},t(_,r(f)))):m(y,{});var _,f};Xe.displayName="SideMenuTree";const Ke=f("site-header"),Ge=p("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:[m("circle",{cx:"18",cy:"18",r:"7.9"}),m("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2"}),m("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2",y:"30"}),m("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",y:"16.2"}),m("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",x:"30",y:"16.2"}),m("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 29.02 7.02)",width:"6",x:"26.02",y:"5.22"}),m("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7.02 29.02)",width:"6",x:"4.02",y:"27.22"}),m("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7 7)",width:"3.6",x:"5.2",y:"4"}),m("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 28.98 28.98)",width:"3.6",x:"27.18",y:"25.98"})]}),We=m("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:m("path",{d:"M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm1 29.964c-.33.023-.664.036-1 .036a14 14 0 0 1 0-28c.336 0 .67.013 1 .036a22 22 0 0 0 0 27.928z"})}),Je=m("svg",{viewBox:"64 64 896 896",fill:"currentColor",width:"1em",height:"1em",children:m("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})}),Qe=()=>{const{theme:e,setTheme:t,locale:r,category:n,menu:i,responsive:o}=c.exports.useContext(Me),[a,l]=c.exports.useState(!1);c.exports.useEffect((()=>{if(a){const e=document.body;return e.style.overflow="hidden",()=>{e.style.removeProperty("overflow")}}}),[a]);const s=()=>p(y,{children:[qe.map((e=>{const t=(e.children||[])[0],i=t?(t.children||[])[0]:void 0;return m("li",{className:Ke("nav-item",{active:(null==n?void 0:n.key)===e.key}),children:m(u,{to:i?`/${r}/${e.key}/${i.key}`:`/${r}`,replace:!1,children:"en-US"===r?e.title:e.titleCN})},e.key)})),m("li",{className:Ke("nav-item"),children:m("a",{href:"https://github.com/Rockcookies/fnx-ui",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),m("li",{className:Ke("nav-button"),children:m(u,{to:n&&i?`/${"en-US"===r?"zh-CN":"en-US"}/${n.key}/${i.key}`:"/"+("en-US"===r?"zh-CN":"en-US"),replace:!1,children:"en-US"===r?"中文":"English"})}),m("li",{className:Ke("nav-ico"),children:m("a",{onClick:()=>t("dark"===e?"light":"dark"),children:"dark"===e?Ge:We})}),m("li",{children:ze})]});return p("header",{className:Ke({mobile:!o.md}),children:[!o.md&&p(y,{children:[m("i",{className:Ke("aside-mask",{expanded:a}),onClick:()=>l(!1)}),m("div",{className:Ke("aside",{expanded:a}),onClick:()=>l(!1),children:p("div",{className:Ke("aside-container"),children:[m("ul",{className:Ke("aside-nav"),children:s()}),m(Xe,{})]})})]}),p("div",{className:Ke("container"),children:[!o.md&&m("a",{className:Ke("aside-handler"),onClick:()=>l(!a),children:Je}),p(u,{className:Ke("logo"),to:`/${r}`,replace:!1,onClick:()=>l(!1),children:[m("img",{src:E}),m("span",{children:"FNX UI"})]}),m("ul",{className:Ke("nav"),children:s()})]})]})};Qe.displayName="SiteHeader";const Ze=f("site"),et=function(e){const t=new Set;let r;const n=()=>{const t=window.innerWidth,n={};let i=!1;for(const o of Object.keys(e))n[o]=t>=e[o],r&&n[o]===r[o]||(i=!0);i&&(r=n)};return()=>{r||"undefined"==typeof window||(n(),window.addEventListener("resize",(()=>{const e=r;if(n(),e!==r)for(const r of t)r()})));const e="undefined"!=typeof window,[i,o]=c.exports.useState(r);return c.exports.useEffect((()=>{if(!e)return;const n=()=>{o(r)};return t.add(n),()=>{t.delete(n)}}),[e]),[i]}}({xs:575,sm:576,md:768,lg:992,xl:1200,xxl:1600}),tt={"zh-CN":{slogan:"轻量、可靠的移动端 React 组件库"},"en-US":{slogan:"Lightweight Mobile UI Components built in React"}},rt=()=>{const[e]=et(),t=_("/:locale/:category?/:menu?"),r=(null==t?void 0:t.params)||{},n=c.exports.useMemo((()=>"zh-CN"===r.locale?"zh-CN":"en-US"),[r.locale]),i=tt[n],[o,a]=c.exports.useState((()=>{const e=localStorage.getItem("theme");if(e)return"dark"===e?"dark":"light";return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"})),l=c.exports.useCallback((e=>{localStorage.setItem("theme",e),a(e)}),[]),s=c.exports.useMemo((()=>{const e=null!=r.category?qe.findIndex((({key:e})=>e===r.category)):-1;return qe[e]}),[r.category]),d=c.exports.useMemo((()=>{if(null!=r.menu)for(const{children:e}of(null==s?void 0:s.children)||[])for(const t of e||[])if(t.key===r.menu)return t}),[s,r.menu]);b(o);return m(Me.Provider,{value:{locale:n,responsive:e||{},theme:o,setTheme:l,category:s,menu:d},children:p("section",{className:Ze({mobile:!(null==e?void 0:e.md),"layout-mode":null==s}),children:[m(Ue,{children:m("title",{children:d?`${"zh-CN"===n?d.titleCN:d.title} - FNX-UI`:`FNX-UI - ${i.slogan}`})}),m(Qe,{}),m(Xe,{className:Ze("aside")}),p("div",{className:Ze("main"),children:[m("div",{className:Ze("content"),children:m(k,{className:Ze("error-fallback"),children:s?m(c.exports.Suspense,{fallback:m(N,{}),children:m(s.component,{})}):m(He,{slogan:i.slogan})})}),m("footer",{className:Ze("footer"),children:p("div",{className:Ze("copyright"),children:["FNX UI ",ze," · Made by",m("a",{href:"https://github.com/Rockcookies",target:"_blank",rel:"noopener noreferrer",children:"RockCookies"})]})})]})]})})};rt.displayName="Layout";var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rt});export{Me as S,nt as i};