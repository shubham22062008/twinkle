! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "71a909bf-aab3-436b-9b31-5b08660f067b", e._sentryDebugIdIdentifier = "sentry-dbid-71a909bf-aab3-436b-9b31-5b08660f067b")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81], {
        25931: (e, t, i) => {
            i.d(t, {
                a: () => B
            });
            var r = i(8159),
                a = i(84822),
                n = i(29559),
                s = i(35520),
                o = i(59371),
                l = i(4898),
                d = i(13059),
                _ = i(73880),
                h = i(59554),
                c = i(85910),
                u = i(33423),
                p = i(99873),
                E = i(19218),
                y = i(1188),
                g = i(15039),
                m = i(31939),
                P = i(81750),
                f = i(63533),
                b = i(32991),
                R = i(62004),
                v = i(75321),
                A = i(62385),
                L = i(61943),
                T = i(68312),
                C = i(99415),
                M = i(66548),
                k = i(12756),
                S = i(25856),
                I = i(19428),
                D = i(71930);
            let O = s.m.forTag("playback.player"),
                N = /^blob:/,
                J = {
                    [u.o.MP4]: !0,
                    [u.o.MP4_DUAL]: !0,
                    [u.o.MP4_CBCS]: !0,
                    [u.o.MP4_FLAC]: !0,
                    [u.o.MP3]: !1,
                    [u.o.MANIFEST_ID]: !0,
                    [u.o.AD_MANIFEST]: !0,
                    [u.o.GENERIC_MEDIA]: !0
                },
                Y = {
                    start: d.J.REPORTING_START,
                    creative_view: d.J.REPORTING_CREATIVE_VIEW,
                    first_quartile: d.J.REPORTING_FIRST_QUARTILE,
                    midpoint: d.J.REPORTING_MIDPOINT,
                    third_quartile: d.J.REPORTING_THIRD_QUARTILE,
                    complete: d.J.REPORTING_COMPLETE,
                    pause: d.J.REPORTING_PAUSE,
                    resume: d.J.REPORTING_RESUME,
                    error: d.J.REPORTING_ERROR
                },
                V = {
                    audio: 2,
                    video: 2
                },
                U = {
                    min: .5,
                    max: 3.5
                };

            function w(e) {
                return Math.ceil(1e3 * e)
            }

            function j(e) {
                return document.createElement(e)
            }
            class B extends r.bk {
                constructor(e) {
                    var t, i, a, s, o, l, _, h;
                    super(), this._cubicVolume = !1, this._player = null, this._emeManager = null, this._mediator = new r.bk, this._currentContent = null, this._upcomingContent = null, this._preloadingTracks = {}, this._playId = 0, this._volumeCommandId = null, this._abortController = null, this._loaded = !1, this._stopPositionEndedEmitted = !1, this._stopPosition = null, this._licenseRequested = !1, this._playerActivated = !1, this._pauseToken = 0, this._syntheticEndedToken = 0, this._activeMimeTypes = {}, this._playerVolume = 1, this._mutedExplicitlySet = !1, this._playerSpeed = 1, this._playbackSpeedRange = U, this._fatalOnNextError = !1, this._canPreloadEmitted = !1, this._lastReportedPosition = null, this._lastReportedPlaybackSpeed = null, this._seeking = !1, this._loopWrapSeekGuard = !1, this._lastLoopRestartMonotonic = null, this._rebuffering = !1, this._enableAbrOnVisibilityChange = !1, this._enableAbrOnElementSize = !1, this._useResizeObserver = !1, this._preferredBitrate = 0, this._disableLicensePrefetch = !1, this._allowMixedAVC1Codecs = !0, this._disableBufferingBeforeLicense = !1, this._rebufferTarget = V, this._currentPlayingProfile = null, this._currentMediaPlaybackMode = null, this._preferredMediaPlaybackQuality = {
                        audio: E.b$.AUTO,
                        video: E.UE.AUTO
                    }, this._videoStateCoalescer = null, this._defaultPlayerContainerInjector = (e, t) => {
                        let i = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        i && e.parentNode !== i && (i.appendChild(e), "video" === t && this.emit(d.J.PLAYER_VIDEO_ELEMENT_APPENDED, Object.assign({}, (0, k.P)())))
                    }, this._defaultPlayerContainerEjector = (e, t, i) => {
                        let r = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        r && e.parentNode === r && (this._newElementPerTrack || i !== t) && (r.removeChild(e), "video" === t && (this._subtitleManager.setPlayer(null), this.emit(d.J.PLAYER_VIDEO_ELEMENT_REMOVED, Object.assign({}, (0, k.P)()))))
                    }, this._audioResolver = e.audioResolver, this._clearBufferOnSeek = !!e.clearBufferOnSeek, this._createPlayer = e.createPlayer || j, this._cubicVolume = e.cubicVolume, this._disableCache = !!e.disableCache, this._licenseURLResolver = e.licenseURLResolver, this._newBufferPerTrack = !!e.newBufferPerTrack, this._newElementPerTrack = !!e.newElementPerTrack, this._newMediaKeysPerTrack = e.newMediaKeysPerTrack, this._rebufferOnQuotaExceeded = !!e.rebufferOnQuotaExceeded, this._disableLicensePrefetch = !!e.disableLicensePrefetch, this._synthesizeEnded = !!e.synthesizeEnded, this._tracker = e.tracker, this._transport = e.transport, this._videoPlayerContainer = e.videoPlayerContainer, this._audioPlayerContainer = e.audioPlayerContainer, this._playerContainerManager = e.playerContainerManager || {
                        inject: this._defaultPlayerContainerInjector.bind(this),
                        eject: this._defaultPlayerContainerEjector.bind(this)
                    }, this._allowMixedAVC1Codecs = null == (t = e.allowMixedAVC1Codecs) || t, this._videoResolver = e.videoResolver, this._abrManager = new P.R, this._emeManager = e.disallowProtectedTracks ? null : e.emeManager || null, this._disallowCodec = (0, I.mf)(e.disallowCodecs), this._disallowProfile = e.disallowProfile, this._codecPriorities = e.codecPriorities, this._disableBufferingBeforeLicense = !!e.disableBufferingBeforeLicense, this._cache = new n.q(e.trackCacheSize || 2), this._subtitleManager = new b.S({
                        language: e.preferredSubtitleLanguage || navigator.language,
                        player: this._player
                    }), this._videoResolution = e.videoResolution, this._enableAbrOnVisibilityChange = !!e.enableAbrOnVisibilityChange, this._enableAbrOnElementSize = null != (i = e.enableAbrOnElementSize) && i, this._useResizeObserver = null != (a = e.useResizeObserver) && a, this._playbackSpeedRange = Object.assign(Object.assign({}, this._playbackSpeedRange), e.playbackSpeedRange), O.info("Setting Player track cache to:", e.trackCacheSize || 2), O.info("Setting Player playback speed limits:", this._playbackSpeedRange.min, "-", this._playbackSpeedRange.max), this._playabilityChecker = (0, S.C)(), this._bufferManager = T.A.create(this._tracker, void 0, {
                        disableBufferAbort: !!e.disableBufferAbort,
                        reinjectInitsOnAbort: !!e.reinjectInitsOnAbort,
                        noInit: !0,
                        customSourceBufferParams: e.customSourceBufferParams,
                        bufferTarget: e.bufferTarget
                    }), this._statistics = A.K.create({
                        bandwidthEstimator: this._abrManager
                    }), this._newKeySystemAccessPerTrack = e.newKeySystemAccessPerTrack, this._loadingTimeout = e.loadingTimeout, this._videoSurface = e.initialVideoSurface, this._isVideoVisible = e.initialIsVideoVisible, (null == (s = e.atomicVideoStateChanges) || s) && (this._videoStateCoalescer = new v.a({
                        getCurrentPosition: () => {
                            var e;
                            return w((null == (e = this._player) ? void 0 : e.currentTime) || 0)
                        },
                        onFlush: e => {
                            if (e.hasVisibilityChange) {
                                let t = Object.assign({
                                    visible: e.finalVisible,
                                    playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                                    position: e.positionMs
                                }, (0, k.P)());
                                this.emitSync(d.J.PLAYER_VIDEO_VISIBILITY_CHANGED, t)
                            }
                            if (e.hasSurfaceChange) {
                                let t = Object.assign({
                                    videoSurface: e.effectiveSurface,
                                    position: e.positionMs,
                                    playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                                }, (0, k.P)());
                                this.emitSync(d.J.PLAYER_VIDEO_SURFACE_CHANGED, t)
                            }
                        }
                    }));
                    let c = this._bufferManager.getBufferTarget();
                    this._rebufferTarget = {
                        audio: Math.min(null != (l = null == (o = e.rebufferTarget) ? void 0 : o.audio) ? l : V.audio, c.audio),
                        video: Math.min(null != (h = null == (_ = e.rebufferTarget) ? void 0 : _.video) ? h : V.video, c.video)
                    }, this._audioProcessor = L.T.create(e.audioProcessorOptions), this._preloadThreshold = e.preloadThreshold || 10, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._onPlay = this._onPlay.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onPause = this._onPause.bind(this), this._onSeeked = this._onSeeked.bind(this), this._onSeeking = this._onSeeking.bind(this), this._onEncrypted = this._onEncrypted.bind(this), this._onEnded = this._onEnded.bind(this), this._onError = this._onError.bind(this), this._onRequiresDuration = this._onRequiresDuration.bind(this), this._onQuotaExceeded = this._onQuotaExceeded.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this._onWaiting = this._onWaiting.bind(this), this._onFragmentFetched = this._onFragmentFetched.bind(this), this._onProfileChanged = this._onProfileChanged.bind(this), this._onPlayedThresholdReached = this._onPlayedThresholdReached.bind(this), this._onSyntheticEnded = this._onSyntheticEnded.bind(this), this._onLicenseRequestCapped = this._onLicenseRequestCapped.bind(this), this._onLicenseRequestError = this._onLicenseRequestError.bind(this), this._onNavigatorOffline = this._onNavigatorOffline.bind(this), this._onBufferError = this._onBufferError.bind(this), this._onBufferUpdateEnd = this._onBufferUpdateEnd.bind(this), this._emitWarning = this._emitWarning.bind(this), this._handleLoadingComplete = this._handleLoadingComplete.bind(this), this._onRateChange = this._onRateChange.bind(this), this._onVideoResize = this._onVideoResize.bind(this), this._setAudioGain = this._setAudioGain.bind(this), this._onVolumeChanged = this._onVolumeChanged.bind(this), this._init(), this._getCacheKey = this._getCacheKey.bind(this)
                }
                static create(e) {
                    let t = Object.assign({}, e);
                    return e.disallowProtectedTracks ? B.createWithOptions(t) : g.X.create({
                        transport: e.transport,
                        disallowRobustnessValues: e.disallowRobustnessValues,
                        disallowCodecs: e.disallowCodecs,
                        noServerCertificate: e.noServerCertificate,
                        precacheServerCertificate: e.precacheServerCertificate,
                        unauthServerCertificateBase: e.unauthServerCertificateBase,
                        preferredKeySystems: e.preferredKeySystems
                    }).then(e => {
                        t.emeManager = e;
                        let i = new B(t);
                        return t.preinitMediaElement ? i._preinitMediaElement() : i
                    }).catch(i => {
                        if (e.enableWithoutEME) return B.createWithOptions(t);
                        throw i
                    })
                }
                static createWithOptions(e) {
                    return new Promise(t => {
                        let i = new B(e);
                        t(e.preinitMediaElement ? i._preinitMediaElement() : i)
                    })
                }
                _init() {
                    this._disableCache && O.info("Cache disabled."), this._transport.on(this._transport.EVENT_CONNECTION_OFFLINE, this._onNavigatorOffline), this.proxyEmitAllSync(this._tracker, {
                        [d.J.TRACKER_TRACKING_DATA_CREATED]: d.J.PLAYER_TRACKING_DATA_CREATED,
                        [d.J.TRACKER_TRACKING_DATA_FINALIZED]: d.J.PLAYER_TRACKING_DATA_FINALIZED,
                        [d.J.TRACKER_PLAYBACK_START]: d.J.PLAYER_PLAYBACK_START,
                        [d.J.TRACKER_LOG_CLIENT_EVENT]: d.J.PLAYER_LOG_CLIENT_EVENT
                    }), this._tracker.on(d.J.TRACKER_PLAYED_THRESHOLD_REACHED, this._onPlayedThresholdReached), this._emeManager && this._emeManager.addListeners({
                        [d.J.EME_LICENSE_REQUEST_CAPPED]: this._onLicenseRequestCapped,
                        [d.J.EME_LICENSE_REQUEST_ERROR]: this._onLicenseRequestError
                    }), this._bufferManager.addListeners({
                        [d.J.BUFFER_APPEND_ERROR]: this._onBufferError,
                        [d.J.BUFFER_QUOTA_EXCEEDED]: this._onQuotaExceeded,
                        [d.J.BUFFER_UPDATE_END]: this._onBufferUpdateEnd
                    }), this._mediator.addListeners({
                        [p.T.FRAGMENT_FETCHED]: this._onFragmentFetched,
                        [p.T.VIDEO_PROFILE_CHANGED]: this._onProfileChanged
                    }), this.proxyEmitAll(this._mediator, {
                        [p.T.FRAGMENT_FETCH_ERROR]: d.J.PLAYER_FRAGMENT_FETCH_ERROR
                    }), this.proxyEmitSync(this._subtitleManager, d.J.PLAYER_DISPLAYED_CUES_CHANGED, d.J.PLAYER_DISPLAYED_CUES_CHANGED), this.proxyEmit(this._subtitleManager, d.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, d.J.PLAYER_SUBTITLE_LANGUAGES_LOADED), this._subtitleManager.addListener(d.J.SUBTITLE_MANAGER_LANGUAGE_CHANGED, e => {
                        var t;
                        this.emit(d.J.PLAYER_SUBTITLE_LANGUAGE_CHANGED, Object.assign(Object.assign({}, e.data), {
                            position: w((null == (t = this._player) ? void 0 : t.currentTime) || 0),
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }))
                    }), this._subtitleManager.addListener(d.J.SUBTITLE_MANAGER_VISIBILITY_CHANGED, e => {
                        this.emit(d.J.PLAYER_SUBTITLE_VISIBILITY_CHANGED, Object.assign(Object.assign({}, e.data), {
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }))
                    }), this.proxyEmitAll(this._videoResolver, {
                        [d.J.VIDEO_MANIFEST_RESOLVED]: d.J.PLAYER_VIDEO_MANIFEST_RESOLVED,
                        [d.J.VIDEO_MANIFEST_RESOLVE_FAILED]: d.J.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED
                    }), this._tracker.addListeners({
                        [d.J.TRACKER_FIRST_QUARTILE]: () => this._emitReporting("first_quartile"),
                        [d.J.TRACKER_MIDPOINT]: () => this._emitReporting("midpoint"),
                        [d.J.TRACKER_THIRD_QUARTILE]: () => this._emitReporting("third_quartile")
                    }), this.addListeners({
                        [d.J.PLAYER_PLAYBACK_START]: () => {
                            this._emitReporting("start"), this._emitReporting("creative_view")
                        },
                        [d.J.PLAYER_ENDED]: () => this._emitReporting("complete"),
                        [d.J.PLAYER_ERROR]: () => this._emitReporting("error"),
                        [d.J.PLAYER_PLAYING_PROFILE_CHANGED]: this._onPlayingProfileChanged
                    })
                }
                _onRateChange() {
                    if (!this._player) return;
                    let e = this._player.playbackRate;
                    (null === this._lastReportedPlaybackSpeed || this._lastReportedPlaybackSpeed !== e) && (this._lastReportedPlaybackSpeed = e, 0 !== e && this._tracker.trackSpeedChanged(e), this.emit(d.J.PLAYER_PLAYBACK_SPEED_CHANGED, Object.assign({
                        playback_speed: e,
                        playback_speed_selected: this._playerSpeed,
                        rebuffering: this._rebuffering,
                        seeking: this._seeking,
                        position: w(this._player.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)())))
                }
                _onLicenseRequestError(e) {
                    var t;
                    if (e.data.signal.aborted) return;
                    let i = this._currentContent;
                    if (!i) return;
                    let r = e.data.error,
                        a = null == (t = i.getKeySystemInfo()) ? void 0 : t.keySystem;
                    r.shouldRefreshEndpoint && a && this._licenseURLResolver.remove(a, i.getMediaType());
                    let n = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(r, !r.unrecoverable, n, i.toLogJSON())
                }
                _onFragmentFetched(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackFragment(t), this.emit(d.J.PLAYER_FRAGMENT_FETCHED, t)
                }
                _onProfileChanged(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackProfileChanged(t.profile), this.emit(d.J.PLAYER_VIDEO_PROFILE_CHANGED, t)
                }
                _onLicenseRequestCapped(e) {
                    !e.data.signal.aborted && this._currentContent && (this.pause(), this.emit(d.J.PLAYER_CAPPED, {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _shouldNextErrorBeFatal() {
                    let e = this._currentContent;
                    if (!e || e.hasNonFatalErrors() || !e.isProtected() || !this._player) return !1;
                    let t = this._player.error;
                    if (!t || !(t instanceof MediaError)) return this._fatalOnNextError = !1, !1;
                    switch (t.code) {
                        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        case MediaError.MEDIA_ERR_DECODE:
                            return !0;
                        default:
                            return !1
                    }
                }
                _onNavigatorOffline() {
                    this._tracker.trackNavigatorOffline()
                }
                _onBufferError(e) {
                    let t = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(e.data.error, e.data.canPlayNext, t, e.data.track)
                }
                _onBufferUpdateEnd() {
                    var e;
                    this._setRebufferingState(!0), this._rebuffering && this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === l.j.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime, {
                        stopPosition: this._stopPosition
                    })
                }
                _addPlayerEvents(e) {
                    e.addEventListener(d.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.addEventListener(d.J.MEDIA_PLAY, this._onPlay), e.addEventListener(d.J.MEDIA_PLAYING, this._onPlaying), e.addEventListener(d.J.MEDIA_PAUSE, this._onPause), e.addEventListener(d.J.MEDIA_SEEKED, this._onSeeked), e.addEventListener(d.J.MEDIA_SEEKING, this._onSeeking), e.addEventListener(d.J.MEDIA_ENCRYPTED, this._onEncrypted), e.addEventListener(d.J.MEDIA_ENDED, this._onEnded), e.addEventListener(d.J.MEDIA_ERROR, this._onError), e.addEventListener(d.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.addEventListener(d.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.addEventListener(d.J.MEDIA_WAITING, this._onWaiting), e.addEventListener(d.J.MEDIA_CANPLAY, this._onCanPlay), e.addEventListener(d.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.addEventListener(d.J.MEDIA_RATECHANGE, this._onRateChange), e.addEventListener(d.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.addEventListener(d.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.addEventListener(d.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _removePlayerEvents(e) {
                    e.removeEventListener(d.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.removeEventListener(d.J.MEDIA_PLAY, this._onPlay), e.removeEventListener(d.J.MEDIA_PLAYING, this._onPlaying), e.removeEventListener(d.J.MEDIA_PAUSE, this._onPause), e.removeEventListener(d.J.MEDIA_SEEKED, this._onSeeked), e.removeEventListener(d.J.MEDIA_SEEKING, this._onSeeking), e.removeEventListener(d.J.MEDIA_ENCRYPTED, this._onEncrypted), e.removeEventListener(d.J.MEDIA_ENDED, this._onEnded), e.removeEventListener(d.J.MEDIA_ERROR, this._onError), e.removeEventListener(d.J.MEDIA_WAITING, this._onWaiting), e.removeEventListener(d.J.MEDIA_CANPLAY, this._onCanPlay), e.removeEventListener(d.J.MEDIA_RATECHANGE, this._onRateChange), e.removeEventListener(d.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.removeEventListener(d.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.removeEventListener(d.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.removeEventListener(d.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.removeEventListener(d.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.removeEventListener(d.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _recreateMediaElement(e, t, i, r) {
                    var a, n, s, o, d;
                    if (r.aborted) return O.info("Recreate player dropped: operation aborted."), Promise.resolve(null);
                    let _ = this._player,
                        h = Promise.resolve(null);
                    if (_) {
                        let r;
                        if (!this._newElementPerTrack && ("AUDIO" !== _.tagName || "video" !== t) && !(_ === this._audioProcessor.getPlayer() && !(null == (a = this._upcomingContent) ? void 0 : a.isProtected())) && (r = !0, Object.keys(e).forEach(t => {
                                let i = e[t];
                                'audio/mp2t;codecs="mp4a.40.2"' !== i && i && !_.canPlayType(i) && (r = !1)
                            }), r)) return O.info("Reusing media element."), (e.audio !== this._activeMimeTypes.audio || e.video !== this._activeMimeTypes.video || this._newBufferPerTrack) && i === l.j.MSE && (O.info("Recreating buffer."), this._bufferManager.recreate(e), this._activeMimeTypes = e), Promise.resolve({
                            player: _,
                            mediaKeys: _.mediaKeys
                        });
                        this._removePlayerEvents(_), _.pause(), h = this._cleanMediaKeys(_), this._useResizeObserver && this._enableAbrOnElementSize && (null == (n = this._resizeObserver) || n.disconnect()), this._player = null, null == (s = this._playerContainerManager) || s.eject(_, "video"), null == (o = this._playerContainerManager) || o.eject(_, "audio")
                    }
                    O.info(`Creating new media element for media type ${t}.`);
                    let c = this._createPlayer(t),
                        u = this._playerVolume;
                    return c.volume = this._cubicVolume ? Math.pow(u, 3) : u, c.autoplay = !1, c.loop = !1, c.muted = null != (d = null == _ ? void 0 : _.muted) && d, "playsInline" in c && (c.playsInline = !0), this._player = c, this._playerActivated = !1, this._addPlayerEvents(c), i === l.j.MSE && this._bufferManager.recreate(e), this._activeMimeTypes = e, this._useResizeObserver && this._enableAbrOnElementSize && (this._resizeObserver = new ResizeObserver(e => {
                        for (let t of e) {
                            let e = t.contentRect;
                            (0, M.ns)(this._currentContent) && this._currentContent.adapt({
                                currentElementSize: {
                                    height: e.height,
                                    width: e.width
                                }
                            })
                        }
                    }), this._player && this._resizeObserver.observe(this._player)), h.then(e => ({
                        player: c,
                        mediaKeys: e
                    }))
                }
                _getContainerElement(e) {
                    var t;
                    if ("string" == typeof e) {
                        let i = document.querySelector(e);
                        if (i) return i;
                        let r = new y.i(h.I.PLAYER_CONTAINER_ELEMENT_NOT_FOUND, "Container element was not found in the DOM");
                        return r.listPlayerIgnore = !0, this._emitWarning(r, null == (t = this._currentContent) ? void 0 : t.toLogJSON()), null
                    }
                    return e || null
                }
                _onVideoResize() {
                    if (!(this._player instanceof HTMLVideoElement)) return;
                    let {
                        videoWidth: e,
                        videoHeight: t
                    } = this._player;
                    this.emit(d.J.PLAYER_VIDEO_RESIZED, Object.assign({
                        width: e,
                        height: t
                    }, (0, k.P)()))
                }
                _onDurationChange() {
                    var e;
                    let t = null == (e = this._abortController) ? void 0 : e.signal,
                        i = () => {
                            if (!this._player) return;
                            if (null == t ? void 0 : t.aborted) return void O.info("Duration changed drop: operation aborted.");
                            let e = w(this._player.duration),
                                i = w(this._player.currentTime);
                            this._tracker.setActualDuration(e), this.emit(d.J.PLAYER_DURATION_CHANGED, Object.assign({
                                position: i,
                                duration: e,
                                playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                            }, (0, k.P)()))
                        };
                    this._loaded ? i() : this.once(d.J.PLAYER_LOAD, i)
                }
                _onPlay() {
                    var e;
                    if (!this._player || !this._currentContent) return;
                    let t = w(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlay(t, this._player.playbackRate), this.emit(d.J.PLAYER_PLAY, Object.assign({
                        position: t,
                        logData: null != (e = this._currentContent.getLogData()) ? e : null
                    }, (0, k.P)()))
                }
                _onPlaying() {
                    if (!this._player) return;
                    this._playerActivated = !0;
                    let e = this._currentContent,
                        t = w(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlaying(t), this.emit(d.J.PLAYER_PLAYING, Object.assign({
                        position: t,
                        logData: e ? e.getLogData() : null,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _onPause() {
                    var e;
                    if (!this._player) return;
                    let t = this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime,
                        i = w(t);
                    this._tracker.trackPaused(i), this._lastReportedPosition = t;
                    let r = this._currentContent ? this._currentContent.getLogData() : null;
                    this._pauseToken = setTimeout(() => {
                        clearTimeout(this._syntheticEndedToken), this.emit(d.J.PLAYER_PAUSED, Object.assign({
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                            position: i,
                            logData: r
                        }, (0, k.P)()))
                    }, 10), this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === l.j.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime, {
                        stopPosition: this._stopPosition
                    })
                }
                _onSeeked() {
                    this._seeking = !1;
                    let e = this._loopWrapSeekGuard;
                    if (this._loopWrapSeekGuard = !1, !this._player || !this._currentContent) return;
                    let t = this._player.currentTime,
                        i = this._player.duration,
                        r = null !== this._lastReportedPosition ? w(this._lastReportedPosition) : null;
                    if (!e && this._isNativeLoopWrap(t, i)) return void this._handleLoopRestart(t);
                    if (!e && null !== this._lastLoopRestartMonotonic && 250 > (0, o.r)(this._lastLoopRestartMonotonic)) return;
                    e && (this._lastReportedPosition = t);
                    let a = w(t);
                    this._tracker.trackPositionChanged(a), this.emit(d.J.PLAYER_POSITION_CHANGED, Object.assign({
                        previousPosition: r,
                        position: a,
                        logData: this._currentContent.getLogData(),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _onSeeking() {
                    if (this._seeking = !0, this._stopPositionEndedEmitted = !1, this.emit(d.J.PLAYER_SEEKING, Object.assign({
                            previousPosition: null !== this._lastReportedPosition ? w(this._lastReportedPosition) : null,
                            position: this._player ? w(this._player.currentTime) : 0,
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }, (0, k.P)())), this._setRebufferingState(), !this._player) return;
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.strategy) !== l.j.MSE) return;
                    if (e.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void O.log("Dropping seek event: buffering before license disabled.");
                    let t = this._player.currentTime;
                    this._bufferManager.isPositionInCurrentFillRange(e, t) || (O.log("Aborting buffer operations."), this._bufferManager.abort(this._clearBufferOnSeek));
                    let i = this._bufferManager;
                    i.checkBufferHealth(e, t, {
                        isSeeking: !1,
                        stopPosition: this._stopPosition
                    });
                    let r = i.getBufferedSegmentInfoForTime(t);
                    this._checkPlayingProfile(r)
                }
                _onRequiresDuration() {
                    this._currentContent && this._currentContent.isProtected() && this._player && (this._player.duration = this._currentContent.getCalculatedDuration())
                }
                _onPlayingProfileChanged(e) {
                    let {
                        profile: t
                    } = e.data;
                    t && (this._tracker.trackPlayingProfileChanged(t), this.emit(d.J.PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED, Object.assign({
                        media_quality: this._getCurrentMediaQuality(),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)())))
                }
                _onQuotaExceeded() {
                    var e;
                    this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === l.j.MSE && this._rebufferOnQuotaExceeded && (O.info("Exceeded quota: rebuffering current track."), this._bufferManager.abort(!0), this._player.currentTime = this._player.currentTime, this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime, {
                        isSeeking: !0,
                        stopPosition: this._stopPosition
                    }))
                }
                _onEncrypted(e) {
                    O.info("Got Encrypted event"), this._currentContent && this.emitSync(d.J.INTERNAL_ENCRYPTED, Object.assign({
                        initData: e.initData,
                        fromPolyfill: !!e.fromPolyfill
                    }, (0, k.P)()))
                }
                _onEnded() {
                    if (!(!this._currentContent || this._synthesizeEnded && this._currentContent.isProtected())) {
                        if (null !== this._stopPosition) {
                            clearTimeout(this._pauseToken), this._stopPositionEndedEmitted || (this._stopPositionEndedEmitted = !0, O.info("Native ended fallback for stopPosition content."), this._emitEnded());
                            return
                        }
                        O.info("Native ended emitted."), this._emitEnded()
                    }
                }
                _onSyntheticEnded() {
                    this._synthesizeEnded && this._currentContent && this._currentContent.isProtected() && (O.info("Synthetic ended emitted."), this._emitEnded())
                }
                _onError() {
                    var e, t, i, r;
                    let a, n, s, o, l;
                    if (!this._player) return;
                    let d = this._player.error,
                        _ = !1,
                        c = this._currentContent,
                        u = !1;
                    c && (_ = c.isProtected(), a = c.toLogJSON(), u = c.hasNonFatalErrors(), c.unload());
                    let p = !0,
                        E = !c || u || !this._fatalOnNextError,
                        g = d && d.msExtendedCode ? `0x${(d.msExtendedCode>>>0).toString(16).toUpperCase()}` : null,
                        m = `data:${(null==a?void 0:a.fileId)||"unknown"}`;
                    if (d instanceof MediaError) {
                        switch (d.code) {
                            case MediaError.MEDIA_ERR_ABORTED:
                                n = h.I.MEDIA_ABORTED, s = "Media aborted.";
                                break;
                            case MediaError.MEDIA_ERR_NETWORK:
                                n = h.I.MEDIA_NETWORK_ERROR, s = "Network error.", o = {
                                    isNetworkRelated: !0
                                };
                                break;
                            case MediaError.MEDIA_ERR_DECODE:
                                n = h.I.MEDIA_DECODING_ERROR, s = "Media decoding error.", p = E;
                                break;
                            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                n = h.I.MEDIA_NOT_SUPPORTED, s = "Media not supported.", p = E;
                                break;
                            default:
                                n = h.I.PLAYER_MEDIA_ERROR, s = "Media error.", l = !0
                        }
                        let e = d.message || g || m || d.toString();
                        s += ` (${e})`
                    } else n = h.I.PLAYER_PLAYBACK_ERROR, s = "Error message undefined", l = !0;
                    this._bufferManager.abort(!0);
                    let P = new y.i(n, s, o);
                    p || (P.unrecoverable = !0), P.listPlayerIgnore = u, P.debug.src_url = m, P.debug.protected = _, P.debug.extendedCode = g, P.debug.rawExCode = d && d.msExtendedCode || null, P.debug.audio_profile = null == (t = null == (e = this._currentPlayingProfile) ? void 0 : e.audio) ? void 0 : t.id, P.debug.video_profile = null == (r = null == (i = this._currentPlayingProfile) ? void 0 : i.video) ? void 0 : r.id, l && d && (P.debug.nativeCode = d.code || null, P.debug.errorData = d);
                    let f = (0, k.P)();
                    this._emitError(P, p, f, a)
                }
                _onLoadedMetadata() {
                    this.emitSync(d.J.INTERNAL_PLAYER_LOADED_METADATA, Object.assign({}, (0, k.P)()))
                }
                _onCanPlay() {
                    let {
                        timestamp: e,
                        monotonicTimestamp: t
                    } = (0, k.P)();
                    this._setRebufferingState(), this.emitSync(d.J.INTERNAL_PLAYER_CANPLAY, {
                        timestamp: e,
                        monotonicTimestamp: t
                    }), this._tracker.trackFirstBytesLatency(t), this.emit(d.J.PLAYER_FIRST_BYTES, {
                        timestamp: e,
                        monotonicTimestamp: t,
                        position: this._player ? w(this._player.currentTime) : 0
                    })
                }
                _onCanPlayThrough() {
                    this._setRebufferingState(), this.emitSync(d.J.INTERNAL_PLAYER_CANPLAYTHROUGH, Object.assign({}, (0, k.P)()))
                }
                _onWaiting() {
                    var e;
                    clearTimeout(this._syntheticEndedToken);
                    let t = this._player;
                    if (!t || !this._currentContent) return;
                    if (this._stopPositionEndedEmitted) return void O.info("Ignoring waiting event: track has already ended.");
                    let i = t.seeking;
                    this._setRebufferingState();
                    let r = !!(0, M.ns)(this._currentContent) && this._currentContent.canLowerBitrate(),
                        a = this._tracker;
                    this.emit(d.J.PLAYER_BUFFERING_START, Object.assign(Object.assign({
                        position: w(t.currentTime),
                        msPlayed: this._tracker.getMSPlayed(),
                        canLowerBitrate: r,
                        seeking: i
                    }, a.getStallsInformation()), (0, k.P)()));
                    let n = null == (e = this._abortController) ? void 0 : e.signal;
                    this._getRebufferingLatency().then(e => {
                        null != n && n.aborted || (i || this._tracker.trackMsStalled(e), this.emit(d.J.PLAYER_BUFFERING_END, Object.assign(Object.assign({
                            position: w(t.currentTime),
                            msPlayed: this._tracker.getMSPlayed(),
                            canLowerBitrate: r,
                            msStalled: e,
                            seeking: i
                        }, a.getStallsInformation()), (0, k.P)())))
                    })
                }
                _onPlayedThresholdReached(e) {
                    this._currentContent && this._player && this.emit(d.J.PLAYER_PLAYED_THRESHOLD_REACHED, Object.assign({
                        played: e.data.played,
                        threshold: e.data.threshold,
                        position: w(this._player.currentTime)
                    }, (0, k.P)()))
                }
                _emitEnded() {
                    var e;
                    this._currentContent && "video" === this._currentContent.getMediaType() && this.emit(d.J.PLAYER_ENDED_VIDEO, Object.assign({}, (0, k.P)())), clearTimeout(this._pauseToken), this.emit(d.J.PLAYER_ENDED, Object.assign({
                        position: w((null == (e = this._player) ? void 0 : e.currentTime) || 0),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _isNativeLoopWrap(e, t) {
                    var i;
                    return !!(null == (i = this._player) ? void 0 : i.loop) && null !== this._lastReportedPosition && !(t <= 0) && e < this._lastReportedPosition && this._lastReportedPosition - e > .5 * t
                }
                _handleLoopRestart(e) {
                    var t;
                    O.info("Loop boundary detected."), this._lastReportedPosition = e, this._canPreloadEmitted = !1, this.emit(d.J.PLAYER_LOOP_RESTART, Object.assign({
                        position: "number" == typeof(null == (t = this._player) ? void 0 : t.duration) && isFinite(this._player.duration) && this._player.duration > 0 ? w(this._player.duration) : w(e),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _emitError(e, t, i, r) {
                    O.error("Player Error", e, r, t), this._tracker.setHadError(!0), !this._disableCache && r && r.fileId && this._cache.remove(r.fileId), this.emit(d.J.PLAYER_ERROR, {
                        playId: this._playId,
                        error: e,
                        track: r,
                        canPlayNext: t,
                        position: this._player ? w(this._player.currentTime) : 0,
                        timestamp: i.timestamp,
                        monotonicTimestamp: i.monotonicTimestamp,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    })
                }
                _emitWarning(e, t) {
                    O.warn("Player Warning", e, t, !0), this._tracker.trackWarning(), this.emit(d.J.PLAYER_WARNING, Object.assign({
                        playId: this._playId,
                        error: e,
                        track: t,
                        canPlayNext: !0,
                        position: this._player ? w(this._player.currentTime) : 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _emitReporting(e) {
                    if (!(0, M.Cj)(this._currentContent)) return;
                    let t = this._currentContent.getTrackingEventData(e);
                    t && 0 !== t.urls.length && this.emitAndWait(Y[e], t, e => {
                        if (!e.defaultPrevented)
                            for (let e of t.urls) this._transport.request(e, {
                                forget: !0
                            })
                    })
                }
                _prepareMediaElement(e, t) {
                    if (t.aborted || !this._upcomingContent) return O.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    let i = this._upcomingContent.getMediaTypeMimeTypes();
                    return this._recreateMediaElement(i, this._upcomingContent.getMediaType(), this._upcomingContent.strategy, t).then(i => {
                        var r;
                        if (!i || t.aborted) return O.info("Loading content dropped after recreate: operation aborted."), Promise.resolve(!1);
                        let {
                            player: a,
                            mediaKeys: n
                        } = i;
                        if ("VIDEO" === a.tagName && (e.poster ? a.poster = e.poster : a.removeAttribute("poster")), this.setMuted(!!e.muted, !1), a.loop = !!e.loop, !this._emeManager || !(null == (r = this._upcomingContent) ? void 0 : r.isProtected())) return Promise.resolve(!0);
                        let s = e => {
                            var t;
                            let i = (0, k.P)();
                            return e.unrecoverable = !0, this._emitError(e, !1, i, null == (t = this._upcomingContent) ? void 0 : t.toLogJSON()), Promise.reject(e)
                        };
                        return !n || this._newMediaKeysPerTrack || void 0 === this._newMediaKeysPerTrack && !a.mediaKeys || (null == n ? void 0 : n.shouldRefreshPerTrack) ? (O.info("Creating media keys"), this._emeManager.createMediaKeys(a).then(() => !0, s)) : a.mediaKeys !== n ? (O.info("Reusing previous media keys"), this._emeManager.setMediaKeys(a, n).then(() => !0, s)) : Promise.resolve(!0)
                    })
                }
                _isRebufferingTargetReached() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return !1;
                    if (i.strategy === l.j.URL) return t.readyState > 2;
                    let r = null != (e = this._rebufferTarget[i.getMediaType()]) ? e : 0;
                    if (!r) return !0;
                    let a = Math.max(t.currentTime, 1),
                        n = Math.min(r, Math.floor((null !== this._stopPosition ? this._stopPosition / 1e3 : t.duration) - a)),
                        s = t.buffered;
                    for (let e = 0, i = s.length; e < i; e++) {
                        let i = s.start(e),
                            r = s.end(e);
                        if (i <= a && a <= r) {
                            if (n <= r - a) return !0
                        } else if (i > a && i - a <= .005 && n <= r - i) return O.info(`Bridging small gap: ${t.currentTime}s -> ${i}s`), t.currentTime = i, !0
                    }
                    return !1
                }
                _setPlaybackRate() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return;
                    if (i.strategy === l.j.MSE && this._rebuffering) {
                        t.playbackRate = 0;
                        return
                    }
                    let r = (null == (e = this._loadingOptions) ? void 0 : e.useDefaultPlaybackSpeed) ? 1 : this._playerSpeed;
                    t.playbackRate = r, t.defaultPlaybackRate = r
                }
                _setRebufferingState(e) {
                    var t;
                    let i = this._player,
                        r = this._rebuffering,
                        a = !this._isRebufferingTargetReached();
                    e && a || (this._rebuffering = a, this._setPlaybackRate(), !r && this._rebuffering ? (O.log("Rebuffering start"), this.emit(d.J.PLAYER_REBUFFERING_START, Object.assign({
                        position: i ? w(i.currentTime) : 0,
                        playback_speed: null != (t = null == i ? void 0 : i.playbackRate) ? t : 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))) : r && !this._rebuffering && (O.log("Rebuffering end"), this._tracker.trackPlayLatency(), this.emit(d.J.PLAYER_REBUFFERING_END, Object.assign({
                        position: i ? w(i.currentTime) : 0,
                        playback_speed: i ? i.playbackRate : 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))))
                }
                _checkPlayingProfile(e, t) {
                    var i, r, a, n, s;
                    let o = this._currentPlayingProfile,
                        l = !!t;
                    if ((null == (i = null == o ? void 0 : o.audio) ? void 0 : i.id) !== (null == (r = null == e ? void 0 : e.audio) ? void 0 : r.profileId) || (null == (a = null == o ? void 0 : o.video) ? void 0 : a.id) !== (null == (n = null == e ? void 0 : e.video) ? void 0 : n.profileId)) {
                        let t = e ? {
                            audio: e.audio ? {
                                id: e.audio.profileId,
                                mimeType: e.audio.mimeType,
                                bitrate: e.audio.bitrate
                            } : void 0,
                            video: e.video ? {
                                id: e.video.profileId,
                                mimeType: e.video.mimeType,
                                bitrate: e.video.bitrate,
                                width: e.video.width,
                                height: e.video.height,
                                resolution: e.video.resolution
                            } : void 0,
                            encodingId: null == (s = this._currentContent) ? void 0 : s.getEncodingId()
                        } : null;
                        this._currentPlayingProfile = t, l = !0
                    }
                    l && (O.log("Playing profile changed", this._currentPlayingProfile), this.emit(d.J.PLAYER_PLAYING_PROFILE_CHANGED, Object.assign({
                        profile: this._currentPlayingProfile,
                        position: this._player ? w(this._player.currentTime) : 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        reason: "abr"
                    }, (0, k.P)())))
                }
                _configureLoadingTimeout(e, t, i) {
                    let r = null != i ? i : this._loadingTimeout,
                        a = new y.i(h.I.PLAYER_TIMEOUT_ERROR, `Timeout: track could not be loaded within ${r} ms.`);
                    return r ? setTimeout(() => {
                        if (e.aborted) return;
                        null == t || t.abort();
                        let i = Object.assign({}, (0, k.P)());
                        this._emitError(a, !0, i)
                    }, r) : void 0
                }
                _handleLoadingComplete(e, t) {
                    var i;
                    clearTimeout(t);
                    let r = this._currentContent && this._currentContent.getMediaType();
                    return this._player && r && (null == (i = this._playerContainerManager) || i.inject(this._player, r)), this._upcomingContent = null, e
                }
                _handleLoadingError(e, t, i, r, a) {
                    if (clearTimeout(r), this._upcomingContent = null, i.aborted) return Promise.resolve(!1);
                    let n = (0, k.P)();
                    if (this._tracker.trackLoadFailed(), this.emit(d.J.PLAYER_LOADING_FAILED, Object.assign({
                            uri: e,
                            logData: t.logData
                        }, n)), a) {
                        let i = a.track || {
                            uri: e,
                            fileId: t.fileId,
                            mediaFormat: t.format,
                            deviceId: t.logData.deviceId
                        };
                        this._emitError(a, "StorageError" !== a.name || !!a.canPlayNext, n, i)
                    }
                    return Promise.reject(a)
                }
                _handleLoadedMetadata(e, t, i) {
                    if (e.aborted) return void O.info("LoadedMetadata operations dropped: operation aborted.");
                    this._loaded = !0;
                    let r = this._player;
                    if (!r) return;
                    this._setRebufferingState(), this._bufferManager.dequeueUpdates();
                    let a = i.position > r.duration ? 0 : i.position;
                    (isNaN(r.currentTime) || r.currentTime < a) && (O.info("Resetting initial position after metadata."), r.currentTime = a, this._lastReportedPosition = r.currentTime), this._tracker.trackLoadDone(w(r.currentTime)), this.emitSync(d.J.PLAYER_LOAD, Object.assign({
                        autoplay: i.autoplay,
                        position: w(a),
                        logData: t
                    }, (0, k.P)()));
                    let n = () => {
                        r.currentTime < a && (O.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime)
                    };
                    i.autoplay && !r.error && (n = () => {
                        if (r.currentTime < a && (O.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime), e.aborted) return void O.info("Play trigger dropped: operation aborted");
                        new Promise(e => e(this._player && this._player.play())).then(() => this._audioProcessor.resume()).catch(e => {
                            if (e) {
                                if ("NotSupportedError" === e.name) return Promise.reject(e);
                                else if ("NotAllowedError" === e.name) return this.emit(d.J.PLAYER_AUTOPLAY_FAILED, Object.assign({}, (0, k.P)())), Promise.reject(e)
                            }
                            return this._player ? this._player.play() : Promise.resolve()
                        }).catch(() => {
                            this._onPause()
                        })
                    }), r.readyState > 2 ? (O.info("Ready to play, triggering play."), n()) : (O.info("Waiting to be playable."), this.once(d.J.INTERNAL_PLAYER_CANPLAY, n))
                }
                _handleCanPlayThrough(e) {
                    var t;
                    if (e.aborted) return void O.info("CanPlayThrough operations dropped: operation aborted.");
                    this._tracker.trackCanPlayThrough(), (null == (t = this._currentContent) ? void 0 : t.strategy) !== l.j.MSE && this._tracker.trackPlayLatency()
                }
                _loadContent(e, t) {
                    if (t.aborted || !this._upcomingContent) return O.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player) throw new y.i(h.I.PLAYER_INVALID_INTERNAL_STATE, "Cannot load content without an HTMLMediaElement");
                    this._canPreloadEmitted = !1;
                    let i = this._upcomingContent;
                    this._upcomingContent = null, this._currentContent = i, this._setAudioGain(i);
                    let r = (0, M.s3)(i) ? i.getSeekPanels() : null;
                    this.emit(d.J.PLAYER_SEEK_PANELS_LOADED, Object.assign({
                        seekPanels: r
                    }, (0, k.P)())), this._subtitleManager.setVideoContent((0, M.eq)(i) ? i : null);
                    let a = e.callback;
                    a && this.once(d.J.PLAYER_LOAD, () => {
                        if (t.aborted) return void O.info("Load content event dropped: operation aborted.");
                        a()
                    }), this.once(d.J.INTERNAL_PLAYER_LOADED_METADATA, this._handleLoadedMetadata.bind(this, t, this._currentContent.getLogData(), e)), this.once(d.J.INTERNAL_PLAYER_CANPLAYTHROUGH, this._handleCanPlayThrough.bind(this, t));
                    let n = e.position,
                        s = "getCalculatedDuration" in i ? i.getCalculatedDuration() : 1 / 0;
                    s && n > s && (n = e.position = 0);
                    try {
                        this._player.currentTime = n, this._lastReportedPosition = this._player.currentTime
                    } catch (e) {
                        O.warn("Cannot set initial position before loading.", e)
                    }
                    this._setRebufferingState();
                    let o = e.playbackSpeed;
                    return (!e.useDefaultPlaybackSpeed && o && this.setPlaybackSpeed(o), this._tracker.setProtected(i.isProtected()), this._tracker.trackStrategy(i.strategy), this._tracker.setContentClass(i.contentClassName), O.info(`Detecting ${i.strategy} strategy for ${i.contentClassName}.`), i.strategy === l.j.MSE) ? this._loadMSEContent(i, e, t) : this._loadURLContent(i, e, t)
                }
                _loadURLContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new y.i(h.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    O.info("Loading URL content.");
                    let n = e.getURL();
                    if (!n) return Promise.reject(new y.i(h.I.PLAYER_INVALID_INTERNAL_STATE, "Content not loaded."));
                    let s = this._tracker;
                    if (s.setUrl(n), e.isProtected()) {
                        O.info("URL content is protected");
                        let e = t => {
                            t.data.fromPolyfill && (this.removeListener(d.J.INTERNAL_ENCRYPTED, e), this._requestLicense(i, {
                                initData: t.data.initData
                            }))
                        };
                        this.on(d.J.INTERNAL_ENCRYPTED, e)
                    }
                    if ("video" === e.getMediaType() && (0, M.Pb)(e)) {
                        let t = e.getMediaProfileInfo();
                        s.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    s.trackBufferLoadStart(), s.trackBufferURL(n, {
                        bandwidth: 0
                    });
                    let o = e.getLoadingApproach();
                    if ("src" === o.approach) O.info("URL content loaded using src attribute"), this._player.src = n;
                    else {
                        O.info("URL content loaded using source element");
                        let e = document.createElement("source");
                        e.src = n, e.type = o.type, this._player.appendChild(e)
                    }
                    return this._player.load(), Promise.resolve(!0)
                }
                _loadMSEContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new y.i(h.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    if (O.info(`Loading MSE Content: ${e.getFileId()}`), e.isProtected()) {
                        O.log("MSE content is protected");
                        let r = () => this._requestLicense(i).then(() => {
                            !i.aborted && (this._licenseRequested = !0, this._disableBufferingBeforeLicense && this._bufferManager.checkBufferHealth(e, t.position, {
                                isSeeking: !0,
                                stopPosition: this._stopPosition
                            }))
                        });
                        this._disableLicensePrefetch ? this.once(d.J.INTERNAL_ENCRYPTED, r) : this._bufferManager.once(d.J.BUFFER_SOURCE_OPEN, r)
                    }
                    let n = this._bufferManager,
                        s = n.getMediaSource();
                    if (!s) return Promise.reject(new y.i(h.I.PLAYER_INVALID_INTERNAL_STATE, "No media source."));
                    if ("video" === e.getMediaType() && (0, M.Pb)(e)) {
                        let t = e.getMediaProfileInfo();
                        this._tracker.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    let o = this._preferredMediaPlaybackQuality.video;
                    if ((0, M.TP)(e)) {
                        if (o === E.UE.AUTO) e.setVideoResolution(this._videoResolution);
                        else {
                            let t = (0, D.C)(o);
                            t && e.setVideoResolution({
                                min: t,
                                max: t,
                                start: t
                            })
                        }
                        this.emit(d.J.PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED, Object.assign({
                            media_quality: this._getCurrentMediaQuality(),
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }, (0, k.P)()))
                    }
                    return this._player.src = URL.createObjectURL(s), this._setPlaybackRate(), new Promise((r, a) => {
                        n.once(d.J.BUFFER_SOURCE_OPEN, () => {
                            if (i.aborted) return void r(!1);
                            this._tracker.trackBufferLoadStart(), this._getRebufferingLatency().then(e => {
                                i.aborted || this._tracker.trackInitialRebuffering(e)
                            }), ("video" === e.getMediaType() ? n.setDuration(e.getCalculatedDuration()) : Promise.resolve(!0)).then(() => !i.aborted && (e.isProtected() && this._disableBufferingBeforeLicense ? n.injectInitSegment(e) : (this._bufferManager.checkBufferHealth(e, t.position, {
                                isSeeking: !0,
                                stopPosition: this._stopPosition
                            }), !0))).then(r, a)
                        })
                    })
                }
                _getRebufferingLatency() {
                    return new Promise(e => {
                        if (!this._player) return void e(0);
                        let t = (0, o.X)();
                        this.once(d.J.PLAYER_REBUFFERING_END, () => {
                            e((0, o.r)(t))
                        })
                    })
                }
                _requestLicense(e, t = {}) {
                    let i;
                    if (e.aborted) return O.info("Request license dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player || !this._currentContent || !this._emeManager) return Promise.resolve(!1);
                    let r = (0, o.X)(),
                        a = this._player.mediaKeys,
                        n = this._currentContent,
                        s = n.getFileId(),
                        l = n.getLogData(),
                        _ = n.toLogJSON(),
                        h = n.getKeySystemInfo();
                    if (!h) return Promise.resolve(!1);
                    let c = h.keySystem;
                    if (!c) return Promise.resolve(!1);
                    let u = n.getLicenseEndpoint();
                    if (u) i = Promise.resolve(u);
                    else {
                        if (!s) return Promise.reject(TypeError("Missing: fileId or licenseEndpoint"));
                        i = this._licenseURLResolver.get(c, n.getMediaType()).then(e => e.replace(/\{contentId\}/, s))
                    }
                    let p = this._emeManager,
                        E = this._tracker;
                    return E.setKeySystem(c), E.setKeySystemImpl(h.keySystemImpl), E.setKeySystemLabel(h.keySystemLabel), Promise.all([i, n.getInitParams()]).then(([i, n]) => {
                        if (!n) return Promise.resolve(!1);
                        E.setLicenseSessionLatency((0, o.r)(r));
                        let s = n.initDataType,
                            l = t.initData || n.initData;
                        return a && l && s ? p.createSessionWithParams({
                            keySystem: c,
                            signal: e,
                            initData: l,
                            mediaKeys: a,
                            licenseServer: i,
                            initDataType: s
                        }) : Promise.resolve(!1)
                    }).then(t => {
                        if (e.aborted) return O.info("License tracking dropped: operation aborted."), Promise.resolve(!1);
                        "boolean" != typeof t && "elapsed" in t && (E.setLicenseGenerationLatency(t.elapsed.generate), E.setLicenseRequestLatency(t.elapsed.request), E.setLicenseUpdateLatency(t.elapsed.update));
                        let i = (0, o.r)(r);
                        return E.setKeyLatency(i), this.emit(d.J.PLAYER_KEY_RECEIVED, Object.assign({
                            requestTime: i,
                            logData: l
                        }, (0, k.P)())), O.info("License updated."), Promise.resolve(!0)
                    }).catch(t => {
                        if (e.aborted) return Promise.resolve(!1);
                        let i = !t || !("canPlayNext" in t) || t.canPlayNext,
                            r = (0, k.P)();
                        return this._emitError(t, !!i, r, _), Promise.reject(t)
                    })
                }
                _onTimeUpdate() {
                    var e;
                    if (!this._loaded || !(null == (e = this._player) ? void 0 : e.readyState) || !this._currentContent) return;
                    let t = this._currentContent,
                        i = this._player.currentTime,
                        r = this._player.duration;
                    if (!this._seeking && this._isNativeLoopWrap(i, r)) return void this._handleLoopRestart(i);
                    if (null !== this._stopPosition && w(i) >= this._stopPosition) {
                        this._stopPositionEndedEmitted || (this._stopPositionEndedEmitted = !0, O.info(`Reached stop position: ${this._stopPosition}ms`), this._emitEnded());
                        return
                    }
                    if (!this._seeking) {
                        if (t.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void O.log("Dropping time update event: buffering before license disabled.");
                        if (this._lastReportedPosition = i, t.strategy === l.j.MSE) {
                            let e = this._bufferManager;
                            e.checkBufferHealth(t, i, {
                                isSeeking: !1,
                                stopPosition: this._stopPosition
                            });
                            let r = e.getBufferedSegmentInfoForTime(i);
                            this._checkPlayingProfile(r)
                        }
                        let e = w(i),
                            r = t.getLogData();
                        this._tracker.trackProgress(e, (0, M.ns)(t) ? t.getCurrentBitrates().video : 0), this.emit(d.J.PLAYER_PROGRESS, Object.assign({
                            position: e,
                            played: this._tracker.getMSPlayed(),
                            interval: 500,
                            logData: r,
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }, (0, k.P)()))
                    }
                    let a = r - i <= this._preloadThreshold;
                    !this._canPreloadEmitted && a ? (this._canPreloadEmitted = !0, this.emit(d.J.PLAYER_CAN_PRELOAD, Object.assign({}, (0, k.P)()))) : this._canPreloadEmitted && !a && (this._canPreloadEmitted = !1), clearTimeout(this._syntheticEndedToken), this._synthesizeEnded && t.isProtected() && null === this._stopPosition && this._isPlaying() && (this._syntheticEndedToken = setTimeout(this._onSyntheticEnded, w(r - i)))
                }
                _onVolumeChanged() {
                    if (!this._player) return;
                    let e = this._playerVolume,
                        t = this._volumeCommandId;
                    this._volumeCommandId = null, this.emit(d.J.PLAYER_VOLUME_CHANGED, Object.assign({
                        volume: e,
                        commandId: null != t ? t : void 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))
                }
                _isPlaying() {
                    return !!this._player && !this._player.paused
                }
                _cleanMediaKeys(e, t = this._emeManager) {
                    return t ? t.removeMediaKeys(e).catch(e => (O.warn("Failed to remove current media keys.", e), null)) : Promise.resolve(null)
                }
                _checkKeySystemAccess() {
                    if (!this._newKeySystemAccessPerTrack || !this._player || !this._emeManager) return Promise.resolve();
                    let e = this._player,
                        t = this._emeManager;
                    return this._cleanMediaKeys(e, t).then(() => t.requestMediaKeySystemAccess()).then(() => {}).catch(e => (O.warn("Failed to request new media key system access.", e), Promise.reject(e)))
                }
                _createContent(e, t = {
                    manifestLatency: 0,
                    resolveLatency: 0
                }, i = !1) {
                    return (this._emeManager ? this._emeManager.getKeySystemInfo() : this.getMediaConfig().then(e => ({
                        keySystem: _.J.INVALID_SPOTIFY_KEY,
                        keySystemImpl: "",
                        keySystemLabel: "",
                        audioFormats: e.formatsInfo.audio,
                        videoFormats: e.formatsInfo.video
                    }))).then(i => (0, C.s)(e, {
                        transport: this._transport,
                        abrManager: this._abrManager,
                        mediator: this._mediator,
                        keySystemInfo: i,
                        audioResolver: this._audioResolver,
                        videoResolver: this._videoResolver,
                        videoResolution: this._videoResolution,
                        enableAbrOnElementSize: this._enableAbrOnElementSize,
                        disableCache: this._disableCache,
                        disallowCodec: this._disallowCodec,
                        disallowProfile: this._disallowProfile,
                        codecPriorities: this._codecPriorities,
                        allowMixedAVC1Codecs: this._allowMixedAVC1Codecs,
                        playabilityChecker: this._playabilityChecker,
                        measures: t
                    })).then(r => {
                        if (i) return r;
                        let a = this._tracker;
                        a.setResolveLatency(t.resolveLatency), a.setManifestLatency(t.manifestLatency);
                        let n = this._getCacheKey(e);
                        return n && this._cache.set(n, r), r
                    })
                }
                _preinitMediaElement() {
                    if (this._player || !this._emeManager) return Promise.resolve(this);
                    let e = (0, a.createAbortControllerLike)();
                    return this._emeManager.getKeySystemInfo().then(t => {
                        var i, r;
                        let a = {
                            audio: null == (i = t.audioFormats[0]) ? void 0 : i.contentType,
                            video: null == (r = t.videoFormats[0]) ? void 0 : r.contentType
                        };
                        return a.audio || a.video ? this._recreateMediaElement(a, a.video ? "video" : "audio", t.keySystem === _.J.FAIRPLAY ? l.j.URL : l.j.MSE, e.signal) : null
                    }).then(() => this, e => (O.warn("Cannot precreate media element:", null == e ? void 0 : e.message), this))
                }
                _setAudioGain(e) {
                    var t;
                    null == (t = this._audioProcessor) || t.setAudioGain(e.getAudioGain())
                }
                _getCacheKey({
                    fileId: e,
                    url: t,
                    format: i
                }) {
                    var r;
                    let a = !this._disableCache && J[i],
                        n = null != (r = null != e ? e : t) ? r : null;
                    return a ? n : null
                }
                _getContentPromise(e, t) {
                    let i = this._cache,
                        r = this._getCacheKey(e);
                    if (r) {
                        let a = this._preloadingTracks[r],
                            n = i.get(r);
                        if (a) return O.info("Waiting for preloading track.", r), a.then(e => (O.info("Preloading succeeded.", r), t.setResolveLatency(e.resolveLatency), t.setManifestLatency(e.manifestLatency), i.get(r))).catch(() => (O.info("Preloading failed, creating new track", r), this._createContent(e)));
                        if (n) return this._newKeySystemAccessPerTrack && this._emeManager ? this._emeManager.getKeySystemInfo().then(({
                            keySystem: i
                        }) => {
                            var a;
                            return i === (null == (a = n.getKeySystemInfo()) ? void 0 : a.keySystem) ? (O.info("Using cached track.", r, n), t.setMemoryCached(!0), n) : (O.info("Mismatched keysystem for cached track. Creating new track", r), this._createContent(e))
                        }) : (O.info("Using cached track.", r, n), t.setMemoryCached(!0), Promise.resolve(n))
                    }
                    return O.info("Creating new content", r), this._createContent(e)
                }
                _adaptVideoBitrateBasedOnVisibility() {
                    if (!this._enableAbrOnVisibilityChange || !(0, M.ns)(this._currentContent)) return;
                    let e = void 0 === this._isVideoVisible || this._isVideoVisible,
                        t = e ? this._preferredBitrate : 1e-32;
                    this._abrManager.overrideBitrate(t), this._currentContent.adapt({
                        backgrounded: !e
                    })
                }
                _getCurrentMediaQuality() {
                    var e, t, i, r;
                    let a = {},
                        n = this._currentContent;
                    return n && (0, M.ns)(n) && (0, M.Pb)(n) && (a.video = {
                        selected: this._preferredMediaPlaybackQuality.video,
                        current: null != (r = (0, D.A)(null != (i = null == (t = null == (e = this._currentPlayingProfile) ? void 0 : e.video) ? void 0 : t.resolution) ? i : -1)) ? r : E.UE.UNKNOWN,
                        available: n.getMediaProfileInfo().video.available.reduce((e, t) => {
                            let i = (0, D.A)(t.video_resolution);
                            return i && e.push(i), e
                        }, [E.UE.AUTO])
                    }, a.audio = {
                        selected: this._preferredMediaPlaybackQuality.audio,
                        current: E.b$.UNKNOWN,
                        available: [E.b$.AUTO]
                    }), a
                }
                getMediaSource() {
                    return this._bufferManager.getMediaSource()
                }
                load(e, t, i) {
                    var r, n, s, _, c, u, p, E, g, m, P, f, b;
                    let R = Date.now(),
                        v = (0, o.X)(),
                        A = (b = t.uriProperty, Object.prototype.hasOwnProperty.call(e, b)) ? t.uriProperty : "uri",
                        L = e[A];
                    if (O.info("load", L), !L) return Promise.reject(new y.i(h.I.PLAYER_CANNOT_FIND_PLAYABLE_URI, "Cannot find a playable URI."));
                    let T = null != (n = null == (r = e.options) ? void 0 : r.stopPosition) ? n : t.stopPosition;
                    if (null != T && T <= t.position) return Promise.reject(TypeError("Invalid options: `stopPosition` cannot be less than or equal to `position`"));
                    if (!e.logData) return Promise.reject(Error("Invalid track: logging info not specified"));
                    this.stop(e.logData, e.mediaType), this._loaded = !1, this._stopPositionEndedEmitted = !1, this._stopPosition = null, this._licenseRequested = !1, this._rebuffering = !1, this._seeking = !1, this._loopWrapSeekGuard = !1, this._lastLoopRestartMonotonic = null, this._lastReportedPosition = null, this._currentContent = null, this._currentMediaPlaybackMode = null, this._checkPlayingProfile(null, !0), this._subtitleManager.setVideoContent(null), this._adaptVideoBitrateBasedOnVisibility(), this._preloadThreshold = t.preloadThreshold || this._preloadThreshold;
                    let C = ++this._playId;
                    this._abortController = (0, a.createAbortControllerLike)();
                    let M = this._abortController.signal,
                        S = this._configureLoadingTimeout(M, this._abortController, t.loadingTimeout);
                    void 0 !== S && M.addEventListener("abort", () => clearTimeout(S)), this.emit(d.J.PLAYER_BEFORE_LOAD, Object.assign({
                        track: e,
                        options: t,
                        logData: e.logData,
                        uri: L
                    }, (0, k.P)())), this._bufferManager.setPlayId(C);
                    let I = (null == (s = e.options) ? void 0 : s.useDefaultPlaybackSpeed) ? 1 : null != (c = null == (_ = e.options) ? void 0 : _.playbackSpeed) ? c : this._playerSpeed,
                        D = this._mutedExplicitlySet && this._player ? this._player.muted : null != (E = null != (u = t.muted) ? u : null == (p = e.options) ? void 0 : p.muted) && E,
                        N = {
                            position: (t.position || 0) / 1e3,
                            autoplay: null == (g = t.autoplay) || g,
                            poster: e.poster,
                            useDefaultPlaybackSpeed: !!(null == (m = e.options) ? void 0 : m.useDefaultPlaybackSpeed),
                            playbackSpeed: I,
                            callback: i,
                            muted: D,
                            loop: null != (P = t.loop) && P
                        };
                    this._loadingOptions = N;
                    let J = this._tracker;
                    return J.trackLoadStart({
                        loadTime: R,
                        loadStartMonotonic: v,
                        uri: L,
                        fileId: e.fileId,
                        playId: C.toString(),
                        logData: e.logData,
                        mediaType: e.mediaType,
                        contentType: e.contentType,
                        contentMetadata: e.metadata,
                        isVideoVisible: this._isVideoVisible,
                        videoSurface: this._videoSurface,
                        muted: D,
                        volume: this._playerVolume,
                        startingSpeed: I,
                        playIntended: N.autoplay,
                        playedThreshold: t.playedThreshold,
                        initialPosition: t.position,
                        url: null != (f = e.url) ? f : e.resolvedURL,
                        mediaFormat: e.format
                    }), this._checkKeySystemAccess().then(() => this._getContentPromise(e, J)).then(i => {
                        var r, a;
                        if (i.isProtected() && !this._emeManager) throw new y.i(h.I.DISALLOW_PROTECTED_TRACK_ERROR, "Protected tracks not supported");
                        let n = "video" === i.getMediaType(),
                            s = null != (a = null == (r = e.options) ? void 0 : r.mediaPlaybackMode) ? a : n ? "video" : null;
                        n && this.emit(d.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                            playbackMode: s,
                            position: t.position,
                            playbackMetadataStore: J.getPlaybackMetadataStore()
                        }, (0, k.P)())), this._currentMediaPlaybackMode = s, i.setLogData(e.logData), this._stopPosition = "ad" !== e.contentType && null != T ? T : null, i.strategy === l.j.MSE && J.setCalculatedDuration(w(i.getCalculatedDuration())), this.emit(d.J.PLAYER_CONTENT_INITIALIZED, Object.assign({
                            keySystemInfo: i.getKeySystemInfo(),
                            position: t.position,
                            playbackMetadataStore: J.getPlaybackMetadataStore()
                        }, (0, k.P)())), this._upcomingContent = i
                    }).then(() => this._prepareMediaElement(N, M)).then(() => {
                        var e;
                        this._subtitleManager.setPlayer(this._player), (null == (e = this._upcomingContent) ? void 0 : e.isProtected()) && (O.info("Attaching HTMLMediaElement to the audio processor"), this._audioProcessor.setPlayer(this._player))
                    }).then(() => this._loadContent(N, M)).then(e => this._handleLoadingComplete(e, S), this._handleLoadingError.bind(this, L, e, M, S))
                }
                preload(e) {
                    let t = this._getCacheKey(e),
                        i = this._cache;
                    if (!t || i.get(t) || !this._emeManager) return Promise.resolve(null);
                    let r = this._preloadingTracks,
                        a = r[t];
                    if (a) return a;
                    O.info("Preloading track", t);
                    let n = {
                            manifestLatency: 0,
                            resolveLatency: 0
                        },
                        s = this._createContent(e, n, !0).then(e => {
                            if (e.strategy !== l.j.MSE) return e;
                            let t = e.getSegmentForTime(0);
                            if (!t) return e;
                            let i = this._tracker;
                            return i.setProtected(e.isProtected()), i.trackStrategy(e.strategy), i.setContentClass(e.contentClassName), O.info(`Detecting ${e.strategy} strategy for ${e.contentClassName}.`), e.getBufferSetForSegment(t).then(() => e)
                        }).then(e => (i.set(t, e), delete r[t], O.info("Cached", t), n)).catch(e => (delete r[t], O.warn("Preloading error", e), this.emit(d.J.PLAYER_PRELOADING_ERROR, Object.assign({
                            error: e,
                            track: e.track || null,
                            canPlayNext: !("canPlayNext" in e) || e.canPlayNext,
                            preloading: !0
                        }, (0, k.P)())), Promise.reject(e)));
                    return r[t] = s, s
                }
                restartTrackingForLoop(e) {
                    this._player && this._currentContent && (this._currentContent.setLogData(e), this._tracker.beginLoopIteration(e, (++this._playId).toString()), this._lastLoopRestartMonotonic = (0, o.X)())
                }
                togglePlay() {
                    return this._isPlaying() ? this.pause() : this.resume()
                }
                setSubtitleLanguage(e) {
                    this._subtitleManager.setLanguage(e)
                }
                getSubtitleLanguages() {
                    return this._subtitleManager.getAvailableLanguages()
                }
                getActiveSubtitleLanguage() {
                    return this._subtitleManager.getActiveLanguage()
                }
                deactivateCueEvents() {
                    this._subtitleManager.deactivateListeners()
                }
                activateCueEvents() {
                    this._subtitleManager.activateListeners()
                }
                setVolume(e, t) {
                    var i, r;
                    if (this.emitSync(d.J.PLAYER_BEFORE_VOLUME_CHANGE, Object.assign({
                            volume: e,
                            options: t
                        }, (0, k.P)())).defaultPrevented) return void this.emit(d.J.PLAYER_VOLUME_CHANGED, Object.assign({
                        volume: e,
                        commandId: null != (i = null == t ? void 0 : t.commandId) ? i : void 0,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()));
                    if (e < 0 || e > 1) throw new y.i(h.I.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE, "Volume should be in range [0, 1]");
                    this._playerVolume = e, this._tracker.setVolume(e), this._volumeCommandId = null != (r = null == t ? void 0 : t.commandId) ? r : null, this._player && (this._player.volume = this._cubicVolume ? e * e * e : e)
                }
                getVolume() {
                    return this._playerVolume
                }
                getPlayerState() {
                    var e, t, i, r, a, n;
                    let s = this._player,
                        o = this._currentContent,
                        l = {
                            src: (null == s ? void 0 : s.src) ? `data:${(null==o?void 0:o.getFileId())||"unknown"}` : void 0,
                            height: (null == s ? void 0 : s.clientHeight) || 0,
                            width: (null == s ? void 0 : s.clientWidth) || 0
                        },
                        d = {};
                    if (o) {
                        let e = o.getMediaTypeMimeTypes();
                        d.audio_format = e.audio, d.video_format = e.video, "video" === o.getMediaType() && s instanceof HTMLVideoElement && (d.video_height = s.videoHeight, d.video_width = s.videoWidth, l.poster = s.poster)
                    }
                    let _ = null;
                    if ((0, M.Cj)(o)) {
                        let e = o.getTrackingEvents();
                        e && (_ = {
                            mute: e.mute,
                            unmute: e.unmute,
                            rewind: e.rewind,
                            fullscreen: e.fullscreen,
                            accept_invitation_linear: e.accept_invitation_linear,
                            close_linear: e.close_linear,
                            exit_fullscreen: e.exit_fullscreen
                        })
                    }
                    let h = null != (e = null == o ? void 0 : o.isProtected()) && e,
                        c = null != (t = null == o ? void 0 : o.getKeySystemInfo()) ? t : void 0;
                    return {
                        playing: !!s && !s.paused,
                        position: s ? w(s.currentTime) : 0,
                        duration: s ? w(s.duration) : 0,
                        volume: null != (i = this._playerVolume) ? i : 1,
                        muted: null != (r = null == s ? void 0 : s.muted) && r,
                        loop: null != (a = null == s ? void 0 : s.loop) && a,
                        playback_speed: null != (n = null == s ? void 0 : s.playbackRate) ? n : 0,
                        playback_speed_selected: this._playerSpeed,
                        buffering: this._rebuffering,
                        media_type: (null == o ? void 0 : o.getMediaType()) || null,
                        media_info: d,
                        media_quality: this._getCurrentMediaQuality(),
                        protected: h,
                        protection_info: h ? {
                            keysystem: null == c ? void 0 : c.keySystem,
                            keysystem_impl: null == c ? void 0 : c.keySystemImpl,
                            keysystem_config: null == c ? void 0 : c.keySystemLabel
                        } : {},
                        player_element: l,
                        content_metadata: (null == o ? void 0 : o.getContentMetadata()) || {},
                        tracking_data: _
                    }
                }
                getPlayerPosition() {
                    return this._player ? w(this._player.currentTime) : 0
                }
                getPlaybackMetadataStore() {
                    return this._tracker.getPlaybackMetadataStore()
                }
                seek(e) {
                    var t;
                    if (!this._player) return;
                    this._loopWrapSeekGuard = !0;
                    let i = null == (t = this._abortController) ? void 0 : t.signal,
                        r = () => {
                            if (!this._player || (null == i ? void 0 : i.aborted)) return void O.info("Seek dropped: operation aborted.");
                            let t = e / 1e3;
                            t < 0 ? t = 0 : t >= this._player.duration && (t = this._player.duration), this._seeking || (this._lastReportedPosition = this._player.currentTime), this._player.currentTime = t
                        };
                    this._loaded ? r() : this.once(d.J.PLAYER_LOAD, r), this._getRebufferingLatency().then(e => {
                        null != i && i.aborted || this._tracker.trackSeekRebuffering(e)
                    })
                }
                pause() {
                    return this._audioProcessor.suspend().then(() => {
                        if (this._player && this._isPlaying()) {
                            this._emitReporting("pause");
                            let e = w(this._player.currentTime);
                            return Promise.resolve(this._player.pause()).then(() => {
                                var t, i;
                                this.emit(d.J.PLAYER_PAUSE_FULFILLED, Object.assign({
                                    position: e,
                                    logData: null != (i = null == (t = this._currentContent) ? void 0 : t.getLogData()) ? i : null,
                                    playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                                }, (0, k.P)()))
                            })
                        }
                        return Promise.resolve()
                    })
                }
                resume() {
                    return this._audioProcessor.resume().then(() => {
                        if (this._player && !this._isPlaying()) {
                            this._emitReporting("resume");
                            let e = w(this._player.currentTime);
                            return this._tracker.trackPlay(e, this._player.playbackRate), Promise.resolve(this._player.play()).then(() => {
                                var t, i;
                                this.emit(d.J.PLAYER_RESUME_FULFILLED, Object.assign({
                                    position: e,
                                    logData: null != (i = null == (t = this._currentContent) ? void 0 : t.getLogData()) ? i : null,
                                    playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                                }, (0, k.P)()))
                            })
                        }
                        return Promise.resolve()
                    })
                }
                stop(e, t) {
                    var i, r, a, n;
                    let s = [],
                        o = e || {};
                    this.emit(d.J.PLAYER_BEFORE_STOP, Object.assign(Object.assign({}, (0, k.P)()), {
                        logData: o
                    })), null == (i = this._abortController) || i.abort(), null == (r = this._videoStateCoalescer) || r.flush();
                    let l = -1;
                    if (this._player) {
                        let e = this._player.currentTime;
                        this._seeking && this._lastReportedPosition && (e = this._lastReportedPosition), l = w(e)
                    }
                    this._tracker.trackStopped(l, e, this.getStatistics() || void 0), this._bufferManager.abort(!0), this._emeManager && s.push(this._emeManager.destroySessions());
                    let _ = this._player;
                    if (_) {
                        this._subtitleManager.clear(), this._fatalOnNextError = this._shouldNextErrorBeFatal(), this._fatalOnNextError && O.warn("MediaError detected: next immediate media error will be fatal.");
                        let e = _.src;
                        if (e) N.test(e) && URL.revokeObjectURL(e), _.removeAttribute("src");
                        else {
                            let e = (0, R.L)(_.getElementsByTagName("source"));
                            for (let t of (O.info(`HTMLSourceElements to removed: ${e.length}`), e)) _.removeChild(t);
                            O.info("Releasing HLS URLs")
                        }
                        _.load()
                    }
                    null == (a = this._currentContent) || a.unload();
                    let h = this._currentContent && this._currentContent.getMediaType();
                    return _ && h && (null == (n = this._playerContainerManager) || n.eject(_, h, t), _.ownerDocument !== document && document.adoptNode(_)), this.emit(d.J.PLAYER_STOPPED, Object.assign({}, (0, k.P)())), Promise.all(s).then(() => !0)
                }
                setMuted(e, t = !0) {
                    let i = this._player;
                    i && (t && (this._mutedExplicitlySet = !0), e !== i.muted && (i.muted = e, this.emitSync(d.J.PLAYER_MUTED_CHANGED, Object.assign({
                        muted: e,
                        position: w(i.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()))))
                }
                hideSubtitles() {
                    this._subtitleManager.hide()
                }
                showSubtitles() {
                    this._subtitleManager.show()
                }
                areSubtitlesShown() {
                    return this._subtitleManager.visible()
                }
                getKeySystemInfo() {
                    return this._emeManager ? this._emeManager.getKeySystemInfo() : Promise.resolve(null)
                }
                getVideoVariants() {
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.getMediaType()) !== "video") return [];
                    let t = [];
                    if (!(0, M.Pb)(e)) return t;
                    for (let i of e.getMediaProfileInfo().video.available) t.push({
                        width: i.video_width,
                        height: i.video_height,
                        bitrate: i.video_bitrate
                    });
                    return t
                }
                setPreferredBitrate(e) {
                    return "number" != typeof e ? Promise.resolve(c.T.INVALID) : (this._preferredBitrate = e, this._currentContent && "video" === this._currentContent.getMediaType() && e > 0 && this._bufferManager.abort(!0), this._abrManager.overrideBitrate(e), Promise.resolve(c.T.SUCCESS))
                }
                getCurrentBandwidth() {
                    return this._abrManager.getBandwidthEstimate()
                }
                setBackgrounded(e) {
                    this.setIsVideoVisible(!e)
                }
                setIsVideoVisible(e) {
                    var t;
                    if (this._isVideoVisible !== e) {
                        if (this._isVideoVisible = e, this._tracker.setIsVideoVisible(e), this._videoStateCoalescer) this._videoStateCoalescer.addVisibilityEvent(e);
                        else {
                            let i = null == (t = this._player) ? void 0 : t.currentTime;
                            this.emit(d.J.PLAYER_VIDEO_VISIBILITY_CHANGED, Object.assign({
                                visible: e,
                                playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                                position: w(i || 0)
                            }, (0, k.P)()))
                        }
                        this._adaptVideoBitrateBasedOnVisibility()
                    }
                }
                setVideoResolution(e) {
                    var t, i;
                    this._videoResolution = Object.assign(Object.assign({}, this._videoResolution), e), (0, M.TP)(this._currentContent) && (null == (i = (t = this._currentContent).setVideoResolution) || i.call(t, this._videoResolution))
                }
                adaptToElementSize(e) {
                    (0, M.ns)(this._currentContent) && this._currentContent.adapt({
                        currentElementSize: e
                    })
                }
                activateElement() {
                    var e;
                    return this._playerActivated || !this._player || this._player.src ? (this._audioProcessor.resume(), !1) : (null == (e = this._player) || e.load(), this._playerActivated = !0, !0)
                }
                getMediaConfig() {
                    return void 0 === this._mediaConfig ? (function(e, t) {
                        let i = t || j("video"),
                            r = e => {
                                i.canPlayType("audio/mp3") && (e.formats.audio.push("audio/mp3"), e.formatsInfo.audio.push({
                                    mimeType: "audio/mp3",
                                    codec: "mp3",
                                    contentType: 'audio/mp3; codecs="mp3"'
                                }), e.supports.unprotected_audio = !0)
                            };
                        if (e) return e.getKeySystemInfo().then(e => {
                            let {
                                audioFormats: t,
                                videoFormats: i
                            } = e, a = {
                                supports: {
                                    protected_audio: !!t.length,
                                    unprotected_audio: !0,
                                    protected_video: !!i.length,
                                    unprotected_video: !0
                                },
                                formats: {
                                    audio: t.map(e => e.contentType),
                                    video: i.map(e => e.contentType)
                                },
                                formatsInfo: {
                                    audio: [...t],
                                    video: [...i]
                                }
                            };
                            return a.keysystem = e.keySystem, a.keysystem_impl = e.keySystemImpl, a.keysystem_label = e.keySystemLabel, r(a), a
                        });
                        let a = "undefined" != typeof window && window.MediaSource ? e => MediaSource.isTypeSupported(e) : e => "probably" === i.canPlayType(e) || "probably" === i.canPlayType(e.split(";")[0]),
                            n = (0, f.Z)([m.J[0]], a),
                            s = [],
                            o = [],
                            l = [],
                            d = [];
                        if (n) {
                            let {
                                audioCapabilities: e,
                                videoCapabilities: t
                            } = n;
                            for (let t of e) 'audio/mp4; codecs="flac"' !== t.contentType && (s.push(t.contentType), l.push((0, f.v)(t.contentType)));
                            for (let e of t) o.push(e.contentType), d.push((0, f.v)(e.contentType))
                        }
                        let _ = {
                            supports: {
                                protected_audio: !1,
                                unprotected_audio: !!s.length,
                                protected_video: !1,
                                unprotected_video: !!o.length
                            },
                            formats: {
                                audio: s,
                                video: o
                            },
                            formatsInfo: {
                                audio: l,
                                video: d
                            }
                        };
                        return r(_), Promise.resolve(_)
                    })(this._emeManager, this._player).then(e => (this._mediaConfig = e, this._mediaConfig)) : Promise.resolve(this._mediaConfig)
                }
                setPlaybackSpeed(e) {
                    if (!isFinite(e) || e <= 0) return !1;
                    let {
                        min: t,
                        max: i
                    } = this._playbackSpeedRange, r = Math.max(t, Math.min(i, e));
                    return r !== e && O.info(`Playback speed ${e} clamped to ${r} (limits: ${t} - ${i})`), this._playerSpeed = null != r ? r : 1, this._setPlaybackRate(), !0
                }
                getStatistics() {
                    return this._player && this._currentContent ? this._statistics.getSample(this._player, this._currentContent) : null
                }
                getAudioProcessor() {
                    return this._audioProcessor
                }
                setMediaPlaybackMode(e) {
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i || "video" !== i.getMediaType() || this._currentMediaPlaybackMode === e) return !1;
                    let r = t.currentTime;
                    return this.emit(d.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                        playbackMode: e,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        position: w(r || 0)
                    }, (0, k.P)())), this._currentMediaPlaybackMode = e, !0
                }
                setVideoSurface(e) {
                    var t;
                    if (this._videoSurface !== e)
                        if (this._videoSurface = e, this._tracker.setVideoSurface(e), this._videoStateCoalescer) this._videoStateCoalescer.addSurfaceEvent(e);
                        else {
                            let i = null == (t = this._player) ? void 0 : t.currentTime;
                            this.emit(d.J.PLAYER_VIDEO_SURFACE_CHANGED, Object.assign({
                                videoSurface: e,
                                position: w(i || 0),
                                playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                            }, (0, k.P)()))
                        }
                }
                getVideoSurface() {
                    return this._videoSurface
                }
                getSeekPanels() {
                    return this._currentContent && (0, M.s3)(this._currentContent) ? this._currentContent.getSeekPanels() : null
                }
                setMediaPlaybackQuality(e) {
                    let t = this._preferredMediaPlaybackQuality;
                    this._preferredMediaPlaybackQuality = Object.assign(Object.assign({}, this._preferredMediaPlaybackQuality), e), this.emit(d.J.PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED, Object.assign({
                        media_quality: this._getCurrentMediaQuality(),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, k.P)()));
                    let i = this._player,
                        r = this._currentContent;
                    if (!i || !r || r.strategy !== l.j.MSE) return;
                    let a = this._preferredMediaPlaybackQuality.video;
                    if (t.video !== a && (0, M.TP)(r)) {
                        if (a === E.UE.AUTO) r.setVideoResolution(this._videoResolution);
                        else {
                            let e = (0, D.C)(a);
                            e && r.setVideoResolution({
                                min: e,
                                max: e,
                                start: e
                            })
                        }
                        this._bufferManager.forceBuffer(r, i.currentTime)
                    }
                }
            }
        }
    }
]);