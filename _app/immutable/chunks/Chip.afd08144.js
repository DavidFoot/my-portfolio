import{s as y,f as z,l as g,g as C,h as q,m as w,d as _,j as f,$ as o,i as P,I as S,J as c,p as j,n as b,u as E,o as I,U as r,q as J}from"./scheduler.e949bcc4.js";import{S as M,i as U}from"./index.42c33976.js";function A(t){let e,s,n,h;return{c(){e=z("p"),s=g(t[0]),this.h()},l(i){e=C(i,"P",{class:!0,"data-size":!0});var l=q(e);s=w(l,t[0]),l.forEach(_),this.h()},h(){f(e,"class","chip svelte-7z0o8b"),f(e,"data-size",t[3]),o(e,"chip-active",t[1]),o(e,"chip-hoverable",t[2])},m(i,l){P(i,e,l),S(e,s),t[9](e),n||(h=[c(e,"click",t[5]),c(e,"keydown",t[6]),c(e,"keypress",t[7]),c(e,"keyup",t[8])],n=!0)},p(i,[l]){l&1&&j(s,i[0]),l&8&&f(e,"data-size",i[3]),l&2&&o(e,"chip-active",i[1]),l&4&&o(e,"chip-hoverable",i[2])},i:b,o:b,d(i){i&&_(e),t[9](null),n=!1,E(h)}}}function B(t,e,s){let n,{label:h=""}=e,{active:i=!1}=e,{hoverable:l=!0}=e,{size:u="auto"}=e;I(()=>{n.style.setProperty("--size",u)});function d(a){r.call(this,t,a)}function m(a){r.call(this,t,a)}function v(a){r.call(this,t,a)}function k(a){r.call(this,t,a)}function p(a){J[a?"unshift":"push"](()=>{n=a,s(4,n)})}return t.$$set=a=>{"label"in a&&s(0,h=a.label),"active"in a&&s(1,i=a.active),"hoverable"in a&&s(2,l=a.hoverable),"size"in a&&s(3,u=a.size)},[h,i,l,u,n,d,m,v,k,p]}class G extends M{constructor(e){super(),U(this,e,B,A,y,{label:0,active:1,hoverable:2,size:3})}}export{G as C};