/*!
 * taboverride v4.0.0-dev
 * https://github.com/wjbryant/taboverride
 * Copyright (c) 2013 Bill Bryant. Licensed under MIT.
 * See license text here: http://opensource.org/licenses/mit
 */
(function(e) {
    "use strict";
    var t;
    "object" == typeof exports ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t = window.tabOverride = {}, e(t))
})(function(e) {
    "use strict";

    function t(e, t) {
        var n, r, i, l = ["alt", "ctrl", "meta", "shift"],
            o = e.length,
            a = !0;
        for (n = 0; o > n; n += 1)
            if (!t[e[n]]) {
                a = !1;
                break
            } if (a)
            for (n = 0; l.length > n; n += 1) {
                if (i = l[n] + "Key", t[i])
                    if (o) {
                        for (a = !1, r = 0; o > r; r += 1)
                            if (i === e[r]) {
                                a = !0;
                                break
                            }
                    } else a = !1;
                if (!a) break
            }
        return a
    }

    function n(e, n) {
        return e === v && t(p, n)
    }

    function r(e, n) {
        return e === g && t(m, n)
    }

    function i(e, t) {
        return function(n, r) {
            var i, l = "";
            if (arguments.length) {
                if ("number" == typeof n && (e(n), t.length = 0, r && r.length))
                    for (i = 0; r.length > i; i += 1) t.push(r[i] + "Key");
                return this
            }
            for (i = 0; t.length > i; i += 1) l += t[i].slice(0, -3) + "+";
            return l + e()
        }
    }

    function l(e) {
        e = e || event;
        var t, i, l, o, a, s, c, p, m, x, b, S, k, T, w, L, O, K, A = e.currentTarget || e.srcElement,
            C = e.keyCode,
            D = "character";
        if ((!A.nodeName || "textarea" === A.nodeName.toLowerCase()) && (C === v || C === g || 13 === C && y)) {
            if (E = !1, l = A.value, p = A.scrollTop, "number" == typeof A.selectionStart) m = A.selectionStart, x = A.selectionEnd, b = l.slice(m, x);
            else {
                if (!d.selection) return;
                o = d.selection.createRange(), b = o.text, a = o.duplicate(), a.moveToElementText(A), a.setEndPoint("EndToEnd", o), x = a.text.length, m = x - b.length, f > 1 ? (s = l.slice(0, m).split(u).length - 1, c = b.split(u).length - 1) : s = c = 0
            }
            if (C === v || C === g)
                if (t = h, i = t.length, T = 0, w = 0, L = 0, m !== x && -1 !== b.indexOf("\n"))
                    if (S = 0 === m || "\n" === l.charAt(m - 1) ? m : l.lastIndexOf("\n", m - 1) + 1, x === l.length || "\n" === l.charAt(x) ? k = x : "\n" === l.charAt(x - 1) ? k = x - 1 : (k = l.indexOf("\n", x), -1 === k && (k = l.length)), n(C, e)) T = 1, A.value = l.slice(0, S) + t + l.slice(S, k).replace(/\n/g, function() {
                        return T += 1, "\n" + t
                    }) + l.slice(k), o ? (o.collapse(), o.moveEnd(D, x + T * i - c - s), o.moveStart(D, m + i - s), o.select()) : (A.selectionStart = m + i, A.selectionEnd = x + T * i, A.scrollTop = p);
                    else {
                        if (!r(C, e)) return;
                        0 === l.slice(S).indexOf(t) && (S === m ? b = b.slice(i) : L = i, w = i), A.value = l.slice(0, S) + l.slice(S + L, m) + b.replace(RegExp("\n" + t, "g"), function() {
                            return T += 1, "\n"
                        }) + l.slice(x), o ? (o.collapse(), o.moveEnd(D, x - w - T * i - c - s), o.moveStart(D, m - L - s), o.select()) : (A.selectionStart = m - L, A.selectionEnd = x - w - T * i)
                    }
            else if (n(C, e)) o ? (o.text = t, o.select()) : (A.value = l.slice(0, m) + t + l.slice(x), A.selectionEnd = A.selectionStart = m + i, A.scrollTop = p);
            else {
                if (!r(C, e)) return;
                0 === l.slice(m - i).indexOf(t) && (A.value = l.slice(0, m - i) + l.slice(m), o ? (o.move(D, m - i - s), o.select()) : (A.selectionEnd = A.selectionStart = m - i, A.scrollTop = p))
            } else if (y) {
                if (0 === m || "\n" === l.charAt(m - 1)) return E = !0, void 0;
                if (S = l.lastIndexOf("\n", m - 1) + 1, k = l.indexOf("\n", m), -1 === k && (k = l.length), O = l.slice(S, k).match(/^[ \t]*/)[0], K = O.length, S + K > m) return E = !0, void 0;
                o ? (o.text = "\n" + O, o.select()) : (A.value = l.slice(0, m) + "\n" + O + l.slice(x), A.selectionEnd = A.selectionStart = m + f + K, A.scrollTop = p)
            }
            return e.preventDefault ? (e.preventDefault(), void 0) : (e.returnValue = !1, !1)
        }
    }

    function o(e) {
        e = e || event;
        var t = e.keyCode;
        if (n(t, e) || r(t, e) || 13 === t && y && !E) {
            if (!e.preventDefault) return e.returnValue = !1, !1;
            e.preventDefault()
        }
    }

    function a(e) {
        function t(t) {
            for (n = 0; l > n; n += 1) t(e[n].type, e[n].handler)
        }
        var n, r, i, l = e.length;
        return d.addEventListener ? (r = function(e) {
            i(e), t(function(t, n) {
                e.addEventListener(t, n, !1)
            })
        }, i = function(e) {
            t(function(t, n) {
                e.removeEventListener(t, n, !1)
            })
        }) : d.attachEvent ? (r = function(e) {
            i(e), t(function(t, n) {
                e.attachEvent("on" + t, n)
            })
        }, i = function(e) {
            t(function(t, n) {
                e.detachEvent("on" + t, n)
            })
        }) : r = i = function() {}, {
            add: r,
            remove: i
        }
    }

    function s(e, t) {
        var n, r = b.length;
        for (n = 0; r > n; n += 1) b[n](e, t)
    }
    var c, u, f, d = window.document,
        h = "	",
        v = 9,
        g = 9,
        p = [],
        m = ["shiftKey"],
        y = !0,
        E = !1,
        x = d.createElement("textarea"),
        b = [];
    c = a([{
        type: "keydown",
        handler: l
    }, {
        type: "keypress",
        handler: o
    }]), e.utils = {
        isValidModifierKeyCombo: t,
        createListeners: a,
        addListeners: c.add,
        removeListeners: c.remove
    }, e.handlers = {
        keydown: l,
        keypress: o
    }, e.addExtension = function(e) {
        return "function" == typeof e && b.push(e), this
    }, e.set = function(e, t) {
        var n, r, i, l, o, a, u;
        if (e)
            for (n = 2 > arguments.length || t, r = e, i = r.length, "number" != typeof i && (r = [r], i = 1), n ? (l = c.add, o = "true") : (l = c.remove, o = ""), a = 0; i > a; a += 1) u = r[a], u && u.nodeName && "textarea" === u.nodeName.toLowerCase() && (s(u, n), u.setAttribute("data-taboverride-enabled", o), l(u));
        return this
    }, e.tabSize = function(e) {
        var t;
        if (arguments.length) {
            if (e) {
                if ("number" == typeof e && e > 0)
                    for (h = "", t = 0; e > t; t += 1) h += " "
            } else h = "	";
            return this
        }
        return "	" === h ? 0 : h.length
    }, e.autoIndent = function(e) {
        return arguments.length ? (y = e ? !0 : !1, this) : y
    }, e.tabKey = i(function(e) {
        return arguments.length ? (v = e, void 0) : v
    }, p), e.untabKey = i(function(e) {
        return arguments.length ? (g = e, void 0) : g
    }, m), x.value = "\n", u = x.value, f = u.length, x = null
});

