(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3839:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper__brands": "Brands_wrapper__brands__SZIUk",
	"brand": "Brands_brand__N0e2f",
	"hidden": "Brands_hidden__LkrT_"
};


/***/ }),

/***/ 1083:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper__collections": "Collection_wrapper__collections__AbifC",
	"wrapper__collections_images": "Collection_wrapper__collections_images__aiNQB",
	"collection__image": "Collection_collection__image__VKzh9"
};


/***/ }),

/***/ 5256:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper__slider": "Slider_wrapper__slider__ZDKED"
};


/***/ }),

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/brands/Brands.module.scss
var Brands_module = __webpack_require__(3839);
var Brands_module_default = /*#__PURE__*/__webpack_require__.n(Brands_module);
;// CONCATENATED MODULE: ./components/brands/Brands.jsx



function Brands() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Brands_module_default()).wrapper__brands,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Brands_module_default()).brand,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/disnep.png",
                        alt: "Disnap",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: (Brands_module_default()).hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "/videos/disney.mp4",
                            type: "video/mp4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Brands_module_default()).brand,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/pixar.png",
                        alt: "Disnap",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: (Brands_module_default()).hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "/videos/pixar.mp4",
                            type: "video/mp4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Brands_module_default()).brand,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/marvel.png",
                        alt: "Disnap",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: (Brands_module_default()).hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "/videos/marvel.mp4",
                            type: "video/mp4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Brands_module_default()).brand,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/starwars.png",
                        alt: "Disnap",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: (Brands_module_default()).hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "/videos/star-wars.mp4",
                            type: "video/mp4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Brands_module_default()).brand,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/national-geographic.png",
                        alt: "Disnap",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: (Brands_module_default()).hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "/videos/national-geographic.mp4",
                            type: "video/mp4"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/collections/Collection.module.scss
var Collection_module = __webpack_require__(1083);
var Collection_module_default = /*#__PURE__*/__webpack_require__.n(Collection_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/collections/MovieThumbnail.jsx





function MovieThumbnail({ result , name  }) {
    const { 0: showTitle , 1: setShowTitle  } = (0,external_react_.useState)(false);
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseEnter: ()=>setShowTitle(true)
        ,
        onMouseLeave: ()=>setShowTitle(false)
        ,
        onClick: ()=>router.push(`/${name}/${result.id}`)
        ,
        className: (Collection_module_default()).collection__image,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                width: 330,
                height: 210,
                objectFit: "cover",
                layout: "fixed",
                src: `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`,
                alt: result.name
            }),
            showTitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: result.title || result.original_name
            })
        ]
    }));
};

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/collections/Collection.jsx





function Collection({ title , results  }) {
    const { 0: namePopular , 1: setNamePopular  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        if (title === 'Popular Movies' || title === 'Top Rated Show') {
            setNamePopular('movie');
        } else {
            setNamePopular('show');
        }
    }, [
        title
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Collection_module_default()).wrapper__collections,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()((Collection_module_default()).wrapper__collections_images),
                children: results.map((item)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(MovieThumbnail, {
                        result: item,
                        name: namePopular
                    }, item.id));
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
// EXTERNAL MODULE: ./components/slider/Slider.module.scss
var Slider_module = __webpack_require__(5256);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
;// CONCATENATED MODULE: ./components/slider/Slider.jsx


 // requires a loader

function Slider() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (Slider_module_default()).wrapper__slider,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
            autoPlay: true,
            infiniteLoop: true,
            showStatus: false,
            showIndicators: false,
            showThumbs: false,
            interval: 5000,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        loading: "lazy",
                        alt: "",
                        src: "/images/slider-1.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        loading: "lazy",
                        alt: "",
                        src: "/images/slider-2.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        loading: "lazy",
                        alt: "",
                        src: "/images/slider-3.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        loading: "lazy",
                        alt: "",
                        src: "/images/slider-4.jpeg"
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./layout/MainLayout.jsx + 8 modules
var MainLayout = __webpack_require__(1177);
;// CONCATENATED MODULE: ./pages/index.jsx







function Home({ popularMovies , popularShow , top_ratedShow , top_ratedMovies  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainLayout/* default */.Z, {
        title: "Home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Slider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Brands, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Collection, {
                title: "Popular Movies",
                results: popularMovies
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Collection, {
                title: "Popular Show",
                results: popularShow
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Collection, {
                title: "Top Rated Show",
                results: top_ratedShow
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Collection, {
                title: "Top Rated Movies",
                results: top_ratedMovies
            })
        ]
    }));
};
async function getStaticProps() {
    console.log('server');
    const [popularMoviesRes, popularShowRes, top_ratedMoviesRes, top_ratedShowRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${"354ed36ed34f2ec7a18123256a906dd5"}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${"354ed36ed34f2ec7a18123256a906dd5"}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${"354ed36ed34f2ec7a18123256a906dd5"}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${"354ed36ed34f2ec7a18123256a906dd5"}&language=en-US&page=1`), 
    ]);
    const [popularMovies, popularShow, top_ratedMovies, top_ratedShow] = await Promise.all([
        popularMoviesRes.json(),
        popularShowRes.json(),
        top_ratedShowRes.json(),
        top_ratedMoviesRes.json(), 
    ]);
    return {
        props: {
            popularMovies: popularMovies.results,
            popularShow: popularShow.results,
            top_ratedShow: top_ratedShow.results,
            top_ratedMovies: top_ratedMovies.results
        }
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,177], () => (__webpack_exec__(8741)));
module.exports = __webpack_exports__;

})();