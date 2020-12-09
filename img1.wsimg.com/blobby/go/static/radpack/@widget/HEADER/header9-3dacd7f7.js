define("@widget/HEADER/header9-3dacd7f7.js", ["exports", "@widget/HEADER/c/defaultProps"], (function(e, o) {
    "use strict";

    function t(e, o, t) {
        return o in e ? Object.defineProperty(e, o, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[o] = t, e
    }

    function a() {
        return (a = Object.assign || function(e) {
            for (var o = 1; o < arguments.length; o++) {
                var t = arguments[o];
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
            }
            return e
        }).apply(this, arguments)
    }
    const {
        selectors: {
            I18N: l,
            Widget: i
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless, r = o.IMAGE;
    class n extends(global.React || guac.react).Component {
        constructor(...e) {
            super(...e), t(this, "getActiveTab", (e => e.find((e => e.value === this.props.value)))), t(this, "getDefaultSelected", (e => (e.find((e => e.value === r)) || {}).label))
        }
        componentDidMount() {
            this.getActiveTab(this.tabs) || this.props.onChange(r)
        }
        get tabs() {
            const {
                showVideosTab: e,
                useSlideshow: t,
                imageLabel: a,
                videoLabel: l,
                slideshowLabel: i
            } = this.props;
            return [{
                label: a,
                value: o.IMAGE,
                enabled: !0
            }, {
                label: l,
                value: o.VIDEO,
                enabled: e
            }, {
                label: i,
                value: o.SLIDESHOW,
                enabled: t
            }].filter((e => e.enabled))
        }
        render() {
            const {
                Elements: {
                    Fieldset: e
                },
                Fields: {
                    Tabs: o
                }
            } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
            return (global.React || guac.react).createElement(e, {
                className: "mx-media-type"
            }, this.tabs.length > 1 && (global.React || guac.react).createElement(o, a({}, this.props, {
                options: this.tabs,
                onChange: this.props.onChange,
                defaultSelected: this.getDefaultSelected(this.tabs),
                children: (global._ || guac.lodash).noop
            })))
        }
    }
    t(n, "propTypes", {
        onChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        value: (global.PropTypes || guac["prop-types"]).string.isRequired,
        useSlideshow: (global.PropTypes || guac["prop-types"]).bool,
        showVideosTab: (global.PropTypes || guac["prop-types"]).bool,
        imageLabel: (global.PropTypes || guac["prop-types"]).string.isRequired,
        videoLabel: (global.PropTypes || guac["prop-types"]).string.isRequired,
        slideshowLabel: (global.PropTypes || guac["prop-types"]).string.isRequired,
        widgetType: (global.PropTypes || guac["prop-types"]).string,
        widgetPreset: (global.PropTypes || guac["prop-types"]).string,
        fakeProp: (global.PropTypes || guac["prop-types"]).string
    }), t(n, "defaultProps", {
        useSlideshow: !1,
        showVideosTab: !1,
        imageLabel: l.get("titleForMediaImage"),
        videoLabel: l.get("titleForMediaVideo"),
        slideshowLabel: l.get("titleForMediaSlideshow"),
        widgetType: i.type,
        widgetPreset: i.preset
    });
    const {
        PropTypes: s,
        selectors: {
            Widget: d,
            utils: {
                createSelector: g
            }
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    var u = {
        __proto__: null,
        alignmentOption: s.Alignment,
        tagline: s.Multiline.maxCount(75).readOnlyDefault,
        tagline2: s.RichText.maxCount(125),
        textBackground: s.Text.maxCount(200).readOnlyDefault,
        phone: s.BusinessPhone,
        address: s.BusinessAddress.isToggleable(g(d.mutatorDefaultProp("showAddressDefault"), d.mutatorDefaultProp("useAddress"), ((e = !0, o) => o && e))),
        ctaButton: s.CTAButton,
        background: s.HeaderImage,
        background2: s.HeaderMedia,
        foreground: s.HeaderMedia,
        bannerEnabled: s.Toggle,
        welcomeLine: s.Text.maxCount(50),
        seasonalDecorationDropdown: s.Select,
        seasonalAnimation: s.Toggle,
        promoBannerData: s.shape({
            type: s.string,
            message: s.Multiline.maxCount(85)
        }),
        promoBannerLinkData: s.ToggleableLink,
        mediaType: s.oneOf((global._ || guac.lodash).values(o.mediaTypes)).kind(n),
        video: s.Video,
        videoEmbed: s.ExternalVideo,
        videoType: s.RadioGroup,
        slideshowType: s.oneOf((global._ || guac.lodash).values(o.slideshowTypes)).kind("RadioGroup"),
        slideshowOptions: s.SlideshowOptions,
        slides: s.arrayOf(s.shape({
            image: s.shape({
                image: s.string
            }).kind("Image"),
            tagline: s.Text.maxCount(75),
            tagline2: s.RichText.maxCount(125),
            cta: s.CTAButton
        })).maxCount(6).kind("OrderableImageArray"),
        hasNavWithBackground: s.Toggle,
        showMobileVideo: s.Toggle,
        socialAccountsEnabled: s.Toggle,
        facebookProfile: s.Facebook,
        houzzProfile: s.Houzz,
        instagramProfile: s.Instagram,
        linkedinProfile: s.LinkedIn,
        pinterestProfile: s.Pinterest,
        twitterProfile: s.Twitter,
        xingProfile: s.Xing,
        yelpProfile: s.Yelp,
        youtubeProfile: s.YouTube,
        logo: s.object.readOnlyDefault.withInline.maxCount(65).kind("Logo"),
        pages: s.arrayOf(s.object).readOnly,
        currentPageId: s.string.readOnly,
        websiteId: s.string.readOnly,
        paintJob: s.string.readOnly,
        env: s.string.readOnly,
        isReseller: s.bool.readOnly,
        featureFlags: s.object.readOnly,
        viewDevice: s.string.readOnly,
        renderMode: s.string.readOnly,
        homepageId: s.string.readOnly,
        maxWidowChars: s.number.readOnly,
        appointmentsPageId: s.string.readOnly,
        shopPageId: s.string.readOnly,
        shopRoute: s.string.readOnly,
        isShopPage: s.bool.readOnly,
        logoData: s.object.readOnly,
        ctaPage: s.object.readOnly,
        isHomepage: s.bool.readOnly,
        pageId: s.string.readOnly,
        accountId: s.string.readOnly,
        businessName: s.string.readOnly,
        firstWidgetBackground: s.shape({
            category: s.string,
            section: s.string
        }).readOnly,
        googleTranslateOptions: s.object.readOnly,
        navigation: s.array.readOnly,
        navigationMap: s.object.readOnly,
        internalLinks: s.object.readOnly,
        isInternalPage: s.bool.readOnly,
        domainName: s.string.readOnly,
        pageRoute: s.string.readOnly,
        isFree: s.bool.readOnly,
        isFreemium: s.bool.readOnly,
        hasLogo: s.bool.readOnly,
        hasData: s.bool.readOnly,
        membershipAdminPages: s.object.readOnly,
        membershipAccountsOn: s.bool.readOnly,
        membershipOLAOn: s.bool.readOnly,
        membershipOLSOn: s.bool.readOnly,
        olsAccountStatus: s.string.readOnly,
        anyoneHasAccess: s.bool.readOnly,
        magicLinkEnabled: s.bool.readOnly,
        hasShopWidget: s.bool.readOnly,
        hasAppointmentsWidget: s.bool.readOnly,
        olsStatus: s.string.readOnly,
        mutatorPath: s.string.readOnly,
        fontPackLogoId: s.string.readOnly,
        fontScale: s.string.readOnly,
        staticContent: s.object.readOnly,
        widgetId: s.string.readOnly,
        socialProfiles: s.object.readOnly,
        hasPrivatePage: s.bool.readOnly,
        hasActiveOLA: s.bool.readOnly,
        hasActiveOLS: s.bool.readOnly,
        canLogin: s.bool.readOnly,
        canCreateAccount: s.bool.readOnly,
        showUtilitiesMenu: s.bool.readOnly,
        hasSocialIcons: s.bool.readOnly,
        freemiumAdDomain: s.string.readOnly,
        locale: s.string.readOnly,
        rootDomain: s.string.readOnly,
        experiments: s.object.readOnly
    };
    const c = "alignmentOption",
        p = "tagline",
        b = "mediaType",
        m = "video",
        h = "videoEmbed",
        y = "videoType",
        P = "slideshowType",
        f = "slideshowOptions",
        w = "slides",
        k = "slides.image",
        v = "slides.tagline",
        O = "slides.tagline2",
        T = "tagline2",
        D = "textBackground",
        S = "phone",
        I = "address",
        E = "ctaButton",
        B = "background",
        F = "background2",
        L = "foreground",
        A = "bannerEnabled",
        C = "promoBannerData.message",
        M = "welcomeLine",
        W = "seasonalDecorationDropdown",
        R = "seasonalAnimation",
        H = "hasNavWithBackground",
        x = "showMobileVideo",
        V = "socialAccountsEnabled",
        N = "facebookProfile",
        _ = "houzzProfile",
        j = "instagramProfile",
        G = "linkedinProfile",
        U = "pinterestProfile",
        q = "twitterProfile",
        $ = "xingProfile",
        J = "yelpProfile",
        z = "youtubeProfile",
        {
            constants: {
                routes: X
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless,
        Y = X.BASE,
        K = "/mediaData",
        Q = "/mediaData/slides/$",
        Z = "/mediaData/slides/$/image",
        ee = "/mediaData/$/image",
        oe = "/mediaData/slides/$/cta",
        te = "/ctaButton",
        ae = "/foregroundImage",
        le = "/background2",
        ie = "/promoBanner",
        re = "/logo",
        ne = "/logo/fonts",
        se = "/socialProfiles",
        de = X.EDIT_PAGES,
        {
            PropTypes: ge
        } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    var ue = {
        __proto__: null,
        backgroundMediaPivot: ge.HeaderMediaPivot,
        logo: ge.Logo.withInline,
        slideBackgroundPivot: ge.Pivot,
        slideCtaPivot: ge.Pivot,
        slideDeleteButton: ge.DeleteButton,
        ctaPivot: ge.Pivot,
        foregroundImagePivot: ge.Pivot,
        background2ImagePivot: ge.Pivot,
        promoBannerPivot: ge.Pivot,
        logoPivot: ge.Pivot,
        socialProfilesPivot: ge.Pivot,
        siteNavigationPivot: ge.Pivot,
        manageShippingLink: ge.ExternalLink,
        manageCouponsLink: ge.ExternalLink,
        logoFont: ge.LogoFont,
        promoBannerDescription: ge.Description,
        showMobileVideoDescription: ge.NotifyMessage,
        hideMobileVideoDescription: ge.Description
    };
    const ce = "logo",
        pe = "backgroundMediaPivot",
        be = "slideBackgroundPivot",
        me = "slideCtaPivot",
        he = "slideDeleteButton",
        ye = "ctaPivot",
        Pe = "foregroundImagePivot",
        fe = "background2ImagePivot",
        we = "promoBannerPivot",
        ke = "logoPivot",
        ve = "socialProfilesPivot",
        Oe = "siteNavigationPivot",
        Te = "manageCouponsLink",
        De = "manageShippingLink",
        Se = "promoBannerDescription",
        Ie = "logoFont",
        Ee = "showMobileVideoDescription",
        Be = "hideMobileVideoDescription",
        {
            selectors: {
                I18N: Fe,
                Widget: Le,
                Page: Ae,
                Stores: Ce,
                Config: Me,
                Theme: We,
                Website: Re,
                Plan: He,
                Reseller: xe,
                utils: {
                    createSelector: Ve,
                    not: Ne
                }
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless,
        {
            treatmentProperties: _e,
            headerTreatments: {
                FILL: je,
                FIT: Ge
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
        Ue = (global.Core || guac["@wsb/guac-widget-core"]).Maniless.Widget.keys(),
        qe = e => Ve(Me.rootDomain, Re.id, ((o, t) => `https://${t}.onlinestore.${o}/admin/${e}?product=VNEXT`)),
        $e = Ve(Ce.Widget.property("mediaType"), (e => !!e && e !== o.IMAGE)),
        Je = Ve(Ce.Widget.property("mediaType"), (e => e !== o.VIDEO)),
        ze = Ve(Ce.Widget.property("mediaType"), (e => e !== o.SLIDESHOW)),
        Xe = {
            getProps: e => e ? {
                disabled: !e.getFieldValue("socialAccountsEnabled")
            } : {}
        },
        Ye = Ve(Ce.Widget.property("mediaType"), Ce.Widget.property("slideshowType"), ((e, t) => t === o.SLIDES && e === o.SLIDESHOW)),
        Ke = Ve(o.logo, (e => e.logoUrl)),
        Qe = Ve(o.logo, (e => e.logoText)),
        Ze = Ve(o.logo, (e => e.selectedMutatorType));
    var eo = {
        [K]: {
            label: Fe.get("titleForHeaderMedia")
        },
        [Q]: {
            label: Fe.get("titleForSlide")
        },
        [Z]: {
            label: Fe.get("titleForSlideImage")
        },
        [ee]: {
            label: Fe.get("titleForSlide")
        },
        [oe]: {
            label: Fe.get("titleForHeaderActionButton")
        },
        [te]: {
            label: Fe.get("titleForHeaderActionButton")
        },
        [ae]: {
            label: Fe.get("titleForHeaderForeground")
        },
        [le]: {
            label: Fe.get("titleForHeaderBackground2")
        },
        [ie]: {
            label: Fe.get("titleForPromotionalBanner")
        },
        [re]: {
            label: Fe.get("titleForHeaderLogo")
        },
        [ne]: {
            label: Fe.get("font")
        },
        [se]: {
            label: Fe.get("titleForSocialAccounts")
        },
        [c]: {
            hidden: Ae.isInternal
        },
        [Ue.category]: {
            hidden: Le.mutatorDefaultProp("disablePaintjobs")
        },
        [B]: {
            pages: Ce.Page.all,
            shopPage: o.getShopPage,
            privatePages: o.getPrivatePages,
            showRemoveButton: !0,
            addOrReplaceImage: !0,
            showAltTagInput: !0,
            fetchInfo: !0,
            setWebsiteBackgroundColors: !0,
            headerTreatmentsConfig: Le.mutatorDefaultProp("headerTreatmentsConfig"),
            useCropBackground: Le.mutatorDefaultProp("useCropBackground"),
            showOverlayOpacityControls: Le.mutatorDefaultProp("showOverlayOpacityControls"),
            ctaButton: Ce.Widget.data("ctaButton"),
            hasLogo: o.hasLogo,
            logoUrl: Ke,
            logoText: Qe,
            logoMutatorType: Ze,
            hasNavBackgroundToggle: Le.mutatorDefaultProp("hasNavBackgroundToggle"),
            showShrinkFit: Le.mutatorDefaultProp("showShrinkFit"),
            hidden: $e,
            getProps(e) {
                const {
                    pages: o,
                    shopPage: t,
                    privatePages: a,
                    showOverlayOpacityControls: l,
                    useCropBackground: i,
                    ctaButton: r,
                    logoUrl: n,
                    logoText: s,
                    logoMutatorType: d,
                    hasNavBackgroundToggle: g,
                    showShrinkFit: u
                } = e, {
                    headerTreatments: c = [],
                    imageTreatments: p,
                    ...b
                } = e.headerTreatmentsConfig || {}, m = 0 === c.length, h = e.getFieldValue("background").treatmentLayout, y = (global._ || guac.lodash).get(_e, h + ".advancedSettings", !1) && c.includes(h), {
                    heroContentItems: P = []
                } = b, f = P.some((o => "cta" === o ? Boolean((global._ || guac.lodash).get(r, "enabled") && (global._ || guac.lodash).get(r, "label")) : e.getFieldValue(o))), w = o && o.length > 1, k = !!t, v = a && a.length > 1, O = Boolean(("TEXT" === d ? !!s : !!n) || w || k || v);
                return {
                    showAdvancedSettings: y,
                    showOverlayOpacityControls: l && (O && g || f || !P.length),
                    headerTreatments: c,
                    imageTreatments: p,
                    showShrinkFit: u,
                    ...b,
                    ...(y || m && !i) && {
                        enableFocalSelector: !0
                    },
                    ...m && !i && {
                        minWidth: 1080
                    },
                    ...m && i && {
                        forceFill: !1,
                        minWidth: 0
                    }
                }
            }
        },
        [L]: {
            showRemoveButton: !0,
            addOrReplaceImage: !0,
            showAltTagInput: !0,
            showShrinkFit: !1,
            setWebsiteBackgroundColors: !1,
            descriptionLabel: Fe.get("descriptionForHeaderForeground")
        },
        [F]: {
            showShrinkFit: !0,
            showRemoveButton: !0,
            addOrReplaceImage: !0,
            showAltTagInput: !0,
            enableFocalSelector: !0,
            setWebsiteBackgroundColors: !1,
            descriptionLabel: Fe.get("descriptionForHeaderBackground2")
        },
        [p]: {
            label: Fe.get("titleForHeaderTitle"),
            hidden: Ve(Ae.isInternal, Ye, ((e, o) => e || o))
        },
        [T]: {
            label: Fe.get("titleForHeaderParagraph"),
            hidden: Ve(Ae.isHomepage, Le.mutatorDefaultProp("useSubtagline"), Ye, ((e, o, t) => !o || !e || t))
        },
        [D]: {
            label: Fe.get("titleForTextBackground"),
            hidden: Ne(Le.mutatorDefaultProp("useTextBackground"))
        },
        [E]: {
            label: Fe.get("titleForHeaderActionButton"),
            buttonLabelLink: (global.Core || guac["@wsb/guac-widget-core"]).Maniless.constants.routes.EDIT_THEME_BUTTONS_PRIMARY,
            buttonLabelLinkText: Fe.get("editThemeStyles"),
            hidden: Ae.isInternal
        },
        [S]: {
            label: Fe.get("titleForHeaderPhone"),
            placeholder: Fe.get("fallbackForHeaderPhone"),
            hidden: Ve(Ae.isHomepage, Le.mutatorDefaultProp("usePhone"), Le.mutatorDefaultProp("phoneOnSecondaryPage"), Ye, ((e, o, t, a) => !o || a || !e && !t))
        },
        [I]: {
            label: Fe.get("titleForHeaderAddress"),
            hidden: Ne(Le.mutatorDefaultProp("useAddress"))
        },
        [M]: {
            label: Fe.get("titleForHeaderWelcome"),
            hidden: Ve(Ae.isHomepage, Le.mutatorDefaultProp("useWelcomeLine"), Ye, ((e, o, t) => !o || !e || t))
        },
        [V]: {
            label: Fe.get("titleForSocialAccountsEnabled")
        },
        [N]: Xe,
        [_]: Xe,
        [j]: Xe,
        [G]: Xe,
        [U]: Xe,
        [q]: Xe,
        [$]: {
            hidden: Ne(Me.flag("enableXing")),
            getProps: e => e ? {
                disabled: !e.getFieldValue("socialAccountsEnabled")
            } : {}
        },
        [J]: Xe,
        [z]: Xe,
        [A]: {
            label: Fe.get("titleForPromotionToggle")
        },
        [R]: {
            label: Fe.get("titleForAnimatedDecoration"),
            hidden: Ve(Ce.Widget.option("bannerEnabled"), Ce.Widget.property("seasonalDecorationDropdown"), ((e, o) => !e || !o || "None" === o))
        },
        [W]: {
            label: Fe.get("titleForSeasonalDecorationDropdown"),
            hidden: Ne(Ce.Widget.option("bannerEnabled")),
            options: [{
                label: Fe.get("seasonalNone"),
                value: "None"
            }, {
                label: Fe.get("seasonalSpring"),
                value: "Spring"
            }, {
                label: Fe.get("seasonalSummer"),
                value: "Summer"
            }, {
                label: Fe.get("seasonalFall"),
                value: "Fall"
            }, {
                label: Fe.get("seasonalWinter"),
                value: "Winter"
            }]
        },
        [C]: {
            label: Fe.get("titleForCustomMessage"),
            hidden: Ne(Ce.Widget.option("bannerEnabled"))
        },
        [b]: {
            useSlideshow: Le.mutatorDefaultProp("useSlideshow"),
            showVideosTab: Le.mutatorDefaultProp("showVideosTab")
        },
        [y]: {
            label: Fe.get("videoTypeDescription"),
            options: [{
                value: o.UPLOAD,
                label: Fe.get("videoSelect")
            }, {
                value: o.EMBED,
                label: Fe.get("videoEmbed")
            }],
            hidden: Ve(Le.mutatorDefaultProp("useVideoEmbed"), Je, ((e, o) => !e || o)),
            defaultValue: o.UPLOAD
        },
        [h]: {
            label: Fe.get("titleForVideoUrlProp"),
            description: Fe.get("descriptionForVideoUrlPropVimeo"),
            enableWarning: !0,
            warning: {
                label: Fe.get("vimeoRecommendationTitle"),
                description: Fe.get("vimeoRecommendationDesc"),
                linkText: Fe.get("vimeoRecommendationLinkText"),
                link: "https://vimeo.com/upgrade"
            },
            helpLink: {
                label: " ",
                linkText: Fe.get("showMeHow"),
                link: Ve(Me.rootDomain, xe.isReseller, ((e, o) => o ? `https://www.${e}/help/article/32398` : "https://godaddy.com/help/a-32398"))
            },
            onlyVimeo: !0,
            hidden: Ve(Le.mutatorDefaultProp("useVideoEmbed"), Je, Ce.Widget.property("videoType"), ((e, t, a) => !e || t || a !== o.EMBED))
        },
        [m]: {
            hidden: Ve(Le.mutatorDefaultProp("useVideoEmbed"), Je, Ce.Widget.property("videoType"), ((e, t, a) => t || e && a && a !== o.UPLOAD))
        },
        [x]: {
            label: Fe.get("showMobileVideoLabel"),
            hidden: Je
        },
        [Ee]: {
            messageType: "warning",
            message: Fe.get("showMobileVideoOnDesc"),
            hidden: Ne(Ce.Widget.option(x))
        },
        [Be]: {
            description: Fe.get("showMobileVideoOffDesc"),
            hidden: Ce.Widget.option(x)
        },
        [P]: {
            options: [{
                value: o.IMAGES_ONLY,
                label: Fe.get("titleForSlideshowImagesType")
            }, {
                value: o.SLIDES,
                label: Fe.get("titleForSlideshowSlidesType")
            }],
            hidden: ze
        },
        [f]: {
            hidden: ze
        },
        [w]: {
            hidden: ze,
            label: Fe.get("titleForSlides"),
            getProps(e) {
                const t = e.getFieldValue("slideshowType") === o.IMAGES_ONLY ? ee : Q;
                return {
                    items: e.value.map(((o, a) => ({
                        route: e.getRoute(t, [a]),
                        graphic: o.image ? o.image.image : ""
                    })))
                }
            }
        },
        [v]: {
            label: Fe.get("titleForHeaderTagline")
        },
        [O]: {
            label: Fe.get("titleForHeaderParagraph")
        },
        [k]: {
            showRemoveButton: !0,
            slideNumber: !0,
            addOrReplaceImage: !0,
            enableFocalSelector: !0,
            showOverlayOpacityControls: !0,
            onlyDeleteSrc: !0
        },
        [H]: {
            label: Fe.get("navBackgroundPivotTitle"),
            isSectionControl: !0,
            hidden: Ve(Me.flag("enableNavBackground"), Le.mutatorDefaultProp("hasNavBackgroundToggle"), Ae.isInternal, Ce.Widget.data("background"), Le.mutatorDefaultProp("headerTreatmentsConfig"), ((e, o, t, a, l) => {
                const {
                    defaultHeaderTreatment: i
                } = l || {}, r = a && a.toJS && a.get("treatmentLayout") || i, n = [je, Ge].includes(r);
                return !e || !o || t || !n
            }))
        },
        [Se]: {
            description: Fe.get("descriptionForPromotionalBanner")
        },
        [Ie]: {
            fonts: We.fonts,
            fontPackId: We.fontPackId,
            fontPackAltId: We.fontPackAltId,
            fontPackLogoId: We.fontPackLogoId,
            value: o.logo,
            layout: We.layout
        },
        [be]: {
            label: Fe.get("titleForSlideImage"),
            getProps(e) {
                const o = e.getFieldValue("slides.image");
                return {
                    to: e.getRoute(Z),
                    graphic: o ? (global.React || guac.react).createElement("img", {
                        src: o.image,
                        alt: o.alt || "",
                        className: "mx-pivot-icon"
                    }) : void 0
                }
            }
        },
        [me]: {
            label: Fe.get("titleForHeaderActionButton"),
            getProps: e => ({
                to: e.getRoute(oe)
            })
        },
        [he]: {
            label: Fe.get("deleteSlideButtonLabel"),
            field: "slides",
            atIndex: !0,
            to: K
        },
        [pe]: {
            label: Fe.get("titleForHeaderMedia"),
            to: K,
            image: Ve(Ce.Widget.data("background"), Ce.Widget.property("backgroundImage"), Ce.Widget.data("slides"), Ce.Widget.data("video"), Ce.Widget.property("mediaType"), Ce.Widget.property("videoType"), Ce.Widget.data("videoEmbed"), Le.mutatorDefaultProp("useVideoEmbed"), ((e, t, a, l, i, r, n, s) => {
                if (i === o.SLIDESHOW) {
                    const [e] = a && a.toJS && a.toJS() || [];
                    return (global._ || guac.lodash).get(e, "image.image")
                }
                return i === o.VIDEO ? r === o.EMBED && s ? n && n.toJS && n.get("thumbnail") : l && l.toJS && l.get("image") : e && e.toJS && e.get("image") || t
            })),
            hidden: Ae.isInternal
        },
        [Pe]: {
            label: Fe.get("titleForHeaderForeground"),
            to: ae,
            hidden: Ne(Le.mutatorDefaultProp("useForegroundImage")),
            graphic: Ve(Ce.Widget.data("foreground"), (e => {
                const o = e && e.get("image");
                return o ? (global.React || guac.react).createElement("img", {
                    src: o,
                    alt: e.get("alt") || "",
                    className: "mx-pivot-icon"
                }) : null
            }))
        },
        [fe]: {
            label: Fe.get("titleForHeaderBackground2"),
            to: le,
            hidden: Ne(Le.mutatorDefaultProp("useSecondBackground")),
            graphic: Ve(Ce.Widget.data("background2"), (e => {
                const o = e && e.get("image");
                if (o) return (global.React || guac.react).createElement("img", {
                    src: o,
                    alt: e.get("alt", ""),
                    className: "mx-pivot-icon"
                })
            }))
        },
        [ke]: {
            label: Fe.get("titleForHeaderLogo"),
            to: re
        },
        [ye]: {
            label: Fe.get("titleForHeaderActionButton"),
            to: te,
            hidden: Ve(Ae.isInternal, Ce.Widget.property("mediaType"), Ce.Widget.property("slideshowType"), ((e, t, a) => e || t === o.SLIDESHOW && a === o.SLIDES))
        },
        [we]: {
            label: Fe.get("titleForPromotionalBanner"),
            to: ie
        },
        promoBannerLinkData: {
            hidden: Ne(Ce.Widget.option("bannerEnabled"))
        },
        [ve]: {
            label: Fe.get("previewTextForSocialAccounts"),
            to: se,
            hidden: Ve(Ae.isHomepage, Le.mutatorDefaultProp("useSocialLinks"), Le.mutatorDefaultProp("socialLinksOnSecondaryPage"), ((e, o, t) => !o || !e && !t))
        },
        [Oe]: {
            label: Fe.get("siteNavigationPivotTitle"),
            to: de
        },
        [ce]: {
            value: o.logo,
            fontRoute: ne,
            showLogoBackground: Le.mutatorDefaultProp("hasLogoBackground"),
            hasLogoAlignEnabled: Le.mutatorDefaultProp("hasLogoAlign")
        },
        [Te]: {
            link: qe("promotions"),
            linkText: Fe.get("manageCouponsButtonLabel"),
            showAsLink: !0,
            hidden: Ne(He.hasCommerce)
        },
        [De]: {
            link: qe("shipping_methods"),
            linkText: Fe.get("manageShippingButtonLabel"),
            showAsLink: !0,
            renderAsBlock: !0,
            hidden: Ne(He.hasCommerce)
        }
    };
    const oo = (global.Core || guac["@wsb/guac-widget-core"]).Maniless.Widget;
    var to = (global.keyMirror || guac.keymirror)({
        BACKGROUND_IMAGE_RENDERED: null,
        BACKGROUND_IMAGE2_RENDERED: null
    });
    const {
        getBackground: {
            getBackgroundProps: ao
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils;
    class lo extends oo {
        constructor() {
            super(...arguments), this.uniqueId = (global._ || guac.lodash).uniqueId("n-")
        }
        get backgroundImage() {
            const {
                background: e = {}
            } = this.props, o = ao({
                backgroundImage: e.image,
                backgroundPosition: e.position,
                background: e,
                backgroundRotation: e.rotation,
                backgroundTop: e.top,
                backgroundLeft: e.left,
                backgroundWidth: e.width,
                backgroundHeight: e.height,
                dataAid: to.BACKGROUND_IMAGE_RENDERED
            });
            return o.alt = (global._ || guac.lodash).get(this, "props.background.alt"), o
        }
        get backgroundImage2() {
            const {
                background2: e = {},
                renderMode: o
            } = this.props, t = ao({
                renderMode: o,
                backgroundImage: e.image,
                backgroundPosition: e.position,
                background: e,
                backgroundRotation: e.rotation,
                backgroundTop: e.top,
                backgroundLeft: e.left,
                backgroundWidth: e.width,
                backgroundHeight: e.height,
                dataAid: to.BACKGROUND_IMAGE2_RENDERED
            });
            return t.alt = (global._ || guac.lodash).get(this, "props.background2.alt"), t
        }
        getChildContext() {
            const {
                video: e
            } = this.props;
            return {
                video: e
            }
        }
        render() {
            const {
                ctaButton: e,
                shopPageId: o,
                tagline2: t
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Header, a({}, this.props, {
                id: this.uniqueId,
                cta: e,
                commerce: o,
                subtagline: t,
                backgroundImage: this.backgroundImage,
                backgroundImage2: this.backgroundImage2
            }))
        }
    }
    t(lo, "propTypes", { ...(global.Core || guac["@wsb/guac-widget-core"]).Maniless.Widget.propTypes,
        ...u
    }), t(lo, "defaultProps", { ...(global.Core || guac["@wsb/guac-widget-core"]).Maniless.Widget.defaultProps,
        ...o.defaultProps
    }), t(lo, "childContextTypes", {
        video: (global.PropTypes || guac["prop-types"]).object
    });
    const {
        Widget: io,
        utils: {
            createMutator: ro
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    var no = ro({
            routes: {
                [Y]: [pe, io.keys().category, c, H, Oe, Pe, fe, we, ke, D, ye, p, T, M, ve, I, S],
                [K]: [b, B, y, h, m, x, Ee, Be, P, f, w],
                [ee]: [k, he],
                [Q]: [v, O, be, me, he],
                [Z]: [k, he],
                [oe]: ["slides.cta"],
                [ae]: ["foregroundMediaType", L],
                [le]: [F],
                [ie]: [Se, A, C, W, R, "promoBannerLinkData", De, Te],
                [re]: [ce],
                [te]: [E],
                [se]: [V, N, q, j, U, G, z, J, _, $],
                [ne]: [Ie]
            }
        }, {
            fields: ue,
            defaultProps: eo,
            omitDefaultFields: !0
        }),
        so = (global.Core || guac["@wsb/guac-widget-core"]).Maniless.connect(lo, no);
    e.Component = so, e.clientResources = ["@wsb/guac-widget-core/lib/client-resource", {
        resource: "@wsb/guac-widget-ols-core/lib/client-resource",
        forTypes: ["SHOP"]
    }], e.component = "@widget/HEADER/header9", e.default = so, e.hooks = "@widget/HEADER/hooks", e.id = "header9", e.src = "/home/jenkins/workspace/PC/guac-widget-header/build-master/src/layouts/header9/index.js", e.type = "HEADER"
})), "undefined" != typeof window && (window.global = window);