(this["webpackJsonpgenshin-tracker"]=this["webpackJsonpgenshin-tracker"]||[]).push([[3],{206:function(e,t,a){"use strict";var n=a(26),r=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),i=(0,n(a(28)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var n=a(30),r=a(18),o=a(79),i=a(0),s=a.n(i),l=a(174),c=a(176),u=a(170),d=a(3),m=Object(u.a)((function(e){return{dmText:{color:"white"}}}));function h(e){var t=m();return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{item:!0,style:{display:"inline-flex"},children:[Object(d.jsx)(c.a,{square:"true",component:"img",image:e.url+"/Items/"+e.item+".png",title:e.item,style:{display:"inline-flex",height:"50px",width:"50px"}}),Object(d.jsx)("h4",{className:e.isDarkMode?t.dmText:"",style:{display:"inline-flex",margin:"12px 0px"},children:e.item})]})})}var p=a(177),b=a(178),v=a(202),j=a(77),x=a.n(j),f=a(78),g=a.n(f),O=a(206),S=a.n(O),y=a(179),w=a(180),k=a(120),D=a(201),M=a(196),C=a(1),E=a(24),N=a(4),I=a(5),T=(a(8),a(205)),P=a(7),L=a(20),B=a(21),H=a(17),A=a(11),J=i.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.collapsedHeight,s=void 0===o?"0px":o,l=e.component,c=void 0===l?"div":l,u=e.disableStrictModeCompat,d=void 0!==u&&u,m=e.in,h=e.onEnter,p=e.onEntered,b=e.onEntering,v=e.onExit,j=e.onExited,x=e.onExiting,f=e.style,g=e.timeout,O=void 0===g?L.b.standard:g,S=e.TransitionComponent,y=void 0===S?T.a:S,w=Object(N.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=Object(H.a)(),D=i.useRef(),M=i.useRef(null),P=i.useRef(),J="number"===typeof s?"".concat(s,"px"):s;i.useEffect((function(){return function(){clearTimeout(D.current)}}),[]);var R=k.unstable_strictMode&&!d,V=i.useRef(null),_=Object(A.a)(t,R?V:void 0),q=function(e){return function(t,a){if(e){var n=R?[V.current,t]:[t,a],r=Object(E.a)(n,2),o=r[0],i=r[1];void 0===i?e(o):e(o,i)}}},z=q((function(e,t){e.style.height=J,h&&h(e,t)})),F=q((function(e,t){var a=M.current?M.current.clientHeight:0,n=Object(B.a)({style:f,timeout:O},{mode:"enter"}).duration;if("auto"===O){var r=k.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),P.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),b&&b(e,t)})),G=q((function(e,t){e.style.height="auto",p&&p(e,t)})),K=q((function(e){var t=M.current?M.current.clientHeight:0;e.style.height="".concat(t,"px"),v&&v(e)})),Q=q(j),U=q((function(e){var t=M.current?M.current.clientHeight:0,a=Object(B.a)({style:f,timeout:O},{mode:"exit"}).duration;if("auto"===O){var n=k.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),P.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=J,x&&x(e)}));return i.createElement(y,Object(C.a)({in:m,onEnter:z,onEntered:G,onEntering:F,onExit:K,onExited:Q,onExiting:U,addEndListener:function(e,t){var a=R?e:t;"auto"===O&&(D.current=setTimeout(a,P.current||0))},nodeRef:R?V:void 0,timeout:"auto"===O?null:O},w),(function(e,t){return i.createElement(c,Object(C.a)({className:Object(I.a)(n.container,r,{entered:n.entered,exited:!m&&"0px"===J&&n.hidden}[e]),style:Object(C.a)({minHeight:J},f),ref:_},t),i.createElement("div",{className:n.wrapper,ref:M},i.createElement("div",{className:n.wrapperInner},a)))}))}));J.muiSupportAuto=!0;var R=Object(P.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(J),V=a(93),_=a(6),q=["expand"],z=Object(u.a)((function(e){return{cardContent:{flexGrow:1},media:{height:"100px",width:"100px","&:hover":{cursor:"pointer"}},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},talent:{width:"100px"},grid:{justifyContent:"center"},dmText:{color:"white"},card:{backgroundColor:"#f5f5f5"},dmCard:{backgroundColor:"#777777"},dmStar:{color:"white"},dmDisabled:{color:"#cfcfcf"}}})),F=Object(V.a)((function(e){e.expand;var t=Object(o.a)(e,q);return Object(d.jsx)(k.a,Object(r.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function G(e){var t=z(),a=JSON.parse(localStorage.getItem(e.chara.name)),o=null==a||null==a.ascension?0:a.ascension,u=null==a||null==a.talent1?1:a.talent1,m=null==a||null==a.talent1?1:a.talent2,j=null==a||null==a.talent1?1:a.talent3,f=o>0;e.chara.owned=a&&a.owned?a.owned:f,e.chara.talent1=u,e.chara.talent2=m,e.chara.talent3=j;var O=Object(i.useState)({level:o,prevLevel:0}),C=Object(n.a)(O,2),E=C[0],N=C[1],I=Object(i.useState)(e.chara.owned),T=Object(n.a)(I,2),P=T[0],L=T[1],B=Object(i.useState)({talent1:u,talent2:m,talent3:j}),H=Object(n.a)(B,2),A=H[0],J=H[1],V=s.a.useState(!1),q=Object(n.a)(V,2),G=q[0],K=q[1],Q=s.a.useState(!1),U=Object(n.a)(Q,2),W=U[0],X=U[1],Y=e.url+"/Icons/"+e.chara.element+".png",Z=e.url+"/Icons/"+e.chara.element+"-b.png",$={pyro:"#f85d5d",cryo:"#6ddef3",geo:"#f3bd6d",hydro:"#6d92f3",electro:"#ad6df3",anemo:"#6df3bd",dendro:"#77f36d",element:"#f5f5f5"},ee={dmpyro:"#801717",dmcryo:"#177380",dmgeo:"#804e17",dmhydro:"#172c80",dmelectro:"#491780",dmanemo:"#178067",dmdendro:"#17801b",dmelement:"#777777"},te=function(t){t!=E.prevLevel&&(e.chara.properties.ascension.twoStar.value=_.b.ascension.asc.twoStar.value[t],e.chara.properties.ascension.threeStar.value=_.b.ascension.asc.threeStar.value[t],e.chara.properties.ascension.fourStar.value=_.b.ascension.asc.fourStar.value[t],e.chara.properties.ascension.fiveStar.value=_.b.ascension.asc.fiveStar.value[t],e.chara.properties.common.oneStar.value=_.b.ascension.common.oneStar.value[t],e.chara.properties.common.twoStar.value=_.b.ascension.common.twoStar.value[t],e.chara.properties.common.threeStar.value=_.b.ascension.common.threeStar.value[t],e.chara.properties.boss.value=_.b.ascension.boss.value[t],e.chara.properties.region.value=_.b.ascension.region.value[t])},ae=function(t){var a=t.target.id.substring(e.chara.name.length),n=Number(t.target.value);isNaN(n)&&(n=0),"talent1"==a?(ne("tal1",n),J(Object(r.a)(Object(r.a)({},A),{},{talent1:n})),e.chara.talent1=n):"talent2"==a?(ne("tal2",n),J(Object(r.a)(Object(r.a)({},A),{},{talent2:n})),e.chara.talent2=n):"talent3"==a&&(ne("tal3",n),J(Object(r.a)(Object(r.a)({},A),{},{talent3:n})),e.chara.talent3=n),e.chara.ascension=E.level,localStorage.setItem(e.chara.name,JSON.stringify(e.chara))},ne=function(t,a){e.chara.properties.talent.twoStar.value[t]=_.b.talent.book.twoStar.value[a],e.chara.properties.talent.threeStar.value[t]=_.b.talent.book.threeStar.value[a],e.chara.properties.talent.fourStar.value[t]=_.b.talent.book.fourStar.value[a],e.chara.properties.talCommon.oneStar.value[t]=_.b.talent.common.oneStar.value[a],e.chara.properties.talCommon.twoStar.value[t]=_.b.talent.common.twoStar.value[a],e.chara.properties.talCommon.threeStar.value[t]=_.b.talent.common.threeStar.value[a],e.chara.properties.talBoss.value[t]=_.b.talent.boss.value[a],e.chara.properties.crown.value[t]=_.b.talent.crown.value[a]},re=function(t){e.chara.properties.talent.twoStar.value[t]=_.b.talent.book.twoStar.value[1],e.chara.properties.talent.threeStar.value[t]=_.b.talent.book.threeStar.value[1],e.chara.properties.talent.fourStar.value[t]=_.b.talent.book.fourStar.value[1],e.chara.properties.talCommon.oneStar.value[t]=_.b.talent.common.oneStar.value[1],e.chara.properties.talCommon.twoStar.value[t]=_.b.talent.common.twoStar.value[1],e.chara.properties.talCommon.threeStar.value[t]=_.b.talent.common.threeStar.value[1],e.chara.properties.talBoss.value[t]=_.b.talent.boss.value[1],e.chara.properties.crown.value[t]=_.b.talent.crown.value[1],J({talent1:1,talent2:1,talent3:1})},oe=function(t){if(L(!P),e.chara.owned=!P,P){e.chara.properties.ascension.twoStar.value=_.b.ascension.asc.twoStar.value[0],e.chara.properties.ascension.threeStar.value=_.b.ascension.asc.threeStar.value[0],e.chara.properties.ascension.fourStar.value=_.b.ascension.asc.fourStar.value[0],e.chara.properties.ascension.fiveStar.value=_.b.ascension.asc.fiveStar.value[0],e.chara.properties.common.oneStar.value=_.b.ascension.common.oneStar.value[0],e.chara.properties.common.twoStar.value=_.b.ascension.common.twoStar.value[0],e.chara.properties.common.threeStar.value=_.b.ascension.common.threeStar.value[0],e.chara.properties.boss.value=_.b.ascension.boss.value[0],e.chara.properties.region.value=_.b.ascension.region.value[0],N({level:0,prevLevel:E.level}),e.chara.ascension=0;var a=document.getElementById(e.chara.name+"talent1"),n=document.getElementById(e.chara.name+"talent2"),r=document.getElementById(e.chara.name+"talent3");a.value=1,n.value=1,r.value=1,re("tal1"),re("tal2"),re("tal3"),J({talent1:1,talent2:1,talent3:1}),e.chara.talent1=1,e.chara.talent2=1,e.chara.talent3=1,console.log(E,A,e.chara)}localStorage.setItem(e.chara.name,JSON.stringify(e.chara))},ie=function(){return Object(d.jsx)(c.a,{component:"img",style:{height:"30px",width:"30px"},image:Z})},se=function(){return Object(d.jsx)(c.a,{component:"img",style:{height:"30px",width:"30px"},image:Y})};return Object(d.jsx)("div",{children:Object(d.jsxs)(p.a,{className:e.isDarkMode?t.dmCard:t.card,style:e.isDarkMode||P?e.isDarkMode&&P?{backgroundColor:ee["dm"+e.chara.element]}:P?{backgroundColor:$[e.chara.element]}:{backgroundColor:ee.dmelement}:{backgroundColor:$.element},id:e.chara.name,children:[Object(d.jsx)(D.a,{checked:P,id:e.chara.name,onChange:oe,name:"owned",checkedIcon:Object(d.jsx)(se,{}),icon:Object(d.jsx)(ie,{})}),Object(d.jsx)(l.a,{container:!0,className:t.grid,children:Object(d.jsx)(c.a,{onClick:oe,square:"true",component:"img",className:t.media,image:e.url+"/Characters/"+e.chara.name+".png",title:e.chara.name})}),Object(d.jsxs)(b.a,{className:t.cardContent,children:[Object(d.jsx)("h2",{className:e.isDarkMode?t.dmText:"",style:{textTransform:"capitalize"},children:e.chara.name}),Object(d.jsx)(y.a,{component:"fieldset",children:Object(d.jsx)(v.a,{row:!0,name:"ascension",children:[1,2,3,4,5,6].map((function(a){return Object(d.jsx)(w.a,{value:a,control:Object(d.jsx)(k.a,{disabled:!P,style:{height:"20px",width:"20px"},onClick:function(){return function(t){te(t),N({level:t,prevLevel:e.chara.ascension}),e.chara.ascension=t,localStorage.setItem(e.chara.name,JSON.stringify(e.chara))}(a)},children:E.level>=a?Object(d.jsx)(x.a,{className:e.isDarkMode?t.dmStar:""}):Object(d.jsx)(g.a,{className:e.isDarkMode?t.dmStar:""})})},a)}))})}),Object(d.jsxs)("form",{className:t.root,noValidate:!0,children:[Object(d.jsx)(M.a,{disabled:!P,InputProps:e.isDarkMode?{classes:{disabled:t.dmDisabled},className:t.dmText,inputProps:{min:1,max:10}}:{inputProps:{min:1,max:10}},InputLabelProps:e.isDarkMode?{style:{color:"white"}}:{},className:t.talent,onChange:ae,style:{width:"4rem",textAlign:"center"},id:e.chara.name+"talent1",label:"Talent 1",defaultValue:A.talent1,type:"number"}),Object(d.jsx)(M.a,{disabled:!P,InputProps:e.isDarkMode?{classes:{disabled:t.dmDisabled},className:t.dmText,inputProps:{min:1,max:10}}:{inputProps:{min:1,max:10}},InputLabelProps:e.isDarkMode?{style:{color:"white"}}:{},className:t.talent,onChange:ae,style:{width:"4rem",textAlign:"center"},id:e.chara.name+"talent2",label:"Talent 2",defaultValue:A.talent2,type:"number"}),Object(d.jsx)(M.a,{disabled:!P,InputProps:e.isDarkMode?{classes:{disabled:t.dmDisabled},className:t.dmText,inputProps:{min:1,max:10}}:{inputProps:{min:1,max:10}},InputLabelProps:e.isDarkMode?{style:{color:"white"}}:{},className:t.talent,onChange:ae,style:{width:"4rem",textAlign:"center"},id:e.chara.name+"talent3",label:"Talent 3",defaultValue:A.talent3,type:"number"})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("h2",{className:e.isDarkMode?t.dmText:"",style:{display:"inline-flex",marginBottom:"0px"},children:"Ascension Items"}),Object(d.jsx)(F,{expand:G,onClick:function(){K(!G)},"aria-expanded":G,"aria-label":"show more",children:Object(d.jsx)(S.a,{})})]}),Object(d.jsx)(R,{in:G,timeout:"auto",unmountOnExit:!0,children:Object(d.jsx)(b.a,{style:{paddingTop:"0px"},children:Object(d.jsxs)(l.a,{container:!0,style:{display:"inline-flex"},children:[Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.ascension.fiveStar.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.talCommon.oneStar.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.region.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.boss.item})]})})}),Object(d.jsxs)("span",{children:[Object(d.jsx)("h2",{className:e.isDarkMode?t.dmText:"",style:{display:"inline-flex",marginBottom:"0px"},children:"Talent Items"}),Object(d.jsx)(F,{expand:W,onClick:function(){X(!W)},"aria-expanded":W,"aria-label":"show more",children:Object(d.jsx)(S.a,{})})]}),Object(d.jsx)(R,{in:W,timeout:"auto",unmountOnExit:!0,children:Object(d.jsx)(b.a,{style:{paddingTop:"0px"},children:Object(d.jsxs)(l.a,{container:!0,style:{display:"inline-flex"},children:[Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.crown.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.talCommon.oneStar.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.talent.twoStar.item}),Object(d.jsx)(h,{url:e.url,isDarkMode:e.isDarkMode,item:e.chara.properties.talBoss.item})]})})})]})]})})}}}]);
//# sourceMappingURL=3.9c1dc574.chunk.js.map