"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{518:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(87),a=r(689),u="movie-list_list__x5AH+",c="movie-list_link__4D6I9",i=r(184),s=function(e){var n=e.items,r=(0,a.TH)(),s=n.map((function(e){var n=e.id,a=e.title;return(0,i.jsx)("li",{children:(0,i.jsx)(t.rU,{state:{from:r},to:"/movies/".concat(n),className:c,children:a})},n)}));return(0,i.jsx)("ol",{className:u,children:s})},o=s;s.defaultProps={items:[]}},149:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(433),a=r(413),u=r(861),c=r(439),i=r(757),s=r.n(i),o=r(791),f=r(518),d=r(632),p=r(184),l=function(){var e=(0,o.useState)({items:[],loading:!1,error:null}),n=(0,c.Z)(e,2),r=n[0],i=n[1];(0,o.useEffect)((function(){var e=function(){var e=(0,u.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0,error:null})})),e.prev=1,e.next=4,(0,d.JN)();case 4:n=e.sent,i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[].concat((0,t.Z)(e.items),(0,t.Z)(n))})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i((function(n){return(0,a.Z)((0,a.Z)({},n),{},{error:e.t0})}));case 11:return e.prev=11,i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]);var l=r.items,v=r.loading,h=r.error;return(0,p.jsxs)("div",{children:[l.length&&(0,p.jsx)(f.Z,{items:l}),v&&(0,p.jsx)("p",{children:"...load posts"}),h&&(0,p.jsx)("p",{children:"...error load posts...posts load failed"})]})},v="home-page_wrap__k-DJY",h=function(){return(0,p.jsx)("div",{className:v,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Trending movies of the last week"}),(0,p.jsx)(l,{})]})})}},632:function(e,n,r){r.d(n,{IQ:function(){return o},JN:function(){return i},TP:function(){return s},Tn:function(){return f},gH:function(){return d}});var t=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r,t=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,c.get("/trending/movie/week?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US");case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"}/credits?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/reviews?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(n,"&api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.4e9c403f.chunk.js.map