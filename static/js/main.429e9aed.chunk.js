(this.webpackJsonptotal=this.webpackJsonptotal||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),r=(c(9),c(2)),j=c.p+"static/media/loadingimg.c7d9f081.gif",l=(c(10),c(0));var d=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(r.a)(a,2),d=i[0],m=i[1],b=Object(n.useState)(!1),o=Object(r.a)(b,2),O=o[0],u=o[1],h=Object(n.useState)(!0),x=Object(r.a)(h,2),f=x[0],g=x[1];Object(n.useEffect)((function(){s([]),fetch("https://reqres.in/api/users?delay=3").then((function(e){return e.json()})).then((function(e){return g(!1),e.data.map((function(e){return s((function(t){return t.concat(e)}))}))}))}),[]);var v=Object(n.useState)(),_=Object(r.a)(v,2),p=_[0],N=_[1],S=Object(n.useState)(!1),k=Object(r.a)(S,2),y=k[0],F=k[1],C=Object(n.useState)(!1),w=Object(r.a)(C,2),B=w[0],E=w[1];function I(e){u(!0),N(e)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container-fluid App",children:[Object(l.jsxs)("div",{className:"sort-menu",children:[Object(l.jsx)("span",{className:"sort-by",children:"Sort By :"}),Object(l.jsxs)("div",{className:"sort",children:[Object(l.jsx)("button",{onClick:function(){m(!1),E(!1),F(!0)},children:"First_name"}),Object(l.jsx)("button",{onClick:function(){m(!1),F(!1),E(!0)},children:"Last_name"})]})]}),Object(l.jsxs)("div",{className:"row allInfo",children:[f?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"...Loading"}),Object(l.jsx)("img",{className:"imag",src:j})]}):"",d?c.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{onClick:function(){return I(t)},className:"col-md-4 info gy-3 gx-2",children:[Object(l.jsx)("div",{className:"imgmain",children:Object(l.jsx)("img",{src:e.avatar})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[e.first_name," ",e.last_name]})})]},t)})})):"",y?(c.sort((function(e,t){return e.first_name>t.first_name?1:e.first_name<t.first_name?-1:0})),c.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{onClick:function(){return I(t)},className:"col-md-4 info gy-3 gx-2",children:[Object(l.jsx)("div",{className:"imgmain",children:Object(l.jsx)("img",{src:e.avatar})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[e.first_name," ",e.last_name]})})]},t)})}))):"",B?(c.sort((function(e,t){return e.last_name>t.last_name?1:e.last_name<t.last_name?-1:0})),c.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{onClick:function(){return I(t)},className:"col-md-4 info gy-3 gx-2",children:[Object(l.jsx)("div",{className:"imgmain",children:Object(l.jsx)("img",{src:e.avatar})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[e.first_name," ",e.last_name]})})]},t)})}))):""]})]}),O?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("h1",{children:[c[p].first_name," ",c[p].last_name]}),Object(l.jsx)("div",{className:"imgg",children:Object(l.jsx)("img",{src:c[p].avatar})}),Object(l.jsx)("h2",{children:c[p].email})]})})}):""]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.429e9aed.chunk.js.map