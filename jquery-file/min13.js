/*! License information is available at https://static.cdn.printful.com/dist-pf/81877.licenses.txt if third party dependencies are included */
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [81877, 53640], {
        90045: (e, t, i) => {
            "use strict";
            i.d(t, {
                Kl: () => d,
                L9: () => a,
                RT: () => s,
                Tw: () => n,
                aQ: () => c,
                go: () => o,
                pT: () => l,
                qX: () => r,
                xh: () => u
            });
            const n = Object.freeze({
                    PACK_IN: "group_pack_in",
                    PACKAGING: "group_packaging"
                }),
                r = Object.freeze({
                    NO_SHIPPED_ANCILLARIES: "state_shipped_ancillaries",
                    NO_PROFILES: "state_no_profiles",
                    NO_PROCESSED_ANCILLARIES: "state_no_processed_ancillaries",
                    NO_PENDING_APPLICATIONS: "state_no_pending_applications"
                }),
                o = Object.freeze({
                    ENABLED: "enabled",
                    DISABLED: "disabled"
                }),
                a = Object.freeze({
                    VIEW: "view_item",
                    DEACTIVATE: "deactivate_item",
                    REMOVE: "remove_item",
                    ACTIVATE: "activate_item"
                }),
                s = Object.freeze({
                    NONE: -2,
                    STORE_DEFAULT: -1,
                    SPECIFIC: -3
                }),
                l = dlang("dashboard", "None"),
                u = Object.freeze({
                    STORE_OVERVIEW_VIEW: "store_overview_view",
                    SYNC_PRODUCT_VIEW: "sync_product_view"
                }),
                c = Object.freeze({
                    [u.STORE_OVERVIEW_VIEW]: "branding-onboarding__store-overview",
                    [u.SYNC_PRODUCT_VIEW]: ["branding-onboarding__sync-product--step-1", "branding-onboarding__sync-product--step-2"]
                }),
                d = Object.freeze({
                    [u.STORE_OVERVIEW_VIEW]: {
                        header: dlang("dashboard", "Open store view to manage"),
                        description: dlang("dashboard", "On this page, you assign a branding preset to all of the products in your store. If you want a specific product variant in your store to use a different branding preset, open the store and manage that item from there.")
                    },
                    [u.SYNC_PRODUCT_VIEW]: [{
                        header: dlang("dashboard", "Assign different branding presets to all product variants"),
                        description: dlang("dashboard", "From the drop-down menu select <i>Manage branding</i> and choose which branding preset you want the product variants to use"),
                        targetId: c[u.SYNC_PRODUCT_VIEW][0]
                    }, {
                        header: dlang("dashboard", "Assign branding presets to individual product variants"),
                        description: dlang("dashboard", "For a specific product variant to have a branding preset press <i>Edit</i> > <i>Edit item</i> > <i>Manage branding</i>"),
                        targetId: c[u.SYNC_PRODUCT_VIEW][1]
                    }]
                })
        },
        15375: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => s
            });
            var n = i(93307);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function o(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let s = o((function e() {
                var t;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), this.licensedAssetId = i.licensedAssetId, this.externalId = i.externalId, this.type = i.type, this.previewUrl = i.previewUrl, this.width = i.width, this.height = i.height, this.price = i.price, this.currency = i.currency, this.pricingStrategy = i.pricingStrategy, this.status = i.status, this.pricingModifier = i.pricingModifier, this.validForBgRemoval = i.validForBgRemoval, this.assetType = i.assetType || n._m, this.size = i.size, this.extra = null !== (t = i.extra) && void 0 !== t ? t : {}
            }))
        },
        54708: (e, t, i) => {
            "use strict";
            i.d(t, {
                B4: () => p,
                EI: () => l,
                PF: () => g,
                U: () => u,
                Uo: () => m,
                Xm: () => h,
                g6: () => v,
                ob: () => d,
                ok: () => y
            });
            var n = i(58617),
                r = i(15375),
                o = i(93307),
                a = i(79990),
                s = i(60877);
            async function l(e, t, i, o, l, u, c, d) {
                return new Promise(((p, g) => {
                    if (!["getty", "unsplash", "hosted"].includes(e)) return void g(new Error("Invalid provider"));
                    const m = (0, s.B)() || Date.now().toString();
                    (0, n.r)(a.H$, {
                        provider: e,
                        key: t,
                        currency: i,
                        storeId: o,
                        page: l,
                        minWidth: u,
                        minHeight: c,
                        type: d,
                        firstAccessTimestamp: m
                    }).then((e => {
                        e.results = (e.results || []).map((e => new r.Q(e))), p(e)
                    })).catch((e => g(e)))
                }))
            }
            async function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return new Promise(((o, s) => {
                    e && e instanceof r.Q || s(new Error("Invalid licensed asset provided")), (0, n.r)(a.Qt, {
                        assetItem: e,
                        viewLocation: t,
                        isAllOverProduct: i
                    }).then((e => o(e))).catch((e => s(e)))
                }))
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o._m;
                try {
                    return `${f}-recent-${PF.Customer.customerId?PF.Customer.customerId:""}-type-${t}-store-${e||""}`
                } catch (e) {
                    console.warn("Could not get recent licensed asset items from local storage!")
                }
            }

            function d(e, t, i) {
                try {
                    const n = c(t, i || e.assetType);
                    let r = JSON.parse(localStorage.getItem(n)) || [];
                    const a = r.findIndex((t => t.externalId === e.externalId));
                    a >= 0 && r.splice(a, 1), r.unshift(e), r.length > o.G8 && (r = r.slice(0, o.G8)), window.localStorage.setItem(n, JSON.stringify(r))
                } catch (e) {
                    console.warn("Could not save recent licensed asset items in local storage!")
                }
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o._m;
                try {
                    return JSON.parse(localStorage.getItem(c(e, t))) || []
                } catch (e) {
                    console.warn("Could not get getRecentKey from local storage!")
                }
            }
            async function g(e, t, i, o) {
                return await new Promise(((s, l) => {
                    ["getty"].includes(e) ? (0, n.r)(a.kT, {
                        itemId: t,
                        currency: i,
                        type: o
                    }).then((e => {
                        const t = e ? new r.Q(e) : null;
                        s(t)
                    })).catch((e => l(e))) : l(new Error("Invalid provider"))
                }))
            }
            async function m(e, t) {
                if (e.includes("getty")) try {
                    return await (0, n.r)(a.yG, {
                        ids: t
                    })
                } catch {
                    console.warn("Could not get removed assets")
                } else console.warn("Invalid provider")
            }
            async function h(e, t, i) {
                try {
                    return await (0, n.r)(a.GN, {
                        price: e,
                        currencyTo: t,
                        currencyFrom: i
                    })
                } catch {
                    console.warn("Could not fetch converted price.")
                }
            }
            const f = "licensedAssetItems",
                y = 1,
                v = "pro"
        },
        97345: (e, t, i) => {
            "use strict";
            i.d(t, {
                AU: () => a,
                HG: () => n,
                O2: () => E,
                OZ: () => I,
                Wd: () => v,
                XY: () => T,
                Ye: () => u,
                Zm: () => h,
                _A: () => f,
                _v: () => p,
                ak: () => P,
                cR: () => l,
                ho: () => c,
                mV: () => _,
                nB: () => m,
                oA: () => r,
                oE: () => g,
                q5: () => s,
                rA: () => y,
                x4: () => d,
                xq: () => o
            });
            const n = "push/media",
                r = "m_resetState",
                o = "m_updateState",
                a = "m_updateSelectedOptionGroup",
                s = "m_updateSelectedMainMockupVariant",
                l = "m_updateSelectedFilterAttribute",
                u = "m_updateSelectedAdditionalMockups",
                c = "m_updateTransparency",
                d = "m_updateSelectedVideoIds",
                p = "m_updateExcludedPlacement",
                g = "m_updateExcludedPlacements",
                m = "m_updateAdditionalBlockOpen",
                h = "m_updateShouldPushMockups",
                f = "m_updateIs3dModelGenerationRequired",
                y = "m_updateSelectedTemplates",
                v = "m_updateLoadedColors",
                _ = "m_updateSingleImageData",
                I = "g_mediaData",
                T = "g_shouldPushMockups",
                E = "g_mockupData";

            function P(e) {
                return n + "/" + e
            }
        },
        65163: (e, t, i) => {
            "use strict";
            i.d(t, {
                S: () => r
            });
            var n = i(9651);
            const r = Class({
                _style: null,
                _callback: null,
                _inputOptions: [],
                __construct: function(e, t) {
                    this._style = e || r.ENGRAVING_FILLED, this._callback = t, this.node = tag("div"), this._addStyles()
                },
                _addStyles: function() {
                    for (var e in n.U.clearNode(this.node), r.ENGRAVING_STYLES) {
                        var t = tag("input", {
                            type: "radio",
                            name: "engraving_style",
                            value: e,
                            checked: e === this._style.toString(),
                            prop: {
                                onchange: this.setStyle.bind(this, parseInt(e), !1)
                            }
                        });
                        this._inputOptions.push(t), tag("label", "pf-p-0", [t, tag("span", "pf-pl-8", dlang("generator", r.ENGRAVING_STYLES[e]))]).append(this.node)
                    }
                    tag("div", "", [this._styleWarning = tag("p", "pf-mt-16 alert alert-warning", dlang("generator", "Please select the mockup view to see how the outline engraving will look on the product"))]).append(this.node), this._setEngravingWarning()
                },
                setStyle: function(e, t) {
                    e || (e = r.ENGRAVING_FILLED), this._style = e, this._setEngravingWarning(), this._inputOptions.forEach((function(t) {
                        t.checked = e == t.value
                    })), !t && this._callback && this._callback(this._style)
                },
                getStyle: function() {
                    return this._style
                },
                _setEngravingWarning: function() {
                    parseInt(this._style) === r.ENGRAVING_OUTLINE ? n.U.removeClassName(this._styleWarning, "pf-d-none") : n.U.addClassName(this._styleWarning, "pf-d-none")
                }
            }, n.U.Base);
            r.ENGRAVING_FILLED = 0, r.ENGRAVING_OUTLINE = 1, r.ENGRAVING_STYLES = {}, r.ENGRAVING_STYLES[r.ENGRAVING_FILLED] = dlang("products", "Filled"), r.ENGRAVING_STYLES[r.ENGRAVING_OUTLINE] = dlang("products", "Outline"), window && ((globalThis || {}).PFComponentsEngravingStylePicker = r)
        },
        60124: (e, t, i) => {
            "use strict";
            i.d(t, {
                S: () => r
            });
            var n = i(9651);
            const r = Class({
                _par: null,
                __construct: function(e) {
                    this._par = e, this.node = tag("div", "label-template-picker"), this._render()
                },
                _render: function() {
                    var e = dlang("dashboard", "Must include {split}mandatory label info").split("{split}");
                    this.nodeBody = tag("div", null, [tag("h3", "pf-my-24 pf-p-0", [dlang("dashboard", "Choose inside label type")]), tag("div", "row", [tag("div", "col-sm-6 switcher-block pf-pl-sm-40 pf-pl-xl-0", [tag("div", {
                        className: "panel panel-default pf-mb-0 pf-rounded pf-hover-shadow pf-h-100 pf-mx-auto",
                        onclick: this._par.customTemplateSelected.bind(this)
                    }, [tag("div", "panel-heading text-center pf-rounded-top", [tag("div", "panel-title pf-ui-subheading", [dlang("dashboard", "Custom Label Template")])]), tag("div", "panel-body pf-p-24", [tag("ul", "list-unstyled pf-ui-body pf-mb-64", [tag("li", "pf-mt-0", [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), dlang("dashboard", "No pre-set fields")]), tag("li", null, [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), dlang("dashboard", "Completely customizable")]), tag("li", null, [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), tag("span", null, [e[0]]), tag("a", {
                        text: e[1],
                        prop: {
                            target: "_blank"
                        },
                        href: "/files/pdf/inside_label_guide.pdf"
                    })])]), tag("div", "text-center switcher-btn pf-w-100 pf-px-24", [tag("a", {
                        className: "pf-btn pf-btn-secondary pf-btn-block--mobile",
                        text: dlang("dashboard", "Create your own"),
                        onclick: this._par.customTemplateSelected.bind(this)
                    })])])])]), tag("div", "col-sm-6 switcher-block pf-pr-sm-40 pf-pr-xl-0 pf-pt-24 pf-pt-sm-0", [tag("div", {
                        className: "panel panel-default pf-mb-0 pf-rounded pf-hover-shadow pf-h-100 pf-mx-auto",
                        onclick: this._par.nativeTemplateSelected.bind(this)
                    }, [tag("div", "panel-heading text-center pf-rounded-top", [tag("div", {
                        className: "panel-title pf-h4",
                        text: dlang("dashboard", "Label Template"),
                        style: {
                            fontWeight: "bold"
                        }
                    })]), tag("div", "panel-body pf-p-24", [tag("ul", "list-unstyled pf-ui-body pf-mb-64", [tag("li", "pf-mt-0", [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), dlang("dashboard", "All the mandatory info included")]), tag("li", null, [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), dlang("dashboard", "Pre-made label designs")]), tag("li", null, [tag("i", "pf-i pf-i-check pf-i-24 pf-text-dark-green pf-pr-8"), dlang("dashboard", "Space for a custom logo")])]), tag("div", "text-center switcher-btn pf-w-100 pf-px-24", [tag("a", {
                        className: "pf-btn pf-btn-primary pf-btn-block--mobile",
                        text: dlang("dashboard", "Use label template"),
                        onclick: this._par.nativeTemplateSelected.bind(this)
                    })])])])])])]).append(this.node)
                }
            }, n.U.Base);
            r.Par = Class({
                nativeTemplateSelected: null,
                customTemplateSelected: null
            }), r.LABEL_CUSTOM = "custom", r.LABEL_NATIVE = "native", r.LABEL_COLOR_GROUP = "color_group", r.NATIVE_TEMPLATE_OFFSET = 2.83, window && ((globalThis || {}).PFComponentsInsideLabelTemplate = r)
        },
        7495: (e, t, i) => {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
                }
            }

            function o(e, t, i) {
                return (t = a(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function a(e) {
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
            i.d(t, {
                Y: () => s
            });
            let s = function() {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n(this, e), this.id = t.id || null, this.name = t.name || "", this.unavailableTechniques = t.unavailableTechniques || [], this.index = t.index || 0, this.extra = t.extra || {}, this.image = t.image || {}, this.isActive = t.isActive || !1, this.popularityIndex = t.popularityIndex || 0, this.createdAt = t.createdAt || "", this.tags = t.tags || "", this.isTrending = t.isTrending || t.trending || !1, this.loadedAllForTechnique = t.loadedAllForTechnique || [], this.allClipartIds = t.allClipartIds || [], this.category = t.category || ""
                }
                var t, i, o;
                return t = e, o = [{
                    key: "isShapeSymbolGroup",
                    value: function(t) {
                        return t === e.GROUP_SHAPES_SYMBOLS
                    }
                }], (i = null) && r(t.prototype, i), o && r(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            o(s, "GROUP_SHAPES_SYMBOLS", 2), o(s, "GROUP_COUNTRY_FLAGS", 99)
        },
        14176: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => s
            });
            var n = i(58232);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function o(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let s = o((function e() {
                var t, i;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), this.id = r.id || null, this.name = r.name || "", this.groupId = r.groupId || null, this.groupName = r.groupName || "", this.index = r.index || 0, this.width = (null === (t = r.image) || void 0 === t ? void 0 : t.width) || 1e3, this.height = (null === (i = r.image) || void 0 === i ? void 0 : i.height) || 1e3, this.customizable = r.customizable || !1, this.artType = r.artType || null, this.tags = r.tags || "", this.extra = r.extra || {}, this.svg = r.svg || "", this.unavailableTechniques = r.unavailableTechniques || [], this.isActive = r.isActive || !1, this.image = r.image || {}, this.type = n.hG.CLIPART, this.category = r.category || ""
            }))
        },
        66450: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => o
            });
            var n = i(59597),
                r = i(9651);
            const o = Class({
                id: null,
                name: "",
                index: 0,
                extra: {},
                isActive: !0,
                image: {},
                scale: 0,
                toArrayKeys: ["id", "name", "extra", "image", "scale"]
            }, n.$);
            o.fromArray = function(e) {
                var t = new o;
                return r.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFItemsGeneratorColorGraphicItem = o)
        },
        74194: (e, t, i) => {
            "use strict";
            i.d(t, {
                h: () => o
            });
            var n = i(59597),
                r = i(9651);
            const o = function() {
                this.sizes = []
            };
            o.prototype = new n.$, o.prototype.color = "", o.prototype.colorCode = "", o.fromArray = function(e) {
                var t = new o;
                return r.U.O2O(t, e), t
            }, o.fromColorPair = function(e) {
                var t = new o;
                return t.colorCode = e.colorCode, t.color = e.colorName, t
            }, window && ((globalThis || {}).PFItemsGeneratorColorItem = o)
        },
        28110: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => o
            });
            var n = i(59597),
                r = i(9651);
            const o = Class({
                temporaryFileId: "",
                fileType: "",
                isPrintfile: !1,
                downloadUrl: "",
                generatorVariantId: 0,
                placementId: "",
                filename: "",
                templateId: 0,
                generatedSuffix: "",
                toArrayKeys: ["temporaryFileId", "fileType", "isPrintfile", "filename"]
            }, n.$);
            o.fromArray = function(e) {
                var t = new o;
                return r.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFItemsGeneratorDownloadItem = o)
        },
        88725: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => l,
                y: () => s
            });
            var n = i(58232);

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function a(e, t, i) {
                return t && o(e.prototype, t), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            let s = function() {
                    function e(t) {
                        var i;
                        r(this, e), this.id = t.id || null, this.fontKey = t.key || t.fontKey, this.name = t.name || "";
                        const n = {};
                        for (const e in t.options) n[e] = new l(t.options[e]);
                        this.options = n, this.createdAt = t.createdAt || null, this.updatedAt = t.updatedAt || null, this.extra = t.extra || {}, this.fontUrl = (null === (i = t.url) || void 0 === i ? void 0 : i.url) || null, this.image = t.image || {}, this["path-js"] = t["path-js"] || null
                    }
                    return a(e, [{
                        key: "getOption",
                        value: function(e) {
                            return this.options[e] || null
                        }
                    }, {
                        key: "getMaxHeight",
                        value: function(e, t) {
                            var i, r, o;
                            const a = this.getOption(e);
                            return a && null !== (i = null === (r = a.placementSpecificOptions) || void 0 === r || null === (o = r[t]) || void 0 === o ? void 0 : o.maxHeight) && void 0 !== i ? i : n.nL
                        }
                    }, {
                        key: "getResizedTextHeight",
                        value: function(e, t) {
                            return this.getMaxHeight(e, t) * n.Px
                        }
                    }]), e
                }(),
                l = a((function e(t) {
                    r(this, e), this.isAvailable = (null == t ? void 0 : t.isAvailable) || !1, this.maxCharacters = (null == t ? void 0 : t.maxCharacters) || n.e$, this.placementSpecificOptions = (null == t ? void 0 : t.placementSpecificOptions) || {}, this.minSize = (null == t ? void 0 : t.minSize) || .05
                }))
        },
        72058: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => w
            });
            var n = i(9084),
                r = i(66308),
                o = i(17202),
                a = i(19639);
            const s = Class({
                originalPosition: null,
                shouldUseOriginalAreaSize: !1
            });
            s.fromArray = function(e) {
                var t = new s;
                return t.originalPosition = a.K.fromArray(e.originalPosition), t.shouldUseOriginalAreaSize = e.shouldUseOriginalAreaSize, t
            }, window && ((globalThis || {}).PFComponentsGeneratorMockupGeneratorOptions = s);
            var l = i(91414),
                u = i(19046),
                c = i(70141),
                d = i(31433),
                p = i(15974),
                g = i(54807),
                m = i(66137),
                h = i(5532),
                f = i(59597),
                y = i(91777),
                v = i(58232),
                _ = i(53938),
                I = i(22277),
                T = i(11762),
                E = i(71851),
                P = i(1042),
                S = i(71218),
                b = i(14176),
                O = i(90583),
                C = i(60124),
                L = i(27262),
                A = i(24424),
                k = i(4111);
            const w = function() {
                this.layers = []
            };
            w.prototype = new f.$, w.prototype.toArrayKeys = ["templateId", "placementId", "layers", "technique", "placementName"], w.prototype.toArrayVuexKeys = [...w.prototype.toArrayKeys, "centerDefaultYPosition", "fillMode", "width", "height", "parentTemplateId", "placementName", "placementSizeChanged", "svgPath"], w.prototype.templateId = null, w.prototype.placementId = null, w.prototype.parentTemplateId = null, w.prototype.layers = null, w.prototype.width = 0, w.prototype.height = 0, w.prototype.fillMode = "", w.prototype.svgPath = "", w.prototype.svgPathCoordinates = [], w.prototype.technique = "", w.prototype.placementName = "", w.prototype.centerDefaultYPosition = !0, w.prototype.placementSizeChanged = null, w.prototype.getKey = function() {
                return this.placementId + "_" + this.templateId
            }, w.prototype.getLowestDPI = function(e) {
                var t = 0;
                for (var i in this.layers) {
                    var n = this.layers[i].getDPI(!0, e);
                    (0 === t || n < t) && (t = n)
                }
                return t
            }, w.prototype.hasCustomizableLayersWithMultiLineText = function() {
                var e;
                return null === (e = this.layers) || void 0 === e ? void 0 : e.some((e => e.isCustomizable && e.hasMultipleLines))
            }, w.prototype.hasCustomizableLayersWithArcText = function() {
                var e;
                return null === (e = this.layers) || void 0 === e ? void 0 : e.some((e => e.isCustomizable && e.arcAngle))
            }, w.prototype.hasCustomizableLayersWithColorGraphicText = function() {
                var e;
                return null === (e = this.layers) || void 0 === e ? void 0 : e.some((e => e.isCustomizable && e.colorGraphic))
            }, w.prototype.hasCustomizableLayersWithCropImage = function() {
                var e;
                return null === (e = this.layers) || void 0 === e ? void 0 : e.some((e => e.isCustomizable && e.cropPosition))
            }, w.prototype.hasLayers = function(e) {
                return e ? this.layers.filter((function(t) {
                    return t instanceof e
                })).length > 0 : this.layers.length > 0
            }, w.prototype.hasLayer = function(e) {
                var t;
                return null === (t = this.layers) || void 0 === t ? void 0 : t.some((t => t.uniqueId === e))
            }, w.prototype.getLayerByCustomizeKey = function(e) {
                for (var t in this.layers)
                    if (this.layers[t].customizeKey === e) return this.layers[t];
                return !1
            }, w.prototype.getMirroredLayers = function() {
                return this.layers.filter((function(e) {
                    return e.parentLayerUniqueId
                }))
            }, w.prototype.hasUnmirroredLayers = function() {
                var e;
                return null === (e = this.layers) || void 0 === e ? void 0 : e.some((e => !this.getMirroredLayer(e)))
            }, w.prototype.getMirroredLayer = function(e) {
                for (const t of this.layers)
                    if (e) {
                        if (e.uniqueId == t.parentLayerUniqueId || e.parentLayerUniqueId == t.uniqueId) return t
                    } else if (t.parentLayerUniqueId) return t;
                return null
            }, w.prototype.getLayerIndex = function(e) {
                for (var t = 0, i = this.layers.length; t < i; t++)
                    if (this.layers[t].uniqueId === e.uniqueId) return t;
                return -1
            }, w.prototype.getCloneWithLayers = function(e) {
                const t = new w;
                return t.templateId = this.templateId, t.placementId = this.placementId, t.parentTemplateId = this.parentTemplateId, t.width = this.width, t.height = this.height, t.fillMode = this.fillMode, t.svgPath = this.svgPath, t.svgPathCoordinates = this.svgPathCoordinates, t.technique = this.technique, t.placementName = this.placementName, t.centerDefaultYPosition = this.centerDefaultYPosition, t.placementSizeChanged = this.placementSizeChanged, t.layers = this.layers.filter((t => t.isValidForTechnique(e))).map((e => e.getOriginalClone(!this.getMirroredLayer()))), t
            }, w.prototype.isRelated = function(e) {
                var t = this.placementId === e.placementId,
                    i = this.templateId === e.templateId,
                    n = this.parentTemplateId === e.templateId,
                    r = e.parentTemplateId && e.parentTemplateId === this.templateId,
                    o = e.parentTemplateId && e.parentTemplateId === this.parentTemplateId && e.templateId !== this.templateId;
                return t && (r || n || o || i)
            }, w.prototype.isSimple = function() {
                return !this.layers.length || 1 === this.layers.length && this.layers[0].isSimple() && !(0, L.l)(this.layers[0], this)
            }, w.prototype.isCover = function() {
                return "cover" === this.fillMode
            }, w.prototype.layersToArray = function(e, t) {
                return this.layers.map((function(i) {
                    return i.toArray(e, t)
                }))
            }, w.prototype.areLayersOverlapping = function(e) {
                let {
                    layerTypeInstances: t,
                    allowedExceptions: i
                } = e;
                for (const e in this.layers) {
                    const n = this.layers[e],
                        r = n.position;
                    if (!t || t.filter((e => n instanceof e)).length)
                        for (const e in this.layers) {
                            const o = this.layers[e],
                                a = o.position;
                            if ((!t || t.filter((e => o instanceof e)).length) && o.uniqueId !== n.uniqueId && ((null == i || !i.some((e => e.layerPropertyValues.includes(n[e.layerProperty]) && e.layerPropertyValues.includes(o[e.layerProperty])))) && r.hasIntersectionWith(a))) return !0
                        }
                }
                return !1
            }, w.prototype.exceededTextLayerCharacterLimit = function() {
                var e, t, i;
                const n = this.layers.find((e => e.isTextLayer() && !e.isValid()));
                return n ? (null == n || null === (e = n.font) || void 0 === e || null === (t = e.options) || void 0 === t || null === (i = t[this.technique]) || void 0 === i ? void 0 : i.maxCharacters) || v.e$ : null
            }, w.prototype.getDefaultPositions = function() {
                return a.K.fromArray({
                    areaWidth: this.width,
                    areaHeight: this.height,
                    width: this.width,
                    height: this.height,
                    top: 0,
                    left: 0
                })
            }, w.prototype.getFileId = function() {
                return 1 !== this.layers.length || this.hasTextLayersOnly() ? h.q.ID_TEMP_GENERATOR_FILE : this.layers.filter((function(e) {
                    return e instanceof c.t
                })).map((function(e) {
                    return e.fileItem.fileId
                })).shift()
            }, w.MUG_V1_11_OZ_TEMPLATE_ID = 43, w.MUG_V1_15_OZ_TEMPLATE_ID = 44, w.MUG_V1_SIDE_CENTER_DIST_RATIO = 293 / 1352, w.MUG_V2_11_OZ_TEMPLATE_ID = 140, w.MUG_V2_15_OZ_TEMPLATE_ID = 141, w.MUG_V2_SIDE_CENTER_DIST_RATIO = 208.5 / 1258, w.prototype.getSideCenterDistanceRatio = function() {
                switch (this.templateId) {
                    case w.MUG_V1_11_OZ_TEMPLATE_ID:
                    case w.MUG_V1_15_OZ_TEMPLATE_ID:
                        return w.MUG_V1_SIDE_CENTER_DIST_RATIO;
                    case w.MUG_V2_11_OZ_TEMPLATE_ID:
                    case w.MUG_V2_15_OZ_TEMPLATE_ID:
                        return w.MUG_V2_SIDE_CENTER_DIST_RATIO
                }
            }, w.layerFromArray = function(e) {
                let t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e.isMirroredLayer) return null;
                switch (e.type) {
                    case c.t.TYPE:
                        t = new c.t, (new n.O).hasCachedFile(e.fileId) || (new n.O).cacheFile(h.q.fromArray(e.fileItem)), t.fileItem = (new n.O).getCachedFile(e.fileId), t.overrideColors = w.getOverrideColors(e), t.embroideryType = e.embroideryType || null, t.isUpscaled = e.isUpscaled || !1, t.isRemovedBg = e.isRemovedBg || !1, t.removeBgPreview = e.removeBgPreview || null, t.designColors = e.designColors || null;
                        break;
                    case v.hG.EXTERNAL:
                        t = new m.w, t.subtype = e.subtype, t.fileItem = S.z.fromArray(e.externalFile), t.temporaryFileItem = (new n.O).getCachedFile(e.temporaryFileKey), t.overrideColors = w.getOverrideColors(e), t.embroideryType = e.embroideryType || null, t.isUpscaled = e.isUpscaled || !1, t.isRemovedBg = e.isRemovedBg || !1, t.removeBgPreview = e.removeBgPreview || null, t.shouldUseTempFile = e.shouldUseTempFile || !1;
                        break;
                    case l.K.TYPE:
                        t = new l.K, e.clipartItem && !(0, _.Js)(e.clipartItemId) && (0, _.Pb)([new b.i(e.clipartItem)]), t.clipartItem = (0, _.Js)(e.clipartItemId), e.svg && t.clipartItem && (t.clipartItem.svg = e.svg), t.fillColor = e.fillColor, t.dynamicInfo = e.dynamicInfo, t.overrideColors = w.getOverrideColors(e), t.embroideryType = e.embroideryType || null;
                        break;
                    case u.B.TYPE:
                        t = u.B.fromArray(e.textInput || e), t.embroideryType = e.embroideryType || null;
                        break;
                    case o.d.TYPE:
                        t = o.d.fromArray(e.textInput || e), t.embroideryType = e.embroideryType || null;
                        break;
                    case d.y.TYPE:
                        t = d.y.fromLicensedAssetItem(e.licensedAssetItem || e), t.isRemovedBg = e.isRemovedBg || !1, t.removeBgPreview = e.removeBgPreview || null;
                        break;
                    case P.GR:
                        if (e.object === p.F.BE_OBJECT) {
                            const i = e[p.F.BE_OBJECT];
                            i && !(0, E.j)(e.id) && (0, E.Q)([i]), t = p.F.fromObject(i || e)
                        } else e.object === A.w ? t = g.$.fromObject() : console.error("Unknown mockup layer type");
                        break;
                    default:
                        console.error("Unknown layer data type", e)
                }
                return t ? (i && e.uniqueId && (t.uniqueId = e.uniqueId), t.position = a.K.fromArray(e.position), t.customPosition = e.customPosition ? a.K.fromArray(e.customPosition) : null, e.cropPosition && (t.cropPosition = a.K.fromArray(e.cropPosition), t.cropPosition.areaWidth = t.position.areaWidth, t.cropPosition.areaHeight = t.position.areaHeight, t.cropPosition.rotation = t.position.rotation), t.originalPosition = a.K.fromArray(e.position), t.isCustomizable = e.isCustomizable, t.customizeKey = e.customizeKey, t.patternType = e.patternType || null, t.patternSpacing = e.patternSpacing || null, t.flipX = e.flipX || !1, t.flipY = e.flipY || !1, t.quickDesignId = e.quickDesignId || null, t.animation = e.animation || null, t.isLockedAndSelectable = e.isLockedAndSelectable || !1, t.isLocked = e.isLocked || !1, t.isHidden = e.isHidden || !1, t.remapOverrideColors = e.remapOverrideColors || null, t.parentLayerUniqueId = e.parentLayerUniqueId || null, t.hasMirrorLayer = e.hasMirrorLayer, t.groupType = (null == e ? void 0 : e.groupType) || (e.quickDesignId ? r.Z.GROUP_QUICK_DESIGN : null), t.groupId = e.groupId || null, t.isGroupLocked = !1, t.isExisting = !0, e.generatorOptions && Object.keys(e.generatorOptions).length > 0 && (t.generatorOptions = s.fromArray(e.generatorOptions)), (0, I.ND)() && (0, T.B$)(t), t) : null
            }, w.fromArray = function(e) {
                const t = new w;
                t.templateId = e.templateId, t.placementId = e.placementId, t.parentTemplateId = e.parentTemplateId, t.width = e.width, t.height = e.height, t.fillMode = e.fillMode, t.svgPath = e.svgPath, t.svgPathCoordinates = e.svgPathCoordinates, t.technique = e.technique, t.placementName = e.placementName, t.centerDefaultYPosition = e.centerDefaultYPosition, t.placementSizeChanged = e.placementSizeChanged || null;
                for (const i in e.layers) {
                    const n = this.layerFromArray(e.layers[i], !0);
                    n && t.addLayer(n)
                }
                return t
            }, w.getCustomizableLayersCount = function(e) {
                var t = 0;
                for (var i in e.layers) e.layers[i].isCustomizable && t++;
                return t
            }, w.getOverrideColors = function(e) {
                let t = null;
                if (e.overrideColors) {
                    for (const t of Object.keys(e.overrideColors)) e.overrideColors[t] === y.w.EMBROIDERY_NONE_COLOR_BE_LCASE_VALUE && (e.overrideColors[t] = null);
                    t = e.overrideColors
                }
                return t
            }, w.prototype.hasTextLayersOnly = function() {
                for (var e in this.layers)
                    if (!this.layers[e].isTextLayer()) return !1;
                return !0
            }, w.prototype.getMergedLayerBoundingBoxSize = function() {
                let e = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                };
                for (let t in this.layers) {
                    let i = this.layers[t].position.getBoundingBox();
                    e.left = Math.min(0 === e.left ? i.left : e.left, i.left), e.right = Math.max(0 === e.right ? i.right : e.right, i.right), e.top = Math.min(0 === e.top ? i.top : e.top, i.top), e.bottom = Math.max(0 === e.bottom ? i.bottom : e.bottom, i.bottom)
                }
                return e.width = e.right - e.left, e.height = e.bottom - e.top, e
            }, w.prototype.isTouchToolPrintFile = function() {
                return this.templateId === k.BV
            }, w.prototype.getOutlineWidth = function() {
                return k.lI.includes(this.templateId) ? k._K + k.bw : k._K
            }, w.prototype.getOutlineScaleX = function() {
                return 1 - this.getOutlineWidth() / (this.width * k.FM)
            }, w.prototype.getOutlineScaleY = function() {
                return 1 - this.getOutlineWidth() / (this.height * k.FM)
            }, w.prototype.getLayerCount = function() {
                return this.layers.length
            }, w.prototype.addLayer = function(e) {
                this.layers.push(e)
            }, w.prototype.isTechniqueInsideLabelColorGroup = function() {
                return [O.g7.T_SHIRT_INSIDE_LABEL_LIGHT, O.g7.T_SHIRT_INSIDE_LABEL_DARK, O.g7.T_SHIRT_INSIDE_LABEL_COLOR, O.g7.T_SHIRT_INSIDE_LABEL_SMALL_LIGHT, O.g7.T_SHIRT_INSIDE_LABEL_SMALL_DARK, O.g7.T_SHIRT_INSIDE_LABEL_SMALL_COLOR, O.g7.T_SHIRT_INSIDE_LABEL_2x2_LIGHT, O.g7.T_SHIRT_INSIDE_LABEL_2x2_DARK, O.g7.T_SHIRT_INSIDE_LABEL_2x2_COLOR].includes(this.technique)
            }, w.prototype.isTechniqueInsideLabelNative = function() {
                return [O.g7.T_SHIRT_INSIDE_LABEL_NATIVE, O.g7.T_SHIRT_INSIDE_LABEL_NATIVE_SMALL, O.g7.T_SHIRT_INSIDE_LABEL_NATIVE_2x2].includes(this.technique)
            }, w.prototype.isTechniqueInsideLabelCustom = function() {
                return [O.g7.T_SHIRT_INSIDE_LABEL, O.g7.T_SHIRT_INSIDE_LABEL_SMALL, O.g7.T_SHIRT_INSIDE_LABEL_2x2].includes(this.technique)
            }, w.prototype.insideLabelType = function() {
                return this.isTechniqueInsideLabelColorGroup() ? C.S.LABEL_COLOR_GROUP : this.isTechniqueInsideLabelNative() ? C.S.LABEL_NATIVE : this.isTechniqueInsideLabelCustom() ? C.S.LABEL_CUSTOM : null
            }, window && ((globalThis || {}).PFItemsGeneratorTemplateItem = w)
        },
        80510: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => u
            });
            var n = i(19639),
                r = i(59597),
                o = i(9651);

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }
            let s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.text = null, this.width = null, this.height = null, this.top = null, this.left = null, this.color = null, this.textAlign = null, this.fontFamily = null, this.fontSize = null, this.fontWeight = null, this.rotate = null
                }
                var t, i, n;
                return t = e, n = [{
                    key: "fromArray",
                    value: function(t) {
                        var i = new e;
                        return mkE.O2O(i, t), i
                    }
                }], (i = [{
                    key: "getScaledItem",
                    value: function(t) {
                        var i = new e;
                        return i.text = this.text, i.width = Math.round(this.width / t), i.height = Math.round(this.height / t), i.top = Math.round(this.top / t), i.left = Math.round(this.left / t), i.fontSize = Math.round((this.fontSize || 18) / t), i.fontWeight = this.fontWeight, i.color = this.color, i.textAlign = this.textAlign, i.rotate = this.rotate, i
                    }
                }]) && a(t.prototype, i), n && a(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            (globalThis || {}).PFItemsGeneratorVariantDynamicTextItem = s;
            var l = i(30663);
            const u = function() {};
            u.prototype = new r.$, u.prototype.generatorVariantId = null, u.prototype.color = "", u.prototype.colorCode = "", u.prototype.size = "", u.prototype.title = "", u.prototype.templateId = null, u.prototype.placementId = null, u.prototype.relatedPlacements = null, u.prototype.isActive = 0, u.prototype.generatorImageUrl = null, u.prototype.backgroundColor = null, u.prototype.backgroundShadowUrl = null, u.prototype.backgroundImageUrl = null, u.prototype.backgroundShadowThumbnailUrl = null, u.prototype.backgroundThumbnailUrl = null, u.prototype.generatorThumbnailUrl = null, u.prototype.mockupPosition = null, u.prototype.dynamicTexts = null, u.prototype.mockupPrintZIndex = null, u.prototype.variantCount = null, u.prototype.option = "", u.prototype.optionGroup = "", u.prototype.optionGroupId = null, u.prototype.orientation = "", u.prototype.hideDesignPreview = !1, u.prototype.role = "unknown", u.ROLE_ADVANCED_TEMPLATE = "advanced_template", u.ROLE_TEMPLATE = "template", u.ROLE_PRIMARY = "primary", u.prototype.templateType = null, u.prototype.noTranslationOptionGroup = "", u.prototype.noTranslationOption = "", u.prototype.mockupData = null, u.prototype.isCloseUp = function() {
                return "Close-up" === this.option
            }, u.prototype.isInsideLabel = function() {
                return l.c7.includes(this.placementId)
            }, u.prototype.isTemplate = function() {
                return this.role === u.ROLE_TEMPLATE
            }, u.prototype.isAdvancedTemplate = function() {
                return this.role === u.ROLE_ADVANCED_TEMPLATE
            }, u.prototype.isPrimary = function() {
                return this.role === u.ROLE_PRIMARY
            }, u.prototype.getKey = function() {
                return this.placementId + "_" + this.templateId
            }, u.prototype.getComparisonKey = function() {
                return `${this.generatorVariantId}-${this.placementId}-${this.templateId}-${this.parentTemplateId}`
            }, u.prototype.getColorData = function(e) {
                let t = this.colorCode,
                    i = this.color;
                if (!t && null != e && e.length)
                    if (e[0].color) {
                        const i = e.find((e => e.color === this.color));
                        t = null == i ? void 0 : i.colorCode
                    } else if (e[0].name) {
                    const i = e.find((e => e.name === this.color));
                    t = null == i ? void 0 : i.hex
                }
                return {
                    hex: t,
                    name: i
                }
            }, u.fromArray = function(e) {
                const t = new u,
                    i = n.K.fromArray(e.mockupPosition);
                o.U.O2O(t, e), t.mockupPosition = i, t.dynamicTexts = [];
                for (const i in e.dynamicTexts) {
                    const n = s.fromArray(e.dynamicTexts[i]);
                    t.dynamicTexts.push(n)
                }
                return t
            }, window && ((globalThis || {}).PFItemsGeneratorVariantItem = u)
        },
        74808: (e, t, i) => {
            "use strict";
            i.d(t, {
                n: () => r
            });
            var n = i(9651);
            const r = Class({
                variantId: null,
                color: null,
                size: null,
                templateIds: {},
                mockupIds: {},
                extraIds: {},
                advancedTemplateSize: null,
                discontinued: !1
            });
            r.fromArray = function(e) {
                var t = new r;
                return n.U.O2O(t, e), t.mockupIds = e.mockupIds || {}, t.templateIds = e.templateIds || {}, t.extraIds = e.extraIds || {}, t.advancedTemplateSize = e.advancedTemplateSize || null, t
            }, window && ((globalThis || {}).PFItemsGeneratorMappingItem = r)
        },
        55559: (e, t, i) => {
            "use strict";
            i.d(t, {
                t: () => o
            });
            var n = i(59597),
                r = i(9651);
            const o = function() {};
            o.prototype = new n.$, o.prototype.toArrayKeys = ["id", "company", "name", "address1", "address2", "city", "state", "country", "zip", "phone", "nationalPhone", "phoneCountry", "email", "tax_number"], o.prototype.id = "", o.prototype.company = "", o.prototype.name = "", o.prototype.address1 = "", o.prototype.address2 = "", o.prototype.city = "", o.prototype.state = "", o.prototype.stateName = "", o.prototype.country = "", o.prototype.countryName = "", o.prototype.zip = "", o.prototype.phone = "", o.prototype.nationalPhone = "", o.prototype.phoneCountry = "", o.prototype.email = "", o.prototype.tax_number = "", o.prototype.isVisible = !0, o.ADDRESS_TYPE_SHIPPING = "shipping", o.ADDRESS_TYPE_LEGAL = "legal", o.ADDRESS_TYPE_LEGAL_INDIVIDUAL = "legal_individual", o.ADDRESS_TYPE_DEFAULT = "default", o.prototype.isSameAs = function(e) {
                if (!(e && e instanceof o)) return !1;
                var t = this.toArray(),
                    i = e.toArray();
                for (var n in t)
                    if ((Boolean(t[n]) || Boolean(i[n])) && t[n] != i[n]) return !1;
                return !0
            }, o.prototype.hasState = function() {
                return null !== this.state && "" !== this.state
            }, o.fromArray = function(e) {
                var t = new o;
                return r.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFItemsAddressItem = o)
        },
        15311: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => s
            });
            var n = i(83056),
                r = i(5532),
                o = i(9651),
                a = i(5527);
            const s = function() {};
            s.prototype = new r.q, s.prototype.generatorVariantId = null, s.prototype.templateId = null, s.prototype.placementId = null, r.q.prototype.digitizedItems = null, s.fromArray = function(e) {
                var t = new s;
                if (o.U.O2O(t, e), t.digitizedItems = new n.Q, null != e && e.digitizedItems)
                    for (const i in e.digitizedItems) {
                        const n = e.digitizedItems[i];
                        t.digitizedItems.itemList.push(a.w.fromArray(n))
                    }
                return t
            }, window && ((globalThis || {}).PFItemsSavedGeneratorFileItem = s)
        },
        12846: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => n
            });
            const n = function() {
                this.items = []
            };
            n.prototype.page = 0, n.prototype.pages = 0, n.prototype.total = 0, n.prototype.items = null, window && ((globalThis || {}).PFItemsFileList = n)
        },
        28e3: (e, t, i) => {
            "use strict";
            i.d(t, {
                r: () => u
            });
            var n = i(59597),
                r = i(9651),
                o = i(44880),
                a = i(97993),
                s = i(30663),
                l = i(11762);
            const u = Class({
                _data: [],
                getOptionsItemForPlacement(e) {
                    return this._data.find((t => t.placement === e)) || null
                },
                getPlacementFill(e) {
                    var t;
                    const i = this.getOptionsItemForPlacement(e);
                    return null != i && null !== (t = i.options) && void 0 !== t && t.designFillValue ? {
                        designFillType: i.options.designFillType,
                        designFillValue: i.options.designFillValue,
                        designFillUrls: i.options.designFillUrls || null,
                        designFillItem: i.options.designFillItem || null
                    } : null
                },
                setPlacementFill(e, t, i, n, r) {
                    const o = this.getOptionsItemForPlacement(e);
                    this.setOptionItemFillValues(null == o ? void 0 : o.options, t, i, n, r), (0, a.i3)(o)
                },
                setAllPlacementOptions(e) {
                    for (const t of this._data) {
                        if (e) {
                            if (s.MX.includes(t.placement)) continue;
                            this.setOptionItemFillValues(null == t ? void 0 : t.options, null == e ? void 0 : e.type, null == e ? void 0 : e.value, null == e ? void 0 : e.urls, null == e ? void 0 : e.item)
                        }(0, a.i3)(t)
                    }
                },
                setOptionItemFillValues(e, t, i, n, r) {
                    e && (t && i ? (e.designFillValue = i, e.designFillType = t) : (delete e.designFillValue, delete e.designFillType), n ? e.designFillUrls = n : delete e.designFillUrls, r ? e.designFillItem = r : delete e.designFillItem)
                },
                isSameFillForAllPlacements() {
                    let e, t;
                    for (const i in this._data) {
                        const n = this._data[i];
                        if (!s.MX.includes(n.placement)) {
                            if (i > 0 && (e !== n.options.designFillValue || t !== n.options.designFillType)) return !1;
                            e = n.options.designFillValue, t = n.options.designFillType
                        }
                    }
                    return !0
                },
                hasPlacementWithFill() {
                    for (var e in this._data)
                        if (this._data[e].options.designFillValue) return !0;
                    return !1
                },
                hasPlacementWithPremiumFill() {
                    return this._data.some((e => e.options.designFillType === o.Ph))
                },
                isPremiumPlacementFill(e) {
                    var t;
                    const i = this.getOptionsItemForPlacement(e);
                    return (null == i || null === (t = i.options) || void 0 === t ? void 0 : t.designFillType) === o.Ph || !1
                },
                setPlacementOutline(e, t) {
                    const i = this.getOptionsItemForPlacement(e);
                    this.setDesignOutline(null == i ? void 0 : i.options, t), (0, a.i3)(i)
                },
                setDesignOutline(e, t) {
                    e && (t ? (e.designOutlineType = o.I2, e.designOutlineValue = t) : (delete e.designOutlineType, delete e.designOutlineValue))
                },
                getPlacementOutline(e) {
                    var t;
                    const i = this.getOptionsItemForPlacement(e);
                    return null != i && null !== (t = i.options) && void 0 !== t && t.designOutlineValue ? {
                        designOutlineType: i.options.designOutlineType,
                        designOutlineValue: i.options.designOutlineValue
                    } : null
                },
                hasPlacementWithOutline() {
                    return this._data.some((e => e.options.designOutlineValue))
                },
                setPlacementEmbroiderySubTechnique(e, t) {
                    const i = this.getOptionsItemForPlacement(e);
                    this.setEmbroiderySubTechnique(null == i ? void 0 : i.options, t), i && (0, a.i3)(i)
                },
                setEmbroiderySubTechnique(e, t) {
                    e && (t ? e.subTechniqueType = t : delete e.subTechniqueType)
                },
                getPlacementEmbroiderySubTechnique(e) {
                    const t = this.getOptionsItemForPlacement(e),
                        i = (0, l.Xk)([t]);
                    return i ? {
                        subTechniqueType: i
                    } : null
                },
                getEmbroiderySubTechnique() {
                    return (0, l.Xk)(this._data)
                },
                getData() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = [];
                    return r.U.O2O(t, this._data), e && t.forEach((e => {
                        var t;
                        null == e || (null === (t = e.options) || void 0 === t || delete t.designFillUrls)
                    })), t
                }
            }, n.$);
            u.fromArray = function(e) {
                e = e || [];
                var t = new u;
                return r.U.O2O(t._data, e), t
            }, u.duplicateFrom = function(e) {
                var t = new u;
                return r.U.O2O(t, e), t
            }
        },
        62207: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => l,
                t: () => s
            });
            var n = i(29028),
                r = i(59597),
                o = i(9651),
                a = i(55559);
            const s = function() {};
            s.prototype = new r.$, s.prototype.storeId = 0, s.prototype.name = "", s.prototype.integrationName = "", s.prototype.urlLogo = "", s.prototype.urlTypeLogo = "", s.prototype.status = "", s.prototype.type = "", s.prototype.syncError = "", s.prototype.integrationVersionWarning = null, s.prototype.returnAddress = null, s.prototype.canPushProducts = null, s.prototype.canPushCustomProducts = null, s.prototype.supportsCustomProducts = !0, s.prototype.canPushPrintfulProducts = null, s.prototype.supportsPrintfulProducts = !0, s.prototype.customProductBranchWhitelist = null, s.prototype.isInMaintenance = !1, s.prototype.isIntegrationDisabled = !1, s.prototype.showIntegrationBranding = !1, s.prototype.isSyncDisabled = !1, s.prototype.isPushDisabled = !1, s.prototype.supportsProductPush = !0, s.prototype.supportsSizeGuidePush = !1, s.prototype.flags = null, s.prototype.hasFlag = function(e) {
                return this.flags && this.flags.hasOwnProperty(e) && this.flags[e]
            }, s.prototype.getStorefrontLanguages = function() {
                var e = this.getFlagData(n.f.HAS_MULTI_LANGUAGE_PRODUCT_DETAILS);
                return e ? e.availableLanguages : []
            }, s.prototype.getStorefrontPrimaryLanguage = function() {
                var e = this.getFlagData(n.f.HAS_MULTI_LANGUAGE_PRODUCT_DETAILS);
                return e ? e.mainLanguage : null
            }, s.prototype.isStorefrontPrimaryLanguage = function(e) {
                return e && e === this.getStorefrontPrimaryLanguage()
            }, s.prototype.getFlagData = function(e) {
                return this.flags && this.flags.hasOwnProperty(e) ? this.flags[e] : null
            }, s.prototype.volumeDiscount = null, s.prototype.canSyncIncompleteItemsFromAnotherStore = function() {
                return this.hasFlag(n.f.CAN_SYNC_INCOMPLETE_ITEMS_FROM_ANOTHER_STORE)
            }, s.prototype.canRepushSyncedProducts = function() {
                return this.hasFlag(n.f.CAN_PUSH_EXISTING)
            }, s.prototype.hasCustomTaxRules = function() {
                return this.hasFlag(n.f.HAS_CUSTOM_TAX_RULES)
            }, s.prototype.canGetPushCategories = function() {
                return !!this.hasFlag(n.f.CAN_CHOOSE_PUSH_CATEGORIES) || -1 === [s.TYPE_AMAZON, s.TYPE_NATIVE, s.TYPE_EBAY, s.TYPE_WISH, s.TYPE_API_LAUNCHCART, s.TYPE_API_3DCART, s.TYPE_BONANZA, s.TYPE_TIKTOK].indexOf(this.type)
            }, s.prototype.canPushMultipleCategories = function() {
                var e = this.getFlagData(n.f.CAN_CHOOSE_PUSH_CATEGORIES);
                return e ? e.canPushMultipleCategories : -1 === [s.TYPE_ETSY, s.TYPE_EBAY].indexOf(this.type)
            }, s.prototype.isPushCategoryRequired = function() {
                const e = this.getFlagData(n.f.CAN_CHOOSE_PUSH_CATEGORIES);
                return !!e && !!e.isCategoryRequired
            }, s.prototype.canChooseShippingProfile = function() {
                return this.hasFlag(n.f.CAN_CHOOSE_SHIPPING_PROFILE)
            }, s.prototype.canManageBranding = function() {
                return this.hasFlag(n.f.CAN_MANAGE_BRANDING)
            }, s.prototype.canPushVideos = function() {
                return this.hasFlag(n.f.CAN_PUSH_VIDEOS)
            }, s.prototype.canUpdateMockupsOnStorefront = function() {
                return -1 !== [s.TYPE_SHOPIFY, s.TYPE_ETSY, s.TYPE_WOOCOMMERCE, s.TYPE_NATIVE, s.TYPE_API_LAUNCHCART, s.TYPE_API_3DCART, s.TYPE_WIX].indexOf(this.type)
            }, s.prototype.canManageStock = function() {
                return -1 !== [s.TYPE_EBAY].indexOf(this.type)
            }, s.prototype.supportsMarketplaces = function() {
                return this.hasFlag(n.f.SUPPORTS_MULTIPLE_MARKETPLACES)
            }, s.prototype.hasNoWorkingMarketplaces = function() {
                return this.hasFlag(n.f.HAS_NO_WORKING_MARKETPLACES)
            }, s.prototype.supportsAdvancedSizeGuide = function() {
                return this.hasFlag(n.f.FLAG_SUPPORTS_ADVANCED_SIZE_GUIDE)
            }, s.prototype.hasDefaultSellingRegionSet = function() {
                return this.hasFlag(n.f.FLAG_HAS_DEFAULT_SELLING_REGION_SET)
            }, s.prototype.isDSRSettingLocked = function() {
                return this.hasFlag(n.f.FLAG_IS_DSR_SETTING_LOCKED)
            }, s.prototype.canUpdateStock = function() {
                return !!this.canManageStock() && -1 !== [].indexOf(this.type)
            }, s.prototype.canUpdateIntegrationProduct = function() {
                return -1 !== [s.TYPE_EBAY].indexOf(this.type)
            }, s.prototype.canSetVisibility = function() {
                return -1 === [s.TYPE_AMAZON, s.TYPE_NATIVE, s.TYPE_ETSY, s.TYPE_EBAY, s.TYPE_API_LAUNCHCART, s.TYPE_API_3DCART, s.TYPE_WIX, s.TYPE_BONANZA, s.TYPE_WEBFLOW, s.TYPE_SQUARE, s.TYPE_TIKTOK].indexOf(this.type)
            }, s.prototype.isUnsupportedPushSource = function() {
                return [s.TYPE_NATIVE, s.TYPE_SHIPSTATION, s.TYPE_SQUARESPACE, s.TYPE_API_3DCART, s.TYPE_API_LAUNCHCART].indexOf(this.type) > -1
            }, s.prototype.supportsHTMLDescription = function() {
                return [s.TYPE_SHOPIFY, s.TYPE_WOOCOMMERCE, s.TYPE_STORENVY, s.TYPE_WIX, s.TYPE_BIGCARTEL, s.TYPE_BIGCOMMERCE, s.TYPE_SQUARESPACE, s.TYPE_ECWID, s.TYPE_WEEBLY, s.TYPE_PRESTASHOP, s.TYPE_SQUARE, s.TYPE_MAGENTO2, s.TYPE_NUVEMSHOP].includes(this.type)
            }, s.prototype.needsAllVariantCombinations = function() {
                return [s.TYPE_ETSY, s.TYPE_WEBFLOW].indexOf(this.type) > -1
            }, s.prototype.canSpecifyTaxCode = function() {
                return this.hasFlag(n.f.CAN_SPECIFY_TAX_INFO)
            }, s.prototype.currency = null, s.prototype.retailCurrency = null, s.prototype.retailCurrencyRate = null, s.prototype.hasSyncProducts = null, s.prototype.isNative = function() {
                return this.type === s.TYPE_NATIVE || this.isAnonymous()
            }, s.prototype.isThirdPartyApiIntegration = function() {
                return [s.TYPE_API_3DCART, s.TYPE_API_LAUNCHCART].indexOf(this.type) > -1
            }, s.prototype.hasDifferentRetailCurrency = function() {
                return this.currency !== this.retailCurrency
            }, s.prototype.isAnonymous = function() {
                return this.type === s.TYPE_ANONYMOUS
            }, s.prototype.isEtsy = function() {
                return this.type === s.TYPE_ETSY
            }, s.prototype.isEbay = function() {
                return this.type === s.TYPE_EBAY
            }, s.prototype.isStorenvy = function() {
                return this.type === s.TYPE_STORENVY
            }, s.prototype.isWix = function() {
                return this.type === s.TYPE_WIX
            }, s.prototype.isWish = function() {
                return this.type === s.TYPE_WISH
            }, s.prototype.isBigcommerce = function() {
                return this.type === s.TYPE_BIGCOMMERCE
            }, s.prototype.isAmazon = function() {
                return this.type === s.TYPE_AMAZON
            }, s.prototype.isShopify = function() {
                return this.type === s.TYPE_SHOPIFY
            }, s.prototype.isBonanza = function() {
                return this.type === s.TYPE_BONANZA
            }, s.prototype.isWoocommerce = function() {
                return this.type === s.TYPE_WOOCOMMERCE
            }, s.prototype.isSquarespace = function() {
                return this.type === s.TYPE_SQUARESPACE
            }, s.prototype.isBase = function() {
                return this.type === s.TYPE_BASE
            }, s.prototype.isTikTok = function() {
                return this.type === s.TYPE_TIKTOK
            }, s.prototype.hasPersonalLogo = !1, s.prototype.isRemoved = function() {
                return "removed" == this.status
            }, s.prototype.isSyncDisabled = null, s.prototype.hasPaymentMethods = null, s.prototype.hasNewProductBetaAccess = !1, s.prototype.isHidden = !1, s.fromArray = function(e) {
                var t = e.type || null,
                    i = new s;
                return t === s.TYPE_EBAY && (i = new l), i.returnAddress = a.t.fromArray(e.returnAddress), delete e.returnAddress, o.U.O2O(i, e), i
            }, s.prototype.isIntegrationUnavailable = function() {
                return this.isIntegrationDisabled
            }, s.prototype.getIntegrationUnavailableText = function() {
                return this.isInMaintenance ? dlang("stores", "Temporarily unavailable") : this.isIntegrationDisabled ? dlang("stores", "Integration disabled") : ""
            }, s.prototype.getPushDisabledText = function() {
                return dlang("stores", "Product push temporary disabled")
            }, s.prototype.getSyncDisabledText = function() {
                return dlang("stores", "Store sync temporary disabled")
            }, s.prototype.shouldAllowFreeShippingPush = function() {
                return this.hasFlag(n.f.ALLOW_FREE_SHIPPING_PUSH)
            }, s.prototype.shouldShowSyncAsYouGoSection = function() {
                return this.hasFlag(n.f.FLAG_SYNC_AS_YOU_GO_SECTION)
            }, s.TYPE_SHOPIFY = "shopify", s.TYPE_OPENCART = "opencart", s.TYPE_ANONYMOUS = "anonymous", s.TYPE_NATIVE = "native", s.TYPE_BIGCOMMERCE = "bigcommerce", s.TYPE_BIGCARTEL = "bigcartel", s.TYPE_ECWID = "ecwid", s.TYPE_TICTAIL = "tictail", s.TYPE_AMAZON = "amazon", s.TYPE_WEEBLY = "weebly", s.TYPE_SQUARESPACE = "squarespace", s.TYPE_STORENVY = "storenvy", s.TYPE_WOOCOMMERCE = "woocommerce", s.TYPE_SHIPSTATION = "shipstation", s.TYPE_ETSY = "etsy", s.TYPE_EBAY = "ebay", s.TYPE_WISH = "wish", s.TYPE_PRESTASHOP = "prestashop", s.TYPE_API_3DCART = "3dcart", s.TYPE_API_LAUNCHCART = "launchcart", s.TYPE_MAGENTO2 = "magento2", s.TYPE_WIX = "wix", s.TYPE_BONANZA = "bonanza", s.TYPE_WEBFLOW = "webflow", s.TYPE_SQUARE = "square", s.TYPE_NUVEMSHOP = "nuvemshop", s.TYPE_TIENDANUBE = "tiendanube", s.TYPE_BASE = "base", s.TYPE_TIKTOK = "tiktok", s.TYPE_AMAZON_DF = "amazon-df";
            const l = function() {};
            l.prototype = new s, l.prototype.newProductLimits = null, l.prototype.hasEnabledLimits = function() {
                return !!this.newProductLimits.enabled
            }, s.prototype.hasAuthError = !1, s.prototype.isWebsiteUrlEditingAvailable = !1, s.prototype.isLimitedByDSRSetting = function() {
                return this.hasFlag(n.f.FLAG_IS_LIMITED_BY_DSR_SETTINGS)
            }, s.prototype.isLimitedByIntegration = function() {
                return this.hasFlag(n.f.FLAG_IS_LIMITED_BY_INTEGRATION)
            }, s.prototype.isLimited = function() {
                return this.isLimitedByDSRSetting() || this.isLimitedByIntegration()
            }, s.prototype.dataLayerData = {}, window && ((globalThis || {}).PFItemsStoreItem = s, (globalThis || {}).PFItemsStoreItemsEbayStoreItem = l)
        },
        29028: (e, t, i) => {
            "use strict";
            i.d(t, {
                f: () => n
            });
            const n = function() {};
            n.FLAG_PRODUCT_LEVEL_PRICING = "PRODUCT_LEVEL_PRICING", n.FLAG_ENROLLED_IN_FULFILLMENT_ORDERS = "ENROLLED_IN_FULFILLMENT_ORDERS", n.HAS_MARKETPLACE_CATEGORY_PICKER = "HAS_MARKETPLACE_CATEGORY_PICKER", n.CAN_CHOOSE_PUSH_CATEGORIES = "CAN_CHOOSE_PUSH_CATEGORIES", n.CAN_CHOOSE_SHIPPING_PROFILE = "CAN_CHOOSE_SHIPPING_PROFILE", n.CAN_PUSH_VIDEOS = "CAN_PUSH_VIDEOS", n.HAS_LIMITED_AVAILABLE_PRINTFUL_PRODUCTS = "HAS_LIMITED_AVAILABLE_PRINTFUL_PRODUCTS", n.HAS_CUSTOM_TAX_RULES = "HAS_CUSTOM_TAX_RULES", n.CAN_PUSH_EXISTING = "CAN_PUSH_EXISTING", n.HAS_MULTI_LANGUAGE_PRODUCT_DETAILS = "HAS_MULTI_LANGUAGE_PRODUCT_DETAILS", n.CAN_SYNC_INCOMPLETE_ITEMS_FROM_ANOTHER_STORE = "CAN_SYNC_INCOMPLETE_ITEMS_FROM_ANOTHER_STORE", n.SQUARESPACE_HAS_OAUTH = "SQUARESPACE_HAS_OAUTH", n.ALLOW_FREE_SHIPPING_PUSH = "ALLOW_FREE_SHIPPING_PUSH", n.SUPPORTS_MULTIPLE_MARKETPLACES = "SUPPORTS_MULTIPLE_MARKETPLACES", n.HAS_NO_WORKING_MARKETPLACES = "HAS_NO_WORKING_MARKETPLACES", n.FLAG_CUSTOM_INSIDE_LABELS_ALLOWED = "CUSTOM_INSIDE_LABELS_ALLOWED", n.FLAG_LIVE_RATES = "HAS_LIVE_RATES_ENABLED", n.FLAG_FREE_SHIPPING_FOR_LIVE_RATES = "HAS_FREE_SHIPPING_FOR_LIVE_RATES", n.FLAG_SUPPORTS_ADVANCED_SIZE_GUIDE = "SUPPORTS_ADVANCED_SIZE_GUIDE", n.FLAG_HAS_DEFAULT_SELLING_REGION_SET = "HAS_DEFAULT_SELLING_REGION_SET", n.FLAG_IS_LIMITED_BY_DSR_SETTINGS = "IS_LIMITED_BY_DSR_SETTINGS", n.FLAG_CAN_SET_SKU_PREFIX_IN_PUSH = "CAN_SET_SKU_PREFIX_IN_PUSH", n.FLAG_CAN_SYNC_STOCK = "CAN_SYNC_STOCK", n.FLAG_SYNC_AS_YOU_GO_SECTION = "SHOULD_SHOW_SYNC_AS_YOU_GO_SECTION", n.CAN_MANAGE_BRANDING = "CAN_MANAGE_BRANDING", n.FLAG_IS_DSR_SETTING_LOCKED = "IS_DSR_SETTING_LOCKED", n.FLAG_IS_LIMITED_BY_INTEGRATION = "IS_LIMITED_BY_INTEGRATION", n.CAN_SPECIFY_TAX_INFO = "CAN_SPECIFY_TAX_INFO", window && ((globalThis || {}).PFItemsStoreItemFlags = n)
        },
        71218: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => o
            });
            var n = i(59597),
                r = i(9651);
            const o = function() {};
            o.prototype = new n.$, o.prototype.fileId = 0, o.prototype.temporaryFileKey = null, o.prototype.filename = null, o.prototype.size = null, o.prototype.type = null, o.prototype.isImage = null, o.prototype.urlThumb = null, o.prototype.urlLarge = null, o.prototype.width = null, o.prototype.height = null, o.prototype.isVector = null, o.prototype.isReady = null, o.prototype.isProcessing = null, o.prototype.reasonFailed = null, o.prototype.metaData = null, o.fromArray = function(e) {
                var t = new o;
                return r.U.O2O(t, e), t
            }, window && ((globalThis || {}).PFItemsTemporaryFileItem = o)
        },
        11072: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => c
            });
            var n, r, o, a, s, l = i(65613),
                u = i(58617);
            const c = {
                translations: {},
                defaultLocale: "en_US",
                locale: "en_US",
                userLocale: (null === (n = window.PF) || void 0 === n || null === (r = n.Config) || void 0 === r ? void 0 : r.USER_LOCALE) || "",
                language: (null === (o = window.PF) || void 0 === o || null === (a = o.Config) || void 0 === a || null === (s = a.LANG_CONFIG) || void 0 === s ? void 0 : s.language) || "en",
                defaultDomain: "global",
                nonDefaultLocales: [],
                debug: !1,
                pluralFormulas: {
                    en_US: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    en_GB: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    en_CA: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    es_ES: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    de_DE: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    fr_FR: function(e) {
                        return e > 1 ? 1 : 0
                    },
                    ja_JP: function(e) {
                        return 0
                    },
                    it_IT: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    pt_BR: function(e) {
                        return e > 1 ? 1 : 0
                    },
                    nl_NL: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    sv_SE: function(e) {
                        return 1 == e ? 0 : 1
                    },
                    pl_PL: function(e) {
                        return 1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                    }
                },
                _output: function(e) {
                    return this.debug ? "*$*" + e + "*$*" : e
                },
                lang: function(e) {
                    return this.dlang(this.defaultDomain, e)
                },
                nlang: function(e, t, i) {
                    return this.dnlang(this.defaultDomain, e, t, i)
                },
                clang: function(e, t) {
                    return this.dclang(this.defaultDomain, e, t)
                },
                nclang: function(e, t, i, n) {
                    return this.dnclang(this.defaultDomain, e, t, i, n)
                },
                dlang: function(e, t) {
                    if (void 0 !== c.translations[e] || this.locale == this.defaultLocale || this.isEnglish() || console.error("Translations not loaded for " + e + ". For string: " + t), void 0 === c.translations[e] || void 0 === c.translations[e][t]) return this._output(t);
                    let i = c.translations[e][t];
                    return Array.isArray(i) && (i = i[0]), this._output(i || t)
                },
                dclang: function(e, t, i) {
                    const n = this.getContextKey(t, i),
                        r = this.dlang(e, n);
                    return void 0 !== r && n !== r && "" !== r ? this._output(r) : this._output(i)
                },
                dnlang: function(e, t, i, n) {
                    return this.getPluralForm(e, t, t, i, n)
                },
                dnclang: function(e, t, i, n, r) {
                    const o = this.getContextKey(t, i);
                    return this.getPluralForm(e, o, i, n, r)
                },
                getContextKey: function(e, t) {
                    return e + "\\u0004" + t
                },
                getPluralForm: function(e, t, i, n, r) {
                    let o = null;
                    void 0 !== c.translations[e] && void 0 !== c.translations[e][t] || (o = [i, n]), null === o && (o = c.translations[e][t]);
                    const a = this.getPluralIndex(r),
                        s = 1 == a ? n : i;
                    return Array.isArray(o) ? this._output((o[a] || s).replace(/%d/, r)) : (console.error("Plurals not defined for ", i, n), this._output(s.replace(/%d/, r)))
                },
                getPluralIndex: function(e) {
                    const t = this.pluralFormulas[this.locale];
                    return t ? t(e) : ((0, l.logError)("Plural missing for " + this.locale), 0)
                },
                updatePluralFormula: function(e) {
                    return !this.pluralFormula && (this.pluralFormula = e["plural-forms"], !0)
                },
                load: function(e) {
                    const t = Object.values(e).shift()[""],
                        i = t.domain;
                    this.updatePluralFormula(t), this.locale = t.lang, this.setLanguage(this.locale), delete e[i][""], this.translations[i] = e[i], this.setLangHeader()
                },
                setLanguage: function(e) {
                    const t = e.split("_")[0];
                    switch (e) {
                        case "ja_JP":
                            this.language = "jp";
                            break;
                        case "pt_BR":
                            this.language = "br";
                            break;
                        case "en_GB":
                            this.language = "uk";
                            break;
                        case "en_CA":
                            this.language = "ca";
                            break;
                        default:
                            this.language = t
                    }
                },
                setLangHeader: function() {
                    $.ajaxPrefilter((function(e, t, i) {
                        i.setRequestHeader("X-PF-Language", c.language)
                    })), (0, u.a)("X-PF-Language", c.language)
                },
                langUrl: function(e) {
                    if (this.locale != this.defaultLocale) {
                        const t = 0 === e.indexOf("/") ? e.slice(1) : e;
                        return "/" + this.language + "/" + t
                    }
                    return e
                },
                setLocales: function(e) {
                    this.nonDefaultLocales = e.nonDefaultLocales
                },
                langImage: function(e) {
                    if (this.locale == this.defaultLocale) return PF.ASSETS_URL + e;
                    const t = (e || "").split(".");
                    if (t.length < 2) return e;
                    const i = t.pop();
                    return PF.ASSETS_URL + t.join(".") + "-" + this.language + "." + i
                },
                langDateFormat: function(e) {
                    return this.isJp() ? e = (e = (e = (e = (e = (e = (e = (e = (e = (e = " " + (e = e.replace(/M+.*D+.*Y+(.*)/g, "YYYY M D $1"))).replace(/[^M]MM(?!M)/g, " M")).replace(/[^M]MMM(?!M)/g, " M")).replace(/[^D]DD(?!D)/g, " D")).replace(/(D)(?!D)/g, "$1æ—¥")).replace(/[^M]M(?!M)/g, "Mæœˆ")).replace(/(Y)(?!Y)/gi, "$1å¹´")).replace(/ (?!([HhmsA]))/g, "")).replace(/-/g, "")).replace(/,/g, "") : e
                },
                getUserLocale: function() {
                    var e, t;
                    return (null === (e = window.PF) || void 0 === e || null === (t = e.Config) || void 0 === t ? void 0 : t.USER_LOCALE) || ""
                },
                isJp: function() {
                    return "ja_JP" === this.locale
                },
                isUs: function() {
                    return "en_US" === this.locale
                },
                isFr: function() {
                    return "fr_FR" === this.locale
                },
                isEs: function() {
                    return "es_ES" === this.locale
                },
                isDe: function() {
                    return "de_DE" === this.locale
                },
                isES: function() {
                    return "es_ES" === this.locale
                },
                isPtBr: function() {
                    return "pt_BR" === this.locale
                },
                isNl: function() {
                    return "nl_NL" === this.locale
                },
                isIT: function() {
                    return "it_IT" === this.locale
                },
                isUK: function() {
                    return "en_GB" === this.locale
                },
                isCa: function() {
                    return "en_CA" === this.locale
                },
                isEnglish: function() {
                    return this.isUs() || this.isUK() || this.isCa()
                }
            };
            window && ((globalThis || {}).PFLang = c, window.lang = function(e) {
                return c.lang(e)
            }, window.nlang = function(e, t, i) {
                return c.nlang(e, t, i)
            }, window.clang = function(e, t) {
                return c.clang(e, t)
            }, window.nclang = function(e, t, i, n) {
                return c.nclang(e, t, i, n)
            }, window.dlang = function(e, t) {
                return c.dlang(e, t)
            }, window.dnlang = function(e, t, i, n) {
                return c.dnlang(e, t, i, n)
            }, window.dclang = function(e, t, i) {
                return c.dclang(e, t, i)
            }, window.dnclang = function(e, t, i, n, r) {
                return c.dnclang(e, t, i, n, r)
            }, window.langUrl = function(e) {
                var t;
                return void 0 !== (null === (t = window.PfUrls) || void 0 === t ? void 0 : t[e]) ? window.PfUrls[e] : c.langUrl(e)
            }, window.langImage = function(e) {
                return c.langImage(e)
            }, window.langDateFormat = function(e) {
                return c.langDateFormat(e)
            })
        },
        60946: (e, t, i) => {
            "use strict";
            i.d(t, {
                D: () => n
            });
            const n = {};

            function r() {
                var e, t;
                return (null === (e = PF) || void 0 === e || null === (t = e.Config) || void 0 === t ? void 0 : t.PUSHER_CONFIG) || {
                    APP_KEY: null,
                    APP_CLUSTER: null,
                    AUTH_ENDPOINT: null,
                    CSRF_TOKEN: null,
                    CHANNEL_SUFFIX: null
                }
            }
            n.subscribe = function(e, t, i) {
                const r = n.getChannel(e);
                r.callbacks.get(t) && r.unbind(t);
                const o = r.bind(t, i);
                return o.subscribed || (console.log("Failed to subscribe", "channel:", e, "eventName:", t, "callback:", i), console.log(o)), o
            }, n.subscribeAnonymousUpload = function(e, t, i) {
                return e || console.error("Subscribing to a anonymous file upload channel, but no fileId is given"), n.subscribe(this.CHANNEL_ANONYMOUS_UPLOAD + "-" + e, t, i)
            }, n.subscribeStore = function(e, t, i, r) {
                return e || console.error("Subscribing to a store channel, but no storeId is given"), n.subscribe(n._getFormattedStoreChannel(e, t), i, r)
            }, n.unbind = function(e, t, i) {
                var r = n._channels[e];
                r ? r.unbind(t, i) : console.error("Trying to unbind " + e + " channel " + t + " event, but no channel exists")
            }, n.unbindStore = function(e, t, i, r) {
                n.unbind(n._getFormattedStoreChannel(e, t), i, r)
            }, n.unbindEnvironment = function(e, t, i, r) {
                n.unbind(n._getFormattedEnvironmentChannel(e, t), i, r)
            }, n.subscribeEnvironment = function(e, t, i, r) {
                return e || console.error("Subscribing to a environment channel, but no id is given"), n.subscribe(n._getFormattedEnvironmentChannel(e, t), i, r)
            }, n.subscribeCustomer = function(e, t, i, r) {
                return e || console.error("Subscribing to a customer channel, but no id is given"), n.subscribe(n._getFormattedCustomerChannel(e, t), i, r)
            }, n.unbindCustomer = function(e, t, i, r) {
                n.unbind(n._getFormattedCustomerChannel(e, t), i, r)
            }, n.unbindTransaction = function(e, t, i, r, o) {
                n.unbind(n._getFormattedTransactionChannel(e, t, i), r, o)
            }, n.subscribeTransaction = function(e, t, i, r, o) {
                return e || console.error("Subscribing to a transaction channel, but no id is given"), n.subscribe(n._getFormattedTransactionChannel(e, t, i), r, o)
            }, n._getFormattedStoreChannel = function(e, t) {
                return "private-store-" + e + "-" + t
            }, n._getFormattedEnvironmentChannel = function(e, t) {
                return "private-environment-" + e + "-" + t
            }, n._getFormattedCustomerChannel = function(e, t) {
                return "private-customer-" + e + "-" + t
            }, n._getFormattedTransactionChannel = function(e, t, i) {
                return "private-transaction-" + e + "-" + t + "-" + i
            }, n.getChannel = function(e) {
                if (!n._channels[e]) {
                    var t = e + n.CHANNEL_SUFFIX();
                    n._channels[e] = n._getInstance().subscribe(t)
                }
                return n._channels[e]
            }, n._getInstance = function() {
                return n._instance || (n._instance = new window.Pusher(n.APP_KEY(), {
                    authEndpoint: n.AUTH_ENDPOINT(),
                    cluster: n.APP_CLUSTER(),
                    auth: {
                        headers: {
                            "X-CSRF-Token": n.CSRF_TOKEN()
                        }
                    }
                }), PF.DEV && (window.Pusher.log = window.console.log)), n._instance
            }, n.APP_KEY = () => r().APP_KEY, n.APP_CLUSTER = () => r().APP_CLUSTER, n.AUTH_ENDPOINT = () => r().AUTH_ENDPOINT, n.CSRF_TOKEN = () => r().CSRF_TOKEN, n.CHANNEL_SUFFIX = () => r().CHANNEL_SUFFIX, n._instance = null, n._channels = {}, n.CHANNEL_SYNC = "sync", n.CHANNEL_LIBRARY = "library", n.CHANEL_STATUS = "status", n.CHANNEL_ANONYMOUS_UPLOAD = "anonymous-upload", n.CHANNEL_EMAIL_CONFIRMATION = "email-confirmation", n.CHANNEL_PRO_SUBSCRIPTION = "pro-subscription", n.EVENT_PRODUCT_PUSHED = "productPushed", n.EVENT_UPDATE = "update", n.EVENT_SUCCESS = "onSuccess", n.EVENT_COMPLETED = "completed", n.EVENT_EMAIL_CONFIRMED = "onEmailConfirmed", n.EVENT_PRO_SUBSCRIBED = "onProSubscribed", window && ((globalThis || {}).PFPusher = n)
        },
        4918: (e, t, i) => {
            "use strict";
            i.d(t, {
                u: () => s
            });
            var n = i(9084);
            const r = Class({
                _filesByPlacement: {},
                addFile: function(e, t) {
                    var i = this.getFiles(e);
                    i.push(t), this._filesByPlacement[e.id] = i
                },
                removeFile: function(e, t) {
                    var i = this.getFiles(e);
                    for (var n in i)
                        if (i[n].fileId == t.fileId) return i.splice(n, 1), void(this._filesByPlacement[e.id] = i)
                },
                getFiles: function(e) {
                    return this._filesByPlacement[e.id] || []
                },
                getFileIdsByPlacement: function() {
                    var e = {};
                    for (var t in this._filesByPlacement) {
                        e[t] = e[t] || [];
                        var i = this.getFiles({
                            id: t
                        });
                        for (var n in i) e[t].push(i[n].fileId)
                    }
                    return e
                },
                hasFiles: function(e) {
                    return console.error("Should switch to template usage in hasFiles()"), this.getFiles(e).length > 0
                }
            });
            window && ((globalThis || {}).PFProductPushPlacementFiles = r);
            var o = i(92939),
                a = i(72058);
            const s = Class({
                placementFiles: {},
                _templates: {},
                productId: 0,
                _storageTemplatesKey: "mockupGeneratorTemplates",
                _storagePlacementFilesKey: "mockupGeneratorPlacementFiles",
                _storage: null,
                __construct: function(e) {
                    this._productId = e;
                    try {
                        this._storage = window.sessionStorage
                    } catch (e) {
                        console.log("Session storage not supported!")
                    }
                },
                loadFromStorage: function(e) {
                    var t = this._storage.getItem(this._storageTemplatesKey);
                    if (this._storage.removeItem(this._storageTemplatesKey), t) {
                        var i = JSON.parse(t);
                        if (i = i[this._productId]) {
                            var r = {};
                            for (var o in i) {
                                var a = i[o];
                                for (var s in a.layers) {
                                    var l = a.layers[s];
                                    r[l.fileId] = l.fileId
                                }
                            }(new n.O).getByIds(Object.keys(r), this._onFilesLoaded.bind(this, i, e), !1)
                        }
                    }
                },
                async _onFilesLoaded(e, t) {
                    const {
                        setPFCanvasFonts: n
                    } = await i.e(40596).then(i.bind(i, 28073));
                    for (var r in await n(), this._templates = {}, e) this._templates[r] = a.M.fromArray(e[r]);
                    var o = this._getPlacementFiles();
                    this._storage.removeItem(this._storagePlacementFilesKey), t(this._templates, o)
                },
                rememberTemplates: function(e) {
                    this._templates = e.templates, this._placementFiles = e.filesIdsByPlacement, this._savePlacementFilesToStorage(), this._saveTemplatesToStorage()
                },
                _savePlacementFilesToStorage: function() {
                    var e = {};
                    if (e[this._productId] = [], this._placementFiles) {
                        e[this._productId] = this._placementFiles;
                        try {
                            this._storage.setItem(this._storagePlacementFilesKey, JSON.stringify(e))
                        } catch (e) {
                            this._showAlert()
                        }
                    }
                },
                _saveTemplatesToStorage: function() {
                    var e = [],
                        t = {};
                    if (t[this._productId] = [], !$.isEmptyObject(this._templates)) {
                        for (var i in this._templates) e.push(this._templates[i].toArray());
                        t[this._productId] = e;
                        try {
                            this._storage.setItem(this._storageTemplatesKey, JSON.stringify(t))
                        } catch (e) {
                            this._showAlert()
                        }
                    }
                },
                _getPlacementFiles: function() {
                    var e = new r,
                        t = this._storage.getItem(this._storagePlacementFilesKey),
                        i = (JSON.parse(t) || {})[this._productId];
                    for (var a in i)
                        for (var s in i[a]) {
                            var l = new o.M;
                            l.id = a, e.addFile(l, (new n.O).getCachedFile(i[a][s]))
                        }
                    return e
                },
                _clearStorage: function() {
                    try {
                        this._storage.setItem(this._storageTemplatesKey, JSON.stringify({})), this._storage.setItem(this._storagePlacementFilesKey, JSON.stringify({}))
                    } catch (e) {
                        this._showAlert()
                    }
                },
                hasPositions: function() {
                    var e = this._storage.getItem(this._storageTemplatesKey);
                    if (e && JSON.parse(e)[this._productId]) return !0;
                    return !1
                },
                _showAlert: function() {
                    alert(dlang("generator", "You are in a Private/Incognito Mode. It does not support storing settings locally."))
                }
            });
            s._KEY_DESIGN_CACHED_IN_SESSION = "designCachedInSession", s.setDesignCachedInSession = function() {
                try {
                    window.sessionStorage.setItem(s._KEY_DESIGN_CACHED_IN_SESSION, "true")
                } catch (e) {
                    console.log("Session storage not supported!")
                }
            }, s.isDesignCachedInSession = function() {
                try {
                    return !!PF.Customer.isLogged() && window.sessionStorage.getItem(s._KEY_DESIGN_CACHED_IN_SESSION)
                } catch (e) {
                    return console.log("Session storage not supported!"), !1
                }
            }, s.unsetDesignCachedInSession = function() {
                try {
                    s.isDesignCachedInSession() && window.sessionStorage.removeItem(s._KEY_DESIGN_CACHED_IN_SESSION)
                } catch (e) {
                    console.log("Session storage not supported!")
                }
            }, s._KEY_SUB_TECHNIQUE_VALUE_IN_SESSION = "subTechniqueValueInSession", s.setSubTechniqueValueInSession = function(e) {
                try {
                    window.sessionStorage.setItem(s._KEY_SUB_TECHNIQUE_VALUE_IN_SESSION, e)
                } catch (e) {
                    console.log("Session storage not supported!")
                }
            }, s.getSubTechniqueValueInSession = function() {
                try {
                    return window.sessionStorage.getItem(s._KEY_SUB_TECHNIQUE_VALUE_IN_SESSION)
                } catch (e) {
                    return console.log("Session storage not supported!"), null
                }
            }, (globalThis || {}).PFMockupGeneratorMemory = s
        },
        39930: (e, t, i) => {
            "use strict";
            i.d(t, {
                J: () => ee
            });
            var n = i(61756),
                r = i(47586),
                o = i(4918),
                a = i(17298),
                s = i(97993),
                l = i(58232);

            function u(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p(n.key), n)
                }
            }

            function c(e, t) {
                m(e, t), t.add(e)
            }

            function d(e, t, i) {
                return (t = p(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function p(e) {
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

            function g(e, t, i) {
                m(e, t), t.set(e, i)
            }

            function m(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function h(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, v(e, t, "get"))
            }

            function f(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function y(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, v(e, t, "set"), i), i
            }

            function v(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var _ = new WeakMap,
                I = new WeakMap,
                T = new WeakMap,
                E = new WeakMap,
                P = new WeakMap,
                S = new WeakMap,
                b = new WeakMap,
                O = new WeakMap,
                C = new WeakMap,
                L = new WeakMap,
                A = new WeakMap,
                k = new WeakMap,
                w = new WeakMap,
                R = new WeakMap,
                D = new WeakMap,
                N = new WeakMap,
                M = new WeakMap,
                F = new WeakSet,
                V = new WeakMap,
                x = new WeakSet,
                G = new WeakSet,
                B = new WeakSet,
                U = new WeakMap,
                H = new WeakSet,
                z = new WeakSet,
                j = new WeakMap,
                Y = new WeakSet,
                q = new WeakSet,
                W = new WeakSet,
                K = new WeakSet,
                Q = new WeakSet,
                X = new WeakSet,
                $ = new WeakSet,
                Z = new WeakSet,
                J = new WeakSet;
            let ee = function() {
                function e(t, i, u) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), c(this, J), c(this, Z), c(this, $), c(this, X), c(this, Q), c(this, K), c(this, W), c(this, q), c(this, Y), c(this, z), c(this, H), c(this, B), c(this, G), c(this, x), c(this, F), g(this, _, {
                        writable: !0,
                        value: l.uT
                    }), g(this, I, {
                        writable: !0,
                        value: "js--has-before-close"
                    }), g(this, T, {
                        writable: !0,
                        value: "js--variant-picker-continue-button"
                    }), g(this, E, {
                        writable: !0,
                        value: "js--back-to-catalog-link"
                    }), g(this, P, {
                        writable: !0,
                        value: "js--back"
                    }), g(this, S, {
                        writable: !0,
                        value: "js--continue"
                    }), g(this, b, {
                        writable: !0,
                        value: "dynamic-sticky-footer"
                    }), g(this, O, {
                        writable: !0,
                        value: "pf-steps__item"
                    }), g(this, C, {
                        writable: !0,
                        value: "popover-container"
                    }), g(this, L, {
                        writable: !0,
                        value: !1
                    }), g(this, A, {
                        writable: !0,
                        value: !1
                    }), g(this, k, {
                        writable: !0,
                        value: null
                    }), g(this, w, {
                        writable: !0,
                        value: null
                    }), g(this, R, {
                        writable: !0,
                        value: null
                    }), g(this, D, {
                        writable: !0,
                        value: null
                    }), g(this, N, {
                        writable: !0,
                        value: null
                    }), g(this, M, {
                        writable: !0,
                        value: () => {
                            document.removeEventListener("click", h(this, j), !0), window.removeEventListener("beforeunload", h(this, U)), window.removeEventListener("unload", f(this, F, te)), n.S1(n.ST, h(this, V)), n.S1(n.ye, h(this, M)), n.S1(n.Mn, this.showModal), e.isInitialised = !1
                        }
                    }), g(this, V, {
                        writable: !0,
                        value: () => {
                            let t, i;
                            h(this, A);
                            const n = f(this, G, ne).call(this),
                                r = h(this, D).getData();
                            if (e.isForceUpdateRequired && (e.isForceUpdateRequired = null), e.updateInitialStateLayers && (y(this, w, e.updateInitialStateLayers), y(this, A, !1), e.updateInitialStateLayers = null), e.updateInitialStateOptions && (y(this, N, e.updateInitialStateOptions), y(this, A, !1), e.updateInitialStateOptions = null), o.u.isDesignCachedInSession()) return y(this, A, !!n.length), void(0, s.hn)(h(this, A));
                            if (n.length !== h(this, w).length || r.length !== h(this, N).length) return y(this, A, !0), void(0, s.hn)(h(this, A));
                            for (let e = 0; e < h(this, w).length; e++)
                                if (i = n[e], t = h(this, w)[e], f(this, B, re).call(this, [i, t]), Object.entries(i).toString() !== Object.entries(t).toString() || Object.entries(i.position).toString() !== Object.entries(t.position).toString()) return y(this, A, !0), void(0, s.hn)(h(this, A));
                            if (f(this, x, ie).call(this, r)) return y(this, A, !0), void(0, s.hn)(h(this, A));
                            y(this, A, !1), (0, s.hn)(h(this, A))
                        }
                    }), g(this, U, {
                        writable: !0,
                        value: t => {
                            h(this, A) && (e.isDisabled || h(this, L) || !f(this, J, he).call(this) || (t.preventDefault(), t.returnValue = ""))
                        }
                    }), g(this, j, {
                        writable: !0,
                        value: t => {
                            if ((e.isForceUpdateRequired || e.updateInitialStateLayers || e.updateInitialStateOptions) && h(this, V).call(this), e.isDisabled) return;
                            if (!f(this, J, he).call(this)) return void(h(this, R) && f(this, X, pe).call(this, t.target) && (e.isForceUpdateRequired = !0));
                            if (!h(this, A) || h(this, L)) return;
                            const i = document.querySelectorAll("#" + h(this, _));
                            for (let e = 0; e < i.length; e++) {
                                const n = t.target.closest(".modal-dialog") && !t.target.closest(".modal-dialog").contains(i[e]);
                                if (i[e].contains(t.target) && !f(this, Y, se).call(this, t.target) && !f(this, X, pe).call(this, t.target) || n) return
                            }
                            f(this, Y, se).call(this, t.target) ? y(this, A, !1) : f(this, q, le).call(this, t.target) || f(this, $, ge).call(this, t)
                        }
                    }), d(this, "showModal", (e => {
                        if (!f(this, J, he).call(this) && !(0, a.Fv)()) return void e();
                        const t = tag("button", {
                            className: "pf-i pf-i-close pf-d-none",
                            onclick: e
                        });
                        document.body.appendChild(t), t.click(), t.remove()
                    })), n.j8(n.ye), y(this, L, !1), y(this, A, !1), y(this, k, t), y(this, w, f(this, G, ne).call(this)), y(this, R, i), y(this, D, u), y(this, N, h(this, D).getData());
                    const p = new r.Z.Par;
                    p.modalDialogClass = "modal-md", p.nodeClass = "pf-p-0", p.closeOnClick = !1, p.allowEsc = !1, p.deleteOnHide = !0, this.modal = new r.Z(p);
                    const m = tag("div", "pf-d-flex pf-flex-column pf-flex-xs-row", [tag("a", {
                        onclick: f(this, H, oe).bind(this),
                        className: "pf-btn pf-btn-primary pf-mb-12 pf-mb-xs-0 pf-mr-xs-12",
                        text: dlang("generator", "Stay")
                    }), tag("a", {
                        onclick: f(this, z, ae).bind(this),
                        className: "pf-btn pf-btn-secondary",
                        text: dlang("generator", "Leave")
                    })]);
                    this.modal.setFooterContent(m), y(this, j, h(this, j).bind(this)), y(this, U, h(this, U).bind(this)), y(this, V, h(this, V).bind(this)), y(this, M, h(this, M).bind(this)), document.addEventListener("click", h(this, j), !0), window.addEventListener("unload", f(this, F, te)), n.on(n.ST, h(this, V)), n.on(n.ye, h(this, M)), n.on(n.Mn, this.showModal), e.isInitialised = !0
                }
                var t, i, p;
                return t = e, (i = [{
                    key: "getDidDesignChange",
                    value: function() {
                        return h(this, A)
                    }
                }]) && u(t.prototype, i), p && u(t, p), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function te() {
                o.u.unsetDesignCachedInSession()
            }

            function ie(e) {
                let t, i, n;
                for (t = 0; t < h(this, N).length; t++) {
                    if (i = e[t], n = h(this, N)[t], i.placement !== n.placement) return !0;
                    if (Object.keys(i.options).length !== Object.keys(n.options).length) return !0;
                    let r, o, a = !1;
                    if (Object.keys(i.options).forEach((function(e) {
                            a || (r = i.options[e], o = n.options[e], r !== o && (a = !0))
                        })), a) return a
                }
                return !1
            }

            function ne() {
                const e = [],
                    t = h(this, k).getTemplates();
                for (const i in t)
                    for (const n in t[i])
                        for (const r in t[i][n].layers) {
                            const o = t[i][n].layers[r],
                                a = Object.assign({}, o.toArray());
                            e.push(a)
                        }
                return e
            }

            function re(e) {
                e.forEach((function(e) {
                    delete e.overrideImagePulse, delete e.overrideImage, e.position.top = parseFloat(parseFloat(e.position.top).toFixed(4)), e.position.left = parseFloat(parseFloat(e.position.left).toFixed(4)), e.position.width = parseFloat(parseFloat(e.position.width).toFixed(4)), e.position.height = parseFloat(parseFloat(e.position.height).toFixed(4))
                }))
            }

            function oe() {
                this.modal.hide()
            }

            function ae() {
                y(this, L, !0), this.modal.remove(), this.target.click()
            }

            function se(e) {
                if (e.id === h(this, T) && e.className.indexOf("disabled") < 0) return !0;
                if ("A" !== e.nodeName || f(this, X, pe).call(this, e)) return !1;
                if ("A" === e.nodeName && e.id === h(this, S)) return !0;
                for (; e && e !== document; e = e.parentNode)
                    if (e.classList.contains(h(this, b))) return !0;
                return !1
            }

            function le(e) {
                return !(f(this, W, ue).call(this, e) || f(this, K, ce).call(this, e) || f(this, Q, de).call(this, e) || f(this, X, pe).call(this, e))
            }

            function ue(e) {
                if (e.classList.contains("pf-i-close")) {
                    if (e.classList.contains("onboarding-popover-close-icon-class")) return !1;
                    for (; e && e !== document; e = e.parentNode)
                        if (e.classList.contains(h(this, I)) || e.classList.contains(h(this, C))) return !1;
                    return !0
                }
            }

            function ce(e) {
                let t;
                if ("A" === e.nodeName) t = e;
                else {
                    if ("A" !== e.parentNode.nodeName) return !1;
                    t = e.parentNode
                }
                return t.href.indexOf("javascript") < 0 && "_blank" !== t.getAttribute("target")
            }

            function de(e) {
                if ((0, a.Oy)()) return !1;
                for (let t = 0; e && e !== document && t < 3;) {
                    if ("A" === e.nodeName && e.classList.contains(h(this, O)) && (-1 !== e.innerText.indexOf(lang("Product")) || -1 !== e.innerText.indexOf(lang("Design")))) return !0;
                    e = e.parentNode, t++
                }
            }

            function pe(e) {
                return !(0, a.Oy)() && "A" === e.nodeName && (e.id === h(this, E) || e.id === h(this, P))
            }

            function ge(e) {
                e.stopImmediatePropagation(), e.preventDefault(), this.target = e.target, f(this, Z, me).call(this), y(this, L, !1), this.modal.show()
            }

            function me() {
                this.modal.setTitle(ee.customPopupHeading || dlang("generator", "Are you sure?"));
                const e = ee.customPopupContent || dlang("generator", "If you leave, your changes won't be saved.");
                this.modal.setContent(tag("div", "pf-ui-body", e))
            }

            function he() {
                return document.querySelectorAll("#" + h(this, _)).length > 0
            }
            d(ee, "isDisabled", !1), d(ee, "updateInitialStateLayers", null), d(ee, "updateInitialStateOptions", null), d(ee, "isForceUpdateRequired", !1), d(ee, "customPopupHeading", null), d(ee, "customPopupContent", null), d(ee, "isInitialised", !1), (globalThis || {}).PFPopupDesignerLeaveWarning = ee
        },
        91777: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => n
            });
            const n = {
                MAX_EMBROIDERY_PREVIEW_AREA: 30,
                EMBROIDERY_MAX_IMAGE_COLORS: 8,
                EMBROIDERY_MAX_SELECTED_THREAD_COLORS: 6,
                EMBROIDERY_IMAGE_COLOR_COUNT_LIMIT: 32,
                EMBROIDERY_NONE_COLOR_BE_LCASE_VALUE: "transparent"
            };
            (globalThis || {}).PFProductPushEmbroideryCommon = n
        },
        66308: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => a
            });
            var n = i(59597),
                r = i(58232),
                o = i(22277);
            const a = Class({
                __construct: function() {
                    this.setUniqueId()
                },
                position: null,
                customPosition: null,
                uniqueId: 0,
                customizeKey: null,
                isCustomizable: !1,
                animation: "",
                originalPosition: null,
                overrideImage: null,
                overrideImagePulse: null,
                parentLayerUniqueId: null,
                isMirroredLayer: !1,
                hasMirrorLayer: !1,
                patternType: null,
                patternSpacing: null,
                flipX: null,
                flipY: null,
                generatorOptions: null,
                isExisting: null,
                quickDesignId: null,
                groupType: null,
                groupId: null,
                uniqueGroupLayerId: null,
                engravingStyle: null,
                disableCentering: !1,
                isLocked: !1,
                isGroupLocked: !1,
                isLockedAndSelectable: !1,
                isHidden: !1,
                showOutOfBoundsErrorMessage: !1,
                setUniqueId: function() {
                    this.uniqueId = ++a._instanceCounter
                },
                isOutOfBounds: function() {
                    return this.position.isOutOfBounds()
                },
                isPartiallyOutOfBounds: function() {
                    return this.position.isPartiallyOutOfBounds(this.customPosition) && !this.isLockedAndSelectable
                },
                isHalfLayerOutOfBounds: function() {
                    return this.position.isHalfLayerOutOfBounds()
                },
                getDefaultColor: function() {
                    const e = (0, o.WU)();
                    switch (!0) {
                        case null == e ? void 0:
                            e.isBlackMug(): return r.Y3;
                        case null == e ? void 0:
                            e.isTouchTool(): return r.Yc;
                        case null == e ? void 0:
                            e.isJewelry(): return r.V5;
                        default:
                            return r.aA
                    }
                },
                getType: function() {},
                getThumbUrl: () => "",
                getName: () => "",
                isSimple: function() {
                    return !(this.position.rotation || this.patternType || this.flipX || this.flipY || this.isUpscaled || this.isRemovedBg || this.cropPosition)
                },
                isTextLayer: function() {
                    return !1
                },
                isClipartLayer: function() {
                    return !1
                },
                isLicensedAssetLayer: function() {
                    return !1
                },
                isImageLayer: function() {
                    return !1
                },
                isPropLayer: () => !1,
                isMockupLayer: () => !1,
                isTextLayerPartiallyOutOfBounds: function() {
                    return this.isTextLayer() && this.isPartiallyOutOfBounds()
                },
                isClipartLayerPartiallyOutOfBounds: function() {
                    return this.isClipartLayer() && this.isPartiallyOutOfBounds()
                },
                isMockupLayerPartiallyOutOfBounds: function() {
                    return this.isMockupLayer() && this.isHalfLayerOutOfBounds()
                },
                isChanged: function(e) {
                    return !this.isConfigurationSame(e) || this.position.isDifferent(e.position)
                },
                wasMirrored: function() {
                    return void 0 === this.parentLayerUniqueId
                },
                toArray: function() {},
                getDPI: function() {},
                isVector: function() {},
                isPngClipartLayer: function() {
                    return !1
                },
                getOriginalClone: function(e) {},
                getSourceWidth: function() {},
                getSourceHeight: function() {},
                getSourceDpi: function() {},
                getDefaultSize: function(e) {
                    var t = this.hasNaturalSize() ? this.getSourceDpi() : e,
                        i = parseFloat((this.getSourceWidth() / t).toFixed(4)),
                        n = parseFloat((this.getSourceHeight() / t).toFixed(4)),
                        r = .75,
                        o = n < r ? r / n : 1,
                        a = i < r ? r / i : 1,
                        s = Math.max(a, o);
                    return {
                        width: i * s,
                        height: n * s
                    }
                },
                isConfigurationSame: function(e) {},
                hasNaturalSize: function() {
                    return !1
                },
                inGroup() {
                    return null !== this.groupId
                },
                isValidForTechnique: function(e) {
                    return !0
                },
                getInitialScale: function(e) {
                    return 1
                },
                removeFromGroupType: function() {
                    this.groupType = null, this.quickDesignId = null, this.groupId = null, this.uniqueGroupLayerId = null
                },
                addToGroupType: function(e, t) {
                    if ("unavailableTechniques" in e) this.groupType = a.GROUP_QUICK_DESIGN;
                    else if ("isSelected" in e) this.groupType = a.GROUP_LOGO_TEMPLATE;
                    else {
                        if (e.groupType !== r.hG.GROUP_INSIDE_LABEL_TEMPLATE) return void console.error("Unknown group type");
                        this.groupType = r.hG.GROUP_INSIDE_LABEL_TEMPLATE
                    }
                    this.quickDesignId = e.id, this.groupId = t
                },
                isCropPositionUpdateNeeded: function() {
                    return !1
                }
            }, n.$);
            a._instanceCounter = 0, a.GROUP_QUICK_DESIGN = r.hG.GROUP_QUICK_DESIGN, a.GROUP_LOGO_TEMPLATE = r.hG.GROUP_LOGO_TEMPLATE, a.TYPE_FILL = "designFill", window && ((globalThis || {}).PFComponentsGeneratorMockupLayer = a)
        },
        70141: (e, t, i) => {
            "use strict";
            i.d(t, {
                t: () => c
            });
            var n = i(66308),
                r = i(19639),
                o = i(9651),
                a = i(41730),
                s = i(97993),
                l = i(58232),
                u = i(51122);
            const c = Class({
                fileItem: null,
                temporaryFileItem: null,
                shouldUseTempFile: !1,
                overrideColors: null,
                isCustomizable: !1,
                embroideryType: "",
                isEmbroideryAfterMigration: null,
                migratedToNewPicker: null,
                isUpscaled: null,
                isRemovedBg: null,
                isCropState: !1,
                removeBgPreview: null,
                cropPosition: null,
                cropShape: null,
                showOutOfBoundsErrorMessage: !0,
                insideLabelTemplateId: null,
                getType: function() {
                    return c.TYPE
                },
                _getNewLayer: function() {
                    return new c
                },
                isImageLayer: function() {
                    return !0
                },
                getOriginalClone: function(e) {
                    var t, i = this._getNewLayer();
                    return e || (i.uniqueId = this.uniqueId), i.fileItem = this.fileItem, i.temporaryFileItem = this.temporaryFileItem, i.overrideImage = this.overrideImage, i.overrideImagePulse = this.overrideImagePulse, i.position = this.position.getFromOriginalRatio(), i.originalPosition = this.originalPosition.getClone(), i.cropPosition = null === (t = this.cropPosition) || void 0 === t ? void 0 : t.getFromOriginalRatio(), i.customPosition = this.customPosition, i.parentLayerUniqueId = this.parentLayerUniqueId, i.hasMirrorLayer = this.hasMirrorLayer, i.isMirroredLayer = this.isMirroredLayer, i.animation = this.animation, i.shouldUseTempFile = this.shouldUseTempFile, i.customizeKey = this.customizeKey, i.generatorOptions = this.generatorOptions, i.isCustomizable = this.isCustomizable, i.embroideryType = this.embroideryType, i.isEmbroideryAfterMigration = this.isEmbroideryAfterMigration, i.migratedToNewPicker = this.migratedToNewPicker, i.patternType = this.patternType, i.patternSpacing = this.patternSpacing, i.flipX = this.flipX, i.flipY = this.flipY, i.isUpscaled = this.isUpscaled, i.isRemovedBg = this.isRemovedBg, i.isCropState = this.isCropState, i.removeBgPreview = this.removeBgPreview, i.isExisting = this.isExisting, i.quickDesignId = this.quickDesignId, i.groupId = this.groupId, i.uniqueGroupLayerId = this.uniqueGroupLayerId, i.groupType = this.groupType, i.disableCentering = (0, s.EY)(), i.isLocked = this.isLocked, i.insideLabelTemplateId = this.insideLabelTemplateId, i.designColors = this.designColors, i.remapOverrideColors = this.remapOverrideColors, i.fileItem = this.fileItem, this.overrideColors && (i.overrideColors = {}, o.U.O2O(i.overrideColors, this.overrideColors)), i
                },
                getDPI: function(e, t) {
                    if (this.isVector()) return 600;
                    const i = this.cropPosition ? this.cropPosition.width / this.position.width : 1,
                        n = this.getFileItem().width * i,
                        r = this.cropPosition || this.position;
                    let o = Math.round(n / r.getFromOriginalRatio().width);
                    if (e && null != t && t.getQualityPercent) {
                        const e = t.getQualityPercent(this),
                            i = t.shouldSkipUpscale(this);
                        this.isUpscaled = t.isQualityBadUpscale(e, i), this.isUpscaled && (o *= a.zJ)
                    }
                    return o
                },
                getFileItem: function() {
                    return this.shouldUseTempFile && this.temporaryFileItem ? this.temporaryFileItem : this.fileItem
                },
                getThumbUrl() {
                    return this.getFileItem().urlThumb
                },
                getPreviewUrl() {
                    return this.getFileItem().urlPreview || this.getThumbUrl()
                },
                getName() {
                    return this.getFileItem().filename
                },
                getSourceWidth: function() {
                    return this.getFileItem().width
                },
                getSourceHeight: function() {
                    return this.getFileItem().height
                },
                getSourceDpi: function() {
                    return this.getFileItem().dpi
                },
                matchesAdvancedTemplate: function(e) {
                    const t = e.width / e.height,
                        i = this.getSourceWidth() / this.getSourceHeight();
                    return Math.abs(t - i) <= .01
                },
                isVector: function() {
                    return this.getFileItem().isVector
                },
                hasNaturalSize: function() {
                    return !!this.getFileItem().dpi
                },
                hasTransparencyIssues: function() {
                    var e, t, i;
                    return (null === (e = this.getFileItem()) || void 0 === e || null === (t = e.extra) || void 0 === t || null === (i = t.transparency) || void 0 === i ? void 0 : i.prediction) > 0
                },
                toArray: function(e) {
                    var t, i;
                    return {
                        type: c.TYPE,
                        fileId: null !== (t = null === (i = this.fileItem) || void 0 === i ? void 0 : i.fileId) && void 0 !== t ? t : null,
                        url: this._getUrl(e),
                        position: this.position ? this.position.toArray() : {},
                        cropPosition: this.cropPosition ? this.cropPosition.toArray() : null,
                        overrideColors: this.overrideColors,
                        isCustomizable: this.isCustomizable ? 1 : 0,
                        customizeKey: this.customizeKey,
                        uniqueId: this.uniqueId,
                        parentLayerUniqueId: this.parentLayerUniqueId,
                        hasMirrorLayer: this.hasMirrorLayer,
                        isMirroredLayer: this.isMirroredLayer,
                        animation: this.animation,
                        overrideImage: this.overrideImage,
                        overrideImagePulse: this.overrideImagePulse,
                        embroideryType: this.embroideryType,
                        isEmbroideryAfterMigration: this.isEmbroideryAfterMigration,
                        migratedToNewPicker: this.migratedToNewPicker,
                        patternType: this.patternType,
                        patternSpacing: this.patternSpacing,
                        flipX: this.flipX,
                        flipY: this.flipY,
                        isUpscaled: this.isUpscaled,
                        isRemovedBg: this.isRemovedBg,
                        isCropState: this.isCropState,
                        removeBgPreview: this.removeBgPreview,
                        shouldUseTempFile: this.shouldUseTempFile,
                        isExisting: this.isExisting,
                        quickDesignId: this.quickDesignId,
                        groupType: this.groupType,
                        groupId: this.groupId,
                        uniqueGroupLayerId: this.uniqueGroupLayerId,
                        disableCentering: (0, s.EY)(),
                        isLocked: this.isLocked,
                        insideLabelTemplateId: this.insideLabelTemplateId,
                        designColors: this.designColors
                    }
                },
                _getUrl: function(e) {
                    let t;
                    return t = this.temporaryFileItem && this.shouldUseTempFile ? this.temporaryFileItem.urlLarge : this.fileItem.urlPreview, e && this.fileItem && (t = this.fileItem.urlThumb), e && this.temporaryFileItem && this.shouldUseTempFile && (t = this.temporaryFileItem.urlThumb), t
                },
                isConfigurationSame: function(e) {
                    const t = e.migratedToNewPicker !== this.migratedToNewPicker,
                        i = this.fileItem && e.fileItem && this.fileItem.fileId === e.fileItem.fileId,
                        n = JSON.stringify(e.overrideColors) === JSON.stringify(this.overrideColors),
                        r = this.removeBgPreview === e.removeBgPreview && this.isRemovedBg === e.isRemovedBg;
                    return i && n && !t && r
                },
                isValidForTechnique: function(e) {
                    return e !== u.hC
                },
                isPartiallyOutOfBounds: function() {
                    return this.cropPosition ? this.cropPosition.isPartiallyOutOfBounds() : this.position.isPartiallyOutOfBounds(this.customPosition)
                },
                isCropPositionUpdateNeeded: function() {
                    return !!this.cropPosition
                }
            }, n.Z);
            c.TYPE = l.hG.FILE, c.fromFileItem = function(e) {
                const t = new c;
                return t.fileItem = e, t.originalPosition = new r.K, t.position = t.originalPosition.getClone(), t
            }, window && ((globalThis || {}).PFComponentsGeneratorMockupImageLayer = c)
        },
        19046: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => s
            });
            var n = i(66308),
                r = i(46369),
                o = i(9722),
                a = i(97993);
            const s = Class({
                text: "",
                size: 0,
                font: null,
                color: "",
                alignment: "",
                lineHeight: 1,
                letterSpacing: 0,
                engravingStyle: null,
                isCustomizable: !1,
                resizeToPercent: null,
                hasMultipleLines: !1,
                embroideryType: "",
                isGeneratorMockupTextLayerInstance: !0,
                showOutOfBoundsErrorMessage: !0,
                _getNewLayer: function() {
                    return new s
                },
                getOriginalClone: function(e) {
                    var t = this._getNewLayer();
                    return e || (t.uniqueId = this.uniqueId), t.text = this.text, t.size = this.size, t.font = this.font, t.color = this.color, t.alignment = this.alignment, t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.engravingStyle = this.engravingStyle, t.customizeKey = this.customizeKey, t.generatorOptions = this.generatorOptions, t.isCustomizable = this.isCustomizable, t.resizeToPercent = this.resizeToPercent, t.hasMultipleLines = this.hasMultipleLines, t.overrideImage = this.overrideImage, t.overrideImagePulse = this.overrideImagePulse, t.position = this.position.getFromOriginalRatio(), t.originalPosition = this.originalPosition, t.parentLayerUniqueId = this.parentLayerUniqueId, t.hasMirrorLayer = this.hasMirrorLayer, t.isMirroredLayer = this.isMirroredLayer, t.animation = this.animation, t.embroideryType = this.embroideryType, t.patternType = this.patternType, t.patternSpacing = this.patternSpacing, t.flipX = this.flipX, t.flipY = this.flipY, t.isExisting = this.isExisting, t.disableCentering = (0, a.EY)(), t.isLocked = this.isLocked, t.showOutOfBoundsErrorMessage = this.showOutOfBoundsErrorMessage, t
                },
                getDPI: function() {
                    return 600
                },
                isVector: function() {
                    return !0
                },
                toArray: function() {
                    return {
                        type: s.TYPE,
                        text: this.text,
                        size: this.size,
                        font: this.font.fontKey,
                        fontName: this.font.name,
                        fontPath: this.font["path-js"],
                        color: this.color,
                        alignment: this.alignment,
                        lineHeight: this.lineHeight,
                        letterSpacing: this.letterSpacing,
                        engravingStyle: this.engravingStyle,
                        resizeToPercent: this.resizeToPercent,
                        hasMultipleLines: this.hasMultipleLines ? 1 : 0,
                        position: this.position ? this.position.toArray() : {},
                        embroideryType: this.embroideryType,
                        isCustomizable: this.isCustomizable ? 1 : 0,
                        customizeKey: this.customizeKey,
                        uniqueId: this.uniqueId,
                        parentLayerUniqueId: this.parentLayerUniqueId,
                        hasMirrorLayer: this.hasMirrorLayer,
                        isMirroredLayer: this.isMirroredLayer,
                        animation: this.animation,
                        overrideImage: this.overrideImage,
                        overrideImagePulse: this.overrideImagePulse,
                        patternType: this.patternType,
                        patternSpacing: this.patternSpacing,
                        flipX: this.flipX,
                        flipY: this.flipY,
                        isExisting: this.isExisting,
                        disableCentering: (0, a.EY)(),
                        isLocked: this.isLocked
                    }
                },
                isTextLayer: function() {
                    return !0
                },
                getType: function() {
                    return s.TYPE
                },
                isAlignedLeft: function() {
                    return this.alignment === s.ALIGN_LEFT
                },
                isAlignedRight: function() {
                    return this.alignment === s.ALIGN_RIGHT
                },
                isAlignedCenter: function() {
                    return this.alignment === s.ALIGN_CENTER
                },
                getFontName: function() {
                    return this.font ? this.font.name : ""
                },
                isSimple: function() {
                    return !1
                },
                copyValues: function(e) {
                    this.text = e.text, this.size = e.size, this.font = e.font, this.color = e.color, this.alignment = e.alignment, this.lineHeight = e.lineHeight, this.letterSpacing = e.letterSpacing, this.engravingStyle = e.engravingStyle, this.customizeKey = e.customizeKey, this.resizeToPercent = e.resizeToPercent, this.isCustomizable = e.isCustomizable, this.generatorOptions = e.generatorOptions, this.hasMultipleLines = e.hasMultipleLines, this.overrideImage = e.overrideImage, this.overrideImagePulse = e.overrideImagePulse, this.isExisting = e.isExisting
                },
                isConfigurationSame: function(e) {
                    return this.text === e.text && Math.abs(this.size - e.size) < .001 && this.font.fontKey === e.font.fontKey && Math.abs(this.lineHeight - e.lineHeight) < .001 && Math.abs(this.letterSpacing - e.letterSpacing) < .001 && this.color === e.color && this.alignment === e.alignment
                },
                isWidthHeightRatioSame: function(e) {
                    return this.text === e.text && this.getFontName() === e.getFontName() && this.alignment === e.alignment && Math.abs(this.lineHeight - e.lineHeight) < .001 && Math.abs(this.letterSpacing - e.letterSpacing) < .001
                },
                isValid: function() {
                    return (new r.E).setActiveLayer(this).setText(this.text).isTextValid()
                },
                getUpdateDelay: function() {
                    return this.isCustomizable ? 10 : 200
                },
                setWidthInPercent: function(e) {
                    this.resizeToPercent = e
                }
            }, n.Z);
            s.fromArray = function(e) {
                var t = new s;
                return t.text = e.text, t.font = void 0 !== (0, o.HM)().FONTS[e.font] ? (0, o.HM)().FONTS[e.font] : e.font, t.color = e.color, t.alignment = e.alignment, t.letterSpacing = parseFloat(e.letterSpacing), t.lineHeight = parseFloat(e.lineHeight), t.size = parseFloat(e.size), e.engravingStyle && (t.engravingStyle = parseInt(e.engravingStyle)), t
            }, s.ALIGN_LEFT = "left", s.ALIGN_RIGHT = "right", s.ALIGN_CENTER = "center", s.ALIGN_ABSOLUTE_LEFT = "absolute_left", s.ALIGN_ABSOLUTE_RIGHT = "absolute_right", s.ALIGN_ABSOLUTE_CENTER = "absolute_center", s.TYPE = "text", window && ((globalThis || {}).PFComponentsGeneratorMockupTextLayer = s)
        },
        91414: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => u
            });
            var n = i(66308),
                r = i(19639),
                o = i(53938),
                a = i(97993),
                s = i(58232),
                l = i(51122);
            const u = Class({
                fillColor: "",
                clipartItem: null,
                lockUniScaling: !0,
                showOutOfBoundsErrorMessage: !0,
                embroideryType: "",
                overrideColors: null,
                dynamicInfo: {},
                _getNewLayer: function() {
                    return new u
                },
                getType: function() {
                    return u.TYPE
                },
                getThumbUrl() {
                    return this.overrideImage || this.clipartItem.image.preview || this.clipartItem.image.urlThumb
                },
                getName() {
                    return this.clipartItem.name
                },
                isClipartLayer: function() {
                    return !0
                },
                isClipartCustomizable: function() {
                    return this.clipartItem.customizable
                },
                getOriginalClone: function(e) {
                    var t = this._getNewLayer();
                    return e || (t.uniqueId = this.uniqueId), t.fillColor = this.fillColor, t.clipartItem = this.clipartItem, t.overrideImage = this.overrideImage, t.overrideImagePulse = this.overrideImagePulse, t.position = this.position.getFromOriginalRatio(), t.originalPosition = this.originalPosition, t.customPosition = this.customPosition, t.parentLayerUniqueId = this.parentLayerUniqueId, t.hasMirrorLayer = this.hasMirrorLayer, t.isMirroredLayer = this.isMirroredLayer, t.animation = this.animation, t.patternType = this.patternType, t.patternSpacing = this.patternSpacing, t.flipX = this.flipX, t.flipY = this.flipY, t.isExisting = this.isExisting, t.quickDesignId = this.quickDesignId, t.groupType = this.groupType, t.groupId = this.groupId, t.uniqueGroupLayerId = this.uniqueGroupLayerId, t.engravingStyle = this.engravingStyle, t.disableCentering = (0, a.EY)(), t.isLocked = this.isLocked, t.isLockedAndSelectable = this.isLockedAndSelectable, t.isHidden = this.isHidden, t.isGroupLocked = this.isGroupLocked, t.embroideryType = this.embroideryType, t.dynamicInfo = this.dynamicInfo, t.designColors = this.designColors, t.remapOverrideColors = this.remapOverrideColors, this.overrideColors && (t.overrideColors = Object.assign({}, this.overrideColors)), t
                },
                getSourceWidth: function() {
                    return this.clipartItem.width || this.clipartItem.image.width
                },
                getSourceHeight: function() {
                    return this.clipartItem.height || this.clipartItem.image.height
                },
                isVector: function() {
                    var e;
                    return !(null !== (e = this.clipartItem) && void 0 !== e && e.image.isPng)
                },
                isPngClipartLayer: function() {
                    var e;
                    return null === (e = this.clipartItem) || void 0 === e ? void 0 : e.image.isPng
                },
                getDPI: function() {
                    var e;
                    return this.isVector() ? 600 : Math.round((null === (e = this.clipartItem) || void 0 === e ? void 0 : e.image.width) / this.position.getFromOriginalRatio().width)
                },
                getFileItem: function() {
                    var e;
                    return null === (e = this.clipartItem) || void 0 === e ? void 0 : e.image
                },
                isSimple: function() {
                    return !1
                },
                toArray: function(e, t) {
                    return {
                        type: u.TYPE,
                        fillColor: this.fillColor,
                        clipartItemId: this.clipartItem ? this.clipartItem.id : null,
                        url: this._getUrl(e),
                        svg: t && this.clipartItem ? this.clipartItem.svg : null,
                        position: this.position ? this.position.toArray() : {},
                        isCustomizable: this.isCustomizable ? 1 : 0,
                        customizeKey: this.customizeKey,
                        uniqueId: this.uniqueId,
                        parentLayerUniqueId: this.parentLayerUniqueId,
                        hasMirrorLayer: this.hasMirrorLayer,
                        isMirroredLayer: this.isMirroredLayer,
                        animation: this.animation,
                        overrideImage: this.overrideImage,
                        overrideImagePulse: this.overrideImagePulse,
                        overrideColors: this.overrideColors,
                        embroideryType: this.embroideryType,
                        patternType: this.patternType,
                        patternSpacing: this.patternSpacing,
                        flipX: this.flipX,
                        flipY: this.flipY,
                        isExisting: this.isExisting,
                        quickDesignId: this.quickDesignId,
                        groupType: this.groupType,
                        groupId: this.groupId,
                        uniqueGroupLayerId: this.uniqueGroupLayerId,
                        engravingStyle: this.engravingStyle,
                        lockUniScaling: this.lockUniScaling,
                        disableCentering: (0, a.EY)(),
                        isLocked: this.isLocked,
                        isLockedAndSelectable: this.isLockedAndSelectable,
                        isHidden: this.isHidden,
                        isGroupLocked: this.isGroupLocked,
                        dynamicInfo: this.dynamicInfo,
                        remapOverrideColors: this.remapOverrideColors
                    }
                },
                _getUrl: function(e) {
                    var t = null;
                    return this.clipartItem && this.clipartItem.image && (t = this.clipartItem.image.urlLarge), e && this.clipartItem && this.clipartItem.image && (t = this.clipartItem.image.urlThumb), t
                },
                getInitialScale: function(e) {
                    return e.technique === l.hC ? e.isTouchToolPrintFile() ? 5 : 1.08 : 4
                },
                isValidForTechnique: function(e) {
                    const t = (0, o.Js)(this.clipartItem.id),
                        i = (0, o.XW)(this.clipartItem.groupId);
                    return !((null == i ? void 0 : i.unavailableTechniques.indexOf(e)) > -1 || (null == t ? void 0 : t.unavailableTechniques.indexOf(e)) > -1)
                }
            }, n.Z);
            u.TYPE = s.hG.CLIPART, u.fromClipartItem = function(e) {
                var t = new u;
                return t.clipartItem = e, t.originalPosition = new r.K, t.position = t.originalPosition.getClone(), t
            }, window && ((globalThis || {}).PFComponentsGeneratorMockupClipartLayer = u)
        },
        17202: (e, t, i) => {
            "use strict";
            i.d(t, {
                d: () => _
            });
            var n = i(4071),
                r = i(66308),
                o = i(46369),
                a = i(92869),
                s = i(9722),
                l = i(66450),
                u = i(97993),
                c = i(58232),
                d = i(5300),
                p = i.n(d),
                g = i(88725),
                m = i(51122),
                h = i(14753);
            var f = i(5917),
                y = i(50361),
                v = i.n(y);
            const _ = Class({
                text: "",
                size: 0,
                font: null,
                color: "",
                strokeColor: null,
                strokeWeight: 0,
                strokeOffset: 0,
                shadowColor: null,
                shadowDistance: 0,
                shadowAngle: 0,
                arcAngle: 0,
                alignment: "",
                lineHeight: 1,
                letterSpacing: 0,
                engravingStyle: null,
                isCustomizable: !1,
                resizeToPercent: null,
                hasMultipleLines: !1,
                embroideryType: "",
                migratedToNewPicker: null,
                colorGraphic: null,
                isGeneratorMockupTextBoxLayerInstance: !0,
                isTemporary: !1,
                showOutOfBoundsErrorMessage: !0,
                dynamicInfo: {},
                _getNewLayer: () => new _,
                getOriginalClone(e) {
                    var t = this._getNewLayer();
                    return e || (t.uniqueId = this.uniqueId), t.text = this.text, t.size = this.size, t.font = this.font, t.color = this.color, t.strokeColor = this.strokeColor, t.strokeWeight = this.strokeWeight, t.strokeOffset = this.strokeOffset, t.shadowColor = this.shadowColor, t.shadowDistance = this.shadowDistance, t.shadowAngle = this.shadowAngle, t.alignment = this.alignment, t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.engravingStyle = this.engravingStyle, t.customizeKey = this.customizeKey, t.generatorOptions = this.generatorOptions, t.isCustomizable = this.isCustomizable, t.resizeToPercent = this.resizeToPercent, t.hasMultipleLines = this.hasMultipleLines, t.overrideImage = this.overrideImage, t.overrideImagePulse = this.overrideImagePulse, t.position = this.position.getFromOriginalRatio(), t.originalPosition = this.originalPosition, t.customPosition = this.customPosition, t.parentLayerUniqueId = this.parentLayerUniqueId, t.hasMirrorLayer = this.hasMirrorLayer, t.isMirroredLayer = this.isMirroredLayer, t.animation = this.animation, t.embroideryType = this.embroideryType, t.migratedToNewPicker = this.migratedToNewPicker, t.arcAngle = this.arcAngle, t.colorGraphic = this.colorGraphic, t.quickDesignId = this.quickDesignId, t.groupType = this.groupType, t.groupId = this.groupId, t.uniqueGroupLayerId = this.uniqueGroupLayerId, t.disableCentering = (0, u.EY)(), t.isLocked = this.isLocked, t.isLockedAndSelectable = this.isLockedAndSelectable, t.isGroupLocked = this.isGroupLocked, t.showOutOfBoundsErrorMessage = this.showOutOfBoundsErrorMessage, t.dynamicInfo = this.dynamicInfo, t.isHidden = this.isHidden, t
                },
                getType: () => _.TYPE,
                getDPI: () => 600,
                isVector: () => !0,
                toArray(e) {
                    const t = "object" == typeof e && (null == e ? void 0 : e.forRpc),
                        i = {
                            type: _.TYPE,
                            text: this.text,
                            size: this.size,
                            font: this.font.fontKey,
                            fontName: this.font.name,
                            fontPath: this.font.fontUrl,
                            color: this.color,
                            strokeColor: this.strokeColor,
                            strokeWeight: this.strokeWeight,
                            strokeOffset: this.strokeOffset,
                            shadowColor: this.shadowColor,
                            shadowDistance: this.shadowDistance,
                            shadowAngle: this.shadowAngle,
                            alignment: this.alignment,
                            lineHeight: this.lineHeight,
                            letterSpacing: this.letterSpacing,
                            engravingStyle: this.engravingStyle,
                            resizeToPercent: this.resizeToPercent,
                            hasMultipleLines: this.hasMultipleLines ? 1 : 0,
                            position: this.position ? this.position.toArray(e) : {},
                            embroideryType: this.embroideryType,
                            migratedToNewPicker: this.migratedToNewPicker,
                            isCustomizable: this.isCustomizable ? 1 : 0,
                            customizeKey: this.customizeKey,
                            uniqueId: this.uniqueId,
                            parentLayerUniqueId: this.parentLayerUniqueId,
                            hasMirrorLayer: this.hasMirrorLayer,
                            isMirroredLayer: this.isMirroredLayer,
                            animation: this.animation,
                            overrideImage: this.overrideImage,
                            overrideImagePulse: this.overrideImagePulse,
                            arcAngle: this.arcAngle,
                            colorGraphic: this.colorGraphic ? t ? {
                                id: this.colorGraphic.id,
                                scale: this.colorGraphic.scale
                            } : this.colorGraphic.toArray(e) : null,
                            quickDesignId: this.quickDesignId,
                            groupType: this.groupType,
                            groupId: this.groupId,
                            uniqueGroupLayerId: this.uniqueGroupLayerId,
                            disableCentering: (0, u.EY)(),
                            isLocked: this.isLocked,
                            isLockedAndSelectable: this.isLockedAndSelectable,
                            isGroupLocked: this.isGroupLocked,
                            dynamicInfo: this.dynamicInfo,
                            isHidden: this.isHidden
                        };
                    this.isCustomizable && (i.originalWidth = this.originalPosition.width);
                    for (let e in i) null !== i[e] && "" !== i[e] || delete i[e];
                    return i
                },
                isTextLayer: () => !0,
                isAlignedLeft() {
                    return this.alignment === n.jm
                },
                isAlignedRight() {
                    return this.alignment === n.gg
                },
                isAlignedCenter() {
                    return this.alignment === n.w3
                },
                getFontName() {
                    var e;
                    return (null === (e = this.font) || void 0 === e ? void 0 : e.name) || ""
                },
                isSimple: () => !1,
                copyValues(e) {
                    this.text = e.text, this.size = e.size, this.font = e.font, this.color = e.color, this.strokeColor = e.strokeColor, this.strokeWeight = e.strokeWeight, this.strokeOffset = e.strokeOffset, this.shadowColor = e.shadowColor, this.shadowDistance = e.shadowDistance, this.shadowAngle = e.shadowAngle, this.alignment = e.alignment, this.lineHeight = e.lineHeight, this.letterSpacing = e.letterSpacing, this.engravingStyle = e.engravingStyle, this.customizeKey = e.customizeKey, this.resizeToPercent = e.resizeToPercent, this.isCustomizable = e.isCustomizable, this.generatorOptions = e.generatorOptions, this.hasMultipleLines = e.hasMultipleLines, this.overrideImage = e.overrideImage, this.overrideImagePulse = e.overrideImagePulse, this.arcAngle = e.arcAngle, this.colorGraphic = e.colorGraphic, this.quickDesignId = e.quickDesignId, this.groupType = e.groupType, this.dynamicInfo = e.dynamicInfo
                },
                isConfigurationSame(e) {
                    return this.isWidthHeightRatioSame(e) && Math.abs(this.size - e.size) < .001 && this.color === e.color && this.strokeColor === e.strokeColor && this.strokeWeight === e.strokeWeight && this.strokeOffset === e.strokeOffset && this.shadowColor === e.shadowColor && this.shadowDistance === e.shadowDistance && this.shadowAngle === e.shadowAngle && this.alignment === e.alignment && this.arcAngle === e.arcAngle && this.migratedToNewPicker === e.migratedToNewPicker
                },
                isWidthHeightRatioSame(e) {
                    return this.text === e.text && this.getFontName() === e.getFontName() && this.alignment === e.alignment && Math.abs(this.lineHeight - e.lineHeight) < .001 && Math.abs(this.letterSpacing - e.letterSpacing) < .001
                },
                isValid() {
                    return (new o.E).setActiveLayer(this).setText(this.text).isTextValid()
                },
                getUpdateDelay: () => 10,
                setWidthInPercent(e) {
                    this.resizeToPercent = e
                },
                getTextLayerRealWidth() {
                    if (!this.isCustomizable) return this.position.width;
                    this.isCustomizable = !1;
                    const e = this.position;
                    p().calculateTextboxPositions(this);
                    const t = this.position.width;
                    return this.position = e, this.isCustomizable = !0, t
                },
                isPartiallyOutOfBounds() {
                    var e = parseFloat(this.position.rotation - parseFloat(this.shadowAngle)).toFixed(2),
                        t = Math.cos(-e * Math.PI / 180) * this.shadowDistance * this.size / 2,
                        i = Math.sin(-e * Math.PI / 180) * this.shadowDistance * this.size / 2,
                        n = this.position.getClone();
                    return n.top -= i, n.left += t, this.position.isPartiallyOutOfBounds(this.customPosition) || n.isPartiallyOutOfBounds(this.customPosition)
                },
                hasFillImage() {
                    var e;
                    return (null === (e = this.colorGraphic) || void 0 === e ? void 0 : e.id) && this.colorGraphic.scale
                },
                isValidForTechnique(e) {
                    return e !== m.gj && e !== m.hC || !this.hasFillImage()
                }
            }, r.Z);
            _.fromArray = function(e) {
                var t;
                const i = new _;
                let n = (0, s.HM)().FONTS[e.font];
                if (!n && null !== (t = e.fontArray) && void 0 !== t && t.fontItem && ((0, s.oE)(e.fontArray.fontItem), n = new g.y(e.fontArray.fontItem)), !n) {
                    const t = {
                        "garden-grown": "organika-script",
                        "garden-grown-caps": "organika-sans",
                        "jungle-giant-print": "mulhouse",
                        "jungle-giant-script": "thirsty-script"
                    } [e.font] || h.vJ.MAIN;
                    var r;
                    if (console.warn("Warning! Font replaced from", e.font, "to", t), n = (0, s.HM)().FONTS[t], n)(0, f.$)({
                        originalFontName: (null === (r = e.fontArray) || void 0 === r ? void 0 : r.name) || e.font,
                        replacementFontName: n.name
                    })
                }
                if (i.text = e.text, i.font = n, i.color = e.color, i.strokeColor = e.strokeColor, i.strokeWeight = parseFloat(e.strokeWeight), i.strokeOffset = parseFloat(e.strokeOffset), i.shadowColor = e.shadowColor, i.shadowDistance = parseFloat(e.shadowDistance), i.shadowAngle = parseFloat(e.shadowAngle), i.alignment = e.alignment, i.letterSpacing = parseFloat(e.letterSpacing), i.lineHeight = parseFloat(e.lineHeight), i.size = parseFloat(e.size), i.arcAngle = parseFloat(e.arcAngle), i.dynamicInfo = e.dynamicInfo, i.hasMultipleLines = "true" === e.hasMultipleLines || !0 === e.hasMultipleLines, e.engravingStyle && (i.engravingStyle = parseInt(e.engravingStyle)), e.colorGraphic) {
                    const t = parseInt(e.colorGraphic.id),
                        n = (0, a.Xy)(t);
                    let r = null;
                    n ? r = v()((0, a.Mh)(t)) : !n && e.colorGraphicItem && (r = l.K.fromArray(e.colorGraphicItem), (0, a.oA)([r])), r ? (i.colorGraphic = r, i.colorGraphic.scale = parseFloat(e.colorGraphic.scale)) : console.error("Could not read graphic info data")
                }
                return i
            }, _.fromTextLayer = function(e) {
                const t = new _;
                return t.text = e.text, t.font = e.font, t.color = e.color, t.alignment = e.alignment, t.letterSpacing = parseFloat(e.letterSpacing), t.lineHeight = parseFloat(e.lineHeight), t.size = e.size, t.engravingStyle = e.engravingStyle, t.position = e.position.getFromOriginalRatio(), t.originalPosition = e.originalPosition, t.isCustomizable = e.isCustomizable, t.resizeToPercent = e.resizeToPercent, t
            }, _.TYPE = c.hG.TEXTBOX, window && ((globalThis || {}).PFComponentsGeneratorMockupTextboxLayer = _)
        },
        31433: (e, t, i) => {
            "use strict";
            i.d(t, {
                y: () => s
            });
            var n = i(66308),
                r = i(19639),
                o = i(58232),
                a = i(93307);
            const s = Class({
                licensedAssetItem: null,
                isCropState: !1,
                showOutOfBoundsErrorMessage: !0,
                isRemovedBg: null,
                removeBgPreview: null,
                validForBgRemoval: !1,
                getType: () => s.TYPE,
                getThumbUrl() {
                    return this.licensedAssetItem.previewUrl
                },
                _getNewLayer: () => new s,
                isLicensedAssetLayer: () => !0,
                getOriginalClone(e) {
                    var t, i = this._getNewLayer();
                    return e || (i.uniqueId = this.uniqueId), i.licensedAssetItem = this.licensedAssetItem, i.patternType = this.patternType, i.patternSpacing = this.patternSpacing, i.flipX = this.flipX, i.flipY = this.flipY, i.quickDesignId = this.quickDesignId, i.groupType = this.groupType, i.groupId = this.groupId, i.uniqueGroupLayerId = this.uniqueGroupLayerId, i.overrideImage = this.overrideImage, i.position = this.position.getFromOriginalRatio(), i.isCropState = this.isCropState, i.animation = this.animation, i.cropPosition = null === (t = this.cropPosition) || void 0 === t ? void 0 : t.getFromOriginalRatio(), i.originalPosition = this.originalPosition.getClone(), i.customPosition = this.customPosition, i.isRemovedBg = this.isRemovedBg, i.removeBgPreview = this.removeBgPreview, i.validForBgRemoval = this.validForBgRemoval, i.isLocked = this.isLocked, i.hasMirrorLayer = this.hasMirrorLayer, i.isMirroredLayer = this.isMirroredLayer, i
                },
                getSourceWidth() {
                    return this.licensedAssetItem.width
                },
                getSourceHeight() {
                    return this.licensedAssetItem.height
                },
                isVector() {
                    return this.licensedAssetItem.assetType === a.Tx
                },
                isStockImage() {
                    return this.licensedAssetItem.assetType === a._m
                },
                toArray() {
                    return {
                        type: s.TYPE,
                        licensedAssetId: this._getLicensedAssetId(),
                        url: this._getUrl(),
                        position: this.position ? this.position.toArray() : {},
                        cropPosition: this.cropPosition ? this.cropPosition.toArray() : null,
                        uniqueId: this.uniqueId,
                        patternType: this.patternType,
                        patternSpacing: this.patternSpacing,
                        flipX: this.flipX,
                        flipY: this.flipY,
                        isRemovedBg: this.isRemovedBg,
                        removeBgPreview: this.removeBgPreview,
                        overrideImage: this.overrideImage,
                        quickDesignId: this.quickDesignId,
                        groupType: this.groupType,
                        groupId: this.groupId,
                        uniqueGroupLayerId: this.uniqueGroupLayerId,
                        validForBgRemoval: this.validForBgRemoval,
                        isLocked: this.isLocked,
                        animation: this.animation,
                        licensedAssetItem: this.licensedAssetItem,
                        hasMirrorLayer: this.hasMirrorLayer,
                        isMirroredLayer: this.isMirroredLayer
                    }
                },
                _getUrl() {
                    return this.licensedAssetItem.previewUrl
                },
                _getLicensedAssetId() {
                    return this.licensedAssetItem.licensedAssetId
                },
                getDPI() {
                    const e = this.cropPosition ? this.cropPosition.width / this.position.width : 1,
                        t = this.getSourceWidth() * e,
                        i = this.cropPosition || this.position;
                    return this.isVector() ? 600 : Math.round(t / i.getFromOriginalRatio().width)
                },
                isSimple: () => !1,
                isPartiallyOutOfBounds: function() {
                    return this.cropPosition ? this.cropPosition.isPartiallyOutOfBounds() : this.position.isPartiallyOutOfBounds()
                },
                isCropPositionUpdateNeeded: function() {
                    return !!this.cropPosition
                }
            }, n.Z);
            s.TYPE = o.hG.LICENSED_ASSET, s.STATUS_REMOVED = "removed", s.fromLicensedAssetItem = function(e) {
                var t = new s;
                return t.licensedAssetItem = e, t.originalPosition = new r.K, t.position = t.originalPosition.getClone(), t
            }, window && ((globalThis || {}).PFComponentsGeneratorMockupLicensedAssetLayer = s)
        },
        15974: (e, t, i) => {
            "use strict";
            i.d(t, {
                F: () => u
            });
            var n = i(66308),
                r = i(19639),
                o = i(1042),
                a = i(71851),
                s = i(97993),
                l = i(58232);
            const u = Class({
                propItem: null,
                getType: () => u.TYPE,
                getThumbUrl() {
                    return this.propItem.image.urlThumb
                },
                getName() {
                    return this.propItem.name
                },
                _getNewLayer: () => new u,
                getOriginalClone(e) {
                    const t = this._getNewLayer();
                    return e || (t.uniqueId = this.uniqueId), t.propItem = this.propItem, t.flipX = this.flipX, t.flipY = this.flipY, t.overrideImage = this.overrideImage, t.position = this.position.getFromOriginalRatio(), t.patternType = this.patternType, t.patternSpacing = this.patternSpacing, t.originalPosition = this.originalPosition.getClone(), t.disableCentering = (0, s.EY)(), t
                },
                getSourceWidth() {
                    return this.propItem.width
                },
                getSourceHeight() {
                    return this.propItem.height
                },
                getSourceDpi: function() {
                    return this.getDPI()
                },
                isConfigurationSame: function(e) {
                    return e.propItem.id === this.propItem.id
                },
                toArray() {
                    return {
                        type: o.GR,
                        object: u.BE_OBJECT,
                        id: this._getPropId(),
                        url: this._getUrl(),
                        position: this.position ? this.position.toArray() : {},
                        patternType: this.patternType,
                        patternSpacing: this.patternSpacing,
                        flipX: this.flipX,
                        flipY: this.flipY,
                        uniqueId: this.uniqueId,
                        disableCentering: (0, s.EY)()
                    }
                },
                _getUrl() {
                    return this.propItem.image.urlLarge
                },
                _getPropId() {
                    return this.propItem.id
                },
                getDPI: () => 600,
                isVector: () => !1,
                isSimple: () => !1,
                isPropLayer: () => !0
            }, n.Z);
            u.TYPE = l.hG.PROP, u.BE_OBJECT = "mockupMakerObject", u.fromObject = function(e) {
                const t = new u;
                return t.propItem = (0, a.j)(e.id), t.originalPosition = new r.K, t.position = t.originalPosition.getClone(), t
            }
        },
        54807: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => u
            });
            var n = i(66308),
                r = i(19639),
                o = i(1042),
                a = i(97993),
                s = i(17298),
                l = i(24424);
            const u = Class({
                mockupFile: null,
                isLocked: !0,
                getType: () => l.o,
                _getNewLayer: () => new u,
                getOriginalClone(e) {
                    const t = this._getNewLayer();
                    return e || (t.uniqueId = this.uniqueId), t.mockupFile = this.mockupFile, t.flipX = this.flipX, t.flipY = this.flipY, t.overrideImage = this.overrideImage, t.position = this.position.getFromOriginalRatio(), t.originalPosition = this.originalPosition.getClone(), t
                },
                getSourceWidth() {
                    return this.mockupFile.mockupWidth
                },
                getSourceHeight() {
                    return this.mockupFile.mockupHeight
                },
                getSourceDpi: function() {
                    return this.getDPI()
                },
                isConfigurationSame: function(e) {
                    var t;
                    return e.mockupFile.downloadUrl === (null === (t = this.mockupFile) || void 0 === t ? void 0 : t.downloadUrl)
                },
                toArray() {
                    let e;
                    return e = null === sessionStorage.getItem("layerIsLocked") || "true" === sessionStorage.getItem("layerIsLocked"), {
                        type: o.GR,
                        object: l.w,
                        id: this._getId(),
                        url: this._getUrl(),
                        position: this.position ? this.position.toArray() : {},
                        flipX: this.flipX,
                        flipY: this.flipY,
                        uniqueId: this.uniqueId,
                        isLocked: e,
                        disableCentering: (0, a.EY)()
                    }
                },
                _getUrl() {
                    var e;
                    return null === (e = this.mockupFile) || void 0 === e ? void 0 : e.downloadUrl
                },
                _getId: () => 1,
                getDPI: () => 600,
                isVector: () => !1,
                isSimple: () => !1,
                isMockupLayer: () => !0
            }, n.Z);
            u.fromObject = () => {
                const e = new u;
                return e.mockupFile = (0, s.CG)(), e.originalPosition = new r.K, e.position = e.originalPosition.getClone(), e
            }
        },
        66137: (e, t, i) => {
            "use strict";
            i.d(t, {
                w: () => a
            });
            var n = i(70141),
                r = i(19639),
                o = i(58232);
            const a = Class({
                subtype: null,
                getType: function() {
                    return o.hG.EXTERNAL
                },
                _getNewLayer: function() {
                    return new a
                },
                getOriginalClone: function(e) {
                    const t = n.t.prototype.getOriginalClone.apply(this, [e]);
                    return t.subtype = this.subtype, t
                },
                toArray: function(e) {
                    var t;
                    return {
                        ...n.t.prototype.toArray.apply(this, [e]),
                        type: this.getType(),
                        subtype: this.subtype,
                        temporaryFileKey: null === (t = this.temporaryFileItem) || void 0 === t ? void 0 : t.temporaryFileKey,
                        shouldUseTempFile: this.shouldUseTempFile
                    }
                }
            }, n.t);
            a.fromTempFileItem = function(e) {
                const t = new a;
                return t.temporaryFileItem = e, t.shouldUseTempFile = !0, t.originalPosition = new r.K, t.position = t.originalPosition.getClone(), Object.values(o.b0).includes(e.type) || console.warn("Unknown temporary file with type -", e.type), t.subtype = e.type, t
            }
        },
        46369: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => u
            });
            var n = i(3044),
                r = i(88725),
                o = i(7495),
                a = i(22277),
                s = i(23848),
                l = i(51122);
            const u = Class({
                DEFAULT_LIMIT_KEY: "DEFAULT",
                DEFAULT_CHAR_LIMITS: {},
                _activeLayer: null,
                _text: null,
                _techniqueMemory: null,
                isCharLimitEnabled: !0,
                _activePlacement: "",
                __construct: function() {
                    this._initCharLimits(), this.setProductFromDesignerState()
                },
                _initCharLimits: function() {
                    this.DEFAULT_CHAR_LIMITS[this.DEFAULT_LIMIT_KEY] = 50, this.DEFAULT_CHAR_LIMITS[l.V_] = 25
                },
                reset: function() {
                    return this._activeLayer = null, this._techniqueMemory = null, this._text = null, this
                },
                setProductFromDesignerState: function() {
                    const e = (0, a.WU)();
                    return e && (this._techniqueMemory = new n.z(e.productId)), this
                },
                setActiveLayer: function(e) {
                    return this._activeLayer = e, this
                },
                setText: function(e) {
                    return this._text = e, this
                },
                setActivePlacement: function(e) {
                    return this._activePlacement = e, this
                },
                isValid: function() {
                    return this._activeLayer && this.isTextValid()
                },
                isClipartSizeValid: function() {
                    var e = this._getTechnique();
                    if (!e || ![l.hC, l.gj].includes(e) || !this._activeLayer.clipartItem) return !0;
                    var t = .2,
                        i = .2;
                    return o.Y.isShapeSymbolGroup(this._activeLayer.clipartItem.groupId) && (t = .12, i = .06), e === l.gj && (t = s.Og - .01), this._activeLayer.position.height > t && this._activeLayer.position.width > i
                },
                isTextValid: function() {
                    var e = this._getFontOptions();
                    if (!this.isCharLimitEnabled || !e || !this._text) return !0;
                    const t = String(this._text || "").replace(/[\r\n]+/gm, "");
                    return e.maxCharacters >= t.length
                },
                getValidText: function() {
                    var e = this._getFontOptions();
                    return e && this._text ? this._text.substr(0, e.maxCharacters) : ""
                },
                getCharLimit: function() {
                    var e = this._getTechnique() || "DEFAULT",
                        t = this.DEFAULT_CHAR_LIMITS.hasOwnProperty(e) ? this.DEFAULT_CHAR_LIMITS[e] : this.DEFAULT_CHAR_LIMITS.DEFAULT,
                        i = this._getFontOptions();
                    return i && i.maxCharacters ? i.maxCharacters : t
                },
                _getFontOptions: function() {
                    const e = this._getTechnique();
                    if (!this._activeLayer.font) return null;
                    return (this._activeLayer.font.options.hasOwnProperty(e) ? this._activeLayer.font.options[e] : null) || new r.M
                },
                _getFontMaxHeight: function() {
                    const e = this._getTechnique(),
                        {
                            font: t
                        } = this._activeLayer;
                    return t ? t.getMaxHeight(e, this._activePlacement) : null
                },
                _getTechnique() {
                    var e;
                    let t = this._techniqueMemory ? this._techniqueMemory.getTechniqueFromMemory() : null;
                    null !== (e = this._activeLayer) && void 0 !== e && e.embroideryType && (t = l.V_);
                    const i = (0, a.WU)();
                    return !t && i && (t = i.availableTechniques ? i.availableTechniques.slice().shift() : i.type), t
                }
            });
            u.LAYER_LIMIT_TYPE_DEFAULT = "LAYER_LIMITS", u.LAYER_LIMIT_TYPE_TEXT = "LAYER_LIMITS_TEXT", u.LAYER_LIMIT_TYPE_CLIPART = "LAYER_LIMITS_CLIPART", u.LAYER_LIMITS = {}, u.LAYER_LIMITS[l.V_] = 5, u.LAYER_LIMITS_TEXT = {}, u.LAYER_LIMITS_TEXT[l.nZ] = 50, u.LAYER_LIMITS_TEXT[l.V_] = 5, u.LAYER_LIMITS_CLIPART = {}, u.LAYER_LIMITS_CLIPART[l.V_] = 5, u.getLayerLimit = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.LAYER_LIMIT_TYPE_DEFAULT;
                return u[t].hasOwnProperty(e) ? u[t][e] : null
            }, window && ((globalThis || {}).PFComponentsGeneratorMockupValidator = u)
        },
        40601: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => s
            });
            var n = i(58232),
                r = i(22277),
                o = i(51122),
                a = i(30663);
            const s = {
                getDefaultFontSize(e, t) {
                    const i = (0, r.WU)();
                    return [o.oG, n.e3].includes(t) ? n.wQ : !i || [o.Ub, o.ml].includes(t) ? n.Z2 : i.isPhoneCase() || i.isSocks() || i.isEmbroidery() ? .5 : i.isMug() ? 1 : i.isSticker() || e && [a.Y2, a.PU, a.uW, a.ZB, a.ju, a.VL, a.OS].includes(e) ? .5 : i.isJewelry() ? .2 : n.Z2
                }
            };
            (globalThis || {}).PFProductPushTextPickerHelpers = s
        },
        32434: (e, t, i) => {
            "use strict";
            i.d(t, {
                x: () => ae
            });
            var n = i(91414);
            const r = Class({
                maxWidth: null,
                maxHeight: null,
                generatorVariant: null,
                template: null,
                isPrintfile: null,
                getDesignFill: null,
                lifelikeVariants: {},
                variantArea: null,
                designData: null
            });
            window && ((globalThis || {}).PFComponentsGeneratorMockupPreviewPar = r);
            var o = i(9651),
                a = i(58232),
                s = i(97993),
                l = i(33765),
                u = i(22277),
                c = i(51122),
                d = i(73287),
                p = i(98932);
            const g = Class({
                _par: null,
                _mockupPosition: null,
                _previewString: null,
                _currentAttempt: 0,
                _maxAttempts: 2,
                _lifelikeVariants: {},
                __construct: function(e) {
                    this._par = e, this._lifelikeVariants = this._par.lifelikeVariants || {}, this._currentAttempt = 0, this._mockupPosition = this._par.generatorVariant.mockupPosition.getScaledPosition(this._par.maxWidth, this._par.maxHeight), this.node = tag("div", "generator-mockup-preview pf-mx-auto"), this._par.maxHeight && (this.node.style.minHeight = this._par.maxHeight + "px"), this._par.maxWidth && (this.node.style.width = this._par.maxWidth + "px"), this.render()
                },
                render() {
                    this.node.style.width = this._mockupPosition.areaWidth + "px", this.node.style.minHeight = this._mockupPosition.areaHeight + "px";
                    const e = this._par.isPrintfile ? "generator-mockup-preview__printfile" : "";
                    if (this._nodeBackground = (0, l.G)(null, this._par.generatorVariant, e, a.ii.TYPE_MOCKUP_GENERATOR, this._par.generatorVariant, this._par.isPrintfile, this._par.maxWidth, this._par.maxHeight, this.node), this._nodeBase = tag("div").append(this.node), this._nodeDesign = tag("div").append(this.node), !this._par.isPrintfile) {
                        var t = {
                            base: Math.min(this._par.maxWidth, this._par.maxHeight) > 300 ? this._par.generatorVariant.generatorImageUrl : this._par.generatorVariant.generatorThumbnailUrl
                        };
                        this._nodeBase.style.backgroundImage = t.base ? "url(" + t.base + ")" : null, this._nodeBase.style.zIndex = 0 === this._par.generatorVariant.mockupPrintZIndex ? 2 : null
                    }
                    this.renderPreviewString()
                },
                async renderPreviewString(e) {
                    var t, i, n;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    const g = (0, s.Re)(),
                        m = !(null != g && g.arcAngle && (null == g || !g.overrideImagePulse) && this._par.isPrintfile) && (this._par.isPrintfile && this._par.template.technique === c.V_),
                        h = this._par.generatorVariant.getColorData(),
                        f = (null === (t = this._par.template) || void 0 === t ? void 0 : t.placementId) || this._par.generatorVariant.placementId;
                    var y;
                    (this._lifelikeVariants[f] || (this._lifelikeVariants[f] = []), r[f] && r[f].forEach((e => {
                        this._lifelikeVariants[f].indexOf(e) < 0 && this._lifelikeVariants[f].push(e)
                    })), null != a && a.length && (this._lifelikeVariants[f] = this._lifelikeVariants[f].concat(a).filter(((e, t, i) => i.indexOf(e) === t))), this._par.designData) && (null !== (y = this._par.designData) && void 0 !== y && y.lifelikeVariants || (this._par.designData.lifelikeVariants = {
                        [f]: []
                    }), this._par.designData.lifelikeVariants[f] || (this._par.designData.lifelikeVariants[f] = []), this._lifelikeVariants[f].forEach((e => {
                        this._par.designData.lifelikeVariants[f].indexOf(e) < 0 && this._par.designData.lifelikeVariants[f].push(e)
                    })), this._lifelikeVariants = this._par.designData.lifelikeVariants);
                    const v = !this._par.isPrintfile && (null === (i = this._lifelikeVariants[f]) || void 0 === i ? void 0 : i.some((e => {
                            const [t, i] = e.split("__");
                            return t === h.hex || i === h.name
                        }))),
                        _ = !e && !this._par.isPrintfile && (this._par.generatorVariant.hideDesignPreview && !(0, d.Zf)());
                    _ ? o.U.addClassName(this._nodeDesign, "pf-d-none") : o.U.removeClassName(this._nodeDesign, "pf-d-none");
                    const I = this._mockupPosition.width > 0;
                    let T = null;
                    if (!_ && this._par.template && I) {
                        var E, P, S, b;
                        const e = (null === (E = (0, u.WU)()) || void 0 === E ? void 0 : E.colors) || [];
                        let t = [];
                        var O, C;
                        if (this._par.variantArea) t = (null === (O = this._par.variantArea) || void 0 === O ? void 0 : O.getGeneratorVariants().map((t => t.getColorData(e))).filter((e => null == e ? void 0 : e.hex))) || [];
                        else t = null === (C = this._lifelikeVariants[f]) || void 0 === C ? void 0 : C.map((e => {
                            const [t, i] = e.split("__");
                            return {
                                hex: t,
                                name: i
                            }
                        }));
                        const i = this._par.generatorVariant.getColorData(t),
                            n = {
                                fill: this._par.getDesignFill(f),
                                productColors: t,
                                productColor: i
                            },
                            r = l || (null === (P = this._par.designData) || void 0 === P || null === (S = P.rawPlacementOptions[0]) || void 0 === S || null === (b = S.options) || void 0 === b ? void 0 : b.designOutlineValue) || this._par.embroideryOutlineColor;
                        T = await p.n.getPreviewStringFromTemplate(this._par.template, this._mockupPosition, n, v, m, r, !1, !1, !0)
                    }
                    this._previewString = String(null === (n = T) || void 0 === n ? void 0 : n.imageBlobUrl), this._nodeDesign.style.background = null, this._nodeDesign.style.top = null, this._nodeDesign.style.left = null, this._nodeDesign.style.width = null, this._nodeDesign.style.height = null, this._nodeDesign.innerHTML = "", "<svg" === this._previewString.substring(0, 4) ? (this._nodeDesign.style.top = this._mockupPosition.top + "px", this._nodeDesign.style.left = this._mockupPosition.left + "px", this._nodeDesign.style.width = this._mockupPosition.width + "px", this._nodeDesign.style.height = this._mockupPosition.height + "px", this._nodeDesign.innerHTML = this._previewString) : "data:" !== this._previewString.substring(0, 5) && "blob:" !== this._previewString.substring(0, 5) || (this._nodeDesign.style.background = 'transparent url("' + this._previewString + '") ' + this._mockupPosition.left + "px " + this._mockupPosition.top + "px / " + this._mockupPosition.width + "px " + this._mockupPosition.height + "px no-repeat"), this._currentAttempt = 0, this._previewString = ""
                }
            }, o.U.Base);
            var m = i(60124),
                h = i(80510),
                f = i(72058),
                y = i(4473),
                v = i(28e3),
                _ = i(59597),
                I = i(96486),
                T = i(30663),
                E = i(90045),
                P = i(613),
                S = i(61169),
                b = i(25046);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function L(e, t, i) {
                return t && C(e.prototype, t), i && C(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function A(e, t) {
                return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, A(e, t)
            }

            function k(e) {
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
                    var i, n = D(e);
                    if (t) {
                        var r = D(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return w(this, i)
                }
            }

            function w(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e) {
                return D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, D(e)
            }

            function N(e, t, i) {
                M(e, t), t.set(e, i)
            }

            function M(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function F(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, x(e, t, "get"))
            }

            function V(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, x(e, t, "set"), i), i
            }

            function x(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var G = new WeakMap,
                B = new WeakMap,
                U = new WeakSet;
            let H = function(e) {
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
                    }), t && A(e, t)
                }(i, e);
                var t = k(i);

                function i(e) {
                    var n, r, o;
                    return O(this, i), n = t.call(this), M(r = R(n), o = U), o.add(r), N(R(n), G, {
                            writable: !0,
                            value: void 0
                        }), N(R(n), B, {
                            writable: !0,
                            value: void 0
                        }), V(R(n), B, e), n.node = tag("div", "printfile-preview-wrapper"),
                        function(e, t, i) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(R(n), U, z).call(R(n)), n
                }
                return L(i, [{
                    key: "destroy",
                    value: function() {
                        F(this, G).destroy(), V(this, G, null)
                    }
                }]), i
            }(S.p);
            async function z() {
                const e = new b.L;
                e.components = {
                    "printfile-preview": () => i.e(86650).then(i.bind(i, 48803))
                }, e.template = '<printfile-preview \n            :template="template"\n            :printfilePreview="printfilePreview"\n            :maxWidth="maxWidth"\n            :maxHeight="maxHeight"\n        />', e.initialData = {
                    template: F(this, B).template,
                    printfilePreview: F(this, B).printfilePreview,
                    maxWidth: F(this, B).maxWidth,
                    maxHeight: F(this, B).maxHeight
                }, V(this, G, new b.Z(e)), F(this, G).append(this.node)
            }
            let j = L((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                O(this, e), this.template = t.template, this.printfilePreview = t.printfilePreview, this.maxWidth = t.maxWidth, this.maxHeight = t.maxHeight
            }));
            var Y = i(98163),
                q = i(95935),
                W = i(17947);
            const K = 200;
            var Q = i(95502);

            function X(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oe(n.key), n)
                }
            }

            function $() {
                return $ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, i) {
                    var n = Z(e, t);
                    if (n) {
                        var r = Object.getOwnPropertyDescriptor(n, t);
                        return r.get ? r.get.call(arguments.length < 3 ? e : i) : r.value
                    }
                }, $.apply(this, arguments)
            }

            function Z(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ne(e)););
                return e
            }

            function J(e, t) {
                return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, J(e, t)
            }

            function ee(e) {
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
                    var i, n = ne(e);
                    if (t) {
                        var r = ne(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return te(this, i)
                }
            }

            function te(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ie(e)
            }

            function ie(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ne(e) {
                return ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, ne(e)
            }

            function re(e, t, i) {
                return (t = oe(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function oe(e) {
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
            let ae = function(e) {
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
                    }), t && J(e, t)
                }(l, e);
                var t, i, o, a = ee(l);

                function l() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), re(ie(e = a.call(this)), "toArrayKeys", [...l.DESIGN_DATA_KEYS, ...l.SYNC_DATA_KEYS]), re(ie(e), "toArrayKeysWithoutSyncData", [...l.DESIGN_DATA_KEYS]), re(ie(e), "storeId", null), re(ie(e), "productId", null), re(ie(e), "productTemplateId", null), re(ie(e), "customProductId", null), re(ie(e), "productOptions", null), re(ie(e), "colors", null), re(ie(e), "sizes", null), re(ie(e), "templateSelectedSizes", []), re(ie(e), "defaultGeneratorVariantId", null), re(ie(e), "templates", null), re(ie(e), "title", ""), re(ie(e), "description", ""), re(ie(e), "multiLanguageDetails", null), re(ie(e), "prices", null), re(ie(e), "initPrices", null), re(ie(e), "quantities", null), re(ie(e), "filesIdsByPlacement", null), re(ie(e), "isVisible", null), re(ie(e), "hasPodDescription", null), re(ie(e), "podDescriptionText", ""), re(ie(e), "shouldAddWarningText", !1), re(ie(e), "chemicalWarningText", null), re(ie(e), "withSizeGuide", !0), re(ie(e), "sizeGuideUnits", []), re(ie(e), "useSizeConversion", null), re(ie(e), "generatorVariants", null), re(ie(e), "isTransparent", null), re(ie(e), "categoryIds", null), re(ie(e), "taxRuleId", null), re(ie(e), "integrationMarketplaceCategoryIds", null), re(ie(e), "tags", null), re(ie(e), "genderCategory", null), re(ie(e), "generatorVariantsIdsToSave", null), re(ie(e), "templateKeysToSave", null), re(ie(e), "multipleMockups", !1), re(ie(e), "store", null), re(ie(e), "product", null), re(ie(e), "forceOrientation", null), re(ie(e), "forceTemplateType", null), re(ie(e), "generatorDesignId", null), re(ie(e), "orderId", null), re(ie(e), "arePrintfilesHidden", !1), re(ie(e), "shippingProfileId", null), re(ie(e), "selectedShippingCost", null), re(ie(e), "labelTemplateType", null), re(ie(e), "itemUniqueId", null), re(ie(e), "productTranslations", null), re(ie(e), "customDescriptions", {}), re(ie(e), "translationLanguage", null), re(ie(e), "rawPlacementOptions", null), re(ie(e), "lifelikeVariants", null), re(ie(e), "additionalGeneratorVariantIds", null), re(ie(e), "designMeta", null), re(ie(e), "hexColors", null), re(ie(e), "technique", null), re(ie(e), "isFreeShippingEnabled", !1), re(ie(e), "shouldShowWixMockupWarning", !1), re(ie(e), "marketplaceIdentities", null), re(ie(e), "pushableVideoIds", null), re(ie(e), "is3dModelGenerationRequired", !1), re(ie(e), "optionGroup", null), re(ie(e), "skuPrefix", null), re(ie(e), "productVendor", ""), re(ie(e), "productType", ""), re(ie(e), "selectedBrandingProfile", E.RT.STORE_DEFAULT), re(ie(e), "largeEmbroideryData", null), re(ie(e), "selectedVariantIds", null), re(ie(e), "blankGeneratorVariantIds", []), re(ie(e), "mockupGenerationQueue", {}), re(ie(e), "taxCode", null), e
                }
                return t = l, i = [{
                    key: "toArray",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const t = $(ne(l.prototype), "toArray", this).call(this, e);
                        return null != e && e.withoutSyncData ? (0, I.pick)(t, this.toArrayKeysWithoutSyncData) : t
                    }
                }, {
                    key: "getGeneratorVariant",
                    value: function(e) {
                        const t = this.generatorVariants.find((t => t.generatorVariantId === e));
                        return !t && PF.DEV && console.log("Generator variant not found: " + e), null != t ? t : null
                    }
                }, {
                    key: "getGeneratorVariantByTemplateId",
                    value: function(e) {
                        const t = this.generatorVariants.find((t => t.templateId === e));
                        return t || console.log("Generator variant for template not found: " + e), t
                    }
                }, {
                    key: "getTemplate",
                    value: function(e, t) {
                        for (const i in this.templates)
                            if (this.templates[i].templateId == t && this.templates[i].placementId == e) return this.templates[i];
                        PF.DEV && console.log("Generator template not found: " + t)
                    }
                }, {
                    key: "getMockupPreview",
                    value: function(e, t, i) {
                        const n = (0, s.IT)(P.O0);
                        if (e instanceof h.E || e instanceof f.M) {
                            var o;
                            let a = e instanceof h.E ? e : this.getGeneratorVariant(this.defaultGeneratorVariantId) || this.generatorVariants[0];
                            const s = e instanceof f.M,
                                l = s ? e : this.getTemplate(e.placementId, e.templateId);
                            if (n && (null === (o = a) || void 0 === o ? void 0 : o.mockupData)) {
                                (0, Q.V)();
                                const e = tag("div");
                                return s ? l && this.appendPrintfilePreviewToDiv(a, l, e, t, i) : this.appendFeMockupImageToDiv(a, e, t, i), e
                            } {
                                const n = new r;
                                return e && T.c7.includes(e.placementId) && e instanceof f.M && (a = this.getGeneratorVariantByTemplateId(e.templateId)), n.getDesignFill = v.r.fromArray(this.rawPlacementOptions).getPlacementFill, n.generatorVariant = a, n.maxWidth = t, n.maxHeight = i, n.template = l, n.isPrintfile = s, n.lifelikeVariants = this.lifelikeVariants, n.designData = this.toArray(), new g(n)
                            }
                        }
                        return tag("img", {
                            className: "generator-picker__printfile",
                            src: PF.ASSETS_URL + "images/layout/printfile.svg"
                        })
                    }
                }, {
                    key: "appendFeMockupImageToDiv",
                    value: function(e, t, i, n) {
                        var r, o;
                        if (null !== (r = this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId]) && void 0 !== r && r.promise) return void this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId].promise.then((e => {
                            const r = (0, W.Fn)(e, i, n);
                            t.appendChild(r)
                        }));
                        const a = new Promise(((t, i) => {
                            this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId] = {
                                resolve: t,
                                reject: i
                            }
                        }));
                        this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId].promise = a, (0, Y.k8)(null === (o = this.product) || void 0 === o ? void 0 : o.productId, e, Object.values(this.templates), this.rawPlacementOptions).then((r => {
                            const o = new q.PFMockupCanvasPar;
                            o.mockupData = null == e ? void 0 : e.mockupData, o.printfileData = r, o.layerParams = (0, Y.o3)(this.productOptions), o.useWorker = !0, o.mockupSize = K, (0, q.generateMockupUrl)(o).then((r => {
                                const o = (0, W.Fn)(r, i, n);
                                t.appendChild(o), this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId].resolve(r)
                            })).catch((t => {
                                this.mockupGenerationQueue[null == e ? void 0 : e.generatorVariantId].reject(), console.error(t)
                            }))
                        }))
                    }
                }, {
                    key: "appendPrintfilePreviewToDiv",
                    value: function(e, t, i, n, r) {
                        const o = (0, Y.oS)(this.rawPlacementOptions, t.placementId);
                        p.n.getPreviewStringFromTemplate(t, e.mockupPosition, o).then((e => {
                            const o = null == e ? void 0 : e.imageBlobUrl,
                                a = new j({
                                    template: t,
                                    printfilePreview: o,
                                    maxWidth: n,
                                    maxHeight: r
                                }),
                                s = new H(a);
                            s.node && i.appendChild(s.node)
                        }))
                    }
                }, {
                    key: "isEmbroidery",
                    value: function() {
                        for (const e in this.generatorVariants)
                            if (T.aB.includes(this.generatorVariants[e].placementId)) return !0;
                        return !1
                    }
                }, {
                    key: "getPlacementIdsWithDesign",
                    value: function() {
                        let e = [];
                        for (const t in this.templates) {
                            const i = this.templates[t];
                            i.layers.length && !e.includes(i.placementId) && e.push(i.placementId)
                        }
                        return e = e.concat(this.getPlacementIdsWithDesignFillSet()).filter(((e, t, i) => i.indexOf(e) === t)), e
                    }
                }, {
                    key: "hasPlacementDesignOptionSet",
                    value: function(e, t) {
                        var i;
                        if (!this.rawPlacementOptions) return !1;
                        const n = this.rawPlacementOptions.find((t => t.placement === e));
                        return (null == n || null === (i = n.options) || void 0 === i ? void 0 : i[t]) || !1
                    }
                }, {
                    key: "getPlacementIdsWithDesignFillSet",
                    value: function() {
                        return this.rawPlacementOptions ? [...new Set(this.rawPlacementOptions.filter((e => this.hasPlacementDesignOptionSet(e.placement, "designFillValue"))).map((e => e.placement)))] : []
                    }
                }, {
                    key: "getTemplateIdsWithDesign",
                    value: function() {
                        const e = this.getPlacementIdsWithDesignFillSet();
                        return [...new Set(Object.values(this.templates).filter((t => e.includes(t.placementId) || t.layers.length)).map((e => e.templateId)))]
                    }
                }, {
                    key: "hasTextLayers",
                    value: function() {
                        for (const e in this.templates)
                            if (this.templates[e].layers.filter((e => e.isTextLayer())).length > 0) return !0;
                        return !1
                    }
                }, {
                    key: "hasCustomizableLayers",
                    value: function() {
                        return this.getCustomizablePlacementsCount() > 0
                    }
                }, {
                    key: "getNonCustomizablePlacementsCount",
                    value: function() {
                        return Object.keys(this.templates).length - this.getCustomizablePlacementsCount()
                    }
                }, {
                    key: "getCustomizablePlacementsCount",
                    value: function() {
                        let e = 0;
                        for (const t in this.templates) {
                            const i = this.templates[t];
                            f.M.getCustomizableLayersCount(i) > 0 && e++
                        }
                        return e
                    }
                }, {
                    key: "hasClipartLayers",
                    value: function() {
                        for (const e in this.templates)
                            if (this.templates[e].layers.filter((e => e instanceof n.K)).length > 0) return !0;
                        return !1
                    }
                }, {
                    key: "isCustomProduct",
                    value: function() {
                        return this.productId === y.W.ID_CUSTOM_PRODUCT
                    }
                }, {
                    key: "isFlatEmbroidery",
                    value: function() {
                        var e;
                        return (null === (e = this.productOptions) || void 0 === e ? void 0 : e.embroidery_type) === T.Bv
                    }
                }, {
                    key: "is3DEmbroidery",
                    value: function() {
                        var e;
                        return (null === (e = this.productOptions) || void 0 === e ? void 0 : e.embroidery_type) === T.BQ
                    }
                }, {
                    key: "isPartial3DEmbroidery",
                    value: function() {
                        var e;
                        return (null === (e = this.productOptions) || void 0 === e ? void 0 : e.embroidery_type) === T.Lo
                    }
                }, {
                    key: "hasLabelNative",
                    value: function() {
                        return !(!this.labelTemplateType || this.labelTemplateType !== m.S.LABEL_NATIVE)
                    }
                }, {
                    key: "hasLabelColorGroup",
                    value: function() {
                        return !(!this.labelTemplateType || this.labelTemplateType !== m.S.LABEL_COLOR_GROUP)
                    }
                }, {
                    key: "canHaveColorPicker",
                    value: function() {
                        return !this.product || this.product.canHaveColorPicker()
                    }
                }, {
                    key: "cloneDesignData",
                    value: function() {
                        return (0, I.cloneDeep)(this)
                    }
                }], i && X(t.prototype, i), o && X(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(_.$);
            re(ae, "META_COPY_DESIGN", "copy_design"), re(ae, "META_QUICK_DESIGN", "quick_design"), re(ae, "DESIGN_DATA_KEYS", ["storeId", "productId", "productTemplateId", "customProductId", "productOptions", "filesIdsByPlacement", "colors", "sizes", "templateSelectedSizes", "defaultGeneratorVariantId", "templates", "title", "quantities", "useSizeConversion", "genderCategory", "generatorVariantsIdsToSave", "multipleMockups", "forceOrientation", "forceTemplateType", "generatorDesignId", "arePrintfilesHidden", "templateKeysToSave", "orderId", "itemUniqueId", "labelTemplateType", "rawPlacementOptions", "lifelikeVariants", "additionalGeneratorVariantIds", "designMeta", "marketplaceIdentities", "isTransparent", "selectedVariantIds", "largeEmbroideryData", "technique", "blankGeneratorVariantIds"]), re(ae, "SYNC_DATA_KEYS", ["description", "multiLanguageDetails", "translationLanguage", "withSizeGuide", "sizeGuideUnits", "tags", "categoryIds", "integrationMarketplaceCategoryIds", "isVisible", "hasPodDescription", "podDescriptionText", "shouldAddWarningText", "chemicalWarningText", "shippingProfileId", "isFreeShippingEnabled", "taxRuleId", "selectedShippingCost", "pushableVideoIds", "is3dModelGenerationRequired", "prices", "skuPrefix", "productVendor", "productType", "selectedBrandingProfile", "largeEmbroideryData", "taxCode"])
        },
        29559: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => u
            });
            var n = i(92939),
                r = i(74808),
                o = i(80510),
                a = i(74194),
                s = (i(4473), i(28e3)),
                l = i(9651);
            const u = function() {
                this.colors = [], this.sizes = [], this.availablePlacements = [], this.generatorVariants = {}, this.variantMapping = [], this.calculatedPositions = [], this.conflictingTypes = {}, this.availableOrientations = [], this.orientation = "", this.regions = {}, this.preselectedData = {}, this.pushableVideos = [], this.canPush3dModel = !1, this.modelConfig = {}
            };
            u.prototype.pushableVideos = null, u.prototype.colors = null, u.prototype.sizes = null, u.prototype.translatedSizes = null, u.prototype.variantLimit = null, u.prototype.requiredDPI = null, u.prototype.designData = null, u.prototype.availablePlacements = null, u.prototype.variantMapping = null, u.prototype.generatorVariants = null, u.prototype.calculatedPositions = null, u.prototype.conflictingTypes = null, u.prototype.placementsWithOnlyBackgroundColor = null, u.prototype.regions = null, u.prototype.availableOrientations = null, u.prototype.isCustomizerEnabled = !1, u.prototype.orientation = "", u.prototype.availableTechniques = null, u.prototype.shouldValidateTransparencyForTechniques = null, u.prototype.techniqueDisplayNames = {}, u.prototype.hasNewPlacement = null, u.prototype.allLabelTypesAvailable = !1, u.prototype.forceTemplateType = "", u.prototype.preselectedData = {}, u.prototype.isAdditionalMockupPushEnabled = !1, u.prototype.areQuickDesignsAvailable = !1, u.prototype.areQuickDesignsAvailableForDTG = !1, u.prototype.canPush3dModel = !1, u.prototype.modelConfig = null, u.prototype.getGeneratorVariant = function(e) {
                for (var t in this.generatorVariants)
                    if (this.generatorVariants[t].generatorVariantId == e) return this.generatorVariants[t];
                PF.DEV && console.log("Generator variant not found: " + e)
            }, u.prototype.getGeneratorVariantsArray = function() {
                return Object.values(this.generatorVariants || {})
            }, u.prototype.layerMatchesAdvancedTemplate = function(e, t) {
                return this.variantMapping.some((function(i) {
                    return !(!i.advancedTemplateSize || !i.advancedTemplateSize.hasOwnProperty(e)) && t.matchesAdvancedTemplate(i.advancedTemplateSize[e])
                }))
            }, u.duplicateFrom = function(e) {
                var t = new u;
                l.U.O2O(t, e);
                var i = function(e) {
                    return JSON.parse(JSON.stringify(e))
                };
                if (t.placementOptions && (t.placementOptions = s.r.duplicateFrom(t.placementOptions)), t.colors && (t.colors = t.colors.map((function(e) {
                        return a.h.fromArray(e)
                    }))), t.regions && (t.regions = i(t.regions)), t.preselectedData && (t.preselectedData = i(t.preselectedData)), t.availablePlacements && (t.availablePlacements = t.availablePlacements.map((function(e) {
                        return n.M.fromArray(e)
                    }))), t.variantMapping && (t.variantMapping = t.variantMapping.map((function(e) {
                        return r.n.fromArray(e)
                    }))), t.generatorVariants) {
                    var c = {};
                    Object.keys(t.generatorVariants).forEach((function(e) {
                        var i = t.generatorVariants[e];
                        i = o.E.fromArray(i), c[e] = i
                    })), t.generatorVariants = c
                }
                if (t.conflictingTypes) {
                    var d = {};
                    Object.keys(t.conflictingTypes).forEach((function(e) {
                        var i = t.conflictingTypes[e];
                        d[e] = {
                            placementId: i.placementId,
                            conflictsWith: i.conflictsWith.map((function(e) {
                                return n.M.fromArray(e)
                            }))
                        }
                    })), t.conflictingTypes = d
                }
                return ["sizes", "availableOrientations", "availableTechniques"].forEach((function(e) {
                    t[e] && t[e].length && (t[e] = t[e].slice())
                })), t
            }, u.ORIENTATION_VERTICAL = "vertical", u.ORIENTATION_HORIZONTAL = "horizontal", u.TEMPLATE_TYPE_SIMPLE = "simple", u.TEMPLATE_TYPE_ADVANCED = "advanced", (globalThis || {}).PFRepositoriesGeneratorRepositoryGeneratorParameters = u
        },
        9084: (e, t, i) => {
            "use strict";
            i.d(t, {
                O: () => l
            });
            var n = i(14451),
                r = i(12846),
                o = i(5532),
                a = i(61756),
                s = i(70418);
            const l = function() {
                this.fileCache = l.fileCache, this.tagCache = l.tagCache
            };
            l.EVENT_FILE_DELETED = "libraryFileDeleted", l.prototype.tagCache = null, l.prototype.fileCache = null, l.prototype.getTags = function(e) {
                null === this.tagCache ? (0, s.r)("library/get-file-tags", {}, $.proxy(this._getTagsRe, this, e)) : e(this.tagCache)
            }, l.prototype._getTagsRe = function(e, t) {
                for (var i in l.tagCache = {}, this.tagCache = l.tagCache, t.tags) this.tagCache[i] = t.tags[i];
                e(this.tagCache)
            }, l.prototype.deleteFile = function(e, t) {
                (0, s.r)("library/delete", {
                    fileId: e.fileId
                }, (function() {
                    a.j8(l.EVENT_FILE_DELETED, e), t && t()
                })), delete this.fileCache[e]
            }, l.prototype.renameFile = function(e, t, i) {
                (0, s.r)("library/rename", {
                    fileId: e.fileId,
                    fileName: t
                }, $.proxy(this.renameFileRe, this, i))
            }, l.prototype.renameFileRe = function(e, t) {
                var i = o.q.fromArray(t.file);
                this.cacheFile(i), e && e(i)
            }, l.prototype.moveFiles = function(e, t, i) {
                (0, s.r)("library/move", {
                    fileIds: e,
                    storeId: t
                }, $.proxy(this._moveFilesRe, this, i))
            }, l.prototype._moveFilesRe = function(e, t) {
                "function" == typeof e && e(t.files)
            }, l.prototype.getFiles = function(e, t) {
                (0, s.r)("library/get", {
                    storeId: e.storeId,
                    activeStoresOnly: e.activeStoresOnly,
                    page: e.page,
                    search: e.search,
                    fileIds: e.fileIds,
                    perPage: e.perPage,
                    productId: e.productId
                }, this._getFilesRe.bind(this, t))
            }, l.prototype.getSampleFiles = function(e, t) {
                (0, s.r)("library/get-samples", {
                    page: e.page,
                    fileIds: e.fileIds,
                    perPage: e.perPage,
                    includeSwatches: e.includeSwatches ? 1 : 0,
                    productId: e.productId,
                    technique: e.technique
                }, this._getFilesRe.bind(this, t))
            }, l.prototype._getFilesRe = function(e, t) {
                var i = t.files,
                    n = new r.w;
                for (var a in n.page = i.page, n.pages = i.pages, n.total = i.total, i.items) {
                    var s = o.q.fromArray(i.items[a]);
                    n.items.push(s), this.cacheFile(s)
                }
                e(n)
            }, l.prototype.getByIds = function(e, t, i) {
                if (!i) {
                    var n = [];
                    for (var r in e) {
                        var o = this.fileCache[e[r]];
                        if (!o) break;
                        n.push(o)
                    }
                    if (n.length === e.length) return void t(n)
                }(0, s.r)("library/get-by-ids", {
                    fileIds: e
                }, this._getByIdsRe.bind(this, t))
            }, l.prototype._getByIdsRe = function(e, t) {
                var i = [];
                for (var n in t.files) {
                    var r = o.q.fromArray(t.files[n]);
                    i.push(r), this.cacheFile(r)
                }
                e(i)
            }, l.prototype.cacheFile = function(e) {
                this.fileCache[e.fileId] = e
            }, l.prototype.hasCachedFile = function(e) {
                return !!this.fileCache[e]
            }, l.prototype.getCachedFile = function(e) {
                if (e === o.q.ID_TEMP_GENERATOR_FILE) {
                    const e = new o.q;
                    return e.fileId = o.q.ID_TEMP_GENERATOR_FILE, e
                }
                const t = this.fileCache[e];
                return t || console.error("FileItem as not found in cache: " + e), t || new o.q
            }, l.prototype.createFromGoogleDrive = function(e, t, i, n, r, o, a, l) {
                (0, s.r)("library/google-drive-upload", {
                    googleFileId: o,
                    oAuthToken: a,
                    group: e,
                    storeId: i,
                    directoryId: n,
                    filename: r,
                    tags: t
                }, this._fileCreated.bind(this, l))
            }, l.prototype._fileCreated = function(e, t) {
                e(o.q.fromArray(t.file))
            }, l.prototype.createFromUrl = function(e, t, i, n, r, o, a) {
                (0, s.r)("library/url-upload", {
                    group: e,
                    storeId: i,
                    directoryId: n,
                    filename: r,
                    tags: t,
                    url: o
                }, $.proxy(this._fileCreated, this, a))
            }, l.prototype.confirmCopyrights = function(e) {
                (0, s.r)("library/confirm-copyrights", {}, e)
            }, l.prototype.confirmEmbroidery = function(e) {
                (0, s.r)("embroidery/confirm", {}, e)
            }, l.prototype.confirmInsideLabel = function(e) {
                (0, s.r)("library/confirm-inside-label", {}, e)
            }, l.prototype.validateItemFiles = function(e, t, i) {
                var n = [];
                for (var r in t) n.push(t[r].toArray());
                (0, s.r)("library/validate-item-files", {
                    variantId: e,
                    itemFiles: n
                }, $.proxy(this._validateFilesRe, this, t, i))
            }, l.prototype._validateFilesRe = function(e, t, i) {
                var r = [],
                    o = {};
                for (var a in e) o[e[a].type] = e[a].price;
                for (var a in i.itemFiles) {
                    var s = n.p.fromArray(i.itemFiles[a]);
                    o[s.type] && (s.price = o[s.type]), r.push(s)
                }
                t(r)
            }, l.tagCache = null, l.fileCache = {}, l._instance = null, l.getInstance = function() {
                return l._instance || (l._instance = new l), l._instance
            }, l.SearchPar = function() {}, l.SearchPar.prototype.storeId = null, l.SearchPar.prototype.activeStoresOnly = !1, l.SearchPar.prototype.page = null, l.SearchPar.prototype.perPage = null, l.SearchPar.prototype.fileIds = null, l.SearchPar.prototype.includeSwatches = null, l.SearchPar.prototype.onlySampleFiles = null, l.SearchPar.prototype.search = "", (globalThis || {}).PFRepositoriesLibraryRepository = l
        },
        98060: (e, t, i) => {
            "use strict";
            i.d(t, {
                V: () => l
            });
            var n = i(38032),
                r = i(20833),
                o = i(97540),
                a = i(97271),
                s = i.n(a);
            const l = Class({
                _colors: [],
                _paletteColors: null,
                _replacementColors: null,
                _callback: null,
                _image: null,
                __construct: function(e, t, i) {
                    for (var o in this._callback = i, this._colors = [], t) this._colors.push(n.Q.hexToRgb(t[o]));
                    this._image = new Image, this._image.onload = this._onImageLoaded, this._image.crossOrigin = "Anonymous";
                    var a = new r.R(e);
                    a.query.cache = (new Date).getTime(), this._image.src = a.toString()
                },
                _onImageLoaded: function() {
                    var e = document.createElement("canvas");
                    e.width = this._image.width, e.height = this._image.height;
                    var t = e.getContext("2d");
                    t.drawImage(this._image, 0, 0);
                    for (var i = t.getImageData(0, 0, this._image.width, this._image.height), n = i.data, r = 0, o = n.length; r < o; r += 4)
                        if (n[r + 3] = n[r + 3] < 127 ? 0 : 255, 0 != n[r + 3]) {
                            var a = this._getNearestColor(n[r], n[r + 1], n[r + 2]);
                            a && (n[r] = a.r, n[r + 1] = a.g, n[r + 2] = a.b)
                        } t.putImageData(i, 0, 0), this._callback(e.toDataURL())
                },
                _getNearestColor: function(e, t, i) {
                    var n, r = 1 / 0;
                    for (var o in this._colors) {
                        var a = this._colors[o];
                        if (a) {
                            var s = Math.sqrt(Math.pow(e - a.r, 2) + Math.pow(t - a.g, 2) + Math.pow(i - a.b, 2));
                            s < r && (r = s, n = a)
                        }
                    }
                    return n
                },
                colorizeImage: function(e, t, i, r) {
                    const o = t.map(n.Q.Color.fromHex);
                    var a;
                    a = i ? o.map(((e, t) => i[t] ? i[t] ? n.Q.Color.fromHex(i[t]) : e : null)) : this._paletteColors, this._loadImage(e, this._colorizeOnImageLoaded.bind(this, r, o, a))
                },
                _quantizeImage: function(e, t, i, r, a) {
                    const u = new(s())(l.RGB_QUANT_DEFAULTS);
                    this._loadImage(e, (function(e) {
                        try {
                            u.sample(e);
                            var s = u.palette(!0, !0)
                        } catch (e) {
                            return console.error(e), o.D.hide(i), void(a && a())
                        }
                        const l = s.length;
                        s = (s = (s = s.map((e => n.Q.Color.fromArray(e)))).filter((function(e, t, i) {
                            for (let n = 0; n < t; n++)
                                if (u.colorDist(e.toArray(), i[n].toArray()) < .08) return !1;
                            return !0
                        }))).slice(0, t), r(s, l)
                    }))
                },
                quantizeWithPaletteColors: function(e, t, i, r, o, a, s) {
                    i = i.map((function(e) {
                        return n.Q.Color.fromHex(e)
                    })), this._quantizeImage(e, t, o, function(e, t) {
                        var n = {},
                            o = i,
                            s = this._getRgbPaletteAsArray(o);
                        e.forEach(function(e) {
                            var t = l.getNearestColor(e.r, e.g, e.b, s);
                            n[e.toHex()] = o[t].toHex(), this._updateSelectedPalette(i, r, t), s = this._getRgbPaletteAsArray(o)
                        }.bind(this)), a(n, t)
                    }.bind(this), s)
                },
                _updateSelectedPalette: function(e, t, i) {
                    e.length > i && (e[i].isContainedBy(t) || t.push(e[i]))
                },
                _getRgbPaletteAsArray: function(e) {
                    return e.map((function(e) {
                        return e.toArray()
                    }))
                },
                _loadImage: function(e, t) {
                    var i = new r.R(e);
                    i.query.cache = "CORS";
                    var n = new Image;
                    n.crossOrigin = "Anonymous", n.onload = function() {
                        t(n)
                    }, n.src = i.toString()
                },
                _colorizeOnImageLoaded: function(e, t, i, n) {
                    var r = document.createElement("canvas");
                    r.width = n.width, r.height = n.height;
                    var o = r.getContext("2d");
                    o.drawImage(n, 0, 0, r.width, r.height);
                    for (var a, s = o.getImageData(0, 0, r.width, r.height), u = s.data, c = t.map((function(e) {
                            return e.toArray()
                        })), d = (i = i.map((function(e) {
                            return e ? e.toArray() : null
                        })), 0), p = u.length; d < p; d += 4) u[d + 3] = u[d + 3] < 127 ? 0 : 255, 0 != u[d + 3] && ((a = i[l.getNearestColor(u[d], u[d + 1], u[d + 2], c)]) ? (u[d] = a[0], u[d + 1] = a[1], u[d + 2] = a[2]) : u[d + 3] = 0);
                    o.putImageData(s, 0, 0), r.toBlob ? r.toBlob((function(t) {
                        var i = URL.createObjectURL(t);
                        e(i)
                    })) : e(r.toDataURL())
                }
            });
            l.RGB_QUANT_DEFAULTS = {
                method: 2,
                boxSize: [8, 8],
                boxPxls: 10,
                colors: 64
            }, l.getNearestColor = function(e, t, i, n) {
                for (var r, o, a, s = 1 / 0, l = 0; l < n.length; l++) a = n[l], (o = Math.pow(e - a[0], 2)) > s || (o += Math.pow(t - a[1], 2)) > s || (o += Math.pow(i - a[2], 2)) < s && (s = o, r = l);
                return r
            }, window && ((globalThis || {}).PFUtilsColorMapper = l)
        },
        38032: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => n
            });
            const n = {
                colorOrder: ["#FFFFFF", "#F1F0F5", "#E5E6E1", "#F8F8F8", "#EAEAEA", "#D9DAD5", "#E2E3DE", "#EBE8E3", "#E5E6E1", "#F1F0F5"],
                blackColors: ["#27262B"],
                luminosity: "luminosity",
                sort: function(e) {
                    return e.sort((function(e, t) {
                        var i = e.codes,
                            r = t.codes;
                        return i.length > 1 || r.length > 1 ? 1 === i.length ? -1 : 1 === r.length ? 1 : 0 : n.compareColorsCallback(i[0], r[0])
                    }))
                },
                compareColorsCallback: function(e, t) {
                    e = (e || "").toUpperCase(), t = (t || "").toUpperCase();
                    var i = n.colorOrder.indexOf(e),
                        r = n.colorOrder.indexOf(t);
                    return (i = i < 0 ? 1e3 : i) - (r = r < 0 ? 1e3 : r)
                },
                fetchColorsFromVariants: function(e) {
                    var t = {},
                        i = [];
                    for (var n in e) {
                        var r = e[n];
                        if (r.color && !(i.indexOf(r.color) >= 0)) {
                            var o = [];
                            r.colorCode && o.push(r.colorCode), r.colorCode2 && o.push(r.colorCode2), t[r.color] = o
                        }
                    }
                    return t
                },
                convertColorObjToArray: function(e) {
                    var t = [];
                    for (var i in e) t.push({
                        name: i,
                        codes: e[i]
                    });
                    return t
                },
                swap: function(e) {
                    var t = {};
                    for (var i in e) t[e[i]] = i;
                    return t
                },
                hexToRgb: function(e) {
                    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, n) {
                        return t + t + i + i + n + n
                    }));
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    } : null
                }
            };
            n.Color = Class({
                r: 0,
                g: 0,
                b: 0,
                __construct: function(e, t, i) {
                    this.r = e, this.g = t, this.b = i
                },
                toArray: function() {
                    return [this.r, this.g, this.b]
                },
                toHex: function() {
                    return "#" + (16777216 + (this.b | this.g << 8 | this.r << 16)).toString(16).slice(1)
                },
                isContainedBy: function(e) {
                    return !!e && e.some(function(e) {
                        return e instanceof n.Color && (e.r === this.r && e.g === this.g && e.b === this.b)
                    }.bind(this))
                },
                distanceTo: function(e) {
                    var t = Math.sqrt(195075);
                    return Math.sqrt(Math.pow(this.r - e.r, 2) + Math.pow(this.g - e.g, 2) + Math.pow(this.b - e.b, 2)) / t
                }
            }), n.Color.fromArray = function(e) {
                return new n.Color(e[0], e[1], e[2])
            }, n.Color.fromHex = function(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, n) {
                    return t + t + i + i + n + n
                }));
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? new n.Color(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)) : null
            }, window && ((globalThis || {}).PFUtilsColors = n)
        },
        41286: (e, t, i) => {
            "use strict";
            i.d(t, {
                H: () => n
            });
            const n = Class({
                key: "",
                _timeouts: {},
                setKey: function(e) {
                    this.key = e
                },
                clearTimeout: function() {
                    this._timeouts[this.key] && clearTimeout(this._timeouts[this.key])
                },
                schedule: function(e, t) {
                    this._timeouts[this.key] = setTimeout(e, t || 200)
                }
            });
            n.instance = null, n.getInstance = function() {
                return n.instance || (n.instance = new n), n.instance
            }, n.delay = function(e, t, i) {
                var r = n.getInstance();
                r.setKey(e), r.clearTimeout(), r.schedule(t, i)
            }, (globalThis || {}).PFUtilsDelayer = n
        },
        44353: (e, t, i) => {
            "use strict";
            i.d(t, {
                y: () => n
            });
            const n = {
                SIZE_ORDER: ["NB", "0-3M", "3-6m", "3-6M", "6M", "6-12M", "6-12m", "12M", "12-18M", "12-18m", "18M", "18-24m", "24M", "2T (1-2yr)", "2T", "2", "2yrs", "Toddlers", "3", "3T", "4T (2-3yr)", "2-3y", "3-4", "4T", "4yrs", "4Y", "4", "5", "5 (3-4yr)", "4-5y", "5.5", "5/6", "5T", "5-6", "6 (5-6yr)", "6yrs", "6Y", "6", "6X", "6X (6-7yr)", "6.5", "7", "7.5", "7-8", "Kids", "8yrs", "8Y", "8", "8.5", "9", "9.5", "9-11", "10yrs", "10Y", "10", "10.5", "11", "11.5", "12yrs", "12Y", "12", "12.5", "13", "12-14", "2XS", "XXS", "XS", "XS/S", "XS/SM", "S", "S/M", "P", "M", "M/L", "L/XL", "L", "G", "XL", "XL/XXL", "GG", "2XL", "XGG", "XXL", "3XL", "4XL", "5XL", "6XL", "iPhone 7/8", "iPhone 7/8/SE", "iPhone 7 Plus/8 Plus", "iPhone X/XS", "iPhone XS Max", "iPhone XR", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max", "iPhone SE", "iPhone 12 mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13 mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max", "50Ã—100 cm", "70Ã—140 cm", "100Ã—210 cm", "3â€³Ã—3â€³", "4â€³Ã—4â€³", "4â€³Ã—6â€³", "5â€³Ã—7â€³", "5.5â€³Ã—5.5â€³", "5.5â€³Ã—8.5â€³", "5.83â€³Ã—8.27â€³", "7â€³", "8â€³", "13â€³", "15â€³", "16â€³", "18â€³", "8â€³Ã—10â€³", "10â€³Ã—10â€³", "12â€³Ã—12â€³", "11â€³Ã—14â€³", "12â€³Ã—16â€³", "12â€³Ã—18â€³", "14â€³Ã—14â€³", "15â€³Ã—15â€³", "15â€³Ã—17â€³", "16â€³Ã—16â€³", "16â€³Ã—20â€³", "18â€³Ã—16â€³", "18â€³Ã—18â€³", "18â€³Ã—24â€³", "20â€³Ã—12â€³", "20â€³Ã—30â€³", "22â€³Ã—22â€³", "36â€³Ã—18â€³", "24â€³Ã—36â€³", "30â€³Ã—60â€³", "44â€³Ã—44â€³", "50â€³Ã—60â€³", "60â€³Ã—80â€³", "Bell", "Heart", "Oval", "Star", "Stocking", "Tree"],
                sizeSortingCallback: function(e, t) {
                    var i = function(e) {
                            e && e.toString().indexOf(" (") && (e = e.toString().split(" (")[0]);
                            var t = n.SIZE_ORDER.indexOf(e);
                            if (-1 === t && e) {
                                var i = e.match(/([0-9\.]+)(x|Ã—)([0-9\.]+)\s*(cm|in)?/);
                                if (i) return parseFloat(i[1]) * parseFloat(i[3]) / ("cm" === i[4] ? Math.pow(2.54, 2) : 1)
                            }
                            return t
                        },
                        r = i(e),
                        o = i(t);
                    return r > -1 && o > -1 ? r - o : e - t
                },
                variantSortingBySizeCallback: function(e, t) {
                    return n.sizeSortingCallback(e.size, t.size)
                },
                getProductImageByType: function(e, t) {
                    const i = e.filter((e => e.categoryId === t));
                    if (i.length) return i.pop();
                    const n = e.filter((e => 0 === e.categoryId));
                    return n.length ? n.pop() : null
                }
            };
            (globalThis || {}).PFUtilsProduct = n
        },
        30675: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => r,
                h: () => o
            });
            var n = i(70538);

            function r(e, t) {
                let {
                    key: i,
                    value: r,
                    shouldUnset: o,
                    stateFlagProp: a = "flags"
                } = t;
                i && e && (e[a] || n.default.set(e, a, {}), o ? n.default.delete(e[a], i) : n.default.set(e[a], i, r))
            }

            function o(e, t) {
                var i;
                let {
                    key: n,
                    stateFlagProp: r = "flags"
                } = t;
                return null == e || null === (i = e[r]) || void 0 === i ? void 0 : i[n]
            }
        },
        613: (e, t, i) => {
            "use strict";
            i.d(t, {
                A9: () => O,
                Ac: () => d,
                Aq: () => A,
                BN: () => R,
                Bn: () => T,
                Cl: () => W,
                H9: () => v,
                IZ: () => I,
                J3: () => M,
                JS: () => N,
                Ju: () => Q,
                KX: () => F,
                Ki: () => h,
                O0: () => L,
                PN: () => k,
                R1: () => g,
                SF: () => P,
                TO: () => f,
                Tg: () => q,
                UI: () => V,
                be: () => c,
                cs: () => E,
                eu: () => x,
                hv: () => D,
                iG: () => u,
                iL: () => w,
                j_: () => b,
                l5: () => C,
                qg: () => S,
                rV: () => H,
                rj: () => m,
                uo: () => _,
                wh: () => p,
                xI: () => y
            });
            var n = i(79421),
                r = i(96486),
                o = i.n(r),
                a = i(52658),
                s = i(65613),
                l = i(25581);
            const u = "designer_tools_section",
                c = "order_csv_access",
                d = "large_embroidery_file_upload",
                p = "embroidery_prediction_test_attributes",
                g = "pro_trends_graph",
                m = "only_label_allowed",
                h = "tax_page_redesign",
                f = "scheduled_prices_banner",
                y = "approval_sheet_files_replace_via_order_flow",
                v = "adobe_cloud_libraries",
                _ = "licensed_assets_patterns_tab",
                I = "saas_temporary_offers",
                T = "keyword_scout",
                E = "saas_ubp",
                P = "use_new_pickers",
                S = "custom_inside_labels",
                b = "new_mockup_step",
                O = "order_fast_checkout",
                C = "pc_sidebar_special_offer_item",
                L = "fe_mockup_previews",
                A = "design_maker_new_layout_footer",
                k = "designer_new_layout",
                w = "designer_multiple_products",
                R = "pc_engraved_product_banner",
                D = "peak_surcharges_banner",
                N = "disable_api_key",
                M = "pc_new_catalog_in_push_flow",
                F = "pc_new_catalog_in_order_flow",
                V = "upcoming_discontinued_products",
                x = "saas_bfcm_2022";
            let G = !1;
            const B = {},
                U = {},
                H = Object.freeze({
                    ENVIRONMENT: "environment",
                    STORE: "store",
                    CUSTOMER: "customer"
                });

            function z(e) {
                return o().reduce(e, ((e, t) => (e[t.cacheKey] = t, e)), {})
            }

            function j(e) {
                const t = {
                    results: {},
                    missingRequests: []
                };
                if (!o().isArray(e)) return t;
                G || function() {
                    const e = globalThis.PreloadedFeatureFlagResults || {},
                        t = o().mapValues(e, (e => new a.t(e)));
                    for (const e of Object.values(t)) B[e.cacheKey] = e;
                    G = !0
                }();
                const i = function(e) {
                        return z(e.map((e => new a.g(e || {}))).filter((e => e.isValid())))
                    }(e),
                    n = o().keys(i);
                if (!n.length) return t;
                const r = o().pick(B, n),
                    s = o().keys(r);
                if (t.results = o().cloneDeep(r), n.length === s.length) return t;
                const l = o().difference(n, s);
                return t.missingRequests = Object.values(o().pick(i, l)), t
            }
            async function Y(e) {
                const t = e.map((e => e.cacheKey)),
                    i = o().pick(U, t),
                    r = e.filter((e => !o().has(i, e.cacheKey))),
                    u = o().uniq(Object.values(i));
                if (r.length > 0) {
                    const e = async function(e) {
                        let t;
                        try {
                            t = await (0, n.Z)("feature-flag/check-flags", {
                                flagRequests: e
                            })
                        } catch (e) {
                            (0, s.logError)(new l.u("Feature flag RPC call failed", {
                                cause: e
                            })), t = []
                        }
                        const i = z(e),
                            r = z(t.map((e => new a.t(e))).filter((e => e.isValid()))),
                            u = o().mapValues(i, (e => {
                                if (o().has(r, e.cacheKey)) return r[e.cacheKey]; {
                                    const t = new a.t(e || {});
                                    return t.canAccessFeature = !1, t
                                }
                            }));
                        return o().forIn(u, ((e, t) => {
                            B[t] = e
                        })), u
                    }(r);
                    for (const t of r) U[t.cacheKey] = e;
                    u.push(e)
                }
                const c = await Promise.all(u),
                    d = {};
                for (const e of c)
                    for (const t of Object.values(e)) d[t.cacheKey] = t, delete U[t.cacheKey];
                return d
            }
            async function q(e) {
                const t = await Q([new a.g({
                        targetType: H.ENVIRONMENT,
                        flagName: e
                    })]),
                    i = o().first(o().values(t));
                return !(null == i || !i.canAccessFeature)
            }

            function W(e) {
                const t = K([new a.g({
                        targetType: H.ENVIRONMENT,
                        flagName: e
                    })]),
                    i = o().first(o().values(t));
                return !(null == i || !i.canAccessFeature)
            }

            function K(e) {
                const {
                    missingRequests: t,
                    results: i
                } = j(e);
                if (t.length > 0) {
                    (0, s.logError)(new l.u("Attempted to synchronously retrieve feature flag values not found in cache", {
                        info: {
                            missingFlags: t.map((e => e.flagName))
                        }
                    }));
                    for (const e of t) i[e.cacheKey] = new a.t(e)
                }
                return i
            }
            async function Q(e) {
                const {
                    missingRequests: t,
                    results: i
                } = j(e);
                if (t.length < 1) return i;
                const n = await Y(t);
                return o().cloneDeep(o().assign(i, n))
            }
        },
        52658: (e, t, i) => {
            "use strict";
            i.d(t, {
                g: () => g,
                t: () => m
            });
            var n = i(96486),
                r = i.n(n),
                o = i(613);

            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }

            function s(e) {
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
                    var i, n = u(e);
                    if (t) {
                        var r = u(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return l(this, i)
                }
            }

            function l(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function u(e) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, u(e)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function p(e, t, i) {
                return t && d(e.prototype, t), i && d(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            let g = function() {
                    function e() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        c(this, e), this.flagName = !r().isEmpty(t.flagName) && r().isString(t.flagName) ? t.flagName.trim() : null, this.targetType = !r().isEmpty(t.targetType) && r().isString(t.targetType) ? t.targetType.trim() : null, this.targetId = t.targetId && !r().isNaN(r().toNumber(t.targetId)) ? r().toNumber(t.targetId) : null
                    }
                    return p(e, [{
                        key: "cacheKey",
                        get: function() {
                            const {
                                flagName: e,
                                targetType: t,
                                targetId: i
                            } = this;
                            return `feature-flag--${e||""}_${t||""}_${i||""}`
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            return !r().isEmpty(this.flagName) && !r().isEmpty(this.targetType) && Object.values(o.rV).includes(this.targetType)
                        }
                    }]), e
                }(),
                m = function(e) {
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
                        }), t && a(e, t)
                    }(i, e);
                    var t = s(i);

                    function i() {
                        var e;
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return c(this, i), (e = t.call(this, n)).canAccessFeature = !!r().has(n, "canAccessFeature") && !!n.canAccessFeature, e
                    }
                    return p(i)
                }(g)
        },
        39438: (e, t, i) => {
            "use strict";
            i.d(t, {
                AN: () => s,
                Tu: () => c,
                V_: () => n,
                W2: () => o,
                ZM: () => r,
                _M: () => a
            });
            const n = "EMBROIDERY",
                r = "EMBROIDERY-PATCH",
                o = "T-SHIRT",
                a = "SUBLIMATION",
                s = "CUT-SEW",
                l = "template",
                u = "advanced_template",
                c = [l, u]
        },
        95370: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => r,
                c: () => n
            });
            const n = {
                    SANS_SERIF: {
                        id: 1,
                        text: dlang("generator", "Sans Serif")
                    },
                    SERIF: {
                        id: 2,
                        text: dlang("generator", "Serif")
                    },
                    SCRIPT: {
                        id: 3,
                        text: dlang("generator", "Script")
                    },
                    DISPLAY: {
                        id: 4,
                        text: dlang("generator", "Display")
                    },
                    MONOSPACE: {
                        id: 5,
                        text: dlang("generator", "Monospace")
                    }
                },
                r = {
                    ARABIC: {
                        id: 1,
                        text: dlang("generator", "Arabic")
                    },
                    CYRILLIC: {
                        id: 2,
                        text: dlang("generator", "Cyrillic")
                    },
                    CYRILLIC_EXTENDED: {
                        id: 3,
                        text: dlang("generator", "Cyrillic extended")
                    },
                    GREEK: {
                        id: 4,
                        text: dlang("generator", "Greek")
                    },
                    GREEK_EXTENDED: {
                        id: 5,
                        text: dlang("generator", "Greek extended")
                    },
                    JAPANESE: {
                        id: 6,
                        text: dlang("generator", "Japanese")
                    },
                    LATIN: {
                        id: 7,
                        text: dlang("generator", "Latin")
                    },
                    LATIN_EXTENDED: {
                        id: 8,
                        text: dlang("generator", "Latin extended")
                    }
                }
        },
        25581: (e, t, i) => {
            "use strict";

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n)
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }

            function a(e) {
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
                    var i, n = l(e);
                    if (t) {
                        var r = l(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return s(this, i)
                }
            }

            function s(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function l(e) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, l(e)
            }

            function u(e, t, i) {
                return (t = c(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function c(e) {
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
            i.d(t, {
                u: () => d
            });
            let d = function(e) {
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
                    }), t && o(e, t)
                }(FeatureFlagError, e);
                var t, i, s, l = a(FeatureFlagError);

                function FeatureFlagError() {
                    return r(this, FeatureFlagError), l.apply(this, arguments)
                }
                return t = FeatureFlagError, i && n(t.prototype, i), s && n(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(i(65427).yI);
            u(d, "code", "FEATURE_FLAG_ERROR"), u(d, "defaultMessage", "Unexpected Feature Flag issue!")
        },
        75232: (e, t, i) => {
            "use strict";

            function n(e, t) {
                return !!Object.prototype.hasOwnProperty.call(e, t)
            }

            function r(e) {
                return e ? JSON.parse(JSON.stringify(e)) : e
            }
            i.d(t, {
                IS: () => r,
                jz: () => a,
                nr: () => n
            });
            let o = 1;
            const a = () => o++
        },
        5917: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => a,
                O: () => o
            });
            var n = i(79442),
                r = i(44425);

            function o() {
                return (0, n.getVuex)().getters[r.ak(r.g7)]
            }

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.sw), e)
            }
        },
        44425: (e, t, i) => {
            "use strict";
            i.d(t, {
                ak: () => o,
                g7: () => r,
                sw: () => n
            });
            const n = "m_setFontReplacementBannerFonts",
                r = "g_fontReplacementBannerFonts";

            function o(e) {
                return "designer/bannersModule/" + e
            }
        },
        58030: (e, t, i) => {
            "use strict";
            i.d(t, {
                $j: () => l,
                Gi: () => p,
                Oh: () => I,
                PA: () => h,
                R3: () => g,
                VP: () => u,
                Xf: () => _,
                YA: () => c,
                Yx: () => v,
                _C: () => m,
                cF: () => a,
                dw: () => y,
                gH: () => f,
                tG: () => d,
                v3: () => o,
                vF: () => s
            });
            var n = i(79442),
                r = i(49441);

            function o(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.PLACEMENT_GRID_BUTTON,
                    isVisible: e
                })
            }

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.GRID_BUTTON,
                    isVisible: e
                })
            }

            function s(e) {
                (0, n.getVuex)().commit(r.ak(r.mx), {
                    button: r.Qf.GRID_BUTTON,
                    isActive: e
                })
            }

            function l(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.ZOOM_BUTTON,
                    isVisible: e
                })
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.mx), {
                    button: r.Qf.ZOOM_BUTTON,
                    isActive: e
                })
            }

            function c(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.PLACEMENT_DISCOUNT_BUTTON,
                    isVisible: e
                })
            }

            function d(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.LIFELIKE_BUTTON,
                    isVisible: e
                })
            }

            function p(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.UNRELATED_TEMPLATES_WARNING_BUTTON,
                    isVisible: e
                })
            }

            function g(e) {
                (0, n.getVuex)().commit(r.ak(r.On), {
                    button: r.Qf.LAYER_MERGING_WARNING_BUTTON,
                    isVisible: e
                })
            }

            function m(e) {
                (0, n.getVuex)().commit(r.ak(r.mx), {
                    button: r.Qf.PLACEMENT_DISCOUNT_BUTTON,
                    isActive: e
                })
            }

            function h() {
                (0, n.getVuex)().commit(r.ak(r.oA))
            }

            function f() {
                return (0, n.getVuex)().getters[r.ak(r.eU)](r.Qf.GRID_BUTTON)
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.F4)](r.Qf.GRID_BUTTON)
            }

            function v() {
                return (0, n.getVuex)().getters[r.ak(r.eU)](r.Qf.ZOOM_BUTTON)
            }

            function _() {
                return (0, n.getVuex)().getters[r.ak(r.F4)](r.Qf.ZOOM_BUTTON)
            }

            function I() {
                return r.NP((0, n.getVuex)().state, "isAnyDesignerAraButtonsVisible")
            }
        },
        49441: (e, t, i) => {
            "use strict";
            i.d(t, {
                F4: () => u,
                NP: () => d,
                On: () => o,
                Qf: () => n,
                ak: () => c,
                eU: () => l,
                ii: () => r,
                mx: () => a,
                oA: () => s
            });
            const n = {
                    PLACEMENT_GRID_BUTTON: "placementGridButton",
                    GRID_BUTTON: "gridButton",
                    ZOOM_BUTTON: "zoomButton",
                    PLACEMENT_DISCOUNT_BUTTON: "showPlacementDiscountButton",
                    LIFELIKE_BUTTON: "lifelikeButton",
                    UNRELATED_TEMPLATES_WARNING_BUTTON: "unrelatedTemplatesWarningButton",
                    LAYER_MERGING_WARNING_BUTTON: "stickerLayerMergingWarningButton"
                },
                r = "designer/designerAreaActionButtonsModule/",
                o = "m_setButtonIsVisible",
                a = "m_setButtonIsActive",
                s = "m_resetState",
                l = "g_getButtonIsVisible",
                u = "g_getButtonIsActive";

            function c(e) {
                return r + e
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = e;
                return r.slice(0, -1).split("/").forEach((e => {
                    e in i && (i = i[e])
                })), t && (i = i[t]), i
            }
        },
        13394: (e, t, i) => {
            "use strict";
            i.d(t, {
                Ab: () => w,
                D8: () => L,
                Dz: () => R,
                G8: () => A,
                kD: () => b,
                pN: () => hasEmptyLabelTemplateDesignError,
                r3: () => N,
                vm: () => k,
                xw: () => D
            });
            var n = i(71090),
                r = i(19046),
                o = i(17202),
                a = i(11762),
                s = i(51122),
                l = i(30663),
                u = i(62186),
                c = i(22277),
                d = i(64283),
                p = i(11876),
                g = (i(9651), i(73287)),
                m = i(91777),
                h = i(32874),
                f = i(749),
                y = i(58232),
                v = i(90583),
                _ = i(5781),
                I = i(29061),
                T = i(67342),
                E = i(87990),
                P = i(27707),
                S = i(97993);

            function b(e, t, i, n) {
                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                const o = e.getTemplates(),
                    {
                        silentErrors: a,
                        threadColorsError: s,
                        isOnlyLabelOrHangTag: l
                    } = O(o, e.designData, i, n);
                return {
                    threadColorsError: s,
                    silentErrors: a,
                    visibleErrors: C(o, e.generatorVariants, t, e, r),
                    isOnlyLabelOrHangTag: l
                }
            }

            function O(e, t, i, n) {
                var r, o;
                const a = function(e, t, i) {
                        let n = e.getPlacementIdsHavingFiles().concat(t.getPlacementIdsWithDesign());
                        n = n.filter(((e, t, i) => i.indexOf(e) === t));
                        let r = [l.VL, l.Aw];
                        i && (r = [...r, l.PU, l.uW, l.Y2]);
                        for (const e in n)
                            if (n.hasOwnProperty(e) && -1 === r.indexOf(n[e])) return !1;
                        return !0
                    }(e, t, !((null === (r = (0, c.WU)()) || void 0 === r ? void 0 : r.canHaveOnlyLabelPlacement) && !(null !== (o = t.store) && void 0 !== o && o.isEtsy()))),
                    s = (0, d.F8)(),
                    g = [];
                let m = !1;
                if (!(0, d.Zm)()) {
                    const e = s.getProductOptionsPicker();
                    e.hasValidOptions() ? e.updateErrorStatus() : e.hasOption(p.Pr) ? m = !0 : g.push(dlang("generator", "Please check if all required options are selected."))
                }
                if (a && g.push(lang("Please add a design!")), i && !s.isChangePrintfileMode)
                    for (const e in n) {
                        const i = n[e],
                            r = (0, u.x1)(t.templateSelectedSizes);
                        for (const e in r) {
                            const t = r[e];
                            i.variantId === t.variantId && g.push(lang("Can't push already synced variant!"))
                        }
                    }
                if ((0, S.xI)()) {
                    var h, f;
                    const e = s.getProductOptionsPicker(),
                        t = null === (h = e.getValues()) || void 0 === h ? void 0 : h.stitch_color,
                        i = null !== (null === (f = e.getValues()) || void 0 === f ? void 0 : f.inside_pocket);
                    !t && p.jr in e.getValues() && g.push(lang("Select a stitch color")), !i && p.aD in e.getValues() && g.push(lang("Select inside pocket option"))
                }
                return {
                    silentErrors: g,
                    threadColorsError: m,
                    isOnlyLabelOrHangTag: a
                }
            }

            function C(e, t, i, n, r) {
                const o = u.a1(),
                    a = u.Aw(),
                    s = !L(e, t),
                    l = function() {
                        const e = (0, d.F8)(),
                            t = e.getColorPicker ? e.getColorPicker() : null;
                        if (!t || !e.store.needsAllVariantCombinations()) return !1;
                        const i = t.getSelectedColorNames(),
                            n = h.sN(i);
                        return Object.keys(n).length > 0
                    }(),
                    c = function hasCustomizableTextLayerError(e, t) {
                        return null == t ? void 0 : t.map((t => (0, P.F)(e, t))).some((e => e.hasCustomizableLayersWithMultiLineText()))
                    }(e, t),
                    p = function hasCustomizableTextLayerArcError(e, t) {
                        return null == t ? void 0 : t.map((t => (0, P.F)(e, t))).some((e => e.hasCustomizableLayersWithArcText()))
                    }(e, t),
                    f = function hasCustomizableTextLayerGraphicError(e, t) {
                        return null == t ? void 0 : t.map((t => (0, P.F)(e, t))).some((e => e.hasCustomizableLayersWithColorGraphicText()))
                    }(e, t),
                    v = function hasCustomizableCropImageError(e, t) {
                        return null == t ? void 0 : t.map((t => (0, P.F)(e, t))).some((e => e.hasCustomizableLayersWithCropImage()))
                    }(e, t),
                    _ = A(e),
                    I = hasEmptyLabelTemplateDesignError(e, t),
                    T = [],
                    S = (0, d.F8)(),
                    b = S.getSizePicker ? S.getSizePicker() : null,
                    O = (function(e, t) {
                        null == t || t.map((t => (0, P.F)(e, t))).some((e => function(e) {
                            if (!y._B.includes(null == e ? void 0 : e.technique)) return !1;
                            return null == e ? void 0 : e.layers.some((e => e.isPartiallyOutOfBounds()))
                        }(e)))
                    }(e, t), !r || n.transparencyValidationService.isTransparencyValid());
                if (null == b || b.updateErrorStatus(), a) {
                    let e = dlang("dashboard", "The amount of selected variants ({0}) exceeds the available quantity ({1}) for your eBay store.");
                    e = e.format(a.used, a.limit), T.push(e)
                }
                if (o && T.push(dlang("generator", "Storeâ€™s variant limit per product exceeded!")), s && T.push(E.R.PRINTFILE_TOO_SMALL), _ && T.push(E.R.PRINTFILE_LOW_CONTRAST), I && T.push(E.R.INSIDE_LABEL_DESIGN_HAS_NO_LAYERS), O || T.push(E.R.TRANSPARENCY_INVALID), (0, d.Zm)() || (k(y.hG.FILE, e, t) || k(y.hG.LICENSED_ASSET, e, t)) && T.push(w()), l) {
                    const e = S.store;
                    T.push(dlang("generator", "Discontinued colors/sizes canâ€™t be pushed to your store. Please unselect them."));
                    const t = e.isEtsy() ? langUrl("/faq/integrations/etsy/288-can-t-publish-products-on-etsy") : langUrl("/faq/integrations/webflow/482-are-there-any-product-variant-selection-limitations-for-my-webflow-store");
                    e.isEtsy() && T.push({
                        className: "pf-ml-4",
                        target: "_blank",
                        href: t,
                        ariaLabel: clang("button that leads to FAQ", "Help"),
                        text: clang("button that leads to FAQ", "Help")
                    })
                }
                c || p ? T.push(dlang("generator", "Personalization tool doesn't support text arcs or multiple lines")) : f ? T.push(dlang("generator", "Personalization tool doesn't support graphic colors")) : v && T.push(dlang("generator", "Personalization tool doesn't support cropped images"));
                const C = function getTechniqueDependentError(e, t) {
                    const i = e.hasEmbroideryThreadColorsError(),
                        n = e.hasEmbroideryThreadColorsForPlacementsError(),
                        r = t.isProductPushMode && !t.isChangePrintfileMode,
                        o = r && t.getSelectedRegionVariants ? t.getSelectedRegionVariants() : [];
                    let a;
                    g.$P(E.R.EMBROIDERY_TEXT_TOO_SMALL) ? a = E.R.EMBROIDERY_TEXT_TOO_SMALL : g.$P(E.R.EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT) ? a = E.R.EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT : g.$P(E.R.EMBROIDERY_LAYERS_OVERLAPPING) ? a = E.R.EMBROIDERY_LAYERS_OVERLAPPING : g.$P(E.R.EMBROIDERY_OUT_OF_BOUNDS) ? a = E.R.EMBROIDERY_OUT_OF_BOUNDS : g.BZ(E.R.LAYER_TEXT_TOO_SMALL) ? a = E.R.LAYER_TEXT_TOO_SMALL : g.$P(E.R.EMBROIDERY_CLIPART_OUT_OF_BOUNDS) ? a = E.R.EMBROIDERY_CLIPART_OUT_OF_BOUNDS : g.$P(E.R.EMBROIDERY_CLIPART_TOO_SMALL) ? a = E.R.EMBROIDERY_CLIPART_TOO_SMALL : g.BZ(E.R.LAYER_CLIPART_TOO_SMALL) ? a = E.R.LAYER_CLIPART_TOO_SMALL : g.BZ(E.R.ENGRAVING_LAYERS_OVERLAPPING) ? a = E.R.ENGRAVING_LAYERS_OVERLAPPING : g.BZ(E.R.LAYER_OUT_OF_BOUNDS) ? a = E.R.LAYER_OUT_OF_BOUNDS : i || n ? a = E.R.EMBROIDERY_THREAD_COLOR_LIMIT.replace("{limit}", m.w.EMBROIDERY_MAX_SELECTED_THREAD_COLORS) : r && t.getRegionPicker() && !o.length && (a = E.R.DSR_UNAVAILABLE_PRODUCT);
                    return a
                }(i, S);
                C && T.push(C);
                const D = R(e, t);
                return D && T.push(E.R.TEXT_TOO_LONG.replace("{limit}", D)), T
            }

            function L(e, t) {
                var i;
                if (!e.getRequiredDpi() || null !== (i = (0, c.WU)()) && void 0 !== i && i.isEmbroidery() || g.lW()) return !0;
                const n = e.getQuality();
                for (const i in t) {
                    const r = (0, P.F)(e, t[i]);
                    if (r.layers.length > 0 && r.getLowestDPI(n) < e.getRequiredDpi()) return !1
                }
                return !0
            }

            function A(e) {
                var t;
                const i = Object.values(v.g7),
                    n = e.getTemplates();
                if (null === (t = Object.values(n[l.PU] || n[l.uW] || {})) || void 0 === t ? void 0 : t.some((e => i.includes(e.technique)))) {
                    const e = (0, _.zY)() || {};
                    return Object.values(e).some((e => Object.keys(e.colorWarnings).length))
                }
                return !1
            }

            function k(e, t, i) {
                const n = e === y.hG.LICENSED_ASSET ? f.Qi : f.SJ;
                for (const o in i) {
                    var r;
                    const a = (0, P.F)(t, i[o]);
                    let s = 0;
                    if (0 !== (null == a || null === (r = a.layers) || void 0 === r ? void 0 : r.length)) {
                        for (const t in a.layers) a.layers[t].getType() === e && s++;
                        if (s > n()) return !0
                    }
                }
                return !1
            }

            function w() {
                return dlang("dashboard", "Max. limit for uploaded image layers is {file_limit} and for Premium Image layers is {licensed_asset_limit}. Please delete a layer if you want to add another one.").replace("{file_limit}", String((0, f.SJ)())).replace("{licensed_asset_limit}", String((0, f.Qi)()))
            }

            function R(e, t) {
                if (!t || !t.length) return null;
                let i = null;
                for (let n = 0, r = t.length; n < r; n++) {
                    const r = (0, P.F)(e, t[n]);
                    if (r && (i = r.exceededTextLayerCharacterLimit() || null, i)) break
                }
                return i
            }

            function D(e, t, i, a) {
                var l;
                const u = new n.j,
                    d = {};
                if (d[E.R.EMBROIDERY_LAYERS_OVERLAPPING] = !1, d[E.R.EMBROIDERY_OUT_OF_BOUNDS] = !1, d[E.R.EMBROIDERY_TEXT_TOO_SMALL] = !1, d[E.R.EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT] = !1, d[E.R.EMBROIDERY_CLIPART_OUT_OF_BOUNDS] = !1, d[E.R.EMBROIDERY_CLIPART_TOO_SMALL] = !1, a !== s.V_) return !1;
                const p = null === (l = (0, c.WU)()) || void 0 === l ? void 0 : l.canEstimateEmbroideryCosts;
                for (const e in i) {
                    const n = (0, P.F)(t, i[e]);
                    if (n.technique === s.gj) {
                        u.setActivePlacement(n.placementId), n.areLayersOverlapping({
                            layerTypeInstances: [r.B, o.d]
                        }) && (d[E.R.EMBROIDERY_LAYERS_OVERLAPPING] = !0);
                        for (const e in n.layers) {
                            const t = n.layers[e];
                            t.isClipartLayerPartiallyOutOfBounds() && (d[E.R.EMBROIDERY_CLIPART_OUT_OF_BOUNDS] = !0), t.isTextLayerPartiallyOutOfBounds() && (d[E.R.EMBROIDERY_OUT_OF_BOUNDS] = !0), u.setActiveLayer(t).isTextSizeValid() || (d[E.R.EMBROIDERY_TEXT_TOO_SMALL] = !0), u.setActiveLayer(t).isClipartSizeValid() || (d[E.R.EMBROIDERY_CLIPART_TOO_SMALL] = !0), u.setActiveLayer(t).isTextHeightOverUpperLimit(p) && (d[E.R.EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT] = !0)
                        }
                    }
                }
                return !!d.hasOwnProperty(e) && d[e]
            }

            function N(e, t, i, r) {
                if (void 0 === y.Pl[r] || -1 === y.Pl[r].indexOf(e)) return !1;
                const o = new n.j,
                    s = {};
                for (const e in i) {
                    const n = (0, P.F)(t, i[e]);
                    (0, a.cx)(n) && (s[E.R.ENGRAVING_LAYERS_OVERLAPPING] = !0);
                    for (const e in n.layers) {
                        const t = n.layers[e];
                        t.isPartiallyOutOfBounds() && (s[E.R.LAYER_OUT_OF_BOUNDS] = !0), o.setActiveLayer(t).isTextSizeValid() || (s[E.R.LAYER_TEXT_TOO_SMALL] = !0), o.setActiveLayer(t).isClipartSizeValid() || (s[E.R.LAYER_CLIPART_TOO_SMALL] = !0)
                    }
                }
                return !!s.hasOwnProperty(e) && s[e]
            }

            function hasEmptyLabelTemplateDesignError(e, t) {
                var i;
                return (null === (i = (0, I.UA)()) || void 0 === i ? void 0 : i.id) !== T.V.NO_BRANDING && (null == t ? void 0 : t.some((t => {
                    const i = (0, P.F)(e, t);
                    var n;
                    if (l.c7.includes(null == i ? void 0 : i.placementId)) return !(null !== (n = i.layers) && void 0 !== n && n.filter((e => e.groupType !== y.hG.GROUP_INSIDE_LABEL_TEMPLATE)).length)
                })))
            }
        },
        48881: (e, t, i) => {
            "use strict";
            i.d(t, {
                NP: () => d,
                Nb: () => s,
                X: () => n,
                ak: () => c,
                cc: () => o,
                th: () => r,
                u0: () => l,
                vI: () => a,
                wy: () => u
            });
            const n = "designer/validatorModule/",
                r = "m_setIsContinuePossible",
                o = "m_setThreadColorsError",
                a = "m_setSilentErrors",
                s = "m_setVisibleErrors",
                l = "m_setDesignerLiveMockupErrorText",
                u = "a_onSetIsContinuePossible";

            function c(e) {
                return n + e
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = e;
                return n.slice(0, -1).split("/").forEach((e => {
                    e in i && (i = i[e])
                })), t && (i = i[t]), i
            }
        },
        8313: (e, t, i) => {
            "use strict";
            i.d(t, {
                Rj: () => s,
                ak: () => d,
                fD: () => o,
                md: () => c,
                nC: () => a,
                tb: () => u,
                ww: () => r,
                zp: () => l
            });
            const n = `${i(21782).E0}/backgrounds`,
                r = "m_putBackgroundItemsIntoRepo",
                o = "m_setHasLoadedAllBackgrounds",
                a = "g_hasLoadedAllBackgrounds",
                s = "g_getBackgroundItems",
                l = "g_activeBackgroundItems",
                u = "a_allActiveBackgroundItems",
                c = "a_loadBackgrounds",
                d = e => `${n}/${e}`
        },
        53938: (e, t, i) => {
            "use strict";
            i.d(t, {
                Js: () => o,
                Pb: () => s,
                XW: () => a
            });
            var n = i(79442),
                r = i(20888);
            const o = e => (0, n.getVuex)().getters[r.ak(r.V7)]([e])[0],
                a = e => (0, n.getVuex)().getters[r.ak(r.LJ)](e),
                s = e => (0, n.getVuex)().commit(r.ak(r.h5), e)
        },
        23848: (e, t, i) => {
            "use strict";
            i.d(t, {
                Og: () => o,
                Dw: () => a,
                nW: () => s,
                IP: () => f,
                Oq: () => p,
                CA: () => c,
                cs: () => l,
                aP: () => u,
                E7: () => h,
                wb: () => g,
                Kv: () => m
            });
            var n = i(35450);
            const r = {
                    SHAPES: {
                        id: 1,
                        text: dlang("generator", "Shapes & elements")
                    },
                    LINES: {
                        id: 2,
                        text: dlang("generator", "Textures & patterns")
                    },
                    DRAWINGS: {
                        id: 3,
                        text: dlang("generator", "Drawings")
                    }
                },
                o = 1.5,
                a = 1.75,
                s = 3,
                l = "createdAtDesc",
                u = [{
                    value: l,
                    name: dlang("generator", "Last added")
                }, {
                    value: "popularAsc",
                    name: dlang("generator", "Popular")
                }],
                c = 1,
                d = Object.values(r).map((e => ({
                    value: e.id,
                    name: e.text
                }))),
                p = [new n.e({
                    key: "fills",
                    label: dlang("generator", "Clipart fill"),
                    options: [{
                        value: c,
                        name: dlang("generator", "Customizable")
                    }, {
                        value: 0,
                        name: dlang("generator", "Pre-set")
                    }]
                }), new n.e({
                    key: "types",
                    label: dlang("generator", "Clipart type"),
                    options: d
                })],
                g = "basic-tab",
                m = "pro-tab",
                h = {
                    search: ["en"],
                    trending: ["en"]
                },
                f = "clipart"
        },
        20888: (e, t, i) => {
            "use strict";
            i.d(t, {
                B3: () => v,
                BQ: () => _,
                Cc: () => c,
                E3: () => R,
                EM: () => h,
                Fo: () => y,
                LJ: () => E,
                NK: () => d,
                PI: () => D,
                Qm: () => o,
                Rv: () => b,
                SU: () => S,
                Sm: () => u,
                TF: () => C,
                Tk: () => N,
                V7: () => P,
                XV: () => f,
                Ym: () => I,
                ZA: () => M,
                _K: () => p,
                aR: () => O,
                aV: () => l,
                ak: () => F,
                d9: () => s,
                em: () => L,
                fW: () => n,
                h5: () => r,
                hW: () => T,
                iU: () => g,
                j$: () => k,
                jI: () => w,
                ki: () => a,
                r7: () => m,
                rc: () => A
            });
            const n = `${i(21782).E0}/cliparts`,
                r = "m_loadClipartItemsIntoRepo",
                o = "m_loadClipartGroupIntoRepo",
                a = "m_updateCachedGroupItems",
                s = "m_updateFullGroupLoaded",
                l = "m_updateMainClipartFilter",
                u = "m_updateSearchClipartFilter",
                c = "m_updateCachedSearchItems",
                d = "m_updateTrendingGroups",
                p = "m_updateTechniqueUnavailableIds",
                g = "m_toggleFavoriteClipartsViewVisibility",
                m = "m_setActiveTab",
                h = "m_updateLastRemovedFavoriteClipartId",
                f = "m_updateCategories",
                y = "m_updateStateFavorites",
                v = "m_updateFavoriteInState",
                _ = "m_setActiveClipartItemInteractionId",
                I = "m_setClipartItemInteractionState",
                T = "m_resetClipartItemInteractionState",
                E = "g_getClipartGroup",
                P = "g_getClipartItems",
                S = "g_filteredClipartGroups",
                b = "a_loadCliparts",
                O = "a_loadClipartsPage",
                C = "a_loadClipartSearchPage",
                L = "a_loadClipartGroupItems",
                A = "a_loadTrendingClipartGroupNames",
                k = "a_loadClipartGroupById",
                w = "a_loadClipartCategories",
                R = "a_loadFavoriteCliparts",
                D = "a_loadServerFavorites",
                N = "a_addOrRemoveFavorite",
                M = "a_transitionClipartItemInteractionState",
                F = e => `${n}/${e}`
        },
        29e3: (e, t, i) => {
            "use strict";

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }
            i.d(t, {
                w: () => r
            });
            let r = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.technique = t.technique || null, this.searchKey = t.searchKey || null, this.itemIds = t.itemIds || null, this.page = t.page || null, this.perPage = t.perPage || null, this.sortBy = t.sortBy || null, this.types = t.types || [], this.fills = t.fills || [], this.isPro = t.isPro ? 1 : 0, this.category = t.category || null
                }
                var t, i, r;
                return t = e, (i = [{
                    key: "getRpcData",
                    value: function() {
                        const e = {};
                        for (const [t, i] of Object.entries(this)) null !== i && (e[t] = i);
                        return e
                    }
                }, {
                    key: "getCacheKey",
                    value: function() {
                        let e = "tec_" + this.technique;
                        return e += "_pro_" + (this.isPro ? 1 : 0), this.searchKey && (e += "_search_" + this.searchKey), this.sortBy && (e += "_sort_" + this.sortBy), this.types.length && (e += "_type_" + this.types.join("-")), this.fills.length && (e += "_fill_" + this.fills.join("-")), this.category && (e += "_cat_" + this.category), e
                    }
                }]) && n(t.prototype, i), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        92869: (e, t, i) => {
            "use strict";
            i.d(t, {
                FZ: () => o,
                Mh: () => s,
                NG: () => a,
                Xy: () => u,
                oA: () => l
            });
            var n = i(79442),
                r = i(40012);
            const o = async () => await (0, n.getVuex)().dispatch(r.ak(r.yS)), a = () => (0, n.getVuex)().getters[r.ak(r.Mp)], s = e => (0, n.getVuex)().getters[r.ak(r.Kb)]([e])[0], l = e => (0, n.getVuex)().commit(r.ak(r._v), e), u = e => !!s(e)
        },
        40012: (e, t, i) => {
            "use strict";
            i.d(t, {
                Kb: () => s,
                Mp: () => u,
                PR: () => l,
                Wg: () => o,
                _v: () => r,
                a1: () => d,
                ak: () => p,
                cD: () => a,
                yS: () => c,
                yf: () => n
            });
            const n = `${i(21782).E0}/colorGraphics`,
                r = "m_putColorGraphicItemsIntoRepo",
                o = "m_setHasLoadedAllColorGraphics",
                a = "g_hasLoadedAllColorGraphics",
                s = "g_getColorGraphicItems",
                l = "g_activeTextColorGraphicItems",
                u = "g_activeBgColorGraphicItems",
                c = "a_loadAllActiveColorGraphicItems",
                d = "a_loadColorGraphics",
                p = e => `${n}/${e}`
        },
        9722: (e, t, i) => {
            "use strict";
            i.d(t, {
                HM: () => c,
                oE: () => u,
                vq: () => d
            });
            var n = i(11042),
                r = i.n(n),
                o = i(79442),
                a = i(16964),
                s = i(11072),
                l = i(14753);

            function u(e) {
                (0, o.getVuex)().commit(a.ak(a.WY), e)
            }
            const c = () => r();

            function d() {
                return s.A.isJp() ? c().FONTS[l.vJ.JP] : c().FONTS[l.vJ.MAIN]
            }
        },
        5735: (e, t, i) => {
            "use strict";
            i.d(t, {
                KA: () => h,
                QI: () => d,
                T1: () => p,
                jD: () => f,
                nH: () => g,
                qe: () => l,
                v1: () => c,
                xM: () => m
            });
            var n = i(69182),
                r = i(88725),
                o = i(59805),
                a = i(11042),
                s = i.n(a);
            const l = () => {
                    try {
                        const e = window.localStorage.getItem((0, n.x4)(o.AQ));
                        return e && "[]" !== e ? JSON.parse(e) : null
                    } catch (e) {
                        return null
                    }
                },
                u = e => {
                    try {
                        return JSON.parse(window.localStorage.getItem(e)) || {}
                    } catch (e) {
                        return {}
                    }
                },
                c = e => ((e, t) => {
                    try {
                        return JSON.parse(window.localStorage.getItem(e))[t] || []
                    } catch (e) {
                        return []
                    }
                })((0, n.Ug)(o.AQ), e),
                d = () => u((0, n.t1)(o.AQ)),
                p = () => {
                    try {
                        const e = (0, n.t1)(o.AQ);
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        console.warn("Could not clear current storage!")
                    }
                },
                g = (e, t) => {
                    const i = u((0, n.Ug)(o.AQ));
                    let r = i[t];
                    r || (r = []);
                    const a = r.indexOf(e);
                    a > -1 && r.splice(a, 1), r.unshift(e), i[t] = r.slice(0, o.AQ.MAX_RECENT_SHOW), ((e, t) => {
                        try {
                            window.localStorage.setItem(e, JSON.stringify(t))
                        } catch (t) {
                            console.warn(`Could not save ${e} font in local storage!`)
                        }
                    })((0, n.Ug)(o.AQ), i)
                },
                m = e => s().setInitialFonts((e => {
                    const t = {};
                    for (const i of Object.values(e))(!window._USE_OLD_TEXT_LAYERS || window._USE_OLD_TEXT_LAYERS && i["path-js"]) && (t[i.fontKey || i.key] = new r.y(i));
                    return t
                })(e[o.iQ.FONTS]), e[o.iQ.FONTS_JS_URLS], e[o.iQ.FONTS_TTF_URLS]),
                h = e => e && e[o.iQ.FONTS] && e[o.iQ.FONTS_JS_URLS] && e[o.iQ.FONTS_TTF_URLS],
                f = e => {
                    if (!h(e)) throw new Error("Malformed fonts data!");
                    return {
                        [o.iQ.FONTS]: JSON.parse(e[o.iQ.FONTS]),
                        [o.iQ.FONTS_JS_URLS]: JSON.parse(e[o.iQ.FONTS_JS_URLS]),
                        [o.iQ.FONTS_TTF_URLS]: JSON.parse(e[o.iQ.FONTS_TTF_URLS])
                    }
                }
        },
        16964: (e, t, i) => {
            "use strict";
            i.d(t, {
                B3: () => p,
                Bw: () => n,
                CN: () => g,
                Fo: () => d,
                IB: () => o,
                KE: () => v,
                RO: () => l,
                V$: () => _,
                WY: () => s,
                ak: () => I,
                al: () => c,
                cs: () => y,
                fi: () => h,
                hR: () => m,
                hd: () => f,
                mW: () => u,
                nM: () => a,
                yh: () => r
            });
            const n = `${i(21782).E0}/fonts`,
                r = "m_setHasLoadedAllFonts",
                o = "m_putFontItemsIntoRepo",
                a = "m_setPFCanvasFontsFromLocal",
                s = "m_addFontToRepository",
                l = "m_toggleFavoriteViewVisibility",
                u = "m_setCurrentlyUsedFonts",
                c = "m_updateLastRemovedFavoriteFontId",
                d = "m_updateStateFavorites",
                p = "m_updateFavoriteInState",
                g = "g_hasLoadedAllFonts",
                m = "a_loadFonts",
                h = "a_loadAllActiveFontItems",
                f = "a_updateCurrentlyActiveFonts",
                y = "a_loadServerFavoriteFonts",
                v = "a_loadFavoriteFonts",
                _ = "a_addOrRemoveFavoriteFont",
                I = e => `${n}/${e}`
        },
        21280: (e, t, i) => {
            "use strict";
            i.d(t, {
                B7: () => u,
                ak: () => d,
                ex: () => s,
                g1: () => a,
                kU: () => r,
                mI: () => l,
                nh: () => o,
                y7: () => c
            });
            const n = `${i(21782).E0}/gradients`,
                r = "m_putGradientItemsIntoRepo",
                o = "m_setHasLoadedAllGradients",
                a = "g_hasLoadedAllGradients",
                s = "g_activeGradientItems",
                l = "g_getGradientItems",
                u = "a_loadAllActiveGradientItems",
                c = "a_loadGradients",
                d = e => `${n}/${e}`
        },
        29061: (e, t, i) => {
            "use strict";
            i.d(t, {
                Qk: () => u,
                St: () => a,
                T5: () => o,
                UA: () => s,
                ox: () => l
            });
            var n = i(79442),
                r = i(73439);

            function o(e) {
                return (0, n.getVuex)().dispatch(r.ak(r.T5), e)
            }

            function a() {
                return (0, n.getVuex)().getters[r.ak(r.St)]
            }

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.UA)]
            }

            function l() {
                return (0, n.getVuex)().getters[r.ak(r.ox)]
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.Qk), e)
            }
        },
        73439: (e, t, i) => {
            "use strict";
            i.d(t, {
                Qk: () => o,
                St: () => s,
                T5: () => c,
                UA: () => l,
                ak: () => d,
                mx: () => n,
                ox: () => u,
                vy: () => r,
                wt: () => a
            });
            const n = `${i(21782).E0}/insideLabelTemplates`,
                r = "m_setInsideLabelTemplates",
                o = "m_setActiveInsideLabelTemplate",
                a = "m_setIsLoading",
                s = "g_insideLabelTemplates",
                l = "g_activeInsideLabelTemplate",
                u = "g_isActiveInsideLabelTemplateNoBranding",
                c = "a_loadInsideLabelTemplates",
                d = e => `${n}/${e}`
        },
        42189: (e, t, i) => {
            "use strict";
            i.d(t, {
                $E: () => u,
                CH: () => f,
                E4: () => m,
                GI: () => p,
                Go: () => n,
                MU: () => s,
                RE: () => y,
                VE: () => h,
                ak: () => I,
                ek: () => d,
                fK: () => l,
                lk: () => v,
                o3: () => c,
                or: () => a,
                uD: () => _,
                ws: () => r,
                zW: () => o,
                zZ: () => g
            });
            const n = `${i(21782).E0}/premium`,
                r = "m_addSearchedPremiumItem",
                o = "m_updateSearchedImages",
                a = "m_deleteSearchedImage",
                s = "m_updateSearchKey",
                l = "m_setPatternToolBannerVisibility",
                u = "m_closePatternToolBanner",
                c = "m_toggleFavoritePremiumViewVisibility",
                d = "m_updateFavoritePremiumList",
                p = "m_updateLastRemovedPremiumItem",
                g = "m_setActivePremiumItemInteractionId",
                m = "m_setPremiumItemInteractionState",
                h = "m_resetPremiumItemInteractionState",
                f = "g_getCachedSearch",
                y = "g_premiumSearchKey",
                v = "a_fetchPremiumImages",
                _ = "a_transitionPremiumItemInteractionState",
                I = e => `${n}/${e}`
        },
        93307: (e, t, i) => {
            "use strict";
            i.d(t, {
                Cc: () => h,
                G7: () => f,
                G8: () => a,
                Mb: () => y,
                Q$: () => p,
                TD: () => l,
                Tx: () => u,
                UW: () => c,
                _m: () => s,
                c8: () => d,
                f4: () => v,
                g6: () => n,
                nf: () => m,
                o3: () => r,
                o5: () => g,
                tu: () => o
            });
            const n = 30,
                r = 6,
                o = 20,
                a = 32,
                s = "stock",
                l = "backgrounds",
                u = "vector",
                c = "pattern",
                d = "unsplash",
                p = "unsplash-bg",
                g = "premium-images",
                m = "background",
                h = "closedPatternBannerStorageKey",
                f = {
                    STOCK: s,
                    VECTOR: u,
                    PATTERN: c
                },
                y = [f.STOCK, f.VECTOR, f.PATTERN],
                v = [f.STOCK, f.VECTOR, f.PATTERN]
        },
        61286: (e, t, i) => {
            "use strict";
            i.d(t, {
                f: () => s
            });
            var n = i(93307);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function o(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let s = o((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), this.provider = t.provider, this.searchKey = t.searchKey, this.currency = t.currency, this.minWidth = t.minWidth ? parseInt(t.minWidth) : null, this.minHeight = t.minHeight ? parseInt(t.minHeight) : null, this.searchPage = parseInt(t.searchPage) || 1, this.imageList = t.imageList || [], this.hasAllPages = t.hasAllPages || !1, this.assetType = t.assetType || n._m, this.automaticallyAppliedSuggestion = t.automaticallyAppliedSuggestion || null
            }))
        },
        71851: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => a,
                j: () => o
            });
            var n = i(79442),
                r = i(52230);
            const o = e => (0, n.getVuex)().getters[r.ak(r.Vt)]([e])[0],
                a = e => (0, n.getVuex)().commit(r.ak(r.Bc), e)
        },
        52230: (e, t, i) => {
            "use strict";
            i.d(t, {
                Bc: () => r,
                Bj: () => u,
                CB: () => l,
                Fk: () => h,
                HZ: () => g,
                NL: () => p,
                Vt: () => d,
                ak: () => f,
                bD: () => a,
                by: () => n,
                hY: () => c,
                oE: () => m,
                py: () => s,
                tR: () => o
            });
            const n = `${i(21782).E0}/props`,
                r = "m_updatePropItemsIntoRepo",
                o = "m_setHasLoadedAllProps",
                a = "m_updateRecentProps",
                s = "g_hasLoadedAllProps",
                l = "g_activePropGroups",
                u = "g_recentPropGroups",
                c = "g_getPropGroup",
                d = "g_getPropItems",
                p = "a_loadAllActivePropGroups",
                g = "a_updatePropGroupsIntoRepo",
                m = "a_loadProps",
                h = "a_loadRecentProps",
                f = e => `${n}/${e}`
        },
        61958: (e, t, i) => {
            "use strict";
            i.d(t, {
                f: () => g,
                j: () => m
            });
            var n = i(5532);

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && o(e, t)
            }

            function o(e, t) {
                return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }

            function a(e) {
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
                    var i, n = l(e);
                    if (t) {
                        var r = l(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return s(this, i)
                }
            }

            function s(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function l(e) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, l(e)
            }

            function u(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function c(e, t, i) {
                return t && u(e.prototype, t), i && u(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let p = c((function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    d(this, e), this.id = parseInt(t.id), this.name = t.name, this.index = parseInt(t.index), this.extra = t.extra ? t.extra : {}, this.isActive = t.isActive
                })),
                g = function(e) {
                    r(i, e);
                    var t = a(i);

                    function i() {
                        var e, r, o;
                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return d(this, i), (o = t.call(this, a)).groupId = parseInt(a.groupId), o.image = a.image ? n.q.fromArray(a.image) : null, o.width = (null === (e = o.image) || void 0 === e ? void 0 : e.width) || 1e3, o.height = (null === (r = o.image) || void 0 === r ? void 0 : r.height) || 1e3, o.tag = a.tag, o
                    }
                    return c(i)
                }(p),
                m = function(e) {
                    r(i, e);
                    var t = a(i);

                    function i() {
                        var e;
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return d(this, i), (e = t.call(this, n)).items = n.items ? n.items.map((e => new g(e))) : [], e
                    }
                    return c(i)
                }(p)
        },
        7746: (e, t, i) => {
            "use strict";
            i.d(t, {
                F7: () => u,
                Gj: () => y,
                IP: () => l,
                PQ: () => d,
                Qp: () => p,
                T$: () => v,
                X8: () => f,
                ZY: () => m,
                vn: () => h,
                xd: () => c
            });
            var n = i(25661),
                r = i(46910),
                o = i(69182),
                a = i(9345),
                s = i(96486);
            const l = "quickDesign",
                u = e => Object.values(e).map((e => new n.g(e))),
                c = e => Object.values(e).map((e => new r.E(e))),
                d = () => {
                    try {
                        const e = window.localStorage.getItem((0, o.x4)(a.D));
                        return e && "[]" !== e ? u(JSON.parse(e)) : null
                    } catch (e) {
                        return null
                    }
                },
                p = (e, t) => {
                    try {
                        window.localStorage.setItem(e, JSON.stringify(t))
                    } catch (t) {
                        console.warn(`Could not save ${e} in local storage!`)
                    }
                },
                g = e => {
                    try {
                        return JSON.parse(window.localStorage.getItem(e)) || {}
                    } catch (e) {
                        return {}
                    }
                },
                m = () => g((0, o.Ug)(a.D)),
                h = () => g((0, o.t1)(a.D)),
                f = () => {
                    try {
                        const e = (0, o.t1)(a.D);
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        console.warn("Could not clear current storage!")
                    }
                },
                y = (e, t) => {
                    const i = (0, s.cloneDeep)(e).filter((e => !v(e, t) && e.isActive && e.items.length));
                    return i.forEach((e => {
                        var i;
                        e.items = null === (i = e.items) || void 0 === i ? void 0 : i.filter((e => !v(e, t)))
                    })), i
                },
                v = (e, t) => {
                    var i;
                    return null === (i = e.unavailableTechniques) || void 0 === i ? void 0 : i.includes(t)
                }
        },
        16131: (e, t, i) => {
            "use strict";
            i.d(t, {
                Er: () => C,
                Go: () => u,
                HK: () => f,
                HQ: () => a,
                IJ: () => _,
                Ks: () => w,
                Ly: () => v,
                PI: () => A,
                R3: () => p,
                Rh: () => o,
                Tk: () => k,
                VO: () => d,
                W$: () => s,
                aC: () => n,
                aj: () => h,
                ak: () => R,
                dQ: () => m,
                hd: () => g,
                hj: () => O,
                lK: () => P,
                nR: () => T,
                oq: () => c,
                ql: () => l,
                qq: () => E,
                sK: () => y,
                vF: () => I,
                ve: () => L,
                yS: () => b,
                yp: () => r,
                zy: () => S
            });
            const n = `${i(21782).E0}/quickDesigns`,
                r = "m_loadQuickDesignItemsIntoRepo",
                o = "m_setHasLoadedAllDesigns",
                a = "m_updateRecentQuickDesigns",
                s = "m_setRecentQuickDesigns",
                l = "m_setFavoriteQuickDesigns",
                u = "m_toggleFavoriteQuickDesignsViewVisibility",
                c = "m_updateLastRemovedFavoriteQuickDesignId",
                d = "m_updateFavorites",
                p = "m_updateFavorite",
                g = "m_setActiveQuickDesignItemInteractionId",
                m = "m_setQuickDesignItemInteractionState",
                h = "m_resetQuickDesignItemInteractionState",
                f = "g_hasLoadedAllQuickDesigns",
                y = "g_getQuickDesignGroup",
                v = "g_getQuickDesignItems",
                _ = "g_activeQuickDesignGroups",
                I = "g_recentQuickDesignItems",
                T = "g_favoriteQuickDesignItems",
                E = "g_activeTextQuickDesignGroups",
                P = "a_loadAllActiveQuickDesignGroups",
                S = "a_loadQuickDesignGroupsIntoRepo",
                b = "a_loadQuickDesigns",
                O = "a_loadQuickDesignItems",
                C = "a_loadRecentQuickDesigns",
                L = "a_loadFavoriteQuickDesigns",
                A = "a_loadServerFavorites",
                k = "a_addOrRemoveFavorite",
                w = "a_transitionQuickDesignItemInteractionState",
                R = e => `${n}/${e}`
        },
        25661: (e, t, i) => {
            "use strict";
            i.d(t, {
                g: () => u
            });
            var n = i(46910);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
                }
            }

            function o(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, i) {
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
            let u = o((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), s(this, "id", null), s(this, "name", ""), s(this, "items", []), s(this, "unavailableTechniques", []), s(this, "index", 0), s(this, "extra", {}), s(this, "image", {}), s(this, "isActive", !1), this.id = t.id || null, this.name = t.name || "", this.items = t.items ? t.items.map((e => new n.E(e))) : [], this.unavailableTechniques = t.unavailableTechniques || [], this.index = t.index || 0, this.extra = t.extra || {}, this.image = t.image || {}, this.isActive = t.isActive || !1
            }))
        },
        46910: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => u
            });
            var n = i(58232);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
                }
            }

            function o(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, i) {
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
            let u = o((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), s(this, "id", null), s(this, "name", ""), s(this, "groupId", null), s(this, "index", 0), s(this, "designData", null), s(this, "extra", {}), s(this, "unavailableTechniques", []), s(this, "isActive", !1), s(this, "image", {}), s(this, "type", n.hG.GROUP_QUICK_DESIGN), s(this, "isClickedOnTextPicker", !1), this.id = t.id || null, this.name = t.name || "", this.groupId = t.groupId || null, this.index = t.index || 0, this.designData = t.designData || null, this.extra = t.extra || {}, this.unavailableTechniques = t.unavailableTechniques || [], this.isActive = t.isActive || !1, this.image = t.image || {}, this.type = n.hG.GROUP_QUICK_DESIGN
            }))
        },
        31416: (e, t, i) => {
            "use strict";
            i.d(t, {
                $c: () => p,
                $o: () => g,
                Kh: () => h,
                N8: () => u,
                hu: () => d,
                uD: () => m,
                wB: () => c
            });
            var n = i(69182),
                r = i(61430),
                o = i(53420),
                a = i(60946),
                s = i(96486),
                l = i.n(s);
            const u = e => e.map((e => c(e))),
                c = e => new o.Ck(e),
                d = async () => {
                    try {
                        const e = await n.LC.getItem((0, n.x4)(r.J));
                        return e ? e.map((e => new o.Ck(e))) : null
                    } catch (e) {
                        return null
                    }
                }, p = () => {
                    try {
                        return JSON.parse(window.localStorage.getItem((0, n.Ug)(r.J))) || []
                    } catch (e) {
                        return []
                    }
                }, g = (e, t) => {
                    a.D.subscribe(e.pusherKey, "onSuccess", y.bind(null, e, t))
                }, m = e => {
                    const t = f();
                    if (!t) return;
                    const i = JSON.parse(t).filter((t => t.id !== e));
                    (0, n.f4)(r.J, i)
                }, h = (e, t) => {
                    if (!(e.designData.length === t.designData.length)) return !1;
                    for (const m in e.designData) {
                        var i, n, r;
                        const h = Object.assign({}, e.designData[m]),
                            f = Object.assign({}, t.designData[m]);
                        var o, a, s, u, c, d, p, g;
                        if (delete h.uniqueId, delete f.uniqueId, delete h.url, delete f.url, delete h.designFillUrls, delete f.designFillUrls, h.designFillItem = null === (i = h.designFillItem) || void 0 === i ? void 0 : i.id, f.designFillItem = null === (n = f.designFillItem) || void 0 === n ? void 0 : n.id, h.originalWidth = parseFloat(null === (r = h.originalWidth) || void 0 === r ? void 0 : r.toFixed(4)), h.position) h.position.height = parseFloat(null === (o = h.position.height) || void 0 === o ? void 0 : o.toFixed(4)), h.position.width = parseFloat(null === (a = h.position.width) || void 0 === a ? void 0 : a.toFixed(4)), h.position.top = parseFloat(null === (s = h.position.top) || void 0 === s ? void 0 : s.toFixed(4)), h.position.left = parseFloat(null === (u = h.position.left) || void 0 === u ? void 0 : u.toFixed(4));
                        if (f.position) f.position.height = parseFloat(null === (c = f.position.height) || void 0 === c ? void 0 : c.toFixed(4)), f.position.width = parseFloat(null === (d = f.position.width) || void 0 === d ? void 0 : d.toFixed(4)), f.position.top = parseFloat(null === (p = f.position.top) || void 0 === p ? void 0 : p.toFixed(4)), f.position.left = parseFloat(null === (g = f.position.left) || void 0 === g ? void 0 : g.toFixed(4));
                        if (Object.keys(h).forEach((e => !h[e] && delete h[e])), Object.keys(f).forEach((e => !f[e] && delete f[e])), !l().isEqual(l().sortBy(h), l().sortBy(f))) return !1
                    }
                    return !0
                }, f = () => {
                    try {
                        return window.localStorage.getItem((0, n.x4)(r.J))
                    } catch (e) {
                        return console.log("Could not get local scenes data, localStorage is not available"), null
                    }
                }, y = (e, t, i) => {
                    let {
                        urlThumb: o
                    } = i;
                    t(o), (async (e, t) => {
                        const i = await d();
                        if (!i) return;
                        const o = Object.assign({}, e);
                        o.image.urlThumb = t, delete o.pusherKey, i.push(o), await (0, n.f4)(r.J, i)
                    })(e, o), v(e, t)
                }, v = (e, t) => {
                    a.D.unbind(e.pusherKey, "onSuccess", y.bind(null, e, t))
                }
        },
        93661: (e, t, i) => {
            "use strict";
            i.d(t, {
                A$: () => _,
                Dn: () => d,
                FY: () => n,
                HD: () => s,
                KE: () => u,
                MM: () => c,
                PS: () => v,
                Q8: () => E,
                Ql: () => l,
                Rn: () => r,
                S_: () => a,
                Y5: () => S,
                YD: () => p,
                ak: () => L,
                b2: () => C,
                cU: () => h,
                do: () => I,
                ig: () => o,
                jH: () => y,
                qP: () => b,
                rG: () => T,
                rv: () => f,
                uE: () => O,
                ul: () => P,
                y6: () => g,
                zh: () => m
            });
            const n = `${i(21782).E0}/scenes`,
                r = "m_updateScenesIntoRepo",
                o = "m_setHasLoadedAllScenes",
                a = "m_resetRepositories",
                s = "m_setParentTemplateId",
                l = "m_resetParentTemplateId",
                u = "m_updateRecentScenes",
                c = "m_setSceneGroups",
                d = "m_addSceneToUserScenes",
                p = "g_hasLoadedAllScenes",
                g = "g_getSceneDesign",
                m = "g_getScene",
                h = "g_templateScenes",
                f = "g_userScenes",
                y = "g_parentTemplateId",
                v = "g_recentSceneGroup",
                _ = "g_getSceneItems",
                I = "g_groupedTemplateScenes",
                T = "a_loadAllActiveScenes",
                E = "a_loadScenes",
                P = "a_loadSceneDesign",
                S = "a_saveUserScene",
                b = "a_deleteUserScene",
                O = "a_loadRecentScenes",
                C = "a_loadSceneGroups",
                L = e => `${n}/${e}`
        },
        53420: (e, t, i) => {
            "use strict";
            i.d(t, {
                Ck: () => h,
                J_: () => f,
                kT: () => y
            });
            var n = i(5532),
                r = i(66308),
                o = i(24424);

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && s(e, t)
            }

            function s(e, t) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function l(e) {
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
                    var i, n = c(e);
                    if (t) {
                        var r = c(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return u(this, i)
                }
            }

            function u(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function c(e) {
                return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, c(e)
            }

            function d(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function p(e, t, i) {
                return t && d(e.prototype, t), i && d(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let m = p((function e(t) {
                    g(this, e), this.id = parseInt(t.id), this.name = t.name, this.index = parseInt(t.index), this.extra = t.extra ? t.extra : {}, this.isActive = !!t.isActive
                })),
                h = function(e) {
                    a(i, e);
                    var t = l(i);

                    function i(e) {
                        var r, o, a;
                        return g(this, i), (a = t.call(this, e)).image = e.image ? n.q.fromArray(e.image) : null, a.isTemplate = !!e.isTemplate, a.pusherKey = e.pusherKey || null, a.parentTemplateId = null !== (r = e.parentTemplateId) && void 0 !== r ? r : null, a.groupId = null !== (o = e.groupId) && void 0 !== o ? o : null, a
                    }
                    return p(i)
                }(m),
                f = function() {
                    function e() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g(this, e), this.designData = t.designData
                    }
                    return p(e, [{
                        key: "getMockupPositionObject",
                        value: function() {
                            var e;
                            return null === (e = this.designData.find((e => e.object === o.w))) || void 0 === e ? void 0 : e.position
                        }
                    }, {
                        key: "getMockupOrderIndex",
                        value: function() {
                            return this.designData.filter((e => e.type !== r.Z.TYPE_FILL)).findIndex((e => e.object === o.w))
                        }
                    }]), e
                }(),
                y = function(e) {
                    a(i, e);
                    var t = l(i);

                    function i() {
                        var e;
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return g(this, i), (e = t.call(this, n)).items = n.items || [], e
                    }
                    return p(i)
                }(m)
        },
        63037: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => r,
                n: () => n
            });
            const n = {
                    FAVORITE_BUTTON_SHOWN: "favorite_button_shown",
                    FINAL_ADD_ITEM: "final_add_item",
                    FINAL_TOGGLE_FAVORITE: "final_toggle_favorite"
                },
                r = {
                    ITEM: "item",
                    FAVORITE_BUTTON: "favorite_button",
                    OUTSIDE: "outside"
                }
        },
        95619: (e, t, i) => {
            "use strict";
            i.d(t, {
                GE: () => a,
                dA: () => s,
                hN: () => o,
                qH: () => l,
                xd: () => r
            });
            var n = i(58617);
            async function r(e) {
                const [t, i, r] = await Promise.all([(0, n.r)("/rpc/embedded-designer-rpc/get-product-config", e, {
                    fetchOptions: u()
                }), (0, n.r)("/rpc/embedded-designer-rpc/get-design-config", e, {
                    fetchOptions: u()
                }), (0, n.r)("/rpc/embedded-designer-rpc/get-variant-config", e, {
                    fetchOptions: u()
                })]);
                if (t.success && i.success && r.success) return t.designerProduct = Object.assign({}, t.designerProduct, i.designData), Object.assign({}, t, r);
                console.warn("Something went wrong!")
            }

            function o(e) {
                return (0, n.r)("/rpc/embedded-designer-rpc/get-embroidery-tiers", {
                    currency: e
                }, {
                    fetchOptions: u()
                })
            }

            function a(e, t) {
                return (0, n.r)("/rpc/embedded-designer-rpc/save-template", {
                    designData: e,
                    existingTemplateId: t
                }, {
                    fetchOptions: u()
                })
            }
            async function s() {
                const [e, t, i] = await Promise.all([(0, n.r)("/rpc/embedded-designer-rpc/load-template-product-data", {}, {
                    fetchOptions: u()
                }), (0, n.r)("/rpc/embedded-designer-rpc/load-template-design-data", {}, {
                    fetchOptions: u()
                }), (0, n.r)("/rpc/embedded-designer-rpc/load-template-variant-data", {}, {
                    fetchOptions: u()
                })]);
                if (e.success && t.success && i.success) return e.designerProduct = Object.assign({}, e.designerProduct, t.designData), Object.assign({}, e, i);
                console.warn("Something went wrong!")
            }

            function l() {
                return (0, n.r)("/rpc/embedded-designer-rpc/nonce-validity-check", {}, {
                    fetchOptions: u()
                })
            }

            function u() {
                return {
                    headers: {
                        Authorization: `Bearer ${PF.EMBED_NONCE_TOKEN}`,
                        "X-Embedded-Designer": !0
                    }
                }
            }
        },
        8187: (e, t, i) => {
            "use strict";
            i.d(t, {
                E_: () => o,
                YP: () => s,
                Z9: () => a,
                iT: () => n,
                j9: () => r
            });
            const n = {
                    FILE_LAYERS: "file_layers",
                    CLIPART_LAYERS: "clipart_layers",
                    TEXT_LAYERS: "text_layers",
                    EMBROIDERY_3D_PUFF: "embroidery_3d_puff",
                    HAS_COLOR_GROUP_INSIDE_LABELS: "has_color_group_inside_labels"
                },
                r = "EMBROIDERY_FULL_COLOR",
                o = {
                    SET_PRODUCT: "setProduct",
                    SAVE_DESIGN: "saveDesign",
                    LOAD_TEMPLATE: "loadTemplate",
                    SET_STYLE: "setStyle",
                    SET_FEATURE_CONFIG: "setFeatureConfig",
                    SET_DISABLED_PLACEMENTS: "setDisabledPlacements",
                    SET_PRESELECTED_COLORS: "setPreselectedColors",
                    SET_PRESELECTED_SIZES: "setPreselectedSizes",
                    SET_DISABLED_COLORS: "setDisabledColors",
                    SET_DISABLED_SIZES: "setDisabledSizes",
                    INVALID_ORIGIN: "invalidOrigin",
                    EXPIRED_NONCE: "expiredNonce",
                    IFRAME_LOADED: "iframeLoaded",
                    DESIGNER_LOADED: "designerLoaded",
                    DESIGN_STATUS: "designStatus",
                    INCORRECT_MESSAGE_FORMAT: "incorrectMessageFormat",
                    UNKNOWN_MESSAGE: "unknownMessage",
                    RPC_ERROR: "rpcError"
                },
                a = "OK",
                s = "Failed"
        },
        58841: (e, t, i) => {
            "use strict";
            i.d(t, {
                CQ: () => n,
                HK: () => a,
                K3: () => s,
                ak: () => l,
                bz: () => r,
                mO: () => o
            });
            const n = "designer/embedModule/",
                r = "m_setFeatureConfig",
                o = "m_setDisabledPlacements",
                a = "g_getFeatureConfig",
                s = "g_disabledPlacements";

            function l(e) {
                return n + e
            }
        },
        14753: (e, t, i) => {
            "use strict";
            i.d(t, {
                Oq: () => c,
                QY: () => d,
                Zr: () => a,
                aP: () => l,
                cs: () => s,
                vJ: () => p,
                ye: () => o
            });
            var n = i(95370),
                r = i(35450);
            const o = "nameAsc",
                a = "nameDesc",
                s = "createdAtDesc",
                l = [{
                    value: o,
                    name: dlang("generator", "Name Aâ€“Z")
                }, {
                    value: a,
                    name: dlang("generator", "Name Zâ€“A")
                }, {
                    value: s,
                    name: dlang("generator", "Last added")
                }],
                u = Object.values(n.E).map((e => ({
                    value: e.id,
                    name: e.text
                }))),
                c = [new r.e({
                    key: "alphabets",
                    label: dlang("generator", "Alphabet"),
                    options: u
                })],
                d = 84,
                p = {
                    JP: "noto-sans-jp",
                    MAIN: "open-sans-b"
                }
        },
        88002: (e, t, i) => {
            "use strict";
            i.d(t, {
                EW: () => l,
                Ed: () => d,
                Gj: () => r,
                NP: () => E,
                Q1: () => h,
                S9: () => g,
                SU: () => u,
                Ui: () => v,
                V: () => o,
                XM: () => s,
                Ye: () => a,
                a: () => c,
                ak: () => T,
                fP: () => I,
                jF: () => m,
                jN: () => n,
                mc: () => f,
                oA: () => _,
                qi: () => y,
                t1: () => p
            });
            const n = "designer/footerButtonsModule/",
                r = "m_setContinueButtonDisabled",
                o = "m_setContinueButtonVisualDisabled",
                a = "m_setShowContinueSpinner",
                s = "m_setShowContinueButton",
                l = "m_setSaveTemplatesDisabled",
                u = "m_setShowSaveTemplatesSpinner",
                c = "m_setOrderPreviewDisabled",
                d = "m_setReCheckAndUpdateErrorStatus",
                p = "m_setShowCalculateButton",
                g = "m_setCalculateButtonDisabled",
                m = "m_setCalculateButtonCalculating",
                h = "m_setShowEmbroideryCosts",
                f = "m_setFooterPriceData",
                y = "m_setShowEmbroideryCostPopover",
                v = "m_setVisibleFooterErrors",
                _ = "m_resetState",
                I = "a_disableAllButtons";

            function T(e) {
                return n + e
            }

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = e;
                return n.slice(0, -1).split("/").forEach((e => {
                    e in i && (i = i[e])
                })), t && (i = i[t]), i
            }
        },
        67342: (e, t, i) => {
            "use strict";
            i.d(t, {
                V: () => n
            });
            const n = {
                NO_BRANDING: "NO_BRANDING",
                CUSTOM_DESIGN: "CUSTOM_DESIGN"
            }
        },
        79990: (e, t, i) => {
            "use strict";
            i.d(t, {
                GN: () => c,
                Go: () => o,
                H$: () => a,
                Qt: () => s,
                WX: () => r,
                kT: () => l,
                yG: () => u
            });
            const n = "/rpc/licensed-asset-rpc",
                r = `${n}/log-onboarding-seen`,
                o = `${n}/has-completed-onboarding`,
                a = `${n}/search-asset`,
                s = `${n}/save-asset`,
                l = `${n}/get-licensed-asset-item`,
                u = `${n}/get-removed-licensed-assets-by-external-ids`,
                c = `${n}/get-licensed-asset-converted-price`
        },
        60877: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => o,
                u: () => r
            });
            const n = "licensedAssetsFirstAccess";

            function r() {
                try {
                    localStorage.setItem(n, Date.now().toString())
                } catch (e) {
                    console.log("Could not save licensed assets first access, localStorage is not available")
                }
            }

            function o() {
                try {
                    return localStorage.getItem(n)
                } catch (e) {
                    console.log("Could not get licensed assets first access, localStorage is not available")
                }
            }
        },
        43504: (e, t, i) => {
            "use strict";
            i.d(t, {
                $P: () => D,
                $k: () => L,
                A1: () => g,
                CT: () => o,
                Ex: () => F,
                HE: () => w,
                I7: () => N,
                K_: () => s,
                L3: () => m,
                MR: () => O,
                Nk: () => A,
                Op: () => p,
                U8: () => R,
                W8: () => x,
                WU: () => u,
                Wk: () => a,
                Z: () => G,
                ZH: () => I,
                aG: () => V,
                aJ: () => P,
                eH: () => h,
                fI: () => _,
                fP: () => T,
                h7: () => B,
                hL: () => E,
                hb: () => d,
                kD: () => k,
                mX: () => c,
                pl: () => b,
                ql: () => l,
                rY: () => y,
                tP: () => S,
                v6: () => f,
                vf: () => C,
                w$: () => r,
                xD: () => M,
                xQ: () => v
            });
            var n = i(58232);
            const r = "chooserOptions",
                o = Object.freeze({
                    IS_PROMO_MOCKUP_PICKER_AVAILABLE: "IS_PROMO_MOCKUP_PICKER_AVAILABLE",
                    IS_QUICK_DESIGNS_PICKER_AVAILABLE: "IS_QUICK_DESIGNS_PICKER_AVAILABLE",
                    IS_LICENSED_ASSET_PICKER_AVAILABLE: "IS_LICENSED_ASSET_PICKER_AVAILABLE",
                    IS_TITLE_HIDDEN: "IS_TITLE_HIDDEN",
                    IS_MOCKUP_MAKER_MODE: "IS_MOCKUP_MAKER_MODE",
                    IS_LOGO_MAKER_MODE: "IS_LOGO_MAKER_MODE"
                }),
                a = "validation",
                s = Object.freeze({
                    FILES_UNAVAILABLE: "FILES_UNAVAILABLE",
                    FILES_COUNT_RESTRICTION: "FILES_COUNT_RESTRICTION",
                    CLIPARTS_UNAVAILABLE: "CLIPARTS_UNAVAILABLE",
                    TEXTBOX_UNAVAILABLE: "TEXTBOX_UNAVAILABLE",
                    TEXTBOX_EMBROIDERY: "TEXTBOX_EMBROIDERY",
                    TEXTBOX_COUNT_RESTRICTION: "TEXTBOX_COUNT_RESTRICTION",
                    LICENSED_ASSET_COUNT_RESTRICTION: "LICENSED_ASSET_COUNT_RESTRICTION",
                    QUICKDESIGN_UNAVAILABLE: "QUICKDESIGN_UNAVAILABLE",
                    QUICKDESIGN_COUNT_RESTRICTION: "QUICKDESIGN_COUNT_RESTRICTION",
                    CLIPART_COUNT_RESTRICTION: "CLIPART_COUNT_RESTRICTION"
                }),
                l = Object.freeze({
                    OPEN_DESIGNER_TAB: "OPEN_DESIGNER_TAB",
                    HAS_CLOSED_PREMIUM_INTRO: "HAS_CLOSED_PREMIUM_INTRO"
                }),
                u = "mockup_prop",
                c = "mockup_scene",
                d = "licensed_asset",
                p = "clipart_section",
                g = "quick-design_section",
                m = [u, c],
                h = "default_view",
                f = "mockup_view",
                y = "mockup_props",
                v = "mockup_scenes",
                _ = "text",
                I = "clipart",
                T = "quick-design",
                E = "licensed_assets",
                P = "embed_file",
                S = "inside_label_template_picker",
                b = "background_fill",
                O = "footer-buttons-view",
                C = [y, v, E, P, S, b],
                L = "group_update",
                A = Object.freeze({
                    FILE: "file",
                    TEXT: "text",
                    TEXTBOX: "textbox",
                    CLIPART: "clipart",
                    MOCKUP: "mockup",
                    QUICKDESIGN: "quick_design",
                    EXTERNAL_FILE: "external_file",
                    BACKGROUND_FILL: "background_fill"
                }),
                k = {
                    [n.hG.GROUP_QUICK_DESIGN]: dlang("generator", "Quick design"),
                    [n.hG.GROUP_LOGO_TEMPLATE]: dlang("generator", "Logo"),
                    [n.hG.GROUP_INSIDE_LABEL_TEMPLATE]: dlang("generator", "Label template")
                },
                w = {
                    [n.hG.GROUP_QUICK_DESIGN]: dlang("generator", "Quick design layers"),
                    [n.hG.GROUP_LOGO_TEMPLATE]: dlang("generator", "Logo layers"),
                    [n.hG.GROUP_INSIDE_LABEL_TEMPLATE]: dlang("generator", "Template components")
                },
                R = "Scenes",
                D = "Add prop",
                N = "Choose file",
                M = "Add text",
                F = "Add clipart",
                V = "Add mockup",
                x = "Add Quick Design",
                G = "Premium Images",
                B = "Background fill"
        },
        59574: (e, t, i) => {
            "use strict";
            i.d(t, {
                B1: () => s,
                GY: () => l,
                b3: () => a
            });
            var n = i(75414),
                r = i(17947),
                o = i(39930);

            function a(e) {
                const t = (0, r.wM)(e, !0);
                null != t && t.length ? (function(e) {
                    const t = document.createElement("textarea");
                    t.value = e, t.setAttribute("readonly", "readonly"), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), document.body.removeChild(t), new n.N({
                        type: n.N.TYPE_SUCCESS,
                        content: "Layer data in JSON format copied to clipboard"
                    })
                }(JSON.stringify(t)), function(e) {
                    const t = document.createElement("a"),
                        i = e.getMockup().getMockup().getPreviewImageEncodedString();
                    t.setAttribute("href", i), t.setAttribute("download", "preview"), t.style.display = "none", document.body.appendChild(t);
                    const n = o.J.isDisabled;
                    o.J.isDisabled = !0, t.click(), o.J.isDisabled = n, document.body.removeChild(t)
                }(e)) : new n.N({
                    type: n.N.TYPE_ERROR,
                    content: "There are no layers in design!"
                })
            }

            function s(e) {
                return null != e && e.length ? u(e[0], !e.some((e => !e.isGroupLocked)), e) : {}
            }

            function l(e) {
                return e ? u(e, e.isGroupLocked, [e]) : {}
            }

            function u(e, t, i) {
                const n = i.map((e => Number(e.uniqueId))),
                    r = `${Number(e.groupId)}-${Math.min(...n)}`;
                return i.forEach((e => e.uniqueGroupLayerId = r)), {
                    isGroup: !0,
                    isLocked: t,
                    uniqueGroupLayerId: r,
                    uniqueId: e.groupId,
                    groupType: e.groupType,
                    quickDesignId: e.quickDesignId,
                    layers: i,
                    mirroredGroupUniqueId: e.parentLayerUniqueId ? e.groupId : null
                }
            }
        },
        749: (e, t, i) => {
            "use strict";
            i.d(t, {
                $A: () => g,
                Qi: () => y,
                SJ: () => m,
                Wf: () => p,
                Xu: () => l,
                Zh: () => d,
                f4: () => u,
                fL: () => f,
                fb: () => a,
                hv: () => c,
                rl: () => h,
                ys: () => s
            });
            var n = i(79442),
                r = i(75885),
                o = i(43504);

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.Jn), e)
            }

            function s() {
                (0, n.getVuex)().commit(r.ak(r.uG), o.eH)
            }

            function l(e) {
                (0, n.getVuex)().commit(r.ak(r.uG), e)
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.HN), e)
            }

            function c() {
                (0, n.getVuex)().commit(r.ak(r.Wj))
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.wM)]
            }

            function p(e) {
                (0, n.getVuex)().commit(r.ak(r.Wf), e)
            }

            function g(e) {
                return (0, n.getVuex)().getters[r.ak(r.$A)](e)
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.SJ)]
            }

            function h() {
                return (0, n.getVuex)().getters[r.ak(r.rl)]
            }

            function f() {
                return (0, n.getVuex)().getters[r.ak(r.fL)]
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.Qi)]
            }
        },
        75885: (e, t, i) => {
            "use strict";
            i.d(t, {
                $A: () => f,
                EU: () => d,
                HN: () => s,
                IL: () => c,
                JK: () => p,
                Jn: () => a,
                KN: () => g,
                Qi: () => v,
                SJ: () => y,
                Wf: () => u,
                Wj: () => l,
                Xc: () => r,
                ak: () => E,
                fL: () => I,
                lZ: () => m,
                rl: () => _,
                sM: () => T,
                uG: () => o,
                wM: () => h,
                x: () => n
            });
            const n = "designer/layerPickerModule/",
                r = "m_setChooserElements",
                o = "m_setActiveView",
                a = "m_setChooserOptionFlag",
                s = "m_setValidationFlag",
                l = "m_resetValidationFlags",
                u = "m_setLayerChooserFlag",
                c = "m_reloadActiveView",
                d = "m_setHasPlacementConflictsCount",
                p = "g_activeChooserElements",
                g = "g_getChooserOptionFlag",
                m = "g_getValidationFlag",
                h = "g_activeChooserView",
                f = "g_getLayerChooserFlag",
                y = "g_getFileCountLimit",
                v = "g_getLicensedAssetCountLimit",
                _ = "g_getClipartCountLimit",
                I = "g_getTextCountLimit",
                T = "g_isDefaultViewActive";

            function E(e) {
                return n + e
            }
        },
        91065: (e, t, i) => {
            "use strict";
            i.d(t, {
                $u: () => _,
                Cp: () => T,
                Fy: () => m,
                IZ: () => a,
                Jn: () => p,
                Jr: () => r,
                Od: () => u,
                SL: () => s,
                ZQ: () => d,
                aL: () => f,
                ak: () => b,
                bh: () => h,
                c4: () => c,
                dy: () => E,
                ee: () => o,
                qE: () => n,
                sS: () => S,
                vH: () => P,
                wZ: () => I,
                x1: () => v,
                x2: () => y,
                z0: () => l,
                zr: () => g
            });
            const n = "designer/mockupModule/live3dMockup/",
                r = "m_set3dCanvasParent",
                o = "m_set3dCanvas",
                a = "m_set3dInstance",
                s = "m_setIs3dLoading",
                l = "m_set3dLoadedObj",
                u = "m_set3dLoadedObjId",
                c = "m_set3dStatus",
                d = "m_set3dStatusText",
                p = "m_setIsBannerAvailableForObj",
                g = "m_setShouldShowBanner",
                m = "a_create3dInstance",
                h = "a_on3dObjectLoaded",
                f = "a_update3dStatus",
                y = "a_showError",
                v = "a_modifyWarningBanner",
                _ = "a_append3dCanvas",
                I = "a_configureControls",
                T = "g_live3dInstance",
                E = "g_live3dLoadedObj",
                P = "g_live3dLoadedObjId",
                S = "g_live3dStatus";

            function b(e) {
                return n + e
            }
        },
        96304: (e, t, i) => {
            "use strict";
            i.d(t, {
                S: () => n
            });
            const n = {
                DESIGN_TAB: "design_tab",
                ADD_LAYER: "add_layer",
                TOOLBAR: "toolbar",
                LAYERS: "layers",
                ADD_CLIPART: "add_clipart",
                ADD_PROMO_MOCKUP: "add_promo_mockup",
                ADD_TEXT: "add_text",
                ADD_QUICK_DESIGN: "add_quick_design",
                ADD_PREMIUM_IMAGE: "add_premium_image",
                ADD_MOCKUP_SCENES: "add_mockup_scenes",
                ADD_PROP: "add_prop",
                BACKGROUND_FILL_TAB: "background_fill_tab",
                FOOTER_BUTTONS_VIEW: "footer_buttons"
            }
        },
        98990: (e, t, i) => {
            "use strict";
            i.d(t, {
                NP: () => s,
                P0: () => l,
                cN: () => o,
                dv: () => a
            });
            var n = i(79442),
                r = i(56949);

            function o(e) {
                (0, n.getVuex)().dispatch(r.ak(r.BM), e)
            }

            function a() {
                return (0, n.getVuex)().getters[r.ak(r.AC)]
            }

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.hH)]
            }

            function l() {
                (0, n.getVuex)().commit(r.ak(r.P0))
            }
        },
        56949: (e, t, i) => {
            "use strict";
            i.d(t, {
                AC: () => o,
                BM: () => l,
                M7: () => n,
                P0: () => r,
                ak: () => u,
                hH: () => s,
                oD: () => a
            });
            const n = "designer/mobileFooterModule/",
                r = "m_setLayerPickerCreated",
                o = "g_mobileView",
                a = "g_layerPickerCreatedAt",
                s = "g_isDesignerMobileFooterReady",
                l = "a_setMobileView";

            function u(e) {
                return n + e
            }
        },
        10350: (e, t, i) => {
            "use strict";
            i.d(t, {
                Cl: () => n,
                K0: () => l,
                L8: () => d,
                Om: () => f,
                W$: () => o,
                ZA: () => s,
                ZL: () => r,
                cR: () => u,
                d4: () => a,
                id: () => h,
                ie: () => c,
                iq: () => g,
                n9: () => m,
                rG: () => p
            });
            const n = "MOCKUP_FLOW_PUSH",
                r = "MOCKUP_FLOW_DOWNLOAD",
                o = "MOCKUP_STEP_DESIGN",
                a = "MOCKUP_STEP_DOWNLOAD",
                s = 400,
                l = Object.freeze({
                    IS_LOADED: "IS_LOADED",
                    IS_LOADING: "IS_LOADING",
                    IS_SCENE_SAVED: "IS_SCENE_SAVED",
                    HAS_PUSH_FLOW_SAVE: "HAS_PUSH_FLOW_SAVE",
                    IS_CMM_FIRST_OPEN: "IS_CMM_FIRST_OPEN",
                    HAS_ADVANCED_TEMPLATE: "HAS_ADVANCED_TEMPLATE",
                    CUSTOM_MOCKUP_FLOW: "CUSTOM_MOCKUP_FLOW",
                    CUSTOM_MOCKUP_STEP: "CUSTOM_MOCKUP_STEP",
                    HAS_SCENE_DESIGN: "HAS_SCENE_DESIGN",
                    PREVIOUS_PRODUCT_OPTIONS: "PREVIOUS_PRODUCT_OPTIONS"
                }),
                u = 77777,
                c = 88888,
                d = 99999,
                p = "mockup",
                g = "Mockup",
                m = 1,
                h = 1e3,
                f = 1e3
        },
        17298: (e, t, i) => {
            "use strict";
            i.d(t, {
                Bd: () => v,
                CG: () => y,
                Cb: () => R,
                Fv: () => P,
                O3: () => T,
                Oy: () => E,
                TI: () => _,
                V5: () => k,
                Wq: () => O,
                cf: () => C,
                es: () => b,
                gN: () => L,
                mN: () => w,
                qF: () => S,
                qK: () => A,
                qh: () => I,
                tA: () => f
            });
            var n = i(79442),
                r = i(75372),
                o = i(93661),
                a = i(10350),
                s = i(97345),
                l = i(24424),
                u = i(1042),
                c = i(66308),
                d = i(96486),
                p = i(17947),
                g = i(10989),
                m = i(50728),
                h = i(44880);

            function f(e) {
                return (0, n.getVuex)().getters[r.ak(r.tA)](e)
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.se)]
            }

            function v() {
                return (0, n.getVuex)().getters[r.ak(r.o7)]
            }

            function _(e) {
                (0, n.getVuex)().commit(r.ak(r.TI), e)
            }

            function I(e) {
                (0, n.getVuex)().commit(r.ak(r.qh), e)
            }

            function T(e) {
                (0, n.getVuex)().commit(r.ak(r.O3), e)
            }

            function E() {
                return (0, m.oj)() && (0, n.getVuex)().getters[r.ak(r.tA)](a.K0.CUSTOM_MOCKUP_STEP) === a.W$
            }

            function P() {
                return (0, n.getVuex)().getters[r.ak(r.tA)](a.K0.CUSTOM_MOCKUP_STEP) === a.d4
            }

            function S() {
                (0, n.getVuex)().commit(r.ak(r.m0), !0)
            }

            function b() {
                return (0, n.getVuex)().getters[r.ak(r.W1)] || ""
            }

            function O() {
                return (0, n.getVuex)().getters[r.ak(r.tA)](a.K0.HAS_PUSH_FLOW_SAVE) || null
            }

            function C() {
                const e = (0, n.getVuex)().getters[s.ak(s.OZ)],
                    t = e.isTransparent ? "png" : "jpg",
                    i = (0, n.getVuex)().getters[r.ak(r._x)];
                if (!i) return null;
                const a = (0, n.getVuex)().getters[r.ak(r.rJ)],
                    c = (0, n.getVuex)().getters[r.ak(r.x6)].filter((t => !e.excludedPlacements.includes(t.placement))),
                    d = [];
                for (const e of c) d.push({
                    object: l.w,
                    position: i.getMockupPositionObject(),
                    type: u.GR,
                    generatorMockupVariantId: e.id,
                    placementId: e.placement,
                    url: a[e.id].downloadUrl
                });
                return {
                    sceneData: A(i.designData),
                    mockupOrderIndex: i.getMockupOrderIndex(),
                    format: t,
                    parentTemplateId: (0, n.getVuex)().getters[o.ak(o.jH)],
                    mockupData: d
                }
            }

            function L(e) {
                return e.map((e => {
                    var t, i;
                    return e.type !== c.Z.TYPE_FILL || e.designFillType !== h.ZA && e.designFillType !== h.f8 || null === (t = e.designFillItem) || void 0 === t || null === (i = t.image) || void 0 === i || !i.toArray || (e.designFillItem.image = e.designFillItem.image.toArray()), e
                }))
            }

            function A(e) {
                const t = (0, d.cloneDeep)(e),
                    i = t.find((e => (0, p.tK)(e)));
                return i && (0, p.GM)(i), t
            }

            function k() {
                (0, n.moduleExistsAt)(g.Og) && ((0, n.getVuex)().commit(r.ak(r.oA)), (0, n.getVuex)().commit(r.ak(r.lb), {
                    key: a.K0.HAS_SCENE_DESIGN,
                    shouldUnset: !0
                }), (0, n.getVuex)().commit(r.ak(r.lb), {
                    key: a.K0.PREVIOUS_PRODUCT_OPTIONS,
                    shouldUnset: !0
                }))
            }

            function w() {
                (0, n.moduleExistsAt)(g.Og) && ((0, n.getVuex)().commit(r.ak(r.VT)), (0, n.getVuex)().commit(r.ak(r.yc)))
            }

            function R() {
                (0, n.getVuex)().commit(r.ak(r.Cb), !0)
            }
        },
        75372: (e, t, i) => {
            "use strict";
            i.d(t, {
                Cb: () => d,
                F6: () => E,
                GH: () => T,
                Js: () => y,
                L_: () => P,
                O$: () => v,
                O3: () => S,
                Ob: () => N,
                Ph: () => D,
                TI: () => g,
                U_: () => p,
                VT: () => s,
                Vj: () => x,
                W1: () => L,
                Wk: () => c,
                _x: () => C,
                ak: () => G,
                cf: () => F,
                hs: () => h,
                jp: () => V,
                kf: () => n,
                lb: () => r,
                m0: () => f,
                o7: () => O,
                oA: () => o,
                qh: () => m,
                rJ: () => A,
                se: () => R,
                tA: () => b,
                tQ: () => _,
                tu: () => M,
                v6: () => u,
                vb: () => I,
                wM: () => w,
                x6: () => k,
                yc: () => a,
                ys: () => l
            });
            const n = "designer/mockupModule/mockupMaker/",
                r = "m_setMockupMakerFlag",
                o = "m_resetState",
                a = "m_resetDownloadFiles",
                s = "m_resetProductMockupFiles",
                l = "m_setProductMockupFile",
                u = "m_setDownloadableMockupFile",
                c = "m_setDownloadablePrintfileFile",
                d = "m_resetDownloadablePrintfileFile",
                p = "m_setUsedDesignPlacementNames",
                g = "m_setPushFlowFooterUpdateFunction",
                m = "m_setPushFlowTitleUpdateFunction",
                h = "m_setPushFlowParams",
                f = "m_setPushFlowContinue",
                y = "m_setPushFlowMainImageSrc",
                v = "m_setSceneDesign",
                _ = "m_setActiveGroupId",
                I = "m_setActivePlacement",
                T = "m_setActiveSize",
                E = "m_setActiveColor",
                P = "m_setActiveSceneId",
                S = "m_setMockupMakerModalFunction",
                b = "g_getMockupMakerFlag",
                O = "g_activeGroup",
                C = "g_sceneDesign",
                L = "g_pushFlowMainImageSrc",
                A = "g_productMockupFiles",
                k = "g_validGeneratorVariants",
                w = "g_activeGeneratorVariant",
                R = "g_activeProductMockup",
                D = "g_getDownloadableMockupFiles",
                N = "g_getDownloadablePrintfileFiles",
                M = "g_hasProductOptionsChanged",
                F = "a_loadGeneratorMockupGroups",
                V = "a_loadCustomMockupGroup",
                x = "a_createMockupGenerationTask";

            function G(e) {
                return n + e
            }
        },
        1042: (e, t, i) => {
            "use strict";
            i.d(t, {
                GR: () => o,
                pC: () => n,
                pt: () => r
            });
            const n = "MOCKUP_TYPE_BASIC",
                r = "MOCKUP_TYPE_CUSTOM",
                o = "mockupMaker"
        },
        41730: (e, t, i) => {
            "use strict";
            i.d(t, {
                BH: () => a,
                Dc: () => r,
                Ey: () => s,
                FS: () => p,
                HF: () => o,
                Kv: () => m,
                Lg: () => c,
                Nl: () => l,
                RI: () => d,
                er: () => u,
                gx: () => h,
                oz: () => n,
                zJ: () => g
            });
            const n = "good",
                r = "medium",
                o = "bad",
                a = "badUpscale",
                s = "embroidery",
                l = "transparencyWarning",
                u = "embroideryTextTooBig",
                c = "textSmall",
                d = "embroideryTextSmall",
                p = "embroideryTextOverlapping",
                g = 2,
                m = 1e7,
                h = 17e6
        },
        5251: (e, t, i) => {
            "use strict";
            i.d(t, {
                G: () => n
            });
            const n = Object.freeze({
                HAS_CUSTOM_MOCKUP_ACCESS: "HAS_CUSTOM_MOCKUP_ACCESS",
                IS_IN_MODAL: "IS_IN_MODAL",
                HAS_DOWNLOAD_RESTRICTIONS: "HAS_DOWNLOAD_RESTRICTIONS",
                IS_LEAVE_WARNING_POPUP_DISABLED: "IS_LEAVE_WARNING_POPUP_DISABLED"
            })
        },
        50728: (e, t, i) => {
            "use strict";
            i.d(t, {
                Mp: () => d,
                RP: () => c,
                ax: () => u,
                mP: () => s,
                oj: () => l
            });
            var n = i(79442),
                r = i(67187),
                o = i(5251),
                a = i(58030);

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.zG)]
            }

            function l() {
                return (0, n.getVuex)().getters[r.ak(r.f3)]
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.mB), {
                    key: o.G.IS_LEAVE_WARNING_POPUP_DISABLED,
                    value: e
                })
            }

            function c(e, t, i) {
                const n = [];
                (0, a.Xf)() && n.push(i._toggleZoom), (0, a.dw)() && n.push(i._toggleGrid), n.forEach((e => e(!1, !1)));
                const r = e._fabric.toDataURL({
                        format: "png",
                        multiplier: 2,
                        enableRetinaScaling: !0
                    }),
                    o = t.getAttribute("style"),
                    s = new Image;
                return s.setAttribute("style", o), s.style.position = "relative", s.style.height = "100vh", s.style.width = "100vh", s.style.backgroundSize = "100%", s.src = r, n.forEach((e => e(!1, !0))), s
            }
            async function d() {
                await (0, n.getVuex)().dispatch(r.ak(r.Mp))
            }
        },
        71090: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => f
            });
            var n = i(46369),
                r = i(5300),
                o = i.n(r),
                a = i(75232),
                s = i(9722),
                l = i(51122),
                u = i(77629);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function p(e, t) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function g(e) {
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
                    var i, n = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return m(this, i)
                }
            }

            function m(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }
            let f = function(e) {
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
                    }), t && p(e, t)
                }(m, e);
                var t, i, n, r = g(m);

                function m() {
                    return c(this, m), r.apply(this, arguments)
                }
                return t = m, i = [{
                    key: "isTextSizeValid",
                    value: function() {
                        const e = this._getTechnique();
                        if (![l.V_, l.hC, l.uj].includes(e) || (0, u.iz)()) return !0;
                        if (!this._activeLayer.font || this._activeLayer.isGeneratorMockupTextLayerInstance && !(0, a.nr)((0, s.HM)().LOADED_JS_FONTS, this._activeLayer.font.fontKey)) return !0;
                        const t = this._activeLayer.getOriginalClone();
                        t.isGeneratorMockupTextLayerInstance ? o().DEPENDENCIES.TEXT2SVG.TextCalculator(t) : t.isGeneratorMockupTextBoxLayerInstance && o().calculateTextboxPositions(t);
                        const i = t.text.trim().split("\n").length,
                            n = this._getFontOptions();
                        return [l.hC, l.gj].includes(e) ? ((0, s.HM)().CUSTOMIZED_TEXT_SIZES[t.uniqueId] || t.size) > n.minSize : t.position.height / i * t.lineHeight > n.minSize
                    }
                }, {
                    key: "isTextHeightOverUpperLimit",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e) return !1;
                        if (!this._activeLayer.font || this._activeLayer.isGeneratorMockupTextLayerInstance && !(0, a.nr)((0, s.HM)().LOADED_JS_FONTS, this._activeLayer.font.fontKey)) return !1;
                        const t = this._getFontMaxHeight();
                        if (!t) return !1;
                        const i = this._activeLayer.getOriginalClone();
                        i.text = i.text.replace(/\n/g, "");
                        const n = i.isGeneratorMockupTextBoxLayerInstance;
                        return n && o().calculateTextboxPositions(i), i.position.height > t
                    }
                }], i && d(t.prototype, i), n && d(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), m
            }(n.E)
        },
        67187: (e, t, i) => {
            "use strict";
            i.d(t, {
                J3: () => u,
                MY: () => o,
                Mp: () => T,
                Tq: () => _,
                Wz: () => I,
                XZ: () => d,
                ak: () => E,
                f3: () => y,
                iB: () => l,
                mB: () => r,
                mm: () => g,
                oA: () => c,
                pP: () => a,
                r0: () => p,
                rK: () => s,
                si: () => h,
                tk: () => n,
                xO: () => f,
                yu: () => v,
                zG: () => m
            });
            const n = "designer/mockupModule/",
                r = "m_setFlag",
                o = "m_setMockupType",
                a = "m_setMockupProduct",
                s = "m_setMockupProductDesign",
                l = "m_setMockupProductTechnique",
                u = "m_setSelectedVariants",
                c = "m_resetState",
                d = "m_setUsedDesignPlacementIds",
                p = "g_getFlag",
                g = "g_hasCustomMockupAccess",
                m = "g_mockupProduct",
                h = "g_hasSizesSelected",
                f = "g_hasColorsSelected",
                y = "g_isCustomMockupType",
                v = "g_isMockupProductEngravingTechnique",
                _ = "g_canGenerateFilesOnly",
                I = "a_loadCustomMockupAccessFlag",
                T = "a_requireMockupRegeneration";

            function E(e) {
                return n + e
            }
        },
        73388: (e, t, i) => {
            "use strict";
            i.d(t, {
                A2: () => n,
                J5: () => P,
                Jb: () => E,
                K1: () => y,
                L: () => T,
                Mp: () => r,
                Nd: () => o,
                Nx: () => a,
                Q: () => m,
                T4: () => v,
                WI: () => _,
                WP: () => s,
                Zp: () => f,
                _2: () => S,
                bg: () => d,
                eE: () => g,
                gz: () => p,
                iw: () => b,
                rE: () => l,
                rk: () => u,
                tv: () => c,
                uN: () => I,
                xH: () => h,
                yL: () => O
            });
            const n = "designer/multipleProductsModule/",
                r = "m_initOriginDesignedProduct",
                o = "m_setMultipleProductsProductData",
                a = "m_setMultipleProductsActiveGeneratorVariant",
                s = "m_setMultipleProductsProductTechnique",
                l = "m_setMultipleProductsTemplates",
                u = "m_setMultipleProductsPlacementOptions",
                c = "m_clearSuggestedProducts",
                d = "m_setSuggestedProducts",
                p = "m_moveSuggestedProductToDesignedProducts",
                g = "m_setActiveMultipleProductId",
                m = "g_activeMultipleProductId",
                h = "g_originDesignedProduct",
                f = "g_multipleProductByMultipleProductId",
                y = "g_originTemplates",
                v = "g_originPlacementOptions",
                _ = "g_nextAvailableMultipleProductId",
                I = "g_suggestedProducts",
                T = "g_designedProducts",
                E = "g_isOriginDesignReadyForSuggestedProducts",
                P = "a_setupOriginProduct",
                S = "a_loadSuggestedProducts",
                b = "a_onDesignedProductChange",
                O = "a_onSuggestedProductSelected"
        },
        32874: (e, t, i) => {
            "use strict";
            i.d(t, {
                CQ: () => P,
                GW: () => T,
                In: () => f,
                KO: () => c,
                KV: () => y,
                K_: () => m,
                NB: () => p,
                RG: () => a,
                RL: () => o,
                TO: () => d,
                VK: () => v,
                WJ: () => g,
                Wb: () => O,
                Xx: () => u,
                Yv: () => l,
                hN: () => s,
                kM: () => _,
                nY: () => E,
                pg: () => b,
                sN: () => h,
                sP: () => I,
                sq: () => C,
                z7: () => S
            });
            var n = i(79442),
                r = i(91083);

            function o() {
                (0, n.getVuex)().commit(r.ak(r.oA))
            }

            function a() {
                return (0, n.getVuex)().getters[r.ak(r.oK)]
            }

            function s(e) {
                (0, n.getVuex)().commit(r.ak(r.hN), e)
            }

            function l() {
                return (0, n.getVuex)().getters[r.ak(r.jX)]
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.Xx), e)
            }

            function c(e) {
                (0, n.getVuex)().commit(r.ak(r.KO), e)
            }
            async function d(e) {
                await (0, n.getVuex)().dispatch(r.ak(r.TO), e)
            }

            function p(e) {
                return (0, n.getVuex)().getters[r.ak(r.NB)](e)
            }

            function g(e, t) {
                return (0, n.getVuex)().getters[r.ak(r.WJ)](e, t)
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.On)]
            }

            function h(e) {
                return (0, n.getVuex)().getters[r.ak(r.sN)](e)
            }

            function f(e) {
                (0, n.getVuex)().commit(r.ak(r.In), e)
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.B3)]
            }

            function v() {
                return (0, n.getVuex)().getters[r.ak(r.VK)]
            }

            function _(e, t) {
                return (0, n.getVuex)().getters[r.ak(r.kM)](e, t)
            }

            function I() {
                return (0, n.getVuex)().getters[r.ak(r.sP)]
            }
            async function T() {
                await (0, n.getVuex)().dispatch(r.ak(r.GW))
            }
            async function E(e) {
                await (0, n.getVuex)().dispatch(r.ak(r.nY), e)
            }

            function P() {
                return (0, n.getVuex)().getters[r.ak(r.Y0)]
            }

            function S() {
                return (0, n.getVuex)().getters[r.ak(r.eB)]
            }

            function b() {
                return (0, n.getVuex)().getters[r.ak(r.VW)]
            }

            function O() {
                return (0, n.getVuex)().getters[r.ak(r.yX)]
            }

            function C() {
                return (0, n.getVuex)().getters[r.ak(r.DE)]
            }
        },
        91083: (e, t, i) => {
            "use strict";
            i.d(t, {
                B3: () => f,
                DE: () => S,
                GW: () => O,
                In: () => u,
                KO: () => a,
                NB: () => p,
                On: () => m,
                TO: () => b,
                UL: () => l,
                VK: () => y,
                VW: () => E,
                WJ: () => g,
                Xx: () => o,
                Y0: () => I,
                ak: () => L,
                eB: () => T,
                hN: () => r,
                jX: () => d,
                kM: () => v,
                nY: () => C,
                oA: () => n,
                oK: () => c,
                sN: () => h,
                sP: () => _,
                sc: () => s,
                yX: () => P
            });
            const n = "m_resetState",
                r = "m_setAllProductColors",
                o = "m_setSelectedProductColors",
                a = "m_addSelectedProductColor",
                s = "m_updateNonExistentVariants",
                l = "m_updateAvailableColors",
                u = "m_setLastSelectedColorName",
                c = "g_allProductColors",
                d = "g_selectedProductColors",
                p = "g_hasDiscontinuedColorsForSize",
                g = "g_isVariantDiscontinued",
                m = "g_getDiscontinuedColors",
                h = "g_getDiscontinuedColorSelected",
                f = "g_lastSelectedColorName",
                y = "g_hasLastSelectedColor",
                v = "g_isProductColorSelected",
                _ = "g_hasSelectedProductColors",
                I = "g_regionDisabledColors",
                T = "g_selectedProductColorNames",
                E = "g_selectedProductHexColors",
                P = "g_maxProductColorsCount",
                S = "g_canRenderColorPicker",
                b = "a_setDiscontinuedColorsPerSize",
                O = "a_updateProductColorsAndSizes",
                C = "a_updateSelectedColorsAndSizes";

            function L(e) {
                return "designer/productModule/colors/" + e
            }
        },
        64283: (e, t, i) => {
            "use strict";
            i.d(t, {
                $Y: () => o,
                $l: () => c,
                F8: () => a,
                Pc: () => l,
                YM: () => d,
                Zm: () => u,
                kg: () => p,
                vW: () => s
            });
            var n = i(79442),
                r = i(53640);

            function o(e) {
                (0, n.getVuex)().commit(r.getNamespacedCall(r.setInitialConfig), e)
            }

            function a() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.productConfigState)]
            }

            function s() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.isProductTemplateEditor)]
            }

            function l() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.isCreatingProductFromTemplate)]
            }

            function u() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.isProductTemplateDetailsEditor)]
            }

            function c() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.shouldUseFullTemplateEditor)]
            }

            function d() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.shouldAllowFileColorChanger)]
            }

            function p() {
                return (0, n.getVuex)().getters[r.getNamespacedCall(r.isTechniquePickerAvailable)]()
            }
        },
        53640: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                DESIGNER_CONFIG_NAMESPACE: () => n,
                getNamespacedCall: () => p,
                isCreatingProductFromTemplate: () => s,
                isProductTemplateDetailsEditor: () => l,
                isProductTemplateEditor: () => a,
                isTechniquePickerAvailable: () => d,
                productConfigState: () => o,
                setInitialConfig: () => r,
                shouldAllowFileColorChanger: () => c,
                shouldUseFullTemplateEditor: () => u
            });
            const n = "designer/productModule/config/",
                r = "m_setInitialConfig",
                o = "g_productConfigState",
                a = "g_isProductTemplateEditor",
                s = "g_isCreatingProductFromTemplate",
                l = "g_isProductTemplateDetailsEditor",
                u = "g_shouldUseFullTemplateEditor",
                c = "g_shouldAllowFileColorChanger",
                d = "g_isTechniquePickerAvailable";

            function p(e) {
                return n + e
            }
        },
        99361: (e, t, i) => {
            "use strict";
            i.d(t, {
                F: () => a,
                p: () => s
            });
            i(81841);
            var n = i(64283),
                r = i(77629),
                o = i(11876);

            function a(e) {
                const t = [o.tN, o.aD],
                    i = [o.Pr, o.IK, o.uY, o.wG, o._q, o.vP, o.F$, o.PF, o.$o, o.Z_, o.eo, o.$0, o.J4, o.SK, o.Yw, o.nq, o.iw, o.jl, o.m1, o.UG, o.vZ, o.LS, o.ix, o.$b];
                return ((0, n.F8)().isMockupGeneratorMode && t.includes(e.name) || (0, n.YM)() && i.includes(e.name)) && (e.visible = !1), e
            }

            function s(e) {
                if (!(0, r.ej)()) return e;
                const t = o.Pr;
                return (0, r.Vt)() && t in e && "flat" !== e[t] && (e[t] = "flat"), e
            }
        },
        81312: (e, t, i) => {
            "use strict";
            i.d(t, {
                GE: () => g,
                M3: () => d,
                N5: () => o,
                ZF: () => l,
                a0: () => c,
                ak: () => m,
                cM: () => s,
                jU: () => n,
                kb: () => a,
                oA: () => r,
                qw: () => p,
                sq: () => u
            });
            const n = "designer/productModule/options/",
                r = "m_resetState",
                o = "m_setProductOrientation",
                a = "m_setProductTemplateType",
                s = "m_setProductStitchColor",
                l = "g_productOrientation",
                u = "g_productTemplateType",
                c = "g_isAdvancedProductTemplateType",
                d = "g_forcedProductTemplateType",
                p = "g_isAdvancedProductTemplateAvailable",
                g = "g_productOptions";

            function m(e) {
                return n + e
            }
        },
        77629: (e, t, i) => {
            "use strict";
            i.d(t, {
                DV: () => P,
                EO: () => d,
                HE: () => p,
                IT: () => h,
                Io: () => c,
                Kc: () => s,
                L: () => v,
                Mz: () => _,
                NL: () => a,
                Vt: () => m,
                Xl: () => f,
                ed: () => y,
                ej: () => g,
                hL: () => I,
                iz: () => u,
                kw: () => E,
                lj: () => S,
                op: () => l,
                pN: () => o,
                x3: () => T
            });
            var n = i(79442),
                r = i(72458);

            function o() {
                (0, n.getVuex)().commit(r.ak(r.oA))
            }
            async function a() {
                await (0, n.getVuex)().dispatch(r.ak(r.oE))
            }

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.Db)]
            }

            function l() {
                return (0, n.getVuex)().getters[r.ak(r.op)]
            }

            function u() {
                return (0, n.getVuex)().getters[r.ak(r.iz)]
            }

            function c() {
                return (0, n.getVuex)().getters[r.ak(r.Io)]
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.EO)]
            }

            function p() {
                return (0, n.getVuex)().getters[r.ak(r.HE)]
            }

            function g() {
                return (0, n.getVuex)().getters[r.ak(r.ej)]
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.Vt)]
            }

            function h() {
                return (0, n.getVuex)().getters[r.ak(r.IT)]
            }

            function f(e) {
                (0, n.getVuex)().commit(r.ak(r.Xl), e)
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.RX)]
            }

            function v(e) {
                (0, n.getVuex)().commit(r.ak(r.L), e)
            }

            function _() {
                return (0, n.getVuex)().getters[r.ak(r.Mz)]
            }

            function I(e) {
                (0, n.getVuex)().commit(r.ak(r.hL), e)
            }

            function T(e) {
                (0, n.getVuex)().commit(r.ak(r.x3), e)
            }

            function E(e) {
                (0, n.getVuex)().commit(r.ak(r.kw), e)
            }

            function P() {
                return (0, n.getVuex)().getters[r.ak(r.DV)]
            }

            function S() {
                return (0, n.getVuex)().getters[r.ak(r.w)]
            }
        },
        72458: (e, t, i) => {
            "use strict";
            i.d(t, {
                $9: () => m,
                DV: () => S,
                Db: () => d,
                EO: () => f,
                HE: () => y,
                IT: () => I,
                Io: () => h,
                L: () => s,
                Ms: () => O,
                Mz: () => E,
                RX: () => T,
                Vt: () => _,
                Xl: () => a,
                aQ: () => n,
                ak: () => L,
                ej: () => v,
                hL: () => u,
                iz: () => g,
                kw: () => c,
                oA: () => r,
                oE: () => C,
                op: () => p,
                qP: () => P,
                w: () => b,
                x3: () => l,
                xu: () => o
            });
            const n = "designer/productModule/placements/",
                r = "m_resetState",
                o = "m_addExcludedPlacement",
                a = "m_setInsideLabelMockupPosition",
                s = "m_setHasInsideLabelColorGroup",
                l = "m_setIsPlacementGridVisible",
                u = "m_setAvailablePlacements",
                c = "m_setPlacementPrices",
                d = "g_excludedProductPlacements",
                p = "g_isSelectedPlacementTechniqueEmbroidery",
                g = "g_isSelectedPlacementTechniqueDTG",
                m = "g_isSelectedPlacementTechniqueDTFILM",
                h = "g_doesSelectedPlacementSupportDTGFeatures",
                f = "g_isSelectedPlacementInsideLabel",
                y = "g_isSelectedPlacementLargeEmbroidery",
                v = "g_isSelectedPlacementEmbroideryFront",
                _ = "g_isEmbroideryWithText",
                I = "g_canRenderNativeInsideLabelSelection",
                T = "g_insideLabelMockupPosition",
                E = "g_hasInsideLabelColorGroup",
                P = "g_canShowPlacementPrice",
                S = "g_hasMultiplePlacements",
                b = "g_activePlacement",
                O = "g_placementPrices",
                C = "a_updateExcludedPlacements";

            function L(e) {
                return n + e
            }
        },
        33058: (e, t, i) => {
            "use strict";
            i.d(t, {
                GH: () => y,
                I4: () => s,
                NW: () => d,
                QA: () => f,
                QJ: () => T,
                Wg: () => u,
                X1: () => l,
                Zu: () => h,
                _u: () => E,
                ak: () => P,
                au: () => p,
                dG: () => a,
                fn: () => n,
                hd: () => c,
                iu: () => _,
                oA: () => r,
                qw: () => v,
                sv: () => m,
                t9: () => g,
                tc: () => I,
                zl: () => o
            });
            const n = "designer/productModule/pricing/",
                r = "m_resetState",
                o = "m_setIsCalculating",
                a = "m_setIsUsingEmbroideryPredictions",
                s = "m_setEmbroideryTaskId",
                l = "m_setEmbroideryTiers",
                u = "m_setSelectedTier",
                c = "m_setFetchingTiersPromise",
                d = "m_setCurrency",
                p = "m_setProductionCurrency",
                g = "g_getEmbroideryCost",
                m = "g_isEmbroideryCostSet",
                h = "g_isCalculating",
                f = "g_isUsingEmbroideryPredictions",
                y = "g_embroideryTaskId",
                v = "g_embroideryTiers",
                _ = "g_selectedEmbroideryTier",
                I = "g_isCalculating",
                T = "a_calculateEmbroideryCosts",
                E = "a_fetchEmbroideryTiers";

            function P(e) {
                return n + e
            }
        },
        67799: (e, t, i) => {
            "use strict";
            i.d(t, {
                C3: () => p,
                Df: () => a,
                Dz: () => h,
                HP: () => s,
                KC: () => b,
                L8: () => g,
                LX: () => o,
                Ol: () => T,
                QO: () => m,
                Qx: () => v,
                T9: () => O,
                TG: () => _,
                WQ: () => I,
                ZE: () => f,
                d$: () => E,
                e: () => u,
                eU: () => d,
                jb: () => y,
                ln: () => S,
                nB: () => P,
                xH: () => l,
                zj: () => c
            });
            var n = i(79442),
                r = i(81070);

            function o() {
                (0, n.getVuex)().commit(r.ak(r.oA))
            }

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.Df), e)
            }

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.Fj)]
            }

            function l(e) {
                (0, n.getVuex)().commit(r.ak(r.Au), e)
            }

            function u() {
                return (0, n.getVuex)().getters[r.ak(r.xF)]
            }

            function c(e) {
                (0, n.getVuex)().commit(r.ak(r.zj), e)
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.eP)]
            }

            function p() {
                (0, n.getVuex)().commit(r.ak(r.Vo))
            }

            function g(e) {
                return (0, n.getVuex)().getters[r.ak(r.wr)](e)
            }

            function m(e) {
                (0, n.getVuex)().commit(r.ak(r.QO), e)
            }

            function h() {
                return (0, n.getVuex)().getters[r.ak(r.FJ)]
            }

            function f(e) {
                (0, n.getVuex)().commit(r.ak(r.ZE), e)
            }

            function y() {
                return (0, n.getVuex)().getters[r.ak(r.Z9)]
            }

            function v(e) {
                (0, n.getVuex)().commit(r.ak(r.Qx), e)
            }

            function _() {
                return (0, n.getVuex)().getters[r.ak(r.qU)]
            }

            function I(e, t) {
                return (0, n.getVuex)().getters[r.ak(r.WQ)](e, t)
            }

            function T() {
                return (0, n.getVuex)().getters[r.ak(r.Ol)]
            }

            function E() {
                return (0, n.getVuex)().getters[r.ak(r.X2)]
            }

            function P() {
                return (0, n.getVuex)().getters[r.ak(r.jR)]
            }

            function S() {
                return (0, n.getVuex)().getters[r.ak(r.IW)]
            }
            async function b(e) {
                return (0, n.getVuex)().dispatch(r.ak(r.V7), e)
            }
            async function O() {
                return (0, n.getVuex)().dispatch(r.ak(r.T9))
            }
        },
        81070: (e, t, i) => {
            "use strict";
            i.d(t, {
                Au: () => o,
                Df: () => r,
                FJ: () => f,
                Fj: () => p,
                IW: () => S,
                Ol: () => I,
                QO: () => u,
                Qx: () => d,
                T9: () => O,
                V7: () => C,
                Vo: () => l,
                WQ: () => _,
                X2: () => E,
                Z9: () => y,
                ZE: () => c,
                ak: () => L,
                eP: () => m,
                jR: () => P,
                jt: () => s,
                oA: () => n,
                qU: () => v,
                wr: () => h,
                xF: () => g,
                xH: () => T,
                yF: () => b,
                zj: () => a
            });
            const n = "m_resetState",
                r = "m_setAllProductSizes",
                o = "m_setSelectedProductSizes",
                a = "m_addSelectedProductSize",
                s = "m_setAvailableSizes",
                l = "m_updateInitialSizes",
                u = "m_setTranslatedProductSizes",
                c = "m_setDisabledProductSizes",
                d = "m_setLastSelectedProductSize",
                p = "g_allProductSizes",
                g = "g_selectedProductSizes",
                m = "g_availableProductSizes",
                h = "g_areSizesSameAsInitial",
                f = "g_translatedProductSizes",
                y = "g_disabledProductSizes",
                v = "g_lastSelectedProductSize",
                _ = "g_isProductSizeSelected",
                I = "g_hasSelectedProductSizes",
                T = "g_fakeSelectedSizes",
                E = "g_availableProductSizeCount",
                P = "g_maxProductSizeCount",
                S = "g_shouldRenderSizePicker",
                b = "a_recalcSelectedProductSizes",
                O = "a_recalcAvailableProductSizes",
                C = "a_canRenderSizePicker";

            function L(e) {
                return "designer/productModule/sizes/" + e
            }
        },
        11762: (e, t, i) => {
            "use strict";
            i.d(t, {
                B$: () => l,
                Ru: () => c,
                Xk: () => d,
                cx: () => s,
                m7: () => u
            });
            var n = i(65163),
                r = i(22277),
                o = i(51122),
                a = i(87826);

            function s(e) {
                return e.areLayersOverlapping({
                    allowedExceptions: [{
                        layerProperty: "engravingStyle",
                        layerPropertyValues: [n.S.ENGRAVING_FILLED]
                    }, {
                        layerProperty: "engravingStyle",
                        layerPropertyValues: [n.S.ENGRAVING_OUTLINE]
                    }]
                })
            }

            function l(e) {
                var t;
                (0, r.WU)().isJewelry() && function(e) {
                    if (e.isTextLayer()) e.engravingStyle = e.engravingStyle ? n.S.ENGRAVING_OUTLINE : n.S.ENGRAVING_FILLED;
                    else if (e.isClipartLayer()) {
                        var t;
                        e.engravingStyle = null !== (t = e.clipartItem.extra) && void 0 !== t && t.engravingStyle ? n.S.ENGRAVING_OUTLINE : n.S.ENGRAVING_FILLED, e.fillColor = e.getDefaultColor()
                    }
                }(e), !e.fillColor && null !== (t = e.clipartItem) && void 0 !== t && t.customizable && (e.fillColor = e.getDefaultColor())
            }

            function u(e, t) {
                return null != e && e.isJewelry() ? o.hC : t
            }

            function c(e) {
                for (const i of e) {
                    var t;
                    if (null != i && null !== (t = i.options) && void 0 !== t && t.fullColor) return i.options.fullColor
                }
                return d(e) === a.cD
            }

            function d(e) {
                for (const i of e) {
                    var t;
                    if (null != i && null !== (t = i.options) && void 0 !== t && t.subTechniqueType) return i.options.subTechniqueType
                }
                return null
            }
        },
        73287: (e, t, i) => {
            "use strict";
            i.d(t, {
                $P: () => p,
                BZ: () => g,
                W1: () => s,
                Zf: () => o,
                b6: () => c,
                fS: () => a,
                lW: () => d,
                nk: () => m,
                pX: () => h,
                vL: () => l,
                w4: () => f,
                yf: () => u
            });
            var n = i(79442),
                r = i(40142);

            function o() {
                return (0, n.getVuex)().getters[r.ak(r.Zf)]
            }

            function a(e) {
                return (0, n.getVuex)().getters[r.ak(r.fS)](e)
            }

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.RB)]
            }

            function l() {
                return (0, n.getVuex)().getters[r.ak(r.Vn)]
            }

            function u() {
                return (0, n.getVuex)().getters[r.ak(r.yf)]
            }

            function c() {
                return (0, n.getVuex)().getters[r.ak(r.b6)]
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.lW)]
            }

            function p(e) {
                return (0, n.getVuex)().getters[r.ak(r.$P)](e)
            }

            function g(e) {
                return (0, n.getVuex)().getters[r.ak(r.BZ)](e)
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.nk)]
            }

            function h(e) {
                return (0, n.getVuex)().getters[r.ak(r.pX)](e)
            }

            function f(e) {
                (0, n.getVuex)().commit(r.ak(r.w4), e)
            }
        },
        40142: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => c,
                $P: () => m,
                BZ: () => h,
                Lz: () => v,
                Nz: () => n,
                RB: () => l,
                Vn: () => u,
                Zf: () => o,
                ak: () => _,
                b6: () => p,
                fS: () => s,
                fm: () => a,
                lW: () => g,
                nk: () => f,
                pX: () => y,
                w4: () => r,
                yf: () => d
            });
            const n = "designer/productModule/technique/",
                r = "m_setEmbroiderySubTechnique",
                o = "g_isZoomedTemplateShown",
                a = "g_isZoomedTemplate",
                s = "g_getInitProductTechnique",
                l = "g_availableProductTechniques",
                u = "g_availableGroupedProductTechniques",
                c = "g_isDtgProductTechnique",
                d = "g_isEmbroideryProductTechnique",
                p = "g_isEngravingProductTechnique",
                g = "g_isStockProductTechnique",
                m = "g_getEmbroideryErrorsForType",
                h = "g_getTechniqueDependentErrorsForType",
                f = "g_isDesignForTechniqueValid",
                y = "g_isAllOverProduct",
                v = "g_productTechnique";

            function _(e) {
                return n + e
            }
        },
        9617: (e, t, i) => {
            "use strict";
            i.d(t, {
                H2: () => g,
                K$: () => u,
                KD: () => d,
                sQ: () => c
            });
            var n = i(62186),
                r = i(97993),
                o = i(67799),
                a = i(30663),
                s = i(27707);

            function l() {
                let e = `<b>${dlang("generator","You've exceeded your store's variant limit per product.")}</b> `,
                    t = "";
                const i = (0, n.B_)(),
                    r = (0, n.b6)();
                return r ? (t = 1 === r ? 1 === i ? dlang("generator", "You selected {0} including existing {1} variant, but the limit is {2} variant.") : dlang("generator", "You selected {0} additionally to existing {1} variants, but the limit is {2} variants.") : 1 === i ? dlang("generator", "You selected {0} including existing {1} variants, but the limit is {2} variant.") : dlang("generator", "You selected {0} additionally to existing {1} variants, but the limit is {2} variants."), e += t.format(`<b>${(0,n.uZ)()}</b>`, `<b>${r}</b>`, `<b>${i}</b>`)) : e += dnlang("generator", "You selected {0}, but the limit is {1} variant.", "You selected {0}, but the limit is {1} variants.", i).format(`<b>${(0,n.uZ)()}</b>`, `<b>${i}</b>`), e
            }

            function u(e, t) {
                if (!e || !t) return [];
                const i = t.map((e => e.variantId));
                return e.filter((e => i.includes(e.variantId))).map((e => e.variantId))
            }

            function c() {
                return (0, n.a1)() ? tag("div", "alert alert-danger", [tag("span", {
                    innerHTML: l()
                }), tag("br"), dlang("generator", "Try un-checking some colors or sizes, or create a new product if necessary.")]) : null
            }

            function d() {
                const e = (0, n.Aw)();
                return e ? tag("div", {
                    className: "alert alert-danger",
                    innerHTML: `<b>${dlang("dashboard","You've exceeded the total quantity of variants eBay allows you to add this month.")}</b> ` + dlang("dashboard", "You're attempting to add {0} variants, but your remaining available eBay item quantity this month is {1} new items (variants).").format(`<b>${e.used}</b>`, `<b>${e.limit}</b>`) + `<br/>${dclang("dashboard","eBay product push","Try un-checking some colors or sizes.")}`
                }) : null
            }

            function p(e, t) {
                return e.map((e => (0, n.vv)(e, t))).map((e => e.templateId)).filter(((e, t, i) => i.indexOf(e) === t))
            }
            async function g(e, t) {
                const {
                    resizeLayerToNewAreaSize: l
                } = await i.e(76978).then(i.bind(i, 18686)), u = (0, o.TG)(), c = e.find((e => e.size === u)), d = [], g = Object.keys(c.templateIds || {}).concat(Object.keys(c.mockupIds || {})).filter(((e, t, i) => i.indexOf(e) === t && !a.c7.includes(e)));
                for (const i of g) {
                    const r = (0, n.vv)(c, i),
                        o = p(e, i),
                        a = (0, s.F)(t, r);
                    if (1 === o.length || a.layers.length) continue;
                    let u = null;
                    for (const e of o) {
                        const n = t.getUserTemplate(i, e);
                        if (e !== a.templateId && n.layers.length) {
                            u = n;
                            break
                        }
                    }
                    u && (a.layers = u.layers.map((e => {
                        const t = e.getOriginalClone(!0);
                        return l(t, a.width, a.height), t
                    })), d.push(a))
                }(0, r.Eb)(d)
            }
        },
        22277: (e, t, i) => {
            "use strict";
            i.d(t, {
                WN: () => _,
                WU: () => s,
                E6: () => m,
                Tu: () => g,
                CH: () => v,
                ND: () => h,
                VE: () => I,
                uh: () => y,
                QF: () => l,
                Qj: () => u,
                JS: () => c,
                lT: () => f,
                yZ: () => p,
                Qz: () => d,
                J0: () => T
            });
            var n = i(79442),
                r = i(74130);
            const o = Class({
                product: null,
                isProductPickable: !0,
                isSync: !1,
                technique: null,
                onProductPickedCallback: function() {
                    console.error("No 'onProductPickedCallback' provided")
                },
                isMockupGeneratorMode: !1,
                productTemplateEditorState: !1,
                isOrderFlowMode: !1,
                storeId: null
            });
            window && ((globalThis || {}).PFProductPushInlineProductPickerPar = o);
            var a = i(78009);

            function s() {
                return (0, n.getVuex)().getters[r.ak(r.mZ)]
            }

            function l(e) {
                (0, n.getVuex)().commit(r.ak(r.Sz), {
                    productItem: e
                })
            }

            function u(e) {
                (0, n.getVuex)().commit(r.ak(r.Qj), e)
            }

            function c(e) {
                (0, n.getVuex)().commit(r.ak(r.JS), e)
            }

            function d(e) {
                (0, n.getVuex)().commit(r.ak(r.Qz), e)
            }

            function p(e) {
                (0, n.getVuex)().commit(r.ak(r.yZ), e)
            }

            function g() {
                return (0, n.getVuex)().getters[r.ak(r.Lz)]
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.gN)]
            }

            function h() {
                return !!(0, n.getVuex)().getters[r.ak(r.mZ)]
            }

            function f(e) {
                (0, n.getVuex)().commit(r.ak(r.lT), {
                    placements: e
                })
            }

            function y(e) {
                return (0, n.getVuex)().getters[r.ak(r.sU)].includes(e)
            }

            function v() {
                return (0, n.getVuex)().getters[r.ak(r._4)]
            }

            function _(e, t, i, n, r, s, l, u) {
                const c = o;
                switch (a.CQ.catalogType) {
                    case a.dB.TYPE_MG:
                        c.isMockupGeneratorMode = e.isActive, c.onProductPickedCallback = e.callback;
                        break;
                    case a.dB.TYPE_PUSH:
                        c.productTemplateEditorState = t.isActive, c.onProductPickedCallback = t.callback.bind(this);
                        break;
                    case a.dB.TYPE_OF:
                        c.isOrderFlowMode = i.isActive, c.onProductPickedCallback = i.callback.bind(this);
                        break;
                    case a.dB.TYPE_PP:
                        c.onProductPickedCallback = n.callback
                }
                return c.isProductPickable = !r && !l && !u, c.isSync = r, c.technique = g(), c.storeId = s, c
            }

            function I(e, t, i, n) {
                e && !confirm(lang("Changes that you made may not be saved. Are you sure?")) || (t(), n(i))
            }

            function T(e) {
                try {
                    location.assign(e)
                } catch (t) {
                    location.href = e
                }
            }
        },
        74130: (e, t, i) => {
            "use strict";
            i.d(t, {
                JS: () => u,
                Lz: () => m,
                Qj: () => c,
                Qz: () => s,
                Sz: () => r,
                Y7: () => a,
                _4: () => f,
                ak: () => y,
                gN: () => h,
                i2: () => g,
                lT: () => o,
                mZ: () => d,
                r1: () => n,
                sU: () => p,
                yZ: () => l
            });
            const n = "designer/productModule",
                r = "m_setProductItem",
                o = "m_setPlacementsWithOnlyBackgroundColor",
                a = "m_setOptionGroupTagInfo",
                s = "m_setProductTechnique",
                l = "m_setProductPlacementTechnique",
                u = "m_setLabelTemplateType",
                c = "m_setIsProductLoaded",
                d = "g_productItem",
                p = "g_placementsWithOnlyBackgroundColor",
                g = "g_optionGroupTagInfo",
                m = "g_productTechnique",
                h = "g_productPlacementTechnique",
                f = "g_productWarningMessage";

            function y(e) {
                return n + "/" + e
            }
        },
        35450: (e, t, i) => {
            "use strict";

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s(n.key), n)
                }
            }

            function r(e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, i) {
                return (t = s(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
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
            i.d(t, {
                e: () => l
            });
            let l = r((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e), a(this, "key", ""), a(this, "label", ""), a(this, "options", []), this.key = t.key, this.label = t.label, this.options = t.options
            }))
        },
        22662: (e, t, i) => {
            "use strict";
            i.d(t, {
                C: () => n
            });
            const n = {
                TEXT: "text",
                COLOR: "color",
                FONT: "font",
                TRANSFORM: "transform",
                POSITION: "position",
                ARC: "arc",
                OUTLINE: "outline",
                SHADOW: "shadow",
                CROP: "crop",
                REMOVE_BACKGROUND: "remove_background",
                EMBROIDERY_DETAILS: "embroidery_details",
                PATTERN: "pattern",
                ANIMATION: "animation",
                ALIGN_HORIZONTALLY: "align_horizontally"
            }
        },
        1256: (e, t, i) => {
            "use strict";
            i.d(t, {
                QI: () => n,
                ZY: () => s,
                _k: () => u,
                ak: () => c,
                l6: () => l,
                uG: () => r,
                uS: () => a,
                xu: () => o
            });
            const n = "designer/toolbarModule/",
                r = "m_setActiveView",
                o = "m_setButtonWidth",
                a = "g_activeView",
                s = "g_buttons",
                l = "g_layerTypesConfig",
                u = "a_onToolbarButtonSelect";

            function c(e) {
                return n + e
            }
        },
        24552: (e, t, i) => {
            "use strict";
            i.d(t, {
                HN: () => o,
                KW: () => n,
                Pq: () => s,
                ZH: () => r,
                wx: () => a
            });
            const n = {
                    UNDO: "undo",
                    REDO: "redo"
                },
                r = 150,
                o = 500,
                a = "undo_redo",
                s = {
                    IDLE: "idle",
                    BUSY: "busy"
                }
        },
        18838: (e, t, i) => {
            "use strict";
            i.d(t, {
                Hl: () => p,
                Kw: () => r,
                MI: () => l,
                UE: () => o,
                Ym: () => g,
                ak: () => m,
                eT: () => u,
                fF: () => n,
                fs: () => s,
                g4: () => d,
                n: () => a,
                yG: () => c
            });
            const n = "designer/undoModule/",
                r = "m_updateUndoHistory",
                o = "m_updateCurrentStep",
                a = "m_addPlacementOptionsHistory",
                s = "m_clearUndoRedoHistory",
                l = "m_recalculateUndoRedoHistory",
                u = "m_setUndoStatus",
                c = "g_activeUndoHistoryKey",
                d = "g_activeUndoHistoryStep",
                p = "g_activeUndoHistoryMaxStep",
                g = "a_saveUndoHistory";

            function m(e) {
                return n + e
            }
        },
        5781: (e, t, i) => {
            "use strict";
            i.d(t, {
                $e: () => p,
                AD: () => o,
                D3: () => s,
                Go: () => a,
                T8: () => l,
                Uh: () => u,
                uE: () => c,
                zY: () => d
            });
            var n = i(79442),
                r = i(73824);
            async function o(e) {
                await (0, n.getVuex)().dispatch(r.ak(r.lo), {
                    variantItems: e
                })
            }

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.Go), e)
            }

            function s(e) {
                (0, n.getVuex)().commit(r.ak(r.D3), e)
            }

            function l() {
                (0, n.getVuex)().commit(r.ak(r.T8))
            }

            function u() {
                return (0, n.getVuex)().getters[r.ak(r.Uh)]
            }

            function c() {
                return (0, n.getVuex)().getters[r.ak(r.uE)]
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.zY)]
            }

            function p() {
                return (0, n.getVuex)().getters[r.ak(r.$e)]
            }
        },
        90583: (e, t, i) => {
            "use strict";
            i.d(t, {
                Qg: () => r,
                g7: () => n,
                vP: () => o
            });
            const n = {
                    T_SHIRT_INSIDE_LABEL_DARK: "T-SHIRT-INSIDE-LABEL-DARK",
                    T_SHIRT_INSIDE_LABEL_COLOR: "T-SHIRT-INSIDE-LABEL-COLOR",
                    T_SHIRT_INSIDE_LABEL_LIGHT: "T-SHIRT-INSIDE-LABEL-LIGHT",
                    T_SHIRT_INSIDE_LABEL_SMALL_DARK: "T-SHIRT-INSIDE-LABEL-SMALL-DARK",
                    T_SHIRT_INSIDE_LABEL_SMALL_COLOR: "T-SHIRT-INSIDE-LABEL-SMALL-COLOR",
                    T_SHIRT_INSIDE_LABEL_SMALL_LIGHT: "T-SHIRT-INSIDE-LABEL-SMALL-LIGHT",
                    T_SHIRT_INSIDE_LABEL_2x2_DARK: "T-SHIRT-INSIDE-LABEL-2x2-DARK",
                    T_SHIRT_INSIDE_LABEL_2x2_COLOR: "T-SHIRT-INSIDE-LABEL-2x2-COLOR",
                    T_SHIRT_INSIDE_LABEL_2x2_LIGHT: "T-SHIRT-INSIDE-LABEL-2x2-LIGHT",
                    T_SHIRT_INSIDE_LABEL_NATIVE: "T-SHIRT-INSIDE-LABEL-NATIVE",
                    T_SHIRT_INSIDE_LABEL_NATIVE_SMALL: "T-SHIRT-INSIDE-LABEL-NATIVE-SMALL",
                    T_SHIRT_INSIDE_LABEL_NATIVE_2x2: "T-SHIRT-INSIDE-LABEL-NATIVE-2x2",
                    T_SHIRT_INSIDE_LABEL: "T-SHIRT-INSIDE-LABEL",
                    T_SHIRT_INSIDE_LABEL_SMALL: "T-SHIRT-INSIDE-LABEL-SMALL",
                    T_SHIRT_INSIDE_LABEL_2x2: "T-SHIRT-INSIDE-LABEL-2x2"
                },
                r = {
                    [n.T_SHIRT_INSIDE_LABEL_DARK]: dlang("generator", "Dark colors"),
                    [n.T_SHIRT_INSIDE_LABEL_COLOR]: dlang("generator", "Bright colors"),
                    [n.T_SHIRT_INSIDE_LABEL_LIGHT]: dlang("generator", "Light colors"),
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_DARK]: dlang("generator", "Dark colors"),
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_COLOR]: dlang("generator", "Bright colors"),
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_LIGHT]: dlang("generator", "Light colors"),
                    [n.T_SHIRT_INSIDE_LABEL_2x2_DARK]: dlang("generator", "Dark colors"),
                    [n.T_SHIRT_INSIDE_LABEL_2x2_COLOR]: dlang("generator", "Bright colors"),
                    [n.T_SHIRT_INSIDE_LABEL_2x2_LIGHT]: dlang("generator", "Light colors")
                },
                o = {
                    [n.T_SHIRT_INSIDE_LABEL_DARK]: "#FFFFFF",
                    [n.T_SHIRT_INSIDE_LABEL_COLOR]: "#000000",
                    [n.T_SHIRT_INSIDE_LABEL_LIGHT]: "#000000",
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_DARK]: "#FFFFFF",
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_COLOR]: "#000000",
                    [n.T_SHIRT_INSIDE_LABEL_SMALL_LIGHT]: "#000000",
                    [n.T_SHIRT_INSIDE_LABEL_2x2_DARK]: "#FFFFFF",
                    [n.T_SHIRT_INSIDE_LABEL_2x2_COLOR]: "#000000",
                    [n.T_SHIRT_INSIDE_LABEL_2x2_LIGHT]: "#000000"
                }
        },
        73824: (e, t, i) => {
            "use strict";
            i.d(t, {
                $X: () => p,
                $e: () => h,
                AD: () => r,
                Ag: () => a,
                D3: () => o,
                Go: () => s,
                MJ: () => d,
                T8: () => l,
                Uh: () => u,
                Ze: () => n,
                _f: () => g,
                ak: () => v,
                lo: () => y,
                s1: () => f,
                uE: () => c,
                zY: () => m
            });
            const n = "designer/variantAreaModule/",
                r = "m_setVariantItems",
                o = "m_setActiveGeneratorVariant",
                a = "m_setActiveLabelTechnique",
                s = "m_setVariantColorWarnings",
                l = "m_clearVariantColorWarnings",
                u = "g_getVariantItems",
                c = "g_getActiveGeneratorVariant",
                d = "g_getVariantItemById",
                p = "g_getLabelTechniques",
                g = "g_getActiveLabelTechnique",
                m = "g_getVariantColorWarnings",
                h = "g_hasVariantColorWarnings",
                f = "g_getVariantItemIds",
                y = "a_onSetVariantItems";

            function v(e) {
                return n + e
            }
        },
        98932: (e, t, i) => {
            "use strict";
            i.d(t, {
                n: () => D
            });
            var n = i(60416),
                r = i(97993),
                o = i(56281),
                a = i(67633),
                s = i(4473),
                l = i(22277),
                u = i(9722),
                c = i(5300),
                d = i.n(c),
                p = i(58232);
            const g = "GENERATE",
                m = "COLOR_CHECK";
            var h = i(44880),
                f = i(75232),
                y = i(279),
                v = i(20833);
            const _ = "SAFARI",
                I = "CHROME",
                T = "FIREFOX",
                E = "EDGE",
                P = "OPERA",
                S = "OTHER";

            function b(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, C(n.key), n)
                }
            }

            function O(e, t, i) {
                return (t = C(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function C(e) {
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
            let L = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, o, a;
                return t = e, a = [{
                    key: "setPreviewStringFromTemplateWithWebWorker",
                    value: async function(t, i, o, a, u) {
                        var c, d;
                        let p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                            m = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                            y = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
                        const v = a && await (0, n.GE)(t) && (0, r.ew)(),
                            _ = (0, f.IS)(o || {}),
                            I = Object.assign({}, {
                                productColors: [],
                                productColor: {},
                                isReadOnly: !0,
                                textToPng: !0,
                                canvasParams: {
                                    useLifelike: v
                                },
                                embroideryParams: {
                                    embroideryOutlineColor: p,
                                    embroideryOutlineSvgPath: t.svgPath,
                                    hasEmbroideryOutline: s.W.PATCHES.includes(null === (c = (0, l.WU)()) || void 0 === c ? void 0 : c.productId),
                                    outlineWidth: t.getOutlineWidth(),
                                    outlineScaleX: t.getOutlineScaleX(),
                                    outlineScaleY: t.getOutlineScaleY()
                                },
                                isMaskSvgPathCentered: s.W.PATCHES.includes(null === (d = (0, l.WU)()) || void 0 === d ? void 0 : d.productId)
                            }, _);
                        if (I.fill && (I.fill.designFillItem = {}, I.fill.designFillType === h.Ph)) {
                            const t = I.fill.designFillUrls.large,
                                i = await e.preloadImage(t);
                            I.fill.designFillUrls.large = i
                        }
                        const T = t.layersToArray(m, !1),
                            {
                                imageBlobUrl: E,
                                newLifelikeVariants: P
                            } = await e.generateImage(i, I, T, g, a, y);
                        return new Promise(((e, t) => {
                            E ? e({
                                imageBlobUrl: E,
                                newLifelikeVariants: P
                            }) : t()
                        }))
                    }
                }, {
                    key: "generateImage",
                    value: async function(t, i, n, r, o, a) {
                        const s = D.getDesignHash(i, t, n, o && r !== m),
                            l = D.getCache(s, t);
                        if (l) return l.process;
                        const u = new Promise((o => {
                            D.recolorFileLayers(n, a).then((n => {
                                e.generateTextLayerImages(t, i, n).then((n => {
                                    e.generateImageLayers(n).then((n => {
                                        e.webWorkerProcessHandler(t, i, n, r, s).then((e => {
                                            var t;
                                            o({
                                                imageBlobUrl: e.blobURL,
                                                newLifelikeVariants: null === (t = e.data) || void 0 === t ? void 0 : t.newLifelikeVariants
                                            })
                                        }))
                                    }))
                                }))
                            }))
                        }));
                        return D.setCache(s, t, u), u
                    }
                }, {
                    key: "webWorkerProcessHandler",
                    value: function(t, i, n, r, o) {
                        const a = Math.random().toString(36).substring(2);
                        return new Promise((s => {
                            switch (r) {
                                case g:
                                    e.initWorker(g).then((() => {
                                        e.workers.generatorWorker.postMessage({
                                            position: t,
                                            options: i,
                                            layers: n,
                                            action: g,
                                            taskHash: a
                                        }), e.workerTaskCallbacks[a] = t => {
                                            const i = URL.createObjectURL(t.data.blob);
                                            e.blobCache[o] = {
                                                url: i,
                                                data: t.data
                                            }, s({
                                                blobURL: i,
                                                data: t.data
                                            })
                                        }
                                    }));
                                    break;
                                case m:
                                    e.initWorker(m).then((() => {
                                        e.workers.colorCheckWorker.postMessage({
                                            position: t,
                                            options: i,
                                            layers: n,
                                            action: m,
                                            taskHash: a
                                        }), e.workerTaskCallbacks[a] = e => {
                                            s(e.data.colorValidationData)
                                        }
                                    }));
                                    break;
                                default:
                                    console.warn("Incorrect web worker action")
                            }
                        }))
                    }
                }, {
                    key: "generateTextLayerImages",
                    value: async function(t, n, r) {
                        e.PFCanvasImageTextCache || (e.PFCanvasImageTextCache = (await Promise.resolve().then(i.t.bind(i, 68370, 23))).default);
                        let o = r,
                            a = r.filter((e => e.type === p.hG.TEXTBOX && !e.overrideImagePulse));
                        a = a.map((e => ({
                            ...e,
                            canvasWidth: t.width,
                            position: {
                                ...e.position,
                                rotation: 0
                            }
                        }))), !a.some((t => !e.PFCanvasImageTextCache.getCache(t))) || await new Promise(((e, i) => {
                            new(d())({
                                ...t,
                                height: 2 * t.height,
                                width: 2 * t.width
                            }, null, {}, {
                                ...n,
                                generateTextCache: !0,
                                isReadOnly: !0,
                                textToPng: !0,
                                readyCallback: () => e(),
                                errorCallback: () => i(),
                                canvasFontsObject: (0, u.HM)()
                            }).setLayers(a)
                        }));
                        const s = await Promise.allSettled(a.map((t => e.PFCanvasImageTextCache.getCache(t))));
                        return o = o.map((t => {
                            let i = t;
                            if (t.type === p.hG.TEXTBOX) {
                                const n = a.find((e => e.uniqueId === t.uniqueId)),
                                    r = s.find((t => {
                                        var i;
                                        return n && (null == t || null === (i = t.value) || void 0 === i ? void 0 : i.layerHash) === e.PFCanvasImageTextCache.getLayerHash(n)
                                    }));
                                let o = null;
                                o = t.overrideImagePulse ? t.overrideImagePulse : r ? r.value.blobURL : t.url, i = {
                                    position: {
                                        ...t.position
                                    },
                                    type: p.hG.FILE,
                                    uniqueId: t.uniqueId,
                                    url: o,
                                    groupId: t.groupId,
                                    groupType: t.groupType
                                }
                            }
                            return i
                        })), o
                    }
                }, {
                    key: "preloadImage",
                    value: function(t) {
                        if (e.imagePreloadCache[t]) return e.imagePreloadCache[t];
                        const i = new Promise(((e, i) => {
                            const n = new Image;
                            n.crossOrigin = "anonymous";
                            let r = t.replace(/=$/, "%3D");
                            r = new v.R(t), r.query["X-Amz-Signature"] || String(r.query.v).indexOf(y.default.IMAGE_CACHE_VERSION) < 0 && (r.query.v = (r.query.v || "") + "-" + y.default.IMAGE_CACHE_VERSION), r = r.toString(), n.src = r, n.onload = () => {
                                const t = document.createElement("canvas"),
                                    r = t.getContext("2d");
                                t.width = n.width, t.height = n.height, r.drawImage(n, 0, 0), t.toBlob((t => {
                                    const i = URL.createObjectURL(t);
                                    e(i)
                                })), n.onerror = e => {
                                    i(e)
                                }
                            }
                        }));
                        return e.imagePreloadCache[t] = i, e.imagePreloadCache[t]
                    }
                }, {
                    key: "generateImageLayers",
                    value: async function(t) {
                        const i = t.map((t => {
                                if (t.url && "blob:" !== t.url.substring(0, 5)) return new Promise((i => {
                                    e.preloadImage(t.url).then((e => {
                                        i({
                                            uniqueId: t.uniqueId,
                                            url: e
                                        })
                                    }))
                                }))
                            })),
                            n = await Promise.all(i);
                        return t.map((e => {
                            const t = n.find((t => (null == t ? void 0 : t.uniqueId) === e.uniqueId));
                            return t && (e = {
                                ...e,
                                url: t.url
                            }), e
                        }))
                    }
                }, {
                    key: "initWorker",
                    value: async function(t) {
                        switch (t) {
                            case g:
                                if (!e.workers.generatorWorker) {
                                    const t = (await i.e(19129).then(i.bind(i, 19129))).default;
                                    e.workers.generatorWorker = new t, e.workers.generatorWorker.onmessage = t => e.webWorkerEventHandler(t)
                                }
                                break;
                            case m:
                                if (!e.workers.colorCheckWorker) {
                                    const t = await i.e(19129).then(i.bind(i, 19129));
                                    e.workers.colorCheckWorker = new t, e.workers.colorCheckWorker.onmessage = t => e.webWorkerEventHandler(t)
                                }
                        }
                    }
                }, {
                    key: "webWorkerEventHandler",
                    value: function(t) {
                        var i, n;
                        if (null != t && null !== (i = t.data) && void 0 !== i && i.success && t.data.taskHash) e.workerTaskCallbacks[t.data.taskHash](t);
                        else if (null != t && null !== (n = t.data) && void 0 !== n && n.error) {
                            var r;
                            console.error(`Task with hash ${t.hash} failed`, null == t || null === (r = t.data) || void 0 === r ? void 0 : r.error)
                        } else console.error("Unhandled error", t)
                    }
                }], (o = null) && b(t.prototype, o), a && b(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            O(L, "blobCache", {}), O(L, "workers", {
                generatorWorker: null,
                colorCheckWorker: null
            }), O(L, "workerTaskCallbacks", {}), O(L, "imagePreloadCache", {}), O(L, "availableBrowsers", [I]), O(L, "PFCanvasImageTextCache", null);
            var A = i(98060);

            function k(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R(n.key), n)
                }
            }

            function w(e, t, i) {
                return (t = R(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function R(e) {
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
            let D = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, i, c;
                return t = e, c = [{
                    key: "setPreviewStringFromTemplateWithDOM",
                    value: async function(t, i, c, p, g, m) {
                        let h = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                            f = arguments.length > 7 ? arguments[7] : void 0;
                        const y = p && await (0, n.GE)(t) && (0, r.ew)();
                        let v = [];
                        const _ = t.layersToArray(h, !1),
                            I = e.getDesignHash(c, i, _, y),
                            T = e.getCache(I, i);
                        if (T) return T.process;
                        const E = new Promise((n => {
                            var h, I;
                            c = Object.assign({}, {
                                productColors: [],
                                productColor: {},
                                isReadOnly: !0,
                                textToPng: !0,
                                readyCallback: e => {
                                    let t = null;
                                    const i = (0, r.Re)(),
                                        o = !(null != i && i.arcAngle && (null == i || !i.overrideImagePulse)) && g;
                                    if (y) return e.opts.useLifelike = !0, void e._detectPrintColorMode().then((() => {
                                        e.shouldShowLiveLifelike() || c.getLifelikeData ? e.convertToLifelike(0, !1, !0, 2).toCanvasElement().toBlob((i => {
                                            v = e.getLifelikeColors(), t = URL.createObjectURL(i), n({
                                                imageBlobUrl: t,
                                                newLifelikeVariants: v
                                            })
                                        })) : e.convertToPreview({
                                            toCanvas: !0,
                                            multiplier: 2
                                        }, !1).toBlob((e => {
                                            t = URL.createObjectURL(e), n({
                                                imageBlobUrl: t
                                            })
                                        }))
                                    }));
                                    e.convertToPreview({
                                        toCanvas: !0,
                                        multiplier: 2
                                    }, o).toBlob((e => {
                                        t = URL.createObjectURL(e), n({
                                            imageBlobUrl: t
                                        })
                                    }))
                                },
                                errorCallback: e => {
                                    console.error(e)
                                },
                                webWorkers: {
                                    lifelikeWorker: e => o.J.webWorkerProcessHandler(e, a.HELPER_WORKER_TYPES.LIFE_LIKE_CALCULATION)
                                },
                                canvasParams: {
                                    useLifelike: p
                                },
                                embroideryParams: {
                                    embroideryOutlineColor: m,
                                    embroideryOutlineSvgPath: t.svgPath,
                                    hasEmbroideryOutline: s.W.PATCHES.includes(null === (h = (0, l.WU)()) || void 0 === h ? void 0 : h.productId),
                                    outlineWidth: t.getOutlineWidth(),
                                    outlineScaleX: t.getOutlineScaleX(),
                                    outlineScaleY: t.getOutlineScaleY()
                                },
                                isMaskSvgPathCentered: s.W.PATCHES.includes(null === (I = (0, l.WU)()) || void 0 === I ? void 0 : I.productId),
                                canvasFontsObject: (0, u.HM)()
                            }, c || {});
                            const T = new(d())(i, null, {}, c);
                            e.recolorFileLayers(_, f).then((e => {
                                T.setLayers(e)
                            }))
                        }));
                        return e.setCache(I, i, E), E
                    }
                }, {
                    key: "getPreviewStringFromTemplate",
                    value: async function(t, i, n, r, o) {
                        let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                            s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                            l = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
                            u = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                            c = {};
                        return e.isDesignValid(i) ? (c = e.isWebWorkerGenerationAvaiable() && !s ? await L.setPreviewStringFromTemplateWithWebWorker(t, i, n, r, o, a, l, u) : await e.setPreviewStringFromTemplateWithDOM(t, i, n, r, o, a, l, u), c) : c
                    }
                }, {
                    key: "getCache",
                    value: function(t, i) {
                        var n;
                        let r = null === (n = e.renderProcesses[t]) || void 0 === n ? void 0 : n.find((e => i.width <= e.width && i.width <= e.width));
                        var o;
                        return r || (r = null === (o = e.renderProcesses[t]) || void 0 === o ? void 0 : o.find((t => {
                            const n = (i.width - t.width) / i.width * 100,
                                r = (i.height - t.height) / i.height * 100;
                            return n < e.maxSizeDifference && r < e.maxSizeDifference
                        }))), r
                    }
                }, {
                    key: "setCache",
                    value: function(t, i, n) {
                        e.renderProcesses[t] || (e.renderProcesses[t] = []), e.renderProcesses[t].push({
                            width: i.width,
                            height: i.height,
                            process: n
                        })
                    }
                }, {
                    key: "getDesignHash",
                    value: function(e, t, i, n) {
                        let r = {
                            ...e,
                            productColors: null
                        };
                        n || (r = {
                            ...r,
                            productColor: null
                        });
                        const o = {
                            simplifiedOptions: r,
                            layers: i
                        };
                        return d().Hash(JSON.stringify(o))
                    }
                }, {
                    key: "isDesignValid",
                    value: function(e) {
                        return !(e.width <= 1 || e.height <= 1)
                    }
                }, {
                    key: "isWebWorkerGenerationAvaiable",
                    value: function() {
                        const e = function() {
                            var e, t, i, n, r, o, a, s;
                            const l = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
                                u = null === (e = navigator) || void 0 === e || null === (t = e.userAgent) || void 0 === t ? void 0 : t.includes("Chrome"),
                                c = null === (i = navigator) || void 0 === i || null === (n = i.userAgent) || void 0 === n ? void 0 : n.includes("Firefox"),
                                d = null === (r = navigator) || void 0 === r || null === (o = r.userAgent) || void 0 === o ? void 0 : o.includes("OPR"),
                                p = null === (a = navigator) || void 0 === a || null === (s = a.userAgent) || void 0 === s ? void 0 : s.includes("Edg");
                            return l ? _ : c ? T : p ? E : d ? P : u ? I : S
                        }();
                        return L.availableBrowsers.includes(e) && "function" == typeof OffscreenCanvas
                    }
                }, {
                    key: "recolorFileLayers",
                    value: async function(e, t) {
                        if (!t) return e;
                        const i = [],
                            n = new A.V;
                        return e.forEach((e => {
                            if (e.type === p.hG.FILE && e.overrideColors && e.embroideryType && !e.overrideImage) {
                                const t = new Promise((t => {
                                    n.colorizeImage(e.url, Object.keys(e.overrideColors), Object.values(e.overrideColors), (i => {
                                        e.overrideImage = i, t()
                                    }))
                                }));
                                i.push(t)
                            }
                        })), await Promise.all(i), e
                    }
                }], (i = null) && k(t.prototype, i), c && k(t, c), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            w(D, "renderProcesses", {}), w(D, "maxSizeDifference", 5)
        },
        56281: (e, t, i) => {
            "use strict";
            i.d(t, {
                J: () => s
            });
            var n = i(67633);

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
                }
            }

            function o(e, t, i) {
                return (t = a(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function a(e) {
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
            let s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, o, a;
                return t = e, a = [{
                    key: "webWorkerProcessHandler",
                    value: function(t, i) {
                        const r = Math.random().toString(36).substring(2);
                        return new Promise((o => {
                            i === n.HELPER_WORKER_TYPES.LIFE_LIKE_CALCULATION && e.initWorker(n.HELPER_WORKER_TYPES.LIFE_LIKE_CALCULATION).then((() => {
                                e.workers.lifeLikeWorker.postMessage({
                                    params: t,
                                    action: n.HELPER_WORKER_TYPES.LIFE_LIKE_CALCULATION,
                                    taskHash: r
                                }), e.workerTaskCallbacks[r] = e => {
                                    o(e.data.modes)
                                }
                            }))
                        }))
                    }
                }, {
                    key: "initWorker",
                    value: async function(t) {
                        if (t === n.HELPER_WORKER_TYPES.LIFE_LIKE_CALCULATION && !e.workers.lifeLikeWorker) {
                            const t = (await i.e(4442).then(i.bind(i, 4442))).default;
                            e.workers.lifeLikeWorker = new t, e.workers.lifeLikeWorker.onmessage = t => {
                                e.workerTaskCallbacks[t.data.taskHash](t)
                            }
                        }
                    }
                }], (o = null) && r(t.prototype, o), a && r(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            o(s, "workers", {
                lifeLikeWorker: null
            }), o(s, "workerTaskCallbacks", {})
        },
        44880: (e, t, i) => {
            "use strict";
            i.d(t, {
                Fj: () => u,
                I2: () => n,
                KX: () => m,
                Ph: () => l,
                QL: () => d,
                Uv: () => f,
                ZA: () => r,
                dl: () => g,
                f8: () => s,
                g1: () => h,
                jy: () => c,
                nM: () => o,
                nX: () => a,
                pe: () => p,
                yS: () => y
            });
            const n = "color",
                r = "graphic",
                o = "graphic-text",
                a = "graphic-background",
                s = "gradient",
                l = "premium",
                u = "unsplash",
                c = "pattern",
                d = 1e3,
                p = 100,
                g = 1e3,
                m = 100,
                h = Object.freeze({
                    None: {
                        value: null,
                        name: dclang("generator", "color", "None")
                    }
                }),
                f = Object.freeze({
                    Black: {
                        value: "#000000",
                        name: dclang("generator", "color", "Black"),
                        type: n
                    },
                    White: {
                        value: "#ffffff",
                        name: dclang("generator", "color", "White"),
                        type: n
                    },
                    Whisper: {
                        value: "#E8E8E8",
                        name: dclang("generator", "color", "Whisper"),
                        type: n
                    },
                    Silver: {
                        value: "#BABABA",
                        name: dclang("generator", "color", "Silver"),
                        type: n
                    },
                    Nobel: {
                        value: "#989898",
                        name: dclang("generator", "color", "Nobel"),
                        type: n
                    },
                    Grey: {
                        value: "#696969",
                        name: dclang("generator", "color", "Grey"),
                        type: n
                    },
                    Zambezi: {
                        value: "#606060",
                        name: dclang("generator", "color", "Zambezi"),
                        type: n
                    },
                    Eclipse: {
                        value: "#3A3A3A",
                        name: dclang("generator", "color", "Eclipse"),
                        type: n
                    },
                    "Hippie Pink": {
                        value: "#B5475C",
                        name: dclang("generator", "color", "Hippie Pink"),
                        type: n
                    },
                    Cabaret: {
                        value: "#D36371",
                        name: dclang("generator", "color", "Cabaret"),
                        type: n
                    },
                    Froly: {
                        value: "#f27981",
                        name: dclang("generator", "color", "Froly"),
                        type: n
                    },
                    Wewak: {
                        value: "#FEA6A9",
                        name: dclang("generator", "color", "Wewak"),
                        type: n
                    },
                    "Light Pink": {
                        value: "#F9B2B7",
                        name: dclang("generator", "color", "Light Pink"),
                        type: n
                    },
                    "Your Pink": {
                        value: "#FFC3C2",
                        name: dclang("generator", "color", "Your Pink"),
                        type: n
                    },
                    Cosmos: {
                        value: "#FFCECC",
                        name: dclang("generator", "color", "Cosmos"),
                        type: n
                    },
                    "Misty Rose": {
                        value: "#ffe6e3",
                        name: dclang("generator", "color", "Misty Rose"),
                        type: n
                    },
                    Carmine: {
                        value: "#A50024",
                        name: dclang("generator", "color", "Carmine"),
                        type: n
                    },
                    Red: {
                        value: "#c70f28",
                        name: dclang("generator", "color", "Red"),
                        type: n
                    },
                    Alizarin: {
                        value: "#ed1c24",
                        name: dclang("generator", "color", "Alizarin"),
                        type: n
                    },
                    "Orange Red": {
                        value: "#E64B3A",
                        name: dclang("generator", "color", "Orange Red"),
                        type: n
                    },
                    "Rose Bud": {
                        value: "#FFA397",
                        name: dclang("generator", "color", "Rose Bud"),
                        type: n
                    },
                    Geraldine: {
                        value: "#EF7467",
                        name: dclang("generator", "color", "Geraldine"),
                        type: n
                    },
                    Salmon: {
                        value: "#F37977",
                        name: dclang("generator", "color", " Salmon"),
                        type: n
                    },
                    "Mona Lisa": {
                        value: "#F69D91",
                        name: dclang("generator", "color", "Mona Lisa"),
                        type: n
                    },
                    Sunglo: {
                        value: "#CC5D54",
                        name: dclang("generator", "color", "Sunglo"),
                        type: n
                    },
                    "Medium Carmine": {
                        value: "#B34436",
                        name: dclang("generator", "color", "Medium Carmine"),
                        type: n
                    },
                    "Roof Terracotta": {
                        value: "#9e4d49",
                        name: dclang("generator", "color", "Roof Terracotta"),
                        type: n
                    },
                    Auburn: {
                        value: "#6B2D2D",
                        name: dclang("generator", "color", "Auburn"),
                        type: n
                    },
                    "Mandys Pink": {
                        value: "#ffb18a",
                        name: dclang("generator", "color", "Mandys Pink"),
                        type: n
                    },
                    Romantic: {
                        value: "#f7c194",
                        name: dclang("generator", "color", "Romantic"),
                        type: n
                    },
                    Peach: {
                        value: "#FFCCA8",
                        name: dclang("generator", "color", "Peach"),
                        type: n
                    },
                    "Sandy Beach": {
                        value: "#FFD7B3",
                        name: dclang("generator", "color", "Sandy Beach"),
                        type: n
                    },
                    Zinnwaldite: {
                        value: "#EFC3AF",
                        name: dclang("generator", "color", "Zinnwaldite"),
                        type: n
                    },
                    Cinderella: {
                        value: "#ffdecc",
                        name: dclang("generator", "color", "Cinderella"),
                        type: n
                    },
                    "Wisp Pink": {
                        value: "#FFE9E2",
                        name: dclang("generator", "color", "Wisp Pink"),
                        type: n
                    },
                    "Papaya Whip": {
                        value: "#FFEDD4",
                        name: dclang("generator", "color", "Papaya Whip"),
                        type: n
                    },
                    Frangipani: {
                        value: "#FFD39F",
                        name: dclang("generator", "color", "Frangipani"),
                        type: n
                    },
                    Chardonnay: {
                        value: "#FFC571",
                        name: dclang("generator", "color", "Chardonnay"),
                        type: n
                    },
                    "Harvest Gold": {
                        value: "#f0ba60",
                        name: dclang("generator", "color", "Harvest Gold"),
                        type: n
                    },
                    "Texas Rose": {
                        value: "#FFA851",
                        name: dclang("generator", "color", "Texas Rose"),
                        type: n
                    },
                    "Sea Buckthorn": {
                        value: "#FA9044",
                        name: dclang("generator", "color", "Sea Buckthorn"),
                        type: n
                    },
                    Flamenco: {
                        value: "#f5873f",
                        name: dclang("generator", "color", "Flamenco"),
                        type: n
                    },
                    "Mango Tango": {
                        value: "#EA680F",
                        name: dclang("generator", "color", "Mango Tango"),
                        type: n
                    },
                    Orange: {
                        value: "#f26522",
                        name: dclang("generator", "color", "Orange"),
                        type: n
                    },
                    "Outrageous Orange": {
                        value: "#F7572D",
                        name: dclang("generator", "color", "Outrageous Orange"),
                        type: n
                    },
                    "Harley Davidson Red": {
                        value: "#C93127",
                        name: dclang("generator", "color", "Harley Davidson Red"),
                        type: n
                    },
                    Tenne: {
                        value: "#BB5727",
                        name: dclang("generator", "color", "Tenne"),
                        type: n
                    },
                    "Saddle Brown": {
                        value: "#8C4017",
                        name: dclang("generator", "color", "Saddle Brown"),
                        type: n
                    },
                    Brown: {
                        value: "#603913",
                        name: dclang("generator", "color", "Brown"),
                        type: n
                    },
                    "Rich Gold": {
                        value: "#9E5920",
                        name: dclang("generator", "color", "Rich Gold"),
                        type: n
                    },
                    Nude: {
                        value: "#bf854b",
                        name: dclang("generator", "color", "Nude"),
                        type: n
                    },
                    Porsche: {
                        value: "#E09A58",
                        name: dclang("generator", "color", "Porsche"),
                        type: n
                    },
                    Bronze: {
                        value: "#D07F2B",
                        name: dclang("generator", "color", "Bronze"),
                        type: n
                    },
                    Buttercup: {
                        value: "#DD9D26",
                        name: dclang("generator", "color", "Buttercup"),
                        type: n
                    },
                    Fawn: {
                        value: "#E2B56C",
                        name: dclang("generator", "color", "Fawn"),
                        type: n
                    },
                    "New Orleans": {
                        value: "#DEC48F",
                        name: dclang("generator", "color", "New Orleans"),
                        type: n
                    },
                    Champagne: {
                        value: "#EAD6BB",
                        name: dclang("generator", "color", "Champagne"),
                        type: n
                    },
                    "Apricot White": {
                        value: "#F7F1D9",
                        name: dclang("generator", "color", "Apricot White"),
                        type: n
                    },
                    Cumulus: {
                        value: "#FDF7BD",
                        name: dclang("generator", "color", "Cumulus"),
                        type: n
                    },
                    "Banana Mania": {
                        value: "#fff2b3",
                        name: dclang("generator", "color", "Banana Mania"),
                        type: n
                    },
                    "Vis Vis": {
                        value: "#FFE98F",
                        name: dclang("generator", "color", "Vis Vis"),
                        type: n
                    },
                    Yellow: {
                        value: "#ffc829",
                        name: dclang("generator", "color", "Yellow"),
                        type: n
                    },
                    "Paris Daisy": {
                        value: "#ffe94d",
                        name: dclang("generator", "color", "Paris Daisy"),
                        type: n
                    },
                    Dolly: {
                        value: "#F5F27B",
                        name: dclang("generator", "color", "Dolly"),
                        type: n
                    },
                    "Paris Daisy 2": {
                        value: "#ECE953",
                        name: dclang("generator", "color", "Paris Daisy 2"),
                        type: n
                    },
                    Starship: {
                        value: "#e5e43b",
                        name: dclang("generator", "color", "Starship"),
                        type: n
                    },
                    "Old Gold": {
                        value: "#D2B648",
                        name: dclang("generator", "color", "Old Gold"),
                        type: n
                    },
                    "Wild Willow": {
                        value: "#C2CE6B",
                        name: dclang("generator", "color", "Wild Willow"),
                        type: n
                    },
                    "Snow Flurry": {
                        value: "#E9EFBC",
                        name: dclang("generator", "color", "Snow Flurry"),
                        type: n
                    },
                    Panache: {
                        value: "#E6F9DB",
                        name: dclang("generator", "color", "Panache"),
                        type: n
                    },
                    Mindaro: {
                        value: "#CCE251",
                        name: dclang("generator", "color", "Mindaro"),
                        type: n
                    },
                    Green: {
                        value: "#74a952",
                        name: dclang("generator", "color", "Green"),
                        type: n
                    },
                    Conifer: {
                        value: "#a1c75b",
                        name: dclang("generator", "color", "Conifer"),
                        type: n
                    },
                    "Fern Green": {
                        value: "#54753F",
                        name: dclang("generator", "color", "Fern Green"),
                        type: n
                    },
                    "Tom Thumb": {
                        value: "#465A3E",
                        name: dclang("generator", "color", "Tom Thumb"),
                        type: n
                    },
                    Myrtle: {
                        value: "#253A21",
                        name: dclang("generator", "color", "Myrtle"),
                        type: n
                    },
                    Mantis: {
                        value: "#6FC75C",
                        name: dclang("generator", "color", "Mantis"),
                        type: n
                    },
                    "Bay Leaf": {
                        value: "#74b87e",
                        name: dclang("generator", "color", "Bay Leaf"),
                        type: n
                    },
                    "Chateau Green": {
                        value: "#48A05B",
                        name: dclang("generator", "color", "Chateau Green"),
                        type: n
                    },
                    "Sea Green": {
                        value: "#279143",
                        name: dclang("generator", "color", "Sea Green"),
                        type: n
                    },
                    Jewel: {
                        value: "#006838",
                        name: dclang("generator", "color", "Jewel"),
                        type: n
                    },
                    "Forest Green": {
                        value: "#004924",
                        name: dclang("generator", "color", "Forest Green"),
                        type: n
                    },
                    "Kelly Green": {
                        value: "#66BC46",
                        name: dclang("generator", "color", "Kelly Green"),
                        type: n
                    },
                    Honeydew: {
                        value: "#ECFDE9",
                        name: dclang("generator", "color", "Honeydew"),
                        type: n
                    },
                    Tara: {
                        value: "#CFEFCA",
                        name: dclang("generator", "color", "Tara"),
                        type: n
                    },
                    "Humming Bird": {
                        value: "#D1F3E4",
                        name: dclang("generator", "color", "Humming Bird"),
                        type: n
                    },
                    "Aero Blue": {
                        value: "#C2E4D5",
                        name: dclang("generator", "color", "Aero Blue"),
                        type: n
                    },
                    "Vista Blue": {
                        value: "#97D3B8",
                        name: dclang("generator", "color", "Vista Blue"),
                        type: n
                    },
                    "Tropical Rain Forest": {
                        value: "#007258",
                        name: dclang("generator", "color", "Tropical Rain Forest"),
                        type: n
                    },
                    "British Racing Green": {
                        value: "#00452D",
                        name: dclang("generator", "color", "British Racing Green"),
                        type: n
                    },
                    "Dark Sea Green": {
                        value: "#91BA96",
                        name: dclang("generator", "color", "Dark Sea Green"),
                        type: n
                    },
                    Amulet: {
                        value: "#789472",
                        name: dclang("generator", "color", "Amulet"),
                        type: n
                    },
                    "Camouflage Green": {
                        value: "#7E8D68",
                        name: dclang("generator", "color", "Camouflage Green"),
                        type: n
                    },
                    Finch: {
                        value: "#7B8260",
                        name: dclang("generator", "color", "Finch"),
                        type: n
                    },
                    Saratoga: {
                        value: "#565B39",
                        name: dclang("generator", "color", "Saratoga"),
                        type: n
                    },
                    Karaka: {
                        value: "#393500",
                        name: dclang("generator", "color", "Karaka"),
                        type: n
                    },
                    "Elf Green": {
                        value: "#248971",
                        name: dclang("generator", "color", "Elf Green"),
                        type: n
                    },
                    Niagara: {
                        value: "#31A28E",
                        name: dclang("generator", "color", "Niagara"),
                        type: n
                    },
                    "Iris Blue": {
                        value: "#00BEB8",
                        name: dclang("generator", "color", "Iris Blue"),
                        type: n
                    },
                    "Dark Turquoise": {
                        value: "#43CAC9",
                        name: dclang("generator", "color", "Dark Turquoise"),
                        type: n
                    },
                    Viking: {
                        value: "#4BB7BC",
                        name: dclang("generator", "color", "Viking"),
                        type: n
                    },
                    "Eastern Blue": {
                        value: "#008b97",
                        name: dclang("generator", "color", "Eastern Blue"),
                        type: n
                    },
                    "Sherpa Blue": {
                        value: "#00505a",
                        name: dclang("generator", "color", "Sherpa Blue"),
                        type: n
                    },
                    "Blue Whale": {
                        value: "#063140",
                        name: dclang("generator", "color", "Blue Whale"),
                        type: n
                    },
                    Edgewater: {
                        value: "#bfd8c6",
                        name: dclang("generator", "color", "Edgewater"),
                        type: n
                    },
                    Opal: {
                        value: "#A9C4BA",
                        name: dclang("generator", "color", "Opal"),
                        type: n
                    },
                    Gothic: {
                        value: "#70898D",
                        name: dclang("generator", "color", "Gothic"),
                        type: n
                    },
                    Arapawa: {
                        value: "#284860",
                        name: dclang("generator", "color", "Arapawa"),
                        type: n
                    },
                    Cerulean: {
                        value: "#006993",
                        name: dclang("generator", "color", "Cerulean"),
                        type: n
                    },
                    Pelorous: {
                        value: "#1A85AC",
                        name: dclang("generator", "color", "Pelorous"),
                        type: n
                    },
                    Blue: {
                        value: "#3399b5",
                        name: dclang("generator", "color", "Blue"),
                        type: n
                    },
                    "Bright Summer Sky": {
                        value: "#3DB7D3",
                        name: dclang("generator", "color", "Bright Summer Sky"),
                        type: n
                    },
                    "Light Cyan": {
                        value: "#D0F6F6",
                        name: dclang("generator", "color", "Light Cyan"),
                        type: n
                    },
                    "Blizzard Blue": {
                        value: "#a2e5f4",
                        name: dclang("generator", "color", "Blizzard Blue"),
                        type: n
                    },
                    "Columbia Blue": {
                        value: "#99DCF3",
                        name: dclang("generator", "color", "Columbia Blue"),
                        type: n
                    },
                    "Summer Sky": {
                        value: "#43b3d4",
                        name: dclang("generator", "color", "Summer Sky"),
                        type: n
                    },
                    "Deep Sky Blue": {
                        value: "#34B6EF",
                        name: dclang("generator", "color", "Deep Sky Blue"),
                        type: n
                    },
                    "Navy Blue": {
                        value: "#037CC7",
                        name: dclang("generator", "color", "Navy Blue"),
                        type: n
                    },
                    "Jordy Blue": {
                        value: "#6ea5d9",
                        name: dclang("generator", "color", "Jordy Blue"),
                        type: n
                    },
                    "Hawkes Blue": {
                        value: "#C1D9F7",
                        name: dclang("generator", "color", "Hawkes Blue"),
                        type: n
                    },
                    "Pattens Blue": {
                        value: "#C5DDF3",
                        name: dclang("generator", "color", "Pattens Blue"),
                        type: n
                    },
                    "Dark Cerulean": {
                        value: "#0e3d84",
                        name: dclang("generator", "color", "Dark Cerulean"),
                        type: n
                    },
                    Mariner: {
                        value: "#4460A7",
                        name: dclang("generator", "color", "Mariner"),
                        type: n
                    },
                    "Kashmir Blue": {
                        value: "#506B93",
                        name: dclang("generator", "color", "Kashmir Blue"),
                        type: n
                    },
                    Cello: {
                        value: "#364B6A",
                        name: dclang("generator", "color", "Cello"),
                        type: n
                    },
                    Navy: {
                        value: "#0f1e3c",
                        name: dclang("generator", "color", "Navy"),
                        type: n
                    },
                    Melrose: {
                        value: "#C6C1E4",
                        name: dclang("generator", "color", "Melrose"),
                        type: n
                    },
                    Perano: {
                        value: "#B3B9DD",
                        name: dclang("generator", "color", "Perano"),
                        type: n
                    },
                    "Wild Blue Yonder": {
                        value: "#8091BE",
                        name: dclang("generator", "color", "Wild Blue Yonder"),
                        type: n
                    },
                    "Chetwode Blue": {
                        value: "#7275B2",
                        name: dclang("generator", "color", "Chetwode Blue"),
                        type: n
                    },
                    "Moody Blue": {
                        value: "#7D78C0",
                        name: dclang("generator", "color", "Moody Blue"),
                        type: n
                    },
                    "Medium Slate Blue": {
                        value: "#6D75BE",
                        name: dclang("generator", "color", "Medium Slate Blue"),
                        type: n
                    },
                    "Medium Slate Blue 2": {
                        value: "#5C58AF",
                        name: dclang("generator", "color", "Medium Slate Blue 2"),
                        type: n
                    },
                    "Corn Flower Blue": {
                        value: "#494570",
                        name: dclang("generator", "color", "Corn Flower Blue"),
                        type: n
                    },
                    Tolopea: {
                        value: "#23133D",
                        name: dclang("generator", "color", "Tolopea"),
                        type: n
                    },
                    Purple: {
                        value: "#46276b",
                        name: dclang("generator", "color", "Purple"),
                        type: n
                    },
                    Indigo: {
                        value: "#512A7E",
                        name: dclang("generator", "color", "Indigo"),
                        type: n
                    },
                    "Ce Soir": {
                        value: "#8a6aa7",
                        name: dclang("generator", "color", "Ce Soir"),
                        type: n
                    },
                    "East Side": {
                        value: "#b195c2",
                        name: dclang("generator", "color", "East Side"),
                        type: n
                    },
                    Fog: {
                        value: "#D3C5E8",
                        name: dclang("generator", "color", "Fog"),
                        type: n
                    },
                    "Pale Twilight": {
                        value: "#DDC7D3",
                        name: dclang("generator", "color", "Pale Twilight"),
                        type: n
                    },
                    Twilight: {
                        value: "#e9bdd5",
                        name: dclang("generator", "color", "Twilight"),
                        type: n
                    },
                    Selago: {
                        value: "#F8DDF3",
                        name: dclang("generator", "color", "Selago"),
                        type: n
                    },
                    "Lavender Rose": {
                        value: "#EE96C9",
                        name: dclang("generator", "color", "Lavender Rose"),
                        type: n
                    },
                    Hopbush: {
                        value: "#d072a6",
                        name: dclang("generator", "color", "Hopbush"),
                        type: n
                    },
                    "Medium Red Violet": {
                        value: "#c52d89",
                        name: dclang("generator", "color", "Medium Red Violet"),
                        type: n
                    },
                    "Red Violet": {
                        value: "#A82981",
                        name: dclang("generator", "color", "Red Violet"),
                        type: n
                    },
                    Eggplant: {
                        value: "#84175e",
                        name: dclang("generator", "color", "Eggplant"),
                        type: n
                    },
                    "Palatinate Purple": {
                        value: "#70265D",
                        name: dclang("generator", "color", "Palatinate Purple"),
                        type: n
                    },
                    "Tyrian Purple": {
                        value: "#571147",
                        name: dclang("generator", "color", "Tyrian Purple"),
                        type: n
                    },
                    "Deep Cerise": {
                        value: "#cd368c",
                        name: dclang("generator", "color", "Deep Cerise"),
                        type: n
                    },
                    "Medium Violed Red": {
                        value: "#E0007B",
                        name: dclang("generator", "color", "Medium Violet Red"),
                        type: n
                    },
                    "Tickle Me Pink": {
                        value: "#FF8AAB",
                        name: dclang("generator", "color", "Tickle Me Pink"),
                        type: n
                    },
                    "Brilliant Rose": {
                        value: "#F768A0",
                        name: dclang("generator", "color", "Brilliant Rose"),
                        type: n
                    },
                    Lipstick: {
                        value: "#A52F59",
                        name: dclang("generator", "color", "Lipstick"),
                        type: n
                    },
                    "Burgundy 2": {
                        value: "#93003C",
                        name: dclang("generator", "color", "Burgundy 2"),
                        type: n
                    },
                    Burgundy: {
                        value: "#7c1123",
                        name: dclang("generator", "color", "Burgundy"),
                        type: n
                    },
                    "Cab Sav": {
                        value: "#512D32",
                        name: dclang("generator", "color", "Cab Sav"),
                        type: n
                    },
                    "Light Wood": {
                        value: "#8C6262",
                        name: dclang("generator", "color", "Light Wood"),
                        type: n
                    },
                    "Careys Pink": {
                        value: "#B09C9D",
                        name: dclang("generator", "color", "Careys Pink"),
                        type: n
                    },
                    Lily: {
                        value: "#B6A9B2",
                        name: dclang("generator", "color", "Lily"),
                        type: n
                    },
                    "Pink Lace": {
                        value: "#eed0da",
                        name: dclang("generator", "color", "Pink Lace"),
                        type: n
                    },
                    "Pale Pink": {
                        value: "#FFE1E3",
                        name: dclang("generator", "color", "Pale Pink"),
                        type: n
                    },
                    "Pale Pink 2": {
                        value: "#FFD5DB",
                        name: dclang("generator", "color", "Pale Pink 2"),
                        type: n
                    },
                    Pink: {
                        value: "#ffcad0",
                        name: dclang("generator", "color", "Pink"),
                        type: n
                    },
                    Cupid: {
                        value: "#EFB1C0",
                        name: dclang("generator", "color", "Cupid"),
                        type: n
                    },
                    Melanie: {
                        value: "#E2AABA",
                        name: dclang("generator", "color", "Melanie"),
                        type: n
                    },
                    Tapestry: {
                        value: "#B17D8C",
                        name: dclang("generator", "color", "Tapestry"),
                        type: n
                    },
                    Mandy: {
                        value: "#C15860",
                        name: dclang("generator", "color", "Mandy"),
                        type: n
                    },
                    "Mandy 2": {
                        value: "#CF4952",
                        name: dclang("generator", "color", "Mandy 2"),
                        type: n
                    },
                    Crimson: {
                        value: "#D3002E",
                        name: dclang("generator", "color", "Crimson"),
                        type: n
                    },
                    "Radical Red": {
                        value: "#F63C5A",
                        name: dclang("generator", "color", "Radical Red"),
                        type: n
                    },
                    "Brink Pink": {
                        value: "#F55886",
                        name: dclang("generator", "color", "Brink Pink"),
                        type: n
                    },
                    "Cotton Candy": {
                        value: "#FFB6CE",
                        name: dclang("generator", "color", "Cotton Candy"),
                        type: n
                    },
                    "Pig Pink": {
                        value: "#FFDCE9",
                        name: dclang("generator", "color", "Pig Pink"),
                        type: n
                    }
                }),
                y = f
        },
        58232: (e, t, i) => {
            "use strict";
            i.d(t, {
                C8: () => D,
                F2: () => d,
                Jz: () => F,
                Ke: () => P,
                LZ: () => p,
                Mj: () => j,
                Mk: () => z,
                OK: () => k,
                Pl: () => V,
                Px: () => u,
                RZ: () => G,
                SJ: () => H,
                Uf: () => Y,
                V5: () => _,
                Y3: () => y,
                Yc: () => v,
                Z2: () => h,
                _2: () => M,
                _B: () => x,
                aA: () => I,
                as: () => b,
                b0: () => A,
                e$: () => s,
                e3: () => S,
                em: () => E,
                gz: () => g,
                hG: () => L,
                i$: () => B,
                ii: () => R,
                kx: () => m,
                l7: () => U,
                m$: () => w,
                nL: () => l,
                q_: () => N,
                qg: () => O,
                uT: () => a,
                uq: () => T,
                wQ: () => f,
                wW: () => c,
                zn: () => C
            });
            var n = i(90583),
                r = i(51122),
                o = i(87990);
            const a = "js--design-maker",
                s = 100,
                l = 0,
                u = .99,
                c = 450,
                d = "-no-pulse",
                p = "crop-move",
                g = "crop-scale",
                m = "crop-rotate",
                h = 2,
                f = 100,
                y = "#ffffff",
                v = "#fff9d2",
                _ = "#7a7979",
                I = "#000000",
                T = "PRODUCT",
                E = "LOGO",
                P = "PROMO",
                S = "MOCKUP",
                b = "EMBEDDED",
                O = "ADDED",
                C = "REMOVED",
                L = {
                    CLIPART: "clipart",
                    TEXTBOX: "textbox",
                    FILE: "file",
                    PROP: "prop",
                    MOCKUP: "mockup",
                    LICENSED_ASSET: "licensedAsset",
                    EXTERNAL: "external",
                    GROUP_QUICK_DESIGN: "QUICK_DESIGN",
                    GROUP_LOGO_TEMPLATE: "LOGO_TEMPLATE",
                    GROUP_INSIDE_LABEL_TEMPLATE: "INSIDE_LABEL_TEMPLATE",
                    DESIGN_FILL: "DESIGN_FILL"
                },
                A = {
                    EMBEDDED_DESIGNER_FILE: "embedded-designer"
                },
                k = [{
                    animation: null,
                    name: dlang("generator", "None"),
                    preview: ["regular"]
                }, {
                    animation: "fadeIn",
                    id: "fade-in",
                    name: dlang("generator", "Fade in"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "slideInRight",
                    id: "slide-in-right",
                    name: dlang("generator", "Slide in right"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "slideInLeft",
                    id: "slide-in-left",
                    name: dlang("generator", "Slide in left"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "fall",
                    id: "fall",
                    name: dlang("generator", "Fall"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "fallBounce",
                    id: "fall-bounce",
                    name: dlang("generator", "Fall bounce"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "rise",
                    id: "rise",
                    name: dlang("generator", "Rise"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "fallFromTopLeft",
                    id: "fall-from-top-left",
                    name: dlang("generator", "Fall from top left"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "fallFromTopRight",
                    id: "fall-from-top-right",
                    name: dlang("generator", "Fall from top right"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "riseFromBottomRight",
                    id: "rise-from-bottom-right",
                    name: dlang("generator", "Rise from bottom right"),
                    preview: ["regular", "dotted"]
                }, {
                    animation: "riseFromBottomLeft",
                    id: "rise-from-bottom-left",
                    name: dlang("generator", "Rise from bottom left"),
                    preview: ["regular", "dotted"]
                }],
                w = {
                    LAYER_ADDED: "layerAdded",
                    LAYER_REMOVED: "layerRemoved",
                    LAYER_ADDED_OR_REMOVED: "layerAddedOrRemoved",
                    LAYER_ROTATED: "layerRotated",
                    LAYER_CONFIG_CHANGED: "layerConfigurationChanged",
                    LAYER_COLORS_CHANGED: "layerColorsChanged",
                    LAYER_CUSTOMIZABLE_STATE_CHANGED: "layerCustomizableStateChanged",
                    ACTIVE_LAYER_CHANGED: "activeLayerChanged",
                    TEMPLATE_POSITIONS_CHANGED: "templatePositionsChanged",
                    TEMPLATE_RESIZED: "templateResized",
                    DESIGN_FILL_CHANGED: "designFillChanged",
                    ORDER_CHANGED: "orderChanged",
                    ZOOM_CHANGED: "zoomChanged",
                    PREVIEW_CHANGED: "previewChanged",
                    CROP_STATE_CHANGED: "cropStateChanged",
                    LIFELIKE_CHANGED: "lifelikeChanged",
                    EMBROIDERY_OUTLINE_COLOR_CHANGED: "embroideryOutlineColorChanged",
                    ANIMATION_STATE_CHANGED: "animationStateChanged",
                    DESIGNER_SHOW_LOADER: "designerShowLoader",
                    DESIGNER_HIDE_LOADER: "designerHideLoader",
                    TEXTBOX_LAYER_DOUBLE_CLICK: "textboxLayerDoubleClick"
                },
                R = {
                    TYPE_MOCKUP_GENERATOR: "mockup_generator",
                    TYPE_TEMPLATE_GRID: "template_grid",
                    TYPE_TEMPLATE_VIEW: "template_view",
                    TYPE_CMM: "custom_mockups"
                },
                D = Object.freeze({
                    TAB_PRODUCT: "product",
                    TAB_DESIGN: "design"
                }),
                N = Object.freeze({
                    TAB_DESIGNER: "designer",
                    TAB_3D: "3d",
                    TAB_PREVIEW: "preview"
                }),
                M = Object.freeze({
                    OK: "OK",
                    NO_BACKGROUND_FOUND: "NO_BACKGROUND_FOUND",
                    NO_LICENSED_ASSET_BACKGROUND_FOUND: "NO_LICENSED_ASSET_BACKGROUND_FOUND",
                    OTHER_ACTIVE_TASK: "OTHER_ACTIVE_TASK",
                    LIMIT_REACHED: "LIMIT_REACHED",
                    ERROR: "ERROR"
                }),
                F = "toolbar",
                V = {
                    [r.hC]: [o.R.ENGRAVING_LAYERS_OVERLAPPING, o.R.LAYER_TEXT_TOO_SMALL, o.R.LAYER_CLIPART_TOO_SMALL],
                    [r.gj]: [o.R.EMBROIDERY_CLIPART_TOO_SMALL]
                },
                x = [...Object.values(n.g7)],
                G = 1665977718,
                B = 8,
                U = Object.freeze({
                    GENERATING_MOCKUPS_STATE: "generating_mockups",
                    GENERATING_PRINTFILES_STATE: "generating_printfiles",
                    PROCESSING_FILES_STATE: "processing_files"
                }),
                H = "pf-mb-12",
                z = "pf-sys-neutral-surface-50",
                j = Object.freeze({
                    WIDTH: 800,
                    HEIGHT: 800
                }),
                Y = Object.freeze({
                    WIDTH: 1028,
                    HEIGHT: 1028
                })
        },
        57916: (e, t, i) => {
            "use strict";
            i.d(t, {
                AQ: () => l,
                V8: () => s,
                Xu: () => a
            });
            var n = i(9651),
                r = i(58232),
                o = i(97993);

            function a(e) {
                let {
                    nodeToRemove: t,
                    nodeLayerPickerCol: i,
                    nodeDesignerCol: r,
                    nodeMockupVariantArea: o,
                    nodePlacementSelector: a
                } = e;
                i && r && (s() ? (n.U.removeClassName(i, "pf-d-none"), n.U.addClassName(i, "pf-d-md-block"), n.U.removeClassName(r, "col-md-12"), n.U.addClassName(r, "col-md-8"), n.U.addClassName(r, "col-xl-9"), o && n.U.removeClassName(o, "pf-d-none"), a && n.U.removeClassName(a, "pf-d-none"), null == t || t.remove()) : (n.U.addClassName(i, "pf-d-none"), n.U.removeClassName(i, "pf-d-md-block"), n.U.removeClassName(r, "col-md-8"), n.U.removeClassName(r, "col-xl-9"), n.U.addClassName(r, "col-md-12"), o && n.U.addClassName(o, "pf-d-none"), a && n.U.addClassName(a, "pf-d-none")))
            }

            function s() {
                return ![r.q_.TAB_3D, r.q_.TAB_PREVIEW].includes((0, o.Sn)())
            }

            function l(e, t, i) {
                t && (Array.isArray(i) ? i.forEach((i => {
                    e ? n.U.addClassName(t, i) : n.U.removeClassName(t, i)
                })) : e ? n.U.addClassName(t, i) : n.U.removeClassName(t, i))
            }
        },
        97993: (e, t, i) => {
            "use strict";
            i.d(t, {
                Ap: () => f,
                Dc: () => E,
                EY: () => c,
                Eb: () => C,
                Fz: () => V,
                GA: () => N,
                GX: () => Y,
                Gv: () => re,
                IT: () => l,
                JF: () => te,
                LH: () => G,
                Lp: () => U,
                O3: () => a,
                OO: () => I,
                OP: () => ie,
                OS: () => D,
                Re: () => R,
                Sn: () => oe,
                TR: () => v,
                Tl: () => y,
                WG: () => k,
                WY: () => Q,
                Y7: () => ne,
                _D: () => H,
                cC: () => h,
                cG: () => p,
                cT: () => u,
                dd: () => M,
                eT: () => L,
                eW: () => O,
                en: () => Z,
                ew: () => $,
                hR: () => w,
                hn: () => _,
                i3: () => j,
                iI: () => s,
                i_: () => x,
                j9: () => J,
                jk: () => B,
                kh: () => T,
                nF: () => d,
                nj: () => q,
                pR: () => se,
                pV: () => b,
                p_: () => ae,
                rr: () => g,
                ti: () => K,
                tj: () => ee,
                tx: () => W,
                uo: () => X,
                vm: () => S,
                wR: () => le,
                xI: () => m,
                xO: () => P,
                xw: () => A,
                yW: () => z
            });
            var n = i(79442),
                r = i(10989),
                o = i(58232);
            i(39197);

            function a(e) {
                (0, n.getVuex)().commit(r.ak(r.O3), e)
            }

            function s(e, t) {
                (0, n.getVuex)().commit(r.ak(r.iI), {
                    featureFlagName: e,
                    featureFlagValue: t
                })
            }

            function l(e) {
                return (0, n.getVuex)().getters[r.ak(r.VX)](e)
            }

            function u() {
                return (0, n.getVuex)().getters[r.ak(r.Pr)]
            }

            function c() {
                return (0, n.getVuex)().getters[r.ak(r.EY)]
            }

            function d() {
                return (0, n.getVuex)().getters[r.ak(r.nF)]
            }

            function p() {
                return (0, n.getVuex)().getters[r.ak(r.cG)]
            }

            function g() {
                return (0, n.getVuex)().getters[r.ak(r.rr)]
            }

            function m() {
                return (0, n.getVuex)().getters[r.ak(r.xI)]
            }

            function h() {
                return (0, n.getVuex)().getters[r.ak(r.cC)]
            }

            function f() {
                return (0, n.getVuex)().getters[r.ak(r.mz)]
            }

            function y(e) {
                (0, n.getVuex)().commit(r.ak(r.Tl), e)
            }

            function v(e) {
                (0, n.getVuex)().commit(r.ak(r.TR), e)
            }
            async function _(e) {
                return await (0, n.getVuex)().dispatch(r.ak(r.hn), {
                    didDesignChange: e
                })
            }
            async function I() {
                return await (0, n.getVuex)().dispatch(r.ak(r.OO))
            }

            function T() {
                (0, n.getVuex)().commit(r.ak(r.a9))
            }

            function E(e, t) {
                (0, n.getVuex)().commit(r.ak(r.NY), {
                    eventName: e,
                    jsListenerFunction: t
                })
            }

            function P(e, t) {
                (0, n.getVuex)().commit(r.ak(r.IQ), {
                    eventName: e,
                    listener: t
                })
            }

            function S(e) {
                return (0, n.getVuex)().getters[r.ak(r.mA)](e)
            }

            function b(e) {
                (0, n.getVuex)().commit(r.ak(r.pV), e)
            }

            function O(e) {
                (0, n.getVuex)().commit(r.ak(r.eW), e)
            }

            function C(e) {
                e.forEach((async e => {
                    const t = function(e) {
                        var t;
                        return null === (t = F()) || void 0 === t ? void 0 : t.findIndex((t => t.placementId === e.placementId && t.templateId === e.templateId))
                    }(e); - 1 === t ? await (0, n.getVuex)().dispatch(r.ak(r.Y1), {
                        template: e
                    }) : await (0, n.getVuex)().dispatch(r.ak(r.z), {
                        template: e,
                        templateIndex: t
                    })
                }))
            }

            function L() {
                (0, n.getVuex)().commit(r.ak(r.GD))
            }

            function A(e) {
                if (!e) return;
                const t = M();
                F().forEach(((i, o) => {
                    if (i.placementId !== t) return;
                    const a = i.getLayerIndex(e);
                    a > -1 && (0, n.getVuex)().commit(r.ak(r.Wi), {
                        templateIndex: o,
                        layerIndex: a,
                        layer: e
                    })
                }))
            }
            async function k(e, t) {
                await (0, n.getVuex)().dispatch(r.ak(r.rG), {
                    technique: e,
                    fromLayer: t
                })
            }
            async function w() {
                await (0, n.getVuex)().commit(r.ak(r.WG), null)
            }

            function R() {
                return (0, n.getVuex)().getters[r.ak(r.Uf)]
            }

            function D() {
                return (0, n.getVuex)().getters[r.ak(r.ir)]
            }

            function N(e) {
                (0, n.getVuex)().commit(r.ak(r.GA), e)
            }

            function M() {
                return (0, n.getVuex)().getters[r.ak(r.AO)]
            }

            function F() {
                return (0, n.getVuex)().getters[r.ak(r.zd)]
            }

            function V() {
                return (0, n.getVuex)().getters[r.ak(r.in)]
            }

            function x(e) {
                (0, n.getVuex)().commit(r.ak(r.el), e)
            }

            function G(e) {
                (0, n.getVuex)().commit(r.ak(r.zn), e)
            }

            function B(e) {
                (0, n.getVuex)().commit(r.ak(r.jk), e)
            }

            function U() {
                return (0, n.getVuex)().getters[r.ak(r.Tq)]
            }

            function H(e, t) {
                (0, n.getVuex)().commit(r.ak(r.C7), {
                    key: e,
                    lifelikeVariants: t
                })
            }

            function z(e) {
                return e ? (0, n.getVuex)().getters[r.ak(r.cj)](e) : (0, n.getVuex)().getters[r.ak(r.Tg)]
            }

            function j(e) {
                const t = function(e) {
                    var t;
                    return null === (t = i ? (0, n.getVuex)().getters[r.ak(r.bk)](i) : (0, n.getVuex)().getters[r.ak(r.H5)]) || void 0 === t ? void 0 : t.findIndex((t => t.placement === e.placement));
                    var i
                }(e); - 1 === t ? (0, n.getVuex)().commit(r.ak(r.pD), e) : (0, n.getVuex)().commit(r.ak(r.y5), {
                    placementOptionItem: e,
                    itemIndex: t
                })
            }

            function Y() {
                return (0, n.getVuex)().getters[r.ak(r.GX)]
            }

            function q(e) {
                (0, n.getVuex)().commit(r.ak(r.nj), e)
            }

            function W(e) {
                (0, n.getVuex)().commit(r.ak(r.ki), e)
            }

            function K(e) {
                (0, n.getVuex)().commit(r.ak(r.Vz), e)
            }

            function Q(e) {
                (0, n.getVuex)().commit(r.ak(r.so), e)
            }

            function X(e) {
                (0, n.getVuex)().commit(r.ak(r.$i), e)
            }

            function $() {
                return (0, n.getVuex)().getters[r.ak(r.ew)]
            }

            function Z() {
                return PF.Customer.createdAt > o.RZ
            }

            function J(e) {
                (0, n.getVuex)().commit(r.ak(r.j9), e)
            }

            function ee(e) {
                (0, n.getVuex)().commit(r.ak(r.tj), e)
            }

            function te(e) {
                (0, n.getVuex)().commit(r.ak(r.JF), e)
            }

            function ie(e) {
                (0, n.getVuex)().commit(r.ak(r.OP), e)
            }

            function ne(e) {
                (0, n.getVuex)().commit(r.ak(r.H$), e)
            }

            function re() {
                return (0, n.getVuex)().getters[r.ak(r.Gv)]
            }

            function oe() {
                return (0, n.getVuex)().getters[r.ak(r.Sn)]
            }

            function ae() {
                return (0, n.getVuex)().getters[r.ak(r.p_)]
            }

            function se() {
                return (0, n.getVuex)().getters[r.ak(r.pR)]
            }

            function le() {
                return (0, n.getVuex)().getters[r.ak(r.U1)]
            }
        },
        4111: (e, t, i) => {
            "use strict";
            i.d(t, {
                BV: () => n,
                FM: () => a,
                JS: () => r,
                _K: () => o,
                bw: () => l,
                lI: () => s
            });
            const n = 233,
                r = 266,
                o = 46,
                a = 300,
                s = [343, 342],
                l = 6
        },
        4071: (e, t, i) => {
            "use strict";
            i.d(t, {
                K7: () => a,
                gg: () => r,
                jm: () => n,
                kr: () => l,
                tn: () => s,
                w3: () => o
            });
            const n = "left",
                r = "right",
                o = "center",
                a = "absolute_left",
                s = "absolute_right",
                l = "absolute_center"
        },
        81811: (e, t, i) => {
            "use strict";
            i.d(t, {
                XO: () => d,
                XS: () => h,
                Y7: () => c,
                Zb: () => p,
                hE: () => u,
                rM: () => m
            });
            var n = i(9651),
                r = i(79442),
                o = i(74130);

            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
                }
            }

            function s(e, t, i) {
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
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), s(this, "groupTagInfo", ""), s(this, "groupNamesWithTagLabels", {
                        optionGroupName: null,
                        tagLabel: null
                    })
                }
                var t, i, n;
                return t = e, n = [{
                    key: "fromArray",
                    value: function(e) {
                        return Object.assign(new this, e || {})
                    }
                }], (i = null) && a(t.prototype, i), n && a(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function c(e) {
                (0, r.getVuex)().commit(o.ak(o.Y7), e)
            }

            function d() {
                return (0, r.getVuex)().getters[o.ak(o.i2)]
            }

            function p(e) {
                if (g(e)) return d().groupNamesWithTagLabels.find((t => {
                    let {
                        optionGroupName: i
                    } = t;
                    return i === e
                })).tagLabel
            }

            function g(e) {
                var t;
                const i = null === (t = d()) || void 0 === t ? void 0 : t.groupNamesWithTagLabels;
                return !!i && (Array.isArray(i) ? i.some((t => {
                    let {
                        optionGroupName: i
                    } = t;
                    return i === e
                })) : i.optionGroupName === e)
            }

            function m(e, t) {
                return g(e) ? tag("span", {
                    className: "pf-py-0 pf-badge pf-badge-small pf-badge--default",
                    style: {
                        position: "absolute",
                        right: "5px",
                        bottom: "7.9px",
                        zIndex: 10,
                        height: "auto"
                    },
                    innerHTML: p(e)
                }).append(t) : null
            }

            function h(e) {
                var t;
                return n.U.clearNode(e), null !== (t = d()) && void 0 !== t && t.groupTagInfo ? tag("div", "container text-center clearfix", [tag("div", "row", [tag("div", {
                    className: "col-8 center-block pf-ui-body text-center pf-text-muted hide-empty",
                    style: {
                        marginTop: "36px",
                        marginBottom: "-4px"
                    },
                    innerHTML: d().groupTagInfo
                })])]).append(e) : null
            }
        },
        60416: (e, t, i) => {
            "use strict";
            i.d(t, {
                GE: () => o,
                Qp: () => a
            });
            var n = i(30663),
                r = i(51122);
            const o = async e => a(e.technique) && s(e.placementId), a = function(e) {
                return [r.ml].some((t => t === e))
            }, s = function(e) {
                return ![n.PU, n.uW, n.Y2, n.VL].some((t => t === e))
            }
        },
        24424: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => n,
                w: () => r
            });
            const n = "mockup",
                r = "mockupMakerMockup"
        },
        17947: (e, t, i) => {
            "use strict";
            i.d(t, {
                B1: () => U,
                Dn: () => Z,
                Dt: () => F,
                Fn: () => te,
                GD: () => G,
                GM: () => w,
                Gf: () => C,
                KD: () => ee,
                L: () => V,
                PM: () => L,
                RR: () => $,
                Ry: () => Q,
                ZF: () => z,
                ZZ: () => Y,
                ai: () => X,
                bX: () => D,
                fN: () => J,
                gh: () => H,
                jW: () => x,
                mm: () => K,
                tK: () => k,
                tT: () => B,
                tq: () => j,
                wM: () => A,
                xU: () => q,
                zW: () => W
            });
            var n = i(91414),
                r = i(66308),
                o = i(24424),
                a = i(1042),
                s = i(613),
                l = i(52658),
                u = i(90227),
                c = i(58232),
                d = i(98990),
                p = i(30663),
                g = i(93307),
                m = i(97993),
                h = i(65311),
                f = i.n(h),
                y = i(27707),
                v = i(66137),
                _ = i(70141),
                I = i(62186),
                T = i(50744),
                E = i(60416),
                P = i(279),
                S = i(22277),
                b = i(51122),
                O = i(57916);
            async function C() {
                const e = [s.Ac, s.wh, s.iG, s.qg, s.PN, s.O0, s.Aq, s.H9, s.uo, s.iL].map((e => new l.g({
                        flagName: e,
                        targetType: s.rV.ENVIRONMENT
                    }))),
                    t = await s.Ju(e),
                    i = (0, m.xI)();
                for (const e in t)(0, m.iI)(t[e].flagName, !i && t[e].canAccessFeature);
                return t
            }
            async function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return new Promise((i => {
                    (function t(n) {
                        e() ? i() : setTimeout((() => t.call(this, n)), n)
                    }).call(this, t)
                }))
            }

            function A(e, t) {
                var i;
                const s = e.getTemplates(),
                    l = e.getDesignData(),
                    u = s.getSelectedTemplate().getKey();
                let c = null === (i = l.templates[u]) || void 0 === i ? void 0 : i.toArray({
                    forRpc: !0
                }).layers;
                c = Object.values(c).map((e => (e.type === n.K.TYPE && (delete e.url, delete e.svg), e.type === a.GR && e.object === o.w && delete e.url, delete e.quickDesignId, delete e.groupId, delete e.groupType, e)));
                const d = e.getDesignFill(e.getSelectedPlacementId());
                return d && (t && w(d), c.unshift({
                    type: r.Z.TYPE_FILL,
                    ...d
                })), c
            }

            function k(e) {
                var t;
                return [p.xD, p.Vu, p.NO].includes(null == e ? void 0 : e.designFillType) || [g.c8].includes(null == e || null === (t = e.designFillItem) || void 0 === t ? void 0 : t.type)
            }

            function w(e) {
                e.designFillType === p.Vu && (0, m.EY)() && (e.isForCustomMockup = !0), delete e.designFillItem, delete e.designFillUrls
            }

            function R(e, t) {
                return t.some ? t.some((t => t.id === "tab-" + e)) : t === e
            }

            function D(e) {
                return R(c.C8.TAB_DESIGN, e)
            }

            function N(e) {
                return R(c.C8.TAB_PRODUCT, e)
            }

            function M() {
                return window.navigator.userAgent.toLowerCase()
            }

            function F() {
                return /android/.test(M())
            }

            function V() {
                return /iphone|ipod|ipad/.test(M())
            }

            function x() {
                return !!document.getElementById("mobile-order")
            }

            function G(e, t, i) {
                if (j()) {
                    if (e.isLandingPageDesigner() && document.body.classList.add("designer-landing-page"), document.body.classList.add("designer-mobile-view"), (0, d.P0)(), f()(".layer-picker-col").addClass("pf-d-none"), !t || x()) return;
                    !N(t) && !D(t) || (0, m.EY)() ? ((0, d.cN)(null), e.showBackLinkWrapper(), U(), H(!0), e.showProductTab(), q(), e.getDynamicStickyFooter().hideTab()) : (e.hideBackLinkWrapper(), B(), H(!1), Y()), (0, m.xI)() && f()(".dynamic-sticky-footer__cta").addClass("pf-d-none")
                } else {
                    z(), e.showBackLinkWrapper();
                    const n = (0, m.Sn)();
                    n !== c.q_.TAB_3D && n !== c.q_.TAB_PREVIEW && U(), H(!0), i && e.renderAdvancedTemplatePicker(), t && (N(t) || D(t)) && (q(), e.showDesignTab()), (0, O.V8)() && f()(".layer-picker-col").removeClass("pf-d-none")
                }
            }

            function B() {
                const e = document.getElementById("js--back-to-catalog-link");
                null == e || e.classList.remove("pf-d-inline-block"), null == e || e.classList.add("pf-d-none")
            }

            function U() {
                const e = document.getElementById("js--back-to-catalog-link");
                null == e || e.classList.add("pf-d-inline-block"), null == e || e.classList.remove("pf-d-none")
            }

            function H(e) {
                var t;
                const i = null === (t = document.getElementsByClassName("page-footer")) || void 0 === t ? void 0 : t[0];
                i && (e ? i.classList.remove("pf-d-none") : i.classList.add("pf-d-none"))
            }

            function z() {
                document.body.classList.remove("designer-mobile-view")
            }

            function j() {
                return u.k.isWindowSmallerThan(u.k.MD)
            }

            function Y() {
                const e = document.querySelector(".fullscreen-modal .modal-header");
                null == e || e.classList.add("pf-d-none")
            }

            function q() {
                const e = document.querySelector(".fullscreen-modal .modal-header");
                null == e || e.classList.remove("pf-d-none")
            }

            function W(e) {
                if (!e) return;
                const t = `${document.getElementById("app-header").offsetHeight}px`;
                document.getElementById("content").style.marginTop = t
            }

            function K(e, t) {
                Q(e, t)
            }

            function Q(e, t) {
                const i = (0, m.vm)(e);
                null != i && i.length && i.forEach((e => null == e ? void 0 : e.apply(null, t)))
            }

            function X(e, t) {
                const i = {},
                    n = {};
                for (const r of e) {
                    const e = (0, y.F)(t, r);
                    n[e.getKey()] = e;
                    for (const t of e.layers)
                        if (t instanceof _.t && !(t instanceof v.w)) {
                            const e = t.fileItem.fileId;
                            i[r.placementId] = i[r.placementId] || [], i[r.placementId].includes(e) || i[r.placementId].push(e)
                        }
                }
                return {
                    filesIdsByPlacement: i,
                    designDataTemplates: n
                }
            }

            function $(e) {
                let {
                    getGeneratorVariantByPlacementId: t,
                    getUserTemplate: i
                } = e;
                const n = t(!1, !0),
                    r = (0, I.TU)(!1, !0).generatorVariants;
                r.find((e => e.color === n.color && p.c7.includes(e.placementId)));
                const o = r.find((e => e.color === n.color && p.c7.includes(e.placementId)));
                return o ? i(o.placementId, o.templateId) : null
            }

            function Z(e) {
                return moment().diff(e, "days")
            }
            async function J(e, t, i) {
                var n;
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#ffffff";
                const o = e.getSelectedPlacementId(),
                    a = e._getTemplate(o),
                    s = await (0, E.GE)(a);
                if (!s) return Promise.resolve(t);
                const l = e.previewMockupVariant,
                    u = (null === (n = (0, S.WU)()) || void 0 === n ? void 0 : n.colors) || [],
                    c = l.getColorData(u),
                    d = (0, T.detectPrintColorMode)({
                        productColors: [c],
                        colorCheck: !1,
                        singleColor: t[i]
                    }),
                    p = Object.values(d || {})[0],
                    g = t;
                return p === P.default.PRINT_COLOR_MODE.WHITE_COLOR && (g[i] = r), Promise.resolve(g)
            }

            function ee() {
                if ((0, m.xI)() || j()) return !1;
                const e = (0, S.Tu)();
                return [b.V_, b.ml, b.ZA, b.hC].includes(e)
            }

            function te(e, t, i) {
                const n = document.createElement("img");
                return n.setAttribute("style", "height:" + i + "px; width:" + t + "px;"), n.src = e, n
            }
        },
        27262: (e, t, i) => {
            "use strict";
            i.d(t, {
                l: () => r
            });
            var n = i(4111);

            function r(e, t) {
                return t.svgPath && ! function(e, t) {
                    var i, r, o, a, s;
                    const l = e.position;
                    let u = null !== (i = null === (r = e.fileItem) || void 0 === r || null === (o = r.extra) || void 0 === o ? void 0 : o.templateId) && void 0 !== i ? i : 0;
                    !u && null !== (a = e.fileItem) && void 0 !== a && null !== (s = a.extra) && void 0 !== s && s.hasDesignOutlineLayer && (u = n.JS);
                    return u === t.templateId && !l.left && !l.top
                }(e, t) && ! function(e, t) {
                    const i = [...t.svgPathCoordinates];
                    if (!i.length) return !1;
                    const r = e.position,
                        a = n.FM,
                        s = [
                            [a * r.left, a * r.top],
                            [a * r.left + a * r.width, a * r.top],
                            [a * r.left + a * r.width, a * r.top + a * r.height],
                            [a * r.left, a * r.top + a * r.height]
                        ],
                        l = i.length,
                        u = s.length;
                    i.push(i[0]);
                    for (let e = 0; e < l; e++)
                        for (let t = 0; t < u; t++)
                            if (!o(s[t], i[e], i[e + 1])) return !1;
                    return !0
                }(e, t)
            }

            function o(e, t, i) {
                return function(e, t, i) {
                    return (t[0] - e[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (t[1] - e[1])
                }(e, t, i) > 0
            }
        },
        27707: (e, t, i) => {
            "use strict";
            i.d(t, {
                F: () => r
            });
            var n = i(96486);

            function r(e, t) {
                return !t || (0, n.isEmpty)(e.getTemplates()) ? null : null == e ? void 0 : e.getUserTemplate(null == t ? void 0 : t.placementId, t.templateId)
            }
        },
        87990: (e, t, i) => {
            "use strict";
            i.d(t, {
                R: () => n
            });
            const n = Object.freeze({
                PRINTFILE_TOO_SMALL: dlang("generator", "Your image doesn't meet our print requirements"),
                PRINTFILE_LOW_CONTRAST: dlang("generator", "One of your inside label designs has low contrast"),
                CUSTOMIZABLE_PRINTFILE_TOO_SMALL: lang("Image is too small, please select a file with a larger resolution!"),
                EMBROIDERY_OUT_OF_BOUNDS: dlang("generator", "Please make sure your design is in the embroidery area"),
                EMBROIDERY_TEXT_TOO_SMALL: dlang("generator", "Text is too small to embroider"),
                EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT: dlang("generator", "Youâ€™ve exceeded the stitch length limit for this font"),
                EMBROIDERY_LAYERS_OVERLAPPING: dlang("dashboard", "Text layers canâ€™t overlap"),
                EMBROIDERY_CLIPART_OUT_OF_BOUNDS: dlang("generator", "Please make sure your design is in the embroidery area"),
                EMBROIDERY_CLIPART_TOO_SMALL: dlang("generator", "Clipart is too small to embroider"),
                LAYER_TEXT_TOO_SMALL: dlang("dashboard", "Text size is too small"),
                LAYER_CLIPART_TOO_SMALL: dlang("dashboard", "Clip art is too small"),
                TEXT_TOO_LONG: dlang("dashboard", "Your text is too long. The limit is {limit} characters."),
                ENGRAVING_LAYERS_OVERLAPPING: dlang("dashboard", "Different engraving style layers canâ€™t overlap"),
                LAYER_OUT_OF_BOUNDS: dlang("dashboard", "Please make sure your layer falls within the print area"),
                EMBROIDERY_THREAD_COLOR_LIMIT: dlang("dashboard", "To continue, please pick less than {limit} thread colors!"),
                PRODUCT_OUT_OF_STOCK: dlang("dashboard", "Product is currently out of stock"),
                DSR_UNAVAILABLE_PRODUCT: dlang("generator", "Adjust your default selling preferences to select this product"),
                INSIDE_LABEL_LAYER_COLOR_INVALID: dlang("generator", "Inside label for this color is not validated"),
                INSIDE_LABEL_DESIGN_HAS_NO_LAYERS: dlang("generator", "Inside label template design can't be empty"),
                TRANSPARENCY_INVALID: dlang("generator", "Your design is transparent, please adjust it")
            })
        },
        98163: (e, t, i) => {
            "use strict";
            i.d(t, {
                b7: () => p,
                k8: () => u,
                o3: () => l,
                oS: () => d
            });
            var n = i(51122),
                r = i(98932),
                o = i(19639),
                a = i(28e3),
                s = i(83434);

            function l(e) {
                const t = {};
                return null != e && e.stitch_color && (t.stitch_color = e.stitch_color), t
            }

            function u(e, t, i, n) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 150;
                e || console.error("productId not passed");
                const o = (0, s.aN)(t, e);
                return c(i, o, n, r)
            }

            function c(e, t, i) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 150;
                const s = {},
                    l = [];
                return e.length ? (e.forEach((e => {
                    if (t[e.placementId] === e.templateId) {
                        const t = {};
                        e.technique === n.nZ && (t.sticker_effect = !0), s[e.placementId] = {
                            printfilePreview: null,
                            position: null,
                            width: e.width,
                            height: e.height,
                            options: t
                        };
                        const u = Math.max(e.width, e.height),
                            c = a / u,
                            p = new o.K,
                            g = d(i, e.placementId);
                        p.width = Math.round(e.width * c), p.height = Math.round(e.height * c), p.left = 0, p.top = 0, p.rotation = 0;
                        const m = r.n.getPreviewStringFromTemplate(e, p, g).then((t => {
                            s[e.placementId].printfilePreview = null == t ? void 0 : t.imageBlobUrl
                        }));
                        l.push(m)
                    }
                })), Promise.all(l).then((() => s))) : new Promise((e => e(s)))
            }

            function d(e, t) {
                const i = {};
                if (e) {
                    const n = a.r.fromArray(e);
                    n && (i.fill = n.getPlacementFill(t))
                }
                return i
            }

            function p(e, t) {
                const i = {},
                    n = t ? "size" : "color";
                return e.forEach((e => {
                    const t = e[n];
                    i[t] || (i[t] = {}), i[t][e.placementId] = e.templateId
                })), i
            }
        },
        33765: (e, t, i) => {
            "use strict";
            i.d(t, {
                G: () => r
            });
            var n = i(25046);

            function r(e, t, r, o, a, s, l, u, c) {
                const d = new n.L;
                return d.existingNode = c, d.components = {
                    "mockup-preview": () => i.e(68471).then(i.bind(i, 30768))
                }, d.template = '\n            <mockup-preview\n                :item-file="itemFile"\n                :file="file"\n                :class-name="className"\n                :mockup-preview-type="mockupPreviewType"\n                :generator-variant="generatorVariant"\n                :is-printfile="isPrintfile"\n                :max-width="maxWidth"\n                :max-height="maxHeight"\n            />', d.initialData = {
                    itemFile: e,
                    file: t,
                    className: r,
                    mockupPreviewType: o,
                    generatorVariant: a,
                    isPrintfile: s,
                    maxWidth: l,
                    maxHeight: u
                }, new n.Z(d)
            }
        },
        39197: (e, t, i) => {
            "use strict";
            i.d(t, {
                U: () => on
            });
            var n = i(70538),
                r = i(96486),
                o = i.n(r),
                a = i(74130),
                s = i(4473),
                l = i(81811),
                u = i(53640),
                c = i(40142),
                d = i(51122),
                p = i(10989),
                g = i(87826);
            var m = {
                    state: {
                        isOrderFlowMode: !1,
                        isChangePrintfileMode: !1,
                        isMockupGeneratorMode: !1,
                        isProductPushMode: !1,
                        arePickersVisible: !1,
                        existingVariants: null,
                        store: null,
                        getProductTemplateEditorState: null,
                        getDesignerTemplates: null,
                        getGeneratorVariants: null,
                        getGeneratorParams: null,
                        getSelectedRegionVariants: null,
                        getSizePicker: null,
                        getColorPicker: null,
                        getRegionPicker: null,
                        getPickerConfig: null,
                        getProductOptionsPicker: null,
                        hasLabelNative: null,
                        hasDesignForPlacement: null,
                        insideLabelTemplateUpdate: null,
                        getEmbroiderySubTechnique: null,
                        isEmbroiderySubTechniqueAvailable: null
                    },
                    namespaced: !0,
                    mutations: {
                        [u.setInitialConfig](e, t) {
                            e.isOrderFlowMode = t.isOrderFlowMode, e.isChangePrintfileMode = t.isChangePrintfileMode, e.isMockupGeneratorMode = t.isMockupGeneratorMode, e.isProductPushMode = t.isProductPushMode, e.arePickersVisible = t.arePickersVisible, e.existingVariants = t.existingVariants, e.store = t.store, e.getProductTemplateEditorState = t.getProductTemplateEditorState, e.getDesignerTemplates = t.getDesignerTemplates, e.getGeneratorVariants = t.getGeneratorVariants, e.getGeneratorParams = t.getGeneratorParams, e.getSelectedRegionVariants = t.getSelectedRegionVariants, e.getSizePicker = t.getSizePicker, e.getColorPicker = t.getColorPicker, e.getRegionPicker = t.getRegionPicker, e.getPickerConfig = t.getPickerConfig, e.getProductOptionsPicker = t.getProductOptionsPicker, e.hasLabelNative = t.hasLabelNative, e.hasLabelColorGroup = t.hasLabelColorGroup, e.hasDesignForPlacement = t.hasDesignForPlacement, e.insideLabelTemplateUpdate = t.insideLabelTemplateUpdate, e.getEmbroiderySubTechnique = t.getEmbroiderySubTechnique, e.isEmbroiderySubTechniqueAvailable = t.isEmbroiderySubTechniqueAvailable
                        }
                    },
                    getters: {
                        [u.productConfigState]: e => e,
                        [u.isProductTemplateEditor]: e => {
                            var t;
                            const i = null === (t = e.getProductTemplateEditorState) || void 0 === t ? void 0 : t.call(e);
                            return i && (i.isTemplateEditFlow() || i.isTemplateSwapProductFlow())
                        },
                        [u.isCreatingProductFromTemplate]: e => {
                            var t;
                            const i = null === (t = e.getProductTemplateEditorState) || void 0 === t ? void 0 : t.call(e);
                            return i && i.isProductCreateFlow()
                        },
                        [u.isProductTemplateDetailsEditor]: (e, t) => {
                            var i;
                            const n = null === (i = e.getProductTemplateEditorState) || void 0 === i ? void 0 : i.call(e);
                            return t[u.isCreatingProductFromTemplate] && (null == n ? void 0 : n.useSimpleDesigner)
                        },
                        [u.shouldUseFullTemplateEditor]: (e, t, i) => {
                            const n = i.designer.productModule.productItem;
                            return !!n && (n.isPoster() || n.isCanvas() || n.isMug() || n.isSticker() || n.isPillow() || n.isPhoneCase() || n.isLaptopSleeve() || n.isMetalPrint() || n.isGamingMousePad() || n.isEmbroideredPatches() || n.isTowel() || n.isWoodenOrnaments())
                        },
                        [u.shouldAllowFileColorChanger]: (e, t, i, n) => {
                            const r = i.designer.productModule.productPlacementTechnique,
                                o = e.isEmbroiderySubTechniqueAvailable() ? r === d.V_ && e.getEmbroiderySubTechnique() === g.sg : r === d.V_;
                            return n[(0, c.ak)(c.yf)] && (!r || o)
                        },
                        [u.isTechniquePickerAvailable]: (e, t, i, n) => () => {
                            var t, r, o;
                            const a = null === (t = i.designer.productModule.config.getGeneratorParams()) || void 0 === t ? void 0 : t.techniqueDisplayNames,
                                s = i.designer.productModule.config.isChangePrintfileMode;
                            return !n[(0, p.ak)(p.xI)] && !s && !(null === (r = e.getGeneratorParams()) || void 0 === r || null === (o = r.availableTechniques) || void 0 === o || !o.filter((e => a[e])).length)
                        }
                    }
                },
                h = i(91083),
                f = i(19765),
                y = i(48698),
                v = i(81070),
                _ = i(74194);
            var I = {
                    state: {
                        allColors: null,
                        availableColors: null,
                        selectedColors: [],
                        discontinuedColors: {},
                        lastSelectedColorName: null
                    },
                    namespaced: !0,
                    mutations: {
                        [h.oA](e) {
                            Object.assign(e, {
                                allColors: null,
                                availableColors: null,
                                selectedColors: [],
                                discontinuedColors: {},
                                lastSelectedColorName: null
                            })
                        },
                        [h.hN](e, t) {
                            e.allColors = t
                        },
                        [h.Xx](e, t) {
                            e.selectedColors = t
                        },
                        [h.KO](e, t) {
                            e.selectedColors.push(t)
                        },
                        [h.sc](e, t) {
                            const i = {
                                ...e.discontinuedColors
                            };
                            for (const n of e.allColors) {
                                const e = n.color;
                                for (const n in t) t[n].includes(e) || (n in i || (i[n] = []), i[n].push(e))
                            }
                            n.default.set(e, "discontinuedColors", i)
                        },
                        [h.UL](e, t) {
                            const i = [...new Set(t.filter((e => !e.discontinued)).map((e => e.color)))];
                            e.availableColors = e.allColors.filter((e => i.includes(e.color)))
                        },
                        [h.In](e, t) {
                            e.lastSelectedColorName = t
                        }
                    },
                    getters: {
                        [h.oK]: e => e.allColors,
                        [h.jX]: e => e.selectedColors,
                        [h.NB]: e => t => t in e.discontinuedColors,
                        [h.WJ]: (e, t) => (i, n) => t[h.NB](i) && e.discontinuedColors[i].includes(n),
                        [h.On]: (e, t, i) => {
                            const n = i.designer.productModule.sizes.allSizes.reduce(((t, i) => (t[i] = e.discontinuedColors[i] || [], t)), {});
                            return (0, r.intersection)(...Object.values(n))
                        },
                        [h.sN]: (e, t, i) => t => {
                            const n = {},
                                r = i.designer.productModule.sizes.selectedSizes;
                            for (const i in e.discontinuedColors) {
                                if (!r.includes(i)) continue;
                                const o = e.discontinuedColors[i];
                                n[i] = t.filter((e => o.includes(e))), n[i].length || delete n[i]
                            }
                            return n
                        },
                        [h.B3]: e => e.lastSelectedColorName,
                        [h.VK]: e => null !== e.lastSelectedColorName,
                        [h.kM]: e => (t, i) => {
                            var n;
                            return (i = null !== (n = i) && void 0 !== n ? n : e.selectedColors).some((e => f.y.isEqual(e.color, t)))
                        },
                        [h.sP]: e => e.selectedColors.length > 0,
                        [h.Y0]: (e, t, i) => {
                            var n, o;
                            const a = null === (n = e.allColors) || void 0 === n ? void 0 : n.map((e => e.color)),
                                s = null === (o = i.designer.productModule.config) || void 0 === o ? void 0 : o.getSelectedRegionVariants().map((e => e.color));
                            return (0, r.difference)(a, s)
                        },
                        [h.eB]: e => e.selectedColors.map((e => e.color)),
                        [h.VW]: e => e.selectedColors.map((e => e.colorCode)),
                        [h.yX]: (e, t, i, n) => {
                            var r, o;
                            const a = null === (r = i.designer.productModule.config) || void 0 === r || null === (o = r.getPickerConfig()) || void 0 === o ? void 0 : o.colorConfig.maxValues;
                            return a || (n[(0, y.ak)(y.a1)] ? e.selectedColors.length : e.allColors.length)
                        },
                        [h.DE]: (e, t, i) => {
                            var n, r;
                            return (null === (n = i.designer.productModule.config) || void 0 === n ? void 0 : n.arePickersVisible) && (null === (r = e.allColors) || void 0 === r ? void 0 : r.length) > 1
                        }
                    },
                    actions: {
                        [h.TO](e, t) {
                            let {
                                state: i,
                                commit: r
                            } = e;
                            const o = {};
                            let a;
                            const s = {};
                            for (const e of t) a = e.size, a in o || (o[a] = []), o[a].push(e.color), e.discontinued && (a in s || (s[a] = []), s[a].push(e.color));
                            n.default.set(i, "discontinuedColors", s), r(h.sc, o), r(h.UL, t)
                        },
                        [h.GW](e) {
                            let {
                                state: t,
                                getters: i,
                                commit: n,
                                rootState: r
                            } = e;
                            const o = r.designer.productModule.sizes,
                                a = t.selectedColors.map((e => e.color)).filter((e => !t.allColors.map((e => e.color)).some((t => t === e)))),
                                s = o.selectedSizes.filter((e => !o.allSizes.some((t => t === e))));
                            a.length && (n(h.Xx, t.selectedColors.filter((e => !a.includes(e.color)))), 0 === t.selectedColors.length && n(h.KO, t.allColors[0])), s.length && n((0, v.ak)(v.Au), o.selectedSizes.filter((e => !s.includes(e))), {
                                root: !0
                            });
                            !i[h.kM](t.lastSelectedColorName) && i[h.sP] && n(h.In, t.selectedColors[0].color);
                            !(o.lastSelectedSize in o.selectedSizes) && i[v.Ol] && n((0, v.ak)(v.Qx), o.selectedSizes[0], {
                                root: !0
                            })
                        },
                        [h.nY](e, t) {
                            var i, n, r;
                            let {
                                getters: o,
                                commit: a,
                                rootState: s,
                                rootGetters: l
                            } = e;
                            const u = null !== (i = null === (n = s.designer.productModule.config) || void 0 === n || null === (r = n.existingVariants) || void 0 === r ? void 0 : r.map((e => e.variantId))) && void 0 !== i ? i : [];
                            a(h.Xx, []), a((0, v.ak)(v.Au), [], {
                                root: !0
                            }), t.filter((e => u.includes(e.variantId))).forEach((e => {
                                e.size && !l[(0, v.ak)(v.WQ)](e.size) && a((0, v.ak)(v.zj), e.size, {
                                    root: !0
                                }), e.color && !o[h.kM](e.color) && a(h.KO, _.h.fromArray({
                                    color: e.color,
                                    colorCode: e.colorCode,
                                    colorCode2: e.colorCode2
                                }))
                            }))
                        }
                    }
                },
                T = i(44353),
                E = i(69935);
            var P = {
                    state: {
                        allSizes: null,
                        selectedSizes: [],
                        allAvailableSizes: null,
                        initialSizes: [],
                        translatedSizes: null,
                        disabledSizes: [],
                        lastSelectedSize: null
                    },
                    namespaced: !0,
                    mutations: {
                        [v.oA](e) {
                            Object.assign(e, {
                                allSizes: null,
                                selectedSizes: [],
                                allAvailableSizes: null,
                                initialSizes: [],
                                translatedSizes: null,
                                disabledSizes: [],
                                lastSelectedSize: null
                            })
                        },
                        [v.Df](e, t) {
                            e.allSizes = t
                        },
                        [v.Au](e, t) {
                            e.selectedSizes = t
                        },
                        [v.zj](e, t) {
                            e.selectedSizes.push(t)
                        },
                        [v.jt](e, t) {
                            e.allAvailableSizes = t
                        },
                        [v.Vo](e) {
                            e.initialSizes = e.selectedSizes
                        },
                        [v.QO](e, t) {
                            e.translatedSizes = t
                        },
                        [v.ZE](e, t) {
                            e.disabledSizes = t
                        },
                        [v.Qx](e, t) {
                            e.lastSelectedSize = t
                        }
                    },
                    getters: {
                        [v.Fj]: e => e.allSizes,
                        [v.xF]: e => e.selectedSizes,
                        [v.eP]: e => e.allAvailableSizes,
                        [v.wr]: e => t => {
                            const i = new Set(t),
                                n = new Set(e.initialSizes);
                            return t.every((e => n.has(e))) && e.initialSizes.every((e => i.has(e)))
                        },
                        [v.FJ]: e => e.translatedSizes,
                        [v.Z9]: e => e.disabledSizes,
                        [v.qU]: e => e.lastSelectedSize,
                        [v.WQ]: e => (t, i) => {
                            var n;
                            return (i = null !== (n = i) && void 0 !== n ? n : e.selectedSizes).some((e => f.y.isEqual(e, t)))
                        },
                        [v.Ol]: e => e.selectedSizes.length > 0,
                        [v.xH]: (e, t, i) => i.designer.productModule.config.isOrderFlowMode && !t[v.Ol] ? e.allSizes : null,
                        [v.X2]: e => {
                            var t, i;
                            return null !== (t = null === (i = e.allAvailableSizes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
                        },
                        [v.jR]: (e, t, i) => {
                            var n, r;
                            const o = null === (n = i.designer.productModule.config) || void 0 === n || null === (r = n.getPickerConfig()) || void 0 === r ? void 0 : r.sizeConfig.maxValues;
                            return null != o ? o : t[v.X2]
                        },
                        [v.IW]: (e, t, i, n) => {
                            var r, o;
                            return !(null === (r = i.designer.productModule.config) || void 0 === r || !r.arePickersVisible) && (!(n[(0, u.getNamespacedCall)(u.isProductTemplateEditor)] && !n[(0, p.ak)(p.xI)]) || (null === (o = i.designer.productModule.productItem) || void 0 === o ? void 0 : o.canHaveSizePickerForProductTemplates()))
                        }
                    },
                    actions: {
                        [v.yF](e) {
                            var t;
                            let {
                                state: i,
                                getters: n,
                                commit: r,
                                rootState: o
                            } = e;
                            const a = null === (t = o.designer.productModule.config) || void 0 === t ? void 0 : t.getSizePicker(),
                                s = !(a instanceof E.d1) && (null == a ? void 0 : a.isSelectAllChecked());
                            r(v.Au, s ? i.allAvailableSizes.slice() : i.selectedSizes.filter((e => i.allAvailableSizes.includes(e)))), n[v.Ol] || r(v.Au, i.allAvailableSizes.slice(0, n[v.jR]))
                        },
                        [v.T9](e) {
                            var t, i;
                            let {
                                state: n,
                                commit: r,
                                dispatch: o,
                                rootState: a,
                                rootGetters: s
                            } = e;
                            const l = s[(0, y.ak)(y.Nj)](!0).map((e => e.size)).filter(((e, t, i) => e && i.indexOf(e) === t && n.allSizes.includes(e))).sort(T.y.sizeSortingCallback);
                            r(v.jt, l), (null !== (t = a.designer.productModule.config) && void 0 !== t && t.isMockupGeneratorMode || null !== (i = a.designer.productModule.config) && void 0 !== i && i.isProductPushMode) && o(v.yF)
                        },
                        async [v.V7](e, t) {
                            let {
                                state: i,
                                getters: n,
                                dispatch: r,
                                rootState: o
                            } = e;
                            const a = o.designer.productModule.config,
                                s = o.designer.productModule.productItem,
                                l = null == a ? void 0 : a.getGeneratorParams();
                            if (!(s && (t || l && n[v.IW]))) return !1;
                            await r(v.T9);
                            const u = i.allAvailableSizes.length,
                                c = !u && (null == s ? void 0 : s.isEmbroidery()) && !s.isEmbroiderySample();
                            if (!t && !u && (!c || null != a && a.isProductPushMode)) return !1;
                            if (!t && 1 === u && null != a && a.getPickerConfig().sizeConfig.maxValues) return !1;
                            const p = [d.ml, d.AN, d._M, d.F9, d.uj, d.wP, d.V_];
                            return !(null != a && a.isMockupGeneratorMode && p.includes(s.type) && !s.isPillow() && !s.isLaptopSleeve() && !s.isEmbroideredPatches() && !s.isTowel() && !s.isBeanBagCase() && !s.isBlanket() && !s.isGamingMousePad() && !s.isMetalPrint()) && u > 1
                        }
                    }
                },
                S = i(82320),
                b = i(60124),
                O = i(9617),
                C = i(30663),
                L = i(64283);
            var A = {
                    state: {
                        allVariants: [],
                        variantLimit: null,
                        variantMapping: {},
                        allGeneratorVariants: {}
                    },
                    namespaced: !0,
                    mutations: {
                        [y.oA](e) {
                            Object.assign(e, {
                                allVariants: [],
                                variantLimit: null,
                                variantMapping: {},
                                allGeneratorVariants: {}
                            })
                        },
                        [y.a$](e) {
                            const t = new S.m;
                            e.allVariants = t.variantItemCache ? Object.values(t.variantItemCache) : []
                        },
                        [y.S1](e, t) {
                            e.variantLimit = t
                        },
                        [y.Ah](e, t) {
                            e.variantMapping = Object.freeze(t)
                        },
                        [y.nm](e, t) {
                            e.allGeneratorVariants = Object.freeze(t)
                        }
                    },
                    getters: {
                        [y.N7]: e => e.allVariants,
                        [y.vW]: e => e.variantMapping,
                        [y.l0]: e => e.allGeneratorVariants,
                        [y.Lp]: (e, t, i) => {
                            const n = i.designer.productModule.colors,
                                r = i.designer.productModule.sizes;
                            return e.allVariants.some((e => {
                                var t;
                                let {
                                    isTemporaryOutOfStock: i,
                                    color: o,
                                    size: a
                                } = e;
                                return o === ((null === (t = n.selectedColors[0]) || void 0 === t ? void 0 : t.color) || null) && a === (r.selectedSizes[0] || null) && i
                            }))
                        },
                        [y.C9]: e => e.variantLimit,
                        [y.a1]: (e, t, i) => {
                            var n, r;
                            const o = i.designer.productModule.config;
                            if (o.isChangePrintfileMode) return !1;
                            const a = null !== (n = null === (r = o.existingVariants) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0,
                                s = t[y.TU]().allVariantCount;
                            return !!(e.variantLimit && s + a > e.variantLimit)
                        },
                        [y.TU]: (e, t, i, n) => (e, r) => {
                            var o;
                            const a = i.designer.productModule.config,
                                s = null === (o = i.designer.productModule.productItem) || void 0 === o ? void 0 : o.isAdvancedInsideLabelAllowed(),
                                l = {
                                    generatorVariants: [],
                                    variantCount: 0,
                                    allVariantCount: 0
                                },
                                u = {},
                                d = t[y.Nj](),
                                p = a.getGeneratorParams(),
                                g = a.getDesignerTemplates(),
                                m = a.hasLabelNative(),
                                f = a.hasLabelColorGroup();
                            for (const i of d) {
                                if (n[(0, h.ak)(h.WJ)](i.size, i.color)) continue;
                                if (a.existingVariants && t[y.cn](i.size, i.color) && !a.isChangePrintfileMode && !f) {
                                    if (0 === l.variantCount) {
                                        const e = Object.values(Object.assign({}, i.mockupIds, i.templateIds));
                                        for (const i of e) {
                                            let e = p.generatorVariants[i];
                                            if (m && e.templateType !== b.S.LABEL_NATIVE && C.c7.includes(e.placementId)) {
                                                const i = p.generatorVariants[e.generatorVariantId].color,
                                                    n = t[y.XR](i)[b.S.LABEL_NATIVE];
                                                e = p.generatorVariants[n]
                                            }
                                            l.generatorVariants.push(e), l.variantCount++, l.allVariantCount++
                                        }
                                    }
                                    continue
                                }
                                let o = !1,
                                    d = !1;
                                for (const h of p.availablePlacements) {
                                    if (!g.hasTemplates(h.id)) continue;
                                    if (o || (o = !0, l.allVariantCount += 1), !r && !a.hasDesignForPlacement(h.id)) continue;
                                    let v = null,
                                        _ = i.mockupIds[h.id],
                                        I = i.templateIds[h.id];
                                    if (_ || I || console.error(`active generator variant missing for color ${i.color} and placement ${h.id}`), C.c7.includes(h.id) && s) {
                                        let e = b.S.LABEL_CUSTOM;
                                        if (m) {
                                            const i = _ || I,
                                                n = p.generatorVariants[i].color,
                                                r = t[y.XR](n);
                                            e = b.S.LABEL_NATIVE, _ = r[e], I = r[e]
                                        }
                                        if (f) {
                                            const i = _ || I,
                                                n = p.generatorVariants[i].color,
                                                r = t[y.XR](n),
                                                o = t[y.C5](n);
                                            e = b.S.LABEL_COLOR_GROUP, _ = o[e], I = r[e]
                                        }
                                        a.insideLabelTemplateUpdate(e)
                                    }
                                    if (v = e ? _ || I : I || _, n[(0, c.ak)(c.fm)](i, h) && (v = I), d || (d = !0, l.variantCount++), !u[v]) {
                                        const e = p.generatorVariants[v];
                                        u[v] = 1, l.generatorVariants.some((t => t.generatorVariantId === e.generatorVariantId)) || l.generatorVariants.push(e)
                                    }
                                }
                            }
                            return l
                        },
                        [y.Nj]: (e, t, i, n) => e => {
                            const t = i.designer.productModule.config.getGeneratorParams();
                            if (!t) return [];
                            const r = [];
                            for (const i of t.variantMapping) i.color && !n[(0, h.ak)(h.kM)](i.color) || (e || !i.size || n[(0, v.ak)(v.WQ)](i.size, n[(0, v.ak)(v.xH)])) && r.push(i);
                            return r
                        },
                        [y.kO]: (e, t, i) => {
                            const n = i.designer.productModule.config,
                                r = [],
                                o = new S.m;
                            for (const e of n.existingVariants) r.push(o.getCachedVariantById(e.variantId));
                            const a = {};
                            for (const e of r) e.size in a || (a[e.size] = []), a[e.size].push({
                                color: e.color,
                                colorCode: e.colorCode,
                                colorCode2: e.colorCode2
                            });
                            return a
                        },
                        [y.ko]: (e, t, i) => {
                            var n, r, o;
                            return null !== (n = null === (r = i.designer.productModule.config) || void 0 === r || null === (o = r.existingVariants) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0
                        },
                        [y.cn]: (e, t) => (e, i) => {
                            var n, r;
                            return null !== (n = null === (r = t[y.kO][e]) || void 0 === r ? void 0 : r.some((e => e.color === i))) && void 0 !== n && n
                        },
                        [y.XR]: (e, t, i, n) => e => {
                            const t = i.designer.productModule.config,
                                r = i.designer.productModule.colors,
                                o = t.getGeneratorParams().generatorVariants;
                            let a = null,
                                s = null,
                                l = null;
                            e || (e = t.isOrderFlowMode && n[(0, h.ak)(h.sP)] ? r.selectedColors[0].color : r.lastSelectedColorName);
                            for (const t of Object.values(o)) {
                                const i = t.isTemplate() || t.isAdvancedTemplate();
                                if (t.isInsideLabel() && i) {
                                    if ((!t.color || !e || f.y.isEqual(t.color, e)) && (t.templateType === b.S.LABEL_CUSTOM ? s = t.generatorVariantId : t.templateType === b.S.LABEL_NATIVE ? a = t.generatorVariantId : t.templateType === b.S.LABEL_COLOR_GROUP && (l = t.generatorVariantId)), a && s && l) break
                                }
                            }
                            return {
                                native: a,
                                custom: s,
                                color_group: l
                            }
                        },
                        [y.C5]: (e, t, i, n) => e => {
                            const t = i.designer.productModule.config,
                                r = i.designer.productModule.colors,
                                o = t.getGeneratorParams().generatorVariants;
                            let a = null,
                                s = null,
                                l = null;
                            e || (e = t.isOrderFlowMode && n[(0, h.ak)(h.sP)] ? r.selectedColors[0].color : r.lastSelectedColorName);
                            for (const t of Object.values(o)) {
                                const i = t.isPrimary();
                                if (t.isInsideLabel() && i) {
                                    if ((!t.color || !e || f.y.isEqual(t.color, e)) && (t.templateType === b.S.LABEL_CUSTOM ? s = t.generatorVariantId : t.templateType === b.S.LABEL_NATIVE ? a = t.generatorVariantId : t.templateType === b.S.LABEL_COLOR_GROUP && (l = t.generatorVariantId)), a && s && l) break
                                }
                            }
                            return {
                                native: a,
                                custom: s,
                                color_group: l
                            }
                        },
                        [y.vv]: (e, t, i, n) => (e, t) => {
                            const r = i.designer.productModule.config.getGeneratorParams();
                            let o, a;
                            for (const i in e.mockupIds)
                                if (o = r.generatorVariants[e.mockupIds[i]], i === t) {
                                    a = r.generatorVariants[e.mockupIds[i]];
                                    break
                                } for (const i in e.templateIds)
                                if (o = r.generatorVariants[e.templateIds[i]], i === t) return n[(0, c.ak)(c.Zf)] ? r.generatorVariants[e.templateIds[i]] : a || r.generatorVariants[e.templateIds[i]];
                            return a || o
                        },
                        [y.Aw]: (e, t, i) => () => {
                            var e;
                            const n = i.designer.productModule.config.store;
                            if (null == n || !n.canManageStock() || i.designer.productModule.config.isOrderFlowMode) return !1;
                            if (!n.hasEnabledLimits()) return !1;
                            const r = (null === (e = n.newProductLimits) || void 0 === e ? void 0 : e.quantity) || 0,
                                o = t[y.ko],
                                a = t[y.TU]().allVariantCount - o;
                            return a > r && {
                                limit: r,
                                used: a
                            }
                        },
                        [y.x1]: (e, t, i, n) => e => {
                            var t, i;
                            const r = n[(0, u.getNamespacedCall)(u.productConfigState)],
                                o = r.getSizePicker ? r.getSizePicker() : null,
                                a = r.getColorPicker ? r.getColorPicker() : null,
                                s = null == a ? void 0 : a.selectedColors.map((e => e.color)),
                                l = o instanceof E.d1 ? null == o ? void 0 : o.getSelected() : (null == o ? void 0 : o.selectedSizes) || e;
                            return ((null === (t = r.getGeneratorParams) || void 0 === t || null === (i = t.call(r)) || void 0 === i ? void 0 : i.allAvailableVariants) || []).filter((e => (!l || (0, L.vW)()) && s && s.includes(e.color) || !s && l && l.includes(e.size) || l && s && s.includes(e.color) && l.includes(e.size)))
                        }
                    },
                    actions: {
                        [y.kd](e, t) {
                            let {
                                getters: i,
                                rootState: n,
                                rootGetters: r
                            } = e, {
                                selectedPlacementId: o,
                                labelTemplateType: a,
                                updateLabelTemplateType: s
                            } = t;
                            const l = n.designer.productModule.config,
                                u = null == l ? void 0 : l.getGeneratorParams();
                            if (!l || null == u || !u.variantMapping) return null;
                            const d = (0, O.K$)(l.existingVariants, u.variantMapping),
                                p = n.designer.productModule.colors.lastSelectedColorName,
                                g = !n.designer.productModule.sizes.selectedSizes[0],
                                m = u.variantMapping.find((e => !(d.includes(e.variantId) || p && !f.y.isEqual(e.color, p) || e.color && !r[(0, h.ak)(h.kM)](e.color) || e.size && !r[(0, v.ak)(v.WQ)](e.size) && !g))),
                                _ = u.availablePlacements.find((e => e.id === o));
                            if (_ && C.c7.includes(_.id)) {
                                var I;
                                const e = i[y.XR]();
                                return (null === (I = n.designer.productModule.productItem) || void 0 === I ? void 0 : I.hasAdvancedInsideLabel) && u.allLabelTypesAvailable || s(b.S.LABEL_CUSTOM), u.generatorVariants[e[a]]
                            }
                            if (null == _ || !_.id) return console.error("Tried to find first variant without selected placement!"), null;
                            if (r[(0, c.ak)(c.fm)](m, _)) return u.generatorVariants[m.templateIds[_.id]];
                            let T = null == m ? void 0 : m.mockupIds[_.id];
                            return T ? u.generatorVariants[T] : (T = null == m ? void 0 : m.templateIds[_.id], T ? u.generatorVariants[T] : null)
                        }
                    }
                },
                k = i(3044),
                w = i(13394),
                R = i(87990);
            var D = {
                    state: {
                        embroiderySubTechnique: ""
                    },
                    namespaced: !0,
                    mutations: {
                        [c.w4](e, t) {
                            e.embroiderySubTechnique = t
                        }
                    },
                    getters: {
                        [c.Zf]: (e, t, i) => {
                            var n;
                            const r = null === (n = i.designer.productModule.productItem) || void 0 === n ? void 0 : n.availableTechniques;
                            return !!r && (r.includes(d.ml) || r.includes(d.V_))
                        },
                        [c.fm]: (e, t) => (e, i) => t[c.Zf] && void 0 !== (null == e ? void 0 : e.templateIds[i.id]),
                        [c.fS]: (e, t, i, n) => e => {
                            var t;
                            const r = i.designer.productModule.config.getProductTemplateEditorState(),
                                o = i.designer.productModule.productItem;
                            let a = (0, k.z)(null == o ? void 0 : o.productId).getTechniqueFromMemory() || (null == o || null === (t = o.availableTechniques) || void 0 === t ? void 0 : t.slice().shift()) || (null == o ? void 0 : o.type);
                            return null != o && o.isJewelry() && a !== d.hC && (a = d.hC), e || r && (n[(0, u.getNamespacedCall)(u.isProductTemplateEditor)] && r.isNewTemplateEditor() || (a = null)), a
                        },
                        [c.RB]: (e, t, i) => {
                            var n, r;
                            const o = null === (n = i.designer.productModule.config.getGeneratorParams()) || void 0 === n ? void 0 : n.availableTechniques;
                            if (null == o || !o.length) return [];
                            const a = null === (r = i.designer.productModule.config.getGeneratorParams()) || void 0 === r ? void 0 : r.techniqueDisplayNames;
                            return o.map((e => ({
                                type: e,
                                label: a[e],
                                isNew: e === d.gj && i.designer.productModule.productItem.hasEmbroiderySubTechnique || e === d.Wi && o.length > 1,
                                isBeta: i.designer.productModule.productItem.availableBetaTechniques.includes(e)
                            }))).filter((e => {
                                let {
                                    label: t
                                } = e;
                                return t
                            }))
                        },
                        [c.Vn]: (e, t) => {
                            const i = t[c.RB];
                            if (null == i || !i.length) return [];
                            const n = i.map((e => {
                                let {
                                    type: t
                                } = e;
                                return t
                            }));
                            if (d.nz.some((e => !n.includes(e)))) return i;
                            const r = d.uE,
                                o = [];
                            return i.forEach((e => {
                                d.nz.includes(e.type) ? r.techniques.push(e) : o.push(e)
                            })), o.push(r), o
                        },
                        [c.yf]: (e, t, i) => i.designer.productModule.productTechnique === d.V_,
                        [c.b6]: (e, t, i) => i.designer.productModule.productTechnique === d.hC,
                        [c.lW]: (e, t, i) => i.designer.productModule.productTechnique === d.E$,
                        [c.$]: (e, t, i) => i.designer.productModule.productTechnique === d.ml,
                        [c.Lz]: (e, t, i) => i.designer.productModule.productTechnique,
                        [c.$P]: (e, t, i) => e => {
                            const t = i.designer.productModule.config.getDesignerTemplates(),
                                n = i.designer.productModule.config.getGeneratorVariants(),
                                r = i.designer.productModule.productTechnique;
                            return (0, w.xw)(e, t, n, r)
                        },
                        [c.BZ]: (e, t, i) => e => {
                            const t = i.designer.productModule.config.getDesignerTemplates(),
                                n = i.designer.productModule.config.getGeneratorVariants(),
                                r = i.designer.productModule.productTechnique;
                            return (0, w.r3)(e, t, n, r)
                        },
                        [c.nk]: (e, t, i) => {
                            switch (i.designer.productModule.productTechnique) {
                                case d.V_:
                                    return !(t[c.$P](R.R.EMBROIDERY_OUT_OF_BOUNDS) || t[c.$P](R.R.EMBROIDERY_TEXT_TOO_SMALL) || t[c.$P](R.R.EMBROIDERY_TEXT_HEIGHT_OVER_LIMIT) || t[c.$P](R.R.EMBROIDERY_LAYERS_OVERLAPPING) || t[c.$P](R.R.EMBROIDERY_CLIPART_OUT_OF_BOUNDS) || t[c.$P](R.R.EMBROIDERY_CLIPART_TOO_SMALL));
                                case d.hC:
                                    return !(t[c.BZ](R.R.ENGRAVING_LAYERS_OVERLAPPING) || t[c.BZ](R.R.LAYER_TEXT_TOO_SMALL) || t[c.BZ](R.R.LAYER_CLIPART_TOO_SMALL));
                                default:
                                    return !0
                            }
                        },
                        [c.pX]: (e, t, i) => e => {
                            var t, n, r;
                            const o = i.designer.productModule.productItem;
                            if (!o) return !1;
                            const a = i.designer.activePlacementId,
                                s = o.isStickerSheet() && a === C.Aw,
                                l = o.isStickerSheet() && a === C.Xg,
                                u = o.isMug() || o.isDrinkware() || o.isShoes() || o.isPhoneCase() || o.isPoster() || o.isCanvas() || o.isPostcard() || o.isCandle() || s || o.isFramedPoster(),
                                c = (null === (t = (n = i.designer.productModule.config).getDesignerTemplates) || void 0 === t || null === (r = t.call(n)) || void 0 === r ? void 0 : r.isCoverMode()) && !l;
                            return e ? c || u : c && !u
                        }
                    }
                },
                N = i(81312),
                M = i(99361),
                F = i(72458),
                V = i(29559),
                x = i(11876);
            var G = {
                    state: {
                        orientation: null,
                        templateType: null,
                        stitchColor: null
                    },
                    namespaced: !0,
                    mutations: {
                        [N.oA](e) {
                            Object.assign(e, {
                                orientation: null,
                                templateType: null,
                                stitchColor: null
                            })
                        },
                        [N.N5](e, t) {
                            e.orientation = t
                        },
                        [N.kb](e, t) {
                            e.templateType = t
                        },
                        [N.cM](e, t) {
                            e.stitchColor = t
                        }
                    },
                    getters: {
                        [N.ZF]: e => e.orientation,
                        [N.sq]: e => e.templateType,
                        [N.a0]: e => e.templateType === V.z.TEMPLATE_TYPE_ADVANCED,
                        [N.M3]: (e, t, i) => {
                            const n = i.designer.productModule.productItem;
                            return n && n.hasAdvancedInsideLabel && (n.canHaveOnlyLabelPlacement || n.canHaveLabelMockups) ? V.z.TEMPLATE_TYPE_ADVANCED : e.templateType
                        },
                        [N.qw]: (e, t, i, n) => () => {
                            var e, t, r;
                            if (!(null === (e = (t = i.designer.productModule.config).getGeneratorParams) || void 0 === e || null === (r = e.call(t)) || void 0 === r ? void 0 : r.variantMapping)) return !1;
                            const o = i.designer.activePlacementId;
                            return n[(0, y.ak)(y.Nj)]().some((e => {
                                if (e.advancedTemplateSize) return Object.keys(e.advancedTemplateSize).some((e => !C.c7.includes(e) && e === o))
                            }))
                        },
                        [N.GE]: (e, t, i, n) => {
                            var r;
                            const o = [x.DV, x.JM, x.IZ, x.Lk, x.sH, x.ez, x.i$, x.q0, x.X_, x.J1, x.tD, x.uo, x.XY, x.yF, x.Jy, x.Hj, x.bW, x.om, x.K5, x.KW, x.AH, x.yC, x.Fn];
                            n[(0, c.ak)(c.yf)] || o.push(x.tN);
                            const a = n[(0, F.ak)(F.Vt)];
                            return null === (r = i.designer.productModule.productItem) || void 0 === r ? void 0 : r.getOptionItems(o).map((e => {
                                const t = (0, M.F)(e);
                                return t.isEmbroideryType() && a && (t.disabledValues = [C.BQ, C.Lo], t.disabledValuesLabelText = dlang("dashboard", "Text can't be combined with 3D puff elements.")), t
                            }))
                        }
                    }
                },
                B = i(65311),
                U = i.n(B);
            var H = {
                    state: {
                        availablePlacements: [],
                        excludedPlacements: {},
                        insideLabelMockupPosition: null,
                        hasInsideLabelColorGroup: !1,
                        isPlacementGridVisible: !1,
                        placementPrices: {}
                    },
                    namespaced: !0,
                    mutations: {
                        [F.oA](e) {
                            Object.assign(e, {
                                availablePlacements: [],
                                excludedPlacements: {},
                                insideLabelMockupPosition: null,
                                hasInsideLabelColorGroup: !1,
                                isPlacementGridVisible: !1,
                                placementPrices: {}
                            })
                        },
                        [F.xu](e) {
                            n.default.set(e.excludedPlacements, d.ml, C.c7)
                        },
                        [F.Xl](e, t) {
                            e.insideLabelMockupPosition = t
                        },
                        [F.L](e, t) {
                            e.hasInsideLabelColorGroup = t
                        },
                        [F.hL](e, t) {
                            e.availablePlacements = t
                        },
                        [F.x3](e, t) {
                            e.isPlacementGridVisible = t, U()("#js--lifelike-button").popover("hide")
                        },
                        [F.kw](e, t) {
                            e.placementPrices = t
                        }
                    },
                    getters: {
                        [F.Db]: e => e.excludedPlacements,
                        [F.op]: (e, t, i) => i.designer.productModule.productPlacementTechnique === d.V_,
                        [F.iz]: (e, t, i) => i.designer.productModule.productPlacementTechnique === d.ml,
                        [F.$9]: (e, t, i) => i.designer.productModule.productPlacementTechnique === d.Ub,
                        [F.Io]: (e, t, i) => d.nz.includes(i.designer.productModule.productPlacementTechnique),
                        [F.EO]: (e, t, i) => C.c7.includes(i.designer.activePlacementId),
                        [F.HE]: (e, t, i) => [C.sb, C.If].includes(i.designer.activePlacementId),
                        [F.ej]: (e, t, i) => i.designer.activePlacementId === C.TE,
                        [F.Vt]: (e, t, i) => {
                            const n = i.designer.activePlacementId;
                            return t[F.op] && i.designer.productModule.config.getDesignerTemplates().hasTextLayers(n)
                        },
                        [F.IT]: (e, t, i, n) => {
                            var r, o, a;
                            const s = i.designer.productModule.productItem;
                            let l = i.designer.productModule.labelTemplateType !== b.S.LABEL_NATIVE || (null === (r = (o = i.designer.productModule.config).getGeneratorParams) || void 0 === r || null === (a = r.call(o)) || void 0 === a ? void 0 : a.allLabelTypesAvailable);
                            return !!s && (t[F.EO] && s.isAdvancedInsideLabelAllowed() && l)
                        },
                        [F.RX]: e => e.insideLabelMockupPosition,
                        [F.Mz]: e => e.hasInsideLabelColorGroup,
                        [F.qP]: e => t => {
                            var i;
                            if (!e.placementPrices) return !1;
                            return Object.values(e.placementPrices).filter((e => e.basePrice || e.finalPrice)).length && (null === (i = e.placementPrices) || void 0 === i ? void 0 : i.hasOwnProperty(t))
                        },
                        [F.DV]: e => e.availablePlacements.length > 1,
                        [F.w]: (e, t, i) => {
                            const n = i.designer.activePlacementId;
                            return e.availablePlacements.find((e => e.id === n))
                        },
                        [F.Ms]: e => e.placementPrices
                    },
                    actions: {
                        [F.oE](e) {
                            let {
                                commit: t,
                                rootState: i
                            } = e;
                            const n = i.designer.productModule.productItem;
                            if (!n) return;
                            const r = i.designer.productModule.config.isProductPushMode && n.isAdvancedInsideLabelAllowed(),
                                o = !!i.designer.productModule.config.getProductTemplateEditorState();
                            i.designer.productModule.config.isOrderFlowMode || r || o || n.canHaveOnlyLabelPlacement || n.canHaveLabelMockups || t(F.xu)
                        }
                    }
                },
                z = i(33058),
                j = i(58617);
            var Y = i(60946),
                q = i(95619);
            var W = {
                state: {
                    isUsingEmbroideryPredictions: !1,
                    embroideryTaskId: null,
                    isCalculating: !1,
                    embroideryTiers: null,
                    fetchingTiersPromise: null,
                    selectedTier: null,
                    productionCurrency: null,
                    currency: null
                },
                namespaced: !0,
                mutations: {
                    [z.oA](e) {
                        Object.assign(e, {
                            isUsingEmbroideryPredictions: !1,
                            embroideryTaskId: null,
                            isCalculating: !1,
                            embroideryTiers: null,
                            fetchingTiersPromise: null,
                            selectedTier: null,
                            productionCurrency: null,
                            currency: null
                        }, {
                            embroideryTiers: e.embroideryTiers
                        })
                    },
                    [z.zl](e, t) {
                        e.isCalculating = t
                    },
                    [z.dG](e, t) {
                        e.isUsingEmbroideryPredictions = t
                    },
                    [z.I4](e, t) {
                        e.embroideryTaskId = t
                    },
                    [z.X1](e, t) {
                        e.embroideryTiers = t
                    },
                    [z.Wg](e, t) {
                        e.selectedTier = t
                    },
                    [z.NW](e, t) {
                        e.currency = t
                    },
                    [z.au](e, t) {
                        e.productionCurrency = t
                    },
                    [z.hd](e, t) {
                        e.fetchingTiersPromise = t
                    }
                },
                getters: {
                    [z.sv]: e => null !== e.selectedTier,
                    [z.Zu]: e => e.isCalculating,
                    [z.QA]: e => e.isUsingEmbroideryPredictions,
                    [z.GH]: e => e.embroideryTaskId,
                    [z.qw]: e => e.embroideryTiers ? e.embroideryTiers.filter((t => t.currency === e.currency && t.productionCurrency === e.productionCurrency)) : [],
                    [z.iu]: e => e.selectedTier,
                    [z.t9]: e => {
                        const t = K(e);
                        return t ? prettyMoney(t.discountedPrice, t.currency) : null
                    },
                    [z.tc]: e => e.isCalculating
                },
                actions: {
                    async [z.QJ](e, t) {
                        let {
                            commit: i
                        } = e;
                        i(z.zl, !0);
                        const n = await async function(e) {
                            return await (0, j.r)("/rpc/embroidery-rpc/calculate-price", {
                                designData: e
                            })
                        }(t);
                        if (0 !== n.state) throw i(z.zl, !1), new Error("cost calculation failed");
                        await new Promise(((e, t) => {
                            Y.D.subscribe(n.taskPusherKey, "onFailed", (() => {
                                console.error("cost calculation task failed"), i(z.zl, !1), t()
                            })), Y.D.subscribe(n.taskPusherKey, "onSuccess", (t => {
                                i(z.dG, !0), i(z.I4, n.embroideryTaskId), i(z.Wg, t.servicePriceCategory), e()
                            }))
                        })), i(z.zl, !1)
                    },
                    async [z._u](e) {
                        let {
                            commit: t,
                            state: i,
                            rootGetters: n
                        } = e;
                        if (i.fetchingTiersPromise) return i.fetchingTiersPromise;
                        if (i.embroideryTiers) return Promise.resolve();
                        const r = n[(0, p.ak)(p.xI)] ? (0, q.hN)(i.currency) : async function(e) {
                            return (0, j.r)("/rpc/embroidery-rpc/get-embroidery-tiers", {
                                currency: e
                            })
                        }(i.currency);
                        return r.then((e => {
                            t(z.X1, e), t(z.hd, null)
                        })), t(z.hd, r), r
                    }
                }
            };
            const K = e => e.embroideryTiers ? e.embroideryTiers.find((t => t.currency === e.currency && t.productionCurrency === e.productionCurrency && t.category === e.selectedTier)) : null;
            var Q = {
                state: {
                    productItem: null,
                    placementsWithOnlyBackgroundColor: [],
                    optionGroupTagInfo: l.hE,
                    productTechnique: null,
                    productPlacementTechnique: null,
                    labelTemplateType: null,
                    isProductLoaded: !1
                },
                namespaced: !0,
                modules: {
                    config: m,
                    colors: I,
                    sizes: P,
                    variants: A,
                    technique: D,
                    options: G,
                    placements: H,
                    pricing: W
                },
                mutations: {
                    [a.Sz](e, t) {
                        let {
                            productItem: i
                        } = t;
                        i instanceof s.W ? e.productItem = i || null : e.productItem = i ? s.W.fromArray(i) : null
                    },
                    [a.Qj](e, t) {
                        e.isProductLoaded = t
                    },
                    [a.JS](e, t) {
                        e.labelTemplateType = t
                    },
                    [a.lT](e, t) {
                        let {
                            placements: i
                        } = t;
                        e.placementsWithOnlyBackgroundColor = null != i ? i : []
                    },
                    [a.Y7](e, t) {
                        e.optionGroupTagInfo = t
                    },
                    [a.Qz](e, t) {
                        e.productTechnique = t
                    },
                    [a.yZ](e, t) {
                        e.productPlacementTechnique = t
                    }
                },
                getters: {
                    [a.mZ]: e => e.productItem,
                    [a.sU]: e => e.placementsWithOnlyBackgroundColor,
                    [a.i2]: e => e.optionGroupTagInfo,
                    [a.Lz]: e => e.productTechnique,
                    [a.gN]: e => e.productPlacementTechnique,
                    [a._4]: (e, t, i, n) => {
                        const r = e.productItem;
                        if (null == r || !r.productId) return null;
                        const o = i.designer.activePlacementId;
                        return [s.W.ID_T_SHIRT_BB453, s.W.ID_T_SHIRT_TC245].includes(r.productId) && [C.nZ, C.zX].includes(o) ? dlang("generator", "Placement is approximate and graphics larger than 12x13â€ will be scaled to clear the garment seams") : s.W.YOGA_PRODUCTS.includes(r.productId) && n[(0, F.ak)(F.EO)] ? dlang("generator", "Please note - back waist print file is copied on the inside of the waistband, so the inside label will appear on top of your design") : o === C.zX && r.productId === s.W.ID_ANVIL_71600 ? dlang("generator", "Because of the stitching at the top, we recommend placing graphics lower so they donâ€™t print over the seams") : null
                    }
                }
            };
            const X = Object.freeze({
                IS_LOADING_QUICK_DESIGNS: "IS_LOADING_QUICK_DESIGNS"
            });
            var $ = i(65613),
                Z = i(20888),
                J = i(79421);
            const ee = e => (0, J.Z)("designer/get-cliparts", e),
                te = e => (0, j.r)("/rpc/designer-rpc/get-favorite-assets", e),
                ie = e => (0, j.r)("/rpc/designer-rpc/update-favorite-assets", e),
                ne = () => window.embeddedDesigner ? {
                    fetchOptions: {
                        headers: {
                            "X-Embedded-Designer": !0
                        }
                    }
                } : {};
            var re = i(29e3),
                oe = i(14176),
                ae = i(7495),
                se = i(23848),
                le = i(63037);
            const ue = e => {
                    let {
                        params: {
                            isFavorite: t
                        },
                        states: {
                            favoritedAsset: i,
                            unfavoritedAsset: n
                        }
                    } = e;
                    t ? ce(i) : de(n)
                },
                ce = e => {
                    let {
                        params: {
                            target: t
                        },
                        targets: {
                            asset: i,
                            favoriteButton: n
                        }
                    } = e;
                    t === le.i.ITEM ? i() : t === le.i.FAVORITE_BUTTON && n()
                },
                de = e => {
                    let {
                        params: {
                            currentState: t,
                            target: i,
                            assetId: n,
                            activeAssetId: r
                        },
                        states: {
                            idle: o,
                            favoriteButtonShown: {
                                targets: {
                                    asset: a,
                                    favoriteButton: s,
                                    outside: l
                                }
                            }
                        }
                    } = e;
                    t ? t === le.n.FAVORITE_BUTTON_SHOWN && (i === le.i.ITEM ? a() : i === le.i.FAVORITE_BUTTON ? s() : i === le.i.OUTSIDE && r === n && l()) : o()
                };
            var pe = {
                    state: {
                        clipartGroupRepository: {},
                        clipartRepository: {},
                        clipartFilter: null,
                        clipartSearchFilter: null,
                        cachedGroupsByFilterKey: {},
                        cachedSearchesByFilterKey: {},
                        trendingCache: {},
                        techniqueUnavailableCache: {},
                        loadingPromise: null,
                        searchLoadingPromise: null,
                        isFavoriteClipartsViewVisible: !1,
                        activeTab: null,
                        lastRemovedFavoriteClipartId: null,
                        categoriesCache: {},
                        favorites: {},
                        activeClipartItemInteractionId: null,
                        clipartItemInteractionState: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Z.h5](e, t) {
                            t.forEach((t => {
                                n.default.set(e.clipartRepository, t.id, t)
                            }))
                        },
                        [Z.Qm](e, t) {
                            n.default.set(e.clipartGroupRepository, t.id, t)
                        },
                        [Z.d9](e, t) {
                            let {
                                groupId: i,
                                technique: r
                            } = t;
                            const o = e.clipartRepository[i],
                                a = new ae.Y(o);
                            a.loadedAllForTechnique.push(r), n.default.set(e.clipartGroupRepository, i, a)
                        },
                        [Z.ki](e, t) {
                            let {
                                cacheKey: i,
                                clipartGroups: r,
                                page: o,
                                hasAllLoaded: a
                            } = t;
                            const s = e.cachedGroupsByFilterKey[i] ? e.cachedGroupsByFilterKey[i] : {
                                groups: [],
                                page: 0,
                                hasAllLoaded: !1
                            };
                            s.groups.push(...r), s.page = o, s.hasAllLoaded = a, n.default.set(e.cachedGroupsByFilterKey, i, s)
                        },
                        [Z.Cc](e, t) {
                            let {
                                cacheKey: i,
                                clipartIds: r,
                                page: o,
                                hasAllLoaded: a
                            } = t;
                            const s = e.cachedSearchesByFilterKey[i] ? e.cachedSearchesByFilterKey[i] : {
                                itemIds: [],
                                page: 0,
                                hasAllLoaded: !1
                            };
                            s.itemIds.push(...r), s.page = o, s.hasAllLoaded = a, n.default.set(e.cachedSearchesByFilterKey, i, s)
                        },
                        [Z.aV](e, t) {
                            let {
                                technique: i = null,
                                isPro: n = null,
                                fills: r = null,
                                sortBy: o = null,
                                types: a = null,
                                reset: s = !1,
                                category: l = null
                            } = t;
                            const u = s ? new re.w({}) : new re.w(e.clipartFilter);
                            null !== i && (u.technique = i), null !== n && (u.isPro = n), null !== r && (u.fills = r), null !== o && (u.sortBy = o), null !== a && (u.types = a), null !== l && (u.category = l), e.clipartFilter = u
                        },
                        [Z.Sm](e, t) {
                            let {
                                technique: i = null,
                                searchKey: n = null,
                                reset: r = !1,
                                isPro: o = null,
                                category: a = null
                            } = t;
                            const s = r ? new re.w({}) : new re.w(e.clipartSearchFilter);
                            null !== i && (s.technique = i), null !== n && (s.searchKey = n), null !== o && (s.isPro = o), null !== a && (s.category = a), e.clipartSearchFilter = s
                        },
                        [Z.NK](e, t) {
                            let {
                                technique: i,
                                groupNames: r
                            } = t;
                            n.default.set(e.trendingCache, i, r)
                        },
                        [Z._K](e, t) {
                            let {
                                technique: i,
                                clipartIds: r
                            } = t;
                            e.techniqueUnavailableCache[i] && (r = [...e.techniqueUnavailableCache[i], ...r]), n.default.set(e.techniqueUnavailableCache, i, r)
                        },
                        [Z.iU](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.isFavoriteClipartsViewVisible = null !== t ? t : !e.isFavoriteClipartsViewVisible
                        },
                        [Z.XV](e, t) {
                            let {
                                technique: i,
                                categories: r
                            } = t;
                            n.default.set(e.categoriesCache, i, r)
                        },
                        [Z.EM](e, t) {
                            e.lastRemovedFavoriteClipartId = t
                        },
                        [Z.r7](e, t) {
                            e.activeTab = t
                        },
                        [Z.Fo](e, t) {
                            let {
                                technique: i,
                                clipartIds: r
                            } = t;
                            n.default.set(e.favorites, i, r)
                        },
                        [Z.B3](e, t) {
                            var i;
                            let {
                                technique: r,
                                clipartId: o
                            } = t;
                            const a = (null === (i = e.favorites[r]) || void 0 === i ? void 0 : i.slice()) || [],
                                s = a.includes(o) ? a.filter((e => e !== o)) : [...a, o];
                            n.default.set(e.favorites, r, s)
                        },
                        [Z.BQ](e, t) {
                            e.activeClipartItemInteractionId = t
                        },
                        [Z.Ym](e, t) {
                            e.clipartItemInteractionState = t
                        },
                        [Z.hW](e) {
                            e.clipartItemInteractionState = null, e.activeClipartItemInteractionId = null
                        }
                    },
                    actions: {
                        async [Z.Rv](e, t) {
                            var i;
                            let {
                                filterParams: n
                            } = t;
                            if (null !== (i = n.itemIds) && void 0 !== i && i.length) {
                                const t = Object.keys(e.state.clipartRepository).map((e => parseInt(e))),
                                    i = n.itemIds.filter((i => {
                                        var r;
                                        return !(t.includes(parseInt(i)) || null !== (r = e.state.techniqueUnavailableCache[n.technique]) && void 0 !== r && r.includes(parseInt(i)))
                                    }));
                                if (i.length) {
                                    const t = new re.w(n);
                                    t.itemIds = i;
                                    try {
                                        const n = (await ee(t.getRpcData())).map((e => new oe.i(e))),
                                            r = n.map((e => e.id)),
                                            o = i.filter((e => !r.includes(e)));
                                        e.commit(Z.h5, n), e.commit(Z._K, {
                                            technique: t.technique,
                                            clipartIds: o
                                        })
                                    } catch (e) {
                                        (0, $.logError)(e)
                                    }
                                }
                            } else {
                                if (n.isPro && !e.state.cachedGroupsByFilterKey[n.getCacheKey()]) return await e.state.loadingPromise, void await e.dispatch(Z.aR, n);
                                console.error("Unsupported clipart loading", n.getRpcData())
                            }
                        },
                        async [Z.aR](e, t) {
                            if (e.state.loadingPromise) return e.state.loadingPromise;
                            const i = t.getCacheKey(),
                                n = e.state.cachedGroupsByFilterKey[i];
                            if (t.page = null != n && n.page ? n.page + 1 : 1, null == n || !n.hasAllLoaded) try {
                                e.state.loadingPromise || (e.state.loadingPromise = ee(t.getRpcData()).then((async t => {
                                    const n = [];
                                    t.groups.forEach((t => {
                                        const i = t.initialCliparts.map((e => new oe.i(e)));
                                        e.commit(Z.h5, i);
                                        const r = new ae.Y(t);
                                        n.push(r), e.commit(Z.Qm, r)
                                    })), e.commit(Z.ki, {
                                        cacheKey: i,
                                        clipartGroups: n,
                                        page: t.page,
                                        hasAllLoaded: !n.length
                                    }), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Z.TF](e) {
                            var t;
                            const i = e.state.clipartSearchFilter,
                                n = i.getCacheKey(),
                                r = e.state.cachedSearchesByFilterKey[n];
                            if (i.page = null != r && r.page ? r.page + 1 : 1, !(null != r && r.hasAllLoaded || null == i || null === (t = i.searchKey) || void 0 === t) && t.length) try {
                                return e.state.searchLoadingPromise || (e.state.searchLoadingPromise = ee(i.getRpcData()).then((async t => {
                                    const i = t.items.map((e => new oe.i(e)));
                                    e.commit(Z.h5, i), e.commit(Z.Cc, {
                                        cacheKey: n,
                                        clipartIds: i.map((e => e.id)),
                                        page: t.page,
                                        hasAllLoaded: !i.length
                                    }), e.state.searchLoadingPromise = null
                                }))), e.state.searchLoadingPromise
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Z.em](e, t) {
                            const i = e.rootState.designer.productModule.productPlacementTechnique || e.rootState.designer.type,
                                n = e.state.clipartGroupRepository[t];
                            if (n || console.error("Group not available, id:", t), n.loadedAllForTechnique.includes(i)) return;
                            const r = new re.w({
                                technique: i,
                                itemIds: n.allClipartIds
                            });
                            await e.dispatch(Z.Rv, {
                                filterParams: r
                            }), e.commit(Z.d9, {
                                groupId: t,
                                technique: i
                            })
                        },
                        async [Z.rc](e) {
                            const t = e.rootState.designer.productModule.productPlacementTechnique || e.rootState.designer.type;
                            var i;
                            if (!e.state.trendingCache[t]) try {
                                const n = await (i = {
                                    technique: t
                                }, (0, J.Z)("designer/get-trending-clipart-groups", i));
                                e.commit(Z.NK, {
                                    groupNames: n.groupNames,
                                    technique: t
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Z.j$](e, t) {
                            const i = await (n = {
                                groupId: t
                            }, (0, J.Z)("designer/get-clipart-group-by-id", n));
                            var n;
                            return e.commit(Z.Qm, i.group), e.getters[Z.LJ](t)
                        },
                        async [Z.jI](e) {
                            const t = e.rootState.designer.productModule.productPlacementTechnique || e.rootState.designer.type;
                            var i;
                            if (!e.state.categoriesCache[t]) try {
                                const n = await (i = {
                                    technique: t
                                }, (0, J.Z)("designer/get-clipart-categories", i));
                                e.commit(Z.XV, {
                                    categories: n.categories,
                                    technique: t
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Z.PI](e, t) {
                            let {
                                technique: i,
                                clipartIds: n = null
                            } = t;
                            const r = {
                                technique: i,
                                type: se.IP
                            };
                            n && (r.ids = n);
                            try {
                                const t = await te(r);
                                t.success && e.commit(Z.Fo, {
                                    clipartIds: t.assetIds,
                                    technique: i
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Z.E3](e, t) {
                            let {
                                technique: i
                            } = t;
                            e.state.favorites[i] || await e.dispatch(Z.PI, {
                                technique: i
                            })
                        },
                        async [Z.Tk](e, t) {
                            let {
                                technique: i,
                                clipartId: n
                            } = t;
                            e.commit(Z.B3, {
                                technique: i,
                                clipartId: n
                            });
                            try {
                                (await ie({
                                    technique: i,
                                    type: se.IP,
                                    id: n
                                })).success || e.commit(Z.B3, {
                                    technique: i,
                                    clipartId: n
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                            e.state.isFavoriteClipartsViewVisible && e.state.lastRemovedFavoriteClipartId !== n && e.commit(Z.EM, n)
                        },
                        [Z.ZA](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e, {
                                id: r,
                                isFavorite: o,
                                target: a
                            } = t;
                            i.activeClipartItemInteractionId || n(Z.BQ, r), i.activeClipartItemInteractionId === r && ue({
                                params: {
                                    isFavorite: o
                                },
                                states: {
                                    favoritedAsset: {
                                        params: {
                                            target: a
                                        },
                                        targets: {
                                            asset: () => n(Z.Ym, le.n.FINAL_ADD_ITEM),
                                            favoriteButton: () => n(Z.Ym, le.n.FINAL_TOGGLE_FAVORITE)
                                        }
                                    },
                                    unfavoritedAsset: {
                                        params: {
                                            currentState: i.clipartItemInteractionState,
                                            target: a,
                                            assetId: r,
                                            activeAssetId: i.activeClipartItemInteractionId
                                        },
                                        states: {
                                            idle: () => n(Z.Ym, le.n.FAVORITE_BUTTON_SHOWN),
                                            favoriteButtonShown: {
                                                targets: {
                                                    asset: () => n(Z.Ym, le.n.FINAL_ADD_ITEM),
                                                    favoriteButton: () => n(Z.Ym, le.n.FINAL_TOGGLE_FAVORITE),
                                                    outside: () => n(Z.hW)
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    },
                    getters: {
                        [Z.LJ]: e => t => {
                            var i;
                            return null === (i = e.clipartGroupRepository) || void 0 === i ? void 0 : i[t]
                        },
                        [Z.V7]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.clipartRepository) || void 0 === i ? void 0 : i[t]
                        })).filter(Boolean),
                        [Z.SU]: e => {
                            var t;
                            const i = null === (t = e.clipartFilter) || void 0 === t ? void 0 : t.getCacheKey();
                            return e.cachedGroupsByFilterKey[i] || null
                        }
                    }
                },
                ge = i(30675),
                me = i(69182),
                he = i(61308),
                fe = i(40012),
                ye = i(66450);
            const ve = e => Object.values(e).map((e => ye.K.fromArray(e)));
            var _e = {
                    state: {
                        colorGraphicRepository: {},
                        loadingPromise: null
                    },
                    namespaced: !0,
                    mutations: {
                        [fe.Wg](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: he.o.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [fe._v](e, t) {
                            t.forEach((t => n.default.set(e.colorGraphicRepository, t.id, t)))
                        }
                    },
                    actions: {
                        async [fe.yS](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_COLOR_GRAPHICS);
                            e.getters[fe.cD] && !t || await e.dispatch(fe.a1, t)
                        },
                        async [fe.a1](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[fe.cD] && !t) return;
                            if (e.state.loadingPromise && !t) return await e.state.loadingPromise;
                            const i = (() => {
                                try {
                                    const e = window.localStorage.getItem((0, me.x4)(he.H));
                                    return e && "[]" !== e ? ve(JSON.parse(e)) : null
                                } catch (e) {
                                    return null
                                }
                            })();
                            if (null != i && i.length && !t) return e.commit(fe._v, i), void e.commit(fe.Wg, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("designer/get-color-graphics").then((async t => {
                                    await (0, me.f4)(he.H, t), (0, me.bB)(me.$G.UPDATE_COLOR_GRAPHICS, !1), e.commit(fe._v, ve(t)), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(fe.Wg, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        }
                    },
                    getters: {
                        [fe.cD]: e => (0, ge.h)(e, {
                            key: he.o.HAS_LOADED_ALL
                        }),
                        [fe.PR]: e => Object.values(e.colorGraphicRepository).filter((e => e.isActive && e.extra.textFill)).sort(((e, t) => e.index - t.index)),
                        [fe.Mp]: e => Object.values(e.colorGraphicRepository).filter((e => e.isActive && e.extra.bgFill)).sort(((e, t) => e.index - t.index)),
                        [fe.Kb]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.colorGraphicRepository) || void 0 === i ? void 0 : i[t]
                        }))
                    }
                },
                Ie = i(16131),
                Te = i(7746),
                Ee = i(9345),
                Pe = {
                    state: {
                        quickDesignGroupRepository: {},
                        quickDesignRepository: {},
                        recentCache: {},
                        favorites: {},
                        loadingPromise: null,
                        isFavoriteQuickDesignsViewVisible: !1,
                        lastRemovedFavoriteQuickDesignId: null,
                        activeQuickDesignItemInteractionId: null,
                        quickDesignItemInteractionState: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Ie.Rh](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: Ee.b.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [Ie.yp](e, t) {
                            t.forEach((t => {
                                n.default.set(e.quickDesignRepository, t.id, t)
                            }))
                        },
                        [Ie.HQ](e, t) {
                            let {
                                quickDesignItemId: i,
                                technique: n
                            } = t;
                            Object.values(e.recentCache).length || (e.recentCache = (0, Te.ZY)());
                            let r = e.recentCache[n];
                            r || (r = []);
                            const o = r.indexOf(i);
                            o > -1 && r.splice(o, 1), r.unshift(i), e.recentCache[n] = r.slice(0, Ee.D.MAX_RECENT_CACHE), (0, Te.Qp)((0, me.Ug)(Ee.D), e.recentCache)
                        },
                        [Ie.W$](e, t) {
                            e.recentCache = t
                        },
                        [Ie.ql](e, t) {
                            e.favorites = t
                        },
                        [Ie.Go](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.isFavoriteQuickDesignsViewVisible = null !== t ? t : !e.isFavoriteQuickDesignsViewVisible
                        },
                        [Ie.oq](e, t) {
                            e.lastRemovedFavoriteQuickDesignId = t
                        },
                        [Ie.R3](e, t) {
                            var i;
                            let {
                                technique: r,
                                assetId: o
                            } = t;
                            const a = (null === (i = e.favorites[r]) || void 0 === i ? void 0 : i.slice()) || [],
                                s = a.includes(o) ? a.filter((e => e !== o)) : [o, ...a];
                            n.default.set(e.favorites, r, s)
                        },
                        [Ie.VO](e, t) {
                            let {
                                technique: i,
                                assetIds: r
                            } = t;
                            n.default.set(e.favorites, i, r)
                        },
                        [Ie.hd](e, t) {
                            e.activeQuickDesignItemInteractionId = t
                        },
                        [Ie.dQ](e, t) {
                            e.quickDesignItemInteractionState = t
                        },
                        [Ie.aj](e) {
                            e.quickDesignItemInteractionState = null, e.activeQuickDesignItemInteractionId = null
                        }
                    },
                    actions: {
                        async [Ie.lK](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_QUICK_DESIGNS);
                            e.getters[Ie.HK] && !t || await e.dispatch(Ie.yS, t)
                        },
                        [Ie.zy](e, t) {
                            t.forEach((t => {
                                n.default.set(e.state.quickDesignGroupRepository, t.id, t), e.commit(Ie.yp, t.items)
                            }))
                        },
                        async [Ie.yS](e) {
                            var t;
                            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[Ie.HK] && !i) return;
                            if (e.state.loadingPromise && !i) return await e.state.loadingPromise;
                            let n = (0, Te.PQ)();
                            if (null !== (t = n) && void 0 !== t && t.length && !i) return await e.dispatch(Ie.zy, (0, Te.F7)(n)), void e.commit(Ie.Rh, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("designer/get-quick-designs").then((async t => {
                                    await (0, me.f4)(Ee.D, t), (0, me.bB)(me.$G.UPDATE_QUICK_DESIGNS, !1), n = (0, Te.F7)(t), await e.dispatch(Ie.zy, n), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(Ie.Rh, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Ie.hj](e, t) {
                            const {
                                itemIds: i,
                                forTechnique: n
                            } = t, r = e.getters[Ie.Ly](i);
                            if (!i.filter((e => {
                                    const t = r.find((t => (null == t ? void 0 : t.id) === e));
                                    if (!t) return !0;
                                    const i = t.designData.length > 0,
                                        o = t.unavailableTechniques.includes(n);
                                    return !i || o
                                })).length) return r;
                            try {
                                const n = await (e => (0, J.Z)("designer/get-quick-design-items", e))(t);
                                return n.length ? (e.commit(Ie.yp, (0, Te.xd)(n)), e.getters[Ie.Ly](i)) : []
                            } catch (e) {
                                return (0, $.logError)(e), []
                            }
                        },
                        async [Ie.Er](e) {
                            var t;
                            if (!e.state.recentCache.length) {
                                const t = (0, Te.ZY)();
                                e.commit(Ie.W$, t)
                            }
                            null !== (t = e.state.recentCache) && void 0 !== t && t.length && await e.dispatch(Ie.lK)
                        },
                        async [Ie.ve](e, t) {
                            let {
                                technique: i
                            } = t;
                            e.state.favorites[i] || await e.dispatch(Ie.PI, {
                                technique: i
                            })
                        },
                        async [Ie.PI](e, t) {
                            let {
                                technique: i,
                                assetIds: n = null
                            } = t;
                            const r = {
                                technique: i,
                                type: Te.IP
                            };
                            n && (r.ids = n);
                            try {
                                const t = await te(r);
                                t.success && e.commit(Ie.VO, {
                                    assetIds: t.assetIds,
                                    technique: i
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Ie.Tk](e, t) {
                            let {
                                technique: i,
                                assetId: n
                            } = t;
                            e.commit(Ie.R3, {
                                technique: i,
                                assetId: n
                            });
                            try {
                                (await ie({
                                    technique: i,
                                    type: Te.IP,
                                    id: n
                                })).success || e.commit(Ie.R3, {
                                    technique: i,
                                    assetId: n
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                            e.state.isFavoriteQuickDesignsViewVisible && e.state.lastRemovedFavoriteQuickDesignId !== n && e.commit(Ie.oq, n)
                        },
                        [Ie.Ks](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e, {
                                id: r,
                                isFavorite: o,
                                target: a
                            } = t;
                            i.activeQuickDesignItemInteractionId || n(Ie.hd, r), i.activeQuickDesignItemInteractionId === r && ue({
                                params: {
                                    isFavorite: o
                                },
                                states: {
                                    favoritedAsset: {
                                        params: {
                                            target: a
                                        },
                                        targets: {
                                            asset: () => n(Ie.dQ, le.n.FINAL_ADD_ITEM),
                                            favoriteButton: () => n(Ie.dQ, le.n.FINAL_TOGGLE_FAVORITE)
                                        }
                                    },
                                    unfavoritedAsset: {
                                        params: {
                                            currentState: i.quickDesignItemInteractionState,
                                            target: a,
                                            assetId: r,
                                            activeAssetId: i.activeQuickDesignItemInteractionId
                                        },
                                        states: {
                                            idle: () => n(Ie.dQ, le.n.FAVORITE_BUTTON_SHOWN),
                                            favoriteButtonShown: {
                                                targets: {
                                                    asset: () => n(Ie.dQ, le.n.FINAL_ADD_ITEM),
                                                    favoriteButton: () => n(Ie.dQ, le.n.FINAL_TOGGLE_FAVORITE),
                                                    outside: () => n(Ie.aj)
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    },
                    getters: {
                        [Ie.HK]: e => (0, ge.h)(e, {
                            key: Ee.b.HAS_LOADED_ALL
                        }),
                        [Ie.IJ]: e => t => (0, Te.Gj)(Object.values(e.quickDesignGroupRepository), t).filter((e => {
                            var t;
                            return e.isActive && !(null !== (t = e.extra) && void 0 !== t && t.onlyTexts)
                        })).map((e => (e.items = e.items.filter((e => e.isActive)), e))).sort(((e, t) => e.index - t.index)),
                        [Ie.qq]: e => t => (0, Te.Gj)(Object.values(e.quickDesignGroupRepository), t).filter((e => {
                            var t;
                            return e.isActive && (null === (t = e.extra) || void 0 === t ? void 0 : t.onlyTexts)
                        })).map((e => (e.items = e.items.filter((e => e.isActive)), e))).sort(((e, t) => e.index - t.index)).slice(0, 5),
                        [Ie.vF]: (e, t) => i => {
                            var n;
                            return null !== (n = e.recentCache[i]) && void 0 !== n && n.length ? t[Ie.Ly](e.recentCache[i]).filter((e => e && e.isActive && !(0, Te.T$)(e, i))).slice(0, Ee.D.MAX_RECENT_SHOW) : []
                        },
                        [Ie.nR]: (e, t) => i => {
                            var n;
                            return null !== (n = e.favorites[i]) && void 0 !== n && n.length ? t[Ie.Ly](e.favorites[i]).filter((e => e && e.isActive && !(0, Te.T$)(e, i))) : []
                        },
                        [Ie.sK]: e => t => {
                            var i;
                            return null === (i = e.quickDesignGroupRepository) || void 0 === i ? void 0 : i[t]
                        },
                        [Ie.Ly]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.quickDesignRepository) || void 0 === i ? void 0 : i[t]
                        }))
                    }
                },
                Se = i(59805),
                be = i(16964),
                Oe = i(5735);
            const Ce = "font";
            var Le = {
                    state: {
                        fontRepository: {},
                        fontsJsUrlsRepository: {},
                        fontsTtfUrlsRepository: {},
                        loadingPromise: null,
                        isFavoriteFontsViewVisible: !1,
                        currentlyUsedFonts: [],
                        lastRemovedFavoriteFontId: null,
                        favorites: {}
                    },
                    namespaced: !0,
                    mutations: {
                        [be.mW](e, t) {
                            e.currentlyUsedFonts = t
                        },
                        [be.yh](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: Se.YG.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [be.IB](e, t) {
                            e.fontRepository = t[Se.iQ.FONTS], e.fontsJsUrlsRepository = t[Se.iQ.FONTS_JS_URLS], e.fontsTtfUrlsRepository = t[Se.iQ.FONTS_TTF_URLS]
                        },
                        [be.nM](e) {
                            (0, Oe.xM)({
                                [Se.iQ.FONTS]: e.fontRepository,
                                [Se.iQ.FONTS_JS_URLS]: e.fontsJsUrlsRepository,
                                [Se.iQ.FONTS_TTF_URLS]: e.fontsTtfUrlsRepository
                            })
                        },
                        [be.WY](e, t) {
                            n.default.set(e.fontRepository, t.fontKey, t)
                        },
                        [be.RO](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.isFavoriteFontsViewVisible = null != t ? t : !e.isFavoriteFontsViewVisible
                        },
                        [be.al](e, t) {
                            e.lastRemovedFavoriteFontId = t
                        },
                        [be.Fo](e, t) {
                            let {
                                technique: i,
                                fontIds: r
                            } = t;
                            n.default.set(e.favorites, i, r)
                        },
                        [be.B3](e, t) {
                            var i;
                            let {
                                technique: r,
                                fontId: o
                            } = t;
                            const a = (null === (i = e.favorites[r]) || void 0 === i ? void 0 : i.slice()) || [],
                                s = a.includes(o) ? a.filter((e => e !== o)) : [...a, o];
                            n.default.set(e.favorites, r, s)
                        }
                    },
                    actions: {
                        [be.hd](e) {
                            const t = e.rootGetters[(0, p.ak)(p.dl)],
                                i = [...new Set(t.map((e => e.font)))];
                            e.commit(be.mW, i)
                        },
                        async [be.fi](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_FONTS),
                                i = e.rootGetters[(0, p.ak)(p.xI)];
                            e.getters[be.CN] && !t || await e.dispatch(be.hR, {
                                force: t,
                                forEmbeddedDesigner: i
                            })
                        },
                        async [be.hR](e, t) {
                            let {
                                force: i = !1,
                                forEmbeddedDesigner: n = !1
                            } = t;
                            if (e.getters[be.CN] && !i) return;
                            if (e.state.loadingPromise && !i) return e.state.loadingPromise;
                            const r = (0, Oe.qe)();
                            if ((0, Oe.KA)(r) && !i) return e.commit(be.IB, r), void e.commit(be.yh, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (o = {
                                    forEmbeddedDesigner: n
                                }, (0, J.Z)("designer/get-fonts", o)).then((async t => {
                                    const i = (0, Oe.jD)(t);
                                    await (0, me.f4)(Se.AQ, i), (0, me.bB)(me.$G.UPDATE_FONTS, !1), e.commit(be.IB, i), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(be.yh, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                            var o
                        },
                        async [be.cs](e, t) {
                            let {
                                technique: i,
                                fontIds: n = null
                            } = t;
                            const r = {
                                technique: i,
                                type: Ce
                            };
                            n && (r.ids = n);
                            try {
                                const t = await te(r);
                                t.success && e.commit(be.Fo, {
                                    fontIds: t.assetIds,
                                    technique: i
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [be.KE](e, t) {
                            let {
                                technique: i
                            } = t;
                            e.state.favorites[i] || await e.dispatch(be.cs, {
                                technique: i
                            })
                        },
                        async [be.V$](e, t) {
                            let {
                                technique: i,
                                fontId: n
                            } = t;
                            e.commit(be.B3, {
                                technique: i,
                                fontId: n
                            }), e.state.isFavoriteFontsViewVisible && e.state.lastRemovedFavoriteFontId !== n && e.commit(be.al, n);
                            try {
                                (await ie({
                                    technique: i,
                                    type: Ce,
                                    id: n
                                })).success || e.commit(be.B3, {
                                    technique: i,
                                    fontId: n
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        }
                    },
                    getters: {
                        [be.CN]: e => (0, ge.h)(e, {
                            key: Se.YG.HAS_LOADED_ALL
                        })
                    }
                },
                Ae = i(52230),
                ke = i(32577),
                we = i(61958);
            const Re = e => Object.values(e).map((e => new we.j(e))),
                De = () => {
                    try {
                        return JSON.parse(window.localStorage.getItem((0, me.Ug)(ke.L))) || []
                    } catch (e) {
                        return {}
                    }
                };
            var Ne = {
                    state: {
                        propGroupRepository: {},
                        propRepository: {},
                        recentCache: [],
                        loadingPromise: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Ae.tR](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: ke.P.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [Ae.Bc](e, t) {
                            t.forEach((t => {
                                n.default.set(e.propRepository, t.id, t)
                            }))
                        },
                        [Ae.bD](e, t) {
                            let {
                                propItemId: i
                            } = t;
                            e.recentCache.length || (e.recentCache = De());
                            let n = e.recentCache;
                            n || (n = []);
                            const r = n.indexOf(i);
                            r > -1 && n.splice(r, 1), n.unshift(i), e.recentCache = n.slice(0, ke.L.MAX_RECENT_CACHE);
                            try {
                                window.localStorage.setItem((0, me.Ug)(ke.L), JSON.stringify(e.recentCache))
                            } catch (e) {
                                console.warn("Could not save recent prop items in local storage!")
                            }
                        }
                    },
                    actions: {
                        async [Ae.NL](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_PROPS);
                            e.getters[Ae.py] && !t || await e.dispatch(Ae.oE, t)
                        },
                        [Ae.HZ](e, t) {
                            t.forEach((t => {
                                n.default.set(e.state.propGroupRepository, t.id, t), e.commit(Ae.Bc, t.items)
                            }))
                        },
                        async [Ae.oE](e) {
                            var t;
                            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[Ae.py] && !i) return;
                            if (e.state.loadingPromise && !i) return await e.state.loadingPromise;
                            let n = (() => {
                                try {
                                    const e = window.localStorage.getItem((0, me.x4)(ke.L));
                                    return e && "[]" !== e ? Re(JSON.parse(e)) : null
                                } catch (e) {
                                    return null
                                }
                            })();
                            if (null !== (t = n) && void 0 !== t && t.length && !i) return e.dispatch(Ae.HZ, Re(n)), void e.commit(Ae.tR, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("mockup-maker/get-props").then((async t => {
                                    await (0, me.f4)(ke.L, t), (0, me.bB)(me.$G.UPDATE_PROPS, !1), n = Re(t), e.dispatch(Ae.HZ, n), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(Ae.tR, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Ae.Fk](e) {
                            var t;
                            e.state.recentCache.length || (e.state.recentCache = De()), null !== (t = e.state.recentCache) && void 0 !== t && t.length && await e.dispatch(Ae.NL)
                        }
                    },
                    getters: {
                        [Ae.py]: e => (0, ge.h)(e, {
                            key: ke.P.HAS_LOADED_ALL
                        }),
                        [Ae.CB]: e => Object.values(e.propGroupRepository).map((e => (e.items = e.items.filter((e => e.isActive)), e))).sort(((e, t) => e.index - t.index)),
                        [Ae.Bj]: (e, t) => t[Ae.Vt](e.recentCache).filter((e => e && e.isActive)).slice(0, ke.L.MAX_RECENT_SHOW),
                        [Ae.hY]: e => t => {
                            var i;
                            return null === (i = e.propGroupRepository) || void 0 === i ? void 0 : i[t]
                        },
                        [Ae.Vt]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.propRepository) || void 0 === i ? void 0 : i[t]
                        }))
                    }
                },
                Me = i(93661),
                Fe = i(31416),
                Ve = i(61430),
                xe = i(53420),
                Ge = i(17298),
                Be = {
                    state: {
                        sceneRepository: [],
                        sceneDesignRepository: [],
                        userSceneIds: [],
                        templateSceneIds: [],
                        loadingPromise: null,
                        parentTemplateId: null,
                        recentCache: [],
                        templateScenes: [],
                        userScenes: [],
                        sceneGroups: []
                    },
                    namespaced: !0,
                    mutations: {
                        [Me.S_](e) {
                            e.sceneRepository = [], e.userSceneIds = [], e.templateSceneIds = []
                        },
                        [Me.ig](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: Ve.E.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [Me.Rn](e, t) {
                            e.sceneRepository = t, e.templateScenes = t.filter((e => e.isTemplate)), e.userScenes = t.filter((e => !e.isTemplate))
                        },
                        [Me.Dn](e, t) {
                            e.userScenes.push(t), e.sceneRepository.push(t)
                        },
                        [Me.HD](e, t) {
                            e.parentTemplateId = t.isTemplate ? t.id : t.parentTemplateId
                        },
                        [Me.Ql](e) {
                            e.parentTemplateId = null
                        },
                        [Me.KE](e, t) {
                            let {
                                sceneItemId: i
                            } = t;
                            e.recentCache.length || (e.recentCache = (0, Fe.$c)());
                            const n = e.recentCache,
                                r = n.indexOf(i);
                            r > -1 && n.splice(r, 1), n.unshift(i), e.recentCache = n.slice(0, Ve.J.MAX_RECENT_CACHE);
                            try {
                                window.localStorage.setItem((0, me.Ug)(Ve.J), JSON.stringify(e.recentCache))
                            } catch (e) {
                                console.warn("Could not save recent scene items in local storage!")
                            }
                        },
                        [Me.MM](e, t) {
                            e.sceneGroups = t
                        }
                    },
                    actions: {
                        async [Me.rG](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_SCENES);
                            e.getters[Me.YD] && !t || await e.dispatch(Me.Q8, t)
                        },
                        async [Me.Q8](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[Me.YD] && !t) return;
                            if (e.state.loadingPromise && !t) return await e.state.loadingPromise;
                            const i = await (0, Fe.hu)();
                            if (i && !t) return await e.dispatch(Me.b2), e.commit(Me.Rn, (0, Fe.N8)(i)), void e.commit(Me.ig, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("mockup-maker/get-scenes").then((async t => {
                                    await (0, me.f4)(Ve.J, t), (0, me.bB)(me.$G.UPDATE_SCENES, !1), e.commit(Me.S_), await e.dispatch(Me.b2), e.commit(Me.Rn, (0, Fe.N8)(t)), e.commit(Me.ig, {
                                        hasLoaded: !0
                                    }), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        async [Me.ul](e, t) {
                            let i = e.getters[Me.y6](t);
                            if (!i) {
                                const o = await (r = {
                                    sceneId: t
                                }, (0, J.Z)("mockup-maker/get-scene-design", r));
                                if (!o.success) throw (0, $.logError)(o.error), new Error(o.error);
                                i = new xe.J_(o), n.default.set(e.state.sceneDesignRepository, t, i)
                            }
                            var r
                        },
                        async [Me.Y5](e, t) {
                            const i = (0, Ge.qK)((0, Ge.gN)(t.designData)),
                                n = e.state.parentTemplateId,
                                r = await (o = {
                                    designData: i,
                                    parentTemplateId: n
                                }, (0, J.Z)("mockup-maker/save-scene", o));
                            var o;
                            if (!r.success) throw new Error;
                            const a = r.scene;
                            e.commit(Me.Dn, (0, Fe.wB)(a)), (0, Fe.$o)(a, (t => {
                                e.state.sceneRepository.find((e => e.id === a.id)).image.urlThumb = t
                            }))
                        },
                        async [Me.qP](e, t) {
                            var i;
                            if (!(await (i = {
                                    sceneId: t
                                }, (0, J.Z)("mockup-maker/delete-scene", i))).success) throw new Error(dlang("generator", "Error while deleting mockup scene"));
                            e.state.userSceneIds = e.state.userSceneIds.filter((e => e !== t)), delete e.state.sceneRepository[t], e.state.userScenes = e.state.userScenes.filter((e => e.id !== t)), (0, Fe.uD)(t)
                        },
                        async [Me.uE](e) {
                            var t;
                            e.state.recentCache.length || (e.state.recentCache = (0, Fe.$c)()), null !== (t = e.state.recentCache) && void 0 !== t && t.length && await e.dispatch(Me.rG)
                        },
                        async [Me.b2](e) {
                            let {
                                commit: t
                            } = e;
                            const i = await (0, j.r)("/rpc/mockup-maker-rpc/get-scene-groups");
                            t(Me.MM, i)
                        }
                    },
                    getters: {
                        [Me.YD]: e => (0, ge.h)(e, {
                            key: Ve.E.HAS_LOADED_ALL
                        }),
                        [Me.zh]: e => t => {
                            var i;
                            return null === (i = e.sceneRepository) || void 0 === i ? void 0 : i[t]
                        },
                        [Me.y6]: e => t => {
                            var i;
                            return null === (i = e.sceneDesignRepository) || void 0 === i ? void 0 : i[t]
                        },
                        [Me.cU]: e => e.templateScenes.sort(((e, t) => e.index - t.index)),
                        [Me.do]: (e, t) => o().chain(t[Me.cU]).filter("groupId").groupBy("groupId").map(((t, i) => {
                            const n = e.sceneGroups.find((e => e.id === parseInt(i)));
                            if (n) return n.items = t.filter((e => e.isActive)), new xe.kT(n)
                        })).value().filter((e => !0 !== e.extra.hidden)).sort(((e, t) => e.index - t.index)),
                        [Me.rv]: e => e.userScenes.sort(((e, t) => t.id - e.id)),
                        [Me.jH]: e => e.parentTemplateId,
                        [Me.PS]: (e, t) => t[Me.A$](e.recentCache).filter((e => null == e ? void 0 : e.isActive)).slice(0, Ve.J.MAX_RECENT_SHOW),
                        [Me.A$]: e => t => t.map((t => e.sceneRepository.find((e => e.id === t))))
                    }
                },
                Ue = i(21280),
                He = i(52584),
                ze = i(5532);

            function je(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Ye(e, t, i) {
                return t && je(e.prototype, t), i && je(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function qe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let We = Ye((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                qe(this, e), this.id = parseInt(t.id), this.name = t.name, this.index = parseInt(t.index), this.extra = t.extra ? t.extra : {}, this.isActive = !!t.isActive, this.image = t.image ? ze.q.fromArray(t.image) : null, this.pusherKey = t.pusherKey || null
            }));
            const Ke = e => e.map((e => new We(e)));
            var Qe = {
                    state: {
                        gradientRepository: {},
                        loadingPromise: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Ue.nh](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: He.z.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [Ue.kU](e, t) {
                            t.forEach((t => n.default.set(e.gradientRepository, t.id, t)))
                        }
                    },
                    actions: {
                        async [Ue.B7](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_GRADIENTS);
                            e.getters[Ue.g1] && !t || await e.dispatch(Ue.y7, t)
                        },
                        async [Ue.y7](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[Ue.g1] && !t) return;
                            if (e.state.loadingPromise && !t) return await e.state.loadingPromise;
                            const i = (() => {
                                try {
                                    const e = window.localStorage.getItem((0, me.x4)(He.X));
                                    return e && "[]" !== e ? Ke(JSON.parse(e)) : null
                                } catch (e) {
                                    return null
                                }
                            })();
                            if (null != i && i.length && !t) return e.commit(Ue.kU, i), void e.commit(Ue.nh, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("mockup-maker/get-gradients").then((async t => {
                                    await (0, me.f4)(He.X, t.gradients), (0, me.bB)(me.$G.UPDATE_GRADIENTS, !1), e.commit(Ue.kU, Ke(t.gradients)), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(Ue.nh, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        }
                    },
                    getters: {
                        [Ue.g1]: e => (0, ge.h)(e, {
                            key: He.z.HAS_LOADED_ALL
                        }),
                        [Ue.ex]: e => Object.values(e.gradientRepository).filter((e => e.isActive)).sort(((e, t) => e.index - t.index)),
                        [Ue.mI]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.gradientRepository) || void 0 === i ? void 0 : i[t]
                        }))
                    }
                },
                Xe = i(8313),
                $e = i(39735);

            function Ze(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Je(e, t, i) {
                return t && Ze(e.prototype, t), i && Ze(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function et(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let tt = Je((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                et(this, e), this.id = parseInt(t.id), this.name = t.name, this.index = parseInt(t.index), this.extra = t.extra ? t.extra : {}, this.isActive = !!t.isActive, this.image = t.image ? ze.q.fromArray(t.image) : null, this.pusherKey = t.pusherKey || null
            }));
            const it = e => e.map((e => new tt(e)));
            var nt = {
                    state: {
                        backgroundRepository: {},
                        loadingPromise: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Xe.fD](e, t) {
                            let {
                                hasLoaded: i = !1
                            } = t;
                            (0, ge.A)(e, {
                                key: $e.Z.HAS_LOADED_ALL,
                                value: i,
                                shouldUnset: !i
                            })
                        },
                        [Xe.ww](e, t) {
                            t.forEach((t => n.default.set(e.backgroundRepository, t.id, t)))
                        }
                    },
                    actions: {
                        async [Xe.tb](e) {
                            const t = (0, me.e8)(me.$G.UPDATE_BACKGROUNDS);
                            e.getters[Xe.nC] && !t || await e.dispatch(Xe.md, t)
                        },
                        async [Xe.md](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.getters[Xe.nC] && !t) return;
                            if (e.state.loadingPromise && !t) return await e.state.loadingPromise;
                            const i = (() => {
                                try {
                                    const e = window.localStorage.getItem((0, me.x4)($e.J));
                                    return e && "[]" !== e ? it(JSON.parse(e)) : null
                                } catch (e) {
                                    return null
                                }
                            })();
                            if (null != i && i.length && !t) return e.commit(Xe.ww, i), void e.commit(Xe.fD, {
                                hasLoaded: !0
                            });
                            try {
                                e.state.loadingPromise || (e.state.loadingPromise = (0, J.Z)("mockup-maker/get-backgrounds").then((async t => {
                                    await (0, me.f4)($e.J, t.backgrounds), (0, me.bB)(me.$G.UPDATE_BACKGROUNDS, !1), e.commit(Xe.ww, it(t.backgrounds)), e.state.loadingPromise = null
                                }))), await e.state.loadingPromise, e.commit(Xe.fD, {
                                    hasLoaded: !0
                                })
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        }
                    },
                    getters: {
                        [Xe.nC]: e => (0, ge.h)(e, {
                            key: $e.Z.HAS_LOADED_ALL
                        }),
                        [Xe.zp]: e => Object.values(e.backgroundRepository).filter((e => e.isActive)).sort(((e, t) => e.index - t.index)),
                        [Xe.Rj]: e => t => t.map((t => {
                            var i;
                            return null === (i = e.backgroundRepository) || void 0 === i ? void 0 : i[t]
                        }))
                    }
                },
                rt = i(42189),
                ot = i(61286),
                at = i(54708),
                st = i(93307),
                lt = {
                    state: {
                        searches: [],
                        searchKey: "",
                        showPatternToolBanner: !1,
                        isFavoritePremiumViewVisible: !1,
                        favoritePremiumList: [],
                        lastRemovedPremiumItem: null,
                        activePremiumItemInteractionId: null,
                        premiumItemInteractionState: null
                    },
                    namespaced: !0,
                    mutations: {
                        [rt.fK](e, t) {
                            e.showPatternToolBanner = t
                        },
                        [rt.$E](e) {
                            e.showPatternToolBanner = !1;
                            try {
                                window.localStorage.setItem(st.Cc, "true")
                            } catch (e) {
                                console.log("Could not set local storage key for pattern banner")
                            }
                        },
                        [rt.ws](e, t) {
                            e.searches.push(t)
                        },
                        [rt.zW](e, t) {
                            let {
                                premiumSearch: i,
                                response: n
                            } = t;
                            const r = !!i.minWidth || !!i.minHeight,
                                o = !n.results.length || n.results.length < st.g6;
                            (r && !n.results.length || !r && o) && (i.hasAllPages = !0), null == i || i.imageList.push(...n.results), n.automaticallyAppliedSuggestion && (i.automaticallyAppliedSuggestion = n.automaticallyAppliedSuggestion)
                        },
                        [rt.or](e, t) {
                            let {
                                premiumSearch: i,
                                image: n
                            } = t;
                            if (!i) return;
                            const r = i.imageList.findIndex((e => e.externalId === n.externalId));
                            i.imageList.splice(r, 1)
                        },
                        [rt.MU](e, t) {
                            e.searchKey = t
                        },
                        [rt.o3](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.isFavoritePremiumViewVisible = null !== t ? t : !e.isFavoritePremiumViewVisible
                        },
                        [rt.ek](e, t) {
                            e.favoritePremiumList = t
                        },
                        [rt.GI](e, t) {
                            e.lastRemovedPremiumItem = t
                        },
                        [rt.zZ](e, t) {
                            e.activePremiumItemInteractionId = t
                        },
                        [rt.E4](e, t) {
                            e.premiumItemInteractionState = t
                        },
                        [rt.VE](e) {
                            e.premiumItemInteractionState = null, e.activePremiumItemInteractionId = null
                        }
                    },
                    actions: {
                        async [rt.lk](e, t) {
                            let {
                                provider: i,
                                searchKey: n,
                                currency: r,
                                minWidth: o,
                                minHeight: a,
                                assetType: s,
                                useCached: l
                            } = t, u = e.getters[rt.CH]({
                                provider: i,
                                searchKey: n,
                                currency: r,
                                minWidth: o,
                                minHeight: a,
                                assetType: s
                            });
                            if (u) {
                                if (l || u.hasAllPages) return;
                                u.searchPage++
                            } else u = new ot.f({
                                provider: i,
                                searchKey: n,
                                currency: r,
                                minWidth: o,
                                minHeight: a,
                                assetType: s
                            }), e.commit(rt.ws, u);
                            const c = await (0, at.EI)(u.provider, u.automaticallyAppliedSuggestion ? u.automaticallyAppliedSuggestion : u.searchKey, u.currency, null, u.searchPage, u.minWidth || null, u.minHeight || null, s || st._m);
                            e.commit(rt.zW, {
                                premiumSearch: u,
                                response: c
                            })
                        },
                        [rt.uD](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e, {
                                id: r,
                                isFavorite: o,
                                target: a
                            } = t;
                            i.activePremiumItemInteractionId || n(rt.zZ, r), i.activePremiumItemInteractionId === r && ue({
                                params: {
                                    isFavorite: o
                                },
                                states: {
                                    favoritedAsset: {
                                        params: {
                                            target: a
                                        },
                                        targets: {
                                            asset: () => n(rt.E4, le.n.FINAL_ADD_ITEM),
                                            favoriteButton: () => n(rt.E4, le.n.FINAL_TOGGLE_FAVORITE)
                                        }
                                    },
                                    unfavoritedAsset: {
                                        params: {
                                            currentState: i.premiumItemInteractionState,
                                            target: a,
                                            assetId: r,
                                            activeAssetId: i.activePremiumItemInteractionId
                                        },
                                        states: {
                                            idle: () => n(rt.E4, le.n.FAVORITE_BUTTON_SHOWN),
                                            favoriteButtonShown: {
                                                targets: {
                                                    asset: () => n(rt.E4, le.n.FINAL_ADD_ITEM),
                                                    favoriteButton: () => n(rt.E4, le.n.FINAL_TOGGLE_FAVORITE),
                                                    outside: () => n(rt.VE)
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    },
                    getters: {
                        [rt.CH]: e => t => {
                            let {
                                provider: i,
                                searchKey: n,
                                currency: r,
                                minWidth: o = null,
                                minHeight: a = null,
                                assetType: s = st._m
                            } = t;
                            return e.searches.find((e => e.searchKey === n && e.provider === i && e.currency === r && e.minWidth === o && e.minHeight === a && e.assetType === s))
                        },
                        [rt.RE]: e => e.searchKey
                    }
                },
                ut = i(73439),
                ct = i(58232);

            function dt(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ht(n.key), n)
                }
            }

            function pt(e, t, i) {
                return t && dt(e.prototype, t), i && dt(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function gt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function mt(e, t, i) {
                return (t = ht(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function ht(e) {
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
            let ft = pt((function e() {
                var t, i, n, r, o, a;
                let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                gt(this, e), mt(this, "groupType", ct.hG.GROUP_INSIDE_LABEL_TEMPLATE), this.id = null !== (t = s.id) && void 0 !== t ? t : null, this.productId = s.productId, this.name = null !== (i = s.name) && void 0 !== i ? i : "", this.image = null !== (n = s.image) && void 0 !== n ? n : {}, this.isActive = null !== (r = s.isActive) && void 0 !== r && r, this.designData = null !== (o = s.designData) && void 0 !== o ? o : [], this.extra = null !== (a = s.extra) && void 0 !== a ? a : []
            }));
            var yt = i(77629),
                vt = i(67342),
                _t = i(19639),
                It = {
                    state: {
                        insideLabelTemplates: [],
                        activeInsideLabelTemplate: {
                            id: vt.V.NO_BRANDING
                        },
                        isLoading: !1
                    },
                    namespaced: !0,
                    mutations: {
                        [ut.vy](e, t) {
                            let {
                                response: i,
                                productId: n
                            } = t;
                            e.insideLabelTemplates = i.map((e => new ft({
                                ...e,
                                productId: n
                            })))
                        },
                        [ut.Qk](e, t) {
                            null != t && t.designData && Object.keys(t).length > 0 && (t.designData = t.designData.map(((e, t, i) => {
                                const n = t + 1 === i.length;
                                return n && (0, yt.Xl)(_t.K.fromArray(e.position)), {
                                    ...e,
                                    isLocked: n,
                                    isHidden: n,
                                    isLockedAndSelectable: !n
                                }
                            }))), e.activeInsideLabelTemplate = t
                        },
                        [ut.wt](e, t) {
                            e.isLoading = t
                        }
                    },
                    actions: {
                        async [ut.T5](e, t) {
                            var i;
                            let n = {};
                            (null === (i = e.state.insideLabelTemplates[0]) || void 0 === i ? void 0 : i.productId) !== t && (e.commit(ut.wt, !0), n = await (0, j.r)("/rpc/designer-rpc/get-inside-label-templates", null, ne()), e.commit(ut.vy, {
                                response: n,
                                productId: t
                            }), e.commit(ut.wt, !1))
                        }
                    },
                    getters: {
                        [ut.St]: e => e.insideLabelTemplates,
                        [ut.UA]: e => e.activeInsideLabelTemplate,
                        [ut.ox]: e => e.activeInsideLabelTemplate.id === vt.V.NO_BRANDING
                    }
                },
                Tt = i(21782),
                Et = {
                    state: {
                        flags: X,
                        loadingValues: null,
                        shouldUpdateStorage: {},
                        versionMeta: null
                    },
                    modules: {
                        cliparts: pe,
                        colorGraphics: _e,
                        quickDesigns: Pe,
                        fonts: Le,
                        props: Ne,
                        scenes: Be,
                        gradients: Qe,
                        backgrounds: nt,
                        premium: lt,
                        insideLabelTemplates: It
                    },
                    namespaced: !0,
                    mutations: {
                        [Tt.bB](e, t) {
                            let {
                                flag: i,
                                value: n
                            } = t;
                            (0, me.FK)(i) && (e.shouldUpdateStorage[i] = n)
                        },
                        [Tt.Un](e, t) {
                            e.versionMeta = t
                        }
                    },
                    actions: {
                        [Tt.ZO]: async e => (e.state.loadingValues || (e.state.loadingValues = (0, J.Z)("designer/get-designer-asset-state").then((t => {
                            if (!t) throw new Error("Malformed designer assets data!");
                            for (const [i, n] of Object.entries(t)) e.commit(Tt.bB, {
                                flag: i,
                                value: n
                            })
                        }))), await e.state.loadingValues),
                        [Tt.O3]: async (e, t) => (await e.dispatch(Tt.ZO), !!(0, me.FK)(t) && !!e.state.shouldUpdateStorage[t]),
                        async [Tt.jY](e) {
                            if (null === e.state.versionMeta) {
                                let t = [];
                                try {
                                    t = await (0, me.Dy)()
                                } catch (e) {
                                    console.warn("Could not get versionMeta from storage!")
                                }
                                e.commit(Tt.Un, t)
                            }
                        },
                        async [Tt.LK](e, t) {
                            if (await e.dispatch(Tt.jY), !e.state.versionMeta.includes(t)) {
                                e.state.versionMeta.push(t);
                                try {
                                    await (0, me.OY)(e.state.versionMeta)
                                } catch (e) {
                                    console.warn("Could not save versionMeta to storage!")
                                }
                            }
                        },
                        async [Tt.Bw](e, t) {
                            if (await e.dispatch(Tt.jY), e.state.versionMeta.includes(t)) {
                                e.state.versionMeta.splice(e.state.versionMeta.indexOf(t), 1);
                                try {
                                    await (0, me.OY)(e.state.versionMeta)
                                } catch (e) {
                                    console.warn("Could not save versionMeta to storage!")
                                }
                            }
                        }
                    },
                    getters: {
                        [Tt.e8]: e => t => e.shouldUpdateStorage[t] || !1,
                        [Tt.r8]: e => e.versionMeta
                    }
                },
                Pt = i(5251),
                St = i(67187);
            var bt = i(10350),
                Ot = i(75372),
                Ct = i(80510);

            function Lt(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (r = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function At(e, t, i) {
                return t && Lt(e.prototype, t), i && Lt(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function kt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            let wt = At((function e() {
                var t;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                kt(this, e), this.id = i.id, this.image = i.url || i.image, this.name = i.name, this.generatorVariants = null === (t = i.generatorVariants) || void 0 === t ? void 0 : t.map((e => e instanceof Ct.E ? e : Ct.E.fromArray(e)))
            }));
            const Rt = (e, t, i) => {
                    Y.D.subscribe(e.taskPusherKey, "onSuccess", Dt.bind(null, e, t, i)), Y.D.subscribe(e.taskPusherKey, "onFailed", Nt.bind(null, e, t, i))
                },
                Dt = (e, t, i, n) => {
                    t(n), Mt(e, t, i)
                },
                Nt = (e, t, i, n) => {
                    i(n), Mt(e, t, i)
                },
                Mt = (e, t, i) => {
                    Y.D.unbind(e.taskPusherKey, "onSuccess", Dt.bind(null, e, t, i)), Y.D.unbind(e.taskPusherKey, "onFailed", Nt.bind(null, e, t, i))
                };
            var Ft = i(32434),
                Vt = i(62207),
                xt = i(11762);
            var Gt = i(15311);
            const Bt = "/rpc/mockup-maker-rpc",
                Ut = `${Bt}/generate-mockups`,
                Ht = `${Bt}/get-generated-custom-mockups`;
            var zt = i(28110);
            const jt = e => {
                const t = {
                    groups: [],
                    usedDesignPlacementNames: {},
                    productMockupFiles: {},
                    downloadableMockups: {},
                    downloadablePrintfiles: {},
                    activeGroupId: null,
                    activePlacement: null,
                    activeSize: null,
                    activeColor: null,
                    sceneDesign: null,
                    activeSceneId: null
                };
                return e ? t : {
                    ...t,
                    pushFlowFooterUpdateFunction: null,
                    pushFlowTitleUpdateFunction: null,
                    pushFlowParams: null,
                    pushFlowContinue: null,
                    pushFlowMainImageSrc: null,
                    mockupMakerModalFunction: null
                }
            };
            var Yt = {
                    state: jt(),
                    namespaced: !0,
                    mutations: {
                        [Ot.oA](e) {
                            Object.assign(e, jt(!0))
                        },
                        [Ot.yc](e) {
                            e.downloadableMockups = {}
                        },
                        [Ot.VT](e) {
                            e.productMockupFiles = {}
                        },
                        [Ot.lb](e, t) {
                            let {
                                key: i,
                                value: n,
                                shouldUnset: r
                            } = t;
                            (0, ge.A)(e, {
                                key: i,
                                value: n,
                                shouldUnset: r
                            })
                        },
                        [Ot.ys](e, t) {
                            n.default.set(e.productMockupFiles, t.generatorVariantId, t)
                        },
                        [Ot.v6](e, t) {
                            let {
                                mockupFile: i,
                                format: r = "png"
                            } = t;
                            e.downloadableMockups[r] || (e.downloadableMockups[r] = {}), n.default.set(e.downloadableMockups[r], i.generatorVariantId, i)
                        },
                        [Ot.Wk](e, t) {
                            let {
                                printfileFile: i,
                                format: r = "png"
                            } = t;
                            e.downloadablePrintfiles[r] || (e.downloadablePrintfiles[r] = {});
                            const o = `${i.placementId}_${i.templateId}`;
                            n.default.set(e.downloadablePrintfiles[r], o, i)
                        },
                        [Ot.Cb](e) {
                            e.downloadablePrintfiles = {}
                        },
                        [Ot.U_](e, t) {
                            e.usedDesignPlacementNames = t
                        },
                        [Ot.TI](e, t) {
                            e.pushFlowFooterUpdateFunction = t
                        },
                        [Ot.qh](e, t) {
                            e.pushFlowTitleUpdateFunction = t
                        },
                        [Ot.O3](e, t) {
                            e.mockupMakerModalFunction = t
                        },
                        [Ot.hs](e, t) {
                            e.pushFlowParams = t
                        },
                        [Ot.m0](e, t) {
                            e.pushFlowContinue = t
                        },
                        [Ot.Js](e, t) {
                            e.pushFlowMainImageSrc = t
                        },
                        [Ot.O$](e, t) {
                            e.sceneDesign = t
                        },
                        [Ot.tQ](e, t) {
                            e.activeGroupId = t
                        },
                        [Ot.vb](e, t) {
                            e.activePlacement = t
                        },
                        [Ot.GH](e, t) {
                            e.activeSize = t
                        },
                        [Ot.F6](e, t) {
                            e.activeColor = t
                        },
                        [Ot.L_](e, t) {
                            e.activeSceneId = t
                        }
                    },
                    getters: {
                        [Ot.tA]: e => t => (0, ge.h)(e, {
                            key: t
                        }),
                        [Ot.o7]: e => e.groups.find((t => t.id === e.activeGroupId)),
                        [Ot._x]: e => e.sceneDesign,
                        [Ot.W1]: e => e.pushFlowMainImageSrc,
                        [Ot.rJ]: e => e.productMockupFiles,
                        [Ot.x6]: (e, t, i) => {
                            var n, r;
                            const o = i.designer.mockupModule;
                            return null !== (n = null === (r = t[Ot.o7]) || void 0 === r ? void 0 : r.generatorVariants.filter((t => {
                                var i, n;
                                const r = !e.activeColor || !t.color || !Object.keys(o.selectedColors || {}).length || Object.keys(o.selectedColors || {}).includes(t.color),
                                    a = !e.activeSize || !t.size || !(null !== (i = o.selectedSizes) && void 0 !== i && i.length) || (null === (n = o.selectedSizes) || void 0 === n ? void 0 : n.includes(t.size));
                                return r && a && t.active && o.usedDesignPlacementIds.includes(t.placement)
                            }))) && void 0 !== n ? n : []
                        },
                        [Ot.wM]: (e, t) => {
                            var i, n;
                            if (!e.groups.length) return null;
                            if (!e.activePlacement) return null;
                            const r = null !== (i = null === (n = t[Ot.x6]) || void 0 === n ? void 0 : n.filter((t => {
                                const i = !t.color || !e.activeColor || e.activeColor === t.color,
                                    n = !t.size || !e.activeSize || e.activeSize === t.size;
                                return i && n && t.active && e.activePlacement === t.placement
                            }))) && void 0 !== i ? i : [];
                            return PF.DEV && 1 !== (null == r ? void 0 : r.length) && console.error("activeGeneratorVariant should be 1", r), r[0]
                        },
                        [Ot.se]: (e, t) => {
                            var i;
                            if (!e.groups.length || !Object.keys(e.productMockupFiles).length) return null;
                            const n = null === (i = t[Ot.wM]) || void 0 === i ? void 0 : i.id;
                            return n ? e.productMockupFiles[n] : null
                        },
                        [Ot.Ph]: e => function() {
                            var t;
                            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "png";
                            return null !== (t = e.downloadableMockups[i]) && void 0 !== t ? t : {}
                        },
                        [Ot.Ob]: e => function() {
                            var t;
                            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "png";
                            return null !== (t = e.downloadablePrintfiles[i]) && void 0 !== t ? t : {}
                        },
                        [Ot.tu]: (e, t, i) => {
                            const n = t[Ot.tA](bt.K0.PREVIOUS_PRODUCT_OPTIONS);
                            if (!n) return !1;
                            const o = i.designer.mockupModule;
                            return !((0, r.isEqual)((0, r.sortBy)(o.mockupProduct.productId), (0, r.sortBy)(n.productId)) && (0, r.isEqual)((0, r.sortBy)(o.usedDesignPlacementIds), (0, r.sortBy)(n.placements)) && (0, r.isEqual)((0, r.sortBy)(Object.keys(o.selectedColors)), (0, r.sortBy)(n.colorNames)) && (0, r.isEqual)((0, r.sortBy)(o.selectedSizes), (0, r.sortBy)(n.sizeNames)) && (0, r.isEqual)((0, r.sortBy)(o.usedTemplateIds), (0, r.sortBy)(n.templateIds)))
                        }
                    },
                    actions: {
                        async [Ot.cf](e) {
                            const t = e.state,
                                i = e.rootState.designer.mockupModule;
                            let n;
                            if (t.groups.length && !e.getters[Ot.tu]) return void await e.dispatch(Ot.jp);
                            const r = {
                                productId: i.mockupProduct.productId,
                                placements: i.usedDesignPlacementIds,
                                colorNames: Object.keys(i.selectedColors),
                                sizeNames: i.selectedSizes,
                                templateIds: i.usedTemplateIds
                            };
                            try {
                                n = await (e => {
                                    let {
                                        productId: t,
                                        placements: i,
                                        colorNames: n,
                                        sizeNames: r,
                                        templateIds: o
                                    } = e;
                                    return (0, j.r)("/rpc/mockup-maker-rpc/get-generator-mockup-groups", {
                                        productId: t,
                                        placements: i,
                                        colorNames: n,
                                        sizeNames: r,
                                        templateIds: o
                                    })
                                })(r)
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                            if (!n.groups.length) {
                                const e = "Product does not have transparent mockups";
                                throw console.error(e), e
                            }
                            e.commit(Ot.lb, {
                                key: bt.K0.PREVIOUS_PRODUCT_OPTIONS,
                                value: r
                            }), e.commit(Ot.lb, {
                                key: bt.K0.HAS_ADVANCED_TEMPLATE,
                                value: n.isAdvanced
                            }), t.usedDesignPlacementNames = n.placementNames, t.groups = n.groups.map((e => (n.isAdvanced && (e.name = `${e.name} - ${e.generatorVariants[0].option}`), i.mockupProduct.type === d.GE && (e.name = `${e.name} - ${e.generatorVariants[0].option}`), new wt(e))));
                            const o = t.groups[0];
                            e.commit(Ot.tQ, o.id), i.mockupProduct.type !== d.GE && e.commit(Ot.GH, i.selectedSizes[0]), e.commit(Ot.F6, Object.keys(i.selectedColors)[0]);
                            const a = i.usedDesignPlacementIds.find((e => o.generatorVariants.some((t => t.placement === e))));
                            e.commit(Ot.vb, a), await e.dispatch(Ot.jp)
                        },
                        async [Ot.jp](e) {
                            const t = e.state,
                                i = e.rootState.designer.mockupModule,
                                n = e.getters[Ot.x6].map((e => e.id)),
                                r = Object.keys(t.productMockupFiles).map((e => parseInt(e)));
                            if (n.length && r.length && n.every((e => r.includes(e)))) return;
                            const o = t => e.commit(Ot.lb, {
                                key: bt.K0.IS_LOADING,
                                value: t
                            });
                            o(!0);
                            const a = (e => {
                                    let {
                                        mockupProductDesign: t,
                                        mockupProduct: i,
                                        usedDesignPlacements: n,
                                        selectedSizes: r,
                                        selectedColors: o,
                                        generatorVariants: a,
                                        isAdvanced: s,
                                        stitchColor: l
                                    } = e;
                                    const u = new Ft.x;
                                    u.store = new Vt.t, u.templates = {}, u.filesIdsByPlacement = {};
                                    let c = 1;
                                    for (const e of t.templates) {
                                        e.technique = (0, xt.m7)(i, i.type), e.placementName = n[e.placementId], u.templates[`${e.placementId}_${c++}`] = e, u.filesIdsByPlacement[e.placementId] = [];
                                        for (const t of e.layers) t.fileItem && u.filesIdsByPlacement[e.placementId].push(t.fileItem.fileId)
                                    }
                                    return u.sizes = r, u.colors = Object.keys(o), u.productId = i.productId, u.product = i, u.generatorVariantsIdsToSave = a.map((e => e.id)), u.generatorVariants = a, u.isTransparent = !0, u.rawPlacementOptions = t.placementOptions.getData(), u.forceTemplateType = s ? V.z.TEMPLATE_TYPE_ADVANCED : null, u.lifelikeVariants = t.lifelikeVariants, u.productOptions || (u.productOptions = {}), u.productOptions.stitch_color = l, u
                                })({
                                    mockupProductDesign: i.mockupProductDesign,
                                    mockupProduct: i.mockupProduct,
                                    usedDesignPlacements: t.usedDesignPlacementNames,
                                    selectedSizes: i.selectedSizes,
                                    selectedColors: i.selectedColors,
                                    generatorVariants: e.getters[Ot.x6],
                                    isAdvanced: e.getters[Ot.tA](bt.K0.HAS_ADVANCED_TEMPLATE),
                                    stitchColor: e.rootState.designer.productModule.options.stitchColor
                                }).toArray({
                                    forRpc: !0,
                                    withoutSyncData: !0
                                }),
                                s = await (e => {
                                    let {
                                        designData: t
                                    } = e;
                                    return (0, j.r)("/rpc/product-generator-rpc/generate-mockups", {
                                        designData: t,
                                        forCustomMockupMaker: 1
                                    })
                                })({
                                    designData: a
                                });
                            await new Promise(((t, i) => {
                                const n = i => {
                                    for (const t of i) e.commit(Ot.ys, Gt.K.fromArray(t));
                                    t()
                                };
                                s.files ? n(s.files) : Rt(s, (e => (e => {
                                    let {
                                        cacheKey: t
                                    } = e;
                                    return (0, j.r)("/rpc/product-generator-rpc/get-generated-files", {
                                        cacheKey: t
                                    })
                                })({
                                    cacheKey: e
                                }).then((e => {
                                    let {
                                        files: t
                                    } = e;
                                    return n(t)
                                }))), (e => {
                                    (0, $.logError)(e), i(e)
                                }))
                            })).finally((() => o(!1)))
                        },
                        async [Ot.Vj](e, t) {
                            let {
                                format: i,
                                mockupData: n
                            } = t;
                            const r = e.state,
                                o = n.map((e => e.generatorMockupVariantId));
                            if (r.downloadableMockups[i]) {
                                const e = Object.keys(r.downloadableMockups[i]).map((e => parseInt(e)));
                                if (o.every((t => e.includes(t)))) return
                            }
                            try {
                                const t = await (e => {
                                    let {
                                        sceneData: t,
                                        mockupOrderIndex: i,
                                        format: n,
                                        mockupData: r,
                                        storeId: o
                                    } = e;
                                    return (0, j.r)(Ut, {
                                        sceneData: t,
                                        mockupOrderIndex: i,
                                        format: n,
                                        mockupData: r,
                                        storeId: o
                                    })
                                })({
                                    sceneData: (0, Ge.gN)(r.sceneDesign.designData),
                                    mockupOrderIndex: r.sceneDesign.getMockupOrderIndex(),
                                    format: i,
                                    mockupData: n
                                });
                                await new Promise(((n, r) => {
                                    Rt(t, (async t => {
                                        const {
                                            files: r
                                        } = await (e => {
                                            let {
                                                cacheKey: t
                                            } = e;
                                            return (0, j.r)(Ht, {
                                                cacheKey: t
                                            })
                                        })({
                                            cacheKey: t
                                        });
                                        for (const t of r) e.commit(Ot.v6, {
                                            mockupFile: zt.j.fromArray(t),
                                            format: i
                                        });
                                        n()
                                    }), (e => {
                                        (0, $.logError)(e), r()
                                    }))
                                }))
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        }
                    }
                },
                qt = i(91065),
                Wt = i(41286),
                Kt = i(39930),
                Qt = i(73824),
                Xt = i(41153),
                $t = i(3506),
                Zt = i(22643),
                Jt = {
                    state: {
                        is3dLoading: !1,
                        live3dInstance: null,
                        live3dCanvasParent: null,
                        live3dCanvas: null,
                        live3dLoadedObj: null,
                        live3dLoadedObjId: 0,
                        live3dStatus: 0,
                        live3dStatusText: "",
                        isBannerAvailableForObj: !1,
                        shouldShowBanner: !1
                    },
                    namespaced: !0,
                    mutations: {
                        [qt.SL](e, t) {
                            e.is3dLoading = t
                        },
                        [qt.IZ](e, t) {
                            e.live3dInstance = t
                        },
                        [qt.Jr](e, t) {
                            e.live3dCanvasParent = t
                        },
                        [qt.ee](e, t) {
                            e.live3dCanvas = t
                        },
                        [qt.z0](e, t) {
                            e.live3dLoadedObj = t
                        },
                        [qt.Od](e, t) {
                            e.live3dLoadedObjId = t
                        },
                        [qt.c4](e, t) {
                            e.live3dStatus = t
                        },
                        [qt.ZQ](e, t) {
                            e.live3dStatusText = t
                        },
                        [qt.Jn](e, t) {
                            e.isBannerAvailableForObj = t
                        },
                        [qt.zr](e, t) {
                            e.shouldShowBanner = t
                        }
                    },
                    actions: {
                        [qt.Fy](e, t) {
                            let {
                                state: i,
                                dispatch: n,
                                commit: r,
                                rootGetters: o
                            } = e, {
                                getCanvasObject: s,
                                getDesignData: l
                            } = t;
                            const u = o[a.ak(a.mZ)],
                                c = new Zt.d;
                            c.getCanvasObj = s.bind(this), c.productSlug = u.slug, c.getSelectedVariant = () => o[Qt.ak(Qt.uE)], c.getDesignData = l.bind(this), c.getLoaded3dObj = () => i.live3dLoadedObj, c.getSelectedPlacementId = () => o[p.ak(p.AO)], c.on3dObjectLoaded = (e, t, i) => n(qt.bh, {
                                data3d: e,
                                mapObjUniqueId: t,
                                isBannerAvailableForObj: i
                            }), c.showWarningAlert = i.shouldShowBanner, c.productId = null == u ? void 0 : u.productId, c.path = PF.ASSETS_URL + "generator/3d-objects/", c.utilsDelayer = Wt.H.delay, c.setLoading = e => r(qt.SL, e), c.setAndShowError = () => n(qt.x2), c.changeTextContent = e => r(qt.ZQ, e), c.modifyWarningBanner = e => n(qt.x1, {
                                showBanner: e
                            }), c.render3dPreview = e => n(qt.$u, e), c.configureControls = (e, t) => n(qt.wZ, {
                                orbitControls: e,
                                camera: t
                            }), c.popupDesignerLeaveWarning = Kt.J, c.customDimensions = {
                                width: ct.Uf.WIDTH,
                                height: ct.Uf.HEIGHT
                            }, r(qt.IZ, new $t.W(c))
                        },
                        [qt.wZ](e, t) {
                            let {
                                state: i
                            } = e, {
                                orbitControls: n,
                                camera: r
                            } = t;
                            return new n(r, i.live3dCanvasParent)
                        },
                        [qt.aL](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e, {
                                newStatusValue: r,
                                forceUpdate: o
                            } = t;
                            var a;
                            !o && i.live3dStatus <= r || (n(qt.c4, r), r === Xt.V.STATUS_RELOAD_MODEL && (n(qt.zr, !0), null === (a = i.live3dInstance) || void 0 === a || a.reset3dModelLoaded()))
                        },
                        [qt.x2](e) {
                            let {
                                commit: t
                            } = e;
                            t(qt.ZQ, lang("Generating failed. Please")), t(qt.SL, !1)
                        },
                        [qt.x1](e, t) {
                            let {
                                commit: i
                            } = e, {
                                showBanner: n,
                                _bannerHeader: r = null,
                                _bannerContent: o = null
                            } = t;
                            i(qt.zr, n)
                        },
                        [qt.bh](e, t) {
                            let {
                                commit: i,
                                dispatch: n
                            } = e, {
                                data3d: r,
                                mapObjUniqueId: o,
                                isBannerAvailableForObj: a
                            } = t;
                            i(qt.z0, r), i(qt.Od, o), i(qt.Jn, a), n(qt.aL, {
                                newStatusValue: Xt.V.STATUS_NO_CHANGES,
                                forceUpdate: !0
                            })
                        },
                        [qt.$u](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e;
                            n(qt.ee, t), i.live3dCanvasParent.textContent = "", i.live3dCanvasParent.appendChild(i.live3dCanvas)
                        }
                    },
                    getters: {
                        [qt.Cp]: e => e.live3dInstance,
                        [qt.dy]: e => e.live3dLoadedObj,
                        [qt.vH]: e => e.live3dLoadedObjId,
                        [qt.sS]: e => e.live3dStatus
                    }
                },
                ei = i(1042);
            const ti = e => {
                const t = {
                    mockupType: null,
                    mockupProduct: null,
                    mockupProductDesign: null,
                    selectedSizes: null,
                    selectedColors: null,
                    usedDesignPlacementIds: [],
                    usedTemplateIds: null
                };
                return e ? t : {
                    ...t,
                    accessPromise: null,
                    mockupProductTechnique: null
                }
            };
            var ii = {
                    state: ti(),
                    namespaced: !0,
                    modules: {
                        mockupMaker: Yt,
                        live3dMockup: Jt
                    },
                    mutations: {
                        [St.oA](e) {
                            Object.assign(e, ti(!0))
                        },
                        [St.mB](e, t) {
                            let {
                                key: i,
                                value: n,
                                shouldUnset: r
                            } = t;
                            (0, ge.A)(e, {
                                key: i,
                                value: n,
                                shouldUnset: r
                            })
                        },
                        [St.MY](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.mockupType = t
                        },
                        [St.pP](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.mockupProduct = t
                        },
                        [St.iB](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.mockupProductTechnique = t
                        },
                        [St.J3](e, t) {
                            let {
                                selectedSizes: i,
                                selectedColors: n,
                                usedTemplateIds: r
                            } = t;
                            e.selectedSizes = i || [], e.selectedColors = n || {}, e.usedTemplateIds = r
                        },
                        [St.rK](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            e.mockupProductDesign = t
                        },
                        [St.XZ](e, t) {
                            var i;
                            const n = [C.Y2, C.VL];
                            null !== (i = e.mockupProduct) && void 0 !== i && i.canHaveOnlyLabelPlacement || (n.push(C.PU), n.push(C.uW)), e.usedDesignPlacementIds = t.filter((e => !n.includes(e)))
                        }
                    },
                    getters: {
                        [St.r0]: e => t => (0, ge.h)(e, {
                            key: t
                        }),
                        [St.mm]: e => (0, ge.h)(e, {
                            key: Pt.G.HAS_CUSTOM_MOCKUP_ACCESS
                        }) || !1,
                        [St.zG]: e => e.mockupProduct,
                        [St.si]: e => {
                            var t;
                            return (null === (t = e.selectedSizes) || void 0 === t ? void 0 : t.length) > 0
                        },
                        [St.xO]: e => e.selectedColors && Object.keys(e.selectedColors).length > 0,
                        [St.f3]: e => e.mockupType === ei.pt,
                        [St.yu]: e => e.mockupProductTechnique === d.hC,
                        [St.Tq]: e => {
                            const t = e.usedDesignPlacementIds.some((e => C.bj.includes(e)));
                            return e.mockupProduct.canEstimateEmbroideryCosts && t
                        }
                    },
                    actions: {
                        async [St.Wz](e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e.state.accessPromise && !t) return e.state.accessPromise;
                            try {
                                const t = (0, J.Z)("designer/has-custom-mockup-access");
                                e.state.accessPromise = t.then((e => e.hasAccess));
                                const i = await t;
                                return i.success || console.error("Something went wrong retrieving mockup access!"), e.commit(St.mB, {
                                    key: Pt.G.HAS_CUSTOM_MOCKUP_ACCESS,
                                    value: i.hasAccess || !1
                                }), e.state.accessPromise
                            } catch (e) {
                                (0, $.logError)(e)
                            }
                        },
                        [St.Mp](e) {
                            let {
                                commit: t,
                                dispatch: i,
                                rootState: n
                            } = e;
                            t(p.ak(p.Vz), !0, {
                                root: !0
                            });
                            const r = qt.ak(qt.aL);
                            n.designer.mockupModule.live3dMockup.live3dInstance ? i(r, {
                                newStatusValue: Xt.V.STATUS_RELOAD_PRINTFILE
                            }, {
                                root: !0
                            }) : i(r, {
                                newStatusValue: Xt.V.STATUS_RELOAD_MODEL
                            }, {
                                root: !0
                            })
                        }
                    }
                },
                ni = i(75885),
                ri = i(43504),
                oi = i(71090),
                ai = i(46369),
                si = i(58841),
                li = i(8187),
                ui = {
                    state: {
                        chooserElements: [],
                        activeView: ri.eH,
                        textCountLimit: null,
                        fileCountLimit: 5,
                        licensedAssetCountLimit: 10,
                        clipartCountLimit: null,
                        groupCountLimit: 2,
                        placementConflictsCount: null
                    },
                    namespaced: !0,
                    mutations: {
                        [ni.Xc](e, t) {
                            e.chooserElements = t
                        },
                        [ni.uG](e, t) {
                            e.activeView = t
                        },
                        [ni.IL](e) {
                            const t = e.activeView;
                            e.activeView = null, setTimeout((() => {
                                e.activeView || (e.activeView = t)
                            }), 0)
                        },
                        [ni.Jn](e, t) {
                            let {
                                key: i,
                                value: n
                            } = t;
                            (0, ge.A)(e, {
                                key: i,
                                value: n,
                                shouldUnset: !n,
                                stateFlagProp: ri.w$
                            })
                        },
                        [ni.EU](e, t) {
                            e.placementConflictsCount = t
                        },
                        [ni.HN](e, t) {
                            let {
                                key: i,
                                value: n,
                                shouldUnset: r
                            } = t;
                            (0, ge.A)(e, {
                                key: i,
                                value: n,
                                shouldUnset: r,
                                stateFlagProp: ri.Wk
                            })
                        },
                        [ni.Wj](e) {
                            e[ri.Wk] = {}
                        },
                        [ni.Wf](e, t) {
                            let {
                                key: i,
                                value: n
                            } = t;
                            (0, ge.A)(e, {
                                key: i,
                                value: n,
                                shouldUnset: !n
                            })
                        }
                    },
                    getters: {
                        [ni.KN]: e => t => (0, ge.h)(e, {
                            key: t,
                            stateFlagProp: ri.w$
                        }),
                        [ni.JK]: (e, t, i, n) => t => (null != t ? t : e.chooserElements).filter((t => {
                            var i, r, o, a, s, l, u;
                            return t.id === ri.Nk.MOCKUP ? null == e || null === (i = e[ri.w$]) || void 0 === i ? void 0 : i[ri.CT.IS_PROMO_MOCKUP_PICKER_AVAILABLE] : t.id === ri.Nk.QUICKDESIGN || t.id === ri.A1 ? !n[(0, p.ak)(p.xI)] && (null == e || null === (r = e[ri.w$]) || void 0 === r ? void 0 : r[ri.CT.IS_QUICK_DESIGNS_PICKER_AVAILABLE]) : t.id === ri.hb ? null == e || null === (o = e[ri.w$]) || void 0 === o ? void 0 : o[ri.CT.IS_LICENSED_ASSET_PICKER_AVAILABLE] : ri.L3.includes(t.id) ? null == e || null === (a = e[ri.w$]) || void 0 === a ? void 0 : a[ri.CT.IS_MOCKUP_MAKER_MODE] : t.id === ri.Nk.FILE ? !n[(0, p.ak)(p.xI)] : t.id === ri.Nk.EXTERNAL_FILE ? !!n[(0, p.ak)(p.xI)] && n[(0, si.ak)(si.HK)](li.iT.FILE_LAYERS) : t.id === ri.Nk.TEXTBOX && n[(0, p.ak)(p.xI)] ? n[(0, si.ak)(si.HK)](li.iT.TEXT_LAYERS) : t.id === ri.Op && n[(0, p.ak)(p.xI)] ? n[(0, si.ak)(si.HK)](li.iT.CLIPART_LAYERS) : t.id !== ri.Nk.BACKGROUND_FILL || (n[(0, c.ak)(c.pX)](!0) || (null == e || null === (s = e[ri.w$]) || void 0 === s ? void 0 : s[ri.CT.IS_PROMO_MOCKUP_PICKER_AVAILABLE]) || (null == e || null === (l = e[ri.w$]) || void 0 === l ? void 0 : l[ri.CT.IS_MOCKUP_MAKER_MODE]) || (null == e || null === (u = e[ri.w$]) || void 0 === u ? void 0 : u[ri.CT.IS_LOGO_MAKER_MODE]))
                        })),
                        [ni.lZ]: e => t => (0, ge.h)(e, {
                            key: t,
                            stateFlagProp: ri.Wk
                        }),
                        [ni.wM]: e => e.activeView,
                        [ni.sM]: e => e.activeView === ri.eH,
                        [ni.$A]: e => t => (0, ge.h)(e, {
                            key: t
                        }),
                        [ni.SJ]: (e, t, i, n) => oi.j.getLayerLimit(n[(0, a.ak)(a.gN)]) || e.fileCountLimit,
                        [ni.Qi]: e => e.licensedAssetCountLimit,
                        [ni.rl]: (e, t, i, n) => oi.j.getLayerLimit(n[(0, a.ak)(a.gN)], ai.E.LAYER_LIMIT_TYPE_CLIPART) || e.clipartCountLimit,
                        [ni.fL]: (e, t, i, n) => oi.j.getLayerLimit(n[(0, a.ak)(a.gN)], ai.E.LAYER_LIMIT_TYPE_TEXT) || e.textCountLimit
                    }
                },
                ci = i(88002),
                di = {
                    state: {
                        isContinueButtonDisabled: !1,
                        isContinueButtonVisualDisable: !1,
                        showContinueSpinner: !1,
                        showContinueButton: !0,
                        isSaveTemplatesDisabled: !1,
                        showSaveTemplatesSpinner: !1,
                        isOrderPreviewDisabled: !1,
                        needReCheckAndUpdateErrorStatus: !1,
                        showCalculateButton: !1,
                        isCalculateButtonDisabled: !1,
                        isCalculateButtonCalculating: !1,
                        showEmbroideryCosts: !1,
                        footerPriceData: null,
                        showEmbroideryCostPopover: !1,
                        visibleFooterErrors: null
                    },
                    namespaced: !0,
                    mutations: {
                        [ci.Gj](e, t) {
                            e.isContinueButtonDisabled = t
                        },
                        [ci.V](e, t) {
                            e.isContinueButtonVisualDisable = t
                        },
                        [ci.Ye](e, t) {
                            e.showContinueSpinner = t
                        },
                        [ci.XM](e, t) {
                            e.showContinueButton = t
                        },
                        [ci.EW](e, t) {
                            e.isSaveTemplatesDisabled = t
                        },
                        [ci.SU](e, t) {
                            e.showSaveTemplatesSpinner = t
                        },
                        [ci.a](e, t) {
                            e.isOrderPreviewDisabled = t
                        },
                        [ci.Ed](e, t) {
                            e.needReCheckAndUpdateErrorStatus = t
                        },
                        [ci.t1](e, t) {
                            e.showCalculateButton = t
                        },
                        [ci.S9](e, t) {
                            e.isCalculateButtonDisabled = t
                        },
                        [ci.jF](e, t) {
                            e.isCalculateButtonCalculating = t
                        },
                        [ci.Q1](e, t) {
                            e.showEmbroideryCosts = t
                        },
                        [ci.mc](e, t) {
                            e.footerPriceData = t
                        },
                        [ci.qi](e, t) {
                            e.showEmbroideryCostPopover = t
                        },
                        [ci.Ui](e, t) {
                            e.visibleFooterErrors = t
                        },
                        [ci.oA](e) {
                            e.isContinueButtonDisabled = !1, e.isContinueButtonVisualDisable = !1, e.isOrderPreviewDisabled = !1, e.needReCheckAndUpdateErrorStatus = !1, e.isSaveTemplatesDisabled = !1, e.showContinueButton = !0, e.showContinueSpinner = !1, e.showSaveTemplatesSpinner = !1, e.isCalculateButtonCalculating = !1, e.isCalculateButtonDisabled = !1, e.showCalculateButton = !1, e.footerPriceData = null, e.visibleFooterErrors = null
                        }
                    },
                    actions: {
                        [ci.fP](e) {
                            let {
                                commit: t
                            } = e;
                            t(ci.Gj, !0), t(ci.a, !0), t(ci.EW, !0), t(ci.Ed, !0)
                        }
                    }
                },
                pi = i(49441),
                gi = {
                    state: {
                        [pi.Qf.PLACEMENT_GRID_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.GRID_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.ZOOM_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.PLACEMENT_DISCOUNT_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.LIFELIKE_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.UNRELATED_TEMPLATES_WARNING_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        [pi.Qf.LAYER_MERGING_WARNING_BUTTON]: {
                            isVisible: !1,
                            isActive: !1
                        },
                        isAnyDesignerAraButtonsVisible: !1
                    },
                    namespaced: !0,
                    mutations: {
                        [pi.On](e, t) {
                            let {
                                button: i,
                                isVisible: r
                            } = t;
                            n.default.set(e[i], "isVisible", r), r && !e.isAnyDesignerAraButtonsVisible && (e.isAnyDesignerAraButtonsVisible = !0)
                        },
                        [pi.mx](e, t) {
                            let {
                                button: i,
                                isActive: r
                            } = t;
                            n.default.set(e[i], "isActive", r)
                        },
                        [pi.oA](e) {
                            for (const t in pi.Qf) n.default.set(e[pi.Qf[t]], "isVisible", !1), n.default.set(e[pi.Qf[t]], "isActive", !1);
                            e.isAnyDesignerAraButtonsVisible = !1
                        }
                    },
                    getters: {
                        [pi.eU]: e => t => {
                            var i;
                            return (null === (i = e[t]) || void 0 === i ? void 0 : i.isVisible) || !1
                        },
                        [pi.F4]: e => t => {
                            var i;
                            return (null === (i = e[t]) || void 0 === i ? void 0 : i.isActive) || !1
                        }
                    }
                },
                mi = i(1256),
                hi = i(22662);
            var fi = {
                    state: {
                        activeView: null,
                        buttons: [{
                            type: hi.C.ANIMATION,
                            title: dlang("generator", "Animation"),
                            iconClass: "pf-i-play-speed",
                            width: 0
                        }, {
                            type: hi.C.TEXT,
                            title: dlang("generator", "Text"),
                            iconClass: "pf-i-square-edit-outline",
                            width: 0
                        }, {
                            type: hi.C.COLOR,
                            title: dlang("generator", "Color"),
                            iconClass: "pf-i-bugle",
                            width: 0
                        }, {
                            type: hi.C.FONT,
                            title: dlang("generator", "Font"),
                            iconClass: "pf-i-format-size",
                            width: 0
                        }, {
                            type: hi.C.TRANSFORM,
                            title: dlang("generator", "Transform"),
                            iconClass: "pf-i-vector-square",
                            width: 0
                        }, {
                            type: hi.C.POSITION,
                            title: dlang("generator", "Position"),
                            iconClass: "pf-i-fit-to-page-outline",
                            width: 0
                        }, {
                            type: hi.C.ARC,
                            title: dlang("generator", "Arc"),
                            iconClass: "arc-tool",
                            width: 0
                        }, {
                            type: hi.C.OUTLINE,
                            title: dlang("generator", "Outline"),
                            iconClass: "outline-icon",
                            width: 0
                        }, {
                            type: hi.C.SHADOW,
                            title: dlang("generator", "Shadow"),
                            iconClass: "pf-i-text-shadow",
                            width: 0
                        }, {
                            type: hi.C.CROP,
                            title: dlang("generator", "Crop"),
                            iconClass: "pf-i-crop",
                            width: 0
                        }, {
                            type: hi.C.REMOVE_BACKGROUND,
                            title: dlang("generator", "Remove background"),
                            iconClass: "pf-i-auto-fix",
                            width: 0
                        }, {
                            type: hi.C.EMBROIDERY_DETAILS,
                            title: dlang("generator", "Color & details"),
                            iconClass: "embroidery-details-icon",
                            width: 0
                        }, {
                            type: hi.C.PATTERN,
                            title: dlang("generator", "Pattern"),
                            iconClass: "pf-i-texture",
                            width: 0,
                            new: !0
                        }, {
                            type: hi.C.ALIGN_HORIZONTALLY,
                            title: dlang("generator", "Align"),
                            iconClass: "pf-i-format-horizontal-align-center",
                            width: 0
                        }],
                        layerTypesConfig: {
                            [ct.hG.TEXTBOX]: [hi.C.TEXT, hi.C.COLOR, hi.C.FONT, hi.C.TRANSFORM, hi.C.POSITION, hi.C.ARC, hi.C.OUTLINE, hi.C.SHADOW],
                            [ct.hG.CLIPART]: [hi.C.COLOR, hi.C.TRANSFORM, hi.C.POSITION, hi.C.PATTERN],
                            [ct.hG.FILE]: [hi.C.TRANSFORM, hi.C.POSITION, hi.C.CROP, hi.C.PATTERN, hi.C.REMOVE_BACKGROUND],
                            [ct.hG.EXTERNAL]: [hi.C.TRANSFORM, hi.C.POSITION, hi.C.CROP, hi.C.PATTERN],
                            [ct.hG.PROP]: [hi.C.TRANSFORM, hi.C.POSITION, hi.C.PATTERN],
                            [ct.hG.MOCKUP]: [hi.C.ALIGN_HORIZONTALLY],
                            [d.gj]: {
                                [ct.hG.TEXTBOX]: [hi.C.TEXT, hi.C.EMBROIDERY_DETAILS, hi.C.FONT, hi.C.TRANSFORM, hi.C.POSITION, hi.C.ARC, hi.C.OUTLINE],
                                [ct.hG.FILE]: [hi.C.EMBROIDERY_DETAILS, hi.C.TRANSFORM, hi.C.POSITION, hi.C.REMOVE_BACKGROUND],
                                [ct.hG.EXTERNAL]: [hi.C.EMBROIDERY_DETAILS, hi.C.TRANSFORM, hi.C.POSITION, hi.C.REMOVE_BACKGROUND],
                                [ct.hG.CLIPART]: [hi.C.EMBROIDERY_DETAILS, hi.C.TRANSFORM, hi.C.POSITION]
                            },
                            [d.oG]: {
                                [ct.hG.TEXTBOX]: [hi.C.ANIMATION, hi.C.TEXT, hi.C.COLOR, hi.C.FONT, hi.C.TRANSFORM, hi.C.POSITION, hi.C.ARC, hi.C.OUTLINE, hi.C.SHADOW],
                                [ct.hG.CLIPART]: [hi.C.ANIMATION, hi.C.COLOR, hi.C.TRANSFORM, hi.C.POSITION, hi.C.PATTERN],
                                [ct.hG.FILE]: [hi.C.ANIMATION, hi.C.TRANSFORM, hi.C.POSITION, hi.C.CROP, hi.C.PATTERN, hi.C.REMOVE_BACKGROUND],
                                [ct.hG.PROP]: [hi.C.ANIMATION, hi.C.TRANSFORM, hi.C.POSITION, hi.C.PATTERN]
                            },
                            [ct.hG.GROUP_QUICK_DESIGN]: [hi.C.POSITION],
                            [ct.hG.GROUP_LOGO_TEMPLATE]: [hi.C.POSITION],
                            [ct.hG.GROUP_INSIDE_LABEL_TEMPLATE]: [hi.C.COLOR]
                        }
                    },
                    namespaced: !0,
                    mutations: {
                        [mi.uG](e, t) {
                            e.activeView = t
                        },
                        [mi.xu](e, t) {
                            let {
                                type: i,
                                width: n
                            } = t;
                            if (!i || !n) return;
                            const o = (0, r.findIndex)(e.buttons, (e => e.type === i));
                            Object.assign(e.buttons[o], {
                                width: n
                            })
                        }
                    },
                    actions: {
                        [mi._k](e, t) {
                            e.commit(mi.uG, t)
                        }
                    },
                    getters: {
                        [mi.uS]: e => e.activeView,
                        [mi.ZY]: e => e.buttons,
                        [mi.l6]: e => e.layerTypesConfig
                    }
                },
                yi = i(56949),
                vi = i(96304),
                _i = {
                    state: {
                        mobileView: null,
                        layerPickerCreatedAt: 0
                    },
                    namespaced: !0,
                    getters: {
                        [yi.AC]: e => e.mobileView,
                        [yi.oD]: e => e.layerPickerCreatedAt,
                        [yi.hH](e, t, i, n) {
                            const r = i.designer;
                            return (null !== e.mobileView || n[mi.ak(mi.uS)]) && r.activeDesignerTabId !== ct.q_.TAB_3D && r.activeDesignerTabId !== ct.q_.TAB_PREVIEW
                        }
                    },
                    mutations: {
                        [yi.P0](e) {
                            e.layerPickerCreatedAt = Date.now()
                        }
                    },
                    actions: {
                        [yi.BM](e, t) {
                            let {
                                state: i,
                                commit: n
                            } = e;
                            vi.S.DESIGN_TAB === t && vi.S.LAYERS === i.mobileView || (vi.S.ADD_LAYER !== t && vi.S.DESIGN_TAB !== t || n(ni.x + ni.uG, ri.eH, {
                                root: !0
                            }), i.mobileView = t)
                        }
                    }
                };
            var Ii = {
                    state: {
                        featureConfig: {
                            [li.iT.FILE_LAYERS]: !1,
                            [li.iT.CLIPART_LAYERS]: !1,
                            [li.iT.TEXT_LAYERS]: !1,
                            [li.iT.EMBROIDERY_3D_PUFF]: !1,
                            [li.iT.HAS_COLOR_GROUP_INSIDE_LABELS]: !1
                        },
                        disabledPlacements: null
                    },
                    namespaced: !0,
                    mutations: {
                        [si.bz](e, t) {
                            e.featureConfig = {
                                ...e.featureConfig,
                                ...t
                            }
                        },
                        [si.mO](e, t) {
                            e.disabledPlacements = t
                        }
                    },
                    getters: {
                        [si.HK]: e => t => {
                            const i = t ? e.featureConfig[t] : null;
                            return null !== i ? i : e.featureConfig
                        },
                        [si.K3]: e => e.disabledPlacements
                    }
                },
                Ti = i(90583),
                Ei = {
                    state: {
                        variantItems: [],
                        activeGeneratorVariant: null,
                        activeLabelTechnique: null,
                        variantColorWarnings: {}
                    },
                    namespaced: !0,
                    mutations: {
                        [Qt.AD](e, t) {
                            e.variantItems = t
                        },
                        [Qt.T8](e) {
                            e.variantColorWarnings = {}
                        },
                        [Qt.D3](e, t) {
                            e.activeGeneratorVariant = t
                        },
                        [Qt.Ag](e, t) {
                            e.activeLabelTechnique = t
                        },
                        [Qt.Go](e, t) {
                            n.default.set(e.variantColorWarnings, t.technique, {
                                colorWarnings: t.warnings,
                                layers: t.layers,
                                activeColors: t.activeColors
                            })
                        }
                    },
                    getters: {
                        [Qt.Uh]: e => e.variantItems,
                        [Qt.uE]: e => e.activeGeneratorVariant,
                        [Qt._f]: e => e.activeLabelTechnique,
                        [Qt.zY]: e => e.variantColorWarnings,
                        [Qt.MJ]: e => t => e.variantItems.find((e => e.generatorVariant.generatorVariantId === t)),
                        [Qt.$X]: e => {
                            const t = e.variantItems.filter((e => C.c7.includes(e.template.placementId))),
                                i = new Set;
                            t.forEach((e => {
                                i.add(e.template.technique)
                            }));
                            const n = Array.from(i);
                            return Object.values(Ti.g7).filter((e => n.includes(e)))
                        },
                        [Qt.$e]: e => Object.values(e.variantColorWarnings).some((e => Object.keys(e.colorWarnings).length)),
                        [Qt.s1]: e => e.variantItems.map((e => e.generatorVariant.generatorVariantId))
                    },
                    actions: {
                        [Qt.lo](e, t) {
                            let {
                                variantItems: i
                            } = t;
                            const n = e.getters[Qt.s1];
                            e.commit(Qt.AD, i), (0, r.isEqual)(n, i) || e.dispatch(p.ak(p.OO), null, {
                                root: !0
                            })
                        }
                    }
                },
                Pi = i(44425),
                Si = {
                    state: {
                        fontReplacementBanner: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Pi.sw](e, t) {
                            e.fontReplacementBanner = t
                        }
                    },
                    getters: {
                        [Pi.g7]: e => e.fontReplacementBanner
                    }
                },
                bi = i(48881),
                Oi = {
                    state: {
                        isContinuePossible: null,
                        threadColorsError: null,
                        silentErrors: [],
                        visibleErrors: [],
                        designerLiveMockupErrorText: ""
                    },
                    namespaced: !0,
                    mutations: {
                        [bi.th](e, t) {
                            e.isContinuePossible = t
                        },
                        [bi.cc](e, t) {
                            e.threadColorsError = t
                        },
                        [bi.vI](e, t) {
                            e.silentErrors = t
                        },
                        [bi.Nb](e, t) {
                            e.visibleErrors = t
                        },
                        [bi.u0](e, t) {
                            e.designerLiveMockupErrorText = t
                        }
                    },
                    actions: {
                        [bi.wy](e, t) {
                            let {
                                isContinuePossible: i
                            } = t;
                            e.state.isContinuePossible !== i && (e.commit(bi.th, i), e.dispatch(p.ak(p.OO), null, {
                                root: !0
                            }))
                        }
                    }
                },
                Ci = i(18838),
                Li = i(24552);
            const Ai = () => ({
                undoHistory: [],
                undoCurrentStep: 0,
                placementOptionsHistory: [],
                currentAction: null,
                undoStatus: Li.Pq.IDLE
            });
            var ki = {
                    state: Ai(),
                    mutations: {
                        [Ci.Kw](e, t) {
                            let {
                                templatesWithData: i,
                                placementOptionsItemIndex: r,
                                generatorVariant: o,
                                rewriteCurrentHistoryItem: a,
                                activeDesignerTabId: s,
                                activeLayer: l
                            } = t;
                            const u = {
                                templates: i,
                                placementOptionsItemIndex: r,
                                generatorVariant: o,
                                activeDesignerTabId: s,
                                activeLayer: l
                            };
                            if (a) return n.default.set(e.undoHistory, e.undoCurrentStep, u), void(e.undoStatus = Li.Pq.IDLE);
                            if (e.undoHistory.length) {
                                const t = e.undoCurrentStep,
                                    i = e.undoHistory.length - 1,
                                    n = t < i,
                                    r = i === Li.ZH - 1;
                                n ? (e.undoHistory.splice(t + 1, e.undoHistory.length - 1), e.undoHistory.push(u), e.undoCurrentStep = e.undoHistory.length - 1) : r ? (e.undoHistory.shift(), e.undoHistory.push(u)) : (e.undoHistory.push(u), e.undoCurrentStep += 1)
                            } else e.undoHistory.push(u), e.undoCurrentStep = 0;
                            e.undoStatus = Li.Pq.IDLE
                        },
                        [Ci.fs](e) {
                            Object.assign(e, Ai())
                        },
                        [Ci.n](e, t) {
                            e.placementOptionsHistory.push(t)
                        },
                        [Ci.UE](e, t) {
                            let {
                                actionType: i
                            } = t;
                            const n = i === Li.KW.UNDO ? -1 : 1;
                            e.undoCurrentStep += n, console.log("state.undoCurrentStep", e.undoCurrentStep), e.currentAction = i
                        },
                        [Ci.eT](e, t) {
                            e.undoStatus = t
                        }
                    },
                    getters: {
                        [Ci.yG](e, t, i, n) {
                            const r = i.designer.activePlacementId,
                                o = n[(0, p.ak)(p.Xu)];
                            return o ? `${r}_${o}` : null
                        },
                        [Ci.g4](e) {
                            var t;
                            return null !== (t = e.undoCurrentStep) && void 0 !== t ? t : 0
                        },
                        [Ci.Hl](e) {
                            var t;
                            return null !== (t = e.undoHistory) && void 0 !== t && t.length ? e.undoHistory.length - 1 : 0
                        }
                    },
                    actions: {
                        [Ci.Ym](e, t) {
                            let {
                                state: i,
                                commit: n,
                                rootGetters: o
                            } = e, {
                                templates: a,
                                placementOptions: s,
                                generatorVariant: l,
                                rewriteCurrentHistoryItem: u,
                                activeDesignerTabId: c
                            } = t, d = -1;
                            s && (d = i.placementOptionsHistory.findIndex((e => JSON.stringify(e) === JSON.stringify(s))), -1 === d && (n(Ci.n, s), d = i.placementOptionsHistory.length - 1));
                            const g = Object.entries(a);
                            if (!g.length && i.undoHistory.length) return;
                            const m = {};
                            for (const [e, t] of g) m[e] = t;
                            const h = (0, r.cloneDeep)(o[(0, p.ak)(p.Uf)]);
                            n(Ci.Kw, {
                                templatesWithData: m,
                                placementOptionsItemIndex: d,
                                generatorVariant: l,
                                rewriteCurrentHistoryItem: u,
                                activeDesignerTabId: c,
                                activeLayer: h
                            })
                        },
                        [Ci.MI](e) {
                            var t;
                            let {
                                state: i,
                                getters: n,
                                rootState: o,
                                rootGetters: a
                            } = e;
                            const s = (0, r.uniq)(a[(0, y.ak)(y.TU)](!1, !0).generatorVariants.map((e => e.templateId)));
                            for (let e = i.undoCurrentStep; e >= 0; e--)
                                if (s.includes(i.undoHistory[e].generatorVariant.templateId)) {
                                    i.undoHistory[e].current = !0;
                                    break
                                } i.undoHistory = i.undoHistory.filter((e => s.includes(e.generatorVariant.templateId)));
                            const l = (0, r.findIndex)(i.undoHistory, (e => !0 === e.current));
                            i.undoCurrentStep = l, null === (t = i.undoHistory[l]) || void 0 === t || delete t.current
                        }
                    },
                    namespaced: !0
                },
                wi = i(17202),
                Ri = i(9722),
                Di = i(40601),
                Ni = i(19046),
                Mi = i(66308),
                Fi = i(59574),
                Vi = i(613),
                xi = i(22277),
                Gi = i(5781),
                Bi = i(73388);
            var Ui = i(72058);

            function Hi(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qi(n.key), n)
                }
            }

            function zi(e, t, i) {
                return t && Hi(e.prototype, t), i && Hi(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function ji(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Yi(e, t, i) {
                return (t = qi(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function qi(e) {
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
            let Wi = zi((function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ji(this, e), Yi(this, "placementId", null), Yi(this, "templateId", null), Yi(this, "designDimensions", null), Yi(this, "designMainColor", null), Yi(this, "designFeatures", null), this.placementId = t.placementId || null, this.templateId = t.templateId || null, this.designDimensions = t.designDimensions || null, this.designMainColor = t.designMainColor || null, this.designFeatures = t.designFeatures || null
            }));

            function Ki(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Qi(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zi(n.key), n)
                }
            }

            function Xi(e, t, i) {
                return t && Qi(e.prototype, t), i && Qi(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function $i(e, t, i) {
                return (t = Zi(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function Zi(e) {
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
            let Ji = function() {
                    function e() {
                        var t, i, n, r, o, a, s, l;
                        let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Ki(this, e), $i(this, "multipleProductId", null), $i(this, "productId", null), $i(this, "productDisplayName", null), $i(this, "productTechnique", null), $i(this, "isOriginProductItem", !1), $i(this, "placementsWithDesign", null), $i(this, "templates", []), $i(this, "placementOptions", null), $i(this, "generatorMockupVariantItem", null), $i(this, "placementMapping", null), this.multipleProductId = null !== (t = u.multipleProductId) && void 0 !== t ? t : null, this.productId = null !== (i = u.productId) && void 0 !== i ? i : null, this.productDisplayName = null !== (n = u.productDisplayName) && void 0 !== n ? n : "", this.isOriginProductItem = null !== (r = u.isOriginProductItem) && void 0 !== r && r, this.templates = null !== (o = u.templates) && void 0 !== o ? o : [], this.placementOptions = null !== (a = u.placementOptions) && void 0 !== a ? a : null, this.generatorMockupVariantItem = null !== (s = u.generatorMockupVariantItem) && void 0 !== s ? s : null, this.placementMapping = null !== (l = u.placementMapping) && void 0 !== l ? l : null
                    }
                    return Xi(e, [{
                        key: "recalculatePlacementsWithDesign",
                        value: function(e) {
                            const t = this.calcUsedPlacements(e);
                            this.placementsWithDesign = t.map((e => {
                                const t = this.templates.find((t => t.placementId === e));
                                this.placementOptions.getOptionsItemForPlacement(e);
                                return new Wi({
                                    placementId: e,
                                    templateId: t.templateId,
                                    designDimensions: {
                                        width: 400,
                                        height: 200
                                    },
                                    designMainColor: "#ff8000",
                                    designFeatures: {
                                        isPatternable: !1,
                                        isEmbroiderable: !1
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "calcUsedPlacements",
                        value: function(e) {
                            var t, i;
                            return e ? null === (t = this.placementOptions) || void 0 === t || null === (i = t.getData()) || void 0 === i ? void 0 : i.filter((t => e(t.placement))).map((e => e.placement)) : []
                        }
                    }, {
                        key: "transferDesignData",
                        value: function(e, t) {}
                    }], [{
                        key: "fromJSON",
                        value: function(t) {
                            var i, n, r, o, a;
                            const s = new e;
                            return s.productId = null !== (i = t.productId) && void 0 !== i ? i : null, s.productDisplayName = null !== (n = t.productDisplayName) && void 0 !== n ? n : "", s.templates = null !== (r = t.placementTemplates.map((e => Ui.M.fromArray(e)))) && void 0 !== r ? r : [], s.generatorMockupVariantItem = null !== (o = Ct.E.fromArray(t.generatorMockupVariantItem)) && void 0 !== o ? o : null, s.placementMapping = null !== (a = t.placementMapping) && void 0 !== a ? a : null, s
                        }
                    }]), e
                }(),
                en = Xi((function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Ki(this, e), this.multipleProductId = t.multipleProductId, this.productId = t.productId, this.productDisplayName = t.productDisplayName, this.isOriginProductItem = t.isOriginProductItem, this.templates = t.templates, this.placementOptions = t.placementOptions, this.generatorMockupVariantItem = t.generatorMockupVariantItem, this.placementMapping = t.placementMapping
                }));
            async function tn(e, t, i, n, r) {
                null == e || e.recalculatePlacementsWithDesign(r);
                const o = await async function(e) {
                    var t, i;
                    return null == e ? void 0 : e.productId, null == e ? void 0 : e.productTechnique, null == e || null === (t = e.generatorMockupVariantItem) || void 0 === t ? void 0 : t.color, null == e || null === (i = e.generatorMockupVariantItem) || void 0 === i ? void 0 : i.size, null == e ? void 0 : e.placementsWithDesign, [{
                        productId: 42,
                        productDisplayName: "White Glossy Mug",
                        placementTemplates: [],
                        generatorMockupVariantItem: {
                            generatorImageUrl: PF.ASSETS_URL + "images/product-block/leggings-@2x.jpg"
                        },
                        placementMapping: {
                            default: "default"
                        }
                    }, {
                        productId: 43,
                        productDisplayName: "Unisex Loose Fit Joggers | SOL'S 83030",
                        placementTemplates: [],
                        generatorMockupVariantItem: {
                            generatorImageUrl: PF.ASSETS_URL + "images/product-block/leggings-@2x.jpg"
                        },
                        placementMapping: {
                            default: "default"
                        }
                    }, {
                        productId: 1,
                        productDisplayName: "Unisex Staple T-Shirt | Bella + Canvas 3001",
                        placementTemplates: [],
                        generatorMockupVariantItem: {
                            generatorImageUrl: PF.ASSETS_URL + "images/product-block/leggings-@2x.jpg"
                        },
                        placementMapping: {
                            default: "default"
                        }
                    }]
                }(e);
                let a = n;
                const s = [];
                return o.forEach((e => {
                    const n = Ji.fromJSON(e);
                    n.multipleProductId = a++, n.transferDesignData(t, i), s.push(n)
                })), s
            }
            var nn = i(17947),
                rn = {
                    state: {
                        multipleProductItems: {},
                        suggestedProductIds: [],
                        designedProductIds: [],
                        activeMultipleProductId: null
                    },
                    namespaced: !0,
                    mutations: {
                        [Bi.Mp](e, t) {
                            const i = new Ji(t);
                            n.default.set(e.multipleProductItems, i.multipleProductId, i), e.designedProductIds = [i.multipleProductId], e.activeMultipleProductId = i.multipleProductId
                        },
                        [Bi.Nd](e, t) {
                            let {
                                multipleProductId: i,
                                productItem: r
                            } = t;
                            n.default.set(e.multipleProductItems[i], "productId", r.productId), n.default.set(e.multipleProductItems[i], "displayName", r.displayName)
                        },
                        [Bi.Nx](e, t) {
                            let {
                                multipleProductId: i,
                                activeGeneratorVariant: r
                            } = t;
                            n.default.set(e.multipleProductItems[i], "generatorMockupVariantItem", r)
                        },
                        [Bi.WP](e, t) {
                            let {
                                multipleProductId: i,
                                productTechnique: r
                            } = t;
                            n.default.set(e.multipleProductItems[i], "productTechnique", r)
                        },
                        [Bi.rE](e, t) {
                            let {
                                multipleProductId: i,
                                templates: r
                            } = t;
                            n.default.set(e.multipleProductItems[i], "templates", r)
                        },
                        [Bi.rk](e, t) {
                            let {
                                multipleProductId: i,
                                placementOptions: r
                            } = t;
                            n.default.set(e.multipleProductItems[i], "placementOptions", r)
                        },
                        [Bi.tv](e) {
                            e.suggestedProductIds.forEach((t => delete e.multipleProductItems[t])), e.suggestedProductIds = []
                        },
                        [Bi.bg](e, t) {
                            t.forEach((t => {
                                n.default.set(e.multipleProductItems, t.multipleProductId, t), e.suggestedProductIds.push(t.multipleProductId)
                            }))
                        },
                        [Bi.gz]: (e, t) => {
                            e.suggestedProductIds = e.suggestedProductIds.filter((e => e !== t)), e.designedProductIds.push(t)
                        },
                        [Bi.eE]: (e, t) => {
                            e.activeMultipleProductId = t
                        }
                    },
                    getters: {
                        [Bi.Q]: e => e.activeMultipleProductId,
                        [Bi.xH]: e => {
                            var t;
                            return null !== (t = e.multipleProductItems[1]) && void 0 !== t ? t : null
                        },
                        [Bi.Zp]: e => t => {
                            var i;
                            return null !== (i = e.multipleProductItems[t]) && void 0 !== i ? i : null
                        },
                        [Bi.K1]: (e, t) => {
                            var i, n;
                            return null !== (i = null === (n = t[Bi.xH]) || void 0 === n ? void 0 : n.templates) && void 0 !== i ? i : null
                        },
                        [Bi.T4]: (e, t) => {
                            var i, n;
                            return null !== (i = null === (n = t[Bi.xH]) || void 0 === n ? void 0 : n.placementOptions) && void 0 !== i ? i : null
                        },
                        [Bi.WI]: e => Math.max(...Object.keys(e.multipleProductItems).map((e => Number(e)))) + 1,
                        [Bi.uN]: e => e.suggestedProductIds.map((t => e.multipleProductItems[t])),
                        [Bi.L]: e => e.designedProductIds.map((t => e.multipleProductItems[t])),
                        [Bi.Jb]: (e, t) => ((0, nn.tq)(), !1)
                    },
                    actions: {
                        [Bi.J5](e, t) {
                            let {
                                productItem: i,
                                productTechnique: n,
                                activeGeneratorVariant: r,
                                templates: o,
                                placementOptions: a = null
                            } = t;
                            const s = new en({
                                multipleProductId: 1,
                                isOriginProductItem: !0,
                                productId: i.productId,
                                productDisplayName: i.displayName,
                                generatorMockupVariantItem: r,
                                templates: o,
                                placementOptions: a
                            });
                            e.commit(Bi.Mp, s)
                        },
                        async [Bi._2](e) {
                            const t = e.getters[Bi.xH],
                                i = e.getters[Bi.WI],
                                n = e.getters[Bi.K1],
                                r = e.getters[Bi.T4],
                                o = e.rootState.designer.productModule.config.hasDesignForPlacement,
                                a = await tn(t, n, r, i, o);
                            e.commit(Bi.tv), e.commit(Bi.bg, a)
                        },
                        [Bi.iw](e, t, i) {
                            var n;
                            let {
                                productItem: r,
                                productTechnique: o,
                                activeGeneratorVariant: a,
                                templates: s,
                                placementOptions: l
                            } = t;
                            i = null !== (n = i) && void 0 !== n ? n : e.getters[Bi.Q], r && e.commit(Bi.Nd, {
                                multipleProductId: i,
                                productItem: r
                            }), o && e.commit(Bi.WP, {
                                multipleProductId: i,
                                productTechnique: o
                            }), a && e.commit(Bi.Nx, {
                                multipleProductId: i,
                                activeGeneratorVariant: a
                            }), s && e.commit(Bi.rE, {
                                multipleProductId: i,
                                templates: s
                            }), l && e.commit(Bi.rk, {
                                multipleProductId: i,
                                placementOptions: l
                            })
                        },
                        [Bi.yL](e, t) {
                            let {
                                multipleProductId: i
                            } = t;
                            e.commit(Bi.gz, i), e.commit(Bi.eE, i)
                        }
                    }
                };
            const on = {
                state: {
                    type: null,
                    featureFlags: {},
                    designerCanvasLoaded: null,
                    triggeredEventsJsListeners: {},
                    templates: [],
                    virtualTextLayer: null,
                    activeGroupLayer: null,
                    activePlacementId: null,
                    activeTemplateId: null,
                    activeLayerId: null,
                    recalculateCustomizerSlider: null,
                    lifelikeVariants: {},
                    placementOptions: [],
                    isZoomInState: !1,
                    isCropState: !1,
                    canGenerateFilesOnly: !1,
                    activeDesignerTabId: ct.q_.TAB_DESIGNER,
                    onDesignStatusChange: null,
                    didDesignChange: !1,
                    isCustomizingMode: !1,
                    isLifelikeEnabled: !0,
                    mockupGeneratorBackUrl: null,
                    showDesignerDesignViewButton: !1,
                    showDesigner3DViewButton: !1,
                    showDesignerMockupViewButton: !1,
                    isDesignerLayoutLoadingOverlayActive: !1,
                    shouldRegenerateDesignerLiveMockup: !0,
                    designerLiveMockupGeneratedFiles: null,
                    mirrorCheckboxValue: !1,
                    isDisabledLayerManipulations: !1,
                    isGraphicsResizable: !1
                },
                modules: {
                    productModule: Q,
                    assetsModule: Et,
                    mockupModule: ii,
                    layerPickerModule: ui,
                    toolbarModule: fi,
                    mobileFooterModule: _i,
                    embedModule: Ii,
                    bannersModule: Si,
                    undoModule: ki,
                    variantAreaModule: Ei,
                    validatorModule: Oi,
                    footerButtonsModule: di,
                    designerAreaActionButtonsModule: gi,
                    multipleProductsModule: rn
                },
                namespaced: !0,
                mutations: {
                    [p.so](e, t) {
                        e.isGraphicsResizable = t
                    },
                    [p.$i](e, t) {
                        e.isDisabledLayerManipulations = t
                    },
                    [p.Hp](e, t) {
                        e.mirrorCheckboxValue = t
                    },
                    [p.O3](e, t) {
                        e.type = t
                    },
                    [p.iI](e, t) {
                        let {
                            featureFlagName: i,
                            featureFlagValue: n
                        } = t;
                        e.featureFlags[i] = n
                    },
                    [p.Tl](e, t) {
                        e.designerCanvasLoaded = t ? Date.now() : null
                    },
                    [p.a9](e) {
                        e.triggeredEventsJsListeners = {}
                    },
                    [p.NY](e, t) {
                        let {
                            eventName: i,
                            jsListenerFunction: r
                        } = t;
                        e.triggeredEventsJsListeners[i] || n.default.set(e.triggeredEventsJsListeners, i, []), e.triggeredEventsJsListeners[i].push(r)
                    },
                    [p.IQ](e, t) {
                        let {
                            eventName: i,
                            listener: n
                        } = t;
                        if (!e.triggeredEventsJsListeners[i]) return;
                        const r = e.triggeredEventsJsListeners[i].indexOf(n);
                        r < 0 || e.triggeredEventsJsListeners[i].splice(r, 1)
                    },
                    [p.WF](e, t) {
                        e.templates.push(t)
                    },
                    [p.QB](e, t) {
                        let {
                            template: i,
                            templateIndex: n
                        } = t;
                        if (n < 0) return;
                        const r = [...e.templates];
                        e.templates = [], r[n] = i, e.templates = r
                    },
                    [p.GD](e) {
                        e.templates = [], e.virtualTextLayer = null, e.activeGroupLayer = null, e.activeLayerId = null
                    },
                    [p.Wi](e, t) {
                        let {
                            templateIndex: i,
                            layerIndex: n,
                            layer: r
                        } = t;
                        i < 0 || n < 0 || e.templates[i].layers.splice(n, 1, r)
                    },
                    [p.pV](e, t) {
                        e.activePlacementId = t
                    },
                    [p.eW](e, t) {
                        e.activeTemplateId = t
                    },
                    [p.n4](e, t) {
                        e.activeLayerId = t, e.activeGroupLayer = null
                    },
                    [p.vL](e, t) {
                        e.activeGroupLayer = t, e.activeLayerId = null
                    },
                    [p.WG](e, t) {
                        e.virtualTextLayer = t, t && (e.activeLayerId = null == t ? void 0 : t.uniqueId)
                    },
                    [p.GA](e) {
                        e.recalculateCustomizerSlider = e
                    },
                    [p.el](e, t) {
                        e.isCropState = t
                    },
                    [p.zn](e, t) {
                        e.isZoomInState = t
                    },
                    [p.C7](e, t) {
                        let {
                            key: i,
                            lifelikeVariants: n
                        } = t;
                        const r = {
                            ...e.lifelikeVariants
                        };
                        e.lifelikeVariants = {}, r[i] = n, e.lifelikeVariants = r
                    },
                    [p.pD](e, t) {
                        e.placementOptions.push(t)
                    },
                    [p.y5](e, t) {
                        let {
                            placementOptionItem: i,
                            itemIndex: n
                        } = t;
                        if (n < 0) return;
                        const r = [...e.placementOptions];
                        e.placementOptions = [], r[n] = i, e.placementOptions = r
                    },
                    [p.jk](e, t) {
                        e.canGenerateFilesOnly = t
                    },
                    [p.nj](e, t) {
                        e.activeDesignerTabId = t
                    },
                    [p.TR](e, t) {
                        e.onDesignStatusChange = t
                    },
                    [p.YQ](e, t) {
                        e.didDesignChange = t
                    },
                    [p.ki](e, t) {
                        e.isCustomizingMode = t
                    },
                    [p.bg](e, t) {
                        e.isLifelikeEnabled = t
                    },
                    [p.tj](e, t) {
                        e.showDesignerDesignViewButton = t
                    },
                    [p.JF](e, t) {
                        e.showDesigner3DViewButton = t
                    },
                    [p.OP](e, t) {
                        e.showDesignerMockupViewButton = t
                    },
                    [p.j9](e, t) {
                        e.mockupGeneratorBackUrl = t
                    },
                    [p.H$](e, t) {
                        e.isDesignerLayoutLoadingOverlayActive = t
                    },
                    [p.Vz](e, t) {
                        e.shouldRegenerateDesignerLiveMockup = t
                    },
                    [p.n9](e, t) {
                        e.designerLiveMockupGeneratedFiles = t
                    }
                },
                getters: {
                    [p.hQ]: e => e.isDisabledLayerManipulations && !e.isGraphicsResizable,
                    [p.pR]: e => e.mirrorCheckboxValue,
                    [p.p_]: e => {
                        var t, i;
                        const n = e[p.Uf];
                        if (null != n && n.patternType || null != n && n.isCropState) return !1;
                        return [d.GE].indexOf(null === (t = (0, xi.WU)()) || void 0 === t ? void 0 : t.type) > -1 && (null === (i = (0, Gi.uE)()) || void 0 === i ? void 0 : i.role) === Ct.E.ROLE_TEMPLATE
                    },
                    [p.ZJ]: e => e.type,
                    [p.EY]: e => e.type === ct.e3,
                    [p.nF]: e => e.type === ct.uq,
                    [p.cG]: e => e.type === ct.Ke,
                    [p.rr]: e => e.type === ct.em,
                    [p.VX]: e => t => e.featureFlags[t] || !1,
                    [p.mz]: e => e.designerCanvasLoaded,
                    [p.zd]: e => e.templates,
                    [p.AO]: e => e.activePlacementId,
                    [p.s9]: e => e.isCustomizingMode,
                    [p.Xu]: e => e.activeTemplateId,
                    [p.gW]: (e, t) => {
                        if (t[p.EY]) return e.templates[0];
                        const i = t[p.Xu],
                            n = t[p.AO];
                        return e.templates.find((e => e.templateId === i && e.placementId === n)) || null
                    },
                    [p._k]: (e, t) => {
                        const i = t[p.gW];
                        return (null == i ? void 0 : i.layers) || []
                    },
                    [p.YK]: (e, t) => t[p._k].filter((e => !e.isGroup && e.isImageLayer())),
                    [p.g0]: (e, t) => t[p._k].filter((e => e.isLicensedAssetLayer())),
                    [p.xR]: (e, t) => t[p._k].filter((e => e.isClipartLayer())),
                    [p.dl]: (e, t) => t[p._k].filter((e => e.isTextLayer())),
                    [p.uO]: (e, t) => {
                        const i = [];
                        return t[p._k].forEach((e => {
                            if (e.inGroup()) {
                                const t = i.find((t => t.isGroup && t.uniqueId === e.groupId));
                                t ? (e.uniqueGroupLayerId = t.uniqueGroupLayerId, t.layers.unshift(e), t.isLocked = !t.layers.some((e => !e.isGroupLocked))) : i.unshift((0, Fi.GY)(e))
                            } else i.unshift(e)
                        })), i
                    },
                    [p.mA]: e => t => e.triggeredEventsJsListeners[t] || [],
                    [p.ir]: e => e.activeLayerId,
                    [p.tS]: e => t => {
                        var i, n;
                        if (!t) return null;
                        if ((null === (i = e.virtualTextLayer) || void 0 === i ? void 0 : i.uniqueId) === t) return e.virtualTextLayer;
                        if ((null === (n = e.activeGroupLayer) || void 0 === n ? void 0 : n.uniqueId) === t) return e.activeGroupLayer;
                        let r;
                        return e.templates.some((e => {
                            const i = e.layers.find((e => e.uniqueId === t));
                            return !!i && (r = i, !0)
                        })), r
                    },
                    [p.E1]: e => e.virtualTextLayer,
                    [p.Uf]: (e, t) => e.activeGroupLayer && !e.activeLayerId ? e.activeGroupLayer : t[p.tS](t[p.ir]),
                    [p.xw]: (e, t) => {
                        const i = t[p.Uf];
                        if (i) {
                            if (i.isGroup) return i.groupType;
                            if (i.getType) return i.getType()
                        }
                        return t[p.H5].some((e => e.options.designFillType)) ? ct.hG.DESIGN_FILL : null
                    },
                    [p.P3]: (e, t) => {
                        var i;
                        return null === (i = t[p.Uf]) || void 0 === i ? void 0 : i.isGroup
                    },
                    [p.t9]: (e, t) => {
                        var i;
                        return null === (i = t[p.Uf]) || void 0 === i ? void 0 : i.isTemporary
                    },
                    [p.Q6]: e => !(null == e || !e.recalculateCustomizerSlider),
                    [p.s1]: e => e.isCropState,
                    [p.n5]: e => e.isZoomInState,
                    [p.Tg]: e => e.lifelikeVariants,
                    [p.cj]: e => t => e.lifelikeVariants[t] || {},
                    [p.H5]: e => e.placementOptions,
                    [p.bk]: e => t => e.placementOptions.find((e => e.placement === t)),
                    [p.Or]: e => e.activeGroupLayer,
                    [p.xI]: e => e.type === ct.as,
                    [p.Pr]: (e, t) => t[p.VX](Vi.PN) && !t[p.xI],
                    [p.cC]: e => [ct.uq, ct.as].includes(e.type),
                    [p.iR]: (e, t) => {
                        var i;
                        return (null === (i = t[p.Uf]) || void 0 === i ? void 0 : i.groupType) === ct.hG.GROUP_INSIDE_LABEL_TEMPLATE
                    },
                    [p.rO]: e => C.c7.includes(e.activePlacementId),
                    [p.Tq]: e => e.canGenerateFilesOnly,
                    [p.GX]: e => {
                        const t = e.templates.filter((e => C.c7.includes(e.placementId)));
                        return !!t.length && t.some((e => e.layers.length))
                    },
                    [p.in]: e => {
                        const t = e.productModule.config,
                            i = e.placementOptions.filter((e => t.hasDesignForPlacement(e.placement))).map((e => e.placement));
                        return e.templates, i
                    },
                    [p.ew]: e => e.isLifelikeEnabled,
                    [p.mF]: e => e.mockupGeneratorBackUrl,
                    [p.Gv]: e => e.shouldRegenerateDesignerLiveMockup,
                    [p.Sn]: e => e.activeDesignerTabId,
                    [p.I_]: e => e.activeDesignerTabId === ct.q_.TAB_DESIGNER,
                    [p.dH]: e => e.activeDesignerTabId === ct.q_.TAB_PREVIEW,
                    [p.hb]: e => e.activeDesignerTabId === ct.q_.TAB_3D,
                    [p.U1]: (e, t) => {
                        var i, n;
                        const r = null !== (i = t[p.Uf]) && void 0 !== i && i.isGroup ? null === (n = t[p.Uf]) || void 0 === n ? void 0 : n.layers[0] : t[p.Uf];
                        return !(null != r && r.isMockupLayer() || e.isCropState || t[p.hQ] || t[p.s9])
                    }
                },
                actions: {
                    [p.rG](e, t) {
                        let {
                            technique: i,
                            fromLayer: n
                        } = t;
                        const r = new wi.d;
                        if (n) r.copyValues(n), r.originalPosition = n.originalPosition.getClone(), r.position = n.position.getClone();
                        else {
                            const t = e.getters[p.AO];
                            r.originalPosition = new _t.K, r.position = r.originalPosition.getClone(), r.font = (0, Ri.vq)(), r.size = Di.Q.getDefaultFontSize(t, i), r.color = r.getDefaultColor(), r.alignment = Ni.B.ALIGN_CENTER
                        }
                        r.uniqueId = Mi.Z._instanceCounter + 1, r.text = "", r.isTemporary = !0, e.commit(p.WG, r)
                    },
                    [p.hn](e, t) {
                        let {
                            didDesignChange: i
                        } = t;
                        e.state.didDesignChange !== i && (e.commit(p.YQ, i), e.dispatch(p.OO))
                    },
                    [p.Y1](e, t) {
                        let {
                            template: i
                        } = t;
                        e.commit(p.WF, i), e.dispatch(p.OO)
                    },
                    [p.z](e, t) {
                        let {
                            template: i,
                            templateIndex: n
                        } = t;
                        const o = e.getters[p.in];
                        e.commit(p.QB, {
                            template: i,
                            templateIndex: n
                        });
                        const a = e.getters[p.in];
                        (0, r.isEqual)(o, a) || e.dispatch(p.OO)
                    },
                    [p.fj]: e => {
                        var t;
                        if (!e.state.onDesignStatusChange) return;
                        const i = e.rootGetters[y.ak(y.Nj)](!1).map((e => e.variantId));
                        e.state.onDesignStatusChange({
                            didDesignChange: e.state.didDesignChange,
                            isContinuePossible: null === (t = e.state.validatorModule) || void 0 === t ? void 0 : t.isContinuePossible,
                            usedPlacements: e.getters[p.in],
                            selectedVariantIds: i
                        })
                    },
                    [p.OO]: (0, r.debounce)((e => {
                        e.dispatch(p.fj)
                    }), 1e3)
                }
            }
        },
        10989: (e, t, i) => {
            "use strict";
            i.d(t, {
                $i: () => G,
                AO: () => W,
                C7: () => T,
                E1: () => te,
                EY: () => ve,
                GA: () => v,
                GD: () => m,
                GX: () => Le,
                Gv: () => De,
                H$: () => M,
                H5: () => le,
                Hp: () => x,
                IQ: () => u,
                I_: () => Ve,
                JF: () => D,
                NY: () => l,
                O3: () => r,
                OO: () => je,
                OP: () => N,
                Og: () => n,
                Or: () => de,
                P3: () => ee,
                Pr: () => Pe,
                Q6: () => ie,
                QB: () => g,
                Sn: () => Ne,
                TR: () => C,
                Tg: () => ae,
                Tl: () => a,
                Tq: () => Ce,
                U1: () => Be,
                Uf: () => Z,
                VX: () => z,
                Vz: () => F,
                WF: () => p,
                WG: () => y,
                Wi: () => h,
                Xu: () => K,
                Y1: () => qe,
                YK: () => ge,
                YQ: () => L,
                ZJ: () => U,
                _k: () => ce,
                a9: () => s,
                ak: () => We,
                bg: () => k,
                bk: () => ue,
                cC: () => Se,
                cG: () => Ie,
                cj: () => se,
                dH: () => xe,
                dl: () => ye,
                eW: () => d,
                el: () => _,
                ew: () => we,
                fj: () => ze,
                g0: () => me,
                gW: () => pe,
                hQ: () => Fe,
                hb: () => Ge,
                hn: () => He,
                iI: () => o,
                iR: () => be,
                in: () => Ae,
                ir: () => Q,
                j9: () => w,
                jk: () => S,
                ki: () => A,
                mA: () => Y,
                mF: () => Re,
                mz: () => j,
                n4: () => f,
                n5: () => re,
                n9: () => V,
                nF: () => _e,
                nj: () => O,
                pD: () => E,
                pR: () => H,
                pV: () => c,
                p_: () => Me,
                qW: () => oe,
                rG: () => Ue,
                rO: () => Oe,
                rr: () => Te,
                s1: () => ne,
                s9: () => ke,
                so: () => B,
                t9: () => $,
                tS: () => X,
                tj: () => R,
                uO: () => he,
                vL: () => b,
                xI: () => Ee,
                xR: () => fe,
                xw: () => J,
                y5: () => P,
                z: () => Ye,
                zd: () => q,
                zn: () => I
            });
            const n = "designer",
                r = "m_setDesignerType",
                o = "m_setDesignerFeatureFlag",
                a = "m_setDesignerLoaded",
                s = "m_resetTriggeredEventsJsListener",
                l = "m_addTriggeredEventsJsListener",
                u = "m_removeTriggeredEventsJsListener",
                c = "m_setActivePlacementId",
                d = "m_setActiveTemplateId",
                p = "m_addTemplate",
                g = "m_updateTemplate",
                m = "m_clearTemplates",
                h = "m_updateLayer",
                f = "m_setActiveLayerId",
                y = "m_setVirtualTextLayer",
                v = "m_setRecalculateCustomizerSlider",
                _ = "m_setCropState",
                I = "m_setZoomInState",
                T = "m_setLifelikeVariants",
                E = "m_addPlacementOption",
                P = "m_updatePlacementOption",
                S = "m_setCanGenerateFilesOnly",
                b = "m_setActiveGroupLayer",
                O = "m_setActiveDesignerTabId",
                C = "m_setOnDesignStatusChange",
                L = "m_setDidDesignChange",
                A = "m_setIsCustomizingMode",
                k = "m_setLifelikeToggleSwitchValue",
                w = "m_setMockupGeneratorBackUrl",
                R = "m_setShowDesignerDesignViewButton",
                D = "m_setShowDesigner3DViewButton",
                N = "m_setShowDesignerMockupViewButton",
                M = "m_setDesignerLayoutLoadingOverlay",
                F = "m_setRegenerateDesignerLiveMockupValue",
                V = "m_setDesignerLiveMockupGeneratedFiles",
                x = "m_setMirrorCheckboxValue",
                G = "m_setIsDisabledLayerManipulations",
                B = "m_setIsGraphicsResizable",
                U = "g_designerType",
                H = "g_mirrorCheckboxValue",
                z = "g_designerFeatureFlag",
                j = "g_designerLoaded",
                Y = "g_triggeredEventJsListener",
                q = "g_templates",
                W = "g_activePlacementId",
                K = "g_activeTemplateId",
                Q = "g_activeLayerId",
                X = "g_getLayerById",
                $ = "g_activeLayerIsTemporary",
                Z = "g_activeLayer",
                J = "g_activeLayerType",
                ee = "g_isGroupActiveLayer",
                te = "g_getVirtualTextLayer",
                ie = "g_recalculateCustomizerSlider",
                ne = "g_isCropState",
                re = "g_isZoomInState",
                oe = "g_getPreviewString",
                ae = "g_setLifelikeVariants",
                se = "g_getLifelikeVariantsByKey",
                le = "g_getPlacementOptions",
                ue = "g_getPlacementOptionByPlacement",
                ce = "g_activePlacementLayers",
                de = "g_activeGroupLayer",
                pe = "g_activeTemplate",
                ge = "g_imageLayers",
                me = "g_licensedAssetLayers",
                he = "g_nestedLayers",
                fe = "g_clipartLayers",
                ye = "g_textLayers",
                ve = "g_isMockupDesigner",
                _e = "g_isProductDesigner",
                Ie = "g_isPromoDesigner",
                Te = "g_isLogoDesigner",
                Ee = "g_isEmbeddedDesigner",
                Pe = "g_isNewLayoutAvailable",
                Se = "g_canHaveProduct",
                be = "g_isActiveLayerInsideLabelGroup",
                Oe = "g_isActivePlacementInsideLabel",
                Ce = "g_canGenerateFilesOnly",
                Le = "g_hasInsideLabelTemplateLayers",
                Ae = "g_usedPlacements",
                ke = "g_isCustomizingMode",
                we = "g_isLifelikeEnabled",
                Re = "g_mockupGeneratorBackUrl",
                De = "g_shouldRegenerateDesignerLiveMockup",
                Ne = "g_activeDesignerTabId",
                Me = "g_canImageBeMirrored",
                Fe = "g_isDesignerCanvasReadOnly",
                Ve = "g_isDesignerViewActive",
                xe = "g_isMockupViewActive",
                Ge = "g_is3dViewActive",
                Be = "g_canShowDesignerDesignControls",
                Ue = "a_createVirtualTextLayer",
                He = "a_onDidDesignChange",
                ze = "a_notifyDesignStatusChange",
                je = "a_notifyDesignStatusChangeDebounced",
                Ye = "a_onUpdateTemplate",
                qe = "a_onAddTemplate";

            function We(e) {
                return n + "/" + e
            }
        },
        87826: (e, t, i) => {
            "use strict";
            i.d(t, {
                JW: () => u,
                LS: () => s,
                QY: () => l,
                XF: () => a,
                cD: () => o,
                m$: () => n,
                sg: () => r
            });
            const n = "subTechniqueType",
                r = "standard",
                o = "plus",
                a = [r, o],
                s = "subtype-icon--",
                l = [{
                    type: r,
                    label: dlang("products", "Standard")
                }, {
                    type: o,
                    label: dlang("products", "Unlimited color")
                }],
                u = {
                    EMBROIDERY: [{
                        image: "standard.jpeg",
                        title: dlang("products", "Standard embroidery"),
                        description: dlang("products", "Best for designs that have solid shapes with clear details and colors. You can choose from 15 colors and have 6 colors per design."),
                        arrowPlacement: "bottom-left"
                    }, {
                        image: "unlimited.jpeg",
                        title: dlang("products", "Unlimited color embroidery"),
                        description: dlang("products", "Best for designs that require a wide variety of colors and shades. With this, you can also achieve a gradient effect."),
                        arrowPlacement: "bottom-right",
                        link: {
                            text: lang("Learn more"),
                            href: "https://help.printful.com/hc/en-us/articles/5254851511324"
                        }
                    }]
                }
        },
        95502: (e, t, i) => {
            "use strict";
            i.d(t, {
                V: () => B
            });
            var n = i(79442),
                r = i(87969),
                o = i(58617);
            var a = i(65613),
                s = i(80510),
                l = i(30663),
                u = i(83434),
                c = i(39438);

            function d(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g(n.key), n)
                }
            }

            function p(e, t) {
                h(e, t), t.add(e)
            }

            function g(e) {
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

            function m(e, t, i) {
                h(e, t), t.set(e, i)
            }

            function h(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function f(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, _(e, t, "set"), i), i
            }

            function y(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function v(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, _(e, t, "get"))
            }

            function _(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var I = new WeakMap,
                T = new WeakMap,
                E = new WeakMap,
                P = new WeakSet,
                S = new WeakSet,
                b = new WeakSet,
                O = new WeakSet,
                C = new WeakSet;
            let L = function() {
                function e() {
                    var t, i, n;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), p(this, C), p(this, O), p(this, b), p(this, S), p(this, P), m(this, I, {
                        writable: !0,
                        value: {}
                    }), t = this, n = {}, (i = g(i = "filterParams")) in t ? Object.defineProperty(t, i, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[i] = n, m(this, T, {
                        writable: !0,
                        value: {}
                    }), m(this, E, {
                        writable: !0,
                        value: {}
                    })
                }
                var t, i, n;
                return t = e, i = [{
                    key: "addMockupIds",
                    value: function(e) {
                        for (const [t, i] of Object.entries(e)) v(this, I)[t] ? v(this, I)[t] = [...new Set([...v(this, I)[t], ...i])] : v(this, I)[t] = i;
                        y(this, P, A).call(this)
                    }
                }, {
                    key: "getMockupOptionGroupIds",
                    value: function(e) {
                        return v(this, I)[e] || []
                    }
                }, {
                    key: "getAllMockups",
                    value: function() {
                        const e = [];
                        for (const t of Object.values(v(this, I))) e.push(...t);
                        return (0, u.v8)(e)
                    }
                }, {
                    key: "setFilterParams",
                    value: function(e) {
                        let {
                            productId: t,
                            sizes: i = [],
                            colors: n = [],
                            placementIds: r = [],
                            templateIds: o = [],
                            availableProductPlacements: a = [],
                            excludedRoles: s = c.Tu,
                            labelTemplateType: l = null,
                            isSizeBasedProduct: u = !1,
                            templateIdMap: d = {}
                        } = e;
                        this.filterParams = {
                            productId: t,
                            sizes: i,
                            colors: n,
                            placementIds: r,
                            templateIds: o,
                            availableProductPlacements: a,
                            excludedRoles: s,
                            labelTemplateType: l,
                            isSizeBasedProduct: u
                        }, y(this, P, A).call(this), f(this, E, d)
                    }
                }, {
                    key: "getFilteredMockups",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return e || (e = this.getAllMockups()), e.filter((e => !(this.filterParams.excludedRoles.includes(e.role) || !this.filterParams.templateIds.includes(e.templateId) || e.size && !this.filterParams.sizes.includes(e.size) || e.color && !this.filterParams.colors.includes(e.color) || e.placementId && !this.filterParams.placementIds.includes(e.placementId))))
                    }
                }, {
                    key: "getGroupedMockupVariants",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (!e && Object.keys(v(this, T)).length) return v(this, T);
                        const t = e || this.getAllMockups(),
                            i = {},
                            n = l.BX.reduce(((e, t) => {
                                const i = t.filter((e => this.filterParams.placementIds.includes(e)));
                                return i.length ? (e.push(i), e) : e
                            }), []),
                            r = !!n.length;
                        for (const e of this.getFilteredMockups(t)) {
                            if (e.placementId === l.Aw) continue;
                            if ((null == e || !e.isPrimary()) && r && !y(this, O, R).call(this, e, n)) continue;
                            const t = e.option || y(this, C, D).call(this, e.placementId),
                                o = e.optionGroup || "Default";
                            i[o] = i[o] || [], i[o][t] = i[o][t] || [], i[o][t].push(e)
                        }
                        return e ? y(this, S, k).call(this, i) : (f(this, T, y(this, S, k).call(this, i)), v(this, T))
                    }
                }, {
                    key: "getGroupsFirstMockupVariant",
                    value: function(e) {
                        var t, i, n, r;
                        const o = this.getGroupedMockupVariants(),
                            a = null === (t = Object.keys(o[e])) || void 0 === t ? void 0 : t[0];
                        return null !== (i = null === (n = o[e]) || void 0 === n || null === (r = n[a]) || void 0 === r ? void 0 : r[0]) && void 0 !== i ? i : null
                    }
                }, {
                    key: "getPlacementsTemplateIdsForVariant",
                    value: function(e) {
                        let {
                            size: t = null,
                            color: i = null
                        } = e;
                        return this.filterParams.isSizeBasedProduct ? v(this, E)[t] : v(this, E)[i]
                    }
                }, {
                    key: "getFirstGroupGeneratorVariants",
                    value: function(e) {
                        var t, i;
                        let {
                            size: n = null,
                            color: r = null
                        } = e;
                        const o = this.getGroupedMockupVariants(),
                            a = null === (t = Object.keys(o)) || void 0 === t ? void 0 : t[0],
                            s = null === (i = Object.keys(o[a])) || void 0 === i ? void 0 : i[0];
                        return o[a][s].filter((e => (!e.size || !n || e.size && e.size === n) && (!e.color || !r || e.color && e.color === r)))
                    }
                }], i && d(t.prototype, i), n && d(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function A() {
                f(this, T, {})
            }

            function k(e) {
                const t = (this.filterParams.colors || []).slice(),
                    i = (this.filterParams.sizes || []).slice(),
                    n = (e, t) => (i, n) => {
                        const r = t.indexOf(i[e]),
                            o = t.indexOf(n[e]);
                        return r === o ? 0 : r < o ? -1 : 1
                    },
                    r = y(this, b, w).call(this, e, PF.Config.ProductPush.VariantFilter.OPTION_GROUP_SEQUENCE);
                for (const e in r) {
                    const o = y(this, b, w).call(this, r[e], PF.Config.ProductPush.VariantFilter.OPTION_SEQUENCE);
                    for (const e in o) {
                        const r = o[e];
                        r.sort(((e, r) => {
                            const o = n("color", t)(e, r);
                            return o + (o ? 0 : n("size", i)(e, r))
                        })), o[e] = r
                    }
                    r[e] = o
                }
                return r
            }

            function w(e, t) {
                const i = Object.keys(e);
                i.sort(((e, i) => t.indexOf(e) > t.indexOf(i) ? 1 : -1));
                const n = {};
                for (const t in i) n[i[t]] = e[i[t]];
                return n
            }

            function R(e, t) {
                var i;
                const n = null !== (i = e.relatedPlacements) && void 0 !== i ? i : [];
                return t.every((t => t.includes(e.placementId) || t.some((e => n.includes(e)))))
            }

            function D(e) {
                var t, i;
                PF.DEV && console.warn("Notify developers that this is used somewhere!");
                return null !== (t = null === (i = this.filterParams.availableProductPlacements.find((t => t.id === e))) || void 0 === i ? void 0 : i.title) && void 0 !== t ? t : e
            }

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V(n.key), n)
                }
            }

            function F(e, t, i) {
                return (t = V(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function V(e) {
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
            let x = function() {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    N(this, e), F(this, "productId", null), F(this, "placementIds", []), F(this, "templateIds", []), F(this, "colors", []), F(this, "sizes", []), F(this, "returnMockupData", !1), F(this, "limitGroupMockups", !1), F(this, "mockupsGroupName", null), this.productId = t.productId || this.productId, this.placementIds = t.placementIds || this.placementIds, this.templateIds = t.templateIds || this.templateIds, this.colors = t.colors || this.colors, this.sizes = t.sizes || this.sizes, this.returnMockupData = t.returnMockupData || this.returnMockupData, this.limitGroupMockups = t.limitGroupMockups || this.limitGroupMockups, this.mockupsGroupName = t.mockupsGroupName || this.mockupsGroupName
                }
                var t, i, n;
                return t = e, (i = [{
                    key: "getCacheKey",
                    value: function() {
                        let e = "";
                        return Object.keys(this).forEach((t => {
                            Array.isArray(this[t]) ? e += this[t].sort().toString() : "boolean" == typeof this[t] ? e += this[t] ? t : "" : e += this[t]
                        })), e
                    }
                }, {
                    key: "toParams",
                    value: function() {
                        const e = {};
                        return Object.keys(this).forEach((t => {
                            const i = Array.isArray(this[t]);
                            (i && this[t].length || !i && this[t]) && (e[t] = this[t])
                        })), e
                    }
                }]) && M(t.prototype, i), n && M(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            var G = {
                state: {
                    mockupStorage: {},
                    productMockupFilters: {},
                    loadedFilters: []
                },
                namespaced: !0,
                mutations: {
                    [r.bI](e, t) {
                        let {
                            productId: i,
                            params: n
                        } = t;
                        e.productMockupFilters[i] || (e.productMockupFilters[i] = new L), e.productMockupFilters[i].setFilterParams({
                            ...n,
                            productId: i
                        })
                    },
                    [r.h0](e, t) {
                        e.mockupStorage[t.generatorVariantId] = s.E.fromArray(t)
                    },
                    [r.rS](e, t) {
                        let {
                            productId: i,
                            productMockupIdsByOptionGroupNames: n
                        } = t;
                        e.productMockupFilters[i].addMockupIds(n)
                    },
                    [r.Rd](e, t) {
                        e.loadedFilters.push(t)
                    }
                },
                getters: {
                    [r.wp]: e => t => e.productMockupFilters[t] || null,
                    [r.Sl]: (e, t) => (i, n) => {
                        const o = t[r.wp](i);
                        return (null == o ? void 0 : o.getMockupOptionGroupIds(n).map((t => e.mockupStorage[t]))) || []
                    },
                    [r.LT]: (e, t) => (e, i) => {
                        const n = t[r.wp](i);
                        return (null == n ? void 0 : n.getPlacementsTemplateIdsForVariant(e)) || {}
                    },
                    [r.v8]: e => t => t.map((t => e.mockupStorage[t]))
                },
                actions: {
                    async [r.Zo](e, t) {
                        const i = t.getCacheKey();
                        if (!e.state.loadedFilters.includes(i)) {
                            e.commit(r.Rd, i);
                            try {
                                const i = await async function(e) {
                                    return (0, o.r)("/rpc/designer-rpc/get-product-mockups", e)
                                }(t.toParams()), n = {};
                                i.forEach((t => {
                                    e.commit(r.h0, t);
                                    const i = t.noTranslationOptionGroup;
                                    n[i] || (n[i] = []), n[i].push(t.generatorVariantId)
                                })), e.commit(r.rS, {
                                    productId: t.productId,
                                    productMockupIdsByOptionGroupNames: n
                                })
                            } catch (e) {
                                (0, a.logError)(e)
                            }
                        }
                    },
                    async [r.Av](e, t) {
                        let {
                            productId: i,
                            placementIds: n,
                            templateIds: o,
                            colors: a = null,
                            sizes: s = null,
                            returnMockupData: l = !1,
                            limitGroupMockups: u = !1,
                            mockupsGroupName: c = null
                        } = t;
                        var d;
                        e.getters[r.wp](i).filterParams.isSizeBasedProduct ? a = (null === (d = a) || void 0 === d ? void 0 : d.filter(Boolean)) || [] : s = [];
                        const p = new x({
                            productId: i,
                            placementIds: n,
                            templateIds: o,
                            colors: a,
                            sizes: s,
                            returnMockupData: l,
                            limitGroupMockups: u,
                            mockupsGroupName: c
                        });
                        await e.dispatch(r.Zo, p)
                    },
                    async [r.tB](e, t) {
                        let {
                            productId: i,
                            placementIds: n,
                            templateIds: o,
                            colorName: a,
                            size: s,
                            returnMockupData: l = !1
                        } = t;
                        await e.dispatch(r.Av, {
                            productId: i,
                            placementIds: n,
                            templateIds: o,
                            colors: [a],
                            sizes: [s],
                            returnMockupData: l,
                            limitGroupMockups: !0
                        })
                    }
                }
            };

            function B() {
                (0, n.moduleExistsAt)(r.Lq) || (0, n.registerModuleAt)(r.Lq, G, {
                    skipIfAlreadyRegistered: !0
                })
            }
        },
        83434: (e, t, i) => {
            "use strict";
            i.d(t, {
                Sl: () => d,
                aN: () => u,
                lp: () => s,
                oG: () => o,
                p1: () => l,
                tB: () => a,
                v8: () => c
            });
            var n = i(79442),
                r = i(87969);
            async function o(e) {
                let {
                    productId: t,
                    placementIds: i,
                    templateIds: o,
                    colors: a = null,
                    sizes: s = null,
                    returnMockupData: l = !1,
                    limitGroupMockups: u = !1,
                    mockupsGroupName: c = null
                } = e;
                return (0, n.getVuex)().dispatch(r.ak(r.Av), {
                    productId: t,
                    placementIds: i,
                    templateIds: o,
                    colors: a,
                    sizes: s,
                    returnMockupData: l,
                    limitGroupMockups: u,
                    mockupsGroupName: c
                })
            }
            async function a(e) {
                let {
                    productId: t,
                    placementIds: i,
                    templateIds: o,
                    colorName: a,
                    size: s,
                    returnMockupData: l = !1
                } = e;
                await (0, n.getVuex)().dispatch(r.ak(r.tB), {
                    productId: t,
                    placementIds: i,
                    templateIds: o,
                    colorName: a,
                    size: s,
                    returnMockupData: l
                })
            }

            function s(e, t) {
                (0, n.getVuex)().commit(r.ak(r.bI), {
                    productId: e,
                    params: t
                })
            }

            function l(e) {
                return (0, n.getVuex)().getters[r.ak(r.wp)](e)
            }

            function u(e, t) {
                return (0, n.getVuex)().getters[r.ak(r.LT)](e, t)
            }

            function c(e) {
                return (0, n.getVuex)().getters[r.ak(r.v8)](e)
            }

            function d(e, t) {
                return (0, n.getVuex)().getters[r.ak(r.Sl)](e, t)
            }
        },
        87969: (e, t, i) => {
            "use strict";
            i.d(t, {
                Av: () => g,
                LT: () => u,
                Lq: () => n,
                Rd: () => s,
                Sl: () => c,
                Zo: () => p,
                ak: () => h,
                bI: () => r,
                h0: () => o,
                rS: () => a,
                tB: () => m,
                v8: () => d,
                wp: () => l
            });
            const n = "productMockups",
                r = "m_setupProductFilterParams",
                o = "m_addMockupToStorage",
                a = "m_addToProductMockupStorage",
                s = "m_addLoadedFilter",
                l = "g_getProductMockupsFilter",
                u = "g_getPlacementTemplateIds",
                c = "g_getProductMockupsByOptionGroupName",
                d = "g_getMockupsByIds",
                p = "a_loadProductMockups",
                g = "a_setupRequestFilterAndLoadMockups",
                m = "a_loadProductVariantMockupGroups";

            function h(e) {
                return n + "/" + e
            }
        },
        69935: (e, t, i) => {
            "use strict";
            i.d(t, {
                GQ: () => L,
                Kt: () => A,
                d1: () => O
            });
            var n = i(61169),
                r = i(9651),
                o = i(25046),
                a = i(75232);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, f(n.key), n)
                }
            }

            function u(e, t, i) {
                return t && l(e.prototype, t), i && l(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function d(e) {
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
                        var r = m(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
                }
            }

            function p(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return g(e)
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function h(e, t, i) {
                return (t = f(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function f(e) {
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

            function y(e, t, i) {
                v(e, t), t.set(e, i)
            }

            function v(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function _(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, T(e, t, "get"))
            }

            function I(e, t, i) {
                return function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, T(e, t, "set"), i), i
            }

            function T(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }
            var E = new WeakMap,
                P = new WeakMap,
                S = new WeakMap,
                b = new WeakSet;
            let O = function(e) {
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
                var t = d(i);

                function i(e) {
                    var n, o, a;
                    return s(this, i), n = t.call(this), v(o = g(n), a = b), a.add(o), y(g(n), E, {
                            writable: !0,
                            value: null
                        }), y(g(n), P, {
                            writable: !0,
                            value: void 0
                        }), y(g(n), S, {
                            writable: !0,
                            value: []
                        }), h(g(n), "nodeError", null), n.node = (0, r._)("div"), I(g(n), E, e),
                        function(e, t, i) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(g(n), b, C).call(g(n)), n.nodeError = (0, r._)("div", "alert alert-danger text-center hidden padding-10", dlang("products", "Please select at least one shape!")).append(n.node), n
                }
                return u(i, [{
                    key: "getSelected",
                    value: function() {
                        return _(this, E).selectedValues
                    }
                }, {
                    key: "setSelected",
                    value: function(e) {
                        _(this, E).selectedValues = e, _(this, P).setDataProp("selectedValues", _(this, E).selectedValues)
                    }
                }, {
                    key: "setItems",
                    value: function(e) {
                        _(this, E).items = e, _(this, P).setDataProp("items", this.getItemsForVue())
                    }
                }, {
                    key: "getItems",
                    value: function() {
                        return _(this, E).items
                    }
                }, {
                    key: "setSelectedColor",
                    value: function(e) {
                        I(this, S, e)
                    }
                }, {
                    key: "getItemsForVue",
                    value: function() {
                        let e = (0, a.IS)(_(this, E).items);
                        const t = PF.ASSETS_URL + "images/layout/not-available.jpg";
                        return _(this, S).forEach((t => {
                            e = e.map((e => {
                                var i;
                                e.image[t] && (e.image = e.image[t], e.badge = null !== (i = e.badge[t]) && void 0 !== i ? i : null);
                                return e
                            }))
                        })), e.map((e => {
                            if ("object" == typeof e.image) {
                                var i, n, r;
                                const o = null !== (i = Object.keys(e.image)[0]) && void 0 !== i ? i : null;
                                e.image = null !== (n = e.image[o]) && void 0 !== n ? n : t, e.badge = null !== (r = e.badge[o]) && void 0 !== r ? r : null
                            }
                            return e
                        }))
                    }
                }, {
                    key: "updateErrorStatus",
                    value: function(e) {
                        return e && (this.nodeError.innerText = e), _(this, E).selectedValues.length ? (this.nodeError.classList.add("hidden"), !0) : (this.nodeError.classList.remove("hidden"), !1)
                    }
                }, {
                    key: "hasNoSizes",
                    value: function() {
                        return !this.getItems().length
                    }
                }]), i
            }(n.p);

            function C() {
                const e = new o.L;
                e.components = {
                    "custom-dropdown-picker": () => Promise.all([i.e(33348), i.e(53987)]).then(i.bind(i, 91460))
                }, e.template = '\n            <custom-dropdown-picker\n                :title="title"\n                :placeholderTxt="placeholderTxt"\n                :selected-values="selectedValues"\n                :items="items"\n                :class="cssClass"\n                @selected="emitEvent(\'select\', $event)"/>\n        ', e.initialData = {
                    title: _(this, E).title,
                    placeholderTxt: _(this, E).placeholderTxt,
                    selectedValues: _(this, E).selectedValues,
                    items: this.getItemsForVue(),
                    cssClass: _(this, E).cssClass
                }, e.emitEvent = (e, t) => {
                    if (!(!_(this, E).allowMultiselect && _(this, E).selectedValues.includes(t.value) || "function" == typeof _(this, E).onChanged && !0 !== _(this, E).onChanged(t, e))) {
                        switch (e) {
                            case "select":
                                _(this, E).selectedValues = _(this, E).allowMultiselect ? _(this, E).selectedValues.push(t.value) : [t.value];
                                break;
                            case "deselect":
                                _(this, E).selectedValues = _(this, E).selectedValues.filter((e => e !== t.value))
                        }
                        this.setSelected(_(this, E).selectedValues)
                    }
                }, I(this, P, new o.Z(e)), _(this, P).append(this.node)
            }
            let L = u((function e(t) {
                    s(this, e), h(this, "name", ""), h(this, "value", ""), h(this, "isSelectable", !0), h(this, "isClickable", !0), h(this, "image", {}), h(this, "badge", {}), h(this, "overlay", null), this.value = t.value, this.name = t.name
                })),
                A = u((function e() {
                    s(this, e), h(this, "title", "Choose patch shape"), h(this, "placeholderTxt", "Choose patch shape"), h(this, "selectedValues", []), h(this, "items", []), h(this, "onChanged", null), h(this, "allowMultiselect", !1), h(this, "cssClass", "")
                }))
        },
        46102: () => {}
    }
]);