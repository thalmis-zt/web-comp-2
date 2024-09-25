var dt=Object.defineProperty;var ht=(l,d,a)=>d in l?dt(l,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[d]=a;var f=(l,d,a)=>ht(l,typeof d!="symbol"?d+"":d,a);(function(){"use strict";function l(){}function d(e){return e()}function a(){return Object.create(null)}function g(e){e.forEach(d)}function N(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function x(e,t){e.appendChild(t)}function V(e,t,n){const s=z(e);if(!s.getElementById(t)){const o=E("style");o.id=t,o.textContent=n,U(s,o)}}function z(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function U(e,t){return x(e.head||e,t),t.sheet}function A(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function q(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function F(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.data!==t&&(e.data=t)}function K(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let v;function p(e){v=e}const _=[],P=[];let b=[];const B=[],Q=Promise.resolve();let O=!1;function W(){O||(O=!0,Q.then(M))}function j(e){b.push(e)}const C=new Set;let m=0;function M(){if(m!==0)return;const e=v;do{try{for(;m<_.length;){const t=_[m];m++,p(t),X(t.$$)}}catch(t){throw _.length=0,m=0,t}for(p(null),_.length=0,m=0;P.length;)P.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];C.has(n)||(C.add(n),n())}b.length=0}while(_.length);for(;B.length;)B.pop()();O=!1,C.clear(),p(e)}function X(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function Y(e){const t=[],n=[];b.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),b=t}const Z=new Set;function tt(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function et(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),j(()=>{const r=e.$$.on_mount.map(d).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...r):g(r),e.$$.on_mount=[]}),o.forEach(j)}function nt(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,t){e.$$.dirty[0]===-1&&(_.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function rt(e,t,n,s,o,r,i=null,u=[-1]){const $=v;p(e);const c=e.$$={fragment:null,ctx:[],props:r,update:l,not_equal:o,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||($?$.$$.context:[])),callbacks:a(),dirty:u,skip_bound:!1,root:t.target||$.$$.root};i&&i(c.root);let w=!1;if(c.ctx=n?n(e,t.props||{},(h,I,...T)=>{const D=T.length?T[0]:I;return c.ctx&&o(c.ctx[h],c.ctx[h]=D)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](D),w&&st(e,h)),I}):[],c.update(),w=!0,g(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const h=F(t.target);c.fragment&&c.fragment.l(h),h.forEach(k)}else c.fragment&&c.fragment.c();t.intro&&tt(e.$$.fragment),et(e,t.target,t.anchor),M()}p($)}let R;typeof HTMLElement=="function"&&(R=class extends HTMLElement{constructor(t,n,s){super();f(this,"$$ctor");f(this,"$$s");f(this,"$$c");f(this,"$$cn",!1);f(this,"$$d",{});f(this,"$$r",!1);f(this,"$$p_d",{});f(this,"$$l",{});f(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(t,n,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,s)}removeEventListener(t,n,s){if(super.removeEventListener(t,n,s),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(r){return()=>{let i;return{c:function(){i=E("slot"),r!=="default"&&S(i,"name",r)},m:function(c,w){A(c,i,w)},d:function(c){c&&k(i)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=K(this);for(const r of this.$$s)r in s&&(n[r]=[t(r)]);for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=y(i,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){const i=y(r,this.$$d[r],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,i)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const r in this.$$l)for(const i of this.$$l[r]){const u=this.$$c.$on(r,i);this.$$l_u.set(i,u)}this.$$l={}}}attributeChangedCallback(t,n,s){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=y(t,s,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function y(e,t,n,s){var r;const o=(r=n[e])==null?void 0:r.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!n[e])return t;if(s==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ot(e,t,n,s,o,r){let i=class extends R{constructor(){super(e,n,o),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(u=>(t[u].attribute||u).toLowerCase())}};return Object.keys(t).forEach(u=>{Object.defineProperty(i.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set($){var c;$=y(u,$,t),this.$$d[u]=$,(c=this.$$c)==null||c.$set({[u]:$})}})}),s.forEach(u=>{Object.defineProperty(i.prototype,u,{get(){var $;return($=this.$$c)==null?void 0:$[u]}})}),e.element=i,i}class it{constructor(){f(this,"$$");f(this,"$$set")}$destroy(){nt(this,1),this.$destroy=l}$on(t,n){if(!N(n))return l;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);function ut(e){V(e,"svelte-1t4c8h1","button.svelte-1t4c8h1{border-radius:8px;border:1px solid transparent;padding:0.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color 0.25s}button.svelte-1t4c8h1:hover{border-color:#646cff}button.svelte-1t4c8h1:focus,button.svelte-1t4c8h1:focus-visible{outline:4px auto -webkit-focus-ring-color}@media(prefers-color-scheme: light){:root{color:#213547;background-color:#ffffff}button.svelte-1t4c8h1{background-color:#f9f9f9}}")}function $t(e){let t,n,s,o,r;return{c(){t=E("button"),n=L("count is "),s=L(e[0]),S(t,"class","svelte-1t4c8h1")},m(i,u){A(i,t,u),x(t,n),x(t,s),o||(r=q(t,"click",e[1]),o=!0)},p(i,[u]){u&1&&G(s,i[0])},i:l,o:l,d(i){i&&k(t),o=!1,r()}}}function ft(e,t,n){let s=0;return[s,()=>{n(0,s+=1)}]}class lt extends it{constructor(t){super(),rt(this,t,ft,$t,H,{},ut)}}customElements.define("web-counter",ot(lt,{},[],[],!0))})();
