/*! License information is available at https://static.cdn.printful.com/dist-pf/78345.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [78345], {
        78345: (t, e) => {
            function r(t, e) {
                for (var r in e) t[r] = e[r];
                return t
            }
            var n = /[!'()*]/g,
                o = function(t) {
                    return "%" + t.charCodeAt(0).toString(16)
                },
                i = /%2C/g,
                a = function(t) {
                    return encodeURIComponent(t).replace(n, o).replace(i, ",")
                };

            function s(t) {
                try {
                    return decodeURIComponent(t)
                } catch (t) {
                    0
                }
                return t
            }
            var u = function(t) {
                return null == t || "object" == typeof t ? t : String(t)
            };

            function c(t) {
                var e = {};
                return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach((function(t) {
                    var r = t.replace(/\+/g, " ").split("="),
                        n = s(r.shift()),
                        o = r.length > 0 ? s(r.join("=")) : null;
                    void 0 === e[n] ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
                })), e) : e
            }

            function p(t) {
                var e = t ? Object.keys(t).map((function(e) {
                    var r = t[e];
                    if (void 0 === r) return "";
                    if (null === r) return a(e);
                    if (Array.isArray(r)) {
                        var n = [];
                        return r.forEach((function(t) {
                            void 0 !== t && (null === t ? n.push(a(e)) : n.push(a(e) + "=" + a(t)))
                        })), n.join("&")
                    }
                    return a(e) + "=" + a(r)
                })).filter((function(t) {
                    return t.length > 0
                })).join("&") : null;
                return e ? "?" + e : ""
            }
            var f = /\/?$/;

            function h(t, e, r, n) {
                var o = n && n.options.stringifyQuery,
                    i = e.query || {};
                try {
                    i = l(i)
                } catch (t) {}
                var a = {
                    name: e.name || t && t.name,
                    meta: t && t.meta || {},
                    path: e.path || "/",
                    hash: e.hash || "",
                    query: i,
                    params: e.params || {},
                    fullPath: y(e, o),
                    matched: t ? v(t) : []
                };
                return r && (a.redirectedFrom = y(r, o)), Object.freeze(a)
            }

            function l(t) {
                if (Array.isArray(t)) return t.map(l);
                if (t && "object" == typeof t) {
                    var e = {};
                    for (var r in t) e[r] = l(t[r]);
                    return e
                }
                return t
            }
            var d = h(null, {
                path: "/"
            });

            function v(t) {
                for (var e = []; t;) e.unshift(t), t = t.parent;
                return e
            }

            function y(t, e) {
                var r = t.path,
                    n = t.query;
                void 0 === n && (n = {});
                var o = t.hash;
                return void 0 === o && (o = ""), (r || "/") + (e || p)(n) + o
            }

            function m(t, e, r) {
                return e === d ? t === e : !!e && (t.path && e.path ? t.path.replace(f, "") === e.path.replace(f, "") && (r || t.hash === e.hash && g(t.query, e.query)) : !(!t.name || !e.name) && (t.name === e.name && (r || t.hash === e.hash && g(t.query, e.query) && g(t.params, e.params))))
            }

            function g(t, e) {
                if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e;
                var r = Object.keys(t).sort(),
                    n = Object.keys(e).sort();
                return r.length === n.length && r.every((function(r, o) {
                    var i = t[r];
                    if (n[o] !== r) return !1;
                    var a = e[r];
                    return null == i || null == a ? i === a : "object" == typeof i && "object" == typeof a ? g(i, a) : String(i) === String(a)
                }))
            }

            function w(t) {
                for (var e = 0; e < t.matched.length; e++) {
                    var r = t.matched[e];
                    for (var n in r.instances) {
                        var o = r.instances[n],
                            i = r.enteredCbs[n];
                        if (o && i) {
                            delete r.enteredCbs[n];
                            for (var a = 0; a < i.length; a++) o._isBeingDestroyed || i[a](o)
                        }
                    }
                }
            }
            var b = {
                name: "RouterView",
                functional: !0,
                props: {
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                render: function(t, e) {
                    var n = e.props,
                        o = e.children,
                        i = e.parent,
                        a = e.data;
                    a.routerView = !0;
                    for (var s = i.$createElement, u = n.name, c = i.$route, p = i._routerViewCache || (i._routerViewCache = {}), f = 0, h = !1; i && i._routerRoot !== i;) {
                        var l = i.$vnode ? i.$vnode.data : {};
                        l.routerView && f++, l.keepAlive && i._directInactive && i._inactive && (h = !0), i = i.$parent
                    }
                    if (a.routerViewDepth = f, h) {
                        var d = p[u],
                            v = d && d.component;
                        return v ? (d.configProps && E(v, a, d.route, d.configProps), s(v, a, o)) : s()
                    }
                    var y = c.matched[f],
                        m = y && y.components[u];
                    if (!y || !m) return p[u] = null, s();
                    p[u] = {
                        component: m
                    }, a.registerRouteInstance = function(t, e) {
                        var r = y.instances[u];
                        (e && r !== t || !e && r === t) && (y.instances[u] = e)
                    }, (a.hook || (a.hook = {})).prepatch = function(t, e) {
                        y.instances[u] = e.componentInstance
                    }, a.hook.init = function(t) {
                        t.data.keepAlive && t.componentInstance && t.componentInstance !== y.instances[u] && (y.instances[u] = t.componentInstance), w(c)
                    };
                    var g = y.props && y.props[u];
                    return g && (r(p[u], {
                        route: c,
                        configProps: g
                    }), E(m, a, c, g)), s(m, a, o)
                }
            };

            function E(t, e, n, o) {
                var i = e.props = function(t, e) {
                    switch (typeof e) {
                        case "undefined":
                            return;
                        case "object":
                            return e;
                        case "function":
                            return e(t);
                        case "boolean":
                            return e ? t.params : void 0
                    }
                }(n, o);
                if (i) {
                    i = e.props = r({}, i);
                    var a = e.attrs = e.attrs || {};
                    for (var s in i) t.props && s in t.props || (a[s] = i[s], delete i[s])
                }
            }

            function x(t, e, r) {
                var n = t.charAt(0);
                if ("/" === n) return t;
                if ("?" === n || "#" === n) return e + t;
                var o = e.split("/");
                r && o[o.length - 1] || o.pop();
                for (var i = t.replace(/^\//, "").split("/"), a = 0; a < i.length; a++) {
                    var s = i[a];
                    ".." === s ? o.pop() : "." !== s && o.push(s)
                }
                return "" !== o[0] && o.unshift(""), o.join("/")
            }

            function R(t) {
                return t.replace(/\/(?:\s*\/)+/g, "/")
            }
            var k = Array.isArray || function(t) {
                    return "[object Array]" == Object.prototype.toString.call(t)
                },
                C = I,
                A = T,
                O = function(t, e) {
                    return L(T(t, e), e)
                },
                _ = L,
                j = B,
                S = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function T(t, e) {
                for (var r, n = [], o = 0, i = 0, a = "", s = e && e.delimiter || "/"; null != (r = S.exec(t));) {
                    var u = r[0],
                        c = r[1],
                        p = r.index;
                    if (a += t.slice(i, p), i = p + u.length, c) a += c[1];
                    else {
                        var f = t[i],
                            h = r[2],
                            l = r[3],
                            d = r[4],
                            v = r[5],
                            y = r[6],
                            m = r[7];
                        a && (n.push(a), a = "");
                        var g = null != h && null != f && f !== h,
                            w = "+" === y || "*" === y,
                            b = "?" === y || "*" === y,
                            E = r[2] || s,
                            x = d || v;
                        n.push({
                            name: l || o++,
                            prefix: h || "",
                            delimiter: E,
                            optional: b,
                            repeat: w,
                            partial: g,
                            asterisk: !!m,
                            pattern: x ? q(x) : m ? ".*" : "[^" + $(E) + "]+?"
                        })
                    }
                }
                return i < t.length && (a += t.substr(i)), a && n.push(a), n
            }

            function P(t) {
                return encodeURI(t).replace(/[\/?#]/g, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function L(t, e) {
                for (var r = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (r[n] = new RegExp("^(?:" + t[n].pattern + ")$", U(e)));
                return function(e, n) {
                    for (var o = "", i = e || {}, a = (n || {}).pretty ? P : encodeURIComponent, s = 0; s < t.length; s++) {
                        var u = t[s];
                        if ("string" != typeof u) {
                            var c, p = i[u.name];
                            if (null == p) {
                                if (u.optional) {
                                    u.partial && (o += u.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + u.name + '" to be defined')
                            }
                            if (k(p)) {
                                if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                                if (0 === p.length) {
                                    if (u.optional) continue;
                                    throw new TypeError('Expected "' + u.name + '" to not be empty')
                                }
                                for (var f = 0; f < p.length; f++) {
                                    if (c = a(p[f]), !r[s].test(c)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(c) + "`");
                                    o += (0 === f ? u.prefix : u.delimiter) + c
                                }
                            } else {
                                if (c = u.asterisk ? encodeURI(p).replace(/[?#]/g, (function(t) {
                                        return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                                    })) : a(p), !r[s].test(c)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + c + '"');
                                o += u.prefix + c
                            }
                        } else o += u
                    }
                    return o
                }
            }

            function $(t) {
                return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function q(t) {
                return t.replace(/([=!:$\/()])/g, "\\$1")
            }

            function N(t, e) {
                return t.keys = e, t
            }

            function U(t) {
                return t && t.sensitive ? "" : "i"
            }

            function B(t, e, r) {
                k(e) || (r = e || r, e = []);
                for (var n = (r = r || {}).strict, o = !1 !== r.end, i = "", a = 0; a < t.length; a++) {
                    var s = t[a];
                    if ("string" == typeof s) i += $(s);
                    else {
                        var u = $(s.prefix),
                            c = "(?:" + s.pattern + ")";
                        e.push(s), s.repeat && (c += "(?:" + u + c + ")*"), i += c = s.optional ? s.partial ? u + "(" + c + ")?" : "(?:" + u + "(" + c + "))?" : u + "(" + c + ")"
                    }
                }
                var p = $(r.delimiter || "/"),
                    f = i.slice(-p.length) === p;
                return n || (i = (f ? i.slice(0, -p.length) : i) + "(?:" + p + "(?=$))?"), i += o ? "$" : n && f ? "" : "(?=" + p + "|$)", N(new RegExp("^" + i, U(r)), e)
            }

            function I(t, e, r) {
                return k(e) || (r = e || r, e = []), r = r || {}, t instanceof RegExp ? function(t, e) {
                    var r = t.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) e.push({
                            name: n,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null
                        });
                    return N(t, e)
                }(t, e) : k(t) ? function(t, e, r) {
                    for (var n = [], o = 0; o < t.length; o++) n.push(I(t[o], e, r).source);
                    return N(new RegExp("(?:" + n.join("|") + ")", U(r)), e)
                }(t, e, r) : function(t, e, r) {
                    return B(T(t, r), e, r)
                }(t, e, r)
            }
            C.parse = A, C.compile = O, C.tokensToFunction = _, C.tokensToRegExp = j;
            var M = Object.create(null);

            function V(t, e, r) {
                e = e || {};
                try {
                    var n = M[t] || (M[t] = C.compile(t));
                    return "string" == typeof e.pathMatch && (e[0] = e.pathMatch), n(e, {
                        pretty: !0
                    })
                } catch (t) {
                    return ""
                } finally {
                    delete e[0]
                }
            }

            function H(t, e, n, o) {
                var i = "string" == typeof t ? {
                    path: t
                } : t;
                if (i._normalized) return i;
                if (i.name) {
                    var a = (i = r({}, t)).params;
                    return a && "object" == typeof a && (i.params = r({}, a)), i
                }
                if (!i.path && i.params && e) {
                    (i = r({}, i))._normalized = !0;
                    var s = r(r({}, e.params), i.params);
                    if (e.name) i.name = e.name, i.params = s;
                    else if (e.matched.length) {
                        var p = e.matched[e.matched.length - 1].path;
                        i.path = V(p, s, e.path)
                    } else 0;
                    return i
                }
                var f = function(t) {
                        var e = "",
                            r = "",
                            n = t.indexOf("#");
                        n >= 0 && (e = t.slice(n), t = t.slice(0, n));
                        var o = t.indexOf("?");
                        return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), {
                            path: t,
                            query: r,
                            hash: e
                        }
                    }(i.path || ""),
                    h = e && e.path || "/",
                    l = f.path ? x(f.path, h, n || i.append) : h,
                    d = function(t, e, r) {
                        void 0 === e && (e = {});
                        var n, o = r || c;
                        try {
                            n = o(t || "")
                        } catch (t) {
                            n = {}
                        }
                        for (var i in e) {
                            var a = e[i];
                            n[i] = Array.isArray(a) ? a.map(u) : u(a)
                        }
                        return n
                    }(f.query, i.query, o && o.options.parseQuery),
                    v = i.hash || f.hash;
                return v && "#" !== v.charAt(0) && (v = "#" + v), {
                    _normalized: !0,
                    path: l,
                    query: d,
                    hash: v
                }
            }
            var F, z = function() {},
                D = {
                    name: "RouterLink",
                    props: {
                        to: {
                            type: [String, Object],
                            required: !0
                        },
                        tag: {
                            type: String,
                            default: "a"
                        },
                        custom: Boolean,
                        exact: Boolean,
                        exactPath: Boolean,
                        append: Boolean,
                        replace: Boolean,
                        activeClass: String,
                        exactActiveClass: String,
                        ariaCurrentValue: {
                            type: String,
                            default: "page"
                        },
                        event: {
                            type: [String, Array],
                            default: "click"
                        }
                    },
                    render: function(t) {
                        var e = this,
                            n = this.$router,
                            o = this.$route,
                            i = n.resolve(this.to, o, this.append),
                            a = i.location,
                            s = i.route,
                            u = i.href,
                            c = {},
                            p = n.options.linkActiveClass,
                            l = n.options.linkExactActiveClass,
                            d = null == p ? "router-link-active" : p,
                            v = null == l ? "router-link-exact-active" : l,
                            y = null == this.activeClass ? d : this.activeClass,
                            g = null == this.exactActiveClass ? v : this.exactActiveClass,
                            w = s.redirectedFrom ? h(null, H(s.redirectedFrom), null, n) : s;
                        c[g] = m(o, w, this.exactPath), c[y] = this.exact || this.exactPath ? c[g] : function(t, e) {
                            return 0 === t.path.replace(f, "/").indexOf(e.path.replace(f, "/")) && (!e.hash || t.hash === e.hash) && function(t, e) {
                                for (var r in e)
                                    if (!(r in t)) return !1;
                                return !0
                            }(t.query, e.query)
                        }(o, w);
                        var b = c[g] ? this.ariaCurrentValue : null,
                            E = function(t) {
                                K(t) && (e.replace ? n.replace(a, z) : n.push(a, z))
                            },
                            x = {
                                click: K
                            };
                        Array.isArray(this.event) ? this.event.forEach((function(t) {
                            x[t] = E
                        })) : x[this.event] = E;
                        var R = {
                                class: c
                            },
                            k = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
                                href: u,
                                route: s,
                                navigate: E,
                                isActive: c[y],
                                isExactActive: c[g]
                            });
                        if (k) {
                            if (1 === k.length) return k[0];
                            if (k.length > 1 || !k.length) return 0 === k.length ? t() : t("span", {}, k)
                        }
                        if ("a" === this.tag) R.on = x, R.attrs = {
                            href: u,
                            "aria-current": b
                        };
                        else {
                            var C = J(this.$slots.default);
                            if (C) {
                                C.isStatic = !1;
                                var A = C.data = r({}, C.data);
                                for (var O in A.on = A.on || {}, A.on) {
                                    var _ = A.on[O];
                                    O in x && (A.on[O] = Array.isArray(_) ? _ : [_])
                                }
                                for (var j in x) j in A.on ? A.on[j].push(x[j]) : A.on[j] = E;
                                var S = C.data.attrs = r({}, C.data.attrs);
                                S.href = u, S["aria-current"] = b
                            } else R.on = x
                        }
                        return t(this.tag, R, this.$slots.default)
                    }
                };

            function K(t) {
                if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
                    if (t.currentTarget && t.currentTarget.getAttribute) {
                        var e = t.currentTarget.getAttribute("target");
                        if (/\b_blank\b/i.test(e)) return
                    }
                    return t.preventDefault && t.preventDefault(), !0
                }
            }

            function J(t) {
                if (t)
                    for (var e, r = 0; r < t.length; r++) {
                        if ("a" === (e = t[r]).tag) return e;
                        if (e.children && (e = J(e.children))) return e
                    }
            }
            var Q = "undefined" != typeof window;

            function X(t, e, r, n, o) {
                var i = e || [],
                    a = r || Object.create(null),
                    s = n || Object.create(null);
                t.forEach((function(t) {
                    Y(i, a, s, t, o)
                }));
                for (var u = 0, c = i.length; u < c; u++) "*" === i[u] && (i.push(i.splice(u, 1)[0]), c--, u--);
                return {
                    pathList: i,
                    pathMap: a,
                    nameMap: s
                }
            }

            function Y(t, e, r, n, o, i) {
                var a = n.path,
                    s = n.name;
                var u = n.pathToRegexpOptions || {},
                    c = function(t, e, r) {
                        r || (t = t.replace(/\/$/, ""));
                        if ("/" === t[0]) return t;
                        if (null == e) return t;
                        return R(e.path + "/" + t)
                    }(a, o, u.strict);
                "boolean" == typeof n.caseSensitive && (u.sensitive = n.caseSensitive);
                var p = {
                    path: c,
                    regex: W(c, u),
                    components: n.components || {
                        default: n.component
                    },
                    alias: n.alias ? "string" == typeof n.alias ? [n.alias] : n.alias : [],
                    instances: {},
                    enteredCbs: {},
                    name: s,
                    parent: o,
                    matchAs: i,
                    redirect: n.redirect,
                    beforeEnter: n.beforeEnter,
                    meta: n.meta || {},
                    props: null == n.props ? {} : n.components ? n.props : {
                        default: n.props
                    }
                };
                if (n.children && n.children.forEach((function(n) {
                        var o = i ? R(i + "/" + n.path) : void 0;
                        Y(t, e, r, n, p, o)
                    })), e[p.path] || (t.push(p.path), e[p.path] = p), void 0 !== n.alias)
                    for (var f = Array.isArray(n.alias) ? n.alias : [n.alias], h = 0; h < f.length; ++h) {
                        0;
                        var l = {
                            path: f[h],
                            children: n.children
                        };
                        Y(t, e, r, l, o, p.path || "/")
                    }
                s && (r[s] || (r[s] = p))
            }

            function W(t, e) {
                return C(t, [], e)
            }

            function Z(t, e) {
                var r = X(t),
                    n = r.pathList,
                    o = r.pathMap,
                    i = r.nameMap;

                function a(t, r, a) {
                    var s = H(t, r, !1, e),
                        c = s.name;
                    if (c) {
                        var p = i[c];
                        if (!p) return u(null, s);
                        var f = p.regex.keys.filter((function(t) {
                            return !t.optional
                        })).map((function(t) {
                            return t.name
                        }));
                        if ("object" != typeof s.params && (s.params = {}), r && "object" == typeof r.params)
                            for (var h in r.params) !(h in s.params) && f.indexOf(h) > -1 && (s.params[h] = r.params[h]);
                        return s.path = V(p.path, s.params), u(p, s, a)
                    }
                    if (s.path) {
                        s.params = {};
                        for (var l = 0; l < n.length; l++) {
                            var d = n[l],
                                v = o[d];
                            if (G(v.regex, s.path, s.params)) return u(v, s, a)
                        }
                    }
                    return u(null, s)
                }

                function s(t, r) {
                    var n = t.redirect,
                        o = "function" == typeof n ? n(h(t, r, null, e)) : n;
                    if ("string" == typeof o && (o = {
                            path: o
                        }), !o || "object" != typeof o) return u(null, r);
                    var s = o,
                        c = s.name,
                        p = s.path,
                        f = r.query,
                        l = r.hash,
                        d = r.params;
                    if (f = s.hasOwnProperty("query") ? s.query : f, l = s.hasOwnProperty("hash") ? s.hash : l, d = s.hasOwnProperty("params") ? s.params : d, c) {
                        i[c];
                        return a({
                            _normalized: !0,
                            name: c,
                            query: f,
                            hash: l,
                            params: d
                        }, void 0, r)
                    }
                    if (p) {
                        var v = function(t, e) {
                            return x(t, e.parent ? e.parent.path : "/", !0)
                        }(p, t);
                        return a({
                            _normalized: !0,
                            path: V(v, d),
                            query: f,
                            hash: l
                        }, void 0, r)
                    }
                    return u(null, r)
                }

                function u(t, r, n) {
                    return t && t.redirect ? s(t, n || r) : t && t.matchAs ? function(t, e, r) {
                        var n = a({
                            _normalized: !0,
                            path: V(r, e.params)
                        });
                        if (n) {
                            var o = n.matched,
                                i = o[o.length - 1];
                            return e.params = n.params, u(i, e)
                        }
                        return u(null, e)
                    }(0, r, t.matchAs) : h(t, r, n, e)
                }
                return {
                    match: a,
                    addRoute: function(t, e) {
                        var r = "object" != typeof t ? i[t] : void 0;
                        X([e || t], n, o, i, r), r && r.alias.length && X(r.alias.map((function(t) {
                            return {
                                path: t,
                                children: [e]
                            }
                        })), n, o, i, r)
                    },
                    getRoutes: function() {
                        return n.map((function(t) {
                            return o[t]
                        }))
                    },
                    addRoutes: function(t) {
                        X(t, n, o, i)
                    }
                }
            }

            function G(t, e, r) {
                var n = e.match(t);
                if (!n) return !1;
                if (!r) return !0;
                for (var o = 1, i = n.length; o < i; ++o) {
                    var a = t.keys[o - 1];
                    a && (r[a.name || "pathMatch"] = "string" == typeof n[o] ? s(n[o]) : n[o])
                }
                return !0
            }
            var tt = Q && window.performance && window.performance.now ? window.performance : Date;

            function et() {
                return tt.now().toFixed(3)
            }
            var rt = et();

            function nt() {
                return rt
            }

            function ot(t) {
                return rt = t
            }
            var it = Object.create(null);

            function at() {
                "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
                var t = window.location.protocol + "//" + window.location.host,
                    e = window.location.href.replace(t, ""),
                    n = r({}, window.history.state);
                return n.key = nt(), window.history.replaceState(n, "", e), window.addEventListener("popstate", ct),
                    function() {
                        window.removeEventListener("popstate", ct)
                    }
            }

            function st(t, e, r, n) {
                if (t.app) {
                    var o = t.options.scrollBehavior;
                    o && t.app.$nextTick((function() {
                        var i = function() {
                                var t = nt();
                                if (t) return it[t]
                            }(),
                            a = o.call(t, e, r, n ? i : null);
                        a && ("function" == typeof a.then ? a.then((function(t) {
                            dt(t, i)
                        })).catch((function(t) {
                            0
                        })) : dt(a, i))
                    }))
                }
            }

            function ut() {
                var t = nt();
                t && (it[t] = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }

            function ct(t) {
                ut(), t.state && t.state.key && ot(t.state.key)
            }

            function pt(t) {
                return ht(t.x) || ht(t.y)
            }

            function ft(t) {
                return {
                    x: ht(t.x) ? t.x : window.pageXOffset,
                    y: ht(t.y) ? t.y : window.pageYOffset
                }
            }

            function ht(t) {
                return "number" == typeof t
            }
            var lt = /^#\d/;

            function dt(t, e) {
                var r, n = "object" == typeof t;
                if (n && "string" == typeof t.selector) {
                    var o = lt.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector);
                    if (o) {
                        var i = t.offset && "object" == typeof t.offset ? t.offset : {};
                        e = function(t, e) {
                            var r = document.documentElement.getBoundingClientRect(),
                                n = t.getBoundingClientRect();
                            return {
                                x: n.left - r.left - e.x,
                                y: n.top - r.top - e.y
                            }
                        }(o, i = {
                            x: ht((r = i).x) ? r.x : 0,
                            y: ht(r.y) ? r.y : 0
                        })
                    } else pt(t) && (e = ft(t))
                } else n && pt(t) && (e = ft(t));
                e && ("scrollBehavior" in document.documentElement.style ? window.scrollTo({
                    left: e.x,
                    top: e.y,
                    behavior: t.behavior
                }) : window.scrollTo(e.x, e.y))
            }
            var vt, yt = Q && ((-1 === (vt = window.navigator.userAgent).indexOf("Android 2.") && -1 === vt.indexOf("Android 4.0") || -1 === vt.indexOf("Mobile Safari") || -1 !== vt.indexOf("Chrome") || -1 !== vt.indexOf("Windows Phone")) && window.history && "function" == typeof window.history.pushState);

            function mt(t, e) {
                ut();
                var n = window.history;
                try {
                    if (e) {
                        var o = r({}, n.state);
                        o.key = nt(), n.replaceState(o, "", t)
                    } else n.pushState({
                        key: ot(et())
                    }, "", t)
                } catch (r) {
                    window.location[e ? "replace" : "assign"](t)
                }
            }

            function gt(t) {
                mt(t, !0)
            }

            function wt(t, e, r) {
                var n = function(o) {
                    o >= t.length ? r() : t[o] ? e(t[o], (function() {
                        n(o + 1)
                    })) : n(o + 1)
                };
                n(0)
            }
            var bt = {
                redirected: 2,
                aborted: 4,
                cancelled: 8,
                duplicated: 16
            };

            function createNavigationRedirectedError(t, e) {
                return createRouterError(t, e, bt.redirected, 'Redirected when going from "' + t.fullPath + '" to "' + function(t) {
                    if ("string" == typeof t) return t;
                    if ("path" in t) return t.path;
                    var e = {};
                    return Et.forEach((function(r) {
                        r in t && (e[r] = t[r])
                    })), JSON.stringify(e, null, 2)
                }(e) + '" via a navigation guard.')
            }

            function createNavigationCancelledError(t, e) {
                return createRouterError(t, e, bt.cancelled, 'Navigation cancelled from "' + t.fullPath + '" to "' + e.fullPath + '" with a new navigation.')
            }

            function createRouterError(t, e, r, n) {
                var o = new Error(n);
                return o._isRouter = !0, o.from = t, o.to = e, o.type = r, o
            }
            var Et = ["params", "query", "hash"];

            function isError(t) {
                return Object.prototype.toString.call(t).indexOf("Error") > -1
            }

            function xt(t, e) {
                return isError(t) && t._isRouter && (null == e || t.type === e)
            }

            function Rt(t) {
                return function(e, r, n) {
                    var o = !1,
                        i = 0,
                        a = null;
                    kt(t, (function(t, e, r, s) {
                        if ("function" == typeof t && void 0 === t.cid) {
                            o = !0, i++;
                            var u, c = Ot((function(e) {
                                    var o;
                                    ((o = e).__esModule || At && "Module" === o[Symbol.toStringTag]) && (e = e.default), t.resolved = "function" == typeof e ? e : F.extend(e), r.components[s] = e, --i <= 0 && n()
                                })),
                                p = Ot((function(t) {
                                    var e = "Failed to resolve async component " + s + ": " + t;
                                    a || (a = isError(t) ? t : new Error(e), n(a))
                                }));
                            try {
                                u = t(c, p)
                            } catch (t) {
                                p(t)
                            }
                            if (u)
                                if ("function" == typeof u.then) u.then(c, p);
                                else {
                                    var f = u.component;
                                    f && "function" == typeof f.then && f.then(c, p)
                                }
                        }
                    })), o || n()
                }
            }

            function kt(t, e) {
                return Ct(t.map((function(t) {
                    return Object.keys(t.components).map((function(r) {
                        return e(t.components[r], t.instances[r], t, r)
                    }))
                })))
            }

            function Ct(t) {
                return Array.prototype.concat.apply([], t)
            }
            var At = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;

            function Ot(t) {
                var e = !1;
                return function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    if (!e) return e = !0, t.apply(this, r)
                }
            }
            var _t = function(t, e) {
                this.router = t, this.base = function(t) {
                    if (!t)
                        if (Q) {
                            var e = document.querySelector("base");
                            t = (t = e && e.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "")
                        } else t = "/";
                    "/" !== t.charAt(0) && (t = "/" + t);
                    return t.replace(/\/$/, "")
                }(e), this.current = d, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = [], this.listeners = []
            };

            function jt(t, e, r, n) {
                var o = kt(t, (function(t, n, o, i) {
                    var a = function(t, e) {
                        "function" != typeof t && (t = F.extend(t));
                        return t.options[e]
                    }(t, e);
                    if (a) return Array.isArray(a) ? a.map((function(t) {
                        return r(t, n, o, i)
                    })) : r(a, n, o, i)
                }));
                return Ct(n ? o.reverse() : o)
            }

            function St(t, e) {
                if (e) return function() {
                    return t.apply(e, arguments)
                }
            }
            _t.prototype.listen = function(t) {
                this.cb = t
            }, _t.prototype.onReady = function(t, e) {
                this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e))
            }, _t.prototype.onError = function onError(t) {
                this.errorCbs.push(t)
            }, _t.prototype.transitionTo = function(t, e, r) {
                var n, o = this;
                try {
                    n = this.router.match(t, this.current)
                } catch (t) {
                    throw this.errorCbs.forEach((function(e) {
                        e(t)
                    })), t
                }
                var i = this.current;
                this.confirmTransition(n, (function() {
                    o.updateRoute(n), e && e(n), o.ensureURL(), o.router.afterHooks.forEach((function(t) {
                        t && t(n, i)
                    })), o.ready || (o.ready = !0, o.readyCbs.forEach((function(t) {
                        t(n)
                    })))
                }), (function(t) {
                    r && r(t), t && !o.ready && (xt(t, bt.redirected) && i === d || (o.ready = !0, o.readyErrorCbs.forEach((function(e) {
                        e(t)
                    }))))
                }))
            }, _t.prototype.confirmTransition = function(t, e, r) {
                var n = this,
                    o = this.current;
                this.pending = t;
                var i = function(t) {
                        !xt(t) && isError(t) && (n.errorCbs.length ? n.errorCbs.forEach((function(e) {
                            e(t)
                        })) : console.error(t)), r && r(t)
                    },
                    a = t.matched.length - 1,
                    s = o.matched.length - 1;
                if (m(t, o) && a === s && t.matched[a] === o.matched[s]) return this.ensureURL(), t.hash && st(this.router, o, t, !1), i(function createNavigationDuplicatedError(t, e) {
                    var r = createRouterError(t, e, bt.duplicated, 'Avoided redundant navigation to current location: "' + t.fullPath + '".');
                    return r.name = "NavigationDuplicated", r
                }(o, t));
                var u = function(t, e) {
                        var r, n = Math.max(t.length, e.length);
                        for (r = 0; r < n && t[r] === e[r]; r++);
                        return {
                            updated: e.slice(0, r),
                            activated: e.slice(r),
                            deactivated: t.slice(r)
                        }
                    }(this.current.matched, t.matched),
                    c = u.updated,
                    p = u.deactivated,
                    f = u.activated,
                    h = [].concat(function(t) {
                        return jt(t, "beforeRouteLeave", St, !0)
                    }(p), this.router.beforeHooks, function(t) {
                        return jt(t, "beforeRouteUpdate", St)
                    }(c), f.map((function(t) {
                        return t.beforeEnter
                    })), Rt(f)),
                    l = function(e, r) {
                        if (n.pending !== t) return i(createNavigationCancelledError(o, t));
                        try {
                            e(t, o, (function(e) {
                                !1 === e ? (n.ensureURL(!0), i(function createNavigationAbortedError(t, e) {
                                    return createRouterError(t, e, bt.aborted, 'Navigation aborted from "' + t.fullPath + '" to "' + e.fullPath + '" via a navigation guard.')
                                }(o, t))) : isError(e) ? (n.ensureURL(!0), i(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (i(createNavigationRedirectedError(o, t)), "object" == typeof e && e.replace ? n.replace(e) : n.push(e)) : r(e)
                            }))
                        } catch (t) {
                            i(t)
                        }
                    };
                wt(h, l, (function() {
                    var r = function(t) {
                        return jt(t, "beforeRouteEnter", (function(t, e, r, n) {
                            return function(t, e, r) {
                                return function(n, o, i) {
                                    return t(n, o, (function(t) {
                                        "function" == typeof t && (e.enteredCbs[r] || (e.enteredCbs[r] = []), e.enteredCbs[r].push(t)), i(t)
                                    }))
                                }
                            }(t, r, n)
                        }))
                    }(f);
                    wt(r.concat(n.router.resolveHooks), l, (function() {
                        if (n.pending !== t) return i(createNavigationCancelledError(o, t));
                        n.pending = null, e(t), n.router.app && n.router.app.$nextTick((function() {
                            w(t)
                        }))
                    }))
                }))
            }, _t.prototype.updateRoute = function(t) {
                this.current = t, this.cb && this.cb(t)
            }, _t.prototype.setupListeners = function() {}, _t.prototype.teardown = function() {
                this.listeners.forEach((function(t) {
                    t()
                })), this.listeners = [], this.current = d, this.pending = null
            };
            var Tt = function(t) {
                function e(e, r) {
                    t.call(this, e, r), this._startLocation = Pt(this.base)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() {
                    var t = this;
                    if (!(this.listeners.length > 0)) {
                        var e = this.router,
                            r = e.options.scrollBehavior,
                            n = yt && r;
                        n && this.listeners.push(at());
                        var o = function() {
                            var r = t.current,
                                o = Pt(t.base);
                            t.current === d && o === t._startLocation || t.transitionTo(o, (function(t) {
                                n && st(e, t, r, !0)
                            }))
                        };
                        window.addEventListener("popstate", o), this.listeners.push((function() {
                            window.removeEventListener("popstate", o)
                        }))
                    }
                }, e.prototype.go = function(t) {
                    window.history.go(t)
                }, e.prototype.push = function(t, e, r) {
                    var n = this,
                        o = this.current;
                    this.transitionTo(t, (function(t) {
                        mt(R(n.base + t.fullPath)), st(n.router, t, o, !1), e && e(t)
                    }), r)
                }, e.prototype.replace = function(t, e, r) {
                    var n = this,
                        o = this.current;
                    this.transitionTo(t, (function(t) {
                        gt(R(n.base + t.fullPath)), st(n.router, t, o, !1), e && e(t)
                    }), r)
                }, e.prototype.ensureURL = function(t) {
                    if (Pt(this.base) !== this.current.fullPath) {
                        var e = R(this.base + this.current.fullPath);
                        t ? mt(e) : gt(e)
                    }
                }, e.prototype.getCurrentLocation = function() {
                    return Pt(this.base)
                }, e
            }(_t);

            function Pt(t) {
                var e = window.location.pathname,
                    r = e.toLowerCase(),
                    n = t.toLowerCase();
                return !t || r !== n && 0 !== r.indexOf(R(n + "/")) || (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash
            }
            var Lt = function(t) {
                function e(e, r, n) {
                    t.call(this, e, r), n && function(t) {
                        var e = Pt(t);
                        if (!/^\/#/.test(e)) return window.location.replace(R(t + "/#" + e)), !0
                    }(this.base) || $t()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() {
                    var t = this;
                    if (!(this.listeners.length > 0)) {
                        var e = this.router.options.scrollBehavior,
                            r = yt && e;
                        r && this.listeners.push(at());
                        var n = function() {
                                var e = t.current;
                                $t() && t.transitionTo(qt(), (function(n) {
                                    r && st(t.router, n, e, !0), yt || Bt(n.fullPath)
                                }))
                            },
                            o = yt ? "popstate" : "hashchange";
                        window.addEventListener(o, n), this.listeners.push((function() {
                            window.removeEventListener(o, n)
                        }))
                    }
                }, e.prototype.push = function(t, e, r) {
                    var n = this,
                        o = this.current;
                    this.transitionTo(t, (function(t) {
                        Ut(t.fullPath), st(n.router, t, o, !1), e && e(t)
                    }), r)
                }, e.prototype.replace = function(t, e, r) {
                    var n = this,
                        o = this.current;
                    this.transitionTo(t, (function(t) {
                        Bt(t.fullPath), st(n.router, t, o, !1), e && e(t)
                    }), r)
                }, e.prototype.go = function(t) {
                    window.history.go(t)
                }, e.prototype.ensureURL = function(t) {
                    var e = this.current.fullPath;
                    qt() !== e && (t ? Ut(e) : Bt(e))
                }, e.prototype.getCurrentLocation = function() {
                    return qt()
                }, e
            }(_t);

            function $t() {
                var t = qt();
                return "/" === t.charAt(0) || (Bt("/" + t), !1)
            }

            function qt() {
                var t = window.location.href,
                    e = t.indexOf("#");
                return e < 0 ? "" : t = t.slice(e + 1)
            }

            function Nt(t) {
                var e = window.location.href,
                    r = e.indexOf("#");
                return (r >= 0 ? e.slice(0, r) : e) + "#" + t
            }

            function Ut(t) {
                yt ? mt(Nt(t)) : window.location.hash = t
            }

            function Bt(t) {
                yt ? gt(Nt(t)) : window.location.replace(Nt(t))
            }
            var It = function(t) {
                    function e(e, r) {
                        t.call(this, e, r), this.stack = [], this.index = -1
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e, r) {
                        var n = this;
                        this.transitionTo(t, (function(t) {
                            n.stack = n.stack.slice(0, n.index + 1).concat(t), n.index++, e && e(t)
                        }), r)
                    }, e.prototype.replace = function(t, e, r) {
                        var n = this;
                        this.transitionTo(t, (function(t) {
                            n.stack = n.stack.slice(0, n.index).concat(t), e && e(t)
                        }), r)
                    }, e.prototype.go = function(t) {
                        var e = this,
                            r = this.index + t;
                        if (!(r < 0 || r >= this.stack.length)) {
                            var n = this.stack[r];
                            this.confirmTransition(n, (function() {
                                var t = e.current;
                                e.index = r, e.updateRoute(n), e.router.afterHooks.forEach((function(e) {
                                    e && e(n, t)
                                }))
                            }), (function(t) {
                                xt(t, bt.duplicated) && (e.index = r)
                            }))
                        }
                    }, e.prototype.getCurrentLocation = function() {
                        var t = this.stack[this.stack.length - 1];
                        return t ? t.fullPath : "/"
                    }, e.prototype.ensureURL = function() {}, e
                }(_t),
                Mt = function(t) {
                    void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = Z(t.routes || [], this);
                    var e = t.mode || "hash";
                    switch (this.fallback = "history" === e && !yt && !1 !== t.fallback, this.fallback && (e = "hash"), Q || (e = "abstract"), this.mode = e, e) {
                        case "history":
                            this.history = new Tt(this, t.base);
                            break;
                        case "hash":
                            this.history = new Lt(this, t.base, this.fallback);
                            break;
                        case "abstract":
                            this.history = new It(this, t.base)
                    }
                },
                Vt = {
                    currentRoute: {
                        configurable: !0
                    }
                };

            function Ht(t, e) {
                return t.push(e),
                    function() {
                        var r = t.indexOf(e);
                        r > -1 && t.splice(r, 1)
                    }
            }
            Mt.prototype.match = function(t, e, r) {
                return this.matcher.match(t, e, r)
            }, Vt.currentRoute.get = function() {
                return this.history && this.history.current
            }, Mt.prototype.init = function(t) {
                var e = this;
                if (this.apps.push(t), t.$once("hook:destroyed", (function() {
                        var r = e.apps.indexOf(t);
                        r > -1 && e.apps.splice(r, 1), e.app === t && (e.app = e.apps[0] || null), e.app || e.history.teardown()
                    })), !this.app) {
                    this.app = t;
                    var r = this.history;
                    if (r instanceof Tt || r instanceof Lt) {
                        var n = function(t) {
                            r.setupListeners(),
                                function(t) {
                                    var n = r.current,
                                        o = e.options.scrollBehavior;
                                    yt && o && "fullPath" in t && st(e, t, n, !1)
                                }(t)
                        };
                        r.transitionTo(r.getCurrentLocation(), n, n)
                    }
                    r.listen((function(t) {
                        e.apps.forEach((function(e) {
                            e._route = t
                        }))
                    }))
                }
            }, Mt.prototype.beforeEach = function(t) {
                return Ht(this.beforeHooks, t)
            }, Mt.prototype.beforeResolve = function(t) {
                return Ht(this.resolveHooks, t)
            }, Mt.prototype.afterEach = function(t) {
                return Ht(this.afterHooks, t)
            }, Mt.prototype.onReady = function(t, e) {
                this.history.onReady(t, e)
            }, Mt.prototype.onError = function onError(t) {
                this.history.onError(t)
            }, Mt.prototype.push = function(t, e, r) {
                var n = this;
                if (!e && !r && "undefined" != typeof Promise) return new Promise((function(e, r) {
                    n.history.push(t, e, r)
                }));
                this.history.push(t, e, r)
            }, Mt.prototype.replace = function(t, e, r) {
                var n = this;
                if (!e && !r && "undefined" != typeof Promise) return new Promise((function(e, r) {
                    n.history.replace(t, e, r)
                }));
                this.history.replace(t, e, r)
            }, Mt.prototype.go = function(t) {
                this.history.go(t)
            }, Mt.prototype.back = function() {
                this.go(-1)
            }, Mt.prototype.forward = function() {
                this.go(1)
            }, Mt.prototype.getMatchedComponents = function(t) {
                var e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute;
                return e ? [].concat.apply([], e.matched.map((function(t) {
                    return Object.keys(t.components).map((function(e) {
                        return t.components[e]
                    }))
                }))) : []
            }, Mt.prototype.resolve = function(t, e, r) {
                var n = H(t, e = e || this.history.current, r, this),
                    o = this.match(n, e),
                    i = o.redirectedFrom || o.fullPath,
                    a = function(t, e, r) {
                        var n = "hash" === r ? "#" + e : e;
                        return t ? R(t + "/" + n) : n
                    }(this.history.base, i, this.mode);
                return {
                    location: n,
                    route: o,
                    href: a,
                    normalizedTo: n,
                    resolved: o
                }
            }, Mt.prototype.getRoutes = function() {
                return this.matcher.getRoutes()
            }, Mt.prototype.addRoute = function(t, e) {
                this.matcher.addRoute(t, e), this.history.current !== d && this.history.transitionTo(this.history.getCurrentLocation())
            }, Mt.prototype.addRoutes = function(t) {
                this.matcher.addRoutes(t), this.history.current !== d && this.history.transitionTo(this.history.getCurrentLocation())
            }, Object.defineProperties(Mt.prototype, Vt), Mt.install = function t(e) {
                if (!t.installed || F !== e) {
                    t.installed = !0, F = e;
                    var r = function(t) {
                            return void 0 !== t
                        },
                        n = function(t, e) {
                            var n = t.$options._parentVnode;
                            r(n) && r(n = n.data) && r(n = n.registerRouteInstance) && n(t, e)
                        };
                    e.mixin({
                        beforeCreate: function() {
                            r(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, n(this, this)
                        },
                        destroyed: function() {
                            n(this)
                        }
                    }), Object.defineProperty(e.prototype, "$router", {
                        get: function() {
                            return this._routerRoot._router
                        }
                    }), Object.defineProperty(e.prototype, "$route", {
                        get: function() {
                            return this._routerRoot._route
                        }
                    }), e.component("RouterView", b), e.component("RouterLink", D);
                    var o = e.config.optionMergeStrategies;
                    o.beforeRouteEnter = o.beforeRouteLeave = o.beforeRouteUpdate = o.created
                }
            }, Mt.version = "3.5.4", Mt.isNavigationFailure = xt, Mt.NavigationFailureType = bt, Mt.START_LOCATION = d, Q && window.Vue && window.Vue.use(Mt), e.Z = Mt
        }
    }
]);