define("@widget/GALLERY/c/bs-renderLightbox-85f49ea0.js", ["exports", "@widget/GALLERY/c/bs-wrapWithLazyLoader", "@widget/GALLERY/c/bs-CustomArrows"], (function(e, t, a) {
    "use strict";
    class o extends(global.React || guac.react).Component {
        static get propTypes() {
            return {
                prevSlide: (global.PropTypes || guac["prop-types"]).func.isRequired,
                nextSlide: (global.PropTypes || guac["prop-types"]).func.isRequired
            }
        }
        constructor() {
            super(...arguments), this.handleKey = this.handleKey.bind(this)
        }
        handleKey({
            keyCode: e
        }) {
            const {
                prevSlide: t,
                nextSlide: a
            } = this.props;
            37 === e ? t() : 39 === e && a()
        }
        componentDidMount() {
            document.addEventListener("keydown", this.handleKey, !1)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKey, !1)
        }
        render() {
            return null
        }
    }
    const {
        Carousel: r,
        Modal: i
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX, {
        Z_INDEX_FULL_SCREEN_OVERLAY: n
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.layers, l = "undefined" != typeof navigator && 11 === parseInt((/trident\/.*; rv:(\d+)/i.exec(navigator.userAgent) || [])[1], 10);
    class c extends(global.React || guac.react).Component {
        static get propTypes() {
            return {
                images: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).shape({
                    image: (global.PropTypes || guac["prop-types"]).string.isRequired,
                    caption: (global.PropTypes || guac["prop-types"]).string
                })).isRequired,
                selectedIndex: (global.PropTypes || guac["prop-types"]).number.isRequired,
                visible: (global.PropTypes || guac["prop-types"]).bool.isRequired,
                onRequestClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
                size: (global.PropTypes || guac["prop-types"]).string
            }
        }
        constructor(e) {
            super(...arguments), this.afterChange = this.afterChange.bind(this), this.beforeChange = this.beforeChange.bind(this), this.state = {
                currentIndex: e.selectedIndex
            }
        }
        componentDidMount() {
            "undefined" != typeof document && i.setAppElement("body")
        }
        beforeChange(e) {
            this.setState({
                currentIndex: e
            })
        }
        afterChange(e) {
            this.setState({
                currentIndex: e
            })
        }
        render() {
            const {
                images: e,
                visible: c,
                onRequestClose: s,
                size: g
            } = this.props, {
                currentIndex: d
            } = this.state, u = "xs" === g || "sm" === g, p = "md" === g, b = {
                maxWidth: u ? "90vw" : "70vw",
                maxHeight: u ? "60vh" : "70vh",
                objectFit: "contain"
            }, h = {
                maxWidth: u ? "90%" : "750px",
                padding: 0,
                textAlign: "center",
                marginVertical: "medium",
                marginHorizontal: "auto",
                color: "white",
                height: "auto",
                maxHeight: u ? "30vh" : "20vh",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch"
            }, m = {
                width: u ? "90%" : "76%",
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                top: u ? "medium" : "xlarger",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                position: "absolute",
                zIndex: 2
            }, y = {
                content: {
                    background: "rgba(0, 0, 0, 0.7)",
                    padding: "0",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    border: "0",
                    overflow: "hidden",
                    borderRadius: "0"
                },
                overlay: {
                    zIndex: n,
                    background: "rgba(0, 0, 0, 0.7)"
                }
            }, w = {
                container: {
                    zIndex: 1
                }
            }, C = u ? [] : [{
                component: a.CustomArrows,
                props: {
                    visible: e.length > 1,
                    overrideArrowStyle: {
                        borderRadius: "50%",
                        marginHorizontal: p ? "5%" : "10%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                position: "bottom"
            }, {
                component: o
            }], x = c ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Carousel, {
                onTouchMove: e => {
                    e.preventDefault()
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                category: "accent",
                section: "overlay",
                style: m
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text.Major, {
                children: `${d+1} / ${e.length}`,
                featured: !0
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                icon: "close",
                "data-aid": t.dataAids.LIGHTBOX_CLOSE,
                style: {
                    cursor: "pointer",
                    color: "section",
                    marginRight: "-10px"
                },
                onClick: s
            })), (global.React || guac.react).createElement(r, {
                initialSlide: d,
                dots: !1,
                arrows: !1,
                cellPadding: 0,
                infinite: !0,
                draggable: u,
                autoplay: !1,
                clickToNavigate: !1,
                afterChange: this.afterChange,
                beforeChange: this.beforeChange,
                slideHeight: "100vh",
                slideWidth: "100vw",
                controls: C,
                transition: u ? "slide" : "fade",
                transitionDuration: u ? 500 : 250,
                style: w
            }, e.map(({
                image: e,
                caption: a
            }, o) => {
                const r = {
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        right: "-50px",
                        bottom: "-50px",
                        backgroundImage: `url(${e.image})`,
                        backgroundSize: "cover",
                        filter: "blur(40px) brightness(50%)"
                    },
                    i = l || u ? null : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                        "data-aid": t.dataAids.CAROUSEL_BLUR_BACKGROUND,
                        onClick: s,
                        style: r
                    });
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    category: "accent",
                    section: "overlay",
                    "data-aid": t.dataAids.CAROUSEL_BACKGROUND,
                    onClick: s,
                    key: o,
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    }
                }, i, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    "data-aid": t.dataAids.CAROUSEL_CONTENT,
                    onClick: e => {
                        e.stopPropagation()
                    },
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center"
                    }
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image, {
                    tag: "img",
                    style: b,
                    imageData: (global._ || guac.lodash).omit(e, ["top", "left", "width", "height", "rotation"])
                }), a && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                    "data-aid": t.dataAids.CAROUSEL_IMAGE_CAPTION,
                    style: h,
                    children: a,
                    richtext: !0,
                    featured: !0
                })))
            }))) : null;
            return (global.React || guac.react).createElement(i, {
                isOpen: c,
                className: "x",
                contentLabel: "Lightbox",
                style: y,
                onRequestClose: s,
                children: x
            })
        }
    }
    e.renderLightbox = function() {
        const {
            galleryImages: e,
            size: a
        } = this.props, {
            showLightbox: o,
            selectedIndex: r
        } = this.state, i = [].concat(...e);
        return i.length && o ? (global.React || guac.react).createElement(c, {
            images: i.map(e => ({
                image: e.image,
                caption: e.caption
            })),
            visible: !0,
            selectedIndex: r,
            onRequestClose: this.hideLightbox,
            size: a,
            "data-aid": t.dataAids.LIGHTBOX_MODAL
        }) : null
    }
})), "undefined" != typeof window && (window.global = window);