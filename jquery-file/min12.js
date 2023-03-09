/*! License information is available at https://static.cdn.printful.com/dist-pf/77343.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [77343], {
        47586: (e, t, o) => {
            o.d(t, {
                Z: () => s
            });
            var n = o(95373),
                r = o(97540),
                a = o(9651),
                i = o(21540);
            const s = function(e) {
                this.par = new s.Par, a.U.O2O(this.par, e || {}), this.id = "modal-" + ++s._counter, this._node = tag("div", {
                    className: "modal fade zoom " + this.par.nodeClass,
                    prop: {
                        id: this.id
                    },
                    attr: {
                        tabindex: this.par.accessibility ? "0" : "-1",
                        "aria-labelledby": this.id + "-label",
                        role: "dialog",
                        ...this.par.dataTestTag ? {
                            "data-test": this.par.dataTestTag
                        } : {}
                    }
                }, [this._nodeDialog = tag("div", "modal-dialog " + this.par.modalDialogClass, [this._nodeContentWrapper = tag("div", "modal-content-wrapper", [this._nodeContent = tag("div", {
                    className: "modal-content modal-rounded",
                    attr: {
                        role: "document"
                    }
                }, [this._nodeHeader = tag("div", "modal-header"), this._nodeBody = tag("div", "modal-body pf-mb-4 " + this.par.modalBodyClass), this._nodeFooter = tag("div", "modal-footer pf-d-none")])])])]), this._renderHeaderNode(), $(this._node).on("hidden.bs.modal", this._onClose.bind(this)), this.par.url && this.loadUrl(this.par.url)
            };
            s.prototype._renderHeaderNode = function() {
                a.U.clearNode(this._nodeHeader), this._nodeTitle || (this._nodeTitle = tag("h2", {
                    className: "pf-h3 pf-m-0 pf-p-0 pf-border-0",
                    id: this.id + "-label"
                }, [this.par.title])), this.par.hasSteps && !this._stepsBlock && (this._stepsBlock = tag("div", "order-4 order-md-2 pf-width-max pf-width-md-auto pf-mt-16 pf-mt-md-0")), [tag("div", `pf-d-flex ${this.par.headerFlexWrap} pf-justify-content-between pf-align-items-center`, [tag("div", "order-1 basis-md-auto basis-80", [this._nodeTitle]), this.par.hasSteps ? this._stepsBlock : "", tag("div", "order-3 text-right basis-md-auto basis-20", [tag("span", {
                    className: "pf-i pf-i-32 pf-i-close pf-modal__close-icon pf-keydown-click",
                    onclick: this.onCloseClick.bind(this),
                    attr: {
                        tabindex: "0",
                        "aria-label": lang("Close"),
                        role: "button"
                    }
                })])])].forEach((e => {
                    e.append(this._nodeHeader)
                }))
            }, s.prototype.setSteps = function(e) {
                this._stepsBlock && a.U.clearNode(this._stepsBlock), this.par.hasSteps && e && e.append(this._stepsBlock)
            }, s.prototype._node = null, s.prototype._nodeContent = null, s.prototype._nodeHeader = null, s.prototype._nodeBody = null, s.prototype._nodeFooter = null, s.prototype._nodeTitle = null, s.prototype.id = "", s.prototype.par = null, s.prototype._onClose = function() {
                $(".modal:visible").length && $(document.body).addClass("modal-open"), $(".modal.in").length > 0 && $(".modal.in").last().focus(), this.par.deleteOnHide && a.U.removeNode(this._node), this.par.onClose && this.par.onClose(), $(".tooltip").hide()
            }, s.prototype.getContentNode = function() {
                return this._nodeContent
            }, s.prototype.getContentWrapperNode = function() {
                return this._nodeContentWrapper
            }, s.prototype.setContent = function(e) {
                return a.U.clearNode(this._nodeBody), "string" == typeof e && $(this._nodeBody).html(e), "object" == typeof e && e.append(this._nodeBody), this
            }, s.prototype.updateModalDialogClass = function(e) {
                if (this._nodeDialog) {
                    var t = $(this._nodeDialog);
                    t.removeClass("modal-xs modal-sm modal-md modal-lg modal-xl"), e && t.addClass(e)
                }
            }, s.prototype.updateModalBodyClass = function(e, t) {
                if (!this._nodeBody) return;
                let o = $(this._nodeBody);
                e && o.removeClass(e), t && o.addClass(t)
            }, s.prototype.updateNodeClass = function(e, t) {
                if (this._node) {
                    var o = $(this._node);
                    e && o.removeClass(e), t && o.addClass(t)
                }
            }, s.prototype.hideFooter = function(e) {
                this._nodeFooter && (e ? a.U.addClassName(this._nodeFooter, "pf-d-none") : a.U.removeClassName(this._nodeFooter, "pf-d-none"))
            }, s.prototype.setFooterContent = function(e) {
                a.U.clearNode(this._nodeFooter), this.hideFooter(!0), e && (this.hideFooter(!1), "string" == typeof e && e && $(this._nodeFooter).html(e), "object" == typeof e && e.append(this._nodeFooter))
            }, s.prototype.setHeaderContent = function(e) {
                a.U.clearNode(this._nodeHeader), a.U.addClassName(this._nodeHeader, "pf-d-none"), e && (a.U.removeClassName(this._nodeHeader, "pf-d-none"), "string" == typeof e && e && $(this._nodeHeader).html(e), "object" == typeof e && e.append(this._nodeHeader))
            }, s.prototype.setTitle = function(e) {
                return a.U.clearNode(this._nodeTitle), this._nodeTitle.appendChild(document.createTextNode(e)), this
            }, s.prototype.hide = function() {
                $(this._node).modal("hide")
            }, s.prototype.remove = function() {
                this.hide(), setTimeout(function() {
                    a.U.removeNode(this._node)
                }.bind(this), 400)
            }, s.prototype.onCloseClick = function() {
                if (this.par.onCloseInit && !this.par.onCloseInit()) return;
                this.remove()
            }, s.prototype.show = function() {
                $(this._node).modal(this._buildBootstrapModalParams()).one("shown.bs.modal", this.par.onShown)
            }, s.prototype._buildBootstrapModalParams = function() {
                return {
                    backdrop: !!this.par.closeOnClick || "static",
                    keyboard: this.par.allowEsc
                }
            }, s.prototype.swapBody = function(e, t) {
                var o = this._nodeBody,
                    n = (0, a.U)({
                        tag: "div",
                        className: "modal-body",
                        els: [e]
                    });
                new i.v(o, n, t).swap(), this._nodeBody = n
            }, s.prototype.loadUrl = function(e) {
                r.D.show(this._nodeBody, {
                    minHeight: 250
                }), $(this._nodeBody).load(e, $.proxy((function() {
                    r.D.hide(this._nodeBody)
                }), this))
            }, s._counter = 0, s.prototype.switchToNewPar = function(e) {
                const t = this.par.nodeClass;
                Object.keys(e).forEach(function(t) {
                    this.par[t] = e[t]
                }.bind(this)), this.updateNodeClass(t, this.par.nodeClass), this.updateModalDialogClass(this.par.modalDialogClass), this.updateModalBodyClass(this.par.modalBodyClass), this._updateBootstrapModalSettings(this._buildBootstrapModalParams()), this.setTitle(this.par.title), this.par.url && this.loadUrl(this.par.url), this._renderHeaderNode()
            }, s.prototype._updateBootstrapModalSettings = function(e) {
                if (this._node) {
                    var t = $(this._node);
                    n.u.UpdateBootstrapModalOptions(t, e)
                }
            }, s.Par = function() {
                this.onShown = function() {}, this.onClose = function() {}
            }, s.Par.prototype.onClose = !1, s.Par.prototype.onShown = null, s.Par.prototype.allowEsc = !0, s.Par.prototype.title = "", s.Par.prototype.headerFlexWrap = "pf-flex-wrap", s.Par.prototype.url = "", s.Par.prototype.nodeClass = "", s.Par.prototype.modalDialogClass = "", s.Par.prototype.modalBodyClass = "", s.Par.prototype.closeOnClick = !0, s.Par.prototype.deleteOnHide = !1, s.Par.prototype.onCloseInit = null, s.Par.prototype.fullscreen = !1, s.Par.prototype.hasSteps = !1, s.Par.prototype.accessibility = !1, s.Par.prototype.dataTestTag = "", window && ((globalThis || {}).PFModal = s)
        },
        21540: (e, t, o) => {
            o.d(t, {
                v: () => r
            });
            var n = o(9651);
            const r = function(e, t, o) {
                this.directionClass = o ? "swap-forward" : "swap-back", this.nodeOld = e, this.nodeNew = t, this.placeholder = (0, n.U)({
                    tag: "div",
                    className: "swapper-placeholder",
                    els: [{
                        tag: "div",
                        className: "swap-content new-content",
                        els: [this.wrapNewInner = (0, n.U)({
                            tag: "div",
                            className: "swap-inner " + this.directionClass
                        })]
                    }, this.wrapOld = (0, n.U)({
                        tag: "div",
                        className: "swap-content",
                        els: [this.wrapOldInner = (0, n.U)({
                            tag: "div",
                            className: "swap-inner"
                        })]
                    })]
                })
            };
            r.prototype.duration = 190, r.prototype.nodeOld = null, r.prototype.nodeNew = null, r.prototype.placeholder = null, r.prototype.wrapOldInner = null, r.prototype.wrapNewInner = null, r.prototype.swap = function() {
                n.U.O2O(this.placeholder, {
                    style: {
                        transitionDuration: this.duration + "ms",
                        height: this.nodeOld.clientHeight + "px"
                    }
                }), this.wrapNewInner.style.transitionDuration = this.duration + "ms", this.wrapOldInner.style.transitionDuration = this.duration + "ms", n.U.insertBefore(this.placeholder, this.nodeOld), this.wrapOldInner.appendChild(this.nodeOld), this.wrapNewInner.appendChild(this.nodeNew), setTimeout($.proxy((function() {
                    n.U.addClassName(this.wrapOldInner, this.directionClass)
                }), this), 0), setTimeout($.proxy((function() {
                    n.U.removeClassName(this.wrapNewInner, this.directionClass)
                }), this), 0), setTimeout($.proxy((function() {
                    this.placeholder.style.height = this.nodeNew.clientHeight + "px"
                }), this), 0), setTimeout($.proxy(this.afterSwap, this), this.duration)
            }, r.prototype.afterSwap = function() {
                this.wrapOld.remove(), n.U.insertBefore(this.nodeNew, this.placeholder), this.placeholder.remove()
            }, window && ((globalThis || {}).PFSwapper = r)
        },
        95373: (e, t, o) => {
            o.d(t, {
                u: () => n
            });
            const n = {
                UpdateBootstrapModalOptions: function(e, t) {
                    var o = e ? e.data("bs.modal") : null,
                        n = o ? o.options : null;
                    if (n && (t.hasOwnProperty("keyboard") && (n.keyboard = t.keyboard, o.escape(), n.keyboard || e.off("keydown.dismiss.bs.modal")), t.hasOwnProperty("backdrop"))) {
                        n.backdrop = t.backdrop;
                        var r = o.$backdrop || null;
                        n.backdrop ? r || o.backdrop() : r && (r.fadeOut(200, (function() {
                            r.remove()
                        })), o.$backdrop = null)
                    }
                }
            };
            (globalThis || {}).PFUtilsModalUtils = n
        },
        25046: (e, t, o) => {
            o.d(t, {
                L: () => Z,
                Z: () => j
            });
            var n = o(70538),
                r = o(96486),
                a = o.n(r),
                i = o(61169),
                s = o(42649),
                d = o(9651);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _(n.key), n)
                }
            }

            function c(e, t, o) {
                return t && p(e.prototype, t), o && p(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function u(e, t) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
            }

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var o, n = y(e);
                    if (t) {
                        var r = y(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return f(this, o)
                }
            }

            function f(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return m(e)
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, y(e)
            }

            function w(e, t) {
                v(e, t), t.add(e)
            }

            function _(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function g(e, t, o) {
                v(e, t), t.set(e, o)
            }

            function v(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function b(e, t) {
                return k(e, O(e, t, "get"))
            }

            function C(e, t, o) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return o
            }

            function E(e, t, o) {
                return A(e, O(e, t, "set"), o), o
            }

            function O(e, t, o) {
                if (!t.has(e)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return t.get(e)
            }

            function S(e, t, o, n) {
                return T(e, t), D(o, "set"), A(e, o, n), n
            }

            function A(e, t, o) {
                if (t.set) t.set.call(e, o);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = o
                }
            }

            function N(e, t, o) {
                return T(e, t), D(o, "get"), k(e, o)
            }

            function D(e, t) {
                if (void 0 === e) throw new TypeError("attempted to " + t + " private static field before its declaration")
            }

            function T(e, t) {
                if (e !== t) throw new TypeError("Private static access of wrong provenance")
            }

            function k(e, t) {
                return t.get ? t.get.call(e) : t.value
            }
            var P = new WeakMap,
                U = new WeakMap,
                I = new WeakMap,
                L = new WeakMap,
                H = new WeakMap,
                B = new WeakSet,
                M = new WeakSet,
                R = new WeakMap,
                $ = new WeakSet;
            let j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && u(e, t)
                }(o, e);
                var t = h(o);

                function o(e) {
                    var n, r, a, i;
                    return l(this, o), w(m(n = t.call(this)), $), g(m(n), R, {
                        get: G,
                        set: void 0
                    }), w(m(n), M), w(m(n), B), g(m(n), P, {
                        writable: !0,
                        value: void 0
                    }), g(m(n), U, {
                        writable: !0,
                        value: void 0
                    }), g(m(n), I, {
                        writable: !0,
                        value: void 0
                    }), g(m(n), L, {
                        writable: !0,
                        value: void 0
                    }), g(m(n), H, {
                        writable: !0,
                        value: void 0
                    }), E(m(n), U, e || {}), C(m(n), B, F).call(m(n)), E(m(n), L, o.getNewUniqueID()), n.node = b(m(n), U).existingNode || tag(b(m(n), U).wrapTag || "div", "mke-vue-wrapper"), n.node.id = b(m(n), L), (r = o, a = o, i = x, T(r, a), i).call(o), E(m(n), I, C(m(n), M, V).call(m(n))), C(m(n), $, z).call(m(n)), n
                }
                return c(o, [{
                    key: "updateData",
                    value: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        const o = b(this, I);
                        if (!o) throw new Error(`Attempting to call updateData on a destroyed instance! ${b(this,L)}`);
                        a().forIn(b(this, H), ((n, r) => {
                            !e.hasOwnProperty(r) && t && o.$delete(b(this, H), r), e.hasOwnProperty(r) && o.$set(b(this, H), r, e[r])
                        }))
                    }
                }, {
                    key: "setDataProp",
                    value: function(e, t) {
                        const o = b(this, I);
                        if (!o) throw new Error(`Attempting to call setDataProp on a destroyed instance! ${b(this,L)}`);
                        o.$set(b(this, H), e, t)
                    }
                }, {
                    key: "getRef",
                    value: function(e) {
                        var t, o;
                        if (!b(this, I)) throw new Error(`Attempting to access a destroyed Vue instance! ${b(this,L)}`);
                        return null !== (t = b(this, I)) && void 0 !== t && null !== (o = t.$refs) && void 0 !== o && o.hasOwnProperty(e) ? b(this, I).$refs[e] : void 0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        const e = b(this, I);
                        e && (e.$destroy(), E(this, I, null), delete o.activeComponentMap[b(this, L)], d.U.clearNode(this.node))
                    }
                }, {
                    key: "hasInstance",
                    value: function() {
                        return !!b(this, I)
                    }
                }], [{
                    key: "getNewUniqueID",
                    value: function() {
                        var e, t;
                        return "MkeVueWrapper" + (S(o, o, X, (e = N(o, o, X), t = e++, e)), t)
                    }
                }]), o
            }(i.p);

            function x() {
                N(j, j, J) || ((0, s.ZP)(n.default, s.SE.DYNAMIC_INSTANCE), S(j, j, J, !0))
            }

            function F() {
                a().forIn(b(this, U).components || {}, (e => {
                    if (!(e instanceof Function)) throw new Error("MkeVueWrapper components must be defined like so: {'component': () => import('./xyz')}")
                })), a().forIn(b(this, U).plugins || {}, ((e, t) => {
                    if (!e) throw new Error(`MkeVueWrapper plugin '${t}' is null/undefined!`)
                }))
            }

            function V() {
                E(this, H, b(this, U).initialData ? a().clone(b(this, U).initialData) : {});
                const e = b(this, U).emitEvent,
                    t = new n.default({
                        template: b(this, U).template || "<div>Empty MkeVueWrapper instance! Please contact support!</div>",
                        components: a().clone(b(this, U).components || {}),
                        data: () => b(this, H),
                        methods: {
                            emitEvent(t, o) {
                                e && e(t, o)
                            }
                        },
                        created: () => {
                            b(this, U).onCreated && b(this, U).onCreated()
                        },
                        mounted: () => {
                            b(this, U).onMounted && b(this, U).onMounted()
                        },
                        ...b(this, R)
                    });
                return j.activeComponentMap[b(this, L)] = t, t
            }

            function G() {
                return a().omit(b(this, U).plugins || {}, ["template", "components", "data", "methods", "created", "mounted", "watch", "computed", "props", "el", "render", "renderError", "beforeCreate", "beforeDestroy", "destroyed", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "errorCaptured", "propsData"])
            }

            function z() {
                d.U.clearNode(this.node);
                const e = tag("div", "mke-vue-wrapper__inner");
                e.append(this.node), b(this, I).$mount(e)
            }
            var W, K, Y, J = {
                    writable: !0,
                    value: void 0
                },
                X = {
                    writable: !0,
                    value: 0
                };
            W = j, Y = {}, (K = _(K = "activeComponentMap")) in W ? Object.defineProperty(W, K, {
                value: Y,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : W[K] = Y;
            let Z = c((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                l(this, e), this.components = t.components || {}, this.plugins = t.plugins || {}, this.template = t.template || "", this.initialData = t.initialData || {}, this.emitEvent = t.emitEvent, this.onCreated = t.onCreated, this.onMounted = t.onMounted, this.wrapTag = t.wrapTag || "div", this.existingNode = t.existingNode || null
            }))
        },
        39735: (e, t, o) => {
            o.d(t, {
                J: () => n,
                Z: () => r
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorBackgrounds",
                    CACHE_VERSION: 2
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        23660: (e, t, o) => {
            o.d(t, {
                z: () => n
            });
            const n = Object.freeze({
                STORAGE_KEY: "generatorClipartItems",
                CACHE_VERSION: 7,
                MAX_RECENT_CACHE: 32,
                MAX_RECENT_SHOW: 20
            })
        },
        61308: (e, t, o) => {
            o.d(t, {
                H: () => n,
                o: () => r
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorColorGraphicItems",
                    CACHE_VERSION: 3
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        59805: (e, t, o) => {
            o.d(t, {
                AQ: () => n,
                YG: () => r,
                iQ: () => a
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorFonts",
                    CACHE_VERSION: 7,
                    MAX_RECENT_SHOW: 3
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                }),
                a = Object.freeze({
                    FONTS: "fontsJson",
                    FONTS_JS_URLS: "fontsJsUrlsJson",
                    FONTS_TTF_URLS: "fontsTtfUrlsJson"
                })
        },
        52584: (e, t, o) => {
            o.d(t, {
                X: () => n,
                z: () => r
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorGradients",
                    CACHE_VERSION: 2
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        32577: (e, t, o) => {
            o.d(t, {
                L: () => n,
                P: () => r
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorPropItems",
                    CACHE_VERSION: 2,
                    MAX_RECENT_CACHE: 16,
                    MAX_RECENT_SHOW: 4
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        9345: (e, t, o) => {
            o.d(t, {
                D: () => n,
                b: () => r
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorQuickDesignItems",
                    CACHE_VERSION: 3,
                    MAX_RECENT_CACHE: 32,
                    MAX_RECENT_SHOW: 20
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        61430: (e, t, o) => {
            o.d(t, {
                E: () => r,
                J: () => n
            });
            const n = Object.freeze({
                    STORAGE_KEY: "generatorScenes",
                    CACHE_VERSION: 2,
                    MAX_RECENT_SHOW: 4,
                    MAX_RECENT_CACHE: 16
                }),
                r = Object.freeze({
                    HAS_LOADED_ALL: "HAS_LOADED_ALL"
                })
        },
        69182: (e, t, o) => {
            o.d(t, {
                $G: () => w,
                LC: () => g,
                DJ: () => N,
                ZO: () => T,
                t1: () => O,
                Ug: () => E,
                x4: () => C,
                Dy: () => v,
                e8: () => P,
                FK: () => D,
                f4: () => A,
                OY: () => b,
                bB: () => k
            });
            var n = o(79442);

            function r(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i(n.key), n)
                }
            }

            function a(e, t, o) {
                return (t = i(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function i(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            let s = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), a(this, "name", ""), a(this, "ready", null), a(this, "db", null), this.name = t, this.ready = new Promise(((e, t) => {
                        try {
                            if (!window.indexedDB) return t("indexedDB not supported!");
                            const o = window.indexedDB.open(this.name);
                            o.onupgradeneeded = e => {
                                this.db = e.target.result, this.db.createObjectStore(this.name)
                            }, o.onsuccess = t => {
                                this.db = t.target.result, e()
                            }, o.onerror = e => {
                                this.db = e.target.result || null, t(e)
                            }
                        } catch (e) {
                            return t("Could not create indexedStorage, indexedDB not supported!")
                        }
                    }))
                }
                var t, o, n;
                return t = e, (o = [{
                    key: "getItem",
                    value: function(e) {
                        return this.ready.then((() => new Promise(((t, o) => {
                            const n = this.getStore().get(e);
                            n.onsuccess = e => t(e.target.result), n.onerror = o
                        }))))
                    }
                }, {
                    key: "setItem",
                    value: function(e, t) {
                        return this.ready.then((() => new Promise(((o, n) => {
                            const r = this.getStore().put(t, e);
                            r.onsuccess = o, r.onerror = n
                        }))))
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        return this.ready.then((() => new Promise(((t, o) => {
                            const n = this.getStore().delete(e);
                            n.onsuccess = t, n.onerror = o
                        }))))
                    }
                }, {
                    key: "getStore",
                    value: function() {
                        return this.db.transaction([this.name], "readwrite").objectStore(this.name)
                    }
                }, {
                    key: "deleteStore",
                    value: function() {
                        try {
                            return window.indexedDB.deleteDatabase(this.name)
                        } catch (e) {
                            return console.log("Could not delete indexedDb store, indexedDB is not available!"), null
                        }
                    }
                }]) && r(t.prototype, o), n && r(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            var d = o(21782),
                l = o(23660),
                p = o(61308),
                c = o(39735),
                u = o(52584),
                h = o(9345),
                f = o(59805),
                m = o(32577),
                y = o(61430);
            const w = Object.freeze({
                    UPDATE_CLIPARTS: "shouldUpdateClipartStorage",
                    UPDATE_COLOR_GRAPHICS: "shouldUpdateColorGraphicStorage",
                    UPDATE_BACKGROUNDS: "shouldUpdateBackgroundStorage",
                    UPDATE_GRADIENTS: "shouldUpdateGradientStorage",
                    UPDATE_QUICK_DESIGNS: "shouldUpdateQuickDesignStorage",
                    UPDATE_FONTS: "shouldUpdateFontStorage",
                    UPDATE_PROPS: "shouldUpdatePropStorage",
                    UPDATE_SCENES: "shouldUpdateSceneStorage"
                }),
                _ = "generatorVersionMeta",
                g = new s("assetStorage"),
                v = async () => {
                    let e = [];
                    try {
                        e = JSON.parse(window.localStorage.getItem(_)) || [], e.length && (window.localStorage.removeItem(_), await g.setItem(_, e))
                    } catch (e) {
                        console.warn("Could not use versionMeta from localStorage!")
                    }
                    return e = await g.getItem(_) || [], e
                }, b = e => g.setItem(_, e), C = e => `${e.STORAGE_KEY}-v${e.CACHE_VERSION}-${PF.LOCALE}`, E = e => `${e.STORAGE_KEY}-recent-${PF.Customer.customerId||""}`, O = e => `${e.STORAGE_KEY}-favorites-${PF.Customer.customerId||""}`, S = async e => {
                    try {
                        const t = C(e);
                        window.localStorage.removeItem(t), await g.removeItem(t), await (0, n.getVuex)().dispatch(d.ak(d.Bw), t)
                    } catch (e) {
                        console.warn("Could not clear current storage!")
                    }
                }, A = async (e, t) => {
                    await (async e => {
                        await (0, n.getVuex)().dispatch(d.ak(d.jY));
                        const t = (0, n.getVuex)().getters[d.ak(d.r8)].filter((t => 0 === t.indexOf(`${e.STORAGE_KEY}-v`) && t.indexOf(`${e.STORAGE_KEY}-v${e.CACHE_VERSION}`) < 0));
                        for (const e of t) try {
                            window.localStorage.removeItem(e), await g.removeItem(e), await (0, n.getVuex)().dispatch(d.ak(d.Bw), e)
                        } catch (t) {
                            console.warn(`Could not clear old ${e} in storage!`)
                        }
                    })(e);
                    try {
                        const o = C(e);
                        await g.setItem(o, t), await (0, n.getVuex)().dispatch(d.ak(d.LK), o)
                    } catch (t) {
                        console.warn(`Could not save ${e.STORAGE_KEY} in storage!`)
                    }
                }, N = () => {
                    try {
                        S(l.z), S(p.H), S(c.J), S(u.X), S(h.D), S(f.AQ), S(m.L), S(y.J)
                    } catch (e) {
                        console.warn("Could not clear all designer assets from storage!")
                    }
                }, D = e => Object.values(w).includes(e), T = async () => (0, n.getVuex)().dispatch(d.ak(d.ZO)), k = (e, t) => (0, n.getVuex)().commit(d.ak(d.bB), {
                    flag: e,
                    value: t
                }), P = e => (0, n.getVuex)().getters[d.ak(d.e8)](e)
        },
        21782: (e, t, o) => {
            o.d(t, {
                Bw: () => u,
                E0: () => n,
                LK: () => c,
                O3: () => l,
                Un: () => a,
                ZO: () => d,
                ak: () => h,
                bB: () => r,
                e8: () => i,
                jY: () => p,
                r8: () => s
            });
            const n = "designer/assetsModule",
                r = "m_setLocalCachedState",
                a = "m_setVersionMeta",
                i = "g_isAssetUpdateRequired",
                s = "g_getVersionMeta",
                d = "a_fetchDesignerAssetStates",
                l = "a_checkDesignerAssets",
                p = "a_loadVersionMeta",
                c = "a_addVersionMeta",
                u = "a_removeVersionMeta";

            function h(e) {
                return n + "/" + e
            }
        }
    }
]);