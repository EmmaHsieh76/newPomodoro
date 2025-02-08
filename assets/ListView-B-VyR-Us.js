import{p as Q,m as se,l as ke,q as Pe,v as Z,c as w,x as ee,h as n,y as z,z as J,M as pe,I as le,E as ae,A as Fe,B as Re,C as Se,D as Be,F as $e,G as Te,H as De,J as Le,r as T,K as Ee,L as Oe,N as Ae,w as We,O as Me,P as Ne,Q as Ue,R as Ke,S as A,T as G,U as qe,W as je,X as ze,Y as He,Z as Xe,_ as Ye,$ as Ge,n as de,a0 as Je,s as Qe,d as Ze,f as L,k as et,e as $,i as f,a1 as ce,a2 as E,a3 as fe,u as O,a4 as ve,j as me,V as j}from"./index-Fp7Z4zFN.js";import{u as tt}from"./list-CTSFtV6i.js";import{V as X,a as nt}from"./VRow-CF4gNdRa.js";import{V as lt,m as at,u as be,a as it,b as ot,c as he,d as ge}from"./VInput-CiKzkc5X.js";class ie{constructor(o){let{x:a,y:i,width:t,height:l}=o;this.x=a,this.y=i,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function rt(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,l,r,c,v;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),l=+t[0],r=+t[5],c=+t[12],v=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),l=+t[0],r=+t[3],c=+t[4],v=+t[5];else return new ie(o);const m=a.transformOrigin,h=o.x-c-(1-l)*parseFloat(m),g=o.y-v-(1-r)*parseFloat(m.slice(m.indexOf(" ")+1)),k=l?o.width/l:e.offsetWidth+1,V=r?o.height/r:e.offsetHeight+1;return new ie({x:h,y:g,width:k,height:V})}else return new ie(o)}function st(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const ut="cubic-bezier(0.4, 0, 0.2, 1)",dt=Q({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...se(),...ke({transition:{component:Pe}})},"VCounter"),ct=Z()({name:"VCounter",functional:!0,props:dt(),setup(e,o){let{slots:a}=o;const i=w(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(pe,{transition:e.transition},{default:()=>[z(n("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}}),ft=Q({floating:Boolean,...se()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:ft(),setup(e,o){let{slots:a}=o;return ee(()=>n(lt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),vt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:le,bgColor:String,clearable:Boolean,clearIcon:{type:le,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:le,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>vt.includes(e)},"onClick:clear":ae(),"onClick:appendInner":ae(),"onClick:prependInner":ae(),...se(),...Fe(),...Re(),...Se()},"VField"),Ce=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...at(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:l}=Be(e),{loaderClasses:r}=$e(e),{focusClasses:c,isFocused:v,focus:m,blur:h}=be(e),{InputIcon:g}=it(e),{roundedClasses:k}=Te(e),{rtlClasses:V}=De(),F=w(()=>e.dirty||e.active),y=w(()=>!e.singleLine&&!!(e.label||t.label)),C=Le(),s=w(()=>e.id||`input-${C}`),u=w(()=>`${s.value}-messages`),W=T(),I=T(),H=T(),d=w(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:P,backgroundColorStyles:p}=Ee(Oe(e,"bgColor")),{textColorClasses:R,textColorStyles:te}=Ae(w(()=>e.error||e.disabled?void 0:F.value&&v.value?e.color:e.baseColor));We(F,b=>{if(y.value){const x=W.value.$el,S=I.value.$el;requestAnimationFrame(()=>{const B=rt(x),_=S.getBoundingClientRect(),q=_.x-B.x,N=_.y-B.y-(B.height/2-_.height/2),U=_.width/.75,K=Math.abs(U-B.width)>1?{maxWidth:Me(U)}:void 0,Ve=getComputedStyle(x),ue=getComputedStyle(S),Ie=parseFloat(Ve.transitionDuration)*1e3||150,_e=parseFloat(ue.getPropertyValue("--v-field-label-scale")),we=ue.getPropertyValue("color");x.style.visibility="visible",S.style.visibility="hidden",st(x,{transform:`translate(${q}px, ${N}px) scale(${_e})`,color:we,...K},{duration:Ie,easing:ut,direction:b?"normal":"reverse"}).finished.then(()=>{x.style.removeProperty("visibility"),S.style.removeProperty("visibility")})})}},{flush:"post"});const M=w(()=>({isActive:F,isFocused:v,controlRef:H,blur:h,focus:m}));function ne(b){b.target!==document.activeElement&&b.preventDefault()}function D(b){var x;b.key!=="Enter"&&b.key!==" "||(b.preventDefault(),b.stopPropagation(),(x=e["onClick:clear"])==null||x.call(e,new MouseEvent("click")))}return ee(()=>{var q,N,U;const b=e.variant==="outlined",x=!!(t["prepend-inner"]||e.prependInnerIcon),S=!!(e.clearable||t.clear)&&!e.disabled,B=!!(t["append-inner"]||e.appendInnerIcon||S),_=()=>t.label?t.label({...M.value,label:e.label,props:{for:s.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":F.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!d.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!_(),[`v-field--variant-${e.variant}`]:!0},l.value,P.value,c.value,r.value,k.value,V.value,e.class],style:[p.value,e.style],onClick:ne},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),x&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(g,{key:"prepend-icon",name:"prependInner"},null),(q=t["prepend-inner"])==null?void 0:q.call(t,M.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&n(Y,{key:"floating-label",ref:I,class:[R.value],floating:!0,for:s.value,style:te.value},{default:()=>[_()]}),y.value&&n(Y,{key:"label",ref:W,for:s.value},{default:()=>[_()]}),(N=t.default)==null?void 0:N.call(t,{...M.value,props:{id:s.value,class:"v-field__input","aria-describedby":u.value},focus:m,blur:h})]),S&&n(Ue,{key:"clear"},{default:()=>[z(n("div",{class:"v-field__clearable",onMousedown:K=>{K.preventDefault(),K.stopPropagation()}},[n(Ke,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...M.value,props:{onKeydown:D,onFocus:m,onBlur:h,onClick:e["onClick:clear"]}}):n(g,{name:"clear",onKeydown:D,onFocus:m,onBlur:h},null)]})]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(U=t["append-inner"])==null?void 0:U.call(t,M.value),e.appendInnerIcon&&n(g,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",R.value],style:te.value},[b&&n(A,null,[n("div",{class:"v-field__outline__start"},null),y.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:I,floating:!0,for:s.value},{default:()=>[_()]})]),n("div",{class:"v-field__outline__end"},null)]),d.value&&y.value&&n(Y,{ref:I,floating:!0,for:s.value},{default:()=>[_()]})])])}),{controlRef:H}}});function mt(e){const o=Object.keys(Ce.props).filter(a=>!qe(a)&&a!=="class"&&a!=="style");return je(e,o)}const oe=Symbol("Forwarded refs");function re(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function ht(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[oe]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,l)){const c=Reflect.get(r.value,l);return typeof c=="function"?c.bind(r.value):c}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,l))return!0;return!1},set(t,l,r){if(Reflect.has(t,l))return Reflect.set(t,l,r);if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const c of a)if(c.value&&Reflect.has(c.value,l))return Reflect.set(c.value,l,r);return!1},getOwnPropertyDescriptor(t,l){var c;const r=Reflect.getOwnPropertyDescriptor(t,l);if(r)return r;if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const v of a){if(!v.value)continue;const m=re(v.value,l)??("_"in v.value?re((c=v.value._)==null?void 0:c.setupState,l):void 0);if(m)return m}for(const v of a){const m=v.value&&v.value[oe];if(!m)continue;const h=m.slice();for(;h.length;){const g=h.shift(),k=re(g.value,l);if(k)return k;const V=g.value&&g.value[oe];V&&h.push(...V)}}}}})}const gt=["color","file","time","date","datetime-local","week","month"],yt=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...ot(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:ze},inheritAttrs:!1,props:yt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const l=He(e,"modelValue"),{isFocused:r,focus:c,blur:v}=be(e),m=w(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),h=w(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),g=w(()=>["plain","underlined"].includes(e.variant));function k(d,P){var p,R;!e.autofocus||!d||(R=(p=P[0].target)==null?void 0:p.focus)==null||R.call(p)}const V=T(),F=T(),y=T(),C=w(()=>gt.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function s(){var d;y.value!==document.activeElement&&((d=y.value)==null||d.focus()),r.value||c()}function u(d){i("mousedown:control",d),d.target!==y.value&&(s(),d.preventDefault())}function W(d){s(),i("click:control",d)}function I(d){d.stopPropagation(),s(),de(()=>{l.value=null,Je(e["onClick:clear"],d)})}function H(d){var p;const P=d.target;if(l.value=P.value,(p=e.modelModifiers)!=null&&p.trim&&["text","search","password","tel","url"].includes(e.type)){const R=[P.selectionStart,P.selectionEnd];de(()=>{P.selectionStart=R[0],P.selectionEnd=R[1]})}}return ee(()=>{const d=!!(t.counter||e.counter!==!1&&e.counter!=null),P=!!(d||t.details),[p,R]=Xe(a),{modelValue:te,...M}=he.filterProps(e),ne=mt(e);return n(he,G({ref:V,modelValue:l.value,"onUpdate:modelValue":D=>l.value=D,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":g.value},e.class],style:e.style},p,M,{centerAffix:!g.value,focused:r.value}),{...t,default:D=>{let{id:b,isDisabled:x,isDirty:S,isReadonly:B,isValid:_}=D;return n(Ce,G({ref:F,onMousedown:u,onClick:W,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},ne,{id:b.value,active:C.value||S.value,dirty:S.value||e.dirty,disabled:x.value,focused:r.value,error:_.value===!1}),{...t,default:q=>{let{props:{class:N,...U}}=q;const K=z(n("input",G({ref:y,value:l.value,onInput:H,autofocus:e.autofocus,readonly:B.value,disabled:x.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:v},U,R),null),[[Ye("intersect"),{handler:k},null,{once:!0}]]);return n(A,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?n("div",{class:N,"data-no-activator":""},[t.default(),K]):Ge(K,{class:N}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:P?D=>{var b;return n(A,null,[(b=t.details)==null?void 0:b.call(t,D),d&&n(A,null,[n("span",null,null),n(ct,{active:e.persistentCounter||r.value,value:m.value,max:h.value,disabled:e.disabled},t.counter)])])}:void 0})}),ht({},V,F,y)}}),bt={key:0},xt={key:0},wt={__name:"ListView",setup(e){const o=tt(),{items:a,finishedItems:i}=Qe(o),{addItem:t,editItem:l,delItem:r,cancelEditItem:c,confirmEditItem:v,delFinishedItem:m}=o,h=T(""),g=T(null),k=T([]),V=async()=>{const C=await g.value.validate();console.log(C),!(C.length>0)&&(t(h.value),g.value.reset())},F=async(C,s)=>{(await k.value[s].validate()).length>0||v(C)},y={required:C=>!!C||"欄位必填",length:C=>C.length>=3||"必須三個字以上"};return(C,s)=>($(),Ze(et,null,{default:L(()=>[n(nt,null,{default:L(()=>[n(X,{cols:"12"},{default:L(()=>s[1]||(s[1]=[f("h1",{class:"text-center"},"事項",-1)])),_:1}),n(X,{cols:"12"},{default:L(()=>[n(ye,{ref_key:"newItemInput",ref:g,modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=u=>h.value=u),clearable:"",variant:"solo-filled",label:"新增事項",rules:[y.required,y.length],"append-icon":"mdi-plus","onClick:append":V,onKeydown:ce(V,["enter"])},null,8,["modelValue","rules"]),n(ge,null,{default:L(()=>[s[3]||(s[3]=f("thead",null,[f("tr",null,[f("th",null,"名稱"),f("th",null,"操作")])],-1)),f("tbody",null,[($(!0),E(A,null,fe(O(a),(u,W)=>($(),E("tr",{key:u.id},[f("td",null,[z(f("span",null,me(u.name),513),[[J,!u.edit]]),z(n(ye,{ref_for:!0,ref_key:"editItemInput",ref:k,modelValue:u.model,"onUpdate:modelValue":I=>u.model=I,rules:[y.required,y.length],autofocus:"",onKeydown:ce(F,["enter"])},null,8,["modelValue","onUpdate:modelValue","rules"]),[[J,u.edit]])]),f("td",null,[u.edit?($(),E(A,{key:1},[n(j,{icon:"mdi-check",variant:"text",color:"green",onClick:I=>F(u.id,W)},null,8,["onClick"]),n(j,{icon:"mdi-undo",variant:"text",color:"red",onClick:I=>O(c)(u.id)},null,8,["onClick"])],64)):($(),E(A,{key:0},[n(j,{icon:"mdi-pencil",variant:"text",color:"green",onClick:I=>O(l)(u.id)},null,8,["onClick"]),n(j,{icon:"mdi-delete",variant:"text",color:"red",onClick:I=>O(r)(u.id)},null,8,["onClick"])],64))])]))),128)),O(a).length===0?($(),E("tr",bt,s[2]||(s[2]=[f("td",{colspan:"2"},"沒有事項",-1)]))):ve("",!0)])]),_:1})]),_:1}),n(X,{cols:"12"},{default:L(()=>s[4]||(s[4]=[f("h1",{class:"text-center"},"已完成事項",-1)])),_:1}),n(X,{cols:"12"},{default:L(()=>[n(ge,null,{default:L(()=>[s[6]||(s[6]=f("thead",null,[f("tr",null,[f("th",null,"名稱"),f("th",null,"操作")])],-1)),f("tbody",null,[($(!0),E(A,null,fe(O(i),u=>($(),E("tr",{key:u.id},[f("td",null,me(u.name),1),f("td",null,[n(j,{icon:"mdi-delete",variant:"text",color:"red",onClick:W=>O(m)(u.id)},null,8,["onClick"])])]))),128)),O(i).length===0?($(),E("tr",xt,s[5]||(s[5]=[f("td",{colspan:"2"},"沒有已完成事項",-1)]))):ve("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{wt as default};
