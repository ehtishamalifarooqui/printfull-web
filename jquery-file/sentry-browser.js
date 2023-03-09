/*! @sentry/browser 5.23.0 (5c15e06) | https://github.com/getsentry/sentry-javascript */
var Sentry = function(t) {
    var n = function(t, r) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, n) {
                t.__proto__ = n
            } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
            })(t, r)
    };

    function r(t, r) {
        function e() {
            this.constructor = t
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
    }
    var e, i, o, u = function() {
        return (u = Object.assign || function(t) {
            for (var n, r = 1, e = arguments.length; r < e; r++)
                for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t
        }).apply(this, arguments)
    };

    function c(t, n) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var e, i, o = r.call(t),
            u = [];
        try {
            for (;
                (void 0 === n || n-- > 0) && !(e = o.next()).done;) u.push(e.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                e && !e.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    }

    function a() {
        for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(c(arguments[n]));
        return t
    }! function(t) {
        t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
    }(e || (e = {})), (i = t.Severity || (t.Severity = {})).Fatal = "fatal", i.Error = "error", i.Warning = "warning", i.Log = "log", i.Info = "info", i.Debug = "debug", i.Critical = "critical",
        function(t) {
            t.fromString = function(n) {
                switch (n) {
                    case "debug":
                        return t.Debug;
                    case "info":
                        return t.Info;
                    case "warn":
                    case "warning":
                        return t.Warning;
                    case "error":
                        return t.Error;
                    case "fatal":
                        return t.Fatal;
                    case "critical":
                        return t.Critical;
                    case "log":
                    default:
                        return t.Log
                }
            }
        }(t.Severity || (t.Severity = {})), (o = t.Status || (t.Status = {})).Unknown = "unknown", o.Skipped = "skipped", o.Success = "success", o.RateLimit = "rate_limit", o.Invalid = "invalid", o.Failed = "failed",
        function(t) {
            t.fromHttpCode = function(n) {
                return n >= 200 && n < 300 ? t.Success : 429 === n ? t.RateLimit : n >= 400 && n < 500 ? t.Invalid : n >= 500 ? t.Failed : t.Unknown
            }
        }(t.Status || (t.Status = {}));
    var s = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? function(t, n) {
            return t.__proto__ = n, t
        } : function(t, n) {
            for (var r in n) t.hasOwnProperty(r) || (t[r] = n[r]);
            return t
        });
    var f = function(t) {
        function n(n) {
            var r = this.constructor,
                e = t.call(this, n) || this;
            return e.message = n, e.name = r.prototype.constructor.name, s(e, r.prototype), e
        }
        return r(n, t), n
    }(Error);

    function h(t) {
        switch (Object.prototype.toString.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return g(t, Error)
        }
    }

    function v(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }

    function l(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }

    function d(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }

    function p(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }

    function y(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function m(t) {
        return "undefined" != typeof Event && g(t, Event)
    }

    function b(t) {
        return "undefined" != typeof Element && g(t, Element)
    }

    function w(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }

    function g(t, n) {
        try {
            return t instanceof n
        } catch (t) {
            return !1
        }
    }

    function E(t, n) {
        return void 0 === n && (n = 0), "string" != typeof t || 0 === n ? t : t.length <= n ? t : t.substr(0, n) + "..."
    }

    function x(t, n) {
        if (!Array.isArray(t)) return "";
        for (var r = [], e = 0; e < t.length; e++) {
            var i = t[e];
            try {
                r.push(String(i))
            } catch (t) {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(n)
    }

    function j(t, n) {
        return !!d(t) && (r = n, "[object RegExp]" === Object.prototype.toString.call(r) ? n.test(t) : "string" == typeof n && -1 !== t.indexOf(n));
        var r
    }

    function k() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    var _ = {};

    function S() {
        return k() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : _
    }

    function T() {
        var t = S(),
            n = t.crypto || t.msCrypto;
        if (void 0 !== n && n.getRandomValues) {
            var r = new Uint16Array(8);
            n.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
            var e = function(t) {
                for (var n = t.toString(16); n.length < 4;) n = "0" + n;
                return n
            };
            return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = 16 * Math.random() | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        })
    }

    function O(t) {
        if (!t) return {};
        var n = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!n) return {};
        var r = n[6] || "",
            e = n[8] || "";
        return {
            host: n[4],
            path: n[5],
            protocol: n[2],
            relative: n[5] + r + e
        }
    }

    function D(t) {
        if (t.message) return t.message;
        if (t.exception && t.exception.values && t.exception.values[0]) {
            var n = t.exception.values[0];
            return n.type && n.value ? n.type + ": " + n.value : n.type || n.value || t.event_id || "<unknown>"
        }
        return t.event_id || "<unknown>"
    }

    function R(t) {
        var n = S();
        if (!("console" in n)) return t();
        var r = n.console,
            e = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
            t in n.console && r[t].__sentry_original__ && (e[t] = r[t], r[t] = r[t].__sentry_original__)
        });
        var i = t();
        return Object.keys(e).forEach(function(t) {
            r[t] = e[t]
        }), i
    }

    function I(t, n, r) {
        t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || n || "", t.exception.values[0].type = t.exception.values[0].type || r || "Error"
    }

    function N(t, n) {
        void 0 === n && (n = {});
        try {
            t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(n).forEach(function(r) {
                t.exception.values[0].mechanism[r] = n[r]
            })
        } catch (t) {}
    }

    function C(t) {
        try {
            for (var n = t, r = [], e = 0, i = 0, o = " > ".length, u = void 0; n && e++ < 5 && !("html" === (u = M(n)) || e > 1 && i + r.length * o + u.length >= 80);) r.push(u), i += u.length, n = n.parentNode;
            return r.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }

    function M(t) {
        var n, r, e, i, o, u = t,
            c = [];
        if (!u || !u.tagName) return "";
        if (c.push(u.tagName.toLowerCase()), u.id && c.push("#" + u.id), (n = u.className) && d(n))
            for (r = n.split(/\s+/), o = 0; o < r.length; o++) c.push("." + r[o]);
        var a = ["type", "name", "title", "alt"];
        for (o = 0; o < a.length; o++) e = a[o], (i = u.getAttribute(e)) && c.push("[" + e + '="' + i + '"]');
        return c.join("")
    }
    var A = Date.now(),
        q = 0,
        U = {
            now: function() {
                var t = Date.now() - A;
                return t < q && (t = q), q = t, t
            },
            timeOrigin: A
        },
        L = function() {
            if (k()) try {
                return (t = module, n = "perf_hooks", t.require(n)).performance
            } catch (t) {
                return U
            }
            var t, n, r = S().performance;
            return r && r.now ? (void 0 === r.timeOrigin && (r.timeOrigin = r.timing && r.timing.navigationStart || A), r) : U
        }();

    function H() {
        return (L.timeOrigin + L.now()) / 1e3
    }
    var F = 6e4;

    function P(t, n) {
        if (!n) return F;
        var r = parseInt("" + n, 10);
        if (!isNaN(r)) return 1e3 * r;
        var e = Date.parse("" + n);
        return isNaN(e) ? F : e - t
    }
    var X = "<anonymous>";

    function W(t) {
        try {
            return t && "function" == typeof t && t.name || X
        } catch (t) {
            return X
        }
    }
    var $ = S(),
        B = "Sentry Logger ",
        G = function() {
            function t() {
                this.t = !1
            }
            return t.prototype.disable = function() {
                this.t = !1
            }, t.prototype.enable = function() {
                this.t = !0
            }, t.prototype.log = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                this.t && R(function() {
                    $.console.log(B + "[Log]: " + t.join(" "))
                })
            }, t.prototype.warn = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                this.t && R(function() {
                    $.console.warn(B + "[Warn]: " + t.join(" "))
                })
            }, t.prototype.error = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                this.t && R(function() {
                    $.console.error(B + "[Error]: " + t.join(" "))
                })
            }, t
        }();
    $.__SENTRY__ = $.__SENTRY__ || {};
    var J, z = $.__SENTRY__.logger || ($.__SENTRY__.logger = new G),
        V = function() {
            function t() {
                this.i = "function" == typeof WeakSet, this.o = this.i ? new WeakSet : []
            }
            return t.prototype.memoize = function(t) {
                if (this.i) return !!this.o.has(t) || (this.o.add(t), !1);
                for (var n = 0; n < this.o.length; n++) {
                    if (this.o[n] === t) return !0
                }
                return this.o.push(t), !1
            }, t.prototype.unmemoize = function(t) {
                if (this.i) this.o.delete(t);
                else
                    for (var n = 0; n < this.o.length; n++)
                        if (this.o[n] === t) {
                            this.o.splice(n, 1);
                            break
                        }
            }, t
        }();

    function K(t, n, r) {
        if (n in t) {
            var e = t[n],
                i = r(e);
            if ("function" == typeof i) try {
                i.prototype = i.prototype || {}, Object.defineProperties(i, {
                    __sentry_original__: {
                        enumerable: !1,
                        value: e
                    }
                })
            } catch (t) {}
            t[n] = i
        }
    }

    function Q(t) {
        if (h(t)) {
            var n = t,
                r = {
                    message: n.message,
                    name: n.name,
                    stack: n.stack
                };
            for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
            return r
        }
        if (m(t)) {
            var i = t,
                o = {};
            o.type = i.type;
            try {
                o.target = b(i.target) ? C(i.target) : Object.prototype.toString.call(i.target)
            } catch (t) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = b(i.currentTarget) ? C(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (t) {
                o.currentTarget = "<unknown>"
            }
            for (var e in "undefined" != typeof CustomEvent && g(t, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, e) && (o[e] = i);
            return o
        }
        return t
    }

    function Y(t) {
        return function(t) {
            return ~-encodeURI(t).split(/%..|./).length
        }(JSON.stringify(t))
    }

    function Z(t, n, r) {
        void 0 === n && (n = 3), void 0 === r && (r = 102400);
        var e = rt(t, n);
        return Y(e) > r ? Z(t, n - 1, r) : e
    }

    function tt(t, n) {
        return "domain" === n && t && "object" == typeof t && t.u ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : y(r = t) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + W(t) + "]" : t;
        var r
    }

    function nt(t, n, r, e) {
        if (void 0 === r && (r = 1 / 0), void 0 === e && (e = new V), 0 === r) return function(t) {
            var n = Object.prototype.toString.call(t);
            if ("string" == typeof t) return t;
            if ("[object Object]" === n) return "[Object]";
            if ("[object Array]" === n) return "[Array]";
            var r = tt(t);
            return p(r) ? r : n
        }(n);
        if (null != n && "function" == typeof n.toJSON) return n.toJSON();
        var i = tt(n, t);
        if (p(i)) return i;
        var o = Q(n),
            u = Array.isArray(n) ? [] : {};
        if (e.memoize(n)) return "[Circular ~]";
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (u[c] = nt(c, o[c], r - 1, e));
        return e.unmemoize(n), u
    }

    function rt(t, n) {
        try {
            return JSON.parse(JSON.stringify(t, function(t, r) {
                return nt(t, r, n)
            }))
        } catch (t) {
            return "**non-serializable**"
        }
    }

    function et(t, n) {
        void 0 === n && (n = 40);
        var r = Object.keys(Q(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= n) return E(r[0], n);
        for (var e = r.length; e > 0; e--) {
            var i = r.slice(0, e).join(", ");
            if (!(i.length > n)) return e === r.length ? i : E(i, n)
        }
        return ""
    }! function(t) {
        t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
    }(J || (J = {}));
    var it = function() {
            function t(t) {
                var n = this;
                this.s = J.PENDING, this.h = [], this.v = function(t) {
                    n.l(J.RESOLVED, t)
                }, this.p = function(t) {
                    n.l(J.REJECTED, t)
                }, this.l = function(t, r) {
                    n.s === J.PENDING && (w(r) ? r.then(n.v, n.p) : (n.s = t, n.m = r, n.g()))
                }, this.j = function(t) {
                    n.h = n.h.concat(t), n.g()
                }, this.g = function() {
                    if (n.s !== J.PENDING) {
                        var t = n.h.slice();
                        n.h = [], t.forEach(function(t) {
                            t.done || (n.s === J.RESOLVED && t.onfulfilled && t.onfulfilled(n.m), n.s === J.REJECTED && t.onrejected && t.onrejected(n.m), t.done = !0)
                        })
                    }
                };
                try {
                    t(this.v, this.p)
                } catch (t) {
                    this.p(t)
                }
            }
            return t.resolve = function(n) {
                return new t(function(t) {
                    t(n)
                })
            }, t.reject = function(n) {
                return new t(function(t, r) {
                    r(n)
                })
            }, t.all = function(n) {
                return new t(function(r, e) {
                    if (Array.isArray(n))
                        if (0 !== n.length) {
                            var i = n.length,
                                o = [];
                            n.forEach(function(n, u) {
                                t.resolve(n).then(function(t) {
                                    o[u] = t, 0 === (i -= 1) && r(o)
                                }).then(null, e)
                            })
                        } else r([]);
                    else e(new TypeError("Promise.all requires an array as input."))
                })
            }, t.prototype.then = function(n, r) {
                var e = this;
                return new t(function(t, i) {
                    e.j({
                        done: !1,
                        onfulfilled: function(r) {
                            if (n) try {
                                return void t(n(r))
                            } catch (t) {
                                return void i(t)
                            } else t(r)
                        },
                        onrejected: function(n) {
                            if (r) try {
                                return void t(r(n))
                            } catch (t) {
                                return void i(t)
                            } else i(n)
                        }
                    })
                })
            }, t.prototype.catch = function(t) {
                return this.then(function(t) {
                    return t
                }, t)
            }, t.prototype.finally = function(n) {
                var r = this;
                return new t(function(t, e) {
                    var i, o;
                    return r.then(function(t) {
                        o = !1, i = t, n && n()
                    }, function(t) {
                        o = !0, i = t, n && n()
                    }).then(function() {
                        o ? e(i) : t(i)
                    })
                })
            }, t.prototype.toString = function() {
                return "[object SyncPromise]"
            }, t
        }(),
        ot = function() {
            function t(t) {
                this.k = t, this._ = []
            }
            return t.prototype.isReady = function() {
                return void 0 === this.k || this.length() < this.k
            }, t.prototype.add = function(t) {
                var n = this;
                return this.isReady() ? (-1 === this._.indexOf(t) && this._.push(t), t.then(function() {
                    return n.remove(t)
                }).then(null, function() {
                    return n.remove(t).then(null, function() {})
                }), t) : it.reject(new f("Not adding Promise due to buffer limit reached."))
            }, t.prototype.remove = function(t) {
                return this._.splice(this._.indexOf(t), 1)[0]
            }, t.prototype.length = function() {
                return this._.length
            }, t.prototype.drain = function(t) {
                var n = this;
                return new it(function(r) {
                    var e = setTimeout(function() {
                        t && t > 0 && r(!1)
                    }, t);
                    it.all(n._).then(function() {
                        clearTimeout(e), r(!0)
                    }).then(null, function() {
                        r(!0)
                    })
                })
            }, t
        }();

    function ut() {
        if (!("fetch" in S())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function ct(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function at() {
        if (!ut()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (t) {
            return !1
        }
    }
    var st, ft = S(),
        ht = {},
        vt = {};

    function lt(t) {
        if (!vt[t]) switch (vt[t] = !0, t) {
            case "console":
                ! function() {
                    if (!("console" in ft)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                        t in ft.console && K(ft.console, t, function(n) {
                            return function() {
                                for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                                pt("console", {
                                    args: r,
                                    level: t
                                }), n && Function.prototype.apply.call(n, ft.console, r)
                            }
                        })
                    })
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in ft)) return;
                    ft.document.addEventListener("click", xt("click", pt.bind(null, "dom")), !1), ft.document.addEventListener("keypress", jt(pt.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function(t) {
                        var n = ft[t] && ft[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (K(n, "addEventListener", function(t) {
                            return function(n, r, e) {
                                return r && r.handleEvent ? ("click" === n && K(r, "handleEvent", function(t) {
                                    return function(n) {
                                        return xt("click", pt.bind(null, "dom"))(n), t.call(this, n)
                                    }
                                }), "keypress" === n && K(r, "handleEvent", function(t) {
                                    return function(n) {
                                        return jt(pt.bind(null, "dom"))(n), t.call(this, n)
                                    }
                                })) : ("click" === n && xt("click", pt.bind(null, "dom"), !0)(this), "keypress" === n && jt(pt.bind(null, "dom"))(this)), t.call(this, n, r, e)
                            }
                        }), K(n, "removeEventListener", function(t) {
                            return function(n, r, e) {
                                try {
                                    t.call(this, n, r.__sentry_wrapped__, e)
                                } catch (t) {}
                                return t.call(this, n, r, e)
                            }
                        }))
                    })
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in ft)) return;
                    var t = XMLHttpRequest.prototype;
                    K(t, "open", function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var e = this,
                                i = n[1];
                            e.__sentry_xhr__ = {
                                method: d(n[0]) ? n[0].toUpperCase() : n[0],
                                url: n[1]
                            }, d(i) && "POST" === e.__sentry_xhr__.method && i.match(/sentry_key/) && (e.__sentry_own_request__ = !0);
                            var o = function() {
                                if (4 === e.readyState) {
                                    try {
                                        e.__sentry_xhr__ && (e.__sentry_xhr__.status_code = e.status)
                                    } catch (t) {}
                                    pt("xhr", {
                                        args: n,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: e
                                    })
                                }
                            };
                            return "onreadystatechange" in e && "function" == typeof e.onreadystatechange ? K(e, "onreadystatechange", function(t) {
                                return function() {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    return o(), t.apply(e, n)
                                }
                            }) : e.addEventListener("readystatechange", o), t.apply(e, n)
                        }
                    }), K(t, "send", function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            return pt("xhr", {
                                args: n,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), t.apply(this, n)
                        }
                    })
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!ut()) return !1;
                            var t = S();
                            if (ct(t.fetch)) return !0;
                            var n = !1,
                                r = t.document;
                            if (r && "function" == typeof r.createElement) try {
                                var e = r.createElement("iframe");
                                e.hidden = !0, r.head.appendChild(e), e.contentWindow && e.contentWindow.fetch && (n = ct(e.contentWindow.fetch)), r.head.removeChild(e)
                            } catch (t) {
                                z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                            return n
                        }()) return;
                    K(ft, "fetch", function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var e = {
                                args: n,
                                fetchData: {
                                    method: yt(n),
                                    url: mt(n)
                                },
                                startTimestamp: Date.now()
                            };
                            return pt("fetch", u({}, e)), t.apply(ft, n).then(function(t) {
                                return pt("fetch", u(u({}, e), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })), t
                            }, function(t) {
                                throw pt("fetch", u(u({}, e), {
                                    endTimestamp: Date.now(),
                                    error: t
                                })), t
                            })
                        }
                    })
                }();
                break;
            case "history":
                ! function() {
                    if (t = S(), n = t.chrome, r = n && n.app && n.app.runtime, e = "history" in t && !!t.history.pushState && !!t.history.replaceState, r || !e) return;
                    var t, n, r, e;
                    var i = ft.onpopstate;

                    function o(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var e = n.length > 2 ? n[2] : void 0;
                            if (e) {
                                var i = st,
                                    o = String(e);
                                st = o, pt("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return t.apply(this, n)
                        }
                    }
                    ft.onpopstate = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = ft.location.href,
                            e = st;
                        if (st = r, pt("history", {
                                from: e,
                                to: r
                            }), i) return i.apply(this, t)
                    }, K(ft.history, "pushState", o), K(ft.history, "replaceState", o)
                }();
                break;
            case "error":
                kt = ft.onerror, ft.onerror = function(t, n, r, e, i) {
                    return pt("error", {
                        column: e,
                        error: i,
                        line: r,
                        msg: t,
                        url: n
                    }), !!kt && kt.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                _t = ft.onunhandledrejection, ft.onunhandledrejection = function(t) {
                    return pt("unhandledrejection", t), !_t || _t.apply(this, arguments)
                };
                break;
            default:
                z.warn("unknown instrumentation type:", t)
        }
    }

    function dt(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (ht[t.type] = ht[t.type] || [], ht[t.type].push(t.callback), lt(t.type))
    }

    function pt(t, n) {
        var r, e;
        if (t && ht[t]) try {
            for (var i = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        r = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && r >= t.length && (t = void 0), {
                                value: t && t[r++],
                                done: !t
                            }
                        }
                    }
                }(ht[t] || []), o = i.next(); !o.done; o = i.next()) {
                var u = o.value;
                try {
                    u(n)
                } catch (n) {
                    z.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + W(u) + "\nError: " + n)
                }
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (e = i.return) && e.call(i)
            } finally {
                if (r) throw r.error
            }
        }
    }

    function yt(t) {
        return void 0 === t && (t = []), "Request" in ft && g(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function mt(t) {
        return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in ft && g(t[0], Request) ? t[0].url : String(t[0])
    }
    var bt, wt, gt = 1e3,
        Et = 0;

    function xt(t, n, r) {
        return void 0 === r && (r = !1),
            function(e) {
                bt = void 0, e && wt !== e && (wt = e, Et && clearTimeout(Et), r ? Et = setTimeout(function() {
                    n({
                        event: e,
                        name: t
                    })
                }) : n({
                    event: e,
                    name: t
                }))
            }
    }

    function jt(t) {
        return function(n) {
            var r;
            try {
                r = n.target
            } catch (t) {
                return
            }
            var e = r && r.tagName;
            e && ("INPUT" === e || "TEXTAREA" === e || r.isContentEditable) && (bt || xt("input", t)(n), clearTimeout(bt), bt = setTimeout(function() {
                bt = void 0
            }, gt))
        }
    }
    var kt = null;
    var _t = null;
    var St = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
        Tt = function() {
            function t(t) {
                "string" == typeof t ? this.S(t) : this.T(t), this.O()
            }
            return t.prototype.toString = function(t) {
                void 0 === t && (t = !1);
                var n = this,
                    r = n.host,
                    e = n.path,
                    i = n.pass,
                    o = n.port,
                    u = n.projectId;
                return n.protocol + "://" + n.user + (t && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u
            }, t.prototype.S = function(t) {
                var n = St.exec(t);
                if (!n) throw new f("Invalid Dsn");
                var r = c(n.slice(1), 6),
                    e = r[0],
                    i = r[1],
                    o = r[2],
                    u = void 0 === o ? "" : o,
                    a = r[3],
                    s = r[4],
                    h = void 0 === s ? "" : s,
                    v = "",
                    l = r[5],
                    d = l.split("/");
                if (d.length > 1 && (v = d.slice(0, -1).join("/"), l = d.pop()), l) {
                    var p = l.match(/^\d+/);
                    p && (l = p[0])
                }
                this.T({
                    host: a,
                    pass: u,
                    path: v,
                    projectId: l,
                    port: h,
                    protocol: e,
                    user: i
                })
            }, t.prototype.T = function(t) {
                this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
            }, t.prototype.O = function() {
                var t = this;
                if (["protocol", "user", "host", "projectId"].forEach(function(n) {
                        if (!t[n]) throw new f("Invalid Dsn: " + n + " missing")
                    }), !this.projectId.match(/^\d+$/)) throw new f("Invalid Dsn: Invalid projectId " + this.projectId);
                if ("http" !== this.protocol && "https" !== this.protocol) throw new f("Invalid Dsn: Invalid protocol " + this.protocol);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new f("Invalid Dsn: Invalid port " + this.port)
            }, t
        }(),
        Ot = function() {
            function t() {
                this.D = !1, this.R = [], this.I = [], this.N = [], this.C = {}, this.M = {}, this.A = {}, this.q = {}
            }
            return t.clone = function(n) {
                var r = new t;
                return n && (r.N = a(n.N), r.M = u({}, n.M), r.A = u({}, n.A), r.q = u({}, n.q), r.C = n.C, r.U = n.U, r.L = n.L, r.H = n.H, r.F = n.F, r.I = a(n.I)), r
            }, t.prototype.addScopeListener = function(t) {
                this.R.push(t)
            }, t.prototype.addEventProcessor = function(t) {
                return this.I.push(t), this
            }, t.prototype.setUser = function(t) {
                return this.C = t || {}, this.P(), this
            }, t.prototype.setTags = function(t) {
                return this.M = u(u({}, this.M), t), this.P(), this
            }, t.prototype.setTag = function(t, n) {
                var r;
                return this.M = u(u({}, this.M), ((r = {})[t] = n, r)), this.P(), this
            }, t.prototype.setExtras = function(t) {
                return this.A = u(u({}, this.A), t), this.P(), this
            }, t.prototype.setExtra = function(t, n) {
                var r;
                return this.A = u(u({}, this.A), ((r = {})[t] = n, r)), this.P(), this
            }, t.prototype.setFingerprint = function(t) {
                return this.F = t, this.P(), this
            }, t.prototype.setLevel = function(t) {
                return this.U = t, this.P(), this
            }, t.prototype.setTransactionName = function(t) {
                return this.H = t, this.P(), this
            }, t.prototype.setTransaction = function(t) {
                return this.setTransactionName(t)
            }, t.prototype.setContext = function(t, n) {
                var r;
                return this.q = u(u({}, this.q), ((r = {})[t] = n, r)), this.P(), this
            }, t.prototype.setSpan = function(t) {
                return this.L = t, this.P(), this
            }, t.prototype.getSpan = function() {
                return this.L
            }, t.prototype.getTransaction = function() {
                var t = this.getSpan();
                if (t && t.spanRecorder && t.spanRecorder.spans[0]) return t.spanRecorder.spans[0]
            }, t.prototype.update = function(n) {
                if (!n) return this;
                if ("function" == typeof n) {
                    var r = n(this);
                    return r instanceof t ? r : this
                }
                return n instanceof t ? (this.M = u(u({}, this.M), n.M), this.A = u(u({}, this.A), n.A), this.q = u(u({}, this.q), n.q), n.C && (this.C = n.C), n.U && (this.U = n.U), n.F && (this.F = n.F)) : y(n) && (n = n, this.M = u(u({}, this.M), n.tags), this.A = u(u({}, this.A), n.extra), this.q = u(u({}, this.q), n.contexts), n.user && (this.C = n.user), n.level && (this.U = n.level), n.fingerprint && (this.F = n.fingerprint)), this
            }, t.prototype.clear = function() {
                return this.N = [], this.M = {}, this.A = {}, this.C = {}, this.q = {}, this.U = void 0, this.H = void 0, this.F = void 0, this.L = void 0, this.P(), this
            }, t.prototype.addBreadcrumb = function(t, n) {
                var r = u({
                    timestamp: H()
                }, t);
                return this.N = void 0 !== n && n >= 0 ? a(this.N, [r]).slice(-n) : a(this.N, [r]), this.P(), this
            }, t.prototype.clearBreadcrumbs = function() {
                return this.N = [], this.P(), this
            }, t.prototype.applyToEvent = function(t, n) {
                return this.A && Object.keys(this.A).length && (t.extra = u(u({}, this.A), t.extra)), this.M && Object.keys(this.M).length && (t.tags = u(u({}, this.M), t.tags)), this.C && Object.keys(this.C).length && (t.user = u(u({}, this.C), t.user)), this.q && Object.keys(this.q).length && (t.contexts = u(u({}, this.q), t.contexts)), this.U && (t.level = this.U), this.H && (t.transaction = this.H), this.L && (t.contexts = u({
                    trace: this.L.getTraceContext()
                }, t.contexts)), this.X(t), t.breadcrumbs = a(t.breadcrumbs || [], this.N), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this.W(a(Dt(), this.I), t, n)
            }, t.prototype.W = function(t, n, r, e) {
                var i = this;
                return void 0 === e && (e = 0), new it(function(o, c) {
                    var a = t[e];
                    if (null === n || "function" != typeof a) o(n);
                    else {
                        var s = a(u({}, n), r);
                        w(s) ? s.then(function(n) {
                            return i.W(t, n, r, e + 1).then(o)
                        }).then(null, c) : i.W(t, s, r, e + 1).then(o).then(null, c)
                    }
                })
            }, t.prototype.P = function() {
                var t = this;
                this.D || (this.D = !0, setTimeout(function() {
                    t.R.forEach(function(n) {
                        n(t)
                    }), t.D = !1
                }))
            }, t.prototype.X = function(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this.F && (t.fingerprint = t.fingerprint.concat(this.F)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }, t
        }();

    function Dt() {
        var t = S();
        return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
    }

    function Rt(t) {
        Dt().push(t)
    }
    var It = 3,
        Nt = function() {
            function t(t, n, r) {
                void 0 === n && (n = new Ot), void 0 === r && (r = It), this.$ = r, this.B = [], this.B.push({
                    client: t,
                    scope: n
                }), this.bindClient(t)
            }
            return t.prototype.isOlderThan = function(t) {
                return this.$ < t
            }, t.prototype.bindClient = function(t) {
                this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
            }, t.prototype.pushScope = function() {
                var t = this.getStack(),
                    n = t.length > 0 ? t[t.length - 1].scope : void 0,
                    r = Ot.clone(n);
                return this.getStack().push({
                    client: this.getClient(),
                    scope: r
                }), r
            }, t.prototype.popScope = function() {
                return void 0 !== this.getStack().pop()
            }, t.prototype.withScope = function(t) {
                var n = this.pushScope();
                try {
                    t(n)
                } finally {
                    this.popScope()
                }
            }, t.prototype.getClient = function() {
                return this.getStackTop().client
            }, t.prototype.getScope = function() {
                return this.getStackTop().scope
            }, t.prototype.getStack = function() {
                return this.B
            }, t.prototype.getStackTop = function() {
                return this.B[this.B.length - 1]
            }, t.prototype.captureException = function(t, n) {
                var r = this.G = T(),
                    e = n;
                if (!n) {
                    var i = void 0;
                    try {
                        throw new Error("Sentry syntheticException")
                    } catch (t) {
                        i = t
                    }
                    e = {
                        originalException: t,
                        syntheticException: i
                    }
                }
                return this.J("captureException", t, u(u({}, e), {
                    event_id: r
                })), r
            }, t.prototype.captureMessage = function(t, n, r) {
                var e = this.G = T(),
                    i = r;
                if (!r) {
                    var o = void 0;
                    try {
                        throw new Error(t)
                    } catch (t) {
                        o = t
                    }
                    i = {
                        originalException: t,
                        syntheticException: o
                    }
                }
                return this.J("captureMessage", t, n, u(u({}, i), {
                    event_id: e
                })), e
            }, t.prototype.captureEvent = function(t, n) {
                var r = this.G = T();
                return this.J("captureEvent", t, u(u({}, n), {
                    event_id: r
                })), r
            }, t.prototype.lastEventId = function() {
                return this.G
            }, t.prototype.addBreadcrumb = function(t, n) {
                var r = this.getStackTop();
                if (r.scope && r.client) {
                    var e = r.client.getOptions && r.client.getOptions() || {},
                        i = e.beforeBreadcrumb,
                        o = void 0 === i ? null : i,
                        c = e.maxBreadcrumbs,
                        a = void 0 === c ? 100 : c;
                    if (!(a <= 0)) {
                        var s = H(),
                            f = u({
                                timestamp: s
                            }, t),
                            h = o ? R(function() {
                                return o(f, n)
                            }) : f;
                        null !== h && r.scope.addBreadcrumb(h, Math.min(a, 100))
                    }
                }
            }, t.prototype.setUser = function(t) {
                var n = this.getStackTop();
                n.scope && n.scope.setUser(t)
            }, t.prototype.setTags = function(t) {
                var n = this.getStackTop();
                n.scope && n.scope.setTags(t)
            }, t.prototype.setExtras = function(t) {
                var n = this.getStackTop();
                n.scope && n.scope.setExtras(t)
            }, t.prototype.setTag = function(t, n) {
                var r = this.getStackTop();
                r.scope && r.scope.setTag(t, n)
            }, t.prototype.setExtra = function(t, n) {
                var r = this.getStackTop();
                r.scope && r.scope.setExtra(t, n)
            }, t.prototype.setContext = function(t, n) {
                var r = this.getStackTop();
                r.scope && r.scope.setContext(t, n)
            }, t.prototype.configureScope = function(t) {
                var n = this.getStackTop();
                n.scope && n.client && t(n.scope)
            }, t.prototype.run = function(t) {
                var n = Mt(this);
                try {
                    t(this)
                } finally {
                    Mt(n)
                }
            }, t.prototype.getIntegration = function(t) {
                var n = this.getClient();
                if (!n) return null;
                try {
                    return n.getIntegration(t)
                } catch (n) {
                    return z.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                }
            }, t.prototype.startSpan = function(t) {
                return this.V("startSpan", t)
            }, t.prototype.startTransaction = function(t) {
                return this.V("startTransaction", t)
            }, t.prototype.traceHeaders = function() {
                return this.V("traceHeaders")
            }, t.prototype.J = function(t) {
                for (var n, r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
                var i = this.getStackTop();
                i && i.client && i.client[t] && (n = i.client)[t].apply(n, a(r, [i.scope]))
            }, t.prototype.V = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var e = Ct().__SENTRY__;
                if (e && e.extensions && "function" == typeof e.extensions[t]) return e.extensions[t].apply(this, n);
                z.warn("Extension method " + t + " couldn't be found, doing nothing.")
            }, t
        }();

    function Ct() {
        var t = S();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function Mt(t) {
        var n = Ct(),
            r = Ut(n);
        return Lt(n, t), r
    }

    function At() {
        var t = Ct();
        return qt(t) && !Ut(t).isOlderThan(It) || Lt(t, new Nt), k() ? function(t) {
            try {
                var n = Ct(),
                    r = n.__SENTRY__;
                if (!r || !r.extensions || !r.extensions.domain) return Ut(t);
                var e = r.extensions.domain,
                    i = e.active;
                if (!i) return Ut(t);
                if (!qt(i) || Ut(i).isOlderThan(It)) {
                    var o = Ut(t).getStackTop();
                    Lt(i, new Nt(o.client, Ot.clone(o.scope)))
                }
                return Ut(i)
            } catch (n) {
                return Ut(t)
            }
        }(t) : Ut(t)
    }

    function qt(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function Ut(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new Nt, t.__SENTRY__.hub)
    }

    function Lt(t, n) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0)
    }

    function Ht(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        var e = At();
        if (e && e[t]) return e[t].apply(e, a(n));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }

    function captureException(t, n) {
        var r;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            r = t
        }
        return Ht("captureException", t, {
            captureContext: n,
            originalException: t,
            syntheticException: r
        })
    }

    function Ft(t) {
        Ht("withScope", t)
    }
    var Pt = function() {
            function t(t) {
                this.dsn = t, this.K = new Tt(t)
            }
            return t.prototype.getDsn = function() {
                return this.K
            }, t.prototype.getBaseApiEndpoint = function() {
                var t = this.K,
                    n = t.protocol ? t.protocol + ":" : "",
                    r = t.port ? ":" + t.port : "";
                return n + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/"
            }, t.prototype.getStoreEndpoint = function() {
                return this.Y("store")
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return this.getStoreEndpoint() + "?" + this.Z()
            }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return this.tt() + "?" + this.Z()
            }, t.prototype.getStoreEndpointPath = function() {
                var t = this.K;
                return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            }, t.prototype.getRequestHeaders = function(t, n) {
                var r = this.K,
                    e = ["Sentry sentry_version=7"];
                return e.push("sentry_client=" + t + "/" + n), e.push("sentry_key=" + r.user), r.pass && e.push("sentry_secret=" + r.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": e.join(", ")
                }
            }, t.prototype.getReportDialogEndpoint = function(t) {
                void 0 === t && (t = {});
                var n = this.K,
                    r = this.getBaseApiEndpoint() + "embed/error-page/",
                    e = [];
                for (var i in e.push("dsn=" + n.toString()), t)
                    if ("user" === i) {
                        if (!t.user) continue;
                        t.user.name && e.push("name=" + encodeURIComponent(t.user.name)), t.user.email && e.push("email=" + encodeURIComponent(t.user.email))
                    } else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                return e.length ? r + "?" + e.join("&") : r
            }, t.prototype.tt = function() {
                return this.Y("envelope")
            }, t.prototype.Y = function(t) {
                return "" + this.getBaseApiEndpoint() + this.K.projectId + "/" + t + "/"
            }, t.prototype.Z = function() {
                var t, n = {
                    sentry_key: this.K.user,
                    sentry_version: "7"
                };
                return t = n, Object.keys(t).map(function(n) {
                    return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
                }).join("&")
            }, t
        }(),
        Xt = [];

    function Wt(t) {
        var n = {};
        return function(t) {
            var n = t.defaultIntegrations && a(t.defaultIntegrations) || [],
                r = t.integrations,
                e = [];
            if (Array.isArray(r)) {
                var i = r.map(function(t) {
                        return t.name
                    }),
                    o = [];
                n.forEach(function(t) {
                    -1 === i.indexOf(t.name) && -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name))
                }), r.forEach(function(t) {
                    -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name))
                })
            } else "function" == typeof r ? (e = r(n), e = Array.isArray(e) ? e : [e]) : e = a(n);
            var u = e.map(function(t) {
                return t.name
            });
            return -1 !== u.indexOf("Debug") && e.push.apply(e, a(e.splice(u.indexOf("Debug"), 1))), e
        }(t).forEach(function(t) {
            n[t.name] = t,
                function(t) {
                    -1 === Xt.indexOf(t.name) && (t.setupOnce(Rt, At), Xt.push(t.name), z.log("Integration installed: " + t.name))
                }(t)
        }), n
    }
    var $t, Bt = function() {
            function t(t, n) {
                this.nt = {}, this.rt = !1, this.et = new t(n), this.it = n, n.dsn && (this.ot = new Tt(n.dsn))
            }
            return t.prototype.captureException = function(t, n, r) {
                var e = this,
                    i = n && n.event_id;
                return this.rt = !0, this.ut().eventFromException(t, n).then(function(t) {
                    i = e.captureEvent(t, n, r)
                }), i
            }, t.prototype.captureMessage = function(t, n, r, e) {
                var i = this,
                    o = r && r.event_id;
                return this.rt = !0, (p(t) ? this.ut().eventFromMessage("" + t, n, r) : this.ut().eventFromException(t, r)).then(function(t) {
                    o = i.captureEvent(t, r, e)
                }), o
            }, t.prototype.captureEvent = function(t, n, r) {
                var e = this,
                    i = n && n.event_id;
                return this.rt = !0, this.ct(t, n, r).then(function(t) {
                    i = t && t.event_id, e.rt = !1
                }).then(null, function(t) {
                    z.error(t), e.rt = !1
                }), i
            }, t.prototype.getDsn = function() {
                return this.ot
            }, t.prototype.getOptions = function() {
                return this.it
            }, t.prototype.flush = function(t) {
                var n = this;
                return this.at(t).then(function(r) {
                    return clearInterval(r.interval), n.ut().getTransport().close(t).then(function(t) {
                        return r.ready && t
                    })
                })
            }, t.prototype.close = function(t) {
                var n = this;
                return this.flush(t).then(function(t) {
                    return n.getOptions().enabled = !1, t
                })
            }, t.prototype.setupIntegrations = function() {
                this.st() && (this.nt = Wt(this.it))
            }, t.prototype.getIntegration = function(t) {
                try {
                    return this.nt[t.id] || null
                } catch (n) {
                    return z.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                }
            }, t.prototype.at = function(t) {
                var n = this;
                return new it(function(r) {
                    var e = 0,
                        i = 0;
                    clearInterval(i), i = setInterval(function() {
                        n.rt ? (e += 1, t && e >= t && r({
                            interval: i,
                            ready: !1
                        })) : r({
                            interval: i,
                            ready: !0
                        })
                    }, 1)
                })
            }, t.prototype.ut = function() {
                return this.et
            }, t.prototype.st = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this.ot
            }, t.prototype.ft = function(t, n, r) {
                var e = this,
                    i = this.getOptions().normalizeDepth,
                    o = void 0 === i ? 3 : i,
                    c = u(u({}, t), {
                        event_id: t.event_id || (r && r.event_id ? r.event_id : T()),
                        timestamp: t.timestamp || H()
                    });
                this.ht(c), this.vt(c);
                var a = n;
                r && r.captureContext && (a = Ot.clone(a).update(r.captureContext));
                var s = it.resolve(c);
                return a && (s = a.applyToEvent(c, r)), s.then(function(t) {
                    return "number" == typeof o && o > 0 ? e.lt(t, o) : t
                })
            }, t.prototype.lt = function(t, n) {
                if (!t) return null;
                var r = u(u(u(u(u({}, t), t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(function(t) {
                        return u(u({}, t), t.data && {
                            data: rt(t.data, n)
                        })
                    })
                }), t.user && {
                    user: rt(t.user, n)
                }), t.contexts && {
                    contexts: rt(t.contexts, n)
                }), t.extra && {
                    extra: rt(t.extra, n)
                });
                return t.contexts && t.contexts.trace && (r.contexts.trace = t.contexts.trace), r
            }, t.prototype.ht = function(t) {
                var n = this.getOptions(),
                    r = n.environment,
                    e = n.release,
                    i = n.dist,
                    o = n.maxValueLength,
                    u = void 0 === o ? 250 : o;
                void 0 === t.environment && void 0 !== r && (t.environment = r), void 0 === t.release && void 0 !== e && (t.release = e), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = E(t.message, u));
                var c = t.exception && t.exception.values && t.exception.values[0];
                c && c.value && (c.value = E(c.value, u));
                var a = t.request;
                a && a.url && (a.url = E(a.url, u))
            }, t.prototype.vt = function(t) {
                var n = t.sdk,
                    r = Object.keys(this.nt);
                n && r.length > 0 && (n.integrations = r)
            }, t.prototype.dt = function(t) {
                this.ut().sendEvent(t)
            }, t.prototype.ct = function(t, n, r) {
                var e = this,
                    i = this.getOptions(),
                    o = i.beforeSend,
                    u = i.sampleRate;
                if (!this.st()) return it.reject("SDK not enabled, will not send event.");
                var c = "transaction" === t.type;
                return !c && "number" == typeof u && Math.random() > u ? it.reject("This event has been sampled, will not send event.") : new it(function(i, u) {
                    e.ft(t, r, n).then(function(t) {
                        if (null !== t) {
                            var r = t;
                            if (n && n.data && !0 === n.data.__sentry__ || !o || c) return e.dt(r), void i(r);
                            var a = o(t, n);
                            if (void 0 === a) z.error("`beforeSend` method has to return `null` or a valid event.");
                            else if (w(a)) e.pt(a, i, u);
                            else {
                                if (null === (r = a)) return z.log("`beforeSend` returned `null`, will not send event."), void i(null);
                                e.dt(r), i(r)
                            }
                        } else u("An event processor returned null, will not send event.")
                    }).then(null, function(t) {
                        e.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), u("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                    })
                })
            }, t.prototype.pt = function(t, n, r) {
                var e = this;
                t.then(function(t) {
                    null !== t ? (e.dt(t), n(t)) : r("`beforeSend` returned `null`, will not send event.")
                }).then(null, function(t) {
                    r("beforeSend rejected with " + t)
                })
            }, t
        }(),
        Gt = function() {
            function n() {}
            return n.prototype.sendEvent = function(n) {
                return it.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: t.Status.Skipped
                })
            }, n.prototype.close = function(t) {
                return it.resolve(!0)
            }, n
        }(),
        Jt = function() {
            function t(t) {
                this.it = t, this.it.dsn || z.warn("No DSN provided, backend will not do anything."), this.yt = this.bt()
            }
            return t.prototype.eventFromException = function(t, n) {
                throw new f("Backend has to implement `eventFromException` method")
            }, t.prototype.eventFromMessage = function(t, n, r) {
                throw new f("Backend has to implement `eventFromMessage` method")
            }, t.prototype.sendEvent = function(t) {
                this.yt.sendEvent(t).then(null, function(t) {
                    z.error("Error while sending event: " + t)
                })
            }, t.prototype.getTransport = function() {
                return this.yt
            }, t.prototype.bt = function() {
                return new Gt
            }, t
        }();

    function zt(t, n) {
        var r = "transaction" === t.type,
            e = {
                body: JSON.stringify(t),
                url: r ? n.getEnvelopeEndpointWithUrlEncodedAuth() : n.getStoreEndpointWithUrlEncodedAuth()
            };
        if (r) {
            var i = JSON.stringify({
                event_id: t.event_id,
                sent_at: new Date(1e3 * H()).toISOString()
            }) + "\n" + JSON.stringify({
                type: t.type
            }) + "\n" + e.body;
            e.body = i
        }
        return e
    }
    var Vt = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                $t = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this.__sentry_original__ || this;
                    return $t.apply(r, t)
                }
            }, t.id = "FunctionToString", t
        }(),
        Kt = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        Qt = function() {
            function t(n) {
                void 0 === n && (n = {}), this.it = n, this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                Rt(function(n) {
                    var r = At();
                    if (!r) return n;
                    var e = r.getIntegration(t);
                    if (e) {
                        var i = r.getClient(),
                            o = i ? i.getOptions() : {},
                            u = e.wt(o);
                        if (e.gt(n, u)) return null
                    }
                    return n
                })
            }, t.prototype.gt = function(t, n) {
                return this.Et(t, n) ? (z.warn("Event dropped due to being internal Sentry Error.\nEvent: " + D(t)), !0) : this.xt(t, n) ? (z.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + D(t)), !0) : this.jt(t, n) ? (z.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + D(t) + ".\nUrl: " + this.kt(t)), !0) : !this._t(t, n) && (z.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + D(t) + ".\nUrl: " + this.kt(t)), !0)
            }, t.prototype.Et = function(t, n) {
                if (!n.ignoreInternal) return !1;
                try {
                    return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                } catch (t) {
                    return !1
                }
            }, t.prototype.xt = function(t, n) {
                return !(!n.ignoreErrors || !n.ignoreErrors.length) && this.St(t).some(function(t) {
                    return n.ignoreErrors.some(function(n) {
                        return j(t, n)
                    })
                })
            }, t.prototype.jt = function(t, n) {
                if (!n.denyUrls || !n.denyUrls.length) return !1;
                var r = this.kt(t);
                return !!r && n.denyUrls.some(function(t) {
                    return j(r, t)
                })
            }, t.prototype._t = function(t, n) {
                if (!n.allowUrls || !n.allowUrls.length) return !0;
                var r = this.kt(t);
                return !r || n.allowUrls.some(function(t) {
                    return j(r, t)
                })
            }, t.prototype.wt = function(t) {
                return void 0 === t && (t = {}), {
                    allowUrls: a(this.it.whitelistUrls || [], this.it.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                    denyUrls: a(this.it.blacklistUrls || [], this.it.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                    ignoreErrors: a(this.it.ignoreErrors || [], t.ignoreErrors || [], Kt),
                    ignoreInternal: void 0 === this.it.ignoreInternal || this.it.ignoreInternal
                }
            }, t.prototype.St = function(t) {
                if (t.message) return [t.message];
                if (t.exception) try {
                    var n = t.exception.values && t.exception.values[0] || {},
                        r = n.type,
                        e = void 0 === r ? "" : r,
                        i = n.value,
                        o = void 0 === i ? "" : i;
                    return ["" + o, e + ": " + o]
                } catch (n) {
                    return z.error("Cannot extract message for event " + D(t)), []
                }
                return []
            }, t.prototype.kt = function(t) {
                try {
                    if (t.stacktrace) {
                        var n = t.stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    if (t.exception) {
                        var r = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                        return r && r[r.length - 1].filename || null
                    }
                    return null
                } catch (n) {
                    return z.error("Cannot extract url for event " + D(t)), null
                }
            }, t.id = "InboundFilters", t
        }(),
        Yt = Object.freeze({
            __proto__: null,
            FunctionToString: Vt,
            InboundFilters: Qt
        }),
        Zt = "?",
        tn = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        nn = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        rn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        en = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        on = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        un = /Minified React error #\d+;/i;

    function cn(t) {
        var n = null,
            r = 0;
        t && ("number" == typeof t.framesToPop ? r = t.framesToPop : un.test(t.message) && (r = 1));
        try {
            if (n = function(t) {
                    if (!t || !t.stacktrace) return null;
                    for (var n, r = t.stacktrace, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = r.split("\n"), u = [], c = 0; c < o.length; c += 2) {
                        var a = null;
                        (n = e.exec(o[c])) ? a = {
                            url: n[2],
                            func: n[3],
                            args: [],
                            line: +n[1],
                            column: null
                        }: (n = i.exec(o[c])) && (a = {
                            url: n[6],
                            func: n[3] || n[4],
                            args: n[5] ? n[5].split(",") : [],
                            line: +n[1],
                            column: +n[2]
                        }), a && (!a.func && a.line && (a.func = Zt), u.push(a))
                    }
                    if (!u.length) return null;
                    return {
                        message: sn(t),
                        name: t.name,
                        stack: u
                    }
                }(t)) return an(n, r)
        } catch (t) {}
        try {
            if (n = function(t) {
                    if (!t || !t.stack) return null;
                    for (var n, r, e, i = [], o = t.stack.split("\n"), u = 0; u < o.length; ++u) {
                        if (r = tn.exec(o[u])) {
                            var c = r[2] && 0 === r[2].indexOf("native");
                            r[2] && 0 === r[2].indexOf("eval") && (n = on.exec(r[2])) && (r[2] = n[1], r[3] = n[2], r[4] = n[3]), e = {
                                url: r[2] && 0 === r[2].indexOf("address at ") ? r[2].substr("address at ".length) : r[2],
                                func: r[1] || Zt,
                                args: c ? [r[2]] : [],
                                line: r[3] ? +r[3] : null,
                                column: r[4] ? +r[4] : null
                            }
                        } else if (r = rn.exec(o[u])) e = {
                            url: r[2],
                            func: r[1] || Zt,
                            args: [],
                            line: +r[3],
                            column: r[4] ? +r[4] : null
                        };
                        else {
                            if (!(r = nn.exec(o[u]))) continue;
                            r[3] && r[3].indexOf(" > eval") > -1 && (n = en.exec(r[3])) ? (r[1] = r[1] || "eval", r[3] = n[1], r[4] = n[2], r[5] = "") : 0 !== u || r[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1), e = {
                                url: r[3],
                                func: r[1] || Zt,
                                args: r[2] ? r[2].split(",") : [],
                                line: r[4] ? +r[4] : null,
                                column: r[5] ? +r[5] : null
                            }
                        }!e.func && e.line && (e.func = Zt), i.push(e)
                    }
                    if (!i.length) return null;
                    return {
                        message: sn(t),
                        name: t.name,
                        stack: i
                    }
                }(t)) return an(n, r)
        } catch (t) {}
        return {
            message: sn(t),
            name: t && t.name,
            stack: [],
            failed: !0
        }
    }

    function an(t, n) {
        try {
            return u(u({}, t), {
                stack: t.stack.slice(n)
            })
        } catch (n) {
            return t
        }
    }

    function sn(t) {
        var n = t && t.message;
        return n ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"
    }
    var fn = 50;

    function hn(t) {
        var n = ln(t.stack),
            r = {
                type: t.name,
                value: t.message
            };
        return n && n.length && (r.stacktrace = {
            frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
    }

    function vn(t) {
        return {
            exception: {
                values: [hn(t)]
            }
        }
    }

    function ln(t) {
        if (!t || !t.length) return [];
        var n = t,
            r = n[0].func || "",
            e = n[n.length - 1].func || "";
        return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (n = n.slice(1)), -1 !== e.indexOf("sentryWrapped") && (n = n.slice(0, -1)), n.slice(0, fn).map(function(t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || n[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line
            }
        }).reverse()
    }

    function dn(n, r, e) {
        var i = yn(r, e && e.syntheticException || void 0, {
            attachStacktrace: n.attachStacktrace
        });
        return N(i, {
            handled: !0,
            type: "generic"
        }), i.level = t.Severity.Error, e && e.event_id && (i.event_id = e.event_id), it.resolve(i)
    }

    function pn(n, r, e, i) {
        void 0 === e && (e = t.Severity.Info);
        var o = mn(r, i && i.syntheticException || void 0, {
            attachStacktrace: n.attachStacktrace
        });
        return o.level = e, i && i.event_id && (o.event_id = i.event_id), it.resolve(o)
    }

    function yn(t, n, r) {
        var e, i;
        if (void 0 === r && (r = {}), v(t) && t.error) return e = vn(cn(t = t.error));
        if (l(t) || (i = t, "[object DOMException]" === Object.prototype.toString.call(i))) {
            var o = t,
                u = o.name || (l(o) ? "DOMError" : "DOMException"),
                c = o.message ? u + ": " + o.message : u;
            return I(e = mn(c, n, r), c), e
        }
        return h(t) ? e = vn(cn(t)) : y(t) || m(t) ? (N(e = function(t, n, r) {
            var e = {
                exception: {
                    values: [{
                        type: m(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + et(t)
                    }]
                },
                extra: {
                    __serialized__: Z(t)
                }
            };
            if (n) {
                var i = ln(cn(n).stack);
                e.stacktrace = {
                    frames: i
                }
            }
            return e
        }(t, n, r.rejection), {
            synthetic: !0
        }), e) : (I(e = mn(t, n, r), "" + t, void 0), N(e, {
            synthetic: !0
        }), e)
    }

    function mn(t, n, r) {
        void 0 === r && (r = {});
        var e = {
            message: t
        };
        if (r.attachStacktrace && n) {
            var i = ln(cn(n).stack);
            e.stacktrace = {
                frames: i
            }
        }
        return e
    }
    var bn = function() {
            function t(t) {
                this.options = t, this._ = new ot(30), this.Tt = new Pt(this.options.dsn), this.url = this.Tt.getStoreEndpointWithUrlEncodedAuth()
            }
            return t.prototype.sendEvent = function(t) {
                throw new f("Transport Class has to implement `sendEvent` method")
            }, t.prototype.close = function(t) {
                return this._.drain(t)
            }, t
        }(),
        wn = S(),
        gn = function(n) {
            function e() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t.Ot = new Date(Date.now()), t
            }
            return r(e, n), e.prototype.sendEvent = function(n) {
                var r = this;
                if (new Date(Date.now()) < this.Ot) return Promise.reject({
                    event: n,
                    reason: "Transport locked till " + this.Ot + " due to too many requests.",
                    status: 429
                });
                var e = zt(n, this.Tt),
                    i = {
                        body: e.body,
                        method: "POST",
                        referrerPolicy: at() ? "origin" : ""
                    };
                return void 0 !== this.options.fetchParameters && Object.assign(i, this.options.fetchParameters), void 0 !== this.options.headers && (i.headers = this.options.headers), this._.add(new it(function(n, o) {
                    wn.fetch(e.url, i).then(function(e) {
                        var i = t.Status.fromHttpCode(e.status);
                        if (i !== t.Status.Success) {
                            if (i === t.Status.RateLimit) {
                                var u = Date.now(),
                                    c = e.headers.get("Retry-After");
                                r.Ot = new Date(u + P(u, c)), z.warn("Too many requests, backing off till: " + r.Ot)
                            }
                            o(e)
                        } else n({
                            status: i
                        })
                    }).catch(o)
                }))
            }, e
        }(bn),
        En = function(n) {
            function e() {
                var t = null !== n && n.apply(this, arguments) || this;
                return t.Ot = new Date(Date.now()), t
            }
            return r(e, n), e.prototype.sendEvent = function(n) {
                var r = this;
                if (new Date(Date.now()) < this.Ot) return Promise.reject({
                    event: n,
                    reason: "Transport locked till " + this.Ot + " due to too many requests.",
                    status: 429
                });
                var e = zt(n, this.Tt);
                return this._.add(new it(function(n, i) {
                    var o = new XMLHttpRequest;
                    for (var u in o.onreadystatechange = function() {
                            if (4 === o.readyState) {
                                var e = t.Status.fromHttpCode(o.status);
                                if (e !== t.Status.Success) {
                                    if (e === t.Status.RateLimit) {
                                        var u = Date.now(),
                                            c = o.getResponseHeader("Retry-After");
                                        r.Ot = new Date(u + P(u, c)), z.warn("Too many requests, backing off till: " + r.Ot)
                                    }
                                    i(o)
                                } else n({
                                    status: e
                                })
                            }
                        }, o.open("POST", e.url), r.options.headers) r.options.headers.hasOwnProperty(u) && o.setRequestHeader(u, r.options.headers[u]);
                    o.send(e.body)
                }))
            }, e
        }(bn),
        xn = Object.freeze({
            __proto__: null,
            BaseTransport: bn,
            FetchTransport: gn,
            XHRTransport: En
        }),
        jn = function(n) {
            function e() {
                return null !== n && n.apply(this, arguments) || this
            }
            return r(e, n), e.prototype.eventFromException = function(t, n) {
                return dn(this.it, t, n)
            }, e.prototype.eventFromMessage = function(n, r, e) {
                return void 0 === r && (r = t.Severity.Info), pn(this.it, n, r, e)
            }, e.prototype.bt = function() {
                if (!this.it.dsn) return n.prototype.bt.call(this);
                var t = u(u({}, this.it.transportOptions), {
                    dsn: this.it.dsn
                });
                return this.it.transport ? new this.it.transport(t) : ut() ? new gn(t) : new En(t)
            }, e
        }(Jt),
        kn = 0;

    function _n() {
        return kn > 0
    }

    function Sn(t, n, r) {
        if (void 0 === n && (n = {}), "function" != typeof t) return t;
        try {
            if (t.__sentry__) return t;
            if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (n) {
            return t
        }
        var sentryWrapped = function() {
            var e = Array.prototype.slice.call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                var i = e.map(function(t) {
                    return Sn(t, n)
                });
                return t.handleEvent ? t.handleEvent.apply(this, i) : t.apply(this, i)
            } catch (t) {
                throw kn += 1, setTimeout(function() {
                    kn -= 1
                }), Ft(function(r) {
                    r.addEventProcessor(function(t) {
                        var r = u({}, t);
                        return n.mechanism && (I(r, void 0, void 0), N(r, n.mechanism)), r.extra = u(u({}, r.extra), {
                            arguments: e
                        }), r
                    }), captureException(t)
                }), t
            }
        };
        try {
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (sentryWrapped[e] = t[e])
        } catch (t) {}
        t.prototype = t.prototype || {}, sentryWrapped.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: sentryWrapped
        }), Object.defineProperties(sentryWrapped, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: t
            }
        });
        try {
            Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (t) {}
        return sentryWrapped
    }

    function Tn(t) {
        if (void 0 === t && (t = {}), t.eventId)
            if (t.dsn) {
                var n = document.createElement("script");
                n.async = !0, n.src = new Pt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (n.onload = t.onLoad), (document.head || document.body).appendChild(n)
            } else z.error("Missing dsn option in showReportDialog call");
        else z.error("Missing eventId option in showReportDialog call")
    }
    var On = function() {
            function n(t) {
                this.name = n.id, this.Dt = !1, this.Rt = !1, this.it = u({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return n.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this.it.onerror && (z.log("Global Handler attached: onerror"), this.It()), this.it.onunhandledrejection && (z.log("Global Handler attached: onunhandledrejection"), this.Nt())
            }, n.prototype.It = function() {
                var t = this;
                this.Dt || (dt({
                    callback: function(r) {
                        var e = r.error,
                            i = At(),
                            o = i.getIntegration(n),
                            u = e && !0 === e.__sentry_own_request__;
                        if (o && !_n() && !u) {
                            var c = i.getClient(),
                                a = p(e) ? t.Ct(r.msg, r.url, r.line, r.column) : t.Mt(yn(e, void 0, {
                                    attachStacktrace: c && c.getOptions().attachStacktrace,
                                    rejection: !1
                                }), r.url, r.line, r.column);
                            N(a, {
                                handled: !1,
                                type: "onerror"
                            }), i.captureEvent(a, {
                                originalException: e
                            })
                        }
                    },
                    type: "error"
                }), this.Dt = !0)
            }, n.prototype.Nt = function() {
                var r = this;
                this.Rt || (dt({
                    callback: function(e) {
                        var i = e;
                        try {
                            "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
                        } catch (t) {}
                        var o = At(),
                            u = o.getIntegration(n),
                            c = i && !0 === i.__sentry_own_request__;
                        if (!u || _n() || c) return !0;
                        var a = o.getClient(),
                            s = p(i) ? r.At(i) : yn(i, void 0, {
                                attachStacktrace: a && a.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        s.level = t.Severity.Error, N(s, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), o.captureEvent(s, {
                            originalException: i
                        })
                    },
                    type: "unhandledrejection"
                }), this.Rt = !0)
            }, n.prototype.Ct = function(t, n, r, e) {
                var i, o = v(t) ? t.message : t;
                if (d(o)) {
                    var u = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    u && (i = u[1], o = u[2])
                }
                var c = {
                    exception: {
                        values: [{
                            type: i || "Error",
                            value: o
                        }]
                    }
                };
                return this.Mt(c, n, r, e)
            }, n.prototype.At = function(t) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + t
                        }]
                    }
                }
            }, n.prototype.Mt = function(t, n, r, e) {
                t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                var i = isNaN(parseInt(e, 10)) ? void 0 : e,
                    o = isNaN(parseInt(r, 10)) ? void 0 : r,
                    u = d(n) && n.length > 0 ? n : function() {
                        try {
                            return document.location.href
                        } catch (t) {
                            return ""
                        }
                    }();
                return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                    colno: i,
                    filename: u,
                    function: "?",
                    in_app: !0,
                    lineno: o
                }), t
            }, n.id = "GlobalHandlers", n
        }(),
        Dn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Rn = function() {
            function t(n) {
                this.name = t.id, this.it = u({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, n)
            }
            return t.prototype.setupOnce = function() {
                var t = S();
                (this.it.setTimeout && K(t, "setTimeout", this.qt.bind(this)), this.it.setInterval && K(t, "setInterval", this.qt.bind(this)), this.it.requestAnimationFrame && K(t, "requestAnimationFrame", this.Ut.bind(this)), this.it.XMLHttpRequest && "XMLHttpRequest" in t && K(XMLHttpRequest.prototype, "send", this.Lt.bind(this)), this.it.eventTarget) && (Array.isArray(this.it.eventTarget) ? this.it.eventTarget : Dn).forEach(this.Ht.bind(this))
            }, t.prototype.qt = function(t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var e = n[0];
                    return n[0] = Sn(e, {
                        mechanism: {
                            data: {
                                function: W(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }, t.prototype.Ut = function(t) {
                return function(n) {
                    return t.call(this, Sn(n, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: W(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype.Ht = function(t) {
                var n = S(),
                    r = n[t] && n[t].prototype;
                r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (K(r, "addEventListener", function(n) {
                    return function(r, e, i) {
                        try {
                            "function" == typeof e.handleEvent && (e.handleEvent = Sn(e.handleEvent.bind(e), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: W(e),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return n.call(this, r, Sn(e, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: W(e),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i)
                    }
                }), K(r, "removeEventListener", function(t) {
                    return function(n, r, e) {
                        try {
                            t.call(this, n, r.__sentry_wrapped__, e)
                        } catch (t) {}
                        return t.call(this, n, r, e)
                    }
                }))
            }, t.prototype.Lt = function(t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var e = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(t) {
                        t in e && "function" == typeof e[t] && K(e, t, function(n) {
                            var r = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: W(n)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return n.__sentry_original__ && (r.mechanism.data.handler = W(n.__sentry_original__)), Sn(n, r)
                        })
                    }), t.apply(this, n)
                }
            }, t.id = "TryCatch", t
        }(),
        In = function() {
            function n(t) {
                this.name = n.id, this.it = u({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return n.prototype.addSentryBreadcrumb = function(t) {
                this.it.sentry && At().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: D(t)
                }, {
                    event: t
                })
            }, n.prototype.setupOnce = function() {
                var t = this;
                this.it.console && dt({
                    callback: function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Ft.apply(t, a(n))
                    },
                    type: "console"
                }), this.it.dom && dt({
                    callback: function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Pt.apply(t, a(n))
                    },
                    type: "dom"
                }), this.it.xhr && dt({
                    callback: function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Xt.apply(t, a(n))
                    },
                    type: "xhr"
                }), this.it.fetch && dt({
                    callback: function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Wt.apply(t, a(n))
                    },
                    type: "fetch"
                }), this.it.history && dt({
                    callback: function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.$t.apply(t, a(n))
                    },
                    type: "history"
                })
            }, n.prototype.Ft = function(n) {
                var r = {
                    category: "console",
                    data: {
                        arguments: n.args,
                        logger: "console"
                    },
                    level: t.Severity.fromString(n.level),
                    message: x(n.args, " ")
                };
                if ("assert" === n.level) {
                    if (!1 !== n.args[0]) return;
                    r.message = "Assertion failed: " + (x(n.args.slice(1), " ") || "console.assert"), r.data.arguments = n.args.slice(1)
                }
                At().addBreadcrumb(r, {
                    input: n.args,
                    level: n.level
                })
            }, n.prototype.Pt = function(t) {
                var n;
                try {
                    n = t.event.target ? C(t.event.target) : C(t.event)
                } catch (t) {
                    n = "<unknown>"
                }
                0 !== n.length && At().addBreadcrumb({
                    category: "ui." + t.name,
                    message: n
                }, {
                    event: t.event,
                    name: t.name
                })
            }, n.prototype.Xt = function(t) {
                if (t.endTimestamp) {
                    if (t.xhr.__sentry_own_request__) return;
                    At().addBreadcrumb({
                        category: "xhr",
                        data: t.xhr.__sentry_xhr__,
                        type: "http"
                    }, {
                        xhr: t.xhr
                    })
                } else;
            }, n.prototype.Wt = function(n) {
                n.endTimestamp && (n.fetchData.url.match(/sentry_key/) && "POST" === n.fetchData.method || (n.error ? At().addBreadcrumb({
                    category: "fetch",
                    data: n.fetchData,
                    level: t.Severity.Error,
                    type: "http"
                }, {
                    data: n.error,
                    input: n.args
                }) : At().addBreadcrumb({
                    category: "fetch",
                    data: u(u({}, n.fetchData), {
                        status_code: n.response.status
                    }),
                    type: "http"
                }, {
                    input: n.args,
                    response: n.response
                })))
            }, n.prototype.$t = function(t) {
                var n = S(),
                    r = t.from,
                    e = t.to,
                    i = O(n.location.href),
                    o = O(r),
                    u = O(e);
                o.path || (o = i), i.protocol === u.protocol && i.host === u.host && (e = u.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), At().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: r,
                        to: e
                    }
                })
            }, n.id = "Breadcrumbs", n
        }(),
        Nn = "cause",
        Cn = 5,
        Mn = function() {
            function t(n) {
                void 0 === n && (n = {}), this.name = t.id, this.Bt = n.key || Nn, this.k = n.limit || Cn
            }
            return t.prototype.setupOnce = function() {
                Rt(function(n, r) {
                    var e = At().getIntegration(t);
                    return e ? e.Gt(n, r) : n
                })
            }, t.prototype.Gt = function(t, n) {
                if (!(t.exception && t.exception.values && n && g(n.originalException, Error))) return t;
                var r = this.Jt(n.originalException, this.Bt);
                return t.exception.values = a(r, t.exception.values), t
            }, t.prototype.Jt = function(t, n, r) {
                if (void 0 === r && (r = []), !g(t[n], Error) || r.length + 1 >= this.k) return r;
                var e = hn(cn(t[n]));
                return this.Jt(t[n], n, a([e], r))
            }, t.id = "LinkedErrors", t
        }(),
        An = S(),
        qn = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                Rt(function(n) {
                    if (At().getIntegration(t)) {
                        if (!An.navigator || !An.location) return n;
                        var r = n.request || {};
                        return r.url = r.url || An.location.href, r.headers = r.headers || {}, r.headers["User-Agent"] = An.navigator.userAgent, u(u({}, n), {
                            request: r
                        })
                    }
                    return n
                })
            }, t.id = "UserAgent", t
        }(),
        Un = Object.freeze({
            __proto__: null,
            GlobalHandlers: On,
            TryCatch: Rn,
            Breadcrumbs: In,
            LinkedErrors: Mn,
            UserAgent: qn
        }),
        Ln = "sentry.javascript.browser",
        Hn = function(t) {
            function n(n) {
                return void 0 === n && (n = {}), t.call(this, jn, n) || this
            }
            return r(n, t), n.prototype.showReportDialog = function(t) {
                void 0 === t && (t = {}), S().document && (this.st() ? Tn(u(u({}, t), {
                    dsn: t.dsn || this.getDsn()
                })) : z.error("Trying to call showReportDialog with Sentry Client disabled"))
            }, n.prototype.ft = function(n, r, e) {
                return n.platform = n.platform || "javascript", n.sdk = u(u({}, n.sdk), {
                    name: Ln,
                    packages: a(n.sdk && n.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: "5.23.0"
                    }]),
                    version: "5.23.0"
                }), t.prototype.ft.call(this, n, r, e)
            }, n.prototype.dt = function(n) {
                var r = this.getIntegration(In);
                r && r.addSentryBreadcrumb(n), t.prototype.dt.call(this, n)
            }, n
        }(Bt),
        Fn = [new Qt, new Vt, new Rn, new In, new On, new Mn, new qn];
    var Pn = {},
        Xn = S();
    Xn.Sentry && Xn.Sentry.Integrations && (Pn = Xn.Sentry.Integrations);
    var Wn = u(u(u({}, Pn), Yt), Un);
    return t.BrowserClient = Hn, t.Hub = Nt, t.Integrations = Wn, t.SDK_NAME = Ln, t.SDK_VERSION = "5.23.0", t.Scope = Ot, t.Transports = xn, t.addBreadcrumb = function(t) {
        Ht("addBreadcrumb", t)
    }, t.addGlobalEventProcessor = Rt, t.captureEvent = function(t) {
        return Ht("captureEvent", t)
    }, t.captureException = captureException, t.captureMessage = function(t, n) {
        var r;
        try {
            throw new Error(t)
        } catch (t) {
            r = t
        }
        return Ht("captureMessage", t, "string" == typeof n ? n : void 0, u({
            originalException: t,
            syntheticException: r
        }, "string" != typeof n ? {
            captureContext: n
        } : void 0))
    }, t.close = function(t) {
        var n = At().getClient();
        return n ? n.close(t) : it.reject(!1)
    }, t.configureScope = function(t) {
        Ht("configureScope", t)
    }, t.defaultIntegrations = Fn, t.eventFromException = dn, t.eventFromMessage = pn, t.flush = function(t) {
        var n = At().getClient();
        return n ? n.flush(t) : it.reject(!1)
    }, t.forceLoad = function() {}, t.getCurrentHub = At, t.getHubFromCarrier = Ut, t.init = function(t) {
        if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = Fn), void 0 === t.release) {
            var n = S();
            n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (t.release = n.SENTRY_RELEASE.id)
        }! function(t, n) {
            !0 === n.debug && z.enable();
            var r = At(),
                e = new t(n);
            r.bindClient(e)
        }(Hn, t)
    }, t.injectReportDialog = Tn, t.lastEventId = function() {
        return At().lastEventId()
    }, t.makeMain = Mt, t.onLoad = function(t) {
        t()
    }, t.setContext = function(t, n) {
        Ht("setContext", t, n)
    }, t.setExtra = function(t, n) {
        Ht("setExtra", t, n)
    }, t.setExtras = function(t) {
        Ht("setExtras", t)
    }, t.setTag = function(t, n) {
        Ht("setTag", t, n)
    }, t.setTags = function(t) {
        Ht("setTags", t)
    }, t.setUser = function(t) {
        Ht("setUser", t)
    }, t.showReportDialog = function(t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = At().lastEventId());
        var n = At().getClient();
        n && n.showReportDialog(t)
    }, t.startTransaction = function(t) {
        return Ht("startTransaction", u({}, t))
    }, t.withScope = Ft, t.wrap = function(t) {
        return Sn(t)()
    }, t
}({});