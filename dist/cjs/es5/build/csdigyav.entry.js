"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wcs_core_js_1 = require("../wcs.core.js");
var Tab = function () { function e() { this.slot = "wcs-tab"; } return e.prototype.componentDidLoad = function () { this.wcsTabDidLoad.emit(); }, e.prototype.render = function () { return wcs_core_js_1.h("slot", null); }, Object.defineProperty(e, "is", { get: function () { return "wcs-tab"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { slot: { type: String, attr: "slot", reflectToAttr: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "wcsTabDidLoad", method: "wcsTabDidLoad", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), e; }();
exports.WcsTab = Tab;
