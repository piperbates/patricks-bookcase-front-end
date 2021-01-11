(this["webpackJsonpfront-end-react"]=this["webpackJsonpfront-end-react"]||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){},185:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},215:function(e,t,n){},311:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(0),a=n(30),i=n.n(a),o=(n(177),n(178),n(59));n(185);function s(){return Object(c.jsxs)("footer",{children:["Created by Piper Bates."," ",Object(c.jsx)("a",{href:"http://www.github.com/piperbates",children:"View on github"}),"."]})}function l(){var e=Object(o.b)(),t=e.loginWithRedirect;return e.isAuthenticated?Object(c.jsx)("p",{children:"Logged in"}):Object(c.jsxs)("div",{id:"login-box",children:[Object(c.jsx)("h1",{children:"Patricks Bookcase"}),Object(c.jsx)("button",{onClick:function(){return t()},className:"log-button",children:"Log In"}),Object(c.jsx)(s,{})]})}var d=n(67),j=n.n(d),b=n(87),u=n(83);n(187);function h(){var e=Object(o.b)(),t=e.logout;return e.isAuthenticated&&Object(c.jsx)("button",{id:"log-out-button",className:"log-button",onClick:function(){return t()},children:"Log Out"})}n(188);var p=n.p+"static/media/logo.648d723f.png",O=n(51),x=n(325),f=x.a.Search;function m(e){var t=e.nickname,n=e.bookCount,r=e.changeSearchText;function a(){return(a=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t?"search/"+t:"");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{className:"header-wrapper",id:"header-items-left",children:[Object(c.jsx)(O.b,{to:"/",children:Object(c.jsx)("img",{src:p,alt:"logo"})}),Object(c.jsxs)("span",{id:"welcome",className:"header-text",children:["Welcome ",t]}),Object(c.jsxs)("span",{id:"book-count",children:["Total Books: ",n," "]})]}),Object(c.jsxs)("div",{className:"header-wrapper",id:"header-items-right",children:[Object(c.jsx)(O.b,{to:"/add-book",children:Object(c.jsx)("button",{id:"add-book-button",children:"Add New Book"})}),Object(c.jsx)("div",{id:"search-box",children:Object(c.jsx)(f,{placeholder:"input search text",onSearch:function(e){!function(e){a.apply(this,arguments)}(e)},allowClear:!0,id:"search"})}),Object(c.jsx)(h,{})]})]})}var g=n(323);n(214),n(215);function k(e){var t=e.visability,n=e.data,r=(e.nickname,[{title:"Title",dataIndex:"title",key:"title",render:function(e,t){return Object(c.jsx)(O.b,{to:"/book/".concat(t.id),children:e})}},{title:"Author",dataIndex:"author",key:"author"},{title:"Genre",dataIndex:"genre",key:"genre"},{title:"Read?",dataIndex:"read",key:"read",render:function(e,t){return t.read?"Read":"Not read"}},{title:"Series",dataIndex:"series",key:"series",render:function(e,t){return t.series?t.series:""}},{title:"Leant?",dataIndex:"leant",key:"leant"}]);return t?Object(c.jsxs)("div",{id:"library-box",children:[Object(c.jsx)("h1",{children:"Patrick's library"}),Object(c.jsx)(g.a,{columns:r,pagination:{position:["topRight","bottomRight"]},dataSource:n,id:"full-library-table"})]}):Object(c.jsx)("p",{children:"..."})}var v=n(32),y=n(74),w=n(324),I=n(326),S=n(92),C=n(46);n(311);function T(){var e=w.a.useForm(),t=Object(u.a)(e,1)[0],n={wrapperCol:{offset:8,span:16}};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Add New Book"}),Object(c.jsx)("div",{id:"#add-book-form",children:Object(c.jsxs)(w.a,Object(y.a)(Object(y.a)({form:t},{labelCol:{span:8},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){fetch("https://patricks-bookshelf.herokuapp.com/add",{method:"post",body:JSON.stringify({title:e.Title,author:e.Author,genre:e.Genre,read:e.read,series:e.Series,leant:e.Leant}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){var c;c=e.Title,I.b.success("".concat(c," has been added to the library")),t.resetFields()})).catch((function(e){I.b.error("This service is currently unavailable. Please try again later."),console.log(e,"Beepboop")})),console.log({book:e})},onFinishFailed:function(e){I.b.warning("Something went wrong. Please try again."),console.log({errorInfo:e})},children:[Object(c.jsx)(w.a.Item,{label:"Title",name:"Title",rules:[{required:!0,message:"Please input the book title"}],children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(w.a.Item,{label:"Author",name:"Author",rules:[{required:!0,message:"Please input author name"}],children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(w.a.Item,{label:"Genre",name:"Genre",rules:[{required:!0,message:"Please input genre"}],children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(w.a.Item,Object(y.a)(Object(y.a)({},n),{},{name:"read",valuePropName:"checked",children:Object(c.jsx)(S.a,{children:"I have read this book"})})),Object(c.jsx)(w.a.Item,{label:"Series",name:"Series",rules:[{required:!1,message:"Input series if necessary"}],children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(w.a.Item,{label:"Leant",name:"Leant",rules:[{required:!1,message:"Who have you leant this book to, if anyone"}],children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(w.a.Item,Object(y.a)(Object(y.a)({},n),{},{children:Object(c.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})]})}var N=n(327);function P(e){var t=e.book;return t?(console.log(t),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsxs)("h2",{children:["By ",t.author]}),t.series?Object(c.jsxs)("h3",{children:["Part of the ",t.series," series."]}):"",Object(c.jsxs)("p",{children:[t.genre," | ",t.read?"Read":"Not read"," | Leant to:",t.leant?t.leant:" No one"]}),Object(c.jsxs)("p",{children:["Edit Book |",Object(c.jsx)(N.a,{title:"Are you sure to delete ".concat(t.title,"?"),onConfirm:function(){var e;e=t.id,fetch("https://patricks-bookshelf.herokuapp.com/delete/".concat(e),{method:"delete",body:JSON.stringify({}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e,"my error")})),I.b.success("".concat(t.title," has been deleted")).then(window.location.href="/")},onCancel:function(){return e=t.title,void I.b.error("".concat(e," has not been deleted"));var e},okText:"Yes",cancelText:"No",children:Object(c.jsx)("button",{class:"red",children:"Delete Book"})})]})]})):Object(c.jsx)("p",{children:"..."})}var L="https://patricks-bookshelf.herokuapp.com";var B=function(e){var t=e.user,n=Object(v.f)().pathname,a=Object(r.useState)(""),i=Object(u.a)(a,2),o=i[0],l=i[1],d=Object(r.useState)({}),h=Object(u.a)(d,2),p=h[0],O=h[1],x=Object(r.useState)(""),f=Object(u.a)(x,2),g=f[0],y=f[1];function w(){return(w=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"/book/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,O(c.payload);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"/").concat(g));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.payload);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]),Object(r.useEffect)((function(){var e=n.split("/").pop();"number"===typeof(e=parseInt(e))&&function(e){w.apply(this,arguments)}(e)}),[n]),Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{nickname:t.nickname,bookCount:o?o.length:"...",changeSearchText:y}),Object(c.jsx)("main",{children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(k,{visability:!!o,data:o,nickname:t.nickname})}),Object(c.jsx)(v.a,{path:"/add-book",children:Object(c.jsx)(T,{})}),Object(c.jsx)(v.a,{path:"/book/:id",children:Object(c.jsx)(P,{book:p?p[0]:""})})]})}),Object(c.jsx)(s,{})]})};var A=function(){console.log("Hi");var e=Object(o.b)(),t=e.user,n=e.isAuthenticated;return e.isLoading?Object(c.jsx)("div",{children:"Loading..."}):(n||console.log("Logged out"),n?n&&Object(c.jsx)("div",{children:Object(c.jsx)(B,{user:t})}):Object(c.jsx)(l,{}))},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,328)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(o.a,{domain:"dev-cqq8w3s0.eu.auth0.com",clientId:"xkpMY496PP4G0qc3qm3uRaPvazNMpbJ5",redirectUri:window.location.origin,children:Object(c.jsx)(O.a,{children:Object(c.jsx)(A,{})})}),document.getElementById("root")),q()}},[[320,1,2]]]);
//# sourceMappingURL=main.b4d20145.chunk.js.map