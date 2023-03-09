/*! License information is available at https://static.cdn.printful.com/dist-pf/31174.licenses.txt if third party dependencies are included */
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [31174], {
        91128: (e, t, i) => {
            "use strict";
            i.d(t, {
                WF: () => n,
                o6: () => a,
                vf: () => o
            });
            const n = "/static/images/lazy-placeholder.svg?v=2",
                o = "/static/images/lazy-placeholder-enterprise.svg",
                a = "images/lazy-placeholder.svg?v=2"
        },
        12010: (e, t, i) => {
            "use strict";
            i.d(t, {
                G: () => o,
                W: () => a
            });
            var n = i(98737);

            function o(e) {
                return {
                    [n.T.REGION_EUROPE]: lang("Europe"),
                    [n.T.REGION_MEXICO]: lang("Mexico"),
                    [n.T.REGION_USA]: lang("USA"),
                    [n.T.REGION_JAPAN]: lang("Japan"),
                    [n.T.REGION_EUROPE_SPAIN]: lang("Europe/Spain"),
                    [n.T.REGION_EUROPE_LATVIA]: lang("Europe/Latvia"),
                    [n.T.REGION_AUSTRALIA]: lang("Australia"),
                    [n.T.REGION_CANADA]: lang("Canada")
                } [e] || e
            }

            function a(e) {
                return {
                    [n.T.REGION_EUROPE_ABBREVIATION]: clang("European Union", "EU"),
                    [n.T.REGION_MEXICO_ABBREVIATION]: clang("Mexico", "MEX"),
                    [n.T.REGION_USA_ABBREVIATION]: lang("USA"),
                    [n.T.REGION_AUSTRALIA_ABBREVIATION]: clang("Australia", "AU"),
                    [n.T.REGION_JAPAN_ABBREVIATION]: lang("JP"),
                    [n.T.REGION_CANADA_ABBREVIATION]: clang("Canada", "CA")
                } [e] || e
            }
        },
        51049: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => V,
                O: () => U
            });
            var n = i(26750),
                o = i(4473),
                a = i(65311),
                s = i.n(a),
                r = i(61169),
                l = i(9651),
                d = i(78009),
                c = i(73042),
                u = i(72354);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S(n.key), n)
                }
            }

            function f(e, t, i) {
                return t && p(e.prototype, t), i && p(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function g(e, t) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function v(e) {
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
                    var i, n = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        i = Reflect.construct(n, arguments, o)
                    } else i = n.apply(this, arguments);
                    return _(this, i)
                }
            }

            function _(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return b(e)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function y(e, t, i) {
                C(e, t), t.set(e, i)
            }

            function C(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function S(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function w(e, t, i) {
                return function(e, t) {
                    if (e !== t) throw new TypeError("Private static access of wrong provenance")
                }(e, t), i
            }

            function I(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, A(e, t, "get"))
            }

            function T(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function N(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, A(e, t, "set"), i), i
            }

            function A(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }

            function P() {
                return void 0 !== d.dB && d.dB.isInitialized()
            }
            var k = new WeakMap,
                E = new WeakMap,
                O = new WeakMap,
                L = new WeakMap,
                x = new WeakSet;
            let U = function(e) {
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
                    }), t && g(e, t)
                }(i, e);
                var t = v(i);

                function i() {
                    var e, n, o;
                    return h(this, i), e = t.call(this), C(n = b(e), o = x), o.add(n),
                        function(e, t, i) {
                            (t = S(t)) in e ? Object.defineProperty(e, t, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = i
                        }(b(e), "items", []), y(b(e), k, {
                            writable: !0,
                            value: null
                        }), y(b(e), E, {
                            writable: !0,
                            value: !0
                        }), y(b(e), O, {
                            writable: !0,
                            value: void 0
                        }), y(b(e), L, {
                            writable: !0,
                            value: !1
                        }), e.node = tag("ul", "pf-breadcrumbs hide-only pf-ui-body", [N(b(e), O, tag("div")), tag("span", "nav-arrow left"), tag("span", "nav-arrow right")]), setTimeout((() => {
                            T(b(e), x, z).call(b(e))
                        }), 500), window.removeEventListener("resize", T(b(e), x, z).bind(b(e))), window.addEventListener("resize", T(b(e), x, z).bind(b(e))), I(b(e), O).removeEventListener("scroll", w(i, i, D)), I(b(e), O).addEventListener("scroll", w(i, i, D)), e
                }
                return f(i, [{
                    key: "clone",
                    value: function() {
                        const e = new i;
                        return this.exportItems().forEach((function(t) {
                            e.add(t)
                        })), e
                    }
                }, {
                    key: "exportItems",
                    value: function() {
                        const e = [];
                        return (this.items || []).forEach((function(t) {
                            e.push({
                                title: t.getTitle(),
                                href: t.getHref(),
                                onclick: t.getOnClickHandler()
                            })
                        })), e
                    }
                }, {
                    key: "append",
                    value: function(e) {
                        this.node.append(e), this.render()
                    }
                }, {
                    key: "render",
                    value: function() {
                        l.U.clearNode(I(this, O));
                        const e = this.items.slice();
                        I(this, E) && I(this, k) && e.unshift(I(this, k));
                        const t = e.pop();
                        let i;
                        for (let t in e) {
                            if (!e.hasOwnProperty(t) || !e[t]) continue;
                            const n = e[t];
                            i = n.getHref() || n.hasClick() ? tag("a", {
                                href: n.getHref() || "javascript:;",
                                onclick: n.hasClick() ? n.getOnclick.bind(n) : null
                            }, n.getTitle()) : tag("span", "", n.getTitle()), tag("li", "pf-ml-24 pf-ml-sm-0", [i]).append(I(this, O))
                        }
                        t && (i = tag("span", "", t.getTitle()), tag("li", "", [i]).append(I(this, O))), setTimeout((() => {
                            I(this, O).scrollLeft = I(this, O).scrollWidth - I(this, O).offsetWidth
                        }), 100), T(this, x, z).call(this)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        if (e instanceof Array) {
                            for (let t in e) e.hasOwnProperty(t) && this.add(e[t]);
                            return this
                        }
                        return this.items.push(new V(e, I(this, L))), this.render(), this
                    }
                }, {
                    key: "set",
                    value: function(e) {
                        return this.clear(), this.add(e), this
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.items = [], this.render()
                    }
                }, {
                    key: "addIndex",
                    value: function(e) {
                        if (!P()) return;
                        const t = new n.p;
                        t.title = e, t.id = 0, N(this, k, new V(t, I(this, L))), this.render()
                    }
                }, {
                    key: "setShouldRenderIndex",
                    value: function(e) {
                        N(this, E, e)
                    }
                }, {
                    key: "setNewCatalogAvailability",
                    value: function(e) {
                        N(this, L, e)
                    }
                }]), i
            }(r.p);

            function D(e) {
                const t = s()(e.target).siblings(".nav-arrow.left"),
                    i = s()(e.target).siblings(".nav-arrow.right");
                e.target.scrollLeft < 1 ? t.addClass("hidden") : t.removeClass("hidden"), Math.ceil(e.target.scrollLeft) >= e.target.scrollWidth - e.target.offsetWidth ? i.addClass("hidden") : i.removeClass("hidden")
            }

            function z() {
                I(this, O).scrollWidth <= I(this, O).offsetWidth ? s()(I(this, O)).siblings(".nav-arrow.right").addClass("hidden") : w(U, U, D).call(U, {
                    target: I(this, O)
                })
            }
            var R = new WeakMap,
                F = new WeakMap;
            let V = function() {
                function e(t, i) {
                    h(this, e), y(this, R, {
                        writable: !0,
                        value: void 0
                    }), y(this, F, {
                        writable: !0,
                        value: !1
                    }), N(this, R, t), N(this, F, i || !1)
                }
                return f(e, [{
                    key: "getTitle",
                    value: function() {
                        return I(this, R) instanceof o.W ? I(this, R).getFullTitle() : P() && I(this, R) instanceof n.p ? I(this, R).getBreadcrumbName() : I(this, R).title
                    }
                }, {
                    key: "getHref",
                    value: function() {
                        return P() && I(this, R) instanceof n.p ? I(this, R).getUrl() : I(this, R).href
                    }
                }, {
                    key: "hasClick",
                    value: function() {
                        return !(I(this, R) instanceof o.W) && (P() && I(this, R) instanceof n.p || !!I(this, R).onclick)
                    }
                }, {
                    key: "getOnclick",
                    value: function(e) {
                        u.$.isClicked = !0, e.preventDefault();
                        const t = this.getOnClickHandler();
                        t && t()
                    }
                }, {
                    key: "getOnClickHandler",
                    value: function() {
                        if (I(this, F) && I(this, R).getUrl()) return () => {
                            window.location.href = I(this, R).getUrl()
                        };
                        if (I(this, R) instanceof o.W) return null;
                        if (I(this, R).onclick) return I(this, R).onclick;
                        if (I(this, R).href) return () => {
                            window.location.href = I(this, R).href
                        };
                        if (P() && d.v2.createAndDispatchEvent) {
                            var e = void 0 !== c.m && c.m.isOrderFlowInitialized && c.m.instance || d.dB.isGenerator() || d.dB.isProductsPricing() || d.dB.isProductPush() ? d.dB.EVENT_NAME : d.dB.EVENT_CATEGORY_CHOOSE;
                            return () => {
                                d.v2.createAndDispatchEvent(e, {
                                    scrollToTop: d.dB.isProductsPricing(),
                                    category: I(this, R) instanceof n.p && I(this, R)
                                })
                            }
                        }
                    }
                }]), e
            }()
        },
        72354: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => n
            });
            const n = {
                isClicked: !1
            }
        },
        34783: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => w,
                V: () => T
            });
            var n = i(25046),
                o = i(61169),
                a = i(70538),
                s = i(12954);

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (o = n.key, a = void 0, "symbol" == typeof(a = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(o, "string")) ? a : String(a)), n)
                }
                var o, a
            }

            function d(e, t, i) {
                return t && l(e.prototype, t), i && l(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function u(e) {
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
                    var i, n = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        i = Reflect.construct(n, arguments, o)
                    } else i = n.apply(this, arguments);
                    return h(this, i)
                }
            }

            function h(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return p(e)
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function g(e, t, i) {
                v(e, t), t.set(e, i)
            }

            function v(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function _(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, m(e, t, "get"))
            }

            function b(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, m(e, t, "set"), i), i
            }

            function m(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var y = new WeakMap,
                C = new WeakMap,
                S = new WeakSet;
            let w = function(e) {
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
                    }), t && c(e, t)
                }(i, e);
                var t = u(i);

                function i(e) {
                    var n, o, a;
                    return r(this, i), n = t.call(this), v(o = p(n), a = S), a.add(o), g(p(n), y, {
                            writable: !0,
                            value: void 0
                        }), g(p(n), C, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "pagination-component-mke"), b(p(n), y, e),
                        function(e, t, i) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(p(n), S, I).call(p(n)), n
                }
                return d(i, [{
                    key: "setNewPagesProps",
                    value: function(e) {
                        _(this, C).setDataProp("pages", e)
                    }
                }, {
                    key: "setNewCurrentPageProps",
                    value: function(e) {
                        _(this, C).setDataProp("currentPage", e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        _(this, C).destroy(), b(this, C, null)
                    }
                }]), i
            }(o.p);
            async function I() {
                a.default.use(s.ZP);
                const e = new n.L;
                e.components = {
                    VPagination: () => Promise.all([i.e(65951), i.e(69952)]).then(i.bind(i, 65951))
                }, e.template = '\n            <v-pagination\n                :pages="pages"\n                :currentPage="currentPage"\n                :data-test="dataTest"\n                @onChange="emitEvent(\'onChange\', $event)"\n            />\n        ', e.initialData = {
                    pages: _(this, y).pages,
                    currentPage: _(this, y).currentPage,
                    dataTest: _(this, y).dataTest
                }, e.emitEvent = (e, t) => {
                    if ("onChange" === e) _(this, y).onChange && _(this, y).onChange(t)
                }, b(this, C, new n.Z(e)), _(this, C).append(this.node)
            }
            let T = d((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, e), this.pages = t.pages || void 0, this.currentPage = t.currentPage || void 0, this.dataTest = t.dataTest || void 0, this.onChange = t.onChange || void 0
            }))
        },
        80108: (e, t, i) => {
            "use strict";
            i.d(t, {
                D: () => a
            });
            var n = i(13136),
                o = i(9651);
            async function a(e, t) {
                let {
                    configureInstanceBeforeAppend: a
                } = t;
                const {
                    node: s,
                    deps: {
                        PFProductsPricing: r
                    }
                } = await (0, n.f)(e, (() => i.e(40265).then(i.bind(i, 48013))));
                o.U.clearNode(s);
                for (var l = arguments.length, d = new Array(l > 2 ? l - 2 : 0), c = 2; c < l; c++) d[c - 2] = arguments[c];
                const u = new r(...d);
                a && a(u), u.append(s)
            }
        },
        87919: (e, t, i) => {
            "use strict";
            i.d(t, {
                Mb: () => f,
                Pc: () => d,
                QU: () => u,
                Wg: () => p,
                bv: () => l,
                ex: () => g,
                kl: () => h
            });
            i(90227), i(65311);
            var n = i(17570),
                o = i(20833),
                a = i(25046);
            const s = ["open-review-modal", "close-review-modal", "change-review-modal", "scroll-to-reviews", "toggle-review-rating-overview"],
                r = [];

            function l(e, t) {
                c(e) && !r.includes(e) && (r.push(e), window.addEventListener(e, t))
            }

            function d(e, t) {
                c(e) && window.dispatchEvent(new CustomEvent(e, {
                    detail: t
                }))
            }

            function c(e) {
                return !!s.includes(e) || (console.error(`Window event ${e} doesn't exist`), !1)
            }

            function u(e) {
                return `background: linear-gradient(90deg, ${e[0]} 50%, ${e[1]||e[0]} 50%);`
            }

            function h(e) {
                return 100 / e * (e - 1)
            }

            function p(e) {
                const {
                    reviewCount: t,
                    rating: n,
                    waitingApprovalReviewCount: o
                } = e.getReviewRating(), s = new a.L;
                return s.components = {
                    "reviews-in-total": () => i.e(51326).then(i.bind(i, 30197))
                }, s.initialData = {
                    total: t,
                    average: n,
                    waitingForApproval: o,
                    inOneRow: !0
                }, s.template = '<reviews-in-total\n            :total="total"\n            :average="average"\n            :waiting-for-approval="waitingForApproval"\n            :in-one-row="inOneRow"\n        />', new a.Z(s)
            }

            function f() {
                const e = new o.R,
                    t = n.z.Par;
                t.returnUrl = e.path + (e.query.toString() ? "?" + e.query.toString() : ""), t.signUpContent = [
                    [tag("span", {
                        innerHTML: lang("<strong>Automatic</strong> order fulfillment")
                    })],
                    [tag("span", {
                        innerHTML: lang("Download free print file <strong>templates</strong> and <strong>mockups</strong>")
                    })], lang("No upfront or monthly fees")
                ], t.signInContent = [dlang("reviews", "Please sign in to review products.")], new n.z(t)
            }

            function g(e, t) {
                const i = e.ratingCategoryCriterionIds;
                if (!i.length) return e;
                const n = {};
                return t.forEach((e => {
                    const t = e.criteria.filter((e => i.includes(e.criterionId))).map((e => e.criterionId));
                    t.length && (n[e.categoryId] = t)
                })), {
                    ...e,
                    ratingCategoryCriterionIds: n
                }
            }
        },
        87213: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => n
            });
            const n = Class({
                _$node: null,
                _onShow: null,
                onCloseCallback: null,
                __construct: function(e, t, i, n, o) {
                    var a = {
                        html: !0,
                        placement: "top",
                        trigger: "focus",
                        animation: !1,
                        modalCompatible: !1,
                        hideOnOutsideClick: !1,
                        template: tag("div", {
                            className: "popover text-center popover-warning",
                            attr: {
                                "aria-live": "polite"
                            }
                        }, [tag("button", {
                            className: "popover__close close",
                            attr: {
                                "aria-hidden": "true"
                            },
                            onclick: e => {
                                this._$node.popover("hide")
                            }
                        }, "x"), tag("div", "popover__arrow arrow"), tag("div", "popover__title title pf-mr-16", t), tag("div", "popover__content content", i)])
                    };
                    if (this.onCloseCallback = o, n)
                        for (var s in n) a[s] = n[s];
                    const r = $("body").hasClass("modal-open") && a.modalCompatible;
                    r && (a.container = "body"), this._$node = $(e).popover(a), "manual" !== a.trigger && this._$node.popover("show"), this._$node.on("hidden.bs.popover", (() => {
                        this.onCloseCallback && this.onCloseCallback(this._destroyInfo)
                    })), r && $(".modal-content").on("scroll", (() => {
                        this._$node.popover("hide")
                    })), n.closeOnResize && window.addEventListener("resize", (() => {
                        this._$node.popover("hide")
                    })), n.hideOnOutsideClick && $("html").on("click", (e => {
                        void 0 !== $(e.target).data("original-title") || $(e.target).parents().is(".popover.in") || this._$node.popover("hide")
                    }))
                },
                destroy: function(e) {
                    this._destroyInfo = e, this._$node.popover("destroy")
                },
                show: function() {
                    this._$node.popover("show")
                }
            });
            window && ((globalThis || {}).PFComponentsPopover = n)
        },
        93993: (e, t, i) => {
            "use strict";
            i.d(t, {
                L: () => o
            });
            var n = i(9651);
            const o = Class({
                _par: null,
                __construct: function(e) {
                    this._par = e, this.node = tag("div", {
                        className: "pf-banner pf-banner-" + this._par.type + " " + (this._par.className || ""),
                        attr: {
                            "data-test": this._par.dataTest
                        }
                    }, [this._par.closable ? tag("i", {
                        className: "pf-banner__close-icon pf-i pf-i-close pf-i-20 pf-cursor-pointer pf-position-absolute",
                        prop: {
                            onclick: function() {
                                if (!this._par.onCloseClick) return this._prettyRemove(), !1;
                                this._par.onCloseClick()
                            }.bind(this)
                        }
                    }) : "", tag("div", "pf-banner__content row", [tag("div", "col-sm", [tag("div", "row no-gutters", [this._par.icon ? tag("div", "col-auto", [tag("img", {
                        className: "pf-banner__logo pf-mr-24",
                        src: this._par.icon
                    })]) : "", tag("div", "col", [tag("div", "row", [tag("div", "col pf-ui-body", [this._par.heading ? tag("div", "pf-bold", this._par.heading) : "", tag("div", {
                        innerHTML: this._par.content
                    }), this._par.linkText ? tag("a", {
                        className: "pf-d-inline-block pf-mt-2",
                        onclick: this._par.onLinkClick
                    }, this._par.linkText) : ""]), this._par.buttonText ? tag("div", "col-sm-auto pf-mt-8 pf-my-sm-auto", [tag("a", {
                        className: "pf-btn pf-btn-outline",
                        onclick: this._par.onButtonClick
                    }, this._par.buttonText)]) : ""])])])])])])
                },
                _prettyRemove: function() {
                    n.U.removeClassName(this.node, "pf-banner pf-banner-" + this._par.type), setTimeout((() => {
                        n.U.removeNode(this.node), this._par.onAfterElementRemoved && this._par.onAfterElementRemoved()
                    }), 300)
                }
            }, n.U.Base);
            o.show = function(e, t) {
                new o(t).append(e)
            }, window && ((globalThis || {}).PFComponentsBanner = o)
        },
        82475: (e, t, i) => {
            "use strict";
            i.d(t, {
                P: () => d
            });
            var n = i(75048),
                o = i(71218),
                a = i(9651),
                s = i(60946),
                r = i(71943),
                l = i(75414);
            const d = function(e) {
                if (this.par = new n.$, a.U.O2O(this.par, e), this.par.uploadType) {
                    var t = this.par.extensions.length > 0 ? "." + this.par.extensions.join(",.") : "*";
                    this.node = (0, a.U)({
                        tag: "span",
                        els: [this.nodeButton = (0, a.U)({
                            tag: this.par.buttonTag,
                            className: this.par.buttonClassName,
                            text: this.par.caption,
                            onclick: $.proxy((function() {
                                if (this.par.onClick && !1 === this.par.onClick()) return !1;
                                $(this.node).find("input[type=file]").click()
                            }), this)
                        }), this.nodeFileInput = (0, a.U)({
                            tag: "input",
                            type: "file",
                            name: "file",
                            className: "hidden",
                            attr: {
                                accept: t
                            }
                        })]
                    }), this.nodeFileInput.multiple = this.par.allowMultiple;
                    var i = new r.K.Par;
                    i.uploadType = this.par.uploadType, i.node = this.nodeFileInput, i.allowedExtensionRegex = new RegExp("(.|/)(" + this.par.extensions.join("|") + ")$", "i"), i.uploadCallbackUrl = this.par.uploadCallbackUrl, i.uploadDataUrl = this.par.uploadDataUrl, i.maxUploadSize = this.par.maxUploadSize, i.nodeDropZone = this.par.nodeDropZone || !1, i.disablePdfPageValidation = !0, i.enableTransparencyValidation = this.par.enableTransparencyValidation, i.onDone = this.onFileUploaded.bind(this), i.onFileSelected = this.onFileSelected.bind(this), i.getUploadExtra = () => this.par.extraData, i.onProgress = function(e) {
                        $(this.nodeButton).text(this.par.getProgressText(e))
                    }.bind(this), i.onStart = function() {
                        a.U.addClassName(this.nodeButton, "disabled"), this.nodeButton.blur(), $(this.nodeButton).text(this.par.getStartText()), this.onFileStarted()
                    }.bind(this), i.onProcessFail = function(e, t) {
                        a.U.removeClassName(this.nodeButton, "disabled"), $(this.nodeButton).text(this.par.caption), new l.N({
                            type: l.N.TYPE_ERROR,
                            content: dlang("branding", "Sorry, upload failed, please try again!\n Error: " + t)
                        })
                    }.bind(this), i.onFail = function(e) {
                        a.U.removeClassName(this.nodeButton, "disabled"), this.par.onFail ? this.par.onFail(e) : new l.N({
                            type: l.N.TYPE_ERROR,
                            content: dlang("branding", "Sorry, upload failed, please try again!\n Reason: " + e)
                        }), $(this.nodeButton).text(this.par.caption)
                    }.bind(this), i.onSubmit = function(e) {
                        s.D.subscribe(e.temporaryFilePusherKey, "processed", this.onFileProcessed.bind(this)), s.D.subscribe(e.temporaryFilePusherKey, "failed", this.onFileProcessingFailed.bind(this))
                    }.bind(this), this.uploader = new r.K(i)
                } else console.error("No upload type specified!")
            };
            d.prototype = new a.U.Base, d.prototype.setUploadType = function(e) {
                this.par.uploadType = e, this.uploader.setUploadType(e)
            }, d.prototype.onFileUploaded = function(e) {
                const t = o.z.fromArray(e);
                this.nodeButton.innerText = this.par.getProcessingText(), a.U.addClassName(this.nodeButton, "disabled"), this.par.onUploaded ? this.par.onUploaded(t) : console.error("Callback not defined for temporary file upload")
            }, d.prototype.onFileStarted = function() {
                this.par.onStarted ? this.par.onStarted() : console.log("File started")
            }, d.prototype.onFileSelected = function(e) {
                var t = e.files[e.index];
                this.par.onSelected ? this.par.onSelected(t) : console.log("File selected", t)
            }, d.prototype.onFileProcessed = function(e) {
                const t = o.z.fromArray(e);
                this.nodeButton.innerText = this.par.caption, a.U.removeClassName(this.nodeButton, "disabled"), this.par.onProcessed ? this.par.onProcessed(t) : console.log("File processed", t)
            }, d.prototype.onFileProcessingFailed = function(e) {
                const t = o.z.fromArray(e);
                this.par.onProcessingFailed ? this.par.onProcessingFailed(t) : console.log("File processing failed", t)
            }, d.prototype.click = function() {
                this.nodeButton.click()
            }, d.prototype.hide = function() {
                a.U.addClassName(this.nodeButton, "hidden")
            }, d.prototype.show = function() {
                a.U.removeClassName(this.nodeButton, "hidden")
            }, window && ((globalThis || {}).PFComponentsBasicUploadButton = d)
        },
        75048: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => n
            });
            const n = Class({
                uploadType: "",
                extensions: ["jpg", "jpeg", "png"],
                caption: "Upload",
                buttonClassName: "pf-btn pf-btn-secondary",
                onSelected: null,
                onStarted: null,
                onUploaded: null,
                onProcessed: null,
                onProcessingFailed: null,
                onFail: null,
                onClick: null,
                allowMultiple: !1,
                nodeDropZone: null,
                buttonTag: "a",
                maxUploadSize: 52428800,
                uploadCallbackUrl: "upload/callback",
                uploadDataUrl: "upload/get-upload-data",
                extraData: {},
                enableTransparencyValidation: !1,
                getStartText: function() {
                    return lang("Starting...")
                },
                getProcessingText: function() {
                    return lang("Processing...")
                },
                getProgressText: function(e) {
                    return lang("Uploading {percent}%").replace("{percent}", e)
                }
            });
            window && ((globalThis || {}).PFComponentsBasicUploadButtonPar = n)
        },
        92493: (e, t, i) => {
            "use strict";
            i.d(t, {
                R: () => a
            });
            var n = i(87213),
                o = i(9651);
            const a = Class({
                _nodesByItem: {},
                _par: null,
                __construct: function(e) {
                    this._par = e, this._onValueChangedCallback = this._par.onChanged, this._nodeItems = tag("div", {
                        className: "button-picker__list",
                        attr: {
                            role: "list",
                            "aria-label": this._par.ariaLabel
                        }
                    }), this._renderItems()
                },
                _onItemClick: function(e) {
                    this._popover && this._popover.destroy(), this._par.sampleValuesDisabled.indexOf(e) > -1 || this._par.valuesInactive.indexOf(e) > -1 || this._par.valuesHidden.indexOf(e) > -1 || this._par.valuesDisabled.indexOf(e) > -1 ? this._onValueChangedCallback(e) : (this._par.activeValue = e, this._onValueChangedCallback(e), this._renderState())
                },
                setActiveValue: function(e) {
                    this._par.activeValue = e, this._renderState()
                },
                getActiveValue: function() {
                    return this._par.activeValue
                },
                _renderItems: function() {
                    for (var e in o.U.clearNode(this._nodeItems), this._nodesByItem = {}, this._par.values) {
                        var t = this._par.values[e].title,
                            i = this._par.values[e].value,
                            n = this._par.singleAriaLabel.replace("{title}", t),
                            a = tag("a", {
                                className: "pf-btn pf-btn-square pf-btn-outline pf-w-auto pf-mb-4 pf-mr-4 pf-px-4",
                                text: t,
                                onclick: this._onItemClick.bind(this, i),
                                attr: {
                                    "data-original-title": t,
                                    role: "button",
                                    "aria-label": n
                                },
                                data: {
                                    label: n
                                }
                            });
                        this._nodesByItem[i] = a, a.append(this._nodeItems)
                    }
                    this._renderState()
                },
                _renderState: function() {
                    for (var e in this._nodesByItem) {
                        var t = this._nodesByItem[e];
                        o.U.removeClassName(t, "active"), o.U.removeClassName(t, "disabled"), t.setAttribute("aria-label", t.dataset.label), (this._par.valuesDisabled.indexOf(e) > -1 || this._par.sampleValuesDisabled.indexOf(e) > -1 || this._par.valuesHidden.indexOf(e) > -1 || this._par.valuesInactive.indexOf(e) > -1) && (o.U.addClassName(t, "pf-border--dashed disabled"), o.U.removeClassName(t, "active"), t.setAttribute("aria-label", dlang("site", "{buttonLabel} is not available").replace("{buttonLabel}", t.dataset.label))), this._par.activeValue && this._par.activeValue === e && o.U.addClassName(t, "active")
                    }
                },
                setUnavailableItems: function(e) {
                    this._par.valuesDisabled = e, this._renderState()
                },
                setHiddenItems: function(e) {
                    this._par.valuesHidden = e, this._renderState()
                },
                togglePopover: function(e, t, i) {
                    e && (this.getInactiveItems().indexOf(e) > -1 || this.getUnavailableItems().indexOf(e) > -1) && this._showPopover(e, t, i)
                },
                _showPopover: function(e, t, i) {
                    this._popover && this._popover.destroy();
                    const o = $(this._nodeItems).closest(".dynamic-sticky-footer").get(0);
                    this._popover = new n.z(this._nodesByItem[e], t, i, {
                        modalCompatible: !0,
                        closeOnResize: !0,
                        placement: "bottom",
                        container: o ? $(o).find(".dynamic-sticky-footer__drawer").get(0) : "body"
                    })
                },
                getUnavailableItems: function() {
                    return this._par.valuesDisabled
                },
                getHiddenItems: function() {
                    return this._par.valuesHidden
                },
                getValue: function() {
                    return this._par.activeValue
                },
                getInactiveItems: function() {
                    return this._par.valuesInactive
                },
                setInactiveItems: function(e) {
                    this._par.valuesInactive = e, this._renderState()
                },
                setDisabledSampleSizes: function(e) {
                    this._par.sampleValuesDisabled = e, this._renderState()
                },
                getDisabledSampleSizes: function() {
                    return this._par.sampleValuesDisabled
                }
            }, o.U.Base);
            window && ((globalThis || {}).PFComponentsButtonPicker = a)
        },
        26859: (e, t, i) => {
            "use strict";
            i.d(t, {
                l: () => n
            });
            const n = Class({
                values: [],
                valuesDisabled: [],
                valuesHidden: [],
                valuesInactive: [],
                sampleValuesDisabled: [],
                onChanged: null,
                activeValue: null,
                ariaLabel: "",
                singleAriaLabel: "{title}"
            });
            window && ((globalThis || {}).PFComponentsButtonPickerPar = n)
        },
        37523: (e, t, i) => {
            "use strict";
            i.d(t, {
                X: () => d
            });
            var n = i(40245),
                o = i(38032),
                a = i(281),
                s = i(87213),
                r = i(9651),
                l = i(29842);
            const d = Class({
                _par: null,
                _selectedColors: null,
                _colors: null,
                _colorNodes: null,
                _maxCount: 0,
                _canDeselectLast: !0,
                _errorNode: null,
                _onError: null,
                _unavailableColors: null,
                _discontinuedColors: null,
                _disabledRegionColors: null,
                __construct: function(e) {
                    e = e || new a.A, this._par = e, this.onChangeCallback = e.onChange, this._canDeselectLast = e.canDeselectLast, this._onError = e.onError;
                    var t = e.nodeClass || "",
                        i = [],
                        n = !Array.isArray(e.colors);
                    for (var o in e.colors) {
                        var s = n ? o : "",
                            l = e.colors[o] instanceof Array ? e.colors[o] : [e.colors[o]];
                        0 !== (l = l.filter((function(e) {
                            return !!e && "transparent" !== e.toLowerCase()
                        }))).length && i.push({
                            name: s,
                            codes: l
                        })
                    }
                    for (o in this._selectedColors = e.selectedColors || [], this._unavailableColors = e.unavailableColors || [], this._discontinuedColors = e.discontinuedColors || [], this._disabledRegionColors = e.disabledRegionColors || [], this._disabledColors = e.disabledColors || [], this._selectedColors) void 0 === this._selectedColors[o] && this._selectedColors.splice(o, 1);
                    t += e.showBig ? " swatches--big" : "", t += e.showHuge ? " swatches--huge" : "", t += e.showInline ? " swatches--inline" : "", t += e.showTextSwatches ? " swatches--for-text" : "", this._maxCount = e.maxCount || i.length, this.node = tag("div", {
                        className: "swatches pf-m-0 pf-mb-12 pf-pl-2 " + t,
                        attr: {
                            role: "list",
                            "aria-label": lang("Choose color")
                        }
                    }), this.onChangeCallback && e.isColorClickable && r.U.addClassName(this.node, "swatches--click"), this._colors = i, e.preSelectFirst && i.length && this.setSelectedColor(i[0].name), this.render()
                },
                render: function() {
                    r.U.clearNode(this.node), this._colorNodes = {};
                    let e = [];
                    const t = [],
                        i = [],
                        a = [];
                    for (const n of this._colors) this._discontinuedColors.includes(n.name) ? i.push(n) : this._unavailableColors.includes(n.name) ? t.push(n) : this._disabledRegionColors.includes(n.name) ? a.push(n) : e.push(n);
                    e = e.concat(t, i, a);
                    for (const t of e) {
                        const e = t.name,
                            i = [],
                            a = this._unavailableColors.includes(e),
                            r = this._discontinuedColors.includes(e),
                            u = this._disabledRegionColors.includes(e),
                            h = this._disabledColors.includes(e);
                        let p = lang("Color {color}").replace("{color}", e);
                        for (let e = 0; e < t.codes.length; e++) {
                            const n = (0, l.C)(e, this._par.showHuge);
                            let o = {
                                tag: "span",
                                className: `${n} pf-border-transparent pf-hover-shadow`,
                                style: {
                                    backgroundColor: t.codes[e]
                                }
                            };
                            this._par.showTextSwatches && (o = tag("span", {
                                className: `${n} pf-border-transparent pf-hover-shadow`,
                                innerHTML: d.getTextSwatchNode(t.codes[e])
                            })), i.push(o)
                        }
                        let f = "";
                        f += a || u ? " swatches__item--unavailable" : "", f += r || h ? " swatches__item--discontinued" : "", f += this._par.showTextSwatches ? " swatches__item--text" : "";
                        const g = h && this._par.disabledText ? this._par.disabledText : e;
                        let v;
                        if (this._par.showRgbTooltip) {
                            var s = o.Q.hexToRgb(t.codes[0]);
                            v = g + " (R:" + s.r + " G:" + s.g + " B:" + s.b + ")"
                        } else v = g + " " + t.codes.join("/");
                        a || u ? p = dlang("site", "Color {color} is not available").replace("{color}", e) : (r || h) && (p = dlang("site", "Color {color} is discontinued").replace("{color}", e));
                        var c = tag("a", {
                            className: "swatches__item pf-rounded pf-hover-shadow" + f,
                            title: v,
                            attr: {
                                "aria-label": p
                            },
                            data: {
                                label: p
                            }
                        }, i);
                        this._par.isColorClickable || h || (c.style.cursor = "default"), g && $(c).tooltip({
                            container: "body",
                            trigger: (0, n.Vu)() ? "manual" : "hover"
                        }), this.onChangeCallback && !h && (c.setAttribute("role", "button"), c.onclick = this._onColorClick.bind(this, c, e)), this._colorNodes[e] = c, this._selectedColors.indexOf(e) > -1 && this._setItemActiveState(c, !0), c.append(this.node)
                    }
                    this._par.showEmptyGraphic && (this._emptyNode = tag("div", "swatches__empty " + (this._selectedColors.length > 0 ? "hidden" : ""), [tag("img", {
                        className: "swatches__empty__mobile hidden-sm hidden-md hidden-lg",
                        src: langImage("generator/choose-color-mobile.png")
                    }), tag("img", {
                        className: "swatches__empty__desktop hidden-xs",
                        src: langImage("generator/choose-color-desktop.png")
                    })]).prepend(this.node), setTimeout(function() {
                        this._selectedColors.length > 0 ? $(this.node).closest(".product-option").removeClass("pf-mt-sm-24 pf-mt-md-0") : $(this.node).closest(".product-option").addClass("pf-mt-sm-24 pf-mt-md-0")
                    }.bind(this), 1))
                },
                _renderState: function() {
                    for (var e in this._colorNodes) {
                        var t = this._colorNodes[e];
                        this._setItemActiveState(t, !1), r.U.removeClassName(t, "swatches__item--discontinued"), r.U.removeClassName(t, "swatches__item--unavailable");
                        const i = this._unavailableColors.indexOf(e) > -1,
                            n = this._discontinuedColors.indexOf(e) > -1,
                            o = this._disabledRegionColors.indexOf(e) > -1;
                        (i || o) && r.U.addClassName(t, "swatches__item--unavailable"), n && r.U.addClassName(t, "swatches__item--discontinued"), this._selectedColors.indexOf(e) > -1 && this._setItemActiveState(t, !0)
                    }
                },
                _setItemActiveState: function(e, t) {
                    t ? r.U.addClassName(e, "swatches__item--active") : r.U.removeClassName(e, "swatches__item--active")
                },
                _onColorClick: function(e, t) {
                    (0, n.Vu)() || $(".tooltip").tooltip("hide");
                    var i = this._selectedColors.indexOf(t);
                    if ((0, n.Vu)() && ($(".swatches__item").each((function(t, i) {
                            e != i && $(i).tooltip("hide")
                        })), $(e).tooltip("show"), setTimeout((function() {
                            $(e).tooltip("hide")
                        }), 2e3)), !this._par.isColorClickable) return;
                    const o = !this.isColorUnavailable(t) && !this.isColorDiscontinued(t) && !this.isColorDisabledRegion(t);
                    if (i > -1) {
                        if (!this._canDeselectLast && 1 === this._selectedColors.length) return;
                        this._selectedColors.splice(i, 1), this._setItemActiveState(e, !1)
                    } else if (1 === this._maxCount) o && (this._selectedColors = [t], this._renderState());
                    else {
                        if (!(this._selectedColors.length < this._maxCount)) return this.addError("You can choose up to " + this._maxCount + " colors"), !1;
                        this._selectedColors.push(t), this._setItemActiveState(e, !0)
                    }
                    this.onChangeCallback && this.onChangeCallback(1 === this._maxCount ? [t] : this.getSelectedColors()), this._checkEmpty()
                },
                getSelectedColors: function() {
                    return this._selectedColors.slice()
                },
                addError: function(e) {
                    "function" == typeof this._onError && this._onError(e)
                },
                setUnavailableColors: function(e) {
                    return this._unavailableColors = e, this
                },
                setDiscontinuedColors: function(e) {
                    return this._discontinuedColors = e, this
                },
                setDisabledRegionColors: function(e) {
                    return this._disabledRegionColors = e, this
                },
                getUnavailableColors: function() {
                    return this._unavailableColors
                },
                getDiscontinuedColors: function() {
                    return this._discontinuedColors
                },
                getDisabledRegionColors: function() {
                    return this._disabledRegionColors
                },
                isColorUnavailable(e) {
                    return this.getUnavailableColors().indexOf(e) > -1
                },
                isColorDiscontinued(e) {
                    return this.getDiscontinuedColors().indexOf(e) > -1
                },
                isColorDisabledRegion(e) {
                    return this.getDisabledRegionColors().indexOf(e) > -1
                },
                getColors: function() {
                    return this._colors
                },
                showPopover: function(e, t, i, n) {
                    this._popover && (this._popover.onCloseCallback = null, this._popover.destroy());
                    const o = $(this.node).closest(".dynamic-sticky-footer").get(0);
                    this._popover = new s.z(this._colorNodes[e], t, i, {
                        modalCompatible: !0,
                        closeOnResize: !0,
                        placement: "bottom",
                        container: o ? $(o).find(".dynamic-sticky-footer__drawer").get(0) : "body"
                    }, n)
                },
                setSelectedColor: function(e) {
                    this._selectedColors = e ? [e] : [], this._renderState()
                },
                _checkEmpty: function() {
                    this._par.showEmptyGraphic && this._emptyNode && (this._selectedColors.length > 0 ? (r.U.addClassName(this._emptyNode, "hidden"), $(this.node).closest(".product-option").removeClass("pf-mt-48 pf-mt-sm-24 pf-mt-md-0")) : (r.U.removeClassName(this._emptyNode, "hidden"), $(this.node).closest(".product-option").addClass("pf-mt-48 pf-mt-sm-24 pf-mt-md-0")))
                }
            }, r.U.Base);
            d.getTextSwatchNode = function(e) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 15 16"><g fill="none"><g style="fill:' + e + ';stroke:#d5d5d5"><path d="M8.8 4.1L8.8 12C8.8 12.4 8.8 12.6 8.9 12.6 9 12.7 9.3 12.7 9.9 12.7L10.4 12.7 10.4 14.5 4.6 14.5 4.6 12.7 5.1 12.7C5.7 12.7 6 12.7 6.1 12.6 6.2 12.6 6.2 12.4 6.2 12L6.2 4.1 4.7 4.1C4.6 4.1 4.6 4.1 4.5 4.1 4 4.1 3.8 4.2 3.5 4.3 3.3 4.6 3 5 2.5 5.9L2.3 6.3 0.7 5.8 1.8 1.5 13.2 1.5 14.3 5.8 12.7 6.3 12.5 5.9C12 5 11.7 4.6 11.5 4.3 11.2 4.2 11 4.1 10.5 4.1 10.4 4.1 10.4 4.1 10.3 4.1L8.8 4.1Z"/></g></g></svg>'
            }, window && ((globalThis || {}).PFComponentsColorPicker = d)
        },
        281: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => n
            });
            const n = Class({
                colors: {},
                selectedColors: [],
                unavailableColors: [],
                maxCount: null,
                canDeselectLast: !0,
                onChange: null,
                showBig: !1,
                showHuge: !1,
                showInline: !1,
                showTextSwatches: !1,
                shouldSortColors: !0,
                preSelectFirst: !1,
                nodeClass: "",
                discontinuedColors: null,
                disabledRegionColors: null,
                isColorClickable: !0,
                disabledColors: [],
                disabledText: null,
                showRgbTooltip: !1,
                showEmptyGraphic: null,
                __construct: function() {},
                gatherColorsFromProduct: function(e) {
                    for (var t in e.colors) {
                        var i = e.colors[t];
                        if (i.colorCode) {
                            var n = [i.colorCode.toUpperCase()];
                            i.colorCode2 && n.push(i.colorCode2.toUpperCase()), this.colors[i.colorName] = n
                        }
                    }
                }
            });
            window && ((globalThis || {}).PFComponentsColorPickerPar = n)
        },
        57998: (e, t, i) => {
            "use strict";
            i.d(t, {
                L: () => d
            });
            var n = i(9651),
                o = i(34783),
                a = i(65311),
                s = i.n(a),
                r = i(96486),
                l = i.n(r);
            const d = Class({
                __construct: function(e) {
                    if (this._par = e, this.node = tag("div", this._par.className ? this._par.className : "pf-my-24"), !l().isNumber(l().toNumber(this._par.page)) || !l().isNumber(l().toNumber(this._par.pages))) throw new Error("Invalid parameters!");
                    if (this._par.pages < 2) return;
                    const t = new o.V;
                    t.pages = this._par.pages, t.currentPage = this._par.page, t.onChange = this._onPageClick.bind(this), this._pagingNode = new o.Q(t), this._pagingNode.append(this.node)
                },
                _onPageClick(e) {
                    this._currentPage = parseInt(e, 10), this._par.scrollNode && s()("html, body").animate({
                        scrollTop: s()(this._par.scrollNode).offset().top + this._par.scrollOffset
                    }, 300), null != this._par.callback && this._par.callback(this._currentPage)
                }
            }, n.U.Base);
            window && ((globalThis || {}).PFComponentsPaging = d)
        },
        27815: (e, t, i) => {
            "use strict";
            i.d(t, {
                O: () => n
            });
            const n = Class({
                page: 1,
                pages: 1,
                callback: null,
                scrollNode: null,
                scrollOffset: 0,
                className: ""
            });
            window && ((globalThis || {}).PFComponentsPagingPar = n)
        },
        99574: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => d
            });
            var n = i(40245),
                o = i(90227),
                a = i(9730),
                s = i(9651),
                r = i(23279),
                l = i.n(r);
            const d = Class({
                items: null,
                tabNodes: null,
                _fixed: null,
                __construct: function(e, t) {
                    this.items = [], this.tabNodes = [], this._fixed = t;
                    const i = [];
                    i.push("pf-tabs " + e), (0, n.Vu)() && i.push("touch"), PF.WEBVIEW_VERSION && i.push("webview"), this.node = tag("ul", i.join(" ")), this._fixed && (document.removeEventListener("scroll", this._scrollEvent), document.addEventListener("scroll", this._scrollEvent)), this._nodeWrap = tag("div", "tab-wrap"), setTimeout((() => {
                        this._resizeTabCheck(), this._scrollCheck()
                    }), 100), window.removeEventListener("resize", this._resizeTabCheck.bind(this)), window.addEventListener("resize", this._resizeTabCheck.bind(this)), this._nodeWrap.removeEventListener("scroll", this._scrollWrapEvent), this._nodeWrap.addEventListener("scroll", this._scrollWrapEvent)
                },
                _scrollEvent: function(e) {
                    const t = $(this.node).find(".nav-arrow.right"),
                        i = $(this.node).find(".nav-arrow.left"),
                        n = this.node.getBoundingClientRect().height + 2 * parseInt(this.node.style.borderWidth || 0);
                    if (this._nodeHolder || (this._nodeHolder = tag("div", {
                            className: "pf-tabs-holder",
                            style: {
                                height: n + "px",
                                marginTop: -n + "px"
                            }
                        }), this.node.parentNode.insertBefore(this._nodeHolder, this.node.nextSibling)), "none" === window.getComputedStyle(this._nodeHolder).display) return void(o.k.isWindowBiggerThan(o.k.SIZES.XS) && o.k.isWindowSmallerThan(o.k.SIZES.SM) && i.hasClass("hidden") && this.items.length > 3 && t.removeClass("hidden"));
                    const a = this._nodeHolder.getBoundingClientRect(),
                        s = $(".header").outerHeight(),
                        r = $(".header .navigation-wrap").outerHeight(),
                        l = a.top - n - (s - r) < 0;
                    if (document.querySelector(".catalog__product__tabs")) {
                        new IntersectionObserver((e => {
                            e[0].isIntersecting && l ? this._makeTabsSticky(s, t) : this._makeTabsStatic(n, i, t)
                        })).observe(document.querySelector(".catalog__product__tabs"))
                    } else l ? this._makeTabsSticky(s, t) : this._makeTabsStatic(n, i, t)
                },
                _makeTabsSticky: function(e, t) {
                    this._nodeHolder.style.marginTop = 0, s.U.addClassName(this.node, "fixed"), this.node.style.top = e + "px", window.innerWidth > 580 && t.addClass("hidden")
                },
                _makeTabsStatic: function(e, t, i) {
                    this._nodeHolder.style.marginTop = -e + "px", this._nodeHolder.style.height = e + "px", s.U.removeClassName(this.node, "fixed"), this.node.style.top = 0, t.hasClass("hidden") && this.items.length > 3 && i.removeClass("hidden")
                },
                _resizeTabCheck: function() {
                    "fixed" !== window.getComputedStyle(this.node).position && (this._nodeHolder && (this._nodeHolder.style.marginTop = 0), s.U.removeClassName(this.node, "fixed"), this.node.style.top = 0), this._nodeWrap.scrollWidth <= this._nodeWrap.offsetWidth ? $(this._nodeWrap).siblings(".nav-arrow").addClass("hidden") : this._scrollWrapEvent({
                        target: this._nodeWrap
                    })
                },
                _scrollCheck: function() {
                    const e = !!$(this.node).find(".tab.active").length && $(this.node).find(".tab.active")[0];
                    if (!e) return;
                    const t = e.getBoundingClientRect().left,
                        i = e.getBoundingClientRect().right,
                        n = $(this._nodeWrap).siblings(".nav-arrow.left")[0].getBoundingClientRect().right,
                        o = $(this._nodeWrap).siblings(".nav-arrow.right")[0].getBoundingClientRect().left,
                        a = n - t,
                        s = i - o,
                        r = a > 0 ? -a : s > 0 ? s : 0,
                        l = Math.min(this._getMaxScroll(), this._nodeWrap.scrollLeft + r);
                    (n > 0 || o > 0) && $(this._nodeWrap).animate({
                        scrollLeft: l
                    }, $(this.node).hasClass("webview") ? 0 : 200)
                },
                _scrollWrapEvent: l()((e => {
                    const t = $(e.target).siblings(".nav-arrow.left"),
                        i = $(e.target).siblings(".nav-arrow.right");
                    e.target.scrollLeft < 1 ? t.addClass("hidden") : t.removeClass("hidden"), Math.ceil(e.target.scrollLeft) >= e.target.scrollWidth - e.target.clientWidth ? i.addClass("hidden") : i.removeClass("hidden")
                }), 100),
                append: function(e) {
                    this.node.append(e), this.render()
                },
                render: function() {
                    const e = this._nodeWrap ? this._nodeWrap.scrollLeft : 0;
                    s.U.clearNode(this.node), $(this._nodeWrap).children().tooltip("destroy"), s.U.clearNode(this._nodeWrap), this._nodeWrap.append(this.node), this.tabNodes = [];
                    for (const e in this.items) {
                        const t = this.items[e],
                            i = [],
                            n = [t.caption];
                        t.isActive && i.push("active"), t.isDisabled && i.push("disabled"), t.isHidden && i.push("pf-d-none"), t.badge && n.push(t.badge);
                        const o = tag("li", {
                            className: "tab " + i.join(" "),
                            id: t.customId ? "tab-" + t.customId : "",
                            attr: t.dataTestTag ? {
                                "data-test": t.dataTestTag
                            } : {}
                        }, [tag("a", {
                            href: t.href
                        }, [t.icon ? tag("span", "", [t.icon]) : "", tag("span", "", n), t.subtitle ? tag("span", "", [t.subtitle]) : ""])]);
                        if (o.ontouchmove = this.onScroll.bind(this), o.onclick = this._nodeOnClick.bind(this, o, t), o._tabItem = t, t.tooltipTitle) {
                            o.title = t.tooltipTitle;
                            const e = '\n                        <div class="tooltip pf-mx-24 pf-mx-sm-0">\n                            <div class="tooltip-arrow"></div>\n                            <div class="tooltip-inner"></div>\n                        </div>\n                    ',
                                i = {
                                    html: !0,
                                    trigger: "hover",
                                    placement: t.tooltipPlacement,
                                    animate: !0,
                                    delay: 0,
                                    container: "body",
                                    template: e
                                };
                            t.tooltipAutoShowDuration && (i.trigger = "manual"), $(o).tooltip(i), t.tooltipAutoShowDuration && (setTimeout((() => {
                                $(o).tooltip("show")
                            }), 1500), setTimeout((() => {
                                $(o).tooltip("hide")
                            }), t.tooltipAutoShowDuration))
                        }
                        this.tabNodes.push(o), o.append(this._nodeWrap)
                    }
                    const t = tag("span", "nav-arrow left hidden", [tag("i", "pf-i pf-i-chevron-left pf-i-24")]);
                    t.onclick = this._scrollLeft.bind(this), t.append(this.node);
                    const i = tag("span", "nav-arrow right hidden", [tag("i", "pf-i pf-i-chevron-right pf-i-24")]);
                    i.onclick = this._scrollRight.bind(this), i.append(this.node), this._nodeWrap.scrollLeft = e, this._resizeTabCheck(), this._scrollCheck()
                },
                _scrollLeft: function() {
                    const e = $(this._nodeWrap);
                    e.children().tooltip("hide"), e.animate({
                        scrollLeft: Math.max(0, this._nodeWrap.scrollLeft - this._getScrollStep())
                    }, 300)
                },
                _scrollRight: function() {
                    const e = $(this._nodeWrap);
                    e.children().tooltip("hide"), e.animate({
                        scrollLeft: Math.min(this._getMaxScroll(), this._nodeWrap.scrollLeft + this._getScrollStep())
                    }, 300)
                },
                _getScrollStep: function() {
                    return this._nodeWrap.clientWidth / 3
                },
                _getMaxScroll: function() {
                    return this._nodeWrap.scrollWidth - this._nodeWrap.clientWidth
                },
                onScroll: function() {
                    $(this._nodeWrap).children().tooltip("hide")
                },
                _nodeOnClick: function(e, t) {
                    if ($(this._nodeWrap).children().tooltip("hide"), t.isDisabled || (this.markTabAsSelected(t), t.showTooltipOnClick && (setTimeout((() => $(e).tooltip("show")), 500), this.hideTooltip($(e)))), this._fixed && this._nodeHolder && "none" !== window.getComputedStyle(this._nodeHolder).display && Math.abs(parseInt(this.node.style.top)) > 0) {
                        const e = this._nodeHolder.offsetTop - Math.abs(parseInt(this._nodeHolder.style.marginTop)) - Math.abs(parseInt(this.node.style.top));
                        $("html, body").animate({
                            scrollTop: e
                        }, 300)
                    }
                    return this._scrollCheck(), !t.onclick || t.onclick()
                },
                hideTooltip: l()((e => {
                    e.tooltip("hide")
                }), 5e3),
                markTabAsSelected: function(e) {
                    for (const e in this.items) this.items[e].isActive = !1, s.U.removeClassName(this.tabNodes[e], "active");
                    e && (e.isActive = !0, s.U.addClassName(this._getTabNodeFromTabItem(e), "active"))
                },
                hideTabById: function(e) {
                    for (const t in this.items) {
                        const i = this.items[t];
                        if (i.customId === e) {
                            this.hideTab(i);
                            break
                        }
                    }
                },
                hideTab: function(e) {
                    e.isHidden = !0
                },
                markTabAsSelectedById: function(e) {
                    for (const t in this.items) {
                        const i = this.items[t];
                        if (i.customId === e) return void this.markTabAsSelected(i)
                    }
                },
                _getTabNodeFromTabItem: function(e) {
                    for (const t in this.tabNodes) {
                        const i = this.tabNodes[t];
                        if (i._tabItem.uniqueId === e.uniqueId) return i
                    }
                    return null
                },
                add: function(e) {
                    const t = new a.t;
                    return s.U.O2O(t, e), this.items.push(t), this.render(), this
                },
                clear: function() {
                    this.items = [], this.render()
                },
                setActiveTab: function(e) {
                    for (const t in this.tabNodes) {
                        if (this.tabNodes[t]._tabItem.uniqueId === e.uniqueId) return void this._nodeOnClick(this.tabNodes[t], e)
                    }
                },
                getTabById: function(e) {
                    for (const t in this.items)
                        if (this.items[t].customId === e) return this.items[t];
                    return null
                },
                getActiveTab: function() {
                    for (const e in this.items)
                        if (this.items.hasOwnProperty(e) && this.items[e].isActive) return this.items[e];
                    return null
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFComponentsTabs = d)
        },
        9730: (e, t, i) => {
            "use strict";
            i.d(t, {
                t: () => n
            });
            const n = function() {
                this.uniqueId = ++n.counter
            };
            n.prototype.uniqueId = 0, n.prototype.customId = null, n.prototype.icon = "", n.prototype.badge = "", n.prototype.caption = "", n.prototype.subtitle = "", n.prototype.onclick = null, n.prototype.href = "javascript:", n.prototype.isActive = !1, n.prototype.isDisabled = !1, n.prototype.isHidden = !1, n.counter = 0, n.prototype.tooltipTitle = null, n.prototype.tooltipAutoShowDuration = null, n.prototype.tooltipPlacement = "top", n.prototype.showTooltipOnClick = !1, n.prototype.dataTestTag = "", window && ((globalThis || {}).PFComponentsTabsItem = n)
        },
        17570: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => r
            });
            var n = i(20833),
                o = i(9651),
                a = i(47586);
            const s = Class({
                __construct: function(e) {
                    var t = {
                        title: "Sign in",
                        bodyContent: "You need to sign in to perform this action.",
                        signInText: "Sign in",
                        signUpText: "Sign up",
                        signUpCallback: function() {
                            return !0
                        },
                        showFooterContent: !0,
                        pullLeftFooter: !1,
                        extraButtons: !1,
                        onClose: function() {
                            ga("send", "event", "Sign up to continue pop-up", "Exit clicked", window.location.pathname)
                        }
                    };
                    o.U.O2O(t, e || {});
                    var i = new a.Z(t);
                    i.setContent((0, o.U)({
                        tag: "div",
                        els: [t.bodyContent]
                    }));
                    var n = this._getValidatedReturnUrl(t.returnUrl);
                    t.showFooterContent && i.setFooterContent((0, o.U)({
                        tag: "div",
                        els: [!!t.signInText && {
                            tag: "a",
                            className: "pf-btn pf-btn-secondary" + (t.pullLeftFooter ? " pull-left" : ""),
                            text: t.signInText,
                            href: "/auth/?returnUrl=" + encodeURIComponent(n)
                        }, !!t.signUpText && {
                            tag: "a",
                            className: "pf-btn pf-btn-primary" + (t.pullLeftFooter ? " pull-left" : ""),
                            text: t.signUpText,
                            href: "/auth/register/?returnUrl=" + encodeURIComponent(n),
                            onclick: t.signUpCallback
                        }, !!t.extraButtons && t.extraButtons]
                    })), i.show(), this._modal = i
                },
                _getValidatedReturnUrl: function(e) {
                    var t = new n.R(e || null);
                    return t.path + (t.query.toString() && "?" + t.query.toString())
                },
                getModalInstance: function() {
                    return this._modal
                }
            });
            window && ((globalThis || {}).PFComponentsLoginPopup = s);
            const r = Class({
                _bulletPoint: {
                    tag: "img",
                    src: "/static/images/icons/bullet-point-green.svg",
                    style: {
                        width: "17px",
                        height: "15px",
                        position: "absolute",
                        marginTop: "3px"
                    }
                },
                _headerContent: tag("div", "col-sm-12"),
                __construct: function(e) {
                    this._par = e || new r.Par;
                    var t = this._getSignUpContent(this._par.signUpContent),
                        i = this._getSignUpContent(this._par.signInContent),
                        n = this._par.returnUrl ? "?returnUrl=" + encodeURIComponent(this._par.returnUrl) : "",
                        a = langUrl("/auth/register") + n,
                        l = langUrl("/auth") + n,
                        d = window.location.pathname;
                    ga("send", "event", "Sign up to continue pop-up", "Banner appeared", d), null != this._par.signUpInHeader && (o.U.clearNode(this._headerContent), this._par.signUpInHeader.append(this._headerContent)), new s({
                        title: lang("Sign up with Printful to continue"),
                        bodyContent: tag("div", "sign-up-popup-container", [tag("div", "row", [this._headerContent, tag("div", "col-sm-6", [tag("div", {
                            className: "sign-up-popup-container__box sign-up-popup-container__box--thick",
                            prop: {
                                onclick: function() {
                                    ga("send", "event", "Sign up to continue pop-up", "Sign up clicked", d), window.location = a
                                }
                            }
                        }, [tag("div", "sign-up-popup-container__header", [tag("strong", null, lang("Sign up to Printful"))]), tag("div", "sign-up-popup-container__content", [tag("ul", "pf-p-0", [this._getContent(t, !0)]), tag("a", {
                            className: "pf-btn pf-btn-primary sign-up-popup-container__btn",
                            href: a
                        }, [lang("Sign up")])])])]), tag("div", "col-sm-6", [tag("div", {
                            className: "sign-up-popup-container__box",
                            prop: {
                                onclick: function() {
                                    ga("send", "event", "Sign up to continue pop-up", "Sign in clicked", d), window.location = l
                                }
                            }
                        }, [tag("div", "sign-up-popup-container__header", [lang("Already Printful user?")]), tag("div", "text-center sign-up-popup-container__content", [tag("p", "pf-p-0", this._getContent(i, !1)), tag("a", {
                            className: "pf-btn pf-btn-secondary sign-up-popup-container__btn",
                            href: l
                        }, [lang("Sign in")])])])])])]),
                        showFooterContent: !1
                    })
                },
                _getSignUpContent: function(e) {
                    return "string" == typeof e ? JSON.parse(e) : e
                },
                _getContent: function(e, t) {
                    var i = [];
                    for (var n in e) {
                        var o = e[n];
                        t ? i.push(this._getListElement(o)) : i.push(o)
                    }
                    return i
                },
                _getListElement: function(e) {
                    return {
                        tag: "li",
                        els: [this._bulletPoint, {
                            tag: "div",
                            els: [e]
                        }]
                    }
                }
            });
            r.Par = Class({
                returnUrl: "",
                signUpContent: null,
                signInContent: null,
                signUpInHeader: null
            }), window && ((globalThis || {}).PFComponentsSignUpPopup = r)
        },
        71943: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => s
            });
            const n = Class({
                _resourcesToLoad: null,
                _loadedJsFilesCount: null,
                _loadedJsFilesNeeded: null,
                _hasLoadError: null,
                addNeededResource: function(e, t) {
                    this._resourcesToLoad || (this._resourcesToLoad = []);
                    var i = [];
                    t && ("string" == typeof t && (t = [t]), t.forEach((function(e) {
                        i.push({
                            path: e
                        })
                    })));
                    var n = {
                        path: e,
                        childs: i
                    };
                    this._resourcesToLoad.push(n)
                },
                loadResources: function(e) {
                    this._resourcesToLoad && 0 !== this._resourcesToLoad.length || (console.log("AsyncJsLoader: no resources to load"), e && e(!0)), this._loadedJsFilesCount = 0, this._loadedJsFilesNeeded = 0, this._hasLoadError = !1, this._resourcesToLoad.forEach(function(t) {
                        this._loadJs(t, this._onMainResourceLoaded.bind(this, t, e), document.body)
                    }.bind(this))
                },
                _loadJs: function(e, t, i) {
                    if (e && e.path && !n.isResourceLoaded(e.path)) {
                        this._loadedJsFilesNeeded++;
                        var o = document.createElement("script");
                        o.src = e.path, o.onload = t.bind(null, !0), o.onerror = t.bind(null, !1), o.onreadystatechange = t.bind(null, !0), i.appendChild(o)
                    }
                },
                _onMainResourceLoaded: function(e, t, i) {
                    var o;
                    this._loadedJsFilesCount++, i ? n.LOADED_JS_FILES[e.path] = !0 : this._hasLoadError = !0, null !== (o = e.childs) && void 0 !== o && o.length ? e.childs.forEach(function(e) {
                        this._loadJs(e, this._onChildResourceLoaded.bind(this, e, t), document.body)
                    }.bind(this)) : this._loadedJsFilesCount === this._loadedJsFilesNeeded && t && t(!this._hasLoadError)
                },
                _onChildResourceLoaded: function(e, t, i) {
                    this._loadedJsFilesCount++, i ? n.LOADED_JS_FILES[e.path] = !0 : this._hasLoadError = !0, this._loadedJsFilesCount === this._loadedJsFilesNeeded && t && t(!this._hasLoadError)
                }
            });
            n.LOADED_JS_FILES = [], n.loadResourcesAsync = function(e, t, i) {
                var o = "string" == typeof e ? [e] : e,
                    a = "string" == typeof t ? [t] : t;
                if (o.every((function(e) {
                        return n.isResourceLoaded(e)
                    })) && a.every((function(e) {
                        return n.isResourceLoaded(e)
                    }))) i(!0);
                else if (o.length && o.length > 0) {
                    var s = new n;
                    o.forEach((function(e, i) {
                        var n = null;
                        i + 1 === o.length && (n = t), s.addNeededResource(e, n)
                    })), s.loadResources(i)
                } else console.log("AsyncJsLoader: no resources to load"), i(!0)
            }, n.isResourceLoaded = function(e) {
                return !!n.LOADED_JS_FILES[e]
            }, window && ((globalThis || {}).PFUtilsAsyncJsLoader = n);
            var o = i(9651),
                a = i(70418);
            const s = function e(t) {
                this.par = new e.Par, o.U.O2O(this.par, t || {}), this._enabled = !0, null !== this.par.node && this.initUploader(this.par.node)
            };
            s.prototype.initUploader = function(e) {
                $.blueimp.fileupload.prototype.options.processQueue.push({
                    action: "validateLayerCount",
                    validateAddingLayer: "@",
                    maxNumberOfFiles: "@",
                    disabled: "@disableValidation"
                }, {
                    action: "validateFileExtension",
                    acceptFileTypes: "@",
                    disabled: "@disableValidation"
                }, {
                    action: "validateFileSize",
                    maxFileSize: "@",
                    disabled: "@disableValidation"
                }, {
                    action: "validatePdfPages",
                    disabledPageValidation: "@disablePdfPageValidation",
                    disabled: "@disableValidation"
                }, {
                    action: "validateImageDimensions",
                    maxDimension: "@",
                    disabled: "@disableValidation"
                }, {
                    action: "validateImageTransparency",
                    enabled: "@enableTransparencyValidation"
                }), $.widget("blueimp.fileupload", $.blueimp.fileupload, {
                    processActions: {
                        validateLayerCount: function(e, t) {
                            if (t.disabled) return e;
                            var i = $.Deferred(),
                                n = e.files[e.index],
                                o = e.originalFiles.length;
                            return e.originalFiles.countError ? i.rejectWith(this, [e]) : (t.validateAddingLayer && !t.validateAddingLayer("file", o) ? (n.error = dlang("dashboard", "Max limit is {number} image layers. Please delete a layer if you want to add another one.").replace("{number}", t.maxNumberOfFiles()), e.originalFiles.countError = !0, e.files.error = !0, i.rejectWith(this, [e])) : i.resolveWith(this, [e]), i.promise())
                        },
                        validateFileExtension: function(e, t) {
                            if (t.disabled) return e;
                            var i = $.Deferred(),
                                n = e.files[e.index];
                            if (e.originalFiles.countError) return i.rejectWith(this, [e]);
                            if (!t.acceptFileTypes || t.acceptFileTypes.test(n.type) || t.acceptFileTypes.test(n.name)) i.resolveWith(this, [e]);
                            else {
                                const o = /(\|?[a-zA-Z0-9]+\|?)+/.exec(t.acceptFileTypes)[0].split("|");
                                n.error = dlang("generator", "Couldn't upload {filename} because we don't accept {extension}. Please try uploading again in {formats}.").replace("{filename}", n.name).replace("{extension}", /(?:\.([^.]+))?$/.exec(n.name)[1]).replace("{formats}", o.join(", ")), e.files.error = !0, i.rejectWith(this, [e])
                            }
                            return i.promise()
                        },
                        validateFileSize: function(e, t) {
                            if (t.disabled) return e;
                            var i = $.Deferred(),
                                n = e.files[e.index];
                            return e.originalFiles.countError ? i.rejectWith(this, [e]) : (n.size > t.maxFileSize ? (n.error = dlang("generator", "Couldn't upload {filename} because it exceeds our max size of {size}MB. Please try uploading a smaller file.").replace("{size}", Math.round(t.maxFileSize / 1024 / 1024)).replace("{filename}", n.name), e.files.error = !0, i.rejectWith(this, [e])) : i.resolveWith(this, [e]), i.promise())
                        },
                        validatePdfPages: function(e, t) {
                            if (t.disabled || t.disabledPageValidation) return e;
                            const i = $.Deferred(),
                                n = e.files[e.index];
                            if (["application/pdf", "application/postscript", "application/illustrator"].includes(n.type)) {
                                const t = new FileReader;
                                t.readAsBinaryString(n), t.onloadend = () => {
                                    var o;
                                    if ((null === (o = t.result.match(/\/Type[\s]*\/Page[^s]/g)) || void 0 === o ? void 0 : o.length) > 1) {
                                        const t = "application/pdf" === n.type ? dlang("generator", "Couldnâ€™t upload {filename} because it has more than 1 page. Format your PDF file so that it has a single page, then upload again.") : dlang("generator", "Couldn't upload {filename} because it has more than 1 artboard. Format your AI file so that it has a single artboard, then upload again.");
                                        return n.error = t.replace("{filename}", n.name), e.files.error = !0, i.rejectWith(this, [e])
                                    }
                                    i.resolveWith(this, [e])
                                }
                            } else i.resolveWith(this, [e]);
                            return i.promise()
                        },
                        validateImageDimensions: function(e, t) {
                            if (t.disabled) return e;
                            var i = $.Deferred(),
                                n = e.files[e.index];
                            if (e.originalFiles.countError) return i.rejectWith(this, [e]);
                            if (/(\.|\/)(jpe?g|png)$/i.test(n.name)) {
                                var o = new FileReader;
                                o.readAsDataURL(n), o.onload = function() {
                                    var a = new Image;
                                    a.onload = function() {
                                        var o = this.naturalWidth || this.width,
                                            a = this.naturalHeight || this.height;
                                        o > t.maxDimension || a > t.maxDimension ? (e.files.error = !0, n.error = dlang("generator", "Couldn't upload {filename} because it exceeds our max size of {maxDimension}x{maxDimension} px. Please use a smaller file.").replace("{filename}", n.name).replace(/{maxDimension}/g, t.maxDimension), i.rejectWith(this, [e])) : o + a === 0 ? (e.files.error = !0, n.error = dlang("generator", "Error uploading {filename}. Please try again on a different browser.").replace("{filename}", n.name), i.rejectWith(this, [e])) : i.resolveWith(this, [e])
                                    }, a.onerror = function() {
                                        e.files.error = !0, n.error = dlang("generator", "Error uploading {filename}. Please try a different file.").replace("{filename}", n.name), i.rejectWith(this, [e])
                                    }, a.src = o.result, this.preloadedImage = a
                                }.bind(this)
                            } else i.resolveWith(this, [e]);
                            return i.promise()
                        }.bind(this),
                        validateImageTransparency: function(e, t) {
                            if (!t.enabled || !PF.ASSETS_URL) return e;
                            var i = $.Deferred();
                            return e.originalFiles.countError ? i.rejectWith(this, [e]) : (n.loadResourcesAsync(PF.ASSETS_URL + "js/tf.min.js", PF.ASSETS_URL + "tensorflow/lib.tf.js", function(t) {
                                t ? this.checkTransparency(i, e) : i.rejectWith(this, [e])
                            }.bind(this)), i.promise())
                        }.bind(this)
                    }
                }), this.fileupload = $(e).fileupload({
                    url: this.par.uploadUrl || PF.Config.S3_UPLOAD_URL,
                    type: "POST",
                    dataType: "xml",
                    sequentialUploads: !0,
                    maxFileSize: this.par.maxUploadSize,
                    acceptFileTypes: this.par.allowedExtensionRegex,
                    dropZone: !!this.par.nodeDropZone && $(this.par.nodeDropZone),
                    disableValidation: this.par.disableValidation,
                    enableTransparencyValidation: this.par.enableTransparencyValidation,
                    disablePdfPageValidation: this.par.disablePdfPageValidation,
                    maxNumberOfFiles: this.par.getMaxFileLayerCount ? this.par.getMaxFileLayerCount : 5,
                    maxDimension: this.par.maxDimension,
                    validateAddingLayer: this.par.validateAddingLayer,
                    add: function(e, t) {
                        var i = $(this);
                        t.process((function() {
                            return i.fileupload("process", t)
                        }))
                    },
                    done: this.onDone.bind(this),
                    processfail: this.onProcessFail.bind(this),
                    stop: this.onProcessDone.bind(this),
                    start: this.onStart.bind(this),
                    progressall: this.onProgressAll.bind(this),
                    fail: this.onFail.bind(this)
                }), this.fileupload.bind("fileuploadsubmit", this.onSubmit.bind(this)), this.fileList = [], this.errorList = [], this.processedFiles = 0, this.fileupload.bind("fileuploadprocessfail", function(e, t) {
                    (t.originalFiles.countError && t.files[t.index].error || t.files[t.index].error) && this.errorList.push(t.files[t.index].error)
                }.bind(this)).bind("fileuploadprocessalways", function(e, t) {
                    this.processedFiles++, this.processedFiles >= t.originalFiles.length && (this.submitCallback = !0)
                }.bind(this)).bind("fileuploadprocessdone", function(e, t) {
                    this.fileList.push(t)
                }.bind(this)).bind("fileuploadprocessstop", function(e) {
                    this.submitCallback && (this.errorList.length > 0 ? (this.par.onFail(this.errorList.join("\n")), this.fileList = [], this.errorList = []) : this.par.onFileSelected(this.fileList[0]), this.par.autoUpload && (this.submit(), this.fileList = [], this.errorList = []), this.processedFiles = 0, this.submitCallback = !1)
                }.bind(this))
            }, s.prototype.submit = function() {
                this.errorList.length > 0 ? (this.par.onFail(this.errorList.join("\n")), this.fileList = [], this.errorList = []) : this.fileList.length > 0 && (this.fileList.forEach((function(e) {
                    e.process().done((function() {
                        e.submit()
                    }))
                })), this.fileList = [], this.errorList = [])
            }, s.prototype.onSubmit = function(e, t) {
                var i = t.files[0].name,
                    n = {};
                this.getUploadType(i), (0, a.r)(this.par.uploadDataUrl, {
                    uploadType: this.par.uploadType,
                    fileName: i
                }, (function(e) {
                    n = e
                }), {
                    async: !1
                }), t.temporaryFileId = n.temporaryFileId, t.temporaryFilePusherKey = n.temporaryFilePusherKey, delete n.temporaryFileId, delete n.temporaryFilePusherKey, t.formData = n, this.par.onSubmit && this.par.onSubmit(t)
            }, s.prototype.onDone = function(e, t) {
                if (t._response.result) {
                    var i = t._response.result.documentElement,
                        n = t.files[0],
                        o = {
                            temporaryFileId: t.temporaryFileId || 0,
                            file: {
                                type: n.type,
                                size: n.size,
                                filename: n.name
                            },
                            location: i.childNodes[0].textContent,
                            bucket: i.childNodes[1].textContent,
                            key: i.childNodes[2].textContent,
                            etag: i.childNodes[3].textContent.replace(/"/g, "")
                        };
                    o.extra = this.par.getUploadExtra(), n.transparency && (o.extra.transparency = n.transparency), (0, a.r)(this.par.uploadCallbackUrl, o, this.onUploadCallback.bind(this))
                } else this.onFail(e, t)
            }, s.prototype.onUploadCallback = function(e) {
                this.par.onDone(e)
            }, s.prototype.onProcessFail = function(e, t) {
                var i = lang("Something went wrong!");
                void 0 !== t.files[0].error && (i = t.files[0].error), this.par.onProcessFail(t.files[0].name, i)
            }, s.prototype.onProcessDone = function() {
                this.par.onProcessDone && this.par.onProcessDone()
            }, s.prototype.onStart = function(e, t) {
                this.par.onStart()
            }, s.prototype.onProgressAll = function(e, t) {
                if (t.total > 0) {
                    var i = Math.round(100 * t.loaded / t.total);
                    this.par.onProgress(i)
                }
            }, s.prototype.onFail = function(e, t) {
                var i = (t._response || t.response()).jqXHR;
                413 != i.status ? void 0 !== i.responseJSON ? this.par.onFail(i.responseJSON.message) : void 0 !== i.responseText && "" != i.responseText ? this.par.onFail(i.responseText) : this.par.onFail("Error happened") : this.onFail("Sorry, the maximum file size is 200Mb. Please resize the file and try uploading again.")
            }, s.prototype.isEnabled = function() {
                return this._enabled
            }, s.prototype.enable = function() {
                this.fileupload.fileupload("enable"), this._enabled = !0
            }, s.prototype.disable = function() {
                this.fileupload.fileupload("disable"), this._enabled = !1
            }, s.prototype.destroy = function() {
                $(this.par.node).fileupload("destroy")
            }, s.prototype.unbind = function() {
                this.fileupload.unbind()
            }, s.prototype.setUploadType = function(e) {
                this.par.uploadType = e
            }, s.prototype.checkTransparency = function(e, t) {
                /(\.|\/)(jpe?g|png)$/i.test(t.files[t.index].name) ? tensorTransparrency(this.preloadedImage, (function(i) {
                    i ? (i.prediction > 0 && (t.files[t.index].transparency = i), e.resolveWith(this, [t])) : e.rejectWith(this, [t])
                })) : e.resolveWith(this, [t])
            }, s.prototype.getUploadType = function(e) {
                if (this.par.dynamicUploadType) {
                    const t = e.toLowerCase().split(".").pop();
                    let i = null;
                    for (const e in this.par.dynamicUploadTypeMapping) this.par.dynamicUploadTypeMapping[e].includes(t) && (i = e);
                    if (!i) return !1;
                    this.setUploadType(i)
                }
                return !0
            }, s.Par = function() {}, s.Par.prototype.node = null, s.Par.prototype.nodeDropZone = null, s.Par.prototype.autoUpload = !0, s.Par.prototype.group = null, s.Par.prototype.uploadType = "temp", s.Par.prototype.dynamicUploadType = !1, s.Par.prototype.dynamicUploadTypeMapping = {}, s.Par.prototype.maxUploadSize = 209715200, s.Par.prototype.maxDimension = 2e4, s.Par.prototype.allowedExtensionRegex = /(\.|\/)(jpg|jpeg|png|psd|pdf|ai|tiff?)$/i, s.Par.prototype.uploadUrl = null, s.Par.prototype.validateAddingLayer = null, s.Par.prototype.getMaxFileLayerCount = null, s.Par.prototype.uploadCallbackUrl = null, s.Par.prototype.uploadDataUrl = null, s.Par.prototype.disableValidation = !1, s.Par.prototype.enableTransparencyValidation = !1, s.Par.prototype.disablePdfPageValidation = !1, s.Par.prototype.getUploadExtra = function() {
                return {}
            }, s.Par.prototype.onFail = function(e) {
                console.log("PFUploader:", "onFail", e)
            }, s.Par.prototype.onProcessFail = function(e, t) {
                console.log("PFUploader:", "onProcessFail", e, t)
            }, s.Par.prototype.onProcessDone = function() {
                console.log("PFUploader:", "onProcessDone")
            }, s.Par.prototype.onProgress = function(e) {
                console.log("PFUploader:", "onProgress", e, "%")
            }, s.Par.prototype.onStart = function() {
                console.log("PFUploader:", "onStart")
            }, s.Par.prototype.onDone = function(e) {
                console.log("PFUploader:", "onDone", e)
            }, s.Par.prototype.onFileSelected = function(e) {
                console.log("PFUploader:", "onFileSelected", e)
            }, s.Par.prototype.onSubmit = function(e) {
                console.log("PFUploader:", "onSubmit", e)
            }, window && ((globalThis || {}).PFUploader = s)
        },
        73042: (e, t, i) => {
            "use strict";
            i.d(t, {
                m: () => n
            });
            const n = {
                ORDER_UPDATE_URL: langUrl("/dashboard/order/update"),
                isOrderFlowInitialized: !1,
                instance: void 0,
                getActiveInstance: () => n.instance
            };
            (globalThis || {}).PFOrderFlowCommon = n
        },
        26750: (e, t, i) => {
            "use strict";
            i.d(t, {
                p: () => u
            });
            var n = i(75717),
                o = i(9651);
            const a = Class({
                headerDropDownTitle: "",
                headerDropDownPosition: 1,
                sidebarNavTitle: "",
                showNewSidebarSetAt: null,
                sidebarNavPosition: 1,
                thumbnailTitle: "",
                breadcrumbName: "",
                updateRegionProductsAutomatically: !1,
                productsRegion: ""
            });
            a.fromArray = function(e) {
                var t = new a;
                return o.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFProductsCatalogItemsCategorySettings = a);
            const s = Class({
                page: "",
                name: "",
                mainHeading: "",
                pageTitle: "",
                metaDescription: "",
                markupItemName: ""
            });
            s.fromArray = function(e) {
                var t = new s;
                return o.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFProductsCatalogItemsCategorySeoItem = s);
            var r = i(28289),
                l = i(20833),
                d = i(78009),
                c = i(11072);
            const u = Class({
                id: null,
                key: "",
                title: "",
                parentId: 0,
                slug: "",
                search: "",
                urlImage: "",
                children: [],
                tabs: [],
                seo: {},
                settings: null,
                thumbSize: 4,
                hiddenInCatalog: 0,
                hiddenInOrderFlow: 0,
                catalogPosition: 1,
                description: "",
                isActive: !1,
                isBeta: !1,
                isClone: !1,
                temporaryFileKey: "",
                textBlock: {
                    title: {
                        value: ""
                    },
                    columns: []
                },
                editShippingUrl: "",
                editGalleryUrl: "",
                isNew: !1,
                isNewSetAt: "",
                localizedSettings: {},
                getUrl: function(e) {
                    var t, i;
                    e || (e = d.CQ.urlPrefix);
                    var n = new l.R;
                    return n.path = e + (this.slug ? "/" + this.slug : ""), e !== (null === (t = d.dB.PRODUCT_CATALOG_INDEX_SLUG_CHANGES) || void 0 === t || null === (i = t[c.A.locale]) || void 0 === i ? void 0 : i.old) || this.slug || (n.path = d.dB.PRODUCT_CATALOG_INDEX_SLUG_CHANGES[c.A.locale].new), d.v2.marketingParams.forEach((e => {
                        n.query[e] && delete n.query[e]
                    })), n.toString()
                },
                getBreadcrumbName: function() {
                    return this.settings && "" !== this.settings.breadcrumbName ? this.settings.breadcrumbName : this.title
                },
                getSidebarTitle: function() {
                    return this.settings && this.settings.sidebarNavTitle ? this.settings.sidebarNavTitle : this.title
                },
                isEmbroideryShirts: function() {
                    return this.id === u.ID_EMBROIDERY_SHIRTS
                }
            });
            u.fromArray = function(e) {
                var t = new u;
                if (o.U.O2O(t, e), t.children = n.A.convertToArray(e.children).map(u.fromArray), e.tabs && (t.tabs = n.A.convertToArray(e.tabs).map(r.P.fromArray)), e.seo)
                    for (var i in e.seo)
                        for (var l in e.seo[i]) t.seo[i][l] = s.fromArray(e.seo[i][l]);
                return e.settings ? t.settings = a.fromArray(e.settings) : t.settings = new a, t
            }, u.ID_EMBROIDERY_SHIRTS = 85, u.ID_FACE_MASKS = 126, u.ID_FAKE_FAVORITES = -1, u.getTemporaryFavoritesCategory = function(e) {
                const t = new u;
                return t.id = u.ID_FAKE_FAVORITES, t.title = dlang("products", "Favorites"), t.slug = "favorites/products", t.isActive = !0, t.parentId = e, t.enableTitle = !1, t
            }, window && ((globalThis || {}).PFProductsCatalogItemsCategoryItem = u)
        },
        28289: (e, t, i) => {
            "use strict";
            i.d(t, {
                P: () => o
            });
            var n = i(9651);
            const o = Class({
                id: 0,
                name: "",
                type: "",
                mainHeader: "",
                pageTitle: "",
                metaDescription: "",
                position: 0,
                active: !1
            });
            o.fromArray = function(e) {
                var t = new o;
                return n.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFProductsCatalogItemsCategoryTabItem = o)
        },
        52307: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => r
            });
            var n = i(75717),
                o = i(26750),
                a = i(78009),
                s = i(87179);
            const r = Class({
                __construct() {
                    this._initConfigureStore(this)
                },
                _categories: [],
                getAll: function(e) {
                    return this._getSubCategories(e)
                },
                getAllWithInactive: function(e) {
                    return this._getSubCategories(e, !0)
                },
                getById: function(e, t, i) {
                    t || (t = r.cache[a.CQ.catalogType]), void 0 === i && (i = !0);
                    var n = this._findCategoryById(e, t);
                    if (n || !i) return n;
                    for (var o in t) {
                        var s = this.getById(e, t[o].children);
                        if (s) {
                            n = s;
                            break
                        }
                    }
                    return n
                },
                getPath: function(e) {
                    void 0 === e && (e = this.getActiveCategoryId());
                    var t = [],
                        i = this.getById(e);
                    if (!i) return [];
                    for (t.push(i); i.parentId && (i = this.getById(i.parentId));) t.push(i);
                    return t.reverse()
                },
                getTopLevelCategory: function() {
                    var e = this.getPath();
                    return e.length ? e[0] : this.getActiveCategory()
                },
                setActiveCategoryId: function(e) {
                    r.activeCategoryId = e
                },
                getActiveCategoryId: function() {
                    return r.activeCategoryId
                },
                getActiveCategory: function() {
                    return -1 === this.getActiveCategoryId() ? o.p.getTemporaryFavoritesCategory() : this.getById(this.getActiveCategoryId())
                },
                getCategoryChildIds: function(e) {
                    var t = [e.id];
                    for (var i in e.children) t.push(e.children[i].id);
                    return t
                },
                cache: function(e) {
                    "Array" != typeof e && (e = n.A.convertToArray(e)), r.cache[a.CQ.catalogType] = e.map(this._getCategoryItem)
                },
                _getSubCategories: function(e, t, i) {
                    const n = r.cache[a.CQ.catalogType];
                    if (!n.length) return console.log("Categories not found"), [];
                    e || (e = 0);
                    let o = i && i.length ? i : n;
                    return o = o.filter(this._filterCategoryByParentId.bind(this, e)), t || (o = o.filter(this._filterActiveCategory.bind(this))), o.length || (!i && n && (i = n), i.map(function(i) {
                        o = o.concat(this._getSubCategories(e, t, i.children))
                    }.bind(this))), o
                },
                _findCategoryById: function(e, t) {
                    return (null == t ? void 0 : t.find((t => t.id === e))) || null
                },
                _filterCategoryByParentId: function(e, t) {
                    return t.parentId === e
                },
                _filterActiveCategory: function(e) {
                    return e.isActive
                },
                _getCategoryItem: function(e) {
                    return o.p.fromArray(e)
                },
                _initConfigureStore() {
                    if (r._storeInitCallbackExecuted) return;
                    r._storeInitCallbackExecuted = !0;
                    const e = s.n.getCategoriesStoreInitCallback();
                    e && e(this)
                }
            });
            r.cache = {}, r.activeCategoryId = 0, r._storeInitCallbackExecuted = !1, window && ((globalThis || {}).PFProductsCatalogUtilsStoreCategories = r)
        },
        55558: (e, t, i) => {
            "use strict";
            i.d(t, {
                W: () => a
            });
            var n = i(4473),
                o = i(9651);
            const a = Class({
                _containerNode: null,
                _tableNode: null,
                _loadMoreNode: null,
                _sizeCheckboxNodes: [],
                _selectedSizes: [],
                _visibleColors: [],
                _productData: null,
                _regions: [],
                _oneSize: dlang("products", "One Size"),
                _oneColor: dlang("products", "One Color"),
                _colorCount: 20,
                _inStockLabel: dlang("products", "In Stock"),
                _onDemandLabel: dlang("products", "Stocked on Demand"),
                _supplierOutOfStockLabel: dlang("products", "Supplier out of stock"),
                _discontinuedLabel: dlang("products", "Discontinued"),
                initAndGetContainerNode: function(e) {
                    this._productData = e, this._selectedSizes = this._getAvailableSizes().slice(), this._visibleColors = this._sortColorsByAvailability(this._getAvailableColors()).slice(0, this._colorCount), this._containerNode = this._getContainerNode();
                    var t = this._onWindowResized;
                    return $(window).on("load resize", (function() {
                        t()
                    })), document.addEventListener("scroll", (function(e) {
                        $(e.target).hasClass("color-availability") && t()
                    }), !0), this._containerNode
                },
                _getContainerNode: function() {
                    this._regions = this._getRegions();
                    var e = this._getLegendText(),
                        t = this._getLegendColors(),
                        i = this._getFilters();
                    this._tableNode = this._getTableNode();
                    var n = [];
                    return this._visibleColors.length < this._getAvailableColors().length && (this._loadMoreNode = this._getLoadMoreNode(), n.push(this._loadMoreNode)), tag("div", "availability", [e, t, i, this._tableNode, n])
                },
                _getSizeTranslations() {
                    const e = [],
                        t = this._selectedSizes.length;
                    let i = 0;
                    for (const n in this._productData.variants) {
                        const {
                            size: o,
                            translatedSize: a
                        } = this._productData.variants[n];
                        if (!(o in e) && (e[o] = a, i++, t === i)) break
                    }
                    return e
                },
                _getTableNode: function() {
                    var e = this._visibleColors,
                        t = this._selectedSizes;
                    const i = this._getSizeTranslations();
                    var n = this,
                        o = [],
                        a = [],
                        s = [];
                    t.forEach(function(e) {
                        var t;
                        s.push({
                            tag: "div",
                            text: this._productData.product.isPhoneCase() ? this._getVariantDisplayName(e) : null !== (t = null == i ? void 0 : i[e]) && void 0 !== t ? t : e,
                            className: "region-size-header"
                        })
                    }.bind(this)), this._regions.forEach((function(e) {
                        1 === e.display && o.push({
                            tag: "div",
                            className: "region",
                            abbreviation: e.abbreviation,
                            regionName: e.regionName,
                            els: [{
                                tag: "div",
                                text: e.regionNameTranslated,
                                className: "region-name"
                            }, {
                                tag: "div",
                                className: "region-size-headers",
                                els: s
                            }]
                        })
                    })), e.forEach((function(e) {
                        var i = {};
                        i = e.colorCode2 ? tag("div", "color-preview-multi-color", [tag("div", {
                            style: {
                                backgroundColor: e.colorCode
                            }
                        }), tag("div", {
                            style: {
                                backgroundColor: e.colorCode2
                            }
                        })]) : tag("div", {
                            className: "color-preview",
                            style: {
                                backgroundColor: e.colorCode
                            }
                        }), a.push(tag("div", {
                            className: "color-option",
                            text: e.colorName
                        }, [i])), o.forEach((function(i) {
                            var o = [];
                            t.forEach((function(t) {
                                var a = n._findVariantByColorAndSize(e, t),
                                    s = n._getClassNameForVariant(a, i),
                                    r = tag("div", "region-color-size-availability " + s);
                                $(r).tooltip({
                                    html: !0,
                                    placement: "top",
                                    title: n._getTooltipByClassName(s, a),
                                    container: ".availability"
                                }), o.push(r)
                            }));
                            var a = tag("div", "region-color-row", o);
                            i.els.push(a)
                        }))
                    }));
                    var r = tag("div", "color-column", [this._scrollLeft = tag("div", {
                        className: "scroll-left hide-scroll-arrows",
                        onclick: this._scrollTableLeft
                    }), tag("div", "color-name-header", clang("noun", "Color")), a]);
                    return this._colorAvailability = tag("div", "color-availability", o), this._scrollRight = tag("div", {
                        className: "scroll-right hide-scroll-arrows",
                        onclick: this._scrollTableRight
                    }), tag("div", "stock-availability-table", [this._colorDivNode = r, this._colorAvailability, this._scrollRight])
                },
                _getTooltipByClassName: function(e, t) {
                    return e === a.AVAILABILITY_IN_STOCK ? this._inStockLabel : e === a.AVAILABILITY_ON_DEMAND ? this._onDemandLabel : e === a.AVAILABILITY_SUPPLIER_OUT_OF_STOCK ? this._supplierOutOfStockLabel : e === a.AVAILABILITY_DISCONTINUED ? this._discontinuedLabel : e === a.AVAILABILITY_FULLFILLED_ONLY_IN_ONE_COUNTRY ? this._getAvailableInDifferentCountryTooltip(t) : void 0
                },
                _getAvailableInDifferentCountryTooltip: function(e) {
                    if (!this._getWhereVariantIsAvailable(e)) return this._supplierOutOfStockLabel;
                    var t = this._getWhereVariantIsAvailable(e);
                    return dlang("products", "Fulfilled in {country}. Ships to locations worldwide.").replace("{country}", t.regionNameTranslated)
                },
                _scrollTable: function(e) {
                    var t = "left" === e ? -1 : 1,
                        i = $(".region-color-size-availability").width() + 2,
                        n = $(this._colorAvailability).prop("scrollLeft"),
                        o = this;
                    $(this._colorAvailability).animate({
                        scrollLeft: n + t * i + "px"
                    }, "fast", (function() {
                        o.adjustScrollButtons()
                    }))
                },
                adjustScrollButtons: function() {
                    var e = $(this._colorAvailability).prop("clientWidth"),
                        t = $(this._colorAvailability).prop("scrollWidth"),
                        i = $(this._colorAvailability).prop("scrollLeft");
                    t > e ? (0 !== i ? o.U.addClassName(this._colorDivNode, "has-shadow") : (o.U.removeClassName(this._colorDivNode, "has-shadow"), o.U.addClassName(this._scrollLeft, "hide-scroll-arrows")), o.U.removeClassName(this._scrollLeft, "hide-scroll-arrows"), o.U.removeClassName(this._scrollRight, "hide-scroll-arrows"), o.U.addClassName(this._colorAvailability, "wide-table"), i + e >= t && o.U.addClassName(this._scrollRight, "hide-scroll-arrows"), 0 === i && o.U.addClassName(this._scrollLeft, "hide-scroll-arrows")) : (o.U.addClassName(this._scrollLeft, "hide-scroll-arrows"), o.U.addClassName(this._scrollRight, "hide-scroll-arrows"), o.U.removeClassName(this._colorDivNode, "has-shadow"), o.U.removeClassName(this._colorAvailability, "wide-table"))
                },
                _scrollTableLeft: function() {
                    this._scrollTable("left")
                },
                _scrollTableRight: function() {
                    this._scrollTable("right")
                },
                _getLoadMoreNode: function() {
                    return tag("div", {
                        className: "col-12 col-lg-11 col-xl-8 text-center",
                        onclick: this._onLoadMoreClicked
                    }, [tag("button", "pf-btn pf-btn-secondary pf-mt-32", lang("Load more"))])
                },
                _getLegendText: function() {
                    return tag("div", "row", [tag("div", "col-md-9 availability-legend-text", [dlang("products", "Make sure your product variants are always in stock by checking their availability. There's always stock in our warehouses for the most popular colors and sizes, but others are ordered on demand. Restocking time is included in our estimated delivery times. If a product variant is not available from our supplier, it'll show up here as \"Supplier out of stock\".")])])
                },
                _getLegendColors: function() {
                    var e = [],
                        t = [],
                        i = this._getLegendsToShow();
                    if (i.availableInDifferentCountry) {
                        var n = i.countriesToDisplay.join(" " + lang("or") + " "),
                            o = dlang("products", "Fulfilled only in {countries}.").replace("{countries}", n);
                        t = tag("div", "availability-legend", [tag("div", "availability-legend-color fulfilledOnlyInOneCountry availability-out-of-stock-background"), tag("div", "availability-legend-color-label", o)])
                    }
                    return i.discontinued && (e = tag("div", "availability-legend", [tag("div", "availability-legend-color discontinued availability-out-of-stock-background"), tag("div", "availability-legend-color-label", this._discontinuedLabel)])), tag("div", "pf-my-24", [tag("div", "availability-legend", [tag("div", "availability-legend-color availability-in-stock-background"), tag("div", "availability-legend-color-label", this._inStockLabel)]), tag("div", "availability-legend", [tag("div", "availability-legend-color availability-on-demand-background"), tag("div", "availability-legend-color-label", this._onDemandLabel)]), tag("div", "availability-legend", [tag("div", "availability-legend-color availability-out-of-stock-background"), tag("div", "availability-legend-color-label", this._supplierOutOfStockLabel)]), e, t])
                },
                _getFilters: function() {
                    var e = this._getAvailableSizes(),
                        t = [];
                    return e.length <= 1 ? {
                        tag: "div"
                    } : (e.forEach((function(e, i) {
                        var n = tag("input", {
                            type: "checkbox",
                            attr: {
                                id: "size-checkbox-" + i,
                                checked: !0
                            },
                            data: {
                                size: e
                            },
                            onclick: this._onSizeClicked
                        });
                        this._sizeCheckboxNodes.push(n);
                        var o = tag("label", {
                            className: "noselect pf-mr-32",
                            style: {
                                display: "inline-block",
                                cursor: "pointer",
                                height: "16px"
                            },
                            attr: {
                                for: "size-checkbox-" + i
                            }
                        }, [tag("div", "fake-checkbox"), tag("span", {
                            style: {
                                fontWeight: "normal",
                                fontSize: "15px",
                                display: "inline-block",
                                position: "relative",
                                top: "1px",
                                left: "5px"
                            },
                            text: e
                        })]);
                        t.push(tag("div", "size-selector", [n, o]))
                    }), this), tag("div", "pf-mb-24", [tag("div", "pf-mt-24 availability-about-sizes", dlang("products", "Filter by size") + ":"), t]))
                },
                _getRegions: function() {
                    const e = this._productData.availabilityTabRegions.regionsMap,
                        t = this._productData.availabilityTabRegions.regionsMapTranslated;
                    return Object.keys(e).map((i => {
                        var n;
                        const o = e[i];
                        let s = null !== (n = null == t ? void 0 : t[i]) && void 0 !== n ? n : o;
                        return i === a.REGION_US && this._productData.availabilityTabRegions.isUsRegionContainsMxBranches && (s = [dclang("products", "country", "US"), lang("Mexico")].join(" / ")), {
                            name: o,
                            abbreviation: i,
                            regionName: o,
                            regionNameTranslated: s,
                            display: 0
                        }
                    }))
                },
                _getClassNameForVariant: function(e, t) {
                    if (this._productData.product.isTemporaryOutOfStock) return a.AVAILABILITY_SUPPLIER_OUT_OF_STOCK;
                    if (!e) return a.AVAILABILITY_DISCONTINUED;
                    if (-1 === this._productData.availabilityTabRegions.variantsByRegion[t.regionName].indexOf(e.variantId)) return this._getWhereVariantIsAvailable(e) ? a.AVAILABILITY_FULLFILLED_ONLY_IN_ONE_COUNTRY : a.AVAILABILITY_SUPPLIER_OUT_OF_STOCK;
                    const i = e.availability;
                    return i ? i[t.abbreviation] : ""
                },
                _getWhereVariantIsAvailable: function(e) {
                    for (let t = 0; t < this._regions.length; t++) {
                        let i = this._regions[t];
                        if (-1 !== this._productData.availabilityTabRegions.variantsByRegion[i.regionName].indexOf(e.variantId)) return i
                    }
                    return !1
                },
                _onSizeClicked: function() {
                    var e = [];
                    if (this._sizeCheckboxNodes.forEach((function(t) {
                            if (t.checked) {
                                var i = t.dataset.size;
                                e.push(i)
                            }
                        })), !e.length && this._sizeCheckboxNodes.length) {
                        var t = this._sizeCheckboxNodes[0];
                        return t.click(), void(t.checked = !0)
                    }
                    this._selectedSizes = e, this._visibleColors = this._sortColorsByAvailability(this._visibleColors), this._refreshTableNode()
                },
                _onLoadMoreClicked: function() {
                    var e = this._visibleColors.length,
                        t = this._getAvailableColors().length,
                        i = t - e,
                        n = i >= this._colorCount ? this._colorCount : i;
                    this._visibleColors = this._sortColorsByAvailability(this._getAvailableColors()).slice(0, e + n), this._refreshTableNode(), e + n === t && o.U.clearNode(this._loadMoreNode)
                },
                _onWindowResized: function() {
                    this.adjustScrollButtons()
                },
                _refreshTableNode: function() {
                    var e = this._getTableNode();
                    $(this._tableNode).replaceWith(e), this._tableNode = e, this.adjustScrollButtons()
                },
                _sortColorsByAvailability: function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        var i = 0,
                            n = 0;
                        this._getRegions().forEach((function(t) {
                            this._selectedSizes.forEach((function(o) {
                                var s = this._findVariantByColorAndSize(e, o);
                                if (!s) return !0;
                                var r = s.availability;
                                if (!r) return !0;
                                var l = r[t.abbreviation];
                                l === a.AVAILABILITY_IN_STOCK && i++, l === a.AVAILABILITY_ON_DEMAND && n++
                            }), this)
                        }), this), t.push({
                            color: e,
                            colorName: e.colorName,
                            inStockCount: i,
                            onDemandCount: n
                        })
                    }), this), t.sort((function(e, t) {
                        return t.inStockCount - e.inStockCount || t.onDemandCount - e.onDemandCount || t.colorName < e.colorName
                    })).map((function(e) {
                        return e.color
                    }))
                },
                _getAvailableSizes: function() {
                    var e = this._productData.product.sizes;
                    return e.length || (e = [this._oneSize]), e
                },
                _getVariantDisplayName: function(e) {
                    return e.replace(/iPhone\s|Samsung\s/g, "").split("/").join(" / ")
                },
                _getAvailableColors: function() {
                    var e = this._productData.product.colors;
                    if (e.length) return e;
                    var t = new n.W.ColorPair;
                    return t.colorCode = null, t.colorCode2 = null, t.colorName = this._oneColor, [t]
                },
                _getLegendsToShow: function() {
                    const e = {
                        countriesToDisplay: [],
                        discontinued: null,
                        availableInDifferentCountry: null
                    };
                    return this._regions.forEach(((t, i) => {
                        const n = [];
                        let o = !1;
                        this._visibleColors.forEach((s => {
                            this._getAvailableSizes().forEach((r => {
                                const l = this._findVariantByColorAndSize(s, r),
                                    d = this._getClassNameForVariant(l, t);
                                if (d === a.AVAILABILITY_DISCONTINUED && (e.discontinued = 1), d !== a.AVAILABILITY_FULLFILLED_ONLY_IN_ONE_COUNTRY && d !== a.AVAILABILITY_DISCONTINUED && (this._regions[i].display = 1), d === a.AVAILABILITY_FULLFILLED_ONLY_IN_ONE_COUNTRY) {
                                    o = !0;
                                    const e = this._getWhereVariantIsAvailable(l);
                                    if (e) {
                                        const t = e.regionNameTranslated || e.regionName;
                                        n.push(t)
                                    }
                                }
                            }))
                        })), o && 1 === this._regions[i].display && (e.countriesToDisplay = e.countriesToDisplay.concat(n), e.availableInDifferentCountry = 1)
                    })), e.countriesToDisplay = e.countriesToDisplay.filter(((t, i) => e.countriesToDisplay.indexOf(t) === i)), e
                },
                _findVariantByColorAndSize: function(e, t) {
                    const i = this._productData.variants,
                        n = e.colorName === this._oneColor,
                        o = t === this._oneSize;
                    let a = this._findFirstInArray(i, (i => i.translatedSize === t && i.color === e.colorName));
                    return !a && n && (a = this._findFirstInArray(i, (e => e.translatedSize === t && null === e.color))), !a && o && (a = this._findFirstInArray(i, (t => !t.translatedSize && !t.size && t.color === e.colorName))), !a && n && o && (a = this._findFirstInArray(i, (e => !e.translatedSize && !e.size && null === e.color))), a
                },
                _findFirstInArray: function(e, t) {
                    var i;
                    for (i = 0; i < e.length; ++i)
                        if (t(e[i], i)) return e[i]
                }
            });
            a.AVAILABILITY_FULLFILLED_ONLY_IN_ONE_COUNTRY = "fulfilledOnlyInOneCountry", a.AVAILABILITY_SUPPLIER_OUT_OF_STOCK = "supplierOutOfStock", a.AVAILABILITY_DISCONTINUED = "discontinued", a.AVAILABILITY_ON_DEMAND = "onDemand", a.AVAILABILITY_IN_STOCK = "inStock", a.REGION_US = "US", (globalThis || {}).PFProductsPricingAvailability = a
        },
        71155: (e, t, i) => {
            "use strict";
            i.d(t, {
                N: () => o
            });
            var n = i(9651);
            const o = function(e) {
                if (e && !e._autoResize) {
                    var t = function(e, t) {
                        return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null)[t] : e.currentStyle ? e.currentStyle[t] : e.style[t]
                    };
                    e._autoResize = !0;
                    var i, o = (0, n.U)({
                        tag: "div",
                        els: [i = (0, n.U)({
                            tag: "div",
                            style: {
                                position: "absolute",
                                wordWrap: "break-word",
                                visibility: "hidden",
                                fontSize: t(e, "fontSize"),
                                maxHeight: t(e, "maxHeight")
                            }
                        })]
                    });
                    try {
                        i.style.whiteSpace = "pre-wrap"
                    } catch (e) {}
                    e.style.overflow = "hidden",
                        function(e, t) {
                            if (t.nextSibling) {
                                var i = t.nextSibling;
                                i.parentNode.insertBefore(e, i)
                            } else t.parentNode.appendChild(e)
                        }(o, e), o.appendChild(e);
                    var a, s = $(e),
                        r = function(n) {
                            ["lineHeight", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom"].forEach((function(n) {
                                i.style[n] = t(e, n)
                            }));
                            var a = parseInt(i.style.maxHeight);
                            a || (i.style.maxHeight = t(e, "maxHeight"), a = parseInt(i.style.maxHeight));
                            var s, r = t(e, "position");
                            r && "static" != r || (r = "relative", e.style.position = "relative"), o.style.position = r, i.style.width = e.offsetWidth + "px", i._offsetHeight = i.offsetHeight, i.innerHTML = (s = e.value || e.placeholder, String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") + (n ? "\n" : "") + "_"), i._offsetHeight != i.offsetHeight && (e.style.overflow = a == i.offsetHeight ? "" : "hidden"), i.offsetHeight && (i.style.minHeight || (i.style.minHeight = e.offsetHeight + "px"), e.style.height = i.offsetHeight + "px")
                        };
                    r();
                    var l = 0;
                    s.on("keydown", (function(e) {
                        10 != e.keyCode && 13 != e.keyCode || r(!0)
                    })), s.on("keyup paste", (function(e) {
                        if (clearTimeout(a), 10 == ++l || 10 == e.keyCode || 13 == e.keyCode || 8 == e.keyCode || 46 == e.keyCode) return l = 0, void r();
                        a = setTimeout(r, 150)
                    }));
                    var d = setInterval((function() {
                        i.offsetHeight && (clearInterval(d), r())
                    }), 100)
                }
            };
            (globalThis || {}).PFUtilsTextareaAutoHeight = o
        },
        44416: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => s
            });
            var n = i(9651),
                o = i(12010),
                a = i(55558);
            const s = Class({
                _afterShow: null,
                nodeError: null,
                _isVisible: !1,
                _disabledRegionValueVariants: {},
                regionData: {},
                currentDisabledVariants: [],
                updateErrorStatus: function(e) {
                    return e && (this.nodeError.innerText = e), !(this.nodeError && !n.U.hasClassName(this.node, "hidden")) || (this.isValuePicked() ? (n.U.addClassName(this.nodeError, "hidden"), !0) : (n.U.removeClassName(this.nodeError, "hidden"), !1))
                },
                hideError: function() {
                    n.U.addClassName(this.nodeError, "hidden")
                },
                showError: function() {
                    n.U.removeClassName(this.nodeError, "hidden")
                },
                hasAtLeastOneValue: function() {
                    return !0
                },
                isValuePicked: function() {},
                getValueCount: function() {},
                showPicker: function() {
                    n.U.removeClassName(this.node, "hidden"), n.U.addClassName(this.node, "picker-animation--hidden"), this._isVisible = !0, setTimeout(function() {
                        n.U.addClassName(this.node, "picker-animation"), n.U.removeClassName(this.node, "picker-animation--hidden")
                    }.bind(this), 10), setTimeout(this._afterShow, 400)
                },
                hidePicker: function() {
                    this._isVisible = !1, n.U.addClassName(this.node, "hidden")
                },
                isVisible: function() {
                    return this._isVisible
                },
                _setAfterShow: function(e) {
                    this._afterShow = e
                },
                getVariantClicked: function(e, t) {
                    return this.currentDisabledVariants.filter((i => i[t] === e))
                },
                getAvailableAttributeRegion: function(e, t, i, n) {
                    let a = this.getVariantClicked(e, t);
                    if (i && n && a.length > 1) {
                        const e = this.getVariantClicked(i, n);
                        a = a.filter((t => e.indexOf(t) > -1))
                    }
                    const s = this.regionData.variantsByRegion,
                        r = Object.entries(s);
                    let l = [];
                    return r.forEach((e => {
                        const t = e[0],
                            i = e[1];
                        a.forEach((e => {
                            i.indexOf(e.variantId) > -1 && l.push((0, o.G)(t))
                        }))
                    })), l = l.filter(((e, t) => l.indexOf(e) === t)), l.join(", ")
                },
                _filterValues: function(e, t) {
                    return e.filter((e => null !== e[t]))
                },
                setSelectedRegionDisabledValues: function(e, t, i, n) {
                    if (n && (this.regionData = n), e && t && i) {
                        this.currentDisabledVariants = t.filter((t => 0 === e.filter((e => e && e.variantId == t.variantId)).length)), t = this._filterValues(t, i), e = this._filterValues(e, i);
                        const n = [...t.filter((t => !e.some((e => t[i] == e[i])))), ...e.filter((e => !t.some((t => e[i] == t[i]))))],
                            o = {},
                            a = {};
                        n.forEach((e => {
                            const t = !e.availability || this.isAvailableInAnyRegion(e.availability);
                            !o[e[i]] && t && (a[e[i]] = e.availability, o[e[i]] = !0)
                        })), this._disabledRegionValueVariants[i] = a
                    }
                },
                isAvailableInAnyRegion: e => Object.values(e).some((e => e === a.W.AVAILABILITY_IN_STOCK || e === a.W.AVAILABILITY_ON_DEMAND)),
                getSelectedRegionDisabledValues: function(e) {
                    return Object.keys(this._disabledRegionValueVariants[e])
                },
                scrollToNodeError: function(e) {
                    if (!this.nodeError) return;
                    const t = $(this.node).closest(".dynamic-sticky-footer").get(0);
                    let i = $(this.nodeError).closest(".modal-content").get(0),
                        n = 0;
                    var o;
                    t && (null == e || null === (o = e.getDynamicStickyFooter()) || void 0 === o || o.showTab(), i = $(this.nodeError).closest(".dynamic-sticky-footer__drawer").get(0), n = i.getBoundingClientRect().top);
                    i || (i = document.documentElement || document.body);
                    const a = this.nodeError.getBoundingClientRect().top - n + i.scrollTop - (t ? i.offsetHeight : window.innerHeight) / 2 + this.nodeError.offsetHeight / 2;
                    var s;
                    t ? null == e || null === (s = e.getDynamicStickyFooter()) || void 0 === s || s.setScrollTop(a) : $(i).animate({
                        scrollTop: a
                    }, 200)
                }
            }, n.U.Base);
            s.POPOVER = {
                REGION: {
                    TITLE: dlang("site", "Fulfilled in {region}"),
                    DESC: lang("Ships to locations worldwide")
                },
                UNAVAILABLE: {
                    TITLE: lang("Out of stock"),
                    DESC: dlang("generator", "Sorry, this size and color combination is out of stock. Please choose a different size and color combination."),
                    DESC_SIZE_ONLY: dlang("generator", "Sorry, this size is out of stock. Please choose a different size")
                },
                SAMPLE: {
                    TITLE: lang("Not available as sample"),
                    DESC: lang("You can place it as a basic order")
                }
            }, (globalThis || {}).PFVariantPickerBasePicker = s
        },
        50999: (e, t, i) => {
            "use strict";
            i.d(t, {
                N: () => p
            });
            var n = i(44416),
                o = i(44353),
                a = i(26859),
                s = i(92493),
                r = i(4473),
                l = i(20833),
                d = i(47586),
                c = i(17327),
                u = i(14684),
                h = i(48776);
            const p = Class({
                _sizes: [],
                _translatedSizes: [],
                _unavailableSizes: [],
                _sellingRegionLimitedSizes: [],
                _variants: [],
                ONE_SIZE: "One Size",
                ONE_SIZE_TRANSLATED: dlang("products", "One Size"),
                nodeError: null,
                sizeGuideModal: null,
                _marginClass: "margin-bottom-30",
                _shouldDisplayInline: !0,
                _sizeGuideModalTrigger: null,
                _product: null,
                __construct: function(e, t, i, n) {
                    this._onSizeChangedCallback = t, [this._sizes, this._translatedSizes] = this._getUniqueSizes(e), this._sizes.sort(o.y.sizeSortingCallback), this._variants = e, this._shouldDisplayInline = void 0 === n || n, this._product = this._getProduct();
                    var r = [];
                    for (var d in this._sizes) {
                        var c = this._sizes[d],
                            u = c.toLowerCase() === this.ONE_SIZE.toLowerCase() ? this.ONE_SIZE_TRANSLATED : this._getTranslatedSize(c);
                        r.push({
                            value: c,
                            title: u
                        })
                    }
                    const h = this._product.getSizePickerTitle(1);
                    var p = new a.l;
                    p.values = r, p.valuesDisabled = this._unavailableSizes, p.onChanged = this._onSizeClick, p.ariaLabel = h, p.singleAriaLabel = lang("Size {title}"), this.buttonPicker = new s.R(p), i && (this._marginClass = i);
                    const f = this._shouldRenderOneSizeText();
                    if (!this._sizes.length && !f) return void(this.node = tag("div"));
                    var g = new l.R;
                    if (g.query.size && this._sizes.indexOf(g.query.size) > -1 && this.buttonPicker.setActiveValue(g.query.size), 1 === this._sizes.length)
                        for (var v in e) {
                            this._variant = e[v], this.buttonPicker.setActiveValue(this._variant.size);
                            break
                        }
                    const _ = f ? tag("div", "pf-mt-16", dlang("products", "One size fits all")) : this.buttonPicker._nodeItems;
                    this.node = tag("div", {
                        className: this._marginClass + " button-picker" + (f ? " pf-w-100" : ""),
                        style: this._shouldDisplayInline ? {
                            display: "inline-block"
                        } : {}
                    }, [tag("div", "pf-mb-8", [tag("b", "", [h]), this._canHaveSizeGuide() && this._shouldRenderSizeGuideButton() ? this._sizeGuideModalTrigger = tag("a", {
                        className: `pull-right pf-mr-4 pf-ml-32 pf-link ${this._getNewSizeGuideClass()}`,
                        onclick: this._showSizeGuide
                    }, [lang("Size guide")]) : ""]), _, this.nodeError = tag("div", "alert alert-danger text-center hidden pf-mt-16", dlang("products", "Please choose a size!"))])
                },
                _showSizeGuide: function() {
                    if ((0, h.au)(), null == this.sizeGuideModal) {
                        var e = new d.Z.Par;
                        for (var t in e.title = lang("Size guide"), e.modalDialogClass = "modal-lg", e.onClose = $.proxy(this._removeSizeGuide, this), e.accessibility = !0, e.onShown = e => {
                                (0, c.fo)(e.target.querySelector(".modal-body"))
                            }, this._variants) {
                            e.url = r.W.getSizeChartUrl(this._variants[t].productId);
                            break
                        }
                        this.sizeGuideModal = new d.Z(e)
                    }
                    this.sizeGuideModal.show()
                },
                _removeSizeGuide: function() {
                    this.sizeGuideModal && (this.sizeGuideModal.remove(), this.sizeGuideModal = null, this._sizeGuideModalTrigger && (0, c.KS)(this._sizeGuideModalTrigger))
                },
                _canHaveSizeGuide: function() {
                    var e;
                    return (null === (e = this._product) || void 0 === e ? void 0 : e.canHaveSizeGuide) || !1
                },
                _getNewSizeGuideClass: function() {
                    var e;
                    return null !== (e = this._product) && void 0 !== e && e.newSizeGuide ? "pf-new-size-guide" : ""
                },
                _shouldRenderOneSizeText() {
                    var e, t;
                    const i = !this._sizes.length && (null === (e = this._product) || void 0 === e ? void 0 : e.isEmbroidery()) && !this._product.isEmbroiderySample(),
                        n = 1 === this._sizes.length && "one size" === (null === (t = this._sizes[0]) || void 0 === t ? void 0 : t.toLowerCase());
                    return i || n
                },
                _shouldRenderSizeGuideButton() {
                    var e, t;
                    const i = null === (e = this._product) || void 0 === e ? void 0 : e.sizeGuide,
                        n = null === (t = this._product) || void 0 === t ? void 0 : t.newSizeGuide;
                    return i || n
                },
                _getProduct() {
                    return this._variants.length ? this._variants[0].getCachedProduct() : null
                },
                hasAvailableSizesInSellingRegion() {
                    return this._sizes.filter((e => !(this.isSizeDiscontinued(e) || this.isSizeUnavailable(e) || this.isSizeInactive(e) || this._sellingRegionLimitedSizes.includes(e)))).length > 0
                },
                _onSizeClick: function(e) {
                    const t = this.isSizeInactive(e) ? this.getAvailableAttributeRegion(e, "size") : "";
                    let i = !0,
                        o = "",
                        a = "";
                    this.isSizeDiscontinued(e) ? (o = p.POPOVER.DISCONTINUED.TITLE, a = p.POPOVER.DISCONTINUED.DESC, this._variants[0].color || (a = p.POPOVER.DISCONTINUED.DESC_SIZE_ONLY), i = !1) : this.buttonPicker.getDisabledSampleSizes().indexOf(e) > -1 ? (o = n.z.POPOVER.SAMPLE.TITLE, a = n.z.POPOVER.SAMPLE.DESC, i = !1) : this._sellingRegionLimitedSizes.includes(e) ? (o = this.hasAvailableSizesInSellingRegion() ? u.K.DESC_SIZE.replace("{linkStart}", "").replace("{linkEnd}", "") : "", i = !1) : this.isSizeUnavailable(e) || this.isSizeInactive(e) && !t ? (o = n.z.POPOVER.UNAVAILABLE.TITLE, a = n.z.POPOVER.UNAVAILABLE.DESC, this._variants[0].color || (a = n.z.POPOVER.UNAVAILABLE.DESC_SIZE_ONLY), i = !1) : this.isSizeInactive(e) && !p.SIZES_WITHOUT_REGION_POPOVER.includes(e) && (o = n.z.POPOVER.REGION.TITLE.replace("{region}", t), a = n.z.POPOVER.REGION.DESC, i = !1), this.buttonPicker && (o || a) && this.buttonPicker.togglePopover(e, o, a), i && (this._onSizeChangedCallback(e), this.buttonPicker.setActiveValue(e))
                },
                isSizeInactive: function(e) {
                    return !!this.buttonPicker && this.buttonPicker.getInactiveItems().includes(e)
                },
                isSizeUnavailable: function(e) {
                    return !!this.buttonPicker && this.buttonPicker.getUnavailableItems().includes(e)
                },
                isSizeDiscontinued: function(e) {
                    return !!this.buttonPicker && this.buttonPicker.getHiddenItems().includes(e)
                },
                getSize: function() {
                    return this.buttonPicker ? this.buttonPicker.getValue() : null
                },
                _getUniqueSizes: function(e) {
                    return e.reduce(((e, t) => {
                        let {
                            size: i,
                            translatedSize: n,
                            isDisabledInPush: o,
                            hasStock: a
                        } = t;
                        return !i || e[0].includes(i) || o && !a || (e[0].push(i), e[1][i] = n), e
                    }), [
                        [], {}
                    ])
                },
                setUnavailableSizes: function(e) {
                    this.buttonPicker && this.buttonPicker.setUnavailableItems(e)
                },
                setHiddenSizes: function(e) {
                    this.buttonPicker && this.buttonPicker.setHiddenItems(e)
                },
                setInactiveSizes: function(e) {
                    this.buttonPicker && this.buttonPicker.setInactiveItems(e)
                },
                setUnavailableSampleSizes: function(e) {
                    this.buttonPicker && this.buttonPicker.setDisabledSampleSizes(e)
                },
                setSellingRegionLimitedSizes: function(e) {
                    this._sellingRegionLimitedSizes = e, this.setInactiveSizes(e)
                },
                setVariant: function(e) {
                    if (this.buttonPicker.setActiveValue(""), e && e.size && this._sizes.indexOf(e.size) > -1 && (this.buttonPicker.setActiveValue(e.size), this._variant = e), !this.buttonPicker.getActiveValue() && 1 == this._sizes.length)
                        for (var t in this._variants) {
                            this._variant = this._variants[t], this.buttonPicker.setActiveValue(this._variant.size);
                            break
                        }
                },
                getVariant: function() {
                    return this._variant
                },
                hasAtLeastOneValue: function() {
                    return !!this._sizes.length
                },
                isValuePicked: function() {
                    return !!this.getSize()
                },
                getValueCount: function() {
                    return this._sizes.length
                },
                getSizes: function() {
                    return this._sizes.slice()
                },
                _getTranslatedSize(e) {
                    var t;
                    return null !== (t = this._translatedSizes[e]) && void 0 !== t ? t : e
                }
            }, n.z);
            p.SIZES_WITHOUT_REGION_POPOVER = ["Samsung Galaxy S10", "Samsung Galaxy S10e", "Samsung Galaxy S10+"], p.POPOVER = {
                DISCONTINUED: {
                    TITLE: lang("Discontinued"),
                    DESC: dlang("generator", "Sorry, this color and size combination is discontinued. Please choose another color or size."),
                    DESC_SIZE_ONLY: dlang("generator", "Sorry, this size is discontinued. Please choose another size.")
                }
            }, (globalThis || {}).PFVariantPickerSizePicker = p
        },
        14684: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => n
            });
            const n = {
                DESC_SIZE: dlang("products", "Adjust your {linkStart} default selling preferences {linkEnd} to choose this size"),
                DESC_COLOR: dlang("products", "Adjust your {linkStart} default selling preferences {linkEnd} to choose this color"),
                DESC_TECHNIQUE: dlang("products", "Adjust your {linkStart} default selling preferences {linkEnd} to choose this technique")
            }
        },
        92512: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => s
            });
            var n = i(20833),
                o = i(55558),
                a = i(56805);
            const s = Class({
                _availability: {},
                _variants: [],
                _regionData: null,
                _activeTechnique: null,
                _availableRegions: [],
                _regionalAvailability: {},
                __construct: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this._variants = e, this._regionData = t, this._activeTechnique = i, this._availability = this._getSortedByAvailability(), t && (this._availableRegions = [], n ? this._regionData.availableRegions.forEach((e => {
                        this._availableRegions.push(this._regionData.abbrMap[e])
                    })) : this._regionData.allowedSellingRegions.forEach((e => {
                        this._availableRegions.push(this._regionData.abbrMap[e])
                    })), this._regionalAvailability = this._getSortedByRegionAvailability())
                },
                _getMatchingColors: function(e, t) {
                    var i = [];
                    for (var n in e) {
                        var o = e[n];
                        (o.size || "") === t && i.push(o.color)
                    }
                    return i
                },
                _getMatchingSizes: function(e, t) {
                    let i = [];
                    for (var n in e) {
                        var o = e[n];
                        (o.color || "") === t && i.push(o.size)
                    }
                    return i
                },
                getUnAvailableColors(e, t) {
                    const i = this._regionData && this._activeTechnique ? this._regionalAvailability : this._availability,
                        n = i.outOfStock,
                        o = i.outOfStockInEU,
                        a = this._getMatchingColors(n, e);
                    return t ? [...a, ...this._getMatchingColors(o, e)] : a
                },
                getDiscontinuedColors: function(e) {
                    const t = this._regionData && this._activeTechnique ? this._regionalAvailability.discontinued : this._availability.discontinued;
                    return this._getMatchingColors(t, e)
                },
                getDiscontinuedSizes: function(e) {
                    const t = this._regionData && this._activeTechnique ? this._regionalAvailability.discontinued : this._availability.discontinued;
                    return this._getMatchingSizes(t, e)
                },
                getUnavailableSizes(e, t, i) {
                    const n = this._regionData && this._activeTechnique ? this._regionalAvailability : this._availability,
                        o = n.outOfStock,
                        a = n.outOfStockInEU,
                        s = [],
                        r = t => {
                            (t.color || "") === e && s.push(t.size)
                        };
                    return o.forEach(r), i ? (a.forEach(r), s) : s
                },
                getNonExistentColors: function(e, t) {
                    if (!e) return [];
                    for (var i in this._variants) {
                        var n = this._variants[i],
                            o = t.indexOf(n.color);
                        n.size === e && -1 !== o && t.splice(o, 1)
                    }
                    return t
                },
                getNonExistentSizes: function(e, t) {
                    if (!e) return [];
                    for (var i in this._variants) {
                        var n = this._variants[i],
                            o = t.indexOf(n.size);
                        (n.color || "") === e && -1 !== o && t.splice(o, 1)
                    }
                    return t
                },
                updateRegionalAvailability: function(e) {
                    this._regionData && this._activeTechnique !== e && (this._activeTechnique = e, this._regionalAvailability = this._getSortedByRegionAvailability())
                },
                _getSortedByAvailability: function() {
                    const e = {
                            available: [],
                            outOfStock: [],
                            discontinued: [],
                            onDemand: [],
                            outOfStockInEU: []
                        },
                        t = (new n.R).path.indexOf("/dashboard/sync") > -1,
                        i = [];
                    this._regionData && this._regionData.allowedSellingRegions.forEach((e => {
                        i.push(this._regionData.abbrMap[e])
                    }));
                    for (const n in this._variants) {
                        const a = this._variants[n];
                        if (!a.availability) continue;
                        if (i.some((e => a.availability[e] === o.W.AVAILABILITY_ON_DEMAND))) e.onDemand.push(a);
                        else {
                            if (a.isTemporaryOutOfStock) {
                                e.outOfStock.push(a);
                                continue
                            }
                            if (a.hasStock && !t) e.available.push(a);
                            else if (a.hasStock && !t || !a.isDisabledInPush) {
                                if (!a.hasStock) {
                                    e.outOfStock.push(a);
                                    continue
                                }
                            } else e.discontinued.push(a)
                        }
                        this._regionData && this.isOutOfStockInEu(a.variantId) && e.outOfStockInEU.push(a)
                    }
                    return e
                },
                _getSortedByRegionAvailability: function() {
                    const e = {
                        available: [],
                        onDemand: [],
                        outOfStock: [],
                        discontinued: [],
                        outOfStockInEU: []
                    };
                    for (const t in this._variants) {
                        const i = this._variants[t];
                        if (this._hasStatus(i, o.W.AVAILABILITY_IN_STOCK)) e.available.push(i);
                        else if (this._hasStatus(i, o.W.AVAILABILITY_ON_DEMAND)) e.onDemand.push(i);
                        else {
                            if (this._hasStatus(i, o.W.AVAILABILITY_SUPPLIER_OUT_OF_STOCK)) {
                                e.outOfStock.push(i);
                                continue
                            }
                            this._hasStatus(i, o.W.AVAILABILITY_DISCONTINUED) && e.discontinued.push(i)
                        }
                        this._regionData && this.isOutOfStockInEu(i.variantId) && e.outOfStockInEU.push(i)
                    }
                    return e
                },
                _hasStatus: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return !!e.availabilityByTechniques && this._availableRegions.some((n => n in e.availabilityByTechniques ? e.availabilityByTechniques[n][i || this._activeTechnique] === t : e.availability[n] === t))
                },
                isVariantDiscontinued: function(e) {
                    for (var t in this._availability.discontinued) {
                        var i = this._availability.discontinued[t];
                        if (e.variantId === i.variantId) return !0
                    }
                    return !1
                },
                areAllVariantsDiscontinued: function() {
                    return this._availability.discontinued.length === this._variants.length
                },
                getTechniqueAvailability: function(e) {
                    const t = {};
                    return e.forEach((e => {
                        let i = !1;
                        for (const t in this._variants) {
                            const n = this._variants[t];
                            if (this._hasStatus(n, o.W.AVAILABILITY_IN_STOCK, e) || this._hasStatus(n, o.W.AVAILABILITY_ON_DEMAND, e)) {
                                i = !0;
                                break
                            }
                        }
                        t[e] = i
                    })), t
                },
                isVariantAvailableInRegion(e, t) {
                    var i;
                    return null === (i = this._regionData.variantsByRegion[t]) || void 0 === i ? void 0 : i.includes(e)
                },
                isOutOfStockInEu(e) {
                    const t = !this.isVariantAvailableInRegion(e, a.x.REGION_LATVIA),
                        i = !this.isVariantAvailableInRegion(e, a.x.REGION_SPAIN);
                    return t && i
                }
            });
            (globalThis || {}).PFVariantPickerVariantAvailability = s
        },
        17327: (e, t, i) => {
            "use strict";
            i.d(t, {
                EB: () => a,
                KS: () => s,
                fo: () => r
            });
            var n = i(65311),
                o = i.n(n);

            function a(e) {
                if (e.disabled) return !1;
                if (e.tabIndex >= 0) return !0;
                switch (e.nodeName.toLowerCase()) {
                    case "a":
                        return !!e.href && "ignore" !== e.rel;
                    case "input":
                        return "hidden" !== e.type && "file" !== e.type;
                    case "button":
                    case "select":
                    case "textarea":
                        return !0;
                    default:
                        return !1
                }
            }

            function s(e) {
                return !!a(e) && ("function" == typeof e.focus ? e.focus() : o()(e).focus(), document.activeElement === e)
            }

            function r(e) {
                for (let t = 0; t < e.childNodes.length; t++) {
                    let i = e.childNodes[t];
                    if (s(i) || r(i)) return !0
                }
                return !1
            }
        },
        45739: (e, t, i) => {
            "use strict";
            i.d(t, {
                O: () => r
            });
            var n = i(96486),
                o = i.n(n);

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s(n.key), n)
                }
            }

            function s(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            let r = function() {
                function e(t) {
                    var i, n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), i = this, o = null, (n = s(n = "servicePrices")) in i ? Object.defineProperty(i, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[n] = o, this.servicePrices = t
                }
                var t, i, n;
                return t = e, (i = [{
                    key: "getServicePrice",
                    value: function(e, t, i) {
                        return this.findServicePriceByCategoryAndCurrency(e, t, i)
                    }
                }, {
                    key: "findServicePriceByCategoryAndCurrency",
                    value: function(e, t, i) {
                        return this.servicePrices ? o().find(this.servicePrices.servicePrices, (function(n) {
                            return n.category === t && n.service === e && n.productionCurrency === i
                        })) : null
                    }
                }]) && a(t.prototype, i), n && a(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        29842: (e, t, i) => {
            "use strict";

            function n(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = "";
                switch (e) {
                    case 1:
                        i = "pf-rounded-right";
                        break;
                    case 2:
                        i = "pf-rounded-bottom-right";
                        break;
                    case 3:
                        i = "pf-rounded-bottom-left";
                        break;
                    default:
                        i = "pf-rounded"
                }
                return t || (i += "--small"), i
            }
            i.d(t, {
                C: () => n
            })
        },
        50522: (e, t, i) => {
            "use strict";
            i.d(t, {
                LH: () => o,
                QD: () => s
            });
            var n = i(52307);

            function o(e, t) {
                let i = !1;
                for (let n = 0; n < e.children.length; n++) o(e.children[n], t) && (i = !0);
                return i || t.includes(e.id)
            }

            function a(e, t) {
                for (let i = 0; i < e.length; i++) {
                    let n = !1;
                    if (e[i].children.length && (n = a(e[i].children, t)), n || t.includes(e[i].id)) return !0
                }
                return !1
            }

            function s(e) {
                if (e.hasExpiredAssets || e.hasEmbroideryPredictions) return !1;
                return a((new n.M).getAll(null), e.swapCategories)
            }
        },
        29932: e => {
            e.exports = function(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length, o = Array(n); ++i < n;) o[i] = t(e[i], i, e);
                return o
            }
        },
        18674: e => {
            e.exports = function(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        80531: (e, t, i) => {
            var n = i(62705),
                o = i(29932),
                a = i(1469),
                s = i(33448),
                r = n ? n.prototype : void 0,
                l = r ? r.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (a(t)) return o(t, e) + "";
                if (s(t)) return l ? l.call(t) : "";
                var i = t + "";
                return "0" == i && 1 / t == -Infinity ? "-0" : i
            }
        },
        27561: (e, t, i) => {
            var n = i(67990),
                o = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(o, "") : e
            }
        },
        89464: (e, t, i) => {
            var n = i(18674)({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });
            e.exports = n
        },
        67990: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var i = e.length; i-- && t.test(e.charAt(i)););
                return i
            }
        },
        75703: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        23279: (e, t, i) => {
            var n = i(13218),
                o = i(7771),
                a = i(14841),
                s = Math.max,
                r = Math.min;
            e.exports = function(e, t, i) {
                var l, d, c, u, h, p, f = 0,
                    g = !1,
                    v = !1,
                    _ = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function b(t) {
                    var i = l,
                        n = d;
                    return l = d = void 0, f = t, u = e.apply(n, i)
                }

                function m(e) {
                    return f = e, h = setTimeout(C, t), g ? b(e) : u
                }

                function y(e) {
                    var i = e - p;
                    return void 0 === p || i >= t || i < 0 || v && e - f >= c
                }

                function C() {
                    var e = o();
                    if (y(e)) return S(e);
                    h = setTimeout(C, function(e) {
                        var i = t - (e - p);
                        return v ? r(i, c - (e - f)) : i
                    }(e))
                }

                function S(e) {
                    return h = void 0, _ && l ? b(e) : (l = d = void 0, u)
                }

                function w() {
                    var e = o(),
                        i = y(e);
                    if (l = arguments, d = this, p = e, i) {
                        if (void 0 === h) return m(p);
                        if (v) return clearTimeout(h), h = setTimeout(C, t), b(p)
                    }
                    return void 0 === h && (h = setTimeout(C, t)), u
                }
                return t = a(t) || 0, n(i) && (g = !!i.leading, c = (v = "maxWait" in i) ? s(a(i.maxWait) || 0, t) : c, _ = "trailing" in i ? !!i.trailing : _), w.cancel = function() {
                    void 0 !== h && clearTimeout(h), f = 0, l = p = d = h = void 0
                }, w.flush = function() {
                    return void 0 === h ? u : S(o())
                }, w
            }
        },
        7187: (e, t, i) => {
            var n = i(89464),
                o = i(79833),
                a = /[&<>"']/g,
                s = RegExp(a.source);
            e.exports = function(e) {
                return (e = o(e)) && s.test(e) ? e.replace(a, n) : e
            }
        },
        6557: e => {
            e.exports = function(e) {
                return e
            }
        },
        33448: (e, t, i) => {
            var n = i(44239),
                o = i(37005);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
            }
        },
        7771: (e, t, i) => {
            var n = i(55639);
            e.exports = function() {
                return n.Date.now()
            }
        },
        14841: (e, t, i) => {
            var n = i(27561),
                o = i(13218),
                a = i(33448),
                s = /^[-+]0x[0-9a-f]+$/i,
                r = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                d = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return NaN;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var i = r.test(e);
                return i || l.test(e) ? d(e.slice(2), i ? 2 : 8) : s.test(e) ? NaN : +e
            }
        },
        79833: (e, t, i) => {
            var n = i(80531);
            e.exports = function(e) {
                return null == e ? "" : n(e)
            }
        }
    }
]);