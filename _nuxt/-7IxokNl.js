import{av as u,d as c,s as r,P as d,ay as l,ap as m,az as h,c as g,U as p,D as i,am as f}from"./vqFUKNYD.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const y={setup:()=>x("<NuxtImg>")},b=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?y:"img",e=t,o=d(()=>{var a;if((a=e.src)!=null&&a.startsWith("/")&&!e.src.startsWith("//")){const s=l(m(r().app.baseURL));if(s!=="/"&&!e.src.startsWith(s))return h(s,e.src)}return e.src});return(a,s)=>(g(),p(f(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{b as default};
