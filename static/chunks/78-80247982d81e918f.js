(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,l=e.priority,f=void 0!==l&&l,p=e.loading,y=e.lazyBoundary,b=void 0===y?"200px":y,w=e.className,A=e.quality,S=e.width,j=e.height,k=e.objectFit,x=e.objectPosition,z=e.onLoadingComplete,L=e.loader,_=void 0===L?I:L,M=e.placeholder,P=void 0===M?"empty":M,R=e.blurDataURL,C=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=r?"responsive":"intrinsic";"layout"in C&&(C.layout&&(D=C.layout),delete C.layout);var q="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var U=v(t)?t.default:t;if(!U.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(R=R||U.blurDataURL,q=U.src,(!D||"fill"!==D)&&(j=j||U.height,S=S||U.width,!U.height||!U.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}t="string"===typeof t?t:q;var N=E(S),B=E(j),T=E(A),W=!f&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,W=!1);h.has(t)&&(W=!1);0;var H,K=o(d.useIntersection({rootMargin:b,disabled:!W}),2),F=K[0],V=K[1],$=!W||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:x},Y="blur"===P?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:x||"0% 0%"}:{};if("fill"===D)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof N&&"undefined"!==typeof B){var Z=B/N,ee=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===D?(J.display="block",J.position="relative",Q=!0,G.paddingTop=ee):"intrinsic"===D?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,G.maxWidth="100%",H='<svg width="'.concat(N,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(J.display="inline-block",J.position="relative",J.width=N,J.height=B)}else 0;var te={src:g,srcSet:void 0,sizes:void 0};$&&(te=O({src:t,unoptimized:a,layout:D,width:N,quality:T,sizes:r,loader:_}));var re=t;0;var ne;0;var ie=(i(ne={},"imagesrcset",te.srcSet),i(ne,"imagesizes",te.sizes),ne);return c.default.createElement("span",{style:J},Q?c.default.createElement("span",{style:G},H?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(H))}):null):null,c.default.createElement("img",Object.assign({},C,te,{decoding:"async","data-nimg":D,className:w,ref:function(e){F(e),function(e,t,r,n,i){if(!e)return;var o=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),h.add(t),i){var r=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:r,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,re,0,P,z)},style:m({},X,Y)})),W&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},C,O({src:t,unoptimized:a,layout:D,width:N,quality:T,sizes:r,loader:_}),{decoding:"async","data-nimg":D,style:X,className:w,loading:p||"lazy"}))),f?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src},ie))):null)};var c=y(r(7294)),u=y(r(5443)),s=r(6978),f=r(5809),d=r(7190);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t).concat(z(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(z(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||f.imageConfigDefault,A=w.deviceSizes,S=w.imageSizes,j=w.loader,k=w.path,x=(w.domains,a(A).concat(a(S)));function O(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,l=e.sizes,c=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var l,c=.01*(l=Math).min.apply(l,a(o));return{widths:x.filter((function(e){return e>=A[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:A,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(i,n,l),s=u.widths,f=u.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map((function(e,r){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({src:t,quality:o,width:s[d]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t=b.get(j);if(t)return t(m({root:k},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(j))}function z(e){return"/"===e[0]?e.slice(1):e}A.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,y=e.children,m=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var v=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=i(u.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],j=a.default.useCallback((function(e){A(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,A]);a.default.useEffect((function(){var e=S&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,i=s[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(n,d,p,{locale:t})}),[p,d,S,b,r,n]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}))}(e,n,d,p,m,h,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&l.getDomainLocale(p,x,n&&n.locales,n&&n.domainLocales);k.href=O||l.addBasePath(l.addLocale(p,x,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=o.useRef(),u=i(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!l&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)}}]);