"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * wcs: Core, es5
 * Built with http://stenciljs.com
 */
function n(n, t) { return "sc-" + n.t + (t && t !== c ? "-" + t : ""); }
function t(n, t) { return n + (t ? "-h" : "-s"); }
function e(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    $.push(arguments[f]); for (; $.length > 0;) {
    var c = $.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            $.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && $.push(f);
        t.class = $.join(" "), $.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], A) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, i: void 0, o: !1 }; }
exports.h = e;
function r(n, t, e) { void 0 === e && (e = {}); var r = Array.isArray(t) ? t : [t], i = n.document, o = e.hydratedCssClass || "hydrated", u = e.exclude; u && (r = r.filter(function (n) { return -1 === u.indexOf(n[0]); })); var c = r.map(function (n) { return n[0]; }); if (c.length > 0) {
    var a = i.createElement("style");
    a.innerHTML = c.join() + "{visibility:hidden}." + o + "{visibility:inherit}", a.setAttribute("data-styles", ""), i.head.insertBefore(a, i.head.firstChild);
} var s = e.namespace || "wcs"; return H || (H = !0, function l(n, t, e) { (n["s-apps"] = n["s-apps"] || []).push(t), e.componentOnReady || (e.componentOnReady = function t() { function e(t) { if (r.nodeName.indexOf("-") > 0) {
    for (var e = n["s-apps"], i = 0, o = 0; o < e.length; o++)
        if (n[e[o]].componentOnReady) {
            if (n[e[o]].componentOnReady(r, t))
                return;
            i++;
        }
    if (i < e.length)
        return void (n["s-cr"] = n["s-cr"] || []).push([r, t]);
} t(null); } var r = this; return n.Promise ? new n.Promise(e) : { then: e }; }); }(n, s, n.HTMLElement.prototype)), applyPolyfills(n).then(function () { function t() { r.forEach(function (t) { var e; !function r(n) { return /\{\s*\[native code\]\s*\}/.test("" + n); }(n.customElements.define) ? (e = function (t) { return n.HTMLElement.call(this, t); }).prototype = Object.create(n.HTMLElement.prototype, { constructor: { value: e, configurable: !0 } }) : e = new Function("w", "return class extends w.HTMLElement{}")(n), F[s].u(function i(n) { var t = E(n), e = t.s, r = d(n[0]); return t.s = function (n) { var t = n.mode, i = n.scoped; return function o(n, t, e) { return Promise.resolve().then(function () { return require("./build/" + n + (t ? ".sc" : "") + ".entry.js"); }).then(function (n) { return n[e]; }); }("string" == typeof e ? e : e[t], i, r); }, t; }(t), e); }); } if (!F[s]) {
    var u = {}, c = e.resourcesUrl || "./";
    f(s, u, n, i, c, o), F[s] = D(s, u, n, i, c, o, r);
} if (window.customStyleShim)
    return F[s].l = window.customStyleShim, F[s].l.initShim().then(t); t(); }); }
