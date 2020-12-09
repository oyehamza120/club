define("@widget/GALLERY/c/bs-util-75eea84a.js", ["exports"], (function(e) {
    "use strict";
    e.getGridRowSizes = function(e, r = 2, i = r + 2) {
        if (e <= i) return [e];
        const n = [];
        let t = i + 1,
            a = e;
        for (; t > r;) {
            t--;
            const r = e / t,
                i = Math.ceil(r);
            if (i > a) break;
            a = i;
            const o = Math.floor(r),
                s = e - o * t;
            n.push({
                cur: t,
                maxes: o,
                remainder: s
            })
        }
        const o = n.sort((e, r) => e.remainder > r.remainder ? 1 : e.remainder < r.remainder ? -1 : 0)[0],
            s = Array(o.maxes).fill(o.cur);
        if (0 === o.remainder) return s;
        if (o.remainder < r) {
            const e = s.pop() - o.remainder;
            s.push(e), s.push(r)
        } else s.push(o.remainder);
        return s
    }, e.getImageUrl = function(e, r, i, n = "image") {
        let t;
        return "image" === n ? t = [e, `rs=w:${r},h:${i},cg:true,m/cr=w:${r},h:${i},a:cc`].join(e.endsWith("/") ? "" : "/") : "background" === n && (t = e.replace(/\{width\}/g, r).replace(/\{height\}/g, i)), t
    }
})), "undefined" != typeof window && (window.global = window);