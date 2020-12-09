define("@widget/LAYOUT/c/index9-a4c127c9.js", ["exports", "@widget/LAYOUT/c/Layout"], (function(e, o) {
    "use strict";
    class a extends(global.React || guac.react).Component {
        generateStyles() {
            const {
                hasRenderedLogo: e
            } = this.props;
            return {
                outerContainer: {
                    paddingVertical: "small",
                    "@md": {
                        display: "none"
                    }
                },
                grid: {
                    alignItems: "center",
                    flexWrap: "nowrap"
                },
                centerContent: {
                    display: "flex",
                    justifyContent: "center"
                },
                noPadding: {
                    padding: 0
                },
                utilities: {
                    justifyContent: "flex-end"
                },
                phoneCell: {
                    textAlign: "center",
                    paddingBottom: e ? "small" : 0
                },
                logoCell: {
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center"
                },
                logoBlock: {
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center"
                },
                cell: {
                    alignItems: "center",
                    justifyContent: "center"
                },
                phoneGrid: {
                    marginBottom: 0
                },
                phone: {
                    borderWidth: "0 !important"
                },
                hamburgerCell: {
                    paddingBottom: 3
                }
            }
        }
        render() {
            const {
                hasLogoOverhang: e,
                hasRenderedLogo: a,
                hasSocialIcons: t,
                id: l,
                phone: r,
                renderMode: s,
                searchWidthId: c,
                showNav: g,
                showUtilitiesMenu: n
            } = this.props, p = this.generateStyles(), i = g || t || n, d = a && (global.React || guac.react).createElement(o.Logo, o._extends({}, this.props, {
                hasOverhang: e,
                applyBackgroundToOverhang: !1,
                useLogoBackground: !0
            })), u = !!r && (global.React || guac.react).createElement(o.Phone, {
                children: r,
                linkStyle: p.phone
            }), b = n && (global.React || guac.react).createElement(o.UtilitiesMenu, o._extends({}, this.props, {
                widthId: c,
                hasNav: !1,
                style: p.utilities
            })), y = i && (global.React || guac.react).createElement(o.MobileNavIcon, {
                left: !0,
                id: l,
                renderMode: s
            });
            return u ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: p.outerContainer
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, {
                spacingXs: "xxsmall",
                bottom: !1,
                style: { ...p.grid,
                    ...p.phoneGrid
                }
            }, i && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                xs: 2,
                style: { ...p.cell,
                    ...p.hamburgerCell
                }
            }, y), u && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                xs: i ? 8 : 12,
                style: p.phoneCell
            }, u), i && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                pushXs: u ? 0 : 8,
                xs: 2,
                style: p.cell
            }, b)), d && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: p.logoBlock
            }, d)) : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: p.outerContainer
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, {
                spacingXs: "xxsmall",
                bottom: !1,
                style: p.grid
            }, y && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                xs: 2,
                style: { ...p.cell,
                    ...p.hamburgerCell
                }
            }, y), a && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                xs: y ? 8 : 12,
                style: p.logoCell
            }, d), i && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                xs: 2,
                style: p.cell
            }, b)))
        }
    }
    a.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string.isRequired,
        logo: (global.PropTypes || guac["prop-types"]).object,
        hasLogoOverhang: (global.PropTypes || guac["prop-types"]).bool,
        hasRenderedLogo: (global.PropTypes || guac["prop-types"]).bool,
        logoData: (global.PropTypes || guac["prop-types"]).object,
        showUtilitiesMenu: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        searchWidthId: (global.PropTypes || guac["prop-types"]).string,
        showNav: (global.PropTypes || guac["prop-types"]).bool,
        commerce: (global.PropTypes || guac["prop-types"]).string,
        phone: (global.PropTypes || guac["prop-types"]).string,
        hasSocialIcons: (global.PropTypes || guac["prop-types"]).bool
    };
    class t extends(global.React || guac.react).Component {
        generateStyles(e) {
            const {
                hasLogoOverhang: a,
                hasSocialIcons: t,
                hasRenderedLogo: l,
                phone: r,
                showUtilitiesMenu: s
            } = this.props, c = t || r, g = e ? c ? 35 : 10 : c ? 35 : 75, n = e ? g : 100 - g - 5, p = t && s && e;
            return {
                outerContainer: {
                    display: "none",
                    "@md": {
                        display: "block"
                    }
                },
                grid: {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    height: a ? "50px" : "100%",
                    position: "relative",
                    zIndex: 10
                },
                utilitiesMenu: {
                    flexGrow: "0",
                    display: "flex"
                },
                centerCell: {
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    width: 100 - g - n + "%"
                },
                logo: {
                    display: "inline-block",
                    width: "100%"
                },
                leftCell: {
                    display: "flex",
                    flexShrink: 0,
                    flexGrow: 0,
                    alignItems: "center",
                    width: g + "%",
                    "> :not(:first-child)": {
                        marginLeft: "large"
                    }
                },
                rightCell: {
                    flexShrink: 0,
                    flexGrow: 0,
                    width: n + "%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    ...e ? o.spacingHorizontal("large") : o.spacingHorizontal("xlarge")
                },
                phone: {
                    width: p ? "100%" : "initial",
                    overflowWrap: "break-word",
                    textAlign: p ? "left" : "right"
                },
                phoneLink: {
                    borderWidth: "0 !important"
                },
                socialLinks: {
                    maxWidth: l ? "200px" : "none"
                },
                iconWrapper: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }
            }
        }
        render() {
            const {
                id: e,
                hasLogoOverhang: a,
                hasRenderedLogo: t,
                hasSocialIcons: l,
                logoAlign: r,
                phone: s,
                searchWidthId: c,
                showNav: g,
                showUtilitiesMenu: n,
                socialProfiles: p,
                staticContent: i,
                renderMode: d
            } = this.props, u = t && "center" === r || !t, b = this.generateStyles(u), y = l && n && u, h = l || s, m = s && (global.React || guac.react).createElement(o.Phone, {
                children: s,
                linkStyle: b.phoneLink,
                style: b.phone
            }), w = g && (global.React || guac.react).createElement(o.MobileNavIcon, {
                left: !0,
                id: e,
                renderMode: d,
                isMobile: !1,
                overrideStyles: {
                    "@md": {
                        display: "flex"
                    }
                },
                openWidth: "400px"
            }), C = t && (global.React || guac.react).createElement(o.Logo, o._extends({}, this.props, {
                hasOverhang: a,
                applyBackgroundToOverhang: !1,
                style: {
                    display: "flex",
                    justifyContent: u ? "center" : "flex-start"
                },
                useLogoBackground: !0,
                fullSizeSecondary: !0,
                maxLines: 1
            })), P = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.leftCell
            }, u ? w : C, y && m), T = u && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.centerCell
            }, C), x = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.rightCell
            }, !y && l && m, (l || n || m) && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.iconWrapper
            }, !y && !l && m, l && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.socialLinks
            }, o.renderSocialLinks({
                socialProfiles: p,
                staticContent: i,
                singleLine: !0
            })), n && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.utilitiesMenu
            }, (global.React || guac.react).createElement(o.UtilitiesMenu, o._extends({}, this.props, {
                widthId: c,
                hasNav: h,
                pipe: h,
                adjustMembershipDropdown: !0
            })))), !u && w);
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.outerContainer
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: b.grid
            }, P, T, x))
        }
    }
    t.propTypes = {
        id: (global.PropTypes || guac["prop-types"]).string,
        hasLogoOverhang: (global.PropTypes || guac["prop-types"]).bool,
        hasRenderedLogo: (global.PropTypes || guac["prop-types"]).bool,
        hasSocialIcons: (global.PropTypes || guac["prop-types"]).bool,
        logoAlign: (global.PropTypes || guac["prop-types"]).string,
        phone: (global.PropTypes || guac["prop-types"]).string,
        searchWidthId: (global.PropTypes || guac["prop-types"]).string,
        showNav: (global.PropTypes || guac["prop-types"]).bool,
        showUtilitiesMenu: (global.PropTypes || guac["prop-types"]).bool,
        socialProfiles: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        renderMode: (global.PropTypes || guac["prop-types"]).string
    };
    class l extends(global.React || guac.react).Component {
        render() {
            const {
                category: e,
                commerce: l,
                domainName: r,
                googleTranslateOptions: s,
                hasLogoImage: c,
                hasSocialIcons: g,
                hasRenderedLogo: n,
                hidePhoneDesktop: p,
                hideSocialDesktop: i,
                id: d,
                isHomepage: u,
                logo: b,
                navigation: y,
                navWrapperStyle: h = {},
                pageRoute: m,
                phone: w,
                renderMode: C,
                renderNavDrawer: P = !0,
                section: T,
                showNav: x,
                showUtilitiesMenu: R,
                socialProfiles: f,
                staticContent: E
            } = this.props;
            if (!(x || n || R || g || w)) return null;
            const {
                logoAlign: v = "center"
            } = b, L = u && c && b.logoHeight > o.LOGO_OVERHANG_THRESHOLD, k = { ...this.props,
                searchWidthId: d + "-search-width",
                hasLogoOverhang: L,
                logoAlign: v
            }, U = { ...k,
                hasLogoOverhang: "center" !== v && L,
                phone: !p && w,
                hasSocialIcons: !i && g
            }, I = {
                nav: {
                    paddingVertical: 0,
                    "@md": {
                        paddingVertical: "medium"
                    },
                    ...h
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, {
                tag: "nav",
                style: I.nav,
                category: e,
                section: T
            }, (global.React || guac.react).createElement(a, k), (global.React || guac.react).createElement(t, U), P && (x || l || g) && (global.React || guac.react).createElement(o.NavigationDrawer, {
                id: d,
                navigation: y,
                renderMode: C,
                googleTranslateOptions: s,
                domainName: r,
                pageRoute: m,
                staticContent: E,
                socialProfiles: g && f,
                category: "neutral",
                navProps: (global._ || guac.lodash).pick(this.props, ["shopRoute", "staticContent", "canLogin", "canCreateAccount", "membershipAdminPages", "membershipAccountsOn", "hasActiveOLA", "hasActiveOLS"]),
                searchFormProps: {
                    commerce: l,
                    keepOpen: !0
                },
                left: "left" !== v,
                socialContainerStyle: {
                    "@sm": {
                        display: i ? "none" : "block"
                    }
                },
                nestedAlwaysOpen: !0
            }))
        }
    }
    l.propTypes = {
        category: (global.PropTypes || guac["prop-types"]).string,
        commerce: (global.PropTypes || guac["prop-types"]).bool,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        googleTranslateOptions: (global.PropTypes || guac["prop-types"]).object,
        hasLogoImage: (global.PropTypes || guac["prop-types"]).bool,
        hasSocialIcons: (global.PropTypes || guac["prop-types"]).bool,
        hasRenderedLogo: (global.PropTypes || guac["prop-types"]).bool,
        hidePhoneDesktop: (global.PropTypes || guac["prop-types"]).bool,
        hideSocialDesktop: (global.PropTypes || guac["prop-types"]).bool,
        id: (global.PropTypes || guac["prop-types"]).string.isRequired,
        isHomepage: (global.PropTypes || guac["prop-types"]).string,
        logo: (global.PropTypes || guac["prop-types"]).object,
        navigation: (global.PropTypes || guac["prop-types"]).array,
        navWrapperStyle: (global.PropTypes || guac["prop-types"]).object,
        pageRoute: (global.PropTypes || guac["prop-types"]).string,
        phone: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        renderNavDrawer: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        showNav: (global.PropTypes || guac["prop-types"]).bool,
        showUtilitiesMenu: (global.PropTypes || guac["prop-types"]).bool,
        socialProfiles: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired
    }, e.NavBar = l
})), "undefined" != typeof window && (window.global = window);