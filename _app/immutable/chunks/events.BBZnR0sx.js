import{z as s,A as f,B as y,u as g,C as L,D as S,E as q,F as x}from"./runtime.BMCtISoK.js";function D(r){var a=y,i=g;s(null),f(null);try{return r()}finally{s(a),f(i)}}const z=new Set,A=new Set;function O(r,a,i,n){function e(t){if(n.capture||T.call(a,t),!t.cancelBubble)return D(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?S(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function C(r,a,i,n,e){var t={capture:n,passive:e},u=O(r,a,i,t);(a===document.body||a===window||a===document)&&L(()=>{a.removeEventListener(r,u,t)})}function T(r){var w;var a=this,i=a.ownerDocument,n=r.type,e=((w=r.composedPath)==null?void 0:w.call(r))||[],t=e[0]||r.target,u=0,p=r.__root;if(p){var _=e.indexOf(p);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var v=e.indexOf(a);if(v===-1)return;_<=v&&(u=_)}if(t=e[u]||r.target,t!==a){q(r,"currentTarget",{configurable:!0,get(){return t||i}});var b=y,E=g;s(null),f(null);try{for(var c,d=[];t!==null;){var h=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+n];if(o!==void 0&&!t.disabled)if(x(o)){var[k,...B]=o;k.apply(t,[r,...B])}else o.call(t,r)}catch(l){c?d.push(l):c=l}if(r.cancelBubble||h===a||h===null)break;t=h}if(c){for(let l of d)queueMicrotask(()=>{throw l});throw c}}finally{r.__root=a,delete r.currentTarget,s(b),f(E)}}}export{z as a,C as e,T as h,A as r};
