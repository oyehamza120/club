define("@widget/LAYOUT/layout26-47a25f3b.js", ["exports", "@widget/LAYOUT/c/Layout", "@widget/LAYOUT/c/index2", "@widget/LAYOUT/c/SubTagline", "@widget/LAYOUT/c/video", "@widget/LAYOUT/c/utils", "@widget/LAYOUT/c/HeroBackground", "@widget/LAYOUT/c/utils3", "@widget/LAYOUT/c/utils2", "@widget/LAYOUT/c/HeroImageCropped", "@widget/LAYOUT/c/loaders", "@widget/LAYOUT/c/humanisticFilled", "@widget/LAYOUT/c/minimalSocialIconPack", "@widget/LAYOUT/c/client", "@widget/LAYOUT/c/index9"], (function(e, t, r, a, n, o, i, l, s, g, d, c, p, m, u) {
    "use strict";
    const {
        colorPackCategories: h,
        buttons: y
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        LIGHT: b,
        LIGHT_ALT: f,
        LIGHT_COLORFUL: T,
        DARK: C,
        DARK_ALT: x,
        DARK_COLORFUL: L,
        COLORFUL: w
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs, S = {
        [t.FILL]: "none",
        [t.FIT]: "none",
        [t.INSET]: "category-solid"
    }, I = {
        defaultHeaderTreatment: t.INSET,
        imageTreatments: S
    };
    var H = {
        id: "layout26",
        name: "libre",
        packs: {
            color: "#74B9CB",
            font: "yellowtail"
        },
        logo: {
            font: "primary"
        },
        packCategories: {
            color: h.NEUTRAL
        },
        headerProperties: {
            alignmentOption: "center",
            defaultLogoAlign: "center"
        },
        headerTreatmentsConfig: I,
        paintJobs: [b, f, T, w, L, x, C],
        defaultPaintJob: b,
        buttons: {
            primary: {
                fill: y.fills.GHOST,
                shape: y.shapes.SQUARE,
                decoration: y.decorations.NONE,
                shadow: y.shadows.NONE,
                color: y.colors.PRIMARY
            },
            secondary: {
                fill: y.fills.GHOST,
                decoration: y.decorations.NONE,
                shadow: y.shadows.NONE,
                color: y.colors.PRIMARY
            },
            ...t.COMMON_BUTTON_CONFIG
        }
    };
    const B = {
            color: "inherit",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderColor: "primary",
            paddingBottom: 2,
            textDecoration: "none",
            fontSize: "inherit"
        },
        A = ["content4", "introduction4", "payment1", "payment2"],
        O = ["about1", "content2"];
    class k extends m.FixedWidth {
        static get displayName() {
            return "Theme26"
        }
        static getMutatorDefaultProps(e, r) {
            const a = super.getMutatorDefaultProps(e, r);
            return "about1" === r ? {
                about1ImageAspectRatio: 1.5
            } : "HEADER" === e ? { ...a,
                phoneOnSecondaryPage: !0,
                useSocialLinks: !0,
                hasLogoAlign: !0,
                headerTreatmentsConfig: {
                    headerTreatments: [t.FILL, t.FIT, t.INSET],
                    defaultHeaderTreatment: t.INSET,
                    imageTreatments: {
                        [t.FILL]: "none",
                        [t.FIT]: "none",
                        [t.INSET]: "category-solid"
                    }
                }
            } : a
        }
        static getWidgetDefaultProps(e, t) {
            return { ...super.getWidgetDefaultProps(e, t),
                ...!A.includes(t) && {
                    alignmentOption: "left"
                },
                ..."HEADER" === e && {
                    logoAlign: "center"
                }
            }
        }
        constructor() {
            super(), this.mappedValues = { ...this.mappedValues,
                typographyOverrides: {
                    LogoAlpha: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "xlarge",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingBeta: {
                        style: {
                            font: "primary",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingGamma: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingDelta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "mlarge",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingEpsilon: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "xlarge",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    HeadingZeta: e => ({ ...t.mergeTypographyOverrides.call(this, "BodyAlpha", e)
                    }),
                    DetailsAlpha: {
                        style: {
                            font: "alternate",
                            color: "lowContrast",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    LinkBeta: {
                        style: {
                            font: "alternate",
                            color: "section",
                            fontSize: "inherit",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    NavAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    SubNavAlpha: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    NavBeta: {
                        style: {
                            font: "alternate",
                            color: "highContrast",
                            fontSize: "large",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    SubNavBeta: {
                        style: {
                            font: "alternate",
                            color: "section",
                            fontSize: "medium",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"
                        }
                    },
                    ButtonAlpha: e => {
                        const {
                            size: t = "default"
                        } = e;
                        return {
                            style: {
                                font: "primary",
                                fontWeight: "normal",
                                letterSpacing: "normal",
                                textTransform: "none",
                                ...{
                                    small: {
                                        fontSize: "medium"
                                    },
                                    default: {
                                        fontSize: "large"
                                    },
                                    large: {
                                        fontSize: "large"
                                    }
                                }[t]
                            }
                        }
                    }
                }
            }
        }
        Heading(e) {
            const {
                level: r,
                tag: a
            } = e, n = {
                2: "HeadingEpsilon",
                5: "DetailsAlpha"
            }[t.levelFilter({
                tag: a,
                level: r
            })];
            return super.Heading(this.merge({
                typography: n
            }, e))
        }
        Link({
            style: e = {},
            ...t
        }) {
            if ("SHOP" === this.base.widgetType || "ZILLOW" === this.base.widgetType) return super.Link({
                style: e,
                ...t
            });
            const {
                children: r
            } = t, a = r && "string" != typeof r ? {
                textDecoration: "none"
            } : B, {
                textDecoration: n,
                ...o
            } = e;
            return super.Link(this.merge({
                style: a
            }, {
                style: o,
                ...t
            }))
        }
        UtilitiesMenu(e) {
            const {
                hasNav: t
            } = e;
            return super.UtilitiesMenu(this.merge({
                style: {
                    "@md": {
                        "> :first-child": {
                            marginLeft: t ? "small" : "0"
                        }
                    }
                }
            }, e))
        }
        UtilitiesMenuLink(e) {
            return super.UtilitiesMenuLink(this.merge({
                style: {
                    borderBottomWidth: 0
                }
            }, e))
        }
        LinkContent(e) {
            return super.LinkContent(this.merge({
                style: {
                    textDecoration: "none"
                },
                typography: "LinkBeta"
            }, e))
        }
        Icon({
            icon: e,
            ...r
        }) {
            return e = t.minimalIconMapping[e] || e, super.Icon(this.merge({
                icon: e,
                iconPack: { ...c.filledIcons,
                    ...p.socialIconPack
                }
            }, r))
        }
        Loader(e) {
            return d.Blink.apply(this, [e])
        }
        ContentCardImageThumbnail(e) {
            const r = {
                    about1: {
                        "@md": {
                            width: t.ABOUT1_IMAGE_WIDTH
                        },
                        "@lg": {
                            width: "100%"
                        }
                    },
                    content2: {
                        "@md": {
                            width: t.CONTENT2_IMAGE_WIDTH
                        },
                        "@lg": {
                            width: "100%"
                        }
                    }
                },
                {
                    widgetPreset: a
                } = this.base,
                n = O.includes(a) ? {
                    maxHeight: 260,
                    height: "auto",
                    ...r[a]
                } : {};
            return "about1" === a && delete e.imageData.outputHeight, super.ContentCardImageThumbnail(this.merge({
                style: n
            }, e))
        }
        ContentCardHeading(e) {
            return super.ContentCardHeading(this.merge(e, {
                style: {
                    textAlign: "inherit",
                    alignSelf: "inherit"
                }
            }))
        }
        ContentCardButton(e) {
            return super.ContentCardButton(this.merge(e, {
                style: {
                    alignSelf: "inherit"
                }
            }))
        }
        ImageThumbnail(e) {
            const {
                widgetPreset: t
            } = this.base, r = {
                borderRadius: 0,
                width: "100%"
            };
            return "about1" === t ? super.Image(this.merge({
                style: r
            }, e)) : super.ImageThumbnail(this.merge({
                style: r
            }, e))
        }
        ContentCardImage(e) {
            return super.Image(this.merge(e, {
                style: {
                    width: "100%"
                }
            }))
        }
        ContentText(e) {
            return super.ContentText(this.merge({
                style: {
                    lineHeight: 1.8,
                    "a:not([data-ux])": B
                },
                typography: "BodyAlpha"
            }, e))
        }
        Text(e) {
            return super.Text(this.merge({
                style: {
                    lineHeight: 1.8,
                    "a:not([data-ux])": B
                }
            }, e))
        }
        ContentCardText(e) {
            return super.ContentCardText(this.merge({
                style: {
                    "a:not([data-ux])": B
                }
            }, e))
        }
        LogoHeading(e) {
            return super.LogoHeading(this.merge({
                style: {
                    paddingVertical: "medium"
                }
            }, e))
        }
        NavFooterLink(e) {
            return super.NavFooterLink(this.merge(e, {
                style: {
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    borderColor: "primary",
                    padding: 2,
                    marginHorizontal: "small",
                    marginBottom: "xxsmall",
                    "@xs-only": {
                        padding: 2
                    }
                },
                typography: "LinkBeta"
            }))
        }
        SectionHeading(e) {
            return super.SectionHeading(this.merge({
                sectionHeadingHR: "NONE",
                style: {
                    textAlign: "center"
                },
                typography: "HeadingBeta"
            }, e))
        }
        Hero(e) {
            return super.Hero(this.merge({
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "medium",
                    paddingBottom: "xlarge",
                    width: "100%",
                    "@md": {
                        paddingVertical: "xxlarge"
                    },
                    ...t.spacingVertical("small")
                }
            }, e))
        }
        HeroRight(e) {
            return this.Hero(this.merge({
                style: {
                    alignItems: "flex-end"
                }
            }, e))
        }
        HeroLeft(e) {
            return this.Hero(this.merge({
                style: {
                    alignItems: "flex-start"
                }
            }, e))
        }
        HeroButtonPrimary(e) {
            return this.ButtonPrimary(this.merge({
                style: {
                    marginVertical: "small"
                }
            }, e))
        }
        Tagline(e) {
            return super.Tagline(this.merge({
                style: {
                    textAlign: "center"
                },
                typography: "HeadingZeta"
            }, e))
        }
        HeroRightHeading(e) {
            return this.HeroHeading(this.merge({
                style: {
                    textAlign: "right"
                }
            }, e))
        }
        HeroLeftHeading(e) {
            return this.HeroHeading(this.merge({
                style: {
                    textAlign: "left"
                }
            }, e))
        }
        HeroText(e) {
            return super.SubTagline(this.merge({
                style: {
                    textAlign: "center",
                    a: B,
                    width: "100%",
                    lineHeight: 1.5,
                    "@md": {
                        width: "auto"
                    }
                },
                typography: "HeadingEpsilon"
            }, e))
        }
        HeroRightText(e) {
            return this.HeroText(this.merge({
                style: {
                    textAlign: "right"
                }
            }, e))
        }
        HeroLeftText(e) {
            return this.HeroText(this.merge({
                style: {
                    textAlign: "left"
                }
            }, e))
        }
        PromoBanner(e) {
            return super.PromoBanner(this.merge({
                style: {
                    "@md": {
                        paddingVertical: "xsmall"
                    }
                }
            }, e))
        }
        PromoBannerText(e) {
            return super.PromoBannerText(this.merge({
                style: {
                    lineHeight: 1.4
                }
            }, e))
        }
        NavigationDrawer(e) {
            return super.NavigationDrawer(this.merge({
                category: "neutral",
                section: "alt",
                style: {
                    backgroundColor: "section",
                    boxShadow: "none !important"
                }
            }, e))
        }
        NavigationDrawerInputSearch(e) {
            return super.NavigationDrawerInputSearch(this.merge({
                style: {
                    backgroundColor: "searchMobileGray"
                }
            }, e))
        }
        NavigationDrawerContainer(e) {
            return super.Container(this.merge(e, {
                style: {
                    top: 40,
                    "@md": {
                        paddingTop: "xxxlarge"
                    }
                }
            }))
        }
        NavigationDrawerLink(e) {
            return super.NavigationDrawerLink(this.merge({
                style: {
                    paddingLeft: "xlarge",
                    borderBottomWidth: 0,
                    lineHeight: 1.2,
                    "@md": {
                        paddingLeft: "xxlarge"
                    },
                    "> span": {
                        borderBottomStyle: "solid",
                        borderBottomWidth: "1px",
                        borderColor: "transparent",
                        paddingBottom: 2
                    },
                    ":hover > span": {
                        borderColor: "primary"
                    }
                }
            }, e))
        }
        NavigationDrawerLinkActive(e) {
            return super.NavigationDrawerLinkActive(this.merge({
                style: {
                    "> span": {
                        borderColor: "!primary"
                    },
                    "@xs-only": {
                        fontWeight: "400"
                    }
                }
            }, e))
        }
        NavigationDrawerSubLink(e) {
            return super.NavigationDrawerSubLink(this.merge({
                style: {
                    paddingLeft: "xxlarge",
                    "@md": {
                        paddingLeft: "xxxlarge"
                    }
                }
            }, e))
        }
        NavigationDrawerSubLinkActive(e) {
            return super.NavigationDrawerSubLinkActive(this.merge({
                style: {
                    "> span": {
                        borderBottomWidth: 1,
                        borderBottomStyle: "solid",
                        borderColor: "primary"
                    }
                }
            }, e))
        }
        NavigationDrawerListItem(e) {
            return super.NavigationDrawerListItem(this.merge({
                style: {
                    borderBottomWidth: 0
                }
            }, e))
        }
        NavigationDrawerCloseIcon(e) {
            const {
                logoAlign: t
            } = e;
            return super.CloseIcon(this.merge(e, {
                style: {
                    right: "initial",
                    top: 20,
                    left: 20,
                    zIndex: 2,
                    "@md": {
                        top: 80,
                        left: "center" === t ? 40 : "unset",
                        right: "center" === t ? "unset" : 40
                    }
                }
            }))
        }
        MembershipHeading(e) {
            return super.MembershipHeading(this.merge({
                style: {
                    paddingHorizontal: "xlarge"
                }
            }, e))
        }
        SocialLinksDrawer(e) {
            return this.SocialLinks(this.merge({
                style: {
                    "@md": {
                        display: "none"
                    },
                    marginTop: "medium",
                    paddingHorizontal: "xlarge",
                    width: "100%",
                    "> div": {
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: -5
                    }
                }
            }, e))
        }
        SocialLinks(e) {
            return super.SocialLinks(this.merge({
                style: {
                    "@md": {
                        display: "flex",
                        justifyContent: "flex-end",
                        "> div": {
                            display: "flex",
                            flexWrap: "wrap",
                            marginBottom: -5
                        }
                    }
                }
            }, e))
        }
        SocialLinksLink(e) {
            return super.SocialLinksLink(this.merge({
                style: {
                    border: 0,
                    marginBottom: "xxsmall",
                    ":first-child": {
                        marginLeft: 0
                    }
                }
            }, e))
        }
        GoogleTranslate(e) {
            return super.GoogleTranslate(this.merge({
                style: {
                    "@xs": {
                        left: "initial",
                        right: 20
                    }
                }
            }, e))
        }
        Pipe(e) {
            return super.Pipe(this.merge({
                style: {
                    backgroundColor: "sectionUltraLowContrast",
                    height: "0.8em"
                }
            }, e))
        }
        Input(e) {
            return super.Input(this.merge({
                style: {
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: "1px !important",
                    paddingTop: 23,
                    paddingBottom: 7,
                    paddingHorizontal: "xsmall",
                    backgroundColor: "transparent",
                    borderBottomStyle: "solid",
                    borderColor: "section",
                    borderRadius: 0
                }
            }, e))
        }
        InputTextArea(e) {
            return super.InputTextArea(this.merge({
                style: {
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderStyle: "solid",
                    paddingTop: "xsmall",
                    WebkitAppearance: "none !important"
                }
            }, e))
        }
        UtilitiesMenuIcon(e) {
            return e["data-aid"] === t.dataAids.SEARCH_ICON_RENDERED_OPEN ? super.UtilitiesMenuIcon(this.merge({
                category: "neutral"
            }, e)) : super.UtilitiesMenuIcon(e)
        }
        InputSearch(e) {
            return super.InputSearch(this.merge({
                style: {
                    backgroundColor: "white"
                },
                category: "neutral"
            }, e))
        }
        InputFloatLabelLabel(e) {
            const t = "SUBSCRIBE" === this.base.widgetType && "subscribe2" === this.base.widgetPreset;
            return super.InputFloatLabelLabel(this.merge({
                style: {
                    left: "xsmall",
                    top: t ? "30%" : "50%"
                }
            }, e))
        }
        InputFloatLabelInput(e) {
            const t = "SUBSCRIBE" === this.base.widgetType && "subscribe2" === this.base.widgetPreset;
            return super.InputFloatLabelInput(this.merge({
                style: {
                    ":focus + label": {
                        top: t ? -5 : 5
                    }
                }
            }, e))
        }
        InputSelect(e) {
            return super.InputSelect(this.merge({
                style: {
                    borderWidth: "xsmall",
                    borderRadius: 0,
                    borderStyle: "solid"
                }
            }, e))
        }
        InputSelectElement(e) {
            return super.InputSelectElement(this.merge(e, {
                style: {
                    paddingVertical: "small",
                    paddingHorizontal: "small"
                }
            }))
        }
        ContentBasic(e) {
            const t = -1 === A.indexOf(this.base.widgetPreset) ? {
                alignment: "left"
            } : {};
            return super.ContentBasic(this.merge(t, e))
        }
        ContentCard(e) {
            const t = -1 === A.indexOf(this.base.widgetPreset) ? {
                alignment: "left"
            } : {};
            return super.ContentCard(this.merge(t, e))
        }
        CardBannerContainer(e) {
            return super.CardBannerContainer(this.merge({
                style: {
                    "@md": {
                        flexDirection: "column"
                    }
                }
            }, e))
        }
        CardBannerHeading(e) {
            return super.CardBannerHeading(this.merge({
                style: {
                    paddingBottom: "medium"
                }
            }, e))
        }
        CardBannerBlock(e) {
            return super.CardBannerBlock(this.merge({
                style: {
                    paddingLeft: "0px !important",
                    paddingRight: "0px !important"
                }
            }, e))
        }
        SplitItem(e) {
            const {
                widgetType: t
            } = this.base;
            return "CONTACT" === t || "SUBSCRIBE" === t ? super.SplitItem(e) : super.SplitItem(this.merge({
                style: {
                    "@md": {
                        flexBasis: "34%",
                        maxWidth: "34%",
                        "> *": {
                            maxWidth: "100%"
                        }
                    }
                }
            }, e))
        }
        SplitItemImage(e) {
            const {
                widgetType: t
            } = this.base;
            return "CONTACT" === t || "SUBSCRIBE" === t ? super.SplitItemImage(e) : super.SplitItemImage(this.merge({
                style: {
                    "@md": {
                        flexBasis: "66%",
                        maxWidth: "66%"
                    }
                }
            }, e))
        }
        Phone(e) {
            return super.Phone(this.merge({
                style: {
                    a: {
                        borderBottomWidth: 0,
                        paddingBottom: 0
                    }
                },
                typography: "HeadingDelta"
            }, e))
        }
        HeadingMajor(e) {
            return super.HeadingMajor(this.merge({
                typography: "HeadingEpsilon"
            }, e))
        }
        CardHeading(e) {
            return super.CardHeading(this.merge(e, {
                typography: "HeadingGamma"
            }))
        }
        HeadingProduct(e) {
            return super.HeadingProduct(this.merge(e, {
                typography: "HeadingGamma"
            }))
        }
        ContentHeading(e) {
            return super.ContentHeading(this.merge({
                typography: "HeadingDelta"
            }, e))
        }
        FooterLink(e) {
            return super.FooterLink(this.merge({
                typography: "LinkBeta"
            }, e))
        }
        ContentBigText(e) {
            return super.ContentBigText(this.merge({
                typography: "BodyAlpha"
            }, e))
        }
        Intro(e) {
            return super.Intro(this.merge({
                alignment: "center"
            }, e))
        }
    }
    t._defineProperty(k, "config", H);
    const {
        MEDIUM: v,
        SMALL: E,
        XSMALL: D
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes, R = {
        center: "Center",
        left: "Left",
        right: "Right"
    };
    class N extends(global.React || guac.react).Component {
        render() {
            const {
                tagline: e,
                tagline2: r,
                cta: n,
                ctaPage: o,
                renderMode: i,
                alignmentOption: l
            } = this.props, s = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Hero[R[l]] || (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Hero;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement(s, null, e && (global.React || guac.react).createElement(t.DynamicTagline, {
                tag: "h1",
                children: e,
                renderMode: i,
                scaledFontSizes: [v, E, D],
                noWrapper: !0
            }), r && (global.React || guac.react).createElement(a.SubTagline, {
                children: r,
                style: {
                    maxWidth: 750
                }
            }), n && n.enabled && (global.React || guac.react).createElement(t.CTAButton, {
                cta: n,
                page: o,
                renderMode: i
            })))
        }
    }
    t._defineProperty(N, "propTypes", {
        tagline: (global.PropTypes || guac["prop-types"]).string,
        tagline2: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        cta: (global.PropTypes || guac["prop-types"]).object,
        ctaPage: (global.PropTypes || guac["prop-types"]).string,
        alignmentOption: (global.PropTypes || guac["prop-types"]).string
    });
    const {
        headerTreatmentsConfig: P
    } = H;

    function U(e) {
        const {
            category: a,
            id: l,
            logo: d,
            hasRenderedLogo: c,
            navigation: p,
            background: m,
            backgroundImage: h,
            isHomepage: y,
            renderMode: b,
            viewDevice: f,
            googleTranslateOptions: T,
            promoBannerData: C = {},
            bannerEnabled: x,
            staticContent: L,
            showUtilitiesMenu: w,
            tagline: S,
            tagline2: I,
            cta: H,
            ctaPage: B,
            alignmentOption: A,
            seasonalDecorationDropdown: O,
            seasonalAnimation: k,
            promoBannerLinkData: v,
            phone: E,
            mediaDataRoute: D,
            hasSocialIcons: R,
            showNav: U,
            hasLogoImage: W,
            mediaType: M,
            videoType: _,
            showMobileVideo: z
        } = e, F = x && C.message, G = s.getMediaData(e), Y = !(M || !h || !h.backgroundImage) || s.hasMediaContent(G), {
            headerTreatmentName: V = t.INSET
        } = o.getHeaderTreatmentInfo(e, P), j = y && Y, X = y && (S || I || H && H.enabled && H.label), J = U || w || c || R || !!E, K = y && W && d.logoHeight > t.LOGO_OVERHANG_THRESHOLD;
        let Z;
        const Q = M === t.VIDEO,
            q = !Q && V === t.INSET,
            $ = function({
                navigation: e,
                hasLogoOverhang: t,
                alignmentOption: r,
                logo: a,
                heroImage: n
            }) {
                const o = e && e.length > 1;
                return {
                    TranslateIconWrapper: {
                        "@md": {
                            display: "block"
                        },
                        display: o ? "none" : "block",
                        ...!o && {
                            "> div": {
                                top: 0,
                                right: 0,
                                borderBottomLeftRadius: "10%",
                                borderBottomRightRadius: "unset"
                            }
                        }
                    },
                    navInitial: {
                        backgroundColor: "section"
                    },
                    stickyNavAnimate: {
                        backgroundColor: "section"
                    },
                    video: {
                        video: {
                            width: "100%",
                            mobile: {
                                height: "280px",
                                maxWidth: "100%"
                            }
                        },
                        background: {
                            width: "100%",
                            overflow: "hidden",
                            mobile: {
                                width: "100%"
                            }
                        }
                    },
                    fitImage: {
                        width: "100%"
                    },
                    section: {
                        paddingVertical: 0,
                        "@xs-only": {
                            paddingVertical: 0
                        }
                    },
                    heroContainer: {
                        position: "relative",
                        marginTop: !n && t && "left" === r && "left" === a.logoAlign ? "xlarge" : 0,
                        "@xs-only": {
                            marginTop: !n && t ? "xlarger" : 0
                        }
                    }
                }
            }({
                navigation: p,
                hasLogoOverhang: K,
                alignmentOption: A,
                logo: d,
                heroImage: Z
            }),
            ee = J && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement(r.StickyNav, {
                style: $.navInitial,
                hasAnimation: !0,
                navigation: p,
                renderMode: b,
                animateStyle: $.stickyNavAnimate,
                logoHeight: y || d.logoHeight < t.LOGO_OVERHANG_THRESHOLD ? d.logoHeight : t.LOGO_OVERHANG_THRESHOLD
            }, (global.React || guac.react).createElement(u.NavBar, t._extends({}, e, {
                hasHeroContent: X
            }))));
        j && (Z = Q || V !== t.INSET && V !== t.FIT ? (global.React || guac.react).createElement(i.HeroBackground, {
            id: l,
            height: "large",
            background: h,
            videoBackground: (global._ || guac.lodash).get(m, "video", ""),
            videoPoster: (global._ || guac.lodash).get(m, "image", ""),
            "data-ht": V,
            videoStyle: $.video,
            hasContent: !1,
            category: a,
            renderMode: b,
            viewDevice: f,
            mediaDataRoute: D,
            mediaData: G,
            videoType: _,
            showMobileVideo: z,
            isVideoInset: !0
        }) : (global.React || guac.react).createElement(g.HeroImageCropped, {
            background: m,
            backgroundImage: h,
            renderMode: b,
            "data-ht": V,
            viewDevice: f,
            imageStyle: $.fitImage,
            containerStyle: V === t.FIT ? {
                figure: {
                    width: "100%"
                }
            } : {},
            mediaDataRoute: D
        }));
        const te = "neutral" === a ? "accent" : "",
            re = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Section, {
                "data-aid": t.dataAids.HEADER_SECTION,
                style: $.section
            }, F && (global.React || guac.react).createElement(t.PromoBanner, {
                categoryOverride: te,
                category: a,
                promoBannerData: x && C,
                seasonalDecorationDropdown: O,
                seasonalAnimation: k,
                promoBannerLinkData: v,
                staticContent: L
            }), T && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: $.TranslateIconWrapper
            }, (global.React || guac.react).createElement(t.TranslateIcon, {
                renderMode: b,
                googleTranslateOptions: T
            })), T && (global.React || guac.react).createElement(n.TranslateBar, {
                navigation: p,
                renderMode: b,
                googleTranslateOptions: T,
                staticContent: L,
                key: "i18nbar"
            }), ee, !q && Z, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container, {
                style: $.heroContainer
            }, q && Z, X && (global.React || guac.react).createElement(N, {
                cta: H,
                tagline: S,
                tagline2: I,
                renderMode: b,
                alignmentOption: A,
                ctaPage: B
            })));
        return { ...e,
            children: re
        }
    }
    const {
        headerProperties: W
    } = H;
    class M extends(m.factory(k)) {
        Header() {
            return super.Header(U.apply(this, t.applyDefaultProps(arguments, M, W)))
        }
    }
    M.raw = "@widget/LAYOUT/bs-layout26-Theme-publish-Theme";
    const {
        defaultPaintJob: _
    } = M.config;
    class z extends t.BaseLayout {}
    t._defineProperty(z, "displayName", "Layout26"), t._defineProperty(z, "Theme", M), t._defineProperty(z, "getPropsByTypeAndCategory", ((e, r, a, n, o) => t.getCategoryAndSection(o || _, {
        type: e,
        category: r,
        index: a
    })));
    e.Component = z, e.component = "@widget/LAYOUT/layout26", e.default = z, e.id = "layout26", e.src = "/home/jenkins/workspace/PC/guac-widget-layouts/build-master/src/layout26/index.js", e.type = "LAYOUT"
})), "undefined" != typeof window && (window.global = window);