/*!
 * jquery.taboverride v4.0.0
 * https://github.com/wjbryant/jquery.taboverride
 * Copyright (c) 2013 Bill Bryant. Licensed under MIT.
 * See license text here: http://opensource.org/licenses/mit
 */
! function(a) {
    "use strict";
    "object" == typeof exports && "function" == typeof require ? a(require("jquery"), require("taboverride")) : "function" == typeof define && define.amd ? define(["jquery", "taboverride"], a) : a(jQuery, tabOverride)
}(function(a, b) {
    "use strict";

    function c(a, c) {
        a.off({
            "keydown.tabOverride": b.handlers.keydown,
            "keypress.tabOverride": b.handlers.keypress
        }, c)
    }

    function d(a, d) {
        b.utils.executeExtensions("removeDelegatedListeners", [a, d]), c(a, d)
    }

    function e(a, d) {
        b.utils.executeExtensions("addDelegatedListeners", [a, d]), c(a, d), a.on({
            "keydown.tabOverride": b.handlers.keydown,
            "keypress.tabOverride": b.handlers.keypress
        }, d)
    }
    var f;
    f = a.fn.tabOverride = function(a, c) {
        var f, g = !arguments.length || a,
            h = "string" == typeof c;
        return h ? (f = this, b.utils.executeExtensions("setDelegated", [f, c, a]), g ? e(f, c) : d(f, c)) : b.set(this, g), this
    }, f.utils = {
        addDelegatedListeners: e,
        removeDelegatedListeners: d
    }, f.tabSize = b.tabSize, f.autoIndent = b.autoIndent, f.tabKey = b.tabKey, f.untabKey = b.untabKey
});