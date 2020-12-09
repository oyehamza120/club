define("@widget/HEADER/c/defaultProps-620e170a.js", ["exports"], (function(e) {
    "use strict";
    const o = "Image",
        t = "Video",
        a = "Slideshow";
    var i = {
        __proto__: null,
        IMAGE: o,
        VIDEO: t,
        SLIDESHOW: a
    };
    const n = "imagesOnly",
        s = "slides";
    var l = {
        __proto__: null,
        IMAGES_ONLY: n,
        SLIDES: s
    };
    const r = "upload",
        {
            selectors: {
                Stores: g,
                utils: {
                    createSelector: d
                }
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless,
        {
            APPOINTMENTS: c,
            SHOP: u
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants.widgetTypes,
        p = d(g.Page.all, (e => e && e.find((e => e.get("tags", []).includes(c))))),
        m = d(g.Page.all, (e => e && e.find((e => e.get("tags", []).includes(u))))),
        f = d(g.Page.all, (e => e && e.filter((e => e.getIn(["options", "requiresAuth"], !1)))));

    function b(e) {
        if (!e) return !1;
        for (const o of e) {
            const {
                requiresAuth: e,
                navigation: t
            } = o;
            let a;
            if (e ? a = o : t && (a = b(t)), a) return !0
        }
        return !1
    }
    const h = "center";
    const {
        selectors: {
            I18N: P,
            Account: y,
            Plan: I,
            Config: S,
            Page: w,
            Pages: v,
            Business: A,
            Widget: W,
            Website: _,
            StockPhotos: E,
            Social: k,
            Stores: O,
            Navigation: T,
            Reseller: D,
            Theme: C,
            utils: {
                createSelector: L
            }
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless, {
        utils: {
            replaceTranslation: x
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless, {
        treatmentProperties: M,
        transitionTypes: F
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        getNavFamilyId: B
    } = (global.Core || guac["@wsb/guac-widget-core"]).utils, H = {
        category: "neutral",
        section: "default"
    }, N = ["nav8"], J = L(P.get("defaultValueForHeaderTagline"), A.name, ((e, o) => o ? x(e, {
        businessName: o
    }) : e)), V = A.name, z = A.phone, G = {
        value: L(A.address, (e => e || ""))
    }, R = {
        enabled: !1,
        label: P.get("defaultValueCtaGetInTouch"),
        pageId: L(w.id, (e => e || ""))
    }, U = {
        image: L(O.Widget.property("backgroundImage"), E.index(0), ((e, o) => e || o)),
        shrinkFit: L(W.mutatorDefaultProp("headerTreatmentsConfig"), (e => !!e && (global._ || guac.lodash).get(M, e.defaultHeaderTreatment + ".shrinkFit", !1))),
        useFixedHeight: L(W.mutatorDefaultProp("headerTreatmentsConfig"), (e => !!e && (global._ || guac.lodash).get(M, e.defaultHeaderTreatment + ".useFixedHeight", !1)))
    }, $ = r, j = P.get("defaultValueForHeaderWelcome"), q = {
        type: "custom",
        message: P.get("defaultCustomMessage")
    }, X = o, Y = {
        transition: F.FADE,
        autoplay: !0,
        autoplayDelay: "7",
        arrows: !1,
        dots: !0
    }, K = (global._ || guac.lodash).range(1, 3).map((e => ({
        cta: {
            enabled: !1,
            label: P.get("defaultValueCtaGetInTouch"),
            pageId: w.id
        },
        image: {
            image: E.index(e)
        }
    }))), Q = k.houzzProfile, Z = k.instagramProfile, ee = k.linkedinProfile, oe = k.pinterestProfile, te = k.twitterProfile, ae = k.facebookProfile, ie = k.xingProfile, ne = k.yelpProfile, se = k.youtubeProfile, le = v.names, re = w.id, ge = _.id, de = S.env, ce = D.isReseller, ue = S.flags, pe = S.renderMode, me = S.rootDomain, fe = L(S.viewDevice, (e => e || "")), be = v.homepageId, he = L(S.flag("maxWidowChars"), (e => e || 20)), Pe = L(p, (e => e ? e.get("id") : void 0)), ye = L(m, (e => e ? e.get("id") : void 0)), Ie = L(m, (e => e ? e.getIn(["properties", "routePath"]) : void 0)), Se = L(w.id, ye, ((e, o) => !(!e || !o || e !== o))), we = L(T.map, v.homepageId, ((e, o) => {
        const t = e && e.get(o);
        return t ? t.toJS() : void 0
    })), ve = L(T.map, O.Widget.data("ctaButton"), _.links, ((e, o, t) => {
        if (!(o && o.get("linkId") && o.get("pageId") && t && e)) return;
        const a = t.toJS ? t.toJS() : t,
            i = o.get("pageId") ? o.get("pageId") : (global._ || guac.lodash).get(a, [o.get("linkId"), "target", "pageId"]);
        if (!i) return;
        const n = e.get(i);
        return n ? n.toJS() : void 0
    })), Ae = w.isHomepage, We = w.id, _e = y.id, Ee = A.name, ke = L(O.Widget.all, O.Layout.state, w.rootWidgets, _.overridePrefix, ((e, o, t = (global.Immutable || guac.immutable).Map(), a) => {
        const i = t.get(0);
        if (!i || !a) return H;
        const n = e.find((e => e.get("id") === i));
        if (!n) return H;
        const s = o.get("Component", {}),
            l = s.getPropsByTypeAndCategory ? s.getPropsByTypeAndCategory(n.get("type"), null, 0, n.getIn(["properties", "preset"])) : H,
            r = n.getIn(["properties", "_category"], "").match(new RegExp(`^${a}(.*)`)),
            g = r && r[1],
            d = n.getIn(["properties", "_section"], "").match(new RegExp(`^${a}(.*)`)),
            c = d && d[1] || l.section;
        return g ? {
            category: g,
            section: c
        } : l
    })), Oe = L(O.Website.data("googleTranslateOptions"), (e => {
        if (!e) return;
        const o = e.toJS ? e.toJS() : e;
        return (global._ || guac.lodash).keys(o).reduce(((e, t) => ((global._ || guac.lodash).isEmpty(o[t]) || (e[t] = o[t]), e)), {})
    })), Te = L(T.state, (e => e && 1 === e.size ? [] : e)), De = T.map, Ce = T.links, Le = w.isInternal, xe = A.domain, Me = L(w.id, O.Page.all, ((e, o) => {
        const t = o.find((o => o.get("id") === e));
        return t ? t.getIn(["properties", "routePath"]) : void 0
    })), Fe = I.isFree, Be = I.isFreemium, He = L(O.Website.data("logo"), O.Widget.data("cta"), O.Widget.data("background"), O.Widget.data("background2"), O.Widget.data("foreground"), O.Widget.property("tagline"), O.Widget.property("tagline2"), O.Widget.property("phone"), ((e, o, t, a, i, n, s, l) => !!((global._ || guac.lodash).get(e, "logoUrl") || (global._ || guac.lodash).get(e, "logoText") || (global._ || guac.lodash).get(t, "image") || (global._ || guac.lodash).get(a, "image") || (global._ || guac.lodash).get(i, "image") || n || s || l))), Ne = L(S.flag("membershipAdminPages"), (e => e || {})), Je = _.membershipAccountsOn, Ve = L(_.olaStatus, (e => "PROVISION_SUCCESS" === e)), ze = S.flag("isOLSContactsOn"), Ge = _.olsAccountStatus, Re = O.Website.option("anyoneHasAccess"), Ue = O.Website.option("magicLinkEnabled"), $e = v.hasShopWidget, je = v.hasAppointmentsWidget, qe = _.olaStatus, Xe = _.olsStatus, Ye = S.mutatorPath, Ke = O.Website.property("fontPackLogoId"), Qe = O.Website.property("fontScale"), Ze = P.staticContent, eo = W.id, oo = L(O.Widget.option("socialAccountsEnabled"), O.Website.property("facebookProfile"), O.Website.property("twitterProfile"), O.Website.property("instagramProfile"), O.Website.property("pinterestProfile"), O.Website.property("linkedinProfile"), O.Website.property("youtubeProfile"), O.Website.property("yelpProfile"), O.Website.property("houzzProfile"), O.Website.property("xingProfile"), ((e, o, t, a, i, n, s, l, r, g) => ({
        socialAccountsEnabled: e,
        facebookProfile: o,
        twitterProfile: t,
        instagramProfile: a,
        pinterestProfile: i,
        linkedinProfile: n,
        youtubeProfile: s,
        yelpProfile: l,
        houzzProfile: r,
        xingProfile: g
    }))), to = L(Te, (e => b(e && e.toJS ? e.toJS() : e))), ao = L(Je, Ve, je, ((e, o, t) => Boolean(e && o && t))), io = L(Je, ze, Ge, $e, ((e, o, t, a) => Boolean(e && o && "ACTIVE" === t && a))), no = L(Je, Re, ao, io, to, ((e, o, t, a, i) => Boolean(e && (o || t || a) || i))), so = L(Je, Re, ao, io, to, ((e, o, t, a, i) => Boolean(e && (o || t || a || i)))), lo = L(no, ye, ((e, o) => !(!e && !o))), ro = L(oo, (e => e.socialAccountsEnabled && Object.keys((global._ || guac.lodash).omit(e, "socialAccountsEnabled")).filter((o => !!e[o])).length > 0)), go = L(C.id, Te, lo, ro, O.Widget.property("phone"), A.phone, ((e, o, t, a, i, n) => {
        const s = ["navigation", "utilitiesMenu"],
            l = {
                navigation: !(!o || !o.size),
                utilitiesMenu: t,
                hasSocialIcons: a,
                phone: !!(void 0 === i ? n : i)
            },
            r = {
                nav2: s,
                nav5: "layout30" === e ? s : s.concat(["hasSocialIcons", "phone"]),
                nav6: s.concat(["phone"]),
                nav7: s.concat(["hasSocialIcons"])
            },
            g = B(e);
        return r[g] && r[g].some((e => l[e]))
    })), co = L(O.Website.data("logo"), A.name, C.id, W.layoutProp("logoAlign"), W.mutatorDefaultProp("hasLogoAlign"), go, ((e, o, t, a = null, i = !0, n = !0) => {
        const s = e && e.toJS ? e.toJS() : e;
        let l = null;
        if (i && (l = function(e, o) {
                if (!e || !e.logoAlign) return "";
                const {
                    logoAlign: t = ""
                } = e, a = new RegExp(`^(${o}|all)_(?=left|center)`);
                return a.test(t) ? t.replace(a, "") : ""
            }(s, t), !l)) {
            const e = B(t);
            l = N.includes(e) ? "legacy" : n ? a : h
        }
        return s ? { ...s,
            logoAlign: l
        } : {
            logoText: o,
            logoAlign: l
        }
    })), uo = L(co, (e => !(!e.logoUrl && !e.logoText)));
    var po = {
        __proto__: null,
        tagline: J,
        textBackground: V,
        phone: z,
        address: G,
        ctaButton: R,
        background: U,
        background2: {
            image: ""
        },
        foreground: {
            image: "//img1.wsimg.com/isteam/ip/static/themeFocus/foreground_generic_circle_v2.png"
        },
        videoType: $,
        video: {
            video: "//websites.godaddy.com/categories/v4/videos/raw/video/uGbA6v1EwwF20VGXJ",
            image: "//img1.wsimg.com/isteam/videos/uGbA6v1EwwF20VGXJ"
        },
        bannerEnabled: !1,
        welcomeLine: j,
        seasonalDecorationDropdown: "None",
        seasonalAnimation: !1,
        promoBannerData: q,
        mediaType: X,
        slideshowType: "imagesOnly",
        slideshowOptions: Y,
        slides: K,
        hasNavWithBackground: !1,
        showMobileVideo: !1,
        socialAccountsEnabled: !1,
        houzzProfile: Q,
        instagramProfile: Z,
        linkedinProfile: ee,
        pinterestProfile: oe,
        twitterProfile: te,
        facebookProfile: ae,
        xingProfile: ie,
        yelpProfile: ne,
        youtubeProfile: se,
        pages: le,
        currentPageId: re,
        websiteId: ge,
        env: de,
        isReseller: ce,
        featureFlags: ue,
        renderMode: pe,
        rootDomain: me,
        viewDevice: fe,
        homepageId: be,
        maxWidowChars: he,
        appointmentsPageId: Pe,
        shopPageId: ye,
        shopRoute: Ie,
        isShopPage: Se,
        logoData: we,
        ctaPage: ve,
        isHomepage: Ae,
        pageId: We,
        accountId: _e,
        businessName: Ee,
        firstWidgetBackground: ke,
        googleTranslateOptions: Oe,
        navigation: Te,
        navigationMap: De,
        internalLinks: Ce,
        isInternalPage: Le,
        domainName: xe,
        pageRoute: Me,
        isFree: Fe,
        isFreemium: Be,
        hasData: He,
        membershipAdminPages: Ne,
        membershipAccountsOn: Je,
        membershipOLAOn: Ve,
        membershipOLSOn: ze,
        olsAccountStatus: Ge,
        anyoneHasAccess: Re,
        magicLinkEnabled: Ue,
        hasShopWidget: $e,
        hasAppointmentsWidget: je,
        olaStatus: qe,
        olsStatus: Xe,
        mutatorPath: Ye,
        fontPackLogoId: Ke,
        fontScale: Qe,
        staticContent: Ze,
        widgetId: eo,
        socialProfiles: oo,
        hasPrivatePage: to,
        hasActiveOLA: ao,
        hasActiveOLS: io,
        canLogin: no,
        canCreateAccount: so,
        showUtilitiesMenu: lo,
        hasSocialIcons: ro,
        logo: co,
        hasLogo: uo,
        freemiumAdDomain: L(S.rootDomain, (e => "freemium.api." + e)),
        locale: y.market,
        experiments: S.experiments
    };
    e.EMBED = "embed", e.IMAGE = o, e.IMAGES_ONLY = n, e.SLIDES = s, e.SLIDESHOW = a, e.UPLOAD = r, e.VIDEO = t, e.defaultProps = po, e.getPrivatePages = f, e.getShopPage = m, e.hasLogo = uo, e.logo = co, e.mediaType = X, e.mediaTypes = i, e.slideshowOptions = Y, e.slideshowTypes = l, e.videoType = $
})), "undefined" != typeof window && (window.global = window);