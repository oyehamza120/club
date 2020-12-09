define("@widget/LAYOUT/c/utils3-f3f78e42.js", ["exports"], (function(e) {
    "use strict";
    e.populateHeroContent = e => {
        const {
            slides: t,
            heroIdPrefix: n
        } = e;
        t.map((e, t) => document.querySelectorAll(`[data-slide-hero="${n}-${t}"]`)).forEach((e, t) => {
            if (e && e.length) {
                const i = document.getElementById(`${n}-content-${t}`);
                if (i)
                    for (var o = 0; o < e.length; o++) {
                        const t = 0 === o ? i : i.cloneNode(!0);
                        e[o].appendChild(t)
                    }
            }
        })
    }, e.slidesHaveHeroContent = e => {
        const {
            slides: t = []
        } = e;
        for (var n = 0; n < t.length; n++) {
            const e = t[n] || {},
                {
                    tagline: o,
                    tagline2: i,
                    cta: r
                } = e;
            if (o || i || r && r.enabled) return !0
        }
        return !1
    }, e.slidesHaveMediaContent = e => {
        const {
            slides: t = []
        } = e;
        for (var n = 0; n < t.length; n++) {
            const e = t[n];
            if (e && e.image && e.image.image) return !0
        }
        return !1
    }
})), "undefined" != typeof window && (window.global = window);