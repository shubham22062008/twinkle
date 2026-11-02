! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fef379c5-87eb-4d82-b939-4adc5c4fc616", e._sentryDebugIdIdentifier = "sentry-dbid-fef379c5-87eb-4d82-b939-4adc5c4fc616")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5039], {
        12756: (e, t, i) => {
            i.d(t, {
                P: () => _
            });
            var s = i(59371);

            function _() {
                return {
                    timestamp: Date.now(),
                    monotonicTimestamp: (0, s.X)()
                }
            }
        },
        13059: (e, t, i) => {
            var s;
            i.d(t, {
                    J: () => s
                }),
                function(e) {
                    e.KEY_SESSION_MESSAGE = "message", e.KEY_SESSION_STATUSES_CHANGE = "keystatuseschange", e.MEDIA_SOURCE_OPEN = "sourceopen", e.MEDIA_SOURCE_CLOSE = "sourceclose", e.SOURCE_BUFFER_UPDATE_END = "updateend", e.MS_KEY_ADDED = "mskeyadded", e.MS_KEY_ERROR = "mskeyerror", e.MS_KEY_MESSAGE = "mskeymessage", e.MS_NEEDKEY = "msneedkey", e.WEBKIT_KEY_ADDED = "webkitkeyadded", e.WEBKIT_KEY_ERROR = "webkitkeyerror", e.WEBKIT_KEY_MESSAGE = "webkitkeymessage", e.WEBKIT_NEEDKEY = "webkitneedkey", e.V0_1B_KEY_ADDED = "keyadded", e.V0_1B_KEY_ERROR = "keyerror", e.V0_1B_KEY_MESSAGE = "keymessage", e.V0_1B_NEEDKEY = "needkey", e.MEDIA_CANPLAY = "canplay", e.MEDIA_CANPLAYTHROUGH = "canplaythrough", e.MEDIA_DURATIONCHANGE = "durationchange", e.MEDIA_ENCRYPTED = "encrypted", e.MEDIA_ENDED = "ended", e.MEDIA_ERROR = "error", e.MEDIA_LOADEDMETADATA = "loadedmetadata", e.MEDIA_PAUSE = "pause", e.MEDIA_PLAY = "play", e.MEDIA_PLAYING = "playing", e.MEDIA_SEEKED = "seeked", e.MEDIA_SEEKING = "seeking", e.MEDIA_TIMEUPDATE = "timeupdate", e.MEDIA_WAITING = "waiting", e.MEDIA_RATECHANGE = "ratechange", e.MEDIA_RESIZE = "resize", e.MEDIA_VOLUMECHANGE = "volumechange", e.INTERNAL_ENCRYPTED = "__encrypted", e.INTERNAL_PLAYER_CANPLAY = "__canplay", e.INTERNAL_PLAYER_CANPLAYTHROUGH = "__canplaythrough", e.INTERNAL_MEDIA_REQUIRES_DURATION = "__requiresduration", e.INTERNAL_PLAYER_LOADED_METADATA = "__loadedmetadata", e.BUFFER_APPEND_ERROR = "append_error", e.BUFFER_STALLED = "stalled", e.BUFFERING_START = "buffering_start", e.BUFFERING_END = "buffering_end", e.BUFFER_SOURCE_OPEN = "source_open", e.BUFFER_SOURCE_CLOSE = "source_close", e.BUFFER_UPDATE_END = "update_end", e.BUFFER_QUOTA_EXCEEDED = "quota_exceeded", e.EME_LICENSE_REQUEST_ERROR = "license_request_error", e.EME_LICENSE_REQUEST_CAPPED = "license_request_capped", e.LIST_PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed", e.LIST_PLAYER_BEFORE_LIST_CHANGE = "before_list_change", e.LIST_PLAYER_BEFORE_NEXT = "before_next", e.LIST_PLAYER_BEFORE_PLAYER_LOAD = "before_player_load", e.LIST_PLAYER_BEFORE_PREVIOUS = "before_previous", e.LIST_PLAYER_BEFORE_TRACK_LOAD = "before_track_load", e.LIST_PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change", e.LIST_PLAYER_BEFORE_STOP = "before_stop", e.LIST_PLAYER_BUFFER_STALLED = "stalled", e.LIST_PLAYER_BUFFERING_START = "buffering_start", e.LIST_PLAYER_BUFFERING_END = "buffering_end", e.LIST_PLAYER_REBUFFERING_START = "rebuffering_start", e.LIST_PLAYER_REBUFFERING_END = "rebuffering_end", e.LIST_PLAYER_CAPPED = "capped", e.LIST_PLAYER_CLEARED = "cleared", e.LIST_PLAYER_DURATION_CHANGED = "duration_changed", e.LIST_PLAYER_ERROR = "error", e.LIST_PLAYER_ERROR_SYNC = "error_sync", e.LIST_PLAYER_FIRST_BYTES = "first_bytes", e.LIST_PLAYER_LIST_CHANGED = "list_change", e.LIST_PLAYER_LIST_ENDED = "list_ended", e.LIST_PLAYER_LOAD_VIDEO = "load_video", e.LIST_PLAYER_MAX_LIST_ERRORS_REACHED = "max_list_errors_reached", e.LIST_PLAYER_PAUSED = "paused", e.LIST_PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached", e.LIST_PLAYER_PLAYER_LOAD = "player_load", e.LIST_PLAYER_PLAYING = "playing", e.LIST_PLAYER_RESUME_FULFILLED = "list_player_resume_fulfilled", e.LIST_PLAYER_PAUSE_FULFILLED = "list_player_pause_fulfilled", e.LIST_PLAYER_POSITION_CHANGED = "position_changed", e.LIST_PLAYER_PROGRESS = "progress", e.LIST_PLAYER_REPEAT_MODE_CHANGED = "repeat_mode_changed", e.LIST_PLAYER_SHUFFLE_CHANGED = "shuffle_changed", e.LIST_PLAYER_STOPPED = "stopped", e.LIST_PLAYER_STOPPED_VIDEO = "stopped_video", e.LIST_PLAYER_TRACKING_DATA_CREATED = "tracking_data_created", e.LIST_PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized", e.LIST_PLAYER_TRACK_ENDED = "track_ended", e.LIST_PLAYER_TRACK_LOADED = "track_loaded", e.LIST_PLAYER_TRACK_TIMEOUT = "track_timeout", e.LIST_PLAYER_TRACK_UNPLAYABLE = "track_unplayable", e.LIST_PLAYER_DATA_CREATED = "tracking_data_created", e.LIST_PLAYER_DATA_FINALIZED = "tracking_data_finalized", e.LIST_PLAYER_VOLUME_CHANGED = "volume_changed", e.LIST_PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended", e.LIST_PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed", e.LIST_PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed", e.LIST_PLAYER_SEEK_HANDLED = "list_player_seek_handled", e.LIST_PLAYER_SEEKING = "seeking", e.LIST_PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed", e.LIST_PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed", e.LIST_PLAYER_MUTED_CHANGED = "muted_changed", e.LIST_PLAYER_SUBTITLE_LANGUAGE_CHANGED = "subtitle_language_changed", e.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded", e.LIST_PLAYER_SUBTITLE_VISIBILITY_CHANGED = "subtitle_visibility_changed", e.LIST_PLAYER_SEEK_PANELS_LOADED = "seek_panels_loaded", e.LIST_PLAYER_PLAYING_PROFILE_CHANGED = "playing_profile_changed", e.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED = "video_visibility_changed", e.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.LIST_PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED = "media_playback_quality_changed", e.LIST_PLAYER_VIDEO_SURFACE_CHANGED = "video_surface_changed", e.LIST_PLAYER_CONTENT_INITIALIZED = "content_initialized", e.LIST_PLAYER_LOOP_RESTART = "loop_restart", e.LOGGER_ERROR = "error", e.PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed", e.PLAYER_BEFORE_LOAD = "before_load", e.PLAYER_BEFORE_STOP = "before_stop", e.PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change", e.PLAYER_BUFFER_STALLED = "stalled", e.PLAYER_BUFFERING_START = "buffering_start", e.PLAYER_BUFFERING_END = "buffering_end", e.PLAYER_CAN_PRELOAD = "can_preload", e.PLAYER_CAPPED = "capped", e.PLAYER_DURATION_CHANGED = "duration_changed", e.PLAYER_ENDED = "ended", e.PLAYER_ENDED_VIDEO = "ended_video", e.PLAYER_ERROR = "error", e.PLAYER_WARNING = "warning", e.PLAYER_LOG_CLIENT_EVENT = "log_client_event", e.PLAYER_FIRST_BYTES = "first_bytes", e.PLAYER_KEY_RECEIVED = "key", e.PLAYER_LOAD = "load", e.PLAYER_LOAD_VIDEO = "load_video", e.PLAYER_LOADING_FAILED = "loading_failed", e.PLAYER_MUTED_CHANGED = "muted_changed", e.PLAYER_PAUSED = "paused", e.PLAYER_PLAY = "play", e.PLAYER_PLAYING = "playing", e.PLAYER_RESUME_FULFILLED = "resume_fulfilled", e.PLAYER_PAUSE_FULFILLED = "pause_fulfilled", e.PLAYER_POSITION_CHANGED = "position_changed", e.PLAYER_PRELOADING_ERROR = "preloading_error", e.PLAYER_PROGRESS = "progress", e.PLAYER_REBUFFERING_START = "rebuffering_start", e.PLAYER_REBUFFERING_END = "rebuffering_end", e.PLAYER_STALLED = "stalled", e.PLAYER_STOPPED = "stopped", e.PLAYER_STOPPED_VIDEO = "stopped_video", e.PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached", e.PLAYER_TIMEOUT = "timeout", e.PLAYER_PLAYBACK_START = "playback_start", e.PLAYER_TRACKING_DATA_CREATED = "tracking_data_created", e.PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized", e.PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended", e.PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed", e.PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed", e.PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed", e.PLAYER_SEEKING = "seeking", e.PLAYER_FRAGMENT_FETCHED = "fragment_fetched", e.PLAYER_FRAGMENT_FETCH_ERROR = "fragment_fetch_error", e.PLAYER_VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved", e.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED = "video_manifest_resolve_failed", e.PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed", e.PLAYER_SUBTITLE_LANGUAGE_CHANGED = "subtitle_language_changed", e.PLAYER_SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded", e.PLAYER_SUBTITLE_VISIBILITY_CHANGED = "subtitle_visibility_changed", e.PLAYER_SEEK_PANELS_LOADED = "seek_panels_loaded", e.PLAYER_VIDEO_RESIZED = "resize", e.PLAYER_VIDEO_VISIBILITY_CHANGED = "video_visibility_changed", e.PLAYER_PLAYING_PROFILE_CHANGED = "playing_profile_changed", e.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.PLAYER_MEDIA_PLAYBACK_QUALITY_CHANGED = "media_playback_quality_changed", e.PLAYER_VIDEO_SURFACE_CHANGED = "video_surface_changed", e.PLAYER_VOLUME_CHANGED = "volume_changed", e.PLAYER_CONTENT_INITIALIZED = "content_initialized", e.PLAYER_LOOP_RESTART = "loop_restart", e.SUBTITLE_MANAGER_LANGUAGE_CHANGED = "subtitle_language_changed", e.SUBTITLE_MANAGER_VISIBILITY_CHANGED = "subtitle_visibility_changed", e.PLAYER_MANAGER_READY = "ready", e.TRACKER_PLAYBACK_START = "playback_start", e.TRACKER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached", e.TRACKER_TRACKING_DATA_CREATED = "tracking_data_created", e.TRACKER_TRACKING_DATA_FINALIZED = "tracking_data_finalized", e.TRACKER_FIRST_QUARTILE = "tracking_first_quartile", e.TRACKER_MIDPOINT = "tracking_midpoint", e.TRACKER_THIRD_QUARTILE = "tracking_third_quartile", e.TRACKER_LOG_CLIENT_EVENT = "tracker_log_client_event", e.VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved", e.VIDEO_MANIFEST_RESOLVE_FAILED = "video_manifest_resolve_failed", e.ABR_MANAGER_BITRATE_CHANGE = "bitrate_change", e.REPORTING_START = "reporting_start", e.REPORTING_CREATIVE_VIEW = "reporting_creative_view", e.REPORTING_FIRST_QUARTILE = "reporting_first_quartile", e.REPORTING_MIDPOINT = "reporting_midpoint", e.REPORTING_THIRD_QUARTILE = "reporting_third_quartile", e.REPORTING_COMPLETE = "reporting_complete", e.REPORTING_PAUSE = "reporting_pause", e.REPORTING_RESUME = "reporting_resume", e.REPORTING_ERROR = "reporting_error"
                }(s || (s = {}))
        },
        15039: (e, t, i) => {
            i.d(t, {
                X: () => w
            });
            var s = i(8159),
                _ = i(35520),
                E = i(17211),
                r = i(59371),
                a = i(13059),
                n = i(59554),
                o = i(73880);
            class l extends Error {
                constructor(e = n.I.EME_ERROR_UNKNOWN, t, i = {}) {
                    super(t), this.status = -1, this.licenseServer = "", this.shouldRefreshEndpoint = !1, this.unrecoverable = !1, this.debug = {}, this.code = e, this.message = t, this.name = "EMEError", this.debug = i
                }
                static fatal(e = n.I.EME_ERROR_UNKNOWN, t, i = {}) {
                    let s = new l(e, t, i);
                    return s.unrecoverable = !0, s
                }
            }
            class d extends Error {
                constructor(e, t) {
                    super(t), this.name = "CappingError", this.message = t, this.code = e
                }
            }

            function A(e) {
                let t = document.createEvent("Event");
                t.initEvent("encrypted", !1, !1), t.initDataType = "cenc", t.initData = e.initData, t.fromPolyfill = !0, this.dispatchEvent(t)
            }
            class R extends s.Vk {
                constructor(e) {
                    super(a.J.KEY_SESSION_MESSAGE, null), this.messageType = "license-request", this.message = e
                }
            }
            class S extends s.bk {
                constructor(e) {
                    super(), this._nativeKeySession = null, this._lastUpdateDeferred = (0, E.u)(), this._lastGenerateDeferred = (0, E.u)(), this.addEventListener = this.addListener, this.removeEventListener = this.removeListener, this._nativeMediaKeys = e, this._onKeyMessage = this._onKeyMessage.bind(this), this._onKeyAdded = this._onKeyAdded.bind(this), this._onKeyError = this._onKeyError.bind(this)
                }
                _attach() {
                    let e = this._nativeKeySession;
                    e && (e.addEventListener(a.J.MS_KEY_ADDED, this._onKeyAdded), e.addEventListener(a.J.MS_KEY_ERROR, this._onKeyError), e.addEventListener(a.J.MS_KEY_MESSAGE, this._onKeyMessage))
                }
                _detach() {
                    let e = this._nativeKeySession;
                    e && (e.removeEventListener(a.J.MS_KEY_ADDED, this._onKeyAdded), e.removeEventListener(a.J.MS_KEY_ERROR, this._onKeyError), e.removeEventListener(a.J.MS_KEY_MESSAGE, this._onKeyMessage))
                }
                _onKeyMessage(e) {
                    e.message && e.message.buffer && (this.emitEvent(new R(e.message.buffer)), this._lastGenerateDeferred && (this._lastGenerateDeferred.resolve(!0), this._lastGenerateDeferred = null))
                }
                _onKeyAdded() {
                    this._lastUpdateDeferred && (this._lastUpdateDeferred.resolve(!0), this._lastUpdateDeferred = null), this._lastGenerateDeferred && (this._lastGenerateDeferred.resolve(!0), this._lastGenerateDeferred = null), this.emit(a.J.KEY_SESSION_STATUSES_CHANGE, null)
                }
                _onKeyError() {
                    let e = this._nativeKeySession && this._nativeKeySession.error;
                    this._lastGenerateDeferred && (this._lastGenerateDeferred.reject(e), this._lastGenerateDeferred = null), this._lastUpdateDeferred && (this._lastUpdateDeferred.reject(e), this._lastUpdateDeferred = null), this.emit(a.J.KEY_SESSION_STATUSES_CHANGE, null)
                }
                generateRequest(e, t) {
                    return new Promise((e, i) => {
                        this._lastGenerateDeferred && (this._lastGenerateDeferred.resolve = e, this._lastGenerateDeferred.reject = i), this._nativeKeySession = this._nativeMediaKeys.createSession("audio/mp4", new Uint8Array(t), null), this._attach()
                    })
                }
                update(e) {
                    return new Promise((t, i) => {
                        this._lastGenerateDeferred && (this._lastGenerateDeferred.resolve = t, this._lastGenerateDeferred.reject = i), this._nativeKeySession && this._nativeKeySession.update(new Uint8Array(e))
                    })
                }
                close() {
                    return new Promise(e => {
                        this._nativeKeySession && this._nativeKeySession.close(), this._detach(), e(!0)
                    })
                }
            }
            class T {
                constructor(e) {
                    this._lastBoundSetter = null, this.shouldRefreshPerTrack = !0, this._nativeMediaKeys = new MSMediaKeys(e)
                }
                attach(e) {
                    return new Promise(t => {
                        if (e.readyState >= 1) {
                            e.msSetMediaKeys(this._nativeMediaKeys), t();
                            return
                        }
                        let i = () => {
                            e.removeEventListener(a.J.MEDIA_LOADEDMETADATA, i), this._lastBoundSetter = null, e.msSetMediaKeys(this._nativeMediaKeys)
                        };
                        this._lastBoundSetter = i, e.addEventListener(a.J.MEDIA_LOADEDMETADATA, i), e.addEventListener(a.J.MS_NEEDKEY, A), t()
                    })
                }
                detach(e) {
                    this._lastBoundSetter && (e.removeEventListener(a.J.MS_NEEDKEY, A), e.removeEventListener(a.J.MEDIA_LOADEDMETADATA, this._lastBoundSetter), this._lastBoundSetter = null)
                }
                setServerCertificate() {
                    return Promise.reject(new l(n.I.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM, "Cannot set server certificate on this platform."))
                }
                createSession() {
                    return new S(this._nativeMediaKeys)
                }
            }

            function c(e) {
                let t = this.mediaKeys;
                t && t !== e && t.detach(this), delete this.mediaKeys, this.mediaKeys = e;
                try {
                    return e && e.attach(this), Promise.resolve()
                } catch (e) {
                    return Promise.reject(new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, "Failed to set MediaKeys on HTMLMediaElement"))
                }
            }
            class h {
                constructor(e, t) {
                    if (this._configuration = null, this.keySystem = e, !this._checkConfig(t)) throw new l(n.I.EME_NO_SUPPORTED_CONFIGURATION, "No supported configurations")
                }
                _checkConfig(e) {
                    var t, i;
                    let s = this.keySystem;
                    for (let _ of e) {
                        let e, E = {
                            initDataTypes: _.initDataTypes,
                            audioCapabilities: [],
                            videoCapabilities: [],
                            persistentState: "optional",
                            distinctiveIdentifier: "optional",
                            sessionTypes: ["temporary"],
                            label: _.label
                        };
                        if (_.audioCapabilities && _.audioCapabilities.length && E.audioCapabilities)
                            for (let i of (e = !1, _.audioCapabilities)) {
                                let _ = null == (t = i.contentType) ? void 0 : t.split(";")[0];
                                MSMediaKeys.isTypeSupported(s, _) && (E.audioCapabilities.push(i), e = !0)
                            }
                        if (_.videoCapabilities && _.videoCapabilities.length && E.videoCapabilities)
                            for (let t of (e = !1, _.videoCapabilities)) {
                                let _ = null == (i = t.contentType) ? void 0 : i.split(";")[0];
                                MSMediaKeys.isTypeSupported(s, _) && (E.videoCapabilities.push(t), e = !0)
                            }
                        if (e) return this._configuration = E, !0
                    }
                    return !1
                }
                getConfiguration() {
                    return this._configuration
                }
                createMediaKeys() {
                    return new Promise(e => {
                        e(new T(this.keySystem))
                    })
                }
            }
            let u = _.m.forTag("eme_polyfill.v0_1b");
            class I extends s.bk {
                constructor(e, t, i) {
                    super(), this._mediaElement = null, this._lastUpdateDeferred = null, this._lastGenerateResolver = null, this.sessionId = null, this._keySystem = e, this._mediaElement = t, this._prefix = i, this.addEventListener = this.addListener, this.removeEventListener = this.removeListener
                }
                _addPrefix(e) {
                    return this._prefix ? this._prefix + e.replace(/\b[a-z]/, function(e) {
                        return e.toUpperCase()
                    }) : e
                }
                generateComplete(e) {
                    this.emitEvent(new R(e)), this._lastGenerateResolver && (this._lastGenerateResolver.resolve(!0), this._lastGenerateResolver = null)
                }
                updateComplete() {
                    this._lastUpdateDeferred && (this._lastUpdateDeferred.resolve(!0), this._lastUpdateDeferred = null), this.emit(a.J.KEY_SESSION_STATUSES_CHANGE, null)
                }
                handleErrorEvent(e) {
                    let t = new l(n.I.EME_MEDIA_KEY_SESSION_V0_1B_ERROR, "MediaKeySession v0.1b Error");
                    t.debug.errorCode = e.errorCode, t.debug.systemCode = e.systemCode, !e.sessionId && this._lastGenerateResolver ? (this._lastGenerateResolver.reject(t), this._lastGenerateResolver = null) : e.sessionId && this._lastUpdateDeferred ? (this._lastUpdateDeferred.reject(t), this._lastUpdateDeferred = null) : this.emit(a.J.KEY_SESSION_STATUSES_CHANGE, null)
                }
                generateRequest(e, t) {
                    return this._mediaElement ? new Promise((e, i) => {
                        this._lastGenerateResolver = {
                            resolve: e,
                            reject: i
                        };
                        try {
                            this._mediaElement[this._addPrefix("generateKeyRequest")](this._keySystem, new Uint8Array(t))
                        } catch (e) {
                            i(e), this._lastGenerateResolver = null
                        }
                    }) : Promise.reject(ReferenceError("InvalidState: Media keys are not attached."))
                }
                update(e) {
                    if (!this._mediaElement) return Promise.reject(ReferenceError("InvalidState: Media keys are not attached."));
                    if (this._lastUpdateDeferred) {
                        let t = this.update.bind(this, e);
                        return this._lastUpdateDeferred.promise.then(t, t)
                    }
                    let t = (0, E.u)();
                    this._lastUpdateDeferred = t;
                    try {
                        this._mediaElement[this._addPrefix("addKey")](this._keySystem, new Uint8Array(e), null, this.sessionId)
                    } catch (e) {
                        t.reject(e), this._lastUpdateDeferred = null
                    }
                    return t.promise
                }
                close() {
                    if (this.sessionId && this._mediaElement) try {
                        this._mediaElement[this._addPrefix("cancelKeyRequest")](this._keySystem, this.sessionId)
                    } catch (e) {
                        u.warn("Could not close keysession", e)
                    }
                    return Promise.resolve(!0)
                }
            }
            class L {
                constructor(e, t = "") {
                    this._mediaElement = null, this._waitingForSessionIds = [], this._sessionMap = {}, this.shouldRefreshPerTrack = !0, this._keySystem = e, this._prefix = t, this._onKeyMessage = this._onKeyMessage.bind(this), this._onKeyAdded = this._onKeyAdded.bind(this), this._onKeyError = this._onKeyError.bind(this)
                }
                _getSession(e) {
                    let t = this._sessionMap[e];
                    if (t) return t;
                    let i = this._waitingForSessionIds.shift();
                    return i ? (i.sessionId = e, this._sessionMap[e] = i, i) : null
                }
                _onKeyMessage(e) {
                    let t = this._getSession(e.sessionId);
                    if (!t) return void u.warn("Got keymessage without session.");
                    t.generateComplete(e.message)
                }
                _onKeyAdded(e) {
                    let t = this._getSession(e.sessionId);
                    if (!t) return void u.warn("Got keyadded without session.");
                    t.updateComplete()
                }
                _onKeyError(e) {
                    let t = this._getSession(e.sessionId);
                    if (!t) return void u.warn("Got keyerror without session.");
                    t.handleErrorEvent(e)
                }
                attach(e) {
                    this._mediaElement = e;
                    let t = this._prefix;
                    e.addEventListener(t + a.J.V0_1B_NEEDKEY, A);
                    let i = e.addEventListener.bind(e);
                    i(t + a.J.V0_1B_KEY_ADDED, this._onKeyAdded), i(t + a.J.V0_1B_KEY_ERROR, this._onKeyError), i(t + a.J.V0_1B_KEY_MESSAGE, this._onKeyMessage)
                }
                detach(e) {
                    this._mediaElement = null;
                    let t = this._prefix;
                    e.removeEventListener(t + a.J.V0_1B_NEEDKEY, A);
                    let i = e.removeEventListener.bind(e);
                    i(t + a.J.V0_1B_KEY_ADDED, this._onKeyAdded), i(t + a.J.V0_1B_KEY_ERROR, this._onKeyError), i(t + a.J.V0_1B_KEY_MESSAGE, this._onKeyMessage)
                }
                setServerCertificate() {
                    return Promise.reject(new l(n.I.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM, "Cannot set server certificate on this platform."))
                }
                createSession() {
                    let e = new I(this._keySystem, this._mediaElement, this._prefix);
                    return this._waitingForSessionIds.push(e), e
                }
            }

            function y(e) {
                let t = this.mediaKeys;
                t && t !== e && t.detach(this), delete this.mediaKeys, this.mediaKeys = e;
                try {
                    return e && e.attach(this), Promise.resolve()
                } catch (e) {
                    return Promise.reject(new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, "Failed to set MediaKeys on HTMLMediaElement"))
                }
            }
            class D {
                constructor(e, t, i) {
                    if (this._configuration = null, this.keySystem = e, this._prefix = i, !this._checkConfig(t)) throw new l(n.I.EME_NO_SUPPORTED_CONFIGURATION, "No supported configurations")
                }
                _checkConfig(e) {
                    var t, i;
                    let s = this.keySystem,
                        _ = document.createElement("video");
                    for (let E of e) {
                        let e = {
                                initDataTypes: E.initDataTypes,
                                audioCapabilities: [],
                                videoCapabilities: [],
                                persistentState: "optional",
                                distinctiveIdentifier: "optional",
                                sessionTypes: ["temporary"],
                                label: E.label
                            },
                            r = !1;
                        if (E.audioCapabilities && E.audioCapabilities.length && e.audioCapabilities)
                            for (let i of (r = !1, E.audioCapabilities)) {
                                let E = null == (t = i.contentType) ? void 0 : t.split(";")[0];
                                E && _.canPlayType(E, s) && (e.audioCapabilities.push(i), r = !0)
                            }
                        if (E.videoCapabilities && E.videoCapabilities.length && e.videoCapabilities)
                            for (let t of (r = !1, E.videoCapabilities)) {
                                let E = null == (i = t.contentType) ? void 0 : i.split(";")[0];
                                E && _.canPlayType(E, s) && (e.videoCapabilities.push(t), r = !0)
                            }
                        if (r) return this._configuration = e, !0
                    }
                    return !1
                }
                getConfiguration() {
                    return this._configuration
                }
                createMediaKeys() {
                    return new Promise(e => {
                        e(new L(this.keySystem, this._prefix))
                    })
                }
            }

            function p(e) {
                navigator.requestMediaKeySystemAccess = function(t, i) {
                    return new Promise(s => {
                        s(new D(t, i, e))
                    })
                };
                let t = HTMLMediaElement.prototype;
                delete t.mediaKeys, t.setMediaKeys = y
            }
            let f = _.m.forTag("eme_polyfill.safari");
            class P extends s.bk {
                constructor(e, t) {
                    super(), this._attached = !1, this._nativeKeySession = null, this._lastGenerateResolver = (0, E.u)(), this._lastUpdateResolver = (0, E.u)(), this.addEventListener = this.addListener, this.removeEventListener = this.removeListener, this._nativeMediaKeys = e, this._serverCertificate = t, this._onKeyMessage = this._onKeyMessage.bind(this), this._onKeyAdded = this._onKeyAdded.bind(this), this._onKeyError = this._onKeyError.bind(this)
                }
                _attach() {
                    if (this._attached) return;
                    let e = this._nativeKeySession;
                    if (!e) return void f.warn("Tried to attach with no WebKitMediaKeySession");
                    e.addEventListener(a.J.WEBKIT_KEY_MESSAGE, this._onKeyMessage), e.addEventListener(a.J.WEBKIT_KEY_ADDED, this._onKeyAdded), e.addEventListener(a.J.WEBKIT_KEY_ERROR, this._onKeyError)
                }
                _detach() {
                    if (!this._attached) return;
                    let e = this._nativeKeySession;
                    if (!e) return void f.warn("Tried to detach with no WebKitMediaKeySession");
                    e.removeEventListener(a.J.WEBKIT_KEY_MESSAGE, this._onKeyMessage), e.removeEventListener(a.J.WEBKIT_KEY_ADDED, this._onKeyAdded), e.removeEventListener(a.J.WEBKIT_KEY_ERROR, this._onKeyError)
                }
                _onKeyMessage(e) {
                    e.message && e.message.buffer && (this.emitEvent(new R(e.message.buffer)), this._lastGenerateResolver && (this._lastGenerateResolver.resolve(!0), this._lastGenerateResolver = null))
                }
                _onKeyAdded() {
                    this._lastUpdateResolver && (this._lastUpdateResolver.resolve(!0), this._lastUpdateResolver = null), this.emit(a.J.KEY_SESSION_STATUSES_CHANGE, null)
                }
                _onKeyError() {
                    let e = this._nativeKeySession && this._nativeKeySession.error,
                        t = new l(n.I.EME_MEDIA_KEY_SESSION_SAFARI_ERROR, e && e.message || "MediaKeySession Safari Error");
                    e && (t.debug.errorCode = e.code, t.debug.systemCode = e.systemCode), this._lastGenerateResolver ? (this._lastGenerateResolver.reject(t), this._lastGenerateResolver = null) : this._lastUpdateResolver && (this._lastUpdateResolver.reject(t), this._lastUpdateResolver = null)
                }
                _rebuildInitData(e) {
                    let t = new Uint8Array(e);
                    if (new DataView(t.buffer).getUint32(0, !0) + 4 !== t.byteLength) throw new l(n.I.EME_INIT_DATA_MALFORMED, "Malformed init data");
                    let i = (function(e) {
                        let t = Math.floor(e.byteLength / 2),
                            i = new Uint16Array(t),
                            s = new DataView(e.buffer);
                        for (let e = 0; e < t; e++) i[e] = s.getUint16(2 * e, !0);
                        return String.fromCharCode.apply(null, i)
                    })(t.slice(4)).match(/^skd:\/\/([0-9a-fA-F]+)/);
                    if (!(null == i ? void 0 : i[1])) throw new l(n.I.EME_INIT_DATA_MALFORMED, "Invalid content ID");
                    let s = new Uint8Array(function(e) {
                            let t = new Uint8Array(2 * e.length),
                                i = new DataView(t.buffer),
                                s = e.split("");
                            for (let e = 0, t = s.length; e < t; e++) {
                                let t = s[e].charCodeAt(0);
                                i.setUint16(2 * e, t, !0)
                            }
                            return t.buffer
                        }(i[1])),
                        _ = this._serverCertificate,
                        E = new Uint8Array(t.byteLength + 4 + s.byteLength + 4 + _.byteLength),
                        r = 0;
                    E.set(t, r), r += t.byteLength;
                    let a = new DataView(E.buffer);
                    return a.setUint32(r, s.byteLength, !0), r += 4, E.set(s, r), r += s.byteLength, a.setUint32(r, _.byteLength, !0), r += 4, E.set(_, r), E
                }
                generateRequest(e, t) {
                    return new Promise((e, i) => {
                        this._lastGenerateResolver = {
                            resolve: e,
                            reject: i
                        };
                        try {
                            let e = this._rebuildInitData(t);
                            this._nativeKeySession = this._nativeMediaKeys.createSession("video/mp4", new Uint8Array(e), null), this._attach()
                        } catch (e) {
                            this._lastGenerateResolver = null, i(e)
                        }
                    })
                }
                update(e) {
                    let t = (0, E.u)();
                    if (this._lastUpdateResolver = t, !this._nativeKeySession) return f.warn("Tried to update with no WebKitMediaKeySession"), t.promise;
                    try {
                        this._nativeKeySession.update(new Uint8Array(e))
                    } catch (e) {
                        t.reject(e)
                    }
                    return t.promise
                }
                close() {
                    return new Promise(e => {
                        this._detach(), e(!0)
                    })
                }
            }
            class N {
                constructor(e) {
                    this._lastBoundSetter = null, this._serverCertificate = null, this.shouldRefreshPerTrack = !0, this._nativeMediaKeys = new WebKitMediaKeys(e)
                }
                attach(e) {
                    return new Promise(t => {
                        if (e.readyState >= 1) {
                            e.webkitSetMediaKeys(this._nativeMediaKeys), t();
                            return
                        }
                        let i = () => {
                            e.removeEventListener(a.J.MEDIA_LOADEDMETADATA, i), this._lastBoundSetter = null, e.webkitSetMediaKeys(this._nativeMediaKeys)
                        };
                        this._lastBoundSetter = i, e.addEventListener(a.J.MEDIA_LOADEDMETADATA, i), e.addEventListener(a.J.WEBKIT_NEEDKEY, A), t()
                    })
                }
                detach(e) {
                    e.removeEventListener(a.J.WEBKIT_NEEDKEY, A), this._lastBoundSetter && (e.removeEventListener(a.J.MEDIA_LOADEDMETADATA, this._lastBoundSetter), this._lastBoundSetter = null)
                }
                setServerCertificate(e) {
                    return this._serverCertificate = new Uint8Array(e), Promise.resolve(!0)
                }
                createSession() {
                    if (!this._serverCertificate) throw new l(n.I.EME_INVALID_STATE_ERROR, "The server certificate is not available");
                    return new P(this._nativeMediaKeys, this._serverCertificate)
                }
            }
            class M {
                constructor(e, t) {
                    this.keySystem = e;
                    let i = this._checkConfig(t);
                    if (!i) throw new l(n.I.EME_NO_SUPPORTED_CONFIGURATION, "No supported configurations");
                    this._configuration = i
                }
                _checkConfig(e) {
                    let t = this.keySystem,
                        i = !1;
                    for (let s of e) {
                        let e = {
                            initDataTypes: s.initDataTypes,
                            audioCapabilities: [],
                            videoCapabilities: [],
                            persistentState: "optional",
                            distinctiveIdentifier: "optional",
                            sessionTypes: ["temporary"]
                        };
                        if (s.audioCapabilities)
                            for (let _ of s.audioCapabilities) {
                                if (!_.contentType) continue;
                                let s = _.contentType.split(";")[0];
                                WebKitMediaKeys.isTypeSupported(t, s) && (e.audioCapabilities.push(_), i = !0)
                            }
                        if (s.videoCapabilities)
                            for (let _ of s.videoCapabilities) {
                                if (!_.contentType) continue;
                                let s = _.contentType.split(";")[0];
                                WebKitMediaKeys.isTypeSupported(t, s) && (e.videoCapabilities.push(_), i = !0)
                            }
                        if (i) return e
                    }
                    return null
                }
                getConfiguration() {
                    return this._configuration
                }
                createMediaKeys() {
                    return new Promise(e => {
                        e(new N(this.keySystem))
                    })
                }
            }

            function O(e) {
                let t = this.mediaKeys;
                t && t !== e && t.detach(this), delete this.mediaKeys, this.mediaKeys = e;
                try {
                    return e && e.attach(this), Promise.resolve()
                } catch (e) {
                    return Promise.reject(new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, "Failed to set MediaKeys on HTMLMediaElement"))
                }
            }
            let m = _.m.forTag("eme_polyfills.tester");
            var C = i(33233),
                v = i(31939),
                Y = i(63533),
                g = i(12756);
            let K = /([^;]+)(?:;\s?codecs="(.*)")?/,
                b = _.m.forTag("playback.eme_manager"),
                U = {
                    EMPTY: "-no-robustness",
                    SW_CRYPTO: "-sw-crypto",
                    SW_DECODE: "-sw-decode",
                    HW_CRYPTO: "-hw-crypto",
                    HW_DECODE: "-hw-decode",
                    HW_ALL: "-hw-all"
                };

            function F(e, t) {
                var i;
                let s = [],
                    _ = RegExp(`codecs="(${t.join("|")})"`);
                for (let t of e) _.test(null != (i = t.contentType) ? i : "") || s.push(t);
                return s.length ? s : null
            }

            function G(e, {
                audio: t,
                video: i
            }) {
                var s, _, E, r;
                if (!(null == t ? void 0 : t.length) && !(null == i ? void 0 : i.length)) return e;
                let {
                    audioCapabilities: a,
                    videoCapabilities: n
                } = e;
                return (null == t ? void 0 : t.length) && (null == (s = e.audioCapabilities) ? void 0 : s.length) && !(a = null != (_ = F(e.audioCapabilities, t)) ? _ : void 0) || (null == i ? void 0 : i.length) && (null == (E = e.videoCapabilities) ? void 0 : E.length) && !(n = null != (r = F(e.videoCapabilities, i)) ? r : void 0) ? null : Object.assign(Object.assign({}, e), {
                    audioCapabilities: a,
                    videoCapabilities: n
                })
            }
            class w extends s.bk {
                constructor(e) {
                    var t;
                    super(), this._unauthServerCertificateBase = "", this._disallowCodecs = {}, this._keySystemDeferred = (0, E.u)(), this._configuration = (0, E.u)(), this._keySystemSettings = null, this._keySessions = [], this._configs = [], this._pendingCertificateRequest = null, this._certificate = null, this._transport = e.transport, this._emeImpl = e.emeImpl, this._noServerCertificate = !!e.noServerCertificate, this._precacheServerCertificate = null == (t = e.precacheServerCertificate) || t, this._unauthServerCertificateBase = e.unauthServerCertificateBase || "https://spclient.wg.spotify.com", this._configFilter = function(e) {
                        let t = ["--ensure-no-match--"];
                        if (null == e ? void 0 : e.length) {
                            let i = e.length;
                            for (; i--;) {
                                let s = e[i];
                                s && Object.prototype.hasOwnProperty.call(U, s) && t.push(U[s])
                            }
                        }
                        return RegExp(`(${t.join("|")})$`)
                    }(e.disallowRobustnessValues || []), this._disallowCodecs = e.disallowCodecs, this._preferredKeySystems = e.preferredKeySystems || [o.J.WIDEVINE, o.J.PLAYREADY_RECOMMENDATION_3000, o.J.PLAYREADY_RECOMMENDATION, o.J.PLAYREADY_HARDWARE, o.J.PLAYREADY, o.J.FAIRPLAY]
                }
                static create(e) {
                    return new Promise(t => {
                        let i = function() {
                            if ("undefined" != typeof navigator && "function" == typeof navigator.requestMediaKeySystemAccess && "undefined" == typeof WebKitMediaKeys && "undefined" != typeof MediaKeySystemAccess && "function" == typeof MediaKeySystemAccess.prototype.getConfiguration) return m.log("Using native EME implementation."), "native";
                            if ("undefined" != typeof HTMLMediaElement && (null == HTMLMediaElement ? void 0 : HTMLMediaElement.prototype.webkitGenerateKeyRequest)) return m.log('Detected "webkit" Prefixed EME v0.1b. Polyfilling.'), p("webkit"), "v0.1b-webkit";
                            if ("undefined" != typeof HTMLMediaElement && (null == HTMLMediaElement ? void 0 : HTMLMediaElement.prototype.generateKeyRequest)) return m.log("Detected Unprefixed EME v0.1b. Polyfilling."), p(), "v0.1b";
                            if ("undefined" != typeof MSMediaKeys) {
                                m.log("Detected MS IE EME. Polyfilling."), navigator.requestMediaKeySystemAccess = function(e, t) {
                                    return new Promise(i => {
                                        i(new h(e, t))
                                    })
                                };
                                let e = HTMLMediaElement.prototype;
                                return delete e.mediaKeys, e.setMediaKeys = c, "ms-ie"
                            }
                            if ("function" == typeof WebKitMediaKeys) {
                                m.log("Detected Safari EME. Polyfilling."), navigator.requestMediaKeySystemAccess = function(e, t) {
                                    return new Promise(i => {
                                        i(new M(e, t))
                                    })
                                };
                                let e = HTMLMediaElement.prototype;
                                return delete e.mediaKeys, e.setMediaKeys = O, "safari"
                            }
                            return m.warn("Detected no EME APIs."), null
                        }();
                        if (!i) throw l.fatal(n.I.EME_API_NOT_SUPPORTED, "Platform does not support navigator.requestMediaKeySystemAccess");
                        t(new w(Object.assign(Object.assign({}, e), {
                            emeImpl: i
                        })).init())
                    })
                }
                _prepareConfiguration(e) {
                    let t = e.getConfiguration();
                    b.info("KeySystem configured as", t.label), t.audioCapabilities && t.audioCapabilities.length || this._appendProbableMediaCapabilities(e.keySystem, t);
                    let i = {
                        keySystem: e.keySystem,
                        keySystemImpl: this._emeImpl,
                        keySystemLabel: t.label,
                        audioFormats: this._parseCapabilities(t.audioCapabilities),
                        videoFormats: this._parseCapabilities(t.videoCapabilities)
                    };
                    return this._keySystemSettings = C.v[e.keySystem], this._configuration.resolve(i), i
                }
                _parseCapabilities(e) {
                    var t;
                    if (!e) return [];
                    let i = [];
                    for (let s of e) {
                        if (!(null == s ? void 0 : s.contentType)) continue;
                        let [, e, _] = null != (t = s.contentType.match(K)) ? t : [];
                        e && i.push({
                            contentType: s.contentType,
                            mimeType: e,
                            codec: null != _ ? _ : "",
                            robustness: s.robustness
                        })
                    }
                    return i
                }
                _appendProbableMediaCapabilities(e, t) {
                    let i = (0, Y.Z)(this._configs, t => (-1 === t.indexOf("webm") || e !== o.J.PLAYREADY && e !== o.J.PLAYREADY_HARDWARE && e !== o.J.PLAYREADY_RECOMMENDATION && e !== o.J.PLAYREADY_RECOMMENDATION_3000) && !!MediaSource.isTypeSupported(t));
                    i && (t.audioCapabilities = i.audioCapabilities, t.videoCapabilities = i.videoCapabilities)
                }
                _trySetServerCertificate(e, t) {
                    let i = this._certificate;
                    return (i && i.expiry > Date.now() ? Promise.resolve(i) : this._requestServerCertificate(e)).then(e => t.setServerCertificate(e.contents)).then(() => this).catch(e => (b.warn("Error from setting server certificate", e), this))
                }
                _cacheServerCertificate(e) {
                    let t;
                    switch (e) {
                        case o.J.FAIRPLAY:
                            t = "fairplay";
                            break;
                        case o.J.WIDEVINE:
                            t = "widevine";
                            break;
                        default:
                            return Promise.resolve(this)
                    }
                    return this._requestServerCertificate(`${this._unauthServerCertificateBase}/${t}-license`, !1).then(() => this, e => (b.warn("Cannot precache server certificate", e), this))
                }
                _requestServerCertificate(e, t = !0) {
                    return this._pendingCertificateRequest ? this._pendingCertificateRequest : this._transport.request(`${e}/v1/application-certificate`, {
                        authorize: t,
                        responseType: "arraybuffer",
                        parseResponseHeaders: !0,
                        retry: {
                            condition: (e, t) => e.getStatusFamily() === t.SERVER_ERROR
                        }
                    }).then(e => {
                        var t;
                        if (!e.body) throw TypeError("Response body is invalid");
                        this._pendingCertificateRequest = null;
                        let i = 3600,
                            s = null == (t = e.headers) ? void 0 : t.get("cache-control");
                        if (s) {
                            let e = s.match(/(?:^|,|\s)max-age=(\d+)(?:,|$)/);
                            e && e[1] && (i = 1e3 * parseInt(e[1], 10))
                        }
                        return this._certificate = {
                            expiry: Date.now() + (i - 600),
                            contents: e.body
                        }, this._certificate
                    })
                }
                _extractPlayReadyChallenge(e, t) {
                    var i;
                    let s = null,
                        _ = new Uint16Array(e),
                        E = String.fromCharCode.apply(null, _);
                    if (-1 === E.indexOf("PlayReadyKeyMessage")) return b.info("Using unextracted PlayReady message."), e;
                    let r = new DOMParser().parseFromString(E, "application/xml"),
                        o = r.getElementsByTagName("Challenge")[0],
                        d = null == (i = null == o ? void 0 : o.childNodes[0]) ? void 0 : i.nodeValue;
                    if (d) try {
                        s = atob(d);
                        let e = r.getElementsByTagName("name"),
                            t = r.getElementsByTagName("value");
                        if (e.length !== t.length) throw new l(n.I.EME_HEADER_KEY_VALUE_MISMATCH, "Mismatched header <name>/<value> pair in key message")
                    } catch (e) {
                        this.emit(a.J.EME_LICENSE_REQUEST_ERROR, Object.assign({
                            signal: t,
                            error: e
                        }, (0, g.P)())), s = null
                    } else this.emit(a.J.EME_LICENSE_REQUEST_ERROR, Object.assign({
                        signal: t,
                        error: new l(n.I.EME_HEADER_KEY_VALUE_MISMATCH, "Mismatched header <name>/<value> pair in key message")
                    }, (0, g.P)()));
                    return s
                }
                _onMessage(e, t) {
                    e.timeMap.generate.end = (0, r.X)();
                    let i = "message" in t ? t.message : null,
                        s = "messageType" in t ? t.messageType : void 0;
                    if (b.info("Got EME message event with type", s), i && (e.keySystem === o.J.PLAYREADY || e.keySystem === o.J.PLAYREADY_RECOMMENDATION || e.keySystem === o.J.PLAYREADY_RECOMMENDATION_3000 || e.keySystem === o.J.PLAYREADY_HARDWARE) && (i = this._extractPlayReadyChallenge(i, e.signal)), !i) return void b.info("Ignoring message event: no valid request payload");
                    if (!e.licenseServer) return void b.info("Ignoring message event: no licenseServer url");
                    e.timeMap.request.start = (0, r.X)();
                    let _ = e.licenseServer;
                    e.keySystem === o.J.FAIRPLAY && (_ = `${_}${-1!==_.indexOf("?")?"&":"?"}assetId=hex`), this._transport.request(_, {
                        method: "POST",
                        payload: i,
                        responseType: "arraybuffer",
                        retry: {
                            condition: (e, t) => 400 !== e.status && 402 !== e.status && 403 !== e.status && (!e.body || e.getStatusFamily() !== t.SUCCESS)
                        }
                    }).then(this._handleLicenseResponse.bind(this, e))
                }
                _handleLicenseResponse(e, t) {
                    let i, s, _ = t => {
                        e.licenseServer && (t.licenseServer = e.licenseServer), this.emit(a.J.EME_LICENSE_REQUEST_ERROR, Object.assign({
                            signal: e.signal,
                            error: t
                        }, (0, g.P)()))
                    };
                    if (e.timeMap.request.end = (0, r.X)(), 200 === t.status) {
                        if (!t.body) {
                            (i = new l(n.I.EME_LICENSE_REQUEST_EMPTY_RESPONSE, "Empty license response body")).status = t.status, _(i);
                            return
                        }
                        try {
                            e.timeMap.update.start = (0, r.X)(), e.keySession.update(t.body).catch(e => {
                                _(new l(n.I.EME_LICENSE_UPDATE_FAILED, e.message || "License update failed."))
                            }), b.info("KeySession updated.")
                        } catch (t) {
                            let {
                                message: e
                            } = t;
                            _(new l(n.I.EME_LICENSE_UPDATE_FAILED, e || "License update failed."))
                        }
                        return
                    }
                    try {
                        if (t.body) {
                            let e = new Uint8Array(t.body),
                                i = String.fromCharCode.apply(String, e);
                            s = JSON.parse(i).errorMsg
                        }
                    } catch (e) {}
                    402 === t.status ? this.emit(a.J.EME_LICENSE_REQUEST_CAPPED, Object.assign({
                        signal: e.signal,
                        error: new d(n.I.CAPPING_USER_IS_CAPPED, "User is capped.")
                    }, (0, g.P)())) : (400 === t.status && "widevine error" === s ? ((i = l.fatal(n.I.EME_LICENSE_REQUEST_WIDEVINE_ERROR, "Widevine license server failed to parse request.", {
                        isNetworkRelated: !0
                    })).status = t.status, i.shouldRefreshEndpoint = !0) : ((i = new l(n.I.EME_LICENSE_REQUEST_FAILED_WITH_STATUS, `License request failed (${s||"unknown"})`, {
                        isNetworkRelated: !0
                    })).status = t.status, i.shouldRefreshEndpoint = 400 === t.status || 403 === t.status), _(i))
                }
                _selectKeySystem(e) {
                    let t = this._preferredKeySystems;
                    for (let i = 0, s = t.length; i < s; i++) {
                        let s = t[i];
                        if (s && s in e) return e[s]
                    }
                    return null
                }
                _testMediaKeys(e) {
                    return new Promise(t => {
                        t(e.createMediaKeys())
                    }).then(t => {
                        if (!t) return Promise.reject(l.fatal(n.I.EME_MEDIA_KEYS_NOT_SUPPORTED, "Cannot create MediaKeys from KeySystemAccess"));
                        e.keySystem === o.J.FAIRPLAY && t.setServerCertificate(new ArrayBuffer(0));
                        try {
                            if (!t.createSession()) throw Error("")
                        } catch (t) {
                            let {
                                message: e
                            } = t;
                            return Promise.reject(l.fatal(n.I.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED, e || "Cannot create MediaKeySession from KeySystemAccess"))
                        }
                        return Promise.resolve(e)
                    }, e => (b.error(e.name), Promise.reject(l.fatal(n.I.EME_MEDIA_KEYS_NOT_SUPPORTED, e.message || "Unknown error"))))
                }
                _retryWithFallbackConfigs() {
                    var e, t;
                    let i = {
                        audio: null == (e = this._disallowCodecs) ? void 0 : e.audio,
                        video: null == (t = this._disallowCodecs) ? void 0 : t.video
                    };
                    if (this._configs = v.J.reduce((e, t) => {
                            let s = null == t ? void 0 : t.label;
                            if (s && !/-hw-/.test(s) && !this._configFilter.test(s)) {
                                let s = G(t, i);
                                s && ![...s.audioCapabilities || [], ...s.videoCapabilities || []].some(e => e.robustness && -1 !== e.robustness.indexOf("HW_SECURE")) && e.push(s)
                            }
                            return e
                        }, []), !this._configs.length) {
                        let e = new l(n.I.EME_NO_SUPPORTED_KEYSYSTEM, "No fallback configs available");
                        return b.error(e.message), this._keySystemDeferred.reject(e), this._keySystemDeferred.promise.then(() => this)
                    }
                    return b.info("Using fallback configs:", this._configs.map(e => e.label)), this.requestMediaKeySystemAccess(!0)
                }
                _saveSession(e) {
                    this._keySessions.push(e)
                }
                destroySessions() {
                    let e = [];
                    for (let t of this._keySessions) try {
                        let i = t.keySession;
                        if (!i) continue;
                        t.onMessageListener && i.removeEventListener(a.J.KEY_SESSION_MESSAGE, t.onMessageListener), t.onKeyStatusChangeListener && i.removeEventListener(a.J.KEY_SESSION_STATUSES_CHANGE, t.onKeyStatusChangeListener);
                        let s = Promise.resolve(i.close()).catch(e => {
                            b.warn("Failed to close KeySession", e)
                        });
                        e.push(s), t.keySession = null, t.onMessageListener = null, t.onKeyStatusChangeListener = null, b.info("Closed KeySession")
                    } catch (e) {
                        b.warn("Failed to close KeySession", e)
                    }
                    return this._keySessions = [], Promise.all(e)
                }
                init() {
                    let e = [];
                    for (let t of v.J)
                        if (!(t.label && this._configFilter.test(t.label))) {
                            if (this._disallowCodecs) {
                                let e = G(t, this._disallowCodecs);
                                if (!e) continue;
                                t = e
                            }
                            e.push(t)
                        }
                    return this._configs = e, this.requestMediaKeySystemAccess()
                }
                requestMediaKeySystemAccess(e) {
                    let t = this._keySystemDeferred,
                        i = {},
                        s = [];
                    for (let e in o.J) Object.prototype.hasOwnProperty.call(o.J, e) && s.push(navigator.requestMediaKeySystemAccess(o.J[e], this._configs).then(e => {
                        i[e.keySystem] = e
                    }).catch(() => {}));
                    return Promise.all(s).then(() => this._selectKeySystem(i)).then(e => e ? (b.info("Supported keySystem: ", e.keySystem), this._testMediaKeys(e)) : Promise.reject(new l(n.I.EME_NO_SUPPORTED_KEYSYSTEM, "No supported keysystem was found."))).then(e => (this._prepareConfiguration(e), t.resolve(e), this._precacheServerCertificate ? this._cacheServerCertificate(e.keySystem) : this)).catch(i => {
                        if (!e) return b.warn("EME initialization failed, retrying with fallback configs:", i.message), this._retryWithFallbackConfigs();
                        let s = i.code || n.I.EME_NO_SUPPORTED_KEYSYSTEM,
                            _ = i.message || "No supported keysystem";
                        return t.reject(l.fatal(s, _)), t.promise.then(() => this)
                    })
                }
                createMediaKeys(e) {
                    return this._keySystemDeferred.promise.then(e => e.createMediaKeys(), e => {
                        throw new l(n.I.EME_MEDIA_KEYS_NOT_SUPPORTED, e.message || "Cannot create MediaKeys from KeySystemAccess")
                    }).then(t => this.setMediaKeys(e, t), e => {
                        throw new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, e.message || "Failed to set MediaKeys on HTMLMediaElement")
                    }).then(() => this._configuration.promise.then(() => {
                        let t = this._keySystemSettings;
                        return t && !this._noServerCertificate && t.withCertificate ? this._trySetServerCertificate(t.licenseServer, e.mediaKeys) : this
                    }))
                }
                setMediaKeys(e, t) {
                    return e.setMediaKeys(t).then(() => {
                        if (!e.mediaKeys) throw new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, "Failed to set MediaKeys on HTMLMediaElement");
                        return this
                    }, e => {
                        throw new l(n.I.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED, e.message || "Failed to set MediaKeys on HTMLMediaElement")
                    })
                }
                removeMediaKeys(e) {
                    let t = e.mediaKeys;
                    return Promise.resolve(e.setMediaKeys(null)).then(() => t)
                }
                getKeySystemInfo() {
                    return this._configuration.promise
                }
                getKeySystemImpl() {
                    return this._emeImpl
                }
                createSessionWithParams(e) {
                    return new Promise((t, i) => {
                        b.info("Creating KeySession", e.keySystem);
                        let s = e.mediaKeys.createSession(),
                            _ = {
                                generate: {
                                    start: null,
                                    end: null
                                },
                                request: {
                                    start: null,
                                    end: null
                                },
                                update: {
                                    start: null,
                                    end: null
                                }
                            },
                            E = this._keySystemSettings && this._keySystemSettings.licenseServer || void 0,
                            o = this._onMessage.bind(this, {
                                keySystem: e.keySystem,
                                keySession: s,
                                licenseServer: e.licenseServer || E,
                                signal: e.signal,
                                timeMap: _
                            });
                        s.addEventListener(a.J.KEY_SESSION_MESSAGE, o);
                        let d = () => {
                            b.info("KeyStatus change"), _.update.end = (0, r.X)();
                            let e = e => null !== e.start && null !== e.end ? (0, r.r)(e.start, e.end) : 0;
                            t({
                                elapsed: {
                                    generate: e(_.generate),
                                    request: e(_.request),
                                    update: e(_.update)
                                }
                            })
                        };
                        return s.addEventListener(a.J.KEY_SESSION_STATUSES_CHANGE, d), this._saveSession({
                            keySession: s,
                            onMessageListener: o,
                            onKeyStatusChangeListener: d
                        }), b.info("Generating KeySession request", e.keySystem), _.generate.start = (0, r.X)(), Promise.resolve(s.generateRequest(e.initDataType, e.initData.buffer)).catch(e => {
                            let t;
                            if (e) {
                                switch (e.name) {
                                    case "NotSupportedError":
                                        t = n.I.EME_NOT_SUPPORTED_ERROR;
                                        break;
                                    case "InvalidStateError":
                                        t = n.I.EME_INVALID_STATE_ERROR;
                                        break;
                                    default:
                                        t = n.I.EME_UNKNOWN_ERROR
                                }
                                i(new l(t, e.message || "Unknown error message."))
                            }
                        })
                    })
                }
            }
        },
        31939: (e, t, i) => {
            i.d(t, {
                J: () => s
            });
            let s = [{
                label: "video-hw-all",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_ALL"
                }
            }, {
                label: "audio-sw-video-hw-all",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_ALL"
                }
            }, {
                label: "video-hw-decode",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_DECODE"
                }
            }, {
                label: "audio-sw-video-hw-decode",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_DECODE"
                }
            }, {
                label: "video-hw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_CRYPTO"
                }
            }, {
                label: "audio-sw-video-hw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "HW_SECURE_CRYPTO"
                }
            }, {
                label: "video-sw-decode",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "SW_SECURE_DECODE"
                }
            }, {
                label: "video-sw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO",
                    video: "SW_SECURE_CRYPTO"
                }
            }, {
                label: "video-no-robustness",
                robustness: {
                    audio: "",
                    video: ""
                }
            }, {
                label: "audio-hw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO"
                },
                includesOpus: !1
            }, {
                label: "audio-flac-sw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO"
                },
                includesOpus: !1,
                flacRobustness: "sw"
            }, {
                label: "audio-sw-crypto",
                robustness: {
                    audio: "SW_SECURE_CRYPTO"
                },
                includesFlac: !1,
                includesOpus: !1
            }, {
                label: "audio-no-robustness",
                robustness: {
                    audio: ""
                },
                includesFlac: !1,
                includesOpus: !1
            }].map(({
                label: e,
                robustness: t,
                includesFlac: i = !0,
                includesOpus: s = !0,
                flacRobustness: _ = "hw"
            }) => {
                let E = [...i ? [..."sw" === _ ? [{
                        contentType: 'audio/mp4; codecs="flac"',
                        robustness: "SW_SECURE_CRYPTO"
                    }] : [{
                        contentType: 'audio/mp4; codecs="flac"',
                        robustness: "HW_SECURE_DECODE"
                    }, {
                        contentType: 'audio/mp4; codecs="flac"',
                        robustness: "HW_SECURE_CRYPTO"
                    }]] : [], {
                        contentType: 'audio/mp4; codecs="mp4a.40.2"',
                        robustness: t.audio
                    }, {
                        contentType: 'audio/mp4; codecs="mp4a.40.5"',
                        robustness: t.audio
                    }, ...s ? [{
                        contentType: 'audio/webm; codecs="opus"',
                        robustness: t.audio
                    }] : []],
                    r = [{
                        contentType: 'video/mp4; codecs="avc1.64002a"',
                        robustness: t.video
                    }, {
                        contentType: 'video/mp4; codecs="avc1.4d402a"',
                        robustness: t.video
                    }, {
                        contentType: 'video/mp4; codecs="avc1.4d401f"',
                        robustness: t.video
                    }, {
                        contentType: 'video/webm; codecs="vp9"',
                        robustness: t.video
                    }, {
                        contentType: 'video/webm; codecs="vp8"',
                        robustness: t.video
                    }];
                return {
                    label: e,
                    initDataTypes: ["cenc"],
                    audioCapabilities: void 0 !== t.audio ? E : [],
                    videoCapabilities: void 0 !== t.video ? r : [],
                    distinctiveIdentifier: "optional",
                    persistentState: "optional",
                    sessionTypes: ["temporary"]
                }
            })
        },
        33233: (e, t, i) => {
            i.d(t, {
                v: () => _
            });
            var s = i(73880);
            let _ = {
                [s.J.WIDEVINE]: {
                    commonName: "widevine",
                    licenseServer: "https://@webgate/widevine-license",
                    withCertificate: !0,
                    pssh_field: {
                        audio: "pssh_widevine",
                        video: "encryption_data"
                    }
                },
                [s.J.PLAYREADY]: {
                    commonName: "playready",
                    licenseServer: "https://@webgate/playready-license",
                    withCertificate: !1,
                    pssh_field: {
                        audio: "pssh_playready",
                        video: "encryption_data"
                    }
                },
                [s.J.PLAYREADY_HARDWARE]: {
                    commonName: "playready",
                    licenseServer: "https://@webgate/playready-license",
                    withCertificate: !1,
                    pssh_field: {
                        audio: "pssh_playready",
                        video: "encryption_data"
                    }
                },
                [s.J.PLAYREADY_RECOMMENDATION]: {
                    commonName: "playready",
                    licenseServer: "https://@webgate/playready-license",
                    withCertificate: !1,
                    pssh_field: {
                        audio: "pssh_playready",
                        video: "encryption_data"
                    }
                },
                [s.J.PLAYREADY_RECOMMENDATION_3000]: {
                    commonName: "playready",
                    licenseServer: "https://@webgate/playready-license",
                    withCertificate: !1,
                    pssh_field: {
                        audio: "pssh_playready",
                        video: "encryption_data"
                    }
                },
                [s.J.FAIRPLAY]: {
                    commonName: "fairplay",
                    licenseServer: "https://@webgate/fairplay-license",
                    withCertificate: !0,
                    pssh_field: {
                        audio: "pssh_fairplay",
                        video: "asset_id"
                    }
                },
                [s.J.INVALID_SPOTIFY_KEY]: {
                    commonName: "spotify-invalid",
                    licenseServer: "https://@webgate",
                    withCertificate: !1,
                    pssh_field: {
                        audio: "pssh_invalid",
                        video: "encryption_data"
                    }
                }
            }
        },
        59554: (e, t, i) => {
            var s;
            i.d(t, {
                    I: () => s
                }),
                function(e) {
                    e.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS = "AD_MANIFEST_REQUEST_FAILED_WITH_STATUS", e.AD_MANIFEST_INVALID = "AD_MANIFEST_INVALID", e.CAPPING_USER_IS_CAPPED = "CAPPING_USER_IS_CAPPED", e.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES = "DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES", e.EME_API_NOT_SUPPORTED = "EME_API_NOT_SUPPORTED", e.EME_MEDIA_KEYS_NOT_SUPPORTED = "EME_MEDIA_KEYS_NOT_SUPPORTED", e.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED = "EME_MEDIA_KEY_SESSION_NOT_SUPPORTED", e.EME_NO_SUPPORTED_KEYSYSTEM = "EME_NO_SUPPORTED_KEYSYSTEM", e.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED = "EME_PLAYER_MEDIA_KEYS_SETTING_FAILED", e.EME_ERROR_UNKNOWN = "EME_ERROR_UNKNOWN", e.EME_LICENSE_REQUEST_EMPTY_RESPONSE = "EME_LICENSE_REQUEST_EMPTY_RESPONSE", e.EME_LICENSE_REQUEST_FAILED_WITH_STATUS = "EME_LICENSE_REQUEST_FAILED_WITH_STATUS", e.EME_LICENSE_REQUEST_WIDEVINE_ERROR = "EME_LICENSE_REQUEST_WIDEVINE_ERROR", e.EME_LICENSE_UPDATE_FAILED = "EME_LICENSE_UPDATE_FAILED", e.EME_HEADER_KEY_VALUE_MISMATCH = "EME_HEADER_KEY_VALUE_MISMATCH", e.EME_HEADER_MISSING_CHALLENGE = "EME_HEADER_MISSING_CHALLENGE", e.EME_INIT_DATA_MALFORMED = "EME_INIT_DATA_MALFORMED", e.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM = "EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM", e.EME_MEDIA_KEY_SESSION_V0_1B_ERROR = "EME_MEDIA_KEY_SESSION_V0_1B_ERROR", e.EME_MEDIA_KEY_SESSION_SAFARI_ERROR = "EME_MEDIA_KEY_SESSION_SAFARI_ERROR", e.EME_NO_SUPPORTED_CONFIGURATION = "EME_NO_SUPPORTED_CONFIGURATION", e.EME_NOT_SUPPORTED_ERROR = "EME_NOT_SUPPORTED_ERROR", e.EME_INVALID_STATE_ERROR = "EME_INVALID_STATE_ERROR", e.EME_UNKNOWN_ERROR = "EME_UNKNOWN_ERROR", e.DISALLOW_PROTECTED_TRACK_ERROR = "DISALLOW_PROTECTED_TRACK_ERROR", e.FILE_FORMAT_NOT_SUPPORTED = "FILE_FORMAT_NOT_SUPPORTED", e.FILE_MALFORMED_SEEKTABLE = "FILE_MALFORMED_SEEKTABLE", e.FILE_MALFORMED_PSSH = "FILE_MALFORMED_PSSH", e.FILE_NOT_RESOLVED = "FILE_NOT_RESOLVED", e.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO = "FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO", e.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO = "FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO", e.FRAGMENT_REQUEST_FAILED_WITH_ZERO = "FRAGMENT_REQUEST_FAILED_WITH_ZERO", e.FRAGMENT_REQUEST_FAILED_WITH_STATUS = "FRAGMENT_REQUEST_FAILED_WITH_STATUS", e.FRAGMENT_REQUEST_EMPTY_RESPONSE = "FRAGMENT_REQUEST_EMPTY_RESPONSE", e.FRAGMENT_REQUEST_UNEXPECTED_LENGTH = "FRAGMENT_REQUEST_UNEXPECTED_LENGTH", e.INVALID_TRACK = "INVALID_TRACK", e.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE = "PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE", e.PLAYER_BUFFER_QUOTA_EXCEEDED = "PLAYER_BUFFER_QUOTA_EXCEEDED", e.PLAYER_CANNOT_FIND_PLAYABLE_URI = "PLAYER_CANNOT_FIND_PLAYABLE_URI", e.PLAYER_INVALID_INTERNAL_STATE = "PLAYER_INVALID_INTERNAL_STATE", e.PLAYER_CONTAINER_ELEMENT_NOT_FOUND = "PLAYER_CONTAINER_ELEMENT_NOT_FOUND", e.PLAYER_MEDIA_ERROR = "PLAYER_MEDIA_ERROR", e.PLAYER_PLAYBACK_ERROR = "PLAYER_PLAYBACK_ERROR", e.PLAYER_TIMEOUT_ERROR = "PLAYER_TIMEOUT_ERROR", e.MEDIA_ABORTED = "MEDIA_ABORTED", e.MEDIA_DECODING_ERROR = "MEDIA_DECODING_ERROR", e.MEDIA_NETWORK_ERROR = "MEDIA_NETWORK_ERROR", e.MEDIA_NOT_SUPPORTED = "MEDIA_NOT_SUPPORTED", e.LICENSE_RESOLVE_INVALID_RESPONSE = "LICENSE_RESOLVE_INVALID_RESPONSE", e.LICENSE_RESOLVER_CANT_RESOLVE_URL = "LICENSE_RESOLVER_CANT_RESOLVE_URL", e.LICENSE_RESOLVER_DEPRECATED_VERSION = "LICENSE_RESOLVER_DEPRECATED_VERSION", e.LIST_PLAYER_NO_TRACK_PLAYER = "LIST_PLAYER_NO_TRACK_PLAYER", e.LIST_PLAYER_NO_LIST = "LIST_PLAYER_NO_LIST", e.LIST_PLAYER_INVALID_ARGUMENT = "LIST_PLAYER_INVALID_ARGUMENT", e.LIST_PLAYER_FORBIDDEN = "LIST_PLAYER_FORBIDDEN", e.STORAGE_ERROR = "STORAGE_ERROR", e.STORAGE_FAILED_WITH_STATUS = "STORAGE_FAILED_WITH_STATUS", e.STORAGE_RETURNED_NO_TRACKS = "STORAGE_RETURNED_NO_TRACKS", e.STORAGE_TRACK_MANIFEST_FAILED = "STORAGE_TRACK_MANIFEST_FAILED", e.STORAGE_TRACK_MANIFEST_EMPTY = "STORAGE_TRACK_MANIFEST_EMPTY", e.STORAGE_VIDEO_MANIFEST_FAILED = "STORAGE_VIDEO_MANIFEST_FAILED", e.TRACK_DATA_ALREADY_FINALIZED = "TRACK_DATA_ALREADY_FINALIZED", e.TSV_SENDING_FAILED = "TSV_SENDING_FAILED", e.PLAYBACK_STATS_SENDING_FAILED = "PLAYBACK_STATS_SENDING_FAILED", e.PLAYBACK_START_SENDING_FAILED = "PLAYBACK_START_SENDING_FAILED", e.UNKNOWN = "UNKNOWN"
                }(s || (s = {}))
        },
        63533: (e, t, i) => {
            function s(e, t) {
                var i, s;
                for (let _ of e) {
                    let e, E = {
                            audioCapabilities: [],
                            videoCapabilities: []
                        },
                        r = !1;
                    if (null == (i = _.audioCapabilities) ? void 0 : i.length)
                        for (let i of (r = !1, _.audioCapabilities))(e = i.contentType) && t(e) && (E.audioCapabilities.push(i), r = !0);
                    if (null == (s = _.videoCapabilities) ? void 0 : s.length)
                        for (let i of (r = !1, _.videoCapabilities))(e = i.contentType) && t(e) && (E.videoCapabilities.push(i), r = !0);
                    if (r) return E
                }
                return null
            }
            i.d(t, {
                Z: () => s,
                v: () => E
            });
            let _ = /([^;]+)(?:;\s?codecs="(.*)")?/;

            function E(e) {
                var t;
                let [, i = "unknown", s = "unknown"] = null != (t = e.match(_)) ? t : [];
                return {
                    mimeType: i,
                    codec: s,
                    contentType: e
                }
            }
        },
        73880: (e, t, i) => {
            var s;
            i.d(t, {
                    J: () => s
                }),
                function(e) {
                    e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready", e.PLAYREADY_HARDWARE = "com.microsoft.playready.hardware", e.PLAYREADY_RECOMMENDATION = "com.microsoft.playready.recommendation", e.PLAYREADY_RECOMMENDATION_3000 = "com.microsoft.playready.recommendation.3000", e.FAIRPLAY = "com.apple.fps.1_0", e.INVALID_SPOTIFY_KEY = "com.spotify.invalid"
                }(s || (s = {}))
        }
    }
]);