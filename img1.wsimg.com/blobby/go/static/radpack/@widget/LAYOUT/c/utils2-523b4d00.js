define("@widget/LAYOUT/c/utils2-523b4d00.js", ["exports", "@widget/LAYOUT/c/Layout", "@widget/LAYOUT/c/utils3"], (function(e, i, d) {
    "use strict";
    e.getMediaData = (e, d) => {
        const {
            slideshowOptions: o = {},
            slideshowType: a = i.IMAGES_ONLY,
            background: t = {},
            video: n = {},
            slides: s = [],
            alignmentOption: l,
            slideshowEnabled: p,
            renderMode: m,
            mediaType: v = i.IMAGE,
            videoEmbed: y,
            videoType: r = i.UPLOAD
        } = e, {
            transition: g = "fade",
            autoplay: u = !0,
            autoplayDelay: w = 7,
            dots: E = !0,
            arrows: I = !1
        } = o, T = {
            slides: s,
            type: a,
            transition: g,
            autoplay: u,
            autoplayDelay: w,
            dots: E,
            arrows: I,
            alignmentOption: l,
            themeConfig: d || {},
            heroIdPrefix: (global._ || guac.lodash).uniqueId("slide-hero-")
        }, O = !(n && n.video) && t && t.video;
        return v !== i.SLIDESHOW || "DISPLAY" !== m && p ? v === i.IMAGE && O ? {
            mediaType: i.VIDEO,
            image: t,
            video: t,
            videoEmbed: y,
            videoType: r
        } : {
            mediaType: v,
            image: t,
            video: O ? t : n,
            slideshow: T,
            videoEmbed: y,
            videoType: r
        } : O ? {
            mediaType: i.VIDEO,
            video: t,
            videoEmbed: y,
            videoType: r
        } : {
            mediaType: i.IMAGE,
            image: t
        }
    }, e.hasMediaContent = e => {
        const {
            mediaType: o,
            image: a,
            video: t,
            slideshow: n,
            videoEmbed: s
        } = e;
        return o === i.IMAGE ? Boolean(a.image || a.video) : o === i.VIDEO ? Boolean(t.video || s && s.vimeoId) : o === i.SLIDESHOW && d.slidesHaveMediaContent(n)
    }
})), "undefined" != typeof window && (window.global = window);