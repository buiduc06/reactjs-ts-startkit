(self.webpackChunkreactjs_startkit=self.webpackChunkreactjs_startkit||[]).push([[619],{8212:function(ae,M,r){"use strict";r.d(M,{Z:function(){return y}});var d=r(28991),e=r(67294),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},w=h,v=r(27029),c=function(H,G){return e.createElement(v.Z,(0,d.Z)((0,d.Z)({},H),{},{ref:G,icon:w}))};c.displayName="EditOutlined";var y=e.forwardRef(c)},70347:function(){},47828:function(){},91894:function(ae,M,r){"use strict";r.d(M,{Z:function(){return Xe}});var d=r(96156),e=r(22122),h=r(94184),w=r.n(h),v=r(98423),c=r(67294),y=r(53124),N=r(97647),H=r(33860),G=r(51752),de=function(i,g){var C={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(C[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,u=Object.getOwnPropertySymbols(i);p<u.length;p++)g.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(i,u[p])&&(C[u[p]]=i[u[p]]);return C},q=function(g){var C=g.prefixCls,u=g.className,p=g.hoverable,me=p===void 0?!0:p,ye=de(g,["prefixCls","className","hoverable"]);return c.createElement(y.C,null,function(ne){var ge=ne.getPrefixCls,Ee=ge("card",C),Q=w()("".concat(Ee,"-grid"),u,(0,d.Z)({},"".concat(Ee,"-grid-hoverable"),me));return c.createElement("div",(0,e.Z)({},ye,{className:Q}))})},x=q,fe=function(i,g){var C={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(C[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,u=Object.getOwnPropertySymbols(i);p<u.length;p++)g.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(i,u[p])&&(C[u[p]]=i[u[p]]);return C};function ve(i){var g=i.map(function(C,u){return c.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(u)},c.createElement("span",null,C))});return g}var W=c.forwardRef(function(i,g){var C,u,p=c.useContext(y.E_),me=p.getPrefixCls,ye=p.direction,ne=c.useContext(N.Z),ge=function(Ae){var oe;(oe=i.onTabChange)===null||oe===void 0||oe.call(i,Ae)},Ee=function(){var Ae;return c.Children.forEach(i.children,function(oe){oe&&oe.type&&oe.type===x&&(Ae=!0)}),Ae},Q=i.prefixCls,ze=i.className,re=i.extra,Ze=i.headStyle,Le=Ze===void 0?{}:Ze,Ne=i.bodyStyle,ut=Ne===void 0?{}:Ne,Ue=i.title,We=i.loading,ke=i.bordered,dt=ke===void 0?!0:ke,Ye=i.size,_e=i.type,Pe=i.cover,De=i.actions,le=i.tabList,He=i.children,qe=i.activeTabKey,ft=i.defaultActiveTabKey,vt=i.tabBarExtraContent,pt=i.hoverable,et=i.tabProps,mt=et===void 0?{}:et,we=fe(i,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),P=me("card",Q),yt=c.createElement(H.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},He),tt=qe!==void 0,Ie=(0,e.Z)((0,e.Z)({},mt),(C={},(0,d.Z)(C,tt?"activeKey":"defaultActiveKey",tt?qe:ft),(0,d.Z)(C,"tabBarExtraContent",vt),C)),at,nt=le&&le.length?c.createElement(G.Z,(0,e.Z)({size:"large"},Ie,{className:"".concat(P,"-head-tabs"),onChange:ge}),le.map(function(Re){return c.createElement(G.Z.TabPane,{tab:Re.tab,disabled:Re.disabled,key:Re.key})})):null;(Ue||re||nt)&&(at=c.createElement("div",{className:"".concat(P,"-head"),style:Le},c.createElement("div",{className:"".concat(P,"-head-wrapper")},Ue&&c.createElement("div",{className:"".concat(P,"-head-title")},Ue),re&&c.createElement("div",{className:"".concat(P,"-extra")},re)),nt));var gt=Pe?c.createElement("div",{className:"".concat(P,"-cover")},Pe):null,Et=c.createElement("div",{className:"".concat(P,"-body"),style:ut},We?yt:He),Ct=De&&De.length?c.createElement("ul",{className:"".concat(P,"-actions")},ve(De)):null,ht=(0,v.Z)(we,["onTabChange"]),rt=Ye||ne,bt=w()(P,(u={},(0,d.Z)(u,"".concat(P,"-loading"),We),(0,d.Z)(u,"".concat(P,"-bordered"),dt),(0,d.Z)(u,"".concat(P,"-hoverable"),pt),(0,d.Z)(u,"".concat(P,"-contain-grid"),Ee()),(0,d.Z)(u,"".concat(P,"-contain-tabs"),le&&le.length),(0,d.Z)(u,"".concat(P,"-").concat(rt),rt),(0,d.Z)(u,"".concat(P,"-type-").concat(_e),!!_e),(0,d.Z)(u,"".concat(P,"-rtl"),ye==="rtl"),u),ze);return c.createElement("div",(0,e.Z)({ref:g},ht,{className:bt}),at,gt,Et,Ct)}),pe=W,Ve=function(i,g){var C={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(C[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,u=Object.getOwnPropertySymbols(i);p<u.length;p++)g.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(i,u[p])&&(C[u[p]]=i[u[p]]);return C},Qe=function(g){return c.createElement(y.C,null,function(C){var u=C.getPrefixCls,p=g.prefixCls,me=g.className,ye=g.avatar,ne=g.title,ge=g.description,Ee=Ve(g,["prefixCls","className","avatar","title","description"]),Q=u("card",p),ze=w()("".concat(Q,"-meta"),me),re=ye?c.createElement("div",{className:"".concat(Q,"-meta-avatar")},ye):null,Ze=ne?c.createElement("div",{className:"".concat(Q,"-meta-title")},ne):null,Le=ge?c.createElement("div",{className:"".concat(Q,"-meta-description")},ge):null,Ne=Ze||Le?c.createElement("div",{className:"".concat(Q,"-meta-detail")},Ze,Le):null;return c.createElement("div",(0,e.Z)({},Ee,{className:ze}),re,Ne)})},st=Qe,Se=pe;Se.Grid=x,Se.Meta=st;var Xe=Se},58024:function(ae,M,r){"use strict";var d=r(38663),e=r.n(d),h=r(70347),w=r.n(h),v=r(71748),c=r(18106)},97272:function(ae,M,r){"use strict";r.d(M,{Z:function(){return Ht}});var d=r(22122),e=r(67294),h=r(96156),w=r(90484),v=r(28481),c=r(79508),y=r(99165),N=r(8212),H=r(94184),G=r.n(H),de=r(20640),q=r.n(de),x=r(48717),fe=r(50344),ve=r(8410),W=r(21770),pe=r(98423),Ve=r(42550),Qe=r(53124),st=r(42051),Se=r(61580),Xe=r(79370),i=r(34952),g=r(28991),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},u=C,p=r(27029),me=function(n,l){return e.createElement(p.Z,(0,g.Z)((0,g.Z)({},n),{},{ref:l,icon:u}))};me.displayName="EnterOutlined";var ye=e.forwardRef(me),ne=r(15105),ge=r(94418),Ee=r(96159),Q=function(n){var l=n.prefixCls,a=n["aria-label"],o=n.className,E=n.style,O=n.direction,b=n.maxLength,j=n.autoSize,$=j===void 0?!0:j,D=n.value,F=n.onSave,J=n.onCancel,ee=n.onEnd,L=n.component,X=n.enterIcon,V=X===void 0?e.createElement(ye,null):X,R=e.useRef(),B=e.useRef(!1),te=e.useRef(),I=e.useState(D),Te=(0,v.Z)(I,2),ie=Te[0],Me=Te[1];e.useEffect(function(){Me(D)},[D]),e.useEffect(function(){if(R.current&&R.current.resizableTextArea){var Z=R.current.resizableTextArea.textArea;Z.focus();var T=Z.value.length;Z.setSelectionRange(T,T)}},[]);var Ce=function(T){var K=T.target;Me(K.value.replace(/[\n\r]/g,""))},S=function(){B.current=!0},Y=function(){B.current=!1},_=function(T){var K=T.keyCode;B.current||(te.current=K)},he=function(){F(ie.trim())},Ke=function(T){var K=T.keyCode,Fe=T.ctrlKey,$e=T.altKey,ce=T.metaKey,z=T.shiftKey;te.current===K&&!B.current&&!Fe&&!$e&&!ce&&!z&&(K===ne.Z.ENTER?(he(),ee==null||ee()):K===ne.Z.ESC&&J())},be=function(){he()},je=L?"".concat(l,"-").concat(L):"",A=G()(l,"".concat(l,"-edit-content"),(0,h.Z)({},"".concat(l,"-rtl"),O==="rtl"),o,je);return e.createElement("div",{className:A,style:E},e.createElement(ge.Z,{ref:R,maxLength:b,value:ie,onChange:Ce,onKeyDown:_,onKeyUp:Ke,onCompositionStart:S,onCompositionEnd:Y,onBlur:be,"aria-label":a,rows:1,autoSize:$}),V!==null?(0,Ee.Tm)(V,{className:"".concat(l,"-edit-content-confirm")}):null)},ze=Q;function re(t,n){return e.useMemo(function(){var l=!!t;return[l,(0,d.Z)((0,d.Z)({},n),l&&(0,w.Z)(t)==="object"?t:null)]},[t])}var Ze=function(t,n){var l=e.useRef(!1);e.useEffect(function(){l.current?t():l.current=!0},n)},Le=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},Ne=function(n,l){var a=n.prefixCls,o=n.component,E=o===void 0?"article":o,O=n.className,b=n["aria-label"],j=n.setContentRef,$=n.children,D=Le(n,["prefixCls","component","className","aria-label","setContentRef","children"]),F=e.useContext(Qe.E_),J=F.getPrefixCls,ee=F.direction,L=l;j&&(L=(0,Ve.sQ)(l,j));var X=E,V=J("typography",a),R=G()(V,(0,h.Z)({},"".concat(V,"-rtl"),ee==="rtl"),O);return e.createElement(X,(0,d.Z)({className:R,"aria-label":b,ref:L},D),$)},ut=e.forwardRef(Ne),Ue=ut,We=Ue;function ke(t){var n=(0,w.Z)(t);return n==="string"||n==="number"}function dt(t){var n=0;return t.forEach(function(l){ke(l)?n+=String(l).length:n+=1}),n}function Ye(t,n){for(var l=0,a=[],o=0;o<t.length;o+=1){if(l===n)return a;var E=t[o],O=ke(E),b=O?String(E).length:1,j=l+b;if(j>n){var $=n-l;return a.push(String(E).slice(0,$)),a}a.push(E),l=j}return t}var _e=0,Pe=1,De=2,le=3,He=4,qe=function(n){var l=n.enabledMeasure,a=n.children,o=n.text,E=n.width,O=n.rows,b=n.onEllipsis,j=e.useState([0,0,0]),$=(0,v.Z)(j,2),D=$[0],F=$[1],J=e.useState(_e),ee=(0,v.Z)(J,2),L=ee[0],X=ee[1],V=(0,v.Z)(D,3),R=V[0],B=V[1],te=V[2],I=e.useState(0),Te=(0,v.Z)(I,2),ie=Te[0],Me=Te[1],Ce=e.useRef(null),S=e.useRef(null),Y=e.useMemo(function(){return(0,fe.Z)(o)},[o]),_=e.useMemo(function(){return dt(Y)},[Y]),he=e.useMemo(function(){return!l||L!==le?a(Y,!1):a(Ye(Y,B),B<_)},[l,L,a,Y,B,_]);(0,ve.Z)(function(){l&&E&&_&&(X(Pe),F([0,Math.ceil(_/2),_]))},[l,E,o,_,O]),(0,ve.Z)(function(){var A;L===Pe&&Me(((A=Ce.current)===null||A===void 0?void 0:A.offsetHeight)||0)},[L]),(0,ve.Z)(function(){var A,Z;if(ie){if(L===Pe){var T=((A=S.current)===null||A===void 0?void 0:A.offsetHeight)||0,K=O*ie;T<=K?(X(He),b(!1)):X(De)}else if(L===De)if(R!==te){var Fe=((Z=S.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,$e=O*ie,ce=R,z=te;R===te-1?z=R:Fe<=$e?ce=B:z=B;var xt=Math.ceil((ce+z)/2);F([ce,xt,z])}else X(le),b(!0)}},[L,R,te,O,ie]);var Ke={width:E,whiteSpace:"normal",margin:0,padding:0},be=function(Z,T,K){return e.createElement("span",{"aria-hidden":!0,ref:T,style:(0,d.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},K)},Z)},je=function(Z,T){var K=Ye(Y,Z);return be(a(K,!0),T,Ke)};return e.createElement(e.Fragment,null,he,l&&L!==le&&L!==He&&e.createElement(e.Fragment,null,be("lg",Ce,{wordBreak:"keep-all",whiteSpace:"nowrap"}),L===Pe?be(a(Y,!1),S,Ke):je(B,S)))},ft=qe,vt=function(n){var l=n.title,a=n.enabledEllipsis,o=n.isEllipsis,E=n.children;return!l||!a?E:e.createElement(Se.Z,{title:l,visible:o?void 0:!1},E)},pt=vt,et=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l};function mt(t,n){var l=t.mark,a=t.code,o=t.underline,E=t.delete,O=t.strong,b=t.keyboard,j=t.italic,$=n;function D(F,J){!F||($=e.createElement(J,{},$))}return D(O,"strong"),D(o,"u"),D(E,"del"),D(a,"code"),D(l,"mark"),D(b,"kbd"),D(j,"i"),$}function we(t,n,l){return t===!0||t===void 0?n:t||l&&n}function P(t){return Array.isArray(t)?t:[t]}var yt="...",tt=e.forwardRef(function(t,n){var l=t.prefixCls,a=t.className,o=t.style,E=t.type,O=t.disabled,b=t.children,j=t.ellipsis,$=t.editable,D=t.copyable,F=t.component,J=t.title,ee=et(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),L=e.useContext(Qe.E_),X=L.getPrefixCls,V=L.direction,R=(0,st.E)("Text")[0],B=e.useRef(null),te=e.useRef(null),I=X("typography",l),Te=(0,pe.Z)(ee,["mark","code","delete","underline","strong","keyboard","italic"]),ie=re($),Me=(0,v.Z)(ie,2),Ce=Me[0],S=Me[1],Y=(0,W.Z)(!1,{value:S.editing}),_=(0,v.Z)(Y,2),he=_[0],Ke=_[1],be=S.triggerType,je=be===void 0?["icon"]:be,A=function(s){var f;s&&((f=S.onStart)===null||f===void 0||f.call(S)),Ke(s)};Ze(function(){var m;he||(m=te.current)===null||m===void 0||m.focus()},[he]);var Z=function(s){s==null||s.preventDefault(),A(!0)},T=function(s){var f;(f=S.onChange)===null||f===void 0||f.call(S,s),A(!1)},K=function(){var s;(s=S.onCancel)===null||s===void 0||s.call(S),A(!1)},Fe=re(D),$e=(0,v.Z)(Fe,2),ce=$e[0],z=$e[1],xt=e.useState(!1),Ot=(0,v.Z)(xt,2),lt=Ot[0],St=Ot[1],Zt=e.useRef(),Pt={};z.format&&(Pt.format=z.format);var Rt=function(){clearTimeout(Zt.current)},Gt=function(s){var f;s==null||s.preventDefault(),s==null||s.stopPropagation(),q()(z.text||String(b)||"",Pt),St(!0),Rt(),Zt.current=setTimeout(function(){St(!1)},3e3),(f=z.onCopy)===null||f===void 0||f.call(z,s)};e.useEffect(function(){return Rt},[]);var Ft=e.useState(!1),Tt=(0,v.Z)(Ft,2),Mt=Tt[0],Jt=Tt[1],Vt=e.useState(!1),Lt=(0,v.Z)(Vt,2),Nt=Lt[0],Qt=Lt[1],Xt=e.useState(!1),Dt=(0,v.Z)(Xt,2),Yt=Dt[0],_t=Dt[1],qt=e.useState(!1),wt=(0,v.Z)(qt,2),It=wt[0],ea=wt[1],ta=e.useState(!1),At=(0,v.Z)(ta,2),Kt=At[0],aa=At[1],na=re(j,{expandable:!1}),jt=(0,v.Z)(na,2),xe=jt[0],U=jt[1],se=xe&&!Yt,$t=U.rows,Be=$t===void 0?1:$t,ot=e.useMemo(function(){return!se||U.suffix!==void 0||U.onEllipsis||U.expandable||Ce||ce},[se,U,Ce,ce]);(0,ve.Z)(function(){xe&&!ot&&(Jt((0,Xe.G)("webkitLineClamp")),Qt((0,Xe.G)("textOverflow")))},[ot,xe]);var ue=e.useMemo(function(){return ot?!1:Be===1?Nt:Mt},[ot,Nt,Mt]),Bt=se&&(ue?Kt:It),ra=se&&Be===1&&ue,it=se&&Be>1&&ue,la=function(s){var f;_t(!0),(f=U.onExpand)===null||f===void 0||f.call(U,s)},oa=e.useState(0),zt=(0,v.Z)(oa,2),ia=zt[0],ca=zt[1],sa=function(s){var f=s.offsetWidth;ca(f)},ua=function(s){var f;ea(s),It!==s&&((f=U.onEllipsis)===null||f===void 0||f.call(U,s))};e.useEffect(function(){var m=B.current;if(xe&&ue&&m){var s=it?m.offsetHeight<m.scrollHeight:m.offsetWidth<m.scrollWidth;Kt!==s&&aa(s)}},[xe,ue,b,it]);var ct=U.tooltip===!0?b:U.tooltip,Ut=e.useMemo(function(){var m=function(f){return["string","number"].includes((0,w.Z)(f))};if(!(!xe||ue)){if(m(b))return b;if(m(J))return J;if(m(ct))return ct}},[xe,ue,J,ct,Bt]);if(he)return e.createElement(ze,{value:typeof b=="string"?b:"",onSave:T,onCancel:K,onEnd:S.onEnd,prefixCls:I,className:a,style:o,direction:V,component:F,maxLength:S.maxLength,autoSize:S.autoSize,enterIcon:S.enterIcon});var da=function(){var s=U.expandable,f=U.symbol;if(!s)return null;var k;return f?k=f:k=R.expand,e.createElement("a",{key:"expand",className:"".concat(I,"-expand"),onClick:la,"aria-label":R.expand},k)},fa=function(){if(!!Ce){var s=S.icon,f=S.tooltip,k=(0,fe.Z)(f)[0]||R.edit,Oe=typeof k=="string"?k:"";return je.includes("icon")?e.createElement(Se.Z,{key:"edit",title:f===!1?"":k},e.createElement(i.Z,{ref:te,className:"".concat(I,"-edit"),onClick:Z,"aria-label":Oe},s||e.createElement(N.Z,{role:"button"}))):null}},va=function(){if(!!ce){var s=z.tooltips,f=z.icon,k=P(s),Oe=P(f),Je=lt?we(k[1],R.copied):we(k[0],R.copy),ya=lt?R.copied:R.copy,ga=typeof Je=="string"?Je:ya;return e.createElement(Se.Z,{key:"copy",title:Je},e.createElement(i.Z,{className:G()("".concat(I,"-copy"),lt&&"".concat(I,"-copy-success")),onClick:Gt,"aria-label":ga},lt?we(Oe[1],e.createElement(c.Z,null),!0):we(Oe[0],e.createElement(y.Z,null),!0)))}},pa=function(s){return[s&&da(),fa(),va()]},ma=function(s){return[s&&e.createElement("span",{"aria-hidden":!0,key:"ellipsis"},yt),U.suffix,pa(s)]};return e.createElement(x.Z,{onResize:sa,disabled:!se||ue},function(m){var s;return e.createElement(pt,{title:ct,enabledEllipsis:se,isEllipsis:Bt},e.createElement(We,(0,d.Z)({className:G()((s={},(0,h.Z)(s,"".concat(I,"-").concat(E),E),(0,h.Z)(s,"".concat(I,"-disabled"),O),(0,h.Z)(s,"".concat(I,"-ellipsis"),xe),(0,h.Z)(s,"".concat(I,"-single-line"),se&&Be===1),(0,h.Z)(s,"".concat(I,"-ellipsis-single-line"),ra),(0,h.Z)(s,"".concat(I,"-ellipsis-multiple-line"),it),s),a),style:(0,d.Z)((0,d.Z)({},o),{WebkitLineClamp:it?Be:void 0}),component:F,ref:(0,Ve.sQ)(m,B,n),direction:V,onClick:je.includes("text")?Z:null,"aria-label":Ut,title:J},Te),e.createElement(ft,{enabledMeasure:se&&!ue,text:b,rows:Be,width:ia,onEllipsis:ua},function(f,k){var Oe=f;f.length&&k&&Ut&&(Oe=e.createElement("span",{key:"show-content","aria-hidden":!0},Oe));var Je=mt(t,e.createElement(e.Fragment,null,Oe,ma(k)));return Je})))})}),Ie=tt,at=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},nt=function(n,l){var a=n.ellipsis,o=n.rel,E=at(n,["ellipsis","rel"]),O=e.useRef(null);e.useImperativeHandle(l,function(){return O.current});var b=(0,d.Z)((0,d.Z)({},E),{rel:o===void 0&&E.target==="_blank"?"noopener noreferrer":o});return delete b.navigate,e.createElement(Ie,(0,d.Z)({},b,{ref:O,ellipsis:!!a,component:"a"}))},gt=e.forwardRef(nt),Et=function(n,l){return e.createElement(Ie,(0,d.Z)({ref:l},n,{component:"div"}))},Ct=e.forwardRef(Et),ht=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},rt=function(n,l){var a=n.ellipsis,o=ht(n,["ellipsis"]),E=e.useMemo(function(){return a&&(0,w.Z)(a)==="object"?(0,pe.Z)(a,["expandable","rows"]):a},[a]);return e.createElement(Ie,(0,d.Z)({ref:l},o,{ellipsis:E,component:"span"}))},bt=e.forwardRef(rt),Re=r(93355),Ae=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},oe=(0,Re.a)(1,2,3,4,5),Wt=function(n,l){var a=n.level,o=a===void 0?1:a,E=Ae(n,["level"]),O;return oe.indexOf(o)!==-1?O="h".concat(o):O="h1",e.createElement(Ie,(0,d.Z)({ref:l},E,{component:O}))},kt=e.forwardRef(Wt),Ge=We;Ge.Text=bt,Ge.Link=gt,Ge.Title=kt,Ge.Paragraph=Ct;var Ht=Ge},402:function(ae,M,r){"use strict";var d=r(38663),e=r.n(d),h=r(47828),w=r.n(h),v=r(47673),c=r(22385)},20640:function(ae,M,r){"use strict";var d=r(11742),e={"text/plain":"Text","text/html":"Url",default:"Text"},h="Copy to clipboard: #{key}, Enter";function w(c){var y=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return c.replace(/#{\s*key\s*}/g,y)}function v(c,y){var N,H,G,de,q,x,fe=!1;y||(y={}),N=y.debug||!1;try{G=d(),de=document.createRange(),q=document.getSelection(),x=document.createElement("span"),x.textContent=c,x.style.all="unset",x.style.position="fixed",x.style.top=0,x.style.clip="rect(0, 0, 0, 0)",x.style.whiteSpace="pre",x.style.webkitUserSelect="text",x.style.MozUserSelect="text",x.style.msUserSelect="text",x.style.userSelect="text",x.addEventListener("copy",function(W){if(W.stopPropagation(),y.format)if(W.preventDefault(),typeof W.clipboardData=="undefined"){N&&console.warn("unable to use e.clipboardData"),N&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var pe=e[y.format]||e.default;window.clipboardData.setData(pe,c)}else W.clipboardData.clearData(),W.clipboardData.setData(y.format,c);y.onCopy&&(W.preventDefault(),y.onCopy(W.clipboardData))}),document.body.appendChild(x),de.selectNodeContents(x),q.addRange(de);var ve=document.execCommand("copy");if(!ve)throw new Error("copy command was unsuccessful");fe=!0}catch(W){N&&console.error("unable to copy using execCommand: ",W),N&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(y.format||"text",c),y.onCopy&&y.onCopy(window.clipboardData),fe=!0}catch(pe){N&&console.error("unable to copy using clipboardData: ",pe),N&&console.error("falling back to prompt"),H=w("message"in y?y.message:h),window.prompt(H,c)}}finally{q&&(typeof q.removeRange=="function"?q.removeRange(de):q.removeAllRanges()),x&&document.body.removeChild(x),G()}return fe}ae.exports=v},79370:function(ae,M,r){"use strict";r.d(M,{G:function(){return w}});var d=r(98924),e=function(c){if((0,d.Z)()&&window.document.documentElement){var y=Array.isArray(c)?c:[c],N=window.document.documentElement;return y.some(function(H){return H in N.style})}return!1},h=function(c,y){if(!e(c))return!1;var N=document.createElement("div"),H=N.style[c];return N.style[c]=y,N.style[c]!==H};function w(v,c){return!Array.isArray(v)&&c!==void 0?h(v,c):e(v)}},11742:function(ae){ae.exports=function(){var M=document.getSelection();if(!M.rangeCount)return function(){};for(var r=document.activeElement,d=[],e=0;e<M.rangeCount;e++)d.push(M.getRangeAt(e));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return M.removeAllRanges(),function(){M.type==="Caret"&&M.removeAllRanges(),M.rangeCount||d.forEach(function(h){M.addRange(h)}),r&&r.focus()}}}}]);
