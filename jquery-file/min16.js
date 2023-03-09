/*! License information is available at https://static.cdn.printful.com/dist-pf/44529.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [44529, 9300], {
        73645: (t, e, o) => {
            o.d(e, {
                K: () => n
            });
            var r = o(58617);

            function n() {
                return (0, r.r)("/rpc/order-rpc/get-draft-for-shopping-cart")
            }
        },
        26969: (t, e, o) => {
            o.d(e, {
                US: () => U,
                qH: () => k,
                E4: () => D,
                cg: () => S,
                DO: () => O,
                bn: () => A
            });
            var r = o(22691),
                n = o(82320),
                i = o(70822),
                s = o(9084),
                a = o(25659),
                c = o(83073),
                d = o(14451),
                l = o(59597),
                u = o(9651);
            const p = function() {};
            (p.prototype = new l.$).incompleteItemId = 0, p.prototype.orderId = 0, p.prototype.syncVariantId = null, p.prototype.syncProductId = null, p.prototype.name = "", p.prototype.quantity = null, p.prototype.priceRetail = null, p.prototype.externalId = null, p.prototype.previewId = null, p.prototype.retailPriceData = null, p.prototype.createdAt = null, p.prototype.isComplete = null, p.prototype.previewItemFile = null, p.prototype.isGeneratingFiles = null, p.prototype.getSyncProduct = function() {
                return (new r.T).getCachedSyncProduct(this.syncProductId)
            }, p.prototype.getSyncVariant = function() {
                return (new r.T).getCachedSyncVariant(this.syncVariantId)
            }, p.prototype.isIgnored = function() {
                return !!this.syncVariantId && (this.getSyncProduct().isIgnored || this.getSyncVariant().isIgnored)
            }, p.prototype.shouldBeReviewed = function() {
                return !this.isIgnored() && !this.isComplete
            }, p.fromArray = function(t) {
                var e = new p;
                return e.previewItemFile = d.p.fromArray(t.previewItemFile), delete t.previewItemFile, u.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsOrderLineItemIncomplete = p);
            var h = o(57177),
                f = o(96794),
                y = o(62207),
                m = o(58334),
                g = o(4473),
                I = o(5532),
                C = o(78039),
                v = o(67148),
                P = o(79421),
                T = o(55559),
                w = o(65613);
            const b = ["id", "customProductId", "length", "width", "height", "weight", "name", "sku", "stockProductId", "isPackaged", "additionalFee", "hsCode", "retailPrice", "originalRetailPrice"],
                E = ["id", "environmentId", "type", "name", "price", "fulfillmentFee", "variantId", "productId", "urlImage", "status", "shippingType", "createdAt", "updatedAt"],
                N = ["itemId", "uniqueId", "quantity", "priceRetail", "technique", "options", "variantId", "productTemplateId", "productTemplateSharedKey", "name", "externalId", "syncVariantId", "isCopy", "designId", "upsellProductId"],
                R = ["label_inside", "label_inside_dtf"];

            function S(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (t instanceof f.b) return t;
                e && F(t);
                const o = f.b.fromArray(t.order);
                let r;
                o.store = y.t.fromArray(t.store);
                const n = t.lockedOrderItemIds || [];
                for (const e in t.orderItems) r = h.PFItemsOrderLineItem.fromArray(t.orderItems[e]), r.setEditable(-1 === n.indexOf(r.itemId) && !r.productTemplateSharedKey), o.items.push(r);
                for (const e in t.sampleOrderItems) r = h.PFItemsOrderLineItem.fromArray(t.sampleOrderItems[e]), o.sampleItems.push(r);
                for (const e in t.orderItemsIncomplete) {
                    const r = p.fromArray(t.orderItemsIncomplete[e]);
                    o.incompleteItems.push(r)
                }
                return o.gift = t.gift, o.recipient = T.t.fromArray(t.recipient), o.isExemptDigitizationFee = !!t.isExemptDigitizationFee, o.isManualOrder = t.isManualOrder, t.allowedFulfillmentRegions && (o.allowedFulfillmentRegions = t.allowedFulfillmentRegions), t.sampleLogEntry && (o.sampleLogEntry = t.sampleLogEntry), o
            }
            async function O(t) {
                const e = L(t),
                    o = await (0, P.Z)("order/save-draft" + i.PFRepositoriesOrderRepository.getRef(), e);
                return e.needResponseData ? function(t) {
                    return S(t, !1)
                }(o) : null
            }
            async function A(t) {
                const e = L(t),
                    o = await (0, P.Z)("order/save-item-to-anonymous-order", e);
                return r = o.order, n = o.cartItem, S(r), C.G.fromArray(n);
                var r, n
            }
            async function D(t) {
                try {
                    return await (0, P.Z)("order/delete-item-from-anonymous-order", t)
                } catch (t) {
                    (0, w.logError)(t)
                }
            }
            async function k(t) {
                try {
                    return await (0, P.Z)("order/change-anonymous-order-item-quantity", t)
                } catch (t) {
                    (0, w.logError)(t)
                }
            }
            async function U() {
                try {
                    return await (0, P.Z)("order/calculate-estimated-shipping-costs")
                } catch (t) {
                    (0, w.logError)(t)
                }
            }

            function L(t) {
                const e = [];
                for (const r in t.items) {
                    const n = t.items[r],
                        i = [];
                    for (const t in n.itemFiles) {
                        var o;
                        const e = n.itemFiles[t];
                        e.exists() && (R.includes(e.type) && null !== (o = n.designData) && void 0 !== o && o.labelTemplateType && (e.options = {
                            templateType: n.designData.labelTemplateType
                        }), i.push(_.pick(e, ["fileId", "type", "position", "options"])))
                    }
                    let s = {};
                    if (n.customProductVariant) {
                        let t = [];
                        n.customProductVariant && n.customProductVariant.customProduct && (t = n.customProductVariant.customProduct.getProductCategoryIdList()), s = {
                            ..._.pick(n.customProductVariant, b),
                            customProduct: {
                                productCategoryIdList: t,
                                ..._.pick(n.customProductVariant.customProduct, E)
                            }
                        }
                    }
                    e.push({
                        ..._.pick(n, N),
                        files: i,
                        customProductVariant: s
                    })
                }
                const r = {
                    items: JSON.stringify(e)
                };
                return t.orderItem && (r.order = t.orderItem.toArray()), t.hasOwnProperty("giftItem") && (r.gift = null === t.giftItem ? null : t.giftItem.toArray()), t.hasOwnProperty("saveAs") && (r.saveAs = t.saveAs), t.hasOwnProperty("recalculateDefaults") && (r.recalculateDefaults = t.recalculateDefaults), t.needResponseData && (r.needResponseData = 1), r
            }

            function F(t) {
                const e = new n.m;
                for (const o in t.products) e.cacheProduct(g.W.fromArray(t.products[o]));
                for (const o in t.variants) e.cacheVariant(m.O.fromArray(t.variants[o]));
                const o = new r.T;
                for (const e in t.syncProducts) o.cacheSyncProduct(c.S.fromArray(t.syncProducts[e]));
                for (const e in t.syncVariants) o.cacheSyncVariant(a.H.fromArray(t.syncVariants[e]));
                const i = new s.O;
                for (const e in t.files) {
                    const o = I.q.fromArray(t.files[e]);
                    i.cacheFile(o)
                }
                v.Vd(y.t.fromArray(t.store))
            }
        },
        67148: (t, e, o) => {
            o.d(e, {
                Dt: () => c,
                P0: () => I,
                Rr: () => d,
                TE: () => l,
                Ue: () => g,
                Vd: () => p,
                YL: () => f,
                _J: () => m,
                _k: () => y,
                aR: () => a,
                ck: () => _,
                oM: () => C,
                q0: () => u,
                r8: () => h
            });
            var r = o(83485),
                n = o(62207),
                i = o(79421);
            const s = "all",
                a = {},
                c = {},
                d = "Personal orders",
                l = -1,
                u = 1;

            function p(t) {
                c[t.storeId] = t
            }

            function h() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return f(s, t)
            }
            async function f(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = t;
                if ("page" in e && (o += e.page), o && a[o]) return a[o].slice();
                const r = await (0, i.Z)("store/get", {
                    type: t,
                    ...e
                });
                return P(o, r)
            }
            async function y(t) {
                if (a[t.getCacheKey()]) return a[t.getCacheKey()].slice();
                const e = await (0, i.Z)("store/get", {
                    type: t.type,
                    productId: t.withAvailableProductId,
                    variantId: t.withAvailableVariantId
                });
                return P(t.getCacheKey(), e)
            }
            async function m(t) {
                return P(null, await (0, i.Z)("store/get", {
                    sourceStoreId: t,
                    type: r.z.CACHE_KEY_SYNCED_FOR_INCOMPLETE_ITEM_SYNC
                }))
            }
            async function g(t, e, o) {
                return v(await (0, i.Z)("store/create", {
                    storeName: t,
                    isAutoCreated: e ? 1 : 0,
                    type: o
                }))
            }
            async function _(t) {
                return v(await (0, i.Z)("store/create", {
                    storeName: t,
                    type: n.t.TYPE_ANONYMOUS
                }))
            }

            function I(t, e) {
                return (0, i.Z)("store-settings/should-show-popovers", {
                    storeId: t,
                    popoverIds: e
                })
            }

            function C(t) {
                return (0, i.Z)("store-settings/dismiss-intro-popover", {
                    popoverId: t
                })
            }

            function v(t) {
                return Object.keys(a).forEach((t => delete a[t])), t.success ? n.t.fromArray(t.store) : new n.t
            }

            function P(t, e) {
                return t ? (a[t] = [], e.stores.forEach((e => {
                    const o = n.t.fromArray(e);
                    a[t].push(o), c[o.storeId] = o
                })), a[t].slice()) : e.stores.map((t => n.t.fromArray(t)))
            }
        },
        73981: (t, e, o) => {
            o.d(e, {
                V: () => q,
                t: () => F
            });
            var r = o(34512),
                n = o(62207),
                i = o(65311),
                s = o.n(i),
                a = o(61169),
                c = o(67148),
                d = o(97540),
                l = o(9651),
                u = o(47586);

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function f(t, e, o) {
                return e && h(t.prototype, e), o && h(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function y(t, e) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, y(t, e)
            }

            function m(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = I(t);
                    if (e) {
                        var n = I(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return g(this, o)
                }
            }

            function g(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return _(t)
            }

            function _(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, I(t)
            }

            function C(t, e) {
                P(t, e), e.add(t)
            }

            function v(t, e, o) {
                P(t, e), e.set(t, o)
            }

            function P(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function T(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return o
            }

            function w(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, E(t, e, "get"))
            }

            function b(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, E(t, e, "set"), o), o
            }

            function E(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var N = new WeakMap,
                R = new WeakMap,
                S = new WeakSet,
                O = new WeakSet,
                A = new WeakSet,
                D = new WeakSet,
                k = new WeakSet,
                U = new WeakSet,
                L = new WeakSet;
            let F = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && y(t, e)
                }(o, t);
                var e = m(o);

                function o() {
                    var t;
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return p(this, o), C(_(t = e.call(this)), L), C(_(t), U), C(_(t), k), C(_(t), D), C(_(t), A), C(_(t), O), C(_(t), S), v(_(t), N, {
                        writable: !0,
                        value: null
                    }), v(_(t), R, {
                        writable: !0,
                        value: []
                    }), b(_(t), N, new q(r)), t.node = tag("div", "store-picker"), w(_(t), N).forceCreate ? (T(_(t), D, V).call(_(t)), g(t)) : PF.EMBED_STORE ? (c.Vd(PF.EMBED_STORE), w(_(t), N).callback(PF.EMBED_STORE.storeId, PF.EMBED_STORE), g(t)) : (T(_(t), S, M).call(_(t)), t)
                }
                return f(o, [{
                    key: "filterAllStoresExceptPersonalOrders",
                    value: function(t) {
                        return t.filter((t => {
                            let {
                                name: e,
                                isHidden: o
                            } = t;
                            return e !== c.Rr && !o
                        }))
                    }
                }], [{
                    key: "popup",
                    value: function(t, e) {
                        const r = new u.Z.Par;
                        r.title = e, r.modalDialogClass = "modal-lg", r.closeOnClick = t.closeOnClick;
                        const n = new u.Z(r),
                            i = t.callback;
                        return t.callback = (t, e) => {
                            n.remove(), i(t, e)
                        }, n.setContent(new o(t)), n.show(), n
                    }
                }]), o
            }(a.p);
            async function M() {
                d.D.show(this.node, {
                    minHeight: 200
                });
                let t = await c._k(w(this, N));
                w(this, N).hidePersonalOrderStores && (t = this.filterAllStoresExceptPersonalOrders(t)), T(this, O, x).call(this, t)
            }
            async function x(t) {
                if (b(this, R, t), 0 !== t.length) 1 !== w(this, R).length ? (d.D.hide(this.node), T(this, A, B).call(this)) : w(this, N).callback(w(this, R)[0].storeId, w(this, R)[0]);
                else {
                    const t = await c.Ue(c.Rr, !0, n.t.TYPE_NATIVE);
                    T(this, U, G).call(this, t)
                }
            }

            function B() {
                l.U.clearNode(this.node);
                const t = [];
                for (let e = 0, o = w(this, R).length; e < o; e++) {
                    const o = w(this, R)[e];
                    let n = "";
                    o.hasPersonalLogo && (n = o.isNative() ? tag("span", null, dclang("dashboard", "store", "Manual orders only")) : tag("div", null, [tag("span", "pf-text-muted", [dclang("dashboard", "store", "Integration") + ": "]), tag("div", "store-logo pf-d-inline-block pf-mr-4", [new r.K({
                        urlImage: o.urlTypeLogo
                    })]), o.integrationName ? o.integrationName : ""]));
                    let i = null;
                    if (o.isLimitedByDSRSetting()) {
                        const t = langUrl(`/dashboard/settings/${o.storeId}/store`);
                        i = dlang("dashboard", "Adjust the store's {linkBegin}default selling preferences{linkEnd} to choose this variant").replace("{linkBegin}", `<a href="${t}" class="pf-link pf-pointer pf-d-inline pf-p-0">`).replace("{linkEnd}", "</a>")
                    } else o.isLimitedByIntegration() && (i = dlang("dashboard", "This product can't be added to your store"));
                    t.push(tag("li", {
                        attr: {
                            role: "button",
                            tabindex: "0",
                            "data-test": "store-picker-item"
                        },
                        onclick: T(this, L, j).bind(this, o.storeId, o),
                        className: "pf-keydown-click"
                    }, [tag("div", "pf-border pf-hover-shadow pf-rounded", [tag("div", "wrapper" + (i ? " wrapper--extended" : ""), [tag("div", "store-name data-hj-suppress", o.name), tag("div", "logo-container", [new r.K({
                        urlImage: o.urlLogo
                    })]), tag("div", "store-type pf-ui-caption", [n]), tag("div", "pf-ui-caption", [tag("span", "pf-text-muted", dlang("dashboard", "Printful billing currency")), [": ", o.currency]]), i ? tag("div", "pf-banner pf-banner-warning", [tag("p", {
                        innerHTML: i
                    })]) : ""])])]))
                }
                tag("div", null, [tag("h6", "pf-mt-0 margin-bottom-20", lang("Select store")), tag("ul", "list-unstyled list-inline storeList", t), tag("div", "clearfix")]).append(this.node)
            }

            function V() {
                l.U.clearNode(this.node);
                let t = dlang("dashboard", "custom"),
                    e = dlang("dashboard", "{firstName}'s Store").replace("{firstName}", PF.Customer.firstName);
                if (w(this, N).createStoreType !== n.t.TYPE_NATIVE) {
                    const o = w(this, N).createStoreType !== n.t.TYPE_API_3DCART ? w(this, N).createStoreType : "Shift4Shop";
                    t = o, e = o + " store"
                }
                this.errorBlock = tag("div"), this.nodeCreateInput = tag("input", {
                    type: "text",
                    value: e,
                    className: "form-control pf-mr-12 pf-w-sm-50 pf-d-inline",
                    prop: {
                        onkeyup: t => {
                            13 == t.keyCode && T(this, k, Y).call(this)
                        }
                    },
                    attr: {
                        "data-test": "store-name-I4Tuawr8ZNxKBxQ"
                    }
                }), tag("div", {
                    className: "row",
                    style: {
                        minHeight: "200px"
                    }
                }, [tag("div", "col-12 text-center form-inline", [tag("h3", "pf-h3 pf-mt-32 pf-mb-12", "custom" === t ? dlang("dashboard", "Create a custom store") : dlang("dashboard", "Create a {type} store").replace("{type}", t)), this.nodeCreateInput, tag("a", {
                    className: "pf-btn pf-btn-primary pf-d-block pf-d-sm-inline-block pf-mt-12 pf-mt-sm-0",
                    prop: {
                        onclick: T(this, k, Y).bind(this)
                    },
                    attr: {
                        "data-test": "create-btn-NajZJtoN8EzoBK4"
                    }
                }, dclang("dashboard", "store", "Create")), this.errorBlock])]).append(this.node), setTimeout(function() {
                    s()(this.nodeCreateInput).focus()
                }.bind(this), 400)
            }
            async function Y() {
                const t = String(this.nodeCreateInput.value).trim();
                if (t.length > 0) {
                    d.D.show(this.node);
                    const e = await c.Ue(t, !1, w(this, N).createStoreType);
                    T(this, U, G).call(this, e)
                } else {
                    tag("div", "pf-mt-12 pf-text-red", dlang("dashboard", "Please check the name and try again")).append(this.errorBlock)
                }
            }

            function G(t) {
                d.D.hide(this.node), b(this, R, w(this, R) || []), w(this, R).push(t), t.storeId ? T(this, L, j).call(this, t.storeId, t) : alert(dlang("dashboard", "Please check the name and try again"))
            }

            function j(t, e) {
                e.isLimited() || w(this, N).callback(t, e)
            }
            let q = f((function t() {
                var e;
                let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                p(this, t), this.callback = o.callback || null, this.forceCreate = o.forceCreate || !1, this.type = o.type || "all", this.createStoreType = o.createStoreType || "native", this.closeOnClick = o.closeOnClick || !0, this.withAvailableProductId = o.withAvailableProductId || null, this.withAvailableVariantId = o.withAvailableVariantId || null, this.getCacheKey = function() {
                    let t = this.withAvailableVariantId || this.withAvailableProductId;
                    return t && (t = `|${t}`), `${this.type}${t}`
                }, this.hidePersonalOrderStores = null !== (e = o.hidePersonalOrderStores) && void 0 !== e && e
            }))
        },
        61756: (t, e, o) => {
            o.d(e, {
                He: () => N,
                Mn: () => y,
                NN: () => R,
                O2: () => C,
                Qb: () => c,
                S1: () => i,
                ST: () => h,
                TH: () => d,
                XR: () => w,
                _A: () => _,
                aW: () => l,
                ap: () => T,
                e$: () => a,
                h4: () => g,
                j8: () => s,
                m_: () => I,
                on: () => n,
                pC: () => u,
                qC: () => P,
                rL: () => v,
                ry: () => m,
                wA: () => p,
                y$: () => E,
                ye: () => f,
                zK: () => b
            });
            const r = {};

            function n(t, e, o) {
                r[t] || (r[t] = []), r[t].push({
                    func: e,
                    ctx: o
                })
            }

            function i(t, e) {
                if (!a(t)) return;
                if (!e) return void(r[t] = []);
                const o = r[t];
                let n = o.length;
                for (; n-- > 0;) {
                    const {
                        func: t
                    } = o[n];
                    e === t && o.splice(n, 1)
                }
            }

            function s(t) {
                if (!a(t)) return;
                const e = r[t];
                for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i];
                for (let t of e) {
                    const {
                        func: e,
                        ctx: o
                    } = t;
                    e.apply(o, n)
                }
            }

            function a(t) {
                return t && r[t] && r[t].length > 0
            }
            const c = "orderupdate",
                d = "productPushStarted",
                l = "productPushModalClosed",
                u = "productPushModalClose",
                p = "productsPricingModalClose",
                h = "designUpdate",
                f = "designerRemoveWarning",
                y = "designerShowWarning",
                m = "logoSaved",
                g = "designerStickyFooterBack",
                _ = "breadcrumbsChanged",
                I = "sellingRegionOpenSettings",
                C = "productVariantSelected",
                v = "productTechniqueSelected",
                P = "browserBackRemoveWarning",
                T = "orderFlowModalClose",
                w = "inlineProductPickerOnProductPickedTemplates",
                b = "inlineProductPickerOnProductPickedOrderFlow",
                E = "inlineProductPickerModalClose",
                N = "modifyNewDesignerLayoutModal",
                R = {
                    on: n,
                    off: i,
                    emit: s,
                    has: a,
                    ORDER_UPDATE: c,
                    PRODUCT_PUSH_STARTED: d,
                    PRODUCT_PUSH_COMPLETE: "productPushed",
                    PRODUCT_PUSH_MODAL_CLOSED: l,
                    PRODUCT_PUSH_MODAL_CLOSE: u,
                    PRODUCTS_PRICING_MODAL_CLOSE: p,
                    DESIGN_UPDATE: h,
                    DESIGNER_REMOVE_LEAVE_WARNING: f,
                    DESIGNER_SHOW_WARNING: y,
                    LOGO_SAVED: m,
                    DESIGNER_STICKY_FOOTER_BACK: g,
                    SELLING_REGION_UPDATE: "sellingRegionUpdate",
                    SELLING_REGION_OPEN_SETTINGS: I,
                    PRODUCT_CATALOG_DELIVERY_ESTIMATED: "productCatalogDeliveryEstimated",
                    PRODUCT_VARIANT_SELECTED: C,
                    PRODUCT_TECHNIQUE_SELECTED: v,
                    BROWSER_BACK_REMOVE_LEAVE_WARNING: P,
                    ORDER_FLOW_MODAL_CLOSE: T,
                    STORE_EMPTY_STATE_LOADED: "storeEmptyStateLoaded",
                    STORE_EMPTY_STATE_CTA_BLOCK_LOADED: "storeEmptyStateCtaBlockLoaded",
                    PRODUCT_FAVORITE_STATUS_UPDATED: "productFavoriteStatusUpdated",
                    INLINE_PRODUCT_PICKER_ON_PRODUCT_PICKED_TEMPLATES: w,
                    INLINE_PRODUCT_PICKER_ON_PRODUCT_PICKED_ORDER_FLOW: b,
                    INLINE_PRODUCT_PICKER_MODAL_CLOSE: E,
                    MODIFY_NEW_DESIGNER_LAYOUT_MODAL: N
                }
        },
        98607: (t, e, o) => {
            o.d(e, {
                U: () => T
            });
            var r = o(9350),
                n = o(25046),
                i = o(61169),
                s = o(28091);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function d(t, e, o) {
                return e && c(t.prototype, e), o && c(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function l(t, e) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = f(t);
                    if (e) {
                        var n = f(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return p(this, o)
                }
            }

            function p(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return h(t)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function y(t, e, o) {
                m(t, e), e.set(t, o)
            }

            function m(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function g(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, I(t, e, "get"))
            }

            function _(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, I(t, e, "set"), o), o
            }

            function I(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var C = new WeakMap,
                v = new WeakMap,
                P = new WeakSet;
            let T = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && l(t, e)
                }(o, t);
                var e = u(o);

                function o(t) {
                    var r, n, i;
                    return a(this, o), r = e.call(this), m(n = h(r), i = P), i.add(n), y(h(r), C, {
                            writable: !0,
                            value: void 0
                        }), y(h(r), v, {
                            writable: !0,
                            value: void 0
                        }), r.node = tag("div", "discount-countdown-mke"), _(h(r), C, t),
                        function(t, e, o) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return o
                        }(h(r), P, w).call(h(r)), r
                }
                return d(o, null, [{
                    key: "createDiscountCountdown",
                    value: function(t) {
                        let {
                            countdownText: e = "",
                            endTime: o,
                            showTopTriangle: r = !1,
                            showBottomTriangle: n = !1,
                            justifyContentEndOnXxs: i = !1,
                            customBlockClass: s = "",
                            showBackground: a = !0
                        } = t;
                        const c = new b;
                        return c.endTime = 1e3 * o, c.text = e, c.showTopTriangle = r, c.showBottomTriangle = n, c.justifyContentEndOnXxs = i, c.customBlockClass = s, c.showBackground = a, new this(c)
                    }
                }, {
                    key: "getPeriodicPriceCountdownFromCartOrderItem",
                    value: function(t) {
                        let {
                            cartOrderItem: e,
                            showTopTriangle: o = !1,
                            showBottomTriangle: n = !1,
                            customBlockClass: i = "",
                            justifyContentEndOnXxs: s = !1,
                            containerClass: a = "",
                            tooltipPlacement: c = "top"
                        } = t;
                        if (e && e.priceData.discountedPrice && e.priceData.discountType in r.B.DISCOUNT_COUNTDOWN_TEXT_MAP) {
                            const t = this.createDiscountCountdown({
                                countdownText: r.B.DISCOUNT_COUNTDOWN_TEXT_MAP[e.priceData.discountType],
                                endTime: e.priceData.getPeriodicPriceExpiryTime(),
                                showTopTriangle: o,
                                showBottomTriangle: n,
                                justifyContentEndOnXxs: s,
                                customBlockClass: i
                            });
                            return tag("div", a, [t])
                        }
                        return ""
                    }
                }, {
                    key: "getPeriodicPriceCountdownFromPriceRange",
                    value: async function(t) {
                        var e;
                        let {
                            productData: o,
                            showTopTriangle: n = !1,
                            showBottomTriangle: i = !1,
                            customBlockClass: a = "",
                            justifyContentEndOnXxs: c = !1,
                            containerClass: d = ""
                        } = t;
                        const l = null === (e = o.product.priceRange.minPriceDiscount) || void 0 === e ? void 0 : e.discountType;
                        if (o.product.priceRange.minPriceDiscount && r.B.DISCOUNT_PERIODIC_TYPES.includes(l) && o.product.priceRange.minPriceDiscount.discountExpiryDate && 1e3 * o.product.priceRange.minPriceDiscount.discountExpiryDate >= Date.now() && await !s.z.isFirstOrderOfferAvailable(o)) {
                            const t = this.createDiscountCountdown({
                                countdownText: r.B.DISCOUNT_COUNTDOWN_TEXT_MAP[l],
                                endTime: o.product.priceRange.minPriceDiscount.discountExpiryDate,
                                showTopTriangle: n,
                                showBottomTriangle: i,
                                justifyContentEndOnXxs: c,
                                customBlockClass: a
                            });
                            return tag("div", d, [t])
                        }
                        return null
                    }
                }]), o
            }(i.p);
            async function w() {
                const t = new n.L;
                t.components = {
                    "discount-countdown": () => o.e(98506).then(o.bind(o, 13396))
                }, t.template = '\n            <discount-countdown\n                :end-time="endTime"\n                :show-top-triangle="showTopTriangle"\n                :show-bottom-triangle="showBottomTriangle"\n                :custom-block-class="customBlockClass"\n                :justify-content-end-on-xxs="justifyContentEndOnXxs"\n                :text="text"\n                :show-background="showBackground"\n            />\n        ', t.initialData = {
                    endTime: g(this, C).endTime,
                    text: g(this, C).text,
                    showTopTriangle: g(this, C).showTopTriangle,
                    showBottomTriangle: g(this, C).showBottomTriangle,
                    justifyContentEndOnXxs: g(this, C).justifyContentEndOnXxs,
                    customBlockClass: g(this, C).customBlockClass,
                    showBackground: g(this, C).showBackground
                }, _(this, v, new n.Z(t)), g(this, v).append(this.node)
            }
            let b = d((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, t), this.endTime = e.endTime, this.text = e.text, this.showBottomTriangle = e.showBottomTriangle, this.showTopTriangle = e.showTopTriangle, this.customBlockClass = e.customBlockClass, this.justifyContentEndOnXxs = e.justifyContentEndOnXxs, this.showBackground = e.showBackground
            }))
        },
        35826: (t, e, o) => {
            o.d(e, {
                c: () => l
            });
            var r = o(25046);

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function a(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = d(t);
                    if (e) {
                        var n = d(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return c(this, o)
                }
            }

            function c(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function d(t) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, d(t)
            }
            let l = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && s(t, e)
                }(u, t);
                var e, c, d, l = a(u);

                function u() {
                    return n(this, u), l.apply(this, arguments)
                }
                return e = u, c = [{
                    key: "render",
                    value: function(t, e) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "top";
                        const a = new r.L;
                        a.components = {
                            SellingRegionSearchInfoBanner: () => o.e(45661).then(o.bind(o, 60508))
                        }, a.template = '<SellingRegionSearchInfoBanner\n            :item-count="count"\n            :classOverride="classOverride"\n            :storeId="storeId"\n            :placement="placement"\n        />', a.initialData = {
                            count: t,
                            storeId: n,
                            classOverride: i,
                            placement: s
                        }, new r.Z(a).append(e)
                    }
                }], c && i(e.prototype, c), d && i(e, d), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), u
            }(o(61169).p)
        },
        39697: (t, e, o) => {
            o.d(e, {
                z: () => c
            });
            var r = o(77819),
                n = o(20833),
                i = o(97540),
                s = o(9651),
                a = o(85243);
            const c = Class({
                __construct: function(t) {
                    if (this.type = t.type, this.onSelected = t.onSelected, this.onEnterPressed = t.onEnterPressed, this.showAllResults = t.showAllResults, this.searchValue = t.value, this.history = t.history || [], this.nodeInput = (0, s.U)({
                            tag: "input",
                            type: "search",
                            value: this.searchValue || "",
                            attr: {
                                placeholder: t.placeholder || lang("Searchâ€¦")
                            }
                        }), this.node = (0, s.U)({
                            tag: "div",
                            els: [this.nodeInput]
                        }), "sitewide-search" === this.type) {
                        const e = (0, s.U)({
                            tag: "label",
                            className: "pf-d-none",
                            text: t.placeholder || lang("Searchâ€¦"),
                            attr: {
                                for: "sitewide-search-input"
                            }
                        });
                        this.node.appendChild(e)
                    }
                    var e = this._getDefaultTemplates();
                    s.U.O2O(e, t.templates);
                    var o = new n.R("/rpc/search-rpc/" + this.type + "/?q=SEARCH_QUERY");
                    if (t.urlQuery)
                        for (var d in t.urlQuery) o.query[d] = t.urlQuery[d];
                    const l = c.PROPERTY_MAPPING[t.type].identity || "id",
                        u = "sitewide-search" === this.type;
                    this._source = new Bloodhound({
                        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        remote: {
                            url: o.toString(),
                            wildcard: "SEARCH_QUERY",
                            rateLimitWait: t.delay || 300,
                            prepare: t.prepare || null,
                            cache: !t.hasOwnProperty("cache") || t.cache,
                            filter: t.formatSearchResponse,
                            transport: u ? a.t : null
                        },
                        identify: function(t) {
                            return t[l]
                        }
                    });
                    var p = c.PROPERTY_MAPPING[t.type].display || "name";
                    u ? new r.A({
                        inputContainerNode: this.node,
                        inputNode: this.nodeInput,
                        source: this._source,
                        history: this.history
                    }) : $(this.nodeInput).typeahead({
                        highlight: !0,
                        minLength: t.hasOwnProperty("minLength") ? t.minLength : 1
                    }, {
                        name: this.type,
                        display: p,
                        source: this._source,
                        limit: 1 / 0,
                        templates: e
                    }).on("typeahead:select", this._onSelected).on("keyup", this._onKeyUp), t.triggerDropdown && setTimeout(this._forceFocus, 500), t.keepOpenOnEnter && (this.keepOpenOnEnter = !0), t.withLoader && ($(this.nodeInput).bind("typeahead:asyncrequest", function() {
                        i.D.show(this.node)
                    }.bind(this)), $(this.nodeInput).bind("typeahead:asyncreceive", function() {
                        i.D.hide(this.node)
                    }.bind(this)))
                },
                _getDefaultTemplates: function() {
                    var t = null;
                    return this.showAllResults && (t = $((0, s.U)({
                        tag: "div",
                        els: [{
                            tag: "div",
                            className: "tt-suggestion tt-selectable tt-all-results pf-py-12 pf-border-top",
                            els: [lang("Show all results")]
                        }]
                    })).html(), $(this.node).on("click", ".tt-all-results", this._showAllResults)), {
                        suggestion: function(t) {
                            var e = "";
                            return t.urlImage && (e = (0, s.U)({
                                tag: "div",
                                className: "search-box__image-container",
                                els: [{
                                    tag: "img",
                                    className: "search-box__image",
                                    src: t.urlImage
                                }]
                            })), t.name = t.autoCompleteName || t.name || t.title, (0, s.U)({
                                tag: "div",
                                els: [{
                                    tag: "div",
                                    className: "tt-suggestion tt-selectable search-box__container",
                                    els: [e, {
                                        tag: "div",
                                        className: "search-box__text",
                                        els: [t.name || ""]
                                    }]
                                }]
                            })
                        },
                        footer: t,
                        empty: $((0, s.U)({
                            tag: "div",
                            els: [{
                                tag: "div",
                                className: "tt-suggestion tt-suggestion-no-results",
                                els: [lang("No matching results found")]
                            }]
                        })).html()
                    }
                },
                _forceFocus: function() {
                    $(this.nodeInput).focus().trigger("keypress")
                },
                _onSelected: function(t, e) {
                    this.onSelected && this.onSelected(e), this._ignoreOnKeyUp = !0
                },
                _onKeyUp: function(t) {
                    13 != (t.keyCode ? t.keyCode : t.which) || this._ignoreOnKeyUp || (this.keepOpenOnEnter || $(this.nodeInput).typeahead("close"), this.onEnterPressed && this.onEnterPressed(this.getValue())), this._ignoreOnKeyUp = !1
                },
                _showAllResults: function() {
                    $(this.nodeInput).typeahead("close"), this.showAllResults && this.showAllResults(this.getValue())
                },
                hide: function() {
                    s.U.addClassName(this.node, "hidden")
                },
                show: function() {
                    s.U.removeClassName(this.node, "hidden")
                },
                cancel: function() {
                    $(this.nodeInput).typeahead("val", "")
                },
                disable: function() {
                    this.nodeInput.setAttribute("disabled", "disabled")
                },
                enable: function() {
                    this.nodeInput.removeAttribute("disabled")
                },
                getValue: function() {
                    return $.trim(this.nodeInput.value)
                },
                setValue: function(t) {
                    this.nodeInput.value = t
                }
            }, s.U.Base);
            c.SEARCH_TYPE_PRODUCTS = "products", c.SEARCH_TYPE_VARIANTS = "variants", c.SEARCH_TYPE_FEAUTURE_REQUESTS = "feature-requests", c.SEARCH_TYPE_PRODUCTS_GENERATOR = "generator-products", c.SEARCH_TYPE_SYNC_PRODUCTS = "sync-products", c.SEARCH_TYPE_STOCK_PRODUCT = "stock-products", c.SEARCH_TYPE_STORES = "stores", c.SEARCH_TYPE_CUSTOM_PRODUCTS = "custom-products", c.SEARCH_TYPE_PRODUCT_CATEGORIES = "product-categories", c.SEARCH_TYPE_SITEWIDE_SEARCH = "sitewide-search", c.SEARCH_TYPE_SAMPLE_ORDER_PRODUCTS = "sample-order-products", c.PROPERTY_MAPPING = {}, c.PROPERTY_MAPPING[c.SEARCH_TYPE_PRODUCTS] = {
                identity: "productId",
                display: "autoCompleteName"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_VARIANTS] = {
                identity: "id",
                display: "title"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_FEAUTURE_REQUESTS] = {
                identity: "featureId",
                display: "searchTitle"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_PRODUCTS_GENERATOR] = {
                identity: "productId",
                display: "autoCompleteName"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_SYNC_PRODUCTS] = {
                identity: "syncProductId",
                display: "name"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_STOCK_PRODUCT] = {
                identity: "stockProductId",
                display: "name"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_STORES] = {
                identity: "storeId",
                display: "name"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_CUSTOM_PRODUCTS] = {
                identity: "id",
                display: "name"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_SITEWIDE_SEARCH] = {
                identity: "id",
                display: "name"
            }, c.PROPERTY_MAPPING[c.SEARCH_TYPE_SAMPLE_ORDER_PRODUCTS] = {
                identity: "productId",
                display: "autoCompleteName"
            }, window && ((globalThis || {}).PFComponentsAutoComplete = c)
        },
        34512: (t, e, o) => {
            o.d(e, {
                K: () => n
            });
            var r = o(9651);
            const n = function(t, e) {
                e = e || {};
                var o = {
                    tag: "div",
                    className: "square-box pf-rounded",
                    els: [{
                        tag: "div",
                        className: "square-content",
                        els: [{
                            tag: "div",
                            els: [{
                                tag: "span",
                                els: (t = t || {}).nodeContent instanceof Array ? t.nodeContent : [t.nodeContent ? t.nodeContent : ""]
                            }]
                        }]
                    }]
                };
                t.urlImage && (o.style = {
                    backgroundImage: 'url("' + encodeURI(t.urlImage) + '")'
                }), r.U.O2O(o, e), this.node = (0, r.U)(o)
            };
            n.prototype = new r.U.Base, window && ((globalThis || {}).PFComponentsSquareBox = n)
        },
        77819: (t, e, o) => {
            o.d(e, {
                A: () => R
            });
            var r = o(65131),
                n = o(19765),
                i = o(40245);
            const s = Class({
                type: null,
                isActive: !1,
                title: "",
                items: [],
                total: "",
                categoryItemsNodeClassName: "",
                itemRenderer: null,
                viewAllButtonRenderer: null
            });
            window && ((globalThis || {}).PFComponentsSitewideSearchCategoryPar = s);
            var a = o(9651);
            const c = Class({
                type: null,
                isActive: !1,
                title: "",
                items: [],
                total: "0",
                categoryItemsNodeClassName: "",
                _itemRenderer: null,
                _viewAllButtonRenderer: null,
                __construct: function(t) {
                    this.type = t.type || null, this.isActive = t.isActive || !1, this.title = t.title, this.items = t.items, this.total = t.total, this.categoryItemsNodeClassName = t.categoryItemsNodeClassName, this._itemRenderer = t.itemRenderer || null, this._viewAllButtonRenderer = t.viewAllButtonRenderer || null
                },
                renderItem: function(t) {
                    if (this._itemRenderer) return this._itemRenderer(t)
                },
                renderViewAllButton: function() {
                    if (this._viewAllButtonRenderer) return this._viewAllButtonRenderer(this)
                }
            }, a.U.Base);
            window && ((globalThis || {}).PFComponentsSitewideSearchCategoryBase = c);
            var d = o(4473),
                l = o(61756),
                u = o(71843),
                p = o(97540),
                h = o(35826),
                f = o(25046),
                y = o(90227),
                m = o(56106),
                g = o(12930),
                _ = o(9300);
            const I = "orders",
                C = "products",
                v = "outsideDsrProducts",
                P = "mockups",
                T = "outsideDsrMockups",
                w = "landingPages",
                b = "faqPages",
                E = "history",
                N = [I, C, v, P, T, w, b, E],
                R = Class({
                    _headerMainNode: document.querySelector(".header__main") || null,
                    _widgetContainerMobileNode: document.querySelector(".sitewide-search__menu-bar") || null,
                    _inputContainerNode: null,
                    _inputNode: null,
                    _resultContainerNode: null,
                    _categoriesNode: null,
                    _categoryItemsNode: null,
                    _specialKeyCodeMap: {
                        27: "esc"
                    },
                    _specialTabKeyCodeMap: {
                        9: "Tab"
                    },
                    _eventTimeout: null,
                    _hoverTimeout: null,
                    _smallScreenBreakpoint: 992,
                    _isSmallScreen: !1,
                    _source: null,
                    _loadingContainerNode: null,
                    _loadingNode: null,
                    _inputCloseNode: null,
                    _mobileEmptyResultsNode: null,
                    _searchHistoryComponent: null,
                    _data: null,
                    _categories: [],
                    _activeCategory: null,
                    _isFocused: !1,
                    _preventClick: !1,
                    _isOpened: !1,
                    _isSearchHistoryInitiated: !1,
                    _scroll: {
                        isInitial: !0,
                        position: null,
                        offset: 0,
                        hideOffset: 300,
                        showDelayOffset: 100
                    },
                    __construct: function(t) {
                        this._inputContainerNode = t.inputContainerNode, this._inputNode = t.inputNode, tag("label", {
                            id: "hidden-sitewide-search-label",
                            className: "pf-d-none",
                            text: lang("Searchâ€¦"),
                            attr: {
                                for: "hidden-sitewide-search-input"
                            }
                        }).append(this._inputContainerNode), tag("input", {
                            id: "hidden-sitewide-search-input",
                            style: {
                                opacity: 0,
                                position: "absolute",
                                left: 0,
                                "z-index": -1
                            },
                            attr: {
                                "aria-labelledBy": "hidden-sitewide-search-label"
                            }
                        }).append(this._inputContainerNode), this._inputNode.setAttribute("id", "sitewide-search-input"), this._inputNode.setAttribute("name", "sitewide-search-input"), this._inputNode.setAttribute("autocomplete", "off"), this._inputNode.setAttribute("style", "text-overflow: ellipsis;"), this._source = $.extend({}, t.source, {
                            search: function(t, e, o) {
                                var r = this.sorter(this.index.search(t));
                                return e(this.remote ? r.slice() : r), this.remote && (this.stop(), r.length < this.sufficient && this.remote.get(t, (function(t) {
                                    o && o(t)
                                }))), this
                            },
                            stop: function() {
                                this.remote.cancelLastRequest()
                            }
                        }), this._close(), this._renderInputNodeControls(), this._bindEvents(), this.onResize(), this._initSearchHistoryComponent(t.history)
                    },
                    _bindEvents: function() {
                        for (var t in window.addEventListener("resize", function() {
                                this.onResize(), this._fixIeFlexWidth()
                            }.bind(this)), document.body.addEventListener("mousedown", this.onOutsideClick), document.body.addEventListener("keyup", this.onOutsideKeyUp), $(this._inputNode).on("focus", this.onFocus), $(this._inputNode).on("blur", this.onBlur), $(this._inputNode).on("input", this.onInput), this._hasSearchButtonInMobileUserbar() && $("#sitewide-search-button").on("click", this.onFocus), this._specialKeyCodeMap)
                            if (this._specialKeyCodeMap.hasOwnProperty(t)) {
                                var e = this._specialKeyCodeMap[t];
                                $(this._inputNode).on("sitewide-search:" + e, this["on" + e[0].toUpperCase() + e.slice(1) + "Key"])
                            } $(document.body).bind({
                            "mousewheel DOMMouseScroll scroll": this.onScroll
                        }), $(document.body).on("touchmove", (t => {
                            let e = $(document).scrollTop();
                            const o = setInterval((() => {
                                let r = $(document).scrollTop();
                                e === r && clearInterval(o), this.onScroll(t), e = r
                            }), 500)
                        })), l.on(R.EVENT_SHOULD_RECALCULATE, this.onScroll, this)
                    },
                    _open: function() {
                        this._isOpened = !0, p.D.hide(this._loadingNode), this._loadingContainerNode && a.U.addClassName(this._loadingContainerNode, "pf-d-none"), this._resultContainerNode && a.U.removeClassName(this._resultContainerNode, "pf-d-none"), this._inputContainerNode && (a.U.addClassName(document.body, "sitewide-search--opened"), a.U.addClassName(this._inputContainerNode, "sitewide-search--opened"), a.U.removeClassName(this._inputContainerNode, "sitewide-search--closed")), this._renderCategories(), this._getQuery().length && this._closeSearchHistory()
                    },
                    onOutsideClick: function(t) {
                        this._inputContainerNode.contains(t.target) || (this._closeSearchHistory(), this._hasSearchButtonInMobileUserbar() && (a.U.removeClassName(document.body, "sitewide-search--opened"), a.U.removeClassName(this._inputContainerNode, "sitewide-search--opened"), a.U.addClassName(this._inputContainerNode, "sitewide-search--closed"))), this._isOpened && t.target !== this._inputCloseNode && (t.target === this._inputNode || this._resultContainerNode && this._resultContainerNode.contains(t.target) || this._close())
                    },
                    onOutsideKeyUp: function(t) {
                        var e, o;
                        null !== (e = $("#sitewide-search")[0]) && void 0 !== e && e.contains(t.target) || (this._inputContainerNode.contains(null === (o = this._searchHistoryComponent) || void 0 === o ? void 0 : o.node) ? this._closeSearchHistory() : this._isOpened && this._specialTabKeyCodeMap[t.which || t.keyCode] && this._resultContainerNode && !this._resultContainerNode.contains(t.target) && this._close())
                    },
                    _close: function() {
                        this._isOpened = !1, this._resultContainerNode && a.U.addClassName(this._resultContainerNode, "pf-d-none"), this._inputContainerNode && (a.U.removeClassName(document.body, "sitewide-search--opened"), a.U.removeClassName(this._inputContainerNode, "sitewide-search--opened"), a.U.addClassName(this._inputContainerNode, "sitewide-search--closed")), this._hasSearchButtonInMobileUserbar() && this._searchHistoryComponent && this._closeSearchHistory(), p.D.hide(this._loadingNode), this._loadingContainerNode && a.U.addClassName(this._loadingContainerNode, "pf-d-none"), setTimeout((() => {
                            const t = window.document.createEvent("UIEvents");
                            t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t)
                        }), 1)
                    },
                    _hoverDelay: function(t) {
                        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(t, 50)
                    },
                    onResize: function() {
                        this._hideHeaderForMockupGeneratorMobileView() || this._shouldChangeMarginTopOnResize() && (this._isSmallScreen = window.innerWidth < this._smallScreenBreakpoint, this._setContentNodeMarginTop(this._isSmallScreen))
                    },
                    onScroll: function(t) {
                        if (this._hideHeaderForMockupGeneratorMobileView()) return;
                        if (!i.pu.isAny()) return void this._showHeaderUserbarOnScroll();
                        const e = $(document).scrollTop();
                        if (this._scroll.position = null === this._scroll.position ? e : this._scroll.position, e > this._scroll.hideOffset) {
                            const t = e - this._scroll.position;
                            this._scroll.position = e, (this._scroll.offset > 0 && t < 0 || this._scroll.offset < 0 && t > 0) && (this._scroll.offset = 0), this._scroll.offset += t, Math.abs(this._scroll.offset) > this._scroll.hideOffset ? (this._scroll.isInitial = !1, this._hideHeaderUserbarOnScroll()) : (this._scroll.isInitial || !this._scroll.isInitial && this._scroll.offset < 0 && Math.abs(this._scroll.offset) > this._scroll.showDelayOffset) && (this._showHeaderUserbarOnScroll(), this._recalculateMarginTop())
                        } else this._scroll.position = e, this._scroll.offset = e, this._showHeaderUserbarOnScroll(), this._recalculateMarginTop()
                    },
                    _hideHeaderUserbarOnScroll: function() {
                        this._widgetContainerMobileNode && a.U.addClassName(this._widgetContainerMobileNode, "pf-d-none"), this._headerMainNode && a.U.addClassName(this._headerMainNode, "pf-border-bottom-0")
                    },
                    _showHeaderUserbarOnScroll: function() {
                        this._widgetContainerMobileNode && a.U.removeClassName(this._widgetContainerMobileNode, "pf-d-none"), this._headerMainNode && a.U.removeClassName(this._headerMainNode, "pf-border-bottom-0")
                    },
                    _hideHeaderForMockupGeneratorMobileView: function() {
                        return !!$(".dynamic-sticky-footer--attached").length && (this._hideHeaderUserbarOnScroll(), this._setContentNodeMarginTop(this._isSmallScreen), !0)
                    },
                    _shouldChangeMarginTopOnResize: function() {
                        return !$(".sws-fix").length
                    },
                    onFocus: function() {
                        this._isOpened || (this._isFocused = !0, this._hasSearchButtonInMobileUserbar() && (a.U.addClassName(document.body, "sitewide-search--opened"), a.U.addClassName(this._inputContainerNode, "sitewide-search--opened"), a.U.removeClassName(this._inputContainerNode, "sitewide-search--closed")), this._showSearchHistory(), this._search(), this._fixIosVh(), this._hideOnScreenKeyboardOnFirstClick())
                    },
                    onBlur: function() {
                        this._isFocused = !1, this._fixIosVh()
                    },
                    onInput: function() {
                        this._closeSearchHistory(), this._renderLoadingNode(), this._source.stop(), clearTimeout(this._eventTimeout), this._eventTimeout = setTimeout(function() {
                            this._search()
                        }.bind(this), 500)
                    },
                    onEscKey: function() {
                        $(this._inputNode).trigger("blur"), this._close()
                    },
                    _getQuery: function() {
                        return this._inputNode.value
                    },
                    sync: function(t) {},
                    async: function(t) {
                        $(this._inputNode).trigger("typeahead:asyncreceive"), this._renderResults(t)
                    },
                    _search: function() {
                        $(this._inputNode).trigger("typeahead:asyncrequest"), this._source.ttAdapter()(this._getQuery(), this.sync, this.async)
                    },
                    _renderResults: function(t) {
                        if (this._data = t, this._categories = [], this._activeCategory = null, !this._resultContainerNode) {
                            this._resultContainerNode = tag("div", ["sitewide-search__result-container", "pf-border", "pf-border-top-0", "pf-border-muted", "pf-rounded-bottom"].join(" "), [tag("div", "pf-pb-8 pf-py-sm-16", [tag("h3", "pf-p-0 pf-m-0 pf-mx-16 pf-mb-16 pf-i-18 pf-d-none pf-d-sm-block", dlang("site", "I'm looking for...")), this._categoriesNode = tag("ul")]), this._categoryItemsNode = tag("div", "pf-px-16 pf-px-sm-32 pf-pb-12 pf-py-sm-16 pf-d-flex pf-flex-column")]).append(this._inputNode.parentNode)
                        }
                        this._open(), this._hideOnScreenKeyboardOnFirstClick()
                    },
                    _renderCategories: function() {
                        if (this._categoriesNode && a.U.clearNode(this._categoriesNode), this._categoryItemsNode && a.U.clearNode(this._categoryItemsNode), !this._data) return;
                        const t = this._data;
                        if (!this._categories.length) {
                            if (t.products || t[v]) {
                                const e = new s;
                                e.type = C;
                                let o = t.products || {};
                                parseInt(o.total) || (o = t[v] || {}, e.type = v), parseInt(o.total) && (e.title = o.title, e.items = o.items, e.total = o.total, e.itemRenderer = this.renderCategoryItemProduct, e.viewAllButtonRenderer = this.renderViewAllButtonProducts, e.categoryItemsNodeClassName = "sitewide-search__products", this._categories.push(new c(e)))
                            }
                            if (t.mockups || t[T]) {
                                const e = new s;
                                e.type = P;
                                let o = t.mockups || {};
                                parseInt(o.total) || (o = t[T] || {}, e.type = T), parseInt(o.total) && (e.title = o.title, e.items = o.items, e.total = o.total, e.itemRenderer = this.renderCategoryItemMockup, e.viewAllButtonRenderer = this.renderViewAllButtonMockups, e.categoryItemsNodeClassName = "sitewide-search__products", this._categories.push(new c(e)))
                            }
                            if (t.orders) {
                                const e = t.orders;
                                if (parseInt(e.total)) {
                                    const t = new s;
                                    t.title = e.title, t.items = e.items, t.total = e.total, t.itemRenderer = this.renderCategoryItemOrder, t.viewAllButtonRenderer = this.renderViewAllButtonOrders, t.categoryItemsNodeClassName = "sitewide-search__orders", this._categories.push(new c(t))
                                }
                            }
                            if (t.landingPages) {
                                const e = t.landingPages;
                                for (const t in e.items) {
                                    const o = e.items[t],
                                        r = new s;
                                    r.title = o.title, r.items = o.items, r.total = o.total, r.itemRenderer = this.renderCategoryItemArticle, r.viewAllButtonRenderer = this.renderViewAllButtonArticle, r.categoryItemsNodeClassName = "sitewide-search__articles", this._categories.push(new c(r))
                                }
                            }
                            if (t.faqPages) {
                                const e = t.faqPages;
                                for (const t in e.items) {
                                    const o = e.items[t],
                                        r = new s;
                                    r.title = o.title, r.items = o.items, r.total = o.total, r.itemRenderer = this.renderCategoryItemArticle, r.viewAllButtonRenderer = this.renderViewAllButtonArticle, r.categoryItemsNodeClassName = "sitewide-search__articles", this._categories.push(new c(r))
                                }
                            }
                        }
                        if (this._categories.length) {
                            for (const t in this._categories) {
                                const e = this._categories[t];
                                this._renderCategory(e)
                            }
                            this._triggerGAEvent(!1)
                        } else this._getQuery().length ? (this._renderEmptyResultsNode(), this._triggerGAEvent(!0)) : this._close();
                        this._fixIeFlexWidth(), this._addSearchHistory(this._getQuery(), t)
                    },
                    _renderInputNodeControls: function() {
                        a.U.addClassName(this._inputNode, "pf-px-48"), tag("span", "pf-i pf-i-24 pf-i-magnify pf-position-absolute pf-mx-12 pf-my-8 pf-text-muted-light").append(this._inputContainerNode), this._inputCloseNode = tag("a", {
                            className: "pf-i pf-i-24 pf-i-close pf-position-absolute pf-px-12 pf-py-8 pf-text-muted-light",
                            onclick: function(t) {
                                this._inputNode.value = "", this._close(), $(t.target).trigger("blur")
                            }.bind(this)
                        }).append(this._inputContainerNode)
                    },
                    _renderEmptyResultsNode: function() {
                        if (tag("div", "pf-d-none pf-d-sm-block pf-text-center pf-border-bottom pf-border-gray-light pf-pb-48 pf-pt-32 pf-mb-8 pf-mb-sm-12", [tag("i", "pf-i pf-i-magnify-plus-outline pf-i-36 pf-text-gray pf-mb-4"), tag("p", "pf-ui-body pf-m-0 pf-pb-8 pf-bold", [dlang("site", "No results found!")]), tag("p", "pf-ui-body pf-m-0 pf-text-muted", [dlang("site", "Try another keyword or check out products that might interest you below...")])]).append(this._categoryItemsNode), this._mobileEmptyResultsNode = tag("div", "pf-d-sm-none pf-text-center pf-border-bottom pf-border-gray-light pf-pb-48 pf-pt-32 pf-mb-8 pf-mb-sm-12", [tag("i", "pf-i pf-i-magnify-plus-outline pf-i-36 pf-text-gray pf-mb-4"), tag("p", "pf-ui-body pf-m-0 pf-pb-8 pf-bold", [dlang("site", "No results found!")]), tag("p", "pf-ui-body pf-m-0 pf-text-muted", [dlang("site", "Try another keyword or check out products that might interest you below...")])]).append(this._categoryItemsNode), this._data.suggestedProducts && parseInt(this._data.suggestedProducts.total)) {
                            var t = new s;
                            t.isActive = !0, t.title = this._data.suggestedProducts.title, t.items = this._data.suggestedProducts.items, t.total = this._data.suggestedProducts.total, t.itemRenderer = this.renderCategoryItemProduct, t.viewAllButtonRenderer = this.renderViewAllButtonCatalog, t.categoryItemsNodeClassName = "sitewide-search__products";
                            var e = new c(t);
                            this._renderCategoryItems(e)
                        }
                    },
                    _renderCategory: function(t) {
                        this._activeCategory || (this._activeCategory = t), t.isActive = t === this._activeCategory, this._mobileEmptyResultsNode = tag("div");
                        var e = ["pf-px-16", "pf-py-8", "sitewide-search__category"];
                        t.isActive && e.push("sitewide-search__category--active");
                        var o = tag("li", {
                                className: e.join(" "),
                                attr: {
                                    tabindex: 0
                                }
                            }, [tag("span", null, t.title), tag("span", "pf-ml-4", "(" + t.total + ")")]).append(this._categoriesNode),
                            r = this._renderCategoryItems(t);
                        $(o).on("click", $.proxy(this.onCategorySelect, this, o, r)).on("mouseover", function() {
                            !this._isSmallScreen && this._hoverDelay($.proxy(this.onCategorySelect, this, o, r))
                        }.bind(this)).on("mouseout", function() {
                            clearTimeout(this._hoverTimeout)
                        }.bind(this))
                    },
                    _renderLoadingNode: function() {
                        if (this._resultContainerNode && a.U.addClassName(this._resultContainerNode, "pf-d-none"), this._loadingContainerNode && a.U.removeClassName(this._loadingContainerNode, "pf-d-none"), !this._loadingContainerNode) {
                            const t = ["sitewide-search__search-container", "pf-border", "pf-border-top-0", "pf-border-muted", "pf-rounded-bottom", "pf-pt-8"];
                            this._loadingContainerNode = tag("div", t.join(" "), [this._loadingNode = tag("div", "pf-h-100 pf-mx-8")]).append(this._inputNode.parentNode)
                        }
                        a.U.addClassName(document.body, "sitewide-search--opened"), a.U.addClassName(this._inputContainerNode, "sitewide-search--opened"), a.U.removeClassName(this._inputContainerNode, "sitewide-search--closed"), p.D.show(this._loadingNode)
                    },
                    onCategorySelect: function(t, e) {
                        var o, r = this._categoriesNode.querySelectorAll(".sitewide-search__category");
                        for (o = 0; o < r.length; o++) a.U.removeClassName(r[o], "sitewide-search__category--active");
                        a.U.addClassName(t, "sitewide-search__category--active");
                        var n = this._categoryItemsNode.querySelectorAll(".sitewide-search__category-items");
                        for (o = 0; o < n.length; o++) a.U.addClassName(n[o], "pf-d-none");
                        a.U.removeClassName(e, "pf-d-none"), this._fixIeFlexWidth()
                    },
                    _renderCategoryItems: function(t) {
                        const e = tag("div", "row pf-align-content-start");
                        let o = t.renderViewAllButton();
                        [v, T].includes(t.type) && (o = t.type === v ? this.renderViewAllButtonCatalog() : null, (new h.c).render(parseInt(t.total), e, null, "pf-mx-8 pf-mx-lg-12 pf-mx-xl-16 pf-mb-12 pf-mb-lg-24 pf-banner pf-banner-gray pf-bold", "bottom"));
                        const r = [t.categoryItemsNodeClassName, t.isActive ? "" : "pf-d-none", "sitewide-search__category-items"],
                            n = tag("div", r.join(" "), [e]);
                        this._mobileEmptyResultsNode.append(e);
                        for (const o in t.items) {
                            const r = t.items[o];
                            t.renderItem(r).append(e)
                        }
                        return o && o.append(n), n.append(this._categoryItemsNode), n
                    },
                    renderCategoryItemOrder: function(t) {
                        return tag("div", {
                            className: "col-12 col-md-6"
                        }, [tag("a", {
                            className: "sitewide-search__item sitewide-search__item--order pf-d-flex pf-position-relative",
                            href: t.dashboardLink
                        }, [tag("div", "sitewide-search__item-image pf-mr-16", [tag("img", {
                            className: "img-responsive",
                            src: t.store.urlLogo,
                            alt: t.store.integrationName
                        })]), tag("div", "sitewide-search__item-info", [tag("div", "sitewide-search__info--title", t.number + " " + t.created), tag("div", null, t.recipient.name), tag("div", "pf-d-inline-block float-none status-label " + t.status[0], t.status[1]), tag("div", "pf-bold pf-mt-8", prettyMoney(t.grandTotal, t.currency))])])])
                    },
                    renderCategoryItemProduct: function(t) {
                        return this._renderCategoryItemProductOrMockup(t, (function(t) {
                            return t.autoCompleteUrl
                        }))
                    },
                    renderCategoryItemMockup: function(t) {
                        return this._renderCategoryItemProductOrMockup(t, (function(t) {
                            return t.mockupGeneratorPageUrl
                        }))
                    },
                    _renderCategoryItemProductOrMockup: function(t, e) {
                        var o = d.W.fromArray(t),
                            n = new r.v(o);
                        return tag("div", {
                            className: "col-12 col-md-6"
                        }, [tag("a", {
                            className: "sitewide-search__item sitewide-search__item--product pf-d-flex pf-position-relative",
                            href: e(o),
                            onclick: () => {
                                (0, m.addCustomerEvent)({
                                    trigger: g.CUSTOMER_EVENT_TRIGGER_CLICK,
                                    source: g.CUSTOMER_EVENT_SOURCE_SITEWIDE_SEARCH,
                                    context: (0, _.getCustomerEventProductIdContext)(o.productId),
                                    ttl: g.CUSTOMER_EVENT_TTL_30MIN,
                                    maxUnloadsCount: 5
                                })
                            }
                        }, [tag("div", "sitewide-search__item-image pf-mr-16", [tag("img", {
                            className: "img-responsive",
                            src: o.urlImage,
                            alt: o.getFullTitle()
                        })]), tag("div", "sitewide-search__item-info", [tag("div", "sitewide-search__info--title", o.getFullTitle()), tag("div", "sitewide-search__info--rating", n.getReviewRating().reviewCount ? [tag("span", null, u.h.getReviewRatingStarNode(n)), tag("span", "pf-ml-4 text-nowrap", n.getReviewRating().rating + " (" + n.getReviewRating().reviewCount + ")")] : []), tag("div", "pf-bold pf-mt-8", o.getDisplayPriceString())])])])
                    },
                    renderCategoryItemArticle: function(t) {
                        return tag("div", "col-12 pf-mb-16", [tag("a", {
                            className: "sitewide-search__item sitewide-search__item--article pf-position-relative",
                            href: t.url
                        }, [tag("h4", "pf-link pf-normal pf-mb-0", t.title), tag("span", null, t.description)])])
                    },
                    renderViewAllButtonOrders: function(t) {
                        var e = dlang("site", "Go to {categoryTitle}").replace("{categoryTitle}", t.title),
                            o = langUrl("/dashboard/default/orders");
                        return this._renderViewAllButton(e, o)
                    },
                    renderViewAllButtonProducts: function(t) {
                        var e = dlang("site", "See matching {categoryTitle} ({count})").replace("{categoryTitle}", t.title).replace("{count}", t.total.toString()),
                            o = langUrl("/search") + "?q=" + this._getQuery();
                        return this._renderViewAllButton(e, o)
                    },
                    renderViewAllButtonMockups: function(t) {
                        return tag("div")
                    },
                    renderViewAllButtonArticle: function(t) {
                        if (t.title === dlang("site", "FAQ")) {
                            var e = dlang("site", "Go to {categoryTitle}").replace("{categoryTitle}", t.title);
                            const o = langUrl("/search/search-faq") + "?q=" + this._getQuery();
                            return this._renderViewAllButton(e, o)
                        }
                        return tag("div")
                    },
                    renderViewAllButtonCatalog: function(t) {
                        var e = dlang("site", "Go to {categoryTitle}").replace("{categoryTitle}", dlang("site", "Product catalog")),
                            o = langUrl("/custom-products");
                        return this._renderViewAllButton(e, o)
                    },
                    _renderViewAllButton: function(t, e) {
                        return tag("div", "pf-text-center", [tag("a", {
                            href: e,
                            className: "pf-btn pf-btn-secondary pf-mt-12 pf-w-100 pf-w-sm-auto"
                        }, t)])
                    },
                    _triggerGAEvent: function(t) {
                        if (this._getQuery().length >= 3) {
                            const e = "PF_Components_SitewideSearch:" + n.y.slug(this._getQuery());
                            try {
                                if (!sessionStorage.getItem(e)) {
                                    const o = this._getQuery().includes("@") ? "[REDACTED_EMAIL]" : this._getQuery();
                                    ga("send", "event", "Sitewide Search", t ? "Empty Response" : "Succeeded Search", o), sessionStorage.setItem(e, "1")
                                }
                            } catch (t) {}
                        }
                    },
                    _fixIeFlexWidth: function() {
                        /Trident\/|MSIE/.test(window.navigator.userAgent) && this._categoryItemsNode && setTimeout((() => {
                            this._categoryItemsNode.style.marginLeft = ".0{rand}%".replace("{rand}", Math.floor(99 * Math.random() + 1))
                        }), 25)
                    },
                    _fixIosVh: function() {
                        i.pu.isIOS() && (this._isFocused ? (a.U.addClassName(document.body, "sitewide-search--ios"), a.U.addClassName(document.body, "sitewide-search--focused")) : a.U.removeClassName(document.body, "sitewide-search--focused"))
                    },
                    _hideOnScreenKeyboardOnFirstClick: function() {
                        (i.pu.isIOS() || i.pu.isAndroid()) && (this._isFocused && (this._preventClick = !0), this._categoryItemsNode && $(this._categoryItemsNode).on("click", (t => {
                            this._preventClick && (t.preventDefault(), t.stopPropagation(), this._preventClick = !1)
                        })))
                    },
                    _recalculateMarginTop() {
                        document.getElementById("mockup-generator") && y.k.isWindowSmallerThan(y.k.MD) && this._setContentNodeMarginTop(this._isSmallScreen)
                    },
                    _setContentNodeMarginTop: function(t) {
                        let e = "";
                        if (t) {
                            e = `${document.getElementById("app-header").offsetHeight}px`
                        }
                        document.getElementById("content").style.marginTop = e
                    },
                    _initSearchHistoryComponent: function(t) {
                        if (!this._isSearchHistoryInitiated) {
                            this._isSearchHistoryInitiated = !0;
                            const e = new f.L;
                            e.components = {
                                SearchHistory: () => o.e(31815).then(o.bind(o, 9183))
                            }, e.template = '\n                    <search-history\n                        :query="query"\n                        :history="history"\n                        :isLoading="isLoading"\n                        @search="search"\n                        @reset="reset"\n                    />\n                ', e.initialData = {
                                query: "",
                                history: t,
                                isLoading: !1,
                                search: this._searchFromHistory,
                                reset: this._closeSearchHistory
                            }, this._searchHistoryComponent = new f.Z(e)
                        }
                    },
                    _showSearchHistory: function() {
                        this._getQuery().length || (this._searchHistoryComponent.node.append(this._inputContainerNode), $(this._searchHistoryComponent.node).has(":visible").length && a.U.addClassName(this._inputContainerNode, "sitewide-search--history"))
                    },
                    _closeSearchHistory: function() {
                        var t;
                        this._searchHistoryComponent.setDataProp("isLoading", !1), this._inputContainerNode.contains(null === (t = this._searchHistoryComponent) || void 0 === t ? void 0 : t.node) && (a.U.removeClassName(this._inputContainerNode, "sitewide-search--history"), this._inputContainerNode.removeChild(this._searchHistoryComponent.node))
                    },
                    _addSearchHistory: function(t, e) {
                        t.trim().length && this._hasResults(e) && this._searchHistoryComponent.updateData({
                            query: t,
                            history: e.history || []
                        })
                    },
                    _searchFromHistory: function(t) {
                        this._inputNode.value = t, this.onInput(), this._searchHistoryComponent.setDataProp("isLoading", !0)
                    },
                    _hasResults: t => N.some((e => {
                        var o, r;
                        return !(null === (o = t[e]) || void 0 === o || null === (r = o.items) || void 0 === r || !r.length)
                    })),
                    _hasSearchButtonInMobileUserbar() {
                        var t, e;
                        return null !== (t = (null === (e = this._widgetContainerMobileNode) || void 0 === e ? void 0 : e.classList.contains("sitewide-search__user-bar--search-button")) && y.k.isWindowSmallerThan(y.k.MD)) && void 0 !== t && t
                    }
                }, a.U.Base);
            R.EVENT_SHOULD_RECALCULATE = "SitewideSearch:EVENT_SHOULD_RECALCULATE", window && ((globalThis || {}).PFComponentsSitewideSearch = R)
        },
        54200: (t, e, o) => {
            o.d(e, {
                r: () => ot
            });
            var r = o(33286),
                n = (o(70822), o(62627)),
                i = o(30199),
                s = o(96794),
                a = o(80464),
                c = o(98607),
                d = o(61756),
                l = o(97540),
                u = o(9651),
                p = o(78009),
                h = o(67148),
                f = o(73645),
                y = o(62207),
                m = o(78039),
                g = o(9350),
                _ = o(61169),
                I = o(25046);

            function C(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function v(t, e, o) {
                return e && C(t.prototype, e), o && C(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function P(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function T(t, e) {
                return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, T(t, e)
            }

            function w(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = N(t);
                    if (e) {
                        var n = N(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return b(this, o)
                }
            }

            function b(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return E(t)
            }

            function E(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t) {
                return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, N(t)
            }

            function R(t, e, o) {
                S(t, e), e.set(t, o)
            }

            function S(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function O(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, D(t, e, "get"))
            }

            function A(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, D(t, e, "set"), o), o
            }

            function D(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var k = new WeakMap,
                U = new WeakMap,
                L = new WeakSet;
            let F = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && T(t, e)
                }(o, t);
                var e = w(o);

                function o(t) {
                    var r, n, i;
                    return P(this, o), r = e.call(this), S(n = E(r), i = L), i.add(n), R(E(r), k, {
                            writable: !0,
                            value: void 0
                        }), R(E(r), U, {
                            writable: !0,
                            value: void 0
                        }), r.node = tag("div", "input-bulk-discount-mke"), A(E(r), k, t),
                        function(t, e, o) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return o
                        }(E(r), L, M).call(E(r)), r
                }
                return v(o)
            }(_.p);
            async function M() {
                const t = new I.L;
                t.components = {
                    "input-bulk-discount": () => o.e(92509).then(o.bind(o, 59200))
                }, t.template = '\n            <input-bulk-discount\n                @onChange="emitEvent(\'onChange\', $event)"\n                :value="value"\n                :id="id"\n                :bulk-discount-tier-list="bulkDiscountTierList"\n                :with-static-position="withStaticPosition"\n            />\n        ', t.initialData = {
                    value: O(this, k).value,
                    id: O(this, k).id,
                    bulkDiscountTierList: O(this, k).bulkDiscountTiers,
                    withStaticPosition: O(this, k).withStaticPosition
                }, t.emitEvent = (t, e) => {
                    if ("onChange" === t) O(this, k).onChange(e)
                }, A(this, U, new I.Z(t)), O(this, U).append(this.node)
            }
            let x = v((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                P(this, t), this.onChange = e.onChange || void 0, this.value = e.value || "", this.id = e.id || "", this.bulkDiscountTierList = e.bulkDiscountTiers || null, this.withStaticPosition = e.withStaticPosition || !1
            }));
            o(57177);
            var B = o(11876);

            function V(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function Y(t, e) {
                return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Y(t, e)
            }

            function G(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = H(t);
                    if (e) {
                        var n = H(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return j(this, o)
                }
            }

            function j(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return q(t)
            }

            function q(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function H(t) {
                return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, H(t)
            }

            function W(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function K(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, Z(t, e, "set"), o), o
            }

            function Z(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var z = new WeakMap,
                Q = new WeakSet;
            let X = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && Y(t, e)
                }(i, t);
                var e, o, r, n = G(i);

                function i() {
                    var t, e, o;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), t = n.call(this), W(e = q(t), o = Q), o.add(e),
                        function(t, e, o) {
                            W(t, e), e.set(t, o)
                        }(q(t), z, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div", "payment-method-block-mke"),
                        function(t, e, o) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return o
                        }(q(t), Q, J).call(q(t)), t
                }
                return e = i, o && V(e.prototype, o), r && V(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(_.p);
            async function J() {
                const t = new I.L;
                var e, r;
                t.components = {
                    PaymentMethodBlock: () => o.e(51776).then(o.bind(o, 87750))
                }, t.template = "<PaymentMethodBlock />", K(this, z, new I.Z(t)), (e = this, r = z, function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(e, Z(e, r, "get"))).append(this.node)
            }
            var tt = o(60946),
                et = o(68569);
            const ot = Class({
                orderRepository: null,
                productData: null,
                variant: null,
                _productCount: "200+",
                _cartItem: null,
                _cartTotal: null,
                _cartItemCount: 0,
                _contentNode: null,
                _headerIconNode: null,
                _cartButtonNode: null,
                _dropdownNode: null,
                _titleNode: null,
                _notificationNode: null,
                _notificationText: null,
                _itemsNode: null,
                _subtotalNode: null,
                _paymentMethodNode: null,
                _buttonNode: null,
                _estimatedShippingNode: null,
                _estimatedShippingCostsNode: null,
                _isOpen: null,
                _shoppingCartNodeId: "js--shopping-cart",
                _lastProductId: null,
                _lastProductTechnique: null,
                _storeId: null,
                _filteredDesignData: {},
                __construct: function(t, e) {
                    e && (this._shoppingCartNodeId = e), this._initializeCart(t), this._addClickListener(), this._addSubtotalTooltipListeners(), d.on(ot.EVENT_ITEM_ADD, this._onVariantSelected, this), d.on(ot.EVENT_OPEN_DESIGNER, this._openDesigner, this), d.on(ot.EVENT_PREPARE_CART, this._prepareCart, this), d.on(ot.EVENT_ITEM_GENERATED, this._onVariantItemsGenerated, this), d.on(ot.EVENT_DESIGN_TYPES_AND_COMPONENTS, this._designFilteredDataFromProduct, this), d.on(d.wA, this.removeModal), d.j8(ot.EVENT_CART_CREATED)
                },
                _initializeCart: function(t) {
                    this._cartItem = m.G.fromArray(t), this._contentNode = document.getElementById(this._shoppingCartNodeId), this._contentNode.innerHTML = "", this._cartTotal = this._getDiscountedTotal(), this._cartItemCount = this._cartItem.items.length, this._cartItem.totalProductCount && (this._productCount = this._cartItem.totalProductCount), this._renderHeaderNode(), this._renderDropdownNode(), this._addFileGenerationWatcher()
                },
                _addFileGenerationWatcher: function() {
                    const t = this._cartItem.items.find((t => !t.thumbUrl.includes("_thumb")));
                    t && (tt.D.subscribe(`generator-task-${t.uniqueId}`, "onSuccess", this._onVariantItemsGenerated), setTimeout(this._onVariantItemsGenerated, 5e3))
                },
                _prepareCart: async function(t) {
                    const [e] = await (0, h.r8)({
                        productId: t
                    });
                    e || (await (0, h.Ue)(h.Rr, !0, y.t.TYPE_NATIVE), this._initializeCart(await (0, f.K)()))
                },
                _renderHeaderNode: function() {
                    this._headerIconNode = tag("div", "pf-d-md-flex pf-mx-4 pf-mx-sm-8 pf-flex-column pf-flex-md-row pf-align-items-center pf-position-relative", [this._cartButtonNode = this._renderCartIcon()]).append(this._contentNode)
                },
                _cartButtonItemCountAccessibleText() {
                    return 0 !== this._cartItemCount ? `${this._cartItemCount} ${dnlang("site","item","items",this._cartItemCount)}` : dlang("site", "empty")
                },
                _cartButtonAccessibleText() {
                    return this._isOpen ? dlang("site", "Hide my cart ({itemCount})").replace("{itemCount}", this._cartButtonItemCountAccessibleText()) : dlang("site", "Show my cart ({itemCount})").replace("{itemCount}", this._cartButtonItemCountAccessibleText())
                },
                _renderCartIcon: function() {
                    return tag("button", {
                        onclick: this._toggleDropdown.bind(this),
                        className: "pf-btn-unstyled pf-d-flex pf-align-items-center",
                        attr: {
                            type: "button",
                            "aria-label": this._cartButtonAccessibleText(),
                            "aria-expanded": "false",
                            "aria-controls": "header-cart-content"
                        }
                    }, [tag("i", {
                        className: "header__link__icon pf-i pf-i-cart pf-i-24",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }), 0 !== this._cartItemCount ? tag("span", "pf-d-flex pf-align-items-center pf-justify-content-center header__link--badge text-center", this._cartItemCount) : "", tag("span", "pf-d-none pf-ml-sm-4 header__link__text pf-d-xl-inline-block", dlang("site", "My cart"))])
                },
                _renderDropdownNode: function() {
                    this._dropdownNode = tag("div", {
                        id: "header-cart-content",
                        className: "pf-cart__menu pf-w-100 pf-w-md-auto pf-d-none"
                    }, [tag("div", "pf-border-bottom-0", [this._titleNode = this._renderTitleNode(), this._notificationNode = tag("div", {
                        attr: {
                            role: "status",
                            "aria-live": "polite",
                            "aria-atomic": "true"
                        }
                    }), this._itemsNode = this._renderCartItemsNode()]), tag("div", {
                        id: "estimated-shipping"
                    }, [this._estimatedShippingNode = tag("div", "", [this._renderEstimatedShippingNode()])]), this._subtotalNode = tag("div", "", [this._renderCartTotalNode()]), this._buttonNode = tag("div", "pf-p-16 pf-border-top", [this._renderButtonNode()]), this._paymentMethodNode = tag("div", "", [this._renderPaymentMethodNode()])]).append(this._contentNode)
                },
                _openDesigner: async function(t) {
                    var e, o;
                    const r = t.productData.product.getFullTitle(),
                        n = tag("div");
                    this.showModal(r, n, t.node), l.D.show(n, {
                        minHeight: 225
                    });
                    const {
                        picker: i,
                        pickerPar: s,
                        orderLineItem: a
                    } = await ot._loadOrderAndDesignerTypes(), c = new a;
                    c.productId = t.productData.product.productId, c.variantId = t.variant.variantId, null !== (e = t.productOptions) && void 0 !== e && e.outlineColor && (c.options[B.$b] = [t.productOptions.outlineColor]);
                    const [d] = await (0, h.r8)({
                        productId: t.productData.product.productId
                    });
                    this._storeId = null == d ? void 0 : d.storeId;
                    const u = new s;
                    u.lastProductId = this._lastProductId, u.lastProductTechnique = this._lastProductTechnique, u.productId = t.productData.product.productId, u.isProductCatalog = !0, u.storeId = this._storeId, u.currency = d.currency, u.isModalDesigner = !0, u.flow = p.dB.TYPE_OF, u.orderLineItem = c, u.callbackWithGeneratingFiles = this.onVariantItemsGenerating.bind(this), u.setModalFooterContentCallback = this.setModalFooterContent.bind(this), u.isShoppingCart = !0, u.onFileGenerationStartedForVariantCallback = this._onVariantSelected.bind(this), null !== (o = t.productOptions) && void 0 !== o && o.embroiderySubTechnique && (u.embroiderySubTechnique = t.productOptions.embroiderySubTechnique), this._variantPickerNode = new i(u), this.updateModalContents(this._variantPickerNode, !0)
                },
                setModalFooterContent: function(t) {
                    return !!this.modal && (this.modal.setFooterContent(t), !0)
                },
                showModal: function(t, e, o) {
                    this.modal = new et.J(new et.$({
                        showFullscreenModal: !0,
                        modalClasses: "order-flow mg-designer-modal fullscreen-modal",
                        bodyClasses: "pf-mt-0 pf-w-100",
                        title: t,
                        onClose: () => {
                            var t;
                            d.j8(d.ye), o && "function" == typeof o.focus && o.focus(), null === (t = this.modal) || void 0 === t || t.remove(), this.modal = null
                        }
                    })), this.modal.setContent(e), this.modal.show()
                },
                updateModalContents(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.modal && this.modal.setContent(t, e)
                },
                removeModal() {
                    var t;
                    null === (t = this.modal) || void 0 === t || t.remove()
                },
                _initOrderRepository: async function() {
                    if (this.orderRepository) return;
                    const {
                        orderRepo: t
                    } = await ot._loadOrderAndDesignerTypes();
                    this.orderRepository = new t
                },
                _onVariantSelected: async function(t, e) {
                    t.quantity = 1, await this._initOrderRepository(), this.orderRepository.URL_REF = r.g.B2C_FLOW_KEY, await this._onItemAdd(t), e && e()
                },
                onVariantItemsGenerating: function() {
                    this.removeModal(), setTimeout(this._showDropdown, 0), l.D.show(this._dropdownNode, {
                        zIndex: 11
                    })
                },
                _showLoadingOverlay() {
                    l.D.show(this._dropdownNode, {
                        zIndex: 11
                    })
                },
                _hideLoadingOverlay() {
                    l.D.hide(this._dropdownNode)
                },
                _onItemAdd: async function(t) {
                    var e, o;
                    await this._initOrderRepository(), this._lastProductId = null == t ? void 0 : t.productId, this._lastProductTechnique = null == t ? void 0 : t.technique, this.orderRepository.saveItemToAnonymousOrder({
                        orderItem: s.b.fromArray({
                            storeId: this._storeId || (null === (e = this._variantPickerNode) || void 0 === e || null === (o = e._par) || void 0 === o ? void 0 : o.storeId) || -1
                        }),
                        items: [t],
                        callback: this._onDraftSaved.bind(this)
                    })
                },
                _onVariantItemsGenerated: async function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._cartItem.items.find((t => !t.thumbUrl.includes("_thumb")))) {
                        if (t && e) this._cartItem.items.forEach((e => {
                            const o = t.find((t => t.uniqueId === e.uniqueId));
                            o && (e.thumbUrl = o.thumbUrl)
                        }));
                        else {
                            const t = await (0, f.K)(),
                                e = m.G.fromArray(t);
                            this._cartItem = e, this._cartItemCount = e.items.length, this._cartTotal = this._getDiscountedTotal()
                        }
                        this._renderCart(this._isOpen)
                    }
                },
                _onItemDelete: async function(t) {
                    await this._initOrderRepository(), this.orderRepository.deleteItemFromAnonymousOrder({
                        uniqueId: t,
                        callback: this._afterDeleteUpdate.bind(this, t)
                    })
                },
                _afterDeleteUpdate: function(t, e) {
                    if (e) {
                        this._cartItem.items = this._cartItem.items.filter(((e, o) => e.uniqueId !== t)), this._cartItemCount = this._cartItem.items.length;
                        for (const t in e.orderData.orderItems) {
                            const o = e.orderData.orderItems[t];
                            this._getItemByUniqueId(o.uniqueId).priceData = g.B.fromArray(o.priceData)
                        }
                        this._rerenderCartItems()
                    }
                },
                _rerenderCartItems: function() {
                    this._cartTotal = this._getDiscountedTotal(), u.U.clearNode(this._itemsNode), this._renderCartItemsNode().append(this._itemsNode), u.U.clearNode(this._headerIconNode), u.U.clearNode(this._subtotalNode), u.U.clearNode(this._buttonNode), u.U.clearNode(this._paymentMethodNode), this._renderCartIcon().append(this._headerIconNode), this._renderCartTotalNode().append(this._subtotalNode), this._renderEstimatedShippingNode().append(this._estimatedShippingNode), this._renderButtonNode().append(this._buttonNode), this._renderPaymentMethodNode().append(this._paymentMethodNode), this._cartItemCount > 0 && this._getEstimatedShippingCosts()
                },
                _onItemQuantityChange: async function(t, e) {
                    this._showLoadingOverlay();
                    const o = parseInt(e);
                    await this._initOrderRepository(), this.orderRepository.changeAnonymousOrderItemQuantity({
                        uniqueId: t,
                        quantity: o,
                        callback: this._afterQuantityChangeUpdate.bind(this, t, o)
                    })
                },
                _onKeyUp: function(t) {
                    let e = t.target.valueAsNumber;
                    e = e > 1e3 ? 1e3 : e, t.target.value = e
                },
                _afterQuantityChangeUpdate: function(t, e, o) {
                    if (!o) return;
                    for (const t in o.orderData.orderItems) {
                        const e = o.orderData.orderItems[t];
                        this._getItemByUniqueId(e.uniqueId).priceData = g.B.fromArray(e.priceData)
                    }
                    const r = this._getItemByUniqueId(t),
                        n = r.quantity;
                    if (r.quantity = e, e > n) {
                        const t = e - n;
                        this._sendAddToCartEvent(r, t)
                    }
                    this._rerenderCartItems(), this._hideLoadingOverlay()
                },
                _getDiscountBadge: t => t.priceData.discountType === g.B.DISCOUNT_TYPE_BULK ? tag("div", "clearfix", [tag("div", {
                    className: "pf-badge pf-badge-small pf-badge--info pull-right"
                }, lang("Bulk discount"))]) : "",
                _checkQuantity: function(t) {
                    return !!Number.isInteger(t) && t > 0
                },
                _getItemByUniqueId: function(t) {
                    return this._cartItem.items.find((e => e.uniqueId === t))
                },
                _renderCart: function(t) {
                    this._contentNode && u.U.clearNode(this._contentNode), this._renderHeaderNode(), this._renderDropdownNode(), this._appendNotification(), t && this._showDropdown()
                },
                _onDraftSaved: function(t) {
                    if (this._cartItem = t, this._cartItemCount = t.items.length, this._cartTotal = this._getDiscountedTotal(), this._renderCart(!0), this._getEstimatedShippingCosts(), ga("send", {
                            hitType: "event",
                            eventCategory: "Button Clicks",
                            eventAction: "Add to Cart Button",
                            eventLabel: "Product added to cart"
                        }), this._cartItemCount > 0) {
                        const t = this._cartItem.items[this._cartItemCount - 1];
                        this._sendAddToCartEvent(t)
                    }
                    d.j8(ot.EVENT_ITEM_ADD_SUCCESSFUL)
                },
                _getEstimatedShippingCosts: async function() {
                    this._cartItem.isShippingAvailable && (l.D.show(this._estimatedShippingCostsNode, {
                        zIndex: 11
                    }), document.getElementById("cart-shipping-costs").classList.add("pf-d-none"), await this._initOrderRepository(), this.orderRepository.calculateEstimatedShippingCostsForShoppingCart({
                        callback: this._onShippingCostsCalculated.bind(this)
                    }))
                },
                _onShippingCostsCalculated: function(t) {
                    this._cartItem.estimatedShippingCosts = t, u.U.clearNode(this._estimatedShippingCostsNode), this._renderEstimatedShippingCostNode().append(this._estimatedShippingCostsNode), l.D.hide(this._estimatedShippingCostsNode)
                },
                _appendNotification: function() {
                    u.U.clearNode(this._notificationNode), tag("div", "pf-p-16 pf-bg-light-green pf-border-bottom", [tag("i", {
                        className: "pf-i pf-i-check pf-i-20 pf-text-dark-green",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }), this._notificationText = tag("span", "pf-ui-caption pf-text-dark-green pf-pl-8")]).append(this._notificationNode), this._notificationText.innerHTML = dlang("site", "Product added to your cart!")
                },
                _showDropdown: function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 300), this._onOpen()
                },
                _renderTitleNode: function() {
                    return tag("div", "pf-p-16 pf-d-flex pf-align-items-center pf-justify-content-between pf-border-bottom", [tag("h2", "pf-h4 pf-my-0 pf-pr-8", dlang("site", "My cart")), tag("button", {
                        className: "pf-btn-unstyled pf-d-flex",
                        attr: {
                            type: "button"
                        },
                        onclick: this._onClose.bind(this)
                    }, [tag("i", {
                        className: "pf-i pf-i-close pf-i-24 pf-text-gray",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }), tag("span", "sr-only", dlang("site", "Close my cart"))])])
                },
                _onOpen: function() {
                    u.U.addClassName(this._dropdownNode, "pf-cart__menu--open"), document.body.classList.add("cart-menu--opened"), u.U.removeClassName(this._dropdownNode, "pf-d-none"), this._isOpen = !0, this._cartButtonNode.setAttribute("aria-expanded", "true"), this._cartButtonNode.setAttribute("aria-label", this._cartButtonAccessibleText()), this._trackPaymentMethodTest()
                },
                _onClose: function() {
                    u.U.removeClassName(this._dropdownNode, "pf-cart__menu--open"), document.body.classList.remove("cart-menu--opened"), u.U.addClassName(this._dropdownNode, "pf-d-none"), this._isOpen = !1, this._cartButtonNode.setAttribute("aria-expanded", "false"), this._cartButtonNode.setAttribute("aria-label", this._cartButtonAccessibleText())
                },
                _toggleDropdown: function() {
                    this._isOpen ? this._onClose() : this._onOpen()
                },
                _onOutsideClicked: function(t) {
                    document.getElementById(this._shoppingCartNodeId).contains(t.target) && "js--cart-close" !== t.target.id || "string" != typeof t.target.className || t.target.className.includes("pf-i-trash-can-outline") || this._onClose()
                },
                _addClickListener: function() {
                    document.body.addEventListener("click", this._onOutsideClicked)
                },
                _renderCartItemsNode: function() {
                    const t = tag("div", "pf-cart__product-wrapper");
                    return this._cartItemCount < 1 ? tag("div", "pf-bg-gray-lighter pf-p-16", [tag("img", {
                        className: "pf-mx-auto pf-d-block pf-py-8",
                        loading: "lazy",
                        height: 64,
                        src: PF.ASSETS_URL + "images/products-catalog/empty-cart.svg",
                        attr: {
                            alt: ""
                        }
                    }), tag("p", "pf-h4 pf-mb-4 text-center", dlang("site", "Your shopping cart is empty")), tag("p", "pf-text-muted pf-ui-caption pf-mb-0 text-center", dlang("site", "Check out more than {productCount} premium products in our catalog and find something amazing").replace("{productCount}", this._productCount))]) : (this._cartItem.items.forEach(function(e, o) {
                        const r = o === this._cartItemCount - 1;
                        this._buildItemNode(e, r).append(t)
                    }.bind(this)), t)
                },
                _buildItemNode: function(t, e) {
                    const o = "pf-pt-16 pf-pb-12 pf-px-16 pf-m-0" + (e ? "" : " pf-border-bottom"),
                        r = new x;
                    r.value = t.quantity, r.id = t.uniqueId, r.bulkDiscountTiers = t.priceData.bulkDiscountTiers, r.onChange = t => this._onItemQuantityChange(t.id, t.value), r.withStaticPosition = !0;
                    const n = new F(r),
                        s = tag("div", "pf-input-group pf-d-inline-block");
                    return n.append(s), tag("div", "", [c.U.getPeriodicPriceCountdownFromCartOrderItem({
                        cartOrderItem: t,
                        showBottomTriangle: !0,
                        customBlockClass: "pf-py-8",
                        justifyContentEndOnXxs: !0,
                        containerClass: "pf-cart__discount-countdown pf-ml-xs-0 pf-px-16 pf-mt-12"
                    }), tag("div", o, [this._getDiscountBadge(t), tag("div", "pf-d-flex clearfix", [tag("div", "pf-bg-white pf-cart__thumb-wrapper pf-mr-12 pf-p-0", [tag("img", {
                        className: "pf-cart__thumb pf-d-block pf-mx-auto",
                        prop: {
                            src: t.thumbUrl,
                            loading: "lazy",
                            height: 92,
                            alt: t.productName
                        }
                    })]), tag("div", "pf-w-100 pf-p-0", [tag("div", "flex-row pf-justify-content-between pf-mb-8", [tag("div", "pf-cart__product-name", [tag("span", "pf-ui-caption", t.productName)]), tag("div", "", [tag("div", "pf-cart__item-price", [i.Q.createDiscountElementFromPriceData({
                        priceData: t.priceData,
                        splitLines: !0,
                        allowTaxInclusion: !0,
                        flipLines: !0,
                        tooltipPlacement: "left"
                    })])])]), tag("div", "flex-row pf-justify-content-between", [tag("div", "pf-cart__item-count pf-d-flex", [tag("label", {
                        className: "pf-ui-caption pf-text-muted pf-mr-8 pf-my-auto text-nowrap",
                        attr: {
                            for: `input-bulk-discount-${r.id}`
                        }
                    }, [tag("span", {
                        attr: {
                            "aria-hidden": "true"
                        }
                    }, dlang("site", "Qty:")), tag("span", "sr-only", dlang("site", "Quantity for {item}").replace("{item}", t.productName))]), s]), tag("div", "pf-cart__item-delete pf-align-items-center pf-d-flex", [tag("button", {
                        className: "pf-btn-unstyled pf-d-flex",
                        attr: {
                            type: "button"
                        },
                        onclick: this._onItemDelete.bind(this, t.uniqueId)
                    }, [tag("i", {
                        className: "pf-i pf-i-trash-can-outline pf-i-24 pf-text-gray",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }), tag("span", "sr-only", dlang("site", "Remove {item} from cart").replace("{item}", t.productName))])])])])])])])
                },
                _addSubtotalTooltipListeners() {
                    const t = document.getElementById("subtotal-tooltip");
                    t && (t.addEventListener("blur", (() => {
                        $(t).tooltip("hide")
                    })), t.addEventListener("keydown", (e => {
                        "Escape" === e.key && $(t).tooltip("hide")
                    })), $(t).on("hidden.bs.tooltip", (() => {
                        $(t).data("bs.tooltip").inState = {
                            click: !1,
                            hover: !1
                        }
                    })))
                },
                _renderCartTotalNode: function() {
                    return this._subtotalNode && u.U.clearNode(this._subtotalNode), this._cartItemCount < 1 ? tag("div") : tag("div", "pf-cart__total-price", [tag("div", "pf-px-16 pf-pt-8 pf-pb-16 pf-bg-gray-lighter", [tag("div", "pf-d-flex pf-justify-content-between pf-align-items-center", [tag("div", "", [tag("span", "pf-cart__total-price", dlang("site", "Subtotal")), this._getTaxStatus(), tag("button", {
                        className: "pf-btn-unstyled pf-ml-2",
                        attr: {
                            id: "subtotal-tooltip",
                            type: "button",
                            title: dlang("site", "Final price will be determined after you enter shipping address at the checkout"),
                            "data-toggle": "tooltip",
                            "data-trigger": "click hover",
                            "aria-label": dlang("site", "More information")
                        }
                    }, [tag("i", {
                        className: "pf-i pf-i-information pf-pointer pf-i-14 pf-text-gray",
                        attr: {
                            "aria-hidden": "true"
                        }
                    })])]), tag("div", "", [tag("span", "pf-cart__total-price pf-bold pf-flex-end", [prettyMoney(this._cartTotal, this._cartItem.currency)])])])])])
                },
                _renderEstimatedShippingNode: function() {
                    return this._estimatedShippingNode && u.U.clearNode(this._estimatedShippingNode), !this._cartItem.isShippingAvailable || this._cartItemCount < 1 ? tag("div") : tag("div", "pf-px-16 pf-pt-16 pf-bg-gray-lighter pf-border-top", [tag("div", "pf-d-flex pf-justify-content-between pf-align-items-center", [tag("span", "pf-cart__total-price", dlang("site", "Estimated shipping")), this._estimatedShippingCostsNode = tag("div", {
                        className: "pf-d-flex pf-align-items-center",
                        style: "min-height: 18px; min-width: 32px;"
                    }, [this._renderEstimatedShippingCostNode()])])])
                },
                _renderEstimatedShippingCostNode: function() {
                    this._estimatedShippingCostsNode && u.U.clearNode(this._estimatedShippingCostsNode);
                    let t = prettyMoney(this._cartItem.estimatedShippingCosts, this._cartItem.currency);
                    return this._cartItem.estimatedShippingCosts || (t = "Calculated at checkout"), tag("span", {
                        id: "cart-shipping-costs",
                        className: "pf-cart__total-price pf-bold pf-flex-end"
                    }, [t])
                },
                _getTaxStatus: function() {
                    return this._cartItem.currency === a.PFItemsCurrencyItem.CURRENCY_EUR ? tag("span", "pf-cart__total-price pf-text-muted", " (" + (n.z.isTaxIncluded(this._cartItem.currency) ? dlang("site", "incl. tax") : dlang("site", "excl. tax")) + ")") : ""
                },
                _renderPaymentMethodNode: function() {
                    var t;
                    return this._cartItemCount ? 1 !== (null === (t = window.abTesting) || void 0 === t ? void 0 : t.getAbTestVariant(24)) ? tag("div") : tag("div", "pf-pb-16", [new X]) : tag("div")
                },
                _trackPaymentMethodTest: function() {
                    this._cartItemCount && window.abTesting && window.abTesting.isTestAssigned(24) && window.abTesting.trackAbTest(24)
                },
                _renderButtonNode: function() {
                    return this._cartItemCount ? tag("a", {
                        className: "pf-btn pf-btn-primary pf-btn-block pf-text-white",
                        href: PF.Customer.leadScoringProfile ? langUrl("/dashboard/order/update") : langUrl("/dashboard/order/update?ref=b2c")
                    }, dlang("site", "Continue to checkout")) : tag("a", {
                        className: "pf-btn pf-btn-primary pf-btn-block pf-text-white",
                        href: langUrl("/custom-products")
                    }, dlang("site", "Explore products"))
                },
                _getDiscountedTotal: function() {
                    const t = this._cartItem.items.reduce((function(t, e) {
                        return t + e.priceData.discountedPrice * e.quantity
                    }), 0);
                    return n.z.addTax(this._cartItem.currency, t)
                },
                _designFilteredDataFromProduct: function(t) {
                    this._filteredDesignData = t
                },
                _sendAddToCartEvent() {
                    var t, e, o, r, n, i, s, a, c, d, l;
                    let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    if (!(u instanceof PFItemsCartOrderItem)) return;
                    const h = this._getCartTotalItemCount();
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "add_to_cart",
                        ecommerce: {
                            items: {
                                item_name: null == u || null === (t = u.dataLayerData) || void 0 === t ? void 0 : t.itemName,
                                item_id: String(null == u ? void 0 : u.productId),
                                price: null == u || null === (e = u.dataLayerData) || void 0 === e ? void 0 : e.price,
                                currency: null == u || null === (o = u.priceData) || void 0 === o ? void 0 : o.currency,
                                price_usd: null == u || null === (r = u.dataLayerData) || void 0 === r ? void 0 : r.priceUsd,
                                item_brand: null == u || null === (n = u.dataLayerData) || void 0 === n ? void 0 : n.itemBrand,
                                item_category: null == u ? void 0 : u.dataLayerData.item_category,
                                item_category2: null == u ? void 0 : u.dataLayerData.item_category2,
                                item_category3: null == u ? void 0 : u.dataLayerData.item_category3,
                                item_category4: null == u ? void 0 : u.dataLayerData.item_category4,
                                item_variant_id: String(null == u ? void 0 : u.variantId),
                                quantity: p,
                                item_variant_name: null == u ? void 0 : u.dataLayerData.itemVariantName,
                                item_variant: null == u ? void 0 : u.dataLayerData.itemVariant,
                                cart_quantity: h,
                                print_tech: null == u ? void 0 : u.dataLayerData.printTechniques,
                                print_tech_qty: null == u ? void 0 : u.dataLayerData.printTechniqueQuantity,
                                design_type: null === (i = this._filteredDesignData) || void 0 === i ? void 0 : i.designTypes,
                                design_type_quantity: null === (s = this._filteredDesignData) || void 0 === s || null === (a = s.designTypes) || void 0 === a ? void 0 : a.length,
                                design_components: null === (c = this._filteredDesignData) || void 0 === c ? void 0 : c.designComponents,
                                design_components_quantity: null === (d = this._filteredDesignData) || void 0 === d || null === (l = d.designComponents) || void 0 === l ? void 0 : l.length
                            }
                        }
                    })
                },
                _getCartTotalItemCount: function() {
                    let t = 0;
                    return this._cartItem.items.forEach((function(e) {
                        t += e.quantity
                    })), t
                }
            }, u.U.Base);
            ot._loadOrderAndDesignerTypes = async function() {
                const t = void 0 === window.PFVariantPickerPar ? Promise.all([o.e(98904), o.e(10113), o.e(68171), o.e(26387), o.e(55189)]).then(o.bind(o, 50307)) : Promise.resolve({
                        PFVariantPickerPar: window.PFVariantPickerPar
                    }),
                    e = void 0 === window.PFVariantPicker ? Promise.all([o.e(98904), o.e(10113), o.e(68171), o.e(26387), o.e(55189)]).then(o.bind(o, 43956)) : Promise.resolve({
                        PFVariantPicker: window.PFVariantPicker
                    }),
                    r = void 0 === window.PFRepositoriesOrderRepository ? Promise.all([o.e(98904), o.e(10113), o.e(68171), o.e(26387), o.e(55189)]).then(o.bind(o, 70822)) : Promise.resolve({
                        PFRepositoriesOrderRepository: window.PFRepositoriesOrderRepository
                    }),
                    n = void 0 === window.PFItemsOrderLineItem ? Promise.all([o.e(98904), o.e(10113), o.e(68171), o.e(26387), o.e(55189)]).then(o.bind(o, 57177)) : Promise.resolve({
                        PFItemsOrderLineItem: window.PFItemsOrderLineItem
                    }),
                    [i, s, a, c] = await Promise.all([t, e, r, n]),
                    d = {
                        pickerPar: null == i ? void 0 : i.PFVariantPickerPar,
                        picker: null == s ? void 0 : s.PFVariantPicker,
                        orderRepo: null == a ? void 0 : a.PFRepositoriesOrderRepository,
                        orderLineItem: null == c ? void 0 : c.PFItemsOrderLineItem
                    };
                return ot._loadOrderAndDesignerTypes = async function() {
                    return d
                }, d
            }, ot.EVENT_ITEM_ADD = "shoppingCartItemAdd", ot.EVENT_ITEM_ADD_SUCCESSFUL = "shoppingCartItemAddSuccessful", ot.EVENT_OPEN_DESIGNER = "shoppingCartOpenDesigner", ot.EVENT_PREPARE_CART = "shoppingCartPrepare", ot.EVENT_CART_CREATED = "shoppingCartCreated", ot.EVENT_ITEM_GENERATED = "shoppingCartItemGenerated", ot.EVENT_DESIGN_TYPES_AND_COMPONENTS = "shoppingCartProductDesignTypesAndComponents", (globalThis || {}).PFShoppingCart = ot
        },
        53650: (t, e, o) => {
            o.d(e, {
                G: () => s
            });
            var r = o(6121),
                n = o(59597),
                i = o(9651);
            const s = Class({
                optionValueId: 0,
                optionId: 0,
                option: null,
                optionName: "",
                value: "",
                toArrayKeys: ["optionValueId", "optionId", "option", "optionName", "value"]
            }, n.$);
            s.fromArray = function(t) {
                var e = new s;
                return i.U.O2O(e, t), t.option && (e.option = r.C.fromArray(t.option)), e
            }, window && ((globalThis || {}).PFItemsCustomProductVariantOptionValue = s)
        },
        6121: (t, e, o) => {
            o.d(e, {
                C: () => s
            });
            var r = o(53650),
                n = o(59597),
                i = o(9651);
            const s = Class({
                optionId: 0,
                customProductId: 0,
                name: "",
                optionValuesString: "",
                optionValues: [],
                toArrayKeys: ["optionId", "customProductId", "name", "optionValues"],
                buildOptionValuesFromString: function() {
                    if (this.optionValues = [], this.optionValuesString.indexOf(",")) {
                        var t = this.optionValuesString.split(",");
                        for (var e in t) this.optionValues.push(r.G.fromArray({
                            optionId: this.optionId,
                            option: {
                                optionId: this.optionId,
                                customProductId: this.customProductId,
                                name: this.name
                            },
                            optionName: this.name,
                            value: t[e]
                        }))
                    }
                }
            }, n.$);
            s.fromArray = function(t) {
                var e = new s;
                if (i.U.O2O(e, t), t.optionValues) {
                    var o = [];
                    for (var n in e.optionValues = [], t.optionValues) {
                        var a = r.G.fromArray(t.optionValues[n]);
                        o.push(a.value), a.option = this, e.optionValues.push(a)
                    }
                    e.optionValuesString = o.join(",")
                }
                return e
            }, window && ((globalThis || {}).PFItemsCustomProductVariantOption = s)
        },
        73428: (t, e, o) => {
            o.d(e, {
                $: () => c
            });
            var r = o(53650),
                n = o(35550),
                i = o(3768),
                s = o(59597),
                a = o(9651);
            const c = Class({
                id: 0,
                customProductId: 0,
                customProduct: null,
                stockProductId: 0,
                name: "",
                sku: "",
                length: 0,
                width: 0,
                height: 0,
                weight: 0,
                originalLength: 0,
                originalWidth: 0,
                originalHeight: 0,
                originalWeight: 0,
                quantity: 0,
                availableQuantity: 0,
                urlImage: "",
                isPackaged: !1,
                retailCurrency: null,
                syncVariantRetailPriceData: null,
                additionalFee: 0,
                retailPrice: 0,
                originalRetailPrice: 0,
                currentMonthStorageFee: 0,
                temporaryFileKey: "",
                hsCode: 0,
                tempSyncVariantId: 0,
                hsCode: "",
                optionValues: [],
                locations: [],
                canDelete: null,
                toArrayKeys: ["id", "customProductId", "sku", "length", "width", "height", "weight", "originalLength", "originalWidth", "originalHeight", "originalWeight", "optionValues", "isPackaged", "additionalFee", "retailPrice", "originalRetailPrice", "temporaryFileKey", "hsCode", "urlImage", "tempSyncVariantId", "hsCode"],
                getDimensions: function() {
                    var t = new n.y;
                    return t.length = this.length, t.width = this.width, t.height = this.height, t.weight = this.weight, t
                },
                getOriginalDimensions: function() {
                    var t = new n.y;
                    return t.length = this.originalLength, t.width = this.originalWidth, t.height = this.originalHeight, t.weight = this.originalWeight, t
                },
                getKey: function() {
                    var t = [];
                    for (var e in this.optionValues) {
                        var o = this.optionValues[e];
                        t.push([o.optionName.replace(" ", "_"), o.value.replace(" ", "_")].join("_"))
                    }
                    return t.join("__")
                }
            }, s.$);
            c.fromArray = function(t) {
                var e = new c;
                if (a.U.O2O(e, t), t.customProduct && (e.customProduct = i.P.fromArray(t.customProduct)), t.optionValues)
                    for (var o in e.optionValues = [], t.optionValues) e.optionValues.push(r.G.fromArray(t.optionValues[o]));
                return e
            }, window && ((globalThis || {}).PFItemsCustomProductVariant = c)
        },
        65618: (t, e, o) => {
            o.d(e, {
                W: () => l
            });
            var r = o(9350),
                n = o(59597),
                i = o(9651);

            function s(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
                }
            }

            function a(t, e, o) {
                return (e = c(e)) in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var o = t[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var r = o.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let d = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), a(this, "itemName", ""), a(this, "itemBrand", ""), a(this, "itemVariant", ""), a(this, "itemVariantName", ""), a(this, "priceUsd", 0), a(this, "item_category", null), a(this, "item_category2", null), a(this, "item_category3", null), a(this, "item_category4", null)
                }
                var e, o, r;
                return e = t, r = [{
                    key: "fromArray",
                    value: function(t) {
                        return t = t || {}, Object.assign(new this, t)
                    }
                }], (o = null) && s(e.prototype, o), r && s(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            const l = function() {};
            l.prototype = new n.$, l.prototype.priceData = null, l.prototype.uniqueId = "", l.prototype.thumbUrl = "", l.prototype.productName = "", l.prototype.quantity = 0, l.prototype.dataLayerData = null, l.fromArray = function(t) {
                const e = new l;
                return i.U.O2O(e, t), t.priceData && (e.priceData = r.B.fromArray(t.priceData)), t.dataLayerData && (e.dataLayerData = d.fromArray(t.dataLayerData)), e
            }, l.fromOrderLineItem = function(t) {
                const e = new l;
                return e.uniqueId = t.uniqueId, e.priceData = t.priceData, e.quantity = t.quantity, e.thumbUrl = t.getImageUrl(), e.productName = t.displayName, e
            }, window && ((globalThis || {}).PFItemsCartOrderItem = l)
        },
        78039: (t, e, o) => {
            o.d(e, {
                G: () => s
            });
            var r = o(65618),
                n = o(59597),
                i = o(9651);
            const s = function() {};
            s.prototype = new n.$, s.prototype.items = null, s.prototype.totalProductCount = null, s.prototype.isShippingAvailable = !1, s.prototype.estimatedShippingCosts = null, s.fromArray = function(t) {
                const e = new s;
                return i.U.O2O(e, t), e.items = [], t.orderItems.map((t => {
                    e.items.push(r.W.fromArray(t))
                })), e
            }, s.fromOrderItem = function(t) {
                const e = new s;
                return e.items = [], t.items.map((t => {
                    e.items.push(r.W.fromOrderLineItem(t))
                })), e
            }, window && ((globalThis || {}).PFItemsCartItem = s)
        },
        3768: (t, e, o) => {
            o.d(e, {
                P: () => d
            });
            var r = o(63110),
                n = o(6121),
                i = o(73428),
                s = o(35550),
                a = o(59597),
                c = o(9651);
            const d = function() {
                this.productCategories = [], this.variants = [], this.options = []
            };
            d.prototype = new a.$, d.prototype.id = 0, d.prototype.environmentId = 0, d.prototype.name = "", d.prototype.description = "", d.prototype.sku = "", d.prototype.price = 0, d.prototype.fulfillmentFeeForItem = 0, d.prototype.fulfillmentFee = 0, d.prototype.displayStatus = "", d.prototype.variantId = 0, d.prototype.productId = 0, d.prototype.stockProductId = 0, d.prototype.stockQuantity = 0, d.prototype.stockAvailableQuantity = 0, d.prototype.urlImage = "", d.prototype.dimensions = null, d.prototype.originalDimensions = null, d.prototype.status = 0, d.prototype.statusName = "", d.prototype.statusClassname = "", d.prototype.displayStatus = 0, d.prototype.displayStatusName = "", d.prototype.displayStatusClassname = "", d.prototype.hsCode = "", d.prototype.createdAt = "", d.prototype.updatedAt = "", d.prototype.isPackaged = !1, d.prototype.shippingType = "", d.prototype.unitOfMeasure = 1, d.prototype.currency = "USD", d.prototype.retailPrice = 0, d.prototype.originalRetailPrice = 0, d.prototype.type = 0, d.prototype.isProductMergedWithVariant = !0, d.prototype.tempSyncProductId = 0, d.prototype.tempSyncVariantId = 0, d.prototype.productCategories = [], d.prototype.variants = [], d.prototype.options = [], d.prototype.getReadablePrice = function() {
                return prettyMoney(this.price)
            }, d.prototype.isDraft = function() {
                return this.status === d.STATUS_DRAFT
            }, d.prototype.isActive = function() {
                return this.status === d.STATUS_ACTIVE
            }, d.prototype.isSuspended = function() {
                return this.status === d.STATUS_SUSPENDED
            }, d.prototype.canEdit = function() {
                return !0
            }, d.prototype.getProductCategoryIdList = function() {
                return this.productCategories.map((function(t) {
                    return t.id
                }))
            }, d.prototype.fromArray = function(t) {
                var e = new d;
                return c.U.O2O(e, t), e
            }, d.prototype.toArrayKeys = ["id", "name", "description", "sku", "dimensions", "originalDimensions", "variants", "isPackaged", "shippingType", "unitOfMeasure", "currency", "type", "retailPrice", "originalRetailPrice", "isProductMergedWithVariant", "productCategories", "urlImage", "tempSyncProductId", "tempSyncVariantId", "hsCode"], d.fromArray = function(t) {
                var e = new d;
                if (c.U.O2O(e, t), t.dimensions && (e.dimensions = s.y.fromArray(t.dimensions)), t.originalDimensions && (e.originalDimensions = s.y.fromArray(t.originalDimensions)), t.variants)
                    for (var o in e.variants = [], t.variants) {
                        var a = i.$.fromArray(t.variants[o]);
                        a.customProduct = e, e.variants.push(a)
                    }
                if (t.options)
                    for (var l in e.options = [], t.options) e.options.push(n.C.fromArray(t.options[l]));
                if (t.productCategories)
                    for (var u in e.productCategories = [], t.productCategories) e.productCategories.push(r.d.fromArray(t.productCategories[u]));
                return e
            }, d.TYPE_CUSTOM_PRODUCT = "customProduct", d.TYPE_KEY_PRODUCT = "product", d.TYPE_KEY_PACK_IN = "pack-in", d.TYPE_KEY_CUSTOMER_PACKAGING = "packaging", d.TYPE_OUTSIDE_STOCK = 2, d.TYPE_RETURNED_ITEMS = 3, d.TYPE_TEMPORARY_RETURNED_ITEMS = 4, d.TYPE_PACK_IN = 6, d.TYPE_CUSTOMER_PACKAGING = 7, d.STATUS_CREATED = 0, d.STATUS_ACTIVE = 2, d.STATUS_SUSPENDED = 4, d.STATUS_DISAPPROVED = 5, d.STATUS_DRAFT = 6, d.DISPLAY_STATUS_IN_STOCK = 6, d.UNIT_OF_MEASURE_IMPERIAL = 1, d.UNIT_OF_MEASURE_METRIC = 2, d.MINIMUM_RETAIL_PRICE = .9, d.MAX_LENGTH_NAME = 52, window && ((globalThis || {}).PFItemsCustomProduct = d)
        },
        57177: (t, e, o) => {
            o.r(e), o.d(e, {
                PFItemsOrderLineItem: () => g
            });
            var r = o(82320),
                n = o(60124),
                i = o(14451),
                s = o(73428),
                a = (o(4473), o(9350)),
                c = o(35550),
                d = o(3768),
                l = o(59597),
                u = o(9651),
                p = o(24564),
                h = o(96486),
                f = o.n(h),
                y = o(30663),
                m = o(58232);
            const g = function() {
                this.options = {}, this.itemFiles = []
            };
            g.prototype = new l.$, g.prototype.toArrayKeys = ["itemId", "uniqueId", "orderId", "quantity", "price", "priceRetail", "syncVariantId", "productTemplateId", "productTemplateSharedKey", "externalId", "name", "technique", "variantId", "options", "itemFiles", "childItems", "shouldCreateNewDesign", "isCopy", "designInfo", "designId", "linkedCustomProductVariant", "upsellProductId"], g.prototype.itemId = 0, g.prototype.uniqueId = "", g.prototype.isReplacementFor = null, g.prototype.orderId = 0, g.prototype.quantity = 0, g.prototype.price = 0, g.prototype.priceData = null, g.prototype.regionalPriceData = null, g.prototype.priceRetail = null, g.prototype.incompleteItem = null, g.prototype.externalId = null, g.prototype.syncVariantId = null, g.prototype.name = "", g.prototype.retailPriceData = null, g.prototype.displayName = "", g.prototype.storeProductName = "", g.prototype.unavailableInSelectedBranches = !1, g.prototype.technique = "", g.prototype.embroiderySubTechnique = "", g.prototype.variantId = 0, g.prototype.productId = 0, g.prototype.isCustomProduct = !1, g.prototype.customProductTypes = [], g.prototype.customProductVariant = null, g.prototype.options = null, g.prototype.itemFiles = null, g.prototype.isLocked = null, g.prototype.itemHash = null, g.prototype.fileTypesBeingGenerated = null, g.prototype.filesBeingGenerated = !1, g.prototype.dimensions = null, g.prototype.childItems = [], g.prototype.designId = null, g.prototype.linkedCustomProductVariant = null, g.prototype.designInfo = null, g.prototype.shouldCreateNewDesign = !1, g.prototype.isCopy = !1, g.prototype.isGeneratingFilesFromDesign = !1, g.prototype.originalRetailValue = null, g.prototype.lowestRetailPrice = null, g.prototype.productTemplateId = null, g.prototype.productTemplateSharedKey = null, g.prototype.hasUnsupportedTechnique = !1, g.prototype.upsellProductId = null, g.prototype.dataLayerData = null, g.prototype.isEditable = function() {
                return !this.isLocked
            }, g.prototype.setEditable = function(t) {
                this.isLocked = null !== t ? !t : null
            }, g.prototype.getProduct = function(t) {
                return (new r.m).getCachedProductById(this.productId, t)
            }, g.prototype.getVariant = function() {
                return (new r.m).getCachedVariantById(this.variantId)
            }, g.prototype.getNotes = function() {
                return this.options && this.options.notes ? this.options.notes : ""
            }, g.prototype.hasPrintFiles = function() {
                for (var t in this.itemFiles) {
                    var e = this.itemFiles[t];
                    if (e.exists() && e.type !== y.Lw) return !0
                }
                return !1
            }, g.prototype.hasInvalidFileCount = function() {
                return !this.isCustomProduct && this.itemFiles.some((function(t) {
                    var e, o;
                    const r = null === (e = this.designInfo) || void 0 === e || null === (o = e.designPlacementIds) || void 0 === o ? void 0 : o.includes(t.type);
                    return t.exists() || t.isMockup() ? t.hasTemporaryGeneratorFile() && !r : r
                }), this)
            }, g.prototype.isMissingPrintFiles = function() {
                return !!this.hasInvalidFileCount() || this.itemFiles.length > 0 && !this.hasPrintFiles() && !this.isCustomProduct && !this.hasGeneratorDesign()
            }, g.prototype.hasAnyFile = function() {
                for (var t in this.itemFiles)
                    if (this.itemFiles[t].exists()) return !0;
                return !1
            }, g.prototype.isFileTypeBeingGenerated = function(t) {
                return this.fileTypesBeingGenerated && this.fileTypesBeingGenerated.indexOf(t) > -1
            }, g.prototype.getImageUrl = function() {
                return this.isCustomProduct ? this.customProductVariant.urlImage : this.getVariant().urlImage
            }, g.prototype.isNonEditable = function() {
                return Boolean(this.isCustomProduct || this.hasUnsupportedTechnique || this.isQuantityNonEditable())
            }, g.prototype.isQuantityNonEditable = function() {
                return Boolean(!f().isEmpty(this.fileTypesBeingGenerated) || this.filesBeingGenerated || this.productTemplateSharedKey)
            }, g.prototype.setFilesBeingGenerated = function() {
                this.filesBeingGenerated = !0
            }, g.prototype.unsetFilesBeingGenerated = function() {
                this.filesBeingGenerated = !1
            }, g.prototype.hasGeneratorDesign = function() {
                return !!this.isGeneratingFilesFromDesign || this.designId && this.hasPrintFiles()
            }, g.prototype.getCustomProductName = function() {
                return this.isCustomProduct ? this.customProductVariant.name : this.getVariant().name
            }, g.prototype.cacheItem = function() {
                (new r.m).getVariants(this.productId, (function() {}))
            }, g.prototype.hasNativeLabel = function() {
                return void 0 !== this.designData && this.designData.labelTemplateType === n.S.LABEL_NATIVE
            }, g.fromArray = function(t) {
                let e = new g;
                for (var o in t.itemFiles) {
                    var r = i.p.fromArray(t.itemFiles[o]);
                    e.itemFiles.push(r)
                }
                if (delete t.itemFiles, u.U.O2O(e, t), t.customProduct && (e.customProduct = d.P.fromArray(t.customProduct)), t.priceData && (e.priceData = a.B.fromArray(t.priceData)), t.regionalPriceData) {
                    const o = {};
                    Object.entries(t.regionalPriceData).forEach((t => {
                        let [e, r] = t;
                        return o[e] = a.B.fromArray(r)
                    })), e.regionalPriceData = o
                }
                if (t.customProductVariant && (e.customProductVariant = s.$.fromArray(t.customProductVariant)), t.childItems)
                    for (var n in t.childItems) e.childItems.push(g.fromArray(t.childItems[n]));
                return t.dimensions && (e.dimensions = c.y.fromArray(t.dimensions)), e
            }, g.prototype.updateRetailPriceData = function(t) {
                !this.originalRetailValue && this.retailPriceData.currencyRate && this.priceRetail && (this.originalRetailValue = {
                    currency: this.retailPriceData.retailCurrency,
                    value: this.priceRetail,
                    valueInternalCurrency: this.retailPriceData.currencyRate * this.priceRetail
                }), this.lowestRetailPrice = prettyNumber(p.Z.lowestRetailPrice * t.currencyRateUsd), this.retailPriceData = t, this.originalRetailValue ? this.priceRetail = t.retailCurrency !== this.originalRetailValue.currency ? Math.round(100 * this.originalRetailValue.valueInternalCurrency / t.currencyRate) / 100 : this.originalRetailValue.value : this.priceRetail = null
            }, g.prototype.hasLicensedAssetIssues = function() {
                return this.itemFiles.some((t => t.isLicensedAsset && !f().isEmpty(t.fileErrors)))
            }, g.prototype.hasInvalidFiles = function() {
                return this.itemFiles.some((t => t.fileStatus === y.qB && t.fileErrors.length > 0))
            }, g.prototype.containsProContent = function() {
                return this.itemFiles.some((t => t.containsProContent))
            }, g.prototype.containsLicensedAssets = function() {
                return this.itemFiles.some((t => t.containsLicensedAssets))
            }, g.prototype.designLayerHasType = function(t) {
                var e, o;
                let r = null === (e = this.designInfo) || void 0 === e ? void 0 : e.fileTypes;
                return "object" == typeof r && (r = Array.from(r)), null === (o = r) || void 0 === o ? void 0 : o.includes(t)
            }, g.prototype.containsUploadedFiles = function() {
                return this.designLayerHasType(m.hG.FILE)
            }, g.prototype.hasLicensedAssets = function() {
                return this.designLayerHasType(m.hG.LICENSED_ASSET)
            }, g.prototype.containsPremiumImagesType = function(t) {
                var e;
                if (!this.designInfo) return !1;
                const o = Object.values(null === (e = this.designInfo) || void 0 === e ? void 0 : e.assetTypes);
                return this.hasLicensedAssets() && o.includes(t)
            }, g.prototype.getDataLayerItemData = function() {
                var t, e, o, r, n, i, s, a, c, d, l, u, p, h, f;
                return {
                    item_name: null === (t = this.dataLayerData) || void 0 === t ? void 0 : t.itemName,
                    item_id: String(this.productId),
                    price: null === (e = this.priceData) || void 0 === e ? void 0 : e.discountedPrice,
                    currency: null === (o = this.priceData) || void 0 === o ? void 0 : o.currency,
                    price_usd: null === (r = this.dataLayerData) || void 0 === r ? void 0 : r.priceUsd,
                    item_brand: null === (n = this.dataLayerData) || void 0 === n ? void 0 : n.itemBrand,
                    item_category: null !== (i = null === (s = this.dataLayerData) || void 0 === s ? void 0 : s.item_category) && void 0 !== i ? i : null,
                    item_category2: null !== (a = null === (c = this.dataLayerData) || void 0 === c ? void 0 : c.item_category2) && void 0 !== a ? a : null,
                    item_category3: null !== (d = null === (l = this.dataLayerData) || void 0 === l ? void 0 : l.item_category3) && void 0 !== d ? d : null,
                    item_variant: null === (u = this.dataLayerData) || void 0 === u ? void 0 : u.itemVariant,
                    item_variant_name: null === (p = this.dataLayerData) || void 0 === p ? void 0 : p.itemVariantName,
                    item_variant_id: String(this.variantId),
                    quantity: this.quantity,
                    print_tech: null === (h = this.dataLayerData) || void 0 === h ? void 0 : h.printTechniques,
                    print_tech_qty: null === (f = this.dataLayerData) || void 0 === f ? void 0 : f.printTechniqueQuantity,
                    upsell_product_id: this.upsellProductId || null,
                    is_upsell_product: Boolean(this.upsellProductId),
                    product_template_shared_key: this.productTemplateSharedKey
                }
            }, window && ((globalThis || {}).PFItemsOrderLineItem = g)
        },
        63110: (t, e, o) => {
            o.d(e, {
                d: () => i
            });
            var r = o(59597),
                n = o(9651);
            const i = function() {
                this.childCategories = []
            };
            i.prototype = new r.$, i.prototype.id = 0, i.prototype.key = "", i.prototype.name = "", i.prototype.readableName = "", i.prototype.nameWithBreadcrumbs = "", i.prototype.parentCategoryId = 0, i.prototype.parentCategory = null, i.prototype.childCategories = [], i.prototype.childCategoryCount = 0, i.prototype.relationId = 0, i.prototype.relationType = 0, i.prototype.toArrayKeys = ["id", "key", "name", "readableName", "parentCategoryId"], i.prototype.hasChildren = function() {
                return this.childCategoryCount > 0
            }, i.prototype.isLastChild = function() {
                return 0 === this.childCategoryCount
            }, i.fromArray = function(t) {
                var e = new i;
                if (n.U.O2O(e, t), t.parentCategory && (e.parentCategory = i.fromArray(t.parentCategory)), t.childCategories)
                    for (var o in e.childCategories = [], t.childCategories) e.childCategories.push(i.fromArray(t.childCategories[o]));
                return e
            }, window && ((globalThis || {}).PFItemsProductCategory = i)
        },
        68247: (t, e, o) => {
            o.d(e, {
                A: () => i
            });
            var r = o(59597),
                n = o(9651);
            const i = function() {};
            i.prototype = new r.$, i.prototype.quantity = null, i.fromArray = function(t) {
                var e = new i;
                return n.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsSyncVariantCountsItem = i)
        },
        3947: (t, e, o) => {
            o.d(e, {
                b: () => i
            });
            var r = o(59597),
                n = o(9651);
            const i = function() {};
            i.prototype = new r.$, i.prototype.all = 0, i.prototype.total = 0, i.prototype.synced = 0, i.prototype.notSynced = 0, i.prototype.discontinued = 0, i.prototype.outOfStock = 0, i.prototype.woocommerceVariantWarning = 0, i.prototype.removedLicensedAssets = 0, i.prototype.ignored = 0, i.prototype.inventoryNotManagedByPrintful = 0, i.fromArray = function(t) {
                var e = new i;
                return n.U.O2O(e, t), e
            }, i.TYPE_ALL = "all", i.TYPE_SYNCED = "synced", i.TYPE_NOT_SYNCED = "notSynced", i.TYPE_IGNORED = "ignored", i.TYPE_DISCONTINUED = "discontinued", i.TYPE_OUT_OF_STOCK = "outOfStock", i.TYPE_SCHEDULE_PRICING = "scheduledPricing", i.types = {}, i.types[i.TYPE_ALL] = dclang("dashboard", "sync products", "All"), i.types[i.TYPE_SYNCED] = dclang("dashboard", "sync products", "Synced"), i.types[i.TYPE_NOT_SYNCED] = dclang("dashboard", "sync products", "Not synced"), i.types[i.TYPE_IGNORED] = dclang("dashboard", "sync products", "Ignored"), i.types[i.TYPE_DISCONTINUED] = dclang("dashboard", "sync products", "Discontinued"), i.types[i.TYPE_OUT_OF_STOCK] = dclang("dashboard", "sync products", "Out of stock"), i.types[i.TYPE_SCHEDULE_PRICING] = dclang("dashboard", "sync products", "Upcoming price change"), window && ((globalThis || {}).PFItemsSyncCountsItem = i)
        },
        27429: (t, e, o) => {
            o.d(e, {
                L: () => r
            });
            const r = Class({
                language: "",
                type: "",
                value: "",
                toArray: function() {
                    return {
                        type: this.type,
                        language: this.language,
                        value: this.value
                    }
                }
            });
            r.fromArray = function(t) {
                var e = new r;
                return e.language = t.language || "", e.type = t.type || "", e.value = t.value || "", e
            }, r.TYPE_TITLE = "title", r.TYPE_DESCRIPTION = "description", r.TYPES = [r.TYPE_TITLE, r.TYPE_DESCRIPTION], window && ((globalThis || {}).PFItemsProductDetailTranslation = r)
        },
        35185: (t, e, o) => {
            o.d(e, {
                V: () => s
            });
            var r = o(59597),
                n = o(9651);
            const i = Class({
                basePrice: null,
                additionalPrice: null,
                currency: null,
                toArrayKeys: ["basePrice", "additionalPrice", "currency"],
                getReadable: function(t) {
                    var e = parseFloat(this.basePrice),
                        o = parseFloat(this.additionalPrice);
                    o = t && o && o !== e ? prettyMoney(o, this.currency) : null;
                    var r = e = prettyMoney(e, this.currency);
                    return o && (r += " + " + o + clang("X * Quantity (as short as possible)", "*Qty")), r
                }
            }, r.$);
            i.fromArray = function(t) {
                var e = new i;
                return n.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsShippingPrice = i);
            const s = Class({
                USCost: null,
                CACost: null,
                EUCost: null,
                AUCost: null,
                WWCost: null,
                rateIdentifier: null,
                toArrayKeys: ["USCost", "CACost", "WWCost", "EUCost", "AUCost", "rateIdentifier"]
            }, r.$);
            s.fromArray = function(t) {
                var e = new s;
                return n.U.O2O(e, t), e.USCost = i.fromArray(t.USCost), e.CACost = i.fromArray(t.CACost), t.WWCost && (e.WWCost = i.fromArray(t.WWCost)), t.EUCost && (e.EUCost = i.fromArray(t.EUCost)), t.AUCost && (e.AUCost = i.fromArray(t.AUCost)), e
            }, window && ((globalThis || {}).PFItemsPushedProductShippingCost = s)
        },
        83073: (t, e, o) => {
            o.d(e, {
                S: () => a
            });
            var r = o(3947),
                n = o(68247),
                i = o(59597),
                s = o(9651);
            const a = function() {};
            a.prototype = new i.$, a.prototype.toArrayKeys = ["syncProductId", "isIgnored"], a.prototype.syncProductId = null, a.prototype.urlImage = "", a.prototype.name = "", a.prototype.externalId = "", a.prototype.isIgnored = !1, a.prototype.syncedAt = null, a.prototype.counts = null, a.prototype.variantCounts = null, a.prototype.storeId = null, a.prototype.syncChangeInfo = null, a.prototype.hasUnsupportedTechnique = !1, a.prototype.containsLicensedAssets = !1, a.prototype.containsProFeatures = !1, a.prototype.isSoldOut = function() {
                if (!this.variantCounts) return !1;
                var t = 0,
                    e = this.variantCounts || {};
                for (var o in e) {
                    var r = e[o];
                    t += parseInt(r.quantity)
                }
                return t < 1
            }, a.prototype.hasLowQty = function() {
                if (!this.variantCounts) return !1;
                var t = !1,
                    e = this.variantCounts || {};
                for (var o in e) {
                    var r = e[o];
                    parseInt(r.quantity) <= 1 && (t = !0)
                }
                return t
            }, a.fromArray = function(t) {
                var e = new a;
                if (s.U.O2O(e, t), t.counts && (e.counts = r.b.fromArray(t.counts)), t.variantCounts) {
                    var o = {};
                    for (var i in t.variantCounts) {
                        var c = t.variantCounts[i];
                        o[i] = n.A.fromArray(c)
                    }
                    e.variantCounts = o
                }
                return e
            }, window && ((globalThis || {}).PFItemsSyncProductItem = a)
        },
        25659: (t, e, o) => {
            o.d(e, {
                H: () => s
            });
            var r = o(57177),
                n = o(59597),
                i = o(9651);
            const s = function() {
                this.activeMarketplaces = [], this.inactiveMarketplaces = []
            };
            s.prototype = new n.$, s.prototype.toArrayKeys = ["syncVariantId", "variantId", "isIgnored", "orderLineItem", "customProductId", "designId", "customProductVariantId"], s.prototype.syncProductId = null, s.prototype.syncVariantId = null, s.prototype.storeId = null, s.prototype.syncVariantRetailPriceData = null, s.prototype.variantId = null, s.prototype.customProductId = null, s.prototype.customProductVariantId = null, s.prototype.name = "", s.prototype.retailPrice = null, s.prototype.urlImage = null, s.prototype.isIgnored = null, s.prototype.externalId = "", s.prototype.syncedAt = null, s.prototype.orderLineItem = null, s.prototype.isSynced = function() {
                return this.variantId > 0
            }, s.prototype.isClientStockSyncing = null, s.prototype.isDisabledInClientStock = null, s.prototype.customProduct = null, s.prototype.customProductVariant = null, s.prototype.designId = null, s.prototype.quantity = null, s.prototype.activeMarketplaces = null, s.prototype.inactiveMarketplaces = null, s.fromArray = function(t) {
                var e = new s,
                    o = new r.PFItemsOrderLineItem;
                return t.orderLineItem && (o = r.PFItemsOrderLineItem.fromArray(t.orderLineItem), delete t.orderLineItem), i.U.O2O(e, t), e.orderLineItem = o, e
            }, window && ((globalThis || {}).PFItemsSyncVariantItem = s)
        },
        33286: (t, e, o) => {
            o.d(e, {
                g: () => l
            });
            var r = o(68402),
                n = o(61133),
                i = o(83485),
                s = o(73981),
                a = o(20833),
                c = o(9651),
                d = o(47586);
            const l = Class({
                _par: null,
                __construct: function(t) {
                    this.par = new n.E, c.U.O2O(this.par, t || {}), this._process()
                },
                _process: function() {
                    var t = PF.Customer.customerId;
                    if (t || this.par.orderType != l.ORDER_TYPE_SAMPLE || (this.par.requireLogin = !0), !t && !this.par.requireLogin) return this.par.orderType = l.ORDER_TYPE_ANONYMOUS, void this._goToOrder();
                    this.par.storeId || !t ? this.par.orderType || !t ? this._goToOrder() : this._selectOrderType() : this._selectStore()
                },
                _selectStore: function() {
                    var t = new s.V;
                    t.callback = this._selectStoreCallback, t.type = i.z.CACHE_KEY_ORDER_FLOW, t.withAvailableProductId = this.par.allowStoresWithAvailableProductId || null, t.withAvailableVariantId = this.par.allowStoresWithAvailableVariantId || null;
                    var e = new s.t(t);
                    setTimeout(function() {
                        this.par.storeId || this._popup(e)
                    }.bind(this), 10)
                },
                _selectStoreCallback: function(t) {
                    this.par.storeId = t, this._process()
                },
                _selectOrderType: function() {
                    var t = {
                        callback: this._selectOrderTypeCallback,
                        storeId: this.par.storeId
                    };
                    if (this.par.storeId) {
                        var e = (new i.z).getCachedStore(this.par.storeId);
                        e && !e.isNative() && !e.supportsPrintfulProducts && e.supportsCustomProducts && (t.types = [l.ORDER_TYPE_BASIC], t.storeId = e.storeId)
                    }
                    this.par.productTemplateId && (t.types = [l.ORDER_TYPE_BASIC, l.ORDER_TYPE_SAMPLE]), this._popup(new r.t(t, this.modal))
                },
                _selectOrderTypeCallback: function(t) {
                    this.par.orderType = t, ga("send", {
                        hitType: "event",
                        eventCategory: "Button Clicks",
                        eventAction: "Order Type Button",
                        eventLabel: "Create " + t + " order button clicked"
                    }), this._process()
                },
                _popup: function(t) {
                    var e = new d.Z.Par;
                    e.title = lang("Start new order"), e.modalDialogClass = this.par.storeId ? "modal-md" : "modal-lg", e.closeOnClick = !1, e.dataTestTag = "new-order-modal", this.modal ? this.modal.swapBody(t, !0) : (this.modal = new d.Z(e), this.modal.setContent(t), this.modal.show())
                },
                _goToOrder: function() {
                    var t = new a.R(l.NEW_ORDER_URL);
                    switch (this.par.storeId && (t.query.storeId = this.par.storeId), this.par.categoryId && (t.query.categoryId = this.par.categoryId), this.par.productId && (t.query.productId = this.par.productId), this.par.productTemplateId && (t.query.productTemplateId = this.par.productTemplateId), this.par.productSize && (t.query.size = this.par.productSize), this.par.productColor && (t.query.color = this.par.productColor), this.par.productOutlineColor && (t.query.outlineColor = this.par.productOutlineColor), this.par.productEmbroiderySubTechnique && (t.query.embroiderySubTechnique = this.par.productEmbroiderySubTechnique), this.par.productTechnique && (t.query.technique = this.par.productTechnique), this.par.ref && (t.query.ref = this.par.ref), this.par.quickDesign && (t.query.quickDesign = this.par.quickDesign), this.par.openDesigner && (t.query.openDesigner = this.par.openDesigner), this.par.orderType) {
                        case l.ORDER_TYPE_ANONYMOUS:
                            t.query.ref = l.B2C_FLOW_KEY;
                            break;
                        case l.ORDER_TYPE_BASIC:
                            break;
                        case l.ORDER_TYPE_SAMPLE:
                            t.query.isSample = 1;
                            break;
                        default:
                            return void this._process()
                    }
                    location.href = t.toString()
                }
            }, c.U.Base);
            l.ORDER_TYPE_ANONYMOUS = "anonymous", l.ORDER_TYPE_BASIC = "basic", l.ORDER_TYPE_SAMPLE = "sample", l.NEW_ORDER_URL = langUrl("/dashboard/order/add-product"), l.REF_LANDING = "landing", l.B2C_FLOW_KEY = "b2c", (globalThis || {}).PFOrderBegin = l
        },
        61133: (t, e, o) => {
            o.d(e, {
                E: () => r
            });
            const r = function() {};
            r.prototype.storeId = null, r.prototype.orderType = null, r.prototype.categoryId = null, r.prototype.productId = null, r.prototype.productTemplateId = null, r.prototype.productSize = null, r.prototype.productColor = !1, r.prototype.productOutlineColor = "", r.prototype.productEmbroiderySubTechnique = "", r.prototype.productTechnique = "", r.prototype.productRegion = null, r.prototype.requireLogin = !1, r.prototype.ref = "", r.prototype.allowStoresWithAvailableProductId = null, r.prototype.allowStoresWithAvailableVariantId = null, (globalThis || {}).PFOrderBeginPar = r
        },
        68402: (t, e, o) => {
            o.d(e, {
                t: () => E
            });
            var r = o(33286),
                n = o(9651),
                i = o(61169),
                s = o(25046);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, i = void 0, "symbol" == typeof(i = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(n, "string")) ? i : String(i)), r)
                }
                var n, i
            }

            function d(t, e, o) {
                return e && c(t.prototype, e), o && c(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function l(t, e) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = f(t);
                    if (e) {
                        var n = f(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return p(this, o)
                }
            }

            function p(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return h(t)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function y(t, e, o) {
                m(t, e), e.set(t, o)
            }

            function m(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function g(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, I(t, e, "get"))
            }

            function _(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, I(t, e, "set"), o), o
            }

            function I(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var C = new WeakMap,
                v = new WeakMap,
                P = new WeakSet;
            let T = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && l(t, e)
                }(o, t);
                var e = u(o);

                function o(t) {
                    var r, n, i;
                    return a(this, o), r = e.call(this), m(n = h(r), i = P), i.add(n), y(h(r), C, {
                            writable: !0,
                            value: void 0
                        }), y(h(r), v, {
                            writable: !0,
                            value: void 0
                        }), r.node = tag("div", "order-type-picker-mke"), _(h(r), C, t),
                        function(t, e, o) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return o
                        }(h(r), P, w).call(h(r)), r
                }
                return d(o, [{
                    key: "destroy",
                    value: function() {
                        g(this, v).destroy(), _(this, v, null)
                    }
                }]), o
            }(i.p);
            async function w() {
                const t = new s.L;
                t.components = {
                    "order-type-picker": () => Promise.all([o.e(97452), o.e(50827)]).then(o.bind(o, 31752))
                }, t.template = '\n            <order-type-picker\n                :order-types="orderTypes"\n                :store-id="storeId"\n                @on-type-chosen="emitEvent(\'onTypeChosen\', $event)"\n            />\n        ', t.initialData = {
                    orderTypes: g(this, C).orderTypes,
                    storeId: g(this, C).storeId
                }, t.emitEvent = (t, e) => {
                    if ("onTypeChosen" === t) g(this, C).onTypeChosen && g(this, C).onTypeChosen(e)
                }, _(this, v, new s.Z(t)), g(this, v).append(this.node)
            }
            let b = d((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, t), this.orderTypes = e.orderTypes || [], this.storeId = e.storeId || 0, this.onTypeChosen = e.onTypeChosen || void 0
            }));
            const E = function(t, e) {
                this.callback = t.callback || function() {}, this.types = t.types || [r.g.ORDER_TYPE_BASIC, r.g.ORDER_TYPE_SAMPLE], e && this.types.length < 3 && $(e._nodeDialog).removeClass("modal-lg").addClass("modal-md");
                const o = this.callback.bind(window, r.g.ORDER_TYPE_BASIC),
                    n = this.callback.bind(window, r.g.ORDER_TYPE_SAMPLE),
                    i = new b;
                i.orderTypes = this.types, i.storeId = t.storeId, i.onTypeChosen = function(t) {
                    switch (t) {
                        case r.g.ORDER_TYPE_BASIC:
                            o();
                            break;
                        case r.g.ORDER_TYPE_SAMPLE:
                            n();
                            break;
                        default:
                            o()
                    }
                };
                const s = new T(i);
                this.node = tag("div", "order-type-picker", [s])
            };
            E.prototype = new n.U.Base, (globalThis || {}).PFOrderTypePicker = E
        },
        24564: (t, e, o) => {
            o.d(e, {
                Z: () => r
            });
            const r = {
                lowestRetailPrice: .99
            };
            (globalThis || {}).PFOrderProductsRowCommon = r
        },
        15695: (t, e, o) => {
            o.d(e, {
                k: () => n
            });
            var r = o(9651);
            const n = Class({
                all: 0,
                notAdded: 0,
                added: 0,
                failed: 0
            });
            n.fromArray = function(t) {
                var e = n;
                return r.U.O2O(e, t), e
            }, n.TYPE_ALL = "all", n.TYPE_NOT_ADDED = "notAdded", n.TYPE_ADDED = "added", n.TYPE_FAILED = "failed", n.types = {}, n.types[n.TYPE_ALL] = lang("All"), n.types[n.TYPE_NOT_ADDED] = lang("Not added"), n.types[n.TYPE_ADDED] = lang("Added"), n.types[n.TYPE_FAILED] = lang("Failed"), n.COUNT_PUSHABLE = 100, n.AMOUNT_UNKNOWN = -1, window && ((globalThis || {}).PFProductPushSyncedProductCounts = n)
        },
        71843: (t, e, o) => {
            o.d(e, {
                h: () => n
            });
            var r = o(9651);
            const n = {
                getReviewRatingStarNode(t) {
                    for (var e = t.getReviewRating(), o = [], n = 1; n <= 5; n++) {
                        var i = e.rating,
                            s = "";
                        s = parseInt(i) !== i && Math.round(i) === n ? "-half" : n > i ? "-outline" : "", o.push((0, r._)("span", {
                            className: "pf-i pf-i-18 pf-i-star" + s + " pf-mr-6 pf-text-brown",
                            attr: {
                                "aria-hidden": !0
                            }
                        }))
                    }
                    return o
                }
            };
            (globalThis || {}).PFProductReviewListHelpers = n
        },
        65131: (t, e, o) => {
            o.d(e, {
                v: () => n
            });
            var r = o(82320);
            const n = Class({
                _product: null,
                __construct: function(t) {
                    this._product = t
                },
                getTitle: function() {
                    return this._product.getFullTitle()
                },
                getImageUrl: function() {
                    return this._product.urlImage
                },
                getTechniques: function() {
                    return this._product.availableTechniques
                },
                getReviewRating: function() {
                    return this._product.reviewRating
                },
                getReviewOverview: function() {
                    return this._product.reviewOverview
                },
                getId: function() {
                    return this._product.productId
                },
                getType: function() {
                    return "product"
                },
                getVariants: function() {
                    return (new r.m).getCachedVariantsByProductId(this._product.productId)
                }
            });
            (globalThis || {}).PFProductReviewReviewableProductItem = n
        },
        70822: (t, e, o) => {
            o.r(e), o.d(e, {
                PFRepositoriesOrderRepository: () => l
            });
            var r = o(82320),
                n = o(59597),
                i = o(9651);
            const s = function() {};
            (s.prototype = new n.$).method = "", s.prototype.price = 0, s.prototype.currency = "", s.prototype.disabled = !1, s.prototype.name = "", s.fromArray = function(t) {
                var e = new s;
                return i.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsShippingMethodItem = s);
            var a = o(80464),
                c = o(26969),
                d = o(70418);
            const l = function() {
                this.productRepository = new r.m
            };
            l.PRICE_DIGITIZATION = {}, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_USD] = 6.5, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_EUR] = 5.75, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_JPY] = 700, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_GBP] = 4.95, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_CAD] = 9.6, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_AUD] = 9.25, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_SEK] = 58, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_DKK] = 41.5, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_NZD] = 9.95, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_CHF] = 6, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_MXN] = 130, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_HKD] = 50, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_SGD] = 8.95, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_NOK] = 59.95, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_PLN] = 25, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_KRW] = 7150, l.PRICE_DIGITIZATION[a.PFItemsCurrencyItem.CURRENCY_BRL] = 35, l.PRICE_DIGITIZATION_ADJUSTMENT = {}, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_USD] = 2.95, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_EUR] = 2.5, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_JPY] = 350, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_GBP] = 2.25, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_CAD] = 4.4, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_AUD] = 4.5, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_SEK] = 26.5, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_DKK] = 18.95, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_NZD] = 4.5, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_CHF] = 2.75, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_MXN] = 60, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_HKD] = 23, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_SGD] = 3.95, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_NOK] = 26, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_PLN] = 11, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_KRW] = 3250, l.PRICE_DIGITIZATION_ADJUSTMENT[a.PFItemsCurrencyItem.CURRENCY_BRL] = 15.5, l.PRICE_DIGITIZATION_TEXT_ONLY = {}, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_USD] = 3.95, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_EUR] = 3.7, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_JPY] = 450, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_GBP] = 3, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_CAD] = 5.85, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_AUD] = 5.95, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_SEK] = 35, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_DKK] = 25.5, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_NZD] = 5.95, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_CHF] = 3.7, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_MXN] = 80, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_HKD] = 31, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_SGD] = 5.5, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_NOK] = 35, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_PLN] = 15, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_KRW] = 4350, l.PRICE_DIGITIZATION_TEXT_ONLY[a.PFItemsCurrencyItem.CURRENCY_BRL] = 20.95, l.URL_REF = null, l.getRef = function(t) {
                var e = l.URL_REF;
                return null === e ? "" : (t = t || "?") + "ref=" + e
            }, l.prototype.getById = function(t, e) {
                (0, d.r)("order/get" + l.getRef(), {
                    orderId: t
                }, $.proxy(this._getByIdRe, this, e), {
                    error: t => {
                        "You need a store to access this" === t.responseJSON.message && (window.location.href = langUrl("/dashboard/default/orders"))
                    }
                })
            }, l.prototype._getByIdRe = function(t, e) {
                t(this.parseOrderResponseAndReturnOrder(e))
            }, l.prototype.parseOrderResponseAndReturnOrder = function(t) {
                return c.cg(t)
            }, l.prototype.saveDraft = function(t) {
                c.DO(t).then(t.callback)
            }, l.prototype.saveItemToAnonymousOrder = function(t) {
                c.bn(t).then((e => t.callback(e)))
            }, l.prototype.deleteItemFromAnonymousOrder = function(t) {
                c.E4(t).then((e => t.callback(e)))
            }, l.prototype.changeAnonymousOrderItemQuantity = function(t) {
                c.qH(t).then((e => t.callback(e)))
            }, l.prototype.calculateEstimatedShippingCostsForShoppingCart = function(t) {
                c.US().then((e => t.callback(e.estimatedShippingCosts)))
            }, l.prototype.calculateOrderEstimatedShippingCosts = function() {
                (0, d.r)("order/calculate-estimated-shipping-costs")
            }, l.prototype.saveRecipientAndGetRates = function(t) {
                var e = t.orderItem;
                (0, d.r)("order/save-recipient-get-rates" + l.getRef(), {
                    orderId: e.orderId,
                    displayShipping: e.displayShipping,
                    identity: e.identity,
                    saveRecipient: t.saveRecipient ? 1 : 0,
                    recipient: e.recipient.toArray()
                }, this._saveRecipientAndGetRatesRe.bind(this, t.callback))
            }, l.prototype.saveOnlyRecipient = function(t) {
                var e = t.orderItem;
                (0, d.r)("order/save-only-recipient" + l.getRef(), {
                    orderId: e.orderId,
                    recipient: e.recipient.toArray()
                })
            }, l.prototype._saveRecipientAndGetRatesRe = function(t, e) {
                var o = [];
                for (var r in e.rates) o.push(s.fromArray(e.rates[r]));
                t(o, e.errors, e.baseBreakdownData, e.handling, e.hasCatalogPriceDiff, e.customsNotificationText, e.hasOutsourcedBranch, e.showShippingWarning, e.ukVatCustomsWarning, e.showAddressValidationWarning)
            }, l.prototype.removeIncompleteItem = function(t, e) {
                e = e || function() {}, (0, d.r)("order/remove-incomplete" + l.getRef(), {
                    incompleteItemId: t.incompleteItemId,
                    orderId: t.orderId
                }, e)
            }, l.prototype.setShippingMethod = function(t, e, o) {
                (0, d.r)("order/set-handling" + l.getRef(), {
                    orderId: t,
                    handling: e
                }, $.proxy(this._setShippingMethodRe, this, o))
            }, l.prototype._setShippingMethodRe = function(t, e) {
                e.success ? t(e.baseBreakdownData, e.hasCatalogPriceDiff) : alert("Sorry, error occurred, please try again!")
            }, l.prototype.prepareForReview = function(t, e, o, r) {
                (0, d.r)("order/prepare-for-review", {
                    orderId: t.orderId,
                    isAnonymous: e ? 1 : 0
                }, $.proxy(this._prepareForReviewRe, this, o, r))
            }, l.prototype._prepareForReviewRe = function(t, e, o) {
                o.error ? e(o.error) : t(o.redirectUrl)
            }, l.prototype.toggleSample = function(t, e, o) {
                (0, d.r)("order/set-sample", {
                    orderId: t.orderId,
                    setSample: t.isSample ? 0 : 1
                }, $.proxy(this._setSampleRe, this, e, o))
            }, l.prototype._setSampleRe = function(t, e, o) {
                !o.error && o.success ? t(o.isSample) : e(e(o.error || "Failed to change order to sample order"))
            }, l.prototype.forceBranchForWarehouse = function(t, e, o, r) {
                (0, d.r)("order/force-branch-for-warehouse", {
                    orderId: t.orderId,
                    branchId: e.id
                }, $.proxy(this._forceBranchForWarehouseRe, this, o, r))
            }, l.prototype._forceBranchForWarehouseRe = function(t, e, o) {
                o.error ? e(o.error || dlang("warehouse", "Failed to select location for storing order in warehouse")) : t(o)
            }, l.prototype.saveAddressesFlag = function(t) {
                var e = t.orderItem;
                (0, d.r)("order/save-address-flag" + l.getRef(), {
                    orderId: e.orderId,
                    saveAddress: t.saveAddress ? 1 : 0
                })
            }, (globalThis || {}).PFRepositoriesOrderRepository = l
        },
        83485: (t, e, o) => {
            o.d(e, {
                z: () => u
            });
            var r = o(35185),
                n = o(59597),
                i = o(9651);
            const s = function() {};
            (s.prototype = new n.$).id = null, s.prototype.title = null, s.fromArray = function(t) {
                var e = new s;
                return i.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsIntegrationStoreTaxRule = s);
            const a = function() {};
            (a.prototype = new n.$).categoryId = null, a.prototype.title = null, a.fromArray = function(t) {
                var e = new a;
                return i.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsIntegrationCategoryItem = a);
            var c = o(62207),
                d = o(67148),
                l = o(70418);
            const u = function() {};
            u.ANONYMOUS_STORE_ID = -1, u.callbacksQueue = [], u.isLoading = !1, u.processQueue = function(t) {
                return u.isLoading = !1, u.callbacksQueue.forEach(function(e) {
                    e(t)
                }.bind(this))
            }, u.prototype.cacheStore = function(t) {
                d.Dt[t.storeId] = t
            }, u.prototype.getCachedStore = function(t) {
                return d.Dt[t] ? d.Dt[t] : (console.error("Store not cached: " + t), new c.t)
            }, u.prototype.getFirstCachedStoreId = function() {
                return Object.keys(d.Dt).slice().shift()
            }, u.prototype.get = function(t) {
                (0, d.r8)().then(t)
            }, u.prototype.getFirstId = function(t) {
                var e = this.getFirstCachedStoreId();
                e ? t(e) : u.isLoading ? this.addToQueue(t) : (u.isLoading = !0, this.search(!1, function(e) {
                    var o = u.ANONYMOUS_STORE_ID;
                    if (e.length) {
                        var r = e.slice().shift();
                        this.cacheStore(r), o = r.id ? r.id : r.storeId
                    }
                    t(o), u.processQueue(o)
                }.bind(this)))
            }, u.prototype.addToQueue = function(t) {
                u.callbacksQueue.push(t)
            }, u.prototype.getStoresWithPrintFiles = function(t) {
                this.search(u.CACHE_KEY_WITH_PRINT_FILES, t)
            }, u.prototype.getForIncompleteItemSync = function(t, e) {
                (0, d._J)(t).then(e)
            }, u.prototype.search = function(t, e) {
                (0, d.YL)(t).then(e)
            }, u.prototype.getById = function(t, e) {
                this.get($.proxy((function(o) {
                    for (var r in o) {
                        var n = o[r];
                        if (n.storeId === t) return void e(n)
                    }
                    e(null)
                }), this))
            }, u.prototype.createAnonymous = function(t, e) {
                (0, d.ck)(t).then(e)
            }, u.prototype.create = function(t, e, o, r) {
                (0, d.Ue)(t, e, o).then(r)
            }, u.prototype.cacheStoresByKey = function(t, e) {
                for (var o in d.aR[t] = [], e) {
                    var r = c.t.fromArray(e[o]);
                    d.aR[t].push(r), d.Dt[r.storeId] = r
                }
            }, u.prototype.hasProductPushPermission = function(t, e) {
                null === u.pushPermissionCacheResponse ? (0, l.r)("store/get-product-push-permission", {
                    storeId: t
                }, $.proxy(this.hasProductPushPermissionRe, this, e)) : this.hasProductPushPermissionRe(e, u.pushPermissionCacheResponse)
            }, u.prototype.hasProductPushPermissionRe = function(t, e) {
                u.pushPermissionCacheResponse = e, t(e.hasProductPushPermission, e.authorizationUrl)
            }, u.prototype.getProductPushCategories = function(t, e, o) {
                u.pushCategoryCacheResponse[t] ? e(u.pushCategoryCacheResponse[t]) : (0, l.r)("store/get-product-push-categories", {
                    storeId: t
                }, $.proxy(this.getProductPushCategoriesRe, this, t, e), {
                    error: o
                })
            }, u.prototype.getTaxRules = function(t, e, o) {
                u.taxRuleCacheResponse[t] ? e(u.taxRuleCacheResponse[t]) : (0, l.r)("store/get-tax-rules", {
                    storeId: t
                }, this.getTaxRulesRe.bind(this, t, e), {
                    error: o
                })
            }, u.prototype.getProductPushCategoriesRe = function(t, e, o) {
                var r = [];
                for (var n in o.categories) r.push(a.fromArray(o.categories[n]));
                u.pushCategoryCacheResponse[t] = r, e(r)
            }, u.prototype.getTaxRulesRe = function(t, e, o) {
                var r = [];
                for (var n in o.rules) r.push(s.fromArray(o.rules[n]));
                u.taxRuleCacheResponse[t] = r, e(r)
            }, u.prototype.getSelectedShippingCost = function(t, e, o) {
                var n = t.storeId;
                if (u.storeShippingCostCacheResponse[n]) e(u.storeShippingCostCacheResponse[n]);
                else {
                    var i = {
                        sizes: t.sizes,
                        colors: t.colors,
                        productId: t.productId,
                        customProductId: t.customProductId
                    };
                    (0, l.r)("store/get-selected-shipping-cost", {
                        storeId: t.storeId,
                        params: {
                            usedVariantData: i
                        }
                    }, (function(t) {
                        var o = t.cost,
                            n = o ? r.V.fromArray(o) : null;
                        e(n)
                    }), {
                        error: o
                    })
                }
            }, u.prototype.getStoreShippingProfiles = function(t, e, o) {
                var r = t.storeId;
                if (u.storeShippingProfileCacheResponse[r]) e(u.storeShippingProfileCacheResponse[r]);
                else {
                    var n = {
                        sizes: t.sizes,
                        colors: t.colors,
                        productId: t.productId,
                        customProductId: t.customProductId
                    };
                    (0, l.r)("store/get-store-shipping-profiles", {
                        storeId: t.storeId,
                        params: {
                            usedVariantData: n
                        }
                    }, e, {
                        error: o
                    })
                }
            }, u.prototype.dismissPopover = function(t, e) {
                (0, l.r)("store-settings/dismiss-intro-popover", {
                    popoverId: e
                }), t && i.U.removeNode(t)
            }, u.pushPermissionCacheResponse = null, u.pushCategoryCacheResponse = {}, u.taxRuleCacheResponse = {}, u.storeShippingProfileCacheResponse = {}, u.storeShippingCostCacheResponse = {}, u.CACHE_KEY_ALL = "all", u.CACHE_KEY_WITH_PRINT_FILES = "withPrintFiles", u.CACHE_KEY_WITH_ENABLED_PRINTFUL_PUSH = "withEnabledPrintfulPush", u.CACHE_KEY_SYNCED_INTEGRATIONS = "syncedIntegrations", u.CACHE_KEY_SYNCED_OUT_OF_STOCK = "syncedOutOfStock", u.CACHE_KEY_SYNCED_FOR_INCOMPLETE_ITEM_SYNC = "forIncompleteItemSync", u.CACHE_KEY_ORDER_FLOW = "forOrderFlow", (globalThis || {}).PFRepositoriesStoreRepository = u
        },
        22691: (t, e, o) => {
            o.d(e, {
                T: () => T
            });
            var r = o(82320),
                n = o(9084),
                i = o(27429);
            const s = function() {
                this.productTitle = "", this.descriptionChunks = [], this.descriptionChunkCount = 0, this.translationLanguageCount = null, this.translations = {}, this.sizeGuideExists = !1, this.addTranslationChunk = function(t, e, o, r) {
                    void 0 === this.translations[t] && (this.translations[t] = this._createLocaleObject()), this.translations[t].descriptionChunks[e] = o, this.translations[t].descriptionChunkCount = r
                }, this._createLocaleObject = function() {
                    return {
                        title: "",
                        descriptionChunks: [],
                        descriptionChunkCount: 0
                    }
                }, this.addTranslationTitle = function(t, e) {
                    void 0 === this.translations[t] && (this.translations[t] = this._createLocaleObject()), this.translations[t].title = e
                }, this.isAllTranslationsLoaded = function() {
                    if (0 === this.translationLanguageCount) return !0;
                    if (this.translationLanguageCount !== Object.keys(this.translations).length) return !1;
                    var t = !0;
                    for (var e in this.translations) {
                        var o = this.translations[e];
                        if (o.descriptionChunks.length !== o.descriptionChunkCount) {
                            t = !1;
                            break
                        }
                    }
                    return t
                }, this.isAllDescriptionChunksLoaded = function() {
                    return this.descriptionChunkCount && this.loadedChunkCount() === this.descriptionChunkCount
                }, this.loadedChunkCount = function() {
                    return this.descriptionChunks.filter((function(t) {
                        return null != t
                    })).length
                }, this.getDescription = function() {
                    return this.descriptionChunks.join("")
                }, this.getTranslations = function() {
                    var t = [];
                    for (var e in this.translations) {
                        var o = this.translations[e];
                        t.push(i.L.fromArray({
                            language: e,
                            type: i.L.TYPE_TITLE,
                            value: o.title
                        })), t.push(i.L.fromArray({
                            language: e,
                            type: i.L.TYPE_DESCRIPTION,
                            value: o.descriptionChunks.join("")
                        }))
                    }
                    return t
                }
            };
            (globalThis || {}).PFRepositoriesSyncRepositoryLoadState = s;
            var a = o(9651);
            const c = Class({
                added: [],
                failed: []
            });
            c.fromArray = function(t) {
                var e = c;
                return a.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFProductPushSyncedProductIds = c);
            var d = o(15695),
                l = o(25659),
                u = o(59597);
            const p = function() {
                this.items = []
            };
            (p.prototype = new u.$).page = 0, p.prototype.pages = 0, p.prototype.total = 0, p.prototype.items = null, p.fromArray = function(t) {
                var e = new p;
                return a.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsSyncProductList = p);
            var h = o(83073),
                f = o(3947),
                y = o(14451);
            const m = Class({
                toArrayKeys: ["generatorDesignId", "newItemFile", "oldItemFile"],
                syncVariants: [],
                newItemFile: null,
                oldItemFile: null,
                generatorDesignId: null,
                toArray: function() {
                    return {
                        newItemFile: this.newItemFile.toArray(),
                        oldItemFile: this.oldItemFile.toArray(),
                        generatorDesignId: this.generatorDesignId,
                        syncVariantIds: this.syncVariants.map((function(t) {
                            return t.syncVariantId
                        }))
                    }
                }
            }, u.$);
            m.fromArray = function(t) {
                var e = new m,
                    o = t.syncVariants;
                for (var r in delete t.syncVariants, a.U.O2O(e, t), o) e.syncVariants.push(l.H.fromArray(o[r]));
                return e.newItemFile = y.p.fromArray(t.newItemFile), e.oldItemFile = y.p.fromArray(t.oldItemFile), e
            }, window && ((globalThis || {}).PFItemsSyncBatchUpdatePair = m);
            var g = o(68247),
                _ = o(58334),
                I = o(4473),
                C = o(5532),
                v = o(60946),
                P = o(70418);
            const T = function() {};
            T._syncVariantCache = {}, T.LOAD_FAILED = 0, T.LOAD_SUCCESSFUL = 1, T.LOAD_IN_PROGRESS = 2, T._syncProductCache = {}, T._descriptionLoadState = null, T.prototype._currency = null, T.prototype.getCounts = function(t, e) {
                T.INITIAL_REQUEST = T.INITIAL_REQUEST || (new Date).getTime(), (0, P.r)("sync/counts?firstReqTime=" + T.INITIAL_REQUEST, {
                    storeId: t
                }, $.proxy(this.getCountsRe, this, e))
            }, T.prototype.getCountsRe = function(t, e) {
                t(f.b.fromArray(e.counts))
            }, T.prototype.getSyncedCounts = function(t, e, o) {
                (0, P.r)("sync/synced-product-counts", {
                    sourceStoreId: t,
                    targetStoreId: e
                }, this._getSyncedCountsRe.bind(this, o))
            }, T.prototype._getSyncedCountsRe = function(t, e) {
                t(d.k.fromArray(e.counts), c.fromArray(e.products))
            }, T.prototype.getSyncProducts = function(t) {
                (0, P.r)("sync/products", {
                    storeId: t.storeId,
                    syncProductType: t.syncProductType,
                    search: t.search,
                    page: t.page,
                    perPage: t.perPage,
                    searchInAll: t.searchInAll,
                    isSampleOrder: t.isSampleOrder || !1
                }, $.proxy(this.getSyncProductsRe, this, t.callback))
            }, T.prototype.getSyncedProducts = function(t) {
                (0, P.r)("sync/synced-products", {
                    storeId: t.storeId,
                    targetStoreId: t.targetStoreId,
                    syncedProductType: t.syncedProductType,
                    search: t.search,
                    page: t.page,
                    perPage: t.perPage
                }, $.proxy(this.getSyncProductsRe, this, t.callback))
            }, T.prototype.getSyncProductsRe = function(t, e) {
                var o = e.syncProducts,
                    r = e.syncProductCounts,
                    n = e.syncProductVariantCounts,
                    i = new p;
                for (var s in i.page = o.page, i.pages = o.pages, i.total = o.total, o.items) {
                    var a = h.S.fromArray(o.items[s]),
                        c = a.syncProductId;
                    a.counts = f.b.fromArray(r[c]);
                    var d = {};
                    for (var l in n[c]) {
                        var u = n[c][l];
                        d[l] = g.A.fromArray(u)
                    }
                    a.variantCounts = d, i.items.push(a), this.cacheSyncProduct(a)
                }
                t(i)
            }, T.prototype.getSyncVariants = function(t, e, o, r) {
                (0, P.r)("sync/variants", {
                    syncProductId: t,
                    syncedOnly: o ? 1 : 0,
                    currency: this._currency,
                    currentPage: r || null
                }, $.proxy(this.getSyncVariantsRe, this, e))
            }, T.prototype.setCurrency = function(t) {
                this._currency = t
            }, T.prototype.getSyncVariantsRe = function(t, e) {
                var o, i = [];
                for (o in e.syncVariants) {
                    var s = l.H.fromArray(e.syncVariants[o]);
                    i.push(s), this.cacheSyncVariant(s)
                }
                var a = new n.O;
                for (o in e.files) a.cacheFile(C.q.fromArray(e.files[o]));
                var c = new r.m;
                for (o in e.variants) c.cacheVariant(_.O.fromArray(e.variants[o]));
                for (o in e.products) c.cacheProduct(I.W.fromArray(e.products[o]));
                t({
                    syncVariants: i,
                    changedPlacementSize: e.changedPlacementSize,
                    pagination: e.pagination
                })
            }, T.prototype.saveSyncVariant = function(t, e) {
                (0, P.r)("sync/save-variant", {
                    syncVariant: t.toArray()
                }, this.saveSyncVariantRe.bind(this, e)), t.syncedAt = moment().unix(), this.cacheSyncVariant(t)
            }, T.prototype.batchSaveSyncVariants = function(t, e) {
                var o = [];
                t.forEach(function(t) {
                    o.push(t.toArray()), t.syncedAt = moment().unix(), this.cacheSyncVariant(t)
                }.bind(this)), (0, P.r)("sync/batch-save-variants", {
                    syncVariantsList: o
                }, this.batchSaveSyncVariantsRe.bind(this, e))
            }, T.prototype.batchSaveSyncVariantsRe = function(t, e) {
                if (e.error) alert(e.error);
                else {
                    var o = new n.O,
                        r = [];
                    for (var i in e.variants)
                        if (e.variants.hasOwnProperty(i)) {
                            var s = e.variants[i];
                            for (var a in s.fileItems)
                                if (s.fileItems.hasOwnProperty(a)) {
                                    var c = s.fileItems[a];
                                    o.cacheFile(C.q.fromArray(c))
                                } var d = [];
                            for (var l in s.syncBatchUpdatePairs)
                                if (s.syncBatchUpdatePairs.hasOwnProperty(l)) {
                                    var u = s.syncBatchUpdatePairs[l];
                                    d.push(m.fromArray(u))
                                } r.push(d)
                        } t && t(r)
                }
            }, T.prototype.saveSyncVariantRe = function(t, e) {
                if (e && e.error) alert(e.error);
                else {
                    var o, r = new n.O;
                    for (o in e.fileItems) r.cacheFile(C.q.fromArray(e.fileItems[o]));
                    var i = [];
                    for (o in e.syncBatchUpdatePairs) i.push(m.fromArray(e.syncBatchUpdatePairs[o]));
                    t && t(i)
                }
            }, T.prototype.updateSyncUsedFiles = function(t, e) {
                var o = [];
                for (var r in t) o.push(t[r].toArray());
                (0, P.r)("sync/update-used-files", {
                    syncBatchUpdatePairs: o
                }, $.proxy(this.updateSyncUsedFilesRe, this, e))
            }, T.prototype.updateSyncUsedFilesRe = function(t, e) {
                t(e.filesReplaced)
            }, T.prototype.saveSyncProduct = function(t, e) {
                (0, P.r)("sync/save-product", {
                    syncProduct: t.toArray()
                }, this.saveSyncProductRe.bind(this, e)), t.syncedAt = moment().unix(), this.cacheSyncProduct(t)
            }, T.prototype.saveSyncProductRe = function(t, e) {
                if (e.error) alert(e.error);
                else {
                    var o = h.S.fromArray(e.syncProduct);
                    o.counts = f.b.fromArray(e.syncProductCounts);
                    var r = {};
                    for (var n in e.syncProductVariantCounts) {
                        var i = e.syncProductVariantCounts[n];
                        r[n] = g.A.fromArray(i)
                    }
                    o.variantCounts = r, this.cacheSyncProduct(o), t && t(o)
                }
            }, T.prototype.getCachedSyncVariant = function(t) {
                return T._syncVariantCache[t] ? T._syncVariantCache[t] : (console.error("Sync variant " + t + " was not cached"), new l.H)
            }, T.prototype.getCachedSyncProduct = function(t) {
                return T._syncProductCache[t] ? T._syncProductCache[t] : (console.error("Sync product " + t + " was not cached"), new h.S)
            }, T.prototype.cacheSyncVariant = function(t) {
                T._syncVariantCache[t.syncVariantId] = t
            }, T.prototype.cacheSyncProduct = function(t) {
                T._syncProductCache[t.syncProductId] = t
            }, T.prototype.saveAlternatives = function(t, e) {
                (0, P.r)("sync/save-alternatives", t, e)
            }, T.prototype.requestDescription = function(t, e) {
                var o = T.LOAD_SUCCESSFUL,
                    r = setTimeout((function() {
                        o = T.LOAD_FAILED, e(o)
                    }), 3e4);
                this._editDescriptionPopupCallback && (v.D.unbindStore(t.storeId, "sync", "onDescriptionLoaded", this._editDescriptionPopupCallback), delete this._editDescriptionPopupCallback), this._editDescriptionPopupCallback || (this._editDescriptionPopupCallback = this._requestDescriptionRe.bind(this, o, r, t, e), v.D.subscribeStore(t.storeId, v.D.CHANNEL_SYNC, "onDescriptionLoaded", this._editDescriptionPopupCallback)), (0, P.r)("sync/queue-description-retrieval", {
                    syncProductId: t.syncProductId
                }, (function(t) {
                    t || (clearTimeout(r), o = T.LOAD_IN_PROGRESS, e(o))
                }))
            }, T.prototype._requestDescriptionRe = function(t, e, o, r, n) {
                if (clearTimeout(e), n.syncProductId == o.syncProductId) {
                    T._descriptionLoadState || (T._descriptionLoadState = new s), !0 === n.isTranslationChunk ? (T._descriptionLoadState.addTranslationChunk(n.locale, n.chunkNumber, n.description, n.chunkCount), T._descriptionLoadState.addTranslationTitle(n.locale, n.title), T._descriptionLoadState.translationLanguageCount = n.translationCount) : (T._descriptionLoadState.descriptionChunks[n.chunkNumber] = n.description, T._descriptionLoadState.descriptionChunkCount = n.chunkCount, T._descriptionLoadState.productTitle = n.title, T._descriptionLoadState.translationLanguageCount = n.translationCount, T._descriptionLoadState.sizeGuideExists = n.sizeGuideExists);
                    var i = T._descriptionLoadState.isAllTranslationsLoaded(),
                        a = T._descriptionLoadState.isAllDescriptionChunksLoaded();
                    if (i && a) {
                        var c = T._descriptionLoadState.productTitle,
                            d = T._descriptionLoadState.getDescription(),
                            l = T._descriptionLoadState.getTranslations(),
                            u = T._descriptionLoadState.sizeGuideExists;
                        T._descriptionLoadState = null, r(t, o, c, d, u, n.hasImperialSizeGuide, n.hasMetricSizeGuide, n.canEditDescription, l)
                    }
                }
            }, T.prototype.requestNativeDescription = function(t, e) {
                var o = T.LOAD_SUCCESSFUL;
                (0, P.r)("sync/queue-native-description-retrieval", {
                    syncProductId: t.syncProductId
                }, this._requestNativeDescriptionRe.bind(this, o, t, e))
            }, T.prototype._requestNativeDescriptionRe = function(t, e, o, r) {
                if (!r) return o(t = T.LOAD_IN_PROGRESS);
                o(t, e, r.title, r.description, r.sizeGuideExists, r.hasImperialSizeGuide, r.hasMetricSizeGuide, r.canEditDescription)
            }, T.prototype.queueDescriptionEditing = function(t, e) {
                (0, P.r)("sync/queue-description-editing", {
                    data: t
                }, e)
            }, T.GetPar = function() {}, T.GetPar.prototype.storeId = null, T.GetPar.prototype.targetStoreId = null, T.GetPar.prototype.syncProductType = null, T.GetPar.prototype.syncedProductType = null, T.GetPar.prototype.search = "", T.GetPar.prototype.page = null, T.GetPar.prototype.perPage = null, T.GetPar.prototype.callback = null, T.GetPar.prototype.searchInAll = !0, T.GetPar.prototype.isSampleOrder = !1, (globalThis || {}).PFRepositoriesSyncRepository = T
        },
        40245: (t, e, o) => {
            o.d(e, {
                Vu: () => i,
                pu: () => a,
                ss: () => s
            });
            var r = o(65311),
                n = o.n(r);
            const i = function() {
                return "ontouchstart" in document.documentElement
            };
            i() && n()("body").addClass("is-touch");
            const s = function(t) {
                    return !!document.body.contains(t)
                },
                a = {
                    _getAgent: function() {
                        return navigator && navigator.userAgent ? navigator.userAgent : ""
                    },
                    isAndroid: function() {
                        return null !== this._getAgent().match(/Android/i)
                    },
                    isBlackBerry: function() {
                        return null !== this._getAgent().match(/BlackBerry/i)
                    },
                    isIOS: function() {
                        return null !== this._getAgent().match(/iPhone|iPad|iPod/i)
                    },
                    isOpera: function() {
                        return null !== this._getAgent().match(/Opera Mini/i)
                    },
                    isWindows: function() {
                        return null !== this._getAgent().match(/IEMobile/i) || null !== this._getAgent().match(/WPDesktop/i)
                    },
                    isAny: function() {
                        return this.isAndroid() || this.isIOS() || this.isBlackBerry() || this.isOpera() || this.isWindows()
                    }
                };
            (globalThis || {}).PFUtilsIsTouch = i, (globalThis || {}).PFUtilsIsInDocument = s, (globalThis || {}).PFUtilsMobile = a
        },
        9300: (t, e, o) => {
            o.r(e), o.d(e, {
                getCustomerEventProductIdContext: () => r,
                getCustomerEventStoreIdContext: () => n
            });

            function r(t) {
                return i("productId", t)
            }

            function n(t) {
                return i("storeId", t)
            }

            function i(t, e) {
                return `${t}:${e}`
            }
        },
        56106: (t, e, o) => {
            o.r(e), o.d(e, {
                addCustomerEvent: () => l,
                addDocumentEventListeners: () => p,
                findAndDeleteCustomerEventByContext: () => d,
                findCustomerEventByContext: () => c,
                initCustomerEventService: () => u,
                removeDocumentEventListeners: () => h
            });
            var r = o(12930);
            const n = "data-layer/customer-event";
            let i = [];

            function s() {
                return a(), Object.freeze(i)
            }

            function a() {
                i = i.filter((t => !t.isExpired && !t.isExceededUnloads))
            }

            function c(t) {
                const e = s();
                if (!e.length) return null;
                return e.filter((e => e.context === t)).sort(((t, e) => e.timestamp - t.timestamp)).shift() || null
            }

            function d(t) {
                const e = c(t);
                return e ? (function(t) {
                    i = i.map((e => e.id === t.id ? null : e)).filter((t => t))
                }(e), e) : null
            }

            function l(t) {
                return m(),
                    function(t) {
                        const e = new r.CustomerEvent(t);
                        return i.push(e), e
                    }(t)
            }

            function u() {
                ! function() {
                    try {
                        const t = JSON.parse(localStorage.getItem(n) || "[]");
                        !!t.length && (i = t.map((t => new r.CustomerEvent(t))), a())
                    } catch {
                        return !1
                    }
                }();
                const t = function() {
                    try {
                        return sessionStorage.getItem(y)
                    } catch {
                        return null
                    }
                }();
                t && t !== window.location.href && (i = i.map((t => (t.incrementUnloadsCount(), t)))), a(), p()
            }

            function p() {
                document.addEventListener("visibilitychange", f)
            }

            function h() {
                document.removeEventListener("visibilitychange", f)
            }

            function f() {
                "hidden" === document.visibilityState && (m(), function() {
                    try {
                        a();
                        const t = i.map((t => t.toConfig()));
                        localStorage.setItem(n, JSON.stringify(t))
                    } catch {
                        return !1
                    }
                }())
            }
            const y = "data-layer/customer-event-service/location";

            function m() {
                try {
                    sessionStorage.setItem(y, window.location.href)
                } catch {
                    return !1
                }
                return !0
            }
        },
        68569: (t, e, o) => {
            o.d(e, {
                $: () => F,
                J: () => U
            });
            var r = o(61169),
                n = o(25046),
                i = o(79442),
                s = o(9651),
                a = o(21540),
                c = o(96486),
                d = o(613),
                l = o(61756),
                u = o(58232),
                p = o(97993);

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, P(r.key), r)
                }
            }

            function y(t, e, o) {
                return e && f(t.prototype, e), o && f(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function m(t, e) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function g(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, r = C(t);
                    if (e) {
                        var n = C(this).constructor;
                        o = Reflect.construct(r, arguments, n)
                    } else o = r.apply(this, arguments);
                    return _(this, o)
                }
            }

            function _(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return I(t)
            }

            function I(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function C(t) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, C(t)
            }

            function v(t, e, o) {
                return (e = P(e)) in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function P(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var o = t[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var r = o.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function T(t, e, o) {
                w(t, e), e.set(t, o)
            }

            function w(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function b(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, N(t, e, "get"))
            }

            function E(t, e, o) {
                return function(t, e, o) {
                    if (e.set) e.set.call(t, o);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = o
                    }
                }(t, N(t, e, "set"), o), o
            }

            function N(t, e, o) {
                if (!e.has(t)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return e.get(t)
            }
            var R = new WeakMap,
                S = new WeakMap,
                O = new WeakMap,
                A = new WeakMap,
                D = new WeakMap,
                k = new WeakSet;
            let U = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && m(t, e)
                }(o, t);
                var e = g(o);

                function o(t) {
                    var r, n, i;
                    return h(this, o), r = e.call(this), w(n = I(r), i = k), i.add(n), T(I(r), R, {
                            writable: !0,
                            value: void 0
                        }), T(I(r), S, {
                            writable: !0,
                            value: void 0
                        }), T(I(r), O, {
                            writable: !0,
                            value: void 0
                        }), T(I(r), A, {
                            writable: !0,
                            value: 10
                        }), T(I(r), D, {
                            writable: !0,
                            value: 500
                        }), v(I(r), "updateModalContentClass", ((t, e) => {
                            const o = document.querySelector("#fullscreen-modal-vue .modal-content");
                            r._updateModalClassHelper(o, t, e)
                        })), v(I(r), "updateModalBodyClass", ((t, e) => {
                            const o = document.querySelector("#fullscreen-modal-vue .modal-body");
                            r._updateModalClassHelper(o, t, e)
                        })), v(I(r), "_updateModalClassHelper", ((t, e, o) => {
                            t && (null != e && e.length && t.classList.remove(...e), null != o && o.length && t.classList.add(...o))
                        })), r.node = tag("div", "fullscreen-better-modal"), E(I(r), S, t),
                        function(t, e, o) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return o
                        }(I(r), k, L).call(I(r)), r
                }
                return y(o, [{
                    key: "updateDesignerNewLayoutModalClasses",
                    value: async function() {
                        await (0, d.Tg)(d.PN) && (b(this, R).setDataProp("additionalModalClasses", "pf-modal-header-steps-height"), b(this, R).setDataProp("isNewLayoutModal", !0))
                    }
                }, {
                    key: "callEvent",
                    value: function(t, e) {
                        b(this, S)[t] && b(this, S)[t](e)
                    }
                }, {
                    key: "setTitle",
                    value: function(t) {
                        b(this, R).setDataProp("title", t)
                    }
                }, {
                    key: "setIsMockupMakerModal",
                    value: async function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const e = await (0, d.Tg)(d.PN);
                        e && b(this, R).setDataProp("isMockupMakerModal", t)
                    }
                }, {
                    key: "setBackToCatalogFunction",
                    value: function(t) {
                        b(this, R).setDataProp("backToCatalog", t)
                    }
                }, {
                    key: "getHeader",
                    value: function() {
                        var t;
                        return null === (t = b(this, R)) || void 0 === t ? void 0 : t.getRef("header")
                    }
                }, {
                    key: "getContent",
                    value: function() {
                        var t;
                        return null === (t = b(this, R)) || void 0 === t ? void 0 : t.getRef("content")
                    }
                }, {
                    key: "modalExists",
                    value: function() {
                        return !!b(this, R)
                    }
                }, {
                    key: "setContent",
                    value: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        b(this, O) || E(this, O, (0, c.debounce)(this.setContentDebounced, 250)), b(this, O).call(this, t, e, o)
                    }
                }, {
                    key: "setContentDebounced",
                    value: function(t) {
                        var e;
                        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        r > b(this, A) || (null !== (e = b(this, R)) && void 0 !== e && e.getRef("content") ? (b(this, R).setDataProp("isDesigner", o), this.appendSlot(t, "content")) : setTimeout((() => {
                            this.setContent(t, o, r + 1)
                        }), b(this, D)), this.isModalDesigner && this.updateClassesForDesignerLayout())
                    }
                }, {
                    key: "setFooterContent",
                    value: function(t) {
                        var e;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        o > 10 || (null !== (e = b(this, R)) && void 0 !== e && e.getRef("footer") ? this.appendSlot(t, "footer") : setTimeout((() => {
                            this.setFooterContent(t, o + 1)
                        }), b(this, D)))
                    }
                }, {
                    key: "appendSlot",
                    value: function(t, e) {
                        const o = b(this, R).getRef(e);
                        s.U.clearNode(o, !0), t && ("string" == typeof t && $(o).html(t), "object" == typeof t && t.append(o))
                    }
                }, {
                    key: "updateHeader",
                    value: function(t) {
                        var e;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (!t) return;
                        if (o > 10) return;
                        const r = null === (e = b(this, R)) || void 0 === e ? void 0 : e.getRef("header");
                        r ? "object" == typeof t && t.append(r) : setTimeout((() => {
                            this.updateHeader(t, o + 1)
                        }), b(this, D))
                    }
                }, {
                    key: "swapBody",
                    value: function(t, e) {
                        var o, r;
                        const n = null === (o = b(this, R)) || void 0 === o || null === (r = o.getRef("content")) || void 0 === r ? void 0 : r.children[0];
                        n && (new a.v(n, t, e).swap(), this.isModalDesigner && this.updateClassesForDesignerLayout())
                    }
                }, {
                    key: "show",
                    value: function() {
                        b(this, R).setDataProp("showFullscreenModal", !0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        b(this, R).setDataProp("showFullscreenModal", !1), l.j8(l.ye), l.j8(l.qC)
                    }
                }, {
                    key: "setSteps",
                    value: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        e > 10 || !b(this, R) || (b(this, R).getRef("steps") ? this.appendSlot(t, "steps") : setTimeout((() => {
                            this.setSteps(t, e + 1)
                        }), b(this, D)))
                    }
                }, {
                    key: "updateClassesForDesignerLayout",
                    value: function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const e = ["pf-d-flex", "pf-flex-column"],
                            o = ["pf-p-0", "pf-mt-0", "pf-mt-sm-16", "pf-mt-lg-24", "pf-flex-1", "pf-mx-0", u.Mk],
                            r = ["pf-pb-64", "pf-mb-0", "pf-mb-md-16"],
                            n = document.querySelector(".dynamic-sticky-footer--sticky");
                        n ? this.updateModalBodyClass([], r) : this.updateModalBodyClass(r, []), t ? (this.updateModalContentClass([], e), this.updateModalBodyClass([], o)) : (this.updateModalContentClass(e, []), this.updateModalBodyClass(o, []))
                    }
                }, {
                    key: "switchToNewPar",
                    value: function(t) {
                        b(this, R) && (E(this, S, t), b(this, R).updateData(t), this.isModalDesigner && this.updateClassesForDesignerLayout())
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t, e, o, r;
                        null !== (t = b(this, R)) && void 0 !== t && t.getRef("content") && s.U.removeNode(b(this, R).getRef("content")), null !== (e = b(this, R)) && void 0 !== e && e.getRef("footer") && s.U.removeNode(b(this, R).getRef("footer")), null !== (o = b(this, R)) && void 0 !== o && o.getRef("header") && s.U.removeNode(b(this, R).getRef("header")), null === (r = b(this, R)) || void 0 === r || r.destroy(), E(this, R, null)
                    }
                }, {
                    key: "remove",
                    value: function() {
                        l.j8(l.ye), l.j8(l.qC), this.destroy()
                    }
                }]), o
            }(r.p);
            async function L() {
                const t = new n.L;
                t.components = {
                    "better-modal": () => o.e(7489).then(o.bind(o, 60888)),
                    "designer-layout-header-action-buttons": () => o.e(57418).then(o.bind(o, 49065)),
                    "back-to-catalog-link": () => o.e(25293).then(o.bind(o, 69773)),
                    "mockup-type-reset": () => o.e(80480).then(o.bind(o, 68326))
                }, t.template = '\n            <better-modal\n                id="fullscreen-modal-vue"\n                :show.sync="showFullscreenModal"\n                :is-rounded="isRounded"\n                :should-show-closer="false"\n                :is-wrapper="true"\n                :size="size"\n                :classes="\'pf-modal \' + modalClasses"\n                :body-classes="bodyClasses + (isNewLayoutModal && (isDesigner || isMockupMakerModal) ? \' pf-designer-new-layout-modal\' : \'\' )"\n                :modalOptions="{ backdrop: true, keyboard: false }"\n                mount-on="body"\n                data-test="fullscreen-modal-84858586966"\n            >\n                <div slot="header" ref="header" :class="headerClasses">\n                    <div class="pf-d-flex pf-flex-wrap pf-align-items-center">\n                        <div class="order-1 basis-md-auto basis-80">\n                            <mockup-type-reset v-if="isMockupMakerModal" :is-in-designer-new-layout-header="true" />\n                            <back-to-catalog-link v-else-if="backToCatalog" :callback="backToCatalog" />\n                            <div v-else class="pf-h4 pf-text-gray-900">{{ title }}</div>\n                        </div>\n                        <div class="order-4 order-md-2 pf-width-max pf-width-md-auto pf-mt-16 pf-mt-md-0">\n                            <div ref="steps" class="pf-ml-md-40 pf-my-auto" :class="stepsClasses" />\n                        </div>\n                        <div class="order-3 text-right basis-md-auto basis-20 pf-ml-md-auto pf-d-flex pf-align-items-center">\n                            <designer-layout-header-action-buttons v-if="isDesigner || isMockupMakerModal" />\n                            <div :class="additionalModalClasses" />\n                            <div class="modal-header__close-icon pf-ml-auto">\n                                <button aria-label="Close" class="pf-i pf-i-24 pf-i-close pf-p-0" @click="emitEvent(\'onClose\', $event)">\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div slot="content" ref="content" />\n                <div slot="footer" ref="footer" />\n            </better-modal>\n        ', t.initialData = {
                    showFullscreenModal: b(this, S).showFullscreenModal,
                    headerClasses: b(this, S).headerClasses,
                    bodyClasses: b(this, S).bodyClasses,
                    modalClasses: b(this, S).modalClasses,
                    stepsClasses: b(this, S).stepsClasses,
                    isDesigner: b(this, S).isDesigner,
                    isMockupMakerModal: b(this, S).isMockupMakerModal,
                    isRounded: b(this, S).isRounded,
                    title: b(this, S).title,
                    size: b(this, S).size,
                    backToCatalog: b(this, S).backToCatalog,
                    additionalModalClasses: "",
                    isNewLayoutModal: !1
                }, t.emitEvent = this.callEvent.bind(this), t.plugins = {
                    store: (0, i.getVuex)()
                }, E(this, R, new n.Z(t)), b(this, R).append(this.node), l.on(l.He, (() => {
                    var t;
                    const e = document.getElementById(u.uT);
                    this.isModalDesigner = "true" === (null == e || null === (t = e.dataset) || void 0 === t ? void 0 : t.modalDesigner), this.updateClassesForDesignerLayout((0, p.Sn)() === u.q_.TAB_PREVIEW || (0, p.Sn)() === u.q_.TAB_3D)
                })), this.updateDesignerNewLayoutModalClasses()
            }
            let F = y((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                h(this, t), this.showFullscreenModal = e.showFullscreenModal || !1, this.title = e.title || "", this.size = e.size || "", this.headerClasses = e.headerClasses || "", this.bodyClasses = e.bodyClasses || "", this.modalClasses = e.modalClasses || "", this.stepsClasses = e.stepsClasses || "", this.isDesigner = e.isDesigner || !1, this.isMockupMakerModal = e.isMockupMakerModal || !1, this.isRounded = e.isRounded || !1, this.onClose = e.onClose, this.backToCatalog = e.backToCatalog
            }))
        },
        85243: (t, e, o) => {
            o.d(e, {
                i: () => a,
                t: () => c
            });
            var r = o(79421),
                n = o(58617),
                i = o(20833),
                s = o(96486);
            const a = () => (0, r.Z)("search/sitewide-search-reset-history"),
                c = (t, e, o) => {
                    const r = new i.R(t.url);
                    if (!r.query.q) return;
                    const a = r.toRelativeString();
                    Promise.all([(0, n.r)(`${a}&p=1`), (0, n.r)(`${a}&p=2`), (0, n.r)(`${a}&p=3`), (0, n.r)(`${a}&p=4`), (0, n.r)(`${a}&p=5`)]).then((t => {
                        let [o, r, n, i, a] = t;
                        const c = (0, s.mergeWith)({}, o.context, r.context, n.context, i.context, a.context, ((t, e) => Object.keys(t || {}).length ? t : e));
                        e(c)
                    })).catch((t => {
                        o(t)
                    }))
                }
        }
    }
]);