import{r as O,P as u,d as N,a6 as Z,o as ee,C as te,ad as R,F as K,l as E,K as W,L as P,N as H,O as Y,Q as M,R as k,c as z,e as C,ae,af as le,f as l,V as G,n as _,Y as se,I as B,ag as ne,U as re,w as L,h as c,g as V,X as oe,D as h,E as ie,k as I,t as T,H as ue,M as de}from"./vqFUKNYD.js";import{u as J,_ as ce}from"./Bmc2FJEb.js";import{I as me,s as ge,o as be,f as he,E as pe,u as fe,A as ve,T as ye,a as F,l as xe,b as we,_ as ke}from"./qkldQGrd.js";import{_ as ze}from"./D7EGbzdX.js";import"./BIHqcGsH.js";import"./Ajq2EcnJ.js";import"./D_ECR7lF.js";const _e={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}},Ce={wrapper:"relative w-full flex items-center",base:"w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group",rounded:"rounded-lg",background:"bg-transparent",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",progress:{base:"absolute pointer-events-none peer-disabled:bg-opacity-50",rounded:"rounded-s-lg",background:"bg-{color}-500 dark:bg-{color}-400",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"}},thumb:{base:"[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-gray-900 [&::-moz-range-thumb]:bg-current",ring:"[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current",size:{"2xs":"[&::-webkit-slider-thumb]:h-1.5 [&::-moz-range-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-moz-range-thumb]:w-1.5 [&::-webkit-slider-thumb]:mt-[-2.5px] [&::-moz-range-thumb]:mt-[-2.5px]",xs:"[&::-webkit-slider-thumb]:h-2 [&::-moz-range-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-moz-range-thumb]:w-2 [&::-webkit-slider-thumb]:mt-[-3px] [&::-moz-range-thumb]:mt-[-3px]",sm:"[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",md:"[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",lg:"[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",xl:"[&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:w-6 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1","2xl":"[&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-moz-range-thumb]:w-7 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1"}},track:{base:"[&::-webkit-slider-runnable-track]:group-disabled:bg-opacity-50 [&::-moz-range-track]:group-disabled:bg-opacity-50",background:"[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-moz-range-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:dark:bg-gray-700 [&::-moz-range-track]:dark:bg-gray-700",rounded:"[&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-range-track]:rounded-lg",size:{"2xs":"[&::-webkit-slider-runnable-track]:h-px [&::-moz-range-track]:h-px",xs:"[&::-webkit-slider-runnable-track]:h-0.5 [&::-moz-range-track]:h-0.5",sm:"[&::-webkit-slider-runnable-track]:h-1 [&::-moz-range-track]:h-1",md:"[&::-webkit-slider-runnable-track]:h-2 [&::-moz-range-track]:h-2",lg:"[&::-webkit-slider-runnable-track]:h-3 [&::-moz-range-track]:h-3",xl:"[&::-webkit-slider-runnable-track]:h-4 [&::-moz-range-track]:h-4","2xl":"[&::-webkit-slider-runnable-track]:h-5 [&::-moz-range-track]:h-5"}},size:{"2xs":"h-1.5",xs:"h-2",sm:"h-3",md:"h-4",lg:"h-5",xl:"h-6","2xl":"h-7"},default:{size:"md",color:"primary"}};function Ie(e,a,t){let m=O(t==null?void 0:t.value),o=u(()=>e.value!==void 0);return[u(()=>o.value?e.value:m.value),function(s){return o.value||(m.value=s),a==null?void 0:a(s)}]}function Se(e){var a,t;let m=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(m){for(let o of m.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(t=m.requestSubmit)==null||t.call(m)}}let Ve=Symbol("GroupContext"),Pe=N({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:a,attrs:t,slots:m,expose:o}){var s;let n=(s=e.id)!=null?s:`headlessui-switch-${me()}`,i=Z(Ve,null),[d,p]=Ie(u(()=>e.modelValue),r=>a("update:modelValue",r),u(()=>e.defaultChecked));function v(){p(!d.value)}let g=O(null),y=i===null?g:i.switchRef,b=ge(u(()=>({as:e.as,type:t.type})),y);o({el:y,$el:y});function f(r){r.preventDefault(),v()}function A(r){r.key===F.Space?(r.preventDefault(),v()):r.key===F.Enter&&Se(r.currentTarget)}function q(r){r.preventDefault()}let x=u(()=>{var r,w;return(w=(r=be(y))==null?void 0:r.closest)==null?void 0:w.call(r,"form")});return ee(()=>{te([x],()=>{if(!x.value||e.defaultChecked===void 0)return;function r(){p(e.defaultChecked)}return x.value.addEventListener("reset",r),()=>{var w;(w=x.value)==null||w.removeEventListener("reset",r)}},{immediate:!0})}),()=>{let{name:r,value:w,form:j,tabIndex:U,...D}=e,Q={checked:d.value},X={id:n,ref:y,role:"switch",type:b.value,tabIndex:U===-1?0:U,"aria-checked":d.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:A,onKeypress:q};return R(K,[r!=null&&d.value!=null?R(he,pe({features:fe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:d.value,form:j,disabled:D.disabled,name:r,value:w})):null,ve({ourProps:X,theirProps:{...t,...ye(D,["modelValue","defaultChecked"])},slot:Q,attrs:t,slots:m,name:"Switch"})])}}});const $=W(P.ui.strategy,P.ui.range,Ce),$e=N({inheritAttrs:!1,props:{modelValue:{type:Number,default:0},id:{type:String,default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},size:{type:String,default:null,validator(e){return Object.keys($.size).includes(e)}},color:{type:String,default:()=>$.default.color,validator(e){return P.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:a}){const{ui:t,attrs:m}=H("range",Y(e,"ui"),$),{emitFormChange:o,inputId:s,color:n,size:i,name:d}=J(e,$),p=u({get(){return e.modelValue},set(x){a("update:modelValue",x)}}),v=x=>{a("change",x.target.value),o()},g=u(()=>M(k(t.value.wrapper,t.value.size[i.value]),e.class)),y=u(()=>M(k(t.value.base,t.value.background,t.value.rounded,n.value&&t.value.ring.replaceAll("{color}",n.value),t.value.size[i.value]),e.inputClass)),b=u(()=>k(t.value.thumb.base,n.value&&t.value.thumb.color.replaceAll("{color}",n.value),t.value.thumb.ring,t.value.thumb.background,t.value.thumb.size[i.value])),f=u(()=>k(t.value.track.base,t.value.track.background,t.value.track.rounded,t.value.track.size[i.value])),A=u(()=>k(t.value.progress.base,t.value.progress.rounded,n.value&&t.value.progress.background.replaceAll("{color}",n.value),t.value.progress.size[i.value])),q=u(()=>{const{modelValue:x,min:r,max:w}=e;return{width:`${(Math.max(r,Math.min(x,w))-r)/(w-r)*100}%`}});return{ui:t,attrs:m,name:d,inputId:s,value:p,wrapperClass:g,inputClass:y,thumbClass:b,trackClass:f,progressClass:A,progressStyle:q,onChange:v}}}),Ne=["id","name","min","max","disabled","step"];function Ae(e,a,t,m,o,s){return z(),C("div",{class:_(e.wrapperClass)},[ae(l("input",G({id:e.inputId,ref:"input","onUpdate:modelValue":a[0]||(a[0]=n=>e.value=n),name:e.name,min:e.min,max:e.max,disabled:e.disabled,step:e.step,type:"range",class:[e.inputClass,e.thumbClass,e.trackClass]},e.attrs,{onChange:a[1]||(a[1]=(...n)=>e.onChange&&e.onChange(...n))}),null,16,Ne),[[le,e.value,void 0,{number:!0}]]),l("span",{class:_(e.progressClass),style:se(e.progressStyle)},null,6)],2)}const qe=E($e,[["render",Ae]]),S=W(P.ui.strategy,P.ui.toggle,_e),Ue=N({components:{HSwitch:Pe,UIcon:B},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>S.default.onIcon},offIcon:{type:String,default:()=>S.default.offIcon},loadingIcon:{type:String,default:()=>S.default.loadingIcon},color:{type:String,default:()=>S.default.color,validator(e){return P.ui.colors.includes(e)}},size:{type:String,default:()=>S.default.size,validator(e){return Object.keys(S.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:a}){const{ui:t,attrs:m}=H("toggle",Y(e,"ui"),S),{emitFormChange:o,color:s,inputId:n,name:i}=J(e),d=u({get(){return e.modelValue},set(f){a("update:modelValue",f),a("change",f),o()}}),p=u(()=>M(k(t.value.base,t.value.size[e.size],t.value.rounded,s.value&&t.value.ring.replaceAll("{color}",s.value),s.value&&(d.value?t.value.active:t.value.inactive).replaceAll("{color}",s.value)),e.class)),v=u(()=>k(t.value.container.base,t.value.container.size[e.size],d.value?t.value.container.active[e.size]:t.value.container.inactive)),g=u(()=>k(t.value.icon.size[e.size],s.value&&t.value.icon.on.replaceAll("{color}",s.value))),y=u(()=>k(t.value.icon.size[e.size],s.value&&t.value.icon.off.replaceAll("{color}",s.value))),b=u(()=>k(t.value.icon.size[e.size],s.value&&t.value.icon.loading.replaceAll("{color}",s.value)));return xe(()=>we("$mRW6KdlcYH")),{ui:t,attrs:m,name:i,inputId:n,active:d,switchClass:p,containerClass:v,onIconClass:g,offIconClass:y,loadingIconClass:b}}});function Te(e,a,t,m,o,s){const n=B,i=ne("HSwitch");return z(),re(i,G({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":a[0]||(a[0]=d=>e.active=d),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:L(()=>[l("span",{class:_(e.containerClass)},[e.loading?(z(),C("span",{key:0,class:_([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[c(n,{name:e.loadingIcon,class:_(e.loadingIconClass)},null,8,["name","class"])],2)):V("",!0),!e.loading&&e.onIcon?(z(),C("span",{key:1,class:_([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[c(n,{name:e.onIcon,class:_(e.onIconClass)},null,8,["name","class"])],2)):V("",!0),!e.loading&&e.offIcon?(z(),C("span",{key:2,class:_([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[c(n,{name:e.offIcon,class:_(e.offIconClass)},null,8,["name","class"])],2)):V("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const Me=E(Ue,[["render",Te]]),Be={class:"max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14"},je=l("h2",{class:"text-3xl sm:text-4xl xl:text-5xl text-center mb-10"},"Choose the right plan for you",-1),De={class:"grid lg:grid-cols-12 max-w-screen-2xl rounded-md ring-1 ring-gray-300 mx-auto"},Re={class:"p-8 lg:col-span-9"},Fe={class:"hidden sm:flex flex-col gap-4"},Oe={class:"flex items-center gap-4"},Ke=l("p",{class:"text-gray-500"},"Requests",-1),Ee={key:0,class:"grid grid-cols-2 pl-4"},We={class:"text-gray-500"},He={key:0},Ye={key:1},Ge={class:"flex justify-between items-center"},Le=l("p",{class:"text-gray-500"},"Identity add on",-1),Je=l("div",{class:"mt-10 flex items-center gap-x-4"},[l("h4",{class:"text-sm font-semibold text-primary-500"},"What’s included"),l("div",{class:"h-px flex-auto bg-gray-300"})],-1),Qe={role:"list",class:"mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-gray-500"},Xe={class:"flex gap-x-3"},Ze={class:"flex gap-x-3"},et={class:"flex gap-x-3"},tt={class:"flex gap-x-3"},at={class:"flex gap-x-3"},lt={class:"flex gap-x-3"},st={class:"flex gap-x-3"},nt={class:"flex gap-x-3"},rt={class:"lg:col-span-3 rounded-r-md bg-gray-100 flex flex-col justify-around items-center gap-4 px-8 space-y-4 lg:space-y-0 py-8 lg:py-0"},ot={class:"flex items-end justify-center gap-x-2"},it={class:"text-4xl font-bold tracking-tight"},ut=ue('<div class="lg:grid lg:grid-cols-3 lg:gap-8 mt-32"><div><h2 class="text-3xl">Frequently asked questions</h2><p class="mt-4 text-lg text-gray-500"> Can’t find the answer you’re looking for?<br>Reach out to our <a href="/contact" class="font-medium text-primary-500 hover:text-primary-600">customer support</a> team. </p></div><div class="mt-12 lg:mt-0 lg:col-span-2"><dl class="space-y-12 max-w-5xl"><div><dt class="text-lg leading-6 font-medium">What are credits?</dt><dd class="sm:mt-2 text-base text-gray-500"> 1 credit = 1 entity (person/company/school) report page.<br>You can search unlimited number of times, once you enter to a person/company/school specific page (report page), you have used one credit. A credit entitles you to all the information we have for that entity. </dd></div><div><dt class="text-lg leading-6 font-medium">Are you GDPR and CCPA compliant?</dt><dd class="sm:mt-2 text-base text-gray-500"> Yes, we are. TheWebCo is CCPA compliant and GDPR aligned, according to all laws and regulations. We only retain data for the duration necessary to provide our services and only use public and open sources on the internet. </dd></div><div><dt class="text-lg leading-6 font-medium">When I sign-up, do I commit to something?</dt><dd class="sm:mt-2 text-base text-gray-500"> No, you&#39;re not. When you sign-up, you get free credits to evaluate us, you are not committing to using our service, and you don&#39;t even need to enter a credit card for this period. You can stop using our service anytime, and you only pay for what you use. </dd></div><div><dt class="text-lg leading-6 font-medium">Can I install your AI engine on my server?</dt><dd class="sm:mt-2 text-base text-gray-500"> No, we only offer a SAAS model. You can use our platform on any web browser you want, plugin our service to your CRM, or integrate our API. </dd></div><div><dt class="text-lg leading-6 font-medium">Can I use a couple of your offerings simultaneously?</dt><dd class="sm:mt-2 text-base text-gray-500">Yes, you are. Use our platform, CRM plugins, and API all at the same time.</dd></div><div><dt class="text-lg leading-6 font-medium">Is anyone been notified when I am searching for them?</dt><dd class="sm:mt-2 text-base text-gray-500">All of TheWebCo&#39;s reports are confidential. The person you are searching for is not notified.</dd></div></dl></div></div>',1),dt={class:"mt-32"},vt=N({__name:"pricing",setup(e){const a=oe({requests:0,identity:!1,showPricingTable:!1}),t=[{label:"0-1K",eventPrice:"Free - every month!"},{label:"1K-500K",eventPrice:.0015},{label:"500K-2M",eventPrice:.001},{label:"2M-10M",eventPrice:5e-4},{label:"10M-50M",eventPrice:25e-5},{label:"50M-100M",eventPrice:18e-5},{label:"100M+",eventPrice:"Contact us"}],m=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),o=u(()=>{var n,i,d,p,v,g;let s=0;if(a.requests<1e3)s=a.requests*0;else if(a.requests<5e5)s=a.requests*Number((n=t[1])==null?void 0:n.eventPrice);else if(a.requests<2e6)s=a.requests*Number((i=t[2])==null?void 0:i.eventPrice);else if(a.requests<1e7)s=a.requests*Number((d=t[3])==null?void 0:d.eventPrice);else if(a.requests<5e7)s=a.requests*Number((p=t[4])==null?void 0:p.eventPrice);else if(a.requests<1e8)s=a.requests*Number((v=t[5])==null?void 0:v.eventPrice);else return(g=t[6])==null?void 0:g.eventPrice;return a.identity?s*1.25:s});return(s,n)=>{const i=qe,d=ce,p=de,v=Me,g=B,y=ke;return z(),C("div",Be,[je,l("div",De,[l("div",Re,[l("div",Fe,[l("div",null,[l("div",Oe,[Ke,c(i,{size:"sm",min:0,step:1e3,max:1e8,modelValue:h(a).requests,"onUpdate:modelValue":n[0]||(n[0]=b=>h(a).requests=b)},null,8,["modelValue"]),c(d,{modelValue:h(a).requests,"onUpdate:modelValue":n[1]||(n[1]=b=>h(a).requests=b),placeholder:"Number of monthly req",type:"number"},null,8,["modelValue"])]),c(p,{label:h(a).showPricingTable?"Hide pricing table":"Show pricing table",variant:"link",padded:!1,size:"xs",onClick:n[2]||(n[2]=b=>h(a).showPricingTable=!h(a).showPricingTable)},null,8,["label"]),h(a).showPricingTable?(z(),C("div",Ee,[l("div",null,[(z(),C(K,null,ie(t,(b,f)=>l("div",{key:f,class:"flex justify-between border-b border-gray-300 py-2 text-sm"},[l("span",null,T(b.label),1),l("span",We,[f!=0&&f!=t.length-1?(z(),C("span",He,"$")):V("",!0),l("strong",null,T(b.eventPrice),1),f!=0&&f!=t.length-1?(z(),C("span",Ye,"/req")):V("",!0)])])),64))])])):V("",!0)]),l("div",Ge,[Le,c(v,{modelValue:h(a).identity,"onUpdate:modelValue":n[3]||(n[3]=b=>h(a).identity=b)},null,8,["modelValue"])])]),Je,l("ul",Qe,[l("li",Xe,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("De-anonymize visitors")]),l("li",Ze,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("Form shortening")]),l("li",et,[c(g,{name:"i-heroicons-check",class:"w-7 h-6 text-primary-500"}),I("Search and see reports for people, companies, and schools ")]),l("li",tt,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("Create and manage lists")]),l("li",at,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("Export lists and individual reports")]),l("li",lt,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("CRM & calendar integrations")]),l("li",st,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("Pre-meeting intelligence report")]),l("li",nt,[c(g,{name:"i-heroicons-check",class:"w-5 h-6 text-primary-500"}),I("Chrome extension access")])])]),l("div",rt,[l("div",null,[l("p",ot,[l("span",it,T(h(o)=="Contact us"?h(o):`${h(m).format(Number(h(o)))}`),1)])]),c(p,{label:"Get access",to:"https://app.thewebco.ai/auth/register",target:"_blank",block:""})])]),ut,l("div",dt,[c(y,null,{default:L(()=>[c(ze)]),_:1})])])}}});export{vt as default};
