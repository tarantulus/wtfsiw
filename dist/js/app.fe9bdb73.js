(function(){"use strict";var e={546:function(e,r,n){var o=n(9242),t=n(3396);function i(e,r){const n=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(n)}var a=n(89);const s={},c=(0,a.Z)(s,[["render",i]]);var u=c,l=n(5431);(0,l.z)("/wtfsiw/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var v=n(678);const d={class:"home"};function f(e,r,n,o,i,a){const s=(0,t.up)("SearchHeader"),c=(0,t.up)("Container");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(s,{buttonColour:e.red,onSearch:r[0]||(r[0]=async e=>await a.searchMovies(e))},null,8,["buttonColour"]),(0,t.Wm)(c,{movies:i.movies},null,8,["movies"])])}var h=n(7139);const p=(0,t._)("h1",null,"What the fuck should I watch?",-1);function m(e,r,n,i,a,s){return(0,t.wg)(),(0,t.iD)("header",null,[p,(0,t._)("form",{onSubmit:r[1]||(r[1]=(0,o.iM)((r=>e.$emit("search",this.searchTerm)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"text",id:"search","onUpdate:modelValue":r[0]||(r[0]=e=>a.searchTerm=e),placeholder:"search"},null,512),[[o.nr,a.searchTerm]]),(0,t._)("button",{class:"btn",style:(0,h.j5)({background:n.buttonColour})}," Search ",4)],32)])}var w={name:"SearchHeader",emits:["search"],props:{text:String,buttonColour:String},data(){return{searchTerm:""}}};const g=(0,a.Z)(w,[["render",m]]);var b=g;function y(e,r,n,o,i,a){const s=(0,t.up)("Card");return(0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.movies,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t.Wm)(s,{movie:e},null,8,["movie"])])))),128)}const k={class:"card"},C=["src"];function O(e,r,n,o,i,a){return(0,t.wg)(),(0,t.iD)("div",k,[(0,t._)("img",{src:n.movie.image},null,8,C),(0,t._)("p",null,(0,h.zw)(n.movie.title)+" "+(0,h.zw)(n.movie.year??n.movie.description),1)])}var _={name:"Card",props:{movie:Object}};const A=(0,a.Z)(_,[["render",O],["__scopeId","data-v-78c114b8"]]);var P=A,j={name:"Container",props:{movies:Array},components:{Card:P}};const M=(0,a.Z)(j,[["render",y],["__scopeId","data-v-7d9804ab"]]);var S=M,I={name:"HomeView",components:{SearchHeader:b,Container:S},data(){return{movies:[],APIKEY:"k_5zh0b0pw"}},async created(){this.movies=await this.getPopularMovies()},methods:{async getPopularMovies(){const e="https://imdb-api.com/en/API/MostPopularMovies/"+this.APIKEY;var r=await this.callApi(e);return console.log(r.items),r.items},async searchMovies(e){console.log("searching");const r="https://imdb-api.com/en/API/SearchMovie/"+this.APIKEY;var n=await this.callApi(r+"/"+e);this.movies=n.results,null===n.results&&await this.getPopularMovies()},async callApi(e){const r=await fetch(e),n=await r.json();return n}}};const x=(0,a.Z)(I,[["render",f]]);var T=x;const D=[{path:"/",name:"home",component:T}],E=(0,v.p7)({history:(0,v.PO)("/wtfsiw/"),routes:D});var H=E;(0,o.ri)(u).use(H).mount("#app")}},r={};function n(o){var t=r[o];if(void 0!==t)return t.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(r,o,t,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],t=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=t();void 0!==u&&(r=u)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,t,i]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var o in r)n.o(r,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,o){var t,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(r){return 0!==e[r]}))){for(t in s)n.o(s,t)&&(n.m[t]=s[t]);if(c)var l=c(n)}for(r&&r(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkwtfsiw"]=self["webpackChunkwtfsiw"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(546)}));o=n.O(o)})();
//# sourceMappingURL=app.fe9bdb73.js.map