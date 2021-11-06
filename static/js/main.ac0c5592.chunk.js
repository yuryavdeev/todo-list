(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),s=n.n(o),i=n(2),l=(n(16),c.a.createContext()),r=(n(17),n(0)),d=c.a.memo((function(e){var t=e.addTask,n=e.placeholder,a=c.a.useContext(l),o=c.a.useState(""),s=Object(i.a)(o,2),d=s[0],u=s[1],j=c.a.useState(""),b=Object(i.a)(j,2),m=b[0],h=b[1],f=c.a.useState(""),p=Object(i.a)(f,2),O=p[0],x=p[1];c.a.useEffect((function(){d&&(d.length>4?x(""):x("it requires 5 symbols, but no more than 50"))}),[d]);return Object(r.jsx)("div",{className:"form",children:Object(r.jsxs)("form",{className:"form__container",onSubmit:function(e){e.preventDefault(),O||(a.filter((function(e){return e.title.toLowerCase()===d.toLowerCase()})).length?x("The same task has already been added!"):(t(d),u(""),h("")))},children:[Object(r.jsx)("label",{className:"form__label",htmlFor:"input_text"}),Object(r.jsx)("input",{className:"form__input",id:"input_text",type:"text",placeholder:n,value:m,required:!0,onChange:function(e){h(e.target.value),u(e.target.value.trim())},minLength:"5",maxLength:"50",pattern:"^[0-9A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]{5,50}$",title:"The field can only contain latin, cyrillic, numbers, space or hyphen"}),O&&Object(r.jsx)("span",{style:{color:"red"},children:O}),d||!O?Object(r.jsx)("button",{className:"form__btn btn waves-effect waves-light",type:"submit",children:"add"}):Object(r.jsx)("button",{disabled:!0,className:"form__btn btn waves-effect waves-light",type:"submit",children:"add"})]})})})),u=(n(19),n(3)),j=n(7),b=(n(20),n(5)),m=n.p+"static/media/pencil.24e7703b.svg",h=["completed"],f=["title"],p=c.a.memo((function(e){var t=e.index,n=e.task,a=e.handleTaskChange,o=e.handleRemoveTask,s=c.a.useState(""),l=Object(i.a)(s,2),p=l[0],O=l[1],x=c.a.useState(!1),v=Object(i.a)(x,2),g=v[0],_=v[1];c.a.useEffect((function(){n.date?O(b.DateTime.fromISO(n.date).setLocale("en").toFormat("dd LLL T")):O(b.DateTime.fromISO((new Date).toISOString()).setLocale("en").toFormat("dd LLL T"))}),[n]);return Object(r.jsxs)("li",{className:"todo-item",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"todo-item__checkbox",type:"checkbox",onChange:function(e){n.completed;var t=Object(j.a)(n,h);a(Object(u.a)(Object(u.a)({},t),{},{completed:e.target.checked}))},checked:n.completed,disabled:g}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("p",{className:"todo-item__text ".concat(n.completed&&"todo-item__text_crossed-out"," ").concat(g&&"todo-item__text_color"),children:[t+". "+n.title.toUpperCase(),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"todo-item__time",children:p})]}),Object(r.jsx)("img",{className:"todo-item__pencil",src:m,alt:"edit task",onClick:function(){_(!g)}}),Object(r.jsx)("button",{className:"waves-effect waves-light btn todo-item__btn",onClick:function(){o(n)},children:"x"}),g&&Object(r.jsx)(d,{addTask:function(e){n.title;var t=Object(j.a)(n,f);a(Object(u.a)(Object(u.a)({},t),{},{title:e})),_(!1)},placeholder:n.title.toUpperCase()})]})})),O=c.a.memo((function(e){var t=e.handleChangeTodosList,n=e.isSubmitting,a=c.a.useContext(l),o=c.a.useState(!1),s=Object(i.a)(o,2),d=s[0],u=s[1],j=c.a.useState([]),b=Object(i.a)(j,2),m=b[0],h=b[1],f=c.a.useState("all"),O=Object(i.a)(f,2),x=O[0],v=O[1];c.a.useEffect((function(){var e=[];e="completed"===x?a.filter((function(e){return e.completed})):"not-completed"===x?a.filter((function(e){return!e.completed})):a,h(e.map((function(e,t){return Object(r.jsx)(p,{index:t+1,task:e,handleTaskChange:g,handleRemoveTask:_},e.id)})))}),[x,a,d]);var g=function(e){var n=a;n.splice(n.findIndex((function(t){return t.id===e.id})),1,e),t(n),u(!d)},_=function(e){t(a.filter((function(t){return t.id!==e.id})))};return Object(r.jsxs)("div",{className:"todo-list",children:[Object(r.jsxs)("select",{className:"todo-list__select",defaultValue:"all",onChange:function(e){return v(e.target.value)},style:{display:"block",width:"50%",height:"32px"},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"not-completed",children:"Not completed"})]}),m.length?Object(r.jsx)("ul",{children:m}):!n&&Object(r.jsx)("p",{children:"You have no tasks added!"})]})})),x=(n(21),function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}),v=n(6),g=n.n(v),_=n(9),k=n(10),T=n(11),C=function(){function e(t){var n=t.url;Object(k.a)(this,e),this._url=n}return Object(T.a)(e,[{key:"getTasks",value:function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._url),{method:"GET","Content-Type":"application/json"});case 2:return t=e.sent,e.abrupt("return",t.ok&&t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),S=new C({url:"https://jsonplaceholder.typicode.com/todos?_limit=3"}),y=function(){var e=c.a.useState([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),s=Object(i.a)(o,2),u=s[0],j=s[1];c.a.useEffect((function(){j(!0),S.getTasks().then((function(e){e.length&&a(e)})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))}),[]);return Object(r.jsx)(l.Provider,{value:n,children:Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{children:"My Todo App"}),Object(r.jsx)(d,{addTask:function(e){a(n.concat({completed:!1,id:new Date,title:e,userId:1,date:(new Date).toISOString()}))},placeholder:"...todo"}),u&&Object(r.jsx)(x,{}),Object(r.jsx)(O,{handleChangeTodosList:function(e){a(e)},isSubmitting:u})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.ac0c5592.chunk.js.map