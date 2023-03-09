/*! License information is available at https://static.cdn.printful.com/dist-pf/67190.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [67190, 80464, 12930], {
        28091: (e, t, r) => {
            r.d(t, {
                z: () => a
            });
            var n = r(7280),
                i = r(67485),
                o = r(96794);
            const a = {
                sampleDiscountData: null,
                isSampleFlowEnabled: null,
                getDataPromise: null,
                async isFirstOrderOfferAvailable(e) {
                    const t = await this.getSampleDiscountData();
                    null === this.isSampleFlowEnabled && (this.isSampleFlowEnabled = await (0, n.d)());
                    const r = 1e3 * t.reactivatedSampleTimestamp >= Date.now();
                    return this.isSampleFlowEnabled && r && t.sampleOrdersLeft > 0 && e.canHaveSampleOrderOffer
                },
                async getTotalSampleOrders() {
                    return (await this.getSampleDiscountData()).sampleOrdersTotal
                },
                async getSampleItemLimitCount() {
                    return (await this.getSampleDiscountData()).sampleItemLimitCount
                },
                async getSampleDiscountData() {
                    return null !== this.sampleDiscountData ? this.sampleDiscountData : null !== this.getDataPromise ? (this.sampleDiscountData = await this.getDataPromise, this.sampleDiscountData) : (this.getDataPromise = (0, i.b)(), this.sampleDiscountData = await this.getDataPromise, this.sampleDiscountData)
                },
                async getSampleOrderAlertNode(e, t) {
                    if (e.isCharged) return this.getOrderChargedAlertNode();
                    if (e.isSample && e.status !== o.b.STATUS_PENDING) {
                        var r = await this.getSampleItemLimitCount();
                        return e.sampleLogEntry && e.sampleLogEntry.itemLimit > r && (r = e.sampleLogEntry.itemLimit), e.sampleErrorType ? await this.getSampleErrorAlertNode(e.sampleErrorType, r, t) : this.getSampleNoErrorsAlertNode(r, t)
                    }
                },
                getAlertNode(e, t) {
                    if (!e) return tag("div");
                    return tag("div", "alert " + (t ? "alert-danger" : "alert-warning") + " pf-mb-16 pf-p-16", [e])
                },
                getOrderChargedAlertNode() {
                    const e = dlang("orders", "You're in change order mode. Changes will not be submitted until you confirm them at review order page.");
                    return this.getAlertNode(e, !1)
                },
                getSampleNoErrorsAlertNode(e, t) {
                    const r = dnlang("orders", "This is a sample order. Please select {n} item. You can {@@}change to a basic order{@@} to add more items.", "This is a sample order. Please select {n} items or fewer. You can {@@}change to a basic order{@@} to add more items.", e).replace("{n}", e).split("{@@}").map((function(e, r) {
                        return 1 !== r ? e : tag("a", {
                            className: "pf-link",
                            onclick: t
                        }, e)
                    }));
                    return this.getAlertNode(r, !1)
                },
                async getSampleErrorAlertNode(e, t, r) {
                    let n = "";
                    if (e === o.b.SAMPLE_ORDER_ERROR_TYPE_AMOUNT_EXCEEDED) {
                        const e = await this.getTotalSampleOrders();
                        n = dnlang("orders", "You've exceeded the limit of {n} sample order this month.", "You've exceeded the limit of {n} sample orders this month.", e).replace("{n}", e.toString())
                    }
                    if (e === o.b.SAMPLE_ORDER_ERROR_TYPE_ITEM_LIMIT_EXCEEDED && (n = dnlang("orders", "You've exceeded the limit of {n} item per sample order.", "You've exceeded the limit of {n} items per sample order.", t).replace("{n}", t)), !n) return tag("div");
                    const i = tag("a", {
                            className: "pf-link",
                            onclick: r
                        }, dclang("orders", "change from sample order", "Change to basic order")),
                        a = tag("div", "", [n, " ", i]);
                    return this.getAlertNode(a, !0)
                }
            }
        },
        67485: (e, t, r) => {
            r.d(t, {
                b: () => i,
                g: () => o
            });
            var n = r(58617);
            const i = () => (0, n.r)("/rpc/customer-rpc/get-sample-discount-data"),
                o = () => (0, n.r)("/rpc/products-rpc/product-count")
        },
        64328: (e, t, r) => {
            r.d(t, {
                R: () => i
            });
            var n = r(55559);
            const i = Class({
                id: null,
                shortName: null,
                name: null,
                returnAddressId: null,
                allowedIpList: [],
                isProductionBranch: !0,
                isAttendanceEnabled: !0,
                timezone: null,
                region: null,
                address: null,
                warehousingProductTypes: [],
                getRegion: function() {
                    return 4 === this.id || 8 === this.id ? dlang("dashboard", "Europe") : lang("United States")
                }
            });
            i.fromArray = function(e) {
                var t = new i;
                return t.id = e.id, t.shortName = e.short_name, t.name = e.name, t.returnAddressId = e.return_address_id, t.isProductionBranch = 1 === e.is_production_branch, t.isAttendanceEnabled = 1 === e.is_attendance_branch, t.timezone = e.timezone, t.region = e.region, t.warehousingProductTypes = e.warehousingProductTypes, e.allowed_ip_list && (t.allowedIpList = JSON.parse(e.allowed_ip_list)), e.address && (t.address = n.t.fromArray(e.address)), t
            }, window && ((globalThis || {}).PFItemsBranch = i)
        },
        80464: (e, t, r) => {
            r.r(t), r.d(t, {
                PFItemsCurrencyItem: () => a,
                PFItemsDisplayCurrencyItem: () => o
            });
            var n = r(59597),
                i = r(9651);
            const o = function() {};
            o.prototype = new n.$, o.prototype.currency = "", o.prototype.symbol = "", o.prototype.symbolPosition = 0, o.prototype.decimalPoint = ".", o.prototype.thousandsSeparator = ",", o.prototype.currencyName = "", o.prototype.exponent = 2, o.prototype.isReal = !0, o.fromArray = function(e) {
                var t = new o;
                return i.U.O2O(t, e), t
            };
            const a = function() {};
            a.prototype = new n.$, a.CURRENCY_LOYALTY = "PLP", a.CURRENCY_USD = "USD", a.CURRENCY_EUR = "EUR", a.CURRENCY_JPY = "JPY", a.CURRENCY_GBP = "GBP", a.CURRENCY_CAD = "CAD", a.CURRENCY_AUD = "AUD", a.CURRENCY_SEK = "SEK", a.CURRENCY_DKK = "DKK", a.CURRENCY_NZD = "NZD", a.CURRENCY_CHF = "CHF", a.CURRENCY_MXN = "MXN", a.CURRENCY_HKD = "HKD", a.CURRENCY_SGD = "SGD", a.CURRENCY_NOK = "NOK", a.CURRENCY_PLN = "PLN", a.CURRENCY_KRW = "KRW", a.CURRENCY_BRL = "BRL", a.CURRENCY_SYMBOL_USD = "$", window && ((globalThis || {}).PFItemsDisplayCurrencyItem = o, (globalThis || {}).PFItemsCurrencyItem = a)
        },
        96794: (e, t, r) => {
            r.d(t, {
                b: () => l
            });
            var n = r(64328),
                i = r(59597),
                o = r(9651),
                a = r(55559);
            const l = function() {
                this.items = [], this.sampleItems = [], this.incompleteItems = [], this.gift = null, this.recipient = new a.t
            };
            l.prototype = new i.$, l.prototype.toArrayKeys = ["orderId", "storeId", "status", "currency", "isSample", "sampleErrorType", "sampleLogEntry", "identity", "displayShipping", "handling", "grandTotal", "storeInWarehouse", "forcedBranch", "retailPriceData", "allowedFulfillmentRegions", "requiresSubscription", "cartQuantity", "requiredSubscriptionTierName"], l.prototype.lowestRetailPrice = .99, l.prototype.orderId = 0, l.prototype.storeId = 0, l.prototype.store = null, l.prototype.status = "", l.prototype.currency = "", l.prototype.discountPercent = 0, l.prototype.isSample = null, l.prototype.sampleErrorType = null, l.prototype.sampleLogEntry = null, l.prototype.retailPriceData = null, l.prototype.allowedFulfillmentRegions = null, l.prototype.isCharged = null, l.prototype.identity = "", l.prototype.displayShipping = "", l.prototype.items = null, l.prototype.sampleItems = null, l.prototype.incompleteItems = null, l.prototype.recipient = null, l.prototype.handling = null, l.prototype.couponCode = "", l.prototype.isExemptDigitizationFee = !1, l.prototype.grandTotal = 0, l.prototype.storeInWarehouse = !1, l.prototype.forcedBranch = null, l.prototype.requiresSubscription = !1, l.prototype.cartQuantity = 0, l.prototype.requiredSubscriptionTierName = "", l.prototype.isEmpty = function() {
                return 0 == this.items.length
            }, l.prototype.getUrlShipping = function(e) {
                var t = "";
                return e && (t = "?ref=" + e), this.getBaseUrl() + "shipping" + t
            }, l.prototype.getUrlReview = function(e) {
                var t = "";
                return e && (t = "?ref=" + e), this.getBaseUrl() + "review" + t
            }, l.prototype.getUrlChangeSample = function() {
                return this.getBaseUrl() + "sample"
            }, l.prototype.getBaseUrl = function() {
                return langUrl("/dashboard/order/") + (this.orderId > 0 ? this.orderId + "/" : "")
            }, l.fromArray = function(e) {
                var t = new l;
                return o.U.O2O(t, e), e.forcedBranch && (t.forcedBranch = n.R.fromArray(e.forcedBranch)), t
            }, l.STATUS_DRAFT = "draft", l.STATUS_PENDING = "pending", l.SAMPLE_ORDER_ERROR_TYPE_ITEM_LIMIT_EXCEEDED = 1, l.SAMPLE_ORDER_ERROR_TYPE_AMOUNT_EXCEEDED = 2, l.prototype.isManualOrder = null, window && ((globalThis || {}).PFItemsOrderItem = l)
        },
        76229: (e, t, r) => {
            r.d(t, {
                N: () => o
            });
            var n = r(80464),
                i = r(9651);
            const o = {
                getCurrency: function(e) {
                    var t = new n.PFItemsDisplayCurrencyItem;
                    return i.U.O2O(t, PF.Currencies[e]), 0 === t.currency.length ? null : t
                },
                getCurrencySymbol: function(e) {
                    var t = o.getCurrency(e);
                    return t ? t.symbol : n.PFItemsCurrencyItem.CURRENCY_SYMBOL_USD
                }
            };
            (globalThis || {}).PFUtilsCurrency = o
        },
        30199: (e, t, r) => {
            r.d(t, {
                Q: () => d
            });
            var n = r(62627),
                i = r(23343),
                o = r(76229),
                a = r(47586),
                l = r(70418);
            const s = Class({
                _modal: null,
                _languageContext: "user settings menu",
                _currency: "",
                __construct: function(e) {
                    this._currency = e;
                    var t = this._getTaxOptionNode();
                    if (null !== t) {
                        var r = tag("form", "row", [tag("div", "form-group col-md-12 pf-mb-0", [tag("div", "taxes", [t])])]),
                            i = new a.Z.Par;
                        i.title = n.z.getTaxName(this._currency) + " " + clang("user settings menu", "settings"), i.onClose = this._onModalClose.bind(this), this._modal = new a.Z(i), this._modal.setContent(r), this._modal.setFooterContent(this._getFooterContent()), this._modal.show()
                    }
                },
                _getTaxOptionNode: function() {
                    if (!n.z.isTaxAvailable(this._currency)) return null;
                    var e = {
                            className: "pf-mr-12",
                            type: "radio",
                            value: "1",
                            name: "showPricesWithTax"
                        },
                        t = Object.assign({}, e);
                    return t.value = "0", n.z.isTaxIncluded(this._currency) ? e.checked = "checked" : t.checked = "checked", tag("div", null, [tag("input", {
                        type: "hidden",
                        name: "taxCurrency",
                        value: this._currency
                    }), tag("p", "pf-mb-16", lang("Please choose how you want to see prices")), tag("label", null, [tag("input", t), clang("tax", "Excluding {taxName}").replace("{taxName}", n.z.getTaxName(this._currency))]), tag("label", null, [tag("input", e), clang("tax", "Including {taxName}*").replace("{taxName}", n.z.getTaxName(this._currency))]), tag("div", "pf-mt-12", [tag("p", {
                        className: "pf-ui-caption text-muted pf-my-0"
                    }, [clang("tax", "*Note that {taxName} rates may vary. The final price will be calculated at checkout.").replace("{taxName}", n.z.getTaxName(this._currency))])])])
                },
                _onModalClose: function() {
                    this._modal.remove()
                },
                _getFooterContent: function() {
                    return tag("div", "pf-d-flex pf-justify-content-start", [tag("button", {
                        className: "pf-btn pf-btn-primary pf-mr-8",
                        type: "button",
                        prop: {
                            onclick: this._onApplySettings.bind(this)
                        }
                    }, lang("Apply")), tag("button", {
                        className: "pf-btn pf-btn-secondary",
                        type: "button",
                        prop: {
                            onclick: this._onModalClose.bind(this)
                        }
                    }, lang("Cancel"))])
                },
                _onApplySettings: function() {
                    var e = new FormData(this._modal.getContentNode().querySelector("form"));
                    (0, l.r)("user-settings/update-settings", e, function(e) {
                        1 === e.success ? (n.z.toggleTaxInclusion(e.currency, Boolean(e.includeTax)), this._onModalClose(), location.reload()) : alert(e.error)
                    }.bind(this), {
                        processData: !1,
                        contentType: !1
                    })
                }
            });
            window && ((globalThis || {}).PFComponentsPriceTaxInclusionModal = s);
            var c = r(9350),
                u = r(9651),
                p = r(28091);
            r(4473);
            const d = {};

            function m(e, t) {
                const r = null != t ? t : Object.keys(null == e ? void 0 : e.techniqueDiscountData)[0];
                return e && Object.keys(null == e ? void 0 : e.techniqueDiscountData).length ? r : null
            }

            function g(e, t) {
                if (null != e && e.hasSegmentedDiscount) {
                    if (t !== c.B.DISCOUNT_TYPE_CLEARANCE_PRICE) return !0;
                    Object.values(null == e ? void 0 : e.techniqueDiscountData).forEach((e => {
                        if (e.discountType !== c.B.DISCOUNT_TYPE_CLEARANCE_PRICE && null != e && e.hasSegmentedDiscount) return !0
                    }))
                }
                return !1
            }
            d.createPeriodicPriceDiscountAnnouncement = function(e, t, r) {
                var n, i;
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = null,
                    l = null,
                    s = null;
                const u = null == e ? void 0 : e.priceRange,
                    p = m(u, o);
                var d;
                p && (s = null == u ? void 0 : u.techniqueDiscountData[p], a = null === (d = s) || void 0 === d ? void 0 : d.discountType);
                const f = a && c.B.DISCOUNT_PERIODIC_TYPES.includes(a),
                    y = a && a === c.B.DISCOUNT_TYPE_CLEARANCE_PRICE;
                var h;
                p && (l = null === (h = s) || void 0 === h ? void 0 : h.discountExpiryDate);
                const _ = null !== p && s && f && (1e3 * l >= Date.now() || y);
                if (_ && o && null !== (n = s) && void 0 !== n && n.technique && (null === (i = s) || void 0 === i ? void 0 : i.technique) !== o) return "";
                if (_) {
                    const e = g(u, a);
                    return this.createPeriodicPriceBadge(t, r, l, a, e)
                }
                return ""
            }, d.createPeriodicPriceBadge = function(e, t, r, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                var o = "";
                return e && r && (o = (0, u._)("span", "pf-ml-8 pf-text-muted pf-ui-caption", lang("Valid until") + " " + prettyDate(r))), (0, u._)("div", t, [(0, u._)("span", {
                    className: "pf-badge pf-badge--primary pf-badge-rect",
                    style: {
                        position: "unset"
                    }
                }, c.B.getDiscountName(n, i).toUpperCase()), o])
            }, d.createDiscountAnnouncement = async function(e, t, r, n) {
                return await p.z.isFirstOrderOfferAvailable(e) ? (0, u._)("div", n, [(0, u._)("span", {
                    className: "pf-badge pf-badge--primary pf-badge-rect",
                    style: {
                        position: "unset"
                    }
                }, dlang("orders", "First Order Offer").toUpperCase())]) : this.createPeriodicPriceDiscountAnnouncement(e.product, r, n, t)
            }, d.createDiscountElementFromPriceRange = function(e, t, r) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = "";
                e.minPriceDiscount && (o = c.B.getDiscountAppliedText(e.minPriceDiscount.discountType));
                const a = d.createDiscountElement({
                        originalPrice: e.minOriginalPrice,
                        currentPrice: e.minPrice,
                        tooltipText: o,
                        currency: e.currency,
                        adjustmentForBasePrice: t,
                        showTaxInclusion: r,
                        returnRaw: i
                    }),
                    l = r && n.z.isTaxAvailable(e.currency) ? (0, u._)("br") : "";
                return a && e.showStartingFrom && (0, u._)("span", "", [dlang("products", "Starting from") + " ", l]).prepend(a), a
            }, d.createDiscountElementFromPriceDataArray = function(e) {
                let {
                    priceData: t,
                    basePriceAdjustment: r = 0,
                    showTaxInclusion: n = !1,
                    splitLines: i = !1,
                    allowTaxInclusion: o = !1,
                    flipLines: a = !1,
                    returnRaw: l = !1
                } = e;
                if (!t.length) return (0, u._)("span");
                let s, p, m, g, f = null;
                t.forEach((e => {
                    s = !s || e.originalPrice < s.originalPrice ? e : s, p = !p || e.originalPrice > p.originalPrice ? e : p, m = !m || e.discountedPrice < m.discountedPrice ? e : m, g = !g || e.discountedPrice > g.discountedPrice ? e : g, f = null === f || null === e.discountType || e.discountType === f ? f || e.discountType : c.B.DISCOUNT_TYPE_MULTIPLE
                }));
                const y = c.B.getDiscountAppliedText(f);
                return d.createDiscountElement({
                    originalPrice: s.originalPrice,
                    currentPrice: m.discountedPrice,
                    maxOriginalPrice: p.originalPrice,
                    maxCurrentPrice: g.discountedPrice,
                    tooltipText: y,
                    currency: s.currency,
                    adjustmentForBasePrice: r,
                    showTaxInclusion: n,
                    splitLines: i,
                    flipLines: a,
                    allowTaxInclusion: o,
                    returnRaw: l
                })
            }, d.createDiscountElementFromPriceData = function(e) {
                let {
                    priceData: t,
                    basePriceAdjustment: r = 0,
                    showTaxInclusion: n = !1,
                    splitLines: i = !1,
                    allowTaxInclusion: o = !1,
                    flipLines: a = !1,
                    tooltipPlacement: l = "top",
                    returnRaw: s = !1
                } = e, u = t.discountedPrice;
                t.basePriceDiscount > 0 && (u = t.price);
                const p = t.length ? t[0].getDisplayDiscountType() : t.getDisplayDiscountType(),
                    m = c.B.getDiscountAppliedText(p);
                return d.createDiscountElement({
                    originalPrice: t.originalPrice,
                    currentPrice: u,
                    tooltipText: m,
                    currency: t.currency,
                    adjustmentForBasePrice: r,
                    showTaxInclusion: n,
                    splitLines: i,
                    flipLines: a,
                    allowTaxInclusion: o,
                    tooltipPlacement: l,
                    returnRaw: s
                })
            }, d.getDiscountTextFromAppliedDiscountTypes = function(e) {
                var t = "";
                return e.forEach((function(e) {
                    "" != t && (t += " " + lang("and") + " "), t += c.B.getDiscountTypeText(e)
                })), "" != t && (t += " " + clang("(discount) applied", "applied")), t
            }, d.createDiscountElementFromPrices = function(e, t, r, n) {
                return this.createDiscountElement({
                    originalPrice: e,
                    currentPrice: t,
                    currency: r,
                    discountTypeId: n,
                    tooltipText: n ? c.B.getDiscountAppliedText(n) : null
                })
            }, d.createDiscountElement = function(e) {
                let t, r, {
                    originalPrice: a,
                    currentPrice: l,
                    maxOriginalPrice: p,
                    maxCurrentPrice: d,
                    tooltipText: m = "",
                    currency: g,
                    adjustmentForBasePrice: f = 0,
                    showTaxInclusion: y = !1,
                    splitLines: h = !1,
                    flipLines: _ = !1,
                    allowTaxInclusion: E = !1,
                    tooltipPlacement: C = "top",
                    returnRaw: T = !1,
                    discountTypeId: P = 0
                } = e;
                if (!l && !a) return (0, u._)("span");
                p = p === a ? null : p, d = d === l ? null : d, f && (a += f, l += f, p = p ? p + f : null, d = d ? d + f : null);
                const v = o.N.getCurrency(g);
                v ? (a = parseFloat(i.O.getDisplayValue(a, v)), l = parseFloat(i.O.getDisplayValue(l, v)), p = p ? parseFloat(i.O.getDisplayValue(p, v)) : null, d = d ? parseFloat(i.O.getDisplayValue(d, v)) : null) : (a = parseFloat(a.toFixed(2)), l = parseFloat(l.toFixed(2)), p = p ? parseFloat(p.toFixed(2)) : null, d = d ? parseFloat(d.toFixed(2)) : null), a = a === l ? null : a, p = p === d ? null : p, a !== l && P === c.B.DISCOUNT_TYPE_CUSTOM && (l = a, a = null), y = y || !1, E = y || E || !1;
                let D = "";
                a && (D = prettyMoney(E ? n.z.addTax(g, a) : a, g), p && p !== a && (D += " - " + prettyMoney(E ? n.z.addTax(g, p) : p, g)), t = {
                    tag: "span",
                    className: "original-price pf-ui-caption pf-bold pf-pr-4",
                    text: D,
                    style: {
                        textDecoration: "line-through"
                    },
                    attr: {
                        "aria-hidden": "true"
                    }
                });
                let R = "";
                void 0 !== l && (R = prettyMoney(E ? n.z.addTax(g, l) : l, g), d && d !== l && (R += " - " + prettyMoney(E ? n.z.addTax(g, d) : d, g)), r = {
                    tag: "span",
                    className: "current-price",
                    text: " " + R
                }, "" != m && (r.attr = {
                    "data-toggle": "tooltip",
                    "data-original-title": "<span>" + m + "</span>",
                    "data-placement": C,
                    "data-trigger": "hover"
                })), t && (r.className += " discounted pf-d-inline-block", r.attr = {
                    ...r.attr,
                    "aria-hidden": "true"
                });
                const b = t ? (0, u.U)(t) : null,
                    S = r ? (0, u.U)(r) : null;
                h = h || !1;
                var O = "";
                if (y && n.z.isTaxAvailable(g)) {
                    var w = "";
                    w = n.z.isTaxIncluded(g) ? clang("Tax inclusion in price", "incl. {taxName}").replace("{taxName}", n.z.getTaxName(g)) : clang("Tax inclusion in price", "excl. {taxName}").replace("{taxName}", n.z.getTaxName(g)), (O = (0, u._)(h ? "div" : "span", {
                        className: "pf-link pf-ml-4 pf-ui-caption clickable",
                        attr: {
                            role: "link",
                            tabindex: 0
                        }
                    }, [w])).addEventListener("click", (function(e) {
                        e.stopPropagation(), e.preventDefault(), new s(g)
                    }))
                }
                let N;
                return N = _ ? (0, u._)("span", "discount-container pf-bold", [S || "", b || "", t ? (0, u._)("p", "sr-only", dlang("products", "Original price: {originalPrice}. New price: {newPrice}.").replace("{originalPrice}", D).replace("{newPrice}", R)) : "", O]) : (0, u._)("span", "discount-container pf-bold", [b || "", S || "", t ? (0, u._)("p", "sr-only", dlang("products", "Original price: {originalPrice}. New price: {newPrice}.").replace("{originalPrice}", D).replace("{newPrice}", R)) : "", O]), void 0 !== l && "" != m && $(S).tooltip({
                    html: !0
                }), T ? {
                    currentPrice: l,
                    maxCurrentPrice: d,
                    originalPrice: a,
                    currency: g,
                    allowTaxInclusion: E
                } : N
            }, (globalThis || {}).PFUtilsDiscount = d
        },
        23343: (e, t, r) => {
            r.d(t, {
                O: () => a
            });
            var n = r(76229),
                i = r(11072),
                o = r(80464);
            const a = {
                getReadable: function(e, t, r) {
                    t || (t = "$"), 3 === t.length && (t += " ");
                    var n = this._parseDecimal(e, void 0, null == r || r),
                        i = this._getCurrencySymbolPrefix(t);
                    return n.negativeSign + i + t + "â€Ž" + n.formattedAmount
                },
                getReadableByCurrencyCode: function(e, t) {
                    const r = this.roundAmountForCurrencyCode(e, t),
                        i = n.N.getCurrency(t);
                    return this.getReadable(r, i.symbol)
                },
                getDecimal: function(e) {
                    var t = this._parseDecimal(e);
                    return t.negativeSign + t.formattedAmount
                },
                getDisplayValue: function(e, t) {
                    e = parseFloat(e.toString().replace(",", ""));
                    var r = this._placeDecimals(e, this._getDecimalPlaces(t));
                    return r.negativeSign + r.decimalAmount
                },
                getDisplayValueForCurrency: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    const r = this._getDisplayCurrencyObject(t),
                        n = this.roundAmountForCurrencyCode(e, r.currency);
                    return this.getDisplayValue(n, r)
                },
                roundAmountForCurrencyCode: function(e, t) {
                    const r = this.getExponentForCurrencyCode(t),
                        n = Math.pow(10, r);
                    return Math.round(e * n) / n
                },
                getDisplayCurrencyIncrementStep: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    const t = this._getDisplayCurrencyObject(e);
                    return this.getIncrementStepForCurrency(t.currency)
                },
                getIncrementStepForCurrency: function(e) {
                    const t = -1 * this.getExponentForCurrencyCode(e);
                    return Math.pow(10, t)
                },
                getExponentForCurrencyCode: function(e) {
                    var t;
                    const r = n.N.getCurrency(e);
                    return r && null !== (t = r.exponent) && void 0 !== t ? t : 2
                },
                getDisplayAmount: function(e, t, r) {
                    var n = this._getDisplayCurrencyObject(t),
                        i = n.symbol,
                        o = this._getCurrencySymbolPrefix(n.symbol),
                        a = n.symbolPosition,
                        l = this._parseDecimal(e, n, null == r || r);
                    const {
                        SYMBOL_POSITION_BEFORE: s,
                        SYMBOL_POSITION_AFTER: c
                    } = window.PF.Config.CURRENCY_CONFIG || {};
                    if (a === s) {
                        var u = i.length >= 2 ? " " : "";
                        l.formattedAmount = o + i + u + l.formattedAmount
                    }
                    return a === c && (l.formattedAmount = l.formattedAmount + o + i), l.negativeSign + l.formattedAmount
                },
                _getDisplayCurrencyObject: function(e) {
                    return e instanceof o.PFItemsDisplayCurrencyItem ? e : PF.DisplayCurrency instanceof o.PFItemsDisplayCurrencyItem ? PF.DisplayCurrency : new o.PFItemsDisplayCurrencyItem
                },
                _placeDecimals: function(e, t, r) {
                    var n = e < 0 ? "- " : "",
                        i = 100 * (e % 1).toFixed(2);
                    i = Math.abs(i), void 0 === t && (t = 2);
                    var o = 0 != (i = Math.floor(i)) ? t : 0;
                    return 0 != o || null == r || r || (o = t), {
                        negativeSign: n,
                        decimalAmount: Math.abs(e).toFixed(o)
                    }
                },
                _getDecimalPlaces: function(e) {
                    return void 0 === e ? void 0 : e.exponent
                },
                _parseDecimal: function(e, t, r) {
                    var n = this._placeDecimals(e, this._getDecimalPlaces(t), null == r || r);
                    void 0 === t && (t = this._getDisplayCurrencyObject());
                    var i = t.decimalPoint,
                        o = t.thousandsSeparator,
                        a = n.decimalAmount.toString().replace(".", i);
                    return a = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, o), {
                        negativeSign: n.negativeSign,
                        formattedAmount: a
                    }
                },
                _getCurrencySymbolPrefix: function(e) {
                    return i.A.isPtBr() && e === o.PFItemsCurrencyItem.CURRENCY_SYMBOL_USD ? "US" : ""
                },
                prettyMoney: function(e, t, r) {
                    const i = null == r || r;
                    if ("string" == typeof t) {
                        var l = n.N.getCurrency(t);
                        return l instanceof o.PFItemsDisplayCurrencyItem ? a.getDisplayAmount(e, l, i) : a.getReadable(e, t, i)
                    }
                    return a.getDisplayAmount(e, t, i)
                }
            };
            window && ((globalThis || {}).PFUtilsMoney = a)
        },
        62627: (e, t, r) => {
            r.d(t, {
                z: () => n
            });
            const n = {
                getTaxName: function(e) {
                    return this.isTaxAvailable(e) ? PF.CurrenciesTax[e].taxName : null
                },
                addTax: function(e, t) {
                    return this.isTaxAvailable(e) && this.isTaxIncluded(e) ? t * PF.CurrenciesTax[e].taxRate : t
                },
                isTaxIncluded: function(e) {
                    return !!this.isTaxAvailable(e) && PF.CurrenciesTax[e].isTaxIncluded
                },
                isTaxAvailable: function(e) {
                    return this._currencyHasSettings(e) && PF.CurrenciesTax[e].isTaxAvailable
                },
                _currencyHasSettings: function(e) {
                    var t;
                    return null === (t = PF.CurrenciesTax) || void 0 === t ? void 0 : t.hasOwnProperty(e)
                },
                toggleTaxInclusion: function(e, t) {
                    this._currencyHasSettings(e) && (PF.CurrenciesTax[e].isTaxIncluded = Boolean(t))
                }
            };
            (globalThis || {}).PFUtilsPriceTaxInclusion = n
        },
        79421: (e, t, r) => {
            var n = r(96486),
                i = r.n(n),
                o = r(93920);

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(i, "string")) ? o : String(o)), n)
                }
                var i, o
            }

            function l(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function s(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return s = function(e) {
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    var r;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return c(e, arguments, d(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), p(n, e)
                }, s(e)
            }

            function c(e, t, r) {
                return c = u() ? Reflect.construct.bind() : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && p(i, r.prototype), i
                }, c.apply(null, arguments)
            }

            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function p(e, t) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }
            let m = function(e) {
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
                }(RPCError, e);
                var t, r, n, i, o, s = (t = RPCError, r = u(), function() {
                    var e, n = d(t);
                    if (r) {
                        var i = d(this).constructor;
                        e = Reflect.construct(n, arguments, i)
                    } else e = n.apply(this, arguments);
                    return l(this, e)
                });

                function RPCError(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, RPCError), (t = s.call(this, e.statusText)).xhr = e, t
                }
                return n = RPCError, (i = [{
                    key: "getXhr",
                    value: function() {
                        return this.xhr
                    }
                }]) && a(n.prototype, i), o && a(n, o), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), RPCError
            }(s(Error));
            t.Z = function(e, t, r) {
                let {
                    isFullPath: n
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    isFullPath: !1
                };
                r = r || {}, t = t || {};
                let a = null;
                if (n) a = "/" + i().trim(e, "/");
                else {
                    let t = e.split("/"),
                        r = null,
                        n = null,
                        i = null;
                    3 === t.length ? (r = t[0], n = t[1], i = t[2]) : 2 === t.length ? (n = t[0], i = t[1]) : console.error("RPC call got strange URL: " + e), a = (r ? "/" + r : "") + "/rpc/" + n + "-rpc/" + i
                }
                return new Promise(((n, l) => {
                    let s = r.simpleRejection || !1,
                        c = r.beforeSend || null,
                        u = {
                            url: a,
                            method: "POST",
                            dataType: "json",
                            data: t,
                            success: function(t) {
                                const r = (0, o.f)(t, e);
                                n(r)
                            },
                            error: function(e) {
                                if (s) return void l(new m(e));
                                const r = parseInt(e.status + ""),
                                    n = {
                                        "X-Redirect-Error-Message": e.getResponseHeader("X-Redirect-Error-Message")
                                    };
                                (0, o.y)(r, e.responseJSON || {}, a, n, t), l(new m(e))
                            }
                        };
                    i().assign(u, r), $.ajax({
                        ...u,
                        ...r,
                        beforeSend: function(e) {
                            e.setRequestHeader("X-CSRF-Token", window.yii.getCsrfToken()), window.embeddedDesigner && e.setRequestHeader("X-Embedded-Designer", !0), c && c(e)
                        }
                    })
                }))
            }
        },
        7280: (e, t, r) => {
            r.d(t, {
                d: () => o
            });
            var n = r(79421),
                i = r(65613);
            async function o() {
                let e;
                try {
                    e = await async function(e) {
                        return await (0, n.Z)("config/get-value", {
                            configName: e
                        })
                    }("sample_order_flow_enabled")
                } catch (e) {
                    return (0, i.logError)(e), !1
                }
                return e.value
            }
        },
        12930: (e, t, r) => {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(i, "string")) ? o : String(o)), n)
                }
                var i, o
            }

            function i(e, t, r) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, r)
            }

            function o(e, t) {
                return function(e, t) {
                    if (t.get) return t.get.call(e);
                    return t.value
                }(e, l(e, t, "get"))
            }

            function a(e, t, r) {
                return function(e, t, r) {
                    if (t.set) t.set.call(e, r);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, l(e, t, "set"), r), r
            }

            function l(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            r.r(t), r.d(t, {
                CUSTOMER_EVENT_SOURCE_COLLECTION_PROMOTION_WIDGET: () => P,
                CUSTOMER_EVENT_SOURCE_CORRESPONDING_PRODUCT: () => b,
                CUSTOMER_EVENT_SOURCE_CROSS_SELL_PRODUCT_CARD: () => T,
                CUSTOMER_EVENT_SOURCE_EMAIL: () => g,
                CUSTOMER_EVENT_SOURCE_NEW_PRODUCT_WIDGET: () => R,
                CUSTOMER_EVENT_SOURCE_ORDER_VOLUME_SUGGESTION: () => E,
                CUSTOMER_EVENT_SOURCE_PRODUCT_CHALLENGES_CARD: () => D,
                CUSTOMER_EVENT_SOURCE_PRODUCT_HEADER_MENU: () => v,
                CUSTOMER_EVENT_SOURCE_PRODUCT_SUGGESTION_CATALOG_LVL1: () => y,
                CUSTOMER_EVENT_SOURCE_PRODUCT_SUGGESTION_CATALOG_LVL2: () => h,
                CUSTOMER_EVENT_SOURCE_PRODUCT_SUGGESTION_DASHBOARD_HOME: () => f,
                CUSTOMER_EVENT_SOURCE_PRODUCT_SUGGESTION_PRODUCT_INFO: () => _,
                CUSTOMER_EVENT_SOURCE_SITEWIDE_SEARCH: () => m,
                CUSTOMER_EVENT_SOURCE_STORE_LIST: () => C,
                CUSTOMER_EVENT_TRIGGER_CLICK: () => p,
                CUSTOMER_EVENT_TRIGGER_VIEW: () => d,
                CUSTOMER_EVENT_TTL_10SEC: () => u,
                CUSTOMER_EVENT_TTL_30MIN: () => c,
                CUSTOMER_EVENT_TTL_DEFAULT: () => s,
                CustomerEvent: () => F
            });
            const s = 600,
                c = 1800,
                u = 10,
                p = "click",
                d = "view",
                m = "sitewide_search",
                g = "email",
                f = "product_suggestion_dashboard_home",
                y = "product_suggestion_catalog_lvl1",
                h = "product_suggestion_catalog_lvl2",
                _ = "product_suggestion_product_info",
                E = "order_volume_suggestion",
                C = "store_list",
                T = "product_crosssell_product_card",
                P = "product_collection_promotion_widget",
                v = "product_header_menu",
                D = "product_printful_challenge_product_card",
                R = "single_product_promo_widget",
                b = "product_corresponding";
            var S = new WeakMap,
                O = new WeakMap,
                w = new WeakMap,
                N = new WeakMap,
                x = new WeakMap,
                U = new WeakMap,
                I = new WeakMap,
                A = new WeakMap;
            let F = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), i(this, S, {
                        writable: !0,
                        value: void 0
                    }), i(this, O, {
                        writable: !0,
                        value: void 0
                    }), i(this, w, {
                        writable: !0,
                        value: void 0
                    }), i(this, N, {
                        writable: !0,
                        value: void 0
                    }), i(this, x, {
                        writable: !0,
                        value: 0
                    }), i(this, U, {
                        writable: !0,
                        value: 600
                    }), i(this, I, {
                        writable: !0,
                        value: 0
                    }), i(this, A, {
                        writable: !0,
                        value: 0
                    }), a(this, S, t.id || parseInt(`${Date.now()}${Math.floor(9999*Math.random())}`)), a(this, O, t.trigger), a(this, w, t.source), a(this, N, t.context), a(this, x, t.timestamp || Date.now()), a(this, U, t.ttl || s), a(this, I, t.maxUnloadsCount || 0), a(this, A, t.unloadsCount || 0)
                }
                var t, r, l;
                return t = e, (r = [{
                    key: "toConfig",
                    value: function() {
                        return {
                            id: o(this, S),
                            trigger: o(this, O),
                            source: o(this, w),
                            context: o(this, N),
                            timestamp: o(this, x),
                            ttl: o(this, U),
                            maxUnloadsCount: o(this, I),
                            unloadsCount: o(this, A)
                        }
                    }
                }, {
                    key: "id",
                    get: function() {
                        return o(this, S)
                    }
                }, {
                    key: "source",
                    get: function() {
                        return o(this, w)
                    }
                }, {
                    key: "context",
                    get: function() {
                        return o(this, N)
                    }
                }, {
                    key: "timestamp",
                    get: function() {
                        return o(this, x)
                    }
                }, {
                    key: "isExpired",
                    get: function() {
                        return Date.now() > this.timestamp + 1e3 * o(this, U)
                    }
                }, {
                    key: "isExceededUnloads",
                    get: function() {
                        return !!o(this, I) && o(this, A) > o(this, I)
                    }
                }, {
                    key: "incrementUnloadsCount",
                    value: function() {
                        var e;
                        a(this, A, (e = o(this, A), ++e))
                    }
                }]) && n(t.prototype, r), l && n(t, l), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        }
    }
]);