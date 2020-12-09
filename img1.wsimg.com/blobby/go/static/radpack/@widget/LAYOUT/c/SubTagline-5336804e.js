define("@widget/LAYOUT/c/SubTagline-5336804e.js", ["exports", "@widget/LAYOUT/c/Layout"], (function(e, t) {
    "use strict";

    function a({
        style: e = {},
        slideIndex: a,
        ...d
    }) {
        const i = "number" == typeof a,
            o = {
                "> p": {
                    margin: "0"
                },
                ...e
            },
            l = i ? {
                "data-field-id": "slides.tagline2",
                "data-field-route": "/mediaData/slides/" + a
            } : {
                "data-route": t.dataRoutes.SUB_TAG_LINE
            };
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, t._extends({
            "data-aid": i ? `HEADER_TAGLINE2_${a}_RENDERED` : t.dataAids.HEADER_TAGLINE2_RENDERED,
            richtext: !0,
            style: o,
            tag: "p"
        }, l, d))
    }
    a.propTypes = {
        slideIndex: (global.PropTypes || guac["prop-types"]).number,
        style: (global.PropTypes || guac["prop-types"]).object
    }, e.SubTagline = a
})), "undefined" != typeof window && (window.global = window);