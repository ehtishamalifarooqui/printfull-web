/**
 * Yii JavaScript module.
 *
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
window.yii = function(t) {
    var e = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(e, i) {
            t("meta[name=csrf-param]").attr("content", e), t("meta[name=csrf-token]").attr("content", i)
        },
        refreshCsrfToken: function() {
            var i = e.getCsrfToken();
            i && t('form input[name="' + e.getCsrfParam() + '"]').val(i)
        },
        confirm: function(t, e, i) {
            window.confirm(t) ? !e || e() : !i || i()
        },
        handleAction: function(i, n) {
            var r, a = i.attr("data-form") ? t("#" + i.attr("data-form")) : i.closest("form"),
                o = !i.data("method") && a ? a.attr("method") : i.data("method"),
                c = i.attr("href"),
                s = c && "#" !== c,
                d = i.data("params"),
                u = d && t.isPlainObject(d),
                l = i.data("pjax"),
                p = void 0 !== l && 0 !== l && t.support.pjax,
                f = {};
            if (p && (void 0 !== (r = i.data("pjax-container")) && r.length || (r = i.closest("[data-pjax-container]").attr("id") ? "#" + i.closest("[data-pjax-container]").attr("id") : ""), r.length || (r = "body"), f = {
                    container: r,
                    push: !!i.data("pjax-push-state"),
                    replace: !!i.data("pjax-replace-state"),
                    scrollTo: i.data("pjax-scrollto"),
                    pushRedirect: i.data("pjax-push-redirect"),
                    replaceRedirect: i.data("pjax-replace-redirect"),
                    skipOuterContainers: i.data("pjax-skip-outer-containers"),
                    timeout: i.data("pjax-timeout"),
                    originalEvent: n,
                    originalTarget: i
                }), void 0 !== o) {
                var h, m, g = !a.length;
                if (g) {
                    s || (c = e.getCurrentUrl()), a = t("<form/>", {
                        method: o,
                        action: c
                    });
                    var v = i.attr("target");
                    if (v && a.attr("target", v), /(get|post)/i.test(o) || (a.append(t("<input/>", {
                            name: "_method",
                            value: o,
                            type: "hidden"
                        })), o = "post", a.attr("method", o)), /post/i.test(o)) {
                        var x = e.getCsrfParam();
                        x && a.append(t("<input/>", {
                            name: x,
                            value: e.getCsrfToken(),
                            type: "hidden"
                        }))
                    }
                    a.hide().appendTo("body")
                } else h = a.attr("method"), a.attr("method", o), s && (m = a.attr("action"), a.attr("action", c));
                var y = a.data("yiiActiveForm");
                y && (y.submitObject = i), u && t.each(d, (function(e, i) {
                    a.append(t("<input/>").attr({
                        name: e,
                        value: i,
                        type: "hidden"
                    }))
                })), p && a.on("submit", (function(e) {
                    t.pjax.submit(e, f)
                })), a.trigger("submit"), t.when(a.data("yiiSubmitFinalizePromise")).then((function() {
                    g ? a.remove() : (void 0 !== m && a.attr("action", m), a.attr("method", h), u && t.each(d, (function(e) {
                        t('input[name="' + e + '"]', a).remove()
                    })))
                }))
            } else s ? p ? t.pjax.click(n, f) : window.location.assign(c) : i.is(":submit") && a.length && (p && a.on("submit", (function(e) {
                t.pjax.submit(e, f)
            })), a.trigger("submit"))
        },
        getQueryParams: function(e) {
            var i = e.indexOf("?");
            if (i < 0) return {};
            for (var n = t.grep(e.substring(i + 1).split("#")[0].split("&"), (function(t) {
                    return "" !== t
                })), r = {}, a = 0, o = n.length; a < o; a++) {
                var c = n[a].split("="),
                    s = decodeURIComponent(c[0].replace(/\+/g, "%20")),
                    d = decodeURIComponent(c[1].replace(/\+/g, "%20"));
                s.length && (void 0 === r[s] ? r[s] = d || "" : (t.isArray(r[s]) || (r[s] = [r[s]]), r[s].push(d || "")))
            }
            return r
        },
        initModule: function(i) {
            (void 0 === i.isActive || i.isActive) && (t.isFunction(i.init) && i.init(), t.each(i, (function() {
                t.isPlainObject(this) && e.initModule(this)
            })))
        },
        init: function() {
            var r, a;
            t.ajaxPrefilter((function(t, i, n) {
                !t.crossDomain && e.getCsrfParam() && n.setRequestHeader("X-CSRF-Token", e.getCsrfToken())
            })), e.refreshCsrfToken(), t(document).ajaxComplete((function(t, e) {
                var i = e && e.getResponseHeader("X-Redirect");
                i && window.location.assign(i)
            })), r = {}, t("script[src]").each((function() {
                var t = n(this.src);
                r[t] = !0
            })), t.ajaxPrefilter("script", (function(t, e, a) {
                if ("jsonp" != t.dataType) {
                    var o = n(t.url),
                        c = !0 === r[o] && !i(o),
                        s = void 0 !== r[o] && !0 === r[o].xhrDone;
                    c || s ? a.abort() : (void 0 !== r[o] && !0 !== r[o] || (r[o] = {
                        xhrList: [],
                        xhrDone: !1
                    }), a.done((function(t, e, i) {
                        if (!0 !== r[i.yiiUrl].xhrDone) {
                            r[i.yiiUrl].xhrDone = !0;
                            for (var n = 0, a = r[i.yiiUrl].xhrList.length; n < a; n++) {
                                var o = r[i.yiiUrl].xhrList[n];
                                o && o.readyState !== XMLHttpRequest.DONE && o.abort()
                            }
                            r[i.yiiUrl] = !0
                        }
                    })).fail((function(t, e) {
                        if ("abort" !== e) {
                            delete r[t.yiiUrl].xhrList[t.yiiIndex];
                            for (var i = !0, n = 0, a = r[t.yiiUrl].xhrList.length; n < a; n++) r[t.yiiUrl].xhrList[n] && (i = !1);
                            i && delete r[t.yiiUrl]
                        }
                    })), a.yiiIndex = r[o].xhrList.length, a.yiiUrl = o, r[o].xhrList[a.yiiIndex] = a)
                }
            })), t(document).ajaxComplete((function() {
                var e = [];
                t("link[rel=stylesheet]").each((function() {
                    var r = n(this.href);
                    i(r) || (-1 === t.inArray(r, e) ? e.push(r) : t(this).remove())
                }))
            })), a = function(i) {
                var n = t(this),
                    r = n.data("method"),
                    a = n.data("confirm"),
                    o = n.data("form");
                return void 0 === r && void 0 === a && void 0 === o || (void 0 !== a ? t.proxy(e.confirm, this)(a, (function() {
                    e.handleAction(n, i)
                })) : e.handleAction(n, i), i.stopImmediatePropagation(), !1)
            }, t(document).on("click.yii", e.clickableSelector, a).on("change.yii", e.changeableSelector, a)
        },
        getBaseCurrentUrl: function() {
            return window.location.protocol + "//" + window.location.host
        },
        getCurrentUrl: function() {
            return window.location.href
        }
    };

    function i(t) {
        for (var i = 0; i < e.reloadableScripts.length; i++) {
            var r = n(e.reloadableScripts[i]);
            if (!0 === new RegExp("^" + (a = r, a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).split("\\*").join(".+") + "$").test(t)) return !0
        }
        var a;
        return !1
    }

    function n(t) {
        return "/" === t.charAt(0) ? e.getBaseCurrentUrl() + t : t
    }
    return e
}(window.jQuery), window.jQuery((function() {
    window.yii.initModule(window.yii)
}));