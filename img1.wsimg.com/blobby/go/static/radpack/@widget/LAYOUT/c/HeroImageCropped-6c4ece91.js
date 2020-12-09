define("@widget/LAYOUT/c/HeroImageCropped-6c4ece91.js", ["exports", "@widget/LAYOUT/c/Layout", "@widget/LAYOUT/c/video"], (function(e, o, a) {
    "use strict";
    class p extends(global.React || guac.react).Component {
        render() {
            const {
                background: e = {},
                backgroundImage: p,
                forceWidth: t,
                forceHeight: r,
                containerStyle: g,
                imageStyle: l,
                videoStyle: c,
                mediaDataRoute: i,
                renderMode: s,
                viewDevice: d,
                videoBgStyle: y,
                videoType: u,
                videoEmbed: b,
                mediaType: n,
                showMobileVideo: m,
                ...T
            } = this.props, v = (global._ || guac.lodash).omit(T, ["id", "category", "section"]), w = a.hasVideo(this.props), P = w && e.video, E = w && e.image, h = !!e.image, S = !(!p || !p.backgroundImage), f = ([o.IMAGE, o.SLIDESHOW].includes(n) || !n) && (h || S), I = { ...e,
                outputWidth: t,
                outputHeight: r
            };
            return f || w ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: g
            }, w ? (global.React || guac.react).createElement(o.HeaderVideoBackgroundWrapper, {
                videoStyle: c,
                videoBgStyle: y,
                videoBackground: P,
                videoPoster: E,
                renderMode: s,
                viewDevice: d,
                dataRoute: i,
                videoType: u,
                videoEmbed: b,
                isVideoInset: !0,
                showMobileVideo: m
            }) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper.Image, {
                "data-field-id": i || "background",
                style: l
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image, o._extends({}, v, {
                style: l,
                "data-aid": o.dataAids.BACKGROUND_IMAGE_RENDERED,
                alt: e.alt,
                imageData: I
            })))) : null
        }
    }
    p.propTypes = {
        background: (global.PropTypes || guac["prop-types"]).object,
        backgroundImage: (global.PropTypes || guac["prop-types"]).object,
        forceWidth: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).number]),
        forceHeight: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).string, (global.PropTypes || guac["prop-types"]).number]),
        containerStyle: (global.PropTypes || guac["prop-types"]).object,
        imageStyle: (global.PropTypes || guac["prop-types"]).object,
        videoStyle: (global.PropTypes || guac["prop-types"]).object,
        mediaDataRoute: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        viewDevice: (global.PropTypes || guac["prop-types"]).string,
        videoBgStyle: (global.PropTypes || guac["prop-types"]).object,
        videoType: (global.PropTypes || guac["prop-types"]).string,
        videoEmbed: (global.PropTypes || guac["prop-types"]).object,
        mediaType: (global.PropTypes || guac["prop-types"]).string,
        showMobileVideo: (global.PropTypes || guac["prop-types"]).bool
    }, e.HeroImageCropped = p
})), "undefined" != typeof window && (window.global = window);