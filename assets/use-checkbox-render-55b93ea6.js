import{j as s,c as L}from"./index-8b435b75.js";import{u as e}from"./use-merged-prop-78f8d6c6.js";import{I as f}from"./index-f0ac2a00.js";import{p as M}from"./event-471798e4.js";import{a as U}from"./format-3509efe4.js";function F({disabled:C,direction:h,iconSize:j,iconPosition:v,iconShape:S,iconCheckedColor:k,labelDisabled:I,icon:l,checkedIcon:d,className:z,children:D,...P},o){const i=e(!1,C,o.disabled),t=e("vertical",h,o.direction),N=e(void 0,j,o.iconSize),p=e("left",v,o.iconPosition),a=e("round",S,o.iconShape),g=e(void 0,k,o.iconCheckedColor),u=e(!1,I,o.labelDisabled),x=l||o.icon,R=d||o.checkedIcon;return({bem:r,checked:n,ref:y})=>{let c;!i&&a!=="plain"&&n&&(c=g);const b=()=>s.jsx("span",{className:r("icon",{[a]:a!=="plain",checked:n,disabled:i}),style:{fontSize:U(N),borderColor:c,backgroundColor:c},children:n?R||s.jsx(f,{name:"success"}):x||s.jsx(f,{name:"success"})}),m=()=>s.jsx("span",{className:r("label",{disabled:i}),onClick:E=>{u&&M(E,!0)},children:D});return s.jsxs("div",{className:L(r({disabled:i,["".concat(t)]:t!=="vertical","label-disabled":u}),z),tabIndex:i?void 0:0,"aria-checked":n,...P,ref:y,children:[p==="left"?b():m(),p==="left"?m():b()]})}}export{F as u};