"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wcs_core_js_1 = require("../wcs.core.js");
var ProgressBar = function () { function e() { this.small = !1, this.showLabel = !1, this.value = 0; } return e.prototype.render = function () { var e = { width: this.value + "%" }; return wcs_core_js_1.h("div", { class: this.rootClasses() }, wcs_core_js_1.h("div", { class: "progress-bar", style: e }, this.showLabel && wcs_core_js_1.h("span", { class: "progress-label" }, this.value, wcs_core_js_1.h("sup", null, "%")))); }, e.prototype.rootClasses = function () { var e = "progress"; return this.small && (e += " small"), this.showLabel && (e += " has-label"), 0 === this.value && (e += " value-zero"), e; }, Object.defineProperty(e, "is", { get: function () { return "wcs-progress-bar"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { showLabel: { type: Boolean, attr: "show-label", mutable: !0 }, small: { type: Boolean, attr: "small", mutable: !0 }, value: { type: Number, attr: "value", mutable: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".progress.sc-wcs-progress-bar{display:-ms-flexbox;display:flex;height:.625rem;font-size:.75rem;color:#4d4f53;background-color:#fff;background-image:-webkit-gradient(linear,left top,right top,color-stop(50%,#e1ded9),color-stop(50%,transparent));background-image:linear-gradient(90deg,#e1ded9 50%,transparent 0);background-size:.25rem .625rem;border-radius:.3125rem}.progress.has-label.sc-wcs-progress-bar{margin-top:2.375rem}.progress.small.sc-wcs-progress-bar{height:.3125rem;overflow:hidden;background-color:#fff;background-image:none;background-size:auto;border-radius:.15625rem}.progress.value-zero.sc-wcs-progress-bar > .progress-bar.sc-wcs-progress-bar > .progress-label.sc-wcs-progress-bar{right:unset}.progress-bar.sc-wcs-progress-bar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#4d4f53;text-align:center;background-color:#0088ce;border-radius:.3125rem;-webkit-transition:width .375s ease-out;transition:width .375s ease-out}.progress-label.sc-wcs-progress-bar{position:absolute;right:0;bottom:calc(100% + .5rem);font-size:1.5rem;font-weight:500}.progress-label.sc-wcs-progress-bar   sup.sc-wcs-progress-bar{font-size:.875rem;top:-.5em;position:relative;line-height:0;vertical-align:baseline}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.WcsProgressBar = ProgressBar;
