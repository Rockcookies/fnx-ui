import{r as m,j as W}from"./index-8b435b75.js";import{c as X}from"./config-component-props-c0788442.js";import{u as N}from"./use-creation-3d9fab3f.js";import{u as G}from"./use-merged-prop-ref-bd8415d7.js";import{u as S}from"./use-update-effect-311108d7.js";import{P as ie}from"./index-cbb33130.js";import{p as B}from"./format-3509efe4.js";import{i as ee,n as me}from"./misc-276e45ca.js";import{g as Z}from"./detect-9e279ab2.js";const le=["year","month","day","hour","minute"];function ce(t){return N(e=>{const n=t.split(",").map(o=>o.trim().toLowerCase()).filter(o=>le.includes(o));return e&&ee(e,n)?e:n},[t])}var he=Object.defineProperty,fe=(t,e,n)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,H=(t,e,n)=>(fe(t,typeof e!="symbol"?e+"":e,n),n);const ge=(t,e)=>{let n=-1;const o=Array(t);for(;++n<t;)o[n]=e(n);return o};class T{constructor(e){H(this,"year",0),H(this,"month",0),H(this,"day",0),H(this,"hour",0),H(this,"minute",0),H(this,"invalid",!1);const n=new Date(e),o=n.getTime();isNaN(o)?this.invalid=!1:(this.year=n.getFullYear(),this.month=n.getMonth(),this.day=n.getDate(),this.hour=n.getHours(),this.minute=n.getMinutes())}isValid(){return!this.invalid}getYear(){return this.year}getMonth(){return this.month}getDay(){return this.day}getHour(){return this.hour}getMinute(){return this.minute}getDate(){return new Date(this.year,this.month,this.day,this.hour,this.minute)}getTime(){return this.getDate().getTime()}equals(e){return Z(e)?this.year===e.getFullYear()&&this.month===e.getMonth()&&this.day===e.getDate()&&this.hour===e.getHours()&&this.minute===e.getMinutes():this.year===e.getYear()&&this.month===e.getMonth()&&this.day===e.getDay()&&this.hour===e.getHour()&&this.minute===e.getMinute()}}function J(t,e){return N(n=>{let o;return t!=null?(o=new T(t),o=o.isValid()?o:e):o=e,n&&n.equals(o)?n:o},[t])}const De=X({columnsLayout:"year,month,day",filter:(t,e)=>e,formatter:(t,e)=>e,onChange:me}),K=(t,e)=>32-new Date(t,e-1,32).getDate(),v=(t,e,n)=>{const o=t.getTime();return o<e.getTime()?e:o>n.getTime()?n:t},te=m.forwardRef((t,e)=>{const[n,{minDate:o,maxDate:Y,onConfirm:b,onCancel:$,defaultValue:L,...w}]=De(t),{columnsLayout:j}=n,d=G(n),y=ce(j),[q,R]=m.useMemo(()=>{const r=new Date().getFullYear();return[new T(new Date(r-10,0,1)),new T(new Date(r+10,11,31))]},[]),h=J(o,q),p=J(Y,R),[E,O]=N(()=>{let r=new T(L!=null?L:h.getDate());return r=v(r.isValid()?r:h,h,p),[r,y.map(a=>a==="year"?r.getYear():a==="month"?r.getMonth()+1:a==="day"?r.getDay():a==="hour"?r.getHour():r.getMinute())]},[]),[u,s]=m.useState(()=>E.getDate()),i=G(u),D=m.useRef(null),F=m.useMemo(()=>{var r;return{element:((r=D.current)==null?void 0:r.element)||null,getValue:()=>i.current}},[i]);m.useImperativeHandle(e,()=>F,[F]);const A=m.useCallback((r,a)=>{const f=r==="min"?h:p,l=f.getYear();let c=1,M=1,g=0,x=0;return r==="max"&&(c=12,M=K(a.getFullYear(),a.getMonth()+1),g=23,x=59),a.getFullYear()===l&&(c=f.getMonth()+1,a.getMonth()+1===c&&(M=f.getDay(),a.getDate()===M&&(g=f.getHour(),a.getHours()===g&&(x=f.getMinute())))),{year:l,month:c,date:M,hour:g,minute:x}},[p,h]),U=m.useCallback((r,a,f=[])=>{const l=A("min",a),c=A("max",a),M={year:[l.year,c.year],month:[l.month,c.month],day:[l.date,c.date],hour:[l.hour,c.hour],minute:[l.minute,c.minute]};return r.map((g,x)=>{const[C,I]=M[g];let _=ge(I-C+1,V=>C+V);_=d.current.filter(g,_);const P=f[x],k=_.map(V=>({value:V,label:d.current.formatter(g,B(V))}));return ee(P,k,(V,z)=>V.label===z.label&&V.value===z.value)?P:k})},[A,d]),[ae,ue]=m.useState(()=>U(y,u));S(()=>{const r=v(new T(i.current),h,p);s(a=>r.equals(i.current)?a:r.getDate())},[p,d,i,h]),S(()=>{d.current.onChange(u)},[d,u]),S(()=>{ue(r=>U(y,u,r))},[y,U,u]);const se=()=>{const r=(C,I)=>{const _=D.current&&D.current.getValue();if(_){for(let P=0;P<y.length;P++)if(y[P]===C){const k=_[P];if(k!=null)return+k}}return I},a=r("year",u.getFullYear()),f=r("month",u.getMonth()+1);let l=r("day",u.getDate());const c=K(a,f);l=l>c?c:l;const M=r("hour",u.getHours()),g=r("minute",u.getMinutes()),x=v(new T(new Date(a,f-1,l,M,g)),h,p);s(C=>x.equals(C)?C:x.getDate())};return W.jsx(ie.Multi,{data:ae,...w,defaultValue:O,ref:D,onChange:se,onConfirm:()=>{b&&b(u)},onCancel:$})});te.displayName="DatePicker";const ne=te,de=X({minHour:0,maxHour:23,minMinute:0,maxMinute:59,filter:(t,e)=>e,formatter:(t,e)=>e}),Q=t=>"".concat(B(t.getHours()),":").concat(B(t.getMinutes())),re=m.forwardRef((t,e)=>{const[{minHour:n,maxHour:o,minMinute:Y,maxMinute:b,formatter:$,filter:L},{defaultValue:w,onChange:j,onConfirm:d,onCancel:y,...q}]=de(t),R=m.useRef(null),h=m.useMemo(()=>{var s;return{element:((s=R.current)==null?void 0:s.element)||null,getValue:()=>{var D;const i=(D=R.current)==null?void 0:D.getValue();return Z(i)?Q(i):""}}},[]);m.useImperativeHandle(e,()=>h,[h]);const p=N(()=>{let s=0,i=0;if(typeof w=="string"){const[D,F]=w.split(":");s=+D,i=+F}else Z(w)&&(s=w.getHours(),i=w.getMinutes());return new Date(0,0,0,s,i)},[]),E=m.useMemo(()=>new Date(0,0,0,n,Y),[n,Y]),O=m.useMemo(()=>new Date(0,0,0,o,b),[o,b]),u=(s,i)=>{i&&i(Q(s))};return W.jsx(ne,{ref:R,columnsLayout:"hour,minute",defaultValue:p,minDate:E,maxDate:O,onChange:s=>u(s,j),onConfirm:s=>u(s,d),onCancel:y,formatter:$,filter:L,...q})});re.displayName="TimePicker";const ye=re,oe=ne;oe.TimePicker=ye;const Te=oe;export{Te as D};