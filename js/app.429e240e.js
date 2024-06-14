(function(e){function t(t){for(var r,s,l=t[0],o=t[1],c=t[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1291:function(e,t,a){"use strict";a("81de")},3839:function(e,t,a){"use strict";a("647b")},"3ab3":function(e,t,a){"use strict";a("b1e6")},"48eb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("div",{staticClass:"container",attrs:{id:"main"}},[a("router-view")],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Cite.GG")]),e._m(0)],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("a",{attrs:{href:"https://github.com/beomi/find-my-reference",target:"_blank"}},[a("button",{staticClass:"btn btn-info"},[e._v(" Github "),a("i",{staticClass:"bi-github"})])])])}],o={name:"Header"},c=o,p=(a("3839"),a("2877")),u=Object(p["a"])(c,s,l,!1,null,"463f3878",null),d=u.exports,f={name:"App",components:{Header:d}},m=f,h=(a("1291"),Object(p["a"])(m,i,n,!1,null,"1401f23b",null)),_=h.exports,v=a("95bf"),b=(a("8b78"),a("bc3a")),y=a.n(b),g=a("8c4f"),I=a("cd4e"),C=(a("ed27"),a("58ca")),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("div",[a("small",{staticClass:"alert-light"},[e._v(" Search with arXiv URL or DOI urls (example: https://arxiv.org/abs/2005.12503) ")]),a("autocomplete",{attrs:{search:e.search,autoSelect:!0,placeholder:"Find your Reference! 🌟","aria-label":"Find your Reference! 🌟"},on:{submit:e.onSubmit}})],1),a("div",{staticClass:"history"},[a("button",{staticClass:"btn btn-sm btn-danger right",on:{click:e.clearHistory}},[e._v("Clear History "),a("i",{staticClass:"bi bi-trash-fill"})]),e._m(0),e.history.length?a("div",{staticClass:"card"},e._l(e.history,(function(t){return a("ul",{key:t.paperId,staticClass:"list-group list-group-flush"},[a("router-link",{attrs:{to:"/paper?q="+t.paperId}},[a("li",{staticClass:"list-group-item"},[a("strong",[e._v(e._s(t.title))]),e._v(" @ "+e._s(t.venue)+" "),a("small",[e._v("("+e._s(t.year)+")")])])])],1)})),0):a("div",{staticClass:"alert alert-light",attrs:{role:"alert"}},[e._v(" No history yet 🤗 ")])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",[e._v("History "),a("small",[e._v("(on your browser!)")])])}],k={name:"HelloWorld",data(){return{history:window.localStorage.getItem("history")?JSON.parse(window.localStorage.getItem("history")):[]}},metaInfo(){return{title:"Cite.GG"}},methods:{clearHistory(){this.history=[],window.localStorage.setItem("history","[]")},search(e){return[e]},async onSubmit(e){await this.$router.push({path:"/paper",query:{q:e}})}}},q=k,R=(a("3ab3"),Object(p["a"])(q,w,x,!1,null,"6a799f42",null)),O=R.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v(e._s(e.paperInfo.title))]),a("h5",[e._v("Published at "+e._s(e.paperInfo.venue)+", "+e._s(e.paperInfo.year))]),a("small",[e._v("(paper_id: "+e._s(e.paperInfo.paperId)+")")]),a("div",[a("a",{attrs:{target:"blank",href:e.paperInfo.url}},[e._v(e._s(e.paperInfo.url))])]),a("div",{staticClass:"detail"},[a("h3",[e._v("Authors")]),a("ul",e._l(e.paperInfo["authors"],(function(t){return a("li",{key:t["authorId"]},[a("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.name))])])})),0)]),a("div",{staticClass:"detail"},[a("h3",[e._v("Abstract")]),e._v(" "+e._s(e.paperInfo.abstract)+" ")]),a("div",{staticClass:"detail"},[a("div",{staticClass:"form-floating"},[e._m(0),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper_query_limits,expression:"paper_query_limits"}],staticClass:"form-check-input",attrs:{value:"10",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"},domProps:{checked:e._q(e.paper_query_limits,"10")},on:{change:function(t){e.paper_query_limits="10"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault1"}},[e._v(" 10 (default: takes ~10s) ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper_query_limits,expression:"paper_query_limits"}],staticClass:"form-check-input",attrs:{value:"20",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"},domProps:{checked:e._q(e.paper_query_limits,"20")},on:{change:function(t){e.paper_query_limits="20"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault2"}},[e._v(" 20 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper_query_limits,expression:"paper_query_limits"}],staticClass:"form-check-input",attrs:{value:"30",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault3"},domProps:{checked:e._q(e.paper_query_limits,"30")},on:{change:function(t){e.paper_query_limits="30"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault3"}},[e._v(" 30 ")])])]),e._m(1),0===e.paperInfo.citations.length?a("div",[a("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[e._v(" No citations found. ")])]):e.commonReference.length?a("div",[a("CommonReference",{attrs:{dataset:e.commonReference}})],1):e.paperInfo.citations.length>=e.paper_query_limits?a("div",[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" This paper has too many citations("+e._s(e.paperInfo.citations.length)+") to get common references :( "),a("br"),e._v(" Plz try with less-cited(~"+e._s(e.paper_query_limits)+") paper to get common refs. ")])]):e.isQueryFailed?a("div",[a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[e._v(" Timeout occured! (Maybe too much citations..) ")])]):a("div",[a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[e._v(" Please wait to get Common Reference data! (it will takes some time...) ")])])]),a("div",{staticClass:"detail"},[e._m(2),a("ReferenceTable",{attrs:{dataset:e.paperInfo.citations}})],1),a("div",{staticClass:"detail"},[e._m(3),a("ReferenceTable",{attrs:{dataset:e.paperInfo.references}})],1)])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("strong",[e._v("Query Limits")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v(" 🔍 Common Reference "),a("small",[e._v("(Click cell to open semantic scholar url)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v(" Citations "),a("small",[e._v("(Click cell to open semantic scholar url)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v(" References "),a("small",[e._v("(Click cell to open semantic scholar url)")])])}],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-good-table",{attrs:{columns:e.columns,rows:e.dataset,"pagination-options":{enabled:!0},"sort-options":{enabled:!0,initialSortBy:{field:"count",type:"desc"}},theme:"polar-bear"},on:{"on-cell-click":e.onCellClick}})],1)},j=[],E={name:"CommonReference",props:["dataset"],methods:{onCellClick(e){const t=this.$router.resolve({path:"/paper",query:{q:e.row.paperId}});window.open(t.href,"_blank")}},data(){return{columns:[{label:"Count #",field:"count",type:"number"},{label:"Title",field:"title"},{label:"doi",field:"doi"},{label:"Venue",field:"venue"},{label:"Year",field:"year",type:"number"},{label:"paperId",field:"paperId",hidden:!0}]}}},D=E,T=Object(p["a"])(D,P,j,!1,null,null,null),H=T.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-good-table",{attrs:{columns:e.columns,rows:e.dataset,"pagination-options":{enabled:!0},theme:"polar-bear"},on:{"on-cell-click":e.onCellClick}})],1)},M=[],F={name:"ReferenceTable",props:["dataset"],methods:{onCellClick(e){const t=this.$router.resolve({path:"/paper",query:{q:e.row.paperId}});window.open(t.href,"_blank")}},data(){return{columns:[{label:"Title",field:"title"},{label:"arXiv ID",field:"arxivId"},{label:"doi",field:"doi"},{label:"Venue",field:"venue"},{label:"Year",field:"year",type:"number"},{label:"paperId",field:"paperId",hidden:!0}]}}},G=F,J=Object(p["a"])(G,N,M,!1,null,null,null),Q=J.exports,A={name:"Paper",components:{ReferenceTable:Q,CommonReference:H},computed:{paper_url(){return this.$route.query["q"]}},watch:{paper_query_limits(){window.localStorage.setItem("paper_query_limits",this.paper_query_limits)}},data(){return{paper_query_limits:window.localStorage.getItem("paper_query_limits")||10,paperInfo:{},commonReference:[],isQueryFailed:!1}},async mounted(){await this.getMetaData(),this.paperInfo.citations.length<this.paper_query_limits&&this.paperInfo.citations.length>=1&&await this.getCommonReference(),this.addHistory()},methods:{addHistory(){const e=window.localStorage.getItem("history")?JSON.parse(window.localStorage.getItem("history")):[],t={paperId:this.paperId,title:this.paperInfo.title,venue:this.paperInfo.venue,year:this.paperInfo.year},a=e.findIndex((function(e){return e.paperId===t.paperId}));a>-1&&e.splice(a,1),e.push(t),window.localStorage.setItem("history",JSON.stringify(e.reverse()))},getPaperId(e){if(40===e.length)return e;if(e.match(/\d{4}[.]\d+/g).length)return"arXiv:"+e.match(/\d{4}[.]\d+/g)[0];if(e.match(/\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/g).length)return e.match(/\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/g)[0];if(e.includes("semanticscholar.org")){const t=e.split("/");return t[t.length-1].slice(0,40)}},async getMetaData(){this.paperId=this.getPaperId(this.paper_url);const e=await this.$axios.get("https://api.semanticscholar.org/v1/paper/"+this.paperId);this.paperInfo=e.data},async getCommonReference(){try{const e=this.paperInfo.citations.slice(0,this.paper_query_limits).map(e=>e.paperId),t={};for(const i of e){const e=await this.$axios.get("https://api.semanticscholar.org/v1/paper/"+i),a=e.data.references;a.forEach(e=>{const a=e.paperId;t[a]?t[a]++:t[a]=1})}const a=Object.entries(t).map(([e,t])=>({id:e,count:t})).sort((e,t)=>t.count-e.count),r=await Promise.all(a.slice(0,10).map(async({id:e})=>{const a=await this.$axios.get("https://api.semanticscholar.org/v1/paper/"+e);return{...a.data,count:t[e]}}));this.commonReference=r}catch(e){console.error("Error fetching common references:",e),this.isQueryFailed=!0}}},metaInfo(){return{title:this.paperInfo.title}}},L=A,X=(a("68f4"),Object(p["a"])(L,S,$,!1,null,"7f497179",null)),B=X.exports,U=a("f617");a("dac4");r["a"].use(C["a"]),r["a"].use(v["a"]),r["a"].use(g["a"]);const V=!1,Y=y.a.create({baseURL:V?"http://localhost:8000":"https://api.cite.gg",timeout:1e5});r["a"].prototype.$axios=Y,Object(I["loadProgressBar"])({},Y);const z=[{path:"/",component:O},{path:"/paper",component:B},{path:"/common-reference",component:H}],W=new g["a"]({routes:z});r["a"].config.productionTip=!1,r["a"].use(U["a"]),new r["a"]({render:e=>e(_),router:W}).$mount("#app")},"647b":function(e,t,a){},"68f4":function(e,t,a){"use strict";a("48eb")},"81de":function(e,t,a){},b1e6:function(e,t,a){}});
//# sourceMappingURL=app.429e240e.js.map