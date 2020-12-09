define("@widget/GALLERY/bs-gallery2-Gallery-85e76137.js", ["exports", "@widget/GALLERY/c/bs-wrapWithLazyLoader", "@widget/GALLERY/c/bs-wrapWithDeviceDetection", "@widget/GALLERY/c/bs-CustomArrows", "@widget/GALLERY/c/bs-util", "@widget/GALLERY/c/bs-renderLightbox"], (function(e, t, a, r, o, i) {
    "use strict";
    var l = t.wrapWithLazyLoader(a.wrapWithDeviceDetection(class extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), this.state = {
                showLightbox: !1,
                selectedIndex: 0,
                page: 1
            }, this.hideLightbox = this.hideLightbox.bind(this), this.handleClick = this.handleClick.bind(this), this.loadMore = this.loadMore.bind(this)
        }
        static get propTypes() {
            return {
                category: (global.PropTypes || guac["prop-types"]).string,
                galleryImages: (global.PropTypes || guac["prop-types"]).array.isRequired,
                section: (global.PropTypes || guac["prop-types"]).string,
                size: (global.PropTypes || guac["prop-types"]).string,
                staticContent: (global.PropTypes || guac["prop-types"]).object
            }
        }
        static get defaultProps() {
            return {
                category: "neutral",
                section: "default"
            }
        }
        hideLightbox() {
            this.setState({
                showLightbox: !1
            })
        }
        handleClick(e) {
            this.setState({
                showLightbox: !0,
                selectedIndex: e
            })
        }
        loadMore(e) {
            e.stopPropagation(), this.setState({
                page: this.state.page + 1
            })
        }
        renderSeeMoreText() {
            const {
                staticContent: e
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    paddingVertical: "xlarge",
                    textAlign: "center"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.MoreLink.Expand, {
                role: "button",
                tabIndex: "0",
                onClick: this.loadMore,
                "data-aid": t.dataAids.GALLERY_MORE_BUTTON,
                children: e.showMore,
                "data-edit-interactive": !0
            }))
        }
        renderRows(e) {
            const {
                galleryImages: a
            } = this.props, {
                page: r
            } = this.state, o = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, i = o.Cell, l = {
                container: {
                    width: "100%",
                    height: "130px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    "@sm": {
                        height: "200px"
                    },
                    "@md": {
                        height: "300px",
                        ":hover": {
                            ".dim": {
                                backgroundColor: "rgba(255, 255, 255, .1)"
                            },
                            ".image": {
                                transform: "scale(1.05)"
                            }
                        }
                    }
                },
                img: {
                    height: "100%",
                    width: "100%",
                    transition: "transform .5s ease"
                },
                overlay: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    "@md": {
                        backgroundColor: "rgba(0, 0, 0, .1)",
                        transition: "background-color .5s ease",
                        zIndex: "1"
                    }
                }
            };
            let s = 0;
            return e.slice(0, 2 * r).map((e, r) => {
                const c = 1 === e ? 1 : e % 2 ? 3 : 2,
                    g = (global.React || guac.react).createElement(o, {
                        key: r,
                        xs: c,
                        sm: e,
                        gutter: !1,
                        "data-route": ""
                    }, a.map((e, t) => ({ ...e,
                        index: t
                    })).slice(s, s + e).map(({
                        image: e,
                        index: a
                    }) => (global.React || guac.react).createElement(i, t._extends({
                        key: a,
                        style: l.container,
                        onClick: () => {
                            this.handleClick(a)
                        }
                    }, t.getGalleryDataRouteProps(a, {
                        isImage: !0,
                        useImageField: !1
                    })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                        style: l.overlay,
                        className: "dim"
                    }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                        "data-aid": t.getGalleryDataAid(a),
                        style: l.img,
                        className: "image",
                        imageData: e
                    }))));
                return s += e, g
            })
        }
        renderZeroState() {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-aid": t.dataAids.LAYOUT_TWO_ZERO_STATE,
                style: {
                    minHeight: "200px"
                }
            })
        }
        render() {
            const {
                category: e,
                section: t,
                galleryImages: a
            } = this.props, {
                page: r
            } = this.state, l = o.getGridRowSizes(a.length, 2, 4), s = Math.ceil(l.length / 2), c = {
                section: {
                    paddingVertical: 0,
                    "@xs-only": {
                        paddingVertical: 0
                    }
                },
                container: {
                    padding: "0px !important"
                },
                link: {
                    paddingVertical: "large",
                    textAlign: "center",
                    width: "100%",
                    display: "block"
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Section.Banner, {
                category: e,
                section: t,
                style: c.section
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, {
                fluid: !0,
                style: c.container
            }, a.length > 0 ? this.renderRows(l) : this.renderZeroState(), s > r && this.renderSeeMoreText()), i.renderLightbox.call(this))
        }
    }));
    e.default = l
})), "undefined" != typeof window && (window.global = window);