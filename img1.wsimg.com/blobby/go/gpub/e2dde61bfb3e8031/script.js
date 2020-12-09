window.wsb["FreemiumAd"] = function wp({
    adEndpoint: e,
    renderMode: t,
    containerId: a,
    viewDevice: o
}) {
    const r = /<script[^>]*>([\s\S]*)<\/script>/,
        l = "PUBLISH" === t;
    let n, i, s, c, g, p = !1;

    function u() {
        const e = c.offsetWidth + "px";
        s.style.marginLeft = e, s.style.width = `calc(100% - ${e})`
    }

    function d(e) {
        if (s.innerHTML = (e || "").replace(r, ""), s.style.maxHeight = "100px", l) {
            const t = r.exec(e);
            if (t) {
                const e = document.createElement("script");
                e.appendChild(document.createTextNode(t[1])), document.head.appendChild(e)
            }
        }
    }

    function h() {
        const e = 0 !== ("undefined" == typeof window ? 0 : window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
        e !== p && (p = e, i.style.height = s.offsetHeight, s.style.position = p ? "fixed" : "static")
    }

    function b() {
        ! function() {
            const e = document.getElementById(a);
            n = e.closest(".layout") || document.body, i = document.createElement("div"), i.style.width = "100%", s = document.createElement("div"), s.setAttribute("data-freemium-ad", !0), s.style.transition = "max-height 1s", s.style.maxHeight = "0px", s.style.overflow = "hidden", s.style.zIndex = 1e4, s.style.width = "100%", s.style.top = "0px", s.style.left = "0px", s.style.right = "0px", i.appendChild(s), n.prepend(i), !l || o && /mobile/i.test(o) || (c = document.querySelector('[data-ux="Sidebar"]'), c && (u(), window.ResizeObserver && (g = new ResizeObserver(u), g.observe(c))))
        }();
        const t = l && sessionStorage.getItem(e) || "";
        t ? d(t) : window.fetch(e).then((e => e.ok && e.text())).then((t => {
            t && (sessionStorage.setItem(e, t), d(t))
        })).catch((() => {})), l && window.addEventListener("scroll", h, {
            passive: !0
        })
    }
    return l && window.onVisualComplete ? window.onVisualComplete(b) : "complete" === document.readyState ? b() : window.addEventListener("load", b),
        function() {
            n && n.removeChild(i), g && g.disconnect()
        }
};