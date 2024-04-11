(function(A,I){typeof exports=="object"&&typeof module<"u"?I(exports):typeof define=="function"&&define.amd?define(["exports"],I):(A=typeof globalThis<"u"?globalThis:A||self,I(A.Datastar={}))})(this,function(A){"use strict";function I(t){return t instanceof HTMLElement||t instanceof SVGElement?t:null}function J(){throw f}function Xe(){throw f}const Ye=Symbol.for("preact-signals"),L=1,D=2,x=4,$=8,F=16,N=32;function z(){j++}function Z(){if(j>1){j--;return}let t,e=!1;for(;V!==void 0;){let n=V;for(V=void 0,oe++;n!==void 0;){const s=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~D,!(n._flags&$)&&me(n))try{n._callback()}catch(r){e||(t=r,e=!0)}n=s}}if(oe=0,j--,e)throw t}function Qe(t){if(j>0)return t();z();try{return t()}finally{Z()}}let v,V,j=0,oe=0,X=0;function he(t){if(v===void 0)return;let e=t._node;if(e===void 0||e._target!==v)return e={_version:0,_source:t,_prevSource:v._sources,_nextSource:void 0,_target:v,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},v._sources!==void 0&&(v._sources._nextSource=e),v._sources=e,t._node=e,v._flags&N&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=v._sources,e._nextSource=void 0,v._sources._nextSource=e,v._sources=e),e}function b(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}b.prototype.brand=Ye,b.prototype._refresh=function(){return!0},b.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)},b.prototype._unsubscribe=function(t){if(this._targets!==void 0){const e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}},b.prototype.subscribe=function(t){const e=this;return be(function(){const n=e.value,s=this._flags&N;this._flags&=~N;try{t(n)}finally{this._flags|=s}})},b.prototype.valueOf=function(){return this.value},b.prototype.toString=function(){return this.value+""},b.prototype.toJSON=function(){return this.value},b.prototype.peek=function(){return this._value},Object.defineProperty(b.prototype,"value",{get(){const t=he(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(v instanceof P&&Xe(),t!==this._value){oe>100&&J(),this._value=t,this._version++,X++,z();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{Z()}}}});function pe(t){return new b(t)}function me(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function ge(t){for(let e=t._sources;e!==void 0;e=e._nextSource){const n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function ve(t){let e=t._sources,n;for(;e!==void 0;){const s=e._prevSource;e._version===-1?(e._source._unsubscribe(e),s!==void 0&&(s._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=s)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=s}t._sources=n}function P(t){b.call(this,void 0),this._compute=t,this._sources=void 0,this._globalVersion=X-1,this._flags=x}P.prototype=new b,P.prototype._refresh=function(){if(this._flags&=~D,this._flags&L)return!1;if((this._flags&(x|N))===N||(this._flags&=~x,this._globalVersion===X))return!0;if(this._globalVersion=X,this._flags|=L,this._version>0&&!me(this))return this._flags&=~L,!0;const t=v;try{ge(this),v=this;const e=this._compute();(this._flags&F||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~F,this._version++)}catch(e){this._value=e,this._flags|=F,this._version++}return v=t,ve(this),this._flags&=~L,!0},P.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=x|N;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}b.prototype._subscribe.call(this,t)},P.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(b.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~N;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}},P.prototype._notify=function(){if(!(this._flags&D)){this._flags|=x|D;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}},P.prototype.peek=function(){if(this._refresh()||J(),this._flags&F)throw this._value;return this._value},Object.defineProperty(P.prototype,"value",{get(){this._flags&L&&J();const t=he(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&F)throw this._value;return this._value}});function et(t){return new P(t)}function ye(t){const e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){z();const n=v;v=void 0;try{e()}catch(s){throw t._flags&=~L,t._flags|=$,ie(t),s}finally{v=n,Z()}}}function ie(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._compute=void 0,t._sources=void 0,ye(t)}function tt(t){if(v!==this)throw new Error("Out-of-order effect");ve(this),v=t,this._flags&=~L,this._flags&$&&ie(this),Z()}function B(t){this._compute=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=N}B.prototype._callback=function(){const t=this._start();try{if(this._flags&$||this._compute===void 0)return;const e=this._compute();typeof e=="function"&&(this._cleanup=e)}finally{t()}},B.prototype._start=function(){this._flags&L&&J(),this._flags|=L,this._flags&=~$,ye(this),ge(this),z();const t=v;return v=this,tt.bind(this,t)},B.prototype._notify=function(){this._flags&D||(this._flags|=D,this._nextBatchedEffect=V,V=this)},B.prototype._dispose=function(){this._flags|=$,this._flags&L||ie(this)};function be(t){const e=new B(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}class _e{get value(){return le(this)}set value(e){Qe(()=>nt(this,e))}peek(){return le(this,{peek:!0})}}const ae=t=>Object.assign(new _e,Object.entries(t).reduce((e,[n,s])=>{if(["value","peek"].some(r=>r===n))throw f;return typeof s!="object"||s===null||Array.isArray(s)?e[n]=pe(s):e[n]=ae(s),e},{})),nt=(t,e)=>Object.keys(e).forEach(n=>t[n].value=e[n]),le=(t,{peek:e=!1}={})=>Object.entries(t).reduce((n,[s,r])=>(r instanceof b?n[s]=e?r.peek():r.value:r instanceof _e&&(n[s]=le(r,{peek:e})),n),{});function we(t,e){if(typeof e!="object"||Array.isArray(e)||!e)return e;if(typeof e=="object"&&e.toJSON!==void 0&&typeof e.toJSON=="function")return e.toJSON();let n=t;return typeof t!="object"&&(n={...e}),Object.keys(e).forEach(s=>{n.hasOwnProperty(s)||(n[s]=e[s]),e[s]===null?delete n[s]:n[s]=we(n[s],e[s])}),n}const st="[a-zA-Z_$][0-9a-zA-Z_$.]*";function ce(t,e,n){return new RegExp(`(?<whole>\\${t}(?<${e}>${st})${n})`,"g")}const rt={regexp:ce("$","signal",""),replacer:t=>{const{signal:e}=t;return`ctx.store().${e}.value`}},ot={regexp:ce("$\\$","action","(?<call>\\((?<args>.*)\\))?"),replacer:({action:t,args:e})=>{const n=["ctx"];e&&n.push(...e.split(",").map(r=>r.trim()));const s=n.join(",");return`ctx.actions.${t}(${s})`}},it={regexp:ce("~","ref",""),replacer({ref:t}){return`data.refs.${t}`}},at=[ot,rt,it],lt=[{prefix:"store",preprocessors:{pre:[{regexp:/(?<whole>.+)/g,replacer:t=>{const{whole:e}=t;return`Object.assign({...ctx.store()}, ${e})`}}]},onLoad:t=>{const e=t.expressionFn(t);t.mergeStore(e)}},{prefix:"ref",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,bypassExpressionFunctionCreation:()=>!0,onLoad:t=>{const{el:e,expression:n}=t;return t.refs[n]=e,()=>delete t.refs[n]}}],f=new Error("Datastar error");class Ee{plugins=[];store=ae({});actions={};refs={};reactivity={signal:pe,computed:et,effect:be};parentID="";missingIDNext=0;removals=new Map;constructor(e={},...n){if(this.actions=Object.assign(this.actions,e),n=[...lt,...n],!n.length)throw f;const s=new Set;for(const r of n){if(r.requiredPluginPrefixes){for(const o of r.requiredPluginPrefixes)if(!s.has(o))throw f}this.plugins.push(r),s.add(r.prefix)}}run(){this.plugins.forEach(e=>{e.onGlobalInit&&e.onGlobalInit({actions:this.actions,refs:this.refs,reactivity:this.reactivity,mergeStore:this.mergeStore.bind(this),store:this.store})}),this.applyPlugins(document.body)}cleanupElementRemovals(e){const n=this.removals.get(e);if(n){for(const s of n)s();this.removals.delete(e)}}mergeStore(e){const n=we(this.store.value,e);this.store=ae(n)}signalByName(e){return this.store[e]}applyPlugins(e){const n=new Set;this.plugins.forEach((s,r)=>{this.walkDownDOM(e,o=>{r||this.cleanupElementRemovals(o);for(const i in o.dataset){let l=o.dataset[i]||"";if(!i.startsWith(s.prefix))continue;if(o.id.length===0&&(o.id=`ds-${this.parentID}-${this.missingIDNext++}`),n.clear(),s.allowedTagRegexps){const p=o.tagName.toLowerCase();if(![...s.allowedTagRegexps].some(h=>p.match(h)))throw new Error(`'${o.tagName}' not allowed for '${i}', allowed ${[[...s.allowedTagRegexps].map(h=>`'${h}'`)].join(", ")}`)}let c=i.slice(s.prefix.length),[d,...u]=c.split(".");if(s.mustHaveEmptyKey&&d.length>0||s.mustNotEmptyKey&&d.length===0)throw f;d.length&&(d=d[0].toLowerCase()+d.slice(1));const a=u.map(p=>{const[m,...h]=p.split("_");return{label:m,args:h}});if(s.allowedModifiers){for(const p of a)if(!s.allowedModifiers.has(p.label))throw f}const g=new Map;for(const p of a)g.set(p.label,p.args);if(s.mustHaveEmptyExpression&&l.length||s.mustNotEmptyExpression&&!l.length)throw f;const _=[...s.preprocessors?.pre||[],...at,...s.preprocessors?.post||[]];for(const p of _){if(n.has(p))continue;n.add(p);const m=l.split(";"),h=[];m.forEach(S=>{let y=S;const C=[...y.matchAll(p.regexp)];if(C.length)for(const M of C){if(!M.groups)continue;const{groups:T}=M,{whole:q}=T;y=y.replace(q,p.replacer(T))}h.push(y)}),l=h.join("; ")}const w={store:()=>this.store,mergeStore:this.mergeStore.bind(this),applyPlugins:this.applyPlugins.bind(this),cleanupElementRemovals:this.cleanupElementRemovals.bind(this),walkSignals:this.walkSignals.bind(this),actions:this.actions,refs:this.refs,reactivity:this.reactivity,el:o,key:d,expression:l,expressionFn:()=>{throw f},modifiers:g};if(!s.bypassExpressionFunctionCreation?.(w)&&!s.mustHaveEmptyExpression&&l.length){const p=l.split(";").map(h=>h.trim());p[p.length-1]=`return ${p[p.length-1]}`;const m=`
try {
${p.map(h=>`  ${h}`).join(`;
`)}
} catch (e) {
  throw e
}
            `;try{const h=new Function("ctx",m);w.expressionFn=h}catch{throw f}}const E=s.onLoad(w);E&&(this.removals.has(o)||this.removals.set(o,new Set),this.removals.get(o).add(E)),o.removeAttribute(i)}})})}walkSignalsStore(e,n){const s=Object.keys(e);for(let r=0;r<s.length;r++){const o=s[r],i=e[o],l=i instanceof b,c=typeof i=="object"&&Object.keys(i).length>0;if(l){n(o,i);continue}c&&this.walkSignalsStore(i,n)}}walkSignals(e){this.walkSignalsStore(this.store,e)}walkDownDOM(e,n,s=0){if(!e)return;const r=I(e);if(r)for(n(r),s=0,e=e.firstElementChild;e;)this.walkDownDOM(e,n,s++),e=e.nextElementSibling}}const ct="0.11.5",Se=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),ut={prefix:"bind",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>t.reactivity.effect(()=>{const e=Se(t.key),s=`${t.expressionFn(t)}`;!s||s==="false"||s==="null"||s==="undefined"?t.el.removeAttribute(e):t.el.setAttribute(e,s)})},ft=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,Y=["change","input","keydown"],dt=[ut,{prefix:"model",mustHaveEmptyKey:!0,preprocessors:{post:[{regexp:/(?<whole>.+)/g,replacer:t=>{const{whole:e}=t;return`ctx.store().${e}`}}]},allowedTagRegexps:new Set(["input","textarea","select","checkbox","radio"]),onLoad:t=>{const{el:e,expression:n}=t,s=t.expressionFn(t),r=e.tagName.toLowerCase(),o=r.includes("input"),i=r.includes("select"),l=r.includes("textarea"),c=r.includes("radio"),d=e.getAttribute("type"),u=r.includes("checkbox")||o&&d==="checkbox",a=o&&d==="file";if(!o&&!i&&!l&&!u&&!c)throw f;const g=()=>{if(!s)throw f;const m="value"in e,h=s.value;u?e.checked=h:a||(m?e.value=`${h}`:e.setAttribute("value",`${h}`))},_=t.reactivity.effect(g),w=()=>{if(a){const[S]=e?.files||[];if(!S){s.value="";return}const y=new FileReader,C=t.store();y.onload=()=>{if(typeof y.result!="string")throw f;const T=y.result.match(ft);if(!T?.groups)throw f;const{mime:q,contents:O}=T.groups;s.value=O;const K=`${n}Mime`;if(K in C){const Ze=C[`${K}`];Ze.value=q}},y.readAsDataURL(S);const M=`${n}Name`;if(M in C){const T=C[`${M}`];T.value=S.name}return}const m=s.value,h=e;if(typeof m=="number")s.value=Number(h.value);else if(typeof m=="string")s.value=h.value;else if(typeof m=="boolean")u?s.value=h.checked:s.value=!!h.value;else if(!(typeof m>"u"))if(typeof m=="bigint")s.value=BigInt(h.value);else throw console.log(typeof m),f},E=e.tagName.split("-");if(E.length>1){const m=E[0].toLowerCase();Y.forEach(h=>{Y.push(`${m}-${h}`)})}return Y.forEach(m=>e.addEventListener(m,w)),()=>{_(),Y.forEach(m=>e.removeEventListener(m,w))}}},{prefix:"text",mustHaveEmptyKey:!0,onLoad:t=>{const{el:e,expressionFn:n}=t;if(!(e instanceof HTMLElement))throw f;return t.reactivity.effect(()=>{const s=n(t);e.textContent=`${s}`})}},{prefix:"focus",mustHaveEmptyKey:!0,mustHaveEmptyExpression:!0,onLoad:t=>(t.el.tabIndex||t.el.setAttribute("tabindex","0"),t.el.focus(),t.el.scrollIntoView({block:"center",inline:"center"}),()=>t.el.blur())},{prefix:"on",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,allowedModifiers:new Set(["once","passive","capture","debounce","throttle"]),onLoad:t=>{const{el:e,key:n,expressionFn:s}=t;let r=()=>{s(t)};const o=t.modifiers.get("debounce");if(o){const d=Te(o),u=Q(o,"leading",!1),a=Q(o,"noTrail",!0);r=ht(r,d,u,a)}const i=t.modifiers.get("throttle");if(i){const d=Te(i),u=Q(i,"noLead",!0),a=Q(i,"noTrail",!0);r=pt(r,d,u,a)}const l={capture:!0,passive:!1,once:!1};t.modifiers.has("capture")||(l.capture=!1),t.modifiers.has("passive")&&(l.passive=!0),t.modifiers.has("once")&&(l.once=!0);const c=Se(n).toLowerCase();return c==="load"?(r(),e.removeAttribute("data-on-load"),()=>{}):(e.addEventListener(c,r,l),()=>e.removeEventListener(c,r))}}];function Te(t){if(!t||t?.length===0)return 0;for(const e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return parseFloat(e)}catch{}}return 0}function Q(t,e,n=!1){return t?t.includes(e)||n:!1}function ht(t,e,n=!1,s=!0){let r;const o=()=>r&&clearTimeout(r);return function(...l){o(),n&&!r&&t(...l),r=setTimeout(()=>{s&&t(...l),o()},e)}}function pt(t,e,n=!0,s=!1){let r=!1,o=null;return function(...l){r?o=l:(r=!0,n?t(...l):o=l,setTimeout(()=>{s&&o&&(t(...o),o=null),r=!1},e))}}function mt(t,{signal:e,headers:n,onopen:s,onmessage:r,onclose:o,onerror:i,openWhenHidden:l,...c}){return new Promise((d,u)=>{const a={...n};a.accept||(a.accept=Ae);let g;function _(){g.abort(),document.hidden||h()}l||document.addEventListener("visibilitychange",_);let w=gt,E=0;function p(){document.removeEventListener("visibilitychange",_),window.clearTimeout(E),g.abort()}e?.addEventListener("abort",()=>{p(),d()});const m=s??vt;async function h(){g=new AbortController;try{const S=await fetch(t,{...c,headers:a,signal:g.signal});await m(S),await yt(S.body,bt(_t(y=>{y?a[Le]=y:delete a[Le]},y=>{w=y},r))),o?.(),p(),d()}catch(S){if(!g.signal.aborted)try{const y=i?.(S)??w;window.clearTimeout(E),E=window.setTimeout(h,y)}catch(y){p(),u(y)}}}h()})}const Ae="text/event-stream",gt=1e3,Le="last-event-id";function vt(t){if(!t.headers.get("content-type")?.startsWith(Ae))throw f}async function yt(t,e){const n=t.getReader();for(;;){const s=await n.read();if(s.done)break;e(s.value)}}function bt(t){let e,n,s,r=!1;return function(i){e===void 0?(e=i,n=0,s=-1):e=wt(e,i);const l=e.length;let c=0;for(;n<l;){r&&(e[n]===10&&(c=++n),r=!1);let d=-1;for(;n<l&&d===-1;++n)switch(e[n]){case 58:s===-1&&(s=n-c);break;case 13:r=!0;case 10:d=n;break}if(d===-1)break;t(e.subarray(c,d),s),c=n,s=-1}c===l?e=void 0:c!==0&&(e=e.subarray(c),n-=c)}}function _t(t,e,n){let s=ke();const r=new TextDecoder;return function(i,l){if(i.length===0)n?.(s),s=ke();else if(l>0){const c=r.decode(i.subarray(0,l)),d=l+(i[l+1]===32?2:1),u=r.decode(i.subarray(d));switch(c){case"data":s.data=s.data?s.data+`
`+u:u;break;case"event":s.event=u;break;case"id":t(s.id=u);break;case"retry":const a=parseInt(u,10);isNaN(a)||e(s.retry=a);break}}}}function wt(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function ke(){return{data:"",event:"",id:"",retry:void 0}}const ee=new WeakSet;function Et(t,e,n={}){t instanceof Document&&(t=t.documentElement);let s;typeof e=="string"?s=kt(e):s=e;const r=Pt(s),o=Tt(t,r,n);return Pe(t,r,o)}function Pe(t,e,n){if(n.head.block){const s=t.querySelector("head"),r=e.querySelector("head");if(s&&r){const o=Ne(r,s,n);Promise.all(o).then(()=>{Pe(t,e,Object.assign(n,{head:{block:!1,ignore:!0}}))});return}}if(n.morphStyle==="innerHTML")return Me(e,t,n),t.children;if(n.morphStyle==="outerHTML"||n.morphStyle==null){const s=Nt(e,t,n);if(!s)throw f;const r=s?.previousSibling,o=s?.nextSibling,i=te(t,s,n);return s?Mt(r,i,o):[]}else throw"Do not understand how to morph style "+n.morphStyle}function te(t,e,n){if(!(n.ignoreActive&&t===document.activeElement))if(e==null){if(n.callbacks.beforeNodeRemoved(t)===!1)return;t.remove(),n.callbacks.afterNodeRemoved(t);return}else{if(se(t,e))return n.callbacks.beforeNodeMorphed(t,e)===!1?void 0:(t instanceof HTMLHeadElement&&n.head.ignore||(e instanceof HTMLHeadElement&&t instanceof HTMLHeadElement&&n.head.style!=="morph"?Ne(e,t,n):(St(e,t),Me(e,t,n))),n.callbacks.afterNodeMorphed(t,e),t);if(n.callbacks.beforeNodeRemoved(t)===!1||n.callbacks.beforeNodeAdded(e)===!1)return;if(!t.parentElement)throw f;return t.parentElement.replaceChild(e,t),n.callbacks.afterNodeAdded(e),n.callbacks.afterNodeRemoved(t),e}}function Me(t,e,n){let s=t.firstChild,r=e.firstChild,o;for(;s;){if(o=s,s=o.nextSibling,r==null){if(n.callbacks.beforeNodeAdded(o)===!1)return;e.appendChild(o),n.callbacks.afterNodeAdded(o),H(n,o);continue}if(Re(o,r,n)){te(r,o,n),r=r.nextSibling,H(n,o);continue}let i=At(t,e,o,r,n);if(i){r=Ce(r,i,n),te(i,o,n),H(n,o);continue}let l=Lt(t,o,r,n);if(l){r=Ce(r,l,n),te(l,o,n),H(n,o);continue}if(n.callbacks.beforeNodeAdded(o)===!1)return;e.insertBefore(o,r),n.callbacks.afterNodeAdded(o),H(n,o)}for(;r!==null;){let i=r;r=r.nextSibling,Ie(i,n)}}function St(t,e){let n=t.nodeType;if(n===1){for(const s of t.attributes)e.getAttribute(s.name)!==s.value&&e.setAttribute(s.name,s.value);for(const s of e.attributes)t.hasAttribute(s.name)||e.removeAttribute(s.name)}if((n===Node.COMMENT_NODE||n===Node.TEXT_NODE)&&e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue),t instanceof HTMLInputElement&&e instanceof HTMLInputElement&&t.type!=="file")e.value=t.value||"",ne(t,e,"value"),ne(t,e,"checked"),ne(t,e,"disabled");else if(t instanceof HTMLOptionElement)ne(t,e,"selected");else if(t instanceof HTMLTextAreaElement&&e instanceof HTMLTextAreaElement){const s=t.value,r=e.value;s!==r&&(e.value=s),e.firstChild&&e.firstChild.nodeValue!==s&&(e.firstChild.nodeValue=s)}}function ne(t,e,n){const s=t.getAttribute(n),r=e.getAttribute(n);s!==r&&(s?e.setAttribute(n,s):e.removeAttribute(n))}function Ne(t,e,n){const s=[],r=[],o=[],i=[],l=n.head.style,c=new Map;for(const u of t.children)c.set(u.outerHTML,u);for(const u of e.children){let a=c.has(u.outerHTML),g=n.head.shouldReAppend(u),_=n.head.shouldPreserve(u);a||_?g?r.push(u):(c.delete(u.outerHTML),o.push(u)):l==="append"?g&&(r.push(u),i.push(u)):n.head.shouldRemove(u)!==!1&&r.push(u)}i.push(...c.values());const d=[];for(const u of i){const a=document.createRange().createContextualFragment(u.outerHTML).firstChild;if(!a)throw f;if(n.callbacks.beforeNodeAdded(a)){if(a.hasAttribute("href")||a.hasAttribute("src")){let g;const _=new Promise(w=>{g=w});a.addEventListener("load",function(){g(void 0)}),d.push(_)}e.appendChild(a),n.callbacks.afterNodeAdded(a),s.push(a)}}for(const u of r)n.callbacks.beforeNodeRemoved(u)!==!1&&(e.removeChild(u),n.callbacks.afterNodeRemoved(u));return n.head.afterHeadMorphed(e,{added:s,kept:o,removed:r}),d}function R(){}function Tt(t,e,n){return{target:t,newContent:e,config:n,morphStyle:n.morphStyle,ignoreActive:n.ignoreActive,idMap:It(t,e),deadIds:new Set,callbacks:Object.assign({beforeNodeAdded:R,afterNodeAdded:R,beforeNodeMorphed:R,afterNodeMorphed:R,beforeNodeRemoved:R,afterNodeRemoved:R},n.callbacks),head:Object.assign({style:"merge",shouldPreserve:s=>s.getAttribute("im-preserve")==="true",shouldReAppend:s=>s.getAttribute("im-re-append")==="true",shouldRemove:R,afterHeadMorphed:R},n.head)}}function Re(t,e,n){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName?t?.id?.length&&t.id===e.id?!0:U(n,t,e)>0:!1}function se(t,e){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName}function Ce(t,e,n){for(;t!==e;){const s=t;if(t=t?.nextSibling,!s)throw f;Ie(s,n)}return H(n,e),e.nextSibling}function At(t,e,n,s,r){const o=U(r,n,e);let i=null;if(o>0){i=s;let l=0;for(;i!=null;){if(Re(n,i,r))return i;if(l+=U(r,i,t),l>o)return null;i=i.nextSibling}}return i}function Lt(t,e,n,s){let r=n,o=e.nextSibling,i=0;for(;r&&o;){if(U(s,r,t)>0)return null;if(se(e,r))return r;if(se(o,r)&&(i++,o=o.nextSibling,i>=2))return null;r=r.nextSibling}return r}const Oe=new DOMParser;function kt(t){const e=t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(e.match(/<\/html>/)||e.match(/<\/head>/)||e.match(/<\/body>/)){const n=Oe.parseFromString(t,"text/html");if(e.match(/<\/html>/))return ee.add(n),n;{let s=n.firstChild;return s?(ee.add(s),s):null}}else{const s=Oe.parseFromString(`<body><template>${t}</template></body>`,"text/html").body.querySelector("template")?.content;if(!s)throw f;return ee.add(s),s}}function Pt(t){if(t==null)return document.createElement("div");if(ee.has(t))return t;if(t instanceof Node){const e=document.createElement("div");return e.append(t),e}else{const e=document.createElement("div");for(const n of[...t])e.append(n);return e}}function Mt(t,e,n){const s=[],r=[];for(;t;)s.push(t),t=t.previousSibling;for(;s.length>0;){const o=s.pop();r.push(o),e?.parentElement?.insertBefore(o,e)}for(r.push(e);n;)s.push(n),r.push(n),n=n.nextSibling;for(;s.length;)e?.parentElement?.insertBefore(s.pop(),e.nextSibling);return r}function Nt(t,e,n){let s=t.firstChild,r=s,o=0;for(;s;){let i=Rt(s,e,n);i>o&&(r=s,o=i),s=s.nextSibling}return r}function Rt(t,e,n){return se(t,e)?.5+U(n,t,e):0}function Ie(t,e){H(e,t),e.callbacks.beforeNodeRemoved(t)!==!1&&(t.remove(),e.callbacks.afterNodeRemoved(t))}function Ct(t,e){return!t.deadIds.has(e)}function Ot(t,e,n){return t.idMap.get(n)?.has(e)||!1}function H(t,e){const n=t.idMap.get(e);if(n)for(const s of n)t.deadIds.add(s)}function U(t,e,n){const s=t.idMap.get(e);if(!s)return 0;let r=0;for(const o of s)Ct(t,o)&&Ot(t,o,n)&&++r;return r}function He(t,e){const n=t.parentElement,s=t.querySelectorAll("[id]");for(const r of s){let o=r;for(;o!==n&&o;){let i=e.get(o);i==null&&(i=new Set,e.set(o,i)),i.add(r.id),o=o.parentElement}}}function It(t,e){const n=new Map;return He(t,n),He(e,n),n}const Ht=["get","post","put","patch","delete"].reduce((t,e)=>(t[e]=async(n,s)=>{const r=Document;if(!r.startViewTransition){await $e(e,s,n);return}new Promise(o=>{r.startViewTransition(async()=>{await $e(e,s,n),o(void 0)})})},t),{}),Dt="Content-Type",$t="datastar-request",xt="application/json",Ft="true",W="datastar-",G=`${W}indicator`,ue=`${G}-loading`,De=`${W}settling`,re=`${W}swapping`,Vt="self",k={MorphElement:"morph_element",InnerElement:"inner_element",OuterElement:"outer_element",PrependElement:"prepend_element",AppendElement:"append_element",BeforeElement:"before_element",AfterElement:"after_element",DeleteElement:"delete_element",UpsertAttributes:"upsert_attributes"},jt=[{prefix:"header",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>{const e=t.store();e.fetch||(e.fetch={}),e.fetch.headers||(e.fetch.headers={});const n=e.fetch.headers,s=t.key[0].toUpperCase()+t.key.slice(1);return n[s]=t.reactivity.computed(()=>t.expressionFn(t)),()=>{delete n[s]}}},{prefix:"fetchIndicator",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,onGlobalInit:()=>{const t=document.createElement("style");t.innerHTML=`
.${G}{
 opacity:0;
 transition: opacity 300ms ease-out;
}
.${ue} {
 opacity:1;
 transition: opacity 300ms ease-in;
}
`,document.head.appendChild(t)},onLoad:t=>t.reactivity.effect(()=>{const e=t.reactivity.computed(()=>`${t.expressionFn(t)}`),n=t.store();n.fetch||(n.fetch={}),n.fetch.indicatorSelectors||(n.fetch.indicatorSelectors={}),n.fetch.indicatorSelectors[t.el.id]=e;const s=document.querySelector(e.value);if(!s)throw f;return s.classList.add(G),()=>{delete n.fetch.indicatorSelectors[t.el.id]}})}];async function $e(t,e,n){const s=n.store();if(!e)throw f;const r={...s.value};delete r.fetch;const o=JSON.stringify(r);let i=!1,l=n.el;const c=s.fetch?.indicatorSelectors?.[l.id]||null;if(c){const a=document.querySelector(c.value);a&&(l=a,l.classList.remove(G),l.classList.add(ue),i=!0)}const d=new URL(e,window.location.origin);t=t.toUpperCase();const u={method:t,headers:{[Dt]:xt,[$t]:Ft},onmessage:a=>{if(!a.event)return;let g="",_="morph_element",w="",E=500,p=!1,m="",h,S=!1,y=!1;if(!a.event.startsWith(W))throw f;switch(a.event.slice(W.length)){case"redirect":p=!0;break;case"fragment":y=!0;break;case"error":S=!0;break;default:throw`Unknown event: ${a}`}if(a.data.split(`
`).forEach(M=>{const T=M.indexOf(" ");if(T===-1)throw f;const q=M.slice(0,T),O=M.slice(T+1);switch(q){case"selector":w=O;break;case"merge":const K=O;if(!Object.values(k).includes(K))throw f;_=K;break;case"settle":E=parseInt(O);break;case"fragment":case"html":g=O;break;case"redirect":m=O;break;case"error":h=new Error(O);break;default:throw f}}),S&&h)throw h;if(p&&m)window.location.href=m;else if(y&&g)Bt(n,w,_,g,E);else throw f},onclose:()=>{i&&setTimeout(()=>{l.classList.remove(ue),l.classList.add(G)},300)}};if(s.fetch?.headers?.value&&u.headers)for(const a in s.fetch.headers.value){const g=s.fetch.headers.value[a];u.headers[a]=g}if(t==="GET"){const a=new URLSearchParams(d.search);a.append("datastar",o),d.search=a.toString()}else u.body=o;await mt(d,u)}const xe=document.createElement("template");function Bt(t,e,n,s,r){const{el:o}=t;xe.innerHTML=s;const i=xe.content.firstChild;if(!(i instanceof Element))throw f;const l=e===Vt;let c;if(l)c=[o];else{const d=e||`#${i.getAttribute("id")}`;if(c=document.querySelectorAll(d)||[],!c)throw f}for(const d of c){d.classList.add(re);const u=d.outerHTML;let a=d;switch(n){case k.MorphElement:const _=Et(a,i);if(!_?.length)throw f;a=_[0];break;case k.InnerElement:a.innerHTML=i.innerHTML;break;case k.OuterElement:a.replaceWith(i);break;case k.PrependElement:a.prepend(i);break;case k.AppendElement:a.append(i);break;case k.BeforeElement:a.before(i);break;case k.AfterElement:a.after(i);break;case k.DeleteElement:setTimeout(()=>a.remove(),r);break;case k.UpsertAttributes:i.getAttributeNames().forEach(E=>{const p=i.getAttribute(E);a.setAttribute(E,p)});break;default:throw f}a.classList.add(re),t.cleanupElementRemovals(d),t.applyPlugins(document.body),setTimeout(()=>{d.classList.remove(re),a.classList.remove(re)},1e3);const g=a.outerHTML;u!==g&&(a.classList.add(De),setTimeout(()=>{a.classList.remove(De)},r))}}const fe="display",Fe="none",de="important",Ut={prefix:"show",allowedModifiers:new Set([de]),onLoad:t=>{const{el:e,modifiers:n,expressionFn:s,reactivity:r}=t;return r.effect(()=>{const i=!!s(t),c=n.has(de)?de:void 0;i?e.style.length===1&&e.style.display===Fe?e.style.removeProperty(fe):e.style.setProperty(fe,"",c):e.style.setProperty(fe,Fe,c)})}},Wt="intersects",Ve="once",je="half",Be="full",Gt={prefix:Wt,allowedModifiers:new Set([Ve,je,Be]),mustHaveEmptyKey:!0,onLoad:t=>{const{modifiers:e}=t,n={threshold:0};e.has(Be)?n.threshold=1:e.has(je)&&(n.threshold=.5);const s=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(t.expressionFn(t),e.has(Ve)&&s.disconnect())})},n);return s.observe(t.el),()=>s.disconnect()}},Ue="prepend",We="append",Ge=new Error("Target element must have a parent if using prepend or append"),qt={prefix:"teleport",allowedModifiers:new Set([Ue,We]),allowedTagRegexps:new Set(["template"]),bypassExpressionFunctionCreation:()=>!0,onLoad:t=>{const{el:e,modifiers:n,expression:s}=t;if(!(e instanceof HTMLTemplateElement))throw f;const r=document.querySelector(s);if(!r||!e.content)throw f;const o=e.content.cloneNode(!0);if(I(o)?.firstElementChild)throw f;if(n.has(Ue)){if(!r.parentNode)throw Ge;r.parentNode.insertBefore(o,r)}else if(n.has(We)){if(!r.parentNode)throw Ge;r.parentNode.insertBefore(o,r.nextSibling)}else r.appendChild(o)}},Kt={prefix:"scrollIntoView",onLoad:t=>{const{el:e}=t;e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}},qe="ds-view-transition-stylesheet",Jt=[Ut,Gt,qt,Kt,{prefix:"viewTransition",onGlobalInit(t){const e=document.createElement("style");e.id=qe,document.head.appendChild(e);let n=!1;if(document.head.childNodes.forEach(s=>{s instanceof HTMLMetaElement&&s.name==="view-transition"&&(n=!0)}),!n){const s=document.createElement("meta");s.name="view-transition",s.content="same-origin",document.head.appendChild(s)}t.mergeStore({viewTransitionRefCounts:{}})},onLoad:t=>{const{el:e,expressionFn:n}=t;let s=n(t);if(!s){if(!e.id)throw f;s=e.id}const r=document.getElementById(qe);if(!r)throw f;const o=`ds-vt-${s}`,i=`
.${o} {
  view-transition: ${s};
}

`;r.innerHTML+=i;const l=t.store();let c=l.viewTransitionRefCounts[s];return c||(c=t.reactivity.signal(0),l.viewTransitionRefCounts[s]=c),c.value++,e.classList.add(o),()=>{c.value--,c.value===0&&(delete l.viewTransitionRefCounts[s],r.innerHTML=r.innerHTML.replace(i,""))}}}],zt={setAll:async(t,e,n)=>{const s=new RegExp(e);t.walkSignals((r,o)=>s.test(r)&&(o.value=n))},toggleAll:async(t,e)=>{const n=new RegExp(e);t.walkSignals((s,r)=>n.test(s)&&(r.value=!r.value))}};function Ke(t={},...e){const n=performance.now(),s=new Ee(t,...e);s.run();const r=performance.now();return console.log(`Datastar v${ct} loaded and attached to all DOM elements in ${r-n}ms`),s}function Je(t={},...e){const n=Object.assign({},zt,Ht,t),s=[...jt,...Jt,...dt,...e];return Ke(n,...s)}const ze=window;ze.ds=Je(),ze.dispatchEvent(new CustomEvent("datastar-ready")),A.DATASTAR_ERROR=f,A.Datastar=Ee,A.runDatastarWith=Ke,A.runDatastarWithAllPlugins=Je,A.toHTMLorSVGElement=I,Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=datastar.umd.cjs.map
