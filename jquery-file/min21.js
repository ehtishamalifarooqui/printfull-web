/*! License information is available at https://static.cdn.printful.com/dist-pf/50787.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [50787, 81043], {
        20021: (e, t, n) => {
            n.d(t, {
                o: () => R,
                J: () => B
            });
            var o = n(65557),
                i = n(39697),
                s = n(20111),
                a = n(9651);
            const r = Class({
                title: "",
                slug: "",
                isNew: !1,
                isPro: !1,
                children: [],
                className: "",
                isMobile: !1,
                hasDivider: !1
            });
            r.fromArray = function(e) {
                var t = new r;
                return a.U.O2O(t, e), t.children = e.children ? e.children.map(r.fromArray) : [], e.settings && e.settings.headerDropDownTitle && (t.title = e.settings.headerDropDownTitle), t
            }, window && ((globalThis || {}).PFComponentsSubmenuItem = r);
            var l = n(97540),
                u = n(86340),
                d = n(15425);
            const c = Class({
                items: [],
                mainMenuNode: null,
                menuToggleNode: null,
                activeItem: null,
                isSmallScreen: !1,
                smallScreenBreakpoint: 992,
                hoverTimer: 0,
                _lastScrollPosition: 0,
                submenuFooter: null,
                __construct: function(e, t, n, o) {
                    (this.items = e.map(r.fromArray), this.mainMenuNode = document.getElementById(t), this.menuToggleNode = document.getElementById(n), this.submenuFooter = o, this.mainMenuNode && this.menuToggleNode) && (window.addEventListener("resize", this._onResize.bind(this)), this.menuToggleNode.addEventListener("click", this._onToggleClick.bind(this)), this.menuToggleNode.parentNode.addEventListener("mouseenter", this._submenuOpen), this.menuToggleNode.parentNode.addEventListener("focusin", this._submenuOpen), this.menuToggleNode.parentNode.addEventListener("mouseleave", this._hoverDelay.bind(this, this._submenuClose)), this.menuToggleNode.parentNode.addEventListener("focusout", this._hoverDelay.bind(this, this._submenuClose)), this._onResize(), this.items.filter((function(e) {
                        return !!e.children.length
                    })).length ? this.node = tag("div", "nav__outer-submenu row no-gutters", [this.menuNode = tag("div", "nav__outer-submenu__left col-12 col-md-4 pf-py-md-24 pf-border-right ", [this._renderLevel(this.items)]), this.submenuNode = tag("div", "nav__outer-submenu__right col-12 col-md-8 pf-py-md-24 pf-d-none pf-border-left-0")]) : (a.U.addClassName(this.menuToggleNode.nextSibling, "main-menu-submenu--no-submenu-children"), this.node = tag("div", "nav__outer-submenu row no-gutters", [this.menuNode = tag("div", "nav__outer-submenu__left col-12 col-md-12 pf-py-md-24 ", [this._renderLevel(this.items)]), this.submenuNode = tag("div", "nav__outer-submenu__right col-12 col-md-0 pf-d-none pf-border-left-0")])), !this.isSmallScreen && this._showSubMenu(this.items[0]))
                },
                _submenuOpen: function() {
                    this.isSmallScreen || (clearTimeout(this.hoverTimer), $(".header__main #nav .has-submenu.open, .header__main #nav-b2c .has-submenu.open").removeClass("open"), a.U.addClassName(this.menuToggleNode.parentNode, "open"), a.U.removeClassName(this.menuToggleNode.parentNode, "closed"))
                },
                _submenuClose: function() {
                    this.isSmallScreen || (a.U.removeClassName(this.menuToggleNode.parentNode, "open"), a.U.addClassName(this.menuToggleNode.parentNode, "closed"))
                },
                _onToggleClick: function(e) {
                    this.isSmallScreen && (e.preventDefault(), a.U.removeClassName(this.submenuNode, "open"), a.U.hasClassName(this.menuToggleNode.parentNode, "open") ? a.U.removeClassName(this.menuToggleNode.parentNode, "open") : a.U.addClassName(this.menuToggleNode.parentNode, "open"), a.U.hasClassName(this.mainMenuNode, "is-submenu-open") ? ($(this.mainMenuNode).scrollTop(this._lastScrollPosition), a.U.removeClassName(this.mainMenuNode, "is-submenu-open")) : (this._lastScrollPosition = $(this.mainMenuNode).scrollTop(), setTimeout(function() {
                        $(this.mainMenuNode).scrollTop(0)
                    }.bind(this), 500), a.U.addClassName(this.mainMenuNode, "is-submenu-open")))
                },
                _hoverDelay: function(e, t) {
                    clearTimeout(this.hoverTimer), this.hoverTimer = setTimeout(e.bind(this, t), 150)
                },
                _onResize: function() {
                    this.isSmallScreen = window.innerWidth < this.smallScreenBreakpoint
                },
                _renderLevel: function(e) {
                    for (var t = !0, n = 0, o = e.length; n < o; n++) {
                        var i = e[n];
                        void 0 !== i.visible && (t = i.visible), i.visible = t
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
                    for (const n in e) {
                        const o = e[n];
                        o.hasDivider && t.push(tag("li", "nav__submenu__item nav__submenu__divider")), t.push(this._renderItem(o))
                    }
                    return t
                },
                _renderItem: function(e) {
                    var t, n, o, i = ["nav__submenu__item"];
                    e === this.activeItem && i.push("nav__submenu__item--active"), e.className.length && i.push(e.className), e.children && e.children.length && i.push("nav__submenu__item--has-children"), e.isMobile && i.push("nav__submenu__item--is-mobile"), !1 === e.visible && i.push("pf-d-none");
                    var s = tag("li", {
                        className: i.join(" "),
                        onclick: this._changeLanguage.bind(this, e),
                        attr: {
                            tabIndex: null !== (t = e.children) && void 0 !== t && t.length ? 0 : null
                        }
                    }, [tag("a", {
                        className: (null !== (n = e.children) && void 0 !== n && n.length || u.Dw.includes(null == e ? void 0 : e.itemId)) && e !== this.activeItem ? "pf-hover-icon-move" : "",
                        href: e.slug,
                        onclick: function(t) {
                            this._showSubMenu(e, t).then((() => {
                                const t = e.slug; - 1 === t.indexOf("javascript:") && ga("send", "event", "Navigation link clicks", "Header Menu", t)
                            }))
                        }.bind(this)
                    }, [e.title ? tag("span", "", e.title) : "", e.displayAsNew || e.isNew ? tag("span", "pf-ml-4 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New")) : "", e.isHidden ? tag("span", {
                        innerHTML: "BETA",
                        className: "pf-badge pf-badge-small pf-badge--info pf-ml-8"
                    }) : "", null !== (o = e.children) && void 0 !== o && o.length ? tag("i", "nav__submenu__item--chevron pf-i pf-i-chevron-right pf-i-18 pf-text-gray pf-d-none pf-d-md-block") : ""])]);
                    return $(s).on("mouseover", function(t) {
                        this._toggleShowSubMenu(e, t)
                    }.bind(this)).on("mouseout", function() {
                        clearTimeout(this.hoverTimer)
                    }.bind(this)).on("keydown", function(t) {
                        "Enter" !== t.key && "Spacebar" !== t.key && " " !== t.key || (t.preventDefault(), $(this.menuToggleNode).focus(), this._toggleShowSubMenu(e, t))
                    }.bind(this)), s
                },
                _toggleShowSubMenu: function(e, t) {
                    !this.isSmallScreen && e !== this.activeItem && this._hoverDelay(this._showSubMenu.bind(this, e), t)
                },
                async _showSubMenu(e, t) {
                    var n;
                    a.U.clearNode(this.submenuNode), a.U.clearNode(this.menuNode), this.activeItem = e, this._renderLevel(this.items).append(this.menuNode);
                    if (0 === (null == e ? void 0 : e.parentId) || u.Dw.includes(null == e ? void 0 : e.itemId)) {
                        var o, i, s;
                        if (!(null !== (o = this.submenuFooter) && void 0 !== o && o.categoriesProducts || this.isSmallScreen)) this.submenuFooter.categoriesProducts = await (null === (s = this.submenuFooter) || void 0 === s ? void 0 : s.init());
                        null === (i = this.submenuFooter) || void 0 === i || i.setArrowsForHardcodedCategories(this.items, this.menuNode)
                    }
                    this.hideSubmenuNode(e) || (t && "click" === t.type && this.isSmallScreen && t.preventDefault(), null != e && null !== (n = e.children) && void 0 !== n && n.length && this._renderSubmenu(e.children, !0).append(this.submenuNode), this.submenuFooter && !this.isSmallScreen && this.showSubmenuFooterContent(e), setTimeout(function() {
                        a.U.addClassName(this.submenuNode, "open")
                    }.bind(this)))
                },
                _goBackLevel: function(e, t) {
                    if (!this.isSmallScreen) return !1;
                    a.U.clearNode(this.menuNode), a.U.removeClassName(this.submenuNode, "open"), this.activeItem = null, this._renderLevel(this.items).append(this.menuNode), e instanceof r ? (this.activeItem = e, setTimeout(function() {
                        a.U.clearNode(this.submenuNode)
                    }.bind(this), 300)) : (a.U.clearNode(this.submenuNode), this._onToggleClick(t))
                },
                _renderSubmenu: function(e, t) {
                    let n = !1;
                    if (t) {
                        a.U.addClassName(this.submenuNode, "pf-d-none");
                        let t = e.length;
                        e.forEach((e => {
                            e.children && e.children.length && (t += e.children.length)
                        })), t <= 5 && (n = !0), t > 0 && a.U.removeClassName(this.submenuNode, "pf-d-none")
                    }
                    return tag("ul", "nav__submenu__menu " + (t ? "nav__submenu__menu--top " : "") + (n ? "nav__submenu__menu--top--small" : ""), [t ? this._renderBackLink(this.activeItem) : "", e.map(this._renderSubmenuItem)])
                },
                _renderSubmenuItem: function(e) {
                    var t = ["nav__submenu__menu__item"];
                    return (e.children && e.children.length || u.Dw.includes(null == e ? void 0 : e.itemId)) && t.push("nav__submenu__menu__item--has-children"), e.isMobile && t.push("nav__submenu__menu__item--is-mobile"), tag("li", "nav__submenu__menu__item " + t.join(" "), [tag("a", {
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
                    e.options && e.options.languageId && s.q.changeLanguage(e.options.languageId)
                },
                async showSubmenuFooterContent(e) {
                    this.node.classList.add("nav__outer-submenu__wider"), l.D.show(this.submenuNode, {
                        minHeight: 400
                    }), this.clearPromoProductNode();
                    const t = await this.submenuFooter.render(e);
                    null != t && t.itemsNotSet && u.Dw.includes(e.itemId) ? a.U.addClassName(this.submenuNode, "pf-d-none") : (a.U.removeClassName(this.submenuNode, "pf-d-none"), t.node.append(this.submenuNode), l.D.hide(this.submenuNode))
                },
                clearPromoProductNode() {
                    const e = this.submenuNode.querySelector(".new-products");
                    e && a.U.clearNode(e)
                },
                hideSubmenuNode(e) {
                    var t, n, o, i;
                    const s = !(null != e && null !== (t = e.children) && void 0 !== t && t.length) && 0 === (null == e ? void 0 : e.parentId),
                        r = !([u.$n, u.MD].includes(null === (n = this.items[0]) || void 0 === n ? void 0 : n.parentId) || null != e && null !== (o = e.children) && void 0 !== o && o.length),
                        l = this.isSmallScreen && !(null != e && null !== (i = e.children) && void 0 !== i && i.length),
                        c = (null == e ? void 0 : e.itemId) === d.wo;
                    return !!(null == e || !e.itemId || s || r || l || c) && (a.U.addClassName(this.submenuNode, "pf-d-none"), !0)
                }
            });
            window && ((globalThis || {}).PFComponentsSubmenu = c);
            var h = n(33286),
                m = n(29738),
                p = n(54200),
                g = n(78039),
                f = n(38137),
                v = n(16623),
                b = n(61169),
                _ = n(25046),
                w = (n(61756), n(79421));

            function N(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, M(o.key), o)
                }
            }

            function y(e, t) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function S(e) {
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
                    var n, o = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return C(this, n)
                }
            }

            function C(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, T(e)
            }

            function P(e, t, n) {
                return (t = M(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function M(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function O(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function D(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, L(e, t, "get"))
            }

            function I(e, t, n) {
                return function(e, t, n) {
                    if (t.set) t.set.call(e, n);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = n
                    }
                }(e, L(e, t, "set"), n), n
            }

            function L(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }
            var U = new WeakMap,
                A = new WeakSet;
            let E = function(e) {
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
                    }), t && y(e, t)
                }(s, e);
                var t, n, o, i = S(s);

                function s(e, t, n) {
                    var o, a, r;
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), o = i.call(this), O(a = k(o), r = A), r.add(a),
                        function(e, t, n) {
                            O(e, t), t.set(e, n)
                        }(k(o), U, {
                            writable: !0,
                            value: void 0
                        }), P(k(o), "isSellingRegionApplied", !0), P(k(o), "onboardingData", {}), P(k(o), "sellingRegions", []), o.isSellingRegionApplied = e, o.onboardingData = t || {}, o.sellingRegions = n || [], o.node = tag("div"),
                        function(e, t, n) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return n
                        }(k(o), A, F).call(k(o)), o
                }
                return t = s, (n = [{
                    key: "onSave",
                    value: function(e) {
                        this.updateSideMenuTitles(e), this.isSellingRegionApplied ? location.reload() : (D(this, U).setDataProp("shouldShowSettingsAppliedModal", !0), D(this, U).setDataProp("showSetupLaterButton", !1), this.isSellingRegionApplied = !0, (0, w.Z)("selling-region/dismiss-onboarding", {
                            type: "selling_region_settings_applied"
                        }))
                    }
                }, {
                    key: "onSetupLater",
                    value: function() {
                        D(this, U).setDataProp("shouldShowSetupLaterModal", !0)
                    }
                }, {
                    key: "onSettingsAppliedModalClose",
                    value: function(e) {
                        D(this, U).setDataProp("shouldShowSettingsAppliedModal", e), e || location.reload()
                    }
                }, {
                    key: "onSetupLaterModalClose",
                    value: function(e) {
                        D(this, U).setDataProp("shouldShowSetupLaterModal", e)
                    }
                }, {
                    key: "updateSideMenuTitles",
                    value: function(e) {
                        document.querySelector("#selling-region-menu .nav__submenu__item--back-link a").textContent = e.translatedName, document.querySelector("#selling-region-menu-toggle .menu-label").textContent = e.translatedName;
                        const t = document.querySelector("#selling-region-menu-b2c .nav__submenu__item--back-link a"),
                            n = document.querySelector("#selling-region-menu-toggle-b2c .menu-label");
                        t && n && (t.textContent = e.translatedName, n.textContent = e.translatedName)
                    }
                }]) && N(t.prototype, n), o && N(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(b.p);
            async function F() {
                const e = new _.L;
                e.components = {
                    "selling-region": () => Promise.all([n.e(33348), n.e(98100)]).then(n.bind(n, 23639)),
                    "default-selling-region-settings-applied-modal": () => n.e(98352).then(n.bind(n, 89138)),
                    "default-selling-region-setup-later-modal": () => n.e(58681).then(n.bind(n, 28183))
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
                }, I(this, U, new _.Z(e)), D(this, U).append(this.node)
            }
            var x = n(48776);

            function B() {
                (0, f.k)(), (0, o.$)("PF.Components.AutoComplete", i.z), (0, o.$)("PF.Components.Submenu", c), (0, o.$)("PF.Components.Menu", v.YK), v.YK.init(), (0, o.$)("PF.OrderBegin", h.g), (0, o.$)("PF.Popup", m.G), (0, o.$)("PF.UserSettingsMenu", s.q), (0, o.$)("PF.ShoppingCart", p.r), (0, o.$)("PF.Items.CartItem", g.G), (0, o.$)("PF.SideMenuSellingRegion", E), (0, o.$)("PF.DataLayer.pushPageLeaveEvent", x.EB)
            }

            function R() {
                return {
                    ...(0, f.S)(),
                    "settings-menu": () => Promise.all([n.e(33348), n.e(71852)]).then(n.bind(n, 21857)),
                    "the-skip-to-main-content-link": () => n.e(91052).then(n.bind(n, 30430)),
                    "notification-header-button": () => n.e(71308).then(n.bind(n, 93941)),
                    "premium-header-menu": () => n.e(78253).then(n.bind(n, 23570)),
                    "refer-a-friend-button": () => n.e(95992).then(n.bind(n, 75643)),
                    "premium-unsubscribe": () => n.e(65419).then(n.bind(n, 56919)),
                    "self-segmentation": () => n.e(64021).then(n.bind(n, 24106)),
                    "user-dropdown": () => n.e(84353).then(n.bind(n, 65392)),
                    "shopping-cart": () => Promise.all([n.e(98904), n.e(10113), n.e(68171), n.e(26387), n.e(55239)]).then(n.bind(n, 11836)),
                    "dashboard-button": () => n.e(10323).then(n.bind(n, 97865)),
                    "header-buttons": () => Promise.all([n.e(33348), n.e(71852), n.e(51767)]).then(n.bind(n, 68896)),
                    "newsletter-subscribe-form": () => n.e(76056).then(n.bind(n, 1958)),
                    "back-to-top-button": () => n.e(18972).then(n.bind(n, 31349)),
                    "selling-region-launch-onboarding": () => Promise.all([n.e(33348), n.e(28365)]).then(n.bind(n, 65748))
                }
            }
        },
        76645: (e, t, n) => {
            n.d(t, {
                J: () => a
            });
            var o = n(65557),
                i = n(85012),
                s = n(86340);

            function a() {
                (0, o.$)("PF.Utils.Cookie", i.o), (0, o.$)("PF.New.Product.Showcase", s.OY)
            }
        },
        46667: (e, t, n) => {
            var o = n(70538);

            function i(e) {
                const t = $(e).find("> .loading-overlay--alt");
                return t.length > 0 ? t : null
            }

            function s(e, t) {
                const n = i(e),
                    o = $(e),
                    {
                        loading: s,
                        minHeight: a = null
                    } = function(e) {
                        const t = e.value;
                        if ("object" != typeof t || null === t || !t.hasOwnProperty("loading")) return {
                            loading: !!t
                        };
                        return t
                    }(t);
                n && n.length && (s ? (n.addClass("loading"), a && o.css("min-height", a)) : (n.removeClass("loading"), a && o.css("min-height", "")))
            }
            t.Z = o.default.directive("loading", {
                inserted(e, t) {
                    const n = $(e);
                    n.css("position", "relative");
                    const o = $('<div class="loading-overlay loading-overlay--alt"></div>');
                    n.prepend(o), s(e, t)
                },
                update(e, t) {
                    s(e, t)
                },
                unbind(e) {
                    const t = i(e);
                    t && t.length && t.remove();
                    $(e).css("position", "")
                }
            })
        },
        16623: (e, t, n) => {
            n.d(t, {
                WX: () => s,
                YK: () => r,
                dA: () => a
            });
            var o = n(65311),
                i = n.n(o);
            const s = {
                    AUTH_MENU_OPEN_CLASS: "menu-open--auth",
                    NOTIFICATIONS_MENU_OPEN_CLASS: "menu-open--right",
                    PREMIUM_MENU_OPEN_CLASS: "menu-open--premium",
                    MENU_OPEN_CLASS: "menu-open",
                    MENU_OPEN_LEFT_CLASS: "menu-open--left"
                },
                a = Object.values(s),
                r = Class({
                    classes: "menu-open menu-open--left menu-open--right menu-open--auth menu-open--premium",
                    body: null,
                    menuButton: null,
                    notificationsButton: null,
                    authMenuButton: null,
                    __construct: function() {
                        this.body = i()(document.body), this.menuButton = i()(".navbar-toggle"), this.notificationsButton = i()("#toggle-customer-notifications"), this.authMenuButton = i()(".toggle-auth"), this.menuButton.on("click", this._closeMenu.bind(this, "left")), this.notificationsButton.on("click", this._closeMenu.bind(this, "right")), this.body.on("click touchstart", this._onBodyClick.bind(this)), this.authMenuButton.on("click", this._onAuthToggle.bind(this)), this._reRenderMenu()
                    },
                    _reRenderMenu: function() {
                        if (!i()("#userbar").find(".interface-toggle").length && i()("#nav, #nav-b2c").addClass("no-user-bar-header"), i()(".submenu ul li ul").find("li.active").length > 0 && i()("ul#nav li.has-submenu, ul#nav-b2c li.has-submenu").addClass("active"), this._isMobile()) {
                            var e = i()(".submenu ul li.has-submenu ul").find("li.active");
                            e.length > 0 && e.parents(".has-submenu").addClass("open")
                        }
                    },
                    _closeMenu: function(e, t) {
                        t.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), i().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--" + e)
                    },
                    _onBodyClick: function(e) {
                        i()(e.target).hasClass("menu-open") && (e.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), i().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--left"))
                    },
                    _onAuthToggle: function(e) {
                        e.preventDefault(), this.body.is(".menu-open") ? (this.body.removeClass(this.classes), setTimeout(function() {
                            this.body.find(".dropdown-backdrop").remove()
                        }.bind(this), i().fn.collapse.Constructor.TRANSITION_DURATION)) : this.body.addClass("menu-open menu-open--auth")
                    },
                    _isMobile: function() {
                        return i()(window).innerWidth() < 768
                    }
                });
            r.init = function() {
                i()(document).on("ready", (function() {
                    new r
                }))
            }, window && ((globalThis || {}).PFComponentsMenu = r)
        },
        29738: (e, t, n) => {
            n.d(t, {
                G: () => a
            });
            var o = n(9651),
                i = n(47586);
            const s = Class({
                __construct: function(e) {
                    this.reference = e, this.reference.setPopupSeen(), this.reference.dateFormat() >= this.reference.dateFormat("2016-12-13") && this.reference.dateFormat() <= this.reference.dateFormat("2016-12-23") ? this._renderLayoutChange() : this._render()
                },
                _render: function() {
                    this.content = (0, o.U)({
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
                    }), this.modal = new i.Z({
                        nodeClass: "holiday-popup",
                        onClose: this._close
                    }), this.modal.setContent(this.content), this.modal.show()
                },
                _renderLayoutChange: function() {
                    this.content = (0, o.U)({
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
                    }), this.modal = new i.Z({
                        nodeClass: "holiday-popup",
                        onClose: this._close
                    }), this.modal.setContent(this.content), this.modal.show()
                },
                _close: function() {
                    this.reference.callCallback()
                }
            }, o.U.Base);
            (globalThis || {}).PFPopupHoliday = s;
            const a = Class({
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
                        if (this.popup === a.HOLIDAY_POPUP) {
                            if (this.endDate = this.dateFormat("2016-12-23"), this.startDate = this.dateFormat("2016-12-06"), !this.checkDeadline()) return this.callCallback(), !1;
                            new s(this)
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
            a.HOLIDAY_POPUP = "holiday", (globalThis || {}).PFPopup = a
        },
        85012: (e, t, n) => {
            n.d(t, {
                o: () => o
            });
            const o = new function() {
                this.set = function(e, t, n) {
                    var o;
                    if (void 0 !== n) {
                        var i = new Date;
                        i.setTime(i.getTime() + 24 * n * 3600 * 1e3), o = " expires=" + i.toISOString()
                    } else o = "";
                    document.cookie = e + "=" + t + ";" + o
                }, this.get = function(e) {
                    for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                        for (var i = n[o];
                            " " == i.charAt(0);) i = i.substring(1, i.length);
                        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                    }
                    return null
                }
            };
            window && ((globalThis || {}).PFUtilsCookie = o)
        },
        19966: (e, t, n) => {
            function o(e) {
                const t = function(e) {
                    return e instanceof jQuery.Event ? e.type + (e.namespace && e.namespace.length ? `.${e.namespace}` : "") : null
                }(e);
                if (!t) return null;
                e.vueName = function(e) {
                    return (e || "").replace(/\./g, "-")
                }(t)
            }
            n.d(t, {
                Os: () => o
            })
        },
        71647: (e, t, n) => {
            function o(e, t) {
                const n = e.modifiers;
                return void 0 !== n[t] && n[t]
            }

            function i(e, t, n) {
                const o = e.data && e.data.on || e.componentOptions && e.componentOptions.listeners;
                o && o[t] && o[t].fns(n)
            }
            n.d(t, {
                A: () => i,
                a: () => o
            })
        },
        93826: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var o = n(75232);

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (i = o.key, s = void 0, "symbol" == typeof(s = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(i, "string")) ? s : String(s)), o)
                }
                var i, s
            }
            let s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, s;
                return t = e, s = [{
                    key: "deepSet",
                    value: function(e, t, n) {
                        var o;
                        for (n = n.split("."), o = 0; o < n.length - 1; o++) e = e[n[o]];
                        e[n[o]] = t
                    }
                }, {
                    key: "hasProperty",
                    value: function(e, t) {
                        for (var n = t.split("."), o = 0; o < n.length - 1; o++) {
                            if (void 0 === e[n[o]]) return !1;
                            e = e[n[o]]
                        }
                        return !0
                    }
                }, {
                    key: "simpleDeepClone",
                    value: function(e) {
                        return o.IS(e)
                    }
                }], (n = null) && i(t.prototype, n), s && i(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        70862: (e, t, n) => {
            var o = n(70538),
                i = n(93826);
            t.Z = o.default.directive("chosen", {
                inserted(e, t, n) {
                    let o = t.value;
                    if (!o || !i.Z.hasProperty(n.context.$data, o))
                        for (let e in n.data.directives) {
                            let t = n.data.directives[e];
                            if ("model" === t.name) {
                                o = t.expression;
                                break
                            }
                        }
                    let s = null;
                    n.data.on && n.data.on.change && (s = n.data.on.change), $(e).chosen({
                        width: "100%",
                        search_contains: !0
                    }).change((e => {
                        o && i.Z.hasProperty(n.context.$data, o) && i.Z.deepSet(n.context.$data, e.target.value, o), s && s(e)
                    })), n.context.$on("chosen::update::" + t.value, (() => {
                        $(e).trigger("chosen:updated")
                    })), n.context.$on("chosen::close::" + t.value, (() => {
                        $(e).trigger("chosen:close")
                    })), n.context.$on("chosen::destroy::" + t.value, (() => {
                        $(e).chosen("destroy")
                    }))
                },
                unbind(e) {
                    $(e).chosen("destroy")
                }
            })
        },
        94111: (e, t, n) => {
            var o = n(70538);
            t.Z = o.default.directive("click-outside", {
                bind: function(e, t) {
                    e.__vueClickOutside__ = n => {
                        e.contains(n.target) || e === n.target || t.value(n)
                    }, document.body.addEventListener("click", e.__vueClickOutside__, !0)
                },
                unbind: function(e) {
                    document.body.removeEventListener("click", e.__vueClickOutside__, !0), e.__vueClickOutside__ = null
                }
            })
        },
        16295: (e, t, n) => {
            var o = n(70538),
                i = n(71647);
            t.Z = o.default.directive("dropdown", {
                inserted(e, t) {
                    var n = $(e),
                        o = $('a[data-toggle="dropdown"]', n).first(),
                        s = o.closest(".dropdown");
                    (0, i.a)(t, "safemode") && o && (o.dropdown(), $("li", s).on("click", (function(e) {
                        e.stopPropagation(), o.dropdown("toggle")
                    })))
                }
            })
        },
        5273: (e, t, n) => {
            var o = n(70538),
                i = n(9651);
            t.Z = o.default.directive("hover", {
                inserted(e, t) {
                    let n = t.value || "is-hovered";
                    e.onmouseover = () => {
                        i.U.addClassName(e, n)
                    }, e.onmouseout = () => {
                        i.U.removeClassName(e, n)
                    }
                }
            })
        },
        3592: (e, t, n) => {
            var o = n(70538),
                i = n(71647),
                s = n(19966);
            t.Z = o.default.directive("popover", {
                inserted(e, t, n) {
                    r(e, t, n)
                },
                update(e, t, n) {
                    r(e, t, n, !0)
                },
                unbind(e) {
                    ! function(e) {
                        const t = $(e);
                        t.off(a), t.popover("destroy")
                    }(e)
                }
            });
            const a = ["show.bs.popover", "shown.bs.popover", "hide.bs.popover", "hidden.bs.popover", "inserted.bs.popover"].join(".vue ");

            function r(e, t, n, o) {
                const r = o && function(e) {
                    const t = $(e).attr("aria-describedby");
                    if (!t || !t.length) return !1;
                    const n = $("#" + t);
                    if (!n.length) return !1;
                    return !!n.is(":visible")
                }(e);
                if (!t.value) return;
                if (t.value.hasOwnProperty("popoverTargetId")) {
                    const e = t.value.popoverTargetId;
                    e && e.length && (t.value.content = () => {
                        const t = $("#" + e);
                        return t && t.length ? t.html() : ""
                    })
                }
                const l = $(e);
                l.popover(t.value), o || l.on(a, (function(e) {
                    const o = $(this);
                    (0, i.a)(t, "events") && ((0, s.Os)(e), (0, i.A)(n, e.vueName, e)), "hide" === e.type ? o.data("popover-hiding", !0) : o.removeData("popover-hiding")
                })), r && (l.data("popover-hiding") || l.popover("show"))
            }
        },
        71205: (e, t, n) => {
            n.d(t, {
                i: () => a
            });
            var o = n(70538),
                i = n(71647);

            function s(e, t, n) {
                if (!t.value) return;
                const o = {
                    title: t.value,
                    html: !0
                };
                (0, i.a)(t, "onbody") && (o.container = "body"), (0, i.a)(t, "onoverflow") && $(e).get(0).offsetWidth === $(e).get(0).scrollWidth || ((0, i.a)(t, "onclick") && (o.trigger = "click", $(e).on("hidden.bs.tooltip", (function(e) {
                    $(e.target).data("bs.tooltip").inState.click = !1
                }))), (0, i.a)(t, "focus") && (o.trigger = "focus", $(e).attr("tabindex", 0)), (0, i.a)(t, "hover") && (o.trigger = "hover"), (0, i.a)(t, "left") && (o.placement = "left"), (0, i.a)(t, "right") && (o.placement = "right"), (0, i.a)(t, "top") && (o.placement = "top"), (0, i.a)(t, "bottom") && (o.placement = "bottom"), (0, i.a)(t, "auto") && (o.placement = "auto"), (0, i.a)(t, "showslow") && (o.delay = {
                    show: 750
                }), (0, i.a)(t, "hideslow") && (o.delay = {
                    hide: 750
                }), (0, i.a)(t, "hideslower") && (o.delay = {
                    hide: 1e3
                }), $(e).tooltip(o), (0, i.a)(t, "autohide") && $(e).on("show.bs.tooltip", (() => {
                    setTimeout((function() {
                        $(e).tooltip("hide")
                    }), 3e3)
                })), $(e).on("shown.bs.tooltip", (e => (0, i.A)(n, "tooltip-shown", e))), $(e).attr("pf-tooltip", ""), $(e).attr("tabindex", 0))
            }
            const a = o.default.directive("tooltip", {
                inserted(e, t, n) {
                    s(e, t, n)
                },
                update(e, t, n) {
                    const o = t.oldValue,
                        a = t.value;
                    o !== a && (e.dataset.originalTitle = a, (0, i.a)(t, "hideempty") && (o && !a ? function(e) {
                        $(e).tooltip("destroy")
                    }(e) : !o && a && s(e, t, n)))
                }
            });
            t.Z = a
        }
    }
]);