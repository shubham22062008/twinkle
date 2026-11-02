! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9534c6c-9a18-4f2b-b9c5-6028aa728e65", e._sentryDebugIdIdentifier = "sentry-dbid-a9534c6c-9a18-4f2b-b9c5-6028aa728e65")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4847], {
        52863: (e, t, a) => {
            a.d(t, {
                Yn: () => l,
                DD: () => s,
                pM: () => o,
                Wf: () => i
            });
            var n = a(64021);
            let i = {
                type: n.ck.UNKNOWN,
                uri: "",
                uid: "",
                name: "",
                images: [],
                mediaType: "audio",
                duration: {
                    milliseconds: -1
                },
                album: {
                    type: n.ck.ALBUM,
                    uri: "",
                    name: "",
                    images: []
                },
                artists: [{
                    type: n.ck.ARTIST,
                    uri: "",
                    name: ""
                }],
                provider: null
            };
            var l = function(e) {
                    return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.HIGH = 3] = "HIGH", e[e.VERY_HIGH = 4] = "VERY_HIGH", e[e.HIFI = 5] = "HIFI", e
                }({}),
                o = function(e) {
                    return e[e.REPEAT_NONE = 0] = "REPEAT_NONE", e[e.REPEAT_CONTEXT = 1] = "REPEAT_CONTEXT", e[e.REPEAT_TRACK = 2] = "REPEAT_TRACK", e
                }({});
            let s = ["not_playing_track", "not_playing_context", "protocol_limitations", "already_playing", "already_paused", "unknown"]
        },
        91374: (e, t, a) => {
            a.r(t), a.d(t, {
                createPlayerState: () => P,
                createStandalonePlayer: () => E,
                resolveRestrictions: () => v,
                resolveSeekRestrictions: () => T
            });
            var n = a(82536),
                i = a(93629),
                l = a(98421),
                o = a(42736),
                s = a(64021),
                r = a(59485),
                u = a(52863),
                d = a(98269);
            let c = async (e, t, a) => (null != a || (a = "com.apple.fps.1_0"), (await e.build().withMethod("GET").withHost("https://spclient.wg.spotify.com").withPath("/soundfinder/v1/unauth/episode/".concat(t, "/").concat(a)).withEndpointIdentifier("/unauth/episode/{episodeId}/{keysystem}").send()).body);
            var p = a(21731);
            async function g(e, t, a) {
                let n = (0, o.o_h)(e.uri);
                return m(await c(p.n.getInstance(), null == n ? void 0 : n.id, t).catch(e => {
                    throw (0, d.oy)(e, "soundfinder"), e
                }), a)
            }

            function m(e, t) {
                var a, n;
                if ("video" === t) return {
                    format: "MANIFEST_ID",
                    mediaType: t,
                    noManifest: !1,
                    fileId: null == (n = e.video) ? void 0 : n[0].manifestId
                };
                let i = "NONE" !== e.passthrough && e.passthroughUrl,
                    l = i ? e.passthroughUrl : e.url[0];
                return {
                    format: i ? "MP3" : null == (a = e.format) ? void 0 : a.replace(/_(128|256)/, ""),
                    mediaType: null != t ? t : "audio",
                    noManifest: !!i,
                    url: l,
                    fileId: i ? "" : e.fileId
                }
            }
            var y = a(81163),
                f = a(23574),
                _ = a(93867);
            let h = {
                    "com.apple.fps.1_0": "fairplay",
                    "com.widevine.alpha": "widevine",
                    "com.microsoft.playready": "playready"
                },
                w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "audio";
                    return t ? "@webgate/".concat(h[e], "-license/v1/").concat(a, "/license") : "".concat("https://spclient.wg.spotify.com", "/").concat(h[e], "-license/v1/unauth/").concat(a, "/license")
                },
                R = async function(e, t, a) {
                    var s, r, u;
                    let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "com.widevine.alpha",
                        c = arguments.length > 4 ? arguments[4] : void 0,
                        p = arguments.length > 5 ? arguments[5] : void 0,
                        _ = (0, i._)((0, n._)({}, t.metadata), {
                            contextURI: t !== e ? e.uri : null
                        }),
                        h = _.mediaType;
                    if (null == (s = t.metadata) ? void 0 : s.externalResolvedUrl) return (0, l.KT)({
                        uri: t.uri,
                        url: null == (u = t.metadata) ? void 0 : u.externalResolvedUrl,
                        fileId: "",
                        metadata: _,
                        logData: c,
                        mediaType: h
                    });
                    if ((null == (r = (0, o.o_h)(t.uri)) ? void 0 : r.type) === "episode") {
                        let e = "yes" === _.useAuthEndpoint,
                            a = w(d, e, h),
                            i = "com.apple.fps.1_0" === d && p ? m(p, h) : await g(t, d, h).catch(() => ({})),
                            o = (0, n._)({
                                uri: t.uri,
                                licenseEndpoint: a,
                                metadata: _,
                                logData: c,
                                fileId: "",
                                noAuth: !e
                            }, i);
                        return (0, l.KT)(o)
                    }
                    let R = Error("No valid solution has been found to play this item (".concat(null == t ? void 0 : t.uri, ")"));
                    throw a.emitSync(f.gd.ERROR, new y.bt(y.Z9.ONE_TRACK_UNPLAYABLE, [], R)), R
                };

            function k(e) {
                return function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return t.filter(e => {
                        let {
                            url: t,
                            height: a,
                            width: n
                        } = e;
                        return !!t && !!a && !!n
                    }).map(e => {
                        let {
                            url: t,
                            width: a,
                            height: n
                        } = e;
                        return {
                            url: t,
                            height: parseInt(null != n ? n : "0", 10),
                            width: parseInt(null != a ? a : "0", 10)
                        }
                    })
                }({
                    url: e.image_url,
                    height: e.image_height,
                    width: e.image_width
                }, {
                    url: e.image_url_small,
                    height: e.image_height_small,
                    width: e.image_width_small
                }, {
                    url: e.image_url_large,
                    height: e.image_height_large,
                    width: e.image_width_large
                }, {
                    url: e.image_url_xlarge,
                    height: e.image_height_xlarge,
                    width: e.image_width_xlarge
                })
            }

            function v(e) {
                let {
                    playbackState: t
                } = e;
                return {
                    canPause: !!t.playing,
                    canResume: !t.playing,
                    canSeek: !0,
                    canSkipPrevious: !1,
                    canSkipNext: !1,
                    canToggleRepeatContext: !1,
                    canToggleRepeatTrack: !1,
                    canToggleShuffle: !1,
                    disallowPausingReasons: t.playing ? [] : ["already_paused"],
                    disallowResumingReasons: t.playing ? ["already_playing"] : [],
                    disallowSeekingReasons: [],
                    disallowSkippingPreviousReasons: ["unknown"],
                    disallowSkippingNextReasons: ["unknown"],
                    disallowTogglingRepeatContextReasons: ["unknown"],
                    disallowTogglingRepeatTrackReasons: ["unknown"],
                    disallowTogglingShuffleReasons: ["unknown"],
                    disallowTransferringPlaybackReasons: []
                }
            }

            function T(e) {
                let t = e.hasContext || e.isPaused || e.isBuffering;
                return {
                    canSeek: null != t && t,
                    disallowSeekingReasons: t ? [] : ["not_playing_track"]
                }
            }
            let E = (e, t) => {
                var a;
                let o = (0, l.jA)({
                    transport: e,
                    platform_identifier: "Partner spotify embed",
                    config: {
                        preinitMediaElement: !0,
                        enableWithoutEME: !0,
                        unauthenticatedLogs: !0,
                        videoPlayerContainer: ".VideoPlayer__container",
                        audioPlayerContainer: ".VideoPlayer__container",
                        disallowRobustnessValues: [l.LW.EMPTY]
                    },
                    autoActivateElement: !0
                });
                (null == (a = t.data.entity) ? void 0 : a.hasVideo) && o.on(l.Pv.VIDEO_ELEMENT_APPENDED, () => {
                    var e;
                    null == (e = document.getElementsByTagName("video")[0]) || e.setAttribute("poster", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")
                });
                let {
                    clientId: s,
                    correlationId: d
                } = (0, r.i)();
                return {
                    playerAPI: function(e, t) {
                        let a, o = function(e) {
                                let t, a, o = new f.JW,
                                    s = {
                                        sessionId: "",
                                        timestamp: 0,
                                        context: {
                                            uri: ""
                                        },
                                        index: {
                                            pageURI: null,
                                            pageIndex: null,
                                            itemIndex: null
                                        },
                                        item: null,
                                        shuffle: !1,
                                        repeat: u.pM.REPEAT_NONE,
                                        speed: 1,
                                        playbackQuality: {
                                            bitrateLevel: u.Yn.UNKNOWN
                                        },
                                        playbackId: null,
                                        positionAsOfTimestamp: 0,
                                        duration: 0,
                                        restrictions: {
                                            canPause: !1,
                                            canResume: !1,
                                            canSeek: !1,
                                            canSkipNext: !1,
                                            canSkipPrevious: !1,
                                            canToggleRepeatContext: !1,
                                            canToggleRepeatTrack: !1,
                                            canToggleShuffle: !1,
                                            disallowPausingReasons: ["not_playing_track"],
                                            disallowResumingReasons: ["not_playing_track"],
                                            disallowSeekingReasons: ["not_playing_track"],
                                            disallowSkippingPreviousReasons: ["not_playing_context"],
                                            disallowSkippingNextReasons: ["not_playing_context"],
                                            disallowTogglingRepeatContextReasons: ["not_playing_context"],
                                            disallowTogglingRepeatTrackReasons: ["not_playing_context"],
                                            disallowTogglingShuffleReasons: ["not_playing_context"],
                                            disallowTransferringPlaybackReasons: []
                                        },
                                        hasContext: !1,
                                        isPaused: !1,
                                        isBuffering: !1,
                                        previousItems: [],
                                        nextItems: [],
                                        volume: _.H
                                    };

                                function r(e) {
                                    return (0, i._)((0, n._)({}, s, e), {
                                        context: (0, n._)({}, s.context, null == e ? void 0 : e.context)
                                    })
                                }

                                function d(e) {
                                    s = r(e), o.emit(f.gd.UPDATE, s)
                                }
                                async function c() {
                                    d(P(await e.getCurrentState()))
                                }
                                async function p(e) {
                                    e ? t || (t = setTimeout(() => {
                                        t = null, d({
                                            isBuffering: e
                                        })
                                    }, 200)) : t ? (clearTimeout(t), t = null, d({
                                        isBuffering: e
                                    })) : a || (a = setTimeout(() => {
                                        a = null, d({
                                            isBuffering: e
                                        })
                                    }, 400))
                                }
                                async function g() {
                                    c(), o.emit(f.gd.TRACK_LOADED, s)
                                }
                                async function m() {
                                    let t = await e.getCurrentState(),
                                        a = P(t),
                                        l = a ? (0, i._)((0, n._)({}, a), {
                                            isBuffering: !1,
                                            hasContext: !1,
                                            isPaused: !1,
                                            positionAsOfTimestamp: s.duration
                                        }) : {
                                            positionAsOfTimestamp: s.duration,
                                            position: s.duration,
                                            isBuffering: !1,
                                            hasContext: !1,
                                            isPaused: !1,
                                            restrictions: v(t)
                                        },
                                        u = r(l),
                                        c = T(l);
                                    d((0, i._)((0, n._)({}, u), {
                                        restrictions: (0, n._)({}, l.restrictions, c)
                                    })), o.emit(f.gd.TRACK_ENDED, s)
                                }
                                return e.on(l.Pv.ERROR, e => {
                                    let {
                                        error: t
                                    } = e.data;
                                    t.unrecoverable ? o.emit(f.gd.ERROR, new y.bt(y.Z9.PLAYBACK_ERROR, [], t)) : o.emit(f.gd.ERROR, new y.q3(y.Z9.PLAYBACK_ERROR, [], t))
                                }), e.on(l.Pv.PAUSED, c), e.on(l.Pv.PROGRESS, async () => {
                                    Date.now() - s.timestamp >= 1e3 && c(), (s.isBuffering || t) && ((await e.getCurrentState()).playbackState.buffering || p(!1))
                                }), e.on(l.Pv.TRACK_LOADED, g), e.on(l.Pv.TRACK_ENDED, m), e.on(l.Pv.LIST_ENDED, m), e.on(l.Pv.BUFFERING_START, async () => {
                                    await p(!0)
                                }), e.on(l.Pv.BUFFERING_END, async () => {
                                    await p(!1)
                                }), e.on(l.Pv.AUTOPLAY_FAILED, async () => {
                                    await p(!1)
                                }), e.on(l.Pv.BEFORE_TRACK_LOAD, async () => {
                                    await p(!0)
                                }), e.on(l.Pv.POSITION_CHANGED, async () => {
                                    (await e.getCurrentState()).playbackState.playing && await p(!0)
                                }), o
                            }(e),
                            s = null,
                            r = "StandalonePlayer_UnknownReferrer",
                            d = {
                                unloadedSeekPosition: 0,
                                playArgs: null
                            },
                            c = async () => (void 0 === a && (a = (await e.getMediaConfig()).keysystem), a);
                        return o.addListener(f.gd.UPDATE, e => {
                            let {
                                data: t
                            } = e;
                            s = t
                        }), c(), {
                            getCapabilities: () => ({
                                canChangeSpeed: !1,
                                canChangeVolume: !0,
                                canPlayMultipleContextPages: !1,
                                maxNextTracks: 0,
                                hasDecoratedQueue: !1
                            }),
                            canPlayEncryptedContent: async () => await c() !== void 0,
                            getEvents: () => o,
                            getState: () => s,
                            getReferrer: () => r,
                            setReferrer(e) {
                                r = e
                            },
                            async play(n, i, s, r) {
                                var u, c, p, g, m;
                                if (o.emitPlaySync(n, i, null != s ? s : {})) return;
                                let y = (null == (g = n.pages) ? void 0 : g.length) && (null == (m = n.pages[0].items) ? void 0 : m.length) ? n.pages[0].items[0] : n,
                                    f = await R(n, y, o, a, t, r),
                                    _ = (0, l.xj)({
                                        tracks: [f]
                                    }),
                                    h = {
                                        index: null != (c = null == s || null == (u = s.skipTo) ? void 0 : u.index) ? c : void 0,
                                        initialPosition: null != (p = null == s ? void 0 : s.seekTo) ? p : 0
                                    };
                                await e.playList(_, h), d = {
                                    playArgs: [n, i, s],
                                    unloadedSeekPosition: 0
                                }
                            },
                            async pause() {
                                o.emitPauseSync() || await e.pause()
                            },
                            async resume() {
                                if ((await e.getCurrentState()).track) {
                                    if (o.emitResumeSync()) return;
                                    await e.resume();
                                    return
                                }
                                if (d.playArgs) {
                                    let [e, t, a] = d.playArgs;
                                    await this.play(e, t, (0, i._)((0, n._)({}, a), {
                                        seekTo: d.unloadedSeekPosition
                                    }));
                                    return
                                }
                            },
                            async skipToNext() {
                                o.emitSkipToNextSync() || await e.nextTrack()
                            },
                            async skipTo() {
                                throw Error("Not implemented")
                            },
                            async skipToPrevious() {
                                o.emitSkipToPreviousSync() || await e.previousTrack()
                            },
                            async seekTo(t) {
                                if (!(await e.getCurrentState()).track) {
                                    d.unloadedSeekPosition = t;
                                    return
                                }
                                await e.seek(t)
                            },
                            async seekForward(t) {
                                let a = (await e.getCurrentState()).playbackState.position;
                                await e.seek(a + t)
                            },
                            async seekBackward(t) {
                                let a = (await e.getCurrentState()).playbackState.position;
                                await e.seek(a - t)
                            },
                            async setShuffle() {
                                throw Error("setShuffle is not supported in StandalonePlayer")
                            },
                            async setSpeed() {
                                throw Error("setSpeed is not supported in StandalonePlayer")
                            },
                            async setVolume(t) {
                                await e.setVolume(t)
                            },
                            async mute() {
                                await e.setMuted(!0)
                            },
                            async unmute() {
                                await e.setMuted(!1)
                            },
                            async refreshCurrentContext() {},
                            async updateContext() {
                                throw Error("Updating context not possible with StandalonePlayer.")
                            }
                        }
                    }(o, {
                        clientId: s,
                        correlationId: d
                    })
                }
            };

            function P(e) {
                if (null === e) return null;
                let t = e.playbackState,
                    a = e.track,
                    l = null == a ? void 0 : a.metadata,
                    r = function(e) {
                        let t = e.track,
                            a = null == t ? void 0 : t.metadata;
                        return (null == a ? void 0 : a.contextURI) || (null == t ? void 0 : t.uri) || null
                    }(e);
                return r ? {
                    sessionId: "",
                    timestamp: Date.now(),
                    context: {
                        uri: null != r ? r : "",
                        metadata: l
                    },
                    index: {
                        pageURI: null,
                        pageIndex: null,
                        itemIndex: null
                    },
                    item: a ? function(e, t) {
                        if (null === e) return null;
                        if ((0, o.U_m)(e.uri) || (0, o.PkR)(e.uri)) return function(e, t) {
                            var a, n, i, l, r;
                            let u = e.metadata;
                            return {
                                type: s.ck.TRACK,
                                uri: e.uri,
                                uid: null,
                                name: null != (a = u.title) ? a : "",
                                mediaType: e.mediaType,
                                duration: {
                                    milliseconds: t
                                },
                                album: {
                                    type: s.ck.ALBUM,
                                    uri: null != (n = u.album_uri) ? n : "",
                                    name: null != (i = u.album_title) ? i : "",
                                    images: k(u)
                                },
                                artists: [{
                                    type: s.ck.ARTIST,
                                    uri: null != (l = u.artist_uri) ? l : "",
                                    name: null != (r = u.artist_name) ? r : ""
                                }],
                                isLocal: (0, o.PkR)(e.uri),
                                isExplicit: !1,
                                is19PlusOnly: !1,
                                provider: null,
                                get images() {
                                    return this.album.images
                                }
                            }
                        }(e, t);
                        if ((0, o.gHQ)(e.uri)) {
                            var a, l, r;
                            let n = e.metadata;
                            return {
                                type: s.ck.EPISODE,
                                uri: e.uri,
                                uid: null,
                                name: null != (a = n.title) ? a : "",
                                mediaType: e.mediaType,
                                duration: {
                                    milliseconds: t
                                },
                                show: {
                                    type: s.ck.SHOW,
                                    uri: null != (l = n.album_uri) ? l : "",
                                    name: null != (r = n.album_title) ? r : "",
                                    images: k(n)
                                },
                                provider: null,
                                get images() {
                                    return this.show.images
                                }
                            }
                        }
                        return (0, i._)((0, n._)({}, u.Wf), {
                            uri: e.uri,
                            metadata: e.metadata || null
                        })
                    }(a, t.duration) : null,
                    shuffle: !1,
                    repeat: null,
                    speed: 1,
                    playbackQuality: {
                        bitrateLevel: u.Yn.UNKNOWN
                    },
                    playbackId: null,
                    positionAsOfTimestamp: t.position,
                    duration: t.duration,
                    restrictions: (0, n._)({}, v(e), T({
                        hasContext: !!a && !!r,
                        isPaused: !t.playing,
                        isBuffering: !1
                    })),
                    hasContext: !!a && !!r,
                    isPaused: !t.playing,
                    volume: t.volume,
                    previousItems: [],
                    nextItems: []
                } : null
            }
        }
    }
]);