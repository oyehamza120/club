define("@widget/LAYOUT/c/HeroBackground-0dac5887.js", ["exports", "@widget/LAYOUT/c/Layout", "@widget/LAYOUT/c/video", "@widget/LAYOUT/c/utils2"], (function(e, o, a, t) {
    "use strict";
    class r extends(global.React || guac.react).Component {
        render() {
            const {
                backgroundImage: e,
                videoBackground: a,
                videoPoster: t,
                videoStyle: r,
                blur: l,
                blurOnly: g,
                children: p,
                style: c,
                renderMode: i,
                viewDevice: n,
                tagline: s,
                tagline2: d,
                dataRoute: u,
                mediaData: y,
                isVideoInset: b,
                showMobileVideo: m,
                ...v
            } = this.props, {
                mediaType: h,
                videoEmbed: P,
                videoType: T
            } = y, w = {
                common: {
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "relative"
                },
                background: {
                    display: "flex",
                    flexGrow: "1"
                },
                foreground: {
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "100%",
                    width: "100%",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0"
                }
            };
            if (h === o.VIDEO) return (global.React || guac.react).createElement(o.HeaderVideoBackgroundWrapper, {
                videoStyle: (global._ || guac.lodash).get(r, "video", {}),
                videoBgStyle: (global._ || guac.lodash).get(r, "background", {}),
                videoBackground: a,
                videoPoster: t,
                videoEmbed: P,
                videoType: T,
                renderMode: i,
                viewDevice: n,
                tagline: s,
                tagline2: d,
                dataRoute: u,
                isVideoInset: b,
                showMobileVideo: m
            });
            if (!l || !e) return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, o._extends({}, v, {
                backgroundImage: e,
                "data-field-id": u,
                style: { ...w.common,
                    ...c
                },
                children: p
            }));
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, o._extends({}, v, {
                style: { ...w.common,
                    ...w.background,
                    ...c
                },
                backgroundImage: e + "/fx-bl=s:30"
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    position: "relative",
                    width: "100%"
                }
            }, !g && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                backgroundImage: e.replace(/(\/cr[^/]*|\/rs[^/]*)/g, "").replace(/\/:\/?$/, ""),
                "data-field-id": u,
                style: w.foreground,
                backgroundSize: "contain"
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    position: "relative"
                },
                children: p
            })))
        }
    }
    r.propTypes = {
        blur: (global.PropTypes || guac["prop-types"]).bool,
        blurOnly: (global.PropTypes || guac["prop-types"]).bool,
        backgroundImage: (global.PropTypes || guac["prop-types"]).string,
        videoBackground: (global.PropTypes || guac["prop-types"]).string,
        videoPoster: (global.PropTypes || guac["prop-types"]).string,
        videoStyle: (global.PropTypes || guac["prop-types"]).object,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        viewDevice: (global.PropTypes || guac["prop-types"]).string,
        tagline: (global.PropTypes || guac["prop-types"]).string,
        tagline2: (global.PropTypes || guac["prop-types"]).string,
        children: (global.PropTypes || guac["prop-types"]).object,
        style: (global.PropTypes || guac["prop-types"]).object,
        dataRoute: (global.PropTypes || guac["prop-types"]).string,
        mediaData: (global.PropTypes || guac["prop-types"]).object,
        isVideoInset: (global.PropTypes || guac["prop-types"]).bool,
        showMobileVideo: (global.PropTypes || guac["prop-types"]).bool
    }, r.defaultProps = {
        blur: !1,
        blurOnly: !1,
        backgroundImage: "",
        videoBackground: "",
        videoPoster: "",
        videoStyle: {},
        renderMode: "",
        viewDevice: "",
        tagline: "",
        tagline2: "",
        mediaData: {}
    };
    const l = {
        small: "30vh",
        medium: "50vh",
        large: "60vh",
        xlarge: "75vh",
        full: "100vh",
        auto: "auto"
    };
    class g extends(global.React || guac.react).Component {
        render() {
            const {
                background: e,
                background2: g,
                videoBackground: p,
                videoPoster: c,
                videoBackground2: i,
                videoPoster2: n,
                videoStyle: s,
                height: d,
                blurOnly: u,
                children: y,
                hasContent: b,
                renderMode: m,
                viewDevice: v,
                tagline: h,
                tagline2: P,
                style: T,
                overlayCategory: w,
                centerChildren: k,
                forceRenderBackground: f,
                mobileMinHeight: B,
                mediaDataRoute: R,
                mediaData: C,
                ...E
            } = this.props, D = (global._ || guac.lodash).omit(E, ["id", "category", "section"]), {
                mediaType: x
            } = C;
            let M, {
                category: I,
                section: O
            } = this.props;
            const H = (x === o.IMAGE || !x) && e && e.backgroundImage || t.hasMediaContent(C),
                U = g && g.backgroundImage,
                S = a.hasVideo({ ...C,
                    background: e
                }),
                j = H || U || S,
                V = {
                    min: {
                        minHeight: B,
                        "@md": {
                            minHeight: l[d] || d
                        }
                    },
                    container: {
                        position: "relative",
                        margin: "0",
                        width: "100%",
                        height: "auto",
                        "@md": {
                            minHeight: l[d] || d
                        }
                    },
                    common: {
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0"
                    },
                    sectionWrapper: {
                        display: "flex",
                        alignItems: "stretch",
                        position: "relative",
                        "@md": {
                            flexGrow: "1"
                        }
                    },
                    contentWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        minHeight: B,
                        width: "100%",
                        "@md": {
                            minHeight: l[d] || d,
                            flexGrow: "1"
                        }
                    }
                },
                X = e && e.style || {},
                _ = g && g.style || {},
                A = "auto" === d ? {} : V.min,
                L = (H || f) && (global.React || guac.react).createElement(r, o._extends({}, D, e, {
                    videoBackground: p,
                    videoPoster: c,
                    videoStyle: s,
                    blurOnly: u,
                    style: {
                        width: "100%",
                        ...X,
                        ...A,
                        ...T
                    },
                    dataRoute: R,
                    renderMode: m,
                    viewDevice: v,
                    tagline: h,
                    tagline2: P,
                    mediaData: C
                })),
                W = U && (global.React || guac.react).createElement(r, o._extends({}, D, g, {
                    videoBackground: i,
                    videoPoster: n,
                    videoStyle: s,
                    blurOnly: u,
                    style: { ..._,
                        width: "100%",
                        ...A
                    },
                    renderMode: m,
                    dataRoute: "background2",
                    viewDevice: v,
                    tagline: h,
                    tagline2: P
                }));
            return j ? b ? (I = w || "accent", O = "overlay", M = "sectionOverlay") : (I = I || "primary", O = O || "alt", M = "transparent") : (I = I || "primary", O = O || "alt", M = "section"), y ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: V.container
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: { ...V.common,
                    display: "flex"
                }
            }, L, W), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: V.sectionWrapper
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                category: I,
                section: O,
                style: { ...V.contentWrapper,
                    backgroundColor: M,
                    justifyContent: k ? "center" : void 0
                },
                children: y
            }))) : L || null
        }
    }
    g.defaultProps = {
        height: "medium",
        isHomepage: !1,
        mobileMinHeight: 300,
        mediaData: {}
    }, g.propTypes = {
        background: (global.PropTypes || guac["prop-types"]).object,
        background2: (global.PropTypes || guac["prop-types"]).object,
        videoBackground: (global.PropTypes || guac["prop-types"]).string,
        videoPoster: (global.PropTypes || guac["prop-types"]).string,
        videoBackground2: (global.PropTypes || guac["prop-types"]).string,
        videoPoster2: (global.PropTypes || guac["prop-types"]).string,
        videoStyle: (global.PropTypes || guac["prop-types"]).object,
        height: (global.PropTypes || guac["prop-types"]).string,
        blurOnly: (global.PropTypes || guac["prop-types"]).bool,
        isHomepage: (global.PropTypes || guac["prop-types"]).bool,
        children: (global.PropTypes || guac["prop-types"]).any,
        hasContent: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        viewDevice: (global.PropTypes || guac["prop-types"]).string,
        tagline: (global.PropTypes || guac["prop-types"]).string,
        tagline2: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        category: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        overlayCategory: (global.PropTypes || guac["prop-types"]).string,
        centerChildren: (global.PropTypes || guac["prop-types"]).bool,
        forceRenderBackground: (global.PropTypes || guac["prop-types"]).bool,
        mobileMinHeight: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).number]),
        mediaDataRoute: (global.PropTypes || guac["prop-types"]).string,
        mediaData: (global.PropTypes || guac["prop-types"]).object
    }, e.HeroBackground = g
})), "undefined" != typeof window && (window.global = window);