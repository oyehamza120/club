define("@widget/LAYOUT/c/utils-6f80a19a.js", ["exports", "@widget/LAYOUT/c/Layout", "@widget/LAYOUT/c/video"], (function(e, t, a) {
    "use strict";
    const {
        EDIT: n,
        PUBLISH: r
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes, i = (e, t, a = "") => ({ ...{
            oWidth: ["", "0", "180"].includes(a) ? e : t,
            oHeight: ["", "0", "180"].includes(a) ? t : e
        },
        isLandscape: "landscape" === d({
            rotation: a,
            oWidth: e,
            oHeight: t
        })
    }), o = ({
        backgroundImage: e,
        videoType: n,
        videoEmbed: r,
        mediaType: i,
        imageTreatmentName: o,
        imageTreatments: d,
        hasLegacy: g = !0,
        useFixedHeight: u,
        shrinkFit: m,
        defaultHeaderTreatment: c = t.FILL,
        headerTreatmentName: s
    }) => {
        const T = void 0 === u && g,
            l = !(!e || "string" != typeof e && !e.backgroundImage) || a.hasVideo({
                videoEmbed: r,
                videoType: n,
                mediaType: i,
                background: e
            }),
            h = () => {
                if (!l) return "No";
                if (s) return d[s] ? s : c;
                if (o) {
                    let e;
                    return e = (global._ || guac.lodash).findKey(d, e => e === o), e = e ? m ? d.Inset === o ? t.INSET : d.Blur === o ? t.BLUR : c : u && d.Fill === o ? t.FILL : u || d.Fit !== o ? c : t.FIT : c, d[e] ? e : c
                }
                return T ? m && (d.Inset || d.Blur) ? t.LEGACY_BLUR : t.FILL : c
            },
            L = h(),
            y = (() => {
                const e = h();
                return "No" === e ? "No" : [t.INSET, t.BLUR].includes(e) ? t.INSET : t.FILL
            })(),
            p = e => d[e] || o || d[L] || "none";
        return {
            isNotMigrated: T,
            headerTreatmentGroup: y,
            headerTreatmentName: L,
            getImageTreatmentName: p,
            getCategoryForTreatment: (e, t) => {
                const a = p(t);
                return a ? ["accent", "neutral", "primary"].reduce((e, t) => a.includes(t) ? t : e, e) : "accent"
            }
        }
    };

    function d({
        oWidth: e,
        oHeight: t,
        rotation: a = "0"
    }) {
        const n = "90" === a || "270" === a,
            r = (n ? t : e) / ((n ? e : t) || 1);
        return r >= 1.5 ? "landscape" : r <= .8 ? "portrait" : "square"
    }
    e.getHeaderTreatmentInfo = (e, {
        imageTreatments: a,
        defaultHeaderTreatment: n,
        hasLegacy: r
    }) => {
        const {
            backgroundImage: d,
            background: g = {},
            alignmentOption: u,
            mediaType: m,
            videoType: c,
            videoEmbed: s
        } = e, {
            oWidth: T,
            oHeight: l,
            rotation: h,
            useFixedHeight: L,
            treatmentLayout: y,
            shrinkFit: p
        } = g;
        return { ...o({
                backgroundImage: d,
                videoType: c,
                videoEmbed: s,
                mediaType: m,
                useFixedHeight: L,
                shrinkFit: p,
                imageTreatments: a,
                alignmentOption: u,
                defaultHeaderTreatment: n,
                hasLegacy: r,
                headerTreatmentName: y,
                ...(!!(global._ || guac.lodash).get(g, "video", "") || m === t.VIDEO) && {
                    headerTreatmentName: "Video"
                }
            }),
            ...i(T, l, h) || {}
        }
    }, e.getImageType = d, e.getScaleFactor = (e, t, a = "") => {
        const i = "undefined" != typeof window && !!document.querySelector("[data-scale]"),
            o = a.includes("MOBILE"),
            d = t === n;
        return t === r || !i || !d && !o && !e ? 100 : o ? e ? 18 : 25 : e ? d ? 70 : 75 : 80
    }, e.getTreatmentName = function(e, a) {
        const {
            defaultHeaderTreatment: n
        } = a, {
            treatmentLayout: r,
            shrinkFit: i,
            image: o,
            video: d
        } = e;
        return o || d ? !r && i ? t.LEGACY_BLUR : r || n : "No"
    }
})), "undefined" != typeof window && (window.global = window);