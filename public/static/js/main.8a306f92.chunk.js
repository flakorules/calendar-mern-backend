(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{116:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(8),o=n.n(r),s=n(9),i=n(36),l=n(10),u=n(12),j=n.n(u),d=n(21),b=n(18),m=n.n(b),O="https://mern-calendar-cfcs.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},v="[ui] Open modal",h="[ui] Close modal",x="[event] Set active",g="[event] Logout",y="[event] Add new",N="[event] Clear active event",w="[event] Event updated",E="[event] Event deleted",k="[event] Event loaded",S="[auth] Finish checking login state",C="[auth] Login",R="[auth] Logout",D=n(5),T=n(14),P=n.n(T),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},I=function(e){return{type:y,payload:e}},_=function(){return{type:N}},L=function(e){return{type:w,payload:e}},G=function(){return{type:E}},F=function(e){return{type:k,payload:e}},V=function(){return function(e){localStorage.clear(),e({type:g}),e(H())}},H=function(){return{type:R}},J=function(e){return{type:C,payload:e}},M=n(15),U=n(25),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(M.a)(t,2),a=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},a),{},Object(U.a)({},t.name,t.value)))};return[a,s,o]},X=(n(76),function(){var e=Object(s.b)(),t=B({lEmail:"",lPassword:""}),n=Object(M.a)(t,2),c=n[0],r=n[1],o=B({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),i=Object(M.a)(o,2),l=i[0],u=i[1],b=c.lEmail,O=c.lPassword,p=l.rName,v=l.rEmail,h=l.rPassword1,x=l.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=b,a=O,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:r.uid,name:r.name}))):m.a.fire("ERROR",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:b,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:O,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),h!==x)return m.a.fire("ERROR","Las contrase\xf1as deben ser iguales","error");var n,a,c;e((n=v,a=h,c=p,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{name:c,email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:o=e.sent,console.log(o),o.ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:o.uid,name:o.name}))):m.a.fire("ERROR",o.msg,"error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:h,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:x,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),q=n(54),z=(n(77),function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(V())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})}),K={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Q=(n(78),n(49)),W=n.n(Q),Y=n(50),Z=n.n(Y),$=function(){return{type:v}},ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};W.a.setAppElement("#root");var te=P()().minutes(0).seconds(0).add(1,"hours"),ne=te.clone().add(1,"hours"),ae={title:"",notes:"",start:te.toDate(),end:ne.toDate()},ce=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvent,n=Object(s.b)(),r=Object(c.useState)(te.toDate()),o=Object(M.a)(r,2),i=o[0],l=o[1],u=Object(c.useState)(ne.toDate()),b=Object(M.a)(u,2),O=b[0],f=b[1],v=Object(c.useState)(!0),x=Object(M.a)(v,2),g=x[0],y=x[1],N=Object(c.useState)(ae),w=Object(M.a)(N,2),E=w[0],k=w[1],S=E.notes,C=E.title,R=E.start,T=E.end;Object(c.useEffect)((function(){k(t||ae)}),[t,k]);var A=function(){n({type:h}),n(_()),k(ae)},G=function(e){var t=e.target;k(Object(D.a)(Object(D.a)({},E),{},Object(U.a)({},t.name,t.value)))};return Object(a.jsxs)(W.a,{isOpen:e,onRequestClose:A,style:ee,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",t?"Editar Evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,c=P()(R),r=P()(T);if(console.log(R,T),c.isSameOrAfter(r))return m.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error");C.trim().length<2&&y(!1),n(t?(a=E,function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(L(a)):m.a.fire("ERROR",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(E)),y(!0),A()},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(Z.a,{onChange:function(e){l(e),k(Object(D.a)(Object(D.a)({},E),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(Z.a,{onChange:function(e){f(e),k(Object(D.a)(Object(D.a)({},E),{},{end:e}))},value:O,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:C,onChange:G}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:S,onChange:G}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},re=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e($())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})},oe=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(G()):m.a.fire("ERROR",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar Evento"})]})};P.a.locale("es");var se=Object(q.b)(P.a),ie=function(){var e=Object(c.useState)(localStorage.getItem("lastView")||"month"),t=Object(M.a)(e,2),n=t[0],r=t[1],o=Object(s.b)(),i=Object(s.c)((function(e){return e.calendar})),l=i.events,u=i.activeEvent,b=Object(s.c)((function(e){return e.auth})).uid;Object(c.useEffect)((function(){o(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=A(a.eventos),t(F(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(z,{}),Object(a.jsx)(q.a,{localizer:se,events:l,startAccessor:"start",endAccessor:"end",messages:K,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:b===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onSelectEvent:function(e){o({type:x,payload:e})},onDoubleClickEvent:function(e){o($())},onSelectSlot:function(e){o(_())},selectable:!0,onView:function(e){r(e),localStorage.setItem("lastView",e)},view:n}),Object(a.jsx)(re,{}),u&&Object(a.jsx)(oe,{}),Object(a.jsx)(ce,{})]})},le=n(39),ue=function(e){var t=e.isAuthenticated,n=e.component,c=Object(le.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(D.a)(Object(D.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(D.a)({},e)):Object(a.jsx)(l.a,{to:"/login"})}}))},je=function(e){var t=e.isAuthenticated,n=e.component,c=Object(le.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(D.a)(Object(D.a)({},c),{},{component:function(e){return t?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(n,Object(D.a)({},e))}}))},de=function(){Object(s.b)();var e=Object(s.c)((function(e){return e.auth})),t=(e.checking,e.uid);return Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(je,{exact:!0,path:"/login",component:X,isAuthenticated:!!t}),Object(a.jsx)(ue,{exact:!0,path:"/",component:ie,isAuthenticated:!!t}),Object(a.jsx)(l.a,{to:"/"})]})})})},be=n(22),me=n(67),Oe=n(55),fe=(n(114),{events:[],activeEvent:null}),pe={modalOpen:!1},ve={checking:!0,uid:null,name:null},he=Object(be.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case h:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case y:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(Oe.a)(e.events),[t.payload])});case N:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(D.a)(Object(D.a)({},e),{},{events:Object(Oe.a)(t.payload)});case g:return Object(D.a)({},fe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case S:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case R:return{checking:!1};default:return e}}}),xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ge=Object(be.e)(he,xe(Object(be.a)(me.a))),ye=function(){return Object(a.jsx)(s.a,{store:ge,children:Object(a.jsx)(de,{})})};n(116);o.a.render(Object(a.jsx)(ye,{}),document.getElementById("root"))},76:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.8a306f92.chunk.js.map