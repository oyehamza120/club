define("@widget/COOKIE_BANNER/bs-Component-d60509ab.js", ["exports"], (function(e) {
    "use strict";

    function t(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e
    }

    function o(e, t = 60) {
        const o = new Date;
        o.setTime(o.getTime() + 864e5 * t);
        const i = "expires=" + o.toUTCString();
        document.cookie = `${e}=true;${i};path=/`
    }

    function i(e) {
        return "undefined" != typeof document && document.cookie.indexOf(e) >= 0
    }
    var n = (global.keyMirror || guac.keymirror)({
        FOOTER_COOKIE_TITLE_RENDERED: null,
        FOOTER_COOKIE_MESSAGE_RENDERED: null,
        FOOTER_COOKIE_DECLINE_RENDERED: null,
        FOOTER_COOKIE_CLOSE_RENDERED: null,
        FOOTER_COOKIE_BANNER_RENDERED: null
    });
    const a = "cookie_warning_dismissed",
        r = (global.Core || guac["@wsb/guac-widget-core"]).constants.cookies.TERMS_ACCEPTED,
        {
            Z_INDEX_COOKIE_BANNER: s
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants.layers,
        {
            TABLET_RENDER_DEVICE: c
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderDevices,
        l = {
            bannerLayout: {
                padding: "medium",
                position: "fixed",
                bottom: "0",
                right: "0",
                zIndex: s,
                width: "100%",
                height: "auto",
                textAlign: "left",
                backgroundColor: "section",
                borderRadius: "0",
                margin: "0",
                overflowY: "auto",
                "@sm": {
                    margin: "medium",
                    width: "400px",
                    maxHeight: "500px",
                    borderRadius: "7px"
                },
                transition: "all 1s cubic-bezier(0.49, -0.29, 0.4, 1.26)",
                boxShadow: "0 2px 6px 0px rgba(0,0,0,0.3)"
            },
            cookieTitle: {
                marginBottom: "0",
                paddingBottom: "xsmall",
                fontSize: "large"
            },
            cookieButton: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
                marginTop: "medium",
                marginBottom: "xxsmall",
                wordBreak: "break-word",
                flexBasis: "50%",
                flexGrow: 1,
                ":nth-child(2)": {
                    marginLeft: "medium"
                }
            },
            cookieMessage: {
                a: {
                    textDecoration: "underline"
                },
                maxHeight: "300px",
                overflowY: "auto",
                "@sm": {
                    maxHeight: "140px"
                }
            },
            buttonWrapper: {
                display: "flex",
                justifyContent: "space-between"
            }
        };
    class d extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), t(this, "shouldShow", (() => {
                if (this.isEditMode()) {
                    const {
                        router: e,
                        widgetId: t
                    } = this.props;
                    return e.widget === t
                }
            })), this.state = {
                dismissed: !1,
                bottom: "-500px",
                mutatorOpened: !1
            }, this.handleAcceptClicked = this.handleAcceptClicked.bind(this), this.handleDeclineClicked = this.handleDeclineClicked.bind(this)
        }
        componentDidMount() {
            !this.isPublishMode() || !this.isAccepted() && this.isBannerEnabled() || this.grantTrackingConsent(), this.shouldShow() && this.setState({
                mutatorOpened: !0
            }), setTimeout((() => {
                this.setState({
                    bottom: "0"
                })
            }), 200)
        }
        grantTrackingConsent() {
            if ("undefined" != typeof window && (window._allowCT = !0, "function" == typeof window.fbq && window.fbq("consent", "grant"), void 0 !== window._gaID)) {
                const e = void 0 !== window.ga,
                    t = void 0 !== window.gtag;
                (t || e) && (window["ga-disable-" + window._gaID] = !1), e && (window.ga("create", window._gaID, "auto"), window.ga("send", "pageview")), t && window.gtag("config", window._gaID)
            }
        }
        isPublishMode() {
            return this.props.renderMode === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH
        }
        isEditMode() {
            return this.props.renderMode === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.EDIT
        }
        isAccepted() {
            return i(r)
        }
        isBannerEnabled() {
            return this.props.cookieBannerEnabled || this.props.enableCookieWarning
        }
        isBannerDismissed() {
            return this.state.dismissed || i(a)
        }
        componentDidUpdate(e) {
            const {
                router: t,
                widgetId: o,
                viewDevice: i
            } = this.props;
            if (t && e.router && t.widget !== e.router.widget) {
                const n = e.router && "" === e.router.widget && t.widget === o;
                this.isEditMode() && i === c && n ? this.setState({
                    mutatorOpened: !0
                }) : this.setState({
                    mutatorOpened: !1
                })
            }
        }
        showBanner() {
            return this.isPublishMode() ? this.isBannerEnabled() && !this.isBannerDismissed() : this.isBannerEnabled() && this.state.mutatorOpened
        }
        handleAcceptClicked(e) {
            e && e.preventDefault(), this.isPublishMode() && (this.grantTrackingConsent(), o(a), o(r), this.setState({
                dismissed: !0
            }))
        }
        handleDeclineClicked(e) {
            var t;
            (e && e.preventDefault(), this.isPublishMode()) && (o(a), i(r) && (t = r, document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"), this.setState({
                dismissed: !0
            }))
        }
        render() {
            if (!this.showBanner()) return null;
            const {
                bottom: e
            } = this.state, {
                cookieBannerTitle: t,
                cookieBannerMessage: o,
                cookieBannerButtonLabel: i,
                staticContent: a,
                cookieBannerDeclineLabel: r,
                cookieBannerDeclineEnabled: s
            } = this.props, c = t || a.cookieTitle, d = o || a.usingCookieMessage, g = i || a.acceptAndClose, u = r || a.decline, p = { ...l.bannerLayout,
                bottom: e
            }, {
                Text: E,
                Button: b,
                Heading: h
            } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group, {
                "data-aid": n.FOOTER_COOKIE_BANNER_RENDERED
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Background, {
                category: "primary",
                style: p
            }, (global.React || guac.react).createElement(h, {
                style: l.cookieTitle,
                children: c,
                "data-aid": n.FOOTER_COOKIE_TITLE_RENDERED
            }), (global.React || guac.react).createElement(E, {
                richtext: !0,
                "data-aid": n.FOOTER_COOKIE_MESSAGE_RENDERED,
                style: l.cookieMessage,
                children: d
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: l.buttonWrapper
            }, s && (global.React || guac.react).createElement(b.Primary, {
                tag: "a",
                href: "",
                children: u,
                style: l.cookieButton,
                onMouseUp: this.handleDeclineClicked,
                onTouchEnd: this.handleDeclineClicked,
                "data-aid": n.FOOTER_COOKIE_DECLINE_RENDERED,
                size: "small"
            }), (global.React || guac.react).createElement(b.Primary, {
                tag: "a",
                href: "",
                children: g,
                style: l.cookieButton,
                onMouseUp: this.handleAcceptClicked,
                onTouchEnd: this.handleAcceptClicked,
                "data-aid": n.FOOTER_COOKIE_CLOSE_RENDERED,
                size: "small"
            }))))
        }
    }
    t(d, "propTypes", {
        router: (global.PropTypes || guac["prop-types"]).object,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        viewDevice: (global.PropTypes || guac["prop-types"]).string.isRequired,
        cookieBannerTitle: (global.PropTypes || guac["prop-types"]).string,
        cookieBannerButtonLabel: (global.PropTypes || guac["prop-types"]).string,
        cookieBannerDeclineLabel: (global.PropTypes || guac["prop-types"]).string,
        cookieBannerMessage: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        cookieBannerEnabled: (global.PropTypes || guac["prop-types"]).bool,
        enableCookieWarning: (global.PropTypes || guac["prop-types"]).bool,
        cookieBannerDeclineEnabled: (global.PropTypes || guac["prop-types"]).bool
    }), e.default = d
})), "undefined" != typeof window && (window.global = window);