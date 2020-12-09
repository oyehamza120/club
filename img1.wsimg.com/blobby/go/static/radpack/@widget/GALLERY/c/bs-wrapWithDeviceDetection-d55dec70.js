define("@widget/GALLERY/c/bs-wrapWithDeviceDetection-d55dec70.js", ["exports", "@widget/GALLERY/c/bs-wrapWithLazyLoader"], (function(e, t) {
    "use strict";
    const i = /mobile/i;

    function a(e) {
        return i.test(e) ? "mobile" : "tablet"
    }
    const {
        MatchMedia: c
    } = (global.Core || guac["@wsb/guac-widget-core"]).UX;
    e.MOBILE = "mobile", e.TABLET = "tablet", e.wrapWithDeviceDetection = function(e) {
        return class extends(global.React || guac.react).Component {
            static get propTypes() {
                return {
                    renderMode: (global.PropTypes || guac["prop-types"]).string,
                    viewDevice: (global.PropTypes || guac["prop-types"]).string
                }
            }
            constructor(e) {
                super(...arguments), this.handleMatchMedia = this.handleMatchMedia.bind(this);
                const t = {};
                "PUBLISH" !== e.renderMode && (t.device = a(e.viewDevice)), this.state = t
            }
            componentWillReceiveProps(e) {
                "PUBLISH" !== e.renderMode && this.setState({
                    device: a(e.viewDevice)
                })
            }
            handleMatchMedia(e) {
                this.state.size !== e.size && this.setState({
                    size: e.size
                })
            }
            render() {
                const {
                    size: i
                } = this.state;
                let {
                    device: a
                } = this.state;
                return a || (a = "xs" === i ? "mobile" : "tablet"), (global.React || guac.react).createElement("div", null, (global.React || guac.react).createElement(e, t._extends({}, this.props, {
                    device: a,
                    size: i
                })), (global.React || guac.react).createElement(c, {
                    onChange: this.handleMatchMedia
                }))
            }
        }
    }
})), "undefined" != typeof window && (window.global = window);