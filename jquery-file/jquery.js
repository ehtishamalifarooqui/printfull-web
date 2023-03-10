(function(e, t) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = e.document ? t(e, true) : function(e) {
            if (!e.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return t(e)
        }
    } else {
        t(e)
    }
})(typeof window !== "undefined" ? window : this, function(h, e) {
    var t = [];
    var l = t.slice;
    var g = t.concat;
    var a = t.push;
    var r = t.indexOf;
    var n = {};
    var i = n.toString;
    var m = n.hasOwnProperty;
    var y = {};
    var v = h.document,
        o = "2.1.4",
        C = function(e, t) {
            return new C.fn.init(e, t)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        f = /-([\da-z])/gi,
        c = function(e, t) {
            return t.toUpperCase()
        };
    C.fn = C.prototype = {
        jquery: o,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : l.call(this)
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e, t) {
            return C.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    };
    C.extend = C.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            f = false;
        if (typeof s === "boolean") {
            f = s;
            s = arguments[a] || {};
            a++
        }
        if (typeof s !== "object" && !C.isFunction(s)) {
            s = {}
        }
        if (a === u) {
            s = this;
            a--
        }
        for (; a < u; a++) {
            if ((e = arguments[a]) != null) {
                for (t in e) {
                    n = s[t];
                    i = e[t];
                    if (s === i) {
                        continue
                    }
                    if (f && i && (C.isPlainObject(i) || (r = C.isArray(i)))) {
                        if (r) {
                            r = false;
                            o = n && C.isArray(n) ? n : []
                        } else {
                            o = n && C.isPlainObject(n) ? n : {}
                        }
                        s[t] = C.extend(f, o, i)
                    } else if (i !== undefined) {
                        s[t] = i
                    }
                }
            }
        }
        return s
    };
    C.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return C.type(e) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return e != null && e === e.window
        },
        isNumeric: function(e) {
            return !C.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            if (C.type(e) !== "object" || e.nodeType || C.isWindow(e)) {
                return false
            }
            if (e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf")) {
                return false
            }
            return true
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false
            }
            return true
        },
        type: function(e) {
            if (e == null) {
                return e + ""
            }
            return typeof e === "object" || typeof e === "function" ? n[i.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = C.trim(e);
            if (e) {
                if (e.indexOf("use strict") === 1) {
                    t = v.createElement("script");
                    t.text = e;
                    v.head.appendChild(t).parentNode.removeChild(t)
                } else {
                    n(e)
                }
            }
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(f, c)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i, r = 0,
                o = e.length,
                s = p(e);
            if (n) {
                if (s) {
                    for (; r < o; r++) {
                        i = t.apply(e[r], n);
                        if (i === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        i = t.apply(e[r], n);
                        if (i === false) {
                            break
                        }
                    }
                }
            } else {
                if (s) {
                    for (; r < o; r++) {
                        i = t.call(e[r], r, e[r]);
                        if (i === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        i = t.call(e[r], r, e[r]);
                        if (i === false) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(s, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            if (e != null) {
                if (p(Object(e))) {
                    C.merge(n, typeof e === "string" ? [e] : e)
                } else {
                    a.call(n, e)
                }
            }
            return n
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            var n = +t.length,
                i = 0,
                r = e.length;
            for (; i < n; i++) {
                e[r++] = t[i]
            }
            e.length = r;
            return e
        },
        grep: function(e, t, n) {
            var i, r = [],
                o = 0,
                s = e.length,
                a = !n;
            for (; o < s; o++) {
                i = !t(e[o], o);
                if (i !== a) {
                    r.push(e[o])
                }
            }
            return r
        },
        map: function(e, t, n) {
            var i, r = 0,
                o = e.length,
                s = p(e),
                a = [];
            if (s) {
                for (; r < o; r++) {
                    i = t(e[r], r, n);
                    if (i != null) {
                        a.push(i)
                    }
                }
            } else {
                for (r in e) {
                    i = t(e[r], r, n);
                    if (i != null) {
                        a.push(i)
                    }
                }
            }
            return g.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if (typeof t === "string") {
                n = e[t];
                t = e;
                e = n
            }
            if (!C.isFunction(e)) {
                return undefined
            }
            i = l.call(arguments, 2);
            r = function() {
                return e.apply(t || this, i.concat(l.call(arguments)))
            };
            r.guid = e.guid = e.guid || C.guid++;
            return r
        },
        now: Date.now,
        support: y
    });
    C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });

    function p(e) {
        var t = "length" in e && e.length,
            n = C.type(e);
        if (n === "function" || C.isWindow(e)) {
            return false
        }
        if (e.nodeType === 1 && t) {
            return true
        }
        return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
    }
    var d = function(n) {
        var e, h, w, o, i, g, c, m, b, f, l, y, T, r, v, x, s, a, C, k = "sizzle" + 1 * new Date,
            N = n.document,
            E = 0,
            p = 0,
            u = se(),
            d = se(),
            S = se(),
            D = function(e, t) {
                if (e === t) {
                    l = true
                }
                return 0
            },
            j = 1 << 31,
            A = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            q = t.push,
            H = t.push,
            O = t.slice,
            F = function(e, t) {
                var n = 0,
                    i = e.length;
                for (; n < i; n++) {
                    if (e[n] === t) {
                        return n
                    }
                }
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            W = M.replace("w", "w#"),
            $ = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
            I = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|" + ".*" + ")\\)|)",
            B = new RegExp(R + "+", "g"),
            _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            V = new RegExp(I),
            Y = new RegExp("^" + W + "$"),
            G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ie = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320)
            },
            re = function() {
                y()
            };
        try {
            H.apply(t = O.call(N.childNodes), N.childNodes);
            t[N.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    q.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        i = 0;
                    while (e[n++] = t[i++]) {}
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, i) {
            var r, o, s, a, u, f, l, c, p, d;
            if ((t ? t.ownerDocument || t : N) !== T) {
                y(t)
            }
            t = t || T;
            n = n || [];
            a = t.nodeType;
            if (typeof e !== "string" || !e || a !== 1 && a !== 9 && a !== 11) {
                return n
            }
            if (!i && v) {
                if (a !== 11 && (r = Z.exec(e))) {
                    if (s = r[1]) {
                        if (a === 9) {
                            o = t.getElementById(s);
                            if (o && o.parentNode) {
                                if (o.id === s) {
                                    n.push(o);
                                    return n
                                }
                            } else {
                                return n
                            }
                        } else {
                            if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && C(t, o) && o.id === s) {
                                n.push(o);
                                return n
                            }
                        }
                    } else if (r[2]) {
                        H.apply(n, t.getElementsByTagName(e));
                        return n
                    } else if ((s = r[3]) && h.getElementsByClassName) {
                        H.apply(n, t.getElementsByClassName(s));
                        return n
                    }
                }
                if (h.qsa && (!x || !x.test(e))) {
                    c = l = k;
                    p = t;
                    d = a !== 1 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        f = g(e);
                        if (l = t.getAttribute("id")) {
                            c = l.replace(te, "\\$&")
                        } else {
                            t.setAttribute("id", c)
                        }
                        c = "[id='" + c + "'] ";
                        u = f.length;
                        while (u--) {
                            f[u] = c + me(f[u])
                        }
                        p = ee.test(e) && he(t.parentNode) || t;
                        d = f.join(",")
                    }
                    if (d) {
                        try {
                            H.apply(n, p.querySelectorAll(d));
                            return n
                        } catch (e) {} finally {
                            if (!l) {
                                t.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return m(e.replace(_, "$1"), t, n, i)
        }

        function se() {
            var n = [];

            function i(e, t) {
                if (n.push(e + " ") > w.cacheLength) {
                    delete i[n.shift()]
                }
                return i[e + " "] = t
            }
            return i
        }

        function ae(e) {
            e[k] = true;
            return e
        }

        function ue(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return false
            } finally {
                if (t.parentNode) {
                    t.parentNode.removeChild(t)
                }
                t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) {
                w.attrHandle[n[i]] = t
            }
        }

        function le(e, t) {
            var n = t && e,
                i = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (i) {
                return i
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }

        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return t === "input" && e.type === n
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return (t === "input" || t === "button") && e.type === n
            }
        }

        function de(s) {
            return ae(function(o) {
                o = +o;
                return ae(function(e, t) {
                    var n, i = s([], e.length, o),
                        r = i.length;
                    while (r--) {
                        if (e[n = i[r]]) {
                            e[n] = !(t[n] = e[n])
                        }
                    }
                })
            })
        }

        function he(e) {
            return e && typeof e.getElementsByTagName !== "undefined" && e
        }
        h = oe.support = {};
        i = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : false
        };
        y = oe.setDocument = function(e) {
            var t, n, u = e ? e.ownerDocument || e : N;
            if (u === T || u.nodeType !== 9 || !u.documentElement) {
                return T
            }
            T = u;
            r = u.documentElement;
            n = u.defaultView;
            if (n && n !== n.top) {
                if (n.addEventListener) {
                    n.addEventListener("unload", re, false)
                } else if (n.attachEvent) {
                    n.attachEvent("onunload", re)
                }
            }
            v = !i(u);
            h.attributes = ue(function(e) {
                e.className = "i";
                return !e.getAttribute("className")
            });
            h.getElementsByTagName = ue(function(e) {
                e.appendChild(u.createComment(""));
                return !e.getElementsByTagName("*").length
            });
            h.getElementsByClassName = K.test(u.getElementsByClassName);
            h.getById = ue(function(e) {
                r.appendChild(e).id = k;
                return !u.getElementsByName || !u.getElementsByName(k).length
            });
            if (h.getById) {
                w.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && v) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                };
                w.filter["ID"] = function(e) {
                    var t = e.replace(ne, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete w.find["ID"];
                w.filter["ID"] = function(e) {
                    var n = e.replace(ne, ie);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }
            }
            w.find["TAG"] = h.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== "undefined") {
                    return t.getElementsByTagName(e)
                } else if (h.qsa) {
                    return t.querySelectorAll(e)
                }
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = o[r++]) {
                        if (n.nodeType === 1) {
                            i.push(n)
                        }
                    }
                    return i
                }
                return o
            };
            w.find["CLASS"] = h.getElementsByClassName && function(e, t) {
                if (v) {
                    return t.getElementsByClassName(e)
                }
            };
            s = [];
            x = [];
            if (h.qsa = K.test(u.querySelectorAll)) {
                ue(function(e) {
                    r.appendChild(e).innerHTML = "<a id='" + k + "'></a>" + "<select id='" + k + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowcapture^='']").length) {
                        x.push("[*^$]=" + R + "*(?:''|\"\")")
                    }
                    if (!e.querySelectorAll("[selected]").length) {
                        x.push("\\[" + R + "*(?:value|" + P + ")")
                    }
                    if (!e.querySelectorAll("[id~=" + k + "-]").length) {
                        x.push("~=")
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        x.push(":checked")
                    }
                    if (!e.querySelectorAll("a#" + k + "+*").length) {
                        x.push(".#.+[+~]")
                    }
                });
                ue(function(e) {
                    var t = u.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length) {
                        x.push("name" + R + "*[*^$|!~]?=")
                    }
                    if (!e.querySelectorAll(":enabled").length) {
                        x.push(":enabled", ":disabled")
                    }
                    e.querySelectorAll("*,:x");
                    x.push(",.*:")
                })
            }
            if (h.matchesSelector = K.test(a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) {
                ue(function(e) {
                    h.disconnectedMatch = a.call(e, "div");
                    a.call(e, "[s!='']:x");
                    s.push("!=", I)
                })
            }
            x = x.length && new RegExp(x.join("|"));
            s = s.length && new RegExp(s.join("|"));
            t = K.test(r.compareDocumentPosition);
            C = t || K.test(r.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return true
                        }
                    }
                }
                return false
            };
            D = t ? function(e, t) {
                if (e === t) {
                    l = true;
                    return 0
                }
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (n) {
                    return n
                }
                n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (n & 1 || !h.sortDetached && t.compareDocumentPosition(e) === n) {
                    if (e === u || e.ownerDocument === N && C(N, e)) {
                        return -1
                    }
                    if (t === u || t.ownerDocument === N && C(N, t)) {
                        return 1
                    }
                    return f ? F(f, e) - F(f, t) : 0
                }
                return n & 4 ? -1 : 1
            } : function(e, t) {
                if (e === t) {
                    l = true;
                    return 0
                }
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!r || !o) {
                    return e === u ? -1 : t === u ? 1 : r ? -1 : o ? 1 : f ? F(f, e) - F(f, t) : 0
                } else if (r === o) {
                    return le(e, t)
                }
                n = e;
                while (n = n.parentNode) {
                    s.unshift(n)
                }
                n = t;
                while (n = n.parentNode) {
                    a.unshift(n)
                }
                while (s[i] === a[i]) {
                    i++
                }
                return i ? le(s[i], a[i]) : s[i] === N ? -1 : a[i] === N ? 1 : 0
            };
            return u
        };
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        };
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                y(e)
            }
            t = t.replace(U, "='$1']");
            if (h.matchesSelector && v && (!s || !s.test(t)) && (!x || !x.test(t))) {
                try {
                    var n = a.call(e, t);
                    if (n || h.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                        return n
                    }
                } catch (e) {}
            }
            return oe(t, T, null, [e]).length > 0
        };
        oe.contains = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                y(e)
            }
            return C(e, t)
        };
        oe.attr = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                y(e)
            }
            var n = w.attrHandle[t.toLowerCase()],
                i = n && A.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !v) : undefined;
            return i !== undefined ? i : h.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        };
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        oe.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            l = !h.detectDuplicates;
            f = !h.sortStable && e.slice(0);
            e.sort(D);
            if (l) {
                while (t = e[r++]) {
                    if (t === e[r]) {
                        i = n.push(r)
                    }
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            f = null;
            return e
        };
        o = oe.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (!r) {
                while (t = e[i++]) {
                    n += o(t)
                }
            } else if (r === 1 || r === 9 || r === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e)
                    }
                }
            } else if (r === 3 || r === 4) {
                return e.nodeValue
            }
            return n
        };
        w = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(ne, ie);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            oe.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd")
                    } else if (e[3]) {
                        oe.error(e[0])
                    }
                    return e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (G["CHILD"].test(e[0])) {
                        return null
                    }
                    if (e[3]) {
                        e[2] = e[4] || e[5] || ""
                    } else if (n && V.test(n) && (t = g(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ne, ie).toLowerCase();
                    return e === "*" ? function() {
                        return true
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = u[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && u(e, function(e) {
                        return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        if (t == null) {
                            return i === "!="
                        }
                        if (!i) {
                            return true
                        }
                        t += "";
                        return i === "=" ? t === r : i === "!=" ? t !== r : i === "^=" ? r && t.indexOf(r) === 0 : i === "*=" ? r && t.indexOf(r) > -1 : i === "$=" ? r && t.slice(-r.length) === r : i === "~=" ? (" " + t.replace(B, " ") + " ").indexOf(r) > -1 : i === "|=" ? t === r || t.slice(0, r.length + 1) === r + "-" : false
                    }
                },
                CHILD: function(d, e, t, h, g) {
                    var m = d.slice(0, 3) !== "nth",
                        y = d.slice(-4) !== "last",
                        v = e === "of-type";
                    return h === 1 && g === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var i, r, o, s, a, u, f = m !== y ? "nextSibling" : "previousSibling",
                            l = e.parentNode,
                            c = v && e.nodeName.toLowerCase(),
                            p = !n && !v;
                        if (l) {
                            if (m) {
                                while (f) {
                                    o = e;
                                    while (o = o[f]) {
                                        if (v ? o.nodeName.toLowerCase() === c : o.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    u = f = d === "only" && !u && "nextSibling"
                                }
                                return true
                            }
                            u = [y ? l.firstChild : l.lastChild];
                            if (y && p) {
                                r = l[k] || (l[k] = {});
                                i = r[d] || [];
                                a = i[0] === E && i[1];
                                s = i[0] === E && i[2];
                                o = a && l.childNodes[a];
                                while (o = ++a && o && o[f] || (s = a = 0) || u.pop()) {
                                    if (o.nodeType === 1 && ++s && o === e) {
                                        r[d] = [E, a, s];
                                        break
                                    }
                                }
                            } else if (p && (i = (e[k] || (e[k] = {}))[d]) && i[0] === E) {
                                s = i[1]
                            } else {
                                while (o = ++a && o && o[f] || (s = a = 0) || u.pop()) {
                                    if ((v ? o.nodeName.toLowerCase() === c : o.nodeType === 1) && ++s) {
                                        if (p) {
                                            (o[k] || (o[k] = {}))[d] = [E, s]
                                        }
                                        if (o === e) {
                                            break
                                        }
                                    }
                                }
                            }
                            s -= g;
                            return s === h || s % h === 0 && s / h >= 0
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    if (s[k]) {
                        return s(o)
                    }
                    if (s.length > 1) {
                        t = [e, e, "", o];
                        return w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            var n, i = s(e, o),
                                r = i.length;
                            while (r--) {
                                n = F(e, i[r]);
                                e[n] = !(t[n] = i[r])
                            }
                        }) : function(e) {
                            return s(e, 0, t)
                        }
                    }
                    return s
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var i = [],
                        r = [],
                        a = c(e.replace(_, "$1"));
                    return a[k] ? ae(function(e, t, n, i) {
                        var r, o = a(e, null, i, []),
                            s = e.length;
                        while (s--) {
                            if (r = o[s]) {
                                e[s] = !(t[s] = r)
                            }
                        }
                    }) : function(e, t, n) {
                        i[0] = e;
                        a(i, null, n, r);
                        i[0] = null;
                        return !r.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return oe(t, e).length > 0
                    }
                }),
                contains: ae(function(t) {
                    t = t.replace(ne, ie);
                    return function(e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    }
                }),
                lang: ae(function(n) {
                    if (!Y.test(n || "")) {
                        oe.error("unsupported lang: " + n)
                    }
                    n = n.replace(ne, ie).toLowerCase();
                    return function(e) {
                        var t;
                        do {
                            if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                t = t.toLowerCase();
                                return t === n || t.indexOf(n + "-") === 0
                            }
                        } while ((e = e.parentNode) && e.nodeType === 1);
                        return false
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(e) {
                    return !w.pseudos["empty"](e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: de(function() {
                    return [0]
                }),
                last: de(function(e, t) {
                    return [t - 1]
                }),
                eq: de(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: de(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: de(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: de(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (; --i >= 0;) {
                        e.push(i)
                    }
                    return e
                }),
                gt: de(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (; ++i < t;) {
                        e.push(i)
                    }
                    return e
                })
            }
        };
        w.pseudos["nth"] = w.pseudos["eq"];
        for (e in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
            w.pseudos[e] = ce(e)
        }
        for (e in {
                submit: true,
                reset: true
            }) {
            w.pseudos[e] = pe(e)
        }

        function ge() {}
        ge.prototype = w.filters = w.pseudos;
        w.setFilters = new ge;
        g = oe.tokenize = function(e, t) {
            var n, i, r, o, s, a, u, f = d[e + " "];
            if (f) {
                return t ? 0 : f.slice(0)
            }
            s = e;
            a = [];
            u = w.preFilter;
            while (s) {
                if (!n || (i = z.exec(s))) {
                    if (i) {
                        s = s.slice(i[0].length) || s
                    }
                    a.push(r = [])
                }
                n = false;
                if (i = X.exec(s)) {
                    n = i.shift();
                    r.push({
                        value: n,
                        type: i[0].replace(_, " ")
                    });
                    s = s.slice(n.length)
                }
                for (o in w.filter) {
                    if ((i = G[o].exec(s)) && (!u[o] || (i = u[o](i)))) {
                        n = i.shift();
                        r.push({
                            value: n,
                            type: o,
                            matches: i
                        });
                        s = s.slice(n.length)
                    }
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? oe.error(e) : d(e, a).slice(0)
        };

        function me(e) {
            var t = 0,
                n = e.length,
                i = "";
            for (; t < n; t++) {
                i += e[t].value
            }
            return i
        }

        function ye(s, e, t) {
            var a = e.dir,
                u = t && a === "parentNode",
                f = p++;
            return e.first ? function(e, t, n) {
                while (e = e[a]) {
                    if (e.nodeType === 1 || u) {
                        return s(e, t, n)
                    }
                }
            } : function(e, t, n) {
                var i, r, o = [E, f];
                if (n) {
                    while (e = e[a]) {
                        if (e.nodeType === 1 || u) {
                            if (s(e, t, n)) {
                                return true
                            }
                        }
                    }
                } else {
                    while (e = e[a]) {
                        if (e.nodeType === 1 || u) {
                            r = e[k] || (e[k] = {});
                            if ((i = r[a]) && i[0] === E && i[1] === f) {
                                return o[2] = i[2]
                            } else {
                                r[a] = o;
                                if (o[2] = s(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function ve(r) {
            return r.length > 1 ? function(e, t, n) {
                var i = r.length;
                while (i--) {
                    if (!r[i](e, t, n)) {
                        return false
                    }
                }
                return true
            } : r[0]
        }

        function xe(e, t, n) {
            var i = 0,
                r = t.length;
            for (; i < r; i++) {
                oe(e, t[i], n)
            }
            return n
        }

        function we(e, t, n, i, r) {
            var o, s = [],
                a = 0,
                u = e.length,
                f = t != null;
            for (; a < u; a++) {
                if (o = e[a]) {
                    if (!n || n(o, i, r)) {
                        s.push(o);
                        if (f) {
                            t.push(a)
                        }
                    }
                }
            }
            return s
        }

        function be(d, h, g, m, y, e) {
            if (m && !m[k]) {
                m = be(m)
            }
            if (y && !y[k]) {
                y = be(y, e)
            }
            return ae(function(e, t, n, i) {
                var r, o, s, a = [],
                    u = [],
                    f = t.length,
                    l = e || xe(h || "*", n.nodeType ? [n] : n, []),
                    c = d && (e || !h) ? we(l, a, d, n, i) : l,
                    p = g ? y || (e ? d : f || m) ? [] : t : c;
                if (g) {
                    g(c, p, n, i)
                }
                if (m) {
                    r = we(p, u);
                    m(r, [], n, i);
                    o = r.length;
                    while (o--) {
                        if (s = r[o]) {
                            p[u[o]] = !(c[u[o]] = s)
                        }
                    }
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            r = [];
                            o = p.length;
                            while (o--) {
                                if (s = p[o]) {
                                    r.push(c[o] = s)
                                }
                            }
                            y(null, p = [], r, i)
                        }
                        o = p.length;
                        while (o--) {
                            if ((s = p[o]) && (r = y ? F(e, s) : a[o]) > -1) {
                                e[r] = !(t[r] = s)
                            }
                        }
                    }
                } else {
                    p = we(p === t ? p.splice(f, p.length) : p);
                    if (y) {
                        y(null, t, p, i)
                    } else {
                        H.apply(t, p)
                    }
                }
            })
        }

        function Te(e) {
            var r, t, n, i = e.length,
                o = w.relative[e[0].type],
                s = o || w.relative[" "],
                a = o ? 1 : 0,
                u = ye(function(e) {
                    return e === r
                }, s, true),
                f = ye(function(e) {
                    return F(r, e) > -1
                }, s, true),
                l = [function(e, t, n) {
                    var i = !o && (n || t !== b) || ((r = t).nodeType ? u(e, t, n) : f(e, t, n));
                    r = null;
                    return i
                }];
            for (; a < i; a++) {
                if (t = w.relative[e[a].type]) {
                    l = [ye(ve(l), t)]
                } else {
                    t = w.filter[e[a].type].apply(null, e[a].matches);
                    if (t[k]) {
                        n = ++a;
                        for (; n < i; n++) {
                            if (w.relative[e[n].type]) {
                                break
                            }
                        }
                        return be(a > 1 && ve(l), a > 1 && me(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(_, "$1"), t, a < n && Te(e.slice(a, n)), n < i && Te(e = e.slice(n)), n < i && me(e))
                    }
                    l.push(t)
                }
            }
            return ve(l)
        }

        function Ce(m, y) {
            var v = y.length > 0,
                x = m.length > 0,
                e = function(e, t, n, i, r) {
                    var o, s, a, u = 0,
                        f = "0",
                        l = e && [],
                        c = [],
                        p = b,
                        d = e || x && w.find["TAG"]("*", r),
                        h = E += p == null ? 1 : Math.random() || .1,
                        g = d.length;
                    if (r) {
                        b = t !== T && t
                    }
                    for (; f !== g && (o = d[f]) != null; f++) {
                        if (x && o) {
                            s = 0;
                            while (a = m[s++]) {
                                if (a(o, t, n)) {
                                    i.push(o);
                                    break
                                }
                            }
                            if (r) {
                                E = h
                            }
                        }
                        if (v) {
                            if (o = !a && o) {
                                u--
                            }
                            if (e) {
                                l.push(o)
                            }
                        }
                    }
                    u += f;
                    if (v && f !== u) {
                        s = 0;
                        while (a = y[s++]) {
                            a(l, c, t, n)
                        }
                        if (e) {
                            if (u > 0) {
                                while (f--) {
                                    if (!(l[f] || c[f])) {
                                        c[f] = L.call(i)
                                    }
                                }
                            }
                            c = we(c)
                        }
                        H.apply(i, c);
                        if (r && !e && c.length > 0 && u + y.length > 1) {
                            oe.uniqueSort(i)
                        }
                    }
                    if (r) {
                        E = h;
                        b = p
                    }
                    return l
                };
            return v ? ae(e) : e
        }
        c = oe.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = S[e + " "];
            if (!o) {
                if (!t) {
                    t = g(e)
                }
                n = t.length;
                while (n--) {
                    o = Te(t[n]);
                    if (o[k]) {
                        i.push(o)
                    } else {
                        r.push(o)
                    }
                }
                o = S(e, Ce(r, i));
                o.selector = e
            }
            return o
        };
        m = oe.select = function(e, t, n, i) {
            var r, o, s, a, u, f = typeof e === "function" && e,
                l = !i && g(e = f.selector || e);
            n = n || [];
            if (l.length === 1) {
                o = l[0] = l[0].slice(0);
                if (o.length > 2 && (s = o[0]).type === "ID" && h.getById && t.nodeType === 9 && v && w.relative[o[1].type]) {
                    t = (w.find["ID"](s.matches[0].replace(ne, ie), t) || [])[0];
                    if (!t) {
                        return n
                    } else if (f) {
                        t = t.parentNode
                    }
                    e = e.slice(o.shift().value.length)
                }
                r = G["needsContext"].test(e) ? 0 : o.length;
                while (r--) {
                    s = o[r];
                    if (w.relative[a = s.type]) {
                        break
                    }
                    if (u = w.find[a]) {
                        if (i = u(s.matches[0].replace(ne, ie), ee.test(o[0].type) && he(t.parentNode) || t)) {
                            o.splice(r, 1);
                            e = i.length && me(o);
                            if (!e) {
                                H.apply(n, i);
                                return n
                            }
                            break
                        }
                    }
                }
            }(f || c(e, l))(i, t, !v, n, ee.test(e) && he(t.parentNode) || t);
            return n
        };
        h.sortStable = k.split("").sort(D).join("") === k;
        h.detectDuplicates = !!l;
        y();
        h.sortDetached = ue(function(e) {
            return e.compareDocumentPosition(T.createElement("div")) & 1
        });
        if (!ue(function(e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild.getAttribute("href") === "#"
            })) {
            fe("type|href|height|width", function(e, t, n) {
                if (!n) {
                    return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!h.attributes || !ue(function(e) {
                e.innerHTML = "<input/>";
                e.firstChild.setAttribute("value", "");
                return e.firstChild.getAttribute("value") === ""
            })) {
            fe("value", function(e, t, n) {
                if (!n && e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue
                }
            })
        }
        if (!ue(function(e) {
                return e.getAttribute("disabled") == null
            })) {
            fe(P, function(e, t, n) {
                var i;
                if (!n) {
                    return e[t] === true ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
            })
        }
        return oe
    }(h);
    C.find = d;
    C.expr = d.selectors;
    C.expr[":"] = C.expr.pseudos;
    C.unique = d.uniqueSort;
    C.text = d.getText;
    C.isXMLDoc = d.isXML;
    C.contains = d.contains;
    var x = C.expr.match.needsContext;
    var w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var b = /^.[^:#\[\.,]*$/;

    function T(e, n, i) {
        if (C.isFunction(n)) {
            return C.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            })
        }
        if (n.nodeType) {
            return C.grep(e, function(e) {
                return e === n !== i
            })
        }
        if (typeof n === "string") {
            if (b.test(n)) {
                return C.filter(n, e, i)
            }
            n = C.filter(n, e)
        }
        return C.grep(e, function(e) {
            return r.call(n, e) >= 0 !== i
        })
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        if (n) {
            e = ":not(" + e + ")"
        }
        return t.length === 1 && i.nodeType === 1 ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return e.nodeType === 1
        }))
    };
    C.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if (typeof e !== "string") {
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < n; t++) {
                        if (C.contains(r[t], this)) {
                            return true
                        }
                    }
                }))
            }
            for (t = 0; t < n; t++) {
                C.find(e, r[t], i)
            }
            i = this.pushStack(n > 1 ? C.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + e : e;
            return i
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], false))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], true))
        },
        is: function(e) {
            return !!T(this, typeof e === "string" && x.test(e) ? C(e) : e || [], false).length
        }
    });
    var k, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        E = C.fn.init = function(e, t) {
            var n, i;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                    n = [null, e, null]
                } else {
                    n = N.exec(e)
                }
                if (n && (n[1] || !t)) {
                    if (n[1]) {
                        t = t instanceof C ? t[0] : t;
                        C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : v, true));
                        if (w.test(n[1]) && C.isPlainObject(t)) {
                            for (n in t) {
                                if (C.isFunction(this[n])) {
                                    this[n](t[n])
                                } else {
                                    this.attr(n, t[n])
                                }
                            }
                        }
                        return this
                    } else {
                        i = v.getElementById(n[2]);
                        if (i && i.parentNode) {
                            this.length = 1;
                            this[0] = i
                        }
                        this.context = v;
                        this.selector = e;
                        return this
                    }
                } else if (!t || t.jquery) {
                    return (t || k).find(e)
                } else {
                    return this.constructor(t).find(e)
                }
            } else if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            } else if (C.isFunction(e)) {
                return typeof k.ready !== "undefined" ? k.ready(e) : e(C)
            }
            if (e.selector !== undefined) {
                this.selector = e.selector;
                this.context = e.context
            }
            return C.makeArray(e, this)
        };
    E.prototype = C.fn;
    k = C(v);
    var S = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    C.extend({
        dir: function(e, t, n) {
            var i = [],
                r = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (r && C(e).is(n)) {
                        break
                    }
                    i.push(e)
                }
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        }
    });
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; e < n; e++) {
                    if (C.contains(this, t[e])) {
                        return true
                    }
                }
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = x.test(e) || typeof e !== "string" ? C(e, t || this.context) : 0;
            for (; i < r; i++) {
                for (n = this[i]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && C.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? C.unique(o) : o)
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return r.call(C(e), this[0])
            }
            return r.call(this, e.jquery ? e[0] : e)
        },
        add: function(e, t) {
            return this.pushStack(C.unique(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function j(e, t) {
        while ((e = e[t]) && e.nodeType !== 1) {}
        return e
    }
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return C.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return C.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return C.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || C.merge([], e.childNodes)
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            if (i.slice(-5) !== "Until") {
                t = e
            }
            if (t && typeof t === "string") {
                n = C.filter(t, n)
            }
            if (this.length > 1) {
                if (!D[i]) {
                    C.unique(n)
                }
                if (S.test(i)) {
                    n.reverse()
                }
            }
            return this.pushStack(n)
        }
    });
    var A = /\S+/g;
    var L = {};

    function q(e) {
        var n = L[e] = {};
        C.each(e.match(A) || [], function(e, t) {
            n[t] = true
        });
        return n
    }
    C.Callbacks = function(r) {
        r = typeof r === "string" ? L[r] || q(r) : C.extend({}, r);
        var t, n, i, o, s, a, u = [],
            f = !r.once && [],
            l = function(e) {
                t = r.memory && e;
                n = true;
                a = o || 0;
                o = 0;
                s = u.length;
                i = true;
                for (; u && a < s; a++) {
                    if (u[a].apply(e[0], e[1]) === false && r.stopOnFalse) {
                        t = false;
                        break
                    }
                }
                i = false;
                if (u) {
                    if (f) {
                        if (f.length) {
                            l(f.shift())
                        }
                    } else if (t) {
                        u = []
                    } else {
                        c.disable()
                    }
                }
            },
            c = {
                add: function() {
                    if (u) {
                        var e = u.length;
                        (function i(e) {
                            C.each(e, function(e, t) {
                                var n = C.type(t);
                                if (n === "function") {
                                    if (!r.unique || !c.has(t)) {
                                        u.push(t)
                                    }
                                } else if (t && t.length && n !== "string") {
                                    i(t)
                                }
                            })
                        })(arguments);
                        if (i) {
                            s = u.length
                        } else if (t) {
                            o = e;
                            l(t)
                        }
                    }
                    return this
                },
                remove: function() {
                    if (u) {
                        C.each(arguments, function(e, t) {
                            var n;
                            while ((n = C.inArray(t, u, n)) > -1) {
                                u.splice(n, 1);
                                if (i) {
                                    if (n <= s) {
                                        s--
                                    }
                                    if (n <= a) {
                                        a--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function(e) {
                    return e ? C.inArray(e, u) > -1 : !!(u && u.length)
                },
                empty: function() {
                    u = [];
                    s = 0;
                    return this
                },
                disable: function() {
                    u = f = t = undefined;
                    return this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    f = undefined;
                    if (!t) {
                        c.disable()
                    }
                    return this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    if (u && (!n || f)) {
                        t = t || [];
                        t = [e, t.slice ? t.slice() : t];
                        if (i) {
                            f.push(t)
                        } else {
                            l(t)
                        }
                    }
                    return this
                },
                fire: function() {
                    c.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    };
    C.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", C.Callbacks("memory")]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        a.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var r = arguments;
                        return C.Deferred(function(i) {
                            C.each(o, function(e, t) {
                                var n = C.isFunction(r[e]) && r[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    if (e && C.isFunction(e.promise)) {
                                        e.promise().done(i.resolve).fail(i.reject).progress(i.notify)
                                    } else {
                                        i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                    }
                                })
                            });
                            r = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? C.extend(e, s) : s
                    }
                },
                a = {};
            s.pipe = s.then;
            C.each(o, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add;
                if (i) {
                    n.add(function() {
                        r = i
                    }, o[e ^ 1][2].disable, o[2][2].lock)
                }
                a[t[0]] = function() {
                    a[t[0] + "With"](this === a ? s : this, arguments);
                    return this
                };
                a[t[0] + "With"] = n.fireWith
            });
            s.promise(a);
            if (e) {
                e.call(a, a)
            }
            return a
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                i = n.length,
                r = i !== 1 || e && C.isFunction(e.promise) ? i : 0,
                o = r === 1 ? e : C.Deferred(),
                s = function(t, n, i) {
                    return function(e) {
                        n[t] = this;
                        i[t] = arguments.length > 1 ? l.call(arguments) : e;
                        if (i === a) {
                            o.notifyWith(n, i)
                        } else if (!--r) {
                            o.resolveWith(n, i)
                        }
                    }
                },
                a, u, f;
            if (i > 1) {
                a = new Array(i);
                u = new Array(i);
                f = new Array(i);
                for (; t < i; t++) {
                    if (n[t] && C.isFunction(n[t].promise)) {
                        n[t].promise().done(s(t, f, n)).fail(o.reject).progress(s(t, u, a))
                    } else {
                        --r
                    }
                }
            }
            if (!r) {
                o.resolveWith(f, n)
            }
            return o.promise()
        }
    });
    var H;
    C.fn.ready = function(e) {
        C.ready.promise().done(e);
        return this
    };
    C.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                C.readyWait++
            } else {
                C.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --C.readyWait : C.isReady) {
                return
            }
            C.isReady = true;
            if (e !== true && --C.readyWait > 0) {
                return
            }
            H.resolveWith(v, [C]);
            if (C.fn.triggerHandler) {
                C(v).triggerHandler("ready");
                C(v).off("ready")
            }
        }
    });

    function O() {
        v.removeEventListener("DOMContentLoaded", O, false);
        h.removeEventListener("load", O, false);
        C.ready()
    }
    C.ready.promise = function(e) {
        if (!H) {
            H = C.Deferred();
            if (v.readyState === "complete") {
                setTimeout(C.ready)
            } else {
                v.addEventListener("DOMContentLoaded", O, false);
                h.addEventListener("load", O, false)
            }
        }
        return H.promise(e)
    };
    C.ready.promise();
    var F = C.access = function(e, t, n, i, r, o, s) {
        var a = 0,
            u = e.length,
            f = n == null;
        if (C.type(n) === "object") {
            r = true;
            for (a in n) {
                C.access(e, t, a, n[a], true, o, s)
            }
        } else if (i !== undefined) {
            r = true;
            if (!C.isFunction(i)) {
                s = true
            }
            if (f) {
                if (s) {
                    t.call(e, i);
                    t = null
                } else {
                    f = t;
                    t = function(e, t, n) {
                        return f.call(C(e), n)
                    }
                }
            }
            if (t) {
                for (; a < u; a++) {
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)))
                }
            }
        }
        return r ? e : f ? t.call(e) : u ? t(e[0], n) : o
    };
    C.acceptData = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    };

    function P() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = C.expando + P.uid++
    }
    P.uid = 1;
    P.accepts = C.acceptData;
    P.prototype = {
        key: function(t) {
            if (!P.accepts(t)) {
                return 0
            }
            var n = {},
                i = t[this.expando];
            if (!i) {
                i = P.uid++;
                try {
                    n[this.expando] = {
                        value: i
                    };
                    Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = i;
                    C.extend(t, n)
                }
            }
            if (!this.cache[i]) {
                this.cache[i] = {}
            }
            return i
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
                o = this.cache[r];
            if (typeof t === "string") {
                o[t] = n
            } else {
                if (C.isEmptyObject(o)) {
                    C.extend(this.cache[r], t)
                } else {
                    for (i in t) {
                        o[i] = t[i]
                    }
                }
            }
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            if (t === undefined || t && typeof t === "string" && n === undefined) {
                i = this.get(e, t);
                return i !== undefined ? i : this.get(e, C.camelCase(t))
            }
            this.set(e, t, n);
            return n !== undefined ? n : t
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e),
                s = this.cache[o];
            if (t === undefined) {
                this.cache[o] = {}
            } else {
                if (C.isArray(t)) {
                    i = t.concat(t.map(C.camelCase))
                } else {
                    r = C.camelCase(t);
                    if (t in s) {
                        i = [t, r]
                    } else {
                        i = r;
                        i = i in s ? [i] : i.match(A) || []
                    }
                }
                n = i.length;
                while (n--) {
                    delete s[i[n]]
                }
            }
        },
        hasData: function(e) {
            return !C.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            if (e[this.expando]) {
                delete this.cache[e[this.expando]]
            }
        }
    };
    var R = new P;
    var M = new P;
    var W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $ = /([A-Z])/g;

    function I(e, t, n) {
        var i;
        if (n === undefined && e.nodeType === 1) {
            i = "data-" + t.replace($, "-$1").toLowerCase();
            n = e.getAttribute(i);
            if (typeof n === "string") {
                try {
                    n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : W.test(n) ? C.parseJSON(n) : n
                } catch (e) {}
                M.set(e, t, n)
            } else {
                n = undefined
            }
        }
        return n
    }
    C.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    });
    C.fn.extend({
        data: function(i, e) {
            var t, n, r, o = this[0],
                s = o && o.attributes;
            if (i === undefined) {
                if (this.length) {
                    r = M.get(o);
                    if (o.nodeType === 1 && !R.get(o, "hasDataAttrs")) {
                        t = s.length;
                        while (t--) {
                            if (s[t]) {
                                n = s[t].name;
                                if (n.indexOf("data-") === 0) {
                                    n = C.camelCase(n.slice(5));
                                    I(o, n, r[n])
                                }
                            }
                        }
                        R.set(o, "hasDataAttrs", true)
                    }
                }
                return r
            }
            if (typeof i === "object") {
                return this.each(function() {
                    M.set(this, i)
                })
            }
            return F(this, function(t) {
                var e, n = C.camelCase(i);
                if (o && t === undefined) {
                    e = M.get(o, i);
                    if (e !== undefined) {
                        return e
                    }
                    e = M.get(o, n);
                    if (e !== undefined) {
                        return e
                    }
                    e = I(o, n, undefined);
                    if (e !== undefined) {
                        return e
                    }
                    return
                }
                this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t);
                    if (i.indexOf("-") !== -1 && e !== undefined) {
                        M.set(this, i, t)
                    }
                })
            }, null, e, arguments.length > 1, null, true)
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    });
    C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = R.get(e, t);
                if (n) {
                    if (!i || C.isArray(n)) {
                        i = R.access(e, t, C.makeArray(n))
                    } else {
                        i.push(n)
                    }
                }
                return i || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = C._queueHooks(e, t),
                s = function() {
                    C.dequeue(e, t)
                };
            if (r === "inprogress") {
                r = n.shift();
                i--
            }
            if (r) {
                if (t === "fx") {
                    n.unshift("inprogress")
                }
                delete o.stop;
                r.call(e, s, o)
            }
            if (!i && o) {
                o.empty.fire()
            }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    });
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            if (typeof t !== "string") {
                n = t;
                t = "fx";
                e--
            }
            if (arguments.length < e) {
                return C.queue(this[0], t)
            }
            return n === undefined ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t);
                if (t === "fx" && e[0] !== "inprogress") {
                    C.dequeue(this, t)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = C.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    if (!--i) {
                        r.resolveWith(o, [o])
                    }
                };
            if (typeof e !== "string") {
                t = e;
                e = undefined
            }
            e = e || "fx";
            while (s--) {
                n = R.get(o[s], e + "queueHooks");
                if (n && n.empty) {
                    i++;
                    n.empty.add(a)
                }
            }
            a();
            return r.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var _ = ["Top", "Right", "Bottom", "Left"];
    var z = function(e, t) {
        e = t || e;
        return C.css(e, "display") === "none" || !C.contains(e.ownerDocument, e)
    };
    var X = /^(?:checkbox|radio)$/i;
    (function() {
        var e = v.createDocumentFragment(),
            t = e.appendChild(v.createElement("div")),
            n = v.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        y.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        y.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
    })();
    var U = typeof undefined;
    y.focusinBubbles = "onfocusin" in h;
    var V = /^key/,
        Y = /^(?:mouse|pointer|contextmenu)|click/,
        G = /^(?:focusinfocus|focusoutblur)$/,
        Q = /^([^.]*)(?:\.(.+)|)$/;

    function J() {
        return true
    }

    function K() {
        return false
    }

    function Z() {
        try {
            return v.activeElement
        } catch (e) {}
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, f, l, c, p, d, h, g, m = R.get(t);
            if (!m) {
                return
            }
            if (n.handler) {
                o = n;
                n = o.handler;
                r = o.selector
            }
            if (!n.guid) {
                n.guid = C.guid++
            }
            if (!(u = m.events)) {
                u = m.events = {}
            }
            if (!(s = m.handle)) {
                s = m.handle = function(e) {
                    return typeof C !== U && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : undefined
                }
            }
            e = (e || "").match(A) || [""];
            f = e.length;
            while (f--) {
                a = Q.exec(e[f]) || [];
                d = g = a[1];
                h = (a[2] || "").split(".").sort();
                if (!d) {
                    continue
                }
                c = C.event.special[d] || {};
                d = (r ? c.delegateType : c.bindType) || d;
                c = C.event.special[d] || {};
                l = C.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o);
                if (!(p = u[d])) {
                    p = u[d] = [];
                    p.delegateCount = 0;
                    if (!c.setup || c.setup.call(t, i, h, s) === false) {
                        if (t.addEventListener) {
                            t.addEventListener(d, s, false)
                        }
                    }
                }
                if (c.add) {
                    c.add.call(t, l);
                    if (!l.handler.guid) {
                        l.handler.guid = n.guid
                    }
                }
                if (r) {
                    p.splice(p.delegateCount++, 0, l)
                } else {
                    p.push(l)
                }
                C.event.global[d] = true
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, u, f, l, c, p, d, h, g, m = R.hasData(e) && R.get(e);
            if (!m || !(u = m.events)) {
                return
            }
            t = (t || "").match(A) || [""];
            f = t.length;
            while (f--) {
                a = Q.exec(t[f]) || [];
                d = g = a[1];
                h = (a[2] || "").split(".").sort();
                if (!d) {
                    for (d in u) {
                        C.event.remove(e, d + t[f], n, i, true)
                    }
                    continue
                }
                c = C.event.special[d] || {};
                d = (i ? c.delegateType : c.bindType) || d;
                p = u[d] || [];
                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                s = o = p.length;
                while (o--) {
                    l = p[o];
                    if ((r || g === l.origType) && (!n || n.guid === l.guid) && (!a || a.test(l.namespace)) && (!i || i === l.selector || i === "**" && l.selector)) {
                        p.splice(o, 1);
                        if (l.selector) {
                            p.delegateCount--
                        }
                        if (c.remove) {
                            c.remove.call(e, l)
                        }
                    }
                }
                if (s && !p.length) {
                    if (!c.teardown || c.teardown.call(e, h, m.handle) === false) {
                        C.removeEvent(e, d, m.handle)
                    }
                    delete u[d]
                }
            }
            if (C.isEmptyObject(u)) {
                delete m.handle;
                R.remove(e, "events")
            }
        },
        trigger: function(e, t, n, i) {
            var r, o, s, a, u, f, l, c = [n || v],
                p = m.call(e, "type") ? e.type : e,
                d = m.call(e, "namespace") ? e.namespace.split(".") : [];
            o = s = n = n || v;
            if (n.nodeType === 3 || n.nodeType === 8) {
                return
            }
            if (G.test(p + C.event.triggered)) {
                return
            }
            if (p.indexOf(".") >= 0) {
                d = p.split(".");
                p = d.shift();
                d.sort()
            }
            u = p.indexOf(":") < 0 && "on" + p;
            e = e[C.expando] ? e : new C.Event(p, typeof e === "object" && e);
            e.isTrigger = i ? 2 : 3;
            e.namespace = d.join(".");
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            e.result = undefined;
            if (!e.target) {
                e.target = n
            }
            t = t == null ? [e] : C.makeArray(t, [e]);
            l = C.event.special[p] || {};
            if (!i && l.trigger && l.trigger.apply(n, t) === false) {
                return
            }
            if (!i && !l.noBubble && !C.isWindow(n)) {
                a = l.delegateType || p;
                if (!G.test(a + p)) {
                    o = o.parentNode
                }
                for (; o; o = o.parentNode) {
                    c.push(o);
                    s = o
                }
                if (s === (n.ownerDocument || v)) {
                    c.push(s.defaultView || s.parentWindow || h)
                }
            }
            r = 0;
            while ((o = c[r++]) && !e.isPropagationStopped()) {
                e.type = r > 1 ? a : l.bindType || p;
                f = (R.get(o, "events") || {})[e.type] && R.get(o, "handle");
                if (f) {
                    f.apply(o, t)
                }
                f = u && o[u];
                if (f && f.apply && C.acceptData(o)) {
                    e.result = f.apply(o, t);
                    if (e.result === false) {
                        e.preventDefault()
                    }
                }
            }
            e.type = p;
            if (!i && !e.isDefaultPrevented()) {
                if ((!l._default || l._default.apply(c.pop(), t) === false) && C.acceptData(n)) {
                    if (u && C.isFunction(n[p]) && !C.isWindow(n)) {
                        s = n[u];
                        if (s) {
                            n[u] = null
                        }
                        C.event.triggered = p;
                        n[p]();
                        C.event.triggered = undefined;
                        if (s) {
                            n[u] = s
                        }
                    }
                }
            }
            return e.result
        },
        dispatch: function(e) {
            e = C.event.fix(e);
            var t, n, i, r, o, s = [],
                a = l.call(arguments),
                u = (R.get(this, "events") || {})[e.type] || [],
                f = C.event.special[e.type] || {};
            a[0] = e;
            e.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, e) === false) {
                return
            }
            s = C.event.handlers.call(this, e, u);
            t = 0;
            while ((r = s[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = r.elem;
                n = 0;
                while ((o = r.handlers[n++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(o.namespace)) {
                        e.handleObj = o;
                        e.data = o.data;
                        i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a);
                        if (i !== undefined) {
                            if ((e.result = i) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (f.postDispatch) {
                f.postDispatch.call(this, e)
            }
            return e.result
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || e.type !== "click")) {
                for (; u !== this; u = u.parentNode || this) {
                    if (u.disabled !== true || e.type !== "click") {
                        i = [];
                        for (n = 0; n < a; n++) {
                            o = t[n];
                            r = o.selector + " ";
                            if (i[r] === undefined) {
                                i[r] = o.needsContext ? C(r, this).index(u) >= 0 : C.find(r, this, null, [u]).length
                            }
                            if (i[r]) {
                                i.push(o)
                            }
                        }
                        if (i.length) {
                            s.push({
                                elem: u,
                                handlers: i
                            })
                        }
                    }
                }
            }
            if (a < t.length) {
                s.push({
                    elem: this,
                    handlers: t.slice(a)
                })
            }
            return s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                if (e.pageX == null && t.clientX != null) {
                    n = e.target.ownerDocument || v;
                    i = n.documentElement;
                    r = n.body;
                    e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0);
                    e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)
                }
                if (!e.which && o !== undefined) {
                    e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0
                }
                return e
            }
        },
        fix: function(e) {
            if (e[C.expando]) {
                return e
            }
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            if (!s) {
                this.fixHooks[r] = s = Y.test(r) ? this.mouseHooks : V.test(r) ? this.keyHooks : {}
            }
            i = s.props ? this.props.concat(s.props) : this.props;
            e = new C.Event(o);
            t = i.length;
            while (t--) {
                n = i[t];
                e[n] = o[n]
            }
            if (!e.target) {
                e.target = v
            }
            if (e.target.nodeType === 3) {
                e.target = e.target.parentNode
            }
            return s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== Z() && this.focus) {
                        this.focus();
                        return false
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Z() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && C.nodeName(this, "input")) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== undefined && e.originalEvent) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = C.extend(new C.Event, n, {
                type: e,
                isSimulated: true,
                originalEvent: {}
            });
            if (i) {
                C.event.trigger(r, null, t)
            } else {
                C.event.dispatch.call(t, r)
            }
            if (r.isDefaultPrevented()) {
                n.preventDefault()
            }
        }
    };
    C.removeEvent = function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n, false)
        }
    };
    C.Event = function(e, t) {
        if (!(this instanceof C.Event)) {
            return new C.Event(e, t)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? J : K
        } else {
            this.type = e
        }
        if (t) {
            C.extend(this, t)
        }
        this.timeStamp = e && e.timeStamp || C.now();
        this[C.expando] = true
    };
    C.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = J;
            if (e && e.preventDefault) {
                e.preventDefault()
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = J;
            if (e && e.stopPropagation) {
                e.stopPropagation()
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = J;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        C.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                if (!i || i !== n && !C.contains(n, i)) {
                    e.type = r.origType;
                    t = r.handler.apply(this, arguments);
                    e.type = o
                }
                return t
            }
        }
    });
    if (!y.focusinBubbles) {
        C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var r = function(e) {
                C.event.simulate(i, e.target, C.event.fix(e), true)
            };
            C.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = R.access(e, i);
                    if (!t) {
                        e.addEventListener(n, r, true)
                    }
                    R.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = R.access(e, i) - 1;
                    if (!t) {
                        e.removeEventListener(n, r, true);
                        R.remove(e, i)
                    } else {
                        R.access(e, i, t)
                    }
                }
            }
        })
    }
    C.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if (typeof e === "object") {
                if (typeof t !== "string") {
                    n = n || t;
                    t = undefined
                }
                for (s in e) {
                    this.on(s, t, n, e[s], r)
                }
                return this
            }
            if (n == null && i == null) {
                i = t;
                n = t = undefined
            } else if (i == null) {
                if (typeof t === "string") {
                    i = n;
                    n = undefined
                } else {
                    i = n;
                    n = t;
                    t = undefined
                }
            }
            if (i === false) {
                i = K
            } else if (!i) {
                return this
            }
            if (r === 1) {
                o = i;
                i = function(e) {
                    C().off(e);
                    return o.apply(this, arguments)
                };
                i.guid = o.guid || (o.guid = C.guid++)
            }
            return this.each(function() {
                C.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) {
                i = e.handleObj;
                C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                return this
            }
            if (typeof e === "object") {
                for (r in e) {
                    this.off(r, t, e[r])
                }
                return this
            }
            if (t === false || typeof t === "function") {
                n = t;
                t = undefined
            }
            if (n === false) {
                n = K
            }
            return this.each(function() {
                C.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) {
                return C.event.trigger(e, t, n, true)
            }
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        te = /<([\w:]+)/,
        ne = /<|&#?\w+;/,
        ie = /<(?:script|style|link)/i,
        re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oe = /^$|\/(?:java|ecma)script/i,
        se = /^true\/(.*)/,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ue.optgroup = ue.option;
    ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead;
    ue.th = ue.td;

    function fe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function le(e) {
        e.type = (e.getAttribute("type") !== null) + "/" + e.type;
        return e
    }

    function ce(e) {
        var t = se.exec(e.type);
        if (t) {
            e.type = t[1]
        } else {
            e.removeAttribute("type")
        }
        return e
    }

    function pe(e, t) {
        var n = 0,
            i = e.length;
        for (; n < i; n++) {
            R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
        }
    }

    function de(e, t) {
        var n, i, r, o, s, a, u, f;
        if (t.nodeType !== 1) {
            return
        }
        if (R.hasData(e)) {
            o = R.access(e);
            s = R.set(t, o);
            f = o.events;
            if (f) {
                delete s.handle;
                s.events = {};
                for (r in f) {
                    for (n = 0, i = f[r].length; n < i; n++) {
                        C.event.add(t, r, f[r][n])
                    }
                }
            }
        }
        if (M.hasData(e)) {
            a = M.access(e);
            u = C.extend({}, a);
            M.set(t, u)
        }
    }

    function he(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && C.nodeName(e, t) ? C.merge([e], n) : n
    }

    function ge(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && X.test(e.type)) {
            t.checked = e.checked
        } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue
        }
    }
    C.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(true),
                u = C.contains(e.ownerDocument, e);
            if (!y.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !C.isXMLDoc(e)) {
                s = he(a);
                o = he(e);
                for (i = 0, r = o.length; i < r; i++) {
                    ge(o[i], s[i])
                }
            }
            if (t) {
                if (n) {
                    o = o || he(e);
                    s = s || he(a);
                    for (i = 0, r = o.length; i < r; i++) {
                        de(o[i], s[i])
                    }
                } else {
                    de(e, a)
                }
            }
            s = he(a, "script");
            if (s.length > 0) {
                pe(s, !u && he(e, "script"))
            }
            return a
        },
        buildFragment: function(e, t, n, i) {
            var r, o, s, a, u, f, l = t.createDocumentFragment(),
                c = [],
                p = 0,
                d = e.length;
            for (; p < d; p++) {
                r = e[p];
                if (r || r === 0) {
                    if (C.type(r) === "object") {
                        C.merge(c, r.nodeType ? [r] : r)
                    } else if (!ne.test(r)) {
                        c.push(t.createTextNode(r))
                    } else {
                        o = o || l.appendChild(t.createElement("div"));
                        s = (te.exec(r) || ["", ""])[1].toLowerCase();
                        a = ue[s] || ue._default;
                        o.innerHTML = a[1] + r.replace(ee, "<$1></$2>") + a[2];
                        f = a[0];
                        while (f--) {
                            o = o.lastChild
                        }
                        C.merge(c, o.childNodes);
                        o = l.firstChild;
                        o.textContent = ""
                    }
                }
            }
            l.textContent = "";
            p = 0;
            while (r = c[p++]) {
                if (i && C.inArray(r, i) !== -1) {
                    continue
                }
                u = C.contains(r.ownerDocument, r);
                o = he(l.appendChild(r), "script");
                if (u) {
                    pe(o)
                }
                if (n) {
                    f = 0;
                    while (r = o[f++]) {
                        if (oe.test(r.type || "")) {
                            n.push(r)
                        }
                    }
                }
            }
            return l
        },
        cleanData: function(e) {
            var t, n, i, r, o = C.event.special,
                s = 0;
            for (;
                (n = e[s]) !== undefined; s++) {
                if (C.acceptData(n)) {
                    r = n[R.expando];
                    if (r && (t = R.cache[r])) {
                        if (t.events) {
                            for (i in t.events) {
                                if (o[i]) {
                                    C.event.remove(n, i)
                                } else {
                                    C.removeEvent(n, i, t.handle)
                                }
                            }
                        }
                        if (R.cache[r]) {
                            delete R.cache[r]
                        }
                    }
                }
                delete M.cache[n[M.expando]]
            }
        }
    });
    C.fn.extend({
        text: function(e) {
            return F(this, function(e) {
                return e === undefined ? C.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = e
                    }
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fe(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        remove: function(e, t) {
            var n, i = e ? C.filter(e, this) : this,
                r = 0;
            for (;
                (n = i[r]) != null; r++) {
                if (!t && n.nodeType === 1) {
                    C.cleanData(he(n))
                }
                if (n.parentNode) {
                    if (t && C.contains(n.ownerDocument, n)) {
                        pe(he(n, "script"))
                    }
                    n.parentNode.removeChild(n)
                }
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    C.cleanData(he(e, false));
                    e.textContent = ""
                }
            }
            return this
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && t.nodeType === 1) {
                    return t.innerHTML
                }
                if (typeof e === "string" && !ie.test(e) && !ue[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ee, "<$1></$2>");
                    try {
                        for (; n < i; n++) {
                            t = this[n] || {};
                            if (t.nodeType === 1) {
                                C.cleanData(he(t, false));
                                t.innerHTML = e
                            }
                        }
                        t = 0
                    } catch (e) {}
                }
                if (t) {
                    this.empty().append(e)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            this.domManip(arguments, function(e) {
                t = this.parentNode;
                C.cleanData(he(this));
                if (t) {
                    t.replaceChild(e, this)
                }
            });
            return t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(n, i) {
            n = g.apply([], n);
            var e, t, r, o, s, a, u = 0,
                f = this.length,
                l = this,
                c = f - 1,
                p = n[0],
                d = C.isFunction(p);
            if (d || f > 1 && typeof p === "string" && !y.checkClone && re.test(p)) {
                return this.each(function(e) {
                    var t = l.eq(e);
                    if (d) {
                        n[0] = p.call(this, e, t.html())
                    }
                    t.domManip(n, i)
                })
            }
            if (f) {
                e = C.buildFragment(n, this[0].ownerDocument, false, this);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t) {
                    r = C.map(he(e, "script"), le);
                    o = r.length;
                    for (; u < f; u++) {
                        s = e;
                        if (u !== c) {
                            s = C.clone(s, true, true);
                            if (o) {
                                C.merge(r, he(s, "script"))
                            }
                        }
                        i.call(this[u], s, u)
                    }
                    if (o) {
                        a = r[r.length - 1].ownerDocument;
                        C.map(r, ce);
                        for (u = 0; u < o; u++) {
                            s = r[u];
                            if (oe.test(s.type || "") && !R.access(s, "globalEval") && C.contains(a, s)) {
                                if (s.src) {
                                    if (C._evalUrl) {
                                        C._evalUrl(s.src)
                                    }
                                } else {
                                    C.globalEval(s.textContent.replace(ae, ""))
                                }
                            }
                        }
                    }
                }
            }
            return this
        }
    });
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            var t, n = [],
                i = C(e),
                r = i.length - 1,
                o = 0;
            for (; o <= r; o++) {
                t = o === r ? this : this.clone(true);
                C(i[o])[s](t);
                a.apply(n, t.get())
            }
            return this.pushStack(n)
        }
    });
    var me, ye = {};

    function ve(e, t) {
        var n, i = C(t.createElement(e)).appendTo(t.body),
            r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : C.css(i[0], "display");
        i.detach();
        return r
    }

    function xe(e) {
        var t = v,
            n = ye[e];
        if (!n) {
            n = ve(e, t);
            if (n === "none" || !n) {
                me = (me || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                t = me[0].contentDocument;
                t.write();
                t.close();
                n = ve(e, t);
                me.detach()
            }
            ye[e] = n
        }
        return n
    }
    var we = /^margin/;
    var be = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i");
    var Te = function(e) {
        if (e.ownerDocument.defaultView.opener) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }
        return h.getComputedStyle(e, null)
    };

    function Ce(e, t, n) {
        var i, r, o, s, a = e.style;
        n = n || Te(e);
        if (n) {
            s = n.getPropertyValue(t) || n[t]
        }
        if (n) {
            if (s === "" && !C.contains(e.ownerDocument, e)) {
                s = C.style(e, t)
            }
            if (be.test(s) && we.test(t)) {
                i = a.width;
                r = a.minWidth;
                o = a.maxWidth;
                a.minWidth = a.maxWidth = a.width = s;
                s = n.width;
                a.width = i;
                a.minWidth = r;
                a.maxWidth = o
            }
        }
        return s !== undefined ? s + "" : s
    }

    function ke(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }(function() {
        var t, n, i = v.documentElement,
            r = v.createElement("div"),
            o = v.createElement("div");
        if (!o.style) {
            return
        }
        o.style.backgroundClip = "content-box";
        o.cloneNode(true).style.backgroundClip = "";
        y.clearCloneStyle = o.style.backgroundClip === "content-box";
        r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        r.appendChild(o);

        function e() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            o.innerHTML = "";
            i.appendChild(r);
            var e = h.getComputedStyle(o, null);
            t = e.top !== "1%";
            n = e.width === "4px";
            i.removeChild(r)
        }
        if (h.getComputedStyle) {
            C.extend(y, {
                pixelPosition: function() {
                    e();
                    return t
                },
                boxSizingReliable: function() {
                    if (n == null) {
                        e()
                    }
                    return n
                },
                reliableMarginRight: function() {
                    var e, t = o.appendChild(v.createElement("div"));
                    t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    t.style.marginRight = t.style.width = "0";
                    o.style.width = "1px";
                    i.appendChild(r);
                    e = !parseFloat(h.getComputedStyle(t, null).marginRight);
                    i.removeChild(r);
                    o.removeChild(t);
                    return e
                }
            })
        }
    })();
    C.swap = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) {
            s[o] = e.style[o];
            e.style[o] = t[o]
        }
        r = n.apply(e, i || []);
        for (o in t) {
            e.style[o] = s[o]
        }
        return r
    };
    var Ne = /^(none|table(?!-c[ea]).+)/,
        Ee = new RegExp("^(" + B + ")(.*)$", "i"),
        Se = new RegExp("^([+-])=(" + B + ")", "i"),
        De = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ae = ["Webkit", "O", "Moz", "ms"];

    function Le(e, t) {
        if (t in e) {
            return t
        }
        var n = t[0].toUpperCase() + t.slice(1),
            i = t,
            r = Ae.length;
        while (r--) {
            t = Ae[r] + n;
            if (t in e) {
                return t
            }
        }
        return i
    }

    function qe(e, t, n) {
        var i = Ee.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function He(e, t, n, i, r) {
        var o = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; o < 4; o += 2) {
            if (n === "margin") {
                s += C.css(e, n + _[o], true, r)
            }
            if (i) {
                if (n === "content") {
                    s -= C.css(e, "padding" + _[o], true, r)
                }
                if (n !== "margin") {
                    s -= C.css(e, "border" + _[o] + "Width", true, r)
                }
            } else {
                s += C.css(e, "padding" + _[o], true, r);
                if (n !== "padding") {
                    s += C.css(e, "border" + _[o] + "Width", true, r)
                }
            }
        }
        return s
    }

    function Oe(e, t, n) {
        var i = true,
            r = t === "width" ? e.offsetWidth : e.offsetHeight,
            o = Te(e),
            s = C.css(e, "boxSizing", false, o) === "border-box";
        if (r <= 0 || r == null) {
            r = Ce(e, t, o);
            if (r < 0 || r == null) {
                r = e.style[t]
            }
            if (be.test(r)) {
                return r
            }
            i = s && (y.boxSizingReliable() || r === e.style[t]);
            r = parseFloat(r) || 0
        }
        return r + He(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function Fe(e, t) {
        var n, i, r, o = [],
            s = 0,
            a = e.length;
        for (; s < a; s++) {
            i = e[s];
            if (!i.style) {
                continue
            }
            o[s] = R.get(i, "olddisplay");
            n = i.style.display;
            if (t) {
                if (!o[s] && n === "none") {
                    i.style.display = ""
                }
                if (i.style.display === "" && z(i)) {
                    o[s] = R.access(i, "olddisplay", xe(i.nodeName))
                }
            } else {
                r = z(i);
                if (n !== "none" || !r) {
                    R.set(i, "olddisplay", r ? n : C.css(i, "display"))
                }
            }
        }
        for (s = 0; s < a; s++) {
            i = e[s];
            if (!i.style) {
                continue
            }
            if (!t || i.style.display === "none" || i.style.display === "") {
                i.style.display = t ? o[s] || "" : "none"
            }
        }
        return e
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ce(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return
            }
            var r, o, s, a = C.camelCase(t),
                u = e.style;
            t = C.cssProps[a] || (C.cssProps[a] = Le(u, a));
            s = C.cssHooks[t] || C.cssHooks[a];
            if (n !== undefined) {
                o = typeof n;
                if (o === "string" && (r = Se.exec(n))) {
                    n = (r[1] + 1) * r[2] + parseFloat(C.css(e, t));
                    o = "number"
                }
                if (n == null || n !== n) {
                    return
                }
                if (o === "number" && !C.cssNumber[a]) {
                    n += "px"
                }
                if (!y.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                    u[t] = "inherit"
                }
                if (!s || !("set" in s) || (n = s.set(e, n, i)) !== undefined) {
                    u[t] = n
                }
            } else {
                if (s && "get" in s && (r = s.get(e, false, i)) !== undefined) {
                    return r
                }
                return u[t]
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = C.camelCase(t);
            t = C.cssProps[a] || (C.cssProps[a] = Le(e.style, a));
            s = C.cssHooks[t] || C.cssHooks[a];
            if (s && "get" in s) {
                r = s.get(e, true, n)
            }
            if (r === undefined) {
                r = Ce(e, t, i)
            }
            if (r === "normal" && t in je) {
                r = je[t]
            }
            if (n === "" || n) {
                o = parseFloat(r);
                return n === true || C.isNumeric(o) ? o || 0 : r
            }
            return r
        }
    });
    C.each(["height", "width"], function(e, r) {
        C.cssHooks[r] = {
            get: function(e, t, n) {
                if (t) {
                    return Ne.test(C.css(e, "display")) && e.offsetWidth === 0 ? C.swap(e, De, function() {
                        return Oe(e, r, n)
                    }) : Oe(e, r, n)
                }
            },
            set: function(e, t, n) {
                var i = n && Te(e);
                return qe(e, t, n ? He(e, r, n, C.css(e, "boxSizing", false, i) === "border-box", i) : 0)
            }
        }
    });
    C.cssHooks.marginRight = ke(y.reliableMarginRight, function(e, t) {
        if (t) {
            return C.swap(e, {
                display: "inline-block"
            }, Ce, [e, "marginRight"])
        }
    });
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        C.cssHooks[r + o] = {
            expand: function(e) {
                var t = 0,
                    n = {},
                    i = typeof e === "string" ? e.split(" ") : [e];
                for (; t < 4; t++) {
                    n[r + _[t] + o] = i[t] || i[t - 2] || i[0]
                }
                return n
            }
        };
        if (!we.test(r)) {
            C.cssHooks[r + o].set = qe
        }
    });
    C.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (C.isArray(t)) {
                    i = Te(e);
                    r = t.length;
                    for (; s < r; s++) {
                        o[t[s]] = C.css(e, t[s], false, i)
                    }
                    return o
                }
                return n !== undefined ? C.style(e, t, n) : C.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Fe(this, true)
        },
        hide: function() {
            return Fe(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (z(this)) {
                    C(this).show()
                } else {
                    C(this).hide()
                }
            })
        }
    });

    function Pe(e, t, n, i, r) {
        return new Pe.prototype.init(e, t, n, i, r)
    }
    C.Tween = Pe;
    Pe.prototype = {
        constructor: Pe,
        init: function(e, t, n, i, r, o) {
            this.elem = e;
            this.prop = n;
            this.easing = r || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Pe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Pe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Pe.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            } else {
                this.pos = t = e
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (n && n.set) {
                n.set(this)
            } else {
                Pe.propHooks._default.set(this)
            }
            return this
        }
    };
    Pe.prototype.init.prototype = Pe.prototype;
    Pe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                    return e.elem[e.prop]
                }
                t = C.css(e.elem, e.prop, "");
                return !t || t === "auto" ? 0 : t
            },
            set: function(e) {
                if (C.fx.step[e.prop]) {
                    C.fx.step[e.prop](e)
                } else if (e.elem.style && (e.elem.style[C.cssProps[e.prop]] != null || C.cssHooks[e.prop])) {
                    C.style(e.elem, e.prop, e.now + e.unit)
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    };
    Pe.propHooks.scrollTop = Pe.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    };
    C.fx = Pe.prototype.init;
    C.fx.step = {};
    var Re, Me, We = /^(?:toggle|show|hide)$/,
        $e = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        Ie = /queueHooks$/,
        Be = [Ve],
        _e = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = $e.exec(t),
                    o = r && r[3] || (C.cssNumber[e] ? "" : "px"),
                    s = (C.cssNumber[e] || o !== "px" && +i) && $e.exec(C.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3];
                    r = r || [];
                    s = +i || 1;
                    do {
                        a = a || ".5";
                        s = s / a;
                        C.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / i) && a !== 1 && --u)
                }
                if (r) {
                    s = n.start = +s || +i || 0;
                    n.unit = o;
                    n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]
                }
                return n
            }]
        };

    function ze() {
        setTimeout(function() {
            Re = undefined
        });
        return Re = C.now()
    }

    function Xe(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) {
            n = _[i];
            r["margin" + n] = r["padding" + n] = e
        }
        if (t) {
            r.opacity = r.width = e
        }
        return r
    }

    function Ue(e, t, n) {
        var i, r = (_e[t] || []).concat(_e["*"]),
            o = 0,
            s = r.length;
        for (; o < s; o++) {
            if (i = r[o].call(n, t, e)) {
                return i
            }
        }
    }

    function Ve(t, e, n) {
        var i, r, o, s, a, u, f, l, c = this,
            p = {},
            d = t.style,
            h = t.nodeType && z(t),
            g = R.get(t, "fxshow");
        if (!n.queue) {
            a = C._queueHooks(t, "fx");
            if (a.unqueued == null) {
                a.unqueued = 0;
                u = a.empty.fire;
                a.empty.fire = function() {
                    if (!a.unqueued) {
                        u()
                    }
                }
            }
            a.unqueued++;
            c.always(function() {
                c.always(function() {
                    a.unqueued--;
                    if (!C.queue(t, "fx").length) {
                        a.empty.fire()
                    }
                })
            })
        }
        if (t.nodeType === 1 && ("height" in e || "width" in e)) {
            n.overflow = [d.overflow, d.overflowX, d.overflowY];
            f = C.css(t, "display");
            l = f === "none" ? R.get(t, "olddisplay") || xe(t.nodeName) : f;
            if (l === "inline" && C.css(t, "float") === "none") {
                d.display = "inline-block"
            }
        }
        if (n.overflow) {
            d.overflow = "hidden";
            c.always(function() {
                d.overflow = n.overflow[0];
                d.overflowX = n.overflow[1];
                d.overflowY = n.overflow[2]
            })
        }
        for (i in e) {
            r = e[i];
            if (We.exec(r)) {
                delete e[i];
                o = o || r === "toggle";
                if (r === (h ? "hide" : "show")) {
                    if (r === "show" && g && g[i] !== undefined) {
                        h = true
                    } else {
                        continue
                    }
                }
                p[i] = g && g[i] || C.style(t, i)
            } else {
                f = undefined
            }
        }
        if (!C.isEmptyObject(p)) {
            if (g) {
                if ("hidden" in g) {
                    h = g.hidden
                }
            } else {
                g = R.access(t, "fxshow", {})
            }
            if (o) {
                g.hidden = !h
            }
            if (h) {
                C(t).show()
            } else {
                c.done(function() {
                    C(t).hide()
                })
            }
            c.done(function() {
                var e;
                R.remove(t, "fxshow");
                for (e in p) {
                    C.style(t, e, p[e])
                }
            });
            for (i in p) {
                s = Ue(h ? g[i] : 0, i, c);
                if (!(i in g)) {
                    g[i] = s.start;
                    if (h) {
                        s.end = s.start;
                        s.start = i === "width" || i === "height" ? 1 : 0
                    }
                }
            }
        } else if ((f === "none" ? xe(t.nodeName) : f) === "inline") {
            d.display = f
        }
    }

    function Ye(e, t) {
        var n, i, r, o, s;
        for (n in e) {
            i = C.camelCase(n);
            r = t[i];
            o = e[n];
            if (C.isArray(o)) {
                r = o[1];
                o = e[n] = o[0]
            }
            if (n !== i) {
                e[i] = o;
                delete e[n]
            }
            s = C.cssHooks[i];
            if (s && "expand" in s) {
                o = s.expand(o);
                delete e[i];
                for (n in o) {
                    if (!(n in e)) {
                        e[n] = o[n];
                        t[n] = r
                    }
                }
            } else {
                t[i] = r
            }
        }
    }

    function Ge(s, e, t) {
        var n, a, i = 0,
            r = Be.length,
            u = C.Deferred().always(function() {
                delete o.elem
            }),
            o = function() {
                if (a) {
                    return false
                }
                var e = Re || ze(),
                    t = Math.max(0, f.startTime + f.duration - e),
                    n = t / f.duration || 0,
                    i = 1 - n,
                    r = 0,
                    o = f.tweens.length;
                for (; r < o; r++) {
                    f.tweens[r].run(i)
                }
                u.notifyWith(s, [f, i, t]);
                if (i < 1 && o) {
                    return t
                } else {
                    u.resolveWith(s, [f]);
                    return false
                }
            },
            f = u.promise({
                elem: s,
                props: C.extend({}, e),
                opts: C.extend(true, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Re || ze(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = C.Tween(s, f.opts, e, t, f.opts.specialEasing[e] || f.opts.easing);
                    f.tweens.push(n);
                    return n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? f.tweens.length : 0;
                    if (a) {
                        return this
                    }
                    a = true;
                    for (; t < n; t++) {
                        f.tweens[t].run(1)
                    }
                    if (e) {
                        u.resolveWith(s, [f, e])
                    } else {
                        u.rejectWith(s, [f, e])
                    }
                    return this
                }
            }),
            l = f.props;
        Ye(l, f.opts.specialEasing);
        for (; i < r; i++) {
            n = Be[i].call(f, s, l, f.opts);
            if (n) {
                return n
            }
        }
        C.map(l, Ue, f);
        if (C.isFunction(f.opts.start)) {
            f.opts.start.call(s, f)
        }
        C.fx.timer(C.extend(o, {
            elem: s,
            anim: f,
            queue: f.opts.queue
        }));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    C.Animation = C.extend(Ge, {
        tweener: function(e, t) {
            if (C.isFunction(e)) {
                t = e;
                e = ["*"]
            } else {
                e = e.split(" ")
            }
            var n, i = 0,
                r = e.length;
            for (; i < r; i++) {
                n = e[i];
                _e[n] = _e[n] || [];
                _e[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            if (t) {
                Be.unshift(e)
            } else {
                Be.push(e)
            }
        }
    });
    C.speed = function(e, t, n) {
        var i = e && typeof e === "object" ? C.extend({}, e) : {
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        i.duration = C.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default;
        if (i.queue == null || i.queue === true) {
            i.queue = "fx"
        }
        i.old = i.complete;
        i.complete = function() {
            if (C.isFunction(i.old)) {
                i.old.call(this)
            }
            if (i.queue) {
                C.dequeue(this, i.queue)
            }
        };
        return i
    };
    C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = C.isEmptyObject(t),
                o = C.speed(e, n, i),
                s = function() {
                    var e = Ge(this, C.extend({}, t), o);
                    if (r || R.get(this, "finish")) {
                        e.stop(true)
                    }
                };
            s.finish = s;
            return r || o.queue === false ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop;
                t(o)
            };
            if (typeof r !== "string") {
                o = e;
                e = r;
                r = undefined
            }
            if (e && r !== false) {
                this.queue(r || "fx", [])
            }
            return this.each(function() {
                var e = true,
                    t = r != null && r + "queueHooks",
                    n = C.timers,
                    i = R.get(this);
                if (t) {
                    if (i[t] && i[t].stop) {
                        s(i[t])
                    }
                } else {
                    for (t in i) {
                        if (i[t] && i[t].stop && Ie.test(t)) {
                            s(i[t])
                        }
                    }
                }
                for (t = n.length; t--;) {
                    if (n[t].elem === this && (r == null || n[t].queue === r)) {
                        n[t].anim.stop(o);
                        e = false;
                        n.splice(t, 1)
                    }
                }
                if (e || !o) {
                    C.dequeue(this, r)
                }
            })
        },
        finish: function(s) {
            if (s !== false) {
                s = s || "fx"
            }
            return this.each(function() {
                var e, t = R.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = C.timers,
                    o = n ? n.length : 0;
                t.finish = true;
                C.queue(this, s, []);
                if (i && i.stop) {
                    i.stop.call(this, true)
                }
                for (e = r.length; e--;) {
                    if (r[e].elem === this && r[e].queue === s) {
                        r[e].anim.stop(true);
                        r.splice(e, 1)
                    }
                }
                for (e = 0; e < o; e++) {
                    if (n[e] && n[e].finish) {
                        n[e].finish.call(this)
                    }
                }
                delete t.finish
            })
        }
    });
    C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return e == null || typeof e === "boolean" ? r.apply(this, arguments) : this.animate(Xe(i, true), e, t, n)
        }
    });
    C.each({
        slideDown: Xe("show"),
        slideUp: Xe("hide"),
        slideToggle: Xe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    });
    C.timers = [];
    C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        Re = C.now();
        for (; t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) {
                n.splice(t--, 1)
            }
        }
        if (!n.length) {
            C.fx.stop()
        }
        Re = undefined
    };
    C.fx.timer = function(e) {
        C.timers.push(e);
        if (e()) {
            C.fx.start()
        } else {
            C.timers.pop()
        }
    };
    C.fx.interval = 13;
    C.fx.start = function() {
        if (!Me) {
            Me = setInterval(C.fx.tick, C.fx.interval)
        }
    };
    C.fx.stop = function() {
        clearInterval(Me);
        Me = null
    };
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    C.fn.delay = function(i, e) {
        i = C.fx ? C.fx.speeds[i] || i : i;
        e = e || "fx";
        return this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    };
    (function() {
        var e = v.createElement("input"),
            t = v.createElement("select"),
            n = t.appendChild(v.createElement("option"));
        e.type = "checkbox";
        y.checkOn = e.value !== "";
        y.optSelected = n.selected;
        t.disabled = true;
        y.optDisabled = !n.disabled;
        e = v.createElement("input");
        e.value = "t";
        e.type = "radio";
        y.radioValue = e.value === "t"
    })();
    var Qe, Je, Ke = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return F(this, C.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    });
    C.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) {
                return
            }
            if (typeof e.getAttribute === U) {
                return C.prop(e, t, n)
            }
            if (o !== 1 || !C.isXMLDoc(e)) {
                t = t.toLowerCase();
                i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? Je : Qe)
            }
            if (n !== undefined) {
                if (n === null) {
                    C.removeAttr(e, t)
                } else if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                    return r
                } else {
                    e.setAttribute(t, n + "");
                    return n
                }
            } else if (i && "get" in i && (r = i.get(e, t)) !== null) {
                return r
            } else {
                r = C.find.attr(e, t);
                return r == null ? undefined : r
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(A);
            if (o && e.nodeType === 1) {
                while (n = o[r++]) {
                    i = C.propFix[n] || n;
                    if (C.expr.match.bool.test(n)) {
                        e[i] = false
                    }
                    e.removeAttribute(n)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && t === "radio" && C.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) {
                            e.value = n
                        }
                        return t
                    }
                }
            }
        }
    });
    Je = {
        set: function(e, t, n) {
            if (t === false) {
                C.removeAttr(e, n)
            } else {
                e.setAttribute(n, n)
            }
            return n
        }
    };
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Ke[t] || C.find.attr;
        Ke[t] = function(e, t, n) {
            var i, r;
            if (!n) {
                r = Ke[t];
                Ke[t] = i;
                i = o(e, t, n) != null ? t.toLowerCase() : null;
                Ke[t] = r
            }
            return i
        }
    });
    var Ze = /^(?:input|select|textarea|button)$/i;
    C.fn.extend({
        prop: function(e, t) {
            return F(this, C.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    });
    C.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, r, o, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2) {
                return
            }
            o = s !== 1 || !C.isXMLDoc(e);
            if (o) {
                t = C.propFix[t] || t;
                r = C.propHooks[t]
            }
            if (n !== undefined) {
                return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n
            } else {
                return r && "get" in r && (i = r.get(e, t)) !== null ? i : e[t]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ze.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    });
    if (!y.optSelected) {
        C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                if (t && t.parentNode) {
                    t.parentNode.selectedIndex
                }
                return null
            }
        }
    }
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    });
    var et = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = typeof t === "string" && t,
                u = 0,
                f = this.length;
            if (C.isFunction(t)) {
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, this.className))
                })
            }
            if (a) {
                e = (t || "").match(A) || [];
                for (; u < f; u++) {
                    n = this[u];
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(et, " ") : " ");
                    if (i) {
                        o = 0;
                        while (r = e[o++]) {
                            if (i.indexOf(" " + r + " ") < 0) {
                                i += r + " "
                            }
                        }
                        s = C.trim(i);
                        if (n.className !== s) {
                            n.className = s
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = arguments.length === 0 || typeof t === "string" && t,
                u = 0,
                f = this.length;
            if (C.isFunction(t)) {
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, this.className))
                })
            }
            if (a) {
                e = (t || "").match(A) || [];
                for (; u < f; u++) {
                    n = this[u];
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(et, " ") : "");
                    if (i) {
                        o = 0;
                        while (r = e[o++]) {
                            while (i.indexOf(" " + r + " ") >= 0) {
                                i = i.replace(" " + r + " ", " ")
                            }
                        }
                        s = t ? C.trim(i) : "";
                        if (n.className !== s) {
                            n.className = s
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r;
            if (typeof t === "boolean" && o === "string") {
                return t ? this.addClass(r) : this.removeClass(r)
            }
            if (C.isFunction(r)) {
                return this.each(function(e) {
                    C(this).toggleClass(r.call(this, e, this.className, t), t)
                })
            }
            return this.each(function() {
                if (o === "string") {
                    var e, t = 0,
                        n = C(this),
                        i = r.match(A) || [];
                    while (e = i[t++]) {
                        if (n.hasClass(e)) {
                            n.removeClass(e)
                        } else {
                            n.addClass(e)
                        }
                    }
                } else if (o === U || o === "boolean") {
                    if (this.className) {
                        R.set(this, "__className__", this.className)
                    }
                    this.className = this.className || r === false ? "" : R.get(this, "__className__") || ""
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                i = this.length;
            for (; n < i; n++) {
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(et, " ").indexOf(t) >= 0) {
                    return true
                }
            }
            return false
        }
    });
    var tt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            if (!arguments.length) {
                if (t) {
                    i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()];
                    if (i && "get" in i && (e = i.get(t, "value")) !== undefined) {
                        return e
                    }
                    e = t.value;
                    return typeof e === "string" ? e.replace(tt, "") : e == null ? "" : e
                }
                return
            }
            r = C.isFunction(n);
            return this.each(function(e) {
                var t;
                if (this.nodeType !== 1) {
                    return
                }
                if (r) {
                    t = n.call(this, e, C(this).val())
                } else {
                    t = n
                }
                if (t == null) {
                    t = ""
                } else if (typeof t === "number") {
                    t += ""
                } else if (C.isArray(t)) {
                    t = C.map(t, function(e) {
                        return e == null ? "" : e + ""
                    })
                }
                i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, t, "value") === undefined) {
                    this.value = t
                }
            })
        }
    });
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return t != null ? t : C.trim(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i = e.options,
                        r = e.selectedIndex,
                        o = e.type === "select-one" || r < 0,
                        s = o ? null : [],
                        a = o ? r + 1 : i.length,
                        u = r < 0 ? a : o ? r : 0;
                    for (; u < a; u++) {
                        n = i[u];
                        if ((n.selected || u === r) && (y.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                            t = C(n).val();
                            if (o) {
                                return t
                            }
                            s.push(t)
                        }
                    }
                    return s
                },
                set: function(e, t) {
                    var n, i, r = e.options,
                        o = C.makeArray(t),
                        s = r.length;
                    while (s--) {
                        i = r[s];
                        if (i.selected = C.inArray(i.value, o) >= 0) {
                            n = true
                        }
                    }
                    if (!n) {
                        e.selectedIndex = -1
                    }
                    return o
                }
            }
        }
    });
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (C.isArray(t)) {
                    return e.checked = C.inArray(C(e).val(), t) >= 0
                }
            }
        };
        if (!y.checkOn) {
            C.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    C.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nt = C.now();
    var it = /\?/;
    C.parseJSON = function(e) {
        return JSON.parse(e + "")
    };
    C.parseXML = function(e) {
        var t, n;
        if (!e || typeof e !== "string") {
            return null
        }
        try {
            n = new DOMParser;
            t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = undefined
        }
        if (!t || t.getElementsByTagName("parsererror").length) {
            C.error("Invalid XML: " + e)
        }
        return t
    };
    var rt = /#.*$/,
        ot = /([?&])_=[^&]*/,
        st = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        at = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ut = /^(?:GET|HEAD)$/,
        ft = /^\/\//,
        lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ct = {},
        pt = {},
        dt = "*/".concat("*"),
        ht = h.location.href,
        gt = lt.exec(ht.toLowerCase()) || [];

    function mt(o) {
        return function(e, t) {
            if (typeof e !== "string") {
                t = e;
                e = "*"
            }
            var n, i = 0,
                r = e.toLowerCase().match(A) || [];
            if (C.isFunction(t)) {
                while (n = r[i++]) {
                    if (n[0] === "+") {
                        n = n.slice(1) || "*";
                        (o[n] = o[n] || []).unshift(t)
                    } else {
                        (o[n] = o[n] || []).push(t)
                    }
                }
            }
        }
    }

    function yt(t, r, o, s) {
        var a = {},
            u = t === pt;

        function f(e) {
            var i;
            a[e] = true;
            C.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                if (typeof n === "string" && !u && !a[n]) {
                    r.dataTypes.unshift(n);
                    f(n);
                    return false
                } else if (u) {
                    return !(i = n)
                }
            });
            return i
        }
        return f(r.dataTypes[0]) || !a["*"] && f("*")
    }

    function vt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) {
            if (t[n] !== undefined) {
                (r[n] ? e : i || (i = {}))[n] = t[n]
            }
        }
        if (i) {
            C.extend(true, e, i)
        }
        return e
    }

    function xt(e, t, n) {
        var i, r, o, s, a = e.contents,
            u = e.dataTypes;
        while (u[0] === "*") {
            u.shift();
            if (i === undefined) {
                i = e.mimeType || t.getResponseHeader("Content-Type")
            }
        }
        if (i) {
            for (r in a) {
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
            }
        }
        if (u[0] in n) {
            o = u[0]
        } else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                if (!s) {
                    s = r
                }
            }
            o = o || s
        }
        if (o) {
            if (o !== u[0]) {
                u.unshift(o)
            }
            return n[o]
        }
    }

    function wt(e, t, n, i) {
        var r, o, s, a, u, f = {},
            l = e.dataTypes.slice();
        if (l[1]) {
            for (s in e.converters) {
                f[s.toLowerCase()] = e.converters[s]
            }
        }
        o = l.shift();
        while (o) {
            if (e.responseFields[o]) {
                n[e.responseFields[o]] = t
            }
            if (!u && i && e.dataFilter) {
                t = e.dataFilter(t, e.dataType)
            }
            u = o;
            o = l.shift();
            if (o) {
                if (o === "*") {
                    o = u
                } else if (u !== "*" && u !== o) {
                    s = f[u + " " + o] || f["* " + o];
                    if (!s) {
                        for (r in f) {
                            a = r.split(" ");
                            if (a[1] === o) {
                                s = f[u + " " + a[0]] || f["* " + a[0]];
                                if (s) {
                                    if (s === true) {
                                        s = f[r]
                                    } else if (f[r] !== true) {
                                        o = a[0];
                                        l.unshift(a[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (s !== true) {
                        if (s && e["throws"]) {
                            t = s(t)
                        } else {
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: at.test(gt[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? vt(vt(e, C.ajaxSettings), t) : vt(C.ajaxSettings, e)
        },
        ajaxPrefilter: mt(ct),
        ajaxTransport: mt(pt),
        ajax: function(e, t) {
            if (typeof e === "object") {
                t = e;
                e = undefined
            }
            t = t || {};
            var l, c, p, n, d, i, h, r, g = C.ajaxSetup({}, t),
                m = g.context || g,
                y = g.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                v = C.Deferred(),
                x = C.Callbacks("once memory"),
                w = g.statusCode || {},
                o = {},
                s = {},
                b = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!n) {
                                n = {};
                                while (t = st.exec(p)) {
                                    n[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = n[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        if (!b) {
                            e = s[n] = s[n] || e;
                            o[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function(e) {
                        if (!b) {
                            g.mimeType = e
                        }
                        return this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (b < 2) {
                                for (t in e) {
                                    w[t] = [w[t], e[t]]
                                }
                            } else {
                                T.always(e[T.status])
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        if (l) {
                            l.abort(t)
                        }
                        u(0, t);
                        return this
                    }
                };
            v.promise(T).complete = x.add;
            T.success = T.done;
            T.error = T.fail;
            g.url = ((e || g.url || ht) + "").replace(rt, "").replace(ft, gt[1] + "//");
            g.type = t.method || t.type || g.method || g.type;
            g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(A) || [""];
            if (g.crossDomain == null) {
                i = lt.exec(g.url.toLowerCase());
                g.crossDomain = !!(i && (i[1] !== gt[1] || i[2] !== gt[2] || (i[3] || (i[1] === "http:" ? "80" : "443")) !== (gt[3] || (gt[1] === "http:" ? "80" : "443"))))
            }
            if (g.data && g.processData && typeof g.data !== "string") {
                g.data = C.param(g.data, g.traditional)
            }
            yt(ct, g, t, T);
            if (b === 2) {
                return T
            }
            h = C.event && g.global;
            if (h && C.active++ === 0) {
                C.event.trigger("ajaxStart")
            }
            g.type = g.type.toUpperCase();
            g.hasContent = !ut.test(g.type);
            c = g.url;
            if (!g.hasContent) {
                if (g.data) {
                    c = g.url += (it.test(c) ? "&" : "?") + g.data;
                    delete g.data
                }
                if (g.cache === false) {
                    g.url = ot.test(c) ? c.replace(ot, "$1_=" + nt++) : c + (it.test(c) ? "&" : "?") + "_=" + nt++
                }
            }
            if (g.ifModified) {
                if (C.lastModified[c]) {
                    T.setRequestHeader("If-Modified-Since", C.lastModified[c])
                }
                if (C.etag[c]) {
                    T.setRequestHeader("If-None-Match", C.etag[c])
                }
            }
            if (g.data && g.hasContent && g.contentType !== false || t.contentType) {
                T.setRequestHeader("Content-Type", g.contentType)
            }
            T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + dt + "; q=0.01" : "") : g.accepts["*"]);
            for (r in g.headers) {
                T.setRequestHeader(r, g.headers[r])
            }
            if (g.beforeSend && (g.beforeSend.call(m, T, g) === false || b === 2)) {
                return T.abort()
            }
            a = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                T[r](g[r])
            }
            l = yt(pt, g, t, T);
            if (!l) {
                u(-1, "No Transport")
            } else {
                T.readyState = 1;
                if (h) {
                    y.trigger("ajaxSend", [T, g])
                }
                if (g.async && g.timeout > 0) {
                    d = setTimeout(function() {
                        T.abort("timeout")
                    }, g.timeout)
                }
                try {
                    b = 1;
                    l.send(o, u)
                } catch (e) {
                    if (b < 2) {
                        u(-1, e)
                    } else {
                        throw e
                    }
                }
            }

            function u(e, t, n, i) {
                var r, o, s, a, u, f = t;
                if (b === 2) {
                    return
                }
                b = 2;
                if (d) {
                    clearTimeout(d)
                }
                l = undefined;
                p = i || "";
                T.readyState = e > 0 ? 4 : 0;
                r = e >= 200 && e < 300 || e === 304;
                if (n) {
                    a = xt(g, T, n)
                }
                a = wt(g, a, T, r);
                if (r) {
                    if (g.ifModified) {
                        u = T.getResponseHeader("Last-Modified");
                        if (u) {
                            C.lastModified[c] = u
                        }
                        u = T.getResponseHeader("etag");
                        if (u) {
                            C.etag[c] = u
                        }
                    }
                    if (e === 204 || g.type === "HEAD") {
                        f = "nocontent"
                    } else if (e === 304) {
                        f = "notmodified"
                    } else {
                        f = a.state;
                        o = a.data;
                        s = a.error;
                        r = !s
                    }
                } else {
                    s = f;
                    if (e || !f) {
                        f = "error";
                        if (e < 0) {
                            e = 0
                        }
                    }
                }
                T.status = e;
                T.statusText = (t || f) + "";
                if (r) {
                    v.resolveWith(m, [o, f, T])
                } else {
                    v.rejectWith(m, [T, f, s])
                }
                T.statusCode(w);
                w = undefined;
                if (h) {
                    y.trigger(r ? "ajaxSuccess" : "ajaxError", [T, g, r ? o : s])
                }
                x.fireWith(m, [T, f]);
                if (h) {
                    y.trigger("ajaxComplete", [T, g]);
                    if (!--C.active) {
                        C.event.trigger("ajaxStop")
                    }
                }
            }
            return T
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, undefined, t, "script")
        }
    });
    C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            if (C.isFunction(t)) {
                i = i || n;
                n = t;
                t = undefined
            }
            return C.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            })
        }
    });
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            throws: true
        })
    };
    C.fn.extend({
        wrapAll: function(t) {
            var e;
            if (C.isFunction(t)) {
                return this.each(function(e) {
                    C(this).wrapAll(t.call(this, e))
                })
            }
            if (this[0]) {
                e = C(t, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    e.insertBefore(this[0])
                }
                e.map(function() {
                    var e = this;
                    while (e.firstElementChild) {
                        e = e.firstElementChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            if (C.isFunction(n)) {
                return this.each(function(e) {
                    C(this).wrapInner(n.call(this, e))
                })
            }
            return this.each(function() {
                var e = C(this),
                    t = e.contents();
                if (t.length) {
                    t.wrapAll(n)
                } else {
                    e.append(n)
                }
            })
        },
        wrap: function(t) {
            var n = C.isFunction(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!C.nodeName(this, "body")) {
                    C(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    C.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    };
    C.expr.filters.visible = function(e) {
        return !C.expr.filters.hidden(e)
    };
    var bt = /%20/g,
        Tt = /\[\]$/,
        Ct = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Et(n, e, i, r) {
        var t;
        if (C.isArray(e)) {
            C.each(e, function(e, t) {
                if (i || Tt.test(n)) {
                    r(n, t)
                } else {
                    Et(n + "[" + (typeof t === "object" ? e : "") + "]", t, i, r)
                }
            })
        } else if (!i && C.type(e) === "object") {
            for (t in e) {
                Et(n + "[" + t + "]", e[t], i, r)
            }
        } else {
            r(n, e)
        }
    }
    C.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = C.isFunction(t) ? t() : t == null ? "" : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined) {
            t = C.ajaxSettings && C.ajaxSettings.traditional
        }
        if (C.isArray(e) || e.jquery && !C.isPlainObject(e)) {
            C.each(e, function() {
                r(this.name, this.value)
            })
        } else {
            for (n in e) {
                Et(n, e[n], t, r)
            }
        }
        return i.join("&").replace(bt, "+")
    };
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !X.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return n == null ? null : C.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    C.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var St = 0,
        Dt = {},
        jt = {
            0: 200,
            1223: 204
        },
        At = C.ajaxSettings.xhr();
    if (h.attachEvent) {
        h.attachEvent("onunload", function() {
            for (var e in Dt) {
                Dt[e]()
            }
        })
    }
    y.cors = !!At && "withCredentials" in At;
    y.ajax = At = !!At;
    C.ajaxTransport(function(o) {
        var s;
        if (y.cors || At && !o.crossDomain) {
            return {
                send: function(e, t) {
                    var n, i = o.xhr(),
                        r = ++St;
                    i.open(o.type, o.url, o.async, o.username, o.password);
                    if (o.xhrFields) {
                        for (n in o.xhrFields) {
                            i[n] = o.xhrFields[n]
                        }
                    }
                    if (o.mimeType && i.overrideMimeType) {
                        i.overrideMimeType(o.mimeType)
                    }
                    if (!o.crossDomain && !e["X-Requested-With"]) {
                        e["X-Requested-With"] = "XMLHttpRequest"
                    }
                    for (n in e) {
                        i.setRequestHeader(n, e[n])
                    }
                    s = function(e) {
                        return function() {
                            if (s) {
                                delete Dt[r];
                                s = i.onload = i.onerror = null;
                                if (e === "abort") {
                                    i.abort()
                                } else if (e === "error") {
                                    t(i.status, i.statusText)
                                } else {
                                    t(jt[i.status] || i.status, i.statusText, typeof i.responseText === "string" ? {
                                        text: i.responseText
                                    } : undefined, i.getAllResponseHeaders())
                                }
                            }
                        }
                    };
                    i.onload = s();
                    i.onerror = s("error");
                    s = Dt[r] = s("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (s) {
                            throw e
                        }
                    }
                },
                abort: function() {
                    if (s) {
                        s()
                    }
                }
            }
        }
    });
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                C.globalEval(e);
                return e
            }
        }
    });
    C.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET"
        }
    });
    C.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, r;
            return {
                send: function(e, t) {
                    i = C("<script>").prop({
                        async: true,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove();
                        r = null;
                        if (e) {
                            t(e.type === "error" ? 404 : 200, e.type)
                        }
                    });
                    v.head.appendChild(i[0])
                },
                abort: function() {
                    if (r) {
                        r()
                    }
                }
            }
        }
    });
    var Lt = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || C.expando + "_" + nt++;
            this[e] = true;
            return e
        }
    });
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = e.jsonp !== false && (qt.test(e.url) ? "url" : typeof e.data === "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");
        if (s || e.dataTypes[0] === "jsonp") {
            i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            if (s) {
                e[s] = e[s].replace(qt, "$1" + i)
            } else if (e.jsonp !== false) {
                e.url += (it.test(e.url) ? "&" : "?") + e.jsonp + "=" + i
            }
            e.converters["script json"] = function() {
                if (!o) {
                    C.error(i + " was not called")
                }
                return o[0]
            };
            e.dataTypes[0] = "json";
            r = h[i];
            h[i] = function() {
                o = arguments
            };
            n.always(function() {
                h[i] = r;
                if (e[i]) {
                    e.jsonpCallback = t.jsonpCallback;
                    Lt.push(i)
                }
                if (o && C.isFunction(r)) {
                    r(o[0])
                }
                o = r = undefined
            });
            return "script"
        }
    });
    C.parseHTML = function(e, t, n) {
        if (!e || typeof e !== "string") {
            return null
        }
        if (typeof t === "boolean") {
            n = t;
            t = false
        }
        t = t || v;
        var i = w.exec(e),
            r = !n && [];
        if (i) {
            return [t.createElement(i[1])]
        }
        i = C.buildFragment([e], t, r);
        if (r && r.length) {
            C(r).remove()
        }
        return C.merge([], i.childNodes)
    };
    var Ht = C.fn.load;
    C.fn.load = function(e, t, n) {
        if (typeof e !== "string" && Ht) {
            return Ht.apply(this, arguments)
        }
        var i, r, o, s = this,
            a = e.indexOf(" ");
        if (a >= 0) {
            i = C.trim(e.slice(a));
            e = e.slice(0, a)
        }
        if (C.isFunction(t)) {
            n = t;
            t = undefined
        } else if (t && typeof t === "object") {
            r = "POST"
        }
        if (s.length > 0) {
            C.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments;
                s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                s.each(n, o || [e.responseText, t, e])
            })
        }
        return this
    };
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    });
    C.expr.filters.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Ot = h.document.documentElement;

    function Ft(e) {
        return C.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }
    C.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, u, f, l = C.css(e, "position"),
                c = C(e),
                p = {};
            if (l === "static") {
                e.style.position = "relative"
            }
            a = c.offset();
            o = C.css(e, "top");
            u = C.css(e, "left");
            f = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
            if (f) {
                i = c.position();
                s = i.top;
                r = i.left
            } else {
                s = parseFloat(o) || 0;
                r = parseFloat(u) || 0
            }
            if (C.isFunction(t)) {
                t = t.call(e, n, a)
            }
            if (t.top != null) {
                p.top = t.top - a.top + s
            }
            if (t.left != null) {
                p.left = t.left - a.left + r
            }
            if ("using" in t) {
                t.using.call(e, p)
            } else {
                c.css(p)
            }
        }
    };
    C.fn.extend({
        offset: function(t) {
            if (arguments.length) {
                return t === undefined ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                })
            }
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (!o) {
                return
            }
            e = o.documentElement;
            if (!C.contains(e, i)) {
                return r
            }
            if (typeof i.getBoundingClientRect !== U) {
                r = i.getBoundingClientRect()
            }
            n = Ft(o);
            return {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var e, t, n = this[0],
                i = {
                    top: 0,
                    left: 0
                };
            if (C.css(n, "position") === "fixed") {
                t = n.getBoundingClientRect()
            } else {
                e = this.offsetParent();
                t = this.offset();
                if (!C.nodeName(e[0], "html")) {
                    i = e.offset()
                }
                i.top += C.css(e[0], "borderTopWidth", true);
                i.left += C.css(e[0], "borderLeftWidth", true)
            }
            return {
                top: t.top - i.top - C.css(n, "marginTop", true),
                left: t.left - i.left - C.css(n, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || Ot;
                while (e && (!C.nodeName(e, "html") && C.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || Ot
            })
        }
    });
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var i = Ft(e);
                if (n === undefined) {
                    return i ? i[r] : e[t]
                }
                if (i) {
                    i.scrollTo(!o ? n : h.pageXOffset, o ? n : h.pageYOffset)
                } else {
                    e[t] = n
                }
            }, t, e, arguments.length, null)
        }
    });
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = ke(y.pixelPosition, function(e, t) {
            if (t) {
                t = Ce(e, n);
                return be.test(t) ? C(e).position()[n] + "px" : t
            }
        })
    });
    C.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        C.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(i, e) {
            C.fn[e] = function(e, t) {
                var n = arguments.length && (i || typeof e !== "boolean"),
                    r = i || (e === true || t === true ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var i;
                    if (C.isWindow(e)) {
                        return e.document.documentElement["client" + o]
                    }
                    if (e.nodeType === 9) {
                        i = e.documentElement;
                        return Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])
                    }
                    return n === undefined ? C.css(e, t, r) : C.style(e, t, n, r)
                }, s, n ? e : undefined, n, null)
            }
        })
    });
    C.fn.size = function() {
        return this.length
    };
    C.fn.andSelf = C.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return C
        })
    }
    var Pt = h.jQuery,
        Rt = h.$;
    C.noConflict = function(e) {
        if (h.$ === C) {
            h.$ = Rt
        }
        if (e && h.jQuery === C) {
            h.jQuery = Pt
        }
        return C
    };
    if (typeof e === U) {
        h.jQuery = h.$ = C
    }
    return C
});