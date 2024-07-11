import H from"./BVjQxJkP.js";import{d as O,x as F,M as s,c as g,Q as b,e as G,n as h,w as $,P as m,W as A,aB as L,R as k,Y as V,f as _,aC as E,aD as J,aE as K,aF as B,J as U,a2 as W,a3 as T,o as Y,b as X,$ as Z,K as q,L as ee,N as ae,O as z,g as S,t as re}from"./B08so0q4.js";import{_ as j}from"./DlAUqK2U.js";import{_ as te}from"./sk_k3Zsg.js";function ie(e,n){const a={...e};for(const t of n)delete a[t];return a}function ne(e,n,a){typeof n=="string"&&(n=n.split(".").map(i=>{const r=Number(i);return isNaN(r)?i:r}));let t=e;for(const i of n){if(t==null)return a;t=t[i]}return t!==void 0?t:a}const w={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},oe={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},se=e=>Object.keys(w).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),we=e=>[...Object.keys(w),...Object.keys(oe)].reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),le=O({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=F();return{dynamic:s(()=>{var t,i;return e.dynamic||((i=(t=n.ui)==null?void 0:t.icons)==null?void 0:i.dynamic)})}}});function de(e,n,a,t,i,r){const o=H;return e.dynamic?(g(),b(o,{key:0,name:e.name},null,8,["name"])):(g(),G("span",{key:1,class:h(e.name)},null,2))}const M=j(le,[["render",de]]),ge=O({inheritAttrs:!1,props:{...w,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:i,isExactActive:r}){return e.exactQuery&&!J(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&r||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),ue=["href","aria-disabled","role","rel","target","onClick"];function ce(e,n,a,t,i,r){const o=te;return e.to?(g(),b(o,k({key:1},e.$props,{custom:""}),{default:$(({route:u,href:f,target:d,rel:y,navigate:p,isActive:c,isExactActive:x,isExternal:I})=>[_("a",k(e.$attrs,{href:e.disabled?void 0:f,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:y,target:d,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[E]||e.$route,{isActive:c,isExactActive:x}),onClick:v=>!I&&!e.disabled&&p(v)}),[m(e.$slots,"default",A(L({isActive:e.active!==void 0?e.active:e.exact?x:c})))],16,ue)]),_:3},16)):(g(),b(V(e.as),k({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:$(()=>[m(e.$slots,"default",A(L({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const R=j(ge,[["render",ce]]),fe=(e,n,a,t,i=!1)=>{const r=K(),o=F(),u=s(()=>{var c;const d=B(n),y=B(a),p=B(t);return U((d==null?void 0:d.strategy)||((c=o.ui)==null?void 0:c.strategy),p?{wrapper:p}:{},d||{},i?ne(o.ui,e,{}):{},y||{})}),f=s(()=>ie(r,["class"]));return{ui:u,attrs:f}};function pe({ui:e,props:n}){const a=Z();if(W("ButtonGroupContextConsumer",!0),T("ButtonGroupContextConsumer",!1))return{size:s(()=>n.size),rounded:s(()=>e.value.rounded)};let i=a.parent,r;for(;i&&!r;){if(i.type.name==="ButtonGroup"){r=T(`group-${i.uid}`);break}i=i.parent}const o=s(()=>r==null?void 0:r.value.children.indexOf(a));return Y(()=>{r==null||r.value.register(a)}),X(()=>{r==null||r.value.unregister(a)}),{size:s(()=>(r==null?void 0:r.value.size)||n.size),rounded:s(()=>!r||o.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:o.value===0?r.value.rounded.start:o.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const be={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},C={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...C});const Q={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},D={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...C,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...Q});({...Q});({...D,option:{...D.option},arrow:{...C}});const Ce={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...C,base:"[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"}},l=U(q.ui.strategy,q.ui.button,be),ye=O({components:{UIcon:M,ULink:R},inheritAttrs:!1,props:{...w,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...q.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:t}=fe("button",ee(e,"ui"),l),{size:i,rounded:r}=pe({ui:a,props:e}),o=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),f=s(()=>e.square||!n.default&&!e.label),d=s(()=>{var P,N;const v=((N=(P=a.value.color)==null?void 0:P[e.color])==null?void 0:N[e.variant])||a.value.variant[e.variant];return ae(z(a.value.base,a.value.font,r.value,a.value.size[i.value],a.value.gap[i.value],e.padded&&a.value[f.value?"square":"padding"][i.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),y=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),p=s(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),c=s(()=>z(a.value.icon.base,a.value.icon.size[i.value],e.loading&&a.value.icon.loading)),x=s(()=>z(a.value.icon.base,a.value.icon.size[i.value],e.loading&&!o.value&&a.value.icon.loading)),I=s(()=>se(e));return{ui:a,attrs:t,isLeading:o,isTrailing:u,isSquare:f,buttonClass:d,leadingIconName:y,trailingIconName:p,leadingIconClass:c,trailingIconClass:x,linkProps:I}}});function ve(e,n,a,t,i,r){const o=M,u=R;return g(),b(u,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:$(()=>[m(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(g(),b(o,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)]),m(e.$slots,"default",{},()=>[e.label?(g(),G("span",{key:0,class:h([e.truncate?e.ui.truncate:""])},re(e.label),3)):S("",!0)]),m(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(g(),b(o,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)])]),_:3},16,["type","disabled","class"])}const Ie=j(ye,[["render",ve]]);export{Ie as _,M as a,R as b,we as c,be as d,pe as e,C as f,ne as g,Q as i,Ce as t,fe as u};
