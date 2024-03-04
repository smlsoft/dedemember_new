(function(){"use strict";var e={318:function(e,n,t){var r=t(963),i=t(252);function o(e,n,t,r,o,l){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var l={name:"App"},s=t(744);const a=(0,s.Z)(l,[["render",o]]);var c=a,u=t(201),d=t(577),f=t.p+"img/dedeim.0ca23b50.jpg",g=t(262),p=t(121),v=t(656);const m={class:"relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"},h={class:"rounded-lg bg-gray-50 shadow-2xl ring-1 pt-2 ring-gray-900/5 mx-4 my-12"},y={class:"flex flex-wrap"},x=(0,i.uE)('<div class="flex-auto pl-6 pt-6"><div class="flex items-center justify-center"><div><img class="h-16 w-16 rounded-xl mx-auto" src="'+f+'" alt="User&#39;s picture"></div></div><div class="flex items-center justify-center"><div><div class="pt-6 rounded-xl mx-auto">Welcome to DEDE member</div></div></div></div><div class="flex-none self-end px-6 pt-4"><dt class="sr-only"></dt></div>',2),b={class:"flex-auto pl-6 pt-6"},w={class:"flex items-center"},_=["src"],k={class:"ml-3"},j={class:"text-sm font-medium text-gray-700 group-hover:text-gray-900"},O={class:"flex items-center mt-3"},H={class:"ml-3"},Z=(0,i._)("div",{class:"flex items-center mt-3"},[(0,i._)("div",{class:"ml-3"},[(0,i._)("input",{type:"text",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Phone number"})])],-1),D={class:"mt-4 flex w-full flex-none gap-x-4 px-6"},E={class:"flex-none"},M={class:"sr-only"},P=(0,i._)("div",{class:"mt-6 border-t border-gray-900/5 px-6 py-6"},[(0,i._)("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},[(0,i.Uk)("Enjoy with your meal "),(0,i._)("span",{"aria-hidden":"true"})])],-1),S=(0,i._)("div",{class:"absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"},null,-1),T=(0,i._)("div",{class:"absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-orange-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"},null,-1),z=(0,i._)("div",null,null,-1);var I={__name:"HelloWorld",setup(e){const n=(0,g.iH)(""),t=(0,g.iH)(""),r=(0,g.iH)(""),o=(0,g.iH)(""),l=(0,g.iH)(""),s=(0,g.iH)(""),a=(0,g.iH)(!0);async function c(){try{const e=await v.Z.getFriendship();return s.value=e,s.value.friendFlag}catch(e){return console.error("Error fetching friendship status:",e),!1}}async function u(){a.value=await c(),console.log(a.value),0==a.value?alert("please add friend"):C()}function f(){console.log("handleNext")}function I(){v.Z.init({liffId:"2001677131-XKqMJqML"},(()=>{v.Z.isLoggedIn()&&(C(),u())}),(e=>console.error(e)))}function C(){l.value=v.Z.getAccessToken(),console.log("lift Token: ",l.value),v.Z.getProfile().then((e=>{console.log(e),o.value=e.displayName,n.value=e.pictureUrl,r.value=e.statusMessage,t.value=e.userId})).catch((e=>console.error(e))),U()}function U(){p.Z.get("https://api.dev.dedepos.com",{}).then((e=>{console.log(e)}))}return(0,i.bv)((()=>{I()})),(e,r)=>{const l=(0,i.up)("CalendarDaysIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("section",m,[(0,i._)("div",h,[(0,i._)("dl",y,[x,(0,i._)("div",b,[(0,i._)("div",w,[(0,i._)("div",null,[n.value?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"inline-block h-9 w-9 rounded-full",src:n.value,alt:"User's picture"},null,8,_)):(0,i.kq)("",!0)]),(0,i._)("div",k,[(0,i._)("p",j,(0,d.zw)(o.value),1)])]),(0,i._)("div",O,[(0,i._)("div",H," Shop ID: "+(0,d.zw)(e.$route.params.shopid),1)]),Z,(0,i._)("div",{class:"items-center mt-3"},[(0,i._)("div",{class:"ml-3"},[(0,i._)("button",{type:"button",class:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:f},"Next")])])]),(0,i._)("div",D,[(0,i._)("dt",E,[(0,i._)("span",M,(0,d.zw)(t.value),1),(0,i.Wm)(l,{class:"h-6 w-5 text-gray-400","aria-hidden":"true"})])])]),P]),S,T]),z],64)}}};const C=I;var U=C,q=t(638);const F=[{path:"/:shopid",component:U}],L=(0,u.p7)({history:(0,u.r5)(),routes:F}),N=(0,r.ri)(c);N.use(q.Z),N.use(L),N.mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,a=0;a<r.length;a++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/dedememberLiff_new/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,l=r[0],s=r[1],a=r[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(a)var u=a(t)}for(n&&n(r);c<l.length;c++)o=l[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},r=self["webpackChunknewliff"]=self["webpackChunknewliff"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(318)}));r=t.O(r)})();