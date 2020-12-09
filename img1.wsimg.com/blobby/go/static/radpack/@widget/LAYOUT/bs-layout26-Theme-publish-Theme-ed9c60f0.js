define("@widget/LAYOUT/bs-layout26-Theme-publish-Theme-ed9c60f0.js", ["exports", "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers", "@widget/LAYOUT/c/bs-dataAids", "@widget/LAYOUT/c/bs-index", "@widget/LAYOUT/c/bs-countVCTElement", "@widget/LAYOUT/c/bs-headerTreatments", "@widget/LAYOUT/c/bs-overlayTypes", "@widget/LAYOUT/c/bs-_commonjsHelpers", "@widget/LAYOUT/c/bs-index2", "@widget/LAYOUT/c/bs-searchFormLocations", "@widget/LAYOUT/c/bs-index3", "@widget/LAYOUT/c/bs-loaders", "@widget/LAYOUT/c/bs-humanisticFilled", "@widget/LAYOUT/c/bs-minimalSocialIconPack", "@widget/LAYOUT/c/bs-index4"], (function(e, t, r, n, i, a, o, s, l, g, d, m, p, u, h) {
    "use strict";
    const {
        colorPackCategories: c,
        buttons: y
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        LIGHT: f,
        LIGHT_ALT: b,
        LIGHT_COLORFUL: x,
        DARK: T,
        DARK_ALT: L,
        DARK_COLORFUL: C,
        COLORFUL: S
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs, H = {
        [a.FILL]: "none",
        [a.FIT]: "none",
        [a.INSET]: "category-solid"
    }, I = {
        defaultHeaderTreatment: a.INSET,
        imageTreatments: H
    };
    var w = {
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
            color: c.NEUTRAL
        },
        headerProperties: {
            alignmentOption: "center",
            defaultLogoAlign: "center"
        },
        headerTreatmentsConfig: I,
        paintJobs: [f, b, x, S, C, L, T],
        defaultPaintJob: f,
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
            ...n.COMMON_BUTTON_CONFIG
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
        N = ["about1", "content2"];
    class k extends h.FixedWidth {
        static get displayName() {
            return "Theme26"
        }
        static getMutatorDefaultProps(e, t) {
            const r = super.getMutatorDefaultProps(e, t);
            return "about1" === t ? {
                about1ImageAspectRatio: 1.5
            } : "HEADER" === e ? { ...r,
                phoneOnSecondaryPage: !0,
                useSocialLinks: !0,
                hasLogoAlign: !0,
                headerTreatmentsConfig: {
                    headerTreatments: [a.FILL, a.FIT, a.INSET],
                    defaultHeaderTreatment: a.INSET,
                    imageTreatments: {
                        [a.FILL]: "none",
                        [a.FIT]: "none",
                        [a.INSET]: "category-solid"
                    }
                }
            } : r
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
                    HeadingZeta: e => ({ ...d.mergeTypographyOverrides.call(this, "BodyAlpha", e)
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
                level: t,
                tag: r
            } = e, n = {
                2: "HeadingEpsilon",
                5: "DetailsAlpha"
            }[d.levelFilter({
                tag: r,
                level: t
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
            } = t, n = r && "string" != typeof r ? {
                textDecoration: "none"
            } : B, {
                textDecoration: i,
                ...a
            } = e;
            return super.Link(this.merge({
                style: n
            }, {
                style: a,
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
            ...t
        }) {
            return e = u.minimalIconMapping[e] || e, super.Icon(this.merge({
                icon: e,
                iconPack: { ...p.filledIcons,
                    ...u.socialIconPack
                }
            }, t))
        }
        Loader(e) {
            return m.Blink.apply(this, [e])
        }
        ContentCardImageThumbnail(e) {
            const t = {
                    about1: {
                        "@md": {
                            width: n.ABOUT1_IMAGE_WIDTH
                        },
                        "@lg": {
                            width: "100%"
                        }
                    },
                    content2: {
                        "@md": {
                            width: n.CONTENT2_IMAGE_WIDTH
                        },
                        "@lg": {
                            width: "100%"
                        }
                    }
                },
                {
                    widgetPreset: r
                } = this.base,
                i = N.includes(r) ? {
                    maxHeight: 260,
                    height: "auto",
                    ...t[r]
                } : {};
            return "about1" === r && delete e.imageData.outputHeight, super.ContentCardImageThumbnail(this.merge({
                style: i
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
                    ...l.spacingVertical("small")
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
            return e["data-aid"] === r.DataAid.SEARCH_ICON_RENDERED_OPEN ? super.UtilitiesMenuIcon(this.merge({
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
    t._defineProperty(k, "config", w), e.default = k
})), "undefined" != typeof window && (window.global = window);