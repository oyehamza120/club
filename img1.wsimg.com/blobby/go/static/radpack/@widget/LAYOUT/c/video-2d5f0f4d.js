define("@widget/LAYOUT/c/video-2d5f0f4d.js", ["exports", "@widget/LAYOUT/c/Layout"], (function(e, t) {
    "use strict";

    function a(e) {
        const t = document.getElementById("i18n-bar"),
            a = document.getElementById("i18n-bar-close"),
            o = Array.from(document.getElementsByClassName("i18n-icon"));
        a.addEventListener("click", e => {
            e.preventDefault(), t.style.maxHeight = 0, a.style.zIndex = 0, o.forEach(e => {
                e.style.top = null
            })
        });
        const l = document.createElement("script");
        l.setAttribute("type", "text/javascript"), l.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"), window.googleTranslateElementInit = function() {
            e.layout = e.layout.split(".").reduce((e, t) => e[t], window), new google.translate.TranslateElement(e, "google_translate_element");
            const t = document.getElementById("google_translate_element"),
                a = document.getElementsByClassName("goog-te-menu-frame")[0];
            a && t.addEventListener("click", (function() {
                window._trfq.push(["cmdLogEvent", "click", "pnc.gocentral_published_website.i18n_language_select.click"]), setTimeout((function() {
                    a.style.width = "100%", a.style.overflow = "auto", a.contentDocument.body.style.overflow = "auto"
                }), 0)
            }), !0)
        }, document.body.appendChild(l)
    }
    const {
        Bootstrap: o
    } = (global.Core || guac["@wsb/guac-widget-core"]).components, l = {
        wrapper: {
            maxHeight: 0,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "section",
            transition: "max-height 550ms cubic-bezier(0.49, -0.29, 0.4, 1.26)"
        },
        contentWrapper: {
            position: "relative",
            paddingVertical: "xxsmall",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "left",
            "@sm": {
                paddingLeft: "xxsmall",
                justifyContent: "center"
            }
        },
        translateText: {
            "@xs": {
                display: "none"
            },
            "@md": {
                display: "flex"
            },
            paddingRight: "xsmall"
        },
        close: {
            fontFamily: "alternate"
        }
    };
    class n extends(global.React || guac.react).Component {
        render() {
            const {
                renderMode: e,
                googleTranslateOptions: n,
                navigation: r,
                staticContent: c = {}
            } = this.props;
            if (e !== (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH || (global._ || guac.lodash).isEmpty(n)) return null;
            let i = l.wrapper;
            return r || (i = { ...i,
                maxHeight: "300px",
                "@md": {
                    maxHeight: 0
                }
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                id: "i18n-bar",
                category: "neutral",
                section: "alt",
                style: i,
                "data-aid": t.dataAids.i18n_BAR_RENDERED
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: l.contentWrapper
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                style: l.translateText
            }, c.translateBarHelper || "Translate:"), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                id: "google_translate_element"
            }))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.CloseIcon, {
                style: l.close,
                id: "i18n-bar-close"
            }), (global.React || guac.react).createElement(o.JS, {
                id: "TranslateBar",
                script: a.toString(),
                props: n
            }))
        }
    }
    n.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        googleTranslateOptions: (global.PropTypes || guac["prop-types"]).object.isRequired,
        navigation: (global.PropTypes || guac["prop-types"]).oneOfType([(global.PropTypes || guac["prop-types"]).bool, (global.PropTypes || guac["prop-types"]).array]).isRequired,
        staticContent: (global.PropTypes || guac["prop-types"]).object
    }, e.TranslateBar = n, e.getVideoDimensions = function({
        videoType: e,
        videoEmbed: a = {},
        background: o = {},
        videoCover: l
    }) {
        const {
            video: n
        } = o, r = n || l || {}, c = e === t.EMBED ? a.width : r.width, i = e === t.EMBED ? a.height : r.height;
        return {
            videoWidth: c,
            videoHeight: i,
            isVerticalVideo: !!i && !!c && i > c
        }
    }, e.hasVideo = function({
        background: e,
        videoEmbed: a,
        videoType: o,
        mediaType: l
    }) {
        return l === t.VIDEO && (o === t.EMBED ? Boolean(a && a.vimeoId) : Boolean(e && e.video))
    }
})), "undefined" != typeof window && (window.global = window);