/*! License information is available at https://static.cdn.printful.com/dist-pf/4473.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [4473], {
        92939: (t, e, r) => {
            r.d(e, {
                M: () => s
            });
            var i = r(59597),
                o = r(9651);
            const n = "front_large",
                s = function() {};
            s.prototype = new i.$, s.prototype.id = null, s.prototype.isNew = !1, s.prototype.isBeta = !1, s.prototype.title = null, s.prototype.hide = !1, s.prototype.technique = "", s.prototype.isLargeDtg = function() {
                return this.id === n
            }, s.fromArray = function(t) {
                var e = new s;
                return o.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsGeneratorPlacement = s)
        },
        19639: (t, e, r) => {
            r.d(e, {
                K: () => n
            });
            var i = r(59597),
                o = r(9651);
            const n = function() {};
            n.prototype = new i.$, n.prototype.toArrayKeys = ["areaWidth", "areaHeight", "left", "top", "width", "height", "rotation"], n.prototype.areaWidth = 0, n.prototype.areaHeight = 0, n.prototype.left = 0, n.prototype.top = 0, n.prototype.width = 0, n.prototype.height = 0, n.prototype.rotation = 0, n.prototype.originalRatio = 1, n.prototype.canMoveOutOfBounds = !1, n.fromArray = function(t) {
                var e = new n;
                return o.U.O2O(e, t), e
            }, n.prototype.getScaledPositionFromRatio = function(t) {
                var e = new n;
                return e.areaHeight = this.areaHeight / t, e.areaWidth = this.areaWidth / t, e.height = this.height / t, e.width = this.width / t, e.left = this.left / t, e.top = this.top / t, e.rotation = this.rotation, e.originalRatio = t, e
            }, n.prototype.getScaledPosition = function(t, e, r) {
                return this.getScaledPositionFromRatio(this.getRatioToScaleTo(t, e, r))
            }, n.prototype.getRatioToScaleTo = function(t, e, r) {
                var i = !!t && this.areaWidth / t,
                    o = !!e && this.areaHeight / e,
                    n = this.areaWidth / this.areaHeight;
                return t && e ? n > t / e && !r ? i : o : t ? i : e ? o : 1
            }, n.prototype.getFromOriginalRatio = function() {
                var t = this.getScaledPositionFromRatio(1 / this.originalRatio);
                return t.originalRatio = 1, t
            }, n.prototype.getRelativelyPositioned = function(t) {
                var e = this.originalRatio,
                    r = this.getFromOriginalRatio(),
                    i = t.getScaledPosition(r.areaWidth, r.areaHeight, !0);
                return r.left = i.left, r.top = i.top, r.width = i.width, r.height = i.height, r.rotation = i.rotation, r.getScaledPositionFromRatio(e)
            }, n.prototype.getClone = function() {
                var t = n.fromArray(this.toArray());
                return t.originalRatio = this.originalRatio, t
            }, n.prototype.center = function() {
                return this.align(n.ALIGNMENT.CENTER), this
            }, n.prototype.align = function(t, e) {
                const r = this.getAreaWidth(e),
                    i = this.getAreaHeight(e),
                    o = this.getPositionDimension(e, "top"),
                    s = this.getPositionDimension(e, "left");
                var a = this.getBoundingBox(!0);
                switch (t) {
                    case n.ALIGNMENT.CENTER:
                        this.top = i / 2 - this.height / 2 + o, this.left = r / 2 - this.width / 2 + s;
                        break;
                    case n.ALIGNMENT.VERTICAL:
                        this.top = i / 2 - this.height / 2 + o;
                        break;
                    case n.ALIGNMENT.HORIZONTAL:
                        this.left = r / 2 - this.width / 2 + s;
                        break;
                    case n.ALIGNMENT.LEFT:
                        this.left = a.left + s;
                        break;
                    case n.ALIGNMENT.RIGHT:
                        this.left = r - this.width - a.right;
                        break;
                    case n.ALIGNMENT.TOP:
                        this.top = a.top + o;
                        break;
                    case n.ALIGNMENT.BOTTOM:
                        this.top = i - this.height - a.bottom + o;
                        break;
                    default:
                        console.log("Unknown layer alignment:", t)
                }
                return this
            }, n.prototype.getBoundingBox = function(t) {
                let e = {
                    left: null,
                    right: null,
                    top: null,
                    bottom: null
                };
                return this.getCorners().map((t => {
                    e.left = Math.min(null === e.left ? t.x : e.left, t.x), e.right = Math.max(null === e.right ? t.x : e.right, t.x), e.top = Math.min(null === e.top ? t.y : e.top, t.y), e.bottom = Math.max(null === e.bottom ? t.y : e.bottom, t.y)
                })), e.width = e.right - e.left, e.height = e.bottom - e.top, t && (e.left = this.left - e.left, e.top = this.top - e.top, e.right = e.right - (this.left + this.width), e.bottom = e.bottom - (this.top + this.height)), e
            }, n.prototype.setWidthScale = function(t) {
                var e = this.areaWidth * t,
                    r = e / this.width,
                    i = this.width,
                    o = this.height;
                this.width = e, this.height = this.height * r, this.left += i / 2 - this.width / 2, this.top += o / 2 - this.height / 2
            }, n.prototype.setHeightScale = function(t) {
                var e = this.areaHeight * t,
                    r = e / this.height,
                    i = this.width,
                    o = this.height;
                this.width = this.width * r, this.height = e, this.left += i / 2 - this.width / 2, this.top += o / 2 - this.height / 2
            }, n.prototype.getScaleDimensionByFillMode = function(t) {
                var e = this.areaWidth / this.width,
                    r = this.areaHeight / this.height,
                    i = {
                        cover: e > r ? "w" : "h",
                        fit: e < r ? "w" : "h"
                    };
                return t && i[t] ? i[t] : "w"
            }, n.prototype.isOutOfBounds = function() {
                var t, e, r, i;
                if (this.canMoveOutOfBounds) return !1;
                const o = .05 * this.areaWidth;
                let n, s, a, c, u;
                return (this.height > this.areaHeight || this.width > this.areaWidth) && (n = this.rotation >= 45 && this.rotation <= 135 || this.rotation <= -45 && this.rotation >= -135), n && this.width > this.height && this.width > this.areaHeight ? (c = this.left + this.width + o <= 0, u = this.left - o >= this.areaWidth) : n && this.height > this.width && this.height > this.areaWidth && (s = this.top + this.height + o <= 0, a = this.top - o >= this.areaHeight), a = null !== (t = a) && void 0 !== t ? t : this.left - o >= this.areaWidth, u = null !== (e = u) && void 0 !== e ? e : this.top - o >= this.areaHeight, s = null !== (r = s) && void 0 !== r ? r : this.left + this.width + o <= 0, c = null !== (i = c) && void 0 !== i ? i : this.top + this.height + o <= 0, a || u || s || c
            }, n.prototype.isHalfLayerOutOfBounds = function() {
                return !this.canMoveOutOfBounds && (this.areaWidth / 2 <= this.left || this.width / 2 - this.width >= this.left)
            }, n.prototype.isPartiallyOutOfBounds = function(t) {
                return this.getCorners().some((function(e) {
                    return !this.isPointInsideArea(e.x.toFixed(2), e.y.toFixed(2), t)
                }), this)
            }, n.prototype.getCorners = function(t) {
                var e = {
                    topLeft: this.getRealRotatedCorner(this.left, this.top),
                    topRight: this.getRealRotatedCorner(this.left + this.width, this.top),
                    bottomRight: this.getRealRotatedCorner(this.left + this.width, this.top + this.height),
                    bottomLeft: this.getRealRotatedCorner(this.left, this.top + this.height)
                };
                return t ? e : Object.values(e)
            }, n.prototype.getRealRotatedCorner = function(t, e) {
                if (0 === this.rotation) return {
                    x: t,
                    y: e
                };
                var r = this.left + this.width / 2,
                    i = this.top + this.height / 2,
                    o = t - r,
                    n = e - i,
                    s = this.rotation * Math.PI / 180,
                    a = o * Math.cos(s) - n * Math.sin(s),
                    c = o * Math.sin(s) + n * Math.cos(s);
                return {
                    x: Math.round(1e3 * (a + r)) / 1e3,
                    y: Math.round(1e3 * (c + i)) / 1e3
                }
            }, n.prototype.isPointInsideArea = function(t, e, r) {
                const i = this.getPositionDimension(r, "top");
                return t >= 0 && t <= this.getAreaWidth(r) && e >= i && e <= i + this.getAreaHeight(r)
            }, n.prototype.hasIntersectionWith = function(t) {
                var e, r, i, o, n, s, a, c, u = this.getCorners(),
                    p = t.getCorners(),
                    l = [u, p];
                for (o = 0; o < l.length; o++) {
                    var _ = l[o];
                    for (n = 0; n < _.length; n++) {
                        var d = (n + 1) % _.length,
                            h = _[n],
                            I = _[d],
                            y = {
                                x: I.y - h.y,
                                y: h.x - I.x
                            };
                        for (e = r = null, s = 0; s < u.length; s++) i = y.x * u[s].x + y.y * u[s].y, (null === e || i < e) && (e = i), (null === r || i > r) && (r = i);
                        for (a = c = null, s = 0; s < p.length; s++) i = y.x * p[s].x + y.y * p[s].y, (null === a || i < a) && (a = i), (null === c || i > c) && (c = i);
                        if (r < a || c < e) return !1
                    }
                }
                return !0
            }, n.prototype.isDifferent = function(t) {
                return this.isSizeDifferent(t) || this.isPositionDifferent(t) || this.isRotationDifferent(t)
            }, n.prototype.isSizeDifferent = function(t) {
                return this.height.toFixed(4) !== t.height.toFixed(4) || this.width.toFixed(4) !== t.width.toFixed(4) || this.rotation !== t.rotation
            }, n.prototype.isPositionDifferent = function(t) {
                return this.left.toFixed(4) !== t.left.toFixed(4) || this.top.toFixed(4) !== t.top.toFixed(4)
            }, n.prototype.isRotationDifferent = function(t) {
                return this.rotation !== t.rotation
            }, n.prototype.isAreaSame = function(t) {
                return t && this.areaWidth == t.areaWidth && this.areaHeight == t.areaHeight
            }, n.prototype.copyPositions = function(t) {
                var e = t.getFromOriginalRatio().getScaledPositionFromRatio(this.originalRatio);
                return this.left = e.left, this.top = e.top, this.width = e.width, this.height = e.height, this.rotation = e.rotation, this
            }, n.prototype.getAreaWidth = function(t) {
                return t ? parseFloat((t.width / t.areaWidth * this.areaWidth).toFixed(2)) : this.areaWidth
            }, n.prototype.getAreaHeight = function(t) {
                return t ? parseFloat((t.height / t.areaHeight * this.areaHeight).toFixed(2)) : this.areaHeight
            }, n.prototype.getPositionDimension = function(t, e) {
                return t ? parseFloat((this.areaHeight / t.areaHeight * t[e]).toFixed(2)) : 0
            }, n.ALIGNMENT = {
                CENTER: "center",
                VERTICAL: "vertical",
                HORIZONTAL: "horizontal",
                LEFT: "left",
                RIGHT: "right",
                TOP: "top",
                BOTTOM: "bottom"
            }, window && ((globalThis || {}).PFItemsGeneratorPositionItem = n)
        },
        63339: (t, e, r) => {
            r.d(e, {
                T: () => n
            });
            var i = r(59597),
                o = r(9651);
            const n = function() {};
            n.prototype = new i.$, n.prototype.tierLevels = null, n.prototype.getFirstTier = function() {
                return Math.min.apply(null, this.getAmounts())
            }, n.prototype.getLastTier = function() {
                return Math.max.apply(null, this.getAmounts())
            }, n.prototype.getDiscountPercent = function(t) {
                var e = this.tierLevels.filter((function(e) {
                    return e.itemQuantity === t
                }))[0];
                return e ? e.percent : 0
            }, n.prototype.getTierForItemCount = function(t) {
                if (this.getFirstTier() > t) return 0;
                var e = this.getAmounts();
                return e = e.filter((function(e) {
                    return e <= t
                })), Math.max.apply(null, e)
            }, n.prototype.getAmounts = function() {
                return this.tierLevels.map((function(t) {
                    return t.itemQuantity
                }))
            }, n.prototype.getNextTierForItemCount = function(t) {
                var e = this.getAmounts().filter((function(e) {
                    return e > t
                }));
                return 0 == e.length ? null : Math.min.apply(null, e)
            }, n.fromArray = function(t) {
                var e = new n;
                return o.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsBulkDiscountTierList = n)
        },
        22916: (t, e, r) => {
            r.d(e, {
                m: () => n
            });
            var i = r(59597),
                o = r(9651);
            const n = function() {};
            n.prototype = new i.$, n.prototype.categoryId = 0, n.prototype.name = "", n.prototype.description = "", n.prototype.parentId = 0, n.prototype.inBetaTest = 0, n.prototype.hasChildren = null, n.prototype.urlImage = "", n.prototype.keywords = "", n.prototype.slug = "", n.prototype.documentTitle = "", n.prototype.badge = "", n.prototype.isHidden = null, n.prototype.isActive = null, n.prototype.order = 0, n.prototype.toArrayKeys = ["categoryId", "name", "description", "parentId", "keywords", "order", "slug", "badge", "isHidden", "isActive", "inBetaTest", "documentTitle"], n.fromArray = function(t) {
                var e = new n;
                return o.U.O2O(e, t), e
            }, n.ID_CUSTOM_PRODUCTS = 44, window && ((globalThis || {}).PFItemsCategoryItem = n)
        },
        35550: (t, e, r) => {
            r.d(e, {
                y: () => n
            });
            var i = r(59597),
                o = r(9651);
            const n = function() {};
            n.prototype = new i.$, n.prototype.length = 0, n.prototype.width = 0, n.prototype.height = 0, n.prototype.weight = 0, n.prototype.weightVerified = !1, n.prototype.sortingSize = 1, n.prototype.system = 1, n.prototype.toArrayKeys = ["length", "width", "height", "weight", "system", "weightVerified", "sortingSize"], n.prototype.dimensionKeys = ["length", "width", "height", "weight", "system", "weightVerified", "sortingSize"], n.prototype.replaceDimensionZeroValues = function() {
                for (var t in this.dimensionKeys) 0 === this[this.dimensionKeys[t]] && (this[this.dimensionKeys[t]] = void 0);
                return this
            }, n.prototype.getVolume = function() {
                return this.length * this.width * this.height
            }, n.fromArray = function(t) {
                var e = new n;
                return o.U.O2O(e, t), e
            }, n.getDimensionSymbol = function(t, e) {
                return t === this.TYPE_WEIGHT ? parseInt(e) === this.UNIT_OF_MEASURE_IMPERIAL ? "oz" : "g" : parseInt(e) === this.UNIT_OF_MEASURE_IMPERIAL ? "in" : "cm"
            }, n.TYPE_WIDTH = "width", n.TYPE_LENGTH = "length", n.TYPE_HEIGHT = "height", n.TYPE_WEIGHT = "weight", n.UNIT_OF_MEASURE_IMPERIAL = 1, n.UNIT_OF_MEASURE_METRIC = 2, n.getTypeTranslation = function(t) {
                switch (t) {
                    case n.TYPE_WIDTH:
                        return lang("Width");
                    case n.TYPE_LENGTH:
                        return lang("Length");
                    case n.TYPE_HEIGHT:
                        return lang("Height");
                    case n.TYPE_WEIGHT:
                        return lang("Weight")
                }
                return t
            }, window && ((globalThis || {}).PFItemsDimensions = n)
        },
        5532: (t, e, r) => {
            r.d(e, {
                q: () => a
            });
            var i = r(5527),
                o = r(83056),
                n = r(59597),
                s = r(9651);
            const a = function() {};
            a.prototype = new n.$, a.prototype.fileId = 0, a.prototype.filename = "", a.prototype.filesize = 0, a.prototype.urlThumb = "", a.prototype.urlDownload = "", a.prototype.urlPreview = "", a.prototype.urlFullSize = "", a.prototype.status = "", a.prototype.inchDimensions = "", a.prototype.inchDimensionsWithFallback = "", a.prototype.dimensions = "", a.prototype.group = "", a.prototype.storeId = 0, a.prototype.width = null, a.prototype.height = null, a.prototype.isVector = null, a.prototype.type = null, a.prototype.dpi = null, a.prototype.pages = 0, a.prototype.isDigitized = !1, a.prototype.isCopyrighted = !1, a.prototype.containsLicensedAssets = !1, a.prototype.needsProResubscription = !1, a.prototype.canBeRemoved = !0, a.prototype.createdAt = 0, a.prototype.isSample = !1, a.prototype.digitizedItems = null, a.prototype.canBeMoved = !1, a.prototype.employee = null, a.prototype.extra = null, a.prototype.isHidden = null, a.prototype.getUrlPreviewOrLoading = function() {
                return this.urlPreview && "" != this.urlPreview ? this.urlPreview : "/static/images/upload/processing.svg"
            }, a.prototype.getSizeReadable = function() {
                return this.filesize < 1 ? "" : (this.filesize / 1024 / 1024).toFixed(2) + " MB"
            }, a.prototype.isActive = function() {
                return this.status === a.STATUS_ACTIVE
            }, a.prototype.isSelectable = function(t) {
                let e = this.isActive() && !this.isCopyrighted;
                return t ? e && !this.isCorrupted() : e
            }, a.prototype.isCorrupted = function() {
                return this.pages > 1 && !this.isDigitized
            }, a.prototype.isDownloadable = function() {
                return this.isSelectable(!1) && this.urlDownload && !this.needsProResubscription
            }, a.prototype.canViewInBrowser = function() {
                return ["png", "jpg", "jpeg", "gif", "pdf"].indexOf(this.filename.split(".").pop().toLowerCase()) > -1 && this.urlFullSize && !this.needsProResubscription
            }, a.prototype.isRemovable = function() {
                return this.canBeRemoved
            }, a.prototype.isMovable = function() {
                return this.canBeMoved
            }, a.prototype.canPreview = function() {
                return this.isActive()
            }, a.prototype.isTempGeneratorFile = function() {
                return this.fileId === a.ID_TEMP_GENERATOR_FILE
            }, a.prototype.isProcessing = function() {
                return !this.isTempGeneratorFile() && (this.status === a.STATUS_WAITING || this.status === a.STATUS_PROCESSING)
            }, a.STATUS_ACTIVE = "active", a.STATUS_WAITING = "waiting", a.STATUS_PROCESSING = "processing", a.STATUS_FAILED = "failed", a.ID_TEMP_GENERATOR_FILE = 1, a.GROUP_GENERATED = "generated", a.fromArray = function(t) {
                var e = new a;
                if (s.U.O2O(e, t), e.digitizedItems = new o.Q, null != t && t.digitizedItems)
                    for (var r in t.digitizedItems) {
                        var n = t.digitizedItems[r];
                        e.digitizedItems.itemList.push(i.w.fromArray(n))
                    }
                return e
            }, window && ((globalThis || {}).PFItemsFileItem = a)
        },
        12786: (t, e, r) => {
            r.d(e, {
                a: () => s
            });
            r(82320), r(3044);
            var i = r(63339),
                o = r(59597),
                n = r(9651);
            const s = function() {};
            s.prototype = new o.$, s.prototype.currency = null, s.prototype.minPrice = null, s.prototype.bulkDiscountTiers = null, s.prototype.maxPrice = null, s.prototype.minOriginalPrice = null, s.prototype.maxOriginalPrice = null, s.prototype.minRetailPrice = null, s.prototype.maxRetailPrice = null, s.prototype.productId = null, s.prototype.minPriceDiscount = null, s.prototype.additionalPrices = null, s.prototype.techniqueDiscountData = null, s.prototype.showStartingFrom = !1, s.prototype.hasSegmentedDiscount = !1, s.prototype.toArrayKeys = ["currency", "minPrice", "maxPrice", "minOriginalPrice", "maxOriginalPrice", "minRetailPrice", "maxRetailPrice", "additionalPrices", "productId", "techniqueDiscountData", "showStartingFrom", "hasSegmentedDiscount"], s.prototype.hasDiscount = function() {
                return this.minOriginalPrice > 0 && this.minOriginalPrice > this.minPrice
            }, s.prototype.hasDifferentPrices = function() {
                return this.maxPrice > this.minPrice
            }, s.fromArray = function(t) {
                var e = new s;
                return n.U.O2O(e, t), t.bulkDiscountTiers && (e.bulkDiscountTiers = i.T.fromArray(t.bulkDiscountTiers)), e
            }, window && ((globalThis || {}).PFItemsPriceRangeItem = s)
        },
        9350: (t, e, r) => {
            r.d(e, {
                B: () => a
            });
            var i = r(63339),
                o = r(59597),
                n = r(9651),
                s = r(64585);
            const a = function() {};
            a.prototype = new o.$, a.prototype.currency = null, a.prototype.productionCurrency = null, a.prototype.price = null, a.prototype.discountedPrice = null, a.prototype.basePriceDiscount = 0, a.prototype.includedPrintPriceItem = null, a.prototype.discountAmount = 0, a.prototype.discountPercent = 0, a.prototype.appliedCouponDiscount = 0, a.prototype.discountType = null, a.prototype.originalPrice = null, a.prototype.retailPrice = null, a.prototype.hasLaunchPriceDiscount = !1, a.prototype.appliedDiscounts = null, a.prototype.toArrayKeys = ["currency", "price", "originalPrice", "retailPrice", "discountedPrice"], a.prototype.hasDiscount = function() {
                return this.originalPrice > 0 && this.originalPrice > this.price
            }, a.prototype.hasBulkDiscount = function() {
                return !!this.appliedDiscounts && this.appliedDiscounts.includes(a.DISCOUNT_TYPE_BULK)
            }, a.prototype.getPeriodicPriceExpiryTime = function() {
                var t = 0;
                return this.appliedDiscounts.forEach((function(e) {
                    e.discountExpiryDate && (t = e.discountExpiryDate)
                })), t
            }, a.prototype.applyDiscount = function(t, e, r) {
                this.discountPercent = r, this.discountType = t, 0 == e && (e = this.originalPrice * r), this.discountAmount = e.toFixed(2), this.discountedPrice = this.originalPrice - this.discountAmount
            }, a.prototype.isDiscountApplied = function(t) {
                return this.appliedDiscounts.filter((function(e) {
                    return e.discountType == t && e.discountAmount > 0
                })).length > 0
            }, a.prototype.getDiscountPercentageByType = function(t) {
                let e = 0;
                return this.appliedDiscounts.forEach((r => {
                    r.discountType == t && e < r.discountPercent && (e = r.discountPercent)
                })), e
            }, a.prototype.getDisplayDiscountType = function() {
                if (!this.appliedDiscounts) return null;
                var t = null,
                    e = !1;
                return this.appliedDiscounts.forEach(function(r) {
                    this.isDiscountApplied(r.discountType) && r.discountType != a.DISCOUNT_TYPE_COUPONS && (t && t != r.discountType && (e = !0), t = r.discountType)
                }.bind(this)), e ? a.DISCOUNT_TYPE_MULTIPLE : t
            }, a.getDiscountTypeText = function(t) {
                return t == this.DISCOUNT_TYPE_BULK ? lang("Bulk discount") : t == this.DISCOUNT_TYPE_LAUNCH_PRICE ? lang("Launch Price discount") : t === this.DISCOUNT_TYPE_SALE_PRICE ? lang("Sale price discount") : t === this.DISCOUNT_TYPE_CLEARANCE_PRICE ? lang("Clearance price discount") : t == this.DISCOUNT_TYPE_BPD ? lang("Base Price Discount") : t == this.DISCOUNT_TYPE_VOLUME ? lang("Monthly Discount") : t == this.DISCOUNT_TYPE_EMPLOYEE ? lang("Employee discount applied") : t == this.DISCOUNT_TYPE_ENTERPRISE ? lang("Enterprise discount") : t == this.DISCOUNT_TYPE_SAMPLE || t == this.DISCOUNT_TYPE_EXTRA_SAMPLE ? lang("Sample Order discount") : ""
            }, a.getDiscountAppliedText = function(t) {
                return t == this.DISCOUNT_TYPE_BULK ? lang("Bulk discount applied") : t == this.DISCOUNT_TYPE_LAUNCH_PRICE ? lang("Launch Price discount applied") : t == this.DISCOUNT_TYPE_CUSTOM || t == this.DISCOUNT_TYPE_BPD ? lang("Special price applied") : t == this.DISCOUNT_TYPE_VOLUME ? lang("Monthly discount applied") : t == this.DISCOUNT_TYPE_EMPLOYEE ? lang("Employee discount applied") : t == this.DISCOUNT_TYPE_MULTIPLE ? lang("Multiple discounts applied") : t == this.DISCOUNT_TYPE_MANUAL ? lang("Monthly discount applied") : t == this.DISCOUNT_TYPE_SAMPLE || t == this.DISCOUNT_TYPE_EXTRA_SAMPLE ? lang("Sample Order discount applied") : t === this.DISCOUNT_TYPE_SALE_PRICE ? lang("Sale price discount applied") : t == this.DISCOUNT_TYPE_ENTERPRISE ? lang("Enterprise discount applied") : t === this.DISCOUNT_TYPE_CLEARANCE_PRICE ? lang("Clearance price discount applied") : t === this.DISCOUNT_TYPE_PLACEMENT_DISCOUNT ? lang("Design placement discount applied") : ""
            }, a.fromArray = function(t) {
                var e = new a;
                return n.U.O2O(e, t), t.bulkDiscountTiers && (e.bulkDiscountTiers = i.T.fromArray(t.bulkDiscountTiers)), t.includedPrintPriceItem && (e.includedPrintPriceItem = new s.eA({
                    price: t.includedPrintPriceItem.price,
                    discountedPrice: t.includedPrintPriceItem.discountedPrice,
                    placementName: t.includedPrintPriceItem.placementName
                })), e
            }, a.DISCOUNT_TYPE_BULK = 0, a.DISCOUNT_TYPE_CUSTOM = 1, a.DISCOUNT_TYPE_EMPLOYEE = 2, a.DISCOUNT_TYPE_LAUNCH_PRICE = 3, a.DISCOUNT_TYPE_SAMPLE = 4, a.DISCOUNT_TYPE_VOLUME = 5, a.DISCOUNT_TYPE_COUPONS = 6, a.DISCOUNT_TYPE_MANUAL = 8, a.DISCOUNT_TYPE_EXTRA_SAMPLE = 9, a.DISCOUNT_TYPE_BULK_DIGITIZATION = 10, a.DISCOUNT_TYPE_BPD = 11, a.DISCOUNT_TYPE_SALE_PRICE = 12, a.DISCOUNT_TYPE_ENTERPRISE = 15, a.DISCOUNT_TYPE_CLEARANCE_PRICE = 17, a.DISCOUNT_TYPE_PLACEMENT_DISCOUNT = 19, a.DISCOUNT_TYPE_PRODUCT_TEMPLATE = 20, a.DISCOUNT_TYPE_MULTIPLE = 22, a.DISCOUNT_TYPE_SAMPLE = "discountTypeSample", a.DIGITIZATION_BULK_DISCOUNT_ITEM_LIMIT = 25, a.DISCOUNT_PERIODIC_TYPES = [a.DISCOUNT_TYPE_LAUNCH_PRICE, a.DISCOUNT_TYPE_SALE_PRICE, a.DISCOUNT_TYPE_CLEARANCE_PRICE], a.DISCOUNT_COUNTDOWN_TEXT_MAP = {
                [a.DISCOUNT_TYPE_LAUNCH_PRICE]: dlang("billing", "Launch price ends in"),
                [a.DISCOUNT_TYPE_SALE_PRICE]: dlang("billing", "Sale price ends in")
            }, a.getDiscountName = function(t, e) {
                if ((t === this.DISCOUNT_TYPE_LAUNCH_PRICE || t === this.DISCOUNT_TYPE_SALE_PRICE) && e) return lang("Special offer");
                switch (t) {
                    case this.DISCOUNT_TYPE_LAUNCH_PRICE:
                        return lang("Launch price");
                    case this.DISCOUNT_TYPE_SALE_PRICE:
                        return lang("Sale");
                    case this.DISCOUNT_TYPE_CLEARANCE_PRICE:
                        return lang("Clearance");
                    default:
                        throw Error("Unknown discount type")
                }
            }, window && ((globalThis || {}).PFItemsPriceItem = a)
        },
        4473: (t, e, r) => {
            r.d(e, {
                W: () => f
            });
            var i = r(98737),
                o = r(14544),
                n = r(3044),
                s = r(19765),
                a = r(81841),
                c = r(12786),
                u = r(59597),
                p = r(9651),
                l = r(64585),
                _ = r(61005);

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, I(i.key), i)
                }
            }

            function h(t, e, r) {
                return (e = I(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(t, e || "default");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let y = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), h(this, "itemName", ""), h(this, "rate", {})
                }
                var e, r, i;
                return e = t, i = [{
                    key: "fromArray",
                    value: function(t) {
                        return t = t || {}, Object.assign(new this, t)
                    }
                }], (r = null) && d(e.prototype, r), i && d(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            var E = r(55874),
                g = r(51122),
                T = r(11876);
            const f = function() {
                this.categoryIds = [], this.colors = [], this.sizes = [], this.fulfillmentCountries = {}, this.fulfillmentCountriesMap = {}, this.fulfillmentLocationsMap = {}, this.catalogCategoryIds = [], this.userDiscountsUsed = [], this.careInstructions = [], this.brandingOptions = [], this.features = [], this.models = [], this.productCategories = [], this.catalogCategoryNames = []
            };
            f.prototype = new u.$, f.prototype.toArrayKeys = ["productId", "isPopular", "isActive", "isDiscontinued", "isDisabledInPush", "hasBetaAccess", "isTearAway", "material", "sleeves", "style", "model", "isTrending", "colors", "isNew", "isAvailableInEurope", "hasClearance", "hasFreeShipping", "isSuggested", "isSterlingSilver", "isDisabledInSample", "printType", "launchDate", "models", "originCountry", "features", "brandingOptions", "productVariantImages", "additionalPrices", "availableTechniques", "availableBetaTechniques", "hasAdvancedInsideLabel", "displayName", "displayNameTranslations", "tariffCode", "tariffCodeCa", "powerBICategory", "fulfillmentDays", "relatedMediaLibraryIds", "isEcoFriendly", "isPrintfulOriginal", "isMadeInEU", "launchedAt"], f.prototype.productVideoData = null, f.prototype.productId = 0, f.prototype.type = "", f.prototype.title = "", f.prototype.fulfillmentCountries = null, f.prototype.fulfillmentCountriesMap = null, f.prototype.fulfillmentLocationsMap = null, f.prototype.model = "", f.prototype.originCountry = "", f.prototype.brand = "", f.prototype.urlImage = "", f.prototype.firstMockupUrl = "", f.prototype.isPopular = null, f.prototype.isActive = null, f.prototype.isDiscontinued = null, f.prototype.isDisabledInPush = null, f.prototype.hasBetaAccess = null, f.prototype.productVariantImages = null, f.prototype.fulfillmentDays = null, f.prototype.allSizes = null, f.prototype.isTrending = null, f.prototype.isNew = null, f.prototype.hasClearance = null, f.prototype.hasFreeShipping = !1, f.prototype.isSuggested = !1, f.prototype.isSterlingSilver = !1, f.prototype.isAvailableInEurope = !1, f.prototype.hasBetaAccess = !1, f.prototype.isDisabledInSample = !1, f.prototype.hasAdvancedInsideLabel = !1, f.prototype.embroideryProfile = "", f.prototype.material = "", f.prototype.isTearAway = null, f.prototype.options = null, f.prototype.colors = null, f.prototype.fileTagGroup = "", f.prototype.price = 0, f.prototype.extraDescription = null, f.prototype.priceRange = null, f.prototype.useNewPricing = !1, f.prototype.placementDiscountData = null, f.prototype.userDiscountsUsed = null, f.prototype.sleeves = null, f.prototype.style = null, f.prototype.printType = null, f.prototype.careInstructions = null, f.prototype.colors = null, f.prototype.sizes = null, f.prototype.categoryIds = null, f.prototype.catalogCategoryIds = null, f.prototype.catalogCategoryNames = null, f.prototype.mainCategoryId = null, f.prototype.sizeGuide = null, f.prototype.newSizeGuide = null, f.prototype.useSizeConversion = null, f.prototype.sizeSpecification = null, f.prototype.sizeSpecificationImage = null, f.prototype.availableSampleVariants = null, f.prototype.additionalPrices = null, f.prototype.availableTechniques = null, f.prototype.availableBetaTechniques = null, f.prototype.hasNewPlacement = !1, f.prototype.rating = 0, f.prototype.reviewRating = null, f.prototype.reviewOverview = null, f.prototype.hasSizeGuide = null, f.prototype.canHaveSizeGuide = null, f.prototype.launchDate = null, f.prototype.slug = "", f.prototype.catalogPageUrl = "", f.prototype.brandingOptions = null, f.prototype.features = null, f.prototype.models = null, f.prototype.mainCatalogCategoryId = null, f.prototype.productCategories = null, f.prototype.imageFallbackCategoryId = null, f.prototype.customTitle = "", f.prototype.displayName = "", f.prototype.displayNameTranslations = null, f.prototype.tariffCode = null, f.prototype.tariffCodeCa = null, f.prototype.powerBICategory = null, f.prototype.availableLocales = null, f.prototype.relatedMediaLibraryIds = null, f.prototype.isFavorite = null, f.prototype.addedToFavoritesAt = null, f.prototype.favoriteCatalogCategoryId = null, f.prototype.doesNotMatchSellingRegion = !1, f.prototype.images = [], f.prototype.canHaveOnlyLabelPlacement = !1, f.prototype.canHaveLabelMockups = !1, f.prototype.hasEmbroiderySubTechnique = !1, f.prototype.hasDropdownSizePicker = !1, f.prototype.estimateDelivery = null, f.prototype.isEcoFriendly = !1, f.prototype.isPrintfulOriginal = !1, f.prototype.dataLayerData = null, f.prototype.estimateDeliveryFormatted = null, f.prototype.canEstimateEmbroideryCosts = !1, f.prototype.isMadeInEU = !1, f.prototype.isInCategory = function(t) {
                return this.categoryIds.includes(t)
            }, f.prototype.isInCatalogCategory = function(t) {
                return this.catalogCategoryIds.includes(parseInt(t))
            }, f.prototype.productPrintPrices = null, f.prototype.servicePrices = null, f.prototype.launchedAt = 0, f.prototype.getFirstCatalogCategory = function() {
                return this.catalogCategoryIds.length ? this.catalogCategoryIds[0] : 0
            }, f.prototype.getFullTitle = function() {
                if (this.displayName) return this.displayName;
                var t = [],
                    e = this.model || this.title || this.type;
                return this.brand && t.push(this.brand), e && t.push(e), t.join(" ")
            }, f.prototype.getBrandModelString = function() {
                return this.brand && this.model ? this.brand + " " + this.model : ""
            }, f.prototype.getColorPickerTitle = function(t) {
                var e = dnlang("products", "Choose color", "Choose colors", t);
                return this.hasHandleColor() && (e = dnlang("products", "Choose handle color", "Choose handle colors", t)), this.hasPipingColor() && (e = dnlang("products", "Choose piping color", "Choose piping colors", t)), this.hasElasticBandColor() && (e = dnlang("products", "Stitch & Elastic band color", "Stitch & Elastic band color", t)), this.isJewelry() && (e = dnlang("products", "Choose coating", "Choose coating", t)), this.isFramedPoster() && (e = dnlang("products", "Choose frame color", "Choose frame colors", t)), this.isToughPhoneCase() && (e = dnlang("products", "Choose option", "Choose options", t)), e
            }, f.prototype.getSizePickerTitle = function(t) {
                let e = dnlang("products", "Choose size", "Choose sizes", t);
                return this.isPhoneCase() && (e = dnlang("products", "Choose model", "Choose models", t)), this.isCandleSoyWax() && (e = dnlang("products", "Choose type", "Choose types", t)), e
            }, f.prototype.getPriceReadable = function() {
                return prettyMoney(this.priceRange.minPrice, this.priceRange.currency)
            }, f.prototype.getProductPageUrl = function() {
                var t, e;
                if (this.catalogPageUrl || this.slug) return this.catalogPageUrl || this.slug;
                var r = new o.s;
                for (var i in this.categoryIds)
                    if (e = r.findCategoryById(this.categoryIds[i])) break;
                !e && null !== (t = PF) && void 0 !== t && t.DEV && console.error("Product category not found - " + this.productId);
                var n = e ? e.name : this.title;
                return "/custom/" + s.y.slug(n) + "/" + this.productId + "/" + s.y.slug(this.getFullTitle())
            }, f.prototype.getGuidelinesTabUrl = function() {
                return this.catalogPageUrl + "#guidelines"
            }, f.prototype.isMadeInUSA = function() {
                const t = [f.ID_GLOSSY_MUG_USA, f.ID_DAD_HAT_USA];
                return -1 === [].indexOf(this.productId) && (this.brand === f.BRAND_LOS_ANGELES_APPAREL || this.brand === f.BRAND_AA && null === this.model.match(/^[A-Z0-9]+W/) || this.brand === f.BRAND_BAYSIDE || this.brand === f.BRAND_SOCCO || -1 !== t.indexOf(this.productId))
            }, f.prototype.isEmbroidery = function() {
                return this.type === g.V_ || (0, n.z)(this.productId).getTechniqueFromMemory() === g.V_
            }, f.prototype.isDTFilm = function() {
                return this.type === g.Ub
            }, f.prototype.hasEmbroideryHatSideAndBackPlacements = function() {
                return !!this.getOptionItems().filter((function(t) {
                    return t.isEmbroideryBackColors() || t.isEmbroideryLeftColors() || t.isEmbroideryRightColors()
                })).length
            }, f.prototype.shouldShowTaxInclusion = function() {
                return Object.keys(this.fulfillmentCountries).indexOf(i.T.REGION_EUROPE) > -1
            }, f.prototype.hasMultipleTechniques = function() {
                return this.availableTechniques && this.availableTechniques.length > 1
            }, f.prototype.isApparelEmbroidery = function() {
                return [f.ID_POLO_EMBROIDERY_SHIRT, f.ID_POLO_WOMEN_EMBROIDERY_SHIRT, f.ID_EMBROIDERY_T_SHIRT_2001W].indexOf(this.productId) > -1
            }, f.prototype.isBlackMug = function() {
                return this.productId === f.ID_GLOSSY_BLACK_MUG
            }, f.prototype.isEmbroideryApron = function() {
                return this.productId === f.ID_EMBROIDERY_APRON
            }, f.prototype.isMug = function() {
                return this.type === g.GE
            }, f.prototype.isDrinkware = function() {
                return this.type === g.Hr
            }, f.prototype.isShoes = function() {
                return this.type === g.F9
            }, f.prototype.isLaptopSleeve = function() {
                return this.productId === f.ID_LAPTOP_SLEEVE
            }, f.prototype.isBeanBagCase = function() {
                return this.productId === f.ID_BEAN_BAG_CASE
            }, f.prototype.isBlanket = function() {
                return this.productId === f.ID_THROW_BLANKET
            }, f.prototype.isWoodenOrnaments = function() {
                return this.productId === f.ID_WOODEN_ORNAMENTS
            }, f.prototype.isMetalPrint = function() {
                return this.productId === f.ID_METAL_PRINT_SUBLIMATION
            }, f.prototype.isGamingMousePad = function() {
                return this.productId === f.ID_GAMING_MOUSE_PAD
            }, f.prototype.isTowel = function() {
                return this.productId === f.ID_TURKISH_TOWEL
            }, f.prototype.isEmbroideredPatches = function() {
                return f.PATCHES.includes(this.productId)
            }, f.prototype.isPillow = function() {
                return [f.ID_PILLOW_W_STUFFING, f.ID_PILLOWCASE, f.ID_PILLOW_W_STUFFING_RECTANGULAR, f.ID_PILLOWCASE_RECTANGULAR].indexOf(this.productId) > -1
            }, f.prototype.isFaceMask = function() {
                return this.productId === f.ID_FACE_MASK
            }, f.prototype.isSocks = function() {
                return [f.ID_SOCKS, f.ID_ANKLE_SOCKS_OLD, f.ID_ANKLE_SOCKS, f.ID_BASKETBALL_SOCKS].indexOf(this.productId) > -1
            }, f.prototype.isTouchTool = function() {
                return this.productId === f.ID_TOUCH_TOOL
            }, f.prototype.canDublicatePlacementLayers = function() {
                return [f.ID_HEXAGON_EARRINGS, f.ID_PET_TAG].indexOf(this.productId) > -1
            }, f.prototype.isSublimation = function() {
                return this.type === g._M
            }, f.prototype.isFabric = function() {
                return this.type === g.wP
            }, f.prototype.isPuzzle = function() {
                return this.type === g.Sd
            }, f.prototype.isCutSew = function() {
                return this.type === g.AN
            }, f.prototype.isJewelry = function() {
                return this.type === g.uj
            }, f.prototype.isCandle = function() {
                return this.type === g.Io
            }, f.prototype.isDecor = function() {
                return this.type === g.yq
            }, f.prototype.isCosmetics = function() {
                return this.type === g.de
            }, f.prototype.isSticker = function() {
                return this.type === g.nZ
            }, f.prototype.isStickerSheet = function() {
                return this.productId === f.ID_STICKER_SHEET
            }, f.prototype.isEmbroideredCrewSocks = function() {
                return this.productId === f.ID_SOCCO_SC200
            }, f.prototype.isPoster = function() {
                return this.type === g._j
            }, f.prototype.isFramedPoster = function() {
                return this.type === g.WK
            }, f.prototype.isCanvas = function() {
                return this.type === g._E
            }, f.prototype.isBeanBag = function() {
                return this.productId === f.ID_BEAN_BAG
            }, f.prototype.isPhoneCase = function() {
                return this.type === g.ZA
            }, f.prototype.isToughPhoneCase = function() {
                return this.productId === f.ID_IPHONE_CASE_TOUGH
            }, f.prototype.isAirpodsCase = function() {
                return this.productId === f.ID_AIRPODS_CASES
            }, f.prototype.isCandleSoyWax = function() {
                return this.productId === f.ID_CANDLE_SOY_WAX
            }, f.prototype.isStockProduct = function() {
                return this.type === g.E$
            }, f.prototype.isPostcard = function() {
                return this.type === g.q9
            }, f.prototype.isEmbroiderySample = function() {
                return this.productId === f.ID_EMBROIDERY_SAMPLE
            }, f.prototype.shouldShowOutlinePicker = function() {
                return !!this.options[T.$b]
            }, f.prototype.isTote = function() {
                return this.fileTagGroup === g.wT || this.productId === f.ID_ALL_OVER_TOTE || this.productId === f.ID_ALL_OVER_BEACH_TOTE || this.productId === f.ID_EC8000_TOTE || this.productId === f.ID_EC8001_TOTE
            }, f.prototype.isJoggerWithPocket = function() {
                return f.JOGGERS_WITH_POCKET_PLACEMENT.includes(this.productId)
            }, f.prototype.isDtgTote = function() {
                return this.fileTagGroup === g.wT
            }, f.prototype.isWhiteDtgTote = function() {
                return [].indexOf(this.productId) > -1
            }, f.prototype.isDtgShirt = function() {
                return this.fileTagGroup === g.ml
            }, f.prototype.canTypeSupportAdvancedInsideLabel = function() {
                return this.isDtgShirt() || this.isEmbroidery() || this.isDTFilm()
            }, f.prototype.isLeggings = function() {
                return f.LEGGINGS.indexOf(this.productId) > -1
            }, f.prototype.canHaveOnlyLabel = function() {
                return this.productId === f.ID_ORGANIC_CROP_TOP
            }, f.prototype.shouldShowLargeFrontEmbroideryBanner = function() {
                return f.WITH_LARGE_FRONT_EMBROIDERY.includes(this.productId)
            }, f.prototype.isKinCustomsShoes = function() {
                return f.KINCUSTOMS_SHOES.includes(this.productId)
            }, f.prototype.hasEmbroideryProfile = function() {
                return this.isEmbroidery() && this.embroideryProfile in f.EMBROIDERY_PROFILE_TYPES
            }, f.prototype.isAmericanApparel = function() {
                return this.brand === f.BRAND_AA
            }, f.prototype.isAdidas = function() {
                return this.brand === f.BRAND_ADIDAS
            }, f.prototype.isPersonalUseBrand = function() {
                return f.PERSONAL_USE_BRANDS.indexOf(this.brand) > -1
            }, f.prototype.hasHandleColor = function() {
                return this.productId === f.ID_ALL_OVER_TOTE || this.productId === f.ID_ALL_OVER_BEACH_TOTE
            }, f.prototype.hasPipingColor = function() {
                return this.productId === f.ID_ALL_OVER_BIKINI || this.productId === f.ID_ALL_OVER_BIKINI_TOP || this.productId === f.ID_ALL_OVER_BIKIN_BOTTOM || this.productId === f.ID_ALL_OVER_SPORTS_BRA || this.productId === f.ID_ALL_OVER_SPORTS_BRA_W_PADDING
            }, f.prototype.hasElasticBandColor = function() {
                return this.productId === f.ID_ALL_OVER_FACE_MASK
            }, f.prototype.hasBrandingOption = function(t) {
                return this.brandingOptions.indexOf(t) > -1
            }, f.prototype.hasTearAwayLabel = function() {
                return this.hasBrandingOption(dlang("products", "Tear-away label"))
            }, f.prototype.hasTechnique = function(t) {
                return !!this.hasMultipleTechniques() && this.availableTechniques.indexOf(t) > -1
            }, f.prototype.getMockupGeneratorUrl = function() {
                return langUrl("/generator") + "/" + this.productId + "/" + s.y.slug(this.getFullTitle())
            }, f.prototype.shouldShowAvailabilityTab = function() {
                return PF.Customer.isLogged()
            }, f.prototype.shouldShowFileGuidelineTab = function() {
                return !this.isStockProduct()
            }, f.prototype.getOptionItems = function(t) {
                var e = [];
                for (var r in t = t || [], this.options) {
                    var i = a.U.fromArray(r, this.options[r]);
                    t.indexOf(i.name) > -1 || (i.name == T.Pr && (i.labelTooltipText = lang("We digitize each file to a format that supports embroidery and charge a one-time fee of $6.50 for each embroidery type. You can reuse a digitized file for the same embroidery type with other orders at no additional cost.")), e.push(i))
                }
                return e
            }, f.prototype.getDisplayPriceString = function() {
                return this.priceRange.hasDifferentPrices() ? dlang("products", "Starting from {price}").replace("{price}", prettyMoney(this.priceRange.minPrice, this.priceRange.currency)) : prettyMoney(this.priceRange.minPrice, this.priceRange.currency)
            }, f.prototype.getOptionExceptions = function() {
                return this.isEmbroidery() ? [T.JM, T.IZ, T.Lk, T.sH, T.ez, T.i$, T.q0, T.X_, T.iD, T.J1, T.tD, T.uo, T.XY, T.yF, T.Jy, T.Hj, T.bW, T.om, T.K5, T.KW, T.AH, T.yC] : [T.tN]
            }, f.getSizeChartUrl = function(t) {
                return "/custom-products/size-guide?productId=" + t
            }, f.fromArray = function(t) {
                var e, r;
                const i = new f;
                if (p.U.O2O(i, t), i.price = parseFloat(i.price), t.priceRange && (i.priceRange = c.a.fromArray(t.priceRange)), t.productPrintPrices && (i.productPrintPrices = l.oY.buildFromRpcDataArray(t.productPrintPrices)), t.servicePrices && (i.servicePrices = _.x$.buildFromRpcDataArray(t.servicePrices)), null != t && t.estimateDelivery && (i.estimateDelivery = new E.pz(t.estimateDelivery)), null != t && t.estimateDeliveryFormatted && (i.estimateDeliveryFormatted = new E.kL(t.estimateDeliveryFormatted)), null !== (e = t.colorsSizes) && void 0 !== e && e.colors)
                    for (const e in t.colorsSizes.colors) {
                        var o = new f.ColorPair;
                        p.U.O2O(o, t.colorsSizes.colors[e]), i.colors.push(o)
                    }
                return null !== (r = t.colorsSizes) && void 0 !== r && r.sizes && (i.sizes = t.colorsSizes.sizes), i.relatedMediaLibraryIds = (t.relatedMediaItems || []).map((t => t.id)), null != t && t.dataLayerData && (i.dataLayerData = y.fromArray(t.dataLayerData)), i
            }, f.duplicateFrom = function(t) {
                var e = new f;
                return p.U.O2O(e, t), e
            }, f.prototype.getEmbroideryProfile = function() {
                return this.hasEmbroideryProfile() ? f.EMBROIDERY_PROFILE_TYPES[this.embroideryProfile] : ""
            }, f.prototype.isAdvancedInsideLabelAllowed = function() {
                return this.canTypeSupportAdvancedInsideLabel() && this.hasAdvancedInsideLabel
            }, f.prototype.canHaveColorPicker = function() {
                return this.colors && this.colors.length >= 2
            }, f.prototype.canHaveSizePickerForProductTemplates = function() {
                return !this.canHaveColorPicker() || (this.isPoster() || this.isCanvas() || this.isFramedPoster() || this.isMetalPrint() || this.isGamingMousePad() || this.isToughPhoneCase() || this.isAirpodsCase() || this.isEmbroideredPatches())
            }, f.prototype.shouldShowAdidasBanner = function() {
                return this.isAdidas()
            }, f.prototype.isFulfilledInChina = function() {
                return this.isKinCustomsShoes()
            }, f.prototype.isSizeBasedProduct = function() {
                return this.isPoster() || this.isMug() || this.isPhoneCase() || this.isCanvas() || this.isFramedPoster() || this.isSticker() && !this.isStickerSheet() || this.isPostcard() || this.isPillow() || this.isSocks() || this.isBlackMug() || this.isLaptopSleeve() || this.isEmbroideredPatches() || this.isTowel() || this.isPuzzle() || this.isGamingMousePad() || this.isMetalPrint() || this.isBlanket()
            }, f.prototype.isUpcomingDiscontinuationProduct = function() {
                return !!f.UPCOMING_DISCONTINUED_PRODUCT_REPLACEMENT_MAP[this.productId]
            }, f.prototype.isEngravingProduct = function() {
                return f.ENGRAVING_PRODUCTS.includes(this.productId)
            }, f.BEANIE_PROFILE_NAME = dlang("products", "Beanie"), f.EMBROIDERY_PROFILE_TYPES = {
                "Low Profile Hats": dlang("products", "Low"),
                "High Profile Hats": dlang("products", "High"),
                "Beanie without a Fold": f.BEANIE_PROFILE_NAME,
                Beanie: f.BEANIE_PROFILE_NAME
            }, f.ID_PILLOW_W_STUFFING = 83, f.ID_POSTER_INCH = 1, f.ID_FRAMED_POSTER_INCH = 2, f.ID_POSTER_CM = 268, f.ID_FRAMED_POSTER_CM = 304, f.ID_PREMIUM_LUSTER_PHOTO_PAPER_POSTER = 171, f.ID_ALL_OVER_TOTE = 84, f.ID_ALL_OVER_BEACH_TOTE = 274, f.ID_ALL_OVER_BIKINI = 273, f.ID_ALL_OVER_BIKINI_TOP = 309, f.ID_ALL_OVER_BIKIN_BOTTOM = 310, f.ID_ALL_OVER_SPORTS_BRA = 282, f.ID_ALL_OVER_SPORTS_BRA_W_PADDING = 387, f.ID_ALL_OVER_DRAWSTRING_BAG = 262, f.ID_ALL_OVER_WOMEN_ATHLETIC_T_SHIRT = 329, f.ID_ALL_OVER_MEN_ATHLETIC_T_SHIRT = 328, f.ID_ALL_OVER_UNISEX_SWEATSHIRT = 320, f.ID_ALL_OVER_WOMEN_V_NECK_T_SHIRT = 260, f.ID_ALL_OVER_WOMEN_CREW_NECK_T_SHIRT = 261, f.ID_ALL_OVER_MEN_V_NECK_TSHIRT = 256, f.ID_ALL_OVER_MEN_CREW_NECK_T_SHIRT = 257, f.ID_ALL_OVER_CROP_TEE = 303, f.ID_ALL_OVER_WOMEN_TANK_TOP = 275, f.ID_ALL_OVER_TSHIRT_DRESS = 514, f.ID_ALL_OVER_KIDS_CREW_NECK_TSHIRT = 384, f.ID_ALL_OVER_YOUTH_CREW_NECK_TSHIRT = 385, f.ID_ALL_OVER_KIDS_BEANIE = 459, f.ID_ALL_OVER_HIGH_WAISTED_BIKINI = 468, f.ID_ALL_OVER_PADDED_BIKINI_TOP = 469, f.ID_ALL_OVER_HIGH_WAISTED_BIKINI_BOTTOM = 470, f.ID_ALL_OVER_UNISEX_HOODIE = 388, f.ID_ALL_OVER_MEN_JOGGERS = 400, f.ID_ALL_OVER_WOMEN_JOGGERS = 401, f.ID_ALL_OVER_BOXER_BRIEFS = 428, f.ID_ALL_OVER_FLAG = 490, f.ID_SPIRAL_NOTEBOOK = 474, f.ID_E549_TOTE = 225, f.ID_8503_TOTE = 158, f.ID_8860_TOTE = 176, f.ID_EC8000_TOTE = 367, f.ID_EC8001_TOTE = 378, f.ID_EP75_ORGANIC_TOTE = 580, f.ID_82_BEANIE = 81, f.ID_SP15_CAP = 93, f.ID_YUPOONG_1501KC = 266, f.ID_BEECHFIELD_B426 = 451, f.ID_GLOSSY_MUG = 19, f.ID_975MPR = 342, f.ID_GLOSSY_MUG_USA = 241, f.ID_DAD_HAT_USA = 551, f.ID_MUG_MAGIC_MATTE_BLACK = 341, f.ID_MUG_MAGIC_GLOSSY_BLACK = 402, f.ID_EMBROIDERY_T_SHIRT_2001W = 299, f.ID_GLOSSY_BLACK_MUG = 300, f.ID_POLO_EMBROIDERY_SHIRT = 287, f.ID_POLO_WOMEN_EMBROIDERY_SHIRT = 292, f.ID_LEGGINGS_YOGA = 242, f.ID_LEGGINGS_YOGA_CAPRI = 280, f.ID_LEGGINGS_ALL_OVER = 189, f.ID_LEGGINGS_ALL_OVER_CAPRI = 221, f.ID_LEGGINGS_ALL_OVER_SHORTS = 298, f.ID_LEGGINGS_ALL_OVER_SPORTS = 460, f.ID_AOP_BEANIE = 458, f.ID_AOP_DUFFLE_BAG = 465, f.ID_AOP_BIKER_SHORTS = 507, f.ID_AOP_MINIMALIST_BACKPACK = 389, f.ID_ALL_OVER_LONGLINE_SPORTS_BRA = 477, f.ID_YOGA_SHORTS = 281, f.ID_MEGGINGS = 288, f.ID_LEGGINGS_DISCONTINUED = 175, f.ID_4301_PLUS_SIZE_LEGGINGS = 334, f.ID_LEGGINGS_KIDS = 250, f.ID_KIDS_LEGGINGS = 322, f.ID_YOUTH_LEGGINGS = 323, f.ID_COLOR_MUG = 403, f.IPHONE_LIQUID_GLITTER_CASE = 381, f.ID_AA_2007 = 10, f.ID_GILDAN_18500 = 146, f.ID_GILDAN_18000 = 145, f.ID_NEX_LEVEL_9700 = 343, f.ID_BELLA_CANVAS_JACKET_3710 = 339, f.ID_BELLA_CANVAS_3501 = 356, f.ID_GILDAN_2400 = 57, f.ID_GILDAN_2000 = 48, f.ID_CHAMPION_CC8C = 374, f.ID_CUT_SEW_MEN_TANK_TOP = 276, f.ID_COTTON_HERITAGE_M2580 = 380, f.ID_HEXAGON_EARRINGS = 425, f.ID_ALL_OVER_FACE_MASK = 434, f.ID_TOUCH_TOOL = 444, f.ID_PET_TAG = 466, f.ID_ORGANIC_CROP_TOP = 450, f.ID_AS_COLOUR_5001 = 440, f.ID_STTU755 = 456, f.ID_EMBROIDERY_PATCH = 516, f.ID_EMBROIDERY_PATCH_TEST_PRODUCT = 617, f.ID_SHAKA_WEAR_SHHTDS = 515, f.ID_304_LONG_SHORTS = 332, f.ID_305_SHORT_SHORTS = 330, f.ID_SKATER_SKIRT = 314, f.ID_MINI_SKIRT_SUBLIMATION = 204, f.ID_PENCIL_SKIRT_SUBLIMATION = 199, f.ID_METAL_PRINT_SUBLIMATION = 588, f.ID_SOCKS = 186, f.ID_ANKLE_SOCKS_OLD = 326, f.ID_ANKLE_SOCKS = 503, f.ID_BASKETBALL_SOCKS = 504, f.ID_PILLOWCASE = 89, f.ID_CANDLE_SOY_WAX = 645, f.ID_WATER_BOTTLE = 382, f.ID_STSU822 = 479, f.ID_STSU823 = 493, f.ID_STSU824 = 442, f.ID_BAGBASE_BG126 = 416, f.ID_HUSKY_CA6689 = 462, f.ID_SOLS_03574 = 506, f.ID_PREMIUM_ECO_HOODIE = 522, f.ID_CUSTOM_RECYCLED_POLYSTER_FABRIC = 524, f.ID_GREETING_CARD = 568, f.ID_STANDART_POSTCARD = 433, f.ID_AA_2007_T_SHIRT = 10, f.ID_AA_2408_TANK_TOP = 11, f.ID_AA_TR301_T_SHIRT = 150, f.ID_AA_TR308_TANK = 147, f.ID_AA_TR401_TRACK_SHIRT = 141, f.ID_TA_320C_SWEATSHIRT = 577, f.ID_ANVIL_882L_TANK_TOP = 97, f.ID_ANVIL_71600 = 246, f.ID_BC_3001_T_SHIRT = 71, f.ID_BC_3005_TEE = 223, f.ID_BC_3413_T_SHIRT = 162, f.ID_BC_3480_TANK = 248, f.ID_BC_3719_HOODIE = 294, f.ID_BC_3710_JACKET = 339, f.ID_BC_6004_TEE = 255, f.ID_BC_8413_T_SHIRT = 173, f.ID_BC_8800_TANK = 222, f.ID_BC_8803_TANK = 271, f.ID_THROW_BLANKET = 395, f.ID_TURKISH_TOWEL = 441, f.ID_CHAMPION_S171_HOODIE = 319, f.ID_GILDAN_2000_T_SHIRT = 48, f.ID_GILDAN_2400_T_SHIRT = 57, f.ID_GILDAN_18000_SWEATSHIRT = 145, f.ID_GILDAN_64000_T_SHIRT = 12, f.ID_GILDAN_5000L_T_SHIRT = 46, f.ID_MENS_HEAVYWEIGHT_GILDAN_5000 = 438, f.ID_LAA_2332_T_SHIRT = 224, f.ID_NL_3600_CREW = 108, f.ID_NL_3900_TEE = 112, f.ID_NL_6733_TANK = 163, f.ID_NL_9700_JACKET = 343, f.ID_T_SHIRT_BB453 = 185, f.ID_T_SHIRT_TC245 = 233, f.ID_HANES_P_160 = 457, f.ID_HANES_P_170 = 455, f.ID_YUPOONG_1501KC_BEANIE = 266, f.ID_YUPOONG_6606_CAP = 252, f.ID_OTTO_CAP = 78, f.ID_PILLOW_W_STUFFING_RECTANGULAR = 214, f.ID_PILLOWCASE_RECTANGULAR = 215, f.ID_EMBROIDERY_APRON = 297, f.ID_LAPTOP_SLEEVE = 394, f.ID_CUSTOM_PRODUCT = 245, f.ID_EMBROIDERY_SAMPLE = 231, f.ID_TOWEL = 259, f.ID_BEAN_BAG = 337, f.ID_BEAN_BAG_CASE = 338, f.ID_FLIP_FLOPS = 359, f.ID_FANNYPACK = 350, f.ID_RABBIT_SKINS_1004 = 355, f.ID_BACKPACK = 279, f.ID_CH_M7580 = 412, f.ID_KK_KK933 = 413, f.ID_FACE_MASK = 417, f.ID_NECK_GAITER = 420, f.ID_CANVAS = 3, f.ID_IND20SRT_SHORTS = 482, f.ID_DISTRESSED_DAD_HAT = 396, f.ID_OTTO_125_978 = 77, f.ID_OTTO_18_1248 = 327, f.ID_FLEXFIT_6277 = 140, f.ID_YUPOONG_6245 = 206, f.ID_YUPOONG_6089M = 99, f.ID_AS_COLOUR_BUCKET_HAT_1117 = 510, f.ID_AS_COLOUR_BUCKET_HAT_1118 = 607, f.ID_NEWHATTAN_1400 = 560, f.ID_NEWHATTAN_1500 = 557, f.ID_STICKER_SHEET = 505, f.ID_SOCCO_SC200 = 502, f.ID_BELLA_CANVAS_8430 = 134, f.ID_AA_TR408W = 148, f.ID_SWEATSHIRT_F497 = 151, f.ID_BELLA_CANVAS_3939 = 293, f.ID_BELLA_CANVAS_7502 = 317, f.ID_BELLA_CANVAS_3483 = 365, f.ID_RABBIT_SKINS_4400 = 234, f.ID_BELLA_CANVAS_100B = 308, f.ID_SPORTSMAN_SP412 = 520, f.ID_RECYCLED_CUFFED_BEANIE = 519, f.ID_BABYBUGZ_BZ10 = 512, f.ID_MENS_PIMA_COTTON_T_SHIRT = 563, f.ID_HIGH_TOP_CANVAS_SHOES_MENS = 513, f.ID_HIGH_TOP_CANVAS_SHOES_WOMENS = 525, f.ID_SLIP_ON_CANVAS_SHOES_MENS = 574, f.ID_SLIP_ON_CANVAS_SHOES_WOMENS = 575, f.ID_LACE_UP_CANVAS_SHOES_MENS = 578, f.ID_LACE_UP_CANVAS_SHOES_WOMENS = 579, f.ID_MENS_ATHLETIC_SHOES = 657, f.ID_WOMENS_ATHLETIC_SHOES = 658, f.ID_IPHONE_CASE = 181, f.ID_IPHONE_CASE_TOUGH = 601, f.ID_AIRPODS_CASES = 605, f.ID_MOUSE_PAD = 518, f.ID_GAMING_MOUSE_PAD = 583, f.ID_WOODEN_ORNAMENTS = 634, f.ID_CHAMPION_TIE_DYE_HOODIE = 464, f.ID_CHAMPION_CW22 = 391, f.ID_ST350 = 406, f.FILTER_DAD_HATS = [206, 85], f.FILTER_MESH_BACK = [100, 182, 252], f.FILTER_BUCKET_HAT = [253], f.FILTER_BEANIE = [81, 178, 79, 93, f.ID_BEECHFIELD_B426], f.FILTER_SNAP_BACK = [77, 99, 91], f.FILTER_FIVE_PANEL_CAMPER = [92, f.ID_OTTO_CAP], f.FILTER_FLEXFIT = [140], f.ENGRAVING_PRODUCTS = [354, 352, 408, 425, 397, 466, 444, 409], f.PRODUCT_IDS_WITH_DTG_DISABLED = [f.ID_CHAMPION_TIE_DYE_HOODIE, f.ID_CHAMPION_CW22, f.ID_NEX_LEVEL_9700, f.ID_BELLA_CANVAS_JACKET_3710, f.ID_ST350], f.PRODUCTS_IDS_WITH_3D_OPTION_DISABLED = [f.ID_AS_COLOUR_BUCKET_HAT_1117, f.ID_NEWHATTAN_1400, f.ID_NEWHATTAN_1500, f.ID_AS_COLOUR_BUCKET_HAT_1118], f.EMBROIDERY_PROFILE_STYLE_CATEGORIES = {
                "Dad hat": f.FILTER_DAD_HATS,
                "Mesh back": f.FILTER_MESH_BACK,
                "Bucket hat": f.FILTER_BUCKET_HAT,
                Beanie: f.FILTER_BEANIE,
                Snapback: f.FILTER_SNAP_BACK,
                "5-Panel Camper": f.FILTER_FIVE_PANEL_CAMPER,
                Flexfit: f.FILTER_FLEXFIT
            }, f.PRODUCTS_WITHOUT_VARIANT_COLOR = [f.ID_ALL_OVER_TOTE, f.ID_ALL_OVER_BEACH_TOTE, f.ID_ALL_OVER_SPORTS_BRA, f.ID_ALL_OVER_SPORTS_BRA_W_PADDING, f.ID_ALL_OVER_BIKINI], f.PRODUCTS_WITH_HIDDEN_BETA_BADGE = [f.ID_GILDAN_2000, f.ID_HANES_P_160, f.ID_HANES_P_170], f.BRAND_AA = "American Apparel", f.BRAND_ADIDAS = "Adidas", f.BRAND_LOS_ANGELES_APPAREL = "Los Angeles Apparel", f.BRAND_BAYSIDE = "Bayside", f.BRAND_SOCCO = "SOCCO", f.PERSONAL_USE_BRANDS = [], f.YOGA_PRODUCTS = [f.ID_LEGGINGS_YOGA, f.ID_LEGGINGS_YOGA_CAPRI, f.ID_YOGA_SHORTS], f.LEGGINGS = [f.ID_LEGGINGS_ALL_OVER, f.ID_MEGGINGS, f.ID_LEGGINGS_DISCONTINUED, f.ID_LEGGINGS_YOGA, f.ID_LEGGINGS_YOGA_CAPRI, f.ID_YOGA_SHORTS, f.ID_4301_PLUS_SIZE_LEGGINGS, f.ID_LEGGINGS_ALL_OVER_SHORTS, f.ID_KIDS_LEGGINGS, f.ID_LEGGINGS_KIDS, f.ID_LEGGINGS_ALL_OVER_CAPRI, f.ID_YOUTH_LEGGINGS, f.ID_LEGGINGS_ALL_OVER_SPORTS], f.JOGGERS_WITH_POCKET_PLACEMENT = [f.ID_KK_KK933, f.ID_CH_M7580], f.WITH_LARGE_FRONT_EMBROIDERY = [], f.EMBROIDERY_WITH_DTG_LABEL = [f.ID_STTU755, f.ID_BC_3001_T_SHIRT, f.ID_GILDAN_64000_T_SHIRT], f.KINCUSTOMS_SHOES = [f.ID_HIGH_TOP_CANVAS_SHOES_MENS, f.ID_HIGH_TOP_CANVAS_SHOES_WOMENS, f.ID_SLIP_ON_CANVAS_SHOES_MENS, f.ID_SLIP_ON_CANVAS_SHOES_WOMENS, f.ID_LACE_UP_CANVAS_SHOES_MENS, f.ID_LACE_UP_CANVAS_SHOES_WOMENS, f.ID_MENS_ATHLETIC_SHOES, f.ID_WOMENS_ATHLETIC_SHOES], f.PATCHES = [f.ID_EMBROIDERY_PATCH_TEST_PRODUCT, f.ID_EMBROIDERY_PATCH], f.UPCOMING_DISCONTINUED_PRODUCT_REPLACEMENT_MAP = {
                [f.ID_HANES_P_160]: f.ID_GILDAN_18000,
                [f.ID_HANES_P_170]: f.ID_GILDAN_18500
            }, f.SIZE_ONE_SIZE = "One size", f.ColorPair = function() {}, f.ColorPair.prototype.colorCode = "", f.ColorPair.prototype.colorCode2 = "", f.ColorPair.prototype.colorName = "", f.ColorPair.prototype.getColorCodes = function() {
                var t = [];
                return (null == this ? void 0 : this.colorCode) && t.push(this.colorCode), (null == this ? void 0 : this.colorCode2) && t.push(this.colorCode2), t
            }, f.LABELS = {}, f.LABELS[g.V_] = dlang("products", "Embroidery"), f.LABELS[g.GE] = dlang("products", "Mug"), f.LABELS[g._j] = dlang("products", "Poster"), f.LABELS[g.WK] = dlang("products", "Framed Poster"), f.LABELS[g._E] = dlang("products", "Canvas"), f.LABELS[g.ml] = dlang("products", "Printing (DTG)"), f.LABELS[g._M] = dlang("products", "Sublimation"), f.LABELS[g.ZA] = dlang("products", "Phone case"), f.LABELS[g.AN] = dlang("products", "Cut & sew"), f.LABELS[g.hC] = dlang("products", "Engraving"), f.LABELS[g.wT] = dlang("products", "Tote"), f.LABELS[g.F9] = dlang("products", "Shoes"), f.LABELS[g.pu] = dlang("products", "Hang tag"), f.LABELS[g.Ub] = dlang("products", "DTF printing"), f.LABELS["FRAMED-PRINT"] = dlang("products", "Framed canvas"), f.LABELS[g.M$] = dlang("products", "One Size"), window && ((globalThis || {}).PFItemsProductItem = f)
        },
        81841: (t, e, r) => {
            r.d(e, {
                U: () => s
            });
            var i = r(59597),
                o = r(30663),
                n = r(11876);
            const s = Class({
                title: "",
                name: null,
                type: null,
                defaultValue: null,
                disabledValues: [],
                disabledValuesLabelText: "",
                maxCount: null,
                placeholder: null,
                values: null,
                prices: {},
                condition: {},
                expanded: {},
                visible: !0,
                labelTooltipText: "",
                getConditionFilesTypes: function() {
                    return this.condition && this.condition.fileTypes ? this.condition.fileTypes : []
                },
                getConditionLayerTypes: function() {
                    return this.condition && this.condition.layerTypes ? this.condition.layerTypes : []
                },
                getExpandedConditionFilesTypes: function() {
                    return this.expanded && this.expanded.fileTypes ? this.expanded.fileTypes : []
                },
                getConditionOptions: function() {
                    return this.condition && this.condition.options ? this.condition.options : {}
                },
                hasOptionCondition: function() {
                    return !(!this.condition || !this.condition.options)
                },
                hasFileCondition: function() {
                    return this.getConditionFilesTypes().length > 0
                },
                hasExpandedFileCondition: function() {
                    return this.getExpandedConditionFilesTypes().length > 0
                },
                getExpandedConditionOptions: function() {
                    return this.expanded && this.expanded.options ? this.expanded.options : {}
                },
                hasExpandedCondition: function() {
                    return !(!this.expanded || !this.expanded.options)
                },
                hasRequiredOptions: function() {
                    return !(!this.required || !this.required.options)
                },
                hasRequiredFileCondition: function() {
                    return this.getRequiredConditionFilesTypes().length > 0
                },
                getRequiredOptions: function() {
                    return this.required && this.required.options ? this.required.options : {}
                },
                getRequiredConditionFilesTypes: function() {
                    return this.required && this.required.fileTypes ? this.required.fileTypes : []
                },
                getPrice: function(t) {
                    return this.prices && this.prices[t] || 0
                },
                isTypeText: function() {
                    return [n.a0, n.PL].includes(this.type)
                },
                isTypeBoolean: function() {
                    return this.type === n.ty
                },
                isTypeColor: function() {
                    return this.type === n.WM
                },
                isEmbroideryType: function() {
                    return this.name === n.Pr
                },
                isEmbroideryFrontColors: function() {
                    return this.name === n.uY
                },
                isEmbroideryFront3dColors: function() {
                    return this.name === n.IK
                },
                isEmbroideryLeftColors: function() {
                    return this.name === n.wG
                },
                isEmbroideryRightColors: function() {
                    return this.name === n._q
                },
                isEmbroideryBackColors: function() {
                    return this.name === n.vP
                },
                isEmbroideryLeftChestColors: function() {
                    return this.name === n.F$
                },
                isEmbroideryRightChestColors: function() {
                    return this.name === n.k3
                },
                isEmbroideryTopLeftChestColors: function() {
                    return this.name === n.PF
                },
                isEmbroideryCenterChestColors: function() {
                    return this.name === n.$o
                },
                isEmbroideryLargeCenterColors: function() {
                    return this.name === n.Z_
                },
                isEmbroideryLargeCornerRightColors: function() {
                    return this.name === n.z6
                },
                isEmbroideryLeftCornerColors: function() {
                    return this.name === n.eo
                },
                isEmbroideryRightCornerColors: function() {
                    return this.name === n.$0
                },
                isEmbroideryLeftInsideColors() {
                    return this.name === n.J4
                },
                isEmbroideryRightInsideColors() {
                    return this.name === n.SK
                },
                isEmbroideryLeftOutsideColors() {
                    return this.name === n.Yw
                },
                isEmbroideryRightOutsideColors() {
                    return this.name === n.nq
                },
                isEmbroideryPatchFrontColors() {
                    return this.name === n.m1
                },
                isEmbroiderySleeveLeftTopColors() {
                    return this.name === n.UG
                },
                isEmbroiderySleeveRightTopColors() {
                    return this.name === n.vZ
                },
                isEmbroideryWristLeftColors() {
                    return this.name === n.LS
                },
                isEmbroideryWristRightColors() {
                    return this.name === n.ix
                },
                isEmbroideryApparelColors: function() {
                    return this.name === n.iw
                },
                isEmbroideryApparelBackColors: function() {
                    return this.name === n.jl
                },
                isStitchColors: function() {
                    return this.name === n.jr
                },
                isVisible: function() {
                    return this.visible
                }
            }, i.$);
            s.getTextThreadName = function(t) {
                const e = n.JM;
                return t === o.TE ? e : t === o.DA ? e + "_" + t.replace("embroidery_apparel_front", "apparel") : e + "_" + t.replace("embroidery_", "")
            }, s.fromArray = function(t, e) {
                var r = new s,
                    i = e.data && e.data.prices ? e.data.prices : {};
                return r.name = t, r.type = e.type, r.title = e.title, r.values = e.values, r.defaultValue = e.default, r.placeholder = e.placeholder, r.maxCount = e.max_count, r.condition = e.condition, r.required = e.required, r.expanded = e.expanded, r.prices = e.price || i, r
            }, window && ((globalThis || {}).PFItemsProductOptionItem = s)
        },
        58334: (t, e, r) => {
            r.d(e, {
                O: () => u
            });
            var i = r(82320),
                o = r(4473),
                n = r(9350),
                s = r(35550),
                a = r(59597),
                c = r(9651);
            const u = function() {};
            u.prototype = new a.$, u.prototype.variantId = 0, u.prototype.productId = 0, u.prototype.name = "", u.prototype.price = 0, u.prototype.priceData = null, u.prototype.size = "", u.prototype.translatedSize = "", u.prototype.urlImage = "", u.prototype.isActive = null, u.prototype.hasStock = null, u.prototype.isDisabledInPush = null, u.prototype.isTemporaryOutOfStock = null, u.prototype.dimensions = null, u.prototype.variantDimensions = null, u.prototype.color = "", u.prototype.colorCode = "#000000", u.prototype.colorCode2 = "#000000", u.prototype.images = null, u.prototype.availability = null, u.prototype.availabilityByTechniques = null, u.prototype.priceByTechnique = null, u.fromArray = function(t) {
                var e = new u;
                if (c.U.O2O(e, t), e.price = parseFloat(e.price), t && (t.dimensions && (e.dimensions = s.y.fromArray(t.dimensions)), t.priceData && (e.priceData = n.B.fromArray(t.priceData)), t.variantDimensions && (e.variantDimensions = s.y.fromArray(t.variantDimensions)), t.images && (e.images = t.images.slice()), t.priceByTechnique))
                    for (const [r, i] of Object.entries(t.priceByTechnique)) e.priceByTechnique[r] = n.B.fromArray(i);
                return e
            }, u.prototype.getCachedProduct = function() {
                return (new i.m).getCachedProductById(this.productId)
            }, u.prototype.getPriceReadable = function() {
                return prettyMoney(this.priceData.price, this.priceData.currency)
            }, u.prototype.useVariantColorAsPrintFileBackground = function() {
                return this.colorCode && -1 === o.W.PRODUCTS_WITHOUT_VARIANT_COLOR.indexOf(this.getCachedProduct().productId)
            }, u.prototype.getFulfillmentCountries = function() {
                var t = new i.m;
                return t.hasCachedProductVariantRegions(this.productId) ? t.getCachedProductVariantRegions(this.productId).getRegionsForVariant(this.variantId) : this.getCachedProduct().fulfillmentCountries || {}
            }, u.ID_CUSTOM_PRODUCT = 8401, window && ((globalThis || {}).PFItemsVariantItem = u)
        },
        14451: (t, e, r) => {
            r.d(e, {
                p: () => u
            });
            var i = r(19639),
                o = r(5532),
                n = r(59597),
                s = r(9651),
                a = r(30663),
                c = r(11876);
            const u = Class({
                toArrayKeys: ["fileId", "type", "position", "options"],
                fileId: 0,
                type: "",
                insideLabelTemplate: null,
                itemId: 0,
                price: 0,
                discountedPrice: 0,
                title: "",
                group: "",
                fileErrors: [],
                fileStatus: "",
                conflictingTypes: [],
                position: null,
                isLicensedAsset: !1,
                containsProContent: !1,
                hasErrors: function() {
                    return this.fileErrors && this.fileErrors.length > 0
                },
                willConflictWith: function(t) {
                    return !!this.exists() && (this.conflictingTypes && this.conflictingTypes.indexOf(t) > -1)
                },
                exists: function() {
                    return this.fileId > 0
                },
                hasTemporaryGeneratorFile: function() {
                    return this.fileId === o.q.ID_TEMP_GENERATOR_FILE
                },
                getDigitizationPuffType: function(t) {
                    return [a.Yw, a.aZ, a.Ln, a.DA, a.EU, a.PJ, a.mg, a.KK, a.sb, a.If, a.Sv, a.U$, a.$W, a.KN, a.pC, a.Mb, a.D2, a.tQ, a.Gq, a.Lb, a.aM, a.YQ].includes(this.type) ? a.Bv : t
                },
                isFlatPuff: function(t) {
                    return this.getDigitizationPuffType(t) === a.Bv
                },
                isMockup: function() {
                    return this.type === a.Lw
                },
                isFront: function() {
                    return [a.nZ, a.Xg].includes(this.type)
                },
                isBack: function() {
                    return [a.zX, a.Y2].includes(this.type)
                },
                isInsideLabel: function() {
                    return a.c7.includes(this.type)
                },
                isOutsideLabel: function() {
                    return this.type === a.Y2
                },
                isStatusUnknown: function() {
                    return this.fileStatus === a.PT
                },
                resetFile: function() {
                    this.fileErrors = [], this.fileId = 0, this.fileStatus = a.PT
                },
                getStatusReadable: function() {
                    switch (this.fileStatus) {
                        case a.Us:
                            return dlang("products", "Great! The file seems to match guidelines.");
                        case a.dG:
                            return dlang("products", "There might be a problem with this file.");
                        case a.qB:
                            return dlang("products", "This file does not match the guidelines.")
                    }
                    return ""
                },
                getClone: function() {
                    var t = new u;
                    return t.fileId = this.fileId, t.fileErrors = this.fileErrors.slice(0), t.fileStatus = this.fileStatus, t.group = this.group, t.itemId = this.itemId, t.price = this.price, t.type = this.type, t.title = this.title, t.conflictingTypes = this.conflictingTypes.slice(0), t
                },
                isRoughlyTheSame: function(t) {
                    if (this.fileId != t.fileId) return !1;
                    var e = this.position,
                        r = t.position;
                    if (e && !r || !e && r) return !1;
                    var i = 1;
                    for (var o in this.isEmbroideryFile() && (i = .1), e) {
                        var n = e[o] - r[o];
                        if (Math.abs(n) > i) return !1
                    }
                    return !0
                },
                getEmbroideryGroup: function() {
                    return this.isEmbroideryApparelFile() ? a.AW : a.H1
                },
                isEmbroideryFile: function() {
                    return a.aB.includes(this.type)
                },
                isEmbroideryHatFile: function() {
                    return a.cb.includes(this.type)
                },
                isEmbroideryApparelFile: function() {
                    return a.cn.includes(this.type)
                },
                isEmbroiderySide: function() {
                    return [a.Yw, a.aZ].includes(this.type)
                },
                isEmbroideryFront: function() {
                    return this.type === a.TE
                },
                isEmbroideryBack: function() {
                    return this.type === a.Ln
                },
                isEmbroiderySocks: function() {
                    return [a.$W, a.KN, a.pC, a.Mb].includes(this.type)
                },
                isSleeveFile: function() {
                    return [a.ZB, a.ju].includes(this.type)
                },
                isLabel() {
                    return a.fI.includes(this.type)
                }
            }, n.$);
            u.getThreadNameByPlacement = function(t) {
                const e = a.Hu[t];
                return e === c.Pr ? c.uY : e
            }, u.fromArray = function(t) {
                var e = new u,
                    r = t.position;
                return delete t.position, s.U.O2O(e, t), r && (e.position = i.K.fromArray(r)), e
            }, window && ((globalThis || {}).PFItemsOrderLineItemFile = u)
        },
        83056: (t, e, r) => {
            r.d(e, {
                Q: () => n
            });
            r(14451);
            var i = r(59597),
                o = r(30663);
            const n = function() {
                this.itemList = []
            };
            n.prototype = new i.$, n.prototype.itemList = null, n.prototype.existsItemWithPuffType = function(t) {
                return this.itemList.filter((function(e) {
                    return e.puffType === t
                })).length > 0
            }, n.prototype.existsItemWithFlatApparel = function() {
                return this.itemList.filter((function(t) {
                    return t.isApparel() && t.isFlatPuff()
                })).length > 0
            }, n.prototype.existsItemWithFlatHat = function() {
                return this.itemList.filter((function(t) {
                    return t.isHat() && t.isFlatPuff()
                })).length > 0
            }, n.prototype.isDigitizedLineItemFile = function(t, e) {
                return t.isEmbroideryApparelFile() ? this.existsItemWithFlatApparel() : t.isEmbroideryHatFile() && e === o.Bv ? this.existsItemWithFlatHat() : this.existsItemWithPuffType(t.getDigitizationPuffType(e))
            }, n.prototype.getPaidTypeList = function() {
                var t = [];
                for (var e in this.itemList) {
                    var r = this.itemList[e];
                    r.isApparel() ? t.push(o.lU) : t.push(r.puffType)
                }
                return t = t.filter((function(e, r) {
                    return t.indexOf(e) === r
                })), t
            }, window && ((globalThis || {}).PFItemsDigitizedItems = n)
        },
        5527: (t, e, r) => {
            r.d(e, {
                w: () => s
            });
            var i = r(59597),
                o = r(9651),
                n = r(30663);
            const s = function() {};
            s.prototype = new i.$, s.prototype.puffType = null, s.prototype.placement = null, s.prototype.isApparel = function() {
                return n.cn.includes(this.placement)
            }, s.prototype.isHat = function() {
                return n.cb.includes(this.placement)
            }, s.prototype.isFlatPuff = function() {
                return this.puffType === n.Bv
            }, s.fromArray = function(t) {
                var e = new s;
                return o.U.O2O(e, t), e
            }, s.TYPE_TITLE_FLAT = dlang("dashboard", "Flat"), s.TYPE_TITLE_3D = dlang("dashboard", "3D"), s.TYPE_TITLE_BOTH = dlang("dashboard", "Partial 3D"), s.TYPE_TITLE_ADJUSTMENT = dlang("dashboard", "Flat apparel"), s.DIGITIZATION_TYPE_TITLES = {
                flat: s.TYPE_TITLE_FLAT,
                "3d": s.TYPE_TITLE_3D,
                both: s.TYPE_TITLE_BOTH,
                adjustment: s.TYPE_TITLE_ADJUSTMENT
            }, window && ((globalThis || {}).PFItemsDigitizedItem = s)
        },
        14544: (t, e, r) => {
            r.d(e, {
                s: () => n
            });
            var i = r(22916),
                o = r(70418);
            const n = function() {
                this.cache = n.cache, this.cacheGenerator = n.cacheGenerator
            };
            n.cache = null, n.cacheGenerator = null, n.prototype.get = function(t) {
                null === this.cache ? (0, o.r)("category/get", {}, $.proxy(this.getRe, this, t, !1)) : t(this.cache)
            }, n.prototype.getForGenerator = function(t, e) {
                null === this.cacheGenerator ? (0, o.r)("category/get", {
                    forGenerator: !0,
                    hideHidden: !0,
                    storeId: t
                }, $.proxy(this.getRe, this, e, !0)) : e(this.cacheGenerator)
            }, n.prototype.getRe = function(t, e, r) {
                var i = this.cacheCategoryList(r.categories, e);
                t && t(i)
            }, n.prototype.cacheCategoryList = function(t, e) {
                var r, o = [];
                for (r in t) {
                    var s = i.m.fromArray(t[r]);
                    s.isHidden || o.push(s)
                }
                for (r in o)
                    for (var a in o[r].hasChildren = !1, o)
                        if (o[r].categoryId === o[a].parentId) {
                            o[r].hasChildren = !0;
                            break
                        } return e ? (n.cacheGenerator = o, this.cacheGenerator = o) : (n.cache = o, this.cache = o), o
            }, n.prototype.getById = function(t) {
                var e = this.findCategoryById(t);
                if (e = e || this.findGeneratorCategoryById(t)) return e;
                if (PF.DEV) throw "Categories not loaded, or a missing category: " + t;
                return console.error("Categories not yet loaded, or a missing categoryId: " + t), new i.m
            }, n.prototype.getByParentId = function(t) {
                var e = [],
                    r = [];
                for (var i in null !== this.cache && (r = r.concat(this.cache)), null !== this.cacheGenerator && (r = r.concat(this.cacheGenerator)), 0 == (r = r.filter((function(t, e, r) {
                        return r.map((function(t) {
                            return t.categoryId
                        })).indexOf(t.categoryId) === e
                    }))).length && console.error("No categories loaded!"), r) r[i].parentId == t && e.push(r[i]);
                return e
            }, n.prototype._findCategoryById = function(t, e) {
                for (var r in t) {
                    var i = t[r];
                    if (i.categoryId == e) return i
                }
                return !1
            }, n.prototype.findCategoryById = function(t) {
                return this._findCategoryById(this.cache, t)
            }, n.prototype.findGeneratorCategoryById = function(t) {
                return this._findCategoryById(this.cacheGenerator, t)
            }, n.prototype.clearCache = function() {
                n.cache = null, this.cache = null
            }, n.prototype.getPath = function(t) {
                for (var e = []; t;) {
                    var r = this.getById(t);
                    t = r.parentId, e.unshift(r)
                }
                return e
            }, n.CATEGORY_HATS = 8, n.CATEGORY_APPAREL = 3, n.CATEGORY_ALL_OVER = 37, n.CATEGORY_TOTES = 7, (globalThis || {}).PFRepositoriesCategoryRepository = n
        },
        82320: (t, e, r) => {
            r.d(e, {
                m: () => E
            });
            var i = r(98737),
                o = r(56805),
                n = r(4473),
                s = r(9651);
            const a = Class({
                product: null,
                description: "",
                templates: {},
                pricing: null
            });
            a.fromArray = function(t) {
                var e = new a;
                return s.U.O2O(e, t), e.product = n.W.fromArray(t.product), e
            }, window && ((globalThis || {}).PFItemsProductDetails = a);
            const c = function() {
                this.items = []
            };
            c.prototype.page = 0, c.prototype.pages = 0, c.prototype.totalCount = 0, c.prototype.totalCountBeforeFilters = 0, c.prototype.items = null, window && ((globalThis || {}).PFItemsProductReviewList = c);
            var u = r(59597);
            const p = function() {};
            (p.prototype = new u.$).urlThumb = "", p.prototype.urlLarge = "", p.prototype.downloadUrl = "", p.prototype.key = "", p.fromArray = function(t) {
                var e = new p;
                return s.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsUploadItem = p);
            const l = function() {
                this.images = []
            };
            (l.prototype = new u.$).reviewId = 0, l.prototype.variantId = 0, l.prototype.name = "", l.prototype.isOwn = !1, l.prototype.isApproved = !1, l.prototype.canDelete = !1, l.prototype.createdAt = 0, l.prototype.review = "", l.prototype.reviewComplaint = null, l.prototype.overallQualityStarRating = null, l.prototype.images = null, l.prototype.technique = "", l.prototype.customerReviews = null, l.prototype.helpfulCount = 0, l.prototype.hasRated = !1, l.prototype.fromCountry = null, l.prototype.overallRating = null, l.prototype.isTopReviewer = !1, l.prototype.techniqueDisplayName = "", l.prototype.variantInfo = null, l.prototype.productId = null, l.prototype.translation = null, l.fromArray = function(t) {
                const e = new l,
                    r = t.images;
                for (const t in r) e.images.push(p.fromArray(r[t]));
                return delete t.images, s.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFItemsProductReviewItem = l);
            var _ = r(14451),
                d = r(92939),
                h = r(58334),
                I = r(70418),
                y = r(62186);
            const E = function() {
                this.productItemCache = E.productItemCache, this.variantItemCache = E.variantItemCache, this.productListCache = E.productListCache, this.productItemByCategoryIdCache = E.productItemByCategoryIdCache
            };
            E.prototype._currency = null, E.prototype._storeId = null, E.prototype.cacheProduct = function(t) {
                this.checkCurrency(t.priceRange.currency), this.productItemCache[t.productId] = t
            }, E.prototype.cacheProductByCategoryId = function(t, e) {
                var r;
                this.checkCurrency(t.priceRange.currency), null !== (r = this.productItemByCategoryIdCache) && void 0 !== r && r[e] || (this.productItemByCategoryIdCache[e] = {}), this.productItemByCategoryIdCache[e][t.productId] = t
            }, E.prototype.cacheVariant = function(t) {
                this.checkCurrency(t.priceData.currency), this.variantItemCache[t.variantId] = t
            }, E.prototype.checkCurrency = function(t) {
                if (E.lastCurrency && E.lastCurrency !== t) {
                    var e = "Different currencies in object cache - " + E.lastCurrency + " != " + t;
                    console.error(e)
                }
                E.lastCurrency = t
            }, E.prototype.setCurrency = function(t) {
                this._currency = t
            }, E.prototype.setStoreId = function(t) {
                this._storeId = t
            }, E.prototype.getCachedProductById = function(t, e) {
                return this.productItemCache[t] ? this.productItemCache[t] : e ? null : (console.error("This product was not cached: " + t), new n.W)
            }, E.prototype.getCachedProductByCategoryId = function(t, e) {
                var r, i;
                return null !== (r = this.productItemByCategoryIdCache) && void 0 !== r && null !== (i = r[e]) && void 0 !== i && i[t] ? this.productItemByCategoryIdCache[e][t] : this.productItemCache[t] ? this.productItemCache[t] : new n.W
            }, E.prototype.getCachedVariantById = function(t, e) {
                return this.variantItemCache[t] ? this.variantItemCache[t] : e ? null : (console.error("This variant was not cached: " + t), new h.O)
            }, E.prototype.getCachedVariantsByProductId = function(t) {
                var e = [];
                for (var r in this.variantItemCache) {
                    var i = this.variantItemCache[r];
                    i.productId == t && e.push(i)
                }
                return e.length || console.error("No variants selected for " + t + " Are you sure you cached them??"), e
            }, E.prototype.cacheProductList = function(t, e) {
                var r = t.getHash();
                for (var i in this.productListCache[r] = e, e.items) {
                    var o = e.items[i];
                    this.cacheProduct(o)
                }
            }, E.prototype.getCachedProductList = function(t) {
                var e = t.getHash(),
                    r = this.productListCache[e];
                return r || !1
            }, E.prototype.clearCache = function() {
                E.productItemCache = {}, E.variantItemCache = {}, E.productListCache = {}, E.lastCurrency = null
            }, E.prototype.getVariantById = function(t, e) {
                (0, I.r)("products/get-variant-by-id", {
                    variantId: t,
                    currency: this._currency
                }, this.getVariantByIdRe.bind(this, e))
            }, E.prototype.getVariantByIdRe = function(t, e) {
                var r = h.O.fromArray(e);
                this.cacheVariant(r), t(r)
            }, E.prototype.getVariants = function(t, e, r) {
                (0, I.r)("products/get-variants", {
                    productId: t,
                    currency: this._currency,
                    storeId: this._storeId,
                    flow: r
                }, this.getVariantsRe.bind(this, e))
            }, E.prototype.getVariantsRe = function(t, e) {
                var r, i = n.W.fromArray(e.product),
                    o = [],
                    s = [];
                for (r in e.variants) {
                    var a = h.O.fromArray(e.variants[r]);
                    o.push(a), this.cacheVariant(a)
                }
                for (r in (0, y.eC)() && (0, y.a$)(), e.itemFiles) s.push(_.p.fromArray(e.itemFiles[r]));
                e.regions && this.cacheProductVariantRegions(i.productId, e.regions);
                var c = [];
                e.allAvailablePlacements && (c = e.allAvailablePlacements.map(d.M.fromArray)), this.cacheProduct(i), t(i, o, s, c, e)
            }, E.prototype.getVariantsReAsync = async function(t) {
                return new Promise((e => {
                    this.getVariantsRe(((t, r, i, o, n) => {
                        e({
                            productItem: t,
                            variants: r,
                            itemFiles: i,
                            allAvailablePlacements: o,
                            response: n
                        })
                    }), t)
                }))
            }, E.prototype.getProductsById = function(t, e, r) {
                r = void 0 !== r && !!r, (0, I.r)("products/get-products-by-id", {
                    productIds: t,
                    withRating: r ? 1 : 0,
                    currency: this._currency
                }, $.proxy(this.getProductsByIdRe, this, e))
            }, E.prototype.getProductsByIdRe = function(t, e) {
                var r = [];
                for (var i in e.items) r.push(n.W.fromArray(e.items[i]));
                t(r)
            }, E.prototype.isExceededProductVariantReviewCount = function(t, e, r) {
                (0, I.r)("product-reviews/is-exceeded-product-variant-review-count", {
                    isEditingReview: e,
                    variantId: t.reviewVariant.variantId,
                    technique: t.reviewVariant.technique,
                    customerId: t.reviewVariant.customerId
                }, (function(t) {
                    r(t.canSubmit, t.reason)
                }))
            }, E.prototype.submitProductReview = function(t, e) {
                (0, I.r)("product-reviews/review-product", t, this.submitProductReviewRe.bind(this, e))
            }, E.prototype.submitProductReviewRe = function(t, e) {
                t(e.isSubmitted, e.reason)
            }, E.prototype.getReviews = function(t) {
                (0, I.r)("product-reviews/get-reviews", {
                    productId: t.productId,
                    page: t.page,
                    stars: t.stars,
                    locale: t.locale,
                    technique: t.technique,
                    withPictures: t.withPictures ? 1 : 0,
                    withText: t.withText ? 1 : 0,
                    ratingCategoryCriterionIds: t.ratingCategoryCriterionIds,
                    colors: t.colors,
                    sizes: t.sizes,
                    sortBy: t.sortBy,
                    perPage: t.perPage
                }, this.getReviewsRe.bind(this, t.callback))
            }, E.prototype.getBrandingOptionsPriceList = function(t, e) {
                (0, I.r)("products/get-branding-option-price-list", {
                    productId: t.productId,
                    currency: this._currency
                }, e)
            }, E.prototype.getReviewsRe = function(t, e) {
                var r = new c,
                    i = e.reviews;
                for (var o in r.page = i.page, r.pages = i.pages, r.totalCount = i.total, r.totalCountBeforeFilters = i.totalCountBeforeFilters, i.items) r.items.push(l.fromArray(i.items[o]));
                t(r)
            }, E.prototype.deleteReview = function(t, e) {
                (0, I.r)("product-reviews/delete-review", {
                    reviewId: t
                }, e)
            }, E.prototype.getCachedProductVariantRegions = function(t) {
                if (this.hasCachedProductVariantRegions(t)) return E.productRegionCache[t];
                console.error("Region data is not cached for product " + t)
            }, E.prototype.hasCachedProductVariantRegions = function(t) {
                return !!E.productRegionCache[t]
            }, E.prototype.cacheProductVariantRegions = function(t, e) {
                var r = new o.x;
                return r.availableRegions = e.availableRegions, r.variantsByRegion = e.variantsByRegion, r.selectedRegions = e.selectedRegions, r.allowedSellingRegions = e.allowedSellingRegions || null, E.productRegionCache[t] = r, r
            }, E.prototype.getLastActiveRegion = function() {
                try {
                    return localStorage && localStorage.getItem("activeRegionFilter") || i.T.DEFAULT_REGION
                } catch (t) {
                    console.log(t)
                }
                return i.T.DEFAULT_REGION
            }, E.prototype.setLastActiveRegion = function(t) {
                try {
                    return localStorage && localStorage.setItem("activeRegionFilter", t)
                } catch (t) {
                    console.log(t)
                }
            }, E.prototype.getActiveStockedInRegion = function(t) {
                if (!localStorage) return null;
                const e = JSON.parse(localStorage.getItem("activeRegionFilterByProduct") || "[]").find((e => e.productId === t));
                return null == e ? void 0 : e.region
            }, E.prototype.setActiveStockedInRegion = function(t, e) {
                if (!localStorage) return null;
                const r = JSON.parse(localStorage.getItem("activeRegionFilterByProduct") || "[]");
                let i = !0;
                r.some((r => {
                    if (r.productId === e) return r.region = t, i = !1, !0
                })), i && r.push({
                    productId: e,
                    region: t
                }), localStorage.setItem("activeRegionFilterByProduct", JSON.stringify(r))
            }, E.prototype.getLastActiveCatalogCategory = function(t) {
                let e = null;
                if (!window.localStorage) return e;
                const r = E.prototype.getLastActiveCategoryFromStorage(t);
                return r && (e = r.catalogCategoryId), e
            }, E.prototype.setLastActiveCatalogCategory = function(t, e) {
                if (!window.localStorage) return;
                const r = E.prototype.getLastActiveCategoryFromStorage(),
                    i = E.prototype.getLastActiveCategoryFromStorage(t) || {
                        productId: t
                    };
                i.catalogCategoryId ? r.map((r => {
                    r.productId === t && (r.catalogCategoryId = e)
                })) : (i.catalogCategoryId = e, r.push(i)), window.localStorage.setItem("activeCatalogCategories", JSON.stringify(r))
            }, E.prototype.getLastActiveCategoryFromStorage = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (!window.localStorage) return null;
                const e = JSON.parse(localStorage.getItem("activeCatalogCategories") || "[]");
                return t ? e.filter((e => e.productId === t))[0] || null : e
            }, E.prototype.setEuropeanLandingRegion = function(t) {
                try {
                    return localStorage && localStorage.setItem("europeLandingRegion", "Europe")
                } catch (t) {
                    console.log(t)
                }
            }, E.prototype.getDetails = function(t, e) {
                E.productDetailsCache[t] ? e(E.productDetailsCache[t]) : (0, I.r)("products/get-details", {
                    productId: t,
                    currency: this._currency
                }, this._getDetailsRe.bind(this, e))
            }, E.prototype._getDetailsRe = function(t, e) {
                var r = a.fromArray(e);
                E.productDetailsCache[r.product.productId] = r, t(r)
            }, E.prototype.saveRecentlyViewedProduct = function(t) {
                var e = this.getRecentlyViewedProductIds();
                e && e.length > 0 ? -1 === e.indexOf(t) && (e.unshift(t), e = e.slice(0, 4)) : e = [t];
                try {
                    localStorage.setItem("viewedProductIds", JSON.stringify(e))
                } catch (t) {
                    console.log(t)
                }
            }, E.prototype.getRecentlyViewedProductIds = function() {
                try {
                    return JSON.parse(localStorage.getItem("viewedProductIds")) || []
                } catch (t) {
                    return []
                }
            }, E.prototype.getRecentlyViewedProducts = function(t) {
                var e = this.getRecentlyViewedProductIds().filter(function(t) {
                    if (!this.productItemCache[t]) return t
                }.bind(this));
                e.length > 0 ? this.getProductsById(e, this._getRecentlyViewedProductsRe.bind(this, t), !0) : this._returnRecentlyViewedProductData(t)
            }, E.prototype._getRecentlyViewedProductsRe = function(t, e) {
                e.forEach(this.cacheProduct, this), this._returnRecentlyViewedProductData(t)
            }, E.prototype._returnRecentlyViewedProductData = function(t) {
                t(this.getRecentlyViewedProductIds().filter(function(t) {
                    const e = this.productItemCache[t];
                    return !!e && !e.doesNotMatchSellingRegion
                }.bind(this)).map((function(t) {
                    return this.productItemCache[t]
                }), this))
            }, E.productItemCache = {}, E.variantItemCache = {}, E.productListCache = {}, E.productRegionCache = {}, E.productDetailsCache = {}, E.productItemByCategoryIdCache = {}, (globalThis || {}).PFRepositoriesProducts = E
        },
        19765: (t, e, r) => {
            r.d(e, {
                y: () => i
            });
            const i = {
                slug: function(t) {
                    return ("" + t).toLowerCase().replace(/[^\w\- ]+/g, "").replace(/ +/g, "-").replace(/\-+/g, "-")
                },
                ucFirst: function(t) {
                    return t[0] ? t[0].toUpperCase() + t.slice(1) : t
                },
                shortenString: function(t, e) {
                    return t.length < e ? t : t.substr(0, e - 1) + "â€¦"
                },
                nl2br: function(t) {
                    return null == t ? "" : (t + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br>$2")
                },
                makeId: function(t) {
                    for (var e = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = r.length, o = 0; o < t; o++) e += r.charAt(Math.floor(Math.random() * i));
                    return e
                },
                isEqual: function(t, e) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return r ? String(t || "").toLowerCase() === String(e || "").toLowerCase() : t === e
                }
            };
            (globalThis || {}).PFUtilsString = i
        },
        3044: (t, e, r) => {
            r.d(e, {
                z: () => n
            });
            var i = r(4473),
                o = r(51122);
            const n = function(t) {
                var e = "lastGeneratorTechnique",
                    r = function() {
                        try {
                            switch (n.storageType) {
                                case n.STORAGE_TYPE_TEMPORARY:
                                    return n._tempStorage;
                                case n.STORAGE_TYPE_LOCAL_STORAGE:
                                    if (!localStorage) return {};
                                    var t = localStorage.getItem(e);
                                    return t ? JSON.parse(t) : {}
                            }
                        } catch (t) {
                            return console.log("Could not get technique from memory, localStorage is not available"), {}
                        }
                    };
                return {
                    getTechniqueFromMemory: function(n) {
                        n || (n = null);
                        var s = r();
                        try {
                            if (i.W.PRODUCT_IDS_WITH_DTG_DISABLED.includes(t) && (s[t] && !localStorage.getItem("wasTechniqueReset") || !PF.Customer.isLogged() && (s[t] === o.ml || !s[t]))) {
                                const r = JSON.parse(localStorage.getItem(e));
                                r && (r[t] = o.V_, localStorage.setItem(e, JSON.stringify(r))), s[t] = o.V_, localStorage.setItem("wasTechniqueReset", "true")
                            }
                        } catch (t) {
                            console.log("Couldnt get technique from memory, localStorage is not available")
                        }
                        return s[t] ? s[t] : n
                    },
                    rememberLastUsedTechnique: function(i) {
                        if (i) {
                            var o = r();
                            o[t] = i,
                                function(t) {
                                    switch (n.storageType) {
                                        case n.STORAGE_TYPE_TEMPORARY:
                                            n._tempStorage = t;
                                            break;
                                        case n.STORAGE_TYPE_LOCAL_STORAGE:
                                            try {
                                                localStorage.setItem(e, JSON.stringify(t))
                                            } catch (t) {
                                                console.error("Could not remember selected technique, Local storage not supported")
                                            }
                                    }
                                }(o)
                        }
                    },
                    isEmbroidery: function(t) {
                        return this.getTechniqueFromMemory(t) === o.V_
                    }
                }
            };
            n.STORAGE_TYPE_LOCAL_STORAGE = "local", n.STORAGE_TYPE_TEMPORARY = "temp", n._tempStorage = {}, n.storageType = n.STORAGE_TYPE_LOCAL_STORAGE, (globalThis || {}).PFUtilsTechniqueMemory = n
        },
        98737: (t, e, r) => {
            r.d(e, {
                T: () => i
            });
            const i = {
                isEuropePrimaryFulfillment: function() {
                    return i.EXCEPTIONAL_COUNTRIES.indexOf(PF.Customer.location.country) > -1
                },
                REGION_EUROPE: "Europe",
                REGION_USA: "USA",
                REGION_JAPAN: ("Japan", "Japan"),
                REGION_USA_AND_EUROPE: "USA and Europe",
                REGION_USA_EUROPE_MEXICO: "USA, Europe, Mexico",
                REGION_MEXICO: "Mexico",
                REGION_EUROPE_MEXICO: "Europe and Mexico",
                REGION_EUROPE_SPAIN: "Europe/Spain",
                REGION_EUROPE_LATVIA: "Europe/Latvia",
                REGION_AUSTRALIA: "Australia",
                REGION_NEW_ZEALAND: "New Zealand",
                REGION_CANADA: "Canada",
                REGION_BRAZIL: "Brazil",
                REGION_NORTH_AMERICA: "North America"
            };
            i.DEFAULT_REGION = i.REGION_USA, i.EXCEPTIONAL_COUNTRIES = ["AM", "AZ", "BH", "CN", "GE", "HK", "ID", "IN", "IL", "JP", "JO", "KZ", "KW", "KG", "LB", "MO", "MY", "MN", "OM", "PK", "PH", "SA", "SG", "LK", "TW", "TJ", "TH", "TR", "TM", "AE", "UZ", "VN", "YE", "QA", "AI", "AG", "AR", "BR", "CL", "CO", "DM", "GL", "JM", "PY", "PE", "SR", "UY", "VE", "BJ", "BW", "CM", "CV", "CD", "EG", "ER", "GH", "KE", "ML", "MU", "MA", "MZ", "NA", "NG", "SC", "ZA", "TZ", "TN", "KR"], i.REGION_USA_ABBREVIATION = "USA", i.REGION_EUROPE_ABBREVIATION = "EU", i.REGION_MEXICO_ABBREVIATION = "MEX", i.REGION_AUSTRALIA_ABBREVIATION = "AU", i.REGION_JAPAN_ABBREVIATION = "JP", i.REGION_CANADA_ABBREVIATION = "CA", (globalThis || {}).PFVariantPickerRegionPicker = i
        },
        56805: (t, e, r) => {
            r.d(e, {
                x: () => o
            });
            var i = r(9651);
            const o = Class({
                availableRegions: [],
                selectedRegions: [],
                allowedSellingRegions: null,
                variantsByRegion: {},
                regionsMap: {},
                regionsMapTranslated: {},
                abbrMap: {},
                isOutsideSellingRegionProduct: !1,
                isUsRegionContainsMxBranches: !1,
                getRegionsForVariant: function(t) {
                    t = parseInt(t, 10);
                    const e = [];
                    if (!Object.keys(this.variantsByRegion).length) return e;
                    for (let r in this.variantsByRegion) this.variantsByRegion[r].length && this.variantsByRegion[r].indexOf(t) > -1 && e.push(r);
                    return e
                }
            }, i.U.Base);
            o.getFilteredAvailableRegions = function(t) {
                return t.availableRegions = t.availableRegions.filter(Boolean), t
            }, o.REGION_LATVIA = "Latvia", o.REGION_SPAIN = "Spain", (globalThis || {}).PFVariantPickerVariantRegions = o
        },
        64585: (t, e, r) => {
            r.d(e, {
                eA: () => l,
                oY: () => u
            });
            var i = r(9350);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, c(i.key), i)
                }
            }

            function s(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function a(t, e, r) {
                return (e = c(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(t, e || "default");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let u = function() {
                    function t() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        o(this, t), a(this, "techniquePrices", []), this.techniquePrices = e.techniquePrices || []
                    }
                    return s(t, null, [{
                        key: "buildFromRpcDataArray",
                        value: function(e) {
                            const r = [];
                            for (const t in e) {
                                const i = e[t],
                                    o = [];
                                for (const t in i.defaultPrintPrices) {
                                    const e = i.defaultPrintPrices[t];
                                    o.push(new l({
                                        price: e.price,
                                        placementName: e.placementName,
                                        discountedPrice: e.discountedPrice,
                                        discountType: e.appliedDiscount ? e.appliedDiscount.discountType : null,
                                        technique: null == e ? void 0 : e.technique,
                                        inclusionPriority: null == e ? void 0 : e.inclusionPriority
                                    }))
                                }
                                const n = new p({
                                    technique: i.technique,
                                    defaultPrintPrices: o,
                                    productionCurrency: i.productionCurrency
                                });
                                r.push(n)
                            }
                            return new t({
                                techniquePrices: r
                            })
                        }
                    }]), t
                }(),
                p = s((function t() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, t), a(this, "technique", null), a(this, "defaultPrintPrices", []), a(this, "productionCurrency", null), this.technique = e.technique || null, this.defaultPrintPrices = e.defaultPrintPrices || [], this.productionCurrency = e.productionCurrency || null
                })),
                l = s((function t() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, t), a(this, "price", 0), a(this, "discountedPrice", 0), a(this, "placementName", null), a(this, "discountType", null), a(this, "inclusionPriority", 0), a(this, "technique", null), this.price = e.price || 0, this.discountedPrice = e.discountType && e.discountType === i.B.DISCOUNT_TYPE_PLACEMENT_DISCOUNT ? e.discountedPrice : e.discountedPrice || e.price, this.placementName = e.placementName || null, this.discountType = e.discountType || null, this.inclusionPriority = e.inclusionPriority || null, this.technique = e.technique || null
                }))
        },
        61005: (t, e, r) => {
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, a(i.key), i)
                }
            }

            function n(t, e, r) {
                return e && o(t.prototype, e), r && o(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function s(t, e, r) {
                return (e = a(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function a(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(t, e || "default");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            r.d(e, {
                GY: () => l,
                KF: () => p,
                U8: () => u,
                Vr: () => c,
                x$: () => _
            });
            const c = "large_embroidery",
                u = "large_dtg",
                p = "large_dtg",
                l = "coloreel";
            let _ = function() {
                    function t() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t), s(this, "servicePrices", []), this.servicePrices = e.servicePrices || []
                    }
                    return n(t, null, [{
                        key: "buildFromRpcDataArray",
                        value: function(e) {
                            const r = [];
                            for (const t in e) {
                                const i = e[t];
                                r.push(new d(i))
                            }
                            return new t({
                                servicePrices: r
                            })
                        }
                    }]), t
                }(),
                d = n((function t() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t), s(this, "service", null), s(this, "category", null), s(this, "price", null), s(this, "discountedPrice", null), s(this, "currency", null), s(this, "productionCurrency", null), this.service = e.service || null, this.category = e.category || null, this.price = e.price || 0, this.discountedPrice = e.discountedPrice || 0, this.currency = e.currency || null, this.productionCurrency = e.productionCurrency || null
                }))
        },
        11876: (t, e, r) => {
            r.d(e, {
                $0: () => W,
                $b: () => st,
                $o: () => Y,
                AH: () => B,
                AW: () => ct,
                DV: () => u,
                F$: () => H,
                Fn: () => it,
                Hj: () => R,
                IK: () => l,
                IZ: () => h,
                J1: () => S,
                J4: () => K,
                JM: () => d,
                Jy: () => m,
                K5: () => v,
                KW: () => b,
                L$: () => i,
                LS: () => et,
                Lk: () => I,
                PF: () => V,
                PL: () => n,
                Pr: () => p,
                SK: () => k,
                UG: () => Q,
                WM: () => s,
                XY: () => O,
                X_: () => f,
                Yw: () => q,
                Z_: () => J,
                _q: () => M,
                a0: () => o,
                aD: () => nt,
                bW: () => L,
                eo: () => x,
                ez: () => E,
                i$: () => g,
                iD: () => A,
                iw: () => j,
                ix: () => rt,
                jl: () => X,
                jr: () => ot,
                k3: () => F,
                m1: () => $,
                nh: () => ut,
                nq: () => z,
                om: () => N,
                q0: () => T,
                sH: () => y,
                tD: () => C,
                tN: () => c,
                ty: () => a,
                uY: () => _,
                uo: () => D,
                vP: () => U,
                vZ: () => tt,
                wG: () => w,
                yC: () => G,
                yF: () => P,
                yZ: () => at,
                z6: () => Z
            });
            const i = "radio",
                o = "text",
                n = "single_line_text",
                s = "multi_select",
                a = "bool",
                c = "notes",
                u = "font",
                p = "embroidery_type",
                l = "thread_colors_3d",
                _ = "thread_colors",
                d = "text_thread_colors",
                h = "text_thread_colors_left",
                I = "text_thread_colors_right",
                y = "text_thread_colors_back",
                E = "text_thread_colors_chest_left",
                g = "text_thread_colors_chest_top_left",
                T = "text_thread_colors_chest_center",
                f = "text_thread_colors_large_center",
                A = "text_thread_colors_large_corner_right",
                S = "text_thread_colors_corner_left",
                C = "text_thread_colors_corner_right",
                D = "text_thread_colors_inside_left",
                O = "text_thread_colors_inside_right",
                P = "text_thread_colors_outside_left",
                m = "text_thread_colors_outside_right",
                R = "text_thread_colors_apparel",
                L = "text_thread_colors_apparel_back",
                N = "text_thread_colors_patch_front",
                v = "text_thread_colors_sleeve_left_top",
                b = "text_thread_colors_sleeve_right_top",
                B = "text_thread_colors_wrist_left",
                G = "text_thread_colors_wrist_right",
                w = "thread_colors_left",
                M = "thread_colors_right",
                U = "thread_colors_back",
                H = "thread_colors_chest_left",
                F = "thread_colors_chest_right",
                V = "thread_colors_chest_top_left",
                Y = "thread_colors_chest_center",
                x = "thread_colors_corner_left",
                W = "thread_colors_corner_right",
                K = "thread_colors_inside_left",
                k = "thread_colors_inside_right",
                q = "thread_colors_outside_left",
                z = "thread_colors_outside_right",
                $ = "thread_colors_patch_front",
                J = "thread_colors_large_center",
                Z = "thread_colors_large_corner_right",
                j = "thread_colors_apparel",
                X = "thread_colors_apparel_back",
                Q = "thread_colors_sleeve_left_top",
                tt = "thread_colors_sleeve_right_top",
                et = "thread_colors_wrist_left",
                rt = "thread_colors_wrist_right",
                it = "lifelike",
                ot = "stitch_color",
                nt = "inside_pocket",
                st = "thread_colors_outline",
                at = "white",
                ct = "clear",
                ut = [ot, nt]
        },
        62186: (t, e, r) => {
            r.d(e, {
                Ah: () => T,
                Aw: () => hasEbayStockQuantityExceededError,
                B_: () => p,
                H4: () => _,
                KD: () => n,
                L7: () => a,
                S1: () => u,
                TU: () => l,
                XR: () => S,
                a$: () => s,
                a1: () => h,
                b6: () => E,
                bH: () => y,
                eC: () => O,
                g7: () => c,
                kd: () => C,
                l0: () => f,
                nQ: () => I,
                nm: () => A,
                uZ: () => d,
                vv: () => g,
                x1: () => D
            });
            var i = r(79442),
                o = r(48698);

            function n() {
                (0, i.getVuex)().commit(o.ak(o.oA))
            }

            function s() {
                (0, i.getVuex)().commit(o.ak(o.a$))
            }

            function a() {
                return (0, i.getVuex)().getters[o.ak(o.N7)]
            }

            function c() {
                return (0, i.getVuex)().getters[o.ak(o.Lp)]
            }

            function u(t) {
                (0, i.getVuex)().commit(o.ak(o.S1), t)
            }

            function p() {
                return (0, i.getVuex)().getters[o.ak(o.C9)]
            }

            function l(t, e) {
                return (0, i.getVuex)().getters[o.ak(o.TU)](t, e)
            }

            function _() {
                return l().variantCount
            }

            function d() {
                return l().allVariantCount
            }

            function h() {
                return (0, i.getVuex)().getters[o.ak(o.a1)]
            }

            function I(t) {
                return (0, i.getVuex)().getters[o.ak(o.Nj)](t)
            }

            function y() {
                return (0, i.getVuex)().getters[o.ak(o.kO)]
            }

            function E() {
                return (0, i.getVuex)().getters[o.ak(o.ko)]
            }

            function g(t, e) {
                return (0, i.getVuex)().getters[o.ak(o.vv)](t, e)
            }

            function T(t) {
                (0, i.getVuex)().commit(o.ak(o.Ah), t)
            }

            function f() {
                return (0, i.getVuex)().getters[o.ak(o.l0)]
            }

            function A(t) {
                (0, i.getVuex)().commit(o.ak(o.nm), t)
            }

            function S(t) {
                return (0, i.getVuex)().getters[o.ak(o.XR)](t)
            }
            async function C(t, e, r) {
                return (0, i.getVuex)().dispatch(o.ak(o.kd), {
                    selectedPlacementId: t,
                    labelTemplateType: e,
                    updateLabelTemplateType: r
                })
            }

            function D(t) {
                return (0, i.getVuex)().getters[o.ak(o.x1)](t)
            }

            function hasEbayStockQuantityExceededError() {
                return (0, i.getVuex)().getters[o.ak(o.Aw)]()
            }

            function O() {
                return (0, i.moduleExistsAt)(o.cQ)
            }
        },
        48698: (t, e, r) => {
            r.d(e, {
                Ah: () => a,
                Aw: () => D,
                C5: () => S,
                C9: () => l,
                Lp: () => p,
                N7: () => u,
                Nj: () => E,
                S1: () => s,
                TU: () => d,
                XR: () => A,
                a$: () => n,
                a1: () => _,
                ak: () => P,
                cQ: () => i,
                cn: () => f,
                kO: () => g,
                kd: () => O,
                ko: () => T,
                l0: () => y,
                nm: () => c,
                oA: () => o,
                vW: () => I,
                vv: () => C,
                x1: () => h
            });
            const i = "designer/productModule/variants/",
                o = "m_resetState",
                n = "m_resetAllProductVariants",
                s = "m_setProductVariantLimit",
                a = "m_setVariantMapping",
                c = "m_setAllGeneratorVariants",
                u = "g_allProductVariants",
                p = "g_canRenderOOSWarning",
                l = "g_productVariantLimit",
                _ = "g_isProductVariantLimitExceeded",
                d = "g_getSelectedGeneratorVariants",
                h = "g_getSelectedVariants",
                I = "g_getVariantMapping",
                y = "g_getAllGeneratorVariants",
                E = "g_getSelectedMappings",
                g = "g_existingProductVariantData",
                T = "g_existingProductVariantCount",
                f = "g_isVariantExistingForProduct",
                A = "g_getFirstInsideLabelGeneratorVariantId",
                S = "g_getMockupInsideLabelGeneratorVariantId",
                C = "g_getGeneratorVariantFromVariantMapping",
                D = "g_hasEbayStockQuantityExceededError",
                O = "a_getFirstEmptyMockupVariant";

            function P(t) {
                return i + t
            }
        },
        51122: (t, e, r) => {
            r.d(e, {
                AN: () => h,
                E$: () => T,
                F9: () => I,
                GE: () => n,
                Hr: () => A,
                Io: () => D,
                M$: () => U,
                Oq: () => N,
                S3: () => E,
                Sd: () => C,
                Ub: () => l,
                V_: () => i,
                WK: () => a,
                Wi: () => B,
                Wq: () => o,
                ZA: () => d,
                _E: () => c,
                _M: () => _,
                _j: () => s,
                ar: () => v,
                de: () => P,
                gf: () => G,
                gj: () => L,
                hC: () => m,
                ml: () => p,
                nZ: () => u,
                nz: () => w,
                oG: () => b,
                pu: () => R,
                q9: () => f,
                uE: () => M,
                uj: () => g,
                wP: () => S,
                wT: () => y,
                yq: () => O
            });
            const i = "EMBROIDERY",
                o = "EMBROIDERY-PATCHES",
                n = "MUG",
                s = "POSTER",
                a = "FRAMED-POSTER",
                c = "CANVAS",
                u = "STICKER",
                p = "T-SHIRT",
                l = "DTFILM",
                _ = "SUBLIMATION",
                d = "PHONE-CASE",
                h = "CUT-SEW",
                I = "SHOES",
                y = "TOTE",
                E = "SCREENPRINT",
                g = "JEWELRY",
                T = "STOCK-PRODUCT",
                f = "POSTCARD",
                A = "DRINKWARE",
                S = "FABRIC",
                C = "PUZZLE",
                D = "CANDLE",
                O = "DECOR",
                P = "COSMETICS",
                m = "ENGRAVING",
                R = "HANG-TAG",
                L = "EMBROIDERY",
                N = "CUT-SEW",
                v = "LOGO",
                b = "PROMO",
                B = "DTFILM",
                G = [R, l],
                w = [p, l],
                M = {
                    isGroup: !0,
                    type: "PRINTING",
                    label: dlang("products", "Printing"),
                    techniques: []
                },
                U = "One size"
        },
        30663: (t, e, r) => {
            r.d(e, {
                $W: () => D,
                AW: () => rt,
                Aw: () => Z,
                BQ: () => X,
                BX: () => lt,
                Bv: () => j,
                D2: () => T,
                DA: () => R,
                EE: () => at,
                EU: () => L,
                FD: () => W,
                Gq: () => v,
                H1: () => et,
                Hu: () => yt,
                If: () => A,
                KF: () => _t,
                KK: () => g,
                KN: () => O,
                Lb: () => b,
                Ln: () => d,
                Lo: () => Q,
                Lw: () => $,
                MX: () => ct,
                Mb: () => m,
                NO: () => It,
                OS: () => z,
                PJ: () => y,
                PT: () => n,
                PU: () => w,
                Sv: () => S,
                TE: () => _,
                U$: () => C,
                Us: () => o,
                VL: () => J,
                Vu: () => ht,
                WB: () => q,
                Xg: () => c,
                Xk: () => V,
                Y2: () => U,
                YQ: () => G,
                Yw: () => h,
                ZB: () => H,
                aB: () => it,
                aM: () => B,
                aZ: () => I,
                bj: () => ot,
                c7: () => pt,
                cb: () => nt,
                cn: () => st,
                dG: () => a,
                fI: () => ut,
                iW: () => K,
                ju: () => F,
                lU: () => tt,
                mg: () => E,
                mp: () => Y,
                nZ: () => u,
                nq: () => x,
                pC: () => P,
                pV: () => k,
                qB: () => s,
                sb: () => f,
                tQ: () => N,
                uW: () => M,
                xD: () => dt,
                zX: () => l
            });
            var i = r(11876);
            const o = "ok",
                n = "unknown",
                s = "invalid",
                a = "warning",
                c = "default",
                u = "front",
                p = "front_large",
                l = "back",
                _ = "embroidery_front",
                d = "embroidery_back",
                h = "embroidery_left",
                I = "embroidery_right",
                y = "embroidery_chest_left",
                E = "embroidery_chest_right",
                g = "embroidery_chest_top_left",
                T = "embroidery_chest_center",
                f = "embroidery_large_center",
                A = "embroidery_large_corner_right",
                S = "embroidery_corner_left",
                C = "embroidery_corner_right",
                D = "embroidery_inside_left",
                O = "embroidery_inside_right",
                P = "embroidery_outside_left",
                m = "embroidery_outside_right",
                R = "embroidery_apparel_front",
                L = "embroidery_apparel_back",
                N = "embroidery_patch_front",
                v = "embroidery_sleeve_left_top",
                b = "embroidery_sleeve_right_top",
                B = "embroidery_wrist_left",
                G = "embroidery_wrist_right",
                w = "label_inside",
                M = "label_inside_dtf",
                U = "label_outside",
                H = "sleeve_left",
                F = "sleeve_right",
                V = "leg_left",
                Y = "leg_right",
                x = "leg_front_right",
                W = "leg_front_left",
                K = "leg_back_left",
                k = "leg_back_right",
                q = "top",
                z = "pocket",
                $ = "mockup",
                J = "hang_tag",
                Z = "background",
                j = "flat",
                X = "3d",
                Q = "both",
                tt = "adjustment",
                et = "hat",
                rt = "apparel",
                it = [_, h, I, d, R, L, T, f, A, y, E, g, S, C, D, O, P, m, N, v, b, B, G],
                ot = [f, A],
                nt = [_, h, I, d],
                st = [y, E, g, T, f, A, S, C, D, O, P, m, R, L, v, b, B, G],
                at = [p],
                ct = [w, M, U, J, Z],
                ut = [w, M, U],
                pt = [w, M],
                lt = [
                    [p],
                    [v, b],
                    [B, G]
                ],
                _t = [y, T, _],
                dt = "color",
                ht = "graphic",
                It = "gradient",
                yt = Object.freeze({
                    [_]: i.Pr,
                    [h]: i.wG,
                    [I]: i._q,
                    [d]: i.vP,
                    [y]: i.F$,
                    [E]: i.k3,
                    [g]: i.PF,
                    [T]: i.$o,
                    [f]: i.Z_,
                    [A]: i.z6,
                    [S]: i.eo,
                    [C]: i.$0,
                    [D]: i.J4,
                    [O]: i.SK,
                    [P]: i.Yw,
                    [m]: i.nq,
                    [R]: i.iw,
                    [L]: i.jl,
                    [N]: i.m1,
                    [v]: i.UG,
                    [b]: i.vZ,
                    [B]: i.LS,
                    [G]: i.ix
                })
        }
    }
]);