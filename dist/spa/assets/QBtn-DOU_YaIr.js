import{c as te,g as z,a as d,h as g,$ as ce,I as de,H as fe,B as V,V as ne,M as ve,r as D,b as ge,a9 as me,C as P,l as be,G as he,T as ye}from"./index-DTg-vuUE.js";import{u as ae,d as re,h as ke,b as K,v as pe,l as xe,Q as qe}from"./dom-BsBFrNZF.js";const F="0 0 24 24",H=e=>e,Q=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(ue).join("|")+")"),U=new RegExp("^("+Object.keys(ie).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,we=/^svguse:/,Be=/^ion-/,Ce=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,W=te({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=z(),n=re(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Re.test(r)===!0){const[s,y=F]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return g("path",{style:b,d:k,transform:p})})}}if(Le.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=F]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(Ee);if(h!==null)o=le[h[1]](r);else if(Ce.test(r)===!0)o=r;else if(Be.test(r)===!0)o=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(U.test(r)===!0){o="notranslate material-symbols";const s=r.match(U);s!==null&&(r=r.substring(6),o+=ie[s[1]]),q=r}else{o="notranslate material-icons";const s=r.match($e);s!==null&&(r=r.substring(2),o+=ue[s[1]]),q=r}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?g(e.tag,o,ke(t.default)):f.value.img===!0?g(e.tag,o,K(t.default,[g("img",{src:f.value.src})])):f.value.svg===!0?g(e.tag,o,K(t.default,[g("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?g(e.tag,o,K(t.default,[g("svg",{viewBox:f.value.viewBox},[g("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),g(e.tag,o,K(t.default,[f.value.content])))}}});function X(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _e(e,t){for(const l in t){const n=t[l],i=e[l];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function Y(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Se(e,t){return Array.isArray(e)===!0?Y(e,t):Array.isArray(t)===!0?Y(t,e):e===t}function Pe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Se(e[l],t[l])===!1)return!1;return!0}const se={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Xe={...se,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Te({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=z(),{props:n,proxy:i,emit:f}=l,o=pe(l),r=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),s=d(()=>h.value!==null),y=d(()=>r.value===!0||s.value===!0),u=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=d(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(s.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const w=i.$route.matched;if(w.length===0)return-1;const B=w.findIndex(G.bind(null,R));if(B!==-1)return B;const I=X(v[E-2]);return E>1&&X(R)===I&&w[w.length-1].path!==I?w.findIndex(G.bind(null,v[E-2])):B}),p=d(()=>s.value===!0&&b.value!==-1&&_e(i.$route.params,h.value.params)),c=d(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Pe(i.$route.params,h.value.params)),x=d(()=>s.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function C(v,{returnRouterError:E,to:R=n.to,replace:w=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const B=i.$router[w===!0?"replace":"push"](R);return E===!0?B:B.then(()=>{}).catch(()=>{})}function _(v){if(s.value===!0){const E=R=>C(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:S,navigateToRouterLink:C,navigateOnClick:_}}function Me(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function J(e,t,l,n){l.modifiers.stop===!0&&ne(e);const i=l.modifiers.color;let f=l.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),r=document.createElement("span"),q=ve(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,c=f?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,S=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",xe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(r),t.appendChild(o);const C=()=>{o.remove(),clearTimeout(_)};l.abort.push(C);let _=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,_=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,_=setTimeout(()=>{o.remove(),l.abort.splice(l.abort.indexOf(C),1)},275)},250)},50)}function Z(e,{modifiers:t,value:l,arg:n}){const i=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}const Oe=ce({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&J(i,e,n,i.qKeyEvent===!0)},keystart:Me(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&V(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&Z(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),de(t,"main"),delete e._qripple)}}),oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),je={align:{type:String,validator:e=>Ae.includes(e)}};function Ke(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ie={xs:8,sm:10,md:14,lg:20,xl:24},Ne=["button","submit","reset"],Qe=/[^\s]\/[^\s]/,Ve=["flat","outline","push","unelevated"];function ze(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const De={...ae,...se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ve.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...je.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Fe={...De,round:Boolean};function He(e){const t=re(e,Ie),l=Ke(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:r}=Te({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>s.value===!0?e.tabindex||0:-1),u=d(()=>ze(e,"standard")),k=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,o.value):Ne.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Qe.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=d(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:$}=be;let T=null,M=null,O=null;const Ge=te({name:"QBtn",props:{...Fe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=z(),{classes:i,style:f,innerClasses:o,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=He(e),u=D(null),k=D(null);let b=null,p,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=d(()=>({center:e.round})),_=d(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:R,onKeydown:w,onMousedown:I};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=B}return a}return{onClick:P}}),E=d(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...v.value}));function R(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const N=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",N,$),u.value!==null&&u.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",N,$),u.value.addEventListener("blur",N,$)}}s(a)}}function w(a){u.value!==null&&(l("keydown",a),V(a,[13,32])===!0&&M!==u.value&&(M!==null&&A(),a.defaultPrevented!==!0&&(u.value.focus(),M=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),u.value.addEventListener("blur",L,$)),P(a)))}function B(a){u.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&A(),T=u.value,b=a.target,b.addEventListener("touchcancel",L,$),b.addEventListener("touchend",L,$)),p=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,p=!1},200)))}function I(a){u.value!==null&&(a.qSkipRipple=p===!0,l("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&A(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,$)))}function L(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(M===u.value&&V(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&he(m),a.cancelBubble===!0&&ne(m),u.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}l("keyup",a)}A()}}function A(a){const m=k.value;a!==!0&&(T===u.value||O===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===u.value&&(b!==null&&(b.removeEventListener("touchcancel",L,$),b.removeEventListener("touchend",L,$)),T=b=null),O===u.value&&(document.removeEventListener("mouseup",L,$),O=null),M===u.value&&(document.removeEventListener("keyup",L,!0),u.value!==null&&u.value.removeEventListener("blur",L,$),M=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return ge(()=>{A(!0)}),Object.assign(n,{click:a=>{y.value===!0&&R(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(g(W,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(g("span",{class:"block"},[e.label])),a=K(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(g(W,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},a)),e.loading!==null&&m.push(g(ye,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(qe)])]:null)),me(g(h.value,E.value,m),[[Oe,S.value,void 0,C.value]])}}});export{W as Q,Oe as R,Te as a,Ge as b,je as c,Ke as d,Xe as u};