exports.defineCustomElement = r;
this && this.v;
var i = this && this.p || function (n, t, e, r) { return new (e || (e = Promise))(function (i, o) { function u(n) { try {
    c(r.next(n));
}
catch (n) {
    o(n);
} } function f(n) { try {
    c(r.throw(n));
}
catch (n) {
    o(n);
} } function c(n) { n.done ? i(n.value) : new e(function (t) { t(n.value); }).then(u, f); } c((r = r.apply(n, t || [])).next()); }); }, o = this && this.m || function (n, t) { function e(e) { return function (u) { return function c(e) { if (r)
    throw new TypeError("Generator is already executing."); for (; f;)
    try {
        if (r = 1, i && (o = 2 & e[0] ? i.return : e[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, e[1])).done)
            return o;
        switch (i = 0, o && (e = [2 & e[0], o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4: return f.label++, { value: e[1], done: !1 };
            case 5:
                f.label++, i = e[1], e = [0];
                continue;
            case 7:
                e = f.g.pop(), f.M.pop();
                continue;
            default:
                if (!(o = (o = f.M).length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    f = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    f.label = e[1];
                    break;
                }
                if (6 === e[0] && f.label < o[1]) {
                    f.label = o[1], o = e;
                    break;
                }
                if (o && f.label < o[2]) {
                    f.label = o[2], f.g.push(e);
                    break;
                }
                o[2] && f.g.pop(), f.M.pop();
                continue;
        }
        e = t.call(n, f);
    }
    catch (n) {
        e = [6, n], i = 0;
    }
    finally {
        r = o = 0;
    } if (5 & e[0])
    throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 }; }([e, u]); }; } var r, i, o, u, f = { label: 0, j: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, M: [], g: [] }; return u = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; }, u = this, f = function () { };
function applyPolyfills(n) { n.k = function () { function t() { var n = setTimeout; return function () { return n(e, 1); }; } function e() { for (var n = 0; n < b; n += 2)
    (0, O[n])(O[n + 1]), O[n] = void 0, O[n + 1] = void 0; b = 0; } function r(n, t) { var e = this, r = new this.constructor(o); void 0 === r[_] && h(r); var i = e.A; if (i) {
    var u = arguments[i - 1];
    M(function () { return d(i, r, u, e.C); });
}
else
    v(e, r, n, t); return r; } function i(n) { if (n && "object" == typeof n && n.constructor === this)
    return n; var t = new this(o); return c(t, n), t; } function o() { } function u(n) { try {
    return n.then;
}
catch (n) {
    return P.error = n, P;
} } function f(n, t, e) { t.constructor === n.constructor && e === r && t.constructor.resolve === i ? function (n, t) { t.A === W ? s(n, t.C) : t.A === x ? l(n, t.C) : v(t, void 0, function (t) { return c(n, t); }, function (t) { return l(n, t); }); }(n, t) : e === P ? (l(n, P.error), P.error = null) : void 0 === e ? s(n, t) : "function" == typeof e ? function (n, t, e) { M(function (n) { var r = !1, i = function (n, t, e, r) { try {
    n.call(t, e, r);
}
catch (n) {
    return n;
} }(e, t, function (e) { r || (r = !0, t !== e ? c(n, e) : s(n, e)); }, function (t) { r || (r = !0, l(n, t)); }, n.O); !r && i && (r = !0, l(n, i)); }, n); }(n, t, e) : s(n, t); } function c(n, t) { if (n === t)
    l(n, new TypeError("cannot resolve promise w/ itself"));
else {
    var e = typeof t;
    null === t || "object" !== e && "function" !== e ? s(n, t) : f(n, t, u(t));
} } function a(n) { n.S && n.S(n.C), p(n); } function s(n, t) { n.A === T && (n.C = t, n.A = W, 0 !== n._.length && M(p, n)); } function l(n, t) { n.A === T && (n.A = x, n.C = t, M(a, n)); } function v(n, t, e, r) { var i = n._, o = i.length; n.S = null, i[o] = t, i[o + W] = e, i[o + x] = r, 0 === o && n.A && M(p, n); } function p(n) { var t = n._, e = n.A; if (0 !== t.length) {
    for (var r, i, o = n.C, u = 0; u < t.length; u += 3)
        r = t[u], i = t[u + e], r ? d(e, r, i, o) : i(o);
    n._.length = 0;
} } function d(n, t, e, r) { var i = "function" == typeof e, o = void 0, u = void 0, f = void 0, a = void 0; if (i) {
    try {
        o = e(r);
    }
    catch (n) {
        P.error = n, o = P;
    }
    if (o === P ? (a = !0, u = o.error, o.error = null) : f = !0, t === o)
        return void l(t, new TypeError("Cannot return same promise"));
}
else
    o = r, f = !0; t.A === T && (i && f ? c(t, o) : a ? l(t, u) : n === W ? s(t, o) : n === x && l(t, o)); } function h(n) { n[_] = N++, n.A = void 0, n.C = void 0, n._ = []; } var y, w = Array.isArray ? Array.isArray : function (n) { return "[object Array]" === Object.prototype.toString.call(n); }, b = 0, m = void 0, g = void 0, M = function (n, t) { O[b] = n, O[b + 1] = t, 2 === (b += 2) && (g ? g(e) : S()); }, j = (y = void 0 !== n ? n : void 0) || {}, k = j.MutationObserver || j.WebKitMutationObserver; j = "undefined" == typeof self; var $, A, E, C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, O = Array(1e3), S = void 0; S = k ? ($ = 0, A = new k(e), E = document.createTextNode(""), A.observe(E, { characterData: !0 }), function () { E.data = $ = ++$ % 2; }) : C ? function () { var n = new MessageChannel; return n.port1.onmessage = e, function () { return n.port2.postMessage(0); }; }() : void 0 === y && "function" == typeof require ? function () { try {
    var n = Function("return this")().require("vertx");
    return void 0 !== (m = n.T || n.W) ? function () { m(e); } : t();
}
catch (n) {
    return t();
} }() : t(); var _ = Math.random().toString(36).substring(2), T = void 0, W = 1, x = 2, P = { error: null }, N = 0, R = function () { function n(n, t) { this.P = n, this.N = new n(o), this.N[_] || h(this.N), w(t) ? (this.R = this.length = t.length, this.C = Array(this.length), 0 === this.length ? s(this.N, this.C) : (this.length = this.length || 0, this.L(t), 0 === this.R && s(this.N, this.C))) : l(this.N, Error("Array Methods must be provided an Array")); } return n.prototype.L = function (n) { for (var t = 0; this.A === T && t < n.length; t++)
    this.D(n[t], t); }, n.prototype.D = function (n, t) { var e = this.P, c = e.resolve; c === i ? (c = u(n)) === r && n.A !== T ? this.F(n.A, t, n.C) : "function" != typeof c ? (this.R--, this.C[t] = n) : e === L ? (f(e = new e(o), n, c), this.H(e, t)) : this.H(new e(function (t) { return t(n); }), t) : this.H(c(n), t); }, n.prototype.F = function (n, t, e) { var r = this.N; r.A === T && (this.R--, n === x ? l(r, e) : this.C[t] = e), 0 === this.R && s(r, this.C); }, n.prototype.H = function (n, t) { var e = this; v(n, void 0, function (n) { return e.F(W, t, n); }, function (n) { return e.F(x, t, n); }); }, n; }(), L = function () { function n(t) { if (this[_] = N++, this.C = this.A = void 0, this._ = [], o !== t) {
    if ("function" != typeof t)
        throw new TypeError("Must pass a resolver fn as 1st arg");
    if (!(this instanceof n))
        throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");
    !function (n, t) { try {
        t(function (t) { c(n, t); }, function (t) { l(n, t); });
    }
    catch (t) {
        l(n, t);
    } }(this, t);
} } return n.prototype.catch = function (n) { return this.then(null, n); }, n.prototype.q = function (n) { var t = this.constructor; return this.then(function (e) { return t.resolve(n()).then(function () { return e; }); }, function (e) { return t.resolve(n()).then(function () { throw e; }); }); }, n; }(); return L.prototype.then = r, L.all = function (n) { return new R(this, n).N; }, L.race = function (n) { var t = this; return w(n) ? new t(function (e, r) { for (var i = n.length, o = 0; o < i; o++)
    t.resolve(n[o]).then(e, r); }) : new t(function (n, t) { return t(new TypeError("Must pass array to race")); }); }, L.resolve = i, L.reject = function (n) { var t = new this(o); return l(t, n), t; }, L.U = function (n) { g = n; }, L.B = function (n) { M = n; }, L.I = M, L.G = function () { var n = void 0; if ("undefined" != typeof global)
    n = global;
else if ("undefined" != typeof self)
    n = self;
else
    try {
        n = Function("return this")();
    }
    catch (n) {
        throw Error("polyfill failed");
    } var t = n.Promise; if (t) {
    var e = null;
    try {
        e = Object.prototype.toString.call(t.resolve());
    }
    catch (n) { }
    if ("[object Promise]" === e && !t.cast)
        return;
} n.Promise = L; }, L.Promise = L, L.G(), L; }(); var t = []; return n.customElements && (!n.Element || n.Element.prototype.closest && n.Element.prototype.matches && n.Element.prototype.remove) || t.push(Promise.resolve().then(function () { return require("./polyfills/dom.js"); })), "function" == typeof Object.assign && Object.entries || t.push(Promise.resolve().then(function () { return require("./polyfills/object.js"); })), Array.prototype.find && Array.prototype.includes || t.push(Promise.resolve().then(function () { return require("./polyfills/array.js"); })), String.prototype.startsWith && String.prototype.endsWith || t.push(Promise.resolve().then(function () { return require("./polyfills/string.js"); })), n.fetch || t.push(Promise.resolve().then(function () { return require("./polyfills/fetch.js"); })), "undefined" != typeof WeakMap && n.CSS && n.CSS.supports && n.CSS.supports("color", "var(--c)") || t.push(Promise.resolve().then(function () { return require("./polyfills/css-shim.js"); })), function e() { try {
    var n = new URL("b", "http://a");
    return n.pathname = "c%20d", "http://a/c%20d" === n.href && n.searchParams;
}
catch (n) {
    return !1;
} } || t.push(Promise.resolve().then(function () { return require("./polyfills/url.js"); })), Promise.all(t).then(function (t) { t.forEach(function (t) { try {
    t.applyPolyfill(n, n.document);
}
catch (n) {
    console.error(n);
} }); }); }
var c = "$", a = {}, s = { enter: 13, escape: 27, space: 32, tab: 9, left: 37, up: 38, right: 39, down: 40 }, l = function (t, e, r, i) { var o = r.t + c, u = r[o]; if ((2 === r.Y || 1 === r.Y && !t.J.Z) && (i["s-sc"] = u ? n(r, i.mode) : n(r)), u) {
    var f = e.K.head;
    if (e.Z)
        if (1 === r.Y)
            f = i.shadowRoot;
        else {
            var a = i.getRootNode();
            a.host && (f = a);
        }
    var s = t.V.get(f);
    if (s || t.V.set(f, s = {}), !s[o]) {
        var l = void 0;
        if (t.l ? l = t.l.createHostStyle(i, o, u) : ((l = e.X("style")).innerHTML = u, s[o] = !0), l) {
            var v = f.querySelectorAll("[data-styles]");
            e.nn(f, l, v.length && v[v.length - 1].nextSibling || f.firstChild);
        }
    }
} }, v = function (n) { return null != n; }, p = function (n) { return n.toLowerCase(); }, d = function (n) { return p(n).split("-").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(""); }, h = function (n, t, e, r, i) { void 0 === r && (r = "boolean" == typeof e), i = t !== (t = t.replace(/^xlink\:?/, "")), null == e || r && (!e || "false" === e) ? i ? n.removeAttributeNS(y, p(t)) : n.removeAttribute(t) : "function" != typeof e && (e = r ? "" : e.toString(), i ? n.setAttributeNS(y, p(t), e) : n.setAttribute(t, e)); }, y = "http://www.w3.org/1999/xlink", w = function (n, t, e, r, i, o, u) { if ("class" !== e || o)
    if ("style" === e) {
        for (var f in r)
            i && null != i[f] || (/-/.test(f) ? t.style.removeProperty(f) : t.style[f] = "");
        for (var f in i)
            r && i[f] === r[f] || (/-/.test(f) ? t.style.setProperty(f, i[f]) : t.style[f] = i[f]);
    }
    else if ("o" !== e[0] || "n" !== e[1] || !/[A-Z]/.test(e[2]) || e in t)
        if ("list" !== e && "type" !== e && !o && (e in t || -1 !== ["object", "function"].indexOf(typeof i) && null !== i)) {
            var c = n.tn(t);
            c && c.en && c.en[e] ? (m(t, e, i), u && c.en[e].rn && h(t, c.en[e].in, i, 4 === c.en[e].on)) : "ref" !== e && (m(t, e, null == i ? "" : i), null != i && !1 !== i || n.J.un(t, e));
        }
        else
            null != i && "key" !== e ? h(t, e, i) : (o || n.J.fn(t, e) && (null == i || !1 === i)) && n.J.un(t, e);
    else
        e = p(e) in t ? p(e.substring(2)) : p(e[2]) + e.substring(3), i ? i !== r && n.J.cn(t, e, i, 0) : n.J.an(t, e, 0);
else if (r !== i) {
    var a = b(r), s = b(i), l = a.filter(function (n) { return !s.includes(n); }), v = b(t.className).filter(function (n) { return !l.includes(n); }), d = s.filter(function (n) { return !a.includes(n) && !v.includes(n); });
    v.push.apply(v, d), t.className = v.join(" ");
} }, b = function (n) { return null == n || "" === n ? [] : n.trim().split(/\s+/); }, m = function (n, t, e) { try {
    n[t] = e;
}
catch (n) { } }, g = function (n, t, e, r, i) { var o = 11 === e.i.nodeType && e.i.host ? e.i.host : e.i, u = t && t.vattrs || a, f = e.vattrs || a; for (i in u)
    f && null != f[i] || null == u[i] || w(n, o, i, u[i], void 0, r, e.o); for (i in f)
    i in u && f[i] === ("value" === i || "checked" === i ? o[i] : u[i]) || w(n, o, i, u[i], f[i], r, e.o); }, M = !1, j = function (n, t) { n && (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.i), n.vchildren && n.vchildren.forEach(function (n) { j(n, t); })); }, k = function (n, t) { var e = 0, r = !1, i = function () { return t.performance.now(); }, o = !1 !== n.asyncQueue, u = Promise.resolve(), f = [], c = [], a = [], s = [], l = function (t) { return function (e) { t.push(e), r || (r = !0, n.raf(d)); }; }, v = function (n) { for (var t = 0; t < n.length; t++)
    try {
        n[t](i());
    }
    catch (n) {
        console.error(n);
    } n.length = 0; }, p = function (n, t) { for (var e, r = 0; r < n.length && (e = i()) < t;)
    try {
        n[r++](e);
    }
    catch (n) {
        console.error(n);
    } r === n.length ? n.length = 0 : 0 !== r && n.splice(0, r); }, d = function () { e++, v(c); var t = o ? i() + 7 * Math.ceil(e * (1 / 22)) : Infinity; p(a, t), p(s, t), a.length > 0 && (s.push.apply(s, a), a.length = 0), (r = c.length + a.length + s.length > 0) ? n.raf(d) : e = 0; }; return n.raf || (n.raf = t.requestAnimationFrame.bind(t)), { tick: function (n) { f.push(n), 1 === f.length && u.then(function () { return v(f); }); }, read: l(c), write: l(a) }; }, $ = [], A = { forEach: function (n, t) { return n.forEach(t); }, map: function (n, t) { return n.map(t); } }, E = function (n, t, e) { var r = n[0], i = n[1], o = n[3], u = n[4], f = n[5], c = { color: { in: "color" } }; if (o)
    for (t = 0; t < o.length; t++)
        c[(e = o[t])[0]] = { sn: e[1], rn: !!e[2], in: "string" == typeof e[3] ? e[3] : e[3] ? e[0] : 0, on: e[4] }; return { t: r, s: i, en: Object.assign({}, c), Y: u, ln: f ? f.map(C) : void 0 }; }, C = function (n) { return { vn: n[0], pn: n[1], dn: !!n[2], hn: !!n[3], yn: !!n[4] }; }, O = function (n, t) { return v(t) && "object" != typeof t && "function" != typeof t ? n === Boolean || 4 === n ? "false" !== t && ("" === t || !!t) : n === Number || 8 === n ? parseFloat(t) : n === String || 2 === n ? t.toString() : t : t; }, S = function (n, t, e) { n.wn.add(t), n.bn.has(t) || (n.bn.set(t, !0), n.mn ? n.queue.write(function () { return _(n, t, e); }) : n.queue.tick(function () { return _(n, t, e); })); }, _ = function (n, r, f, c, a, s) { return i(u, void 0, void 0, function () { var i, u; return o(this, function (o) { switch (o.label) {
    case 0:
        if (n.bn.delete(r), n.gn.has(r))
            return [3, 12];
        if (a = n.Mn.get(r))
            return [3, 6];
        if ((s = n.jn.get(r)) && !s["s-rn"])
            return (s["s-rc"] = s["s-rc"] || []).push(function () { _(n, r, f); }), [2];
        if (!(a = N(n, r, n.kn.get(r), f)))
            return [3, 5];
        o.label = 1;
    case 1: return o.M.push([1, 4, , 5]), a.componentWillLoad ? [4, a.componentWillLoad()] : [3, 3];
    case 2: o.j(), o.label = 3;
    case 3: return [3, 5];
    case 4: return i = o.j(), n.$n(i, 3, r), [3, 5];
    case 5: return [3, 11];
    case 6:
        if (!a)
            return [3, 11];
        o.label = 7;
    case 7: return o.M.push([7, 10, , 11]), a.componentWillUpdate ? [4, a.componentWillUpdate()] : [3, 9];
    case 8: o.j(), o.label = 9;
    case 9: return [3, 11];
    case 10: return u = o.j(), n.$n(u, 5, r), [3, 11];
    case 11: (function (n, r, i, o) { try {
        var u, f = r.An.host, c = r.An.encapsulation, a = "shadow" === c && n.J.Z, s = i;
        if (u = function (n, t, e) { return n && Object.keys(n).forEach(function (r) { n[r].reflectToAttr && ((e = e || {})[r] = t[r]); }), e; }(r.An.properties, o), a && (s = i.shadowRoot), !i["s-rn"]) {
            n.En(n, n.J, r, i);
            var l = i["s-sc"];
            l && (n.J.Cn(i, t(l, !0)), "scoped" === c && n.J.Cn(i, t(l)));
        }
        if (o.render || o.hostData || f || u) {
            n.On = !0;
            var v = o.render && o.render(), p = void 0;
            p = o.hostData && o.hostData(), u && (p = p ? Object.assign(p, u) : u), n.On = !1;
            var d = e(null, p, v), h = n.Sn.get(i) || {};
            h.i = s, d.o = !0, n.Sn.set(i, n.render(i, h, d, a, c));
        }
        n.l && n.l.updateHost(i), i["s-rn"] = !0, i["s-rc"] && (i["s-rc"].forEach(function (n) { return n(); }), i["s-rc"] = null);
    }
    catch (t) {
        n.On = !1, n.$n(t, 8, i, !0);
    } })(n, n.tn(r), r, a), r["s-init"](), o.label = 12;
    case 12: return [2];
} }); }); }, T = function (n, t, e, r, i, o, u) { (u = n._n.get(t)) || n._n.set(t, u = {}); var f = u[e]; if (r !== f && (u[e] = r, o = n.Mn.get(t))) {
    var c = u[P + e];
    if (c)
        for (var a = 0; a < c.length; a++)
            try {
                o[c[a]].call(o, r, f, e);
            }
            catch (n) {
                console.error(n);
            }
    !n.On && t["s-rn"] && S(n, t, i);
} }, W = function (n, t, e) { Object.defineProperty(n, t, { configurable: !0, value: e }); }, x = function (n, t, e, r) { Object.defineProperty(n, t, { configurable: !0, get: e, set: r }); }, P = "wc-", N = function (n, t, e, r, i, o, u, f) { try {
    i = new (o = n.tn(t).An), function (n, t, e, r, i, o) { n.Tn.set(r, e), n._n.has(e) || n._n.set(e, {}), Object.entries(Object.assign({ color: { type: String } }, t.properties, { mode: { type: String } })).forEach(function (t) { var u = t[0], f = t[1]; (function (n, t, e, r, i, o, u, f, c) { if (t.type || t.state) {
        var a = n._n.get(e);
        t.state || (!t.attr || void 0 !== a[i] && "" !== a[i] || (f = o && o.Wn) && v(c = f[t.attr]) && (a[i] = O(t.type, c)), e.hasOwnProperty(i) && (void 0 === a[i] && (a[i] = O(t.type, e[i])), "mode" !== i && delete e[i])), r.hasOwnProperty(i) && void 0 === a[i] && (a[i] = r[i]), t.watchCallbacks && (a[P + i] = t.watchCallbacks.slice()), x(r, i, function s(t) { return (t = n._n.get(n.Tn.get(this))) && t[i]; }, function l(e, r) { (r = n.Tn.get(this)) && (t.state || t.mutable) && T(n, r, i, e, u); });
    }
    else if (t.elementRef)
        W(r, i, e);
    else if (t.context) {
        var p = n.xn(t.context);
        void 0 !== p && W(r, i, p.getContext && p.getContext(e) || p);
    } })(n, f, e, r, u, i, o); }); }(n, o, t, i, e, r), function c(n, t, e) { if (t) {
        var r = n.Tn.get(e);
        t.forEach(function (t) { e[t.method] = { emit: function (e) { return n.Pn(r, t.name, { bubbles: t.bubbles, composed: t.composed, cancelable: t.cancelable, detail: e }); } }; });
    } }(n, o.events, i);
    try {
        if (u = n.Nn.get(t)) {
            for (f = 0; f < u.length; f += 2)
                i[u[f]](u[f + 1]);
            n.Nn.delete(t);
        }
    }
    catch (e) {
        n.$n(e, 2, t);
    }
}
catch (e) {
    i = {}, n.$n(e, 7, t, !0);
} return n.Mn.set(t, i), i; }, R = function (n, t) { for (var e = 0; e < t.childNodes.length; e++) {
    var r = t.childNodes[e];
    if (1 === r.nodeType) {
        if (n.tn(r) && !n.Rn.has(r))
            return !1;
        if (!R(n, r))
            return !1;
    }
} return !0; }, L = function (n, t, e, r, i, o) { if (n.wn.delete(t), (i = n.jn.get(t)) && ((r = i["s-ld"]) && ((e = r.indexOf(t)) > -1 && r.splice(e, 1), r.length || i["s-init"] && i["s-init"]()), n.jn.delete(t)), n.Ln.length && !n.wn.size)
    for (; o = n.Ln.shift();)
        o(); }, D = function (n, t, r, i, o, u) { var f = r.performance, a = { html: {} }, d = r[n] = r[n] || {}, h = function (n, t, e) { var r = new WeakMap, i = { K: e, Z: !!e.documentElement.attachShadow, Dn: !1, Fn: function (n) { return n.nodeType; }, X: function (n) { return e.createElement(n); }, Hn: function (n, t) { return e.createElementNS(n, t); }, qn: function (n) { return e.createTextNode(n); }, Un: function (n) { return e.createComment(n); }, nn: function (n, t, e) { return n.insertBefore(t, e); }, Bn: function (n) { return n.remove(); }, In: function (n, t) { return n.appendChild(t); }, Cn: function (n, t) { if (n.classList)
        n.classList.add(t);
    else if ("svg" === n.nodeName.toLowerCase()) {
        var e = n.getAttribute("class") || "";
        e.split(" ").includes(t) || (e += " " + t), n.setAttribute("class", e.trim());
    } }, Gn: function (n) { return n.childNodes; }, Qn: function (n) { return n.parentNode; }, Yn: function (n) { return n.nextSibling; }, Zn: function (n) { return n.previousSibling; }, zn: function (n) { return p(n.nodeName); }, Jn: function (n) { return n.textContent; }, Kn: function (n, t) { return n.textContent = t; }, Vn: function (n, t) { return n.getAttribute(t); }, Xn: function (n, t, e) { return n.setAttribute(t, e); }, un: function (n, t) { return n.removeAttribute(t); }, fn: function (n, t) { return n.hasAttribute(t); }, nt: function (t) { return t.getAttribute("mode") || (n.Context || {}).mode; }, tt: function (n, r) { return "child" === r ? n.firstElementChild : "parent" === r ? i.et(n) : "body" === r ? e.body : "document" === r ? e : "window" === r ? t : n; }, cn: function (t, e, o, u, f, c, a, l, v, p) { var d = t, h = o, y = r.get(t); p = e + u, y && y[p] && y[p](), "string" == typeof a ? d = i.tt(t, a) : "object" == typeof a ? d = a : (v = e.split(":")).length > 1 && (d = i.tt(t, v[0]), e = v[1]), d && ((v = e.split(".")).length > 1 && (e = v[0], h = function (n) { n.keyCode === s[v[1]] && o(n); }), l = i.Dn ? { capture: !!f, passive: !!c } : !!f, n.ael(d, e, h, l), y || r.set(t, y = {}), y[p] = function () { d && n.rel(d, e, h, l), y[p] = null; }); }, an: function (n, t, e, i) { (i = r.get(n)) && (t ? i[t + e] && i[t + e]() : Object.keys(i).forEach(function (n) { i[n] && i[n](); })); }, rt: function (n, e, r, i) { return i = new t.CustomEvent(e, r), n && n.dispatchEvent(i), i; }, et: function (n, t) { return (t = i.Qn(n)) && 11 === i.Fn(t) ? t.host : t; }, it: function (n, t, e, r) { return n.setAttributeNS(t, e, r); }, ot: function (n, t) { return n.attachShadow(t); } }; "function" != typeof t.CustomEvent && (t.CustomEvent = function (n, t, r) { return t = t || {}, (r = e.createEvent("CustomEvent")).initCustomEvent(n, t.bubbles, t.cancelable, t.detail), r; }, t.CustomEvent.prototype = t.Event.prototype), n.ael || (n.ael = function (n, t, e, r) { return n.addEventListener(t, e, r); }, n.rel = function (n, t, e, r) { return n.removeEventListener(t, e, r); }); try {
    t.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function () { return i.Dn = !0; } }));
}
catch (n) { } return i; }(d, r, i), y = h.K.documentElement, w = r["s-defined"] = r["s-defined"] || {}, b = { J: h, u: function (n, t) { r.customElements.get(n.t) || (function (n, t, e, r, i) { if (e.connectedCallback = function () { (function (n, t, e) { n.ut.has(e) || (n.ut.set(e, !0), function r(n, t) { var e = n.tn(t); e.ln && e.ln.forEach(function (e) { e.dn || n.J.cn(t, e.vn, function r(n, t, e, i) { return function (r) { (i = n.Mn.get(t)) ? i[e](r) : ((i = n.Nn.get(t) || []).push(e, r), n.Nn.set(t, i)); }; }(n, t, e.pn), 1, e.yn, e.hn); }); }(n, e)), n.gn.delete(e), n.Rn.has(e) || (n.ft = !0, n.wn.add(e), n.Rn.set(e, !0), function (n, t, e) { for (e = t; e = n.J.et(e);)
        if (n.ct(e)) {
            n.at.has(t) || (n.jn.set(t, e), (e["s-ld"] = e["s-ld"] || []).push(t));
            break;
        } }(n, e), n.queue.tick(function () { n.kn.set(e, function (n, t, e, r, i) { if (e.mode || (e.mode = n.nt(e)), e["s-cr"] || n.Vn(e, "ssrv") || n.Z && 1 === t.Y || (e["s-cr"] = n.qn(""), e["s-cr"]["s-cn"] = !0, n.nn(e, e["s-cr"], n.Gn(e)[0])), !n.Z && 1 === t.Y)
        try {
            !window.HTMLElement || "shadowRoot" in window.HTMLElement.prototype || (e.shadowRoot = e);
        }
        catch (n) { } return 1 === t.Y && n.Z && !e.shadowRoot && n.ot(e, { mode: "open" }), r = { Wn: {} }, t.en && Object.keys(t.en).forEach(function (o) { (i = t.en[o].in) && (r.Wn[i] = n.Vn(e, i)); }), r; }(n.J, t, e)), n.st(t, e); })); })(n, t, this); }, e.disconnectedCallback = function () { (function (n, t) { if (!n.lt && function (n, t) { for (; t;) {
        if (!n.Qn(t))
            return 9 !== n.Fn(t);
        t = n.Qn(t);
    } }(n.J, t)) {
        n.gn.set(t, !0), L(n, t), j(n.Sn.get(t), !0);
        var e = n.Mn.get(t);
        e && e.componentDidUnload && e.componentDidUnload(), n.J.an(t), n.ut.delete(t), n.l && n.l.removeHost(t), [n.jn, n.vt, n.kn].forEach(function (n) { return n.delete(t); });
    } })(n, this); }, e["s-init"] = function () { (function (n, t, e, r, i, o, u) { if (R(n, t) && (i = n.Mn.get(t)) && !n.gn.has(t) && (!t["s-ld"] || !t["s-ld"].length)) {
        n.at.set(t, !0), (u = n.pt.has(t)) || (n.pt.set(t, !0), t["s-ld"] = void 0, n.J.Cn(t, e));
        try {
            j(n.Sn.get(t)), (o = n.vt.get(t)) && (o.forEach(function (n) { return n(t); }), n.vt.delete(t)), !u && i.componentDidLoad && i.componentDidLoad();
        }
        catch (e) {
            n.$n(e, 4, t);
        }
        L(n, t);
    } })(n, this, r); }, e.forceUpdate = function () { S(n, this, i); }, t.en) {
        var o = Object.entries(t.en), u = {};
        o.forEach(function (n) { var t = n[0], e = n[1].in; e && (u[e] = t); }), u = Object.assign({}, u), e.attributeChangedCallback = function (n, t, e) { (function r(n, t, e, i) { var o = n[p(e)]; o && (t[o] = (null !== i || "boolean" != typeof t[o]) && i); })(u, this, n, e); }, function (n, t, e, r) { o.forEach(function (t) { var i = t[0], o = t[1]; 3 & o.sn && x(e, i, function t() { return (n._n.get(this) || {})[i]; }, function t(e) { T(n, this, i, O(o.on, e), r); }); }); }(n, 0, e, i);
    } }(b, a[n.t] = n, t.prototype, u, f), t.observedAttributes = Object.values(n.en).map(function (n) { return n.in; }).filter(function (n) { return !!n; }), r.customElements.define(n.t, t)); }, tn: function (n) { return a[h.zn(n)]; }, xn: function (n) { return t[n]; }, isClient: !0, ct: function (n) { return !(!w[h.zn(n)] && !b.tn(n)); }, $n: function (n, t, e) { return console.error(n, t, e && e.tagName); }, queue: t.queue = k(d, r), st: function (n, t) { var e = !h.Z, r = { mode: t.mode, scoped: e }; n.s(r).then(function (e) { try {
        n.An = e, function r(n, t, e, i, o) { if (i) {
            var u = t.t + (o || c);
            t[u] || (t[u] = i);
        } }(0, n, n.Y, e.style, e.styleMode);
    }
    catch (t) {
        console.error(t), n.An = function i() { };
    } S(b, t, f); }); }, On: !1, mn: !1, lt: !1, En: l, jn: new WeakMap, V: new WeakMap, Rn: new WeakMap, ut: new WeakMap, pt: new WeakMap, at: new WeakMap, Tn: new WeakMap, kn: new WeakMap, Mn: new WeakMap, gn: new WeakMap, bn: new WeakMap, vt: new WeakMap, Nn: new WeakMap, Sn: new WeakMap, _n: new WeakMap, wn: new Set, Ln: [] }; return t.isServer = t.isPrerender = !(t.isClient = !0), t.window = r, t.location = r.location, t.document = i, t.resourcesUrl = t.publicPath = o, t.enableListener = function (n, t, e, r, i) { return function o(n, t, e, r, i, u) { if (t) {
    var f = n.Tn.get(t), c = n.tn(f);
    if (c && c.ln)
        if (r) {
            var a = c.ln.find(function (n) { return n.vn === e; });
            a && n.J.cn(f, e, function (n) { return t[a.pn](n); }, 1, a.yn, void 0 === u ? a.hn : !!u, i);
        }
        else
            n.J.an(f, e, 1);
} }(b, n, t, e, r, i); }, b.Pn = t.emit = function (n, e, r) { return h.rt(n, t.eventNameFn ? t.eventNameFn(e) : e, r); }, d.h = e, d.Context = t, d.onReady = function () { return new Promise(function (n) { return b.queue.write(function () { return b.wn.size ? b.Ln.push(n) : n(); }); }); }, b.render = function (n, t) { var e, r, i, o, u, f, c, a = function (i, l, p, d, h, y, w, b, m) { if (b = l.vchildren[p], e || (o = !0, "slot" === b.vtag && (r && t.Cn(d, r + "-s"), b.vchildren ? b.dt = !0 : b.ht = !0)), v(b.vtext))
    b.i = t.qn(b.vtext);
else if (b.ht)
    b.i = t.qn("");
else {
    if (y = b.i = M || "svg" === b.vtag ? t.Hn("http://www.w3.org/2000/svg", b.vtag) : t.X(b.dt ? "slot-fb" : b.vtag), n.ct(y) && n.at.delete(c), M = "svg" === b.vtag || "foreignObject" !== b.vtag && M, g(n, null, b, M), v(r) && y["s-si"] !== r && t.Cn(y, y["s-si"] = r), b.vchildren)
        for (h = 0; h < b.vchildren.length; ++h)
            (w = a(i, b, h, y)) && t.In(y, w);
    "svg" === b.vtag && (M = !1);
} return b.i["s-hn"] = f, (b.dt || b.ht) && (b.i["s-sr"] = !0, b.i["s-cr"] = u, b.i["s-sn"] = b.vname || "", (m = i && i.vchildren && i.vchildren[p]) && m.vtag === b.vtag && i.i && s(i.i)), b.i; }, s = function (e, r, i, u) { n.lt = !0; var c = t.Gn(e); for (i = c.length - 1; i >= 0; i--)
    (u = c[i])["s-hn"] !== f && u["s-ol"] && (t.Bn(u), t.nn(y(u), u, h(u)), t.Bn(u["s-ol"]), u["s-ol"] = null, o = !0), r && s(u, r); n.lt = !1; }, l = function (n, e, r, i, o, u, c, s) { var l = n["s-cr"]; for ((c = l && t.Qn(l) || n).shadowRoot && t.zn(c) === f && (c = c.shadowRoot); o <= u; ++o)
    i[o] && (s = v(i[o].vtext) ? t.qn(i[o].vtext) : a(null, r, o, n)) && (i[o].i = s, t.nn(c, s, h(e))); }, p = function (n, e, r, o) { for (; e <= r; ++e)
    v(n[e]) && (o = n[e].i, i = !0, o["s-ol"] ? t.Bn(o["s-ol"]) : s(o, !0), t.Bn(o)); }, d = function (n, t) { return n.vtag === t.vtag && n.vkey === t.vkey && ("slot" !== n.vtag || n.vname === t.vname); }, h = function (n) { return n && n["s-ol"] ? n["s-ol"] : n; }, y = function (n) { return t.Qn(n["s-ol"] ? n["s-ol"] : n); }, w = function (e, r, i) { var o = r.i = e.i, u = e.vchildren, f = r.vchildren; M = r.i && v(t.et(r.i)) && void 0 !== r.i.ownerSVGElement, M = "svg" === r.vtag || "foreignObject" !== r.vtag && M, v(r.vtext) ? (i = o["s-cr"]) ? t.Kn(t.Qn(i), r.vtext) : e.vtext !== r.vtext && t.Kn(o, r.vtext) : ("slot" !== r.vtag && g(n, e, r, M), v(u) && v(f) ? function (n, e, r, i, o, u, f, c) { for (var b = 0, m = 0, g = e.length - 1, M = e[0], j = e[g], k = i.length - 1, $ = i[0], A = i[k]; b <= g && m <= k;)
    if (null == M)
        M = e[++b];
    else if (null == j)
        j = e[--g];
    else if (null == $)
        $ = i[++m];
    else if (null == A)
        A = i[--k];
    else if (d(M, $))
        w(M, $), M = e[++b], $ = i[++m];
    else if (d(j, A))
        w(j, A), j = e[--g], A = i[--k];
    else if (d(M, A))
        "slot" !== M.vtag && "slot" !== A.vtag || s(t.Qn(M.i)), w(M, A), t.nn(n, M.i, t.Yn(j.i)), M = e[++b], A = i[--k];
    else if (d(j, $))
        "slot" !== M.vtag && "slot" !== A.vtag || s(t.Qn(j.i)), w(j, $), t.nn(n, j.i, M.i), j = e[--g], $ = i[++m];
    else {
        for (o = null, u = b; u <= g; ++u)
            if (e[u] && v(e[u].vkey) && e[u].vkey === $.vkey) {
                o = u;
                break;
            }
        v(o) ? ((c = e[o]).vtag !== $.vtag ? f = a(e && e[m], r, o, n) : (w(c, $), e[o] = void 0, f = c.i), $ = i[++m]) : (f = a(e && e[m], r, m, n), $ = i[++m]), f && t.nn(y(M.i), f, h(M.i));
    } b > g ? l(n, null == i[k + 1] ? null : i[k + 1].i, r, i, m, k) : m > k && p(e, b, g); }(o, u, r, f) : v(f) ? (v(e.vtext) && t.Kn(o, ""), l(o, null, r, f, 0, f.length - 1)) : v(u) && p(u, 0, u.length - 1)), M && "svg" === r.vtag && (M = !1); }, b = function (n, e, r, i, o, u, f, c) { for (i = 0, o = (r = t.Gn(n)).length; i < o; i++)
    if (e = r[i], 1 === t.Fn(e)) {
        if (e["s-sr"])
            for (f = e["s-sn"], e.hidden = !1, u = 0; u < o; u++)
                if (r[u]["s-hn"] !== e["s-hn"])
                    if (c = t.Fn(r[u]), "" !== f) {
                        if (1 === c && f === t.Vn(r[u], "slot")) {
                            e.hidden = !0;
                            break;
                        }
                    }
                    else if (1 === c || 3 === c && "" !== t.Jn(r[u]).trim()) {
                        e.hidden = !0;
                        break;
                    }
        b(e);
    } }, m = [], j = function (n, e, r, o, u, f, c, a, s, l) { for (u = 0, f = (e = t.Gn(n)).length; u < f; u++) {
    if ((r = e[u])["s-sr"] && (o = r["s-cr"]))
        for (a = t.Gn(t.Qn(o)), s = r["s-sn"], c = a.length - 1; c >= 0; c--)
            (o = a[c])["s-cn"] || o["s-nr"] || o["s-hn"] === r["s-hn"] || ((3 === (l = t.Fn(o)) || 8 === l) && "" === s || 1 === l && null === t.Vn(o, "slot") && "" === s || 1 === l && t.Vn(o, "slot") === s) && (m.some(function (n) { return n.yt === o; }) || (i = !0, o["s-sn"] = s, m.push({ wt: r, yt: o })));
    1 === t.Fn(r) && j(r);
} }; return function (a, s, l, v, p, d, h, y, g, M, k, $) { if (c = a, f = t.zn(c), u = c["s-cr"], e = v, r = c["s-sc"], o = i = !1, w(s, l), o) {
    for (j(l.i), h = 0; h < m.length; h++)
        (y = m[h]).yt["s-ol"] || ((g = t.qn(""))["s-nr"] = y.yt, t.nn(t.Qn(y.yt), y.yt["s-ol"] = g, y.yt));
    for (n.lt = !0, h = 0; h < m.length; h++) {
        for (y = m[h], k = t.Qn(y.wt), $ = t.Yn(y.wt), g = y.yt["s-ol"]; g = t.Zn(g);)
            if ((M = g["s-nr"]) && M && M["s-sn"] === y.yt["s-sn"] && k === t.Qn(M) && (M = t.Yn(M)) && M && !M["s-nr"]) {
                $ = M;
                break;
            }
        (!$ && k !== t.Qn(y.yt) || t.Yn(y.yt) !== $) && y.yt !== $ && (t.Bn(y.yt), t.nn(k, y.yt, $));
    }
    n.lt = !1;
} return i && b(l.i), m.length = 0, l; }; }(b, h), y["s-ld"] = [], y["s-rn"] = !0, y["s-init"] = function () { b.at.set(y, d.loaded = b.mn = !0), h.rt(r, "appload", { detail: { namespace: n } }); }, function (n, t, e, r, i, o) { if (t.componentOnReady = function (t, e) { if (!t.nodeName.includes("-"))
    return e(null), !1; var r = n.tn(t); if (r)
    if (n.at.has(t))
        e(t);
    else {
        var i = n.vt.get(t) || [];
        i.push(e), n.vt.set(t, i);
    } return !!r; }, i) {
    for (o = i.length - 1; o >= 0; o--)
        t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
    for (o = 0; o < r.length; o++)
        if (!e[r[o]].componentOnReady)
            return;
    for (o = 0; o < i.length; o++)
        i[o][1](null);
    i.length = 0;
} }(b, d, r, r["s-apps"], r["s-cr"]), d.initialized = !0, b; }, F = {}, H = !1;
