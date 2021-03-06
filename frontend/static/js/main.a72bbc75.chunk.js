(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{189:function(t,e,a){},237:function(t,e,a){},243:function(t,e,a){},244:function(t,e,a){},246:function(t,e,a){},247:function(t,e,a){},248:function(t,e,a){},343:function(t,e,a){},344:function(t,e,a){},346:function(t,e,a){},347:function(t,e,a){},348:function(t,e,a){},349:function(t,e,a){},350:function(t,e,a){"use strict";a.r(e);var n,r=a(0),i=a(11),c=a.n(i),o=(a(189),a(13)),s=a(16),u=a(111),l=a(86),d=a(23),p=a(19),b=a.n(p),j=a(41),h=function t(){Object(d.a)(this,t),this.vacations=[];var e=JSON.parse(sessionStorage.getItem("vacations"));if(e&&e.length){var a=JSON.parse(sessionStorage.getItem("auth")).user.userId;e.sort((function(t){return t.followers&&t.followers.includes(a.toString())?-1:1})),this.vacations=e}};!function(t){t.VacationsDownloaded="VacationsDownloaded",t.VacationAdded="VacationAdded",t.VacationUpdated="VacationUpdated",t.VacationDeleted="VacationDeleted",t.VacationReset="VacationReset"}(n||(n={}));var m=a(164),g=function(){function t(){Object(d.a)(this,t)}return Object(j.a)(t,null,[{key:"url",value:function(){t.vacationUrl="https://bookit-trips.herokuapp.com/api/vacations/",t.authUrl="https://bookit-trips.herokuapp.com/api/auth/",t.socketUrl="https://bookit-trips.herokuapp.com/"}}]),t}();g.vacationUrl=void 0,g.authUrl=void 0,g.socketUrl=void 0,g.url();var x=function(){function t(){Object(d.a)(this,t),this.socket=void 0}return Object(j.a)(t,[{key:"connect",value:function(){this.socket=Object(m.io)(g.socketUrl),this.socket.on("msg-from-server-vacation-added",(function(t){U.dispatch(function(t){return{type:n.VacationAdded,payload:t}}(t))})),this.socket.on("msg-from-server-vacation-updated",(function(t){U.dispatch(function(t){return{type:n.VacationUpdated,payload:t}}(t))})),this.socket.on("msg-from-server-vacation-deleted",(function(t){U.dispatch(function(t){return{type:n.VacationDeleted,payload:t}}(t))}))}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),t}(),O=new x;function v(t){var e=new Date(t);return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]}function f(){var t=Math.round,e=Math.random;return"rgba("+t(255*e())+","+t(255*e())+","+t(255*e())+",0.8)"}function S(t){b.a.defaults.headers.authorization="Bearer ".concat(t.token)}function y(){U.dispatch({type:n.VacationReset}),U.dispatch({type:A.AuthLoggedOut}),delete b.a.defaults.headers.authorization,O.disconnect()}var A,w=function t(){Object(d.a)(this,t),this.auth={isLoggedIn:!1,user:null};var e=JSON.parse(sessionStorage.getItem("auth"));e&&e.isLoggedIn&&(S(e.user),this.auth=e)};function N(t){return{type:A.AuthLoggedIn,payload:t}}function k(t){return{type:A.AuthRegistered,payload:t}}!function(t){t.AuthLoggedIn="AuthLoggedIn",t.AuthRegistered="AuthRegistered",t.AuthLoggedOut="AuthLoggedOut"}(A||(A={}));var L=Object(u.a)({authState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new w,e=arguments.length>1?arguments[1]:void 0,a=Object(l.a)({},t);switch(e.type){case A.AuthLoggedIn:a.auth={isLoggedIn:!0,user:e.payload};break;case A.AuthRegistered:a.auth={isLoggedIn:!1,user:e.payload};break;case A.AuthLoggedOut:a.auth={isLoggedIn:!1,user:null}}return sessionStorage.setItem("auth",JSON.stringify(a.auth)),a},vacationState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new h,e=arguments.length>1?arguments[1]:void 0,a=Object(l.a)({},t);switch(e.type){case n.VacationsDownloaded:a.vacations=e.payload;break;case n.VacationAdded:a.vacations.push(e.payload);break;case n.VacationUpdated:var r=a.vacations.findIndex((function(t){return t.vacationId===e.payload.vacationId}));a.vacations[r]=e.payload;break;case n.VacationDeleted:var i=a.vacations.findIndex((function(t){return t.vacationId===e.payload}));a.vacations.splice(i,1);break;case n.VacationReset:a.vacations=[]}return sessionStorage.setItem("vacations",JSON.stringify(a.vacations)),a}}),U=Object(u.b)(L),I=(a(237),function t(){Object(d.a)(this,t)});I.homeUrl="/",I.vacationListUrl="/vacations",I.adminWatcherUrl="/vacations/admin-watcher",I.addVacationUrl="/add-vacation",I.editVacationUrl="/edit-vacation/:vacationId",I.loginUrl="/auth/login",I.registerUrl="/auth/register";var B=a(2);var q=function(t){return Object(B.jsxs)("div",{className:"LogoutTab",children:[Object(B.jsxs)("span",{children:[" Welcome ",t.user&&t.user.firstName]}),Object(B.jsx)("br",{}),Object(B.jsx)(o.b,{to:I.loginUrl,onClick:function(){return y()},children:"Logout"})]})};var R=function(){return Object(B.jsxs)("div",{className:"LoginTab",children:[Object(B.jsx)(o.b,{to:I.loginUrl,children:"Login"}),Object(B.jsx)("span",{children:"/"}),Object(B.jsx)(o.b,{to:I.registerUrl,children:"Register"})]})},V=a(404),E=a(175),D=a(405);var P=function(){var t=Object(r.useState)(U.getState().authState.auth),e=Object(s.a)(t,2),a=e[0],n=e[1],i=Object(r.useState)(null),c=Object(s.a)(i,2),o=c[0],u=c[1],l=Object(r.useRef)(),d=Boolean(o),p=function(){u(null)};return Object(r.useEffect)((function(){return U.subscribe((function(){var t=U.getState().authState.auth;n(t)}))})),Object(B.jsxs)("nav",{className:"NavLog",children:[Object(B.jsx)(V.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(){u(l.current)},className:"avatar",children:a.user&&a.isLoggedIn?a.user.firstName.charAt(0).toUpperCase():null}),Object(B.jsx)(E.a,{className:"long-menu",anchorEl:o,keepMounted:!0,open:d,onClose:p,children:Object(B.jsx)(D.a,{onClick:p,ref:l,children:a.user&&a.isLoggedIn?Object(B.jsx)(q,{user:a.user}):Object(B.jsx)(R,{})})})]})},T=a(24),F=a(174),C=a(382),W=a(170),G=a.n(W),K=a(383),H=a(384);function M(){return Object(C.a)({root:{maxWidth:320,height:400},media:{height:100,width:320},primary:{color:"#ff8a80"},secondary:{color:"#999999"}})()}function z(){return Object(C.a)({textBox:{margin:"5px 0",width:400}})()}function Z(){return Object(F.a)({typography:{fontFamily:"fantasy",fontSize:15,h3:{fontSize:30}},palette:{primary:{main:K.a[600]},secondary:{main:H.a[600]}}})}var Q=a.p+"static/media/vacation.15897665.jpg",J=a.p+"static/media/addVacation.d72c38dd.jpg",X=a.p+"static/media/welcome.5c874a67.jpg",Y=a(116);a(243);var $=function(t){var e=Object(C.a)((function(t){var e;return G()({root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},image:(e={position:"relative",height:200},Object(T.a)(e,t.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(T.a)(e,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),e),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.4,transition:t.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px ").concat(t.spacing(1)+6,"px")},imageMarked:{height:3,width:18,backgroundColor:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}})}))(),a=[{url:X},{url:Q},{url:J},{url:"data:image/jpeg;base64,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"}],n=[{url:X},{url:Q}],r=[{to:I.homeUrl,name:"Home"},{to:I.vacationListUrl,name:"Vacations"},{to:I.addVacationUrl,name:"Add Vacation"},{to:I.adminWatcherUrl,name:"Admin Watcher"}],i=[{to:I.homeUrl,name:"Home"},{to:I.vacationListUrl,name:"Vacations"}];return Object(B.jsx)("div",{className:"HeaderBuilder",children:t.isAdmin?a.map((function(t,a){return Object(B.jsx)(o.b,{to:r[a].to,children:Object(B.jsxs)(Y.a,{focusRipple:!0,className:"".concat(e.image," headerButton"),focusVisibleClassName:e.focusVisible,children:[Object(B.jsx)("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),Object(B.jsx)("span",{className:e.imageBackdrop}),Object(B.jsx)("span",{className:e.imageButton,children:r[a].name})]},a)},a)})):n.map((function(t,a){return Object(B.jsx)(o.b,{to:i[a].to,children:Object(B.jsxs)(Y.a,{focusRipple:!0,className:"".concat(e.image," headerButton"),focusVisibleClassName:e.focusVisible,children:[Object(B.jsx)("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),Object(B.jsx)("span",{className:e.imageBackdrop}),Object(B.jsx)("span",{className:e.imageButton,children:i[a].name})]},a)},a)}))})};a(244);var _=function(){var t=Object(r.useState)(U.getState().authState.auth),e=Object(s.a)(t,2),a=e[0],n=e[1];return Object(r.useEffect)((function(){return U.subscribe((function(){var t=U.getState().authState.auth;n(t)}))})),Object(B.jsxs)("div",{className:"Header",children:[Object(B.jsx)("h1",{children:"Bookit Trips!"}),a.isLoggedIn&&a.user.isAdmin?Object(B.jsx)($,{isAdmin:1}):Object(B.jsx)($,{isAdmin:0}),Object(B.jsx)(P,{})]})},tt=a(14),et=a(7),at=a.n(et),nt=a(12),rt=(a(246),a(44)),it=a(28),ct=new(function(){function t(){Object(d.a)(this,t)}return Object(j.a)(t,[{key:"getError",value:function(t){var e;if("string"===typeof t)return t;if("string"===typeof t.error)return t.error;if(Array.isArray(t.error)){var a,n="",r=Object(it.a)(t.error);try{for(r.s();!(a=r.n()).done;){n+=a.value+"<br>"}}catch(t){r.e(t)}finally{r.f()}return n}return(null===(e=t.response)||void 0===e?void 0:e.data)?t.response.data:"string"===typeof t.message?t.message.startsWith("Network Error")?"The server is down or your network \n please try again.":t.message:"Some error occurred, please try again later."}}]),t}());var ot=function(){var t=Object(r.useRef)(),e=Object(tt.f)(),a=Object(rt.a)(),n=a.register,i=a.handleSubmit;function c(){return(c=Object(nt.a)(at.a.mark((function t(a){var n,r;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post(g.authUrl+"login",a);case 3:n=t.sent,r=n.data,O.connect(),U.dispatch(N(r)),S(r),e.push(I.vacationListUrl),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(ct.getError(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){U.getState().authState.auth.isLoggedIn&&e.push("/page404"),!U.getState().authState.auth.isLoggedIn&&U.getState().authState.auth.user&&(t.current=U.getState().authState.auth.user)})),Object(B.jsx)("div",{className:"LoginPage",children:Object(B.jsxs)("div",{className:"wrapper",children:[Object(B.jsx)("div",{className:"title",children:"Login"}),Object(B.jsxs)("form",{action:"POST",onSubmit:i((function(t){return c.apply(this,arguments)})),children:[Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"text",name:"username",ref:n,defaultValue:t.current?t.current.username:"",required:!0}),Object(B.jsx)("label",{children:"User name:"})]}),Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"password",name:"password",ref:n,required:!0}),Object(B.jsx)("label",{children:"Password"})]}),Object(B.jsx)("div",{className:"field",children:Object(B.jsx)("input",{type:"submit",value:"Login"})}),Object(B.jsxs)("div",{className:"signup-link",children:["Not a member? ",Object(B.jsx)(o.b,{to:I.registerUrl,children:"Signup now"})]})]})]})})};a(247);var st=function(){var t=Object(rt.a)(),e=t.register,a=t.handleSubmit,n=Object(tt.f)();function i(){return(i=Object(nt.a)(at.a.mark((function t(e){return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post(g.authUrl+"register",e);case 3:U.dispatch(k(e)),n.push(I.loginUrl),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(ct.getError(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){U.getState().authState.auth.isLoggedIn&&n.push("/page404")})),Object(B.jsx)("div",{className:"RegisterPage",children:Object(B.jsxs)("div",{className:"wrapper",children:[Object(B.jsx)("div",{className:"title",children:"SignUp"}),Object(B.jsxs)("form",{action:"POST",onSubmit:a((function(t){return i.apply(this,arguments)})),children:[Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"text",name:"firstName",ref:e,minLength:2,maxLength:20,required:!0}),Object(B.jsx)("label",{children:"First Name:"})]}),Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"text",name:"lastName",ref:e,minLength:2,maxLength:20,required:!0}),Object(B.jsx)("label",{children:"Last Name:"})]}),Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"text",name:"username",ref:e,maxLength:20,minLength:4,required:!0}),Object(B.jsx)("label",{children:"User name:"})]}),Object(B.jsxs)("div",{className:"field",children:[Object(B.jsx)("input",{type:"password",name:"password",ref:e,minLength:6,maxLength:20,required:!0}),Object(B.jsx)("label",{children:"Password"})]}),Object(B.jsx)("div",{className:"field",children:Object(B.jsx)("input",{type:"submit",value:"Register"})}),Object(B.jsx)("div",{className:"login-link",children:Object(B.jsx)(o.b,{to:I.loginUrl,children:"Login now"})})]})]})})},ut=a(385),lt=a(386),dt=a(403),pt=a(388),bt=a(356),jt=a(387),ht=a(389),mt=a(390);a(248);var gt=function(){var t=Object(rt.a)(),e=t.register,a=t.handleSubmit,n=Object(tt.f)(),i=Object(r.useState)(v((new Date).toString())),c=Object(s.a)(i,2),o=c[0],u=c[1],l=Z(),d=z();function p(){return(p=Object(nt.a)(at.a.mark((function t(e){var a,r;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(a=new FormData).append("destination",e.destination),a.append("description",e.description),a.append("fromDate",e.fromDate.toString()),a.append("toDate",e.toDate.toString()),a.append("price",e.price.toString()),a.append("newImage",e.newImage.item(0)),t.next=10,b.a.post(g.vacationUrl,a);case 10:n.push(I.vacationListUrl),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),403===(null===(r=t.t0.response)||void 0===r?void 0:r.status)?(y(),alert(ct.getError(t.t0)),n.push(I.loginUrl)):alert(ct.getError(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){if(!U.getState().authState.auth.isLoggedIn||!U.getState().authState.auth.user.isAdmin)return n.push("/page404")})),Object(B.jsx)(ut.a,{theme:l,children:Object(B.jsxs)("div",{className:"AddVacation",children:[Object(B.jsxs)(lt.a,{variant:"h3",children:[Object(B.jsx)(jt.a,{}),"Add Vacation"]}),Object(B.jsxs)("form",{method:"POST",onSubmit:a((function(t){return p.apply(this,arguments)})),encType:"multipart/form-data",children:[Object(B.jsx)(dt.a,{name:"destination",inputRef:e,label:"Destination",variant:"outlined",className:d.textBox,inputProps:{minLength:5,maxLength:30},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"description",inputRef:e,inputProps:{type:"textarea",minLength:5,maxLength:1e3},label:"Description",type:"textarea",variant:"outlined",className:d.textBox,multiline:!0,required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"fromDate",inputRef:e,label:"From Date",InputLabelProps:{shrink:!0},type:"date",variant:"outlined",className:d.textBox,inputProps:{min:v((new Date).toString()),max:"2030-01-01"},onChange:function(t){return u(t.target.value)},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"toDate",InputLabelProps:{shrink:!0},label:"To Date",inputRef:e,type:"date",variant:"outlined",className:d.textBox,inputProps:{min:v(new Date(o).toString()),max:"2030-01-01"},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"price",inputProps:{step:"0.01",min:500,max:2e4},inputRef:e,label:"Price",type:"number",variant:"outlined",className:d.textBox,required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"newImage",inputRef:e,InputLabelProps:{shrink:!0},inputProps:{accept:"image/*"},label:"Image",type:"file",variant:"outlined",className:d.textBox,required:!0}),Object(B.jsx)("br",{}),Object(B.jsxs)(pt.a,{fullWidth:!0,variant:"contained",children:[Object(B.jsx)(bt.a,{color:"primary",fullWidth:!0,type:"submit",startIcon:Object(B.jsx)(ht.a,{}),children:"Send"}),Object(B.jsx)(bt.a,{color:"secondary",fullWidth:!0,type:"reset",startIcon:Object(B.jsx)(mt.a,{}),children:"Clear"})]})]})]})})},xt=a(171);var Ot=function(){var t=Object(tt.f)(),e=[];U.getState().vacationState.vacations.map((function(t){return t.countFollows?e.push({count:t.countFollows,destination:t.destination,backgroundColor:f()}):null}));var a=Object(r.useState)(e),n=Object(s.a)(a,2),i=n[0],c=n[1];return Object(r.useEffect)((function(){if(U.getState().authState.auth.isLoggedIn&&U.getState().authState.auth.user.isAdmin)return U.subscribe((function(){var t=[];U.getState().vacationState.vacations.map((function(e){return e.countFollows?t.push({count:e.countFollows,destination:e.destination,backgroundColor:f()}):null})),c(t)}));t.push("/page404")})),Object(B.jsx)("div",{className:"AdminWatcher",children:Object(B.jsx)(xt.Bar,{data:{labels:i.map((function(t){return t.destination})),datasets:[{label:"Vacations Follows",data:i.map((function(t){return t.count})),backgroundColor:i.map((function(t){return t.backgroundColor})),borderColor:i.map((function(t){return t.backgroundColor})),borderWidth:1}]},height:300,width:400,options:{legend:{fontColor:"white",fontWeight:18},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{fontColor:"white",fontSize:18,stepSize:1,beginAtZero:!0}}],xAxes:[{ticks:{fontColor:"white",fontSize:15,font:900}}]}}})})},vt=a(391);a(343);var ft=function(t){var e=+t.match.params.vacationId,a=U.getState().vacationState.vacations.find((function(t){return t.vacationId===e})),n=Object(rt.a)({defaultValues:a}),i=n.register,c=n.handleSubmit;Object(r.useEffect)((function(){U.getState().authState.auth.isLoggedIn&&U.getState().authState.auth.user.isAdmin&&a||t.history.push("/page404")})),U.getState().authState.auth.isLoggedIn&&a&&(a.fromDate=v(a.fromDate),a.toDate=v(a.toDate));var o=Object(r.useState)(v((new Date).toString())),u=Object(s.a)(o,2),l=u[0],d=u[1],p=Z(),j=z();function h(){return(h=Object(nt.a)(at.a.mark((function n(r){var i,c;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(i=new FormData).append("destination",r.destination),i.append("description",r.description),i.append("fromDate",r.fromDate.toString()),i.append("toDate",r.toDate.toString()),i.append("price",r.price.toString()),i.append("imageFileName",a.imageFileName),null!==r.newImage.item(0)&&i.append("newImage",r.newImage.item(0)),n.next=11,b.a.put(g.vacationUrl+e,i);case 11:t.history.push(I.vacationListUrl),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),403===(null===(c=n.t0.response)||void 0===c?void 0:c.status)?(y(),alert("Your session time has been Expired"),t.history.push(I.loginUrl)):alert(ct.getError(n.t0));case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}return Object(B.jsx)(ut.a,{theme:p,children:Object(B.jsxs)("div",{className:"EditVacation",children:[Object(B.jsxs)(lt.a,{variant:"h3",children:[Object(B.jsx)(vt.a,{}),"Edit Vacation"]}),Object(B.jsxs)("form",{method:"POST",onSubmit:c((function(t){return h.apply(this,arguments)})),encType:"multipart/form-data",children:[Object(B.jsx)(dt.a,{name:"destination",inputRef:i,label:"Destination",variant:"outlined",className:j.textBox,inputProps:{minLength:3,maxLength:30},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"description",inputRef:i,inputProps:{type:"textarea",minLength:5,maxLength:1e3},label:"Description",type:"textarea",variant:"outlined",className:j.textBox,multiline:!0,required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"fromDate",inputRef:i,label:"From Date",InputLabelProps:{shrink:!0},type:"date",variant:"outlined",className:j.textBox,inputProps:{min:v((new Date).toString()),max:"2030-01-01"},onChange:function(t){return d(t.target.value)},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"toDate",InputLabelProps:{shrink:!0},label:"To Date",inputRef:i,type:"date",variant:"outlined",className:j.textBox,inputProps:{min:v(new Date(l).toString()),max:"2030-01-01"},required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"price",inputProps:{step:"0.01",min:500,max:2e4},inputRef:i,label:"Price",type:"number",variant:"outlined",className:j.textBox,required:!0}),Object(B.jsx)("br",{}),Object(B.jsx)(dt.a,{name:"newImage",inputRef:i,InputLabelProps:{shrink:!0},inputProps:{accept:"image/*"},label:"Image Not Required",type:"file",variant:"outlined",className:j.textBox}),Object(B.jsx)("br",{}),Object(B.jsx)(pt.a,{fullWidth:!0,variant:"contained",children:Object(B.jsx)(bt.a,{color:"primary",fullWidth:!0,type:"submit",startIcon:Object(B.jsx)(ht.a,{}),children:"Send"})})]})]})})},St=a(177),yt=a(176),At=a(392),wt=a(393),Nt=a(394),kt=a(395),Lt=a(173),Ut=a.n(Lt),It=a(172),Bt=a.n(It);a(344);var qt=function(t){var e=Object(tt.f)(),a=M(),n=function(){var a=Object(nt.a)(at.a.mark((function a(){var n;return at.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,window.confirm("Are you sure?")){a.next=4;break}return a.abrupt("return");case 4:return a.next=6,b.a.delete(g.vacationUrl+t.vacation.vacationId);case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),403===(null===(n=a.t0.response)||void 0===n?void 0:n.status)?(y(),alert(ct.getError(a.t0)),e.push(I.loginUrl)):alert(ct.getError(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"VacationAdminCard",children:Object(B.jsxs)(At.a,{className:a.root,children:[Object(B.jsxs)(wt.a,{children:[Object(B.jsx)(Nt.a,{className:a.media,image:g.vacationUrl+"images/"+t.vacation.imageFileName,title:t.vacation.destination}),Object(B.jsx)(Bt.a,{type:"button",className:"deleteCard",onClick:n}),Object(B.jsx)(o.b,{to:"/edit-vacations/".concat(t.vacation.vacationId),children:Object(B.jsx)(Ut.a,{type:"button",className:"editCard"})})]}),Object(B.jsxs)(kt.a,{className:"CardContent",children:[Object(B.jsx)(lt.a,{gutterBottom:!0,variant:"h6",component:"h6",children:t.vacation.destination}),Object(B.jsx)(lt.a,{className:"descriptionContainer",variant:"body2",color:"textPrimary",component:"p",children:t.vacation.description}),Object(B.jsx)("br",{}),"From Date: ",new Date(t.vacation.fromDate).toDateString(),Object(B.jsx)("br",{}),"To Date: ",new Date(t.vacation.toDate).toDateString(),Object(B.jsxs)(lt.a,{variant:"subtitle1",component:"h4",children:["Price: ",t.vacation.price,"$"]})]})]})})},Rt=a(397),Vt=a(396),Et=a(398);a(346);var Dt=function(t){var e=U.getState().authState.auth.user.userId,a=M(),n=Object(tt.f)(),i=!1;t.vacation.followers&&(i=t.vacation.followers.split(",").includes(e.toString()));var c=Object(r.useState)(i),o=Object(s.a)(c,2),u=o[0],l=o[1];function d(t){return p.apply(this,arguments)}function p(){return(p=Object(nt.a)(at.a.mark((function t(a){var r,i;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r={userId:e,vacationId:a},u){t.next=7;break}return t.next=5,b.a.post(g.vacationUrl+"follow",r);case 5:t.next=9;break;case 7:return t.next=9,b.a.delete("".concat(g.vacationUrl,"unFollow/").concat(r.userId,"/").concat(r.vacationId));case 9:l(!u),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),403===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(y(),alert(ct.getError(t.t0)),n.push(I.loginUrl)):alert(ct.getError(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return Object(B.jsx)("div",{className:"VacationUserCard",children:Object(B.jsxs)(At.a,{className:a.root,children:[Object(B.jsxs)(wt.a,{children:[Object(B.jsx)(Nt.a,{className:a.media,image:g.vacationUrl+"images/"+t.vacation.imageFileName,title:t.vacation.destination}),Object(B.jsx)(Vt.a,{type:"button",className:u?a.primary+" FavoriteIcon":a.secondary+" FavoriteIcon",onClick:Object(nt.a)(at.a.mark((function e(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.vacation.vacationId);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))})]}),Object(B.jsxs)(kt.a,{className:"CardContent",children:[Object(B.jsxs)(Rt.a,{className:"countIcon",children:[Object(B.jsx)(Et.a,{fontSize:"large"}),Object(B.jsx)(lt.a,{className:"countFollowers",variant:"subtitle1",component:"h4",children:t.vacation.countFollows?t.vacation.countFollows:0})]}),Object(B.jsx)(lt.a,{gutterBottom:!0,variant:"h6",component:"h6",children:t.vacation.destination}),Object(B.jsx)(lt.a,{className:"descriptionContainer",variant:"body2",color:"textPrimary",component:"p",children:t.vacation.description}),Object(B.jsx)("br",{}),"From Date: ",new Date(t.vacation.fromDate).toDateString(),Object(B.jsx)("br",{}),"To Date: ",new Date(t.vacation.toDate).toDateString(),Object(B.jsxs)(lt.a,{variant:"subtitle1",component:"h4",children:["Price: ",t.vacation.price,"$"]})]})]})})},Pt=a(399),Tt=function(t){Object(St.a)(a,t);var e=Object(yt.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).unsubscribeFromStore=void 0,n.state={vacations:U.getState().vacationState.vacations,auth:U.getState().authState.auth},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var t=Object(nt.a)(at.a.mark((function t(){var e,a,r,i,c=this;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.state.auth.isLoggedIn){t.next=4;break}return alert("You are not authorized to access this page you have to Login"),t.abrupt("return",this.props.history.push(I.loginUrl));case 4:if(e=this.state.auth.user.userId,this.unsubscribeFromStore=U.subscribe((function(){var t=U.getState().vacationState.vacations;t.sort((function(t){return t.followers&&t.followers.includes(e.toString())?-1:1})),c.setState({vacations:t})})),0!==U.getState().vacationState.vacations.length){t.next=13;break}return t.next=9,b.a.get(g.vacationUrl);case 9:a=t.sent,(r=a.data).sort((function(t){return t.followers&&t.followers.includes(e.toString())?-1:1})),U.dispatch((o=r,{type:n.VacationsDownloaded,payload:o}));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),403===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(y(),alert(ct.getError(t.t0)),this.props.history.push(I.loginUrl)):alert(ct.getError(t.t0));case 18:case"end":return t.stop()}var o}),t,this,[[0,15]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(B.jsxs)("div",{className:"VacationsList",children:[!this.state.vacations.length&&Object(B.jsx)(Pt.a,{}),this.state.auth.user&&this.state.auth.user.isAdmin?this.state.vacations.map((function(t){return Object(B.jsx)(qt,{vacation:t},t.vacationId)})):this.state.vacations.map((function(t){return Object(B.jsx)(Dt,{vacation:t},t.vacationId)}))]})}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromStore&&this.unsubscribeFromStore()}}]),a}(r.Component),Ft=(a(347),a.p+"static/media/page404.8d5dafb4.png");var Ct=function(){return Object(B.jsxs)("div",{className:"Page404",children:[Object(B.jsx)("img",{src:Ft,alt:""}),Object(B.jsx)(o.b,{className:"homePageNav",to:I.homeUrl}),Object(B.jsx)(o.b,{className:"vacationPageNav",to:I.vacationListUrl})]})},Wt=(a(348),a(400)),Gt=a(401),Kt=a(402);var Ht=function(){return Object(B.jsxs)("div",{className:"Home",children:[Object(B.jsxs)("div",{className:"hero-text",children:[Object(B.jsx)("h1",{children:"I'm Roy Elmakies "}),Object(B.jsx)("h1",{children:"And Welcome to my Bookit Trip!!"})]}),Object(B.jsx)("a",{href:"https://www.linkedin.com/in/royelmakies/",children:Object(B.jsx)(Wt.a,{})}),Object(B.jsx)("a",{href:"https://github.com/RoyElm",children:Object(B.jsx)(Gt.a,{})}),Object(B.jsx)("a",{href:"mailto:roye456@gmail.com",children:Object(B.jsx)(Kt.a,{})})]})};var Mt=function(){return Object(B.jsx)("div",{className:"Routing",children:Object(B.jsxs)(tt.c,{children:[Object(B.jsx)(tt.a,{path:I.homeUrl,component:Ht,exact:!0}),Object(B.jsx)(tt.a,{path:I.vacationListUrl,component:Tt,exact:!0}),Object(B.jsx)(tt.a,{path:I.adminWatcherUrl,component:Ot,exact:!0}),Object(B.jsx)(tt.a,{path:I.addVacationUrl,component:gt,exact:!0}),Object(B.jsx)(tt.a,{path:I.editVacationUrl,component:ft,exact:!0}),Object(B.jsx)(tt.a,{path:I.loginUrl,component:ot,exact:!0}),Object(B.jsx)(tt.a,{path:I.registerUrl,component:st,exact:!0}),Object(B.jsx)(tt.a,{component:Ct,exact:!0})]})})};var zt=function(){return Object(r.useEffect)((function(){U.getState().authState.auth.isLoggedIn&&O.connect()})),Object(B.jsx)(o.a,{children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)("header",{children:Object(B.jsx)(_,{})}),Object(B.jsx)("main",{children:Object(B.jsx)(Mt,{})})]})})},Zt=(a(349),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,406)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))});c.a.render(Object(B.jsx)(zt,{}),document.getElementById("root")),Zt()}},[[350,1,2]]]);
//# sourceMappingURL=main.a72bbc75.chunk.js.map