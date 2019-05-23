(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/@ionic-native/in-app-browser/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/in-app-browser/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: InAppBrowserObject, InAppBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowserObject", function() { return InAppBrowserObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowser", function() { return InAppBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());

var InAppBrowser = /** @class */ (function (_super) {
    __extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.pluginName = "InAppBrowser";
    InAppBrowser.plugin = "cordova-plugin-inappbrowser";
    InAppBrowser.pluginRef = "cordova.InAppBrowser";
    InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
    InAppBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InAppBrowser);
    return InAppBrowser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFpRzFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaUNBQUk7SUFNSixrQ0FBSztJQU9MLGlDQUFJO0lBUUosMENBQWEsYUFBQyxNQUF3QztJQVV0RCxzQ0FBUyxhQUFDLEdBQXFDO0lBVS9DLCtCQUFFLGFBQUMsS0FBYTs7O3NEQUFpQztnQkFDL0MsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsVUFBQyxRQUFxQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDbkMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDO29CQUNGLE9BQU87d0JBQ0wsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUN0QyxLQUFLLEVBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCO29CQUhELENBR0MsQ0FBQztnQkFDTixDQUFDLENBQ0YsQ0FBQzthQUNIOzs7NkJBeE1IOzs7O0lBa1BrQyxnQ0FBaUI7Ozs7SUFDakQ7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBTSxHQUFOLFVBQ0UsR0FBVyxFQUNYLE1BQWUsRUFDZixPQUFzQztRQUV0QyxPQUFPLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFoQlUsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQWxQekI7RUFrUGtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IGNvcmRvdmE6IENvcmRvdmEgJiB7IEluQXBwQnJvd3NlcjogYW55IH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5BcHBCcm93c2VyT3B0aW9ucyB7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LiAqL1xuICBoaWRkZW4/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLiAqL1xuICBjbGVhcmNhY2hlPzogJ3llcyc7XG4gIC8qIFNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgc2Vzc2lvbiBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLiAqL1xuICBjbGVhcnNlc3Npb25jYWNoZT86ICd5ZXMnO1xuICAvKiAoQW5kcm9pZCkgU2V0IHRvIGEgc3RyaW5nIHRvIHVzZSBhcyB0aGUgY2xvc2UgYnV0dG9uJ3MgY2FwdGlvbiBpbnN0ZWFkIG9mIGEgWC4gTm90ZSB0aGF0IHlvdSBuZWVkIHRvIGxvY2FsaXplIHRoaXMgdmFsdWUgeW91cnNlbGYuXG4gICAqICAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLiAqL1xuICBjbG9zZWJ1dHRvbmNhcHRpb24/OiBzdHJpbmc7XG4gIC8qIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjbG9zZSBidXR0b24gY29sb3IgZnJvbSBkZWZhdWx0LCByZWdhcmRsZXNzIG9mIGJlaW5nIGEgdGV4dCBvciBkZWZhdWx0IFguIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAgKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IERvbmUgYnV0dG9uJ3MgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC4gKi9cbiAgY2xvc2VidXR0b25jb2xvcj86IHN0cmluZztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gc2hvdyBBbmRyb2lkIGJyb3dzZXIncyB6b29tIGNvbnRyb2xzLCBzZXQgdG8gbm8gdG8gaGlkZSB0aGVtLiBEZWZhdWx0IHZhbHVlIGlzIHllcy4gKi9cbiAgem9vbT86ICd5ZXMnIHwgJ25vJztcbiAgLyogKEFuZHJvaWQgJiBXaW5kb3dzIFBob25lIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuICovXG4gIGhhcmR3YXJlYmFjaz86ICd5ZXMnIHwgJ25vJztcbiAgLypcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAgKGlPUykgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG5hdmlnYXRpb24gYnV0dG9ucyBvbiBvciBvZmYgKGRlZmF1bHRzIHRvIG5vKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciBvZiBib3RoIG5hdmlnYXRpb24gYnV0dG9ucyBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzIGFuZCBub3QgaGlkZW5hdmlnYXRpb25idXR0b25zIHNldCB0byB5ZXMuXG4gICAqICAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuICovXG4gIG5hdmlnYXRpb25idXR0b25jb2xvcj86IHN0cmluZztcbiAgLyogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqICAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC4qL1xuICB0b29sYmFyY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIG1ha2UgSW5BcHBCcm93c2VyIFdlYlZpZXcgdG8gcGF1c2UvcmVzdW1lIHdpdGggdGhlIGFwcCB0byBzdG9wIGJhY2tncm91bmQgYXVkaW8gKHRoaXMgbWF5IGJlIHJlcXVpcmVkIHRvIGF2b2lkIEdvb2dsZSBQbGF5IGlzc3VlcykgKi9cbiAgc2hvdWxkUGF1c2VPblN1c3BlbmQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgYSBjbG9zZSBidXR0b24gaW4gdGhlIGZvb3RlciBzaW1pbGFyIHRvIHRoZSBpT1MgRG9uZSBidXR0b24uIFRoZSBjbG9zZSBidXR0b24gd2lsbCBhcHBlYXIgdGhlIHNhbWUgYXMgZm9yIHRoZSBoZWFkZXIgaGVuY2UgdXNlIGNsb3NlYnV0dG9uY2FwdGlvbiBhbmQgY2xvc2VidXR0b25jb2xvciB0byBzZXQgaXRzIHByb3BlcnRpZXMgKi9cbiAgZm9vdGVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGUgIzAwZmYwMCBvciAjQ0MwMGZmMDAgKCNhYXJyZ2diYiksIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgZm9vdGVyIGNvbG9yIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGZvb3RlciBzZXQgdG8geWVzICovXG4gIGZvb3RlcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG1ha2UgdGhlIHRvb2xiYXIgdHJhbnNsdWNlbnQoc2VtaS10cmFuc3BhcmVudCkgKGRlZmF1bHRzIHRvIHllcykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC4gKi9cbiAgdG9vbGJhcnRyYW5zbHVjZW50PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSAgU2V0IHRvIHllcyBvciBubyB0byBwcmV2ZW50IHZpZXdwb3J0IHNjYWxpbmcgdGhyb3VnaCBhIG1ldGEgdGFnIChkZWZhdWx0cyB0byBubykuICovXG4gIGVuYWJsZVZpZXdwb3J0U2NhbGU/OiAneWVzJyB8ICdubyc7XG4gIC8qIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBhbGxvdyBpbi1saW5lIEhUTUw1IG1lZGlhIHBsYXliYWNrLCBkaXNwbGF5aW5nIHdpdGhpbiB0aGUgYnJvd3NlciB3aW5kb3cgcmF0aGVyIHRoYW4gYSBkZXZpY2Utc3BlY2lmaWMgcGxheWJhY2sgaW50ZXJmYWNlLlxuICAgKiBUaGUgSFRNTCdzIHZpZGVvIGVsZW1lbnQgbXVzdCBhbHNvIGluY2x1ZGUgdGhlIHdlYmtpdC1wbGF5c2lubGluZSBhdHRyaWJ1dGUgKGRlZmF1bHRzIHRvIG5vKSAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gZmxpcGhvcml6b250YWwsIGNyb3NzZGlzc29sdmUgb3IgY292ZXJ2ZXJ0aWNhbCB0byBzZXQgdGhlIHRyYW5zaXRpb24gc3R5bGUgKGRlZmF1bHRzIHRvIGNvdmVydmVydGljYWwpLiAqL1xuICB0cmFuc2l0aW9uc3R5bGU/OiAnZmxpcGhvcml6b250YWwnIHwgJ2Nyb3NzZGlzc29sdmUnIHwgJ2NvdmVydmVydGljYWwnO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LiAqL1xuICBmdWxsc2NyZWVuPzogJ3llcyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqIHRoZSBldmVudG5hbWUsIGVpdGhlciBsb2Fkc3RhcnQsIGxvYWRzdG9wLCBsb2FkZXJyb3IsIG9yIGV4aXQuICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIHRoZSBVUkwgdGhhdCB3YXMgbG9hZGVkLiAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIHRoZSBlcnJvciBjb2RlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogdGhlIGVycm9yIG1lc3NhZ2UsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXQ9XCJzZWxmXCJdICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqICAgICAgICAgICAgICAgICBfc2VsZjogT3BlbnMgaW4gdGhlIFdlYlZpZXcgaWYgdGhlIFVSTCBpcyBpbiB0aGUgd2hpdGUgbGlzdCwgb3RoZXJ3aXNlIGl0IG9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfYmxhbms6IE9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfc3lzdGVtOiBPcGVucyBpbiB0aGUgc3lzdGVtJ3Mgd2ViIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICkge1xuICAgIHRyeSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIChrZXk6IHN0cmluZykgPT4gYCR7a2V5fT0keyhvcHRpb25zIGFzIEluQXBwQnJvd3Nlck9wdGlvbnMpW2tleV19YFxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbignLCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4odXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwsIHRhcmdldCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOYXRpdmU6IEluQXBwQnJvd3NlciBpcyBub3QgaW5zdGFsbGVkIG9yIHlvdSBhcmUgcnVubmluZyBvbiBhIGJyb3dzZXIuIEZhbGxpbmcgYmFjayB0byB3aW5kb3cub3Blbi4nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhbiBJbkFwcEJyb3dzZXIgd2luZG93IHRoYXQgd2FzIG9wZW5lZCBoaWRkZW4uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAqIGlmIHRoZSBJbkFwcEJyb3dzZXIgd2FzIGFscmVhZHkgdmlzaWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIEluQXBwQnJvd3NlciB3aW5kb3cuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjbG9zZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCBpcyBjdXJyZW50bHkgc2hvd24uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAqIGlmIHRoZSBJbkFwcEJyb3dzZXIgd2FzIGFscmVhZHkgaGlkZGVuLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgSmF2YVNjcmlwdCBjb2RlIGludG8gdGhlIEluQXBwQnJvd3NlciB3aW5kb3cuXG4gICAqIEBwYXJhbSBzY3JpcHQge09iamVjdH0gRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGV4ZWN1dGVTY3JpcHQoc2NyaXB0OiB7IGZpbGU/OiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgQ1NTIGludG8gdGhlIEluQXBwQnJvd3NlciB3aW5kb3cuXG4gICAqIEBwYXJhbSBjc3Mge09iamVjdH0gRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGluc2VydENTUyhjc3M6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+KFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxJbkFwcEJyb3dzZXJFdmVudD4pID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgQnJvd3NlclxuICogQGRlc2NyaXB0aW9uIExhdW5jaGVzIGluIGFwcCBCcm93c2VyXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLWJyb3dzZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlhYjogSW5BcHBCcm93c2VyKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IGJyb3dzZXIgPSB0aGlzLmlhYi5jcmVhdGUoJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tLycpO1xuICpcbiAqIGJyb3dzZXIuZXhlY3V0ZVNjcmlwdCguLi4pO1xuICpcbiAqIGJyb3dzZXIuaW5zZXJ0Q1NTKC4uLik7XG4gKiBicm93c2VyLm9uKCdsb2Fkc3RvcCcpLnN1YnNjcmliZShldmVudCA9PiB7XG4gKiAgICBicm93c2VyLmluc2VydENTUyh7IGNvZGU6IFwiYm9keXtjb2xvcjogcmVkO1wiIH0pO1xuICogfSk7XG4gKlxuICogYnJvd3Nlci5jbG9zZSgpO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEluQXBwQnJvd3Nlck9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIEluQXBwQnJvd3NlckV2ZW50XG4gKiBJbkFwcEJyb3dzZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5BcHBCcm93c2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5JbkFwcEJyb3dzZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtICB1cmwge3N0cmluZ30gICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtICB0YXJnZXQge3N0cmluZ30gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogQHBhcmFtICBvcHRpb25zIHtzdHJpbmd9IE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKiBAcmV0dXJucyB7SW5BcHBCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRhcmdldD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogc3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc1xuICApOiBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICAgIHJldHVybiBuZXcgSW5BcHBCcm93c2VyT2JqZWN0KHVybCwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");








var routes = [
    {
        path: '',
        redirectTo: '/menu/main',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"],
        children: [
            {
                path: 'main',
                loadChildren: '../main/main.module#MainPageModule'
            },
            {
                path: 'profile',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: '../profile/profile.module#ProfilePageModule'
            },
            {
                path: 'posts',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: '../posts/posts.module#PostsPageModule'
            },
            {
                path: 'tabs',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: '../tabs/tabs.module#TabsPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu contentId=\"content\">\n\n\t<ion-header>\n\t\t<ion-toolbar color=\"light\">\n\t\t\t<ion-title>Menu</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<ion-content>\n\n\t\t<div *ngIf=\"!logged\">\n\t\t\t<div *ngFor=\"let p of out_pages\">\n\t\t\t<!-- Standard Menu Item -->\n\t\t\t<ion-menu-toggle *ngIf=\"p.url && !p.click\">\n\t\t\t\t<ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" *ngIf=\"!p.external\">\n\t\t\t\t\t<ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{ p.title }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-menu-toggle>\n\n\t\t\t<ion-menu-toggle *ngIf=\"p.click\">\n\t\t\t\t<ion-item  [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" (click)=\"logout()\"  *ngIf=\"!p.external\">\n\t\t\t\t\t<ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{ p.title }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-menu-toggle>\n\t\t\t<!-- Item with Children -->\n\n\t\t\t<ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\" detail=\"false\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n\t\t\t\t<ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n\t\t\t\t<ion-label>{{ p.title }}</ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<!-- Children List for clicked Item -->\n\t\t\t<ion-list *ngIf=\"p.open\">\n\t\t\t\t<ion-menu-toggle>\n\t\t\t\t\t<div *ngFor=\"let sub of p.children\">\n\t\t\t\t\t\t<ion-item button class=\"sub-item\" (click)=\"OpenUrl(sub.url)\">\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t{{ sub.title }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</ion-list>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"logged\">\n\t\t<div *ngFor=\"let p of logged_pages\">\n\t\t\t<!-- Standard Menu Item -->\n\t\t\t<ion-menu-toggle *ngIf=\"p.url && !p.click\">\n\t\t\t\t<ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" *ngIf=\"!p.external\">\n\t\t\t\t\t<ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{ p.title }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-menu-toggle>\n\n\t\t\t<ion-menu-toggle *ngIf=\"p.click\">\n\t\t\t\t<ion-item  [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" (click)=\"logout()\"  *ngIf=\"!p.external\">\n\t\t\t\t\t<ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{ p.title }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-menu-toggle>\n\t\t\t<!-- Item with Children -->\n\n\t\t\t<ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\" detail=\"false\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n\t\t\t\t<ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n\t\t\t\t<ion-label>{{ p.title }}</ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<!-- Children List for clicked Item -->\n\t\t\t<ion-list *ngIf=\"p.open\">\n\t\t\t\t<ion-menu-toggle>\n\t\t\t\t\t<div *ngFor=\"let sub of p.children\">\n\t\t\t\t\t\t<ion-item button class=\"sub-item\" (click)=\"OpenUrl(sub.url)\">\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t{{ sub.title }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</ion-list>\n\t\t</div>\n\t</div>\n</ion-content>\n\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  --ion-text-color: var(--ion-color-secondary); }\n  .active ion-icon {\n    --ion-text-color-rgb: var(--ion-color-secondary); }\n  .parent-active {\n  font-weight: 500; }\n  .sub-item {\n  padding-left: 20px;\n  font-size: small; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbC9pb25pYy9pb25pYy1hcHAvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQWlCLEVBQUE7RUFEckI7SUFJUSxnREFBcUIsRUFBQTtFQUk3QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxufVxuXG4ucGFyZW50LWFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Yi1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");







var MenuPage = /** @class */ (function () {
    function MenuPage(iab, storage, router, events, authService) {
        this.iab = iab;
        this.storage = storage;
        this.router = router;
        this.events = events;
        this.authService = authService;
        this.out_pages = [
            {
                title: 'Sistemas de Informação FCM',
                url: '/menu/main',
                external: false,
                icon: 'home'
            },
            {
                title: 'Institucional',
                children: [
                    {
                        title: 'A FCM',
                        url: 'http://fundacaocefetminas.org.br',
                        external: true
                    },
                    {
                        title: 'Empresas Instituidoras',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Gestão 2017-2021',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Apoio ao CEFET-MG',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Estatuto',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Relatório de Gestão',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                ]
            }
        ];
        this.logged_pages = [
            {
                title: 'Perfil',
                url: '/menu/profile',
                external: false,
                icon: 'person'
            },
            {
                title: 'Notificações',
                url: '/menu/tabs',
                external: false,
                icon: 'notifications'
            },
            {
                title: 'Configurações',
                url: '/menu/posts',
                external: false,
                icon: 'settings'
            },
            {
                title: 'Sair',
                url: '/menu/main',
                click: true,
                external: false,
                icon: 'power'
            }
        ];
        this.pages = [];
    }
    MenuPage.prototype.logout = function () {
        this.authService.logout();
    };
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('login', function (data) {
            _this.logged = true;
        });
        this.events.subscribe('logout', function (data) {
            _this.logged = false;
        });
    };
    MenuPage.prototype.OpenUrl = function (Url, myEvent) {
        var browser = this.iab.create(Url);
        browser.show();
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]],
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map