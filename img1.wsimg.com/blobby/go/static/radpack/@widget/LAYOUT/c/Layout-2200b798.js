define("@widget/LAYOUT/c/Layout-2200b798.js", ["exports"], (function(e) {
    "use strict";

    function t(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o])
            }
            return e
        }).apply(this, arguments)
    }
    const {
        headerTreatments: {
            FILL: o,
            FIT: r,
            INSET: l,
            BLUR: n,
            LEGACY_BLUR: i
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    var s = "Number(window.vctElements)||(window.vctElements=0),window.vctElements++";
    const c = [1, 1.5, 2, 3],
        g = /[.-]wsimg\.com\//;

    function p(e) {
        return !!g.test(e)
    }

    function u(e) {
        let t = void 0;
        if (!e || !p(e)) return t;
        const a = [],
            o = e.split(/(h:|w:)([\d.]+)(,|\/|$)/g),
            r = o.length;
        let l = 0;
        for (let e = 2; e < r; e += 4) c.forEach(((t, r) => {
            a[r] = (a[r] || "") + o.slice(l, e).join("") + parseFloat(o[e]) * t
        })), l = e + 1;
        try {
            t = a.map(((t, a) => {
                if (t += o.slice(l, r).join(""), 1 !== c[a]) t += ` ${c[a]}x`;
                else if (t !== e) throw new Error([e, t]);
                return t
            })).join(",\n")
        } catch (e) {}
        return t || void 0
    }

    function d(e) {
        if (!e) return "";
        const t = (u(e) || "").replace(/(\n)/gm, " ");
        return `(function(){${s};var i=new Image();i.onload=window.markVisuallyComplete;i.srcset="${t||e}";i.src="${e}";})()`
    }

    function h(e, t) {
        if (!p(e) || !t) return e;
        let a;
        return a = "string" == typeof t ? t.startsWith("/") ? t : "/" + t : Object.keys(t).reduce(((e, a) => `${e}/${a}=${t[a]}`), ""), e.endsWith("/") && (a = a.substr(1)), a ? e.indexOf("/:/") > -1 ? `${e}${a}` : `${e}/:${a}` : e
    }

    function b(e) {
        return p(e) ? e : function(e = "") {
            return e.includes("/:/") ? e.split("/:/")[0] : e
        }(e)
    }

    function m(e, t = !0) {
        return b(t ? (global.Core || guac["@wsb/guac-widget-core"]).utils.generateBackgroundUrl(e) : (global.Core || guac["@wsb/guac-widget-core"]).utils.generateBackgroundUrl(e).replace(/\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/, "").replace(/\/:$/, ""))
    }

    function y(e, t = "") {
        return e && "string" == typeof e ? e.replace(/\/:\/rs=w:[0-9]*,h:[0-9]*/, t) : ""
    }

    function f(e, t, a) {
        return "string" == typeof((null == e ? void 0 : e.imageUrl) || (null == e ? void 0 : e.image)) ? (global.Core || guac["@wsb/guac-widget-core"]).utils.generateImageServiceUrl(e) : (null == a ? void 0 : a.fallbackBackgroundImageSrc) ? a.fallbackBackgroundImageSrc.replace(/\{(width|height)\}/g, "+0") : t || ""
    }
    const {
        Image: w
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils;
    class C extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Background")) {
        constructor() {
            super(...arguments);
            const {
                backgroundImage: e,
                treatmentData: t,
                imageData: a = {}
            } = this.props, {
                widgetType: o,
                widgetPreset: r
            } = this;
            this.state = {
                id: (global._ || guac.lodash).uniqueId("guacBg"),
                backgroundImage: e || m(a),
                isResponsive: g.test(e || m(a)),
                defaultFilter: !a.filter && this.theme && (global._ || guac.lodash).isFunction(this.theme.constructor.getDefaultBackgroundFilter) && this.theme.constructor.getDefaultBackgroundFilter(o, r),
                widgetType: o,
                widgetPreset: r,
                ...t
            }
        }
        static getDerivedStateFromProps(e, t) {
            const {
                backgroundImage: a,
                treatmentData: o,
                defaultFilter: r
            } = t, {
                treatmentData: l,
                imageData: n = {}
            } = e, i = e.backgroundImage ? h(e.backgroundImage, (global.Core || guac["@wsb/guac-widget-core"]).utils.generateImageFilterUrlParam(n.filter || r)) : n && m({
                filter: r,
                ...n,
                ...e.backgroundImage && e.backgroundImage.indexOf("fx-bl=s") > -1 && {
                    image: e.backgroundImage
                }
            }), s = { ...C.backgroundImageUpdate(a, i),
                ...l && !(global._ || guac.lodash).isEqual(o, l) && l
            };
            return Object.keys(s).length > 0 ? s : null
        }
        static backgroundImageUpdate(e, t) {
            return e !== t ? {
                responsiveImage: null,
                backgroundImage: t,
                isResponsive: g.test(t)
            } : {}
        }
        componentDidMount() {
            this.mounted = !0, this.state.backgroundImage && this.state.isResponsive && (this._instance = new w(this.state.backgroundImage, document.getElementById(this.state.id), {}, this.onRender.bind(this)))
        }
        componentDidUpdate() {
            this.state.backgroundImage && !this.state.responsiveImage && (this.componentWillUnmount(), this.componentDidMount())
        }
        componentWillUnmount() {
            this.mounted = !1, this._instance && this._instance.unmount()
        }
        onRender(e, t) {
            if (this.mounted) {
                const {
                    treatmentData: a,
                    treatmentHasImages: o,
                    onRender: r
                } = this.props, l = {
                    responsiveImage: e,
                    ...a && o ? r(e, t) : a
                };
                this.setState(l)
            }
        }
    }
    C.propTypes = {
        className: (global.PropTypes || guac["prop-types"]).string,
        children: (global.PropTypes || guac["prop-types"]).any,
        backgroundImage: (global.PropTypes || guac["prop-types"]).string,
        backgroundSize: (global.PropTypes || guac["prop-types"]).string,
        backgroundPosition: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        onRender: (global.PropTypes || guac["prop-types"]).func,
        treatmentData: (global.PropTypes || guac["prop-types"]).object,
        treatmentHasImages: (global.PropTypes || guac["prop-types"]).bool,
        imageData: (global.PropTypes || guac["prop-types"]).object
    }, C.defaultProps = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        onRender: () => {},
        treatmentData: {},
        treatmentHasImages: !1
    };
    const E = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string
    });
    class T extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ContentBasic")) {}
    t(T, "propTypes", {
        heading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            link: E
        })]),
        text: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            richtext: (global.PropTypes || guac["prop-types"]).bool
        })]),
        actionComponent: (global.PropTypes || guac["prop-types"]).object,
        action: (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            link: E
        }),
        alignment: (global.PropTypes || guac["prop-types"]).oneOf(["left", "center", "right"])
    });
    class P extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ContentWrap")) {}
    t(P, "propTypes", {
        data: (global.PropTypes || guac["prop-types"]).array,
        render: (global.PropTypes || guac["prop-types"]).func
    });
    class R extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("HeadingPair")) {}
    t(R, "propTypes", {
        heading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).string.isRequired
        })]),
        subheading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).string.isRequired
        })])
    });
    class v extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Rating")) {
        constructor() {
            super(...arguments), this.keyId = (global._ || guac.lodash).uniqueId("rating")
        }
    }
    t(v, "propTypes", {
        rating: (global.PropTypes || guac["prop-types"]).number.isRequired
    }), t(v, "defaultProps", {
        rating: 5
    });
    class x extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CardBanner")) {}
    t(x, "propTypes", {
        heading: (global.PropTypes || guac["prop-types"]).string,
        headingProps: (global.PropTypes || guac["prop-types"]).object,
        action: (global.PropTypes || guac["prop-types"]).node
    });
    const {
        utils: S
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2;
    class k extends(S.createElement("Grid")) {
        static getMargin(e, t, a) {
            return `0 -${e/2}${t} ${a?`-${e}${t}`:0}`
        }
        static applySizingStyles(e = {}, t = {}, a) {
            const {
                gutter: o,
                bottom: r,
                spacing: l,
                spacingXs: n = l,
                spacingSm: i = n,
                spacingMd: s = i,
                spacingLg: c = s
            } = t;
            if (o) {
                let t = e.margin = this.getMargin(...a.parseSizedUnit(a.mapPropValue("margin", n)), r);
                if (i !== n) {
                    const o = this.getMargin(...a.parseSizedUnit(a.mapPropValue("margin", i)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@sm.margin", t))
                }
                if (s !== i) {
                    const o = this.getMargin(...a.parseSizedUnit(a.mapPropValue("margin", s)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@md.margin", t))
                }
                if (c !== s) {
                    const o = this.getMargin(...a.parseSizedUnit(a.mapPropValue("margin", c)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@lg.margin", t))
                }
            } else e.margin = 0
        }
    }
    t(k, "propTypes", {
        tag: (global.PropTypes || guac["prop-types"]).any,
        children: (global.PropTypes || guac["prop-types"]).node,
        wrap: (global.PropTypes || guac["prop-types"]).bool,
        equal: (global.PropTypes || guac["prop-types"]).bool,
        bottom: (global.PropTypes || guac["prop-types"]).bool,
        gutter: (global.PropTypes || guac["prop-types"]).bool,
        column: (global.PropTypes || guac["prop-types"]).bool,
        reverse: (global.PropTypes || guac["prop-types"]).bool,
        inset: (global.PropTypes || guac["prop-types"]).bool,
        size: (global.PropTypes || guac["prop-types"]).number,
        spacing: (global.PropTypes || guac["prop-types"]).any,
        xs: (global.PropTypes || guac["prop-types"]).number,
        sm: (global.PropTypes || guac["prop-types"]).number,
        md: (global.PropTypes || guac["prop-types"]).number,
        lg: (global.PropTypes || guac["prop-types"]).number,
        spacingXs: (global.PropTypes || guac["prop-types"]).any,
        spacingSm: (global.PropTypes || guac["prop-types"]).any,
        spacingMd: (global.PropTypes || guac["prop-types"]).any,
        spacingLg: (global.PropTypes || guac["prop-types"]).any
    }), t(k, "defaultProps", {
        tag: "div",
        wrap: !0,
        gutter: !0,
        bottom: !0,
        size: 0,
        spacing: "medium",
        spacingSm: "xlarger"
    });
    const {
        utils: I
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2;
    class L extends(I.createElement("Grid", "Cell")) {
        static getPadding(e, t, a) {
            return `0 ${e/2}${t} ${a?`${e}${t}`:0}`
        }
        static getPercent(e, t) {
            return (e || 1) / (t || 12) * 100 + "%"
        }
        static applySizingStyles(e = {}, t = {}, a) {
            const {
                gutter: o,
                bottom: r,
                spacing: l,
                spacingXs: n = l,
                spacingSm: i = n,
                spacingMd: s = i,
                spacingLg: c = s
            } = t;
            if (o) {
                let t = e.padding = this.getPadding(...a.parseSizedUnit(a.mapPropValue("padding", n)), r);
                if (i !== n) {
                    const o = this.getPadding(...a.parseSizedUnit(a.mapPropValue("padding", i)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@sm.padding", t))
                }
                if (s !== i) {
                    const o = this.getPadding(...a.parseSizedUnit(a.mapPropValue("padding", s)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@md.padding", t))
                }
                if (c !== s) {
                    const o = this.getPadding(...a.parseSizedUnit(a.mapPropValue("padding", c)), r);
                    o !== t && (t = o, (global._ || guac.lodash).set(e, "@lg.padding", t))
                }
            } else e.padding = 0;
            return e
        }
        static applyPushPullStyles(e = {}, t = {}) {
            const {
                push: a,
                pushXs: o = a,
                pushSm: r = o,
                pushMd: l = r,
                pushLg: n = l,
                pull: i,
                pullXs: s = i,
                pullSm: c = s,
                pullMd: g = c,
                pullLg: p = g,
                grid: u,
                gridXs: d = u,
                gridSm: h = d,
                gridMd: b = h,
                gridLg: m = b
            } = t;
            let y = "initial";
            if (o > 0 && (e.marginLeft = y = this.getPercent(o, d)), r !== o) {
                const t = r > 0 ? this.getPercent(r, h) : "initial";
                t !== y && (y = t, (global._ || guac.lodash).set(e, "@sm.marginLeft", y))
            }
            if (l !== r) {
                const t = l > 0 ? this.getPercent(l, b) : "initial";
                t !== y && (y = t, (global._ || guac.lodash).set(e, "@md.marginLeft", y))
            }
            if (n !== l) {
                const t = n > 0 ? this.getPercent(n, m) : "initial";
                t !== y && (y = t, (global._ || guac.lodash).set(e, "@lg.marginLeft", y))
            }
            let f = "initial";
            if (s > 0 && (e.marginRight = f = this.getPercent(s, d)), c !== s) {
                const t = c > 0 ? this.getPercent(c, h) : "initial";
                t !== f && (f = t, (global._ || guac.lodash).set(e, "@sm.marginRight", f))
            }
            if (g !== c) {
                const t = g > 0 ? this.getPercent(g, b) : "initial";
                t !== f && (f = t, (global._ || guac.lodash).set(e, "@md.marginRight", f))
            }
            if (p !== g) {
                const t = p > 0 ? this.getPercent(p, m) : "initial";
                t !== f && (f = t, (global._ || guac.lodash).set(e, "@lg.marginRight", f))
            }
            return e
        }
        static applySizeStyles(e = {}, t = {}) {
            const {
                size: a,
                xs: o = a,
                sm: r = o,
                md: l = r,
                lg: n = l,
                grid: i,
                gridXs: s = i,
                gridSm: c = s,
                gridMd: g = c,
                gridLg: p = g
            } = t;
            let u = "0%";
            if ((o > 0 || s > 0) && (e.flexBasis = e.maxWidth = u = this.getPercent(o, s)), r !== o || c !== s) {
                const t = r > 0 || c > 0 ? this.getPercent(r, c) : "0%";
                t !== u && (u = t, (global._ || guac.lodash).set(e, "@sm.flexBasis", u), (global._ || guac.lodash).set(e, "@sm.maxWidth", "0%" === u ? "none" : u))
            }
            if (l !== r || g !== c) {
                const t = l > 0 || g > 0 ? this.getPercent(l, g) : "0%";
                t !== u && (u = t, (global._ || guac.lodash).set(e, "@md.flexBasis", u), (global._ || guac.lodash).set(e, "@md.maxWidth", "0%" === u ? "none" : u))
            }
            if (n !== l || p !== g) {
                const t = n > 0 || p > 0 ? this.getPercent(n, p) : "0%";
                t !== u && (u = t, (global._ || guac.lodash).set(e, "@lg.flexBasis", u), (global._ || guac.lodash).set(e, "@lg.maxWidth", "0%" === u ? "none" : u))
            }
            return e
        }
    }
    t(L, "propTypes", {
        tag: (global.PropTypes || guac["prop-types"]).any,
        children: (global.PropTypes || guac["prop-types"]).node,
        equal: (global.PropTypes || guac["prop-types"]).bool,
        bottom: (global.PropTypes || guac["prop-types"]).bool,
        gutter: (global.PropTypes || guac["prop-types"]).bool,
        column: (global.PropTypes || guac["prop-types"]).bool,
        first: (global.PropTypes || guac["prop-types"]).bool,
        last: (global.PropTypes || guac["prop-types"]).bool,
        size: (global.PropTypes || guac["prop-types"]).number,
        push: (global.PropTypes || guac["prop-types"]).number,
        pull: (global.PropTypes || guac["prop-types"]).number,
        grid: (global.PropTypes || guac["prop-types"]).number,
        spacing: (global.PropTypes || guac["prop-types"]).any,
        xs: (global.PropTypes || guac["prop-types"]).number,
        sm: (global.PropTypes || guac["prop-types"]).number,
        md: (global.PropTypes || guac["prop-types"]).number,
        lg: (global.PropTypes || guac["prop-types"]).number,
        inset: (global.PropTypes || guac["prop-types"]).bool,
        pushXs: (global.PropTypes || guac["prop-types"]).number,
        pushSm: (global.PropTypes || guac["prop-types"]).number,
        pushMd: (global.PropTypes || guac["prop-types"]).number,
        pushLg: (global.PropTypes || guac["prop-types"]).number,
        pullXs: (global.PropTypes || guac["prop-types"]).number,
        pullSm: (global.PropTypes || guac["prop-types"]).number,
        pullMd: (global.PropTypes || guac["prop-types"]).number,
        pullLg: (global.PropTypes || guac["prop-types"]).number,
        gridXs: (global.PropTypes || guac["prop-types"]).number,
        gridSm: (global.PropTypes || guac["prop-types"]).number,
        gridMd: (global.PropTypes || guac["prop-types"]).number,
        gridLg: (global.PropTypes || guac["prop-types"]).number,
        spacingXs: (global.PropTypes || guac["prop-types"]).any,
        spacingSm: (global.PropTypes || guac["prop-types"]).any,
        spacingMd: (global.PropTypes || guac["prop-types"]).any,
        spacingLg: (global.PropTypes || guac["prop-types"]).any
    }), t(L, "defaultProps", {
        tag: "div",
        size: 0,
        push: 0,
        pull: 0,
        grid: 0,
        spacing: "small",
        spacingSm: "medium",
        spacingMd: "large"
    }), k.Cell = L;
    class M extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("MediaObject")) {}
    t(M, "propTypes", {
        heading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).string.isRequired
        })]),
        subheading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).string.isRequired
        })]),
        media: (global.PropTypes || guac["prop-types"]).shape({
            url: (global.PropTypes || guac["prop-types"]).string.isRequired
        })
    });
    class A extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Header")) {}
    t(A, "propTypes", {
        category: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string
    });
    class _ extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Page")) {}
    t(_, "propTypes", {
        fixedWidth: (global.PropTypes || guac["prop-types"]).bool
    });
    class O extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Widget")) {}
    t(O, "propTypes", {
        category: (global.PropTypes || guac["prop-types"]).string.isRequired,
        section: (global.PropTypes || guac["prop-types"]).string.isRequired
    });
    class B extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Widget", "Banner")) {}
    class D extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Widget", "Split")) {}
    O.Banner = B, O.Split = D;
    const H = "cardBackground",
        N = (global.PropTypes || guac["prop-types"]).shape({
            url: (global.PropTypes || guac["prop-types"]).string,
            pageId: (global.PropTypes || guac["prop-types"]).string,
            widgetId: (global.PropTypes || guac["prop-types"]).string,
            linkId: (global.PropTypes || guac["prop-types"]).string,
            target: (global.PropTypes || guac["prop-types"]).string
        });
    class U extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ContentCard")) {}
    t(U, "propTypes", {
        id: (global.PropTypes || guac["prop-types"]).string,
        heading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            link: N
        })]),
        text: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            richtext: (global.PropTypes || guac["prop-types"]).bool,
            textCollapseProps: (global.PropTypes || guac["prop-types"]).shape({
                enabled: (global.PropTypes || guac["prop-types"]).bool,
                renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
                collapseThreshold: (global.PropTypes || guac["prop-types"]).number,
                expandIconProps: (global.PropTypes || guac["prop-types"]).shape({
                    children: (global.PropTypes || guac["prop-types"]).any,
                    "data-aid": (global.PropTypes || guac["prop-types"]).string
                }),
                collapseIconProps: (global.PropTypes || guac["prop-types"]).shape({
                    children: (global.PropTypes || guac["prop-types"]).any,
                    "data-aid": (global.PropTypes || guac["prop-types"]).string
                })
            })
        })]),
        image: (global.PropTypes || guac["prop-types"]).shape({
            alt: (global.PropTypes || guac["prop-types"]).string,
            src: (global.PropTypes || guac["prop-types"]).string,
            link: N,
            shrinkToFit: (global.PropTypes || guac["prop-types"]).bool,
            width: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).number, (global.PropTypes || guac["prop-types"]).string]),
            height: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).number, (global.PropTypes || guac["prop-types"]).string]),
            type: (global.PropTypes || guac["prop-types"]).oneOf(["image", "background", H]),
            backgroundSize: (global.PropTypes || guac["prop-types"]).oneOf(["contain", "cover"]),
            imageData: (global.PropTypes || guac["prop-types"]).object,
            style: (global.PropTypes || guac["prop-types"]).object
        }),
        action: (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any,
            link: N
        }),
        alignment: (global.PropTypes || guac["prop-types"]).oneOf(["left", "center", "right"])
    });
    class z extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ContentCards")) {}
    t(z, "propTypes", {
        cards: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).object)
    });
    class X extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("SplitLayout")) {}
    t(X, "propTypes", {
        bleed: (global.PropTypes || guac["prop-types"]).bool,
        fluid: (global.PropTypes || guac["prop-types"]).bool,
        reverse: (global.PropTypes || guac["prop-types"]).bool,
        url: (global.PropTypes || guac["prop-types"]).string,
        contentElement: (global.PropTypes || guac["prop-types"]).element,
        mediaElement: (global.PropTypes || guac["prop-types"]).element
    });
    class W extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Box")) {}
    t(W, "propTypes", {
        alignX: (global.PropTypes || guac["prop-types"]).oneOf(["left", "middle", "right", "start", "center", "end"]),
        alignY: (global.PropTypes || guac["prop-types"]).oneOf(["top", "middle", "bottom", "start", "center", "end"]),
        style: (global.PropTypes || guac["prop-types"]).object,
        children: (global.PropTypes || guac["prop-types"]).element
    });
    class V extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("VerticalBox")) {}
    t(V, "propTypes", {
        align: W.propTypes.alignX.isRequired,
        style: (global.PropTypes || guac["prop-types"]).object,
        children: (global.PropTypes || guac["prop-types"]).element
    });
    class F extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("HorizontalBox")) {}
    t(F, "propTypes", {
        align: W.propTypes.alignX.isRequired,
        style: (global.PropTypes || guac["prop-types"]).object,
        children: (global.PropTypes || guac["prop-types"]).element
    });
    class j extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Modal")) {}
    t(j, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).node.isRequired,
        onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
        closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
        preventShrink: (global.PropTypes || guac["prop-types"]).bool,
        width: (global.PropTypes || guac["prop-types"]).number
    }), t(j, "defaultProps", {
        closeOnClickOutside: !1,
        preventShrink: !1
    });
    class G extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Modal", "Popup")) {}
    t(G, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).node.isRequired,
        onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
        closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
        preventShrink: (global.PropTypes || guac["prop-types"]).bool,
        width: (global.PropTypes || guac["prop-types"]).number,
        styles: (global.PropTypes || guac["prop-types"]).shape({
            bodyWrapper: (global.PropTypes || guac["prop-types"]).object,
            body: (global.PropTypes || guac["prop-types"]).object,
            content: (global.PropTypes || guac["prop-types"]).object,
            closeIcon: (global.PropTypes || guac["prop-types"]).object
        })
    }), t(G, "defaultProps", {
        closeOnClickOutside: !1,
        preventShrink: !1
    });
    class q extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Modal", "Body")) {}
    t(q, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).node.isRequired,
        onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
        preventShrink: (global.PropTypes || guac["prop-types"]).bool,
        width: (global.PropTypes || guac["prop-types"]).number,
        closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
        styles: (global.PropTypes || guac["prop-types"]).object
    }), t(q, "defaultProps", {
        preventShrink: !1
    }), j.Popup = G, j.Body = q;
    class $ extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ProductCard")) {}
    t($, "propTypes", {
        assetProps: (global.PropTypes || guac["prop-types"]).shape({
            banner: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).shape({
                text: (global.PropTypes || guac["prop-types"]).string,
                productName: (global.PropTypes || guac["prop-types"]).string
            }), (global.PropTypes || guac["prop-types"]).bool]),
            name: (global.PropTypes || guac["prop-types"]).string,
            assets: (global.PropTypes || guac["prop-types"]).array,
            defaultAssetUrl: (global.PropTypes || guac["prop-types"]).string
        }),
        product: (global.PropTypes || guac["prop-types"]).shape({
            id: (global.PropTypes || guac["prop-types"]).number,
            slug: (global.PropTypes || guac["prop-types"]).string,
            name: (global.PropTypes || guac["prop-types"]).string,
            description_raw: (global.PropTypes || guac["prop-types"]).string,
            updated_at: (global.PropTypes || guac["prop-types"]).string,
            created_at: (global.PropTypes || guac["prop-types"]).string,
            currency: (global.PropTypes || guac["prop-types"]).string,
            price: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).shape({
                display: (global.PropTypes || guac["prop-types"]).string,
                numeric: (global.PropTypes || guac["prop-types"]).number,
                currency: (global.PropTypes || guac["prop-types"]).string
            }), (global.PropTypes || guac["prop-types"]).string]),
            sale_price: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).shape({
                display: (global.PropTypes || guac["prop-types"]).string,
                numeric: (global.PropTypes || guac["prop-types"]).number,
                currency: (global.PropTypes || guac["prop-types"]).string
            }), (global.PropTypes || guac["prop-types"]).string]),
            relative_url: (global.PropTypes || guac["prop-types"]).string,
            "on_sale?": (global.PropTypes || guac["prop-types"]).bool,
            variant_count: (global.PropTypes || guac["prop-types"]).number,
            has_price_range: (global.PropTypes || guac["prop-types"]).bool,
            ship_free: (global.PropTypes || guac["prop-types"]).bool,
            product_type: (global.PropTypes || guac["prop-types"]).string,
            defaultAssetUrl: (global.PropTypes || guac["prop-types"]).string,
            measurement_system: (global.PropTypes || guac["prop-types"]).string
        }),
        determineStyles: (global.PropTypes || guac["prop-types"]).func,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
        showBorder: (global.PropTypes || guac["prop-types"]).bool,
        imageShape: (global.PropTypes || guac["prop-types"]).string,
        translate: (global.PropTypes || guac["prop-types"]).func,
        children: (global.PropTypes || guac["prop-types"]).any,
        productsPerRow: (global.PropTypes || guac["prop-types"]).number
    });
    class Y extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Intro")) {}
    t(Y, "propTypes", {
        alignment: (global.PropTypes || guac["prop-types"]).oneOf(["left", "center", "right"]),
        heading: (global.PropTypes || guac["prop-types"]).object,
        text: (global.PropTypes || guac["prop-types"]).object
    });
    class K extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("ZeroStateOverlay")) {}
    t(K, "propTypes", {
        beforeContent: (global.PropTypes || guac["prop-types"]).any,
        button: (global.PropTypes || guac["prop-types"]).object,
        secondaryButton: (global.PropTypes || guac["prop-types"]).object,
        afterContent: (global.PropTypes || guac["prop-types"]).any
    });
    class Z extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Alert")) {}
    t(Z, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).any,
        icon: (global.PropTypes || guac["prop-types"]).node,
        onClose: (global.PropTypes || guac["prop-types"]).func
    });
    class Q extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("EmbedVideo")) {}
    t(Q, "propTypes", {
        "data-field-route": (global.PropTypes || guac["prop-types"]).string,
        "data-field-id": (global.PropTypes || guac["prop-types"]).string,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        embedUrl: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object
    });
    class J extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("HeaderBackground")) {}
    t(J, "propTypes", {
        backgroundImage: (global.PropTypes || guac["prop-types"]).string.isRequired,
        backgroundInfo: {
            treatmentLayout: (global.PropTypes || guac["prop-types"]).string
        },
        category: (global.PropTypes || guac["prop-types"]).string
    });
    class ee extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Picture")) {}
    t(ee, "propTypes", {
        xsSrc: (global.PropTypes || guac["prop-types"]).string,
        smSrc: (global.PropTypes || guac["prop-types"]).string,
        mdSrc: (global.PropTypes || guac["prop-types"]).string,
        lgSrc: (global.PropTypes || guac["prop-types"]).string,
        xlSrc: (global.PropTypes || guac["prop-types"]).string,
        imgSrc: (global.PropTypes || guac["prop-types"]).string,
        imgAlt: (global.PropTypes || guac["prop-types"]).string
    });
    class te extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("InputGroup")) {}
    t(te, "propTypes", {
        input: (global.PropTypes || guac["prop-types"]).shape({
            placeholder: (global.PropTypes || guac["prop-types"]).string,
            value: (global.PropTypes || guac["prop-types"]).string,
            name: (global.PropTypes || guac["prop-types"]).string,
            handleChange: (global.PropTypes || guac["prop-types"]).func,
            style: (global.PropTypes || guac["prop-types"]).object,
            "data-route": (global.PropTypes || guac["prop-types"]).string
        }),
        button: (global.PropTypes || guac["prop-types"]).shape({
            "data-tccl": (global.PropTypes || guac["prop-types"]).string,
            "data-aid": (global.PropTypes || guac["prop-types"]).string,
            "data-route": (global.PropTypes || guac["prop-types"]).string,
            style: (global.PropTypes || guac["prop-types"]).object,
            children: (global.PropTypes || guac["prop-types"]).string
        }),
        error: (global.PropTypes || guac["prop-types"]).string,
        errorProps: (global.PropTypes || guac["prop-types"]).object
    });
    class ae extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Overlay")) {}
    t(ae, "propTypes", {
        name: (global.PropTypes || guac["prop-types"]).string,
        price: (global.PropTypes || guac["prop-types"]).string,
        salePrice: (global.PropTypes || guac["prop-types"]).string,
        imageUrl: (global.PropTypes || guac["prop-types"]).string,
        priceText: (global.PropTypes || guac["prop-types"]).string,
        productType: (global.PropTypes || guac["prop-types"]).string,
        cardType: (global.PropTypes || guac["prop-types"]).string,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        category: (global.PropTypes || guac["prop-types"]).string,
        isImageShown: (global.PropTypes || guac["prop-types"]).bool,
        isPriceShown: (global.PropTypes || guac["prop-types"]).bool,
        linkText: (global.PropTypes || guac["prop-types"]).string,
        overlayAlpha: (global.PropTypes || guac["prop-types"]).number
    });
    class oe extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Item")) {}
    t(oe, "propTypes", {
        name: (global.PropTypes || guac["prop-types"]).string.isRequired,
        duration: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).element]),
        price: (global.PropTypes || guac["prop-types"]).string.isRequired,
        imageUrl: (global.PropTypes || guac["prop-types"]).string,
        ribbonText: (global.PropTypes || guac["prop-types"]).string,
        cardSize: (global.PropTypes || guac["prop-types"]).object,
        imageShape: (global.PropTypes || guac["prop-types"]).string,
        imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
        hasImageBorder: (global.PropTypes || guac["prop-types"]).bool,
        productType: (global.PropTypes || guac["prop-types"]).string,
        isBoxed: (global.PropTypes || guac["prop-types"]).bool,
        style: (global.PropTypes || guac["prop-types"]).object,
        eyebrowText: (global.PropTypes || guac["prop-types"]).string,
        footerText: (global.PropTypes || guac["prop-types"]).string,
        eventDate: (global.PropTypes || guac["prop-types"]).string,
        buttonText: (global.PropTypes || guac["prop-types"]).string,
        priceText: (global.PropTypes || guac["prop-types"]).string,
        salePrice: (global.PropTypes || guac["prop-types"]).string,
        ratings: (global.PropTypes || guac["prop-types"]).element,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        dataRoutes: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string)
    });
    class re extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "PictureContainer")) {}
    t(re, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).element,
        backgroundColor: (global.PropTypes || guac["prop-types"]).string,
        imageShape: (global.PropTypes || guac["prop-types"]).string,
        hasImageBorder: (global.PropTypes || guac["prop-types"]).bool,
        containerStyles: (global.PropTypes || guac["prop-types"]).object,
        canHaveBorder: (global.PropTypes || guac["prop-types"]).bool
    });
    class le extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Content")) {}
    t(le, "propTypes", {
        name: (global.PropTypes || guac["prop-types"]).string.isRequired,
        duration: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).element]),
        eventDate: (global.PropTypes || guac["prop-types"]).string,
        price: (global.PropTypes || guac["prop-types"]).string.isRequired,
        salePrice: (global.PropTypes || guac["prop-types"]).string,
        priceText: (global.PropTypes || guac["prop-types"]).string,
        productType: (global.PropTypes || guac["prop-types"]).string,
        eyebrowText: (global.PropTypes || guac["prop-types"]).string,
        footerText: (global.PropTypes || guac["prop-types"]).string,
        ratings: (global.PropTypes || guac["prop-types"]).element,
        titleProps: (global.PropTypes || guac["prop-types"]).object,
        cardType: (global.PropTypes || guac["prop-types"]).string,
        isBoxed: (global.PropTypes || guac["prop-types"]).bool,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        dataRoutes: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        buttonText: (global.PropTypes || guac["prop-types"]).string,
        isLinkShown: (global.PropTypes || guac["prop-types"]).bool,
        isPriceShown: (global.PropTypes || guac["prop-types"]).bool,
        isImageShown: (global.PropTypes || guac["prop-types"]).bool,
        linkText: (global.PropTypes || guac["prop-types"]).string,
        linkCategory: (global.PropTypes || guac["prop-types"]).string,
        isPriceFeatured: (global.PropTypes || guac["prop-types"]).bool,
        style: (global.PropTypes || guac["prop-types"]).object
    });
    class ne extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Picture")) {}
    t(ne, "propTypes", {
        assetUrl: (global.PropTypes || guac["prop-types"]).string,
        overlayAlpha: (global.PropTypes || guac["prop-types"]).number,
        imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string)
    });
    class ie extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Title")) {}
    t(ie, "propTypes", {
        title: (global.PropTypes || guac["prop-types"]).string.isRequired,
        isDigitalProduct: (global.PropTypes || guac["prop-types"]).bool,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string)
    });
    class se extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "PriceDisplay")) {}
    t(se, "propTypes", {
        price: (global.PropTypes || guac["prop-types"]).string.isRequired,
        salePrice: (global.PropTypes || guac["prop-types"]).string,
        cardType: (global.PropTypes || guac["prop-types"]).string,
        priceText: (global.PropTypes || guac["prop-types"]).string,
        duration: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).element]),
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        isLinkShown: (global.PropTypes || guac["prop-types"]).bool,
        isPriceFeatured: (global.PropTypes || guac["prop-types"]).bool
    });
    class ce extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("CommerceCard", "Ribbon")) {}
    t(ce, "propTypes", {
        children: (global.PropTypes || guac["prop-types"]).string,
        dataAids: (global.PropTypes || guac["prop-types"]).objectOf((global.PropTypes || guac["prop-types"]).string),
        cardSize: (global.PropTypes || guac["prop-types"]).object
    });
    class ge extends((global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.createElement("Video")) {}
    t(ge, "propTypes", {
        "data-field-route": (global.PropTypes || guac["prop-types"]).string,
        "data-field-id": (global.PropTypes || guac["prop-types"]).string,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        url: (global.PropTypes || guac["prop-types"]).string,
        poster: (global.PropTypes || guac["prop-types"]).string,
        alt: (global.PropTypes || guac["prop-types"]).string,
        lazyLoad: (global.PropTypes || guac["prop-types"]).bool,
        height: (global.PropTypes || guac["prop-types"]).string,
        width: (global.PropTypes || guac["prop-types"]).string,
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        columnCountMap: (global.PropTypes || guac["prop-types"]).object
    });
    var pe = {
        __proto__: null,
        Background: C,
        ContentBasic: T,
        ContentWrap: P,
        HeadingPair: R,
        Rating: v,
        CardBanner: x,
        Grid: k,
        MediaObject: M,
        Header: A,
        Page: _,
        Widget: O,
        WidgetBanner: B,
        WidgetSplit: D,
        ContentCard: U,
        ContentCards: z,
        SplitLayout: X,
        Box: W,
        VerticalBox: V,
        HorizontalBox: F,
        Modal: j,
        ProductCard: $,
        Intro: Y,
        ZeroStateOverlay: K,
        Alert: Z,
        EmbedVideo: Q,
        HeaderBackground: J,
        Picture: ee,
        InputGroup: te,
        CommerceCardOverlay: ae,
        CommerceCardItem: oe,
        CommerceCardPictureContainer: re,
        CommerceCardContent: le,
        CommerceCardPicture: ne,
        CommerceCardTitle: ie,
        CommerceCardPriceDisplay: se,
        CommerceCardRibbon: ce,
        Video: ge
    };

    function ue(e = {}) {
        (global.Core || guac["@wsb/guac-widget-core"]).utils.register({
            Group: {
                Blog: ["List", "Main", "Aside", "Content"],
                Card: ["Link", "Banner"],
                Carousel: [],
                ContactBar: [],
                Content: ["Big", "Card", "OverlayCard"],
                Featured: [],
                Form: ["Search"],
                GoogleTranslate: [],
                Group: [],
                Hero: ["Left", "Center", "Right", "Header1"],
                Layout: [],
                Logo: ["Heading"],
                Map: ["Banner"],
                Media: ["Object"],
                Membership: [],
                Menu: [],
                MobileNav: ["Link", "SubLink"],
                Nav: ["Footer", "Menu", "Vertical", "Horizontal", "MoreMenu"],
                NavigationDrawer: ["Sub"],
                Product: ["Asset", "Banner", "Label", "Name", "Prices"],
                CommerceOverlay: ["Major", "Medium", "Mobile", "Heading", "Icon", "Wrapper", "MoreLink"],
                CommerceItem: ["Heading", "Icon", "Label", "Price", "Button", "Wrapper"],
                PromoBanner: ["Seasonal"],
                SearchPopout: [],
                Section: ["Banner", "Split"],
                SlideshowArrows: [],
                SocialLinks: ["Drawer"],
                SplitItem: ["Image"],
                UtilitiesMenu: [],
                HeaderMedia: [o, r, l, n, i],
                Sidebar: [],
                SubMenu: []
            },
            Element: {
                Address: [],
                Background: [],
                Block: [],
                Button: ["Previous", "Next", "FullWidth", "Primary", "Secondary", "Spotlight", "External"],
                CloseIcon: [],
                Container: ["Fluid", "Split"],
                Details: ["Minor"],
                DisplayHeading: ["Sub"],
                Divider: [],
                Dot: ["Active"],
                Dropdown: [],
                Element: [],
                Embed: ["Container"],
                Error: [],
                FigCaption: ["Overlay"],
                Figure: [],
                FooterLink: [],
                FooterDetails: [],
                FooterText: [],
                Heading: ["Sub", "Major", "Minor", "Middle", "Product"],
                HR: [],
                Icon: ["Hamburger", "Search", "Social"],
                Image: ["Thumbnail", "Logo"],
                Input: ["FloatLabel", "TextArea", "Checkbox", "Select", "Radio", "Search"],
                Label: ["Minor"],
                Link: ["Arrow", "Active", "Content", "Icon", "Nested", "NestedActive", "Dropdown", "DropdownActive"],
                List: ["Nested"],
                ListItem: ["Inline"],
                Loader: [],
                MoreLink: ["Expand", "Forward", "Backward", "Menu"],
                Option: [],
                Phone: [],
                Pipe: [],
                Price: ["Major"],
                Ribbon: [],
                SVG: [],
                Table: ["Header", "Row", "Cell"],
                Tagline: [],
                SubTagline: [],
                SupTagline: [],
                Text: ["Major", "Action"],
                Wrapper: ["Image", "Video"],
                Video: []
            },
            Component: { ...pe,
                ...e
            }
        })
    }
    ue();
    var de = {
        fontDial: function(e) {
            const {
                fontDials: t = [],
                locale: a,
                language: o
            } = this.base, r = {
                locale: a,
                language: o
            };
            let l = !1;
            return t.some((t => {
                const a = t && t.getMetaWithOverrides && t.getMetaWithOverrides(r) || t && t.meta,
                    o = a && (global._ || guac.lodash).get(a, e, void 0);
                return o && (l = o), l
            })), l || e
        }
    };
    const he = "xs",
        be = "md",
        me = "lg";
    var ye = [he, "sm", be, me, "xl"];
    const fe = {
            [he]: {
                xsmall: 12,
                small: 14,
                medium: 16,
                mlarge: 18,
                large: 22,
                xlarge: 28,
                xxlarge: 32,
                xxxlarge: 40,
                jumbo: 44,
                xjumbo: 48
            },
            sm: {
                xsmall: 12,
                small: 14,
                medium: 16,
                mlarge: 18,
                large: 22,
                xlarge: 30,
                xxlarge: 38,
                xxxlarge: 48,
                jumbo: 62,
                xjumbo: 72
            },
            [be]: {
                xsmall: 12,
                small: 14,
                medium: 16,
                mlarge: 18,
                large: 22,
                xlarge: 30,
                xxlarge: 38,
                xxxlarge: 48,
                jumbo: 62,
                xjumbo: 72
            },
            [me]: {
                xsmall: 12,
                small: 14,
                medium: 16,
                mlarge: 18,
                large: 22,
                xlarge: 32,
                xxlarge: 44,
                xxxlarge: 62,
                jumbo: 72,
                xjumbo: 96
            },
            xl: {
                xsmall: 14,
                small: 16,
                medium: 18,
                mlarge: 20,
                large: 24,
                xlarge: 36,
                xxlarge: 48,
                xxxlarge: 64,
                jumbo: 74,
                xjumbo: 98
            }
        },
        {
            fontScales: {
                DEFAULT_WEBSITE_FONT_SCALES: we
            },
            fontSizes: {
                XSMALL: Ce,
                SMALL: Ee,
                MEDIUM: Te,
                LARGE: Pe,
                XLARGE: Re,
                XXLARGE: ve,
                XXXLARGE: xe,
                JUMBO: Se,
                XJUMBO: ke,
                CUSTOM: Ie
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
        Le = [Ce, Ee, Te, "mlarge", Pe, Re, ve, xe, Se, ke, Ie];

    function Me(e, t) {
        const a = t && ye.indexOf(t) >= 0;
        if (Le.indexOf(e) < 0) return e;
        const o = this.mappedValues.fontSizeMapping || fe,
            r = o.xs.medium,
            l = this.base.theme.mapPropValue("fontDial", this.base.fontFamily),
            n = l ? (l.size || r) / r : 1,
            i = a ? o[t][e] : o.xs[e];
        return Math.round(i * n)
    }

    function Ae(e, t) {
        const a = (this.mappedValues.fontSizeMapping || fe)[t];
        return a ? (global._ || guac.lodash).clamp(e, a.xsmall, a.xjumbo) : e
    }
    const _e = "lighter",
        Oe = "light",
        Be = "normal",
        De = "bold",
        He = "bolder";
    var Ne = [_e, Oe, Be, De, He];
    const Ue = {};
    var ze = { ...de,
        ...{
            fontSize: function(e = "") {
                const t = function(e) {
                        if (!(global._ || guac.lodash).isString(e)) return;
                        const t = ye.find((t => 0 === e.indexOf(t)));
                        if (!t) return;
                        const a = (global._ || guac.lodash).lowerFirst(e.substr(t.length));
                        return -1 !== Le.indexOf(a) ? {
                            deviceSize: t,
                            newFontSize: a
                        } : void 0
                    }(e),
                    a = this.base.fontScale,
                    o = this.base.props.isLogo;
                let r = "number" == typeof a ? a : !o && we[a] || we.medium;
                const l = this.base.fontScaleMultiplier;
                if (l && (r *= Number(l) || 1), !t) {
                    if (Le.indexOf(e) >= 0) {
                        const t = Me.call(this, e, he);
                        return Ae.call(this, Math.round(t * r), he)
                    }
                    return e
                }
                const n = Me.call(this, t.newFontSize, t.deviceSize);
                return Ae.call(this, Math.round(n * r), t.deviceSize)
            }
        },
        fontFamily: function(e) {
            const t = this.mapPropValue("fontDial", e);
            return t && t.family || e
        },
        fontWeight: function(e) {
            return -1 === Ne.indexOf(e) ? e : function(e, t = []) {
                let a = t.indexOf(e); - 1 === a && (t.unshift(e), a = 0);
                const o = [e, ...t].join();
                if (!(o in Ue)) {
                    const r = t.slice(0, a + 1),
                        l = r.length,
                        n = t.slice(a),
                        i = n.length;
                    Ue[o] = {
                        [_e]: r[0],
                        [Oe]: l > 1 && r[Math.round(l / 3)] || e,
                        [Be]: e,
                        [De]: i > 1 && n[Math.round(i / 3)] || e,
                        [He]: n[i - 1]
                    }
                }
                return Ue[o]
            }(this.mapPropValue("fontDial", (this.base.fontFamily || "primary") + ".weight") || 400, this.mapPropValue("fontDial", (this.base.fontFamily || "primary") + ".weights"))[e]
        },
        hasFontSet: function(e = [], t = "old-standard-tt") {
            return e.find((e => e === t))
        }
    };
    const Xe = (e = "medium") => ({
            "> :nth-child(n)": {
                marginBottom: e
            },
            " > :last-child": {
                marginBottom: "0 !important"
            }
        }),
        We = (e = "medium") => ({
            "> :nth-child(n)": {
                marginRight: e
            },
            " > :last-child": {
                marginRight: "0 !important"
            }
        }),
        Ve = e => {
            if ("string" == typeof e) return {
                children: e.trim()
            };
            if (e && "object" == typeof e) {
                let {
                    children: t = null
                } = e;
                return "string" == typeof t && (t = t.trim()), { ...e,
                    children: t
                }
            }
            return {
                children: null
            }
        };

    function Fe(e) {
        const t = function(e) {
            if ("string" != typeof e || "{" !== e[0]) return null;
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        }(e) || {};
        let a = 0;
        return t.blocks && t.blocks.forEach((e => {
            const t = e.text.length;
            a += (global._ || guac.lodash).clamp(t, 25, Math.max(t, 25))
        })), a
    }
    const {
        CTAButton: je
    } = (global.Core || guac["@wsb/guac-widget-core"]).components;
    class Ge extends(global.React || guac.react).Component {
        render() {
            const {
                action: e
            } = this.props, {
                children: t,
                link: a,
                ...o
            } = e, r = {
                element: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Secondary,
                ctaButton: {
                    label: t,
                    enabled: !0,
                    ...a
                },
                ...o
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                children: (global.React || guac.react).createElement(je, r)
            })
        }
    }
    t(Ge, "propTypes", {
        action: (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any,
            link: (global.PropTypes || guac["prop-types"]).shape({
                url: (global.PropTypes || guac["prop-types"]).string,
                pageId: (global.PropTypes || guac["prop-types"]).string,
                widgetId: (global.PropTypes || guac["prop-types"]).string,
                linkId: (global.PropTypes || guac["prop-types"]).string,
                target: (global.PropTypes || guac["prop-types"]).string
            }),
            target: (global.PropTypes || guac["prop-types"]).string
        })
    });
    const {
        Link: qe
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, $e = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string
    });
    class Ye extends(global.React || guac.react).Component {
        render() {
            const {
                heading: e,
                style: t = {}
            } = this.props, {
                link: o,
                ...r
            } = e && Ve(e), l = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
                style: t
            }, r));
            return r.children ? o ? (global.React || guac.react).createElement(qe, {
                linkData: o
            }, " ", l, " ") : l : null
        }
    }
    t(Ye, "propTypes", {
        heading: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            link: $e
        })]),
        style: (global.PropTypes || guac["prop-types"]).object
    });
    const {
        renderModes: {
            EDIT: Ke
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Ze = 340, Qe = 60;
    class Je extends(global.React || guac.react).Component {
        getPlainCaption(e) {
            let t;
            const a = e.blocks;
            if (a.length > 1) {
                const e = [];
                a.forEach((t => "" === t.text ? e.push("\n\n") : e.push(t.text))), t = e.join("")
            } else t = a[0].text;
            return t
        }
        getShortenedCaption(e, t, a) {
            if (!e) return t.slice(0, a);
            let o, r = 0;
            e.blocks.some(((e, t) => (r += e.text.length, o = t, r >= a)));
            const l = e.blocks.map(((e, t) => {
                    if (t === o) {
                        const t = e.text.slice(0, -(r - a));
                        return { ...e,
                            text: t
                        }
                    }
                    return t > o ? null : e
                })).filter(Boolean),
                n = { ...e,
                    blocks: l
                };
            return JSON.stringify(n)
        }
        renderCollapsedText(e) {
            const {
                alignment: t
            } = this.props, {
                children: o,
                textCollapseProps: r = {}
            } = e, {
                collapseThreshold: l = Ze,
                collapseMinOverflow: n = Qe,
                expandIconProps: i = {},
                collapseIconProps: s = {},
                renderMode: c
            } = r;
            let g;
            try {
                g = JSON.parse(o)
            } catch (e) {}
            const p = (g ? this.getPlainCaption(g).length : o.length) > l + n,
                u = p && c === Ke,
                d = (global._ || guac.lodash).uniqueId("collapsedTextBlock"),
                h = (global._ || guac.lodash).uniqueId("expandedTextBlock"),
                b = (global._ || guac.lodash).uniqueId("expandTextToggle"),
                m = {
                    id: b,
                    type: "checkbox",
                    role: "button",
                    style: {
                        display: "none",
                        [":checked ~ #" + h]: {
                            display: "block"
                        },
                        [":checked ~ #" + d]: {
                            display: "none"
                        },
                        [":not(:checked) ~ #" + h]: {
                            display: "none"
                        },
                        [":not(:checked) ~ #" + d]: {
                            display: "block"
                        }
                    }
                },
                y = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    id: d,
                    style: {
                        display: u ? "none" : "block"
                    }
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, a({
                    alignment: t
                }, (global._ || guac.lodash).omit(e, "textCollapseProps"), {
                    children: this.getShortenedCaption(g, o, l)
                })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label, {
                    for: b
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.MoreLink.Expand, a({
                    style: {
                        marginVertical: "xsmall"
                    }
                }, i)))),
                f = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    id: h,
                    style: {
                        display: u ? "block" : "none"
                    }
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, a({
                    alignment: t
                }, (global._ || guac.lodash).omit(e, "textCollapseProps"))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label, {
                    for: b
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.MoreLink.Expand, a({
                    style: {
                        marginVertical: "xsmall"
                    },
                    expanded: !0
                }, s))));
            return p ? (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, !u && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input, m), y, f) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, a({
                alignment: t
            }, (global._ || guac.lodash).omit(e, "textCollapseProps")))
        }
        render() {
            const {
                text: e,
                alignment: t
            } = this.props, o = e && Ve({
                style: {
                    flexGrow: 1
                },
                ...e
            }), {
                children: r,
                textCollapseProps: l = {}
            } = o;
            return r ? l.enabled ? this.renderCollapsedText(o) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, a({
                alignment: t
            }, (global._ || guac.lodash).omit(o, "textCollapseProps"))) : null
        }
    }
    t(Je, "propTypes", {
        text: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).shape({
            children: (global.PropTypes || guac["prop-types"]).any.isRequired,
            richtext: (global.PropTypes || guac["prop-types"]).bool,
            textCollapseProps: (global.PropTypes || guac["prop-types"]).shape({
                enabled: (global.PropTypes || guac["prop-types"]).bool,
                renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
                collapseThreshold: (global.PropTypes || guac["prop-types"]).number,
                expandIconProps: (global.PropTypes || guac["prop-types"]).shape({
                    children: (global.PropTypes || guac["prop-types"]).any,
                    "data-aid": (global.PropTypes || guac["prop-types"]).string
                }),
                collapseIconProps: (global.PropTypes || guac["prop-types"]).shape({
                    children: (global.PropTypes || guac["prop-types"]).any,
                    "data-aid": (global.PropTypes || guac["prop-types"]).string
                })
            })
        })]),
        alignment: (global.PropTypes || guac["prop-types"]).string
    });
    const et = {
        left: "flex-start",
        right: "flex-end"
    };

    function tt({
        alignment: e = "center",
        heading: t,
        text: a,
        actionComponent: o,
        action: r,
        ...l
    }) {
        const n = t && Ve(t),
            i = a && Ve(a),
            s = {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                "> *": {
                    maxWidth: "100%"
                },
                alignItems: et[e] || e,
                textAlign: e,
                ...Xe("medium"),
                "@xs-only": Xe("about2" === this.base.widgetPreset ? "small" : "medium")
            };
        return r && (o = (global.React || guac.react).createElement(Ge, {
            key: "action",
            action: r
        })), this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            group: "Content",
            children: [!!n && n.children && (global.React || guac.react).createElement(Ye, {
                key: "heading",
                heading: n
            }), !!i && i.children && (global.React || guac.react).createElement(Je, {
                key: "text",
                text: i,
                alignment: e
            }), !!o && o],
            style: s
        }, l)
    }

    function at({
        data: e = [],
        render: t = (e => e),
        cellProps: o,
        cellStyle: r,
        alignmentOption: l = "center",
        ...n
    }) {
        const i = e.length;
        let s;
        s = i > 1 ? i < 6 && i % 2 == 0 ? {
            xs: 12,
            sm: 6,
            md: 6
        } : {
            xs: 12,
            sm: 6,
            md: 4
        } : {
            xs: 12,
            sm: 8
        };
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid,
            children: e.map(((e, l) => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, a({}, o || s, {
                key: e.key || l,
                children: t(e, l),
                style: r
            })))),
            style: {
                textAlign: "center",
                justifyContent: {
                    left: "flex-start",
                    center: "center",
                    right: "flex-end"
                }[l]
            }
        }, n)
    }

    function ot({
        heading: e,
        subheading: t,
        ...o
    }) {
        const r = e && Ve(e),
            l = t && Ve(t);
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            children: [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
                key: "heading"
            }, r)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading.Sub, a({
                key: "sub"
            }, l))],
            style: { ...Xe("small")
            }
        }, o)
    }

    function rt({
        rating: e,
        ...t
    }) {
        let a = 5,
            o = e;
        const r = this.base.keyId,
            l = "ZILLOW" === this.base.widgetType ? "rgb(28,182,71)" : "#FBCF1E",
            n = [];
        for (; a--;) o >= 1 ? n.push(100) : o < 1 && o > 0 ? n.push(100 * o) : n.push(0), o--;
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            section: "default",
            category: "neutral",
            children: n.map(((e, t) => function(e) {
                const {
                    width: t,
                    fill: a,
                    color: o,
                    emptyColor: r,
                    key: l,
                    keyId: n
                } = e;
                return (global.React || guac.react).createElement("div", {
                    key: l,
                    style: {
                        width: t + "px"
                    }
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                    viewBox: "0 0 50 50",
                    style: {
                        width: "100%",
                        height: "auto"
                    }
                }, (global.React || guac.react).createElement("defs", null, (global.React || guac.react).createElement("linearGradient", {
                    id: `fillStyle-${n}-${l}`
                }, function(e, t, a) {
                    if (100 === e) return [(global.React || guac.react).createElement("stop", {
                        offset: "0%",
                        stopColor: t,
                        key: "gradient1"
                    }), (global.React || guac.react).createElement("stop", {
                        offset: "100%",
                        stopColor: t,
                        key: "gradient2"
                    })];
                    return [(global.React || guac.react).createElement("stop", {
                        offset: "0%",
                        stopColor: t,
                        key: "gradient3"
                    }), (global.React || guac.react).createElement("stop", {
                        offset: e + "%",
                        stopColor: t,
                        key: "gradient4"
                    }), (global.React || guac.react).createElement("stop", {
                        offset: e + "%",
                        stopColor: a,
                        key: "gradient5"
                    }), (global.React || guac.react).createElement("stop", {
                        offset: "100%",
                        stopColor: a,
                        key: "gradient6"
                    })]
                }(a, o, r))), (global.React || guac.react).createElement("path", {
                    d: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
                    fill: `url(#fillStyle-${n}-${l})`
                })))
            }({
                key: "star-" + t,
                fill: e,
                width: "20",
                color: l,
                emptyColor: "rgb(224,224,224)",
                keyId: r
            }))),
            style: {
                display: "flex",
                backgroundColor: "section"
            }
        }, t)
    }

    function lt({
        heading: e,
        headingProps: t = {},
        action: o,
        ...r
    }) {
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container,
            group: "Card",
            groupType: "Banner",
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, e && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
                level: 2
            }, t), e)), o && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, o))
        }, r)
    }

    function nt(e) {
        const {
            size: t,
            xs: a = t,
            sm: o = a,
            md: r = o,
            lg: l = r,
            spacing: n,
            spacingXs: i = n,
            spacingSm: s = i,
            spacingMd: c = s,
            spacingLg: g = c,
            tag: p,
            children: u,
            wrap: d,
            equal: h,
            bottom: b,
            gutter: m,
            column: y,
            reverse: f,
            inset: w
        } = e, {
            Grid: C,
            Grid: {
                Cell: E
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component, T = {
            display: "flex",
            boxSizing: "border-box",
            flexDirection: y ? "column" : "row",
            flexWrap: d ? "wrap" : "nowrap"
        };
        f && (T.flexDirection += "-reverse"), C.applySizingStyles(T, e, this);
        const P = {
                gutter: m,
                bottom: b,
                equal: h,
                column: y,
                spacing: n,
                spacingXs: i,
                spacingSm: s,
                spacingMd: c,
                spacingLg: g,
                gridXs: a,
                gridSm: o,
                gridMd: r,
                gridLg: l
            },
            R = w ? { ...P,
                inset: w
            } : P,
            v = (global.React || guac.react).Children.toArray(u).filter((e => {
                const t = typeof e;
                return "object" === t ? (global.React || guac.react).isValidElement(e) : "string" !== t || !!e
            })).map(((e, t) => {
                const a = e && e.type;
                let o;
                if (a && a.prototype) {
                    if (a === E || a.prototype instanceof E) return (global.React || guac.react).cloneElement(e, R);
                    (a === C || a.prototype instanceof C) && (o = { ...e && e.props && e.props.style,
                        margin: 0
                    })
                }
                return (global.React || guac.react).createElement(E, {
                    key: t,
                    ...R,
                    style: o
                }, e)
            }));
        return v.length ? this.merge({
            tag: p,
            style: T,
            children: v
        }, (global._ || guac.lodash).omit(e, Object.keys(C.propTypes))) : null
    }

    function it(e) {
        const {
            tag: t,
            children: a,
            first: o,
            last: r,
            equal: l,
            column: n,
            inset: i
        } = e, {
            Grid: s
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component, c = {
            boxSizing: "border-box",
            flexGrow: "1",
            flexShrink: "1",
            flexBasis: n ? "auto" : "0%",
            maxWidth: "100%"
        };
        l && (c.display = "flex", c.flexWrap = "wrap"), o ? c.order = -1 : r && (c.order = 1);
        const g = i ? { ...e,
            gridSm: 12,
            sm: 10,
            pushSm: 1,
            md: 8,
            pushMd: 2
        } : e;
        return s.Cell.applySizingStyles(c, e, this), s.Cell.applyPushPullStyles(c, g), s.Cell.applySizeStyles(c, g), this.merge({
            tag: t,
            style: c,
            children: l ? (global.React || guac.react).Children.map(a, (e => (global.React || guac.react).cloneElement(e, {
                style: { ...e.props && e.props.style,
                    flexGrow: "1",
                    flexShrink: "1",
                    flexBasis: "100%"
                }
            }))) : a
        }, (global._ || guac.lodash).omit(e, Object.keys(s.Cell.propTypes)))
    }

    function st({
        heading: e,
        subheading: t,
        media: a,
        ...o
    }) {
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            children: [a && a.url && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                key: "background",
                backgroundImage: a.url
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.HeadingPair, {
                key: "heading",
                heading: e,
                subheading: t
            })],
            style: {
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                ...We("medium")
            }
        }, o)
    }
    const ct = "category",
        gt = "accent",
        pt = "neutral",
        ut = "primary",
        dt = "none",
        ht = "light_dark";
    var bt = {
        __proto__: null,
        CATEGORY: ct,
        ACCENT: gt,
        NEUTRAL: pt,
        PRIMARY: ut,
        NONE: dt,
        LIGHT_DARK: ht
    };
    const {
        widgetTypes: mt,
        colorPackCategories: yt,
        themeConstants: ft,
        buttons: wt
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Ct = (global.keyMirror || guac.keymirror)({
        NONE: null,
        SMALL_UNDERLINE: null,
        FULL_UNDERLINE: null,
        INLINE: null
    }), Et = 24, Tt = ft.DEFAULT_OVERLAY_TEXT_SHADOW, Pt = 28, Rt = 40, vt = {
        about4: Et,
        introduction5: Et,
        content5: Et,
        ordering1: Et,
        payment2: Et,
        zillow1: Et,
        reviews1: Et,
        rss1: Et,
        subscribe3: Et,
        mlsSearch1: Et,
        contact10: Et
    }, xt = "24px", St = {
        spotlight: {
            fill: wt.fills.SOLID
        },
        external: {
            fill: wt.fills.NONE,
            decoration: wt.decorations.NONE,
            shadow: wt.shadows.NONE
        }
    };

    function kt({
        children: e,
        style: t,
        backgroundImage: a = "",
        backgroundPosition: o,
        backgroundSize: r,
        backgroundImage2: l,
        backgroundSize2: n,
        mobileImage: i,
        mobileSize: c = "cover",
        imageData: g = {},
        ...p
    }) {
        const {
            _instance: u
        } = this.base, d = this.base.state || {}, {
            id: m,
            responsiveImage: y,
            backgroundImage: f,
            isResponsive: w,
            layers: C = [],
            widgetType: E,
            widgetPreset: T
        } = d, P = {
            backgroundPosition: o || "center",
            backgroundSize: r || "cover",
            backgroundBlendMode: "normal",
            backgroundRepeat: "no-repeat",
            textShadow: "none",
            ...t,
            transition: (t && t.transition ? t.transition + ", " : "") + "opacity 0.25s, background-size 0.25s, background-position 0.25s",
            ...d.backgroundBlendMode && {
                backgroundBlendMode: d.backgroundBlendMode
            },
            ...d.backgroundSize && {
                backgroundSize: d.backgroundSize
            },
            ...d.backgroundPosition && {
                backgroundPosition: d.backgroundPosition
            }
        };
        let R, v;
        a && !u && (R = {
            "data-guac-image": "loading"
        });
        const x = p.overlay || this.constructor.getDefaultImageOverlayType(E, T);
        if (x !== dt) {
            const {
                category: e
            } = this.base;
            let t = "accentOverlay";
            if (x === ct) t = "sectionOverlay";
            else if (x === ut) t = "primaryOverlay";
            else if (x === pt) t = "neutralOverlay";
            else if (x === gt) t = "accentOverlay";
            else if (x === ht)
                if ("primary" === e) {
                    t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.getTheme(this.base.context, {
                        category: "primary",
                        section: "default"
                    }).mapPropValue("backgroundColor", "section").isLight() ? "neutralOverlay" : "accentOverlay"
                } else t = "sectionOverlay";
            t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.getTheme(this.base.context, {
                category: e,
                section: "overlay"
            }).mapPropValue("backgroundColor", t), void 0 !== p.overlayAlpha ? t.alpha = p.overlayAlpha : void 0 !== g.overlayAlpha ? t.alpha = g.overlayAlpha : t.alpha = this.constructor.getDefaultImageOverlayOpacity(E, T), C.push && C.push(`linear-gradient(to bottom, ${t} 0%, ${t} 100%)`)
        }
        if (f) {
            if ("HEADER" !== E && (P.textShadow = Tt), w) {
                const e = y || (global.Core || guac["@wsb/guac-widget-core"]).utils.Image.getUrl(h(f, {
                    qt: "q:1"
                }), {
                    x: 50,
                    y: 50
                });
                P.backgroundImage = `url("${b(e.replace(/"/g,'\\"'))}")`;
                const t = C.length > 0 ? {
                    useTreatmentData: !0,
                    backgroundLayers: C
                } : {};
                let a = "";
                ("BACKGROUND_IMAGE_RENDERED" === p["data-aid"] || "BACKGROUND_IMAGE2_RENDERED" === p["data-aid"]) && (a = s + ";", t.shouldMarkVisuallyComplete = !0);
                const o = [`${a}new guacImage("${f}"`, `document.getElementById('${m}')`, JSON.stringify(t) + ")"].join(",");
                v = (global.React || guac.react).createElement("script", {
                    key: m,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })
            } else a && (a = b(a), P.backgroundImage = `url("${a.replace(/"/g,'\\"')}")`);
            if (C.length > 0) {
                const e = `url("${null==g?void 0:g.image}")`;
                P.backgroundImage = [].concat(C, [P.backgroundImage || e || ""]).filter(Boolean).join(", ")
            }
            if (l && (P.backgroundImage = `${P.backgroundImage}, url("${l.replace(/"/g,'\\"')}")`, n && (P.backgroundSize = `${P.backgroundSize}, ${n}`)), C.length && (P.backgroundSize = `${"auto, ".repeat(C.length)}${P.backgroundSize}`), i) {
                const e = {
                    backgroundImage: (C.length ? `${C.join(", ")}, url("${i.replace(/"/g,'\\"')}")` : `url("${i.replace(/"/g,'\\"')}")`) + " !important",
                    backgroundSize: c
                };
                P["@xs-only"] = { ...e,
                    ...P["@xs-only"]
                }, P["@sm-only"] = { ...e,
                    ...P["@sm-only"]
                }
            }
        }
        return this.merge({
            id: m,
            style: P,
            tag: "div",
            role: "img",
            children: [e, v],
            ...R
        }, (global._ || guac.lodash).omit(p, "title"))
    }

    function It(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function Lt(e, t, a) {
        return e(a = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && a.path)
            }
        }, a.exports), a.exports
    }
    var Mt = Lt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.XL_MIN = t.LG_MAX = t.LG_MIN = t.MD_MAX = t.MD_MIN = t.SM_MAX = t.SM_MIN = t.XS_MAX = void 0;
        t.XS_MAX = 767;
        t.SM_MIN = 768;
        t.SM_MAX = 1023;
        t.MD_MIN = 1024;
        t.MD_MAX = 1279;
        t.LG_MIN = 1280;
        t.LG_MAX = 1535;
        t.XL_MIN = 1536;
        var a = {
            XS_MAX: 767,
            SM_MIN: 768,
            SM_MAX: 1023,
            MD_MIN: 1024,
            MD_MAX: 1279,
            LG_MIN: 1280,
            LG_MAX: 1535,
            XL_MIN: 1536
        };
        t.default = a
    }));

    function At({
        xsSrc: e,
        smSrc: t = e,
        mdSrc: a = t,
        lgSrc: o = a,
        xlSrc: r = o,
        imgSrc: l = a || o || r,
        imgAlt: n = "",
        ...i
    }) {
        const {
            dataAid: s,
            style: c = {}
        } = i;
        return this.merge({
            tag: "picture",
            "data-aid": s,
            style: c,
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, e && (global.React || guac.react).createElement("source", {
                srcSet: e,
                media: `(max-width: ${Mt.XS_MAX}px)`
            }), t && (global.React || guac.react).createElement("source", {
                srcSet: t,
                media: `(min-width: ${Mt.SM_MIN}px) and (max-width: ${Mt.SM_MAX}px)`
            }), a && (global.React || guac.react).createElement("source", {
                srcSet: a,
                media: `(min-width: ${Mt.MD_MIN}px) and (max-width: ${Mt.MD_MAX}px)`
            }), o && (global.React || guac.react).createElement("source", {
                srcSet: o,
                media: `(min-width: ${Mt.LG_MIN}px) and (max-width: ${Mt.LG_MAX}px)`
            }), r && (global.React || guac.react).createElement("source", {
                srcSet: r,
                media: `(min-width: ${Mt.XL_MIN}px)`
            }), l && (global.React || guac.react).createElement("img", {
                src: l,
                alt: n
            }))
        }, i)
    }

    function _t({
        backgroundImage: e,
        imageTreatments: t,
        backgroundInfo: a,
        ...o
    }) {
        const {
            treatmentLayout: r,
            overlayAlpha: l = 20
        } = a;
        let n, i;
        const s = (t[r] || "").split("-");
        if ("Fit" === r || "Fill" === r) n = {
            backgroundImage: `url("${e.replace(/"/g,'\\"')}")`,
            backgroundSize: "Fill" === r ? "cover" : "contain",
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative"
        }, s.length > 1 && "overlay" === s[1] && (i = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "section",
                opacity: l / 100
            },
            section: "default",
            category: "category" === s[0] ? o.category : s[0]
        }));
        else {
            const t = {
                maxWidth: "60%",
                maxHeight: "60%"
            };
            i = (global.React || guac.react).createElement("img", {
                src: e,
                style: t,
                alt: ""
            }), n = {
                backgroundColor: "section",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }, "Blur" === r && (n.backgroundImage = `url("${e.replace(/"/g,'\\"')}/fx-bl=s:90")`, n.backgroundSize = "cover", n.backgroundPosition = "center")
        }
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: n,
            children: i
        }, o)
    }
    const Ot = {
        "@sm": {
            maxWidth: "smContainer"
        },
        "@md": {
            maxWidth: "mdContainer"
        },
        "@lg": {
            maxWidth: "lgContainer"
        }
    };

    function Bt({
        fixedWidth: e,
        children: t,
        innerContainerStyle: a,
        ...o
    }) {
        const r = {
            backgroundColor: "section",
            width: "100%",
            "> div": {
                position: "relative",
                overflow: "hidden",
                margin: "auto",
                ...e ? Ot : {}
            }
        };
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            category: "neutral",
            section: "default",
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                className: "page-inner",
                style: a
            }, t),
            style: r
        }, o)
    }
    const {
        renderModes: Dt,
        widgetTypes: {
            HEADER: Ht,
            FOOTER: Nt
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Ut = ["theme", "category", "section", "style", "className", "groupType"];

    function zt({
        children: e,
        ...t
    }) {
        const {
            widgetType: a
        } = this.base, o = a === Ht ? "main" : a === Nt ? "contentinfo" : "region", r = "HEADER" === this.base.widgetType && !t.tagline && t.isHomepage ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            style: {
                display: "none"
            },
            "data-route": "tagline"
        }) : null, l = this.base.renderMode === Dt.EDIT ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            "data-field-id": "widgetSibling"
        }) : null;
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Widget,
            children: (global.React || guac.react).createElement("div", null, l, " ", e, " ", r),
            group: "Widget",
            role: o,
            style: {
                backgroundColor: "section"
            }
        }, (global._ || guac.lodash).pickBy(t, ((e, t) => -1 !== Ut.indexOf(t) || 0 === t.indexOf("data-"))))
    }

    function Xt(e) {
        return this.Widget(this.merge({
            groupType: "Banner"
        }, e))
    }

    function Wt(e) {
        return this.Widget(this.merge({
            groupType: "Split"
        }, e))
    }
    const {
        Link: Vt
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, Ft = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string
    });
    class jt extends(global.React || guac.react).Component {
        render() {
            const {
                image: e,
                widgetPreset: t
            } = this.props, {
                link: o,
                type: r = "image",
                style: l = {},
                imageStyle: n = {},
                height: i,
                width: s,
                enableInlineImageEdit: c,
                ...g
            } = e;
            let p = {
                imageData: {
                    image: e
                },
                style: {
                    height: i,
                    width: s,
                    ...n
                }
            };
            const u = {
                    style: {
                        marginLeft: "auto",
                        marginRight: "auto",
                        ...l
                    }
                },
                d = "image" === r;
            d || (u.style.width = "100%"), c ? p = { ...p,
                ...g
            } : Object.keys(g).forEach((e => {
                ("data-route" === e || e.startsWith("data-field") ? u : p)[e] = g[e]
            }));
            const h = "about1" === t ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image.Thumbnail : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image,
                b = d ? (global.React || guac.react).createElement(h, a({
                    tag: "img"
                }, p)) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, p),
                m = o ? (global.React || guac.react).createElement(Vt, {
                    linkData: o
                }, b) : b;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper.Image, u, m)
        }
    }
    t(jt, "propTypes", {
        image: (global.PropTypes || guac["prop-types"]).shape({
            alt: (global.PropTypes || guac["prop-types"]).string,
            src: (global.PropTypes || guac["prop-types"]).string,
            link: Ft,
            type: (global.PropTypes || guac["prop-types"]).oneOf(["image", "background"]),
            height: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).number, (global.PropTypes || guac["prop-types"]).string]),
            width: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).number, (global.PropTypes || guac["prop-types"]).string]),
            backgroundSize: (global.PropTypes || guac["prop-types"]).oneOf(["contain", "cover"]),
            style: (global.PropTypes || guac["prop-types"]).object,
            imageStyle: (global.PropTypes || guac["prop-types"]).object,
            enableInlineImageEdit: (global.PropTypes || guac["prop-types"]).bool
        }),
        widgetPreset: (global.PropTypes || guac["prop-types"]).string
    });
    const {
        generateBackgroundUrl: Gt,
        getSelectedVideoProps: qt
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils;

    function $t({
        heading: e,
        text: t,
        action: o,
        image: r,
        video: l,
        alignment: n = "center",
        longestHeadingArray: i = [],
        columnCountMap: s,
        ...c
    }) {
        const g = e && (global.React || guac.react).createElement(Ye, {
                style: i.length ? {
                    width: "inherit",
                    top: 0,
                    "@sm": {
                        position: "absolute"
                    }
                } : {},
                key: "heading",
                heading: e
            }),
            p = r && (global.React || guac.react).createElement(jt, {
                key: "image",
                image: r,
                widgetPreset: this.base.widgetPreset
            }),
            u = l && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Video, a({
                containerStyle: {
                    "@sm": {
                        paddingBottom: "50%"
                    }
                }
            }, qt(l), {
                columnCountMap: s
            }));
        o && (global._ || guac.lodash).isPlainObject(t) && (t.style = {
            flexGrow: 0
        });
        const d = t && t.children && (global.React || guac.react).createElement(Je, {
                key: "description",
                text: t
            }),
            h = o && (global.React || guac.react).createElement(Ge, {
                key: "action",
                action: o
            }),
            b = [
                [e, i.length ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    key: "heading",
                    style: {
                        order: g && g.style && g.style.order,
                        width: "100%",
                        position: "relative",
                        "> :nth-child(n)": {
                            marginBottom: 0
                        }
                    }
                }, [g, i]) : g],
                [r, p],
                [l, u],
                [t, d],
                [o, h]
            ].filter((e => e[1])),
            m = (global._ || guac.lodash).sortBy(b, (e => {
                const t = (global._ || guac.lodash).get(e[0], "style.order", 0);
                return (global._ || guac.lodash).isNil(t) ? 0 : t
            })).map((e => e[1]));
        let y = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            f = {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: {
                    left: "flex-start",
                    right: "flex-end"
                }[n] || n,
                textAlign: n,
                justifyContent: "flex-start",
                width: "100%",
                "> *": {
                    maxWidth: "100%"
                },
                ...Xe("medium"),
                "@xs-only": Xe("about3" === this.base.widgetPreset ? "small" : "medium")
            },
            w = {};
        const {
            src: C,
            type: E,
            overlay: T = gt,
            overlayAlpha: P,
            style: R,
            imageData: v,
            ...x
        } = r || {};
        if (E === H) {
            y = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, w = {
                backgroundImage: Gt(v) || C,
                overlay: T || gt,
                groupType: "OverlayCard",
                overlayAlpha: P,
                ...x
            }, (C || v && v.image) && (w.category = "accent", w.section = "overlay"), f = (global._ || guac.lodash).merge(f, {
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                paddingHorizontal: "xlarge",
                paddingVertical: "xxxlarge",
                "@md-only": {
                    paddingHorizontal: "large"
                }
            }, R);
            const e = m.findIndex((e => "image" === e.key));
            !(global._ || guac.lodash).isNil(e) && m.splice(e, 1)
        }
        return this.merge({
            tag: y,
            group: "Content",
            groupType: "Card",
            children: m,
            style: f
        }, w, c)
    }

    function Yt(e, t) {
        return Math.floor(t / e)
    }

    function Kt({
        cards: e = [],
        cellStyle: t = {},
        ...o
    }) {
        const r = 1 === e.length,
            l = 4 === e.length,
            n = function(e = [], t) {
                const a = t => {
                    const a = (global._ || guac.lodash).clone(e);
                    return new Array(Math.ceil(e.length / t)).fill().map((() => a.splice(0, t))).map((e => e.reduce(((e, t) => (t.heading && t.heading.children && t.heading.children.length) > e.length ? t.heading.children : e), "")))
                };
                return {
                    sm: a(2),
                    md: a(t ? 2 : 3)
                }
            }(e, l),
            i = {
                "@md": r ? 1 : l ? 2 : 3,
                "@sm": r ? 1 : 2
            },
            s = e.map(((t, o) => {
                const {
                    style: r = {},
                    id: s,
                    ...c
                } = t, g = {
                    visibility: "hidden",
                    position: "absolute",
                    marginBottom: "medium",
                    width: "inherit",
                    top: 0
                }, p = n.md[Yt(l ? 2 : 3, o)], u = n.sm[Yt(2, o)], d = e.length > 1 && (p || u) ? [(global.React || guac.react).createElement(Ye, {
                    key: "hidden-heading-md",
                    style: { ...g,
                        "@md": {
                            position: "relative"
                        }
                    },
                    heading: p
                }), (global.React || guac.react).createElement(Ye, {
                    key: "hidden-heading-sm",
                    style: { ...g,
                        "@sm-only": {
                            position: "relative"
                        }
                    },
                    heading: u
                })] : [];
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.ContentCard, a({
                    key: s || o,
                    style: {
                        flexGrow: 1,
                        ...r
                    },
                    longestHeadingArray: d,
                    columnCountMap: i
                }, c))
            })),
            c = {
                data: s,
                cellStyle: {
                    display: "flex",
                    ...t
                },
                style: {
                    "@xs-only": Xe("medium")
                }
            };
        return "about1" === this.base.widgetPreset && (c.cellProps = {
            xs: 12,
            sm: 6,
            md: 4,
            ...4 === s.length ? {
                pushMd: .001,
                pullMd: .001
            } : {}
        }, c.style = { ...c.styles,
            justifyContent: s.length <= 4 ? "center" : "flex-start"
        }), this.ContentWrap(this.merge(c, o))
    }

    function Zt({
        contentElement: e,
        mediaElement: t,
        reverse: o,
        bleed: r,
        fluid: l,
        gridProps: n = {},
        ...i
    }) {
        const s = this.parseSizedUnit(this.mapPropValue("spacing", "medium"))[0],
            c = l ? {
                marginHorizontal: `-${s}px`
            } : {},
            g = r ? {
                "@md": {
                    height: "100%",
                    ["margin" + (o ? "Left" : "Right")]: `calc(100% - (50vw - ${s}px))`
                }
            } : {},
            p = [e ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                key: "slot1"
            }, e) : null, t ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                key: "slot2",
                style: {
                    flex: 1,
                    "@md": {
                        flex: 1
                    }
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: { ...c,
                    ...g,
                    position: "relative"
                }
            }, t)) : null].filter(Boolean);
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container,
            fluid: l,
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, a({
                xs: 1,
                md: p.length || 1
            }, n), o ? p.reverse() : p)
        }, i)
    }

    function Qt({
        align: e,
        ...t
    }) {
        return this.HorizontalBox(this.merge({
            alignX: e || "middle",
            style: {
                flexDirection: "column",
                width: "auto",
                height: "100%"
            }
        }, t))
    }

    function Jt({
        align: e,
        ...t
    }) {
        return this.Box(this.merge({
            alignX: e || "left",
            style: {
                height: "auto",
                width: "100%"
            }
        }, t))
    }

    function ea({
        alignX: e,
        alignY: t,
        ...a
    }) {
        const o = {
            top: "flex-start",
            left: "flex-start",
            start: "flex-start",
            middle: "center",
            center: "center",
            bottom: "flex-end",
            right: "flex-end",
            end: "flex-end"
        };
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: {
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: o[e] || "normal",
                alignItems: o[t] || "stretch"
            }
        }, a)
    }

    function ta({
        children: e,
        onClose: t,
        closeOnClickOutside: a,
        preventShrink: o,
        width: r,
        style: l,
        ...n
    }) {
        const i = (global._ || guac.lodash).merge({
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                border: "0",
                position: "fixed",
                zIndex: "1002",
                overflowY: "auto",
                backgroundColor: "accentOverlay"
            }, l),
            s = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Modal.Body, {
                children: e,
                onClose: t,
                preventShrink: o,
                width: r
            });
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            category: "neutral",
            style: i,
            children: s,
            onClick: a ? t : null
        }, n)
    }
    const aa = ({
        onClose: e,
        style: t
    }) => {
        const a = (global._ || guac.lodash).merge({
            icon: {
                color: "highContrast",
                cursor: "pointer"
            },
            container: {
                display: "flex",
                justifyContent: "flex-end",
                paddingHorizontal: "small",
                paddingTop: "small",
                paddingBottom: "xsmall"
            }
        }, t);
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: a.container
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            icon: "close",
            size: "medium",
            style: a.icon,
            onClick: e
        }))
    };
    aa.propTypes = {
        onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
        style: (global.PropTypes || guac["prop-types"]).object
    };
    const oa = ({
        children: e,
        style: t
    }) => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
        children: e,
        style: {
            alignSelf: "center",
            maxWidth: "100%",
            height: "100%",
            overflowY: "auto",
            paddingHorizontal: "small",
            "@sm": {
                overflowY: "visible",
                paddingHorizontal: "small"
            },
            ...t
        }
    });

    function ra({
        onClose: e,
        children: t,
        preventShrink: a,
        width: o,
        styles: r = {},
        ...l
    }) {
        const n = {
                "@sm": {
                    position: "relative",
                    width: "auto",
                    transform: "translate(0,0)",
                    maxWidth: o ? o + "px" : "600px",
                    marginVertical: "medium",
                    marginHorizontal: "auto",
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "none",
                    ":before": {
                        display: "block",
                        height: "90vh",
                        content: '""'
                    }
                }
            },
            i = {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "neutral",
                boxShadow: "0 4px 12px 0 rgba(117,117,117,0.4)",
                paddingBottom: "small",
                "@sm": {
                    width: "100%",
                    pointerEvents: "auto",
                    borderRadius: "large"
                }
            },
            s = (global._ || guac.lodash).merge({
                bodyWrapper: { ...n,
                    "@xs-only": a ? { ...n
                    } : {
                        position: "fixed",
                        left: "0",
                        right: "0",
                        top: "0",
                        bottom: "0",
                        marginVertical: "0",
                        marginHorizontal: "0"
                    }
                },
                body: { ...i,
                    "@xs-only": a ? { ...i
                    } : {
                        position: "fixed",
                        left: "0",
                        right: "0",
                        top: "0",
                        bottom: "0",
                        borderRadius: "0"
                    }
                }
            }, r),
            c = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: s.body,
                onClick: e => {
                    e.stopPropagation()
                }
            }, (global.React || guac.react).createElement(aa, {
                onClose: e,
                style: r.closeIcon
            }), (global.React || guac.react).createElement(oa, {
                children: t,
                style: r.content
            }));
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            role: "dialog",
            children: c,
            style: s.bodyWrapper
        }, l)
    }
    oa.propTypes = {
        children: (global.PropTypes || guac["prop-types"]).node.isRequired,
        style: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        NEUTRAL: la
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.categoryTypes, {
        EDIT: na
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes, {
        SIDELINE_SIDEBAR_ZINDEX: ia
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.themeConstants;

    function sa({
        children: e,
        onClose: t,
        closeOnClickOutside: a,
        preventShrink: o,
        width: r,
        styles: l = {},
        ...n
    }) {
        const {
            renderMode: i
        } = this.base, s = {
            modal: {
                position: i === na ? "absolute" : "fixed",
                display: "flex",
                justifyContent: "center",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                border: "0",
                zIndex: ia + 1,
                overflowY: "auto",
                backgroundColor: "modalOverlay"
            },
            bodyWrapper: {
                "@sm": {
                    position: "absolute",
                    width: "100%",
                    transform: "none",
                    justifyContent: "center"
                }
            },
            body: {
                position: "fixed",
                padding: "xlarge",
                height: "max-content",
                "@xs-only": {
                    width: "auto",
                    margin: "small",
                    borderRadius: "large"
                },
                "@sm": {
                    maxWidth: "80%"
                },
                "@md": {
                    maxWidth: "50%"
                }
            },
            closeIcon: {
                position: "absolute",
                paddingRight: "medium",
                right: 0,
                top: "20px",
                paddingTop: 0,
                paddingBottom: 0,
                "@sm": {
                    paddingRight: "large"
                }
            },
            content: {
                alignSelf: "center",
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                overflowY: "hidden",
                paddingHorizontal: "medium",
                "> *:not(:last-child)": {
                    marginBottom: "large"
                },
                "@sm": {
                    overflowY: "hidden",
                    paddingHorizontal: "large"
                }
            }
        }, c = (global._ || guac.lodash).merge(s, l), g = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Modal.Body, {
            children: e,
            onClose: t,
            preventShrink: o,
            width: r,
            styles: c
        });
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            category: la,
            style: c.modal,
            children: g,
            onClick: a ? t : null
        }, n)
    }
    const {
        POPUP: ca
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.widgetTypes;

    function ga(e) {
        const {
            widgetType: t
        } = this.base, a = { ...t === ca && {
                position: "absolute"
            },
            padding: "0",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            border: "0",
            borderRadius: "0",
            zIndex: "1002",
            width: "100%",
            height: "100%",
            opacity: "0.75",
            backgroundColor: "accentOverlay"
        };
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: a
        }, e)
    }

    function pa({
        assetProps: e,
        product: t,
        determineStyles: o,
        dataAids: r = {},
        imageCropMethod: l,
        translate: n,
        children: i,
        productsPerRow: s,
        ...c
    }) {
        const {
            renderMode: g
        } = c, p = Number(s) && o ? o.bind(null, s) : () => !1, u = {
            product: t,
            getStyles: p,
            translate: n
        };
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            group: "Product",
            groupType: "Card",
            children: [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Asset, a({
                key: "asset"
            }, e, {
                dataAids: r,
                imageCropMethod: l
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Name, {
                key: "name",
                product: t,
                getStyles: p
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Prices, a({
                key: "price"
            }, u, {
                renderMode: g,
                dataAids: r
            })), t.variant_count && t.variant_count >= 2 ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Label, {
                key: "options",
                children: `[${n("products.more_options")}]`,
                getStyles: p,
                "data-aid": r.options
            }) : null, t.ship_free && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Label, {
                key: "shipping",
                shipping: !0,
                children: n("products.free_shipping"),
                getStyles: p,
                "data-aid": r.shipFree
            })].concat(i)
        }, c)
    }

    function ua({
        alignment: e = "left",
        heading: t = {},
        text: o = {},
        ...r
    }) {
        const l = t && t.children,
            n = o && o.children;
        if (!l && !n) return null;
        const i = {
                paddingTop: l ? "xsmall" : 0,
                "@md": {
                    paddingTop: l ? "small" : 0
                }
            },
            s = {
                marginBottom: 0,
                "@md": {
                    marginBottom: 0
                }
            },
            c = n ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, {
                key: "intro",
                inset: "center" === e,
                bottom: !1
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, a({
                style: i
            }, o))) : null,
            g = l ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
                key: "heading",
                style: s
            }, t)) : null;
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: {
                marginBottom: l ? "xlarge" : "medium",
                textAlign: e
            },
            children: [g, c]
        }, r)
    }

    function da({
        beforeContent: e,
        button: t = {},
        secondaryButton: o,
        afterContent: r,
        renderMode: l,
        ...n
    }) {
        const i = {
            container: {
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
                border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "!rgba(0,0,0,.7)",
                boxShadow: "0 4px 12px 0 rgba(117,117,117,0.4)",
                borderRadius: "8px",
                "> :first-child": {
                    marginTop: "large"
                },
                "> :last-child": {
                    marginBottom: "large"
                },
                paddingHorizontal: "100px",
                "@xs-only": {
                    paddingHorizontal: "large"
                }
            },
            buttonGroupWrapper: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginVertical: "32px",
                "> button": {
                    marginHorizontal: "8px"
                },
                "@xs-only": {
                    marginVertical: "24px",
                    flexDirection: "column",
                    "> button": {
                        width: "100%",
                        marginHorizontal: "0",
                        marginVertical: "8px"
                    }
                }
            },
            buttonStyle: { ...t.style
            },
            ...o && {
                secondaryButtonStyle: { ...o.style
                }
            }
        };
        let s = null;
        if (l === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT) {
            const l = (global._ || guac.lodash).get(window, "ux.Button", (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button);
            s = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container.Fluid, {
                "data-edit-interactive": !0,
                category: "accent",
                section: "overlay",
                style: i.container
            }, e, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: i.buttonGroupWrapper
            }, (global.React || guac.react).createElement(l, a({
                className: "keep-defaults",
                style: i.buttonStyle
            }, t)), o && (global.React || guac.react).createElement(l, a({
                design: "defaultLightSecondary",
                className: "keep-defaults",
                style: i.secondaryButtonStyle
            }, o))), r)
        }
        return this.merge({
            children: s
        }, {
            style: {
                margin: "0 auto"
            }
        }, n)
    }
    const {
        DEFAULT: ha,
        ALT: ba
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.sectionTypes;

    function ma({
        children: e,
        icon: t,
        onClose: a,
        section: o,
        ...r
    }) {
        const l = {
                container: {
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "small",
                    backgroundColor: "section"
                },
                icon: {
                    flexShrink: 0,
                    marginRight: "xsmall",
                    color: "section"
                },
                text: {
                    alignSelf: "center"
                },
                closeContainer: {
                    flexShrink: 0,
                    paddingLeft: "small",
                    marginLeft: "auto"
                },
                link: {
                    color: "section"
                },
                ...r.style
            },
            n = (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, Boolean(t) && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: t,
                style: l.icon
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                children: e,
                style: l.text
            }), Boolean(a) && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: l.closeContainer
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, {
                onClick: a,
                style: l.link
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "close"
            }))));
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: l.container,
            children: n,
            section: o === ha ? ba : ha
        }, r)
    }

    function ya({
        input: e = {},
        button: t = {},
        error: o,
        errorProps: r = {},
        ...l
    }) {
        const n = {
                wrapper: {
                    display: "flex",
                    flexDirection: "column",
                    "@sm": {
                        flexDirection: "row"
                    }
                },
                errorWrapperDesktop: {
                    "@xs-only": {
                        display: "none"
                    }
                },
                errorWrapperMobile: {
                    "@sm": {
                        display: "none"
                    },
                    marginBottom: "medium"
                },
                inputWrapper: {
                    display: "flex",
                    flexGrow: 1,
                    marginBottom: o ? 0 : "medium",
                    "@sm": {
                        marginVertical: "xxsmall"
                    }
                },
                input: {
                    width: "100%",
                    "@sm": {
                        marginRight: "medium",
                        height: "100%"
                    },
                    ...e.style || {}
                },
                button: {
                    width: "100%",
                    marginHorizontal: 0,
                    "@xs-only": {
                        marginVertical: 0
                    },
                    "@sm": {
                        marginVertical: "xxsmall",
                        maxWidth: "30%"
                    },
                    ...t.style || {}
                },
                error: {
                    position: "static",
                    "@sm": {
                        position: "absolute"
                    },
                    ...r.style || {}
                }
            },
            i = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input.FloatLabel, a({}, e, {
                style: n.input
            })),
            s = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Primary, a({
                tag: "button",
                type: "submit"
            }, t, {
                style: n.button
            })),
            c = o && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Error, a({
                alert: !0
            }, r, {
                style: n.error
            }), o),
            g = (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: n.wrapper
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: n.inputWrapper
            }, " ", i, " "), c && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: n.errorWrapperMobile
            }, " ", c, " "), s), c && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: n.errorWrapperDesktop
            }, " ", c, " "));
        return this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Form,
            children: g
        }, l)
    }
    const fa = "major",
        wa = "medium",
        Ca = {
            mobile: {
                display: "block",
                "@md": {
                    display: "none"
                }
            },
            desktop: {
                display: "none",
                "@md": {
                    display: "block"
                }
            }
        };

    function Ea({
        name: e,
        imageUrl: t,
        cardType: o,
        category: r,
        isImageShown: l,
        overlayAlpha: n,
        priceText: i,
        linkText: s,
        productType: c,
        isPriceShown: g,
        price: p,
        salePrice: u,
        dataAids: d,
        ...h
    }) {
        let b = "neutral",
            m = "neutral";
        "primary" !== r && (b = "primary", m = "primaryOverlay");
        const y = l ? {
            category: "accent"
        } : {
            category: b
        };
        let f = "accent";
        l || (f = "primary" === b ? "primary" : "neutral");
        const w = l ? "transparent" : m;
        let C = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.CommerceOverlay;
        o === fa ? C = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.CommerceOverlay.Major : o === wa && (C = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.CommerceOverlay.Medium);
        const E = {
                name: e,
                linkCategory: f,
                cardType: o,
                isImageShown: l,
                isPriceFeatured: !0,
                priceText: i,
                linkText: s,
                productType: c,
                isPriceShown: g,
                price: p,
                salePrice: u,
                titleProps: {
                    align: o === fa || o === wa ? "center" : "left"
                },
                dataAids: d
            },
            T = (global.React || guac.react).createElement(C, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardPictureContainer, a({
                backgroundColor: w
            }, y), (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, l && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardPicture, {
                assetUrl: t,
                overlayAlpha: n
            }), o !== fa && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.CommerceOverlay.Mobile, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardContent, a({}, E, {
                style: Ca.mobile
            }))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardContent, a({}, E, {
                style: o === fa ? {} : Ca.desktop
            })))));
        return this.merge({
            children: T
        }, h)
    }

    function Ta({
        name: e,
        duration: t,
        price: a,
        imageUrl: o,
        ribbonText: r,
        cardSize: l,
        imageShape: n,
        imageCropMethod: i,
        hasImageBorder: s,
        productType: c,
        isBoxed: g,
        style: p,
        eyebrowText: u,
        footerText: d,
        eventDate: h,
        buttonText: b,
        priceText: m,
        salePrice: y,
        ratings: f,
        dataAids: w,
        dataRoutes: C,
        ...E
    }) {
        const T = g ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Card.Link : (global.React || guac.react).Fragment,
            P = g && {
                style: {
                    flexGrow: 1
                }
            },
            R = {
                cursor: "pointer",
                ...p
            },
            v = g ? {
                display: "flex",
                height: "100%",
                ...R
            } : { ...R
            },
            x = Boolean(o),
            S = {
                name: e,
                duration: t,
                price: a,
                productType: c,
                isBoxed: g,
                hasImage: x,
                eyebrowText: u,
                footerText: d,
                eventDate: h,
                buttonText: b,
                priceText: m,
                salePrice: y,
                dataAids: w,
                dataRoutes: C,
                ratings: f,
                titleProps: {
                    align: !x && g ? "center" : "left"
                },
                isPriceShown: !0
            },
            k = (global.React || guac.react).createElement(T, P, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.CommerceItem, null, x && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardPictureContainer, {
                imageShape: n,
                containerStyles: {
                    marginBottom: "small"
                },
                canHaveBorder: !g,
                hasImageBorder: s
            }, (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardPicture, {
                assetUrl: o,
                imageCropMethod: i,
                dataAids: w
            }), r && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardRibbon, {
                dataAids: w,
                cardSize: l
            }, r))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardContent, S)));
        return this.merge({
            children: k,
            style: v
        }, E)
    }
    const Pa = {
        vertical: "133%",
        square: "100%",
        horizontal: "75%"
    };

    function Ra({
        children: e,
        backgroundColor: t,
        imageShape: a,
        hasImageBorder: o,
        containerStyles: r,
        canHaveBorder: l,
        ...n
    }) {
        const i = {
                position: "relative",
                paddingTop: Pa[a] || Pa.square,
                paddingRight: "100%",
                ...l ? {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: o ? "section" : "transparent"
                } : {},
                ...r,
                ":before": {
                    content: '""',
                    position: "absolute",
                    top: "0px",
                    bottom: "0px",
                    left: "0px",
                    right: "0px",
                    backgroundColor: t
                }
            },
            s = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper, {
                children: e
            });
        return this.Block(this.merge({
            children: s,
            style: i
        }, n))
    }
    const va = {
        eyebrow: {
            marginBottom: "xsmall",
            textTransform: "uppercase"
        },
        priceRow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap"
        },
        eventDate: {
            marginTop: "xxsmall"
        },
        footer: {
            marginTop: "small"
        },
        button: {
            marginTop: "xsmall"
        }
    };

    function xa({
        name: e,
        duration: t,
        eventDate: o,
        price: r,
        salePrice: l,
        priceText: n,
        productType: i,
        eyebrowText: s,
        footerText: c,
        ratings: g,
        cardType: p,
        isBoxed: u,
        dataAids: d = {},
        dataRoutes: h = {},
        buttonText: b,
        isPriceShown: m,
        isImageShown: y,
        linkText: f,
        linkCategory: w,
        isPriceFeatured: C,
        style: E,
        hasImage: T,
        titleProps: P,
        ...R
    }) {
        const v = !T && u ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                marginVertical: "large"
            } : {},
            x = this.merge({
                position: "relative",
                paddingHorizontal: u ? "small" : "0",
                paddingBottom: u && T ? "medium" : "0",
                ...v
            }, E),
            S = m && g ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block : (global.React || guac.react).Fragment,
            k = m && g && {
                style: va.priceRow
            },
            I = (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, s && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                style: va.eyebrow,
                "data-aid": d.eyebrow
            }, s), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardTitle, a({
                title: e,
                isDigitalProduct: "digital" === i,
                dataAids: d
            }, P)), o && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                style: va.eventDate,
                "data-aid": d.eventDate
            }, o), (global.React || guac.react).createElement(S, k, m && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.CommerceCardPriceDisplay, {
                price: r,
                salePrice: l,
                priceText: n,
                duration: t,
                isLinkShown: Boolean(f),
                cardType: p,
                dataAids: d,
                isPriceFeatured: C,
                styles: {
                    marginRight: g ? "xxsmall" : "0"
                }
            }), g && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, g)), c && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                style: va.footer,
                "data-aid": d.footer
            }, c), b && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Spotlight, {
                style: va.button,
                "data-aid": d.button,
                "data-route": h.button
            }, b), f && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.MoreLink, {
                category: w,
                section: y ? "overlay" : "default",
                tag: "span"
            }, f));
        return this.Block(this.merge({
            children: I,
            style: x
        }, R))
    }

    function Sa({
        price: e,
        salePrice: t,
        cardType: o,
        priceText: r,
        duration: l,
        dataAids: n = {},
        isLinkShown: i,
        isPriceFeatured: s,
        styles: c,
        ...g
    }) {
        const p = t && {
                priceState: "expired"
            },
            u = {
                container: {
                    display: "flex",
                    justifyContent: o === fa ? "center" : "flex-start",
                    marginBottom: i ? "xxsmall" : 0,
                    "@sm": {
                        marginBottom: i ? "xsmall" : 0,
                        justifyContent: o === fa || o === wa ? "center" : "flex-start"
                    },
                    ...c
                },
                duration: {
                    display: "inline-block",
                    ":after": {
                        content: '"|"',
                        marginHorizontal: "xsmall"
                    }
                },
                range: {
                    display: "inline-block",
                    marginRight: "xsmall"
                },
                original: {
                    display: "inline-block",
                    fontWeight: s && !t ? "bold" : "normal",
                    ...!s && t ? {
                        color: "neutral"
                    } : {}
                },
                sale: {
                    display: "inline-block",
                    marginLeft: "xsmall",
                    fontWeight: s ? "bold" : "normal"
                }
            },
            d = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                active: !0,
                style: u.container
            }, l && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, {
                children: l,
                featured: !0,
                style: u.duration
            }), r && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, {
                children: r,
                featured: !0,
                style: u.range
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, a({
                key: "original",
                "data-aid": n.price,
                style: u.original
            }, p, {
                children: e
            })), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, {
                key: "sale",
                "data-aid": n.salePrice,
                style: u.sale,
                children: t
            }));
        return this.merge({
            children: d
        }, g)
    }

    function ka({
        title: e,
        isDigitalProduct: t,
        dataAids: o = {},
        ...r
    }) {
        const l = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
            featured: !0,
            "data-aid": o.name
        }, r), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            icon: "digitalProduct"
        }), e);
        return this.merge({
            children: l
        }, r)
    }

    function Ia({
        assetUrl: e,
        overlayAlpha: t,
        imageCropMethod: a,
        dataAids: o = {},
        ...r
    }) {
        if (!e) return null;
        const l = {
                position: "absolute",
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "shrink_to_fit" === a ? "contain" : "cover"
            },
            n = y(e, "/:/rs=w:{width},h:{height},cg:false,m"),
            i = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                backgroundImage: n,
                overlayAlpha: t,
                style: l,
                "data-aid": o.image
            });
        return this.merge({
            children: i
        }, r)
    }

    function La({
        children: e,
        dataAids: t = {},
        cardSize: a,
        ...o
    }) {
        const r = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label, {
            "data-aid": t.ribbon,
            size: a
        }, e);
        return this.merge({
            children: r
        }, o)
    }

    function Ma(e) {
        return this.Group(this.merge(e))
    }

    function Aa(e) {
        return this.merge({
            tag: "main",
            section: "default",
            style: {
                paddingVertical: "large",
                "@md": {
                    paddingVertical: "0",
                    paddingHorizontal: "xlarge"
                }
            }
        }, e)
    }

    function _a(e) {
        return this.LinkArrow(this.merge({
            style: {
                marginBottom: "xlarge"
            }
        }, e))
    }

    function Oa(e) {
        return this.HeadingMiddle(this.merge({
            level: 2,
            style: {
                marginBottom: "xsmall"
            }
        }, e))
    }

    function Ba(e) {
        return this.Details(this.merge({
            level: 5,
            style: {
                marginBottom: "xlarge"
            }
        }, e))
    }

    function Da(e) {
        return this.merge({
            tag: "aside",
            style: {
                height: "100%",
                paddingVertical: "large",
                borderWidth: "0",
                borderStyle: "solid",
                borderColor: "section",
                borderLeftWidth: "0px",
                borderTopWidth: "1px",
                "@md": {
                    paddingVertical: "0",
                    paddingHorizontal: "xlarge",
                    borderLeftWidth: "1px",
                    borderTopWidth: "0px"
                }
            }
        }, e)
    }

    function Ha(e) {
        return this.HeadingMinor(this.merge({
            level: 4,
            style: {
                marginBottom: "xlarge"
            }
        }, e))
    }

    function Na(e) {
        return this.Text(this.merge({
            style: {
                "> *": {
                    marginBottom: "20px !important"
                },
                "> *:last-child": {
                    marginBottom: "0 !important"
                }
            }
        }, e))
    }

    function Ua(e) {
        const t = this.base.groupType || this.base.kind,
            a = e.size || "default",
            o = "Link" === t ? {
                ":hover": {
                    boxShadow: "card"
                }
            } : {};
        return this.Group(this.merge({
            category: "neutral",
            section: "default",
            style: {
                backgroundColor: "section",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "section",
                ...{
                    small: {
                        height: "375px"
                    },
                    default: {},
                    large: {
                        height: "435px"
                    }
                }[a],
                "@md": { ...o
                }
            }
        }, e))
    }

    function za(e) {
        return this.HeadingMinor(this.merge({
            style: {
                lineHeight: "1"
            }
        }, e))
    }

    function Xa(e) {
        return this.Heading(this.merge({
            level: 6
        }, e))
    }

    function Wa(e) {
        return this.HeadingMinor(e)
    }

    function Va(e) {
        const {
            richtext: t
        } = e;
        let a = {};
        if (t) {
            const e = {
                textAlign: "left",
                display: "block",
                paddingLeft: "1.3em",
                marginHorizontal: "large",
                marginVertical: "auto"
            };
            a = {
                "> p > ol": e,
                "> p > ul": e,
                "> ul": e,
                "> ol": e
            }
        }
        return this.Text(this.merge({
            style: a
        }, e))
    }

    function Fa(e) {
        return this.ContentBasic(this.merge({
            style: { ...Xe("small")
            }
        }, e))
    }

    function ja(e) {
        return this.HeadingMiddle(e)
    }

    function Ga(e) {
        return this.TextMajor(this.merge({
            featured: "overlay" === this.base.section,
            style: {
                lineHeight: this.mapPropValue("lineHeightLevel", 4)
            }
        }, e))
    }

    function qa(e) {
        return e
    }

    function $a(e) {
        return this.LinkContent(this.merge({
            style: {
                color: "inherit",
                ":hover": {
                    color: "inherit"
                }
            }
        }, e))
    }

    function Ya(e) {
        return this.merge({
            tag: "div"
        }, e)
    }

    function Ka(e) {
        return this.Tagline(e)
    }

    function Za(e) {
        return this.Heading(this.merge({
            typography: "LogoAlpha",
            style: {
                lineHeight: "1.2",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%"
            }
        }, e))
    }

    function Qa(e) {
        return this.Background(this.merge({
            section: "alt",
            style: {
                backgroundColor: "section",
                flexShrink: "0",
                height: "100px",
                width: "100px"
            }
        }, e))
    }

    function Ja(e) {
        return this.HeadingMinor(e)
    }

    function eo(e) {
        return this.Heading(this.merge({
            level: "5"
        }, e))
    }
    const {
        NONE: to,
        INLINE: ao,
        SMALL_UNDERLINE: oo,
        FULL_UNDERLINE: ro
    } = Ct;

    function lo(e) {
        return this.Group(this.merge({
            tag: "section",
            style: {
                backgroundColor: "section",
                paddingVertical: "xxlarge",
                "@xs-only": {
                    paddingVertical: "xlarge"
                }
            }
        }, e))
    }

    function no(e, t, a) {
        const o = {
                fontSize: "unset",
                color: "inherit",
                fontFamily: "unset",
                textTransform: "unset",
                letterSpacing: "unset"
            },
            r = {
                content: '""',
                height: "1px",
                marginTop: "-1px",
                background: "currentColor",
                position: "absolute",
                top: ".75em",
                width: "100vw",
                display: "block"
            },
            l = { ...o,
                display: "inline-block",
                position: "relative",
                maxWidth: "80%",
                ":before": {
                    right: "100%",
                    marginRight: "medium",
                    ...r
                },
                ":after": {
                    left: "100%",
                    marginLeft: "medium",
                    ...r
                }
            };
        if (t === ao) return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            style: l,
            richtext: a
        }, e);
        if (t === oo) {
            const r = {
                    width: "100%",
                    lineHeight: "0px"
                },
                l = {
                    display: "inline-block"
                };
            return [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Base, {
                key: "child",
                richtext: a,
                style: o
            }, e), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                key: "hr",
                style: r
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, {
                group: "SectionHeading",
                sectionHeadingHR: t,
                style: l
            }))]
        }
        if (t === ro) {
            const r = {
                marginBottom: "0"
            };
            return [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Base, {
                key: "child",
                richtext: a,
                style: o
            }, e), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, {
                key: "hr",
                group: "SectionHeading",
                sectionHeadingHR: t,
                style: r
            })]
        }
        return "string" == typeof e ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Base, {
            key: "child",
            richtext: a,
            nakedElement: !0,
            style: o
        }, e) : e
    }

    function io({
        children: e,
        sectionHeadingHR: t = to,
        richtext: a,
        ...o
    }) {
        return this.Heading(this.merge({
            level: 2,
            typography: "HeadingBeta",
            children: no(e, t, a),
            style: {
                lineHeight: "1.4",
                overflow: "hidden",
                marginTop: 0,
                marginBottom: "xlarge"
            }
        }, o))
    }

    function so({
        sectionHeadingHR: e,
        ...t
    }) {
        const a = {
            [to]: {
                display: "none"
            },
            [oo]: {
                borderBottomWidth: "small",
                marginTop: "medium",
                marginBottom: "0",
                width: "50px"
            },
            [ro]: {
                borderColor: "lowContrast",
                borderBottomWidth: "xsmall",
                marginTop: "small",
                marginBottom: "large",
                width: "100%"
            }
        };
        return this.HR(this.merge({
            style: a[e] || {}
        }, t))
    }

    function co(e) {
        return this.Heading(this.merge({
            level: 4,
            style: {
                color: "highContrast",
                textAlign: "center",
                lineHeight: "1.5",
                maxWidth: "90%",
                marginBottom: "xlarge",
                marginHorizontal: "auto",
                "@md": {
                    maxWidth: "80%"
                }
            }
        }, e))
    }

    function go(e) {
        return this.Section(this.merge({
            style: {
                backgroundColor: "transparent"
            }
        }, e))
    }

    function po(e) {
        return this.HeadingMajor(this.merge({
            style: {
                textAlign: "center",
                marginBottom: e.reducedMargin ? "large" : "xxlarge"
            }
        }, e))
    }

    function uo(e) {
        return this.Section(this.merge({}, e))
    }

    function ho(e) {
        const t = e.alignmentOption ? e.alignmentOption : "left";
        return this.SectionHeading(this.merge({
            style: {
                textAlign: t,
                "@md": {
                    textAlign: t
                },
                "@xs": {
                    textAlign: "center"
                }
            }
        }, e))
    }

    function bo(e) {
        return this.merge({
            tag: "form",
            "aria-live": "polite",
            style: {
                marginBottom: "0"
            }
        }, e)
    }

    function mo(e) {
        return this.Form(this.merge({
            style: {
                width: "100%",
                "@md": {
                    margin: "0",
                    position: "relative"
                }
            }
        }, e))
    }

    function yo(e) {
        return this.Error(this.merge({
            style: {
                marginTop: "xxsmall"
            }
        }, e))
    }

    function fo({
        hasNav: e,
        pipe: t,
        ...a
    }) {
        return this.merge({
            style: {
                display: "flex",
                alignItems: "center",
                lineHeight: "0",
                "@md": {
                    "> :first-child": {
                        marginLeft: e ? "medium" : t ? "small" : 0
                    }
                }
            }
        }, a)
    }

    function wo(e) {
        return this.merge({
            style: {
                "> div": {
                    paddingVertical: 0
                }
            }
        }, e)
    }

    function Co(e) {
        return this.merge({
            style: {
                position: "relative"
            }
        }, e)
    }
    const {
        Z_INDEX_NAV_DRAWER: Eo
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.layers;

    function To({
        category: e = "accent",
        left: t = !0,
        ...a
    }) {
        const o = {
            left: t ? 0 : "unset",
            right: t ? "unset" : 0
        };
        return this.merge({
            category: e,
            section: "default",
            style: {
                backgroundColor: "sectionOverlay",
                position: "fixed",
                top: 0,
                width: "100%",
                height: "100%",
                maxWidth: 0,
                overflowY: "auto",
                zIndex: Eo,
                paddingTop: "xxlarge",
                WebkitOverflowScrolling: "touch",
                transition: "max-width .3s ease-in-out",
                ...o
            },
            role: "navigation"
        }, a)
    }

    function Po(e) {
        return this.List(this.merge({
            role: "menu"
        }, e))
    }

    function Ro(e) {
        return this.ListItem(this.merge({
            style: {
                display: "block",
                marginBottom: "0",
                borderColor: "uLowContrastOverlay",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                ":last-child": {
                    borderBottom: "none"
                }
            },
            role: "menuitem"
        }, e))
    }

    function vo(e) {
        return this.Link(this.merge({
            typography: "NavBeta",
            style: {
                paddingVertical: "small",
                paddingHorizontal: "medium",
                display: "flex",
                alignItems: "center",
                minWidth: 200,
                justifyContent: "space-between",
                "@md": {
                    minWidth: 300
                }
            }
        }, e))
    }

    function xo(e) {
        return this.NavigationDrawerLink(this.merge({
            active: !0
        }, e))
    }

    function So(e) {
        return this.NavigationDrawerLink(this.merge({
            typography: "SubNavBeta",
            style: {
                display: "block",
                paddingVertical: "xsmall",
                paddingLeft: "xlarge",
                paddingRight: "medium"
            }
        }, e))
    }

    function ko(e) {
        return this.NavigationDrawerSubLink(this.merge({
            active: !0
        }, e))
    }

    function Io(e) {
        return this.Input(this.merge({
            style: {
                backgroundColor: "searchMobileDark",
                borderWidth: "none",
                borderRadius: "none",
                paddingVertical: "small",
                paddingHorizontal: "xlarge"
            },
            role: "searchbox"
        }, e))
    }

    function Lo(e) {
        return this.merge({
            tag: "div",
            style: {
                display: "flex",
                flexGrow: 1,
                flexShrink: 0,
                maxWidth: "100%",
                position: "relative",
                "@md": {
                    flexBasis: "50%",
                    maxWidth: "50%",
                    justifyContent: "center",
                    "> *": {
                        maxWidth: "70%"
                    }
                },
                ":only-child": {
                    "@md": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                        "> *": {
                            maxWidth: "100%"
                        }
                    }
                }
            }
        }, e)
    }

    function Mo(e) {
        return this.SplitItem(this.merge({
            style: {
                minHeight: "inherit",
                "> *": {
                    flexGrow: 1
                },
                "@xs-only": {
                    order: -1
                },
                "@sm-only": {
                    order: -1
                },
                "@md": {
                    "> *": {
                        maxWidth: "100%",
                        width: "100%"
                    }
                }
            }
        }, e))
    }

    function Ao(e) {
        return this.ContentText(this.merge({
            style: {
                width: "100%"
            }
        }, e))
    }

    function _o(e) {
        const t = "about1" === this.base.widgetPreset ? {
            textAlign: "center",
            alignSelf: "center"
        } : {};
        return this.ContentHeading(this.merge({
            style: t
        }, e))
    }

    function Oo(e) {
        const t = "about1" === this.base.widgetPreset ? {
            alignSelf: "center"
        } : {};
        return this.Button(this.merge({
            style: t
        }, e))
    }

    function Bo(e) {
        return this.Wrapper(this.merge({
            style: {
                marginHorizontal: "auto",
                textAlign: "center"
            }
        }, e))
    }

    function Do(e) {
        return this.ImageThumbnail(e)
    }

    function Ho(e) {
        return this.ContentBigText(e)
    }

    function No(e) {
        return this.ContentBigHeading(e)
    }

    function Uo(e) {
        return this.ContentCardButton(this.merge({
            style: {
                marginBottom: "0px !important"
            }
        }, e))
    }

    function zo(e) {
        return this.merge({
            tag: "div"
        }, e)
    }

    function Xo(e) {
        return this.Map(e)
    }

    function Wo(e) {
        return e
    }

    function Vo(e) {
        return this.merge({
            tag: "nav"
        }, e)
    }

    function Fo(e) {
        return this.Link(this.merge({
            typography: "NavAlpha",
            style: {
                display: "block"
            }
        }, e))
    }

    function jo(e) {
        return this.NavLink(this.merge({
            active: !0
        }, e))
    }

    function Go(e) {
        return this.Link(this.merge({
            style: {
                display: "inline-block",
                paddingVertical: "xxsmall"
            },
            typography: "SubNavAlpha"
        }, e))
    }

    function qo(e) {
        return this.NavMenuLink(this.merge({
            active: !0
        }, e))
    }
    const $o = {
        marginVertical: "xsmall",
        lineHeight: 1.5,
        display: "inline-block"
    };

    function Yo(e) {
        return this.NavLink(this.merge({
            style: $o
        }, e))
    }

    function Ko(e) {
        return this.NavLinkActive(this.merge({
            style: $o
        }, e))
    }

    function Zo(e) {
        return this.NavMenuLink(e)
    }

    function Qo(e) {
        return this.NavMenuLinkActive(e)
    }

    function Jo(e) {
        return this.NavLink(e)
    }

    function er(e) {
        return this.MobileNavLink(e)
    }

    function tr(e) {
        return this.Nav(this.merge({
            style: {
                "@xs-only": {
                    display: "flex",
                    flexDirection: "column"
                }
            }
        }, e))
    }

    function ar(e) {
        return this.Link(this.merge({
            typography: "NavAlpha",
            style: {
                paddingVertical: "xsmall",
                paddingHorizontal: "xsmall",
                "@xs-only": {
                    paddingVertical: "xxsmall"
                }
            }
        }, e))
    }

    function or(e) {
        return this.NavFooterLink(e)
    }

    function rr(e) {
        return this.Heading(this.merge({
            typography: "HeadingDelta",
            style: {
                marginBottom: "medium"
            }
        }, e))
    }

    function lr(e) {
        return this.List(this.merge({
            style: {
                ul: {
                    marginTop: "medium",
                    marginLeft: "small"
                }
            }
        }, e))
    }

    function nr(e) {
        return this.ListItem(this.merge({
            style: {
                listStyle: "none"
            }
        }, e))
    }

    function ir(e) {
        return this.Link(this.merge({
            typography: "NavGamma",
            style: {
                display: "block"
            }
        }, e))
    }

    function sr(e) {
        return this.NavVerticalLink(this.merge({
            active: !0
        }, e))
    }

    function cr(e) {
        return this.List(this.merge({
            style: {
                textAlign: "center"
            }
        }, e))
    }

    function gr(e) {
        return this.ListItemInline(e)
    }

    function pr(e) {
        return this.Link(this.merge({
            typography: "NavGamma"
        }, e))
    }

    function ur(e) {
        return this.NavHorizontalLink(this.merge({
            active: !0
        }, e))
    }

    function dr(e) {
        return this.List(this.merge({
            style: {
                marginLeft: "medium"
            }
        }, e))
    }

    function hr(e) {
        return this.NavLink(this.merge({
            style: {
                display: "flex",
                alignItems: "center"
            }
        }, e))
    }

    function br(e) {
        return this.NavLinkActive(this.merge({
            style: {
                display: "flex",
                alignItems: "center"
            }
        }, e))
    }

    function mr(e) {
        return this.Block(this.merge({
            role: "banner",
            style: {
                backgroundColor: "section",
                paddingVertical: "xxsmall"
            }
        }, e))
    }

    function yr(e) {
        return this.PromoBanner(e)
    }

    function fr(e) {
        return this.Container(this.merge({
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        }, e))
    }

    function wr(e) {
        return this.Text(this.merge({
            typography: "BodyAlpha",
            featured: !0,
            "data-style-fixed": !0,
            style: {
                textAlign: "center"
            }
        }, e))
    }

    function Cr(e) {
        return this.merge({
            style: {
                "@xs": {
                    borderBottomRightRadius: "10%"
                },
                "@md": {
                    right: 0,
                    left: "unset",
                    borderBottomLeftRadius: "10%"
                },
                zIndex: 1200,
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                position: "absolute",
                color: "highContrast",
                transition: "top 750ms cubic-bezier(0.38, 0.12, 0.12, 0.85)",
                padding: "xsmall",
                backgroundColor: "sectionOverlay",
                opacity: .8,
                top: 0
            }
        }, e)
    }

    function Er(e) {
        return this.Group(e)
    }

    function Tr(e) {
        return this.ContentHeading(e)
    }

    function Pr(e) {
        return this.ContentText(e)
    }
    const {
        themeConstants: Rr
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;

    function vr({
        renderMode: e,
        sidebarWidth: t,
        hasContainer: a,
        ...o
    }) {
        const r = "DISPLAY" === e || "PREVIEW_RENDER_MODE" === e;
        let l;
        return l = "PUBLISH" === e ? "fixed" : a ? "relative" : "absolute", this.merge({
            tag: "nav",
            className: "zoom-scale-container",
            style: {
                pointerEvents: r ? "none" : "auto",
                display: "none",
                backgroundColor: "section",
                top: 0,
                left: 0,
                height: "100vh",
                width: t,
                maxWidth: 0,
                zIndex: Rr.SIDELINE_SIDEBAR_ZINDEX,
                transition: "max-width 0.4s ease-in-out, height 0.3s",
                boxShadow: "0 0 4px 0px rgba(0,0,0,0.2)",
                "@md": {
                    display: "block",
                    position: l
                },
                "@lg": {
                    display: "block",
                    maxWidth: "unset !important",
                    position: l
                }
            }
        }, o)
    }

    function xr(e) {
        return this.Container(this.merge({
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "inherit",
                height: "100%"
            }
        }, e))
    }

    function Sr(e) {
        return this.List(this.merge({
            style: {
                paddingLeft: 0,
                listStyleType: "none"
            }
        }, e))
    }
    const {
        themeConstants: kr
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;

    function Ir({
        sidebarWidth: e,
        ...t
    }) {
        const {
            renderMode: a
        } = this.base;
        return this.merge({
            tag: "div",
            style: {
                display: "flex",
                flexDirection: "column",
                position: "PUBLISH" === a ? "fixed" : "absolute",
                top: 0,
                left: e,
                height: "100vh",
                backgroundColor: "section",
                marginVertical: 0,
                listStyleType: "none",
                maxWidth: 0,
                overflowX: "hidden",
                zIndex: kr.SIDELINE_SIDEBAR_ZINDEX
            }
        }, t)
    }

    function Lr(e) {
        return this.List(this.merge({
            style: {
                paddingHorizontal: "xlarge",
                width: "100%"
            }
        }, e))
    }

    function Mr(e) {
        return this.ListItem(this.merge({
            style: {
                display: "flex !important",
                justifyContent: "center",
                whiteSpace: "nowrap",
                width: "100%",
                lineHeight: "45px"
            }
        }, e))
    }

    function Ar(e) {
        return null !== e && "object" == typeof e
    }

    function _r({
        product: e,
        getStyles: t = (() => !1),
        translate: o,
        renderMode: r,
        dataAids: l,
        styleOverrides: n = {},
        ...i
    }) {
        if ("DISPLAY" === r) return null;
        const s = e.has_price_range ? o("products.from") : "",
            c = function(e) {
                return Ar(e.sale_price) ? e["on_sale?"] && null !== e.sale_price.numeric && void 0 !== e.sale_price.numeric : function(e) {
                    return e["on_sale?"] && null !== e.sale_price && void 0 !== e.sale_price
                }(e)
            }(e),
            {
                price: g,
                sale_price: p
            } = e,
            u = {
                rangeLabel: {
                    display: "inline-block",
                    marginRight: "xsmall",
                    ...t() ? {
                        fontSize: t()
                    } : {},
                    ...n.rangeLabel
                },
                original: {
                    display: "inline-block",
                    textAlign: "center",
                    ...t() ? {
                        fontSize: t()
                    } : {},
                    ...n.original
                },
                sale: {
                    display: "inline-block",
                    marginLeft: "xsmall",
                    ...t() ? {
                        fontSize: t()
                    } : {},
                    ...n.sale
                }
            },
            d = c ? {
                priceState: "expired"
            } : {};
        return this.Block(this.merge({
            group: "Product",
            groupType: "Prices",
            children: [s && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                key: "range",
                children: s,
                style: u.rangeLabel
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, a({
                key: "original",
                price: g,
                "data-aid": l.price,
                style: u.original
            }, d, {
                children: Ar(g) ? g.display : g
            })), c && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price, {
                key: "sale",
                price: p,
                "data-aid": l.salePrice,
                style: u.sale,
                priceState: "alert",
                children: Ar(p) ? p.display : p
            })],
            style: {
                marginTop: "xsmall",
                textAlign: "center"
            }
        }, i))
    }

    function Or({
        assets: e,
        banner: t = !1,
        boxed: a = !0,
        defaultAssetUrl: o,
        getStyles: r = (() => !1),
        unboxedSize: l = 100,
        dataAids: n = {},
        imageCropMethod: i,
        showBorder: s = !0,
        imageShape: c,
        noProductImage: g,
        ...p
    }) {
        const u = e && e.length ? e[0].large_url : g,
            d = o || u;
        if (!d) return null;
        const h = y(d, "/:/rs=w:{width},h:{height},cg:false,m"),
            b = {
                outer: {
                    borderColor: s ? "section" : "transparent",
                    borderWidth: "xsmall",
                    borderStyle: "solid",
                    position: "relative",
                    paddingTop: Pa[c] || Pa.square,
                    paddingRight: "100%",
                    backgroundColor: "!rgba(255,255,255,0.1)"
                },
                inner: {
                    position: "absolute",
                    top: "0px",
                    bottom: "0px",
                    left: "0px",
                    right: "0px",
                    backgroundSize: "expand_to_fill" === i ? "cover" : "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }
            };
        return a ? this.Block(this.merge({
            group: "Product",
            groupType: "Asset",
            style: b.outer,
            children: [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                key: "background",
                backgroundImage: h,
                style: b.inner,
                "data-aid": n.image
            }), t && null !== t.text && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product.Banner, {
                key: "banner",
                getStyles: r,
                "data-aid": n.saleBanner
            }, t.text)]
        }, p)) : this.Image(this.merge({
            group: "Product",
            groupType: "Asset",
            src: y(d, `/:/rs=w:${l},h:${l}`),
            style: {
                display: "block",
                maxWidth: "100%"
            }
        }, p))
    }

    function Br({
        getStyles: e = (() => !1),
        ...t
    }) {
        return this.Block(this.merge({
            style: {
                position: "absolute",
                bottom: "0px",
                right: "0px",
                width: "auto",
                paddingVertical: e({
                    saleBannerPaddingVertical: !0
                }) || "xsmall",
                paddingHorizontal: "xsmall",
                backgroundColor: "action",
                fontColor: "action",
                fontSize: "small",
                "@md": e() || {},
                "@lg": e() || {},
                "@sm-only": {
                    paddingVertical: "xxsmall",
                    paddingHorizontal: "xsmall"
                }
            }
        }, t))
    }

    function Dr({
        product: e,
        getStyles: t = (() => !1),
        ...a
    }) {
        const o = "digital" === e.product_type,
            r = t({
                isProductName: !0
            }),
            l = {
                name: {
                    marginTop: "small",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "small",
                    "@sm": {
                        justifyContent: "center"
                    }
                },
                text: {
                    textAlign: "center",
                    ...r && {
                        fontSize: r
                    }
                },
                digitalProductIcon: {
                    marginRight: "xxsmall",
                    verticalAlign: "bottom",
                    display: "inline-flex"
                }
            };
        return this.Block(this.merge({
            group: "Product",
            groupType: "Name",
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                style: l.text,
                featured: !0
            }, o && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                style: l.digitalProductIcon
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "digitalProduct",
                style: l.digitalProductIcon
            })), e.name),
            style: l.name
        }, a))
    }

    function Hr({
        getStyles: e = (() => !1),
        shipping: t = !1,
        ...a
    }) {
        const o = e({
                isOptionOrFreeShipping: !0
            }),
            r = {
                group: "Product",
                groupType: "Label",
                style: {
                    marginTop: "small",
                    textAlign: "center",
                    ...o && {
                        fontSize: o
                    },
                    "@md": {
                        marginTop: "xsmall"
                    }
                }
            };
        return !0 === t ? this.DetailsMinor(this.merge(r, a)) : this.Details(this.merge(r, a))
    }

    function Nr(e) {
        return this.Container(this.merge({
            fluid: !0,
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: "0px"
            }
        }, e))
    }

    function Ur({
        hasBorder: e,
        ...t
    }) {
        return this.Block(this.merge({
            style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                paddingHorizontal: "xsmall",
                backgroundColor: "section",
                ...e && {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderColor: "input"
                }
            }
        }, t))
    }

    function zr(e) {
        return this.IconSearch(this.merge({
            style: {
                color: "highContrast",
                marginLeft: "xsmall",
                zIndex: 1
            }
        }, e))
    }

    function Xr(e) {
        return this.InputSearch(this.merge({
            style: {
                ":focus": {
                    boxShadow: "none"
                }
            }
        }, e))
    }

    function Wr(e) {
        return this.Group(this.merge({
            style: {
                width: "100%",
                textAlign: "center",
                paddingVertical: "small",
                backgroundColor: "section"
            }
        }, e))
    }

    function Vr(e) {
        return this.Address(this.merge({
            style: {
                display: "block",
                "@sm": {
                    display: "inline-block"
                }
            }
        }, e))
    }

    function Fr(e) {
        return this.Pipe(this.merge({
            style: {
                display: "inline-block",
                marginHorizontal: "small"
            }
        }, e))
    }

    function jr(e) {
        return this.Phone(this.merge({
            style: {
                display: "inline-block"
            }
        }, e))
    }

    function Gr(e) {
        return e
    }

    function qr({
        align: e = "left",
        ...t
    }) {
        return this.Heading(this.merge({
            typography: "HeadingDelta",
            section: "default",
            active: !0,
            style: {
                textAlign: e,
                marginBottom: "xxsmall"
            }
        }, t))
    }

    function $r(e) {
        return this.Icon(this.merge({
            style: {
                display: "inline-block",
                marginRight: "xxsmall",
                marginLeft: "-xxsmall"
            }
        }, e))
    }

    function Yr(e) {
        return this.Wrapper(this.merge({
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                padding: "xsmall",
                "@sm": {
                    padding: "small"
                },
                "@lg": {
                    padding: "medium"
                }
            }
        }, e))
    }

    function Kr(e) {
        return this.MoreLink(this.merge({
            icon: "arrowRight",
            iconSize: "1.4em",
            right: !0,
            active: !0,
            style: {
                display: "block"
            }
        }, e))
    }

    function Zr(e) {
        return this.Price(this.merge({
            featured: !0,
            section: "default"
        }, e))
    }

    function Qr(e) {
        return this.CommerceOverlayWrapper(this.merge({
            style: {
                alignItems: "center",
                justifyContent: "center",
                padding: "medium",
                textAlign: "center"
            }
        }, e))
    }

    function Jr(e) {
        return this.CommerceOverlayMoreLink(this.merge({
            style: {
                marginLeft: "xsmall"
            }
        }, e))
    }

    function el(e) {
        return this.CommerceOverlayWrapper(this.merge({
            style: {
                "@sm": {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "medium",
                    textAlign: "center"
                }
            }
        }, e))
    }

    function tl(e) {
        return this.Heading(this.merge({
            typography: "DetailsAlpha",
            section: "default",
            active: !0,
            style: {
                marginBottom: "xxsmall"
            }
        }, e))
    }

    function al(e) {
        return this.MoreLink(this.merge({
            typography: "DetailsBeta",
            active: !0,
            icon: "arrowRight",
            iconSize: "1.4em",
            right: !0,
            style: {
                display: "block"
            }
        }, e))
    }

    function ol(e) {
        return this.Text(this.merge({
            typography: "DetailsBeta",
            section: "default"
        }, e))
    }

    function rl(e) {
        return this.Price(this.merge({
            typography: "DetailsBeta",
            featured: !0,
            section: "default"
        }, e))
    }

    function ll(e) {
        return this.Block(this.merge({
            style: {
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }
        }, e))
    }

    function nl({
        align: e,
        ...t
    }) {
        return this.Heading(this.merge({
            typography: "BodyAlpha",
            active: !0,
            featured: !0,
            style: {
                marginBottom: "xsmall",
                textAlign: e
            }
        }, t))
    }

    function il(e) {
        return this.Icon(this.merge({
            style: {
                display: "inline-block",
                marginRight: "xxsmall",
                marginLeft: "-xxsmall"
            }
        }, e))
    }

    function sl(e) {
        return this.Price(this.merge({
            typography: "DetailsAlpha"
        }, e))
    }

    function cl(e) {
        return this.Wrapper(this.merge({
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0"
            }
        }, e))
    }

    function gl({
        size: e = {
            xs: "large"
        },
        ...t
    }) {
        const a = {},
            o = {
                paddingHorizontal: "medium",
                paddingVertical: "small",
                top: "10px",
                right: "10px"
            };
        for (const t of Object.keys(e)) a[t] = "large" === e[t] ? { ...o
        } : {
            paddingHorizontal: "small",
            paddingVertical: "xxsmall",
            top: "5px",
            right: "5px"
        };
        const r = {
            position: "absolute",
            display: "block",
            backgroundColor: "section",
            ...o,
            ...a.xs,
            "@sm": { ...a.sm
            },
            "@md": { ...a.md
            },
            "@lg": { ...a.lg
            },
            "@xl": { ...a.xl
            }
        };
        return this.DetailsMinor(this.merge({
            style: r,
            category: "primary"
        }, t))
    }

    function pl(e) {
        return this.Button(this.merge({
            size: "small"
        }, e))
    }
    const ul = "DESKTOP_NAV",
        dl = "DESKTOP_NAV_COVER",
        hl = "NAV_DRAWER",
        bl = "SIDEBAR",
        {
            buttons: {
                shapes: ml,
                fills: yl
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    const fl = {
        [ml.NONE]: () => ({}),
        [ml.SQUARE]: function() {
            return {
                borderRadius: 0
            }
        },
        [ml.ROUND]: function() {
            return {
                borderRadius: 4
            }
        },
        [ml.PILL]: function() {
            return {
                borderRadius: 48
            }
        }
    };
    var wl = ({
        fill: e,
        shape: t = ml.SQUARE
    }) => e === yl.OPEN ? {} : (ml[t] || (console.error(`Button: shape type of ${t} is not valid.`), t = ml.SQUARE), {
        style: fl[t]()
    });
    const {
        buttons: {
            fills: Cl,
            colors: El
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Tl = {
        PRIMARY: {
            color: "action",
            bgColorDefault: "action",
            bgColorActive: "actionActive",
            bgColorDefaultHover: "actionHover"
        },
        HIGHCONTRAST: {
            color: "actionContrast",
            bgColorDefault: "actionContrast",
            bgColorActive: "actionContrastActive",
            bgColorDefaultHover: "actionContrastHover"
        }
    }, Pl = {
        PRIMARY: {
            color: "highlight",
            colorHover: "action",
            borderColorHover: "actionBg",
            bgColorHover: "action"
        },
        HIGHCONTRAST: {
            color: "highContrast",
            colorHover: "actionContrast",
            borderColorHover: "actionContrastBg",
            bgColorHover: "actionContrast"
        }
    }, Rl = {
        active: {},
        default: {},
        disabled: {
            opacity: "0.4"
        }
    }, vl = {
        PRIMARY: {
            color: "highlight",
            colorHover: "highlightHover",
            colorActive: "highlightActive"
        },
        HIGHCONTRAST: {
            color: "highContrast",
            colorHover: "section",
            colorActive: "lowContrast"
        }
    }, xl = {
        active: {},
        default: {},
        disabled: {
            opacity: "0.4"
        }
    };
    const Sl = {
        [Cl.NONE]: () => ({}),
        [Cl.SOLID]: function(e, t) {
            const a = {
                active: {
                    backgroundColor: Tl[t].bgColorActive
                },
                default: {
                    backgroundColor: Tl[t].bgColorDefault,
                    ":hover": {
                        backgroundColor: Tl[t].bgColorDefaultHover
                    }
                },
                disabled: {
                    backgroundColor: Tl[t].bgColorDefault,
                    opacity: "0.4",
                    ":active": {
                        backgroundColor: Tl[t].bgColorDefault
                    }
                }
            };
            return {
                color: Tl[t].color,
                ...a[e]
            }
        },
        [Cl.GHOST]: function(e, t, a) {
            return {
                borderWidth: a.customBorderWidth,
                borderStyle: "solid",
                backgroundColor: a.solid ? "section" : "transparent",
                color: Pl[t].color,
                borderColor: "currentColor",
                ...Rl[e],
                ":hover": {
                    color: Pl[t].colorHover,
                    backgroundColor: Pl[t].bgColorHover,
                    borderColor: Pl[t].borderColorHover
                }
            }
        },
        [Cl.OPEN]: function(e, t) {
            return {
                backgroundColor: "transparent",
                color: vl[t].color,
                alignItems: "flex-end",
                ...xl[e],
                ":hover": {
                    color: vl[t].colorHover
                },
                ":active": {
                    color: vl[t].colorActive
                }
            }
        }
    };
    var kl = ({
        fill: e = Cl.SOLID,
        color: t = El.PRIMARY,
        state: a = "default",
        ...o
    }) => (Cl[e] || (console.error(`Button: fill type of ${e} is not valid.`), e = Cl.SOLID), {
        style: Sl[e](a, t, o)
    });
    const {
        buttons: {
            shadows: Il,
            fills: Ll,
            colors: Ml
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    const Al = {
        [Il.NONE]: () => ({}),
        [Il.SHADOW1]: function() {
            const e = "accent" !== this.base.category ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)";
            return {
                position: "relative",
                zIndex: 1,
                ":after": {
                    content: '""',
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    margin: "auto",
                    width: "100%",
                    height: "100%",
                    transition: "all .3s ease",
                    zIndex: -1,
                    boxShadow: "5px 5px 0 " + e,
                    borderRadius: "inherit",
                    opacity: 1
                },
                ":hover": {
                    ":after": {
                        boxShadow: "1px 1px 0 " + e,
                        backgroundPosition: "100% 0"
                    }
                }
            }
        },
        [Il.SHADOW2]: function(e) {
            const t = this.mapPropValue("backgroundColor", {
                PRIMARY: {
                    bgColor: "action"
                },
                HIGHCONTRAST: {
                    bgColor: "actionContrast"
                }
            }[e].bgColor);
            return {
                borderStyle: "solid",
                borderTopWidth: "0",
                borderLeftWidth: "0",
                borderRightWidth: "0",
                borderBottomWidth: "medium",
                borderBottomColor: (t.lightness > 30 ? t.darken(15) : t.lighten(50)).toString()
            }
        }
    };

    function _l({
        fill: e,
        shadow: t = Il.NONE,
        color: a = Ml.PRIMARY
    }) {
        return e !== Ll.SOLID && t !== Il.NONE ? (console.warn("Button: shadow can only be applied to fills.SOLID."), {}) : Il[t] ? {
            style: Al[t].call(this, a)
        } : (console.error(`Button: shadow type of ${t} is not valid.`), {})
    }
    const {
        buttons: {
            decorations: Ol,
            fills: Bl
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Dl = {
        position: "unset",
        opacity: "unset",
        zIndex: "unset",
        border: "unset",
        transition: "unset"
    };

    function Hl({
        fill: e
    }) {
        return e !== Bl.OPEN ? (console.warn("Button: arrow decoration must be used with shapes.OPEN."), {}) : {
            icon: "chevronRight",
            iconLeft: !1,
            iconSize: "small",
            style: {
                paddingVertical: 0,
                svg: {
                    transform: "translateX(0)",
                    transition: "transform .5s ease"
                },
                ":hover svg": {
                    transform: "translateX(4px)"
                }
            }
        }
    }
    const Nl = {
        [Ol.NONE]: () => ({}),
        [Ol.UNDERLINE]: function(e) {
            return e.fill !== Bl.OPEN ? (console.warn("Button: underline decoration must be used with shapes.OPEN."), {}) : {
                style: {
                    borderWidth: 0,
                    borderBottomWidth: e.customBorderWidth,
                    borderStyle: "solid",
                    borderColor: "currentColor",
                    paddingTop: 0,
                    paddingBottom: "xxsmall",
                    alignItems: "flex-end"
                }
            }
        },
        [Ol.ARROW]: Hl,
        [Ol.LINES]: function({
            size: e
        }) {
            if ("small" === e) return {};
            const t = this.base.renderMode === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT ? Dl : {},
                a = {
                    content: '""',
                    display: "inline-block",
                    height: .1,
                    width: 18,
                    borderTop: "1px solid !important"
                };
            return {
                style: {
                    alignItems: "center",
                    ":before": {
                        marginRight: "xsmall",
                        ...a
                    },
                    ":after": {
                        marginLeft: "xsmall",
                        ...t,
                        ...a
                    }
                }
            }
        },
        [Ol.UNDERLINE_WITH_ARROW]: function(e) {
            return e.fill !== Bl.OPEN ? (console.warn("Button: underline with arrow decoration must be used with shapes.OPEN."), {}) : (global._ || guac.lodash).merge({
                style: {
                    svg: {
                        marginTop: "-2px"
                    },
                    ".iconText": {
                        borderWidth: 0,
                        borderBottomWidth: e.customBorderWidth,
                        borderStyle: "solid",
                        borderColor: "currentColor",
                        paddingBottom: "xxsmall"
                    }
                }
            }, Hl.call(this, e))
        }
    };

    function Ul(e) {
        const {
            decoration: t = Ol.NONE
        } = e;
        return Ol[t] ? Nl[t].call(this, e) : (console.error(`Button: decoration type of ${t} is not valid.`), {})
    }
    const {
        buttons: {
            shapes: zl,
            decorations: Xl,
            fills: Wl
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    var Vl = ({
        fill: e,
        decoration: t,
        shape: a,
        size: o = "default"
    }) => {
        let r = "default";
        e === Wl.OPEN ? r = "open" : t === Xl.LINES ? r = "lines" : a === zl.PILL && (r = "pill");
        const l = {
            default: {
                small: "small",
                default: "large",
                large: "xlarge"
            },
            pill: {
                small: "medium",
                default: "xlarge",
                large: "xlarge"
            },
            lines: {
                small: a === zl.PILL ? "medium" : "small",
                default: a === zl.PILL ? "medium" : "small",
                large: a === zl.PILL ? "medium" : "small"
            },
            open: {
                small: 0,
                default: 0,
                large: 0
            }
        };
        return {
            style: {
                small: {
                    paddingHorizontal: l[r].small,
                    paddingVertical: "xxsmall",
                    minHeight: 32
                },
                default: {
                    paddingHorizontal: l[r].default,
                    paddingVertical: "xsmall",
                    minHeight: e === Wl.OPEN ? 32 : 48
                },
                large: {
                    paddingHorizontal: l[r].large,
                    paddingVertical: "xsmall",
                    minHeight: e === Wl.OPEN ? 32 : 48
                }
            }[o]
        }
    };

    function Fl({
        fullWidth: e,
        ...t
    }) {
        const {
            state: a = "default",
            shape: o,
            fill: r,
            decoration: l,
            shadow: n,
            color: i,
            customBorderWidth: s = "xsmall",
            ...c
        } = t, g = "OPEN" === r, p = {
            cursor: "disabled" === a ? "not-allowed" : "pointer",
            borderStyle: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textDecoration: "none",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            position: "relative",
            maxWidth: "100%",
            width: g ? "auto" : "100%",
            "@sm": {
                width: e && !g ? "100%" : "auto"
            }
        }, u = (global._ || guac.lodash).merge(this.getButtonDefaults(), {
            shape: o,
            fill: r,
            decoration: l,
            shadow: n,
            color: i,
            customBorderWidth: s
        });
        return this.merge({}, t, {
            style: p
        }, ...[Vl, wl, kl, Ul, _l].map((e => e.call(this, { ...c,
            ...u
        }))))
    }

    function jl({
        children: e,
        ...t
    }) {
        const {
            state: a = "default",
            size: o = "default"
        } = t, r = t.href || t.target || "link" === t.theme ? "a" : "button", l = "a" === r && "_blank" === t.target ? {
            rel: "noopener"
        } : {}, n = "small" === o ? "small" : "default", {
            icon: i,
            iconLeft: s = !0,
            iconSize: c = n,
            ...g
        } = Fl.call(this, t), p = t.btnAddon ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            className: "btnAddon"
        }) : null, u = {
            default: {
                icon: xt,
                adjustment: "-xsmall"
            },
            small: {
                icon: "18px",
                adjustment: "-xxsmall"
            }
        }, d = "OPEN" !== g.fill ? {
            marginLeft: s ? u[c].adjustment : 0,
            marginRight: s ? 0 : u[c].adjustment
        } : {}, h = `calc(${u[c].icon} + 8px)`, b = {
            common: {
                fontSize: "inherit",
                fontFamily: "inherit",
                textTransform: "inherit",
                letterSpacing: "inherit"
            },
            wrapper: {
                position: "relative",
                ...d
            },
            icon: {
                width: u[c].icon,
                height: u[c].icon,
                position: "absolute",
                top: "50%",
                left: s ? 0 : "auto",
                right: s ? "auto" : 0,
                lineHeight: 0,
                transform: "translateY(-50%)",
                "> img": {
                    display: "block"
                }
            },
            text: {
                display: "block",
                textAlign: "center",
                marginLeft: s ? h : 0,
                marginRight: s ? 0 : h
            }
        }, m = (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, p, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            style: { ...b.common,
                ...b.wrapper
            }
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            style: b.icon
        }, "string" == typeof i ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            icon: i,
            size: u[c].icon
        }) : i), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
            className: "iconText",
            style: { ...b.common,
                ...b.text
            }
        }, e)));
        return this.merge({
            tag: r,
            disabled: "disabled" === a,
            tcclTracking: "click",
            typography: "ButtonAlpha",
            ...l,
            children: i ? m : (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, p, e),
            "data-ux-btn": this.base.kind.toLowerCase()
        }, g, t)
    }
    const Gl = {
        outline: "none",
        boxShadow: "inset 0 0 0 1px currentColor"
    };

    function ql({
        convertToAbsolute: e,
        href: t,
        mobileIconSize: a = "large",
        domainName: o = "",
        ...r
    }) {
        const l = (global._ || guac.lodash).clone(r.children);
        if (e && t && 0 !== t.indexOf("http") && (t = `https://${o}${t}`), "HEADER" !== this.base.widgetType && t && ((n = t) && new RegExp(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/).test(n)) && l && "string" != typeof l && !Array.isArray(l) && l.props && l.props.icon) {
            const {
                props: e
            } = l, t = {
                width: this.mapPropValue("iconSize", a),
                height: this.mapPropValue("iconSize", a)
            };
            l.props = { ...e,
                style: {
                    "@sm-only": t,
                    "@xs-only": t,
                    ...e.style || {}
                }
            }
        }
        var n;
        const i = t && "#" !== t && "/" !== t ? "link" : "button",
            s = {
                role: i,
                "aria-haspopup": "button" === i ? "menu" : "_blank" === r.target
            };
        return this.merge({
            tag: "a",
            rel: "_blank" === r.target ? "noopener" : "",
            tcclTracking: "click",
            typography: "LinkAlpha",
            style: {
                textDecoration: "none",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                display: "inline",
                cursor: "pointer"
            },
            ...s
        }, { ...(global._ || guac.lodash).omit(r, ["renderMode", "domainName", "pageRoute", "isAnchor", "convertToAbsolute", "activeStyle", "item"]),
            href: t,
            children: l
        })
    }

    function $l(e) {
        return this.Link(this.merge({
            style: {
                display: "flex",
                alignItems: "center",
                "> svg": {
                    margin: 0,
                    color: "highContrast",
                    ":hover": {
                        color: "highlight"
                    }
                }
            }
        }, e))
    }

    function Yl({
        left: e = !0,
        ...t
    }) {
        return console.warn("LinkArrow is deprecated. Use MoreLinkBackward or MoreLinkBackward. The issue is probably in " + this.base.widgetPreset), !0 === e ? this.MoreLinkBackward(t) : this.MoreLinkForward(t)
    }

    function Kl(e) {
        const {
            href: t
        } = e, a = t && 0 === t.indexOf("tel:");
        return this.Link(this.merge({
            style: {
                textDecoration: a ? "none" : "underline"
            }
        }, e))
    }

    function Zl({
        refCallback: e,
        ...t
    }) {
        return this.merge({
            tag: "input",
            typography: "InputAlpha",
            style: {
                backgroundColor: "input",
                borderColor: "input",
                borderWidth: 0,
                width: "100%",
                "::placeholder": {
                    color: "inherit"
                },
                ":focus": { ...Gl
                }
            },
            ref: e && (t => e(t)),
            role: "textbox",
            "aria-multiline": !1
        }, t)
    }

    function Ql({
        searchFormLocation: e,
        ...t
    }) {
        return this.Input(this.merge({
            style: {
                width: "100%",
                paddingLeft: 40,
                paddingRight: "xsmall",
                paddingVertical: "xsmall",
                cursor: "auto",
                ...e === dl ? {
                    paddingLeft: "40px",
                    backgroundColor: "transparent",
                    borderStyle: "none",
                    height: "40px"
                } : {
                    backgroundColor: "section",
                    borderRadius: "medium",
                    borderStyle: "solid",
                    borderWidth: "xsmall"
                }
            },
            role: "searchbox"
        }, t))
    }

    function Jl({
        placeholder: e,
        value: t,
        name: o,
        handleChange: r,
        labelFocusStyleOverrides: l = {},
        ...n
    }) {
        const {
            Label: i,
            Input: s
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, c = {
            fontSize: "12px",
            top: "8px",
            color: "inputHighlight",
            ...l
        }, g = (global._ || guac.lodash).uniqueId("input");
        return this.merge({
            tag: "div",
            children: [(global.React || guac.react).createElement(s, a({
                id: g,
                key: "input",
                group: "InputFloatLabel",
                type: "text",
                onChange: r,
                name: o,
                value: t,
                labelFocusStyles: c
            }, n)), (global.React || guac.react).createElement(i, {
                key: "label",
                group: "InputFloatLabel",
                for: g,
                children: e
            })],
            style: {
                position: "relative"
            }
        }, n)
    }

    function en({
        labelFocusStyles: e,
        ...t
    }) {
        return this.Input(this.merge({
            tag: "input",
            type: "text",
            style: {
                paddingTop: "23px",
                paddingBottom: "7px",
                ":focus + label": { ...e
                },
                ':not([value=""]) + label': { ...e
                }
            }
        }, t))
    }

    function tn(e) {
        return this.Label(this.merge({
            tag: "label",
            typography: "InputAlpha",
            featured: !1,
            style: {
                position: "absolute",
                top: "30%",
                left: "15px",
                transition: "all .15s ease",
                pointerEvents: "none"
            }
        }, e))
    }

    function an(e) {
        return this.Input(this.merge({
            tag: "textarea",
            rows: 4,
            "aria-label": e.placeholder,
            style: {
                resize: "vertical"
            },
            role: "textbox",
            "aria-multiline": !0
        }, e))
    }

    function on(e) {
        return this.merge({
            tag: "button",
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "chevronLeft",
                "data-edit-interactive": !0
            })
        }, e)
    }

    function rn(e) {
        return this.merge({
            tag: "button",
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "chevronRight",
                "data-edit-interactive": !0
            })
        }, e)
    }

    function ln(e) {
        return this.Button(this.merge({
            fullWidth: !0
        }, e))
    }

    function nn({
        skin: e,
        ...t
    }) {
        const a = {
            whatsapp: {
                style: {
                    color: "brandLividContrast",
                    fontSize: "medium",
                    fontWeight: "700",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    backgroundColor: "brandLivid",
                    ":hover": {
                        backgroundColor: "brandLividHover"
                    }
                },
                icon: "whatsApp",
                typography: !1
            }
        };
        return this.Button(this.merge({ ...a[e]
        }, t))
    }
    const sn = {
            section: "overlay",
            category: "accent",
            style: {
                border: "none",
                paddingVertical: "xsmall",
                paddingHorizontal: 0,
                outline: "none",
                borderRadius: 0,
                color: "highContrast",
                fontSize: "small",
                "@md": {
                    paddingVertical: "xsmall",
                    paddingHorizontal: "xxsmall"
                }
            }
        },
        cn = {
            style: {
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                zIndex: 1,
                backgroundColor: "section",
                ":hover": {
                    backgroundColor: "section"
                },
                ":active": {
                    backgroundColor: "section"
                }
            }
        };

    function gn(e) {
        return this.ButtonPrevious(this.merge({
            style: {
                left: 0
            }
        }, sn, cn, e))
    }

    function pn(e) {
        return this.ButtonNext(this.merge({
            style: {
                right: 0
            }
        }, sn, cn, e))
    }
    const un = {
        style: {
            backgroundColor: "transparent",
            zIndex: 2,
            ":active": {
                backgroundColor: "transparent"
            },
            ":hover": {
                backgroundColor: "transparent"
            },
            "@sm": {
                backgroundColor: "sectionOverlaySoft",
                ":hover": {
                    backgroundColor: "sectionOverlaySoft"
                },
                ":active": {
                    backgroundColor: "sectionOverlaySoft"
                }
            },
            "@md": {
                ":hover": {
                    backgroundColor: "section"
                }
            }
        }
    };

    function dn(e) {
        return this.ButtonPrevious(this.merge(sn, un, e))
    }

    function hn(e) {
        return this.ButtonNext(this.merge(sn, un, e))
    }

    function bn({
        label: e,
        style: t,
        textProps: o = {},
        ...r
    }) {
        if (!e && !o.children) return this.merge({
            tag: "input",
            type: "checkbox"
        }, {
            style: t,
            ...r
        });
        const {
            Input: l,
            Text: n,
            Element: i
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, {
            category: s
        } = r, c = {
            label: {
                display: "flex",
                justifyContent: "center",
                position: "relative",
                ":hover > div": {
                    borderColor: "primary" === s ? "neutral" : "primary"
                }
            },
            input: {
                position: "absolute",
                zIndex: "-1",
                opacity: "0",
                ":disabled ~ div": {
                    pointerEvents: "none",
                    backgroundColor: "inputDisabled",
                    borderColor: "inputDisabled"
                },
                ":disabled ~ *": {
                    cursor: "default"
                },
                ":checked ~ div": {
                    borderColor: "primary" === s ? "neutral" : "primary"
                },
                ":checked ~ div:after": {
                    content: "''",
                    display: "block",
                    top: "3px",
                    left: "7px",
                    width: "4px",
                    height: "8px",
                    transform: "rotate(45deg)",
                    borderColor: "primary" === s ? "neutral" : "primary",
                    borderStyle: "solid",
                    borderWidth: "0 2px 2px 0",
                    position: "absolute"
                },
                ":focus ~ div": { ...Gl
                }
            },
            customCheckbox: {
                marginTop: "2px",
                display: "inline-block",
                left: "0",
                minWidth: "19px",
                height: "19px",
                borderColor: "lowContrastOverlay",
                borderWidth: "xsmall",
                borderRadius: "2px",
                borderStyle: "solid",
                boxShadow: "0px 1px 3px",
                color: "lowContrast",
                cursor: "pointer",
                position: "relative"
            },
            text: {
                display: "inline-block",
                position: "static",
                lineHeight: "inherit",
                cursor: "pointer",
                marginLeft: "xsmall",
                verticalAlign: "top",
                textAlign: "left",
                overflowWrap: "anywhere"
            }
        };
        return this.merge({
            tag: "label",
            children: [(global.React || guac.react).createElement(l, a({
                key: "checkbox",
                tag: "input",
                type: "checkbox",
                group: "InputCheckbox",
                style: c.input,
                tabIndex: 0
            }, r)), (global.React || guac.react).createElement(i, {
                key: "custom-checkbox",
                tag: "div",
                group: "InputCheckbox",
                style: c.customCheckbox
            }), (global.React || guac.react).createElement(n, a({
                key: "text",
                group: "InputCheckbox",
                style: c.text,
                children: e
            }, o))],
            style: { ...c.label,
                ...t
            }
        }, r)
    }

    function mn(e) {
        return this.merge({
            tag: "input",
            type: "radio"
        }, e)
    }

    function yn({
        children: e,
        defaultValue: t,
        id: a,
        value: o,
        disabled: r = !1,
        state: l = "default",
        ...n
    }) {
        const {
            Icon: i,
            Element: s
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
        return this.merge({
            tag: "div",
            children: [(global.React || guac.react).createElement(i, {
                key: "icon",
                group: "InputSelect"
            }), (global.React || guac.react).createElement(s, {
                id: a,
                key: "select",
                group: "InputSelect",
                disabled: r,
                value: o,
                defaultValue: t,
                children: e
            })],
            typography: "InputAlpha",
            style: {
                borderWidth: "none",
                backgroundColor: "input",
                position: "relative",
                ...{
                    default: {
                        borderColor: "input"
                    },
                    error: {
                        borderColor: "inputError"
                    },
                    disabled: {
                        opacity: ".2"
                    }
                }[r ? "disabled" : l]
            }
        }, (global._ || guac.lodash).omit(n, "id"))
    }

    function fn(e) {
        return this.merge({
            tag: "select",
            style: {
                backgroundColor: "transparent",
                borderStyle: "none",
                borderRadius: "0",
                color: "inherit",
                cursor: "pointer",
                display: "block",
                position: "relative",
                width: "100%",
                "-webkit-appearance": "none",
                "-moz-appearance": "none",
                "::-ms-expand": {
                    display: "none"
                },
                ":focus": { ...Gl
                },
                "> *": {
                    color: "#000",
                    backgroundColor: "#fff"
                }
            }
        }, e)
    }

    function wn(e) {
        return this.Icon(this.merge({
            size: "small",
            icon: "chevronDown",
            style: {
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)"
            }
        }, e))
    }

    function Cn(e) {
        return this.merge({
            tag: "option"
        }, e)
    }

    function En(e) {
        return this.merge({
            tag: "ul",
            groupType: "Menu",
            style: {
                borderRadius: "medium",
                boxShadow: "0 3px 6px 3px rgba(0,0,0,0.24)",
                backgroundColor: "section",
                paddingVertical: "small",
                paddingHorizontal: "small"
            }
        }, e)
    }
    const Tn = {
        style: {
            lineHeight: "0"
        },
        typography: "NavAlpha"
    };

    function Pn(e) {
        return this.Link(this.merge({ ...Tn
        }, e))
    }

    function Rn(e) {
        return this.Icon(this.merge({ ...Tn
        }, e))
    }

    function vn(e) {
        return this.Button(this.merge({
            style: {
                margin: 0
            }
        }, e))
    }

    function xn({
        icon: e = "chevronLeft",
        right: t = !1,
        children: a,
        rotate: o,
        iconSize: r = "1em",
        ...l
    }) {
        const n = a ? [(global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                key: "span",
                style: {
                    verticalAlign: "middle"
                },
                children: a
            })] : [],
            i = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                "data-aid": e,
                key: "svg",
                icon: e,
                rotate: o,
                size: r,
                style: {
                    verticalAlign: "middle"
                }
            });
        return t ? n.push(i) : n.unshift(i), this.Link(this.merge({
            children: n,
            style: {
                display: "inline-block",
                "> :nth-child(2)": {
                    marginLeft: ".25em"
                }
            }
        }, l))
    }

    function Sn({
        icon: e,
        right: t,
        rotate: a,
        iconSize: o,
        ...r
    }) {
        const l = "LinkAlpha";
        return e ? this.LinkIcon(this.merge({
            icon: e,
            right: t,
            rotate: a,
            iconSize: o,
            typography: l
        }, r)) : this.Link(this.merge({
            typography: l
        }, r))
    }

    function kn({
        expanded: e,
        ...t
    }) {
        const a = e ? "minus" : "plus";
        return this.MoreLink(this.merge({
            icon: a,
            "aria-expanded": e
        }, t))
    }

    function In(e) {
        return this.MoreLink(this.merge({
            icon: "chevronLeft"
        }, e))
    }

    function Ln(e) {
        return this.MoreLink(this.merge({
            icon: "chevronRight",
            right: !0
        }, e))
    }

    function Mn({
        expanded: e,
        ...t
    }) {
        const a = e ? 180 : 0;
        return this.MoreLink(this.merge({
            icon: "chevronDown",
            rotate: a,
            right: !0
        }, t))
    }

    function An(e) {
        return this.Link(this.merge({
            typography: "LinkAlpha"
        }, e))
    }

    function _n(e) {
        return this.merge({
            tag: "div",
            role: "button",
            "data-edit-interactive": !0,
            style: {
                background: "transparent",
                borderColor: "highContrast",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "50%",
                cursor: "pointer",
                height: "12px",
                width: "12px",
                marginVertical: "xxsmall",
                marginHorizontal: "12px",
                color: "highContrast"
            }
        }, e)
    }

    function On(e) {
        return this.Dot(this.merge({
            style: {
                background: "currentColor"
            }
        }, e))
    }

    function Bn(e) {
        return this.Link(this.merge({
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        }, e))
    }

    function Dn(e) {
        return this.LinkDropdown(e)
    }

    function Hn(e) {
        return this.Button(e)
    }

    function Nn(e) {
        return this.Button(e)
    }

    function Un(e) {
        return this.Button(e)
    }

    function zn(e) {
        return this.merge({
            tag: "hr",
            style: {
                borderColor: "section",
                borderBottomWidth: "xsmall",
                borderStyle: "solid",
                marginVertical: "0",
                width: "100%"
            },
            "aria-hidden": !0,
            role: "separator"
        }, e)
    }

    function Xn(e) {
        return this.merge({
            children: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, {
                group: "Divider"
            })),
            style: {
                backgroundColor: "section"
            }
        }, e)
    }

    function Wn(e) {
        return this.merge({
            style: {
                width: 1,
                border: 0,
                backgroundColor: "sectionContrast",
                height: "1em",
                display: "inline-block"
            }
        }, e)
    }

    function Vn(e) {
        return this.HR(e)
    }

    function Fn(e) {
        return this.merge({
            tag: "iframe",
            style: {
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0"
            }
        }, e)
    }

    function jn(e) {
        return this.merge({
            style: {
                position: "relative",
                paddingBottom: "56.25%",
                overflow: "hidden",
                maxWidth: "100%"
            }
        }, e)
    }

    function Gn({
        fluid: e = !1,
        ...t
    }) {
        const a = {
            marginLeft: "auto",
            marginRight: "auto",
            paddingHorizontal: "medium",
            maxWidth: "100%"
        };
        return e || (a["@sm"] = {
            width: "smContainer"
        }, a["@md"] = {
            width: "mdContainer"
        }, a["@lg"] = {
            width: "lgContainer"
        }, a["@xl"] = {
            width: "xlContainer"
        }), this.merge({
            tag: "div",
            style: a
        }, t)
    }

    function qn(e) {
        return this.Container(this.merge(e, {
            fluid: !0
        }))
    }

    function $n(e) {
        return this.ContainerFluid(this.merge({
            style: {
                marginHorizontal: 0,
                paddingHorizontal: 0,
                display: "flex",
                flexDirection: "column",
                "@md": {
                    flexWrap: "nowrap",
                    flexDirection: "row"
                }
            }
        }, e))
    }

    function Yn(e) {
        return this.merge({
            tag: "span"
        }, e)
    }

    function Kn(e) {
        return this.merge({
            tag: "div"
        }, e)
    }

    function Zn(e) {
        return this.Container(this.merge({
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingVertical: "medium",
                "> div:nth-child(2)": {
                    paddingTop: "medium"
                },
                "@md": {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    "> div:first-child": {
                        justifyContent: "flex-end",
                        paddingRight: "xsmall",
                        flexShrink: 1
                    },
                    "> div:only-child": {
                        justifyContent: "center",
                        textAlign: "center",
                        paddingHorizontal: 0
                    },
                    "> div:nth-child(2)": {
                        justifyContent: "flex-start",
                        paddingTop: 0,
                        paddingLeft: "xsmall",
                        flexShrink: 0,
                        maxWidth: "50%"
                    }
                }
            }
        }, e))
    }

    function Qn(e) {
        return this.Block(this.merge({
            style: {
                display: "flex",
                flexGrow: 1,
                textAlign: "center",
                paddingVertical: 0,
                flexBasis: "auto",
                "@md": {
                    textAlign: "left"
                }
            }
        }, e))
    }

    function Jn({
        tag: e = "ul",
        ...t
    }) {
        return this.merge({
            tag: e,
            style: {
                marginVertical: "0",
                marginHorizontal: "0",
                "-webkit-margin-before": "0",
                "-webkit-margin-after": "0",
                "-webkit-padding-start": "0"
            }
        }, t)
    }

    function ei(e) {
        return this.merge({
            tag: "li",
            style: {
                color: "section",
                marginBottom: "medium",
                ":last-child": {
                    marginBottom: "0"
                }
            }
        }, e)
    }

    function ti(e) {
        return this.merge({
            tag: "li",
            style: {
                color: "section",
                marginLeft: "medium",
                marginBottom: "none",
                display: "inline-block",
                listStyle: "none",
                ":first-child": {
                    marginLeft: "0"
                }
            }
        }, e)
    }
    const ai = {
        loaderScale: "@keyframes loaderscale { 0% { transform: scale(1); opacity: 1; } 45% { transform: scale(0.1); opacity: 0.7; } 80% { transform: scale(1); opacity: 1; }}",
        loaderRipple: "@keyframes ripple { 0% { opacity: 1; transform: scale(0); stroke-width: 4; } 100% { opacity: 0; stroke-width: 2; }}",
        loaderBalance: "@keyframes balance { 0% { transform: rotate(0deg); } 100% { transform: rotate(180deg); }}",
        loaderCascade: "@keyframes cascade { 0% { opacity: 1; } 100% { opacity: 0; }}",
        loaderBlink: "@keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; }}"
    };

    function oi({
        className: e = "",
        ...t
    }) {
        const {
            SVG: a
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, o = {
            viewBox: "0 0 64 64",
            fill: "currentColor",
            style: {
                width: "1em",
                height: "1em"
            }
        }, r = {
            cx: "32",
            cy: "32",
            r: "24"
        };
        return this.merge({
            tag: "div",
            className: "" + e,
            "data-loading-indicator": !0,
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(a, o, (global.React || guac.react).createElement("circle", r)), (global.React || guac.react).createElement(a, o, (global.React || guac.react).createElement("circle", r)), (global.React || guac.react).createElement(a, o, (global.React || guac.react).createElement("circle", r)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, ai.loaderScale)),
            style: {
                color: "section",
                display: "inline-block",
                "> svg:nth-child(1)": {
                    animation: "loaderscale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);"
                },
                "> svg:nth-child(2)": {
                    animation: "loaderscale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);"
                },
                "> svg:nth-child(3)": {
                    animation: "loaderscale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);"
                }
            }
        }, t)
    }
    var ri = {
        __proto__: null,
        magGlass: (global.React || guac.react).createElement("path", {
            d: "M19.126 20a.783.783 0 0 1-.606-.253l-3.728-3.718-.288.2a6.547 6.547 0 0 1-3.8 1.18 6.62 6.62 0 0 1-2.603-.528 6.754 6.754 0 0 1-2.144-1.428 6.731 6.731 0 0 1-1.428-2.144A6.606 6.606 0 0 1 4 10.705c0-.904.178-1.78.529-2.604a6.722 6.722 0 0 1 1.428-2.144 6.752 6.752 0 0 1 2.144-1.429A6.62 6.62 0 0 1 10.705 4c.903 0 1.78.178 2.603.528a6.746 6.746 0 0 1 2.145 1.43A6.736 6.736 0 0 1 16.88 8.1c.35.824.528 1.7.528 2.604a6.55 6.55 0 0 1-1.18 3.799l-.2.288 3.72 3.72c.171.172.251.366.251.614 0 .24-.083.434-.26.612a.822.822 0 0 1-.614.262zM10.705 5.75c-1.358 0-2.537.488-3.502 1.453-.965.965-1.454 2.144-1.454 3.502 0 1.358.49 2.535 1.454 3.5.965.966 2.144 1.456 3.502 1.456 1.358 0 2.535-.49 3.5-1.456.966-.965 1.455-2.142 1.455-3.5s-.49-2.537-1.455-3.502c-.965-.965-2.142-1.454-3.5-1.454z"
        }),
        account: (global.React || guac.react).createElement("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        }),
        gmb: (global.React || guac.react).createElement("g", {
            fill: "none",
            fillRule: "evenodd",
            transform: "translate(2 2)"
        }, (global.React || guac.react).createElement("circle", {
            cx: 10,
            cy: 10,
            r: "9.5",
            fill: "#F3F3F3",
            stroke: "#CCC"
        }), (global.React || guac.react).createElement("g", {
            transform: "translate(5.556 5.5)"
        }, (global.React || guac.react).createElement("path", {
            fill: "#4285F4",
            d: "M8.494 4.375c0-.303-.028-.595-.079-.875H4.334v1.655h2.332c-.1.535-.406.988-.865 1.291V7.52h1.4c.82-.744 1.293-1.841 1.293-3.144z"
        }), (global.React || guac.react).createElement("path", {
            fill: "#34A853",
            d: "M4.334 8.556c1.17 0 2.15-.383 2.868-1.037l-1.4-1.073c-.389.257-.885.408-1.468.408-1.129 0-2.084-.752-2.425-1.763H.46v1.108a4.338 4.338 0 0 0 3.873 2.357z"
        }), (global.React || guac.react).createElement("path", {
            fill: "#FBBC05",
            d: "M1.909 5.09a2.542 2.542 0 0 1-.136-.812c0-.282.05-.556.136-.813V2.357H.46a4.231 4.231 0 0 0 0 3.842l1.448-1.108z"
        }), (global.React || guac.react).createElement("path", {
            fill: "#EA4335",
            d: "M4.334 1.701c.636 0 1.207.216 1.656.64l1.243-1.227C6.483.424 5.502 0 4.333 0 2.64 0 1.175.959.462 2.357l1.448 1.108c.34-1.011 1.296-1.764 2.425-1.764z"
        }))),
        fbRecommends: (global.React || guac.react).createElement("path", {
            fill: "#F277A7",
            fillRule: "evenodd",
            d: "M6 18l-4 2 2-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6zm7-4.367L15.472 15 15 12.106l2-2.05-2.764-.423L13 7l-1.236 2.633L9 10.056l2 2.05L10.528 15 13 13.633z"
        }),
        fbDoesNotRecommend: (global.React || guac.react).createElement("path", {
            fill: "#A5A5A5",
            fillRule: "evenodd",
            d: "M6 18l-4 2 2-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6zm7-4.367L15.472 15 15 12.106l2-2.05-2.764-.423L13 7l-1.236 2.633L9 10.056l2 2.05L10.528 15 13 13.633z"
        }),
        buttonRight: (global.React || guac.react).createElement("path", {
            d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5zM9.883 6.956l.965-.823 4.902 5.363L10.857 17l-.976-.81 4.156-4.682-4.154-4.552z"
        }),
        buttonLeft: (global.React || guac.react).createElement("path", {
            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.25a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5zm2.117-3.706l-.965.823-4.902-5.363L13.143 7l.976.81-4.156 4.682 4.154 4.552z"
        }),
        hamburger: (global.React || guac.react).createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M4 6.5h16H4zM4 12h16H4zm0 5.5h16H4z"
        }),
        video: (global.React || guac.react).createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, (global.React || guac.react).createElement("rect", {
            width: 24,
            height: 24
        }), (global.React || guac.react).createElement("path", {
            fill: "currentColor",
            fillRule: "nonzero",
            d: "M21 5.538v12.924c0 .846-.675 1.538-1.5 1.538h-15c-.825 0-1.5-.692-1.5-1.538V5.538C3 4.692 3.675 4 4.5 4h15c.825 0 1.5.692 1.5 1.538zM6.6 18.154v-1.23a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616H6c.328 0 .6-.279.6-.615zm0-3.692V13.23a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.28-.6.616v1.23c0 .337.272.616.6.616H6c.328 0 .6-.279.6-.615zm0-3.693V9.54a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.279-.6.615v1.231c0 .337.272.616.6.616H6c.328 0 .6-.28.6-.616zm9.6 7.385V13.23a.612.612 0 0 0-.6-.616H8.4c-.328 0-.6.28-.6.616v4.923c0 .336.272.615.6.615h7.2c.328 0 .6-.279.6-.615zM6.6 7.077v-1.23A.612.612 0 0 0 6 5.23H4.8c-.328 0-.6.279-.6.615v1.231c0 .337.272.615.6.615H6c.328 0 .6-.278.6-.615zm13.2 11.077v-1.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615zm-3.6-7.385V5.846a.612.612 0 0 0-.6-.615H8.4c-.328 0-.6.279-.6.615v4.923c0 .337.272.616.6.616h7.2c.328 0 .6-.28.6-.616zm3.6 3.693V13.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.28-.6.616v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615zm0-3.693V9.54a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.231c0 .337.272.616.6.616h1.2c.328 0 .6-.28.6-.616zm0-3.692v-1.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615z"
        })),
        globe: (global.React || guac.react).createElement("path", {
            d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.842 14.167a.642.642 0 0 0 .341-.575.708.708 0 0 0-.658-.4c-.225-.059-.408-.2-.65-.275-.242-.075-.508-.084-.758-.15-.225-.859-1.034-1.025-1.709-1.4a2.142 2.142 0 0 0-.833-.509c-.258-.025-.95.1-.883-.316-.125.075-.25.075-.375.075-.059-.392-.575.083-.7.166-.27.097-.564.097-.834 0v.1a.742.742 0 0 1-.066-1.066.733.733 0 0 0-.084-.125.833.833 0 0 1-.65-.109c-.166-.2.117-.3.2-.541.3-.892-.716.008-1.016-.175-.3-.184 0-.534.1-.734.027-.271.1-.536.216-.783.284-.392.434 0 .767 0a.917.917 0 0 1 .533-.067c.35.217.217 1.05.575.975a.658.658 0 0 1 .167-.2v.05a1.092 1.092 0 0 1-.05-.35c-.058-.29.005-.59.175-.833.097-.007.195-.007.292 0a.833.833 0 0 0 .291-.292c.138-.357.455-.614.834-.675v-.191c.033-.167.05-.067.133-.167.108-.098.208-.204.3-.317a.392.392 0 0 1 0 .384c.417.007.818-.16 1.108-.459h-.583a1.042 1.042 0 0 0 0-.316.983.983 0 0 1-.375-.067.55.55 0 0 1 .617-.058c.077.046.17.06.258.041.125-.033.183-.175.292-.175a1.058 1.058 0 0 0-.259.492c.242-.033.7.217.834-.075a1.092 1.092 0 0 1-.467-.358 1.392 1.392 0 0 0-.217-.55 4.508 4.508 0 0 1-.491-.417c-.084-.117.016-.233-.175-.233a.767.767 0 0 0-.292.108c-.092-.308-.292-.667-.608-.375-.154.32-.373.603-.642.833a.3.3 0 0 1 0 .284c-.117-.125-.192-.309-.308-.442a1.983 1.983 0 0 1-.375-.4c-.117-.267-.034-.308.216-.433a.533.533 0 0 1 .467-.092v.142a.933.933 0 0 0 .567-.2c.133-.125.25-.417.491-.292.014.115.033.229.059.342h-.167c.25.066 1.175.55 1.083-.117-.118-.2-.267-.38-.441-.533-.192-.292-.05-.409.258-.55.124.126.275.223.442.283.14.2.229.432.258.675.083.308.533 1.067.917.992 0-.29.072-.577.208-.834.216-.155.397-.354.533-.583a.942.942 0 0 1-.425-.525A8.333 8.333 0 0 0 12 3.667a8.333 8.333 0 0 0-1.183.091l-.484.075a.5.5 0 0 1 .1.35.392.392 0 0 0-.316.234c-.15-.192.116-.192.116-.35a.317.317 0 0 0-.083-.184l-.308.075c-.092.225-.242.492-.417.284.075-.059.075-.134.15-.217l-.3.108a.225.225 0 0 1-.083.159.983.983 0 0 0-.067-.1 8.333 8.333 0 0 0-4.1 3.275c-.042.116-.117.233-.117.366a3.233 3.233 0 0 0-.133 1.434c.034.179.085.354.15.525.3-.334-.05-1.025.2-1.425.043.59.043 1.184 0 1.775.008.275.2 1.291.6 1.291.183-.266.4.15.525.275.086.116.184.222.292.317.083.092.258.033.35.092.341.225.441 1.108.941 1.108 0-.292.292-.225.434-.025a.967.967 0 0 1 0 .733c-.084.234-.375.317-.434.525.049.222.06.45.034.675h-.084a5 5 0 0 0 .684 1.434c.283.433.741.525 1.058.9a2.95 2.95 0 0 1 .267 1.666 3.175 3.175 0 0 0-.059.834c.337.096.68.171 1.025.225a.392.392 0 0 1 .142-.209c.237-.035.46-.136.642-.291.083-.042.141-.159.225-.159.11-.007.219-.026.325-.058.124-.141.24-.289.35-.442a2.9 2.9 0 0 0 .508-.341c0-.117-.067-.217 0-.325a.717.717 0 0 1 .3-.209c.23-.074.454-.16.675-.258.132-.158.234-.339.3-.533.154-.163.253-.37.283-.592a1 1 0 0 1 .334-.608zm-5.917-5.092c-.025-.033-.042-.1-.133-.15.2.075.591 1.125.933.617a1.408 1.408 0 0 0-.383-.342c-.225.133-.259-.167-.392-.267a1.017 1.017 0 0 1-.483-.275v-.066a.583.583 0 0 1 0 .075.925.925 0 0 0-.834.058c.23.091.467.161.709.208.208.092.383.367.583.142zm7.817-4.533c.264.113.492.298.658.533a.958.958 0 0 0-.425.1c.006.277.11.542.292.75a.525.525 0 0 0 .258.242l.383-.117a.7.7 0 0 0 0-.733.967.967 0 0 1 .317-.65c.083.095.14.21.167.333.033.122.086.238.158.342a.208.208 0 0 0 .133-.167 8.392 8.392 0 0 0-1.666-1.767.283.283 0 0 1-.125-.05c.075.2.275.575 0 .7a1.133 1.133 0 0 0-.509-.408 1.725 1.725 0 0 0-.608-.317c.067.367.633.342.633.784a1.825 1.825 0 0 1-.483-.317.458.458 0 0 0 .233.467.3.3 0 0 1 .409-.042.442.442 0 0 1 .433-.158 1.717 1.717 0 0 0-.117.433.525.525 0 0 1-.141.042zm3.333 6.016l-.017-.008a.25.25 0 0 1 .275.058V12a8.283 8.283 0 0 0-1.008-3.95.625.625 0 0 1-.158-.075c-.125-.108-.359-.425-.5-.35-.142.075-.209.392-.4.5a1.3 1.3 0 0 0-.517.308 1.25 1.25 0 0 0-.142.834c-.072.27-.188.525-.341.758-.08.176-.122.366-.125.558a.575.575 0 0 0 .225.25.833.833 0 0 1 0 .75c.001.3.098.592.275.834.123.045.26.045.383 0 .208.041.117.083.208.233a.517.517 0 0 0 .667.383.833.833 0 0 1 .7-.125c.11-.17.28-.295.475-.35z"
        }),
        freeship: (global.React || guac.react).createElement("path", {
            d: "M18.545 9.375L21 12.75v4.219h-1.636c0 1.4-1.097 2.531-2.455 2.531s-2.454-1.13-2.454-2.531h-4.91c0 1.4-1.096 2.531-2.454 2.531s-2.455-1.13-2.455-2.531H3V7.687C3 6.76 3.736 6 4.636 6h11.455v3.375h2.454zm-.409 1.266h-2.045v2.109h3.649l-1.604-2.11zM7.091 18.234c.679 0 1.227-.565 1.227-1.265s-.548-1.266-1.227-1.266c-.68 0-1.227.565-1.227 1.266 0 .7.548 1.265 1.227 1.265zm9.818 0c.68 0 1.227-.565 1.227-1.265s-.548-1.266-1.227-1.266-1.227.565-1.227 1.266c0 .7.548 1.265 1.227 1.265z"
        }),
        ok: (global.React || guac.react).createElement("path", {
            d: "M3.111 12c0 4.91 3.98 8.889 8.889 8.889 4.91 0 8.889-3.98 8.889-8.889 0-4.91-3.98-8.889-8.889-8.889A8.888 8.888 0 0 0 3.111 12zM2 12C2 6.477 6.476 2 12 2c5.523 0 10 4.476 10 10 0 5.523-4.476 10-10 10-5.523 0-10-4.476-10-10zm6.458.426l1.539 1.659 5.607-4.876a.854.854 0 0 1 1.181.06.796.796 0 0 1-.062 1.146l-6.15 5.352c-.39.34-.99.3-1.33-.067l-2.028-2.188a.796.796 0 0 1 .062-1.147.854.854 0 0 1 1.18.06z"
        }),
        tumblr: (global.React || guac.react).createElement("path", {
            d: "M11.93 2c5.476 0 9.93 4.455 9.93 9.93 0 5.476-4.454 9.93-9.93 9.93-5.475 0-9.93-4.454-9.93-9.93C2 6.455 6.455 2 11.93 2zm3.358 14.664h-.001V14.96c-.54.356-1.085.533-1.631.533-.308 0-.58-.072-.82-.215a1.003 1.003 0 0 1-.41-.466c-.068-.177-.06-.54-.06-1.165V10.88h2.497V8.952h-2.496V6.455H10.83c-.069.556-.195 1.016-.379 1.375-.182.361-.425.67-.728.928-.302.257-.794.454-1.218.592v1.53h1.468v3.786c0 .494.052.87.155 1.13.104.26.289.506.557.736.268.23.592.408.971.534.379.124.671.186 1.164.186.435 0 .839-.044 1.213-.13.375-.088.794-.242 1.254-.458z"
        }),
        tripadvisor: (global.React || guac.react).createElement("path", {
            d: "M15.717 11.402a1.21 1.21 0 0 1 1.204 1.212c0 .668-.547 1.215-1.213 1.213a1.223 1.223 0 0 1-1.212-1.217 1.217 1.217 0 0 1 1.22-1.208zm0 1.827a.615.615 0 0 0-.004-1.23.61.61 0 0 0-.617.62c0 .338.276.61.62.61zm-7.49-3.573a2.989 2.989 0 0 1 2.999 3.004 2.994 2.994 0 0 1-5.989.041c-.028-1.714 1.378-3.06 2.99-3.045zm.048 4.813a1.857 1.857 0 0 0 1.767-1.858 1.848 1.848 0 0 0-1.855-1.85 1.85 1.85 0 0 0-1.862 1.851 1.859 1.859 0 0 0 1.95 1.857zM11.975 2c5.508 0 9.974 4.466 9.974 9.974 0 5.51-4.466 9.975-9.975 9.975C6.466 21.949 2 17.483 2 11.974 2 6.466 6.466 2 11.974 2zm5.733 13.847c.853-.54 1.414-1.303 1.655-2.282.274-1.116.065-2.15-.592-3.094-.032-.047-.029-.087-.015-.134.126-.444.34-.846.59-1.229l.104-.158c.002-.004 0-.01 0-.024-.059-.003-.118-.01-.177-.01-.738 0-1.475 0-2.213-.003a.306.306 0 0 1-.153-.044 8.453 8.453 0 0 0-2.004-.913 8.056 8.056 0 0 0-1.235-.29c-.568-.079-1.423-.192-2.492-.11-.438.03-.872.088-1.304.172a9.2 9.2 0 0 0-1.31.355 8.12 8.12 0 0 0-1.69.82.193.193 0 0 1-.097.031H4.51c-.013 0-.025-.002-.038-.003v.03c.063.087.131.17.188.26a4.2 4.2 0 0 1 .527 1.134.147.147 0 0 1-.016.11c-.273.388-.471.81-.585 1.27-.04.158-.197.81-.068 1.486.113.725.414 1.362.898 1.91a3.699 3.699 0 0 0 1.829 1.14c.51.141 1.028.171 1.552.088a3.73 3.73 0 0 0 2.345-1.336c.003-.003.008-.004.026-.013l.79 1.18.805-1.197c.07.08.134.154.201.226a3.772 3.772 0 0 0 1.844 1.088 3.7 3.7 0 0 0 2.9-.46zm-9.537-4.445a1.212 1.212 0 1 1 .014 2.426 1.224 1.224 0 0 1-1.217-1.215 1.22 1.22 0 0 1 1.203-1.211zm.015 1.833a.62.62 0 0 0-.002-1.242.61.61 0 0 0-.62.617c0 .354.27.625.622.625zm7.467-3.568a2.978 2.978 0 0 1 3.06 2.992 2.984 2.984 0 0 1-2.995 2.998c-1.652.006-2.997-1.348-2.997-3.006a2.99 2.99 0 0 1 2.932-2.984zm.135 4.803a1.858 1.858 0 0 0 1.78-1.86 1.85 1.85 0 0 0-1.856-1.85c-.992-.018-1.86.802-1.86 1.854 0 1.04.86 1.897 1.936 1.856zM13.17 9.886c-.662.606-1.047 1.365-1.194 2.254-.144-.9-.54-1.665-1.214-2.279-.676-.614-1.476-.932-2.386-.987 1.218-.511 2.493-.704 3.804-.679 1.154.022 2.275.223 3.338.696-.896.067-1.685.386-2.348.995z"
        }),
        spotify: (global.React || guac.react).createElement("path", {
            d: "M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.087 14.124a.578.578 0 0 0-.145-.771 1.57 1.57 0 0 0-.15-.095 9.556 9.556 0 0 0-1.843-.847 11.556 11.556 0 0 0-3.6-.575c-.414.026-.833.037-1.247.073-.742.071-1.478.192-2.204.364a1.09 1.09 0 0 0-.17.047.57.57 0 0 0-.343.655.556.556 0 0 0 .557.458c.092-.004.183-.018.273-.04a15.23 15.23 0 0 1 2.698-.364c.702-.028 1.406.01 2.102.116a8.807 8.807 0 0 1 3.192 1.124c.05.03.1.059.153.084.265.118.578.02.727-.23zm1.146-2.546a.727.727 0 0 0-.244-.996l-.109-.066a11.116 11.116 0 0 0-2.298-1.025 14.135 14.135 0 0 0-4.87-.662c-.774.026-1.544.122-2.301.287-.31.07-.615.15-.916.24a.705.705 0 0 0-.495.666.727.727 0 0 0 .43.698c.167.06.351.06.52 0a11.52 11.52 0 0 1 3.232-.455c.827 0 1.652.077 2.465.23a11.04 11.04 0 0 1 2.986.989c.207.105.407.225.607.338a.727.727 0 0 0 .993-.244zm.109-2.647a.87.87 0 0 0 1.309-.746c-.026-.061-.026-.123-.026-.185a.865.865 0 0 0-.447-.585 11.19 11.19 0 0 0-1.996-.906c-1.69-.56-3.456-.86-5.237-.887-.727-.022-1.456 0-2.181.065-.683.058-1.361.163-2.03.313-.269.062-.541.13-.803.218a.85.85 0 0 0-.578.833.87.87 0 0 0 .625.814.902.902 0 0 0 .498 0c.273-.072.542-.149.819-.207.745-.155 1.501-.25 2.261-.283a16.727 16.727 0 0 1 3.895.222c.904.15 1.79.394 2.644.727.428.174.845.377 1.247.607z"
        }),
        cart1: (global.React || guac.react).createElement("path", {
            d: "M9.838 18.545c0 .394-.136.735-.406 1.023-.271.288-.592.432-.962.432s-.69-.144-.961-.432a1.443 1.443 0 0 1-.406-1.023c0-.393.135-.734.406-1.022.27-.288.59-.432.961-.432.37 0 .691.144.962.432.27.288.406.629.406 1.022zm9.572 0c0 .394-.135.735-.406 1.023-.27.288-.59.432-.961.432-.37 0-.691-.144-.962-.432a1.443 1.443 0 0 1-.406-1.023c0-.393.136-.734.406-1.022.27-.288.591-.432.962-.432.37 0 .69.144.961.432.27.288.406.629.406 1.022zm1.368-12.363V12a.73.73 0 0 1-.177.483.664.664 0 0 1-.432.244L9.015 14.114c.093.454.139.72.139.795 0 .121-.086.364-.257.727h9.83c.185 0 .345.072.48.216a.721.721 0 0 1 .203.512.721.721 0 0 1-.203.511.638.638 0 0 1-.48.216H7.786a.638.638 0 0 1-.481-.216.721.721 0 0 1-.203-.511c0-.084.028-.203.085-.358.057-.156.114-.292.171-.41.057-.117.134-.268.23-.454s.151-.297.165-.335l-1.89-9.352h-2.18a.638.638 0 0 1-.481-.216A.721.721 0 0 1 3 4.727c0-.197.068-.367.203-.511A.638.638 0 0 1 3.683 4H6.42a.63.63 0 0 1 .513.25c.05.068.096.161.139.278.042.118.07.216.085.296a63.658 63.658 0 0 1 .107.63h12.831c.185 0 .345.073.48.216a.721.721 0 0 1 .204.512z"
        }),
        download: (global.React || guac.react).createElement("path", {
            d: "M21 16.125v3.75c0 .621-.465 1.125-1.038 1.125H4.038C3.465 21 3 20.496 3 19.875v-3.75C3 15.504 3.465 15 4.038 15h5.03l1.46 1.594c.401.422.92.656 1.472.656.552 0 1.07-.234 1.471-.656L14.942 15h5.02c.573 0 1.038.504 1.038 1.125zm-4.154 2.413a.697.697 0 0 0-.692-.692.697.697 0 0 0-.692.692c0 .38.313.693.692.693a.697.697 0 0 0 .692-.693zm2.77 0a.697.697 0 0 0-.693-.692.697.697 0 0 0-.692.692c0 .38.313.693.692.693a.697.697 0 0 0 .692-.693zM17.483 8.96a.68.68 0 0 1-.151.758l-4.846 4.846a.663.663 0 0 1-.487.205.663.663 0 0 1-.487-.205L6.667 9.718a.68.68 0 0 1-.151-.758.7.7 0 0 1 .638-.422h2.77V3.692c0-.378.313-.692.691-.692h2.77c.378 0 .692.314.692.692v4.846h2.77a.7.7 0 0 1 .637.422z"
        }),
        chevronRight: (global.React || guac.react).createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M16.258 12.242l.242.258-.242-.258L16.5 12l-.242.242zm0 0L8.493 3.993l7.765 8.25-7.765 7.764 7.765-7.765z"
        }),
        chevronUp: (global.React || guac.react).createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M12.25 8.242L12.006 8l.242.242.258-.242-.258.242zm0 0l7.764 7.765-7.765-7.765L4 16.007l8.25-7.765z"
        }),
        chevronLeft: (global.React || guac.react).createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M7.742 11.758L7.5 11.5l.242.258L7.5 12l.242-.242zm0 0l7.765 8.249-7.765-8.25 7.765-7.764-7.765 7.765z"
        }),
        chevronDown: (global.React || guac.react).createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M11.765 15.765l.242.242-.242-.242-.258.242.258-.242zm0 0L20.014 8l-8.25 7.765L4 8l7.765 7.765z"
        }),
        arrowRight: (global.React || guac.react).createElement("path", {
            d: "M13.569 8.28075L16.664 11.3767L5.75 11.3767C5.75 11.3767 5 11.3767 5 12.1267C5 12.8767 5.75 12.8767 5.75 12.8767L16.645 12.8767L13.566 15.9737C13.274 16.2677 13.275 16.7437 13.569 17.0357C13.863 17.3267 14.338 17.3257 14.63 17.0317L19.52 12.1097L14.63 7.21975C14.337 6.92675 13.862 6.92675 13.569 7.21975C13.276 7.51175 13.276 7.98775 13.569 8.28075Z"
        }),
        close: (global.React || guac.react).createElement("path", {
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "1.5",
            d: "M12 12l-8 8 8-8 8 8-8-8zm0 0l8-8-8 8-8-8 8 8z"
        }),
        money: (global.React || guac.react).createElement("path", {
            d: "M13.455 7H4v9.495h16V7h-6.545zm-8.727 7.03V7.71l2.022.02h12.544l-.021 1.734v6.3H4.754l-.026-1.734zm4-2.283c0 1.99 1.444 3.652 3.272 3.652 1.828 0 3.273-1.662 3.273-3.652 0-1.99-1.445-3.652-3.273-3.652s-3.273 1.662-3.273 3.652zm.727 0c0-1.639 1.16-2.922 2.545-2.922s2.546 1.283 2.546 2.922c0 1.639-1.16 2.921-2.546 2.921-1.385 0-2.545-1.282-2.545-2.921zm7.036-.182a.79.79 0 0 0 .782.785.789.789 0 0 0 .782-.785.79.79 0 0 0-.782-.786.79.79 0 0 0-.782.786zm-10.505 0c0 .407.336.744.741.744a.749.749 0 0 0 .742-.744.749.749 0 0 0-.742-.745.748.748 0 0 0-.741.745z"
        }),
        person: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            d: "M9.705 12.462a4.498 4.498 0 0 1-2.382-3.967A4.5 4.5 0 0 1 11.818 4a4.5 4.5 0 0 1 4.494 4.495c0 1.716-.966 3.21-2.382 3.967 3.167.889 5.528 3.724 5.705 7.128a.398.398 0 0 1-.793.026c-.2-3.691-3.258-6.61-6.995-6.626h-.059c-3.736.015-6.795 2.935-6.995 6.626A.398.398 0 0 1 4.4 20a.397.397 0 0 1-.4-.41c.177-3.404 2.538-6.24 5.705-7.128zm2.172-.29a7.845 7.845 0 0 0-.118 0 3.682 3.682 0 0 1-3.62-3.677 3.682 3.682 0 0 1 3.679-3.678 3.682 3.682 0 0 1 3.677 3.678 3.682 3.682 0 0 1-3.618 3.677z"
        }),
        questionBubble: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            d: "M5.84 19.72c.365-.381 1.155-1.502 1.394-2.935C6.156 16.138 4 14.11 4 11.164 4 7.482 7.433 4 12.159 4c4.726 0 8.357 3.184 8.357 7.164 0 3.98-3.857 7.113-8.407 7.113a7.525 7.525 0 0 1-1.89-.248c-.448.564-1.95 1.691-4.378 1.691zm1.394-.796c1.353-.199 2.387-1.21 2.736-1.691.298.116 1.144.348 2.139.348 4.875 0 7.71-3.383 7.71-6.417 0-3.781-3.581-6.468-7.66-6.468-4.08 0-7.463 3.035-7.463 6.468 0 2.746 2.156 4.626 3.234 5.223 0 0 .1 1.194-.696 2.537zm4.427-4.129v-1.044h.896v1.044h-.896zm.547-3.631c.647-.796 1.294-.946 1.294-1.89 0-.946-.846-1.095-1.343-1.095-.498 0-1.344.298-1.344 1.542H9.92c.017-.763.487-2.288 2.239-2.288 2.188 0 2.437 1.74 2.238 2.487-.199.746-1.194 1.293-1.592 1.89-.276.415-.298.946-.248 1.095h-.896c-.033-.315.03-1.105.547-1.741z"
        }),
        okCalendar: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            d: "M6.78 4.71c0-.313.255-.71.653-.71h.766c.34 0 .68.369.68.71v.68h6.27v-.68c0-.341.284-.71.624-.71h.766c.255 0 .68.312.68.71v.68h2.086c.425 0 .695.313.695.625v13.82c0 .369-.241.681-.695.681H4.681c-.426 0-.681-.284-.681-.681V6.015c0-.284.227-.624.68-.624h2.1v-.682zm12.525 4.455H4.681v10.67h14.624V9.165zM8.88 6.015v.738c0 .397-.398.68-.681.68h-.766c-.227 0-.653-.311-.653-.652v-.766H4.681v2.469h14.624v-2.47H17.22v.767c0 .369-.34.653-.68.653h-.767c-.397 0-.624-.37-.624-.653v-.766H8.88zM7.46 4.625V6.78h.738V4.624H7.46zm9.078 0h-.738V6.78h.738V4.624zM11.66 15.72l3.008-4.625.595.368-3.489 5.307-2.695-2.412.482-.51 2.1 1.872z"
        }),
        location: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            d: "M12.246 20C8.934 16.164 7 12.092 7 9.213 7 6.334 9.349 4 12.246 4c2.897 0 5.246 2.334 5.246 5.213 0 2.88-1.967 6.984-5.246 10.787zm0-1.115c2.869-3.336 4.59-7.131 4.59-9.657 0-2.525-2.055-4.572-4.59-4.572-2.535 0-4.59 2.047-4.59 4.573 0 2.525 1.692 6.291 4.59 9.656zm0-7.016a2.295 2.295 0 1 1 0-4.59 2.295 2.295 0 0 1 0 4.59zm0-.656a1.64 1.64 0 1 0 0-3.279 1.64 1.64 0 0 0 0 3.28z"
        }),
        digitalProduct: (global.React || guac.react).createElement("path", {
            d: "M21.521 11.297c0 1.627-.727 2.793-1.92 3.542-.411.259-.85.448-1.288.58-.265.08-.474.125-.657.146h-1.208v-.805l1.152.004a4.517 4.517 0 0 0 1.573-.607c.97-.61 1.543-1.527 1.543-2.86 0-1.9-1.54-3.462-3.463-3.462h-.413l-.11-.227c-1.196-2.465-4.182-3.5-6.712-2.309-1.566.746-2.677 2.39-2.75 4.083l-.021.475-.465-.098c-1.332-.28-2.63.57-2.896 1.86l-.02.128c-.049.143-.06.276-.06.517 0 1.14.476 1.824 1.295 2.2.49.226.997.301 1.35.296h1.542v.805h-1.53a4.021 4.021 0 0 1-1.699-.369C3.67 14.693 3 13.731 3 12.264c0-.323.018-.523.08-.644l.008-.08a3.25 3.25 0 0 1 3.414-2.632c.24-1.83 1.472-3.527 3.171-4.336 2.85-1.342 6.208-.242 7.666 2.458a4.269 4.269 0 0 1 4.182 4.267zm-9.663 7.162v-7.081h.805v7.08l1.729-1.728.569.57-2.7 2.7-2.701-2.7.57-.57 1.728 1.729z"
        }),
        yelpLogoPositive: (global.React || guac.react).createElement("g", {
            fill: "none",
            fillRule: "evenodd",
            transform: "translate(2 2)"
        }, (global.React || guac.react).createElement("rect", {
            width: 20,
            height: 20,
            fill: "#CCC",
            fillRule: "nonzero",
            rx: 3
        }), (global.React || guac.react).createElement("rect", {
            width: 18,
            height: 18,
            x: 1,
            y: 1,
            fill: "#FFF",
            fillRule: "nonzero",
            rx: 2
        }), (global.React || guac.react).createElement("path", {
            fill: "#D32323",
            d: "M11.543 11.84l2.43.789a.527.527 0 0 1 .313.727 4.554 4.554 0 0 1-1.216 1.556.525.525 0 0 1-.782-.125l-1.354-2.167a.527.527 0 0 1 .609-.78zm2.47-1.55l-2.455.699a.527.527 0 0 1-.582-.8l1.43-2.119a.523.523 0 0 1 .78-.096c.502.44.9.985 1.163 1.597a.527.527 0 0 1-.336.72zM8.275 4.33A7.363 7.363 0 0 1 9.602 4.1a.525.525 0 0 1 .565.525v4.8a.525.525 0 0 1-.982.264L6.793 5.532a.525.525 0 0 1 .22-.736c.405-.194.828-.35 1.262-.466zM7.49 14.365l1.71-1.897a.525.525 0 0 1 .91.37l-.081 2.547a.527.527 0 0 1-.616.5 4.56 4.56 0 0 1-1.83-.74.527.527 0 0 1-.093-.78zm-.919-4.728l2.297 1.132a.527.527 0 0 1-.103.985l-2.48.606a.525.525 0 0 1-.659-.452 4.501 4.501 0 0 1 .207-1.965.527.527 0 0 1 .738-.306z"
        })),
        yelpLogoNegative: (global.React || guac.react).createElement("g", {
            fill: "none",
            fillRule: "evenodd",
            transform: "translate(2 2)"
        }, (global.React || guac.react).createElement("path", {
            fill: "#D32323",
            fillRule: "nonzero",
            d: "M3.846 0h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v12.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H3.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 18.464C.139 17.976 0 17.491 0 16.155V3.844c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4C2.024.139 2.509 0 3.845 0z"
        }), (global.React || guac.react).createElement("path", {
            fill: "#FFF",
            d: "M8.256 4.267c.439-.118.888-.196 1.342-.231a.531.531 0 0 1 .57.53V9.42a.531.531 0 0 1-.992.267L6.758 5.482a.531.531 0 0 1 .222-.744c.41-.196.837-.354 1.276-.471zM6.533 9.633l2.323 1.134a.533.533 0 0 1-.105.995l-2.507.625a.531.531 0 0 1-.666-.458 4.551 4.551 0 0 1 .209-1.987.533.533 0 0 1 .746-.309zm.93 4.78l1.728-1.917a.531.531 0 0 1 .927.373l-.09 2.582a.533.533 0 0 1-.621.507 4.611 4.611 0 0 1-1.851-.75.533.533 0 0 1-.094-.795zm4.093-2.553l2.462.807a.533.533 0 0 1 .315.735 4.604 4.604 0 0 1-1.222 1.565.531.531 0 0 1-.791-.127l-1.369-2.191a.533.533 0 0 1 .605-.789zm2.502-1.567l-2.482.711a.533.533 0 0 1-.59-.808l1.458-2.143a.529.529 0 0 1 .792-.102c.506.445.908.997 1.175 1.616a.533.533 0 0 1-.353.726z"
        })),
        plus: (global.React || guac.react).createElement("path", {
            d: "M13 11h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z",
            fill: "currentColor",
            fillRule: "nonzero"
        }),
        minus: (global.React || guac.react).createElement("path", {
            fill: "currentColor",
            fillRule: "nonzero",
            d: "M5 13.5h14v-2H5z"
        }),
        yotpo: (global.React || guac.react).createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, (global.React || guac.react).createElement("ellipse", {
            cx: "11.826",
            cy: "11.936",
            fill: "#2F84ED",
            fillRule: "nonzero",
            rx: "10.54",
            ry: "10.872"
        }), (global.React || guac.react).createElement("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M5.935 7.728h1.242l.955 1.753.924-1.753h1.178l-1.56 2.805v1.499H7.527v-1.467L5.935 7.728zm3.949 2.168c0-1.308 1.05-2.2 2.26-2.2 1.21 0 2.261.924 2.261 2.2 0 1.307-1.05 2.232-2.26 2.232-1.21-.032-2.261-.925-2.261-2.232zm3.343 0c0-.67-.414-1.212-1.114-1.212-.7 0-1.115.542-1.115 1.212 0 .67.414 1.211 1.115 1.211.732 0 1.114-.542 1.114-1.211zm2.229-1.212h-1.114v-.956h3.375v.956h-1.115v3.348h-1.146V8.684zM7.4 16.751H6.286v-4.305h1.592c1.146 0 1.783.734 1.783 1.69 0 .957-.637 1.69-1.783 1.69H7.4v.925zm.414-1.913c.51 0 .7-.287.7-.702 0-.414-.19-.733-.7-.733H7.4v1.435h.414zm2.038-.224c0-1.307 1.05-2.2 2.26-2.2 1.21 0 2.261.925 2.261 2.2 0 1.308-1.05 2.232-2.26 2.232-1.21-.032-2.261-.924-2.261-2.232zm3.375 0c0-.67-.414-1.211-1.114-1.211-.7 0-1.115.542-1.115 1.211 0 .67.414 1.212 1.115 1.212.7 0 1.114-.542 1.114-1.212zm1.146 1.595c0-.383.287-.638.605-.638.319 0 .605.255.605.638 0 .382-.286.637-.605.637-.318-.032-.605-.287-.605-.637z"
        })),
        whatsApp: (global.React || guac.react).createElement("svg", {
            viewBox: "0 0 496 497"
        }, (global.React || guac.react).createElement("defs", null, (global.React || guac.react).createElement("linearGradient", {
            id: "a",
            x1: "247.32",
            x2: "247.32",
            y1: "446.09",
            y2: "39.9",
            gradientUnits: "userSpaceOnUse"
        }, (global.React || guac.react).createElement("stop", {
            offset: "0",
            stopColor: "#20b038"
        }), (global.React || guac.react).createElement("stop", {
            offset: "1",
            stopColor: "#60d66a"
        })), (global.React || guac.react).createElement("linearGradient", {
            id: "b",
            x1: "247.32",
            x2: "247.32",
            y1: "453.37",
            y2: "32.61",
            gradientUnits: "userSpaceOnUse"
        }, (global.React || guac.react).createElement("stop", {
            offset: "0",
            stopColor: "#f9f9f9"
        }), (global.React || guac.react).createElement("stop", {
            offset: "1",
            stopColor: "#fff"
        }))), (global.React || guac.react).createElement("path", {
            d: "M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"
        }), (global.React || guac.react).createElement("path", {
            fill: "url(#a)",
            d: "M45.13 446.09l28.57-104.3a200.82 200.82 0 0 1-26.88-100.62c0-111 90.36-201.27 201.34-201.27A201.35 201.35 0 0 1 449.5 241.32c0 111-90.37 201.28-201.33 201.28h-.09a201.31 201.31 0 0 1-96.21-24.49z"
        }), (global.React || guac.react).createElement("path", {
            fill: "url(#b)",
            d: "M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"
        }), (global.React || guac.react).createElement("path", {
            fill: "#fff",
            d: "M196.07 153.94c-3.91-8.68-8-8.85-11.73-9-3-.14-6.51-.13-10-.13a19.15 19.15 0 0 0-13.89 6.52c-4.78 5.22-18.24 17.82-18.24 43.46s18.67 50.42 21.28 53.9 36.05 57.77 89 78.66c44 17.36 53 13.91 62.53 13s30.83-12.61 35.18-24.78 4.34-22.59 3-24.77-4.78-3.48-10-6.08-30.83-15.22-35.61-16.95-8.25-2.61-11.73 2.61-13.45 16.94-16.5 20.42-6.08 3.92-11.29 1.31-22-8.11-41.9-25.86c-15.5-13.82-26-30.87-29-36.09s-.32-8 2.29-10.63c2.34-2.34 5.21-6.09 7.82-9.13s3.47-5.21 5.21-8.69.87-6.52-.44-9.13-11.35-28.34-15.98-38.64z"
        })),
        chat: (global.React || guac.react).createElement("g", {
            fill: "currentColor"
        }, (global.React || guac.react).createElement("rect", {
            x: 4,
            y: 6,
            width: 16,
            height: 10.222,
            rx: 1.129
        }), (global.React || guac.react).createElement("path", {
            d: "M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"
        })),
        direction: (global.React || guac.react).createElement("svg", {
            width: "24",
            height: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, (global.React || guac.react).createElement("path", {
            d: "M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.962.962 0 01-.17-.023.716.716 0 01-.557-.705V13.75H4.746a.716.716 0 01-.704-.557.736.736 0 01.045-.477.687.687 0 01.33-.341L18.962 5.1a.683.683 0 01.33-.08c.204 0 .375.073.511.217a.678.678 0 01.21.392.69.69 0 01-.073.448z",
            fill: "currentColor"
        })),
        alert: (global.React || guac.react).createElement("g", {
            fillRule: "evenodd",
            fill: "currentColor"
        }, (global.React || guac.react).createElement("path", {
            d: "M12.005 7.75C12.4208 7.75 12.7579 8.08421 12.7579 8.5V13.1C12.7579 13.5158 12.4208 13.85 12.005 13.85C11.5892 13.85 11.2521 13.5158 11.2521 13.1V8.5C11.2521 8.08421 11.5892 7.75 12.005 7.75ZM12.78 15.43C12.78 15.858 12.433 16.21 12.005 16.21C11.577 16.21 11.23 15.858 11.23 15.43C11.23 15.0019 11.577 14.66 12.005 14.66C12.433 14.66 12.78 15.0019 12.78 15.43Z"
        }), (global.React || guac.react).createElement("path", {
            d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        })),
        uxcoreComments: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            d: "M7 2v6H1v15l4.3-3.18H17v-5.98h1.7l4.3 3.08V2H7zm8 15.8H4.68L3 19.05V10h4v3.86h8v3.94zm6-4.72l-1.69-1.22H9V4h12v9.08zM11 8a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z",
            clipRule: "evenodd"
        }),
        android: (global.React || guac.react).createElement("path", {
            d: "M8.11966 8.92126H15.9515C15.8971 7.71857 15.3093 6.59347 14.3326 5.82296L15.1802 4.7795C15.3328 4.54166 15.2576 4.23205 15.0107 4.08117C14.7686 3.93286 14.446 3.99326 14.2817 4.21763L13.324 5.38952C12.4952 5.15007 11.6099 5.15007 10.7811 5.38952L9.79792 4.24171C9.70024 4.09126 9.52672 3.99997 9.34022 4.00091C9.23774 3.99906 9.13713 4.02708 9.05203 4.08117C8.79967 4.24102 8.73143 4.5641 8.89945 4.80357L9.74707 5.82296C8.77308 6.59637 8.18337 7.71907 8.11966 8.92126ZM14.4513 6.9788C14.7462 6.9788 14.9853 7.20521 14.9853 7.48448C14.9853 7.76376 14.7462 7.99016 14.4513 7.99016C14.1564 7.99016 13.9173 7.76376 13.9173 7.48448C13.9173 7.20521 14.1564 6.9788 14.4513 6.9788ZM9.6284 6.9788C9.77003 6.9788 9.90584 7.03208 10.006 7.12691C10.1061 7.22175 10.1624 7.35037 10.1624 7.48448C10.1624 7.76376 9.92331 7.99016 9.6284 7.99016C9.33349 7.99016 9.09441 7.76376 9.09441 7.48448C9.09441 7.35037 9.15067 7.22175 9.25081 7.12691C9.35096 7.03208 9.48678 6.9788 9.6284 6.9788ZM7.12797 9.84432C7.08088 9.36562 6.65667 8.99959 6.14899 8.99959C5.6413 8.99959 5.21709 9.36562 5.17 9.84432V13.5607C5.21709 14.0394 5.6413 14.4054 6.14899 14.4054C6.65667 14.4054 7.08088 14.0394 7.12797 13.5607V9.84432ZM15.9431 9.84432H8.11119V15.8403C8.11119 16.1195 8.35027 16.3459 8.64518 16.3459H9.08594V19.1553C9.13303 19.634 9.55723 20 10.0649 20C10.5726 20 10.9968 19.634 11.0439 19.1553V16.3459H13.0103V19.1553C13.0575 19.634 13.4817 20 13.9893 20C14.497 20 14.9212 19.634 14.9683 19.1553V16.3459H15.4176C15.7124 16.3459 15.9515 16.1195 15.9515 15.8403L15.9431 9.84432ZM18.8843 9.84432C18.8371 9.36562 18.413 8.99959 17.9053 8.99959C17.3976 8.99959 16.9733 9.36562 16.9262 9.84432V13.5607C16.9733 14.0394 17.3976 14.4054 17.9053 14.4054C18.413 14.4054 18.8371 14.0394 18.8843 13.5607V9.84432Z"
        }),
        apple: (global.React || guac.react).createElement("g", {
            fillRule: "evenodd"
        }, (global.React || guac.react).createElement("path", {
            d: "M15.189 7.86576C13.8721 7.76812 12.7542 8.60169 12.1309 8.60169C11.498 8.60169 10.523 7.88686 9.48868 7.90625C8.13105 7.92616 6.87945 8.69672 6.17934 9.91223C4.76892 12.3602 5.81929 15.9877 7.19319 17.9744C7.86474 18.9453 8.66663 20.0388 9.71925 19.9989C10.7322 19.9594 11.1159 19.3441 12.3406 19.3441C13.5648 19.3441 13.9101 19.9989 14.9816 19.9792C16.0722 19.9594 16.7632 18.9886 17.4301 18.0123C18.202 16.8857 18.5196 15.7948 18.5382 15.7374C18.5139 15.7288 16.4126 14.9218 16.3913 12.5003C16.3723 10.4758 18.0436 9.50259 18.12 9.45542C17.1708 8.05841 15.7053 7.90392 15.189 7.86576Z"
        }), (global.React || guac.react).createElement("path", {
            d: "M14.3762 6.55453C14.9356 5.8784 15.3121 4.93673 15.2088 4C14.4032 4.03194 13.4296 4.53661 12.8518 5.21213C12.3348 5.81081 11.8805 6.76953 12.004 7.6867C12.9012 7.75637 13.8174 7.23084 14.3762 6.55453Z"
        })),
        msOutlook: (global.React || guac.react).createElement("g", {
            fillRule: "evenodd"
        }, (global.React || guac.react).createElement("path", {
            d: "M13.9835 7.39233V10.522L15.0771 11.2106C15.1059 11.2189 15.1686 11.2196 15.1973 11.2106L19.9043 8.03695C19.9043 7.6614 19.554 7.39233 19.3562 7.39233H13.9835Z"
        }), (global.React || guac.react).createElement("path", {
            d: "M13.9835 11.6898L14.9815 12.3753C15.1222 12.4787 15.2917 12.3753 15.2917 12.3753C15.1227 12.4787 19.905 9.30221 19.905 9.30221V15.0544C19.905 15.6807 19.504 15.9431 19.0534 15.9431H13.9827V11.6898H13.9835Z"
        }), (global.React || guac.react).createElement("path", {
            d: "M8.81548 10.2466C8.47511 10.2466 8.20414 10.4065 8.00401 10.7255C7.80387 11.045 7.70357 11.4673 7.70357 11.9931C7.70357 12.5267 7.80387 12.9486 8.00401 13.2586C8.20414 13.5695 8.4668 13.7237 8.79124 13.7237C9.12615 13.7237 9.39165 13.5728 9.58751 13.2714C9.78336 12.9695 9.882 12.5507 9.882 12.0152C9.882 11.4569 9.78693 11.0224 9.59654 10.7117C9.40591 10.4018 9.14588 10.2466 8.81548 10.2466Z"
        }), (global.React || guac.react).createElement("path", {
            d: "M10.313 13.9949C9.91937 14.5128 9.40596 14.7724 8.77275 14.7724C8.15546 14.7724 7.65322 14.5214 7.26435 14.0194C6.87621 13.5172 6.68153 12.8633 6.68153 12.0568C6.68153 11.2054 6.87859 10.5166 7.27339 9.99078C7.66819 9.46476 8.19088 9.20188 8.84192 9.20188C9.45658 9.20188 9.95431 9.45288 10.3334 9.95679C10.713 10.4602 10.9029 11.1234 10.9029 11.9475C10.9036 12.7941 10.7066 13.4768 10.313 13.9949ZM4.08 5.80289V18.0471L13.3944 20V4L4.08 5.80289Z"
        })),
        google: (global.React || guac.react).createElement("path", {
            d: "M12.312 11.28V13.4667H17.4075C17.2516 14.6933 16.853 15.5911 16.2463 16.2222C15.5011 16.9867 14.3398 17.8222 12.312 17.8222C9.17493 17.8222 6.72247 15.2267 6.72247 12.0089C6.72247 8.79111 9.17493 6.19556 12.312 6.19556C14.0018 6.19556 15.241 6.88 16.151 7.76L17.6502 6.22222C16.385 4.96 14.6864 4 12.312 4C8.01369 4 4.4 7.59111 4.4 12C4.4 16.4089 8.01369 20 12.312 20C14.6345 20 16.385 19.2178 17.7542 17.76C19.1581 16.32 19.6 14.2844 19.6 12.6489C19.6 12.1422 19.5654 11.6711 19.4874 11.28H12.312Z"
        }),
        paperclip: (global.React || guac.react).createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.6 11.6L17 13l-5.9 5.9c-1.3 1.3-2.9 1.9-4.6 1.9-1.7 0-3.2-.7-4.5-2-2.5-2.5-2.5-6.6 0-9.2l7.1-7.1.1-.1c1.9-2 5.1-2 7.1 0l.1.1c2 2 2 5.1 0 7.1l-6.9 6.6c-.7.7-1.6 1.1-2.5 1.2h-.3c-.9 0-1.7-.3-2.2-.9-.7-.7-1-1.6-.9-2.6.1-.9.5-1.8 1.2-2.5l5.5-5.8L11.7 7l-5.5 5.9c-.4.4-.6.8-.6 1.3 0 .2 0 .7.3 1 .3.3.7.3 1 .3.4 0 .9-.3 1.3-.6L15 8.2C16.2 7 16.2 5.1 15 4l-.1-.1c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-6.5 6.5c-1.8 1.8-1.8 4.6 0 6.3 1.8 1.7 4.6 1.8 6.3 0l5.9-5.8z"
        })
    };
    const {
        PUBLISH: li
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes, {
        HEADER: ni,
        RSS: ii
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.widgetTypes, {
        GRAYSCALE: si
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.imageFilters;
    let ci = 0;

    function gi(e) {
        return this.merge({
            tag: "svg"
        }, e)
    }

    function pi({
        icon: e,
        size: t = "medium",
        rotate: a = !1,
        iconPack: o = {},
        color: r = !1,
        minTarget: l = !1,
        ...n
    }) {
        const i = Object.assign({}, ri, o);
        let s = this.mapPropValue("iconSize", t),
            c = !1;
        return i[e] ? (r && (e = i[e + "Color"] ? e + "Color" : e), l && "number" == typeof s && s < Rt && (c = (Rt - s) / 2 + "px", s = "40px"), this.merge({
            tag: "svg",
            children: i[e],
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: s,
            height: s,
            style: {
                color: "inherit",
                display: "inline-block",
                padding: c,
                transition: a && "transform .33s ease-in-out",
                transform: a && `rotate(${a}deg)`,
                verticalAlign: "middle"
            }
        }, n)) : (console.warn(`Incorrect icon name ${e} - the issue is probably in ${this.base.widgetPreset}`), !1)
    }

    function ui({
        animation: e,
        icon: t = "hamburger",
        ...o
    }) {
        const r = {
            verticalAlign: "top"
        };
        if (e) {
            const {
                animationIcon: t,
                iconPack: l,
                animationStyle: n,
                keyFrame: i
            } = e;
            return this.merge({
                tag: "div",
                children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, a({
                    icon: t,
                    iconPack: l,
                    style: { ...n,
                        ...r
                    }
                }, o)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, i))
            })
        }
        return this.Icon(this.merge({
            icon: t,
            style: r
        }, o))
    }

    function di(e) {
        const t = {
            top: "50%",
            transform: "translateY(-50%)",
            left: 8
        };
        return this.Icon(this.merge({
            style: {
                "@xs-only": { ...t
                },
                "@sm-only": { ...t
                }
            }
        }, e))
    }

    function hi(e) {
        const t = "neutral" === this.base.category;
        return this.Icon(this.merge({
            color: t,
            style: {
                color: "highContrast"
            }
        }, e))
    }

    function bi(e) {
        return this.Icon(this.merge({
            size: "medium",
            icon: "close",
            minTarget: !0,
            style: {
                color: "highContrast",
                ":hover": {
                    color: "highlight"
                },
                cursor: "pointer",
                lineHeight: "1.3em",
                fontStyle: "normal"
            }
        }, e))
    }

    function mi({
        src: e,
        alt: t,
        useSrcSet: a = !0,
        imageData: o,
        backgroundImage: r,
        imageSrcCallback: l = (e => e),
        lazyLoad: n = !0,
        ...i
    }) {
        const {
            renderMode: s
        } = this.base && this.base.context || {}, {
            widgetType: c,
            order: g,
            isHomepage: d
        } = this.base, h = l(f(o, e, r)), m = b(h), y = a ? u(m) : "", w = "undefined" != typeof window, C = n && c !== ni && !(0 === g && !d) && s === li && !w && p(h) ? {
            src: b(l(f({ ...o,
                quality: 1
            }, e, r))),
            "data-srcLazy": m,
            "data-srcSetLazy": y
        } : {
            src: m,
            srcSet: y
        };
        return this.merge({
            tag: "img",
            style: {
                maxWidth: "100%",
                width: "auto",
                marginHorizontal: "auto",
                marginVertical: "0",
                verticalAlign: "middle"
            },
            alt: t || (global._ || guac.lodash).get(o, "alt") || "image" + ++ci,
            ...C
        }, (global._ || guac.lodash).omit(i, "title"))
    }

    function yi(e) {
        return this.Image(this.merge({
            style: {
                borderRadius: "50%",
                width: 223,
                height: 223,
                objectFit: "cover"
            }
        }, e))
    }

    function fi({
        hasOverhang: e,
        ...t
    }) {
        const a = {
            display: "block",
            margin: "0 auto",
            maxHeight: e ? 88 : 80
        };
        return this.Image(this.merge({
            style: {
                maxWidth: "100%",
                objectFit: "contain",
                "@xs-only": {
                    maxWidth: 224,
                    ...a
                },
                "@sm-only": { ...a
                }
            }
        }, t))
    }

    function wi({
        children: e,
        ...t
    }) {
        const a = [e],
            {
                renderMode: o
            } = this.base && this.base.context || {};
        if (o === li && e && "BACKGROUND_IMAGE_RENDERED" === e.props["data-aid"]) {
            const {
                imageData: t,
                src: o,
                backgroundImage: r,
                imageSrcCallback: l = (e => e)
            } = e.props, n = l(f(t, o, r));
            a.push((global.React || guac.react).createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: d(n)
                }
            }))
        }
        return this.merge({
            tag: "figure",
            children: a,
            style: {
                position: "relative",
                display: "inline-block",
                margin: 0
            }
        }, t)
    }

    function Ci(e) {
        const t = function(e) {
                const t = {
                    clear: "both",
                    maxWidth: "50%"
                };
                switch (e) {
                    case "left":
                        return Object.assign({
                            float: "left",
                            marginRight: "medium"
                        }, t);
                    case "right":
                        return Object.assign({
                            float: "right",
                            marginLeft: "medium"
                        }, t);
                    default:
                        return null
                }
            }(e.alignment),
            {
                widgetType: a = null
            } = this.base,
            o = {
                display: a === ii ? "block" : "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
                marginLeft: "0",
                marginTop: "0",
                marginRight: "0",
                marginBottom: "medium",
                textAlign: "center"
            };
        return t && (o["@md"] = t), this.merge({
            tag: "figure",
            style: o
        }, e)
    }

    function Ei(e) {
        return this.merge({
            tag: "figcaption",
            typography: "DetailsAlpha",
            style: {
                backgroundColor: "section",
                paddingVertical: "xxsmall",
                paddingHorizontal: "xsmall"
            }
        }, e, {
            section: "alt"
        })
    }

    function Ti(e) {
        return this.merge({
            tag: "div",
            typography: "BodyAlpha",
            style: {
                textAlign: "center",
                paddingVertical: 0,
                margin: "0 auto",
                overflowWrap: "break-word",
                wordWrap: "break-word",
                "@sm": {
                    maxWidth: 700
                }
            }
        }, e)
    }

    function Pi(e) {
        return this.merge({
            category: "accent",
            section: "overlay",
            typography: "BodyAlpha",
            featured: !0,
            style: {
                backgroundColor: "transparent",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: 0,
                "> *": {
                    backgroundColor: "section",
                    padding: "xsmall",
                    flexBasis: "auto"
                },
                "> :first-child": {
                    flexGrow: 1
                },
                "> :last-child": {
                    flexGrow: 0
                }
            }
        }, e)
    }

    function Ri(e) {
        return this.merge({
            tag: "video"
        }, e)
    }

    function vi({
        tag: e,
        level: t
    }) {
        const a = e && (e.match(/\d+/) || [])[0];
        return t || parseInt(a, 10)
    }
    const {
        sectionTypes: xi
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Si = {
        wordWrap: "break-word",
        overflowWrap: "break-word"
    };

    function ki({
        children: e,
        tag: t,
        level: a = 4,
        saveOriginalText: o,
        wrapWithTag: r,
        ...l
    }) {
        const {
            widgetType: n,
            widgetId: i,
            renderMode: s,
            order: c
        } = this.base, g = this.mapPropValue("lineHeightLevel", a), p = o ? {
            originalText: e
        } : {}, u = "undefined" != typeof window && "PUBLISH" === s;
        let d = t ? parseInt(t.substring(1), 10) : a,
            h = !1;
        const b = vi({
            tag: t,
            level: a
        });
        if (this.prevWidgetId !== i && d && 1 !== d && (!this.hasH1 || u) && "HEADER" !== n && e && d <= 4)
            if (u) {
                const e = document.querySelector("h1");
                (!e || e.getAttribute("data-promoted-from") === "" + d && e.getAttribute("data-order") === "" + c) && (h = !0)
            } else h = !0;
        h && (l["data-promoted-from"] = d, l["data-order"] = c, d = 1), this.prevWidgetId = i, this.hasH1 = this.hasH1 || 1 === d;
        const m = !l.richtext && "string" == typeof e && e.includes("\n") ? "pre-line" : void 0;
        if (l.dangerouslySetInnerHTML) {
            const {
                __html: e
            } = l.dangerouslySetInnerHTML;
            l.dangerouslySetInnerHTML = {
                __html: r ? `<${r}>${e}</${r}>` : e
            }
        } else l.children = e && r ? (global.React || guac.react).createElement(r, null, e) : e;
        return this.merge({
            tag: d ? "h" + d : t,
            typography: {
                1: "HeadingAlpha",
                2: "HeadingBeta",
                3: "HeadingGamma",
                4: "HeadingDelta",
                5: "BodyAlpha",
                6: "DetailsBeta"
            }[b],
            featured: Boolean({
                5: !0,
                6: !0
            }[b]),
            role: "heading",
            "aria-level": d,
            style: { ...Si,
                lineHeight: g,
                marginHorizontal: "0",
                marginVertical: "0",
                whiteSpace: m
            },
            ...p
        }, (global._ || guac.lodash).omit(l, ["layout", "tag", "font"]))
    }

    function Ii(e) {
        return this.Heading(this.merge({
            tag: "h2",
            typography: "HeadingBeta"
        }, e))
    }

    function Li(e) {
        return this.Heading(this.merge({
            tag: "h3",
            typography: "HeadingGamma"
        }, e))
    }

    function Mi(e) {
        return this.Heading(this.merge({
            tag: "h4",
            typography: "HeadingDelta"
        }, e))
    }

    function Ai(e) {
        return this.HeadingMinor(this.merge({
            featured: !0
        }, e))
    }

    function _i({
        noWidow: e,
        linkify: t,
        linkStyle: a,
        phoneProps: o,
        urlProps: r,
        emailProps: l,
        children: n,
        ...i
    }) {
        let s;
        return "string" == typeof n && (!i.richtext && n.includes("\n") && (s = "pre-line"), t ? n = (global.Core || guac["@wsb/guac-widget-core"]).utils.linkify(n, {
            linkStyle: a,
            phoneProps: o,
            urlProps: r,
            emailProps: l
        }) : e && (i.dangerouslySetInnerHTML = {
            __html: n.replace(/\s(?=[^\s]*$)/, "&nbsp;")
        })), i.dangerouslySetInnerHTML || (i.children = n), "h1" === i.tag && (this.hasH1 = !0), this.merge({
            tag: "p",
            typography: "BodyAlpha",
            style: { ...Si,
                lineHeight: "1.5",
                marginTop: "0",
                marginBottom: "0",
                whiteSpace: s
            }
        }, i)
    }

    function Oi(e) {
        return this.Text(this.merge({
            typography: "BodyBeta"
        }, e, {
            style: {
                textShadow: this.base.section === xi.OVERLAY ? "0px 2px 10px rgba(0, 0, 0, 0.3)" : "none"
            }
        }))
    }

    function Bi(e) {
        return this.Text(e)
    }

    function Di(e) {
        return this.Text(this.merge({
            typography: "DetailsAlpha"
        }, e))
    }

    function Hi(e) {
        return this.Details(this.merge({
            typography: "DetailsBeta"
        }, e))
    }

    function Ni({
        priceState: e = "featured",
        ...t
    }) {
        return this.Text(this.merge({
            tag: "div",
            typography: "BodyAlpha",
            [e]: !0
        }, t))
    }

    function Ui(e) {
        return this.Price(this.merge({
            typography: "BodyBeta"
        }, e))
    }

    function zi(e) {
        return this.HeadingMajor(e)
    }

    function Xi(e) {
        return this.merge({
            tag: "label",
            typography: "BodyAlpha",
            featured: !0,
            style: { ...Si
            }
        }, e)
    }

    function Wi({
        children: e,
        ...t
    }) {
        return this.merge({
            tag: "label",
            children: (global.React || guac.react).createElement("strong", null, e),
            style: { ...Si
            },
            typography: "DetailsAlpha",
            featured: !0
        }, t)
    }

    function Vi(e) {
        return this.Details(this.merge({
            typography: "DetailsAlpha"
        }, e))
    }

    function Fi(e) {
        return this.Text(this.merge({
            typography: "BodyAlpha",
            featured: !0
        }, e))
    }

    function ji(e) {
        return this.Heading(this.merge({
            tag: "h1",
            typography: "HeadingAlpha"
        }, e))
    }

    function Gi(e) {
        return this.Text(this.merge({
            typography: "BodyBeta",
            featured: !0
        }, e))
    }

    function qi(e) {
        return this.Heading(this.merge({
            tag: "h2",
            typography: "BodyBeta",
            featured: !0
        }, e))
    }

    function $i(e) {
        return this.Text(e)
    }

    function Yi(e) {
        return this.Heading(this.merge({
            level: 3,
            typography: "HeadingGamma"
        }, e))
    }

    function Ki(e) {
        return this.Heading(this.merge({
            level: 3,
            typography: "BodyAlpha",
            featured: !0
        }, e))
    }

    function Zi(e) {
        return this.Text(this.merge({
            typography: "BodyAlpha",
            alert: !0,
            role: "alertdialog",
            "aria-live": "assertive"
        }, e))
    }

    function Qi(e) {
        return this.Text(this.merge({
            typography: "BodyBeta",
            featured: !0
        }, e))
    }

    function Ji(e) {
        return this.Text(this.merge({
            typography: "BodyAlpha",
            style: {
                paddingHorizontal: "medium",
                paddingBottom: 0,
                cursor: "auto"
            }
        }, e))
    }

    function es(e) {
        return this.merge({
            tag: "table",
            typography: "DetailsAlpha",
            style: {
                display: "flex",
                flexDirection: "column",
                borderWidth: "xsmall",
                borderStyle: "solid",
                borderColor: "input",
                borderRadius: "medium"
            }
        }, e)
    }

    function ts(e) {
        return this.LabelMinor(this.merge({
            tag: "th",
            style: {
                flex: 1,
                textAlign: "left",
                verticalAlign: "middle",
                paddingHorizontal: "small",
                paddingVertical: "xxsmall",
                borderRightWidth: "xsmall",
                borderRightStyle: "solid",
                borderColor: "input",
                ":last-child": {
                    borderColor: "transparent"
                }
            }
        }, e))
    }

    function as(e) {
        return this.merge({
            tag: "tr",
            style: {
                display: "flex",
                flexDirection: "row",
                borderBottomWidth: "xsmall",
                borderBottomStyle: "solid",
                borderColor: "input",
                ":last-child": {
                    borderColor: "transparent"
                }
            }
        }, e)
    }

    function os(e) {
        return this.merge({
            tag: "td",
            style: {
                flex: 1,
                paddingHorizontal: "small",
                paddingVertical: "xxsmall",
                borderRightWidth: "xsmall",
                borderRightStyle: "solid",
                borderColor: "input",
                textAlign: "left",
                overflowWrap: "break-word",
                ":last-child": {
                    borderColor: "transparent"
                }
            }
        }, e)
    }

    function rs(e, t, a) {
        return Array.isArray(a) ? a.map((a => e.mapPropValue(t, a))) : e.mapPropValue(t, a)
    }

    function ls(e, t) {
        return rs(e, "colorDial", t)
    }

    function ns(e, t) {
        return rs(e, "color", t)
    }

    function is(e, t) {
        return rs(e, "backgroundColor", t)
    }

    function ss(e, t) {
        return rs(e, "borderColor", t)
    }
    const {
        Color: cs
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils, gs = new cs("rgba(255,255,255,1)"), ps = new cs("rgba(0,0,0,1)"), us = new cs("rgba(69,90,100,1)"), ds = new cs("#ff0000"), hs = new cs("rgba(0, 0, 0, 0.3)"), bs = new cs("rgba(255, 255, 255, 0.3)"), {
        Color: ms
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils, ys = {}, fs = .02;

    function ws({
        threshold: e,
        backgroundRgb: t,
        hue: a,
        saturation: o,
        initialValue: r,
        isCurrentValueAccessible: l
    }) {
        for (let n = r; n <= 100; n++) {
            const r = ms.contrastRatio(t, ms.hsvToRgb(a, o, n));
            if (l && r < e + fs) return n - 1;
            if (!l && r >= e + fs) return n
        }
    }

    function Cs(e, t, a, o = 1) {
        if (ms.contrastRatio(a, t) >= e + fs) return [a];
        const [r, l, n] = a.toHsv();
        return function(e, t, a, o) {
            const r = [e, t.toHex(), o].join();
            if (!(r in ys)) {
                const l = [],
                    n = t.toRgb(!1, !1),
                    i = a.toRgb(!1, !1),
                    s = ws({
                        threshold: e,
                        backgroundRgb: n,
                        hue: o,
                        saturation: 0,
                        initialValue: 0,
                        isCurrentValueAccessible: ms.contrastRatio(i, n) >= e + fs
                    });
                if ("number" != typeof s) return [];
                l.push(s);
                for (let a = 1; a <= 100; a++) {
                    const r = ws({
                        threshold: e,
                        backgroundRgb: n,
                        hue: o,
                        saturation: a,
                        initialValue: l[a - 1],
                        isCurrentValueAccessible: t.isLight()
                    });
                    if (!r) break;
                    l.push(r)
                }
                ys[r] = l
            }
            return ys[r]
        }(e, t, a, r).map(((e, t) => {
            return {
                saturation: t,
                value: e,
                distance: (a = {
                    saturation: t,
                    value: e
                }, o = {
                    saturation: l,
                    value: n
                }, Math.pow(a.saturation - o.saturation, 2) + Math.pow(a.value - o.value, 2))
            };
            var a, o
        })).sort(((e, t) => e.distance - t.distance)).slice(0, o).map((e => ms.fromHSV(r, e.saturation, e.value)))
    }
    const {
        Color: Es,
        accessibility: Ts
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils, {
        PRIMARY: Ps
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.categoryTypes, {
        DEFAULT_WEBSITE_FONT_SCALES: Rs
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.fontScales, {
        OVERLAY: vs
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.sectionTypes, {
        AA: xs
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.accessibility.CONFORMANCE_LEVEL;

    function Ss() {
        const {
            fontSize: e,
            fontFamily: t,
            fontScale: a,
            forceBreakpoint: o
        } = this.base, r = Me.call(this, e, o) * Rs[a], l = rs(this, "fontDial", t + ".weight");
        return Ts.textContrastThresholds(r, l)[xs]
    }

    function ks(e) {
        const t = ls(this, "background"),
            a = Ss.call(this);
        if (Es.contrastRatio(e, t) < a) {
            const o = (global._ || guac.lodash).first(Cs(a, t, e));
            if (o) return o
        }
        return e
    }

    function Is(e, t, a = 55) {
        return !(!e && !t) && Math.abs(e.lightness - t.lightness) <= a
    }
    var Ls = {
        __proto__: null,
        colorSection: function() {
            const [e, t] = ls(this, ["background", "multiplier"]);
            return e.setAlpha(100).contrast(60 * t)
        },
        colorBackground: function() {
            return ls(this, "background")
        },
        colorError: function() {
            const [e, t, a] = ls(this, ["background", "multiplier", "error"]);
            return a.contrastWith(e, 50 * t, !0)
        },
        colorPrimary: function() {
            const [e, t, a] = ls(this, ["primary", "background", "multiplier"]);
            return e.contrastWith(t, 40 * a, !0)
        },
        colorAccent: function() {
            const [e, t, a] = ls(this, ["accent", "background", "multiplier"]);
            return e.contrastWith(t, 40 * a, !0)
        },
        colorNeutral: function() {
            const [e, t, a] = ls(this, ["neutral", "background", "multiplier"]);
            return e.contrastWith(t, 40 * a, !0)
        },
        colorHighContrast: function() {
            const [e, t] = ls(this, ["background", "multiplier"]);
            return e.setAlpha(100).contrast(90 * t)
        },
        colorLowContrast: function() {
            const [e, t] = ls(this, ["background", "multiplier"]);
            return e.setAlpha(100).contrast(62 * t)
        },
        colorUltraLowContrast: function() {
            const [e, t] = ls(this, ["background", "multiplier"]);
            return e.setAlpha(100).contrast(20 * t)
        },
        colorHighlight: function() {
            const [e, t, a, o] = ls(this, ["background", "multiplier", "highlight", "primary"]), {
                category: r,
                section: l
            } = this.base;
            return r === Ps || l === vs ? a.contrastWith(e, 50 * t, !0) : ks.call(this, o)
        },
        colorHighlightHover: function() {
            const [e, t, a, o] = ls(this, ["background", "multiplier", "highlight", "primary"]), {
                section: r
            } = this.base;
            if (r === vs) return o.contrastWith(e, 40 * t, !0);
            let l = a.contrastWith(e, 70 * t, !0);
            return l = l.lightness > 90 ? l.darken(20) : l, l = l.lightness < 10 ? l.lighten(20) : l, l
        },
        colorHighlightActive: function() {
            const [e, t, a] = ls(this, ["background", "multiplier", "highlight"]);
            return a.contrastWith(e, 80 * t, !0)
        },
        colorHighlightDisabled: function() {
            return ns(this, "highlight").setAlpha(70)
        },
        colorAction: function() {
            const e = is(this, "action"),
                t = ls(this, "multiplier");
            return e.contrast(80 * t)
        },
        colorActionHover: function() {
            return ns(this, "action")
        },
        colorActionActive: function() {
            return ns(this, "action")
        },
        colorActionDisabled: function() {
            return ns(this, "action").setAlpha(70)
        },
        colorActionContrast: function() {
            const e = is(this, "actionContrast"),
                t = ls(this, "multiplier");
            return e.contrast(100 * t)
        },
        colorActionContrastHover: function() {
            return ns(this, "actionContrast")
        },
        colorActionContrastActive: function() {
            return ns(this, "actionContrast")
        },
        colorActionContrastDisabled: function() {
            return ns(this, "actionContrast").setAlpha(70)
        },
        colorInput: function() {
            const e = is(this, "input"),
                t = ls(this, "multiplier");
            return e.setAlpha(100).contrast(70 * t)
        },
        colorInputHover: function() {
            return ns(this, "input")
        },
        colorInputActive: function() {
            return ns(this, "input")
        },
        colorInputDisabled: function() {
            return ns(this, "input").setAlpha(70)
        },
        colorInputPlaceholder: function() {
            return ns(this, "inputDisabled")
        },
        colorInputHighlight: function() {
            const e = is(this, "input"),
                t = ls(this, "multiplier");
            return ns(this, "highlight").contrastWith(e, 30 * t, !0)
        },
        colorLightnessSimilarity: Is,
        colorBrandLividContrast: function() {
            return is(this, "brandLivid").lightness > 50 ? ps : gs
        }
    };
    const {
        Color: Ms
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils, {
        categoryTypes: As,
        sectionTypes: _s
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    var Os = {
        __proto__: null,
        colorDial: function(e) {
            const {
                colorDials: t = []
            } = this.base;
            let a = !1;
            if (t.some((t => {
                    const o = t.getMeta && t.getMeta(e) || t.meta && t.meta[e];
                    return o && (a = new Ms(o)), a
                })), !a) throw new Error(`Unable to load color dial: '${e}'`);
            return a
        },
        colorDialBackground: function() {
            const {
                category: e,
                section: t
            } = this.base, a = this.mapPropValue("colorDial", e);
            if (e === As.PRIMARY) {
                if (t === _s.ALT) {
                    const [, , e] = a.toHsv();
                    return e < 25 ? a.lighten(5) : a.darken(5)
                }
                return t === _s.OVERLAY ? a.setAlpha(50) : a
            }
            return e === As.ACCENT ? t === _s.ALT ? a.darken(8) : t === _s.OVERLAY ? a.setAlpha(50) : a : e === As.NEUTRAL ? t === _s.ALT ? a.darken(3) : t === _s.OVERLAY ? a.setAlpha(50) : a : a
        },
        colorDialHighlight: function() {
            const {
                category: e
            } = this.base, t = ls(this, As.PRIMARY);
            return e === As.PRIMARY ? t.isDark() ? ls(this, As.NEUTRAL) : ls(this, As.ACCENT) : t
        },
        colorDialOutline: function() {
            const e = ls(this, "background");
            return e.lightness > 90 && e.alpha > 80
        },
        colorDialMultiplier: function() {
            return (100 - ls(this, "background").alpha) / 50 + 1
        },
        colorDialError: function() {
            return ds
        }
    };
    const {
        Color: Bs
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils;

    function Ds() {
        const [e, t] = ls(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(50 * t)
    }

    function Hs() {
        const [e, t] = ls(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(90 * t)
    }

    function Ns() {
        const [e, t] = ls(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(25 * t)
    }
    var Us = { ...Ls,
        ...Os,
        ...{
            __proto__: null,
            backgroundColorSection: function() {
                return ls(this, "background")
            },
            backgroundColorSectionOverlay: function() {
                const e = ls(this, "background"),
                    t = 100 === e.alpha ? 90 : 90 === e.alpha ? 50 : 30;
                return e.setAlpha(t)
            },
            backgroundColorSectionOverlaySoft: function() {
                return ls(this, "background").setAlpha(10)
            },
            backgroundColorSectionContrast: function() {
                const [e, t] = ls(this, ["background", "multiplier"]);
                return e.setAlpha(100).contrast(90 * t)
            },
            backgroundColorSectionLowContrast: function() {
                const [e, t] = ls(this, ["background", "multiplier"]);
                return e.setAlpha(100).contrast(50 * t)
            },
            backgroundColorSectionUltraLowContrast: function() {
                const [e, t] = ls(this, ["background", "multiplier"]);
                return e.setAlpha(100).contrast(15 * t)
            },
            backgroundColorNeutral: function() {
                return ls(this, "neutral")
            },
            backgroundColorNeutralOverlay: function() {
                const [e, t] = ls(this, ["neutral", "background"]), a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
                return e.setAlpha(a)
            },
            backgroundColorAccentOverlay: function() {
                const [e] = ls(this, ["background"]), t = 100 === e.alpha ? 90 : 90 === e.alpha ? 50 : 30;
                return ps.setAlpha(t)
            },
            backgroundColorPrimary: function() {
                return ls(this, "primary")
            },
            backgroundColorPrimaryOverlay: function() {
                const [e, t] = ls(this, ["primary", "background"]), a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
                return e.setAlpha(a)
            },
            backgroundColorModalOverlay: function() {
                return ps.setAlpha(60)
            },
            backgroundColorAccent: function() {
                return ls(this, "accent")
            },
            backgroundColorAction: function() {
                const [e, t, a] = ls(this, ["highlight", "background", "multiplier"]);
                return e.contrastWith(t, 10 * a)
            },
            backgroundColorActionHover: function() {
                const [e, t] = ls(this, ["background", "multiplier"]), a = is(this, "action");
                return (a.lightness > 10 ? a.lighten(10) : a.darken(10)).contrastWith(e, 15 * t)
            },
            backgroundColorActionActive: function() {
                const e = is(this, "action");
                return e.lightness > 10 ? e.darken(15) : e.lighten(15)
            },
            backgroundColorActionDisabled: function() {
                return is(this, "action").setAlpha(70)
            },
            backgroundColorActionContrast: function() {
                const [e, t] = ls(this, ["background", "multiplier"]);
                return e.setAlpha(100).contrast(100 * t)
            },
            backgroundColorActionContrastHover: function() {
                const [e, t] = ls(this, ["background", "multiplier"]);
                return e.setAlpha(100).contrast(85 * t)
            },
            backgroundColorActionContrastActive: function() {
                return is(this, "actionContrast")
            },
            backgroundColorActionContrastDisabled: function() {
                return is(this, "actionContrast").setAlpha(70)
            },
            backgroundColorInput: function() {
                const [e, t] = ls(this, ["outline", "background"]);
                return e ? t.setAlpha(100).setLightness(100) : t.setAlpha(0)
            },
            backgroundColorInputHover: function() {
                return is(this, "input")
            },
            backgroundColorInputActive: function() {
                return is(this, "input")
            },
            backgroundColorInputDisabled: function() {
                return is(this, "input").setAlpha(70)
            },
            backgroundColorNavSolid: function() {
                return ls(this, "background").setAlpha(100)
            },
            backgroundColorSearchMobileDark: function() {
                return new Bs("rgb(255, 255, 255)").setAlpha(15)
            },
            backgroundColorSearchMobileGray: function() {
                return new Bs("rgb(0, 0, 0)").setAlpha(8)
            },
            backgroundColorSearchMobileLight: function() {
                return new Bs("rgb(245, 245, 245)").setAlpha(100)
            },
            backgroundColorBrandLivid: function() {
                const e = ls(this, "background"),
                    {
                        alpha: t,
                        lightness: a
                    } = e;
                return a + (100 - t) >= 85 || 0 === t || 100 === a ? us : gs
            },
            backgroundColorBrandLividHover: function() {
                const e = is(this, "brandLivid");
                return e.lightness > 50 ? e.darken(5) : e.lighten(5)
            }
        },
        ...{
            __proto__: null,
            borderColorLowContrast: Ds,
            borderColorHighContrast: Hs,
            borderColorUltraLowContrast: Ns,
            borderColorLowContrastOverlay: function() {
                const e = Ds.call(this);
                return e.setAlpha(.5 * e.alpha)
            },
            borderColorHighContrastOverlay: function() {
                const e = Hs.call(this);
                return e.setAlpha(.5 * e.alpha)
            },
            borderColorULowContrastOverlay: function() {
                const e = Ns.call(this);
                return e.setAlpha(.5 * e.alpha)
            },
            borderColorSection: function() {
                const e = ls(this, "background");
                return e.alpha < 100 ? e.isLight() ? hs : bs : e.contrast(10 * ls(this, "multiplier"), !0)
            },
            borderColorPrimary: function() {
                const [e, t, a] = ls(this, ["primary", "background", "multiplier"]);
                return e.contrastWith(t, 40 * a, !0)
            },
            borderColorAccent: function() {
                const [e, t, a] = ls(this, ["accent", "background", "multiplier"]);
                return e.contrastWith(t, 40 * a, !0)
            },
            borderColorNeutral: function() {
                const [e, t, a] = ls(this, ["neutral", "background", "multiplier"]);
                return e.contrastWith(t, 40 * a, !0)
            },
            borderColorInput: function() {
                const [e, t] = ls(this, ["outline", "background"]);
                return e ? is(this, "input").contrastWith(t, 10 * ls(this, "multiplier"), !0) : t.setAlpha(100).setLightness(t.isDark() ? 100 : 0)
            },
            borderColorInputDisabled: function() {
                return ss(this, "input").setAlpha(70)
            },
            borderColorInputError: function() {
                const [e, t, a] = ls(this, ["error", "background", "multiplier"]);
                return e.contrastWith(t.setAlpha(100), 20 * a, !0)
            },
            borderColorHighlight: function() {
                const [e, t, a] = ls(this, ["background", "multiplier", "highlight"]);
                return a.contrastWith(e, 50 * t, !0)
            },
            borderColorHighlightDisabled: function() {
                return ss(this, "highlight").setAlpha(70)
            },
            borderColorAction: function() {
                const e = is(this, "action"),
                    t = ls(this, "multiplier");
                return e.contrast(80 * t)
            },
            borderColorActionBg: function() {
                return is(this, "action")
            },
            borderColorActionContrastBg: function() {
                return is(this, "actionContrast")
            }
        },
        ...{
            __proto__: null,
            fillPrimaryOverlay: function() {
                const [e, t] = ls(this, ["primary", "background"]), a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
                return e.setAlpha(a)
            }
        }
    };
    const zs = {
        useSecondBackground: !1,
        useSubtagline: !0,
        useWelcomeLine: !1,
        useAddress: !1,
        useCropBackground: !1,
        useBigLogo: !1,
        useSocialLinks: !1,
        useTextBackground: !1,
        coverImagePivot: {
            isSectionControl: !0,
            sectionControlLabel: "cover",
            showOnTop: !0,
            showThumbnail: !0
        },
        headerTreatmentsConfig: {
            headerTreatments: [o, r, l, n],
            defaultHeaderTreatment: o
        },
        usePhone: !0,
        phoneOnSecondaryPage: !1,
        showOverlayOpacityControls: !1,
        hasNavBackgroundToggle: !1,
        secondBackgroundArguments: {},
        socialLinksOnSecondaryPage: !0,
        useMediaTypeSelector: !1,
        showVideosTab: !0,
        useSlideshow: !1,
        useForegroundImage: !1,
        disablePaintjobs: !1,
        hasLogoAlign: !1,
        hasLogoBackground: !0,
        showAddressDefault: !1,
        useVideoEmbed: !0
    };

    function Xs(e, t) {
        return "function" == typeof e ? e.call(this, t) : e
    }

    function Ws({
        richtext: e,
        fontSizeMap: t,
        children: a,
        dangerouslySetInnerHTML: o = {}
    }) {
        return t ? (a = a || o.__html, (global._ || guac.lodash).reduce(t, ((t, o, r) => {
            if ((global._ || guac.lodash).startsWith(r, "@")) t[r] = Ws({
                fontSizeMap: o,
                children: a
            });
            else {
                let l;
                "string" == typeof a && e && (l = Fe(a)), l = l || (global._ || guac.lodash).get(a, "length", 0);
                const [n = 0, i = Number.MAX_VALUE] = o;
                l >= n && l <= i && (t.fontSize = r)
            }
            return t
        }), {})) : {}
    }

    function Vs(e, t) {
        var a;
        return (global._ || guac.lodash).merge({}, Xs.call(this, this.mappedValues.typographyMapping[e], t), Xs.call(this, null === (a = this.mappedValues.typographyOverrides) || void 0 === a ? void 0 : a[e], t) || {}, Xs.call(this, this.mappedValues["typography" + e], t) || {}, t.fontSizeMap ? function(e) {
            return {
                style: Ws(e)
            }
        }(t) : {})
    }

    function Fs(e, t, a = {}) {
        return e && (t.typography && t.typography.toLowerCase()) !== (e && e.toLowerCase()) && Vs.call(this, t.typography, t)[e.toLowerCase()] || a
    }

    function js(e, t) {
        return e ? e.split(/(?=[A-Z])/).reduce(((e, a) => (global._ || guac.lodash).merge({}, e, Vs.call(this, a, t))), {}) : {}
    }
    const Gs = {
            secondary: ["shape"],
            spotlight: ["shape", "decoration", "shadow"],
            external: ["shape"]
        },
        qs = ["Active", "Featured", "Disabled", "Alert", "Expired"],
        $s = {
            style: {
                font: "primary",
                color: "highContrast",
                fontSize: "xlarge",
                fontWeight: "normal",
                letterSpacing: "normal",
                textTransform: "none"
            }
        };
    class Ys extends(global.Core || guac["@wsb/guac-widget-core"]).UX2.Theme {
        constructor() {
            super(), ue(), this.mappedValues = { ...this.mappedValues,
                spacingXxsmall: "4px",
                spacingXsmall: "8px",
                spacingSmall: "16px",
                spacingMedium: "24px",
                spacingLarge: "32px",
                spacingXlarge: "40px",
                spacingXlarger: "48px",
                spacingXxlarge: "56px",
                spacingXxlarger: "64px",
                spacingXxxlarge: "72px",
                borderNone: "0",
                borderXsmall: "1px",
                borderSmall: "2px",
                borderMedium: "4px",
                borderLarge: "6px",
                borderXlarge: "8px",
                fontSizeLevel1: "xxxlarge",
                fontSizeLevel2: "xxlarge",
                fontSizeLevel3: "xlarge",
                fontSizeLevel4: "large",
                fontSizeLevel5: "medium",
                fontSizeLevel6: "small",
                lineHeightLevel1: "1.05",
                lineHeightLevel2: "1.125",
                lineHeightLevel3: "1.25",
                lineHeightLevel4: "1.25",
                lineHeightLevel5: "1.25",
                lineHeightLevel6: "1.25",
                iconSizeXsmall: 8,
                iconSizeSmall: 16,
                iconSizeMedium: 28,
                iconSizeLarge: 32,
                iconSizeXlarge: 48,
                iconSizeXxlarge: 72,
                iconSizeButton: "24pxem",
                transitionDurationMedium: ".3s",
                boxShadowCard: "0 0 28px -3px #bbb",
                borderRadius: e => this.mapPropValue("border", e),
                borderWidth: e => this.mapPropValue("border", e),
                borderBottomWidth: e => this.mapPropValue("border", e),
                borderTopWidth: e => this.mapPropValue("border", e),
                borderRightWidth: e => this.mapPropValue("border", e),
                borderLeftWidth: e => this.mapPropValue("border", e),
                padding: e => this.mapPropValue("spacing", e),
                maxWidth: e => this.mapPropValue("width", e),
                margin: e => this.mapPropValue("spacing", e),
                top: e => this.mapPropValue("spacing", e),
                left: e => this.mapPropValue("spacing", e),
                right: e => this.mapPropValue("spacing", e),
                bottom: e => this.mapPropValue("spacing", e),
                colorDialAccent: new(global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.Color("rgb(22, 22, 22)"),
                themeFontMultipliers: {},
                ...Us,
                ...ze,
                typographyMapping: {
                    LogoAlpha: { ...$s
                    },
                    HeadingAlpha: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "xxxlarge",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            lineHeight: 1.2
                        }
                    },
                    HeadingBeta: {
                        style: {
                            font: "primary",
                            fontSize: "xxlarge",
                            color: "highContrast",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingGamma: { ...$s
                    },
                    HeadingDelta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    BodyAlpha: {
                        style: {
                            font: "alternate",
                            color: "section",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    BodyBeta: {
                        style: {
                            font: "alternate",
                            color: "section",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    DetailsAlpha: {
                        style: {
                            font: "alternate",
                            color: "lowContrast",
                            fontSize: "small",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    DetailsBeta: {
                        style: {
                            font: "alternate",
                            color: "lowContrast",
                            fontSize: "xsmall",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    LinkAlpha: {
                        style: {
                            font: "alternate",
                            color: "highlight",
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            letterSpacing: "inherit",
                            textTransform: "inherit",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlightActive"
                            }
                        }
                    },
                    NavAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "small",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlight"
                            }
                        },
                        active: {
                            style: {
                                fontWeight: "bold",
                                color: "highlight",
                                ":hover": {
                                    color: "highlightHover"
                                }
                            }
                        }
                    },
                    SubNavAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "small",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlight"
                            }
                        },
                        active: {
                            style: {
                                fontWeight: "bold",
                                color: "highlight",
                                ":hover": {
                                    color: "highlightHover"
                                }
                            }
                        }
                    },
                    NavBeta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlight"
                            }
                        }
                    },
                    SubNavBeta: {
                        style: {
                            font: "alternate",
                            color: "section",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlight"
                            }
                        }
                    },
                    NavGamma: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "inherit",
                            ":hover": {
                                color: "highlightHover"
                            },
                            ":active": {
                                color: "highlightActive"
                            }
                        },
                        active: {
                            style: {
                                color: "highlight",
                                fontWeight: "bold"
                            }
                        }
                    },
                    ButtonAlpha: e => {
                        const {
                            size: t = "default"
                        } = e;
                        return {
                            style: {
                                font: "alternate",
                                fontWeight: "bold",
                                letterSpacing: "normal",
                                textTransform: "none",
                                textShadow: "none",
                                ...{
                                    small: {
                                        fontSize: "xsmall"
                                    },
                                    default: {
                                        fontSize: "small"
                                    },
                                    large: {
                                        fontSize: "mlarge"
                                    }
                                }[t]
                            },
                            disabled: {
                                style: {}
                            }
                        }
                    },
                    InputAlpha: e => (global._ || guac.lodash).merge(Vs.call(this, "DetailsAlpha", e), {
                        style: {
                            color: "input"
                        }
                    }),
                    Featured: e => Fs.call(this, "featured", e, {
                        style: {
                            color: "highContrast"
                        }
                    }),
                    Alert: e => Fs.call(this, "alert", e, {
                        style: {
                            color: "error"
                        }
                    }),
                    Disabled: e => Fs.call(this, "disabled", e, {
                        style: {
                            color: "inputDisabled"
                        }
                    }),
                    Expired: e => Fs.call(this, "expired", e, {
                        style: {
                            textDecoration: "line-through"
                        }
                    }),
                    Active: e => Fs.call(this, "active", e, {
                        style: {
                            fontWeight: "bold"
                        }
                    })
                },
                typography: e => (t = {}) => {
                    const [a, o = ""] = e.split("-"), r = js.call(this, o, t), l = Vs.call(this, a, t), n = a !== e ? Vs.call(this, e, t) : {};
                    return (global._ || guac.lodash).merge({}, Xs.call(this, l, t) || {}, r, n)
                }
            }
        }
        static getDefaultBackgroundFilter() {
            return (global.Core || guac["@wsb/guac-widget-core"]).constants.imageFilters.NONE
        }
        static getDefaultImageFilter() {
            return (global.Core || guac["@wsb/guac-widget-core"]).constants.imageFilters.NONE
        }
        static getDefaultImageOverlayOpacity(e, t) {
            return vt[e] || vt[t] || 0
        }
        static getDefaultImageOverlayType() {
            return gt
        }
        static getWidgetDefaultProps(e, t) {
            return {
                alignmentOption: "center",
                ..."HEADER" === e && {
                    logo: {
                        logoAlign: "left"
                    }
                }
            }
        }
        static getMutatorDefaultProps(e, t) {
            return "HEADER" === e ? zs : {}
        }
        getButtonDefaults() {
            const e = "Default" === this.base.kind ? "primary" : this.base.kind.toLowerCase(),
                t = this.constructor.config ? this.constructor.config.buttons.primary : {},
                a = (global._ || guac.lodash).omit(this.constructor.config && this.constructor.config.buttons[e] || {}, Gs[e]);
            return (global._ || guac.lodash).merge({}, t, a)
        }
        getTypographyList() {
            return (global._ || guac.lodash).uniq(Object.keys(this.mappedValues.typographyMapping).concat(Object.keys(this.mappedValues.typographyOverrides || {}))).filter((e => !qs.includes(e))).sort()
        }
        Grid() {
            return nt.apply(this, arguments)
        }
        GridCell() {
            return it.apply(this, arguments)
        }
        SplitLayout() {
            return Zt.apply(this, arguments)
        }
        Box() {
            return ea.apply(this, arguments)
        }
        HorizontalBox() {
            return Jt.apply(this, arguments)
        }
        VerticalBox() {
            return Qt.apply(this, arguments)
        }
        ContentWrap() {
            return at.apply(this, arguments)
        }
        ContentBasic() {
            return tt.apply(this, arguments)
        }
        ContentCard() {
            return $t.apply(this, arguments)
        }
        ContentCards() {
            return Kt.apply(this, arguments)
        }
        ProductCard() {
            return pa.apply(this, arguments)
        }
        HeadingPair() {
            return ot.apply(this, arguments)
        }
        CardBanner() {
            return lt.apply(this, arguments)
        }
        Rating() {
            return rt.apply(this, arguments)
        }
        Background() {
            return kt.apply(this, arguments)
        }
        MediaObject() {
            return st.apply(this, arguments)
        }
        Page() {
            return Bt.apply(this, arguments)
        }
        Widget() {
            return zt.apply(this, arguments)
        }
        WidgetBanner() {
            return Xt.apply(this, arguments)
        }
        WidgetSplit() {
            return Wt.apply(this, arguments)
        }
        HeaderBackground() {
            return _t.apply(this, arguments)
        }
        Modal() {
            return ta.apply(this, arguments)
        }
        ModalPopup() {
            return sa.apply(this, arguments)
        }
        ModalBody() {
            return ra.apply(this, arguments)
        }
        ModalOverlay() {
            return ga.apply(this, arguments)
        }
        Intro() {
            return ua.apply(this, arguments)
        }
        ZeroStateOverlay() {
            return da.apply(this, arguments)
        }
        Alert() {
            return ma.apply(this, arguments)
        }
        InputGroup() {
            return ya.apply(this, arguments)
        }
        CommerceCardOverlay() {
            return Ea.apply(this, arguments)
        }
        CommerceCardPictureContainer() {
            return Ra.apply(this, arguments)
        }
        CommerceCardContent() {
            return xa.apply(this, arguments)
        }
        CommerceCardPicture() {
            return Ia.apply(this, arguments)
        }
        CommerceCardTitle() {
            return ka.apply(this, arguments)
        }
        CommerceCardRibbon() {
            return La.apply(this, arguments)
        }
        CommerceCardPriceDisplay() {
            return Sa.apply(this, arguments)
        }
        CommerceCardItem() {
            return Ta.apply(this, arguments)
        }
        Group(e) {
            return this.merge({
                tag: "div"
            }, e)
        }
        Layout(e) {
            return this.merge(e)
        }
        Nav() {
            return Vo.apply(this, arguments)
        }
        NavFooter() {
            return tr.apply(this, arguments)
        }
        NavMenu(e) {
            return e
        }
        NavMoreMenu(e) {
            return e
        }
        NavLink() {
            return Fo.apply(this, arguments)
        }
        NavListNested() {
            return dr.apply(this, arguments)
        }
        NavLinkActive() {
            return jo.apply(this, arguments)
        }
        NavLinkDropdown() {
            return hr.apply(this, arguments)
        }
        NavLinkDropdownActive() {
            return br.apply(this, arguments)
        }
        NavMenuLink() {
            return Go.apply(this, arguments)
        }
        NavMenuLinkActive() {
            return qo.apply(this, arguments)
        }
        NavMoreMenuLink() {
            return Yo.apply(this, arguments)
        }
        NavMoreMenuLinkActive() {
            return Ko.apply(this, arguments)
        }
        NavMoreMenuLinkNested() {
            return Zo.apply(this, arguments)
        }
        NavMoreMenuLinkNestedActive() {
            return Qo.apply(this, arguments)
        }
        MobileNavLink() {
            return Jo.apply(this, arguments)
        }
        MobileNavSubLink() {
            return er.apply(this, arguments)
        }
        NavFooterLink() {
            return ar.apply(this, arguments)
        }
        NavFooterLinkActive() {
            return or.apply(this, arguments)
        }
        Hero() {
            return qa.apply(this, arguments)
        }
        HeroLink() {
            return $a.apply(this, arguments)
        }
        HeroMedia() {
            return Ya.apply(this, arguments)
        }
        HeroHeading() {
            return Ka.apply(this, arguments)
        }
        Section() {
            return lo.apply(this, arguments)
        }
        SectionBanner() {
            return go.apply(this, arguments)
        }
        SectionBannerHeading() {
            return po.apply(this, arguments)
        }
        SectionSplit() {
            return uo.apply(this, arguments)
        }
        Card() {
            return Ua.apply(this, arguments)
        }
        Content(e) {
            return this.merge(e)
        }
        ContentCardHeading() {
            return _o.apply(this, arguments)
        }
        ContentCardButton() {
            return Oo.apply(this, arguments)
        }
        ContentCardText() {
            return Ao.apply(this, arguments)
        }
        ContentCardWrapperImage() {
            return Bo.apply(this, arguments)
        }
        ContentCardImageThumbnail() {
            return Do.apply(this, arguments)
        }
        ContentOverlayCardHeading() {
            return No.apply(this, arguments)
        }
        ContentOverlayCardButton() {
            return Uo.apply(this, arguments)
        }
        ContentOverlayCardText() {
            return Ho.apply(this, arguments)
        }
        Blog() {
            return Ma.apply(this, arguments)
        }
        BlogContent() {
            return Na.apply(this, arguments)
        }
        BlogMain() {
            return Aa.apply(this, arguments)
        }
        BlogAside() {
            return Da.apply(this, arguments)
        }
        BlogAsideHeading() {
            return Ha.apply(this, arguments)
        }
        Carousel(e) {
            return this.merge({
                tag: "div"
            }, e)
        }
        PromoBanner() {
            return mr.apply(this, arguments)
        }
        ProductAsset() {
            return Or.apply(this, arguments)
        }
        ProductBanner() {
            return Br.apply(this, arguments)
        }
        ProductLabel() {
            return Hr.apply(this, arguments)
        }
        ProductName() {
            return Dr.apply(this, arguments)
        }
        ProductPrices() {
            return _r.apply(this, arguments)
        }
        CommerceOverlay() {
            return Gr.apply(this, arguments)
        }
        CommerceOverlayIcon() {
            return $r.apply(this, arguments)
        }
        CommerceOverlayWrapper() {
            return Yr.apply(this, arguments)
        }
        CommerceOverlayHeading() {
            return qr.apply(this, arguments)
        }
        CommerceOverlayMoreLink() {
            return Kr.apply(this, arguments)
        }
        CommerceOverlayPrice() {
            return Zr.apply(this, arguments)
        }
        CommerceOverlayMajorWrapper() {
            return Qr.apply(this, arguments)
        }
        CommerceOverlayMajorMoreLink() {
            return Jr.apply(this, arguments)
        }
        CommerceOverlayMediumWrapper() {
            return el.apply(this, arguments)
        }
        CommerceOverlayMobileHeading() {
            return tl.apply(this, arguments)
        }
        CommerceOverlayMobileMoreLink() {
            return al.apply(this, arguments)
        }
        CommerceOverlayMobileText() {
            return ol.apply(this, arguments)
        }
        CommerceOverlayMobilePrice() {
            return rl.apply(this, arguments)
        }
        CommerceItem() {
            return ll.apply(this, arguments)
        }
        CommerceItemHeading() {
            return nl.apply(this, arguments)
        }
        CommerceItemIcon() {
            return il.apply(this, arguments)
        }
        CommerceItemPrice() {
            return sl.apply(this, arguments)
        }
        CommerceItemWrapper() {
            return cl.apply(this, arguments)
        }
        CommerceItemLabel() {
            return gl.apply(this, arguments)
        }
        CommerceItemButton() {
            return pl.apply(this, arguments)
        }
        PromoBannerSeasonal() {
            return yr.apply(this, arguments)
        }
        GoogleTranslate() {
            return Cr.apply(this, arguments)
        }
        Featured() {
            return Er.apply(this, arguments)
        }
        Membership() {
            return Wo.apply(this, arguments)
        }
        MembershipListItem(e) {
            return this.NavigationDrawerListItem(e)
        }
        MembershipLink(e) {
            return this.NavigationDrawerLink(e)
        }
        MembershipTextAction(e) {
            return this.MembershipLink(e)
        }
        Logo(e) {
            return e
        }
        Menu(e) {
            return e
        }
        SlideshowArrows() {
            return Nr.apply(this, arguments)
        }
        SearchPopout() {
            return Ur.apply(this, arguments)
        }
        SearchPopoutIconSearch() {
            return zr.apply(this, arguments)
        }
        SearchPopoutInputSearch() {
            return Xr.apply(this, arguments)
        }
        SectionHeading() {
            return io.apply(this, arguments)
        }
        SectionHeadingSub() {
            return co.apply(this, arguments)
        }
        SectionHeadingHR() {
            return so.apply(this, arguments)
        }
        SectionSplitHeading() {
            return ho.apply(this, arguments)
        }
        BlogMainLinkArrow() {
            return _a.apply(this, arguments)
        }
        BlogMainHeading() {
            return Oa.apply(this, arguments)
        }
        BlogMainHeadingSub() {
            return Ba.apply(this, arguments)
        }
        ContentHeading() {
            return Wa.apply(this, arguments)
        }
        ContentText() {
            return Va.apply(this, arguments)
        }
        ContentBigContentBasic() {
            return Fa.apply(this, arguments)
        }
        ContentBigHeading() {
            return ja.apply(this, arguments)
        }
        ContentBigText() {
            return Ga.apply(this, arguments)
        }
        CardHeading() {
            return za.apply(this, arguments)
        }
        CardHeadingSub() {
            return Xa.apply(this, arguments)
        }
        Map() {
            return zo.apply(this, arguments)
        }
        MapBanner() {
            return Xo.apply(this, arguments)
        }
        Form() {
            return bo.apply(this, arguments)
        }
        FormSearch() {
            return mo.apply(this, arguments)
        }
        FormError() {
            return yo.apply(this, arguments)
        }
        LogoHeading() {
            return Za.apply(this, arguments)
        }
        Media(e) {
            return this.merge(e)
        }
        MediaObjectBackground() {
            return Qa.apply(this, arguments)
        }
        MediaObjectHeading() {
            return Ja.apply(this, arguments)
        }
        MediaObjectHeadingSub() {
            return eo.apply(this, arguments)
        }
        NavigationDrawer() {
            return To.apply(this, arguments)
        }
        Sidebar() {
            return vr.apply(this, arguments)
        }
        SubMenu() {
            return Ir.apply(this, arguments)
        }
        SplitItem() {
            return Lo.apply(this, arguments)
        }
        SplitItemImage() {
            return Mo.apply(this, arguments)
        }
        SocialLinks() {
            return wo.apply(this, arguments)
        }
        HeaderMedia() {
            return Co.apply(this, arguments)
        }
        PromoBannerText() {
            return wr.apply(this, arguments)
        }
        PromoBannerContainer() {
            return fr.apply(this, arguments)
        }
        FeaturedHeading() {
            return Tr.apply(this, arguments)
        }
        FeaturedText() {
            return Pr.apply(this, arguments)
        }
        ContactBar() {
            return Wr.apply(this, arguments)
        }
        ContactBarAddress() {
            return Vr.apply(this, arguments)
        }
        ContactBarPipe() {
            return Fr.apply(this, arguments)
        }
        ContactBarPhone() {
            return jr.apply(this, arguments)
        }
        NavVerticalHeading() {
            return rr.apply(this, arguments)
        }
        NavVerticalList() {
            return lr.apply(this, arguments)
        }
        NavVerticalListItem() {
            return nr.apply(this, arguments)
        }
        NavHorizontalListItem() {
            return gr.apply(this, arguments)
        }
        NavVerticalLink() {
            return ir.apply(this, arguments)
        }
        NavVerticalLinkActive() {
            return sr.apply(this, arguments)
        }
        NavHorizontalList() {
            return cr.apply(this, arguments)
        }
        NavHorizontalLink() {
            return pr.apply(this, arguments)
        }
        NavHorizontalLinkActive() {
            return ur.apply(this, arguments)
        }
        NavigationDrawerLink() {
            return vo.apply(this, arguments)
        }
        NavigationDrawerLinkActive() {
            return xo.apply(this, arguments)
        }
        NavigationDrawerSubLink() {
            return So.apply(this, arguments)
        }
        NavigationDrawerSubLinkActive() {
            return ko.apply(this, arguments)
        }
        NavigationDrawerList() {
            return Po.apply(this, arguments)
        }
        NavigationDrawerListItem() {
            return Ro.apply(this, arguments)
        }
        NavigationDrawerInputSearch() {
            return Io.apply(this, arguments)
        }
        SidebarContainer() {
            return xr.apply(this, arguments)
        }
        SidebarList() {
            return Sr.apply(this, arguments)
        }
        SubMenuList() {
            return Lr.apply(this, arguments)
        }
        SubMenuListItem() {
            return Mr.apply(this, arguments)
        }
        Link() {
            return ql.apply(this, arguments)
        }
        LinkDropdown() {
            return Bn.apply(this, arguments)
        }
        LinkDropdownActive() {
            return Dn.apply(this, arguments)
        }
        LinkArrow() {
            return Yl.apply(this, arguments)
        }
        SocialLinksLink() {
            return $l.apply(this, arguments)
        }
        LinkContent() {
            return Kl.apply(this, arguments)
        }
        Input() {
            return Zl.apply(this, arguments)
        }
        InputSearch() {
            return Ql.apply(this, arguments)
        }
        InputFloatLabel() {
            return Jl.apply(this, arguments)
        }
        InputFloatLabelInput() {
            return en.apply(this, arguments)
        }
        InputFloatLabelLabel() {
            return tn.apply(this, arguments)
        }
        InputTextArea() {
            return an.apply(this, arguments)
        }
        Button() {
            return jl.apply(this, arguments)
        }
        ButtonPrimary() {
            return Hn.apply(this, arguments)
        }
        ButtonSecondary() {
            return Nn.apply(this, arguments)
        }
        ButtonSpotlight() {
            return Un.apply(this, arguments)
        }
        ButtonFullWidth() {
            return ln.apply(this, arguments)
        }
        ButtonExternal() {
            return nn.apply(this, arguments)
        }
        ButtonNext() {
            return rn.apply(this, arguments)
        }
        ButtonPrevious() {
            return on.apply(this, arguments)
        }
        CarouselButtonNext() {
            return pn.apply(this, arguments)
        }
        CarouselButtonPrevious() {
            return gn.apply(this, arguments)
        }
        SlideshowArrowsButtonNext() {
            return hn.apply(this, arguments)
        }
        SlideshowArrowsButtonPrevious() {
            return dn.apply(this, arguments)
        }
        InputCheckbox() {
            return bn.apply(this, arguments)
        }
        InputRadio() {
            return mn.apply(this, arguments)
        }
        InputSelect() {
            return yn.apply(this, arguments)
        }
        InputSelectElement() {
            return fn.apply(this, arguments)
        }
        InputSelectIcon() {
            return wn.apply(this, arguments)
        }
        Option() {
            return Cn.apply(this, arguments)
        }
        Dropdown() {
            return En.apply(this, arguments)
        }
        Wrapper(e) {
            return this.merge({
                tag: "div",
                style: {
                    display: "inline-block"
                }
            }, e)
        }
        LinkIcon() {
            return xn.apply(this, arguments)
        }
        Dot() {
            return _n.apply(this, arguments)
        }
        DotActive() {
            return On.apply(this, arguments)
        }
        List() {
            return Jn.apply(this, arguments)
        }
        ListItem() {
            return ei.apply(this, arguments)
        }
        ListItemInline() {
            return ti.apply(this, arguments)
        }
        HR() {
            return zn.apply(this, arguments)
        }
        MembershipHR() {
            return Vn.apply(this, arguments)
        }
        Divider() {
            return Xn.apply(this, arguments)
        }
        Pipe() {
            return Wn.apply(this, arguments)
        }
        Loader() {
            return oi.apply(this, arguments)
        }
        Embed() {
            return Fn.apply(this, arguments)
        }
        EmbedContainer() {
            return jn.apply(this, arguments)
        }
        WrapperImage() {
            return wi.apply(this, arguments)
        }
        Image() {
            return mi.apply(this, arguments)
        }
        ImageThumbnail() {
            return yi.apply(this, arguments)
        }
        ImageLogo() {
            return fi.apply(this, arguments)
        }
        Video() {
            return Ri.apply(this, arguments)
        }
        Picture() {
            return At.apply(this, arguments)
        }
        SVG() {
            return gi.apply(this, arguments)
        }
        Icon() {
            return pi.apply(this, arguments)
        }
        IconHamburger() {
            return ui.apply(this, arguments)
        }
        IconSearch() {
            return di.apply(this, arguments)
        }
        IconSocial() {
            return hi.apply(this, arguments)
        }
        Figure() {
            return Ci.apply(this, arguments)
        }
        FigCaption() {
            return Ei.apply(this, arguments)
        }
        CarouselFigCaption() {
            return Ti.apply(this, arguments)
        }
        CarouselFigCaptionOverlay() {
            return Pi.apply(this, arguments)
        }
        Container() {
            return Gn.apply(this, arguments)
        }
        ContainerFluid() {
            return qn.apply(this, arguments)
        }
        ContainerSplit() {
            return $n.apply(this, arguments)
        }
        Block() {
            return Kn.apply(this, arguments)
        }
        Element() {
            return Yn.apply(this, arguments)
        }
        Heading() {
            return ki.apply(this, arguments)
        }
        HeadingMajor() {
            return Ii.apply(this, arguments)
        }
        HeadingMiddle() {
            return Li.apply(this, arguments)
        }
        HeadingMinor() {
            return Mi.apply(this, arguments)
        }
        HeadingProduct() {
            return Ai.apply(this, arguments)
        }
        Text() {
            return _i.apply(this, arguments)
        }
        TextMajor() {
            return Oi.apply(this, arguments)
        }
        TextAction() {
            return Bi.apply(this, arguments)
        }
        Label() {
            return Xi.apply(this, arguments)
        }
        LabelMinor() {
            return Wi.apply(this, arguments)
        }
        CloseIcon() {
            return bi.apply(this, arguments)
        }
        CardBannerContainer() {
            return Zn.apply(this, arguments)
        }
        CardBannerBlock() {
            return Qn.apply(this, arguments)
        }
        CardBannerHeading() {
            return zi.apply(this, arguments)
        }
        CardBannerButton() {
            return vn.apply(this, arguments)
        }
        Details() {
            return Di.apply(this, arguments)
        }
        DetailsMinor() {
            return Hi.apply(this, arguments)
        }
        DisplayHeading() {
            return Yi.apply(this, arguments)
        }
        DisplayHeadingSub() {
            return Ki.apply(this, arguments)
        }
        FooterLink() {
            return An.apply(this, arguments)
        }
        FooterDetails() {
            return Vi.apply(this, arguments)
        }
        FooterText() {
            return Fi.apply(this, arguments)
        }
        MembershipHeading() {
            return Ji.apply(this, arguments)
        }
        MoreLink() {
            return Sn.apply(this, arguments)
        }
        MoreLinkExpand() {
            return kn.apply(this, arguments)
        }
        MoreLinkForward() {
            return Ln.apply(this, arguments)
        }
        MoreLinkBackward() {
            return In.apply(this, arguments)
        }
        MoreLinkMenu() {
            return Mn.apply(this, arguments)
        }
        Price() {
            return Ni.apply(this, arguments)
        }
        PriceMajor() {
            return Ui.apply(this, arguments)
        }
        Tagline() {
            return ji.apply(this, arguments)
        }
        SubTagline() {
            return Gi.apply(this, arguments)
        }
        SupTagline() {
            return qi.apply(this, arguments)
        }
        Error() {
            return Zi.apply(this, arguments)
        }
        Address() {
            return $i.apply(this, arguments)
        }
        UtilitiesMenu() {
            return fo.apply(this, arguments)
        }
        UtilitiesMenuIcon() {
            return Rn.apply(this, arguments)
        }
        UtilitiesMenuLink() {
            return Pn.apply(this, arguments)
        }
        Phone() {
            return Qi.apply(this, arguments)
        }
        Table() {
            return es.apply(this, arguments)
        }
        TableHeader() {
            return ts.apply(this, arguments)
        }
        TableRow() {
            return as.apply(this, arguments)
        }
        TableCell() {
            return os.apply(this, arguments)
        }
        Header() {
            throw Error("Header is not available")
        }
        EmbedVideo() {
            throw Error("EmbedVideo is not available")
        }
    }
    t(Ys, "excludedProps", ["address", "welcomeLine", "background2", "foreground"]);
    const Ks = ({
        passedScript: e = (() => ""),
        id: t,
        mobile: a = !1
    }, o) => ((e = "", t = (() => ""), a = (() => "")) => `(function () {\n    window.onMembershipLogout = function () {\n      window.location.assign('/m/logout');\n    };\n    var onClickApplication = setInterval(function () {\n      var membershipSignOut = document.getElementById('${e}-membership-sign-out');\n      if (membershipSignOut && !membershipSignOut.onclick) {\n        membershipSignOut.onclick = window.onMembershipLogout;\n      }\n    }, 500);\n    setTimeout(function () {\n      return clearInterval(onClickApplication);\n    }, 1000);\n    \n  var cookieValue = void 0;\n  var cookie = "info_c2=";\n  var parsedCookies = document.cookie.split(";");\n  for (var i = 0; i < parsedCookies.length; i++) {\n    var targetCookie = parsedCookies[i];\n    while (targetCookie.charAt(0) === " ") {\n      targetCookie = targetCookie.substring(1, targetCookie.length);\n    }\n    if (targetCookie.indexOf(cookie) === 0) {\n      var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);\n      cookieValue = rawCookie && JSON.parse(decodeURIComponent(rawCookie));\n    }\n  }\n    var membershipEmail = cookieValue && cookieValue.contactEmail;\n    var firstName = cookieValue && cookieValue.nameFirst;\n    var lastName = cookieValue && cookieValue.nameLast;\n    ${t}\n    ${a}\n  }())`)(t, a ? (e => `\n  var navigationDrawer = document.getElementById('${e}-navId-mobile');\n  var signedOutLinks = navigationDrawer.querySelector(".membership-links-logged-out");\n  var signedInLinks = navigationDrawer.querySelector(".membership-links-logged-in");\n  var signedInHeaderBlock = navigationDrawer.querySelector(".membership-header-logged-in");\n\n  if (cookieValue) {\n    signedInHeaderBlock.style.display = 'block';\n    signedOutLinks.style.display = 'none';\n    signedInLinks.style.display = 'block';\n    var membershipHeader = navigationDrawer.querySelector('#${e}-membership-header');\n    var membershipEmailField = navigationDrawer.querySelector('#${e}-membership-email');\n    if (membershipEmailField && membershipEmailField.firstChild) {\n      if (firstName && lastName) {\n        membershipHeader.innerText = [firstName, lastName].join(' ');\n      }\n      membershipEmailField.innerText = membershipEmail;\n      membershipEmailField.style["text-overflow"] = "ellipsis";\n      membershipEmailField.style["overflow"] = "hidden";\n      membershipEmailField.style["white-space"] = "nowrap";\n    }\n    var membershipHeaderText = navigationDrawer.querySelector('#${e}-membership-header');\n    if (membershipHeaderText && membershipHeaderText.firstChild) {\n      membershipHeaderText.style["font-weight"] = "bold";\n    }\n  } else {\n    signedInHeaderBlock.style.display = 'none';\n    signedInLinks.style.display = 'none';\n    signedOutLinks.style.display = 'block';\n  }\n  `)(t) : (e => `\n  var utilitiesMenu = document.getElementById('${e}-utility-menu');\n  var signedOutDropdown = utilitiesMenu.querySelector(".membership-icon-logged-out");\n  var signedInDropdown = utilitiesMenu.querySelector(".membership-icon-logged-in");\n  if (cookieValue) {\n    signedOutDropdown.style.display = 'none';\n    signedInDropdown.style.display = 'block';\n    var membershipEmailField = utilitiesMenu.querySelector('#${e}-membership-email');\n    if (membershipEmailField && membershipEmailField.firstChild) {\n      membershipEmailField.firstChild.innerText = membershipEmail;\n      membershipEmailField.firstChild.style["text-overflow"] = "ellipsis";\n      membershipEmailField.firstChild.style["overflow"] = "hidden";\n      membershipEmailField.firstChild.style["white-space"] = "nowrap";\n    }\n    var membershipHeaderText = utilitiesMenu.querySelector('#${e}-membership-header');\n    if (membershipHeaderText && membershipHeaderText.firstChild) {\n      membershipHeaderText.firstChild.style["font-weight"] = "bold";\n    }\n  } else {\n    signedInDropdown.style.display = 'none';\n    signedOutDropdown.style.display = 'block';\n  }\n  `)(t), e.apply(null, o));
    var Zs = (global.keyMirror || guac.keymirror)({
        BACKGROUND_IMAGE_RENDERED: null,
        HAMBURGER_MENU_LINK: null,
        HEADER_WIDGET: null,
        HEADER_SECTION: null,
        HEADER_VIDEO: null,
        HEADER_VIDEO_EMBED_WRAPPER: null,
        HEADER_VIDEO_EMBED: null,
        HEADER_VIDEO_EMBED_INSET_POSTER: null,
        HEADER_SLIDESHOW: null,
        HEADER_SLIDE: null,
        HEADER_HERO_SLIDE: null,
        HEADER_PHONE_RENDERED: null,
        HEADER_PIPE_RENDERED: null,
        HEADER_ADDRESS_RENDERED: null,
        HEADER_LOGO_RENDERED: null,
        HEADER_LOGO_IMAGE_RENDERED: null,
        HEADER_LOGO_OVERHANG_CONTAINER: null,
        HEADER_LOGO_TEXT_RENDERED: null,
        HEADER_TAGLINE_RENDERED: null,
        HEADER_TAGLINE2_RENDERED: null,
        HEADER_NAV_RENDERED: null,
        HEADER_CTA_BTN: null,
        CART_ICON_RENDER: null,
        CART_ICON_COUNT: null,
        CART_ICON_PIPE: null,
        CART_TEXT: null,
        CART_DROPDOWN_RENDERED: null,
        SEARCH_FORM_RENDERED: null,
        SEARCH_ICON_RENDERED: null,
        SEARCH_ICON_RENDERED_OPEN: null,
        SEARCH_CLOSE_RENDERED: null,
        SEARCH_FIELD_RENDERED: null,
        NAV_MORE: null,
        NAV_DROPDOWN: null,
        i18n_ICON_RENDERED: null,
        i18n_BAR_RENDERED: null,
        BANNER_RENDERED: null,
        BANNER_TEXT_RENDERED: null,
        GROUP_RENDERED: null,
        MEMBERSHIP_EMAIL_ADDRESS: null,
        MEMBERSHIP_SIGNOUT_LINK: null,
        MEMBERSHIP_SIGNIN_LINK: null,
        MEMBERSHIP_ICON_RENDERED: null,
        MEMBERSHIP_ICON_DESKTOP_RENDERED: null,
        MEMBERSHIP_CREATE_ACCOUNT_LINK: null,
        MEMBERSHIP_ACCOUNT_LINK: null,
        MEMBERSHIP_BOOKINGS_LINK: null,
        MEMBERSHIP_ORDERS_LINK: null,
        SEASONAL_SPRING_LEFT_ICON_RENDERED: null,
        SEASONAL_SPRING_RIGHT_ICON_RENDERED: null,
        SEASONAL_SUMMER_LEFT_ICON_RENDERED: null,
        SEASONAL_SUMMER_RIGHT_ICON_RENDERED: null,
        SEASONAL_FALL_LEFT_ICON_RENDERED: null,
        SEASONAL_FALL_RIGHT_ICON_RENDERED: null,
        SEASONAL_WINTER_LEFT_ICON_RENDERED: null,
        SEASONAL_WINTER_RIGHT_ICON_RENDERED: null
    });
    const Qs = ({
            id: e,
            staticContent: t,
            headerStyles: a,
            parentStyles: o
        }) => [{
            id: e + "-membership-header",
            text: t.membershipSignedInStatus,
            style: a
        }, {
            id: e + "-membership-email",
            text: "filler@godaddy.com",
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_EMAIL_ADDRESS
        }],
        Js = ({
            id: e,
            staticContent: t,
            membershipAdminPages: a,
            parentStyles: o
        }) => ({
            id: e + "-membership-sign-in",
            name: t.membershipSignIn,
            href: a.account.path,
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_SIGNIN_LINK
        }),
        ec = ({
            id: e,
            staticContent: t,
            membershipAdminPages: a,
            parentStyles: o
        }) => ({
            id: e + "-membership-create-account",
            name: t.membershipCreateAccount,
            href: a.createAccount.path,
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_CREATE_ACCOUNT_LINK
        }),
        tc = ({
            id: e,
            staticContent: t,
            parentStyles: a,
            mobile: o = !1
        }) => ({
            id: e + "-membership-sign-out",
            text: t.membershipSignOut,
            parentStyles: a,
            dataAid: Zs.MEMBERSHIP_SIGNOUT_LINK,
            script: Ks({
                id: e,
                mobile: o
            })
        }),
        ac = ({
            id: e,
            staticContent: t,
            membershipAdminPages: a,
            parentStyles: o
        }, r) => ({
            id: `${e}-membership-bookings-${r}`,
            name: t.membershipBookings,
            href: a.bookings.path,
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_BOOKINGS_LINK
        }),
        oc = ({
            id: e,
            staticContent: t,
            membershipAdminPages: a,
            parentStyles: o
        }, r) => ({
            id: `${e}-membership-orders-${r}`,
            name: t.membershipOrders,
            href: a.orders.path,
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_ORDERS_LINK
        }),
        rc = ({
            id: e,
            staticContent: t,
            membershipAdminPages: a,
            parentStyles: o
        }, r) => ({
            id: `${e}-membership-account-${r}`,
            name: t.membershipAccount,
            href: a.account.path,
            parentStyles: o,
            dataAid: Zs.MEMBERSHIP_ACCOUNT_LINK
        }),
        lc = e => {
            const {
                canCreateAccount: t,
                hasActiveOLA: a,
                hasActiveOLS: o
            } = e;
            return [{
                separator: !0
            }, Js(e), t && ec(e), a && ac(e, "logged-out"), o && oc(e, "logged-out"), rc(e, "logged-out")].filter(Boolean)
        },
        nc = ({
            mobile: e = !1,
            ...t
        }) => e ? (e => {
            const {
                hasActiveOLA: t,
                hasActiveOLS: a
            } = e;
            return [{
                separator: !0
            }, t && ac(e, "logged-in"), a && oc(e, "logged-in"), rc(e, "logged-in"), tc({
                mobile: !0,
                ...e
            })].filter(Boolean)
        })(t) : (e => {
            const {
                hasActiveOLA: t,
                hasActiveOLS: a
            } = e;
            return [...Qs(e), {
                separator: !0
            }, t && ac(e, "logged-in"), a && oc(e, "logged-in"), rc(e, "logged-in"), tc(e)].filter(Boolean)
        })(t),
        ic = ({
            mobile: e = !1,
            ...t
        }) => e ? lc(t) : (e => {
            const {
                canCreateAccount: t,
                hasActiveOLA: a,
                hasActiveOLS: o
            } = e;
            return [Js(e), t && ec(e), {
                separator: !0
            }, a && ac(e, "logged-out"), o && oc(e, "logged-out"), rc(e, "logged-out")].filter(Boolean)
        })(t);
    class sc extends(global.React || guac.react).Component {
        renderItem(e) {
            const {
                id: t,
                text: a
            } = e, o = /(-membership-header)$/.test(t), r = /(-membership-email)$/.test(t);
            return o ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text.Major, {
                id: t,
                typography: "BodyAlpha"
            }, a) : r ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                id: t
            }, a) : null
        }
        render() {
            const {
                styles: e
            } = this.props, t = { ...(global._ || guac.lodash).omit(this.props, ["canLogin", "canCreatePages", "styles"]),
                headerStyles: {
                    fontWeight: "bold"
                },
                mobile: !0
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Membership, {
                className: "membership-header-logged-in",
                style: e.membershipHeader
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, null, Qs(t).map((e => this.renderItem(e)))))
        }
    }
    sc.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        canLogin: (global.PropTypes || guac["prop-types"]).bool,
        canCreateAccount: (global.PropTypes || guac["prop-types"]).bool,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        styles: (global.PropTypes || guac["prop-types"]).object
    };
    const cc = {
        "/idx/wrapper": !0
    };
    class gc extends(global.React || guac.react).Component {
        render() {
            const {
                Link: e
            } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, {
                renderMode: t,
                pageRoute: o,
                isActive: r,
                isNested: l,
                ...n
            } = this.props, i = t === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH && cc[o];
            let s;
            return s = l ? r ? e.NestedActive : e.Nested : r ? e.Active : e, (global.React || guac.react).createElement(s, a({
                convertToAbsolute: i,
                role: "link"
            }, n))
        }
    }
    gc.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        isActive: (global.PropTypes || guac["prop-types"]).bool,
        isNested: (global.PropTypes || guac["prop-types"]).bool
    };
    class pc extends(global.React || guac.react).Component {
        componentDidMount() {
            if (this.props.script && this.props.renderMode === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH) {
                const e = document.createElement("script");
                e.appendChild(document.createTextNode(this.props.script)), document.body.appendChild(e)
            }
        }
        render() {
            const {
                id: e,
                tagType: t,
                text: o,
                style: r
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                id: e,
                style: r
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text.Action, a({}, (global._ || guac.lodash).omit(this.props, ["id", "style", "script", "dataAid", "tagType"]), {
                tag: t,
                children: o
            })))
        }
    }
    pc.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        tagType: (global.PropTypes || guac["prop-types"]).string,
        text: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        dataAid: (global.PropTypes || guac["prop-types"]).string,
        onClick: (global.PropTypes || guac["prop-types"]).func,
        script: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired
    }, pc.defaultProps = {
        tagType: "div",
        text: "",
        style: {},
        onClick: (global._ || guac.lodash).noop
    };
    const {
        UX2: uc,
        components: {
            Bootstrap: dc
        }
    } = global.Core || guac["@wsb/guac-widget-core"];
    class hc extends(global.React || guac.react).Component {
        extractCartIconProps() {
            return (global._ || guac.lodash).pick(this.props, (global._ || guac.lodash).keys(pc.propTypes))
        }
        render() {
            return (global.React || guac.react).createElement(uc.Element.Block, null, (global.React || guac.react).createElement(dc.Radpack, a({}, this.extractCartIconProps(), {
                entry: "@widget/LAYOUT/bs-ActionText-Component",
                Component: pc,
                renderMode: this.props.renderMode
            })))
        }
    }
    hc.propTypes = {
        tagType: (global.PropTypes || guac["prop-types"]).string,
        text: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        dataAid: (global.PropTypes || guac["prop-types"]).string,
        onClick: (global.PropTypes || guac["prop-types"]).func,
        renderMode: (global.PropTypes || guac["prop-types"]).string
    };
    class bc extends(global.React || guac.react).Component {
        renderItem(e, t) {
            const {
                renderMode: o
            } = this.props, {
                name: r,
                text: l,
                separator: n
            } = e;
            let i;
            return r && (i = (global.React || guac.react).createElement(gc, a({
                tag: "a",
                "data-edit-interactive": !0,
                children: r,
                renderMode: o
            }, e))), l && (i = (global.React || guac.react).createElement(hc, a({}, e, {
                renderMode: o
            }))), n && (i = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, null)), i ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                key: (global._ || guac.lodash).uniqueId(t)
            }, i) : null
        }
        renderLinks({
            membershipProps: e,
            styles: t
        }) {
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List, {
                className: "membership-links-logged-in",
                style: t.list,
                role: "menu"
            }, nc(e).map(((e, t) => this.renderItem(e, t)))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List, {
                className: "membership-links-logged-out",
                style: t.list,
                role: "menu"
            }, ic(e).map(((e, t) => this.renderItem(e, t)))))
        }
        renderPreviewLinks({
            membershipProps: e,
            styles: t
        }) {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List, {
                className: "membership-links-logged-out",
                style: t.list,
                role: "menu"
            }, (a = e, lc({ ...a
            })).map(((e, t) => this.renderItem(e, t))));
            var a
        }
        render() {
            const {
                id: e,
                staticContent: t = {},
                renderMode: a,
                styles: o = {}
            } = this.props, r = { ...(global._ || guac.lodash).omit(this.props, ["canLogin", "canCreateAccount", "renderMode", "styles"]),
                headerStyles: {
                    fontWeight: "bold"
                },
                mobile: !0
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Membership, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, {
                style: {
                    marginVertical: "xsmall"
                }
            }, t.membershipSectionTitle), a === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH ? this.renderLinks({
                id: e,
                membershipProps: r,
                styles: o
            }) : this.renderPreviewLinks({
                id: e,
                membershipProps: r,
                styles: o
            }))
        }
    }

    function mc() {
        const e = document.getElementById("i18n-bar"),
            t = document.getElementById("i18n-bar-close"),
            a = Array.from(document.getElementsByClassName("i18n-icon")),
            o = () => {
                window._trfq.push(["cmdLogEvent", "click", "pnc.gocentral_published_website.i18n_icon.click"]), a.forEach((e => {
                    e.style.top = "-60px"
                })), e.style.maxHeight = "300px", t.style.zIndex = "1201"
            };
        a.forEach((e => {
            e.addEventListener("click", o, !0)
        }))
    }
    bc.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        hasActiveOLA: (global.PropTypes || guac["prop-types"]).bool,
        hasActiveOLS: (global.PropTypes || guac["prop-types"]).bool,
        canLogin: (global.PropTypes || guac["prop-types"]).bool,
        canCreateAccount: (global.PropTypes || guac["prop-types"]).bool,
        membershipAdminPages: (global.PropTypes || guac["prop-types"]).object,
        renderMode: (global.PropTypes || guac["prop-types"]).oneOf(Object.keys((global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes)),
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        styles: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        Bootstrap: yc
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, fc = {
        localeText: {
            fontWeight: "bold",
            fontSize: "small",
            color: "highContrast",
            paddingRight: "xsmall"
        }
    };
    class wc extends(global.React || guac.react).Component {
        render() {
            const {
                renderMode: e,
                googleTranslateOptions: t,
                category: a
            } = this.props;
            return e !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH || (global._ || guac.lodash).isEmpty(t) ? null : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.GoogleTranslate, {
                section: "alt",
                className: "i18n-icon",
                category: a,
                "data-aid": Zs.i18n_ICON_RENDERED,
                "data-close": !0
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                style: fc.localeText
            }, t.pageLanguage.toUpperCase()), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "globe",
                size: "small"
            }), (global.React || guac.react).createElement(yc.JS, {
                id: "TranslateIcon",
                script: mc.toString(),
                props: {}
            }))
        }
    }

    function Cc(e, t, a) {
        let o = e;
        for (; o;) {
            const e = o.getAttribute && o.getAttribute(t);
            if (e && (void 0 === a || e === a)) return !0;
            o = o.parentNode
        }
        return !1
    }

    function Ec(e, t) {
        return Cc(e, "id", t)
    }
    wc.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        googleTranslateOptions: (global.PropTypes || guac["prop-types"]).object.isRequired,
        category: (global.PropTypes || guac["prop-types"]).string
    }, wc.defaultProps = {
        category: "accent"
    };
    class Tc extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.handleClick = this.handleClick.bind(this), this.handleToggle = this.handleToggle.bind(this), this._id = (global._ || guac.lodash).uniqueId(), this.state = {
                open: !1
            }
        }
        componentDidMount() {
            this._link = (global.ReactDOM || guac["react-dom"]).findDOMNode(this), document.addEventListener("click", this.handleClick, !1)
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.handleClick, !1)
        }
        shouldClose(e) {
            const {
                closeAttr: t,
                ignoreCloseAttr: a,
                closeOnOutsideClick: o,
                toggleId: r
            } = this.props;
            let l = !0;
            return t ? l = Cc(e.target, t) : a && (l = !Cc(e.target, a)), !l && r && o && (l = !Ec(e.target, r)), l && !Ec(e.target, this._id)
        }
        handleClick(e) {
            const {
                open: t
            } = this.state;
            t && this.shouldClose(e) && (this.setState({
                open: !1
            }), e.stopPropagation())
        }
        handleToggle(e) {
            e.preventDefault(), e.stopPropagation(), this.setState({
                open: !this.state.open
            })
        }
        componentDidUpdate(e, {
            open: t
        }) {
            const {
                onChange: a
            } = this.props;
            t !== this.state.open && a(this.state.open)
        }
        render() {
            const e = (global._ || guac.lodash).omit(this.props, ["onChange", "style"]),
                {
                    open: t
                } = this.state,
                {
                    style: o,
                    activeStyle: r,
                    isActive: l
                } = this.props,
                n = { ...l ? { ...r
                    } : { ...o
                    }
                },
                i = l ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link.DropdownActive : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link.Dropdown;
            return (global.React || guac.react).createElement(i, a({
                tag: "a",
                style: n,
                href: "#",
                onClick: this.handleToggle,
                "data-toggle-ignore": !0,
                id: this._id,
                role: "button",
                "aria-expanded": t
            }, e))
        }
    }

    function Pc(e) {
        return (global._ || guac.lodash).some(e, {
            active: !0
        })
    }
    Tc.propTypes = {
        onChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        closeAttr: (global.PropTypes || guac["prop-types"]).string,
        ignoreCloseAttr: (global.PropTypes || guac["prop-types"]).string,
        activeStyle: (global.PropTypes || guac["prop-types"]).object,
        style: (global.PropTypes || guac["prop-types"]).object,
        closeOnOutsideClick: (global.PropTypes || guac["prop-types"]).bool,
        toggleId: (global.PropTypes || guac["prop-types"]).string,
        isActive: (global.PropTypes || guac["prop-types"]).bool
    };
    class Rc extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.handleChange = this.handleChange.bind(this), this.state = {
                open: this.props.alwaysOpen
            }
        }
        handleChange(e) {
            this.setState({
                open: this.props.alwaysOpen || e
            })
        }
        render() {
            const {
                item: e,
                styles: t,
                domainName: o,
                renderMode: r,
                pageRoute: l,
                alwaysOpen: n,
                enableActiveFlyoutMenu: i
            } = this.props, {
                open: s
            } = this.state;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement(Tc, a({}, this.props, {
                style: t.link,
                onChange: this.handleChange,
                "data-edit-interactive": !0,
                isActive: i && Pc(e.navigation)
            }), (global.React || guac.react).createElement("span", {
                style: {
                    pointerEvents: "none"
                }
            }, e.name), !n && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "chevronDown",
                size: "small",
                rotate: s ? "180" : "0",
                style: {
                    position: "relative",
                    marginLeft: "xsmall",
                    color: "inherit",
                    flexShrink: "0",
                    pointerEvents: "none"
                }
            })), s && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List.Nested, {
                role: "menu"
            }, e.navigation.map((e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                tag: "li",
                key: e.pageId,
                style: t.subListItem,
                role: "menuitem"
            }, (global.React || guac.react).createElement(gc, {
                tag: "a",
                style: { ...t.sublink,
                    ...e.active ? t.activeSublink : {
                        fontWeight: "normal"
                    }
                },
                href: e.href,
                target: e.target,
                rel: "_blank" === e.target ? "noopener" : "",
                "data-page": e.pageId,
                "data-edit-interactive": !0,
                "data-close": !0,
                renderMode: r,
                domainName: o,
                pageRoute: l,
                "data-aid": "MOBILE_NAV_SUBLINK",
                isActive: e.active,
                groupType: "Sub"
            }, (global.React || guac.react).createElement("span", null, e.name)))))))
        }
    }
    Rc.propTypes = {
        item: (global.PropTypes || guac["prop-types"]).object.isRequired,
        styles: (global.PropTypes || guac["prop-types"]).object.isRequired,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        alwaysOpen: (global.PropTypes || guac["prop-types"]).bool,
        enableActiveFlyoutMenu: (global.PropTypes || guac["prop-types"]).bool
    };
    const {
        components: {
            Bootstrap: vc
        }
    } = global.Core || guac["@wsb/guac-widget-core"];

    function xc(e) {
        return (global.React || guac.react).createElement(vc.Radpack, a({}, e, {
            Component: Rc,
            entry: "@widget/LAYOUT/bs-MobileFlyoutMenu-Component"
        }))
    }
    xc.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        item: (global.PropTypes || guac["prop-types"]).object.isRequired,
        styles: (global.PropTypes || guac["prop-types"]).object.isRequired
    };
    var Sc = Lt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            facebook: {
                name: "Facebook",
                prefix: "https://www.facebook.com/",
                placeholder: "https://www.facebook.com/pagename",
                arguments: {
                    externalLinkID: "CREATE_FACEBOOK_LINK"
                }
            },
            twitter: {
                name: "Twitter",
                prefix: "https://twitter.com/",
                placeholder: "https://twitter.com/username",
                arguments: {
                    externalLinkID: "CREATE_SOCIAL_PROVIDER_LINK"
                }
            },
            instagram: {
                name: "Instagram",
                prefix: "https://www.instagram.com/",
                placeholder: "https://www.instagram.com/username",
                arguments: {
                    externalLinkID: "CREATE_SOCIAL_PROVIDER_LINK"
                }
            },
            pinterest: {
                name: "Pinterest",
                prefix: "https://www.pinterest.com/",
                placeholder: "https://www.pinterest.com/username",
                arguments: {
                    validationRegex: "^https://(www.)?pinterest.(com|ca)/((?!.*https?:).*)$",
                    validationValueMatchGroupIndex: 3
                }
            },
            linkedin: {
                name: "LinkedIn",
                prefix: "https://www.linkedin.com/",
                placeholder: "https://www.linkedin.com/in/user"
            },
            youtube: {
                name: "YouTube",
                prefix: "https://www.youtube.com/",
                placeholder: "https://www.youtube.com/username"
            },
            googlePlus: {
                name: "Google+",
                prefix: "https://plus.google.com/",
                placeholder: "https://plus.google.com/username",
                arguments: {
                    validationRegex: "^https://plus.google.com/((?!.*https?:).*)$",
                    validationValueMatchGroupIndex: 1
                }
            },
            yelp: {
                name: "Yelp",
                prefix: "https://www.yelp.com/biz/",
                placeholder: "https://www.yelp.com/biz",
                arguments: {
                    validationRegex: "^https://(www.)?yelp.com/biz/((?!.*https?:).*)$",
                    validationValueMatchGroupIndex: 2,
                    externalLinkID: "CREATE_SOCIAL_PROVIDER_LINK"
                }
            },
            xing: {
                name: "Xing",
                prefix: "https://www.xing.com/",
                placeholder: "https://xing.com/profile/username",
                behindFeatureFlag: "enableXing"
            },
            houzz: {
                name: "Houzz",
                prefix: "https://www.houzz.com/pro/",
                placeholder: "https://www.houzz.com/pro/username",
                arguments: {
                    validationRegex: "^https://(www.)?houzz.com/pro/((?!.*https?:).*)$",
                    validationValueMatchGroupIndex: 2
                }
            }
        }
    }));
    const kc = global.React || guac.react,
        Ic = global.PropTypes || guac["prop-types"],
        Lc = global._ || guac.lodash,
        Mc = global.Core || guac["@wsb/guac-widget-core"];
    var Ac = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o])
                    }
                    return e
                },
                o = n(kc),
                r = n(Ic),
                l = n(Sc);

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = e.dataAids,
                    r = e.baseProps,
                    n = e.iconProps,
                    i = e.showGrayIcons,
                    s = e.iconSuffix,
                    c = void 0 === s ? "" : s,
                    g = e.staticContent,
                    p = void 0 === g ? {} : g,
                    u = e.zeroStateIconsConfig,
                    d = void 0 === u ? {} : u,
                    h = d.enableXing,
                    b = void 0 === h || h,
                    m = d.disableGooglePlus,
                    y = void 0 !== m && m,
                    f = Mc.UX2.Element,
                    w = f.Block,
                    C = f.Link,
                    E = Object.keys(l.default).map((function(a) {
                        var o = "xing" === a ? a.toUpperCase() : a.toLowerCase();
                        return {
                            name: l.default[a].name,
                            prefix: l.default[a].prefix,
                            profileId: e[a + "Profile"],
                            icon: o + c,
                            dataAid: t[a.toUpperCase()],
                            hidden: "xing" === a && !b || "googlePlus" === a && y
                        }
                    })).filter((function(e) {
                        return e.profileId || i
                    }));
                if (!E.length) return null;
                var T = (0, Lc.merge)({
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            paddingHorizontal: "none",
                            paddingVertical: "small",
                            flexWrap: "wrap"
                        }
                    }, r),
                    P = (0, Lc.merge)({
                        size: "medium"
                    }, n),
                    R = E.map((function(e, t) {
                        var r = o.default.createElement(Mc.UX2.Element.Icon.Social, a({
                            key: t,
                            icon: e.icon,
                            minTarget: !0
                        }, P));
                        return i ? !e.hidden && r : o.default.createElement(C, {
                            tag: "a",
                            href: e.prefix + e.profileId,
                            target: "_blank",
                            rel: "noopener",
                            key: t,
                            "data-aid": e.dataAid,
                            children: r,
                            "aria-label": p[e.name] || e.name,
                            mobileIconSize: !1
                        })
                    }));
                return o.default.createElement(w, a({
                    "data-aid": t.SOCIAL
                }, T), R)
            };
            i.propTypes = {
                dataAids: r.default.object.isRequired,
                baseProps: r.default.object,
                iconProps: r.default.object,
                facebookProfile: r.default.string,
                twitterProfile: r.default.string,
                instagramProfile: r.default.string,
                pinterestProfile: r.default.string,
                linkedinProfile: r.default.string,
                youtubeProfile: r.default.string,
                googlePlusProfile: r.default.string,
                xingProfile: r.default.string,
                showGrayIcons: r.default.bool,
                iconSuffix: r.default.string,
                staticContent: r.default.object,
                zeroStateIconsConfig: r.default.object
            }, t.default = i
        })),
        _c = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, o = (a = Sc) && a.__esModule ? a : {
                default: a
            };
            var r = Object.keys(o.default),
                l = {};
            r.forEach((function(e) {
                l[e + "Binding"] = {
                    kind: "extensionBinding",
                    type: "TEXT",
                    extensionName: "BusinessInfo",
                    field: e + "Profile"
                }
            }));
            var n = {
                    kind: "extensionDefinition",
                    name: "BusinessInfo",
                    fields: r.map((function(e) {
                        return {
                            name: e + "Profile",
                            path: "properties." + e + "Profile"
                        }
                    }))
                },
                i = r.map((function(e) {
                    return {
                        id: e + "Profile",
                        type: {
                            type: e + "Binding",
                            arguments: (0, Lc.merge)({
                                prefix: o.default[e].prefix,
                                strictValidation: !0,
                                validationRegex: "^https?:\\/\\/(www\\.)?" + e + "\\.com\\/((?!.*https?:).*)$",
                                validationValueMatchGroupIndex: 2,
                                validationErrorMsg: {
                                    message: "socialLinkValidationErrorMsg",
                                    args: {
                                        socialApp: {
                                            kind: "translatedValue",
                                            value: e.toLowerCase() + "Text"
                                        }
                                    }
                                }
                            }, o.default[e].arguments)
                        },
                        editingDisplay: {
                            titleId: {
                                kind: "translatedValue",
                                value: e.toLowerCase() + "Text"
                            },
                            placeholder: o.default[e].placeholder || "",
                            behindFeatureFlag: o.default[e].behindFeatureFlag || ""
                        }
                    }
                }));
            t.default = {
                socialMutatorType: l,
                socialExtensions: n,
                socialFields: i
            }
        })),
        Oc = It(Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SocialProviders = t.SocialManifest = t.default = void 0;
            var a = l(Ac),
                o = l(_c),
                r = l(Sc);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = a.default, t.SocialManifest = o.default, t.SocialProviders = r.default
        })));
    const Bc = {
        FACEBOOK: "HEADER_FACEBOOK_LINK",
        TWITTER: "HEADER_TWITTER_LINK",
        INSTAGRAM: "HEADER_INSTAGRAM_LINK",
        PINTEREST: "HEADER_PINTEREST_LINK",
        LINKEDIN: "HEADER_LINKEDIN_LINK",
        YOUTUBE: "HEADER_YOUTUBE_LINK",
        GOOGLEPLUS: "HEADER_GOOGLEPLUS_LINK",
        YELP: "HEADER_YELP_LINK",
        XING: "HEADER_XING_LINK",
        HOUZZ: "HEADER_HOUZZ_LINK",
        SOCIAL: "HEADER_SOCIAL_LINKS"
    };
    class Dc extends(global.React || guac.react).Component {
        render() {
            const {
                socialProfiles: e,
                styles: t = {},
                baseProps: o,
                inDrawer: r
            } = this.props, {
                socialAccountsEnabled: l
            } = e, n = r ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.SocialLinks.Drawer : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.SocialLinks;
            return l ? (global.React || guac.react).createElement(n, null, (global.React || guac.react).createElement(Oc, a({}, {
                dataAids: Bc,
                facebookProfile: (i = e).facebookProfile,
                twitterProfile: i.twitterProfile,
                instagramProfile: i.instagramProfile,
                pinterestProfile: i.pinterestProfile,
                linkedinProfile: i.linkedinProfile,
                youtubeProfile: i.youtubeProfile,
                googlePlusProfile: i.googlePlusProfile,
                yelpProfile: i.yelpProfile,
                xingProfile: i.xingProfile,
                houzzProfile: i.houzzProfile
            }, {
                iconProps: {
                    size: Pt,
                    ...t,
                    minTarget: !0,
                    marginHorizontal: "0"
                },
                baseProps: o
            }))) : null;
            var i
        }
    }
    Dc.propTypes = {
        socialProfiles: (global.PropTypes || guac["prop-types"]).object,
        styles: (global.PropTypes || guac["prop-types"]).object,
        baseProps: (global.PropTypes || guac["prop-types"]).object,
        inDrawer: (global.PropTypes || guac["prop-types"]).bool
    };
    const {
        renderModes: Hc
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, Nc = (e, t = "ceil") => "ceil" === t ? Math.ceil(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().width), Uc = e => e === Hc.PREVIEW && (document.querySelector(".mobile-phone-preview-container #render-container") || document.querySelector("#render-container")) || document.querySelector("body"), zc = e => {
        if ("undefined" == typeof document || e !== Hc.PREVIEW) return "100vh";
        const t = (e => e === Hc.PREVIEW && (document.querySelector(".mobile-phone-preview-container .viewport") || document.querySelector("#render-container")) || document.querySelector("body"))(e);
        if (!t) return "100vh";
        const a = document.querySelector(".mobile-phone-preview-container .ux-scaled");
        let o = 1;
        if (a) {
            const e = (global._ || guac.lodash).get(a, "style.transform", "").match(/[0-9.]+/);
            e && e.length > 0 && (o = e[0])
        }
        return t.getBoundingClientRect().height / o
    }, Xc = "magGlass", Wc = "olsPage=cart";
    class Vc extends(global.React || guac.react).Component {
        render() {
            const {
                staticContent: e,
                showSearch: t,
                onChange: a,
                uniqueId: o,
                searchQuery: r,
                formSubmit: l,
                isMobile: n,
                searchFormLocation: i
            } = this.props;
            let s = void 0;
            return s = n ? "NavigationDrawer" : s, s = "DESKTOP_NAV_COVER" === i ? "SearchPopout" : s, t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Form.Search, {
                section: "default",
                onSubmit: l
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input.Search, {
                id: o + "-input",
                "data-aid": Zs.SEARCH_FIELD_RENDERED,
                onChange: e => a({
                    searchQuery: e.target.value
                }),
                value: r,
                autoComplete: "off",
                "aria-autocomplete": "none",
                name: "keywords",
                placeholder: e.search_placeholder,
                "aria-label": e.search_placeholder,
                group: s,
                searchFormLocation: i
            }))
        }
    }
    Vc.propTypes = {
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        showSearch: (global.PropTypes || guac["prop-types"]).bool,
        onChange: (global.PropTypes || guac["prop-types"]).func,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        uniqueId: (global.PropTypes || guac["prop-types"]).string,
        searchQuery: (global.PropTypes || guac["prop-types"]).string,
        formSubmit: (global.PropTypes || guac["prop-types"]).func,
        searchFormLocation: (global.PropTypes || guac["prop-types"]).string
    }, Vc.defaultProps = {
        staticContent: {},
        onChange: (global._ || guac.lodash).noop,
        formSubmit: (global._ || guac.lodash).noop
    };
    class Fc extends(global.React || guac.react).Component {
        render() {
            const {
                section: e,
                iconSection: t,
                styles: a,
                showSearch: o,
                onSearchOpenClick: r,
                onSearchClosedClick: l,
                inNavigationDrawer: n,
                iconStyles: i
            } = this.props, s = {
                cursor: "pointer",
                position: "absolute",
                overflow: "visible",
                ...n ? {} : {
                    left: "0px",
                    top: "calc(50%)",
                    transform: "translateY(-50%)",
                    "@md": {
                        left: o ? (40 - parseFloat(Pt, 10)) / 2 + "px" : "0px"
                    }
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon.Search, {
                icon: Xc,
                "data-aid": o ? Zs.SEARCH_ICON_RENDERED_OPEN : Zs.SEARCH_ICON_RENDERED,
                onMouseUp: o ? l : r,
                onTouchEnd: o ? l : r,
                section: t || e,
                style: { ...s,
                    ...o ? {} : a,
                    ...i
                },
                size: Pt,
                minTarget: !o
            })
        }
    }
    Fc.propTypes = {
        section: (global.PropTypes || guac["prop-types"]).string,
        iconSection: (global.PropTypes || guac["prop-types"]).string,
        styles: (global.PropTypes || guac["prop-types"]).object,
        showSearch: (global.PropTypes || guac["prop-types"]).bool,
        onSearchOpenClick: (global.PropTypes || guac["prop-types"]).func,
        inNavigationDrawer: (global.PropTypes || guac["prop-types"]).bool,
        onSearchClosedClick: (global.PropTypes || guac["prop-types"]).func,
        iconStyles: (global.PropTypes || guac["prop-types"]).object
    }, Fc.defaultProps = {
        styles: {},
        onSearchOpenClick: (global._ || guac.lodash).noop,
        onSearchClosedClick: (global._ || guac.lodash).noop
    };
    class jc extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.state = {
                container: null
            }, this.checkForContainer = this.checkForContainer.bind(this)
        }
        checkForContainer() {
            const e = document.getElementById(this.props.containerId);
            e && (this.setState({
                container: e
            }), clearInterval(this._intervalId))
        }
        findContainer() {
            const {
                containerId: e
            } = this.props;
            e ? this._intervalId = setInterval(this.checkForContainer, 50) : this.setState({
                container: null
            })
        }
        componentDidMount() {
            this.findContainer()
        }
        componentDidUpdate(e) {
            this.props.containerId !== e.containerId && (clearInterval(this._intervalId), this.findContainer())
        }
        componentWillUnmount() {
            clearInterval(this._intervalId)
        }
        render() {
            const {
                children: e,
                containerId: t
            } = this.props, {
                container: a
            } = this.state;
            return t ? a ? (global.ReactDOM || guac["react-dom"]).createPortal(e, a) : null : e
        }
    }

    function Gc(e) {
        const {
            showSearch: t,
            iconSizeDesktop: a,
            sidebarWidth: o,
            renderForm: r,
            renderMagnifyIcon: l,
            renderCloseIcon: n
        } = e, i = {
            icon: {
                pointerEvents: "none",
                opacity: .4
            },
            innerContainer: {
                zIndex: 1,
                position: "absolute",
                left: 0,
                width: a,
                transition: "width 0.3s",
                ...t && {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "medium",
                    left: o - 48,
                    transform: "translateY(-50%)",
                    paddingRight: o,
                    width: "100vw",
                    height: 145,
                    backgroundColor: "section"
                }
            },
            searchFormWrapper: {
                position: t ? "relative" : "unset",
                display: "flex",
                justifyContent: "space-between",
                width: "80%"
            }
        };
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: i.container
        }, t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            icon: Xc,
            style: i.icon
        }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: i.innerContainer,
            section: "default"
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: i.searchFormWrapper
        }, r(), l(), n())))
    }

    function qc(e) {
        return /mobile/i.test(e)
    }
    jc.propTypes = {
        containerId: (global.PropTypes || guac["prop-types"]).string,
        children: (global.PropTypes || guac["prop-types"]).any
    }, Gc.propTypes = {
        iconSizeDesktop: (global.PropTypes || guac["prop-types"]).string,
        showSearch: (global.PropTypes || guac["prop-types"]).bool,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        renderForm: (global.PropTypes || guac["prop-types"]).func,
        renderMagnifyIcon: (global.PropTypes || guac["prop-types"]).func,
        renderCloseIcon: (global.PropTypes || guac["prop-types"]).func
    }, Gc.defaultProps = {
        iconSizeDesktop: Rt
    };
    const $c = {
        display: "flex",
        alignItems: "center"
    };
    class Yc extends(global.React || guac.react).Component {
        constructor(e, {
            viewDevice: a
        }) {
            super(e), t(this, "handleMatchMedia", (e => {
                const {
                    viewDevice: t,
                    renderMode: a
                } = this.context, o = a === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH ? "xs" === e.size : qc(t);
                o !== this.state.isMobile && this.setState({
                    isMobile: o
                })
            })), t(this, "renderMagnifyIcon", (() => {
                const {
                    showSearch: e,
                    section: t,
                    iconSection: a,
                    searchOpen: o,
                    handleFormSubmit: r,
                    iconStyles: l
                } = this.props;
                return (global.React || guac.react).createElement(Fc, {
                    showSearch: e,
                    section: t,
                    iconSection: a,
                    onSearchOpenClick: o,
                    onSearchClosedClick: r,
                    inNavigationDrawer: this.inNavigationDrawer,
                    iconStyles: l
                })
            })), t(this, "renderForm", (() => {
                const {
                    showSearch: e,
                    staticContent: t,
                    uniqueId: a,
                    searchFormLocation: o,
                    searchInputOnChange: r,
                    searchQuery: l,
                    handleFormSubmit: n
                } = this.props, {
                    isMobile: i
                } = this.state;
                return (global.React || guac.react).createElement(Vc, {
                    showSearch: e,
                    staticContent: t,
                    uniqueId: a,
                    onChange: r,
                    searchQuery: l,
                    formSubmit: n,
                    isMobile: i,
                    searchFormLocation: o
                })
            })), t(this, "renderCloseIcon", (e => {
                const {
                    showSearch: t,
                    keepOpen: a,
                    searchClose: o
                } = this.props, r = {
                    display: t && !a ? "block" : "none",
                    position: e ? "fixed" : "static",
                    cursor: "pointer",
                    right: "small",
                    top: "small",
                    marginLeft: e ? 0 : "medium"
                };
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.CloseIcon, {
                    onClick: o,
                    style: r,
                    "data-aid": Zs.SEARCH_CLOSE_RENDERED,
                    size: Pt,
                    minTarget: !0
                })
            }));
            const {
                searchFormLocation: o
            } = this.props;
            this.inNavigationDrawer = o === hl, this.state = {
                isMobile: qc(a)
            }
        }
        generatePositionValues() {
            const {
                showSearch: e,
                iconSizeMobile: t,
                isIE11: a,
                ieSearchPos: o
            } = this.props, {
                isMobile: r
            } = this.state, {
                renderMode: l
            } = this.context, n = l === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PREVIEW && a;
            let i, s, c, g;
            return e ? n && e && o && r ? (s = o[0], i = o[1], c = o[2], g = o[3]) : (i = "0px", s = "0px", c = "100%", g = "100%") : (i = "50%", s = "auto", c = t, g = "auto"), {
                topVal: i,
                leftVal: s,
                widthVal: c,
                heightVal: g
            }
        }
        renderMobileSearchContainer() {
            const {
                showSearch: e,
                uniqueId: t,
                searchCategoryOverrides: o
            } = this.props, {
                renderMode: r
            } = this.context, {
                topVal: l,
                leftVal: n,
                widthVal: i,
                heightVal: s
            } = this.generatePositionValues(), c = {
                display: "flex",
                flexDirection: "column",
                position: e ? "fixed" : "absolute",
                top: l,
                left: n,
                right: e ? "auto" : "0px",
                width: i,
                height: e ? zc(r) : s,
                transform: e ? "none" : "translateY(-50%)",
                maxWidth: e ? "100%" : i
            };
            e || (c.backgroundColor = "transparent");
            const g = e ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.NavigationDrawer : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block;
            let p;
            return o && (p = e ? o.openCategory : o.closeCategory), (global.React || guac.react).createElement(g, a({
                id: t + "-container",
                style: c
            }, o && {
                category: p
            }), this.renderCloseIcon(!0), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    padding: e ? "large" : "none"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    position: "relative"
                }
            }, this.renderForm(), this.renderMagnifyIcon())))
        }
        renderNavigationDrawerSearchContainer() {
            const {
                showSearch: e,
                iconSizeDesktop: t
            } = this.props, a = {
                container: { ...$c,
                    paddingVertical: "xsmall",
                    width: e ? "100%" : t
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: a.container
            }, this.renderForm(), this.renderMagnifyIcon())
        }
        renderSidebarSearchContainer() {
            const {
                showSearch: e,
                iconSizeDesktop: t,
                sidebarWidth: a,
                uniqueId: o
            } = this.props;
            return (global.React || guac.react).createElement(Gc, {
                iconSizeDesktop: t,
                showSearch: e,
                uniqueId: o,
                sidebarWidth: a,
                renderForm: this.renderForm,
                renderMagnifyIcon: this.renderMagnifyIcon,
                renderCloseIcon: this.renderCloseIcon
            })
        }
        renderDesktopSearchContainer() {
            const {
                searchPosition: e,
                showSearch: t,
                iconSizeDesktop: o,
                searchWidth: r,
                showBackground: l,
                searchBgStyle: n,
                searchCategoryOverrides: i
            } = this.props, s = "centered" === e || l, c = {
                container: { ...$c,
                    position: "absolute",
                    zIndex: t ? "1" : "0",
                    right: "0px",
                    top: "50%",
                    paddingVertical: t && !s ? "small" : "none",
                    backgroundColor: t && s ? "section" : "transparent",
                    width: t ? r : o,
                    transform: t && "centered" === e ? "translate(60%, -50%)" : "translateY(-50%)",
                    ...t && n
                },
                searchFormWrapper: {
                    width: t ? "100%" : o
                }
            };
            let g;
            return i && (g = t ? i.openCategory : i.closeCategory), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: c.container
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, a({
                style: c.searchFormWrapper
            }, i && {
                category: g
            }), this.renderForm(), this.renderMagnifyIcon()), this.renderCloseIcon())
        }
        renderCoverSearchContainer() {
            const {
                searchPosition: e,
                showSearch: t,
                iconSizeDesktop: o,
                searchWidth: r,
                navWidth: l,
                searchCategoryOverrides: n,
                formContainerId: i,
                onHomepage: s,
                hasNavBackground: c,
                section: g
            } = this.props, p = {
                formWrapper: {
                    display: t ? "block" : "none",
                    zIndex: 1,
                    position: "absolute",
                    right: "0px",
                    top: "50%",
                    width: r,
                    maxWidth: l ? l / 2 + "px" : "600px",
                    transform: "centered" === e ? "translate(60%, -50%)" : "translateY(-50%)"
                },
                navIcon: {
                    width: o
                }
            }, u = {
                section: g
            };
            c || (s ? u.category = "neutral" : u.section = "alt" === g ? "default" : "alt"), n && (u.category = n[t ? "openCategory" : "closeCategory"]);
            const d = (global.React || guac.react).createElement(jc, {
                containerId: i
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: p.formWrapper
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.SearchPopout, a({}, u, {
                hasBorder: c
            }), this.renderMagnifyIcon(), this.renderForm(), this.renderCloseIcon())));
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: p.navIcon
            }, this.renderMagnifyIcon()), d)
        }
        renderFormSubmitLink() {
            const {
                searchQuery: e,
                shopRoute: t,
                shopPageId: a,
                domainName: o,
                pageRoute: r,
                anchorId: l,
                useBestMatch: n
            } = this.props, {
                renderMode: i
            } = this.context, s = `olsPage=search&keywords=${e}${n?"&sortOption=descend_by_match":""}`;
            return (global.React || guac.react).createElement(gc, {
                id: l,
                href: `${t}?${s}`,
                "data-page": a,
                "data-page-query": s,
                style: {
                    display: "none"
                },
                renderMode: i,
                domainName: o,
                pageRoute: r
            })
        }
        renderCloseDropdownLink() {
            const {
                closeId: e
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, {
                id: e,
                style: {
                    display: "none"
                },
                "data-close": !0
            })
        }
        render() {
            const {
                iconSizeMobile: e,
                iconSizeDesktop: t,
                isShopPage: a,
                searchFormLocation: o
            } = this.props;
            let r;
            switch (o) {
                case hl:
                    r = this.renderNavigationDrawerSearchContainer();
                    break;
                case bl:
                    r = this.renderSidebarSearchContainer();
                    break;
                case ul:
                    r = this.renderDesktopSearchContainer();
                    break;
                case dl:
                    r = this.renderCoverSearchContainer();
                    break;
                default:
                    r = this.renderMobileSearchContainer()
            }
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-aid": Zs.SEARCH_FORM_RENDERED,
                style: {
                    width: o === hl ? "100%" : e,
                    ...$c,
                    position: "relative",
                    "@md": {
                        width: t
                    }
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.MatchMedia, {
                onChange: this.handleMatchMedia
            }), r, a ? null : this.renderFormSubmitLink(), this.inNavigationDrawer && this.renderCloseDropdownLink())
        }
    }
    Yc.propTypes = {
        isShopPage: (global.PropTypes || guac["prop-types"]).bool,
        shopPageId: (global.PropTypes || guac["prop-types"]).string,
        shopRoute: (global.PropTypes || guac["prop-types"]).string,
        searchPosition: (global.PropTypes || guac["prop-types"]).string,
        showBackground: (global.PropTypes || guac["prop-types"]).bool,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        keepOpen: (global.PropTypes || guac["prop-types"]).bool,
        iconSizeMobile: (global.PropTypes || guac["prop-types"]).string,
        iconSizeDesktop: (global.PropTypes || guac["prop-types"]).string,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        ieSearchPos: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).string),
        isIE11: (global.PropTypes || guac["prop-types"]).bool,
        showSearch: (global.PropTypes || guac["prop-types"]).bool,
        navWidth: (global.PropTypes || guac["prop-types"]).number,
        screenWidth: (global.PropTypes || guac["prop-types"]).number,
        searchWidth: (global.PropTypes || guac["prop-types"]).string,
        searchQuery: (global.PropTypes || guac["prop-types"]).string,
        uniqueId: (global.PropTypes || guac["prop-types"]).string,
        searchClose: (global.PropTypes || guac["prop-types"]).func,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        handleFormSubmit: (global.PropTypes || guac["prop-types"]).func,
        searchInputOnChange: (global.PropTypes || guac["prop-types"]).func,
        iconSection: (global.PropTypes || guac["prop-types"]).string,
        color: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        searchOpen: (global.PropTypes || guac["prop-types"]).func,
        anchorId: (global.PropTypes || guac["prop-types"]).string,
        closeId: (global.PropTypes || guac["prop-types"]).string,
        searchFormLocation: (global.PropTypes || guac["prop-types"]).oneOf([ul, dl, hl, bl]),
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        searchBgStyle: (global.PropTypes || guac["prop-types"]).func,
        searchCategory: (global.PropTypes || guac["prop-types"]).string,
        searchCategoryOverrides: (global.PropTypes || guac["prop-types"]).object,
        iconStyles: (global.PropTypes || guac["prop-types"]).object,
        formContainerId: (global.PropTypes || guac["prop-types"]).string,
        onHomepage: (global.PropTypes || guac["prop-types"]).bool,
        hasNavBackground: (global.PropTypes || guac["prop-types"]).bool,
        useBestMatch: (global.PropTypes || guac["prop-types"]).bool
    }, Yc.contextTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        viewDevice: (global.PropTypes || guac["prop-types"]).string.isRequired
    }, Yc.defaultProps = {
        searchPosition: "default",
        iconSizeMobile: Rt,
        iconSizeDesktop: Rt,
        ieSearchPos: [],
        searchWidth: "200px",
        searchInputOnChange: (global._ || guac.lodash).noop,
        searchClose: (global._ || guac.lodash).noop,
        searchBackgroundStyle: {},
        iconStyles: {},
        shopRoute: "",
        useBestMatch: !1
    };
    let Kc = !1;

    function Zc() {
        if ("undefined" == typeof window || Kc) return;
        Kc = !0;
        const e = window.EventTarget || window.Node;
        let t = !1;
        if (document.createElement("div").addEventListener("test", (function() {}), {
                get passive() {
                    return t = !0, !1
                }
            }), !t) {
            const t = e.prototype.addEventListener,
                a = e.prototype.removeEventListener;
            e.prototype.addEventListener = function(e, a, o) {
                const r = "object" == typeof o ? o.capture : o;
                t.call(this, e, a, r)
            }, e.prototype.removeEventListener = function(e, t, o) {
                const r = "object" == typeof o ? o.capture : o;
                a.call(this, e, t, r)
            }
        }
    }
    const Qc = {
        display: "flex",
        alignItems: "center"
    };
    class Jc extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.handleFormSubmit = this.handleFormSubmit.bind(this), this.searchOpen = this.searchOpen.bind(this), this.searchClose = this.searchClose.bind(this), this.handleResize = this.handleResize.bind(this), this.handleDomSideEffect = this.handleDomSideEffect.bind(this), this._anchorId = (global._ || guac.lodash).uniqueId("Search-Anchor"), this._uniqueId = (global._ || guac.lodash).uniqueId("Search"), this._closeId = (global._ || guac.lodash).uniqueId("Close"), this.searchWidth = e.searchWidth, this.state = {
                searchQuery: "",
                showSearch: !1
            }
        }
        componentDidMount() {
            this.mounted = !0, Zc(), this.prepareForIE11(), this.calculateSearchWidth(), this.calculateScreenWidth(), this.calculateNavWidth(), this.calculateSearchPos(), window.addEventListener("resize", this.handleResize, !1), this.viewTablet && this.viewTablet.addEventListener("scroll", this.handleResize, {
                passive: !0
            })
        }
        componentWillUnmount() {
            this.mounted = !1, window.removeEventListener("resize", this.handleResize, !1), this.viewTablet && this.viewTablet.removeEventListener("scroll", this.handleResize, {
                passive: !0
            })
        }
        componentDidUpdate() {
            const {
                renderMode: e
            } = this.props, {
                showSearch: t
            } = this.state;
            e !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PREVIEW && e !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT || this.calculateSearchWidth(), e === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT && !0 === t && this.searchClose()
        }
        prepareForIE11() {
            this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode, this.viewTablet = document.getElementById("view-tablet")
        }
        handleResize() {
            const {
                showSearch: e
            } = this.state, {
                isMobile: t,
                renderMode: a
            } = this.props;
            if (!1 === this.mounted || "undefined" == typeof document || a !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PREVIEW || !e || !1 === this.isIE11) return;
            const o = document.getElementById(this._uniqueId + "-container");
            o && t && (this.calculateSearchPos(), o.style.left = this.ieSearchPos[0] + "px", o.style.top = this.ieSearchPos[1] + "px")
        }
        calculateSearchWidth() {
            const {
                widthId: e,
                isMobile: t,
                minWidth: a,
                pipeWidth: o,
                searchFormLocation: r,
                membershipOn: l
            } = this.props;
            if (t) return;
            const n = document.getElementById(e);
            if (n) {
                const e = n.offsetWidth;
                if (e)
                    if (e < a) this.searchWidth = a;
                    else {
                        const t = o ? 35 : 0;
                        this.searchWidth = e + t
                    }
                this.searchWidth += 40
            }
            r === dl && (this.searchWidth += l ? 150 : 100)
        }
        calculateScreenWidth() {
            const e = window,
                t = document,
                a = t.documentElement,
                o = t.getElementsByTagName("body")[0];
            this.screenWidth = e.innerWidth || a.clientWidth || o.clientWidth
        }
        calculateNavWidth() {
            const {
                isMobile: e,
                navBarId: t
            } = this.props;
            if (e) return;
            const a = document.getElementById(t);
            a && (this.navWidth = a.offsetWidth)
        }
        calculateSearchPos() {
            const {
                renderMode: e,
                isMobile: t
            } = this.props;
            let a, o, r, l;
            if (e === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PREVIEW && this.isIE11 && t) {
                const e = document.getElementsByClassName("viewport")[0];
                if (e) {
                    const t = e.getBoundingClientRect();
                    o = t.left, a = t.top, r = e.offsetWidth, l = e.offsetHeight
                }
            }
            this.ieSearchPos = [o, a, r, l]
        }
        handleFormSubmit(e) {
            e.preventDefault();
            const {
                isShopPage: t,
                inNavigationDrawer: a
            } = this.props;
            document.activeElement && document.activeElement.blur && document.activeElement.blur();
            const o = (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.getState().use_best_match,
                r = document.getElementById(this._anchorId);
            if (t) {
                const e = this.state.searchQuery;
                if (e) {
                    const t = {
                        keywords: e
                    };
                    o && (t.sortOption = "descend_by_match"), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).RouteHandler.navigate((global.OLSCore || guac["@wsb/guac-widget-ols-core"]).ShopViewConstants.SEARCH_RESULTS, t), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).ScrollWidgetActions.scrollShopWidget()
                }
            } else r && r.click && r.click();
            if (a) {
                const e = document.getElementById(this._closeId);
                e && e.click && e.click()
            }
            return this.searchClose(), !1
        }
        searchOpen() {
            setTimeout((() => {
                document.getElementById(this._uniqueId + "-input").focus()
            }), 0), this.setState({
                showSearch: !0
            }, (() => {
                this.handleDomSideEffect(this.state.showSearch)
            })), this.calculateSearchPos(), document.ontouchmove = function(e) {
                e.preventDefault()
            }
        }
        searchClose() {
            this.setState({
                showSearch: !1,
                searchQuery: ""
            }, (() => {
                this.handleDomSideEffect(this.state.showSearch)
            })), document.ontouchmove = function() {
                return !0
            }
        }
        handleDomSideEffect(e) {
            const {
                renderMode: t
            } = this.props;
            Uc(t).style["overflow-y"] = e ? "hidden" : "scroll"
        }
        renderSearchForm() {
            const {
                isShopPage: e,
                shopPageId: t,
                shopRoute: a,
                renderMode: o,
                searchPosition: r,
                searchBgStyle: l,
                isMobile: n,
                inNavigationDrawer: i,
                iconSizeMobile: s,
                iconSizeDesktop: c,
                domainName: g,
                pageRoute: p,
                staticContent: u,
                iconSection: d,
                section: h,
                keepOpen: b,
                searchWidthAdj: m,
                searchFormLocation: y,
                sidebarWidth: f,
                searchCategoryOverrides: w,
                iconStyles: C,
                formContainerId: E,
                onHomepage: T,
                hasNavBackground: P
            } = this.props, {
                showSearch: R,
                searchQuery: v
            } = this.state;
            return (global.React || guac.react).createElement(Yc, {
                isShopPage: e,
                shopPageId: t,
                shopRoute: a,
                renderMode: o,
                searchPosition: r,
                searchBgStyle: l,
                isMobile: n,
                inNavigationDrawer: i,
                iconSizeMobile: s,
                iconSizeDesktop: c,
                domainName: g,
                pageRoute: p,
                ieSearchPos: this.ieSearchPos,
                isIE11: this.isIE11,
                showSearch: R || b,
                navWidth: this.navWidth,
                screenWidth: this.screenWidth,
                searchWidth: this.searchWidth + m,
                searchQuery: v,
                uniqueId: this._uniqueId,
                searchClose: this.searchClose,
                staticContent: u,
                handleFormSubmit: this.handleFormSubmit,
                searchInputOnChange: e => this.setState(e),
                iconSection: d,
                section: h,
                searchOpen: this.searchOpen,
                anchorId: this._anchorId,
                closeId: this._closeId,
                searchFormLocation: y,
                sidebarWidth: f,
                searchCategoryOverrides: w,
                iconStyles: C,
                formContainerId: E,
                onHomepage: T,
                hasNavBackground: P,
                useBestMatch: (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.getState().use_best_match
            })
        }
        render() {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: { ...Qc,
                    fontSize: "xsmall"
                },
                children: this.renderSearchForm()
            })
        }
    }
    Jc.propTypes = {
        widthId: (global.PropTypes || guac["prop-types"]).string,
        searchBgStyle: (global.PropTypes || guac["prop-types"]).func,
        searchWidth: (global.PropTypes || guac["prop-types"]).number,
        pipeWidth: (global.PropTypes || guac["prop-types"]).bool,
        minWidth: (global.PropTypes || guac["prop-types"]).number,
        searchPosition: (global.PropTypes || guac["prop-types"]).string,
        iconSizeMobile: (global.PropTypes || guac["prop-types"]).string,
        iconSizeDesktop: (global.PropTypes || guac["prop-types"]).string,
        color: (global.PropTypes || guac["prop-types"]).string,
        isShopPage: (global.PropTypes || guac["prop-types"]).bool,
        shopPageId: (global.PropTypes || guac["prop-types"]).string,
        shopRoute: (global.PropTypes || guac["prop-types"]).string,
        iconSection: (global.PropTypes || guac["prop-types"]).string,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        inNavigationDrawer: (global.PropTypes || guac["prop-types"]).bool,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        keepOpen: (global.PropTypes || guac["prop-types"]).bool,
        searchWidthAdj: (global.PropTypes || guac["prop-types"]).number,
        searchFormLocation: (global.PropTypes || guac["prop-types"]).oneOf(["MOBILE_NAV", ul, hl, bl]),
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        searchCategoryOverrides: (global.PropTypes || guac["prop-types"]).object,
        iconStyles: (global.PropTypes || guac["prop-types"]).object,
        formContainerId: (global.PropTypes || guac["prop-types"]).string,
        navBarId: (global.PropTypes || guac["prop-types"]).string,
        membershipOn: (global.PropTypes || guac["prop-types"]).bool,
        onHomepage: (global.PropTypes || guac["prop-types"]).bool,
        hasNavBackground: (global.PropTypes || guac["prop-types"]).bool
    }, Jc.defaultProps = {
        searchWidthAdj: 0,
        minWidth: 200,
        pipeWidth: !1,
        isMobile: !1,
        inNavigationDrawer: !1,
        keepOpen: !1,
        iconSizeMobile: Rt,
        iconSizeDesktop: Rt,
        searchWidth: 400,
        iconStyles: {}
    };
    const {
        components: {
            Bootstrap: eg
        }
    } = global.Core || guac["@wsb/guac-widget-core"];
    class tg extends(global.React || guac.react).Component {
        extractSearchProps() {
            return (global._ || guac.lodash).pick(this.props, (global._ || guac.lodash).keys(Jc.propTypes))
        }
        render() {
            return this.props.shopPageId ? (global.React || guac.react).createElement(eg.Radpack, a({
                entry: "@widget/LAYOUT/bs-Search-Component",
                Component: Jc
            }, this.extractSearchProps())) : null
        }
    }

    function ag(e) {
        return e && e.socialAccountsEnabled && Object.keys((global._ || guac.lodash).omit(e, "socialAccountsEnabled")).filter((t => !!e[t])).length > 0
    }

    function og(e = {}, t, a) {
        if (!ag(e)) return [];
        const o = Object.keys((global._ || guac.lodash).omit(e, "socialAccountsEnabled")).filter((t => !!e[t]));
        return (global._ || guac.lodash).chunk(o, a && o.length > t ? Math.ceil(o.length / 2) : t).map((t => t.reduce(((t, a) => (t[a] = e[a], t)), {}))).map((e => (e.socialAccountsEnabled = !0, e)))
    }
    tg.propTypes = {
        shopPageId: (global.PropTypes || guac["prop-types"]).string
    };
    const rg = (e, t) => [(global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PREVIEW, (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH].includes(e) ? (global._ || guac.lodash).filter(t, (e => !e.isFlyoutMenu || e.isFlyoutMenu && e.navigation.length)) : t;
    class lg extends(global.React || guac.react).Component {
        constructor(...e) {
            super(...e), t(this, "handleNavigationDrawerClick", (e => {
                e.stopPropagation()
            }))
        }
        renderLink(e, t) {
            const {
                domainName: a,
                renderMode: o,
                pageRoute: r
            } = this.props;
            return (global.React || guac.react).createElement(gc, {
                tag: "a",
                style: t.link,
                href: e.href,
                target: e.target,
                rel: "_blank" === e.target ? "noopener" : "",
                "data-page": e.pageId,
                "data-edit-interactive": !0,
                "data-close": !0,
                renderMode: o,
                domainName: a,
                pageRoute: r,
                isActive: e.active
            }, (global.React || guac.react).createElement("span", null, e.name))
        }
        renderMenu(e, t) {
            const {
                domainName: a,
                renderMode: o,
                pageRoute: r,
                nestedAlwaysOpen: l,
                navProps: n = {}
            } = this.props, {
                enableActiveFlyoutMenu: i
            } = n;
            return (global.React || guac.react).createElement(xc, {
                item: e,
                styles: t,
                renderMode: o,
                domainName: a,
                pageRoute: r,
                alwaysOpen: l,
                enableActiveFlyoutMenu: i
            })
        }
        onHandleStyles() {
            const {
                listStyle: e,
                subListStyle: t,
                linkStyle: a,
                sublinkStyle: o,
                activeSublinkStyle: r,
                searchFormStyle: l,
                socialContainerStyle: n
            } = this.props;
            return {
                mobileOnly: {
                    "@xs": {
                        display: "block"
                    },
                    "@md": {
                        display: "none"
                    }
                },
                overlay: {
                    position: "fixed",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column"
                },
                innerContainer: {
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%"
                },
                topContainer: {
                    paddingHorizontal: "medium"
                },
                membershipHeader: {
                    paddingBottom: "large"
                },
                close: {
                    position: "absolute",
                    top: 15,
                    right: 15,
                    fontSize: "xlarge"
                },
                list: {
                    textAlign: "left",
                    paddingVertical: "0",
                    paddingHorizontal: "0",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    ...e
                },
                link: a,
                subList: {
                    paddingHorizontal: "0",
                    paddingTop: "0",
                    paddingBottom: "small",
                    ...t
                },
                subListItem: {
                    display: "block",
                    marginBottom: "0",
                    borderBottomWidth: "0",
                    ":last-child": {
                        paddingBottom: "medium"
                    }
                },
                sublink: o,
                activeSublink: r,
                socialContainer: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "large",
                    flexDirection: "column",
                    "> :not(:first-child)": {
                        marginTop: "small"
                    },
                    ...n
                },
                searchFormContainer: {
                    position: "relative",
                    height: "auto",
                    ...l
                },
                translateContainer: {
                    "@md": {
                        display: "none"
                    }
                }
            }
        }
        renderSocialLinks() {
            const {
                socialProfiles: e = {},
                staticContent: t
            } = this.props, a = {
                socialProfilesStyles: {
                    styles: {
                        size: Pt
                    },
                    baseProps: {
                        style: {
                            justifyContent: "center",
                            "@md": {
                                justifyContent: "flex-end"
                            }
                        }
                    }
                }
            };
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, og(e, 5).map(((e, o) => (global.React || guac.react).createElement(Dc, {
                key: o,
                socialProfiles: e,
                styles: a.socialProfilesStyles.styles,
                baseProps: a.socialProfilesStyles.baseProps,
                inDrawer: !0,
                staticContent: t
            }))))
        }
        render() {
            const {
                category: e,
                navigation: t,
                renderMode: o,
                id: r,
                googleTranslateOptions: l,
                searchFormProps: n,
                socialProfiles: i,
                hideCloseIcon: s,
                logoAlign: c,
                ...g
            } = this.props, {
                canLogin: p
            } = this.props.navProps || {}, {
                commerce: u,
                keepOpen: d
            } = n || {}, h = r + "-navId-mobile", b = r + "-navContainerId-mobile", m = r + "-navLinksContentId-mobile", y = r + "-navListId-mobile", f = this.onHandleStyles(), w = rg(o, t), C = o === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.NavigationDrawer, a({
                id: h,
                category: e
            }, g, {
                style: f.overlay
            }, !C && {
                onClick: this.handleNavigationDrawerClick
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: f.translateContainer
            }, (global.React || guac.react).createElement(wc, {
                renderMode: o,
                googleTranslateOptions: l,
                category: e
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: f.topContainer
            }, p && C && (global.React || guac.react).createElement(sc, a({
                id: r,
                renderMode: o,
                styles: f
            }, (global._ || guac.lodash).pick(this.props.navProps, ["canLogin", "canCreateAccount", "staticContent"]))), !s && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.CloseIcon, {
                logoAlign: c,
                style: f.close,
                "data-edit-interactive": !0,
                "data-close": !0,
                size: Pt
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, {
                id: b,
                style: f.innerContainer
            }, i && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: f.socialContainer
            }, this.renderSocialLinks()), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                id: m
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List, {
                id: y,
                style: f.list
            }, w.map((e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                tag: "li",
                key: e.pageId
            }, e.navigation ? this.renderMenu(e, f) : this.renderLink(e, f))))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: f.mobileOnly
            }, u && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: f.searchFormContainer
            }, (global.React || guac.react).createElement(tg, a({
                shopPageId: u,
                keepOpen: d,
                renderMode: o,
                searchFormLocation: hl,
                inNavigationDrawer: !0
            }, (global._ || guac.lodash).omit(this.props.navProps, "category")))), p && (global.React || guac.react).createElement(bc, a({}, (global._ || guac.lodash).pick(this.props.navProps, ["hasActiveOLA", "hasActiveOLS", "canLogin", "canCreateAccount", "membershipAdminPages", "staticContent"]), {
                id: r,
                renderMode: o,
                styles: f
            }))))))
        }
    }

    function ng(e) {
        const {
            sidebarWidth: t,
            toggleId: a,
            children: o
        } = e;
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.SubMenu, {
            section: "alt",
            sidebarWidth: t,
            id: a
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List, {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "hidden",
                width: "inherit"
            }
        }, o))
    }
    lg.propTypes = {
        domainName: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        navigation: (global.PropTypes || guac["prop-types"]).array,
        id: (global.PropTypes || guac["prop-types"]).string,
        googleTranslateOptions: (global.PropTypes || guac["prop-types"]).object,
        socialContainerStyle: (global.PropTypes || guac["prop-types"]).object,
        linkStyle: (global.PropTypes || guac["prop-types"]).object,
        listStyle: (global.PropTypes || guac["prop-types"]).object,
        logoAlign: (global.PropTypes || guac["prop-types"]).string,
        sublinkStyle: (global.PropTypes || guac["prop-types"]).object,
        subListStyle: (global.PropTypes || guac["prop-types"]).object,
        activeSublinkStyle: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        socialProfiles: (global.PropTypes || guac["prop-types"]).object,
        searchFormProps: (global.PropTypes || guac["prop-types"]).object,
        navProps: (global.PropTypes || guac["prop-types"]).object,
        hideCloseIcon: (global.PropTypes || guac["prop-types"]).bool,
        category: (global.PropTypes || guac["prop-types"]).string,
        searchFormStyle: (global.PropTypes || guac["prop-types"]).object,
        nestedAlwaysOpen: (global.PropTypes || guac["prop-types"]).bool,
        enableActiveFlyoutMenu: (global.PropTypes || guac["prop-types"]).bool
    }, ng.propTypes = {
        open: (global.PropTypes || guac["prop-types"]).bool,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        toggleId: (global.PropTypes || guac["prop-types"]).string,
        children: (global.PropTypes || guac["prop-types"]).array
    };
    class ig extends(global.React || guac.react).Component {
        renderItems(e) {
            const {
                navigation: t
            } = this.props, a = e => e.text ? this.renderText.bind(this) : e.separator ? this.renderSeparator.bind(this) : this.renderLink.bind(this);
            return t.map(((t, o) => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                tag: "li",
                role: "menuitem",
                key: t.pageId || o,
                style: { ...e.listItem,
                    ...t.parentStyles
                }
            }, t.navigation ? this.renderSubLinks(t, e) : a(t)(t, e))))
        }
        renderText(e, t) {
            const {
                renderMode: o
            } = this.props;
            return (global.React || guac.react).createElement(hc, a({}, e, {
                renderMode: o,
                style: { ...t,
                    ...e.style
                },
                dataAid: e.dataAid
            }))
        }
        renderSeparator(e, t) {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, {
                style: t.separator
            })
        }
        renderLink(e, t) {
            const {
                domainName: a,
                renderMode: o,
                pageRoute: r,
                id: l
            } = this.props;
            return (global.React || guac.react).createElement(gc, {
                tag: "a",
                style: { ...t.link,
                    ...e.active && t.activeLink
                },
                href: e.href,
                target: e.target,
                rel: "_blank" === e.target ? "noopener" : "",
                "data-page": e.pageId,
                "data-edit-interactive": !0,
                children: e.name,
                renderMode: o,
                domainName: a,
                pageRoute: r,
                isActive: e.active,
                id: e.id,
                "aria-labelledby": l
            })
        }
        renderSubLinks(e, t) {
            const {
                ListItem: a,
                List: o,
                Block: r
            } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, {
                domainName: l,
                renderMode: n,
                pageRoute: i,
                id: s
            } = this.props;
            return (global.React || guac.react).createElement(r, null, (global.React || guac.react).createElement(gc, {
                tag: "a",
                style: { ...t.link,
                    cursor: "default",
                    marginBottom: 0
                },
                "data-ignore-close": !0,
                "data-edit-interactive": !0,
                renderMode: n,
                domainName: l,
                pageRoute: i,
                dataAid: e.dataAid,
                "aria-labelledby": s
            }, e.name), (global.React || guac.react).createElement(o.Nested, {
                role: "menu"
            }, e.navigation.map(((e, o) => (global.React || guac.react).createElement(a, {
                tag: "li",
                key: e.pageId || o,
                style: t.listItem,
                role: "menuitem"
            }, (global.React || guac.react).createElement(gc, {
                tag: "a",
                style: { ...t.sublink,
                    ...e.active && t.activeSublink
                },
                href: e.href,
                target: e.target,
                rel: "_blank" === e.target ? "noopener" : "",
                "data-page": e.pageId,
                "data-edit-interactive": !0,
                children: e.name,
                renderMode: n,
                domainName: l,
                pageRoute: i,
                isActive: e.active,
                isNested: !0,
                "aria-labelledby": s
            }))))))
        }
        render() {
            const {
                id: e,
                linkStyle: t,
                activeStyle: a,
                expandToLeft: o,
                navigation: r,
                adjustToIcon: l,
                className: n,
                dropdownStyles: i,
                groupType: s,
                sidebarWidth: c
            } = this.props, g = {
                dropdown: {
                    position: "absolute",
                    right: o ? "0px" : l && "",
                    top: "large",
                    whiteSpace: "nowrap",
                    maxHeight: "45vh",
                    overflowY: "auto",
                    display: "none",
                    zIndex: "3",
                    "@md-only": {
                        right: "0px"
                    },
                    "@sm-only": {
                        right: "0px"
                    },
                    ...i
                },
                listItem: {
                    display: "block",
                    textAlign: "left",
                    marginBottom: "0"
                },
                separator: {
                    marginTop: "small",
                    marginBottom: "small"
                },
                link: t,
                activeLink: a,
                activeSublink: a
            };
            return r && r.length ? c ? (global.React || guac.react).createElement(ng, {
                sidebarWidth: c,
                toggleId: e
            }, this.renderItems(g)) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Dropdown, {
                section: "default",
                tag: "ul",
                role: "menu",
                id: e,
                style: g.dropdown,
                className: n,
                groupType: s
            }, this.renderItems(g)) : null
        }
    }
    ig.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        linkStyle: (global.PropTypes || guac["prop-types"]).object,
        activeStyle: (global.PropTypes || guac["prop-types"]).object,
        expandToLeft: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        navigation: (global.PropTypes || guac["prop-types"]).array,
        dropdownStyles: (global.PropTypes || guac["prop-types"]).object,
        adjustToIcon: (global.PropTypes || guac["prop-types"]).bool,
        className: (global.PropTypes || guac["prop-types"]).string,
        groupType: (global.PropTypes || guac["prop-types"]).string,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number
    }, ig.defaultProps = {
        expandToLeft: !1,
        dropdownStyles: {}
    };
    class sg extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.handleChange = this.handleChange.bind(this), this.state = {
                open: !1
            }
        }
        handleChange() {
            this.setState({
                open: !this.state.open
            })
        }
        componentDidUpdate(e, {
            open: t
        }) {
            const {
                enableNoOverlapDropdown: a,
                customToggleStyles: o
            } = this.props;
            if (t !== this.state.open) {
                const {
                    toggleId: t
                } = e, r = document.getElementById(t);
                r && (a && (r.style.top = this.handleDropdownOffsetChange() + "px"), o ? (global._ || guac.lodash).merge(r.style, o[this.state.open ? "open" : "close"]) : r.style.display = this.state.open ? "block" : "none")
            }
        }
        handleDropdownOffsetChange() {
            const {
                navBarId: e,
                parentId: t
            } = this.props, a = document.getElementById(e).getBoundingClientRect(), o = document.getElementById(t).getElementsByTagName("li")[0].getBoundingClientRect(), r = (() => {
                const e = document.getElementsByClassName("ux-scaled");
                let t = 1;
                return e && e.length > 0 && (t = e[0].getAttribute("data-scale")), t
            })();
            return a && o ? (a.height - (o.top - a.top)) / r : 0
        }
        render() {
            const {
                label: e,
                renderCustomIcon: t,
                id: o,
                isActive: r,
                overrideIconStyle: l,
                dataAid: n,
                hasHover: i,
                renderCustomContent: s
            } = this.props, {
                open: c
            } = this.state, g = (global._ || guac.lodash).omit(this.props, Object.keys(sg.propTypes).concat(["Component", "renderMode"])), p = c ? "180" : "0", u = {
                position: "relative",
                color: "inherit",
                ...l
            }, d = e ? (global.React || guac.react).createElement("span", {
                style: {
                    marginRight: "4px"
                }
            }, e) : null;
            return (global.React || guac.react).createElement(Tc, a({
                onChange: this.handleChange,
                isActive: r
            }, g, c && this.props.activeProps, {
                "data-edit-interactive": !0,
                "aria-haspopup": "menu"
            }), s || (global.React || guac.react).createElement("div", {
                style: {
                    pointerEvents: i ? "auto" : "none",
                    display: "flex",
                    alignItems: "center"
                },
                "data-aid": n || Zs.NAV_DROPDOWN
            }, d, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                id: o,
                icon: t.name || "chevronDown",
                size: t.size || "small",
                minTarget: t.minTarget || !1,
                rotate: t.name ? "" : p,
                style: u
            })))
        }
    }
    sg.propTypes = {
        toggleId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        activeProps: (global.PropTypes || guac["prop-types"]).object,
        label: (global.PropTypes || guac["prop-types"]).string.isRequired,
        renderCustomIcon: (global.PropTypes || guac["prop-types"]).object,
        renderCustomContent: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).bool, (global.PropTypes || guac["prop-types"]).element, (global.PropTypes || guac["prop-types"]).node]),
        id: (global.PropTypes || guac["prop-types"]).string,
        isActive: (global.PropTypes || guac["prop-types"]).bool,
        enableNoOverlapDropdown: (global.PropTypes || guac["prop-types"]).bool,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        overrideIconStyle: (global.PropTypes || guac["prop-types"]).object,
        dataAid: (global.PropTypes || guac["prop-types"]).string,
        hasHover: (global.PropTypes || guac["prop-types"]).bool,
        navBarId: (global.PropTypes || guac["prop-types"]).string,
        parentId: (global.PropTypes || guac["prop-types"]).string,
        customToggleStyles: (global.PropTypes || guac["prop-types"]).object
    }, sg.defaultProps = {
        activeProps: {},
        label: "",
        renderCustomIcon: {},
        renderCustomContent: !1,
        hasHover: !1
    };
    const {
        components: {
            Bootstrap: cg
        }
    } = global.Core || guac["@wsb/guac-widget-core"];

    function gg(e) {
        return (global.React || guac.react).createElement(cg.Radpack, a({}, e, {
            Component: sg,
            entry: "@widget/LAYOUT/bs-FlyoutMenu-Component"
        }))
    }
    gg.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired
    };
    var pg = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.config = void 0, t.config = {
                cartUrl: "https://cart-checkout.dev-secureserver.net"
            }
        })),
        ug = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.config = void 0, t.config = {
                cartUrl: "https://cart-checkout.test-secureserver.net"
            }
        })),
        dg = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.config = void 0, t.config = {
                cartUrl: "https://cart-checkout.secureserver.net"
            }
        })),
        hg = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getConfig = void 0, t.getConfig = e => {
                switch (e) {
                    case "test":
                        return ug.config;
                    case "prod":
                    case "production":
                        return dg.config;
                    default:
                        return pg.config
                }
            }
        })),
        bg = Lt((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.cartSetup = void 0, t.cartSetup = e => (Boolean(window.__Commerce) || a(e), window.__Commerce.setupPromise);
            const a = e => {
                    const {
                        cartUrl: t
                    } = hg.getConfig(e.env || "local"), a = Object.assign(Object.assign({}, e), {
                        cartUrl: t
                    });
                    window.__Commerce = {
                        setupPromise: o(),
                        options: a
                    };
                    const r = document.createElement("script");
                    r.src = a.cartUrl + "/dist/embed.js", r.async = !0, r.id = "commerce-cart-script", document.body.appendChild(r)
                },
                o = () => {
                    let e, t;
                    const a = new Promise(((a, o) => {
                        e = a, t = o
                    }));
                    return a.resolve = e, a.reject = t, a
                }
        }));
    const mg = async ({
            shouldUseCache: e = !1,
            websiteId: t,
            rootDomain: a
        }) => {
            let o = !1;
            try {
                if (e && (o = "true" === sessionStorage.getItem("olaGopayCartOn"), +new Date - +sessionStorage.getItem("olaGopayCartOnTs") < 3e5)) return o;
                const r = await window.fetch((({
                        websiteId: e,
                        rootDomain: t
                    }) => `https://api.ola.${t}/accounts/${e}/config?fields[]=cart`)({
                        websiteId: t,
                        rootDomain: a
                    })),
                    l = (await r.json()).config;
                return o = l && l.is_gopay_cart_on, e && (sessionStorage.setItem("olaGopayCartOn", o), sessionStorage.setItem("olaGopayCartOnTs", +new Date)), o
            } catch (e) {
                return o
            }
        },
        yg = e => {
            const {
                ACCENT: t
            } = (global.Core || guac["@wsb/guac-widget-core"]).constants.categoryTypes;
            return {
                wrapper: {
                    position: "relative",
                    ":after": {
                        content: '""',
                        position: "absolute",
                        display: "block",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        backgroundColor: e === t ? "neutralOverlay" : "accentOverlay",
                        borderRadius: "0.75em",
                        opacity: e === t ? "0.2" : "0.1"
                    }
                },
                count: {
                    position: "relative",
                    minWidth: "1.5em",
                    padding: "0.25em",
                    lineHeight: "1",
                    textAlign: "center",
                    zIndex: "1"
                }
            }
        },
        fg = ({
            cart: e,
            renderMode: t
        }) => {
            if (t === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH) try {
                "true" === new URLSearchParams(window.location.search).get("showCart") && e.toggle()
            } catch (e) {}
        };
    class wg extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t(this, "setupOlaCart", (async () => {
                const {
                    websiteId: e,
                    rootDomain: t,
                    env: a,
                    renderMode: o
                } = this.props;
                if (!this.gopayCart) try {
                    const r = !!window.sessionStorage;
                    if (!await mg({
                            shouldUseCache: r,
                            websiteId: e,
                            rootDomain: t
                        })) return;
                    this.setState({
                        olaGopayCartOn: !0
                    }), this.gopayCart = await bg.cartSetup({
                        websiteId: e,
                        env: a
                    }), this.updateOlaStoreState(), this.gopayCartUnsubscribe = this.gopayCart.subscribe(this.updateOlaStoreState), fg({
                        cart: this.gopayCart,
                        renderMode: o
                    })
                } catch (e) {
                    this.gopayCart = null, this.setState({
                        olaGopayCartOn: !1
                    })
                }
            })), t(this, "updateOlaStoreState", (() => {
                if (!this.gopayCart) return;
                const {
                    quantitiesByType: e
                } = this.gopayCart.getState(), t = e.service || 0;
                this.setState({
                    olaQuantity: t
                })
            })), t(this, "updateOlsStoreState", (() => {
                const {
                    cart: e
                } = (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).CartStore.getState(), t = e ? e.total_quantity : 0, {
                    olsQuantity: a
                } = this.state, o = (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.isProvisioned();
                o !== this.state.olsProvisioned && this.setState({
                    olsProvisioned: o
                }), t !== a && this.setState({
                    olsQuantity: t
                }, (() => window.dispatchEvent(new Event("CartQuantityChange"))))
            })), t(this, "onStoreChange", (() => {
                const e = (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.isProvisioned();
                !this.state.olsProvisioned && e && setTimeout((() => {
                    (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).CartActions.loadCart()
                }), 0), this.updateOlsStoreState()
            })), t(this, "renderItemCount", (() => {
                const e = yg(this.props.category);
                return 0 === this.totalCartQuantity ? null : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: { ...e.wrapper,
                        marginLeft: "!-6px"
                    },
                    "data-aid": Zs.CART_ICON_COUNT
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                    style: { ...e.count,
                        color: "inherit"
                    },
                    featured: !0
                }, (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).NumberFormatter.toFormattedNumber(this.totalCartQuantity)))
            })), t(this, "handleOlsClick", (() => {
                (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).RouteHandler.navigate((global.OLSCore || guac["@wsb/guac-widget-ols-core"]).ShopViewConstants.CART), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).ScrollWidgetActions.scrollShopWidget()
            })), t(this, "getOlsLinkProps", (() => {
                const {
                    isShopPage: e,
                    shopPageId: t,
                    shopRoute: a,
                    domainName: o,
                    renderMode: r,
                    pageRoute: l
                } = this.props;
                return e ? {
                    onClick: this.handleOlsClick,
                    href: "#",
                    convertToAbsolute: !1
                } : {
                    href: a + "?olsPage=cart",
                    "data-page": t,
                    "data-page-query": Wc,
                    renderMode: r,
                    domainName: o,
                    pageRoute: l
                }
            })), t(this, "getOlaLinkProps", (() => this.props.renderMode !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH ? {} : {
                onClick: () => this.gopayCart.toggle(),
                href: "#"
            })), t(this, "getIconLinkProps", (() => this.enabledForOls && !this.enabledForOla ? this.getOlsLinkProps() : this.enabledForOla && !this.enabledForOls ? this.getOlaLinkProps() : {})), t(this, "renderDropdown", (() => {
                const {
                    staticContent: e = {},
                    sidebarWidth: t
                } = this.props, {
                    olaQuantity: o,
                    olsQuantity: r
                } = this.state, l = {
                    dropdown: {
                        position: "absolute",
                        right: "0",
                        top: "large",
                        whiteSpace: "nowrap",
                        maxHeight: "45vh",
                        overflowY: "auto",
                        display: "none",
                        zIndex: "20",
                        listStyle: "none",
                        "@md": t ? {
                            right: "auto",
                            top: "auto",
                            left: "0",
                            bottom: "large"
                        } : {}
                    },
                    listItem: {
                        display: "block",
                        textAlign: "left",
                        marginBottom: "0"
                    },
                    link: {
                        display: "flex",
                        alignItems: "center"
                    },
                    separator: {
                        marginTop: "small",
                        marginBottom: "small"
                    },
                    countLabel: {
                        marginLeft: "xsmall"
                    }
                }, n = yg(this.props.category);
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Dropdown, {
                    section: "default",
                    tag: "ul",
                    role: "menu",
                    id: this.dropdownToggleId,
                    style: l.dropdown,
                    "data-aid": Zs.CART_DROPDOWN_RENDERED
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                    tag: "li",
                    role: "menuitem",
                    key: "cart-dropdown-ols-item",
                    style: l.listItem
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, a({}, this.getOlsLinkProps(), {
                    style: l.link
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: n.wrapper
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                    style: n.count,
                    featured: !0
                }, r)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details, {
                    style: l.countLabel
                }, e.cartProducts))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                    style: l.listItem
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR, {
                    style: l.separator
                })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.ListItem, {
                    tag: "li",
                    role: "menuitem",
                    key: "cart-dropdown-ola-item",
                    style: l.listItem
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, a({}, this.getOlaLinkProps(), {
                    style: l.link
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: n.wrapper
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                    style: n.count,
                    featured: !0
                }, o)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details, {
                    style: l.countLabel
                }, e.cartServices))))
            })), t(this, "cartRouter", (() => {
                const {
                    staticContent: e = {}
                } = this.props, t = {
                    menu: {
                        position: "relative"
                    },
                    link: {
                        display: "flex",
                        alignItems: "center"
                    }
                };
                return this.shouldRenderDropdown ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: t.menu
                }, (global.React || guac.react).createElement(sg, {
                    renderCustomContent: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                        style: t.link
                    }, this.renderIcon(), this.renderItemCount()),
                    toggleId: this.dropdownToggleId,
                    dataAid: Zs.CART_ICON_RENDER,
                    renderMode: this.props.renderMode
                }), this.renderDropdown()) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, a({
                    style: t.link,
                    "aria-label": e.cartIcon || "Shopping Cart Icon",
                    convertToAbsolute: !0
                }, this.getIconLinkProps()), this.renderIcon(), this.renderItemCount())
            })), this.state = {
                olsQuantity: 0,
                olaQuantity: 0,
                olsProvisioned: !1,
                olaGopayCartOn: !1
            }, this.dropdownToggleId = "cart-dropdown-" + +new Date
        }
        componentDidMount() {
            this.enabledForOls && (this.updateOlsStoreState(), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).CartStore.addListener("change", this.onStoreChange), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.addListener("change", this.onStoreChange), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigActions.setConfig(this.props), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigActions.loadConfig(), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.isProvisioned() && (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).CartActions.loadCart()), this.hasOlaWidget && this.setupOlaCart()
        }
        componentWillUnmount() {
            this.enabledForOls && ((global.OLSCore || guac["@wsb/guac-widget-ols-core"]).CartStore.removeListener("change", this.onStoreChange), (global.OLSCore || guac["@wsb/guac-widget-ols-core"]).OlsConfigStore.removeListener("change", this.onStoreChange)), this.enabledForOla && this.gopayCart && this.gopayCartUnsubscribe && this.gopayCartUnsubscribe()
        }
        get hasOlaWidget() {
            return !!this.props.appointmentsPageId
        }
        get enabledForOls() {
            return !!this.props.shopPageId
        }
        get enabledForOla() {
            return this.hasOlaWidget && this.state.olaGopayCartOn
        }
        get shouldRender() {
            return this.enabledForOls || this.enabledForOla
        }
        get totalCartQuantity() {
            const {
                olsQuantity: e,
                olaQuantity: t
            } = this.state;
            return e + t
        }
        get shouldRenderDropdown() {
            return this.enabledForOls && this.enabledForOla
        }
        renderIcon() {
            const {
                cartStyles: e
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "cart1",
                style: e,
                "data-aid": Zs.CART_ICON_RENDER,
                size: Pt,
                minTarget: !0
            })
        }
        render() {
            if (!this.shouldRender) return null;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "xsmall"
                },
                children: this.cartRouter()
            })
        }
    }
    wg.propTypes = {
        category: (global.PropTypes || guac["prop-types"]).string,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        isShopPage: (global.PropTypes || guac["prop-types"]).bool,
        appointmentsPageId: (global.PropTypes || guac["prop-types"]).string,
        shopPageId: (global.PropTypes || guac["prop-types"]).string,
        shopRoute: (global.PropTypes || guac["prop-types"]).string,
        accountId: (global.PropTypes || guac["prop-types"]).string,
        websiteId: (global.PropTypes || guac["prop-types"]).string,
        olsStatus: (global.PropTypes || guac["prop-types"]).string,
        olsAccountStatus: (global.PropTypes || guac["prop-types"]).string,
        env: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        rootDomain: (global.PropTypes || guac["prop-types"]).string,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        cartStyles: (global.PropTypes || guac["prop-types"]).object,
        isReseller: (global.PropTypes || guac["prop-types"]).bool,
        staticContent: (global.PropTypes || guac["prop-types"]).object
    };
    class Cg extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t(this, "setupOlaCart", (async () => {
                const {
                    websiteId: e,
                    rootDomain: t,
                    env: a,
                    renderMode: o
                } = this.props;
                if (!this.gopayCart) try {
                    const r = !!window.sessionStorage;
                    if (!await mg({
                            shouldUseCache: r,
                            websiteId: e,
                            rootDomain: t
                        })) return;
                    this.setState({
                        olaGopayCartOn: !0
                    }), this.gopayCart = await bg.cartSetup({
                        websiteId: e,
                        env: a
                    }), this.updateOlaStoreState(), this.gopayCartUnsubscribe = this.gopayCart.subscribe(this.updateOlaStoreState), fg({
                        cart: this.gopayCart,
                        renderMode: o
                    })
                } catch (e) {
                    this.gopayCart = null, this.setState({
                        olaGopayCartOn: !1
                    })
                }
            })), t(this, "updateOlaStoreState", (() => {
                if (!this.gopayCart) return;
                const {
                    quantitiesByType: e
                } = this.gopayCart.getState(), t = e.service || 0;
                this.setState({
                    olaQuantity: t
                })
            })), t(this, "renderItemCount", (() => {
                const e = yg(this.props.category);
                return 0 === this.totalCartQuantity ? null : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: { ...e.wrapper,
                        marginLeft: "!-6px"
                    },
                    "data-aid": Zs.CART_ICON_COUNT
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                    style: { ...e.count,
                        color: "inherit"
                    },
                    featured: !0
                }, this.totalCartQuantity))
            })), t(this, "getLinkProps", (() => this.props.renderMode !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH ? {} : {
                onClick: () => this.gopayCart.toggle()
            })), t(this, "cartRouter", (() => {
                const {
                    staticContent: e = {}
                } = this.props;
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, a({
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    "aria-label": e.cartIcon || "Shopping Cart Icon"
                }, this.getLinkProps()), this.renderIcon(), this.renderItemCount())
            })), this.state = {
                olaQuantity: 0,
                olsQuantity: 0,
                olaGopayCartOn: !1
            }, this.dropdownToggleId = "cart-dropdown-" + +new Date
        }
        componentDidMount() {
            this.hasOlaWidget && this.setupOlaCart()
        }
        componentWillUnmount() {
            this.enabledForOla && this.gopayCart && this.gopayCartUnsubscribe && this.gopayCartUnsubscribe()
        }
        get hasOlaWidget() {
            return !!this.props.appointmentsPageId
        }
        get enabledForOla() {
            return this.hasOlaWidget && this.state.olaGopayCartOn
        }
        get shouldRender() {
            return this.enabledForOla
        }
        get totalCartQuantity() {
            const {
                olsQuantity: e,
                olaQuantity: t
            } = this.state;
            return e + t
        }
        renderIcon() {
            const {
                cartStyles: e
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "cart1",
                style: e,
                "data-aid": Zs.CART_ICON_RENDER,
                size: Pt,
                minTarget: !0
            })
        }
        render() {
            if (!this.shouldRender) return null;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "xsmall"
                },
                children: this.cartRouter()
            })
        }
    }
    Cg.propTypes = {
        category: (global.PropTypes || guac["prop-types"]).string,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        appointmentsPageId: (global.PropTypes || guac["prop-types"]).string,
        websiteId: (global.PropTypes || guac["prop-types"]).string,
        env: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        rootDomain: (global.PropTypes || guac["prop-types"]).string,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        cartStyles: (global.PropTypes || guac["prop-types"]).object,
        isReseller: (global.PropTypes || guac["prop-types"]).bool,
        staticContent: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        UX2: Eg,
        components: {
            Bootstrap: Tg
        }
    } = global.Core || guac["@wsb/guac-widget-core"];
    class Pg extends(global.React || guac.react).Component {
        extractCartIconProps() {
            return (global._ || guac.lodash).pick(this.props, (global._ || guac.lodash).keys(wg.propTypes))
        }
        extractGoPayCartIconProps() {
            return (global._ || guac.lodash).pick(this.props, (global._ || guac.lodash).keys(Cg.propTypes))
        }
        render() {
            const e = !!this.props.appointmentsPageId,
                t = !!this.props.shopPageId;
            return e && !t ? (global.React || guac.react).createElement(Eg.Element.Block, {
                display: "inlineBlock"
            }, (global.React || guac.react).createElement(Tg.Radpack, a({
                entry: "@widget/LAYOUT/bs-ComponentGoPay",
                Component: Cg
            }, this.extractGoPayCartIconProps()))) : t ? (global.React || guac.react).createElement(Eg.Element.Block, {
                display: "inlineBlock"
            }, (global.React || guac.react).createElement(Tg.Radpack, a({
                entry: "@widget/LAYOUT/bs-CartIcon-Component",
                Component: wg
            }, this.extractCartIconProps()))) : null
        }
    }
    Pg.propTypes = {
        appointmentsPageId: (global.PropTypes || guac["prop-types"]).string,
        shopPageId: (global.PropTypes || guac["prop-types"]).string
    };
    class Rg extends(global.React || guac.react).Component {
        renderFlyoutMenu() {
            const {
                id: e,
                renderMode: t,
                adjustMembershipDropdown: a,
                membershipAdminPages: o,
                canLogin: r,
                canCreateAccount: l,
                hasActiveOLA: n,
                hasActiveOLS: i,
                staticContent: s,
                sidebarWidth: c,
                customToggleStyles: g,
                overrideIconStyle: p
            } = this.props, u = e + "-membershipId", d = e + "-membershipId-loggedout", h = {
                top: "initial",
                width: 240,
                overflowY: "auto",
                maxHeight: 300
            }, b = {
                id: e,
                staticContent: s,
                membershipAdminPages: o,
                canLogin: r,
                canCreateAccount: l,
                hasActiveOLA: n,
                hasActiveOLS: i,
                headerStyles: {
                    marginBottom: "small",
                    font: "alternate",
                    fontWeight: "bold"
                },
                parentStyles: {
                    marginBottom: "small",
                    padding: "xsmall",
                    cursor: "pointer",
                    color: "inherit !important"
                }
            };
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                className: "membership-icon-logged-out"
            }, (global.React || guac.react).createElement(gg, {
                renderCustomIcon: {
                    name: "account",
                    size: Pt,
                    minTarget: !0
                },
                toggleId: d,
                href: "/",
                dataAid: Zs.MEMBERSHIP_ICON_DESKTOP_RENDERED,
                hasHover: !0,
                renderMode: t,
                customToggleStyles: g,
                overrideIconStyle: p,
                "aria-label": s.membershipDropdownToggle
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                className: "membership-icon-logged-in",
                style: {
                    display: "none"
                }
            }, (global.React || guac.react).createElement(gg, {
                renderCustomIcon: {
                    name: "account",
                    size: Pt,
                    minTarget: !0
                },
                toggleId: u,
                href: "/",
                dataAid: Zs.MEMBERSHIP_ICON_DESKTOP_RENDERED,
                hasHover: !0,
                renderMode: t,
                customToggleStyles: g,
                overrideIconStyle: p,
                "aria-label": s.membershipDropdownToggle
            })), t === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: "\x3c!--googleoff: all--\x3e"
                }
            }), (global.React || guac.react).createElement(ig, {
                id: d,
                className: "membership-sign-out",
                navigation: ic(b),
                renderMode: t,
                adjustToIcon: a,
                expandToLeft: !0,
                dropdownStyles: h,
                sidebarWidth: c
            }), (global.React || guac.react).createElement(ig, {
                id: u,
                className: "membership-sign-in",
                navigation: nc(b),
                renderMode: t,
                adjustToIcon: a,
                expandToLeft: !0,
                dropdownStyles: h,
                sidebarWidth: c
            }), (global.React || guac.react).createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: "\x3c!--googleon: all--\x3e"
                }
            })))
        }
        render() {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: this.renderFlyoutMenu()
            })
        }
    }
    Rg.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string.isRequired,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        adjustMembershipDropdown: (global.PropTypes || guac["prop-types"]).bool,
        membershipAdminPages: (global.PropTypes || guac["prop-types"]).object,
        canLogin: (global.PropTypes || guac["prop-types"]).bool,
        canCreateAccount: (global.PropTypes || guac["prop-types"]).bool,
        hasActiveOLS: (global.PropTypes || guac["prop-types"]).bool,
        hasActiveOLA: (global.PropTypes || guac["prop-types"]).bool,
        sidebarWidth: (global.PropTypes || guac["prop-types"]).number,
        customToggleStyles: (global.PropTypes || guac["prop-types"]).object,
        overrideIconStyle: (global.PropTypes || guac["prop-types"]).object
    }, Rg.defaultProps = {
        staticContent: {},
        membershipAdminPages: {
            bookings: {
                path: "#"
            },
            orders: {
                path: "#"
            },
            account: {
                path: "#"
            },
            createAccount: {
                path: "#"
            },
            login: {
                path: "#"
            },
            logout: {
                path: "#"
            }
        },
        overrideIconStyle: {}
    };
    class vg extends(global.React || guac.react).Component {
        render() {
            const {
                id: e,
                commerce: t,
                renderMode: o,
                widthId: r,
                searchWidthAdj: l,
                pipe: n,
                hasNav: i = !0,
                staticContent: s,
                style: c,
                isHomepage: g,
                canLogin: p,
                searchFormLocation: u,
                pipeRight: d,
                appointmentsPageId: h
            } = this.props, {
                containerStyles: b,
                componentOverrideStyles: m = {}
            } = c, y = (global._ || guac.lodash).uniqueId(e), f = t || h, w = y + "-utility-menu", C = {
                display: "none",
                "@md": {
                    display: "flex"
                }
            }, E = {
                container: {
                    "@xs": {
                        justifyContent: "flex-end"
                    },
                    "@md": {
                        justifyContent: "inherit"
                    },
                    ...b
                },
                searchDesktop: C,
                membership: {
                    position: "relative",
                    ...C,
                    ...m.membership
                },
                pipe: {
                    marginRight: "small"
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.UtilitiesMenu, {
                pipe: n,
                hasNav: i,
                id: w,
                style: E.container
            }, n && !d && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Pipe, {
                id: y + "-commerce-pipe",
                style: E.pipe
            }), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                style: E.searchDesktop
            }, (global.React || guac.react).createElement(tg, a({
                searchFormLocation: u,
                formContainerId: w,
                widthId: r,
                searchWidthAdj: l,
                shopPageId: t,
                renderMode: o,
                iconStyles: m.search,
                membershipOn: p,
                onHomepage: g
            }, (global._ || guac.lodash).omit(this.props, "category"))))), f && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                style: m.cartWrapper
            }, (global.React || guac.react).createElement(Pg, a({
                pipe: !1,
                shopPageId: t,
                renderMode: o,
                cartStyles: m.cart
            }, this.props))), p && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, {
                style: E.membership,
                id: y + "-membership-icon"
            }, (global.React || guac.react).createElement(Rg, a({
                id: y,
                renderMode: o,
                staticContent: s,
                overrideIconStyle: m.membership
            }, (global._ || guac.lodash).omit(this.props, "category", "id")))), d && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Pipe, {
                id: y + "-commerce-pipe"
            }))
        }
    }
    vg.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        appointmentsPageId: (global.PropTypes || guac["prop-types"]).string,
        commerce: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        widthId: (global.PropTypes || guac["prop-types"]).string,
        searchWidthAdj: (global.PropTypes || guac["prop-types"]).number,
        pipe: (global.PropTypes || guac["prop-types"]).bool,
        hasNav: (global.PropTypes || guac["prop-types"]).bool,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        style: (global.PropTypes || guac["prop-types"]).shape({
            containerStyles: (global.PropTypes || guac["prop-types"]).object,
            componentOverrideStyles: (global.PropTypes || guac["prop-types"]).object
        }),
        componentOverrideStyles: (global.PropTypes || guac["prop-types"]).object,
        membershipOn: (global.PropTypes || guac["prop-types"]).bool,
        membershipAccountsOn: (global.PropTypes || guac["prop-types"]).bool,
        searchFormLocation: (global.PropTypes || guac["prop-types"]).oneOf([hl, ul, dl, bl]),
        isHomepage: (global.PropTypes || guac["prop-types"]).bool,
        hasNavBackground: (global.PropTypes || guac["prop-types"]).bool,
        canLogin: (global.PropTypes || guac["prop-types"]).bool,
        canCreateAccount: (global.PropTypes || guac["prop-types"]).bool,
        navBarId: (global.PropTypes || guac["prop-types"]).string,
        pipeRight: (global.PropTypes || guac["prop-types"]).bool
    }, vg.defaultProps = {
        id: (global._ || guac.lodash).uniqueId("membership"),
        searchFormLocation: ul,
        staticContent: {},
        style: {}
    };
    const xg = {
        LOGO: "/logo",
        ADDRESS: "address",
        PHONE: "phone",
        WELCOME_LINE: "welcomeLine",
        TAGLINE: "tagline",
        SUB_TAG_LINE: "tagline2",
        CTA_BUTTON: "/ctaButton",
        PROMO_BANNER: "/promoBanner"
    };

    function Sg(e = {}, t = {}) {
        const {
            isBigLogo: a = !1,
            isHomepage: o = !0,
            fullSizeSecondary: r
        } = t, {
            logoHeight: l,
            bigLogoHeight: n,
            logoUrl: i,
            selectedMutatorType: s
        } = e, c = "IMAGE" === s && i ? parseInt(a && n || l || 125, 10) : 80;
        return o || r ? c : Math.min(c, 104)
    }
    const {
        EDIT: kg
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes;
    class Ig extends(global.React || guac.react).Component {
        constructor(...e) {
            super(...e), t(this, "calculateBestFit", (() => {
                const {
                    prioritizeDefault: e
                } = this.props;
                if (!this._container || !this._target) return;
                if (this._target.hasAttribute("data-font-scaled")) return void this.reset();
                const {
                    renderMode: t
                } = this.props, a = this.getScalers();
                if (this._container.clientWidth && a.length) {
                    const o = this._container.style.width || "";
                    this._container.style.width = "100%", this.initScalers(a);
                    const r = this.getBestFit(a);
                    this.hideScalers(a), this._container.style.width = o;
                    const l = this.getComputedPropertyValue(r, "font-size");
                    if (l && l !== this._lastSize) {
                        if (e) {
                            const e = this.getComputedPropertyValue(this._target, "font-size");
                            if (parseInt(l, 10) >= parseInt(e, 10)) return
                        }
                        this._lastSize = l, t === kg ? (this._styleElement || (this._styleElement = document.createElement("style"), document.head.appendChild(this._styleElement)), this._styleElement.textContent = `#${this._target.id} { font-size: ${l} !important; }`) : this._target.style.fontSize = l
                    }
                }
            })), t(this, "fits", (e => {
                const {
                    maxLines: t
                } = this.props;
                return this.getContentWidth(e) <= this._container.clientWidth && this.getNumLines(e) <= t
            })), t(this, "getBestFit", (e => e.find(this.fits) || (global._ || guac.lodash).last(e)))
        }
        reset() {
            this._lastSize && (this._target.style.fontSize = "", this._lastSize = "", this._styleElement && (this._styleElement.parentNode.removeChild(this._styleElement), delete this._styleElement))
        }
        componentDidMount() {
            this._container = this.getContainer(), this._target = this.getTarget(), this.calculateBestFit(), window.ResizeObserver ? (this._observer = new ResizeObserver((() => {
                window.requestAnimationFrame(this.calculateBestFit)
            })), this._observer.observe(this._container)) : window.addEventListener("resize", this.calculateBestFit)
        }
        componentDidUpdate() {
            this._target = this.getTarget(), this.reset(), this.calculateBestFit()
        }
        componentWillUnmount() {
            this._observer ? this._observer.disconnect() : window.removeEventListener("resize", this.calculateBestFit), this._styleElement && this._styleElement.parentNode && this._styleElement.parentNode.removeChild(this._styleElement)
        }
        getContainer() {
            const {
                containerId: e
            } = this.props;
            return document.getElementById(e)
        }
        getTarget() {
            const {
                targetId: e
            } = this.props;
            return document.getElementById(e)
        }
        getScalers() {
            const {
                containerId: e,
                fontSizes: t
            } = this.props;
            return Array.prototype.slice.call(this._container.querySelectorAll(`[data-scaler-id="scaler-${e}"]`)).sort(((e, a) => t.indexOf(e.getAttribute("data-size")) - t.indexOf(a.getAttribute("data-size"))))
        }
        getContentWidth(e) {
            const t = parseInt(this.getComputedPropertyValue(e, "padding-left") || 0, 10),
                a = parseInt(this.getComputedPropertyValue(e, "padding-right") || 0, 10);
            return e.scrollWidth + t + a
        }
        getComputedPropertyValue(e, t) {
            return document.defaultView.getComputedStyle(e).getPropertyValue(t)
        }
        getNumLines(e) {
            const t = e.offsetHeight,
                a = parseInt(this.getComputedPropertyValue(e, "line-height"), 10) || 1;
            return Math.floor(t / a)
        }
        initScalers(e) {
            e.forEach((e => {
                e.style.display = "inline-block", e.style.maxWidth = this._container.clientWidth + "px"
            }))
        }
        hideScalers(e) {
            e.forEach((e => {
                e.style.display = "none", e.style.maxWidth = ""
            }))
        }
        render() {
            return null
        }
    }
    Ig.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes)),
        containerId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        targetId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        fontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        maxLines: (global.PropTypes || guac["prop-types"]).number,
        prioritizeDefault: (global.PropTypes || guac["prop-types"]).bool
    }, Ig.defaultProps = {
        maxLines: 3
    };
    const {
        Bootstrap: Lg
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, {
        XXLARGE: Mg,
        XLARGE: Ag,
        LARGE: _g
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes;
    class Og extends(global.React || guac.react).Component {
        render() {
            const {
                text: e,
                containerId: t,
                font: o,
                fontSizes: r,
                style: l,
                Tag: n = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element,
                typography: i
            } = this.props, s = {
                wordWrap: "normal !important",
                overflowWrap: "normal !important",
                display: "none",
                visibility: "hidden",
                position: "absolute",
                width: "auto",
                overflow: "visible",
                left: 0
            };
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, r.map((a => (global.React || guac.react).createElement(n, {
                tag: "span",
                key: a,
                font: o,
                style: { ...l,
                    ...s,
                    fontSize: a
                },
                "data-size": a,
                "data-scaler-id": "scaler-" + t,
                typography: i,
                "data-ux": "scaler",
                "aria-hidden": !0
            }, e))), (global.React || guac.react).createElement(Lg.Radpack, a({}, this.props, {
                Component: Ig,
                entry: "@widget/LAYOUT/bs-DynamicFontScaler-Component"
            })))
        }
    }
    t(Og, "propTypes", {
        typography: (global.PropTypes || guac["prop-types"]).string,
        text: (global.PropTypes || guac["prop-types"]).string.isRequired,
        containerId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        font: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes)),
        targetId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        fontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        style: (global.PropTypes || guac["prop-types"]).object,
        maxLines: (global.PropTypes || guac["prop-types"]).number,
        Tag: (global.PropTypes || guac["prop-types"]).node
    }), t(Og, "defaultProps", {
        fontSizes: [Mg, Ag, _g]
    });
    class Bg extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this._containerId = (global._ || guac.lodash).uniqueId("logo-container-"), this._targetId = (global._ || guac.lodash).uniqueId("logo-text-")
        }
        render() {
            const {
                renderMode: e,
                logoStyle: t,
                logo: o,
                dataRoute: r,
                fontPackLogoId: l,
                scaledFontSizes: n,
                maxLines: i
            } = this.props, s = !!l, {
                logoText: c
            } = o, g = e === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT ? {
                children: c
            } : {
                dangerouslySetInnerHTML: {
                    __html: (global.Core || guac["@wsb/guac-widget-core"]).utils.convertLineBreaks((global._ || guac.lodash).escape(c))
                }
            }, p = r ? {
                "data-route": r
            } : {
                "data-field-id": "logo",
                "data-field-route": xg.LOGO
            }, u = {
                display: "inline-block",
                width: "100%",
                position: "relative",
                ...t
            }, d = {
                display: "inline-block",
                maxWidth: "100%"
            };
            return s && (d.font = "logo"), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                id: this._containerId,
                style: u
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, a({
                tag: "h3",
                id: this._targetId,
                "data-aid": Zs.HEADER_LOGO_TEXT_RENDERED,
                style: d
            }, g, p, {
                isLogo: !0
            })), (global.React || guac.react).createElement(Og, {
                text: c,
                containerId: this._containerId,
                targetId: this._targetId,
                fontSizes: n,
                maxLines: i,
                renderMode: e,
                style: d,
                Tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading,
                prioritizeDefault: !s
            }))
        }
    }
    Bg.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        logoStyle: (global.PropTypes || guac["prop-types"]).object,
        logo: (global.PropTypes || guac["prop-types"]).object.isRequired,
        dataRoute: (global.PropTypes || guac["prop-types"]).string,
        fontPackLogoId: (global.PropTypes || guac["prop-types"]).string,
        scaledFontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        maxLines: (global.PropTypes || guac["prop-types"]).number
    };
    const {
        renderModes: {
            EDIT: Dg
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    class Hg extends(global.React || guac.react).Component {
        generateLogo() {
            const {
                isBigLogo: e,
                logo: t,
                logoImageStyle: o,
                dataRoute: r,
                logoStyle: n,
                useSrcSet: i,
                id: s,
                applyBackgroundToOverhang: c,
                fontPackLogoId: g,
                renderMode: p,
                scaledFontSizes: u,
                maxLines: d,
                treatmentName: b,
                useLogoBackground: m,
                isHomepage: y,
                defaultLogoBg: f,
                hasLogoImage: w,
                hasHeroContent: C,
                fullSizeSecondary: E
            } = this.props, {
                logoText: T,
                logoOrigWidth: P,
                logoOrigHeight: R,
                logoFilter: v,
                logoHasAlpha: x
            } = t, S = w && t.logoUrl, k = m && x ? t.logoBackground : null, I = y && C && this.props.hasOverhang, L = Sg(t, {
                isBigLogo: e,
                isHomepage: y,
                fullSizeSecondary: E
            }), M = c && x, A = Math.min(R || 80, 80), _ = (global._ || guac.lodash).merge({
                height: A,
                backgroundColor: k || "transparent",
                padding: k && "transparent" !== k ? "xsmall" : 0,
                "@md": {
                    height: L,
                    width: "auto",
                    maxHeight: L
                },
                "@xs-only": {
                    height: "auto",
                    maxHeight: A
                }
            }, p === Dg && {
                "@md": {
                    verticalAlign: "unset"
                }
            }, o), O = k || f, B = {
                image: _,
                overhangWrapper: {
                    height: "1em",
                    position: "relative",
                    zIndex: 1
                },
                innerWrapper: {
                    display: "inline-block",
                    padding: 0,
                    ...I ? {
                        "@md": {
                            marginTop: "-xsmall"
                        }
                    } : {}
                },
                overhangImage: (global._ || guac.lodash).merge({}, _, M || k ? {
                    backgroundColor: O,
                    padding: "transparent" === k ? 0 : "xsmall",
                    boxShadow: c && "transparent" !== O && b !== l ? "1px 1px 3px rgba(0, 0, 0, 0.10)" : "none",
                    "@md": {
                        width: L * P / R,
                        height: L,
                        boxShadow: c && "transparent" !== O && b !== l ? "1px 3px 6px rgba(0, 0, 0, 0.15)" : "none"
                    }
                } : {}, o)
            }, D = {
                image: S,
                filter: v
            }, H = e => {
                if (e) {
                    const t = {
                            rs: "h:" + 2 * L
                        },
                        a = P && R && P * R < 16e4;
                    a || (t.qt = "q:95"), e = `${h(e,t)}${a?"/ll":""}`
                }
                return e
            };
            if (S) {
                const e = r ? {
                        "data-route": r
                    } : {
                        "data-field-id": "logo",
                        "data-field-route": xg.LOGO
                    },
                    t = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, a({}, e, {
                        style: B.innerWrapper
                    }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image.Logo, {
                        tag: "img",
                        "data-aid": Zs.HEADER_LOGO_IMAGE_RENDERED,
                        style: I ? B.overhangImage : B.image,
                        alt: T,
                        useSrcSet: i,
                        imageData: D,
                        imageSrcCallback: H,
                        id: s,
                        hasOverhang: I
                    }));
                return I ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    "data-aid": Zs.HEADER_LOGO_OVERHANG_CONTAINER,
                    style: B.overhangWrapper
                }, t) : t
            }
            return (global.React || guac.react).createElement(Bg, {
                renderMode: p,
                logoStyle: n,
                logo: t,
                containerId: this._containerId,
                dataRoute: r,
                isBigLogo: e,
                fontPackLogoId: g,
                scaledFontSizes: u,
                maxLines: d
            })
        }
        render() {
            const {
                logo: e,
                logoData: t,
                renderMode: a,
                style: o,
                domainName: r,
                pageRoute: l,
                linkStyle: n,
                fontPackLogoId: i,
                isMobileLogoFullWidth: s = !0,
                hasLogoImage: c
            } = this.props, g = !!i, p = t && a !== Dg, u = this.generateLogo(), d = {
                display: "inline-block",
                fontFamily: "primary",
                maxWidth: c ? "calc(100% - 0.1px)" : "100%",
                ...!c && g && {
                    width: "100%"
                },
                ...{
                    "@xs-only": {
                        width: s ? "100%" : "auto",
                        display: s ? "flex" : "inline-block",
                        justifyContent: s ? "center" : "flex-start"
                    },
                    "@sm-only": {
                        width: s ? "100%" : "auto"
                    }
                },
                ...o
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                group: "Logo",
                style: d,
                "data-aid": Zs.HEADER_LOGO_RENDERED
            }, p ? (global.React || guac.react).createElement(gc, {
                tag: "a",
                href: t.href,
                "data-page": t.pageId,
                title: e.logoText,
                children: u,
                renderMode: a,
                domainName: r,
                pageRoute: l,
                style: {
                    border: 0,
                    maxWidth: "100%",
                    width: c ? "auto" : "100%",
                    ...n
                }
            }) : u)
        }
    }
    Hg.propTypes = {
        logo: (global.PropTypes || guac["prop-types"]).object,
        logoData: (global.PropTypes || guac["prop-types"]).object,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        logoStyle: (global.PropTypes || guac["prop-types"]).object,
        linkStyle: (global.PropTypes || guac["prop-types"]).object,
        logoImageStyle: (global.PropTypes || guac["prop-types"]).object,
        style: (global.PropTypes || guac["prop-types"]).object,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        dataRoute: (global.PropTypes || guac["prop-types"]).string,
        isBigLogo: (global.PropTypes || guac["prop-types"]).bool,
        useSrcSet: (global.PropTypes || guac["prop-types"]).bool,
        id: (global.PropTypes || guac["prop-types"]).string,
        applyBackgroundToOverhang: (global.PropTypes || guac["prop-types"]).bool,
        hasOverhang: (global.PropTypes || guac["prop-types"]).bool,
        fontPackLogoId: (global.PropTypes || guac["prop-types"]).string,
        scaledFontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        maxLines: (global.PropTypes || guac["prop-types"]).number,
        treatmentName: (global.PropTypes || guac["prop-types"]).oneOf([o, r, l, n, i]),
        useLogoBackground: (global.PropTypes || guac["prop-types"]).bool,
        isHomepage: (global.PropTypes || guac["prop-types"]).bool,
        isMobileLogoFullWidth: (global.PropTypes || guac["prop-types"]).bool,
        defaultLogoBg: (global.PropTypes || guac["prop-types"]).string,
        hasLogoImage: (global.PropTypes || guac["prop-types"]).bool.isRequired,
        hasHeroContent: (global.PropTypes || guac["prop-types"]).bool,
        fullSizeSecondary: (global.PropTypes || guac["prop-types"]).bool
    }, Hg.defaultProps = {
        useSrcSet: !0,
        applyBackgroundToOverhang: !0,
        useLogoBackground: !0,
        defaultLogoBg: "neutral",
        hasHeroContent: !0,
        fullSizeSecondary: !1
    };
    class Ng extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.handleChange = (global._ || guac.lodash).throttle(this.handleChange.bind(this), 100, {
                leading: !1
            }), this.handleTouchStart = this.handleTouchStart.bind(this), this.handleTouchMove = this.handleTouchMove.bind(this), this.startY = 0, this.state = {
                open: !1
            }
        }
        componentDidUpdate(e, {
            open: t
        }) {
            const {
                openWidth: a,
                isMobile: o,
                renderMode: r
            } = this.props;
            if (t !== this.state.open) {
                "undefined" != typeof window && window.dispatchEvent(new Event("NavigationDrawer" + (this.state.open ? "Opened" : "Closed")));
                const {
                    toggleId: e
                } = this.props, t = document.getElementById(e);
                t && (t.style.maxWidth = this.state.open ? a : 0, t.style.boxShadow = this.state.open ? "0 2px 6px 0px rgba(0,0,0,0.2)" : "", o && (t.style.height = zc(r) + "px", this.toggleScrolling(this.state.open)))
            }
        }
        toggleScrolling(e) {
            const {
                renderMode: t
            } = this.props, a = Uc(t);
            if (t === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH) {
                const {
                    uniqueId: t
                } = this.props, a = document.getElementById(t + "-navId-mobile");
                e ? (a.addEventListener("touchstart", this.handleTouchStart), a.addEventListener("touchmove", this.handleTouchMove)) : (a.removeEventListener("touchstart", this.handleTouchStart), a.removeEventListener("touchmove", this.handleTouchMove))
            } else a.style.setProperty("overflow-y", e ? "hidden" : "auto", "important")
        }
        handleTouchStart(e) {
            const t = e.touches[0],
                {
                    clientY: a
                } = t;
            this.startY = a
        }
        handleTouchMove(e) {
            const {
                uniqueId: t
            } = this.props, a = document.getElementById(t + "-navContainerId-mobile"), o = document.getElementById(t + "-navLinksContentId-mobile"), r = a.getBoundingClientRect().bottom, {
                bottom: l
            } = o.getBoundingClientRect(), {
                scrollTop: n
            } = a, i = e.touches[0], {
                clientY: s
            } = i;
            s < this.startY && l <= r || s >= this.startY && n <= 0 ? e.preventDefault() : e.stopPropagation()
        }
        handleChange(e) {
            if (this.setState({
                    open: e
                }), e) {
                const e = document.getElementById(this.props.parallaxId);
                e && (e.style.transform = "none")
            }
        }
        renderIcon() {
            const {
                icon: e,
                openIcon: t
            } = this.props, {
                open: a
            } = this.state;
            return a && "close" === t ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.CloseIcon, {
                size: Pt
            }) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon.Hamburger, {
                icon: a ? t : e,
                size: Pt,
                minTarget: !0
            })
        }
        render() {
            const e = (global._ || guac.lodash).omit(this.props, ["Component", "renderMode"]),
                {
                    style: t,
                    staticContent: o = {}
                } = e;
            return (global.React || guac.react).createElement(Tc, a({}, e, {
                onChange: this.handleChange,
                closeAttr: "data-close",
                "data-edit-interactive": !0,
                closeOnOutsideClick: !0,
                style: {
                    border: 0,
                    justifyContent: "flex-start",
                    ...t
                },
                "data-aid": Zs.HAMBURGER_MENU_LINK,
                "aria-label": o.hamburgerIcon || "Hamburger Site Navigation Icon"
            }), this.renderIcon())
        }
    }
    Ng.propTypes = {
        toggleId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        uniqueId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        parallaxId: (global.PropTypes || guac["prop-types"]).string,
        updateParallaxSpeed: (global.PropTypes || guac["prop-types"]).func,
        icon: (global.PropTypes || guac["prop-types"]).string,
        openIcon: (global.PropTypes || guac["prop-types"]).string,
        openWidth: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string
    }, Ng.defaultProps = {
        icon: "hamburger",
        openIcon: "hamburger",
        openWidth: "100%",
        style: {},
        staticContent: {},
        isMobile: !0
    };
    const {
        components: {
            Bootstrap: Ug
        }
    } = global.Core || guac["@wsb/guac-widget-core"];

    function zg(e) {
        return (global.React || guac.react).createElement(Ug.Radpack, a({}, e, {
            Component: Ng,
            entry: "@widget/LAYOUT/bs-Hamburger-Component"
        }))
    }
    zg.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired
    };
    const Xg = ({
        left: e = !1,
        id: t,
        toggleId: o,
        overrideStyles: r = {},
        ...l
    }) => {
        const n = {
            color: "highContrast",
            marginLeft: e ? "0" : "small",
            ":hover": {
                color: "highlight"
            },
            "@md": {
                display: "none"
            }
        };
        return (global.React || guac.react).createElement(zg, a({}, l, {
            toggleId: o || t + "-navId-mobile",
            uniqueId: t,
            style: { ...n,
                ...r
            }
        }))
    };
    Xg.propTypes = {
        left: (global.PropTypes || guac["prop-types"]).bool,
        id: (global.PropTypes || guac["prop-types"]).string.isRequired,
        overrideStyles: (global.PropTypes || guac["prop-types"]).object,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        toggleId: (global.PropTypes || guac["prop-types"]).string
    };
    const {
        XXXLARGE: Wg,
        XXLARGE: Vg,
        XLARGE: Fg
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes;
    class jg extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.containerId = (global._ || guac.lodash).uniqueId("tagline-container-"), this.targetId = (global._ || guac.lodash).uniqueId("dynamic-tagline-")
        }
        render() {
            const {
                renderMode: e,
                dataAid: t,
                dataRoute: o,
                forceH1: r,
                noWrapper: l,
                slideIndex: n,
                tag: i,
                scaledFontSizes: s,
                maxLines: c,
                style: g,
                children: p,
                typography: u
            } = this.props, d = "number" == typeof n, h = {};
            void 0 !== o ? h["data-route"] = o : d ? (h["data-field-id"] = "slides.tagline", h["data-field-route"] = "/mediaData/slides/" + n) : h["data-route"] = xg.TAGLINE;
            const b = { ...this.props,
                    tag: i || (!d || r ? "h1" : "h2"),
                    "data-aid": t || (d ? `HEADER_TAGLINE_${n}_RENDERED` : Zs.HEADER_TAGLINE_RENDERED),
                    isOnSlide: d,
                    ...h
                },
                m = l ? (global.React || guac.react).Fragment : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container,
                y = {
                    display: "inline-block",
                    maxWidth: "100%",
                    whiteSpace: "pre-line",
                    ...g
                };
            return (global.React || guac.react).createElement(m, {
                style: {
                    width: "inherit",
                    padding: 0,
                    margin: 0
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element, a({}, (global._ || guac.lodash).omit(b, ["scaledFontSizes", "maxLines", "data-route", "data-aid"]), {
                id: this.containerId,
                style: {
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    lineHeight: "1.2",
                    display: "block",
                    position: "relative",
                    maxWidth: "100%"
                },
                tag: "div"
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Tagline, a({}, (global._ || guac.lodash).omit(b, ["scaledFontSizes", "maxLines"]), {
                id: this.targetId,
                "data-aid": b["data-aid"] || Zs.HEADER_TAGLINE_RENDERED,
                style: y
            })), (global.React || guac.react).createElement(Og, {
                renderMode: e,
                font: "primary",
                text: p,
                containerId: this.containerId,
                targetId: this.targetId,
                fontSizes: s,
                maxLines: c,
                Tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Tagline,
                style: y,
                typography: u
            })))
        }
    }

    function Gg({
        linkStyle: e = {},
        ...t
    }) {
        const o = (0, (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({
                eid: "ux2.header.phone_number.click",
                type: "click"
            }),
            r = {
                font: "alternate",
                color: "inherit !important",
                fontSize: "inherit !important",
                maxWidth: "100%",
                ...e
            };
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Phone, a({
            "data-aid": Zs.HEADER_PHONE_RENDERED,
            "data-route": xg.PHONE,
            "data-tccl": o,
            linkify: !0,
            linkStyle: r
        }, t))
    }
    jg.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        dataAid: (global.PropTypes || guac["prop-types"]).string,
        dataRoute: (global.PropTypes || guac["prop-types"]).string,
        forceH1: (global.PropTypes || guac["prop-types"]).bool,
        slideIndex: (global.PropTypes || guac["prop-types"]).string,
        tag: (global.PropTypes || guac["prop-types"]).string,
        scaledFontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        maxLines: (global.PropTypes || guac["prop-types"]).number,
        children: (global.PropTypes || guac["prop-types"]).any,
        style: (global.PropTypes || guac["prop-types"]).object,
        noWrapper: (global.PropTypes || guac["prop-types"]).bool,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        typography: (global.PropTypes || guac["prop-types"]).string
    }, jg.defaultProps = {
        scaledFontSizes: [Wg, Vg, Fg],
        maxLines: 4,
        style: {}
    }, Gg.propTypes = {
        linkStyle: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        CTAButton: qg
    } = (global.Core || guac["@wsb/guac-widget-core"]).components;

    function $g(e) {
        const {
            cta: {
                label: t,
                enabled: a = !1
            } = {},
            slideIndex: o
        } = e, r = "number" == typeof o;
        if (!t || !a) return null;
        const l = (0, (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({
                eid: "ux2.header.cta_button.click",
                type: "click"
            }),
            n = { ...e,
                ctaButton: e.cta,
                "data-aid": r ? `${Zs.HEADER_CTA_BTN}_${o}` : Zs.HEADER_CTA_BTN,
                "data-tccl": l,
                "data-field-id": "ctaButton",
                "data-field-route": "/ctaButton",
                ...r && {
                    "data-field-id": "slides.cta",
                    "data-field-route": `/mediaData/slides/${o}/cta`
                },
                element: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Primary
            };
        return (global.React || guac.react).createElement("div", {
            style: {
                maxWidth: "100%"
            }
        }, (global.React || guac.react).createElement(qg, (global._ || guac.lodash).pick(n, Object.keys(qg.propTypes))))
    }
    $g.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        slideIndex: (global.PropTypes || guac["prop-types"]).number,
        cta: (global.PropTypes || guac["prop-types"]).object
    };
    var Yg = (global.keyMirror || guac.keymirror)({
        Spring: null,
        Summer: null,
        Fall: null,
        Winter: null,
        None: null
    });
    const Kg = {
            spin: "@keyframes spin { from {transform:rotate(0deg);} to {transform:rotate(360deg);} }",
            shiver: "@keyframes shiver { 0% { transform: rotate(3deg); } 100% { transform: rotate(-3deg); }}",
            draw: "@keyframes draw { to { stroke-dashoffset: 0; } }",
            swayLeft: "@keyframes sway-left { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-8deg); }}",
            swayRight: "@keyframes sway-right { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(8deg); }}",
            swingLeft: "@keyframes swing-left { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-12px); }}"
        },
        Zg = {},
        Qg = "draw 5s linear forwards",
        Jg = e => ({
            stroke: "currentColor",
            fill: "none",
            strokeWidth: "1",
            strokeLinejoin: "round",
            strokeDashoffset: "100",
            strokeDasharray: e ? "100" : null
        });
    Zg.getSpringLeft = e => (global.React || guac.react).createElement("g", Jg(e), (global.React || guac.react).createElement("path", {
        d: "M5.59,25.25s-1-2.64,3.69-9.59A9.2,9.2,0,0,0,11,9.56,7.62,7.62,0,0,0,9.67,6,4.45,4.45,0,0,1,9,2.3a4,4,0,0,1,1.31-2,6,6,0,0,1,1,2.13A7,7,0,0,1,11.41,4a3.24,3.24,0,0,1-.65,1.69,2.63,2.63,0,0,1-.49.57s4.27,1.61,4-3.46c0,0-2.61.74-3.08,2",
        style: e ? {
            animation: Qg,
            animationDelay: "0.5s"
        } : {}
    }), (global.React || guac.react).createElement("g", {
        style: e ? {
            animation: Qg,
            animationDelay: "2.5s"
        } : {}
    }, (global.React || guac.react).createElement("path", {
        d: "M6.55,20.62s-2.5-2.14-2.88-4.38a13.09,13.09,0,0,0-.8-2.86A4.36,4.36,0,0,0,.36,11.07s-.94,4.34,2.71,3.59"
    }), (global.React || guac.react).createElement("path", {
        d: "M3.87,15.91s-1.05-4,1.07-4.84a3.59,3.59,0,0,1,.78,2.74A2.66,2.66,0,0,1,3.87,15.91Z"
    }))), Zg.getSpringRight = e => (global.React || guac.react).createElement("g", Jg(e), (global.React || guac.react).createElement("g", {
        style: e ? {
            animation: Qg
        } : {}
    }, (global.React || guac.react).createElement("path", {
        d: "M8.91,2.38A7,7,0,0,0,8.76,4a3.24,3.24,0,0,0,.65,1.69,2.63,2.63,0,0,0,.49.57s-4.27,1.61-4-3.46c0,0,2.61.74,3.08,2"
    }), (global.React || guac.react).createElement("path", {
        d: "M5.59,25.25s-1-2.64,3.69-9.59A9.2,9.2,0,0,0,11,9.56,7.62,7.62,0,0,0,9.67,6,4.45,4.45,0,0,1,9,2.3a4,4,0,0,1,1.31-2,6,6,0,0,1,1,2.13A7,7,0,0,1,11.41,4a3.24,3.24,0,0,1-.65,1.69,2.63,2.63,0,0,1-.49.57s4.27,1.61,4-3.46c0,0-2.61.74-3.08,2"
    })), (global.React || guac.react).createElement("g", {
        style: e ? {
            animation: Qg,
            animationDelay: "2s"
        } : {}
    }, (global.React || guac.react).createElement("path", {
        d: "M6.55,20.62s-2.5-2.14-2.88-4.38a13.09,13.09,0,0,0-.8-2.86A4.36,4.36,0,0,0,.36,11.07s-.94,4.34,2.71,3.59"
    }), (global.React || guac.react).createElement("path", {
        d: "M3.87,15.91s-1.05-4,1.07-4.84a3.59,3.59,0,0,1,.78,2.74A2.66,2.66,0,0,1,3.87,15.91Z"
    })), (global.React || guac.react).createElement("g", {
        style: e ? {
            animation: Qg,
            animationDelay: "4s"
        } : {}
    }, (global.React || guac.react).createElement("path", {
        d: "M14.23,12.86S17,9.78,15.46,8.06a3.59,3.59,0,0,0-1.93,2.09A2.66,2.66,0,0,0,14.23,12.86Z"
    }), (global.React || guac.react).createElement("path", {
        d: "M8.68,16.63s3.2-.78,4.55-2.61a13.09,13.09,0,0,1,2-2.19,4.36,4.36,0,0,1,3.28-.92s-1.12,4.29-4,2"
    })));
    const ep = {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "1px"
    };
    Zg.getSummerLeft = e => (global.React || guac.react).createElement("g", ep, (global.React || guac.react).createElement("path", {
        d: "M15,13.89s5-12.13,18.31-8L27.9,9.24a.56.56,0,0,1-.68-.09,2.49,2.49,0,0,0-1.72-.86l.68,1.52a.71.71,0,0,1-.24.87l-3,2.12a.22.22,0,0,1-.32-.08c-.18-.38-.58-1.06-1.21-1.06,0,0,.76,1.92.38,2.23C21.73,13.89,18,16.45,15,13.89Z",
        style: e ? {
            transformOrigin: "50% 50%",
            transform: "rotate(5deg)",
            animation: "sway-right 3s infinite"
        } : {}
    }), (global.React || guac.react).createElement("g", {
        style: e ? {
            transformOrigin: "50% 30%",
            transform: "rotate(0deg)",
            animation: "sway-left 3s infinite",
            animationDelay: "1.5s"
        } : {}
    }, (global.React || guac.react).createElement("path", {
        d: "M15.09,14.37S14.75,1.26.81.42l3.92,5a.56.56,0,0,0,.67.16,2.49,2.49,0,0,1,1.91-.2L6.14,6.6a.71.71,0,0,0-.08.9l1.83,2.68"
    }), (global.React || guac.react).createElement("path", {
        d: "M8.95,10.23A1.18,1.18,0,0,1,10,10s-.3.33-.6.73"
    })), (global.React || guac.react).createElement("path", {
        d: "M15,13.25S8.9,7,1.72,13l4.21.66a.37.37,0,0,0,.4-.23,1.66,1.66,0,0,1,.84-1l0,1.11a.47.47,0,0,0,.37.48l2.42.54a.15.15,0,0,0,.18-.13c0-.28.09-.8.48-1,0,0,0,1.38.33,1.47C10.92,14.95,13.89,15.58,15,13.25Z",
        style: e ? {
            transformOrigin: "50% 30%",
            transform: "rotate(0deg)",
            animation: "sway-left 3s infinite",
            animationDelay: "1.7s"
        } : {}
    }), (global.React || guac.react).createElement("path", {
        d: "M9.55,10.56"
    }), (global.React || guac.react).createElement("path", {
        d: "M11.51,26.92A13.24,13.24,0,0,1,15,13.83s-2.4,10.3-.34,13.32a.19.19,0,0,1-.15.31H12.23A.74.74,0,0,1,11.51,26.92Z"
    }), (global.React || guac.react).createElement("path", {
        d: "M11.15,21.47s.89-1.07,1.61-.83"
    })), Zg.getSummerRight = e => (global.React || guac.react).createElement("g", ep, (global.React || guac.react).createElement("path", {
        d: "M19.21,13.89s-5-12.13-18.31-8l5.46,3.3A.56.56,0,0,0,7,9.15a2.49,2.49,0,0,1,1.72-.86L8.08,9.81a.71.71,0,0,0,.24.87l3,2.12a.22.22,0,0,0,.32-.08c.18-.38.58-1.06,1.21-1.06,0,0-.76,1.92-.38,2.23C12.53,13.89,16.28,16.45,19.21,13.89Z",
        style: e ? {
            transformOrigin: "50% 50%",
            transform: "rotate(5deg)",
            animation: "sway-left 3s infinite"
        } : {}
    }), (global.React || guac.react).createElement("path", {
        d: "M19.17,14.37S19.51,1.26,33.46.42l-3.92,5a.56.56,0,0,1-.67.16,2.49,2.49,0,0,0-1.91-.2L28.12,6.6a.71.71,0,0,1,.08.9l-1.83,2.68",
        style: e ? {
            transformOrigin: "50% 50%",
            transform: "rotate(0deg)",
            animation: "sway-right 3s infinite",
            animationDelay: "1.5s"
        } : {}
    }), (global.React || guac.react).createElement("path", {
        d: "M19.21,13.25S25.37,7,32.54,13l-4.21.66a.37.37,0,0,1-.4-.23,1.66,1.66,0,0,0-.84-1l0,1.11a.47.47,0,0,1-.37.48l-2.42.54a.15.15,0,0,1-.18-.13c0-.28-.09-.8-.48-1,0,0,0,1.38-.33,1.47C23.34,14.95,20.38,15.58,19.21,13.25Z",
        style: e ? {
            transformOrigin: "50% 30%",
            transform: "rotate(0deg)",
            animation: "sway-right 3s infinite",
            animationDelay: "1.7s"
        } : {}
    }), (global.React || guac.react).createElement("path", {
        d: "M22.75,26.92a13.24,13.24,0,0,0-3.54-13.1s2.4,10.3.34,13.32a.19.19,0,0,0,.15.31H22A.74.74,0,0,0,22.75,26.92Z"
    }), (global.React || guac.react).createElement("path", {
        d: "M23.11,21.47s-.89-1.07-1.61-.83"
    })), Zg.fallLeafLeft = (global.React || guac.react).createElement("g", {
        stroke: "currentColor",
        fill: "none"
    }, (global.React || guac.react).createElement("path", {
        d: "M8.72,21.91H8.11S5.18,6.91,18.18,7a12.49,12.49,0,0,1-.52,8.52"
    }), (global.React || guac.react).createElement("path", {
        d: "M8.25,22.25s3.82-5.67,9.08-6.67c2.61-.5,5.58.15,8.61,3.21C25.94,18.79,16.7,30.77,8.25,22.25Z"
    }), (global.React || guac.react).createElement("path", {
        d: "M8.11,21.92s-3,2-8,0"
    }), (global.React || guac.react).createElement("path", {
        d: "M33.15,13s-1,2-5,1"
    }), (global.React || guac.react).createElement("path", {
        d: "M8.7,22.62C17.33,15.36,26.12,19,26.12,19"
    }), (global.React || guac.react).createElement("path", {
        d: "M16,18.83s-1.19,3.54,3,5.35"
    }), (global.React || guac.react).createElement("path", {
        d: "M19.13,18S18,20.61,21.55,22.8"
    }), (global.React || guac.react).createElement("path", {
        d: "M23.13,18s-1.41,2.11.78,3.06"
    }), (global.React || guac.react).createElement("path", {
        d: "M12.62,19.94s-.91,2.52,2.28,5.27"
    }), (global.React || guac.react).createElement("path", {
        d: "M33.08,13.18S48.38,13.05,45.72.33C45.72.33,30.63,1.44,33.08,13.18Z"
    }), (global.React || guac.react).createElement("path", {
        d: "M45.65.06S43.84,9.41,33,12.6"
    }), (global.React || guac.react).createElement("path", {
        d: "M40.2,8.62s-3.62-1-2.83-5.42"
    }), (global.React || guac.react).createElement("path", {
        d: "M42.65,6.46S39.83,5.94,40,1.78"
    }), (global.React || guac.react).createElement("path", {
        d: "M44.84,3.11s-2.54,0-2.12-2.34"
    }), (global.React || guac.react).createElement("path", {
        d: "M37.42,10.81s-2.6-.63-3.14-4.81"
    }), (global.React || guac.react).createElement("path", {
        d: "M18.18,7s-8.8,4.81-9.45,14.88"
    })), Zg.fallLeafRight = (global.React || guac.react).createElement("g", {
        stroke: "currentColor",
        fill: "none"
    }, (global.React || guac.react).createElement("path", {
        d: "M4.878 4.914s10.908 10.723 18.027-.155c0 0-11.458-9.887-18.027.155zM23.044 4.519S15.153 9.85 5.25 4.459M13.139 6.72s-1.88-3.234 1.829-5.836M16.398 6.93s-1.631-2.365 1.406-5.222M20.312 6.111s-1.807-1.783.156-3.157M9.626 6.302S8.23 4.013 10.802.679M5.035 4.854s-2.124.699-4.23-2.846"
    }), (global.React || guac.react).createElement("path", {
        d: "M52.08 16.182s15.296-.13 12.638-12.856c0 0-15.093 1.11-12.638 12.856zM64.647 3.057s-1.81 9.35-12.625 12.541M59.199 11.618s-3.615-.957-2.833-5.42M61.652 9.462s-2.825-.518-2.698-4.686M63.841 6.115s-2.539.017-2.122-2.342M56.42 13.806s-2.605-.632-3.145-4.808M52.15 16.029s-1.008 1.996-5.004.979"
    })), Zg.winterSnowflake = (global.React || guac.react).createElement("g", {
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd"
    }, (global.React || guac.react).createElement("path", {
        d: "M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"
    })), Zg.triangle = (global.React || guac.react).createElement("g", {
        fill: "currentColor",
        fillRule: "evenodd",
        width: "53",
        height: "24"
    }, (global.React || guac.react).createElement("path", {
        d: "M26.5 24L53 0H0z"
    }));
    const {
        Spring: tp,
        Summer: ap,
        Fall: op,
        Winter: rp
    } = Yg, {
        Link: lp
    } = (global.Core || guac["@wsb/guac-widget-core"]).components;

    function np({
        category: e,
        categoryOverride: t,
        promoBannerData: a,
        secondaryContent: o,
        seasonalDecorationDropdown: r,
        seasonalAnimation: l,
        promoBannerLinkData: n = {},
        staticContent: i = {}
    }) {
        const s = t || ("primary" === e ? "accent" : "primary"),
            {
                message: c = ""
            } = a || {},
            g = function(e = {}) {
                const {
                    linkId: t,
                    pageId: a,
                    widgetId: o,
                    url: r,
                    target: l
                } = e;
                return !!(t || a || o || r || l)
            }(n),
            p = g ? {
                "@md": {
                    transition: "filter 0.6s",
                    ":hover": {
                        filter: "invert(.2)"
                    }
                }
            } : {},
            u = a && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                "data-field-id": "promoBannerData.message",
                "data-field-route": xg.PROMO_BANNER,
                "data-aid": Zs.BANNER_TEXT_RENDERED,
                hasLink: g
            }, c),
            d = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, null, u && function({
                seasonalDecoration: e,
                seasonalAnimation: t,
                content: a
            }) {
                const o = {
                        spring: {
                            paddingHorizontal: "xsmall"
                        },
                        summer: {
                            paddingHorizontal: "xsmall"
                        },
                        fall: {
                            "@xs-only": {
                                maxWidth: "250px"
                            },
                            "@md": {
                                paddingHorizontal: "xsmall"
                            }
                        },
                        winter: {
                            "@xs-only": {
                                maxWidth: "250px",
                                paddingHorizontal: "xxsmall"
                            },
                            "@md": {
                                paddingHorizontal: "xsmall"
                            }
                        }
                    },
                    r = {
                        spring: {
                            color: "highContrast",
                            height: "30px",
                            maxWidth: "20px"
                        },
                        summerLeft: {
                            color: "highContrast",
                            width: "40px",
                            maxHeight: "33px",
                            paddingVertical: "xxsmall",
                            "@md": {
                                paddingRight: "xxsmall"
                            }
                        },
                        summerRight: {
                            color: "highContrast",
                            width: "40px",
                            maxHeight: "33px",
                            paddingVertical: "xxsmall",
                            "@md": {
                                paddingLeft: "xxsmall"
                            }
                        },
                        fallLeft: {
                            color: "highContrast",
                            width: "40px",
                            paddingRight: "xxsmall",
                            ...!0 === t && {
                                animation: "shiver 1s ease-in-out infinite alternate"
                            },
                            "@md": {
                                width: "46px",
                                height: "26px",
                                padding: "xxsmall"
                            }
                        },
                        fallRight: {
                            color: "highContrast",
                            width: "50px",
                            maxHeight: "18px",
                            ...!0 === t && {
                                animation: "shiver 1s ease-in-out 0.5s infinite alternate"
                            }
                        },
                        winterSnowflake: {
                            width: "30px",
                            height: "30px",
                            color: "highContrast",
                            ...!0 === t && {
                                animation: "spin 10s linear infinite"
                            },
                            "@md": {
                                padding: "3px"
                            }
                        }
                    };
                switch (e) {
                    case tp:
                        return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 14.57 25.34",
                            style: r.spring,
                            dataAids: Zs.SEASONAL_SPRING_LEFT_ICON_RENDERED
                        }, Zg.getSpringLeft(t)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                            style: o.spring
                        }, a), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 18.76 25.34",
                            style: r.spring,
                            dataAids: Zs.SEASONAL_SPRING_RIGHT_ICON_RENDERED
                        }, Zg.getSpringRight(t)), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, Kg.draw));
                    case ap:
                        return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 34.26 27.83",
                            style: r.summerLeft,
                            dataAids: Zs.SEASONAL_SUMMER_LEFT_ICON_RENDERED
                        }, Zg.getSummerLeft(t)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                            style: o.summer
                        }, a), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 34.26 27.83",
                            style: r.summerRight,
                            dataAids: Zs.SEASONAL_SUMMER_RIGHT_ICON_RENDERED
                        }, Zg.getSummerRight(t)), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, Kg.swayLeft, Kg.swayRight));
                    case op:
                        return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 46 26",
                            style: r.fallLeft,
                            dataAids: Zs.SEASONAL_FALL_LEFT_ICON_RENDERED
                        }, Zg.fallLeafLeft), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                            style: o.fall
                        }, a), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: "0 0 66 18",
                            style: r.fallRight,
                            dataAids: Zs.SEASONAL_FALL_RIGHT_ICON_RENDERED
                        }, Zg.fallLeafRight), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, Kg.shiver));
                    case rp:
                        return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: " 0 0 35 35",
                            style: r.winterSnowflake,
                            dataAids: Zs.SEASONAL_WINTER_LEFT_ICON_RENDERED
                        }, Zg.winterSnowflake), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                            style: o.winter
                        }, a), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.SVG, {
                            viewBox: " 0 0 35 35",
                            style: r.winterSnowflake,
                            dataAids: Zs.SEASONAL_WINTER_RIGHT_ICON_RENDERED
                        }, Zg.winterSnowflake), t && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, Kg.spin));
                    default:
                        return a
                }
            }({
                seasonalDecoration: r,
                seasonalAnimation: l,
                content: u
            }), o),
            h = u && "None" !== r ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.PromoBanner.Seasonal : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.PromoBanner;
        return (global.React || guac.react).createElement(h, {
            category: s,
            section: "default",
            "data-aid": Zs.BANNER_RENDERED,
            style: p
        }, g ? (global.React || guac.react).createElement(lp, {
            "aria-label": c || i.promoBannerLink || "Promotion Banner Link",
            linkData: n
        }, d) : d)
    }
    np.propTypes = {
        category: (global.PropTypes || guac["prop-types"]).string,
        categoryOverride: (global.PropTypes || guac["prop-types"]).string,
        promoBannerData: (global.PropTypes || guac["prop-types"]).shape({
            message: (global.PropTypes || guac["prop-types"]).string
        }),
        secondaryContent: (global.PropTypes || guac["prop-types"]).element,
        seasonalDecorationDropdown: (global.PropTypes || guac["prop-types"]).string,
        seasonalAnimation: (global.PropTypes || guac["prop-types"]).bool,
        promoBannerLinkData: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object
    }, np.defaultProps = {
        seasonalDecorationDropdown: "None"
    };
    const ip = "Image",
        sp = "Video",
        cp = "Slideshow",
        gp = "embed",
        {
            PUBLISH: pp,
            DISPLAY: up,
            EDIT: dp
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes;
    class hp extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t(this, "handleMatchMedia", ((e, t = {}) => {
                const {
                    viewDevice: a,
                    renderMode: o
                } = Object.assign({}, this.props, t), r = o === pp ? "xs" === e.size : qc(a);
                r !== this.state.isMobile && this.setState({
                    isMobile: r
                })
            })), t(this, "getVideoDimension", (() => {
                const {
                    isMobile: e,
                    dynamicHeight: t
                } = this.state, {
                    renderMode: a
                } = this.props;
                if (!t) return {
                    videoWidth: "unset",
                    videoHeight: "unset"
                };
                const o = {
                        videoWidth: "100%",
                        videoHeight: "unset"
                    },
                    r = this.video.current;
                if (r && r.closest) {
                    const t = r.closest(`[data-aid="${Zs.HEADER_SECTION}"]`);
                    let l = a === up ? 200 : 50;
                    if (t && r) {
                        const a = r.clientWidth / r.clientHeight * (t.clientHeight - r.clientHeight);
                        return a + r.clientWidth < t.clientWidth && !e ? o : (a + r.clientWidth < t.clientWidth && (l += 50), {
                            videoWidth: "unset",
                            videoHeight: t.clientHeight + l
                        })
                    }
                }
                return {
                    videoWidth: "unset",
                    videoHeight: "unset"
                }
            })), t(this, "setEmbedScale", (() => {
                const {
                    videoType: e,
                    videoEmbed: t,
                    videoBackground: a
                } = this.props, o = e === gp ? t : a, {
                    width: r,
                    height: l
                } = o, {
                    isWide: n,
                    scale: i
                } = this.state;
                let s, c, g = n,
                    p = i;
                if (r && l) {
                    const e = this.embedWrapper.current || this.video.current;
                    e && (s = (r / l).toFixed(2), c = (e.clientWidth / e.clientHeight).toFixed(2), c < s ? (g = !1, p = s / c) : (g = !0, p = "1"))
                }(g !== n || !g && p !== i) && this.setState({
                    isWide: g,
                    scale: p
                })
            })), t(this, "updateVideoDimension", (e => {
                const {
                    renderMode: t
                } = this.props, {
                    videoWidth: a,
                    videoHeight: o
                } = this.state;
                if ("resize" === (e && e.type || "") && t === up) return;
                const r = this.getVideoDimension();
                r.videoWidth === a && r.videoHeight === o || this.setState(r)
            }));
            const {
                videoBackground: a,
                videoType: o,
                videoStyle: r
            } = e;
            this.video = (global.React || guac.react).createRef(), this.embedWrapper = (global.React || guac.react).createRef();
            const l = a && a.vimeoId;
            this.state = {
                hasEmbed: o === gp || l,
                dynamicHeight: r.dynamicHeight || !1,
                videoHeight: "unset",
                videoWidth: "unset",
                isWide: !0,
                scale: "1"
            }
        }
        static formatUrl(e) {
            return (global._ || guac.lodash).isEmpty(e) || 0 === e.indexOf("https") ? e : "https:" + e
        }
        componentDidMount() {
            const {
                hasEmbed: e
            } = this.state;
            e ? (window.addEventListener("resize", this.setEmbedScale), this.setEmbedScale()) : (this.state.dynamicHeight && window.addEventListener("resize", this.updateVideoDimension), this.updateVideoDimension())
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateVideoDimension), window.removeEventListener("resize", this.setEmbedScale)
        }
        componentDidUpdate(e) {
            const {
                viewDevice: t,
                videoType: a,
                videoBackground: o,
                tagline: r,
                tagline2: l
            } = this.props, n = o && o.vimeoId, i = a === gp || n;
            i !== this.state.hasEmbed && this.setState({
                hasEmbed: i
            }), i && this.setEmbedScale(), t !== e.viewDevice && this.handleMatchMedia({}, {
                viewDevice: t
            }), i || r === e.tagline && l === e.tagline2 || this.updateVideoDimension()
        }
        getBackgroundImageStyles() {
            const {
                videoPoster: e,
                renderMode: t
            } = this.props, {
                dynamicHeight: a
            } = this.state;
            if (t === pp && "undefined" != typeof document && a) {
                const t = document.querySelector(`[data-aid="${Zs.HEADER_SECTION}"]`);
                if (!t) return {};
                return {
                    backgroundImage: `url("${(o=e,r=t.clientWidth,l=t.clientHeight,`${o}/:/rs=w:${r},h:${l},cg:true,m/cr=w:${r},h:${l},a:cc`).replace(/"/g,'\\"')}")`
                }
            }
            var o, r, l;
            return {}
        }
        getDynamicHeightStyles() {
            const {
                renderMode: e
            } = this.props, {
                dynamicHeight: t,
                videoHeight: a,
                videoWidth: o
            } = this.state, r = {};
            if (t)
                if (e === up) {
                    const e = this.getVideoDimension();
                    r.width = e.videoWidth, r.height = e.videoHeight
                } else r.width = o, r.height = a;
            return r
        }
        generateStyles() {
            const {
                videoStyle: e,
                videoBgStyle: t
            } = this.props, {
                isMobile: a,
                hasEmbed: o
            } = this.state;
            let r, l;
            return a ? (r = t.mobile || t, l = e.mobile || e) : (r = (global._ || guac.lodash).omit(t, ["mobile"]), l = (global._ || guac.lodash).omit(e, ["mobile", "dynamicHeight"])), o ? {
                finalVideoBgStyle: (global._ || guac.lodash).merge({
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }, r),
                finalVideoStyle: { ...l,
                    ...a ? {
                        paddingBottom: 0
                    } : {}
                }
            } : {
                finalVideoBgStyle: Object.assign({}, r, this.getBackgroundImageStyles()),
                finalVideoStyle: Object.assign({}, l, this.getDynamicHeightStyles())
            }
        }
        generateEmbedStyles({
            finalVideoStyle: e,
            embedProps: t,
            isDisplay: a,
            isInitMobile: o,
            isVideoInset: r,
            renderMode: l
        }) {
            const {
                scale: n
            } = this.state, {
                thumbnail: i,
                width: s,
                height: c
            } = t, g = c > s, p = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform: `scale(${n})`
            }, u = {
                background: `url(${i}) center/cover`,
                width: "100%",
                height: "100%",
                filter: "blur(10px)"
            }, d = {
                position: "relative",
                paddingTop: c && s && s > c ? 100 * c / s + "%" : "56.25%",
                pointerEvents: "none",
                width: "100%"
            }, h = {}, b = {};
            if (r) {
                const {
                    height: t,
                    minHeight: r
                } = e;
                let n = t && (Number(t) || t.includes("px")) && parseFloat(t);
                r && parseFloat(r) > n && (n = parseFloat(r)), n && !o && (h.width = n * s / c), o && (d.paddingTop = 0), d.pointerEvents = l === dp ? "none" : "auto", a && (b.width = g || "auto" === e.width ? "auto" : "100%", b.height = "100%", b.minWidth = "none", b.minHeight = "none", b.position = "relative", d.paddingBottom = 0, d.display = "flex", d.justifyContent = "center", d.alignItems = "center")
            }
            return {
                embed: p,
                embedWrapper: { ...d,
                    ...e,
                    ...h
                },
                embedBackground: u,
                embedBgWrapper: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                },
                poster: a ? { ...e,
                    ...b
                } : e
            }
        }
        renderEmbed(e, t) {
            const {
                renderMode: a,
                isVideoInset: o,
                videoType: r,
                showMobileVideo: l
            } = this.props, {
                isMobile: n
            } = this.state, {
                thumbnail: i,
                vimeoId: c
            } = t, {
                alt: g
            } = this.context && this.context.video || {}, p = r !== gp ? this.props.videoAlt || g : "", u = !l && (void 0 === n || n), d = a === pp, h = a === up, b = d ? () => {
                window && window.markVisuallyComplete()
            } : null, m = this.generateEmbedStyles({
                finalVideoStyle: e,
                embedProps: t,
                isDisplay: h,
                isInitMobile: u,
                isVideoInset: o,
                renderMode: a
            }), y = o ? (global.React || guac.react).createElement("img", {
                src: i,
                style: m.poster,
                alt: p,
                "data-aid": Zs.HEADER_VIDEO_EMBED_INSET_POSTER
            }) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                backgroundImage: i,
                style: m.poster,
                overlay: dt
            });
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, !o && (global.React || guac.react).createElement("div", {
                style: m.embedBgWrapper
            }, (global.React || guac.react).createElement("div", {
                style: m.embedBackground
            })), (global.React || guac.react).createElement("div", {
                style: m.embedWrapper,
                ref: this.embedWrapper,
                "data-aid": Zs.HEADER_VIDEO_EMBED_WRAPPER
            }, u || h ? y : (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, d && (global.React || guac.react).createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), c && (global.React || guac.react).createElement("iframe", {
                style: m.embed,
                src: `https://player.vimeo.com/video/${c}?autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0`,
                frameBorder: "0",
                allow: "autoplay; fullscreen",
                webkitallowfullscreen: !0,
                mozallowfullscreen: !0,
                allowFullScreen: !0,
                title: p,
                onLoad: b,
                "data-aid": Zs.HEADER_VIDEO_EMBED
            }))))
        }
        renderVideo(e) {
            const {
                videoPoster: t,
                videoBackground: a,
                renderMode: o,
                showMobileVideo: r
            } = this.props, {
                isMobile: l
            } = this.state, n = !r && (void 0 === l || l), {
                alt: i
            } = this.context && this.context.video || {}, c = this.constructor.formatUrl(t), g = o === pp, p = g ? () => {
                window && window.markVisuallyComplete()
            } : null;
            if (c && g && "undefined" != typeof window) {
                const e = new Image;
                e.src = c, e.onload = p
            }
            const u = "string" == typeof a ? this.constructor.formatUrl(a) : "";
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, g && (global.React || guac.react).createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), (global.React || guac.react).createElement("video", {
                title: this.props.videoAlt || i,
                "data-aid": Zs.HEADER_VIDEO,
                ref: this.video,
                style: e,
                src: n ? "" : u,
                type: "video/mp4",
                poster: c,
                loop: !0,
                muted: !0,
                autoPlay: o !== up,
                playsInline: !0,
                onLoadedData: p
            }))
        }
        render() {
            const {
                dataRoute: e,
                videoType: t,
                videoBackground: a,
                videoEmbed: o
            } = this.props, {
                finalVideoBgStyle: r,
                finalVideoStyle: l
            } = this.generateStyles(), {
                hasEmbed: n
            } = this.state;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper.Video, {
                style: r,
                "data-field-id": e
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.MatchMedia, {
                onChange: this.handleMatchMedia
            }), n ? this.renderEmbed(l, t === gp ? o : a) : this.renderVideo(l))
        }
    }
    hp.propTypes = {
        videoStyle: (global.PropTypes || guac["prop-types"]).object,
        videoAlt: (global.PropTypes || guac["prop-types"]).string,
        videoBgStyle: (global.PropTypes || guac["prop-types"]).object,
        videoBackground: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).object]).isRequired,
        videoPoster: (global.PropTypes || guac["prop-types"]).string.isRequired,
        videoEmbed: (global.PropTypes || guac["prop-types"]).object,
        videoType: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        viewDevice: (global.PropTypes || guac["prop-types"]).string.isRequired,
        tagline: (global.PropTypes || guac["prop-types"]).string,
        tagline2: (global.PropTypes || guac["prop-types"]).string,
        dataRoute: (global.PropTypes || guac["prop-types"]).string,
        isVideoInset: (global.PropTypes || guac["prop-types"]).bool,
        showMobileVideo: (global.PropTypes || guac["prop-types"]).bool
    }, hp.defaultProps = {
        videoStyle: {},
        videoBgStyle: {},
        videoBackground: "",
        videoPoster: "",
        renderMode: "",
        viewDevice: "",
        tagline: "",
        tagline2: "",
        videoEmbed: {},
        showMobileVideo: !1
    }, hp.contextTypes = {
        video: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        UX2: bp,
        components: {
            Bootstrap: mp
        }
    } = global.Core || guac["@wsb/guac-widget-core"];

    function yp(e) {
        return (global.React || guac.react).createElement(bp.Element.Block, {
            style: {
                width: "100%",
                ...e.containerStyle
            }
        }, (global.React || guac.react).createElement(mp.Radpack, a({}, e, {
            Component: hp,
            entry: "@widget/LAYOUT/bs-HeaderVideoBackground-Component"
        })), e.useOverlay && (global.React || guac.react).createElement(bp.Element.Block, {
            category: e.category,
            style: {
                backgroundColor: "section",
                opacity: .3,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }))
    }
    yp.propTypes = {
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        category: (global.PropTypes || guac["prop-types"]).string,
        useOverlay: (global.PropTypes || guac["prop-types"]).bool
    };
    const fp = "slides";

    function wp({
        adEndpoint: e,
        renderMode: t,
        containerId: a,
        viewDevice: o
    }) {
        const r = /<script[^>]*>([\s\S]*)<\/script>/,
            l = "PUBLISH" === t;
        let n, i, s, c, g, p = !1;

        function u() {
            const e = c.offsetWidth + "px";
            s.style.marginLeft = e, s.style.width = `calc(100% - ${e})`
        }

        function d(e) {
            if (s.innerHTML = (e || "").replace(r, ""), s.style.maxHeight = "100px", l) {
                const t = r.exec(e);
                if (t) {
                    const e = document.createElement("script");
                    e.appendChild(document.createTextNode(t[1])), document.head.appendChild(e)
                }
            }
        }

        function h() {
            const e = 0 !== ("undefined" == typeof window ? 0 : window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
            e !== p && (p = e, i.style.height = s.offsetHeight, s.style.position = p ? "fixed" : "static")
        }

        function b() {
            ! function() {
                const e = document.getElementById(a);
                n = e.closest(".layout") || document.body, i = document.createElement("div"), i.style.width = "100%", s = document.createElement("div"), s.setAttribute("data-freemium-ad", !0), s.style.transition = "max-height 1s", s.style.maxHeight = "0px", s.style.overflow = "hidden", s.style.zIndex = 1e4, s.style.width = "100%", s.style.top = "0px", s.style.left = "0px", s.style.right = "0px", i.appendChild(s), n.prepend(i), !l || o && /mobile/i.test(o) || (c = document.querySelector('[data-ux="Sidebar"]'), c && (u(), window.ResizeObserver && (g = new ResizeObserver(u), g.observe(c))))
            }();
            const t = l && sessionStorage.getItem(e) || "";
            t ? d(t) : window.fetch(e).then((e => e.ok && e.text())).then((t => {
                t && (sessionStorage.setItem(e, t), d(t))
            })).catch((() => {})), l && window.addEventListener("scroll", h, {
                passive: !0
            })
        }
        return l && window.onVisualComplete ? window.onVisualComplete(b) : "complete" === document.readyState ? b() : window.addEventListener("load", b),
            function() {
                n && n.removeChild(i), g && g.disconnect()
            }
    }
    const {
        components: {
            Bootstrap: Cp
        },
        constants: {
            renderModes: {
                PUBLISH: Ep,
                PREVIEW: Tp
            }
        }
    } = global.Core || guac["@wsb/guac-widget-core"];

    function Pp(e) {
        const {
            adDomain: t,
            renderMode: a,
            viewDevice: o = "",
            locale: r
        } = e, l = a === Ep, n = l ? "/markup/ad" : `//${t}/v1/markup/paywall?locale=${r}&forceSize=${/mobile/i.test(o)?"mobile":"desktop"}`, i = (global.React || guac.react).useMemo((() => (global._ || guac.lodash).uniqueId("freemium-ad-")), []), s = (global.React || guac.react).useMemo((() => ({
            adEndpoint: n,
            renderMode: a,
            viewDevice: o,
            containerId: i
        })), [n, a, o, i]);
        return (global.React || guac.react).useEffect((() => {
            if (a === Tp) return wp(s)
        }), [a, s]), l || a === Tp ? (global.React || guac.react).createElement("div", {
            id: i
        }, l ? (global.React || guac.react).createElement(Cp.JS, {
            id: "FreemiumAd",
            script: wp.toString(),
            props: s
        }) : null) : null
    }

    function Rp({
        locale: e,
        enableFreemiumAd: t,
        isFreemium: a,
        freemiumAdDomain: o,
        children: r,
        ...l
    }) {
        return t && a && (r = (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(Pp, {
            adDomain: o,
            renderMode: l.renderMode,
            viewDevice: l.viewDevice,
            locale: e
        }), r)), {
            "data-aid": Zs.HEADER_WIDGET,
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Widget,
            ...l,
            children: r
        }
    }
    Pp.propTypes = {
        adDomain: (global.PropTypes || guac["prop-types"]).string.isRequired,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        locale: (global.PropTypes || guac["prop-types"]).string.isRequired,
        viewDevice: (global.PropTypes || guac["prop-types"]).string
    };
    const {
        IntersectionObserver: vp
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX;
    class xp extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t(this, "onVisible", (() => {
                this.setState({
                    visible: !0
                })
            }));
            const {
                renderMode: a
            } = e, {
                PREVIEW: o,
                PUBLISH: r
            } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes;
            this.state = {
                visible: a !== o && a !== r,
                fluidPadding: null
            }
        }
        static getDerivedStateFromProps(e) {
            const {
                width: t,
                height: a
            } = e;
            return t && a ? {
                fluidPadding: a / t * 100 + "%"
            } : {
                fluidPadding: null
            }
        }
        render() {
            const {
                visible: e,
                fluidPadding: t
            } = this.state, {
                embedUrl: a,
                containerStyle: o
            } = this.props, r = this.props["data-aid"];
            if (!e) return (global.React || guac.react).createElement(vp, {
                callback: this.onVisible
            });
            const l = t ? {
                paddingBottom: t
            } : {};
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Embed.Container, {
                style: { ...l,
                    ...o
                },
                tag: "div"
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Embed, {
                tag: "iframe",
                allowFullScreen: !0,
                type: "text/html",
                frameBorder: "0",
                "data-aid": r,
                src: a,
                title: ""
            }))
        }
    }
    t(xp, "propTypes", {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        embedUrl: (global.PropTypes || guac["prop-types"]).string.isRequired,
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        width: (global.PropTypes || guac["prop-types"]).string,
        height: (global.PropTypes || guac["prop-types"]).string
    });
    const {
        Bootstrap: Sp
    } = (global.Core || guac["@wsb/guac-widget-core"]).components;

    function kp(e) {
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement(Sp.Radpack, a({}, e, {
            entry: "@widget/LAYOUT/bs-LazyVideo-Component",
            Component: xp
        })))
    }

    function Ip(e) {
        return e.embedUrl ? this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: {
                width: "100%",
                "@xs-only": {
                    marginBottom: "medium"
                },
                "@sm-only": {
                    marginBottom: "medium"
                }
            },
            children: (global.React || guac.react).createElement(kp, a({
                renderMode: this.base.renderMode
            }, e))
        }, (global._ || guac.lodash).omit(e, ["embedUrl", "data-aid"])) : null
    }
    const {
        PREVIEW: Lp,
        PUBLISH: Mp
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes;

    function Ap({
        containerStyle: e,
        alt: t,
        url: a,
        poster: o,
        height: r,
        width: l,
        renderMode: n,
        embedVideoStyles: i = {},
        ...s
    }) {
        const [c, g] = (global.React || guac.react).useState(null), [p, u] = (global.React || guac.react).useState(!1);
        (global.React || guac.react).useEffect((() => {
            const e = new RegExp(/\/\/[^/]*.godaddy.com\//);
            u(a.match(e))
        }), [a]), (global.React || guac.react).useEffect((() => g(r && l ? r / l * 100 + "%" : null)), [r, l]);
        const d = s["data-aid"],
            h = {
                pointerEvents: n === Lp || n === Mp ? "auto" : "none",
                paddingHorizontal: 0
            },
            b = c ? {
                paddingBottom: c
            } : e;
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Embed.Container, {
            style: { ...h,
                ...b
            },
            tag: "div"
        }, p ? (global.React || guac.react).createElement("video", {
            title: t,
            src: a,
            type: "video/mp4",
            poster: o,
            style: {
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "100%"
            },
            "data-aid": d,
            controls: !0,
            playsInline: !0
        }) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Embed, {
            tag: "iframe",
            allowFullScreen: !0,
            type: "text/html",
            frameBorder: "0",
            style: { ...i
            },
            src: a,
            title: t,
            "data-aid": d
        }))
    }
    Ap.propTypes = {
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        width: (global.PropTypes || guac["prop-types"]).string,
        height: (global.PropTypes || guac["prop-types"]).string,
        url: (global.PropTypes || guac["prop-types"]).string,
        poster: (global.PropTypes || guac["prop-types"]).string,
        alt: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes)),
        embedVideoStyles: (global.PropTypes || guac["prop-types"]).object
    };
    const {
        PUBLISH: _p
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes, {
        Bootstrap: Op
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, {
        withLazyLoader: Bp
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils, Dp = {
        1: "620px",
        2: "400px",
        3: "400px"
    }, Hp = Dp[1];

    function Np({
        lazyLoad: e = !0,
        columnCountMap: t,
        ...o
    }) {
        const r = function(e) {
            if (!e) return {
                maxHeight: Hp
            };
            const t = {};
            return Object.keys(e).map((a => {
                t[a] = {
                    maxHeight: Dp[e[a]] || Hp
                }
            })), t
        }(t);
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: r
        }, (global.React || guac.react).createElement(Op.Radpack, a({}, o, {
            embedVideoStyles: r,
            entry: "@widget/LAYOUT/bs-VideoComponent-Component",
            Component: e && o.renderMode === _p ? Bp(Ap) : Ap
        })))
    }
    Np.propTypes = {
        lazyLoad: (global.PropTypes || guac["prop-types"]).bool,
        columnCountMap: (global.PropTypes || guac["prop-types"]).Object
    };
    const {
        getSelectedVideoProps: Up
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils;

    function zp(e) {
        const t = e.url ? e : Up(e);
        return t.url ? this.merge({
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            style: {
                width: "100%",
                "@xs-only": {
                    marginBottom: "medium"
                },
                "@sm-only": {
                    marginBottom: "medium"
                }
            },
            children: (global.React || guac.react).createElement(Np, a({}, t, {
                renderMode: this.base.renderMode
            }))
        }, (global._ || guac.lodash).omit(t, ["data-aid", "containerStyle", "lazyLoad", "url", "rawUrl", "thumbnail", "width", "height", "vimeoAccountType", "vimeoId"])) : null
    }

    function Xp(e) {
        return class extends e {
            Header() {
                return Rp.apply(this, arguments)
            }
            EmbedVideo() {
                return Ip.apply(this, arguments)
            }
            Video() {
                return zp.apply(this, arguments)
            }
        }
    }
    var Wp = Xp(Ys);
    const Vp = {
            NAV2_LOGO_ALIGN: "enableNav2LogoAlignment",
            NAV7_LOGO_ALIGN: "enableNav7LogoAlignment"
        },
        {
            renderModes: Fp
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants;

    function jp(e) {
        const t = {};
        if (!e) return t;
        const a = e.toJs ? e.toJs() : e;
        for (const e of (global._ || guac.lodash).values(Vp)) t[e] = a[e];
        return t
    }
    const {
        LIGHT: Gp,
        LIGHT_ALT: qp,
        LIGHT_COLORFUL: $p,
        DARK: Yp,
        DARK_ALT: Kp,
        DARK_COLORFUL: Zp,
        COLORFUL: Qp,
        MVP: Jp
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs, {
        PRIMARY: eu,
        ACCENT: tu,
        NEUTRAL: au
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.categoryTypes, {
        DEFAULT: ou,
        ALT: ru
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.sectionTypes, {
        HEADER: lu,
        FOOTER: nu
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.widgetTypes, iu = (e, t) => e[t % e.length];

    function su({
        widget: e = {},
        categories: t = [eu],
        sections: a = [ou],
        overrides: o = {}
    }) {
        const {
            type: r
        } = e, l = r === lu ? 0 : e.index, n = {
            category: iu(t, l),
            section: iu(a, l)
        };
        return r in o ? (global._ || guac.lodash).merge(n, o[r]) : n
    }

    function cu(e, t = {}, a = {}) {
        const {
            category: o = au
        } = t;
        switch (e) {
            case Gp:
                return su({
                    widget: t,
                    categories: [au],
                    sections: [ou],
                    overrides: a
                });
            case qp:
                return su({
                    widget: t,
                    categories: [au],
                    sections: [ou, ru],
                    overrides: {
                        [lu]: {
                            category: au,
                            section: ru
                        },
                        ...a
                    }
                });
            case $p:
                return su({
                    widget: t,
                    categories: [au, eu, au],
                    sections: [ou, ou, ru],
                    overrides: {
                        [lu]: {
                            category: au,
                            section: ru
                        },
                        ...a
                    }
                });
            case Yp:
                return su({
                    widget: t,
                    categories: [tu],
                    sections: [ru],
                    overrides: a
                });
            case Kp:
                return su({
                    widget: t,
                    categories: [tu],
                    sections: [ou, ru],
                    overrides: {
                        [lu]: {
                            category: tu,
                            section: ru
                        },
                        ...a
                    }
                });
            case Zp:
                return su({
                    widget: t,
                    categories: [tu, eu, tu],
                    sections: [ou, ou, ru],
                    overrides: {
                        [lu]: {
                            category: tu,
                            section: ru
                        },
                        ...a
                    }
                });
            case Qp:
                return su({
                    widget: t,
                    categories: [eu],
                    overrides: a
                });
            case Jp:
            default:
                return su({
                    widget: t,
                    categories: [au],
                    sections: [ou, ru],
                    overrides: {
                        [lu]: {
                            category: o,
                            section: o === au ? ru : ou
                        },
                        [nu]: {
                            category: o === eu ? tu : o
                        }
                    }
                })
        }
    }
    const {
        colorPackCategories: {
            PRIMARY: gu,
            ACCENT: pu,
            NEUTRAL: uu
        },
        widgetTypes: {
            HEADER: du,
            FOOTER: hu
        },
        renderModes: {
            PUBLISH: bu
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    class mu extends(global.React || guac.react).Component {
        static getCategoryAndSection(e, {
            type: t,
            category: a,
            index: o
        }) {
            return cu(e, {
                type: t,
                category: a,
                index: o
            })
        }
        static getPropsByTypeAndCategory(e, t = gu, a = 0, o, r) {
            return cu(r, {
                type: e,
                category: t,
                index: a
            })
        }
        static getWidgetDefaultProps({
            widgetType: e,
            widgetPreset: t,
            category: a = gu,
            index: o = 0,
            paintJobOverride: r
        }) {
            return { ...this.Theme.getWidgetDefaultProps(e, t),
                ...this.getPropsByTypeAndCategory(e, a, o, t, r)
            }
        }
        static getMutatorDefaultProps({
            widgetType: e,
            widgetPreset: t
        }) {
            return this.Theme.getMutatorDefaultProps(e, t)
        }
        static getFilteredPropTypes(e) {
            return e.filter((e => !this.Theme.excludedProps.includes(e)))
        }
        constructor() {
            super(...arguments);
            const e = this.constructor.Theme;
            this.state = {
                Theme: e,
                theme: e && new e
            }, this.pageId = (global._ || guac.lodash).uniqueId("page-")
        }
        getPropsByType({
            type: e,
            index: t = 0,
            preset: a,
            paintJobOverride: o
        }) {
            const {
                category: r,
                children: l
            } = this.props, n = e === hu ? l && l.length : t, i = this.constructor.getPropsByTypeAndCategory(e, r, n, a, o);
            return o ? { ...i,
                paintJob: o
            } : i
        }
        render() {
            const {
                Theme: e,
                theme: t
            } = this.state, {
                header: a,
                children: o,
                footer: r,
                renderMode: l,
                websiteWidgets: n
            } = this.props, {
                paintJob: i
            } = this.context;
            let c;
            if (l === bu && e && e.raw && e.displayName) {
                const t = JSON.stringify(e.raw),
                    a = JSON.stringify(e.displayName);
                c = ["window.wsb=window.wsb||{};", `window.wsb[${a}]=window.wsb[${a}]||window.radpack(${t}).then(function(t){`, "return new t.default();", "});"].join("")
            }
            const g = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Script, {
                    shared: !1
                }, `document.getElementById('${this.pageId}').addEventListener('click', function() {}, false);`),
                p = (global.React || guac.react).Children.count(o),
                u = l === bu && s + ",window.markVisuallyComplete();",
                d = l === bu && 'var imageObserver=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var r=e.target;r.src=r.getAttribute("data-srclazy"),r.getAttribute("data-srcsetlazy")&&(r.srcset=r.getAttribute("data-srcsetlazy")),t.unobserve(r)}})},{rootMargin:"150px"});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-srclazy]").forEach(function(e){return imageObserver.observe(e)})});';
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Page, {
                id: this.pageId,
                theme: t
            }, c && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Script, {
                shared: !0,
                preload: !0,
                children: c
            }), a && (global.React || guac.react).cloneElement(a, this.getPropsByType({
                type: du,
                paintJobOverride: i
            })), u && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Script, {
                shared: !0,
                children: u
            }), (global.React || guac.react).Children.map(o, ((e, t) => {
                const {
                    preset: a,
                    type: o = "default"
                } = e.props || {}, r = this.getPropsByType({
                    type: o,
                    index: t,
                    preset: a,
                    paintJobOverride: i
                });
                return r.order = t, r.isLastPageWidget = t === p - 1, (global.React || guac.react).cloneElement(e, r)
            })), r && (global.React || guac.react).cloneElement(r, this.getPropsByType({
                type: hu,
                paintJobOverride: i
            })), n, g, d && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Script, {
                shared: !0,
                children: d
            }))
        }
    }
    t(mu, "propTypes", {
        header: (global.PropTypes || guac["prop-types"]).node,
        children: (global.PropTypes || guac["prop-types"]).node,
        footer: (global.PropTypes || guac["prop-types"]).node,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        websiteWidgets: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).node),
        category: (global.PropTypes || guac["prop-types"]).oneOf([gu, pu, uu])
    }), t(mu, "contextTypes", {
        paintJob: (global.PropTypes || guac["prop-types"]).string
    }), t(mu, "Theme", Wp), e.ABOUT1_IMAGE_WIDTH = "365px", e.ACCENT = gt, e.AbsLink = gc, e.BLUR = n, e.BaseLayout = mu, e.CATEGORY = ct, e.COMMON_BUTTON_CONFIG = St, e.CONTENT2_IMAGE_WIDTH = "600px", e.CTAButton = $g, e.DEFAULT_FALLBACK_IMAGE_OPACITY = Et, e.DEFAULT_HEADER_IMAGE_OPACITY = 25, e.DESKTOP_NAV = ul, e.DESKTOP_NAV_COVER = dl, e.Default = Ys, e.DynamicTagline = jg, e.EMBED = gp, e.FILL = o, e.FIT = r, e.FlyoutDropdown = ig, e.FlyoutMenu = sg, e.HeaderFlyoutMenuWrapper = gg, e.HeaderVideoBackgroundWrapper = yp, e.ICON_SIZE = Pt, e.IMAGE = ip, e.IMAGES_ONLY = "imagesOnly", e.INSET = l, e.LARGE = me, e.LEGACY_BLUR = i, e.LIGHT_DARK = ht, e.LOGO_OVERHANG_THRESHOLD = 104, e.Logo = Hg, e.MEDIUM = be, e.MobileNavIcon = Xg, e.NAV_DRAWER = hl, e.NEUTRAL = pt, e.NONE = dt, e.NavigationDrawer = lg, e.OVERLAY_OPACITY_DEFAULTS = vt, e.PRIMARY = ut, e.Phone = Gg, e.PortalContainer = jc, e.PromoBanner = np, e.SIDEBAR = bl, e.SLIDES = fp, e.SLIDESHOW = cp, e.SVGs = Zg, e.TranslateIcon = wc, e.UPLOAD = "upload", e.UtilitiesMenu = vg, e.VIDEO = sp, e.XSMALL = he, e._defineProperty = t, e._extends = a, e.addImageApiArgs = h, e.animationKeyframes = Kg, e.applyDefaultProps = function(e, t, a = {}) {
        return (o => {
            const {
                navigation: r,
                renderMode: l,
                mediaType: n,
                video: i,
                logo: s,
                _hiddenProps: c = {},
                experiments: g,
                background: p = {},
                backgroundImage: u = {}
            } = o, d = o.featureFlags && o.featureFlags.toJS ? o.featureFlags.toJS() : o.featureFlags || {}, h = d.enableHeaderSlideshow, b = d.enableNavBackground, {
                defaultLogoAlign: m = "left"
            } = a, {
                selectedMutatorType: y,
                logoUrl: f,
                logoText: w,
                logoAlign: C
            } = s || {}, E = y || (f ? "IMAGE" : "TEXT"), T = Boolean("IMAGE" === E && f), P = (global._ || guac.lodash).get(o, "address.value", l === Fp.DISPLAY && t.getMutatorDefaultProps("HEADER").showAddressDefault && c.address && c.address.value), R = P && P.replace(/\r?\n|\r/g, " ").trim(), v = Boolean("TEXT" === E && w), x = !(!T && !v), S = !(!r || !r.length), k = jp(g);
            !p.image && u && (p.image = u.backgroundImage || "");
            const I = {
                    slideshowEnabled: h,
                    mediaDataRoute: "background",
                    enableNavBackground: b,
                    hasLogoImage: T,
                    trimmedAddress: R,
                    hasRenderedLogo: x,
                    showNav: S,
                    background: p,
                    enableFreemiumAd: !!d.enableFreemiumAd,
                    ...a
                },
                L = (global._ || guac.lodash).merge({}, I, (global._ || guac.lodash).omit(o, ["experiments"]), {
                    transparentNav: void 0
                }, s && !C ? {
                    logo: {
                        logoAlign: m
                    }
                } : {}, k);
            if (L.cta && !L.cta.label && (L.cta.enabled = !1), h)
                if (n === sp) L.background = i, L.backgroundImage = {
                    backgroundImage: i ? i.image : ""
                };
                else if (n === cp && l === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH) {
                const {
                    slides: e = [],
                    slideshowType: t,
                    slideshowOptions: a
                } = o, {
                    dots: r,
                    arrows: l,
                    autoplay: n
                } = a;
                if (e.length > 0 && !r && !l && !n) {
                    const a = e[0] || {};
                    t === fp && (L.tagline = a.tagline, L.tagline2 = a.tagline2, L.ctaButton = a.cta), L.mediaType = ip;
                    const o = a.image;
                    L.background = o, L.backgroundImage = {
                        backgroundImage: o ? o.image : ""
                    }
                }
            }
            return e[0] = L, e
        })(e[0])
    }, e.applyPattern = su, e.colorLightnessSimilarity = Is, e.colorPackCategories = yt, e.countVCTElement = s, e.dataAids = Zs, e.dataRoutes = xg, e.eventListenerPolyfill = Zc, e.factory = Xp, e.fontSizeByDevice = fe, e.fonts = ze, e.generateBackgroundUrl = m, e.getBackgroundColor = is, e.getBorderColor = ss, e.getCategoryAndSection = cu, e.getCategoryFromConfig = function(e, t, a) {
        return e === lu ? (global._ || guac.lodash).get(t, "packCategories.color", a) : a
    }, e.getColor = ns, e.getDial = ls, e.getFilledSocialProfilesCount = function(e) {
        return Object.keys((global._ || guac.lodash).omit(e, "socialAccountsEnabled")).filter((t => !!e[t])).length
    }, e.getFilteredNavigation = rg, e.getLogoHeight = Sg, e.getWidth = Nc, e.getWidths = e => e.map((e => Nc(e))), e.hasSocialProfiles = ag, e.hide = e => {
        e.style.display = "none", e.style.visibility = "hidden", e.classList.remove("visible")
    }, e.isDeviceMobile = qc, e.isImbalanced = (e, t) => {
        const a = (global._ || guac.lodash).last(e),
            o = (global._ || guac.lodash).sum(e),
            r = (global._ || guac.lodash).sum(t);
        return Math.abs(o - r) > Math.abs(o - a - (r + a))
    }, e.isNestedNavActive = Pc, e.keyframes = ai, e.levelFilter = vi, e.mergeTypographyOverrides = Vs, e.minimalIconMapping = {
        facebook: "facebookMinimal",
        twitter: "twitterMinimal",
        googleplus: "googleplusMinimal",
        pinterest: "pinterestMinimal",
        instagram: "instagramMinimal",
        linkedin: "linkedinMinimal",
        youtube: "youtubeMinimal",
        yelp: "yelpMinimal",
        XING: "XINGMinimal",
        houzz: "houzzMinimal"
    }, e.multiLinePadded = function({
        styleOverrides: e,
        otherStyleOverrides: t,
        renderMode: a
    }) {
        const o = {
            display: "inline",
            verticalAlign: "baseline",
            boxDecorationBreak: "clone",
            "-webkit-box-decoration-break": "clone",
            ...e
        };
        return {
            style: {
                borderWidth: "0 !important",
                padding: "0 !important",
                display: "block",
                span: o,
                ..."EDIT" === a ? {
                    "@md": {
                        span: void 0,
                        ".mx-inline-field .public-DraftStyleDefault-block": o
                    }
                } : null,
                ...t
            }
        }
    }, e.overlayTypes = bt, e.renderSocialLinks = function({
        socialProfiles: e = {},
        iconsPerLine: t = 6,
        singleLine: o,
        autoBalance: r,
        ...l
    } = {}) {
        if (!ag(e)) return null;
        const n = {
            socialProfiles: e,
            ...l
        };
        return o ? (global.React || guac.react).createElement(Dc, n) : (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, og(e, t, r).map(((e, t) => (global.React || guac.react).createElement(Dc, a({}, l, {
            key: t,
            socialProfiles: e
        })))))
    }, e.resolveFontSizeCharCount = ({
        count: e = 0,
        fontSizeMap: t = {},
        defaultFontSize: a
    }) => {
        const o = (global._ || guac.lodash).reduce(t, ((e, [t, a = Number.MAX_VALUE], o) => (e.push({
            range: [t, a],
            fontSize: o
        }), e)), []);
        let r = a || void 0;
        return o.forEach((({
            range: [t, a],
            fontSize: o
        }) => {
            e >= t && e <= a && (r = o)
        })), r
    }, e.sectionHrTypes = Ct, e.show = e => {
        e.style.display = "", e.style.visibility = "visible", e.classList.add("visible")
    }, e.spacingHorizontal = We, e.spacingVertical = Xe
})), "undefined" != typeof window && (window.global = window);