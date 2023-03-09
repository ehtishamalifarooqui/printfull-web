/*! License information is available at https://static.cdn.printful.com/dist-pf/app/catalogEntry.licenses.txt if third party dependencies are included */
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [88557, 33890], {
        90350: (e, t, i) => {
            "use strict";
            var n = i(20021),
                s = i(76645),
                o = i(65557),
                r = i(8653),
                l = i(34243),
                u = i(17570),
                d = i(22916),
                p = i(97540);
            const h = function(e, t, i) {
                var n = document.createElement("script");
                n.src = "https://www.youtube.com/iframe_api";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(n, s), this.containerId = t, this.videoId = e, this.onVideoBeginCallback = i, window.onYouTubeIframeAPIReady = $.proxy(this.onScriptLoaded, this)
            };
            h.prototype.onScriptLoaded = function() {
                this.player = new YT.Player(this.containerId, {
                    videoId: this.videoId,
                    events: {
                        onStateChange: $.proxy(this.onPlayStateChange, this)
                    }
                }), $("#" + this.containerId).parent().fitVids()
            }, h.prototype.onPlayStateChange = function(e) {
                e.data == YT.PlayerState.UNSTARTED && this.onVideoBeginCallback()
            }, (globalThis || {}).PFProductsPricingYoutubeEmbed = h;
            var m = i(12341),
                g = i(93756),
                v = i(99574),
                b = i(42649),
                f = i(70538),
                _ = i(13136),
                w = i(9651);
            var y = i(83485),
                P = i(80108),
                C = i(24176),
                S = i(12954),
                T = i(86361),
                F = i(68975),
                N = i(78345),
                k = i(38009),
                E = i(71205),
                z = i(79442),
                I = i(91574),
                O = i(87581);
            (0, n.J)(), (0, s.J)(), (0, C.G)(), (0, o.$)("PF.ProductsCatalog.Initializer", r.z), (0, o.$)("PF.ProductsCatalog.Initializer.Par", l.j), (0, o.$)("PF.Components.SignUpPopup", u.z), (0, o.$)("PF.Items.CategoryItem", d.m), (0, o.$)("PF.ProductsPricingAsync", P.D), (0, o.$)("PF.LoadingOverlay", p.D), (0, o.$)("PF.ProductsPricing.YoutubeEmbed", h), (0, o.$)("PF.Components.SizeGuide", m.x), (0, o.$)("PF.Components.SizeGuide.Table", g.u), (0, o.$)("PF.Components.Tabs", v.w), (0, o.$)("PF.MockupGenerator.DesignerAsync", (async function(e) {
                const {
                    node: t,
                    deps: {
                        PFMockupGeneratorDesigner: n
                    }
                } = await (0, _.f)(e, (() => Promise.all([i.e(15248), i.e(98904), i.e(10113), i.e(68171), i.e(46684), i.e(14034), i.e(62431), i.e(33604), i.e(74252), i.e(23605), i.e(98038)]).then(i.bind(i, 68490))));
                w.U.clearNode(t);
                for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++) o[r - 1] = arguments[r];
                const l = new n(...o);
                l.append(t)
            })), (0, o.$)("PF.Repositories.StoreRepository", y.z), f.default.use(S.ZP), (0, b.ZP)(f.default, b.SE.PRINTFUL);
            const R = {
                TooltipDirective: E.Z
            };
            (0, b.TK)(f.default);
            const M = {
                ...(0, n.o)(),
                "browser-support": () => Promise.all([i.e(31e3), i.e(2749)]).then(i.bind(i, 27225)),
                "promo-popup": () => Promise.all([i.e(33348), i.e(75340)]).then(i.bind(i, 26880))
            };
            f.default.use(T.ZP);
            const D = new T.ZP({
                defaultClient: (0, F.w)()
            });
            f.default.use(N.Z);
            const G = new N.Z((0, k.y)());
            (0, z.initializeVuex)({
                modules: {
                    premium: I.default,
                    productReviews: O.default
                }
            }), (0, b.HO)(M, {
                apolloProvider: D,
                router: G,
                directives: R,
                store: (0, z.getVuex)()
            })
        },
        20021: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => U,
                J: () => x
            });
            var n = i(65557),
                s = i(39697),
                o = i(20111),
                r = i(9651);
            const l = Class({
                title: "",
                slug: "",
                isNew: !1,
                isPro: !1,
                children: [],
                className: "",
                isMobile: !1,
                hasDivider: !1
            });
            l.fromArray = function(e) {
                var t = new l;
                return r.U.O2O(t, e), t.children = e.children ? e.children.map(l.fromArray) : [], e.settings && e.settings.headerDropDownTitle && (t.title = e.settings.headerDropDownTitle), t
            }, window && ((globalThis || {}).PFComponentsSubmenuItem = l);
            var u = i(97540),
                d = i(86340),
                p = i(15425);
            const h = Class({
                items: [],
                mainMenuNode: null,
                menuToggleNode: null,
                activeItem: null,
                isSmallScreen: !1,
                smallScreenBreakpoint: 992,
                hoverTimer: 0,
                _lastScrollPosition: 0,
                submenuFooter: null,
                __construct: function(e, t, i, n) {
                    (this.items = e.map(l.fromArray), this.mainMenuNode = document.getElementById(t), this.menuToggleNode = document.getElementById(i), this.submenuFooter = n, this.mainMenuNode && this.menuToggleNode) && (window.addEventListener("resize", this._onResize.bind(this)), this.menuToggleNode.addEventListener("click", this._onToggleClick.bind(this)), this.menuToggleNode.parentNode.addEventListener("mouseenter", this._submenuOpen), this.menuToggleNode.parentNode.addEventListener("focusin", this._submenuOpen), this.menuToggleNode.parentNode.addEventListener("mouseleave", this._hoverDelay.bind(this, this._submenuClose)), this.menuToggleNode.parentNode.addEventListener("focusout", this._hoverDelay.bind(this, this._submenuClose)), this._onResize(), this.items.filter((function(e) {
                        return !!e.children.length
                    })).length ? this.node = tag("div", "nav__outer-submenu row no-gutters", [this.menuNode = tag("div", "nav__outer-submenu__left col-12 col-md-4 pf-py-md-24 pf-border-right ", [this._renderLevel(this.items)]), this.submenuNode = tag("div", "nav__outer-submenu__right col-12 col-md-8 pf-py-md-24 pf-d-none pf-border-left-0")]) : (r.U.addClassName(this.menuToggleNode.nextSibling, "main-menu-submenu--no-submenu-children"), this.node = tag("div", "nav__outer-submenu row no-gutters", [this.menuNode = tag("div", "nav__outer-submenu__left col-12 col-md-12 pf-py-md-24 ", [this._renderLevel(this.items)]), this.submenuNode = tag("div", "nav__outer-submenu__right col-12 col-md-0 pf-d-none pf-border-left-0")])), !this.isSmallScreen && this._showSubMenu(this.items[0]))
                },
                _submenuOpen: function() {
                    this.isSmallScreen || (clearTimeout(this.hoverTimer), $(".header__main #nav .has-submenu.open, .header__main #nav-b2c .has-submenu.open").removeClass("open"), r.U.addClassName(this.menuToggleNode.parentNode, "open"), r.U.removeClassName(this.menuToggleNode.parentNode, "closed"))
                },
                _submenuClose: function() {
                    this.isSmallScreen || (r.U.removeClassName(this.menuToggleNode.parentNode, "open"), r.U.addClassName(this.menuToggleNode.parentNode, "closed"))
                },
                _onToggleClick: function(e) {
                    this.isSmallScreen && (e.preventDefault(), r.U.removeClassName(this.submenuNode, "open"), r.U.hasClassName(this.menuToggleNode.parentNode, "open") ? r.U.removeClassName(this.menuToggleNode.parentNode, "open") : r.U.addClassName(this.menuToggleNode.parentNode, "open"), r.U.hasClassName(this.mainMenuNode, "is-submenu-open") ? ($(this.mainMenuNode).scrollTop(this._lastScrollPosition), r.U.removeClassName(this.mainMenuNode, "is-submenu-open")) : (this._lastScrollPosition = $(this.mainMenuNode).scrollTop(), setTimeout(function() {
                        $(this.mainMenuNode).scrollTop(0)
                    }.bind(this), 500), r.U.addClassName(this.mainMenuNode, "is-submenu-open")))
                },
                _hoverDelay: function(e, t) {
                    clearTimeout(this.hoverTimer), this.hoverTimer = setTimeout(e.bind(this, t), 150)
                },
                _onResize: function() {
                    this.isSmallScreen = window.innerWidth < this.smallScreenBreakpoint
                },
                _renderLevel: function(e) {
                    for (var t = !0, i = 0, n = e.length; i < n; i++) {
                        var s = e[i];
                        void 0 !== s.visible && (t = s.visible), s.visible = t
                    }
                    return tag("ul", "nav__submenu", [this._renderBackLink(this.menuToggleNode), this._renderItems(e)])
                },
                _renderBackLink: function(e) {
                    return tag("li", "nav__submenu__item nav__submenu__item--back-link", [tag("a", {
                        onclick: this._goBackLevel.bind(this, e)
                    }, e.title ? e.title : e.textContent)])
                },
                _renderItems: function(e) {
                    const t = [];
                    for (const i in e) {
                        const n = e[i];
                        n.hasDivider && t.push(tag("li", "nav__submenu__item nav__submenu__divider")), t.push(this._renderItem(n))
                    }
                    return t
                },
                _renderItem: function(e) {
                    var t, i, n, s = ["nav__submenu__item"];
                    e === this.activeItem && s.push("nav__submenu__item--active"), e.className.length && s.push(e.className), e.children && e.children.length && s.push("nav__submenu__item--has-children"), e.isMobile && s.push("nav__submenu__item--is-mobile"), !1 === e.visible && s.push("pf-d-none");
                    var o = tag("li", {
                        className: s.join(" "),
                        onclick: this._changeLanguage.bind(this, e),
                        attr: {
                            tabIndex: null !== (t = e.children) && void 0 !== t && t.length ? 0 : null
                        }
                    }, [tag("a", {
                        className: (null !== (i = e.children) && void 0 !== i && i.length || d.Dw.includes(null == e ? void 0 : e.itemId)) && e !== this.activeItem ? "pf-hover-icon-move" : "",
                        href: e.slug,
                        onclick: function(t) {
                            this._showSubMenu(e, t).then((() => {
                                const t = e.slug; - 1 === t.indexOf("javascript:") && ga("send", "event", "Navigation link clicks", "Header Menu", t)
                            }))
                        }.bind(this)
                    }, [e.title ? tag("span", "", e.title) : "", e.displayAsNew || e.isNew ? tag("span", "pf-ml-4 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New")) : "", e.isHidden ? tag("span", {
                        innerHTML: "BETA",
                        className: "pf-badge pf-badge-small pf-badge--info pf-ml-8"
                    }) : "", null !== (n = e.children) && void 0 !== n && n.length ? tag("i", "nav__submenu__item--chevron pf-i pf-i-chevron-right pf-i-18 pf-text-gray pf-d-none pf-d-md-block") : ""])]);
                    return $(o).on("mouseover", function(t) {
                        this._toggleShowSubMenu(e, t)
                    }.bind(this)).on("mouseout", function() {
                        clearTimeout(this.hoverTimer)
                    }.bind(this)).on("keydown", function(t) {
                        "Enter" !== t.key && "Spacebar" !== t.key && " " !== t.key || (t.preventDefault(), $(this.menuToggleNode).focus(), this._toggleShowSubMenu(e, t))
                    }.bind(this)), o
                },
                _toggleShowSubMenu: function(e, t) {
                    !this.isSmallScreen && e !== this.activeItem && this._hoverDelay(this._showSubMenu.bind(this, e), t)
                },
                async _showSubMenu(e, t) {
                    var i;
                    r.U.clearNode(this.submenuNode), r.U.clearNode(this.menuNode), this.activeItem = e, this._renderLevel(this.items).append(this.menuNode);
                    if (0 === (null == e ? void 0 : e.parentId) || d.Dw.includes(null == e ? void 0 : e.itemId)) {
                        var n, s, o;
                        if (!(null !== (n = this.submenuFooter) && void 0 !== n && n.categoriesProducts || this.isSmallScreen)) this.submenuFooter.categoriesProducts = await (null === (o = this.submenuFooter) || void 0 === o ? void 0 : o.init());
                        null === (s = this.submenuFooter) || void 0 === s || s.setArrowsForHardcodedCategories(this.items, this.menuNode)
                    }
                    this.hideSubmenuNode(e) || (t && "click" === t.type && this.isSmallScreen && t.preventDefault(), null != e && null !== (i = e.children) && void 0 !== i && i.length && this._renderSubmenu(e.children, !0).append(this.submenuNode), this.submenuFooter && !this.isSmallScreen && this.showSubmenuFooterContent(e), setTimeout(function() {
                        r.U.addClassName(this.submenuNode, "open")
                    }.bind(this)))
                },
                _goBackLevel: function(e, t) {
                    if (!this.isSmallScreen) return !1;
                    r.U.clearNode(this.menuNode), r.U.removeClassName(this.submenuNode, "open"), this.activeItem = null, this._renderLevel(this.items).append(this.menuNode), e instanceof l ? (this.activeItem = e, setTimeout(function() {
                        r.U.clearNode(this.submenuNode)
                    }.bind(this), 300)) : (r.U.clearNode(this.submenuNode), this._onToggleClick(t))
                },
                _renderSubmenu: function(e, t) {
                    let i = !1;
                    if (t) {
                        r.U.addClassName(this.submenuNode, "pf-d-none");
                        let t = e.length;
                        e.forEach((e => {
                            e.children && e.children.length && (t += e.children.length)
                        })), t <= 5 && (i = !0), t > 0 && r.U.removeClassName(this.submenuNode, "pf-d-none")
                    }
                    return tag("ul", "nav__submenu__menu " + (t ? "nav__submenu__menu--top " : "") + (i ? "nav__submenu__menu--top--small" : ""), [t ? this._renderBackLink(this.activeItem) : "", e.map(this._renderSubmenuItem)])
                },
                _renderSubmenuItem: function(e) {
                    var t = ["nav__submenu__menu__item"];
                    return (e.children && e.children.length || d.Dw.includes(null == e ? void 0 : e.itemId)) && t.push("nav__submenu__menu__item--has-children"), e.isMobile && t.push("nav__submenu__menu__item--is-mobile"), tag("li", "nav__submenu__menu__item " + t.join(" "), [tag("a", {
                        href: e.slug,
                        onclick: function() {
                            ga("send", "event", "Navigation link clicks", "Header Menu", e.slug)
                        }
                    }, [tag("span", " ", e.title), e.displayAsNew || e.isNew ? tag("span", "pf-ml-4 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New")) : ""]), e.children.length ? this._renderSubmenu(e.children) : ""])
                },
                append: function(e) {
                    return e && this.node.append(e), this
                },
                _changeLanguage: function(e) {
                    e.options && e.options.languageId && o.q.changeLanguage(e.options.languageId)
                },
                async showSubmenuFooterContent(e) {
                    this.node.classList.add("nav__outer-submenu__wider"), u.D.show(this.submenuNode, {
                        minHeight: 400
                    }), this.clearPromoProductNode();
                    const t = await this.submenuFooter.render(e);
                    null != t && t.itemsNotSet && d.Dw.includes(e.itemId) ? r.U.addClassName(this.submenuNode, "pf-d-none") : (r.U.removeClassName(this.submenuNode, "pf-d-none"), t.node.append(this.submenuNode), u.D.hide(this.submenuNode))
                },
                clearPromoProductNode() {
                    const e = this.submenuNode.querySelector(".new-products");
                    e && r.U.clearNode(e)
                },
                hideSubmenuNode(e) {
                    var t, i, n, s;
                    const o = !(null != e && null !== (t = e.children) && void 0 !== t && t.length) && 0 === (null == e ? void 0 : e.parentId),
                        l = !([d.$n, d.MD].includes(null === (i = this.items[0]) || void 0 === i ? void 0 : i.parentId) || null != e && null !== (n = e.children) && void 0 !== n && n.length),
                        u = this.isSmallScreen && !(null != e && null !== (s = e.children) && void 0 !== s && s.length),
                        h = (null == e ? void 0 : e.itemId) === p.wo;
                    return !!(null == e || !e.itemId || o || l || u || h) && (r.U.addClassName(this.submenuNode, "pf-d-none"), !0)
                }
            });
            window && ((globalThis || {}).PFComponentsSubmenu = h);
            var m = i(33286),
                g = i(29738),
                v = i(54200),
                b = i(78039),
                f = i(38137),
                _ = i(16623),
                w = i(61169),
                y = i(25046),
                P = (i(61756), i(79421));

            function C(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z(n.key), n)
                }
            }

            function S(e, t) {
                return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, S(e, t)
            }

            function T(e) {
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
                    var i, n = k(e);
                    if (t) {
                        var s = k(this).constructor;
                        i = Reflect.construct(n, arguments, s)
                    } else i = n.apply(this, arguments);
                    return F(this, i)
                }
            }

            function F(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return N(e)
            }

            function N(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, k(e)
            }

            function E(e, t, i) {
                return (t = z(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function z(e) {
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

            function I(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function O(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, M(e, t, "get"))
            }

            function R(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, M(e, t, "set"), i), i
            }

            function M(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var D = new WeakMap,
                G = new WeakSet;
            let A = function(e) {
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
                    }), t && S(e, t)
                }(o, e);
                var t, i, n, s = T(o);

                function o(e, t, i) {
                    var n, r, l;
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), n = s.call(this), I(r = N(n), l = G), l.add(r),
                        function(e, t, i) {
                            I(e, t), t.set(e, i)
                        }(N(n), D, {
                            writable: !0,
                            value: void 0
                        }), E(N(n), "isSellingRegionApplied", !0), E(N(n), "onboardingData", {}), E(N(n), "sellingRegions", []), n.isSellingRegionApplied = e, n.onboardingData = t || {}, n.sellingRegions = i || [], n.node = tag("div"),
                        function(e, t, i) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(N(n), G, B).call(N(n)), n
                }
                return t = o, (i = [{
                    key: "onSave",
                    value: function(e) {
                        this.updateSideMenuTitles(e), this.isSellingRegionApplied ? location.reload() : (O(this, D).setDataProp("shouldShowSettingsAppliedModal", !0), O(this, D).setDataProp("showSetupLaterButton", !1), this.isSellingRegionApplied = !0, (0, P.Z)("selling-region/dismiss-onboarding", {
                            type: "selling_region_settings_applied"
                        }))
                    }
                }, {
                    key: "onSetupLater",
                    value: function() {
                        O(this, D).setDataProp("shouldShowSetupLaterModal", !0)
                    }
                }, {
                    key: "onSettingsAppliedModalClose",
                    value: function(e) {
                        O(this, D).setDataProp("shouldShowSettingsAppliedModal", e), e || location.reload()
                    }
                }, {
                    key: "onSetupLaterModalClose",
                    value: function(e) {
                        O(this, D).setDataProp("shouldShowSetupLaterModal", e)
                    }
                }, {
                    key: "updateSideMenuTitles",
                    value: function(e) {
                        document.querySelector("#selling-region-menu .nav__submenu__item--back-link a").textContent = e.translatedName, document.querySelector("#selling-region-menu-toggle .menu-label").textContent = e.translatedName;
                        const t = document.querySelector("#selling-region-menu-b2c .nav__submenu__item--back-link a"),
                            i = document.querySelector("#selling-region-menu-toggle-b2c .menu-label");
                        t && i && (t.textContent = e.translatedName, i.textContent = e.translatedName)
                    }
                }]) && C(t.prototype, i), n && C(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), o
            }(w.p);
            async function B() {
                const e = new y.L;
                e.components = {
                    "selling-region": () => Promise.all([i.e(33348), i.e(98100)]).then(i.bind(i, 23639)),
                    "default-selling-region-settings-applied-modal": () => i.e(98352).then(i.bind(i, 89138)),
                    "default-selling-region-setup-later-modal": () => i.e(58681).then(i.bind(i, 28183))
                }, e.template = '\n            <div>\n                <selling-region\n                    :show-setup-later-button="showSetupLaterButton"\n                    :onboarding-data="onboardingData"\n                    :selling-regions="sellingRegions"\n                    @onSetupLater="emitEvent(\'onSetupLater\', $event)"\n                    @onSave="emitEvent(\'onSave\', $event)" />\n                    \n                <default-selling-region-settings-applied-modal\n                    v-if="shouldShowSettingsAppliedModal"\n                    :show-modal="shouldShowSettingsAppliedModal"\n                    @update:showModal="emitEvent(\'onSettingsAppliedModalClose\', $event)" />\n    \n                <default-selling-region-setup-later-modal\n                    v-if="shouldShowSetupLaterModal"\n                    :show-modal="shouldShowSetupLaterModal"\n                    @update:showModal="emitEvent(\'onSetupLaterModalClose\', $event)" />\n            </div>\n        ', e.initialData = {
                    showSetupLaterButton: !this.isSellingRegionApplied,
                    shouldShowSettingsAppliedModal: !1,
                    shouldShowSetupLaterModal: !1,
                    onboardingData: this.onboardingData,
                    sellingRegions: this.sellingRegions
                }, e.emitEvent = (e, t) => {
                    switch (e) {
                        case "onSave":
                            this.onSave(t);
                            break;
                        case "onSetupLater":
                            this.onSetupLater();
                            break;
                        case "onSettingsAppliedModalClose":
                            this.onSettingsAppliedModalClose(t);
                            break;
                        case "onSetupLaterModalClose":
                            this.onSetupLaterModalClose(t)
                    }
                }, R(this, D, new y.Z(e)), O(this, D).append(this.node)
            }
            var L = i(48776);

            function x() {
                (0, f.k)(), (0, n.$)("PF.Components.AutoComplete", s.z), (0, n.$)("PF.Components.Submenu", h), (0, n.$)("PF.Components.Menu", _.YK), _.YK.init(), (0, n.$)("PF.OrderBegin", m.g), (0, n.$)("PF.Popup", g.G), (0, n.$)("PF.UserSettingsMenu", o.q), (0, n.$)("PF.ShoppingCart", v.r), (0, n.$)("PF.Items.CartItem", b.G), (0, n.$)("PF.SideMenuSellingRegion", A), (0, n.$)("PF.DataLayer.pushPageLeaveEvent", L.EB)
            }

            function U() {
                return {
                    ...(0, f.S)(),
                    "settings-menu": () => Promise.all([i.e(33348), i.e(71852)]).then(i.bind(i, 21857)),
                    "the-skip-to-main-content-link": () => i.e(91052).then(i.bind(i, 30430)),
                    "notification-header-button": () => i.e(71308).then(i.bind(i, 93941)),
                    "premium-header-menu": () => i.e(78253).then(i.bind(i, 23570)),
                    "refer-a-friend-button": () => i.e(95992).then(i.bind(i, 75643)),
                    "premium-unsubscribe": () => i.e(65419).then(i.bind(i, 56919)),
                    "self-segmentation": () => i.e(64021).then(i.bind(i, 24106)),
                    "user-dropdown": () => i.e(84353).then(i.bind(i, 89614)),
                    "shopping-cart": () => Promise.all([i.e(98904), i.e(10113), i.e(68171), i.e(26387), i.e(55239)]).then(i.bind(i, 11836)),
                    "dashboard-button": () => i.e(10323).then(i.bind(i, 97865)),
                    "header-buttons": () => Promise.all([i.e(33348), i.e(71852), i.e(51767)]).then(i.bind(i, 68896)),
                    "newsletter-subscribe-form": () => i.e(76056).then(i.bind(i, 1958)),
                    "back-to-top-button": () => i.e(18972).then(i.bind(i, 31349)),
                    "selling-region-launch-onboarding": () => Promise.all([i.e(33348), i.e(28365)]).then(i.bind(i, 65748))
                }
            }
        },
        76645: (e, t, i) => {
            "use strict";
            i.d(t, {
                J: () => r
            });
            var n = i(65557),
                s = i(85012),
                o = i(86340);

            function r() {
                (0, n.$)("PF.Utils.Cookie", s.o), (0, n.$)("PF.New.Product.Showcase", o.OY)
            }
        },
        24176: (e, t, i) => {
            "use strict";
            i.d(t, {
                G: () => h
            });
            var n = i(65557),
                s = i(4473),
                o = i(58334),
                r = i(82320),
                l = i(14544),
                u = i(87179),
                d = i(55874),
                p = i(75717);

            function h() {
                (0, n.$)("PF.Items.ProductItem", s.W), (0, n.$)("PF.Items.VariantItem", o.O), (0, n.$)("PF.Repositories.Products", r.m), (0, n.$)("PF.ProductsCatalog.Preloader", u.n), (0, n.$)("PF.SellingRegionSetting", d.k6), (0, n.$)("PF.ProductsCatalog.Utils.Helpers", p.A), (0, n.$)("PF.Repositories.CategoryRepository", l.s)
            }
        },
        99553: (e, t, i) => {
            "use strict";
            i.d(t, {
                $A: () => f,
                N4: () => p,
                Nr: () => u,
                O2: () => h,
                W4: () => o,
                Zx: () => g,
                du: () => m,
                eZ: () => v,
                eq: () => _,
                i0: () => b,
                jO: () => l,
                mk: () => s,
                nU: () => d,
                sZ: () => r
            });
            var n = i(58617);
            const s = e => (0, n.r)("/rpc/product-reviews-rpc/get-reviews", e),
                o = e => (0, n.r)("/rpc/product-reviews-rpc/rate-review-as-helpful", {
                    reviewId: e
                }),
                r = e => (0, n.r)("/rpc/product-reviews-rpc/remove-helpful-review-vote", {
                    reviewId: e
                }),
                l = e => (0, n.r)("/rpc/product-reviews-rpc/get-product-variant-to-review", {
                    productId: e
                }),
                u = (e, t) => (0, n.r)("/rpc/product-reviews-rpc/is-exceeded-product-variant-review-count", {
                    productId: e,
                    isEditingReview: t
                }),
                d = (e, t) => (0, n.r)("/rpc/product-review-rating-system-category-product-mapping-rpc/get-product-rating-categories-for-add-review", {
                    productId: e,
                    technique: t
                }),
                p = e => (0, n.r)("/rpc/product-review-rating-system-category-product-mapping-rpc/get-product-rating-categories-for-edit-review", {
                    reviewId: e
                }),
                h = e => (0, n.r)("/rpc/product-reviews-rpc/validate-instagram-url", {
                    instagramUrl: e
                }),
                m = e => (0, n.r)("/rpc/product-review-keywords-rpc/get-keywords-by-language", {
                    locale: e
                }),
                g = e => (0, n.r)("/rpc/product-reviews-rpc/get-product-review-filters", {
                    productId: e
                }),
                v = e => (0, n.r)("/rpc/product-reviews-rpc/review-product", e),
                b = e => (0, n.r)("/rpc/product-reviews-rpc/delete-review", {
                    reviewId: e
                }),
                f = (e, t) => (0, n.r)("/rpc/product-review-keywords-rpc/update-keyword-counters", {
                    keywords: e,
                    locale: t
                }),
                _ = e => (0, n.r)("/rpc/product-reviews-rpc/get-review-overview-data", {
                    productId: e
                })
        },
        14735: (e, t, i) => {
            "use strict";
            i.d(t, {
                A0: () => f,
                Eq: () => d,
                FT: () => h,
                OS: () => b,
                Zj: () => r,
                je: () => l,
                kE: () => m,
                l8: () => v,
                mj: () => o,
                q0: () => p,
                tW: () => u
            });
            var n = i(50361),
                s = i.n(n);
            const o = {
                stars: {
                    displayName: dlang("reviews", "Stars"),
                    dataSet: "stars",
                    multiSelect: !0,
                    dataModel: {
                        name: "displayName",
                        value: "value",
                        key: "value",
                        id: "value"
                    },
                    description: dlang("reviews", "All stars")
                },
                sizes: {
                    displayName: dlang("reviews", "Sizes"),
                    dataSet: "sizes",
                    multiSelect: !0,
                    dataModel: {
                        name: "this",
                        value: "this",
                        key: "sizes",
                        id: "this"
                    },
                    description: dlang("reviews", "All sizes")
                },
                techniques: {
                    displayName: dlang("reviews", "Techniques"),
                    dataSet: "techniques",
                    multiSelect: !0,
                    dataModel: {
                        name: "displayName",
                        value: "code",
                        key: "technique",
                        id: "code"
                    },
                    description: dlang("reviews", "All techniques")
                },
                colors: {
                    displayName: dlang("reviews", "Colors"),
                    dataSet: "colors",
                    multiSelect: !0,
                    customSelectItems: !0,
                    dataModel: {
                        name: "displayName",
                        value: "displayName",
                        colorCodes: "colorCodes",
                        key: "colors",
                        id: "displayName"
                    },
                    description: dlang("reviews", "All colors")
                },
                ratingCategoryCriterionIds: {
                    displayName: dlang("reviews", "Ratings"),
                    dataSet: "ratingCategories",
                    multiSelect: !0,
                    dataModel: {
                        name: "displayName",
                        value: "categoryId",
                        id: "categoryId",
                        key: "ratingCategories",
                        items: "criteria"
                    },
                    nestedDataModel: {
                        value: "criterionId",
                        id: "criterionId",
                        name: "displayName"
                    },
                    isNested: !0,
                    description: dlang("reviews", "All ratings")
                }
            };

            function r() {
                return [...Object.keys({
                    ...o
                }).map((e => ({
                    filterType: "selectFilters",
                    key: e
                }))), ...Object.keys({
                    ...p
                }).map((e => ({
                    filterType: "checkboxFilters",
                    key: e
                }))), {
                    key: "sortBy",
                    filterType: "sortByFilter"
                }]
            }

            function l(e) {
                const t = function() {
                        const e = {};
                        return Object.keys(o).forEach((t => {
                            const i = o[t];
                            e[i.dataSet] = t
                        })), e
                    }(),
                    i = {};
                for (const [n, s] of Object.entries(e)) {
                    const e = o[t[n]];
                    if (s.length <= 1 && "ratingCategories" !== n) {
                        delete o[t[n]];
                        continue
                    }
                    const r = [];
                    s.forEach((t => {
                        const i = {};
                        for (const [n, s] of Object.entries(null == e ? void 0 : e.dataModel)) i[n] = "this" === s ? t : "key" === n ? s : t[s];
                        const n = null == e ? void 0 : e.nestedDataModel;
                        n && (i.items = i.items.map((e => ({
                            value: e[n.value],
                            name: e[n.name],
                            id: e[n.id]
                        })))), r.push(i)
                    }));
                    const l = o[t[n]].defaultData;
                    i[t[n]] = [], l && i[t[n]].push(l), i[t[n]] = [...i[t[n]], ...r]
                }
                return i
            }

            function u(e) {
                return o[e]
            }

            function d() {
                const e = [];
                for (const [t, i] of Object.entries(o)) e.push({
                    name: i.displayName,
                    key: t,
                    description: i.description
                });
                return e
            }
            const p = {
                    showOnlyWithPictures: {
                        displayName: dlang("reviews", "Show reviews only with images")
                    },
                    showOnlyWithText: {
                        displayName: dlang("reviews", "Hide reviews without text")
                    }
                },
                h = [{
                    value: "most_recent",
                    displayName: dlang("reviews", "Most recent")
                }, {
                    value: "most_helpful",
                    displayName: dlang("reviews", "Most helpful")
                }],
                m = {
                    SORT_BY_FILTERS: "sortByFilter",
                    CHECKBOX_FILTERS: "checkboxFilters",
                    SELECT_FILTERS: "selectFilters"
                },
                g = {
                    techniques: [],
                    sizes: [],
                    colors: [],
                    stars: [],
                    ratingCategoryCriterionIds: [],
                    showOnlyWithText: !1,
                    showOnlyWithPictures: !1,
                    sortBy: "most_recent"
                };

            function v(e) {
                return e ? s()(g[e]) : s()(g)
            }

            function b() {
                const e = [];
                for (const [t, i] of Object.entries(o)) i.multiSelect && e.push(t);
                return e
            }
            const f = [{
                displayName: dlang("reviews", "1 star"),
                value: 1
            }, {
                displayName: dlang("reviews", "2 stars"),
                value: 2
            }, {
                displayName: dlang("reviews", "3 stars"),
                value: 3
            }, {
                displayName: dlang("reviews", "4 stars"),
                value: 4
            }, {
                displayName: dlang("reviews", "5 stars"),
                value: 5
            }]
        },
        87581: (e, t, i) => {
            "use strict";
            i.r(t);
            var n = i(35702),
                s = i(99553),
                o = i(90227),
                r = i(14735),
                l = i(11072),
                u = i(87919);
            t.default = {
                namespaced: !0,
                state: {
                    product: {},
                    reviews: [],
                    reviewsBusy: !1,
                    totalReviews: 0,
                    totalFilteredReviews: 0,
                    filters: {
                        productId: null,
                        reviewableItemType: "product",
                        page: 1,
                        perPage: 4,
                        ...(0, r.l8)()
                    },
                    pagination: {
                        currentPage: 1,
                        totalPages: 1
                    },
                    isMobileLayout: !1,
                    keywordList: [],
                    reviewFilterData: [],
                    reviewFilterDataBusy: [],
                    saveReviewBusy: !1,
                    reviewOverviewData: {},
                    reviewOverviewDataBusy: !1,
                    ratingCategories: [],
                    videoReview: {}
                },
                mutations: {
                    [n.Gr]: (e, t) => {
                        e.product = {
                            ...t
                        }, e.filters.productId = t.getId()
                    },
                    [n.Y4]: e => {
                        e.isMobileLayout = o.k.isWindowSmallerThan(o.k.SIZES.LG)
                    },
                    [n.iB]: (e, t) => e.reviews = t,
                    [n.L7]: (e, t) => e.videoReview = t,
                    [n.Jr]: (e, t) => {
                        let {
                            page: i,
                            pages: n
                        } = t;
                        e.pagination = {
                            currentPage: i,
                            totalPages: n
                        }
                    },
                    [n.yH]: (e, t) => {
                        let {
                            page: i,
                            totalCountBeforeFilters: n,
                            total: s
                        } = t;
                        e.filters.page = i, e.totalReviews = n, e.totalFilteredReviews = s
                    },
                    [n.YA]: (e, t) => {
                        e.pagination.currentPage = t, e.filters.page = t
                    },
                    [n._t]: (e, t) => e.reviewsBusy = t,
                    [n.Wf]: (e, t) => {
                        e.ratingCategories = t.ratingCategories, delete t.languages, e.reviewFilterData = (0, r.je)({
                            ...t,
                            stars: r.A0
                        })
                    },
                    [n.QX]: (e, t) => e.filters = {
                        ...e.filters,
                        ...t
                    },
                    [n.D2]: (e, t) => e.reviewFilterDataBusy = t,
                    [n.Y$]: (e, t) => e.saveReviewBusy = t,
                    [n.gL]: (e, t) => e.reviewOverviewData = t,
                    [n.a7]: (e, t) => e.reviewOverviewDataBusy = t
                },
                actions: {
                    async [n.Yd](e, t) {
                        let {
                            state: i,
                            commit: o
                        } = e;
                        t || o(n.YA, 1), o(n._t, !0);
                        const r = (0, u.ex)(i.filters, i.ratingCategories),
                            {
                                reviews: l,
                                videoReview: d
                            } = await s.mk(r);
                        o(n._t, !1), o(n.iB, l.items), o(n.L7, d), o(n.Jr, l), o(n.yH, l)
                    },
                    async [n.jM](e) {
                        let {
                            state: t
                        } = e;
                        const i = l.A.locale,
                            {
                                success: n,
                                keywords: o
                            } = await s.du(i);
                        n && (t.keywordList = o)
                    },
                    async [n.jf](e) {
                        let {
                            state: t,
                            commit: i
                        } = e;
                        i(n.D2, !0);
                        const o = await s.Zx(t.product.getId());
                        i(n.D2, !1), i(n.Wf, o)
                    },
                    async [n.tu](e, t) {
                        let {
                            commit: i,
                            dispatch: o
                        } = e, {
                            review: r,
                            callback: l,
                            isAddOnly: d
                        } = t;
                        i(n.Y$, !0);
                        const {
                            isSubmitted: p,
                            reason: h
                        } = await s.eZ(r);
                        i(n.Y$, !1), p ? ((0, u.Pc)("change-review-modal", {
                            type: "success"
                        }), l && l(), d || o(n.Yd)) : (0, u.Pc)("change-review-modal", {
                            type: "error",
                            data: h
                        })
                    },
                    async [n.nM](e, t) {
                        let {
                            dispatch: i
                        } = e;
                        const {
                            success: o
                        } = await s.i0(t);
                        o && ((0, u.Pc)("close-review-modal"), i(n.Yd))
                    },
                    async [n.O5](e) {
                        let {
                            state: t,
                            commit: i
                        } = e;
                        i(n.a7, !0);
                        const {
                            success: o,
                            data: r
                        } = await s.eq(t.product.getId());
                        i(n.a7, !1), o && i(n.gL, r)
                    }
                },
                getters: {
                    [n.O7]: e => e.product,
                    [n.u8]: e => e.filters,
                    [n.F]: e => e.isMobileLayout,
                    [n.A9]: e => e.reviews,
                    [n.oA]: e => e.pagination,
                    [n.Vt]: e => e.totalReviews,
                    [n.YV]: e => e.totalFilteredReviews,
                    [n.dM]: e => e.reviewsBusy,
                    [n.q4]: e => e.ratingCategories,
                    [n.Qn]: e => e.keywordList,
                    [n.uD]: e => e.reviewFilterData,
                    [n.s6]: e => e.reviewFilterDataBusy,
                    [n.CW]: e => e.saveReviewBusy,
                    [n.QE]: e => e.reviewOverviewData,
                    [n.E7]: e => e.reviewOverviewDataBusy,
                    [n.YM]: e => e.videoReview
                }
            }
        },
        35702: (e, t, i) => {
            "use strict";
            i.d(t, {
                A9: () => z,
                CW: () => L,
                D2: () => g,
                E7: () => U,
                F: () => E,
                Gr: () => s,
                Jr: () => l,
                L7: () => _,
                O5: () => F,
                O7: () => N,
                QE: () => x,
                QX: () => m,
                Qn: () => G,
                Vt: () => O,
                Wf: () => h,
                Y$: () => v,
                Y4: () => o,
                YA: () => d,
                YM: () => j,
                YV: () => R,
                Yd: () => w,
                _t: () => p,
                a7: () => f,
                dM: () => M,
                gL: () => b,
                iB: () => r,
                jM: () => P,
                jf: () => C,
                nM: () => T,
                oA: () => I,
                q4: () => D,
                rE: () => n,
                s6: () => B,
                tT: () => y,
                tu: () => S,
                u8: () => k,
                uD: () => A,
                yH: () => u
            });
            const n = "productReviews",
                s = "mutation/setProduct",
                o = "mutation/setIsMobileLayout",
                r = "mutation/setReviews",
                l = "mutation/setPagination",
                u = "mutation/setReviewsCountData",
                d = "mutation/setPage",
                p = "mutation/setReviewsBusy",
                h = "mutation/setReviewFilterData",
                m = "mutation/setReviewFilters",
                g = "mutation/setReviewFilterDataBusy",
                v = "mutation/setSaveReviewBusy",
                b = "mutation/setReviewOverviewData",
                f = "mutation/setReviewOverviewDataBusy",
                _ = "mutation/setVideoReview",
                w = "action/actionGetProductReviews",
                y = "action/actionGetRatingCategories",
                P = "action/actionGetKeywordsByLanguage",
                C = "action/actionGetReviewFilters",
                S = "action/actionSaveReview",
                T = "action/actionDeleteReview",
                F = "action/actionGetReviewOverviewData",
                N = "getter/product",
                k = "getter/filters",
                E = "getter/isMobileLayout",
                z = "getter/reviews",
                I = "getter/pagination",
                O = "getter/totalReviews",
                R = "getter/totalFilteredReviews",
                M = "getter/reviewsBusy",
                D = "getter/ratingCategories",
                G = "getter/keywordList",
                A = "getter/reviewFilterData",
                B = "getter/reviewFilterDataBusy",
                L = "getter/saveReviewBusy",
                x = "getter/reviewOverviewData",
                U = "getter/reviewOverviewDataBusy",
                j = "getter/videoReview"
        },
        38009: (e, t, i) => {
            "use strict";
            i.d(t, {
                y: () => m
            });
            var n, s, o = i(4221),
                r = i(15425);
            const l = () => Promise.all([i.e(72529), i.e(15248), i.e(91642), i.e(33348), i.e(65951), i.e(97452), i.e(87457), i.e(84938), i.e(52481), i.e(83302), i.e(23485), i.e(58983), i.e(18806), i.e(9152)]).then(i.bind(i, 22549)),
                u = () => i.e(73557).then(i.bind(i, 90500)),
                d = Object.freeze({
                    "catalog.category": "/custom/:slugOne/:slugTwo?",
                    "catalog.index": "/custom-products",
                    "catalog.product": "/custom/:slugOne/:slugTwo?/:productSlug?"
                }),
                p = (null === (n = window.PF) || void 0 === n || null === (s = n.RawGlobals) || void 0 === s ? void 0 : s.VueRouterRoutes) || d;

            function h(e) {
                return Object.keys(e).map((t => {
                    let i = l;
                    return t === r.ej && (i = u), {
                        name: t,
                        component: i,
                        path: e[t],
                        meta: {
                            scrollToTop: !0
                        }
                    }
                }))
            }

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "history";
                return {
                    routes: (0, o.m)(h(p)),
                    scrollBehavior(e) {
                        if (e.meta.scrollToTop) return {
                            x: 0,
                            y: 0
                        }
                    },
                    mode: e
                }
            }
        },
        16623: (e, t, i) => {
            "use strict";
            i.d(t, {
                WX: () => o,
                YK: () => l,
                dA: () => r
            });
            var n = i(65311),
                s = i.n(n);
            const o = {
                    AUTH_MENU_OPEN_CLASS: "menu-open--auth",
                    NOTIFICATIONS_MENU_OPEN_CLASS: "menu-open--right",
                    PREMIUM_MENU_OPEN_CLASS: "menu-open--premium",
                    MENU_OPEN_CLASS: "menu-open",
                    MENU_OPEN_LEFT_CLASS: "menu-open--left"
                },
                r = Object.values(o),
                l = Class({
                    classes: "menu-open menu-open--left menu-open--right menu-open--auth menu-open--premium",
                    body: null,
                    menuButton: null,
                    notificationsButton: null,
                    authMenuButton: null,
                    __construct: function() {
                        this.body = s()(document.body), this.menuButton = s()(".navbar-toggle"), this.notificationsButton = s()("#toggle-customer-notifications"), this.authMenuButton = s()(".toggle-auth"), this.menuButton.on("click", this._closeMenu.bind(this, "left")), this.notificationsButton.on("click", this._closeMenu.bind(this, "right")), this.body.on("click touchstart", this._onBodyClick.bind(this)), this.authMenuButton.on("click", this._onAuthToggle.bind(this)), this._reRenderMenu()
                    },
                    _reRenderMenu: function() {
                        if (!s()("#userbar").find(".interface-toggle").length && s()("#nav, #nav-b2c").addClass("no-user-bar-header"), s()(".submenu ul li ul").find("li.active").length > 0 && s()("ul#nav li.has-submenu, ul#nav-b2c li.has-submenu").addClass("active"), this._isMobile()) {
                            var e = s()(".submenu ul li.has-submenu ul").find("li.active");
                            e.length > 0 && e.parents(".has-submenu").addClass("open")
                        }
                    },
                    _closeMenu: function(e, t) {
                        t.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), s().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--" + e)
                    },
                    _onBodyClick: function(e) {
                        s()(e.target).hasClass("menu-open") && (e.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), s().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--left"))
                    },
                    _onAuthToggle: function(e) {
                        e.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), s().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--auth")
                    },
                    _isMobile: function() {
                        return s()(window).innerWidth() < 768
                    }
                });
            l.init = function() {
                s()(document).on("ready", (function() {
                    new l
                }))
            }, window && ((globalThis || {}).PFComponentsMenu = l)
        },
        12341: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                x: () => PFComponentsSizeGuide
            });
            var _app_js_utils_util_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44353),
                _app_js_components_size_guide_component_product_size_guide_1_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93756),
                _app_js_components_component_tabs_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99574);
            const PFComponentsSizeGuide = Class({
                _sizes: [],
                _convertedSizes: {},
                __construct: function(e) {
                    e.length && (this._tablesData = e, this._tables = this._tablesData.reduce(this._setTables.bind(this), {}))
                },
                _setTables: function(e, t) {
                    return t.data ? (t.productSizes = t.productSizes.sort(_app_js_utils_util_product__WEBPACK_IMPORTED_MODULE_0__.y.sizeSortingCallback), t.data = this.getConvertedSizes(t.data, PFComponentsSizeGuide.TYPE_INCHES), t.switcherTabs = t.hasSwitcher && t.useSizeConversion ? this._getSwitcherTabs() : null, e[t.name] = new _app_js_components_size_guide_component_product_size_guide_1_table__WEBPACK_IMPORTED_MODULE_1__.u(t), e) : e
                },
                _getSwitcherTabs: function() {
                    return new _app_js_components_component_tabs_0__WEBPACK_IMPORTED_MODULE_2__.w("secondary").add({
                        caption: dlang("products", "Inches"),
                        onclick: this._switchTableData.bind(this, PFComponentsSizeGuide.TYPE_INCHES),
                        isActive: !0
                    }).add({
                        caption: dlang("products", "Centimeters"),
                        onclick: this._switchTableData.bind(this, PFComponentsSizeGuide.TYPE_CM)
                    })
                },
                _switchTableData: function(e) {
                    Object.values(this._tables).filter((function(e) {
                        return e.getUseSizeConversion()
                    })).forEach((t => {
                        t.switchUnits(e, this.getConvertedSizes)
                    }))
                },
                getTable: function(e) {
                    return this._tables[e] || null
                },
                getConvertedSizes(e, t) {
                    return Object.keys(e).reduce(((i, n) => {
                        var s, o, r, l, u, d;
                        const p = e[n].type;
                        return this._convertedSizes[p] = null !== (s = this._convertedSizes[p]) && void 0 !== s ? s : {}, this._convertedSizes[p][n] = null !== (o = this._convertedSizes[p][n]) && void 0 !== o ? o : e[n], null !== (r = this._convertedSizes) && void 0 !== r && null !== (l = r[t]) && void 0 !== l && l[n] ? {
                            ...i,
                            [n]: this._convertedSizes[t][n]
                        } : (i[n] = {
                            type: PFComponentsSizeGuide.hasConversion(p, t) ? t : p,
                            values: {}
                        }, Object.keys(e[n].values).forEach((function(s) {
                            i[n].values[s] = PFComponentsSizeGuide.convertValues(e[n].values[s], p, t)
                        })), this._convertedSizes[t] = null !== (u = this._convertedSizes[t]) && void 0 !== u ? u : {}, this._convertedSizes[t][n] = null !== (d = this._convertedSizes[t][n]) && void 0 !== d ? d : i[n], i)
                    }), {})
                }
            });
            PFComponentsSizeGuide.hasConversion = function(e, t) {
                return !!PFComponentsSizeGuide.conversions.hasOwnProperty(e) && PFComponentsSizeGuide.conversions[e].hasOwnProperty(t)
            }, PFComponentsSizeGuide.convertValues = function(e, t, i) {
                if (t === i) return e;
                if (!PFComponentsSizeGuide.hasConversion(t, i)) return e;
                const n = PFComponentsSizeGuide.conversions[t][i];
                return e.map((function(e) {
                    return e && 0 !== e.length ? (e = PFComponentsSizeGuide.convertFractionSymbolToDigits(e), parseFloat((e * n).toFixed(2))) : e
                }))
            }, PFComponentsSizeGuide.convertFractionSymbolToDigits = function(value) {
                if (isNaN(value) && "string" == typeof value) {
                    const parts = [],
                        fractions = PFComponentsSizeGuide.allUnicodeFractions;
                    value.replace(/(\d+)\/(\d+)/gi, (e => (parts.push(e), ""))).replace(/[Â½â…“â…”Â¼Â¾â…•â…–â…—â…˜â…™â…šâ…â…›â…œâ…â…žâ…‘â…’]/gi, (e => (fractions[e] && parts.push(fractions[e]), ""))).replace(/\d+/gi, (e => (parts.push(e), ""))), value = parts.reduce(((a, c) => {
                        const num = parseFloat(eval(c));
                        return "number" == typeof num && num !== 1 / 0 && (a += num), a
                    }), 0)
                } else value = parseFloat(value), value = isNaN(value) ? 0 : value;
                return value
            }, PFComponentsSizeGuide.Fractions = {
                " ": .0625,
                "â…›": .187,
                "Â¼": .3125,
                "â…œ": .4375,
                "Â½": .5625,
                "â…": .6875,
                "Â¾": .8125,
                "â…ž": .9375
            }, PFComponentsSizeGuide.allUnicodeFractions = {
                "Â½": .5,
                "â…“": 1 / 3,
                "â…”": 2 / 3,
                "Â¼": 1 / 4,
                "Â¾": 3 / 4,
                "â…•": .2,
                "â…–": .4,
                "â…—": .6,
                "â…˜": .8,
                "â…™": 1 / 6,
                "â…š": 5 / 6,
                "â…": 1 / 7,
                "â…›": 1 / 8,
                "â…œ": 3 / 8,
                "â…": 5 / 8,
                "â…ž": 7 / 8,
                "â…‘": 1 / 9,
                "â…’": .1
            }, PFComponentsSizeGuide.TYPE_INCHES = "inches", PFComponentsSizeGuide.TYPE_LBS = "lbs", PFComponentsSizeGuide.TYPE_KG = "kg", PFComponentsSizeGuide.TYPE_CM = "cm", PFComponentsSizeGuide.TYPE_TOLERANCE = "tolerance", PFComponentsSizeGuide.TYPE_NONE = "none", PFComponentsSizeGuide.types = {}, PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_INCHES] = "Inches", PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_LBS] = "Lbs", PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_KG] = "Kg", PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_CM] = "Cm", PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_TOLERANCE] = "Tolerance", PFComponentsSizeGuide.types[PFComponentsSizeGuide.TYPE_NONE] = "Do not provide", PFComponentsSizeGuide.conversions = {}, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_INCHES] = {}, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_INCHES][PFComponentsSizeGuide.TYPE_CM] = 2.54, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_CM] = {}, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_CM][PFComponentsSizeGuide.TYPE_INCHES] = 1 / 2.54, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_LBS] = {}, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_LBS][PFComponentsSizeGuide.TYPE_KG] = .453592, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_KG] = {}, PFComponentsSizeGuide.conversions[PFComponentsSizeGuide.TYPE_KG][PFComponentsSizeGuide.TYPE_LBS] = 1 / .453592, window && ((globalThis || {}).PFComponentsSizeGuide = PFComponentsSizeGuide)
        },
        93756: (e, t, i) => {
            "use strict";
            i.d(t, {
                u: () => u
            });
            var n = i(12341),
                s = i(9651);
            const o = Class({
                __construct: function(e) {
                    this._sizeGuideRaw = e.sizeTypeData, this._productSizes = e.productSizes, this._title = e.sizeTitle, this._headColumns = e.headColumns, this._tableHead = e.tableHead, this.node = tag("tr"), this._render()
                },
                _render: function() {
                    s.U.clearNode(this.node), this._headColumns ? this._headColumns.forEach(this._renderRowTitle.bind(this)) : this._getColumnTitle().append(this._tableHead), this._productSizes.forEach(this._renderCellValues)
                },
                _renderRowTitle: function(e, t) {
                    tag("td", {
                        text: this._title,
                        className: 0 === t ? "size-guide__table-first-row" : ""
                    }).append(this.node)
                },
                _getColumnTitle: function() {
                    return tag("td", {
                        text: this._title
                    })
                },
                _renderCellValues: function(e) {
                    tag("td", {
                        text: this._sizeExists(e) ? this._sizeGuideRaw.values[e].map(this._mapSizeGuideValues.bind(this, this._sizeGuideRaw.type)).join(" - ") : "-"
                    }).append(this.node)
                },
                _sizeExists: function(e) {
                    return this._sizeGuideRaw && this._sizeGuideRaw.values[e] && this._sizeGuideRaw.values[e].join("").length
                },
                _mapSizeGuideValues: function(e, t) {
                    return t && 0 !== t.length ? e === n.x.TYPE_INCHES ? u.convertToFractions(t) : e === n.x.TYPE_CM ? u.convertToDecimal(t) : e === n.x.TYPE_NONE ? t : parseFloat(t).toFixed(0) : t
                },
                getNode: function() {
                    return this.node
                }
            }, s.U.Base);
            o.Par = Class({
                sizeTitle: "",
                sizeTypeData: {},
                productSizes: {},
                headColumns: null,
                tableHead: null
            }), window && ((globalThis || {}).PFComponentsSizeGuideTableCells = o);
            var r = i(78009),
                l = i(48776);
            const u = Class({
                _sizes: [],
                _valueInputs: [],
                _sizeGuideValues: {},
                _convertedSizes: {},
                __construct: function(e) {
                    Object.keys(e.data) && (this._sizeGuideValues = e.data, this._headColumns = e.headColumns, this._isSizeOnSide = e.isSizeOnSide, this._productSizes = e.productSizes, this._switcherTabs = e.switcherTabs, this._useSizeConversion = e.useSizeConversion, this._isOldSizeGuide = e.isOldSizeGuide, this._tableHead = tag("tr"), this._tableBody = tag("tbody"), this.node = tag("div"), this.sizeGuideTable = tag("div", "size-guide wysiwyg", [tag("table", "size-guide__table" + (this._isOldSizeGuide ? "" : " size-guide__new"), [tag("thead", null, [this._tableHead]), this._tableBody])]), this._render())
                },
                _render: function() {
                    this._switcherTabs && this._switcherTabs.append(this.node), this._renderTable(), this.sizeGuideTable.append(this.node)
                },
                _renderTable: function() {
                    this._renderHead(), this._renderBody()
                },
                _renderHead: function() {
                    s.U.clearNode(this._tableHead), s.U.clearNode(this._tableBody), Object.values(this._headColumns).forEach(function(e) {
                        tag(e.tag, {
                            text: e.text
                        }).append(this._tableHead)
                    }.bind(this)), this._renderSizeHeadItems()
                },
                _renderBody: function() {
                    Object.keys(this._sizeGuideValues).forEach(function(e) {
                        var t = new o.Par;
                        t.sizeTitle = e, t.sizeTypeData = this._sizeGuideValues[e], t.productSizes = this._productSizes, this._isSizeOnSide ? t.tableHead = this._tableHead : t.headColumns = this._headColumns;
                        var i = new o(t);
                        if (this._valueInputs.push(i), this._isSizeOnSide) {
                            var n = Object.values(i.getNode().childNodes);
                            Object.values(this._tableBody.childNodes).forEach((function(e, t) {
                                n[t].append(e)
                            }))
                        } else i.getNode().append(this._tableBody)
                    }.bind(this))
                },
                _renderSizeHeadItems: function() {
                    this._productSizes.forEach(function(e) {
                        var t = tag("td", null, e);
                        this._isSizeOnSide ? tag("tr", null, [t]).append(this._tableBody) : t.append(this._tableHead)
                    }.bind(this))
                },
                setSizeGuideValues: function(e) {
                    this._sizeGuideValues = e
                },
                switchUnits: function(e, t) {
                    this.sendAmplitudeOnTabChange(e), this.setSizeGuideValues(t(this._sizeGuideValues, e)), this._renderTable()
                },
                sendAmplitudeOnTabChange(e) {
                    e && l.ZP.push({
                        event: l.Bi,
                        category: r.dB.getCatalogTypeName(),
                        location: "bottom",
                        name: e
                    })
                },
                getUseSizeConversion: function() {
                    return this._useSizeConversion
                }
            }, s.U.Base);
            u.convertToDecimal = function(e) {
                const t = parseFloat(e),
                    i = Math.round(10 * t) / 10,
                    n = Math.round(i % 1 * 10);
                return i.toFixed(n > 1 && n < 9 ? 1 : 0)
            }, u.convertToFractions = function(e) {
                var t = String(e).split("."),
                    i = parseInt(t[0]);
                if (!t[1]) return e;
                var s = parseFloat("0." + t[1]),
                    o = 0;
                for (var r in n.x.Fractions) {
                    if (s < n.x.Fractions[r]) {
                        o = r;
                        break
                    }
                }
                return 0 === o && i && (i++, o = ""), (i > 0 ? i + " " : "") + o
            }, u.Par = Class({
                name: "",
                data: {},
                headColumns: [{
                    tag: "td",
                    text: ""
                }],
                isSizeOnSide: !1,
                productSizes: [],
                useSizeConversion: !1,
                hasSwitcher: !1,
                switcherTabs: null,
                isOldSizeGuide: !1
            }), window && ((globalThis || {}).PFComponentsSizeGuideTable = u)
        },
        29738: (e, t, i) => {
            "use strict";
            i.d(t, {
                G: () => r
            });
            var n = i(9651),
                s = i(47586);
            const o = Class({
                __construct: function(e) {
                    this.reference = e, this.reference.setPopupSeen(), this.reference.dateFormat() >= this.reference.dateFormat("2016-12-13") && this.reference.dateFormat() <= this.reference.dateFormat("2016-12-23") ? this._renderLayoutChange() : this._render()
                },
                _render: function() {
                    this.content = (0, n.U)({
                        tag: "div",
                        els: [{
                            tag: "img",
                            src: "/static/images/popups/xmas-popup.svg",
                            className: "header-image"
                        }, {
                            tag: "div",
                            className: "row",
                            els: [{
                                tag: "div",
                                className: "whitesmoke",
                                els: [{
                                    tag: "h5",
                                    className: "text-center",
                                    text: "We're switching to full-on holiday mode!"
                                }, {
                                    tag: "p",
                                    className: "text-center",
                                    text: "If you're ordering a gift that needs to make it under the tree, be sure to check our order deadlines"
                                }, {
                                    tag: "div",
                                    className: "text-center button-container",
                                    els: [{
                                        tag: "a",
                                        href: "https://www.printful.com/holiday-order-deadlines",
                                        attr: {
                                            target: "_blank"
                                        },
                                        className: "button small red cwhite",
                                        text: "Order deadlines",
                                        onclick: $.proxy((function() {
                                            this.modal.hide()
                                        }), this)
                                    }]
                                }]
                            }]
                        }]
                    }), this.modal = new s.Z({
                        nodeClass: "holiday-popup",
                        onClose: this._close
                    }), this.modal.setContent(this.content), this.modal.show()
                },
                _renderLayoutChange: function() {
                    this.content = (0, n.U)({
                        tag: "div",
                        els: [{
                            tag: "img",
                            src: "/static/images/popups/xmas-popup.svg",
                            className: "header-image"
                        }, {
                            tag: "div",
                            className: "row",
                            els: [{
                                tag: "div",
                                className: "whitesmoke",
                                els: [{
                                    tag: "h5",
                                    className: "text-center",
                                    text: "Santaâ€™s already packed up his sleigh"
                                }, {
                                    tag: "p",
                                    className: "text-center",
                                    text: "Our last holiday order-by date has passed, so we canâ€™t guarantee your orders will make it under the tree."
                                }]
                            }]
                        }]
                    }), this.modal = new s.Z({
                        nodeClass: "holiday-popup",
                        onClose: this._close
                    }), this.modal.setContent(this.content), this.modal.show()
                },
                _close: function() {
                    this.reference.callCallback()
                }
            }, n.U.Base);
            (globalThis || {}).PFPopupHoliday = o;
            const r = Class({
                namespace: "popup",
                endDate: !1,
                startDate: !1,
                __construct: function(e, t) {
                    this.cb = t || !1, this.popup = e || null, this._create()
                },
                setPopupSeen: function() {
                    localStorage && localStorage.setItem(this.namespace + this.popup, 1)
                },
                callCallback: function() {
                    return this.cb && this.cb.call(this.cb), !1
                },
                _create: function() {
                    if (localStorage) {
                        if (1 == localStorage.getItem(this.namespace + this.popup)) return this.callCallback(), !1;
                        if (this.popup === r.HOLIDAY_POPUP) {
                            if (this.endDate = this.dateFormat("2016-12-23"), this.startDate = this.dateFormat("2016-12-06"), !this.checkDeadline()) return this.callCallback(), !1;
                            new o(this)
                        }
                    }
                },
                dateFormat: function(e) {
                    return e ? new Date(e).getTime() / 1e3 : (new Date).getTime() / 1e3
                },
                checkDeadline: function() {
                    return !!(this.startDate && this.endDate && this.dateFormat() >= this.startDate && this.endDate >= this.dateFormat())
                },
                _clearStorage: function() {
                    localStorage && localStorage.removeItem(this.namespace + this.popup)
                }
            });
            r.HOLIDAY_POPUP = "holiday", (globalThis || {}).PFPopup = r
        },
        8653: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => h
            });
            var n = i(8627),
                s = i(87457),
                o = i(84294),
                r = i(39697);
            const l = Class({
                store: null,
                activeCategoryId: 0,
                activeStoreId: null,
                enableSidebar: !0,
                enableCategoriesSidebar: !0,
                enableProductsSidebar: !0,
                enableTabs: !0,
                enableTitle: !0,
                enableStickyHeader: !0,
                enableProductBanners: !1,
                customTitle: "",
                enableSearch: !1,
                searchType: r.z.SEARCH_TYPE_PRODUCTS,
                enableBreadcrumbs: !0,
                breadcrumbsIndexCategoryTitle: dlang("products", "Products"),
                isOrderFlow: !1,
                isMockupGenerator: !1,
                isPush: !1,
                isClean: !1,
                onProductChoose: null,
                onCategoryChoose: null,
                containerClass: "",
                productCatalogClass: "",
                textBlockData: {},
                banners: [],
                bannersPerPage: null,
                headingNode: null,
                breadcrumbsNode: null,
                allowedFulfillmentRegions: [],
                isRenderRequired: !0,
                pagNumber: null,
                isProductTemplate: !1,
                isFeaturedReviews: !1,
                featuredReviews: {},
                sellingRegion: null,
                enableFilterHeader: !1,
                isEmbedded: !1,
                isNewCatalogAvailable: !1,
                isProductPickable: !1,
                __construct: function() {
                    this.store = new o.PFProductsCatalogUtilsStore
                },
                isStickyHeaderEnabled: function() {
                    return this.enableBreadcrumbs && !this.isClean && !this.isOrderFlow
                },
                isEmbeddedView: function() {
                    return this.isPush || this.isEmbedded
                }
            });
            window && ((globalThis || {}).PFProductsCatalogPar = l);
            var u = i(76731),
                d = i(26750),
                p = i(78009);
            const h = Class({
                params: null,
                catalogParams: null,
                productsCatalog: null,
                router: null,
                __construct: function(e) {
                    this.params = e, this._initCatalogParams(), this.catalogParams.isRenderRequired = !1, this.params.productCatalogClass && (this.catalogParams.productCatalogClass = this.params.productCatalogClass), this.productsCatalog = new u.o(this.catalogParams), this.catalogParams.isRenderRequired = !0, this._initRouter(this.getActiveCategory(), this.getActiveProduct())
                },
                updateParams: function(e) {
                    this.params.activeCategoryId = e.activeCategoryId || null
                },
                _initCatalogParams: function() {
                    var e = new l;
                    this.params.store && (e.store = this.params.store), e.store.setActiveCategoryId(this.params.activeCategoryId), e.activeStoreId = this.params.storeId, e.store.setCurrency(this.params.currency), e.allowedFulfillmentRegions = this.params.allowedFulfillmentRegions, e.onProductChoose = this.params.onProductChoose, e.onCategoryChoose = this.params.onCategoryChoose, e.isOrderFlow = this.params.isOrderFlow, e.isPush = this.params.isPush, e.customTitle = this.params.title, e.isClean = this.params.isClean, e.storeProductLimitations = this.params.storeProductLimitations, e.isProductTemplate = this.params.isProductTemplate, e.isEmbedded = this.params.isEmbedded, e.banners = this.params.banners, e.bannersPerPage = this.params.bannersPerPage, e.headingNode = this.params.headingNode, e.breadcrumbsNode = this.params.breadcrumbsNode, e.isFeaturedReviews = this.params.isFeaturedReviews, e.sellingRegion = this.params.sellingRegion, e.searchBox = this.params.searchBox, e.isNewCatalogAvailable = this.params.isNewCatalogAvailable, e.isProductPickable = this.params.isProductPickable, this.params.isOrderFlow && (e.enableTabs = !1, e.enableCategoriesSidebar = !0, e.enableTitle = !1, e.enableSearch = !0, e.enableFilterHeader = !0, e.breadcrumbsIndexCategoryTitle = dclang("products", "Root category name", "All departments"), this.params.isAnonymousOrderFlow && (e.enableBreadcrumbs = !1)), this.params.isMockupGenerator && (e.isMockupGenerator = this.params.isMockupGenerator, e.enableSearch = !1, e.enableTabs = !1, e.searchType = r.z.SEARCH_TYPE_PRODUCTS_GENERATOR, e.breadcrumbsIndexCategoryTitle = dclang("products", "Root category name", "All departments")), this.params.isOrderFlow || this.params.isMockupGenerator || (e.enableProductBanners = !0), this.params.isClean && (e.enableCategoriesSidebar = !!this.params.enableCategoriesSidebar, e.enableProductsSidebar = !1, e.enableTabs = !1, e.enableSearch = !1, e.enableTitle = !1), this.params.isProductTemplate && (e.enableTitle = !1, e.enableProductBanners = !1, e.enableTabs = !1, e.enableSearch = !0, e.enableFilterHeader = !0), this.params.isOrderFlow || this.params.isAnonymousOrderFlow || this.params.isMockupGenerator || (e.containerClass = "container"), this.params.isProductSwap && (e.isProductSwap = this.params.isProductSwap, e.originalProductType = this.params.originalProductType, e.originalPlacements = this.params.originalPlacements, e.swapCategories = this.params.swapCategories, e.swapTemplateId = this.params.swapTemplateId, e.isProductPickable = !1), this.params.isProductPickable && (e.enableSearch = !1), this.catalogParams = e, p.CQ.urlPrefix = this.params.urlPrefix, p.CQ.isProductTemplate = this.params.isProductTemplate, p.CQ.isProductPickable = this.params.isProductPickable, p.CQ.isProductSwap = this.params.isProductSwap
                },
                _initRouter: function(e, t) {
                    const i = new n.Q.Par;
                    i.productsCatalog = this.productsCatalog, i.onUpdate = this.productsCatalog.updateFromState, i.skipHistory = this.params.shouldSkipHistory(), i.prefix = this.params.urlPrefix, this.params.isMockupGenerator ? i.catalogType = p.dB.TYPE_MG : this.params.isPush || this.params.isProductTemplate ? i.catalogType = p.dB.TYPE_PUSH : this.params.isOrderFlow ? i.catalogType = p.dB.TYPE_OF : i.catalogType = p.dB.TYPE_PP;
                    const o = !!n.Q.instance;
                    this.router = n.Q.getInstance(i), o && (this.router.updateParams(i), this.router.state = new s.l), this.router.goTo(e, t)
                },
                getActiveCategory: function() {
                    return this.catalogParams.store.categories.getActiveCategoryId() === d.p.ID_FAKE_FAVORITES ? d.p.getTemporaryFavoritesCategory() : this.catalogParams.store.categories.getActiveCategory()
                },
                getActiveProduct: function() {
                    return this.catalogParams.store.products.getActive()
                },
                append: function(e) {
                    this.productsCatalog.node.append(e)
                }
            });
            h.instance = null, h.getInstance = function(e, t) {
                if (!h.instance || t) {
                    var i = h.instance;
                    !e.store && i && i.catalogParams.store && (e.store = i.catalogParams.store), h.instance = new h(e)
                } else if (null != e && e.activeCategoryId) {
                    var n = (new o.PFProductsCatalogUtilsStore).categories.getById(e.activeCategoryId);
                    h.instance.router.goTo(n)
                } else h.instance.router.goToIndex();
                return h.instance
            }, window && ((globalThis || {}).PFProductsCatalogInitializer = h)
        },
        34243: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => n
            });
            const n = Class({
                onProductChoose: null,
                onCategoryChoose: null,
                isOrderFlow: !1,
                isAnonymousOrderFlow: !1,
                isMockupGenerator: !1,
                isPush: !1,
                isClean: !1,
                title: "",
                urlPrefix: "/products-catalog",
                activeCategoryId: null,
                currency: "",
                store: null,
                storeId: null,
                isEmbedded: !1,
                isProductTemplate: !1,
                banners: null,
                bannersPerPage: null,
                enableCategoriesSidebar: !1,
                headingNode: null,
                breadcrumbsNode: null,
                isFeaturedReviews: !1,
                sellingRegion: null,
                searchBox: null,
                isProductSwap: !1,
                isNewCatalogAvailable: !1,
                isProductPickable: !1,
                shouldSkipHistory: function() {
                    return this.isOrderFlow && !this.isAnonymousOrderFlow || this.isClean || this.isProductTemplate
                }
            });
            window && ((globalThis || {}).PFProductsCatalogInitializerPar = n)
        },
        75717: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => n
            });
            const n = {
                convertToArray: function(e) {
                    var t = [];
                    for (var i in e) t.push(e[i]);
                    return t
                },
                convertToBreak: function(e) {
                    return e.split("\r\n").join("<br />")
                }
            };
            window && ((globalThis || {}).PFProductsCatalogUtilsHelpers = n)
        },
        87179: (e, t, i) => {
            "use strict";
            i.d(t, {
                n: () => o
            });
            var n = i(78009);
            const s = {},
                o = {
                    preload(e) {
                        let {
                            filterTypes: t,
                            type: i,
                            typeTitle: o,
                            typeSubtitle: r,
                            typeBaseTitle: l,
                            storeInitCallbacks: u,
                            canAccessFastDeliveryCategory: d,
                            canAccessStarterPackCategory: p
                        } = e;
                        n.dB.CAN_ACCESS_FAST_DELIVERY_CATEGORY = d, n.dB.CAN_ACCESS_STARTER_PACK_CATEGORY = p, t && (n.dB.FILTER_TYPES = t), i && (n.dB.setCatalogType(i), o && n.dB.setPageTitle(i, o), r && n.dB.setPageSubtitle(i, r), l && n.dB.setBaseTitle(i, l)), u && (u.main && (s.main = u.main), u.products && (s.products = u.products), u.categories && (s.categories = u.categories))
                    },
                    getMainStoreInitCallback: () => s.main,
                    getCategoriesStoreInitCallback: () => s.categories,
                    getProductsStoreInitCallback: () => s.products
                };
            (globalThis || {}).PFProductsCatalogPreloader = o
        },
        85012: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => n
            });
            const n = new function() {
                this.set = function(e, t, i) {
                    var n;
                    if (void 0 !== i) {
                        var s = new Date;
                        s.setTime(s.getTime() + 24 * i * 3600 * 1e3), n = " expires=" + s.toISOString()
                    } else n = "";
                    document.cookie = e + "=" + t + ";" + n
                }, this.get = function(e) {
                    for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                        for (var s = i[n];
                            " " == s.charAt(0);) s = s.substring(1, s.length);
                        if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
                    }
                    return null
                }
            };
            window && ((globalThis || {}).PFUtilsCookie = n)
        },
        4221: (e, t, i) => {
            "use strict";
            i.d(t, {
                m: () => d
            });
            var n = i(96486),
                s = i.n(n),
                o = function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("router-view", e._b({}, "router-view", e.bindValue, !1))
                };
            o._withStripped = !0;
            var r = {
                    name: "basic-router-view",
                    computed: {
                        bindValue() {
                            return this.$attrs
                        }
                    }
                },
                l = (0, i(51900).Z)(r, o, [], !1, null, null, null).exports;
            const u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                e.forEach((e => {
                    if (!e.path || !e.children) return;
                    const i = t + s().trimEnd(e.path, " /"),
                        n = e.children.find((e => "" === e.path));
                    n && (n.path = i), u(e.children, i + "/")
                }))
            };

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const i = t ? e : [{
                    path: "/:locale?",
                    components: {
                        default: l
                    },
                    children: e || []
                }];
                return u(i), i
            }
        },
        13136: (e, t, i) => {
            "use strict";
            i.d(t, {
                f: () => u
            });
            var n = i(47037),
                s = i.n(n),
                o = i(52353),
                r = i.n(o),
                l = i(97540);
            async function u(e, t) {
                let {
                    onStartLoading: i,
                    onFailLoading: n,
                    delayLoadingBy: o
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const u = s()(e) ? document.querySelector(e) || void 0 : e || void 0;
                let d = [];
                i = r()(i) ? e => {
                    e && l.D.show(e, {
                        minHeight: 500
                    })
                } : null, n = r()(n) ? e => {
                    e && l.D.hide(e)
                } : null, i && d.push(Promise.resolve(i(u))), d.push((async () => (PF.DEV && o && (console.warn("Async component loading delayed! Make sure you remove the delay before pushing to production!"), await new Promise((e => setTimeout(e, o)))), Promise.resolve(t())))());
                let p = [void 0, void 0];
                try {
                    p = await Promise.all(d)
                } catch (e) {
                    throw n && await Promise.resolve(n(u, e)), e
                }
                const [, h] = p;
                return {
                    node: u,
                    deps: h
                }
            }
        },
        71647: (e, t, i) => {
            "use strict";

            function n(e, t) {
                const i = e.modifiers;
                return void 0 !== i[t] && i[t]
            }

            function s(e, t, i) {
                const n = e.data && e.data.on || e.componentOptions && e.componentOptions.listeners;
                n && n[t] && n[t].fns(i)
            }
            i.d(t, {
                A: () => s,
                a: () => n
            })
        },
        71205: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => r
            });
            var n = i(70538),
                s = i(71647);

            function o(e, t, i) {
                if (!t.value) return;
                const n = {
                    title: t.value,
                    html: !0
                };
                (0, s.a)(t, "onbody") && (n.container = "body"), (0, s.a)(t, "onoverflow") && $(e).get(0).offsetWidth === $(e).get(0).scrollWidth || ((0, s.a)(t, "onclick") && (n.trigger = "click", $(e).on("hidden.bs.tooltip", (function(e) {
                    $(e.target).data("bs.tooltip").inState.click = !1
                }))), (0, s.a)(t, "focus") && (n.trigger = "focus", $(e).attr("tabindex", 0)), (0, s.a)(t, "hover") && (n.trigger = "hover"), (0, s.a)(t, "left") && (n.placement = "left"), (0, s.a)(t, "right") && (n.placement = "right"), (0, s.a)(t, "top") && (n.placement = "top"), (0, s.a)(t, "bottom") && (n.placement = "bottom"), (0, s.a)(t, "auto") && (n.placement = "auto"), (0, s.a)(t, "showslow") && (n.delay = {
                    show: 750
                }), (0, s.a)(t, "hideslow") && (n.delay = {
                    hide: 750
                }), (0, s.a)(t, "hideslower") && (n.delay = {
                    hide: 1e3
                }), $(e).tooltip(n), (0, s.a)(t, "autohide") && $(e).on("show.bs.tooltip", (() => {
                    setTimeout((function() {
                        $(e).tooltip("hide")
                    }), 3e3)
                })), $(e).on("shown.bs.tooltip", (e => (0, s.A)(i, "tooltip-shown", e))), $(e).attr("pf-tooltip", ""), $(e).attr("tabindex", 0))
            }
            const r = n.default.directive("tooltip", {
                inserted(e, t, i) {
                    o(e, t, i)
                },
                update(e, t, i) {
                    const n = t.oldValue,
                        r = t.value;
                    n !== r && (e.dataset.originalTitle = r, (0, s.a)(t, "hideempty") && (n && !r ? function(e) {
                        $(e).tooltip("destroy")
                    }(e) : !n && r && o(e, t, i)))
                }
            });
            t.Z = r
        },
        68975: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => d
            });
            var n = i(43350),
                s = i(60410),
                o = i(84087),
                r = i(11072),
                l = i(32933);
            let u;

            function d() {
                if (u) return u;
                const e = {
                        "X-PF-Language": r.A.language
                    },
                    t = new n.u({
                        uri: "/graphql",
                        credentials: "include",
                        headers: e
                    });
                return u = new s.f({
                    link: t,
                    cache: new o.h({
                        typePolicies: {
                            Query: {
                                fields: {
                                    selectedFilters: () => (0, l.L$)()
                                }
                            },
                            CatalogProduct: {
                                keyFields: ["id", "mainCatalogCategoryId", "isCrossSellProduct"]
                            },
                            CatalogWidget: {
                                keyFields: ["settings"]
                            }
                        }
                    })
                }), u
            }
        },
        32933: (e, t, i) => {
            "use strict";
            i.d(t, {
                v: () => w,
                UL: () => b,
                cn: () => _,
                L$: () => y,
                _w: () => f,
                aK: () => P
            });
            var n = i(66438),
                s = i(16459),
                o = i(55874);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (s = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(s, "string")) ? o : String(o)), n)
                }
                var s, o
            }

            function l(e, t, i) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, i)
            }

            function u(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, p(e, t, "get"))
            }

            function d(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, p(e, t, "set"), i), i
            }

            function p(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var h = new WeakMap,
                m = new WeakMap;
            let g = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), l(this, h, {
                        writable: !0,
                        value: null
                    }), l(this, m, {
                        writable: !0,
                        value: []
                    })
                }
                var t, i, n;
                return t = e, (i = [{
                    key: "setPreviousRoute",
                    value: function(e) {
                        d(this, h, e)
                    }
                }, {
                    key: "getPreviousRoute",
                    value: function() {
                        return u(this, h)
                    }
                }, {
                    key: "clearPreviousRoute",
                    value: function() {
                        d(this, h, null)
                    }
                }, {
                    key: "visitCategoryId",
                    value: function(e) {
                        u(this, m).includes(e) || u(this, m).push(e)
                    }
                }, {
                    key: "getVisitedCategoryIds",
                    value: function() {
                        return u(this, m)
                    }
                }]) && r(t.prototype, i), n && r(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            var v = i(32401);
            const b = (0, n.QS)(new s.n),
                f = (0, n.QS)(new o.k6),
                _ = (0, n.QS)(new g),
                w = (0, n.QS)(new v.k),
                y = (0, n.QS)([]);

            function P(e, t) {
                const i = b();
                void 0 !== (null == i ? void 0 : i[e]) && (i[e] = t, b(i))
            }
        },
        32401: (e, t, i) => {
            "use strict";
            i.d(t, {
                k: () => u
            });
            var n = i(15425);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
                }
            }

            function r(e, t, i) {
                return (t = l(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function l(e) {
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
            let u = function() {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    s(this, e), r(this, "flowType", n.w7), r(this, "catalogIndexRoute", n.VC), r(this, "catalogCategoryRoute", n.PP), r(this, "routerMode", n.u_), this.setFlowType(t), this.setCatalogIndexRoute(), this.setCatalogCategoryRoute(), this.setRouterMode()
                }
                var t, i, l;
                return t = e, (i = [{
                    key: "setFlowType",
                    value: function(e) {
                        null != e && e.isProductTemplate ? this.flowType = n.vZ : null != e && e.isPush ? this.flowType = n.AM : null != e && e.isOrderFlow ? this.flowType = n.ix : this.flowType = n.w7
                    }
                }, {
                    key: "setCatalogIndexRoute",
                    value: function() {
                        this.flowType !== n.Nk ? this.catalogIndexRoute = n.VC : this.catalogIndexRoute = n.W7
                    }
                }, {
                    key: "setCatalogCategoryRoute",
                    value: function() {
                        this.flowType !== n.Nk ? this.catalogCategoryRoute = n.PP : this.catalogCategoryRoute = n.qQ
                    }
                }, {
                    key: "setRouterMode",
                    value: function() {
                        switch (this.flowType) {
                            case n.vZ:
                            case n.AM:
                            case n.ix:
                                return void(this.routerMode = n.u_);
                            default:
                                return void(this.routerMode = n.EF)
                        }
                    }
                }]) && o(t.prototype, i), l && o(t, l), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        16459: (e, t, i) => {
            "use strict";
            i.d(t, {
                n: () => d
            });
            var n = i(15425),
                s = i(33848);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n)
                }
            }

            function l(e, t, i) {
                return (t = u(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function u(e) {
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
            let d = function() {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, e), l(this, "type", n.w7), l(this, "storeId", null), l(this, "productsPerPage", 24), l(this, "isFeaturedReviewsEnabled", !1), l(this, "productClickCallback", null), l(this, "categoryClickCallback", null), l(this, "catalogLevel", n.gN), this.type = (null == t ? void 0 : t.type) || n.w7, this.storeId = (null == t ? void 0 : t.storeId) || null, this.productsPerPage = t.productsPerPage || 24, this.isFeaturedReviewsEnabled = t.isFeaturedReviewsEnabled || !1, this.productClickCallback = t.productClickCallback || null, this.categoryClickCallback = t.categoryClickCallback || null, this.catalogLevel = t.catalogLevel || n.gN, this.activeCategoryId = t.activeCategoryId || 0
                }
                var t, i, u;
                return t = e, i = [{
                    key: "isProductPricingFlow",
                    value: function() {
                        return this.type === n.w7
                    }
                }, {
                    key: "isProductTemplateFlow",
                    value: function() {
                        return this.type === n.vZ
                    }
                }, {
                    key: "isProductPushFlow",
                    value: function() {
                        return this.type === n.AM
                    }
                }, {
                    key: "isOrderFlow",
                    value: function() {
                        return this.type === n.ix
                    }
                }, {
                    key: "getReadableFlowType",
                    value: function() {
                        var e;
                        return null !== (e = n.NT[this.type]) && void 0 !== e ? e : n.I4
                    }
                }, {
                    key: "showSearch",
                    value: function() {
                        return this.isProductTemplateFlow() || this.isProductPushFlow() || this.isOrderFlow()
                    }
                }, {
                    key: "getCurrentFlowWidgetGroupId",
                    value: function() {
                        var e, t;
                        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.gN;
                        return null !== (e = null === (t = n.D0[i]) || void 0 === t ? void 0 : t[this.type]) && void 0 !== e ? e : s.T5
                    }
                }, {
                    key: "showSearchAllResults",
                    value: function() {
                        return this.isProductTemplateFlow() || this.isProductPushFlow() || this.isOrderFlow()
                    }
                }], i && r(t.prototype, i), u && r(t, u), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        47037: (e, t, i) => {
            var n = i(44239),
                s = i(1469),
                o = i(37005);
            e.exports = function(e) {
                return "string" == typeof e || !s(e) && o(e) && "[object String]" == n(e)
            }
        },
        52353: e => {
            e.exports = function(e) {
                return void 0 === e
            }
        },
        51900: (e, t, i) => {
            "use strict";

            function n(e, t, i, n, s, o, r, l) {
                var u, d = "function" == typeof e ? e.options : e;
                if (t && (d.render = t, d.staticRenderFns = i, d._compiled = !0), n && (d.functional = !0), o && (d._scopeId = "data-v-" + o), r ? (u = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), s && s.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, d._ssrRegister = u) : s && (u = l ? function() {
                        s.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : s), u)
                    if (d.functional) {
                        d._injectStyles = u;
                        var p = d.render;
                        d.render = function(e, t) {
                            return u.call(t), p(e, t)
                        }
                    } else {
                        var h = d.beforeCreate;
                        d.beforeCreate = h ? [].concat(h, u) : [u]
                    } return {
                    exports: e,
                    options: d
                }
            }
            i.d(t, {
                Z: () => n
            })
        },
        15579: e => {
            "use strict";
            e.exports = "undefined" != typeof Sentry ? Sentry : void 0
        },
        65311: e => {
            "use strict";
            e.exports = jQuery
        },
        48488: e => {
            "use strict";
            e.exports = moment
        },
        56254: e => {
            "use strict";
            e.exports = {
                Canvas: null
            }
        },
        85857: e => {
            "use strict";
            e.exports = {
                JSDOM: null
            }
        },
        81774: e => {
            "use strict";
            e.exports = {
                implForWrapper: null
            }
        }
    },
    e => {
        e.O(0, [49685, 12954, 70538, 52075, 50361, 80898, 78345, 91642, 2818, 4473, 77343, 81877, 27497, 97452, 67190, 44529, 87457, 98607, 6995, 68127, 86184, 31174], (() => {
            return t = 90350, e(e.s = t);
            var t
        }));
        e.O()
    }
]);