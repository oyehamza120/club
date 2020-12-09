window.wsb["StickyNav"] = function o({
    uniqueId: e,
    wrapperId: t,
    logoHeight: o,
    hasAnimation: i = !1
}) {
    const a = /#[^\\?]*/;
    if ("undefined" == typeof window) return;
    const n = {};

    function s(e) {
        const t = (e.target.href.match(a)[0] || []).slice(1),
            o = document.getElementById(t);
        o && r(o)
    }

    function r(e) {
        const t = n.stickyNav.clientHeight;
        let o = e.offsetTop;
        const i = setInterval((() => {
            e.offsetTop === o ? (clearInterval(i), scrollTo({
                top: e.offsetTop - t
            })) : o = e.offsetTop
        }), 300)
    }

    function l() {
        c(), d()
    }

    function c() {
        const {
            navWrapper: e,
            stickyNav: t
        } = n, o = Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e => e.offsetHeight)), i = t && t.offsetHeight;
        o && (n.logo = o), t && (i !== this.originalNavHeight && (e.style.height = i + "px"), 0 === g() && (this.originalNavHeight = i, this.originalNavPaddingTop = this.navContainer.style.paddingTop));
        const a = document.querySelector('[data-aid="BANNER_RENDERED"]');
        a && (n.banner = a);
        const s = document.querySelector("[data-freemium-ad]");
        s && (n.ad = s)
    }

    function g() {
        return this.scrollParent === window ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : this.scrollParent.scrollTop
    }

    function d() {
        const {
            stickyNav: e,
            navWrapper: t,
            logo: o,
            i18nBar: a,
            banner: s,
            ad: r
        } = n, l = g(), c = 0 !== l, d = window.innerWidth < 768, p = c && l >= this.originalNavHeight, h = d ? 30 : 15, y = s ? s.offsetHeight : 0;
        y && l >= y + h || !y && c ? e.style.position = "fixed" : y && l < y + h && (e.style.position = "initial"), a && a.clientHeight > 0 && c && (this.wasI18nBarPresent = !0, a.style.display = "none"), a && this.wasI18nBarPresent && !c && (a.style.display = "flex"), o && (o.style.maxHeight = d ? (p ? 50 : 80) + "px" : (p ? 64 : this.originalLogoHeight) + "px", "HEADER_LOGO_OVERHANG_CONTAINER" === o.parentNode.getAttribute("data-aid") && (o.parentNode.style.height = p ? "auto" : "1em", o.style.boxShadow = p ? "none" : this.originalLogoShadow, o.style.marginTop = p ? "0px" : this.originalLogoMarginTop), o.style.width = "auto"), i && !e.classList.contains("sticky-animate") && l >= this.originalNavHeight ? (e.classList.add("sticky-animate"), e.classList.add("x-c-bg")) : l < this.originalNavHeight && (e.classList.remove("sticky-animate"), e.classList.remove("x-c-bg")), t.style.height = this.originalNavHeight + "px", e.style.zIndex = 1e4, e.style.left = 0, e.style.right = 0, e.style.top = r ? r.offsetHeight + "px" : 0
    }! function() {
        if (this.scrollParent = function() {
                const t = document.getElementById(e);
                return Array.from(document.querySelectorAll(".widget-list-box, .viewport, #render-container, .scaler-content")).find((e => e.contains(t))) || window
            }(), this.scrollParent.addEventListener("scroll", d, {
                passive: !0
            }), window.addEventListener("resize", c), window.addEventListener("load", l), this.elementLinks = Array.from(document.querySelectorAll("a")).filter((e => a.test(e.href))), this.elementLinks.forEach((e => e.addEventListener("click", s))), !n.stickyNav) {
            this.originalLogoHeight = o;
            const i = Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]'));
            i.forEach((e => {
                e.style.transition = "max-height .5s", e.style.willChange = "transform"
            })), n.banner = document.querySelector('[data-aid="BANNER_RENDERED"]'), n.i18nBar = document.querySelector('[data-aid="i18n_BAR_RENDERED"]'), n.stickyNav = document.getElementById(e), n.navWrapper = document.getElementById(t), n.logo = i.find((e => e.offsetHeight)), this.originalNavHeight = n.navWrapper.offsetHeight
        }
        const i = n.logo;
        if (i) {
            i.style.height = i.offsetHeight;
            const e = window.getComputedStyle(i);
            this.originalLogoShadow = e.getPropertyValue("box-shadow"), this.originalLogoMarginTop = e.getPropertyValue("margin-top")
        }
        if (n.stickyNav && (this.navContainer = n.stickyNav.querySelector('[data-ux="Container"]'), this.originalNavPaddingTop = this.navContainer.style.paddingTop, window.location.hash)) {
            const e = document.getElementById(window.location.hash.slice(1));
            e && r(e)
        }
        if (n.banner) {
            n.banner.style.transition = "all .5s"
        }
    }(), d()
};