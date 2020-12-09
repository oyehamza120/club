define("@widget/SUBSCRIBE/bs-subscribe2-subscribe-form-c4b7fe03.js", ["exports", "@widget/SUBSCRIBE/c/bs-subscribe-form"], (function(e, t) {
    "use strict";
    class o extends t.SubscribeForm {
        render() {
            const {
                confirmationMessage: e,
                isInternalPage: o,
                order: a,
                section: c,
                sectionTitle: i,
                staticContent: s,
                category: r,
                couponConfirmationMessage: n
            } = this.props, {
                verificationText: l
            } = s, {
                Block: g
            } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
            if (this.state.formSubmitted) return (global.React || guac.react).createElement(g, {
                category: r,
                section: c
            }, (global.React || guac.react).createElement(t.FormSuccessMessage, {
                formSuccessMessage: this.shouldShowCoupon() ? n : e,
                verificationText: l,
                olsConfigHost: this.getOlsConfigHost(),
                showCoupon: this.shouldShowCoupon()
            }));
            const u = {
                container: {
                    display: "block",
                    "@md": {
                        display: "flex",
                        alignItems: "center"
                    }
                },
                title: {
                    marginBottom: "small",
                    "@md": {
                        marginRight: "medium",
                        marginBottom: "0"
                    }
                }
            };
            return (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(g, {
                category: r,
                section: c,
                style: u.container
            }, (global.React || guac.react).createElement(g, {
                style: u.title
            }, this.renderSectionTitle(i, o, a)), (global.React || guac.react).createElement(g, {
                style: {
                    flexGrow: "1"
                },
                "data-aid": t.DataAid.SUBSCRIBE_INNER_FORM_REND
            }, (global.React || guac.react).createElement(t.InnerForm, t._extends({
                formSubmitHost: this.getFormSubmitHost(),
                onSubmit: this.onSubmit
            }, this.props)))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, {
                inset: !0,
                style: {
                    paddingTop: "large"
                }
            }, this.shouldShowCoupon() && this.renderDescriptionSection({
                forceCouponDescription: !0
            })))
        }
    }
    e.default = o
})), "undefined" != typeof window && (window.global = window);