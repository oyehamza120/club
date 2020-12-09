define("@widget/GALLERY/c/bs-wrapWithLazyLoader-1afda0af.js", ["exports"], (function(e) {
    "use strict";

    function l() {
        return (l = Object.assign || function(e) {
            for (var l = 1; l < arguments.length; l++) {
                var a = arguments[l];
                for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
            }
            return e
        }).apply(this, arguments)
    }
    var a = (global.keyMirror || guac.keymirror)({
        CAROUSEL_BACKGROUND: null,
        CAROUSEL_BLUR_BACKGROUND: null,
        CAROUSEL_CONTENT: null,
        CAROUSEL_IMAGE_CAPTION: null,
        GALLERY_SECTION_TITLE_RENDERED: null,
        GALLERY_CAPTION_RENDERED: null,
        GALLERY_SLIDE_POSITION: null,
        GALLERY_MORE_BUTTON: null,
        LAYOUT_TWO_ZERO_STATE: null,
        LIGHTBOX_CLOSE: null,
        LIGHTBOX_MODAL: null,
        GALLERY_SCROLL_LEFT_ARROW: null,
        GALLERY_SCROLL_RIGHT_ARROW: null,
        THUMBNAIL_NAV_LIST: null,
        FAKE_THUMBNAIL_NAV_LIST: null,
        GALLERY_CAPTION_MORE_BUTTON: null
    });
    const {
        IntersectionObserver: t
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX;
    e._extends = l, e.dataAids = a, e.getGalleryCellDataAid = e => `GALLERY_IMAGE${e}_CELL_RENDERED`, e.getGalleryDataAid = e => `GALLERY_IMAGE${e}_RENDERED`, e.getGalleryDataRouteProps = (e, {
        isImage: l,
        useImageField: a = !0
    }) => ({
        "data-field-id": l ? a ? "galleryImages.image" : "galleryImages" : "galleryImages.caption",
        "data-field-route": "/galleryImages/" + e
    }), e.wrapWithLazyLoader = function(e) {
        return class extends(global.React || guac.react).Component {
            constructor() {
                var e, l, a;
                super(...arguments), a = () => {
                    this.setState({
                        visible: !0
                    })
                }, (l = "inView") in (e = this) ? Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[l] = a, this.state = {
                    visible: !1
                }
            }
            render() {
                const {
                    visible: l
                } = this.state;
                return l ? (global.React || guac.react).createElement(e, this.props) : (global.React || guac.react).createElement(t, {
                    callback: this.inView
                })
            }
        }
    }
})), "undefined" != typeof window && (window.global = window);