! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da12bb3f-dcef-4658-a096-4130edbc8839", e._sentryDebugIdIdentifier = "sentry-dbid-da12bb3f-dcef-4658-a096-4130edbc8839")
    } catch (e) {}
}(), (() => {
    "use strict";
    var e = {},
        t = {};

    function d(a) {
        var f = t[a];
        if (void 0 !== f) return f.exports;
        var r = t[a] = {
                id: a,
                loaded: !1,
                exports: {}
            },
            c = !0;
        try {
            e[a].call(r.exports, r, r.exports, d), c = !1
        } finally {
            c && delete t[a]
        }
        return r.loaded = !0, r.exports
    }
    d.m = e, (() => {
        var e = [];
        d.O = (t, a, f, r) => {
            if (a) {
                r = r || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
                e[c] = [a, f, r];
                return
            }
            for (var b = 1 / 0, c = 0; c < e.length; c++) {
                for (var [a, f, r] = e[c], o = !0, n = 0; n < a.length; n++)(!1 & r || b >= r) && Object.keys(d.O).every(e => d.O[e](a[n])) ? a.splice(n--, 1) : (o = !1, r < b && (b = r));
                if (o) {
                    e.splice(c--, 1);
                    var i = f();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
    })(), d.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return d.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        d.t = function(a, f) {
            if (1 & f && (a = this(a)), 8 & f || "object" == typeof a && a && (4 & f && a.__esModule || 16 & f && "function" == typeof a.then)) return a;
            var r = Object.create(null);
            d.r(r);
            var c = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var b = 2 & f && a;
                "object" == typeof b && !~e.indexOf(b); b = t(b)) Object.getOwnPropertyNames(b).forEach(e => c[e] = () => a[e]);
            return c.default = () => a, d.d(r, c), r
        }
    })(), d.d = (e, t) => {
        for (var a in t) d.o(t, a) && !d.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce((t, a) => (d.f[a](e, t), t), [])), d.u = e => "static/chunks/" + (({
        81: "da236039",
        4847: "spotify_player_o",
        5824: "spotify_player_h"
    })[e] || e) + "." + ({
        16: "fd7509d46aac2205",
        81: "edd2d9233b2bfe37",
        94: "3bb45b2e1c27560f",
        103: "bf63b7be52a79a69",
        464: "c0909e10c91efb28",
        528: "f2c6bf7e6f7fb188",
        755: "f2e02398e565c27c",
        1056: "360e2ef53feb306f",
        1139: "cea6cd95c2025b34",
        1499: "c0e5eea9c653f1b7",
        1708: "dd191daad6b6a60d",
        1735: "b90e81341c0663d2",
        1927: "1da4fe7511a15287",
        2013: "ccc9514fd2d26245",
        2340: "49dcecddc3a4555d",
        2494: "c28e3fec674a7121",
        2520: "d6e91be29d849e95",
        2579: "fb69fcfa0ec04c88",
        2618: "963221499ecbd891",
        2746: "1dbc27fba34daba5",
        2776: "21ff6866b3d956e9",
        3014: "457734ede323e14c",
        3156: "05f5b2695fabd404",
        3161: "76f43557e08c5c97",
        3277: "6fd93531c10ec029",
        3436: "12ce12120f7c7f1f",
        3507: "7e4ae72d76cfa900",
        3543: "bb6861bfad139357",
        3555: "d51c20ff83850c06",
        3768: "081e966bd138c420",
        3769: "75d28e4fbe77d4cf",
        3997: "57c03613fa755583",
        4028: "f039d075a3efa391",
        4094: "d9265a5b65476657",
        4313: "9a1217619c5ba806",
        4319: "be8f2fc035c4c9ac",
        4326: "a7c479dc2489a507",
        4438: "50cc195135f365bd",
        4607: "dfbde3087f7aed2f",
        4668: "ad66fed87dfc2275",
        4734: "6c38adbc166a1441",
        4768: "4509dbc7341c5916",
        4769: "5f5a3725791df22b",
        4808: "c02fe658235bc51c",
        4847: "f512864e824fea7f",
        4894: "ef18ffab45335208",
        5039: "a54f1bd47316601a",
        5278: "9afae51667a40cfc",
        5365: "ae489870847641f4",
        5737: "0d5a47986602193a",
        5749: "acd961e3c56a5b9b",
        5824: "534f5b05bc83839a",
        5954: "d4c1166e6836737e",
        6140: "e71fa29ac68bfd03",
        6234: "c1070ab628139f30",
        6367: "7f5b2d9e5c996d2b",
        6395: "12fba1876c8234df",
        6542: "1ed8f5be32a076ed",
        6577: "c27a3a842fbd24cc",
        6974: "2498641385b6b2d6",
        8032: "7a428985fbcb1c8b",
        8070: "fa004c730845f2d2",
        8174: "ed28ce036fc70a3c",
        8181: "bc24e1a8915879ae",
        8272: "15450c7d6007881c",
        8404: "04045542421be613",
        8701: "52c857938363a89d",
        8811: "5f6a35a153000656",
        8942: "abbc17669df17dbd",
        8949: "78714e38674b2dbb",
        8972: "3a515e0a60204665",
        9190: "f558269fb14d765b",
        9323: "a880b8159db0222b",
        9485: "cd3fd2fbe9614052",
        9494: "efacef2b91710e31",
        9658: "f7cd894bcbf3c8fc",
        9855: "b3c094f0a921c10a",
        9870: "4f66051f0c7f2424",
        9886: "8ad34338c74cec09"
    })[e] + ".js", d.miniCssF = e => {}, d.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "_N_E:";
        d.l = (a, f, r, c) => {
            if (e[a]) return void e[a].push(f);
            if (void 0 !== r)
                for (var b, o, n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                    var l = n[i];
                    if (l.getAttribute("src") == a || l.getAttribute("data-webpack") == t + r) {
                        b = l;
                        break
                    }
                }
            b || (o = !0, (b = document.createElement("script")).charset = "utf-8", b.timeout = 120, d.nc && b.setAttribute("nonce", d.nc), b.setAttribute("data-webpack", t + r), b.src = d.tu(a)), e[a] = [f];
            var u = (t, d) => {
                    b.onerror = b.onload = null, clearTimeout(s);
                    var f = e[a];
                    if (delete e[a], b.parentNode && b.parentNode.removeChild(b), f && f.forEach(e => e(d)), t) return t(d)
                },
                s = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: b
                }), 12e4);
            b.onerror = u.bind(null, b.onerror), b.onload = u.bind(null, b.onload), o && document.head.appendChild(b)
        }
    })(), d.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        d.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
    })(), d.tu = e => d.tt().createScriptURL(e), d.p = "https://embed-cdn.spotifycdn.com/_next/", (() => {
        var e = {
            8068: 0,
            5008: 0
        };
        d.f.j = (t, a) => {
            var f = d.o(e, t) ? e[t] : void 0;
            if (0 !== f)
                if (f) a.push(f[2]);
                else if (/^(500|806)8$/.test(t)) e[t] = 0;
            else {
                var r = new Promise((d, a) => f = e[t] = [d, a]);
                a.push(f[2] = r);
                var c = d.p + d.u(t),
                    b = Error();
                d.l(c, a => {
                    if (d.o(e, t) && (0 !== (f = e[t]) && (e[t] = void 0), f)) {
                        var r = a && ("load" === a.type ? "missing" : a.type),
                            c = a && a.target && a.target.src;
                        b.message = "Loading chunk " + t + " failed.\n(" + r + ": " + c + ")", b.name = "ChunkLoadError", b.type = r, b.request = c, f[1](b)
                    }
                }, "chunk-" + t, t)
            }
        }, d.O.j = t => 0 === e[t];
        var t = (t, a) => {
                var f, r, [c, b, o] = a,
                    n = 0;
                if (c.some(t => 0 !== e[t])) {
                    for (f in b) d.o(b, f) && (d.m[f] = b[f]);
                    if (o) var i = o(d)
                }
                for (t && t(a); n < c.length; n++) r = c[n], d.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                return d.O(i)
            },
            a = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    })()
})();