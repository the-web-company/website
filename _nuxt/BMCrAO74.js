import{u as w,af as d,r as D,ag as b,J as O,ah as B,b as M,C as E,ai as v,aj as H,D as R,Y as S,ak as V}from"./MxbETFy6.js";const j=s=>s==="defer"||s===!1;function T(...s){var m;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=w(),g=u,p=()=>d.value,P=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??p,a.getCachedData=a.getCachedData??P,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(m=e.payload._errors)[t]??(m[t]=d.errorValue);const i=a.deep?D:b;e._asyncData[t]={data:i(a.getCachedData(t,e)??a.default()),pending:D(!f()),error:O(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(i={})=>{if(e._asyncDataPromises[t]){if(j(i.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&f())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,o)=>{try{c(g(e))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=K(o,a.pick)),e.payload.data[t]=o,r.data.value=o,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=H(c),r.data.value=R(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>z(e,t);const h=()=>r.refresh({_initial:!0}),C=a.server!==!1&&e.payload.serverRendered;{const i=S();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;B(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),M(()=>o.splice(0,o.length))}C&&e.isHydrating&&(r.error.value||f())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=V();if(a.watch){const o=E(a.watch,()=>r.refresh());l&&v(o)}const c=e.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await r.refresh()});l&&v(c)}const _=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(_,r),_}function z(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=d.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=s._asyncData[n]._default(),s._asyncData[n].error.value=d.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function K(s,n){const t={};for(const u of n)t[u]=s[u];return t}export{T as u};