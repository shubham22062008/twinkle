! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "27f4629a-f4e8-470b-b566-8d5a77ef2c16", e._sentryDebugIdIdentifier = "sentry-dbid-27f4629a-f4e8-470b-b566-8d5a77ef2c16")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2712], {
        41216: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/playlist/[id]", function() {
                return s(95255)
            }])
        },
        95255: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => b,
                default: () => c
            });
            var n = s(82536),
                r = s(53108),
                d = s(81360),
                l = s(64312),
                f = s(7620),
                i = s(62032),
                u = s(34473),
                _ = s(81778),
                a = s(42119),
                o = s(46036),
                b = !0;
            let c = e => {
                let t = (0, a._)(e) ? e.rtl : e.state.settings.rtl;
                return (l.useEffect(() => {
                    var e;
                    null == (e = document.querySelector("html")) || e.setAttribute("dir", t ? "rtl" : "ltr")
                }, [t]), (0, a._)(e)) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.mL, {
                        styles: o.E3
                    }), (0, r.jsx)(_.G, {
                        children: (0, r.jsx)(i.A, (0, n._)({}, e))
                    })]
                }) : (0, r.jsx)(f.q, {
                    props: e,
                    children: (0, r.jsx)(u.U, {})
                })
            }
        }
    },
    e => {
        e.O(0, [9930, 5685, 8494, 4504, 7995, 4473, 636, 6593, 8792], () => e(e.s = 41216)), _N_E = e.O()
    }
]);