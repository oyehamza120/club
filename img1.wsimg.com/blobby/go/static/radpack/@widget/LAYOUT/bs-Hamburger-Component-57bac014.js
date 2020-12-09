define("@widget/LAYOUT/bs-Hamburger-Component-57bac014.js", ["exports", "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers", "@widget/LAYOUT/c/bs-dataAids", "@widget/LAYOUT/c/bs-index", "@widget/LAYOUT/c/bs-Toggle", "@widget/LAYOUT/c/bs-elements"], (function(e, t, o, n, s, a) {
    "use strict";
    class i extends(global.React || guac.react).Component {
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
                openWidth: o,
                isMobile: n,
                renderMode: s
            } = this.props;
            if (t !== this.state.open) {
                "undefined" != typeof window && window.dispatchEvent(new Event("NavigationDrawer" + (this.state.open ? "Opened" : "Closed")));
                const {
                    toggleId: e
                } = this.props, t = document.getElementById(e);
                t && (t.style.maxWidth = this.state.open ? o : 0, t.style.boxShadow = this.state.open ? "0 2px 6px 0px rgba(0,0,0,0.2)" : "", n && (t.style.height = a.getMobileViewportHeight(s) + "px", this.toggleScrolling(this.state.open)))
            }
        }
        toggleScrolling(e) {
            const {
                renderMode: t
            } = this.props, o = a.getMobileRenderContainer(t);
            if (t === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH) {
                const {
                    uniqueId: t
                } = this.props, o = document.getElementById(t + "-navId-mobile");
                e ? (o.addEventListener("touchstart", this.handleTouchStart), o.addEventListener("touchmove", this.handleTouchMove)) : (o.removeEventListener("touchstart", this.handleTouchStart), o.removeEventListener("touchmove", this.handleTouchMove))
            } else o.style.setProperty("overflow-y", e ? "hidden" : "auto", "important")
        }
        handleTouchStart(e) {
            const t = e.touches[0],
                {
                    clientY: o
                } = t;
            this.startY = o
        }
        handleTouchMove(e) {
            const {
                uniqueId: t
            } = this.props, o = document.getElementById(t + "-navContainerId-mobile"), n = document.getElementById(t + "-navLinksContentId-mobile"), s = o.getBoundingClientRect().bottom, {
                bottom: a
            } = n.getBoundingClientRect(), {
                scrollTop: i
            } = o, r = e.touches[0], {
                clientY: l
            } = r;
            l < this.startY && a <= s || l >= this.startY && i <= 0 ? e.preventDefault() : e.stopPropagation()
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
                open: o
            } = this.state;
            return o && "close" === t ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.CloseIcon, {
                size: n.ICON_SIZE
            }) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon.Hamburger, {
                icon: o ? t : e,
                size: n.ICON_SIZE,
                minTarget: !0
            })
        }
        render() {
            const e = (global._ || guac.lodash).omit(this.props, ["Component", "renderMode"]),
                {
                    style: n,
                    staticContent: a = {}
                } = e;
            return (global.React || guac.react).createElement(s.Toggle, t._extends({}, e, {
                onChange: this.handleChange,
                closeAttr: "data-close",
                "data-edit-interactive": !0,
                closeOnOutsideClick: !0,
                style: {
                    border: 0,
                    justifyContent: "flex-start",
                    ...n
                },
                "data-aid": o.DataAid.HAMBURGER_MENU_LINK,
                "aria-label": a.hamburgerIcon || "Hamburger Site Navigation Icon"
            }), this.renderIcon())
        }
    }
    i.propTypes = {
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
    }, i.defaultProps = {
        icon: "hamburger",
        openIcon: "hamburger",
        openWidth: "100%",
        style: {},
        staticContent: {},
        isMobile: !0
    }, e.default = i
})), "undefined" != typeof window && (window.global = window);