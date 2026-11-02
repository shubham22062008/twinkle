{__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmbedErrorCode: () => (/* binding */ EmbedErrorCode),
/* harmony export */   IframeAPIEvent: () => (/* binding */ IframeAPIEvent),
/* harmony export */   IframeCommands: () => (/* binding */ IframeCommands)
/* harmony export */ });
var EmbedErrorCode;
(function (EmbedErrorCode) {
    EmbedErrorCode["InvalidURI"] = "invalid_uri";
    EmbedErrorCode["PlaybackError"] = "playback_error";
})(EmbedErrorCode || (EmbedErrorCode = {}));
var IframeAPIEvent;
(function (IframeAPIEvent) {
    IframeAPIEvent["READY"] = "ready";
    IframeAPIEvent["PLAYBACK_STARTED"] = "playback_started";
    IframeAPIEvent["PLAYBACK_UPDATE"] = "playback_update";
    IframeAPIEvent["ERROR"] = "error";
    IframeAPIEvent["ENTER_FULLSCREEN"] = "uiaction/enterfullscreen";
    IframeAPIEvent["EXIT_FULLSCREEN"] = "uiaction/exitfullscreen";
})(IframeAPIEvent || (IframeAPIEvent = {}));
var IframeCommands;
(function (IframeCommands) {
    IframeCommands["PLAY_FROM_START"] = "play_from_start";
    IframeCommands["PLAY"] = "play";
    IframeCommands["PAUSE"] = "pause";
    IframeCommands["RESUME"] = "resume";
    IframeCommands["TOGGLE_PLAY"] = "toggle";
    IframeCommands["SEEK"] = "seek";
    IframeCommands["LOAD_COMPLETE_ACK"] = "load_complete_ack";
    IframeCommands["FULLSCREEN_CHANGE"] = "fullscreen_change";
    IframeCommands["FULLSCREEN_ERROR"] = "fullscreen_error";
})(IframeCommands || (IframeCommands = {}));


//# sourceURL=webpack://embed-standalone-prod/./src/iframe-api/src/v1/types.ts?
}