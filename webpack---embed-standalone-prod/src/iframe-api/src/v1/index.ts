{__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spotify-internal/uri */ "./node_modules/.pnpm/@spotify-internal+uri@6.44.0/node_modules/@spotify-internal/uri/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/iframe-api/src/v1/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/iframe-api/src/v1/types.ts");



let SpotifyIframeApi;
const SHORT_LINK_PATTERNS = ['spotify.link', 'spotify.app.link'];
const isShortLink = (url) => SHORT_LINK_PATTERNS.some(pattern => url.includes(pattern));
const normalizeSpotifyIframeUrl = (url) => {
    if (url.hostname === 'open.spotify.com') {
        url.pathname = url.pathname.replace(/^\/embed(?=\/)/, '');
    }
    return url;
};
const resolveShortLink = async (host, shortLink) => {
    try {
        const response = await fetch(`${host}/oembed?url=${encodeURIComponent(shortLink)}`);
        if (!response.ok)
            return null;
        const data = await response.json();
        return data.iframe_url
            ? normalizeSpotifyIframeUrl(new URL(data.iframe_url))
            : null;
    }
    catch {
        return null;
    }
};
const getURLInput = (input) => {
    try {
        const url = new URL(input);
        if (url.protocol === 'http:' || url.protocol === 'https:') {
            return url;
        }
    }
    catch {
        return null;
    }
    return null;
};
class SpotifyEmbedController {
    constructor(targetElement, options) {
        var _a, _b, _c, _d, _e, _f;
        this._listeners = {
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.READY]: [],
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_STARTED]: [],
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_UPDATE]: [],
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR]: [],
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ENTER_FULLSCREEN]: [],
            [_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.EXIT_FULLSCREEN]: [],
        };
        this.currentUri = '';
        this.loadRequestId = 0;
        this.loading = false;
        this._commandQ = [];
        this.setIframeDimensions = (width, height) => {
            this.iframeElement.setAttribute('width', width);
            this.iframeElement.setAttribute('height', height);
        };
        this.onWindowMessages = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (e.source === this.iframeElement.contentWindow) {
                if (((_a = e.data) === null || _a === void 0 ? void 0 : _a.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.READY) {
                    this.onPlayerReady();
                }
                if (((_b = e.data) === null || _b === void 0 ? void 0 : _b.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_UPDATE) {
                    const playbackState = (_c = e.data) === null || _c === void 0 ? void 0 : _c.payload;
                    this.onPlaybackUpdate(playbackState);
                }
                if (((_d = e.data) === null || _d === void 0 ? void 0 : _d.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_STARTED) {
                    const playbackState = (_e = e.data) === null || _e === void 0 ? void 0 : _e.payload;
                    this.onPlaybackStarted(playbackState);
                }
                if (((_f = e.data) === null || _f === void 0 ? void 0 : _f.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR) {
                    this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, (_g = e.data) === null || _g === void 0 ? void 0 : _g.payload);
                }
                if (((_h = e.data) === null || _h === void 0 ? void 0 : _h.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ENTER_FULLSCREEN) {
                    this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ENTER_FULLSCREEN, {});
                }
                if (((_j = e.data) === null || _j === void 0 ? void 0 : _j.type) === _types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.EXIT_FULLSCREEN) {
                    this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.EXIT_FULLSCREEN, {});
                }
            }
        };
        this.addListener = (eventName, handler) => {
            if (!this._listeners[eventName]) {
                this._listeners[eventName] = [];
            }
            this._listeners[eventName].push(handler);
            return () => {
                this.removeListener(eventName, handler);
            };
        };
        this.removeListener = (eventName, handler) => {
            if (this._listeners[eventName] && this._listeners[eventName].length) {
                this._listeners[eventName] = this._listeners[eventName].filter(storedHandler => handler !== storedHandler);
            }
        };
        this.on = this.addListener;
        this.off = this.removeListener;
        this.once = (eventName, handler) => {
            this.addListener(eventName, (...args) => {
                handler(...args);
                this.removeListener(eventName, handler);
            });
        };
        this.emitEvent = (eventName, eventData) => {
            var _a;
            (_a = this._listeners[eventName]) === null || _a === void 0 ? void 0 : _a.forEach(handler => handler({ data: eventData }));
        };
        this.onPlayerReady = () => {
            this.loading = false;
            this.flushCommandQ();
            this.playerReadyAck();
            this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.READY, {});
        };
        this.onPlaybackStarted = (playbackState) => {
            this.loading = false;
            this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_STARTED, playbackState);
        };
        this.onPlaybackUpdate = (playbackState) => {
            this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_UPDATE, playbackState);
        };
        this.appendCommonParams = (embedURL, timestampInSeconds = 0) => {
            if (this.options.startAt || timestampInSeconds) {
                let startAt = timestampInSeconds;
                if (!startAt && this.options.startAt) {
                    startAt = parseInt(this.options.startAt, 10);
                }
                if (!isNaN(startAt)) {
                    embedURL.searchParams.append('t', startAt.toString());
                }
            }
            if (this.options.theme === 'dark') {
                embedURL.searchParams.append('theme', '0');
            }
            if (this.queryParamLocale) {
                embedURL.searchParams.append('locale', this.queryParamLocale);
            }
            if (this.queryParamReferer) {
                embedURL.searchParams.append('referrer', this.queryParamReferer);
            }
            if (!embedURL.searchParams.has('utm_source')) {
                embedURL.searchParams.append('utm_source', 'iframe-api');
            }
        };
        this.loadEntityInput = (entityString, preferVideo = false, timestampInSeconds = 0, allowUrlInput = false) => {
            if (entityString === this.currentUri)
                return;
            const requestId = ++this.loadRequestId;
            if (isShortLink(entityString)) {
                this.loading = true;
                resolveShortLink(this.host, entityString)
                    .then(iframeUrl => {
                    if (requestId !== this.loadRequestId)
                        return;
                    if (iframeUrl) {
                        this.loadEntityInput(iframeUrl.href, preferVideo, timestampInSeconds, true);
                        return;
                    }
                    this.loading = false;
                    const error = {
                        code: _types__WEBPACK_IMPORTED_MODULE_2__.EmbedErrorCode.InvalidURI,
                        message: `Invalid URI: ${entityString}`,
                        recoverable: false,
                    };
                    this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, error);
                })
                    .catch(() => {
                    if (requestId !== this.loadRequestId)
                        return;
                    this.loading = false;
                    const error = {
                        code: _types__WEBPACK_IMPORTED_MODULE_2__.EmbedErrorCode.PlaybackError,
                        message: `Failed to resolve URI: ${entityString}`,
                        recoverable: true,
                    };
                    this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, error);
                });
                return;
            }
            const urlInput = getURLInput(entityString);
            const uri = allowUrlInput || !urlInput ? (0,_spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.parseURI)(entityString) : null;
            if (uri &&
                (uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.EPISODE ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.SHOW ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.ALBUM ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.ARTIST ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.PLAYLIST_V2 ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.TRACK ||
                    uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.PRERELEASE)) {
                this.loading = true;
                const type = uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.PLAYLIST_V2 ? 'playlist' : uri.type;
                const embedURL = new URL(`${this.host}/embed/${type}/${uri.id}`);
                if (allowUrlInput) {
                    urlInput === null || urlInput === void 0 ? void 0 : urlInput.searchParams.forEach((value, key) => {
                        embedURL.searchParams.append(key, value);
                    });
                }
                this.appendCommonParams(embedURL, timestampInSeconds);
                const supportsPreferredVideo = uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.EPISODE || uri.type === _spotify_internal_uri__WEBPACK_IMPORTED_MODULE_0__.URITypeMap.SHOW;
                if (supportsPreferredVideo && preferVideo) {
                    SpotifyIframeApi.supportsVideo(entityString).then(isVideoContent => {
                        if (requestId !== this.loadRequestId)
                            return;
                        if (isVideoContent) {
                            embedURL.pathname += '/video';
                        }
                        this.iframeElement.src = embedURL.href;
                    });
                }
                else {
                    this.iframeElement.src = embedURL.href;
                }
            }
            else {
                const error = {
                    code: _types__WEBPACK_IMPORTED_MODULE_2__.EmbedErrorCode.InvalidURI,
                    message: `Invalid URI: ${entityString}`,
                    recoverable: false,
                };
                this.emitEvent(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, error);
            }
        };
        this.loadUri = (uriString, preferVideo = false, timestampInSeconds = 0) => {
            this.loadEntityInput(uriString, preferVideo, timestampInSeconds, false);
        };
        this.loadEntity = (entityString, preferVideo = false, timestampInSeconds = 0) => {
            this.loadEntityInput(entityString, preferVideo, timestampInSeconds, true);
        };
        this.playerReadyAck = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.LOAD_COMPLETE_ACK });
        };
        this.play = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.PLAY });
        };
        this.playFromStart = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.PLAY_FROM_START });
        };
        this.restart = this.playFromStart;
        this.pause = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.PAUSE });
        };
        this.resume = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.RESUME });
        };
        this.togglePlay = () => {
            this.sendMessageToEmbed({ command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.TOGGLE_PLAY });
        };
        this.seek = (timestampInSeconds) => {
            this.sendMessageToEmbed({
                command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.SEEK,
                timestamp: timestampInSeconds,
            });
        };
        this.onFullscreenChange = (isFullscreen) => {
            this.sendMessageToEmbed({
                command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.FULLSCREEN_CHANGE,
                isFullscreen: isFullscreen ? 1 : 0,
            });
        };
        this.onFullscreenError = (errorCode) => {
            this.sendMessageToEmbed({
                command: _types__WEBPACK_IMPORTED_MODULE_2__.IframeCommands.FULLSCREEN_ERROR,
                errorCode,
            });
        };
        this.sendMessageToEmbed = (messageToSend) => {
            if (this.loading) {
                this._commandQ.push(messageToSend);
                return;
            }
            if (this.iframeElement.contentWindow) {
                this.iframeElement.contentWindow.postMessage(messageToSend, '*');
            }
            else {
                console.error(`Spotify Embed: Failed to send message ${messageToSend}.
      Most likely this is because the iframe containing the embed player
      has not finished loading yet.`);
            }
        };
        this.flushCommandQ = () => {
            if (this._commandQ.length) {
                this._commandQ.forEach(command => {
                    setTimeout(() => {
                        this.sendMessageToEmbed(command);
                    }, 0);
                });
                this._commandQ = [];
            }
        };
        this.destroy = () => {
            var _a;
            (_a = this.iframeElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.iframeElement);
            window.removeEventListener('message', this.onWindowMessages);
        };
        this.host = ((_a = window.SpotifyIframeConfig) === null || _a === void 0 ? void 0 : _a.host) || 'https://open.spotify.com';
        this.queryParamReferer = ((_b = window.SpotifyIframeConfig) === null || _b === void 0 ? void 0 : _b.referrer) || undefined;
        this.queryParamLocale = ((_c = window.SpotifyIframeConfig) === null || _c === void 0 ? void 0 : _c.locale) || undefined;
        this.options = options;
        const url = new URL(this.host);
        if (!url.hostname.endsWith('.spotify.com') &&
            !url.hostname.endsWith('.spotify.net')) {
            throw new Error(`It appears that the hostname for the Spotify embed player has been overridden.
      Please make sure that "SpotifyEmbedConfig" is not being overridden.`);
        }
        const iframeElement = document.createElement('iframe');
        Object.entries(_constants__WEBPACK_IMPORTED_MODULE_1__.EMBED_REQUIRED_IFRAME_ATTRIBUTES).forEach(([attr, val]) => {
            const htmlAttr = attr.toLowerCase();
            if (typeof val === 'boolean') {
                iframeElement.setAttribute(htmlAttr, '');
            }
            else {
                iframeElement.setAttribute(htmlAttr, val);
            }
        });
        this.iframeElement = iframeElement;
        const width = (_d = options.width) !== null && _d !== void 0 ? _d : '100%';
        const height = (_e = options.height) !== null && _e !== void 0 ? _e : _constants__WEBPACK_IMPORTED_MODULE_1__.EMBED_DEFAULT_HEIGHT.toString();
        this.setIframeDimensions(width, height);
        (_f = targetElement.parentElement) === null || _f === void 0 ? void 0 : _f.replaceChild(iframeElement, targetElement);
        window.addEventListener('message', this.onWindowMessages);
    }
}
SpotifyIframeApi = {
    createController: (targetElement, options = {}, callbackOrEventsHandlers) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const apiInstance = new SpotifyEmbedController(targetElement, options);
        const hasInitialEntity = Boolean((_a = options.url) !== null && _a !== void 0 ? _a : options.uri);
        const loadInitialEntity = () => {
            if (options.url) {
                apiInstance.loadEntity(options.url, options.preferVideo);
            }
            else if (options.uri) {
                apiInstance.loadUri(options.uri, options.preferVideo);
            }
        };
        let callback;
        let errorCallback = undefined;
        if (typeof callbackOrEventsHandlers === 'function') {
            callback = callbackOrEventsHandlers;
            if (hasInitialEntity) {
                loadInitialEntity();
            }
        }
        else {
            callback = callbackOrEventsHandlers.onCreateCallback;
            if ((_b = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _b === void 0 ? void 0 : _b.onError) {
                errorCallback = callbackOrEventsHandlers.events.onError;
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, errorCallback);
            }
            if ((_c = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _c === void 0 ? void 0 : _c.onReady) {
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.READY, callbackOrEventsHandlers.events.onReady);
            }
            if ((_d = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _d === void 0 ? void 0 : _d.onPlaybackStarted) {
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_STARTED, callbackOrEventsHandlers.events.onPlaybackStarted);
            }
            if ((_e = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _e === void 0 ? void 0 : _e.onPlaybackUpdate) {
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.PLAYBACK_UPDATE, callbackOrEventsHandlers.events.onPlaybackUpdate);
            }
            if ((_f = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _f === void 0 ? void 0 : _f.onEnterFullscreen) {
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ENTER_FULLSCREEN, callbackOrEventsHandlers.events.onEnterFullscreen);
            }
            if ((_g = callbackOrEventsHandlers === null || callbackOrEventsHandlers === void 0 ? void 0 : callbackOrEventsHandlers.events) === null || _g === void 0 ? void 0 : _g.onExitFullscreen) {
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.EXIT_FULLSCREEN, callbackOrEventsHandlers.events.onExitFullscreen);
            }
        }
        if (hasInitialEntity) {
            if (!errorCallback) {
                const errorHandler = error => {
                    throw new Error(error.data.message);
                };
                apiInstance.addListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, errorHandler);
                loadInitialEntity();
                apiInstance.removeListener(_types__WEBPACK_IMPORTED_MODULE_2__.IframeAPIEvent.ERROR, errorHandler);
            }
            else {
                loadInitialEntity();
            }
        }
        if (callback)
            callback(apiInstance);
    },
    supportsVideo: async (uri) => {
        var _a;
        const host = (_a = window.SpotifyIframeConfig) === null || _a === void 0 ? void 0 : _a.host;
        const response = await fetch(`${host}/oembed?url=${encodeURIComponent(uri)}`, {
            method: 'GET',
        });
        const data = await response.json();
        return data.type === 'video';
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpotifyIframeApi);
if (!window.onSpotifyIframeApiReady) {
    let callback;
    const triggerCallbackWhenPropertyAdded = () => {
        if (typeof callback === 'function')
            callback(SpotifyIframeApi);
    };
    Object.defineProperty(window, 'onSpotifyIframeApiReady', {
        set(value) {
            callback = value;
            setTimeout(triggerCallbackWhenPropertyAdded, 0);
        },
    });
}
else {
    window.onSpotifyIframeApiReady(SpotifyIframeApi);
}


//# sourceURL=webpack://embed-standalone-prod/./src/iframe-api/src/v1/index.ts?
}