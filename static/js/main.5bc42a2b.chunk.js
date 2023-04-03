(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(36)},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),c=n(7),i=n(4),s=n(16),l=n(15),u=(n(30),n(1)),d=n(2),h=n(5),f=n(3),b=n(6),g=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then(function(e){return e.json()})).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}},p=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e,n){return o.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},m=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.Component),O=(n(32),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,a=e.isPending,c=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(m,{searchChange:r}),o.a.createElement(v,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(w,null,o.a.createElement(E,{robots:c}))))}}]),t}(r.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(g())}}})(O),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S={searchField:""},C={robots:[],isPending:!0},k=(n(34),Object(l.createLogger)()),_=Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),N=Object(c.c)(_,Object(c.a)(s.a,k));Object(a.createRoot)(document.getElementById("root")).render(o.a.createElement(i.a,{store:N},o.a.createElement(R,null))),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends-redux","/service-worker.js");j?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.5bc42a2b.chunk.js.map