(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{6594:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(9407)}])},9407:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),a=r(1177),i=r(5675),c=r(7294),o=r(3563),l=r.n(o),s=r(4184),h=r.n(s),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var d=function(e){var t=e.animate,r=e.backgroundColor,n=e.backgroundOpacity,a=e.baseUrl,i=e.children,o=e.foregroundColor,l=e.foregroundOpacity,s=e.gradientRatio,h=e.gradientDirection,d=e.uniqueKey,f=e.interval,p=e.rtl,y=e.speed,x=e.style,g=e.title,m=e.beforeMask,_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),b=d||Math.random().toString(36).substring(6),v=b+"-diff",w=b+"-animated-diff",j=b+"-aria",E=p?{transform:"scaleX(-1)"}:null,O="0; "+f+"; 1",k=y+"s",C="top-bottom"===h?"rotate(90)":void 0;return(0,c.createElement)("svg",u({"aria-labelledby":j,role:"img",style:u(u({},x),E)},_),g?(0,c.createElement)("title",{id:j},g):null,m&&(0,c.isValidElement)(m)?m:null,(0,c.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+w+")"}}),(0,c.createElement)("defs",null,(0,c.createElement)("clipPath",{id:v},i),(0,c.createElement)("linearGradient",{id:w,gradientTransform:C},(0,c.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:n},t&&(0,c.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:O,dur:k,repeatCount:"indefinite"})),(0,c.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&(0,c.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:O,dur:k,repeatCount:"indefinite"})),(0,c.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:n},t&&(0,c.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:O,dur:k,repeatCount:"indefinite"})))))};d.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var f=function(e){return e.children?(0,c.createElement)(d,u({},e)):(0,c.createElement)(p,u({},e))},p=function(e){return(0,c.createElement)(f,u({viewBox:"0 0 476 124"},e),(0,c.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,c.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,c.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,c.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,c.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,c.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},y=f;function x(e){e.name;var t=function(e){var t=e.target.value;t&&fetch("\n    https://api.themoviedb.org/3/search/person?api_key=".concat("354ed36ed34f2ec7a18123256a906dd5","&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){o(e.results)}))},r=(0,c.useState)([]),a=r[0],o=r[1],s=(0,c.useState)(0),u=s[0],d=s[1],f="https://image.tmdb.org/t/p/original";return t=function(e){var t;return function(){var r=this,n=arguments,a=function(){e.apply(r,n)};clearTimeout(t),t=setTimeout(a,500)}}(t),(0,n.jsxs)("div",{className:h()(l().wrapper__search,"flex"),children:[Boolean(a.length)&&(0,n.jsxs)("div",{className:l().character__first,children:[(0,n.jsx)("h1",{children:a[u].title||a[u].name}),(0,n.jsx)(i.default,{src:"".concat(f).concat(a[u].profile_path),alt:"character",layout:"fill",objectFit:"cover"})]}),(0,n.jsx)("div",{className:h()(l().container__img),children:Boolean(a.length)&&a.map((function(e,t){return e.profile_path?(0,n.jsx)(i.default,{onClick:function(){return d(t)},src:"".concat(f).concat(e.profile_path),alt:"character",width:"200px",height:"200px",objectFit:"cover"},e.id):(0,n.jsxs)(y,{speed:2,width:177,height:162,viewBox:"0 0 177 162",backgroundColor:"#f3f3f3",foregroundColor:"#b0b0b0",children:[(0,n.jsx)("rect",{x:"97",y:"95",rx:"0",ry:"0",width:"0",height:"1"}),(0,n.jsx)("rect",{x:"96",y:"96",rx:"0",ry:"0",width:"1",height:"0"}),(0,n.jsx)("rect",{x:"100",y:"283",rx:"0",ry:"0",width:"10",height:"2"}),(0,n.jsx)("rect",{x:"89",y:"281",rx:"0",ry:"0",width:"21",height:"1"}),(0,n.jsx)("rect",{x:"167",y:"237",rx:"0",ry:"0",width:"0",height:"1"}),(0,n.jsx)("rect",{x:"289",y:"130",rx:"0",ry:"0",width:"0",height:"1"}),(0,n.jsx)("rect",{x:"265",y:"257",rx:"0",ry:"0",width:"2",height:"0"}),(0,n.jsx)("rect",{x:"446",y:"93",rx:"0",ry:"0",width:"134",height:"138"}),(0,n.jsx)("rect",{x:"68",y:"230",rx:"0",ry:"0",width:"40",height:"13"}),(0,n.jsx)("rect",{x:"68",y:"250",rx:"0",ry:"0",width:"40",height:"13"}),(0,n.jsx)("rect",{x:"19",y:"15",rx:"10",ry:"10",width:"141",height:"147"})]},t)}))}),(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("input",{onKeyUp:t,type:"text",placeholder:"Search..."}),(0,n.jsx)("div",{className:l().search})]})]})}var g=function(){return(0,n.jsx)(a.Z,{title:"Search",children:(0,n.jsx)(x,{name:"search"})})}},3563:function(e){e.exports={wrapper__search:"Search_wrapper__search__GLi9O",character__first:"Search_character__first__0JOVz",container__img:"Search_container__img__Q7RcY",container:"Search_container__nWdyx",search:"Search_search__VIo_S"}}},function(e){e.O(0,[78,177,774,888,179],(function(){return t=6594,e(e.s=t);var t}));var t=e.O();_N_E=t}]);