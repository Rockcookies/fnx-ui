import{r as p}from"./index-8b435b75.js";import{u as m}from"./use-merged-prop-ref-bd8415d7.js";import{u as d}from"./use-update-effect-311108d7.js";function x({defaultValue:t,value:o,onChange:e}){const[s,n]=p.useState(()=>o!==void 0?o:typeof t=="function"?t():t),r=o!==void 0,f=r?o:s;d(()=>{o!==void 0&&n(o)},[o]);const c=m((...i)=>{r||n(i[0]),e&&e(...i)});return{controlled:r,value:f,onChangeRef:c}}export{x as u};