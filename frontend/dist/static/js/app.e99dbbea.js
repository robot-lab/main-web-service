(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),r=n.n(i);r.a},"03ac":function(t,e,n){},"0c78":function(t,e,n){"use strict";var i=n("8bc4"),r=n.n(i);r.a},1255:function(t,e,n){},2447:function(t,e,n){"use strict";var i=n("59fb"),r=n.n(i);r.a},"49a3":function(t,e,n){"use strict";var i=n("1255"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Workspace"),n("Footer")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"link-search-main"},[n("SearchBlock",{staticClass:"search-block",attrs:{Request:t.SearchRequest},on:{SearchResultsReceived:function(e){t.SearchResult=e}}}),null!=t.SearchResult?n("SearchResultsBlock",{attrs:{SearchResults:t.SearchResult}}):t._e()],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("div",{staticClass:"col-12"},[n("div",{attrs:{id:"custom-search-input"}},[t.isLoading?n("p",[t._v(" Ведется поиск...")]):t._e(),n("div",{staticClass:"input-group"},[n("input",{staticClass:"search-query form-control",attrs:{type:"text",id:"input-search",placeholder:"Поиск"},domProps:{value:t.SearchRequest},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.SearchButtonClick()}}}),n("span",{staticClass:"input-group-btn"},[n("button",{attrs:{type:"button"}},[n("span",{staticClass:"fa fa-search",on:{click:function(e){t.SearchButtonClick()}}})])])])])])])],1)},u=[];n("ac6a"),n("28a5");function l(t){return t.map(function(t){return t.trim()}).filter(function(t){if(""!==t)return t})}function d(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})}var f={trimFromSpaces:l,distinctArr:d},h={ElemsDelimiter:",",CitationPartsDelimiter:"->"},p={any_front:"*",any_back:-1};function _(t){var e=t.split(h.CitationPartsDelimiter);if(e=f.trimFromSpaces(e),e.length<2)return null;var n=e[0].split(h.ElemsDelimiter);n=f.trimFromSpaces(n),n=f.distinctArr(n);var i=e[1].split(h.ElemsDelimiter),r=[];if(i=f.trimFromSpaces(i),i=f.distinctArr(i),-1!==n.indexOf(p.any_front))if(-1!==i.indexOf(p.any_front))r.push({doc_id_from:p.any_back,doc_id_to:p.any_back});else for(var s=0;s<i.length;s++)r.push({doc_id_from:p.any_back,doc_id_to:i[s]});else if(-1!==i.indexOf(p.any_front))for(s=0;s<n.length;s++)r.push({doc_id_from:n[s],doc_id_to:p.any_back});else for(s=0;s<n.length;s++)for(var a=0;a<i.length;a++)r.push({doc_id_from:n[s],doc_id_to:i[a]});return r}var v={CitationFastSearch:_},m={sampleKeyword:"sampleKeyword"};function k(){throw"Not implemented!"}function b(t){var e=m.values;for(var n in e)if(-1!==t.indexOf(n))return k(t);if(t.indexOf(h.CitationPartsDelimiter))return v.CitationFastSearch(t);throw"Not implemented!"}var S=b;function C(t,e,n,i){var r=0,s=0,a=0,o=0,c=[],u=function(t,n){var i={doc_id_from:n.doc_id_from,doc_id_to:n.doc_id_to,range:t},r=JSON.stringify(i),s=new XMLHttpRequest;s.open("POST",e,!0),s.setRequestHeader("content-type","application/json"),s.send(r),s.onreadystatechange=function(){if(4==this.readyState)if(200==this.status){for(var t=s.responseText,e=JSON.parse(t),n=[],i=0;i<e.length;i++)n.push({id:i,Link:e[i]});c=c.concat(n),o++}else alert("ошибка: "+(this.status?this.statusText:"запрос не удался"))}};while(s<n.length&&r<t[0]){if(!(r+n[s].Size<=t[0])){var l=t[0]-r;if(r+n[s].Size<=t[1]){var d=[l,n[s].Size];r+=n[s].Size}else{var f=t[1]-r;d=[l,f],r+=t[1]-t[0]}a++;var h=s;setTimeout(function(){u(d,n[h])},0),s++;break}r+=n[s].Size,s++}while(s<n.length&&r<t[1])r+n[s].Size<=t[1]?(d=[0,n[s].Size],r+=n[s].Size):(d=[0,t[1]-r],r=t[1]),h=s,setTimeout(function(){u(d,n[h])},0),a++,s++;var p=function t(){a<=o?i(c):setTimeout(t,500)};setTimeout(p,0)}function g(t,e,n){var i=S(t);if(null!=i){for(var r=[],s=0,a=0;a<i.length;a++){var o=i[a],c=JSON.stringify(o),u=new XMLHttpRequest;u.open("POST",e,!0),u.setRequestHeader("content-type","application/json"),u.send(c),u.onreadystatechange=function(){if(4==this.readyState)if(200==this.status){var t=this.responseText+"",e=JSON.parse(t);r.push({Size:e.size,doc_id_from:o.doc_id_from,doc_id_to:o.doc_id_to}),s+=1}else s+=1}}var l=function t(){s===i.length?n(r):setTimeout(t,500)};setTimeout(l,500)}else n(null)}function L(t,e,n){var i=new XMLHttpRequest;i.open("POST",e,!0),i.setRequestHeader("content-type","application/json");var r=JSON.stringify({doc_id:t});i.send(r),i.onreadystatechange=function(){if(4==this.readyState)if(200==this.status){var t=this.responseText+"",e=JSON.parse(t);n(e)}else n(null,this.status)}}var R={RequestLinks:C,RequestSearch:g,RequestDocument:L},y="",P={Search:"".concat(y,"/api/search/number_of_links"),Document:"".concat(y,"/api/search/document"),Links:"".concat(y,"/api/search/get")},x={Search:"/search"},w={doc_id_delimiter:["/","-_-"]};function O(t){var e,n,i=0;if(0===t.length)return i;for(e=0;e<t.length;e++)n=t.charCodeAt(e),i=(i<<5)-i+n,i|=0;return i}function q(t){return O("".concat(t.doc_id_from).concat(t.doc_id_to))}function j(t){return t.split(w.doc_id_delimiter[0]).join(w.doc_id_delimiter[1])}function D(t){return t.split(w.doc_id_delimiter[1]).join(w.doc_id_delimiter[0])}function T(t){return t=t.split(w.doc_id_delimiter[0]).join(w.doc_id_delimiter[1]),t}function $(t){return t=t.split(w.doc_id_delimiter[1]).join(w.doc_id_delimiter[0]),t}var E={Hash:O,StashDocId:j,DeStashDocId:D,HashLink:q,StashRequest:T,DeStashRequest:$},N={name:"SearchBlock",props:{Request:String},data:function(){return{url:P.Search,SearchRequest:"",isLoading:!1,tmp:"none"}},methods:{SearchButtonClick:function(){var t=document.getElementById("input-search").value;t=E.StashRequest(t),this.$router.push("".concat(x.Search,"/").concat(t))},Update:function(){if(null!=this.Request){this.SearchRequest=E.DeStashRequest(this.Request);var t=this;this.isLoading=!0,R.RequestSearch(this.SearchRequest,this.url,function(e){t.$emit("SearchResultsReceived",e),t.isLoading=!1})}}},watch:{Request:function(){this.Update()}},created:function(){this.Update()}},F=N,z=(n("5ff8"),n("2877")),B=Object(z["a"])(F,c,u,!1,null,"58f8333b",null);B.options.__file="SearchBlock.vue";var I=B.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[t.LinksCount>0?n("div",{staticClass:"search-result-block"},[n("span",{staticClass:"page-list"},[n("PageList",{attrs:{Count:t.LinksCount,Step:t.Step,Current:t.CurrentRange},on:{PageChanged:function(e){t.getLinks(e)}}})],1),n("SearchStatistics",{attrs:{SearchResults:t.SearchResults,Count:t.LinksCount}}),t.isLoaded?n("div",{staticClass:"links-block"},[n("LinkBoxView",{attrs:{Links:t.Links}}),n("span",{staticClass:"page-list"},[n("PageList",{attrs:{Count:t.LinksCount,Step:t.Step,Current:t.CurrentRange},on:{PageChanged:function(e){t.getLinks(e)}}})],1)],1):n("p",[t._v("Загружается...")])],1):n("div",{staticClass:"container"},[t._v("\n            Поиск не дал результатов. \n    ")])])},A=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LinkView",{attrs:{CleanLink:t.CleanLink}})},J=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"link-container card card-body"},[n("b-card-header",[n("span",[n("p",[t._v("Цитирующий документ: "),n("router-link",{attrs:{to:"/document/"+t.utils.StashDocId(t.CleanLink.doc_id_from)+"/0"}},[t._v(t._s(t.CleanLink.doc_id_from))])],1)]),n("span",[n("p",[t._v("Цитируемый документ: "),n("router-link",{attrs:{to:"/document/"+t.utils.StashDocId(t.CleanLink.doc_id_to)+"/0"}},[t._v(t._s(t.CleanLink.doc_id_to))])],1)])]),n("b-card-body",[n("p",[n("b",[t._v("Заголовок цитируемого документа:")]),t._v(" "+t._s(t.CleanLink.to_doc_title)+"\n            ")]),n("span",[n("p",[t._v("Количество упоминаний: "+t._s(t.CleanLink.citations_number)+" ")])]),n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.TitleId,expression:"TitleId"},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"context-toggler",attrs:{title:"Нажмите, чтобы просмотреть контекст цитаты"}},[t._v("\n                Контекст цитирования\n            ")]),n("b-collapse",{attrs:{id:t.TitleId}},t._l(t.CitationsRange,function(e){return n("b-card-group",{key:e},[n("b-card",[n("b-card-header"),n("b-card-body",[n("p",[t._v(t._s(t.CleanLink.contexts[e].before)+" "),n("b",[t._v(t._s(t.CleanLink.contexts[e].citation))]),t._v(" "+t._s(t.CleanLink.contexts[e].after)+" ")])]),n("b-card-footer",[n("router-link",{attrs:{to:"/document/"+t.utils.StashDocId(t.CleanLink.doc_id_from)+"/"+t.utils.HashLink(t.CleanLink)}},[t._v("\n                        Перейти к цитате в тексте\n                    ")])],1)],1)],1)}))],1)],1)},U=[],W={name:"LinkView",props:{CleanLink:Object},data:function(){return{utils:E}},computed:{CitationsRange:function(){for(var t=[],e=0;e<this.CleanLink.citations_number;e++)t.push(e);return t},TitleId:function(){return"#collapse_"+this.CleanLink.doc_id_from+"-"+this.CleanLink.doc_id_to}},methods:{GetPositionLink:function(t,e){return"#"+t+"__"+e}}},X=W,K=(n("0c78"),Object(z["a"])(X,M,U,!1,null,null,null));K.options.__file="LinkView.vue";var G=K.exports,Q={name:"SearchResult",components:{LinkView:G},props:{CleanLink:Object},computed:{},methods:{}},Y=Q,Z=(n("7c23"),Object(z["a"])(Y,H,J,!1,null,"d66bb60e",null));Z.options.__file="SearchResult.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"search-request-statistics",expression:"'search-request-statistics'"}],staticClass:"bg-info text-white"},[t._v("\n            Статистический анализ запроса\n        ")]),n("b-collapse",{attrs:{id:"search-request-statistics"}},[n("b-card-body",[n("p",[t._v("Найдено: "+t._s(t.LinksCount))])])],1)],1)},nt=[],it=(n("c5f6"),{name:"SearchStatistics",data:function(){return{tmp:"none"}},props:{SearchResults:Array,Count:Number},computed:{LinksCount:function(){return void 0==this.Count&&this.ComputeCount(),this.Count}},methods:{ComputeCount:function(){for(var t=0,e=0;e<this.SearchResults.length;e++)t+=this.SearchResults[e].Size;this.Count=t}}}),rt=it,st=(n("b0be"),Object(z["a"])(rt,et,nt,!1,null,"40ec3108",null));st.options.__file="SearchStatistics.vue";var at=st.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-list"},[n("span",[n("a",{staticClass:"page-link",on:{click:function(e){t.$emit("PageChanged",t.FirstPages)}}},[t._v("\n         <<<\n    ")]),t._l(t.PrevioslyPages,function(e){return n("a",{key:e[0],staticClass:"page-link",on:{click:function(n){t.$emit("PageChanged",e)}}},[t._v("\n        "+t._s(e[0])+" - "+t._s(e[1])+"\n    ")])}),n("p",{staticClass:"page-link current-link"},[t._v("\n        |"+t._s(t.Current[0])+" - "+t._s(t.Current[1])+"|\n    ")]),t._l(t.NextPages,function(e){return n("a",{key:e[0],staticClass:"page-link",on:{click:function(n){t.$emit("PageChanged",e)}}},[t._v("\n        "+t._s(e[0])+" - "+t._s(e[1])+"\n    ")])}),n("a",{staticClass:"page-link",on:{click:function(e){t.$emit("PageChanged",t.LastPages)}}},[t._v("\n        >>>\n    ")])],2)])},ct=[],ut={name:"PageList",data:function(){return{tmp:"none"}},props:{Count:Number,Step:Number,Current:Array},computed:{PrevioslyPages:function(){var t=[],e=this.Current;if(e[0]>2){var n=e[0]-this.Step-1;n<1&&(n=1),t.push([n,e[0]-1])}return t},NextPages:function(){for(var t=[],e=this.Current,n=0;n<2;n++){var i=e;if(e=[i[1]+1,i[1]+this.Step],e[0]>this.Count)break;e[1]>this.Count&&(e[1],this.Count),t.push(e)}return t},FirstPages:function(){var t=[1,this.Step];return t[1]>this.Count&&(t[1]=this.Count),t},LastPages:function(){var t=[this.Count-this.Step+1,this.Count];return t[0]<1&&(t[0]=1),t}}},lt=ut,dt=(n("59be"),Object(z["a"])(lt,ot,ct,!1,null,"cd6f3780",null));dt.options.__file="PageList.vue";var ft=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links-block"},t._l(t.Links,function(t){return n("div",{key:t.id},[n("LinkView",{attrs:{CleanLink:t.Link}})],1)}))},pt=[],_t={name:"LinksBoxView",components:{LinkView:G},props:{Links:Array}},vt=_t,mt=(n("49a3"),Object(z["a"])(vt,ht,pt,!1,null,"dc4e113e",null));mt.options.__file="LinksBoxView.vue";var kt=mt.exports,bt={name:"SearchResultBlock",props:{SearchResults:Array},data:function(){return{Step:10,CurrentRange:[1,20],url:P.Links,tmp:null,Links:[],isLoaded:!1}},computed:{LinksCount:function(){for(var t=0,e=0;e<this.SearchResults.length;e++)t+=this.SearchResults[e].Size;return t}},components:{SearchResult:tt,PageList:ft,LinkBoxView:kt,SearchStatistics:at},methods:{getLinks:function(t){this.CurrentRange=t,this.isLoaded=!1;var e=this;R.RequestLinks(t,this.url,this.SearchResults,function(t){e.isLoaded=!0,e.Links=t})},Initialize:function(){this.CurrentRange=[1,this.Step],this.LinksCount<this.Step&&(this.CurrentRange[1]=this.LinksCount),this.getLinks(this.CurrentRange)}},watch:{SearchResults:function(){this.Initialize()}},created:function(){this.Initialize()}},St=bt,Ct=(n("a21e"),Object(z["a"])(St,V,A,!1,null,"5a572358",null));Ct.options.__file="SearchResultsBlock.vue";var gt=Ct.exports,Lt={name:"Search",data:function(){return{SearchResult:null,tmp:"none",SearchRequest:null}},created:function(){this.SearchRequest=this.$route.params.request},beforeRouteUpdate:function(t,e,n){this.SearchRequest=t.params.request,n()},components:{SearchBlock:I,SearchResultsBlock:gt}},Rt=Lt,yt=(n("b975"),Object(z["a"])(Rt,a,o,!1,null,"28c4f79a",null));yt.options.__file="Search.vue";var Pt=yt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small white"},[n("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2018 Copyright:\n        "),n("a",{attrs:{href:"https://github.com/orgs/robot-lab/teams/team-judicial-analysis/members"}},[t._v(" Judist team")])])])}],Ot={name:"Navbar"},qt=Ot,jt=(n("b485"),Object(z["a"])(qt,xt,wt,!1,null,"49877f48",null));jt.options.__file="Footer.vue";var Dt=jt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar fixed-top navbar-dark bg-dark  navbar-main"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"#"}},[t._v("Judyst")])],1)])])},$t=[],Et={name:"Navbar"},Nt=Et,Ft=(n("cbd0"),Object(z["a"])(Nt,Tt,$t,!1,null,"1d1da9f4",null));Ft.options.__file="Navbar.vue";var zt=Ft.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"workspace"},[n("router-view")],1)},It=[],Vt={name:"Workspace",components:{}},At=Vt,Ht=(n("2447"),Object(z["a"])(At,Bt,It,!1,null,null,null));Ht.options.__file="Workspace.vue";var Jt=Ht.exports,Mt=n("8c4f"),Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container "},[n("Search")],1)},Wt=[],Xt={name:"HomePage",components:{Search:Pt}},Kt=Xt,Gt=(n("a3bb"),Object(z["a"])(Kt,Ut,Wt,!1,null,null,null));Gt.options.__file="HomePage.vue";var Qt=Gt.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"wrap",attrs:{fluid:""}},[null!=t.CurrentDocument?n("div",[n("h5",{staticClass:"title-block"},[n("b",[t._v("Заголовок документа:")]),n("p",[t._v(t._s(t.CurrentDocument.title))])]),n("h4",{staticClass:"id-block"},[n("p",[n("b",[t._v("Номер документа:")]),t._v(" "+t._s(t.CurrentDocument.doc_id))])]),n("h4",{staticClass:"date-block"},[n("p",[n("b",[t._v("Дата публикации:")]),t._v(" "+t._s(t.CurrentDocument.release_date)+" ")])]),n("div",{staticClass:"text-block"},[null!=t.ProcessedText?n("p",{domProps:{innerHTML:t._s(t.ProcessedText)}}):n("p",[t._v("\n                Выполняется предобработка...\n            ")])])]):n("div",[n("p",[t._v("Документ загружается...")])])])},Zt=[],te=(n("55dd"),{name:"DocumentView",components:{LinksBoxView:kt},data:function(){return{Step:5,LinksPackTo:null,LinksPackFrom:null,CurrentDocument:null,tmp:"none"}},computed:{SortedAloneLinks:function(){if(null===this.LinksPackFrom||null===this.LinksPackTo)return null;for(var t=[],e=0;e<this.LinksPackFrom.length;e++){for(var n=this.LinksPackFrom[e],i=0;i<n.Link.positions_list.length;i++)var r={doc_id_from:n.Link.doc_id_from,doc_id_to:n.Link.doc_id_to,to_doc_title:n.Link.to_doc_title,position:n.Link.positions_list[i]};t.push(r)}for(e=0;e<this.LinksPackTo.length;e++){for(n=this.LinksPackFrom[e],i=0;i<n.Link.positions_list.length;i++)r={doc_id_from:n.Link.doc_id_from,doc_id_to:n.Link.doc_id_to,to_doc_title:n.Link.to_doc_title,position:n.Link.positions_list[i]};t.push(r)}return t.sort(function(t,e){return t.position.link_start-e.position.link_end}),t},ProcessedText:function(){if(null===this.CurrentDocument||null===this.LinksPackFrom||null===this.LinksPackTo)return null;for(var t=this.CurrentDocument.text,e="",n=0,i=0;i<this.SortedAloneLinks.length;i++){var r=this.SortedAloneLinks[i];e+=t.slice(n,r.position.link_start);var s=t.slice(r.position.link_start,r.position.link_end+1);e+='<span class="link" href="#" @click="OpenLink(`/document/'.concat(E.StashDocId(r.doc_id_from),'/0`)">').concat(s,"</span>"),n=r.position.link_end}return e+=t.slice(n,t.length),e}},methods:{OpenLink:function(t){this.$router.push(t)}},created:function(){var t=E.DeStashDocId(this.$route.params.doc_id),e=this;R.RequestDocument(t,P.Document,function(t,n){null===t&&alert("Error while getting document. Error code: "+n),e.CurrentDocument=t}),R.RequestSearch("*->".concat(t),P.Search,function(t){R.RequestLinks([1,t.Size],P.Links,t,function(t){e.LinksPackTo=t})}),R.RequestSearch("".concat(t,"->*"),P.Search,function(t){R.RequestLinks([1,t.Size],P.Links,t,function(t){e.LinksPackFrom=t})})}}),ee=te,ne=(n("d8a9"),Object(z["a"])(ee,Yt,Zt,!1,null,"4f61175c",null));ne.options.__file="DocumentView.vue";var ie=ne.exports,re=[{path:"/",component:Qt},{name:"document",path:"/document/:doc_id/:hash",component:ie},{path:"/search/:request",component:Pt}],se=new Mt["a"]({routes:re}),ae={Router:se},oe={name:"app",router:ae.Router,components:{Footer:Dt,Navbar:zt,Search:Pt,Workspace:Jt}},ce=oe,ue=(n("034f"),Object(z["a"])(ce,r,s,!1,null,null,null));ue.options.__file="App.vue";var le=ue.exports,de=n("9f7b");n("f9e3"),n("2dd8");i["a"].config.productionTip=!1,i["a"].use(Mt["a"]),i["a"].use(de["a"]),new i["a"]({render:function(t){return t(le)}}).$mount("#app")},"59be":function(t,e,n){"use strict";var i=n("b65b"),r=n.n(i);r.a},"59fb":function(t,e,n){},"5ff8":function(t,e,n){"use strict";var i=n("aea6"),r=n.n(i);r.a},"615d":function(t,e,n){},"62f3":function(t,e,n){},"6f3c":function(t,e,n){},"7c23":function(t,e,n){"use strict";var i=n("6f3c"),r=n.n(i);r.a},"8bc4":function(t,e,n){},a086:function(t,e,n){},a21e:function(t,e,n){"use strict";var i=n("a086"),r=n.n(i);r.a},a3bb:function(t,e,n){"use strict";var i=n("bfc3"),r=n.n(i);r.a},a8ba:function(t,e,n){},aea6:function(t,e,n){},b0be:function(t,e,n){"use strict";var i=n("62f3"),r=n.n(i);r.a},b485:function(t,e,n){"use strict";var i=n("615d"),r=n.n(i);r.a},b65b:function(t,e,n){},b975:function(t,e,n){"use strict";var i=n("a8ba"),r=n.n(i);r.a},bfc3:function(t,e,n){},c21b:function(t,e,n){},cbd0:function(t,e,n){"use strict";var i=n("e0cc"),r=n.n(i);r.a},d8a9:function(t,e,n){"use strict";var i=n("03ac"),r=n.n(i);r.a},e0cc:function(t,e,n){}});
//# sourceMappingURL=app.e99dbbea.js.map