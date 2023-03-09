/*! License information is available at https://static.cdn.printful.com/dist-pf/27497.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [27497], {
        62059: (e, t, a) => {
            a.d(t, {
                Eu: () => l,
                Gi: () => _,
                H: () => g,
                HG: () => n,
                JA: () => v,
                Ml: () => c,
                NT: () => r,
                OS: () => u,
                OZ: () => w,
                QC: () => d,
                TC: () => p,
                Vb: () => h,
                ak: () => L,
                oA: () => o,
                py: () => m,
                s_: () => s,
                vL: () => y,
                x3: () => E,
                xq: () => i
            });
            const n = "push/attributes",
                o = "m_resetState",
                i = "m_updateState",
                r = "m_updateProductVisibility",
                l = "m_updateFreeShippingSelection",
                d = "m_updateSizeGuideSettings",
                c = "m_updatePushTags",
                u = "m_updateSelectedCategories",
                s = "m_updateSelectedGenderCategory",
                _ = "m_updateShippingProfile",
                g = "m_updateMarketplaceCategory",
                m = "m_updateTaxRule",
                p = "m_updateSkuPrefix",
                y = "m_updateProductVendor",
                v = "m_updateProductType",
                w = "m_updateSelectedBrandingProfile",
                h = "m_updateTaxCode",
                E = "g_getAttributeData";

            function L(e) {
                return n + "/" + e
            }
        },
        70878: (e, t, a) => {
            a.d(t, {
                w: () => o
            });
            var n = a(82320);

            function o(e, t) {
                const a = new n.m,
                    o = a.getCachedProductById(e, !0);
                o ? t(o) : a.getProductsById([e], (function(e) {
                    if (!e) return void t(null);
                    const n = e.shift();
                    a.cacheProduct(n), t(n)
                }))
            }
        },
        70418: (e, t, a) => {
            a.d(t, {
                r: () => l
            });
            var n = a(9651),
                o = a(93920),
                i = function(e, t) {
                    (0, o.f)(t, e)
                },
                r = function(e, t, a, n) {
                    const i = parseInt(n.status + ""),
                        r = {
                            "X-Redirect-Error-Message": n.getResponseHeader("X-Redirect-Error-Message")
                        };
                    (0, o.y)(i, n.responseJSON || {}, t, r, a)
                };
            const l = function(e, t, a, o) {
                o = o || {}, t = t || {};
                var l = e.split("/"),
                    d = null,
                    c = null,
                    u = null;
                3 === l.length ? (d = l[0], c = l[1], u = l[2]) : 2 === l.length ? (c = l[0], u = l[1]) : console.error("RPC call got strange URL: " + e);
                var s = (d ? "/" + d : "") + "/rpc/" + c + "-rpc/" + u,
                    _ = void 0 === o.context ? null : o.context,
                    g = {
                        url: s,
                        method: "POST",
                        dataType: "json",
                        data: t,
                        success: function(t) {
                            i(e, t), a && a.call(_, t.result)
                        },
                        error: r.bind(null, s, e, t)
                    };
                n.U.O2O(g, o);
                const m = g.beforeSend;
                if (g.beforeSend = function(e) {
                        e.setRequestHeader("X-CSRF-Token", window.yii.getCsrfToken()), window.embeddedDesigner && e.setRequestHeader("X-Embedded-Designer", !0), m && m(e)
                    }, !a) return new Promise((function(a, n) {
                    g.success = function(t) {
                        i(e, t), a(t.result)
                    }, g.error = function(a) {
                        o.error ? o.error(a) : r(0, e, t, a), n(a)
                    }, $.ajax(g)
                }));
                $.ajax(g)
            };
            window && ((globalThis || {}).RPC = l)
        },
        78009: (e, t, a) => {
            a.d(t, {
                CQ: () => d,
                dB: () => l,
                v2: () => c
            });
            var n = a(70878);
            const o = "products_pricing",
                i = "mockup_generator",
                r = "order_flow",
                l = {
                    BREAKPOINT_DOTS: 767,
                    EVENT_NAME: "productCatalogNavigate",
                    EVENT_ALL_LOADED: "productCatalogAllLoaded",
                    EVENT_PRODUCTS_LOADED: "productCatalogProductsLoaded",
                    EVENT_PRODUCTS_FILTER: "productCatalogProductsFiltered",
                    EVENT_TOGGLE_LOCK: "productCatalogLock",
                    EVENT_PRODUCT_CHOOSE: "productCatalogProductChosen",
                    EVENT_CATEGORY_CHOOSE: "productCatalogCategoryChosen",
                    EVENT_TAB_CHOOSE: "productCatalogTabChosen",
                    EVENT_VARIANT_CHANGED: "productCatalogVariantChanged",
                    PRODUCT_CATALOG_INDEX_SLUG_CHANGES: {
                        en_US: {
                            old: "/custom",
                            new: "/custom-products"
                        },
                        de_DE: {
                            old: "/de/individualisierte",
                            new: "/de/individualisierte-produkte"
                        },
                        ja_JP: {
                            old: "/jp/custom",
                            new: "/jp/custom-products"
                        }
                    },
                    TYPE_PP: o,
                    TYPE_MG: i,
                    TYPE_OF: r,
                    TYPE_PUSH: "product_push",
                    TYPE_SYNC: "flow_sync",
                    TYPE_TEMPLATE_SHARING: "product_template_sharing",
                    RECENT_MOCKUP_PARAMS: Object.freeze({
                        CACHE_KEY: "products-recent-mockups",
                        CACHE_VERSION: 2,
                        MAX_RECENT_CACHE: 24,
                        MAX_RECENT_SHOW: 4
                    }),
                    BASE_TITLES: {},
                    TITLES: {
                        [o]: dlang("site", "Product catalog"),
                        [i]: dlang("products", "Mockup and print file generator"),
                        [r]: dlang("products", "Create an order | Printful")
                    },
                    PAGE_TITLES: {
                        [o]: dlang("products", "We print on these products"),
                        [i]: dlang("products", "Design maker with a built-in mockup generator")
                    },
                    PAGE_SUBTITLES: {
                        [o]: dlang("products", "Here you'll find details about all the products we print on")
                    },
                    FILTER_TYPES: {},
                    CAN_ACCESS_FAST_DELIVERY_CATEGORY: !1,
                    CAN_ACCESS_STARTER_PACK_CATEGORY: !1,
                    is: e => d.catalogType === e,
                    isProductsPricing: () => l.is(l.TYPE_PP),
                    isProductPush: () => l.is(l.TYPE_PUSH),
                    isProductTemplate() {
                        return this.isProductPush() && d.isProductTemplate && !d.isProductSwap
                    },
                    isProductSwap: () => d.isProductTemplate && d.isProductSwap,
                    isOrderFlow: () => l.is(l.TYPE_OF),
                    isGenerator: () => l.is(l.TYPE_MG),
                    isTemplateSharingFlow: () => l.is(l.TYPE_TEMPLATE_SHARING),
                    isInitialized() {
                        var e;
                        return (null === (e = d.catalogType) || void 0 === e ? void 0 : e.length) > 0 || d.isCatalogLoadedIn
                    },
                    isProductPickable: () => d.isProductPickable,
                    getRecentMockups() {
                        if (!window.localStorage) return [];
                        const e = JSON.parse(window.localStorage.getItem(l.RECENT_MOCKUP_PARAMS.CACHE_KEY + "-" + PF.LOCALE));
                        return e && e.length ? e.slice(0, l.RECENT_MOCKUP_PARAMS.MAX_RECENT_SHOW).map((e => {
                            if (e.url) {
                                e.generatorUrl = e.url;
                                const t = e.url.replace("/generator/", "");
                                e.id = parseInt(t.substr(0, t.indexOf("/"))), l.isProductsPricing() && (0, n.w)(e.id, (t => e.catalogPageUrl = t.catalogPageUrl))
                            }
                            return e
                        })) : []
                    },
                    addRecentMockup(e) {
                        if (!window.localStorage) return;
                        const t = l.getRecentMockups(),
                            a = t.findIndex((t => t.generatorUrl === e.generatorUrl));
                        a > -1 && t.splice(a, 1), t.unshift(e), t.slice(0, l.RECENT_MOCKUP_PARAMS.MAX_RECENT_CACHE), window.localStorage.setItem(l.RECENT_MOCKUP_PARAMS.CACHE_KEY + "-" + PF.LOCALE, JSON.stringify(t))
                    },
                    setCatalogType(e) {
                        d.catalogType = e
                    },
                    setPageSubtitle(e, t) {
                        l.PAGE_SUBTITLES[e] = t
                    },
                    setPageTitle(e, t) {
                        l.PAGE_TITLES[e] = t
                    },
                    setBaseTitle(e, t) {
                        l.BASE_TITLES[e] = t
                    },
                    getCatalogTypeName() {
                        let e = "";
                        return this.isProductsPricing() ? e = "regular catalog" : this.isProductTemplate() ? e = "template" : this.isProductSwap() ? e = "swap product" : this.isProductPush() ? e = "push" : this.isOrderFlow() ? e = "order" : this.isGenerator() ? e = "designmaker" : this.isTemplateSharingFlow() && (e = "product template sharing"), e
                    }
                },
                d = {
                    catalogType: "",
                    urlPrefix: "",
                    isCatalogLoadedIn: !1,
                    isProductTemplate: !1,
                    isProductPickable: !1,
                    isProductSwap: !1
                },
                c = {
                    createAndDispatchEvent: void 0
                };
            (globalThis || {}).PFProductsCatalogGlobalState = d, (globalThis || {}).PFProductsCatalogCommon = l, (globalThis || {}).PFProductsCatalogRuntimeHelpers = c
        },
        48776: (e, t, a) => {
            a.d(t, {
                $B: () => M,
                Bi: () => F,
                Di: () => Ee,
                EB: () => ie,
                Eg: () => L,
                FD: () => de,
                Fk: () => B,
                Ic: () => c,
                Ij: () => T,
                Ir: () => C,
                Iy: () => Q,
                JY: () => we,
                NH: () => h,
                Nr: () => he,
                O5: () => b,
                P0: () => s,
                Pl: () => be,
                Qn: () => S,
                Qu: () => pe,
                RQ: () => re,
                Re: () => X,
                Ro: () => J,
                SN: () => p,
                Tp: () => R,
                UE: () => P,
                UF: () => _e,
                VE: () => fe,
                Vd: () => W,
                Vw: () => Te,
                Xm: () => oe,
                ZD: () => z,
                ZP: () => De,
                Zn: () => G,
                Zv: () => ve,
                aF: () => me,
                au: () => ke,
                bg: () => k,
                bm: () => ye,
                cF: () => $,
                cX: () => Pe,
                cv: () => _,
                eg: () => le,
                es: () => Z,
                fT: () => I,
                fc: () => m,
                h: () => Se,
                hn: () => y,
                hq: () => ne,
                j2: () => g,
                m: () => N,
                nS: () => K,
                pX: () => U,
                pt: () => O,
                qt: () => ae,
                ss: () => D,
                t2: () => ge,
                t3: () => ee,
                tW: () => v,
                uD: () => ue,
                uJ: () => f,
                v$: () => Ce,
                vG: () => x,
                vk: () => se,
                wb: () => E,
                x4: () => w,
                xd: () => u,
                yC: () => d,
                z_: () => te,
                zq: () => Le
            });
            var n = a(62059),
                o = a(65613),
                i = a(96486),
                r = a(78009);

            function l(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (o = n.key, i = void 0, "symbol" == typeof(i = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var n = a.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(o, "string")) ? i : String(i)), n)
                }
                var o, i
            }
            const d = "popup",
                c = "announcement",
                u = "dashboard_banner",
                s = "survey",
                _ = "post_purchase_banner",
                g = "homepage_block",
                m = "product_catalog_banner",
                p = "dashboard recommended products",
                y = "zero state store recommended products",
                v = "recommended products after push",
                w = "template recommended products",
                h = "corresponding product",
                E = "product templates",
                L = "CTA banner",
                f = "link",
                P = "CTA",
                b = "dismiss",
                T = "close",
                C = "cancel",
                S = "submit",
                k = "button",
                D = "challenge",
                A = "view",
                R = "pf challenge block",
                I = "modal window",
                N = "completed",
                O = "not completed",
                U = "in progress",
                x = "button_click",
                F = "link_click",
                M = "open_tab",
                G = "product catalog",
                B = "product_image_interaction",
                H = "last_visited_landing_page",
                q = ["0a9df14191b4e43e72c4d432aeed5fca", "1b8c2c13220b5b5bd2a395eca94ae6b9", "a55408c924418ac14aa6a94c458b2f87"],
                V = "dataLayerBulkOrderData",
                Y = "dataLayerFirstPaidOrderData",
                j = 127;

            function K(e, t, a, n, i) {
                let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "promo_click",
                        promo_type: e,
                        marketing_campaign_name: i,
                        promo_title: t,
                        promo_id: a,
                        promo_click_element: n,
                        promo_category: r
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function X(e, t, a, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : A;
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "promo_impression",
                        promo_type: e,
                        marketing_campaign_name: n,
                        promo_title: t,
                        promo_id: a,
                        promo_category: i,
                        impression_type: r
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function z(e, t, a, n, i, r, l) {
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "banner_impression",
                        category: e,
                        banner_name: t,
                        banner_title: a,
                        banner_id: n,
                        flow: i,
                        item: {
                            item_name: r,
                            item_id: l
                        }
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function J(e, t, a, n, i, r, l, d, c, u) {
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "banner_click",
                        category: e,
                        banner_name: t,
                        banner_title: a,
                        banner_id: i,
                        button_name: n,
                        click_element: r,
                        click_url_path: l,
                        flow: d,
                        item: {
                            item_name: c,
                            item_id: u
                        }
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }
            const Q = "product_info",
                Z = "similar_product",
                W = "product_templates",
                $ = "product_sync_duplicate",
                ee = "order_volume_suggestion";
            async function te(e, t, i) {
                try {
                    var r, l, d, c, u, s, _;
                    window.dataLayer = window.dataLayer || [];
                    const {
                        getVuex: o
                    } = await Promise.resolve().then(a.bind(a, 79442)), {
                        filterDesignData: g
                    } = await Promise.all([a.e(52075), a.e(50361), a.e(77343), a.e(81877), a.e(49393)]).then(a.bind(a, 75090)), m = o().getters[n.ak(n.x3)], p = g(e);
                    window.dataLayer.push({
                        event: "product_pushed",
                        source: t,
                        item_name: null === (r = e.product.dataLayerData) || void 0 === r ? void 0 : r.itemName,
                        item_id: e.productId,
                        item_brand: e.product.brand,
                        item_category: null === (l = e.product.dataLayerData) || void 0 === l ? void 0 : l.item_category,
                        item_category2: null === (d = e.product.dataLayerData) || void 0 === d ? void 0 : d.item_category2,
                        item_category3: null === (c = e.product.dataLayerData) || void 0 === c ? void 0 : c.item_category3,
                        item_category4: null === (u = e.product.dataLayerData) || void 0 === u ? void 0 : u.item_category4,
                        print_tech: m.techniqueData.techniques,
                        print_tech_qty: m.techniqueData.techniquesCount,
                        print_file_quantity: Object.keys(e.templates).length,
                        design_type: null == p ? void 0 : p.designTypes,
                        design_type_quantity: null == p || null === (s = p.designTypes) || void 0 === s ? void 0 : s.length,
                        design_components: null == p ? void 0 : p.designComponents,
                        design_components_quantity: null == p || null === (_ = p.designComponents) || void 0 === _ ? void 0 : _.length,
                        push_3d_model: e.is3dModelGenerationRequired,
                        generator_design_id: i
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }
            async function ae(e, t, n) {
                var o, i, r, l, d, c, u, s, _, g, m, p, y;
                let v = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!e) return;
                const {
                    filterDesignData: w
                } = await Promise.all([a.e(52075), a.e(50361), a.e(77343), a.e(81877), a.e(49393)]).then(a.bind(a, 75090)), h = w(t);
                window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                    event: v ? "template_edited" : "template_created",
                    source: n,
                    item_name: null === (o = e.productData) || void 0 === o ? void 0 : o.dataLayerData.itemName,
                    item_id: null === (i = e.productData) || void 0 === i ? void 0 : i.productId,
                    item_brand: null === (r = e.productData) || void 0 === r ? void 0 : r.brand,
                    item_category: null === (l = e.productData) || void 0 === l || null === (d = l.dataLayerData) || void 0 === d ? void 0 : d.item_category,
                    item_category2: null === (c = e.productData) || void 0 === c || null === (u = c.dataLayerData) || void 0 === u ? void 0 : u.item_category2,
                    item_category3: null === (s = e.productData) || void 0 === s || null === (_ = s.dataLayerData) || void 0 === _ ? void 0 : _.item_category3,
                    item_category4: null === (g = e.productData) || void 0 === g || null === (m = g.dataLayerData) || void 0 === m ? void 0 : m.item_category4,
                    print_tech: null == e ? void 0 : e.dataLayerData.printTechniques,
                    print_tech_qty: null == e ? void 0 : e.dataLayerData.printTechniqueCount,
                    design_type: null == h ? void 0 : h.designTypes,
                    design_type_quantity: null == h || null === (p = h.designTypes) || void 0 === p ? void 0 : p.length,
                    design_components: null == h ? void 0 : h.designComponents,
                    design_components_quantity: null == h || null === (y = h.designComponents) || void 0 === y ? void 0 : y.length
                })
            }

            function ne() {
                try {
                    const e = ce(V);
                    if (!e) return;
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: e
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function oe() {
                try {
                    const e = ce(Y);
                    if (!e) return;
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: e
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function ie() {
                var e, t;
                if (!PF.Customer.isB2c()) return;
                if (null !== (e = PF) && void 0 !== e && null !== (t = e.RawGlobals) && void 0 !== t && t.isLandingPage) return;
                let a = null;
                try {
                    a = sessionStorage.getItem(H)
                } catch (e) {
                    return void(0, o.logError)(e)
                }
                q.includes(a) && (sessionStorage.removeItem(H), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                    event: "customerPageLeave"
                }))
            }

            function re(e) {
                try {
                    sessionStorage.setItem(H, e)
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function le(e) {
                try {
                    const t = 25;
                    let a = !1,
                        n = !1;
                    e.forEach((e => {
                        var o, i, r, l;
                        const d = null !== (o = null === (i = e.priceData) || void 0 === i || null === (r = i.bulkDiscountTiers) || void 0 === r ? void 0 : r.tierLevels[0].itemQuantity) && void 0 !== o ? o : 0,
                            c = 0 === (null === (l = e.priceData) || void 0 === l ? void 0 : l.discountType);
                        c && d && !n && (n = e.quantity >= d), c || a || (a = e.quantity >= t)
                    }));
                    let o = null;
                    return n ? (o = "bulk_order_with_bulk_discount", localStorage.setItem(V, o)) : a && (o = "bulk_order_without_bulk_discount", localStorage.setItem(V, o)), o
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function de(e) {
                if (e.dataLayerData.isB2CFirstPaidOrder) try {
                    const e = "first_paid_order";
                    return localStorage.setItem(Y, e), e
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function ce(e) {
                try {
                    const t = localStorage.getItem(e);
                    return localStorage.removeItem(e), t
                } catch (e) {
                    (0, o.logError)(e)
                }
            }
            async function ue(e, t, n, i) {
                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                    u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
                try {
                    var s;
                    window.dataLayer = window.dataLayer || [];
                    const {
                        getEnvironmentSyncProductCount: o
                    } = await Promise.all([a.e(350), a.e(75662)]).then(a.bind(a, 350)), _ = [];
                    e.forEach(((e, t) => {
                        var a, n, o, l, d, u, s;
                        _.push({
                            index: c + t,
                            item_name: null === (a = e.dataLayerData) || void 0 === a ? void 0 : a.itemName,
                            item_id: String(e.productId),
                            price: i ? null === (n = e.priceRange) || void 0 === n ? void 0 : n.minPrice : null,
                            currency: i ? null === (o = e.priceRange) || void 0 === o ? void 0 : o.currency : null,
                            price_usd: i ? null === (l = e.dataLayerData) || void 0 === l ? void 0 : l.priceUsd : null,
                            item_brand: e.brand,
                            item_category: (null === (d = e.dataLayerData) || void 0 === d ? void 0 : d.item_category) || null,
                            item_category2: (null === (u = e.dataLayerData) || void 0 === u ? void 0 : u.item_category2) || null,
                            item_category3: (null === (s = e.dataLayerData) || void 0 === s ? void 0 : s.item_category3) || null,
                            badge: r && ge(e) || null
                        })
                    })), window.dataLayer.push({
                        event: "view_item_list",
                        item_list_id: t,
                        item_list_name: n,
                        title: null,
                        catalog_level: null,
                        flow: u,
                        block_index: l,
                        customer_segment_id: d,
                        items: _
                    });
                    const g = await o(5);
                    g && g < 5 && null !== (s = window.abTesting) && void 0 !== s && s.isTestAssigned(j) && window.abTesting.trackAbTest(j)
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function se(e, t, a, n, i) {
                let r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                    c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
                try {
                    var u, s, _, g, m, p, y;
                    window.dataLayer = window.dataLayer || [];
                    const o = {
                        index: t,
                        item_name: null === (u = e.dataLayerData) || void 0 === u ? void 0 : u.itemName,
                        item_id: String(e.productId),
                        price: i ? null === (s = e.priceRange) || void 0 === s ? void 0 : s.minPrice : null,
                        currency: i ? null === (_ = e.priceRange) || void 0 === _ ? void 0 : _.currency : null,
                        price_usd: i ? null === (g = e.dataLayerData) || void 0 === g ? void 0 : g.priceUsd : null,
                        item_brand: e.brand,
                        item_category: (null === (m = e.dataLayerData) || void 0 === m ? void 0 : m.item_category) || null,
                        item_category2: (null === (p = e.dataLayerData) || void 0 === p ? void 0 : p.item_category2) || null,
                        item_category3: (null === (y = e.dataLayerData) || void 0 === y ? void 0 : y.item_category3) || null,
                        badge: r && ge(e) || null
                    };
                    window.dataLayer.push({
                        event: "select_item",
                        item_list_id: a,
                        item_list_name: n,
                        title: null,
                        catalog_level: null,
                        flow: c,
                        block_index: l,
                        customer_segment_id: d,
                        item: o
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function _e(e, t, a, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                try {
                    var l, d, c, u, s, _, g, m, p;
                    return {
                        index: a,
                        item_name: null === (l = e.dataLayerData) || void 0 === l ? void 0 : l.itemName,
                        item_id: e.productId,
                        price: t ? null !== (d = e.price) && void 0 !== d ? d : null === (c = e.dataLayerData) || void 0 === c ? void 0 : c.price : null,
                        currency: t ? null === (u = e.priceRange) || void 0 === u ? void 0 : u.currency : null,
                        price_usd: t ? null === (s = e.dataLayerData) || void 0 === s ? void 0 : s.priceUsd : null,
                        item_brand: null !== (_ = e.brand) && void 0 !== _ ? _ : null == e ? void 0 : e.productBrand,
                        item_category: null === (g = e.dataLayerData) || void 0 === g ? void 0 : g.item_category,
                        item_category2: null === (m = e.dataLayerData) || void 0 === m ? void 0 : m.item_category2,
                        item_category3: null === (p = e.dataLayerData) || void 0 === p ? void 0 : p.item_category3,
                        product_template_id: i,
                        product_template_shared_key: r,
                        badge: n ? ge(e) : ""
                    }
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function ge(e) {
                return e.hasClearance ? "Clearance" : e.isPopular ? "Bestseller" : e.hasBetaAccess ? "Beta" : e.isNew ? "New" : e.isSuggested ? "Printful suggests" : ""
            }
            async function me(e, t, n, r) {
                try {
                    var l, d, c, u, s, _, g, m, p, y, v;
                    const {
                        PFItemsCurrencyItem: o
                    } = await a.e(80464).then(a.bind(a, 80464)), w = await pe(), {
                        PFProductsCatalogUtilsStore: h
                    } = await Promise.all([a.e(12954), a.e(52075), a.e(50361), a.e(77343), a.e(81877), a.e(97452), a.e(67190), a.e(44529), a.e(87457), a.e(70450)]).then(a.bind(a, 84294)), E = (new h).categories.getActiveCategory();
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: t,
                        flow: n,
                        checkout_step: r,
                        integration: (null == w || null === (l = w.store) || void 0 === l ? void 0 : l.integrationName) || null,
                        ecommerce: {
                            items: {
                                item_name: null !== (d = null === (c = e.dataLayerData) || void 0 === c ? void 0 : c.itemName) && void 0 !== d ? d : e.displayName,
                                item_id: String(e.productId),
                                price: (0, i.round)(e.price, 2),
                                rate_usd: null === (u = e.dataLayerData) || void 0 === u || null === (s = u.rate) || void 0 === s ? void 0 : s[null === (_ = e.priceRange) || void 0 === _ ? void 0 : _.currency][o.CURRENCY_USD],
                                currency: null === (g = e.priceRange) || void 0 === g ? void 0 : g.currency,
                                item_brand: e.brand,
                                item_category: (null === (m = e.dataLayerData) || void 0 === m ? void 0 : m.item_category) || null,
                                item_category2: (null === (p = e.dataLayerData) || void 0 === p ? void 0 : p.item_category2) || null,
                                item_category3: (null === (y = e.dataLayerData) || void 0 === y ? void 0 : y.item_category3) || null,
                                badge: ge(e) || null,
                                referrer_category_name: (null == E || null === (v = E.dataLayer) || void 0 === v ? void 0 : v.sidebarTitle) || (null == E ? void 0 : E.title) || null,
                                referrer_category_id: (null == E ? void 0 : E.id) || null
                            }
                        }
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }
            async function pe() {
                var e, t;
                const {
                    getVuex: n
                } = await Promise.resolve().then(a.bind(a, 79442)), {
                    getNamespacedCall: o,
                    productConfigState: i
                } = await a.e(53640).then(a.bind(a, 53640));
                return null !== (e = null === (t = n().getters) || void 0 === t ? void 0 : t[o(i)]) && void 0 !== e ? e : null
            }

            function ye(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "pf_challenge_click",
                        click_location: e,
                        click_element: t,
                        click_url_path: a,
                        pf_challenge_title: n,
                        status: i
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function ve(e, t, a) {
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "pf_challenge_sync",
                        last_activity_name: e,
                        last_activity_days: t,
                        points: a
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function we(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                try {
                    const a = {
                        event: t ? "modal_click" : "modal_impression",
                        modal_name: "BFCM spin-the-wheel",
                        location: null,
                        category: "gamified popup",
                        name: e
                    };
                    t && (a.click_name = t), window.dataLayer = window.dataLayer || [], window.dataLayer.push(a)
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function he(e) {
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "pf_challenge_perk",
                        perk_name: e
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }
            async function Ee(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    if (!PF.Customer.isB2cStarter || !PF.Customer.isB2cPlayingAround) return;
                    const {
                        PFItemsOrderLineItem: o
                    } = await a.e(57177).then(a.bind(a, 57177));
                    window.dataLayer = window.dataLayer || [];
                    const l = e.map((e => (e instanceof o || (e = o.fromArray(e)), e.getDataLayerItemData())));
                    if (!l.length) return;
                    let d = 0;
                    l.forEach((e => {
                        var t;
                        return d += (null !== (t = e.price_usd) && void 0 !== t ? t : e.priceUsd) * e.quantity
                    }));
                    let c = {
                        event: "b2c_checkout",
                        checkout_step: n,
                        cart_quantity: null != t ? t : 0,
                        value_usd: (0, i.round)(d, 2)
                    };
                    const u = !Object.hasOwnProperty.call(r, "with_items") || r.with_items;
                    delete r.with_items, u && (c.ecommerce = {
                        items: l
                    }), c = {
                        ...c,
                        ...r
                    }, window.dataLayer.push(c)
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function Le(e, t, a, n) {
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "button_click",
                        button_category: e,
                        button_location: t,
                        button_name: a,
                        click_url_path: n
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function fe(e, t, a, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                try {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "form_interaction",
                        category: e,
                        location: t,
                        name: a,
                        click_element: n,
                        title: i
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function Pe(e) {
                try {
                    var t, a, n, i, r;
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "block_impression",
                        category: e.category,
                        location: e.location,
                        name: null !== (t = e.name) && void 0 !== t ? t : null,
                        index: null !== (a = e.index) && void 0 !== a ? a : null,
                        block_index: null !== (n = e.blockIndex) && void 0 !== n ? n : null,
                        customer_segment_id: null !== (i = e.customerSegmentId) && void 0 !== i ? i : null,
                        flow: null !== (r = e.flow) && void 0 !== r ? r : null
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function be(e) {
                try {
                    var t, a, n, i, r, l, d;
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "block_click",
                        category: e.category,
                        location: e.location,
                        name: null !== (t = e.name) && void 0 !== t ? t : null,
                        button_name: e.buttonName,
                        click_element: null !== (a = e.clickElement) && void 0 !== a ? a : null,
                        click_url_path: null !== (n = e.clickUrlPath) && void 0 !== n ? n : null,
                        block_index: null !== (i = e.blockIndex) && void 0 !== i ? i : null,
                        index: null !== (r = e.index) && void 0 !== r ? r : null,
                        customer_segment_id: null !== (l = e.customerSegmentId) && void 0 !== l ? l : null,
                        flow: null !== (d = e.flow) && void 0 !== d ? d : null
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function Te(e) {
                var t;
                window.dataLayer = null !== (t = window.dataLayer) && void 0 !== t ? t : [], window.dataLayer.push(e)
            }
            async function Ce(e, t) {
                try {
                    const {
                        addCustomerEvent: n
                    } = await a.e(56106).then(a.bind(a, 56106)), {
                        CUSTOMER_EVENT_TRIGGER_CLICK: o,
                        CUSTOMER_EVENT_TTL_30MIN: i
                    } = await a.e(12930).then(a.bind(a, 12930)), {
                        getCustomerEventProductIdContext: r
                    } = await a.e(9300).then(a.bind(a, 9300));
                    n({
                        trigger: o,
                        source: e,
                        context: r(t),
                        ttl: i,
                        maxUnloadsCount: 5
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function Se(e, t, a) {
                try {
                    var n;
                    window.dataLayer = null !== (n = window.dataLayer) && void 0 !== n ? n : [], window.dataLayer.push({
                        event: "button_click",
                        button_category: e,
                        button_location: t,
                        button_name: a,
                        click_element: null,
                        customer_segment_id: null,
                        flow: null,
                        click_count: null
                    })
                } catch (e) {
                    (0, o.logError)(e)
                }
            }

            function ke() {
                De.push({
                    event: F,
                    category: r.dB.isProductsPricing() ? G : "design maker",
                    location: "size selector",
                    name: "file size guide",
                    flow: r.dB.getCatalogTypeName()
                })
            }
            let De = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, a, n;
                return t = e, n = [{
                    key: "getInstance",
                    value: function() {
                        return window.dataLayer = window.dataLayer || [], window.dataLayer
                    }
                }, {
                    key: "push",
                    value: function(t) {
                        e.getInstance().push(t)
                    }
                }], (a = null) && l(t.prototype, a), n && l(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        }
    }
]);