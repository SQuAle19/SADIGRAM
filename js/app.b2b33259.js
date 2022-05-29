(function(){"use strict";var t={786:function(t,e,r){var n=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld"),r("nav",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("b-navbar",{scopedSlots:t._u([{key:"brand",fn:function(){return[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])]},proxy:!0},{key:"start",fn:function(){return[r("b-navbar-item",{attrs:{href:"#"}},[t._v(" Home ")]),r("b-navbar-item",{attrs:{href:"#"}},[t._v(" Documentation ")]),r("b-navbar-dropdown",{attrs:{label:"Info"}},[r("b-navbar-item",{attrs:{href:"#"}},[t._v(" About ")]),r("b-navbar-item",{attrs:{href:"#"}},[t._v(" Contact ")])],1)]},proxy:!0},{key:"end",fn:function(){return[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-primary"},[r("strong",[t._v("Sign up")])]),r("a",{staticClass:"button is-light"},[t._v(" Log in ")])])])]},proxy:!0}])})],1)},s=[],u=r(1),c={},l=(0,u.Z)(c,i,s,!1,null,null,null),p=l.exports,f=n.Z.extend({components:{HelloWorld:p}}),m=f,v=(0,u.Z)(m,o,a,!1,null,null,null),d=v.exports,b=r(345),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},t._l(t.posts,(function(t,e){return r("CardView",{key:e,attrs:{post:t}})})),1)},g=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"container"},[r("div",{staticClass:"square",style:{background:"url("+t.post.authoravatarUrl+")","background-size":"cover"}}),r("div",[t._v(t._s(t.post.authorName))])]),r("img",{attrs:{src:t.post.postPictureUrl,width:"1000px"}}),r("br"),r("img",{attrs:{src:"pablo.svg",height:"30px"}}),r("img",{attrs:{src:"comment.svg",height:"30px"}}),r("img",{attrs:{src:"repost.svg",height:"30px"}})])},j=[],k=n.Z.extend({props:["post"]}),w=k,_=(0,u.Z)(w,y,j,!1,null,null,null),x=_.exports;let C=[{authorName:"Ogurets332",postPictureUrl:"https://i.ytimg.com/vi/mbD2jMjkHxQ/maxresdefault.jpg",authoravatarUrl:"https://i.ytimg.com/vi/mbD2jMjkHxQ/maxresdefault.jpg",countlikes:55,description:"бро ты достаточно сегодня потренировался"},{authorName:"bober555",postPictureUrl:"https://memasno.ru/uploads/posts/2021-09/bro-tebe-nado-trenirovatsja-mem-s-simplom-i-fejkovymi-prevju-4.jpg",authoravatarUrl:"https://memasno.ru/uploads/posts/2021-09/bro-tebe-nado-trenirovatsja-mem-s-simplom-i-fejkovymi-prevju-4.jpg",countlikes:57,description:"бро ты хорошо сегодня тренировался"},{authorName:"PABLO777",postPictureUrl:"https://sun9-88.userapi.com/s/v1/if2/Ieznsd8UX6vGGNu2yNhhC7WU_UZ80X1sjyW6UeYGBH3KhXeeomC6Ee04gSUAcLO1zX5MgBiribjqEg4wfVyK1gGB.jpg?size=604x340&quality=96&type=album",authoravatarUrl:"https://sun9-88.userapi.com/s/v1/if2/Ieznsd8UX6vGGNu2yNhhC7WU_UZ80X1sjyW6UeYGBH3KhXeeomC6Ee04gSUAcLO1zX5MgBiribjqEg4wfVyK1gGB.jpg?size=604x340&quality=96&type=album",countlikes:56,description:"Пацаны всегда отвечайите за базар"}];var Z=n.Z.extend({components:{CardView:x},data(){return{posts:C}}}),U=Z,O=(0,u.Z)(U,h,g,!1,null,null,null),P=O.exports;n.Z.use(b.Z);const E=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return r.e(443).then(r.bind(r,830))}}],A=new b.Z({mode:"history",base:"/SADIGRAM/",routes:E});var S=A,N=r(629);n.Z.use(N.ZP);var B=new N.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),G=r(480);r(588);n.Z.use(G.ZP),n.Z.config.productionTip=!1,new n.Z({router:S,store:B,Buefy:G.ZP,render:function(t){return t(d)}}).$mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,o,a]}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.595b4155.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sanjigram:";r.l=function(n,o,a,i){if(t[n])t[n].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+a){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+a),s.src=n),t[n]=[o];var f=function(e,r){s.onerror=s.onload=null,clearTimeout(m);var o=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/SADIGRAM/"}(),function(){var t={143:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var i=r.p+r.u(e),s=new Error,u=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,u,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)a=i[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},n=self["webpackChunksanjigram"]=self["webpackChunksanjigram"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(786)}));n=r.O(n)})();
//# sourceMappingURL=app.b2b33259.js.map