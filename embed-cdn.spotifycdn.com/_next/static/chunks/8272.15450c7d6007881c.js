! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2db27f91-df22-4097-8a04-9a775b6b8440", e._sentryDebugIdIdentifier = "sentry-dbid-2db27f91-df22-4097-8a04-9a775b6b8440")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8272], {
        1188: (e, t, i) => {
            i.d(t, {
                i: () => a
            });
            class a extends Error {
                constructor(e, t, i = {}) {
                    super(), this.unrecoverable = !1, this.listPlayerIgnore = !1, this.debug = {}, this.name = "PlaybackError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new a(e, t);
                    return i.unrecoverable = !0, i
                }
            }
        },
        4898: (e, t, i) => {
            var a;
            i.d(t, {
                I: () => s,
                j: () => a
            });
            let s = 0x1fffffffffffff;
            ! function(e) {
                e.URL = "URL", e.MSE = "MSE"
            }(a || (a = {}))
        },
        8870: (e, t, i) => {
            var a;
            i.d(t, {
                    U: () => a
                }),
                function(e) {
                    e[e.MP3_256 = 3] = "MP3_256", e[e.MP3_320 = 4] = "MP3_320", e[e.MP3_160 = 5] = "MP3_160", e[e.MP3_96 = 6] = "MP3_96", e[e.MP4_128 = 10] = "MP4_128", e[e.MP4_256 = 11] = "MP4_256", e[e.MP4_128_DUAL = 12] = "MP4_128_DUAL", e[e.MP4_256_DUAL = 13] = "MP4_256_DUAL", e[e.MP4_128_CBCS = 14] = "MP4_128_CBCS", e[e.MP4_256_CBCS = 15] = "MP4_256_CBCS", e[e.MP4_FLAC = 17] = "MP4_FLAC"
                }(a || (a = {}))
        },
        19218: (e, t, i) => {
            var a, s, r;
            i.d(t, {
                    UE: () => r,
                    b$: () => s,
                    ct: () => o,
                    d2: () => a,
                    wh: () => n
                }),
                function(e) {
                    e.UNKNOWN = "UNKNOWN", e.DEFAULT = "DEFAULT", e.LOW = "LOW", e.NORMAL = "NORMAL", e.HIGH = "HIGH", e.VERY_HIGH = "VERY_HIGH", e.HIFI = "HIFI"
                }(a || (a = {})),
                function(e) {
                    e.UNKNOWN = "unknown", e.AUTO = "auto", e.LOW = "low", e.NORMAL = "normal", e.HIGH = "high", e.VERY_HIGH = "very_high", e.LOSSLESS = "lossless"
                }(s || (s = {})),
                function(e) {
                    e.UNKNOWN = "unknown", e.AUTO = "auto", e.LOW_DEFINITION = "ld", e.STANDARD_DEFINITION = "sd", e.HIGH_DEFINITION = "hd", e.FULL_HIGH_DEFINITION = "fhd", e.DCI_2K_DEFINITION = "2k", e.QUAD_HIGH_DEFINITION = "qhd", e.ULTRA_HIGH_DEFINITION = "uhd", e.FULL_ULTRA_HIGH_DEFINITION = "fuhd"
                }(r || (r = {}));
            let n = {
                    [r.UNKNOWN]: -1,
                    [r.AUTO]: 0,
                    [r.LOW_DEFINITION]: 320,
                    [r.STANDARD_DEFINITION]: 480,
                    [r.HIGH_DEFINITION]: 720,
                    [r.FULL_HIGH_DEFINITION]: 1080,
                    [r.DCI_2K_DEFINITION]: 1080,
                    [r.QUAD_HIGH_DEFINITION]: 1440,
                    [r.ULTRA_HIGH_DEFINITION]: 2160,
                    [r.FULL_ULTRA_HIGH_DEFINITION]: 4320
                },
                o = {
                    [-1]: r.UNKNOWN,
                    0: r.AUTO,
                    320: r.LOW_DEFINITION,
                    480: r.STANDARD_DEFINITION,
                    720: r.HIGH_DEFINITION,
                    1080: r.FULL_HIGH_DEFINITION,
                    1440: r.QUAD_HIGH_DEFINITION,
                    2160: r.ULTRA_HIGH_DEFINITION,
                    4320: r.FULL_ULTRA_HIGH_DEFINITION
                }
        },
        19428: (e, t, i) => {
            i.d(t, {
                QG: () => u,
                mf: () => r
            });
            var a = i(59554),
                s = i(1188);

            function r(e) {
                var t, i;
                let a = ["--no-match--"];
                a.push(...null != (t = null == e ? void 0 : e.audio) ? t : [], ...null != (i = null == e ? void 0 : e.video) ? i : []);
                let s = RegExp(`^(${a.join("|")})$`);
                return e => s.test(e)
            }

            function n(e, t) {
                return e.sort((e, i) => {
                    if ("video_bitrate" in e && "video_bitrate" in i) return t ? e.video_resolution === i.video_resolution ? e.video_bitrate - i.video_bitrate : e.video_resolution - i.video_resolution : e.video_bitrate - i.video_bitrate;
                    return e.max_bitrate - i.max_bitrate
                })
            }

            function o(e) {
                return "video_codec" in e
            }
            let l = {
                av01: -1,
                avc1: 1,
                vp8: 0,
                vp9: 0
            };

            function _(e) {
                var t;
                return null != (t = e.split(".").pop()) ? t : ""
            }

            function d(e, t) {
                var i, a;
                return null != (a = t[null != (i = e.split(".")[0]) ? i : ""]) ? a : -1
            }

            function u(e) {
                let {
                    profiles: t,
                    playabilityChecker: i,
                    encryptionIndex: r,
                    strategy: u,
                    keySystem: c,
                    disallowCodec: h,
                    disallowProfile: p,
                    preferredVideoResolution: m,
                    codecPriorities: E
                } = e, g = Object.assign(Object.assign({}, l), E), S = [], T = {}, f = {};
                for (let e of t) {
                    if (void 0 !== r && Array.isArray(e.encryption_indices) && -1 === e.encryption_indices.indexOf(r)) continue;
                    let t = "audio_codec" in e ? e.audio_codec : e.video_codec;
                    if ((null == h ? void 0 : h(t)) || o(e) && 0 > d(t, g)) continue;
                    let a = `${e.mime_type}; codecs="${t}"`;
                    i.isPlayable(a, {
                        strategy: u,
                        keySystem: c
                    }) && S.push((function(e, t) {
                        if (!t) return Promise.resolve(!1);
                        let i = Object.assign({
                            mimeType: e.mime_type
                        }, o(e) ? {
                            type: "video",
                            codec: e.video_codec,
                            bitrate: e.video_bitrate,
                            height: e.video_height,
                            width: e.video_width,
                            resolution: e.video_resolution
                        } : {
                            type: "audio",
                            codec: e.audio_codec,
                            bitrate: e.audio_bitrate
                        });
                        return new Promise(e => {
                            e(t(i))
                        }).catch(() => !0)
                    })(e, p).then(i => {
                        if (i) return;
                        let a = t.split(".")[0],
                            s = `${e.mime_type}.${a}`;
                        if (o(e)) {
                            let t = f[s];
                            t ? t.push(e) : f[s] = [e]
                        } else {
                            let t = T[s];
                            t ? t.push(e) : T[s] = [e]
                        }
                    }))
                }
                return Promise.all(S).then(() => {
                    var e, i;
                    let r = [];
                    for (let e in T) {
                        if (!T[e]) continue;
                        let t = T[e];
                        if (null == t ? void 0 : t.length) {
                            n(r = t);
                            break
                        }
                    }
                    for (let t of r) t.__effective_codec = null == (e = r[0]) ? void 0 : e.audio_codec;
                    let l = [];
                    for (let e of Object.keys(f).sort((e, t) => d(_(t), g) - d(_(e), g))) {
                        let t = f[e];
                        if (null == t ? void 0 : t.length) {
                            n(l = t, m);
                            break
                        }
                    }
                    if (0 === l.length) throw new s.i(a.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES, "No playable video profiles available in the manifest.");
                    if (0 === r.length && t.some(e => !o(e))) throw new s.i(a.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES, "No playable audio profiles available in the manifest.");
                    for (let e of l) e.__effective_codec = null == (i = l[0]) ? void 0 : i.video_codec;
                    return {
                        audio: r,
                        video: l
                    }
                })
            }
        },
        25856: (e, t, i) => {
            i.d(t, {
                C: () => n
            });
            var a = i(4898),
                s = i(73880);
            class r {
                _createMediaElement() {
                    let e = document.createElement("video");
                    return e.id = "jssdk-internal-playability-checker", this._mediaElement = e, e
                }
                isURLPlayable(e, t) {
                    var i;
                    let a = (null != (i = this._mediaElement) ? i : this._createMediaElement()).canPlayType(e);
                    return (null == t ? void 0 : t.confidenceLevel) === "probably" ? "probably" === a : "" !== a
                }
                isMSEPlayable(e) {
                    return "undefined" != typeof MediaSource && MediaSource.isTypeSupported(e)
                }
                isWebKitMediaKeysPlayable(e, t) {
                    return "undefined" != typeof WebKitMediaKeys && (0 === t.indexOf("audio/mp2t") || (0 !== t.indexOf("audio/mp4") || -1 === t.indexOf("flac")) && WebKitMediaKeys.isTypeSupported(e, t))
                }
                isPlayable(e, t) {
                    switch (null == t ? void 0 : t.strategy) {
                        case a.j.MSE:
                            return this.isMSEPlayable(e);
                        case a.j.URL:
                            if (t.keySystem === s.J.FAIRPLAY) return this.isWebKitMediaKeysPlayable(t.keySystem, e);
                            return this.isURLPlayable(e, t);
                        default:
                            return this.isMSEPlayable(e) || this.isURLPlayable(e, t)
                    }
                }
            }

            function n() {
                return new r
            }
        },
        29559: (e, t, i) => {
            i.d(t, {
                q: () => n
            });
            let a = "Node already exists in another list!";
            class s {
                constructor(e) {
                    this.listId = null, this.key = "", this.prev = null, this.next = null, this.value = null, this.value = e
                }
            }
            class r {
                constructor() {
                    this._id = {}, this.length = 0, this.first = null, this.last = null
                }
                append(e) {
                    if (e.listId) throw Error(a);
                    return e.listId = this._id, this.first ? this.last && (e.prev = this.last, e.next = null, this.last.next = e, this.last = e) : (this.first = e, this.last = e), ++this.length
                }
                insertAfter(e, t) {
                    if (t.listId) throw Error(a);
                    return t.listId = this._id, t.prev = e, t.next = e.next, e.next && (e.next.prev = t), e.next = t, t.prev === this.last && (this.last = t), ++this.length
                }
                remove(e) {
                    return !!this.length && e.listId === this._id && (this.length > 1 ? (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.first ? this.first = e.next : e === this.last && (this.last = e.prev)) : (this.first = null, this.last = null), e.listId = null, e.prev = null, e.next = null, this.length--, !0)
                }
            }
            class n {
                constructor(e) {
                    this._limit = 100, this._list = new r, this._map = {}, this._limit = e
                }
                get(e) {
                    let t = this._map[e];
                    if (!t) return null;
                    let i = this._list;
                    return i.remove(t), i.append(t), t.value
                }
                set(e, t) {
                    if (!e) throw TypeError("Cache key cannot be empty.");
                    let i = this._list,
                        a = this._map;
                    if (i.length >= this._limit) {
                        let e = i.first;
                        a[e.key] = null, i.remove(e)
                    }
                    let r = a[e];
                    r ? (i.remove(r), r.value = t) : (r = new s(t)).key = e, i.append(r), a[e] = r
                }
                remove(e) {
                    let t = this._map,
                        i = t[e];
                    return i ? (this._list.remove(i), t[e] = null, i.value) : null
                }
                keys() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.key), t = t.next;
                    return e.reverse()
                }
                values() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.value), t = t.next;
                    return e.reverse()
                }
                size() {
                    return this._list.length
                }
                clear() {
                    let e = this._list.length;
                    return this._list = new r, this._map = {}, e
                }
            }
        },
        32991: (e, t, i) => {
            i.d(t, {
                S: () => c
            });
            var a, s = i(8159),
                r = i(13059);
            ! function(e) {
                e.SHOWING = "showing", e.HIDDEN = "hidden", e.DISABLED = "disabled"
            }(a || (a = {}));
            var n = i(62004),
                o = i(12756);

            function l(e) {
                return {
                    id: e.id,
                    text: e.text
                }
            }
            let _ = "visible",
                d = "hidden",
                u = /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$|[A-Za-z]{2,3}-x-cc/;
            class c extends s.bk {
                constructor(e) {
                    super(), this._isVisible = !1, this._player = null, this._crossOrigin = null, this._currentVideoContent = null, this._unsubscribers = [], this._displayedCues = [], this._deactivateListeners = !1, this._activeLanguage = void 0, this._preferredLanguage = e.language.toLowerCase(), e.deactivateListeners && (this._deactivateListeners = !0), this._onEnter = this._onEnter.bind(this), this._onExit = this._onExit.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this.setPlayer(e.player)
                }
                _subscribeToCueEvents(e) {
                    var t;
                    let {
                        track: i
                    } = e;
                    if (!i) throw Error("No track");
                    if (!(null == (t = i.cues) ? void 0 : t.length)) {
                        let t = () => {
                            this._subscribeToCueEvents(e), e.removeEventListener("load", t)
                        };
                        e.addEventListener("load", t);
                        return
                    }
                    this._displayedCues = i.activeCues ? Array.from(i.activeCues) : [], this._emitDisplayedCues();
                    for (let e = 0; e < i.cues.length; e++) {
                        let t = i.cues[e];
                        t && (t.addEventListener("enter", this._onEnter), t.addEventListener("exit", this._onExit), this._unsubscribers.push(() => {
                            t.removeEventListener("enter", this._onEnter), t.removeEventListener("exit", this._onExit)
                        }))
                    }
                }
                _unsubscribeFromCueEvents() {
                    this._unsubscribers.forEach(e => e()), this._unsubscribers = []
                }
                _onEnter(e) {
                    let t = e.target;
                    this._displayedCues.indexOf(t) > -1 || (this._displayedCues.push(t), this._emitDisplayedCues())
                }
                _onExit(e) {
                    let t = e.target,
                        i = this._displayedCues.indexOf(t);
                    i > -1 && (this._displayedCues.splice(i, 1), this._emitDisplayedCues())
                }
                _emitDisplayedCues() {
                    this.emit(r.J.PLAYER_DISPLAYED_CUES_CHANGED, Object.assign({
                        cues: this._displayedCues.map(l)
                    }, (0, o.P)()))
                }
                _updateVisibleState() {
                    var e, t;
                    if (!this._player) return;
                    let i = this.getActiveLanguage();
                    Array.from(null != (t = null == (e = this._player) ? void 0 : e.querySelectorAll("track")) ? t : []).forEach(e => {
                        e.style.visibility = this._isVisible ? _ : d
                    });
                    let s = this._player.textTracks;
                    for (let e = 0, t = s.length; e < t; e++) {
                        let t = s[e];
                        t && (t.language.toLowerCase() === i ? t.mode = this._isVisible ? a.SHOWING : a.HIDDEN : t.mode = a.DISABLED)
                    }
                }
                _updateTextTracks() {
                    let e = this._player;
                    e && (e.readyState >= 1 ? this._switchActiveTextTrack() : this._currentVideoContent && e.addEventListener(r.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata))
                }
                _switchActiveTextTrack() {
                    let e = this._player;
                    if (!e || !this._currentVideoContent) return;
                    let t = this._updateActiveLanguage(),
                        i = null,
                        s = (0, n.L)(e.getElementsByTagName("track"));
                    for (let e of (this._unsubscribeFromCueEvents(), s)) e.default = !1, e.track.mode = a.DISABLED, e.srclang.toLowerCase() === t && (i = e);
                    i && (i.default = !0, i.track.mode = this._isVisible ? a.SHOWING : a.HIDDEN, this._deactivateListeners || this._subscribeToCueEvents(i))
                }
                _onLoadedMetadata() {
                    let e = this._player;
                    if (e && ((0, n.r)(e, "track"), this._currentVideoContent)) {
                        for (let {
                                lang: t,
                                url: i
                            } of (e.crossOrigin = "anonymous", this._updateActiveLanguage(), this._currentVideoContent.getSubtitles())) {
                            let a = document.createElement("track");
                            a.label = `${t} subtitles`, a.kind = "subtitles", a.srclang = t, a.src = i, a.style.visibility = this._isVisible ? _ : d, e.appendChild(a)
                        }
                        setTimeout(() => this._switchActiveTextTrack())
                    }
                }
                _updateActiveLanguage() {
                    if (!this._player || !this._currentVideoContent) {
                        this._activeLanguage = void 0, this._emitSubtitleLanguageChanged();
                        return
                    }
                    let e = this._currentVideoContent.getSubtitleLanguages(),
                        t = this._preferredLanguage.split("-")[0],
                        i = null;
                    for (let a of e) {
                        let e = a.toLowerCase();
                        if (e === this._preferredLanguage) return this._activeLanguage = e, this._emitSubtitleLanguageChanged(), this._activeLanguage;
                        e.split("-")[0] === t && null === i && (i = e)
                    }
                    return this._activeLanguage = null != i ? i : "en-us", this._emitSubtitleLanguageChanged(), this._activeLanguage
                }
                _emitSubtitleLanguageChanged() {
                    this.emit(r.J.SUBTITLE_MANAGER_LANGUAGE_CHANGED, Object.assign({
                        language: this._activeLanguage
                    }, (0, o.P)()))
                }
                getActiveLanguage() {
                    if (this._player && this._currentVideoContent) return this._activeLanguage
                }
                setVideoContent(e) {
                    var t;
                    this._unsubscribeFromCueEvents(), this._displayedCues = [], this._currentVideoContent = e, e ? this.emit(r.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, Object.assign({
                        languages: null != (t = e.getSubtitleLanguages()) ? t : []
                    }, (0, o.P)())) : this.clear(), this._updateTextTracks()
                }
                setPlayer(e) {
                    var t;
                    let i = (null == e ? void 0 : e.tagName) === "VIDEO" ? e : null;
                    this._player !== i && this.clear(), this._player = i || null, this._crossOrigin = null != (t = null == i ? void 0 : i.crossOrigin) ? t : null, this._updateTextTracks()
                }
                getAvailableLanguages() {
                    var e, t;
                    return null != (t = null == (e = this._currentVideoContent) ? void 0 : e.getSubtitleLanguages()) ? t : []
                }
                setLanguage(e) {
                    if (!e.length) throw TypeError("Argument `code` must be a non-empty string. Hide subtitles using `hideSubtitles()`.");
                    if (!u.test(e)) throw TypeError("Argument `code` must be a valid BCP 47 formatted language code");
                    this._preferredLanguage !== e.toLowerCase() && (this._preferredLanguage = e.toLowerCase(), this._switchActiveTextTrack())
                }
                hide() {
                    !1 !== this._isVisible && (this._isVisible = !1, this._updateVisibleState(), this.emit(r.J.SUBTITLE_MANAGER_VISIBILITY_CHANGED, Object.assign({
                        visible: this._isVisible
                    }, (0, o.P)())))
                }
                show() {
                    !0 !== this._isVisible && (this._isVisible = !0, this._updateVisibleState(), this.emit(r.J.SUBTITLE_MANAGER_VISIBILITY_CHANGED, Object.assign({
                        visible: this._isVisible
                    }, (0, o.P)())))
                }
                deactivateListeners() {
                    !this._deactivateListeners && this._player && (this._deactivateListeners = !0, this._unsubscribeFromCueEvents())
                }
                activateListeners() {
                    this._deactivateListeners && (this._deactivateListeners = !1, this._updateTextTracks())
                }
                areListenersActivated() {
                    return !this._deactivateListeners
                }
                clear() {
                    let e = this._player;
                    e && (this._unsubscribeFromCueEvents(), this._currentVideoContent = null, this._displayedCues = [], (0, n.r)(e, "track"), e.removeEventListener(r.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.crossOrigin = this._crossOrigin)
                }
                visible() {
                    return this._isVisible
                }
            }
        },
        33423: (e, t, i) => {
            var a;
            i.d(t, {
                    o: () => a
                }),
                function(e) {
                    e.MP3 = "MP3", e.MP4 = "MP4", e.MP4_DUAL = "MP4_DUAL", e.MP4_CBCS = "MP4_CBCS", e.MP4_FLAC = "MP4_FLAC", e.MANIFEST_ID = "MANIFEST_ID", e.AD_MANIFEST = "AD_MANIFEST", e.GENERIC_MEDIA = "GENERIC_MEDIA"
                }(a || (a = {}))
        },
        34036: (e, t, i) => {
            i.d(t, {
                VK: () => u,
                bF: () => d,
                gF: () => _
            });
            var a = i(59371),
                s = i(59554),
                r = i(94651),
                n = i(43555),
                o = i(89416),
                l = i(19428);

            function _(e) {
                if (!e) return;
                let t = e.__effective_codec || ("audio_codec" in e ? e.audio_codec : e.video_codec);
                return `${e.mime_type};codecs="${t}"`
            }

            function d(e) {
                return e ? "audio_bitrate" in e ? e.audio_bitrate : e.video_bitrate : 0
            }
            class u extends n.U {
                constructor(e) {
                    super(e), this._baseURL = "", this._fallbackURLs = [], this._loaded = !1, this._initTemplate = "", this._segmentTemplate = "", this._segmentLength = 0, this._assetID = "", this._segments = [], this._duration = 0, this._videoProfiles = {
                        selected: null,
                        available: [],
                        backgrounded: []
                    }, this._audioProfiles = {
                        selected: null,
                        available: []
                    }, this._subtitleLanguages = [], this._subtitleTemplate = "", this._trackingData = null, this._seekPanels = null, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = e.keySystemSettings, this._playabilityChecker = e.playabilityChecker, this._disallowCodec = e.disallowCodec, this._disallowProfile = e.disallowProfile, this._codecPriorities = e.codecPriorities, this._videoResolution = e.videoResolution, this._enableAbrOnElementSize = e.enableAbrOnElementSize, this._allowMixedAVC1Codecs = e.allowMixedAVC1Codecs, this._trackingData = e.trackingData, this._contentMetadata = e.metadata
                }
                _calculateSegments(e) {
                    this._duration = e.end_time_millis / 1e3;
                    let t = this._segmentLength;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !1,
                        timeStart: -1,
                        timeEnd: -1,
                        byteRanges: {}
                    };
                    let i = [];
                    for (let e = 0, a = 0; e < this._duration; a++, e += t) i.push({
                        index: a,
                        cacheBufferSet: !e && !this._disableCache,
                        timeStart: e,
                        timeEnd: e + t,
                        byteRanges: {}
                    });
                    this._segments = i;
                    let a = i[i.length - 1];
                    a && (a.isFinal = !0)
                }
                _parseManifest(e) {
                    var t, i, a, n;
                    let d, u, c = e.contents[0];
                    if (!c) return (d = new r.f(s.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable: no contents.")).track = this.toLogJSON(), Promise.reject(d);
                    if (this._fallbackURLs = e.base_urls.slice(), this._baseURL = null != (t = this._fallbackURLs.shift()) ? t : "", this._initTemplate = e.initialization_template, this._segmentTemplate = e.segment_template, this._segmentLength = c.segment_length, this._seekPanels = e.seekpanels || null, this._encodingId = null != (i = c.encoding_id) ? i : "", null == (a = c.encryption_infos) ? void 0 : a.length) {
                        let e, t = c.encryption_infos,
                            i = this._keySystemSettings.commonName;
                        for (let a = 0, s = t.length; a < s; a++) {
                            let s = t[a];
                            if (s && s.key_system === i) {
                                u = a, e = s.encryption_data, this._licenseEndpoint || (this._licenseEndpoint = `@webgate${s.license_server_endpoint}`);
                                break
                            }
                        }
                        if (!e) {
                            let e = [],
                                t = [];
                            return c.profiles.forEach(i => {
                                "audio_codec" in i ? e.push({
                                    bitrate: i.audio_bitrate,
                                    mimeType: _(i)
                                }) : t.push({
                                    bitrate: i.video_bitrate,
                                    mimeType: _(i)
                                })
                            }), (d = new r.f(s.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.", {
                                audio: e,
                                video: t
                            })).track = this.toLogJSON(), Promise.reject(d)
                        }
                        switch (this._keySystemSettings.commonName) {
                            case "widevine":
                            case "playready":
                                this._protection = "cenc";
                                try {
                                    this._pssh = (0, o.b)(e)
                                } catch (e) {
                                    return (d = new r.f(s.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(d)
                                }
                                break;
                            case "fairplay":
                                this._protection = "cbcs", this._pssh = new Uint8Array(0);
                                try {
                                    this._assetID = c.encoding_id
                                } catch (e) {
                                    return (d = new r.f(s.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(d)
                                }
                                break;
                            default:
                                {
                                    let e = [],
                                        t = [];
                                    return c.profiles.forEach(i => {
                                        "audio_codec" in i ? e.push({
                                            bitrate: i.audio_bitrate,
                                            mimeType: _(i)
                                        }) : t.push({
                                            bitrate: i.video_bitrate,
                                            mimeType: _(i)
                                        })
                                    }),
                                    (d = new r.f(s.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.", {
                                        audio: e,
                                        video: t
                                    })).track = this.toLogJSON(),
                                    Promise.reject(d)
                                }
                        }
                    }
                    return (0, l.QG)({
                        profiles: null != (n = c.profiles) ? n : [],
                        encryptionIndex: u,
                        strategy: this.strategy,
                        keySystem: this._keySystemInfo.keySystem,
                        disallowCodec: this._disallowCodec,
                        disallowProfile: this._disallowProfile,
                        codecPriorities: this._codecPriorities,
                        playabilityChecker: this._playabilityChecker
                    }).then(t => {
                        var i;
                        this._audioProfiles.available = t.audio, this._videoProfiles.available = t.video, this._videoProfiles.backgrounded = [], this._calculateSegments(e), this._subtitleLanguages = e.subtitle_language_codes || [], (null == (i = e.subtitle_base_urls) ? void 0 : i.length) && e.subtitle_template ? this._subtitleTemplate = `${e.subtitle_base_urls[0]}${e.subtitle_template}` : this._subtitleTemplate = ""
                    })
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    if (this._loaded) return e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this);
                    if (!this._fileId) throw TypeError("Missing: provide either fileId or resolvedURL");
                    let t = (0, a.X)();
                    return this._resolver.getManifest(this._fileId, this._noAuth).then(i => (e.resolveLatency = 0, e.manifestLatency = (0, a.r)(t), this._parseManifest(i))).then(() => (this._loaded = !0, this))
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                setVideoResolution(e) {
                    this._videoResolution = e
                }
                getMediaProfileInfo() {
                    return {
                        audio: this._audioProfiles,
                        video: this._videoProfiles
                    }
                }
                getSubtitles() {
                    return this._subtitleLanguages.map(e => ({
                        lang: e,
                        url: this._subtitleTemplate.replace("{{language_code}}", e)
                    }))
                }
                getSubtitleLanguages() {
                    return this._subtitleLanguages
                }
                getCurrentBitrates() {
                    var e, t, i, a;
                    return {
                        audio: null != (t = null == (e = this._audioProfiles.selected) ? void 0 : e.audio_bitrate) ? t : 0,
                        video: null != (a = null == (i = this._videoProfiles.selected) ? void 0 : i.video_bitrate) ? a : 0
                    }
                }
                getTrackingEvents() {
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
                getSeekPanels() {
                    return this._seekPanels
                }
            }
        },
        43555: (e, t, i) => {
            i.d(t, {
                U: () => a
            });
            class a {
                constructor(e) {
                    this._mediaType = e.mediaType, this._fileId = e.fileId, this._uri = e.uri, this._audioGain = e.audioGain, this._logData = e.logData, this._hasNonFatalErrors = !!e.hasNonFatalErrors, this._disableCache = e.disableCache, this._keySystemInfo = e.keySystemInfo, this._licenseEndpoint = e.licenseEndpoint, this._mediaFormat = e.mediaFormat, this._mediator = e.mediator, this._noAuth = e.noAuth, this._contentMetadata = e.contentMetadata
                }
                getFileId() {
                    return this._fileId
                }
                getEncodingId() {
                    return this._encodingId
                }
                getAudioGain() {
                    return this._audioGain
                }
                getMediaType() {
                    return this._mediaType
                }
                getLogData() {
                    return this._logData
                }
                setLogData(e) {
                    this._logData = e
                }
                toLogJSON() {
                    return {
                        uri: this._uri,
                        fileId: this._fileId,
                        mediaFormat: this._mediaFormat,
                        mediaURL: this._mediaURL
                    }
                }
                hasNonFatalErrors() {
                    return this._hasNonFatalErrors
                }
                getContentMetadata() {
                    return this._contentMetadata || {}
                }
                getInitParams() {
                    return this.isProtected() ? {
                        initDataType: this._protection,
                        initData: this._pssh
                    } : null
                }
                getKeySystemInfo() {
                    var e;
                    return null != (e = this._keySystemInfo) ? e : null
                }
                getLicenseEndpoint() {
                    var e;
                    return null != (e = this._licenseEndpoint) ? e : null
                }
            }
        },
        61943: (e, t, i) => {
            i.d(t, {
                T: () => s
            });
            let a = i(35520).m.forTag("playback.audio_processor");
            class s {
                constructor(e) {
                    if (this._audioContext = null, this._mediaElementSource = null, this._gainNode = null, this._nodes = [], null == e ? void 0 : e.disable) return void a.info("AudioProcessor disabled");
                    if (this._audioContext = (null == e ? void 0 : e.audioContext) || ("undefined" != typeof AudioContext ? new AudioContext : null), !this._audioContext) return void a.warn("The AudioContext API is not supported. Any future operation related to `AudioProcessor` will be skipped.");
                    this._gainNode = this._audioContext.createGain(), this._buildNodePipeline(null == e ? void 0 : e.nodes)
                }
                static create(e) {
                    return new s(e)
                }
                _setMediaElementSource(e) {
                    var t;
                    this._audioContext && (this._mediaElementSource && (a.info("Disconnecting previous media element source"), this._mediaElementSource.disconnect()), a.info("Creating new media element source"), this._mediaElementSource = this._audioContext.createMediaElementSource(e) || null, this._mediaElementSource.connect(null != (t = this._nodes[0]) ? t : this._audioContext.destination))
                }
                _buildNodePipeline(e = []) {
                    var t;
                    if (!this._audioContext) return;
                    for (let e of (a.info("Disconnecting previous nodes"), this._nodes)) e.disconnect();
                    let i = [this._gainNode, ...e],
                        s = null;
                    for (let e of i) s && s.connect(e), s = e;
                    null == (t = i[i.length - 1]) || t.connect(this._audioContext.destination), a.info("Node pipeline built"), this._nodes = i
                }
                setPlayer(e) {
                    var t;
                    if (e) {
                        if ((null == (t = this._mediaElementSource) ? void 0 : t.mediaElement) === e) return void a.info("The new player is the same as the current player");
                        this._setMediaElementSource(e)
                    }
                }
                getPlayer() {
                    var e;
                    return (null == (e = this._mediaElementSource) ? void 0 : e.mediaElement) || null
                }
                setAudioGain(e = 0) {
                    if (!this._gainNode) return a.info("The default gain node is not available"), !1;
                    let t = Math.pow(10, e / 20);
                    return this._gainNode.gain.value = t, a.info("Main gain set to", t), !0
                }
                getAudioContext() {
                    return this._audioContext
                }
                resume() {
                    return this._audioContext && "running" !== this._audioContext.state ? this._audioContext.resume() : Promise.resolve()
                }
                suspend() {
                    return this._audioContext && "suspended" !== this._audioContext.state ? this._audioContext.suspend() : Promise.resolve()
                }
                destroy() {
                    var e;
                    this._audioContext && (null == (e = this._mediaElementSource) || e.connect(this._audioContext.destination)), this._nodes = [], this._audioContext = null, this._gainNode = null, this._mediaElementSource = null, a.info("The AudioProcessor is destroyed")
                }
            }
        },
        62004: (e, t, i) => {
            i.d(t, {
                L: () => s,
                r: () => r
            });
            let a = Array.prototype.slice,
                s = "function" == typeof Array.from ? e => Array.from(e) : e => a.call(e);

            function r(e, t) {
                for (let i of s(e.getElementsByTagName(t))) e.removeChild(i)
            }
        },
        62385: (e, t, i) => {
            i.d(t, {
                K: () => n
            });
            var a = i(4898),
                s = i(34036),
                r = i(66548);
            class n {
                constructor(e) {
                    this._bandwidthEstimator = e.bandwidthEstimator
                }
                static create(e) {
                    return new n(e)
                }
                getSample(e, t) {
                    var i, n, o, l, _, d, u;
                    let c = this._bandwidthEstimator.getBandwidthEstimate(),
                        h = function(e, t) {
                            let i = e.length;
                            for (let a = 0; a < i; a++)
                                if (e.start(a) <= t && t <= e.end(a)) return (e.end(a) - t) * 1e3;
                            return 0
                        }(e.buffered, e.currentTime);
                    if ("audio" === t.getMediaType() && t.strategy === a.j.MSE) {
                        let e = null == (n = null == (i = t.getSegmentForTime(0)) ? void 0 : i.bufferSet) ? void 0 : n.audio,
                            a = null == e ? void 0 : e.bitrate;
                        return {
                            bandwidth: c,
                            bufferAvailability: h,
                            audio: {
                                mimeType: null == e ? void 0 : e.mimeType,
                                bitrate: a
                            }
                        }
                    }
                    if ((0, r.Pb)(t)) {
                        let {
                            audio: i,
                            video: a
                        } = t.getMediaProfileInfo(), r = "getVideoPlaybackQuality" in e ? e.getVideoPlaybackQuality() : {
                            creationTime: void 0,
                            droppedVideoFrames: void 0,
                            totalVideoFrames: void 0
                        };
                        return {
                            bandwidth: c,
                            bufferAvailability: h,
                            video: {
                                creationTime: r.creationTime,
                                droppedVideoFrames: r.droppedVideoFrames,
                                totalVideoFrames: r.totalVideoFrames,
                                bitrate: null == (o = a.selected) ? void 0 : o.video_bitrate,
                                availableBitrates: a.available.map(e => e.video_bitrate),
                                height: null == (l = a.selected) ? void 0 : l.video_height,
                                width: null == (_ = a.selected) ? void 0 : _.video_width,
                                resolution: null == (d = a.selected) ? void 0 : d.video_resolution,
                                mimeType: (0, s.gF)(a.selected)
                            },
                            audio: {
                                bitrate: null == (u = i.selected) ? void 0 : u.audio_bitrate,
                                mimeType: (0, s.gF)(i.selected)
                            }
                        }
                    }
                    return null
                }
            }
        },
        66548: (e, t, i) => {
            function a(e) {
                return !!e && "getSubtitles" in e && "getSubtitleLanguages" in e
            }

            function s(e) {
                return !!e && "getSeekPanels" in e
            }

            function r(e) {
                return !!e && "getMediaProfileInfo" in e
            }

            function n(e) {
                return !!e && "setVideoResolution" in e
            }

            function o(e) {
                return !!e && "getCurrentBitrates" in e && "canLowerBitrate" in e && "adapt" in e
            }

            function l(e) {
                return !!e && "getTrackingEventData" in e && "getTrackingEvents" in e
            }
            i.d(t, {
                Cj: () => l,
                Pb: () => r,
                TP: () => n,
                eq: () => a,
                ns: () => o,
                s3: () => s
            })
        },
        68312: (e, t, i) => {
            i.d(t, {
                A: () => S
            });
            var a, s = i(8159),
                r = i(84822),
                n = i(59371),
                o = i(13059),
                l = i(17211),
                _ = i(35520),
                d = i(59554),
                u = i(1188),
                c = i(12756);
            let h = _.m.forTag("playback.media_source_manager");

            function p(e) {
                if (!e) return "";
                let t = [];
                for (let i in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
                    let a = e[i] ? `="${e[i]}"` : "";
                    t.push(`${i}${a}`)
                }
                return t.length ? `; ${t.join("; ")}` : ""
            }
            class m extends s.bk {
                constructor(e) {
                    super(), this._mediaSource = null, this._sourceBuffers = {}, this._currentInitSegments = {}, this._updateQueue = [], this._playId = 0, this._lastBufferClearTime = (0, n.X)(), this._customSourceBufferParams = "";
                    let {
                        mimeTypes: t,
                        customSourceBufferParams: i,
                        disableBufferAbort: a
                    } = e;
                    this._mimeTypes = t, this._customSourceBufferParams = p(i), this._disableBufferAbort = !!a, this._onSourceOpen = this._onSourceOpen.bind(this), this._onSourceClose = this._onSourceClose.bind(this), this._onUpdateEnd = this._onUpdateEnd.bind(this), this.dequeueUpdates = this.dequeueUpdates.bind(this), e.noInit || this._init()
                }
                static create(e) {
                    return new m(e)
                }
                _init() {
                    this._mediaSource = new MediaSource, this._mediaSource.addEventListener(o.J.MEDIA_SOURCE_OPEN, this._onSourceOpen), this._mediaSource.addEventListener(o.J.MEDIA_SOURCE_CLOSE, this._onSourceClose), this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onSourceOpen() {
                    var e;
                    h.info("MediaSource opened.");
                    let t = this._mediaSource;
                    if ((null == (e = null == t ? void 0 : t.sourceBuffers) ? void 0 : e.length) === 0 && (null == t ? void 0 : t.readyState) === "open") {
                        let e = this._mimeTypes;
                        for (let i of (h.info("Creating source buffers for MIME types", e), ["video", "audio"])) {
                            let a = e[i];
                            if (a) {
                                let e = a + this._customSourceBufferParams;
                                try {
                                    let i = t.addSourceBuffer(e);
                                    i.addEventListener(o.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd), this._sourceBuffers[a] = i
                                } catch (e) {
                                    if ("QuotaExceededError" === e.name) throw u.i.fatal(d.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. User agent can not handle any more SourceBuffer objects.");
                                    if ("InvalidStateError" === e.name) throw u.i.fatal(d.I.PLAYER_PLAYBACK_ERROR, 'MediaSourceManager: addSourceBuffer() failed. MediaSource is not in the "open" readyState.');
                                    if ("NotSupportedError" === e.name) throw u.i.fatal(d.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. Given MIME type is not supported/compatible.");
                                    else throw u.i.fatal(d.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed.")
                                }
                            }
                        }
                    }
                    this.dequeueUpdates(), this.emit(o.J.BUFFER_SOURCE_OPEN, Object.assign({}, (0, c.P)()))
                }
                _onSourceClose() {
                    h.info("MediaSource closed."), this._destroySourceBuffers(), this.emit(o.J.BUFFER_SOURCE_CLOSE, Object.assign({}, (0, c.P)()))
                }
                _destroySourceBuffers() {
                    let e = this._mediaSource;
                    if (!e) return;
                    let t = e.sourceBuffers;
                    if (t.length)
                        for (let i = 0, a = t.length; i < a; i++) {
                            let a = t[i];
                            if (a) {
                                a.removeEventListener(o.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd);
                                try {
                                    e.removeSourceBuffer(a), h.info("Removed source buffer")
                                } catch (e) {
                                    h.warn("Failed to remove sourcebuffer", e)
                                }
                            }
                        }
                    this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onUpdateEnd() {
                    this.dequeueUpdates(), this.emit(o.J.BUFFER_UPDATE_END, Object.assign({}, (0, c.P)()))
                }
                _endUpdate(e) {
                    var t;
                    this._isUpdating() ? this._updateQueue.push(e) : (null == (t = this._mediaSource) ? void 0 : t.readyState) === "open" && (h.info("Signals end of stream."), this._mediaSource.endOfStream(), e.resolve && e.resolve(!0))
                }
                _durationUpdate(e) {
                    this._isUpdating() ? this._updateQueue.push(e) : (this._mediaSource && (this._mediaSource.duration = e.duration), e.resolve && e.resolve(!0))
                }
                _isUpdating() {
                    if (!this._mediaSource) return !1;
                    let e = this._mediaSource.sourceBuffers;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t];
                        if (i && i.updating) return !0
                    }
                    return !1
                }
                _appendUpdate(e) {
                    var t, i;
                    let a = this._sourceBuffers[e.mimeType];
                    if (!a || a.updating) return void this._updateQueue.push(e);
                    let s = e.buffer;
                    if (e.segment.init && this._currentInitSegments[e.mimeType] === e.profileId) {
                        null == (t = e.resolve) || t.call(e, !0), Promise.resolve().then(this.dequeueUpdates);
                        return
                    }
                    if (e.initBuffer && e.buffer && this._currentInitSegments[e.mimeType] !== e.profileId) {
                        let t = new Uint8Array(e.initBuffer.byteLength + e.buffer.byteLength);
                        t.set(new Uint8Array(e.initBuffer), 0), t.set(new Uint8Array(e.buffer), e.initBuffer.byteLength), s = t.buffer
                    }
                    try {
                        a.appendBuffer(s)
                    } catch (i) {
                        let t = !1;
                        "QuotaExceededError" === i.name ? (h.warn("Failed to append buffer: exceeded quota."), t = !0, this.emitSync(o.J.BUFFER_QUOTA_EXCEEDED, Object.assign({}, (0, c.P)()))) : h.warn("Failed to append buffer", i), new Promise(e => {
                            t ? setTimeout(e, 1e3) : e()
                        }).then(() => {
                            var t;
                            null == (t = e.reject) || t.call(e, i), this.dequeueUpdates()
                        }).then(() => {
                            e.init && this._updateQueue.push(e)
                        });
                        return
                    }
                    let r = s.byteLength > e.buffer.byteLength;
                    (e.segment.init || r) && (this._currentInitSegments[e.mimeType] = e.profileId), null == (i = e.resolve) || i.call(e, !0), r ? h.info(`Injected combined init segment and playable segment (${e.mimeType}, ${e.profileId})`) : e.init && h.info(`Injected individual init segment (${e.mimeType}, ${e.profileId})`)
                }
                _abortUpdate(e) {
                    var t;
                    null == (t = e.resolve) || t.call(e, !1), Promise.resolve().then(this.dequeueUpdates)
                }
                dequeueUpdates() {
                    let e = this._updateQueue.shift();
                    e && this.tryUpdate(e)
                }
                tryUpdate(e) {
                    if (e.playId !== this._playId) {
                        h.info("Try update dropped: playId has changed"), this._abortUpdate(e);
                        return
                    }
                    if (e.timestamp < this._lastBufferClearTime) {
                        h.info("Try update dropped: update is older than the last clear"), this._abortUpdate(e);
                        return
                    }
                    let t = this._mediaSource;
                    t && "open" !== t.readyState && "ended" !== t.readyState ? this._updateQueue.push(e) : "end" === e.type ? this._endUpdate(e) : "duration" === e.type ? this._durationUpdate(e) : "append" === e.type && this._appendUpdate(e)
                }
                appendBufferData(e, t, i, a = (0, n.X)()) {
                    let s = [];
                    if (e.audio) {
                        let r = (0, l.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: a,
                            segment: t,
                            type: "append",
                            profileId: e.audio.profileId,
                            buffer: e.audio.buffer,
                            initBuffer: e.audio.initBuffer,
                            mimeType: e.audio.mimeType,
                            init: !!t.init,
                            resolve: r.resolve,
                            reject: r.reject
                        }), s.push(r.promise)
                    }
                    if (e.video) {
                        let r = (0, l.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: a,
                            segment: t,
                            type: "append",
                            profileId: e.video.profileId,
                            buffer: e.video.buffer,
                            initBuffer: e.video.initBuffer,
                            mimeType: e.video.mimeType,
                            init: !!t.init,
                            resolve: r.resolve,
                            reject: r.reject
                        }), s.push(r.promise)
                    }
                    return Promise.all(s)
                }
                endOfStream(e) {
                    this._mediaSource && "ended" !== this._mediaSource.readyState && this.tryUpdate({
                        playId: e,
                        timestamp: (0, n.X)(),
                        type: "end"
                    })
                }
                abort(e = !1) {
                    if (this._lastBufferClearTime = (0, n.X)(), this._disableBufferAbort) return void h.info("MediaSource abort skipped; action disabled.");
                    let t = this._mediaSource;
                    if (t) {
                        let i = t.sourceBuffers;
                        for (let a = 0, s = i.length; a < s; a++) {
                            let s = i[a];
                            if ("open" === t.readyState && s) try {
                                s.abort();
                                let t = s.buffered;
                                if (e && t.length) {
                                    let e = t.start(0),
                                        i = t.end(t.length - 1);
                                    s.remove(e, i), h.info("Cleared buffer range", e, i)
                                }
                            } catch (e) {
                                h.warn("MediaSourceManager: sourceBuffer.abort() failed due to .abort() or .remove() operation.", e)
                            }
                        }
                    }
                    this._currentInitSegments = {}
                }
                destroy() {
                    let e = this._mediaSource;
                    e && (h.info("Source destroyed"), e.removeEventListener("sourceopen", this._onSourceOpen), e.removeEventListener("sourceclose", this._onSourceClose), this._destroySourceBuffers(), this._mediaSource = null)
                }
                recreate(e) {
                    this.abort(), this.destroy(), this._mimeTypes = e.mimeTypes, e.customSourceBufferParams && (this._customSourceBufferParams = p(e.customSourceBufferParams)), this._init()
                }
                setDuration(e) {
                    return new Promise(t => {
                        this.tryUpdate({
                            playId: this._playId,
                            timestamp: (0, n.X)(),
                            type: "duration",
                            duration: e,
                            resolve: t
                        })
                    })
                }
                getMediaSource() {
                    return this._mediaSource
                }
                setPlayId(e) {
                    this._playId = e
                }
                getPlayId() {
                    return this._playId
                }
            }
            let E = _.m.forTag("playback.buffer_fill_operation");
            class g {
                constructor(e) {
                    var t;
                    this._batchSize = 1, this._prioritizeFirst = !1, this._segmentsToAppend = [], this._abortController = (0, r.createAbortControllerLike)(), this.status = "pending", this.timeStart = e.timeStart, this.timeEnd = e.timeEnd, this.done = new Promise(e => {
                        this._resolveDone = e
                    }), this._getBufferedTimeRanges = e.getBufferedTimeRanges, this._getBufferSetForSegment = e.getBufferSetForSegment, this._getSegmentsForRange = e.getSegmentsForRange, this._appendBufferData = e.appendBufferData, this._batchSize = null != (t = e.batchSize) ? t : 1, this._prioritizeFirst = !!e.prioritizeFirst
                }
                _filterBufferedSegments(e) {
                    let t = this._getBufferedTimeRanges(),
                        i = [];
                    if (null == t ? void 0 : t.length) e: for (let a of e) {
                        let e = t.length;
                        for (; e--;) {
                            let i = t.start(e),
                                s = t.end(e);
                            if (i <= a.timeStart && (s >= a.timeEnd || s + 1e-5 > a.timeEnd)) continue e
                        }
                        i.push(a)
                    } else i = e;
                    return i
                }
                _fill(e, t = !1) {
                    var i;
                    if (e.aborted) return;
                    let a = this._segmentsToAppend,
                        s = a.length,
                        o = a.splice(0, t ? 1 : Math.max(1, this._batchSize));
                    if (!o.length) {
                        this.status = "ended", null == (i = this._resolveDone) || i.call(this);
                        return
                    }
                    E.log(`Segments to download: ${o.length}/${s}`);
                    let l = (0, n.X)();
                    Promise.all(o.map(t => this._getBufferSetForSegment(t, e).then(i => e.aborted ? Promise.resolve([!1]) : this._appendBufferData(i, t, l)))).then(t => {
                        var i, a;
                        if (!e.aborted) {
                            if (-1 !== [].concat(...t).indexOf(!1)) {
                                this.status = "failed", null == (i = this._resolveDone) || i.call(this), E.warn(`Fill operation ${this.timeStart}-${this.timeEnd} append failed.`), this._clear();
                                return
                            }
                            if (this._segmentsToAppend.length) return void this._fill(e);
                            this.status = "ended", null == (a = this._resolveDone) || a.call(this), this._clear()
                        }
                    }, e => {
                        var t;
                        if (e.code === r.TransportErrors.HTTP_REQUEST_ABORTED) {
                            this.status = "aborted";
                            return
                        }
                        this.status = "failed", null == (t = this._resolveDone) || t.call(this), this._clear(), E.warn(`Fill operation ${this.timeStart}-${this.timeEnd} failed.`, "QuotaExceededError" === e.name ? "Exceeded buffer quota" : e)
                    })
                }
                _clear() {
                    this._segmentsToAppend = []
                }
                start(e) {
                    var t;
                    if (this._abortController.signal.aborted || "pending" !== this.status) return this.done;
                    this.status = "started", E.log("Starting fill operation for range", this.timeStart, this.timeEnd);
                    let i = this._getSegmentsForRange(this.timeStart, this.timeEnd);
                    return (this._segmentsToAppend = (null == e ? void 0 : e.appendAll) ? i : this._filterBufferedSegments(i), this._segmentsToAppend.length) ? this._fill(this._abortController.signal, this._prioritizeFirst) : (E.warn("Fill operation ended early: all segments are buffered."), this.status = "ended", null == (t = this._resolveDone) || t.call(this)), this.done
                }
                abort() {
                    var e;
                    return "aborted" === this.status || ("started" === this.status && E.info(`Fill operation ${this.timeStart}-${this.timeEnd} aborted.`), this.status = "aborted", null == (e = this._resolveDone) || e.call(this), this._abortController.abort(), this._clear()), this
                }
            }! function(e) {
                e[e.AUDIO = 12] = "AUDIO", e[e.VIDEO = 20] = "VIDEO"
            }(a || (a = {}));
            class S extends s.bk {
                constructor(e, t = {}, i = {}) {
                    var s, r;
                    super(), this._bufferTarget = {
                        audio: a.AUDIO,
                        video: a.VIDEO
                    }, this._currentFillOperation = null, this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null, this._tracker = e;
                    let {
                        customSourceBufferParams: n,
                        noInit: l,
                        disableBufferAbort: _
                    } = i;
                    this._bufferTarget.audio = (null == (s = i.bufferTarget) ? void 0 : s.audio) || a.AUDIO, this._bufferTarget.video = (null == (r = i.bufferTarget) ? void 0 : r.video) || a.VIDEO, this._mediaSourceManager = m.create({
                        mimeTypes: t,
                        noInit: l,
                        customSourceBufferParams: n,
                        disableBufferAbort: _
                    }), this.proxyEmitAll(this._mediaSourceManager, {
                        [o.J.BUFFER_SOURCE_OPEN]: o.J.BUFFER_SOURCE_OPEN,
                        [o.J.BUFFER_SOURCE_CLOSE]: o.J.BUFFER_SOURCE_CLOSE,
                        [o.J.BUFFER_QUOTA_EXCEEDED]: o.J.BUFFER_QUOTA_EXCEEDED,
                        [o.J.BUFFER_UPDATE_END]: o.J.BUFFER_UPDATE_END
                    })
                }
                static create(e, t = {}, i = {}) {
                    return new S(e, t, i)
                }
                _trackBufferedSegment(e, t, i) {
                    let a = this._bufferedSegmentInfos;
                    a || (a = Array(i), this._bufferedSegmentInfos = a);
                    let s = {
                        timeStart: e.timeStart,
                        timeEnd: e.timeEnd,
                        index: e.index,
                        audio: t.audio ? {
                            profileId: t.audio.profileId,
                            mimeType: t.audio.mimeType,
                            bitrate: t.audio.bitrate
                        } : void 0,
                        video: t.video ? {
                            profileId: t.video.profileId,
                            mimeType: t.video.mimeType,
                            bitrate: t.video.bitrate,
                            width: t.video.videoWidth,
                            height: t.video.videoHeight,
                            resolution: t.video.resolution
                        } : void 0
                    };
                    a[e.index] = s
                }
                _trackBufferingProgress(e) {
                    e.audio && e.audio.buffer && this._tracker.trackBytesDownloaded(e.audio.buffer.byteLength), e.video && e.video.buffer && this._tracker.trackBytesDownloaded(e.video.buffer.byteLength)
                }
                _trackBufferURLs(e) {
                    var t, i, a, s, r, n;
                    (null == (t = e.audio) ? void 0 : t.bandwidth) !== null && this._tracker.trackBufferURL((null == (i = e.audio) ? void 0 : i.bufferURL) || "", {
                        bandwidth: (null == (a = e.audio) ? void 0 : a.bandwidth) || 0
                    }), (null == (s = e.video) ? void 0 : s.bandwidth) !== null && this._tracker.trackBufferURL((null == (r = e.video) ? void 0 : r.bufferURL) || "", {
                        bandwidth: (null == (n = e.video) ? void 0 : n.bandwidth) || 0
                    })
                }
                _bufferForTime(e, t, i, a) {
                    var s;
                    let n = this._mediaSourceManager,
                        l = n.getMediaSource();
                    if (!l || "closed" === l.readyState) return Promise.resolve();
                    null == (s = this._currentFillOperation) || s.abort();
                    let _ = n.getPlayId();
                    return this._currentFillOperation = new g({
                        timeStart: t,
                        timeEnd: i,
                        getBufferedTimeRanges: () => {
                            var e, t;
                            return null != (t = null == (e = l.sourceBuffers[l.sourceBuffers.length - 1]) ? void 0 : e.buffered) ? t : null
                        },
                        getBufferSetForSegment: (t, i) => e.getBufferSetForSegment(t, i).then(e => (this._trackBufferingProgress(e), this._trackBufferURLs(e), e), t => (_ === n.getPlayId() && t.code !== r.TransportErrors.HTTP_REQUEST_ABORTED && this.emit(o.J.BUFFER_APPEND_ERROR, Object.assign({
                            error: t,
                            canPlayNext: !0,
                            track: e.toLogJSON()
                        }, (0, c.P)())), Promise.reject(t))),
                        getSegmentsForRange: (t, i = 1 / 0) => e.getSegmentsForRange(t, i),
                        appendBufferData: (t, i, a) => n.appendBufferData(t, i, _, a).then(a => (this._trackBufferedSegment(i, t, e.getSegmentsCount()), i.isFinal && (null == a ? void 0 : a.indexOf(!1)) === -1 && this._mediaSourceManager.endOfStream(_), a)),
                        prioritizeFirst: null == a ? void 0 : a.prioritizeFirst
                    }), this._currentFillOperation.start({
                        appendAll: null == a ? void 0 : a.appendAll
                    })
                }
                dequeueUpdates() {
                    this._mediaSourceManager.dequeueUpdates()
                }
                abort(e = !1) {
                    var t;
                    null == (t = this._currentFillOperation) || t.abort(), this._currentFillOperation = null, this._mediaSourceManager.abort(e)
                }
                getMediaSource() {
                    return this._mediaSourceManager.getMediaSource()
                }
                destroy() {
                    this._mediaSourceManager.destroy()
                }
                checkBufferHealth(e, t, i) {
                    var a;
                    let s = this._currentFillOperation;
                    if (!(null == i ? void 0 : i.isSeeking) && (null == s ? void 0 : s.status) === "started") return;
                    let r = this._mediaSourceManager,
                        n = r.getMediaSource();
                    if (!n || "closed" === n.readyState) return;
                    let o = t;
                    if (o >= n.duration) {
                        let t = e.getFinalSegment();
                        t && (o = t.timeStart)
                    }
                    let l = function(e, t) {
                        var i;
                        let a = null == (i = e.sourceBuffers[e.sourceBuffers.length - 1]) ? void 0 : i.buffered;
                        if (a)
                            for (let e = 0; e < a.length; e++) {
                                let i = a.start(e),
                                    s = a.end(e);
                                if (i <= t && t <= s) return {
                                    start: i,
                                    end: s
                                }
                            }
                        return null
                    }(n, o);
                    if (l && !e.getSegmentAfterTime(l.end) && "ended" === n.readyState) return;
                    let _ = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio,
                        d = null != (a = null == l ? void 0 : l.end) ? a : o,
                        u = d - o;
                    if (u > _) return;
                    let c = d + (_ - u);
                    if (null == i ? void 0 : i.stopPosition) {
                        let e = i.stopPosition / 1e3;
                        if (c = Math.min(c, e), d >= e) {
                            "ended" !== n.readyState && r.endOfStream(r.getPlayId());
                            return
                        }
                    }(!s || "started" !== s.status || s.timeStart < d || s.timeEnd > c) && this._bufferForTime(e, d, c, {
                        prioritizeFirst: !l
                    })
                }
                forceBuffer(e, t) {
                    let i = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio;
                    this._bufferForTime(e, t, t + i, {
                        prioritizeFirst: !0,
                        appendAll: !0
                    })
                }
                isPositionInCurrentFillRange(e, t) {
                    let i = this._currentFillOperation;
                    if ((null == i ? void 0 : i.status) !== "started") return !1;
                    let a = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio;
                    return i.timeStart >= t || i.timeEnd >= t + a
                }
                recreate(e) {
                    this._mediaSourceManager.recreate({
                        mimeTypes: e
                    }), this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null
                }
                injectInitSegment(e) {
                    let t = this._mediaSourceManager,
                        i = t.getMediaSource();
                    if (!i || "closed" === i.readyState) return Promise.resolve(!1);
                    let a = e.getInitSegment();
                    if (!a) return Promise.resolve(!1);
                    let s = (0, n.X)(),
                        r = t.getPlayId();
                    return e.getInitBufferSet().then(e => t.appendBufferData(e, a, r, s)).then(() => !0)
                }
                setDuration(e) {
                    return this._mediaSourceManager.setDuration(e)
                }
                setPlayId(e) {
                    this._mediaSourceManager.setPlayId(e)
                }
                getBufferTarget() {
                    return this._bufferTarget
                }
                getBufferedSegmentInfoForTime(e) {
                    let t = this._bufferedSegmentInfos;
                    if (!(null == t ? void 0 : t.length)) return null;
                    let i = 0,
                        a = this._cachedBufferedSegmentInfo;
                    if (a && a.timeStart <= e) {
                        if (a.timeEnd >= e) return a;
                        let s = t[a.index + 1];
                        if (s && s.timeStart <= e && s.timeEnd >= e) return this._cachedBufferedSegmentInfo = s, s;
                        e >= a.timeEnd && (i = a.index + 1)
                    }
                    for (let a = t.length; i < a; i++) {
                        let a = t[i];
                        if (a && a.timeStart <= e && a.timeEnd >= e) return this._cachedBufferedSegmentInfo = a, a
                    }
                    return this._cachedBufferedSegmentInfo = null, null
                }
            }
        },
        71930: (e, t, i) => {
            i.d(t, {
                A: () => r,
                C: () => s
            });
            var a = i(19218);

            function s(e) {
                return a.wh[e] || null
            }

            function r(e) {
                return a.ct[e] || null
            }
        },
        75321: (e, t, i) => {
            i.d(t, {
                a: () => a
            });
            class a {
                constructor(e) {
                    this._pendingEvents = [], this._pendingGroupPositionMs = null, this._flushTimer = null, this._lastEmittedState = null, this._getCurrentPosition = e.getCurrentPosition, this._onFlush = e.onFlush
                }
                _addEvent(e) {
                    0 === this._pendingEvents.length && (this._pendingGroupPositionMs = this._getCurrentPosition()), this._pendingEvents.push(e), null !== this._flushTimer && clearTimeout(this._flushTimer), this._flushTimer = setTimeout(() => {
                        this._reconcileAndFlush()
                    }, 50)
                }
                _cancelPendingEvents() {
                    null !== this._flushTimer && (clearTimeout(this._flushTimer), this._flushTimer = null), this._pendingEvents = [], this._pendingGroupPositionMs = null
                }
                _reconcileAndFlush() {
                    let e, t;
                    if (0 === this._pendingEvents.length) return;
                    let i = !1,
                        a = !1;
                    for (let s of this._pendingEvents) "visibility" === s.type && void 0 !== s.visible ? (e = s.visible, i = !0) : "surface" === s.type && (t = s.videoSurface, a = !0);
                    let s = t;
                    !1 === e && (s = "unknown");
                    let r = this._pendingGroupPositionMs;
                    if (this._shouldSuppressEmission(e, s, r)) return void this._cancelPendingEvents();
                    this._onFlush({
                        hasVisibilityChange: i,
                        finalVisible: e,
                        hasSurfaceChange: a,
                        finalSurface: t,
                        effectiveSurface: s,
                        positionMs: r
                    }), this._lastEmittedState = {
                        visible: e,
                        videoSurface: s,
                        positionMs: r
                    }, this._cancelPendingEvents()
                }
                _shouldSuppressEmission(e, t, i) {
                    if (!this._lastEmittedState) return !1;
                    let a = this._lastEmittedState,
                        s = Math.abs(i - a.positionMs);
                    return e === a.visible && t === a.videoSurface && s < 250
                }
                addVisibilityEvent(e) {
                    this._addEvent({
                        type: "visibility",
                        visible: e
                    })
                }
                addSurfaceEvent(e) {
                    this._addEvent({
                        type: "surface",
                        videoSurface: e
                    })
                }
                flush() {
                    null !== this._flushTimer && (clearTimeout(this._flushTimer), this._flushTimer = null), this._reconcileAndFlush()
                }
                hasPendingEvents() {
                    return this._pendingEvents.length > 0
                }
            }
        },
        81750: (e, t, i) => {
            i.d(t, {
                R: () => o
            });
            class a {
                constructor(e) {
                    if (this._estimate = 0, this._totalWeight = 0, e < 0) throw TypeError("Halflife must be set to a positive value.");
                    this._weightingDecrease = Math.exp(Math.log(.5) / e)
                }
                sample(e, t) {
                    let i = Math.pow(this._weightingDecrease, e),
                        a = t * (1 - i) + i * this._estimate;
                    isNaN(a) || (this._estimate = a, this._totalWeight += t)
                }
                getEstimate() {
                    return this._estimate / (1 - Math.pow(this._weightingDecrease, this._totalWeight) || 1)
                }
            }
            var s = i(96152);
            class r {
                constructor(e = 4e5) {
                    this._totalBytes = 0, this._currentBandwidth = e, this._short = new a(2), this._long = new a(5), this._init()
                }
                _init() {
                    if ("undefined" == typeof navigator) return;
                    let e = navigator;
                    e.connection && e.connection.downlink && (this._currentBandwidth = 1e6 * e.connection.downlink, this._onConnectionChange = this._onConnectionChange.bind(this), e.connection.addEventListener("change", this._onConnectionChange))
                }
                _onConnectionChange(e) {
                    let t = e.target.downlink || 0;
                    this._setBandwidth(t)
                }
                _setBandwidth(e) {
                    this._currentBandwidth = 1e6 * e
                }
                getBandwidthEstimate() {
                    return this._totalBytes < 128e3 ? this._currentBandwidth : Math.min(this._short.getEstimate(), this._long.getEstimate())
                }
                sample(e, t) {
                    if (e < 16e3) return;
                    let i = t / 1e3,
                        a = 8 * e / i;
                    this._totalBytes += e, this._short.sample(i, a), this._long.sample(i, a)
                }
                reset() {
                    this._totalBytes = 0, this._currentBandwidth = 4e5, this._short = new a(2), this._long = new a(5), this.dispose(), this._init()
                }
                dispose() {
                    if ("undefined" == typeof navigator) return;
                    let e = navigator;
                    e.connection && e.connection.removeEventListener("change", this._onConnectionChange)
                }
            }
            let n = new r;
            "true" === s.env.DEBUG && (i.g.__harmonyBandwidthEstimator = n);
            class o {
                constructor(e) {
                    this._overrideBitrate = 0, this._sharedEstimator = null != e ? e : n
                }
                sample(e, t) {
                    this._sharedEstimator.sample(e, t)
                }
                getBandwidthEstimate() {
                    return this._overrideBitrate ? this._overrideBitrate : this._sharedEstimator.getBandwidthEstimate()
                }
                overrideBitrate(e) {
                    e <= 0 ? this._overrideBitrate = 0 : this._overrideBitrate = e
                }
            }
        },
        85910: (e, t, i) => {
            var a;
            i.d(t, {
                    T: () => a
                }),
                function(e) {
                    e.SUCCESS = "RESULT_SUCCESS", e.INVALID = "RESULT_INVALID", e.FORBIDDEN = "RESULT_FORBIDDEN", e.OUT_OF_BOUNDS = "RESULT_OUT_OF_BOUNDS", e.NO_LIST = "RESULT_NO_LIST", e.NO_TRACK = "RESULT_NO_TRACK", e.LIST_END = "RESULT_LIST_END", e.INVALID_TRACK = "RESULT_INVALID_TRACK", e.CANCELLED = "CANCELLED", e.NO_TRACK_PLAYER = "NO_TRACK_PLAYER"
                }(a || (a = {}))
        },
        89416: (e, t, i) => {
            i.d(t, {
                b: () => _
            });
            let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                s = {},
                r = {};
            ! function() {
                for (let e = 0, t = a.length; e < t; ++e) r[a[e]] = e;
                for (let e = 0; e < 16; ++e) s["0123456789abcdef" [e]] = e;
                for (let e = 0; e < 16; ++e) s["0123456789ABCDEF" [e]] = e
            }();
            let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                o = (() => {
                    let e = [];
                    for (let t = 0; t < 256; ++t) e[t] = 255;
                    for (let t = 0; t < n.length; ++t) e[n.charCodeAt(t)] = t;
                    return String.fromCharCode(...e)
                })(),
                l = function(e) {
                    let t, i, a = String(e),
                        s = [],
                        r = a.length,
                        n = 0;
                    for (;;) {
                        do t = o.charCodeAt(255 & a.charCodeAt(n++)); while (255 === t && n < r);
                        do i = o.charCodeAt(255 & a.charCodeAt(n++)); while (255 === i && n < r);
                        if (255 === i) break;
                        s.push((t << 2 | i >> 4) & 255);
                        do t = o.charCodeAt(255 & a.charCodeAt(n++)); while (255 === t && n < r);
                        if (255 === t) break;
                        s.push((i << 4 | t >> 2) & 255);
                        do i = o.charCodeAt(255 & a.charCodeAt(n++)); while (255 === i && n < r);
                        if (255 === i) break;
                        s.push((t << 6 | i) & 255)
                    }
                    if (s.length < 4096) return String.fromCharCode(...s);
                    let l = 0,
                        _ = [];
                    do _.push(String.fromCharCode(...s.slice(l, l + 4096))), l += 4096; while (l < s.length);
                    return _.join("")
                };

            function _(e) {
                let t = l(e),
                    i = new Uint8Array(t.length);
                for (let e = 0, a = t.length; e < a; e++) i[e] = t.charCodeAt(e);
                return i
            }
            "undefined" != typeof window && window.btoa && window.atob && (l = e => window.atob(e))
        },
        94651: (e, t, i) => {
            i.d(t, {
                f: () => s
            });
            var a = i(59554);
            class s extends Error {
                constructor(e = a.I.STORAGE_ERROR, t = "File Error", i = {}) {
                    super(t), this.canPlayNext = !0, this.debug = {}, this.code = e, this.message = t, this.debug = i, this.name = "FileError"
                }
            }
        },
        98421: (e, t, i) => {
            i.d(t, {
                bi: () => s,
                pM: () => n,
                LW: () => E,
                jb: () => y,
                Pv: () => O,
                nD: () => io,
                jA: () => ir,
                xj: () => is,
                KT: () => ia
            });
            var a, s, r, n, o, l, _, d, u, c, h, p, m, E, g, S, T, f, y, I, v, P, A, R, L, b, D, O, N = i(20268);
            ! function(e) {
                e.HARMONY_NO_TRACKS_LOADED = "HARMONY_NO_TRACKS_LOADED", e.HARMONY_OPERATION_FORBIDDEN = "HARMONY_OPERATION_FORBIDDEN", e.HARMONY_LOCAL_PLAYER_DISABLED = "HARMONY_LOCAL_PLAYER_DISABLED", e.HARMONY_INVALID_DESCRIPTOR_ID = "HARMONY_INVALID_DESCRIPTOR_ID", e.HARMONY_INVALID_MEDIA_TYPE = "HARMONY_INVALID_MEDIA_TYPE", e.CONNECTAPI_CLIENT_INVALID_ARGUMENTS = "CONNECTAPI_CLIENT_INVALID_ARGUMENTS", e.CONNECTAPI_CLIENT_MISSING_DEVICE_ID = "CONNECTAPI_CLIENT_MISSING_DEVICE_ID", e.CONNECTAPI_CLIENT_NO_CONNECTION_ID = "CONNECT_API_CLIENT_NO_CONNECTION_ID", e.CONNECTAPI_CLIENT_NO_DEVICE = "CONNECTAPI_CLIENT_NO_DEVICE", e.CONNECTAPI_CLIENT_NO_SESSION_ID = "CONNECTAPI_CLIENT_NO_SESSION_ID", e.CONNECTAPI_CLIENT_NO_STATE = "CONNECTAPI_CLIENT_NO_STATE", e.CONNECTAPI_CLIENT_INVALID_POSITION = "CONNECT_API_CLIENT_INVALID_POSITION", e.CONNECTAPI_CLIENT_INVALID_VOLUME = "CONNECT_API_CLIENT_INVALID_VOLUME", e.CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED = "CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED", e.CONNECTAPI_REGISTRATION_FAILED_WITH_STATUS = "CONNECTAPI_REGISTRATION_FAILED_WITH_STATUS", e.CONNECTAPI_CLIENT_ACK_TIMEOUT = "CONNECTAPI_CLIENT_ACK_TIMEOUT", e.SOCIAL_CONNECT_FAILED_WITH_STATUS = "SOCIAL_CONNECT_FAILED_WITH_STATUS", e.QUEUE_MANAGER_NO_STATE = "QUEUE_MANAGER_NO_STATE", e.QUEUE_OPERATION_FORBIDDEN = "QUEUE_OPERATION_FORBIDDEN", e.QUEUE_OPERATION_STALE_REVISION = "QUEUE_OPERATION_STALE_REVISION", e.TP_NO_RESPONSE_BODY = "TP_NO_RESPONSE_BODY", e.TP_REGISTRATION_FAILED_NON_PREMIUM = "TP_REGISTRATION_FAILED_NON_PREMIUM", e.TP_REGISTRATION_FAILED_WITH_STATUS = "TP_REGISTRATION_FAILED_WITH_STATUS", e.TP_STATE_UPDATE_FAILED = "TP_STATE_UPDATE_FAILED", e.TP_MAX_SUBSCRIPTIONS_REACHED = "TP_MAX_SUBSCRIPTIONS_REACHED", e.TP_UPDATE_REQUEST_EMPTY_RESPONSE = "TP_UPDATE_REQUEST_EMPTY_RESPONSE", e.TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS = "TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS", e.TP_SET_OPTIONS_FAILED_WITH_STATUS = "TP_SET_OPTIONS_FAILED_WITH_STATUS", e.TP_UNKNOWN_COMMAND = "TP_UNKNOWN_COMMAND", e.TP_CANNOT_CREATE_STATE_REF = "TP_CANNOT_CREATE_STATE_REF", e.TP_MISSING_INITIAL_STATE = "TP_MISSING_INITIAL_STATE", e.TP_INVALID_STATE_REFERENCE = "TP_INVALID_STATE_REFERENCE", e.TP_CONFLICT_REQUEST_FAILED_WITH_STATUS = "TP_CONFLICT_REQUEST_FAILED_WITH_STATUS"
            }(a || (a = {}));
            var C = i(59554);
            i(5372);
            var k = i(84822),
                M = i(8159),
                U = i(17211),
                w = i(59371);
            let F = "@local";
            ! function(e) {
                e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_ERROR = "authentication_error", e.AUTOPLAY_FAILED = "autoplay_failed", e.BEFORE_DISCONNECT = "before_disconnect", e.BEFORE_VOLUME_CHANGE = "before_volume_change", e.BUFFER_STALLED = "stalled", e.BUFFERING_END = "buffering_end", e.BUFFERING_START = "buffering_start", e.REBUFFERING_END = "rebuffering_end", e.REBUFFERING_START = "rebuffering_start", e.CONNECTED = "connected", e.CONNECTION_ERROR = "connection_error", e.DEVICES_CHANGED = "devices_changed", e.DEVICE_DEACTIVATED = "device_deactivated", e.DEVICE_DESCRIPTOR_CHANGED = "descriptor_changed", e.DISCONNECTED = "disconnected", e.DISPLAYED_CUES_CHANGED = "displayed_cues_changed", e.DURATION_CHANGED = "duration_changed", e.ERROR = "error", e.LAST_ACTIVE_DEVICE_INFO_CHANGED = "last_active_device_info_changed", e.LOCAL_CONTEXT_ENDED = "local_context_ended", e.LOCAL_PLAYER_DISABLED = "local_player_disabled", e.LOCAL_PLAYER_ENABLED = "local_player_enabled", e.LOCAL_PLAYER_LOGGED_OUT = "local_player_logged_out", e.LOGGED_OUT = "logged_out", e.MAX_LIST_ERRORS_REACHED = "max_list_errors_reached", e.MAX_SUBSCRIPTIONS_REACHED = "max_subscriptions_reached", e.PLAYBACK_CAPPED = "playback_capped", e.PLAYER_INITIALIZATION_DONE = "player_initialization_done", e.PLAYER_INITIALIZATION_FAILED = "player_initialization_failed", e.PLAYING_PROFILE_CHANGED = "playing_profile_changed", e.PRODUCT_STATE_CHANGED = "product_state_changed", e.PROGRESS = "progress", e.PLAYER_QUEUE_CHANGED = "player_queue_changed", e.RECONNECTED = "reconnected", e.RECONNECTING = "reconnecting", e.REMOTE_OBSERVER_DISABLED = "remote_observer_disabled", e.REMOTE_OBSERVER_ENABLED = "remote_observer_enabled", e.REPORTING_START = "reporting_start", e.REPORTING_FIRST_QUARTILE = "reporting_first_quartile", e.REPORTING_MIDPOINT = "reporting_midpoint", e.REPORTING_THIRD_QUARTILE = "reporting_third_quartile", e.REPORTING_COMPLETE = "reporting_complete", e.REPORTING_PAUSE = "reporting_pause", e.REPORTING_RESUME = "reporting_resume", e.REPORTING_CREATIVE_VIEW = "reporting_creative_view", e.REPORTING_ERROR = "reporting_error", e.SERVICE_REGISTRATION_ERROR = "service_registration_error", e.SPEED_CHANGED = "speed_changed", e.STATE_CHANGED = "state_changed", e.STOPPED_ON_BACKGROUND = "stopped_on_background", e.SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded", e.SEEK_PANELS_LOADED = "seek_panels_loaded", e.TRACK_ENDED = "track_ended", e.UNRECOVERABLE_FAILURE = "unrecoverable_failure", e.VIDEO_ELEMENT_APPENDED = "video_element_appended", e.VIDEO_ELEMENT_REMOVED = "video_element_removed", e.VOLUME_CHANGED = "volume_changed", e.MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.PLAYER_VISIBILITY_CHANGED = "visibility_changed", e.VIDEO_VISIBILITY_CHANGED = "video_visibility_changed", e.VIDEO_SURFACE_CHANGED = "video_surface_changed"
            }(s || (s = {})),
            function(e) {
                e.CONNECT_API = "connect-api", e.HARMONY = "harmony", e.PLAYBACK = "playback", e.TRACK_PLAYBACK = "track-playback", e.TRANSPORT = "transport"
            }(r || (r = {})),
            function(e) {
                e[e.OFF = 0] = "OFF", e[e.CONTEXT = 1] = "CONTEXT", e[e.TRACK = 2] = "TRACK"
            }(n || (n = {})),
            function(e) {
                e.INCOMPATIBLE = "incompatible", e.UNAVAILABLE = "unavailable", e.AD_PLAYING = "ad_playing", e.NARRATION = "narration", e.WAKING_UP = "waking_up", e.TIMED_OUT_WAKEUP = "timed_out_wakeup", e.PREMIUM_REQUIRED = "premium_required", e.NOT_INSTALLED = "not_installed", e.UNSUPPORTED = "unsupported", e.NOT_AUTHORIZED = "not_authorized", e.MANAGED_ACCOUNT_ON_DISALLOWED_DEVICE = "managed_account_on_disallowed_device", e.UNSUPPORTED_VERSION = "unsupported_version", e.MEDIA_DISALLOW = "media_disallow"
            }(o || (o = {}));
            class B extends Error {
                constructor(e, t) {
                    super(t), this.status = -1, this.unrecoverable = !1, this.debug = {}, this.code = e, this.name = "HarmonyError"
                }
                static fatal(e, t) {
                    let i = new B(e, t);
                    return i.unrecoverable = !0, i
                }
            }

            function Y(e, t) {
                return !e && !t || !!e && !!t && e.id === t.id && e.is_active === t.is_active && e.is_controllable === t.is_controllable && e.is_observable === t.is_observable && e.is_being_activated === t.is_being_activated && e.local === t.local && e.name === t.name && e.type === t.type && e.version === t.version && e.volume === t.volume
            }! function(e) {
                e.APPLOAD = "appload", e.BACK_BUTTON = "backbtn", e.CAPPED = "capped", e.CLICK_ROW = "clickrow", e.CLICK_SIDE = "clickside", e.END_PLAY = "endplay", e.FORWARD_BUTTON = "fwdbtn", e.LOGOUT = "logout", e.PLAY_BUTTON = "playbtn", e.POPUP = "popup", e.REMOTE = "remote", e.SEEK = "seek", e.TRACK_DONE = "trackdone", e.TRACK_ERROR = "trackerror", e.UNEXPECTED_EXIT = "unexpected-exit", e.UNEXPECTED_EXIT_WHILE_PAUSE = "unexpected-exit-while-pause", e.UNKNOWN = "unknown", e.URI_OPEN = "uriopen"
            }(l || (l = {}));
            class V extends Error {
                constructor(e, t) {
                    super(t), this.unrecoverable = !1, this.code = e, this.name = "PlayerQueueError"
                }
            }

            function x(e, t = {
                isCurrentTrack: !1,
                ignoreMetaForTrack: !1
            }) {
                var i, a, s, r, n, o;
                let l = [],
                    _ = [],
                    d = !1,
                    u = !1;
                if (!(null == e ? void 0 : e.length)) return {
                    items: l,
                    tracks: _,
                    hasQueuedTracks: d
                };
                for (let c of e) {
                    let e = "spotify:delimiter" === c.uri || /^spotify:meta:/.test(c.uri) ? "meta" : "track",
                        h = `${c.uid}:::${null!=(a=null==(i=c.metadata)?void 0:i.iteration)?a:""}`,
                        p = {
                            type: e,
                            uri: c.uri,
                            uid: c.uid,
                            qid: h,
                            metadata: c.metadata || {},
                            hidden: (null == (s = c.metadata) ? void 0 : s.hidden) === "true",
                            hidden_in_queue: (null == (r = c.metadata) ? void 0 : r.hidden_in_queue) === "true" && !t.isCurrentTrack,
                            queued: (null == (n = c.metadata) ? void 0 : n.is_queued) === "true",
                            provider: c.provider,
                            removed_reasons: c.removed,
                            $blck_rs: c.blocked
                        };
                    p.queued && (d = !0), l.push(p), "meta" === p.type ? u = !0 : !t.ignoreMetaForTrack && u || "track" !== p.type || p.hidden || (null == (o = p.removed_reasons) ? void 0 : o.length) || p.hidden_in_queue || _.push(p)
                }
                return {
                    items: l,
                    tracks: _,
                    hasQueuedTracks: d
                }
            }

            function G(e, t = {}) {
                if (!Array.isArray(e)) throw TypeError("Items is not an array.");
                if (!e.length) return [];
                let i = [];
                for (let a of e) {
                    if (!a) continue;
                    "string" == typeof a && (a = {
                        type: "track",
                        uri: a
                    });
                    let e = {
                        uri: a.uri,
                        uid: a.uid,
                        metadata: a.metadata || {},
                        removed: a.removed_reasons,
                        blocked: a.$blck_rs,
                        provider: a.provider
                    };
                    (a.queued || t.queued) && (e.metadata.is_queued = "true", e.provider = "queue"), (a.hidden || "meta" === a.type) && (e.metadata.hidden = "true"), a.hidden_in_queue && (e.metadata.hidden_in_queue = "true"), i.push(e)
                }
                return i
            }

            function H(e) {
                let [t, i] = e.split(":::"), a = {
                    type: "track",
                    uid: t
                };
                return i && (a.metadata = {
                    iteration: i
                }), a
            }
            class j extends M.bk {
                constructor(e) {
                    super(), this._hasInitialState = !1, this._reportInactiveQueues = !1, this._onlyLocalQueue = !1, this._currentPlayerState = null, this._currentInternalQueue = null, this._currentQueue = null, this._hasQueuedTracks = !1, this._connectClient = e.connectClient, this._runner = e.runner || (e => e()), this._parsePlayerState = this._parsePlayerState.bind(this), this._onlyLocalQueue = !!e.onlyLocalQueue, this._reportInactiveQueues = !!e.reportInactiveQueues, this._connectClient.on("player_state_changed", this._onPlayerStateChanged.bind(this)), this._parsePlayerState(e.initialContextPlayerState)
                }
                static create(e) {
                    return new j(e)
                }
                _onPlayerStateChanged(e) {
                    let {
                        playerState: t,
                        orphaned: i,
                        isLocal: a
                    } = e.data;
                    this._parsePlayerState(t, i, a)
                }
                _parsePlayerState(e, t, i) {
                    var a, r, n;
                    if (this._hasInitialState = !0, this._onlyLocalQueue && !i || !this._reportInactiveQueues && t) this._currentPlayerState = null, this._currentInternalQueue = null, this._currentQueue = null;
                    else if (this._currentPlayerState = null != e ? e : null, e) {
                        if (e.queue_revision === (null == (a = this._currentInternalQueue) ? void 0 : a.revision)) return null;
                        this._hasQueuedTracks = !1;
                        let t = {
                                ignoreMetaForTrack: null == (r = e.options) ? void 0 : r.repeating_context
                            },
                            i = e.queue_revision,
                            s = x([e.track], {
                                isCurrentTrack: !0
                            }).items[0],
                            o = x(e.next_tracks, t),
                            l = x(e.prev_tracks, t);
                        this._hasQueuedTracks = o.hasQueuedTracks;
                        let _ = {
                            uri: e.context_uri,
                            metadata: null != (n = e.context_metadata) ? n : void 0
                        };
                        this._currentInternalQueue = {
                            revision: i,
                            context: _,
                            current_track: s,
                            next_items: o.items,
                            previous_items: l.items
                        }, this._currentQueue = {
                            revision: i,
                            context: _,
                            current_track: s,
                            next_tracks: o.tracks,
                            previous_tracks: l.tracks
                        }
                    } else this._hasQueuedTracks = !1, this._currentInternalQueue = null, this._currentQueue = null;
                    return this.emit(s.PLAYER_QUEUE_CHANGED, {
                        internalPlayerQueue: this._currentInternalQueue,
                        playerQueue: this._currentQueue
                    }), this._currentInternalQueue
                }
                _setQueueNext(e, t) {
                    var i;
                    let s = this._currentPlayerState;
                    if (!s) return Promise.reject(new V(a.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    let r = {
                            next_tracks: e,
                            prev_tracks: s.prev_tracks,
                            queue_revision: s.queue_revision
                        },
                        n = null == (i = s.restrictions) ? void 0 : i.disallow_set_queue_reasons;
                    return this._runner(() => n && n.length ? Promise.reject(new V(a.QUEUE_OPERATION_FORBIDDEN, "Cannot perform operation; SetQueueCommand is not allowed.")) : this._connectClient.setQueue(r, t), t)
                }
                _insertQueuedWhenEmpty(e, t, i) {
                    var a, s, r, n;
                    let o = (null == (s = null == (a = t[0]) ? void 0 : a.metadata) ? void 0 : s.is_narration) === "true",
                        l = (null == (r = null == i ? void 0 : i.metadata) ? void 0 : r.is_narration) === "true";
                    if (l || o)
                        if (l && !o) t.splice(1, 0, ...e);
                        else {
                            let i = -1;
                            for (let e = 0, a = t.length; e < a; e++) {
                                let a = t[e];
                                if ((null == (n = null == a ? void 0 : a.metadata) ? void 0 : n.is_narration) === "true") {
                                    i = e + 1;
                                    break
                                }
                            }
                            return -1 === i ? void t.unshift(...e) : void t.splice(i + 1, 0, ...e)
                        }
                    else t.unshift(...e)
                }
                _insertQueued(e, t) {
                    var i, s;
                    let r = this._currentPlayerState;
                    if (!r) return Promise.reject(new V(a.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    let n = Array.from(null != (i = r.next_tracks) ? i : []);
                    if (this._hasQueuedTracks) {
                        let t = !1;
                        for (let i = 0, a = n.length; i < a; i++) {
                            let a = n[i];
                            if ((null == (s = null == a ? void 0 : a.metadata) ? void 0 : s.is_queued) !== "true") {
                                n.splice(i, 0, ...e), t = !0;
                                break
                            }
                        }
                        t || n.push(...e)
                    } else {
                        let t = r.track;
                        this._insertQueuedWhenEmpty(e, n, t)
                    }
                    return this._setQueueNext(n, t)
                }
                getInternalPlayerQueue() {
                    return this._hasInitialState ? Promise.resolve(this._currentInternalQueue) : new Promise(e => {
                        this.on(s.PLAYER_QUEUE_CHANGED, t => {
                            e(t.data.internalPlayerQueue)
                        })
                    })
                }
                getPlayerQueue() {
                    return this._hasInitialState ? Promise.resolve(this._currentQueue) : new Promise(e => {
                        this.on(s.PLAYER_QUEUE_CHANGED, t => {
                            e(t.data.playerQueue)
                        })
                    })
                }
                setInternalPlayerQueue(e, t, i = {
                    ignoreRevision: !1
                }) {
                    if (!this._currentPlayerState) return Promise.reject(new V(a.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    if (e.revision !== this._currentPlayerState.queue_revision && !i.ignoreRevision) return Promise.reject(new V(a.QUEUE_OPERATION_STALE_REVISION, "Cannot perform operation; revision is stale."));
                    let s = {
                        next_tracks: G(e.next_items),
                        prev_tracks: G(e.previous_items),
                        queue_revision: i.ignoreRevision ? void 0 : this._currentPlayerState.queue_revision
                    };
                    return this._runner(() => this._connectClient.setQueue(s, t), t)
                }
                addToQueue(e, t) {
                    var i;
                    let s = this._currentPlayerState;
                    if (!s) return Promise.reject(new V(a.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Argument `items` must be an array."));
                    let r = G(e, {
                            queued: !0
                        }),
                        n = null == (i = s.restrictions) ? void 0 : i.disallow_add_to_queue_reasons;
                    return r.length ? 1 === r.length ? this._runner(() => n && n.length ? Promise.reject(new V(a.QUEUE_OPERATION_FORBIDDEN, "Cannot perform operation; AddToQueueCommand is not allowed.")) : this._connectClient.addToQueue(r[0], t), t) : this._insertQueued(r, t) : Promise.resolve(!1)
                }
                removeNext(e, t) {
                    var i, s, r;
                    let n, o = this._currentPlayerState;
                    if (!o) return Promise.reject(new V(a.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    n = "string" == typeof e ? H(e) : e;
                    let l = Array.from(null != (i = o.next_tracks) ? i : []),
                        _ = l.length;
                    for (let e = 0; e < _; e++) {
                        let t = l[e];
                        if ((null == t ? void 0 : t.uid) === n.uid && (null == (s = null == t ? void 0 : t.metadata) ? void 0 : s.iteration) === (null == (r = n.metadata) ? void 0 : r.iteration)) {
                            l.splice(e, 1);
                            break
                        }
                    }
                    return l.length === _ ? Promise.resolve(!1) : this._setQueueNext(l, t)
                }
            }
            let J = {
                tagged: "4.75.0-17c433860",
                version: "4.75.0",
                revision: "17c433860"
            };
            class K extends M.bk {
                constructor(e) {
                    super(), this._hasFakeState = !1, this._localPlayerEnabled = !1, this._localPlayback = !1, this._forceRemoteActions = !1, this._lastDeviceList = [], this._deferredStreamer = (0, U.u)(), this._throttledSeek = function(e, t, i) {
                        let a;
                        return (...e) => {
                            let s = (0, w.X)();
                            if (!a || s - a >= 100) return a = s, t.apply(i, e)
                        }
                    }(0, this._seek, this), this._client = e.client, this._streamer = e.streamer, this._controller = e.controller, this._hidden = !!e.hidden, this._onlyLocalState = !!e.onlyLocalState, this._preferController = !this._onlyLocalState && !!e.preferControllerState, this._claimInactivePlayerStates = !!e.claimInactivePlayerStates, this._enableControllerWithoutStreamer = !!e.enableControllerWithoutStreamer, this._autoActivateElement = !!e.autoActivateElement, this._deactivateOnStop = !!e.experimentalDeactivateOnStop, this._forceRemoteActions = !!e.forceRemoteActions, this._parseDeviceList = this._parseDeviceList.bind(this), this._init()
                }
                static create(e) {
                    return new K(e)
                }
                _init() {
                    this._createStreamerDeferred();
                    let e = this._client;
                    e.on("error", this._onError.bind(this)), this.proxyEmit(e, "authenticated", s.AUTHENTICATED), this.proxyEmit(e, "authentication_error", s.AUTHENTICATION_ERROR), this.proxyEmit(e, "before_disconnect", s.BEFORE_DISCONNECT), this.proxyEmit(e, "connected", s.CONNECTED), this.proxyEmit(e, "connection_error", s.CONNECTION_ERROR), this.proxyEmit(e, "descriptor_changed", s.DEVICE_DESCRIPTOR_CHANGED), this.proxyEmit(e, "product_state_changed", s.PRODUCT_STATE_CHANGED), this.proxyEmit(e, "reconnected", s.RECONNECTED), this.proxyEmit(e, "reconnecting", s.RECONNECTING), this.proxyEmit(e, "unrecoverable_failure", s.UNRECOVERABLE_FAILURE), this.proxyEmit(e, "logged_out", s.LOGGED_OUT);
                    let t = this._controller,
                        i = e => {
                            this._onDeviceStateChanged(e.data)
                        };
                    t.on("device_info_changed", i), t.on("devices_changed", this._onDevicesChanged.bind(this)), t.on("state_changed", this._onPlayerStateChanged.bind(this)), t.on("progress", this._onControllerProgress.bind(this)), this.proxyEmitAll(t, {
                        max_subscriptions_reached: s.MAX_SUBSCRIPTIONS_REACHED,
                        device_deactivated: s.DEVICE_DEACTIVATED
                    }), t.on("registered", this.emit.bind(this, s.REMOTE_OBSERVER_ENABLED, null)), t.on("deregistered", this.emit.bind(this, s.REMOTE_OBSERVER_DISABLED, null));
                    let a = this._streamer;
                    a ? (a.on("deregistered", this._onStreamerDeregistered.bind(this)), a.on("registered", this._onStreamerRegistered.bind(this)), a.on("registration_aborted", this._onStreamerRegistrationAborted.bind(this)), a.on("state_changed", this._onStreamerStateChanged.bind(this)), a.on("stopped_on_background", this._onStreamerStoppedOnBackground.bind(this)), a.on("streamer_seek_handled", this._onSeekHandled.bind(this)), this.proxyEmitSync(a, "before_volume_change", s.BEFORE_VOLUME_CHANGE), this.proxyEmit(a, "autoplay_failed", s.AUTOPLAY_FAILED), this.proxyEmit(a, "stalled", s.BUFFER_STALLED), this.proxyEmit(a, "buffering_end", s.BUFFERING_END), this.proxyEmit(a, "buffering_start", s.BUFFERING_START), this.proxyEmit(a, "rebuffering_end", s.REBUFFERING_END), this.proxyEmit(a, "rebuffering_start", s.REBUFFERING_START), this.proxyEmit(a, "duration_changed", s.DURATION_CHANGED), this.proxyEmit(a, "max_list_errors_reached", s.MAX_LIST_ERRORS_REACHED), this.proxyEmit(a, "max_subscriptions_reached", s.MAX_SUBSCRIPTIONS_REACHED), this.proxyEmit(a, "playback_capped", s.PLAYBACK_CAPPED), this.proxyEmit(a, "player_initialization_done", s.PLAYER_INITIALIZATION_DONE), this.proxyEmit(a, "player_initialization_failed", s.PLAYER_INITIALIZATION_FAILED), this.proxyEmit(a, "progress", s.PROGRESS), this.proxyEmit(a, "registration_error", s.SERVICE_REGISTRATION_ERROR), this.proxyEmit(a, "track_ended", s.TRACK_ENDED), this.proxyEmit(a, "video_element_appended", s.VIDEO_ELEMENT_APPENDED), this.proxyEmit(a, "video_element_removed", s.VIDEO_ELEMENT_REMOVED), this.proxyEmit(a, "volume_changed", s.VOLUME_CHANGED), this.proxyEmit(a, "displayed_cues_changed", s.DISPLAYED_CUES_CHANGED), this.proxyEmit(a, "subtitle_languages_loaded", s.SUBTITLE_LANGUAGES_LOADED), this.proxyEmit(a, "seek_panels_loaded", s.SEEK_PANELS_LOADED), this.proxyEmit(a, "speed_changed", s.SPEED_CHANGED), this.proxyEmit(a, "playing_profile_changed", s.PLAYING_PROFILE_CHANGED), this.proxyEmit(a, "video_visibility_changed", s.VIDEO_VISIBILITY_CHANGED), this.proxyEmit(a, "video_surface_changed", s.VIDEO_SURFACE_CHANGED), this.proxyEmitSync(a, "reporting_start", s.REPORTING_START), this.proxyEmitSync(a, "reporting_first_quartile", s.REPORTING_FIRST_QUARTILE), this.proxyEmitSync(a, "reporting_midpoint", s.REPORTING_MIDPOINT), this.proxyEmitSync(a, "reporting_third_quartile", s.REPORTING_THIRD_QUARTILE), this.proxyEmitSync(a, "reporting_complete", s.REPORTING_COMPLETE), this.proxyEmitSync(a, "reporting_pause", s.REPORTING_PAUSE), this.proxyEmitSync(a, "reporting_resume", s.REPORTING_RESUME), this.proxyEmitSync(a, "reporting_creative_view", s.REPORTING_CREATIVE_VIEW), this.proxyEmitSync(a, "reporting_error", s.REPORTING_ERROR), this.proxyEmitSync(a, "internal_endcontent", "internal_endcontent"), this.proxyEmitSync(a, "media_playback_mode_changed", s.MEDIA_PLAYBACK_MODE_CHANGED), a.on("context_ended", this.emit.bind(this, s.LOCAL_CONTEXT_ENDED, null)), a.on("logged_out", this.emit.bind(this, s.LOCAL_PLAYER_LOGGED_OUT, null))) : (this._disableLocalTarget(), this.on(s.AUTHENTICATED, () => {
                        this.emit(s.LOCAL_PLAYER_DISABLED, null)
                    }))
                }
                _createStreamerDeferred() {
                    this._deferredStreamer = (0, U.u)(), this._deferredStreamer.promise.catch(function() {})
                }
                _isTargetIdLocal(e) {
                    return e ? e === F ? Promise.resolve(!0) : this._client.getDeviceDescriptor().then(function(t) {
                        return e === t.getId()
                    }) : Promise.resolve(!!this._localPlayback)
                }
                _onStreamerRegistered(e) {
                    this._deferredStreamer.resolve(e.data), this._createStreamerDeferred(), this._deferredStreamer.resolve(e.data), this._localPlayerEnabled = !0, this._controller.register(), this.emit(s.LOCAL_PLAYER_ENABLED, null)
                }
                _onStreamerDeregistered() {
                    this._disableLocalTarget(), this.emit(s.LOCAL_PLAYER_DISABLED, null)
                }
                _onStreamerRegistrationAborted() {
                    this._disableLocalTarget(), this._enableControllerWithoutStreamer && this._controller.register(), this.emit(s.LOCAL_PLAYER_DISABLED, null)
                }
                _disableLocalTarget() {
                    this._localPlayerEnabled = !1;
                    let e = new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "Cannot perform command; local player is disabled.");
                    this._deferredStreamer.reject(e), this._createStreamerDeferred(), this._deferredStreamer.reject(e)
                }
                _onStreamerConnect() {
                    return this._deferredStreamer.promise
                }
                _onDeviceStateChanged(e) {
                    var t;
                    let i = !!this._localPlayback,
                        r = (e = !1) => {
                            this._generateLocalDeviceInfo(e).then(e => {
                                this.emit(s.LAST_ACTIVE_DEVICE_INFO_CHANGED, {
                                    deviceInfo: e,
                                    hasOrphanedState: !1
                                })
                            })
                        };
                    if (this._localPlayerEnabled && e.hasOrphanedState && this._claimInactivePlayerStates) {
                        this._hasFakeState = !0, r(!0);
                        return
                    }
                    if (this._hasFakeState = !1, this._localPlayback = !!(e.deviceInfo && e.deviceInfo.local), this._localPlayback) {
                        if (!i && (null == (t = this._streamer) ? void 0 : t.hasOptimisticUpdates()) && this._streamer.getCurrentState().then(e => {
                                this.emit(s.STATE_CHANGED, {
                                    state: e
                                })
                            }), !this._streamer) throw new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                        this._streamer.getVolume().then(t => {
                            e.deviceInfo && (e.deviceInfo.volume = t), this.emit(s.LAST_ACTIVE_DEVICE_INFO_CHANGED, e)
                        }).catch(function() {})
                    } else this._onlyLocalState ? (this._localPlayback || i) && r() : this.emit(s.LAST_ACTIVE_DEVICE_INFO_CHANGED, e)
                }
                _onDevicesChanged(e) {
                    this._parseDeviceList(e.data).then(e => {
                        ! function(e, t) {
                            if (!Array.isArray(e) || !Array.isArray(t)) throw TypeError("Invalid devices list.");
                            if (e.length !== t.length) return !1;
                            for (let i = 0, a = e.length; i < a; i++)
                                if (!Y(e[i], t[i])) return !1;
                            return !0
                        }(this._lastDeviceList, e) && (this._lastDeviceList = e, this.emit(s.DEVICES_CHANGED, {
                            devices: e,
                            localDevice: null
                        }))
                    })
                }
                _onError(e) {
                    let t = e.data.error;
                    e.data.source === r.PLAYBACK && t && t.unrecoverable && (this._disableLocalTarget(), this._streamer && this._streamer.deregister()), this.emit(s.ERROR, e.data)
                }
                _onPlayerStateChanged(e) {
                    if (!this._onlyLocalState && (this._preferController || !this._localPlayback)) {
                        let t;
                        t = this._claimInactivePlayerStates && this._localPlayerEnabled || this._enableControllerWithoutStreamer ? e.data.state : e.data.orphaned ? null : e.data.state, this.emit(s.STATE_CHANGED, {
                            state: t
                        })
                    }
                }
                _onControllerProgress(e) {
                    !this._onlyLocalState && (this._localPlayback || this.emit(s.PROGRESS, e.data))
                }
                _onStreamerStateChanged(e) {
                    !this._preferController && (this._onlyLocalState ? this._triggerLocalStateChanges(e.data) : this._hidden ? this._handleHidden(e.data) : (this._localPlayback || this._hasFakeState && e.data) && this.emit(s.STATE_CHANGED, e.data))
                }
                _onStreamerStoppedOnBackground() {
                    this._deactivateOnStop && (this._localPlayback = !1), this.emit(s.STOPPED_ON_BACKGROUND, null)
                }
                _handleHidden(e) {
                    e.state ? (this._controller.suppressEvents(), this._triggerLocalStateChanges(e)) : this._controller.unsuppressEvents()
                }
                _parseDeviceList(e) {
                    let t = e.devices.slice(0).map(e => Promise.resolve(e));
                    return t.length && e.localDevice ? this._hasFakeState && e.localDevice && (e.localDevice.is_active = !0) : t.push(this._generateLocalDeviceInfo(this._hasFakeState)), Promise.all(t).then(e => e)
                }
                _triggerLocalStateChanges(e) {
                    this._generateLocalDeviceInfo().then(e => {
                        this._onDeviceStateChanged({
                            deviceInfo: e,
                            hasOrphanedState: !1
                        })
                    }), this.emit(s.STATE_CHANGED, e)
                }
                _canStartNewContext(e) {
                    return this._runOnDevice(e, () => this._streamer ? Promise.resolve(!0) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")), () => Promise.resolve(!0), {
                        bypassFakeState: !0
                    })
                }
                _activateElement() {
                    this._autoActivateElement = !1, this._streamer && this._streamer.activateElement().catch(() => {})
                }
                _runOnDevice(e, t, i, a) {
                    var s;
                    return !this._hasFakeState || (null == a ? void 0 : a.bypassFakeState) ? (null != (s = null == a ? void 0 : a.forceRemoteAction) ? s : this._forceRemoteActions) || this._controller.shouldRedirectPlayerCommand() ? i() : this._isTargetIdLocal(e).then(e => e ? this._onStreamerConnect().then(t) : i()) : (this._autoActivateElement && this._activateElement(), this._claimStateAndRun(i, a))
                }
                _claimStateAndRun(e, t) {
                    return this._onStreamerConnect().then(() => {
                        this._hasFakeState = !1;
                        let e = {
                            paused: !0
                        };
                        return (null == t ? void 0 : t.loggingParams) && (e.loggingParams = t.loggingParams), Promise.all([this._controller.transfer(F, e), new Promise((e, t) => {
                            if (!this._streamer) return void t(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."));
                            this._streamer.once("track_loaded", e)
                        })])
                    }).then(() => e())
                }
                _generateLocalDeviceInfo(e = !1) {
                    let t = this._client,
                        i = this._streamer,
                        a = Promise.resolve(!1),
                        s = Promise.resolve(-1);
                    return this._localPlayerEnabled && (e ? a = Promise.resolve(!0) : i && (a = i.getCurrentState().then(e => !!e)), i && (s = i.getVolume())), Promise.all([t.getClientDescriptor(), t.getSDKId(), a, s]).then(([e, t, i, a]) => {
                        var s;
                        let r = {
                            hifi_status: {
                                fully_supported: void 0,
                                user_eligible: void 0,
                                device_supported: null == (s = e.capabilities) ? void 0 : s.lossless_playback
                            }
                        };
                        return {
                            hidden: this._hidden,
                            id: e.id,
                            is_active: i,
                            is_group: !1,
                            is_being_activated: !1,
                            is_controllable: this._localPlayerEnabled,
                            is_observable: !!this._localPlayerEnabled && !this._hidden,
                            local: !0,
                            metadata: e.metadata || {},
                            name: e.name,
                            type: e.type,
                            brand: e.brand,
                            model: e.model,
                            version: t,
                            volume: a,
                            capabilities: {
                                supports_lossless_audio: !1
                            },
                            playback_features: r,
                            has_inactive_player_state: this._hasFakeState,
                            disallow_transfer_reason: o.UNAVAILABLE
                        }
                    })
                }
                _movePosition(e, t) {
                    return this.getCurrentState().then(i => {
                        if (!i || isNaN(i.position)) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Seeking not allowed with invalid track."));
                        let s = Math.min(i.duration, Math.max(0, i.position + e));
                        return this.seek(s, t)
                    })
                }
                _prepareSkipTrack(e) {
                    return "string" == typeof e ? H(e) : e
                }
                _cycleRepeatMode(e) {
                    return this.getCurrentState().then(t => {
                        let i;
                        if (!t) return Promise.reject(new B(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let s = t.disallows;
                        switch (t.repeat_mode) {
                            case n.OFF:
                                if (s.toggling_repeat_context)
                                    if (s.toggling_repeat_track) return Promise.resolve(!1);
                                    else i = n.TRACK;
                                else i = n.CONTEXT;
                                break;
                            case n.CONTEXT:
                                i = s.toggling_repeat_track ? n.OFF : n.TRACK;
                                break;
                            case n.TRACK:
                            default:
                                i = n.OFF
                        }
                        return this.setRepeatMode(i, e)
                    })
                }
                _onSeekHandled(e) {
                    this._controller.seek(e.data.position)
                }
                _seek(e, t) {
                    return this.getCurrentState().then(i => (null == i ? void 0 : i.disallows.seeking) ? Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Seeking is not allowed with current content.")) : (this._client.getLogger().logClientEvent({
                        source: "harmony.seek()",
                        source_version: J.tagged,
                        source_vendor: "spotify",
                        event: "Harmony/Client seek",
                        event_version: "1.0.0",
                        json_data: {
                            position: e,
                            deviceId: t
                        }
                    }, "object"), this._runOnDevice(t, () => this._streamer.seek(e), this._controller.seek.bind(this._controller, e, t))))
                }
                getClientDescriptor() {
                    return this._client.getClientDescriptor()
                }
                getProductState() {
                    return this._client.getProductState()
                }
                getPublicTransport() {
                    return this._client.getPublicTransport()
                }
                getVersionDescriptor() {
                    return this._client.getVersionDescriptor()
                }
                logAppMetrics(e, t) {
                    return this._client.logAppMetrics(e, t)
                }
                setName(e) {
                    return this._client.setName(e)
                }
                setNameTemplate(e) {
                    return this._client.setNameTemplate(e)
                }
                setIsGroup(e) {
                    return this._client.setIsGroup(e)
                }
                getContextPlayerState() {
                    return this._controller.getContextPlayerState()
                }
                updateCurrentContext(e, t) {
                    return this._controller.updateCurrentContext(e, t)
                }
                getLastActiveDevice() {
                    return this._onlyLocalState || this._hasFakeState ? this._generateLocalDeviceInfo(this._hasFakeState) : this._controller.getActiveDevice().then(e => (null == e ? void 0 : e.local) && this._streamer ? (e.hidden = this._hidden, this._streamer.getVolume().then(t => (e.volume = t, e))) : e)
                }
                getCurrentState() {
                    let e = () => this._onStreamerConnect().then(() => this._streamer.getCurrentState());
                    return this._onlyLocalState || !this._preferController && this._localPlayback ? e() : Promise.resolve(this._hasFakeState && !this._preferController ? e().catch(() => null) : null).then(e => {
                        if (e) return e;
                        let t = this._claimInactivePlayerStates && this._localPlayerEnabled || this._enableControllerWithoutStreamer;
                        return this._controller.getCurrentState(!t).then(e => !this._preferController && this._localPlayback ? this.getCurrentState() : e)
                    })
                }
                pause(e, t) {
                    return this._runOnDevice(e, () => this._streamer.pause(), this._controller.pause.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                resume(e, t) {
                    return this._runOnDevice(e, () => this._streamer.resume(), this._controller.resume.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                togglePlay(e, t) {
                    return this._runOnDevice(e, () => this._streamer.togglePlay(), this._controller.togglePlay.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                playURI(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playURI(e, t, i)))
                }
                playPages(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playPages(e, t, i)))
                }
                playTracks(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playTracks(e, t, i)))
                }
                nextTrack(e, t) {
                    return this.getCurrentState().then(i => {
                        if (null == i ? void 0 : i.disallows.skipping_next) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content."));
                        let s = {},
                            r = () => this._streamer.nextTrack(l.FORWARD_BUTTON),
                            n = this._controller.nextTrack.bind(this._controller, e, s);
                        return (null == t ? void 0 : t.track) && (r = n, s.track = this._prepareSkipTrack(t.track)), (null == t ? void 0 : t.loggingParams) && (s.loggingParams = t.loggingParams), this._runOnDevice(e, r, n, {
                            loggingParams: null == t ? void 0 : t.loggingParams,
                            forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                        })
                    })
                }
                smartPreviousTrack(e, t) {
                    return this.getCurrentState().then(i => i ? (i.disallows || {}).seeking || i.position < 3e3 ? i.disallows.skipping_prev ? Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content.")) : this.previousTrack(e, t) : this.seek(0, e) : Promise.reject(new B(a.HARMONY_NO_TRACKS_LOADED, "No current state.")))
                }
                previousTrack(e, t) {
                    return this.getCurrentState().then(i => {
                        if (null == i ? void 0 : i.disallows.skipping_prev) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content."));
                        let s = {},
                            r = () => this._streamer.previousTrack(l.FORWARD_BUTTON),
                            n = this._controller.previousTrack.bind(this._controller, e, s);
                        return (null == t ? void 0 : t.track) && (r = n, s.track = this._prepareSkipTrack(t.track)), (null == t ? void 0 : t.loggingParams) && (s.loggingParams = t.loggingParams), this._runOnDevice(e, r, n, {
                            loggingParams: null == t ? void 0 : t.loggingParams,
                            forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                        })
                    })
                }
                seek(e, t) {
                    var i;
                    return null != (i = this._throttledSeek(e, t)) ? i : Promise.resolve(!0)
                }
                seekForward(e = 15e3, t) {
                    return this._movePosition(e, t)
                }
                seekBackward(e = 15e3, t) {
                    return this._movePosition(-1 * e, t)
                }
                getVolume() {
                    return this._streamer ? this._streamer.getVolume() : Promise.resolve(-1)
                }
                setVolume(e, t) {
                    return this._runOnDevice(t, () => this._streamer.setVolume(e), this._controller.setVolume.bind(this._controller, e), {
                        bypassFakeState: !0
                    })
                }
                getVideoProfiles() {
                    if (!this._streamer) throw new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                    return this._streamer.getVideoVariants()
                }
                setPreferredBitrate(e) {
                    if (!this._streamer) throw new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                    return this._streamer.setPreferredBitrate(e)
                }
                getDevices() {
                    return this._controller.getDevices().then(this._parseDeviceList).then(e => (this._lastDeviceList = e, e))
                }
                setQueue(e, t, i) {
                    console.warn("Harmony.setQueue is deprecated; migrate to new PlayerQueue API");
                    let a = () => this._controller.setQueue(e, t, i);
                    return this._runOnDevice(i, a, a)
                }
                addToQueue(e, t) {
                    let i = e.map(e => "string" == typeof e ? e : e.uri);
                    return this._controller.getQueueManager().addToQueue(i, t)
                }
                setShuffle(e, t, i) {
                    let a = () => this._controller.setShuffle(e, t, i);
                    return this._runOnDevice(t, a, a, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
                toggleShuffle(e, t) {
                    let i = () => this._controller.toggleShuffle(e, t);
                    return this._runOnDevice(e, i, i, {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                setRepeatMode(e, t) {
                    let i = () => this._controller.setRepeatMode(e, t);
                    return this._runOnDevice(t, i, i)
                }
                cycleRepeatMode(e) {
                    let t = () => this._cycleRepeatMode(e);
                    return this._runOnDevice(e, t, t)
                }
                transfer(e, t) {
                    let i = e || F,
                        a = () => this._controller.transfer(i, t);
                    return this._autoActivateElement && this._activateElement(), this._runOnDevice(i, a, a, {
                        bypassFakeState: !0,
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                logout(e) {
                    return this._controller.logout(e || F)
                }
                activateElement() {
                    return this._streamer ? this._streamer.activateElement() : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getQueueManager() {
                    return this._controller.getQueueManager((e, t) => this._runOnDevice(t, e, e), {
                        reportInactiveQueues: this._claimInactivePlayerStates,
                        onlyLocalQueue: this._onlyLocalState,
                        reportInitial: this._hasFakeState || this._localPlayback
                    })
                }
                hideSubtitles() {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot hide subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.hideSubtitles()
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                showSubtitles() {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot show subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.showSubtitles()
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                areSubtitlesShown() {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot show subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.areSubtitlesShown()
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getSubtitleLanguages() {
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.getSubtitleLanguages()
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getActiveSubtitleLanguage() {
                    if (!this._localPlayback) return Promise.resolve(null);
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.getActiveSubtitleLanguage()
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setSubtitleLanguage(e) {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot set subtitle languages on remote player."));
                    let t = this._streamer;
                    return t ? this.getCurrentState().then(i => {
                        var s;
                        return (null == (s = null == i ? void 0 : i.track_window.current_track) ? void 0 : s.media_type) !== "video" ? Promise.reject(new B(a.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : t.setSubtitleLanguage(e)
                    }) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                deactivateSubtitleEvents() {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot deactivate subtitle events on remote player."));
                    let e = this._streamer;
                    return e ? e.deactivateSubtitleEvents() : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                activateSubtitleEvents() {
                    if (!this._localPlayback) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot activate subtitle events on remote player."));
                    let e = this._streamer;
                    return e ? e.activateSubtitleEvents() : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setBackgrounded(e) {
                    return this.setPlayerVisibility(!e)
                }
                setPlayerVisibility(e) {
                    return this._localPlayback ? this._streamer ? this._streamer.setPlayerVisibility(e) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")) : Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot set background mode on remote player."))
                }
                setIsVideoVisible(e) {
                    return this._streamer ? this._streamer.setIsVideoVisible(e) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setVideoSurface(e) {
                    return this._streamer ? this._streamer.setVideoSurface(e) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
                setVideoResolution(e) {
                    return this._localPlayback ? this._streamer ? this._streamer.setVideoResolution(e) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")) : Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot set preferred video resolution on remote player."))
                }
                getMediaConfig() {
                    return this._streamer ? this._streamer.getMediaConfig() : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getSeekPanels() {
                    return this._streamer ? this._streamer.getSeekPanels() : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setPlaybackSpeed(e, t) {
                    return isNaN(e) || e < .5 || e > 3.5 ? Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, `Invalid playback speed: ${e}. Should be in range 0.5 - 3.5`)) : this.getCurrentState().then(i => !i || i.disallows.setting_playback_speed ? Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot change playback speed; content type is not allowed.")) : this._runOnDevice(t, () => this._streamer.setPlaybackSpeed(e), () => this._controller.setPlaybackSpeed(e, t)))
                }
                sendCustomSignal(e, t, i) {
                    return this.getCurrentState().then(s => {
                        if (((null == s ? void 0 : s.disallows.signals) || {})[e]) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, `Sending signal ${e} is not allowed.`));
                        let r = () => this._controller.sendCustomSignal(e, t, i);
                        return this._runOnDevice(t, r, r, {
                            loggingParams: null == i ? void 0 : i.loggingParams,
                            forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                        })
                    })
                }
                playAsNextInQueue(e, t, i) {
                    let a = () => this._controller.playAsNextInQueue(e, t, i);
                    return this._runOnDevice(t, a, a, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
                setModes(e, t, i) {
                    return this.getCurrentState().then(s => {
                        var r, n;
                        let o = (null == s ? void 0 : s.disallows) || {};
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let i = e[t];
                                if (null == (n = null == (r = o.setting_modes) ? void 0 : r[t]) ? void 0 : n[i]) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, `Setting ${t} to ${i} is not allowed.`))
                            }
                        let l = () => this._controller.setModes(e, t, i);
                        return this._runOnDevice(t, l, l, {
                            loggingParams: null == i ? void 0 : i.loggingParams,
                            forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                        })
                    })
                }
                setShuffleMode(e, t, i) {
                    let a = () => this._controller.setShuffleMode(e, t, i);
                    return this._runOnDevice(t, a, a, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
                setMediaPlaybackQuality(e) {
                    return this._localPlayback ? this._streamer ? this._streamer.setMediaPlaybackQuality(e) : Promise.reject(new B(a.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")) : Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Cannot set preferred video resolution on remote player."))
                }
                setSleepTimer(e, t, i) {
                    return this.getCurrentState().then(s => {
                        let r = (null == s ? void 0 : s.disallows) || {};
                        if ("clear" === e.type && r.setting_sleep_timer_clear) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Clearing sleep timer is not allowed."));
                        if ("duration" === e.type && r.setting_sleep_timer_duration) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Setting sleep timer to duration is not allowed."));
                        if ("end_of_track" === e.type && r.setting_sleep_timer_end_of_track) return Promise.reject(new B(a.HARMONY_OPERATION_FORBIDDEN, "Setting sleep timer to end of track is not allowed."));
                        let n = () => this._controller.setSleepTimer(e, t, i);
                        return this._runOnDevice(t, n, n, {
                            loggingParams: null == i ? void 0 : i.loggingParams,
                            forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                        })
                    })
                }
            }
            var q = i(35520),
                Q = i(10427),
                $ = i(89429);
            let W = "spotify:user:attributes:mutated";
            class X extends M.bk {
                constructor(e) {
                    super(), this._currentState = null, this._transport = e.transport, this._endpoint = e.endpoint || "@webgate/melody", this._handleUserUpdate = this._handleUserUpdate.bind(this), this._init()
                }
                static create(e) {
                    return new X(e)
                }
                _init() {
                    this.register()
                }
                _handleUserUpdate() {
                    clearTimeout(this._debounce), this._debounce = setTimeout(() => {
                        this._transport.forceTokenRefresh().catch(function() {}), this.getCurrentState(!0).then(e => {
                            this.emit($.J.PRODUCT_STATE_CHANGED, {
                                productState: e
                            })
                        })
                    }, 300)
                }
                _shouldRetry(e, t) {
                    let i = e.getStatusFamily();
                    return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                }
                getCurrentState(e) {
                    return !e && this._currentState ? Promise.resolve(this._currentState) : this._transport.request(`${this._endpoint}/v1/product_state`, {
                        method: "GET",
                        responseType: "json",
                        retry: {
                            condition: this._shouldRetry
                        }
                    }).then(e => {
                        if (e.status !== Q.s.OK || !e.body) throw this._currentState = null, Error("Cannot get the user's product state.");
                        return this._currentState = e.body, e.body
                    })
                }
                register() {
                    return this._transport.matchMessages(W, this._handleUserUpdate), Promise.resolve(!0)
                }
                deregister() {
                    return this._transport.unmatchMessages(W, this._handleUserUpdate), Promise.resolve(!0)
                }
            }
            let z = /(edge)[\s/:]([\w\d.]+)/,
                Z = RegExp("(opera|ie|firefox|chrome|trident|crios|version)[\\s/:]([\\w\\d\\.]+)?.*?(safari|(?:rv[\\s\\/:]|version[\\s\\/:])([\\w\\d\\.]+)|$)"),
                ee = {};

            function et(e) {
                if (!e) return e;
                let t = function(e, t) {
                    var i, a, s;
                    let r = e.toLowerCase(),
                        n = t ? t.toLowerCase() : "",
                        o = `${r}:${n}`,
                        l = ee[o];
                    if (l) return l;
                    let _ = r.match(z),
                        d = r.match(Z) || [null, "unknown", 0],
                        u = _ || d;
                    "trident" === u[1] ? (u[1] = "ie", u[4] && (u[2] = u[4])) : "crios" === u[1] && (u[1] = "chrome"), "win" === (n = r.match(/ip(?:ad|od|hone)/) ? "ios" : null != (i = (r.match(/(?:webos|android)/) || r.match(/mac|win|linux|cros/) || [])[0]) ? i : "other") && (n = "windows");
                    let c = "version" === u[1] ? u[3] : u[1],
                        h = "opera" === u[1] && u[4] ? u[4] : u[2],
                        p = {
                            name: null != (a = null == c ? void 0 : c.toString()) ? a : "unknown",
                            version: null != (s = null == h ? void 0 : h.toString()) ? s : "unknown",
                            platform: n
                        };
                    return ee[o] = p, p
                }(navigator.userAgent, navigator.platform);
                return e.replace(/\{\{([^}]+?)\}\}/g, function(e, i) {
                    return t && Object.prototype.hasOwnProperty.call(t, i) ? t[i] : ""
                })
            }! function(e) {
                e.FILE_URLS_MP3 = "file_urls_mp3", e.FILE_URLS_EXTERNAL = "file_urls_external", e.FILE_IDS_MP3 = "file_ids_mp3", e.FILE_IDS_MP4 = "file_ids_mp4", e.FILE_IDS_MP4_DUAL = "file_ids_mp4_dual", e.FILE_IDS_CBCS = "file_ids_mp4_cbcs", e.FILE_IDS_MP4FLAC = "file_ids_mp4flac", e.MANIFEST_IDS_VIDEO = "manifest_ids_video", e.MANIFEST_URLS_VIDEO_AD = "manifest_urls_video_ad", e.MANIFEST_URLS_AUDIO_AD = "manifest_urls_audio_ad"
            }(_ || (_ = {})),
            function(e) {
                e.UNKNOWN = "unknown", e.COMPUTER = "computer", e.TABLET = "tablet", e.SMARTPHONE = "smartphone", e.SPEAKER = "speaker", e.TV = "tv", e.AVR = "avr", e.STB = "stb", e.AUDIO_DONGLE = "audio_dongle", e.GAME_CONSOLE = "game_console", e.CAST_VIDEO = "cast_video", e.CAST_AUDIO = "cast_audio", e.AUTOMOBILE = "automobile", e.SMARTWATCH = "smartwatch", e.CHROMEBOOK = "chromebook"
            }(d || (d = {}));
            let ei = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
                ea = e => (function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        a < 16 && (t += "0"), t += a.toString(16)
                    }
                    return t
                })((e => ei ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                    let t = [];
                    for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                    return t
                }(e))(Math.ceil(e / 2))),
                es = () => ea(40),
                er = "_spharmony_device_id",
                en = {
                    get: function(e, t = !1) {
                        if (e && "string" == typeof e) return e;
                        if (t) return es();
                        let i = localStorage.getItem(er);
                        return i || (i = es(), localStorage.setItem(er, i)), i
                    }
                };
            class eo extends M.bk {
                constructor(e) {
                    var t;
                    if (super(), this._platformVersion = "", this._osName = "", this._osVersion = "", this._metadata = {}, this._manifestPrependOffset = 0, !e) throw TypeError("Invalid argument `options`.");
                    if (!e.id) throw TypeError("Argument `options.id` is required.");
                    if (!e.name || !e.model || !e.type) throw TypeError("Incomplete `options` value.");
                    this._id = e.id, this._correlationId = e.correlationId, this._type = e.type, this._brand = e.brand, this._model = e.model, this._isGroup = !!e.is_group, this._name = e.name, this._platformName = e.platform_name, this._platformIdentifier = e.platform_identifier, this._platformVersion = e.platform_version || "", this._osName = e.os_name || "", this._osVersion = e.os_version || "", this._metadata = e.metadata || {}, this._capabilities = e.capabilities || {
                        manifest_formats: []
                    }, this._manifestPrependOffset = (null == (t = this._capabilities.manifest_formats) ? void 0 : t.length) || 0
                }
                static create(e) {
                    return new eo({
                        id: en.get(e.id, e.randomizeId),
                        correlationId: e.correlationId,
                        model: e.model || et("harmony-{{name}}.{{version}}-{{platform}}").toLowerCase(),
                        name: e.nameTemplate ? et(e.nameTemplate) : e.name || et("Spotify ({{name}}/{{platform}})").replace(/\b[a-z]/g, e => e.toUpperCase()),
                        type: e.type || d.COMPUTER,
                        brand: e.brand || "SpotifyHarmonyGeneric",
                        platform_name: e.platform_name,
                        platform_identifier: e.platform_identifier,
                        platform_version: e.platform_version,
                        os_name: e.os_name,
                        os_version: e.os_version,
                        metadata: e.metadata || {},
                        capabilities: e.capabilities || {},
                        is_group: !!e.is_group
                    })
                }
                getId() {
                    return this._id
                }
                setCapability(e, t) {
                    if ("manifest_formats" !== e) return this._capabilities[e] = t, this.emit("descriptor_changed", {
                        descriptor: this.toJSON()
                    }), !0;
                    throw TypeError('Cannot change capability "manifest_formats"')
                }
                getCapability(e) {
                    if ("manifest_formats" !== e) return this._capabilities[e];
                    throw TypeError("Use `descriptor.getManifestFormats()`.")
                }
                setName(e) {
                    return this._name = e, this.emit("descriptor_changed", {
                        descriptor: this.toJSON()
                    }), !0
                }
                getName() {
                    return this._name
                }
                setIsGroup(e) {
                    return this._isGroup = e, this.emit("descriptor_changed", {
                        descriptor: this.toJSON()
                    }), !0
                }
                getIsGroup() {
                    return this._isGroup
                }
                getType() {
                    return this._type
                }
                getBrand() {
                    return this._brand
                }
                getModel() {
                    return this._model
                }
                getPlatformIdentifier() {
                    return this._platformIdentifier || `Partner ${this._brand} ${this._model}`
                }
                getPlatformName() {
                    return this._platformName || this.getPlatformIdentifier()
                }
                getPlatformVersion() {
                    return this._platformVersion
                }
                getOSName() {
                    return this._osName
                }
                getOSVersion() {
                    return this._osVersion
                }
                getManifestFormats() {
                    return this._capabilities.manifest_formats || []
                }
                appendManifestFormat(...e) {
                    let t = this._capabilities.manifest_formats;
                    Array.isArray(t) && t.push(...e)
                }
                prependManifestFormat(...e) {
                    let t = this._capabilities.manifest_formats;
                    Array.isArray(t) && t.splice(this._manifestPrependOffset, 0, ...e)
                }
                supportsVideoManifestFormats() {
                    let e = this._capabilities.manifest_formats;
                    return (null == e ? void 0 : e.indexOf(_.MANIFEST_IDS_VIDEO)) !== -1
                }
                toJSON() {
                    return {
                        brand: this._brand,
                        capabilities: Object.assign({}, this._capabilities),
                        id: this._id,
                        correlationId: this._correlationId,
                        metadata: Object.assign({}, this._metadata),
                        model: this._model,
                        name: this._name,
                        platform_name: this._platformName,
                        platform_identifier: this._platformIdentifier,
                        platform_version: this._platformVersion,
                        os_name: this._osName,
                        os_version: this._osVersion,
                        type: this._type,
                        is_group: this._isGroup
                    }
                }
                toTrackPlaybackDeviceInfo(e) {
                    return {
                        brand: this._brand,
                        capabilities: Object.assign({}, this._capabilities),
                        device_id: this._id,
                        device_type: this._type,
                        metadata: Object.assign({}, this._metadata),
                        model: this._model,
                        name: this._name,
                        platform_name: this._platformName,
                        platform_identifier: this._platformIdentifier,
                        is_group: this._isGroup,
                        correlation_id: this._correlationId,
                        client_version: e
                    }
                }
            }
            let el = "undefined" != typeof globalThis && "function" == typeof globalThis.queueMicrotask ? globalThis.queueMicrotask.bind(globalThis) : function() {
                if ("undefined" == typeof Promise) return e => setTimeout(e, 0);
                let e = Promise.resolve();
                return t => {
                    e.then(t).catch(e => setTimeout(() => {
                        throw e
                    }, 0))
                }
            }();
            ! function(e) {
                e.INVALID_IDENT_DATA = "INVALID_IDENT_DATA", e.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED"
            }(u || (u = {}));
            let e_ = {
                UNKNOWN: "unknown",
                EMPTY: "",
                ZERO: 0,
                EMPTY_VERSION: "0.0.0"
            };
            class ed extends Error {
                constructor(e, t, i) {
                    super(t), this.name = "LoggingError", this.code = e, this.status = i || 0
                }
            }

            function eu(e, t) {
                let i = e.indexOf(t);
                return -1 === i ? [e, ""] : [e.slice(0, i), e.slice(i + t.length)]
            }
            class ec {
                constructor(e) {
                    this._transport = e.transport, this._endpoint = e.endpoint || "@webgate/melody", this._batchQueue = [], this._identData = Promise.all([e.sdkId, e.platform, e.clientVersion]).then(([e, t, i]) => ({
                        sdk_id: e || e_.EMPTY,
                        platform: t || e_.EMPTY,
                        client_version: i || e_.EMPTY_VERSION
                    }))
                }
                _assertValidIdentData(e) {
                    if (!e.sdk_id) throw new ed(u.INVALID_IDENT_DATA, "sdkId must be a non-empty string.", 0)
                }
                _sendBatchedLogs() {
                    return this._identData.then(e => {
                        this._assertValidIdentData(e);
                        let t = this._batchQueue.splice(0, this._batchQueue.length);
                        if (t.length) {
                            let i = t.reduce(function(e, t) {
                                var i;
                                let a = t.endpoint;
                                return void 0 === a || (e[a] = null != (i = e[a]) ? i : [], e[a].push(t)), e
                            }, {});
                            return Promise.all(Object.keys(i).map(t => {
                                var a;
                                let s = null == (a = i[t]) ? void 0 : a.map(({
                                    payload: e
                                }) => e);
                                return (null == s ? void 0 : s.length) ? this._transport.request(`${this._endpoint}${t}`, {
                                    method: "POST",
                                    payload: JSON.stringify(Object.assign({
                                        messages: s
                                    }, e)),
                                    retry: {
                                        maxRetries: 5,
                                        condition: e => 202 !== e.status
                                    }
                                }).then(({
                                    status: e
                                }) => 202 === e || Promise.reject(new ed(u.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e))) : Promise.resolve(!0)
                            })).then(() => !0)
                        }
                        return Promise.resolve(!0)
                    })
                }
                _sendLog(e, t) {
                    return this.sendLog(e, t)
                }
                sendLog(e, t, i) {
                    let a = null == i ? void 0 : i.forget,
                        s = null == i ? void 0 : i.keepalive;
                    if (null == i ? void 0 : i.batch) {
                        if (a) throw Error("'forget' cannot be used together with 'batch'.");
                        if (s) throw Error("'keepalive' cannot be used together with 'batch'.");
                        return new Promise(i => {
                            this._batchQueue.push({
                                endpoint: e,
                                payload: t
                            }), el(() => {
                                this._sendBatchedLogs().then(i)
                            })
                        })
                    }
                    return this._identData.then(i => {
                        this._assertValidIdentData(i);
                        let r = this._endpoint + e,
                            n = a ? this._transport.getLastToken() : null;
                        return n && (r = function(e, t, i) {
                            let [a, s] = eu(e, "#"), [r, n] = eu(a, "?"), o = s ? `#${s}` : "", l = `${t}=${encodeURIComponent(i)}`;
                            for (let e of n.split("&")) e.length > 0 && eu(e, "=")[0] !== t && (l += `&${e}`);
                            return `${r}?${l}${o}`
                        }(r, "access_token", n)), this._transport.request(r, {
                            method: "POST",
                            payload: JSON.stringify(Object.assign(Object.assign({}, t), i)),
                            forget: a,
                            keepalive: s,
                            retry: {
                                maxRetries: 5,
                                condition: e => 202 !== e.status
                            }
                        })
                    }).then(({
                        status: e
                    }) => !!a || !!s || 202 === e || Promise.reject(new ed(u.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e)))
                }
            }
            class eh {
                constructor(e) {
                    this._melodyLogger = new ec(e)
                }
                logClientEvent(e, t) {
                    return e ? this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "client_event",
                        message: {
                            source: e.source || e_.UNKNOWN,
                            context: e.context || e_.UNKNOWN,
                            event: e.event || e_.UNKNOWN,
                            event_version: e.event_version || e_.EMPTY,
                            test_version: e.test_version || e_.EMPTY,
                            source_version: e.source_version || e_.UNKNOWN,
                            source_vendor: e.source_vendor || e_.UNKNOWN,
                            json_data: "json" === t ? e.json_data || "{}" : JSON.stringify(e.json_data || {})
                        }
                    }, {
                        batch: !0
                    }) : Promise.reject(TypeError("Logger.logClientEvent `data` cannot be null."))
                }
                logMetrics(e, t) {
                    if (!e && !t) return Promise.resolve(!0);
                    let i = e || [],
                        a = t || [];
                    if (!i.length && !a.length) return Promise.resolve(!0);
                    if (!Array.isArray(i) || !Array.isArray(a)) return Promise.reject(TypeError("Logger.logMetrics `meters` and `timers` must be null or an array."));
                    for (let e of i)
                        if (!("what" in e) || !("result" in e) || !("reason" in e)) return Promise.reject(TypeError("Logger.logMetrics: Invalid meter format in `meters` array."));
                    for (let e of a)
                        if (!("what" in e) || !("duration" in e)) return Promise.reject(TypeError("Logger.logMetrics: Invalid timer format in `timers` array."));
                    return this._melodyLogger.sendLog("/v1/metric", {
                        sdk_id: void 0,
                        platform: void 0,
                        client_version: void 0,
                        meters: i,
                        timers: a
                    })
                }
                logJSSDKError(e, t) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_error",
                        message: {
                            source: e.source || e_.UNKNOWN,
                            source_version: e.source_version || e_.UNKNOWN,
                            type: e.type || e_.UNKNOWN,
                            message: e.message || e_.EMPTY,
                            stack: JSON.stringify(e.stack || e_.EMPTY),
                            json_data: "json" === t ? e.json_data || "{}" : JSON.stringify(e.json_data || {}),
                            json_data_version: e.json_data_version || e_.EMPTY_VERSION
                        }
                    }, {
                        batch: !0
                    })
                }
                logJSSDKHarmonyError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_harmony_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKConnectCommand(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_connect_command",
                        message: {
                            ms_ack_duration: e.ms_ack_duration,
                            ms_request_latency: e.ms_request_latency || e_.ZERO,
                            command_id: e.command_id || e_.EMPTY,
                            command_type: e.command_type || e_.EMPTY,
                            target_device_brand: e.target_device_brand || e_.EMPTY,
                            target_device_model: e.target_device_model || e_.EMPTY,
                            target_device_client_id: e.target_device_client_id || e_.EMPTY,
                            target_device_id: e.target_device_id || e_.EMPTY,
                            interaction_ids: e.interaction_ids || e_.EMPTY,
                            play_origin: e.play_origin || e_.EMPTY,
                            result: e.result || e_.EMPTY,
                            http_response: e.http_response || e_.EMPTY,
                            http_status_code: e.http_status_code || e_.ZERO
                        }
                    }, {
                        batch: !0
                    })
                }
                logMediaPlaybackEvents(e, t) {
                    return (null == t ? void 0 : t.teardown) ? this._melodyLogger.sendLog("/v1/msg/media_playback_event_v2", {
                        events: e.events
                    }, {
                        keepalive: !0
                    }) : this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "media_playback_event_v2",
                        message: {
                            events: e.events
                        }
                    }, {
                        batch: !0
                    })
                }
            }
            let ep = q.m.forTag("harmonyclient"),
                em = /^[a-zA-Z0-9_%:-]{1,40}$/;
            class eE extends M.bk {
                constructor(e) {
                    if (super(), this._platformIdentifier = (0, U.u)(), this._platformVersion = (0, U.u)(), !e) throw TypeError("Argument `options` is not defined.");
                    if (!e.transport) throw TypeError("No Transport instance provided");
                    if (!e.transport.hasPlugin("dealer")) throw TypeError("Transport has no Dealer plugin.");
                    this._transport = e.transport, this._deviceDescriptor = this._initDeviceDescriptor(e), this._logger = new eh({
                        transport: this._transport.toPublic(),
                        sdkId: this.getSDKId(),
                        platform: this._platformIdentifier.promise,
                        clientVersion: this._platformVersion.promise
                    }), this._productStateObserver = X.create({
                        transport: this._transport
                    }), this._onConnected = this._onConnected.bind(this), this._onAuthenticated = this._onAuthenticated.bind(this), this._onConnectionError = this._onConnectionError.bind(this), this._onAuthenticationError = this._onAuthenticationError.bind(this), this._onShortSessionDisconnect = this._onShortSessionDisconnect.bind(this), this._attachListeners()
                }
                static create(e) {
                    return new eE(e)
                }
                _createDeviceDescriptor(e, t = {}) {
                    var i, s, r, n, o;
                    if ((null == t ? void 0 : t.id) && !em.test(t.id)) throw B.fatal(a.HARMONY_INVALID_DESCRIPTOR_ID, "Invalid device id.");
                    let l = t.capabilities || {},
                        d = {
                            change_volume: null == (i = l.change_volume) || i,
                            endsong_snooping: l.endsong_snooping,
                            enable_play_token: !0,
                            supports_file_media_type: !0,
                            play_token_lost_behavior: e.playTokenLostBehavior || "pause",
                            disable_connect: !!e.hidden,
                            audio_podcasts: null == (s = l.audio_podcasts) || s,
                            video_playback: l.video_playback,
                            lossless_playback: l.lossless_playback,
                            volume_steps: void 0 !== l.volume_steps && l.volume_steps >= 0 && l.volume_steps < 65535 ? l.volume_steps : void 0,
                            manifest_formats: [_.FILE_IDS_MP3, _.FILE_URLS_MP3, _.MANIFEST_URLS_AUDIO_AD],
                            video_ads: l.video_ads,
                            supports_preferred_media_type: null == (r = l.supports_preferred_media_type) || r,
                            supports_external_url_playback_speed: l.supports_external_url_playback_speed,
                            supports_playback_offsets: null == (n = l.supports_playback_offsets) || n,
                            supports_playback_speed: null == (o = l.supports_playback_speed) || o
                        },
                        u = eo.create(Object.assign(Object.assign({}, t), {
                            capabilities: d
                        }));
                    return this._platformIdentifier.resolve(u.getPlatformIdentifier()), this._platformVersion.resolve(u.getPlatformVersion()), this.proxyEmit(u, "descriptor_changed", "descriptor_changed"), u
                }
                _initDeviceDescriptor(e) {
                    return Promise.resolve(e.descriptor).then(this._createDeviceDescriptor.bind(this, e)).catch(e => (this._onError(r.HARMONY, {
                        error: e
                    }), Promise.reject(e)))
                }
                _attachListeners() {
                    let e = this._transport;
                    e.on(k.TransportEvent.CONNECTED, this._onConnected), e.on(k.TransportEvent.AUTHENTICATED, this._onAuthenticated), e.on(k.TransportEvent.CONNECTION_FAILED, this._onConnectionError), e.on(k.TransportEvent.AUTHENTICATION_FAILED, this._onAuthenticationError), this.proxyEmit(e, k.TransportEvent.RECONNECTING, "reconnecting"), this.proxyEmit(e, k.TransportEvent.RECONNECTED, "reconnected"), this.proxyEmit(e, k.TransportEvent.LOGGED_OUT, "logged_out"), this.proxyEmitSync(e, k.TransportEvent.BEFORE_OFFLINE_DISCONNECT, "before_offline_disconnect"), this.proxyEmitSync(e, k.TransportEvent.BEFORE_ONLINE_DISCONNECT, "before_disconnect"), e.on(k.TransportEvent.SHORT_SESSION_DISCONNECTED, this._onShortSessionDisconnect.bind(this)), this.proxyEmit(this._productStateObserver, k.TransportEvent.PRODUCT_STATE_CHANGED, "product_state_changed"), this.on("before_disconnect", e => {
                        let t = this._productStateObserver.deregister().catch(() => {});
                        e.data.awaitPromise(t)
                    })
                }
                _onError(e, t) {
                    this.emit("error", {
                        source: e,
                        error: t.error
                    }), t.error && t.error.unrecoverable && this.emit("unrecoverable_failure", {
                        source: e,
                        error: t.error
                    })
                }
                _onConnected() {
                    this.emit("connected", null)
                }
                _onAuthenticated() {
                    this.emit("authenticated", null)
                }
                _onConnectionError(e) {
                    this._onError(r.TRANSPORT, {
                        error: e.data.error
                    }), this.emit("connection_error", e.data)
                }
                _onAuthenticationError(e) {
                    this._onError(r.TRANSPORT, {
                        error: e.data.error
                    }), this.emit("authentication_error", e.data)
                }
                _onShortSessionDisconnect(e) {
                    this._logger.logClientEvent({
                        source: "transport",
                        source_version: J.tagged,
                        source_vendor: "spotify",
                        event: e.type,
                        event_version: "1.0.0",
                        json_data: {
                            disconnectCount: e.data.disconnectCount,
                            sessionLength: e.data.sessionLength
                        }
                    }, "object").catch(t => ep.warn(`${e.type} Logging Error:`, t))
                }
                getVersionDescriptor() {
                    return Object.assign({}, J)
                }
                getSDKId() {
                    return `harmony:${J.tagged}`
                }
                getUntaggedSDKId() {
                    return `harmony:${J.version}`
                }
                getPlatformIdentifier() {
                    return this._platformIdentifier.promise
                }
                getPlatformVersion() {
                    return this._platformVersion.promise
                }
                getLogger() {
                    return this._logger
                }
                logAppMetrics(e, t) {
                    if (!this._logger) throw TypeError("Invalid logger instance");
                    return this._logger.logMetrics(e, t)
                }
                request(e, t) {
                    return this._transport.request(e, t)
                }
                getPublicTransport() {
                    return this._transport.toPublic()
                }
                getClientDescriptor() {
                    return this._deviceDescriptor.then(e => e.toJSON())
                }
                getDeviceDescriptor() {
                    return this._deviceDescriptor
                }
                getProductState() {
                    return this._productStateObserver.getCurrentState()
                }
                setName(e) {
                    return this._deviceDescriptor.then(function(t) {
                        return t.setName(e)
                    })
                }
                setNameTemplate(e) {
                    return this.setName(et(e))
                }
                setIsGroup(e) {
                    return this._deviceDescriptor.then(t => t.setIsGroup(e))
                }
                setCapability(e, t) {
                    return this._deviceDescriptor.then(i => i.setCapability(e, t))
                }
                notifyError(e, t) {
                    this._onError(e, {
                        error: t
                    })
                }
            }
            var eg = i(25931),
                eS = i(82643);
            let eT = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues;
            var ef = i(13059);
            class ey extends Error {
                constructor(e, t, i = {}) {
                    super(t), this.debug = {}, this.name = "LoggingError", this.message = t, this.code = e, this.debug = i
                }
            }
            var eI = i(12756);
            let ev = q.m.forTag("playback.logger");
            ! function(e) {
                e.FATAL = "Fatal", e.ERROR = "Error", e.WARNING = "Warning"
            }(c || (c = {}));
            class eP extends M.bk {
                constructor(e) {
                    var t;
                    super(), this._currentTrackingData = null, this._sequenceId = 0, this._sequenceSessionStorage = {}, this._sessionId = "0", this._unauthSessionTimestamp = 0, this._deviceInfo = {}, this._transport = e.transport, this._logSender = e.logSender, this._player = e.player, this._sdkId = null != (t = e.sdkId) ? t : e_.EMPTY, this._init(e)
                }
                static create(e) {
                    return new eP(e)
                }
                _init(e) {
                    let t = this._player;
                    t.on(ef.J.PLAYER_LOAD, this._onPlayerLoad.bind(this)), t.on(ef.J.PLAYER_ERROR, this._onError.bind(this, !1)), t.on(ef.J.PLAYER_WARNING, this._onError.bind(this, !0)), t.on(ef.J.PLAYER_PRELOADING_ERROR, this._onError.bind(this, !1)), t.on(ef.J.PLAYER_TRACKING_DATA_CREATED, this._onTrackingDataCreated.bind(this)), t.on(ef.J.PLAYER_TRACKING_DATA_FINALIZED, this._onTrackingDataFinalized.bind(this)), t.on(ef.J.PLAYER_PLAYBACK_START, this._onPlaybackStart.bind(this)), t.on(ef.J.PLAYER_LOG_CLIENT_EVENT, this._logClientEvent.bind(this)), Promise.resolve(e.deviceInfo).then(e => {
                        e && (this._deviceInfo = e)
                    }).catch(() => {})
                }
                _emitError(e, t) {
                    this.emit(ef.J.LOGGER_ERROR, Object.assign({
                        error: e,
                        trackingData: t
                    }, (0, eI.P)()))
                }
                _onError(e, t) {
                    var i, a, s;
                    let r = t.data,
                        n = this._currentTrackingData;
                    if (!n || n.noLog) return;
                    let o = r.error,
                        l = null != (i = null == o ? void 0 : o.debug) ? i : {};
                    l.position = "position" in r ? r.position : 0;
                    let _ = {
                        track: r.track || {},
                        debug: l,
                        preloading: "preloading" in r && !!r.preloading,
                        session_id: this._sessionId,
                        playback_id: n.playbackId || null,
                        player_play_id: "playId" in r ? r.playId : null,
                        http_status_code: null != (a = null == o ? void 0 : o.status) ? a : null,
                        license_server: null != (s = null == o ? void 0 : o.licenseServer) ? s : null
                    };
                    this._logError(o.code || C.I.UNKNOWN, o, _, n, e), this._logPlaybackError(n, o, _, this._deviceInfo, e)
                }
                _onPlayerLoad(e) {
                    let t = e.data.logData;
                    if (t)
                        if (t.impressionURLs)
                            for (let e of t.impressionURLs) this._logImpression(e);
                        else t.impressionURL && this._logImpression(t.impressionURL)
                }
                _onPlaybackStart(e) {
                    let t = e.data.trackingData;
                    t.noLog || t.noStats || this._logPlaybackStart(t)
                }
                _onTrackingDataCreated(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) {
                        this._currentTrackingData = null;
                        return
                    }
                    this._currentTrackingData = t, this._setSessionId(), t.noTSV || this._setSequenceId()
                }
                _getSessionTimestamp() {
                    let e = this._transport.getInitTime();
                    return e || (this._unauthSessionTimestamp || (this._unauthSessionTimestamp = Date.now()), this._unauthSessionTimestamp)
                }
                _setSessionId() {
                    this._sessionId = this._getSessionTimestamp().toString()
                }
                _setSequenceId() {
                    this._sessionId && (this._sequenceId = this._getSequenceId(this._sessionId))
                }
                _onTrackingDataFinalized(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) return;
                    let i = this._sessionId !== this._getSessionTimestamp().toString();
                    if (i && this._setSessionId(), t.playbackId && !t.noTSV) {
                        if (i && this._setSequenceId(), !t.playIntended && !t.played) return void this._rollbackSequenceId(this._sessionId);
                        this._logTrackStreamVerification(t)
                    }
                    t.noStats || this._logPlaybackStats(t)
                }
                _logTrackStreamVerification(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        playback_id: e.playbackId,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        next_playback_id: e.nextPlaybackId,
                        playback_service: e.playbackService
                    };
                    ev.debug("Logged TrackStreamVerification", t), this._logSender.logTrackStreamVerification(t).catch(i => {
                        var a, s, r;
                        let n = new ey(C.I.TSV_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(n.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (a = null == i ? void 0 : i.debug) ? a : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (s = null == i ? void 0 : i.status) ? s : null,
                            license_server: null != (r = null == i ? void 0 : i.licenseServer) ? r : null
                        };
                        this._logPlaybackError(e, n, o, this._deviceInfo, !1), this._emitError(n, e)
                    })
                }
                _logPlaybackStats(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        internal_play_id: e.internalPlayId,
                        memory_cached: e.memoryCached,
                        persistent_cached: e.persistentCached,
                        audio_format: e.audioCodec || "",
                        video_format: e.videoCodec || "",
                        manifest_id: e.fileId,
                        protected: e.isProtected,
                        key_system: e.keySystem,
                        key_system_impl: e.keySystemImpl,
                        urls_json: JSON.stringify(e.urls),
                        start_time: e.loadTime,
                        end_time: e.stopTime,
                        external_start_time: e.externalLoadTime,
                        ms_play_latency: e.msPlayLatency,
                        ms_init_latency: e.msInitLatency,
                        ms_head_latency: e.msHeadLatency,
                        ms_first_bytes_latency: e.msFirstBytesLatency,
                        ms_manifest_latency: e.msManifestLatency,
                        ms_resolve_latency: e.msResolveLatency,
                        ms_license_session_latency: e.msLicenseSessionLatency,
                        ms_license_generation_latency: e.msLicenseGenerationLatency,
                        ms_license_request_latency: e.msLicenseRequestLatency,
                        ms_license_update_latency: e.msLicenseUpdateLatency,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        ms_file_duration: e.msFileDuration,
                        ms_actual_duration: e.msActualDuration,
                        ms_metadata_duration: e.msMetadataDuration,
                        ms_start_position: e.startPosition,
                        ms_end_position: e.position,
                        ms_initial_rebuffer: e.msInitialRebuffering,
                        ms_seek_rebuffer: e.msSeekRebuffering,
                        ms_seek_rebuffer_longest: e.maxMsSeekRebuffering,
                        ms_stall_rebuffer: e.msStalled,
                        ms_stall_rebuffer_longest: e.maxMsStalled,
                        ms_played_per_surface: e.msPlayedPerSurface,
                        ms_played_visible: e.msPlayedVisible,
                        n_stalls: e.nStalls,
                        n_rendition_upgrade: e.nRenditionUpgrade,
                        n_rendition_downgrade: e.nRenditionDowngrade,
                        bps_bandwidth_max: e.bpsBandwidthMax,
                        bps_bandwidth_min: e.bpsBandwidthMin,
                        bps_bandwidth_avg: e.bpsBandwidthAvg,
                        n_seekback: e.nSeeksBackward,
                        n_seekforward: e.nSeeksForward,
                        audio_start_bitrate: e.audioStartBitrate,
                        video_start_bitrate: e.videoStartBitrate,
                        start_bitrate: e.startBitrate || e.bitrate || 0,
                        audio_quality: e.audioQuality,
                        time_weighted_bitrate: e.timeWeightedBitrate,
                        reason_start: e.reasonStart,
                        reason_end: e.reasonEnd,
                        initially_paused: !e.playIntended,
                        had_error: e.hadError,
                        n_warnings: e.nWarnings,
                        n_navigator_offline: e.nOffline,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        client_id: e.clientId,
                        correlation_id: e.correlationId,
                        n_dropped_video_frames: e.droppedVideoFrames,
                        n_total_video_frames: e.totalVideoFrames,
                        resolution_max: e.maxResolution || 0,
                        resolution_min: e.minResolution || 0,
                        total_bytes: e.totalBytes,
                        strategy: e.strategy,
                        ms_played_per_audio_format: e.msPlayedPerAudioFormat,
                        ms_played_per_video_format: e.msPlayedPerVideoFormat
                    };
                    ev.info("Logging PlaybackStats"), this._logSender.logJSSDKPlaybackStats(t).catch(i => {
                        var a, s, r;
                        let n = new ey(C.I.PLAYBACK_STATS_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(n.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (a = null == i ? void 0 : i.debug) ? a : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (s = null == i ? void 0 : i.status) ? s : null,
                            license_server: null != (r = null == i ? void 0 : i.licenseServer) ? r : null
                        };
                        this._logPlaybackError(e, n, o, this._deviceInfo, !1), this._emitError(n, e)
                    })
                }
                _logPlaybackStart(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        ms_start_position: e.startPosition,
                        initially_paused: !e.playIntended,
                        client_id: e.clientId,
                        correlation_id: e.correlationId,
                        feature_identifier: e.featureIdentifier
                    };
                    ev.info("Logging PlaybackStart"), this._logSender.logJSSDKPlaybackStart(t).catch(i => {
                        var a, s, r;
                        let n = new ey(C.I.PLAYBACK_START_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(n.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (a = null == i ? void 0 : i.debug) ? a : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (s = null == i ? void 0 : i.status) ? s : null,
                            license_server: null != (r = null == i ? void 0 : i.licenseServer) ? r : null
                        };
                        this._logPlaybackError(e, n, o, this._deviceInfo, !1), this._emitError(n, e)
                    })
                }
                _getSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    return t || (t = 0), t + 1 >= 0x1fffffffffffff && (t = 0), this._sequenceSessionStorage[e] = t + 1, t
                }
                _rollbackSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    t && (this._sequenceSessionStorage[e] = Math.max(t - 1, 0))
                }
                _logImpression(e) {
                    this._transport.request(e, {
                        forget: !0
                    }).catch(function(e) {
                        ev.warn("Unable to send impression request", e)
                    })
                }
                _logClientEvent(e) {
                    let t = {
                        source: e.data.source || e_.EMPTY,
                        source_version: J.tagged || e_.UNKNOWN,
                        event: e.data.event || e_.EMPTY,
                        json_data: JSON.stringify(e.data.payload || {})
                    };
                    this._logSender.logJSSDKClientEvent(t).catch(e => ev.warn("Failed to log client event", t, e))
                }
                _logError(e, t, i, a, s) {
                    let r = {
                        source: "playback",
                        source_version: J.tagged || e_.UNKNOWN,
                        type: e || e_.UNKNOWN,
                        message: t && t.message || e_.EMPTY,
                        stack: '""',
                        json_data: JSON.stringify(i || {}),
                        json_data_version: "1.0.0",
                        client_id: a.clientId,
                        correlation_id: a.correlationId
                    };
                    s ? this._logSender.logJSSDKWarning(r).catch(e => ev.warn("Failed to log warning", r, e)) : this._logSender.logJSSDKError(r).catch(e => ev.warn("Failed to log error", r, e))
                }
                _logPlaybackError(e, t, i, a, s) {
                    let r = c.ERROR;
                    s && (r = c.WARNING), t.unrecoverable && (r = c.FATAL);
                    let {
                        preloading: n,
                        player_play_id: o
                    } = i, l = i && i.debug ? i.debug : {}, {
                        isNetworkRelated: _ = !1,
                        segmentTimeStart: d,
                        segmentTimeEnd: u,
                        segmentByteStart: h,
                        segmentByteEnd: p
                    } = l, m = (0, eS.__rest)(l, ["isNetworkRelated", "segmentTimeStart", "segmentTimeEnd", "segmentByteStart", "segmentByteEnd"]);
                    m.src_url && (m.src_url = void 0);
                    let E = {
                        sdk_id: this._sdkId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        package_version: J.tagged || e_.EMPTY_VERSION,
                        feature_identifier: e.featureIdentifier,
                        device_id: a.id || e_.EMPTY,
                        device_model: a.model || e_.EMPTY,
                        device_brand: a.brand || e_.EMPTY,
                        os_name: a.os_name || e_.EMPTY,
                        os_version: a.os_version || e_.EMPTY,
                        play_track: e.currentTrackUri,
                        content_id: e.fileId,
                        content_class: e.contentClass,
                        content_type: e.contentType,
                        media_type: e.mediaType,
                        position: e.position,
                        strategy: e.strategy,
                        protected: e.isProtected,
                        url: "data:" === e.url.substring(0, 5) ? `${e.url.slice(0,69)}...` : e.url,
                        preloading: n,
                        player_sequence_index: o || void 0,
                        key_system: e.keySystem,
                        key_system_label: e.keySystemLabel,
                        key_system_impl: e.keySystemImpl,
                        segment_byte_start: h,
                        segment_byte_end: p,
                        segment_time_start: d,
                        segment_time_end: u,
                        trace_id: function(e) {
                            let t = "";
                            for (let i = 0; i < e.length; i++) {
                                let a = e[i];
                                a < 16 && (t += "0"), t += a.toString(16)
                            }
                            return t
                        }((e => eT ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                            let t = [];
                            for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                            return t
                        }(e))(Math.ceil(16))),
                        category: t && t.name || e_.UNKNOWN,
                        severity: r,
                        code: t && t.code || e_.EMPTY,
                        message: t && t.message || e_.EMPTY,
                        http_status_code: t && t.status || void 0,
                        license_server: t && t.licenseServer || e_.EMPTY,
                        is_network_related: _,
                        debug: Object.keys(m).length > 0 ? m : void 0
                    };
                    this._logSender.logJSSDKPlaybackError(E).catch(t => ev.warn("Failed to log playback error", e, t))
                }
            }
            class eA extends Error {
                constructor(e = C.I.STORAGE_ERROR, t = "Storage Error", i = {}) {
                    super(t), this.status = -1, this.fileId = "", this.debug = {}, this.canPlayNext = !0, this.code = e, this.message = t, this.name = "StorageError", this.debug = i
                }
            }
            let eR = q.m.forTag("playback.storage_resolve");
            class eL {
                constructor(e) {
                    this._transport = e
                }
                _parseResponse(e, t) {
                    var i;
                    let a;
                    if (200 !== t.status) return (a = new eA(C.I.STORAGE_FAILED_WITH_STATUS, `Storage Resolve responded with ${t.status}`, {
                        isNetworkRelated: !0
                    })).status = t.status, a.fileId = e, Promise.reject(a);
                    let s = t.body;
                    return (null == (i = null == s ? void 0 : s.cdnurl) ? void 0 : i.length) ? Promise.resolve({
                        uri: s.cdnurl[0],
                        uris: s.cdnurl,
                        protection: "cenc"
                    }) : ((a = new eA(C.I.STORAGE_RETURNED_NO_TRACKS, `Storage Resolve returned no tracks for fileId ${e}`)).fileId = e, Promise.reject(a))
                }
                getCDNURL(e, t) {
                    eR.info("Requesting CDN URL for ", e);
                    let i = "files/audio/interactive",
                        a = t ? `v2/${i}/${t}/${e}` : `${i}/${e}`,
                        s = `@webgate/storage-resolve/${a}?version=10000000&product=9&platform=39&alt=json`;
                    return this._transport.request(s, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(this._parseResponse.bind(this, e))
                }
                getManifest(e) {
                    let t = `https://seektables.spotifycdn.com/v1/seektable/${e}`;
                    return eR.info("Requesting seektable for ", e), this._transport.request(t, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(t => {
                        let i;
                        return 200 !== t.status ? ((i = new eA(C.I.STORAGE_TRACK_MANIFEST_FAILED, `Track manifest request failed with status code ${t.status}`, {
                            isNetworkRelated: !0
                        })).debug.file_id = e, i.status = t.status, Promise.reject(i)) : t.body ? t.body : ((i = new eA(C.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.")).debug.file_id = e, i.status = t.status, Promise.reject(i))
                    })
                }
            }
            var eb = i(63533),
                eD = i(73880);
            class eO extends Error {
                constructor(e, t) {
                    super(t), this.debug = {}, this.name = "TrackingError", this.message = t, this.code = e
                }
            }
            class eN {
                constructor() {
                    this._version = "1.0.0", this._map = {}
                }
                clear() {
                    this._map = {}
                }
                track(e, t) {
                    let i = this._map[e];
                    i || (i = {
                        url: e,
                        segments: 0,
                        bandwidths: [],
                        totalBandwidth: 0
                    }, this._map[e] = i), i.segments += 1, i.bandwidths.push(t.bandwidth), i.totalBandwidth += t.bandwidth
                }
                toJSON() {
                    let e = [];
                    for (let t in this._map) {
                        if (!this._map[t]) continue;
                        let i = this._map[t];
                        i && e.push({
                            url: t,
                            segments: i.segments,
                            avg_bw: parseFloat((i.totalBandwidth / i.bandwidths.length).toFixed(7))
                        })
                    }
                    return {
                        version: this._version,
                        urls: e
                    }
                }
            }
            class eC {
                constructor() {
                    this._bitrates = {}, this._isFinalized = !1, this._needsEndSegment = !1, this._segments = [], this._cdnURLTracker = new eN, this.currentSpeed = 1, this.audioCodec = null, this.bitrate = 0, this.audioQuality = void 0, this.urls = {}, this.url = "", this.currentTrackUri = "", this.displayTrack = "", this.mediaType = "", this.mediaFormat = "", this.externalLoadTime = 0, this.fileId = "", this.gaiaDevId = "none", this.hadError = !1, this.internalPlayId = "", this.isProtected = !1, this.keySystem = "", this.keySystemImpl = "", this.keySystemLabel = "", this.lastPlayPosition = -1, this.loadTime = 0, this.localTimeMs = -1, this.maxContinuous = 0, this.msInitialRebuffering = 0, this.maxMsSeekRebuffering = 0, this.maxMsStalled = 0, this.memoryCached = !1, this.msActualDuration = 0, this.msMetadataDuration = 0, this.msFileDuration = 0, this.msHeadLatency = null, this.msInitLatency = null, this.msKeyLatency = null, this.msLicenseGenerationLatency = null, this.msLicenseRequestLatency = null, this.msLicenseSessionLatency = null, this.msLicenseUpdateLatency = null, this.msManifestLatency = null, this.msPlayed = 0, this.msNominalPlayed = 0, this.msPlayedUnion = 0, this.msPlayLatency = null, this.msFirstBytesLatency = null, this.msResolveLatency = null, this.msSeekRebuffering = 0, this.msSeeksBackward = 0, this.msSeeksForward = 0, this.nextPlaybackId = "", this.nOffline = 0, this.noLog = !1, this.noTSV = !1, this.noStats = !1, this.noExternalReporting = !1, this.nWarnings = 0, this.msStalled = 0, this.nSeeksBackward = 0, this.nSeeksForward = 0, this.nSpeedChanges = 0, this.nStalls = 0, this.nRenditionUpgrade = 0, this.nRenditionDowngrade = 0, this.bpsBandwidthMax = 0, this.bpsBandwidthMin = 0, this.bpsBandwidthAvg = 0, this.totalBandwidth = 0, this.lastBitrate = 0, this.persistentCached = !1, this.playbackId = "", this.playContext = "", this.played = !1, this.position = 0, this.reasonEnd = "unknown", this.reasonStart = "unknown", this.referrer = "unknown", this.referrerVendor = "unknown", this.referrerVersion = "unknown", this.sourceEnd = "unknown", this.sourceStart = "unknown", this.startPosition = 0, this.stopTime = 0, this.streamingRule = "none", this.timeWeightedBitrate = 0, this.totalBytes = 0, this.playIntended = !1, this.audioStartBitrate = null, this.videoStartBitrate = null, this.videoCodec = null, this.clientId = "unknown", this.correlationId = "unknown", this.droppedVideoFrames = 0, this.totalVideoFrames = 0, this.maxResolution = 0, this.minResolution = 0, this.playbackService = "", this.strategy = "", this.segmentTimeStart = null, this.segmentTimeEnd = null, this.segmentByteStart = null, this.segmentByteEnd = null, this.contentClass = "", this.contentType = "unknown", this.featureIdentifier = "", this.msPlayedVisible = 0, this.muted = !1, this.volume = 1, this.logData = {}, this.msPlayedPerSurface = {}, this.msPlayedPerAudioFormat = {}, this.msPlayedPerVideoFormat = {}, this.deviceInfo = null, this.playedVideoCodec = null, this.playedVideoBitrate = 0, this.playedVideoResolution = 0, this.playedAudioCodec = null, this.playedAudioBitrate = 0
                }
                static create() {
                    return new eC
                }
                _calculateUnion() {
                    let e, t = this._segments.slice(0),
                        i = 0,
                        a = 0,
                        s = 0,
                        r = 0,
                        n = 0,
                        o = this.maxContinuous;
                    for (; n < t.length; n++) n % 2 != 0 && void 0 !== t[n - 1] && "start" === t[n - 1].type && (o = (e = t[n].time - t[n - 1].time) > o ? e : o);
                    for (this.maxContinuous = o, t.sort((e, t) => e.time - t.time); r < t.length; r++) "start" === t[r].type && (0 === a && (s = r), ++a), "end" === t[r].type && 0 == --a && (i += t[r].time - t[s].time);
                    return i
                }
                _calculateWeightedBitrate(e) {
                    let t = this._bitrates,
                        i = 0;
                    for (let a in t) a && Object.prototype.hasOwnProperty.call(t, a) && e > 0 && (i += parseInt(a, 10) * t[a] / e);
                    return Math.round(i)
                }
                registerVideoVariant(e) {
                    var t;
                    let i = null == (t = e.videoProfile) ? void 0 : t.video_bitrate;
                    i && (this._bitrates[i] = this._bitrates[i] || 0, this.startBitrate || (this.startBitrate = i)), e.audioProfile && (this.audioCodec = e.audioProfile.audio_codec, this.audioStartBitrate = e.audioProfile.audio_bitrate, this.playedAudioBitrate = e.audioProfile.audio_bitrate, this.playedAudioCodec = e.audioProfile.audio_codec), e.videoProfile && (this.videoCodec = e.videoProfile.video_codec, this.videoStartBitrate = e.videoProfile.video_bitrate, this.lastBitrate = e.videoProfile.video_bitrate, this.minResolution = e.videoProfile.video_resolution, this.maxResolution = e.videoProfile.video_resolution, this.playedVideoBitrate = e.videoProfile.video_bitrate, this.playedVideoResolution = e.videoProfile.video_resolution, this.playedVideoCodec = e.videoProfile.video_codec)
                }
                addStartSegment() {
                    this._segments.push({
                        type: "start",
                        time: this.position
                    }), this._needsEndSegment = !0
                }
                addEndSegment() {
                    this._needsEndSegment && (this._segments.push({
                        type: "end",
                        time: this.position
                    }), this._needsEndSegment = !1)
                }
                addMSPlayed(e) {
                    if (!e) return;
                    if (e < 0) throw TypeError(`Cannot add negative msNominalPlayed value: ${e}`);
                    let t = e / this.currentSpeed;
                    if (this.msPlayed += t, this.msNominalPlayed += e, this.playedAudioCodec && this.playedAudioBitrate > 0) {
                        let e = `${this.playedAudioCodec};${this.playedAudioBitrate}`;
                        this.msPlayedPerAudioFormat[e] = (this.msPlayedPerAudioFormat[e] || 0) + t
                    }
                    if (this.playedVideoCodec && this.playedVideoBitrate > 0) {
                        let e = `${this.playedVideoCodec};${this.playedVideoBitrate};${this.playedVideoResolution}`;
                        this.msPlayedPerVideoFormat[e] = (this.msPlayedPerVideoFormat[e] || 0) + t
                    }
                    this.isVideoVisible && "video" === this.mediaType && (this.msPlayedVisible += t, this.videoSurface && (this.msPlayedPerSurface[this.videoSurface] = (this.msPlayedPerSurface[this.videoSurface] || 0) + t))
                }
                addSpeedChange(e) {
                    ++this.nSpeedChanges, this.currentSpeed = e
                }
                trackBitrate(e, t) {
                    let i = e || "dummy";
                    this._bitrates[i] = this._bitrates[i] || 0, this._bitrates[i] += t
                }
                trackBufferURL(e, t) {
                    let i = e.substring(0, 5);
                    "data:" !== i && "blob:" !== i && this._cdnURLTracker.track(e, t)
                }
                finalize() {
                    if (this._isFinalized) throw new eO(C.I.TRACK_DATA_ALREADY_FINALIZED, "TrackData already finalized.");
                    this.msPlayedUnion = this._calculateUnion(), this.nSeeksBackward || this.nSeeksForward || this.nSpeedChanges || (this.msNominalPlayed = this.maxContinuous = this.msPlayedUnion, this.msPlayed = this.msNominalPlayed / this.currentSpeed, this.nSpeedChanges = 0);
                    let e = this.msPlayed;
                    return this.timeWeightedBitrate = this._calculateWeightedBitrate(e), this.startBitrate || (this.startBitrate = this.bitrate), this.urls = this._cdnURLTracker.toJSON(), this._isFinalized = !0, !0
                }
                getURLsJSON() {
                    var e, t;
                    return null != (t = null == (e = this._cdnURLTracker.toJSON().urls) ? void 0 : e.map(({
                        url: e
                    }) => e)) ? t : []
                }
                adoptCDNURLTrackerFrom(e) {
                    this._cdnURLTracker = e._cdnURLTracker
                }
                getPlaybackStats() {
                    let e;
                    switch (this.keySystem) {
                        case eD.J.WIDEVINE:
                            e = "widevine";
                            break;
                        case eD.J.PLAYREADY:
                        case eD.J.PLAYREADY_HARDWARE:
                        case eD.J.PLAYREADY_RECOMMENDATION:
                        case eD.J.PLAYREADY_RECOMMENDATION_3000:
                            e = "playready";
                            break;
                        default:
                            e = "none"
                    }
                    return {
                        ms_total_est: this.msActualDuration,
                        ms_metadata_duration: this.msMetadataDuration,
                        ms_manifest_latency: this.msManifestLatency || 0,
                        ms_latency: this.msPlayLatency || 0,
                        ms_first_bytes_latency: this.msFirstBytesLatency || 0,
                        start_offset_ms: this.startPosition,
                        ms_initial_buffering: this.msInitialRebuffering,
                        ms_initial_rebuffer: this.msInitialRebuffering,
                        ms_seek_rebuffering: this.msSeekRebuffering,
                        ms_stalled: this.msStalled,
                        max_ms_seek_rebuffering: this.maxMsSeekRebuffering,
                        max_ms_stalled: this.maxMsStalled,
                        n_stalls: this.nStalls,
                        n_rendition_upgrade: this.nRenditionUpgrade,
                        n_rendition_downgrade: this.nRenditionDowngrade,
                        bps_bandwidth_max: this.bpsBandwidthMax,
                        bps_bandwidth_min: this.bpsBandwidthMin,
                        bps_bandwidth_avg: this.bpsBandwidthAvg,
                        audiocodec: this.audioCodec ? this.audioCodec.toLowerCase() : void 0,
                        videocodec: this.videoCodec ? this.videoCodec.toLowerCase() : void 0,
                        audio_start_bitrate: this.audioStartBitrate,
                        video_start_bitrate: this.videoStartBitrate,
                        start_bitrate: this.startBitrate || this.bitrate || void 0,
                        full_screen: void 0,
                        time_weighted_bitrate: this.timeWeightedBitrate,
                        buffering_percentage: void 0,
                        prefetched_bytes: void 0,
                        prefetched_bytes_loaded: void 0,
                        prefetched_initial_bitrate: void 0,
                        key_system: e,
                        ms_key_latency: this.msKeyLatency || 0,
                        total_bytes: this.totalBytes,
                        local_time_ms: this.localTimeMs,
                        ms_played_background: void 0,
                        n_dropped_video_frames: this.droppedVideoFrames,
                        n_total_video_frames: this.totalVideoFrames,
                        resolution_max: this.maxResolution,
                        resolution_min: this.minResolution,
                        strategy: this.strategy,
                        ms_played_per_surface: this.msPlayedPerSurface,
                        ms_played_visible: this.msPlayedVisible,
                        ms_played_per_audio_format: this.msPlayedPerAudioFormat,
                        ms_played_per_video_format: this.msPlayedPerVideoFormat
                    }
                }
                isFinalized() {
                    return this._isFinalized
                }
            }
            class ek {
                constructor() {
                    this._store = {}
                }
                set(e, t) {
                    this._store[e] = t
                }
                get(e) {
                    var t;
                    return null != (t = this._store[e]) ? t : null
                }
            }
            let eM = q.m.forTag("playback.tracker");
            class eU extends M.bk {
                constructor(e = {
                    deviceInfo: null
                }) {
                    super(), this._playedThreshold = 31e3, this._playedThresholdReached = !1, this._trackingData = null, this._playbackMetadataStore = null, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, this._playbackHistory = [], this._deviceInfo = null, this._playedThreshold = e.playerThreshold || 31e3, this._deviceInfo = e.deviceInfo || null
                }
                static create(e) {
                    return new eU(e)
                }
                _checkPlayedThreshold() {
                    let e = this._trackingData;
                    e && this._playedThreshold && !this._playedThresholdReached && !(e.msPlayed < this._playedThreshold) && (this._playedThresholdReached = !0, this.emit(ef.J.TRACKER_PLAYED_THRESHOLD_REACHED, {
                        played: e && e.msPlayed || 0,
                        threshold: this._playedThreshold
                    }))
                }
                _checkPercentileThresholds() {
                    let e = this._trackingData;
                    if (!e) return;
                    let t = e.msActualDuration || e.msFileDuration;
                    if (!t) return;
                    let i = Math.ceil(t / 4);
                    !this._quartileTrackingEvents.firstEventFired && e.position >= i && (this._quartileTrackingEvents.firstEventFired = !0, this.emit(ef.J.TRACKER_FIRST_QUARTILE, null)), !this._quartileTrackingEvents.midEventFired && e.position >= 2 * i && (this._quartileTrackingEvents.midEventFired = !0, this.emit(ef.J.TRACKER_MIDPOINT, null)), !this._quartileTrackingEvents.thirdEventFired && e.position >= 3 * i && (this._quartileTrackingEvents.thirdEventFired = !0, this.emit(ef.J.TRACKER_THIRD_QUARTILE, null))
                }
                _inheritLoadState(e, t) {
                    e.msActualDuration = t.msActualDuration, e.msFileDuration = t.msFileDuration, e.keySystem = t.keySystem, e.keySystemImpl = t.keySystemImpl, e.keySystemLabel = t.keySystemLabel, e.msKeyLatency = t.msKeyLatency, e.msPlayLatency = t.msPlayLatency, e.msFirstBytesLatency = t.msFirstBytesLatency, e.msInitLatency = t.msInitLatency, e.msHeadLatency = t.msHeadLatency, e.msManifestLatency = t.msManifestLatency, e.msResolveLatency = t.msResolveLatency, e.msLicenseSessionLatency = t.msLicenseSessionLatency, e.msLicenseGenerationLatency = t.msLicenseGenerationLatency, e.msLicenseRequestLatency = t.msLicenseRequestLatency, e.msLicenseUpdateLatency = t.msLicenseUpdateLatency, e.videoCodec = t.videoCodec, e.audioCodec = t.audioCodec, e.audioQuality = t.audioQuality, e.videoStartBitrate = t.videoStartBitrate, e.audioStartBitrate = t.audioStartBitrate, e.startBitrate = t.startBitrate, e.bitrate = t.bitrate, e.strategy = t.strategy, e.isProtected = t.isProtected, e.contentClass = t.contentClass, e.memoryCached = t.memoryCached, e.persistentCached = t.persistentCached, e.maxResolution = t.maxResolution, e.minResolution = t.minResolution, e.bpsBandwidthMax = t.bpsBandwidthMax, e.bpsBandwidthMin = t.bpsBandwidthMin, e.bpsBandwidthAvg = t.bpsBandwidthAvg, e.playedVideoCodec = t.playedVideoCodec, e.playedVideoBitrate = t.playedVideoBitrate, e.playedVideoResolution = t.playedVideoResolution, e.playedAudioCodec = t.playedAudioCodec, e.playedAudioBitrate = t.playedAudioBitrate, e.adoptCDNURLTrackerFrom(t)
                }
                getMSPlayed() {
                    return this._trackingData ? this._trackingData.msPlayed : 0
                }
                getStallsInformation() {
                    return this._trackingData ? {
                        nStalls: this._trackingData.nStalls,
                        msTotalStalled: this._trackingData.msStalled
                    } : {
                        nStalls: 0,
                        msTotalStalled: 0
                    }
                }
                trackLoadStart(e) {
                    var t, i;
                    let a = eC.create();
                    this._trackingData = a, this._playbackMetadataStore = new ek, this._playedThresholdReached = !1, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, a.fileId = null != (t = e.fileId) ? t : "", a.url = e.url || "", a.mediaFormat = e.mediaFormat, a.currentTrackUri = e.uri, a.loadTime = e.loadTime, a.loadStartMonotonic = e.loadStartMonotonic, a.internalPlayId = e.playId, a.playIntended = e.playIntended, a.contentType = e.contentType || "unknown", a.currentSpeed = e.startingSpeed || 0, this._playedThreshold = e.playedThreshold;
                    let s = e.logData;
                    a.externalLoadTime = s.externalLoadTime || 0, a.playbackId = s.playbackId || "", a.reasonStart = s.reason || "unknown", a.sourceStart = s.source || "unknown", a.clientId = s.clientId || "", a.correlationId = s.correlationId || "", a.playbackService = s.playbackService || "", a.featureIdentifier = s.featureIdentifier || "";
                    let r = s.referrer || {};
                    a.referrer = void 0 !== r.name ? r.name : "unknown", a.referrerVersion = void 0 !== r.version ? r.version : "unknown", a.referrerVendor = void 0 !== r.vendor ? r.vendor : "unknown";
                    let n = s.format || {};
                    n.codec && (a.audioCodec = n.codec.toLowerCase(), a.playedAudioCodec = n.codec.toLowerCase());
                    let o = e.mediaType;
                    a.mediaType = o, n.bitrate && ("audio" === o ? (a.audioStartBitrate = n.bitrate, a.playedAudioBitrate = n.bitrate) : "video" === o && (a.videoStartBitrate = n.bitrate, a.playedVideoBitrate = n.bitrate), a.bitrate = n.bitrate), n.audioQuality && (a.audioQuality = n.audioQuality), a.isVideoVisible = e.isVideoVisible, a.videoSurface = e.videoSurface, a.muted = e.muted, a.volume = e.volume, a.currentSpeed = e.startingSpeed, a.gaiaDevId = s.deviceId || "none", a.noLog = s.noLog || !1, a.noTSV = s.noTSV || !1, a.noStats = s.noStats || !1, a.noExternalReporting = s.noExternalReporting || !1, a.logData = s, a.deviceInfo = this._deviceInfo;
                    let l = e.contentMetadata;
                    a.contentMetadata = l, "number" == typeof(null == l ? void 0 : l.displayDuration) && (a.msMetadataDuration = l.displayDuration), a.startPosition = null != (i = e.initialPosition) ? i : 0, this.emit(ef.J.TRACKER_TRACKING_DATA_CREATED, Object.assign({
                        trackingData: a,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, eI.P)()))
                }
                trackBufferLoadStart() {
                    let e = this._trackingData;
                    e && (e.bufferLoadStartMonotonic = (0, w.X)())
                }
                trackBytesDownloaded(e) {
                    let t = this._trackingData;
                    t && (t.totalBytes += e)
                }
                trackLoadDone(e) {
                    let t = this._trackingData;
                    t && (t.bufferLoadStartMonotonic && (t.msInitLatency = (0, w.r)(t.bufferLoadStartMonotonic)), t.localTimeMs = Date.now(), t.position = e, t.addStartSegment())
                }
                trackPlay(e, t) {
                    let i = this._trackingData;
                    i && (i.played || (this.emit(ef.J.TRACKER_PLAYBACK_START, {
                        trackingData: i
                    }), i.startPosition = e), i.played = !0, i.position = e, i.addSpeedChange(t || 1))
                }
                trackCanPlayThrough() {
                    if (!this._trackingData) return;
                    let e = (0, w.X)();
                    this.trackHeadLatency(e)
                }
                trackPlayLatency(e = (0, w.X)()) {
                    let t = this._trackingData;
                    !t || t.msPlayLatency || t.nSeeksBackward || t.nSeeksForward || t.loadStartMonotonic && (t.msPlayLatency = (0, w.r)(t.loadStartMonotonic, e))
                }
                trackHeadLatency(e = (0, w.X)()) {
                    let t = this._trackingData;
                    t && t.bufferLoadStartMonotonic && (t.msHeadLatency = (0, w.r)(t.bufferLoadStartMonotonic, e))
                }
                trackFirstBytesLatency(e = (0, w.X)()) {
                    let t = this._trackingData;
                    t && !t.msFirstBytesLatency && t.loadStartMonotonic && (t.msFirstBytesLatency = (0, w.r)(t.loadStartMonotonic, e))
                }
                trackBufferURL(e, t) {
                    let i = this._trackingData;
                    i && i.trackBufferURL(e, t)
                }
                trackNavigatorOffline() {
                    let e = this._trackingData;
                    e && (e.nOffline += 1)
                }
                trackInitialRebuffering(e) {
                    let t = this._trackingData;
                    t && (t.msInitialRebuffering = e)
                }
                trackSeekRebuffering(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsSeekRebuffering && (t.maxMsSeekRebuffering = e), t.msSeekRebuffering += e)
                }
                trackMsStalled(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsStalled && (t.maxMsStalled = e), t.msStalled += e, t.nStalls++)
                }
                trackLoadFailed() {
                    let e = this._trackingData;
                    e && (this.trackPlayLatency(), e.position = 0, e.addStartSegment())
                }
                trackStopped(e, t, i) {
                    var a, s, r, n;
                    let o = this._trackingData;
                    if (!o || o.isFinalized()) return;
                    if (o.stopTime = Date.now(), o.lastPlayPosition >= 0 && e >= 0 && o.lastPlayPosition < e) {
                        let t = e - o.lastPlayPosition;
                        o.addMSPlayed(t)
                    }
                    o.addEndSegment(), o.sourceEnd = t.source || "unknown", o.reasonEnd = t.reason || "unknown", o.nextPlaybackId = t.playbackId || "", o.droppedVideoFrames = null != (s = null == (a = null == i ? void 0 : i.video) ? void 0 : a.droppedVideoFrames) ? s : 0, o.totalVideoFrames = null != (n = null == (r = null == i ? void 0 : i.video) ? void 0 : r.totalVideoFrames) ? n : 0, o.finalize(), eM.info("Tracker data finalized.");
                    let l = o.getPlaybackStats();
                    this.emit(ef.J.TRACKER_TRACKING_DATA_FINALIZED, Object.assign({
                        trackingData: o,
                        playbackStats: l,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, eI.P)())), "" !== o.playbackId && -1 !== this._playbackHistory.indexOf(o.playbackId) && this.emit(ef.J.TRACKER_LOG_CLIENT_EVENT, {
                        source: "playback:tracker",
                        event: "playback_id_reuse",
                        payload: {
                            playbackId: o.playbackId,
                            playbackHistory: [...this._playbackHistory]
                        }
                    }), 10 === this._playbackHistory.length && (this._playbackHistory = this._playbackHistory.slice(1)), this._playbackHistory.push(o.playbackId)
                }
                beginLoopIteration(e, t) {
                    let i = this._trackingData;
                    if (!i) return;
                    let a = i.msActualDuration || i.position;
                    i.position = a, i.lastPlayPosition = a;
                    let s = i.logData;
                    this.trackStopped(a, Object.assign(Object.assign({}, s), {
                        playbackId: e.playbackId,
                        reason: l.TRACK_DONE,
                        source: s.source || ""
                    })), this.trackLoadStart({
                        loadTime: Date.now(),
                        loadStartMonotonic: (0, w.X)(),
                        uri: i.currentTrackUri,
                        fileId: i.fileId,
                        playId: t,
                        logData: e,
                        mediaType: i.mediaType,
                        contentType: i.contentType,
                        contentMetadata: i.contentMetadata,
                        isVideoVisible: i.isVideoVisible,
                        videoSurface: i.videoSurface,
                        muted: i.muted,
                        volume: i.volume,
                        startingSpeed: i.currentSpeed,
                        playIntended: !0,
                        playedThreshold: this._playedThreshold,
                        initialPosition: 0,
                        url: i.url,
                        mediaFormat: i.mediaFormat
                    });
                    let r = this._trackingData;
                    r && this._inheritLoadState(r, i), this.trackPlay(0, i.currentSpeed), this.trackPlaying(0)
                }
                trackPositionChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let i = t.position;
                    e !== i && (t.addEndSegment(), e > i ? (t.nSeeksForward++, t.msSeeksForward += e - i) : e < i && (t.nSeeksBackward++, t.msSeeksBackward += i - e), t.position = e, t.lastPlayPosition = -1, t.addStartSegment())
                }
                trackPlaying(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackPaused(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackProgress(e, t) {
                    let i = this._trackingData;
                    if (!(null == i ? void 0 : i.played)) return;
                    let a = 0;
                    if (i.lastPlayPosition >= 0) {
                        if ((a = e - i.lastPlayPosition) < 0) return void eM.warn("Skipping msPlayed calculation: late progress event.");
                        i.addMSPlayed(a)
                    }
                    this._checkPlayedThreshold(), i.position = e, i.lastPlayPosition = e, this._checkPercentileThresholds(), t && i.trackBitrate(t, a)
                }
                trackSpeedChanged(e) {
                    let t = this._trackingData;
                    t && t.addSpeedChange(e)
                }
                trackVideoLoadStart(e) {
                    let t = this._trackingData;
                    t && t.registerVideoVariant(e)
                }
                trackWarning() {
                    let e = this._trackingData;
                    e && e.nWarnings++
                }
                trackOffline() {
                    let e = this._trackingData;
                    e && e.nOffline++
                }
                trackStrategy(e) {
                    let t = this._trackingData;
                    t && (t.strategy = e)
                }
                setActualDuration(e) {
                    let t = this._trackingData;
                    t && (t.msActualDuration = e)
                }
                setKeySystem(e) {
                    let t = this._trackingData;
                    t && (t.keySystem = e)
                }
                setKeySystemImpl(e) {
                    let t = this._trackingData;
                    t && (t.keySystemImpl = e)
                }
                setManifestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msManifestLatency = e)
                }
                setKeyLatency(e) {
                    let t = this._trackingData;
                    t && (t.msKeyLatency = e)
                }
                setMemoryCached(e) {
                    let t = this._trackingData;
                    t && (t.memoryCached = e)
                }
                setPersistentCached(e) {
                    let t = this._trackingData;
                    t && (t.persistentCached = e)
                }
                setProtected(e) {
                    let t = this._trackingData;
                    t && (t.isProtected = e)
                }
                setHadError(e) {
                    let t = this._trackingData;
                    t && (t.hadError = e)
                }
                setLicenseSessionLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseSessionLatency = e)
                }
                setLicenseGenerationLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseGenerationLatency = e)
                }
                setLicenseRequestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseRequestLatency = e)
                }
                setLicenseUpdateLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseUpdateLatency = e)
                }
                setResolveLatency(e) {
                    let t = this._trackingData;
                    t && (t.msResolveLatency = e)
                }
                setCalculatedDuration(e) {
                    let t = this._trackingData;
                    t && (t.msFileDuration = e)
                }
                setVideoSurface(e) {
                    this._trackingData && (this._trackingData.videoSurface = e)
                }
                setIsVideoVisible(e) {
                    this._trackingData && (this._trackingData.isVideoVisible = e)
                }
                setVolume(e) {
                    this._trackingData && (this._trackingData.volume = e)
                }
                trackFragment(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bandwidth: i,
                        resolution: a
                    } = e;
                    a && ((a < t.minResolution || !t.minResolution) && (t.minResolution = a), a > t.maxResolution && (t.maxResolution = a)), (i < t.bpsBandwidthMin || !t.bpsBandwidthMin) && (t.bpsBandwidthMin = i), i > t.bpsBandwidthMax && (t.bpsBandwidthMax = i), t.bpsBandwidthAvg = t.bpsBandwidthAvg ? (t.bpsBandwidthAvg + i) / 2 : i
                }
                trackProfileChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bitrate: i
                    } = e;
                    i < t.lastBitrate && t.nRenditionDowngrade++, i > t.lastBitrate && t.nRenditionUpgrade++, t.lastBitrate = i
                }
                trackPlayingProfileChanged(e) {
                    var t, i, a;
                    let s = this._trackingData;
                    if (!s) return;
                    let {
                        video: r,
                        audio: n
                    } = e;
                    r && (s.playedVideoCodec = (0, eb.v)(r.mimeType).codec, s.playedVideoBitrate = null != (t = r.bitrate) ? t : 0, s.playedVideoResolution = null != (i = r.resolution) ? i : 0), n && (s.playedAudioCodec = (0, eb.v)(n.mimeType).codec, s.playedAudioBitrate = null != (a = n.bitrate) ? a : 0)
                }
                setContentClass(e) {
                    let t = this._trackingData;
                    t && (t.contentClass = e)
                }
                setKeySystemLabel(e) {
                    let t = this._trackingData;
                    t && (t.keySystemLabel = e)
                }
                setUrl(e) {
                    let t = this._trackingData;
                    t && (t.url = e)
                }
                setMediaType(e) {
                    let t = this._trackingData;
                    t && (t.mediaType = e)
                }
                setContentType(e = "unknown") {
                    let t = this._trackingData;
                    t && (t.contentType = e)
                }
                getPlaybackMetadataStore() {
                    return this._playbackMetadataStore
                }
            }
            class ew extends M.bk {
                constructor(e) {
                    super(), this._transport = e, this._parseManifestResponse = this._parseManifestResponse.bind(this)
                }
                static create(e) {
                    return new ew(e)
                }
                _parseManifestResponse(e) {
                    var t;
                    let i = e.metadata.startTime;
                    if (200 !== e.status) {
                        let t = new eA(C.I.STORAGE_VIDEO_MANIFEST_FAILED, `Video manifest request failed with status ${e.status}`, {
                            isNetworkRelated: !0
                        });
                        return t.status = e.status, t.debug = e.body, this.emit(ef.J.VIDEO_MANIFEST_RESOLVE_FAILED, Object.assign({
                            url: e.url,
                            error: t,
                            start_time: i
                        }, (0, eI.P)())), Promise.reject(t)
                    }
                    let a = e.body,
                        s = null == (t = e.headers) ? void 0 : t.get("content-length");
                    return this.emit(ef.J.VIDEO_MANIFEST_RESOLVED, Object.assign({
                        url: e.url,
                        manifest_size: s ? parseInt(s, 10) : JSON.stringify(a).length,
                        start_time: i,
                        end_time: Date.now()
                    }, (0, eI.P)())), Promise.resolve(a)
                }
                getInitSegmentURLs(e, t, i, a) {
                    let s = "";
                    i && (s = e + t.replace("{{profile_id}}", i.id.toString(10)).replace("{{file_type}}", i.file_type));
                    let r = "";
                    return a && (r = e + t.replace("{{profile_id}}", a.id.toString(10)).replace("{{file_type}}", a.file_type)), {
                        audio: s,
                        video: r,
                        audioLogging: s,
                        videoLogging: r
                    }
                }
                getSegmentURLs(e, t, i, a, s) {
                    let r = "";
                    a && (r = e + t.replace("{{profile_id}}", a.id.toString(10)).replace("{{file_type}}", a.file_type));
                    let n = "";
                    return s && (n = e + t.replace("{{profile_id}}", s.id.toString(10)).replace("{{file_type}}", s.file_type)), {
                        audio: r.replace("{{segment_timestamp}}", i.toString()),
                        video: n.replace("{{segment_timestamp}}", i.toString()),
                        audioLogging: r,
                        videoLogging: n
                    }
                }
                getManifest(e, t = !1) {
                    let i = `${t?"@webgate/manifests/v9/unauth/json/sources":"@webgate/manifests/v9/json/sources"}/${e}/options/supports_drm`;
                    return this._transport.request(i, {
                        authorize: !t,
                        responseType: "json",
                        parseResponseHeaders: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        },
                        metadata: {
                            startTime: Date.now()
                        }
                    }).then(this._parseManifestResponse)
                }
            }
            var eF = i(6606);
            class eB extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "LicenseError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t, i = {}) {
                    let a = new eB(e, t, i);
                    return a.unrecoverable = !0, a.canPlayNext = !1, a
                }
            }
            class eY {
                constructor(e) {
                    this._sdk = {
                        name: "",
                        version: ""
                    }, this._securityLevel = null, this._urls = {}, e.sdk && (this._sdk = e.sdk), e.securityLevel && (this._securityLevel = e.securityLevel), this._transport = e.transport, this._useTestLicenseServer = !!e.useTestLicenseServer, this._transport.on(this._transport.EVENT_CONNECTION_ID, () => {
                        this._urls = {}
                    })
                }
                _getFallbackLicenseURL(e, t) {
                    switch (e) {
                        case eD.J.WIDEVINE:
                            return `@webgate/${this._useTestLicenseServer?"widevine-license-test":"widevine-license"}/v1/${t}/license`;
                        case eD.J.PLAYREADY_RECOMMENDATION:
                        case eD.J.PLAYREADY_RECOMMENDATION_3000:
                        case eD.J.PLAYREADY_HARDWARE:
                        case eD.J.PLAYREADY:
                            return `@webgate/playready-license/v1/${t}/license/{contentId}`;
                        case eD.J.FAIRPLAY:
                            return `@webgate/fairplay-license/v1/${t}/license`;
                        default:
                            return
                    }
                }
                get(e, t) {
                    let i = `${e}:${t}`,
                        a = this._urls[i];
                    if (a && a.expires > Date.now() + 6e4) return Promise.resolve(a.uri);
                    let s = this._useTestLicenseServer ? "&use_test_license_server=true" : "",
                        r = (() => {
                            switch (e) {
                                case eD.J.PLAYREADY_HARDWARE:
                                case eD.J.PLAYREADY_RECOMMENDATION:
                                case eD.J.PLAYREADY_RECOMMENDATION_3000:
                                    return eD.J.PLAYREADY;
                                default:
                                    return e
                            }
                        })(),
                        n = `@webgate/melody/v1/license_url?keysystem=${r}&mediatype=${t}&sdk_name=${this._sdk.name}&sdk_version=${this._sdk.version}${s}`;
                    return this._transport.request(n, {
                        responseType: "json",
                        signal: (0, k.createAbortSignalWithTimeout)(1e3),
                        retry: {
                            condition: e => {
                                let t = e.getStatusFamily();
                                return 429 === e.status || t === eF.t.SERVER_ERROR || t === eF.t.CONNECTION_ERROR
                            }
                        }
                    }).then(a => {
                        let s, r = a.body;
                        if (r && 200 === a.status) return r.expires *= 1e3, r.uri = `@webgate/${r.uri}`, this._securityLevel && (r.uri += (-1 !== r.uri.indexOf("?") ? "&" : "?") + "sl=" + this._securityLevel), this._urls[i] = r, r.uri;
                        if (r)
                            if (400 === a.status && r && "deprecated-version" === r.code) s = eB.fatal(C.I.LICENSE_RESOLVER_DEPRECATED_VERSION, "This version of the SDK is no longer supported. Please upgrade");
                            else if (a.getStatusFamily() === eF.t.SERVER_ERROR) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            s = new eB(C.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        } else s = new eB(C.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `License URL endpoint responded with status ${a.status}`, {
                            isNetworkRelated: !0
                        });
                        else s = eB.fatal(C.I.LICENSE_RESOLVE_INVALID_RESPONSE, "License URL endpoint responded with invalid response");
                        return s.status = a.status, Promise.reject(s)
                    }, i => {
                        let a;
                        if (i.code === k.TransportErrors.HTTP_REQUEST_TIMEOUT) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            a = new eB(C.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        } else a = new eB(C.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, "License URL endpoint request failed", {
                            isNetworkRelated: !0
                        });
                        return Promise.reject(a)
                    })
                }
                remove(e, t) {
                    this._urls[`${e}:${t}`] = null
                }
            }
            class eV {
                constructor(e) {
                    this._melodyLogger = new ec(e)
                }
                logTrackStreamVerification(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "track_stream_verification",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStats(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_stats",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStart(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_start",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKWarning(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_warning",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKClientEvent(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "client_event",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
            }
            var ex = i(8870);
            ! function(e) {
                e.NULL_VALUE = "NULL_VALUE", e.LIST_START = "LIST_START", e.LIST_END = "LIST_END", e.FORBIDDEN = "FORBIDDEN", e.IGNORE = "IGNORE", e.PAUSE = "PAUSE"
            }(h || (h = {})),
            function(e) {
                e.AAC_LC = "mp4a.40.2", e.AAC_HE = "mp4a.40.5", e.AAC_ALL = "mp4a\\..*", e.FLAC = "flac", e.OPUS = "opus", e.VP9 = "vp9", e.VP8 = "vp8", e.H264_31 = "avc1.4d401f", e.H264_ALL = "avc1\\..*", e.AV1_ALL = "av01\\..*"
            }(p || (p = {}));
            var eG = i(33423),
                eH = i(85910),
                ej = i(19218);
            ! function(e) {
                e.NONE = "NONE", e.CONTEXT = "CONTEXT", e.TRACK = "TRACK"
            }(m || (m = {})),
            function(e) {
                e.EMPTY = "EMPTY", e.SW_CRYPTO = "SW_CRYPTO", e.SW_DECODE = "SW_DECODE", e.HW_CRYPTO = "HW_CRYPTO", e.HW_DECODE = "HW_DECODE", e.HW_ALL = "HW_ALL"
            }(E || (E = {}));
            var eJ = i(1188);

            function eK(e) {
                return "uri" in e
            }
            class eq extends M.bk {
                constructor(e) {
                    if (super(), this._trackPlayerPromise = (0, U.u)(), this._maxListErrors = 5, this._uid = 0, this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this._listPlayCount = 0, this._listErrorCount = 0, this._shuffled = !1, this._repeatMode = m.NONE, this._currentSeqId = 0, !e.trackPlayer) throw TypeError("Argument `options.trackPlayer` not found.");
                    e.maxListErrors && (this._maxListErrors = e.maxListErrors), this._setListOptions = this._setListOptions.bind(this), this._replaceCurrentList = this._replaceCurrentList.bind(this), this._handleCapped = this._handleCapped.bind(this), this._handlePlaying = this._handlePlaying.bind(this), this._handlePaused = this._handlePaused.bind(this), this._handleResumeFulfilled = this._handleResumeFulfilled.bind(this), this._handlePauseFulfilled = this._handlePauseFulfilled.bind(this), this._handleEnded = this._handleEnded.bind(this), this._handleCanPreload = this._handleCanPreload.bind(this), this._handleError = this._handleError.bind(this), this._handlePositionChanged = this._handlePositionChanged.bind(this), this._handleSeeking = this._handleSeeking.bind(this), this._handlePlayingProfileChanged = this._handlePlayingProfileChanged.bind(this), this._handleDurationChanged = this._handleDurationChanged.bind(this), this._handleSpeedChanged = this._handleSpeedChanged.bind(this), this._handleTimeout = this._handleTimeout.bind(this), this._handlePlayerInitError = this._handlePlayerInitError.bind(this), this._handleProgress = this._handleProgress.bind(this), this._handlePlayedThresholdReached = this._handlePlayedThresholdReached.bind(this), this._handleBeforeLoad = this._handleBeforeLoad.bind(this), this._handlePlayerLoad = this._handlePlayerLoad.bind(this), this._handleLoopRestart = this._handleLoopRestart.bind(this), this._init(e.trackPlayer)
                }
                static create(e) {
                    return new eq(e)
                }
                _init(e) {
                    this._trackPlayerPromise.promise.catch(() => {}), Promise.resolve(e).then(e => {
                        this._attachPlayerEvents(e), this._trackPlayerPromise.resolve(e)
                    }).catch(this._handlePlayerInitError)
                }
                _attachPlayerEvents(e) {
                    e.addListeners({
                        [ef.J.PLAYER_CAN_PRELOAD]: this._handleCanPreload,
                        [ef.J.PLAYER_CAPPED]: this._handleCapped,
                        [ef.J.PLAYER_ENDED]: this._handleEnded,
                        [ef.J.PLAYER_ERROR]: this._handleError,
                        [ef.J.PLAYER_PAUSED]: this._handlePaused,
                        [ef.J.PLAYER_PLAYING]: this._handlePlaying,
                        [ef.J.PLAYER_RESUME_FULFILLED]: this._handleResumeFulfilled,
                        [ef.J.PLAYER_PAUSE_FULFILLED]: this._handlePauseFulfilled,
                        [ef.J.PLAYER_TIMEOUT]: this._handleTimeout,
                        [ef.J.PLAYER_POSITION_CHANGED]: this._handlePositionChanged,
                        [ef.J.PLAYER_SEEKING]: this._handleSeeking,
                        [ef.J.PLAYER_PLAYING_PROFILE_CHANGED]: this._handlePlayingProfileChanged,
                        [ef.J.PLAYER_DURATION_CHANGED]: this._handleDurationChanged,
                        [ef.J.PLAYER_PLAYBACK_SPEED_CHANGED]: this._handleSpeedChanged,
                        [ef.J.PLAYER_PROGRESS]: this._handleProgress,
                        [ef.J.PLAYER_BEFORE_LOAD]: this._handleBeforeLoad,
                        [ef.J.PLAYER_LOAD]: this._handlePlayerLoad,
                        [ef.J.PLAYER_PLAYED_THRESHOLD_REACHED]: this._handlePlayedThresholdReached,
                        [ef.J.PLAYER_LOOP_RESTART]: this._handleLoopRestart
                    }), this.proxyEmitAllSync(e, {
                        [ef.J.PLAYER_BEFORE_VOLUME_CHANGE]: ef.J.LIST_PLAYER_BEFORE_VOLUME_CHANGE,
                        [ef.J.PLAYER_VOLUME_CHANGED]: ef.J.LIST_PLAYER_VOLUME_CHANGED,
                        [ef.J.REPORTING_START]: ef.J.REPORTING_START,
                        [ef.J.REPORTING_CREATIVE_VIEW]: ef.J.REPORTING_CREATIVE_VIEW,
                        [ef.J.REPORTING_FIRST_QUARTILE]: ef.J.REPORTING_FIRST_QUARTILE,
                        [ef.J.REPORTING_MIDPOINT]: ef.J.REPORTING_MIDPOINT,
                        [ef.J.REPORTING_THIRD_QUARTILE]: ef.J.REPORTING_THIRD_QUARTILE,
                        [ef.J.REPORTING_COMPLETE]: ef.J.REPORTING_COMPLETE,
                        [ef.J.REPORTING_PAUSE]: ef.J.REPORTING_PAUSE,
                        [ef.J.REPORTING_RESUME]: ef.J.REPORTING_RESUME,
                        [ef.J.REPORTING_ERROR]: ef.J.REPORTING_ERROR
                    }), this.proxyEmitAll(e, {
                        [ef.J.PLAYER_AUTOPLAY_FAILED]: ef.J.LIST_PLAYER_AUTOPLAY_FAILED,
                        [ef.J.PLAYER_TRACKING_DATA_CREATED]: ef.J.LIST_PLAYER_TRACKING_DATA_CREATED,
                        [ef.J.PLAYER_TRACKING_DATA_FINALIZED]: ef.J.LIST_PLAYER_TRACKING_DATA_FINALIZED,
                        [ef.J.PLAYER_BUFFER_STALLED]: ef.J.LIST_PLAYER_BUFFER_STALLED,
                        [ef.J.PLAYER_BUFFERING_START]: ef.J.LIST_PLAYER_BUFFERING_START,
                        [ef.J.PLAYER_BUFFERING_END]: ef.J.LIST_PLAYER_BUFFERING_END,
                        [ef.J.PLAYER_REBUFFERING_START]: ef.J.LIST_PLAYER_REBUFFERING_START,
                        [ef.J.PLAYER_REBUFFERING_END]: ef.J.LIST_PLAYER_REBUFFERING_END,
                        [ef.J.PLAYER_VIDEO_ELEMENT_APPENDED]: ef.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED,
                        [ef.J.PLAYER_VIDEO_ELEMENT_REMOVED]: ef.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED,
                        [ef.J.PLAYER_DISPLAYED_CUES_CHANGED]: ef.J.LIST_PLAYER_DISPLAYED_CUES_CHANGED,
                        [ef.J.PLAYER_VIDEO_PROFILE_CHANGED]: ef.J.LIST_PLAYER_VIDEO_PROFILE_CHANGED,
                        [ef.J.PLAYER_MUTED_CHANGED]: ef.J.LIST_PLAYER_MUTED_CHANGED,
                        [ef.J.PLAYER_SUBTITLE_LANGUAGES_LOADED]: ef.J.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED,
                        [ef.J.PLAYER_SEEK_PANELS_LOADED]: ef.J.LIST_PLAYER_SEEK_PANELS_LOADED,
                        [ef.J.PLAYER_FIRST_BYTES]: ef.J.LIST_PLAYER_FIRST_BYTES,
                        [ef.J.PLAYER_BEFORE_STOP]: ef.J.LIST_PLAYER_BEFORE_STOP,
                        [ef.J.PLAYER_VIDEO_VISIBILITY_CHANGED]: ef.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED,
                        [ef.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: ef.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED,
                        [ef.J.PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED]: ef.J.LIST_PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED,
                        [ef.J.PLAYER_VIDEO_SURFACE_CHANGED]: ef.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED,
                        [ef.J.PLAYER_SUBTITLE_LANGUAGE_CHANGED]: ef.J.LIST_PLAYER_SUBTITLE_LANGUAGE_CHANGED,
                        [ef.J.PLAYER_SUBTITLE_VISIBILITY_CHANGED]: ef.J.LIST_PLAYER_SUBTITLE_VISIBILITY_CHANGED,
                        [ef.J.PLAYER_CONTENT_INITIALIZED]: ef.J.LIST_PLAYER_CONTENT_INITIALIZED
                    })
                }
                _translatePosition(e) {
                    var t, i, a;
                    return null != (a = null == (i = null == (t = this._loadedList) ? void 0 : t.translatePosition) ? void 0 : i.call(t, e)) ? a : e
                }
                _translateDuration(e) {
                    var t, i, a;
                    let s = isNaN(e) ? 0 : e;
                    return null != (a = null == (i = null == (t = this._loadedList) ? void 0 : t.translateDuration) ? void 0 : i.call(t, s)) ? a : s
                }
                _handleProgress(e) {
                    this.emit(ef.J.LIST_PLAYER_PROGRESS, Object.assign(Object.assign({}, e.data), {
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position
                    }))
                }
                _handleBeforeLoad(e) {
                    this.emit(ef.J.LIST_PLAYER_BEFORE_PLAYER_LOAD, Object.assign(Object.assign({}, e.data), {
                        rawPosition: e.data.options.position,
                        options: Object.assign(Object.assign({}, e.data.options), {
                            position: this._translatePosition(e.data.options.position)
                        })
                    }))
                }
                _handlePlayerLoad(e) {
                    this.emitSync(ef.J.LIST_PLAYER_PLAYER_LOAD, Object.assign(Object.assign({}, e.data), {
                        rawPosition: e.data.position,
                        position: this._translatePosition(e.data.position)
                    }))
                }
                _handlePlayerInitError(e) {
                    this._trackPlayerPromise.reject(new eJ.i(C.I.LIST_PLAYER_NO_TRACK_PLAYER, e.message || "Track player promise was rejected."))
                }
                _handleCapped(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_CAPPED, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data))
                }
                _handlePlaying(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_PLAYING, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleResumeFulfilled(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_RESUME_FULFILLED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePaused(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_PAUSED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePauseFulfilled(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_PAUSE_FULFILLED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleCanPreload() {
                    this._preloadUpcomingTrack().catch(() => {})
                }
                _handleEnded(e) {
                    let t = this._currentTrack;
                    t && (this.emit(ef.J.LIST_PLAYER_TRACK_ENDED, Object.assign(Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data), {
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position
                    })), this.next(l.TRACK_DONE))
                }
                _handleLoopRestart(e) {
                    let t = this._currentTrack;
                    if (!t || !t.logData) return;
                    let i = Object.assign(Object.assign({}, t.logData), {
                        playbackId: ea(32),
                        reason: l.TRACK_DONE
                    });
                    t.logData = i, this._getTrackPlayer().then(e => {
                        e.restartTrackingForLoop(i)
                    }), this.emit(ef.J.LIST_PLAYER_LOOP_RESTART, e.data)
                }
                _handleTimeout(e) {
                    let t = this._currentTrack;
                    t && (this.emit(ef.J.LIST_PLAYER_TRACK_TIMEOUT, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data)), this.next(l.TRACK_ERROR))
                }
                _handlePositionChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_POSITION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        previousPosition: null !== e.data.previousPosition ? this._translatePosition(e.data.previousPosition) : e.data.previousPosition,
                        rawPreviousPosition: e.data.previousPosition,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleSeeking(e) {
                    this.emit(ef.J.LIST_PLAYER_SEEKING, {
                        previousPosition: null !== e.data.previousPosition ? this._translatePosition(e.data.previousPosition) : e.data.previousPosition,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        rawPreviousPosition: e.data.previousPosition,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePlayingProfileChanged(e) {
                    this.emit(ef.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED, Object.assign(Object.assign({}, e.data), {
                        rawPosition: e.data.position,
                        position: this._translatePosition(e.data.position)
                    }))
                }
                _handleDurationChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_DURATION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        position: this._translatePosition(e.data.position),
                        duration: this._translateDuration(e.data.duration),
                        rawPosition: e.data.position,
                        rawDuration: e.data.duration,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleSpeedChanged(e) {
                    this._currentTrack && this.emit(ef.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED, Object.assign(Object.assign({}, e.data), {
                        rawPosition: e.data.position
                    }))
                }
                _handlePlayedThresholdReached(e) {
                    let t = this._currentTrack;
                    t && this.emit(ef.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        threshold: e.data.threshold,
                        position: this._translatePosition(e.data.position),
                        rawPosition: e.data.position,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    })
                }
                _handleError(e) {
                    let t = this._currentTrack,
                        i = e.data;
                    if (!t) return;
                    let a = i.position;
                    i.position = this._translatePosition(a), this.emit(ef.J.LIST_PLAYER_ERROR, Object.assign(Object.assign({}, i), {
                        rawPosition: a
                    })), this.emitSync(ef.J.LIST_PLAYER_ERROR_SYNC, Object.assign(Object.assign({}, i), {
                        rawPosition: a
                    }));
                    let s = !!i.error && i.error.listPlayerIgnore;
                    !s && this._listErrorCount++, i.canPlayNext && (s || this._listErrorCount <= this._maxListErrors ? this.next(l.TRACK_ERROR) : this.emit(ef.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED, {
                        count: this._listErrorCount,
                        threshold: this._maxListErrors,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _handleTrackLoaded(e) {
                    this.emitSync(ef.J.LIST_PLAYER_TRACK_LOADED, e)
                }
                _incrementSeqId() {
                    return this._currentSeqId >= 0x1fffffffffffff ? this._currentSeqId = 0 : this._currentSeqId += 1, this._currentSeqId
                }
                _getTrackPlayer() {
                    return this._trackPlayerPromise.promise
                }
                _setListIndex(e, t) {
                    let i = t.index && -1 !== t.index ? t.index : 0;
                    return Promise.all([e, t, e.startAt(i)])
                }
                _setListOptions([e, t, i]) {
                    return Promise.all([e.setShuffle(!!this._shuffled), e.setRepeatMode(this._repeatMode)]).then(() => [e, t])
                }
                _replaceCurrentList([e, t]) {
                    return this.emitSync(ef.J.LIST_PLAYER_BEFORE_LIST_CHANGE, Object.assign({
                        newList: e,
                        newOptions: t,
                        oldList: this._loadedList,
                        oldOptions: this._loadedOptions
                    }, (0, eI.P)())), this._loadedList = e, this._loadedOptions = t, this._listPlayCount = 0, this._listErrorCount = 0, this.emit(ef.J.LIST_PLAYER_LIST_CHANGED, Object.assign({
                        list: e,
                        options: t
                    }, (0, eI.P)())), eH.T.SUCCESS
                }
                _changeTrack(e, t, i) {
                    let a, s;
                    if (this._currentSeqId !== i) return Promise.resolve(eH.T.CANCELLED);
                    e.logData && (e.logData.reason = t), this.emitSync(ef.J.LIST_PLAYER_BEFORE_TRACK_LOAD, Object.assign({
                        list: this._loadedList,
                        newTrack: e,
                        oldTrack: this._currentTrack
                    }, (0, eI.P)())), this._uid++;
                    let r = ++this._listPlayCount,
                        n = this._loadedOptions,
                        o = !0,
                        l = 0,
                        _ = 3e4,
                        d = !1,
                        u = !1;
                    if (n && (1 === r ? (o = !n.paused, l = n.initialPosition || n.position || 0) : l = n.position || 0, a = n.stopPosition || void 0, d = n.muted || !1, u = n.loop || !1), e.options) {
                        let t = e.options;
                        void 0 !== t.paused && (o = !t.paused), void 0 !== t.position && (l = t.position), void 0 !== t.stopPosition && (a = t.stopPosition), void 0 !== t.playedThreshold && (_ = t.playedThreshold), void 0 !== t.loadingTimeout && (s = t.loadingTimeout), void 0 !== t.muted && (d = t.muted), void 0 !== t.loop && (u = t.loop)
                    }
                    this._currentTrack = e, this._currentTrackOptions = {
                        reason: t,
                        paused: !o,
                        position: l,
                        stopPosition: a,
                        playedThreshold: _,
                        muted: d,
                        loop: u
                    };
                    let c = this._handleTrackLoaded.bind(this, Object.assign({
                        uid: this._uid,
                        track: this._currentTrack,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, (0, eI.P)()));
                    return this._getTrackPlayer().then(t => this._currentSeqId !== i ? eH.T.CANCELLED : (Promise.resolve(t.load(e, {
                        uriProperty: "playableURI",
                        autoplay: o,
                        position: l,
                        stopPosition: a,
                        playedThreshold: _,
                        loadingTimeout: s,
                        muted: d,
                        loop: u
                    }, c)).catch(() => {}), eH.T.SUCCESS))
                }
                _preloadUpcomingTrack() {
                    let e = this._loadedList;
                    return e ? e.peekNext({
                        reason: l.TRACK_DONE,
                        listConstants: h
                    }).then(e => e === h.FORBIDDEN ? eH.T.FORBIDDEN : e === h.NULL_VALUE ? eH.T.INVALID : e === h.LIST_END ? eH.T.LIST_END : eK(e) && e.playable ? this.preloadTrack(e) : eH.T.INVALID) : Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                preloadTrack(e) {
                    return this._getTrackPlayer().then(t => (t.preload(e).catch(() => {}), eH.T.SUCCESS))
                }
                activateElement() {
                    return this._getTrackPlayer().then(e => (e.activateElement(), eH.T.SUCCESS))
                }
                load(e, t) {
                    let i = function(e = {}) {
                        let t = {
                            index: -1,
                            position: 0,
                            initialPosition: 0,
                            playbackSpeed: 1,
                            stopPosition: null,
                            duration: -1,
                            paused: !1,
                            reason: l.UNKNOWN,
                            muted: !1,
                            loop: !1
                        };
                        return void 0 !== e.index && (t.index = e.index), void 0 !== e.position && (t.position = e.position), void 0 !== e.initialPosition && (t.initialPosition = e.initialPosition), void 0 !== e.duration && (t.duration = e.duration), void 0 !== e.paused && (t.paused = e.paused), void 0 !== e.playbackSpeed && (t.playbackSpeed = e.playbackSpeed), void 0 !== e.reason && (t.reason = e.reason), void 0 !== e.muted && (t.muted = e.muted), void 0 !== e.loop && (t.loop = e.loop), t
                    }(t || this._loadedOptions || {});
                    return this._setListIndex(e, i).then(this._setListOptions).then(this._replaceCurrentList)
                }
                play(e, t) {
                    return this.load(e, t).then(() => {
                        if (this._loadedList !== e) return eH.T.CANCELLED;
                        let t = this._loadedOptions ? this._loadedOptions.reason : l.UNKNOWN;
                        return this.next(t)
                    })
                }
                canChangeTrack() {
                    return this._loadedList ? this._loadedList.peekNext({
                        reason: l.FORWARD_BUTTON,
                        listConstants: h
                    }).then(e => e !== h.FORBIDDEN) : Promise.resolve(!0)
                }
                next(e) {
                    if (!e) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(ef.J.LIST_PLAYER_BEFORE_NEXT, Object.assign({
                        list: t,
                        reason: e
                    }, (0, eI.P)()));
                    let i = this._incrementSeqId(),
                        a = {
                            reason: e,
                            listConstants: h
                        };
                    return t.next(a).then(a => this._currentSeqId !== i ? eH.T.CANCELLED : a === h.FORBIDDEN ? eH.T.FORBIDDEN : a === h.NULL_VALUE ? this.next(e) : a === h.LIST_END ? (this.emit(ef.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: l.END_PLAY
                    }, (0, eI.P)())), this.clear(e), eH.T.LIST_END) : eK(a) ? a.playable ? this._changeTrack(a, e, i) : (this.emit(ef.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: a,
                        list: t
                    }, (0, eI.P)())), this.next(e)) : eH.T.INVALID)
                }
                previous(e) {
                    if (!e) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(ef.J.LIST_PLAYER_BEFORE_PREVIOUS, Object.assign({
                        list: t,
                        reason: e
                    }, (0, eI.P)()));
                    let i = this._incrementSeqId(),
                        a = {
                            reason: e,
                            listConstants: h
                        };
                    return t.previous(a).then(a => this._currentSeqId !== i ? eH.T.CANCELLED : a === h.FORBIDDEN ? eH.T.FORBIDDEN : a === h.NULL_VALUE ? this.previous(e) : a === h.LIST_START ? (this.emit(ef.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: l.END_PLAY
                    }, (0, eI.P)())), this.clear(e), eH.T.LIST_END) : eK(a) ? a.playable ? this._changeTrack(a, e, i) : (this.emit(ef.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: a,
                        list: t
                    }, (0, eI.P)())), this.previous(e)) : eH.T.INVALID)
                }
                pause() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.pause().then(() => eH.T.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? eH.T.CANCELLED : eH.T.FORBIDDEN)) : Promise.resolve(eH.T.SUCCESS) : Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                resume() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.resume().then(() => eH.T.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? eH.T.CANCELLED : eH.T.FORBIDDEN)) : Promise.resolve(eH.T.SUCCESS) : Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                togglePlay() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.togglePlay().then(() => eH.T.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? eH.T.CANCELLED : eH.T.FORBIDDEN)) : Promise.resolve(eH.T.SUCCESS) : Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                stop(e) {
                    let t = {
                            reason: e || l.UNKNOWN
                        },
                        i = this._currentTrack;
                    return i && i.logData && (t.source = i.logData.source, t.playbackService = i.logData.playbackService), this._incrementSeqId(), this._getTrackPlayer().then(e => {
                        let i = e.getPlayerState();
                        return e.stop(t), this.emit(ef.J.LIST_PLAYER_STOPPED, Object.assign({
                            uid: this._uid,
                            options: this._currentTrackOptions,
                            list: this._loadedList,
                            position: this._translatePosition(i.position),
                            rawPosition: i.position,
                            playbackMetadataStore: e.getPlaybackMetadataStore()
                        }, (0, eI.P)())), eH.T.SUCCESS
                    })
                }
                clear(e) {
                    return this.stop(e).then(() => (this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this.emit(ef.J.LIST_PLAYER_CLEARED, Object.assign({}, (0, eI.P)())), eH.T.SUCCESS))
                }
                setShuffle(e) {
                    let t = !!e;
                    if (this._shuffled !== t) {
                        this._shuffled = t, this.emit(ef.J.LIST_PLAYER_SHUFFLE_CHANGED, Object.assign({
                            player: this,
                            shuffled: t
                        }, (0, eI.P)()));
                        let e = this._loadedList;
                        e && e.setShuffle(this._shuffled)
                    }
                    return Promise.resolve(eH.T.SUCCESS)
                }
                setRepeatMode(e) {
                    if (!(e in m)) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_INVALID_ARGUMENT, "The value of repeat mode is not a correct RepeatMode enum value"));
                    if (this._repeatMode !== e) {
                        this._repeatMode = e, this.emit(ef.J.LIST_PLAYER_REPEAT_MODE_CHANGED, Object.assign({
                            player: this,
                            repeatMode: e
                        }, (0, eI.P)()));
                        let t = this._loadedList;
                        t && t.setRepeatMode(this._repeatMode)
                    }
                    return Promise.resolve(eH.T.SUCCESS)
                }
                getVolume() {
                    return this._getTrackPlayer().then(e => e.getVolume())
                }
                setVolume(e, t = null) {
                    return this._getTrackPlayer().then(i => (i.setVolume(e, {
                        commandId: null != t ? t : void 0
                    }), eH.T.SUCCESS))
                }
                seek(e, t = l.SEEK) {
                    var i, a;
                    let s = this._loadedList;
                    if (!s) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    if ("function" == typeof s.allowSeeking && !s.allowSeeking()) return Promise.reject(new eJ.i(C.I.LIST_PLAYER_FORBIDDEN, "The operation is not allowed."));
                    let r = null != (a = null == (i = s.handleSeek) ? void 0 : i.call(s, e, {
                        reason: t,
                        listConstants: h
                    })) ? a : e;
                    return r === h.PAUSE ? this.pause().then(t => (this.emit(ef.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: r
                    }, (0, eI.P)())), t)) : r === h.IGNORE ? (this.emit(ef.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: r
                    }, (0, eI.P)())), Promise.resolve(eH.T.SUCCESS)) : this._currentTrack ? this._getTrackPlayer().then(e => (e.seek(r), eH.T.SUCCESS)) : Promise.resolve(eH.T.SUCCESS)
                }
                getListConstants() {
                    return h
                }
                getLoadedList() {
                    return this._loadedList
                }
                getLoadedOptions() {
                    return this._loadedOptions
                }
                getPlayerState() {
                    return this._getTrackPlayer().then(e => {
                        let t = e.getPlayerState();
                        return Object.assign(Object.assign({}, t), {
                            position: this._translatePosition(t.position),
                            duration: this._translateDuration(t.duration)
                        })
                    })
                }
                getState() {
                    return this.getPlayerState().then(e => ({
                        playbackState: e,
                        track: this._currentTrack,
                        list: this._loadedList,
                        options: this._loadedOptions
                    }))
                }
                getMediaConfig() {
                    return this._getTrackPlayer().then(e => e.getMediaConfig())
                }
                hideSubtitles() {
                    return this._getTrackPlayer().then(e => e.hideSubtitles()).then(() => eH.T.SUCCESS)
                }
                showSubtitles() {
                    return this._getTrackPlayer().then(e => e.showSubtitles()).then(() => eH.T.SUCCESS)
                }
                areSubtitlesShown() {
                    return this._getTrackPlayer().then(e => e.areSubtitlesShown())
                }
                getSubtitleLanguages() {
                    return this._getTrackPlayer().then(e => e.getSubtitleLanguages())
                }
                getActiveSubtitleLanguage() {
                    return this._getTrackPlayer().then(e => {
                        var t;
                        return null != (t = e.getActiveSubtitleLanguage()) ? t : null
                    })
                }
                deactivateCueEvents() {
                    return this._getTrackPlayer().then(e => e.deactivateCueEvents()).then(() => eH.T.SUCCESS)
                }
                activateCueEvents() {
                    return this._getTrackPlayer().then(e => e.activateCueEvents()).then(() => eH.T.SUCCESS)
                }
                getCurrentBandwidth() {
                    return this._getTrackPlayer().then(e => e.getCurrentBandwidth())
                }
                setSubtitleLanguage(e) {
                    return this._getTrackPlayer().then(t => t.setSubtitleLanguage(e)).then(() => eH.T.SUCCESS)
                }
                setPlaybackSpeed(e) {
                    return this._getTrackPlayer().then(t => t.setPlaybackSpeed(e)).then(e => e ? eH.T.SUCCESS : eH.T.FORBIDDEN)
                }
                setMuted(e) {
                    return this._getTrackPlayer().then(t => (t.setMuted(e), eH.T.SUCCESS))
                }
                getStatistics() {
                    return this._getTrackPlayer().then(e => e.getStatistics())
                }
                getAudioProcessor() {
                    return this._getTrackPlayer().then(e => e.getAudioProcessor())
                }
                adaptToElementSize(e) {
                    return this._getTrackPlayer().then(t => (t.adaptToElementSize(e), eH.T.SUCCESS))
                }
                setIsVideoVisible(e) {
                    return this._getTrackPlayer().then(t => (t.setIsVideoVisible(e), eH.T.SUCCESS))
                }
                setMediaPlaybackMode(e) {
                    return this._getTrackPlayer().then(t => t.setMediaPlaybackMode(e)).then(e => e ? eH.T.SUCCESS : eH.T.FORBIDDEN)
                }
                setVideoSurface(e) {
                    return this._getTrackPlayer().then(t => (t.setVideoSurface(e), eH.T.SUCCESS))
                }
                getVideoSurface() {
                    return this._getTrackPlayer().then(e => e.getVideoSurface())
                }
                getSeekPanels() {
                    return this._getTrackPlayer().then(e => e.getSeekPanels())
                }
                getVideoVariants() {
                    return this._getTrackPlayer().then(e => e.getVideoVariants())
                }
                setVideoResolution(e) {
                    return this._getTrackPlayer().then(t => (t.setVideoResolution(e), eH.T.SUCCESS))
                }
                setMediaPlaybackQuality(e) {
                    return this._getTrackPlayer().then(t => (t.setMediaPlaybackQuality(e), eH.T.SUCCESS))
                }
            }
            i(71930);
            let eQ = q.m.forTag("playback.init");

            function e$(e) {
                return new Promise((t, i) => {
                    var a, s, r, n, o, l, _, d, u, c, h, p, m;
                    if (!e.transport) return void i(TypeError("Argument transport is required."));
                    if ("undefined" != typeof window && (("boolean" == typeof window.isSecureContext ? window.isSecureContext : function() {
                            if ("undefined" == typeof window || !window.location) return !1;
                            let e = window.location;
                            if ("https" === e.protocol || "file" === e.protocol) return !0;
                            let t = e.hostname;
                            return !!/^127(\.[0-255]){3}$|^locahost\.?$|\.localhost\.?$/.test(t)
                        }()) || null == (a = window.console) || a.warn("%cDRM might not be available from unsecure contexts", "background: #222; color: #bada55; font-size: 40px")), e.playerContainerManager && ("function" != typeof(null == (s = e.playerContainerManager) ? void 0 : s.eject) || "function" != typeof(null == (r = e.playerContainerManager) ? void 0 : r.inject))) return void i(TypeError("Both inject and eject PlayerContainerManager functions must be present."));
                    let {
                        transport: E
                    } = e, [g = "", S = ""] = (e.sdkId || "").split(":"), T = Object.assign(Object.assign({}, e), {
                        tracker: eU.create({
                            deviceInfo: (null == (n = e.loggerOptions) ? void 0 : n.deviceInfo) ? Promise.resolve(null == (o = e.loggerOptions) ? void 0 : o.deviceInfo) : null
                        }),
                        audioResolver: new eL(E),
                        videoResolver: new ew(E),
                        licenseURLResolver: new eY({
                            transport: E,
                            sdk: {
                                name: g,
                                version: S
                            },
                            securityLevel: e.securityLevel,
                            useTestLicenseServer: e.useTestLicenseServer
                        }),
                        newBufferPerTrack: null == (l = e.newBufferPerTrack) || l,
                        preinitMediaElement: null == (_ = e.preinitMediaElement) || _,
                        audioProcessorOptions: Object.assign(Object.assign({}, e.audioProcessorOptions), {
                            disable: null != (u = null == (d = e.audioProcessorOptions) ? void 0 : d.disable) ? u : !!e.createPlayer
                        })
                    });
                    !e.unauthenticatedLogs || (null == (c = e.loggerOptions) ? void 0 : c.endpoint) || (e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                        endpoint: "https://spclient.wg.spotify.com/melody/unauth"
                    })), (null == (h = null == e ? void 0 : e.loggerOptions) ? void 0 : h.deviceInfo) || Promise.all([null == (p = e.loggerOptions) ? void 0 : p.platform, null == (m = e.loggerOptions) ? void 0 : m.clientVersion]).then(([t, i]) => {
                        e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                            deviceInfo: {
                                platform: t,
                                version: i
                            }
                        })
                    }), eg.a.create(T).then(t => {
                        let i = Object.assign({
                                disableMux: !0
                            }, e.loggerOptions),
                            a = new eV(Object.assign(Object.assign({}, i), {
                                transport: E,
                                sdkId: e.sdkId,
                                platform: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.platform) ? t : ""
                                }),
                                clientVersion: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.version) ? t : ""
                                })
                            })),
                            s = eP.create({
                                transport: E,
                                player: t,
                                logSender: a,
                                sdkId: e.sdkId,
                                deviceInfo: i.deviceInfo
                            });
                        return i.disableMux || eQ.info("Mux integration is deprecated and has been removed. The disableMux option is ignored."), {
                            player: t,
                            logger: s
                        }
                    }).then(t, i)
                })
            }
            let eW = q.m.forTag("media_session");

            function eX(e) {
                return Math.round(1e3 * e)
            }
            class ez {
                constructor(e) {
                    this._currentURI = null, this._streamer = e.streamer, this._handleAction = this._handleAction.bind(this), this._updateMediaSession = this._updateMediaSession.bind(this), this._updateMediaSessionMetadata = this._updateMediaSessionMetadata.bind(this), this._init()
                }
                static create(e) {
                    return "undefined" != typeof window && "undefined" != typeof navigator && "mediaSession" in navigator && "MediaMetadata" in window ? new ez(e) : (eW.warn("The MediaSession API is not supported."), null)
                }
                _init() {
                    this._streamer.on("state_changed", this._updateMediaSession)
                }
                _handleAction(e) {
                    switch (e.action) {
                        case "play":
                            this._streamer.resume();
                            break;
                        case "pause":
                            this._streamer.pause();
                            break;
                        case "seekto":
                            {
                                let t = e.seekTime;null != t && this._streamer.seek(eX(t))
                            }
                            break;
                        case "seekforward":
                            {
                                let t = e.seekOffset;this._streamer.getCurrentState().then(e => {
                                    if (!e) return;
                                    let {
                                        position: i,
                                        duration: a
                                    } = e, s = Math.min(a, Math.max(0, t ? i + eX(t) : i + 15e3));
                                    this._streamer.seek(s)
                                })
                            }
                            break;
                        case "seekbackward":
                            {
                                let t = e.seekOffset;this._streamer.getCurrentState().then(e => {
                                    if (!e) return;
                                    let {
                                        position: i
                                    } = e, a = Math.max(0, t ? i - eX(t) : i - 15e3);
                                    this._streamer.seek(a)
                                })
                            }
                            break;
                        case "nexttrack":
                            this._streamer.nextTrack();
                            break;
                        case "previoustrack":
                            this._smartPreviousTrack()
                    }
                }
                _clearHandlers() {
                    navigator.mediaSession.setActionHandler("play", null), navigator.mediaSession.setActionHandler("pause", null), navigator.mediaSession.setActionHandler("seekto", null), navigator.mediaSession.setActionHandler("nexttrack", null), navigator.mediaSession.setActionHandler("previoustrack", null), navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("seekbackward", null)
                }
                _smartPreviousTrack() {
                    this._streamer.getCurrentState().then(e => {
                        if (!e) return Promise.reject(new B(a.HARMONY_NO_TRACKS_LOADED, "No current state."));
                        let {
                            disallows: t,
                            position: i,
                            track_window: s
                        } = e;
                        return t.seeking || i < 3e3 && s.previous_tracks.length > 0 ? this._streamer.previousTrack() : this._streamer.seek(0)
                    })
                }
                _updateMediaSessionMetadata({
                    name: e,
                    artists: t,
                    album: i
                }) {
                    var a;
                    let s = null == (a = null == i ? void 0 : i.images) ? void 0 : a.map(({
                            url: e,
                            width: t,
                            height: i
                        }) => ({
                            src: e,
                            sizes: `${t}x${i}`
                        })),
                        r = {
                            title: e || "",
                            artist: (null == t ? void 0 : t.map(e => null == e ? void 0 : e.name).join(", ")) || "",
                            album: (null == i ? void 0 : i.name) || "",
                            artwork: s
                        };
                    navigator.mediaSession.metadata = new window.MediaMetadata(r)
                }
                _updateMediaSession({
                    data: e
                }) {
                    var t;
                    let i = e.state,
                        a = null == (t = null == i ? void 0 : i.track_window) ? void 0 : t.current_track;
                    if (!i || !a) {
                        this._currentURI = null, navigator.mediaSession.metadata = null, navigator.mediaSession.playbackState = "none", this._clearHandlers();
                        return
                    }
                    navigator.mediaSession.playbackState = i.paused ? "paused" : "playing", this._currentURI !== a.uri && (this._currentURI = a.uri, this._updateMediaSessionMetadata(a));
                    let {
                        position: s,
                        duration: r
                    } = i, n = Math.min(Math.max(0, s), r);
                    r && navigator.mediaSession.setPositionState({
                        position: n,
                        duration: r
                    }), navigator.mediaSession.setActionHandler("play", this._handleAction), navigator.mediaSession.setActionHandler("pause", this._handleAction);
                    let o = i.disallows;
                    navigator.mediaSession.setActionHandler("seekto", o.seeking ? null : this._handleAction), navigator.mediaSession.setActionHandler("nexttrack", o.skipping_next ? null : this._handleAction), navigator.mediaSession.setActionHandler("previoustrack", this._handleAction), "episode" === a.type ? (navigator.mediaSession.setActionHandler("seekforward", this._handleAction), navigator.mediaSession.setActionHandler("seekbackward", this._handleAction)) : (navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("seekbackward", null))
                }
            }! function(e) {
                e.INITIALIZATION_START = "initialization_start", e.PAUSE = "pause", e.STALL_START = "stall_start", e.STALL_END = "stall_end", e.PLAY = "play", e.SEEK_START = "seek_start", e.SEEK_END = "seek_end", e.INITIALIZATION_END = "initialization_end", e.ERROR = "error", e.PROFILE_CHANGED = "profile_changed", e.BEACON = "beacon"
            }(g || (g = {})), (S || (S = {})).MEDIA_PLAYBACK_EVENT = "media_playback_event",
                function(e) {
                    e.MEDIA_PLAYBACK_EVENT = "media_playback_event", e.QUEUE_STATE_CHANGED = "queue_state_changed", e.FLUSHED = "flushed"
                }(T || (T = {}));
            let eZ = {
                    [C.I.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS]: "network",
                    [C.I.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO]: "network",
                    [C.I.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO]: "network",
                    [C.I.FRAGMENT_REQUEST_FAILED_WITH_ZERO]: "network",
                    [C.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS]: "network",
                    [C.I.STORAGE_FAILED_WITH_STATUS]: "network",
                    [C.I.STORAGE_TRACK_MANIFEST_FAILED]: "network",
                    [C.I.STORAGE_VIDEO_MANIFEST_FAILED]: "network",
                    [C.I.MEDIA_NETWORK_ERROR]: "network",
                    [C.I.LICENSE_RESOLVER_CANT_RESOLVE_URL]: "network",
                    [C.I.MEDIA_DECODING_ERROR]: "decoding",
                    [C.I.MEDIA_NOT_SUPPORTED]: "decoding",
                    [C.I.FILE_MALFORMED_SEEKTABLE]: "source_file",
                    [C.I.FILE_MALFORMED_PSSH]: "source_file",
                    [C.I.FILE_NOT_RESOLVED]: "source_file",
                    [C.I.FRAGMENT_REQUEST_EMPTY_RESPONSE]: "source_file",
                    [C.I.FRAGMENT_REQUEST_UNEXPECTED_LENGTH]: "source_file",
                    [C.I.AD_MANIFEST_INVALID]: "source_file",
                    [C.I.STORAGE_TRACK_MANIFEST_EMPTY]: "source_file",
                    [C.I.STORAGE_RETURNED_NO_TRACKS]: "source_file",
                    [C.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES]: "source_file",
                    [C.I.PLAYER_CANNOT_FIND_PLAYABLE_URI]: "source_file",
                    [C.I.INVALID_TRACK]: "source_file",
                    [C.I.FILE_FORMAT_NOT_SUPPORTED]: "source_file",
                    [C.I.EME_API_NOT_SUPPORTED]: "encryption",
                    [C.I.EME_MEDIA_KEYS_NOT_SUPPORTED]: "encryption",
                    [C.I.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED]: "encryption",
                    [C.I.EME_NO_SUPPORTED_KEYSYSTEM]: "encryption",
                    [C.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED]: "encryption",
                    [C.I.EME_ERROR_UNKNOWN]: "encryption",
                    [C.I.EME_LICENSE_REQUEST_EMPTY_RESPONSE]: "encryption",
                    [C.I.EME_LICENSE_REQUEST_FAILED_WITH_STATUS]: "encryption",
                    [C.I.EME_LICENSE_REQUEST_WIDEVINE_ERROR]: "encryption",
                    [C.I.EME_LICENSE_UPDATE_FAILED]: "encryption",
                    [C.I.EME_HEADER_KEY_VALUE_MISMATCH]: "encryption",
                    [C.I.EME_HEADER_MISSING_CHALLENGE]: "encryption",
                    [C.I.EME_INIT_DATA_MALFORMED]: "encryption",
                    [C.I.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM]: "encryption",
                    [C.I.EME_MEDIA_KEY_SESSION_V0_1B_ERROR]: "encryption",
                    [C.I.EME_MEDIA_KEY_SESSION_SAFARI_ERROR]: "encryption",
                    [C.I.EME_NO_SUPPORTED_CONFIGURATION]: "encryption",
                    [C.I.EME_NOT_SUPPORTED_ERROR]: "encryption",
                    [C.I.EME_INVALID_STATE_ERROR]: "encryption",
                    [C.I.EME_UNKNOWN_ERROR]: "encryption",
                    [C.I.LICENSE_RESOLVE_INVALID_RESPONSE]: "encryption",
                    [C.I.LICENSE_RESOLVER_DEPRECATED_VERSION]: "encryption",
                    [C.I.PLAYER_CONTAINER_ELEMENT_NOT_FOUND]: "rendering",
                    [C.I.DISALLOW_PROTECTED_TRACK_ERROR]: "custom",
                    [C.I.CAPPING_USER_IS_CAPPED]: "custom",
                    [C.I.STORAGE_ERROR]: "custom",
                    [C.I.LIST_PLAYER_NO_TRACK_PLAYER]: "custom",
                    [C.I.LIST_PLAYER_NO_LIST]: "custom",
                    [C.I.LIST_PLAYER_INVALID_ARGUMENT]: "custom",
                    [C.I.LIST_PLAYER_FORBIDDEN]: "custom",
                    [C.I.TRACK_DATA_ALREADY_FINALIZED]: "custom",
                    [C.I.PLAYBACK_START_SENDING_FAILED]: "custom",
                    [C.I.PLAYBACK_STATS_SENDING_FAILED]: "custom",
                    [C.I.TSV_SENDING_FAILED]: "custom",
                    [C.I.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE]: "custom",
                    [C.I.PLAYER_INVALID_INTERNAL_STATE]: "custom",
                    [C.I.PLAYER_TIMEOUT_ERROR]: "custom",
                    [C.I.MEDIA_ABORTED]: "custom",
                    [C.I.PLAYER_MEDIA_ERROR]: "custom",
                    [C.I.PLAYER_PLAYBACK_ERROR]: "custom",
                    [C.I.PLAYER_BUFFER_QUOTA_EXCEEDED]: "custom",
                    [C.I.UNKNOWN]: "custom"
                },
                e0 = "MPE_REPORTER_METADATA_STORE_KEY";
            class e1 {
                constructor(e) {
                    var t, i, a, s;
                    this._sequenceNumber = 0, this.mediaState = {
                        media_url: function(e) {
                            let {
                                format: t,
                                url: i,
                                fileId: a
                            } = e;
                            switch (t) {
                                case eG.o.AD_MANIFEST:
                                case eG.o.GENERIC_MEDIA:
                                    return i;
                                case eG.o.MP3:
                                    return i || (a ? `spotify-audio://${a}` : "");
                                case eG.o.MP4:
                                case eG.o.MP4_DUAL:
                                case eG.o.MP4_CBCS:
                                case eG.o.MP4_FLAC:
                                    return a ? `spotify-audio://${a}` : "";
                                case eG.o.MANIFEST_ID:
                                    return a ? `spotify-video://${a}` : "";
                                default:
                                    return i
                            }
                        }({
                            format: e.mediaFormat,
                            url: e.url,
                            fileId: e.fileId
                        }),
                        feature_identifier: e.featureIdentifier,
                        playback_id: e.playbackId,
                        session_id: e.logData.playerSessionId || "",
                        media_type: e.mediaType
                    }, this.playerState = {
                        player_type: "harmony",
                        is_playing: e.playIntended,
                        speed: e.currentSpeed,
                        volume: Math.round((null != (t = e.volume) ? t : 1) * 100),
                        media_duration: e.msActualDuration,
                        bitrate: (null != (i = e.audioStartBitrate) ? i : 0) + (null != (a = e.videoStartBitrate) ? a : 0),
                        playback_destination: "device",
                        network_state: "unknown",
                        streaming_type: "unknown",
                        surface: e.videoSurface || "unknown"
                    }, this.playbackMode = e.mediaType, this.isVideoVisible = null != (s = e.isVideoVisible) && s, this.subtitlesVisible = !1, this.activeSubtitleLanguage = void 0, this.keySystemName = "unknown", this.keySystemImpl = "unknown", this.hasPlayed = !1, this.lastProgressPosition = -1, this.beginTrackingTimestamp = -1
                }
                getSequenceNumber() {
                    return this._sequenceNumber++
                }
                getIsAudioOnly() {
                    return !("video" === this.playbackMode && this.isVideoVisible)
                }
                getSubtitleLanguage() {
                    return this.subtitlesVisible && this.activeSubtitleLanguage ? this.activeSubtitleLanguage : "unknown"
                }
            }
            class e2 extends M.bk {
                constructor(e) {
                    super(), this._heartbeatTimerId = null, this._onTrackingDataCreated = this._onTrackingDataCreated.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onPaused = this._onPaused.bind(this), this._onPlaybackSpeedChanged = this._onPlaybackSpeedChanged.bind(this), this._onDurationChanged = this._onDurationChanged.bind(this), this._onVideoSurfaceChanged = this._onVideoSurfaceChanged.bind(this), this._onVideoVisibilityChanged = this._onVideoVisibilityChanged.bind(this), this._onMediaPlaybackModeChanged = this._onMediaPlaybackModeChanged.bind(this), this._onVolumeChanged = this._onVolumeChanged.bind(this), this._onPlayingProfileChanged = this._onPlayingProfileChanged.bind(this), this._onSubtitleLanguageChanged = this._onSubtitleLanguageChanged.bind(this), this._onSubtitlesVisibilityChanged = this._onSubtitlesVisibilityChanged.bind(this), this._onRebufferingStart = this._onRebufferingStart.bind(this), this._onRebufferingEnd = this._onRebufferingEnd.bind(this), this._onSeeking = this._onSeeking.bind(this), this._onPositionChanged = this._onPositionChanged.bind(this), this._onContentInitialized = this._onContentInitialized.bind(this), this._onError = this._onError.bind(this), this._onProgress = this._onProgress.bind(this), this._onTrackingDataFinalized = this._onTrackingDataFinalized.bind(this), this._onTrackEnded = this._onTrackEnded.bind(this), this._onStopped = this._onStopped.bind(this), e.enabled && this._initListeners(e.listPlayer)
                }
                static create(e) {
                    return new e2(e)
                }
                _initListeners(e) {
                    e.addListeners({
                        [ef.J.LIST_PLAYER_TRACKING_DATA_CREATED]: this._onTrackingDataCreated,
                        [ef.J.LIST_PLAYER_PLAYING]: this._onPlaying,
                        [ef.J.LIST_PLAYER_PAUSED]: this._onPaused,
                        [ef.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]: this._onPlaybackSpeedChanged,
                        [ef.J.LIST_PLAYER_DURATION_CHANGED]: this._onDurationChanged,
                        [ef.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: this._onVideoSurfaceChanged,
                        [ef.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: this._onVideoVisibilityChanged,
                        [ef.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: this._onMediaPlaybackModeChanged,
                        [ef.J.LIST_PLAYER_VOLUME_CHANGED]: this._onVolumeChanged,
                        [ef.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: this._onPlayingProfileChanged,
                        [ef.J.LIST_PLAYER_SUBTITLE_LANGUAGE_CHANGED]: this._onSubtitleLanguageChanged,
                        [ef.J.LIST_PLAYER_SUBTITLE_VISIBILITY_CHANGED]: this._onSubtitlesVisibilityChanged,
                        [ef.J.LIST_PLAYER_REBUFFERING_START]: this._onRebufferingStart,
                        [ef.J.LIST_PLAYER_REBUFFERING_END]: this._onRebufferingEnd,
                        [ef.J.LIST_PLAYER_SEEKING]: this._onSeeking,
                        [ef.J.LIST_PLAYER_POSITION_CHANGED]: this._onPositionChanged,
                        [ef.J.LIST_PLAYER_CONTENT_INITIALIZED]: this._onContentInitialized,
                        [ef.J.LIST_PLAYER_ERROR]: this._onError,
                        [ef.J.LIST_PLAYER_PROGRESS]: this._onProgress,
                        [ef.J.LIST_PLAYER_TRACKING_DATA_FINALIZED]: this._onTrackingDataFinalized,
                        [ef.J.LIST_PLAYER_TRACK_ENDED]: this._onTrackEnded,
                        [ef.J.LIST_PLAYER_STOPPED]: this._onStopped
                    })
                }
                _createPlaybackMetadataStore(e) {
                    let t = e.data.playbackMetadataStore;
                    if (!t) return null;
                    if (t.get(e0)) return t.get(e0);
                    let i = new e1(e.data.trackingData);
                    return t.set(e0, i), i
                }
                _onTrackingDataCreated(e) {
                    let t = this._createPlaybackMetadataStore(e);
                    if (!t) return;
                    let {
                        trackingData: i,
                        timestamp: a
                    } = e.data;
                    t.beginTrackingTimestamp = a, this._emitMediaPlaybackEvent({
                        event_type: g.INITIALIZATION_START,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, i.startPosition),
                        sequence_number: t.getSequenceNumber(),
                        created_time: a,
                        spotify_uri: i.currentTrackUri,
                        play_context: i.playContext,
                        content_type: i.mediaType
                    })
                }
                _onContentInitialized(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    if (!t) return;
                    let i = e.data.keySystemInfo;
                    i && (t.keySystemName = i.keySystem, t.keySystemImpl = i.keySystemImpl), this._emitMediaPlaybackEvent({
                        event_type: g.INITIALIZATION_END,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.position),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp,
                        keysystem: {
                            name: t.keySystemName,
                            impl: t.keySystemImpl
                        }
                    })
                }
                _getPlaybackMetadataStore(e) {
                    return e && e.get(e0) || null
                }
                _onPlaying(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.is_playing = !0, t.hasPlayed || (t.hasPlayed = !0, this._emitBeacon(t, "playback_started", e.data.rawPosition, e.data.timestamp), this._startHeartbeatTimer(t)), this._emitMediaPlaybackEvent({
                        event_type: g.PLAY,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.rawPosition),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp
                    }))
                }
                _onRebufferingStart(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.speed = e.data.playback_speed, this._emitMediaPlaybackEvent({
                        event_type: g.STALL_START,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.position),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp
                    }))
                }
                _onPaused(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.is_playing = !1, this._emitMediaPlaybackEvent({
                        event_type: g.PAUSE,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.rawPosition),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp
                    }))
                }
                _onPlaybackSpeedChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && e.data.playback_speed !== t.playerState.speed && (t.playerState.speed = e.data.playback_speed, this._emitBeacon(t, "speed_changed", e.data.rawPosition, e.data.timestamp), this._resetHeartbeatTimer(t))
                }
                _onDurationChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.media_duration = e.data.duration)
                }
                _onVideoSurfaceChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    if (!t) return;
                    let i = e.data.videoSurface || "unknown";
                    i !== t.playerState.surface && (t.playerState.surface = i, this._emitBeacon(t, "surface_changed", e.data.position, e.data.timestamp), this._resetHeartbeatTimer(t))
                }
                _onVideoVisibilityChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.isVideoVisible = e.data.visible)
                }
                _onMediaPlaybackModeChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playbackMode = e.data.playbackMode)
                }
                _onVolumeChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.volume = Math.round(100 * e.data.volume))
                }
                _onPlayingProfileChanged(e) {
                    var t, i, a, s, r, n, o, l, _, d, u, c, h;
                    let p = this._getPlaybackMetadataStore(e.data.playbackMetadataStore),
                        m = e.data.profile;
                    if (!p || !m) return;
                    p.playerState.bitrate = (null != (i = null == (t = m.audio) ? void 0 : t.bitrate) ? i : 0) + (null != (s = null == (a = m.video) ? void 0 : a.bitrate) ? s : 0);
                    let E = {
                        event_type: g.PROFILE_CHANGED,
                        media_state: p.mediaState,
                        player_state: this._buildPlayerState(p, e.data.rawPosition),
                        sequence_number: p.getSequenceNumber(),
                        created_time: e.data.timestamp,
                        reason: null != (r = e.data.reason) ? r : "abr",
                        frame_rate: 0,
                        type: m.video ? "video" : "audio",
                        audio_profile: m.audio ? {
                            profile_id: m.audio.id,
                            codec: m.audio.mimeType,
                            average_bitrate: null != (n = m.audio.bitrate) ? n : 0,
                            max_bitrate: null != (o = m.audio.bitrate) ? o : 0
                        } : void 0,
                        video_profile: m.video ? {
                            profile_id: m.video.id,
                            codec: m.video.mimeType,
                            average_bitrate: null != (l = m.video.bitrate) ? l : 0,
                            max_bitrate: null != (_ = m.video.bitrate) ? _ : 0,
                            encoded_width: null != (d = m.video.width) ? d : 0,
                            encoded_height: null != (u = m.video.height) ? u : 0
                        } : void 0,
                        surface_dimension: m.video ? {
                            width: null != (c = m.video.width) ? c : 0,
                            height: null != (h = m.video.height) ? h : 0
                        } : void 0
                    };
                    this._emitMediaPlaybackEvent(E)
                }
                _onSubtitleLanguageChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && e.data.language !== t.activeSubtitleLanguage && (t.activeSubtitleLanguage = e.data.language, this._emitBeacon(t, "subtitle_language_changed", e.data.position, e.data.timestamp), this._resetHeartbeatTimer(t))
                }
                _onSubtitlesVisibilityChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.subtitlesVisible = e.data.visible)
                }
                _onRebufferingEnd(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.playerState.speed = e.data.playback_speed, this._emitMediaPlaybackEvent({
                        event_type: g.STALL_END,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.position),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp
                    }))
                }
                _onSeeking(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    if (!t) return;
                    let i = null !== e.data.rawPreviousPosition ? e.data.rawPreviousPosition : -1;
                    i !== e.data.rawPosition && this._emitMediaPlaybackEvent({
                        event_type: g.SEEK_START,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, i),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp,
                        seek_start_position: i,
                        seek_end_position: e.data.rawPosition
                    })
                }
                _onPositionChanged(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    if (!t) return;
                    let i = null !== e.data.rawPreviousPosition ? e.data.rawPreviousPosition : -1;
                    i !== e.data.rawPosition && this._emitMediaPlaybackEvent({
                        event_type: g.SEEK_END,
                        media_state: t.mediaState,
                        player_state: this._buildPlayerState(t, e.data.rawPosition),
                        sequence_number: t.getSequenceNumber(),
                        created_time: e.data.timestamp,
                        seek_start_position: i,
                        seek_end_position: e.data.rawPosition
                    })
                }
                _onError(e) {
                    var t, i, a;
                    let s = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    if (!s) return;
                    let r = e.data.error;
                    (null == r ? void 0 : r.unrecoverable) && this._stopHeartbeatTimer(), this._emitMediaPlaybackEvent({
                        event_type: g.ERROR,
                        media_state: s.mediaState,
                        player_state: this._buildPlayerState(s, e.data.rawPosition),
                        sequence_number: s.getSequenceNumber(),
                        created_time: e.data.timestamp,
                        severity: (null == r ? void 0 : r.unrecoverable) ? "fatal" : "warning",
                        error: {
                            type: void 0 === (a = null == r ? void 0 : r.code) ? "custom" : a in eZ ? eZ[a] : "custom",
                            code: null != (t = null == r ? void 0 : r.code) ? t : "UNKNOWN",
                            message: null != (i = null == r ? void 0 : r.message) ? i : ""
                        },
                        keysystem: {
                            name: s.keySystemName,
                            impl: s.keySystemImpl
                        }
                    }), this._emitBeacon(s, "error", e.data.rawPosition, e.data.timestamp)
                }
                _onProgress(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && (t.lastProgressPosition = e.data.rawPosition)
                }
                _onTrackEnded(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && this._emitBeacon(t, "played_to_end", e.data.rawPosition, e.data.timestamp)
                }
                _onStopped(e) {
                    let t = this._getPlaybackMetadataStore(e.data.playbackMetadataStore);
                    t && this._emitBeacon(t, "end_requested", e.data.rawPosition, e.data.timestamp)
                }
                _onTrackingDataFinalized() {
                    this._stopHeartbeatTimer()
                }
                _startHeartbeatTimer(e) {
                    this._stopHeartbeatTimer(), this._heartbeatTimerId = setTimeout(() => {
                        this._emitBeacon(e, "heartbeat", e.lastProgressPosition, Date.now()), this._startHeartbeatTimer(e)
                    }, 3e4)
                }
                _resetHeartbeatTimer(e) {
                    null !== this._heartbeatTimerId && this._startHeartbeatTimer(e)
                }
                _stopHeartbeatTimer() {
                    null !== this._heartbeatTimerId && (clearTimeout(this._heartbeatTimerId), this._heartbeatTimerId = null)
                }
                _buildPlayerState(e, t) {
                    return {
                        player_type: e.playerState.player_type,
                        is_playing: e.playerState.is_playing,
                        player_position: t,
                        speed: e.playerState.speed,
                        volume: e.playerState.volume,
                        bitrate: e.playerState.bitrate,
                        media_duration: e.playerState.media_duration,
                        playback_destination: e.playerState.playback_destination,
                        network_state: e.playerState.network_state,
                        streaming_type: e.playerState.streaming_type,
                        surface: e.playerState.surface,
                        is_audio_only: e.getIsAudioOnly(),
                        subtitle_language: e.getSubtitleLanguage()
                    }
                }
                _emitBeacon(e, t, i, a) {
                    this._emitMediaPlaybackEvent({
                        event_type: g.BEACON,
                        reason: t,
                        media_state: e.mediaState,
                        player_state: this._buildPlayerState(e, i),
                        sequence_number: e.getSequenceNumber(),
                        created_time: a,
                        begin_tracking_timestamp: "playback_started" === t ? e.beginTrackingTimestamp : -1
                    })
                }
                _emitMediaPlaybackEvent(e) {
                    this.emit(S.MEDIA_PLAYBACK_EVENT, e)
                }
            }
            let e4 = {
                    initialization_start: 0,
                    pause: 1,
                    stall_start: 2,
                    stall_end: 3,
                    play: 4,
                    seek_start: 5,
                    seek_end: 6,
                    initialization_end: 7,
                    error: 8,
                    profile_changed: 9,
                    beacon: 10
                },
                e5 = {
                    playback_started: 0,
                    speed_changed: 1,
                    surface_changed: 2,
                    subtitle_language_changed: 3,
                    error: 4,
                    played_to_end: 5,
                    end_requested: 6,
                    heartbeat: 7
                };

            function e3(e, t) {
                let i = {},
                    a = Object.keys(t);
                for (let s = 0; s < a.length; s++) {
                    let r = a[s];
                    t[r] !== e[r] && (i[r] = t[r])
                }
                return i
            }
            let e8 = {
                sequence_number: "sn",
                created_time: "ct",
                event_type: "et",
                media_state: "ms",
                player_state: "ps",
                media_url: "mu",
                feature_identifier: "fi",
                playback_id: "pi",
                session_id: "si",
                media_type: "mt",
                player_type: "pt",
                media_duration: "md",
                is_playing: "ip",
                player_position: "pp",
                subtitle_language: "sl",
                speed: "sp",
                volume: "vo",
                network_state: "ns",
                bitrate: "br",
                playback_destination: "pd",
                is_audio_only: "ao",
                streaming_type: "st",
                surface: "su",
                spotify_uri: "ur",
                play_context: "pc",
                content_type: "xt",
                keysystem: "ks",
                name: "nm",
                impl: "im",
                seek_start_position: "ss",
                seek_end_position: "se",
                severity: "sv",
                error: "er",
                code: "co",
                message: "mg",
                surface_dimension: "sd",
                width: "wd",
                height: "ht",
                audio_profile: "ap",
                video_profile: "vp",
                profile_id: "qi",
                codec: "cc",
                average_bitrate: "ab",
                max_bitrate: "xb",
                encoded_width: "ew",
                encoded_height: "eh",
                frame_rate: "fr",
                begin_tracking_timestamp: "bt",
                type: "ty",
                reason: "rn"
            };

            function e9(e) {
                return {
                    [e8.name]: e.name,
                    [e8.impl]: e.impl
                }
            }
            class e6 extends M.bk {
                constructor(e, t) {
                    super(), this._queue = [], this._flushTimerId = null, this._logSender = t, this._onMediaPlaybackEvent = this._onMediaPlaybackEvent.bind(this), this._onFlushTimer = this._onFlushTimer.bind(this), this._flushTeardown = this._flushTeardown.bind(this), this._onVisibilityChange = this._onVisibilityChange.bind(this), this.proxyEmitSync(e, S.MEDIA_PLAYBACK_EVENT, T.MEDIA_PLAYBACK_EVENT), e.addListeners({
                        [S.MEDIA_PLAYBACK_EVENT]: this._onMediaPlaybackEvent
                    }), this._nextFlushTime = Date.now() + 12e4, this._scheduleFlush(), "undefined" != typeof window && window.addEventListener("pagehide", this._flushTeardown), "undefined" != typeof document && document.addEventListener("visibilitychange", this._onVisibilityChange)
                }
                static create(e, t) {
                    return new e6(e, t)
                }
                _scheduleFlush() {
                    this._flushTimerId = setTimeout(this._onFlushTimer, 12e4)
                }
                _resetFlushTimer() {
                    null !== this._flushTimerId && clearTimeout(this._flushTimerId), this._nextFlushTime = Date.now() + 12e4, this._scheduleFlush()
                }
                _onFlushTimer() {
                    this._flush("interval")
                }
                _onVisibilityChange() {
                    "hidden" === document.visibilityState && this._flushTeardown()
                }
                _flushTeardown() {
                    this._flush("page_hidden")
                }
                _flush(e) {
                    if (0 === this._queue.length) {
                        this._resetFlushTimer(), this._emitQueueState();
                        return
                    }
                    let t = this._queue;
                    this._queue = [], this._logSender.logMediaPlaybackEvents({
                        events: function(e) {
                            let t = function(e) {
                                    if (0 === e.length) return [];
                                    let t = [e[0]];
                                    for (let i = 1; i < e.length; i++) {
                                        let a = e[i - 1],
                                            s = e[i],
                                            {
                                                media_state: r,
                                                player_state: n
                                            } = s,
                                            o = (0, eS.__rest)(s, ["media_state", "player_state"]);
                                        t.push(Object.assign(Object.assign({}, o), {
                                            media_state: e3(a.media_state, r),
                                            player_state: e3(a.player_state, n)
                                        }))
                                    }
                                    return t
                                }(e),
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(function(e) {
                                var t, i, a, s;
                                let r = {
                                    [e8.sequence_number]: e.sequence_number,
                                    [e8.created_time]: e.created_time,
                                    [e8.media_state]: function(e) {
                                        let t = {};
                                        return void 0 !== e.media_url && (t[e8.media_url] = e.media_url), void 0 !== e.feature_identifier && (t[e8.feature_identifier] = e.feature_identifier), void 0 !== e.playback_id && (t[e8.playback_id] = e.playback_id), void 0 !== e.session_id && (t[e8.session_id] = e.session_id), void 0 !== e.media_type && (t[e8.media_type] = e.media_type), t
                                    }(e.media_state),
                                    [e8.player_state]: function(e) {
                                        let t = {};
                                        return void 0 !== e.player_type && (t[e8.player_type] = e.player_type), void 0 !== e.media_duration && (t[e8.media_duration] = e.media_duration), void 0 !== e.is_playing && (t[e8.is_playing] = e.is_playing), void 0 !== e.player_position && (t[e8.player_position] = e.player_position), void 0 !== e.subtitle_language && (t[e8.subtitle_language] = e.subtitle_language), void 0 !== e.speed && (t[e8.speed] = e.speed), void 0 !== e.volume && (t[e8.volume] = e.volume), void 0 !== e.network_state && (t[e8.network_state] = e.network_state), void 0 !== e.bitrate && (t[e8.bitrate] = e.bitrate), void 0 !== e.playback_destination && (t[e8.playback_destination] = e.playback_destination), void 0 !== e.is_audio_only && (t[e8.is_audio_only] = e.is_audio_only), void 0 !== e.streaming_type && (t[e8.streaming_type] = e.streaming_type), void 0 !== e.surface && (t[e8.surface] = e.surface), t
                                    }(e.player_state)
                                };
                                switch (e.event_type) {
                                    case g.INITIALIZATION_START:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.initialization_start,
                                            [e8.spotify_uri]: e.spotify_uri,
                                            [e8.play_context]: e.play_context,
                                            [e8.content_type]: e.content_type
                                        });
                                    case g.PAUSE:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.pause
                                        });
                                    case g.STALL_START:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.stall_start
                                        });
                                    case g.STALL_END:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.stall_end
                                        });
                                    case g.PLAY:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.play
                                        });
                                    case g.SEEK_START:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.seek_start,
                                            [e8.seek_start_position]: e.seek_start_position,
                                            [e8.seek_end_position]: e.seek_end_position
                                        });
                                    case g.SEEK_END:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.seek_end,
                                            [e8.seek_start_position]: e.seek_start_position,
                                            [e8.seek_end_position]: e.seek_end_position
                                        });
                                    case g.INITIALIZATION_END:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.initialization_end,
                                            [e8.keysystem]: e9(e.keysystem)
                                        });
                                    case g.ERROR:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.error,
                                            [e8.severity]: e.severity,
                                            [e8.error]: (t = e.error, {
                                                [e8.type]: t.type,
                                                [e8.code]: t.code,
                                                [e8.message]: t.message
                                            }),
                                            [e8.keysystem]: e9(e.keysystem)
                                        });
                                    case g.PROFILE_CHANGED:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.profile_changed,
                                            [e8.surface_dimension]: void 0 !== (i = e.surface_dimension) ? {
                                                [e8.width]: i.width,
                                                [e8.height]: i.height
                                            } : void 0,
                                            [e8.audio_profile]: void 0 !== (a = e.audio_profile) ? {
                                                [e8.profile_id]: a.profile_id,
                                                [e8.codec]: a.codec,
                                                [e8.average_bitrate]: a.average_bitrate,
                                                [e8.max_bitrate]: a.max_bitrate
                                            } : void 0,
                                            [e8.video_profile]: void 0 !== (s = e.video_profile) ? {
                                                [e8.profile_id]: s.profile_id,
                                                [e8.codec]: s.codec,
                                                [e8.average_bitrate]: s.average_bitrate,
                                                [e8.max_bitrate]: s.max_bitrate,
                                                [e8.encoded_width]: s.encoded_width,
                                                [e8.encoded_height]: s.encoded_height
                                            } : void 0,
                                            [e8.frame_rate]: e.frame_rate,
                                            [e8.type]: e.type,
                                            [e8.reason]: e.reason
                                        });
                                    case g.BEACON:
                                        return Object.assign(Object.assign({}, r), {
                                            [e8.event_type]: e4.beacon,
                                            [e8.reason]: e5[e.reason],
                                            [e8.begin_tracking_timestamp]: e.begin_tracking_timestamp
                                        });
                                    default:
                                        return e
                                }
                            }(t[e]));
                            return i
                        }(t)
                    }, {
                        teardown: "page_hidden" === e
                    }), this.emitSync(T.FLUSHED, {
                        eventCount: t.length,
                        events: t,
                        reason: e
                    }), this._resetFlushTimer(), this._emitQueueState()
                }
                _onMediaPlaybackEvent(e) {
                    this._queue.push(e.data), this._queue.length >= 15 ? this._flush("queue_full") : this._emitQueueState()
                }
                _emitQueueState() {
                    this.emitSync(T.QUEUE_STATE_CHANGED, {
                        queueSize: this._queue.length,
                        nextFlushTime: this._nextFlushTime
                    })
                }
            }
            var e7 = i(96152);

            function te(e, t, a) {
                let s = e2.create({
                        listPlayer: e,
                        enabled: a
                    }),
                    r = e6.create(s, t);
                "true" === e7.env.DEBUG && (i.g.__harmonyMediaPlaybackSender = r)
            }

            function tt(e, t, i, a, s) {
                var r, n;
                return e.uri = t.item.metadata.uri, e.fileId = null == (n = null == (r = t.item.manifest[a]) ? void 0 : r[0]) ? void 0 : n.file_id, e.mediaType = i, e.format = s, e
            }

            function ti(e, t, i) {
                if (!(null == i ? void 0 : i.manifestFormats) || 0 === i.manifestFormats.length) return Promise.resolve(null);
                let a = `http://@webgate/track-playback/v1/media/${t}?${i.manifestFormats.map(e=>`manifestFileFormat=${e}`).join("&")}`;
                return e.request(a, {
                    method: "GET",
                    responseType: "json",
                    timing: !0
                }).then(e => {
                    if (200 !== e.status) return null;
                    let a = e.body,
                        s = (null == i ? void 0 : i.mediaType) || "audio",
                        r = a.media[t];
                    if (!r) return null;
                    let n = {
                        uri: "",
                        fileId: "",
                        mediaType: "audio",
                        format: eG.o.GENERIC_MEDIA,
                        playable: !0,
                        logData: {}
                    };
                    if ("video" === s) {
                        if ("MIXED" === r.item.track_type) return tt(n, r, "video", _.MANIFEST_IDS_VIDEO, eG.o.MANIFEST_ID);
                        if (r.video_version_uri) {
                            let e = a.media[r.video_version_uri];
                            if (e) return tt(n, e, "video", _.MANIFEST_IDS_VIDEO, eG.o.MANIFEST_ID)
                        }
                        return null
                    }
                    return tt(n, r, "audio", _.FILE_IDS_MP4, eG.o.MP4)
                }).catch(() => null)
            }
            class ta extends M.bk {
                constructor(e) {
                    super(), this._client = e.client, this._initialVolume = e.initialVolume, this._listPlayer = e.listPlayer, this._playerPromise = e.playerPromise, this._playbackServiceClient = e.playbackServiceClient, this._playbackStateObserver = e.playbackStateObserver, this._stopOnBackground = e.stopOnBackground, this._enableMediaSession = e.enableMediaSession, te(this._listPlayer, e.logger, e.enableMediaPlaybackReporting), this._init()
                }
                _init() {
                    this._client.addListeners({
                        before_disconnect: this._onClientBeforeDisconnect.bind(this),
                        before_offline_disconnect: this._onClientBeforeOfflineDisconnect.bind(this)
                    });
                    let e = this._listPlayer;
                    e.addListeners({
                        [ef.J.LIST_PLAYER_CAPPED]: this._onCapped.bind(this),
                        [ef.J.LIST_PLAYER_TRACK_ENDED]: this._onTrackEnded.bind(this),
                        [ef.J.LIST_PLAYER_TRACK_LOADED]: this._onTrackLoaded.bind(this),
                        [ef.J.LIST_PLAYER_BEFORE_VOLUME_CHANGE]: this._onBeforeVolumeChange.bind(this),
                        [ef.J.LIST_PLAYER_VOLUME_CHANGED]: this._onVolumeChanged.bind(this),
                        [ef.J.LIST_PLAYER_ERROR]: e => {
                            this._onError(e, r.PLAYBACK)
                        }
                    }), this.proxyEmitAll(e, {
                        [ef.J.LIST_PLAYER_AUTOPLAY_FAILED]: "autoplay_failed",
                        [ef.J.LIST_PLAYER_TRACK_LOADED]: "track_loaded",
                        [ef.J.LIST_PLAYER_DURATION_CHANGED]: "duration_changed",
                        [ef.J.LIST_PLAYER_POSITION_CHANGED]: "position_changed",
                        [ef.J.LIST_PLAYER_PROGRESS]: "progress",
                        [ef.J.LIST_PLAYER_BUFFER_STALLED]: "stalled",
                        [ef.J.LIST_PLAYER_BUFFERING_END]: "buffering_end",
                        [ef.J.LIST_PLAYER_BUFFERING_START]: "buffering_start",
                        [ef.J.LIST_PLAYER_REBUFFERING_END]: "rebuffering_end",
                        [ef.J.LIST_PLAYER_REBUFFERING_START]: "rebuffering_start",
                        [ef.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]: "max_list_errors_reached",
                        [ef.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]: "video_element_appended",
                        [ef.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: "video_element_removed",
                        [ef.J.LIST_PLAYER_LIST_ENDED]: "context_ended",
                        [ef.J.LIST_PLAYER_SEEK_HANDLED]: "streamer_seek_handled",
                        [ef.J.LIST_PLAYER_DISPLAYED_CUES_CHANGED]: "displayed_cues_changed",
                        [ef.J.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED]: "subtitle_languages_loaded",
                        [ef.J.LIST_PLAYER_SEEK_PANELS_LOADED]: "seek_panels_loaded",
                        [ef.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]: "speed_changed",
                        [ef.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: "playing_profile_changed",
                        [ef.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: "media_playback_mode_changed",
                        [ef.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: "video_visibility_changed",
                        [ef.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: "video_surface_changed"
                    }), this.proxyEmitAllSync(e, {
                        [ef.J.REPORTING_START]: "reporting_start",
                        [ef.J.REPORTING_FIRST_QUARTILE]: "reporting_first_quartile",
                        [ef.J.REPORTING_MIDPOINT]: "reporting_midpoint",
                        [ef.J.REPORTING_THIRD_QUARTILE]: "reporting_third_quartile",
                        [ef.J.REPORTING_COMPLETE]: "reporting_complete",
                        [ef.J.REPORTING_PAUSE]: "reporting_pause",
                        [ef.J.REPORTING_RESUME]: "reporting_resume",
                        [ef.J.REPORTING_CREATIVE_VIEW]: "reporting_creative_view",
                        [ef.J.REPORTING_ERROR]: "reporting_error"
                    });
                    let t = this._playbackServiceClient;
                    t.addListeners({
                        logout: this._onPlaybackClientLogout.bind(this),
                        error: e => {
                            this._onError(e, e.data.source)
                        }
                    }), this.proxyEmitAll(t, {
                        max_subscriptions_reached: "max_subscriptions_reached",
                        deregistered: "deregistered",
                        registered: "registered",
                        registration_aborted: "registration_aborted",
                        internal_endcontent: "internal_endcontent"
                    }), this.proxyEmit(this._playbackStateObserver, "state_changed", "state_changed"), this._stopOnBackground && document.addEventListener && document.addEventListener("visibilitychange", () => {
                        document.hidden && this.stop() && this.emitSync("stopped_on_background", null)
                    }), this._enableMediaSession && ez.create({
                        streamer: this
                    }), this._playerPromise.then(e => {
                        e.setVolume(this._initialVolume), this.emit("player_initialization_done", null)
                    }, e => {
                        this.emit("player_initialization_failed", {
                            reason: e.message,
                            error: e
                        })
                    })
                }
                _assertOperationSuccess(e) {
                    return e === eH.T.SUCCESS
                }
                _onTrackEnded() {
                    this.emit("track_ended", null)
                }
                _onClientBeforeDisconnect(e) {
                    e.data.awaitPromise(this.deregister().catch(() => {}))
                }
                _onClientBeforeOfflineDisconnect(e) {
                    e.data.awaitPromise(this.pause().catch(() => {}))
                }
                _onBeforeVolumeChange(e) {
                    var t;
                    this.emitSync("before_volume_change", {
                        volume: e.data.volume,
                        remote: !!(null == (t = e.data.options) ? void 0 : t.commandId)
                    }).defaultPrevented && e.preventDefault()
                }
                _onVolumeChanged(e) {
                    this.emit("volume_changed", {
                        volume: e.data.volume,
                        remote: !!e.data.commandId
                    })
                }
                _onCapped() {
                    this.emit("playback_capped", null)
                }
                _onError(e, t) {
                    let {
                        error: i
                    } = e.data;
                    i && (i.registration && this.emit("registration_error", {
                        error: i
                    }), this.emit("error", {
                        source: t,
                        error: i
                    }), this._client.notifyError(t, i))
                }
                _onPlaybackClientLogout() {
                    this.emit("logged_out", null)
                }
                _onTrackLoaded(e) {
                    var t;
                    let i = e.data.track;
                    (null == (t = i.metadata) ? void 0 : t.isMusicVideo) === !1 && this._client.getDeviceDescriptor().then(e => e.getManifestFormats()).then(e => ti(this._client.getPublicTransport(), i.uri, {
                        mediaType: "video",
                        manifestFormats: e
                    })).then(e => {
                        e && this._listPlayer.preloadTrack(e)
                    }).catch(() => {})
                }
                stop() {
                    return this._playbackServiceClient.stop()
                }
                register() {
                    return this._playbackServiceClient.register()
                }
                deregister() {
                    return this._playbackServiceClient.deregister()
                }
                resume() {
                    return this._listPlayer.resume().then(this._assertOperationSuccess)
                }
                pause() {
                    return this._listPlayer.pause().then(this._assertOperationSuccess)
                }
                nextTrack(e = l.FORWARD_BUTTON) {
                    return this._listPlayer.next(e).then(this._assertOperationSuccess)
                }
                canChangeTrack() {
                    return this._listPlayer.canChangeTrack()
                }
                previousTrack(e = l.BACK_BUTTON) {
                    return this._listPlayer.previous(e).then(this._assertOperationSuccess)
                }
                togglePlay() {
                    return this._listPlayer.togglePlay().then(this._assertOperationSuccess)
                }
                setVolume(e) {
                    return this._listPlayer.setVolume(e).then(this._assertOperationSuccess)
                }
                getVolume() {
                    return this._listPlayer.getVolume()
                }
                seek(e) {
                    return this._listPlayer.seek(e).then(this._assertOperationSuccess)
                }
                getCurrentState() {
                    return this._playbackStateObserver.getCurrentState()
                }
                getVideoVariants() {
                    return this._listPlayer.getVideoVariants()
                }
                setPreferredBitrate(e) {
                    return this._playerPromise.then(t => t.setPreferredBitrate(e).then(this._assertOperationSuccess))
                }
                setVideoResolution(e) {
                    return this._listPlayer.setVideoResolution(e).then(this._assertOperationSuccess)
                }
                setBackgrounded(e) {
                    return this.setPlayerVisibility(!e)
                }
                setPlayerVisibility(e) {
                    return this._listPlayer.setIsVideoVisible(e).then(this._assertOperationSuccess)
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
                setIsVideoVisible(e) {
                    return this._listPlayer.setIsVideoVisible(e).then(this._assertOperationSuccess)
                }
                setVideoSurface(e) {
                    return this._listPlayer.setVideoSurface(e).then(this._assertOperationSuccess)
                }
                activateElement() {
                    return this._playerPromise.then(e => e.activateElement())
                }
                hideSubtitles() {
                    return this._listPlayer.hideSubtitles().then(this._assertOperationSuccess)
                }
                showSubtitles() {
                    return this._listPlayer.showSubtitles().then(this._assertOperationSuccess)
                }
                areSubtitlesShown() {
                    return this._listPlayer.areSubtitlesShown()
                }
                getSubtitleLanguages() {
                    return this._listPlayer.getSubtitleLanguages()
                }
                getActiveSubtitleLanguage() {
                    return this._listPlayer.getActiveSubtitleLanguage()
                }
                setSubtitleLanguage(e) {
                    return this._listPlayer.setSubtitleLanguage(e).then(this._assertOperationSuccess)
                }
                getSeekPanels() {
                    return this._listPlayer.getSeekPanels()
                }
                getMediaConfig() {
                    return this._listPlayer.getMediaConfig()
                }
                setPlaybackSpeed(e) {
                    return this._listPlayer.setPlaybackSpeed(e).then(this._assertOperationSuccess)
                }
                deactivateSubtitleEvents() {
                    return this._listPlayer.deactivateCueEvents().then(this._assertOperationSuccess)
                }
                activateSubtitleEvents() {
                    return this._listPlayer.activateCueEvents().then(this._assertOperationSuccess)
                }
                setMediaPlaybackQuality(e) {
                    return this._listPlayer.setMediaPlaybackQuality(e).then(this._assertOperationSuccess)
                }
                hasOptimisticUpdates() {
                    return this._playbackServiceClient.hasOptimisticUpdates()
                }
            }
            var ts = i(42736);
            class tr extends Error {
                constructor(e, t, i = {}) {
                    super(t), this.status = -1, this.maxedSubscriptions = !1, this.unrecoverable = !1, this.debug = {}, this.registration = !1, this.code = e, this.name = "TrackPlayerAPIClientError", this.debug = i
                }
                static fatal(e, t, i = {}) {
                    let a = new tr(e, t, i);
                    return a.unrecoverable = !0, a
                }
            }

            function tn(e) {
                return (0, ts.gHQ)(e) || (0, ts.yBI)(e)
            }

            function to(e, t) {
                return e && (null == t ? void 0 : t.context_enhancement) === "RECOMMENDATION" ? y.SMART : y[e ? "ON" : "OFF"]
            }! function(e) {
                e.ON = "ON", e.OFF = "OFF", e.NONE = "NONE"
            }(f || (f = {})),
            function(e) {
                e[e.OFF = 0] = "OFF", e[e.ON = 1] = "ON", e[e.SMART = 2] = "SMART"
            }(y || (y = {}));
            let tl = /^disallow_([^]+)_reasons$/;

            function t_(e) {
                let t = {};
                for (let i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i))
                        if ("disallow_setting_modes" === i) t.setting_modes = function(e) {
                            var t, i, a, s, r, n, o, l;
                            let _ = {};
                            for (let d in e)
                                if (Object.prototype.hasOwnProperty.call(e, d))
                                    for (let u in _[d] = {}, null == (t = e[d]) ? void 0 : t.values) Object.prototype.hasOwnProperty.call(null == (i = e[d]) ? void 0 : i.values, u) && ((_[d] || {})[u] = !!((null == (r = null == (s = null == (a = e[d]) ? void 0 : a.values) ? void 0 : s[u]) ? void 0 : r.reasons) && (null == (l = null == (o = null == (n = e[d]) ? void 0 : n.values) ? void 0 : o[u]) ? void 0 : l.reasons.length)));
                            return _
                        }(e[i]);
                        else if ("disallow_signals" === i) t.signals = function(e) {
                    var t, i;
                    let a = {};
                    for (let s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = !!(null == (i = null == (t = null == e ? void 0 : e[s]) ? void 0 : t.reasons) ? void 0 : i.length));
                    return a
                }(e[i]);
                else {
                    let a = e[i];
                    if (Array.isArray(a)) {
                        let e = !!(a && a.length);
                        t[i.replace(tl, "$1")] = e
                    }
                }
                return t
            }

            function td(e, t) {
                let i = {
                    episode: (null == t ? void 0 : t.toLowerCase()) || "unknown",
                    track: "music",
                    ad: "ad",
                    interruption: "ad",
                    media: "narration"
                };
                return (null == e ? void 0 : e.type) && e.type in i ? i[e.type] : "unknown"
            }
            let tu = q.m.forTag("tp.stream.PlaybackStateObserver");
            class tc extends M.bk {
                constructor(e, t = {}) {
                    super(), this._tpApiClient = e, this._numPreviousTracks = t.numPrevious || 2, this._numNextTracks = t.numNextTracks || 2, this._currentState = null, this._init()
                }
                static create(e, t) {
                    return new tc(e, t)
                }
                _init() {
                    this._tpApiClient.on("state_changed", this._onStateChanged.bind(this)), this._tpApiClient.on("state_cleared", this._onStateCleared.bind(this))
                }
                _onStateChanged(e) {
                    var t, i, a, s, r, n, o;
                    let {
                        stateMachine: l,
                        stateRef: _,
                        position: d,
                        paused: u,
                        loading: c,
                        currentTrackInfo: h,
                        contextMetadata: p
                    } = e.data, m = null == l ? void 0 : l.states;
                    if (!l || !(null == m ? void 0 : m.length) || !_) return void tu.warn("_onStateChanged called with no current state", e);
                    let E = m[_.state_index],
                        g = null == E ? void 0 : E.track,
                        S = void 0 !== g ? l.tracks[g] : void 0;
                    if (!E || !S) return void tu.warn("_onStateChanged called with no current state or track", e);
                    let {
                        options: T
                    } = E, y = null != (t = h.duration) ? t : 0, I = this._createTrackWindow(l, E, y);
                    y || (y = null != (a = null == (i = I.current_track) ? void 0 : i.duration_ms) ? a : 0);
                    let v = function(e, t) {
                            let i = Object.assign({}, e);
                            return delete i.disallow_pausing_reasons, delete i.disallow_resuming_reasons, t ? i.disallow_pausing_reasons = ["already_paused"] : i.disallow_resuming_reasons = ["not_paused"], i
                        }(E.restrictions || {}, u),
                        P = t_(v),
                        {
                            currentPlaybackSpeed: A,
                            selectedPlaybackSpeed: R,
                            isPlaybackSpeedRestricted: L
                        } = h,
                        b = {
                            current: u ? 0 : null != A ? A : 1,
                            selected: L ? 1 : null != R ? R : 1,
                            restricted: !!L
                        },
                        D = {
                            timestamp: Date.now(),
                            context: {
                                uri: null != (r = null == (s = S.metadata) ? void 0 : s.context_uri) ? r : null,
                                metadata: p
                            },
                            position: d,
                            duration: y,
                            paused: u,
                            playback_quality: null != (n = h.playbackQuality) ? n : ej.d2.UNKNOWN,
                            playback_features: {
                                hifi_status: null != (o = h.hifiStatus) ? o : f.NONE,
                                playback_speed: b,
                                signal_ids: E.signals || [],
                                modes: (null == T ? void 0 : T.modes) || {},
                                ad_break_context: E.ad_break_context,
                                media_quality: h.mediaQuality
                            },
                            shuffle: this._getShuffleSetting(l),
                            shuffle_mode: to(null == T ? void 0 : T.shuffling_context, null == T ? void 0 : T.modes),
                            repeat_mode: this._getRepeatSetting(l),
                            track_window: I,
                            restrictions: v,
                            disallows: P,
                            loading: c,
                            playback_speed: b.current,
                            playback_id: E.state_id
                        };
                    this._currentState = D, this.emit("state_changed", {
                        state: D ? Object.assign({}, D) : null
                    })
                }
                _createTrackWindow(e, t, i) {
                    let a = e.states;
                    return {
                        current_track: this._getTrackMetadata(e, t, i),
                        next_tracks: this._getNextStates(t, a).map(t => this._getTrackMetadata(e, t, null)).filter(e => !!e),
                        previous_tracks: this._getPreviousStates(t, a).map(t => this._getTrackMetadata(e, t, null)).filter(e => !!e)
                    }
                }
                _onStateCleared() {
                    this._currentState = null, this.emit("state_changed", {
                        state: null
                    })
                }
                _getRepeatSetting(e) {
                    let t = e.attributes.options;
                    return t.repeating_track ? n.TRACK : t.repeating_context ? n.CONTEXT : n.OFF
                }
                _getShuffleSetting(e) {
                    return e.attributes.options.shuffling_context
                }
                _getNextStates(e, t) {
                    let i = this._numNextTracks,
                        a = [],
                        s = e;
                    for (; s && "show_next" in s.transitions && s.transitions.show_next;) {
                        let e = t[s.transitions.show_next.state_index];
                        if (e && a.push(e), s = e, a.length >= i) break
                    }
                    return a
                }
                _getPreviousStates(e, t) {
                    let i = this._numPreviousTracks,
                        a = [],
                        s = e;
                    for (; s && "show_prev" in s.transitions && s.transitions.show_prev;) {
                        let e = t[s.transitions.show_prev.state_index];
                        if (e && a.unshift(e), s = e, a.length >= i) break
                    }
                    return a
                }
                _getTrackMetadata(e, t, i) {
                    var a;
                    let s = null == e ? void 0 : e.tracks[t.track];
                    if (!(null == s ? void 0 : s.metadata)) return null;
                    let r = s.metadata,
                        n = s.manifest && "manifest_ids_video" in s.manifest,
                        o = s.track_type.toLowerCase(),
                        l = (0, ts.o_h)(r.uri),
                        _ = r.linked_from_uri ? (0, ts.o_h)(r.linked_from_uri) : null,
                        d = td(l, r.episode_content_type),
                        u = null == (a = r.images) ? void 0 : a.map(e => {
                            if (0 === e.url.indexOf("spotify:image:")) {
                                let t = e.url.split(":").slice(-1)[0];
                                return Object.assign(Object.assign({}, e), {
                                    url: `https://i.scdn.co/image/${t}`
                                })
                            }
                            return e
                        });
                    return {
                        id: l ? l.id : null,
                        uri: r.uri,
                        type: (null == l ? void 0 : l.type) || "unknown",
                        uid: t.track_uid,
                        linked_from: {
                            uri: r.linked_from_uri || null,
                            id: _ ? _.id : null
                        },
                        media_type: n ? "video" : "audio",
                        track_type: o,
                        content_type: d,
                        name: r.name,
                        duration_ms: i || r.duration,
                        artists: r.authors,
                        album: {
                            uri: r.group_uri,
                            name: r.group_name,
                            images: u
                        },
                        is_playable: !0,
                        metadata: t.track_metadata || {}
                    }
                }
                getCurrentState() {
                    let e = this._currentState;
                    if (e && !e.paused) {
                        let t = Date.now(),
                            i = e.position + (t - e.timestamp);
                        e.position = i, e.timestamp = t
                    }
                    return Promise.resolve(this._currentState ? Object.assign({}, this._currentState) : null)
                }
            }
            class th {
                constructor(e, t) {
                    this._stateMachine = null, this._currentState = null, this._currentStateIndex = null, this._pausedState = !1, this._initialPlaybackPosition = null, this._currentPlaybackOffsets = null, this._contextMetadata = null, this._supportsExternalUrlPlaybackSpeed = !0, this._uri = e, this._manifestTrackResolver = t
                }
                static create(e, t) {
                    return new th(e, t)
                }
                _transitionTo(e, t, i = !1) {
                    return new Promise(a => {
                        var s, r, n;
                        let o = e.reason,
                            l = e.listConstants;
                        if (!t) return a(l.FORBIDDEN);
                        let _ = this._stateMachine;
                        if (!_) return a(l.NULL_VALUE);
                        let d = _.states[t.state_index];
                        if (!d) return a(l.NULL_VALUE);
                        let u = _.tracks[d.track];
                        if (!(null == (s = null == u ? void 0 : u.metadata) ? void 0 : s.uri) || !this._currentState) return a(l.NULL_VALUE);
                        let c = this._currentState,
                            h = c.decoy ? !!c.paused : t.paused;
                        i || (this._currentState = d, this._currentStateIndex = t.state_index, this._pausedState = !!h, this._currentPlaybackOffsets = d.playback_offsets || null);
                        let p = null != (n = null == (r = d.playback_offsets) ? void 0 : r.start) ? n : 0;
                        return i || null === this._initialPlaybackPosition ? "initial_playback_position" in d && (p = d.initial_playback_position || 0) : (p = this._initialPlaybackPosition, this._initialPlaybackPosition = null), this._manifestTrackResolver.resolveFromStateTrack(u).then(e => {
                            var t, i, s, r, n, _;
                            if (!e) return a(l.NULL_VALUE);
                            let c = this._uri;
                            u.metadata && u.metadata.context_uri && (c = u.metadata.context_uri);
                            let m = (0, ts.o_h)(u.metadata.uri),
                                E = u.ms_played_until_update,
                                g = null == (t = this._currentState) ? void 0 : t.signals,
                                S = null != (i = null == g ? void 0 : g.some(e => 0 === e.indexOf("switch-to-"))) && i,
                                T = {
                                    playbackQuality: e.playbackQuality,
                                    hifiStatus: e.hifi_status
                                },
                                f = null == (s = this._currentState) ? void 0 : s.preferred_media_type,
                                y = !tn(e.uri) || !e.fileId && !this._supportsExternalUrlPlaybackSpeed,
                                I = {
                                    uri: e.uri,
                                    playableURI: e.uri,
                                    fileId: e.fileId,
                                    resolvedURL: e.resolvedURL,
                                    contentType: td(m, u.metadata.episode_content_type),
                                    playable: e.playable,
                                    isAd: e.isAd,
                                    format: e.format,
                                    fileFormat: e.fileFormat,
                                    mediaType: e.mediaType,
                                    noManifest: e.noManifest,
                                    metadata: T,
                                    options: {
                                        position: p,
                                        paused: h,
                                        playedThreshold: E,
                                        useDefaultPlaybackSpeed: y,
                                        playbackSpeed: y ? 1 : null == (n = null == (r = this._currentState) ? void 0 : r.options) ? void 0 : n.playback_speed
                                    },
                                    logData: {
                                        noLog: !!e.noLog,
                                        noTSV: !!e.noTSV,
                                        deviceId: this._deviceId,
                                        playbackId: d.state_id ? d.state_id : void 0,
                                        reason: o,
                                        displayTrack: e.uri,
                                        playContext: c,
                                        impressionURL: e.impressionURL,
                                        impressionURLs: e.impressionURLs,
                                        format: {
                                            codec: e.format,
                                            bitrate: e.bitrate
                                        },
                                        uriType: e.uriType,
                                        displayTitle: u.metadata.name,
                                        displayGroup: u.metadata.group_name,
                                        displayDuration: u.metadata.duration,
                                        playbackService: "track-playback"
                                    },
                                    stateId: d.state_id ? d.state_id : void 0,
                                    audioGain: e.gainDb
                                };
                            return (null == (_ = d.playback_offsets) ? void 0 : _.end) !== void 0 && (I.options.stopPosition = d.playback_offsets.end), S && (I.metadata.isMusicVideo = (null == g ? void 0 : g.indexOf("switch-to-audio")) !== -1), f && (I.options.mediaPlaybackMode = f.toLowerCase()), a(I)
                        })
                    })
                }
                setPaused(e) {
                    this._pausedState = e
                }
                setSupportsExternalUrlPlaybackSpeed(e) {
                    this._supportsExternalUrlPlaybackSpeed = e
                }
                isPaused() {
                    return this._currentStateIndex && this._currentStateIndex < 0 && this._currentState && this._currentState.transitions.advance ? !!this._currentState.transitions.advance.paused : this._pausedState
                }
                setInitialPosition(e) {
                    this._initialPlaybackPosition = e
                }
                setStateMachine(e) {
                    this._stateMachine = e
                }
                setDeviceId(e) {
                    this._deviceId = e
                }
                setContextMetadata(e) {
                    this._contextMetadata = e
                }
                getContextMetadata() {
                    return this._contextMetadata || {}
                }
                startAtState(e) {
                    let t = this._stateMachine && this._stateMachine.states[e.state_index];
                    if (!t) throw new tr(a.TP_MISSING_INITIAL_STATE, "Invalid state reference.");
                    let i = t.transitions;
                    this._currentStateIndex = -1, this._currentState = {
                        decoy: !0,
                        paused: !!e.paused,
                        track: -1,
                        state_id: null,
                        transitions: {
                            advance: e,
                            show_next: i.show_next,
                            show_prev: i.show_prev,
                            skip_next: e,
                            skip_prev: i.skip_prev
                        },
                        options: t.options,
                        duration_override: t.duration_override,
                        position_offset: t.position_offset
                    }, this._currentPlaybackOffsets = null
                }
                setCurrentState(e) {
                    var t;
                    let i = e.state_index;
                    this._currentStateIndex = i, this._currentState = this._stateMachine && this._stateMachine.states[i], this._currentPlaybackOffsets || (this._currentPlaybackOffsets = (null == (t = this._currentState) ? void 0 : t.playback_offsets) || null)
                }
                getStateMachine() {
                    return this._stateMachine
                }
                getInternalStateRef() {
                    let e = this._pausedState,
                        t = this._currentStateIndex;
                    if (!t) return null;
                    if (t && t < 0) {
                        let i = this._currentState && this._currentState.transitions.advance;
                        i && (t = i.state_index, e = !!i.paused)
                    }
                    return {
                        paused: e,
                        state_index: t
                    }
                }
                getStateRef() {
                    let e, t, i = this._stateMachine;
                    if (!i || null === this._currentStateIndex) return null;
                    if (this._currentStateIndex < 0) {
                        let a = this._currentState && this._currentState.transitions.advance;
                        a && (e = i.states[a.state_index], t = a.paused)
                    } else e = i.states[this._currentStateIndex], t = this._pausedState;
                    return e ? {
                        state_machine_id: i.state_machine_id,
                        state_id: e.state_id,
                        paused: !!t
                    } : null
                }
                getCurrentTrack() {
                    let e, t = this._stateMachine;
                    if (!t || null === this._currentStateIndex) return null;
                    if (this._currentStateIndex < 0) {
                        let i = this._currentState && this._currentState.transitions.advance;
                        i && (e = t.states[i.state_index])
                    } else e = t.states[this._currentStateIndex];
                    return e ? t.tracks[e.track] : null
                }
                startAt() {
                    return Promise.resolve(eH.T.SUCCESS)
                }
                setShuffle() {
                    return Promise.resolve(eH.T.SUCCESS)
                }
                setRepeatMode() {
                    return Promise.resolve(eH.T.SUCCESS)
                }
                next(e) {
                    let t = this._currentState,
                        i = null;
                    if (t) {
                        let a = t.transitions;
                        e.reason === l.FORWARD_BUTTON ? "skip_next" in a && (i = a.skip_next) : "advance" in a && (i = a.advance)
                    }
                    return this._transitionTo(e, i, !1)
                }
                peekNext(e) {
                    let t = this._currentState,
                        i = null;
                    if (t) {
                        let a = t.transitions;
                        e.reason === l.FORWARD_BUTTON ? "skip_next" in a && (i = a.skip_next) : "advance" in a && (i = a.advance)
                    }
                    return this._transitionTo(e, i, !0)
                }
                previous(e) {
                    let t = this._currentState,
                        i = null;
                    return t && (i = t.transitions.skip_prev), this._transitionTo(e, i, !1)
                }
                translatePosition(e) {
                    var t, i;
                    return (null != (i = null == (t = this._currentState) ? void 0 : t.position_offset) ? i : 0) + e
                }
                translateDuration(e) {
                    var t, i;
                    return null != (i = null == (t = this._currentState) ? void 0 : t.duration_override) ? i : e
                }
                handleSeek(e, t) {
                    var i, a, s;
                    if (t.reason === l.REMOTE) return e;
                    let r = null != (a = null == (i = this._currentState) ? void 0 : i.position_offset) ? a : 0,
                        n = null == (s = this._currentState) ? void 0 : s.duration_override;
                    return (null != n ? Math.min(Math.max(0, e), n) : e) - r
                }
                allowSeeking() {
                    return !!this._currentState && !this._currentState.disallow_seeking
                }
                getCurrentState() {
                    return this._currentState
                }
            }
            let tp = /^https:\/\//,
                tm = {
                    [_.FILE_URLS_MP3]: eG.o.MP3,
                    [_.FILE_URLS_EXTERNAL]: eG.o.MP3,
                    [_.FILE_IDS_MP3]: eG.o.MP3,
                    [_.FILE_IDS_MP4]: eG.o.MP4,
                    [_.FILE_IDS_MP4_DUAL]: eG.o.MP4,
                    [_.FILE_IDS_CBCS]: eG.o.MP4_CBCS,
                    [_.FILE_IDS_MP4FLAC]: eG.o.MP4_FLAC,
                    [_.MANIFEST_IDS_VIDEO]: eG.o.MANIFEST_ID,
                    [_.MANIFEST_URLS_VIDEO_AD]: eG.o.AD_MANIFEST,
                    [_.MANIFEST_URLS_AUDIO_AD]: eG.o.AD_MANIFEST
                };
            class tE {
                constructor(e) {
                    this._descriptor = e.descriptor, this._listPlayer = e.listPlayer
                }
                static create(e) {
                    return new tE(e)
                }
                _resolveFromStateTrack(e, t, i) {
                    var a, s, r, n;
                    let o = e.manifest,
                        l = e.metadata.uri,
                        d = (0, ts.o_h)(l),
                        u = null;
                    for (let e of i) {
                        let i = o[e];
                        if (i)
                            for (let o of i) {
                                let i, c;
                                if (!o.file_id && !tp.test(null != (a = o.file_url) ? a : "")) continue;
                                let h = !!(d && (d.type === ts.NQG.AD || d.type === ts.NQG.INTERRUPTION));
                                if (e === _.FILE_IDS_MP3 && !h) continue;
                                if (i = o.track_type ? o.track_type.toLowerCase() : e === _.MANIFEST_IDS_VIDEO ? "video" : "audio", o.format) {
                                    let e = parseInt(o.format, 10);
                                    ex.U[e] && (c = e)
                                }
                                let p = null != (s = o.bitrate) ? s : e === _.FILE_IDS_MP4FLAC ? 1411200 : 128e3,
                                    m = null != (r = o.bitrate) ? r : e === _.FILE_IDS_MP4FLAC ? 7e5 : 128e3,
                                    E = tm[e];
                                if (u = {
                                        uri: l,
                                        uriType: d && d.type ? d.type : void 0,
                                        fileId: null != (n = o.file_id) ? n : "",
                                        resolvedURL: o.file_url,
                                        mediaType: i,
                                        format: E,
                                        bitrate: m,
                                        fileFormat: null != c ? c : void 0,
                                        playbackQuality: o.audio_quality,
                                        hifi_status: o.hifi_status,
                                        impressionURL: o.impression_url,
                                        impressionURLs: o.impression_urls,
                                        gainDb: o.gain_db,
                                        isAd: h,
                                        noLog: !1,
                                        noTSV: h,
                                        noManifest: E === eG.o.MP3,
                                        playable: !0
                                    }, e === _.MANIFEST_IDS_VIDEO || p <= t) return u
                            }
                    }
                    return u
                }
                resolveFromStateTrack(e) {
                    return Promise.all([Promise.resolve(this._descriptor), this._listPlayer.getCurrentBandwidth()]).then(([t, i]) => this._resolveFromStateTrack(e, i, t.getManifestFormats()))
                }
            }
            let tg = {
                threshold: 1e3,
                timestamp: 0,
                blockInitial: !1
            };
            class tS {
                constructor(e, t = {}) {
                    this._cancelFn = null, this._deferredTimer = 0, this._fn = e, this._cancelFn = t.cancel || null, this._threshold = t.threshold || tg.threshold, this._ts = t.initialTimetamp || tg.timestamp, this._blockInital = t.blockInitial || tg.blockInitial
                }
                _deferFn(e) {
                    this._fn.apply(this._fn, e)
                }
                _deferPromise(e, t) {
                    this._fn.apply(this._fn, e).then(e => {
                        t.resolve(e)
                    })
                }
                sync(...e) {
                    let t = Date.now() - this._ts;
                    if (this._ts = Date.now(), t < this._threshold) {
                        this._cancelFn && this._deferredTimer && this._cancelFn(), clearTimeout(this._deferredTimer), this._deferredTimer = setTimeout(this._deferFn.bind(this, e), this._threshold);
                        return
                    }
                    if (!0 === this._blockInital) return void this.sync.apply(this, e);
                    this._fn.apply(this._fn, e)
                }
                async (...e) {
                    let t = Date.now() - this._ts;
                    if (this._ts = Date.now(), t < this._threshold) {
                        this._cancelFn && this._deferredTimer && this._cancelFn(), clearTimeout(this._deferredTimer);
                        let t = (0, U.u)();
                        return this._deferredTimer = setTimeout(this._deferPromise.bind(this, e, t), this._threshold), t.promise
                    }
                    return !0 === this._blockInital ? this.async.apply(this, e) : this._fn.apply(this._fn, e)
                }
                setCancel(e) {
                    this._cancelFn = e
                }
            }! function(e) {
                e.TRACK_DATA_FINALIZED = "track_data_finalized", e.DEREGISTER = "deregister", e.REGISTER = "register", e.BEFORE_TRACK_LOAD = "before_track_load", e.CAPPED = "capped", e.ERROR = "error", e.PAUSE = "pause", e.RESUME = "resume", e.PLAYED_THRESHOLD_REACHED = "played_threshold_reached", e.POSITION_CHANGED = "position_changed", e.SPEED_CHANGED = "speed_changed", e.STARTED_PLAYING = "started_playing", e.PROGRESS = "progress", e.PING = "ping", e.MODIFY_CURRENT_STATE = "modify_current_state", e.STATE_CLEAR = "state_clear", e.VIDEO_SURFACE_CHANGED = "video_surface_changed", e.IS_VIDEO_ON_CHANGED = "is_video_on_changed", e.MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.VIDEO_VISIBILITY_CHANGED = "video_visibility_changed", e.SEEK = "seek"
            }(I || (I = {})),
            function(e) {
                e.FATAL = "Fatal", e.ERROR = "Error", e.WARNING = "Warning"
            }(v || (v = {}));
            var tT = i(96152);
            let tf = q.m.forTag("tpapiclient"),
                ty = q.m.forTag("tpapiclient.endsong"),
                tI = q.m.forTag("tpapiclient.endsongs"),
                tv = /^hm:\/\/track-playback\/v1/,
                tP = /^hm:\/\/play-token\/lost/,
                tA = function(e, t) {
                    let i = e.getStatusFamily();
                    return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                },
                tR = {
                    condition: tA,
                    maxRetries: 8
                },
                tL = {
                    condition: tA,
                    maxRetries: 2
                };
            class tb extends M.bk {
                constructor(e) {
                    super(), this._deviceId = null, this._sequenceNumber = 0, this._currentContext = null, this._loading = !1, this._blockStalePositionUpdates = !1, this._lastSentStateUpdatePayload = null, this._isSendingConflict = !1, this._queuedRejectedStates = [], this._isSendingUpdate = !1, this._queueSendUpdate = [], this._currentTrackInfo = {}, this._registered = !1, this._isDeregistering = !1, this._waitingForTrackingData = (0, U.u)(), this._lastProcessedStateId = null, this._limitStateUpdates = !1, this._lastUpdateStateMonotonicTime = (0, w.X)(), this._initialUpdateSent = !1, this._startedPlayingUpdateSent = !1, this._nextFinalizedDataPayload = null, this._switchingContext = !1, this._supportsExternalUrlPlaybackSpeed = !0, this._connectionId = null, this._transport = e.transport, this._logger = e.logger, this._endpoint = e.endpoint || "http://@webgate/track-playback", this._listPlayer = e.listPlayer, this._ListClass = e.ListClass, this._currentGaiaVolume = 65535 * e.initialVolume, this._clientVersion = e.clientVersion, this._manifestTrackResolver = e.manifestTrackResolver, this._currentTrackInfo.isVideoVisible = e.initialIsVideoVisible, this._currentTrackInfo.videoSurface = e.initialVideoSurface, this._descriptorPromise = Promise.resolve(e.descriptor), this._init(), this._performCommand = this._performCommand.bind(this), this._handleRegisterResponse = this._handleRegisterResponse.bind(this), this._handleStateConflictResponse = this._handleStateConflictResponse.bind(this), this.register = this.register.bind(this), this._parseDescriptor = this._parseDescriptor.bind(this), this._volumeDebouncer = new tS(this._sendVolume.bind(this), {
                        blockInitial: !0
                    })
                }
                static create(e) {
                    return new tb(e)
                }
                _init() {
                    this._waitingForTrackingData = (0, U.u)(), this._waitingForTrackingData.resolve(!0), this._transport.on(this._transport.EVENT_CONNECTION_ID, this._onConnectionId.bind(this)), this._transport.matchMessages(tP, this._onPlayTokenLost.bind(this)), this._transport.matchMessages(tv, this._onTrackPlaybackMessage.bind(this)), this._listPlayer.addListeners({
                        [ef.J.LIST_PLAYER_CAPPED]: this._onCapped.bind(this),
                        [ef.J.LIST_PLAYER_ERROR_SYNC]: this._onError.bind(this),
                        [ef.J.LIST_PLAYER_BEFORE_NEXT]: this._onBeforeTrackChange.bind(this),
                        [ef.J.LIST_PLAYER_BEFORE_PREVIOUS]: this._onBeforeTrackChange.bind(this),
                        [ef.J.LIST_PLAYER_BEFORE_PLAYER_LOAD]: this._onBeforePlayerLoad.bind(this),
                        [ef.J.LIST_PLAYER_PLAYER_LOAD]: this._onListPlayerLoad.bind(this),
                        [ef.J.LIST_PLAYER_BEFORE_TRACK_LOAD]: this._onBeforeTrackLoad.bind(this),
                        [ef.J.LIST_PLAYER_POSITION_CHANGED]: this._onPositionChanged.bind(this),
                        [ef.J.LIST_PLAYER_DURATION_CHANGED]: this._onDurationChanged.bind(this),
                        [ef.J.LIST_PLAYER_VOLUME_CHANGED]: this._onVolumeChanged.bind(this),
                        [ef.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]: this._onSpeedChanged.bind(this),
                        [ef.J.LIST_PLAYER_PAUSED]: this._onPlayPause.bind(this, !0),
                        [ef.J.LIST_PLAYER_PLAYING]: this._onPlayPause.bind(this, !1),
                        [ef.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]: this._onPlayThresholdReached.bind(this),
                        [ef.J.LIST_PLAYER_PROGRESS]: this._onProgress.bind(this),
                        [ef.J.LIST_PLAYER_TRACKING_DATA_CREATED]: this._onTrackDataCreatedEvent.bind(this),
                        [ef.J.LIST_PLAYER_TRACKING_DATA_FINALIZED]: this._onTrackDataFinalizedEvent.bind(this),
                        [ef.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: this._onVisibilityChanged.bind(this),
                        [ef.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: this._onMediaPlaybackModeChanged.bind(this),
                        [ef.J.LIST_PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED]: this._onMediaPlaybackQualityChanged.bind(this),
                        [ef.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: this._onVideoSurfaceChanged.bind(this)
                    }), this._descriptorPromise.then(e => {
                        e.on("descriptor_changed", () => {
                            this._parseDescriptor(e), this._updateDeviceInfo()
                        })
                    })
                }
                _onBeforeTrackChange() {
                    var e, t;
                    if (this._nextFinalizedDataPayload || this._switchingContext) return;
                    let i = null != (t = null == (e = this._currentContext) ? void 0 : e.getStateRef()) ? t : null,
                        a = this._generateStatePayload(i, I.TRACK_DATA_FINALIZED);
                    this._setSequenceNumber(a), this._nextFinalizedDataPayload = a
                }
                _onBeforeTrackLoad(e) {
                    var t;
                    this._loading = !0, this._switchingContext = !1, this._currentTrackInfo.duration = void 0, this._rawTrackDuration = void 0;
                    let i = null == (t = e.data.newTrack.options) ? void 0 : t.position,
                        a = this._currentContext,
                        s = void 0 !== i && a ? a.translatePosition(i) : i;
                    this._rawTrackPosition = i, this._currentTrackPosition = s, this._blockStalePositionUpdates = !0, this._stateEventPositionOverride = s
                }
                _onBeforePlayerLoad(e) {
                    var t, i, a, s, r, n, o, l, _, d, u;
                    let c = this._currentContext;
                    if (!c) return;
                    this._blockStalePositionUpdates = !1;
                    let h = c.getCurrentTrack(),
                        p = c.getCurrentState(),
                        m = null != (i = null != (t = null == p ? void 0 : p.duration_override) ? t : null == h ? void 0 : h.metadata.duration) ? i : 0,
                        {
                            data: E
                        } = e,
                        g = E.track.metadata || {},
                        S = !!(null == (s = null == (a = null == p ? void 0 : p.restrictions) ? void 0 : a.disallow_setting_playback_speed_reasons) ? void 0 : s.length) || !!(null == (r = E.track.options) ? void 0 : r.useDefaultPlaybackSpeed),
                        T = null != (o = null == (n = E.track.options) ? void 0 : n.playbackSpeed) ? o : 1;
                    this._currentTrack = E.track, this._currentTrackInfo = {
                        duration: m,
                        mediaType: E.track.mediaType.toUpperCase(),
                        fileFormat: E.track.fileFormat,
                        bitrate: null == (_ = null == (l = E.logData) ? void 0 : l.format) ? void 0 : _.bitrate,
                        playbackQuality: g.playbackQuality,
                        hifiStatus: g.hifiStatus,
                        isPlaybackSpeedRestricted: S,
                        currentPlaybackSpeed: T,
                        selectedPlaybackSpeed: T,
                        isMediaPlaybackModeVideo: "video" === ((null == (d = E.track.options) ? void 0 : d.mediaPlaybackMode) || E.track.mediaType),
                        videoSurface: this._currentTrackInfo.videoSurface,
                        isVideoVisible: this._currentTrackInfo.isVideoVisible
                    };
                    let f = E.options;
                    c.setPaused(!f.autoplay), this._setCurrentTrackPosition(f && f.position || 0), this._setRawTrackPosition(E.rawPosition), this._rawTrackDuration = null != (u = null == h ? void 0 : h.metadata.duration) ? u : 0, this._updateState(I.BEFORE_TRACK_LOAD), this._startedPlayingUpdateSent = !1, this._initialUpdateSent = !1
                }
                _onCapped() {
                    this._listPlayer.clear(l.CAPPED), this._currentContext = null, this._updateState(I.CAPPED), this._setCurrentTrackPosition(void 0), this._setRawTrackPosition(void 0), this._lastProcessedStateId = null, this.emit("state_cleared", null)
                }
                _onConnectionId(e) {
                    this._connectionId = e.data.id, this._isDeregistering || (this._registered = !1, Promise.all([this._listPlayer.getVolume(), this._descriptorPromise.then(this._parseDescriptor)]).then(this.register, e => {
                        tf.info("Skipping registration due to error", e), this.emit("registration_aborted", {
                            reason_error: e,
                            source: r.TRACK_PLAYBACK
                        })
                    }).catch(() => {}))
                }
                _onDurationChanged(e) {
                    var t, i, a;
                    let s = null == (t = this._currentContext) ? void 0 : t.getCurrentTrack();
                    if ((null == s ? void 0 : s.metadata.uri) !== e.data.track.uri || this._currentTrackInfo.duration === e.data.duration && this._rawTrackDuration === e.data.rawDuration) return;
                    let r = (null == (a = null == (i = this._currentTrack) ? void 0 : i.options) ? void 0 : a.stopPosition) !== void 0;
                    (!r || void 0 === this._currentTrackInfo.duration || e.data.duration >= this._currentTrackInfo.duration) && (this._currentTrackInfo.duration = e.data.duration), (!r || void 0 === this._rawTrackDuration || e.data.rawDuration >= this._rawTrackDuration) && (this._rawTrackDuration = e.data.rawDuration), this._setCurrentTrackPosition(e.data.position), this._setRawTrackPosition(e.data.rawPosition), this._emitStateChanged()
                }
                _onError(e) {
                    "position" in e.data && (this._setCurrentTrackPosition(e.data.position), this._setRawTrackPosition(e.data.rawPosition), this._updateState(I.ERROR))
                }
                _onSpeedChanged(e) {
                    if (this._currentTrackInfo.currentPlaybackSpeed = e.data.playback_speed, this._currentTrackInfo.selectedPlaybackSpeed = e.data.playback_speed_selected, e.data.seeking) {
                        this._setCurrentTrackPosition(e.data.position), this._setRawTrackPosition(e.data.rawPosition);
                        return
                    }
                    this._setAllTrackPositions(e.data.position), this._setAllRawTrackPositions(e.data.rawPosition), this._updateState(I.SPEED_CHANGED)
                }
                _onPlayPause(e, t) {
                    let i = this._currentContext;
                    i && (i.setPaused(e), "position" in t.data && (this._setAllTrackPositions(t.data.position), this._setAllRawTrackPositions(t.data.rawPosition)), t.data.track.stateId && this._shouldSendUpdateForEvent(t.data.track.stateId) ? this._updateState(e ? I.PAUSE : I.RESUME) : (this._lastProcessedStateId = null, this._emitStateChanged()))
                }
                _onPlayThresholdReached(e) {
                    this._initialUpdateSent = !0, this._setAllTrackPositions(e.data.position), this._setAllRawTrackPositions(e.data.rawPosition), this._updateState(I.PLAYED_THRESHOLD_REACHED)
                }
                _onPlayTokenLost() {
                    this._listPlayer.pause().catch(function() {})
                }
                _onPositionChanged(e) {
                    this._loading || (this._setCurrentTrackPosition(e.data.position), this._setRawTrackPosition(e.data.rawPosition), this._logger.logClientEvent({
                        source: "harmony:track_playback:client",
                        source_version: J.tagged,
                        source_vendor: "spotify",
                        event: e.type,
                        event_version: "1.0.0",
                        json_data: {
                            track: e.data.track,
                            event_position: e.data.position,
                            prev_position: this._previousTrackPosition,
                            curr_position: this._currentTrackPosition
                        }
                    }, "object"), e.data.position === this._previousTrackPosition && this._logger.logClientEvent({
                        source: "harmony:track_playback:client",
                        source_version: J.tagged,
                        source_vendor: "spotify",
                        event: `${e.type} - same position as previous event`,
                        event_version: "1.0.0",
                        json_data: {
                            track: e.data.track,
                            event_position: e.data.position,
                            prev_position: this._previousTrackPosition,
                            curr_position: this._currentTrackPosition
                        }
                    }, "object"), e.data.track && this._shouldSendUpdateForEvent(e.data.track.stateId) ? (this._updateState(I.SEEK), this._previousTrackPosition = this._currentTrackPosition, this._previousRawTrackPosition = this._rawTrackPosition) : (this._lastProcessedStateId = null, this._emitStateChanged()))
                }
                _onProgress(e) {
                    if (this._loading || !this._currentContext || (this._setAllTrackPositions(e.data.position), this._setAllRawTrackPositions(e.data.rawPosition), !this._startedPlayingUpdateSent && e.data.played > 1e3 && (this._startedPlayingUpdateSent = !0, this._updateState(I.STARTED_PLAYING)), !e.data.logData)) return;
                    let t = this._currentContext.getCurrentTrack(),
                        i = t && "number" == typeof t.ms_playing_update_interval ? t.ms_playing_update_interval : null;
                    this._initialUpdateSent && null !== i && i > 0 && (0, w.X)() - this._lastUpdateStateMonotonicTime > i && this._updateState(I.PROGRESS)
                }
                _onTrackDataCreatedEvent() {
                    this._waitingForTrackingData = (0, U.u)()
                }
                _onTrackDataFinalizedEvent(e) {
                    let t = this._nextFinalizedDataPayload;
                    t && (t.playback_stats = e.data.playbackStats, this._updateState(I.TRACK_DATA_FINALIZED, t)), this._nextFinalizedDataPayload = null, this._waitingForTrackingData && this._waitingForTrackingData.resolve(!0)
                }
                _onListPlayerLoad(e) {
                    this._loading = !1;
                    let t = this._currentContext;
                    t && (t.setPaused(!e.data.autoplay), this._setCurrentTrackPosition(e.data.position || 0), this._setRawTrackPosition(e.data.rawPosition))
                }
                _onTrackPlaybackMessage(e) {
                    let t = e.payloads;
                    Array.isArray(t) && t.length && this._performCommand(t[0])
                }
                _onVolumeChanged(e) {
                    var t;
                    if (this._currentGaiaVolume = 65535 * e.data.volume, !this._registered) return;
                    let i = null != (t = e.data.commandId) ? t : "",
                        a = {
                            seq_num: void 0,
                            volume: this._currentGaiaVolume,
                            command_id: i
                        };
                    this._volumeDebouncer.async(a)
                }
                _onMediaPlaybackModeChanged(e) {
                    this._currentTrackInfo.isMediaPlaybackModeVideo = "video" === e.data.playbackMode, this._updateState(I.MEDIA_PLAYBACK_MODE_CHANGED)
                }
                _onMediaPlaybackQualityChanged(e) {
                    this._currentTrackInfo.mediaQuality = e.data.media_quality, this._emitStateChanged()
                }
                _onVisibilityChanged(e) {
                    this._currentTrackInfo.isVideoVisible = e.data.visible, this._updateState(I.VIDEO_VISIBILITY_CHANGED)
                }
                _onVideoSurfaceChanged(e) {
                    this._currentTrackInfo.videoSurface = e.data.videoSurface, this._updateState(I.VIDEO_SURFACE_CHANGED)
                }
                _clearSessionData() {
                    this._connectionId = null, this._sequenceNumber = 0, this._currentContext = null, this._lastSentStateUpdatePayload = null, this._isSendingConflict = !1, this._isSendingUpdate = !1, this._queueSendUpdate = [], this._previousTrackPosition = void 0, this._currentTrackPosition = void 0, this._rawTrackPosition = void 0, this._previousTrackPosition = void 0, this._rawTrackDuration = void 0, this._currentTrack = void 0, this._currentTrackInfo = {}, this._lastProcessedStateId = null, this.emit("state_cleared", null)
                }
                _createStateRef(e, t) {
                    if (!t) return null;
                    let i = e.states[t.state_index];
                    if (!i) throw new tr(a.TP_CANNOT_CREATE_STATE_REF, "Invalid state reference.");
                    return {
                        state_machine_id: e.state_machine_id,
                        state_id: i.state_id,
                        paused: t.paused
                    }
                }
                _deregisterFromService(e) {
                    let t = null,
                        i = this._currentContext;
                    i && (e && (i.setPaused(!e.playing), this._setAllTrackPositions(e.position), this._setAllRawTrackPositions(e.position)), t = i.getStateRef());
                    let a = this._generateStatePayload(t, I.DEREGISTER);
                    this._setSequenceNumber(a);
                    let s = `${this._endpoint}/v1/devices/${this._deviceId}`;
                    return this._transport.request(s, {
                        authorize: !0,
                        method: "DELETE",
                        payload: JSON.stringify(a),
                        responseType: "json",
                        retry: tL
                    }).then(e => {
                        if (200 !== e.status && 204 !== e.status) return this._registered = !0, !1;
                        let {
                            body: t
                        } = e;
                        return t && (t.endsong && ty.log(t.endsong), t.endsongs && (tI.log(t.endsongs), this.emit("internal_endcontent", {
                            endcontents: t.endsongs
                        }))), this._clearSessionData(), this.emit("deregistered", null), !0
                    })
                }
                _emitError(e) {
                    var t, i, a, s, n, o, l, _, d, u;
                    if (this.emit("error", {
                            error: e,
                            source: r.TRACK_PLAYBACK
                        }), e.registration) return;
                    this._logger.logJSSDKError({
                        source: "tpapi-client",
                        source_version: J.tagged,
                        type: e.code,
                        message: e && e.message,
                        stack: e && e.stack,
                        json_data: e.debug,
                        json_data_version: "1.0.0"
                    }, "object").catch(function(e) {
                        tf.error("Track-Playback Logging Error", e)
                    });
                    let c = e.debug,
                        {
                            isNetworkRelated: h = !1
                        } = c,
                        p = (0, eS.__rest)(c, ["isNetworkRelated"]),
                        m = {
                            sdk_id: this._clientVersion,
                            session_id: this._transport.getInitTime().toString(),
                            device_id: (null == (t = this._deviceInfo) ? void 0 : t.device_id) || e_.EMPTY,
                            device_model: (null == (i = this._deviceInfo) ? void 0 : i.model) || e_.EMPTY,
                            device_brand: (null == (a = this._deviceInfo) ? void 0 : a.brand) || e_.EMPTY,
                            os_name: (null == (s = this._deviceInfo) ? void 0 : s.os_name) || e_.EMPTY,
                            os_version: (null == (n = this._deviceInfo) ? void 0 : n.os_version) || e_.EMPTY,
                            playback_id: (null == (o = this._currentTrack) ? void 0 : o.logData.playbackId) || e_.EMPTY,
                            play_track: (null == (l = this._currentTrack) ? void 0 : l.uri) || e_.EMPTY,
                            content_id: (null == (_ = this._currentTrack) ? void 0 : _.fileId) || e_.EMPTY,
                            content_type: (null == (d = this._currentTrack) ? void 0 : d.contentType) || e_.UNKNOWN,
                            media_type: (null == (u = this._currentTrack) ? void 0 : u.mediaType) || e_.UNKNOWN,
                            position: this._currentTrackPosition || 0,
                            trace_id: ea(32),
                            category: e && e.name || e_.UNKNOWN,
                            severity: e.unrecoverable ? v.FATAL : v.ERROR,
                            code: e && e.code || e_.EMPTY,
                            message: e && e.message || e_.EMPTY,
                            http_status_code: e && e.status,
                            is_network_related: !!h,
                            debug: Object.keys(p).length > 0 ? p : void 0
                        };
                    this._logger.logJSSDKHarmonyError(m).catch(function(e) {
                        tf.error("Track-Playback Logging Error", e)
                    })
                }
                _emitStateChanged() {
                    let e = this._currentContext;
                    if (!e) return;
                    let t = this._currentTrackPosition || 0;
                    void 0 !== this._stateEventPositionOverride && (t = this._stateEventPositionOverride, this._stateEventPositionOverride = void 0), this.emit("state_changed", {
                        position: t,
                        currentTrackInfo: this._currentTrackInfo,
                        stateMachine: e.getStateMachine(),
                        stateRef: e.getInternalStateRef(),
                        paused: e.isPaused(),
                        contextMetadata: e.getContextMetadata(),
                        loading: this._loading
                    })
                }
                _generateStatePayload(e, t) {
                    var i, a;
                    let s = this._currentTrackInfo,
                        r = !!(null == (i = this._currentTrack) ? void 0 : i.fileId),
                        n = (null == e ? void 0 : e.paused) ? 0 : null != (a = this._currentTrackInfo.currentPlaybackSpeed) ? a : 1;
                    return {
                        seq_num: void 0,
                        seq_nums: void 0,
                        state_ref: e,
                        sub_state: {
                            playback_speed: n,
                            position: this._rawTrackPosition,
                            duration: this._rawTrackDuration,
                            media_type: s.mediaType,
                            bitrate: s.bitrate,
                            audio_quality: s.playbackQuality,
                            format: r ? s.fileFormat : "file_urls_external",
                            video_surface: s.videoSurface,
                            is_video_on: s.isVideoVisible && s.isMediaPlaybackModeVideo
                        },
                        previous_position: this._previousRawTrackPosition,
                        playback_stats: void 0,
                        rejected_state_refs: void 0,
                        debug_source: t
                    }
                }
                _handleRegisterResponse(e) {
                    let t;
                    if (429 === e.status) return (t = tr.fatal(a.TP_MAX_SUBSCRIPTIONS_REACHED, "Max connections reached")).maxedSubscriptions = !0, t.status = e.status, this.emit("max_subscriptions_reached", {
                        error: t
                    }), Promise.reject(t);
                    if (403 === e.status && e.body && "PREMIUM_REQUIRED" === e.body.error_type ? t = tr.fatal(a.TP_REGISTRATION_FAILED_NON_PREMIUM, "Cannot register to Track Playback with non-premium user.") : 200 !== e.status ? t = tr.fatal(a.TP_REGISTRATION_FAILED_WITH_STATUS, `track-playback service responded with status ${e.status} when registering device`, {
                            isNetworkRelated: !0
                        }) : e.body || (t = tr.fatal(a.TP_NO_RESPONSE_BODY, "Unexpected empty response body from registration request.")), t) return t.status = e.status, Promise.reject(t);
                    let i = e.body;
                    return i.endsong && ty.log(i.endsong), i.endsongs && (tI.log(i.endsongs), this.emit("internal_endcontent", {
                        endcontents: i.endsongs
                    })), this._sequenceNumber = i.initial_seq_num, this._registered = !0, this.emit("registered", {
                        deviceId: this._deviceId
                    }), Promise.resolve(!0)
                }
                _handleStateConflictResponse(e) {
                    var t;
                    if (e.status >= 200 && e.status < 300) {
                        let i = null == (t = e.body) ? void 0 : t.commands;
                        if (!i || !i.length) return;
                        for (let e = 0, t = i.length; e < t; e++) this._performCommand(i[e])
                    } else {
                        let t = new tr(a.TP_CONFLICT_REQUEST_FAILED_WITH_STATUS, `Track-Playback service responded with ${e.status}`, {
                            isNetworkRelated: !0
                        });
                        t.status = e.status, this._emitError(t)
                    }
                }
                _handleStateUpdateResponse(e, t) {
                    let i;
                    if (200 !== t.status) return (i = new tr(a.TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS, `Service responded with status ${t.status}`, {
                        isNetworkRelated: !0
                    })).status = t.status, Promise.reject(i);
                    if (!t.body) return (i = new tr(a.TP_UPDATE_REQUEST_EMPTY_RESPONSE, "Unexpected empty response body from state update request.")).status = t.status, Promise.reject(i);
                    let s = t.body;
                    s.endsong && ty.log(s.endsong), s.endsongs && (tI.log(s.endsongs), this.emit("internal_endcontent", {
                        endcontents: s.endsongs
                    }));
                    let r = this._currentContext;
                    if (!r) return Promise.resolve();
                    let n = s.state_machine,
                        o = s.updated_state_ref;
                    return this._isCurrentStateRef(e) && (r.setStateMachine(n), r.setCurrentState(o), r.setContextMetadata(s.context_metadata || null), this._emitStateChanged()), Promise.resolve()
                }
                _isCurrentStateRef(e) {
                    let t = this._currentContext ? this._currentContext.getStateRef() : null;
                    return !t && !e || !!t && !!e && t.state_machine_id === e.state_machine_id && t.state_id === e.state_id && t.paused === e.paused
                }
                _logUnsentStateUpdate(e) {
                    tf.info("Unsent state update.", e), this._logger.logClientEvent({
                        source: "tpapi-client",
                        source_version: J.tagged,
                        source_vendor: "spotify",
                        event: "unsent-state-update",
                        event_version: "1.0.0",
                        json_data: e
                    }, "object").catch(e => {
                        tf.error("Track-Playback Logging Error", e)
                    })
                }
                _logout() {
                    this._listPlayer.pause().catch(() => {}), this.emit("state_cleared", null), this.deregister().then(e => {
                        this._currentContext = null, this._setCurrentTrackPosition(void 0), this._setRawTrackPosition(void 0), e && this.emit("logout", null)
                    })
                }
                _parseDescriptor(e) {
                    var t;
                    return this._deviceId = e.getId(), this._deviceInfo = e.toTrackPlaybackDeviceInfo(this._clientVersion), this._supportsExternalUrlPlaybackSpeed = null == (t = e.getCapability("supports_external_url_playback_speed")) || t, !0
                }
                _performCommand(e) {
                    switch (e.type) {
                        case "set_volume":
                            this._setVolume(e);
                            break;
                        case "log_out":
                            this._logout();
                            break;
                        case "replace_state":
                            this._replaceState(e);
                            break;
                        case "ping":
                            this._updateState(I.PING);
                            break;
                        default:
                            this._emitError(new tr(a.TP_UNKNOWN_COMMAND, "Received unknown command.", {
                                command: e
                            }))
                    }
                }
                _rejectState(e) {
                    let t = this._queuedRejectedStates;
                    if (void 0 !== e && t.push(e), !this._registered || this._isSendingConflict || !t.length) return;
                    this._isSendingConflict = !0;
                    let i = t.splice(0, 5),
                        a = this._currentContext ? this._currentContext.getStateRef() : null,
                        s = this._generateStatePayload(a);
                    s.rejected_state_refs = i, this._setSequenceNumbers(s, i.length);
                    let r = () => {
                            this._isSendingConflict = !1, this._rejectState()
                        },
                        n = `${this._endpoint}/v1/devices/${this._deviceId}/state_conflict`;
                    this._transport.request(n, {
                        authorize: !0,
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(s),
                        retry: tL
                    }).then(this._handleStateConflictResponse).then(r, r)
                }
                _replaceState(e) {
                    var t, i, a, s;
                    let r = this._listPlayer,
                        n = e.state_machine,
                        o = e.state_ref,
                        _ = this._createStateRef(n, o);
                    if (!this._isCurrentStateRef(e.prev_state_ref)) return void this._rejectState(_);
                    if (!o) return void this._clearContextAndState();
                    let d = null != (i = null == (t = this._currentContext) ? void 0 : t.getStateRef()) ? i : null;
                    if (null === _) throw Error("Assertion failed: New state reference is null");
                    if (this._currentContext && (null == d ? void 0 : d.state_id) === _.state_id) {
                        let t = this._currentContext;
                        t.setStateMachine(n), t.setCurrentState(o), t.setContextMetadata(e.context_metadata || null);
                        let i = !1;
                        t.isPaused() !== o.paused && (i = !0), o.paused ? (t.setPaused(!0), r.pause()) : (t.setPaused(!1), r.resume());
                        let s = n.states[o.state_index],
                            _ = null == (a = null == s ? void 0 : s.options) ? void 0 : a.playback_speed;
                        _ && _ !== this._currentTrackInfo.currentPlaybackSpeed && (r.setPlaybackSpeed(_), i = !0);
                        let d = parseInt(e.seek_to, 10);
                        t.allowSeeking() && !isNaN(d) && (r.seek(d, l.REMOTE), this._setCurrentTrackPosition(d), i = !0);
                        let u = null == s ? void 0 : s.preferred_media_type;
                        u && (tf.log(`Setting media playback mode to ${u}`), r.setMediaPlaybackMode(u.toLowerCase())), i ? this._emitStateChanged() : (this._lastProcessedStateId = null, this._updateState(I.MODIFY_CURRENT_STATE))
                    } else {
                        this._lastProcessedStateId = null != (s = _.state_id) ? s : null, this._currentContext && this._onBeforeTrackChange();
                        let t = this._ListClass.create("spotify:app:jsspeaker", this._manifestTrackResolver);
                        t.setStateMachine(n), t.startAtState(o), this._deviceId && t.setDeviceId(this._deviceId), t.setSupportsExternalUrlPlaybackSpeed(this._supportsExternalUrlPlaybackSpeed), this._currentContext = t, e.seek_to && t.setInitialPosition(e.seek_to), this._loading = !0, this._switchingContext = !0, r.play(t, {
                            reason: l.REMOTE
                        })
                    }
                }
                _clearContextAndState() {
                    let e = this._listPlayer;
                    e.pause().catch(function() {}), e.clear(l.REMOTE), this._currentContext = null, this._updateState(I.STATE_CLEAR), this._setAllTrackPositions(void 0), this._setAllRawTrackPositions(void 0), this._lastProcessedStateId = null, this.emit("state_cleared", null), this._loading = !0
                }
                _sendDevicesRequest(e, t) {
                    let i = `${this._endpoint}/v1/devices`;
                    return "PUT" === e && (i = `${i}/${this._deviceId}`), this._transport.request(i, {
                        authorize: !0,
                        method: e || "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(t),
                        retry: tR
                    })
                }
                _sendVolume(e) {
                    let t = `${this._endpoint}/v1/devices/${this._deviceId}/volume`;
                    return this._setSequenceNumber(e), this._transport.request(t, {
                        authorize: !0,
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        payload: JSON.stringify(e)
                    })
                }
                _setAllTrackPositions(e) {
                    this._blockStalePositionUpdates && void 0 !== e || (this._previousTrackPosition = e, this._currentTrackPosition = e)
                }
                _setCurrentTrackPosition(e) {
                    (void 0 === e || void 0 === this._currentTrackPosition || e !== this._currentTrackPosition) && (this._blockStalePositionUpdates && void 0 !== e || (this._previousTrackPosition = this._currentTrackPosition, this._currentTrackPosition = e))
                }
                _setAllRawTrackPositions(e) {
                    this._blockStalePositionUpdates && void 0 !== e || (this._previousRawTrackPosition = e, this._rawTrackPosition = e)
                }
                _setRawTrackPosition(e) {
                    e !== this._rawTrackPosition && (this._blockStalePositionUpdates && void 0 !== e || (this._previousRawTrackPosition = this._rawTrackPosition, this._rawTrackPosition = e))
                }
                _setSequenceNumber(e) {
                    return void 0 === e.seq_num && (e.seq_num = ++this._sequenceNumber), e
                }
                _setSequenceNumbers(e, t) {
                    e.seq_nums = [];
                    for (let i = 0; i < t; i++) e.seq_nums.push(++this._sequenceNumber);
                    return e
                }
                _setVolume(e) {
                    var t;
                    let i = e.volume / 65535;
                    this._listPlayer.setVolume(i, null != (t = e.command_id) ? t : `tpcommand-${Date.now()}`)
                }
                _shouldSendUpdateForEvent(e) {
                    return !!(e && e !== this._lastProcessedStateId)
                }
                _updateDeviceInfo() {
                    this._registered && this._deviceInfo && this._sendDevicesRequest("PUT", this._deviceInfo).then(e => {
                        204 === e.status && this.emit("registration_updated", null)
                    })
                }
                _updateState(e, t) {
                    var i, s;
                    let r, n;
                    if (!this._registered) return;
                    if (t ? (r = t.state_ref, n = t) : (r = null != (s = null == (i = this._currentContext) ? void 0 : i.getStateRef()) ? s : null, n = this._generateStatePayload(r, e)), !this._shouldSendPayload(n)) return void tf.info("State update ignored (duplicate).", n);
                    if (this._emitStateChanged(), this._isSendingUpdate && this._limitStateUpdates) {
                        this._logUnsentStateUpdate(n), this._queueSendUpdate.push(e);
                        return
                    }
                    this._isSendingUpdate = !0, this._queueSendUpdate = [], this._setSequenceNumber(n), this._lastSentStateUpdatePayload = n;
                    let o = () => {
                            this._isSendingUpdate = !1, this._queueSendUpdate.length && this._updateState(this._queueSendUpdate[this._queueSendUpdate.length - 1]), tf.info("State update sent.", e, n)
                        },
                        l = `${this._endpoint}/v1/devices/${this._deviceId}/state`;
                    this._lastUpdateStateMonotonicTime = (0, w.X)(), this._transport.request(l, {
                        authorize: !0,
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(n),
                        retry: tR
                    }).then(this._handleStateUpdateResponse.bind(this, r)).then(o, e => {
                        "object" == typeof e && null !== e && "code" in e ? this._emitError(e) : this._emitError(new tr(a.TP_STATE_UPDATE_FAILED, `${e}`, {
                            isNetworkRelated: !0
                        })), o()
                    })
                }
                _shouldSendPayload(e) {
                    let t = this._lastSentStateUpdatePayload;
                    if (!t || !t.state_ref || !e.state_ref) return !0;
                    let i = e.state_ref,
                        a = t.state_ref;
                    if (i.paused !== a.paused || i.state_id !== a.state_id || i.state_machine_id !== a.state_machine_id) return !0;
                    let s = e.sub_state,
                        r = t.sub_state;
                    return s.playback_speed !== r.playback_speed || s.position !== r.position || s.video_surface !== r.video_surface || s.is_video_on !== r.is_video_on || e.previous_position !== t.previous_position || Math.abs((s.duration || 0) - (r.duration || 0)) >= 51
                }
                stop() {
                    return !!this._registered && !!this._currentContext && (this._clearContextAndState(), !0)
                }
                deregister() {
                    return this._registered ? (this._isDeregistering = !0, this._registered = !1, this._listPlayer.getPlayerState().then(e => Promise.all([this._deregisterFromService(e), this._waitingForTrackingData.promise, this._listPlayer.stop().catch(() => {})]).then(([e]) => (this._isDeregistering = !1, e)), () => (this._isDeregistering = !1, this._registered = !0, !1))) : Promise.resolve(!1)
                }
                register() {
                    let e;
                    if (this._registered) return Promise.resolve(!1);
                    if (!this._deviceInfo) return Promise.reject(Error("Need DeviceInfo for device registration."));
                    if (!this._connectionId) return Promise.reject(Error("Need connection-id for device registration"));
                    let t = this._currentContext;
                    return t && (e = this._generateStatePayload(t.getStateRef(), I.REGISTER), this._setSequenceNumber(e)), this._sendDevicesRequest("POST", {
                        device: this._deviceInfo,
                        outro_endcontent_snooping: "true" === tT.env.OUTRO_SNOOPING,
                        connection_id: this._connectionId,
                        client_version: this._clientVersion,
                        previous_session_state: e,
                        volume: this._currentGaiaVolume
                    }).then(this._handleRegisterResponse).catch(e => (e && !e.maxedSubscriptions && (e.registration = !0, this._emitError(e)), !1))
                }
                hasOptimisticUpdates() {
                    return !1
                }
            }
            let tD = q.m.forTag("transport.server_time");
            class tO {
                constructor(e) {
                    this._serverTime = 0, this._serverTimeFetchedAt = null, this._transport = e
                }
                static create(e) {
                    return new tO(e)
                }
                _handleResponse(e, t) {
                    var i;
                    let a = (0, w.X)();
                    return t.status !== Q.s.OK ? this._handleError(`Status ${t.status}`) : "number" != typeof(null == (i = t.body) ? void 0 : i.timestamp) ? this._handleError("Invalid response") : (this._serverTimeFetchedAt = a, this._serverTime = t.body.timestamp + Math.round((a - e) / 2), this._serverTime)
                }
                _handleError(e) {
                    return tD.error(`Cannot fetch server time: ${e}`), this._serverTimeFetchedAt = (0, w.X)(), this._serverTime = Date.now(), this._serverTime
                }
                get() {
                    let e = (0, w.X)();
                    return this._transport.request("@webgate/melody/v1/time", {
                        responseType: "json",
                        signal: (0, k.createAbortSignalWithTimeout)(1e3)
                    }).then(this._handleResponse.bind(this, e), this._handleError.bind(this))
                }
                getApproximate() {
                    if (!this._serverTime || null === this._serverTimeFetchedAt) return this.get(), Date.now();
                    let e = (0, w.r)(this._serverTimeFetchedAt);
                    return e > 18e4 && this.get(), this._serverTime + e
                }
            }! function(e) {
                e.LOCAL_PLAYER_DISABLED = "local_player_disabled", e.STOPPED = "stopped", e.REMOTE_ACTIVATED = "remote_activated", e.UNKNOWN = "unknown"
            }(P || (P = {}));
            class tN extends Error {
                constructor(e, t) {
                    super(t), this.status = -1, this.maxedSubscriptions = !1, this.unrecoverable = !1, this.debug = {}, this.code = e, this.name = "PlayerAPIClientError"
                }
                static fatal(e, t) {
                    let i = new tN(e, t);
                    return i.unrecoverable = !0, i
                }
            }
            class tC extends Error {
                constructor(e, t) {
                    super(t), this.status = -1, this.code = e, this.name = "SocialConnectClientError"
                }
            }
            let tk = q.m.forTag("social-connect"),
                tM = "@webgate/social-connect",
                tU = /social-connect\/v2\/session_update$/,
                tw = {
                    condition: e => {
                        let t = e.getStatusFamily();
                        return t === eF.t.SERVER_ERROR || t === eF.t.CONNECTION_ERROR
                    }
                };
            ! function(e) {
                e.UNKNOWN_UPDATE_TYPE = "UNKNOWN_UPDATE_TYPE", e.NEW_SESSION = "NEW_SESSION", e.USER_JOINED = "USER_JOINED", e.USER_LEFT = "USER_LEFT", e.SESSION_DELETED = "SESSION_DELETED", e.YOU_LEFT = "YOU_LEFT", e.YOU_WERE_KICKED = "YOU_WERE_KICKED", e.YOU_JOINED = "YOU_JOINED", e.USER_KICKED = "USER_KICKED", e.VOLUME_CONTROL_PERMISSIONS_CHANGED = "VOLUME_CONTROL_PERMISSIONS_CHANGED", e.QUEUE_ONLY_MODE_CONTROL_CHANGED = "QUEUE_ONLY_MODE_CONTROL_CHANGED", e.WIFI_BROADCAST_CHANGED = "WIFI_BROADCAST_CHANGED", e.ACTIVE_DEVICE_CHANGED = "ACTIVE_DEVICE_CHANGED", e.SESSION_MEMBER_UPDATED = "SESSION_MEMBER_UPDATED", e.SESSION_ACTIVATED = "SESSION_ACTIVATED"
            }(A || (A = {})), (R || (R = {})).SESSION_UPDATED = "session_updated";
            class tF extends M.bk {
                constructor(e) {
                    super(), this._currentSession = null, this._lastUpdateTime = null, this._abortController = (0, k.createAbortControllerLike)(), this._onSessionUpdate = e => {
                        var t;
                        let i = null == (t = e.payloads) ? void 0 : t[0];
                        if (!i) return;
                        if (i.reason === A.SESSION_DELETED || i.reason === A.YOU_LEFT || i.reason === A.YOU_WERE_KICKED || !i.session) {
                            this._abortController.abort(), this._currentSession && this._updateSession(null, null);
                            return
                        }
                        let a = parseInt(i.session.timestamp, 10) || 0;
                        null !== this._lastUpdateTime && a > 0 && a < this._lastUpdateTime || this._updateSession(i.session, a)
                    }, this._fetchSessionState = () => {
                        this._abortController.abort(), this._abortController = (0, k.createAbortControllerLike)();
                        let e = `${tM}/v2/sessions/current`;
                        this._transport.request(e, {
                            method: k.Method.GET,
                            responseType: "json",
                            retry: tw,
                            signal: this._abortController.signal
                        }).then(e => {
                            if (404 === e.status || 410 === e.status) {
                                this._currentSession && this._updateSession(null, null);
                                return
                            }
                            if (200 === e.status) {
                                let t = e.body,
                                    i = parseInt(t.timestamp, 10) || 0;
                                (null === this._lastUpdateTime || i > this._lastUpdateTime) && this._updateSession(t, i)
                            }
                        }).catch(e => {
                            (null == e ? void 0 : e.code) !== k.TransportErrors.HTTP_REQUEST_ABORTED && tk.error("Failed to fetch session state:", e)
                        })
                    }, this._transport = e, this._transport.matchMessages(tU, this._onSessionUpdate), this._transport.on(this._transport.EVENT_CONNECTION_ID, this._fetchSessionState)
                }
                _updateSession(e, t) {
                    this._currentSession = e, this._lastUpdateTime = t, this.emit(R.SESSION_UPDATED, e)
                }
                getCurrentSession() {
                    return this._currentSession
                }
                shouldRedirect() {
                    let e = this._currentSession;
                    return !!(null == e ? void 0 : e.redirectCommands)
                }
                redirect(e, t) {
                    let i = this._currentSession;
                    if (!i) return Promise.reject(new tC(a.SOCIAL_CONNECT_FAILED_WITH_STATUS, "No active session for command redirect"));
                    let s = `${tM}/v2/sessions/${encodeURIComponent(i.session_id)}/commands/from/${encodeURIComponent(t)}`;
                    return this._transport.request(s, {
                        method: k.Method.POST,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        payload: JSON.stringify({
                            command: e
                        }),
                        responseType: "json",
                        retry: tw
                    }).then(e => ((404 === e.status || 410 === e.status) && this._currentSession && this._updateSession(null, null), e))
                }
            }
            var tB = i(29559);

            function tY(e) {
                return "Episode" === e.__typename
            }

            function tV(e) {
                return "Podcast" === e.__typename
            }
            let tx = q.m.forTag("harmony.pathfinder_decorator");

            function tG(e) {
                var t;
                return null != (t = null == e ? void 0 : e.sources.map(({
                    url: e,
                    width: t,
                    height: i
                }) => ({
                    url: e,
                    width: t,
                    height: i
                }))) ? t : void 0
            }
            class tH {
                constructor(e) {
                    this._transport = e.transport, this._cache = e.cache
                }
                _processTrackEntityResponse(e) {
                    var t, i;
                    let a = null == (t = e.typedEntity) ? void 0 : t.data;
                    if (!a || "Track" !== a.__typename) return;
                    let s = this._formatTrack(a);
                    this._cache.set(s.uri, s), (null == (i = s.linked_from) ? void 0 : i.uri) && this._cache.set(s.linked_from.uri, s)
                }
                _formatTrack(e) {
                    var t, i, a, s, r, n, o, l;
                    let _ = tG(null == (t = e.albumOfTrack) ? void 0 : t.coverArt),
                        d = null != (s = null == (a = null == (i = e.artists) ? void 0 : i.items) ? void 0 : a.map(e => ({
                            uri: e.uri,
                            name: e.profile.name
                        }))) ? s : [],
                        u = null == (r = e.relinkingInformation) ? void 0 : r.linkedTrack,
                        c = u && "Track" === u.__typename ? {
                            uri: u.uri,
                            id: null != (o = null == (n = (0, ts.o_h)(u.uri)) ? void 0 : n.id) ? o : null
                        } : void 0;
                    return {
                        id: null == (l = (0, ts.o_h)(e.uri)) ? void 0 : l.id,
                        uri: e.uri,
                        type: "track",
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "music",
                        name: e.name,
                        artists: d,
                        album: e.albumOfTrack ? {
                            uri: e.albumOfTrack.uri,
                            name: e.albumOfTrack.name,
                            images: _
                        } : void 0,
                        duration_ms: e.duration.totalMilliseconds,
                        is_playable: e.playability.playable,
                        linked_from: c
                    }
                }
                _processEpisodeEntityResponse(e) {
                    var t;
                    let i = null == (t = e.typedEntity) ? void 0 : t.data;
                    if (!i || !tY(i)) return;
                    let a = this._formatEpisode(i);
                    this._cache.set(a.uri, a)
                }
                _formatEpisode(e) {
                    var t, i;
                    let a = e.duration.totalMilliseconds,
                        s = tG(e.coverArt),
                        r = null == (t = e.podcastV2) ? void 0 : t.data,
                        n = r && tV(r) ? r : null,
                        o = (null == n ? void 0 : n.publisher) ? [{
                            uri: n.uri,
                            name: n.publisher.name
                        }] : void 0,
                        l = null == n ? void 0 : n.mediaType;
                    return {
                        id: null == (i = (0, ts.o_h)(e.uri)) ? void 0 : i.id,
                        uri: e.uri,
                        type: "episode",
                        media_type: l ? ({
                            AUDIO: "audio",
                            VIDEO: "video",
                            MIXED: "video",
                            UNKNOWN: void 0
                        })[l] : void 0,
                        track_type: l ? ({
                            AUDIO: "audio",
                            VIDEO: "video",
                            MIXED: "mixed",
                            UNKNOWN: void 0
                        })[l] : void 0,
                        content_type: "podcast",
                        name: e.name,
                        artists: o,
                        album: n ? {
                            uri: n.uri,
                            name: n.name,
                            images: s
                        } : void 0,
                        duration_ms: a,
                        is_playable: e.playability.playable
                    }
                }
                _processChapterEntityResponse(e) {
                    var t;
                    let i = null == (t = e.typedEntity) ? void 0 : t.data;
                    if (!i || "Chapter" !== i.__typename) return;
                    let a = this._formatChapter(i);
                    this._cache.set(a.uri, a)
                }
                _formatChapter(e) {
                    var t;
                    let i = tG(e.coverArt),
                        a = e.audiobookV2.data,
                        s = "Audiobook" === a.__typename ? a : null,
                        r = null == s ? void 0 : s.mediaType;
                    return {
                        id: null == (t = (0, ts.o_h)(e.uri)) ? void 0 : t.id,
                        uri: e.uri,
                        type: "episode",
                        name: e.name,
                        media_type: r && "UNKNOWN" !== r ? r.toLowerCase() : void 0,
                        track_type: "audio",
                        content_type: "chapter",
                        artists: s ? [{
                            uri: s.uri,
                            name: s.name
                        }] : void 0,
                        album: s ? {
                            uri: s.uri,
                            name: s.name,
                            images: i
                        } : void 0,
                        duration_ms: e.duration.totalMilliseconds,
                        is_playable: e.playability.playable
                    }
                }
                _processLookupEntitiesResponse(e) {
                    var t, i;
                    let a = null == (t = e.data) ? void 0 : t.lookupEntities;
                    if (!a || !a.length) return !1;
                    for (let e of a) {
                        if ("Entity" !== e.__typename) continue;
                        let t = "EntityTypeTrait" === e.entityTypeTrait.__typename ? e.entityTypeTrait : null;
                        (null == t ? void 0 : t.type) === "ENTITY_TYPE_PODCAST_CHAPTER" ? this._processPodcastChaptersResponse(e): (null == t ? void 0 : t.type) === "ENTITY_TYPE_PODCAST_EPISODE" ? this._processEpisodeEntityResponse(e) : (null == t ? void 0 : t.type) === "ENTITY_TYPE_TRACK" ? this._processTrackEntityResponse(e) : (null == t ? void 0 : t.type) === "ENTITY_TYPE_AUDIOBOOK_CHAPTER" ? this._processChapterEntityResponse(e) : (null == t ? void 0 : t.type) === "ENTITY_TYPE_CLIP" ? this._processClipResponse(e) : tx.warn(`Unhandled entity type: ${null!=(i=null==t?void 0:t.type)?i:"unknown"}`, e.uri)
                    }
                    return !0
                }
                _processPodcastChaptersResponse(e) {
                    let t = this._formatEpisodeBasedEntity(e, "podcast-chapter");
                    this._cache.set(t.uri, t)
                }
                _processClipResponse(e) {
                    let t = this._formatEpisodeBasedEntity(e, "clip");
                    this._cache.set(t.uri, t)
                }
                _formatEpisodeBasedEntity(e, t) {
                    var i, a, s, r, n, o;
                    let l = "IdentityTrait" === e.identityTrait.__typename ? e.identityTrait : null,
                        _ = null != (i = null == l ? void 0 : l.name) ? i : "",
                        d = function(e) {
                            let t = "ConsumptionExperienceTrait" === e.__typename ? e : null,
                                i = null == t ? void 0 : t.duration;
                            return i ? 1e3 * i.seconds + Math.floor(i.nanoSeconds / 1e6) : 0
                        }(e.consumptionExperienceTrait),
                        u = null == l ? void 0 : l.contentHierarchyParent,
                        c = null == (a = null == u ? void 0 : u.typedEntity) ? void 0 : a.data,
                        h = c && tY(c) ? c : null,
                        p = tG(null == h ? void 0 : h.coverArt),
                        m = null == (s = null == h ? void 0 : h.podcastV2) ? void 0 : s.data,
                        E = m && tV(m) ? m : null,
                        g = (null == E ? void 0 : E.publisher) ? [{
                            uri: E.uri,
                            name: E.publisher.name
                        }] : void 0,
                        S = null == E ? void 0 : E.mediaType;
                    return {
                        id: null == (r = (0, ts.o_h)(e.uri)) ? void 0 : r.id,
                        uri: e.uri,
                        type: t,
                        media_type: S ? ({
                            AUDIO: "audio",
                            VIDEO: "video",
                            MIXED: "video",
                            UNKNOWN: void 0
                        })[S] : void 0,
                        track_type: S ? ({
                            AUDIO: "audio",
                            VIDEO: "video",
                            MIXED: "mixed",
                            UNKNOWN: void 0
                        })[S] : void 0,
                        content_type: "unknown",
                        name: _,
                        artists: g,
                        album: E ? {
                            uri: E.uri,
                            name: E.name,
                            images: p
                        } : void 0,
                        duration_ms: d,
                        is_playable: null != (o = null == (n = null == h ? void 0 : h.playability) ? void 0 : n.playable) && o
                    }
                }
                decorateUris(e) {
                    return e.length ? this._transport.request("https://api-partner.spotify.com/pathfinder/v1/query", {
                        method: "POST",
                        responseType: "json",
                        authorize: !0,
                        headers: {
                            "content-type": "application/json"
                        },
                        payload: JSON.stringify({
                            variables: {
                                uris: e
                            },
                            extensions: {
                                persistedQuery: {
                                    version: 1,
                                    sha256Hash: "f952da037440f694cc6925b9e3f649d39077a744c4db7dfba01cb883723f4f77"
                                }
                            }
                        })
                    }).then(e => {
                        if (200 !== e.status) return !1;
                        let t = e.body;
                        return this._processLookupEntitiesResponse(t)
                    }).catch(() => !1) : Promise.resolve(!1)
                }
            }
            class tj {
                constructor(e) {
                    this._transport = e.transport, this._metadataCache = new tB.q(e.cacheSize || 20), this._pathfinderDecorator = new tH({
                        transport: this._transport,
                        cache: this._metadataCache
                    })
                }
                static create(e) {
                    return new tj(e)
                }
                _decorateTrackWindow(e) {
                    let t, i, a, s = this._metadataCache,
                        r = {
                            current_track: null,
                            next_tracks: [],
                            previous_tracks: []
                        },
                        n = e => {
                            var t;
                            let i = null == (t = null == e ? void 0 : e.metadata) ? void 0 : t.track_player;
                            e && i && (e.media_type = "video" === i ? "video" : "audio")
                        };
                    for (e.current_track && (i = s && e.current_track && ("uri" in e.current_track) && s.get(e.current_track.uri), r.current_track = Object.assign({
                            uid: e.current_track.uid,
                            metadata: e.current_track.metadata
                        }, i || e.current_track), n(r.current_track)), t = e.next_tracks.length; t--;) a = e.next_tracks[t], i = s && a && "uri" in a && s.get(a.uri), r.next_tracks[t] = Object.assign({
                        uid: a.uid,
                        metadata: a.metadata
                    }, i || a), n(r.next_tracks[t]);
                    for (t = e.previous_tracks.length; t--;) a = e.previous_tracks[t], i = s && a && "uri" in a && s.get(a.uri), r.previous_tracks[t] = Object.assign({
                        uid: a.uid,
                        metadata: a.metadata
                    }, i || a), n(r.previous_tracks[t]);
                    return r
                }
                _cacheMetadata(e) {
                    let t = this._metadataCache,
                        i = [];
                    for (let a of e) t.get(a) || i.push(a);
                    return i.length ? this._pathfinderDecorator.decorateUris(i) : Promise.resolve(!0)
                }
                formatLocalTrack(e, t) {
                    return e && e.type === ts.NQG.LOCAL_TRACK ? {
                        uri: e.toURI(),
                        type: "local",
                        uid: t,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "music",
                        name: e.track,
                        artists: [{
                            uri: (0, ts.DY5)(e.artist).toURI(),
                            name: e.artist
                        }],
                        album: {
                            uri: (0, ts.dx2)(e.artist, e.album).toURI(),
                            name: e.album,
                            images: [{
                                url: ""
                            }]
                        },
                        duration_ms: e.duration ? 1e3 * e.duration : 0,
                        is_playable: !1
                    } : null
                }
                formatAd(e, t) {
                    if (!e || e.type !== ts.NQG.AD && e.type !== ts.NQG.INTERRUPTION || !t || !t.metadata) return null;
                    let i = t.metadata;
                    return {
                        id: e.id,
                        uri: e.toURI(),
                        type: e.type,
                        uid: t.uid,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "ad",
                        name: i.advertiser,
                        artists: [{
                            uri: i.click_url,
                            name: i.buttonMessage || i.advertiser
                        }],
                        album: {
                            uri: i.click_url,
                            name: i.advertiser,
                            images: [{
                                url: i.image_url
                            }]
                        },
                        duration_ms: parseInt(i.duration, 10),
                        is_playable: !1
                    }
                }
                formatDJNarration(e, t) {
                    var i;
                    if (!e || (null == (i = t.metadata) ? void 0 : i.is_narration) !== "true" || !t || !t.metadata) return null;
                    let a = t.metadata;
                    return {
                        id: e.id,
                        uri: e.toURI(),
                        type: e.type,
                        uid: t.uid,
                        name: a.title,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "narration",
                        album: {
                            name: a.album_title,
                            images: [{
                                url: a.image_url
                            }]
                        },
                        artists: [{
                            uri: "",
                            name: a.artist_name
                        }]
                    }
                }
                formatGenericTrack(e, t) {
                    var i, a, s, r, n, o;
                    let l = t.metadata || {};
                    return {
                        id: null != (i = null == e ? void 0 : e.id) ? i : "",
                        uri: null != (a = null == e ? void 0 : e.toURI()) ? a : t.uri,
                        type: null != (s = null == e ? void 0 : e.type) ? s : "unknown",
                        uid: t.uid,
                        name: l.title,
                        media_type: "video" === l.track_player ? "video" : "audio",
                        duration_ms: l.duration || 0,
                        track_type: void 0,
                        content_type: "unknown",
                        album: {
                            name: null != (r = l.album_title) ? r : "",
                            uri: null != (n = l.album_uri) ? n : "",
                            images: l.image_url && [{
                                url: l.image_url
                            }]
                        },
                        artists: [{
                            uri: null != (o = l.artist_uri) ? o : "",
                            name: l.artist_name
                        }]
                    }
                }
                decorateTrackWindow(e, t) {
                    return this._cacheMetadata(t).then(t => t ? this._decorateTrackWindow(e) : e)
                }
            }
            let tJ = /^[0-9a-f]{32}$/i,
                tK = () => ea(32),
                tq = q.m.forTag("harmony.controller"),
                tQ = {
                    disallow_pausing_reasons: !0,
                    disallow_peeking_next_reasons: !0,
                    disallow_peeking_prev_reasons: !0,
                    disallow_resuming_reasons: !0,
                    disallow_seeking_reasons: !0,
                    disallow_skipping_next_reasons: !0,
                    disallow_skipping_prev_reasons: !0,
                    disallow_toggling_repeat_context_reasons: !0,
                    disallow_toggling_repeat_track_reasons: !0,
                    disallow_toggling_shuffle_reasons: !0,
                    disallow_transferring_playback_reasons: !0,
                    disallow_setting_playback_speed_reasons: !0,
                    disallow_setting_modes: !0,
                    disallow_signals: !0,
                    disallow_add_to_queue_reasons: !0,
                    disallow_set_queue_reasons: !0,
                    disallow_updating_context_reasons: !0,
                    disallow_removing_from_context_tracks_reasons: !0,
                    disallow_removing_from_next_tracks_reasons: !0,
                    disallow_reordering_in_context_tracks_reasons: !0,
                    disallow_reordering_in_next_tracks_reasons: !0,
                    disallow_inserting_into_context_tracks_reasons: !0,
                    disallow_inserting_into_next_tracks_reasons: !0,
                    disallow_remote_control_reasons: !0,
                    disallow_sleep_timer_clear_reasons: !0,
                    disallow_sleep_timer_duration_reasons: !0,
                    disallow_sleep_timer_end_of_track_reasons: !0
                },
                t$ = {
                    unknown: ej.d2.UNKNOWN,
                    default: ej.d2.DEFAULT,
                    low: ej.d2.LOW,
                    normal: ej.d2.NORMAL,
                    normalized: ej.d2.NORMAL,
                    high: ej.d2.HIGH,
                    veryhigh: ej.d2.VERY_HIGH,
                    hifi: ej.d2.HIFI
                },
                tW = {
                    on: f.ON,
                    off: f.OFF,
                    none: f.NONE
                };

            function tX(e, t) {
                if (!e) return [];
                let i = [],
                    a = [ts.NQG.TRACK, ts.NQG.EPISODE];
                for (let s = 0, r = e.length; s < r; s++) {
                    let r, n = e[s];
                    if (!n) throw TypeError("Null value inside track array.");
                    if ("string" == typeof n ? (r = (0, ts.o_h)(n), n = {
                            uri: n
                        }) : r = (0, ts.o_h)(n.uri), !/^spotify:(meta:|delimiter)/.test(n.uri))
                        if (r) {
                            if (-1 === a.indexOf(r.type)) throw TypeError(`Invalid track uri: ${n.uri}`)
                        } else throw TypeError(`Invalid uri string: ${r}`);
                    n.metadata || (n.metadata = {}), t && t.queued && (n.metadata.is_queued = "true"), i.push(n)
                }
                return i
            }

            function tz(e) {
                if (e) {
                    if (/^.+:\/\//.test(e)) return e;
                    throw TypeError(`Invalid page url: ${e}`)
                }
            }
            class tZ extends M.bk {
                constructor(e) {
                    super(), this._suppressed = !1, this._lastDeviceInfoData = null, this._state = null, this._lastPlayerState = null, this._isOrphanedState = !1, this._progressPosition = 0, this._lastProgressMonotonicTime = (0, w.X)(), this._trackingIntervalId = 0, this._queue = null, this._client = e.client, this._serverTime = e.serverTime, this._version = e.version, this._playerClient = e.playerClient, this._disableProgress = !!e.disableProgress, this._observerMode = !!e.observerMode, this._transport = this._client.getPublicTransport(), this._decorateTrackWindowOption = e.decorateTrackWindow, this._decorate = !1 !== this._decorateTrackWindowOption, this._metadataDecorator = new tj({
                        transport: this._transport
                    }), this._socialConnectClient = new tF(this._transport), this._playerClient.setCommandRedirector(this._socialConnectClient), this._onClientBeforeDisconnect = this._onClientBeforeDisconnect.bind(this), this._onDeviceStateChanged = this._onDeviceStateChanged.bind(this), this._onPlayerStateChanged = this._onPlayerStateChanged.bind(this), this._onProgressTracking = this._onProgressTracking.bind(this), this._client.on("before_disconnect", this._onClientBeforeDisconnect), this.proxyEmit(this._playerClient, "max_subscriptions_reached", "max_subscriptions_reached"), this.proxyEmit(this._playerClient, "devices_changed", "devices_changed"), this.proxyEmit(this._playerClient, "registered", "registered"), this.proxyEmit(this._playerClient, "deregistered", "deregistered"), this._playerClient.on("device_state_changed", this._onDeviceStateChanged), this._playerClient.on("player_state_changed", this._onPlayerStateChanged)
                }
                static create(e) {
                    return new tZ(e)
                }
                _onClientBeforeDisconnect(e) {
                    e && e.data.awaitPromise(this._playerClient.deregister().catch(() => {}))
                }
                _onDeviceStateChanged(e) {
                    var t, i;
                    let {
                        deviceState: a,
                        hasOrphanedState: s
                    } = e.data, r = !!(null == (i = null == (t = this._lastDeviceInfoData) ? void 0 : t.deviceInfo) ? void 0 : i.local);
                    this._lastDeviceInfoData = {
                        deviceInfo: a,
                        hasOrphanedState: s
                    }, !r || (null == a ? void 0 : a.local) || this._playerClient.getDevices().then(({
                        localDevice: e
                    }) => {
                        let t = P.STOPPED;
                        s ? e || (t = P.LOCAL_PLAYER_DISABLED) : t = P.REMOTE_ACTIVATED, this.emit("device_deactivated", {
                            reason: t
                        })
                    }).catch(e => {
                        tq.warn("Device deactivation checking failed.", e)
                    }), this._suppressed || this.emit("device_info_changed", this._lastDeviceInfoData)
                }
                _startProgressTracking() {
                    this._stopProgressTracking(), this._lastProgressMonotonicTime = (0, w.X)(), this._onProgressTracking(), this._trackingIntervalId = setInterval(this._onProgressTracking, 500)
                }
                _stopProgressTracking() {
                    this._trackingIntervalId && (clearInterval(this._trackingIntervalId), this._trackingIntervalId = 0)
                }
                _onProgressTracking() {
                    var e;
                    let t = (0, w.X)(),
                        i = (null == (e = this._lastPlayerState) ? void 0 : e.playback_speed) || 1;
                    this._progressPosition += i * (t - this._lastProgressMonotonicTime), this.emit("progress", {
                        position: this._progressPosition,
                        timestamp: Date.now()
                    }), this._lastProgressMonotonicTime = t
                }
                _generatePlayOptions(e, t) {
                    var i;
                    let a = {
                        license: null != (i = this._playerClient.getDeviceLicense()) ? i : ""
                    };
                    if (!e || (("index" in e || "trackUID" in e || "trackURI" in e || "pageIndex" in e) && (a.skip_to = {
                            track_uid: e.trackUID,
                            track_index: e.index,
                            track_uri: e.trackURI,
                            page_index: e.pageIndex
                        }), "initialOffset" in e && (a.seek_to = e.initialOffset), "paused" in e && (a.initially_paused = e.paused), "alwaysPlaySomething" in e && (a.always_play_something = e.alwaysPlaySomething), t)) return a;
                    a.player_options_override = {};
                    let s = a.player_options_override;
                    if ("modes" in e && (s.modes = e.modes), "shuffle" in e && (s.shuffling_context = e.shuffle), "repeatMode" in e) switch (e.repeatMode) {
                        case n.CONTEXT:
                            s.repeating_context = !0, s.repeating_track = !1;
                            break;
                        case n.TRACK:
                            s.repeating_track = !0, s.repeating_context = !1;
                            break;
                        case n.OFF:
                            s.repeating_track = !1, s.repeating_context = !1
                    }
                    return a
                }
                _setFilterAndSort(e, t) {
                    t && t.filter && e.metadata && (e.metadata["filtering.predicate"] = t.filter), t && t.sort && e.metadata && (e.metadata["sorting.criteria"] = t.sort)
                }
                _setMetadataOptions(e, t) {
                    if (!t) return;
                    let i = e.metadata || {};
                    "autoplayCandidate" in t && (i.autoplay_candidate = t.autoplayCandidate ? "true" : "false"), e.metadata = i
                }
                _generatePlayOrigin(e) {
                    if ((null == e ? void 0 : e.featureClasses) && !Array.isArray(e.featureClasses)) throw TypeError("PlayOptions playOrigin.featureClasses must be an array of strings.");
                    return {
                        feature_identifier: (null == e ? void 0 : e.featureIdentifier) || "harmony",
                        feature_version: (null == e ? void 0 : e.featureVersion) || this._version,
                        feature_classes: null == e ? void 0 : e.featureClasses,
                        view_uri: null == e ? void 0 : e.viewURI,
                        external_referrer: null == e ? void 0 : e.externalReferrer,
                        referrer_identifier: null == e ? void 0 : e.referrerIdentifier,
                        restriction_identifier: null == e ? void 0 : e.restrictionIdentifier
                    }
                }
                _generateLoggingParams(e = {}) {
                    let {
                        pageInstanceId: t,
                        interactionId: i,
                        commandId: a
                    } = e;
                    try {
                        return Promise.resolve({
                            page_instance_ids: t ? [t] : [],
                            interaction_ids: i ? [i] : [],
                            command_id: (e => {
                                if (e && !tJ.test(e)) throw TypeError(`Invalid commandId. Expected a 32 character hex string but got: ${e}`);
                                return e || tK()
                            })(a)
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                _parseRestrictions(e) {
                    let t = {};
                    for (let i in e.restrictions) Object.prototype.hasOwnProperty.call(e.restrictions, i) && tQ[i] ? t[i] = e.restrictions[i] : tQ[i] && (t[i] = []);
                    return t
                }
                _onPlayerStateChanged(e) {
                    this._isOrphanedState = e.data.orphaned, !1 === this._decorateTrackWindowOption ? this._decorate = !1 : this._observerMode ? this._decorate = !0 : this._decorate = !e.data.isLocal, this._parsePlayerState(e.data.playerState).then(t => {
                        this._state = t, this._suppressed || this.emit("state_changed", {
                            state: t ? Object.assign({}, t) : null,
                            orphaned: e.data.orphaned
                        }), !this._disableProgress && t && (this._progressPosition = t.position, t.paused ? this._stopProgressTracking() : this._startProgressTracking())
                    })
                }
                _isUsingPlayerService(e) {
                    var t, i, a;
                    let s = null == (i = null == (t = this._lastDeviceInfoData) ? void 0 : t.deviceInfo) ? void 0 : i.version,
                        r = /\/(cloud|track)-playback$/.test(s || ""),
                        n = (null == (a = null == e ? void 0 : e.context_metadata) ? void 0 : a["player.arch"]) === 2;
                    return r && n
                }
                _parsePlayerState(e) {
                    return (this._lastPlayerState = e, e) ? this._getTrackWindow(e).then(t => {
                        var i, a, s, r, n, o, l, _, d, u, c, h;
                        let p = !!(null == (i = e.options) ? void 0 : i.playback_speed);
                        if (!p) {
                            let t = tn(e.track.uri) ? "not_supported_by_device" : "not_supported_by_content_type";
                            e.restrictions = Object.assign({
                                disallow_setting_playback_speed_reasons: [t]
                            }, e.restrictions)
                        }
                        let m = this._parseRestrictions(e),
                            E = t_(m),
                            g = this._serverTime.getApproximate();
                        return {
                            context: {
                                uri: e.context_uri || null,
                                metadata: e.context_metadata || {}
                            },
                            duration: e.duration || t.current_track && "uri" in t.current_track && t.current_track.duration_ms || 0,
                            timestamp: e.is_paused ? e.timestamp : g,
                            position: e.is_paused ? e.position_as_of_timestamp : this._offsetPosition(e.timestamp, e.position_as_of_timestamp, e.playback_speed, g),
                            playback_id: this._isUsingPlayerService(e) ? null : e.playback_id,
                            playback_quality: null != (r = t$[null != (s = null == (a = e.playback_quality) ? void 0 : a.bitrate_level) ? s : "unknown"]) ? r : ej.d2.UNKNOWN,
                            playback_features: {
                                hifi_status: tW[null != (o = null == (n = e.playback_quality) ? void 0 : n.hifi_status) ? o : "none"],
                                playback_speed: {
                                    current: e.playback_speed,
                                    selected: null != (_ = null == (l = e.options) ? void 0 : l.playback_speed) ? _ : 1,
                                    restricted: !p || !!(null == E ? void 0 : E.setting_playback_speed)
                                },
                                signal_ids: e.signals || [],
                                modes: e.modes || {},
                                ad_break_context: e.ad_break_context
                            },
                            paused: !!e.is_paused,
                            shuffle: !!(e.options && e.options.shuffling_context),
                            shuffle_mode: to(null == (d = e.options) ? void 0 : d.shuffling_context, null == (u = e.options) ? void 0 : u.modes),
                            repeat_mode: this._getStateRepeatMode(e),
                            restrictions: m,
                            disallows: E,
                            track_window: t,
                            loading: null != (h = null == (c = this._state) ? void 0 : c.loading) && h,
                            playback_speed: e.playback_speed,
                            sleep_timer: this._getStateSleepTimer(e)
                        }
                    }) : Promise.resolve(null)
                }
                _offsetPosition(e, t, i = 1, a) {
                    let s = t + ((a || this._serverTime.getApproximate()) - e) * i;
                    return s < 0 ? 0 : s
                }
                _isRestricted(e, t) {
                    if (!e || !e.restrictions) return !1;
                    let i = `disallow_${t}_reasons`;
                    return !!(e.restrictions[i] || []).length
                }
                _getTrackURI(e) {
                    var t, i;
                    let a = (0, ts.o_h)(e.uri);
                    if ((null == a ? void 0 : a.type) !== ts.NQG.EPISODE) return e.uri;
                    let s = null == (t = e.metadata) ? void 0 : t["pointer.uri"];
                    if (!s) return e.uri;
                    let r = (0, ts.o_h)(s),
                        n = [ts.NQG.PODCAST_CHAPTER, ts.NQG.CLIP];
                    return r && n.some(e => e === r.type) && (null == (i = e.metadata) ? void 0 : i["pointer.npv_mode"]) === "standalone" ? s : e.uri
                }
                _getTrackWindow(e) {
                    let t = {
                            current_track: null,
                            next_tracks: [],
                            previous_tracks: []
                        },
                        i = {},
                        a = [];
                    if (!e.track) return Promise.resolve(t);
                    let s = this._getTrackURI(e.track);
                    if (!s) return Promise.resolve(t);
                    let r = (0, ts.o_h)(s),
                        n = this._metadataDecorator,
                        o = n.formatLocalTrack(r, e.track.uid),
                        l = n.formatAd(r, e.track),
                        _ = n.formatDJNarration(r, e.track),
                        d = n.formatGenericTrack(r, e.track);
                    return t.current_track = o || l || _ || d, t.current_track.metadata = e.track.metadata || {}, o || l || _ || (i[s] = 1, a.push(s)), this._isRestricted(e, "peeking_next") || this._fillWindow(a, t.next_tracks, i, e.next_tracks ? e.next_tracks.slice(0, 5) : []), this._isRestricted(e, "peeking_prev") || this._fillWindow(a, t.previous_tracks, i, e.prev_tracks ? e.prev_tracks.slice(-5) : [], !0), this._decorate ? this._metadataDecorator.decorateTrackWindow(t, a) : Promise.resolve(t)
                }
                _fillWindow(e, t, i, a, s) {
                    for (let r of (s && a.reverse(), a)) {
                        let {
                            metadata: a,
                            uid: n
                        } = r;
                        if ((null == a ? void 0 : a.hidden_in_queue) === "true") continue;
                        let o = this._getTrackURI(r),
                            l = (0, ts.o_h)(o);
                        if (!o || "spotify:delimiter" === o || l && (l.type === ts.NQG.AD || l.type === ts.NQG.INTERRUPTION)) continue;
                        let _ = this._metadataDecorator.formatLocalTrack(l, n),
                            d = _ || {
                                uri: o,
                                uid: n,
                                type: "unknown"
                            };
                        if (_ || o in i || (i[o] = 1, e.push(o)), s ? t.unshift(Object.assign(Object.assign({}, d), {
                                metadata: a
                            })) : t.push(Object.assign(Object.assign({}, d), {
                                metadata: a
                            })), 2 === t.length) break
                    }
                }
                _getStateRepeatMode(e) {
                    let t = e.options;
                    return t && t.repeating_track ? n.TRACK : t && t.repeating_context ? n.CONTEXT : n.OFF
                }
                _getStateSleepTimer(e) {
                    return e.sleep_timer ? "end_of_track" in e.sleep_timer ? "end_of_track" : "timestamp" in e.sleep_timer ? Number(e.sleep_timer.timestamp.timestamp) : "none" : "none"
                }
                _play(e, t, i) {
                    return this._setFilterAndSort(e, i), this._setMetadataOptions(e, i), Promise.all([this._generatePlayOptions(i), this._generateLoggingParams(null == i ? void 0 : i.loggingParams)]).then(([a, s]) => {
                        let r = {
                            context: e,
                            play_origin: this._generatePlayOrigin(i && i.playOrigin),
                            options: a,
                            logging_params: s
                        };
                        return this._playerClient.play(r, t)
                    })
                }
                _setContextURIOptions(e, t) {
                    return this._client.getDeviceDescriptor().then(i => {
                        let s = e.split("?")[0],
                            r = i.toTrackPlaybackDeviceInfo(this._client.getSDKId()),
                            n = `http://@webgate/track-playback/v1/devices/${r.device_id}/context/${encodeURIComponent(s)}/player_options`;
                        return this._transport.request(n, {
                            authorize: !0,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            responseType: "json",
                            payload: JSON.stringify({
                                player_options: t,
                                device_info: r
                            })
                        }).then(e => {
                            if (200 !== e.status) {
                                let t = new tr(a.TP_SET_OPTIONS_FAILED_WITH_STATUS, `Track-Playback service responded with ${e.status}`, {
                                    isNetworkRelated: !0
                                });
                                return t.status = e.status, Promise.reject(t)
                            }
                            return !0
                        }).catch(e => Promise.reject(e))
                    })
                }
                _setOptions(e, t, i) {
                    return Promise.all([this._generateLoggingParams(null == i ? void 0 : i.loggingParams), this.getCurrentState(), this.getActiveDevice()]).then(([s, r, n]) => {
                        if (null == i ? void 0 : i.contextURI) {
                            if (!(0, ts.o_h)(i.contextURI, {
                                    parseUnknown: !0
                                })) return Promise.reject(TypeError("contextURI is not a valid URI"));
                            if (!((null == r ? void 0 : r.context.uri) && (0, ts.B2u)(r.context.uri, i.contextURI)) || !n) return this._setContextURIOptions(i.contextURI, e)
                        }
                        return r ? this._playerClient.setOptions(e, t, {
                            logging_params: s
                        }) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"))
                    })
                }
                getActiveDevice() {
                    return this._playerClient.getActiveDevice()
                }
                getCurrentState(e) {
                    var t;
                    if (e && this._isOrphanedState) return Promise.resolve(null);
                    let i = this._state;
                    if (i && !i.paused) {
                        let e = this._serverTime.getApproximate();
                        i.position = this._offsetPosition(i.timestamp, i.position, null == (t = this._lastPlayerState) ? void 0 : t.playback_speed, e), i.timestamp = e
                    }
                    return Promise.resolve(i ? Object.assign({}, i) : null)
                }
                getContextPlayerState() {
                    return tq.warn("The `getContextPlayerState()` method is not well supported. Please avoid using it directly."), this._playerClient.getContextPlayerState()
                }
                getDevices() {
                    return this._playerClient.getDevices()
                }
                playURI(e, t, i) {
                    if (!(0, ts.o_h)(e, {
                            parseUnknown: !0
                        })) return Promise.reject(TypeError("Invalid Spotify URI"));
                    let a = {
                        uri: e,
                        url: `context://${e}`,
                        metadata: i && i.contextMetadata || {}
                    };
                    return this._play(a, t, i)
                }
                playPages(e, t, i) {
                    var a;
                    let s;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid pages array."));
                    try {
                        s = function(e) {
                            var t, i, a;
                            let s = [];
                            for (let r of e) s.push({
                                tracks: Array.isArray(r.tracks) ? tX(r.tracks) : void 0,
                                page_url: null != (t = tz(r.pageURL)) ? t : void 0,
                                next_page_url: null != (i = tz(r.nextPageURL)) ? i : void 0,
                                metadata: null != (a = r.metadata) ? a : void 0
                            });
                            return s
                        }(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let r = {
                        uri: null != (a = null == i ? void 0 : i.contextURI) ? a : "spotify:internal:harmony-play-pages",
                        metadata: (null == i ? void 0 : i.contextMetadata) || {},
                        pages: s
                    };
                    return this._play(r, t, i)
                }
                playTracks(e, t, i) {
                    var a;
                    let s;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid tracks array."));
                    try {
                        s = tX(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let r = {
                        uri: null != (a = null == i ? void 0 : i.contextURI) ? a : "spotify:internal:harmony-play-tracks",
                        metadata: (null == i ? void 0 : i.contextMetadata) || {},
                        pages: [{
                            tracks: s
                        }]
                    };
                    return this._play(r, t, i)
                }
                updateCurrentContext(e, t = {}) {
                    return this._playerClient.updateCurrentContext(e, t)
                }
                setQueue(e, t, i) {
                    let a, s;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid nextTracks array."));
                    if (!Array.isArray(t)) return Promise.reject(TypeError("Invalid previousTracks array."));
                    try {
                        a = tX(e), s = tX(t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let r = {
                        next_tracks: a.length ? a : void 0,
                        prev_tracks: s.length ? s : void 0
                    };
                    return this._playerClient.setQueue(r, i)
                }
                transfer(e, t = {}) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let a = Object.assign(Object.assign({}, t), {
                            logging_params: i
                        });
                        return this._playerClient.transfer(e, a)
                    })
                }
                pause(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.pause(e, {
                        logging_params: t
                    }))
                }
                resume(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.resume(e, {
                        logging_params: t
                    }))
                }
                togglePlay(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.togglePlay(e, {
                        logging_params: t
                    }))
                }
                nextTrack(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let a = {
                            logging_params: i
                        };
                        return (null == t ? void 0 : t.track) && (a.track = G([t.track])[0]), this._playerClient.nextTrack(e, a)
                    })
                }
                previousTrack(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let a = {
                            logging_params: i
                        };
                        return (null == t ? void 0 : t.track) && (a.track = G([t.track])[0]), this._playerClient.previousTrack(e, a)
                    })
                }
                seek(e, t) {
                    return this._playerClient.seek(e, t)
                }
                setShuffle(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(i => this._playerClient.setShuffle(e, t, {
                        logging_params: i
                    }))
                }
                toggleShuffle(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.toggleShuffle(e, {
                        logging_params: t
                    }))
                }
                setVolume(e, t) {
                    return this._playerClient.setVolume(e, t)
                }
                logout(e) {
                    return this._playerClient.logout(e)
                }
                setRepeatMode(e, t) {
                    return this.getCurrentState().then(i => {
                        if (!i) return Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let s = this._playerClient,
                            r = i.disallows;
                        switch (e) {
                            case n.OFF:
                                if (r.toggling_repeat_context && r.toggling_repeat_track) return !1;
                                return s.setOptions({
                                    repeating_context: !!r.toggling_repeat_context && void 0,
                                    repeating_track: !!r.toggling_repeat_track && void 0
                                }, t);
                            case n.CONTEXT:
                                if (r.toggling_repeat_context) return !1;
                                return s.setOptions({
                                    repeating_context: !0,
                                    repeating_track: !!r.toggling_repeat_track && void 0
                                }, t);
                            case n.TRACK:
                                if (r.toggling_repeat_track) return !1;
                                return s.setOptions({
                                    repeating_context: !r.toggling_repeat_context || void 0,
                                    repeating_track: !0
                                }, t);
                            default:
                                return Promise.reject(TypeError("Unknown repeat mode."))
                        }
                    })
                }
                setPlaybackSpeed(e, t) {
                    return this.getCurrentState().then(i => i ? this._playerClient.setOptions({
                        playback_speed: e
                    }, t) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                register() {
                    return this._playerClient.register()
                }
                suppressEvents() {
                    this._suppressed = !0
                }
                unsuppressEvents() {
                    this._suppressed = !1, this._lastDeviceInfoData && this.emit("device_info_changed", this._lastDeviceInfoData), this._state && this.emit("state_changed", {
                        state: this._state
                    })
                }
                getQueueManager(e, t = {}) {
                    if (!this._queue) {
                        let i = t.reportInitial ? this._lastPlayerState : null;
                        this._queue = new j(Object.assign({
                            connectClient: this._playerClient,
                            initialContextPlayerState: i,
                            runner: e
                        }, t))
                    }
                    return this._queue
                }
                sendCustomSignal(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(a => this._playerClient.sendCustomSignal(t, {
                        parameters: null == i ? void 0 : i.parameters,
                        logging_params: a,
                        signal_id: e
                    }))
                }
                playAsNextInQueue(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(i => {
                        let a = tX(e);
                        return this._playerClient.playAsNextInQueue(a, t, {
                            logging_params: i
                        })
                    })
                }
                setModes(e, t, i) {
                    return this._setOptions({
                        modes: e
                    }, t, i)
                }
                setShuffleMode(e, t, i) {
                    return this.getCurrentState().then(s => {
                        var r, n;
                        let o, l = (null == s ? void 0 : s.disallows) || {};
                        if (null == i ? void 0 : i.contextURI) return o = {
                            shuffling_context: !!e,
                            modes: {
                                context_enhancement: e === y.SMART ? "RECOMMENDATION" : "NONE"
                            }
                        }, this._setOptions(o, t, i);
                        if (l.toggling_shuffle) return Promise.reject(new tN(a.HARMONY_OPERATION_FORBIDDEN, "Shuffle mode cannot be modified."));
                        if (e === y.SMART) {
                            if (null == (n = null == (r = l.setting_modes) ? void 0 : r.context_enhancement) ? void 0 : n.RECOMMENDATION) return Promise.reject(new tN(a.HARMONY_OPERATION_FORBIDDEN, "Setting shuffle mode to SMART is not allowed."));
                            o = {
                                shuffling_context: !0,
                                modes: {
                                    context_enhancement: "RECOMMENDATION"
                                }
                            }
                        } else o = {
                            shuffling_context: !!e,
                            modes: {
                                context_enhancement: "NONE"
                            }
                        };
                        return this._setOptions(o, t, i)
                    })
                }
                setSleepTimer(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(i => this._playerClient.setSleepTimer(e, t, {
                        logging_params: i
                    }))
                }
                shouldRedirectPlayerCommand() {
                    return this._socialConnectClient.shouldRedirect()
                }
            }
            var t0 = i(23454);
            ! function(e) {
                e.PREMIUM = "premium", e.TFT = "tft"
            }(L || (L = {}));
            let t1 = /connect-state\/v1\/cluster$/,
                t2 = /^([a-zA-Z0-9_%:-]{1,40}).*$/;

            function t4(e) {
                var t, i, a;
                return !!e.track && (null != (a = null == (i = null == (t = e.restrictions) ? void 0 : t.disallow_transferring_playback_reasons) ? void 0 : i.length) ? a : 0) === 0
            }
            let t5 = "::a_";
            ! function(e) {
                e.NOT_PLAYING_LOCALLY = "not_playing_locally", e.NOT_PLAYING_CONTEXT = "not_playing_context", e.NOT_PLAYING_TRACK = "not_playing_track", e.NOT_PLAYING_MEDIA = "not_playing_media", e.NO_PREV_TRACK = "no_prev_track", e.NO_NEXT_TRACK = "no_next_track", e.NO_SPECIFIC_TRACK = "no_specific_track", e.ALREADY_PAUSED = "already_paused", e.NOT_PAUSED = "not_paused", e.NARRATION = "narration", e.PLAYER_CONTEXT_DISALLOW = "context_player_disallow", e.MFT_DISALLOW = "mft_disallow", e.AD_DISALLOW = "ad_disallow", e.PROTOCOL_LIMITATIONS = "protocol_limitations", e.UNKNOWN = "unknown", e.ALREADY_PLAYING = "already_playing", e.THROTTLED = "throttled", e.ENDLESS_CONTEXT = "endless_context", e.UNSUPPORTED_VERSION = "unsupported_version"
            }(b || (b = {}));
            let t3 = {
                [b.AD_DISALLOW]: o.AD_PLAYING,
                [b.NARRATION]: o.NARRATION,
                [b.UNSUPPORTED_VERSION]: o.UNSUPPORTED_VERSION
            };

            function t8(e) {
                if (!e) return {
                    deviceId: null
                };
                let [t, i] = e.split(t5);
                return {
                    deviceId: t,
                    aliasId: i ? parseInt(i, 10) : void 0
                }
            }
            class t9 extends M.bk {
                constructor(e) {
                    super(), this._autoregister = !0, this._connectionId = "", this._localDeviceId = "", this._localObserverDeviceId = null, this._lastActiveDevice = null, this._lastKnownPlayerState = null, this._lastKnownDevices = [], this._localDevice = null, this._fetchedInitialState = !1, this._lastProcessedTimestamp = 0, this._descriptor = e.descriptor, this._transport = e.transport, this._tracker = e.tracker, this._endpoint = e.endpoint || "@webgate/connect-state", this._autoregister = !("autoregister" in e) || !!e.autoregister, this._onConnectionId = this._onConnectionId.bind(this), this._onClusterMessage = this._onClusterMessage.bind(this), this._awaitResponseWithAck = this._awaitResponseWithAck.bind(this), this._transport.on(this._transport.EVENT_CONNECTION_ID, e => {
                        this._onConnectionId(e.data.id)
                    }), this._transport.matchMessages(t1, this._onClusterMessage), this._descriptorPromise = Promise.resolve(this._descriptor).then(e => (this._localDeviceId = e.id || "", this._localObserverDeviceId = ("hobs_" + this._localDeviceId).replace(t2, "$1"), !0))
                }
                static create(e) {
                    return new t9(e)
                }
                _onConnectionId(e) {
                    this._connectionId = e, this._autoregister && this.register()
                }
                _onClusterMessage(e) {
                    let t = e.payloads && e.payloads[0];
                    if (!t) return;
                    let i = t.ack_id;
                    i && this._tracker.trackCommandAcknowledged(i), this._parseCluster(t.cluster)
                }
                _resolveTargetDevice(e) {
                    return this._descriptorPromise.then(() => {
                        let t = this._localDeviceId;
                        return e ? e === F ? t8(t) : t8(e) : t8(this._lastActiveDevice ? this._lastActiveDevice.id : t)
                    })
                }
                _makeEndpoint(e, t, i) {
                    return this._descriptorPromise.then(() => {
                        let a = this._localDeviceId;
                        return `${this._endpoint}/${e}/${t}/from/${a}/to/${i}`
                    })
                }
                _sendPlayerCommand(e, t = null, i = {}) {
                    var s, r, n;
                    i.endpoint = e;
                    let o = (null == (s = i.logging_params) ? void 0 : s.command_id) || tK();
                    if (i.logging_params = Object.assign(Object.assign({}, i.logging_params), {
                            command_id: o
                        }), null == (r = this._commandRedirector) ? void 0 : r.shouldRedirect()) {
                        let e = this._commandRedirector;
                        return this._descriptorPromise.then(() => e.redirect(i, this._localDeviceId)).then(e => {
                            if (200 === e.status) return !0;
                            if (404 === e.status || 410 === e.status) return !1;
                            let t = new tC(a.SOCIAL_CONNECT_FAILED_WITH_STATUS, `Social Connect command failed with status ${e.status}`);
                            throw t.status = e.status, t
                        })
                    }
                    this._tracker.startTracking({
                        commandId: o,
                        commandType: e,
                        interactionIds: null == (n = null == i ? void 0 : i.logging_params) ? void 0 : n.interaction_ids,
                        playOrigin: null == i ? void 0 : i.play_origin
                    });
                    let l = {
                        command: i
                    };
                    return this._resolveTargetDevice(t).then(e => {
                        if (!e.deviceId) throw new tN(a.CONNECTAPI_CLIENT_MISSING_DEVICE_ID, "Operation resulted in a null device id");
                        !l.target_alias_id && e.aliasId && (l.target_alias_id = e.aliasId);
                        let t = this._getTargetDeviceInfo(e.deviceId);
                        return this._tracker.trackDeviceInfo(o, t), this._makeEndpoint("v1", "player/command", e.deviceId)
                    }).then(e => this._sendRequest(t0.I.POST, e, l, o)).then(e => this._awaitResponseWithAck(o, e)).then(e => (this._tracker.logCommand(o), e)).catch(e => {
                        throw this._tracker.logCommand(o), e
                    })
                }
                _sendConnectCommand(e, t = null, i = {}) {
                    let s = "volume" === e ? t0.I.PUT : t0.I.POST,
                        r = "volume" === e || "logout" === e,
                        n = (null == i ? void 0 : i.command_id) || tK(),
                        o = i.interaction_id;
                    return this._tracker.startTracking({
                        commandId: n,
                        commandType: e,
                        interactionIds: o ? [o] : void 0
                    }), this._resolveTargetDevice(t).then(t => {
                        if (!t.deviceId) throw new tN(a.CONNECTAPI_CLIENT_MISSING_DEVICE_ID, "Operation resulted in a null device id");
                        t.aliasId && (r ? i.command_options = {
                            target_alias_id: t.aliasId
                        } : i.target_alias_id || (i.target_alias_id = t.aliasId));
                        let s = this._getTargetDeviceInfo(t.deviceId);
                        return this._tracker.trackDeviceInfo(n, s), this._makeEndpoint("v1", `connect/${e}`, t.deviceId)
                    }).then(e => this._sendRequest(s, e, i, n)).then(e => this._awaitResponseWithAck(n, e)).then(e => (this._tracker.logCommand(n), e)).catch(e => {
                        throw this._tracker.logCommand(n), e
                    })
                }
                _sendRequest(e, t, i, a) {
                    return this._tracker.trackRequestStart(a), this._transport.request(t, {
                        method: e,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        payload: i ? JSON.stringify(i) : void 0,
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).catch(e => Promise.reject(e))
                }
                _fetchCluster() {
                    this._transport.request(`${this._endpoint}/v1/cluster`, {
                        method: "GET",
                        responseType: "json"
                    }).then(e => {
                        200 === e.status && e.body && this._parseCluster(e.body)
                    }).catch(() => {})
                }
                _awaitResponseWithAck(e, t) {
                    var i, s;
                    if (this._tracker.trackRequestComplete(e, t), 404 === t.status) return this._fetchCluster(), Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_DEVICE, "No such device."));
                    let r = null == (i = t.body) ? void 0 : i.ack_id;
                    if (200 === t.status && r) {
                        if ((null == (s = this._localDevice) ? void 0 : s.hidden) !== !1) return Promise.resolve(!0);
                        let t = (0, U.u)();
                        return this._tracker.trackAcknowledgementRequired(e, r, t), t.promise.catch(() => !1)
                    }
                    return Promise.resolve(202 === t.status && !r)
                }
                _parseCluster(e) {
                    if (!e) return;
                    let t = parseInt(e.timestamp, 10);
                    this._lastProcessedTimestamp > t || (this._lastProcessedTimestamp = t, this._parseClusterDevices(e), this._parseClusterPlayerState(e))
                }
                _parseClusterDevices(e) {
                    var t;
                    let i = this._lastActiveDevice;
                    this._lastActiveDevice = null, this._lastKnownDevices = [], this._localDevice = null;
                    let a = [];
                    for (let t in e.devices) Object.prototype.hasOwnProperty.call(e.devices, t) && a.push(t);
                    if (a.sort(), a.length)
                        for (let i of a) {
                            let a = this._formatClusterDevice(e, i);
                            for (let i of (this._lastKnownDevices.push(...a), a)) i.is_active && (this._lastActiveDevice = i), i.local && (this._localDevice = i, this._deviceLicense = null == (t = e.devices[i.id]) ? void 0 : t.license)
                        }
                    if (!this._fetchedInitialState || !Y(this._lastActiveDevice, i)) {
                        let t = e.player_state,
                            a = t && t4(t);
                        this.emit("device_state_changed", {
                            deviceState: this._lastActiveDevice,
                            hasOrphanedState: !this._lastActiveDevice && !!a,
                            disappeared: !!i && !this._lastActiveDevice
                        })
                    }
                    this.emit("devices_changed", {
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    })
                }
                _shouldDisallowTransfer(e, t) {
                    var i, a, s;
                    let r = e.player_state;
                    if (!r) return null;
                    let {
                        track: n,
                        restrictions: l
                    } = r;
                    if (n) {
                        let e = (null == (i = n.metadata) ? void 0 : i["media.type"]) || (null == (a = n.metadata) ? void 0 : a.track_player),
                            r = null == (s = (0, ts.o_h)(n.uri)) ? void 0 : s.type;
                        if (e && "mixed" !== e || (e = "audio"), -1 === (t.capabilities.supported_types || []).indexOf(`${e}/${r}`)) return o.INCOMPATIBLE;
                        if (r === ts.NQG.MEDIA) return o.MEDIA_DISALLOW
                    }
                    if (l) {
                        let e = l.disallow_transferring_playback_reasons;
                        if (null == e ? void 0 : e.length)
                            for (let t of e) {
                                if (t3[t]) return t3[t] || null;
                                return o.UNSUPPORTED
                            }
                    }
                    let _ = e.active_device_id;
                    if (!t.can_play || _ === t.device_id) return o.UNAVAILABLE;
                    let u = e.devices[_];
                    return (null == u ? void 0 : u.license) === L.TFT && (t.license !== L.TFT || t.device_type === d.SMARTPHONE) ? o.PREMIUM_REQUIRED : null
                }
                _formatClusterDevice(e, t) {
                    let i = e.devices[t],
                        a = {};
                    if (i && Array.isArray(i.metadata))
                        for (let e = 0, t = i.metadata.length; e < t; e++) {
                            let t = i.metadata[e];
                            a[t.type] = t.metadata
                        }
                    let {
                        capabilities: s
                    } = i, r = this._shouldDisallowTransfer(e, i), n = {
                        hidden: !1,
                        id: i.device_id,
                        client_id: i.client_id,
                        is_active: i.device_id === e.active_device_id,
                        is_controllable: !!s.is_controllable,
                        is_observable: !!s.is_observable,
                        local: i.device_id === this._localDeviceId,
                        metadata: a,
                        name: i.name,
                        type: (i.device_type || d.UNKNOWN).toLowerCase(),
                        brand: i.brand,
                        model: i.model,
                        version: i.device_software_version,
                        volume: s.disable_volume ? -1 : i.volume / 65535 || 0,
                        capabilities: {
                            supports_lossless_audio: !!s.supports_lossless_audio,
                            supports_dj: !!s.supports_dj,
                            supports_remote_sleep_timer: !!s.supports_remote_sleep_timer
                        },
                        is_alias: !1,
                        is_alias_group: !1,
                        playback_features: {
                            hifi_status: s.supports_hifi
                        },
                        is_group: !!i.is_group,
                        is_being_activated: !1,
                        disallow_transfer_reason: r,
                        public_ip: i.public_ip,
                        is_same_network: i.is_same_network
                    };
                    if (!i.device_aliases) return [n];
                    let o = [];
                    for (let e in i.device_aliases) {
                        if (!Object.prototype.hasOwnProperty.call(i.device_aliases, e)) continue;
                        let t = i.device_aliases[e];
                        if (!t) continue;
                        let a = Object.assign(Object.assign({}, n), {
                            id: `${n.id}${t5}${t.id}`,
                            name: t.display_name,
                            is_alias: !0,
                            is_alias_group: i.is_group || t.is_group,
                            is_active: n.is_active && i.selected_alias_id === t.id,
                            is_group: !!t.is_group
                        });
                        o.push(a)
                    }
                    return o
                }
                _parseClusterPlayerState(e) {
                    this._lastKnownPlayerState = null;
                    let t = e.active_device_id,
                        i = t && e.devices[t],
                        a = e.player_state;
                    a && a.track && (i && i.capabilities && !i.capabilities.is_observable ? a = null : (!i && (a.is_paused = !0, a.restrictions && (delete a.restrictions.disallow_resuming_reasons, a.restrictions.disallow_pausing_reasons = ["already_paused"])), a.duration = parseInt(a.duration, 10), a.position = parseInt(a.position, 10), a.position_as_of_timestamp = parseInt(a.position_as_of_timestamp, 10), a.timestamp = parseInt(a.timestamp, 10), a.next_tracks = a.next_tracks || [], a.prev_tracks = a.prev_tracks || []), this._lastKnownPlayerState = a);
                    let s = !i && !!this._lastKnownPlayerState;
                    s && a && !t4(a) && (this._lastKnownPlayerState = null, s = !1), this.emit("player_state_changed", {
                        playerState: this._lastKnownPlayerState,
                        orphaned: s,
                        isLocal: !!t && t === this._localDeviceId
                    })
                }
                _register() {
                    this._fetchedInitialState = !1;
                    let e = `${this._endpoint}/v1/devices/${this._localObserverDeviceId}`;
                    return this._connectionId || Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_CONNECTION_ID, "Cannot register: no connection id.")), this._transport.request(e, {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "X-Spotify-Connection-Id": this._connectionId
                        },
                        payload: JSON.stringify({
                            member_type: "CONNECT_STATE",
                            device: {
                                device_info: {
                                    capabilities: {
                                        can_be_player: !1,
                                        hidden: !0,
                                        needs_full_player_state: !0
                                    }
                                }
                            }
                        }),
                        responseType: "json"
                    }).then(e => {
                        429 === e.status ? this.emit("max_subscriptions_reached", {
                            error: new tN(a.CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED, "Max connections reached")
                        }) : 200 === e.status && (this.emit("registered", null), e.body && (this._parseCluster(e.body), this._fetchedInitialState = !0)), (429 === e.status || 408 === e.status) && (this._lastKnownDevices = this._lastKnownDevices.map(e => (e.is_being_activated = !1, e)), this._localDevice && (this._localDevice.is_being_activated = !1), this.emit("devices_changed", {
                            devices: this._lastKnownDevices,
                            localDevice: this._localDevice
                        }))
                    })
                }
                _getTargetDeviceInfo(e) {
                    let t = null;
                    for (let i of this._lastKnownDevices)
                        if (i.id === e) {
                            t = i;
                            break
                        }
                    return t
                }
                register() {
                    return this._connectionId ? this._descriptorPromise.then(this._register.bind(this)) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_CONNECTION_ID, "Cannot register: no connection id."))
                }
                deregister() {
                    this._tracker.cleanup();
                    let e = `${this._endpoint}/v1/devices/${this._localObserverDeviceId}`;
                    return this._transport.request(e, {
                        method: "DELETE",
                        responseType: "json"
                    }).then(e => {
                        200 === e.status && this.emit("deregistered", null)
                    })
                }
                getDevices() {
                    return this._fetchedInitialState ? Promise.resolve({
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    }) : new Promise(e => {
                        this.once("device_state_changed", () => {
                            e({
                                devices: this._lastKnownDevices,
                                localDevice: this._localDevice
                            })
                        })
                    })
                }
                getActiveDevice() {
                    return this._fetchedInitialState ? Promise.resolve(this._lastActiveDevice) : new Promise(e => {
                        this.once("device_state_changed", t => {
                            e(t.data.deviceState)
                        })
                    })
                }
                getDeviceLicense() {
                    return this._deviceLicense || null
                }
                getContextPlayerState() {
                    return this._fetchedInitialState ? Promise.resolve(this._lastKnownPlayerState) : new Promise(e => {
                        this.once("player_state_changed", t => {
                            e(t.data.playerState)
                        })
                    })
                }
                play(e, t = null) {
                    return e ? this._sendPlayerCommand("play", t, e) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_INVALID_ARGUMENTS, "Descriptor is required for play commands"))
                }
                updateCurrentContext(e = null, t) {
                    return this.getContextPlayerState().then(i => i ? i.session_id ? i.context_url || t.forceNonUpdateable ? this._sendPlayerCommand("update_context", e, {
                        context: {
                            url: t.contextURI ? `context://${t.contextURI}` : i.context_url || `context://${i.context_uri}`
                        },
                        session_id: i.session_id
                    }) : Promise.resolve(!1) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_SESSION_ID, "The current state does not have a session id")) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                setQueue(e, t) {
                    return this._sendPlayerCommand("set_queue", t, e)
                }
                addToQueue(e, t) {
                    return this._sendPlayerCommand("add_to_queue", t, {
                        track: e
                    })
                }
                transfer(e, t = {}) {
                    var i, a;
                    this._lastKnownDevices = this._lastKnownDevices.map(t => (t.is_being_activated = t.id === e, t)), this._localDevice && (this._localDevice.is_being_activated = e === F), this.emit("devices_changed", {
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    });
                    let s = {
                        restore_paused: "restore"
                    };
                    return "paused" in t && (s.restore_paused = t.paused ? "pause" : "resume"), this._sendConnectCommand("transfer", e || F, {
                        transfer_options: s,
                        interaction_id: null == (i = t.logging_params) ? void 0 : i.interaction_ids[0],
                        command_id: null == (a = t.logging_params) ? void 0 : a.command_id
                    })
                }
                pause(e, t) {
                    return this._sendPlayerCommand("pause", e, t)
                }
                resume(e, t) {
                    return this._sendPlayerCommand("resume", e, t)
                }
                togglePlay(e, t) {
                    return this.getContextPlayerState().then(i => i ? i.is_paused ? this.resume(e, t) : this.pause(e, t) : Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                nextTrack(e, t) {
                    return this._sendPlayerCommand("skip_next", e, t)
                }
                previousTrack(e, t) {
                    return this._sendPlayerCommand("skip_prev", e, t)
                }
                seek(e, t) {
                    return isNaN(e) || e < 0 ? Promise.reject(new tN(a.CONNECTAPI_CLIENT_INVALID_POSITION, "Invalid position.")) : this._sendPlayerCommand("seek_to", t, {
                        value: e
                    })
                }
                setShuffle(e, t, i) {
                    return this._sendPlayerCommand("set_shuffling_context", t, Object.assign({
                        value: !!e
                    }, i))
                }
                toggleShuffle(e, t) {
                    return this.getContextPlayerState().then(i => {
                        if (!i) return Promise.reject(new tN(a.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let s = i.options && i.options.shuffling_context;
                        return this.setShuffle(!s, e, t)
                    })
                }
                setRepeatingContext(e, t) {
                    return this._sendPlayerCommand("set_repeating_context", t, {
                        value: e
                    })
                }
                setRepeatingTrack(e, t) {
                    return this._sendPlayerCommand("set_repeating_track", t, {
                        value: !!e
                    })
                }
                setOptions(e, t, i) {
                    return this._sendPlayerCommand("set_options", t, Object.assign(Object.assign({}, e), i))
                }
                setVolume(e, t) {
                    if (isNaN(e) || e < 0) return Promise.reject(new tN(a.CONNECTAPI_CLIENT_INVALID_VOLUME, "Invalid volume."));
                    let i = Math.round(65535 * e);
                    return this._sendConnectCommand("volume", t, {
                        volume: i
                    })
                }
                logout(e) {
                    return this._tracker.cleanup(), this._sendConnectCommand("logout", e)
                }
                sendCustomSignal(e, t) {
                    return this._sendPlayerCommand("signal", e, t)
                }
                playAsNextInQueue(e, t, i) {
                    return this._sendPlayerCommand("play_as_next_in_queue", t, Object.assign({
                        tracks: e
                    }, i))
                }
                setSleepTimer(e, t, i) {
                    return this._sendPlayerCommand("set_sleep_timer", t, Object.assign({
                        timer_type: e
                    }, i))
                }
                setCommandRedirector(e) {
                    this._commandRedirector = e
                }
            }! function(e) {
                e.SUCCESS = "success", e.ACK_TIMEOUT = "ack_timeout", e.HTTP_ERROR = "http_error", e.SYSTEM_ERROR = "system_error", e.PLAYER_ERROR = "player_error", e.UNKNOWN_ERROR = "unknown_error"
            }(D || (D = {}));
            class t6 {
                constructor(e) {
                    this._commandDataMap = {}, this._orphanedAcknowledgements = {}, this._logger = e
                }
                _finalizeData(e) {
                    if (!e.response) return D.UNKNOWN_ERROR;
                    let t = e.response.status,
                        i = e.response.getStatusFamily();
                    return 403 === t ? (e.response.body && (e.httpResponse = JSON.stringify(e.response.body)), D.PLAYER_ERROR) : 200 === t && e.ackId && null === e.timings.acknowledgement.end ? D.ACK_TIMEOUT : i === eF.t.SUCCESS ? D.SUCCESS : i === eF.t.CONNECTION_ERROR ? D.SYSTEM_ERROR : t ? (e.response.body && (e.httpResponse = JSON.stringify(e.response.body)), D.HTTP_ERROR) : D.UNKNOWN_ERROR
                }
                _calculateTimings(e) {
                    let t = {};
                    return e.request.start && e.request.end && (t.msRequestLatency = (0, w.r)(e.request.start, e.request.end)), e.acknowledgement.start && e.acknowledgement.end && (t.msAckDuration = (0, w.r)(e.acknowledgement.start, e.acknowledgement.end)), t
                }
                _waitingOnCommands() {
                    let e = !1;
                    for (let t in this._commandDataMap) {
                        if (!Object.prototype.hasOwnProperty.call(this._commandDataMap, t)) continue;
                        let i = this._commandDataMap[t];
                        if (i && !i.response) {
                            e = !0;
                            break
                        }
                    }
                    return e
                }
                startTracking({
                    commandId: e,
                    commandType: t,
                    interactionIds: i,
                    playOrigin: a
                }) {
                    e && (this._commandDataMap[e] = {
                        commandType: t,
                        ackId: null,
                        interactionIds: (i || []).join(","),
                        playOrigin: a ? JSON.stringify(a) : void 0,
                        timings: {
                            request: {
                                start: null,
                                end: null
                            },
                            acknowledgement: {
                                start: null,
                                end: null
                            }
                        }
                    })
                }
                trackDeviceInfo(e, t) {
                    let i = this._commandDataMap[e];
                    i && t && (i.deviceInfo = {
                        id: t.id,
                        client_id: t.client_id,
                        target_device_brand: t.brand,
                        target_device_model: t.model
                    })
                }
                trackRequestStart(e) {
                    let t = this._commandDataMap[e];
                    if (!t) return;
                    let i = (0, w.X)();
                    t.timings.request.start = i, t.timings.acknowledgement.start = i
                }
                trackRequestComplete(e, t) {
                    let i = this._commandDataMap[e];
                    i && (i.response = t, i.timings.request.end = (0, w.X)())
                }
                trackAcknowledgementRequired(e, t, i) {
                    let s = this._commandDataMap[e],
                        r = this._orphanedAcknowledgements[t];
                    if (s)
                        if (s.ackId = t, r) s.timings.acknowledgement.end = r.ackTimeMs, r.deferredPromise.resolve(!0), delete this._orphanedAcknowledgements[t];
                        else {
                            let e = setTimeout(() => {
                                i.reject(new tN(a.CONNECTAPI_CLIENT_ACK_TIMEOUT, "Command didn't receive an acknowledgement within 30000ms"))
                            }, 3e4);
                            s.deferredPromise = {
                                promise: i.promise.then(t => (clearTimeout(e), t)).catch(() => (clearTimeout(e), !1)),
                                resolve: i.resolve,
                                reject: i.reject
                            }, s.ackTimeoutId = e
                        }
                }
                trackCommandAcknowledged(e) {
                    let t = (0, w.X)();
                    for (let i in this._commandDataMap) {
                        if (!Object.prototype.hasOwnProperty.call(this._commandDataMap, i)) continue;
                        let a = this._commandDataMap[i];
                        if (a && a.ackId === e) {
                            a.deferredPromise && a.deferredPromise.resolve(!0), a.timings.acknowledgement.end = t;
                            return
                        }
                    }
                    this._waitingOnCommands() && (this._orphanedAcknowledgements[e] = {
                        deferredPromise: (0, U.u)(),
                        ackTimeMs: t
                    }, setTimeout(() => {
                        this._orphanedAcknowledgements[e] && delete this._orphanedAcknowledgements[e]
                    }, 6e4))
                }
                logCommand(e) {
                    var t;
                    let i = this._commandDataMap[e];
                    if (!i) return Promise.resolve();
                    let a = this._finalizeData(i),
                        {
                            msAckDuration: s,
                            msRequestLatency: r
                        } = this._calculateTimings(i.timings),
                        n = {
                            command_id: e,
                            command_type: i.commandType,
                            ms_ack_duration: null != s ? s : null,
                            ms_request_latency: r,
                            interaction_ids: i.interactionIds,
                            play_origin: i.playOrigin,
                            result: a,
                            http_response: i.httpResponse,
                            http_status_code: null == (t = i.response) ? void 0 : t.status
                        };
                    i.deviceInfo && (n.target_device_id = i.deviceInfo.id, n.target_device_brand = i.deviceInfo.target_device_brand, n.target_device_model = i.deviceInfo.target_device_model, n.target_device_client_id = i.deviceInfo.client_id);
                    let o = () => {
                        delete this._commandDataMap[e]
                    };
                    return this._logger.logJSSDKConnectCommand(n).then(o, o)
                }
                cleanup() {
                    for (let e in this._commandDataMap) {
                        if (!Object.prototype.hasOwnProperty.call(this._commandDataMap, e)) continue;
                        let t = this._commandDataMap[e];
                        t && (t.ackTimeoutId && clearTimeout(t.ackTimeoutId), t.deferredPromise && t.deferredPromise.resolve(!0)), delete this._commandDataMap[e]
                    }
                    this._orphanedAcknowledgements = {}
                }
            }! function(e) {
                e.PLAYER_INITIALIZATION_DONE = "PLAYER_INITIALIZATION_DONE", e.PLAYER_INITIALIZATION_FAILED = "PLAYER_INITIALIZATION_FAILED", e.STATE_CHANGED = "STATE_CHANGED", e.AUTOPLAY_FAILED = "AUTOPLAY_FAILED", e.BEFORE_LIST_CHANGE = "BEFORE_LIST_CHANGE", e.BEFORE_NEXT = "BEFORE_NEXT", e.BEFORE_PREVIOUS = "BEFORE_PREVIOUS", e.BEFORE_TRACK_LOAD = "BEFORE_TRACK_LOAD", e.BEFORE_PLAYER_LOAD = "BEFORE_PLAYER_LOAD", e.BUFFER_STALLED = "BUFFER_STALLED", e.BUFFERING_START = "BUFFERING_START", e.BUFFERING_END = "BUFFERING_END", e.REBUFFERING_START = "REBUFFERING_START", e.REBUFFERING_END = "REBUFFERING_END", e.CAPPED = "CAPPED", e.CLEARED = "CLEARED", e.DISPLAYED_CUES_CHANGED = "DISPLAYED_CUES_CHANGED", e.SUBTITLE_LANGUAGES_LOADED = "SUBTITLE_LANGUAGES_LOADED", e.DURATION_CHANGED = "DURATION_CHANGED", e.ERROR = "ERROR", e.ERROR_SYNC = "ERROR_SYNC", e.FIRST_BYTES = "FIRST_BYTES", e.LIST_CHANGED = "LIST_CHANGED", e.LIST_ENDED = "LIST_ENDED", e.LOAD_VIDEO = "LOAD_VIDEO", e.MAX_LIST_ERRORS_REACHED = "MAX_LIST_ERRORS_REACHED", e.PAUSED = "PAUSED", e.PLAYING = "PLAYING", e.RESUME_FULFILLED = "RESUME_FULFILLED", e.PAUSE_FULFILLED = "PAUSE_FULFILLED", e.PLAYED_THRESHOLD_REACHED = "PLAYED_THRESHOLD_REACHED", e.POSITION_CHANGED = "POSITION_CHANGED", e.PROGRESS = "PROGRESS", e.SEEKING = "SEEKING", e.REPEAT_MODE_CHANGED = "REPEAT_MODE_CHANGED", e.SHUFFLE_CHANGED = "SHUFFLE_CHANGED", e.BEFORE_STOP = "BEFORE_STOP", e.STOPPED = "STOPPED", e.STOPPED_VIDEO = "STOPPED_VIDEO", e.TRACKING_DATA_CREATED = "TRACKING_DATA_CREATED", e.TRACKING_DATA_FINALIZED = "TRACKING_DATA_FINALIZED", e.TRACK_ENDED = "TRACK_ENDED", e.TRACK_LOADED = "TRACK_LOADED", e.TRACK_TIMEOUT = "TRACK_TIMEOUT", e.TRACK_UNPLAYABLE = "TRACK_UNPLAYABLE", e.VOLUME_CHANGED = "VOLUME_CHANGED", e.VIDEO_ELEMENT_APPENDED = "VIDEO_ELEMENT_APPENDED", e.VIDEO_ELEMENT_REMOVED = "VIDEO_ELEMENT_REMOVED", e.SPEED_CHANGED = "SPEED_CHANGED", e.MUTED_CHANGED = "MUTED_CHANGED", e.PLAYING_PROFILE_CHANGED = "PLAYING_PROFILE_CHANGED", e.MEDIA_PLAYBACK_MODE_CHANGED = "MEDIA_PLAYBACK_MODE_CHANGED", e.VISIBILITY_CHANGED = "VISIBILITY_CHANGED", e.VIDEO_VISIBILITY_CHANGED = "VIDEO_VISIBILITY_CHANGED", e.VIDEO_SURFACE_CHANGED = "VIDEO_SURFACE_CHANGED", e.SEEK_PANELS_LOADED = "SEEK_PANELS_LOADED", e.REPORTING_START = "REPORTING_START", e.REPORTING_FIRST_QUARTILE = "REPORTING_FIRST_QUARTILE", e.REPORTING_MIDPOINT = "REPORTING_MIDPOINT", e.REPORTING_THIRD_QUARTILE = "REPORTING_THIRD_QUARTILE", e.REPORTING_COMPLETE = "REPORTING_COMPLETE", e.REPORTING_PAUSE = "REPORTING_PAUSE", e.REPORTING_RESUME = "REPORTING_RESUME", e.REPORTING_CREATIVE_VIEW = "REPORTING_CREATIVE_VIEW", e.REPORTING_ERROR = "REPORTING_ERROR"
            }(O || (O = {}));
            let t7 = {
                MP3: eG.o.MP3,
                MP4: eG.o.MP4,
                MP4_DUAL: eG.o.MP4_DUAL,
                MP4_CBCS: eG.o.MP4_CBCS,
                MP4_FLAC: eG.o.MP4_FLAC,
                MANIFEST_ID: eG.o.MANIFEST_ID,
                AD_MANIFEST: eG.o.AD_MANIFEST,
                GENERIC_MEDIA: eG.o.GENERIC_MEDIA
            };
            class ie {
                constructor(e) {
                    var t, i, a, s, r, n, o, l;
                    if (this.isAd = !1, !e.uri) throw TypeError("Missing required `uri` option.");
                    if (!e.fileId && !(null != (t = e.url) ? t : e.resolvedURL)) throw TypeError("Missing: provide either fileId or url");
                    this.uri = e.uri, this.playableURI = this.uri, this.fileId = e.fileId || "", this.playable = null == (i = e.playable) || i, this.mediaType = e.mediaType || "audio", this.metadata = e.metadata || {}, this.url = null != (a = e.url) ? a : e.resolvedURL, this.noManifest = null != (s = e.noManifest) ? s : !!this.url, this.noAuth = null != (r = e.noAuth) && r, this.preloadedManifest = e.preloadedManifest, this.licenseEndpoint = e.licenseEndpoint, this.fileFormat = e.fileFormat, this.poster = e.poster, this.options = e.options, this.audioGain = e.audioGain, this.mimeType = e.mimeType, this.contentType = e.contentType;
                    let {
                        format: _
                    } = e;
                    if (_)
                        if (Object.prototype.hasOwnProperty.call(t7, _)) this.format = t7[_];
                        else throw TypeError("Invalid `format` option.");
                    else this.format = this.url && !this.fileId ? eG.o.GENERIC_MEDIA : eG.o.MP4;
                    this.logData = Object.assign(Object.assign({}, e.logData), {
                        noLog: !1,
                        noTSV: null == (o = null == (n = e.logData) ? void 0 : n.noTSV) || o,
                        noStats: !1,
                        playbackId: (e => e && e.length > 0 ? e : ea(32))(null == (l = e.logData) ? void 0 : l.playbackId)
                    })
                }
                static create(e) {
                    return new ie(e)
                }
            }
            class it {
                constructor(e) {
                    this._index = -1, this._tracks = [], this._tracks = e.tracks
                }
                static create(e) {
                    let t = [];
                    for (let i of e.tracks) i instanceof ie ? t.push(i) : t.push(ie.create(i));
                    return new it({
                        tracks: t
                    })
                }
                startAt(e) {
                    return e > this._tracks.length || e < 0 ? this._index = -1 : this._index = e - 1, Promise.resolve(eH.T.SUCCESS)
                }
                next(e, t) {
                    let i = this._index + 1;
                    if (i >= this._tracks.length) return Promise.resolve(e.listConstants.LIST_END);
                    let a = this._tracks[i];
                    return (t || (this._index = i), a) ? Promise.resolve(a) : Promise.reject(h.NULL_VALUE)
                }
                peekNext(e) {
                    return this.next(e, !0)
                }
                allowSeeking() {
                    return !0
                }
                previous(e) {
                    let t = this._index - 1;
                    if (t < 0) return Promise.resolve(e.listConstants.LIST_START);
                    let i = this._tracks[t];
                    return (this._index = t, i) ? Promise.resolve(i) : Promise.reject(h.NULL_VALUE)
                }
                setShuffle() {
                    return Promise.resolve(eH.T.SUCCESS)
                }
                setRepeatMode() {
                    return Promise.resolve(eH.T.SUCCESS)
                }
            }
            class ii extends M.bk {
                constructor(e) {
                    super(), this._playerPromise = e.playerPromise, this._listPlayer = e.listPlayer, this._transport = e.transport, this._autoActivateElement = !!e.autoActivateElement, this._init()
                }
                static create(e) {
                    return new ii(e)
                }
                _init() {
                    let e = this._listPlayer;
                    this.proxyEmitAll(e, {
                        [ef.J.LIST_PLAYER_AUTOPLAY_FAILED]: O.AUTOPLAY_FAILED,
                        [ef.J.LIST_PLAYER_BEFORE_LIST_CHANGE]: O.BEFORE_LIST_CHANGE,
                        [ef.J.LIST_PLAYER_BUFFER_STALLED]: O.BUFFER_STALLED,
                        [ef.J.LIST_PLAYER_BUFFERING_START]: O.BUFFERING_START,
                        [ef.J.LIST_PLAYER_BUFFERING_END]: O.BUFFERING_END,
                        [ef.J.LIST_PLAYER_REBUFFERING_START]: O.REBUFFERING_START,
                        [ef.J.LIST_PLAYER_REBUFFERING_END]: O.REBUFFERING_END,
                        [ef.J.LIST_PLAYER_CLEARED]: O.CLEARED,
                        [ef.J.LIST_PLAYER_DURATION_CHANGED]: O.DURATION_CHANGED,
                        [ef.J.LIST_PLAYER_ERROR]: O.ERROR,
                        [ef.J.LIST_PLAYER_LIST_CHANGED]: O.LIST_CHANGED,
                        [ef.J.LIST_PLAYER_LIST_ENDED]: O.LIST_ENDED,
                        [ef.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]: O.MAX_LIST_ERRORS_REACHED,
                        [ef.J.LIST_PLAYER_PAUSED]: O.PAUSED,
                        [ef.J.LIST_PLAYER_PLAYING]: O.PLAYING,
                        [ef.J.LIST_PLAYER_RESUME_FULFILLED]: O.RESUME_FULFILLED,
                        [ef.J.LIST_PLAYER_PAUSE_FULFILLED]: O.PAUSE_FULFILLED,
                        [ef.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]: O.PLAYED_THRESHOLD_REACHED,
                        [ef.J.LIST_PLAYER_POSITION_CHANGED]: O.POSITION_CHANGED,
                        [ef.J.LIST_PLAYER_PROGRESS]: O.PROGRESS,
                        [ef.J.LIST_PLAYER_REPEAT_MODE_CHANGED]: O.REPEAT_MODE_CHANGED,
                        [ef.J.LIST_PLAYER_SEEKING]: O.SEEKING,
                        [ef.J.LIST_PLAYER_SHUFFLE_CHANGED]: O.SHUFFLE_CHANGED,
                        [ef.J.LIST_PLAYER_BEFORE_STOP]: O.BEFORE_STOP,
                        [ef.J.LIST_PLAYER_STOPPED]: O.STOPPED,
                        [ef.J.LIST_PLAYER_TRACKING_DATA_CREATED]: O.TRACKING_DATA_CREATED,
                        [ef.J.LIST_PLAYER_TRACKING_DATA_FINALIZED]: O.TRACKING_DATA_FINALIZED,
                        [ef.J.LIST_PLAYER_TRACK_ENDED]: O.TRACK_ENDED,
                        [ef.J.LIST_PLAYER_TRACK_LOADED]: O.TRACK_LOADED,
                        [ef.J.LIST_PLAYER_TRACK_TIMEOUT]: O.TRACK_TIMEOUT,
                        [ef.J.LIST_PLAYER_TRACK_UNPLAYABLE]: O.TRACK_UNPLAYABLE,
                        [ef.J.LIST_PLAYER_VOLUME_CHANGED]: O.VOLUME_CHANGED,
                        [ef.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]: O.VIDEO_ELEMENT_APPENDED,
                        [ef.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: O.VIDEO_ELEMENT_REMOVED,
                        [ef.J.PLAYER_DISPLAYED_CUES_CHANGED]: O.DISPLAYED_CUES_CHANGED,
                        [ef.J.PLAYER_SUBTITLE_LANGUAGES_LOADED]: O.SUBTITLE_LANGUAGES_LOADED,
                        [ef.J.PLAYER_PLAYBACK_SPEED_CHANGED]: O.SPEED_CHANGED,
                        [ef.J.PLAYER_MUTED_CHANGED]: O.MUTED_CHANGED,
                        [ef.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: O.PLAYING_PROFILE_CHANGED,
                        [ef.J.LIST_PLAYER_FIRST_BYTES]: O.FIRST_BYTES,
                        [ef.J.LIST_PLAYER_BEFORE_PLAYER_LOAD]: O.BEFORE_PLAYER_LOAD,
                        [ef.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: O.MEDIA_PLAYBACK_MODE_CHANGED,
                        [ef.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: O.VIDEO_VISIBILITY_CHANGED,
                        [ef.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: O.VIDEO_SURFACE_CHANGED,
                        [ef.J.LIST_PLAYER_SEEK_PANELS_LOADED]: O.SEEK_PANELS_LOADED
                    }), this.proxyEmitAllSync(e, {
                        [ef.J.LIST_PLAYER_BEFORE_NEXT]: O.BEFORE_NEXT,
                        [ef.J.LIST_PLAYER_BEFORE_PREVIOUS]: O.BEFORE_PREVIOUS,
                        [ef.J.LIST_PLAYER_BEFORE_TRACK_LOAD]: O.BEFORE_TRACK_LOAD,
                        [ef.J.LIST_PLAYER_ERROR_SYNC]: O.ERROR_SYNC,
                        [ef.J.REPORTING_START]: O.REPORTING_START,
                        [ef.J.REPORTING_FIRST_QUARTILE]: O.REPORTING_FIRST_QUARTILE,
                        [ef.J.REPORTING_MIDPOINT]: O.REPORTING_MIDPOINT,
                        [ef.J.REPORTING_THIRD_QUARTILE]: O.REPORTING_THIRD_QUARTILE,
                        [ef.J.REPORTING_COMPLETE]: O.REPORTING_COMPLETE,
                        [ef.J.REPORTING_PAUSE]: O.REPORTING_PAUSE,
                        [ef.J.REPORTING_RESUME]: O.REPORTING_RESUME,
                        [ef.J.REPORTING_CREATIVE_VIEW]: O.REPORTING_CREATIVE_VIEW,
                        [ef.J.REPORTING_ERROR]: O.REPORTING_ERROR
                    }), this._emitStateChanged = this._emitStateChanged.bind(this), this.on(O.CLEARED, this._emitStateChanged), this.on(O.PAUSED, this._emitStateChanged), this.on(O.PLAYING, this._emitStateChanged), this.on(O.POSITION_CHANGED, this._emitStateChanged), this.on(O.STOPPED, this._emitStateChanged), this.on(O.LIST_CHANGED, this._emitStateChanged), this.on(O.VOLUME_CHANGED, this._emitStateChanged), this.on(O.SPEED_CHANGED, this._emitStateChanged), this.on(O.MUTED_CHANGED, this._emitStateChanged), this.on(O.TRACK_LOADED, this._emitStateChanged), this.on(O.DURATION_CHANGED, this._emitStateChanged), this.on(O.REBUFFERING_START, this._emitStateChanged), this.on(O.REBUFFERING_END, this._emitStateChanged), this.on(O.PLAYING_PROFILE_CHANGED, this._emitStateChanged), this._playerPromise.then(() => this.emit(O.PLAYER_INITIALIZATION_DONE, null)).catch(e => this.emit(O.PLAYER_INITIALIZATION_FAILED, {
                        error: e
                    })), this._transport.on(k.TransportEvent.BEFORE_ONLINE_DISCONNECT, e => {
                        e.data.awaitPromise(this._listPlayer.stop(l.END_PLAY).catch(e => {}))
                    })
                }
                _emitStateChanged() {
                    this._listPlayer.getState().then(e => {
                        this.emit(O.STATE_CHANGED, {
                            state: e
                        })
                    })
                }
                playTracks(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), new Promise(t => {
                        t(it.create({
                            tracks: e
                        }))
                    }).then(e => this._listPlayer.play(e, t))
                }
                playList(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), this._listPlayer.play(e, t)
                }
                getState() {
                    return this.getCurrentState()
                }
                getCurrentState() {
                    return this._listPlayer.getState()
                }
                pause() {
                    return this._listPlayer.pause()
                }
                resume() {
                    return this._listPlayer.resume()
                }
                togglePlay() {
                    return this._listPlayer.togglePlay()
                }
                stop() {
                    return this._listPlayer.stop(l.END_PLAY)
                }
                seek(e) {
                    return this._listPlayer.seek(e)
                }
                nextTrack() {
                    return this._listPlayer.next(l.FORWARD_BUTTON)
                }
                previousTrack() {
                    return this._listPlayer.previous(l.BACK_BUTTON)
                }
                getVolume() {
                    return this._listPlayer.getVolume()
                }
                setVolume(e) {
                    return this._listPlayer.setVolume(e)
                }
                setPlaybackSpeed(e) {
                    return this._listPlayer.setPlaybackSpeed(e)
                }
                setMuted(e) {
                    return this._listPlayer.setMuted(e)
                }
                activateElement() {
                    return this._listPlayer.activateElement()
                }
                preloadTrack(e) {
                    return this._listPlayer.preloadTrack(e)
                }
                hideSubtitles() {
                    return this._listPlayer.hideSubtitles()
                }
                showSubtitles() {
                    return this._listPlayer.showSubtitles()
                }
                getSubtitleLanguages() {
                    return this._listPlayer.getSubtitleLanguages()
                }
                setSubtitleLanguage(e) {
                    return this._listPlayer.setSubtitleLanguage(e)
                }
                areSubtitlesShown() {
                    return this._listPlayer.areSubtitlesShown()
                }
                getActiveSubtitleLanguage() {
                    return this._listPlayer.getActiveSubtitleLanguage()
                }
                getMediaConfig() {
                    return this._listPlayer.getMediaConfig()
                }
                deactivateSubtitleEvents() {
                    return this._listPlayer.deactivateCueEvents()
                }
                activateSubtitleEvents() {
                    return this._listPlayer.activateCueEvents()
                }
                setMediaPlaybackMode(e) {
                    return this._listPlayer.setMediaPlaybackMode(e)
                }
                setPlayerVisibility(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setIsVideoVisible(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setVideoSurface(e) {
                    return this._listPlayer.setVideoSurface(e)
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
                resolveTrack(e, t) {
                    return ti(this._transport.toPublic(), e, t)
                }
                getSeekPanels() {
                    return this._listPlayer.getSeekPanels()
                }
                getVideoProfiles() {
                    return this._listPlayer.getVideoVariants()
                }
                setVideoResolution(e) {
                    return this._listPlayer.setVideoResolution(e)
                }
                setMediaPlaybackQuality(e) {
                    return this._listPlayer.setMediaPlaybackQuality(e)
                }
            }
            Object.assign(Object.assign({}, k.TransportErrors), C.I);
            let ia = ie.create,
                is = it.create;

            function ir(e) {
                var t, i, a, s, r, n, o;
                if (void 0 !== e.sdkNamePrefix && !/^[a-z0-9][a-z0-9._-]*$/i.test(e.sdkNamePrefix)) throw TypeError("sdkNamePrefix must start with an alphanumeric character and contain only [a-z0-9._-].");
                let l = e.sdkNamePrefix ? `${e.sdkNamePrefix}-` : "",
                    _ = `${l}overture:${J.version}`,
                    {
                        transport: d,
                        autoActivateElement: u,
                        config: c
                    } = e,
                    h = null == c ? void 0 : c.mux,
                    p = e$(Object.assign(Object.assign({}, c), {
                        loggerOptions: {
                            platform: e.platform_identifier,
                            disableMux: null == (i = null != (t = null == h ? void 0 : h.disable) ? t : null == c ? void 0 : c.disableMux) || i,
                            muxEnvKey: null != (a = null == h ? void 0 : h.envKey) ? a : null == c ? void 0 : c.muxEnvKey,
                            muxCustomDimensions: null == h ? void 0 : h.customDimensions,
                            deviceInfo: null != (s = null == h ? void 0 : h.deviceInfo) ? s : null == (r = null == c ? void 0 : c.loggerOptions) ? void 0 : r.deviceInfo
                        },
                        sdkId: _,
                        transport: d.toPublic(),
                        audioProcessorOptions: {
                            disable: null == (o = null == (n = null == c ? void 0 : c.audioProcessorOptions) ? void 0 : n.disable) || o
                        }
                    })).then(e => e.player),
                    m = eq.create({
                        trackPlayer: p
                    });
                return e.enableMediaPlaybackReporting && te(m, function(e) {
                    let t = new ec(e);
                    return {
                        logMediaPlaybackEvents: (e, i) => (null == i ? void 0 : i.teardown) ? t.sendLog("/v1/msg/media_playback_event_v2", {
                            events: e.events
                        }, {
                            keepalive: !0
                        }) : t.sendLog("/v1/msg/batch", {
                            type: "media_playback_event_v2",
                            message: {
                                events: e.events
                            }
                        }, {
                            batch: !0
                        })
                    }
                }({
                    transport: d.toPublic(),
                    sdkId: _,
                    platform: e.platform_identifier
                }), !0), ii.create({
                    listPlayer: m,
                    playerPromise: p,
                    transport: d,
                    autoActivateElement: u
                })
            }

            function io(e) {
                var t, i, a, s;
                let r, n = e.transport;
                if (!n) throw TypeError("No Transport instance provided");
                let o = (s = Object.assign(Object.assign({}, e.client), {
                        transport: n,
                        hidden: !!e.hidden,
                        playTokenLostBehavior: e.playTokenLostBehavior || (e.hidden && !e.onlyLocalState ? "stop" : "pause")
                    }), eE.create(s)),
                    l = e.streamer || {},
                    u = e.controller || {},
                    c = null != (i = null == (t = e.controller) ? void 0 : t.enableWithoutStreamer) && i;
                e.streamer && e.streamer.disabled ? (e.hidden = !0, e.onlyLocalState = !1, e.claimInactivePlayerStates = !1, c = !0, u.observerMode = !0) : (r = function(e, t = {}) {
                    return function(e, t, i = {}) {
                        var a, s, r, n, o, l, u;
                        let c = e.getSDKId(),
                            h = e.getPublicTransport(),
                            p = e.getLogger(),
                            m = e.getDeviceDescriptor(),
                            E = null != (a = i.initialVolume) ? a : 1,
                            g = e$(Object.assign(Object.assign({}, i), {
                                transport: h,
                                sdkId: e.getUntaggedSDKId(),
                                loggerOptions: {
                                    disableMux: null == (n = null != (r = null == (s = null == i ? void 0 : i.mux) ? void 0 : s.disable) ? r : null == i ? void 0 : i.disableMux) || n,
                                    muxEnvKey: null != (l = null == (o = null == i ? void 0 : i.mux) ? void 0 : o.envKey) ? l : null == i ? void 0 : i.muxEnvKey,
                                    deviceInfo: m.then(e => ({
                                        platform_name: e.getPlatformName(),
                                        platform: e.getPlatformIdentifier(),
                                        version: e.getPlatformVersion(),
                                        os_name: e.getOSName(),
                                        os_version: e.getOSVersion(),
                                        brand: e.getBrand(),
                                        model: e.getModel(),
                                        type: e.getType()
                                    })),
                                    muxCustomDimensions: null == (u = null == i ? void 0 : i.mux) ? void 0 : u.customDimensions,
                                    platform: e.getPlatformIdentifier(),
                                    clientVersion: e.getPlatformVersion()
                                }
                            })).then(({
                                player: e
                            }) => e),
                            S = Promise.all([m, g.then(e => e.getMediaConfig())]).then(([e, t]) => {
                                if (e.getCapability("audio_podcasts") && !i.disableExternalFiles && e.appendManifestFormat(_.FILE_URLS_EXTERNAL), t.keysystem === eD.J.FAIRPLAY) e.appendManifestFormat(_.FILE_IDS_CBCS);
                                else if (t.keysystem !== eD.J.WIDEVINE || i.preferMultiDRMFormat) e.appendManifestFormat(_.FILE_IDS_MP4_DUAL, _.FILE_IDS_MP4, _.MANIFEST_URLS_AUDIO_AD);
                                else {
                                    if (e.getCapability("lossless_playback")) {
                                        let i = null;
                                        for (let e of t.formatsInfo.audio)
                                            if ('audio/mp4; codecs="flac"' === e.contentType) {
                                                i = e;
                                                break
                                            }
                                        let a = !(null == i ? void 0 : i.robustness) || 0 === i.robustness.indexOf("SW_SECURE");
                                        i && (!a || e.getType() === d.CAST_AUDIO) && e.appendManifestFormat(_.FILE_IDS_MP4FLAC)
                                    }
                                    e.appendManifestFormat(_.FILE_IDS_MP4, _.FILE_IDS_MP4_DUAL, _.MANIFEST_URLS_AUDIO_AD)
                                }
                                return t.supports.protected_video && e.getCapability("video_playback") && e.prependManifestFormat(_.MANIFEST_IDS_VIDEO), t.supports.unprotected_video && e.getCapability("video_ads") && e.prependManifestFormat(_.MANIFEST_URLS_VIDEO_AD), e
                            }),
                            T = eq.create({
                                trackPlayer: g
                            }),
                            f = tE.create({
                                descriptor: m,
                                listPlayer: T
                            }),
                            {
                                playbackServiceClient: y,
                                playbackStateObserver: I
                            } = t({
                                initialVolume: E,
                                listPlayer: T,
                                logger: p,
                                transport: h,
                                clientVersion: c,
                                descriptor: S,
                                endpoint: i.endpoint,
                                manifestTrackResolver: f,
                                initialVideoSurface: i.initialVideoSurface,
                                initialIsVideoVisible: i.initialIsVideoVisible
                            });
                        return new ta({
                            client: e,
                            playbackServiceClient: y,
                            playbackStateObserver: I,
                            initialVolume: E,
                            playerPromise: g,
                            listPlayer: T,
                            logger: p,
                            stopOnBackground: i.stopOnBackground,
                            enableMediaSession: i.enableMediaSession,
                            enableMediaPlaybackReporting: i.enableMediaPlaybackReporting
                        })
                    }(e, e => {
                        let t = tb.create(Object.assign(Object.assign({}, e), {
                                ListClass: th
                            })),
                            i = tc.create(t);
                        return {
                            playbackServiceClient: t,
                            playbackStateObserver: i
                        }
                    }, t)
                }(o, l), u.autoregister = !1, e.onlyLocalState && (u.decorateTrackWindow = !1, u.disableProgress = !0));
                let h = function(e, t = {}) {
                    let i = e.getPublicTransport(),
                        a = e.getVersionDescriptor().tagged,
                        s = t9.create({
                            autoregister: !("autoregister" in t) || t.autoregister,
                            descriptor: e.getClientDescriptor(),
                            transport: i,
                            tracker: new t6(e.getLogger())
                        });
                    return tZ.create({
                        client: e,
                        playerClient: s,
                        version: a,
                        serverTime: tO.create(i),
                        decorateTrackWindow: t.decorateTrackWindow,
                        disableProgress: t.disableProgress,
                        observerMode: t.observerMode
                    })
                }(o, u);
                return K.create({
                    transport: n,
                    client: o,
                    streamer: r,
                    controller: h,
                    enableControllerWithoutStreamer: c,
                    hidden: e.hidden,
                    onlyLocalState: e.onlyLocalState,
                    claimInactivePlayerStates: e.claimInactivePlayerStates,
                    forceRemoteActions: e.forceRemoteActions,
                    autoActivateElement: null != (a = e.autoActivateElement) ? a : "undefined" != typeof WebKitMediaKeys,
                    experimentalDeactivateOnStop: e.experimentalDeactivateOnStop
                })
            }
            Object.assign(Object.assign(Object.assign({}, a), N.L), C.I)
        },
        99415: (e, t, i) => {
            i.d(t, {
                s: () => w
            });
            var a = i(59554),
                s = i(33423),
                r = i(73880),
                n = i(1188),
                o = i(33233),
                l = i(4898),
                _ = i(94651),
                d = i(43555);
            class u extends d.U {
                constructor(e) {
                    super(e), this.strategy = l.j.URL, this.contentClassName = "URLContent", this._url = e.url, this._mimeType = e.mimeType
                }
                load() {
                    if (this._mimeType) {
                        var e, t;
                        if (e = this._mimeType, t = this.getMediaType(), "" === document.createElement(t).canPlayType(e)) throw new _.f(a.I.FILE_FORMAT_NOT_SUPPORTED, "Content is not playable.", {
                            [this._mediaType]: [{
                                mimeType: this.getMediaTypeMimeTypes()[this._mediaType]
                            }]
                        })
                    }
                    return Promise.resolve(this)
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return "video" === this._mediaType ? {
                        video: null != (e = this._mimeType) ? e : "video/mp4"
                    } : {
                        audio: null != (t = this._mimeType) ? t : "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
            }
            var c = i(59371),
                h = i(8870);
            let p = {
                [h.U.MP3_256]: "audio/mp3",
                [h.U.MP3_320]: "audio/mp3",
                [h.U.MP3_160]: "audio/mp3",
                [h.U.MP3_96]: "audio/mp3",
                [h.U.MP4_128]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_256]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_128_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_256_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_128_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_256_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [h.U.MP4_FLAC]: 'audio/mp4; codecs="flac"'
            };
            var m = i(89416);
            class E extends d.U {
                constructor(e) {
                    if (super(e), this._loaded = !1, this._lastResolveToken = 0, this._fallbackURLs = [], this._contentSegments = [], this._duration = 0, this._segmentLength = 0, this._protection = "cenc", this._fileId = e.fileId, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = o.v[this._keySystemInfo.keySystem], this._fileFormat = e.fileFormat, this._disableCache = e.disableCache, this._preloadedManifest = e.preloadedManifest, this._preresolvedURL = e.preresolvedURL, this._bitrate = e.bitrate, this._fileFormat) this._mimeType = p[this._fileFormat];
                    else switch (this._mediaFormat) {
                        case s.o.MP3:
                            this._mimeType = p[h.U.MP3_160];
                            break;
                        case s.o.MP4:
                        case s.o.MP4_DUAL:
                        case s.o.MP4_CBCS:
                            this._mimeType = p[h.U.MP4_128];
                            break;
                        default:
                            throw TypeError(`Unknown audio format ${this._mediaFormat}`)
                    }
                }
                _getCDNURLs(e) {
                    if (this._preresolvedURL) return this._currentURL = this._preresolvedURL, this._fallbackURLs = [], e && (e.resolveLatency = 0), Promise.resolve(!0);
                    let t = this._fileId;
                    clearTimeout(this._lastResolveToken);
                    let i = () => (this._lastResolveTime = (0, c.X)(), this._resolver.getCDNURL(t, this._fileFormat).then(t => (e && this._lastResolveTime && (e.resolveLatency = (0, c.r)(this._lastResolveTime)), t))),
                        a = this._lastResolveTime ? (0, c.r)(this._lastResolveTime) : 1 / 0;
                    return (a < 1001 ? new Promise((e, t) => {
                        this._lastResolveToken = setTimeout(() => {
                            i().then(e, t)
                        }, 1001 - a)
                    }) : i()).then(e => (this._fallbackURLs = e.uris, this._currentURL = this._fallbackURLs.shift(), !0)).catch(e => (e && (e.track = this.toLogJSON()), Promise.reject(e)))
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, c.X)();
                    return this._resolver.getManifest(this._fileId).then(i => (e && (e.manifestLatency = (0, c.r)(t)), i))
                }
                _calculateSegments(e) {
                    let t = e.offset;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !this._disableCache,
                        timeStart: 0,
                        timeEnd: 0,
                        byteRanges: {
                            audio: {
                                start: 0,
                                end: t - 1
                            }
                        }
                    };
                    let i = e.segments,
                        a = e.timescale,
                        s = i.length,
                        r = Array(s),
                        n = 0,
                        o = 0;
                    for (let e = 0; e < s; e++) {
                        let s = i[e];
                        if (!s) continue;
                        let l = s.duration / a,
                            _ = {
                                index: e,
                                init: !1,
                                cacheBufferSet: !e && !this._disableCache,
                                timeStart: o,
                                timeEnd: o + l,
                                byteRanges: {
                                    audio: {
                                        start: t,
                                        end: t + (s.size - 1)
                                    }
                                }
                            };
                        r[e] = _, t += s.size, n += s.duration, o += l, Math.floor(l) > this._segmentLength && (this._segmentLength = Math.floor(l))
                    }
                    this._contentSegments = r, this._duration = n / a;
                    let l = r[r.length - 1];
                    l && (l.isFinal = !0)
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : Promise.all([this._getCDNURLs(e), this._getManifest(e)]).then(([e, t]) => {
                        let i;
                        if (this._loaded = !0, !e || !t) return this;
                        if (this._keySystemInfo.keySystem === r.J.INVALID_SPOTIFY_KEY) return this._pssh = new Uint8Array(0), this;
                        if (!("seektableVersion" in t && 2 === t.seektableVersion)) {
                            let e = new _.f(a.I.FILE_MALFORMED_SEEKTABLE, "Unsupported seektable version.");
                            return e.track = this.toLogJSON(), Promise.reject(e)
                        }
                        let s = function(e, t) {
                            let i = t.commonName;
                            return "widevine" === i ? e.pssh.widevine || null : "playready" === i ? e.pssh.playready || null : "fairplay" === i && e.pssh.fairplay || null
                        }(t, this._keySystemSettings);
                        return s ? (this._protection = "cenc", this._pssh = (0, m.b)(s), t.segments) ? (this._calculateSegments(t), this) : ((i = new _.f(a.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable.")).track = this.toLogJSON(), Promise.reject(i)) : ((i = new _.f(a.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.", {
                            audio: [{
                                mimeType: this.getMediaTypeMimeTypes().audio,
                                bitrate: this._bitrate
                            }]
                        })).track = this.toLogJSON(), Promise.reject(i))
                    })
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: this._mimeType
                    }
                }
            }
            let g = "application/vnd.apple.mpegurl";

            function S(e) {
                var t;
                let i = e.segments.map(e => {
                        if (e.byteEnd && void 0 !== e.byteStart) {
                            let t = `${1+e.byteEnd-e.byteStart}`;
                            return t += `@${e.byteStart}`, `#EXTINF:${e.duration},
#EXT-X-BYTERANGE:${t}
${e.url}`
                        }
                        return `#EXTINF:${e.duration},
${e.url}`
                    }).join("\n"),
                    a = e.assetID ? `#EXT-X-KEY:METHOD=SAMPLE-AES,URI="skd://${e.assetID}",KEYFORMATVERSIONS="1",KEYFORMAT="com.apple.streamingkeydelivery"` : "",
                    s = e.map ? `#EXT-X-MAP:URI="${e.map.url}"` : "";
                return (null == (t = e.map) ? void 0 : t.byteEnd) && void 0 !== e.map.byteStart && (s += `,BYTERANGE="${1+e.map.byteEnd}@${e.map.byteStart}"`), `#EXTM3U
#EXT-X-VERSION:6
#EXT-X-TARGETDURATION:${Math.floor(e.targetDuration)}
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
${s?`${a}
${s}`:a}
${i}
#EXT-X-ENDLIST`
            }

            function T(e) {
                return `data:application/vnd.apple.mpegurl;base64,${btoa(e)}`
            }

            function f(e) {
                let t = new Blob([e], {
                    type: g
                });
                return URL.createObjectURL(t)
            }

            function y(e) {
                return f(S(e))
            }

            function I(e) {
                return T(S(e))
            }
            class v extends E {
                constructor() {
                    super(...arguments), this._hlsURL = null, this.strategy = l.j.URL, this.contentClassName = "AudioManifestHLSContent"
                }
                unload() {
                    this._hlsURL && URL.revokeObjectURL(this._hlsURL), this._hlsURL = null
                }
                getURL() {
                    var e, t;
                    let i = this._currentURL,
                        s = this._initSegment;
                    if (!i || !s) throw new _.f(a.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let r = {
                            url: i,
                            byteStart: null == (e = s.byteRanges.audio) ? void 0 : e.start,
                            byteEnd: null == (t = s.byteRanges.audio) ? void 0 : t.end
                        },
                        n = this._contentSegments.map(e => {
                            var t, a;
                            return {
                                url: i,
                                duration: e.timeEnd - e.timeStart,
                                byteStart: null == (t = e.byteRanges.audio) ? void 0 : t.start,
                                byteEnd: null == (a = e.byteRanges.audio) ? void 0 : a.end
                            }
                        }),
                        o = "undefined" == typeof MediaSource ? y : I;
                    return this._hlsURL = o({
                        assetID: this._fileId,
                        targetDuration: 10,
                        map: r,
                        segments: n
                    }), this._hlsURL
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: g
                    }
                }
            }
            class P extends Error {
                constructor(e, t, i, a = {}) {
                    super(t), this.code = e, this.message = t, this.status = i, this.debug = a, this.name = "FragmentError"
                }
            }
            class A extends E {
                constructor(e) {
                    super(e), this._profileId = `${Date.now()}`, this._lastFetchedBuffer = null, this.strategy = l.j.MSE, this.contentClassName = "AudioManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _parseSegmentResponse(e, t) {
                    let {
                        requestURL: i,
                        segment: s,
                        byteRangeHeader: r,
                        expectedLength: n
                    } = e.metadata, o = `${s.timeStart}-${s.timeEnd}`, [l, _] = r.split("-").map(Number);
                    switch (e.status) {
                        case 0:
                            {
                                if (e.offline) return Promise.reject(new P(a.I.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: o,
                                    byte_range: r,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: s.timeStart,
                                    segmentTimeEnd: s.timeEnd,
                                    segmentByteStart: l,
                                    segmentByteEnd: _
                                }));
                                let n = new P(a.I.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                        isNetworkRelated: !0,
                                        segmentTimeStart: s.timeStart,
                                        segmentTimeEnd: s.timeEnd,
                                        segmentByteStart: l,
                                        segmentByteEnd: _
                                    }),
                                    d = !1;
                                if (this._currentURL !== i ? d = !0 : this._fallbackURLs.length && this._currentURL === i && (d = !0, this._currentURL = this._fallbackURLs.shift()), n.debug.has_fallback = d, d) return this.getBufferSetForSegment(s, t);
                                return Promise.reject(n)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!t) return Promise.reject(new P(a.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                    time_range: o,
                                    byte_range: r,
                                    segmentTimeStart: s.timeStart,
                                    segmentTimeEnd: s.timeEnd,
                                    segmentByteStart: l,
                                    segmentByteEnd: _
                                }));
                                if (t.byteLength !== n) return Promise.reject(new P(a.I.FRAGMENT_REQUEST_UNEXPECTED_LENGTH, "Received buffer of unexpected length.", e.status, {
                                    time_range: o,
                                    byte_range: r,
                                    received_length: t.byteLength,
                                    expected_length: n,
                                    segmentTimeStart: s.timeStart,
                                    segmentTimeEnd: s.timeEnd,
                                    segmentByteStart: l,
                                    segmentByteEnd: _
                                }));
                                let d = {
                                    audio: {
                                        profileId: this._profileId,
                                        bufferURL: i,
                                        byteStart: s.byteRanges.audio.start,
                                        byteEnd: s.byteRanges.audio.end,
                                        buffer: t,
                                        mimeType: this._mimeType,
                                        bitrate: this._bitrate,
                                        bandwidth: 8e3 * t.byteLength / e.timing.completed
                                    }
                                };
                                return s.cacheBufferSet && t && t.byteLength && (s.bufferSet = d),
                                this._abrManager.sample(t.byteLength, e.timing.completed),
                                Promise.resolve(d)
                            }
                        case 403:
                            return this._getCDNURLs().then(() => this.getBufferSetForSegment(s, t));
                        default:
                            {
                                let n = !1;
                                return this._currentURL !== i ? n = !0 : this._fallbackURLs.length && this._currentURL === i && (n = !0, this._currentURL = this._fallbackURLs.shift()),
                                n ? this.getBufferSetForSegment(s, t) : Promise.reject(new P(a.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                                    time_range: o,
                                    byte_range: r,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: s.timeStart,
                                    segmentTimeEnd: s.timeEnd,
                                    segmentByteStart: l,
                                    segmentByteEnd: _
                                }))
                            }
                    }
                }
                unload() {
                    this._lastFetchedBuffer = null, this._disableCache && (this._initSegment && (this._initSegment.bufferSet = null), this._contentSegments[0] && (this._contentSegments[0].bufferSet = null))
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._contentSegments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getSegmentForTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[0]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[1]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t = 1 / 0) {
                    var i;
                    let a = [];
                    if (null == (i = this._contentSegments) ? void 0 : i.length)
                        for (let i of this._contentSegments) i.timeStart <= t && i.timeEnd >= e && a.push(i);
                    return a
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._contentSegments) ? void 0 : e[this._contentSegments.length - 1]) ? t : null
                }
                getInitBufferSet(e) {
                    var t, i;
                    if (!this._initSegment) throw new _.f(a.I.FILE_NOT_RESOLVED, "Cannot return the init bufferset: file not resolved.");
                    return (null == (i = null == (t = this._initSegment.bufferSet) ? void 0 : t.audio) ? void 0 : i.buffer.byteLength) ? Promise.resolve(this._initSegment.bufferSet) : (this._initBufferPromise || (this._initBufferPromise = this.getBufferSetForSegment(this._initSegment, e).then(e => {
                        var t;
                        if (!(null == (t = e.audio) ? void 0 : t.buffer.byteLength)) throw Error("Empty initialization segment buffer");
                        return e
                    })), this._initBufferPromise)
                }
                getBufferSetForSegment(e, t) {
                    var i;
                    if ((null == (i = this._lastFetchedBuffer) ? void 0 : i.segment) === e) return Promise.resolve(this._lastFetchedBuffer.bufferSet);
                    if (e.bufferSet) return Promise.resolve(e.bufferSet);
                    if (!this._currentURL) return Promise.reject(new _.f(a.I.FILE_NOT_RESOLVED, "Cannot fetch buffer: No resolved URL"));
                    let s = e.byteRanges.audio,
                        r = `${s.start}-${s.end}`,
                        n = s.end + 1 - s.start,
                        o = this._currentURL;
                    return (e.init ? Promise.resolve(null) : this.getInitBufferSet(t)).then(i => Promise.all([i, this._transport.request(o, {
                        method: "GET",
                        responseType: "arraybuffer",
                        headers: {
                            Range: `bytes=${r}`
                        },
                        signal: t,
                        timing: !0,
                        metadata: {
                            requestURL: o,
                            segment: e,
                            byteRangeHeader: r,
                            expectedLength: n
                        },
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return e.offline;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR || i === t.SUCCESS && !!e.body && e.body.byteLength !== n
                            }
                        }
                    }).then(e => this._parseSegmentResponse(e, t))])).then(([t, i]) => {
                        var a;
                        return (null == (a = null == t ? void 0 : t.audio) ? void 0 : a.buffer) && i.audio && (i.audio.initBuffer = t.audio.buffer), this._lastFetchedBuffer = {
                            segment: e,
                            bufferSet: i
                        }, i
                    })
                }
                getCalculatedDuration() {
                    return this._duration
                }
            }
            var R = i(34036);
            class L extends R.VK {
                constructor() {
                    super(...arguments), this._hlsURLs = [], this.strategy = l.j.URL, this.contentClassName = "DirectorManifestHLSContent"
                }
                _getHLSURLForProfile(e, t) {
                    let i = this._duration,
                        a = this._segmentLength,
                        s = this._segmentTemplate,
                        r = [];
                    for (let t = 0; t < i; t += a) {
                        let n = t + a > i ? i - t : a,
                            o = s.replace("{{profile_id}}", e.id.toString(10)).replace("{{segment_timestamp}}", t.toString(10)).replace("{{file_type}}", e.file_type);
                        r.push({
                            duration: n,
                            url: `${this._baseURL}${o}`
                        })
                    }
                    let n = ("undefined" == typeof MediaSource ? y : I)({
                        assetID: this._assetID,
                        targetDuration: a,
                        map: t ? {
                            url: t
                        } : void 0,
                        segments: r
                    });
                    return this._hlsURLs.push(n), n
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => {
                        var e, t;
                        return this._audioProfiles.selected = null != (e = this._audioProfiles.available[0]) ? e : null, this._videoProfiles.selected = null != (t = this._videoProfiles.available[0]) ? t : null, this
                    })
                }
                getURL() {
                    var e, t;
                    if (!this._baseURL) throw new _.f(a.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let i = [],
                        s = this._audioProfiles.available[0];
                    if (s) {
                        let e = "ts" !== s.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, s, void 0).audio : "";
                        i.push(`#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="eng",NAME="English",AUTOSELECT=YES,URI="${this._getHLSURLForProfile(s,e)}"`)
                    }
                    for (let a of this._videoProfiles.available) {
                        let r = (null != (e = null == s ? void 0 : s.max_bitrate) ? e : 0) + a.max_bitrate,
                            n = (null != (t = null == s ? void 0 : s.audio_bitrate) ? t : 0) + a.video_bitrate,
                            o = "ts" !== a.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, void 0, a).video : "";
                        i.push(`#EXT-X-STREAM-INF:BANDWIDTH=${r},AVERAGE-BANDWIDTH=${n},RESOLUTION=${a.video_width}x${a.video_height},CODECS="${(null==s?void 0:s.audio_codec)?`${s.audio_codec}, ${a.video_codec}`:a.video_codec}"${(null==s?void 0:s.audio_codec)?',AUDIO="audio"':""}
${this._getHLSURLForProfile(a,o)}`)
                    }
                    let r = ("undefined" == typeof MediaSource ? f : T)(`#EXTM3U
${i.join("\n")}`);
                    return this._hlsURLs.push(r), r
                }
                unload() {
                    for (let e of this._hlsURLs) URL.revokeObjectURL(e);
                    this._hlsURLs = []
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return {
                        audio: (0, R.gF)(null == (e = this._audioProfiles.available) ? void 0 : e[0]),
                        video: (0, R.gF)(null == (t = this._videoProfiles.available) ? void 0 : t[0])
                    }
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: g
                    }
                }
                adapt() {
                    return Promise.resolve(!1)
                }
                canLowerBitrate() {
                    return !1
                }
            }
            var b = i(99873),
                D = i(12756);
            class O extends R.VK {
                constructor(e) {
                    super(e), this._initSegmentBuffers = {}, this._backgrounded = !1, this.strategy = l.j.MSE, this.contentClassName = "DirectorManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _isQualityMatchedForPreferredResolution(e, t) {
                    var i, a, s;
                    let r = this._videoResolution;
                    if (r) {
                        let n = null != (i = r.max) ? i : l.I,
                            o = null != (a = r.min) ? a : 0;
                        if (t) {
                            let t = null != (s = r.start) ? s : n;
                            return e.video_resolution <= t
                        }
                        return e.video_resolution >= o && e.video_resolution <= n
                    }
                    return !1
                }
                _isQualityMatchedForBandwidth(e, t) {
                    var i;
                    let a = null != (i = null == t ? void 0 : t.audio_bitrate) ? i : 0,
                        s = this._abrManager.getBandwidthEstimate();
                    return e.video_bitrate + a < s - 1e5
                }
                _isQualityMatchedForElementSize(e) {
                    return !!this._currentElementSize && e.video_height <= this._currentElementSize.height
                }
                _selectVideoProfile(e = !1) {
                    let t = this._videoProfiles.available,
                        i = this._audioProfiles.available[0],
                        a = {},
                        s = t.length;
                    if (s) {
                        for (; s--;) {
                            let r = t[s];
                            r && (!a.preferredResolution && this._isQualityMatchedForPreferredResolution(r, !!e) && (a.preferredResolution = r), !a.elementSize && this._isQualityMatchedForElementSize(r) && (a.elementSize = r), !a.bitrate && this._isQualityMatchedForBandwidth(r, i) && (a.bitrate = r))
                        }
                        return (a.backgrounded || (a.backgrounded = t[0]), a.bitrate || (a.bitrate = t[0]), a.preferredResolution) ? a.preferredResolution : this._enableAbrOnElementSize && this._backgrounded && a.backgrounded ? a.backgrounded : this._enableAbrOnElementSize && this._currentElementSize && a.elementSize ? a.bitrate.video_bitrate < a.elementSize.video_bitrate ? a.bitrate : a.elementSize : a.bitrate
                    }
                }
                _updateVariants(e) {
                    var t;
                    let i = this._audioProfiles.available[0];
                    this._audioProfiles.selected = null != i ? i : null;
                    let a = this._videoProfiles.selected,
                        s = this._selectVideoProfile(e);
                    s && (this._videoProfiles.selected = s, (null == a ? void 0 : a.id) !== s.id && (null == (t = this._mediator) || t.emit(b.T.VIDEO_PROFILE_CHANGED, Object.assign({
                        profile: {
                            type: "video",
                            mimeType: s.mime_type,
                            codec: s.video_codec,
                            bitrate: s.video_bitrate,
                            height: s.video_height,
                            width: s.video_width,
                            resolution: s.video_resolution
                        }
                    }, (0, D.P)()))))
                }
                _constructSegmentURL(e, t, i) {
                    if (!t && !i) throw new n.i(a.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES, "Both audioProfile and videoProfile is null");
                    return e.init ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, t, i) : this._resolver.getSegmentURLs(this._baseURL, this._segmentTemplate, e.timeStart, t, i)
                }
                _parseSegmentResponse(e) {
                    var t, i, s, r;
                    let {
                        segment: n,
                        profile: o,
                        timeStart: l,
                        loggingURL: _
                    } = e.metadata, d = (0, R.gF)(o), u = (0, R.bF)(o), c = "video_resolution" in o ? o.video_resolution : void 0, h = "video_width" in o ? o.video_width : void 0, p = "video_height" in o ? o.video_height : void 0, m = `${n.timeStart}-${n.timeEnd}`, E = "video_resolution" in o ? "video" : "audio";
                    switch (e.status) {
                        case 0:
                            {
                                let e = new P(a.I.FRAGMENT_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: m,
                                    mimeType: d,
                                    resolution: c,
                                    bitrate: u,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: n.timeStart,
                                    segmentTimeEnd: n.timeEnd
                                });
                                return null == (t = this._mediator) || t.emit(b.T.FRAGMENT_FETCH_ERROR, Object.assign({
                                    media_type: "video",
                                    segment_type: E,
                                    url: _,
                                    start_time: l,
                                    init: n.init,
                                    error: e
                                }, (0, D.P)())),
                                Promise.reject(e)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!(null == t ? void 0 : t.byteLength)) {
                                    let t = new P(a.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                        time_range: m,
                                        mimeType: d,
                                        resolution: c,
                                        bitrate: u,
                                        segmentTimeStart: n.timeStart,
                                        segmentTimeEnd: n.timeEnd
                                    });
                                    return null == (i = this._mediator) || i.emit(b.T.FRAGMENT_FETCH_ERROR, Object.assign({
                                        media_type: "video",
                                        segment_type: E,
                                        url: _,
                                        start_time: l,
                                        init: n.init,
                                        error: t
                                    }, (0, D.P)())), Promise.reject(t)
                                }
                                let r = t.byteLength,
                                    g = 8e3 * r / e.timing.completed;
                                return null == (s = this._mediator) || s.emit(b.T.FRAGMENT_FETCHED, Object.assign({
                                    media_type: "video",
                                    segment_type: E,
                                    url: _,
                                    init: n.init,
                                    byte_length: r,
                                    start_time: l,
                                    end_time: Date.now(),
                                    resolution: c,
                                    bandwidth: g
                                }, (0, D.P)())),
                                Promise.resolve({
                                    profileId: `${this._fileId}-${o.id}`,
                                    bufferURL: _,
                                    byteStart: 0,
                                    byteEnd: r - 1,
                                    buffer: t,
                                    mimeType: d,
                                    bitrate: u,
                                    videoWidth: h,
                                    videoHeight: p,
                                    resolution: c,
                                    bandwidth: g
                                })
                            }
                    }
                    let g = new P(a.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                        time_range: m,
                        mimeType: d,
                        resolution: c,
                        bitrate: u,
                        segmentTimeStart: n.timeStart,
                        segmentTimeEnd: n.timeEnd
                    });
                    return null == (r = this._mediator) || r.emit(b.T.FRAGMENT_FETCH_ERROR, Object.assign({
                        media_type: "video",
                        segment_type: E,
                        url: _,
                        init: n.init,
                        start_time: l,
                        error: g
                    }, (0, D.P)())), Promise.reject(g)
                }
                _fetchBufferData(e, t, i, a, s) {
                    return this._transport.request(e, {
                        method: "GET",
                        responseType: "arraybuffer",
                        timing: !0,
                        signal: s,
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return !0;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR
                            }
                        },
                        metadata: {
                            timeStart: Date.now(),
                            segment: t,
                            profile: i,
                            loggingURL: a
                        }
                    }).then(this._parseSegmentResponse)
                }
                _fetchInitSegmentBuffers(e, t, i) {
                    let s, r = this._initSegment;
                    if (!r) return Promise.reject(new _.f(a.I.FILE_NOT_RESOLVED, "Cannot fetch Init Segment buffers: File not resolved."));
                    try {
                        s = this._constructSegmentURL(r, e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = this._initSegmentBuffers,
                        o = 0,
                        l = 0,
                        d = (0, c.X)(),
                        u = e => {
                            l += e, --o || (this._abrManager.sample(l, (0, c.r)(d)), this._updateVariants())
                        },
                        h = Promise.resolve(null);
                    if (e) {
                        let t = n[e.id];
                        (null == t ? void 0 : t.buffer.byteLength) ? h = Promise.resolve(t): (null == s ? void 0 : s.audio) && (o++, h = this._fetchBufferData(s.audio, r, e, s.audioLogging, i).then(t => (n[e.id] = t, u(t.buffer.byteLength), t)))
                    }
                    let p = Promise.resolve(null);
                    if (t) {
                        let e = n[t.id];
                        (null == e ? void 0 : e.buffer.byteLength) ? p = Promise.resolve(e): (null == s ? void 0 : s.video) && (o++, p = this._fetchBufferData(s.video, r, t, s.videoLogging, i).then(e => (n[t.id] = e, u(e.buffer.byteLength), e)))
                    }
                    return Promise.all([h, p]).then(([e, t]) => ({
                        audio: e,
                        video: t
                    }))
                }
                _fetchBufferSetForSegment(e, t, i, a) {
                    let s;
                    try {
                        s = this._constructSegmentURL(e, t, i)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    return this._fetchInitSegmentBuffers(t, i, a).then(r => {
                        let n = 0,
                            o = 0,
                            l = (0, c.X)(),
                            _ = e => {
                                o += e, --n || (this._abrManager.sample(o, (0, c.r)(l)), this._updateVariants())
                            },
                            d = null;
                        !e.init && (null == s ? void 0 : s.audio) && (n++, d = this._fetchBufferData(s.audio, e, t, s.audioLogging, a).then(e => (_(e.buffer.byteLength), e)));
                        let u = null;
                        return !e.init && (null == s ? void 0 : s.video) && (n++, u = this._fetchBufferData(s.video, e, i, s.videoLogging, a).then(e => (_(e.buffer.byteLength), e))), Promise.all([r, d, u])
                    }).then(([t, i, a]) => {
                        var s, r;
                        let n;
                        return e.init ? n = {
                            audio: null != (s = t.audio) ? s : void 0,
                            video: null != (r = t.video) ? r : void 0
                        } : (n = {
                            audio: null != i ? i : void 0,
                            video: null != a ? a : void 0
                        }, e.cacheBufferSet && (e.bufferSet = n), n.audio && (null == t ? void 0 : t.audio) && (n.audio.initBuffer = t.audio.buffer), n.video && (null == t ? void 0 : t.video) && (n.video.initBuffer = t.video.buffer)), n
                    }).catch(e => Promise.reject(e))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => (this._updateVariants(!0), this))
                }
                adapt(e) {
                    let {
                        backgrounded: t = !1,
                        currentElementSize: i
                    } = null != e ? e : {};
                    return this._currentElementSize = i, this._backgrounded = t, this._updateVariants(), Promise.resolve(!0)
                }
                canLowerBitrate() {
                    var e;
                    let t = this._videoProfiles.available[0];
                    return (null == (e = this._videoProfiles.selected) ? void 0 : e.id) !== (null == t ? void 0 : t.id)
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: (0, R.gF)(this._audioProfiles.selected),
                        video: (0, R.gF)(this._videoProfiles.selected)
                    }
                }
                unload() {
                    this._initSegment && (this._initSegmentBuffers = {}), this._segments.forEach(e => {
                        e.bufferSet = null
                    })
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._segments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getInitBufferSet() {
                    var e, t;
                    let i = null != (e = this._audioProfiles.selected) ? e : void 0,
                        a = null != (t = this._videoProfiles.selected) ? t : void 0;
                    return this._fetchInitSegmentBuffers(i, a).then(e => {
                        var t, i;
                        return {
                            audio: null != (t = e.audio) ? t : void 0,
                            video: null != (i = e.video) ? i : void 0
                        }
                    })
                }
                getSegmentForTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[0];
                    for (let t of this._segments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[1];
                    for (let t of this._segments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t) {
                    var i;
                    let a = [];
                    if (null == (i = this._segments) ? void 0 : i.length)
                        for (let i of this._segments) i.timeStart <= t && i.timeEnd >= e && a.push(i);
                    return a
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._segments) ? void 0 : e[this._segments.length - 1]) ? t : null
                }
                getBufferSetForSegment(e, t) {
                    var i, a;
                    if (!e) return Promise.reject(TypeError("No segment provided"));
                    let s = this._audioProfiles.selected,
                        r = this._videoProfiles.selected,
                        n = null == (a = null == (i = e.bufferSet) ? void 0 : i.video) ? void 0 : a.resolution;
                    return e.bufferSet && (!r || n && n >= r.video_resolution) ? Promise.resolve(e.bufferSet) : this._fetchBufferSetForSegment(e, null != s ? s : void 0, null != r ? r : void 0, t)
                }
                setVideoResolution(e) {
                    super.setVideoResolution(e), this._updateVariants()
                }
                getCalculatedDuration() {
                    return this._duration
                }
            }
            class N extends d.U {
                constructor(e) {
                    super(e), this._url = "", this.strategy = l.j.URL, this.contentClassName = "StorageURLContent", this._fileId = e.fileId, this._resolver = e.resolver
                }
                _getCDNURLs(e) {
                    let t = this._fileId,
                        i = (0, c.X)();
                    return this._resolver.getCDNURL(t).then(t => (e && (e.resolveLatency = (0, c.r)(i)), t))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._getCDNURLs(e).then(e => (this._url = e.uri, this))
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: "audio/mp3"
                    }
                }
            }
            class C extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "AdManifestError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new C(e, t);
                    return i.unrecoverable = !1, i.canPlayNext = !0, i
                }
            }
            class k extends d.U {
                constructor(e) {
                    super(e), this._loaded = !1, this._playableContentSorted = [], this._mimeType = "", this._manifestURL = "", this._adURL = "", this._product = "", this._audioFiles = [], this._videoFiles = [], this._trackingData = null, this.strategy = l.j.URL, this.contentClassName = "AdManifestContent", this._abrManager = e.abrManager, this._transport = e.transport, this._manifestURL = e.manifestURL, this._preloadedManifest = e.preloadedManifest, this._hasNonFatalErrors = !1, this._getManifest = this._getManifest.bind(this), this._parseManifest = this._parseManifest.bind(this), this._getPlayableContent = this._getPlayableContent.bind(this)
                }
                _isPlayable(e, t) {
                    return "" !== document.createElement(t).canPlayType(e)
                }
                _parseManifest(e) {
                    if (!(null == e ? void 0 : e.manifest)) throw new C(a.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.");
                    let {
                        manifest: t
                    } = e;
                    this._videoFiles = t.video_files, this._audioFiles = t.audio_files, this._contentMetadata = t.metadata, this._videoManifestId = t.video_manifest_id, this._product = t.product, this._trackingData = (e => {
                        let t = {};
                        for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = {
                            urls: e[i]
                        });
                        return t
                    })(t.tracking_events)
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, c.X)(),
                        i = this._manifestURL;
                    return this._transport.request(i, {
                        responseType: "json",
                        authorize: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(s => {
                        if (200 !== s.status) {
                            let e = new C(a.I.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS, `Ad manifest request failed with status code ${s.status}`, {
                                isNetworkRelated: !0
                            });
                            return e.debug.manifestURL = i, e.status = s.status, Promise.reject(e)
                        }
                        if (!s.body) {
                            let e = new C(a.I.AD_MANIFEST_INVALID, "Received empty manifest.");
                            return e.debug.manifestURL = i, e.status = s.status, Promise.reject(e)
                        }
                        return e && (e.manifestLatency = (0, c.r)(t)), Promise.resolve(s.body)
                    })
                }
                _getPlayableContent() {
                    let e = "video" === this._product;
                    if (e && this._videoManifestId) return;
                    let t = e ? this._videoFiles : this._audioFiles;
                    if (!t.length) throw new _.f(a.I.FILE_NOT_RESOLVED, `Manifest's ${e?"video_files":"audio_files"} array is empty.`);
                    let i = t.filter(e => this._isPlayable(e.type, this.getMediaType()));
                    if (!i.length) throw new _.f(a.I.FILE_FORMAT_NOT_SUPPORTED, "No playable content found.", {
                        [this._mediaType]: t.map(e => ({
                            mimeType: e.type,
                            bitrate: e.bitrate
                        }))
                    });
                    this._playableContentSorted = i.sort((e, t) => t.bitrate - e.bitrate)
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : this._getManifest(e).then(this._parseManifest).then(this._getPlayableContent).then(() => (this._loaded = !0, Promise.resolve(this)))
                }
                unload() {
                    this._adURL = ""
                }
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        [this._mediaType]: this._mimeType
                    }
                }
                getURL() {
                    if ("" !== this._adURL) return this._adURL;
                    let e = this._abrManager.getBandwidthEstimate(),
                        t = this._playableContentSorted[this._playableContentSorted.length - 1];
                    for (let i of this._playableContentSorted)
                        if (i.bitrate <= e) {
                            t = i;
                            break
                        }
                    return t && (this._adURL = t.url, this._mimeType = t.type), this._adURL
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
                getManifestId() {
                    return this._videoManifestId
                }
                getTrackingEvents() {
                    if (!this._trackingData) throw new _.f(a.I.FILE_NOT_RESOLVED, "Cannot return Tracking Events: File not resolved.");
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
            }

            function M(e, t) {
                var i;
                return {
                    mediaType: e.mediaType,
                    logData: e.logData,
                    audioGain: e.audioGain,
                    uri: e.uri,
                    fileId: e.fileId,
                    mediaFormat: e.format,
                    hasNonFatalErrors: null != (i = e.hasNonFatalErrors) ? i : e.isAd,
                    disableCache: t.disableCache,
                    keySystemInfo: t.keySystemInfo,
                    licenseEndpoint: e.licenseEndpoint,
                    mediator: t.mediator,
                    noAuth: e.noAuth,
                    mimeType: e.mimeType
                }
            }

            function U(e, t, i) {
                if (!e.fileId) return Promise.reject(new n.i(a.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                let s = Object.assign(Object.assign({}, M(e, t)), {
                    transport: t.transport,
                    abrManager: t.abrManager,
                    fileId: e.fileId,
                    keySystemSettings: o.v[t.keySystemInfo.keySystem],
                    resolver: t.videoResolver,
                    playabilityChecker: t.playabilityChecker,
                    disallowCodec: t.disallowCodec,
                    disallowProfile: t.disallowProfile,
                    codecPriorities: t.codecPriorities,
                    allowMixedAVC1Codecs: t.allowMixedAVC1Codecs,
                    trackingData: (null == i ? void 0 : i.trackingData) || null,
                    metadata: null == i ? void 0 : i.metadata,
                    enableAbrOnElementSize: t.enableAbrOnElementSize,
                    videoResolution: t.videoResolution
                });
                return t.keySystemInfo.keySystem === r.J.FAIRPLAY ? new L(s).load(t.measures) : new O(s).load(t.measures)
            }

            function w(e, t) {
                var i, l, _, d, c;
                let h = M(e, t);
                switch (e.format) {
                    case s.o.MP3:
                        {
                            let s = null != (i = e.url) ? i : e.resolvedURL;
                            if (s) return new u(Object.assign(Object.assign({}, h), {
                                url: s
                            })).load();
                            if (e.fileId) return new N(Object.assign(Object.assign({}, h), {
                                fileId: e.fileId,
                                resolver: t.audioResolver
                            })).load();
                            return Promise.reject(new n.i(a.I.INVALID_TRACK, `Invalid ${e.format} Track: No url or fileId.`))
                        }
                    case s.o.GENERIC_MEDIA:
                        {
                            let t = null != (l = e.url) ? l : e.resolvedURL;
                            if (t) return new u(Object.assign(Object.assign({}, h), {
                                url: t
                            })).load();
                            return Promise.reject(new n.i(a.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`))
                        }
                    case s.o.MP4:
                    case s.o.MP4_DUAL:
                    case s.o.MP4_CBCS:
                    case s.o.MP4_FLAC:
                        {
                            if (!e.fileId) return Promise.reject(new n.i(a.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                            let i = Object.assign(Object.assign({}, h), {
                                transport: t.transport,
                                abrManager: t.abrManager,
                                fileId: e.fileId,
                                keySystemSettings: o.v[t.keySystemInfo.keySystem],
                                resolver: t.audioResolver,
                                fileFormat: e.fileFormat,
                                preloadedManifest: e.preloadedManifest,
                                preresolvedURL: null != (_ = e.url) ? _ : e.resolvedURL,
                                bitrate: null == (d = e.logData.format) ? void 0 : d.bitrate
                            });
                            if (t.keySystemInfo.keySystem === r.J.FAIRPLAY) return new v(i).load(t.measures);
                            return new A(i).load(t.measures)
                        }
                    case s.o.MANIFEST_ID:
                        return U(e, t);
                    case s.o.AD_MANIFEST:
                        {
                            let i = null != (c = e.url) ? c : e.resolvedURL;
                            if (!i) return Promise.reject(new n.i(a.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`));
                            return new k(Object.assign(Object.assign({}, h), {
                                abrManager: t.abrManager,
                                transport: t.transport,
                                manifestURL: i,
                                preloadedManifest: e.preloadedManifest
                            })).load(t.measures).then(i => {
                                let a = i.getManifestId();
                                return a ? U(Object.assign(Object.assign({}, e), {
                                    fileId: a,
                                    format: s.o.MANIFEST_ID
                                }), t, {
                                    trackingData: i.getTrackingEvents(),
                                    metadata: i.getContentMetadata()
                                }) : i
                            })
                        }
                    default:
                        return Promise.reject(new n.i(a.I.INVALID_TRACK, "Cannot create PlayableContent: Invalid MediaFormat."))
                }
            }
        },
        99873: (e, t, i) => {
            var a;
            i.d(t, {
                    T: () => a
                }),
                function(e) {
                    e.FRAGMENT_FETCHED = "fragment_fetched", e.FRAGMENT_FETCH_ERROR = "fragment_fetch_error", e.VIDEO_PROFILE_CHANGED = "video_profile"
                }(a || (a = {}))
        }
    }
]);