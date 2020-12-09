! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 71)
}([function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, r) {
    var n = r(73);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && n(e, t)
    }
}, function(e, t, r) {
    var n = r(38),
        o = r(10);
    e.exports = function(e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? o(e) : t
    }
}, function(e, t) {
    function r(t) {
        return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, r(t)
    }
    e.exports = r
}, function(e, t) {
    e.exports = React
}, function(e, t) {
    e.exports = PropTypes
}, function(e, t) {
    e.exports = Core
}, function(e, t, r) {
    var n = r(38);

    function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return o = function() {
            return e
        }, e
    }
    e.exports = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
                var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
            }
        return r.default = e, t && t.set(e, r), r
    }
}, function(e, t) {
    function r(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    e.exports = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = (0, n(r(153)).default)({
        RSS_SECTION_BACKGROUND: null,
        RSS_SECTION_TITLE_RENDERED: null,
        RSS_SECTION_INTRO_RENDERED: null,
        RSS_SCROLL_LEFT_ARROW: null,
        RSS_SCROLL_RIGHT_ARROW: null,
        RSS_FEEDS_RENDERED: null,
        RSS_CAROUSEL_COUNTER: null,
        RSS_FEED_RENDERED: null,
        RSS_FEED_CATEGORIES_RENDERED: null,
        RSS_FEED_CATEGORY_RENDERED: null,
        RSS_FEED_POST_DATE_RENDERED: null,
        RSS_FEED_POST_CATEGORIES_RENDERED: null,
        RSS_FEED_POST_SEPARATOR_RENDERED: null,
        RSS_FEED_POST_CONTENT_RENDERED: null,
        RSS_NO_POSTS: null,
        RSS_READ_MORE: null,
        RSS_BLOG_CTA_RENDERED: null,
        RSS_BTN_CTA_RENDERED: null,
        RSS_VIEWPOST_SIDEBAR: null,
        RSS_VIEWPOST_EMAIL: null,
        RSS_POST_DATE: null,
        RSS_POST_CATEGORIES: null,
        RSS_SOCIAL_SHARE_TOP_FACEBOOK: null,
        RSS_SOCIAL_SHARE_TOP_TWITTER: null,
        RSS_SOCIAL_SHARE_BOTTOM_FACEBOOK: null,
        RSS_SOCIAL_SHARE_BOTTOM_TWITTER: null
    });
    t.default = o, e.exports = t.default
}, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFriendlySlugPosition = i, t.getPagePath = function() {
        var e = new URL(window.location.href);
        e.searchParams.delete(n.SLUG_PARAM);
        var t = i(e.pathname);
        t > -1 && (e.pathname = e.pathname.substr(0, t));
        return e.toString()
    }, t.buildPostPath = function(e, t, r) {
        if (r) return r;
        var i = new URL(window.location.href);
        if (i.searchParams.delete(n.ALL_POSTS_PARAM), i.searchParams.delete(n.SLUG_PARAM), t) i.pathname = "".concat(t, "/").concat(o, "/").concat(e).replace(/\/{2,}/g, "/");
        else {
            for (var u = 0, l = [o, a]; u < l.length; u++) {
                var c = l[u],
                    s = i.pathname.indexOf("/".concat(c, "/"));
                if (s > -1) {
                    i.pathname = i.pathname.substr(0, s);
                    break
                }
            }
            i.pathname = "".concat(i.pathname, "/").concat(o, "/").concat(e).replace(/\/{2,}/g, "/")
        }
        return i.toString()
    }, t.pathContainsFriendlySlug = function() {
        return window.location && window.location.pathname && window.location.pathname.includes("/".concat(o, "/"))
    }, t.getFriendlySlug = function() {
        if (window && window._BLOG_DATA && window._BLOG_DATA.post) return window._BLOG_DATA.post.slug;
        var e = window.location.pathname;
        return e.substr(i(e) + "/".concat(o, "/").length)
    }, t.getSearchParam = u, t.updateSearchParam = l, t.getSlugParam = function() {
        return u(n.SLUG_PARAM)
    }, t.setSlugParam = c, t.getAllPostsParam = function() {
        return !!u(n.ALL_POSTS_PARAM)
    }, t.setAllPostsParam = function() {
        return c(null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href)
    }, t.hasPostUrl = function(e) {
        var t = e.location.hash;
        return t && /^#post-\d+$/.test(t)
    }, t.FRIENDLY_URL_PATH = void 0;
    var n = r(22),
        o = "f";
    t.FRIENDLY_URL_PATH = o;
    var a = "ola/services";

    function i(e) {
        return e.indexOf("/".concat(o, "/"))
    }

    function u(e) {
        return new URLSearchParams(window.location.search).get(e)
    }

    function l(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.location.href,
            n = new URL(r);
        return t ? n.searchParams.set(e, t) : n.searchParams.delete(e), n.hash = "", n.toString()
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
            r = l(n.SLUG_PARAM, e, t),
            o = e ? null : n.ALL_POSTS_VALUE;
        return l(n.ALL_POSTS_PARAM, o, r)
    }
}, function(e, t, r) {
    var n = r(29),
        o = r(86),
        a = r(87),
        i = "[object Null]",
        u = "[object Undefined]",
        l = n ? n.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? u : i : l && l in Object(e) ? o(e) : a(e)
    }
}, function(e, t, r) {
    var n = r(43),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
    e.exports = a
}, function(e, t) {
    e.exports = function(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAllCategories = function(e) {
        return e.reduce(function(e, t) {
            var r = t.categories;
            return r && r.length && r.forEach(function(t) {
                t && !e.includes(t) && e.push(t)
            }), e
        }, []).sort()
    }, t.getCategoryParam = function() {
        return (0, o.getSearchParam)(n.CATEGORY_PARAM)
    }, t.setCategoryParam = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.getPagePath)();
        return (0, o.updateSearchParam)(n.CATEGORY_PARAM, e, t)
    }, t.hasCategories = function(e) {
        return !(!e || !e.length)
    }, t.filterFeedByCategory = void 0;
    var n = r(22),
        o = r(14);
    t.filterFeedByCategory = function(e, t) {
        return t ? e.filter(function(e) {
            var r = e.categories;
            return r && r.includes(t)
        }) : e
    }
}, function(e, t) {
    var r = Array.isArray;
    e.exports = r
}, function(e, t) {
    e.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, function(e, t) {
    function r() {
        return e.exports = r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, r.apply(this, arguments)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ALL_POSTS_VALUE = t.ALL_POSTS_PARAM = t.CATEGORY_PARAM = t.SLUG_PARAM = t.EXTERNAL = t.INTERNAL = void 0;
    t.INTERNAL = "internal";
    t.EXTERNAL = "external";
    t.SLUG_PARAM = "blogpost";
    t.CATEGORY_PARAM = "blogcategory";
    t.ALL_POSTS_PARAM = "blog";
    t.ALL_POSTS_VALUE = "y"
}, function(e, t, r) {
    var n = r(30)(Object, "create");
    e.exports = n
}, function(e, t, r) {
    var n = r(103),
        o = r(104),
        a = r(105),
        i = r(106),
        u = r(107);

    function l(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = u, e.exports = l
}, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t) {
        for (var r = e.length; r--;)
            if (n(e[r][0], t)) return r;
        return -1
    }
}, function(e, t, r) {
    var n = r(109);
    e.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, function(e, t, r) {
    var n = r(31),
        o = r(52);
    e.exports = function(e) {
        return null != e && o(e.length) && !n(e)
    }
}, function(e, t, r) {
    var n = r(15),
        o = r(12),
        a = "[object Symbol]";
    e.exports = function(e) {
        return "symbol" == typeof e || o(e) && n(e) == a
    }
}, function(e, t, r) {
    var n = r(16).Symbol;
    e.exports = n
}, function(e, t, r) {
    var n = r(94),
        o = r(98);
    e.exports = function(e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
    }
}, function(e, t, r) {
    var n = r(15),
        o = r(13),
        a = "[object AsyncFunction]",
        i = "[object Function]",
        u = "[object GeneratorFunction]",
        l = "[object Proxy]";
    e.exports = function(e) {
        if (!o(e)) return !1;
        var t = n(e);
        return t == i || t == u || t == a || t == l
    }
}, function(e, t, r) {
    var n = r(113);
    e.exports = function(e) {
        return null == e ? "" : n(e)
    }
}, function(e, t, r) {
    var n = r(48);
    e.exports = function(e, t, r) {
        "__proto__" == t && n ? n(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    var r = Object.prototype;
    e.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}, function(e, t, r) {
    var n = r(58),
        o = r(142),
        a = r(27);
    e.exports = function(e) {
        return a(e) ? n(e, !0) : o(e)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        formatDate: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US",
                t = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "long";
            if (!t || !t.endsWith("Z")) return t;
            var n = {
                year: "numeric",
                month: r,
                day: "numeric"
            };
            return new Intl.DateTimeFormat(e, n).format(new Date(t))
        }
    }
}, function(e, t) {
    function r(t) {
        "@babel/helpers - typeof";
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = r = function(e) {
            return typeof e
        } : e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(t)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isSame = t.existsAndIsSame = void 0;
    t.existsAndIsSame = function(e, t, r) {
        return r.every(function(r) {
            return (t[r] || e[r]) && t[r] === e[r]
        })
    };
    t.isSame = function(e, t, r) {
        return r.every(function(r) {
            return t[r] === e[r]
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadLibrary = function(e) {
        var t = e.blogId,
            r = e.postId;
        r = JSON.stringify(r);
        var n = document.createElement("script");
        n.setAttribute("type", "text/javascript"), n.setAttribute("class", a), n.setAttribute("async", ""), n.innerHTML = 'var disqus_config = function(){ this.page.url = "'.concat(window.location.href, '"; this.page.identifier = ').concat(r, "; }"), document.head.appendChild(n);
        var o = document.createElement("script");
        o.setAttribute("type", "text/javascript"), o.setAttribute("class", a), o.setAttribute("async", ""), o.src = "https://".concat(t, ".disqus.com/embed.js"), document.body.appendChild(o)
    }, t.removeLibrary = function() {
        (0, o.default)(document.getElementsByClassName(a)).forEach(function(e) {
            e.parentNode.removeChild(e)
        })
    }, t.shouldRenderWidget = function(e) {
        var t = e.post,
            r = t.hideCommenting,
            n = t.featureFlags;
        return !r && (void 0 === n ? {} : n).commenting
    }, t.WIDGET_CSS_CLASS = void 0;
    var o = n(r(75)),
        a = "disquswidget-js";
    t.WIDGET_CSS_CLASS = a
}, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
}, function(e, t, r) {
    var n = r(82);
    e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
    }
}, function(e, t, r) {
    (function(t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(t, r(85))
}, function(e, t, r) {
    var n = r(91),
        o = r(108),
        a = r(110),
        i = r(111),
        u = r(112);

    function l(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = u, e.exports = l
}, function(e, t, r) {
    var n = r(30)(r(16), "Map");
    e.exports = n
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
    }
}, function(e, t, r) {
    var n = r(33),
        o = r(20);
    e.exports = function(e, t, r) {
        (void 0 === r || o(e[t], r)) && (void 0 !== r || t in e) || n(e, t, r)
    }
}, function(e, t, r) {
    var n = r(30),
        o = function() {
            try {
                var e = n(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = o
}, function(e, t, r) {
    var n = r(50)(Object.getPrototypeOf, Object);
    e.exports = n
}, function(e, t) {
    e.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, function(e, t, r) {
    var n = r(133),
        o = r(12),
        a = Object.prototype,
        i = a.hasOwnProperty,
        u = a.propertyIsEnumerable,
        l = n(function() {
            return arguments
        }()) ? n : function(e) {
            return o(e) && i.call(e, "callee") && !u.call(e, "callee")
        };
    e.exports = l
}, function(e, t) {
    var r = 9007199254740991;
    e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
    }
}, function(e, t, r) {
    (function(e) {
        var n = r(16),
            o = r(135),
            a = "object" == typeof t && t && !t.nodeType && t,
            i = a && "object" == typeof e && e && !e.nodeType && e,
            u = i && i.exports === a ? n.Buffer : void 0,
            l = (u ? u.isBuffer : void 0) || o;
        e.exports = l
    }).call(t, r(34)(e))
}, function(e, t, r) {
    var n = r(15),
        o = r(49),
        a = r(12),
        i = "[object Object]",
        u = Function.prototype,
        l = Object.prototype,
        c = u.toString,
        s = l.hasOwnProperty,
        f = c.call(Object);
    e.exports = function(e) {
        if (!a(e) || n(e) != i) return !1;
        var t = o(e);
        if (null === t) return !0;
        var r = s.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == f
    }
}, function(e, t, r) {
    var n = r(136),
        o = r(137),
        a = r(138),
        i = a && a.isTypedArray,
        u = i ? o(i) : n;
    e.exports = u
}, function(e, t) {
    e.exports = function(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
    }
}, function(e, t, r) {
    var n = r(140),
        o = r(33);
    e.exports = function(e, t, r, a) {
        var i = !r;
        r || (r = {});
        for (var u = -1, l = t.length; ++u < l;) {
            var c = t[u],
                s = a ? a(r[c], e[c], c, r, e) : void 0;
            void 0 === s && (s = e[c]), i ? o(r, c, s) : n(r, c, s)
        }
        return r
    }
}, function(e, t, r) {
    var n = r(141),
        o = r(51),
        a = r(19),
        i = r(53),
        u = r(59),
        l = r(55),
        c = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var r = a(e),
            s = !r && o(e),
            f = !r && !s && i(e),
            d = !r && !s && !f && l(e),
            p = r || s || f || d,
            g = p ? n(e.length, String) : [],
            v = g.length;
        for (var y in e) !t && !c.call(e, y) || p && ("length" == y || f && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, v)) || g.push(y);
        return g
    }
}, function(e, t) {
    var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, t) {
        var o = typeof e;
        return !!(t = null == t ? r : t) && ("number" == o || "symbol" != o && n.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function(e, t, r) {
    var n = r(61),
        o = r(64);
    e.exports = function(e) {
        return n(function(t, r) {
            var n = -1,
                a = r.length,
                i = a > 1 ? r[a - 1] : void 0,
                u = a > 2 ? r[2] : void 0;
            for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, u && o(r[0], r[1], u) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a;) {
                var l = r[n];
                l && e(t, l, n, i)
            }
            return t
        })
    }
}, function(e, t, r) {
    var n = r(62),
        o = r(144),
        a = r(145);
    e.exports = function(e, t) {
        return a(o(e, t, n), e + "")
    }
}, function(e, t) {
    e.exports = function(e) {
        return e
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
}, function(e, t, r) {
    var n = r(20),
        o = r(27),
        a = r(59),
        i = r(13);
    e.exports = function(e, t, r) {
        if (!i(r)) return !1;
        var u = typeof t;
        return !!("number" == u ? o(r) && a(t, r.length) : "string" == u && t in r) && n(r[t], e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(149)),
        a = n(r(150)),
        i = n(r(151)),
        u = n(r(152)),
        l = {
            local: o.default,
            development: a.default,
            test: i.default,
            production: u.default
        };
    t.default = l, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertViewDevice = function(e) {
        return n.test(e) ? "mobile" : "tablet"
    }, t.feedUrlValidationRegex = void 0;
    t.feedUrlValidationRegex = "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,18})+";
    var n = /mobile/i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t) {
        if (!t) return e;
        var r = e.endsWith("/") ? "" : "/",
            n = e.indexOf("/:/") >= 0 ? "" : ":/";
        return "".concat(e).concat(r).concat(n).concat(t)
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(1)),
        i = o(r(10)),
        u = o(r(9)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = o(r(11)),
        v = r(18);

    function y(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var h = function(e) {
        (0, l.default)(r, e);
        var t = y(r);

        function r() {
            var e;
            return (0, a.default)(this, r), (e = t.apply(this, arguments)).renderCategory = e.renderCategory.bind((0, i.default)(e)), e
        }
        return (0, u.default)(r, null, [{
            key: "propTypes",
            get: function() {
                return {
                    categories: d.default.array.isRequired,
                    categoryClickHandler: d.default.func.isRequired,
                    selectedCategory: d.default.string,
                    staticContent: d.default.object,
                    renderVertically: d.default.bool,
                    title: d.default.string
                }
            }
        }]), (0, u.default)(r, [{
            key: "onCategoryClick",
            value: function(e, t) {
                t.preventDefault(), this.props.categoryClickHandler(e)
            }
        }, {
            key: "renderCategory",
            value: function(e, t) {
                var r = this.props,
                    n = r.selectedCategory,
                    o = r.staticContent,
                    a = !e,
                    i = a && !n || e === n,
                    u = a ? o.allPosts : e,
                    l = i ? p.UX2.Element.Link.Active : p.UX2.Element.Link;
                return f.default.createElement(p.UX2.Element.ListItem.Inline, null, f.default.createElement(l, {
                    key: e,
                    "data-aid": "".concat(g.default.RSS_FEED_CATEGORY_RENDERED, "_").concat(t),
                    href: (0, v.setCategoryParam)(e),
                    onClick: this.onCategoryClick.bind(this, e)
                }, u))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.categories,
                    r = e.renderVertically,
                    n = void 0 !== r && r,
                    o = e.title,
                    a = t.length ? [""].concat(t) : [],
                    i = n ? p.UX2.Group.Nav.Vertical : p.UX2.Group.Nav.Horizontal;
                return f.default.createElement(i, {
                    "data-aid": g.default.RSS_FEED_CATEGORIES_RENDERED
                }, o && f.default.createElement(p.UX2.Element.Heading, {
                    children: o
                }), a.length && f.default.createElement(p.UX2.Element.List, null, a.map(this.renderCategory)))
            }
        }]), r
    }(f.Component);
    t.default = h, e.exports = t.default
}, function(e, t, r) {
    var n = r(15),
        o = r(12),
        a = r(54),
        i = "[object DOMException]",
        u = "[object Error]";
    e.exports = function(e) {
        if (!o(e)) return !1;
        var t = n(e);
        return t == u || t == i || "string" == typeof e.message && "string" == typeof e.name && !a(e)
    }
}, function(e, t) {
    e.exports = /<%=([\s\S]+?)%>/g
}, function(e, t, r) {
    "use strict";
    window.wsb = window.wsb || {}, window.wsb.BlogRouter3 = r(72)
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(1)),
        a = n(r(2)),
        i = n(r(3)),
        u = n(r(4)),
        l = n(r(74)),
        c = n(r(80));

    function s(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, u.default)(e);
            if (t) {
                var o = (0, u.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
    var f = function(e) {
        (0, a.default)(r, e);
        var t = s(r);

        function r() {
            var e;
            return (0, o.default)(this, r), (e = t.apply(this, arguments)).RssFeeds = c.default, e.imgParams = "rs=w:200", e
        }
        return r
    }(l.default);
    t.default = f, e.exports = t.default
}, function(e, t) {
    function r(t, n) {
        return e.exports = r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(t, n)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(21)),
        i = o(r(17)),
        u = o(r(1)),
        l = o(r(10)),
        c = o(r(9)),
        s = o(r(2)),
        f = o(r(3)),
        d = o(r(4)),
        p = n(r(5)),
        g = o(r(6)),
        v = r(7),
        y = r(22),
        h = r(14),
        m = r(18),
        b = r(39),
        _ = r(40);

    function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function R(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? E(Object(r), !0).forEach(function(t) {
                (0, i.default)(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function S(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, d.default)(e);
            if (t) {
                var o = (0, d.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, f.default)(this, r)
        }
    }
    var w = v.constants.renderModes.PUBLISH,
        P = function() {
            return "undefined" == typeof window
        },
        O = function(e) {
            (0, s.default)(r, e);
            var t = S(r);

            function r() {
                var e;
                return (0, u.default)(this, r), (e = t.apply(this, arguments)).state = {}, e.filterCategory = e.filterCategory.bind((0, l.default)(e)), e.navigate = e.navigate.bind((0, l.default)(e)), e.updateStateFromLocation = e.updateStateFromLocation.bind((0, l.default)(e)), e.scrollIntoView = e.scrollIntoView.bind((0, l.default)(e)), e.waitForComments = e.waitForComments.bind((0, l.default)(e)), e
            }
            return (0, c.default)(r, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        env: g.default.string,
                        websiteId: g.default.string.isRequired,
                        pageId: g.default.string,
                        locale: g.default.string,
                        section: g.default.string,
                        category: g.default.string,
                        renderMode: g.default.oneOf(Object.values(v.constants.renderModes)).isRequired,
                        viewDevice: g.default.oneOf(Object.values(v.constants.renderDevices)).isRequired,
                        id: g.default.string,
                        rssFeed: g.default.string,
                        categoriesFilter: g.default.array,
                        blogType: g.default.string.isRequired,
                        layout: g.default.string.isRequired,
                        staticContent: g.default.object.isRequired,
                        backgroundImage: g.default.string,
                        visitorMode: g.default.bool.isRequired,
                        detachedMode: g.default.bool.isRequired,
                        currentPageRoute: g.default.string
                    }
                }
            }]), (0, c.default)(r, [{
                key: "scrollIntoView",
                value: function(e) {
                    var t = this.props.id;
                    this.shouldScrollIntoView(e) && "undefined" != typeof document && ((0, h.hasPostUrl)(window) && (0, _.shouldRenderWidget)(window._BLOG_DATA) ? this.waitForComments() : document.getElementById(t).scrollIntoView())
                }
            }, {
                key: "shouldScrollIntoView",
                value: function(e) {
                    if (this.props.renderMode !== w) return !1;
                    var t = e || this.state,
                        r = t.slug,
                        n = t.selectedCategory,
                        o = (0, h.getAllPostsParam)();
                    return !!(r || n || o || (0, h.hasPostUrl)(window))
                }
            }, {
                key: "waitForComments",
                value: function() {
                    var e = document.getElementById("disqus_thread");
                    e ? e.scrollIntoView() : requestAnimationFrame(this.waitForComments)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = {
                        slug: this.getSlug(),
                        selectedCategory: this.getSelectedCategory()
                    };
                    e.slug ? this.setState(R(R({}, e), {}, {
                        previousScrollPosition: window.scrollY
                    })) : e.selectedCategory && this.setState(e), this.scrollIntoView(e), window.addEventListener("popstate", this.updateStateFromLocation), this.props.renderMode !== w && window.addEventListener("blog-navigate", this.updateStateFromLocation)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("popstate", this.updateStateFromLocation), window.removeEventListener("blog-navigate", this.updateStateFromLocation)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.renderMode !== e.renderMode && this.updateStateFromLocation()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props.blogType !== e.blogType || e.blogType !== y.INTERNAL || "EDIT" === e.renderMode || !(0, b.existsAndIsSame)(this.state, t, ["slug"]) || !(0, b.isSame)(this.state, t, ["selectedCategory"])
                }
            }, {
                key: "updateStateFromLocation",
                value: function() {
                    this.setState({
                        slug: this.getSlug(),
                        selectedCategory: this.getSelectedCategory()
                    })
                }
            }, {
                key: "getSlug",
                value: function() {
                    if (!P()) return this.props.renderMode === w && (0, h.pathContainsFriendlySlug)() ? (0, h.getFriendlySlug)() : (0, h.getSlugParam)()
                }
            }, {
                key: "getSelectedCategory",
                value: function() {
                    if (!P()) return (0, m.getCategoryParam)()
                }
            }, {
                key: "generateNavigateEvent",
                value: function() {
                    if (window.Event.prototype.initEvent) {
                        var e = document.createEvent("Event");
                        return e.initEvent("blog-navigate", !0, !0), e
                    }
                    return new window.Event("blog-navigate")
                }
            }, {
                key: "goToUrl",
                value: function(e) {
                    e && !P() && e !== window.location.href && (this.props.renderMode === w ? window.location.assign(e) : (window.history.pushState({}, null, e), window.dispatchEvent(this.generateNavigateEvent())))
                }
            }, {
                key: "filterCategory",
                value: function(e) {
                    var t = this.getSelectedCategory(),
                        r = (0, m.setCategoryParam)(e);
                    e || (r = (0, h.setAllPostsParam)(r)), t === e && null !== e || this.goToUrl(r)
                }
            }, {
                key: "navigate",
                value: function(e) {
                    if (!P()) {
                        var t, r = this.props,
                            n = r.renderMode,
                            o = r.currentPageRoute;
                        t = n === w ? e ? (0, h.buildPostPath)(e, o) : (0, h.setAllPostsParam)((0, h.getPagePath)()) : (0, h.setSlugParam)(e), this.goToUrl(t)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return p.default.createElement(this.RssFeeds, (0, a.default)({
                        slug: this.state.slug || "",
                        navigate: this.navigate,
                        imgParams: this.imgParams,
                        filterCategory: this.filterCategory,
                        selectedCategory: this.state.selectedCategory || "",
                        onFeedLoaded: this.scrollIntoView
                    }, this.props))
                }
            }]), r
        }(p.Component);
    t.default = O, e.exports = t.default
}, function(e, t, r) {
    var n = r(76),
        o = r(77),
        a = r(78),
        i = r(79);
    e.exports = function(e) {
        return n(e) || o(e) || a(e) || i()
    }
}, function(e, t, r) {
    var n = r(41);
    e.exports = function(e) {
        if (Array.isArray(e)) return n(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function(e, t, r) {
    var n = r(41);
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
        }
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(1)),
        a = n(r(2)),
        i = n(r(3)),
        u = n(r(4)),
        l = n(r(81)),
        c = n(r(179));

    function s(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, u.default)(e);
            if (t) {
                var o = (0, u.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
    var f = function(e) {
        (0, a.default)(r, e);
        var t = s(r);

        function r() {
            var e;
            return (0, o.default)(this, r), (e = t.apply(this, arguments)).cardGroupComponent = c.default, e
        }
        return r
    }(l.default);
    t.default = f, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(21)),
        i = o(r(17)),
        u = o(r(1)),
        l = o(r(9)),
        c = o(r(2)),
        s = o(r(3)),
        f = o(r(4)),
        d = n(r(5)),
        p = r(6),
        g = o(r(42)),
        v = o(r(115)),
        y = r(7),
        h = o(r(65)),
        m = r(66),
        b = o(r(11)),
        _ = o(r(154)),
        E = r(18),
        R = r(39),
        S = r(22),
        w = r(177),
        P = o(r(178)),
        O = r(14);

    function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function C(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, f.default)(e);
            if (t) {
                var o = (0, f.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, s.default)(this, r)
        }
    }
    var T = y.utils.postRender,
        D = T.Actions,
        k = T.monitor,
        j = T.onWidgetRendered,
        A = y.UX.IntersectionObserver,
        L = function(e) {
            (0, c.default)(r, e);
            var t = C(r);

            function r(e) {
                var n;
                return (0, u.default)(this, r), (n = t.apply(this, arguments)).handleVisible = function() {
                    n.setState({
                        visible: !0
                    })
                }, n.regex = new RegExp(m.feedUrlValidationRegex, "i"), n.state = {
                    feed: [],
                    categories: [],
                    blogType: n.props.blogType,
                    feedURL: n.props.rssFeed,
                    categoriesFilter: n.props.categoriesFilter,
                    feedLoading: !0,
                    postLoading: !1,
                    unfetchableFeed: !1,
                    visible: "PUBLISH" !== e.renderMode || (0, O.getFriendlySlugPosition)("undefined" != typeof window ? window.location.pathname : "") > -1
                }, n
            }
            return (0, l.default)(r, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        env: p.PropTypes.string,
                        appDomain: p.PropTypes.string,
                        websiteId: p.PropTypes.string.isRequired,
                        pageId: p.PropTypes.string,
                        locale: p.PropTypes.string,
                        section: p.PropTypes.string,
                        category: p.PropTypes.string,
                        renderMode: p.PropTypes.string.isRequired,
                        viewDevice: p.PropTypes.string.isRequired,
                        id: p.PropTypes.string,
                        rssFeed: p.PropTypes.string,
                        categoriesFilter: p.PropTypes.array,
                        blogType: p.PropTypes.string.isRequired,
                        layout: p.PropTypes.string.isRequired,
                        staticContent: p.PropTypes.object.isRequired,
                        backgroundImage: p.PropTypes.string,
                        visitorMode: p.PropTypes.bool.isRequired,
                        detachedMode: p.PropTypes.bool.isRequired,
                        slug: p.PropTypes.string,
                        navigate: p.PropTypes.func,
                        imgParams: p.PropTypes.string,
                        filterCategory: p.PropTypes.func,
                        selectedCategory: p.PropTypes.string,
                        onFeedLoaded: p.PropTypes.func,
                        currentPageRoute: p.PropTypes.string
                    }
                }
            }]), (0, l.default)(r, [{
                key: "componentDidMount",
                value: function() {
                    "undefined" == typeof window || (0, g.default)(window, "wsb.cache.blog") || (0, v.default)(window, {
                        wsb: {
                            cache: {
                                blog: {}
                            }
                        }
                    }), this._isMounted = !0;
                    var e = this.props,
                        t = e.blogType,
                        r = e.slug,
                        n = e.id;
                    k(n, D.SCROLL_TO_URL_FRAGMENT), t === S.INTERNAL && r && this.getPost(this.props, r), this.getFeed()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props.blogType !== e.blogType || e.blogType !== S.INTERNAL || "EDIT" === e.renderMode || !(0, R.existsAndIsSame)(this.props, e, ["slug"]) || !(0, R.isSame)(this.state, t, ["post", "feed", "selectedCategory"])
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var r = this.props,
                        n = r.blogType,
                        o = r.slug,
                        a = r.rssFeed,
                        i = r.categoriesFilter,
                        u = r.id;
                    n === S.INTERNAL ? o && o !== e.slug ? this.getPost(this.props, o) : (!o && e.slug || e.categoriesFilter !== i) && this.getFeed() : n === e.blogType && a === e.rssFeed || this.getFeed(), this.checkSettings(this.props), t.feedLoading && !this.state.feedLoading && j(u, D.SCROLL_TO_URL_FRAGMENT)
                }
            }, {
                key: "checkSettings",
                value: function(e) {
                    var t = !1,
                        r = e.blogType,
                        n = e.rssFeed,
                        o = e.categoriesFilter;
                    r !== this.state.blogType && (this.setState({
                        blogType: e.blogType
                    }), t = !0), n !== this.state.feedURL && (this.setState({
                        feedURL: n
                    }), t = !0), o !== this.state.categoriesFilter && (this.setState({
                        categoriesFilter: o
                    }), t = !0), t && this.getFeed()
                }
            }, {
                key: "getFeed",
                value: function() {
                    this.getDataFromApi(this.getApiFeedUrl(this.props))
                }
            }, {
                key: "getPost",
                value: function(e, t) {
                    if (t)
                        if (window._BLOG_DATA && window._BLOG_DATA.post) this.setState({
                            post: window._BLOG_DATA.post,
                            postLoading: !1
                        });
                        else {
                            this.setState({
                                post: null,
                                postLoading: !0
                            });
                            var r = e.env,
                                n = e.websiteId,
                                o = h.default && h.default[r] || {},
                                a = "".concat(o.blogDomain, "/v1/website/").concat(n, "/feed/post/").concat(t);
                            this.getDataFromApi(a, t)
                        }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._isMounted = !1
                }
            }, {
                key: "getApiFeedUrl",
                value: function(e) {
                    var t, r = e.env,
                        n = e.websiteId,
                        o = e.pageId,
                        a = e.id,
                        i = e.locale,
                        u = e.blogType,
                        l = e.rssFeed,
                        c = e.categoriesFilter,
                        s = e.renderMode,
                        f = {},
                        d = h.default && h.default[r] || {},
                        p = d.blogDomain,
                        g = d.rssDomain;
                    if (u === S.INTERNAL && "DISPLAY" !== s) {
                        t = "".concat(p, "/v1/website/").concat(n, "/feed"), c && c.length && (f.categories = c.join(","));
                        var v = Object.keys(f).map(function(e) {
                            return "".concat(e, "=").concat(f[e])
                        }).join("&");
                        t = v ? "".concat(t, "?").concat(v) : t
                    } else {
                        if (!this.regex.test(l)) return void this.setState({
                            feedLoading: !1,
                            feed: [],
                            categories: []
                        });
                        t = "".concat(g, "/v1/feed/").concat(n, "/").concat(o, "/").concat(a, "?feedUrl=").concat(encodeURIComponent(l), "&locale=").concat(i)
                    }
                    return t
                }
            }, {
                key: "getDataFromApi",
                value: function(e, t) {
                    var r = this;
                    this._isMounted && e && this.getPromise(e).then(function(n) {
                        t && e.indexOf(t) > -1 ? r.setState({
                            slug: t,
                            post: n,
                            postLoading: !1
                        }) : r.setState({
                            feed: n,
                            categories: (0, E.getAllCategories)(n),
                            feedLoading: !1
                        }, r.props.onFeedLoaded)
                    }).catch(function() {
                        t && e.indexOf(t) > -1 ? r.setState({
                            unfetchableFeed: !0,
                            slug: t,
                            post: {},
                            postLoading: !1
                        }) : r.setState({
                            unfetchableFeed: !0,
                            feed: [],
                            categories: [],
                            feedLoading: !1
                        })
                    })
                }
            }, {
                key: "retrievePromise",
                value: function(e, t) {
                    if ("undefined" != typeof window && (e in window.wsb.cache.blog && t <= window.wsb.cache.blog[e].time + 600)) return window.wsb.cache.blog[e].promise;
                    return null
                }
            }, {
                key: "getPromise",
                value: function(e) {
                    var t = Math.floor((new Date).getTime() / 1e3),
                        r = this.retrievePromise(e, t);
                    if (r) return r;
                    var n = new Promise(function(t, r) {
                        var n = new XMLHttpRequest;
                        n.open("GET", e, !0), n.send(), n.onreadystatechange = function() {
                            if (4 === n.readyState)
                                if (200 === n.status || 304 === n.status) {
                                    var e = JSON.parse(n.responseText);
                                    t(e.feed || e.post)
                                } else r(new Error("Failed to retrieve feed"))
                        }
                    });
                    return "undefined" != typeof window && (window.wsb.cache.blog[e] = {
                        promise: n,
                        time: t
                    }), n
                }
            }, {
                key: "renderEditorPlaceholderMessage",
                value: function() {
                    var e, t, r = this.props,
                        n = r.appDomain,
                        o = r.renderMode,
                        a = r.staticContent,
                        u = r.websiteId,
                        l = (t = {
                            renderMode: o
                        }, (0, i.default)(t, "data-aid", b.default.RSS_BLOG_CTA_RENDERED), (0, i.default)(t, "beforeContent", d.default.createElement(d.default.Fragment, null, d.default.createElement(y.UX2.Element.Text, {
                            typography: "HeadingGamma",
                            active: !0,
                            children: a.edit_mode_cta.title,
                            className: w.AB_BLOG_WIDGET_SETUP_TITLE
                        }), d.default.createElement(y.UX2.Element.Text, {
                            typography: "BodyBeta",
                            children: a.edit_mode_cta.sub_title,
                            className: w.AB_BLOG_WIDGET_SETUP_SUBTITLE
                        }))), (0, i.default)(t, "button", (e = {
                            typography: "none",
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            href: "https://blogging.".concat(n, "/website/").concat(u),
                            children: a.edit_mode_cta.btn_label,
                            className: w.AB_BLOG_WIDGET_SETUP_BUTTON
                        }, (0, i.default)(e, "data-aid", b.default.RSS_BTN_CTA_RENDERED), (0, i.default)(e, "trafficId", "pandc.vnext.edit_site.rss_widget.start_writing.click"), e)), t);
                    return d.default.createElement(y.UX2.Component.ZeroStateOverlay, l)
                }
            }, {
                key: "renderPlaceholderMessage",
                value: function() {
                    var e = this.props,
                        t = e.visitorMode,
                        r = e.staticContent,
                        n = e.category,
                        o = e.section,
                        i = e.backgroundImage,
                        u = r.noPosts,
                        l = r.feedNotFetchable,
                        c = this.state.unfetchableFeed && !t ? l : u,
                        s = {
                            category: i ? "accent" : n,
                            section: i ? "overlay" : o
                        };
                    return d.default.createElement(y.UX2.Group.Card, (0, a.default)({}, s, {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "auto",
                            paddingVertical: "medium",
                            paddingHorizontal: "medium",
                            margin: "0 auto",
                            "@sm": {
                                width: "400px"
                            }
                        }
                    }), d.default.createElement(y.UX2.Element.Text.Major, {
                        "data-aid": b.default.RSS_NO_POSTS,
                        style: {
                            maxWidth: "100%",
                            textAlign: "center",
                            margin: "0"
                        },
                        featured: !0
                    }, c))
                }
            }, {
                key: "renderLoadingAnimation",
                value: function() {
                    var e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? x(Object(r), !0).forEach(function(t) {
                                (0, i.default)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        position: "relative"
                    }, this.extraLoadingContainerStyles && this.extraLoadingContainerStyles);
                    return d.default.createElement(y.UX2.Element.Block, {
                        style: e
                    }, d.default.createElement(y.UX2.Element.Loader, {
                        size: "medium",
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            paddingTop: "medium",
                            fontColor: "lowContrast"
                        }
                    }))
                }
            }, {
                key: "renderPost",
                value: function() {
                    var e = this.props,
                        t = e.env,
                        r = e.locale,
                        n = e.navigate,
                        o = e.renderMode,
                        a = e.viewDevice,
                        i = e.staticContent,
                        u = e.websiteId,
                        l = e.filterCategory,
                        c = e.selectedCategory,
                        s = e.currentPageRoute,
                        f = this.state,
                        p = f.post,
                        g = f.feed,
                        v = f.categories;
                    return d.default.createElement(_.default, {
                        post: p,
                        locale: r,
                        feed: g,
                        staticContent: i,
                        backClickHandler: n,
                        viewDevice: a,
                        renderMode: o,
                        websiteId: u,
                        env: t,
                        categoryClickHandler: l,
                        categories: v,
                        selectedCategory: c,
                        currentPageRoute: s
                    })
                }
            }, {
                key: "renderFeed",
                value: function() {
                    var e = this.props,
                        t = e.locale,
                        r = e.section,
                        n = e.category,
                        o = e.renderMode,
                        a = e.viewDevice,
                        i = e.detachedMode,
                        u = e.staticContent,
                        l = e.backgroundImage,
                        c = e.blogType,
                        s = e.navigate,
                        f = e.filterCategory,
                        p = e.selectedCategory,
                        g = e.currentPageRoute,
                        v = c === S.INTERNAL && "DISPLAY" === o ? "" : this.props.imgParams,
                        y = this.state.feed,
                        h = (0, E.filterFeedByCategory)(y, p),
                        m = (0, P.default)(u.staticFeed),
                        b = "ADD" === o && y.length <= 0 ? m : h;
                    return d.default.createElement(this.cardGroupComponent, {
                        locale: t,
                        feeds: b,
                        viewDevice: a,
                        renderMode: o,
                        section: r,
                        category: n,
                        detachedMode: i,
                        staticContent: u,
                        backgroundImage: l,
                        imgParams: v,
                        blogType: c,
                        cardClickHandler: c === S.INTERNAL ? s : void 0,
                        categoryClickHandler: f,
                        categories: this.state.categories,
                        selectedCategory: p,
                        currentPageRoute: g
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.renderMode,
                        r = e.blogType,
                        n = e.slug,
                        o = this.state,
                        a = o.feed,
                        i = o.postLoading,
                        u = o.feedLoading;
                    return o.visible ? i || u ? this.renderLoadingAnimation() : "ADD" === t && a.length <= 0 ? this.renderFeed() : window._BLOG_DATA || n && n.length > 0 ? this.renderPost() : a.length > 0 ? this.renderFeed() : r === S.INTERNAL && "EDIT" === t ? this.renderEditorPlaceholderMessage() : this.renderPlaceholderMessage() : d.default.createElement(A, {
                        callback: this.handleVisible
                    })
                }
            }]), r
        }(d.Component);
    t.default = L, e.exports = t.default
}, function(e, t, r) {
    var n = r(83),
        o = r(114);
    e.exports = function(e, t) {
        for (var r = 0, a = (t = n(t, e)).length; null != e && r < a;) e = e[o(t[r++])];
        return r && r == a ? e : void 0
    }
}, function(e, t, r) {
    var n = r(19),
        o = r(84),
        a = r(88),
        i = r(32);
    e.exports = function(e, t) {
        return n(e) ? e : o(e, t) ? [e] : a(i(e))
    }
}, function(e, t, r) {
    var n = r(19),
        o = r(28),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    e.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || i.test(e) || !a.test(e) || null != t && e in Object(t)
    }
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    var n = r(29),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        u = n ? n.toStringTag : void 0;
    e.exports = function(e) {
        var t = a.call(e, u),
            r = e[u];
        try {
            e[u] = void 0;
            var n = !0
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? e[u] = r : delete e[u]), o
    }
}, function(e, t) {
    var r = Object.prototype.toString;
    e.exports = function(e) {
        return r.call(e)
    }
}, function(e, t, r) {
    var n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(89)(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(n, function(e, r, n, a) {
                t.push(n ? a.replace(o, "$1") : r || e)
            }), t
        });
    e.exports = a
}, function(e, t, r) {
    var n = r(90),
        o = 500;
    e.exports = function(e) {
        var t = n(e, function(e) {
                return r.size === o && r.clear(), e
            }),
            r = t.cache;
        return t
    }
}, function(e, t, r) {
    var n = r(44),
        o = "Expected a function";

    function a(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
        var r = function() {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                a = r.cache;
            if (a.has(o)) return a.get(o);
            var i = e.apply(this, n);
            return r.cache = a.set(o, i) || a, i
        };
        return r.cache = new(a.Cache || n), r
    }
    a.Cache = n, e.exports = a
}, function(e, t, r) {
    var n = r(92),
        o = r(24),
        a = r(45);
    e.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(a || o),
            string: new n
        }
    }
}, function(e, t, r) {
    var n = r(93),
        o = r(99),
        a = r(100),
        i = r(101),
        u = r(102);

    function l(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = u, e.exports = l
}, function(e, t, r) {
    var n = r(23);
    e.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, function(e, t, r) {
    var n = r(31),
        o = r(95),
        a = r(13),
        i = r(97),
        u = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        s = l.toString,
        f = c.hasOwnProperty,
        d = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!a(e) || o(e)) && (n(e) ? d : u).test(i(e))
    }
}, function(e, t, r) {
    var n, o = r(96),
        a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    e.exports = function(e) {
        return !!a && a in e
    }
}, function(e, t, r) {
    var n = r(16)["__core-js_shared__"];
    e.exports = n
}, function(e, t) {
    var r = Function.prototype.toString;
    e.exports = function(e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t, r) {
    var n = r(23),
        o = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return r === o ? void 0 : r
        }
        return a.call(t, e) ? t[e] : void 0
    }
}, function(e, t, r) {
    var n = r(23),
        o = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
    }
}, function(e, t, r) {
    var n = r(23),
        o = "__lodash_hash_undefined__";
    e.exports = function(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? o : t, this
    }
}, function(e, t) {
    e.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(e, t, r) {
    var n = r(25),
        o = Array.prototype.splice;
    e.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0 || (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 0))
    }
}, function(e, t, r) {
    var n = r(25);
    e.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, function(e, t, r) {
    var n = r(25);
    e.exports = function(e) {
        return n(this.__data__, e) > -1
    }
}, function(e, t, r) {
    var n = r(25);
    e.exports = function(e, t) {
        var r = this.__data__,
            o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
    }
}, function(e, t, r) {
    var n = r(26);
    e.exports = function(e) {
        var t = n(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function(e, t, r) {
    var n = r(26);
    e.exports = function(e) {
        return n(this, e).get(e)
    }
}, function(e, t, r) {
    var n = r(26);
    e.exports = function(e) {
        return n(this, e).has(e)
    }
}, function(e, t, r) {
    var n = r(26);
    e.exports = function(e, t) {
        var r = n(this, e),
            o = r.size;
        return r.set(e, t), this.size += r.size == o ? 0 : 1, this
    }
}, function(e, t, r) {
    var n = r(29),
        o = r(46),
        a = r(19),
        i = r(28),
        u = 1 / 0,
        l = n ? n.prototype : void 0,
        c = l ? l.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return o(t, e) + "";
        if (i(t)) return c ? c.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -u ? "-0" : r
    }
}, function(e, t, r) {
    var n = r(28),
        o = 1 / 0;
    e.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
}, function(e, t, r) {
    var n = r(116),
        o = r(60)(function(e, t, r) {
            n(e, t, r)
        });
    e.exports = o
}, function(e, t, r) {
    var n = r(117),
        o = r(47),
        a = r(123),
        i = r(125),
        u = r(13),
        l = r(36),
        c = r(56);
    e.exports = function e(t, r, s, f, d) {
        t !== r && a(r, function(a, l) {
            if (d || (d = new n), u(a)) i(t, r, l, s, e, f, d);
            else {
                var p = f ? f(c(t, l), a, l + "", t, r, d) : void 0;
                void 0 === p && (p = a), o(t, l, p)
            }
        }, l)
    }
}, function(e, t, r) {
    var n = r(24),
        o = r(118),
        a = r(119),
        i = r(120),
        u = r(121),
        l = r(122);

    function c(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size
    }
    c.prototype.clear = o, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = u, c.prototype.set = l, e.exports = c
}, function(e, t, r) {
    var n = r(24);
    e.exports = function() {
        this.__data__ = new n, this.size = 0
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.get(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}, function(e, t, r) {
    var n = r(24),
        o = r(45),
        a = r(44),
        i = 200;
    e.exports = function(e, t) {
        var r = this.__data__;
        if (r instanceof n) {
            var u = r.__data__;
            if (!o || u.length < i - 1) return u.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new a(u)
        }
        return r.set(e, t), this.size = r.size, this
    }
}, function(e, t, r) {
    var n = r(124)();
    e.exports = n
}, function(e, t) {
    e.exports = function(e) {
        return function(t, r, n) {
            for (var o = -1, a = Object(t), i = n(t), u = i.length; u--;) {
                var l = i[e ? u : ++o];
                if (!1 === r(a[l], l, a)) break
            }
            return t
        }
    }
}, function(e, t, r) {
    var n = r(47),
        o = r(126),
        a = r(127),
        i = r(130),
        u = r(131),
        l = r(51),
        c = r(19),
        s = r(134),
        f = r(53),
        d = r(31),
        p = r(13),
        g = r(54),
        v = r(55),
        y = r(56),
        h = r(139);
    e.exports = function(e, t, r, m, b, _, E) {
        var R = y(e, r),
            S = y(t, r),
            w = E.get(S);
        if (w) n(e, r, w);
        else {
            var P = _ ? _(R, S, r + "", e, t, E) : void 0,
                O = void 0 === P;
            if (O) {
                var x = c(S),
                    C = !x && f(S),
                    T = !x && !C && v(S);
                P = S, x || C || T ? c(R) ? P = R : s(R) ? P = i(R) : C ? (O = !1, P = o(S, !0)) : T ? (O = !1, P = a(S, !0)) : P = [] : g(S) || l(S) ? (P = R, l(R) ? P = h(R) : p(R) && !d(R) || (P = u(S))) : O = !1
            }
            O && (E.set(S, P), b(P, S, m, _, E), E.delete(S)), n(e, r, P)
        }
    }
}, function(e, t, r) {
    (function(e) {
        var n = r(16),
            o = "object" == typeof t && t && !t.nodeType && t,
            a = o && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === o ? n.Buffer : void 0,
            u = i ? i.allocUnsafe : void 0;
        e.exports = function(e, t) {
            if (t) return e.slice();
            var r = e.length,
                n = u ? u(r) : new e.constructor(r);
            return e.copy(n), n
        }
    }).call(t, r(34)(e))
}, function(e, t, r) {
    var n = r(128);
    e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
}, function(e, t, r) {
    var n = r(129);
    e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t
    }
}, function(e, t, r) {
    var n = r(16).Uint8Array;
    e.exports = n
}, function(e, t) {
    e.exports = function(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
}, function(e, t, r) {
    var n = r(132),
        o = r(49),
        a = r(35);
    e.exports = function(e) {
        return "function" != typeof e.constructor || a(e) ? {} : n(o(e))
    }
}, function(e, t, r) {
    var n = r(13),
        o = Object.create,
        a = function() {
            function e() {}
            return function(t) {
                if (!n(t)) return {};
                if (o) return o(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
    e.exports = a
}, function(e, t, r) {
    var n = r(15),
        o = r(12),
        a = "[object Arguments]";
    e.exports = function(e) {
        return o(e) && n(e) == a
    }
}, function(e, t, r) {
    var n = r(27),
        o = r(12);
    e.exports = function(e) {
        return o(e) && n(e)
    }
}, function(e, t) {
    e.exports = function() {
        return !1
    }
}, function(e, t, r) {
    var n = r(15),
        o = r(52),
        a = r(12),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
        return a(e) && o(e.length) && !!i[n(e)]
    }
}, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, function(e, t, r) {
    (function(e) {
        var n = r(43),
            o = "object" == typeof t && t && !t.nodeType && t,
            a = o && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === o && n.process,
            u = function() {
                try {
                    var e = a && a.require && a.require("util").types;
                    return e || i && i.binding && i.binding("util")
                } catch (e) {}
            }();
        e.exports = u
    }).call(t, r(34)(e))
}, function(e, t, r) {
    var n = r(57),
        o = r(36);
    e.exports = function(e) {
        return n(e, o(e))
    }
}, function(e, t, r) {
    var n = r(33),
        o = r(20),
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r) {
        var i = e[t];
        a.call(e, t) && o(i, r) && (void 0 !== r || t in e) || n(e, t, r)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
}, function(e, t, r) {
    var n = r(13),
        o = r(35),
        a = r(143),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!n(e)) return a(e);
        var t = o(e),
            r = [];
        for (var u in e)("constructor" != u || !t && i.call(e, u)) && r.push(u);
        return r
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = [];
        if (null != e)
            for (var r in Object(e)) t.push(r);
        return t
    }
}, function(e, t, r) {
    var n = r(63),
        o = Math.max;
    e.exports = function(e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var a = arguments, i = -1, u = o(a.length - t, 0), l = Array(u); ++i < u;) l[i] = a[t + i];
                i = -1;
                for (var c = Array(t + 1); ++i < t;) c[i] = a[i];
                return c[t] = r(l), n(e, this, c)
            }
    }
}, function(e, t, r) {
    var n = r(146),
        o = r(148)(n);
    e.exports = o
}, function(e, t, r) {
    var n = r(147),
        o = r(48),
        a = r(62),
        i = o ? function(e, t) {
            return o(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(t),
                writable: !0
            })
        } : a;
    e.exports = i
}, function(e, t) {
    e.exports = function(e) {
        return function() {
            return e
        }
    }
}, function(e, t) {
    var r = 800,
        n = 16,
        o = Date.now;
    e.exports = function(e) {
        var t = 0,
            a = 0;
        return function() {
            var i = o(),
                u = n - (i - a);
            if (a = i, u > 0) {
                if (++t >= r) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        blogDomain: "https://blog.apps.dev-secureserver.net",
        rssDomain: "https://rss.apps.dev-secureserver.net",
        subscribersDomain: "https://gem.dev-godaddy.com"
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        blogDomain: "https://blog.apps.dev-secureserver.net",
        rssDomain: "https://rss.apps.dev-secureserver.net",
        subscribersDomain: "https://gem.dev-godaddy.com"
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        blogDomain: "https://blog.apps.test-secureserver.net",
        rssDomain: "https://rss.apps.test-secureserver.net",
        subscribersDomain: "https://gem.test-godaddy.com"
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        blogDomain: "https://blog.apps.secureserver.net",
        rssDomain: "https://rss.apps.secureserver.net",
        subscribersDomain: "https://emailmarketing.secureserver.net"
    }, e.exports = t.default
}, function(e, t) {
    e.exports = keyMirror
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(1)),
        i = o(r(9)),
        u = o(r(10)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = r(37),
        v = o(r(155)),
        y = o(r(11)),
        h = r(14),
        m = o(r(159)),
        b = o(r(160)),
        _ = o(r(176));

    function E(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var R = function(e) {
        (0, l.default)(r, e);
        var t = E(r);

        function r() {
            var e;
            return (0, a.default)(this, r), (e = t.apply(this, arguments)).onBackClick = e.onBackClick.bind((0, u.default)(e)), e.renderCategories = e.renderCategories.bind((0, u.default)(e)), e.renderSubHeading = e.renderSubHeading.bind((0, u.default)(e)), e
        }
        return (0, i.default)(r, [{
            key: "onBackClick",
            value: function(e) {
                var t = this.props.backClickHandler;
                t && (e.preventDefault(), t())
            }
        }, {
            key: "renderCategories",
            value: function(e) {
                if (e && 0 !== e.length) return e.join(", ")
            }
        }, {
            key: "renderSubHeading",
            value: function() {
                var e = this.props,
                    t = e.post,
                    r = e.viewDevice,
                    n = e.locale,
                    o = t.categories && t.categories.length > 0;
                return "MOBILE_RENDER_DEVICE" === r ? f.default.createElement(p.UX2.Element.Block, null, f.default.createElement(p.UX2.Element.Details, {
                    "data-aid": y.default.RSS_POST_DATE
                }, (0, g.formatDate)(n, t.date)), o && f.default.createElement(p.UX2.Element.Details, {
                    "data-aid": y.default.RSS_POST_CATEGORIES,
                    style: {
                        textTransform: "uppercase"
                    }
                }, this.renderCategories(t.categories))) : f.default.createElement(p.UX2.Element.Block, {
                    style: {
                        marginBottom: "large"
                    },
                    key: "date"
                }, f.default.createElement(p.UX2.Element.Details, {
                    tag: "span",
                    "data-aid": y.default.RSS_POST_DATE
                }, (0, g.formatDate)(n, t.date)), o && f.default.createElement(f.Fragment, null, f.default.createElement(p.UX2.Element.Details, {
                    tag: "span",
                    style: {
                        margin: "0 1rem"
                    }
                }, "|"), f.default.createElement(p.UX2.Element.Details, {
                    tag: "span",
                    "data-aid": y.default.RSS_POST_CATEGORIES
                }, this.renderCategories(t.categories))))
            }
        }, {
            key: "renderMain",
            value: function() {
                var e = this.props,
                    t = e.post,
                    r = e.staticContent,
                    n = r.allPosts,
                    o = r.socialSharing,
                    a = (o = void 0 === o ? {
                        sharePost: "Share this post"
                    } : o).sharePost,
                    i = e.viewDevice,
                    u = e.renderMode,
                    l = this.chooseSideBarPostsToDisplay(),
                    c = "MOBILE_RENDER_DEVICE" === i,
                    s = [f.default.createElement(p.UX2.Element.MoreLink.Backward, {
                        style: {
                            marginBottom: "xlarge"
                        },
                        href: (0, h.setAllPostsParam)((0, h.getPagePath)()),
                        onClick: this.onBackClick,
                        key: "backLink"
                    }, n)];
                return t && s.push(f.default.createElement(p.UX2.Element.Heading, {
                    key: "title"
                }, t.title), this.renderSubHeading(), f.default.createElement(p.UX2.Group.Blog.Content, {
                    style: {
                        wordBreak: "break-word"
                    },
                    richtext: !0,
                    imgOptions: {
                        outputWidth: 1280
                    },
                    key: "content"
                }, (0, m.default)(t.fullContent)), f.default.createElement(b.default, {
                    post: t,
                    label: "".concat(a, ":"),
                    mobile: c,
                    renderMode: u
                })), l.length > 0 ? f.default.createElement(p.UX2.Group.Blog.Main, {
                    style: {
                        borderBottom: "1px solid #e8eae8",
                        marginBottom: "small",
                        "@md": {
                            borderRight: "1px solid #e8eae8",
                            borderBottom: "none",
                            marginRight: "large"
                        }
                    }
                }, s) : f.default.createElement(p.UX2.Group.Blog.Main, null, s)
            }
        }, {
            key: "chooseSideBarPostsToDisplay",
            value: function() {
                var e = this.props,
                    t = e.feed,
                    r = e.post;
                return r && t ? t.filter(function(e) {
                    return e.slug !== r.slug
                }).slice(0, 3) : []
            }
        }, {
            key: "render",
            value: function() {
                var e = p.UX2.Component,
                    t = e.Grid,
                    r = e.Grid.Cell,
                    n = this.props,
                    o = n.env,
                    a = n.feed,
                    i = n.locale,
                    u = n.post,
                    l = n.backClickHandler,
                    c = n.viewDevice,
                    s = n.renderMode,
                    d = n.staticContent,
                    g = n.websiteId,
                    y = n.categoryClickHandler,
                    h = n.categories,
                    m = n.selectedCategory,
                    b = n.currentPageRoute;
                return f.default.createElement(p.UX2.Group.Section, {
                    section: "default",
                    category: "neutral",
                    style: {
                        opacity: .95,
                        paddingTop: 0,
                        "@md": {
                            paddingTop: "medium"
                        }
                    }
                }, f.default.createElement(p.UX2.Element.Container, null, f.default.createElement(t, {
                    xs: 1,
                    md: 12,
                    gutter: !1,
                    style: {
                        justifyContent: "center"
                    }
                }, f.default.createElement(r, {
                    md: 8
                }, this.renderMain()), f.default.createElement(r, {
                    md: 4,
                    style: {
                        "@md": {
                            paddingRight: "xlarge"
                        }
                    }
                }, f.default.createElement(v.default, {
                    feed: a,
                    post: u,
                    locale: i,
                    backClickHandler: l,
                    viewDevice: c,
                    renderMode: s,
                    staticContent: d,
                    websiteId: g,
                    env: o,
                    categoryClickHandler: y,
                    categories: h,
                    selectedCategory: m,
                    currentPageRoute: b
                }))), u && f.default.createElement(_.default, {
                    post: u
                })))
            }
        }], [{
            key: "propTypes",
            get: function() {
                return {
                    env: d.default.string,
                    locale: d.default.string,
                    staticContent: d.default.object.isRequired,
                    post: d.default.object.isRequired,
                    feed: d.default.array,
                    backClickHandler: d.default.func.isRequired,
                    viewDevice: d.default.string.isRequired,
                    renderMode: d.default.string.isRequired,
                    websiteId: d.default.string.isRequired,
                    categoryClickHandler: d.default.func,
                    categories: d.default.array,
                    selectedCategory: d.default.string,
                    currentPageRoute: d.default.string
                }
            }
        }]), r
    }(f.Component);
    t.default = R, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(1)),
        i = o(r(9)),
        u = o(r(2)),
        l = o(r(3)),
        c = o(r(4)),
        s = n(r(5)),
        f = o(r(6)),
        d = r(7),
        p = o(r(156)),
        g = o(r(68)),
        v = r(18),
        y = o(r(157)),
        h = o(r(11));

    function m(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, c.default)(e);
            if (t) {
                var o = (0, c.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, l.default)(this, r)
        }
    }
    var b = function(e) {
        (0, u.default)(r, e);
        var t = m(r);

        function r() {
            return (0, a.default)(this, r), t.apply(this, arguments)
        }
        return (0, i.default)(r, [{
            key: "chooseSideBarPostsToDisplay",
            value: function() {
                var e = this.props,
                    t = e.feed,
                    r = e.post;
                return r && t ? t.filter(function(e) {
                    return e.slug !== r.slug
                }).slice(0, 3) : []
            }
        }, {
            key: "renderCategories",
            value: function() {
                var e = this.props,
                    t = e.staticContent,
                    r = e.categories,
                    n = e.categoryClickHandler,
                    o = e.selectedCategory;
                return (0, v.hasCategories)(r) ? s.default.createElement(d.UX2.Element.Block, {
                    style: {
                        marginBottom: "xxlarge"
                    }
                }, s.default.createElement(g.default, {
                    categoryClickHandler: n,
                    categories: r,
                    selectedCategory: o,
                    staticContent: t,
                    title: t.categories,
                    renderVertically: !0
                })) : null
            }
        }, {
            key: "render",
            value: function() {
                var e = this.chooseSideBarPostsToDisplay(),
                    t = this.props,
                    r = t.locale,
                    n = t.backClickHandler,
                    o = t.renderMode,
                    a = t.viewDevice,
                    i = t.staticContent,
                    u = t.websiteId,
                    l = t.env,
                    c = t.currentPageRoute,
                    f = t.post,
                    g = (f = void 0 === f ? {} : f).featureFlags,
                    v = (g = void 0 === g ? {} : g).rssToEmail,
                    m = void 0 !== v && v;
                return s.default.createElement("div", {
                    "data-aid": h.default.RSS_VIEWPOST_SIDEBAR
                }, this.renderCategories(), m && s.default.createElement(y.default, {
                    websiteId: u,
                    env: l,
                    staticContent: i
                }), e.length > 0 && s.default.createElement(d.UX2.Group.Nav.Vertical, null, s.default.createElement(d.UX2.Element.Heading, {
                    key: "recent"
                }, i.recentPosts), e.map(function(e, t) {
                    return s.default.createElement(d.UX2.Element.ListItem.Inline, {
                        key: "post-menu-item-".concat(t)
                    }, s.default.createElement(p.default, {
                        key: "small-post-item-".concat(t),
                        locale: r,
                        clickHandler: n,
                        post: e,
                        viewDevice: a,
                        renderMode: o,
                        currentPageRoute: c
                    }))
                })))
            }
        }], [{
            key: "propTypes",
            get: function() {
                return {
                    locale: f.default.string,
                    env: f.default.string,
                    feed: f.default.array.isRequired,
                    post: f.default.object.isRequired,
                    backClickHandler: f.default.func,
                    renderMode: f.default.string.isRequired,
                    viewDevice: f.default.string.isRequired,
                    staticContent: f.default.object.isRequired,
                    websiteId: f.default.string.isRequired,
                    categoryClickHandler: f.default.func,
                    categories: f.default.array,
                    selectedCategory: f.default.string,
                    currentPageRoute: f.default.string
                }
            }
        }]), r
    }(s.Component);
    t.default = b, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(1)),
        i = o(r(9)),
        u = o(r(10)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = r(37),
        v = o(r(67)),
        y = r(14);

    function h(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var m = function(e) {
        (0, l.default)(r, e);
        var t = h(r);

        function r() {
            var e;
            return (0, a.default)(this, r), (e = t.apply(this, arguments)).onPostClick = e.onPostClick.bind((0, u.default)(e)), e
        }
        return (0, i.default)(r, [{
            key: "onPostClick",
            value: function() {
                var e = this.props,
                    t = e.clickHandler,
                    r = e.post;
                t && t(r.slug)
            }
        }, {
            key: "getImageBlock",
            value: function(e) {
                if (!e) return null;
                var t = "rs=h:".concat(110, ",m,cg:true/cr=w:").concat(110),
                    r = {
                        float: "left",
                        height: "".concat(110, "px"),
                        width: "".concat(110, "px"),
                        marginRight: "small",
                        marginBottom: "xsmall"
                    };
                return f.default.createElement(p.UX2.Element.Block, null, f.default.createElement(p.UX2.Component.Background, {
                    backgroundImage: (0, v.default)(e, t),
                    style: r
                }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.post,
                    r = e.renderMode,
                    n = e.currentPageRoute,
                    o = e.locale,
                    a = {
                        container: {
                            overflow: "auto",
                            marginTop: "medium",
                            marginBottom: "medium"
                        },
                        title: {
                            "-webkit-line-clamp": "2",
                            "-webkit-box-orient": "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box"
                        },
                        date: {
                            marginTop: "small"
                        }
                    };
                if (t) return f.default.createElement(p.UX2.Element.Block, {
                    style: a.container
                }, f.default.createElement(p.UX2.Element.Link, {
                    href: "PUBLISH" === r ? (0, y.buildPostPath)(t.slug, n) : null,
                    onClick: this.onPostClick
                }, this.getImageBlock(t.featuredImage), f.default.createElement(p.UX2.Element.Text, {
                    style: a.title,
                    featured: !0
                }, t.title), f.default.createElement(p.UX2.Element.Details, {
                    style: a.date
                }, (0, g.formatDate)(o, t.date, "short"))))
            }
        }], [{
            key: "propTypes",
            get: function() {
                return {
                    post: d.default.object.isRequired,
                    locale: d.default.object.isRequired,
                    clickHandler: d.default.func.isRequired,
                    viewDevice: d.default.string.isRequired,
                    renderMode: d.default.string.isRequired,
                    currentPageRoute: d.default.string
                }
            }
        }]), r
    }(f.Component);
    t.default = m, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(1)),
        i = o(r(9)),
        u = o(r(10)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = o(r(11)),
        v = o(r(158)),
        y = o(r(65));

    function h(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var m = function(e) {
        (0, l.default)(r, e);
        var t = h(r);

        function r() {
            var e;
            return (0, a.default)(this, r), (e = t.apply(this, arguments)).onEmailFieldType = e.onEmailFieldType.bind((0, u.default)(e)), e.onSubmit = e.onSubmit.bind((0, u.default)(e)), e.renderForm = e.renderForm.bind((0, u.default)(e)), e.sendForm = e.sendForm.bind((0, u.default)(e)), e.renderConfirmation = e.renderConfirmation.bind((0, u.default)(e)), e.state = {
                email: "",
                formSubmitted: !1
            }, e
        }
        return (0, i.default)(r, [{
            key: "sendForm",
            value: function() {
                var e = this.props,
                    t = e.websiteId,
                    r = e.env,
                    n = y.default && y.default[r] || {},
                    o = {
                        websiteId: t,
                        email: this.state.email
                    },
                    a = (0, v.default)("POST", "".concat(n.subscribersDomain, "/api/v3/website/rssToEmail/subscribe"));
                return a.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), a.onreadystatechange = this.handleSubmitResponse, a.send(JSON.stringify(o)), !0
            }
        }, {
            key: "onSubmit",
            value: function(e) {
                e.preventDefault(), this.state.email && (this.setState({
                    formSubmitted: !0
                }), this.sendForm())
            }
        }, {
            key: "onEmailFieldType",
            value: function(e) {
                this.setState({
                    email: e
                })
            }
        }, {
            key: "renderConfirmation",
            value: function() {
                var e = this.props.staticContent.rssToEmail,
                    t = e.confirmation_2,
                    r = e.confirmation_3;
                return f.default.createElement("div", {
                    style: {
                        paddingTop: "xsmall"
                    }
                }, f.default.createElement(p.UX2.Element.Text, null, t, f.default.createElement("br", null), f.default.createElement("br", null), r))
            }
        }, {
            key: "renderForm",
            value: function() {
                var e = this,
                    t = this.state.email,
                    r = this.props.staticContent;
                return f.default.createElement("form", {
                    onSubmit: this.onSubmit
                }, f.default.createElement(p.UX2.Element.Input, {
                    value: t,
                    onChange: function(t) {
                        return e.onEmailFieldType(t.target.value)
                    },
                    type: "email",
                    placeholder: r.rssToEmail.placeholder
                }), f.default.createElement(p.UX2.Element.Button.Primary, {
                    type: "submit",
                    style: {
                        marginTop: "small"
                    }
                }, r.rssToEmail.signUp))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state.formSubmitted,
                    t = this.props.staticContent.rssToEmail,
                    r = t.confirmation_1,
                    n = t.cta,
                    o = t.cta_subhed,
                    a = {
                        title: {
                            marginBottom: "xsmall",
                            textAlign: "left",
                            marginLeft: 0
                        },
                        tagline: {
                            marginBottom: "small"
                        }
                    };
                return f.default.createElement(p.UX2.Group.Group, {
                    style: {
                        marginBottom: "xxlarge"
                    }
                }, f.default.createElement(p.UX2.Element.Block, {
                    "data-aid": g.default.RSS_VIEWPOST_EMAIL
                }, f.default.createElement(p.UX2.Element.Heading.Sub, {
                    style: a.title
                }, e ? r : n), f.default.createElement(p.UX2.Element.Details, {
                    style: a.tagline
                }, e ? "" : o), e ? this.renderConfirmation() : this.renderForm()))
            }
        }], [{
            key: "propTypes",
            get: function() {
                return {
                    websiteId: d.default.string.isRequired,
                    env: d.default.string,
                    staticContent: d.default.object.isRequired
                }
            }
        }]), r
    }(f.Component);
    t.default = m, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = function(e, t) {
        var r = new XMLHttpRequest;
        return "withCredentials" in r ? r.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (r = new XDomainRequest).open(e, t) : r = null, r
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return "unstyled" !== e.type || e.text.trim()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        var t = function(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        }(e);
        if (!t || !t.blocks) return e;
        var r = t.blocks,
            o = r.findIndex(n);
        o > 0 && (r = r.slice(o));
        var a = r.slice().reverse().findIndex(n);
        a > 0 && (r = r.slice(0, -a));
        return t.blocks = r, JSON.stringify(t)
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(17)),
        a = n(r(5)),
        i = r(7),
        u = n(r(161)),
        l = n(r(42)),
        c = n(r(6)),
        s = n(r(11));

    function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(r), !0).forEach(function(t) {
                (0, o.default)(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var p = function(e) {
            return {
                facebook: {
                    url: (0, u.default)("https://www.facebook.com/sharer/sharer.php?u=<%- href %>")
                },
                twitter: {
                    url: (0, u.default)("https://twitter.com/share?url=<%- href %>&text=<%- title %>".concat(e ? "&via=<%- profile %>" : ""))
                }
            }
        },
        g = {
            default: {
                display: "flex",
                alignItems: "center",
                color: "black",
                marginRight: "-xsmall",
                marginTop: "medium",
                clear: "both"
            },
            mobile: {
                position: "relative",
                width: "100%"
            }
        },
        v = {
            marginRight: "medium",
            fontWeight: "bold"
        },
        y = {
            default: {
                display: "block",
                cursor: "pointer",
                marginRight: "xsmall"
            },
            facebook: {
                color: "#3b5998"
            },
            twitter: {
                color: "#1DA1F2"
            }
        },
        h = function(e) {
            var t = e.label,
                r = e.mobile,
                n = e.post,
                o = e.renderMode,
                u = n.featureFlags,
                c = (u = void 0 === u ? {} : u).showSocial,
                f = n.socialSharing,
                h = n.title;
            if (!c) return null;
            var m = Object.keys(p()).filter(function(e) {
                return (0, l.default)(f, [e, "enabled"], !0)
            });
            if (0 === m.length) return null;
            var b = i.UX2.utils.TCCLUtils.getTCCLString;
            return a.default.createElement(i.UX2.Element.Block, {
                style: d(d({}, g.default), r ? g.mobile : {})
            }, t && a.default.createElement(i.UX2.Element.Details, {
                style: v,
                featured: !0
            }, t), m.map(function(e) {
                return a.default.createElement(i.UX2.Element.Icon, {
                    key: e,
                    size: "medium",
                    icon: e,
                    style: d(d({}, y.default), y[e]),
                    onClick: "PUBLISH" === o ? function(e) {
                        var t = e.socialNetwork,
                            r = e.title,
                            n = e.profile;
                        return function() {
                            var e = p(n)[t].url,
                                o = window.location.href;
                            window.open(e({
                                href: encodeURI(o),
                                title: encodeURI(r),
                                profile: encodeURI(n)
                            }), "Share", "width=585, height=368, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0").opener = null
                        }
                    }({
                        title: h,
                        socialNetwork: e,
                        profile: (0, l.default)(f, [e, "profile"])
                    }) : null,
                    "data-aid": s.default["RSS_SOCIAL_SHARE_BOTTOM_".concat(e.toUpperCase())],
                    "data-tccl": b({
                        eid: "ux2.rss.blog.".concat(e, "_share_link.click"),
                        type: "click"
                    })
                })
            }))
        };
    h.propTypes = {
        mobile: c.default.bool,
        label: c.default.string,
        renderMode: c.default.string,
        post: c.default.shape({
            featureFlags: c.default.shape({
                showSocial: c.default.bool.isRequired
            }).isRequired,
            socialSharing: c.default.objectOf(c.default.shape({
                enabled: c.default.bool.isRequired,
                profile: c.default.string
            })),
            title: c.default.string.isRequired
        }).isRequired
    };
    var m = h;
    t.default = m, e.exports = t.default
}, function(e, t, r) {
    var n = r(162),
        o = r(163),
        a = r(164),
        i = r(165),
        u = r(166),
        l = r(69),
        c = r(64),
        s = r(167),
        f = r(70),
        d = r(170),
        p = r(32),
        g = /\b__p \+= '';/g,
        v = /\b(__p \+=) '' \+/g,
        y = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        h = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        m = /($^)/,
        b = /['\n\r\u2028\u2029\\]/g,
        _ = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r) {
        var E = d.imports._.templateSettings || d;
        r && c(e, t, r) && (t = void 0), e = p(e), t = n({}, t, E, i);
        var R, S, w = n({}, t.imports, E.imports, i),
            P = s(w),
            O = a(w, P),
            x = 0,
            C = t.interpolate || m,
            T = "__p += '",
            D = RegExp((t.escape || m).source + "|" + C.source + "|" + (C === f ? h : m).source + "|" + (t.evaluate || m).source + "|$", "g"),
            k = _.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/[\r\n]/g, " ") + "\n" : "";
        e.replace(D, function(t, r, n, o, a, i) {
            return n || (n = o), T += e.slice(x, i).replace(b, u), r && (R = !0, T += "' +\n__e(" + r + ") +\n'"), a && (S = !0, T += "';\n" + a + ";\n__p += '"), n && (T += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), x = i + t.length, t
        }), T += "';\n";
        var j = _.call(t, "variable") && t.variable;
        j || (T = "with (obj) {\n" + T + "\n}\n"), T = (S ? T.replace(g, "") : T).replace(v, "$1").replace(y, "$1;"), T = "function(" + (j || "obj") + ") {\n" + (j ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (S ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + T + "return __p\n}";
        var A = o(function() {
            return Function(P, k + "return " + T).apply(void 0, O)
        });
        if (A.source = T, l(A)) throw A;
        return A
    }
}, function(e, t, r) {
    var n = r(57),
        o = r(60),
        a = r(36),
        i = o(function(e, t, r, o) {
            n(t, a(t), e, o)
        });
    e.exports = i
}, function(e, t, r) {
    var n = r(63),
        o = r(61),
        a = r(69),
        i = o(function(e, t) {
            try {
                return n(e, void 0, t)
            } catch (e) {
                return a(e) ? e : new Error(e)
            }
        });
    e.exports = i
}, function(e, t, r) {
    var n = r(46);
    e.exports = function(e, t) {
        return n(t, function(t) {
            return e[t]
        })
    }
}, function(e, t, r) {
    var n = r(20),
        o = Object.prototype,
        a = o.hasOwnProperty;
    e.exports = function(e, t, r, i) {
        return void 0 === e || n(e, o[r]) && !a.call(i, r) ? t : e
    }
}, function(e, t) {
    var r = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    e.exports = function(e) {
        return "\\" + r[e]
    }
}, function(e, t, r) {
    var n = r(58),
        o = r(168),
        a = r(27);
    e.exports = function(e) {
        return a(e) ? n(e) : o(e)
    }
}, function(e, t, r) {
    var n = r(35),
        o = r(169),
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, function(e, t, r) {
    var n = r(50)(Object.keys, Object);
    e.exports = n
}, function(e, t, r) {
    var n = r(171),
        o = {
            escape: r(174),
            evaluate: r(175),
            interpolate: r(70),
            variable: "",
            imports: {
                _: {
                    escape: n
                }
            }
        };
    e.exports = o
}, function(e, t, r) {
    var n = r(172),
        o = r(32),
        a = /[&<>"']/g,
        i = RegExp(a.source);
    e.exports = function(e) {
        return (e = o(e)) && i.test(e) ? e.replace(a, n) : e
    }
}, function(e, t, r) {
    var n = r(173)({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    });
    e.exports = n
}, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(e, t) {
    e.exports = /<%-([\s\S]+?)%>/g
}, function(e, t) {
    e.exports = /<%([\s\S]+?)%>/g
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(17)),
        i = o(r(1)),
        u = o(r(9)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = n(r(40));

    function v(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var y = function(e) {
        (0, l.default)(r, e);
        var t = v(r);

        function r() {
            return (0, i.default)(this, r), t.apply(this, arguments)
        }
        return (0, u.default)(r, [{
            key: "componentDidMount",
            value: function() {
                g.shouldRenderWidget(this.props) && g.loadLibrary(this.props.post)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                g.removeLibrary()
            }
        }, {
            key: "render",
            value: function() {
                if (!g.shouldRenderWidget(this.props)) return null;
                var e = (0, a.default)({
                    marginTop: "medium"
                }, "@md", {
                    paddingHorizontal: "xlarge"
                });
                return f.default.createElement(p.UX2.Element.Block, {
                    style: e
                }, f.default.createElement("div", {
                    id: "disqus_thread"
                }))
            }
        }]), r
    }(f.Component);
    y.propTypes = {
        post: d.default.shape({
            postId: d.default.string,
            blogId: d.default.string,
            hideCommenting: d.default.bool
        }),
        featureFlags: d.default.shape({
            commenting: d.default.bool
        })
    };
    var h = y;
    t.default = h, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AB_BLOG_WIDGET_SETUP_BUTTON = t.AB_BLOG_WIDGET_SETUP_TITLE = t.AB_BLOG_WIDGET_SETUP_SUBTITLE = void 0;
    t.AB_BLOG_WIDGET_SETUP_SUBTITLE = "ab-blog-widget-setup-subtitle";
    t.AB_BLOG_WIDGET_SETUP_TITLE = "ab-blog-widget-setup-title";
    t.AB_BLOG_WIDGET_SETUP_BUTTON = "ab-blog-widget-setup-button"
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return e.map(function(e, t) {
            var r = e.title,
                a = e.content;
            return {
                title: r,
                content: a,
                date: o.toISOString(),
                featuredImage: "https://img1.wsimg.com/isteam/stock/".concat(n[t])
            }
        })
    };
    var n = ["Y8k4OWY", "D1d8qBd", "743", "61355", "10670"],
        o = new Date;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(21)),
        i = o(r(1)),
        u = o(r(9)),
        l = o(r(2)),
        c = o(r(3)),
        s = o(r(4)),
        f = n(r(5)),
        d = o(r(6)),
        p = r(7),
        g = o(r(68)),
        v = r(18),
        y = o(r(180)),
        h = o(r(11)),
        m = o(r(181)),
        b = o(r(182));

    function _(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, s.default)(e);
            if (t) {
                var o = (0, s.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, c.default)(this, r)
        }
    }
    var E = function(e) {
            (0, l.default)(r, e);
            var t = _(r);

            function r() {
                return (0, i.default)(this, r), t.apply(this, arguments)
            }
            return (0, u.default)(r, [{
                key: "onHandleStyles",
                value: function(e) {
                    return {
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            paddingBottom: "xlarge",
                            marginBottom: e ? "0" : "xlarge",
                            borderBottomWidth: e ? "0" : "1px",
                            borderBottomStyle: "solid",
                            borderColor: "section",
                            "@sm": {
                                flexDirection: "row",
                                alignItems: "start"
                            }
                        },
                        content: {
                            "@sm": {
                                display: "flex",
                                minWidth: "1px",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                paddingBottom: "xxsmall"
                            }
                        },
                        text: {
                            marginBottom: "small"
                        },
                        backgroundContainer: {
                            display: "flex",
                            height: "200px",
                            flexShrink: "0",
                            marginBottom: "large",
                            "@sm": {
                                width: "200px",
                                marginBottom: "0",
                                marginRight: "large"
                            }
                        },
                        background: {
                            width: "100%",
                            backgroundSize: "auto",
                            backgroundRepeat: "no-repeat",
                            "@sm": {
                                backgroundPosition: "top"
                            }
                        }
                    }
                }
            }, {
                key: "renderCategories",
                value: function() {
                    var e = this.props,
                        t = e.categories,
                        r = e.categoryClickHandler,
                        n = e.selectedCategory,
                        o = e.staticContent;
                    return f.default.createElement(p.UX2.Component.Grid.Cell, {
                        xs: "12",
                        md: "3",
                        style: {
                            marginBottom: "small",
                            "@md": {
                                order: "1",
                                borderLeftWidth: "1px",
                                borderLeftStyle: "solid",
                                borderColor: "section"
                            }
                        }
                    }, f.default.createElement(p.UX2.Element.Heading, {
                        group: "NavVertical",
                        style: {
                            display: "none",
                            "@md": {
                                display: "block"
                            }
                        }
                    }, o.categories), f.default.createElement(g.default, {
                        categoryClickHandler: r,
                        categories: t,
                        selectedCategory: n,
                        staticContent: o,
                        renderVertically: !0
                    }))
                }
            }, {
                key: "renderCards",
                value: function(e) {
                    var t = this,
                        r = this.props,
                        n = r.feeds,
                        o = r.locale,
                        i = r.detachedMode,
                        u = r.staticContent,
                        l = r.cardClickHandler,
                        c = r.imgParams,
                        s = r.viewDevice,
                        d = r.currentPageRoute,
                        g = r.device,
                        v = i ? n.slice(0, 2) : n;
                    return v.map(function(r, n) {
                        var i = n === v.length - 1,
                            m = t.onHandleStyles(i);
                        return f.default.createElement(p.UX2.Component.Grid.Cell, (0, a.default)({
                            key: n
                        }, e), f.default.createElement(y.default, {
                            feed: r,
                            style: m,
                            locale: o,
                            showContent: !0,
                            staticContent: u,
                            dataAid: "".concat(h.default.RSS_FEED_RENDERED, "_").concat(n),
                            cardClickHandler: l,
                            imgParams: c,
                            viewDevice: s,
                            currentPageRoute: d,
                            showCategories: !0,
                            device: g,
                            isRss3: !0
                        }))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = (0, v.hasCategories)(this.props.categories);
                    return f.default.createElement(p.UX2.Component.Grid, {
                        bottom: !1,
                        "data-aid": h.default.RSS_FEEDS_RENDERED,
                        "data-route": m.default.FEED_URL
                    }, e && this.renderCategories(), e ? f.default.createElement(p.UX2.Component.Grid.Cell, {
                        xs: "12",
                        md: "9"
                    }, this.renderCards({
                        xs: "12"
                    })) : this.renderCards({
                        xs: "12",
                        md: "8",
                        pushMd: "2"
                    }))
                }
            }], [{
                key: "propTypes",
                get: function() {
                    return {
                        feeds: d.default.array.isRequired,
                        detachedMode: d.default.bool.isRequired,
                        staticContent: d.default.object.isRequired,
                        device: d.default.string.isRequired,
                        size: d.default.string.isRequired,
                        cardClickHandler: d.default.func,
                        categoryClickHandler: d.default.func,
                        categories: d.default.array,
                        selectedCategory: d.default.string,
                        imgParams: d.default.string,
                        viewDevice: d.default.string.isRequired,
                        currentPageRoute: d.default.string,
                        locale: d.default.string
                    }
                }
            }]), r
        }(f.Component),
        R = (0, b.default)(E);
    t.default = R, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(r(17)),
        i = o(r(1)),
        u = o(r(9)),
        l = o(r(10)),
        c = o(r(2)),
        s = o(r(3)),
        f = o(r(4)),
        d = n(r(5)),
        p = o(r(6)),
        g = r(7),
        v = o(r(11)),
        y = r(37),
        h = o(r(67)),
        m = r(14);

    function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? b(Object(r), !0).forEach(function(t) {
                (0, a.default)(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function E(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = (0, f.default)(e);
            if (t) {
                var o = (0, f.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, s.default)(this, r)
        }
    }
    var R = function(e) {
        (0, c.default)(r, e);
        var t = E(r);

        function r() {
            var e;
            return (0, i.default)(this, r), (e = t.apply(this, arguments)).onCardClick = e.onCardClick.bind((0, l.default)(e)), e.renderSubHeading = e.renderSubHeading.bind((0, l.default)(e)), e
        }
        return (0, u.default)(r, [{
            key: "onCardClick",
            value: function(e) {
                var t = this.props,
                    r = t.feed,
                    n = t.cardClickHandler;
                n && (e.preventDefault(), n(r.slug))
            }
        }, {
            key: "renderSubHeading",
            value: function(e, t, r) {
                var n = this.props,
                    o = n.showCategories,
                    a = n.device,
                    i = n.isRss3,
                    u = n.locale,
                    l = {
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        display: "block",
                        maxWidth: "65%",
                        position: "relative",
                        bottom: "0",
                        left: "0"
                    },
                    c = {
                        height: "1.5em",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-start"
                    };
                return o && t && 0 !== t.length ? "mobile" === a ? d.default.createElement(g.UX2.Element.Block, {
                    style: c
                }, d.default.createElement(g.UX2.Element.Block, null, d.default.createElement(g.UX2.Element.Details, {
                    style: {
                        whiteSpace: "nowrap"
                    },
                    tag: "span",
                    "data-aid": v.default.RSS_FEED_POST_DATE_RENDERED
                }, (0, y.formatDate)(u, e))), d.default.createElement(g.UX2.Element.Details, {
                    tag: "span",
                    "data-aid": v.default.RSS_FEED_POST_CATEGORIES_RENDERED,
                    style: _(_({}, l), i ? {
                        maxWidth: "46%",
                        marginLeft: "1em"
                    } : {
                        maxWidth: "37%",
                        position: "relative",
                        bottom: "0",
                        marginLeft: "1em"
                    })
                }, t.join(", "))) : d.default.createElement(g.UX2.Element.Block, {
                    style: c
                }, d.default.createElement(g.UX2.Element.Details, {
                    style: {
                        whiteSpace: "nowrap"
                    },
                    tag: "span",
                    "data-aid": v.default.RSS_FEED_POST_DATE_RENDERED
                }, (0, y.formatDate)(u, e)), d.default.createElement(g.UX2.Element.Details, {
                    tag: "span",
                    "data-aid": v.default.RSS_FEED_POST_SEPARATOR_RENDERED,
                    style: {
                        margin: "0 1rem"
                    }
                }, "|"), d.default.createElement(g.UX2.Element.Details, {
                    tag: "span",
                    "data-aid": v.default.RSS_FEED_POST_CATEGORIES_RENDERED,
                    style: l
                }, t.join(", "))) : d.default.createElement(g.UX2.Element.Details, {
                    "data-aid": v.default.RSS_FEED_POST_DATE_RENDERED,
                    style: _({
                        lineHeight: "normal"
                    }, r.details)
                }, (0, y.formatDate)(u, e))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.feed,
                    r = e.style,
                    n = e.showContent,
                    o = e.dataAid,
                    a = e.staticContent,
                    i = e.isCard,
                    u = e.cardClickHandler,
                    l = e.imgParams,
                    c = void 0 === l ? "" : l,
                    s = e.currentPageRoute,
                    f = e.isRss3,
                    p = t.content,
                    y = t.date,
                    b = t.featuredImage,
                    E = t.title,
                    R = t.url,
                    S = t.slug,
                    w = t.categories,
                    P = i ? g.UX2.Group.Card.Link : g.UX2.Group.Group,
                    O = (0, g.UX2.utils.TCCLUtils.getTCCLString)({
                        eid: "ux2.rss.read_more_link.click",
                        type: "click"
                    }),
                    x = f ? g.UX2.Element.Heading.Product : g.UX2.Element.Heading;
                return d.default.createElement(g.UX2.Element.Link, {
                    href: (0, m.buildPostPath)(S, s, R),
                    target: R && "_blank",
                    onClick: u && this.onCardClick
                }, d.default.createElement(P, {
                    "data-aid": o,
                    style: r.container
                }, b && d.default.createElement(g.UX2.Element.Block, {
                    style: r.backgroundContainer
                }, d.default.createElement(g.UX2.Component.Background, {
                    backgroundImage: (0, h.default)(b, c),
                    style: r.background
                })), d.default.createElement(g.UX2.Element.Block, {
                    style: _(_({}, r.content), {}, {
                        overflow: "hidden",
                        flexGrow: 1
                    })
                }, y && d.default.createElement(g.UX2.Element.Block, {
                    style: r.text
                }, this.renderSubHeading(y, w, r)), d.default.createElement(g.UX2.Element.Block, null, d.default.createElement(x, {
                    style: _(_(_({}, r.text), r.title), {}, {
                        lineHeight: "1.125"
                    })
                }, E), n && p && d.default.createElement(g.UX2.Element.Text, {
                    "data-aid": v.default.RSS_FEED_POST_CONTENT_RENDERED,
                    style: r.text
                }, p)), d.default.createElement(g.UX2.Element.Block, null, d.default.createElement(g.UX2.Element.MoreLink, {
                    tag: "span",
                    "data-aid": v.default.RSS_READ_MORE,
                    "data-tccl": O
                }, a.readMore)))))
            }
        }], [{
            key: "propTypes",
            get: function() {
                return {
                    feed: p.default.object.isRequired,
                    locale: p.default.string,
                    style: p.default.object.isRequired,
                    showContent: p.default.bool.isRequired,
                    isCard: p.default.bool,
                    dataAid: p.default.string,
                    staticContent: p.default.object.isRequired,
                    cardClickHandler: p.default.func,
                    imgParams: p.default.string,
                    viewDevice: p.default.string.isRequired,
                    showCategories: p.default.bool.isRequired,
                    currentPageRoute: p.default.string,
                    device: p.default.string,
                    isRss3: p.default.bool
                }
            }
        }]), r
    }(d.Component);
    t.default = R, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = {
        SECTION_TITLE: "sectionTitle",
        SECTION_INTRO: "sectionIntro",
        FEED_URL: "rssFeed",
        CATEGORIES_FILTER: "categoriesFilter"
    };
    t.default = n, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(t) {
            (0, c.default)(m, t);
            var r, n, o = (r = m, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t = (0, f.default)(r);
                if (n) {
                    var o = (0, f.default)(this).constructor;
                    e = Reflect.construct(t, arguments, o)
                } else e = t.apply(this, arguments);
                return (0, s.default)(this, e)
            });

            function m(e) {
                var t;
                (0, i.default)(this, m), (t = o.apply(this, arguments)).handleMatchMedia = t.handleMatchMedia.bind((0, u.default)(t));
                var r = {};
                return e.renderMode !== h && (r.device = (0, g.convertViewDevice)(e.viewDevice)), t.state = r, t
            }
            return (0, l.default)(m, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        renderMode: p.default.string,
                        viewDevice: p.default.string
                    }
                }
            }]), (0, l.default)(m, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.renderMode !== h && e.renderMode !== this.props.renderMode && this.setState({
                        device: (0, g.convertViewDevice)(this.props.viewDevice)
                    })
                }
            }, {
                key: "handleMatchMedia",
                value: function(e) {
                    e.size !== this.state.size && this.setState({
                        size: e.size
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state.size,
                        r = this.state.device;
                    return r || (r = "xs" === t ? "mobile" : "tablet"), d.default.createElement(v.UX2.Element.Block, null, d.default.createElement(e, (0, a.default)({}, this.props, {
                        device: r,
                        size: t
                    })), d.default.createElement(y, {
                        onChange: this.handleMatchMedia
                    }))
                }
            }]), m
        }(d.Component)
    };
    var a = o(r(21)),
        i = o(r(1)),
        u = o(r(10)),
        l = o(r(9)),
        c = o(r(2)),
        s = o(r(3)),
        f = o(r(4)),
        d = n(r(5)),
        p = o(r(6)),
        g = r(66),
        v = r(7);
    var y = v.UX.MatchMedia,
        h = "PUBLISH";
    e.exports = t.default
}]);