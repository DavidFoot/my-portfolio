import{n as b,s as p}from"./scheduler.7a274a43.js";const e=[];function d(o,l=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=l(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1c50tw9)==null?void 0:u.base)??"/my-portfolio";var a;const w=((a=globalThis.__sveltekit_1c50tw9)==null?void 0:a.assets)??h;export{w as a,h as b,d as w};