const e={allRenderFn:!0,cmpDidLoad:!0,cmpDidUnload:!0,cmpDidUpdate:!1,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!1,connectedCallback:!1,disconnectedCallback:!1,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!1,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!1,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0},t=window,n=document,o={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},s=!!n.documentElement.attachShadow,l=(()=>{let e=!1;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i={},c=new WeakMap,a=e=>c.get(e),f=(e,t)=>c.set(t.s=e,t),d=(e,t)=>t in e,u=e=>console.error(e),p=new Map,m=new Map,$=t.__stencil_cssshim;let h=0,w=!1;const b=[],v=[],y=[],g=(e,t)=>n=>{e.push(n),w||(w=!0,t&&4&o.t?R(k):o.raf(k))},_=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){u(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{h++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){u(e)}e.length=0})(b);const e=2==(6&o.t)?performance.now()+10*Math.ceil(h*(1/22)):1/0;_(v,e),_(y,e),v.length>0&&(y.push(...v),v.length=0),(w=b.length+v.length+y.length>0)?o.raf(k):h=0},R=e=>Promise.resolve().then(e),S=g(b,!1),j=g(v,!0),L={},U=e=>null!=e,O=e=>e.toLowerCase(),C=e=>["object","function"].includes(typeof e),M=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wcs("./p-3ea8955c.js"),T=async()=>{const e=new RegExp("/wcs(.esm)?.js$"),o=Array.from(n.querySelectorAll("script")).find(t=>e.test(t.src)||"wcs"===t.getAttribute("data-namespace")),s=o["data-opts"];{const e=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,t.location.href));return D(e.href),window.customElements||await __sc_import_wcs("./p-860d8016.js"),Object.assign({},s,{resourcesUrl:e.href})}},D=e=>{const o=(()=>`__sc_import_${"wcs".replace(/\s|-/g,"_")}`)();try{t[o]=new Function("w","return import(w);")}catch(s){const l=new Map;t[o]=s=>{const r=new URL(s,e).href;let i=l.get(r);if(!i){const e=n.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${o}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{e.onload=()=>{n(t[o].m),e.remove()}}),l.set(r,i),n.head.appendChild(e)}return i}}},x="http://www.w3.org/1999/xlink",W=new WeakMap,P=e=>"sc-"+e,A=(e,t,...n)=>{let o,s,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!C(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,F);const f={t:0,i:e,u:c.length>0?c:null,p:void 0,$:t};return f.h=o,f.v=s,f},E={},F={forEach:(e,t)=>e.map(N).forEach(t),map:(e,t)=>e.map(N).map(t).map(B)},N=e=>({vattrs:e.$,vchildren:e.u,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),B=e=>({t:0,$:e.vattrs,u:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),V=(e,t,n,s,l,r)=>{if(n!==s)if("class"===t){const t=e.classList;q(n).forEach(e=>t.remove(e)),q(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!d(e,t))t=d(e,O(t))?O(t.substring(2)):O(t[2])+t.substring(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1);else{const n=d(e,t),o=C(s),i=e.tagName.includes("-");if((n||o&&null!==s)&&!l)try{i?e[t]=s:e[t]!==s&&(e[t]=s||"")}catch(e){}const c=!(!l||t===(t=t.replace(/^xlink\:?/,"")));null==s||!1===s?c?e.removeAttributeNS(x,O(t)):e.removeAttribute(t):(!n||4&r||l)&&!o&&(s=!0===s?"":s.toString(),c?e.setAttributeNS(x,O(t),s):e.setAttribute(t,s))}},q=e=>e?e.split(/\s+/).filter(e=>e):[],z=(e,t,n,o)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,l=e&&e.$||L,r=t.$||L;for(o in l)o in r||V(s,o,l[o],void 0,n,t.t);for(o in r)V(s,o,l[o],r[o],n,t.t)};let H,K,Q,G=!1,I=!1,J=!1,X=!1;const Y=(e,t,o,s)=>{let l,r,i,c=t.u[o],a=0;if(G||(J=!0,"slot"===c.i&&(H&&s.classList.add(H+"-s"),c.t|=c.u?2:1)),U(c.l))c.p=n.createTextNode(c.l);else if(1&c.t)c.p=n.createTextNode("");else{if(l=c.p=X||"svg"===c.i?n.createElementNS("http://www.w3.org/2000/svg",c.i):n.createElement(2&c.t?"slot-fb":c.i),z(null,c,X="svg"===c.i||"foreignObject"!==c.i&&X),U(H)&&l["s-si"]!==H&&l.classList.add(l["s-si"]=H),c.u)for(a=0;a<c.u.length;++a)(r=Y(e,c,a,l))&&l.appendChild(r);"svg"===c.i?X=!1:"foreignObject"===c.p.tagName&&(X=!0)}return c.p["s-hn"]=Q,3&c.t&&(c.p["s-sr"]=!0,c.p["s-cr"]=K,c.p["s-sn"]=c.v||"",(i=e&&e.u&&e.u[o])&&i.i===c.i&&e.p&&Z(e.p,!1)),c.p},Z=(e,t)=>{o.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==Q&&o["s-ol"]&&(se(o).insertBefore(o,oe(o)),o["s-ol"].remove(),o["s-ol"]=void 0,J=!0),t&&Z(o,t)}o.t&=-2},ee=(e,t,n,o,s,l)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&O(i.tagName)===Q&&(i=i.shadowRoot);s<=l;++s)o[s]&&(r=Y(null,n,s,e))&&(o[s].p=r,i.insertBefore(r,oe(t)))},te=(e,t,n,o)=>{for(;t<=n;++t)U(e[t])&&(o=e[t].p,ae(e[t],!0),I=!0,o["s-ol"]?o["s-ol"].remove():Z(o,!0),o.remove())},ne=(e,t)=>e.i===t.i&&("slot"===e.i?e.v===t.v:e.h===t.h),oe=e=>e&&e["s-ol"]||e,se=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,le=(e,t)=>{const n=t.p=e.p,o=e.u,s=t.u;let l;X=n&&U(n.parentNode)&&void 0!==n.ownerSVGElement,X="svg"===t.i||"foreignObject"!==t.i&&X,U(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||z(e,t,X),U(o)&&U(s)?((e,t,n,o)=>{let s,l,r=0,i=0,c=0,a=0,f=t.length-1,d=t[0],u=t[f],p=o.length-1,m=o[0],$=o[p];for(;r<=f&&i<=p;)if(null==d)d=t[++r];else if(null==u)u=t[--f];else if(null==m)m=o[++i];else if(null==$)$=o[--p];else if(ne(d,m))le(d,m),d=t[++r],m=o[++i];else if(ne(u,$))le(u,$),u=t[--f],$=o[--p];else if(ne(d,$))"slot"!==d.i&&"slot"!==$.i||Z(d.p.parentNode,!1),le(d,$),e.insertBefore(d.p,u.p.nextSibling),d=t[++r],$=o[--p];else if(ne(u,m))"slot"!==d.i&&"slot"!==$.i||Z(u.p.parentNode,!1),le(u,m),e.insertBefore(u.p,d.p),u=t[--f],m=o[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&U(t[a].h)&&t[a].h===m.h){c=a;break}c>=0?((l=t[c]).i!==m.i?s=Y(t&&t[i],n,c,e):(le(l,m),t[c]=void 0,s=l.p),m=o[++i]):(s=Y(t&&t[i],n,i,e),m=o[++i]),s&&se(d.p).insertBefore(s,oe(d.p))}r>f?ee(e,null==o[p+1]?null:o[p+1].p,n,o,i,p):i>p&&te(t,r,f)})(n,o,t,s):U(s)?(U(e.l)&&(n.textContent=""),ee(n,null,t,s,0,s.length-1)):U(o)&&te(o,0,o.length-1)),X&&"svg"===t.i&&(X=!1)},re=(e,t,n,o,s,l,r,i)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}re(t)}},ie=[],ce=e=>{let t,n,o,s,l=e.childNodes,r=l.length,i=0,c=0,a=0;for(r=l.length;i<r;i++){if((t=l[i])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===s||1===a&&null===n.getAttribute("slot")&&""===s||1===a&&n.getAttribute("slot")===s)&&(ie.some(e=>e.g===n)||(I=!0,n["s-sn"]=s,ie.push({_:t,g:n})));1===t.nodeType&&ce(t)}},ae=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.p),e.u&&e.u.forEach(e=>{ae(e,t)}))},fe=(e,t,n,o)=>{t.t|=16;const s=t.s;let l;o?(t.t|=256,t.k&&(t.k.forEach(([e,t])=>me(s,e,t)),t.k=null),l=me(s,"componentWillLoad")):l=me(s,"componentWillUpdate");const r=()=>de(e,t,n,s,o);return $e(l,()=>j(r))},de=(e,t,l,r,i)=>{t.t&=-17,e["s-lr"]=!1,i&&((e,t)=>{const o=((e,t,o,s)=>{let l=P(t.R),r=m.get(l);if(e=11===e.nodeType?e:n,r)if("string"==typeof r){let o,i=W.get(e=e.head||e);if(i||W.set(e,i=new Set),!i.has(l)){if($){const e=(o=$.createHostStyle(s,l,r,!!(10&t.t)))["s-sc"];e&&(l=e,i=null)}else(o=n.createElement("style")).innerHTML=r;e.insertBefore(o,e.querySelector("link")),i&&i.add(l)}}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return l})(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,0,e);10&t.t&&(e["s-sc"]=o,e.classList.add(o+"-h"))})(e,l),t.t|=4;try{((e,t,l,r)=>{Q=O(e.tagName);const i=t.S||{t:0},c=(e=>e&&e.i===E)(r)?r:A(null,null,r);if(l.j&&(c.$=c.$||{},l.j.forEach(([t,n])=>c.$[n]=e[t])),c.i=null,c.t|=4,t.S=c,c.p=i.p=e.shadowRoot||e,H=e["s-sc"],K=e["s-cr"],G=s&&0!=(1&l.t),J=I=!1,le(i,c),J){ce(c.p);for(let e=0;e<ie.length;e++){const t=ie[e];if(!t.g["s-ol"]){const e=n.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}o.t|=1;for(let e=0;e<ie.length;e++){const t=ie[e],n=t._.parentNode;let o=t._.nextSibling,s=t.g["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.g.parentNode||t.g.nextSibling!==o)&&t.g!==o&&n.insertBefore(t.g,o)}o.t&=-2}I&&re(c.p),ie.length=0})(e,t,l,r.render())}catch(e){u(e)}t.t&=-5,$&&$.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),ue(e,t)},ue=(e,t,n)=>{if(!e["s-al"]){const o=t.s,s=t.L;64&t.t||(t.t|=64,e.classList.add("hydrated"),me(o,"componentDidLoad"),t.U(e),s||pe()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.L=void 0)}},pe=()=>{n.documentElement.classList.add("hydrated"),o.t|=2},me=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){u(e)}},$e=(e,t)=>e&&e.then?e.then(t):t(),he=(e,t,n)=>{if(t.O){e.watchers&&(t.C=e.watchers);const s=Object.entries(t.O),l=e.prototype;if(s.forEach(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(l,e,{get(){return((e,t)=>a(e).M.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=a(this),l=s.T,r=s.M.get(t),i=s.t;if(!((n=((e,t)=>null==e||C(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.O[t][0]))===r||8&i&&void 0!==r)&&(s.M.set(t,n),s.s)){if(o.C&&128&i){const e=o.C[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,r,t)}catch(e){u(e)}})}2==(22&i)&&fe(l,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(l,e,{value(...t){const n=a(this);return n.D.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,s){o.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.j.push([e,s]),s})}}return e},we=(e,t)=>{let o;o="",(t=e["s-cr"]=n.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},be=(i,f={})=>{const d=[],h=f.exclude||[],w=n.head,b=t.customElements,v=w.querySelector("meta[charset]"),y=n.createElement("style");let g;Object.assign(o,f),o.o=new URL(f.resourcesUrl||"./",n.baseURI).href,f.syncQueue&&(o.t|=4),i.forEach(n=>n[1].forEach(i=>{const f={t:i[0],R:i[1],O:i[2],W:i[3],j:[],C:{}};!s&&1&f.t&&(f.t|=8);const w=f.R;f.P=n[0],h.includes(w)||b.get(w)||(d.push(w),b.define(w,he(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,T:e,M:new Map};t.D=new Promise(e=>t.U=e),c.set(e,t)}})(e),1&f.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){g&&(clearTimeout(g),g=null),o.jmp(()=>((n,s)=>{if(0==(1&o.t)){const i=a(n);if(s.W&&(i.A=((e,n,s)=>{n.k=n.k||[];const r=s.map(([s,r,i])=>{const c=((e,n)=>8&n?t:e)(e,s),a=((e,t)=>n=>{256&e.t?e.s[t](n):e.k.push([t,n])})(n,i),f=(e=>l?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e))(s);return o.ael(c,r,a,f),()=>o.rel(c,r,a,f)});return()=>r.forEach(e=>e())})(n,i,s.W)),!(1&i.t)){let t;i.t|=1,t||(4&s.t||8&s.t)&&we(n);{let e=n;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){i.L=e,(e["s-al"]=e["s-al"]||new Set).add(n);break}}s.O&&Object.entries(s.O).forEach(([e,[t]])=>{if(31&t&&n.hasOwnProperty(e)){const t=n[e];delete n[e],n[e]=t}}),R(()=>(async(t,n,o,s,l)=>{if(0==(32&n.t)){n.t|=32,(l=(e=>{const t=e.R.replace(/-/g,"_"),n=e.P,o=p.get(n);return o?o[t]:__sc_import_wcs(`./${n}.entry.js`).then(e=>(p.set(n,e),e[t]),u)})(o)).then&&(l=await l),l.isProxied||(o.C=l.watchers,he(l,o,2),l.isProxied=!0),n.t|=8;try{new l(n)}catch(e){u(e)}if(n.t&=-9,n.t|=128,!l.F&&l.style){let t=l.style,n=P(o.R);const s=e.runtimeScopeCss;(8&o.t||s)&&(t=await __sc_import_wcs("./p-05cd1ccb.js").then(e=>e.scopeCss(t,n,!1))),((e,t,n)=>{let o=m.get(e);r&&n?(o=o||new CSSStyleSheet).replace(t):o=t,m.set(e,o)})(n,t,!!(1&o.t)),l.F=!0}}const i=n.L,c=()=>fe(t,n,o,!0);i&&!1===i["s-lr"]&&i["s-rc"]?i["s-rc"].push(c):c()})(n,i,s))}}})(this,f))}disconnectedCallback(){o.jmp(()=>(e=>{if(0==(1&o.t)){const t=a(e);t.A&&(t.A(),t.A=void 0),$&&$.removeHost(e),me(t.s,"componentDidUnload")}})(this))}"s-init"(){const e=a(this);e.s&&ue(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=a(e);2&n.t&&fe(e,n,t,!1)}})(this,f)}componentOnReady(){return a(this).D}},f,1)))})),y.innerHTML=d+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),w.insertBefore(y,v?v.nextSibling:w.firstChild),o.jmp(()=>g=setTimeout(pe,30))},ve=(e,t,n)=>{const o=ge(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ye=(s,l)=>l in i?i[l]:"window"===l?t:"document"===l?n:"isServer"===l||"isPrerender"===l?!!e.hydrateServerSide:"isClient"===l?!e.hydrateServerSide:"resourcesUrl"===l||"publicPath"===l?(()=>{const e=new URL(".",o.o);return e.origin!==t.location.origin?e.href:e.pathname})():"queue"===l?{write:j,read:S,tick:{then:e=>R(e)}}:void 0,ge=e=>a(e).T;export{E as H,M as a,be as b,ye as c,ve as d,ge as g,A as h,T as p,f as r};