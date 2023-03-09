/*! License information is available at https://static.cdn.printful.com/dist-pf/premium-vuex.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [86184], {
        22398: (e, r, t) => {
            t.d(r, {
                e_: () => b,
                ZU: () => y,
                wW: () => l,
                U: () => m,
                m4: () => d,
                sN: () => u,
                Vj: () => p,
                ro: () => c,
                W5: () => g,
                ld: () => f,
                _3: () => h
            });
            var n = t(58617);
            var i = t(83803);

            function a(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, a = void 0, "symbol" == typeof(a = function(e, r) {
                        if ("object" != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, r || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === r ? String : Number)(e)
                    }(i, "string")) ? a : String(a)), n)
                }
                var i, a
            }
            let s = function() {
                function e() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    a(this, e), this.canUse = r.canUse || !1, this.cantUseReason = r.cantUseReason || null, this.usages = r.usages || null, this.maxQuota = r.maxQuota || null
                }
                var r, t, n;
                return r = e, (t = [{
                    key: "getUsagesLeft",
                    value: function() {
                        return this.hasUnlimitedUsages() ? i.Iw : Math.max(0, this.maxQuota - this.usages)
                    }
                }, {
                    key: "hasUnlimitedUsages",
                    value: function() {
                        return this.canUse && this.maxQuota === i.Iw
                    }
                }]) && o(r.prototype, t), n && o(r, n), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), e
            }();
            const l = () => (0, n.r)("/rpc/pro-subscription-rpc/get-active-subscription"),
                c = () => (0, n.r)("/rpc/pro-subscription-rpc/get-previous-subscription"),
                u = () => (0, n.r)("/rpc/pro-subscription-rpc/get-next-subscription");
            async function d(e) {
                const {
                    featureAccess: r
                } = await (0, n.r)("/rpc/pro-subscription-rpc/get-feature-access-data", {
                    featureKey: e
                });
                return new s(r)
            }
            const p = e => (0, n.r)("/rpc/pro-subscription-rpc/check-pending-tier-change-exists", {
                    subscriptionId: e
                }),
                h = (e, r, t) => (0, n.r)("/rpc/subscription-rpc/send-cancelation-survey", {
                    option: e,
                    reason: r,
                    subscriptionId: t
                }),
                f = e => (0, n.r)("/rpc/pro-subscription-rpc/send-anonymous-cancellation-request", e),
                m = () => (0, n.r)("/rpc/pro-subscription-rpc/get-available-tiers"),
                y = e => (0, n.r)("/rpc/pro-subscription-rpc/check-customer-email", {
                    email: e
                }),
                g = () => (0, n.r)("/rpc/pro-subscription-rpc/initialize-vuex-store"),
                b = e => (0, n.r)("/rpc/subscription-rpc/calculate-price", e)
        },
        72216: (e, r, t) => {
            t.d(r, {
                Jt: () => i,
                W6: () => o,
                gb: () => n,
                hA: () => a,
                tn: () => s
            });
            const n = "a_initStore",
                i = "a_getPendingTierChange",
                a = "a_getCurrentSubscription",
                o = "a_getPreviousSubscription",
                s = "a_getNextSubscription"
        },
        37495: (e, r, t) => {
            t.d(r, {
                NE: () => n,
                Of: () => a,
                zO: () => i
            });
            const n = "g_canEnjoyFreeTrial",
                i = "g_hasSubscription",
                a = "g_hasAccessToFeature"
        },
        91574: (e, r, t) => {
            t.r(r), t.d(r, {
                actions: () => x,
                default: () => I,
                getters: () => _,
                mutations: () => U,
                state: () => T
            });
            const n = "m_setStoreInitialized",
                i = "m_setFeaturesAvailable",
                a = "m_setCurrentSubscription",
                o = "m_setNextSubscription",
                s = "m_setPendingTierChange",
                l = "m_setPreviousSubscription",
                c = "m_setInitializing";
            var u = t(9495),
                d = t(37495);
            const p = {
                    [u.uD]: !1,
                    [u.W]: []
                },
                h = {
                    [d.Of]: e => r => !!e[u.W].find((e => {
                        let {
                            key: t
                        } = e;
                        return t === r
                    }))
                },
                f = {
                    [n]: (e, r) => e[u.uD] = r,
                    [i]: (e, r) => e[u.W] = r
                };
            var m = {
                    namespaced: !0,
                    state: p,
                    getters: h,
                    mutations: f,
                    actions: {}
                },
                y = t(72216),
                g = t(22398),
                b = t(74931),
                v = t(6078);
            const w = {
                    [u.uD]: !1,
                    [u.rk]: new b.H,
                    [u.lK]: new b.H,
                    [u.WT]: new b.H,
                    pendingTierChange: null
                },
                k = {
                    [d.zO]: e => !!e[u.rk].id && !e[u.rk].isInTier(v.vF)
                },
                P = {
                    [n]: (e, r) => e[u.uD] = r,
                    [a]: (e, r) => e[u.rk] = new b.H(r || {}),
                    [o]: (e, r) => e[u.lK] = new b.H(r || {}),
                    [s]: (e, r) => e.pendingTierChange = r,
                    [l]: (e, r) => e[u.WT] = new b.H(r || {})
                };
            var S = {
                    namespaced: !0,
                    state: w,
                    getters: k,
                    mutations: P,
                    actions: {
                        [y.Jt](e, r) {
                            let {
                                commit: t
                            } = e;
                            (0, g.Vj)(r).then((e => t(s, e.saasPromoPlan || null))).catch((e => console.error(e)))
                        },
                        async [y.hA](e) {
                            let {
                                commit: r,
                                dispatch: t
                            } = e;
                            const n = await (0, g.wW)();
                            r(a, n), n && await t(y.Jt, n.id)
                        },
                        async [y.W6](e) {
                            let {
                                commit: r
                            } = e;
                            const t = await (0, g.ro)();
                            r(l, t)
                        },
                        async [y.tn](e) {
                            let {
                                commit: r
                            } = e;
                            const t = await (0, g.sN)();
                            r(o, t)
                        }
                    }
                },
                C = t(90709);
            const T = {
                    [u.uD]: !1,
                    [u.v4]: !1
                },
                _ = {
                    [d.NE]: e => !e[C.l9][u.rk].isOnTrial && !e[C.l9][u.WT].id
                },
                U = {
                    [n]: (e, r) => e[u.uD] = r,
                    [c]: (e, r) => e[u.v4] = r
                },
                x = {
                    async [y.gb](e) {
                        let {
                            dispatch: r,
                            state: t,
                            commit: i
                        } = e;
                        if (t[u.uD] || t[u.v4]) return;
                        i(c, !0);
                        const {
                            features: a,
                            subscriptions: o
                        } = await (0, g.W5)();
                        i(`${C.$P}/m_setFeaturesAvailable`, a), i(`${C.l9}/m_setCurrentSubscription`, o.currentSubscription), i(`${C.l9}/m_setNextSubscription`, o.nextSubscription), i(`${C.l9}/m_setPreviousSubscription`, o.previousSubscription), i(`${C.l9}/m_setPendingTierChange`, o.pendingTierChangesCheck.saasPromoPlan || null), i(n, !0), i(`${C.$P}/m_setStoreInitialized`, !0), i(`${C.l9}/m_setStoreInitialized`, !0), i(c, !1)
                    }
                };
            var I = {
                namespaced: !0,
                modules: {
                    [C.$P]: m,
                    [C.l9]: S
                },
                state: T,
                getters: _,
                mutations: U,
                actions: x
            }
        },
        90709: (e, r, t) => {
            t.d(r, {
                $P: () => i,
                eX: () => s,
                gK: () => o,
                kK: () => n,
                l9: () => a
            });
            const n = "premium",
                i = "features",
                a = "subscriptions",
                o = `${n}/${a}`,
                s = e => `${o}/${e}`
        },
        9495: (e, r, t) => {
            t.d(r, {
                W: () => s,
                WT: () => o,
                lK: () => a,
                rk: () => i,
                uD: () => n,
                v4: () => l
            });
            const n = "s_storeInitialized",
                i = "s_currentSubscription",
                a = "s_nextSubscription",
                o = "s_previousSubscription",
                s = "s_featuresAvailable",
                l = "s_initializing"
        },
        83803: (e, r, t) => {
            t.d(r, {
                AC: () => d,
                EM: () => v,
                Iw: () => P,
                Ll: () => p,
                Mh: () => T,
                Nv: () => g,
                P0: () => h,
                ad: () => y,
                b$: () => c,
                fA: () => _,
                fT: () => u,
                h6: () => k,
                lW: () => f,
                l_: () => S,
                ms: () => l,
                py: () => w,
                q8: () => m,
                w2: () => C
            });
            var n = t(96486),
                i = t.n(n),
                a = t(70822),
                o = t(76229),
                s = t(23343);
            const l = "background-removal-tool",
                c = "additional-clipart-content",
                u = "marketing-material-generator",
                d = "keyword-scout-for-etsy",
                p = "mockup-generator",
                h = "getty-images",
                f = "free-digitization",
                m = "carrier-based-shipping",
                y = "custom-mockup-maker",
                g = "marketing-material-animations",
                b = "premium-order-fulfillment",
                v = [h, f, b, m],
                w = "keyword-scout-etsy-listing",
                k = {
                    "customize-x-products": {
                        URL: "",
                        name: dlang("dashboard", "Customize {count}+ products"),
                        description: ""
                    },
                    "integrate-x-ecommerce": {
                        URL: langUrl("/dashboard/store"),
                        name: dlang("dashboard", "Integrate with {hl}{count}+ ecommerce platforms{/hl}"),
                        description: ""
                    },
                    "product-templates": {
                        URL: langUrl("/dashboard/product-templates"),
                        name: dlang("dashboard", "Create {hl}product templates{/hl}")
                    },
                    "mockup-generator-designs": {
                        URL: langUrl("/design-maker"),
                        name: dlang("dashboard", "Create designs in the {hl}Design Maker{/hl}"),
                        description: ""
                    },
                    "download-mockups": {
                        URL: "",
                        name: dlang("dashboard", "Download mockups and print files"),
                        description: ""
                    },
                    "x-clipart": {
                        URL: "",
                        name: dlang("dashboard", "Use {count}+ clipart images"),
                        description: ""
                    },
                    [l]: {
                        URL: langUrl("/background-removal-tool"),
                        name: dlang("dashboard", "{hl}Background Removal Tool{/hl}"),
                        description: function(e) {
                            return e === P ? dlang("dashboard", "Unlimited removals") : dnlang("dashboard", "{n} removal", "{n} removals", e).replace("{n}", e)
                        },
                        toolTip: dlang("dashboard", "No more pixel-picking and buying expensive professional softwareâ€”{hl}remove backgrounds{/hl} from your images with 1 click")
                    },
                    [c]: {
                        URL: "",
                        name: dlang("dashboard", "{count}+ exclusive clipart images"),
                        description: ""
                    },
                    [b]: {
                        URL: "",
                        name: dlang("dashboard", "Product fulfillment with Premium features"),
                        description: function() {
                            return '<i class="pf-i pf-i-20 pf-i-check pf-text-yellow-pro" aria-hidden="true"></i>'
                        },
                        toolTip: dlang("dashboard", "Fulfillment of products that use the Background Removal Tool and Custom Mockup Maker is only available to paid plan users. See our FAQ for more info.")
                    },
                    [g]: {
                        URL: langUrl("/dashboard/premium/promo-maker"),
                        name: dlang("dashboard", "{hl}Promo Maker with animations{/hl}"),
                        description: function(e) {
                            return e === P ? dlang("dashboard", "Unlimited animated promos") : dnlang("dashboard", "{n} animated promo", "{n} animated promos", e).replace("{n}", e)
                        },
                        toolTip: dlang("dashboard", "Letâ€™s see those promos move! Add eye-catching animations to your {hl}Promo Maker{/hl} visuals"),
                        upsellingContent: dlang("dashboard", "Market your products on social media with {hl}Promo Maker{/hl}")
                    },
                    [u]: {
                        URL: langUrl("/dashboard/premium/promo-maker"),
                        name: dlang("dashboard", "{hl}Promo Maker{/hl}"),
                        description: function(e) {
                            return e === P ? dlang("dashboard", "Unlimited promos") : dnlang("dashboard", "{n} promo", "{n} promos", e).replace("{n}", e)
                        },
                        toolTip: dlang("dashboard", "{hl}Make your online presence pop{/hl} - use customizable templates to create high-quality ad visuals, video thumbnails, social media posts, and more"),
                        upsellingContent: dlang("dashboard", "Market your products on social media with {hl}Promo Maker{/hl}")
                    },
                    [d]: {
                        URL: langUrl("/dashboard/premium/keyword-scout"),
                        name: dlang("dashboard", "{hl}Keyword Scout for Etsy{/hl}"),
                        description: function(e) {
                            return e === P ? dlang("dashboard", "Unlimited searches") : dnlang("dashboard", "{n} search", "{n} searches", e).replace("{n}", e)
                        },
                        toolTip: dlang("dashboard", "Ensure that your listings on Etsy perform their best - {hl}Keyword Scout{/hl} compares tags and checks for SEO mistakes like spelling, missing descriptions and images")
                    },
                    [p]: {
                        URL: "",
                        name: dlang("dashboard", "Mockup generator"),
                        description: ""
                    },
                    [h]: {
                        URL: "",
                        name: dlang("dashboard", "Use Premium Images at no extra cost"),
                        description: function() {
                            return '<i class="pf-i pf-i-20 pf-i-check pf-text-yellow-pro" aria-hidden="true"></i>'
                        },
                        toolTip: dlang("dashboard", "Use as many high-quality images and vectors in your designs as you want without paying $1 for each placement"),
                        upsellingContent: dlang("dashboard", "Use Premium Images at no extra cost. Without Pro, it's $1 per image.")
                    },
                    [f]: {
                        URL: "",
                        name: dlang("dashboard", "Free digitization"),
                        description: function() {
                            return '<i class="pf-i pf-i-20 pf-i-check pf-text-yellow-pro" aria-hidden="true"></i>'
                        },
                        toolTip: dlang("dashboard", "Get embroidery files digitized for free. Save up to {largest_amount} per file."),
                        upsellingContent: dlang("dashboard", "Get embroidery files digitized for free. Save up to {largest_amount} per file.")
                    },
                    [m]: {
                        URL: langUrl("/dashboard/settings/store-shipping"),
                        name: dlang("dashboard", "Access {hl}Carrier-Based Shipping{/hl}"),
                        description: function() {
                            return '<i class="pf-i pf-i-20 pf-i-check pf-text-yellow-pro" aria-hidden="true"></i>'
                        },
                        toolTip: dlang("dashboard", "Pick your preferred shipping carrier from our list of partners for orders within the US, Europe, and Canada")
                    },
                    [y]: {
                        URL: langUrl("/custom-mockup-maker"),
                        name: dlang("dashboard", "{hl}Custom Mockup Maker{/hl}"),
                        description: function(e) {
                            return e === P ? dlang("dashboard", "Unlimited mockups") : dnlang("dashboard", "{n} mockup", "{n} mockups", e).replace("{n}", e)
                        },
                        toolTip: dlang("dashboard", "{hl}Create standout product images{/hl} from a wide selection of  pre-made design elements like props, backgrounds, and models")
                    }
                },
                P = null;

            function S(e) {
                return i().has(k, e.key) ? k[e.key].name.replace("{hl}", `<a href='${k[e.key].URL}' target='_blank'>`).replace("{/hl}", "</a>").replace("{count}", e.count) : e.name
            }

            function C(e) {
                return i().has(k, e.key) ? i().has(k[e.key], "upsellingContent") ? k[e.key].upsellingContent.replace("{hl}", `<a href='${k[e.key].URL}' target='_blank'>`).replace("{/hl}", "</a>").replace("{count}", e.count).replace("{largest_amount}", T()) : S(e) : e.name
            }

            function T() {
                return s.O.prettyMoney(a.PFRepositoriesOrderRepository.PRICE_DIGITIZATION[PF.DisplayCurrency.currency], o.N.getCurrencySymbol(PF.DisplayCurrency.currency))
            }

            function _(e, r) {
                var t;
                const n = null === (t = k[e.key]) || void 0 === t ? void 0 : t.description;
                return n ? "function" != typeof n ? n : n(r) : ""
            }
        },
        16123: (e, r, t) => {
            t.d(r, {
                Dn: () => s,
                I8: () => l,
                T4: () => u,
                Vv: () => c
            });
            var n = t(76229),
                i = t(23343);
            const a = ["promo_pro_bfcm_2022", "promo_plus_bfcm_2022"],
                o = ["shopify_bfcm_promo_pro_2022", "shopify_bfcm_promo_plus_2022"],
                s = e => {
                    let {
                        key: r
                    } = e;
                    return a.includes(r)
                },
                l = e => {
                    let {
                        key: r
                    } = e;
                    return o.includes(r)
                },
                c = e => {
                    let {
                        key: r
                    } = e;
                    return s({
                        key: r
                    }) || l({
                        key: r
                    })
                };

            function u(e, r) {
                let t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                const o = n.N.getCurrency(r);
                let s = t ? i.O.prettyMoney(e, o) : i.O.getDisplayValue(e, o);
                return a || (s = s.replace(".00", "")), s
            }
        },
        6078: (e, r, t) => {
            t.d(r, {
                Ad: () => g,
                Be: () => o,
                Hj: () => l,
                Io: () => i,
                Qp: () => s,
                SF: () => w,
                U5: () => d,
                Ux: () => S,
                aH: () => a,
                bw: () => m,
                c1: () => y,
                iX: () => p,
                iq: () => P,
                pS: () => h,
                q9: () => f,
                q_: () => k,
                sH: () => b,
                vF: () => u,
                wT: () => c
            });
            var n = t(83803);
            const i = "pro",
                a = "plus",
                o = "plus_s_tier",
                s = "plus_m_tier",
                l = "plus_l_tier",
                c = "basic",
                u = "free_tier",
                d = "unlimited_tier",
                p = "Pro",
                h = "Plus",
                f = "Unlimited",
                m = "ubp",
                y = [n.ad, n.ms, n.fT, n.Nv],
                g = [n.b$, n.AC, n.Ll, n.P0, n.lW, n.q8, n.ad, n.ms, n.fT, n.Nv],
                b = y.length,
                v = [i, a, c],
                w = "month",
                k = {
                    [i]: {
                        key: i,
                        crownColor: "pf-text-yellow-pro",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-yellow-pro pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-yellow-pro",
                        name: p,
                        firstFeature: n.AC,
                        landingPageUrl: langUrl("/printful-pro")
                    },
                    [a]: {
                        key: a,
                        crownColor: "pf-text-cyan-800",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-cyan-800 pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-cyan-800",
                        name: h,
                        firstFeature: n.ad,
                        landingPageUrl: langUrl("/printful-plus")
                    },
                    [u]: {
                        crownColor: "pf-text-cyan-800",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-cyan-800 pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-cyan-800",
                        name: "Free"
                    },
                    [o]: {
                        crownColor: "pf-text-cyan-800",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-cyan-800 pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-cyan-800",
                        name: "Plus S",
                        firstFeature: n.ad
                    },
                    [s]: {
                        crownColor: "pf-text-cyan-800",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-cyan-800 pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-cyan-800",
                        name: "Plus M",
                        firstFeature: n.ad
                    },
                    [l]: {
                        crownColor: "pf-text-cyan-800",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-cyan-800 pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-cyan-800",
                        name: "Plus L",
                        firstFeature: n.ad
                    },
                    [d]: {
                        crownColor: "pf-text-yellow-pro",
                        crownIconStyle: "pf-i-crown pf-badge--white pf-text-yellow-pro pf-p-1 pf-rounded-circle",
                        borderColor: "pf-border-left pf-border-yellow-pro",
                        name: f,
                        firstFeature: n.AC
                    }
                };

            function P(e) {
                return v.includes(e) ? langUrl(`/printful-${e}`) : "#"
            }

            function S(e, r) {
                return e.replace("{hl}", `<a href="${P(r)}" target="_blank">`).replace("{/hl}", "</a>")
            }
        },
        74931: (e, r, t) => {
            t.d(r, {
                H: () => d
            });
            var n = t(11072);

            function i(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, a = void 0, "symbol" == typeof(a = function(e, r) {
                        if ("object" != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, r || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === r ? String : Number)(e)
                    }(i, "string")) ? a : String(a)), n)
                }
                var i, a
            }
            let o = function() {
                function e() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e), this.startDate = r.startDate || null, this.endDate = r.endDate || null
                }
                var r, t, o;
                return r = e, (t = [{
                    key: "endCycleDate",
                    get: function() {
                        return this.endDate ? new Date(this.endDate) : null
                    }
                }, {
                    key: "formattedEndCycleDate",
                    get: function() {
                        return (e => {
                            if (!e) return "";
                            const r = [n.A.locale, n.A.defaultLocale].map((e => e.replace("_", "-")));
                            return e.toLocaleDateString(r, {
                                dateStyle: "medium"
                            })
                        })(this.endCycleDate)
                    }
                }, {
                    key: "formattedDefaultLocaleEndCycleDate",
                    get: function() {
                        return (e => {
                            if (!e) return "";
                            const r = n.A.defaultLocale.replace("_", "-");
                            return e.toLocaleDateString(r, {
                                dateStyle: "medium"
                            })
                        })(this.endCycleDate)
                    }
                }]) && a(r.prototype, t), o && a(r, o), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), e
            }();
            var s = t(16123),
                l = t(28274);

            function c(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, a = void 0, "symbol" == typeof(a = function(e, r) {
                        if ("object" != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, r || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === r ? String : Number)(e)
                    }(i, "string")) ? a : String(a)), n)
                }
                var i, a
            }
            let d = function() {
                function e() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    c(this, e), this.renewEvery = r.renewEvery || "", this.name = r.name || "", this.id = r.id || null, this.activatedAt = r.activatedAt || null, this.trialEndsAt = r.trialEndsAt || null, this.expiresAt = r.expiresAt || null, this.nextPaymentAt = r.nextPaymentAt || "", this.lastPaymentAt = r.lastPaymentAt || "", this.lastPaymentId = r.lastPaymentId || "", this.tierPlan = r.tierPlan || {}, this.paymentMethod = r.paymentMethod || {}, this.hasRetries = r.hasRetries, this.isOnTrial = r.isOnTrial || !1, this.shopifyMainStoreName = r.shopifyMainStoreName || null, this.shopifyAdminWebsite = r.shopifyAdminWebsite || null, this.isShopify = r.isShopify || !1, this.shopifyMainStoreId = r.shopifyMainStoreId || null, this.isStoreRemovedFromShopify = r.isStoreRemovedFromShopify || null, this.currentCycle = Object.freeze(new o(r.currentCycle || {}))
                }
                var r, t, i;
                return r = e, (t = [{
                    key: "formattedExpiresAt",
                    get: function() {
                        return window.moment(this.expiresAt).format(n.A.langDateFormat("MMM D, YYYY"))
                    }
                }, {
                    key: "isInTier",
                    value: function(e) {
                        var r;
                        return (null === (r = this.tierPlan) || void 0 === r ? void 0 : r.proTierKey) === e
                    }
                }, {
                    key: "isCanceled",
                    value: function() {
                        return "" === this.nextPaymentAt
                    }
                }, {
                    key: "isShopifyBfcmPromoPlan",
                    get: function() {
                        const e = new l.u(this.tierPlan || {});
                        return (0, s.I8)(e)
                    }
                }, {
                    key: "shouldBeShownAsCanceled",
                    get: function() {
                        return !this.isOnTrial && this.isShopifyBfcmPromoPlan
                    }
                }]) && u(r.prototype, t), i && u(r, i), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), e
            }()
        },
        38913: (e, r, t) => {
            t.d(r, {
                AJ: () => m,
                Bt: () => u,
                Bv: () => b,
                Lk: () => f,
                T9: () => S,
                VC: () => d,
                VV: () => w,
                XF: () => p,
                YQ: () => k,
                YU: () => v,
                fJ: () => y,
                kX: () => g,
                lX: () => P,
                mf: () => C
            });
            var n = t(96486),
                i = t(23343),
                a = t(6078),
                o = t(76229),
                s = t(16123);

            function l(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, a = void 0, "symbol" == typeof(a = function(e, r) {
                        if ("object" != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, r || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === r ? String : Number)(e)
                    }(i, "string")) ? a : String(a)), n)
                }
                var i, a
            }
            const u = "month",
                d = "three_months",
                p = "year",
                h = "two_weeks",
                f = "30_days",
                m = {
                    [p]: clang("year", "yr"),
                    [u]: clang("month", "mo"),
                    [f]: dlang("dashboard", "30 days"),
                    [d]: clang("month", "for 3 months"),
                    [h]: clang("month", "14 days")
                },
                y = {
                    [p]: clang("year", "per year"),
                    [u]: clang("month", "per month"),
                    [f]: clang("month", "per 30 days"),
                    [d]: clang("month", "for 3 months"),
                    [h]: clang("month", "14 days")
                },
                g = {
                    [p]: dlang("dashboard", "Yearly"),
                    [u]: dlang("dashboard", "Monthly"),
                    [f]: dlang("dashboard", "30 days"),
                    [d]: dlang("dashboard", "For 3 months"),
                    [h]: dlang("dashboard", "14 days")
                };
            let b = function() {
                function e() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e), this.price = r.price || 0, this.currency = r.currency || "", this.renewEvery = r.renewEvery || "", this.name = r.name || "", this.tierName = r.tierName || "", this.translatedTierName = r.translatedTierName || "", this.id = r.id || null, this.trialPeriodDays = r.trialPeriodDays || 0, this.trialEndTimestamp = r.trialEndTimestamp || 0, this.hasTrial = r.hasTrial || !1, this.trialPrice = r.trialPrice || 0, this.trialPriceCurrency = r.trialPriceCurrency || "", this.proTierPriceId = r.proTierPriceId || null, this.proTierKey = r.proTierKey || "", this.features = r.features || null, this.promoId = r.promoId || null, this.isShopify = r.isShopify || !1, this.type = r.type || null, this.featuresQuota = r.featuresQuota || null, this.promotedPlan = r.promotedPlan ? new e(r.promotedPlan) : null, this.key = r.proTierPlanKey || null
                }
                var r, t, n;
                return r = e, t = [{
                    key: "formattedPrice",
                    value: function() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return (0, s.T4)(this.price, this.currency, e)
                    }
                }, {
                    key: "isPro",
                    value: function() {
                        return this.proTierKey === a.Io
                    }
                }, {
                    key: "getCurrencySymbol",
                    value: function() {
                        return o.N.getCurrencySymbol(this.currency)
                    }
                }, {
                    key: "getTitle",
                    value: function() {
                        var e;
                        return `${null!==(e=g[this.renewEvery])&&void 0!==e?e:""} ${k(this.tierName)}`.trim()
                    }
                }, {
                    key: "isUbp",
                    value: function() {
                        return this.type === a.bw
                    }
                }], t && c(r.prototype, t), n && c(r, n), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), e
            }();

            function v(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                return r === a.bw ? y[e] || "" : m[e] || ""
            }

            function w(e) {
                return g[e] || ""
            }

            function k(e) {
                return (0, n.startCase)((0, n.camelCase)(e))
            }

            function P(e) {
                let {
                    renewEvery: r,
                    translatedTierName: t
                } = e;
                return `${w(r)} ${t}`
            }

            function S(e, r, t) {
                return "{price}{pricingInterval}".replace("{price}", function(e, r) {
                    return i.O.prettyMoney(e, r, !1)
                }(e, r)).replace("{pricingInterval}", C(t))
            }

            function C(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                if (r === a.bw) return v(e, r);
                const t = e !== d;
                return t ? `/${v(e)}` : ` ${v(e)}`
            }
        },
        28274: (e, r, t) => {
            t.d(r, {
                u: () => u
            });
            var n = t(76229),
                i = t(6078),
                a = t(38913),
                o = t(23343),
                s = t(16123);

            function l(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, a = void 0, "symbol" == typeof(a = function(e, r) {
                        if ("object" != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, r || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === r ? String : Number)(e)
                    }(i, "string")) ? a : String(a)), n)
                }
                var i, a
            }
            let u = function() {
                function e() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e), this.price = r.price || 0, this.currency = r.currency || "", this.renewEvery = r.renewEvery || "", this.name = r.name || "", this.description = r.description || "", this.id = r.id || null, this.proTierId = r.proTierId || null, this.proTierKey = r.proTierKey || "", this.hasTrial = r.hasTrial || !1, this.trialEndTimestamp = r.trialEndTimestamp || 0, this.trialPrice = r.trialPrice || 0, this.trialPriceCurrency = r.trialPriceCurrency || "", this.features = r.features || [], this.noFeatures = r.noFeatures || [], this.isDefault = r.isDefault || !1, this.featuresQuota = r.featuresQuota || null, this.type = r.type || null, this.isShopify = r.isShopify || !1, this.promotedPlan = r.promotedPlan ? new a.Bv(r.promotedPlan) : null, this.key = r.proTierPlanKey || null
                }
                var r, t, u;
                return r = e, t = [{
                    key: "getCurrencySymbol",
                    value: function() {
                        return n.N.getCurrencySymbol(this.currency)
                    }
                }, {
                    key: "formattedPrice",
                    value: function() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return (0, s.T4)(this.price, this.currency, e)
                    }
                }, {
                    key: "hasRenewalPeriod",
                    value: function(e) {
                        return this.renewEvery === e
                    }
                }, {
                    key: "isFree",
                    value: function() {
                        return this.proTierKey === i.vF
                    }
                }, {
                    key: "isUbp",
                    value: function() {
                        return this.type === i.bw
                    }
                }, {
                    key: "isUnlimited",
                    value: function() {
                        return this.proTierKey === i.U5
                    }
                }, {
                    key: "hasFeature",
                    value: function(e) {
                        return this.features.some((r => r.key === e.key))
                    }
                }, {
                    key: "getRenewPeriodAbbreviation",
                    value: function() {
                        return this.isUbp() ? a.fJ[this.renewEvery] || "" : a.AJ[this.renewEvery] || ""
                    }
                }, {
                    key: "getFeatureQuota",
                    value: function(e) {
                        var r;
                        return null !== (r = this.featuresQuota.find((r => {
                            let {
                                key: t
                            } = r;
                            return t === e.key
                        })).maxQuota) && void 0 !== r ? r : null
                    }
                }, {
                    key: "getRoundedPrice",
                    value: function() {
                        return o.O.prettyMoney(this.price, this.currency).replace(this.getCurrencySymbol(), "")
                    }
                }, {
                    key: "priceWithCurrency",
                    get: function() {
                        return this.getCurrencySymbol() + this.getRoundedPrice()
                    }
                }], t && c(r.prototype, t), u && c(r, u), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), e
            }()
        }
    }
]);