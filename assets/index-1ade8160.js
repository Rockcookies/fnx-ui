import{r as I,j as s,c as j,b as D,a as E}from"./index-acc727ed.js";import{c as O}from"./config-component-props-c0788442.js";import{I as z}from"./index-95f1e0da.js";import{b as U}from"./constants-905d732f.js";import{p as w}from"./event-471798e4.js";import{n as M}from"./misc-276e45ca.js";const T="fnx-button",t=E(T),_=O({type:"default",size:"md",iconPosition:"left",loading:!1,disabled:!1,hairline:!1,plain:!1,shape:"radius",block:!1,onClick:M}),u=I.forwardRef((b,h)=>{const[{type:y,size:g,iconPosition:r,loading:n,disabled:a,hairline:i,plain:l,shape:c,block:x,onClick:d},{icon:C,loadingIcon:N,loadingChildren:f,color:e,htmlType:k,className:B,style:p,children:P,...R}]=_(b),S=()=>{if(!e)return p;const o={...l?{color:e}:{background:e}};return e.indexOf("gradient")!==-1?o.border="none":o.borderColor=e,{...o,...p}},m=()=>n?N||s(z.Spinner,{}):C,v=()=>{let o;if(n&&f!==void 0?o=f:o=P,o)return s("span",{className:t("text"),children:o})};return s("button",{className:j(t([y,g,c!=="radius"?c:void 0,{plain:l,block:x,loading:n,disabled:a,hairline:i,"custom-color":e}]),i?U:void 0,B),style:S(),onClick:o=>{n&&w(o),!n&&!a&&d&&d(o)},type:k,...R,ref:h,children:D("span",{className:t("content"),children:[r==="left"&&m(),v(),r==="right"&&m()]})})});u.displayName="Button";const J=u;export{J as B};
