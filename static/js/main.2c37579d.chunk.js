(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(64),o=a.n(r),c=(a(73),a(74),a(65)),s=a.n(c),l=(a(273),a(2)),m=function(){var e={visible:{opacity:1,y:0,transition:{duration:1}},hidden:{opacity:1,y:"100%"}};return i.a.createElement("div",{id:"main"},i.a.createElement(l.a.div,{id:"main-content"},i.a.createElement(l.a.div,{className:"top",initial:"hidden",animate:"visible",variants:e},i.a.createElement(l.a.div,{className:"greetings"},"About ME")),i.a.createElement(l.a.div,{className:"about-me",initial:"hidden",animate:"visible",variants:e},i.a.createElement("div",null,"Write something about yourself here! (Go to src/Components/Main/Main.js)"))))},d=a(7),u=(a(274),a(275),a(276),{visible:{opacity:1,x:0,display:"block"},hidden:{opacity:0,x:50,display:"none"}}),p=function(e){var t=e.variant,a=e.name,r=e.description,o=e.img,c=e.url,s=Object(n.useState)({open:!1,style:{}}),m=Object(d.a)(s,2),p=m[0],h=m[1],b=i.a.createRef();return i.a.createElement(l.a.div,{className:"project-item",variants:t,style:p.style,onClick:function(){p.open?(b.current.style.whiteSpace="nowrap",h({style:{height:"0px"}})):(b.current.style.whiteSpace="initial",h({style:{height:"120px"}})),h({open:!p.open})}},i.a.createElement(l.a.div,{className:"preview"},i.a.createElement("img",{src:o,alt:"preview"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"title"},a),i.a.createElement("div",{className:"description",ref:b},r),i.a.createElement(l.a.a,{className:"go-to-website",variants:u,animate:p.open?"visible":"hidden",href:c,target:"_blank",rel:"noopener noreferrer"},"Go to website")))},h=a(66),b=a.n(h),f=function(e){var t=e.isOpen;return i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"heading"},"My Projects"),i.a.createElement(l.a.div,{initial:"hidden",animate:t?"visible":"hidden",variants:{visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,transition:{when:"afterChildren"}}},id:"project-items-container"},i.a.createElement(p,{name:"Example",description:"This is an example project",variant:{visible:{opacity:1,x:0},hidden:{opacity:0,x:100}},img:b.a,url:""})))};function v(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function g(){var e=Object(n.useState)(v()),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i(v())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var E=a(10),y=a(19),w=function(e){e.activeTab;var t=g().width,a=Object(n.useState)({open:!1}),r=Object(d.a)(a,2),o=r[0],c=r[1],s=t<=480?{left:0,right:t-30}:{left:.5*t-30,right:t-30},m={x:[s.right,s.right-30,s.right]},u=Object(l.b)(s.right),p=Object(l.c)(u,[s.left,s.right],[1,0]),h=Object(l.c)(u,[s.left,s.right],[180,0]);Object(n.useEffect)((function(){var e=u.onChange((function(){u.get()<=s.left?c({open:!0}):c({open:!1})}));return function(){e()}}),[s.left,u]);return i.a.createElement("div",{className:"right-tab"},i.a.createElement(l.a.div,{className:"right-tab-arrow",animate:m,transition:{ease:"easeOut",duration:.7,delay:1},style:{x:u},drag:"x",dragConstraints:s,dragElastic:.2,dragTransition:{bounceStiffness:600,bounceDamping:30},dragMomentum:!0,onTap:function(e,t){u.current===s.right?(u.set(s.left),c({open:!0})):u.current===s.left&&(u.set(s.right),c({open:!1}))},onDrag:function(e,t){u.current<=s.left+40?c({open:!0}):c({open:!1})}},i.a.createElement(l.a.div,{style:{transform:"rotate("+h.current+"deg)"}},i.a.createElement(E.a,{icon:y.a}))),i.a.createElement(l.a.div,{className:"right-tab-content",style:{opacity:p,x:u}},i.a.createElement(f,{isOpen:o.open})))},O=(a(282),a(283),a(284),function(e){var t=e.icon,a=e.useclass,n=e.usehref;return i.a.createElement(l.a.div,{whileHover:{scale:1.1},whileTap:{scale:.95}},i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(E.a,{icon:t,size:"6x",className:a})))}),j=a(20),N=a(67),x=function(e){var t=e.isOpen;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading"},i.a.createElement("div",{className:"main"},"Let's chat!"),i.a.createElement("div",{className:"sub-heading"},"Contact me on any of my social media")),i.a.createElement(l.a.div,{id:"content"},i.a.createElement(O,{icon:j.b,useclass:"instagram",usehref:""}),i.a.createElement(O,{icon:j.a,useclass:"github",usehref:""}),i.a.createElement(O,{icon:j.c,useclass:"linkedin",usehref:""}),i.a.createElement(O,{icon:N.a,useclass:"gmail",usehref:"mailto:"})),i.a.createElement("div",{id:"credit"},t?i.a.createElement("a",{href:"https://yashkandalkar.github.io/",target:"_blank",rel:"noopener noreferrer"},"Website Template made by Yash"):""))},k=function(e){e.activeTab;var t=g(),a=t.height,r=t.width,o=Object(n.useState)({open:!1}),c=Object(d.a)(o,2),s=c[0],m=c[1],u=r<=480?{top:0,bottom:a-30}:{top:.5*a-30,bottom:a-30},p={y:[u.bottom,u.bottom-30,u.bottom]},h=Object(l.b)(u.bottom),b=Object(l.c)(h,[u.top,u.bottom],[1,0]),f=Object(l.c)(h,[u.top,u.bottom],[180,0]);Object(n.useEffect)((function(){var e=h.onChange((function(){h.get()<=u.top?m({open:!0}):m({open:!1})}));return function(){e()}}),[u.top,h]);return i.a.createElement("div",{className:"bottom-tab"},i.a.createElement(l.a.div,{className:"bottom-tab-arrow",animate:p,transition:{ease:"easeOut",duration:.7,delay:2},style:{y:h},drag:"y",dragConstraints:u,dragElastic:.2,dragTransition:{bounceStiffness:600,bounceDamping:30},onTap:function(e,t){h.get()>=u.bottom-20?(h.set(u.top),m({open:!0})):h.get()<=u.top+20&&(h.set(u.bottom),m({open:!1}))}},i.a.createElement(l.a.div,{style:{transform:"rotate("+f.get()+"deg)"}},i.a.createElement(E.a,{icon:y.b}))),i.a.createElement(l.a.div,{className:"bottom-tab-content",style:{opacity:b,y:h}},i.a.createElement(x,{isOpen:s.open})))},C={particles:{number:{value:100,density:{enable:!0}}}},S=function(){var e=g(),t=e.height,a=e.width;return i.a.createElement("div",{className:"App"},i.a.createElement(s.a,{className:"particles",params:C,width:a,height:t}),i.a.createElement(m,null),i.a.createElement(w,null),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){e.exports=a.p+"static/media/canary.de8edcc1.png"},68:function(e,t,a){e.exports=a(285)},73:function(e,t,a){},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.2c37579d.chunk.js.map