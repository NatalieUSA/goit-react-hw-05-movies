"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[14],{14:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),o=t(87);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var p="search-movie-form_wrap__2EMvc",l="search-movie-form_form__kUrQn",d="search-movie-form_input__yHj1e",v="search-movie-form_btn__QHkSF",m=t(184),h=function(e){var r=e.onSubmit,t=(0,s.useState)({search:""}),n=(0,a.Z)(t,2),c=n[0],u=n[1],h=(0,o.lr)(),b=(0,a.Z)(h,2),g=b[0],x=b[1],y=g.get("query")||"";console.log(y);var _=function(){u({search:""})};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:p,children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},c)),u({search:""}),_()},className:l,children:[(0,m.jsx)("input",{className:d,name:"search",value:c.search,onChange:function(e){var r=e.target,t=r.name,n=r.value;if(console.log(r),console.log(t),u(i({},t,n)),""===n)return x({});x({search:n})},placeholder:"\u0442\u0443\u0442 \u0442\u0438 \u043c\u043e\u0436\u0435\u0448 \u0437\u043d\u0430\u0439\u0442\u0438 \u043b\u044e\u0431\u0435 \u043a\u0456\u043d\u043e ;-))",required:!0}),(0,m.jsx)("button",{className:v,type:"submit",children:"SEARCH"})]})})})},b=t(632),g=t(518),x=t(999),y=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],i=(0,s.useState)(!1),f=(0,a.Z)(i,2),p=f[0],l=f[1],d=(0,s.useState)(null),v=(0,a.Z)(d,2),y=v[0],_=v[1],j=(0,o.lr)(),w=(0,a.Z)(j,2),k=w[0],O=w[1],S=k.get("search");(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,(0,b.gH)(S);case 4:r=e.sent,c(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_(e.t0.message);case 11:return e.prev=11,e.abrupt("return",l(!1));case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();S&&e()}),[S]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{onSubmit:function(e){var r=e.search;O({search:r})}}),t.length>0&&(0,m.jsx)(g.Z,{items:t}),p&&(0,m.jsx)(x.a,{}),y&&(0,m.jsxs)("p",{children:["...error load ...load failed ",y]})]})}},518:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(87),a=t(689),c="movie-list_list__x5AH+",u="movie-list_link__4D6I9",s=t(184),o=function(e){var r=e.items,t=(0,a.TH)(),o=r.map((function(e){var r=e.id,a=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(n.rU,{state:{from:t},to:"/movies/".concat(r),className:u,children:a})},r)}));return(0,s.jsx)("ol",{className:c,children:o})},i=o;o.defaultProps={items:[]}},632:function(e,r,t){t.d(r,{IQ:function(){return i},JN:function(){return s},TP:function(){return o},Tn:function(){return f},gH:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,u.get("/trending/movie/week?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US");case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"}/credits?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?query=".concat(r,"&api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=14.44f1adeb.chunk.js.map