/*! License information is available at https://static.cdn.printful.com/dist-pf/97452.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [97452], {
        97452: (t, e, r) => {
            r.d(e, {
                j: () => Gt
            });
            var n = r(48488),
                o = r.n(n);

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, f(n.key), n)
                }
            }

            function u(t, e) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.add(t)
            }

            function a(t, e, r) {
                return (e = f(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function f(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function c(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            const l = "years",
                s = "months",
                y = "days",
                h = "hours",
                p = "minutes",
                b = "seconds";
            var m = new WeakSet;
            let v = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), u(this, m), a(this, "symbolRange", "â€“"), a(this, "time", "HH:mm"), a(this, "day", "D"), a(this, "month", "MMMM"), a(this, "shortMonth", "MMM"), a(this, "year", "YYYY"), a(this, "monthDay", `${this.month} ${this.day}`), a(this, "monthYear", `${this.month}, ${this.year}`), a(this, "shortMonthDay", `${this.shortMonth} ${this.day}`), a(this, "shortMonthDayTime", `${this.shortMonthDay}, ${this.time}`), a(this, "shortMonthDayYear", `${this.shortMonthDay}, ${this.year}`), a(this, "monthDayYear", `${this.monthDay}, ${this.year}`), a(this, "shortMonthYear", `${this.shortMonth}, ${this.year}`), a(this, "shortMonthDayYearTime", `${this.shortMonthDay}, ${this.year}, ${this.time}`), a(this, "monthNameArray", o().months()), a(this, "legacyShortMonthYear", "M, yyyy"), a(this, "timeFromNowWithSuffix", null)
                }
                var e, r, n;
                return e = t, r = [{
                    key: "format",
                    value: function(t, e) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        const n = o()(t),
                            i = o()(e),
                            u = r ? this.shortMonthDay : this.month;
                        return n.isSame(i, "month") ? this.day : u
                    }
                }, {
                    key: "formatWithTime",
                    value: function(t) {
                        return o()(t).format(this.time)
                    }
                }, {
                    key: "formatWithMonth",
                    value: function(t) {
                        return o()(t).format(this.month)
                    }
                }, {
                    key: "formatWithYear",
                    value: function(t) {
                        return o()(t).format(this.year)
                    }
                }, {
                    key: "formatWithMonthYear",
                    value: function(t) {
                        return o()(t).format(this.monthYear)
                    }
                }, {
                    key: "formatWithShortMonthDay",
                    value: function(t) {
                        return o()(t).format(this.shortMonthDay)
                    }
                }, {
                    key: "formatWithShortMonthDayTime",
                    value: function(t) {
                        return o()(t).format(this.shortMonthDayTime)
                    }
                }, {
                    key: "formatWithShortMonthDayYear",
                    value: function(t) {
                        return o()(t).format(this.shortMonthDayYear)
                    }
                }, {
                    key: "formatWithMonthDayYear",
                    value: function(t) {
                        return o()(t).format(this.monthDayYear)
                    }
                }, {
                    key: "formatWithShortMonthDayYearTime",
                    value: function(t) {
                        return o()(t).format(this.shortMonthDayYearTime)
                    }
                }, {
                    key: "getMonthNames",
                    value: function() {
                        return this.monthNameArray
                    }
                }, {
                    key: "getTimeFromNowWithSuffix",
                    value: function(t) {
                        const {
                            _data: e
                        } = o().duration(t.diff(o()()));
                        return this.timeFromNowWithSuffix ? e.years < 0 ? c(this, m, d).call(this, l, e.years) : e.months < 0 ? c(this, m, d).call(this, s, e.months) : e.days < 0 ? c(this, m, d).call(this, y, e.days) : e.hours < 0 ? c(this, m, d).call(this, h, e.hours) : e.minutes < 0 ? c(this, m, d).call(this, p, e.minutes) : e.seconds < 0 ? c(this, m, d).call(this, b, e.seconds) : o()(t).fromNow() : o()(t).fromNow()
                    }
                }], r && i(e.prototype, r), n && i(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function d(t, e) {
                return void 0 !== this.timeFromNowWithSuffix[t] ? this.timeFromNowWithSuffix[t](Math.abs(e)) : o()(e).fromNow()
            }
            var w = r(11072);

            function O(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, _(n.key), n)
                }
            }

            function j(t, e) {
                return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, j(t, e)
            }

            function g(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = $(t);
                    if (e) {
                        var o = $(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return M(t)
            }

            function M(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function $(t) {
                return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, $(t)
            }

            function D(t, e, r) {
                return (e = _(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function _(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && j(t, e)
                }(u, t);
                var e, r, n, i = g(u);

                function u() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), D(M(t = i.call(this)), "time", "hh:mm a"), D(M(t), "shortMonthDayTime", `${t.shortMonthDay}, ${t.time}`), D(M(t), "shortMonthDayYearTime", `${t.shortMonthDay}, ${t.year}, ${t.time}`), D(M(t), "timeFromNowWithSuffix", {
                        [l]: t => `${t} ${w.A.pluralFormulas.en_US(t)?"yrs.":"yr."} ago`,
                        [s]: t => `${t} ${w.A.pluralFormulas.en_US(t)?"mos.":"mo."} ago`,
                        [y]: t => `${t} d. ago`,
                        [h]: t => `${t} ${w.A.pluralFormulas.en_US(t)?"hrs.":"h."} ago`,
                        [p]: t => `${t} ${w.A.pluralFormulas.en_US(t)?"mins.":"min."} ago`,
                        [b]: t => `${t} ${w.A.pluralFormulas.en_US(t)?"secs.":"sec."} ago`
                    }), o().updateLocale("en", {
                        meridiem: t => t < 12 ? "a.m." : "p.m."
                    }), t
                }
                return e = u, r && O(e.prototype, r), n && O(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, B(n.key), n)
                }
            }

            function R(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function E(t, e) {
                return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, E(t, e)
            }

            function Y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = x(t);
                    if (e) {
                        var o = x(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return N(t)
            }

            function N(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function x(t) {
                return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, x(t)
            }

            function A(t, e, r) {
                return (e = B(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function B(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let W = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && E(t, e)
                }(i, t);
                var e, r, n, o = Y(i);

                function i() {
                    var t;
                    R(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return A(N(t = o.call(this, ...r)), "symbolHour", "æ™‚"), A(N(t), "symbolMinute", "åˆ†"), A(N(t), "symbolDay", "æ—¥"), A(N(t), "symbolMonth", "æœˆ"), A(N(t), "symbolYear", "å¹´"), A(N(t), "symbolRange", "ï½ž"), A(N(t), "time", `h[${t.symbolHour}]m[${t.symbolMinute}]`), A(N(t), "day", `D[${t.symbolDay}]`), A(N(t), "month", `M[${t.symbolMonth}]`), A(N(t), "year", `YYYY[${t.symbolYear}]`), A(N(t), "monthDay", `${t.month}${t.day}`), A(N(t), "monthYear", `${t.year}${t.month}`), A(N(t), "shortMonthDay", t.monthDay), A(N(t), "shortMonthDayYear", `${t.year}${t.monthDay}`), A(N(t), "shortMonthDayYearTime", `${t.shortMonthDayYear} ${t.time}`), A(N(t), "shortMonthDayTime", `${t.shortMonthDay} ${t.time}`), A(N(t), "monthNameArray", Array.from({
                        length: 12
                    }, ((e, r) => r + 1 + t.symbolMonth))), A(N(t), "legacyShortMonthYear", `m${t.symbolMonth}yyyy${t.symbolYear}`), A(N(t), "monthDayYear", `${t.year}${t.monthDay}`), t
                }
                return e = i, r && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function C(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, q(n.key), n)
                }
            }

            function F(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function U(t, e) {
                return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, U(t, e)
            }

            function H(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return z(t)
            }

            function z(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, I(t)
            }

            function J(t, e, r) {
                return (e = q(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function q(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let G = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && U(t, e)
                }(i, t);
                var e, r, n, o = H(i);

                function i() {
                    var t;
                    F(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return J(z(t = o.call(this, ...r)), "monthDay", `${t.day} ${t.month}`), J(z(t), "monthYear", `${t.month} ${t.year}`), J(z(t), "shortMonthDay", ` ${t.day} ${t.shortMonth}`), J(z(t), "shortMonthDayTime", `${t.shortMonthDay} ${t.time}`), J(z(t), "shortMonthDayYear", `${t.shortMonthDay} ${t.year}`), J(z(t), "shortMonthYear", `${t.shortMonth} ${t.year}`), J(z(t), "shortMonthDayYearTime", `${t.shortMonthDay} ${t.year} ${t.time}`), J(z(t), "legacyShortMonthYear", "M yyyy"), J(z(t), "monthDayYear", `${t.monthDay} ${t.year}`), t
                }
                return e = i, r && C(e.prototype, r), n && C(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function K(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, nt(n.key), n)
                }
            }

            function Q(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function V(t, e) {
                return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, V(t, e)
            }

            function X(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = et(t);
                    if (e) {
                        var o = et(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Z(this, r)
                }
            }

            function Z(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return tt(t)
            }

            function tt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function et(t) {
                return et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, et(t)
            }

            function rt(t, e, r) {
                return (e = nt(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function nt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let ot = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && V(t, e)
                }(i, t);
                var e, r, n, o = X(i);

                function i() {
                    var t;
                    Q(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return rt(tt(t = o.call(this, ...r)), "monthDay", "D [de] MMMM"), rt(tt(t), "shortMonthDayYear", `${t.day} ${t.shortMonth} ${t.year}`), rt(tt(t), "monthDayYear", `${t.monthDay} [de] ${t.year}`), t
                }
                return e = i, r && K(e.prototype, r), n && K(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function it(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ht(n.key), n)
                }
            }

            function ut(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function at(t, e) {
                return at = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, at(t, e)
            }

            function ft(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = st(t);
                    if (e) {
                        var o = st(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return ct(this, r)
                }
            }

            function ct(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return lt(t)
            }

            function lt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function st(t) {
                return st = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, st(t)
            }

            function yt(t, e, r) {
                return (e = ht(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ht(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let pt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && at(t, e)
                }(i, t);
                var e, r, n, o = ft(i);

                function i() {
                    var t;
                    ut(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return yt(lt(t = o.call(this, ...r)), "monthDay", "D MMMM"), yt(lt(t), "shortMonthDayYear", `${t.day} ${t.shortMonth} ${t.year}`), yt(lt(t), "monthDayYear", `${t.monthDay} ${t.year}`), t
                }
                return e = i, r && it(e.prototype, r), n && it(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function bt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Pt(n.key), n)
                }
            }

            function mt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function vt(t, e) {
                return vt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, vt(t, e)
            }

            function dt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = jt(t);
                    if (e) {
                        var o = jt(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return wt(this, r)
                }
            }

            function wt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Ot(t)
            }

            function Ot(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function jt(t) {
                return jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, jt(t)
            }

            function gt(t, e, r) {
                return (e = Pt(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Pt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let Mt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && vt(t, e)
                }(i, t);
                var e, r, n, o = dt(i);

                function i() {
                    var t;
                    mt(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return gt(Ot(t = o.call(this, ...r)), "monthDay", "D. MMMM"), gt(Ot(t), "monthDayYear", `${t.monthDay} ${t.year}`), t
                }
                return e = i, r && bt(e.prototype, r), n && bt(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function $t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, kt(n.key), n)
                }
            }

            function Dt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function _t(t, e) {
                return _t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, _t(t, e)
            }

            function St(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Et(t);
                    if (e) {
                        var o = Et(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Tt(this, r)
                }
            }

            function Tt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Rt(t)
            }

            function Rt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Et(t) {
                return Et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Et(t)
            }

            function Yt(t, e, r) {
                return (e = kt(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function kt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let Nt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && _t(t, e)
                }(i, t);
                var e, r, n, o = St(i);

                function i() {
                    var t;
                    Dt(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return Yt(Rt(t = o.call(this, ...r)), "monthDay", "D MMMM"), Yt(Rt(t), "monthDayYear", `${t.monthDay} ${t.year}`), t
                }
                return e = i, r && $t(e.prototype, r), n && $t(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function xt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Lt(n.key), n)
                }
            }

            function At(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Bt(t, e) {
                return Bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Bt(t, e)
            }

            function Wt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Ut(t);
                    if (e) {
                        var o = Ut(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Ct(this, r)
                }
            }

            function Ct(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Ft(t)
            }

            function Ft(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Ut(t) {
                return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Ut(t)
            }

            function Ht(t, e, r) {
                return (e = Lt(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Lt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let zt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && Bt(t, e)
                }(i, t);
                var e, r, n, o = Wt(i);

                function i() {
                    var t;
                    At(this, i);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return Ht(Ft(t = o.call(this, ...r)), "monthDay", "D [de] MMMM"), Ht(Ft(t), "monthDayYear", `${t.monthDay} [de] ${t.year}`), t
                }
                return e = i, r && xt(e.prototype, r), n && xt(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(v);

            function It(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string")) ? i : String(i)), n)
                }
                var o, i
            }

            function Jt(t, e, r) {
                return e && It(t.prototype, e), r && It(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function qt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            let Gt = Jt((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.A.locale;
                switch (qt(this, t), e) {
                    case "en_US":
                        return new S;
                    case "es_ES":
                        return new ot;
                    case "it_IT":
                        return new G;
                    case "fr_FR":
                        return new pt;
                    case "ja_JP":
                        return new W;
                    case "de_DE":
                        return new Mt;
                    case "nl_NL":
                        return new Nt;
                    case "pt_BR":
                        return new zt;
                    default:
                        return new v
                }
            }))
        }
    }
]);